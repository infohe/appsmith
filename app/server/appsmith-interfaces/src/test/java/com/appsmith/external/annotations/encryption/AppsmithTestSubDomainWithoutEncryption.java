/* Copyright 2019-2023 Appsmith */
package com.appsmith.external.annotations.encryption;

import com.appsmith.external.models.AppsmithDomain;
import lombok.Data;

@Data
public class AppsmithTestSubDomainWithoutEncryption implements AppsmithDomain {
String notEncryptedInSubDomain;
}
