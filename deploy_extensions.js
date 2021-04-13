#!/usr/bin/env node
const path = require("path");
const fse = require("fs-extra");
const child_process = require("child_process");

const extensionsToBuild = process.argv.slice(2);
const extensions = [
  {
    name: "vscode-web-fs",
    copy: ["dist", "package.json"],
    commands: ["yarn", "yarn package"],
  },
];

const myExtensions = [];

extensions.forEach(({ name, copy, commands }) => {
  if (
    !extensionsToBuild.length ||
    extensionsToBuild.find((extensionName) => extensionName === name)
  ) {
    console.log("\n* Adding extension ", name);
    fse.rmdirSync(
      path.resolve(
        __dirname,
        `./node_modules/vscode-web/dist/extensions/${name}/`
      ),
      { recursive: true }
    );
    fse.mkdirpSync(
      path.resolve(
        __dirname,
        `./node_modules/vscode-web/dist/extensions/${name}/`
      )
    );
    process.chdir(path.resolve(__dirname, `./extensions/${name}/`));
    commands.forEach((command) => {
      child_process.execSync(command, { stdio: "inherit" });
    });
    process.chdir(__dirname);
    copy.forEach((file) => {
      console.log(
        `** Copy ./extensions/${name}/${file} to ./node_modules/vscode-web/dist/extensions/${name}/${file}`
      );
      fse.copySync(
        path.resolve(__dirname, `extensions/${name}/${file}`),
        path.resolve(
          __dirname,
          `./node_modules/vscode-web/dist/extensions/${name}/${file}`
        ),
        { recursive: true, overwrite: true, errorOnExist: true }
      );
    });
  }
  const packageJSON = JSON.parse(
    fse.readFileSync(
      path.resolve(
        __dirname,
        `./node_modules/vscode-web/dist/extensions/${name}/package.json`
      ),
      { encoding: "utf-8" }
    )
  );
  myExtensions.push({
    packageJSON,
    extensionPath: name,
  });
});

console.log("* Creating ./src/myExtensions.ts");
let content = `export const extensions: any = ${JSON.stringify(myExtensions)}`;
fse.writeFileSync("./src/myExtensions.ts", content);

console.log("* Creating ./src/builtinExtensions.ts");
content = fse
  .readFileSync(
    path.resolve(__dirname, "./node_modules/vscode-web/dist/extensions.js"),
    { encoding: "utf8" }
  )
  .toString()
  .replace("var extensions", "export const extensions: any ");
fse.writeFileSync("./src/builtinExtensions.ts", content);
