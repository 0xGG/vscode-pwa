"use strict";const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node"),product=require("../product.json");bootstrap.avoidMonkeyPatchFromAppInsights(),bootstrapNode.configurePortable(product),bootstrap.enableASARSupport(void 0),require("./bootstrap-amd").load("vs/code/node/cli");

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f30a9b73e8ffc278e71575118b6bf568f04587c8/core/cli.js.map
