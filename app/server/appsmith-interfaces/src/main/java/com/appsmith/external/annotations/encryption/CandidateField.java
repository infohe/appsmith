/* Copyright 2019-2023 Appsmith */
package com.appsmith.external.annotations.encryption;

import java.lang.reflect.Field;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CandidateField {
private Field field;
private Type type;

enum Type {
	ANNOTATED_FIELD,
	APPSMITH_FIELD_KNOWN,
	APPSMITH_FIELD_UNKNOWN,
	APPSMITH_FIELD_POLYMORPHIC,
	APPSMITH_COLLECTION_KNOWN,
	APPSMITH_COLLECTION_UNKNOWN,
	APPSMITH_COLLECTION_POLYMORPHIC,
	APPSMITH_MAP_KNOWN,
	APPSMITH_MAP_UNKNOWN,
	APPSMITH_MAP_POLYMORPHIC
}
}
