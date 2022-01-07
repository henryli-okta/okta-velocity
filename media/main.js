//@ts-check

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
$(() => {
  const treeView = $('#treeview').dxTreeView({
    dataSource: products,
    searchEnabled: true,
    searchMode: "contains",
    searchExpr: ["key"]
  }).dxTreeView('instance');
});
  


