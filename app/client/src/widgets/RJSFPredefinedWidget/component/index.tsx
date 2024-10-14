import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PredefinedGallery } from "@ginkgo-bioworks/react-json-schema-form-builder";
import type { ComponentProps } from "widgets/BaseComponent";
import type { CSSProperties } from "react";

interface Parameters {
  title?: string;
  items: {
    enum: string[];
  };
}
type OnChange = (newParameters: Parameters) => void;

function RJSFPredefinedComponent(props: RJSFPredefinedComponentProps) {
  const { onChange, schema, uischema } = props;
  const style: CSSProperties = {
    overflow: "auto",
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
      modalBody: () => <div>Extra editing options in modal appear here</div>,
    },
    multiSelectDropdown: {
      displayName: "Multi-select Dropdown",
      matchIf: [
        {
          types: ["array"],
          widget: "multiSelectDropdown",
        },
      ],
      defaultDataSchema: {
        type: "array",
        items: {
          type: "string",
          enum: [],
        },
        uniqueItems: true,
      },
      defaultUiSchema: {
        "ui:widget": "multiSelectDropdown",
      },
      type: "array",
      cardBody: (parameters: Parameters, onChange: OnChange) => (
        <div>
          <h5>Multi-select Dropdown</h5>
          <input
            onChange={(ev) =>
              onChange({ ...parameters, title: ev.target.value })
            }
            placeholder="Field Label"
            type="text"
            value={parameters.title || ""}
          />
        </div>
      ),
      modalBody: (parameters: Parameters, onChange: OnChange) => (
        <div>
          <h5>Options</h5>
          {(parameters.items.enum || []).map((option, index) => (
            <div key={index}>
              <input
                onChange={(ev) => {
                  const newEnum = [...parameters.items.enum];
                  newEnum[index] = ev.target.value;
                  onChange({
                    ...parameters,
                    items: { ...parameters.items, enum: newEnum },
                  });
                }}
                type="text"
                value={option}
              />
            </div>
          ))}
          <button
            onClick={() => {
              const newEnum = [...(parameters.items.enum || []), ""];
              onChange({
                ...parameters,
                items: { ...parameters.items, enum: newEnum },
              });
            }}
          >
            Add Option
          </button>
        </div>
      ),
    },
    multiSelectCheckbox: {
      displayName: "Multi-select Checkbox",
      matchIf: [
        {
          types: ["array"],
          widget: "multiSelectCheckbox",
        },
      ],
      defaultDataSchema: {
        type: "array",
        items: {
          type: "string",
          enum: [],
        },
        uniqueItems: true,
      },
      defaultUiSchema: {
        "ui:widget": "multiSelectCheckbox",
      },
      type: "array",
      cardBody: (parameters: Parameters, onChange: OnChange) => (
        <div>
          <h5>Multi-select Checkbox</h5>
          <input
            onChange={(ev) =>
              onChange({ ...parameters, title: ev.target.value })
            }
            placeholder="Field Label"
            type="text"
            value={parameters.title || ""}
          />
        </div>
      ),
      modalBody: (parameters: Parameters, onChange: OnChange) => (
        <div>
          <h5>Options</h5>
          {(parameters.items.enum || []).map((option, index) => (
            <div key={index}>
              <input
                onChange={(ev) => {
                  const newEnum = [...parameters.items.enum];
                  newEnum[index] = ev.target.value;
                  onChange({
                    ...parameters,
                    items: { ...parameters.items, enum: newEnum },
                  });
                }}
                type="text"
                value={option}
              />
            </div>
          ))}
          <button
            onClick={() => {
              const newEnum = [...(parameters.items.enum || []), ""];
              onChange({
                ...parameters,
                items: { ...parameters.items, enum: newEnum },
              });
            }}
          >
            Add Option
          </button>
        </div>
      ),
    },
  };

  return (
    <PredefinedGallery
      mods={{ customFormInputs }}
      onChange={onChange}
      schema={schema}
      style={style}
      uischema={uischema}
    />
  );
}

export interface RJSFPredefinedComponentProps extends ComponentProps {
  schema: any;
  uischema: any;
  onChange: (newSchema: string, newUiSchema: string) => void;
}

export default RJSFPredefinedComponent;
