package com.appsmith.server.helpers;

import com.appsmith.server.configurations.CloudServicesConfig;
import com.appsmith.server.configurations.CommonConfig;
import com.appsmith.server.helpers.ce.InstanceConfigHelperCEImpl;
import com.appsmith.server.services.ConfigService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class InstanceConfigHelperImpl extends InstanceConfigHelperCEImpl implements InstanceConfigHelper {
    public InstanceConfigHelperImpl(
            ConfigService configService,
            CloudServicesConfig cloudServicesConfig,
            CommonConfig commonConfig,
            ApplicationContext applicationContext,
            @Value("${spring.data.mongodb.uri}") String mongoDBUrl) {
        super(configService, cloudServicesConfig, commonConfig, applicationContext, mongoDBUrl);
    }
}
