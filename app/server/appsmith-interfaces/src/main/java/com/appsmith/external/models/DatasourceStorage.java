package com.appsmith.external.models;

import com.appsmith.external.views.Views;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.util.CollectionUtils;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document
public class DatasourceStorage extends BaseDomain {

    @JsonView(Views.Public.class)
    String datasourceId;

    @JsonView(Views.Public.class)
    String environmentId;

    @JsonView(Views.Public.class)
    DatasourceConfiguration datasourceConfiguration;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonView(Views.Public.class)
    Set<String> invalids = new HashSet<>();

    /*
     * - To return useful hints to the user.
     * - These messages are generated by the API server based on the other datasource attributes.
     */
    @Transient
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonView(Views.Public.class)
    Set<String> messages = new HashSet<>();

    @Transient
    String name;

    @Transient
    String pluginId;

    @Transient
    String pluginName;

    @Transient
    String workspaceId;

    @Transient
    String templateName;

    @Transient
    Boolean isAutoGenerated;

    @Transient
    Boolean isConfigured;

    @Transient
    Boolean isRecentlyCreated;

    @Transient
    Boolean isTemplate;

    @Transient
    Boolean isMock;

    public DatasourceStorage(String datasourceId,
                             String environmentId,
                             DatasourceConfiguration datasourceConfiguration,
                             Set<String> invalids,
                             Set<String> messages) {

        this.datasourceId = datasourceId;
        this.environmentId = environmentId;
        this.datasourceConfiguration = datasourceConfiguration;
        this.invalids = new HashSet<>();
        if (invalids != null) {
            this.invalids.addAll(invalids);
        }
        if (messages != null) {
            this.messages = messages;
        }
    }

    // TODO: Get rid of this after migration
    public DatasourceStorage(Datasource datasource, String environmentId) {
        this.datasourceId = datasource.getId();
        this.environmentId = environmentId;
        this.datasourceConfiguration = datasource.getDatasourceConfiguration();
        this.invalids = new HashSet<>();
        this.prepareTransientFields(datasource);
    }

    public DatasourceStorage(DatasourceStorageDTO datasourceStorageDTO) {
        this.setId(datasourceStorageDTO.getId());
        this.datasourceId = datasourceStorageDTO.getDatasourceId();
        this.environmentId = datasourceStorageDTO.getEnvironmentId();
        this.datasourceConfiguration = datasourceStorageDTO.getDatasourceConfiguration();
        if (datasourceStorageDTO.invalids != null) {
            this.invalids.addAll(datasourceStorageDTO.getInvalids());
        }
        if (datasourceStorageDTO.getMessages() != null) {
            this.messages.addAll(datasourceStorageDTO.getMessages());
        }
    }

    public void prepareTransientFields(Datasource datasource) {
        this.datasourceId = datasource.getId();
        this.name = datasource.getName();
        this.pluginId = datasource.getPluginId();
        this.pluginName = datasource.getPluginName();
        this.workspaceId = datasource.getWorkspaceId();
        this.templateName = datasource.getTemplateName();
        this.isAutoGenerated = datasource.getIsAutoGenerated();
        this.isConfigured = datasource.getIsConfigured();
        this.isRecentlyCreated = datasource.getIsRecentlyCreated();
        this.isTemplate = datasource.getIsTemplate();
        this.isMock = datasource.getIsMock();

        if (datasource.getInvalids() != null) {
            this.invalids.addAll(datasource.getInvalids());
        }
    }

    @JsonView(Views.Public.class)
    public boolean getIsValid() {
        return CollectionUtils.isEmpty(invalids);
    }
}
