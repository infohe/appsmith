import React from "react";

import type { WidgetProps, WidgetState } from "widgets/BaseWidget";
import BaseWidget from "widgets/BaseWidget";
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
            propertyName: "schema",
            label: "Schema",
            controlType: "INPUT_TEXT",
            placeholderText: "should be a json",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          {
            helpText: "Show schema",
            propertyName: "uischema",
            label: "UI Schema",
            controlType: "INPUT_TEXT",
            placeholderText: "should be a json",
            isBindProperty: true,
            isTriggerProperty: false,
          },
          // {
          //   helpText: "Show form data",
          //   propertyName: "formData",
          //   label: "Form Data",
          //   controlType: "INPUT_TEXT",
          //   placeholderText: "should be a json",
          //   isBindProperty: true,
          //   isTriggerProperty: false,
          // },
        ],
      },
    ];
  }

  static getPropertyPaneStyleConfig() {
    return [];
  }

  // static getDefaultPropertiesMap(): Record<string, string> {
  //   return {
  //     formData: "defaultFormData",
  //   };
  // }

  static getMetaPropertiesMap(): Record<string, any> {
    return {
      formData: undefined,
    };
  }

  valueChangedHandler = (data: any) => {
    this.props.updateWidgetMetaProperty("formData", data.formData);
  };

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
  schema: any;
  uischema: any;
  formData: any;
  onChange: any;
}

export default RJSFormWidget;
