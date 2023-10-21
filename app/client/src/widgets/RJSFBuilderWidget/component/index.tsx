import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormBuilder } from "@ginkgo-bioworks/react-json-schema-form-builder";
import type { ComponentProps } from "widgets/BaseComponent";
import type { CSSProperties } from "react";

function RJSFBuilderComponent(props: RJSFBuilderComponentProps) {
  const { onChange, schema, uischema } = props;
  const style: CSSProperties = {
    overflow: "auto !important",
    height: "auto !important",
  };
  const customFormInputs = {
    hidden: {
      displayName: "Hidden",
      matchIf: [
        {
          types: ["string"],
          widget: "hidden",
        },
      ],
      defaultDataSchema: {},
      defaultUiSchema: {
        "ui:widget": "hidden",
      },
      type: "string",
      cardBody: () => (
        <div>
          <h5>This is a hidden field</h5>
        </div>
      ),
      modalBody: () => <div>Extra editing options in modal appear hear</div>,
    },
  };

  return (
    <FormBuilder
      mods={{ customFormInputs }}
      onChange={onChange}
      schema={schema}
      style={style}
      uischema={uischema}
    />
  );
}

export interface RJSFBuilderComponentProps extends ComponentProps {
  schema: any;
  uischema: any;
  onChange: (newSchema: string, newUiSchema: string) => void;
}

export default RJSFBuilderComponent;
