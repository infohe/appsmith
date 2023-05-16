package com.appsmith.server.solutions.ce;

import com.appsmith.external.models.Datasource;
import com.appsmith.server.domains.Application;
import com.appsmith.server.domains.User;
import com.appsmith.server.domains.Workspace;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;


public interface ExamplesWorkspaceClonerCE {

    Mono<Workspace> cloneExamplesWorkspace();

    Mono<Workspace> cloneWorkspaceForUser(
            String templateWorkspaceId,
            User user,
            Flux<Application> applicationFlux,
            Flux<Datasource> datasourceFlux
    );

    Mono<List<String>> cloneApplications(String toWorkspaceId, Flux<Application> applicationFlux, String environmentId);

    Mono<List<String>> cloneApplications(
            String toWorkspaceId,
            Flux<Application> applicationFlux,
            Flux<Datasource> datasourceFlux,
            String environmentId);
}
