package com.appsmith.server.dtos;

import com.appsmith.external.constants.ErrorReferenceDocUrl;
import com.appsmith.external.models.Views;
import com.fasterxml.jackson.annotation.JsonView;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GitDocsDTO {
    @JsonView(Views.Api.class)
    ErrorReferenceDocUrl docKey;

    @JsonView(Views.Api.class)
    String docUrl;
}
