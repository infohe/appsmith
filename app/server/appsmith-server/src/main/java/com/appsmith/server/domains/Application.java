package com.appsmith.server.domains;

import com.appsmith.external.models.BaseDomain;
import com.appsmith.external.models.Views;
import com.appsmith.server.dtos.CustomJSLibApplicationDTO;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
import com.querydsl.core.annotations.QueryEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static com.appsmith.server.constants.ResourceModes.EDIT;
import static com.appsmith.server.constants.ResourceModes.VIEW;
import static com.appsmith.server.helpers.DateUtils.ISO_FORMATTER;

@Getter
@Setter
@ToString
@NoArgsConstructor
@QueryEntity
@Document
public class Application extends BaseDomain {

    @NotNull
    @JsonView(Views.Api.class)
    String name;

    //Organizations migrated to workspaces, kept the field as deprecated to support the old migration
    @Deprecated
    @JsonView(Views.Api.class)
    String organizationId;

    @JsonView(Views.Api.class)
    String workspaceId;

    /*
    TODO: remove default values from application.
     */
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @Deprecated(forRemoval = true)
    @JsonView(Views.Api.class)
    Boolean isPublic = false;

    @JsonView(Views.Api.class)
    List<ApplicationPage> pages;

    @JsonView(Views.Internal.class)
    List<ApplicationPage> publishedPages;

    @JsonView(Views.Internal.class)
    @Transient
    Boolean viewMode = false;

    @Transient
    @JsonView(Views.Api.class)
    boolean appIsExample = false;

    @Transient
    @JsonView(Views.Api.class)
    long unreadCommentThreads;

    @JsonView(Views.Internal.class)
    String clonedFromApplicationId;

    @JsonView(Views.Api.class)
    String color;

    @JsonView(Views.Api.class)
    String icon;

    @JsonView(Views.Api.class)
    private String slug;

    @JsonView(Views.Internal.class)
    AppLayout unpublishedAppLayout;

    @JsonView(Views.Internal.class)
    AppLayout publishedAppLayout;

    @JsonView(Views.Api.class)
    Set<CustomJSLibApplicationDTO> unpublishedCustomJSLibs;

    @JsonView(Views.Api.class)
    Set<CustomJSLibApplicationDTO> publishedCustomJSLibs;

    @JsonView(Views.Api.class)
    GitApplicationMetadata gitApplicationMetadata;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonView(Views.Api.class)
    Instant lastDeployedAt; // when this application was last deployed

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @JsonView(Views.Api.class)
    Integer evaluationVersion;

    /**
     * applicationVersion will be used when we've a breaking change in application, and it's not possible to write a
     * migration. User need to update the application manually.
     * In such cases, we can use this field to determine whether we need to notify user about that breaking change
     * so that they can update their application.
     * Once updated, we should set applicationVersion to latest version as well.
     */
    @JsonView(Views.Api.class)
    Integer applicationVersion;

    /**
     * Changing name, change in pages, widgets and datasources will set lastEditedAt.
     * Other activities e.g. changing policy will not change this property.
     * We're adding JsonIgnore here because it'll be exposed as modifiedAt to keep it backward compatible
     */
    @JsonView(Views.Internal.class)
    Instant lastEditedAt;

    @JsonView(Views.Api.class)
    EmbedSetting embedSetting;

    @JsonView(Views.Internal.class)
    NavigationSetting unpublishedNavigationSetting;

    @JsonView(Views.Internal.class)
    NavigationSetting publishedNavigationSetting;

    @JsonView(Views.Internal.class)
    AppPositioning publishedAppPositioning;

    @JsonView(Views.Internal.class)
    AppPositioning unpublishedAppPositioning;

    /**
     * Earlier this was returning value of the updatedAt property in the base domain.
     * As this property is modified by the framework when there is any change in domain,
     * a new property lastEditedAt has been added to track the edit actions from users.
     * This method exposes that property.
     * @return updated time as a string
     */
    @JsonProperty(value = "modifiedAt", access = JsonProperty.Access.READ_ONLY)
    @JsonView(Views.Api.class)
    public String getLastUpdateTime() {
        if(lastEditedAt != null) {
            return ISO_FORMATTER.format(lastEditedAt);
        }
        return null;
    }

    @JsonView(Views.Api.class)
    public String getLastDeployedAt() {
        if(lastDeployedAt != null) {
            return ISO_FORMATTER.format(lastDeployedAt);
        }
        return null;
    }

    @JsonView(Views.Api.class)
    Boolean forkingEnabled;

    // Field to convey if the application is updated by the user
    @JsonView(Views.Api.class)
    Boolean isManualUpdate;

    // Field to convey if the application is modified from the DB migration
    @Transient
    @JsonView(Views.Api.class)
    Boolean isAutoUpdate;

    // To convey current schema version for client and server. This will be used to check if we run the migration
    // between 2 commits if the application is connected to git
    @JsonView(Views.Internal.class)
    Integer clientSchemaVersion;

    @JsonView(Views.Internal.class)
    Integer serverSchemaVersion;

    @JsonView(Views.Internal.class)
    String publishedModeThemeId;

    @JsonView(Views.Internal.class)
    String editModeThemeId;

    // TODO Temporary provision for exporting the application with datasource configuration for the sample/template apps
    @JsonView(Views.Api.class)
    Boolean exportWithConfiguration;

    @JsonView(Views.Internal.class)
    @Deprecated
    String defaultPermissionGroup;

    // This constructor is used during clone application. It only deeply copies selected fields. The rest are either
    // initialized newly or is left up to the calling function to set.
    public Application(Application application) {
        super();
        this.workspaceId = application.getWorkspaceId();
        this.pages = new ArrayList<>();
        this.publishedPages = new ArrayList<>();
        this.clonedFromApplicationId = application.getId();
        this.color = application.getColor();
        this.icon = application.getIcon();
        this.unpublishedAppLayout = application.getUnpublishedAppLayout() == null ? null : new AppLayout(application.getUnpublishedAppLayout().type);
        this.publishedAppLayout = application.getPublishedAppLayout() == null ? null : new AppLayout(application.getPublishedAppLayout().type);
        this.unpublishedAppPositioning = application.getUnpublishedAppPositioning() == null ? null : new AppPositioning(application.getUnpublishedAppPositioning().type);
        this.publishedAppPositioning = application.getPublishedAppPositioning() == null ? null : new AppPositioning(application.getPublishedAppPositioning().type);
        this.unpublishedNavigationSetting = application.getUnpublishedNavigationSetting() == null ? null : new NavigationSetting();
        this.publishedNavigationSetting = application.getPublishedNavigationSetting() == null ? null : new NavigationSetting();
        this.unpublishedCustomJSLibs = application.getUnpublishedCustomJSLibs();
    }

    public void exportApplicationPages(final Map<String, String> pageIdToNameMap) {
        for (ApplicationPage applicationPage : this.getPages()) {
            applicationPage.setId(pageIdToNameMap.get(applicationPage.getId() + EDIT));
            applicationPage.setDefaultPageId(null);
        }
        for (ApplicationPage applicationPage : this.getPublishedPages()) {
            applicationPage.setId(pageIdToNameMap.get(applicationPage.getId() + VIEW));
            applicationPage.setDefaultPageId(null);
        }
    }

    public void sanitiseToExportDBObject() {
        this.setWorkspaceId(null);
        this.setOrganizationId(null);
        this.setModifiedBy(null);
        this.setCreatedBy(null);
        this.setLastDeployedAt(null);
        this.setLastEditedAt(null);
        this.setGitApplicationMetadata(null);
        this.setEditModeThemeId(null);
        this.setPublishedModeThemeId(null);
        this.setClientSchemaVersion(null);
        this.setServerSchemaVersion(null);
        this.setIsManualUpdate(false);
        this.sanitiseToExportBaseObject();
        this.setDefaultPermissionGroup(null);
        this.setPublishedCustomJSLibs(new HashSet<>());
    }

    public List<ApplicationPage> getPages() {
        return Boolean.TRUE.equals(viewMode) ? publishedPages : pages;
    }

    public AppLayout getAppLayout() {
        return Boolean.TRUE.equals(viewMode) ? publishedAppLayout : unpublishedAppLayout;
    }

    public void setAppLayout(AppLayout appLayout) {
        if (Boolean.TRUE.equals(viewMode)) {
            publishedAppLayout = appLayout;
        } else {
            unpublishedAppLayout = appLayout;
        }
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AppLayout implements Serializable {
        Type type;

        /**
         * @deprecated The following field is deprecated and now removed, because it's needed in a migration. After the
         * migration has been run, it may be removed (along with the migration or there'll be compile errors there).
         */
        @JsonView(Views.Internal.class)
        @Deprecated(forRemoval = true)
        Integer width = null;

        public AppLayout(Type type) {
            this.type = type;
        }

        public enum Type {
            DESKTOP,
            TABLET_LARGE,
            TABLET,
            MOBILE,
            FLUID,
        }
    }

    /**
     * EmbedSetting is used for embedding Appsmith apps on other platforms
     */
    @Data
    public static class EmbedSetting {

        @JsonView(Views.Api.class)
        private String height;

        @JsonView(Views.Api.class)
        private String width;

        @JsonView(Views.Api.class)
        private Boolean showNavigationBar;
    }

    public NavigationSetting getNavigationSetting() {
        return Boolean.TRUE.equals(viewMode) ? publishedNavigationSetting : unpublishedNavigationSetting;
    }

    public void setNavigationSetting(NavigationSetting navigationSetting) {
        if (Boolean.TRUE.equals(viewMode)) {
            publishedNavigationSetting = navigationSetting;
        } else {
            unpublishedNavigationSetting = navigationSetting;
        }
    }

    /**
     * NavigationSetting stores the navigation configuration for the app
     */
    @Data
    public static class NavigationSetting {
        @JsonView(Views.Api.class)
        private Boolean showNavbar;

        @JsonView(Views.Api.class)
        private String orientation;

        @JsonView(Views.Api.class)
        private String navStyle;

        @JsonView(Views.Api.class)
        private String position;

        @JsonView(Views.Api.class)
        private String itemStyle;

        @JsonView(Views.Api.class)
        private String colorStyle;

        @JsonView(Views.Api.class)
        private String logoAssetId;

        @JsonView(Views.Api.class)
        private String logoConfiguration;

        @JsonView(Views.Api.class)
        private Boolean showSignIn;

        @JsonView(Views.Api.class)
        private Boolean showShareApp;
    }

    public AppPositioning getAppPositioning() {
        return Boolean.TRUE.equals(viewMode) ? publishedAppPositioning : unpublishedAppPositioning;
    }

    public void setAppPositioning(AppPositioning appPositioning) {
        if (Boolean.TRUE.equals(viewMode)) {
            publishedAppPositioning = appPositioning;
        } else {
            unpublishedAppPositioning = appPositioning;
        }
    }

    /**
     * AppPositioning captures widget positioning Mode of the application
     */
    @Data
    @NoArgsConstructor
    public static class AppPositioning {
        @JsonView(Views.Api.class)
        Type type;

        public AppPositioning(Type type) {
            this.type = type;
        }

        public enum Type {
            FIXED,
            AUTO
        }

    }


}
