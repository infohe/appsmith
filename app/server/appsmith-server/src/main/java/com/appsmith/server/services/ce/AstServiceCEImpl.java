package com.appsmith.server.services.ce;

import com.appsmith.external.helpers.MustacheHelper;
import com.appsmith.server.configurations.CommonConfig;
import com.appsmith.server.configurations.InstanceConfig;
import com.appsmith.util.WebClientUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.netty.resources.ConnectionProvider;
import reactor.util.function.Tuple2;

import java.time.Duration;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
public class AstServiceCEImpl implements AstServiceCE {

    private final CommonConfig commonConfig;

    private final InstanceConfig instanceConfig;

    private final WebClient webClient = WebClientUtils.create(ConnectionProvider.builder("rts-provider")
            .maxConnections(1000)
            .maxIdleTime(Duration.ofSeconds(5))
            .maxLifeTime(Duration.ofSeconds(10))
            .pendingAcquireTimeout(Duration.ofSeconds(5))
            .pendingAcquireMaxCount(-1)
            .evictInBackground(Duration.ofSeconds(60))
            .build());

    private final static long MAX_API_RESPONSE_TIME_IN_MS = 50;

    @Override
    public Flux<Tuple2<String, Set<String>>> getPossibleReferencesFromDynamicBinding(List<String> bindingValues, int evalVersion) {
        if (bindingValues == null || bindingValues.size() == 0) {
            return Flux.empty();
        }

        // If RTS server is not accessible for this instance, it means that this is a slim container set up
        // Proceed with assuming that all words need to be processed as possible entity references
        if (Boolean.FALSE.equals(instanceConfig.getIsRtsAccessible())) {
            return Flux.fromIterable(bindingValues)
                    .flatMap(
                            bindingValue -> {
                                return Mono.zip(Mono.just(bindingValue), Mono.just(new HashSet<>(MustacheHelper.getPossibleParentsOld(bindingValue))));
                            }
                    );
        }
        return webClient
                .post()
                .uri(commonConfig.getRtsBaseDomain() + "/rts-api/v1/ast/multiple-script-data")
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(new GetIdentifiersRequestBulk(bindingValues, evalVersion)))
                .retrieve()
                .bodyToMono(GetIdentifiersResponseBulk.class)
                .elapsed()
                .map(tuple -> {
                    log.debug("Time elapsed since AST get identifiers call: {} ms, for size: {}", tuple.getT1(), bindingValues.size());
                    return tuple.getT2().data;
                })
                .flatMapIterable(getIdentifiersResponseDetails -> getIdentifiersResponseDetails)
                .index()
                .flatMap(tuple2 -> {
                        long currentIndex = tuple2.getT1();
                        Set<String> references = tuple2.getT2().getReferences();
                        return Mono.zip(Mono.just(bindingValues.get((int) currentIndex)), Mono.just(references));
                });
        // TODO: add error handling scenario for when RTS is not accessible in fat container
    }

    @Override
    public Mono<Map<String, String>> refactorNameInDynamicBindings(Set<String> bindingValues, String oldName, String newName, int evalVersion) {
        if (bindingValues == null || bindingValues.isEmpty()) {
            return Mono.empty();
        }

        return Flux.fromIterable(bindingValues)
                .flatMap(bindingValue -> {
                    return webClient
                            .post()
                            .uri(commonConfig.getRtsBaseDomain() + "/rts-api/v1/ast/entity-refactor")
                            .contentType(MediaType.APPLICATION_JSON)
                            .body(BodyInserters.fromValue(new EntityRefactorRequest(bindingValue, oldName, newName, evalVersion)))
                            .retrieve()
                            .bodyToMono(EntityRefactorResponse.class)
                            .elapsed()
                            .map(tuple -> {
                                log.debug("Time elapsed since AST refactor call: {} ms", tuple.getT1());
                                if (tuple.getT1() > MAX_API_RESPONSE_TIME_IN_MS) {
                                    log.debug("This call took longer than expected. The binding was: {}", bindingValue);
                                }
                                return tuple.getT2();
                            })
                            .map(EntityRefactorResponse::getData)
                            .filter(details -> details.refactorCount > 0)
                            .flatMap(response -> Mono.just(bindingValue).zipWith(Mono.just(response.script)))
                            .onErrorResume(error -> {
                                var temp = bindingValue;
                                // If there is a problem with parsing and refactoring this binding, we just ignore it and move ahead
                                // The expectation is that this binding would error out during eval anyway
                                return Mono.empty();
                            });
                })
                .collect(Collectors.toMap(Tuple2::getT1, Tuple2::getT2));
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    static class GetIdentifiersRequest {
        String script;
        int evalVersion;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    static class GetIdentifiersRequestBulk {
        List<String> scripts;
        int evalVersion;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    static class GetIdentifiersResponse {
        GetIdentifiersResponseDetails data;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    static class GetIdentifiersResponseBulk {
        List<GetIdentifiersResponseDetails> data;
    }

    /**
     * Consider the following binding:
     * ( function(ignoredAction1) {
     * let a = ignoredAction1.data
     * let ignoredAction2 = { data: "nothing" }
     * let b = ignoredAction2.data
     * let c = "ignoredAction3.data"
     * // ignoredAction4.data
     * return aPostAction.data
     * } )(anotherPostAction.data)
     * <p/>
     * The values in the returned instance of GetIdentifiersResponseDetails will be:
     * {
     * references: ["aPostAction.data", "anotherPostAction.data"],
     * functionalParams: ["ignoredAction1"],
     * variables: ["ignoredAction2", "a", "b", "c"]
     */
    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    static class GetIdentifiersResponseDetails {
        Set<String> references;
        Set<String> functionalParams;
        Set<String> variables;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    static class EntityRefactorRequest {
        String script;
        String oldName;
        String newName;
        int evalVersion;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    static class EntityRefactorResponse {
        EntityRefactorResponseDetails data;
    }

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    static class EntityRefactorResponseDetails {
        String script;
        int referenceCount;
        int refactorCount;
    }
}
