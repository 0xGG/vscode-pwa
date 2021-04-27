"use strict";const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node"),product=require("../product.json");bootstrap.avoidMonkeyPatchFromAppInsights(),bootstrapNode.configurePortable(product),bootstrap.enableASARSupport(void 0),require("./bootstrap-amd").load("vs/code/node/cli");

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c185983a683d14c396952dd432459097bc7f757f/core/cli.js.map
