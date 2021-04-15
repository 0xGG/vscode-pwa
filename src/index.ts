const nativeFS = require("vscode-web/dist/extensions/vscode-web-fs/dist/nativeFS");
import { extensions as builtinExtensions } from "./builtinExtensions";
import { extensions as myExtensions } from "./myExtensions";
import * as serviceWorker from "./serviceWorker";

// Register service worker
serviceWorker.register();

// Display prompt
const handler = (event: any) => {
  try {
    event.preventDefault();
    event.prompt();
    event.userChoice.then((choiceResult: any) => {
      console.log(choiceResult);
      localStorage.removeItem("layoutModel");
    });
  } catch (error) {
    console.error(error);
  }
};
window.addEventListener("beforeinstallprompt", handler);
/* return () => {
  window.removeEventListener("beforeinstallprompt", handler);
};
*/

export const product = {
  productConfiguration: {
    nameShort: "VSCode PWA",
    nameLong: "VSCode PWA",
    applicationName: "vscode-pwa",
    dataFolderName: ".vscode-pwa-extensions",
    version: "0.0.1",
    date: "2021-04-13",
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
  workspaceUri: {
    scheme: "memfs",
    path: "/web-fs.code-workspace",
  },
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
