package com.appsmith.server.domains;

import com.appsmith.external.models.Views;
import com.appsmith.server.events.CommentNotificationEvent;
import com.fasterxml.jackson.annotation.JsonView;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@EqualsAndHashCode(callSuper = true)
@Document
public class CommentNotification extends Notification {
    @JsonView(Views.Api.class)
    CommentNotificationEvent event;
    @JsonView(Views.Api.class)
    Comment comment;
}
