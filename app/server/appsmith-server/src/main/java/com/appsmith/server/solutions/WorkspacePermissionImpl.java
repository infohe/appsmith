/* Copyright 2019-2023 Appsmith */
package com.appsmith.server.solutions;

import com.appsmith.server.solutions.ce.WorkspacePermissionCEImpl;
import org.springframework.stereotype.Component;

@Component
public class WorkspacePermissionImpl extends WorkspacePermissionCEImpl
	implements WorkspacePermission {}
