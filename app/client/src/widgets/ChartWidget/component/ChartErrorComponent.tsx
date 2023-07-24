import React, { useState } from "react";
import styled from "styled-components";
import { Collapse } from "@blueprintjs/core";
import { Button, Size, Text, TextType } from "@design-system/widgets-old";
import { messages } from "../constants";

const ChartErrorContainer = styled.div`
  height: 100%;
  width: 100%;
  background: var(--ads-v2-color-bg);
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}`;

const ErrorBox = styled.div`
  height: 60%;
  width: 80%;
  display: flex;
  align-items: center;
  flex-flow: column;
  gap: 8px;
}`;

const ErrorStack = styled.div`
  overflow-y: scroll;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  flex-shrink: 2;
`;

export interface ChartErrorProps {
  error: Error;
}

export function ChartErrorComponent(props: ChartErrorProps) {
  const [bodyCollapsed, setBodyCollapsed] = useState(true);

  const errorMessage = () => {
    const title = messages.ErrorTitle;
    const subheading = props.error.message;
    const body = props.error.stack ?? "";

    return {
      title: title,
      subheading: subheading,
      body: body,
    };
  };

  function toggleBody() {
    setBodyCollapsed(!bodyCollapsed);
  }

  const arrowIconName = () => {
    if (bodyCollapsed) {
      return "expand-more";
    } else {
      return "expand-less";
    }
  };

  return (
    <ChartErrorContainer>
      <ErrorBox>
        <Text type={TextType.H4}>{errorMessage().title}</Text>
        <Text type={TextType.H4}>{errorMessage().subheading}</Text>
        <ButtonWrapper>
          <Button
            icon={arrowIconName()}
            onClick={toggleBody}
            size={Size.medium}
            tag="button"
            text={messages.MoreDetails}
            width="200px"
          />
        </ButtonWrapper>
        <ErrorStack>
          <Collapse isOpen={!bodyCollapsed}>
            <Text type={TextType.P1}>{errorMessage().body}</Text>
          </Collapse>
        </ErrorStack>
      </ErrorBox>
    </ChartErrorContainer>
  );
}
