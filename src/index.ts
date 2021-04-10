const nativeFS = require("vscode-web/dist/extensions/vscode-native-file-system/dist/nativeFS");
import { extensions as builtinExtensions } from "./builtinExtensions";
import { extensions as myExtensions } from "./myExtensions";

/*
// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
*/

export const product = {
  productConfiguration: {
    nameShort: "VSCode with Native Filesystem API support",
    nameLong: "VSCode with Native Filesystem API support",
    applicationName: "vscode-nativefs",
    dataFolderName: ".vscode-nativefs-extensions",
    version: "1.2.3",
    date: "2021-3-30",
    portable: true,
    /*
    extensionAllowedProposedApi: [
      "ms-vscode.vscode-js-profile-flame",
      "ms-vscode.vscode-js-profile-table",
      "ms-vscode.github-browser",
    ],
    */
    extensionsGallery: {
      serviceUrl: "https://marketplace.visualstudio.com/_apis/public/gallery",
      cacheUrl: "https://vscode.blob.core.windows.net/gallery/index",
      itemUrl: "https://marketplace.visualstudio.com/items",
      controlUrl: "https://az764295.vo.msecnd.net/extensions/marketplace.json",
      recommendationsUrl:
        "https://az764295.vo.msecnd.net/extensions/workspaceRecommendations.json.gz",
    },
  },
  folderUri: {
    scheme: "memfs",
    path: "/",
  },
  /*
  folderUri: {
    scheme: "nativefs",
    path: "/",
  },
  */
  settingsSyncOptions: {
    enabled: true,
  },
  commands: [
    {
      id: "browser.testCommand",
      handler: async () => {
        console.log("test command triggered");
      },
    },
  ],
};

nativeFS.registerNativeFS(product);

const extElement: any = document.getElementById(
  "vscode-workbench-builtin-extensions"
);
const extensionList = [...builtinExtensions, ...myExtensions];
extElement.attributes["data-settings"].value = JSON.stringify(extensionList);
