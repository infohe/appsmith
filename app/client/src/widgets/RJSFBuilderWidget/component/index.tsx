import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormBuilder } from "@ginkgo-bioworks/react-json-schema-form-builder";
import type { ComponentProps } from "widgets/BaseComponent";
import type { CSSProperties } from "react";

function RJSFBuilderComponent(props: RJSFBuilderComponentProps) {
  const { onChange, schema: initSchema, uischema: initUischema } = props;
  const style: CSSProperties = {
    overflow: "auto !important",
    height: "auto !important",
  };

  return (
    <FormBuilder
      onChange={onChange}
      schema={initSchema}
      style={style}
      uischema={initUischema}
    />
  );
}

export interface RJSFBuilderComponentProps extends ComponentProps {
  schema: any;
  uischema: any;
  onChange: (newSchema: string, newUiSchema: string) => void;
}

export default RJSFBuilderComponent;
