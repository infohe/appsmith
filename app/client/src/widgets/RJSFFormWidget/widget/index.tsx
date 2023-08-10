import React from "react";

import type { WidgetProps, WidgetState } from "widgets/BaseWidget";
import BaseWidget from "widgets/BaseWidget";
import type { DerivedPropertiesMap } from "utils/WidgetFactory";

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
          {
            helpText: "Show form data",
            propertyName: "formData",
            label: "Form Data",
            controlType: "INPUT_TEXT",
            placeholderText: "should be a json",
            isBindProperty: true,
            isTriggerProperty: false,
          },
        ],
      },
      {
        sectionName: "Events",
        children: [
          {
            helpText: "when the form data is changed",
            propertyName: "onFormDataChanged",
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
      formData: "defaultFormData",
    };
  }

  static getDerivedPropertiesMap(): DerivedPropertiesMap {
    return {
      schema: `{{ this.schema }}`,
      uischema: `{{ this.uischema }}`,
      formData: `{{ this.formData }}`,
    };
  }

  static getMetaPropertiesMap(): Record<string, any> {
    return {
      schema: "{}",
      uischema: "{}",
      formData: {},
    };
  }

  valueChangedHandler = (formData: any) => {
    this.props.updateWidgetMetaProperty("formData", formData.formData);
    this.props.updateWidgetMetaProperty("schema", formData.schema);
    this.props.updateMetaWidgetProperty("uischema", formData.uiSchema);
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
  defaultSchema?: string;
  schema: any;
  uischema: any;
  onFormDataChanged: { formData: any };
}

export default RJSFormWidget;
