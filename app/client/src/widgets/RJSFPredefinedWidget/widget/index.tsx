import React from "react";

import type { WidgetProps, WidgetState } from "widgets/BaseWidget";
import BaseWidget from "widgets/BaseWidget";
import type { SetterConfig } from "entities/AppTheming";
import { ValidationTypes } from "constants/WidgetValidation";
// import type { DerivedPropertiesMap } from "utils/WidgetFactory";

import RJSFPredefinedComponent from "../component";

class RJSFPredefinedWidget extends BaseWidget<
  RJSFPredefinedWidgetProps,
  WidgetState
> {
  static getPropertyPaneContentConfig() {
    return [
      {
        sectionName: "General",
        children: [
          {
            helpText: "Show schema",
            propertyName: "defaultSchema",
            label: "Schema",
            controlType: "INPUT_TEXT",
            placeholderText: "should be a json",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            helpText: "Show ui schema",
            propertyName: "defaultUischema",
            label: "UI Schema",
            controlType: "INPUT_TEXT",
            placeholderText: "should be a json",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            helpText: "Controls the visibility of the widget",
            propertyName: "isVisible",
            label: "Visible",
            controlType: "SWITCH",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: false,
            validation: { type: ValidationTypes.BOOLEAN },
          },
        ],
      },
      {
        sectionName: "Events",
        children: [
          {
            helpText: "when the schema is changed",
            propertyName: "onSchemaChanged",
            label: "onChange",
            controlType: "ACTION_SELECTOR",
            isJSConvertible: true,
            isBindProperty: true,
            isTriggerProperty: true,
          },
        ],
      },
    ];
  }

  static getPropertyPaneStyleConfig() {
    return [];
  }

  static getDefaultPropertiesMap(): Record<string, string> {
    return {
      schema: "defaultSchema",
      uischema: "defaultUischema",
    };
  }

  // static getDerivedPropertiesMap(): DerivedPropertiesMap {
  //   return {
  //     schema: `{{ this.schema }}`,
  //     uischema: `{{ this.uischema }}`,
  //   };
  // }

  static getMetaPropertiesMap(): Record<string, any> {
    return {
      schema: undefined,
      uischema: undefined,
    };
  }

  valueChangedHandler = (schema: string, uischema: string) => {
    this.props.updateWidgetMetaProperty("schema", schema);

    this.props.updateWidgetMetaProperty("uischema", uischema);
  };

  static getSetterConfig(): SetterConfig {
    return {
      __setters: {
        setSchema: {
          path: "defaultSchema",
          type: "string",
          accessor: "schema",
        },
        setUISchema: {
          path: "defaultUischema",
          type: "string",
          accessor: "uischema",
        },
      },
    };
  }

  getPageView() {
    const { schema, uischema } = this.props;

    return (
      <RJSFPredefinedComponent
        onChange={this.valueChangedHandler}
        schema={schema}
        uischema={uischema}
        widgetId={this.props.widgetId}
      />
    );
  }

  static getWidgetType(): string {
    return "RJSFPREDEFINED_WIDGET";
  }

  static getStylesheetConfig() {
    return {
      borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
      boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    };
  }
}

export interface RJSFPredefinedWidgetProps extends WidgetProps {
  defaultSchema?: string;
  defaultUiSchema?: string;
  schema: any;
  uischema: any;
  onSchemaChanged: { schema: string; uischema: string };
}

export default RJSFPredefinedWidget;
