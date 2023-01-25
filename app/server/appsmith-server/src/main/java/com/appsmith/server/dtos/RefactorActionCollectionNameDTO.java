package com.appsmith.server.dtos;

import com.appsmith.external.models.Views;
import com.fasterxml.jackson.annotation.JsonView;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RefactorActionCollectionNameDTO {
    @JsonView(Views.Api.class)
    String actionCollectionId;

    @JsonView(Views.Api.class)
    String pageId;

    @JsonView(Views.Api.class)
    String layoutId;

    @JsonView(Views.Api.class)
    String oldName;

    @JsonView(Views.Api.class)
    String newName;
}
