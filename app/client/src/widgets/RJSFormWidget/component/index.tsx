import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "@rjsf/core";
import type { ComponentProps } from "widgets/BaseComponent";
import { customizeValidator } from "@rjsf/validator-ajv6";

const validator = customizeValidator({});

function RJSFormComponent(props: RJSFormComponentProps) {
  const { formData, onChange, schema, uischema } = props;

  return (
    <Form
      /* eslint-disable react/no-children-prop */
      children
      formData={formData}
      onChange={onChange}
      schema={schema || {}}
      uiSchema={uischema || {}}
      validator={validator}
    />
  );
}

export interface RJSFormComponentProps extends ComponentProps {
  formData: any;
  schema: any;
  uischema: any;
  onChange: any;
}

export default RJSFormComponent;
