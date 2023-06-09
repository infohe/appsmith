function cov_1v6luqgqfe() {
  var path = "/Users/apple/github/appsmith/app/client/src/pages/Editor/IntegrationEditor/mockData/index.ts";
  var hash = "ff5461bc303042c2730c5edc166299951863c933";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/apple/github/appsmith/app/client/src/pages/Editor/IntegrationEditor/mockData/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "1": {
        start: {
          line: 41,
          column: 31
        },
        end: {
          line: 97,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ff5461bc303042c2730c5edc166299951863c933"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1v6luqgqfe = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1v6luqgqfe();
import { getAssetUrl } from "@appsmith/utils/airgapHelpers";
import { ASSETS_CDN_URL } from "constants/ThirdPartyConstants";
import { PluginPackageName } from "entities/Action";
export const mockPlugins = (cov_1v6luqgqfe().s[0]++, [{
  id: "623a809913b3311bd5e77228",
  userPermissions: [],
  name: "PostgreSQL",
  type: "DB",
  packageName: PluginPackageName.POSTGRES,
  iconLocation: getAssetUrl(`${ASSETS_CDN_URL}/logo/postgresql.svg`),
  documentationLink: "https://docs.appsmith.com/v/v1.2.1/datasource-reference/querying-postgres",
  responseType: "TABLE",
  uiComponent: "DbEditorForm",
  datasourceComponent: "AutoForm",
  generateCRUDPageComponent: "PostgreSQL",
  defaultInstall: true,
  allowUserDatasources: true,
  remotePlugin: false,
  new: false
}, {
  id: "623a809913b3311bd5e77229",
  userPermissions: [],
  name: "REST API",
  type: "API",
  packageName: PluginPackageName.REST_API,
  iconLocation: getAssetUrl(`${ASSETS_CDN_URL}/RestAPI.png`),
  uiComponent: "ApiEditorForm",
  datasourceComponent: "RestAPIDatasourceForm",
  defaultInstall: true,
  allowUserDatasources: true,
  templates: {},
  remotePlugin: false,
  new: false
}]);
export const mockDatasources = (cov_1v6luqgqfe().s[1]++, [{
  id: "623ab2519b867130d3ed1c27",
  userPermissions: ["execute:datasources", "manage:datasources", "read:datasources"],
  gitSyncId: "623a80d613b3311bd5e77308_623ab2519b867130d3ed1c26",
  name: "Mock Database",
  pluginId: "623a809913b3311bd5e77228",
  workspaceId: "623a80d613b3311bd5e77308",
  datasourceConfiguration: {
    connection: {
      mode: "READ_WRITE",
      ssl: {
        authType: "DEFAULT"
      }
    },
    endpoints: [{
      host: "fake-api.cvuydmurdlas.us-east-1.rds.amazonaws.com",
      port: 5432
    }],
    sshProxyEnabled: false
  },
  invalids: [],
  messages: [],
  isConfigured: true,
  isValid: true,
  new: false
}, {
  id: "623abc8b9b867130d3ed1c43",
  userPermissions: ["execute:datasources", "manage:datasources", "read:datasources"],
  gitSyncId: "623a80d613b3311bd5e77308_623abc8b9b867130d3ed1c42",
  name: "Test",
  pluginId: "623a809913b3311bd5e77229",
  workspaceId: "623a80d613b3311bd5e77308",
  datasourceConfiguration: {
    connection: {
      ssl: {
        authType: "DEFAULT"
      }
    },
    sshProxyEnabled: false,
    properties: [{
      key: "isSendSessionEnabled",
      value: "N"
    }, {
      key: "sessionSignatureKey",
      value: ""
    }],
    url: "Test",
    headers: [],
    queryParameters: []
  },
  invalids: [],
  messages: [],
  isConfigured: true,
  isValid: true,
  new: false
}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXY2bHVxZ3FmZSIsImFjdHVhbENvdmVyYWdlIiwiZ2V0QXNzZXRVcmwiLCJBU1NFVFNfQ0ROX1VSTCIsIlBsdWdpblBhY2thZ2VOYW1lIiwibW9ja1BsdWdpbnMiLCJzIiwiaWQiLCJ1c2VyUGVybWlzc2lvbnMiLCJuYW1lIiwidHlwZSIsInBhY2thZ2VOYW1lIiwiUE9TVEdSRVMiLCJpY29uTG9jYXRpb24iLCJkb2N1bWVudGF0aW9uTGluayIsInJlc3BvbnNlVHlwZSIsInVpQ29tcG9uZW50IiwiZGF0YXNvdXJjZUNvbXBvbmVudCIsImdlbmVyYXRlQ1JVRFBhZ2VDb21wb25lbnQiLCJkZWZhdWx0SW5zdGFsbCIsImFsbG93VXNlckRhdGFzb3VyY2VzIiwicmVtb3RlUGx1Z2luIiwibmV3IiwiUkVTVF9BUEkiLCJ0ZW1wbGF0ZXMiLCJtb2NrRGF0YXNvdXJjZXMiLCJnaXRTeW5jSWQiLCJwbHVnaW5JZCIsIndvcmtzcGFjZUlkIiwiZGF0YXNvdXJjZUNvbmZpZ3VyYXRpb24iLCJjb25uZWN0aW9uIiwibW9kZSIsInNzbCIsImF1dGhUeXBlIiwiZW5kcG9pbnRzIiwiaG9zdCIsInBvcnQiLCJzc2hQcm94eUVuYWJsZWQiLCJpbnZhbGlkcyIsIm1lc3NhZ2VzIiwiaXNDb25maWd1cmVkIiwiaXNWYWxpZCIsInByb3BlcnRpZXMiLCJrZXkiLCJ2YWx1ZSIsInVybCIsImhlYWRlcnMiLCJxdWVyeVBhcmFtZXRlcnMiXSwic291cmNlcyI6WyJpbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBc3NldFVybCB9IGZyb20gXCJAYXBwc21pdGgvdXRpbHMvYWlyZ2FwSGVscGVyc1wiO1xuaW1wb3J0IHsgQVNTRVRTX0NETl9VUkwgfSBmcm9tIFwiY29uc3RhbnRzL1RoaXJkUGFydHlDb25zdGFudHNcIjtcbmltcG9ydCB7IFBsdWdpblBhY2thZ2VOYW1lIH0gZnJvbSBcImVudGl0aWVzL0FjdGlvblwiO1xuXG5leHBvcnQgY29uc3QgbW9ja1BsdWdpbnMgPSBbXG4gIHtcbiAgICBpZDogXCI2MjNhODA5OTEzYjMzMTFiZDVlNzcyMjhcIixcbiAgICB1c2VyUGVybWlzc2lvbnM6IFtdLFxuICAgIG5hbWU6IFwiUG9zdGdyZVNRTFwiLFxuICAgIHR5cGU6IFwiREJcIixcbiAgICBwYWNrYWdlTmFtZTogUGx1Z2luUGFja2FnZU5hbWUuUE9TVEdSRVMsXG4gICAgaWNvbkxvY2F0aW9uOiBnZXRBc3NldFVybChgJHtBU1NFVFNfQ0ROX1VSTH0vbG9nby9wb3N0Z3Jlc3FsLnN2Z2ApLFxuICAgIGRvY3VtZW50YXRpb25MaW5rOlxuICAgICAgXCJodHRwczovL2RvY3MuYXBwc21pdGguY29tL3YvdjEuMi4xL2RhdGFzb3VyY2UtcmVmZXJlbmNlL3F1ZXJ5aW5nLXBvc3RncmVzXCIsXG4gICAgcmVzcG9uc2VUeXBlOiBcIlRBQkxFXCIsXG4gICAgdWlDb21wb25lbnQ6IFwiRGJFZGl0b3JGb3JtXCIsXG4gICAgZGF0YXNvdXJjZUNvbXBvbmVudDogXCJBdXRvRm9ybVwiLFxuICAgIGdlbmVyYXRlQ1JVRFBhZ2VDb21wb25lbnQ6IFwiUG9zdGdyZVNRTFwiLFxuICAgIGRlZmF1bHRJbnN0YWxsOiB0cnVlLFxuICAgIGFsbG93VXNlckRhdGFzb3VyY2VzOiB0cnVlLFxuICAgIHJlbW90ZVBsdWdpbjogZmFsc2UsXG4gICAgbmV3OiBmYWxzZSxcbiAgfSxcbiAge1xuICAgIGlkOiBcIjYyM2E4MDk5MTNiMzMxMWJkNWU3NzIyOVwiLFxuICAgIHVzZXJQZXJtaXNzaW9uczogW10sXG4gICAgbmFtZTogXCJSRVNUIEFQSVwiLFxuICAgIHR5cGU6IFwiQVBJXCIsXG4gICAgcGFja2FnZU5hbWU6IFBsdWdpblBhY2thZ2VOYW1lLlJFU1RfQVBJLFxuICAgIGljb25Mb2NhdGlvbjogZ2V0QXNzZXRVcmwoYCR7QVNTRVRTX0NETl9VUkx9L1Jlc3RBUEkucG5nYCksXG4gICAgdWlDb21wb25lbnQ6IFwiQXBpRWRpdG9yRm9ybVwiLFxuICAgIGRhdGFzb3VyY2VDb21wb25lbnQ6IFwiUmVzdEFQSURhdGFzb3VyY2VGb3JtXCIsXG4gICAgZGVmYXVsdEluc3RhbGw6IHRydWUsXG4gICAgYWxsb3dVc2VyRGF0YXNvdXJjZXM6IHRydWUsXG4gICAgdGVtcGxhdGVzOiB7fSxcbiAgICByZW1vdGVQbHVnaW46IGZhbHNlLFxuICAgIG5ldzogZmFsc2UsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbW9ja0RhdGFzb3VyY2VzID0gW1xuICB7XG4gICAgaWQ6IFwiNjIzYWIyNTE5Yjg2NzEzMGQzZWQxYzI3XCIsXG4gICAgdXNlclBlcm1pc3Npb25zOiBbXG4gICAgICBcImV4ZWN1dGU6ZGF0YXNvdXJjZXNcIixcbiAgICAgIFwibWFuYWdlOmRhdGFzb3VyY2VzXCIsXG4gICAgICBcInJlYWQ6ZGF0YXNvdXJjZXNcIixcbiAgICBdLFxuICAgIGdpdFN5bmNJZDogXCI2MjNhODBkNjEzYjMzMTFiZDVlNzczMDhfNjIzYWIyNTE5Yjg2NzEzMGQzZWQxYzI2XCIsXG4gICAgbmFtZTogXCJNb2NrIERhdGFiYXNlXCIsXG4gICAgcGx1Z2luSWQ6IFwiNjIzYTgwOTkxM2IzMzExYmQ1ZTc3MjI4XCIsXG4gICAgd29ya3NwYWNlSWQ6IFwiNjIzYTgwZDYxM2IzMzExYmQ1ZTc3MzA4XCIsXG4gICAgZGF0YXNvdXJjZUNvbmZpZ3VyYXRpb246IHtcbiAgICAgIGNvbm5lY3Rpb246IHsgbW9kZTogXCJSRUFEX1dSSVRFXCIsIHNzbDogeyBhdXRoVHlwZTogXCJERUZBVUxUXCIgfSB9LFxuICAgICAgZW5kcG9pbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBob3N0OiBcImZha2UtYXBpLmN2dXlkbXVyZGxhcy51cy1lYXN0LTEucmRzLmFtYXpvbmF3cy5jb21cIixcbiAgICAgICAgICBwb3J0OiA1NDMyLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNzaFByb3h5RW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBpbnZhbGlkczogW10sXG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIGlzQ29uZmlndXJlZDogdHJ1ZSxcbiAgICBpc1ZhbGlkOiB0cnVlLFxuICAgIG5ldzogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBpZDogXCI2MjNhYmM4YjliODY3MTMwZDNlZDFjNDNcIixcbiAgICB1c2VyUGVybWlzc2lvbnM6IFtcbiAgICAgIFwiZXhlY3V0ZTpkYXRhc291cmNlc1wiLFxuICAgICAgXCJtYW5hZ2U6ZGF0YXNvdXJjZXNcIixcbiAgICAgIFwicmVhZDpkYXRhc291cmNlc1wiLFxuICAgIF0sXG4gICAgZ2l0U3luY0lkOiBcIjYyM2E4MGQ2MTNiMzMxMWJkNWU3NzMwOF82MjNhYmM4YjliODY3MTMwZDNlZDFjNDJcIixcbiAgICBuYW1lOiBcIlRlc3RcIixcbiAgICBwbHVnaW5JZDogXCI2MjNhODA5OTEzYjMzMTFiZDVlNzcyMjlcIixcbiAgICB3b3Jrc3BhY2VJZDogXCI2MjNhODBkNjEzYjMzMTFiZDVlNzczMDhcIixcbiAgICBkYXRhc291cmNlQ29uZmlndXJhdGlvbjoge1xuICAgICAgY29ubmVjdGlvbjogeyBzc2w6IHsgYXV0aFR5cGU6IFwiREVGQVVMVFwiIH0gfSxcbiAgICAgIHNzaFByb3h5RW5hYmxlZDogZmFsc2UsXG4gICAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAgIHsga2V5OiBcImlzU2VuZFNlc3Npb25FbmFibGVkXCIsIHZhbHVlOiBcIk5cIiB9LFxuICAgICAgICB7IGtleTogXCJzZXNzaW9uU2lnbmF0dXJlS2V5XCIsIHZhbHVlOiBcIlwiIH0sXG4gICAgICBdLFxuICAgICAgdXJsOiBcIlRlc3RcIixcbiAgICAgIGhlYWRlcnM6IFtdLFxuICAgICAgcXVlcnlQYXJhbWV0ZXJzOiBbXSxcbiAgICB9LFxuICAgIGludmFsaWRzOiBbXSxcbiAgICBtZXNzYWdlczogW10sXG4gICAgaXNDb25maWd1cmVkOiB0cnVlLFxuICAgIGlzVmFsaWQ6IHRydWUsXG4gICAgbmV3OiBmYWxzZSxcbiAgfSxcbl07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBQSxjQUFBLFlBQUFBLENBQUE7TUFBQSxPQUFBQyxjQUFBO0lBQUE7RUFBQTtFQUFBLE9BQUFBLGNBQUE7QUFBQTtBQUFBRCxjQUFBO0FBZlosU0FBU0UsV0FBVyxRQUFRLCtCQUErQjtBQUMzRCxTQUFTQyxjQUFjLFFBQVEsK0JBQStCO0FBQzlELFNBQVNDLGlCQUFpQixRQUFRLGlCQUFpQjtBQUVuRCxPQUFPLE1BQU1DLFdBQVcsSUFBQUwsY0FBQSxHQUFBTSxDQUFBLE9BQUcsQ0FDekI7RUFDRUMsRUFBRSxFQUFFLDBCQUEwQjtFQUM5QkMsZUFBZSxFQUFFLEVBQUU7RUFDbkJDLElBQUksRUFBRSxZQUFZO0VBQ2xCQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxXQUFXLEVBQUVQLGlCQUFpQixDQUFDUSxRQUFRO0VBQ3ZDQyxZQUFZLEVBQUVYLFdBQVcsQ0FBRSxHQUFFQyxjQUFlLHNCQUFxQixDQUFDO0VBQ2xFVyxpQkFBaUIsRUFDZiwyRUFBMkU7RUFDN0VDLFlBQVksRUFBRSxPQUFPO0VBQ3JCQyxXQUFXLEVBQUUsY0FBYztFQUMzQkMsbUJBQW1CLEVBQUUsVUFBVTtFQUMvQkMseUJBQXlCLEVBQUUsWUFBWTtFQUN2Q0MsY0FBYyxFQUFFLElBQUk7RUFDcEJDLG9CQUFvQixFQUFFLElBQUk7RUFDMUJDLFlBQVksRUFBRSxLQUFLO0VBQ25CQyxHQUFHLEVBQUU7QUFDUCxDQUFDLEVBQ0Q7RUFDRWYsRUFBRSxFQUFFLDBCQUEwQjtFQUM5QkMsZUFBZSxFQUFFLEVBQUU7RUFDbkJDLElBQUksRUFBRSxVQUFVO0VBQ2hCQyxJQUFJLEVBQUUsS0FBSztFQUNYQyxXQUFXLEVBQUVQLGlCQUFpQixDQUFDbUIsUUFBUTtFQUN2Q1YsWUFBWSxFQUFFWCxXQUFXLENBQUUsR0FBRUMsY0FBZSxjQUFhLENBQUM7RUFDMURhLFdBQVcsRUFBRSxlQUFlO0VBQzVCQyxtQkFBbUIsRUFBRSx1QkFBdUI7RUFDNUNFLGNBQWMsRUFBRSxJQUFJO0VBQ3BCQyxvQkFBb0IsRUFBRSxJQUFJO0VBQzFCSSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0VBQ2JILFlBQVksRUFBRSxLQUFLO0VBQ25CQyxHQUFHLEVBQUU7QUFDUCxDQUFDLENBQ0Y7QUFFRCxPQUFPLE1BQU1HLGVBQWUsSUFBQXpCLGNBQUEsR0FBQU0sQ0FBQSxPQUFHLENBQzdCO0VBQ0VDLEVBQUUsRUFBRSwwQkFBMEI7RUFDOUJDLGVBQWUsRUFBRSxDQUNmLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsa0JBQWtCLENBQ25CO0VBQ0RrQixTQUFTLEVBQUUsbURBQW1EO0VBQzlEakIsSUFBSSxFQUFFLGVBQWU7RUFDckJrQixRQUFRLEVBQUUsMEJBQTBCO0VBQ3BDQyxXQUFXLEVBQUUsMEJBQTBCO0VBQ3ZDQyx1QkFBdUIsRUFBRTtJQUN2QkMsVUFBVSxFQUFFO01BQUVDLElBQUksRUFBRSxZQUFZO01BQUVDLEdBQUcsRUFBRTtRQUFFQyxRQUFRLEVBQUU7TUFBVTtJQUFFLENBQUM7SUFDaEVDLFNBQVMsRUFBRSxDQUNUO01BQ0VDLElBQUksRUFBRSxtREFBbUQ7TUFDekRDLElBQUksRUFBRTtJQUNSLENBQUMsQ0FDRjtJQUNEQyxlQUFlLEVBQUU7RUFDbkIsQ0FBQztFQUNEQyxRQUFRLEVBQUUsRUFBRTtFQUNaQyxRQUFRLEVBQUUsRUFBRTtFQUNaQyxZQUFZLEVBQUUsSUFBSTtFQUNsQkMsT0FBTyxFQUFFLElBQUk7RUFDYm5CLEdBQUcsRUFBRTtBQUNQLENBQUMsRUFDRDtFQUNFZixFQUFFLEVBQUUsMEJBQTBCO0VBQzlCQyxlQUFlLEVBQUUsQ0FDZixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLGtCQUFrQixDQUNuQjtFQUNEa0IsU0FBUyxFQUFFLG1EQUFtRDtFQUM5RGpCLElBQUksRUFBRSxNQUFNO0VBQ1prQixRQUFRLEVBQUUsMEJBQTBCO0VBQ3BDQyxXQUFXLEVBQUUsMEJBQTBCO0VBQ3ZDQyx1QkFBdUIsRUFBRTtJQUN2QkMsVUFBVSxFQUFFO01BQUVFLEdBQUcsRUFBRTtRQUFFQyxRQUFRLEVBQUU7TUFBVTtJQUFFLENBQUM7SUFDNUNJLGVBQWUsRUFBRSxLQUFLO0lBQ3RCSyxVQUFVLEVBQUUsQ0FDVjtNQUFFQyxHQUFHLEVBQUUsc0JBQXNCO01BQUVDLEtBQUssRUFBRTtJQUFJLENBQUMsRUFDM0M7TUFBRUQsR0FBRyxFQUFFLHFCQUFxQjtNQUFFQyxLQUFLLEVBQUU7SUFBRyxDQUFDLENBQzFDO0lBQ0RDLEdBQUcsRUFBRSxNQUFNO0lBQ1hDLE9BQU8sRUFBRSxFQUFFO0lBQ1hDLGVBQWUsRUFBRTtFQUNuQixDQUFDO0VBQ0RULFFBQVEsRUFBRSxFQUFFO0VBQ1pDLFFBQVEsRUFBRSxFQUFFO0VBQ1pDLFlBQVksRUFBRSxJQUFJO0VBQ2xCQyxPQUFPLEVBQUUsSUFBSTtFQUNibkIsR0FBRyxFQUFFO0FBQ1AsQ0FBQyxDQUNGIn0=