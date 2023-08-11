import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "@rjsf/core";
import type { ComponentProps } from "widgets/BaseComponent";

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
      schema={JSON.parse(initSchema)}
      // submitButtonMessage={"Submit"}
      uiSchema={JSON.parse(initUischema)}
      validator={"a"}
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
