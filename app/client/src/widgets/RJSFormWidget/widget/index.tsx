import React from "react";

import type { WidgetProps, WidgetState } from "widgets/BaseWidget";
import BaseWidget from "widgets/BaseWidget";
import type { SetterConfig } from "entities/AppTheming";
import { ValidationTypes } from "constants/WidgetValidation";
// import type { DerivedPropertiesMap } from "utils/WidgetFactory";

import RJSFormComponent from "../component";

class RJSFormWidget extends BaseWidget<RJSFormWidgetProps, WidgetState> {
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
            helpText: "Show schema",
            propertyName: "defaultUischema",
            label: "UI Schema",
            controlType: "INPUT_TEXT",
            placeholderText: "should be a json",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            helpText: "Show form data",
            propertyName: "defaultFormData",
            label: "Form Data",
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
    ];
  }

  static getPropertyPaneStyleConfig() {
    return [];
  }

  static getDefaultPropertiesMap(): Record<string, string> {
    return {
      uischema: "defaultUischema",
      schema: "defaultSchema",
      formData: "defaultFormData",
    };
  }

  static getMetaPropertiesMap(): Record<string, any> {
    return {
      formData: undefined,
    };
  }

  valueChangedHandler = (data: any) => {
    this.props.updateWidgetMetaProperty("formData", data.formData);
  };

  static getSetterConfig(): SetterConfig {
    return {
      __setters: {
        setValue: {
          path: "defaultFormData",
          type: "object",
          accessor: "formData",
        },
      },
    };
  }

  getPageView() {
    const { formData, schema, uischema } = this.props;

    return (
      <RJSFormComponent
        formData={formData}
        onChange={this.valueChangedHandler}
        schema={schema}
        uischema={uischema}
        widgetId={this.props.widgetId}
      />
    );
  }

  static getWidgetType(): string {
    return "RJSFORM_WIDGET";
  }

  static getStylesheetConfig() {
    return {
      borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
      boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    };
  }
}

export interface RJSFormWidgetProps extends WidgetProps {
  defaultFormData: any;
  defaultSchema: any;
  defaultUischema: any;
  schema: any;
  uischema: any;
  formData: any;
  onChange: any;
}

export default RJSFormWidget;
