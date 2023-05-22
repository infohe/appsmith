/* Copyright 2019-2023 Appsmith */
package com.appsmith.server.solutions.ce;

import com.appsmith.server.acl.AclPermission;

public interface WorkspacePermissionCE {
AclPermission getDeletePermission();

AclPermission getApplicationCreatePermission();

AclPermission getDatasourceCreatePermission();
}
