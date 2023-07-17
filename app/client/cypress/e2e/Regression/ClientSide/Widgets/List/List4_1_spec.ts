import {
  entityExplorer,
  agHelper,
  locators,
  propPane,
  deployMode,
  appSettings,
  draggableWidgets
} from "../../../../../support/Objects/ObjectsCore";

describe("Container Widget Functionality", function () {
  const items = JSON.parse(dsl.dsl.children[0].listData);

  before(() => {
    agHelper.AddDsl("listdsl");
  });

  it("1. List-Unckeck Visible field Validation", function () {
    // Open Property pane
    entityExplorer.SelectEntityByName("List1", "Widgets");
    //Uncheck the disabled checkbox and validate
    propPane.TogglePropertyState("Visible", "Off");
    deployMode.DeployApp();
    agHelper.AssertElementAbsence(
      locators._widgetInCanvas(draggableWidgets.LIST),
    );
    deployMode.NavigateBacktoEditor();
    // List-Check Visible field Validation
    // Open Property pane
    entityExplorer.SelectEntityByName("List1", "Widgets");
    //Check the disableed checkbox and Validate
    propPane.TogglePropertyState("Visible", "On");
    deployMode.DeployApp();
    agHelper.AssertElementVisible(
      locators._widgetInDeployed(draggableWidgets.LIST),
    );
    deployMode.NavigateBacktoEditor();
  });

  it("2. Toggle JS - List-Unckeck Visible field Validation", function () {
    // Open Property pane
    entityExplorer.SelectEntityByName("List1", "Widgets");
    //Uncheck the disabled checkbox using JS and validate
    propPane.EnterJSContext("Visible", "false");
    deployMode.DeployApp();
    agHelper.AssertElementAbsence(
      locators._widgetInCanvas(draggableWidgets.LIST),
    );
    deployMode.NavigateBacktoEditor();
    //Toggle JS - List-Check Visible field Validation
    // Open Property pane
    entityExplorer.SelectEntityByName("List1", "Widgets");
    //Check the disabled checkbox using JS and Validate
    propPane.EnterJSContext("Visible", "true");
    deployMode.DeployApp();
    agHelper.AssertElementVisible(
      locators._widgetInDeployed(draggableWidgets.LIST),
    );
    deployMode.NavigateBacktoEditor();
  });

  it("3. checks if list shows correct no. of items", function () {
    // Verify the length of list
    agHelper.AssertElementLength(
      locators._widgetInDeployed(draggableWidgets.CONTAINER),
      2,
    );
    //checks currentItem binding
    // Open property pane
    entityExplorer.ExpandCollapseEntity("Widgets");
    entityExplorer.ExpandCollapseEntity("List1");
    entityExplorer.ExpandCollapseEntity("Container1");
    entityExplorer.SelectEntityByName("Text1");
    propPane.UpdatePropertyFieldValue("Text", `{{currentItem.first_name}}`);
    //cy.testJsontext("text", `{{currentItem.first_name}}`);
    agHelper.GetNClick(appSettings.locators._canvas);
    // Verify Current Item Bindings
    agHelper.GetNAssertElementText(
      ".bp3-ui-text span",
      items[0].first_name,
      "contain.text",
      0,
    );
    agHelper.GetNAssertElementText(
      ".bp3-ui-text span",
      items[1].first_name,
      "contain.text",
      1,
    );
  });

  it("4. doesn't alter the no of items present when invalid item spacing is entered", () => {
    // Open Property pane
    entityExplorer.SelectEntityByName("List1", "Widgets");
    cy.moveToStyleTab();
    // Update an invalid value to item spacing
    propPane.UpdatePropertyFieldValue("Item Spacing (px)", "-");
    // Verify the length of list
    agHelper.AssertElementLength(
      locators._widgetInDeployed(draggableWidgets.CONTAINER),
      2,
    );
    // Clear item spacing
    propPane.UpdatePropertyFieldValue("Item Spacing (px)", "");
    cy.wait(2000);
    // Close property pane
    agHelper.GetNClick(appSettings.locators._canvas);
  });

  it("5. checks button action", function () {
    // Open property pane
    entityExplorer.ExpandCollapseEntity("Widgets");
    entityExplorer.ExpandCollapseEntity("List1");
    entityExplorer.ExpandCollapseEntity("Container1");
    entityExplorer.SelectEntityByName("Button1");
    propPane.UpdatePropertyFieldValue("Label", `{{currentItem.last_name}}`);
    propPane.SelectPlatformFunction("onClick", "Show alert");
    agHelper.EnterActionValue("Message", "{{currentItem.last_name}}");
    //cy.addAction("{{currentItem.last_name}}", "onClick");
    cy.wait(3000);
    deployMode.DeployApp();
    // Verify Widget Button by clicking on it
    agHelper.AssertElementLength(widgetsPage.widgetBtn, 2);
    agHelper.GetClosestNClick(widgetsPage.widgetBtn, "div", 0, true);
    // Verify the click on first button
    agHelper.ValidateToastMessage(items[0].last_name);
  });

  it("6. it checks onListItem click action", function () {
    // Verify Clicking on list item shows message of first name
    deployMode.NavigateBacktoEditor(); // Open property pane
    entityExplorer.SelectEntityByName("List1", "Widgets");

    // Verify Action type and Message of List Item
    // Click on the onListItemClick action dropdown.
    // Write binding inside the Message code textarea
    propPane.SelectPlatformFunction("onListItemClick", "Show alert");
    agHelper.EnterActionValue("Message", "{{currentItem.first_name}}");
    deployMode.DeployApp();
    // Click on list first item
    cy.get(
      "div[type='LIST_WIDGET'] .t--widget-containerwidget:first-child",
    ).click();
    cy.get("body").then(($ele) => {
      if ($ele.find(commonlocators.toastmsg).length <= 0) {
        cy.get(
          "div[type='LIST_WIDGET'] .t--widget-containerwidget:first-child",
        ).click();
      }
    });
    // Verify the click on first item
    agHelper.ValidateToastMessage(items[0].first_name);
  });

  it("7. it checks pagination", function () {
    // clicking on second pagination button
    agHelper.GetNClick(`${commonlocators.paginationButton}-2`);

    // now we are on the second page which shows first the 3rd item in the list
    agHelper.GetNAssertElementText(
      ".bp3-ui-text span",
      items[2].first_name,
      "contain.text",
      0,
    );
    agHelper.GetNAssertElementText(
      ".bp3-ui-text span",
      items[3].first_name,
      "contain.text",
      1,
    );
    deployMode.NavigateBacktoEditor();
  });

  it("8. ListWidget-Copy & Delete Verification", function () {
    //Copy Chart and verify all properties
    propPane.CopyWidgetFromPropertyPane("List1");
    propPane.DeleteWidgetFromPropertyPane("List1Copy");
    deployMode.DeployApp();
    // Verify the copied list widget is deleted
    agHelper.AssertElementLength(
      locators._widgetInDeployed(draggableWidgets.CONTAINER),
      2,
    );
    deployMode.NavigateBacktoEditor();
  });

  it("9. List widget background colour and deploy ", function () {
    // Open Property pane
    entityExplorer.SelectEntityByName("List1", "Widgets");
    propPane.MoveToTab("Style");
    // Scroll down to Styles and Add background colour
    propPane.UpdatePropertyFieldValue;
    //cy.selectColor("backgroundcolor");
    propPane.SelectColorFromColorPicker("backgroundcolor");
    cy.wait(1000);
    //cy.selectColor("itembackgroundcolor");
    propPane.SelectColorFromColorPicker("itembackgroundcolor");

    // Click on Deploy and ensure it is deployed appropriately
    deployMode.DeployApp();
    // Ensure List Background Color
    agHelper.AssertCSS(
      locators._listWidget,
      "background-color",
      "rgb(126, 34, 206)",
    );
    // Verify List Item Background Color
    agHelper.AssertCSS(
      widgetsPage.itemContainerWidget,
      "background-color",
      "rgb(126, 34, 206)",
    );
    deployMode.NavigateBacktoEditor();
  });

  it("10. Toggle JS - List widget background colour and deploy ", function () {
    // Open Property pane
    entityExplorer.SelectEntityByName("List1", "Widgets");
    propPane.MoveToTab("Style");
    // Scroll down to Styles and Add background colour
    propPane.EnterJSContext("Background color", "#FFC13D");
    cy.wait(1000);
    propPane.EnterJSContext("Item Background color", "#38AFF4");
    // Click on Deploy and ensure it is deployed appropriately
    deployMode.DeployApp();
    // Ensure List Background Color
    agHelper.AssertCSS(
      locators._listWidget,
      "background-color",
      "rgb(255, 193, 61)",
      0,
    );
    // Verify List Item Background Color
    agHelper.AssertCSS(
      widgetsPage.itemContainerWidget,
      "background-color",
      "rgb(56, 175, 244)",
      0,
    );
    deployMode.NavigateBacktoEditor();
  });
});
