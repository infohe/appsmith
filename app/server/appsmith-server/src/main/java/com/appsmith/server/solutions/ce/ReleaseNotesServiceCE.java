/* Copyright 2019-2023 Appsmith */
package com.appsmith.server.solutions.ce;

import com.appsmith.server.dtos.ReleaseNode;
import java.util.List;
import reactor.core.publisher.Mono;

public interface ReleaseNotesServiceCE {

Mono<List<ReleaseNode>> getReleaseNodes();

String computeNewFrom(String version);

String getReleasedVersion();

String getRunningVersion();

void refreshReleaseNotes();

List<ReleaseNode> getReleaseNodesCache();

void setReleaseNodesCache(List<ReleaseNode> nodes);
}
