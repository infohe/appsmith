package com.appsmith.server.dtos;

import com.appsmith.server.domains.ScreenType;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

import lombok.Getter;
import lombok.Setter;
import net.minidev.json.JSONObject;
import com.appsmith.external.exceptions.ErrorDTO;
import com.appsmith.external.models.Views;

import org.springframework.data.annotation.Transient;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Getter
@Setter
public class LayoutDTO {

    @JsonView(Views.Api.class)
    private String id;

    @JsonView(Views.Api.class)
    ScreenType screen;

    @JsonView(Views.Api.class)
    JSONObject dsl;

    @JsonView(Views.Api.class)
    List<Set<DslActionDTO>> layoutOnLoadActions;

    // this attribute will be used to display errors caused white calculating allOnLoadAction PageLoadActionsUtilCEImpl.java
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonView(Views.Api.class)
    List<ErrorDTO> layoutOnLoadActionErrors;

    // All the actions which have been updated as part of updateLayout function call
    @JsonView(Views.Api.class)
    List<LayoutActionUpdateDTO> actionUpdates;

    // All the toast messages that the developer user should be displayed to inform about the consequences of update layout.
    @JsonView(Views.Api.class)
    List<String> messages;

    @JsonView(Views.Api.class)
    public Set<String> userPermissions = new HashSet<>();
}
