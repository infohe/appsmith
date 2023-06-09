function cov_2p53rpa3js() {
  var path = "/Users/apple/github/appsmith/app/client/src/widgets/CategorySliderWidget/widget/propertyConfig/styleConfig.ts";
  var hash = "31611913bc2ef11de19b4b40fa81c6664e8e23df";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/apple/github/appsmith/app/client/src/widgets/CategorySliderWidget/widget/propertyConfig/styleConfig.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "31611913bc2ef11de19b4b40fa81c6664e8e23df"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2p53rpa3js = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2p53rpa3js();
import { ValidationTypes } from "constants/WidgetValidation";
import { isAutoLayout } from "utils/autoLayout/flexWidgetUtils";
export default [{
  sectionName: "General",
  children: [{
    helpText: "Controls the size of the slider",
    propertyName: "sliderSize",
    label: "Size",
    controlType: "ICON_TABS",
    fullWidth: true,
    defaultValue: "m",
    options: [{
      label: "S",
      value: "s",
      subText: "4px"
    }, {
      label: "M",
      value: "m",
      subText: "6px"
    }, {
      label: "L",
      value: "l",
      subText: "8px"
    }],
    isBindProperty: true,
    isTriggerProperty: false,
    validation: {
      type: ValidationTypes.TEXT
    }
  }]
}, {
  sectionName: "Label styles",
  children: [{
    propertyName: "labelTextColor",
    label: "Font color",
    helpText: "Control the color of the label associated",
    controlType: "COLOR_PICKER",
    isJSConvertible: true,
    isBindProperty: true,
    isTriggerProperty: false,
    validation: {
      type: ValidationTypes.TEXT
    }
  }, {
    propertyName: "labelTextSize",
    label: "Font size",
    helpText: "Control the font size of the label associated",
    controlType: "DROP_DOWN",
    defaultValue: "0.875rem",
    hidden: isAutoLayout,
    options: [{
      label: "S",
      value: "0.875rem",
      subText: "0.875rem"
    }, {
      label: "M",
      value: "1rem",
      subText: "1rem"
    }, {
      label: "L",
      value: "1.25rem",
      subText: "1.25rem"
    }, {
      label: "XL",
      value: "1.875rem",
      subText: "1.875rem"
    }, {
      label: "XXL",
      value: "3rem",
      subText: "3rem"
    }, {
      label: "3XL",
      value: "3.75rem",
      subText: "3.75rem"
    }],
    isJSConvertible: true,
    isBindProperty: true,
    isTriggerProperty: false,
    validation: {
      type: ValidationTypes.TEXT
    }
  }, {
    propertyName: "labelStyle",
    label: "Emphasis",
    helpText: "Control if the label should be bold or italics",
    controlType: "BUTTON_GROUP",
    options: [{
      icon: "text-bold",
      value: "BOLD"
    }, {
      icon: "text-italic",
      value: "ITALIC"
    }],
    isJSConvertible: true,
    isBindProperty: true,
    isTriggerProperty: false,
    validation: {
      type: ValidationTypes.TEXT
    }
  }]
}, {
  sectionName: "Color",
  children: [{
    helpText: "Sets the fill color of the widget",
    propertyName: "accentColor",
    label: "Fill color",
    controlType: "COLOR_PICKER",
    isJSConvertible: true,
    isBindProperty: true,
    isTriggerProperty: false,
    validation: {
      type: ValidationTypes.TEXT
    }
  }]
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMnA1M3JwYTNqcyIsImFjdHVhbENvdmVyYWdlIiwiVmFsaWRhdGlvblR5cGVzIiwiaXNBdXRvTGF5b3V0Iiwic2VjdGlvbk5hbWUiLCJjaGlsZHJlbiIsImhlbHBUZXh0IiwicHJvcGVydHlOYW1lIiwibGFiZWwiLCJjb250cm9sVHlwZSIsImZ1bGxXaWR0aCIsImRlZmF1bHRWYWx1ZSIsIm9wdGlvbnMiLCJ2YWx1ZSIsInN1YlRleHQiLCJpc0JpbmRQcm9wZXJ0eSIsImlzVHJpZ2dlclByb3BlcnR5IiwidmFsaWRhdGlvbiIsInR5cGUiLCJURVhUIiwiaXNKU0NvbnZlcnRpYmxlIiwiaGlkZGVuIiwiaWNvbiJdLCJzb3VyY2VzIjpbInN0eWxlQ29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25UeXBlcyB9IGZyb20gXCJjb25zdGFudHMvV2lkZ2V0VmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaXNBdXRvTGF5b3V0IH0gZnJvbSBcInV0aWxzL2F1dG9MYXlvdXQvZmxleFdpZGdldFV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHNlY3Rpb25OYW1lOiBcIkdlbmVyYWxcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBoZWxwVGV4dDogXCJDb250cm9scyB0aGUgc2l6ZSBvZiB0aGUgc2xpZGVyXCIsXG4gICAgICAgIHByb3BlcnR5TmFtZTogXCJzbGlkZXJTaXplXCIsXG4gICAgICAgIGxhYmVsOiBcIlNpemVcIixcbiAgICAgICAgY29udHJvbFR5cGU6IFwiSUNPTl9UQUJTXCIsXG4gICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIm1cIixcbiAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlNcIixcbiAgICAgICAgICAgIHZhbHVlOiBcInNcIixcbiAgICAgICAgICAgIHN1YlRleHQ6IFwiNHB4XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJNXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJtXCIsXG4gICAgICAgICAgICBzdWJUZXh0OiBcIjZweFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiTFwiLFxuICAgICAgICAgICAgdmFsdWU6IFwibFwiLFxuICAgICAgICAgICAgc3ViVGV4dDogXCI4cHhcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBpc0JpbmRQcm9wZXJ0eTogdHJ1ZSxcbiAgICAgICAgaXNUcmlnZ2VyUHJvcGVydHk6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0aW9uOiB7IHR5cGU6IFZhbGlkYXRpb25UeXBlcy5URVhUIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBzZWN0aW9uTmFtZTogXCJMYWJlbCBzdHlsZXNcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwcm9wZXJ0eU5hbWU6IFwibGFiZWxUZXh0Q29sb3JcIixcbiAgICAgICAgbGFiZWw6IFwiRm9udCBjb2xvclwiLFxuICAgICAgICBoZWxwVGV4dDogXCJDb250cm9sIHRoZSBjb2xvciBvZiB0aGUgbGFiZWwgYXNzb2NpYXRlZFwiLFxuICAgICAgICBjb250cm9sVHlwZTogXCJDT0xPUl9QSUNLRVJcIixcbiAgICAgICAgaXNKU0NvbnZlcnRpYmxlOiB0cnVlLFxuICAgICAgICBpc0JpbmRQcm9wZXJ0eTogdHJ1ZSxcbiAgICAgICAgaXNUcmlnZ2VyUHJvcGVydHk6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0aW9uOiB7IHR5cGU6IFZhbGlkYXRpb25UeXBlcy5URVhUIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9wZXJ0eU5hbWU6IFwibGFiZWxUZXh0U2l6ZVwiLFxuICAgICAgICBsYWJlbDogXCJGb250IHNpemVcIixcbiAgICAgICAgaGVscFRleHQ6IFwiQ29udHJvbCB0aGUgZm9udCBzaXplIG9mIHRoZSBsYWJlbCBhc3NvY2lhdGVkXCIsXG4gICAgICAgIGNvbnRyb2xUeXBlOiBcIkRST1BfRE9XTlwiLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiMC44NzVyZW1cIixcbiAgICAgICAgaGlkZGVuOiBpc0F1dG9MYXlvdXQsXG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJTXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCIwLjg3NXJlbVwiLFxuICAgICAgICAgICAgc3ViVGV4dDogXCIwLjg3NXJlbVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiTVwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiMXJlbVwiLFxuICAgICAgICAgICAgc3ViVGV4dDogXCIxcmVtXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJMXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCIxLjI1cmVtXCIsXG4gICAgICAgICAgICBzdWJUZXh0OiBcIjEuMjVyZW1cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIlhMXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCIxLjg3NXJlbVwiLFxuICAgICAgICAgICAgc3ViVGV4dDogXCIxLjg3NXJlbVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6IFwiWFhMXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCIzcmVtXCIsXG4gICAgICAgICAgICBzdWJUZXh0OiBcIjNyZW1cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIjNYTFwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiMy43NXJlbVwiLFxuICAgICAgICAgICAgc3ViVGV4dDogXCIzLjc1cmVtXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaXNKU0NvbnZlcnRpYmxlOiB0cnVlLFxuICAgICAgICBpc0JpbmRQcm9wZXJ0eTogdHJ1ZSxcbiAgICAgICAgaXNUcmlnZ2VyUHJvcGVydHk6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0aW9uOiB7IHR5cGU6IFZhbGlkYXRpb25UeXBlcy5URVhUIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm9wZXJ0eU5hbWU6IFwibGFiZWxTdHlsZVwiLFxuICAgICAgICBsYWJlbDogXCJFbXBoYXNpc1wiLFxuICAgICAgICBoZWxwVGV4dDogXCJDb250cm9sIGlmIHRoZSBsYWJlbCBzaG91bGQgYmUgYm9sZCBvciBpdGFsaWNzXCIsXG4gICAgICAgIGNvbnRyb2xUeXBlOiBcIkJVVFRPTl9HUk9VUFwiLFxuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogXCJ0ZXh0LWJvbGRcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIkJPTERcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGljb246IFwidGV4dC1pdGFsaWNcIixcbiAgICAgICAgICAgIHZhbHVlOiBcIklUQUxJQ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGlzSlNDb252ZXJ0aWJsZTogdHJ1ZSxcbiAgICAgICAgaXNCaW5kUHJvcGVydHk6IHRydWUsXG4gICAgICAgIGlzVHJpZ2dlclByb3BlcnR5OiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGlvbjogeyB0eXBlOiBWYWxpZGF0aW9uVHlwZXMuVEVYVCB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgc2VjdGlvbk5hbWU6IFwiQ29sb3JcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBoZWxwVGV4dDogXCJTZXRzIHRoZSBmaWxsIGNvbG9yIG9mIHRoZSB3aWRnZXRcIixcbiAgICAgICAgcHJvcGVydHlOYW1lOiBcImFjY2VudENvbG9yXCIsXG4gICAgICAgIGxhYmVsOiBcIkZpbGwgY29sb3JcIixcbiAgICAgICAgY29udHJvbFR5cGU6IFwiQ09MT1JfUElDS0VSXCIsXG4gICAgICAgIGlzSlNDb252ZXJ0aWJsZTogdHJ1ZSxcbiAgICAgICAgaXNCaW5kUHJvcGVydHk6IHRydWUsXG4gICAgICAgIGlzVHJpZ2dlclByb3BlcnR5OiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGlvbjogeyB0eXBlOiBWYWxpZGF0aW9uVHlwZXMuVEVYVCB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixTQUFTRSxlQUFlLFFBQVEsNEJBQTRCO0FBQzVELFNBQVNDLFlBQVksUUFBUSxrQ0FBa0M7QUFFL0QsZUFBZSxDQUNiO0VBQ0VDLFdBQVcsRUFBRSxTQUFTO0VBQ3RCQyxRQUFRLEVBQUUsQ0FDUjtJQUNFQyxRQUFRLEVBQUUsaUNBQWlDO0lBQzNDQyxZQUFZLEVBQUUsWUFBWTtJQUMxQkMsS0FBSyxFQUFFLE1BQU07SUFDYkMsV0FBVyxFQUFFLFdBQVc7SUFDeEJDLFNBQVMsRUFBRSxJQUFJO0lBQ2ZDLFlBQVksRUFBRSxHQUFHO0lBQ2pCQyxPQUFPLEVBQUUsQ0FDUDtNQUNFSixLQUFLLEVBQUUsR0FBRztNQUNWSyxLQUFLLEVBQUUsR0FBRztNQUNWQyxPQUFPLEVBQUU7SUFDWCxDQUFDLEVBQ0Q7TUFDRU4sS0FBSyxFQUFFLEdBQUc7TUFDVkssS0FBSyxFQUFFLEdBQUc7TUFDVkMsT0FBTyxFQUFFO0lBQ1gsQ0FBQyxFQUNEO01BQ0VOLEtBQUssRUFBRSxHQUFHO01BQ1ZLLEtBQUssRUFBRSxHQUFHO01BQ1ZDLE9BQU8sRUFBRTtJQUNYLENBQUMsQ0FDRjtJQUNEQyxj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