import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "@rjsf/core";
import type { ComponentProps } from "widgets/BaseComponent";
import { customizeValidator } from "@rjsf/validator-ajv6";

const validator = customizeValidator({});

function RJSFormComponent(props: RJSFormComponentProps) {
  const {
    formData: initFormData,
    onChange,
    schema: initSchema,
    uischema: initUischema,
  } = props;

  return (
    <Form
      formData={initFormData}
      onChange={onChange}
      schema={initSchema}
      // submitButtonMessage={"Submit"}
      uiSchema={initUischema}
      validator={validator}
    />
  );
}

export interface RJSFormComponentProps extends ComponentProps {
  formData: any;
  schema: any;
  uischema: any;
  onChange: (newFormData: any) => void;
}

export default RJSFormComponent;
