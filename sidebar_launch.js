function onOpen() {
 SpreadsheetApp
   .getUi()
   .createMenu("SearchData")
   .addItem("SearchData for Sheets", "showAdminSidebar")
   .addToUi();
}


function showAdminSidebar() {
 var widget = HtmlService.createTemplateFromFile("main.html");
 SpreadsheetApp.getUi().showSidebar(widget.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME).setTitle("SearchData for SEO"));
 // Logger.log(widget)
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}