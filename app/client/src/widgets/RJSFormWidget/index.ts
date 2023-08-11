import Widget from "./widget";
import IconSVG from "./icon.svg";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "RJSForm", // The display name which will be made in uppercase and show in the widgets panel ( can have spaces )
  iconSVG: IconSVG,
  needsMeta: true, // Defines if this widget adds any meta properties
  isCanvas: false, // Defines if this widget has a canvas within in which we can drop other widgets
  features: {
    dynamicHeight: {
      sectionIndex: 0, // Index of the property pane "General" section
      active: false,
    },
  },
  defaults: {
    widgetName: "RJSForm",
    rows: 30,
    columns: 80,
    version: 1,
    schema: {},
    uischema: {},
    formData: {},
  },
  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    contentConfig: Widget.getPropertyPaneContentConfig(),
    styleConfig: Widget.getPropertyPaneStyleConfig(),
    autocompleteDefinitions: Widget.getAutocompleteDefinitions(),
  },
};

export default Widget;
