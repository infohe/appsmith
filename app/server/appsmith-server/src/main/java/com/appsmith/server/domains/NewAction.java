package com.appsmith.server.domains;

import com.appsmith.external.models.BaseDomain;
import com.appsmith.external.models.Documentation;
import com.appsmith.external.models.PluginType;
import com.appsmith.external.models.Views;
import com.fasterxml.jackson.annotation.JsonView;
import com.appsmith.external.models.ActionDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Document
public class NewAction extends BaseDomain {

    // Fields in action that are not allowed to change between published and unpublished versions
    @JsonView(Views.Api.class)
    String applicationId;

    //Organizations migrated to workspaces, kept the field as deprecated to support the old migration
    @Deprecated
    @JsonView(Views.Api.class)
    String organizationId;

    @JsonView(Views.Api.class)
    String workspaceId;

    @JsonView(Views.Api.class)
    PluginType pluginType;

    @JsonView(Views.Api.class)
    String pluginId;

    @JsonView(Views.Api.class)
    String templateId; //If action is created via a template, store the id here.

    @JsonView(Views.Api.class)
    String providerId; //If action is created via a template, store the template's provider id here.

    @JsonView(Views.Api.class)
    Documentation documentation; // Documentation for the template using which this action was created

    // Action specific fields that are allowed to change between published and unpublished versions
    @JsonView(Views.Api.class)
    ActionDTO unpublishedAction;

    @JsonView(Views.Api.class)
    ActionDTO publishedAction;

    public void sanitiseToExportDBObject() {
        this.setTemplateId(null);
        this.setApplicationId(null);
        this.setOrganizationId(null);
        this.setWorkspaceId(null);
        this.setProviderId(null);
        this.setDocumentation(null);
        ActionDTO unpublishedAction = this.getUnpublishedAction();
        if (unpublishedAction != null) {
            unpublishedAction.sanitiseToExportDBObject();
        }
        ActionDTO publishedAction = this.getPublishedAction();
        if (publishedAction != null) {
            publishedAction.sanitiseToExportDBObject();
        }
        this.sanitiseToExportBaseObject();
    }

}
