(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const emmetCommon_1 = __webpack_require__(1);
function activate(context) {
    (0, emmetCommon_1.activateEmmetExtension)(context);
}
exports.activate = activate;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activateEmmetExtension = void 0;
const vscode = __webpack_require__(2);
const defaultCompletionProvider_1 = __webpack_require__(3);
const abbreviationActions_1 = __webpack_require__(4);
const removeTag_1 = __webpack_require__(34);
const updateTag_1 = __webpack_require__(35);
const matchTag_1 = __webpack_require__(36);
const balance_1 = __webpack_require__(37);
const splitJoinTag_1 = __webpack_require__(38);
const mergeLines_1 = __webpack_require__(39);
const toggleComment_1 = __webpack_require__(40);
const editPoint_1 = __webpack_require__(41);
const selectItem_1 = __webpack_require__(42);
const evaluateMathExpression_1 = __webpack_require__(45);
const incrementDecrement_1 = __webpack_require__(47);
const util_1 = __webpack_require__(6);
const reflectCssValue_1 = __webpack_require__(48);
const parseDocument_1 = __webpack_require__(13);
function activateEmmetExtension(context) {
    (0, util_1.migrateEmmetExtensionsPath)();
    registerCompletionProviders(context);
    (0, util_1.updateEmmetExtensionsPath)();
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.wrapWithAbbreviation', (args) => {
        (0, abbreviationActions_1.wrapWithAbbreviation)(args);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.expandAbbreviation', (args) => {
        (0, abbreviationActions_1.expandEmmetAbbreviation)(args);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.removeTag', () => {
        return (0, removeTag_1.removeTag)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.updateTag', (inputTag) => {
        if (inputTag && typeof inputTag === 'string') {
            return (0, updateTag_1.updateTag)(inputTag);
        }
        return vscode.window.showInputBox({ prompt: 'Enter Tag' }).then(tagName => {
            if (tagName) {
                const update = (0, updateTag_1.updateTag)(tagName);
                return update ? update : false;
            }
            return false;
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.matchTag', () => {
        (0, matchTag_1.matchTag)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.balanceOut', () => {
        (0, balance_1.balanceOut)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.balanceIn', () => {
        (0, balance_1.balanceIn)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.splitJoinTag', () => {
        return (0, splitJoinTag_1.splitJoinTag)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.mergeLines', () => {
        (0, mergeLines_1.mergeLines)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.toggleComment', () => {
        (0, toggleComment_1.toggleComment)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.nextEditPoint', () => {
        (0, editPoint_1.fetchEditPoint)('next');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.prevEditPoint', () => {
        (0, editPoint_1.fetchEditPoint)('prev');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.selectNextItem', () => {
        (0, selectItem_1.fetchSelectItem)('next');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.selectPrevItem', () => {
        (0, selectItem_1.fetchSelectItem)('prev');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.evaluateMathExpression', () => {
        (0, evaluateMathExpression_1.evaluateMathExpression)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.incrementNumberByOneTenth', () => {
        return (0, incrementDecrement_1.incrementDecrement)(0.1);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.incrementNumberByOne', () => {
        return (0, incrementDecrement_1.incrementDecrement)(1);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.incrementNumberByTen', () => {
        return (0, incrementDecrement_1.incrementDecrement)(10);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.decrementNumberByOneTenth', () => {
        return (0, incrementDecrement_1.incrementDecrement)(-0.1);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.decrementNumberByOne', () => {
        return (0, incrementDecrement_1.incrementDecrement)(-1);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.decrementNumberByTen', () => {
        return (0, incrementDecrement_1.incrementDecrement)(-10);
    }));
    context.subscriptions.push(vscode.commands.registerCommand('editor.emmet.action.reflectCSSValue', () => {
        return (0, reflectCssValue_1.reflectCssValue)();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('workbench.action.showEmmetCommands', () => {
        vscode.commands.executeCommand('workbench.action.quickOpen', '>Emmet: ');
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((e) => {
        if (e.affectsConfiguration('emmet.includeLanguages')) {
            registerCompletionProviders(context);
        }
        if (e.affectsConfiguration('emmet.extensionsPath')) {
            (0, util_1.updateEmmetExtensionsPath)();
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidSaveTextDocument((e) => {
        const basefileName = (0, util_1.getPathBaseName)(e.fileName);
        if (basefileName.startsWith('snippets') && basefileName.endsWith('.json')) {
            (0, util_1.updateEmmetExtensionsPath)(true);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidOpenTextDocument((e) => {
        var _a;
        const emmetMode = (_a = (0, util_1.getEmmetMode)(e.languageId, [])) !== null && _a !== void 0 ? _a : '';
        const syntaxes = (0, util_1.getSyntaxes)();
        if (syntaxes.markup.includes(emmetMode) || syntaxes.stylesheet.includes(emmetMode)) {
            (0, parseDocument_1.addFileToParseCache)(e);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument((e) => {
        var _a;
        const emmetMode = (_a = (0, util_1.getEmmetMode)(e.languageId, [])) !== null && _a !== void 0 ? _a : '';
        const syntaxes = (0, util_1.getSyntaxes)();
        if (syntaxes.markup.includes(emmetMode) || syntaxes.stylesheet.includes(emmetMode)) {
            (0, parseDocument_1.removeFileFromParseCache)(e);
        }
    }));
}
exports.activateEmmetExtension = activateEmmetExtension;
/**
 * Holds any registered completion providers by their language strings
 */
const languageMappingForCompletionProviders = new Map();
const completionProvidersMapping = new Map();
function registerCompletionProviders(context) {
    let completionProvider = new defaultCompletionProvider_1.DefaultCompletionItemProvider();
    let includedLanguages = (0, util_1.getMappingForIncludedLanguages)();
    Object.keys(includedLanguages).forEach(language => {
        if (languageMappingForCompletionProviders.has(language) && languageMappingForCompletionProviders.get(language) === includedLanguages[language]) {
            return;
        }
        if (languageMappingForCompletionProviders.has(language)) {
            const mapping = completionProvidersMapping.get(language);
            if (mapping) {
                mapping.dispose();
            }
            languageMappingForCompletionProviders.delete(language);
            completionProvidersMapping.delete(language);
        }
        const provider = vscode.languages.registerCompletionItemProvider({ language, scheme: '*' }, completionProvider, ...util_1.LANGUAGE_MODES[includedLanguages[language]]);
        context.subscriptions.push(provider);
        languageMappingForCompletionProviders.set(language, includedLanguages[language]);
        completionProvidersMapping.set(language, provider);
    });
    Object.keys(util_1.LANGUAGE_MODES).forEach(language => {
        if (!languageMappingForCompletionProviders.has(language)) {
            const provider = vscode.languages.registerCompletionItemProvider({ language, scheme: '*' }, completionProvider, ...util_1.LANGUAGE_MODES[language]);
            context.subscriptions.push(provider);
            languageMappingForCompletionProviders.set(language, language);
            completionProvidersMapping.set(language, provider);
        }
    });
}
function deactivate() {
}
exports.deactivate = deactivate;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCompletionItemProvider = void 0;
const vscode = __webpack_require__(2);
const abbreviationActions_1 = __webpack_require__(4);
const util_1 = __webpack_require__(6);
const parseDocument_1 = __webpack_require__(13);
class DefaultCompletionItemProvider {
    provideCompletionItems(document, position, _, context) {
        const completionResult = this.provideCompletionItemsInternal(document, position, context);
        if (!completionResult) {
            this.lastCompletionType = undefined;
            return;
        }
        return completionResult.then(completionList => {
            if (!completionList || !completionList.items.length) {
                this.lastCompletionType = undefined;
                return completionList;
            }
            const item = completionList.items[0];
            const expandedText = item.documentation ? item.documentation.toString() : '';
            if (expandedText.startsWith('<')) {
                this.lastCompletionType = 'html';
            }
            else if (expandedText.indexOf(':') > 0 && expandedText.endsWith(';')) {
                this.lastCompletionType = 'css';
            }
            else {
                this.lastCompletionType = undefined;
            }
            return completionList;
        });
    }
    provideCompletionItemsInternal(document, position, context) {
        const emmetConfig = vscode.workspace.getConfiguration('emmet');
        const excludedLanguages = emmetConfig['excludeLanguages'] ? emmetConfig['excludeLanguages'] : [];
        if (excludedLanguages.indexOf(document.languageId) > -1) {
            return;
        }
        const mappedLanguages = (0, util_1.getMappingForIncludedLanguages)();
        const isSyntaxMapped = mappedLanguages[document.languageId] ? true : false;
        let emmetMode = (0, util_1.getEmmetMode)((isSyntaxMapped ? mappedLanguages[document.languageId] : document.languageId), excludedLanguages);
        if (!emmetMode
            || emmetConfig['showExpandedAbbreviation'] === 'never'
            || ((isSyntaxMapped || emmetMode === 'jsx') && emmetConfig['showExpandedAbbreviation'] !== 'always')) {
            return;
        }
        let syntax = emmetMode;
        const helper = (0, util_1.getEmmetHelper)();
        let validateLocation = syntax === 'html' || syntax === 'jsx' || syntax === 'xml';
        let rootNode;
        let currentNode;
        const lsDoc = (0, util_1.toLSTextDocument)(document);
        position = document.validatePosition(position);
        if (syntax === 'html') {
            if (context.triggerKind === vscode.CompletionTriggerKind.TriggerForIncompleteCompletions) {
                switch (this.lastCompletionType) {
                    case 'html':
                        validateLocation = false;
                        break;
                    case 'css':
                        validateLocation = false;
                        syntax = 'css';
                        break;
                    default:
                        break;
                }
            }
            if (validateLocation) {
                const positionOffset = document.offsetAt(position);
                const emmetRootNode = (0, parseDocument_1.getRootNode)(document, true);
                const foundNode = (0, util_1.getHtmlFlatNode)(document.getText(), emmetRootNode, positionOffset, false);
                if (foundNode) {
                    if (foundNode.name === 'script') {
                        const typeNode = foundNode.attributes.find(attr => attr.name.toString() === 'type');
                        if (typeNode) {
                            const typeAttrValue = typeNode.value.toString();
                            if (typeAttrValue === 'application/javascript' || typeAttrValue === 'text/javascript') {
                                if (!(0, abbreviationActions_1.getSyntaxFromArgs)({ language: 'javascript' })) {
                                    return;
                                }
                                else {
                                    validateLocation = false;
                                }
                            }
                            else if (util_1.allowedMimeTypesInScriptTag.includes(typeAttrValue)) {
                                validateLocation = false;
                            }
                        }
                        else {
                            return;
                        }
                    }
                    else if (foundNode.name === 'style') {
                        syntax = 'css';
                        validateLocation = false;
                    }
                    else {
                        const styleNode = foundNode.attributes.find(attr => attr.name.toString() === 'style');
                        if (styleNode && styleNode.value.start <= positionOffset && positionOffset <= styleNode.value.end) {
                            syntax = 'css';
                            validateLocation = false;
                        }
                    }
                }
            }
        }
        const expandOptions = (0, util_1.isStyleSheet)(syntax) ?
            { lookAhead: false, syntax: 'stylesheet' } :
            { lookAhead: true, syntax: 'markup' };
        const extractAbbreviationResults = helper.extractAbbreviation(lsDoc, position, expandOptions);
        if (!extractAbbreviationResults || !helper.isAbbreviationValid(syntax, extractAbbreviationResults.abbreviation)) {
            return;
        }
        const offset = document.offsetAt(position);
        if ((0, util_1.isStyleSheet)(document.languageId) && context.triggerKind !== vscode.CompletionTriggerKind.TriggerForIncompleteCompletions) {
            validateLocation = true;
            let usePartialParsing = vscode.workspace.getConfiguration('emmet')['optimizeStylesheetParsing'] === true;
            rootNode = usePartialParsing && document.lineCount > 1000 ? (0, util_1.parsePartialStylesheet)(document, position) : (0, parseDocument_1.getRootNode)(document, true);
            if (!rootNode) {
                return;
            }
            currentNode = (0, util_1.getFlatNode)(rootNode, offset, true);
        }
        // Fix for https://github.com/microsoft/vscode/issues/107578
        // Validate location if syntax is of styleSheet type to ensure that location is valid for emmet abbreviation.
        // For an html document containing a <style> node, compute the embeddedCssNode and fetch the flattened node as currentNode.
        if (!(0, util_1.isStyleSheet)(document.languageId) && (0, util_1.isStyleSheet)(syntax) && context.triggerKind !== vscode.CompletionTriggerKind.TriggerForIncompleteCompletions) {
            validateLocation = true;
            rootNode = (0, parseDocument_1.getRootNode)(document, true);
            if (!rootNode) {
                return;
            }
            let flatNode = (0, util_1.getFlatNode)(rootNode, offset, true);
            let embeddedCssNode = (0, util_1.getEmbeddedCssNodeIfAny)(document, flatNode, position);
            currentNode = (0, util_1.getFlatNode)(embeddedCssNode, offset, true);
        }
        if (validateLocation && !(0, abbreviationActions_1.isValidLocationForEmmetAbbreviation)(document, rootNode, currentNode, syntax, offset, toRange(extractAbbreviationResults.abbreviationRange))) {
            return;
        }
        let noiseCheckPromise = Promise.resolve();
        // Fix for https://github.com/microsoft/vscode/issues/32647
        // Check for document symbols in js/ts/jsx/tsx and avoid triggering emmet for abbreviations of the form symbolName.sometext
        // Presence of > or * or + in the abbreviation denotes valid abbreviation that should trigger emmet
        if (!(0, util_1.isStyleSheet)(syntax) && (document.languageId === 'javascript' || document.languageId === 'javascriptreact' || document.languageId === 'typescript' || document.languageId === 'typescriptreact')) {
            let abbreviation = extractAbbreviationResults.abbreviation;
            if (abbreviation.startsWith('this.')) {
                noiseCheckPromise = Promise.resolve(true);
            }
            else {
                noiseCheckPromise = vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', document.uri).then((symbols) => {
                    return symbols && symbols.find(x => abbreviation === x.name || (abbreviation.startsWith(x.name + '.') && !/>|\*|\+/.test(abbreviation)));
                });
            }
        }
        return noiseCheckPromise.then((noise) => {
            if (noise) {
                return;
            }
            let result = helper.doComplete((0, util_1.toLSTextDocument)(document), position, syntax, (0, util_1.getEmmetConfiguration)(syntax));
            // https://github.com/microsoft/vscode/issues/86941
            if (result && result.items && result.items.length === 1) {
                if (result.items[0].label === 'widows: ;') {
                    return undefined;
                }
            }
            let newItems = [];
            if (result && result.items) {
                result.items.forEach((item) => {
                    let newItem = new vscode.CompletionItem(item.label);
                    newItem.documentation = item.documentation;
                    newItem.detail = item.detail;
                    newItem.insertText = new vscode.SnippetString(item.textEdit.newText);
                    let oldrange = item.textEdit.range;
                    newItem.range = new vscode.Range(oldrange.start.line, oldrange.start.character, oldrange.end.line, oldrange.end.character);
                    newItem.filterText = item.filterText;
                    newItem.sortText = item.sortText;
                    if (emmetConfig['showSuggestionsAsSnippets'] === true) {
                        newItem.kind = vscode.CompletionItemKind.Snippet;
                    }
                    newItems.push(newItem);
                });
            }
            return new vscode.CompletionList(newItems, true);
        });
    }
}
exports.DefaultCompletionItemProvider = DefaultCompletionItemProvider;
function toRange(lsRange) {
    return new vscode.Range(lsRange.start.line, lsRange.start.character, lsRange.end.line, lsRange.end.character);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSyntaxFromArgs = exports.isValidLocationForEmmetAbbreviation = exports.expandEmmetAbbreviation = exports.wrapWithAbbreviation = void 0;
const vscode = __webpack_require__(2);
const nls = __webpack_require__(5);
const util_1 = __webpack_require__(6);
const parseDocument_1 = __webpack_require__(13);
const localize = nls.loadMessageBundle();
const trimRegex = /[\u00a0]*[\d#\-\*\u2022]+\.?/;
const hexColorRegex = /^#[\da-fA-F]{0,6}$/;
async function wrapWithAbbreviation(args) {
    if (!(0, util_1.validate)(false)) {
        return false;
    }
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    args = args || {};
    if (!args['language']) {
        args['language'] = document.languageId;
    }
    // we know it's not stylesheet due to the validate(false) call above
    const syntax = getSyntaxFromArgs(args) || 'html';
    const rootNode = (0, parseDocument_1.getRootNode)(document, true);
    const helper = (0, util_1.getEmmetHelper)();
    const operationRanges = editor.selections.sort((a, b) => a.start.compareTo(b.start)).map(selection => {
        let rangeToReplace = selection;
        // wrap around the node if the selection falls inside its open or close tag
        {
            let { start, end } = rangeToReplace;
            const startOffset = document.offsetAt(start);
            const startNode = (0, util_1.getFlatNode)(rootNode, startOffset, true);
            if (startNode && (0, util_1.isOffsetInsideOpenOrCloseTag)(startNode, startOffset)) {
                start = document.positionAt(startNode.start);
                const nodeEndPosition = document.positionAt(startNode.end);
                end = nodeEndPosition.isAfter(end) ? nodeEndPosition : end;
            }
            const endOffset = document.offsetAt(end);
            const endNode = (0, util_1.getFlatNode)(rootNode, endOffset, true);
            if (endNode && (0, util_1.isOffsetInsideOpenOrCloseTag)(endNode, endOffset)) {
                const nodeStartPosition = document.positionAt(endNode.start);
                start = nodeStartPosition.isBefore(start) ? nodeStartPosition : start;
                const nodeEndPosition = document.positionAt(endNode.end);
                end = nodeEndPosition.isAfter(end) ? nodeEndPosition : end;
            }
            rangeToReplace = new vscode.Range(start, end);
        }
        // in case of multi-line, exclude last empty line from rangeToReplace
        if (!rangeToReplace.isSingleLine && rangeToReplace.end.character === 0) {
            const previousLine = rangeToReplace.end.line - 1;
            rangeToReplace = new vscode.Range(rangeToReplace.start, document.lineAt(previousLine).range.end);
        }
        // wrap line the cursor is on
        if (rangeToReplace.isEmpty) {
            rangeToReplace = document.lineAt(rangeToReplace.start).range;
        }
        // ignore whitespace on the first line
        const firstLineOfRange = document.lineAt(rangeToReplace.start);
        if (!firstLineOfRange.isEmptyOrWhitespace && firstLineOfRange.firstNonWhitespaceCharacterIndex > rangeToReplace.start.character) {
            rangeToReplace = rangeToReplace.with(new vscode.Position(rangeToReplace.start.line, firstLineOfRange.firstNonWhitespaceCharacterIndex));
        }
        return rangeToReplace;
    }).reduce((mergedRanges, range) => {
        // Merge overlapping ranges
        if (mergedRanges.length > 0 && range.intersection(mergedRanges[mergedRanges.length - 1])) {
            mergedRanges.push(range.union(mergedRanges.pop()));
        }
        else {
            mergedRanges.push(range);
        }
        return mergedRanges;
    }, []);
    // Backup orginal selections and update selections
    // Also helps with https://github.com/microsoft/vscode/issues/113930 by avoiding `editor.linkedEditing`
    // execution if selection is inside an open or close tag
    const oldSelections = editor.selections;
    editor.selections = operationRanges.map(range => new vscode.Selection(range.start, range.end));
    // Fetch general information for the succesive expansions. i.e. the ranges to replace and its contents
    const rangesToReplace = operationRanges.map(rangeToReplace => {
        let textToWrapInPreview;
        const textToReplace = document.getText(rangeToReplace);
        // the following assumes all the lines are indented the same way as the first
        // this assumption helps with applyPreview later
        const wholeFirstLine = document.lineAt(rangeToReplace.start).text;
        const otherMatches = wholeFirstLine.match(/^(\s*)/);
        const baseIndent = otherMatches ? otherMatches[1] : '';
        textToWrapInPreview = rangeToReplace.isSingleLine ?
            [textToReplace] :
            textToReplace.split('\n' + baseIndent).map(x => x.trimEnd());
        // escape $ characters, fixes #52640
        textToWrapInPreview = textToWrapInPreview.map(e => e.replace(/(\$\d)/g, '\\$1'));
        return {
            previewRange: rangeToReplace,
            originalRange: rangeToReplace,
            originalContent: textToReplace,
            textToWrapInPreview,
            baseIndent
        };
    });
    const { tabSize, insertSpaces } = editor.options;
    const indent = insertSpaces ? ' '.repeat(tabSize) : '\t';
    function revertPreview() {
        return editor.edit(builder => {
            for (const rangeToReplace of rangesToReplace) {
                builder.replace(rangeToReplace.previewRange, rangeToReplace.originalContent);
                rangeToReplace.previewRange = rangeToReplace.originalRange;
            }
        }, { undoStopBefore: false, undoStopAfter: false });
    }
    function applyPreview(expandAbbrList) {
        let lastOldPreviewRange = new vscode.Range(0, 0, 0, 0);
        let lastNewPreviewRange = new vscode.Range(0, 0, 0, 0);
        let totalNewLinesInserted = 0;
        return editor.edit(builder => {
            // the edits are applied in order top-down
            for (let i = 0; i < rangesToReplace.length; i++) {
                const expandedText = expandAbbr(expandAbbrList[i]) || '';
                if (!expandedText) {
                    // Failed to expand text. We already showed an error inside expandAbbr.
                    break;
                }
                // get the current preview range, format the new wrapped text, and then replace
                // the text in the preview range with that new text
                const oldPreviewRange = rangesToReplace[i].previewRange;
                const newText = expandedText
                    .replace(/\$\{[\d]*\}/g, '|') // Removing Tabstops
                    .replace(/\$\{[\d]*:([^}]*)\}/g, (_, placeholder) => placeholder) // Replacing Placeholders
                    .replace(/\\\$/g, '$'); // Remove backslashes before $
                builder.replace(oldPreviewRange, newText);
                // calculate the new preview range to use for future previews
                // we also have to take into account that the previous expansions could:
                // - cause new lines to appear
                // - be on the same line as other expansions
                const expandedTextLines = newText.split('\n');
                const oldPreviewLines = oldPreviewRange.end.line - oldPreviewRange.start.line + 1;
                const newLinesInserted = expandedTextLines.length - oldPreviewLines;
                const newPreviewLineStart = oldPreviewRange.start.line + totalNewLinesInserted;
                let newPreviewStart = oldPreviewRange.start.character;
                const newPreviewLineEnd = oldPreviewRange.end.line + totalNewLinesInserted + newLinesInserted;
                let newPreviewEnd = expandedTextLines[expandedTextLines.length - 1].length;
                if (i > 0 && newPreviewLineEnd === lastNewPreviewRange.end.line) {
                    // If newPreviewLineEnd is equal to the previous expandedText lineEnd,
                    // set newPreviewStart to the length of the previous expandedText in that line
                    // plus the number of characters between both selections.
                    newPreviewStart = lastNewPreviewRange.end.character + (oldPreviewRange.start.character - lastOldPreviewRange.end.character);
                    newPreviewEnd += newPreviewStart;
                }
                else if (i > 0 && newPreviewLineStart === lastNewPreviewRange.end.line) {
                    // Same as above but expandedTextLines.length > 1 so newPreviewEnd keeps its value.
                    newPreviewStart = lastNewPreviewRange.end.character + (oldPreviewRange.start.character - lastOldPreviewRange.end.character);
                }
                else if (expandedTextLines.length === 1) {
                    // If the expandedText is single line, add the length of preceeding text as it will not be included in line length.
                    newPreviewEnd += oldPreviewRange.start.character;
                }
                lastOldPreviewRange = rangesToReplace[i].previewRange;
                lastNewPreviewRange = new vscode.Range(newPreviewLineStart, newPreviewStart, newPreviewLineEnd, newPreviewEnd);
                rangesToReplace[i].previewRange = lastNewPreviewRange;
                totalNewLinesInserted += newLinesInserted;
            }
        }, { undoStopBefore: false, undoStopAfter: false });
    }
    let inPreviewMode = false;
    async function makeChanges(inputAbbreviation, previewChanges) {
        const isAbbreviationValid = !!inputAbbreviation && !!inputAbbreviation.trim() && helper.isAbbreviationValid(syntax, inputAbbreviation);
        const extractedResults = isAbbreviationValid ? helper.extractAbbreviationFromText(inputAbbreviation) : undefined;
        if (!extractedResults) {
            if (inPreviewMode) {
                inPreviewMode = false;
                await revertPreview();
            }
            return false;
        }
        const { abbreviation, filter } = extractedResults;
        if (abbreviation !== inputAbbreviation) {
            // Not clear what should we do in this case. Warn the user? How?
        }
        if (previewChanges) {
            const expandAbbrList = rangesToReplace.map(rangesAndContent => ({ syntax, abbreviation, rangeToReplace: rangesAndContent.originalRange, textToWrap: rangesAndContent.textToWrapInPreview, filter, indent, baseIndent: rangesAndContent.baseIndent }));
            inPreviewMode = true;
            return applyPreview(expandAbbrList);
        }
        const expandAbbrList = rangesToReplace.map(rangesAndContent => ({ syntax, abbreviation, rangeToReplace: rangesAndContent.originalRange, textToWrap: rangesAndContent.textToWrapInPreview, filter, indent }));
        if (inPreviewMode) {
            inPreviewMode = false;
            await revertPreview();
        }
        return expandAbbreviationInRange(editor, expandAbbrList, false);
    }
    let currentValue = '';
    function inputChanged(value) {
        if (value !== currentValue) {
            currentValue = value;
            makeChanges(value, true);
        }
        return '';
    }
    const prompt = localize('wrapWithAbbreviationPrompt', "Enter Abbreviation");
    const inputAbbreviation = (args && args['abbreviation'])
        ? args['abbreviation']
        : await vscode.window.showInputBox({ prompt, validateInput: inputChanged });
    const changesWereMade = await makeChanges(inputAbbreviation, false);
    if (!changesWereMade) {
        editor.selections = oldSelections;
    }
    return changesWereMade;
}
exports.wrapWithAbbreviation = wrapWithAbbreviation;
function expandEmmetAbbreviation(args) {
    if (!(0, util_1.validate)() || !vscode.window.activeTextEditor) {
        return fallbackTab();
    }
    /**
     * Short circuit the parsing. If previous character is space, do not expand.
     */
    if (vscode.window.activeTextEditor.selections.length === 1 &&
        vscode.window.activeTextEditor.selection.isEmpty) {
        const anchor = vscode.window.activeTextEditor.selection.anchor;
        if (anchor.character === 0) {
            return fallbackTab();
        }
        const prevPositionAnchor = anchor.translate(0, -1);
        const prevText = vscode.window.activeTextEditor.document.getText(new vscode.Range(prevPositionAnchor, anchor));
        if (prevText === ' ' || prevText === '\t') {
            return fallbackTab();
        }
    }
    args = args || {};
    if (!args['language']) {
        args['language'] = vscode.window.activeTextEditor.document.languageId;
    }
    else {
        const excludedLanguages = vscode.workspace.getConfiguration('emmet')['excludeLanguages'] ? vscode.workspace.getConfiguration('emmet')['excludeLanguages'] : [];
        if (excludedLanguages.indexOf(vscode.window.activeTextEditor.document.languageId) > -1) {
            return fallbackTab();
        }
    }
    const syntax = getSyntaxFromArgs(args);
    if (!syntax) {
        return fallbackTab();
    }
    const editor = vscode.window.activeTextEditor;
    // When tabbed on a non empty selection, do not treat it as an emmet abbreviation, and fallback to tab instead
    if (vscode.workspace.getConfiguration('emmet')['triggerExpansionOnTab'] === true && editor.selections.find(x => !x.isEmpty)) {
        return fallbackTab();
    }
    const abbreviationList = [];
    let firstAbbreviation;
    let allAbbreviationsSame = true;
    const helper = (0, util_1.getEmmetHelper)();
    const getAbbreviation = (document, selection, position, syntax) => {
        position = document.validatePosition(position);
        let rangeToReplace = selection;
        let abbr = document.getText(rangeToReplace);
        if (!rangeToReplace.isEmpty) {
            const extractedResults = helper.extractAbbreviationFromText(abbr);
            if (extractedResults) {
                return [rangeToReplace, extractedResults.abbreviation, extractedResults.filter];
            }
            return [null, '', ''];
        }
        const currentLine = editor.document.lineAt(position.line).text;
        const textTillPosition = currentLine.substr(0, position.character);
        // Expand cases like <div to <div></div> explicitly
        // else we will end up with <<div></div>
        if (syntax === 'html') {
            const matches = textTillPosition.match(/<(\w+)$/);
            if (matches) {
                abbr = matches[1];
                rangeToReplace = new vscode.Range(position.translate(0, -(abbr.length + 1)), position);
                return [rangeToReplace, abbr, ''];
            }
        }
        const extractedResults = helper.extractAbbreviation((0, util_1.toLSTextDocument)(editor.document), position, { lookAhead: false });
        if (!extractedResults) {
            return [null, '', ''];
        }
        const { abbreviationRange, abbreviation, filter } = extractedResults;
        return [new vscode.Range(abbreviationRange.start.line, abbreviationRange.start.character, abbreviationRange.end.line, abbreviationRange.end.character), abbreviation, filter];
    };
    const selectionsInReverseOrder = editor.selections.slice(0);
    selectionsInReverseOrder.sort((a, b) => {
        const posA = a.isReversed ? a.anchor : a.active;
        const posB = b.isReversed ? b.anchor : b.active;
        return posA.compareTo(posB) * -1;
    });
    let rootNode;
    function getRootNode() {
        if (rootNode) {
            return rootNode;
        }
        const usePartialParsing = vscode.workspace.getConfiguration('emmet')['optimizeStylesheetParsing'] === true;
        if (editor.selections.length === 1 && (0, util_1.isStyleSheet)(editor.document.languageId) && usePartialParsing && editor.document.lineCount > 1000) {
            rootNode = (0, util_1.parsePartialStylesheet)(editor.document, editor.selection.isReversed ? editor.selection.anchor : editor.selection.active);
        }
        else {
            rootNode = (0, parseDocument_1.getRootNode)(editor.document, true);
        }
        return rootNode;
    }
    selectionsInReverseOrder.forEach(selection => {
        const position = selection.isReversed ? selection.anchor : selection.active;
        const [rangeToReplace, abbreviation, filter] = getAbbreviation(editor.document, selection, position, syntax);
        if (!rangeToReplace) {
            return;
        }
        if (!helper.isAbbreviationValid(syntax, abbreviation)) {
            return;
        }
        if ((0, util_1.isStyleSheet)(syntax) && abbreviation.endsWith(':')) {
            // Fix for https://github.com/Microsoft/vscode/issues/1623
            return;
        }
        const offset = editor.document.offsetAt(position);
        let currentNode = (0, util_1.getFlatNode)(getRootNode(), offset, true);
        let validateLocation = true;
        let syntaxToUse = syntax;
        if (editor.document.languageId === 'html') {
            if ((0, util_1.isStyleAttribute)(currentNode, offset)) {
                syntaxToUse = 'css';
                validateLocation = false;
            }
            else {
                const embeddedCssNode = (0, util_1.getEmbeddedCssNodeIfAny)(editor.document, currentNode, position);
                if (embeddedCssNode) {
                    currentNode = (0, util_1.getFlatNode)(embeddedCssNode, offset, true);
                    syntaxToUse = 'css';
                }
            }
        }
        if (validateLocation && !isValidLocationForEmmetAbbreviation(editor.document, getRootNode(), currentNode, syntaxToUse, offset, rangeToReplace)) {
            return;
        }
        if (!firstAbbreviation) {
            firstAbbreviation = abbreviation;
        }
        else if (allAbbreviationsSame && firstAbbreviation !== abbreviation) {
            allAbbreviationsSame = false;
        }
        abbreviationList.push({ syntax: syntaxToUse, abbreviation, rangeToReplace, filter });
    });
    return expandAbbreviationInRange(editor, abbreviationList, allAbbreviationsSame).then(success => {
        return success ? Promise.resolve(undefined) : fallbackTab();
    });
}
exports.expandEmmetAbbreviation = expandEmmetAbbreviation;
function fallbackTab() {
    if (vscode.workspace.getConfiguration('emmet')['triggerExpansionOnTab'] === true) {
        return vscode.commands.executeCommand('tab');
    }
    return Promise.resolve(true);
}
/**
 * Checks if given position is a valid location to expand emmet abbreviation.
 * Works only on html and css/less/scss syntax
 * @param document current Text Document
 * @param rootNode parsed document
 * @param currentNode current node in the parsed document
 * @param syntax syntax of the abbreviation
 * @param position position to validate
 * @param abbreviationRange The range of the abbreviation for which given position is being validated
 */
function isValidLocationForEmmetAbbreviation(document, rootNode, currentNode, syntax, offset, abbreviationRange) {
    if ((0, util_1.isStyleSheet)(syntax)) {
        const stylesheet = rootNode;
        if (stylesheet && (stylesheet.comments || []).some(x => offset >= x.start && offset <= x.end)) {
            return false;
        }
        // Continue validation only if the file was parse-able and the currentNode has been found
        if (!currentNode) {
            return true;
        }
        // Get the abbreviation right now
        // Fixes https://github.com/microsoft/vscode/issues/74505
        // Stylesheet abbreviations starting with @ should bring up suggestions
        // even at outer-most level
        const abbreviation = document.getText(new vscode.Range(abbreviationRange.start.line, abbreviationRange.start.character, abbreviationRange.end.line, abbreviationRange.end.character));
        if (abbreviation.startsWith('@')) {
            return true;
        }
        // Fix for https://github.com/microsoft/vscode/issues/34162
        // Other than sass, stylus, we can make use of the terminator tokens to validate position
        if (syntax !== 'sass' && syntax !== 'stylus' && currentNode.type === 'property') {
            // Fix for upstream issue https://github.com/emmetio/css-parser/issues/3
            if (currentNode.parent
                && currentNode.parent.type !== 'rule'
                && currentNode.parent.type !== 'at-rule') {
                return false;
            }
            const propertyNode = currentNode;
            if (propertyNode.terminatorToken
                && propertyNode.separator
                && offset >= propertyNode.separatorToken.end
                && offset <= propertyNode.terminatorToken.start
                && abbreviation.indexOf(':') === -1) {
                return hexColorRegex.test(abbreviation) || abbreviation === '!';
            }
            if (!propertyNode.terminatorToken
                && propertyNode.separator
                && offset >= propertyNode.separatorToken.end
                && abbreviation.indexOf(':') === -1) {
                return hexColorRegex.test(abbreviation) || abbreviation === '!';
            }
            if (hexColorRegex.test(abbreviation) || abbreviation === '!') {
                return false;
            }
        }
        // If current node is a rule or at-rule, then perform additional checks to ensure
        // emmet suggestions are not provided in the rule selector
        if (currentNode.type !== 'rule' && currentNode.type !== 'at-rule') {
            return true;
        }
        const currentCssNode = currentNode;
        // Position is valid if it occurs after the `{` that marks beginning of rule contents
        if (offset > currentCssNode.contentStartToken.end) {
            return true;
        }
        // Workaround for https://github.com/microsoft/vscode/30188
        // The line above the rule selector is considered as part of the selector by the css-parser
        // But we should assume it is a valid location for css properties under the parent rule
        if (currentCssNode.parent
            && (currentCssNode.parent.type === 'rule' || currentCssNode.parent.type === 'at-rule')
            && currentCssNode.selectorToken) {
            const position = document.positionAt(offset);
            const tokenStartPos = document.positionAt(currentCssNode.selectorToken.start);
            const tokenEndPos = document.positionAt(currentCssNode.selectorToken.end);
            if (position.line !== tokenEndPos.line
                && tokenStartPos.character === abbreviationRange.start.character
                && tokenStartPos.line === abbreviationRange.start.line) {
                return true;
            }
        }
        return false;
    }
    const startAngle = '<';
    const endAngle = '>';
    const escape = '\\';
    const question = '?';
    const currentHtmlNode = currentNode;
    let start = 0;
    if (currentHtmlNode) {
        if (currentHtmlNode.name === 'script') {
            const typeAttribute = (currentHtmlNode.attributes || []).filter(x => x.name.toString() === 'type')[0];
            const typeValue = typeAttribute ? typeAttribute.value.toString() : '';
            if (util_1.allowedMimeTypesInScriptTag.indexOf(typeValue) > -1) {
                return true;
            }
            const isScriptJavascriptType = !typeValue || typeValue === 'application/javascript' || typeValue === 'text/javascript';
            if (isScriptJavascriptType) {
                return !!getSyntaxFromArgs({ language: 'javascript' });
            }
            return false;
        }
        // Fix for https://github.com/microsoft/vscode/issues/28829
        if (!currentHtmlNode.open || !currentHtmlNode.close ||
            !(currentHtmlNode.open.end <= offset && offset <= currentHtmlNode.close.start)) {
            return false;
        }
        // Fix for https://github.com/microsoft/vscode/issues/35128
        // Find the position up till where we will backtrack looking for unescaped < or >
        // to decide if current position is valid for emmet expansion
        start = currentHtmlNode.open.end;
        let lastChildBeforePosition = currentHtmlNode.firstChild;
        while (lastChildBeforePosition) {
            if (lastChildBeforePosition.end > offset) {
                break;
            }
            start = lastChildBeforePosition.end;
            lastChildBeforePosition = lastChildBeforePosition.nextSibling;
        }
    }
    const startPos = document.positionAt(start);
    let textToBackTrack = document.getText(new vscode.Range(startPos.line, startPos.character, abbreviationRange.start.line, abbreviationRange.start.character));
    // Worse case scenario is when cursor is inside a big chunk of text which needs to backtracked
    // Backtrack only 500 offsets to ensure we dont waste time doing this
    if (textToBackTrack.length > 500) {
        textToBackTrack = textToBackTrack.substr(textToBackTrack.length - 500);
    }
    if (!textToBackTrack.trim()) {
        return true;
    }
    let valid = true;
    let foundSpace = false; // If < is found before finding whitespace, then its valid abbreviation. E.g.: <div|
    let i = textToBackTrack.length - 1;
    if (textToBackTrack[i] === startAngle) {
        return false;
    }
    while (i >= 0) {
        const char = textToBackTrack[i];
        i--;
        if (!foundSpace && /\s/.test(char)) {
            foundSpace = true;
            continue;
        }
        if (char === question && textToBackTrack[i] === startAngle) {
            i--;
            continue;
        }
        // Fix for https://github.com/microsoft/vscode/issues/55411
        // A space is not a valid character right after < in a tag name.
        if (/\s/.test(char) && textToBackTrack[i] === startAngle) {
            i--;
            continue;
        }
        if (char !== startAngle && char !== endAngle) {
            continue;
        }
        if (i >= 0 && textToBackTrack[i] === escape) {
            i--;
            continue;
        }
        if (char === endAngle) {
            if (i >= 0 && textToBackTrack[i] === '=') {
                continue; // False alarm of cases like =>
            }
            else {
                break;
            }
        }
        if (char === startAngle) {
            valid = !foundSpace;
            break;
        }
    }
    return valid;
}
exports.isValidLocationForEmmetAbbreviation = isValidLocationForEmmetAbbreviation;
/**
 * Expands abbreviations as detailed in expandAbbrList in the editor
 *
 * @returns false if no snippet can be inserted.
 */
function expandAbbreviationInRange(editor, expandAbbrList, insertSameSnippet) {
    if (!expandAbbrList || expandAbbrList.length === 0) {
        return Promise.resolve(false);
    }
    // Snippet to replace at multiple cursors are not the same
    // `editor.insertSnippet` will have to be called for each instance separately
    // We will not be able to maintain multiple cursors after snippet insertion
    const insertPromises = [];
    if (!insertSameSnippet) {
        expandAbbrList.sort((a, b) => { return b.rangeToReplace.start.compareTo(a.rangeToReplace.start); }).forEach((expandAbbrInput) => {
            const expandedText = expandAbbr(expandAbbrInput);
            if (expandedText) {
                insertPromises.push(editor.insertSnippet(new vscode.SnippetString(expandedText), expandAbbrInput.rangeToReplace, { undoStopBefore: false, undoStopAfter: false }));
            }
        });
        if (insertPromises.length === 0) {
            return Promise.resolve(false);
        }
        return Promise.all(insertPromises).then(() => Promise.resolve(true));
    }
    // Snippet to replace at all cursors are the same
    // We can pass all ranges to `editor.insertSnippet` in a single call so that
    // all cursors are maintained after snippet insertion
    const anyExpandAbbrInput = expandAbbrList[0];
    const expandedText = expandAbbr(anyExpandAbbrInput);
    const allRanges = expandAbbrList.map(value => value.rangeToReplace);
    if (expandedText) {
        return editor.insertSnippet(new vscode.SnippetString(expandedText), allRanges);
    }
    return Promise.resolve(false);
}
/**
 * Expands abbreviation as detailed in given input.
 */
function expandAbbr(input) {
    const helper = (0, util_1.getEmmetHelper)();
    const expandOptions = helper.getExpandOptions(input.syntax, (0, util_1.getEmmetConfiguration)(input.syntax), input.filter);
    if (input.textToWrap) {
        if (input.filter && input.filter.includes('t')) {
            input.textToWrap = input.textToWrap.map(line => {
                return line.replace(trimRegex, '').trim();
            });
        }
        expandOptions['text'] = input.textToWrap;
        if (expandOptions.options) {
            // Below fixes https://github.com/microsoft/vscode/issues/29898
            // With this, Emmet formats inline elements as block elements
            // ensuring the wrapped multi line text does not get merged to a single line
            if (!input.rangeToReplace.isSingleLine) {
                expandOptions.options['output.inlineBreak'] = 1;
            }
            if (input.indent) {
                expandOptions.options['output.indent'] = input.indent;
            }
            if (input.baseIndent) {
                expandOptions.options['output.baseIndent'] = input.baseIndent;
            }
        }
    }
    let expandedText;
    try {
        expandedText = helper.expandAbbreviation(input.abbreviation, expandOptions);
    }
    catch (e) {
        vscode.window.showErrorMessage('Failed to expand abbreviation');
    }
    return expandedText;
}
function getSyntaxFromArgs(args) {
    const mappedModes = (0, util_1.getMappingForIncludedLanguages)();
    const language = args['language'];
    const parentMode = args['parentMode'];
    const excludedLanguages = vscode.workspace.getConfiguration('emmet')['excludeLanguages'] ? vscode.workspace.getConfiguration('emmet')['excludeLanguages'] : [];
    if (excludedLanguages.indexOf(language) > -1) {
        return;
    }
    let syntax = (0, util_1.getEmmetMode)((mappedModes[language] ? mappedModes[language] : language), excludedLanguages);
    if (!syntax) {
        syntax = (0, util_1.getEmmetMode)((mappedModes[parentMode] ? mappedModes[parentMode] : parentMode), excludedLanguages);
    }
    return syntax;
}
exports.getSyntaxFromArgs = getSyntaxFromArgs;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


Object.defineProperty(exports, "__esModule", { value: true });

function format(message, args) {
	let result;
	// if (isPseudo) {
	// 	// FF3B and FF3D is the Unicode zenkaku representation for [ and ]
	// 	message = '\uFF3B' + message.replace(/[aouei]/g, '$&$&') + '\uFF3D';
	// }
	if (args.length === 0) {
		result = message;
	}
	else {
		result = message.replace(/\{(\d+)\}/g, function (match, rest) {
			let index = rest[0];
			let arg = args[index];
			let replacement = match;
			if (typeof arg === 'string') {
				replacement = arg;
			}
			else if (typeof arg === 'number' || typeof arg === 'boolean' || arg === void 0 || arg === null) {
				replacement = String(arg);
			}
			return replacement;
		});
	}
	return result;
}

function localize(key, message) {
	let args = [];
	for (let _i = 2; _i < arguments.length; _i++) {
		args[_i - 2] = arguments[_i];
	}
	return format(message, args);
}

function loadMessageBundle(file) {
	return localize;
}

let MessageFormat;
(function (MessageFormat) {
	MessageFormat["file"] = "file";
	MessageFormat["bundle"] = "bundle";
	MessageFormat["both"] = "both";
})(MessageFormat = exports.MessageFormat || (exports.MessageFormat = {}));
let BundleFormat;
(function (BundleFormat) {
	// the nls.bundle format
	BundleFormat["standalone"] = "standalone";
	BundleFormat["languagePack"] = "languagePack";
})(BundleFormat = exports.BundleFormat || (exports.BundleFormat = {}));

exports.loadMessageBundle = loadMessageBundle;
function config(opts) {
	if (opts) {
		if (isString(opts.locale)) {
			options.locale = opts.locale.toLowerCase();
			options.language = options.locale;
			resolvedLanguage = undefined;
			resolvedBundles = Object.create(null);
		}
		if (opts.messageFormat !== undefined) {
			options.messageFormat = opts.messageFormat;
		}
		if (opts.bundleFormat === BundleFormat.standalone && options.languagePackSupport === true) {
			options.languagePackSupport = false;
		}
	}
	isPseudo = options.locale === 'pseudo';
	return loadMessageBundle;
}
exports.config = config;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSyntaxes = exports.getPathBaseName = exports.toLSTextDocument = exports.isNumber = exports.isStyleAttribute = exports.getEmbeddedCssNodeIfAny = exports.getCssPropertyFromDocument = exports.getCssPropertyFromRule = exports.iterateCSSToken = exports.getEmmetConfiguration = exports.sameNodes = exports.getNodesInBetween = exports.findPrevWord = exports.findNextWord = exports.getDeepestFlatNode = exports.offsetRangeToVsRange = exports.offsetRangeToSelection = exports.isOffsetInsideOpenOrCloseTag = exports.getHtmlFlatNode = exports.allowedMimeTypesInScriptTag = exports.getFlatNode = exports.parsePartialStylesheet = exports.getEmmetMode = exports.getMappingForIncludedLanguages = exports.validate = exports.isStyleSheet = exports.LANGUAGE_MODES = exports.migrateEmmetExtensionsPath = exports.updateEmmetExtensionsPath = exports.getEmmetHelper = exports.setHomeDir = void 0;
const vscode = __webpack_require__(2);
const html_matcher_1 = __webpack_require__(7);
const css_parser_1 = __webpack_require__(10);
const bufferStream_1 = __webpack_require__(11);
const vscode_languageserver_textdocument_1 = __webpack_require__(12);
const parseDocument_1 = __webpack_require__(13);
let _emmetHelper;
let _currentExtensionsPath;
let _homeDir;
function setHomeDir(homeDir) {
    _homeDir = homeDir;
}
exports.setHomeDir = setHomeDir;
function getEmmetHelper() {
    // Lazy load vscode-emmet-helper instead of importing it
    // directly to reduce the start-up time of the extension
    if (!_emmetHelper) {
        _emmetHelper = __webpack_require__(14);
    }
    return _emmetHelper;
}
exports.getEmmetHelper = getEmmetHelper;
/**
 * Update Emmet Helper to use user snippets from the extensionsPath setting
 */
function updateEmmetExtensionsPath(forceRefresh = false) {
    const helper = getEmmetHelper();
    let extensionsPath = vscode.workspace.getConfiguration('emmet').get('extensionsPath');
    if (!extensionsPath) {
        extensionsPath = [];
    }
    if (forceRefresh || _currentExtensionsPath !== extensionsPath) {
        _currentExtensionsPath = extensionsPath;
        if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length === 0) {
            return;
        }
        else {
            const rootPath = vscode.workspace.workspaceFolders[0].uri;
            const fileSystem = vscode.workspace.fs;
            helper.updateExtensionsPath(extensionsPath, fileSystem, rootPath, _homeDir).catch(err => {
                if (Array.isArray(extensionsPath) && extensionsPath.length) {
                    vscode.window.showErrorMessage(err.message);
                }
            });
        }
    }
}
exports.updateEmmetExtensionsPath = updateEmmetExtensionsPath;
/**
 * Migrate old configuration(string) for extensionsPath to new type(string[])
 * https://github.com/microsoft/vscode/issues/117517
 */
function migrateEmmetExtensionsPath() {
    // Get the detail info of emmet.extensionsPath setting
    let config = vscode.workspace.getConfiguration().inspect('emmet.extensionsPath');
    // Update Global setting if the value type is string or the value is null
    if (typeof (config === null || config === void 0 ? void 0 : config.globalValue) === 'string') {
        vscode.workspace.getConfiguration().update('emmet.extensionsPath', [config.globalValue], true);
    }
    else if ((config === null || config === void 0 ? void 0 : config.globalValue) === null) {
        vscode.workspace.getConfiguration().update('emmet.extensionsPath', [], true);
    }
    // Update Workspace setting if the value type is string or the value is null
    if (typeof (config === null || config === void 0 ? void 0 : config.workspaceValue) === 'string') {
        vscode.workspace.getConfiguration().update('emmet.extensionsPath', [config.workspaceValue], false);
    }
    else if ((config === null || config === void 0 ? void 0 : config.workspaceValue) === null) {
        vscode.workspace.getConfiguration().update('emmet.extensionsPath', [], false);
    }
    // Update WorkspaceFolder setting if the value type is string or the value is null
    if (typeof (config === null || config === void 0 ? void 0 : config.workspaceFolderValue) === 'string') {
        vscode.workspace.getConfiguration().update('emmet.extensionsPath', [config.workspaceFolderValue]);
    }
    else if ((config === null || config === void 0 ? void 0 : config.workspaceFolderValue) === null) {
        vscode.workspace.getConfiguration().update('emmet.extensionsPath', []);
    }
}
exports.migrateEmmetExtensionsPath = migrateEmmetExtensionsPath;
/**
 * Mapping between languages that support Emmet and completion trigger characters
 */
exports.LANGUAGE_MODES = {
    'html': ['!', '.', '}', ':', '*', '$', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'jade': ['!', '.', '}', ':', '*', '$', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'slim': ['!', '.', '}', ':', '*', '$', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'haml': ['!', '.', '}', ':', '*', '$', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'xml': ['.', '}', '*', '$', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'xsl': ['!', '.', '}', '*', '$', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'css': [':', '!', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'scss': [':', '!', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'sass': [':', '!', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'less': [':', '!', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'stylus': [':', '!', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'javascriptreact': ['!', '.', '}', '*', '$', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'typescriptreact': ['!', '.', '}', '*', '$', ']', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
};
function isStyleSheet(syntax) {
    let stylesheetSyntaxes = ['css', 'scss', 'sass', 'less', 'stylus'];
    return stylesheetSyntaxes.includes(syntax);
}
exports.isStyleSheet = isStyleSheet;
function validate(allowStylesheet = true) {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return false;
    }
    if (!allowStylesheet && isStyleSheet(editor.document.languageId)) {
        return false;
    }
    return true;
}
exports.validate = validate;
function getMappingForIncludedLanguages() {
    // Explicitly map languages that have built-in grammar in VS Code to their parent language
    // to get emmet completion support
    // For other languages, users will have to use `emmet.includeLanguages` or
    // language specific extensions can provide emmet completion support
    const MAPPED_MODES = {
        'handlebars': 'html',
        'php': 'html'
    };
    const finalMappedModes = Object.create(null);
    let includeLanguagesConfig = vscode.workspace.getConfiguration('emmet')['includeLanguages'];
    let includeLanguages = Object.assign({}, MAPPED_MODES, includeLanguagesConfig ? includeLanguagesConfig : {});
    Object.keys(includeLanguages).forEach(syntax => {
        if (typeof includeLanguages[syntax] === 'string' && exports.LANGUAGE_MODES[includeLanguages[syntax]]) {
            finalMappedModes[syntax] = includeLanguages[syntax];
        }
    });
    return finalMappedModes;
}
exports.getMappingForIncludedLanguages = getMappingForIncludedLanguages;
/**
* Get the corresponding emmet mode for given vscode language mode
* E.g.: jsx for typescriptreact/javascriptreact or pug for jade
* If the language is not supported by emmet or has been excluded via `excludeLanguages` setting,
* then nothing is returned
*
* @param excludedLanguages Array of language ids that user has chosen to exclude for emmet
*/
function getEmmetMode(language, excludedLanguages) {
    if (!language || excludedLanguages.indexOf(language) > -1) {
        return;
    }
    if (/\b(typescriptreact|javascriptreact|jsx-tags)\b/.test(language)) { // treat tsx like jsx
        return 'jsx';
    }
    if (language === 'sass-indented') { // map sass-indented to sass
        return 'sass';
    }
    if (language === 'jade') {
        return 'pug';
    }
    const syntaxes = getSyntaxes();
    if (syntaxes.markup.includes(language) || syntaxes.stylesheet.includes(language)) {
        return language;
    }
    return;
}
exports.getEmmetMode = getEmmetMode;
const closeBrace = 125;
const openBrace = 123;
const slash = 47;
const star = 42;
/**
 * Traverse the given document backward & forward from given position
 * to find a complete ruleset, then parse just that to return a Stylesheet
 * @param document vscode.TextDocument
 * @param position vscode.Position
 */
function parsePartialStylesheet(document, position) {
    const isCSS = document.languageId === 'css';
    const positionOffset = document.offsetAt(position);
    let startOffset = 0;
    let endOffset = document.getText().length;
    const limitCharacter = positionOffset - 5000;
    const limitOffset = limitCharacter > 0 ? limitCharacter : startOffset;
    const stream = new bufferStream_1.DocumentStreamReader(document, positionOffset);
    function findOpeningCommentBeforePosition(pos) {
        const text = document.getText().substring(0, pos);
        let offset = text.lastIndexOf('/*');
        if (offset === -1) {
            return;
        }
        return offset;
    }
    function findClosingCommentAfterPosition(pos) {
        const text = document.getText().substring(pos);
        let offset = text.indexOf('*/');
        if (offset === -1) {
            return;
        }
        offset += 2 + pos;
        return offset;
    }
    function consumeLineCommentBackwards() {
        const posLineNumber = document.positionAt(stream.pos).line;
        if (!isCSS && currentLine !== posLineNumber) {
            currentLine = posLineNumber;
            const startLineComment = document.lineAt(currentLine).text.indexOf('//');
            if (startLineComment > -1) {
                stream.pos = document.offsetAt(new vscode.Position(currentLine, startLineComment));
            }
        }
    }
    function consumeBlockCommentBackwards() {
        var _a;
        if (stream.peek() === slash) {
            if (stream.backUp(1) === star) {
                stream.pos = (_a = findOpeningCommentBeforePosition(stream.pos)) !== null && _a !== void 0 ? _a : startOffset;
            }
            else {
                stream.next();
            }
        }
    }
    function consumeCommentForwards() {
        var _a;
        if (stream.eat(slash)) {
            if (stream.eat(slash) && !isCSS) {
                const posLineNumber = document.positionAt(stream.pos).line;
                stream.pos = document.offsetAt(new vscode.Position(posLineNumber + 1, 0));
            }
            else if (stream.eat(star)) {
                stream.pos = (_a = findClosingCommentAfterPosition(stream.pos)) !== null && _a !== void 0 ? _a : endOffset;
            }
        }
    }
    // Go forward until we find a closing brace.
    while (!stream.eof() && !stream.eat(closeBrace)) {
        if (stream.peek() === slash) {
            consumeCommentForwards();
        }
        else {
            stream.next();
        }
    }
    if (!stream.eof()) {
        endOffset = stream.pos;
    }
    stream.pos = positionOffset;
    let openBracesToFind = 1;
    let currentLine = position.line;
    let exit = false;
    // Go back until we found an opening brace. If we find a closing one, consume its pair and continue.
    while (!exit && openBracesToFind > 0 && !stream.sof()) {
        consumeLineCommentBackwards();
        switch (stream.backUp(1)) {
            case openBrace:
                openBracesToFind--;
                break;
            case closeBrace:
                if (isCSS) {
                    stream.next();
                    startOffset = stream.pos;
                    exit = true;
                }
                else {
                    openBracesToFind++;
                }
                break;
            case slash:
                consumeBlockCommentBackwards();
                break;
            default:
                break;
        }
        if (position.line - document.positionAt(stream.pos).line > 100
            || stream.pos <= limitOffset) {
            exit = true;
        }
    }
    // We are at an opening brace. We need to include its selector.
    currentLine = document.positionAt(stream.pos).line;
    openBracesToFind = 0;
    let foundSelector = false;
    while (!exit && !stream.sof() && !foundSelector && openBracesToFind >= 0) {
        consumeLineCommentBackwards();
        const ch = stream.backUp(1);
        if (/\s/.test(String.fromCharCode(ch))) {
            continue;
        }
        switch (ch) {
            case slash:
                consumeBlockCommentBackwards();
                break;
            case closeBrace:
                openBracesToFind++;
                break;
            case openBrace:
                openBracesToFind--;
                break;
            default:
                if (!openBracesToFind) {
                    foundSelector = true;
                }
                break;
        }
        if (!stream.sof() && foundSelector) {
            startOffset = stream.pos;
        }
    }
    try {
        const buffer = ' '.repeat(startOffset) + document.getText().substring(startOffset, endOffset);
        return (0, css_parser_1.default)(buffer);
    }
    catch (e) {
        return;
    }
}
exports.parsePartialStylesheet = parsePartialStylesheet;
/**
 * Returns node corresponding to given position in the given root node
 */
function getFlatNode(root, offset, includeNodeBoundary) {
    if (!root) {
        return;
    }
    function getFlatNodeChild(child) {
        var _a;
        if (!child) {
            return;
        }
        const nodeStart = child.start;
        const nodeEnd = child.end;
        if ((nodeStart < offset && nodeEnd > offset)
            || (includeNodeBoundary && nodeStart <= offset && nodeEnd >= offset)) {
            return (_a = getFlatNodeChildren(child.children)) !== null && _a !== void 0 ? _a : child;
        }
        else if ('close' in child) {
            // We have an HTML node in this case.
            // In case this node is an invalid unpaired HTML node,
            // we still want to search its children
            const htmlChild = child;
            if (htmlChild.open && !htmlChild.close) {
                return getFlatNodeChildren(htmlChild.children);
            }
        }
        return;
    }
    function getFlatNodeChildren(children) {
        for (let i = 0; i < children.length; i++) {
            const foundChild = getFlatNodeChild(children[i]);
            if (foundChild) {
                return foundChild;
            }
        }
        return;
    }
    return getFlatNodeChildren(root.children);
}
exports.getFlatNode = getFlatNode;
exports.allowedMimeTypesInScriptTag = ['text/html', 'text/plain', 'text/x-template', 'text/template', 'text/ng-template'];
/**
 * Finds the HTML node within an HTML document at a given position
 * If position is inside a script tag of type template, then it will be parsed to find the inner HTML node as well
 */
function getHtmlFlatNode(documentText, root, offset, includeNodeBoundary) {
    const currentNode = getFlatNode(root, offset, includeNodeBoundary);
    if (!currentNode) {
        return;
    }
    const isTemplateScript = currentNode.name === 'script' &&
        (currentNode.attributes &&
            currentNode.attributes.some(x => x.name.toString() === 'type'
                && exports.allowedMimeTypesInScriptTag.includes(x.value.toString())));
    if (isTemplateScript
        && currentNode.open
        && offset > currentNode.open.end
        && (!currentNode.close || offset < currentNode.close.start)) {
        // blank out the rest of the document and search for the node within
        const beforePadding = ' '.repeat(currentNode.open.end);
        const endToUse = currentNode.close ? currentNode.close.start : currentNode.end;
        const scriptBodyText = beforePadding + documentText.substring(currentNode.open.end, endToUse);
        const innerRoot = (0, html_matcher_1.default)(scriptBodyText);
        const scriptBodyNode = getHtmlFlatNode(scriptBodyText, innerRoot, offset, includeNodeBoundary);
        if (scriptBodyNode) {
            scriptBodyNode.parent = currentNode;
            currentNode.children.push(scriptBodyNode);
            return scriptBodyNode;
        }
    }
    return currentNode;
}
exports.getHtmlFlatNode = getHtmlFlatNode;
function isOffsetInsideOpenOrCloseTag(node, offset) {
    const htmlNode = node;
    if ((htmlNode.open && offset > htmlNode.open.start && offset < htmlNode.open.end)
        || (htmlNode.close && offset > htmlNode.close.start && offset < htmlNode.close.end)) {
        return true;
    }
    return false;
}
exports.isOffsetInsideOpenOrCloseTag = isOffsetInsideOpenOrCloseTag;
function offsetRangeToSelection(document, start, end) {
    const startPos = document.positionAt(start);
    const endPos = document.positionAt(end);
    return new vscode.Selection(startPos, endPos);
}
exports.offsetRangeToSelection = offsetRangeToSelection;
function offsetRangeToVsRange(document, start, end) {
    const startPos = document.positionAt(start);
    const endPos = document.positionAt(end);
    return new vscode.Range(startPos, endPos);
}
exports.offsetRangeToVsRange = offsetRangeToVsRange;
/**
 * Returns the deepest non comment node under given node
 */
function getDeepestFlatNode(node) {
    if (!node || !node.children || node.children.length === 0 || !node.children.find(x => x.type !== 'comment')) {
        return node;
    }
    for (let i = node.children.length - 1; i >= 0; i--) {
        if (node.children[i].type !== 'comment') {
            return getDeepestFlatNode(node.children[i]);
        }
    }
    return undefined;
}
exports.getDeepestFlatNode = getDeepestFlatNode;
function findNextWord(propertyValue, pos) {
    let foundSpace = pos === -1;
    let foundStart = false;
    let foundEnd = false;
    let newSelectionStart;
    let newSelectionEnd;
    while (pos < propertyValue.length - 1) {
        pos++;
        if (!foundSpace) {
            if (propertyValue[pos] === ' ') {
                foundSpace = true;
            }
            continue;
        }
        if (foundSpace && !foundStart && propertyValue[pos] === ' ') {
            continue;
        }
        if (!foundStart) {
            newSelectionStart = pos;
            foundStart = true;
            continue;
        }
        if (propertyValue[pos] === ' ') {
            newSelectionEnd = pos;
            foundEnd = true;
            break;
        }
    }
    if (foundStart && !foundEnd) {
        newSelectionEnd = propertyValue.length;
    }
    return [newSelectionStart, newSelectionEnd];
}
exports.findNextWord = findNextWord;
function findPrevWord(propertyValue, pos) {
    let foundSpace = pos === propertyValue.length;
    let foundStart = false;
    let foundEnd = false;
    let newSelectionStart;
    let newSelectionEnd;
    while (pos > -1) {
        pos--;
        if (!foundSpace) {
            if (propertyValue[pos] === ' ') {
                foundSpace = true;
            }
            continue;
        }
        if (foundSpace && !foundEnd && propertyValue[pos] === ' ') {
            continue;
        }
        if (!foundEnd) {
            newSelectionEnd = pos + 1;
            foundEnd = true;
            continue;
        }
        if (propertyValue[pos] === ' ') {
            newSelectionStart = pos + 1;
            foundStart = true;
            break;
        }
    }
    if (foundEnd && !foundStart) {
        newSelectionStart = 0;
    }
    return [newSelectionStart, newSelectionEnd];
}
exports.findPrevWord = findPrevWord;
function getNodesInBetween(node1, node2) {
    // Same node
    if (sameNodes(node1, node2)) {
        return [node1];
    }
    // Not siblings
    if (!sameNodes(node1.parent, node2.parent)) {
        // node2 is ancestor of node1
        if (node2.start < node1.start) {
            return [node2];
        }
        // node1 is ancestor of node2
        if (node2.start < node1.end) {
            return [node1];
        }
        // Get the highest ancestor of node1 that should be commented
        while (node1.parent && node1.parent.end < node2.start) {
            node1 = node1.parent;
        }
        // Get the highest ancestor of node2 that should be commented
        while (node2.parent && node2.parent.start > node1.start) {
            node2 = node2.parent;
        }
    }
    const siblings = [];
    let currentNode = node1;
    const position = node2.end;
    while (currentNode && position > currentNode.start) {
        siblings.push(currentNode);
        currentNode = currentNode.nextSibling;
    }
    return siblings;
}
exports.getNodesInBetween = getNodesInBetween;
function sameNodes(node1, node2) {
    // return true if they're both undefined
    if (!node1 && !node2) {
        return true;
    }
    // return false if only one of them is undefined
    if (!node1 || !node2) {
        return false;
    }
    return node1.start === node2.start && node1.end === node2.end;
}
exports.sameNodes = sameNodes;
function getEmmetConfiguration(syntax) {
    const emmetConfig = vscode.workspace.getConfiguration('emmet');
    const syntaxProfiles = Object.assign({}, emmetConfig['syntaxProfiles'] || {});
    const preferences = Object.assign({}, emmetConfig['preferences'] || {});
    // jsx, xml and xsl syntaxes need to have self closing tags unless otherwise configured by user
    if (syntax === 'jsx' || syntax === 'xml' || syntax === 'xsl') {
        syntaxProfiles[syntax] = syntaxProfiles[syntax] || {};
        if (typeof syntaxProfiles[syntax] === 'object'
            && !syntaxProfiles[syntax].hasOwnProperty('self_closing_tag') // Old Emmet format
            && !syntaxProfiles[syntax].hasOwnProperty('selfClosingStyle') // Emmet 2.0 format
        ) {
            syntaxProfiles[syntax] = {
                ...syntaxProfiles[syntax],
                selfClosingStyle: 'xml'
            };
        }
    }
    return {
        preferences,
        showExpandedAbbreviation: emmetConfig['showExpandedAbbreviation'],
        showAbbreviationSuggestions: emmetConfig['showAbbreviationSuggestions'],
        syntaxProfiles,
        variables: emmetConfig['variables'],
        excludeLanguages: emmetConfig['excludeLanguages'],
        showSuggestionsAsSnippets: emmetConfig['showSuggestionsAsSnippets']
    };
}
exports.getEmmetConfiguration = getEmmetConfiguration;
/**
 * Itereates by each child, as well as nested child's children, in their order
 * and invokes `fn` for each. If `fn` function returns `false`, iteration stops
 */
function iterateCSSToken(token, fn) {
    for (let i = 0, il = token.size; i < il; i++) {
        if (fn(token.item(i)) === false || iterateCSSToken(token.item(i), fn) === false) {
            return false;
        }
    }
    return true;
}
exports.iterateCSSToken = iterateCSSToken;
/**
 * Returns `name` CSS property from given `rule`
 */
function getCssPropertyFromRule(rule, name) {
    return rule.children.find(node => node.type === 'property' && node.name === name);
}
exports.getCssPropertyFromRule = getCssPropertyFromRule;
/**
 * Returns css property under caret in given editor or `null` if such node cannot
 * be found
 */
function getCssPropertyFromDocument(editor, position) {
    const document = editor.document;
    const rootNode = (0, parseDocument_1.getRootNode)(document, true);
    const offset = document.offsetAt(position);
    const node = getFlatNode(rootNode, offset, true);
    if (isStyleSheet(editor.document.languageId)) {
        return node && node.type === 'property' ? node : null;
    }
    const htmlNode = node;
    if (htmlNode
        && htmlNode.name === 'style'
        && htmlNode.open && htmlNode.close
        && htmlNode.open.end < offset
        && htmlNode.close.start > offset) {
        const buffer = ' '.repeat(htmlNode.start) +
            document.getText().substring(htmlNode.start, htmlNode.end);
        const innerRootNode = (0, css_parser_1.default)(buffer);
        const innerNode = getFlatNode(innerRootNode, offset, true);
        return (innerNode && innerNode.type === 'property') ? innerNode : null;
    }
    return null;
}
exports.getCssPropertyFromDocument = getCssPropertyFromDocument;
function getEmbeddedCssNodeIfAny(document, currentNode, position) {
    if (!currentNode) {
        return;
    }
    const currentHtmlNode = currentNode;
    if (currentHtmlNode && currentHtmlNode.open && currentHtmlNode.close) {
        const offset = document.offsetAt(position);
        if (currentHtmlNode.open.end <= offset && offset <= currentHtmlNode.close.start) {
            if (currentHtmlNode.name === 'style'
                && currentHtmlNode.open.end < offset
                && currentHtmlNode.close.start > offset) {
                const buffer = ' '.repeat(currentHtmlNode.open.end) + document.getText().substring(currentHtmlNode.open.end, currentHtmlNode.close.start);
                return (0, css_parser_1.default)(buffer);
            }
        }
    }
    return;
}
exports.getEmbeddedCssNodeIfAny = getEmbeddedCssNodeIfAny;
function isStyleAttribute(currentNode, offset) {
    if (!currentNode) {
        return false;
    }
    const currentHtmlNode = currentNode;
    const index = (currentHtmlNode.attributes || []).findIndex(x => x.name.toString() === 'style');
    if (index === -1) {
        return false;
    }
    const styleAttribute = currentHtmlNode.attributes[index];
    return offset >= styleAttribute.value.start && offset <= styleAttribute.value.end;
}
exports.isStyleAttribute = isStyleAttribute;
function isNumber(obj) {
    return typeof obj === 'number';
}
exports.isNumber = isNumber;
function toLSTextDocument(doc) {
    return vscode_languageserver_textdocument_1.TextDocument.create(doc.uri.toString(), doc.languageId, doc.version, doc.getText());
}
exports.toLSTextDocument = toLSTextDocument;
function getPathBaseName(path) {
    const pathAfterSlashSplit = path.split('/').pop();
    const pathAfterBackslashSplit = pathAfterSlashSplit ? pathAfterSlashSplit.split('\\').pop() : '';
    return pathAfterBackslashSplit !== null && pathAfterBackslashSplit !== void 0 ? pathAfterBackslashSplit : '';
}
exports.getPathBaseName = getPathBaseName;
function getSyntaxes() {
    /**
     * List of all known syntaxes, from emmetio/emmet
     */
    return {
        markup: ['html', 'xml', 'xsl', 'jsx', 'js', 'pug', 'slim', 'haml'],
        stylesheet: ['css', 'sass', 'scss', 'less', 'sss', 'stylus']
    };
}
exports.getSyntaxes = getSyntaxes;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony import */ var _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



class Node {
	constructor(stream, type, open, close) {
		this.stream = stream;
		this.type = type;
		this.open = open;
		this.close = close;

		this.children = [];
		this.parent = null;
	}

	/**
	 * Returns node name
	 * @return {String}
	 */
	get name() {
		if (this.type === 'tag' && this.open) {
			return this.open && this.open.name && this.open.name.value;
		}

		return '#' + this.type;
	}

	/**
	 * Returns attributes of current node
	 * @return {Array}
	 */
	get attributes() {
		return this.open && this.open.attributes;
	}

	/**
	 * Returns node’s start position in stream
	 * @return {*}
	 */
	get start() {
		return this.open && this.open.start;
	}

	/**
	 * Returns node’s start position in stream
	 * @return {*}
	 */
	get end() {
		return this.close ? this.close.end : this.open && this.open.end;
	}

	get firstChild() {
		return this.children[0];
	}

	get nextSibling() {
		const ix = this.getIndex();
		return ix !== -1 ? this.parent.children[ix + 1] : null;
	}

	get previousSibling() {
		const ix = this.getIndex();
		return ix !== -1 ? this.parent.children[ix - 1] : null;
	}

	/**
	 * Returns current element’s index in parent list of child nodes
	 * @return {Number}
	 */
	getIndex() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}

	/**
	 * Adds given node as a child
	 * @param {Node} node
	 * @return {Node} Current node
	 */
	addChild(node) {
		this.removeChild(node);
		this.children.push(node);
		node.parent = this;
		return this;
	}

	/**
	 * Removes given node from current node’s child list
	 * @param  {Node} node
	 * @return {Node} Current node
	 */
	removeChild(node) {
		const ix = this.children.indexOf(node);
		if (ix !== -1) {
			this.children.splice(ix, 1);
			node.parent = null;
		}

		return this;
	}
}

/**
 * A token factory method
 * @param  {StreamReader}   stream
 * @param  {Point|Function} start  Tokens’ start location or stream consumer
 * @param  {Point}          [end]  Tokens’ end location
 * @return {Token}
 */
var token = function(stream, start, end) {
	return typeof start === 'function'
		? eatToken(stream, start)
		: new Token(stream, start, end);
};

/**
 * Consumes characters from given stream that matches `fn` call and returns it
 * as token, if consumed
 * @param  {StreamReader} stream
 * @param  {Function} test
 * @return {Token}
 */
function eatToken(stream, test) {
	const start = stream.pos;
	if (stream.eatWhile(test)) {
		return new Token(stream, start, stream.pos);
	}

	stream.pos = start;
}

/**
 * A structure describing text fragment in content stream
 */
class Token {
	/**
	 * @param {ContentStreamReader} stream
	 * @param {Point} start         Tokens’ start location in content stream
	 * @param {Point} end           Tokens’ end location in content stream
	 */
	constructor(stream, start, end) {
		this.stream = stream;
		this.start = start != null ? start : stream.start;
		this.end   = end   != null ? end   : stream.pos;
		this._value = null;
	}

	/**
	 * Returns token textual value
	 * NB implemented as getter to reduce unnecessary memory allocations for
	 * strings that not required
	 * @return {String}
	 */
	get value() {
		if (this._value === null) {
			const start = this.stream.start;
			const end = this.stream.pos;

			this.stream.start = this.start;
			this.stream.pos = this.end;
			this._value = this.stream.current();

			this.stream.start = start;
			this.stream.pos = end;
		}

		return this._value;
	}

	toString() {
		return this.value;
	}

	valueOf() {
		return `${this.value} [${this.start}; ${this.end}]`;
	}
}

const LANGLE  = 60;
const RANGLE  = 62;  // < and >
const LSQUARE = 91;
const RSQUARE = 93;  // [ and ]
const LROUND  = 40;
const RROUND  = 41;  // ( and )
const LCURLY  = 123;
const RCURLY  = 125; // { and }

const opt = { throws: true };

/**
 * Consumes paired tokens (like `[` and `]`) with respect of nesting and embedded
 * quoted values
 * @param  {StreamReader} stream
 * @return {Token} A token with consumed paired character
 */
var eatPaired = function(stream) {
	const start = stream.pos;
	const consumed = Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["eatPair"])(stream, LANGLE, RANGLE, opt)
		|| Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["eatPair"])(stream, LSQUARE, RSQUARE, opt)
		|| Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["eatPair"])(stream, LROUND,  RROUND,  opt)
		|| Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["eatPair"])(stream, LCURLY,  RCURLY,  opt);

	if (consumed) {
		return token(stream, start);
	}
};

const SLASH$1        = 47;  // /
const EQUALS       = 61;  // =
const RIGHT_ANGLE$1  = 62;  // >

/**
 * Consumes attributes from given stream
 * @param {StreamReader} stream
 * @return {Array} Array of consumed attributes
 */
var eatAttributes = function(stream) {
	const result = [];
	let name, value, attr;

	while (!stream.eof()) {
		stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isSpace"]);
		attr = { start: stream.pos };

		// A name could be a regular name or expression:
		// React-style – <div {...props}>
		// Angular-style – <div [ng-for]>
		if (attr.name = eatAttributeName(stream)) {
			// Consumed attribute name. Can be an attribute with name
			// or boolean attribute. The value can be React-like expression
			if (stream.eat(EQUALS)) {
				attr.value = eatAttributeValue(stream);
			} else {
				attr.boolean = true;
			}
			attr.end = stream.pos;
			result.push(attr);
		} else if (isTerminator(stream.peek())) {
			// look for tag terminator in order to skip any other possible characters
			// (maybe junk)
			break;
		} else {
			stream.next();
		}
	}

	return result;
};

/**
 * Consumes attribute name from current location
 * @param  {StreamReader} stream
 * @return {Token}
 */
function eatAttributeName(stream) {
	return eatPaired(stream) || token(stream, isAttributeName);
}

/**
 * Consumes attribute value from given location
 * @param  {StreamReader} stream
 * @return {Token}
 */
function eatAttributeValue(stream) {
	const start = stream.pos;
	if (Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["eatQuoted"])(stream)) {
		// Should return token that points to unquoted value.
		// Use stream readers’ public API to traverse instead of direct
		// manipulation
		const current = stream.pos;
		let valueStart, valueEnd;

		stream.pos = start;
		stream.next();
		valueStart = stream.start = stream.pos;

		stream.pos = current;
		stream.backUp(1);
		valueEnd = stream.pos;

		const result = token(stream, valueStart, valueEnd);
		stream.pos = current;
		return result;
	}

	return eatPaired(stream) || eatUnquoted(stream);
}

/**
 * Check if given code belongs to attribute name.
 * NB some custom HTML variations allow non-default values in name, like `*ngFor`
 * @param  {Number}  code
 * @return {Boolean}
 */
function isAttributeName(code) {
	return code !== EQUALS && !isTerminator(code) && !Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isSpace"])(code);
}

/**
 * Check if given code is tag terminator
 * @param  {Number}  code
 * @return {Boolean}
 */
function isTerminator(code) {
	return code === RIGHT_ANGLE$1 || code === SLASH$1;
}

/**
 * Eats unquoted value from stream
 * @param  {StreamReader} stream
 * @return {Token}
 */
function eatUnquoted(stream) {
	return token(stream, isUnquoted);
}

/**
 * Check if given character code is valid unquoted value
 * @param  {Number}  code
 * @return {Boolean}
 */
function isUnquoted(code) {
	return !isNaN(code) && !Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isQuote"])(code) && !Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isSpace"])(code) && !isTerminator(code);
}

const DASH        = 45; // -
const DOT         = 46; // .
const SLASH       = 47; // /
const COLON       = 58; // :
const LEFT_ANGLE  = 60; // <
const RIGHT_ANGLE = 62; // >
const UNDERSCORE  = 95; // _

/**
 * Parses tag definition (open or close tag) from given stream state
 * @param {StreamReader} stream Content stream reader
 * @return {Object}
 */
var tag = function(stream) {
	const start = stream.pos;

	if (stream.eat(LEFT_ANGLE)) {
		const model = { type: stream.eat(SLASH) ? 'close' : 'open' };

		if (model.name = eatTagName(stream)) {
			if (model.type !== 'close') {
				model.attributes = eatAttributes(stream);
				stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isSpace"]);
				model.selfClosing = stream.eat(SLASH);
			}

			if (stream.eat(RIGHT_ANGLE)) {
				// tag properly closed
				return Object.assign(token(stream, start), model);
			}
		}
	}

	// invalid tag, revert to original position
	stream.pos = start;
	return null;
};

/**
 * Eats HTML identifier (tag or attribute name) from given stream
 * @param  {StreamReader} stream
 * @return {Token}
 */
function eatTagName(stream) {
	return token(stream, isTagName);
}

/**
 * Check if given character code can be used as HTML/XML tag name
 * @param  {Number}  code
 * @return {Boolean}
 */
function isTagName(code) {
	return Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isAlphaNumeric"])(code)
		|| code === COLON // colon is used for namespaces
		|| code === DOT   // in rare cases declarative tag names may have dots in names
		|| code === DASH
		|| code === UNDERSCORE;
}

/**
 * Eats array of character codes from given stream
 * @param  {StreamReader} stream
 * @param  {Number[]} codes  Array of character codes
 * @return {Boolean}
 */
function eatArray(stream, codes) {
	const start = stream.pos;

	for (let i = 0; i < codes.length; i++) {
		if (!stream.eat(codes[i])) {
			stream.pos = start;
			return false;
		}
	}

	stream.start = start;
	return true;
}

/**
 * Consumes section from given string which starts with `open` character codes
 * and ends with `close` character codes
 * @param  {StreamReader} stream
 * @param  {Number[]} open
 * @param  {Number[]} close
 * @return {Boolean}  Returns `true` if section was consumed
 */
function eatSection(stream, open, close, allowUnclosed) {
	const start = stream.pos;
	if (eatArray(stream, open)) {
		// consumed `<!--`, read next until we find ending part or reach the end of input
		while (!stream.eof()) {
			if (eatArray(stream, close)) {
				return true;
			}

			stream.next();
		}

		// unclosed section is allowed
		if (allowUnclosed) {
			return true;
		}

		stream.pos = start;
		return false;
	}

	// unable to find section, revert to initial position
	stream.pos = start;
	return null;
}

/**
 * Converts given string into array of character codes
 * @param  {String} str
 * @return {Number[]}
 */
function toCharCodes(str) {
	return str.split('').map(ch => ch.charCodeAt(0));
}

const open  = toCharCodes('<!--');
const close = toCharCodes('-->');

/**
 * Consumes HTML comment from given stream
 * @param  {StreamReader} stream
 * @return {Token}
 */
var comment = function(stream) {
	const start = stream.pos;
	if (eatSection(stream, open, close, true)) {
		const result = token(stream, start);
		result.type = 'comment';
		return result;
	}

	return null;
};

const open$1  = toCharCodes('<![CDATA[');
const close$1 = toCharCodes(']]>');

/**
 * Consumes CDATA from given stream
 * @param  {StreamReader} stream
 * @return {Token}
 */
var cdata = function(stream) {
	const start = stream.pos;
	if (eatSection(stream, open$1, close$1, true)) {
		const result = token(stream, start);
		result.type = 'cdata';
		return result;
	}

	return null;
};

const defaultOptions = {
	/**
	 * Expect XML content in searching content. It alters how should-be-empty
	 * elements are treated: for example, in XML mode parser will try to locate
	 * closing pair for `<br>` tag
	 * @type {Boolean}
	 */
	xml: false,

	special: ['script', 'style'],

	/**
	 * List of elements that should be treated as empty (e.g. without closing tag)
	 * in non-XML syntax
	 * @type {Array}
	 */
	empty: ['img', 'meta', 'link', 'br', 'base', 'hr', 'area', 'wbr','col', 'embed', 'input', 'param', 'source', 'track']
};

/**
 * Parses given content into a DOM-like structure
 * @param  {String|StreamReader} content
 * @param  {Object} options
 * @return {Node}
 */
function parse(content, options) {
	options = Object.assign({}, defaultOptions, options);
	const stream = typeof content === 'string'
		? new _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__["default"](content)
		: content;

	const root = new Node(stream, 'root');
	const empty = new Set(options.empty);
	const special = options.special.reduce(
		(map, name) => map.set(name, toCharCodes(`</${name}>`)), new Map());
	const isEmpty = (token, name) =>
		token.selfClosing || (!options.xml && empty.has(name));

	let m, node, name, stack = [root];

	while (!stream.eof()) {
		if (m = match(stream)) {
			name = getName(m);

			if (m.type === 'open') {
				// opening tag
				node = new Node(stream, 'tag', m);
				last(stack).addChild(node);
				if (special.has(name)) {
					node.close = consumeSpecial(stream, special.get(name));
				} else if (!isEmpty(m, name)) {
					stack.push(node);
				}
			} else if (m.type === 'close') {
				// closing tag, find it’s matching opening tag
				for (let i = stack.length - 1; i > 0; i--) {
					if (stack[i].name.toLowerCase() === name) {
						stack[i].close = m;
						stack = stack.slice(0, i);
						break;
					}
				}
			} else {
				last(stack).addChild(new Node(stream, m.type, m));
			}
		} else {
			stream.next();
		}
	}

	return root;
}

/**
 * Matches known token in current state of given stream
 * @param  {ContentStreamReader} stream
 * @return {Token}
 */
function match(stream) {
	// fast-path optimization: check for `<` code
	if (stream.peek() === 60 /* < */) {
		return comment(stream) || cdata(stream) || tag(stream);
	}
}

/**
 * @param  {StreamReader} stream
 * @param  {Number[]} codes
 * @return {Token}
 */
function consumeSpecial(stream, codes) {
	const start = stream.pos;
	let m;

	while (!stream.eof()) {
		if (eatArray(stream, codes)) {
			stream.pos = stream.start;
			return tag(stream);
		}
		stream.next();
	}

	stream.pos = start;
	return null;
}

/**
 * Returns name of given matched token
 * @param  {Token} tag
 * @return {String}
 */
function getName(tag$$1) {
	return tag$$1.name ? tag$$1.name.value.toLowerCase() : `#${tag$$1.type}`;
}

function last(arr) {
	return arr[arr.length - 1];
}

/* harmony default export */ __webpack_exports__["default"] = (parse);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A streaming, character code-based string reader
 */
class StreamReader {
	constructor(string, start, end) {
		if (end == null && typeof string === 'string') {
			end = string.length;
		}

		this.string = string;
		this.pos = this.start = start || 0;
		this.end = end;
	}

	/**
	 * Returns true only if the stream is at the end of the file.
	 * @returns {Boolean}
	 */
	eof() {
		return this.pos >= this.end;
	}

	/**
	 * Creates a new stream instance which is limited to given `start` and `end`
	 * range. E.g. its `eof()` method will look at `end` property, not actual
	 * stream end
	 * @param  {Point} start
	 * @param  {Point} end
	 * @return {StreamReader}
	 */
	limit(start, end) {
		return new this.constructor(this.string, start, end);
	}

	/**
	 * Returns the next character code in the stream without advancing it.
	 * Will return NaN at the end of the file.
	 * @returns {Number}
	 */
	peek() {
		return this.string.charCodeAt(this.pos);
	}

	/**
	 * Returns the next character in the stream and advances it.
	 * Also returns <code>undefined</code> when no more characters are available.
	 * @returns {Number}
	 */
	next() {
		if (this.pos < this.string.length) {
			return this.string.charCodeAt(this.pos++);
		}
	}

	/**
	 * `match` can be a character code or a function that takes a character code
	 * and returns a boolean. If the next character in the stream 'matches'
	 * the given argument, it is consumed and returned.
	 * Otherwise, `false` is returned.
	 * @param {Number|Function} match
	 * @returns {Boolean}
	 */
	eat(match) {
		const ch = this.peek();
		const ok = typeof match === 'function' ? match(ch) : ch === match;

		if (ok) {
			this.next();
		}

		return ok;
	}

	/**
	 * Repeatedly calls <code>eat</code> with the given argument, until it
	 * fails. Returns <code>true</code> if any characters were eaten.
	 * @param {Object} match
	 * @returns {Boolean}
	 */
	eatWhile(match) {
		const start = this.pos;
		while (!this.eof() && this.eat(match)) {}
		return this.pos !== start;
	}

	/**
	 * Backs up the stream n characters. Backing it up further than the
	 * start of the current token will cause things to break, so be careful.
	 * @param {Number} n
	 */
	backUp(n) {
		this.pos -= (n || 1);
	}

	/**
	 * Get the string between the start of the current token and the
	 * current stream position.
	 * @returns {String}
	 */
	current() {
		return this.substring(this.start, this.pos);
	}

	/**
	 * Returns substring for given range
	 * @param  {Number} start
	 * @param  {Number} [end]
	 * @return {String}
	 */
	substring(start, end) {
		return this.string.slice(start, end);
	}

	/**
	 * Creates error object with current stream state
	 * @param {String} message
	 * @return {Error}
	 */
	error(message) {
		const err = new Error(`${message} at char ${this.pos + 1}`);
		err.originalMessage = message;
		err.pos = this.pos;
		err.string = this.string;
		return err;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (StreamReader);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eatQuoted", function() { return eatQuoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuote", function() { return isQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlpha", function() { return isAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphaNumeric", function() { return isAlphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpace", function() { return isSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWhiteSpace", function() { return isWhiteSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eatPair", function() { return eatPair; });
/**
 * Methods for consuming quoted values
 */

const SINGLE_QUOTE = 39; // '
const DOUBLE_QUOTE = 34; // "

const defaultOptions = {
	escape: 92,   // \ character
	throws: false
};

/**
 * Consumes 'single' or "double"-quoted string from given string, if possible
 * @param  {StreamReader} stream
 * @param  {Number}  options.escape A character code of quote-escape symbol
 * @param  {Boolean} options.throws Throw error if quotes string can’t be properly consumed
 * @return {Boolean} `true` if quoted string was consumed. The contents
 *                   of quoted string will be availabe as `stream.current()`
 */
var eatQuoted = function(stream, options) {
	options = options ? Object.assign({}, defaultOptions, options) : defaultOptions;
	const start = stream.pos;
	const quote = stream.peek();

	if (stream.eat(isQuote)) {
		while (!stream.eof()) {
			switch (stream.next()) {
				case quote:
					stream.start = start;
					return true;

				case options.escape:
					stream.next();
					break;
			}
		}

		// If we’re here then stream wasn’t properly consumed.
		// Revert stream and decide what to do
		stream.pos = start;

		if (options.throws) {
			throw stream.error('Unable to consume quoted string');
		}
	}

	return false;
};

function isQuote(code) {
	return code === SINGLE_QUOTE || code === DOUBLE_QUOTE;
}

/**
 * Check if given code is a number
 * @param  {Number}  code
 * @return {Boolean}
 */
function isNumber(code) {
	return code > 47 && code < 58;
}

/**
 * Check if given character code is alpha code (letter through A to Z)
 * @param  {Number}  code
 * @param  {Number}  [from]
 * @param  {Number}  [to]
 * @return {Boolean}
 */
function isAlpha(code, from, to) {
	from = from || 65; // A
	to   = to   || 90; // Z
	code &= ~32; // quick hack to convert any char code to uppercase char code

	return code >= from && code <= to;
}

/**
 * Check if given character code is alpha-numeric (letter through A to Z or number)
 * @param  {Number}  code
 * @return {Boolean}
 */
function isAlphaNumeric(code) {
	return isNumber(code) || isAlpha(code);
}

function isWhiteSpace(code) {
	return code === 32   /* space */
		|| code === 9    /* tab */
		|| code === 160; /* non-breaking space */
}

/**
 * Check if given character code is a space
 * @param  {Number}  code
 * @return {Boolean}
 */
function isSpace(code) {
	return isWhiteSpace(code)
		|| code === 10  /* LF */
		|| code === 13; /* CR */
}

const defaultOptions$1 = {
	escape: 92,   // \ character
	throws: false
};

/**
 * Eats paired characters substring, for example `(foo)` or `[bar]`
 * @param  {StreamReader} stream
 * @param  {Number} open      Character code of pair openinig
 * @param  {Number} close     Character code of pair closing
 * @param  {Object} [options]
 * @return {Boolean}       Returns `true` if chacarter pair was successfully
 *                         consumed, it’s content will be available as `stream.current()`
 */
function eatPair(stream, open, close, options) {
	options = options ? Object.assign({}, defaultOptions$1, options) : defaultOptions$1;
	const start = stream.pos;

	if (stream.eat(open)) {
		let stack = 1, ch;

		while (!stream.eof()) {
			if (eatQuoted(stream, options)) {
				continue;
			}

			ch = stream.next();
			if (ch === open) {
				stack++;
			} else if (ch === close) {
				stack--;
				if (!stack) {
					stream.start = start;
					return true;
				}
			} else if (ch === options.escape) {
				stream.next();
			}
		}

		// If we’re here then paired character can’t be consumed
		stream.pos = start;

		if (options.throws) {
			throw stream.error(`Unable to find matching pair for ${String.fromCharCode(open)}`);
		}
	}

	return false;
}




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexer", function() { return lexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyword", function() { return keyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatting", function() { return formatting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitespace", function() { return whitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ident", function() { return ident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolation", function() { return interpolation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backtick", function() { return backtick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMediaExpression", function() { return parseMediaExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePropertyName", function() { return parsePropertyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePropertyValue", function() { return parsePropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSelector", function() { return parseSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProperty", function() { return createProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRule", function() { return createRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtRule", function() { return createAtRule; });
/* harmony import */ var _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



/**
 * Abstract container that contains nested nodes or other containers
 */
class Node {
	constructor(type) {
		this.type = type;
		this.children = [];
		this.parent = null;
	}

	get firstChild() {
		return this.children[0];
	}

	get nextSibling() {
		const ix = this.index();
		return ix !== -1 ? this.parent.children[ix + 1] : null;
	}

	get previousSibling() {
		const ix = this.index();
		return ix !== -1 ? this.parent.children[ix - 1] : null;
	}

	/**
	 * Returns current element’s index in parent list of child nodes
	 * @return {Number}
	 */
	index() {
		return this.parent ? this.parent.children.indexOf(this) : -1;
	}

	/**
	 * Adds given node as a child
	 * @param {Node} node
	 * @return {Node} Current node
	 */
	add(node) {
		if (node) {
			node.remove();
			this.children.push(node);
			node.parent = this;
		}
		return this;
	}

	/**
	 * Removes current node from its parent
	 * @return {Node} Current node
	 */
	remove() {
		if (this.parent) {
			const ix = this.index();
			if (ix !== -1) {
				this.parent.children.splice(ix, 1);
				this.parent = null;
			}
		}

		return this;
	}
}

class Stylesheet extends Node {
	constructor() {
		super('stylesheet');
		this.comments = [];
	}

	/**
	 * Returns node’s start position in stream
	 * @return {*}
	 */
	get start() {
		const node = this.firstChild;
		return node && node.start;
	}

	/**
	 * Returns node’s end position in stream
	 * @return {*}
	 */
	get end() {
		const node = this.children[this.children.length - 1];
		return node && node.end;
	}

	/**
	 * Adds comment token into a list.
	 * This somewhat awkward feature is required to properly detect comment
	 * ranges. Specifically, in Atom: it’s API provides scopes limited to current
	 * line only
	 * @param {Token} token
	 */
	addComment(token) {
		this.comments.push(token);
	}
}

/**
 * Removes tokens that matches given criteria from start and end of given list
 * @param  {Token[]} tokens
 * @return {Token[]}
 */
function trimTokens(tokens) {
	tokens = tokens.slice();
	let len;
	while (len !== tokens.length) {
		len = tokens.length;
		if (isFormattingToken(tokens[0])) {
			tokens.shift();
		}

		if (isFormattingToken(last(tokens))) {
			tokens.pop();
		}
	}

	return tokens;
}

/**
 * Trims formatting tokens (whitespace and comments) from the beginning and end
 * of given token list
 * @param  {Token[]} tokens
 * @return {Token[]}
 */
function trimFormatting(tokens) {
	return trimTokens(tokens, isFormattingToken);
}

/**
 * Check if given token is a formatting one (whitespace or comment)
 * @param  {Token}  token
 * @return {Boolean}
 */
function isFormattingToken(token) {
	const type = token && token.type;
	return type === 'whitespace' || type === 'comment';
}

/**
 * Consumes string char-by-char from given stream
 * @param  {StreamReader} stream
 * @param  {String} string
 * @return {Boolean} Returns `true` if string was completely consumed
 */
function eatString(stream, string) {
	const start = stream.pos;

	for (let i = 0, il = string.length; i < il; i++) {
		if (!stream.eat(string.charCodeAt(i))) {
			stream.pos = start;
			return false;
		}
	}

	return true;
}

function consume(stream, match) {
	const start = stream.pos;
	if (stream.eat(match)) {
		stream.start = start;
		return true;
	}

	return false;
}

function consumeWhile(stream, match) {
	const start = stream.pos;
	if (stream.eatWhile(match)) {
		stream.start = start;
		return true;
	}

	return false;
}

function last(arr) {
	return arr[arr.length - 1];
}

function valueOf(token) {
	return token && token.valueOf();
}

/**
 * A structure describing text fragment in content stream. It may contain
 * other sub-fragments (also tokens) that represent current fragments’ logical
 * parts
 */
class Token {
	/**
	 * @param {StreamReader} stream
	 * @param {String}       type    Token type
	 * @param {Object}       [start] Tokens’ start position in `stream`
	 * @param {Object}       [end]   Tokens’ end position in `stream`
	 */
	constructor(stream, type, start, end) {
		this.stream = stream;
		this.start = start != null ? start : stream.start;
		this.end = end != null ? end : stream.pos;
		this.type = type;

		this._props = null;
		this._value = null;
		this._items = null;
	}

	get size() {
		return this._items ? this._items.length : 0;
	}

	get items() {
		return this._items;
	}

	clone(start, end) {
		return new this.constructor(this.stream, this.type,
			start != null ? start : this.start,
			end != null ? end : this.end);
	}

	add(item) {
		if (Array.isArray(item)) {
			for (let i = 0, il = item.length; i < il; i++) {
				this.add(item[i]);
			}
		} else if (item) {
			if (!this._items) {
				this._items = [item];
			} else {
				this._items.push(item);
			}
		}

		return this;
	}

	remove(item) {
		if (this._items) {
			const ix = this._items.indexOf(item);
			if (ix !== -1 ) {
				this._items.splice(ix, 1);
			}
		}

		return this;
	}

	item(i) {
		const size = this.size;
		return this._items && this._items[(size + i) % size];
	}

	limit() {
		return this.stream.limit(this.start, this.end);
	}

	slice(from, to) {
		const token = this.clone();
		const items = this._items && this._items.slice(from, to);
		if (items && items.length) {
			token.start = items[0].start;
			token.end = items[items.length - 1].end;
			token.add(items);
		} else if (items) {
			// Empty token
			token.start = token.end;
		}

		return token;
	}

	property(name, value) {
		if (typeof value !== 'undefined') {
			// set property value
			if (!this._props) {
				this._props = {};
			}

			this._props[name] = value;
		}

		return this._props && this._props[name];
	}

	/**
	 * Returns token textual representation
	 * @return {String}
	 */
	toString() {
		return `${this.valueOf()} [${this.start}, ${this.end}] (${this.type})`;
	}

	valueOf() {
		if (this._value === null) {
			this._value = this.stream.substring(this.start, this.end);
		}

		return this._value;
	}
}

const COMMA           = 44;  // ,
const PROP_DELIMITER$1  = 58;  // :
const PROP_TERMINATOR$1 = 59;  // ;
const RULE_START$1      = 123; // {
const RULE_END$1        = 125; // }

const types = new Map()
	.set(COMMA, 'comma')
	.set(PROP_DELIMITER$1, 'propertyDelimiter')
	.set(PROP_TERMINATOR$1, 'propertyTerminator')
	.set(RULE_START$1, 'ruleStart')
	.set(RULE_END$1, 'ruleEnd');

/**
 * Consumes separator token from given string
 */
function separator(stream) {
	if (isSeparator(stream.peek())) {
		const start = stream.pos;
		const type = types.get(stream.next());
		const token = new Token(stream, 'separator', start);

		token.property('type', type);
		return token;
	}
}



function isSeparator(code) {
	return code === COMMA
		|| code === PROP_DELIMITER$1 || code === PROP_TERMINATOR$1
		|| code === RULE_START$1 || code === RULE_END$1;
}

const ARGUMENTS_START = 40;  // (
const ARGUMENTS_END   = 41;  // )

var args = function(stream, tokenConsumer) {
	if (stream.peek() === ARGUMENTS_START) {
		const start = stream.pos;
		stream.next();

		const tokens = [];
		let t;
		// in LESS, it’s possible to separate arguments list either by `;` or `,`.
		// In first case, we should keep comma-separated item as a single argument
		let usePropTerminator = false;

		while (!stream.eof()) {
			if (isUnexpectedTerminator(stream.peek()) || stream.eat(ARGUMENTS_END)) {
				break;
			}

			t = tokenConsumer(stream);
			if (!t) {
				break;
			}

			if (isSemicolonSeparator(t)) {
				usePropTerminator = true;
			}

			tokens.push(t);
		}

		stream.start = start;
		return createArgumentList(stream, tokens, usePropTerminator);
	}
};

function isUnexpectedTerminator(code) {
	return code === RULE_START$1 || code === RULE_END$1;
}

function createArgumentList(stream, tokens, usePropTerminator) {
	const argsToken = new Token(stream, 'arguments');
	const isSeparator = usePropTerminator ? isSemicolonSeparator : isCommaSeparator;
	let arg = [];

	for (let i = 0, il = tokens.length, token; i < il; i++) {
		token = tokens[i];
		if (isSeparator(token)) {
			argsToken.add(createArgument(stream, arg) || createEmptyArgument(stream, token.start));
			arg.length = 0;
		} else {
			arg.push(token);
		}
	}

	if (arg.length) {
		argsToken.add(createArgument(stream, arg));
	}

	return argsToken;
}

function createArgument(stream, tokens) {
	tokens = trimFormatting(tokens);

	if (tokens.length) {
		const arg = new Token(stream, 'argument', tokens[0].start, last(tokens).end);

		for (let i = 0; i < tokens.length; i++) {
			arg.add(tokens[i]);
		}

		return arg;
	}
}

function createEmptyArgument(stream, pos) {
	const token = new Token(stream, 'argument', pos, pos);
	token.property('empty', true);
	return token;
}

function isCommaSeparator(token) {
	return token.property('type') === 'comma';
}

function isSemicolonSeparator(token) {
	return token.property('type') === 'propertyTerminator';
}

const HYPHEN     = 45;
const UNDERSCORE = 95;

function ident(stream) {
	return eatIdent(stream) && new Token(stream, 'ident');
}

function eatIdent(stream) {
	const start = stream.pos;

	stream.eat(HYPHEN);
	if (stream.eat(isIdentStart)) {
		stream.eatWhile(isIdent);
		stream.start = start;
		return true;
	}

	stream.pos = start;
	return false;
}

function isIdentStart(code) {
	return code === UNDERSCORE || code === HYPHEN || Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isAlpha"])(code) || code >= 128;
}

function isIdent(code) {
	return Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(code) || isIdentStart(code);
}

function prefixed(stream, tokenType, prefix, body, allowEmptyBody) {
	const start = stream.pos;

	if (stream.eat(prefix)) {
		const bodyToken = body(stream, start);
		if (bodyToken || allowEmptyBody) {
			stream.start = start;
			return new Token(stream, tokenType, start).add(bodyToken);
		}
	}

	stream.pos = start;
}

const AT = 64; // @

/**
 * Consumes at-keyword from given stream
 */
function atKeyword(stream) {
	return prefixed(stream, 'at-keyword', AT, ident);
}

const HASH = 35; // #
const AT$1   = 64; // @

/**
 * Consumes interpolation token, e.g. `#{expression}`
 * @param  {StreamReader} stream
 * @param  {Function} tokenConsumer
 * @return {Token}
 */
function interpolation(stream, tokenConsumer) {
	const start = stream.pos;
	tokenConsumer = tokenConsumer || defaultTokenConsumer;

	if ((stream.eat(HASH) || stream.eat(AT$1)) && stream.eat(RULE_START$1)) {
		const container = new Token(stream, 'interpolation', start);
		let stack = 1, token;

		while (!stream.eof()) {
			if (stream.eat(RULE_START$1)) {
				stack++;
			} else if (stream.eat(RULE_END$1)) {
				stack--;
				if (!stack) {
					container.end = stream.pos;
					return container;
				}
			} else if (token = tokenConsumer(stream)) {
				container.add(token);
			} else {
				break;
			}
		}
	}

	stream.pos = start;
}

function eatInterpolation(stream) {
	const start = stream.pos;

	if ((stream.eat(HASH) || stream.eat(AT$1)) && Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["eatPair"])(stream, RULE_START$1, RULE_END$1)) {
		stream.start = start;
		return true;
	}

	stream.pos = start;
	return false;
}

function defaultTokenConsumer(stream) {
	const start = stream.pos;

	while (!stream.eof()) {
		if (stream.peek() === RULE_END$1) {
			break;
		}

		eatString$1(stream) || stream.next();
	}

	if (start !== stream.pos) {
		return new Token(stream, 'expression', start);
	}
}

/**
 * Consumes quoted string from current string and returns token with consumed
 * data or `null`, if string wasn’t consumed
 * @param  {StreamReader} stream
 * @return {StringToken}
 */
function string(stream) {
	return eatString$1(stream, true);
}

function eatString$1(stream, asToken) {
	let ch = stream.peek(), pos, tokens, token;

	if (Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isQuote"])(ch)) {
		stream.start = stream.pos;
		stream.next();
		const quote = ch;
		const valueStart = stream.pos;

		while (!stream.eof()) {
			pos = stream.pos;
			if (stream.eat(quote) || stream.eat(isNewline)) {
				// found end of string or newline without preceding '\',
				// which is not allowed (don’t throw error, for now)
				break;
			} else if (stream.eat(92 /* \ */)) {
				// backslash allows newline in string
				stream.eat(isNewline);
			} else if (asToken && (token = interpolation(stream))) {
				if (!tokens) {
					tokens = [token];
				} else {
					tokens.push(token);
				}
			}

			stream.next();
		}

		// Either reached EOF or explicitly stopped at string end
		// NB use extra `asToken` param to return boolean instead of token to reduce
		// memory allocations and improve performance
		if (asToken) {
			const token = new Token(stream, 'string');
			const inner = new Token(stream, 'unquoted', valueStart, pos);
			inner.add(tokens);
			token.add(inner);
			token.property('quote', quote);
			return token;
		}

		return true;
	}

	return false;
}

function isNewline(code) {
	return code === 10  /* LF */ || code === 13 /* CR */;
}

const ASTERISK = 42;
const SLASH    = 47;

/**
 * Consumes comment from given stream: either multi-line or single-line
 * @param  {StreamReader} stream
 * @return {CommentToken}
 */
var comment = function(stream) {
	return singleLineComment(stream) || multiLineComment(stream);
};

function singleLineComment(stream) {
	if (eatSingleLineComment(stream)) {
		const token = new Token(stream, 'comment');
		token.property('type', 'single-line');
		return token;
	}
}

function multiLineComment(stream) {
	if (eatMultiLineComment(stream)) {
		const token = new Token(stream, 'comment');
		token.property('type', 'multiline');
		return token;
	}
}

function eatComment(stream) {
	return eatSingleLineComment(stream) || eatMultiLineComment(stream);
}

function eatSingleLineComment(stream) {
	const start = stream.pos;

	if (stream.eat(SLASH) && stream.eat(SLASH)) {
		// single-line comment, consume till the end of line
		stream.start = start;
		while (!stream.eof()) {
			if (isLineBreak(stream.next())) {
				break;
			}
		}
		return true;
	}

	stream.pos = start;
	return false;
}

function eatMultiLineComment(stream) {
	const start = stream.pos;

	if (stream.eat(SLASH) && stream.eat(ASTERISK)) {
		while (!stream.eof()) {
			if (stream.next() === ASTERISK && stream.eat(SLASH)) {
				break;
			}
		}

		stream.start = start;
		return true;
	}

	stream.pos = start;
	return false;
}

function isLineBreak(code) {
	return code === 10 /* LF */ || code === 13 /* CR */;
}

/**
 * Consumes white-space tokens from given stream
 */
function whitespace(stream) {
	return eatWhitespace(stream) && new Token(stream, 'whitespace');
}

function eatWhitespace(stream) {
	return consumeWhile(stream, _emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isSpace"]);
}

const ATTR_START = 91; // [
const ATTR_END   = 93; // ]

/**
 * Consumes attribute from given string, e.g. value between [ and ]
 * @param  {StreamReader} stream
 * @return {AttributeToken}
 */
function eatAttribuite(stream) {
	const start = stream.pos;

	if (stream.eat(ATTR_START)) {
		skip(stream);
		const name = ident(stream);

		skip(stream);
		const op = operator(stream);

		skip(stream);
		const value = string(stream) || ident(stream);

		skip(stream);
		stream.eat(ATTR_END);

		return new Token(stream, 'attribute', start).add(name).add(op).add(value);
	}
}

function skip(stream) {
	while (!stream.eof()) {
		if (!eatWhitespace(stream) && !eatComment(stream)) {
			return true;
		}
	}
}

function operator(stream) {
	return consumeWhile(stream, isOperator) && new Token(stream, 'operator');
}

function isOperator(code) {
	return code === 126 /* ~ */
		|| code === 124 /* | */
		|| code === 94  /* ^ */
		|| code === 36  /* $ */
		|| code === 42  /* * */
		|| code === 61; /* = */
}

const BACKTICK = 96; // `

/**
 * Consumes backtick token, e.g. `...`
 * @param  {StreamReader} stream
 * @param  {Function} tokenConsumer
 * @return {Token}
 */
function backtick(stream) {
	if (eatBacktick(stream)) {
		return new Token(stream, 'backtick');
	}
}

function eatBacktick(stream) {
	const start = stream.pos;

	if (Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["eatPair"])(stream, BACKTICK, BACKTICK)) {
		stream.start = start;
		return true;
	}

	return false;
}

const CLASS = 46; // .

/**
 * Consumes class fragment from given stream, e.g. `.foo`
 * @param  {StreamReader} stream
 * @return {ClassToken}
 */
function className(stream) {
	return prefixed(stream, 'class', CLASS, ident);
}

const ADJACENT_SIBLING = 43;  // +
const GENERAL_SIBLING  = 126; // ~
const CHILD            = 62;  // >
const NESTING          = 38;  // &

const types$1 = {
	[ADJACENT_SIBLING]: 'adjacentSibling',
	[GENERAL_SIBLING]: 'generalSibling',
	[CHILD]: 'child',
	[NESTING]: 'nesting'
};

/**
 * Consumes combinator token from given string
 */
var combinator = function(stream) {
	if (isCombinator(stream.peek())) {
		const start = stream.pos;
		const type = types$1[stream.next()];
		const token = new Token(stream, 'combinator', start);

		token.property('type', type);
		return token;
	}
};



function isCombinator(code) {
	return code === ADJACENT_SIBLING || code === GENERAL_SIBLING
		|| code === NESTING || code === CHILD;
}

const HASH$1 = 35;

function hash(stream) {
	return prefixed(stream, 'hash', HASH$1, hashValue, true);
}



function hashValue(stream) {
	if (eatHashValue(stream)) {
		return new Token(stream, 'hash-value');
	}
}

function eatHashValue(stream) {
	return consumeWhile(stream, isHashValue);
}

function isHashValue(code) {
	return Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(code) || Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isAlpha"])(code, 65 /* A */, 70 /* F */)
		|| code === 95 /* _ */ || code === 45 /* - */
		|| code > 128; /* non-ASCII */
}

const ID = 35; // #

/**
 * Consumes id fragment from given stream, e.g. `#foo`
 * @param  {StreamReader} stream
 * @return {Token}
 */
function id(stream) {
	return prefixed(stream, 'id', ID, ident);
}

const IMPORTANT = 33; // !

/**
 * Consumes !important token
 * @param  {StreamReader} stream
 * @return {Token}
 */
function important(stream) {
	return prefixed(stream, 'important', IMPORTANT, ident);
}

const DOT = 46; // .

/**
 * Consumes number from given string, e.g. `10px`
 * @param  {StreamReader} stream
 * @return {NumberToken}
 */
function number(stream) {
	if (eatNumericPart(stream)) {
		const start = stream.start;
		const num = new Token(stream, 'value');
		const unit = eatUnitPart(stream) ? new Token(stream, 'unit') : null;

		return new Token(stream, 'number', start).add(num).add(unit);
	}
}



function eatNumericPart(stream) {
	const start = stream.pos;

	stream.eat(isOperator$1);
	if (stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])) {
		stream.start = start;
		const decimalEnd = stream.pos;

		if (!(stream.eat(DOT) && stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"]))) {
			stream.pos = decimalEnd;
		}

		return true;
	} else if (stream.eat(DOT) && stream.eatWhile(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isNumber"])) {
		stream.start = start;
		return true;
	}

	// TODO eat exponent part

	stream.pos = start;
	return false;
}

function eatUnitPart(stream) {
	return eatIdent(stream) || eatPercent(stream);
}

function eatPercent(stream) {
	return consume(stream, 37 /* % */);
}

function isOperator$1(code) {
	return code === 45 /* - */ || code === 43 /* + */;
}

const NOT          = 33; // !
const MULTIPLY     = 42; // *
const PLUS         = 43; // +
const MINUS        = 45; // -
const DIVIDE       = 47; // /
const LESS_THAN    = 60; // <
const EQUALS       = 61; // =
const GREATER_THAN = 62; // <

function operator$1(stream) {
	return eatOperator(stream) && new Token(stream, 'operator');
}

function eatOperator(stream) {
	if (consume(stream, isEquality)) {
		stream.eatWhile(EQUALS);
		return true;
	} else if (consume(stream, isOperator$2)) {
		return true;
	}

	return false;
}

function isEquality(code) {
	return code === NOT || code === LESS_THAN || code === EQUALS || code === GREATER_THAN;
}

function isOperator$2(code) {
	return code === MULTIPLY || code === PLUS || code === MINUS || code === DIVIDE
		|| isEquality(code);
}

const PSEUDO = 58; // :

/**
 * Consumes pseudo-selector from given stream
 */
var pseudo = function(stream) {
	const start = stream.pos;

	if (stream.eatWhile(PSEUDO)) {
		const name = ident(stream);
		if (name) {
			return new Token(stream, 'pseudo', start).add(name);
		}
	}

	stream.pos = start;
};

/**
 * Consumes unquoted value from given stream
 * @param  {StreamReader} stream
 * @return {UnquotedToken}
 */
var unquoted = function(stream) {
	return eatUnquoted(stream) && new Token(stream, 'unquoted');
};

function eatUnquoted(stream) {
	return consumeWhile(stream, isUnquoted);
}

function isUnquoted(code) {
	return !isNaN(code) && !Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isQuote"])(code) && !Object(_emmetio_stream_reader_utils__WEBPACK_IMPORTED_MODULE_1__["isSpace"])(code)
		&& code !== 40 /* ( */ && code !== 41 /* ) */ && code !== 92 /* \ */
		&& !isNonPrintable(code);
}

function isNonPrintable(code) {
	return (code >= 0 && code <= 8) || code === 11
	|| (code >= 14 && code <= 31) || code === 127;
}

/**
 * Consumes URL token from given stream
 * @param  {StreamReader} stream
 * @return {Token}
 */
function url(stream) {
	const start = stream.pos;

	if (eatString(stream, 'url(')) {
		eatWhitespace(stream);
		const value = string(stream) || unquoted(stream);
		eatWhitespace(stream);
		stream.eat(41); // )

		return new Token(stream, 'url', start).add(value);
	}

	stream.pos = start;
}

function eatUrl(stream) {
	const start = stream.pos;

	if (eatString(stream, 'url(')) {
		eatWhitespace(stream);
		eatString$1(stream) || eatUnquoted(stream);
		eatWhitespace(stream);
		stream.eat(41); // )
		stream.start = start;

		return true;
	}

	stream.pos = start;
	return false;
}

const VARIABLE = 36; // $

/**
 * Consumes SCSS variable from given stream
 */
function variable(stream) {
	return prefixed(stream, 'variable', VARIABLE, variableName);
}



function variableName(stream) {
	if (eatVariableName(stream)) {
		return new Token(stream, 'name');
	}
}

function eatVariableName(stream) {
	return consumeWhile(stream, isVariableName);
}

function isVariableName(code) {
	return code === VARIABLE || isIdent(code);
}

/**
 * Group tokens by commonly used context
 */

function consumeToken(stream) {
	const _token = any(stream) || args(stream, consumeToken);
	if (_token && _token.type === 'ident') {
		const _args = args(stream, consumeToken);
		if (_args) {
			// An identifier followed by arguments – function call
			return new Token(stream, 'function', _token.start, _args.end).add(_token).add(_args);
		}
	}

	return _token || unknown(stream);
}

function any(stream) {
	return formatting(stream) || url(stream) || selector(stream) || value(stream)
		|| separator(stream);
}

function selector(stream) {
	return interpolation(stream) || backtick(stream) || ident(stream) || atKeyword(stream)
		|| className(stream) || id(stream) || pseudo(stream) || eatAttribuite(stream)
		|| combinator(stream);
}

function value(stream) {
	return url(stream) || string(stream) || interpolation(stream) || backtick(stream) 
		|| number(stream) || hash(stream) || keyword(stream) || important(stream) 
		|| operator$1(stream);
}

function keyword(stream) {
	return backtick(stream) || variable(stream) || atKeyword(stream) || ident(stream);
}

function formatting(stream) {
	return comment(stream) || whitespace(stream);
}

function unknown(stream) {
	stream.start = stream.pos;
	const ch = stream.next();
	if (ch != null) {
		return new Token(stream, 'unknown');
	}
}

/**
 * Parses CSS rule selector
 * @param  {String|StreamReader} source
 * @return {Token[]}
 */
function parseSelector(source) {
	return parseList(source, 'selector');
}

/**
 * Parses CSS property name. Mostly used for LESS where
 * property-like entry might be used as a mixin call
 * @param {String|StreamReader} source
 * @return {Token}
 */
function parsePropertyName(source) {
	const stream = typeof source === 'string' ? new _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__["default"](source) : source;
	const items = [];

	while (!stream.eof()) {
		items.push(consumeToken(stream));
	}

	let token;
	if (items.length === 1) {
		token = items[0];
	} else {
		token = new Token(stream, 'property-name', stream.start, stream.end);
		for (let i = 0, il = items.length; i < il; i++) {
			token.add(items[i]);
		}
	}

	return token;
}

/**
 * Parses CSS property value
 * @param  {String|StreamReader} source
 * @return {Token[]}
 */
function parsePropertyValue(source) {
	return parseList(source);
}

/**
 * Parses @media CSS rule expression
 * @param  {String|StreamReader} source
 * @return {Token[]}
 */
function parseMediaExpression(source) {
	return parseList(source);
}

/**
 * Parses given source into a set of tokens, separated by comma. Each token contains
 * parsed sub-items as independent tokens and so on. Mostly used to parse
 * selectors and property values
 * @param  {String|StreamReader} source     Source to parse
 * @param  {String}             [tokenType] Type of first-level tokens.
 *                                          Default is `item`
 * @return {Token[]}
 */
function parseList(source, tokenType) {
	tokenType = tokenType || 'item';
	const stream = typeof source === 'string' ? new _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__["default"](source) : source;
	const items = [];
	const fragments = [];
	const flush = () => {
		const clean = trimFormatting(fragments);

		if (clean.length) {
			const item = new Token(stream, tokenType, clean[0].start, last(clean).end);
			for (let i = 0; i < clean.length; i++) {
				item.add(clean[i]);
			}
			items.push(item);
		}

		fragments.length = 0;
	};

	let token;
	while (!stream.eof()) {
		if (stream.eat(44 /* , */)) {
			flush();
		} else if (token = consumeToken(stream)) {
			if (token.type !== 'comment') {
				fragments.push(token);
			}
		} else {
			throw stream.error('Unexpected character');
		}
	}

	flush();
	return items;
}

/**
 * Creates CSS rule from given tokens
 * @param  {StreamReader} stream
 * @param  {Token[]} tokens
 * @param  {Token} [content]
 * @return {Rule}
 */
function createRule(stream, tokens, contentStart, contentEnd) {
	if (!tokens.length) {
		return null;
	}

	const name = tokens[0];
	name.end = last(tokens).end;

	return new Rule(stream, name, contentStart, contentEnd);
}

/**
 * Represents CSS rule
 * @type {Node}
 */
class Rule extends Node {
	/**
	 * @param {StreamReader} stream
	 * @param {Token} name         Rule’s name token
	 * @param {Token} contentStart Rule’s content start token
	 * @param {Token} [contentEnd] Rule’s content end token
	 */
	constructor(stream, name, contentStart, contentEnd) {
		super('rule');
		this.stream = stream;
		this.selectorToken = name;
		this.contentStartToken = contentStart;
		this.contentEndToken = contentEnd || contentStart;
		this._parsedSelector = null;
	}

	/**
	 * Returns rule selector
	 * @return {String}
	 */
	get selector() {
		return valueOf(this.selectorToken);
	}

	get parsedSelector() {
		if (!this._parsedSelector) {
			this._parsedSelector = parseSelector(this.selectorToken.limit());
		}

		return this._parsedSelector;
	}

	/**
	 * Returns node’s start position in stream
	 * @return {*}
	 */
	get start() {
		return this.selectorToken && this.selectorToken.start;
	}

	/**
	 * Returns node’s end position in stream
	 * @return {*}
	 */
	get end() {
		const token = this.contentEndToken || this.contentStartToken || this.nameToken;
		return token && token.end;
	}
}

/**
 * Creates CSS rule from given tokens
 * @param  {StreamReader} stream
 * @param  {Token[]} tokens
 * @param  {Token} [content]
 * @return {Rule}
 */
function createAtRule(stream, tokens, contentStart, contentEnd) {
	if (!tokens.length) {
		return null;
	}

	let ix = 0, expression;
	const name = tokens[ix++];
    
	if (ix < tokens.length) {
		expression = tokens[ix++];
		expression.type = 'expression';
		expression.end = last(tokens).end;
	} else {
		expression = new Token(stream, 'expression', name.end, name.end);
	}

	return new AtRule(stream, name, expression, contentStart, contentEnd);
}

class AtRule extends Node {
	constructor(stream, name, expression, contentStart, contentEnd) {
		super('at-rule');
		this.stream = stream;
		this.nameToken = name;
		this.expressionToken = expression;
		this.contentStartToken = contentStart;
		this.contentEndToken = contentEnd || contentStart;
		this._parsedExpression = null;
	}

	/**
	 * Returns at-rule name
	 * @return {String}
	 */
	get name() {
		return valueOf(this.nameToken && this.nameToken.item(0));
	}

	get expression() {
		return valueOf(this.expressionToken);
	}

	get parsedExpression() {
		if (!this._parsedExpression) {
			this._parsedExpression = parseMediaExpression(this.expressionToken.limit());
		}

		return this._parsedExpression;
	}

	/**
	 * Returns node’s start position in stream
	 * @return {*}
	 */
	get start() {
		return this.nameToken && this.nameToken.start;
	}

	/**
	 * Returns node’s end position in stream
	 * @return {*}
	 */
	get end() {
		const token = this.contentEndToken || this.contentStartToken || this.nameToken;
		return token && token.end;
	}
}

/**
 * Factory method that creates property node from given tokens
 * @param  {StreamReader} stream
 * @param  {Token[]}      tokens
 * @param  {Token}        terminator
 * @return {Property}
 */
function createProperty(stream, tokens, terminator) {
	// NB in LESS, fragmented properties without value like `.foo.bar;` must be
	// treated like mixin call
	if (!tokens.length) {
		return null;
	}

	let separator, value, ix = 0;
	const name = tokens[ix++];

	if (ix < tokens.length) {
		value = tokens[ix++];
		value.type = 'value';
		value.end = last(tokens).end;
	}

	if (name && value) {
		separator = new Token(stream, 'separator', name.end, value.start);
	}

	return new Property(
		stream,
		name,
		value,
		separator,
		terminator
	);
}

class Property extends Node {
	constructor(stream, name, value, separator, terminator) {
		super('property');
		this.stream = stream;
		this.nameToken = name;
		this.valueToken = value;
		this._parsedName = null;
		this._parsedValue = null;

		this.separatorToken = separator;
		this.terminatorToken = terminator;
	}

	/**
	 * Property name
	 * @return {String}
	 */
	get name() {
		return valueOf(this.nameToken);
	}

	/**
	 * Returns parsed sub-tokens of current property name
	 * @return {Token[]}
	 */
	get parsedName() {
		if (!this._parsedName) {
			this._parsedName = parsePropertyName(this.nameToken.limit());
		}

		return this._parsedName;
	}

	/**
	 * Property value
	 * @return {String}
	 */
	get value() {
		return valueOf(this.valueToken);
	}

	/**
	 * Parsed value parts: a list of tokens, separated by comma. Each token may
	 * contains parsed sub-tokens and so on
	 * @return {Token[]}
	 */
	get parsedValue() {
		if (!this._parsedValue) {
			this._parsedValue = parsePropertyValue(this.valueToken.limit());
		}

		return this._parsedValue;
	}

	get separator() {
		return valueOf(this.separatorToken);
	}

	get terminator() {
		return valueOf(this.terminatorToken);
	}

	get start() {
		const token = this.nameToken || this.separatorToken || this.valueToken
			|| this.terminatorToken;
		return token && token.start;
	}

	get end() {
		const token = this.terminatorToken || this.valueToken
			|| this.separatorToken || this.nameToken;
		return token && token.end;
	}
}

const LBRACE          = 40;  // (
const RBRACE          = 41;  // )
const PROP_DELIMITER  = 58;  // :
const PROP_TERMINATOR = 59;  // ;
const RULE_START      = 123; // {
const RULE_END        = 125; // }

function parseStylesheet(source) {
	const stream = typeof source === 'string' ? new _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__["default"](source) : source;
	const root = new Stylesheet();
	let ctx = root, child, accum, token;
	let tokens = [];
	const flush = () => {
		if (accum) {
			tokens.push(accum);
			accum = null;
		}
	};

	while (!stream.eof()) {
		if (eatWhitespace(stream)) {
			continue;
		}

		if (token = comment(stream)) {
			root.addComment(token);
			continue;
		}

		stream.start = stream.pos;

		if (stream.eatWhile(PROP_DELIMITER)) {
			// Property delimiter can be either a real property delimiter or a
			// part of pseudo-selector.
			if (!tokens.length) {
				if (accum) {
					// No consumed tokens yet but pending token: most likely it’s
					// a CSS property
					flush();
				} else {
					// No consumend or accumulated token, seems like a start of
					// pseudo-selector, e.g. `::slotted`
					accum = new Token(stream, 'preparse');
				}
			}
			// Skip delimiter if there are already consumend tokens: most likely
			// it’s a part of pseudo-selector
		} else if (stream.eat(PROP_TERMINATOR)) {
			flush();
			ctx.add(createProperty(stream, tokens, new Token(stream, 'termintator')));
			tokens.length = 0;
		} else if (stream.eat(RULE_START)) {
			flush();
			if (tokens.length > 0) {
				child = tokens[0].type === 'at-keyword'
				? createAtRule(stream, tokens, new Token(stream, 'body-start'))
				: createRule(stream, tokens, new Token(stream, 'body-start'));
				ctx.add(child);
				ctx = child;
				tokens.length = 0;
			}
			
		} else if (stream.eat(RULE_END)) {
			flush();

			// Finalize context section
			ctx.add(createProperty(stream, tokens));

			if (ctx.type !== 'stylesheet') {
				// In case of invalid stylesheet with redundant `}`,
				// don’t modify root section.
				ctx.contentEndToken = new Token(stream, 'body-end');
				ctx = ctx.parent;
			}

			tokens.length = 0;
		} else if (token = atKeyword(stream)) {
			// Explictly consume @-tokens since it defines how rule or property
			// should be pre-parsed
			flush();
			tokens.push(token);
		} else if (eatUrl(stream) || eatInterpolation(stream) || eatBacktick(stream) 
				|| eatBraces(stream, root) || eatString$1(stream) || stream.next()) {
			// NB explicitly consume `url()` token since it may contain
			// an unquoted url like `http://example.com` which interferes
			// with single-line comment
			accum = accum || new Token(stream, 'preparse');
			accum.end = stream.pos;
		} else {
			throw new Error(`Unexpected end-of-stream at ${stream.pos}`);
		}
	}

	if (accum) {
		tokens.push(accum);
	}

	// Finalize all the rest properties
	ctx.add(createProperty(stream, tokens));

	// Finalize unterminated rules
	stream.start = stream.pos;
	while (ctx && ctx !== root) {
		ctx.contentEndToken = new Token(stream, 'body-end');
		ctx = ctx.parent;
	}

	return root;
}

/**
 * Parses given source into tokens
 * @param  {String|StreamReader} source
 * @param  {Function} [consumer] Token consumer function, for example, `selector`,
 * `value` etc. from `lib/tokens` module. Default is generic `consumeToken`
 * @return {Token[]}
 */
function lexer(source, consumer) {
	consumer = consumer || consumeToken;
	const stream = typeof source === 'string' ? new _emmetio_stream_reader__WEBPACK_IMPORTED_MODULE_0__["default"](source) : source;
	const result = [];
	let token;

	while (!stream.eof() && (token = consumer(stream))) {
		result.push(token);
	}

	return result;
}

/**
 * Consumes content inside round braces. Mostly used to skip `;` token inside
 * expressions since in LESS it is also used to separate function arguments
 * @param  {StringReader} stream
 * @param  {Stylesheet}   root   A stylesheet root. Used to accumulate comments
 * @return {Boolean}
 */
function eatBraces(stream, root) {
	if (stream.eat(LBRACE)) {
		let stack = 1, token;

		while (!stream.eof()) {
			if (stream.eat(RBRACE)) {
				stack--;
				if (!stack) {
					break;
				}
			} else if (stream.eat(LBRACE)) {
				stack++;
			} else if (eatUrl(stream) || eatString$1(stream)) {
				continue;
			} else if (token = comment(stream)) {
				root.addComment(token);
				continue;
			} else {
				stream.next();
			}
		}

		return true;
	}

	return false;
}

/* harmony default export */ __webpack_exports__["default"] = (parseStylesheet);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentStreamReader = void 0;
/**
 * A stream reader for VSCode's `TextDocument`
 * Based on @emmetio/stream-reader and @emmetio/atom-plugin
 */
class DocumentStreamReader {
    constructor(document, pos, limit) {
        this.document = document;
        this.start = this.pos = pos ? pos : 0;
        this._sof = limit ? limit[0] : 0;
        this._eof = limit ? limit[1] : document.getText().length;
    }
    /**
     * Returns true only if the stream is at the start of the file.
     */
    sof() {
        return this.pos <= this._sof;
    }
    /**
     * Returns true only if the stream is at the end of the file.
     */
    eof() {
        return this.pos >= this._eof;
    }
    /**
     * Creates a new stream instance which is limited to given range for given document
     */
    limit(start, end) {
        return new DocumentStreamReader(this.document, start, [start, end]);
    }
    /**
     * Returns the next character code in the stream without advancing it.
     * Will return NaN at the end of the file.
     */
    peek() {
        if (this.eof()) {
            return NaN;
        }
        return this.document.getText().charCodeAt(this.pos);
    }
    /**
     * Returns the next character in the stream and advances it.
     * Also returns NaN when no more characters are available.
     */
    next() {
        if (this.eof()) {
            return NaN;
        }
        const code = this.document.getText().charCodeAt(this.pos);
        this.pos++;
        if (this.eof()) {
            // restrict pos to eof, if in case it got moved beyond eof
            this.pos = this._eof;
        }
        return code;
    }
    /**
     * Backs up the stream n characters. Backing it up further than the
     * start of the current token will cause things to break, so be careful.
     */
    backUp(n) {
        this.pos -= n;
        if (this.pos < 0) {
            this.pos = 0;
        }
        return this.peek();
    }
    /**
     * Get the string between the start of the current token and the
     * current stream position.
     */
    current() {
        return this.substring(this.start, this.pos);
    }
    /**
     * Returns contents for given range
     */
    substring(from, to) {
        return this.document.getText().substring(from, to);
    }
    /**
     * Creates error object with current stream state
     */
    error(message) {
        const err = new Error(`${message} at offset ${this.pos}`);
        return err;
    }
    /**
     * `match` can be a character code or a function that takes a character code
     * and returns a boolean. If the next character in the stream 'matches'
     * the given argument, it is consumed and returned.
     * Otherwise, `false` is returned.
     */
    eat(match) {
        const ch = this.peek();
        const ok = typeof match === 'function' ? match(ch) : ch === match;
        if (ok) {
            this.next();
        }
        return ok;
    }
    /**
     * Repeatedly calls <code>eat</code> with the given argument, until it
     * fails. Returns <code>true</code> if any characters were eaten.
     */
    eatWhile(match) {
        const start = this.pos;
        while (!this.eof() && this.eat(match)) { }
        return this.pos !== start;
    }
}
exports.DocumentStreamReader = DocumentStreamReader;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocument", function() { return TextDocument; });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var FullTextDocument = /** @class */ (function () {
    function FullTextDocument(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = undefined;
    }
    Object.defineProperty(FullTextDocument.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    FullTextDocument.prototype.getText = function (range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument.prototype.update = function (changes, version) {
        for (var _i = 0, changes_1 = changes; _i < changes_1.length; _i++) {
            var change = changes_1[_i];
            if (FullTextDocument.isIncremental(change)) {
                // makes sure start is before end
                var range = getWellformedRange(change.range);
                // update content
                var startOffset = this.offsetAt(range.start);
                var endOffset = this.offsetAt(range.end);
                this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
                // update the offsets
                var startLine = Math.max(range.start.line, 0);
                var endLine = Math.max(range.end.line, 0);
                var lineOffsets = this._lineOffsets;
                var addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
                if (endLine - startLine === addedLineOffsets.length) {
                    for (var i = 0, len = addedLineOffsets.length; i < len; i++) {
                        lineOffsets[i + startLine + 1] = addedLineOffsets[i];
                    }
                }
                else {
                    if (addedLineOffsets.length < 10000) {
                        lineOffsets.splice.apply(lineOffsets, [startLine + 1, endLine - startLine].concat(addedLineOffsets));
                    }
                    else { // avoid too many arguments for splice
                        this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
                    }
                }
                var diff = change.text.length - (endOffset - startOffset);
                if (diff !== 0) {
                    for (var i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
                        lineOffsets[i] = lineOffsets[i] + diff;
                    }
                }
            }
            else if (FullTextDocument.isFull(change)) {
                this._content = change.text;
                this._lineOffsets = undefined;
            }
            else {
                throw new Error('Unknown change event received');
            }
        }
        this._version = version;
    };
    FullTextDocument.prototype.getLineOffsets = function () {
        if (this._lineOffsets === undefined) {
            this._lineOffsets = computeLineOffsets(this._content, true);
        }
        return this._lineOffsets;
    };
    FullTextDocument.prototype.positionAt = function (offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
            return { line: 0, character: offset };
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        var line = low - 1;
        return { line: line, character: offset - lineOffsets[line] };
    };
    FullTextDocument.prototype.offsetAt = function (position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument.prototype, "lineCount", {
        get: function () {
            return this.getLineOffsets().length;
        },
        enumerable: true,
        configurable: true
    });
    FullTextDocument.isIncremental = function (event) {
        var candidate = event;
        return candidate !== undefined && candidate !== null &&
            typeof candidate.text === 'string' && candidate.range !== undefined &&
            (candidate.rangeLength === undefined || typeof candidate.rangeLength === 'number');
    };
    FullTextDocument.isFull = function (event) {
        var candidate = event;
        return candidate !== undefined && candidate !== null &&
            typeof candidate.text === 'string' && candidate.range === undefined && candidate.rangeLength === undefined;
    };
    return FullTextDocument;
}());
var TextDocument;
(function (TextDocument) {
    /**
     * Creates a new text document.
     *
     * @param uri The document's uri.
     * @param languageId  The document's language Id.
     * @param version The document's initial version number.
     * @param content The document's content.
     */
    function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument.create = create;
    /**
     * Updates a TextDocument by modifing its content.
     *
     * @param document the document to update. Only documents created by TextDocument.create are valid inputs.
     * @param changes the changes to apply to the document.
     * @returns The updated TextDocument. Note: That's the same document instance passed in as first parameter.
     *
     */
    function update(document, changes, version) {
        if (document instanceof FullTextDocument) {
            document.update(changes, version);
            return document;
        }
        else {
            throw new Error('TextDocument.update: document must be created by TextDocument.create');
        }
    }
    TextDocument.update = update;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits.map(getWellformedEdit), function (a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        var lastModifiedOffset = 0;
        var spans = [];
        for (var _i = 0, sortedEdits_1 = sortedEdits; _i < sortedEdits_1.length; _i++) {
            var e = sortedEdits_1[_i];
            var startOffset = document.offsetAt(e.range.start);
            if (startOffset < lastModifiedOffset) {
                throw new Error('Overlapping edit');
            }
            else if (startOffset > lastModifiedOffset) {
                spans.push(text.substring(lastModifiedOffset, startOffset));
            }
            if (e.newText.length) {
                spans.push(e.newText);
            }
            lastModifiedOffset = document.offsetAt(e.range.end);
        }
        spans.push(text.substr(lastModifiedOffset));
        return spans.join('');
    }
    TextDocument.applyEdits = applyEdits;
})(TextDocument || (TextDocument = {}));
function mergeSort(data, compare) {
    if (data.length <= 1) {
        // sorted
        return data;
    }
    var p = (data.length / 2) | 0;
    var left = data.slice(0, p);
    var right = data.slice(p);
    mergeSort(left, compare);
    mergeSort(right, compare);
    var leftIdx = 0;
    var rightIdx = 0;
    var i = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        var ret = compare(left[leftIdx], right[rightIdx]);
        if (ret <= 0) {
            // smaller_equal -> take left to preserve order
            data[i++] = left[leftIdx++];
        }
        else {
            // greater -> take right
            data[i++] = right[rightIdx++];
        }
    }
    while (leftIdx < left.length) {
        data[i++] = left[leftIdx++];
    }
    while (rightIdx < right.length) {
        data[i++] = right[rightIdx++];
    }
    return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset) {
    if (textOffset === void 0) { textOffset = 0; }
    var result = isAtLineStart ? [textOffset] : [];
    for (var i = 0; i < text.length; i++) {
        var ch = text.charCodeAt(i);
        if (ch === 13 /* CarriageReturn */ || ch === 10 /* LineFeed */) {
            if (ch === 13 /* CarriageReturn */ && i + 1 < text.length && text.charCodeAt(i + 1) === 10 /* LineFeed */) {
                i++;
            }
            result.push(textOffset + i + 1);
        }
    }
    return result;
}
function getWellformedRange(range) {
    var start = range.start;
    var end = range.end;
    if (start.line > end.line || (start.line === end.line && start.character > end.character)) {
        return { start: end, end: start };
    }
    return range;
}
function getWellformedEdit(textEdit) {
    var range = getWellformedRange(textEdit.range);
    if (range !== textEdit.range) {
        return { newText: textEdit.newText, range: range };
    }
    return textEdit;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFileFromParseCache = exports.addFileToParseCache = exports.getRootNode = void 0;
const html_matcher_1 = __webpack_require__(7);
const css_parser_1 = __webpack_require__(10);
const util_1 = __webpack_require__(6);
// Map(filename, Pair(fileVersion, rootNodeOfParsedContent))
const _parseCache = new Map();
function getRootNode(document, useCache) {
    const key = document.uri.toString();
    const result = _parseCache.get(key);
    const documentVersion = document.version;
    if (useCache && result) {
        if (documentVersion === result.key) {
            return result.value;
        }
    }
    const parseContent = (0, util_1.isStyleSheet)(document.languageId) ? css_parser_1.default : html_matcher_1.default;
    const rootNode = parseContent(document.getText());
    if (useCache) {
        _parseCache.set(key, { key: documentVersion, value: rootNode });
    }
    return rootNode;
}
exports.getRootNode = getRootNode;
function addFileToParseCache(document) {
    const filename = document.uri.toString();
    _parseCache.set(filename, undefined);
}
exports.addFileToParseCache = addFileToParseCache;
function removeFileFromParseCache(document) {
    const filename = document.uri.toString();
    _parseCache.delete(filename);
}
exports.removeFileFromParseCache = removeFileFromParseCache;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doComplete", function() { return doComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emmetSnippetField", function() { return emmetSnippetField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyleSheet", function() { return isStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSyntaxType", function() { return getSyntaxType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSyntax", function() { return getDefaultSyntax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSnippets", function() { return getDefaultSnippets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractAbbreviation", function() { return extractAbbreviation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractAbbreviationFromText", function() { return extractAbbreviationFromText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbbreviationValid", function() { return isAbbreviationValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpandOptions", function() { return getExpandOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAbbreviation", function() { return parseAbbreviation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAbbreviation", function() { return expandAbbreviation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateExtensionsPath", function() { return updateExtensionsPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmmetMode", function() { return getEmmetMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmmetCompletionParticipants", function() { return getEmmetCompletionParticipants; });
/* harmony import */ var vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var jsonc_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var vscode_uri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _fileService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return _fileService__WEBPACK_IMPORTED_MODULE_4__["FileType"]; });

/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29);
/* harmony import */ var _configCompat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);
/* harmony import */ var vscode_nls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var vscode_nls__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vscode_nls__WEBPACK_IMPORTED_MODULE_8__);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









const localize = vscode_nls__WEBPACK_IMPORTED_MODULE_8__["loadMessageBundle"]();
// /* workaround for webpack issue: https://github.com/webpack/webpack/issues/5756
//  @emmetio/extract-abbreviation has a cjs that uses a default export
// */
// const extract = typeof _extractAbbreviation === 'function' ? _extractAbbreviation : _extractAbbreviation.default;

const snippetKeyCache = new Map();
let markupSnippetKeys;
const stylesheetCustomSnippetsKeyCache = new Map();
const htmlAbbreviationStartRegex = /^[a-z,A-Z,!,(,[,#,\.\{]/;
// take off { for jsx because it interferes with the language
const jsxAbbreviationStartRegex = /^[a-z,A-Z,!,(,[,#,\.]/;
const cssAbbreviationRegex = /^-?[a-z,A-Z,!,@,#]/;
const htmlAbbreviationRegex = /[a-z,A-Z\.]/;
const commonlyUsedTags = [..._data__WEBPACK_IMPORTED_MODULE_2__["htmlData"].tags, 'lorem'];
const bemFilterSuffix = 'bem';
const filterDelimitor = '|';
const trimFilterSuffix = 't';
const commentFilterSuffix = 'c';
const maxFilters = 3;
const vendorPrefixes = { 'w': "webkit", 'm': "moz", 's': "ms", 'o': "o" };
const defaultVendorProperties = {
    'w': "animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, appearance, backface-visibility, background-clip, background-composite, background-origin, background-size, border-fit, border-horizontal-spacing, border-image, border-vertical-spacing, box-align, box-direction, box-flex, box-flex-group, box-lines, box-ordinal-group, box-orient, box-pack, box-reflect, box-shadow, color-correction, column-break-after, column-break-before, column-break-inside, column-count, column-gap, column-rule-color, column-rule-style, column-rule-width, column-span, column-width, dashboard-region, font-smoothing, highlight, hyphenate-character, hyphenate-limit-after, hyphenate-limit-before, hyphens, line-box-contain, line-break, line-clamp, locale, margin-before-collapse, margin-after-collapse, marquee-direction, marquee-increment, marquee-repetition, marquee-style, mask-attachment, mask-box-image, mask-box-image-outset, mask-box-image-repeat, mask-box-image-slice, mask-box-image-source, mask-box-image-width, mask-clip, mask-composite, mask-image, mask-origin, mask-position, mask-repeat, mask-size, nbsp-mode, perspective, perspective-origin, rtl-ordering, text-combine, text-decorations-in-effect, text-emphasis-color, text-emphasis-position, text-emphasis-style, text-fill-color, text-orientation, text-security, text-stroke-color, text-stroke-width, transform, transition, transform-origin, transform-style, transition-delay, transition-duration, transition-property, transition-timing-function, user-drag, user-modify, user-select, writing-mode, svg-shadow, box-sizing, border-radius",
    'm': "animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, appearance, backface-visibility, background-inline-policy, binding, border-bottom-colors, border-image, border-left-colors, border-right-colors, border-top-colors, box-align, box-direction, box-flex, box-ordinal-group, box-orient, box-pack, box-shadow, box-sizing, column-count, column-gap, column-rule-color, column-rule-style, column-rule-width, column-width, float-edge, font-feature-settings, font-language-override, force-broken-image-icon, hyphens, image-region, orient, outline-radius-bottomleft, outline-radius-bottomright, outline-radius-topleft, outline-radius-topright, perspective, perspective-origin, stack-sizing, tab-size, text-blink, text-decoration-color, text-decoration-line, text-decoration-style, text-size-adjust, transform, transform-origin, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, user-focus, user-input, user-modify, user-select, window-shadow, background-clip, border-radius",
    's': "accelerator, backface-visibility, background-position-x, background-position-y, behavior, block-progression, box-align, box-direction, box-flex, box-line-progression, box-lines, box-ordinal-group, box-orient, box-pack, content-zoom-boundary, content-zoom-boundary-max, content-zoom-boundary-min, content-zoom-chaining, content-zoom-snap, content-zoom-snap-points, content-zoom-snap-type, content-zooming, filter, flow-from, flow-into, font-feature-settings, grid-column, grid-column-align, grid-column-span, grid-columns, grid-layer, grid-row, grid-row-align, grid-row-span, grid-rows, high-contrast-adjust, hyphenate-limit-chars, hyphenate-limit-lines, hyphenate-limit-zone, hyphens, ime-mode, interpolation-mode, layout-flow, layout-grid, layout-grid-char, layout-grid-line, layout-grid-mode, layout-grid-type, line-break, overflow-style, perspective, perspective-origin, perspective-origin-x, perspective-origin-y, scroll-boundary, scroll-boundary-bottom, scroll-boundary-left, scroll-boundary-right, scroll-boundary-top, scroll-chaining, scroll-rails, scroll-snap-points-x, scroll-snap-points-y, scroll-snap-type, scroll-snap-x, scroll-snap-y, scrollbar-arrow-color, scrollbar-base-color, scrollbar-darkshadow-color, scrollbar-face-color, scrollbar-highlight-color, scrollbar-shadow-color, scrollbar-track-color, text-align-last, text-autospace, text-justify, text-kashida-space, text-overflow, text-size-adjust, text-underline-position, touch-action, transform, transform-origin, transform-origin-x, transform-origin-y, transform-origin-z, transform-style, transition, transition-delay, transition-duration, transition-property, transition-timing-function, user-select, word-break, wrap-flow, wrap-margin, wrap-through, writing-mode",
    'o': "dashboard-region, animation, animation-delay, animation-direction, animation-duration, animation-fill-mode, animation-iteration-count, animation-name, animation-play-state, animation-timing-function, border-image, link, link-source, object-fit, object-position, tab-size, table-baseline, transform, transform-origin, transition, transition-delay, transition-duration, transition-property, transition-timing-function, accesskey, input-format, input-required, marquee-dir, marquee-loop, marquee-speed, marquee-style"
};
const vendorPrefixesEnabled = false;
/**
 * Returns all applicable emmet expansions for abbreviation at given position in a CompletionList
 * @param document TextDocument in which completions are requested
 * @param position Position in the document at which completions are requested
 * @param syntax Emmet supported language
 * @param emmetConfig Emmet Configurations as derived from VS Code
 */
function doComplete(document, position, syntax, emmetConfig) {
    var _a;
    if (emmetConfig.showExpandedAbbreviation === 'never' || !getEmmetMode(syntax, emmetConfig.excludeLanguages)) {
        return;
    }
    const isStyleSheetRes = isStyleSheet(syntax);
    // Fetch markupSnippets so that we can provide possible abbreviation completions
    // For example, when text at position is `a`, completions should return `a:blank`, `a:link`, `acr` etc.
    if (!isStyleSheetRes) {
        if (!snippetKeyCache.has(syntax)) {
            const registry = (_a = customSnippetsRegistry[syntax]) !== null && _a !== void 0 ? _a : getDefaultSnippets(syntax);
            snippetKeyCache.set(syntax, Object.keys(registry));
        }
        markupSnippetKeys = snippetKeyCache.get(syntax);
    }
    const extractOptions = { lookAhead: !isStyleSheetRes, type: isStyleSheetRes ? 'stylesheet' : 'markup' };
    const extractedValue = extractAbbreviation(document, position, extractOptions);
    if (!extractedValue) {
        return;
    }
    const { abbreviationRange, abbreviation, filter } = extractedValue;
    const currentLineTillPosition = getCurrentLine(document, position).substr(0, position.character);
    const currentWord = getCurrentWord(currentLineTillPosition);
    // Don't attempt to expand open tags
    if (currentWord === abbreviation
        && currentLineTillPosition.endsWith(`<${abbreviation}`)
        && _configCompat__WEBPACK_IMPORTED_MODULE_7__["syntaxes"].markup.includes(syntax)) {
        return;
    }
    const expandOptions = getExpandOptions(syntax, emmetConfig, filter);
    let expandedText;
    let expandedAbbr;
    let completionItems = [];
    // Create completion item after expanding given abbreviation
    // if abbreviation is valid and expanded value is not noise
    const createExpandedAbbr = (syntax, abbr) => {
        if (!isAbbreviationValid(syntax, abbreviation)) {
            return;
        }
        try {
            expandedText = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["default"])(abbr, expandOptions);
        }
        catch (e) {
        }
        if (!expandedText || isExpandedTextNoise(syntax, abbr, expandedText, expandOptions.options)) {
            return;
        }
        expandedAbbr = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["CompletionItem"].create(abbr);
        expandedAbbr.textEdit = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["TextEdit"].replace(abbreviationRange, escapeNonTabStopDollar(addFinalTabStop(expandedText)));
        expandedAbbr.documentation = replaceTabStopsWithCursors(expandedText);
        expandedAbbr.insertTextFormat = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["InsertTextFormat"].Snippet;
        expandedAbbr.detail = localize('Emmet abbreviation', "Emmet Abbreviation");
        expandedAbbr.label = abbreviation;
        expandedAbbr.label += filter ? '|' + filter.replace(',', '|') : "";
        completionItems = [expandedAbbr];
    };
    if (isStyleSheet(syntax)) {
        const { prefixOptions, abbreviationWithoutPrefix } = splitVendorPrefix(abbreviation);
        createExpandedAbbr(syntax, abbreviationWithoutPrefix);
        // When abbr is longer than usual emmet snippets and matches better with existing css property, then no emmet
        if (abbreviationWithoutPrefix.length > 4
            && _data__WEBPACK_IMPORTED_MODULE_2__["cssData"].properties.find(x => x.startsWith(abbreviationWithoutPrefix))) {
            return vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["CompletionList"].create([], true);
        }
        if (expandedAbbr) {
            const prefixedExpandedText = applyVendorPrefixes(expandedText, prefixOptions, expandOptions.options);
            expandedAbbr.textEdit = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["TextEdit"].replace(abbreviationRange, escapeNonTabStopDollar(addFinalTabStop(prefixedExpandedText)));
            expandedAbbr.documentation = replaceTabStopsWithCursors(prefixedExpandedText);
            expandedAbbr.label = removeTabStops(expandedText);
            expandedAbbr.filterText = abbreviation;
            // Custom snippets should show up in completions if abbreviation is a prefix
            const stylesheetCustomSnippetsKeys = stylesheetCustomSnippetsKeyCache.has(syntax) ? stylesheetCustomSnippetsKeyCache.get(syntax) : stylesheetCustomSnippetsKeyCache.get('css');
            completionItems = makeSnippetSuggestion(stylesheetCustomSnippetsKeys, abbreviation, abbreviation, abbreviationRange, expandOptions, 'Emmet Custom Snippet', false);
            if (!completionItems.find(x => x.textEdit.newText === expandedAbbr.textEdit.newText)) {
                // Fix for https://github.com/Microsoft/vscode/issues/28933#issuecomment-309236902
                // When user types in propertyname, emmet uses it to match with snippet names, resulting in width -> widows or font-family -> font: family
                // Filter out those cases here.
                const abbrRegex = new RegExp('.*' + abbreviationWithoutPrefix.split('').map(x => (x === '$' || x === '+') ? '\\' + x : x).join('.*') + '.*', 'i');
                if (/\d/.test(abbreviation) || abbrRegex.test(expandedAbbr.label)) {
                    completionItems.push(expandedAbbr);
                }
            }
        }
        if (vendorPrefixesEnabled) {
            // Incomplete abbreviations that use vendor prefix
            if (!completionItems.length && (abbreviation === '-' || /^-[wmso]{1,4}-?$/.test(abbreviation))) {
                return vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["CompletionList"].create([], true);
            }
        }
    }
    else {
        createExpandedAbbr(syntax, abbreviation);
        let tagToFindMoreSuggestionsFor = abbreviation;
        const newTagMatches = abbreviation.match(/(>|\+)([\w:-]+)$/);
        if (newTagMatches && newTagMatches.length === 3) {
            tagToFindMoreSuggestionsFor = newTagMatches[2];
        }
        if (syntax !== 'xml') {
            const commonlyUsedTagSuggestions = makeSnippetSuggestion(commonlyUsedTags, tagToFindMoreSuggestionsFor, abbreviation, abbreviationRange, expandOptions, 'Emmet Abbreviation');
            completionItems = completionItems.concat(commonlyUsedTagSuggestions);
        }
        if (emmetConfig.showAbbreviationSuggestions === true) {
            const abbreviationSuggestions = makeSnippetSuggestion(markupSnippetKeys.filter(x => !commonlyUsedTags.includes(x)), tagToFindMoreSuggestionsFor, abbreviation, abbreviationRange, expandOptions, 'Emmet Abbreviation');
            // Workaround for the main expanded abbr not appearing before the snippet suggestions
            if (expandedAbbr && abbreviationSuggestions.length > 0 && tagToFindMoreSuggestionsFor !== abbreviation) {
                expandedAbbr.sortText = '0' + expandedAbbr.label;
                abbreviationSuggestions.forEach(item => {
                    // Workaround for snippet suggestions items getting filtered out as the complete abbr does not start with snippetKey
                    item.filterText = abbreviation;
                    // Workaround for the main expanded abbr not appearing before the snippet suggestions
                    item.sortText = '9' + abbreviation;
                });
            }
            completionItems = completionItems.concat(abbreviationSuggestions);
        }
        // https://github.com/microsoft/vscode/issues/66680
        if (syntax === 'html' && completionItems.length >= 2 && abbreviation.includes(":")
            && expandedAbbr && expandedAbbr.textEdit.newText === `<${abbreviation}>\${0}</${abbreviation}>`) {
            completionItems = completionItems.filter(item => item.label !== abbreviation);
        }
    }
    if (emmetConfig.showSuggestionsAsSnippets === true) {
        completionItems.forEach(x => x.kind = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Snippet);
    }
    return completionItems.length ? vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["CompletionList"].create(completionItems, true) : undefined;
}
/**
 * Create & return snippets for snippet keys that start with given prefix
 */
function makeSnippetSuggestion(snippetKeys, prefix, abbreviation, abbreviationRange, expandOptions, snippetDetail, skipFullMatch = true) {
    if (!prefix || !snippetKeys) {
        return [];
    }
    const snippetCompletions = [];
    snippetKeys.forEach(snippetKey => {
        if (!snippetKey.startsWith(prefix.toLowerCase()) || (skipFullMatch && snippetKey === prefix.toLowerCase())) {
            return;
        }
        const currentAbbr = abbreviation + snippetKey.substr(prefix.length);
        let expandedAbbr;
        try {
            expandedAbbr = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["default"])(currentAbbr, expandOptions);
        }
        catch (e) {
        }
        if (!expandedAbbr) {
            return;
        }
        const item = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["CompletionItem"].create(prefix + snippetKey.substr(prefix.length));
        item.documentation = replaceTabStopsWithCursors(expandedAbbr);
        item.detail = snippetDetail;
        item.textEdit = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["TextEdit"].replace(abbreviationRange, escapeNonTabStopDollar(addFinalTabStop(expandedAbbr)));
        item.insertTextFormat = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["InsertTextFormat"].Snippet;
        snippetCompletions.push(item);
    });
    return snippetCompletions;
}
function getCurrentWord(currentLineTillPosition) {
    if (currentLineTillPosition) {
        const matches = currentLineTillPosition.match(/[\w,:,-,\.]*$/);
        if (matches) {
            return matches[0];
        }
    }
}
function replaceTabStopsWithCursors(expandedWord) {
    return expandedWord.replace(/([^\\])\$\{\d+\}/g, '$1|').replace(/\$\{\d+:([^\}]+)\}/g, '$1');
}
function removeTabStops(expandedWord) {
    return expandedWord.replace(/([^\\])\$\{\d+\}/g, '$1').replace(/\$\{\d+:([^\}]+)\}/g, '$1');
}
function escapeNonTabStopDollar(text) {
    return text ? text.replace(/([^\\])(\$)([^\{])/g, '$1\\$2$3') : text;
}
function addFinalTabStop(text) {
    if (!text || !text.trim()) {
        return text;
    }
    let maxTabStop = -1;
    let maxTabStopRanges = [];
    let foundLastStop = false;
    let replaceWithLastStop = false;
    let i = 0;
    const n = text.length;
    try {
        while (i < n && !foundLastStop) {
            // Look for ${
            if (text[i++] != '$' || text[i++] != '{') {
                continue;
            }
            // Find tabstop
            let numberStart = -1;
            let numberEnd = -1;
            while (i < n && /\d/.test(text[i])) {
                numberStart = numberStart < 0 ? i : numberStart;
                numberEnd = i + 1;
                i++;
            }
            // If ${ was not followed by a number and either } or :, then its not a tabstop
            if (numberStart === -1 || numberEnd === -1 || i >= n || (text[i] != '}' && text[i] != ':')) {
                continue;
            }
            // If ${0} was found, then break
            const currentTabStop = text.substring(numberStart, numberEnd);
            foundLastStop = currentTabStop === '0';
            if (foundLastStop) {
                break;
            }
            let foundPlaceholder = false;
            if (text[i++] == ':') {
                // TODO: Nested placeholders may break here
                while (i < n) {
                    if (text[i] == '}') {
                        foundPlaceholder = true;
                        break;
                    }
                    i++;
                }
            }
            // Decide to replace currentTabStop with ${0} only if its the max among all tabstops and is not a placeholder
            if (Number(currentTabStop) > Number(maxTabStop)) {
                maxTabStop = currentTabStop;
                maxTabStopRanges = [{ numberStart, numberEnd }];
                replaceWithLastStop = !foundPlaceholder;
            }
            else if (currentTabStop == maxTabStop) {
                maxTabStopRanges.push({ numberStart, numberEnd });
            }
        }
    }
    catch (e) {
    }
    if (replaceWithLastStop && !foundLastStop) {
        for (let i = 0; i < maxTabStopRanges.length; i++) {
            const rangeStart = maxTabStopRanges[i].numberStart;
            const rangeEnd = maxTabStopRanges[i].numberEnd;
            text = text.substr(0, rangeStart) + '0' + text.substr(rangeEnd);
        }
    }
    return text;
}
function getCurrentLine(document, position) {
    const offset = document.offsetAt(position);
    const text = document.getText();
    let start = 0;
    let end = text.length;
    for (let i = offset - 1; i >= 0; i--) {
        if (text[i] === '\n') {
            start = i + 1;
            break;
        }
    }
    for (let i = offset; i < text.length; i++) {
        if (text[i] === '\n') {
            end = i;
            break;
        }
    }
    return text.substring(start, end);
}
let customSnippetsRegistry = {};
let variablesFromFile = {};
let profilesFromFile = {};
const emmetSnippetField = (index, placeholder) => `\${${index}${placeholder ? ':' + placeholder : ''}}`;
/** Returns whether or not syntax is a supported stylesheet syntax, like CSS */
function isStyleSheet(syntax) {
    return _configCompat__WEBPACK_IMPORTED_MODULE_7__["syntaxes"].stylesheet.includes(syntax);
}
/** Returns the syntax type, either markup (e.g. for HTML) or stylesheet (e.g. for CSS) */
function getSyntaxType(syntax) {
    return isStyleSheet(syntax) ? 'stylesheet' : 'markup';
}
/** Returns the default syntax (html or css) to use for the snippets registry */
function getDefaultSyntax(syntax) {
    return isStyleSheet(syntax) ? 'css' : 'html';
}
/** Returns the default snippets that Emmet suggests */
function getDefaultSnippets(syntax) {
    const syntaxType = getSyntaxType(syntax);
    const syntaxToUse = isStyleSheet(syntax) ? 'css' : syntax;
    const emptyUserConfig = { type: syntaxType, syntax: syntaxToUse };
    const resolvedConfig = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["resolveConfig"])(emptyUserConfig);
    // https://github.com/microsoft/vscode/issues/97632
    // don't return markup (HTML) snippets for XML
    return syntax === 'xml' ? {} : resolvedConfig.snippets;
}
function getFilters(text, pos) {
    let filter;
    for (let i = 0; i < maxFilters; i++) {
        if (text.endsWith(`${filterDelimitor}${bemFilterSuffix}`, pos)) {
            pos -= bemFilterSuffix.length + 1;
            filter = filter ? bemFilterSuffix + ',' + filter : bemFilterSuffix;
        }
        else if (text.endsWith(`${filterDelimitor}${commentFilterSuffix}`, pos)) {
            pos -= commentFilterSuffix.length + 1;
            filter = filter ? commentFilterSuffix + ',' + filter : commentFilterSuffix;
        }
        else if (text.endsWith(`${filterDelimitor}${trimFilterSuffix}`, pos)) {
            pos -= trimFilterSuffix.length + 1;
            filter = filter ? trimFilterSuffix + ',' + filter : trimFilterSuffix;
        }
        else {
            break;
        }
    }
    return {
        pos: pos,
        filter: filter
    };
}
/**
 * Extracts abbreviation from the given position in the given document
 * @param document The TextDocument from which abbreviation needs to be extracted
 * @param position The Position in the given document from where abbreviation needs to be extracted
 * @param options The options to pass to the @emmetio/extract-abbreviation module
 */
function extractAbbreviation(document, position, options) {
    const currentLine = getCurrentLine(document, position);
    const currentLineTillPosition = currentLine.substr(0, position.character);
    const { pos, filter } = getFilters(currentLineTillPosition, position.character);
    const lengthOccupiedByFilter = filter ? filter.length + 1 : 0;
    try {
        const result = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["extract"])(currentLine, pos, options);
        const rangeToReplace = vscode_languageserver_types__WEBPACK_IMPORTED_MODULE_0__["Range"].create(position.line, result.location, position.line, result.location + result.abbreviation.length + lengthOccupiedByFilter);
        return {
            abbreviationRange: rangeToReplace,
            abbreviation: result.abbreviation,
            filter
        };
    }
    catch (e) {
    }
}
/**
 * Extracts abbreviation from the given text
 * @param text Text from which abbreviation needs to be extracted
 * @param syntax Syntax used to extract the abbreviation from the given text
 */
function extractAbbreviationFromText(text, syntax) {
    if (!text) {
        return;
    }
    const { pos, filter } = getFilters(text, text.length);
    try {
        const extractOptions = (isStyleSheet(syntax) || syntax === 'stylesheet') ?
            { syntax: 'stylesheet', lookAhead: false } : { lookAhead: true };
        const result = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["extract"])(text, pos, extractOptions);
        return {
            abbreviation: result.abbreviation,
            filter
        };
    }
    catch (e) {
    }
}
/**
 * Returns a boolean denoting validity of given abbreviation in the context of given syntax
 * Not needed once https://github.com/emmetio/atom-plugin/issues/22 is fixed
 * @param syntax string
 * @param abbreviation string
 */
function isAbbreviationValid(syntax, abbreviation) {
    if (!abbreviation) {
        return false;
    }
    if (isStyleSheet(syntax)) {
        if (abbreviation.includes('#')) {
            if (abbreviation.startsWith('#')) {
                return hexColorRegex.test(abbreviation);
            }
            else if (commonlyUsedTags.includes(abbreviation.substring(0, abbreviation.indexOf('#')))) {
                return false;
            }
        }
        return cssAbbreviationRegex.test(abbreviation);
    }
    if (abbreviation.startsWith('!')) {
        return !/[^!]/.test(abbreviation);
    }
    // Its common for users to type (sometextinsidebrackets), this should not be treated as an abbreviation
    // Grouping in abbreviation is valid only if it's inside a text node or preceeded/succeeded with one of the symbols for nesting, sibling, repeater or climb up
    if ((/\(/.test(abbreviation) || /\)/.test(abbreviation)) && !/\{[^\}\{]*[\(\)]+[^\}\{]*\}(?:[>\+\*\^]|$)/.test(abbreviation) && !/\(.*\)[>\+\*\^]/.test(abbreviation) && !/[>\+\*\^]\(.*\)/.test(abbreviation)) {
        return false;
    }
    if (syntax === 'jsx') {
        return (jsxAbbreviationStartRegex.test(abbreviation) && htmlAbbreviationRegex.test(abbreviation));
    }
    return (htmlAbbreviationStartRegex.test(abbreviation) && htmlAbbreviationRegex.test(abbreviation));
}
function isExpandedTextNoise(syntax, abbreviation, expandedText, options) {
    var _a, _b;
    // Unresolved css abbreviations get expanded to a blank property value
    // Eg: abc -> abc: ; or abc:d -> abc: d; which is noise if it gets suggested for every word typed
    if (isStyleSheet(syntax)) {
        const between = (_a = options['stylesheet.between']) !== null && _a !== void 0 ? _a : ': ';
        const after = (_b = options['stylesheet.after']) !== null && _b !== void 0 ? _b : ';';
        // Remove overlapping between `abbreviation` and `between`, if any
        let endPrefixIndex = abbreviation.indexOf(between[0], Math.max(abbreviation.length - between.length, 0));
        endPrefixIndex = endPrefixIndex >= 0 ? endPrefixIndex : abbreviation.length;
        const abbr = abbreviation.substring(0, endPrefixIndex);
        return expandedText === `${abbr}${between}\${0}${after}` ||
            expandedText.replace(/\s/g, '') === abbreviation.replace(/\s/g, '') + after;
    }
    // we don't want common html tags suggested for xml
    if (syntax === 'xml' &&
        commonlyUsedTags.some(tag => tag.startsWith(abbreviation.toLowerCase()))) {
        return true;
    }
    if (commonlyUsedTags.includes(abbreviation.toLowerCase()) ||
        markupSnippetKeys.includes(abbreviation)) {
        return false;
    }
    // Custom tags can have - or :
    if (/[-,:]/.test(abbreviation) && !/--|::/.test(abbreviation) &&
        !abbreviation.endsWith(':')) {
        return false;
    }
    // Its common for users to type some text and end it with period, this should not be treated as an abbreviation
    // Else it becomes noise.
    // When user just types '.', return the expansion
    // Otherwise emmet loses change to participate later
    // For example in `.foo`. See https://github.com/Microsoft/vscode/issues/66013
    if (abbreviation === '.') {
        return false;
    }
    const dotMatches = abbreviation.match(/^([a-z,A-Z,\d]*)\.$/);
    if (dotMatches) {
        // Valid html tags such as `div.`
        if (dotMatches[1] && _data__WEBPACK_IMPORTED_MODULE_2__["htmlData"].tags.includes(dotMatches[1])) {
            return false;
        }
        return true;
    }
    // Fix for https://github.com/microsoft/vscode/issues/89746
    // PascalCase tags are common in jsx code, which should not be treated as noise.
    // Eg: MyAwesomComponent -> <MyAwesomComponent></MyAwesomComponent>
    if (syntax === 'jsx' && /^([A-Z][A-Za-z0-9]*)+$/.test(abbreviation)) {
        return false;
    }
    // Unresolved html abbreviations get expanded as if it were a tag
    // Eg: abc -> <abc></abc> which is noise if it gets suggested for every word typed
    return (expandedText.toLowerCase() === `<${abbreviation.toLowerCase()}>\${1}</${abbreviation.toLowerCase()}>`);
}
/**
 * Returns options to be used by emmet
 */
function getExpandOptions(syntax, emmetConfig, filter) {
    var _a, _b, _c, _d, _e, _f;
    emmetConfig = emmetConfig || {};
    emmetConfig['preferences'] = emmetConfig['preferences'] || {};
    const preferences = emmetConfig['preferences'];
    const stylesheetSyntax = isStyleSheet(syntax) ? syntax : 'css';
    // Fetch Profile
    const profile = getProfile(syntax, emmetConfig['syntaxProfiles']);
    const filtersFromProfile = (profile && profile['filters']) ? profile['filters'].split(',') : [];
    const trimmedFilters = filtersFromProfile.map(filterFromProfile => filterFromProfile.trim());
    const bemEnabled = (filter && filter.split(',').some(x => x.trim() === 'bem')) || trimmedFilters.includes('bem');
    const commentEnabled = (filter && filter.split(',').some(x => x.trim() === 'c')) || trimmedFilters.includes('c');
    // Fetch formatters
    const formatters = getFormatters(syntax, emmetConfig['preferences']);
    const unitAliases = ((formatters === null || formatters === void 0 ? void 0 : formatters.stylesheet) && formatters.stylesheet['unitAliases']) || {};
    // These options are the default values provided by vscode for
    // extension preferences
    const defaultVSCodeOptions = {
        // inlineElements: string[],
        // 'output.indent': string,
        // 'output.baseIndent': string,
        // 'output.newline': string,
        // 'output.tagCase': profile['tagCase'],
        // 'output.attributeCase': profile['attributeCase'],
        // 'output.attributeQuotes': profile['attributeQuotes'],
        // 'output.format': profile['format'] ?? true,
        // 'output.formatLeafNode': boolean,
        'output.formatSkip': ['html'],
        'output.formatForce': ['body'],
        // 'output.inlineBreak': profile['inlineBreak'],
        'output.compactBoolean': false,
        // 'output.booleanAttributes': string[],
        'output.reverseAttributes': false,
        // 'output.selfClosingStyle': profile['selfClosingStyle'],
        'output.field': emmetSnippetField,
        // 'output.text': TextOutput,
        'markup.href': true,
        'comment.enabled': false,
        'comment.trigger': ['id', 'class'],
        'comment.before': '',
        'comment.after': '\n<!-- /[#ID][.CLASS] -->',
        'bem.enabled': false,
        'bem.element': '__',
        'bem.modifier': '_',
        'jsx.enabled': syntax === 'jsx',
        // 'stylesheet.keywords': string[],
        // 'stylesheet.unitless': string[],
        'stylesheet.shortHex': true,
        'stylesheet.between': syntax === 'stylus' ? ' ' : ': ',
        'stylesheet.after': (syntax === 'sass' || syntax === 'stylus') ? '' : ';',
        'stylesheet.intUnit': 'px',
        'stylesheet.floatUnit': 'em',
        'stylesheet.unitAliases': { e: 'em', p: '%', x: 'ex', r: 'rem' },
        // 'stylesheet.json': boolean,
        // 'stylesheet.jsonDoubleQuotes': boolean,
        'stylesheet.fuzzySearchMinScore': 0.3,
    };
    // These options come from user prefs in the vscode repo
    const userPreferenceOptions = {
        // inlineElements: string[],
        // 'output.indent': string,
        // 'output.baseIndent': string,
        // 'output.newline': string,
        'output.tagCase': profile['tagCase'],
        'output.attributeCase': profile['attributeCase'],
        'output.attributeQuotes': profile['attributeQuotes'],
        'output.format': (_a = profile['format']) !== null && _a !== void 0 ? _a : true,
        // 'output.formatLeafNode': boolean,
        'output.formatSkip': preferences['format.noIndentTags'],
        'output.formatForce': preferences['format.forceIndentationForTags'],
        'output.inlineBreak': profile['inlineBreak'],
        'output.compactBoolean': (_b = profile['compactBooleanAttributes']) !== null && _b !== void 0 ? _b : preferences['profile.allowCompactBoolean'],
        // 'output.booleanAttributes': string[],
        'output.reverseAttributes': preferences['output.reverseAttributes'],
        'output.selfClosingStyle': (_c = profile['selfClosingStyle']) !== null && _c !== void 0 ? _c : getClosingStyle(syntax),
        'output.field': emmetSnippetField,
        // 'output.text': TextOutput,
        // 'markup.href': boolean,
        'comment.enabled': commentEnabled,
        'comment.trigger': preferences['filter.commentTrigger'],
        'comment.before': preferences['filter.commentBefore'],
        'comment.after': preferences['filter.commentAfter'],
        'bem.enabled': bemEnabled,
        'bem.element': (_d = preferences['bem.elementSeparator']) !== null && _d !== void 0 ? _d : '__',
        'bem.modifier': (_e = preferences['bem.modifierSeparator']) !== null && _e !== void 0 ? _e : '_',
        'jsx.enabled': syntax === 'jsx',
        // 'stylesheet.keywords': string[],
        // 'stylesheet.unitless': string[],
        'stylesheet.shortHex': preferences['css.color.short'],
        'stylesheet.between': preferences[`${stylesheetSyntax}.valueSeparator`],
        'stylesheet.after': preferences[`${stylesheetSyntax}.propertyEnd`],
        'stylesheet.intUnit': preferences['css.intUnit'],
        'stylesheet.floatUnit': preferences['css.floatUnit'],
        'stylesheet.unitAliases': unitAliases,
        // 'stylesheet.json': boolean,
        // 'stylesheet.jsonDoubleQuotes': boolean,
        'stylesheet.fuzzySearchMinScore': preferences['css.fuzzySearchMinScore'],
    };
    const combinedOptions = {};
    [...Object.keys(defaultVSCodeOptions), ...Object.keys(userPreferenceOptions)].forEach(key => {
        var _a;
        combinedOptions[key] = (_a = userPreferenceOptions[key]) !== null && _a !== void 0 ? _a : defaultVSCodeOptions[key];
    });
    const mergedAliases = Object.assign(Object.assign({}, defaultVSCodeOptions['stylesheet.unitAliases']), userPreferenceOptions['stylesheet.unitAliases']);
    combinedOptions['stylesheet.unitAliases'] = mergedAliases;
    const type = getSyntaxType(syntax);
    const variables = getVariables(emmetConfig['variables']);
    const baseSyntax = getDefaultSyntax(syntax);
    const snippets = (type === 'stylesheet') ?
        ((_f = customSnippetsRegistry[syntax]) !== null && _f !== void 0 ? _f : customSnippetsRegistry[baseSyntax]) :
        customSnippetsRegistry[syntax];
    return {
        type,
        options: combinedOptions,
        variables,
        snippets,
        syntax,
        // context: null,
        text: null,
        maxRepeat: 1000,
    };
}
function getClosingStyle(syntax) {
    switch (syntax) {
        case 'xhtml': return 'xhtml';
        case 'xml': return 'xml';
        case 'xsl': return 'xml';
        default: return 'html';
    }
}
function splitVendorPrefix(abbreviation) {
    if (!vendorPrefixesEnabled) {
        return {
            prefixOptions: '',
            abbreviationWithoutPrefix: abbreviation
        };
    }
    abbreviation = abbreviation || "";
    if (abbreviation[0] != '-') {
        return {
            prefixOptions: "",
            abbreviationWithoutPrefix: abbreviation
        };
    }
    else {
        abbreviation = abbreviation.substr(1);
        let pref = "-";
        if (/^[wmso]*-./.test(abbreviation)) {
            const index = abbreviation.indexOf("-");
            if (index > -1) {
                pref += abbreviation.substr(0, index + 1);
                abbreviation = abbreviation.substr(index + 1);
            }
        }
        return {
            prefixOptions: pref,
            abbreviationWithoutPrefix: abbreviation
        };
    }
}
function applyVendorPrefixes(expandedProperty, vendors, preferences) {
    if (!vendorPrefixesEnabled) {
        return expandedProperty;
    }
    preferences = preferences || {};
    expandedProperty = expandedProperty || "";
    vendors = vendors || "";
    if (vendors[0] !== '-') {
        return expandedProperty;
    }
    if (vendors == "-") {
        let defaultVendors = "-";
        const property = expandedProperty.substr(0, expandedProperty.indexOf(':'));
        if (!property) {
            return expandedProperty;
        }
        for (const v in vendorPrefixes) {
            const vendorProperties = preferences['css.' + vendorPrefixes[v] + 'Properties'];
            if (vendorProperties && vendorProperties.split(',').find(x => x.trim() === property))
                defaultVendors += v;
        }
        // If no vendors specified, add all
        vendors = defaultVendors == "-" ? "-wmso" : defaultVendors;
        vendors += '-';
    }
    vendors = vendors.substr(1);
    let prefixedProperty = "";
    for (let index = 0; index < vendors.length - 1; index++) {
        prefixedProperty += '-' + vendorPrefixes[vendors[index]] + '-' + expandedProperty + "\n";
    }
    return prefixedProperty + expandedProperty;
}
/**
 * Parses given abbreviation using given options and returns a tree
 * @param abbreviation string
 * @param options options used by the emmet module to parse given abbreviation
 */
function parseAbbreviation(abbreviation, options) {
    const resolvedOptions = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["resolveConfig"])(options);
    return (options.type === 'stylesheet') ?
        Object(emmet__WEBPACK_IMPORTED_MODULE_6__["parseStylesheet"])(abbreviation, resolvedOptions) :
        Object(emmet__WEBPACK_IMPORTED_MODULE_6__["parseMarkup"])(abbreviation, resolvedOptions);
}
/**
 * Expands given abbreviation using given options
 * @param abbreviation string or parsed abbreviation
 * @param config options used by the @emmetio/expand-abbreviation module to expand given abbreviation
 */
function expandAbbreviation(abbreviation, config) {
    let expandedText;
    const resolvedConfig = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["resolveConfig"])(config);
    if (config.type === 'stylesheet') {
        if (typeof abbreviation === 'string') {
            const { prefixOptions, abbreviationWithoutPrefix } = splitVendorPrefix(abbreviation);
            expandedText = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["default"])(abbreviationWithoutPrefix, resolvedConfig);
            expandedText = applyVendorPrefixes(expandedText, prefixOptions, resolvedConfig.options);
        }
        else {
            expandedText = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["stringifyStylesheet"])(abbreviation, resolvedConfig);
        }
    }
    else {
        if (typeof abbreviation === 'string') {
            expandedText = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["default"])(abbreviation, resolvedConfig);
        }
        else {
            expandedText = Object(emmet__WEBPACK_IMPORTED_MODULE_6__["stringifyMarkup"])(abbreviation, resolvedConfig);
        }
    }
    return escapeNonTabStopDollar(addFinalTabStop(expandedText));
}
/**
 * Maps and returns syntaxProfiles of previous format to ones compatible with new emmet modules
 * @param syntax
 */
function getProfile(syntax, profilesFromSettings) {
    if (!profilesFromSettings) {
        profilesFromSettings = {};
    }
    const profilesConfig = Object.assign({}, profilesFromFile, profilesFromSettings);
    const options = profilesConfig[syntax];
    if (!options || typeof options === 'string') {
        if (options === 'xhtml') {
            return {
                selfClosingStyle: 'xhtml'
            };
        }
        return {};
    }
    const newOptions = {};
    for (const key in options) {
        switch (key) {
            case 'tag_case':
                newOptions['tagCase'] = (options[key] === 'lower' || options[key] === 'upper') ? options[key] : '';
                break;
            case 'attr_case':
                newOptions['attributeCase'] = (options[key] === 'lower' || options[key] === 'upper') ? options[key] : '';
                break;
            case 'attr_quotes':
                newOptions['attributeQuotes'] = options[key];
                break;
            case 'tag_nl':
                newOptions['format'] = (options[key] === true || options[key] === false) ? options[key] : true;
                break;
            case 'inline_break':
                newOptions['inlineBreak'] = options[key];
                break;
            case 'self_closing_tag':
                if (options[key] === true) {
                    newOptions['selfClosingStyle'] = 'xml';
                    break;
                }
                if (options[key] === false) {
                    newOptions['selfClosingStyle'] = 'html';
                    break;
                }
                newOptions['selfClosingStyle'] = options[key];
                break;
            case 'compact_bool':
                newOptions['compactBooleanAttributes'] = options[key];
                break;
            default:
                newOptions[key] = options[key];
                break;
        }
    }
    return newOptions;
}
/**
 * Returns variables to be used while expanding snippets
 */
function getVariables(variablesFromSettings) {
    if (!variablesFromSettings) {
        return variablesFromFile;
    }
    return Object.assign({}, variablesFromFile, variablesFromSettings);
}
function getFormatters(syntax, preferences) {
    if (!preferences) {
        return {};
    }
    if (!isStyleSheet(syntax)) {
        const commentFormatter = {};
        for (const key in preferences) {
            switch (key) {
                case 'filter.commentAfter':
                    commentFormatter['after'] = preferences[key];
                    break;
                case 'filter.commentBefore':
                    commentFormatter['before'] = preferences[key];
                    break;
                case 'filter.commentTrigger':
                    commentFormatter['trigger'] = preferences[key];
                    break;
                default:
                    break;
            }
        }
        return {
            comment: commentFormatter
        };
    }
    let fuzzySearchMinScore = typeof preferences['css.fuzzySearchMinScore'] === 'number' ? preferences['css.fuzzySearchMinScore'] : 0.3;
    if (fuzzySearchMinScore > 1) {
        fuzzySearchMinScore = 1;
    }
    else if (fuzzySearchMinScore < 0) {
        fuzzySearchMinScore = 0;
    }
    const stylesheetFormatter = {
        'fuzzySearchMinScore': fuzzySearchMinScore
    };
    for (const key in preferences) {
        switch (key) {
            case 'css.floatUnit':
                stylesheetFormatter['floatUnit'] = preferences[key];
                break;
            case 'css.intUnit':
                stylesheetFormatter['intUnit'] = preferences[key];
                break;
            case 'css.unitAliases':
                const unitAliases = {};
                preferences[key].split(',').forEach(alias => {
                    if (!alias || !alias.trim() || !alias.includes(':')) {
                        return;
                    }
                    const aliasName = alias.substr(0, alias.indexOf(':'));
                    const aliasValue = alias.substr(aliasName.length + 1);
                    if (!aliasName.trim() || !aliasValue) {
                        return;
                    }
                    unitAliases[aliasName.trim()] = aliasValue;
                });
                stylesheetFormatter['unitAliases'] = unitAliases;
                break;
            case `${syntax}.valueSeparator`:
                stylesheetFormatter['between'] = preferences[key];
                break;
            case `${syntax}.propertyEnd`:
                stylesheetFormatter['after'] = preferences[key];
                break;
            default:
                break;
        }
    }
    return {
        stylesheet: stylesheetFormatter
    };
}
/**
 * Updates customizations from snippets.json and syntaxProfiles.json files in the directory configured in emmet.extensionsPath setting
 * @param emmetExtensionsPathSetting setting passed from emmet.extensionsPath. Supports multiple paths
 */
function updateExtensionsPath(emmetExtensionsPathSetting, fs, workspaceFolderPath, homeDir) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!emmetExtensionsPathSetting.length) {
            // Do nothing if the input array is an empty arra, since it means that users don't specify any settings
            resetSettingsFromFile();
            return Promise.resolve();
        }
        let emmetExtensionsPathUri;
        let hasValidPath = false;
        for (let emmetExtensionsPath of emmetExtensionsPathSetting) {
            if (emmetExtensionsPath) {
                emmetExtensionsPath = emmetExtensionsPath.trim();
            }
            if (!emmetExtensionsPath) {
                resetSettingsFromFile();
                return Promise.resolve();
            }
            if (emmetExtensionsPath[0] === '~') {
                if (homeDir) {
                    emmetExtensionsPathUri = Object(_fileService__WEBPACK_IMPORTED_MODULE_4__["joinPath"])(homeDir, emmetExtensionsPath.substr(1));
                }
            }
            else if (!Object(_fileService__WEBPACK_IMPORTED_MODULE_4__["isAbsolutePath"])(emmetExtensionsPath)) {
                if (workspaceFolderPath) {
                    emmetExtensionsPathUri = Object(_fileService__WEBPACK_IMPORTED_MODULE_4__["joinPath"])(workspaceFolderPath, emmetExtensionsPath);
                }
            }
            else {
                emmetExtensionsPathUri = vscode_uri__WEBPACK_IMPORTED_MODULE_3__["URI"].file(emmetExtensionsPath);
            }
            try {
                // the fs.stat call itself could throw, so we wrap this part up into a try-catch
                if (!emmetExtensionsPathUri || (yield fs.stat(emmetExtensionsPathUri)).type !== _fileService__WEBPACK_IMPORTED_MODULE_4__["FileType"].Directory) {
                    throw new Error();
                }
            }
            catch (e) {
                continue;
            }
            hasValidPath = true;
            break;
        }
        if (!hasValidPath) {
            resetSettingsFromFile();
            if (Array.isArray(emmetExtensionsPathSetting)) {
                throw new Error(localize("Emmet extensionsPath plural directories error", "All of the directories in the array doesn't exist. Update emmet.extensionsPath setting"));
            }
            else {
                throw new Error(localize("Emmet extensionsPath single directory error", `The directory ${emmetExtensionsPathSetting} doesn't exist. Update emmet.extensionsPath setting`));
            }
        }
        const snippetsPath = Object(_fileService__WEBPACK_IMPORTED_MODULE_4__["joinPath"])(emmetExtensionsPathUri, 'snippets.json');
        const profilesPath = Object(_fileService__WEBPACK_IMPORTED_MODULE_4__["joinPath"])(emmetExtensionsPathUri, 'syntaxProfiles.json');
        try {
            const snippetsData = yield fs.readFile(snippetsPath);
            const snippetsDataStr = new util__WEBPACK_IMPORTED_MODULE_5__["TextDecoder"]().decode(snippetsData);
            const errors = [];
            const snippetsJson = jsonc_parser__WEBPACK_IMPORTED_MODULE_1__["parse"](snippetsDataStr, errors);
            if (errors.length > 0) {
                throw new Error(`Found error ${jsonc_parser__WEBPACK_IMPORTED_MODULE_1__["printParseErrorCode"](errors[0].error)} while parsing the file ${snippetsPath} at offset ${errors[0].offset}`);
            }
            variablesFromFile = snippetsJson['variables'];
            customSnippetsRegistry = {};
            snippetKeyCache.clear();
            Object.keys(snippetsJson).forEach(syntax => {
                if (!snippetsJson[syntax]['snippets']) {
                    return;
                }
                const baseSyntax = getDefaultSyntax(syntax);
                let customSnippets = snippetsJson[syntax]['snippets'];
                if (snippetsJson[baseSyntax] && snippetsJson[baseSyntax]['snippets'] && baseSyntax !== syntax) {
                    customSnippets = Object.assign({}, snippetsJson[baseSyntax]['snippets'], snippetsJson[syntax]['snippets']);
                }
                if (!isStyleSheet(syntax)) {
                    // In Emmet 2.0 all snippets should be valid abbreviations
                    // Convert old snippets that do not follow this format to new format
                    for (const snippetKey in customSnippets) {
                        if (customSnippets.hasOwnProperty(snippetKey)
                            && customSnippets[snippetKey].startsWith('<')
                            && customSnippets[snippetKey].endsWith('>')) {
                            customSnippets[snippetKey] = `{${customSnippets[snippetKey]}}`;
                        }
                    }
                }
                else {
                    stylesheetCustomSnippetsKeyCache.set(syntax, Object.keys(customSnippets));
                }
                customSnippetsRegistry[syntax] = Object(_configCompat__WEBPACK_IMPORTED_MODULE_7__["parseSnippets"])(customSnippets);
                const snippetKeys = Object.keys(customSnippetsRegistry[syntax]);
                snippetKeyCache.set(syntax, snippetKeys);
            });
        }
        catch (e) {
            resetSettingsFromFile();
            throw new Error(localize("Emmet extensionsPath parsing error", `Error while parsing the file ${snippetsPath}`));
        }
        try {
            const profilesData = yield fs.readFile(profilesPath);
            const profilesDataStr = new util__WEBPACK_IMPORTED_MODULE_5__["TextDecoder"]().decode(profilesData);
            profilesFromFile = JSON.parse(profilesDataStr);
        }
        catch (e) {
            //
        }
    });
}
function resetSettingsFromFile() {
    customSnippetsRegistry = {};
    snippetKeyCache.clear();
    stylesheetCustomSnippetsKeyCache.clear();
    profilesFromFile = {};
    variablesFromFile = {};
}
/**
* Get the corresponding emmet mode for given vscode language mode
* Eg: jsx for typescriptreact/javascriptreact or pug for jade
* If the language is not supported by emmet or has been exlcuded via `exlcudeLanguages` setting,
* then nothing is returned
*
* @param language
* @param exlcudedLanguages Array of language ids that user has chosen to exlcude for emmet
*/
function getEmmetMode(language, excludedLanguages = []) {
    if (!language || excludedLanguages.includes(language)) {
        return;
    }
    if (/\b(typescriptreact|javascriptreact|jsx-tags)\b/.test(language)) { // treat tsx like jsx
        return 'jsx';
    }
    if (language === 'sass-indented') { // map sass-indented to sass
        return 'sass';
    }
    if (language === 'jade') {
        return 'pug';
    }
    if (_configCompat__WEBPACK_IMPORTED_MODULE_7__["syntaxes"].markup.includes(language) || _configCompat__WEBPACK_IMPORTED_MODULE_7__["syntaxes"].stylesheet.includes(language)) {
        return language;
    }
}
const hexColorRegex = /^#[\d,a-f,A-F]{1,6}$/;
const onlyLetters = /^[a-z,A-Z]+$/;
/**
 * Returns a completion participant for Emmet of the form {
 * 		onCssProperty: () => void
 * 		onCssPropertyValue: () => void
 * 		onHtmlContent: () => void
 * }
 * @param document The TextDocument for which completions are being provided
 * @param position The Position in the given document where completions are being provided
 * @param syntax The Emmet syntax to use when providing Emmet completions
 * @param emmetSettings The Emmet settings to use when providing Emmet completions
 * @param result The Completion List object that needs to be updated with Emmet completions
 */
function getEmmetCompletionParticipants(document, position, syntax, emmetSettings, result) {
    return {
        getId: () => 'emmet',
        onCssProperty: (context) => {
            if (context && context.propertyName) {
                const currentresult = doComplete(document, position, syntax, emmetSettings);
                if (result && currentresult) {
                    result.items = currentresult.items;
                    result.isIncomplete = true;
                }
            }
        },
        onCssPropertyValue: (context) => {
            if (context && context.propertyValue) {
                const extractOptions = { lookAhead: false, type: 'stylesheet' };
                const extractedResults = extractAbbreviation(document, position, extractOptions);
                if (!extractedResults) {
                    return;
                }
                const validAbbreviationWithColon = extractedResults.abbreviation === `${context.propertyName}:${context.propertyValue}` && onlyLetters.test(context.propertyValue);
                if (validAbbreviationWithColon // Allows abbreviations like pos:f
                    || hexColorRegex.test(extractedResults.abbreviation)
                    || extractedResults.abbreviation === '!') {
                    const currentresult = doComplete(document, position, syntax, emmetSettings);
                    if (result && currentresult) {
                        result.items = currentresult.items;
                        result.isIncomplete = true;
                    }
                }
            }
        },
        onHtmlContent: () => {
            const currentresult = doComplete(document, position, syntax, emmetSettings);
            if (result && currentresult) {
                result.items = currentresult.items;
                result.isIncomplete = true;
            }
        }
    };
}
//# sourceMappingURL=emmetHelper.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uinteger", function() { return uinteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationLink", function() { return LocationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInformation", function() { return ColorInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPresentation", function() { return ColorPresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeKind", function() { return FoldingRangeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRange", function() { return FoldingRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticRelatedInformation", function() { return DiagnosticRelatedInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticSeverity", function() { return DiagnosticSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticTag", function() { return DiagnosticTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeDescription", function() { return CodeDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnostic", function() { return Diagnostic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEdit", function() { return TextEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeAnnotation", function() { return ChangeAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeAnnotationIdentifier", function() { return ChangeAnnotationIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotatedTextEdit", function() { return AnnotatedTextEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentEdit", function() { return TextDocumentEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFile", function() { return CreateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameFile", function() { return RenameFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFile", function() { return DeleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceEdit", function() { return WorkspaceEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceChange", function() { return WorkspaceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentIdentifier", function() { return TextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionedTextDocumentIdentifier", function() { return VersionedTextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionalVersionedTextDocumentIdentifier", function() { return OptionalVersionedTextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentItem", function() { return TextDocumentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupKind", function() { return MarkupKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupContent", function() { return MarkupContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemKind", function() { return CompletionItemKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertTextFormat", function() { return InsertTextFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemTag", function() { return CompletionItemTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertReplaceEdit", function() { return InsertReplaceEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertTextMode", function() { return InsertTextMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItem", function() { return CompletionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionList", function() { return CompletionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedString", function() { return MarkedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hover", function() { return Hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterInformation", function() { return ParameterInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureInformation", function() { return SignatureInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlight", function() { return DocumentHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolKind", function() { return SymbolKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolTag", function() { return SymbolTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInformation", function() { return SymbolInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbol", function() { return DocumentSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionKind", function() { return CodeActionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionContext", function() { return CodeActionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeAction", function() { return CodeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLens", function() { return CodeLens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingOptions", function() { return FormattingOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentLink", function() { return DocumentLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRange", function() { return SelectionRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOL", function() { return EOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocument", function() { return TextDocument; });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var integer;
(function (integer) {
    integer.MIN_VALUE = -2147483648;
    integer.MAX_VALUE = 2147483647;
})(integer || (integer = {}));
var uinteger;
(function (uinteger) {
    uinteger.MIN_VALUE = 0;
    uinteger.MAX_VALUE = 2147483647;
})(uinteger || (uinteger = {}));
/**
 * The Position namespace provides helper functions to work with
 * [Position](#Position) literals.
 */
var Position;
(function (Position) {
    /**
     * Creates a new Position literal from the given line and character.
     * @param line The position's line.
     * @param character The position's character.
     */
    function create(line, character) {
        if (line === Number.MAX_VALUE) {
            line = uinteger.MAX_VALUE;
        }
        if (character === Number.MAX_VALUE) {
            character = uinteger.MAX_VALUE;
        }
        return { line: line, character: character };
    }
    Position.create = create;
    /**
     * Checks whether the given literal conforms to the [Position](#Position) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
    }
    Position.is = is;
})(Position || (Position = {}));
/**
 * The Range namespace provides helper functions to work with
 * [Range](#Range) literals.
 */
var Range;
(function (Range) {
    function create(one, two, three, four) {
        if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
        }
        else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
        }
        else {
            throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
        }
    }
    Range.create = create;
    /**
     * Checks whether the given literal conforms to the [Range](#Range) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
    }
    Range.is = is;
})(Range || (Range = {}));
/**
 * The Location namespace provides helper functions to work with
 * [Location](#Location) literals.
 */
var Location;
(function (Location) {
    /**
     * Creates a Location literal.
     * @param uri The location's uri.
     * @param range The location's range.
     */
    function create(uri, range) {
        return { uri: uri, range: range };
    }
    Location.create = create;
    /**
     * Checks whether the given literal conforms to the [Location](#Location) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
    }
    Location.is = is;
})(Location || (Location = {}));
/**
 * The LocationLink namespace provides helper functions to work with
 * [LocationLink](#LocationLink) literals.
 */
var LocationLink;
(function (LocationLink) {
    /**
     * Creates a LocationLink literal.
     * @param targetUri The definition's uri.
     * @param targetRange The full range of the definition.
     * @param targetSelectionRange The span of the symbol definition at the target.
     * @param originSelectionRange The span of the symbol being defined in the originating source file.
     */
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
    }
    LocationLink.create = create;
    /**
     * Checks whether the given literal conforms to the [LocationLink](#LocationLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
            && (Range.is(candidate.targetSelectionRange) || Is.undefined(candidate.targetSelectionRange))
            && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
    }
    LocationLink.is = is;
})(LocationLink || (LocationLink = {}));
/**
 * The Color namespace provides helper functions to work with
 * [Color](#Color) literals.
 */
var Color;
(function (Color) {
    /**
     * Creates a new Color literal.
     */
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha,
        };
    }
    Color.create = create;
    /**
     * Checks whether the given literal conforms to the [Color](#Color) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.numberRange(candidate.red, 0, 1)
            && Is.numberRange(candidate.green, 0, 1)
            && Is.numberRange(candidate.blue, 0, 1)
            && Is.numberRange(candidate.alpha, 0, 1);
    }
    Color.is = is;
})(Color || (Color = {}));
/**
 * The ColorInformation namespace provides helper functions to work with
 * [ColorInformation](#ColorInformation) literals.
 */
var ColorInformation;
(function (ColorInformation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(range, color) {
        return {
            range: range,
            color: color,
        };
    }
    ColorInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Range.is(candidate.range) && Color.is(candidate.color);
    }
    ColorInformation.is = is;
})(ColorInformation || (ColorInformation = {}));
/**
 * The Color namespace provides helper functions to work with
 * [ColorPresentation](#ColorPresentation) literals.
 */
var ColorPresentation;
(function (ColorPresentation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits,
        };
    }
    ColorPresentation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate.label)
            && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
            && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
    }
    ColorPresentation.is = is;
})(ColorPresentation || (ColorPresentation = {}));
/**
 * Enum of known range kinds
 */
var FoldingRangeKind;
(function (FoldingRangeKind) {
    /**
     * Folding range for a comment
     */
    FoldingRangeKind["Comment"] = "comment";
    /**
     * Folding range for a imports or includes
     */
    FoldingRangeKind["Imports"] = "imports";
    /**
     * Folding range for a region (e.g. `#region`)
     */
    FoldingRangeKind["Region"] = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
/**
 * The folding range namespace provides helper functions to work with
 * [FoldingRange](#FoldingRange) literals.
 */
var FoldingRange;
(function (FoldingRange) {
    /**
     * Creates a new FoldingRange literal.
     */
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
            result.kind = kind;
        }
        return result;
    }
    FoldingRange.create = create;
    /**
     * Checks whether the given literal conforms to the [FoldingRange](#FoldingRange) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine)
            && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter))
            && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter))
            && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
    }
    FoldingRange.is = is;
})(FoldingRange || (FoldingRange = {}));
/**
 * The DiagnosticRelatedInformation namespace provides helper functions to work with
 * [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) literals.
 */
var DiagnosticRelatedInformation;
(function (DiagnosticRelatedInformation) {
    /**
     * Creates a new DiagnosticRelatedInformation literal.
     */
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
    }
    DiagnosticRelatedInformation.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
/**
 * The diagnostic's severity.
 */
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    /**
     * Reports an error.
     */
    DiagnosticSeverity.Error = 1;
    /**
     * Reports a warning.
     */
    DiagnosticSeverity.Warning = 2;
    /**
     * Reports an information.
     */
    DiagnosticSeverity.Information = 3;
    /**
     * Reports a hint.
     */
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
/**
 * The diagnostic tags.
 *
 * @since 3.15.0
 */
var DiagnosticTag;
(function (DiagnosticTag) {
    /**
     * Unused or unnecessary code.
     *
     * Clients are allowed to render diagnostics with this tag faded out instead of having
     * an error squiggle.
     */
    DiagnosticTag.Unnecessary = 1;
    /**
     * Deprecated or obsolete code.
     *
     * Clients are allowed to rendered diagnostics with this tag strike through.
     */
    DiagnosticTag.Deprecated = 2;
})(DiagnosticTag || (DiagnosticTag = {}));
/**
 * The CodeDescription namespace provides functions to deal with descriptions for diagnostic codes.
 *
 * @since 3.16.0
 */
var CodeDescription;
(function (CodeDescription) {
    function is(value) {
        var candidate = value;
        return candidate !== undefined && candidate !== null && Is.string(candidate.href);
    }
    CodeDescription.is = is;
})(CodeDescription || (CodeDescription = {}));
/**
 * The Diagnostic namespace provides helper functions to work with
 * [Diagnostic](#Diagnostic) literals.
 */
var Diagnostic;
(function (Diagnostic) {
    /**
     * Creates a new Diagnostic literal.
     */
    function create(range, message, severity, code, source, relatedInformation) {
        var result = { range: range, message: message };
        if (Is.defined(severity)) {
            result.severity = severity;
        }
        if (Is.defined(code)) {
            result.code = code;
        }
        if (Is.defined(source)) {
            result.source = source;
        }
        if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
        }
        return result;
    }
    Diagnostic.create = create;
    /**
     * Checks whether the given literal conforms to the [Diagnostic](#Diagnostic) interface.
     */
    function is(value) {
        var _a;
        var candidate = value;
        return Is.defined(candidate)
            && Range.is(candidate.range)
            && Is.string(candidate.message)
            && (Is.number(candidate.severity) || Is.undefined(candidate.severity))
            && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code))
            && (Is.undefined(candidate.codeDescription) || (Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)))
            && (Is.string(candidate.source) || Is.undefined(candidate.source))
            && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
    }
    Diagnostic.is = is;
})(Diagnostic || (Diagnostic = {}));
/**
 * The Command namespace provides helper functions to work with
 * [Command](#Command) literals.
 */
var Command;
(function (Command) {
    /**
     * Creates a new Command literal.
     */
    function create(title, command) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result = { title: title, command: command };
        if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
        }
        return result;
    }
    Command.create = create;
    /**
     * Checks whether the given literal conforms to the [Command](#Command) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
    }
    Command.is = is;
})(Command || (Command = {}));
/**
 * The TextEdit namespace provides helper function to create replace,
 * insert and delete edits more easily.
 */
var TextEdit;
(function (TextEdit) {
    /**
     * Creates a replace text edit.
     * @param range The range of text to be replaced.
     * @param newText The new text.
     */
    function replace(range, newText) {
        return { range: range, newText: newText };
    }
    TextEdit.replace = replace;
    /**
     * Creates a insert text edit.
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     */
    function insert(position, newText) {
        return { range: { start: position, end: position }, newText: newText };
    }
    TextEdit.insert = insert;
    /**
     * Creates a delete text edit.
     * @param range The range of text to be deleted.
     */
    function del(range) {
        return { range: range, newText: '' };
    }
    TextEdit.del = del;
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate)
            && Is.string(candidate.newText)
            && Range.is(candidate.range);
    }
    TextEdit.is = is;
})(TextEdit || (TextEdit = {}));
var ChangeAnnotation;
(function (ChangeAnnotation) {
    function create(label, needsConfirmation, description) {
        var result = { label: label };
        if (needsConfirmation !== undefined) {
            result.needsConfirmation = needsConfirmation;
        }
        if (description !== undefined) {
            result.description = description;
        }
        return result;
    }
    ChangeAnnotation.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== undefined && Is.objectLiteral(candidate) && Is.string(candidate.label) &&
            (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === undefined) &&
            (Is.string(candidate.description) || candidate.description === undefined);
    }
    ChangeAnnotation.is = is;
})(ChangeAnnotation || (ChangeAnnotation = {}));
var ChangeAnnotationIdentifier;
(function (ChangeAnnotationIdentifier) {
    function is(value) {
        var candidate = value;
        return typeof candidate === 'string';
    }
    ChangeAnnotationIdentifier.is = is;
})(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
var AnnotatedTextEdit;
(function (AnnotatedTextEdit) {
    /**
     * Creates an annotated replace text edit.
     *
     * @param range The range of text to be replaced.
     * @param newText The new text.
     * @param annotation The annotation.
     */
    function replace(range, newText, annotation) {
        return { range: range, newText: newText, annotationId: annotation };
    }
    AnnotatedTextEdit.replace = replace;
    /**
     * Creates an annotated insert text edit.
     *
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     * @param annotation The annotation.
     */
    function insert(position, newText, annotation) {
        return { range: { start: position, end: position }, newText: newText, annotationId: annotation };
    }
    AnnotatedTextEdit.insert = insert;
    /**
     * Creates an annotated delete text edit.
     *
     * @param range The range of text to be deleted.
     * @param annotation The annotation.
     */
    function del(range, annotation) {
        return { range: range, newText: '', annotationId: annotation };
    }
    AnnotatedTextEdit.del = del;
    function is(value) {
        var candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit.is = is;
})(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
/**
 * The TextDocumentEdit namespace provides helper function to create
 * an edit that manipulates a text document.
 */
var TextDocumentEdit;
(function (TextDocumentEdit) {
    /**
     * Creates a new `TextDocumentEdit`
     */
    function create(textDocument, edits) {
        return { textDocument: textDocument, edits: edits };
    }
    TextDocumentEdit.create = create;
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument)
            && Array.isArray(candidate.edits);
    }
    TextDocumentEdit.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function (CreateFile) {
    function create(uri, options, annotation) {
        var result = {
            kind: 'create',
            uri: uri
        };
        if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
            result.options = options;
        }
        if (annotation !== undefined) {
            result.annotationId = annotation;
        }
        return result;
    }
    CreateFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'create' && Is.string(candidate.uri) && (candidate.options === undefined ||
            ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile.is = is;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function (RenameFile) {
    function create(oldUri, newUri, options, annotation) {
        var result = {
            kind: 'rename',
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
            result.options = options;
        }
        if (annotation !== undefined) {
            result.annotationId = annotation;
        }
        return result;
    }
    RenameFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === undefined ||
            ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile.is = is;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function (DeleteFile) {
    function create(uri, options, annotation) {
        var result = {
            kind: 'delete',
            uri: uri
        };
        if (options !== undefined && (options.recursive !== undefined || options.ignoreIfNotExists !== undefined)) {
            result.options = options;
        }
        if (annotation !== undefined) {
            result.annotationId = annotation;
        }
        return result;
    }
    DeleteFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) && (candidate.options === undefined ||
            ((candidate.options.recursive === undefined || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === undefined || Is.boolean(candidate.options.ignoreIfNotExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile.is = is;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function (WorkspaceEdit) {
    function is(value) {
        var candidate = value;
        return candidate &&
            (candidate.changes !== undefined || candidate.documentChanges !== undefined) &&
            (candidate.documentChanges === undefined || candidate.documentChanges.every(function (change) {
                if (Is.string(change.kind)) {
                    return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                }
                else {
                    return TextDocumentEdit.is(change);
                }
            }));
    }
    WorkspaceEdit.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextEditChangeImpl = /** @class */ (function () {
    function TextEditChangeImpl(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl.prototype.insert = function (position, newText, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
            edit = TextEdit.insert(position, newText);
        }
        else if (ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = AnnotatedTextEdit.insert(position, newText, annotation);
        }
        else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
            return id;
        }
    };
    TextEditChangeImpl.prototype.replace = function (range, newText, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
            edit = TextEdit.replace(range, newText);
        }
        else if (ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = AnnotatedTextEdit.replace(range, newText, annotation);
        }
        else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
            return id;
        }
    };
    TextEditChangeImpl.prototype.delete = function (range, annotation) {
        var edit;
        var id;
        if (annotation === undefined) {
            edit = TextEdit.del(range);
        }
        else if (ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = AnnotatedTextEdit.del(range, annotation);
        }
        else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== undefined) {
            return id;
        }
    };
    TextEditChangeImpl.prototype.add = function (edit) {
        this.edits.push(edit);
    };
    TextEditChangeImpl.prototype.all = function () {
        return this.edits;
    };
    TextEditChangeImpl.prototype.clear = function () {
        this.edits.splice(0, this.edits.length);
    };
    TextEditChangeImpl.prototype.assertChangeAnnotations = function (value) {
        if (value === undefined) {
            throw new Error("Text edit change is not configured to manage change annotations.");
        }
    };
    return TextEditChangeImpl;
}());
/**
 * A helper class
 */
var ChangeAnnotations = /** @class */ (function () {
    function ChangeAnnotations(annotations) {
        this._annotations = annotations === undefined ? Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
    }
    ChangeAnnotations.prototype.all = function () {
        return this._annotations;
    };
    Object.defineProperty(ChangeAnnotations.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    ChangeAnnotations.prototype.manage = function (idOrAnnotation, annotation) {
        var id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
            id = idOrAnnotation;
        }
        else {
            id = this.nextId();
            annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== undefined) {
            throw new Error("Id " + id + " is already in use.");
        }
        if (annotation === undefined) {
            throw new Error("No annotation provided for id " + id);
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
    };
    ChangeAnnotations.prototype.nextId = function () {
        this._counter++;
        return this._counter.toString();
    };
    return ChangeAnnotations;
}());
/**
 * A workspace change helps constructing changes to a workspace.
 */
var WorkspaceChange = /** @class */ (function () {
    function WorkspaceChange(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== undefined) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function (change) {
                    if (TextDocumentEdit.is(change)) {
                        var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            }
            else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function (key) {
                    var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                    _this._textEditChanges[key] = textEditChange;
                });
            }
        }
        else {
            this._workspaceEdit = {};
        }
    }
    Object.defineProperty(WorkspaceChange.prototype, "edit", {
        /**
         * Returns the underlying [WorkspaceEdit](#WorkspaceEdit) literal
         * use to be returned from a workspace edit operation like rename.
         */
        get: function () {
            this.initDocumentChanges();
            if (this._changeAnnotations !== undefined) {
                if (this._changeAnnotations.size === 0) {
                    this._workspaceEdit.changeAnnotations = undefined;
                }
                else {
                    this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
            }
            return this._workspaceEdit;
        },
        enumerable: false,
        configurable: true
    });
    WorkspaceChange.prototype.getTextEditChange = function (key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === undefined) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var textDocument = { uri: key.uri, version: key.version };
            var result = this._textEditChanges[textDocument.uri];
            if (!result) {
                var edits = [];
                var textDocumentEdit = {
                    textDocument: textDocument,
                    edits: edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
            }
            return result;
        }
        else {
            this.initChanges();
            if (this._workspaceEdit.changes === undefined) {
                throw new Error('Workspace edit is not configured for normal text edit changes.');
            }
            var result = this._textEditChanges[key];
            if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange.prototype.initDocumentChanges = function () {
        if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
            this._changeAnnotations = new ChangeAnnotations();
            this._workspaceEdit.documentChanges = [];
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
    };
    WorkspaceChange.prototype.initChanges = function () {
        if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
            this._workspaceEdit.changes = Object.create(null);
        }
    };
    WorkspaceChange.prototype.createFile = function (uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
            operation = CreateFile.create(uri, options);
        }
        else {
            id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
            return id;
        }
    };
    WorkspaceChange.prototype.renameFile = function (oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
            operation = RenameFile.create(oldUri, newUri, options);
        }
        else {
            id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
            return id;
        }
    };
    WorkspaceChange.prototype.deleteFile = function (uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === undefined) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
            annotation = optionsOrAnnotation;
        }
        else {
            options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === undefined) {
            operation = DeleteFile.create(uri, options);
        }
        else {
            id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== undefined) {
            return id;
        }
    };
    return WorkspaceChange;
}());

/**
 * The TextDocumentIdentifier namespace provides helper functions to work with
 * [TextDocumentIdentifier](#TextDocumentIdentifier) literals.
 */
var TextDocumentIdentifier;
(function (TextDocumentIdentifier) {
    /**
     * Creates a new TextDocumentIdentifier literal.
     * @param uri The document's uri.
     */
    function create(uri) {
        return { uri: uri };
    }
    TextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentIdentifier](#TextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
    }
    TextDocumentIdentifier.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
/**
 * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
 * [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) literals.
 */
var VersionedTextDocumentIdentifier;
(function (VersionedTextDocumentIdentifier) {
    /**
     * Creates a new VersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param uri The document's text.
     */
    function create(uri, version) {
        return { uri: uri, version: version };
    }
    VersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
/**
 * The OptionalVersionedTextDocumentIdentifier namespace provides helper functions to work with
 * [OptionalVersionedTextDocumentIdentifier](#OptionalVersionedTextDocumentIdentifier) literals.
 */
var OptionalVersionedTextDocumentIdentifier;
(function (OptionalVersionedTextDocumentIdentifier) {
    /**
     * Creates a new OptionalVersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param uri The document's text.
     */
    function create(uri, version) {
        return { uri: uri, version: version };
    }
    OptionalVersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [OptionalVersionedTextDocumentIdentifier](#OptionalVersionedTextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier.is = is;
})(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
/**
 * The TextDocumentItem namespace provides helper functions to work with
 * [TextDocumentItem](#TextDocumentItem) literals.
 */
var TextDocumentItem;
(function (TextDocumentItem) {
    /**
     * Creates a new TextDocumentItem literal.
     * @param uri The document's uri.
     * @param languageId The document's language identifier.
     * @param version The document's version number.
     * @param text The document's text.
     */
    function create(uri, languageId, version, text) {
        return { uri: uri, languageId: languageId, version: version, text: text };
    }
    TextDocumentItem.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentItem](#TextDocumentItem) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
    }
    TextDocumentItem.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. This kinds
 * are reserved for internal usage.
 */
var MarkupKind;
(function (MarkupKind) {
    /**
     * Plain text is supported as a content format
     */
    MarkupKind.PlainText = 'plaintext';
    /**
     * Markdown is supported as a content format
     */
    MarkupKind.Markdown = 'markdown';
})(MarkupKind || (MarkupKind = {}));
(function (MarkupKind) {
    /**
     * Checks whether the given value is a value of the [MarkupKind](#MarkupKind) type.
     */
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
    }
    MarkupKind.is = is;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function (MarkupContent) {
    /**
     * Checks whether the given value conforms to the [MarkupContent](#MarkupContent) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
    }
    MarkupContent.is = is;
})(MarkupContent || (MarkupContent = {}));
/**
 * The kind of a completion entry.
 */
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind.Text = 1;
    CompletionItemKind.Method = 2;
    CompletionItemKind.Function = 3;
    CompletionItemKind.Constructor = 4;
    CompletionItemKind.Field = 5;
    CompletionItemKind.Variable = 6;
    CompletionItemKind.Class = 7;
    CompletionItemKind.Interface = 8;
    CompletionItemKind.Module = 9;
    CompletionItemKind.Property = 10;
    CompletionItemKind.Unit = 11;
    CompletionItemKind.Value = 12;
    CompletionItemKind.Enum = 13;
    CompletionItemKind.Keyword = 14;
    CompletionItemKind.Snippet = 15;
    CompletionItemKind.Color = 16;
    CompletionItemKind.File = 17;
    CompletionItemKind.Reference = 18;
    CompletionItemKind.Folder = 19;
    CompletionItemKind.EnumMember = 20;
    CompletionItemKind.Constant = 21;
    CompletionItemKind.Struct = 22;
    CompletionItemKind.Event = 23;
    CompletionItemKind.Operator = 24;
    CompletionItemKind.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
/**
 * Defines whether the insert text in a completion item should be interpreted as
 * plain text or a snippet.
 */
var InsertTextFormat;
(function (InsertTextFormat) {
    /**
     * The primary text to be inserted is treated as a plain string.
     */
    InsertTextFormat.PlainText = 1;
    /**
     * The primary text to be inserted is treated as a snippet.
     *
     * A snippet can define tab stops and placeholders with `$1`, `$2`
     * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
     * the end of the snippet. Placeholders with equal identifiers are linked,
     * that is typing in one will update others too.
     *
     * See also: https://microsoft.github.io/language-server-protocol/specifications/specification-current/#snippet_syntax
     */
    InsertTextFormat.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
/**
 * Completion item tags are extra annotations that tweak the rendering of a completion
 * item.
 *
 * @since 3.15.0
 */
var CompletionItemTag;
(function (CompletionItemTag) {
    /**
     * Render a completion as obsolete, usually using a strike-out.
     */
    CompletionItemTag.Deprecated = 1;
})(CompletionItemTag || (CompletionItemTag = {}));
/**
 * The InsertReplaceEdit namespace provides functions to deal with insert / replace edits.
 *
 * @since 3.16.0
 */
var InsertReplaceEdit;
(function (InsertReplaceEdit) {
    /**
     * Creates a new insert / replace edit
     */
    function create(newText, insert, replace) {
        return { newText: newText, insert: insert, replace: replace };
    }
    InsertReplaceEdit.create = create;
    /**
     * Checks whether the given literal conforms to the [InsertReplaceEdit](#InsertReplaceEdit) interface.
     */
    function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
    }
    InsertReplaceEdit.is = is;
})(InsertReplaceEdit || (InsertReplaceEdit = {}));
/**
 * How whitespace and indentation is handled during completion
 * item insertion.
 *
 * @since 3.16.0
 */
var InsertTextMode;
(function (InsertTextMode) {
    /**
     * The insertion or replace strings is taken as it is. If the
     * value is multi line the lines below the cursor will be
     * inserted using the indentation defined in the string value.
     * The client will not apply any kind of adjustments to the
     * string.
     */
    InsertTextMode.asIs = 1;
    /**
     * The editor adjusts leading whitespace of new lines so that
     * they match the indentation up to the cursor of the line for
     * which the item is accepted.
     *
     * Consider a line like this: <2tabs><cursor><3tabs>foo. Accepting a
     * multi line completion item is indented using 2 tabs and all
     * following lines inserted will be indented using 2 tabs as well.
     */
    InsertTextMode.adjustIndentation = 2;
})(InsertTextMode || (InsertTextMode = {}));
/**
 * The CompletionItem namespace provides functions to deal with
 * completion items.
 */
var CompletionItem;
(function (CompletionItem) {
    /**
     * Create a completion item and seed it with a label.
     * @param label The completion item's label
     */
    function create(label) {
        return { label: label };
    }
    CompletionItem.create = create;
})(CompletionItem || (CompletionItem = {}));
/**
 * The CompletionList namespace provides functions to deal with
 * completion lists.
 */
var CompletionList;
(function (CompletionList) {
    /**
     * Creates a new completion list.
     *
     * @param items The completion items.
     * @param isIncomplete The list is not complete.
     */
    function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
    }
    CompletionList.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function (MarkedString) {
    /**
     * Creates a marked string from plain text.
     *
     * @param plainText The plain text.
     */
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
    }
    MarkedString.fromPlainText = fromPlainText;
    /**
     * Checks whether the given value conforms to the [MarkedString](#MarkedString) type.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
    }
    MarkedString.is = is;
})(MarkedString || (MarkedString = {}));
var Hover;
(function (Hover) {
    /**
     * Checks whether the given value conforms to the [Hover](#Hover) interface.
     */
    function is(value) {
        var candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
            MarkedString.is(candidate.contents) ||
            Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === undefined || Range.is(value.range));
    }
    Hover.is = is;
})(Hover || (Hover = {}));
/**
 * The ParameterInformation namespace provides helper functions to work with
 * [ParameterInformation](#ParameterInformation) literals.
 */
var ParameterInformation;
(function (ParameterInformation) {
    /**
     * Creates a new parameter information literal.
     *
     * @param label A label string.
     * @param documentation A doc string.
     */
    function create(label, documentation) {
        return documentation ? { label: label, documentation: documentation } : { label: label };
    }
    ParameterInformation.create = create;
})(ParameterInformation || (ParameterInformation = {}));
/**
 * The SignatureInformation namespace provides helper functions to work with
 * [SignatureInformation](#SignatureInformation) literals.
 */
var SignatureInformation;
(function (SignatureInformation) {
    function create(label, documentation) {
        var parameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
        }
        var result = { label: label };
        if (Is.defined(documentation)) {
            result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
            result.parameters = parameters;
        }
        else {
            result.parameters = [];
        }
        return result;
    }
    SignatureInformation.create = create;
})(SignatureInformation || (SignatureInformation = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind.Text = 1;
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind.Read = 2;
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * DocumentHighlight namespace to provide helper functions to work with
 * [DocumentHighlight](#DocumentHighlight) literals.
 */
var DocumentHighlight;
(function (DocumentHighlight) {
    /**
     * Create a DocumentHighlight object.
     * @param range The range the highlight applies to.
     */
    function create(range, kind) {
        var result = { range: range };
        if (Is.number(kind)) {
            result.kind = kind;
        }
        return result;
    }
    DocumentHighlight.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind.File = 1;
    SymbolKind.Module = 2;
    SymbolKind.Namespace = 3;
    SymbolKind.Package = 4;
    SymbolKind.Class = 5;
    SymbolKind.Method = 6;
    SymbolKind.Property = 7;
    SymbolKind.Field = 8;
    SymbolKind.Constructor = 9;
    SymbolKind.Enum = 10;
    SymbolKind.Interface = 11;
    SymbolKind.Function = 12;
    SymbolKind.Variable = 13;
    SymbolKind.Constant = 14;
    SymbolKind.String = 15;
    SymbolKind.Number = 16;
    SymbolKind.Boolean = 17;
    SymbolKind.Array = 18;
    SymbolKind.Object = 19;
    SymbolKind.Key = 20;
    SymbolKind.Null = 21;
    SymbolKind.EnumMember = 22;
    SymbolKind.Struct = 23;
    SymbolKind.Event = 24;
    SymbolKind.Operator = 25;
    SymbolKind.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
/**
 * Symbol tags are extra annotations that tweak the rendering of a symbol.
 * @since 3.16
 */
var SymbolTag;
(function (SymbolTag) {
    /**
     * Render a symbol as obsolete, usually using a strike-out.
     */
    SymbolTag.Deprecated = 1;
})(SymbolTag || (SymbolTag = {}));
var SymbolInformation;
(function (SymbolInformation) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the location of the symbol.
     * @param uri The resource of the location of symbol, defaults to the current document.
     * @param containerName The name of the symbol containing the symbol.
     */
    function create(name, kind, range, uri, containerName) {
        var result = {
            name: name,
            kind: kind,
            location: { uri: uri, range: range }
        };
        if (containerName) {
            result.containerName = containerName;
        }
        return result;
    }
    SymbolInformation.create = create;
})(SymbolInformation || (SymbolInformation = {}));
var DocumentSymbol;
(function (DocumentSymbol) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param detail The detail of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the symbol.
     * @param selectionRange The selectionRange of the symbol.
     * @param children Children of the symbol.
     */
    function create(name, detail, kind, range, selectionRange, children) {
        var result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== undefined) {
            result.children = children;
        }
        return result;
    }
    DocumentSymbol.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentSymbol](#DocumentSymbol) interface.
     */
    function is(value) {
        var candidate = value;
        return candidate &&
            Is.string(candidate.name) && Is.number(candidate.kind) &&
            Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
            (candidate.detail === undefined || Is.string(candidate.detail)) &&
            (candidate.deprecated === undefined || Is.boolean(candidate.deprecated)) &&
            (candidate.children === undefined || Array.isArray(candidate.children)) &&
            (candidate.tags === undefined || Array.isArray(candidate.tags));
    }
    DocumentSymbol.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
/**
 * A set of predefined code action kinds
 */
var CodeActionKind;
(function (CodeActionKind) {
    /**
     * Empty kind.
     */
    CodeActionKind.Empty = '';
    /**
     * Base kind for quickfix actions: 'quickfix'
     */
    CodeActionKind.QuickFix = 'quickfix';
    /**
     * Base kind for refactoring actions: 'refactor'
     */
    CodeActionKind.Refactor = 'refactor';
    /**
     * Base kind for refactoring extraction actions: 'refactor.extract'
     *
     * Example extract actions:
     *
     * - Extract method
     * - Extract function
     * - Extract variable
     * - Extract interface from class
     * - ...
     */
    CodeActionKind.RefactorExtract = 'refactor.extract';
    /**
     * Base kind for refactoring inline actions: 'refactor.inline'
     *
     * Example inline actions:
     *
     * - Inline function
     * - Inline variable
     * - Inline constant
     * - ...
     */
    CodeActionKind.RefactorInline = 'refactor.inline';
    /**
     * Base kind for refactoring rewrite actions: 'refactor.rewrite'
     *
     * Example rewrite actions:
     *
     * - Convert JavaScript function to class
     * - Add or remove parameter
     * - Encapsulate field
     * - Make method static
     * - Move method to base class
     * - ...
     */
    CodeActionKind.RefactorRewrite = 'refactor.rewrite';
    /**
     * Base kind for source actions: `source`
     *
     * Source code actions apply to the entire file.
     */
    CodeActionKind.Source = 'source';
    /**
     * Base kind for an organize imports source action: `source.organizeImports`
     */
    CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
    /**
     * Base kind for auto-fix source actions: `source.fixAll`.
     *
     * Fix all actions automatically fix errors that have a clear fix that do not require user input.
     * They should not suppress errors or perform unsafe fixes such as generating new types or classes.
     *
     * @since 3.15.0
     */
    CodeActionKind.SourceFixAll = 'source.fixAll';
})(CodeActionKind || (CodeActionKind = {}));
/**
 * The CodeActionContext namespace provides helper functions to work with
 * [CodeActionContext](#CodeActionContext) literals.
 */
var CodeActionContext;
(function (CodeActionContext) {
    /**
     * Creates a new CodeActionContext literal.
     */
    function create(diagnostics, only) {
        var result = { diagnostics: diagnostics };
        if (only !== undefined && only !== null) {
            result.only = only;
        }
        return result;
    }
    CodeActionContext.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeActionContext](#CodeActionContext) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === undefined || Is.typedArray(candidate.only, Is.string));
    }
    CodeActionContext.is = is;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function (CodeAction) {
    function create(title, kindOrCommandOrEdit, kind) {
        var result = { title: title };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === 'string') {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        }
        else if (Command.is(kindOrCommandOrEdit)) {
            result.command = kindOrCommandOrEdit;
        }
        else {
            result.edit = kindOrCommandOrEdit;
        }
        if (checkKind && kind !== undefined) {
            result.kind = kind;
        }
        return result;
    }
    CodeAction.create = create;
    function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.title) &&
            (candidate.diagnostics === undefined || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
            (candidate.kind === undefined || Is.string(candidate.kind)) &&
            (candidate.edit !== undefined || candidate.command !== undefined) &&
            (candidate.command === undefined || Command.is(candidate.command)) &&
            (candidate.isPreferred === undefined || Is.boolean(candidate.isPreferred)) &&
            (candidate.edit === undefined || WorkspaceEdit.is(candidate.edit));
    }
    CodeAction.is = is;
})(CodeAction || (CodeAction = {}));
/**
 * The CodeLens namespace provides helper functions to work with
 * [CodeLens](#CodeLens) literals.
 */
var CodeLens;
(function (CodeLens) {
    /**
     * Creates a new CodeLens literal.
     */
    function create(range, data) {
        var result = { range: range };
        if (Is.defined(data)) {
            result.data = data;
        }
        return result;
    }
    CodeLens.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeLens](#CodeLens) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
    }
    CodeLens.is = is;
})(CodeLens || (CodeLens = {}));
/**
 * The FormattingOptions namespace provides helper functions to work with
 * [FormattingOptions](#FormattingOptions) literals.
 */
var FormattingOptions;
(function (FormattingOptions) {
    /**
     * Creates a new FormattingOptions literal.
     */
    function create(tabSize, insertSpaces) {
        return { tabSize: tabSize, insertSpaces: insertSpaces };
    }
    FormattingOptions.create = create;
    /**
     * Checks whether the given literal conforms to the [FormattingOptions](#FormattingOptions) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions.is = is;
})(FormattingOptions || (FormattingOptions = {}));
/**
 * The DocumentLink namespace provides helper functions to work with
 * [DocumentLink](#DocumentLink) literals.
 */
var DocumentLink;
(function (DocumentLink) {
    /**
     * Creates a new DocumentLink literal.
     */
    function create(range, target, data) {
        return { range: range, target: target, data: data };
    }
    DocumentLink.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentLink](#DocumentLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
    }
    DocumentLink.is = is;
})(DocumentLink || (DocumentLink = {}));
/**
 * The SelectionRange namespace provides helper function to work with
 * SelectionRange literals.
 */
var SelectionRange;
(function (SelectionRange) {
    /**
     * Creates a new SelectionRange
     * @param range the range.
     * @param parent an optional parent.
     */
    function create(range, parent) {
        return { range: range, parent: parent };
    }
    SelectionRange.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== undefined && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
    }
    SelectionRange.is = is;
})(SelectionRange || (SelectionRange = {}));
var EOL = ['\n', '\r\n', '\r'];
/**
 * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
 */
var TextDocument;
(function (TextDocument) {
    /**
     * Creates a new ITextDocument literal from the given uri and content.
     * @param uri The document's uri.
     * @param languageId  The document's language Id.
     * @param content The document's content.
     */
    function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument.create = create;
    /**
     * Checks whether the given literal conforms to the [ITextDocument](#ITextDocument) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount)
            && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument.is = is;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function (a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        var lastModifiedOffset = text.length;
        for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
                text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            }
            else {
                throw new Error('Overlapping edit');
            }
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) {
            // sorted
            return data;
        }
        var p = (data.length / 2) | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
                // smaller_equal -> take left to preserve order
                data[i++] = left[leftIdx++];
            }
            else {
                // greater -> take right
                data[i++] = right[rightIdx++];
            }
        }
        while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
        }
        return data;
    }
})(TextDocument || (TextDocument = {}));
/**
 * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
 */
var FullTextDocument = /** @class */ (function () {
    function FullTextDocument(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = undefined;
    }
    Object.defineProperty(FullTextDocument.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    FullTextDocument.prototype.getText = function (range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument.prototype.update = function (event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = undefined;
    };
    FullTextDocument.prototype.getLineOffsets = function () {
        if (this._lineOffsets === undefined) {
            var lineOffsets = [];
            var text = this._content;
            var isLineStart = true;
            for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = (ch === '\r' || ch === '\n');
                if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
                    i++;
                }
            }
            if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
            }
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    };
    FullTextDocument.prototype.positionAt = function (offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
            return Position.create(0, offset);
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        var line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument.prototype.offsetAt = function (position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument.prototype, "lineCount", {
        get: function () {
            return this.getLineOffsets().length;
        },
        enumerable: false,
        configurable: true
    });
    return FullTextDocument;
}());
var Is;
(function (Is) {
    var toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== 'undefined';
    }
    Is.defined = defined;
    function undefined(value) {
        return typeof value === 'undefined';
    }
    Is.undefined = undefined;
    function boolean(value) {
        return value === true || value === false;
    }
    Is.boolean = boolean;
    function string(value) {
        return toString.call(value) === '[object String]';
    }
    Is.string = string;
    function number(value) {
        return toString.call(value) === '[object Number]';
    }
    Is.number = number;
    function numberRange(value, min, max) {
        return toString.call(value) === '[object Number]' && min <= value && value <= max;
    }
    Is.numberRange = numberRange;
    function integer(value) {
        return toString.call(value) === '[object Number]' && -2147483648 <= value && value <= 2147483647;
    }
    Is.integer = integer;
    function uinteger(value) {
        return toString.call(value) === '[object Number]' && 0 <= value && value <= 2147483647;
    }
    Is.uinteger = uinteger;
    function func(value) {
        return toString.call(value) === '[object Function]';
    }
    Is.func = func;
    function objectLiteral(value) {
        // Strictly speaking class instances pass this check as well. Since the LSP
        // doesn't use classes we ignore this for now. If we do we need to add something
        // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
        return value !== null && typeof value === 'object';
    }
    Is.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is.typedArray = typedArray;
})(Is || (Is = {}));


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScanner", function() { return createScanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTree", function() { return parseTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtLocation", function() { return findNodeAtLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtOffset", function() { return findNodeAtOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodePath", function() { return getNodePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeValue", function() { return getNodeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripComments", function() { return stripComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printParseErrorCode", function() { return printParseErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modify", function() { return modify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdits", function() { return applyEdits; });
/* harmony import */ var _impl_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _impl_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _impl_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _impl_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





/**
 * Creates a JSON scanner on the given text.
 * If ignoreTrivia is set, whitespaces or comments are ignored.
 */
var createScanner = _impl_scanner__WEBPACK_IMPORTED_MODULE_2__["createScanner"];
/**
 * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
 */
var getLocation = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["getLocation"];
/**
 * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 * Therefore, always check the errors list to find out if the input was valid.
 */
var parse = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["parse"];
/**
 * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 */
var parseTree = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["parseTree"];
/**
 * Finds the node at the given path in a JSON DOM.
 */
var findNodeAtLocation = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["findNodeAtLocation"];
/**
 * Finds the innermost node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
 */
var findNodeAtOffset = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["findNodeAtOffset"];
/**
 * Gets the JSON path of the given JSON DOM node
 */
var getNodePath = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["getNodePath"];
/**
 * Evaluates the JavaScript object of the given JSON DOM node
 */
var getNodeValue = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["getNodeValue"];
/**
 * Parses the given text and invokes the visitor functions for each object, array and literal reached.
 */
var visit = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["visit"];
/**
 * Takes JSON with JavaScript-style comments and remove
 * them. Optionally replaces every none-newline character
 * of comments with a replaceCharacter
 */
var stripComments = _impl_parser__WEBPACK_IMPORTED_MODULE_3__["stripComments"];
function printParseErrorCode(code) {
    switch (code) {
        case 1 /* InvalidSymbol */: return 'InvalidSymbol';
        case 2 /* InvalidNumberFormat */: return 'InvalidNumberFormat';
        case 3 /* PropertyNameExpected */: return 'PropertyNameExpected';
        case 4 /* ValueExpected */: return 'ValueExpected';
        case 5 /* ColonExpected */: return 'ColonExpected';
        case 6 /* CommaExpected */: return 'CommaExpected';
        case 7 /* CloseBraceExpected */: return 'CloseBraceExpected';
        case 8 /* CloseBracketExpected */: return 'CloseBracketExpected';
        case 9 /* EndOfFileExpected */: return 'EndOfFileExpected';
        case 10 /* InvalidCommentToken */: return 'InvalidCommentToken';
        case 11 /* UnexpectedEndOfComment */: return 'UnexpectedEndOfComment';
        case 12 /* UnexpectedEndOfString */: return 'UnexpectedEndOfString';
        case 13 /* UnexpectedEndOfNumber */: return 'UnexpectedEndOfNumber';
        case 14 /* InvalidUnicode */: return 'InvalidUnicode';
        case 15 /* InvalidEscapeCharacter */: return 'InvalidEscapeCharacter';
        case 16 /* InvalidCharacter */: return 'InvalidCharacter';
    }
    return '<unknown ParseErrorCode>';
}
/**
 * Computes the edits needed to format a JSON document.
 *
 * @param documentText The input text
 * @param range The range to format or `undefined` to format the full content
 * @param options The formatting options
 * @returns A list of edit operations describing the formatting changes to the original document. Edits can be either inserts, replacements or
 * removals of text segments. All offsets refer to the original state of the document. No two edits must change or remove the same range of
 * text in the original document. However, multiple edits can have
 * the same offset, for example multiple inserts, or an insert followed by a remove or replace. The order in the array defines which edit is applied first.
 * To apply edits to an input, you can use `applyEdits`.
 */
function format(documentText, range, options) {
    return _impl_format__WEBPACK_IMPORTED_MODULE_0__["format"](documentText, range, options);
}
/**
 * Computes the edits needed to modify a value in the JSON document.
 *
 * @param documentText The input text
 * @param path The path of the value to change. The path represents either to the document root, a property or an array item.
 * If the path points to an non-existing property or item, it will be created.
 * @param value The new value for the specified property or item. If the value is undefined,
 * the property or item will be removed.
 * @param options Options
 * @returns A list of edit operations describing the formatting changes to the original document. Edits can be either inserts, replacements or
 * removals of text segments. All offsets refer to the original state of the document. No two edits must change or remove the same range of
 * text in the original document. However, multiple edits can have
 * the same offset, for example multiple inserts, or an insert followed by a remove or replace. The order in the array defines which edit is applied first.
 * To apply edits to an input, you can use `applyEdits`.
 */
function modify(text, path, value, options) {
    return _impl_edit__WEBPACK_IMPORTED_MODULE_1__["setProperty"](text, path, value, options);
}
/**
 * Applies edits to a input string.
 */
function applyEdits(text, edits) {
    for (var i = edits.length - 1; i >= 0; i--) {
        text = _impl_edit__WEBPACK_IMPORTED_MODULE_1__["applyEdit"](text, edits[i]);
    }
    return text;
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEOL", function() { return isEOL; });
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function format(documentText, range, options) {
    var initialIndentLevel;
    var formatText;
    var formatTextStart;
    var rangeStart;
    var rangeEnd;
    if (range) {
        rangeStart = range.offset;
        rangeEnd = rangeStart + range.length;
        formatTextStart = rangeStart;
        while (formatTextStart > 0 && !isEOL(documentText, formatTextStart - 1)) {
            formatTextStart--;
        }
        var endOffset = rangeEnd;
        while (endOffset < documentText.length && !isEOL(documentText, endOffset)) {
            endOffset++;
        }
        formatText = documentText.substring(formatTextStart, endOffset);
        initialIndentLevel = computeIndentLevel(formatText, options);
    }
    else {
        formatText = documentText;
        initialIndentLevel = 0;
        formatTextStart = 0;
        rangeStart = 0;
        rangeEnd = documentText.length;
    }
    var eol = getEOL(options, documentText);
    var lineBreak = false;
    var indentLevel = 0;
    var indentValue;
    if (options.insertSpaces) {
        indentValue = repeat(' ', options.tabSize || 4);
    }
    else {
        indentValue = '\t';
    }
    var scanner = Object(_scanner__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(formatText, false);
    var hasError = false;
    function newLineAndIndent() {
        return eol + repeat(indentValue, initialIndentLevel + indentLevel);
    }
    function scanNext() {
        var token = scanner.scan();
        lineBreak = false;
        while (token === 15 /* Trivia */ || token === 14 /* LineBreakTrivia */) {
            lineBreak = lineBreak || (token === 14 /* LineBreakTrivia */);
            token = scanner.scan();
        }
        hasError = token === 16 /* Unknown */ || scanner.getTokenError() !== 0 /* None */;
        return token;
    }
    var editOperations = [];
    function addEdit(text, startOffset, endOffset) {
        if (!hasError && startOffset < rangeEnd && endOffset > rangeStart && documentText.substring(startOffset, endOffset) !== text) {
            editOperations.push({ offset: startOffset, length: endOffset - startOffset, content: text });
        }
    }
    var firstToken = scanNext();
    if (firstToken !== 17 /* EOF */) {
        var firstTokenStart = scanner.getTokenOffset() + formatTextStart;
        var initialIndent = repeat(indentValue, initialIndentLevel);
        addEdit(initialIndent, formatTextStart, firstTokenStart);
    }
    while (firstToken !== 17 /* EOF */) {
        var firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
        var secondToken = scanNext();
        var replaceContent = '';
        while (!lineBreak && (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */)) {
            // comments on the same line: keep them on the same line, but ignore them otherwise
            var commentTokenStart = scanner.getTokenOffset() + formatTextStart;
            addEdit(' ', firstTokenEnd, commentTokenStart);
            firstTokenEnd = scanner.getTokenOffset() + scanner.getTokenLength() + formatTextStart;
            replaceContent = secondToken === 12 /* LineCommentTrivia */ ? newLineAndIndent() : '';
            secondToken = scanNext();
        }
        if (secondToken === 2 /* CloseBraceToken */) {
            if (firstToken !== 1 /* OpenBraceToken */) {
                indentLevel--;
                replaceContent = newLineAndIndent();
            }
        }
        else if (secondToken === 4 /* CloseBracketToken */) {
            if (firstToken !== 3 /* OpenBracketToken */) {
                indentLevel--;
                replaceContent = newLineAndIndent();
            }
        }
        else {
            switch (firstToken) {
                case 3 /* OpenBracketToken */:
                case 1 /* OpenBraceToken */:
                    indentLevel++;
                    replaceContent = newLineAndIndent();
                    break;
                case 5 /* CommaToken */:
                case 12 /* LineCommentTrivia */:
                    replaceContent = newLineAndIndent();
                    break;
                case 13 /* BlockCommentTrivia */:
                    if (lineBreak) {
                        replaceContent = newLineAndIndent();
                    }
                    else {
                        // symbol following comment on the same line: keep on same line, separate with ' '
                        replaceContent = ' ';
                    }
                    break;
                case 6 /* ColonToken */:
                    replaceContent = ' ';
                    break;
                case 10 /* StringLiteral */:
                    if (secondToken === 6 /* ColonToken */) {
                        replaceContent = '';
                        break;
                    }
                // fall through
                case 7 /* NullKeyword */:
                case 8 /* TrueKeyword */:
                case 9 /* FalseKeyword */:
                case 11 /* NumericLiteral */:
                case 2 /* CloseBraceToken */:
                case 4 /* CloseBracketToken */:
                    if (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */) {
                        replaceContent = ' ';
                    }
                    else if (secondToken !== 5 /* CommaToken */ && secondToken !== 17 /* EOF */) {
                        hasError = true;
                    }
                    break;
                case 16 /* Unknown */:
                    hasError = true;
                    break;
            }
            if (lineBreak && (secondToken === 12 /* LineCommentTrivia */ || secondToken === 13 /* BlockCommentTrivia */)) {
                replaceContent = newLineAndIndent();
            }
        }
        var secondTokenStart = scanner.getTokenOffset() + formatTextStart;
        addEdit(replaceContent, firstTokenEnd, secondTokenStart);
        firstToken = secondToken;
    }
    return editOperations;
}
function repeat(s, count) {
    var result = '';
    for (var i = 0; i < count; i++) {
        result += s;
    }
    return result;
}
function computeIndentLevel(content, options) {
    var i = 0;
    var nChars = 0;
    var tabSize = options.tabSize || 4;
    while (i < content.length) {
        var ch = content.charAt(i);
        if (ch === ' ') {
            nChars++;
        }
        else if (ch === '\t') {
            nChars += tabSize;
        }
        else {
            break;
        }
        i++;
    }
    return Math.floor(nChars / tabSize);
}
function getEOL(options, text) {
    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        if (ch === '\r') {
            if (i + 1 < text.length && text.charAt(i + 1) === '\n') {
                return '\r\n';
            }
            return '\r';
        }
        else if (ch === '\n') {
            return '\n';
        }
    }
    return (options && options.eol) || '\n';
}
function isEOL(text, offset) {
    return '\r\n'.indexOf(text.charAt(offset)) !== -1;
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScanner", function() { return createScanner; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Creates a JSON scanner on the given text.
 * If ignoreTrivia is set, whitespaces or comments are ignored.
 */
function createScanner(text, ignoreTrivia) {
    if (ignoreTrivia === void 0) { ignoreTrivia = false; }
    var len = text.length;
    var pos = 0, value = '', tokenOffset = 0, token = 16 /* Unknown */, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0 /* None */;
    function scanHexDigits(count, exact) {
        var digits = 0;
        var value = 0;
        while (digits < count || !exact) {
            var ch = text.charCodeAt(pos);
            if (ch >= 48 /* _0 */ && ch <= 57 /* _9 */) {
                value = value * 16 + ch - 48 /* _0 */;
            }
            else if (ch >= 65 /* A */ && ch <= 70 /* F */) {
                value = value * 16 + ch - 65 /* A */ + 10;
            }
            else if (ch >= 97 /* a */ && ch <= 102 /* f */) {
                value = value * 16 + ch - 97 /* a */ + 10;
            }
            else {
                break;
            }
            pos++;
            digits++;
        }
        if (digits < count) {
            value = -1;
        }
        return value;
    }
    function setPosition(newPosition) {
        pos = newPosition;
        value = '';
        tokenOffset = 0;
        token = 16 /* Unknown */;
        scanError = 0 /* None */;
    }
    function scanNumber() {
        var start = pos;
        if (text.charCodeAt(pos) === 48 /* _0 */) {
            pos++;
        }
        else {
            pos++;
            while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
            }
        }
        if (pos < text.length && text.charCodeAt(pos) === 46 /* dot */) {
            pos++;
            if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
                while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                }
            }
            else {
                scanError = 3 /* UnexpectedEndOfNumber */;
                return text.substring(start, pos);
            }
        }
        var end = pos;
        if (pos < text.length && (text.charCodeAt(pos) === 69 /* E */ || text.charCodeAt(pos) === 101 /* e */)) {
            pos++;
            if (pos < text.length && text.charCodeAt(pos) === 43 /* plus */ || text.charCodeAt(pos) === 45 /* minus */) {
                pos++;
            }
            if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                pos++;
                while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                }
                end = pos;
            }
            else {
                scanError = 3 /* UnexpectedEndOfNumber */;
            }
        }
        return text.substring(start, end);
    }
    function scanString() {
        var result = '', start = pos;
        while (true) {
            if (pos >= len) {
                result += text.substring(start, pos);
                scanError = 2 /* UnexpectedEndOfString */;
                break;
            }
            var ch = text.charCodeAt(pos);
            if (ch === 34 /* doubleQuote */) {
                result += text.substring(start, pos);
                pos++;
                break;
            }
            if (ch === 92 /* backslash */) {
                result += text.substring(start, pos);
                pos++;
                if (pos >= len) {
                    scanError = 2 /* UnexpectedEndOfString */;
                    break;
                }
                var ch2 = text.charCodeAt(pos++);
                switch (ch2) {
                    case 34 /* doubleQuote */:
                        result += '\"';
                        break;
                    case 92 /* backslash */:
                        result += '\\';
                        break;
                    case 47 /* slash */:
                        result += '/';
                        break;
                    case 98 /* b */:
                        result += '\b';
                        break;
                    case 102 /* f */:
                        result += '\f';
                        break;
                    case 110 /* n */:
                        result += '\n';
                        break;
                    case 114 /* r */:
                        result += '\r';
                        break;
                    case 116 /* t */:
                        result += '\t';
                        break;
                    case 117 /* u */:
                        var ch3 = scanHexDigits(4, true);
                        if (ch3 >= 0) {
                            result += String.fromCharCode(ch3);
                        }
                        else {
                            scanError = 4 /* InvalidUnicode */;
                        }
                        break;
                    default:
                        scanError = 5 /* InvalidEscapeCharacter */;
                }
                start = pos;
                continue;
            }
            if (ch >= 0 && ch <= 0x1f) {
                if (isLineBreak(ch)) {
                    result += text.substring(start, pos);
                    scanError = 2 /* UnexpectedEndOfString */;
                    break;
                }
                else {
                    scanError = 6 /* InvalidCharacter */;
                    // mark as error but continue with string
                }
            }
            pos++;
        }
        return result;
    }
    function scanNext() {
        value = '';
        scanError = 0 /* None */;
        tokenOffset = pos;
        lineStartOffset = lineNumber;
        prevTokenLineStartOffset = tokenLineStartOffset;
        if (pos >= len) {
            // at the end
            tokenOffset = len;
            return token = 17 /* EOF */;
        }
        var code = text.charCodeAt(pos);
        // trivia: whitespace
        if (isWhiteSpace(code)) {
            do {
                pos++;
                value += String.fromCharCode(code);
                code = text.charCodeAt(pos);
            } while (isWhiteSpace(code));
            return token = 15 /* Trivia */;
        }
        // trivia: newlines
        if (isLineBreak(code)) {
            pos++;
            value += String.fromCharCode(code);
            if (code === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                pos++;
                value += '\n';
            }
            lineNumber++;
            tokenLineStartOffset = pos;
            return token = 14 /* LineBreakTrivia */;
        }
        switch (code) {
            // tokens: []{}:,
            case 123 /* openBrace */:
                pos++;
                return token = 1 /* OpenBraceToken */;
            case 125 /* closeBrace */:
                pos++;
                return token = 2 /* CloseBraceToken */;
            case 91 /* openBracket */:
                pos++;
                return token = 3 /* OpenBracketToken */;
            case 93 /* closeBracket */:
                pos++;
                return token = 4 /* CloseBracketToken */;
            case 58 /* colon */:
                pos++;
                return token = 6 /* ColonToken */;
            case 44 /* comma */:
                pos++;
                return token = 5 /* CommaToken */;
            // strings
            case 34 /* doubleQuote */:
                pos++;
                value = scanString();
                return token = 10 /* StringLiteral */;
            // comments
            case 47 /* slash */:
                var start = pos - 1;
                // Single-line comment
                if (text.charCodeAt(pos + 1) === 47 /* slash */) {
                    pos += 2;
                    while (pos < len) {
                        if (isLineBreak(text.charCodeAt(pos))) {
                            break;
                        }
                        pos++;
                    }
                    value = text.substring(start, pos);
                    return token = 12 /* LineCommentTrivia */;
                }
                // Multi-line comment
                if (text.charCodeAt(pos + 1) === 42 /* asterisk */) {
                    pos += 2;
                    var safeLength = len - 1; // For lookahead.
                    var commentClosed = false;
                    while (pos < safeLength) {
                        var ch = text.charCodeAt(pos);
                        if (ch === 42 /* asterisk */ && text.charCodeAt(pos + 1) === 47 /* slash */) {
                            pos += 2;
                            commentClosed = true;
                            break;
                        }
                        pos++;
                        if (isLineBreak(ch)) {
                            if (ch === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                                pos++;
                            }
                            lineNumber++;
                            tokenLineStartOffset = pos;
                        }
                    }
                    if (!commentClosed) {
                        pos++;
                        scanError = 1 /* UnexpectedEndOfComment */;
                    }
                    value = text.substring(start, pos);
                    return token = 13 /* BlockCommentTrivia */;
                }
                // just a single slash
                value += String.fromCharCode(code);
                pos++;
                return token = 16 /* Unknown */;
            // numbers
            case 45 /* minus */:
                value += String.fromCharCode(code);
                pos++;
                if (pos === len || !isDigit(text.charCodeAt(pos))) {
                    return token = 16 /* Unknown */;
                }
            // found a minus, followed by a number so
            // we fall through to proceed with scanning
            // numbers
            case 48 /* _0 */:
            case 49 /* _1 */:
            case 50 /* _2 */:
            case 51 /* _3 */:
            case 52 /* _4 */:
            case 53 /* _5 */:
            case 54 /* _6 */:
            case 55 /* _7 */:
            case 56 /* _8 */:
            case 57 /* _9 */:
                value += scanNumber();
                return token = 11 /* NumericLiteral */;
            // literals and unknown symbols
            default:
                // is a literal? Read the full word.
                while (pos < len && isUnknownContentCharacter(code)) {
                    pos++;
                    code = text.charCodeAt(pos);
                }
                if (tokenOffset !== pos) {
                    value = text.substring(tokenOffset, pos);
                    // keywords: true, false, null
                    switch (value) {
                        case 'true': return token = 8 /* TrueKeyword */;
                        case 'false': return token = 9 /* FalseKeyword */;
                        case 'null': return token = 7 /* NullKeyword */;
                    }
                    return token = 16 /* Unknown */;
                }
                // some
                value += String.fromCharCode(code);
                pos++;
                return token = 16 /* Unknown */;
        }
    }
    function isUnknownContentCharacter(code) {
        if (isWhiteSpace(code) || isLineBreak(code)) {
            return false;
        }
        switch (code) {
            case 125 /* closeBrace */:
            case 93 /* closeBracket */:
            case 123 /* openBrace */:
            case 91 /* openBracket */:
            case 34 /* doubleQuote */:
            case 58 /* colon */:
            case 44 /* comma */:
            case 47 /* slash */:
                return false;
        }
        return true;
    }
    function scanNextNonTrivia() {
        var result;
        do {
            result = scanNext();
        } while (result >= 12 /* LineCommentTrivia */ && result <= 15 /* Trivia */);
        return result;
    }
    return {
        setPosition: setPosition,
        getPosition: function () { return pos; },
        scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
        getToken: function () { return token; },
        getTokenValue: function () { return value; },
        getTokenOffset: function () { return tokenOffset; },
        getTokenLength: function () { return pos - tokenOffset; },
        getTokenStartLine: function () { return lineStartOffset; },
        getTokenStartCharacter: function () { return tokenOffset - prevTokenLineStartOffset; },
        getTokenError: function () { return scanError; },
    };
}
function isWhiteSpace(ch) {
    return ch === 32 /* space */ || ch === 9 /* tab */ || ch === 11 /* verticalTab */ || ch === 12 /* formFeed */ ||
        ch === 160 /* nonBreakingSpace */ || ch === 5760 /* ogham */ || ch >= 8192 /* enQuad */ && ch <= 8203 /* zeroWidthSpace */ ||
        ch === 8239 /* narrowNoBreakSpace */ || ch === 8287 /* mathematicalSpace */ || ch === 12288 /* ideographicSpace */ || ch === 65279 /* byteOrderMark */;
}
function isLineBreak(ch) {
    return ch === 10 /* lineFeed */ || ch === 13 /* carriageReturn */ || ch === 8232 /* lineSeparator */ || ch === 8233 /* paragraphSeparator */;
}
function isDigit(ch) {
    return ch >= 48 /* _0 */ && ch <= 57 /* _9 */;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProperty", function() { return removeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyEdit", function() { return applyEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWS", function() { return isWS; });
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function removeProperty(text, path, options) {
    return setProperty(text, path, void 0, options);
}
function setProperty(text, originalPath, value, options) {
    var _a;
    var path = originalPath.slice();
    var errors = [];
    var root = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["parseTree"])(text, errors);
    var parent = void 0;
    var lastSegment = void 0;
    while (path.length > 0) {
        lastSegment = path.pop();
        parent = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["findNodeAtLocation"])(root, path);
        if (parent === void 0 && value !== void 0) {
            if (typeof lastSegment === 'string') {
                value = (_a = {}, _a[lastSegment] = value, _a);
            }
            else {
                value = [value];
            }
        }
        else {
            break;
        }
    }
    if (!parent) {
        // empty document
        if (value === void 0) { // delete
            throw new Error('Can not delete in empty document');
        }
        return withFormatting(text, { offset: root ? root.offset : 0, length: root ? root.length : 0, content: JSON.stringify(value) }, options);
    }
    else if (parent.type === 'object' && typeof lastSegment === 'string' && Array.isArray(parent.children)) {
        var existing = Object(_parser__WEBPACK_IMPORTED_MODULE_1__["findNodeAtLocation"])(parent, [lastSegment]);
        if (existing !== void 0) {
            if (value === void 0) { // delete
                if (!existing.parent) {
                    throw new Error('Malformed AST');
                }
                var propertyIndex = parent.children.indexOf(existing.parent);
                var removeBegin = void 0;
                var removeEnd = existing.parent.offset + existing.parent.length;
                if (propertyIndex > 0) {
                    // remove the comma of the previous node
                    var previous = parent.children[propertyIndex - 1];
                    removeBegin = previous.offset + previous.length;
                }
                else {
                    removeBegin = parent.offset + 1;
                    if (parent.children.length > 1) {
                        // remove the comma of the next node
                        var next = parent.children[1];
                        removeEnd = next.offset;
                    }
                }
                return withFormatting(text, { offset: removeBegin, length: removeEnd - removeBegin, content: '' }, options);
            }
            else {
                // set value of existing property
                return withFormatting(text, { offset: existing.offset, length: existing.length, content: JSON.stringify(value) }, options);
            }
        }
        else {
            if (value === void 0) { // delete
                return []; // property does not exist, nothing to do
            }
            var newProperty = JSON.stringify(lastSegment) + ": " + JSON.stringify(value);
            var index = options.getInsertionIndex ? options.getInsertionIndex(parent.children.map(function (p) { return p.children[0].value; })) : parent.children.length;
            var edit = void 0;
            if (index > 0) {
                var previous = parent.children[index - 1];
                edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
            }
            else if (parent.children.length === 0) {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty };
            }
            else {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty + ',' };
            }
            return withFormatting(text, edit, options);
        }
    }
    else if (parent.type === 'array' && typeof lastSegment === 'number' && Array.isArray(parent.children)) {
        var insertIndex = lastSegment;
        if (insertIndex === -1) {
            // Insert
            var newProperty = "" + JSON.stringify(value);
            var edit = void 0;
            if (parent.children.length === 0) {
                edit = { offset: parent.offset + 1, length: 0, content: newProperty };
            }
            else {
                var previous = parent.children[parent.children.length - 1];
                edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
            }
            return withFormatting(text, edit, options);
        }
        else if (value === void 0 && parent.children.length >= 0) {
            // Removal
            var removalIndex = lastSegment;
            var toRemove = parent.children[removalIndex];
            var edit = void 0;
            if (parent.children.length === 1) {
                // only item
                edit = { offset: parent.offset + 1, length: parent.length - 2, content: '' };
            }
            else if (parent.children.length - 1 === removalIndex) {
                // last item
                var previous = parent.children[removalIndex - 1];
                var offset = previous.offset + previous.length;
                var parentEndOffset = parent.offset + parent.length;
                edit = { offset: offset, length: parentEndOffset - 2 - offset, content: '' };
            }
            else {
                edit = { offset: toRemove.offset, length: parent.children[removalIndex + 1].offset - toRemove.offset, content: '' };
            }
            return withFormatting(text, edit, options);
        }
        else if (value !== void 0) {
            var edit = void 0;
            var newProperty = "" + JSON.stringify(value);
            if (!options.isArrayInsertion && parent.children.length > lastSegment) {
                var toModify = parent.children[lastSegment];
                edit = { offset: toModify.offset, length: toModify.length, content: newProperty };
            }
            else if (parent.children.length === 0 || lastSegment === 0) {
                edit = { offset: parent.offset + 1, length: 0, content: parent.children.length === 0 ? newProperty : newProperty + ',' };
            }
            else {
                var index = lastSegment > parent.children.length ? parent.children.length : lastSegment;
                var previous = parent.children[index - 1];
                edit = { offset: previous.offset + previous.length, length: 0, content: ',' + newProperty };
            }
            return withFormatting(text, edit, options);
        }
        else {
            throw new Error("Can not " + (value === void 0 ? 'remove' : (options.isArrayInsertion ? 'insert' : 'modify')) + " Array index " + insertIndex + " as length is not sufficient");
        }
    }
    else {
        throw new Error("Can not add " + (typeof lastSegment !== 'number' ? 'index' : 'property') + " to parent of type " + parent.type);
    }
}
function withFormatting(text, edit, options) {
    if (!options.formattingOptions) {
        return [edit];
    }
    // apply the edit
    var newText = applyEdit(text, edit);
    // format the new text
    var begin = edit.offset;
    var end = edit.offset + edit.content.length;
    if (edit.length === 0 || edit.content.length === 0) { // insert or remove
        while (begin > 0 && !Object(_format__WEBPACK_IMPORTED_MODULE_0__["isEOL"])(newText, begin - 1)) {
            begin--;
        }
        while (end < newText.length && !Object(_format__WEBPACK_IMPORTED_MODULE_0__["isEOL"])(newText, end)) {
            end++;
        }
    }
    var edits = Object(_format__WEBPACK_IMPORTED_MODULE_0__["format"])(newText, { offset: begin, length: end - begin }, options.formattingOptions);
    // apply the formatting edits and track the begin and end offsets of the changes
    for (var i = edits.length - 1; i >= 0; i--) {
        var edit_1 = edits[i];
        newText = applyEdit(newText, edit_1);
        begin = Math.min(begin, edit_1.offset);
        end = Math.max(end, edit_1.offset + edit_1.length);
        end += edit_1.content.length - edit_1.length;
    }
    // create a single edit with all changes
    var editLength = text.length - (newText.length - end) - begin;
    return [{ offset: begin, length: editLength, content: newText.substring(begin, end) }];
}
function applyEdit(text, edit) {
    return text.substring(0, edit.offset) + edit.content + text.substring(edit.offset + edit.length);
}
function isWS(text, offset) {
    return '\r\n \t'.indexOf(text.charAt(offset)) !== -1;
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTree", function() { return parseTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtLocation", function() { return findNodeAtLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodePath", function() { return getNodePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeValue", function() { return getNodeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNodeAtOffset", function() { return findNodeAtOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return visit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripComments", function() { return stripComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeType", function() { return getNodeType; });
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var ParseOptions;
(function (ParseOptions) {
    ParseOptions.DEFAULT = {
        allowTrailingComma: false
    };
})(ParseOptions || (ParseOptions = {}));
/**
 * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
 */
function getLocation(text, position) {
    var segments = []; // strings or numbers
    var earlyReturnException = new Object();
    var previousNode = undefined;
    var previousNodeInst = {
        value: {},
        offset: 0,
        length: 0,
        type: 'object',
        parent: undefined
    };
    var isAtPropertyKey = false;
    function setPreviousNode(value, offset, length, type) {
        previousNodeInst.value = value;
        previousNodeInst.offset = offset;
        previousNodeInst.length = length;
        previousNodeInst.type = type;
        previousNodeInst.colonOffset = undefined;
        previousNode = previousNodeInst;
    }
    try {
        visit(text, {
            onObjectBegin: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = undefined;
                isAtPropertyKey = position > offset;
                segments.push(''); // push a placeholder (will be replaced)
            },
            onObjectProperty: function (name, offset, length) {
                if (position < offset) {
                    throw earlyReturnException;
                }
                setPreviousNode(name, offset, length, 'property');
                segments[segments.length - 1] = name;
                if (position <= offset + length) {
                    throw earlyReturnException;
                }
            },
            onObjectEnd: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = undefined;
                segments.pop();
            },
            onArrayBegin: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = undefined;
                segments.push(0);
            },
            onArrayEnd: function (offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                previousNode = undefined;
                segments.pop();
            },
            onLiteralValue: function (value, offset, length) {
                if (position < offset) {
                    throw earlyReturnException;
                }
                setPreviousNode(value, offset, length, getNodeType(value));
                if (position <= offset + length) {
                    throw earlyReturnException;
                }
            },
            onSeparator: function (sep, offset, length) {
                if (position <= offset) {
                    throw earlyReturnException;
                }
                if (sep === ':' && previousNode && previousNode.type === 'property') {
                    previousNode.colonOffset = offset;
                    isAtPropertyKey = false;
                    previousNode = undefined;
                }
                else if (sep === ',') {
                    var last = segments[segments.length - 1];
                    if (typeof last === 'number') {
                        segments[segments.length - 1] = last + 1;
                    }
                    else {
                        isAtPropertyKey = true;
                        segments[segments.length - 1] = '';
                    }
                    previousNode = undefined;
                }
            }
        });
    }
    catch (e) {
        if (e !== earlyReturnException) {
            throw e;
        }
    }
    return {
        path: segments,
        previousNode: previousNode,
        isAtPropertyKey: isAtPropertyKey,
        matches: function (pattern) {
            var k = 0;
            for (var i = 0; k < pattern.length && i < segments.length; i++) {
                if (pattern[k] === segments[i] || pattern[k] === '*') {
                    k++;
                }
                else if (pattern[k] !== '**') {
                    return false;
                }
            }
            return k === pattern.length;
        }
    };
}
/**
 * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 * Therefore always check the errors list to find out if the input was valid.
 */
function parse(text, errors, options) {
    if (errors === void 0) { errors = []; }
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var currentProperty = null;
    var currentParent = [];
    var previousParents = [];
    function onValue(value) {
        if (Array.isArray(currentParent)) {
            currentParent.push(value);
        }
        else if (currentProperty !== null) {
            currentParent[currentProperty] = value;
        }
    }
    var visitor = {
        onObjectBegin: function () {
            var object = {};
            onValue(object);
            previousParents.push(currentParent);
            currentParent = object;
            currentProperty = null;
        },
        onObjectProperty: function (name) {
            currentProperty = name;
        },
        onObjectEnd: function () {
            currentParent = previousParents.pop();
        },
        onArrayBegin: function () {
            var array = [];
            onValue(array);
            previousParents.push(currentParent);
            currentParent = array;
            currentProperty = null;
        },
        onArrayEnd: function () {
            currentParent = previousParents.pop();
        },
        onLiteralValue: onValue,
        onError: function (error, offset, length) {
            errors.push({ error: error, offset: offset, length: length });
        }
    };
    visit(text, visitor, options);
    return currentParent[0];
}
/**
 * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
 */
function parseTree(text, errors, options) {
    if (errors === void 0) { errors = []; }
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var currentParent = { type: 'array', offset: -1, length: -1, children: [], parent: undefined }; // artificial root
    function ensurePropertyComplete(endOffset) {
        if (currentParent.type === 'property') {
            currentParent.length = endOffset - currentParent.offset;
            currentParent = currentParent.parent;
        }
    }
    function onValue(valueNode) {
        currentParent.children.push(valueNode);
        return valueNode;
    }
    var visitor = {
        onObjectBegin: function (offset) {
            currentParent = onValue({ type: 'object', offset: offset, length: -1, parent: currentParent, children: [] });
        },
        onObjectProperty: function (name, offset, length) {
            currentParent = onValue({ type: 'property', offset: offset, length: -1, parent: currentParent, children: [] });
            currentParent.children.push({ type: 'string', value: name, offset: offset, length: length, parent: currentParent });
        },
        onObjectEnd: function (offset, length) {
            ensurePropertyComplete(offset + length); // in case of a missing value for a property: make sure property is complete
            currentParent.length = offset + length - currentParent.offset;
            currentParent = currentParent.parent;
            ensurePropertyComplete(offset + length);
        },
        onArrayBegin: function (offset, length) {
            currentParent = onValue({ type: 'array', offset: offset, length: -1, parent: currentParent, children: [] });
        },
        onArrayEnd: function (offset, length) {
            currentParent.length = offset + length - currentParent.offset;
            currentParent = currentParent.parent;
            ensurePropertyComplete(offset + length);
        },
        onLiteralValue: function (value, offset, length) {
            onValue({ type: getNodeType(value), offset: offset, length: length, parent: currentParent, value: value });
            ensurePropertyComplete(offset + length);
        },
        onSeparator: function (sep, offset, length) {
            if (currentParent.type === 'property') {
                if (sep === ':') {
                    currentParent.colonOffset = offset;
                }
                else if (sep === ',') {
                    ensurePropertyComplete(offset);
                }
            }
        },
        onError: function (error, offset, length) {
            errors.push({ error: error, offset: offset, length: length });
        }
    };
    visit(text, visitor, options);
    var result = currentParent.children[0];
    if (result) {
        delete result.parent;
    }
    return result;
}
/**
 * Finds the node at the given path in a JSON DOM.
 */
function findNodeAtLocation(root, path) {
    if (!root) {
        return undefined;
    }
    var node = root;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var segment = path_1[_i];
        if (typeof segment === 'string') {
            if (node.type !== 'object' || !Array.isArray(node.children)) {
                return undefined;
            }
            var found = false;
            for (var _a = 0, _b = node.children; _a < _b.length; _a++) {
                var propertyNode = _b[_a];
                if (Array.isArray(propertyNode.children) && propertyNode.children[0].value === segment) {
                    node = propertyNode.children[1];
                    found = true;
                    break;
                }
            }
            if (!found) {
                return undefined;
            }
        }
        else {
            var index = segment;
            if (node.type !== 'array' || index < 0 || !Array.isArray(node.children) || index >= node.children.length) {
                return undefined;
            }
            node = node.children[index];
        }
    }
    return node;
}
/**
 * Gets the JSON path of the given JSON DOM node
 */
function getNodePath(node) {
    if (!node.parent || !node.parent.children) {
        return [];
    }
    var path = getNodePath(node.parent);
    if (node.parent.type === 'property') {
        var key = node.parent.children[0].value;
        path.push(key);
    }
    else if (node.parent.type === 'array') {
        var index = node.parent.children.indexOf(node);
        if (index !== -1) {
            path.push(index);
        }
    }
    return path;
}
/**
 * Evaluates the JavaScript object of the given JSON DOM node
 */
function getNodeValue(node) {
    switch (node.type) {
        case 'array':
            return node.children.map(getNodeValue);
        case 'object':
            var obj = Object.create(null);
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var prop = _a[_i];
                var valueNode = prop.children[1];
                if (valueNode) {
                    obj[prop.children[0].value] = getNodeValue(valueNode);
                }
            }
            return obj;
        case 'null':
        case 'string':
        case 'number':
        case 'boolean':
            return node.value;
        default:
            return undefined;
    }
}
function contains(node, offset, includeRightBound) {
    if (includeRightBound === void 0) { includeRightBound = false; }
    return (offset >= node.offset && offset < (node.offset + node.length)) || includeRightBound && (offset === (node.offset + node.length));
}
/**
 * Finds the most inner node at the given offset. If includeRightBound is set, also finds nodes that end at the given offset.
 */
function findNodeAtOffset(node, offset, includeRightBound) {
    if (includeRightBound === void 0) { includeRightBound = false; }
    if (contains(node, offset, includeRightBound)) {
        var children = node.children;
        if (Array.isArray(children)) {
            for (var i = 0; i < children.length && children[i].offset <= offset; i++) {
                var item = findNodeAtOffset(children[i], offset, includeRightBound);
                if (item) {
                    return item;
                }
            }
        }
        return node;
    }
    return undefined;
}
/**
 * Parses the given text and invokes the visitor functions for each object, array and literal reached.
 */
function visit(text, visitor, options) {
    if (options === void 0) { options = ParseOptions.DEFAULT; }
    var _scanner = Object(_scanner__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(text, false);
    function toNoArgVisit(visitFunction) {
        return visitFunction ? function () { return visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()); } : function () { return true; };
    }
    function toOneArgVisit(visitFunction) {
        return visitFunction ? function (arg) { return visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter()); } : function () { return true; };
    }
    var onObjectBegin = toNoArgVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisit(visitor.onObjectProperty), onObjectEnd = toNoArgVisit(visitor.onObjectEnd), onArrayBegin = toNoArgVisit(visitor.onArrayBegin), onArrayEnd = toNoArgVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisit(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
    var disallowComments = options && options.disallowComments;
    var allowTrailingComma = options && options.allowTrailingComma;
    function scanNext() {
        while (true) {
            var token = _scanner.scan();
            switch (_scanner.getTokenError()) {
                case 4 /* InvalidUnicode */:
                    handleError(14 /* InvalidUnicode */);
                    break;
                case 5 /* InvalidEscapeCharacter */:
                    handleError(15 /* InvalidEscapeCharacter */);
                    break;
                case 3 /* UnexpectedEndOfNumber */:
                    handleError(13 /* UnexpectedEndOfNumber */);
                    break;
                case 1 /* UnexpectedEndOfComment */:
                    if (!disallowComments) {
                        handleError(11 /* UnexpectedEndOfComment */);
                    }
                    break;
                case 2 /* UnexpectedEndOfString */:
                    handleError(12 /* UnexpectedEndOfString */);
                    break;
                case 6 /* InvalidCharacter */:
                    handleError(16 /* InvalidCharacter */);
                    break;
            }
            switch (token) {
                case 12 /* LineCommentTrivia */:
                case 13 /* BlockCommentTrivia */:
                    if (disallowComments) {
                        handleError(10 /* InvalidCommentToken */);
                    }
                    else {
                        onComment();
                    }
                    break;
                case 16 /* Unknown */:
                    handleError(1 /* InvalidSymbol */);
                    break;
                case 15 /* Trivia */:
                case 14 /* LineBreakTrivia */:
                    break;
                default:
                    return token;
            }
        }
    }
    function handleError(error, skipUntilAfter, skipUntil) {
        if (skipUntilAfter === void 0) { skipUntilAfter = []; }
        if (skipUntil === void 0) { skipUntil = []; }
        onError(error);
        if (skipUntilAfter.length + skipUntil.length > 0) {
            var token = _scanner.getToken();
            while (token !== 17 /* EOF */) {
                if (skipUntilAfter.indexOf(token) !== -1) {
                    scanNext();
                    break;
                }
                else if (skipUntil.indexOf(token) !== -1) {
                    break;
                }
                token = scanNext();
            }
        }
    }
    function parseString(isValue) {
        var value = _scanner.getTokenValue();
        if (isValue) {
            onLiteralValue(value);
        }
        else {
            onObjectProperty(value);
        }
        scanNext();
        return true;
    }
    function parseLiteral() {
        switch (_scanner.getToken()) {
            case 11 /* NumericLiteral */:
                var tokenValue = _scanner.getTokenValue();
                var value = Number(tokenValue);
                if (isNaN(value)) {
                    handleError(2 /* InvalidNumberFormat */);
                    value = 0;
                }
                onLiteralValue(value);
                break;
            case 7 /* NullKeyword */:
                onLiteralValue(null);
                break;
            case 8 /* TrueKeyword */:
                onLiteralValue(true);
                break;
            case 9 /* FalseKeyword */:
                onLiteralValue(false);
                break;
            default:
                return false;
        }
        scanNext();
        return true;
    }
    function parseProperty() {
        if (_scanner.getToken() !== 10 /* StringLiteral */) {
            handleError(3 /* PropertyNameExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            return false;
        }
        parseString(false);
        if (_scanner.getToken() === 6 /* ColonToken */) {
            onSeparator(':');
            scanNext(); // consume colon
            if (!parseValue()) {
                handleError(4 /* ValueExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            }
        }
        else {
            handleError(5 /* ColonExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
        }
        return true;
    }
    function parseObject() {
        onObjectBegin();
        scanNext(); // consume open brace
        var needsComma = false;
        while (_scanner.getToken() !== 2 /* CloseBraceToken */ && _scanner.getToken() !== 17 /* EOF */) {
            if (_scanner.getToken() === 5 /* CommaToken */) {
                if (!needsComma) {
                    handleError(4 /* ValueExpected */, [], []);
                }
                onSeparator(',');
                scanNext(); // consume comma
                if (_scanner.getToken() === 2 /* CloseBraceToken */ && allowTrailingComma) {
                    break;
                }
            }
            else if (needsComma) {
                handleError(6 /* CommaExpected */, [], []);
            }
            if (!parseProperty()) {
                handleError(4 /* ValueExpected */, [], [2 /* CloseBraceToken */, 5 /* CommaToken */]);
            }
            needsComma = true;
        }
        onObjectEnd();
        if (_scanner.getToken() !== 2 /* CloseBraceToken */) {
            handleError(7 /* CloseBraceExpected */, [2 /* CloseBraceToken */], []);
        }
        else {
            scanNext(); // consume close brace
        }
        return true;
    }
    function parseArray() {
        onArrayBegin();
        scanNext(); // consume open bracket
        var needsComma = false;
        while (_scanner.getToken() !== 4 /* CloseBracketToken */ && _scanner.getToken() !== 17 /* EOF */) {
            if (_scanner.getToken() === 5 /* CommaToken */) {
                if (!needsComma) {
                    handleError(4 /* ValueExpected */, [], []);
                }
                onSeparator(',');
                scanNext(); // consume comma
                if (_scanner.getToken() === 4 /* CloseBracketToken */ && allowTrailingComma) {
                    break;
                }
            }
            else if (needsComma) {
                handleError(6 /* CommaExpected */, [], []);
            }
            if (!parseValue()) {
                handleError(4 /* ValueExpected */, [], [4 /* CloseBracketToken */, 5 /* CommaToken */]);
            }
            needsComma = true;
        }
        onArrayEnd();
        if (_scanner.getToken() !== 4 /* CloseBracketToken */) {
            handleError(8 /* CloseBracketExpected */, [4 /* CloseBracketToken */], []);
        }
        else {
            scanNext(); // consume close bracket
        }
        return true;
    }
    function parseValue() {
        switch (_scanner.getToken()) {
            case 3 /* OpenBracketToken */:
                return parseArray();
            case 1 /* OpenBraceToken */:
                return parseObject();
            case 10 /* StringLiteral */:
                return parseString(true);
            default:
                return parseLiteral();
        }
    }
    scanNext();
    if (_scanner.getToken() === 17 /* EOF */) {
        if (options.allowEmptyContent) {
            return true;
        }
        handleError(4 /* ValueExpected */, [], []);
        return false;
    }
    if (!parseValue()) {
        handleError(4 /* ValueExpected */, [], []);
        return false;
    }
    if (_scanner.getToken() !== 17 /* EOF */) {
        handleError(9 /* EndOfFileExpected */, [], []);
    }
    return true;
}
/**
 * Takes JSON with JavaScript-style comments and remove
 * them. Optionally replaces every none-newline character
 * of comments with a replaceCharacter
 */
function stripComments(text, replaceCh) {
    var _scanner = Object(_scanner__WEBPACK_IMPORTED_MODULE_0__["createScanner"])(text), parts = [], kind, offset = 0, pos;
    do {
        pos = _scanner.getPosition();
        kind = _scanner.scan();
        switch (kind) {
            case 12 /* LineCommentTrivia */:
            case 13 /* BlockCommentTrivia */:
            case 17 /* EOF */:
                if (offset !== pos) {
                    parts.push(text.substring(offset, pos));
                }
                if (replaceCh !== undefined) {
                    parts.push(_scanner.getTokenValue().replace(/[^\r\n]/g, replaceCh));
                }
                offset = _scanner.getPosition();
                break;
        }
    } while (kind !== 17 /* EOF */);
    return parts.join('');
}
function getNodeType(value) {
    switch (typeof value) {
        case 'boolean': return 'boolean';
        case 'number': return 'number';
        case 'string': return 'string';
        case 'object': {
            if (!value) {
                return 'null';
            }
            else if (Array.isArray(value)) {
                return 'array';
            }
            return 'object';
        }
        default: return 'null';
    }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssData", function() { return cssData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlData", function() { return htmlData; });
const cssData = {
    "properties": ["additive-symbols", "align-content", "align-items", "justify-items", "justify-self", "justify-items", "align-self", "all", "alt", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-position-x", "background-position-y", "background-repeat", "background-size", "behavior", "block-size", "border", "border-block-end", "border-block-start", "border-block-end-color", "border-block-start-color", "border-block-end-style", "border-block-start-style", "border-block-end-width", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline-end", "border-inline-start", "border-inline-end-color", "border-inline-start-color", "border-inline-end-style", "border-inline-start-style", "border-inline-end-width", "border-inline-start-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "color-interpolation-filters", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "columns", "column-span", "column-width", "contain", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "enable-background", "fallback", "fill", "fill-opacity", "fill-rule", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flood-color", "flood-opacity", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "height", "hyphens", "image-orientation", "image-rendering", "ime-mode", "inline-size", "isolation", "justify-content", "kerning", "left", "letter-spacing", "lighting-color", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marker", "marker-end", "marker-mid", "marker-start", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "motion", "motion-offset", "motion-path", "motion-rotation", "-moz-animation", "-moz-animation-delay", "-moz-animation-direction", "-moz-animation-duration", "-moz-animation-iteration-count", "-moz-animation-name", "-moz-animation-play-state", "-moz-animation-timing-function", "-moz-appearance", "-moz-backface-visibility", "-moz-background-clip", "-moz-background-inline-policy", "-moz-background-origin", "-moz-border-bottom-colors", "-moz-border-image", "-moz-border-left-colors", "-moz-border-right-colors", "-moz-border-top-colors", "-moz-box-align", "-moz-box-direction", "-moz-box-flex", "-moz-box-flexgroup", "-moz-box-ordinal-group", "-moz-box-orient", "-moz-box-pack", "-moz-box-sizing", "-moz-column-count", "-moz-column-gap", "-moz-column-rule", "-moz-column-rule-color", "-moz-column-rule-style", "-moz-column-rule-width", "-moz-columns", "-moz-column-width", "-moz-font-feature-settings", "-moz-hyphens", "-moz-perspective", "-moz-perspective-origin", "-moz-text-align-last", "-moz-text-decoration-color", "-moz-text-decoration-line", "-moz-text-decoration-style", "-moz-text-size-adjust", "-moz-transform", "-moz-transform-origin", "-moz-transition", "-moz-transition-delay", "-moz-transition-duration", "-moz-transition-property", "-moz-transition-timing-function", "-moz-user-focus", "-moz-user-select", "-ms-accelerator", "-ms-behavior", "-ms-block-progression", "-ms-content-zoom-chaining", "-ms-content-zooming", "-ms-content-zoom-limit", "-ms-content-zoom-limit-max", "-ms-content-zoom-limit-min", "-ms-content-zoom-snap", "-ms-content-zoom-snap-points", "-ms-content-zoom-snap-type", "-ms-filter", "-ms-flex", "-ms-flex-align", "-ms-flex-direction", "-ms-flex-flow", "-ms-flex-item-align", "-ms-flex-line-pack", "-ms-flex-order", "-ms-flex-pack", "-ms-flex-wrap", "-ms-flow-from", "-ms-flow-into", "-ms-grid-column", "-ms-grid-column-align", "-ms-grid-columns", "-ms-grid-column-span", "-ms-grid-layer", "-ms-grid-row", "-ms-grid-row-align", "-ms-grid-rows", "-ms-grid-row-span", "-ms-high-contrast-adjust", "-ms-hyphenate-limit-chars", "-ms-hyphenate-limit-lines", "-ms-hyphenate-limit-zone", "-ms-hyphens", "-ms-ime-mode", "-ms-interpolation-mode", "-ms-layout-grid", "-ms-layout-grid-char", "-ms-layout-grid-line", "-ms-layout-grid-mode", "-ms-layout-grid-type", "-ms-line-break", "-ms-overflow-style", "-ms-perspective", "-ms-perspective-origin", "-ms-perspective-origin-x", "-ms-perspective-origin-y", "-ms-progress-appearance", "-ms-scrollbar-3dlight-color", "-ms-scrollbar-arrow-color", "-ms-scrollbar-base-color", "-ms-scrollbar-darkshadow-color", "-ms-scrollbar-face-color", "-ms-scrollbar-highlight-color", "-ms-scrollbar-shadow-color", "-ms-scrollbar-track-color", "-ms-scroll-chaining", "-ms-scroll-limit", "-ms-scroll-limit-x-max", "-ms-scroll-limit-x-min", "-ms-scroll-limit-y-max", "-ms-scroll-limit-y-min", "-ms-scroll-rails", "-ms-scroll-snap-points-x", "-ms-scroll-snap-points-y", "-ms-scroll-snap-type", "-ms-scroll-snap-x", "-ms-scroll-snap-y", "-ms-scroll-translation", "-ms-text-align-last", "-ms-text-autospace", "-ms-text-combine-horizontal", "-ms-text-justify", "-ms-text-kashida-space", "-ms-text-overflow", "-ms-text-size-adjust", "-ms-text-underline-position", "-ms-touch-action", "-ms-touch-select", "-ms-transform", "-ms-transform-origin", "-ms-transform-origin-x", "-ms-transform-origin-y", "-ms-transform-origin-z", "-ms-user-select", "-ms-word-break", "-ms-word-wrap", "-ms-wrap-flow", "-ms-wrap-margin", "-ms-wrap-through", "-ms-writing-mode", "-ms-zoom", "-ms-zoom-animation", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "negative", "-o-animation", "-o-animation-delay", "-o-animation-direction", "-o-animation-duration", "-o-animation-fill-mode", "-o-animation-iteration-count", "-o-animation-name", "-o-animation-play-state", "-o-animation-timing-function", "object-fit", "object-position", "-o-border-image", "-o-object-fit", "-o-object-position", "opacity", "order", "orphans", "-o-table-baseline", "-o-tab-size", "-o-text-overflow", "-o-transform", "-o-transform-origin", "-o-transition", "-o-transition-delay", "-o-transition-duration", "-o-transition-property", "-o-transition-timing-function", "offset-block-end", "offset-block-start", "offset-inline-end", "offset-inline-start", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "pad", "padding", "padding-bottom", "padding-block-end", "padding-block-start", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "paint-order", "perspective", "perspective-origin", "pointer-events", "position", "prefix", "quotes", "range", "resize", "right", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span", "scrollbar-3dlight-color", "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-darkshadow-color", "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color", "scrollbar-track-color", "scroll-behavior", "scroll-snap-coordinate", "scroll-snap-destination", "scroll-snap-points-x", "scroll-snap-points-y", "scroll-snap-type", "shape-image-threshold", "shape-margin", "shape-outside", "shape-rendering", "size", "src", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "suffix", "system", "symbols", "table-layout", "tab-size", "text-align", "text-align-last", "text-anchor", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "touch-action", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "unicode-range", "user-select", "vertical-align", "visibility", "-webkit-animation", "-webkit-animation-delay", "-webkit-animation-direction", "-webkit-animation-duration", "-webkit-animation-fill-mode", "-webkit-animation-iteration-count", "-webkit-animation-name", "-webkit-animation-play-state", "-webkit-animation-timing-function", "-webkit-appearance", "-webkit-backdrop-filter", "-webkit-backface-visibility", "-webkit-background-clip", "-webkit-background-composite", "-webkit-background-origin", "-webkit-border-image", "-webkit-box-align", "-webkit-box-direction", "-webkit-box-flex", "-webkit-box-flex-group", "-webkit-box-ordinal-group", "-webkit-box-orient", "-webkit-box-pack", "-webkit-box-reflect", "-webkit-box-sizing", "-webkit-break-after", "-webkit-break-before", "-webkit-break-inside", "-webkit-column-break-after", "-webkit-column-break-before", "-webkit-column-break-inside", "-webkit-column-count", "-webkit-column-gap", "-webkit-column-rule", "-webkit-column-rule-color", "-webkit-column-rule-style", "-webkit-column-rule-width", "-webkit-columns", "-webkit-column-span", "-webkit-column-width", "-webkit-filter", "-webkit-flow-from", "-webkit-flow-into", "-webkit-font-feature-settings", "-webkit-hyphens", "-webkit-line-break", "-webkit-margin-bottom-collapse", "-webkit-margin-collapse", "-webkit-margin-start", "-webkit-margin-top-collapse", "-webkit-mask-clip", "-webkit-mask-image", "-webkit-mask-origin", "-webkit-mask-repeat", "-webkit-mask-size", "-webkit-nbsp-mode", "-webkit-overflow-scrolling", "-webkit-padding-start", "-webkit-perspective", "-webkit-perspective-origin", "-webkit-region-fragment", "-webkit-tap-highlight-color", "-webkit-text-fill-color", "-webkit-text-size-adjust", "-webkit-text-stroke", "-webkit-text-stroke-color", "-webkit-text-stroke-width", "-webkit-touch-callout", "-webkit-transform", "-webkit-transform-origin", "-webkit-transform-origin-x", "-webkit-transform-origin-y", "-webkit-transform-origin-z", "-webkit-transform-style", "-webkit-transition", "-webkit-transition-delay", "-webkit-transition-duration", "-webkit-transition-property", "-webkit-transition-timing-function", "-webkit-user-drag", "-webkit-user-modify", "-webkit-user-select", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index", "zoom"]
};
const htmlData = {
    "tags": [
        "body", "head", "html",
        "address", "blockquote", "dd", "div", "section", "article", "aside", "header", "footer", "nav", "menu", "dl", "dt", "fieldset", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "iframe", "noframes", "object", "ol", "p", "ul", "applet", "center", "dir", "hr", "pre",
        "a", "abbr", "acronym", "area", "b", "base", "basefont", "bdo", "big", "br", "button", "caption", "cite", "code", "col", "colgroup", "del", "dfn", "em", "font", "i", "img", "input", "ins", "isindex", "kbd", "label", "legend", "li", "link", "map", "meta", "noscript", "optgroup", "option", "param", "q", "s", "samp", "script", "select", "small", "span", "strike", "strong", "style", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "title", "tr", "tt", "u", "var",
        "canvas", "main", "figure", "plaintext", "figcaption", "hgroup"
    ]
};
//# sourceMappingURL=data.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URI", function() { return URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uriToFsPath", function() { return uriToFsPath; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
var isWindows;
if (typeof process === 'object') {
    isWindows = process.platform === 'win32';
}
else if (typeof navigator === 'object') {
    var userAgent = navigator.userAgent;
    isWindows = userAgent.indexOf('Windows') >= 0;
}
function isHighSurrogate(charCode) {
    return (0xD800 <= charCode && charCode <= 0xDBFF);
}
function isLowSurrogate(charCode) {
    return (0xDC00 <= charCode && charCode <= 0xDFFF);
}
function isLowerAsciiHex(code) {
    return code >= 97 /* a */ && code <= 102 /* f */;
}
function isLowerAsciiLetter(code) {
    return code >= 97 /* a */ && code <= 122 /* z */;
}
function isUpperAsciiLetter(code) {
    return code >= 65 /* A */ && code <= 90 /* Z */;
}
function isAsciiLetter(code) {
    return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
}
//#endregion
var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;
function _validateUri(ret, _strict) {
    // scheme, must be set
    if (!ret.scheme && _strict) {
        throw new Error("[UriError]: Scheme is missing: {scheme: \"\", authority: \"" + ret.authority + "\", path: \"" + ret.path + "\", query: \"" + ret.query + "\", fragment: \"" + ret.fragment + "\"}");
    }
    // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
    // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
    if (ret.scheme && !_schemePattern.test(ret.scheme)) {
        throw new Error('[UriError]: Scheme contains illegal characters.');
    }
    // path, http://tools.ietf.org/html/rfc3986#section-3.3
    // If a URI contains an authority component, then the path component
    // must either be empty or begin with a slash ("/") character.  If a URI
    // does not contain an authority component, then the path cannot begin
    // with two slash characters ("//").
    if (ret.path) {
        if (ret.authority) {
            if (!_singleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
            }
        }
        else {
            if (_doubleSlashStart.test(ret.path)) {
                throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
            }
        }
    }
}
// for a while we allowed uris *without* schemes and this is the migration
// for them, e.g. an uri without scheme and without strict-mode warns and falls
// back to the file-scheme. that should cause the least carnage and still be a
// clear warning
function _schemeFix(scheme, _strict) {
    if (!scheme && !_strict) {
        return 'file';
    }
    return scheme;
}
// implements a bit of https://tools.ietf.org/html/rfc3986#section-5
function _referenceResolution(scheme, path) {
    // the slash-character is our 'default base' as we don't
    // support constructing URIs relative to other URIs. This
    // also means that we alter and potentially break paths.
    // see https://tools.ietf.org/html/rfc3986#section-5.1.4
    switch (scheme) {
        case 'https':
        case 'http':
        case 'file':
            if (!path) {
                path = _slash;
            }
            else if (path[0] !== _slash) {
                path = _slash + path;
            }
            break;
    }
    return path;
}
var _empty = '';
var _slash = '/';
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
/**
 * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
 * This class is a simple parser which creates the basic component parts
 * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
 * and encoding.
 *
 * ```txt
 *       foo://example.com:8042/over/there?name=ferret#nose
 *       \_/   \______________/\_________/ \_________/ \__/
 *        |           |            |            |        |
 *     scheme     authority       path        query   fragment
 *        |   _____________________|__
 *       / \ /                        \
 *       urn:example:animal:ferret:nose
 * ```
 */
var URI = /** @class */ (function () {
    /**
     * @internal
     */
    function URI(schemeOrData, authority, path, query, fragment, _strict) {
        if (_strict === void 0) { _strict = false; }
        if (typeof schemeOrData === 'object') {
            this.scheme = schemeOrData.scheme || _empty;
            this.authority = schemeOrData.authority || _empty;
            this.path = schemeOrData.path || _empty;
            this.query = schemeOrData.query || _empty;
            this.fragment = schemeOrData.fragment || _empty;
            // no validation because it's this URI
            // that creates uri components.
            // _validateUri(this);
        }
        else {
            this.scheme = _schemeFix(schemeOrData, _strict);
            this.authority = authority || _empty;
            this.path = _referenceResolution(this.scheme, path || _empty);
            this.query = query || _empty;
            this.fragment = fragment || _empty;
            _validateUri(this, _strict);
        }
    }
    URI.isUri = function (thing) {
        if (thing instanceof URI) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.authority === 'string'
            && typeof thing.fragment === 'string'
            && typeof thing.path === 'string'
            && typeof thing.query === 'string'
            && typeof thing.scheme === 'string'
            && typeof thing.fsPath === 'function'
            && typeof thing.with === 'function'
            && typeof thing.toString === 'function';
    };
    Object.defineProperty(URI.prototype, "fsPath", {
        // ---- filesystem path -----------------------
        /**
         * Returns a string representing the corresponding file system path of this URI.
         * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
         * platform specific path separator.
         *
         * * Will *not* validate the path for invalid characters and semantics.
         * * Will *not* look at the scheme of this URI.
         * * The result shall *not* be used for display purposes but for accessing a file on disk.
         *
         *
         * The *difference* to `URI#path` is the use of the platform specific separator and the handling
         * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
         *
         * ```ts
            const u = URI.parse('file://server/c$/folder/file.txt')
            u.authority === 'server'
            u.path === '/shares/c$/file.txt'
            u.fsPath === '\\server\c$\folder\file.txt'
        ```
         *
         * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
         * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
         * with URIs that represent files on disk (`file` scheme).
         */
        get: function () {
            // if (this.scheme !== 'file') {
            // 	console.warn(`[UriError] calling fsPath with scheme ${this.scheme}`);
            // }
            return uriToFsPath(this, false);
        },
        enumerable: true,
        configurable: true
    });
    // ---- modify to new -------------------------
    URI.prototype.with = function (change) {
        if (!change) {
            return this;
        }
        var scheme = change.scheme, authority = change.authority, path = change.path, query = change.query, fragment = change.fragment;
        if (scheme === undefined) {
            scheme = this.scheme;
        }
        else if (scheme === null) {
            scheme = _empty;
        }
        if (authority === undefined) {
            authority = this.authority;
        }
        else if (authority === null) {
            authority = _empty;
        }
        if (path === undefined) {
            path = this.path;
        }
        else if (path === null) {
            path = _empty;
        }
        if (query === undefined) {
            query = this.query;
        }
        else if (query === null) {
            query = _empty;
        }
        if (fragment === undefined) {
            fragment = this.fragment;
        }
        else if (fragment === null) {
            fragment = _empty;
        }
        if (scheme === this.scheme
            && authority === this.authority
            && path === this.path
            && query === this.query
            && fragment === this.fragment) {
            return this;
        }
        return new _URI(scheme, authority, path, query, fragment);
    };
    // ---- parse & validate ------------------------
    /**
     * Creates a new URI from a string, e.g. `http://www.msft.com/some/path`,
     * `file:///usr/home`, or `scheme:with/path`.
     *
     * @param value A string which represents an URI (see `URI#toString`).
     */
    URI.parse = function (value, _strict) {
        if (_strict === void 0) { _strict = false; }
        var match = _regexp.exec(value);
        if (!match) {
            return new _URI(_empty, _empty, _empty, _empty, _empty);
        }
        return new _URI(match[2] || _empty, percentDecode(match[4] || _empty), percentDecode(match[5] || _empty), percentDecode(match[7] || _empty), percentDecode(match[9] || _empty), _strict);
    };
    /**
     * Creates a new URI from a file system path, e.g. `c:\my\files`,
     * `/usr/home`, or `\\server\share\some\path`.
     *
     * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
     * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
     * `URI.parse('file://' + path)` because the path might contain characters that are
     * interpreted (# and ?). See the following sample:
     * ```ts
    const good = URI.file('/coding/c#/project1');
    good.scheme === 'file';
    good.path === '/coding/c#/project1';
    good.fragment === '';
    const bad = URI.parse('file://' + '/coding/c#/project1');
    bad.scheme === 'file';
    bad.path === '/coding/c'; // path is now broken
    bad.fragment === '/project1';
    ```
     *
     * @param path A file system path (see `URI#fsPath`)
     */
    URI.file = function (path) {
        var authority = _empty;
        // normalize to fwd-slashes on windows,
        // on other systems bwd-slashes are valid
        // filename character, eg /f\oo/ba\r.txt
        if (isWindows) {
            path = path.replace(/\\/g, _slash);
        }
        // check for authority as used in UNC shares
        // or use the path as given
        if (path[0] === _slash && path[1] === _slash) {
            var idx = path.indexOf(_slash, 2);
            if (idx === -1) {
                authority = path.substring(2);
                path = _slash;
            }
            else {
                authority = path.substring(2, idx);
                path = path.substring(idx) || _slash;
            }
        }
        return new _URI('file', authority, path, _empty, _empty);
    };
    URI.from = function (components) {
        return new _URI(components.scheme, components.authority, components.path, components.query, components.fragment);
    };
    // /**
    //  * Join a URI path with path fragments and normalizes the resulting path.
    //  *
    //  * @param uri The input URI.
    //  * @param pathFragment The path fragment to add to the URI path.
    //  * @returns The resulting URI.
    //  */
    // static joinPath(uri: URI, ...pathFragment: string[]): URI {
    // 	if (!uri.path) {
    // 		throw new Error(`[UriError]: cannot call joinPaths on URI without path`);
    // 	}
    // 	let newPath: string;
    // 	if (isWindows && uri.scheme === 'file') {
    // 		newPath = URI.file(paths.win32.join(uriToFsPath(uri, true), ...pathFragment)).path;
    // 	} else {
    // 		newPath = paths.posix.join(uri.path, ...pathFragment);
    // 	}
    // 	return uri.with({ path: newPath });
    // }
    // ---- printing/externalize ---------------------------
    /**
     * Creates a string representation for this URI. It's guaranteed that calling
     * `URI.parse` with the result of this function creates an URI which is equal
     * to this URI.
     *
     * * The result shall *not* be used for display purposes but for externalization or transport.
     * * The result will be encoded using the percentage encoding and encoding happens mostly
     * ignore the scheme-specific encoding rules.
     *
     * @param skipEncoding Do not encode the result, default is `false`
     */
    URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) { skipEncoding = false; }
        return _asFormatted(this, skipEncoding);
    };
    URI.prototype.toJSON = function () {
        return this;
    };
    URI.revive = function (data) {
        if (!data) {
            return data;
        }
        else if (data instanceof URI) {
            return data;
        }
        else {
            var result = new _URI(data);
            result._formatted = data.external;
            result._fsPath = data._sep === _pathSepMarker ? data.fsPath : null;
            return result;
        }
    };
    return URI;
}());

var _pathSepMarker = isWindows ? 1 : undefined;
// eslint-disable-next-line @typescript-eslint/class-name-casing
var _URI = /** @class */ (function (_super) {
    __extends(_URI, _super);
    function _URI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._formatted = null;
        _this._fsPath = null;
        return _this;
    }
    Object.defineProperty(_URI.prototype, "fsPath", {
        get: function () {
            if (!this._fsPath) {
                this._fsPath = uriToFsPath(this, false);
            }
            return this._fsPath;
        },
        enumerable: true,
        configurable: true
    });
    _URI.prototype.toString = function (skipEncoding) {
        if (skipEncoding === void 0) { skipEncoding = false; }
        if (!skipEncoding) {
            if (!this._formatted) {
                this._formatted = _asFormatted(this, false);
            }
            return this._formatted;
        }
        else {
            // we don't cache that
            return _asFormatted(this, true);
        }
    };
    _URI.prototype.toJSON = function () {
        var res = {
            $mid: 1
        };
        // cached state
        if (this._fsPath) {
            res.fsPath = this._fsPath;
            res._sep = _pathSepMarker;
        }
        if (this._formatted) {
            res.external = this._formatted;
        }
        // uri components
        if (this.path) {
            res.path = this.path;
        }
        if (this.scheme) {
            res.scheme = this.scheme;
        }
        if (this.authority) {
            res.authority = this.authority;
        }
        if (this.query) {
            res.query = this.query;
        }
        if (this.fragment) {
            res.fragment = this.fragment;
        }
        return res;
    };
    return _URI;
}(URI));
// reserved characters: https://tools.ietf.org/html/rfc3986#section-2.2
var encodeTable = (_a = {},
    _a[58 /* Colon */] = '%3A',
    _a[47 /* Slash */] = '%2F',
    _a[63 /* QuestionMark */] = '%3F',
    _a[35 /* Hash */] = '%23',
    _a[91 /* OpenSquareBracket */] = '%5B',
    _a[93 /* CloseSquareBracket */] = '%5D',
    _a[64 /* AtSign */] = '%40',
    _a[33 /* ExclamationMark */] = '%21',
    _a[36 /* DollarSign */] = '%24',
    _a[38 /* Ampersand */] = '%26',
    _a[39 /* SingleQuote */] = '%27',
    _a[40 /* OpenParen */] = '%28',
    _a[41 /* CloseParen */] = '%29',
    _a[42 /* Asterisk */] = '%2A',
    _a[43 /* Plus */] = '%2B',
    _a[44 /* Comma */] = '%2C',
    _a[59 /* Semicolon */] = '%3B',
    _a[61 /* Equals */] = '%3D',
    _a[32 /* Space */] = '%20',
    _a);
function encodeURIComponentFast(uriComponent, allowSlash) {
    var res = undefined;
    var nativeEncodePos = -1;
    for (var pos = 0; pos < uriComponent.length; pos++) {
        var code = uriComponent.charCodeAt(pos);
        // unreserved characters: https://tools.ietf.org/html/rfc3986#section-2.3
        if ((code >= 97 /* a */ && code <= 122 /* z */)
            || (code >= 65 /* A */ && code <= 90 /* Z */)
            || (code >= 48 /* Digit0 */ && code <= 57 /* Digit9 */)
            || code === 45 /* Dash */
            || code === 46 /* Period */
            || code === 95 /* Underline */
            || code === 126 /* Tilde */
            || (allowSlash && code === 47 /* Slash */)) {
            // check if we are delaying native encode
            if (nativeEncodePos !== -1) {
                res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                nativeEncodePos = -1;
            }
            // check if we write into a new string (by default we try to return the param)
            if (res !== undefined) {
                res += uriComponent.charAt(pos);
            }
        }
        else {
            // encoding needed, we need to allocate a new string
            if (res === undefined) {
                res = uriComponent.substr(0, pos);
            }
            // check with default table first
            var escaped = encodeTable[code];
            if (escaped !== undefined) {
                // check if we are delaying native encode
                if (nativeEncodePos !== -1) {
                    res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
                    nativeEncodePos = -1;
                }
                // append escaped variant to result
                res += escaped;
            }
            else if (nativeEncodePos === -1) {
                // use native encode only when needed
                nativeEncodePos = pos;
            }
        }
    }
    if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
    }
    return res !== undefined ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
    var res = undefined;
    for (var pos = 0; pos < path.length; pos++) {
        var code = path.charCodeAt(pos);
        if (code === 35 /* Hash */ || code === 63 /* QuestionMark */) {
            if (res === undefined) {
                res = path.substr(0, pos);
            }
            res += encodeTable[code];
        }
        else {
            if (res !== undefined) {
                res += path[pos];
            }
        }
    }
    return res !== undefined ? res : path;
}
/**
 * Compute `fsPath` for the given uri
 */
function uriToFsPath(uri, keepDriveLetterCasing) {
    var value;
    if (uri.authority && uri.path.length > 1 && uri.scheme === 'file') {
        // unc path: file://shares/c$/far/boo
        value = "//" + uri.authority + uri.path;
    }
    else if (uri.path.charCodeAt(0) === 47 /* Slash */
        && (uri.path.charCodeAt(1) >= 65 /* A */ && uri.path.charCodeAt(1) <= 90 /* Z */ || uri.path.charCodeAt(1) >= 97 /* a */ && uri.path.charCodeAt(1) <= 122 /* z */)
        && uri.path.charCodeAt(2) === 58 /* Colon */) {
        if (!keepDriveLetterCasing) {
            // windows drive letter: file:///c:/far/boo
            value = uri.path[1].toLowerCase() + uri.path.substr(2);
        }
        else {
            value = uri.path.substr(1);
        }
    }
    else {
        // other path
        value = uri.path;
    }
    if (isWindows) {
        value = value.replace(/\//g, '\\');
    }
    return value;
}
/**
 * Create the external version of a uri
 */
function _asFormatted(uri, skipEncoding) {
    var encoder = !skipEncoding
        ? encodeURIComponentFast
        : encodeURIComponentMinimal;
    var res = '';
    var scheme = uri.scheme, authority = uri.authority, path = uri.path, query = uri.query, fragment = uri.fragment;
    if (scheme) {
        res += scheme;
        res += ':';
    }
    if (authority || scheme === 'file') {
        res += _slash;
        res += _slash;
    }
    if (authority) {
        var idx = authority.indexOf('@');
        if (idx !== -1) {
            // <user>@<auth>
            var userinfo = authority.substr(0, idx);
            authority = authority.substr(idx + 1);
            idx = userinfo.indexOf(':');
            if (idx === -1) {
                res += encoder(userinfo, false);
            }
            else {
                // <user>:<pass>@<auth>
                res += encoder(userinfo.substr(0, idx), false);
                res += ':';
                res += encoder(userinfo.substr(idx + 1), false);
            }
            res += '@';
        }
        authority = authority.toLowerCase();
        idx = authority.indexOf(':');
        if (idx === -1) {
            res += encoder(authority, false);
        }
        else {
            // <auth>:<port>
            res += encoder(authority.substr(0, idx), false);
            res += authority.substr(idx);
        }
    }
    if (path) {
        // lower-case windows drive letters in /C:/fff or C:/fff
        if (path.length >= 3 && path.charCodeAt(0) === 47 /* Slash */ && path.charCodeAt(2) === 58 /* Colon */) {
            var code = path.charCodeAt(1);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = "/" + String.fromCharCode(code + 32) + ":" + path.substr(3); // "/c:".length === 3
            }
        }
        else if (path.length >= 2 && path.charCodeAt(1) === 58 /* Colon */) {
            var code = path.charCodeAt(0);
            if (code >= 65 /* A */ && code <= 90 /* Z */) {
                path = String.fromCharCode(code + 32) + ":" + path.substr(2); // "/c:".length === 3
            }
        }
        // encode the rest of the path
        res += encoder(path, true);
    }
    if (query) {
        res += '?';
        res += encoder(query, false);
    }
    if (fragment) {
        res += '#';
        res += !skipEncoding ? encodeURIComponentFast(fragment, false) : fragment;
    }
    return res;
}
// --- decode
function decodeURIComponentGraceful(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (_a) {
        if (str.length > 3) {
            return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
        }
        else {
            return str;
        }
    }
}
var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(str) {
    if (!str.match(_rEncodedAsHex)) {
        return str;
    }
    return str.replace(_rEncodedAsHex, function (match) { return decodeURIComponentGraceful(match); });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return FileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbsolutePath", function() { return isAbsolutePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return resolvePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePath", function() { return normalizePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinPath", function() { return joinPath; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var FileType;
(function (FileType) {
    /**
     * The file type is unknown.
     */
    FileType[FileType["Unknown"] = 0] = "Unknown";
    /**
     * A regular file.
     */
    FileType[FileType["File"] = 1] = "File";
    /**
     * A directory.
     */
    FileType[FileType["Directory"] = 2] = "Directory";
    /**
     * A symbolic link to a file.
     */
    FileType[FileType["SymbolicLink"] = 64] = "SymbolicLink";
})(FileType || (FileType = {}));
// following https://nodejs.org/api/path.html#path_path_isabsolute_path
const PathMatchRegex = new RegExp('^(/|//|\\\\\\\\|[A-Za-z]:(/|\\\\))');
const Dot = '.'.charCodeAt(0);
function isAbsolutePath(path) {
    return PathMatchRegex.test(path);
}
function resolvePath(uri, path) {
    if (isAbsolutePath(path)) {
        return uri.with({ path: normalizePath(path.split('/')) });
    }
    return joinPath(uri, path);
}
function normalizePath(parts) {
    const newParts = [];
    for (const part of parts) {
        if (part.length === 0 || part.length === 1 && part.charCodeAt(0) === Dot) {
            // ignore
        }
        else if (part.length === 2 && part.charCodeAt(0) === Dot && part.charCodeAt(1) === Dot) {
            newParts.pop();
        }
        else {
            newParts.push(part);
        }
    }
    if (parts.length > 1 && parts[parts.length - 1].length === 0) {
        newParts.push('');
    }
    let res = newParts.join('/');
    if (parts[0].length === 0) {
        res = '/' + res;
    }
    return res;
}
function joinPath(uri, ...paths) {
    const parts = uri.path.split('/');
    for (const path of paths) {
        parts.push(...path.split('/'));
    }
    return uri.with({ path: normalizePath(parts) });
}
//# sourceMappingURL=fileService.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(26);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(27);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(23)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

try {
  var util = __webpack_require__(25);
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  module.exports = __webpack_require__(28);
}


/***/ }),
/* 28 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return extractAbbreviation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markup", function() { return markup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMarkup", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStylesheet", function() { return parse$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStylesheetSnippets", function() { return convertSnippets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveConfig", function() { return resolveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyMarkup", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyStylesheet", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesheet", function() { return stylesheet; });
/* harmony import */ var _emmetio_abbreviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markupAbbreviation", function() { return _emmetio_abbreviation__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _emmetio_css_abbreviation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylesheetAbbreviation", function() { return _emmetio_css_abbreviation__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/**
 * Merges attributes in current node: de-duplicates attributes with the same name
 * and merges class names
 */
function mergeAttributes(node, config) {
    if (!node.attributes) {
        return;
    }
    const attributes = [];
    const lookup = {};
    for (const attr of node.attributes) {
        if (attr.name) {
            const attrName = attr.name;
            if (attrName in lookup) {
                const prev = lookup[attrName];
                if (attrName === 'class') {
                    prev.value = mergeValue(prev.value, attr.value, ' ');
                }
                else {
                    mergeDeclarations(prev, attr, config);
                }
            }
            else {
                // Create new attribute instance so we can safely modify it later
                attributes.push(lookup[attrName] = Object.assign({}, attr));
            }
        }
        else {
            attributes.push(attr);
        }
    }
    node.attributes = attributes;
}
/**
 * Merges two token lists into single list. Adjacent strings are merged together
 */
function mergeValue(prev, next, glue) {
    if (prev && next) {
        if (prev.length && glue) {
            append(prev, glue);
        }
        for (const t of next) {
            append(prev, t);
        }
        return prev;
    }
    const result = prev || next;
    return result && result.slice();
}
/**
 * Merges data from `src` attribute into `dest` and returns it
 */
function mergeDeclarations(dest, src, config) {
    dest.name = src.name;
    if (!config.options['output.reverseAttributes']) {
        dest.value = src.value;
    }
    // Keep high-priority properties
    if (!dest.implied) {
        dest.implied = src.implied;
    }
    if (!dest.boolean) {
        dest.boolean = src.boolean;
    }
    if (dest.valueType !== 'expression') {
        dest.valueType = src.valueType;
    }
    return dest;
}
function append(tokens, value) {
    const lastIx = tokens.length - 1;
    if (typeof tokens[lastIx] === 'string' && typeof value === 'string') {
        tokens[lastIx] += value;
    }
    else {
        tokens.push(value);
    }
}

/**
 * Walks over each child node of given markup abbreviation AST node (not including
 * given one) and invokes `fn` on each node.
 * The `fn` callback accepts context node, list of ancestor nodes and optional
 * state object
 */
function walk(node, fn, state) {
    const ancestors = [node];
    const callback = (ctx) => {
        fn(ctx, ancestors, state);
        ancestors.push(ctx);
        ctx.children.forEach(callback);
        ancestors.pop();
    };
    node.children.forEach(callback);
}
/**
 * Finds node which is the deepest for in current node or node itself.
 */
function findDeepest(node) {
    let parent;
    while (node.children.length) {
        parent = node;
        node = node.children[node.children.length - 1];
    }
    return { parent, node };
}
function isNode(node) {
    return node.type === 'AbbreviationNode';
}

/**
 * Finds matching snippet from `registry` and resolves it into a parsed abbreviation.
 * Resolved node is then updated or replaced with matched abbreviation tree.
 *
 * A HTML registry basically contains aliases to another Emmet abbreviations,
 * e.g. a predefined set of name, attributes and so on, possibly a complex
 * abbreviation with multiple elements. So we have to get snippet, parse it
 * and recursively resolve it.
 */
function resolveSnippets(abbr, config) {
    const stack = [];
    const reversed = config.options['output.reverseAttributes'];
    const resolve = (child) => {
        const snippet = child.name && config.snippets[child.name];
        // A snippet in stack means circular reference.
        // It can be either a user error or a perfectly valid snippet like
        // "img": "img[src alt]/", e.g. an element with predefined shape.
        // In any case, simply stop parsing and keep element as is
        if (!snippet || stack.includes(snippet)) {
            return null;
        }
        const snippetAbbr = Object(_emmetio_abbreviation__WEBPACK_IMPORTED_MODULE_0__["default"])(snippet, config);
        stack.push(snippet);
        walkResolve(snippetAbbr, resolve);
        stack.pop();
        // Add attributes from current node into every top-level node of parsed abbreviation
        for (const topNode of snippetAbbr.children) {
            if (child.attributes) {
                const from = topNode.attributes || [];
                const to = child.attributes || [];
                topNode.attributes = reversed ? to.concat(from) : from.concat(to);
            }
            mergeNodes(child, topNode);
        }
        return snippetAbbr;
    };
    walkResolve(abbr, resolve);
    return abbr;
}
function walkResolve(node, resolve, config) {
    let children = [];
    for (const child of node.children) {
        const resolved = resolve(child);
        if (resolved) {
            children = children.concat(resolved.children);
            const deepest = findDeepest(resolved);
            if (isNode(deepest.node)) {
                deepest.node.children = deepest.node.children.concat(walkResolve(child, resolve));
            }
        }
        else {
            children.push(child);
            child.children = walkResolve(child, resolve);
        }
    }
    return node.children = children;
}
/**
 * Adds data from first node into second node
 */
function mergeNodes(from, to) {
    if (from.selfClosing) {
        to.selfClosing = true;
    }
    if (from.value != null) {
        to.value = from.value;
    }
    if (from.repeat) {
        to.repeat = from.repeat;
    }
}

function createOutputStream(options, level = 0) {
    return {
        options,
        value: '',
        level,
        offset: 0,
        line: 0,
        column: 0
    };
}
/**
 * Pushes plain string into output stream without newline processing
 */
function push(stream, text) {
    const processText = stream.options['output.text'];
    _push(stream, processText(text, stream.offset, stream.line, stream.column));
}
/**
 * Pushes given string with possible newline formatting into output
 */
function pushString(stream, value) {
    // If given value contains newlines, we should push content line-by-line and
    // use `pushNewline()` to maintain proper line/column state
    const lines = splitByLines(value);
    for (let i = 0, il = lines.length - 1; i <= il; i++) {
        push(stream, lines[i]);
        if (i !== il) {
            pushNewline(stream, true);
        }
    }
}
/**
 * Pushes new line into given output stream
 */
function pushNewline(stream, indent) {
    const baseIndent = stream.options['output.baseIndent'];
    const newline = stream.options['output.newline'];
    push(stream, newline + baseIndent);
    stream.line++;
    stream.column = baseIndent.length;
    if (indent) {
        pushIndent(stream, indent === true ? stream.level : indent);
    }
}
/**
 * Adds indentation of `size` to current output stream
 */
function pushIndent(stream, size = stream.level) {
    const indent = stream.options['output.indent'];
    push(stream, indent.repeat(Math.max(size, 0)));
}
/**
 * Pushes field/tabstop into output stream
 */
function pushField(stream, index, placeholder) {
    const field = stream.options['output.field'];
    // NB: use `_push` instead of `push` to skip text processing
    _push(stream, field(index, placeholder, stream.offset, stream.line, stream.column));
}
/**
 * Returns given tag name formatted according to given config
 */
function tagName(name, config) {
    return strCase(name, config.options['output.tagCase']);
}
/**
 * Returns given attribute name formatted according to given config
 */
function attrName(name, config) {
    return strCase(name, config.options['output.attributeCase']);
}
/**
 * Returns character for quoting value of given attribute
 */
function attrQuote(attr, config, isOpen) {
    if (attr.valueType === 'expression') {
        return isOpen ? '{' : '}';
    }
    return config.options['output.attributeQuotes'] === 'single' ? '\'' : '"';
}
/**
 * Check if given attribute is boolean
 */
function isBooleanAttribute(attr, config) {
    return attr.boolean
        || config.options['output.booleanAttributes'].includes((attr.name || '').toLowerCase());
}
/**
 * Returns a token for self-closing tag, depending on current options
 */
function selfClose(config) {
    switch (config.options['output.selfClosingStyle']) {
        case 'xhtml': return ' /';
        case 'xml': return '/';
        default: return '';
    }
}
/**
 * Check if given tag name belongs to inline-level element
 * @param node Parsed node or tag name
 */
function isInline(node, config) {
    if (typeof node === 'string') {
        return config.options.inlineElements.includes(node.toLowerCase());
    }
    // inline node is a node either with inline-level name or text-only node
    return node.name ? isInline(node.name, config) : Boolean(node.value && !node.attributes);
}
/**
 * Splits given text by lines
 */
function splitByLines(text) {
    return text.split(/\r\n|\r|\n/g);
}
/**
 * Pushes raw string into output stream without any processing
 */
function _push(stream, text) {
    stream.value += text;
    stream.offset += text.length;
    stream.column += text.length;
}
function strCase(str, type) {
    if (type) {
        return type === 'upper' ? str.toUpperCase() : str.toLowerCase();
    }
    return str;
}

const elementMap = {
    p: 'span',
    ul: 'li',
    ol: 'li',
    table: 'tr',
    tr: 'td',
    tbody: 'tr',
    thead: 'tr',
    tfoot: 'tr',
    colgroup: 'col',
    select: 'option',
    optgroup: 'option',
    audio: 'source',
    video: 'source',
    object: 'param',
    map: 'area'
};
function implicitTag(node, ancestors, config) {
    if (!node.name && node.attributes) {
        resolveImplicitTag(node, ancestors, config);
    }
}
function resolveImplicitTag(node, ancestors, config) {
    const parent = getParentElement(ancestors);
    const contextName = config.context ? config.context.name : '';
    const parentName = lowercase(parent ? parent.name : contextName);
    node.name = elementMap[parentName]
        || (isInline(parentName, config) ? 'span' : 'div');
}
function lowercase(str) {
    return (str || '').toLowerCase();
}
/**
 * Returns closest element node from given ancestors list
 */
function getParentElement(ancestors) {
    for (let i = ancestors.length - 1; i >= 0; i--) {
        const elem = ancestors[i];
        if (isNode(elem)) {
            return elem;
        }
    }
}

var latin = {
	"common": ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"],
	"words": ["exercitationem", "perferendis", "perspiciatis", "laborum", "eveniet",
		"sunt", "iure", "nam", "nobis", "eum", "cum", "officiis", "excepturi",
		"odio", "consectetur", "quasi", "aut", "quisquam", "vel", "eligendi",
		"itaque", "non", "odit", "tempore", "quaerat", "dignissimos",
		"facilis", "neque", "nihil", "expedita", "vitae", "vero", "ipsum",
		"nisi", "animi", "cumque", "pariatur", "velit", "modi", "natus",
		"iusto", "eaque", "sequi", "illo", "sed", "ex", "et", "voluptatibus",
		"tempora", "veritatis", "ratione", "assumenda", "incidunt", "nostrum",
		"placeat", "aliquid", "fuga", "provident", "praesentium", "rem",
		"necessitatibus", "suscipit", "adipisci", "quidem", "possimus",
		"voluptas", "debitis", "sint", "accusantium", "unde", "sapiente",
		"voluptate", "qui", "aspernatur", "laudantium", "soluta", "amet",
		"quo", "aliquam", "saepe", "culpa", "libero", "ipsa", "dicta",
		"reiciendis", "nesciunt", "doloribus", "autem", "impedit", "minima",
		"maiores", "repudiandae", "ipsam", "obcaecati", "ullam", "enim",
		"totam", "delectus", "ducimus", "quis", "voluptates", "dolores",
		"molestiae", "harum", "dolorem", "quia", "voluptatem", "molestias",
		"magni", "distinctio", "omnis", "illum", "dolorum", "voluptatum", "ea",
		"quas", "quam", "corporis", "quae", "blanditiis", "atque", "deserunt",
		"laboriosam", "earum", "consequuntur", "hic", "cupiditate",
		"quibusdam", "accusamus", "ut", "rerum", "error", "minus", "eius",
		"ab", "ad", "nemo", "fugit", "officia", "at", "in", "id", "quos",
		"reprehenderit", "numquam", "iste", "fugiat", "sit", "inventore",
		"beatae", "repellendus", "magnam", "recusandae", "quod", "explicabo",
		"doloremque", "aperiam", "consequatur", "asperiores", "commodi",
		"optio", "dolor", "labore", "temporibus", "repellat", "veniam",
		"architecto", "est", "esse", "mollitia", "nulla", "a", "similique",
		"eos", "alias", "dolore", "tenetur", "deleniti", "porro", "facere",
		"maxime", "corrupti"]
};

var ru = {
	"common": ["далеко-далеко", "за", "словесными", "горами", "в стране", "гласных", "и согласных", "живут", "рыбные", "тексты"],
	"words": ["вдали", "от всех", "они", "буквенных", "домах", "на берегу", "семантика",
		"большого", "языкового", "океана", "маленький", "ручеек", "даль",
		"журчит", "по всей", "обеспечивает", "ее","всеми", "необходимыми",
		"правилами", "эта", "парадигматическая", "страна", "которой", "жаренные",
		"предложения", "залетают", "прямо", "рот", "даже", "всемогущая",
		"пунктуация", "не", "имеет", "власти", "над", "рыбными", "текстами",
		"ведущими", "безорфографичный", "образ", "жизни", "однажды", "одна",
		"маленькая", "строчка","рыбного", "текста", "имени", "lorem", "ipsum",
		"решила", "выйти", "большой", "мир", "грамматики", "великий", "оксмокс",
		"предупреждал", "о", "злых", "запятых", "диких", "знаках", "вопроса",
		"коварных", "точках", "запятой", "но", "текст", "дал", "сбить",
		"себя", "толку", "он", "собрал", "семь", "своих", "заглавных", "букв",
		"подпоясал", "инициал", "за", "пояс", "пустился", "дорогу",
		"взобравшись", "первую", "вершину", "курсивных", "гор", "бросил",
		"последний", "взгляд", "назад", "силуэт", "своего", "родного", "города",
		"буквоград", "заголовок", "деревни", "алфавит", "подзаголовок", "своего",
		"переулка", "грустный", "реторический", "вопрос", "скатился", "его",
		"щеке", "продолжил", "свой", "путь", "дороге", "встретил", "рукопись",
		"она", "предупредила",  "моей", "все", "переписывается", "несколько",
		"раз", "единственное", "что", "меня", "осталось", "это", "приставка",
		"возвращайся", "ты", "лучше", "свою", "безопасную", "страну", "послушавшись",
		"рукописи", "наш", "продолжил", "свой", "путь", "вскоре", "ему",
		"повстречался", "коварный", "составитель", "рекламных", "текстов",
		"напоивший", "языком", "речью", "заманивший", "свое", "агентство",
		"которое", "использовало", "снова", "снова", "своих", "проектах",
		"если", "переписали", "то", "живет", "там", "до", "сих", "пор"]
};

var sp = {
	"common": ["mujer", "uno", "dolor", "más", "de", "poder", "mismo", "si"],
	"words": ["ejercicio", "preferencia", "perspicacia", "laboral", "paño",
		"suntuoso", "molde", "namibia", "planeador", "mirar", "demás", "oficinista", "excepción",
		"odio", "consecuencia", "casi", "auto", "chicharra", "velo", "elixir",
		"ataque", "no", "odio", "temporal", "cuórum", "dignísimo",
		"facilismo", "letra", "nihilista", "expedición", "alma", "alveolar", "aparte",
		"león", "animal", "como", "paria", "belleza", "modo", "natividad",
		"justo", "ataque", "séquito", "pillo", "sed", "ex", "y", "voluminoso",
		"temporalidad", "verdades", "racional", "asunción", "incidente", "marejada",
		"placenta", "amanecer", "fuga", "previsor", "presentación", "lejos",
		"necesariamente", "sospechoso", "adiposidad", "quindío", "pócima",
		"voluble", "débito", "sintió", "accesorio", "falda", "sapiencia",
		"volutas", "queso", "permacultura", "laudo", "soluciones", "entero",
		"pan", "litro", "tonelada", "culpa", "libertario", "mosca", "dictado",
		"reincidente", "nascimiento", "dolor", "escolar", "impedimento", "mínima",
		"mayores", "repugnante", "dulce", "obcecado", "montaña", "enigma",
		"total", "deletéreo", "décima", "cábala", "fotografía", "dolores",
		"molesto", "olvido", "paciencia", "resiliencia", "voluntad", "molestias",
		"magnífico", "distinción", "ovni", "marejada", "cerro", "torre", "y",
		"abogada", "manantial", "corporal", "agua", "crepúsculo", "ataque", "desierto",
		"laboriosamente", "angustia", "afortunado", "alma", "encefalograma",
		"materialidad", "cosas", "o", "renuncia", "error", "menos", "conejo",
		"abadía", "analfabeto", "remo", "fugacidad", "oficio", "en", "almácigo", "vos", "pan",
		"represión", "números", "triste", "refugiado", "trote", "inventor",
		"corchea", "repelente", "magma", "recusado", "patrón", "explícito",
		"paloma", "síndrome", "inmune", "autoinmune", "comodidad",
		"ley", "vietnamita", "demonio", "tasmania", "repeler", "apéndice",
		"arquitecto", "columna", "yugo", "computador", "mula", "a", "propósito",
		"fantasía", "alias", "rayo", "tenedor", "deleznable", "ventana", "cara",
		"anemia", "corrupto"]
};

const vocabularies = { ru, sp, latin };
const reLorem = /^lorem([a-z]*)(\d*)(-\d*)?$/i;
function lorem(node, ancestors, config) {
    let m;
    if (node.name && (m = node.name.match(reLorem))) {
        const db = vocabularies[m[1]] || vocabularies.latin;
        const minWordCount = m[2] ? Math.max(1, Number(m[2])) : 30;
        const maxWordCount = m[3] ? Math.max(minWordCount, Number(m[3].slice(1))) : minWordCount;
        const wordCount = rand(minWordCount, maxWordCount);
        const repeat = node.repeat || findRepeater(ancestors);
        node.name = node.attributes = void 0;
        node.value = [paragraph(db, wordCount, !repeat || repeat.value === 0)];
        if (node.repeat && ancestors.length > 1) {
            resolveImplicitTag(node, ancestors, config);
        }
    }
}
/**
 * Returns random integer between <code>from</code> and <code>to</code> values
 */
function rand(from, to) {
    return Math.floor(Math.random() * (to - from) + from);
}
function sample(arr, count) {
    const len = arr.length;
    const iterations = Math.min(len, count);
    const result = [];
    while (result.length < iterations) {
        const str = arr[rand(0, len)];
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
function choice(val) {
    return val[rand(0, val.length - 1)];
}
function sentence(words, end) {
    if (words.length) {
        words = [capitalize(words[0])].concat(words.slice(1));
    }
    return words.join(' ') + (end || choice('?!...')); // more dots than question marks
}
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
}
/**
 * Insert commas at randomly selected words. This function modifies values
 * inside `words` array
 */
function insertCommas(words) {
    if (words.length < 2) {
        return words;
    }
    words = words.slice();
    const len = words.length;
    const hasComma = /,$/;
    let totalCommas = 0;
    if (len > 3 && len <= 6) {
        totalCommas = rand(0, 1);
    }
    else if (len > 6 && len <= 12) {
        totalCommas = rand(0, 2);
    }
    else {
        totalCommas = rand(1, 4);
    }
    for (let i = 0, pos; i < totalCommas; i++) {
        pos = rand(0, len - 2);
        if (!hasComma.test(words[pos])) {
            words[pos] += ',';
        }
    }
    return words;
}
/**
 * Generate a paragraph of "Lorem ipsum" text
 * @param dict Words dictionary
 * @param wordCount Words count in paragraph
 * @param startWithCommon Should paragraph start with common "lorem ipsum" sentence.
 */
function paragraph(dict, wordCount, startWithCommon) {
    const result = [];
    let totalWords = 0;
    let words;
    if (startWithCommon && dict.common) {
        words = dict.common.slice(0, wordCount);
        totalWords += words.length;
        result.push(sentence(insertCommas(words), '.'));
    }
    while (totalWords < wordCount) {
        words = sample(dict.words, Math.min(rand(2, 30), wordCount - totalWords));
        totalWords += words.length;
        result.push(sentence(insertCommas(words)));
    }
    return result.join(' ');
}
function findRepeater(ancestors) {
    for (let i = ancestors.length - 1; i >= 0; i--) {
        const element = ancestors[i];
        if (element.type === 'AbbreviationNode' && element.repeat) {
            return element.repeat;
        }
    }
}

/**
 * JSX transformer: replaces `class` and `for` attributes with `className` and
 * `htmlFor` attributes respectively
 */
function jsx(node) {
    if (node.attributes) {
        node.attributes.forEach(rename);
    }
}
function rename(attr) {
    if (attr.name === 'class') {
        attr.name = 'className';
    }
    else if (attr.name === 'for') {
        attr.name = 'htmlFor';
    }
}

/**
 * XSL transformer: removes `select` attributes from certain nodes that contain
 * children
 */
function xsl(node) {
    if (matchesName(node.name) && node.attributes && (node.children.length || node.value)) {
        node.attributes = node.attributes.filter(isAllowed);
    }
}
function isAllowed(attr) {
    return attr.name !== 'select';
}
function matchesName(name) {
    return name === 'xsl:variable' || name === 'xsl:with-param';
}

const reElement = /^(-+)([a-z0-9]+[a-z0-9-]*)/i;
const reModifier = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i;
const blockCandidates1 = (className) => /^[a-z]\-/i.test(className);
const blockCandidates2 = (className) => /^[a-z]/i.test(className);
function bem(node, ancestors, config) {
    expandClassNames(node);
    expandShortNotation(node, ancestors, config);
}
/**
 * Expands existing class names in BEM notation in given `node`.
 * For example, if node contains `b__el_mod` class name, this method ensures
 * that element contains `b__el` class as well
 */
function expandClassNames(node) {
    const data = getBEMData(node);
    const classNames = [];
    for (const cl of data.classNames) {
        // remove all modifiers and element prefixes from class name to get a base element name
        const ix = cl.indexOf('_');
        if (ix > 0 && !cl.startsWith('-')) {
            classNames.push(cl.slice(0, ix));
            classNames.push(cl.slice(ix));
        }
        else {
            classNames.push(cl);
        }
    }
    if (classNames.length) {
        data.classNames = classNames.filter(uniqueClass);
        data.block = findBlockName(data.classNames);
        updateClass(node, data.classNames.join(' '));
    }
}
/**
 * Expands short BEM notation, e.g. `-element` and `_modifier`
 */
function expandShortNotation(node, ancestors, config) {
    const data = getBEMData(node);
    const classNames = [];
    const { options } = config;
    const path = ancestors.slice(1).concat(node);
    for (let cl of data.classNames) {
        let prefix = '';
        let m;
        const originalClass = cl;
        // parse element definition (could be only one)
        if (m = cl.match(reElement)) {
            prefix = getBlockName(path, m[1].length, config.context) + options['bem.element'] + m[2];
            classNames.push(prefix);
            cl = cl.slice(m[0].length);
        }
        // parse modifiers definitions
        if (m = cl.match(reModifier)) {
            if (!prefix) {
                prefix = getBlockName(path, m[1].length);
                classNames.push(prefix);
            }
            classNames.push(`${prefix}${options['bem.modifier']}${m[2]}`);
            cl = cl.slice(m[0].length);
        }
        if (cl === originalClass) {
            // class name wasn’t modified: it’s not a BEM-specific class,
            // add it as-is into output
            classNames.push(originalClass);
        }
    }
    const arrClassNames = classNames.filter(uniqueClass);
    if (arrClassNames.length) {
        updateClass(node, arrClassNames.join(' '));
    }
}
/**
 * Returns BEM data from given abbreviation node
 */
function getBEMData(node) {
    if (!node._bem) {
        let classValue = '';
        if (node.attributes) {
            for (const attr of node.attributes) {
                if (attr.name === 'class' && attr.value) {
                    classValue = stringifyValue(attr.value);
                    break;
                }
            }
        }
        node._bem = parseBEM(classValue);
    }
    return node._bem;
}
function getBEMDataFromContext(context) {
    if (!context._bem) {
        context._bem = parseBEM(context.attributes && context.attributes.class || '');
    }
    return context._bem;
}
/**
 * Parses BEM data from given class name
 */
function parseBEM(classValue) {
    const classNames = classValue ? classValue.split(/\s+/) : [];
    return {
        classNames,
        block: findBlockName(classNames)
    };
}
/**
 * Returns block name for given `node` by `prefix`, which tells the depth of
 * of parent node lookup
 */
function getBlockName(ancestors, depth = 0, context) {
    const maxParentIx = 0;
    let parentIx = Math.max(ancestors.length - depth, maxParentIx);
    do {
        const parent = ancestors[parentIx];
        if (parent) {
            const data = getBEMData(parent);
            if (data.block) {
                return data.block;
            }
        }
    } while (maxParentIx < parentIx--);
    if (context) {
        const data = getBEMDataFromContext(context);
        if (data.block) {
            return data.block;
        }
    }
    return '';
}
function findBlockName(classNames) {
    return find(classNames, blockCandidates1)
        || find(classNames, blockCandidates2)
        || void 0;
}
/**
 * Finds class name from given list which may be used as block name
 */
function find(classNames, filter) {
    for (const cl of classNames) {
        if (reElement.test(cl) || reModifier.test(cl)) {
            break;
        }
        if (filter(cl)) {
            return cl;
        }
    }
}
function updateClass(node, value) {
    for (const attr of node.attributes) {
        if (attr.name === 'class') {
            attr.value = [value];
            break;
        }
    }
}
function stringifyValue(value) {
    let result = '';
    for (const t of value) {
        result += typeof t === 'string' ? t : t.name;
    }
    return result;
}
function uniqueClass(item, ix, arr) {
    return !!item && arr.indexOf(item) === ix;
}

function walk$1(abbr, visitor, state) {
    const callback = (ctx, index, items) => {
        const { parent, current } = state;
        state.parent = current;
        state.current = ctx;
        visitor(ctx, index, items, state, next);
        state.current = current;
        state.parent = parent;
    };
    const next = (node, index, items) => {
        state.ancestors.push(state.current);
        callback(node, index, items);
        state.ancestors.pop();
    };
    abbr.children.forEach(callback);
}
function createWalkState(config) {
    return {
        // @ts-ignore: Will set value in iterator
        current: null,
        parent: void 0,
        ancestors: [],
        config,
        field: 1,
        out: createOutputStream(config.options)
    };
}

const caret = [{ type: 'Field', index: 0, name: '' }];
/**
 * Check if given node is a snippet: a node without name and attributes
 */
function isSnippet(node) {
    return node ? !node.name && !node.attributes : false;
}
/**
 * Check if given node is inline-level element, e.g. element with explicitly
 * defined node name
 */
function isInlineElement(node, config) {
    return node ? isInline(node, config) : false;
}
/**
 * Check if given value token is a field
 */
function isField(token) {
    return typeof token === 'object' && token.type === 'Field';
}
function pushTokens(tokens, state) {
    const { out } = state;
    let largestIndex = -1;
    for (const t of tokens) {
        if (typeof t === 'string') {
            pushString(out, t);
        }
        else {
            pushField(out, state.field + t.index, t.name);
            if (t.index > largestIndex) {
                largestIndex = t.index;
            }
        }
    }
    if (largestIndex !== -1) {
        state.field += largestIndex + 1;
    }
}
/**
 * Splits given value token by lines: returns array where each entry is a token list
 * for a single line
 */
function splitByLines$1(tokens) {
    const result = [];
    let line = [];
    for (const t of tokens) {
        if (typeof t === 'string') {
            const lines = t.split(/\r\n?|\n/g);
            line.push(lines.shift() || '');
            while (lines.length) {
                result.push(line);
                line = [lines.shift() || ''];
            }
        }
        else {
            line.push(t);
        }
    }
    line.length && result.push(line);
    return result;
}
/**
 * Check if given attribute should be outputted
 */
function shouldOutputAttribute(attr) {
    // In case if attribute is implied, check if it has a defined value:
    // either non-empty value or quoted empty value
    return !attr.implied || attr.valueType !== 'raw' || (!!attr.value && attr.value.length > 0);
}

/**
 * Splits given string into template tokens.
 * Template is a string which contains placeholders which are uppercase names
 * between `[` and `]`, for example: `[PLACEHOLDER]`.
 * Unlike other templates, a placeholder may contain extra characters before and
 * after name: `[%PLACEHOLDER.]`. If data for `PLACEHOLDER` is defined, it will
 * be outputted with with these extra character, otherwise will be completely omitted.
 */
function template(text) {
    const tokens = [];
    const scanner = { pos: 0, text };
    let placeholder;
    let offset = scanner.pos;
    let pos = scanner.pos;
    while (scanner.pos < scanner.text.length) {
        pos = scanner.pos;
        if (placeholder = consumePlaceholder(scanner)) {
            if (offset !== scanner.pos) {
                tokens.push(text.slice(offset, pos));
            }
            tokens.push(placeholder);
            offset = scanner.pos;
        }
        else {
            scanner.pos++;
        }
    }
    if (offset !== scanner.pos) {
        tokens.push(text.slice(offset));
    }
    return tokens;
}
/**
 * Consumes placeholder like `[#ID]` from given scanner
 */
function consumePlaceholder(scanner) {
    if (peek(scanner) === 91 /* Start */) {
        const start = ++scanner.pos;
        let namePos = start;
        let afterPos = start;
        let stack = 1;
        while (scanner.pos < scanner.text.length) {
            const code = peek(scanner);
            if (isTokenStart(code)) {
                namePos = scanner.pos;
                while (isToken(peek(scanner))) {
                    scanner.pos++;
                }
                afterPos = scanner.pos;
            }
            else {
                if (code === 91 /* Start */) {
                    stack++;
                }
                else if (code === 93 /* End */) {
                    if (--stack === 0) {
                        return {
                            before: scanner.text.slice(start, namePos),
                            after: scanner.text.slice(afterPos, scanner.pos++),
                            name: scanner.text.slice(namePos, afterPos)
                        };
                    }
                }
                scanner.pos++;
            }
        }
    }
}
function peek(scanner, pos = scanner.pos) {
    return scanner.text.charCodeAt(pos);
}
function isTokenStart(code) {
    return code >= 65 && code <= 90; // A-Z
}
function isToken(code) {
    return isTokenStart(code)
        || (code > 47 && code < 58) /* 0-9 */
        || code === 95 /* Underscore */
        || code === 45 /* Dash */;
}

function createCommentState(config) {
    const { options } = config;
    return {
        enabled: options['comment.enabled'],
        trigger: options['comment.trigger'],
        before: options['comment.before'] ? template(options['comment.before']) : void 0,
        after: options['comment.after'] ? template(options['comment.after']) : void 0
    };
}
/**
 * Adds comment prefix for given node, if required
 */
function commentNodeBefore(node, state) {
    if (shouldComment(node, state) && state.comment.before) {
        output(node, state.comment.before, state);
    }
}
/**
 * Adds comment suffix for given node, if required
 */
function commentNodeAfter(node, state) {
    if (shouldComment(node, state) && state.comment.after) {
        output(node, state.comment.after, state);
    }
}
/**
 * Check if given node should be commented
 */
function shouldComment(node, state) {
    const { comment } = state;
    if (!comment.enabled || !comment.trigger || !node.name || !node.attributes) {
        return false;
    }
    for (const attr of node.attributes) {
        if (attr.name && comment.trigger.includes(attr.name)) {
            return true;
        }
    }
    return false;
}
/**
 * Pushes given template tokens into output stream
 */
function output(node, tokens, state) {
    const attrs = {};
    const { out } = state;
    // Collect attributes payload
    for (const attr of node.attributes) {
        if (attr.name && attr.value) {
            attrs[attr.name.toUpperCase()] = attr.value;
        }
    }
    // Output parsed tokens
    for (const token of tokens) {
        if (typeof token === 'string') {
            pushString(out, token);
        }
        else if (attrs[token.name]) {
            pushString(out, token.before);
            pushTokens(attrs[token.name], state);
            pushString(out, token.after);
        }
    }
}

const htmlTagRegex = /^<([\w\-:]+)[\s>]/;
function html(abbr, config) {
    const state = createWalkState(config);
    state.comment = createCommentState(config);
    walk$1(abbr, element, state);
    return state.out.value;
}
/**
 * Outputs `node` content to output stream of `state`
 * @param node Context node
 * @param index Index of `node` in `items`
 * @param items List of `node`’s siblings
 * @param state Current walk state
 */
function element(node, index, items, state, next) {
    const { out, config } = state;
    const format = shouldFormat(node, index, items, state);
    // Pick offset level for current node
    const level = getIndent(state);
    out.level += level;
    format && pushNewline(out, true);
    if (node.name) {
        const name = tagName(node.name, config);
        commentNodeBefore(node, state);
        pushString(out, `<${name}`);
        if (node.attributes) {
            for (const attr of node.attributes) {
                if (shouldOutputAttribute(attr)) {
                    pushAttribute(attr, state);
                }
            }
        }
        if (node.selfClosing && !node.children.length && !node.value) {
            pushString(out, `${selfClose(config)}>`);
        }
        else {
            pushString(out, '>');
            if (!pushSnippet(node, state, next)) {
                if (node.value) {
                    const innerFormat = node.value.some(hasNewline) || startsWithBlockTag(node.value, config);
                    innerFormat && pushNewline(state.out, ++out.level);
                    pushTokens(node.value, state);
                    innerFormat && pushNewline(state.out, --out.level);
                }
                node.children.forEach(next);
                if (!node.value && !node.children.length) {
                    const innerFormat = config.options['output.formatLeafNode']
                        || config.options['output.formatForce'].includes(node.name);
                    innerFormat && pushNewline(state.out, ++out.level);
                    pushTokens(caret, state);
                    innerFormat && pushNewline(state.out, --out.level);
                }
            }
            pushString(out, `</${name}>`);
            commentNodeAfter(node, state);
        }
    }
    else if (!pushSnippet(node, state, next) && node.value) {
        // A text-only node (snippet)
        pushTokens(node.value, state);
        node.children.forEach(next);
    }
    if (format && index === items.length - 1 && state.parent) {
        const offset = isSnippet(state.parent) ? 0 : 1;
        pushNewline(out, out.level - offset);
    }
    out.level -= level;
}
/**
 * Outputs given attribute’s content into output stream
 */
function pushAttribute(attr, state) {
    const { out, config } = state;
    if (attr.name) {
        const name = attrName(attr.name, config);
        const lQuote = attrQuote(attr, config, true);
        const rQuote = attrQuote(attr, config);
        let value = attr.value;
        if (isBooleanAttribute(attr, config) && !value) {
            // If attribute value is omitted and it’s a boolean value, check for
            // `compactBoolean` option: if it’s disabled, set value to attribute name
            // (XML style)
            if (!config.options['output.compactBoolean']) {
                value = [name];
            }
        }
        else if (!value) {
            value = caret;
        }
        pushString(out, ' ' + name);
        if (value) {
            pushString(out, '=' + lQuote);
            pushTokens(value, state);
            pushString(out, rQuote);
        }
        else if (config.options['output.selfClosingStyle'] !== 'html') {
            pushString(out, '=' + lQuote + rQuote);
        }
    }
}
function pushSnippet(node, state, next) {
    if (node.value && node.children.length) {
        // We have a value and child nodes. In case if value contains fields,
        // we should output children as a content of first field
        const fieldIx = node.value.findIndex(isField);
        if (fieldIx !== -1) {
            pushTokens(node.value.slice(0, fieldIx), state);
            const line = state.out.line;
            let pos = fieldIx + 1;
            node.children.forEach(next);
            // If there was a line change, trim leading whitespace for better result
            if (state.out.line !== line && typeof node.value[pos] === 'string') {
                pushString(state.out, node.value[pos++].trimLeft());
            }
            pushTokens(node.value.slice(pos), state);
            return true;
        }
    }
    return false;
}
/**
 * Check if given node should be formatted in its parent context
 */
function shouldFormat(node, index, items, state) {
    const { config, parent } = state;
    if (!config.options['output.format']) {
        return false;
    }
    if (index === 0 && !parent) {
        // Do not format very first node
        return false;
    }
    // Do not format single child of snippet
    if (parent && isSnippet(parent) && items.length === 1) {
        return false;
    }
    /**
     * Adjacent text-only/snippet nodes
     */
    if (isSnippet(node)) {
        // Adjacent text-only/snippet nodes
        const format = isSnippet(items[index - 1]) || isSnippet(items[index + 1])
            // Has newlines: looks like wrapping code fragment
            || node.value.some(hasNewline)
            // Format as wrapper: contains children which will be outputted as field content
            || (node.value.some(isField) && node.children.length);
        if (format) {
            return true;
        }
    }
    if (isInline(node, config)) {
        // Check if inline node is the next sibling of block-level node
        if (index === 0) {
            // First node in parent: format if it’s followed by a block-level element
            for (let i = 0; i < items.length; i++) {
                if (!isInline(items[i], config)) {
                    return true;
                }
            }
        }
        else if (!isInline(items[index - 1], config)) {
            // Node is right after block-level element
            return true;
        }
        if (config.options['output.inlineBreak']) {
            // check for adjacent inline elements before and after current element
            let adjacentInline = 1;
            let before = index;
            let after = index;
            while (isInlineElement(items[--before], config)) {
                adjacentInline++;
            }
            while (isInlineElement(items[++after], config)) {
                adjacentInline++;
            }
            if (adjacentInline >= config.options['output.inlineBreak']) {
                return true;
            }
        }
        // Edge case: inline node contains node that should receive formatting
        for (let i = 0, il = node.children.length; i < il; i++) {
            if (shouldFormat(node.children[i], i, node.children, state)) {
                return true;
            }
        }
        return false;
    }
    return true;
}
/**
 * Returns indentation offset for given node
 */
function getIndent(state) {
    const { config, parent } = state;
    if (!parent || isSnippet(parent) || (parent.name && config.options['output.formatSkip'].includes(parent.name))) {
        return 0;
    }
    return 1;
}
/**
 * Check if given node value contains newlines
 */
function hasNewline(value) {
    return typeof value === 'string' && /\r|\n/.test(value);
}
/**
 * Check if given node value starts with block-level tag
 */
function startsWithBlockTag(value, config) {
    if (value.length && typeof value[0] === 'string') {
        const matches = htmlTagRegex.exec(value[0]);
        if ((matches === null || matches === void 0 ? void 0 : matches.length) && !config.options['inlineElements'].includes(matches[1].toLowerCase())) {
            return true;
        }
    }
    return false;
}

function indentFormat(abbr, config, options) {
    const state = createWalkState(config);
    state.options = options || {};
    walk$1(abbr, element$1, state);
    return state.out.value;
}
/**
 * Outputs `node` content to output stream of `state`
 * @param node Context node
 * @param index Index of `node` in `items`
 * @param items List of `node`’s siblings
 * @param state Current walk state
 */
function element$1(node, index, items, state, next) {
    const { out, options } = state;
    const { primary, secondary } = collectAttributes(node);
    // Pick offset level for current node
    const level = state.parent ? 1 : 0;
    out.level += level;
    // Do not indent top-level elements
    if (shouldFormat$1(node, index, items, state)) {
        pushNewline(out, true);
    }
    if (node.name && (node.name !== 'div' || !primary.length)) {
        pushString(out, (options.beforeName || '') + node.name + (options.afterName || ''));
    }
    pushPrimaryAttributes(primary, state);
    pushSecondaryAttributes(secondary.filter(shouldOutputAttribute), state);
    if (node.selfClosing && !node.value && !node.children.length) {
        if (state.options.selfClose) {
            pushString(out, state.options.selfClose);
        }
    }
    else {
        pushValue(node, state);
        node.children.forEach(next);
    }
    out.level -= level;
}
/**
 * From given node, collects all attributes as `primary` (id, class) and
 * `secondary` (all the rest) lists. In most indent-based syntaxes, primary attribute
 * has special syntax
 */
function collectAttributes(node) {
    const primary = [];
    const secondary = [];
    if (node.attributes) {
        for (const attr of node.attributes) {
            if (isPrimaryAttribute(attr)) {
                primary.push(attr);
            }
            else {
                secondary.push(attr);
            }
        }
    }
    return { primary, secondary };
}
/**
 * Outputs given attributes as primary into output stream
 */
function pushPrimaryAttributes(attrs, state) {
    for (const attr of attrs) {
        if (attr.value) {
            if (attr.name === 'class') {
                pushString(state.out, '.');
                // All whitespace characters must be replaced with dots in class names
                const tokens = attr.value.map(t => typeof t === 'string' ? t.replace(/\s+/g, '.') : t);
                pushTokens(tokens, state);
            }
            else {
                // ID attribute
                pushString(state.out, '#');
                pushTokens(attr.value, state);
            }
        }
    }
}
/**
 * Outputs given attributes as secondary into output stream
 */
function pushSecondaryAttributes(attrs, state) {
    if (attrs.length) {
        const { out, config, options } = state;
        options.beforeAttribute && pushString(out, options.beforeAttribute);
        for (let i = 0; i < attrs.length; i++) {
            const attr = attrs[i];
            pushString(out, attrName(attr.name || '', config));
            if (isBooleanAttribute(attr, config) && !attr.value) {
                if (!config.options['output.compactBoolean'] && options.booleanValue) {
                    pushString(out, '=' + options.booleanValue);
                }
            }
            else {
                pushString(out, '=' + attrQuote(attr, config, true));
                pushTokens(attr.value || caret, state);
                pushString(out, attrQuote(attr, config));
            }
            if (i !== attrs.length - 1 && options.glueAttribute) {
                pushString(out, options.glueAttribute);
            }
        }
        options.afterAttribute && pushString(out, options.afterAttribute);
    }
}
/**
 * Outputs given node value into state output stream
 */
function pushValue(node, state) {
    // We should either output value or add caret but for leaf nodes only (no children)
    if (!node.value && node.children.length) {
        return;
    }
    const value = node.value || caret;
    const lines = splitByLines$1(value);
    const { out, options } = state;
    if (lines.length === 1) {
        if (node.name || node.attributes) {
            push(out, ' ');
        }
        pushTokens(value, state);
    }
    else {
        // We should format multi-line value with terminating `|` character
        // and same line length
        const lineLengths = [];
        let maxLength = 0;
        // Calculate lengths of all lines and max line length
        for (const line of lines) {
            const len = valueLength(line);
            lineLengths.push(len);
            if (len > maxLength) {
                maxLength = len;
            }
        }
        // Output each line, padded to max length
        out.level++;
        for (let i = 0; i < lines.length; i++) {
            pushNewline(out, true);
            options.beforeTextLine && push(out, options.beforeTextLine);
            pushTokens(lines[i], state);
            if (options.afterTextLine) {
                push(out, ' '.repeat(maxLength - lineLengths[i]));
                push(out, options.afterTextLine);
            }
        }
        out.level--;
    }
}
function isPrimaryAttribute(attr) {
    return attr.name === 'class' || attr.name === 'id';
}
/**
 * Calculates string length from given tokens
 */
function valueLength(tokens) {
    let len = 0;
    for (const token of tokens) {
        len += typeof token === 'string' ? token.length : token.name.length;
    }
    return len;
}
function shouldFormat$1(node, index, items, state) {
    // Do not format first top-level element or snippets
    if (!state.parent && index === 0) {
        return false;
    }
    return !isSnippet(node);
}

function haml(abbr, config) {
    return indentFormat(abbr, config, {
        beforeName: '%',
        beforeAttribute: '(',
        afterAttribute: ')',
        glueAttribute: ' ',
        afterTextLine: ' |',
        booleanValue: 'true',
        selfClose: '/'
    });
}

function slim(abbr, config) {
    return indentFormat(abbr, config, {
        beforeAttribute: ' ',
        glueAttribute: ' ',
        beforeTextLine: '| ',
        selfClose: '/'
    });
}

function pug(abbr, config) {
    return indentFormat(abbr, config, {
        beforeAttribute: '(',
        afterAttribute: ')',
        glueAttribute: ', ',
        beforeTextLine: '| ',
        selfClose: config.options['output.selfClosingStyle'] === 'xml' ? '/' : ''
    });
}

const formatters = { html, haml, slim, pug };
/**
 * Parses given Emmet abbreviation into a final abbreviation tree with all
 * required transformations applied
 */
function parse(abbr, config) {
    let oldTextValue;
    if (typeof abbr === 'string') {
        let parseOpt = config;
        if (config.options['jsx.enabled']) {
            parseOpt = Object.assign(Object.assign({}, parseOpt), { jsx: true });
        }
        if (config.options['markup.href']) {
            parseOpt = Object.assign(Object.assign({}, parseOpt), { href: true });
        }
        abbr = Object(_emmetio_abbreviation__WEBPACK_IMPORTED_MODULE_0__["default"])(abbr, parseOpt);
        // remove text field before snippets(abbr, config) call
        // as abbreviation(abbr, parseOpt) already handled it
        oldTextValue = config.text;
        config.text = undefined;
    }
    // Run abbreviation resolve in two passes:
    // 1. Map each node to snippets, which are abbreviations as well. A single snippet
    // may produce multiple nodes
    // 2. Transform every resolved node
    abbr = resolveSnippets(abbr, config);
    walk(abbr, transform, config);
    config.text = oldTextValue !== null && oldTextValue !== void 0 ? oldTextValue : config.text;
    return abbr;
}
/**
 * Converts given abbreviation to string according to provided `config`
 */
function stringify(abbr, config) {
    const formatter = formatters[config.syntax] || html;
    return formatter(abbr, config);
}
/**
 * Modifies given node and prepares it for output
 */
function transform(node, ancestors, config) {
    implicitTag(node, ancestors, config);
    mergeAttributes(node, config);
    lorem(node, ancestors, config);
    if (config.syntax === 'xsl') {
        xsl(node);
    }
    if (config.options['jsx.enabled']) {
        jsx(node);
    }
    if (config.options['bem.enabled']) {
        bem(node, ancestors, config);
    }
}

const reProperty = /^([a-z-]+)(?:\s*:\s*([^\n\r;]+?);*)?$/;
const opt = { value: true };
/**
 * Creates structure for holding resolved CSS snippet
 */
function createSnippet(key, value) {
    // A snippet could be a raw text snippet (e.g. arbitrary text string) or a
    // CSS property with possible values separated by `|`.
    // In latter case, we have to parse snippet as CSS abbreviation
    const m = value.match(reProperty);
    if (m) {
        const keywords = {};
        const parsed = m[2] ? m[2].split('|').map(parseValue) : [];
        for (const item of parsed) {
            for (const cssVal of item) {
                collectKeywords(cssVal, keywords);
            }
        }
        return {
            type: "Property" /* Property */,
            key,
            property: m[1],
            value: parsed,
            keywords,
            dependencies: []
        };
    }
    return { type: "Raw" /* Raw */, key, value };
}
/**
 * Nests more specific CSS properties into shorthand ones, e.g.
 * `background-position-x` -> `background-position` -> `background`
 */
function nest(snippets) {
    snippets = snippets.slice().sort(snippetsSort);
    const stack = [];
    let prev;
    // For sorted list of CSS properties, create dependency graph where each
    // shorthand property contains its more specific one, e.g.
    // background -> background-position -> background-position-x
    for (const cur of snippets.filter(isProperty)) {
        // Check if current property belongs to one from parent stack.
        // Since `snippets` array is sorted, items are perfectly aligned
        // from shorthands to more specific variants
        while (stack.length) {
            prev = stack[stack.length - 1];
            if (cur.property.startsWith(prev.property)
                && cur.property.charCodeAt(prev.property.length) === 45 /* - */) {
                prev.dependencies.push(cur);
                stack.push(cur);
                break;
            }
            stack.pop();
        }
        if (!stack.length) {
            stack.push(cur);
        }
    }
    return snippets;
}
/**
 * A sorting function for array of snippets
 */
function snippetsSort(a, b) {
    if (a.key === b.key) {
        return 0;
    }
    return a.key < b.key ? -1 : 1;
}
function parseValue(value) {
    return Object(_emmetio_css_abbreviation__WEBPACK_IMPORTED_MODULE_1__["default"])(value.trim(), opt)[0].value;
}
function isProperty(snippet) {
    return snippet.type === "Property" /* Property */;
}
function collectKeywords(cssVal, dest) {
    for (const v of cssVal.value) {
        if (v.type === 'Literal') {
            dest[v.value] = v;
        }
        else if (v.type === 'FunctionCall') {
            dest[v.name] = v;
        }
        else if (v.type === 'Field') {
            // Create literal from field, if available
            const value = v.name.trim();
            if (value) {
                dest[value] = { type: 'Literal', value };
            }
        }
    }
}

/**
 * Calculates how close `str1` matches `str2` using fuzzy match.
 * How matching works:
 * – first characters of both `str1` and `str2` *must* match
 * – `str1` length larger than `str2` length is allowed only when `unmatched` is true
 * – ideal match is when `str1` equals to `str2` (score: 1)
 * – next best match is `str2` starts with `str1` (score: 1 × percent of matched characters)
 * – other scores depend on how close characters of `str1` to the beginning of `str2`
 * @param partialMatch Allow length `str1` to be greater than `str2` length
 */
function scoreMatch(str1, str2, partialMatch = false) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1 === str2) {
        return 1;
    }
    // Both strings MUST start with the same character
    if (!str1 || !str2 || str1.charCodeAt(0) !== str2.charCodeAt(0)) {
        return 0;
    }
    const str1Len = str1.length;
    const str2Len = str2.length;
    if (!partialMatch && str1Len > str2Len) {
        return 0;
    }
    // Characters from `str1` which are closer to the beginning of a `str2` should
    // have higher score.
    // For example, if `str2` is `abcde`, it’s max score is:
    // 5 + 4 + 3 + 2 + 1 = 15 (sum of character positions in reverse order)
    // Matching `abd` against `abcde` should produce:
    // 5 + 4 + 2 = 11
    // Acronym bonus for match right after `-`. Matching `abd` against `abc-de`
    // should produce:
    // 6 + 5 + 4 (use `d` position in `abd`, not in abc-de`)
    const minLength = Math.min(str1Len, str2Len);
    const maxLength = Math.max(str1Len, str2Len);
    let i = 1;
    let j = 1;
    let score = maxLength;
    let ch1 = 0;
    let ch2 = 0;
    let found = false;
    let acronym = false;
    while (i < str1Len) {
        ch1 = str1.charCodeAt(i);
        found = false;
        acronym = false;
        while (j < str2Len) {
            ch2 = str2.charCodeAt(j);
            if (ch1 === ch2) {
                found = true;
                score += maxLength - (acronym ? i : j);
                break;
            }
            // add acronym bonus for exactly next match after unmatched `-`
            acronym = ch2 === 45 /* - */;
            j++;
        }
        if (!found) {
            if (!partialMatch) {
                return 0;
            }
            break;
        }
        i++;
    }
    const matchRatio = i / maxLength;
    const delta = maxLength - minLength;
    const maxScore = sum(maxLength) - sum(delta);
    return (score * matchRatio) / maxScore;
}
/**
 * Calculates sum of first `n` numbers, e.g. 1+2+3+...n
 */
function sum(n) {
    return n * (n + 1) / 2;
}

function color(token, shortHex) {
    if (!token.r && !token.g && !token.b && !token.a) {
        return 'transparent';
    }
    else if (token.a === 1) {
        return asHex(token, shortHex);
    }
    return asRGB(token);
}
/**
 * Output given color as hex value
 * @param short Produce short value (e.g. #fff instead of #ffffff), if possible
 */
function asHex(token, short) {
    const fn = (short && isShortHex(token.r) && isShortHex(token.g) && isShortHex(token.b))
        ? toShortHex : toHex;
    return '#' + fn(token.r) + fn(token.g) + fn(token.b);
}
/**
 * Output current color as `rgba?(...)` CSS color
 */
function asRGB(token) {
    const values = [token.r, token.g, token.b];
    if (token.a !== 1) {
        values.push(frac(token.a, 8));
    }
    return `${values.length === 3 ? 'rgb' : 'rgba'}(${values.join(', ')})`;
}
function frac(num, digits = 4) {
    return num.toFixed(digits).replace(/\.?0+$/, '');
}
function isShortHex(hex) {
    return !(hex % 17);
}
function toShortHex(num) {
    return (num >> 4).toString(16);
}
function toHex(num) {
    return pad(num.toString(16), 2);
}
function pad(value, len) {
    while (value.length < len) {
        value = '0' + value;
    }
    return value;
}

function css(abbr, config) {
    var _a;
    const out = createOutputStream(config.options);
    const format = config.options['output.format'];
    if (((_a = config.context) === null || _a === void 0 ? void 0 : _a.name) === "@@section" /* Section */) {
        // For section context, filter out unmatched snippets
        abbr = abbr.filter(node => node.snippet);
    }
    for (let i = 0; i < abbr.length; i++) {
        if (format && i !== 0) {
            pushNewline(out, true);
        }
        property(abbr[i], out, config);
    }
    return out.value;
}
/**
 * Outputs given abbreviation node into output stream
 */
function property(node, out, config) {
    const isJSON = config.options['stylesheet.json'];
    if (node.name) {
        // It’s a CSS property
        const name = isJSON ? toCamelCase(node.name) : node.name;
        pushString(out, name + config.options['stylesheet.between']);
        if (node.value.length) {
            propertyValue(node, out, config);
        }
        else {
            pushField(out, 0, '');
        }
        if (isJSON) {
            // For CSS-in-JS, always finalize property with comma
            // NB: seems like `important` is not available in CSS-in-JS syntaxes
            push(out, ',');
        }
        else {
            outputImportant(node, out, true);
            push(out, config.options['stylesheet.after']);
        }
    }
    else {
        // It’s a regular snippet, output plain tokens without any additional formatting
        for (const cssVal of node.value) {
            for (const v of cssVal.value) {
                outputToken(v, out, config);
            }
        }
        outputImportant(node, out, node.value.length > 0);
    }
}
function propertyValue(node, out, config) {
    const isJSON = config.options['stylesheet.json'];
    const num = isJSON ? getSingleNumeric(node) : null;
    if (num && (!num.unit || num.unit === 'px')) {
        // For CSS-in-JS, if property contains single numeric value, output it
        // as JS number
        push(out, String(num.value));
    }
    else {
        const quote = getQuote(config);
        isJSON && push(out, quote);
        for (let i = 0; i < node.value.length; i++) {
            if (i !== 0) {
                push(out, ', ');
            }
            outputValue(node.value[i], out, config);
        }
        isJSON && push(out, quote);
    }
}
function outputImportant(node, out, separator) {
    if (node.important) {
        if (separator) {
            push(out, ' ');
        }
        push(out, '!important');
    }
}
function outputValue(value, out, config) {
    for (let i = 0, prevEnd = -1; i < value.value.length; i++) {
        const token = value.value[i];
        // Handle edge case: a field is written close to previous token like this: `foo${bar}`.
        // We should not add delimiter here
        if (i !== 0 && (token.type !== 'Field' || token.start !== prevEnd)) {
            push(out, ' ');
        }
        outputToken(token, out, config);
        prevEnd = token['end'];
    }
}
function outputToken(token, out, config) {
    if (token.type === 'ColorValue') {
        push(out, color(token, config.options['stylesheet.shortHex']));
    }
    else if (token.type === 'Literal') {
        pushString(out, token.value);
    }
    else if (token.type === 'NumberValue') {
        pushString(out, frac(token.value, 4) + token.unit);
    }
    else if (token.type === 'StringValue') {
        const quote = token.quote === 'double' ? '"' : '\'';
        pushString(out, quote + token.value + quote);
    }
    else if (token.type === 'Field') {
        pushField(out, token.index, token.name);
    }
    else if (token.type === 'FunctionCall') {
        push(out, token.name + '(');
        for (let i = 0; i < token.arguments.length; i++) {
            if (i) {
                push(out, ', ');
            }
            outputValue(token.arguments[i], out, config);
        }
        push(out, ')');
    }
}
/**
 * If value of given property is a single numeric value, returns this token
 */
function getSingleNumeric(node) {
    if (node.value.length === 1) {
        const cssVal = node.value[0];
        if (cssVal.value.length === 1 && cssVal.value[0].type === 'NumberValue') {
            return cssVal.value[0];
        }
    }
}
/**
 * Converts kebab-case string to camelCase
 */
function toCamelCase(str) {
    return str.replace(/\-(\w)/g, (_, letter) => letter.toUpperCase());
}
function getQuote(config) {
    return config.options['stylesheet.jsonDoubleQuotes'] ? '"' : '\'';
}

const gradientName = 'lg';
/**
 * Parses given Emmet abbreviation into a final abbreviation tree with all
 * required transformations applied
 */
function parse$1(abbr, config) {
    var _a;
    const snippets = ((_a = config.cache) === null || _a === void 0 ? void 0 : _a.stylesheetSnippets) || convertSnippets(config.snippets);
    if (config.cache) {
        config.cache.stylesheetSnippets = snippets;
    }
    if (typeof abbr === 'string') {
        abbr = Object(_emmetio_css_abbreviation__WEBPACK_IMPORTED_MODULE_1__["default"])(abbr, { value: isValueScope(config) });
    }
    const filteredSnippets = getSnippetsForScope(snippets, config);
    for (const node of abbr) {
        resolveNode(node, filteredSnippets, config);
    }
    return abbr;
}
/**
 * Converts given raw snippets into internal snippets representation
 */
function convertSnippets(snippets) {
    const result = [];
    for (const key of Object.keys(snippets)) {
        result.push(createSnippet(key, snippets[key]));
    }
    return nest(result);
}
/**
 * Resolves given node: finds matched CSS snippets using fuzzy match and resolves
 * keyword aliases from node value
 */
function resolveNode(node, snippets, config) {
    if (!resolveGradient(node, config)) {
        const score = config.options['stylesheet.fuzzySearchMinScore'];
        if (isValueScope(config)) {
            // Resolve as value of given CSS property
            const propName = config.context.name;
            const snippet = snippets.find(s => s.type === "Property" /* Property */ && s.property === propName);
            resolveValueKeywords(node, config, snippet, score);
            node.snippet = snippet;
        }
        else if (node.name) {
            const snippet = findBestMatch(node.name, snippets, score, true);
            node.snippet = snippet;
            if (snippet) {
                if (snippet.type === "Property" /* Property */) {
                    resolveAsProperty(node, snippet, config);
                }
                else {
                    resolveAsSnippet(node, snippet);
                }
            }
        }
    }
    if (node.name || config.context) {
        // Resolve numeric values for CSS properties only
        resolveNumericValue(node, config);
    }
    return node;
}
/**
 * Resolves CSS gradient shortcut from given property, if possible
 */
function resolveGradient(node, config) {
    let gradientFn = null;
    const cssVal = node.value.length === 1 ? node.value[0] : null;
    if (cssVal && cssVal.value.length === 1) {
        const v = cssVal.value[0];
        if (v.type === 'FunctionCall' && v.name === gradientName) {
            gradientFn = v;
        }
    }
    if (gradientFn || node.name === gradientName) {
        if (!gradientFn) {
            gradientFn = {
                type: 'FunctionCall',
                name: 'linear-gradient',
                arguments: [cssValue(field(0, ''))]
            };
        }
        else {
            gradientFn = Object.assign(Object.assign({}, gradientFn), { name: 'linear-gradient' });
        }
        if (!config.context) {
            node.name = 'background-image';
        }
        node.value = [cssValue(gradientFn)];
        return true;
    }
    return false;
}
/**
 * Resolves given parsed abbreviation node as CSS property
 */
function resolveAsProperty(node, snippet, config) {
    const abbr = node.name;
    // Check for unmatched part of abbreviation
    // For example, in `dib` abbreviation the matched part is `d` and `ib` should
    // be considered as inline value. If unmatched fragment exists, we should check
    // if it matches actual value of snippet. If either explicit value is specified
    // or unmatched fragment did not resolve to to a keyword, we should consider
    // matched snippet as invalid
    const inlineValue = getUnmatchedPart(abbr, snippet.key);
    if (inlineValue) {
        if (node.value.length) {
            // Already have value: unmatched part indicates matched snippet is invalid
            return node;
        }
        const kw = resolveKeyword(inlineValue, config, snippet);
        if (!kw) {
            return node;
        }
        node.value.push(cssValue(kw));
    }
    node.name = snippet.property;
    if (node.value.length) {
        // Replace keyword alias from current abbreviation node with matched keyword
        resolveValueKeywords(node, config, snippet);
    }
    else if (snippet.value.length) {
        const defaultValue = snippet.value[0];
        // https://github.com/emmetio/emmet/issues/558
        // We should auto-select inserted value only if there’s multiple value
        // choice
        node.value = snippet.value.length === 1 || defaultValue.some(hasField)
            ? defaultValue
            : defaultValue.map(n => wrapWithField(n, config));
    }
    return node;
}
function resolveValueKeywords(node, config, snippet, minScore) {
    for (const cssVal of node.value) {
        const value = [];
        for (const token of cssVal.value) {
            if (token.type === 'Literal') {
                value.push(resolveKeyword(token.value, config, snippet, minScore) || token);
            }
            else if (token.type === 'FunctionCall') {
                // For function calls, we should find matching function call
                // and merge arguments
                const match = resolveKeyword(token.name, config, snippet, minScore);
                if (match && match.type === 'FunctionCall') {
                    value.push(Object.assign(Object.assign({}, match), { arguments: token.arguments.concat(match.arguments.slice(token.arguments.length)) }));
                }
                else {
                    value.push(token);
                }
            }
            else {
                value.push(token);
            }
        }
        cssVal.value = value;
    }
}
/**
 * Resolves given parsed abbreviation node as a snippet: a plain code chunk
 */
function resolveAsSnippet(node, snippet) {
    // When resolving snippets, we have to do the following:
    // 1. Replace field placeholders with actual field tokens.
    // 2. If input values given, put them instead of fields
    let offset = 0;
    let m;
    const reField = /\$\{(\d+)(:[^}]+)?\}/g;
    const inputValue = node.value[0];
    const outputValue = [];
    while (m = reField.exec(snippet.value)) {
        if (offset !== m.index) {
            outputValue.push(literal(snippet.value.slice(offset, m.index)));
        }
        offset = m.index + m[0].length;
        if (inputValue && inputValue.value.length) {
            outputValue.push(inputValue.value.shift());
        }
        else {
            outputValue.push(field(Number(m[1]), m[2] ? m[2].slice(1) : ''));
        }
    }
    const tail = snippet.value.slice(offset);
    if (tail) {
        outputValue.push(literal(tail));
    }
    node.name = void 0;
    node.value = [cssValue(...outputValue)];
    return node;
}
/**
 * Finds best matching item from `items` array
 * @param abbr  Abbreviation to match
 * @param items List of items for match
 * @param minScore The minimum score the best matched item should have to be a valid match.
 */
function findBestMatch(abbr, items, minScore = 0, partialMatch = false) {
    let matchedItem = null;
    let maxScore = 0;
    for (const item of items) {
        const score = scoreMatch(abbr, getScoringPart(item), partialMatch);
        if (score === 1) {
            // direct hit, no need to look further
            return item;
        }
        if (score && score >= maxScore) {
            maxScore = score;
            matchedItem = item;
        }
    }
    return maxScore >= minScore ? matchedItem : null;
}
function getScoringPart(item) {
    return typeof item === 'string' ? item : item.key;
}
/**
 * Returns a part of `abbr` that wasn’t directly matched against `str`.
 * For example, if abbreviation `poas` is matched against `position`,
 * the unmatched part will be `as` since `a` wasn’t found in string stream
 */
function getUnmatchedPart(abbr, str) {
    for (let i = 0, lastPos = 0; i < abbr.length; i++) {
        lastPos = str.indexOf(abbr[i], lastPos);
        if (lastPos === -1) {
            return abbr.slice(i);
        }
        lastPos++;
    }
    return '';
}
/**
 * Resolves given keyword shorthand into matched snippet keyword or global keyword,
 * if possible
 */
function resolveKeyword(kw, config, snippet, minScore) {
    let ref;
    if (snippet) {
        if (ref = findBestMatch(kw, Object.keys(snippet.keywords), minScore)) {
            return snippet.keywords[ref];
        }
        for (const dep of snippet.dependencies) {
            if (ref = findBestMatch(kw, Object.keys(dep.keywords), minScore)) {
                return dep.keywords[ref];
            }
        }
    }
    if (ref = findBestMatch(kw, config.options['stylesheet.keywords'], minScore)) {
        return literal(ref);
    }
    return null;
}
/**
 * Resolves numeric values in given abbreviation node
 */
function resolveNumericValue(node, config) {
    const aliases = config.options['stylesheet.unitAliases'];
    const unitless = config.options['stylesheet.unitless'];
    for (const v of node.value) {
        for (const t of v.value) {
            if (t.type === 'NumberValue') {
                if (t.unit) {
                    t.unit = aliases[t.unit] || t.unit;
                }
                else if (t.value !== 0 && !unitless.includes(node.name)) {
                    t.unit = t.rawValue.includes('.')
                        ? config.options['stylesheet.floatUnit']
                        : config.options['stylesheet.intUnit'];
                }
            }
        }
    }
}
/**
 * Constructs CSS value token
 */
function cssValue(...args) {
    return {
        type: 'CSSValue',
        value: args
    };
}
/**
 * Constructs literal token
 */
function literal(value) {
    return { type: 'Literal', value };
}
/**
 * Constructs field token
 */
function field(index, name) {
    return { type: 'Field', index, name };
}
/**
 * Check if given value contains fields
 */
function hasField(value) {
    for (const v of value.value) {
        if (v.type === 'Field' || (v.type === 'FunctionCall' && v.arguments.some(hasField))) {
            return true;
        }
    }
    return false;
}
/**
 * Wraps tokens of given abbreviation with fields
 */
function wrapWithField(node, config, state = { index: 1 }) {
    let value = [];
    for (const v of node.value) {
        switch (v.type) {
            case 'ColorValue':
                value.push(field(state.index++, color(v, config.options['stylesheet.shortHex'])));
                break;
            case 'Literal':
                value.push(field(state.index++, v.value));
                break;
            case 'NumberValue':
                value.push(field(state.index++, `${v.value}${v.unit}`));
                break;
            case 'StringValue':
                const q = v.quote === 'single' ? '\'' : '"';
                value.push(field(state.index++, q + v.value + q));
                break;
            case 'FunctionCall':
                value.push(field(state.index++, v.name), literal('('));
                for (let i = 0, il = v.arguments.length; i < il; i++) {
                    value = value.concat(wrapWithField(v.arguments[i], config, state).value);
                    if (i !== il - 1) {
                        value.push(literal(', '));
                    }
                }
                value.push(literal(')'));
                break;
            default:
                value.push(v);
        }
    }
    return Object.assign(Object.assign({}, node), { value });
}
/**
 * Check if abbreviation should be expanded in CSS value context
 */
function isValueScope(config) {
    if (config.context) {
        return config.context.name === "@@value" /* Value */ || !config.context.name.startsWith('@@');
    }
    return false;
}
/**
 * Returns snippets for given scope
 */
function getSnippetsForScope(snippets, config) {
    if (config.context) {
        if (config.context.name === "@@section" /* Section */) {
            return snippets.filter(s => s.type === "Raw" /* Raw */);
        }
        if (config.context.name === "@@property" /* Property */) {
            return snippets.filter(s => s.type === "Property" /* Property */);
        }
    }
    return snippets;
}

var markupSnippets = {
	"a": "a[href]",
	"a:blank": "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
	"a:link": "a[href='http://${0}']",
	"a:mail": "a[href='mailto:${0}']",
	"a:tel": "a[href='tel:+${0}']",
	"abbr": "abbr[title]",
	"acr|acronym": "acronym[title]",
	"base": "base[href]/",
	"basefont": "basefont/",
	"br": "br/",
	"frame": "frame/",
	"hr": "hr/",
	"bdo": "bdo[dir]",
	"bdo:r": "bdo[dir=rtl]",
	"bdo:l": "bdo[dir=ltr]",
	"col": "col/",
	"link": "link[rel=stylesheet href]/",
	"link:css": "link[href='${1:style}.css']",
	"link:print": "link[href='${1:print}.css' media=print]",
	"link:favicon": "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
	"link:mf|link:manifest": "link[rel='manifest' href='${1:manifest.json}']",
	"link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
	"link:rss": "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
	"link:atom": "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
	"link:im|link:import": "link[rel=import href='${1:component}.html']",
	"meta": "meta/",
	"meta:utf": "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
	"meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
	"meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
	"meta:edge": "meta:compat[content='${1:ie=edge}']",
	"meta:redirect": "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
	"meta:kw": "meta[name=keywords content]",
	"meta:desc": "meta[name=description content]",
	"style": "style",
	"script": "script",
	"script:src": "script[src]",
	"img": "img[src alt]/",
	"img:s|img:srcset": "img[srcset src alt]",
	"img:z|img:sizes": "img[sizes srcset src alt]",
	"picture": "picture",
	"src|source": "source/",
	"src:sc|source:src": "source[src type]",
	"src:s|source:srcset": "source[srcset]",
	"src:t|source:type": "source[srcset type='${1:image/}']",
	"src:z|source:sizes": "source[sizes srcset]",
	"src:m|source:media": "source[media='(${1:min-width: })' srcset]",
	"src:mt|source:media:type": "source:media[type='${2:image/}']",
	"src:mz|source:media:sizes": "source:media[sizes srcset]",
	"src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
	"iframe": "iframe[src frameborder=0]",
	"embed": "embed[src type]/",
	"object": "object[data type]",
	"param": "param[name value]/",
	"map": "map[name]",
	"area": "area[shape coords href alt]/",
	"area:d": "area[shape=default]",
	"area:c": "area[shape=circle]",
	"area:r": "area[shape=rect]",
	"area:p": "area[shape=poly]",
	"form": "form[action]",
	"form:get": "form[method=get]",
	"form:post": "form[method=post]",
	"label": "label[for]",
	"input": "input[type=${1:text}]/",
	"inp": "input[name=${1} id=${1}]",
	"input:h|input:hidden": "input[type=hidden name]",
	"input:t|input:text": "inp[type=text]",
	"input:search": "inp[type=search]",
	"input:email": "inp[type=email]",
	"input:url": "inp[type=url]",
	"input:p|input:password": "inp[type=password]",
	"input:datetime": "inp[type=datetime]",
	"input:date": "inp[type=date]",
	"input:datetime-local": "inp[type=datetime-local]",
	"input:month": "inp[type=month]",
	"input:week": "inp[type=week]",
	"input:time": "inp[type=time]",
	"input:tel": "inp[type=tel]",
	"input:number": "inp[type=number]",
	"input:color": "inp[type=color]",
	"input:c|input:checkbox": "inp[type=checkbox]",
	"input:r|input:radio": "inp[type=radio]",
	"input:range": "inp[type=range]",
	"input:f|input:file": "inp[type=file]",
	"input:s|input:submit": "input[type=submit value]",
	"input:i|input:image": "input[type=image src alt]",
	"input:b|input:btn|input:button": "input[type=button value]",
	"input:reset": "input:button[type=reset]",
	"isindex": "isindex/",
	"select": "select[name=${1} id=${1}]",
	"select:d|select:disabled": "select[disabled.]",
	"opt|option": "option[value]",
	"textarea": "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
	"marquee": "marquee[behavior direction]",
	"menu:c|menu:context": "menu[type=context]",
	"menu:t|menu:toolbar": "menu[type=toolbar]",
	"video": "video[src]",
	"audio": "audio[src]",
	"html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]",
	"keygen": "keygen/",
	"command": "command/",
	"btn:s|button:s|button:submit" : "button[type=submit]",
	"btn:r|button:r|button:reset" : "button[type=reset]",
	"btn:d|button:d|button:disabled" : "button[disabled.]",
	"fst:d|fset:d|fieldset:d|fieldset:disabled" : "fieldset[disabled.]",

	"bq": "blockquote",
	"fig": "figure",
	"figc": "figcaption",
	"pic": "picture",
	"ifr": "iframe",
	"emb": "embed",
	"obj": "object",
	"cap": "caption",
	"colg": "colgroup",
	"fst": "fieldset",
	"btn": "button",
	"optg": "optgroup",
	"tarea": "textarea",
	"leg": "legend",
	"sect": "section",
	"art": "article",
	"hdr": "header",
	"ftr": "footer",
	"adr": "address",
	"dlg": "dialog",
	"str": "strong",
	"prog": "progress",
	"mn": "main",
	"tem": "template",
	"fset": "fieldset",
	"datag": "datagrid",
	"datal": "datalist",
	"kg": "keygen",
	"out": "output",
	"det": "details",
	"sum": "summary",
	"cmd": "command",

	"ri:d|ri:dpr": "img:s",
	"ri:v|ri:viewport": "img:z",
	"ri:a|ri:art": "pic>src:m+img",
	"ri:t|ri:type": "pic>src:t+img",

	"!!!": "{<!DOCTYPE html>}",
	"doc": "html[lang=${lang}]>(head>meta[charset=${charset}]+meta[http-equiv='X-UA-Compatible'][content='IE=edge']+meta:vp+title{${1:Document}})+body",
	"!|html:5": "!!!+doc",

	"c": "{<!-- ${0} -->}",
	"cc:ie": "{<!--[if IE]>${0}<![endif]-->}",
	"cc:noie": "{<!--[if !IE]><!-->${0}<!--<![endif]-->}"
};

var stylesheetSnippets = {
	"@f": "@font-face {\n\tfont-family: ${1};\n\tsrc: url(${2});\n}",
	"@ff": "@font-face {\n\tfont-family: '${1:FontName}';\n\tsrc: url('${2:FileName}.eot');\n\tsrc: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n\t\t url('${2:FileName}.woff') format('woff'),\n\t\t url('${2:FileName}.ttf') format('truetype'),\n\t\t url('${2:FileName}.svg#${1:FontName}') format('svg');\n\tfont-style: ${3:normal};\n\tfont-weight: ${4:normal};\n}",
	"@i|@import": "@import url(${0});",
	"@kf": "@keyframes ${1:identifier} {\n\t${2}\n}",
	"@m|@media": "@media ${1:screen} {\n\t${0}\n}",
	"ac": "align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly",
	"ai": "align-items:start|end|flex-start|flex-end|center|baseline|stretch",
	"anim": "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
	"animdel": "animation-delay:time",
	"animdir": "animation-direction:normal|reverse|alternate|alternate-reverse",
	"animdur": "animation-duration:${1:0}s",
	"animfm": "animation-fill-mode:both|forwards|backwards",
	"animic": "animation-iteration-count:1|infinite",
	"animn": "animation-name",
	"animps": "animation-play-state:running|paused",
	"animtf": "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
	"ap": "appearance:none",
	"as": "align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch",
	"b": "bottom",
	"bd": "border:${1:1px} ${2:solid} ${3:#000}",
	"bdb": "border-bottom:${1:1px} ${2:solid} ${3:#000}",
	"bdbc": "border-bottom-color:${1:#000}",
	"bdbi": "border-bottom-image:url(${0})",
	"bdbk": "border-break:close",
	"bdbli": "border-bottom-left-image:url(${0})|continue",
	"bdblrs": "border-bottom-left-radius",
	"bdbri": "border-bottom-right-image:url(${0})|continue",
	"bdbrrs": "border-bottom-right-radius",
	"bdbs": "border-bottom-style",
	"bdbw": "border-bottom-width",
	"bdc": "border-color:${1:#000}",
	"bdci": "border-corner-image:url(${0})|continue",
	"bdcl": "border-collapse:collapse|separate",
	"bdf": "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space",
	"bdi": "border-image:url(${0})",
	"bdl": "border-left:${1:1px} ${2:solid} ${3:#000}",
	"bdlc": "border-left-color:${1:#000}",
	"bdlen": "border-length",
	"bdli": "border-left-image:url(${0})",
	"bdls": "border-left-style",
	"bdlw": "border-left-width",
	"bdr": "border-right:${1:1px} ${2:solid} ${3:#000}",
	"bdrc": "border-right-color:${1:#000}",
	"bdri": "border-right-image:url(${0})",
	"bdrs": "border-radius",
	"bdrst": "border-right-style",
	"bdrw": "border-right-width",
	"bds": "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset",
	"bdsp": "border-spacing",
	"bdt": "border-top:${1:1px} ${2:solid} ${3:#000}",
	"bdtc": "border-top-color:${1:#000}",
	"bdti": "border-top-image:url(${0})",
	"bdtli": "border-top-left-image:url(${0})|continue",
	"bdtlrs": "border-top-left-radius",
	"bdtri": "border-top-right-image:url(${0})|continue",
	"bdtrrs": "border-top-right-radius",
	"bdts": "border-top-style",
	"bdtw": "border-top-width",
	"bdw": "border-width",
	"bfv": "backface-visibility:hidden|visible",
	"bg": "background:${1:#000}",
	"bga": "background-attachment:fixed|scroll",
	"bgbk": "background-break:bounding-box|each-box|continuous",
	"bgc": "background-color:#${1:fff}",
	"bgcp": "background-clip:padding-box|border-box|content-box|no-clip",
	"bgi": "background-image:url(${0})",
	"bgo": "background-origin:padding-box|border-box|content-box",
	"bgp": "background-position:${1:0} ${2:0}",
	"bgpx": "background-position-x",
	"bgpy": "background-position-y",
	"bgr": "background-repeat:no-repeat|repeat-x|repeat-y|space|round",
	"bgsz": "background-size:contain|cover",
	"bxsh": "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none",
	"bxsz": "box-sizing:border-box|content-box|border-box",
	"c": "color:${1:#000}",
	"cr": "color:rgb(${1:0}, ${2:0}, ${3:0})",
	"cra": "color:rgba(${1:0}, ${2:0}, ${3:0}, ${4:.5})",
	"cl": "clear:both|left|right|none",
	"cm": "/* ${0} */",
	"cnt": "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters(${0})",
	"coi": "counter-increment",
	"colm": "columns",
	"colmc": "column-count",
	"colmf": "column-fill",
	"colmg": "column-gap",
	"colmr": "column-rule",
	"colmrc": "column-rule-color",
	"colmrs": "column-rule-style",
	"colmrw": "column-rule-width",
	"colms": "column-span",
	"colmw": "column-width",
	"cor": "counter-reset",
	"cp": "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
	"cps": "caption-side:top|bottom",
	"cur": "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text",
	"d": "display:block|none|flex|inline-flex|inline|inline-block|grid|inline-grid|subgrid|list-item|run-in|compact|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
	"ec": "empty-cells:show|hide",
	"f": "font:${1:1em} ${2:sans-serif}",
	"fd": "font-display:auto|block|swap|fallback|optional",
	"fef": "font-effect:none|engrave|emboss|outline",
	"fem": "font-emphasize",
	"femp": "font-emphasize-position:before|after",
	"fems": "font-emphasize-style:none|accent|dot|circle|disc",
	"ff": "font-family:serif|sans-serif|cursive|fantasy|monospace",
	"fft": "font-family:\"Times New Roman\", Times, Baskerville, Georgia, serif",
	"ffa": "font-family:Arial, \"Helvetica Neue\", Helvetica, sans-serif",
	"ffv": "font-family:Verdana, Geneva, sans-serif",
	"fl": "float:left|right|none",
	"fs": "font-style:italic|normal|oblique",
	"fsm": "font-smoothing:antialiased|subpixel-antialiased|none",
	"fst": "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
	"fv": "font-variant:normal|small-caps",
	"fvs": "font-variation-settings:normal|inherit|initial|unset",
	"fw": "font-weight:normal|bold|bolder|lighter",
	"fx": "flex",
	"fxb": "flex-basis:fill|max-content|min-content|fit-content|content",
	"fxd": "flex-direction:row|row-reverse|column|column-reverse",
	"fxf": "flex-flow",
	"fxg": "flex-grow",
	"fxsh": "flex-shrink",
	"fxw": "flex-wrap:nowrap|wrap|wrap-reverse",
	"fsz": "font-size",
	"fsza": "font-size-adjust",
	"gtc": "grid-template-columns:repeat()|minmax()",
	"gtr": "grid-template-rows:repeat()|minmax()",
	"gta": "grid-template-areas",
	"gt": "grid-template",
	"gg": "grid-gap",
	"gcg": "grid-column-gap",
	"grg": "grid-row-gap",
	"gac": "grid-auto-columns:auto|minmax()",
	"gar": "grid-auto-rows:auto|minmax()",
	"gaf": "grid-auto-flow:row|column|dense|inherit|initial|unset",
	"gd": "grid",
	"gc": "grid-column",
	"gcs": "grid-column-start",
	"gce": "grid-column-end",
	"gr": "grid-row",
	"grs": "grid-row-start",
	"gre": "grid-row-end",
	"ga": "grid-area",
	"h": "height",
	"jc": "justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly",
	"ji": "justify-items:start|end|center|stretch",
	"js": "justify-self:start|end|center|stretch",
	"l": "left",
	"lg": "background-image:linear-gradient(${1})",
	"lh": "line-height",
	"lis": "list-style",
	"lisi": "list-style-image",
	"lisp": "list-style-position:inside|outside",
	"list": "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman",
	"lts": "letter-spacing:normal",
	"m": "margin",
	"mah": "max-height",
	"mar": "max-resolution",
	"maw": "max-width",
	"mb": "margin-bottom",
	"mih": "min-height",
	"mir": "min-resolution",
	"miw": "min-width",
	"ml": "margin-left",
	"mr": "margin-right",
	"mt": "margin-top",
	"ol": "outline",
	"olc": "outline-color:${1:#000}|invert",
	"olo": "outline-offset",
	"ols": "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset",
	"olw": "outline-width|thin|medium|thick",
	"op|opa": "opacity",
	"ord": "order",
	"ori": "orientation:landscape|portrait",
	"orp": "orphans",
	"ov": "overflow:hidden|visible|hidden|scroll|auto",
	"ovs": "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee",
	"ovx": "overflow-x:hidden|visible|hidden|scroll|auto",
	"ovy": "overflow-y:hidden|visible|hidden|scroll|auto",
	"p": "padding",
	"pb": "padding-bottom",
	"pgba": "page-break-after:auto|always|left|right",
	"pgbb": "page-break-before:auto|always|left|right",
	"pgbi": "page-break-inside:auto|avoid",
	"pl": "padding-left",
	"pos": "position:relative|absolute|relative|fixed|static",
	"pr": "padding-right",
	"pt": "padding-top",
	"q": "quotes",
	"qen": "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
	"qru": "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
	"r": "right",
	"rsz": "resize:none|both|horizontal|vertical",
	"t": "top",
	"ta": "text-align:left|center|right|justify",
	"tal": "text-align-last:left|center|right",
	"tbl": "table-layout:fixed",
	"td": "text-decoration:none|underline|overline|line-through",
	"te": "text-emphasis:none|accent|dot|circle|disc|before|after",
	"th": "text-height:auto|font-size|text-size|max-size",
	"ti": "text-indent",
	"tj": "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan",
	"to": "text-outline:${1:0} ${2:0} ${3:#000}",
	"tov": "text-overflow:ellipsis|clip",
	"tr": "text-replace",
	"trf": "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
	"trfo": "transform-origin",
	"trfs": "transform-style:preserve-3d",
	"trs": "transition:${1:prop} ${2:time}",
	"trsde": "transition-delay:${1:time}",
	"trsdu": "transition-duration:${1:time}",
	"trsp": "transition-property:${1:prop}",
	"trstf": "transition-timing-function:${1:fn}",
	"tsh": "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
	"tt": "text-transform:uppercase|lowercase|capitalize|none",
	"tw": "text-wrap:none|normal|unrestricted|suppress",
	"us": "user-select:none",
	"v": "visibility:hidden|visible|collapse",
	"va": "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub",
	"w": "width",
	"whs": "white-space:nowrap|pre|pre-wrap|pre-line|normal",
	"whsc": "white-space-collapse:normal|keep-all|loose|break-strict|break-all",
	"wid": "widows",
	"wm": "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl",
	"wob": "word-break:normal|keep-all|break-all",
	"wos": "word-spacing",
	"wow": "word-wrap:none|unrestricted|suppress|break-word|normal",
	"z": "z-index",
	"zom": "zoom:1"
};

var xslSnippets = {
    "tm|tmatch": "xsl:template[match mode]",
    "tn|tname": "xsl:template[name]",
    "call": "xsl:call-template[name]",
    "ap": "xsl:apply-templates[select mode]",
    "api": "xsl:apply-imports",
    "imp": "xsl:import[href]",
    "inc": "xsl:include[href]",
    "ch": "xsl:choose",
    "wh|xsl:when": "xsl:when[test]",
    "ot": "xsl:otherwise",
    "if": "xsl:if[test]",
    "par": "xsl:param[name]",
    "pare": "xsl:param[name select]",
    "var": "xsl:variable[name]",
    "vare": "xsl:variable[name select]",
    "wp": "xsl:with-param[name select]",
    "key": "xsl:key[name match use]",
    "elem": "xsl:element[name]",
    "attr": "xsl:attribute[name]",
    "attrs": "xsl:attribute-set[name]",
    "cp": "xsl:copy[select]",
    "co": "xsl:copy-of[select]",
    "val": "xsl:value-of[select]",
    "for|each": "xsl:for-each[select]",
    "tex": "xsl:text",
    "com": "xsl:comment",
    "msg": "xsl:message[terminate=no]",
    "fall": "xsl:fallback",
    "num": "xsl:number[value]",
    "nam": "namespace-alias[stylesheet-prefix result-prefix]",
    "pres": "xsl:preserve-space[elements]",
    "strip": "xsl:strip-space[elements]",
    "proc": "xsl:processing-instruction[name]",
    "sort": "xsl:sort[select order]",
    "choose": "xsl:choose>xsl:when+xsl:otherwise",
    "xsl": "!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{\n|}",
    "!!!": "{<?xml version=\"1.0\" encoding=\"UTF-8\"?>}"
};

var pugSnippets = {
	"!!!": "{doctype html}"
};

var variables = {
	"lang": "en",
	"locale": "en-US",
	"charset": "UTF-8",
	"indentation": "\t",
	"newline": "\n"
};

/**
 * Default syntaxes for abbreviation types
 */
const defaultSyntaxes = {
    markup: 'html',
    stylesheet: 'css'
};
const defaultOptions = {
    'inlineElements': [
        'a', 'abbr', 'acronym', 'applet', 'b', 'basefont', 'bdo',
        'big', 'br', 'button', 'cite', 'code', 'del', 'dfn', 'em', 'font', 'i',
        'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'map', 'object', 'q',
        's', 'samp', 'select', 'small', 'span', 'strike', 'strong', 'sub', 'sup',
        'textarea', 'tt', 'u', 'var'
    ],
    'output.indent': '\t',
    'output.baseIndent': '',
    'output.newline': '\n',
    'output.tagCase': '',
    'output.attributeCase': '',
    'output.attributeQuotes': 'double',
    'output.format': true,
    'output.formatLeafNode': false,
    'output.formatSkip': ['html'],
    'output.formatForce': ['body'],
    'output.inlineBreak': 3,
    'output.compactBoolean': false,
    'output.booleanAttributes': [
        'contenteditable', 'seamless', 'async', 'autofocus',
        'autoplay', 'checked', 'controls', 'defer', 'disabled', 'formnovalidate',
        'hidden', 'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'readonly',
        'required', 'reversed', 'selected', 'typemustmatch'
    ],
    'output.reverseAttributes': false,
    'output.selfClosingStyle': 'html',
    'output.field': (index, placeholder) => placeholder,
    'output.text': text => text,
    'markup.href': true,
    'comment.enabled': false,
    'comment.trigger': ['id', 'class'],
    'comment.before': '',
    'comment.after': '\n<!-- /[#ID][.CLASS] -->',
    'bem.enabled': false,
    'bem.element': '__',
    'bem.modifier': '_',
    'jsx.enabled': false,
    'stylesheet.keywords': ['auto', 'inherit', 'unset', 'none'],
    'stylesheet.unitless': ['z-index', 'line-height', 'opacity', 'font-weight', 'zoom', 'flex', 'flex-grow', 'flex-shrink'],
    'stylesheet.shortHex': true,
    'stylesheet.between': ': ',
    'stylesheet.after': ';',
    'stylesheet.intUnit': 'px',
    'stylesheet.floatUnit': 'em',
    'stylesheet.unitAliases': { e: 'em', p: '%', x: 'ex', r: 'rem' },
    'stylesheet.json': false,
    'stylesheet.jsonDoubleQuotes': false,
    'stylesheet.fuzzySearchMinScore': 0
};
const defaultConfig = {
    type: 'markup',
    syntax: 'html',
    variables,
    snippets: {},
    options: defaultOptions
};
/**
 * Default per-syntax config
 */
const syntaxConfig = {
    markup: {
        snippets: parseSnippets(markupSnippets),
    },
    xhtml: {
        options: {
            'output.selfClosingStyle': 'xhtml'
        }
    },
    xml: {
        options: {
            'output.selfClosingStyle': 'xml'
        }
    },
    xsl: {
        snippets: parseSnippets(xslSnippets),
        options: {
            'output.selfClosingStyle': 'xml'
        }
    },
    jsx: {
        options: {
            'jsx.enabled': true
        }
    },
    pug: {
        snippets: parseSnippets(pugSnippets)
    },
    stylesheet: {
        snippets: parseSnippets(stylesheetSnippets)
    },
    sass: {
        options: {
            'stylesheet.after': ''
        }
    },
    stylus: {
        options: {
            'stylesheet.between': ' ',
            'stylesheet.after': '',
        }
    }
};
/**
 * Parses raw snippets definitions with possibly multiple keys into a plan
 * snippet map
 */
function parseSnippets(snippets) {
    const result = {};
    Object.keys(snippets).forEach(k => {
        for (const name of k.split('|')) {
            result[name] = snippets[k];
        }
    });
    return result;
}
function resolveConfig(config = {}, globals = {}) {
    const type = config.type || 'markup';
    const syntax = config.syntax || defaultSyntaxes[type];
    return Object.assign(Object.assign(Object.assign({}, defaultConfig), config), { type,
        syntax, variables: mergedData(type, syntax, 'variables', config, globals), snippets: mergedData(type, syntax, 'snippets', config, globals), options: mergedData(type, syntax, 'options', config, globals) });
}
function mergedData(type, syntax, key, config, globals = {}) {
    const typeDefaults = syntaxConfig[type];
    const typeOverride = globals[type];
    const syntaxDefaults = syntaxConfig[syntax];
    const syntaxOverride = globals[syntax];
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, defaultConfig[key]), (typeDefaults && typeDefaults[key])), (syntaxDefaults && syntaxDefaults[key])), (typeOverride && typeOverride[key])), (syntaxOverride && syntaxOverride[key])), config[key]);
}

/**
 * Creates structure for scanning given string in backward direction
 */
function backwardScanner(text, start = 0) {
    return { text, start, pos: text.length };
}
/**
 * Check if given scanner position is at start of scanned text
 */
function sol(scanner) {
    return scanner.pos === scanner.start;
}
/**
 * “Peeks” character code an current scanner location without advancing it
 */
function peek$1(scanner, offset = 0) {
    return scanner.text.charCodeAt(scanner.pos - 1 + offset);
}
/**
 * Returns current character code and moves character location one symbol back
 */
function previous(scanner) {
    if (!sol(scanner)) {
        return scanner.text.charCodeAt(--scanner.pos);
    }
}
/**
 * Consumes current character code if it matches given `match` code or function
 */
function consume(scanner, match) {
    if (sol(scanner)) {
        return false;
    }
    const ok = typeof match === 'function'
        ? match(peek$1(scanner))
        : match === peek$1(scanner);
    if (ok) {
        scanner.pos--;
    }
    return !!ok;
}
function consumeWhile(scanner, match) {
    const start = scanner.pos;
    while (consume(scanner, match)) {
        // empty
    }
    return scanner.pos < start;
}

/**
 * Check if given character code is a quote
 */
function isQuote(c) {
    return c === 39 /* SingleQuote */ || c === 34 /* DoubleQuote */;
}
/**
 * Consumes quoted value, if possible
 * @return Returns `true` is value was consumed
 */
function consumeQuoted(scanner) {
    const start = scanner.pos;
    const quote = previous(scanner);
    if (isQuote(quote)) {
        while (!sol(scanner)) {
            if (previous(scanner) === quote && peek$1(scanner) !== 92 /* Escape */) {
                return true;
            }
        }
    }
    scanner.pos = start;
    return false;
}

const bracePairs = {
    [91 /* SquareL */]: 93 /* SquareR */,
    [40 /* RoundL */]: 41 /* RoundR */,
    [123 /* CurlyL */]: 125 /* CurlyR */,
};

/**
 * Check if given reader’s current position points at the end of HTML tag
 */
function isHtml(scanner) {
    const start = scanner.pos;
    if (!consume(scanner, 62 /* AngleRight */)) {
        return false;
    }
    let ok = false;
    consume(scanner, 47 /* Slash */); // possibly self-closed element
    while (!sol(scanner)) {
        consumeWhile(scanner, isWhiteSpace);
        if (consumeIdent(scanner)) {
            // ate identifier: could be a tag name, boolean attribute or unquoted
            // attribute value
            if (consume(scanner, 47 /* Slash */)) {
                // either closing tag or invalid tag
                ok = consume(scanner, 60 /* AngleLeft */);
                break;
            }
            else if (consume(scanner, 60 /* AngleLeft */)) {
                // opening tag
                ok = true;
                break;
            }
            else if (consume(scanner, isWhiteSpace)) {
                // boolean attribute
                continue;
            }
            else if (consume(scanner, 61 /* Equals */)) {
                // simple unquoted value or invalid attribute
                if (consumeIdent(scanner)) {
                    continue;
                }
                break;
            }
            else if (consumeAttributeWithUnquotedValue(scanner)) {
                // identifier was a part of unquoted value
                ok = true;
                break;
            }
            // invalid tag
            break;
        }
        if (consumeAttribute(scanner)) {
            continue;
        }
        break;
    }
    scanner.pos = start;
    return ok;
}
/**
 * Consumes HTML attribute from given string.
 * @return `true` if attribute was consumed.
 */
function consumeAttribute(scanner) {
    return consumeAttributeWithQuotedValue(scanner) || consumeAttributeWithUnquotedValue(scanner);
}
function consumeAttributeWithQuotedValue(scanner) {
    const start = scanner.pos;
    if (consumeQuoted(scanner) && consume(scanner, 61 /* Equals */) && consumeIdent(scanner)) {
        return true;
    }
    scanner.pos = start;
    return false;
}
function consumeAttributeWithUnquotedValue(scanner) {
    const start = scanner.pos;
    const stack = [];
    while (!sol(scanner)) {
        const ch = peek$1(scanner);
        if (isCloseBracket(ch)) {
            stack.push(ch);
        }
        else if (isOpenBracket(ch)) {
            if (stack.pop() !== bracePairs[ch]) {
                // Unexpected open bracket
                break;
            }
        }
        else if (!isUnquotedValue(ch)) {
            break;
        }
        scanner.pos--;
    }
    if (start !== scanner.pos && consume(scanner, 61 /* Equals */) && consumeIdent(scanner)) {
        return true;
    }
    scanner.pos = start;
    return false;
}
/**
 * Consumes HTML identifier from stream
 */
function consumeIdent(scanner) {
    return consumeWhile(scanner, isIdent);
}
/**
 * Check if given character code belongs to HTML identifier
 */
function isIdent(ch) {
    return ch === 58 /* Colon */ || ch === 45 /* Dash */ || isAlpha(ch) || isNumber(ch);
}
/**
 * Check if given character code is alpha code (letter though A to Z)
 */
function isAlpha(ch) {
    ch &= ~32; // quick hack to convert any char code to uppercase char code
    return ch >= 65 && ch <= 90; // A-Z
}
/**
 * Check if given code is a number
 */
function isNumber(ch) {
    return ch > 47 && ch < 58;
}
/**
 * Check if given code is a whitespace
 */
function isWhiteSpace(ch) {
    return ch === 32 /* Space */ || ch === 9 /* Tab */;
}
/**
 * Check if given code may belong to unquoted attribute value
 */
function isUnquotedValue(ch) {
    return !isNaN(ch) && ch !== 61 /* Equals */ && !isWhiteSpace(ch) && !isQuote(ch);
}
function isOpenBracket(ch) {
    return ch === 123 /* CurlyL */ || ch === 40 /* RoundL */ || ch === 91 /* SquareL */;
}
function isCloseBracket(ch) {
    return ch === 125 /* CurlyR */ || ch === 41 /* RoundR */ || ch === 93 /* SquareR */;
}

const code = (ch) => ch.charCodeAt(0);
const specialChars = '#.*:$-_!@%^+>/'.split('').map(code);
const defaultOptions$1 = {
    type: 'markup',
    lookAhead: true,
    prefix: ''
};
/**
 * Extracts Emmet abbreviation from given string.
 * The goal of this module is to extract abbreviation from current editor’s line,
 * e.g. like this: `<span>.foo[title=bar|]</span>` -> `.foo[title=bar]`, where
 * `|` is a current caret position.
 * @param line A text line where abbreviation should be expanded
 * @param pos Caret position in line. If not given, uses end of line
 * @param options Extracting options
 */
function extractAbbreviation(line, pos = line.length, options = {}) {
    // make sure `pos` is within line range
    const opt = Object.assign(Object.assign({}, defaultOptions$1), options);
    pos = Math.min(line.length, Math.max(0, pos == null ? line.length : pos));
    if (opt.lookAhead) {
        pos = offsetPastAutoClosed(line, pos, opt);
    }
    let ch;
    const start = getStartOffset(line, pos, opt.prefix || '');
    if (start === -1) {
        return void 0;
    }
    const scanner = backwardScanner(line, start);
    scanner.pos = pos;
    const stack = [];
    while (!sol(scanner)) {
        ch = peek$1(scanner);
        if (stack.includes(125 /* CurlyR */)) {
            if (ch === 125 /* CurlyR */) {
                stack.push(ch);
                scanner.pos--;
                continue;
            }
            if (ch !== 123 /* CurlyL */) {
                scanner.pos--;
                continue;
            }
        }
        if (isCloseBrace(ch, opt.type)) {
            stack.push(ch);
        }
        else if (isOpenBrace(ch, opt.type)) {
            if (stack.pop() !== bracePairs[ch]) {
                // unexpected brace
                break;
            }
        }
        else if (stack.includes(93 /* SquareR */) || stack.includes(125 /* CurlyR */)) {
            // respect all characters inside attribute sets or text nodes
            scanner.pos--;
            continue;
        }
        else if (isHtml(scanner) || !isAbbreviation(ch)) {
            break;
        }
        scanner.pos--;
    }
    if (!stack.length && scanner.pos !== pos) {
        // Found something, remove some invalid symbols from the
        // beginning and return abbreviation
        const abbreviation = line.slice(scanner.pos, pos).replace(/^[*+>^]+/, '');
        return {
            abbreviation,
            location: pos - abbreviation.length,
            start: options.prefix
                ? start - options.prefix.length
                : pos - abbreviation.length,
            end: pos
        };
    }
}
/**
 * Returns new `line` index which is right after characters beyound `pos` that
 * editor will likely automatically close, e.g. }, ], and quotes
 */
function offsetPastAutoClosed(line, pos, options) {
    // closing quote is allowed only as a next character
    if (isQuote(line.charCodeAt(pos))) {
        pos++;
    }
    // offset pointer until non-autoclosed character is found
    while (isCloseBrace(line.charCodeAt(pos), options.type)) {
        pos++;
    }
    return pos;
}
/**
 * Returns start offset (left limit) in `line` where we should stop looking for
 * abbreviation: it’s nearest to `pos` location of `prefix` token
 */
function getStartOffset(line, pos, prefix) {
    if (!prefix) {
        return 0;
    }
    const scanner = backwardScanner(line);
    const compiledPrefix = prefix.split('').map(code);
    scanner.pos = pos;
    let result;
    while (!sol(scanner)) {
        if (consumePair(scanner, 93 /* SquareR */, 91 /* SquareL */) || consumePair(scanner, 125 /* CurlyR */, 123 /* CurlyL */)) {
            continue;
        }
        result = scanner.pos;
        if (consumeArray(scanner, compiledPrefix)) {
            return result;
        }
        scanner.pos--;
    }
    return -1;
}
/**
 * Consumes full character pair, if possible
 */
function consumePair(scanner, close, open) {
    const start = scanner.pos;
    if (consume(scanner, close)) {
        while (!sol(scanner)) {
            if (consume(scanner, open)) {
                return true;
            }
            scanner.pos--;
        }
    }
    scanner.pos = start;
    return false;
}
/**
 * Consumes all character codes from given array, right-to-left, if possible
 */
function consumeArray(scanner, arr) {
    const start = scanner.pos;
    let consumed = false;
    for (let i = arr.length - 1; i >= 0 && !sol(scanner); i--) {
        if (!consume(scanner, arr[i])) {
            break;
        }
        consumed = i === 0;
    }
    if (!consumed) {
        scanner.pos = start;
    }
    return consumed;
}
function isAbbreviation(ch) {
    return (ch > 64 && ch < 91) // uppercase letter
        || (ch > 96 && ch < 123) // lowercase letter
        || (ch > 47 && ch < 58) // number
        || specialChars.includes(ch); // special character
}
function isOpenBrace(ch, syntax) {
    return ch === 40 /* RoundL */ || (syntax === 'markup' && (ch === 91 /* SquareL */ || ch === 123 /* CurlyL */));
}
function isCloseBrace(ch, syntax) {
    return ch === 41 /* RoundR */ || (syntax === 'markup' && (ch === 93 /* SquareR */ || ch === 125 /* CurlyR */));
}

function expandAbbreviation(abbr, config) {
    const resolvedConfig = resolveConfig(config);
    return resolvedConfig.type === 'stylesheet'
        ? stylesheet(abbr, resolvedConfig)
        : markup(abbr, resolvedConfig);
}
/**
 * Expands given *markup* abbreviation (e.g. regular Emmet abbreviation that
 * produces structured output like HTML) and outputs it according to options
 * provided in config
 */
function markup(abbr, config) {
    return stringify(parse(abbr, config), config);
}
/**
 * Expands given *stylesheet* abbreviation (a special Emmet abbreviation designed for
 * stylesheet languages like CSS, SASS etc.) and outputs it according to options
 * provided in config
 */
function stylesheet(abbr, config) {
    return css(parse$1(abbr, config), config);
}

/* harmony default export */ __webpack_exports__["default"] = (expandAbbreviation);

//# sourceMappingURL=emmet.es.js.map


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convert", function() { return convert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return abbreviation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony import */ var _emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);


function tokenScanner(tokens) {
    return {
        tokens,
        start: 0,
        pos: 0,
        size: tokens.length
    };
}
function peek(scanner) {
    return scanner.tokens[scanner.pos];
}
function next(scanner) {
    return scanner.tokens[scanner.pos++];
}
function slice(scanner, from = scanner.start, to = scanner.pos) {
    return scanner.tokens.slice(from, to);
}
function readable(scanner) {
    return scanner.pos < scanner.size;
}
function consume(scanner, test) {
    const token = peek(scanner);
    if (token && test(token)) {
        scanner.pos++;
        return true;
    }
    return false;
}
function error(scanner, message, token = peek(scanner)) {
    if (token && token.start != null) {
        message += ` at ${token.start}`;
    }
    const err = new Error(message);
    err['pos'] = token && token.start;
    return err;
}

function abbreviation(abbr, options = {}) {
    const scanner = tokenScanner(abbr);
    const result = statements(scanner, options);
    if (readable(scanner)) {
        throw error(scanner, 'Unexpected character');
    }
    return result;
}
function statements(scanner, options) {
    const result = {
        type: 'TokenGroup',
        elements: []
    };
    let ctx = result;
    let node;
    const stack = [];
    while (readable(scanner)) {
        if (node = element(scanner, options) || group(scanner, options)) {
            ctx.elements.push(node);
            if (consume(scanner, isChildOperator)) {
                stack.push(ctx);
                ctx = node;
            }
            else if (consume(scanner, isSiblingOperator)) {
                continue;
            }
            else if (consume(scanner, isClimbOperator)) {
                do {
                    if (stack.length) {
                        ctx = stack.pop();
                    }
                } while (consume(scanner, isClimbOperator));
            }
        }
        else {
            break;
        }
    }
    return result;
}
/**
 * Consumes group from given scanner
 */
function group(scanner, options) {
    if (consume(scanner, isGroupStart)) {
        const result = statements(scanner, options);
        const token = next(scanner);
        if (isBracket(token, 'group', false)) {
            result.repeat = repeater(scanner);
        }
        return result;
    }
}
/**
 * Consumes single element from given scanner
 */
function element(scanner, options) {
    let attr;
    const elem = {
        type: 'TokenElement',
        name: void 0,
        attributes: void 0,
        value: void 0,
        repeat: void 0,
        selfClose: false,
        elements: []
    };
    if (elementName(scanner, options)) {
        elem.name = slice(scanner);
    }
    while (readable(scanner)) {
        scanner.start = scanner.pos;
        if (!elem.repeat && !isEmpty(elem) && consume(scanner, isRepeater)) {
            elem.repeat = scanner.tokens[scanner.pos - 1];
        }
        else if (!elem.value && text(scanner)) {
            elem.value = getText(scanner);
        }
        else if (attr = shortAttribute(scanner, 'id', options) || shortAttribute(scanner, 'class', options) || attributeSet(scanner)) {
            if (!elem.attributes) {
                elem.attributes = Array.isArray(attr) ? attr.slice() : [attr];
            }
            else {
                elem.attributes = elem.attributes.concat(attr);
            }
        }
        else {
            if (!isEmpty(elem) && consume(scanner, isCloseOperator)) {
                elem.selfClose = true;
                if (!elem.repeat && consume(scanner, isRepeater)) {
                    elem.repeat = scanner.tokens[scanner.pos - 1];
                }
            }
            break;
        }
    }
    return !isEmpty(elem) ? elem : void 0;
}
/**
 * Consumes attribute set from given scanner
 */
function attributeSet(scanner) {
    if (consume(scanner, isAttributeSetStart)) {
        const attributes = [];
        let attr;
        while (readable(scanner)) {
            if (attr = attribute(scanner)) {
                attributes.push(attr);
            }
            else if (consume(scanner, isAttributeSetEnd)) {
                break;
            }
            else if (!consume(scanner, isWhiteSpace)) {
                throw error(scanner, `Unexpected "${peek(scanner).type}" token`);
            }
        }
        return attributes;
    }
}
/**
 * Consumes attribute shorthand (class or id) from given scanner
 */
function shortAttribute(scanner, type, options) {
    if (isOperator(peek(scanner), type)) {
        scanner.pos++;
        const attr = {
            name: [createLiteral(type)]
        };
        // Consume expression after shorthand start for React-like components
        if (options.jsx && text(scanner)) {
            attr.value = getText(scanner);
            attr.expression = true;
        }
        else {
            attr.value = literal(scanner) ? slice(scanner) : void 0;
        }
        return attr;
    }
}
/**
 * Consumes single attribute from given scanner
 */
function attribute(scanner) {
    if (quoted(scanner)) {
        // Consumed quoted value: it’s a value for default attribute
        return {
            value: slice(scanner)
        };
    }
    if (literal(scanner, true)) {
        return {
            name: slice(scanner),
            value: consume(scanner, isEquals) && (quoted(scanner) || literal(scanner, true))
                ? slice(scanner)
                : void 0
        };
    }
}
function repeater(scanner) {
    return isRepeater(peek(scanner))
        ? scanner.tokens[scanner.pos++]
        : void 0;
}
/**
 * Consumes quoted value from given scanner, if possible
 */
function quoted(scanner) {
    const start = scanner.pos;
    const quote = peek(scanner);
    if (isQuote(quote)) {
        scanner.pos++;
        while (readable(scanner)) {
            if (isQuote(next(scanner), quote.single)) {
                scanner.start = start;
                return true;
            }
        }
        throw error(scanner, 'Unclosed quote', quote);
    }
    return false;
}
/**
 * Consumes literal (unquoted value) from given scanner
 */
function literal(scanner, allowBrackets) {
    const start = scanner.pos;
    const brackets = {
        attribute: 0,
        expression: 0,
        group: 0
    };
    while (readable(scanner)) {
        const token = peek(scanner);
        if (brackets.expression) {
            // If we’re inside expression, we should consume all content in it
            if (isBracket(token, 'expression')) {
                brackets[token.context] += token.open ? 1 : -1;
            }
        }
        else if (isQuote(token) || isOperator(token) || isWhiteSpace(token) || isRepeater(token)) {
            break;
        }
        else if (isBracket(token)) {
            if (!allowBrackets) {
                break;
            }
            if (token.open) {
                brackets[token.context]++;
            }
            else if (!brackets[token.context]) {
                // Stop if found unmatched closing brace: it must be handled
                // by parent consumer
                break;
            }
            else {
                brackets[token.context]--;
            }
        }
        scanner.pos++;
    }
    if (start !== scanner.pos) {
        scanner.start = start;
        return true;
    }
    return false;
}
/**
 * Consumes element name from given scanner
 */
function elementName(scanner, options) {
    const start = scanner.pos;
    if (options.jsx && consume(scanner, isCapitalizedLiteral)) {
        // Check for edge case: consume immediate capitalized class names
        // for React-like components, e.g. `Foo.Bar.Baz`
        while (readable(scanner)) {
            const { pos } = scanner;
            if (!consume(scanner, isClassNameOperator) || !consume(scanner, isCapitalizedLiteral)) {
                scanner.pos = pos;
                break;
            }
        }
    }
    while (readable(scanner) && consume(scanner, isElementName)) {
        // empty
    }
    if (scanner.pos !== start) {
        scanner.start = start;
        return true;
    }
    return false;
}
/**
 * Consumes text value from given scanner
 */
function text(scanner) {
    const start = scanner.pos;
    if (consume(scanner, isTextStart)) {
        let brackets = 0;
        while (readable(scanner)) {
            const token = next(scanner);
            if (isBracket(token, 'expression')) {
                if (token.open) {
                    brackets++;
                }
                else if (!brackets) {
                    break;
                }
                else {
                    brackets--;
                }
            }
        }
        scanner.start = start;
        return true;
    }
    return false;
}
function getText(scanner) {
    let from = scanner.start;
    let to = scanner.pos;
    if (isBracket(scanner.tokens[from], 'expression', true)) {
        from++;
    }
    if (isBracket(scanner.tokens[to - 1], 'expression', false)) {
        to--;
    }
    return slice(scanner, from, to);
}
function isBracket(token, context, isOpen) {
    return Boolean(token && token.type === 'Bracket'
        && (!context || token.context === context)
        && (isOpen == null || token.open === isOpen));
}
function isOperator(token, type) {
    return Boolean(token && token.type === 'Operator' && (!type || token.operator === type));
}
function isQuote(token, isSingle) {
    return Boolean(token && token.type === 'Quote' && (isSingle == null || token.single === isSingle));
}
function isWhiteSpace(token) {
    return Boolean(token && token.type === 'WhiteSpace');
}
function isEquals(token) {
    return isOperator(token, 'equal');
}
function isRepeater(token) {
    return Boolean(token && token.type === 'Repeater');
}
function isLiteral(token) {
    return token.type === 'Literal';
}
function isCapitalizedLiteral(token) {
    if (isLiteral(token)) {
        const ch = token.value.charCodeAt(0);
        return ch >= 65 && ch <= 90;
    }
    return false;
}
function isElementName(token) {
    return token.type === 'Literal' || token.type === 'RepeaterNumber' || token.type === 'RepeaterPlaceholder';
}
function isClassNameOperator(token) {
    return isOperator(token, 'class');
}
function isAttributeSetStart(token) {
    return isBracket(token, 'attribute', true);
}
function isAttributeSetEnd(token) {
    return isBracket(token, 'attribute', false);
}
function isTextStart(token) {
    return isBracket(token, 'expression', true);
}
function isGroupStart(token) {
    return isBracket(token, 'group', true);
}
function createLiteral(value) {
    return { type: 'Literal', value };
}
function isEmpty(elem) {
    return !elem.name && !elem.value && !elem.attributes;
}
function isChildOperator(token) {
    return isOperator(token, 'child');
}
function isSiblingOperator(token) {
    return isOperator(token, 'sibling');
}
function isClimbOperator(token) {
    return isOperator(token, 'climb');
}
function isCloseOperator(token) {
    return isOperator(token, 'close');
}

/**
 * If consumes escape character, sets current stream range to escaped value
 */
function escaped(scanner) {
    if (scanner.eat(92 /* Escape */)) {
        scanner.start = scanner.pos;
        if (!scanner.eof()) {
            scanner.pos++;
        }
        return true;
    }
    return false;
}

function tokenize(source) {
    const scanner = new _emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["default"](source);
    const result = [];
    const ctx = {
        group: 0,
        attribute: 0,
        expression: 0,
        quote: 0
    };
    let ch = 0;
    let token;
    while (!scanner.eof()) {
        ch = scanner.peek();
        token = getToken(scanner, ctx);
        if (token) {
            result.push(token);
            if (token.type === 'Quote') {
                ctx.quote = ch === ctx.quote ? 0 : ch;
            }
            else if (token.type === 'Bracket') {
                ctx[token.context] += token.open ? 1 : -1;
            }
        }
        else {
            throw scanner.error('Unexpected character');
        }
    }
    return result;
}
/**
 * Returns next token from given scanner, if possible
 */
function getToken(scanner, ctx) {
    return field(scanner, ctx)
        || repeaterPlaceholder(scanner)
        || repeaterNumber(scanner)
        || repeater$1(scanner)
        || whiteSpace(scanner)
        || literal$1(scanner, ctx)
        || operator(scanner)
        || quote(scanner)
        || bracket(scanner);
}
/**
 * Consumes literal from given scanner
 */
function literal$1(scanner, ctx) {
    const start = scanner.pos;
    let value = '';
    while (!scanner.eof()) {
        // Consume escaped sequence no matter of context
        if (escaped(scanner)) {
            value += scanner.current();
            continue;
        }
        const ch = scanner.peek();
        if (ch === ctx.quote || ch === 36 /* Dollar */ || isAllowedOperator(ch, ctx)) {
            // 1. Found matching quote
            // 2. The `$` character has special meaning in every context
            // 3. Depending on context, some characters should be treated as operators
            break;
        }
        if (ctx.expression && ch === 125 /* CurlyBracketClose */) {
            break;
        }
        if (!ctx.quote && !ctx.expression) {
            // Consuming element name
            if (!ctx.attribute && !isElementName$1(ch)) {
                break;
            }
            if (isAllowedSpace(ch, ctx) || isAllowedRepeater(ch, ctx) || Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isQuote"])(ch) || bracketType(ch)) {
                // Stop for characters not allowed in unquoted literal
                break;
            }
        }
        value += scanner.string[scanner.pos++];
    }
    if (start !== scanner.pos) {
        scanner.start = start;
        return {
            type: 'Literal',
            value,
            start,
            end: scanner.pos
        };
    }
}
/**
 * Consumes white space characters as string literal from given scanner
 */
function whiteSpace(scanner) {
    const start = scanner.pos;
    if (scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isSpace"])) {
        return {
            type: 'WhiteSpace',
            start,
            end: scanner.pos,
            value: scanner.substring(start, scanner.pos)
        };
    }
}
/**
 * Consumes quote from given scanner
 */
function quote(scanner) {
    const ch = scanner.peek();
    if (Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isQuote"])(ch)) {
        return {
            type: 'Quote',
            single: ch === 39 /* SingleQuote */,
            start: scanner.pos++,
            end: scanner.pos
        };
    }
}
/**
 * Consumes bracket from given scanner
 */
function bracket(scanner) {
    const ch = scanner.peek();
    const context = bracketType(ch);
    if (context) {
        return {
            type: 'Bracket',
            open: isOpenBracket(ch),
            context,
            start: scanner.pos++,
            end: scanner.pos
        };
    }
}
/**
 * Consumes operator from given scanner
 */
function operator(scanner) {
    const op = operatorType(scanner.peek());
    if (op) {
        return {
            type: 'Operator',
            operator: op,
            start: scanner.pos++,
            end: scanner.pos
        };
    }
}
/**
 * Consumes node repeat token from current stream position and returns its
 * parsed value
 */
function repeater$1(scanner) {
    const start = scanner.pos;
    if (scanner.eat(42 /* Asterisk */)) {
        scanner.start = scanner.pos;
        let count = 1;
        let implicit = false;
        if (scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])) {
            count = Number(scanner.current());
        }
        else {
            implicit = true;
        }
        return {
            type: 'Repeater',
            count,
            value: 0,
            implicit,
            start,
            end: scanner.pos
        };
    }
}
/**
 * Consumes repeater placeholder `$#` from given scanner
 */
function repeaterPlaceholder(scanner) {
    const start = scanner.pos;
    if (scanner.eat(36 /* Dollar */) && scanner.eat(35 /* Hash */)) {
        return {
            type: 'RepeaterPlaceholder',
            value: void 0,
            start,
            end: scanner.pos
        };
    }
    scanner.pos = start;
}
/**
 * Consumes numbering token like `$` from given scanner state
 */
function repeaterNumber(scanner) {
    const start = scanner.pos;
    if (scanner.eatWhile(36 /* Dollar */)) {
        const size = scanner.pos - start;
        let reverse = false;
        let base = 1;
        let parent = 0;
        if (scanner.eat(64 /* At */)) {
            // Consume numbering modifiers
            while (scanner.eat(94 /* Climb */)) {
                parent++;
            }
            reverse = scanner.eat(45 /* Dash */);
            scanner.start = scanner.pos;
            if (scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])) {
                base = Number(scanner.current());
            }
        }
        scanner.start = start;
        return {
            type: 'RepeaterNumber',
            size,
            reverse,
            base,
            parent,
            start,
            end: scanner.pos
        };
    }
}
function field(scanner, ctx) {
    const start = scanner.pos;
    // Fields are allowed inside expressions and attributes
    if ((ctx.expression || ctx.attribute) && scanner.eat(36 /* Dollar */) && scanner.eat(123 /* CurlyBracketOpen */)) {
        scanner.start = scanner.pos;
        let index;
        let name = '';
        if (scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])) {
            // It’s a field
            index = Number(scanner.current());
            name = scanner.eat(58 /* Colon */) ? consumePlaceholder(scanner) : '';
        }
        else if (Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isAlpha"])(scanner.peek())) {
            // It’s a variable
            name = consumePlaceholder(scanner);
        }
        if (scanner.eat(125 /* CurlyBracketClose */)) {
            return {
                type: 'Field',
                index, name,
                start,
                end: scanner.pos
            };
        }
        throw scanner.error('Expecting }');
    }
    // If we reached here then there’s no valid field here, revert
    // back to starting position
    scanner.pos = start;
}
/**
 * Consumes a placeholder: value right after `:` in field. Could be empty
 */
function consumePlaceholder(stream) {
    const stack = [];
    stream.start = stream.pos;
    while (!stream.eof()) {
        if (stream.eat(123 /* CurlyBracketOpen */)) {
            stack.push(stream.pos);
        }
        else if (stream.eat(125 /* CurlyBracketClose */)) {
            if (!stack.length) {
                stream.pos--;
                break;
            }
            stack.pop();
        }
        else {
            stream.pos++;
        }
    }
    if (stack.length) {
        stream.pos = stack.pop();
        throw stream.error(`Expecting }`);
    }
    return stream.current();
}
/**
 * Check if given character code is an operator and it’s allowed in current context
 */
function isAllowedOperator(ch, ctx) {
    const op = operatorType(ch);
    if (!op || ctx.quote || ctx.expression) {
        // No operators inside quoted values or expressions
        return false;
    }
    // Inside attributes, only `equals` is allowed
    return !ctx.attribute || op === 'equal';
}
/**
 * Check if given character is a space character and is allowed to be consumed
 * as a space token in current context
 */
function isAllowedSpace(ch, ctx) {
    return Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isSpace"])(ch) && !ctx.expression;
}
/**
 * Check if given character can be consumed as repeater in current context
 */
function isAllowedRepeater(ch, ctx) {
    return ch === 42 /* Asterisk */ && !ctx.attribute && !ctx.expression;
}
/**
 * If given character is a bracket, returns it’s type
 */
function bracketType(ch) {
    if (ch === 40 /* RoundBracketOpen */ || ch === 41 /* RoundBracketClose */) {
        return 'group';
    }
    if (ch === 91 /* SquareBracketOpen */ || ch === 93 /* SquareBracketClose */) {
        return 'attribute';
    }
    if (ch === 123 /* CurlyBracketOpen */ || ch === 125 /* CurlyBracketClose */) {
        return 'expression';
    }
}
/**
 * If given character is an operator, returns it’s type
 */
function operatorType(ch) {
    return (ch === 62 /* Child */ && 'child')
        || (ch === 43 /* Sibling */ && 'sibling')
        || (ch === 94 /* Climb */ && 'climb')
        || (ch === 46 /* Dot */ && 'class')
        || (ch === 35 /* Hash */ && 'id')
        || (ch === 47 /* Slash */ && 'close')
        || (ch === 61 /* Equals */ && 'equal')
        || void 0;
}
/**
 * Check if given character is an open bracket
 */
function isOpenBracket(ch) {
    return ch === 123 /* CurlyBracketOpen */
        || ch === 91 /* SquareBracketOpen */
        || ch === 40 /* RoundBracketOpen */;
}
/**
 * Check if given character is allowed in element name
 */
function isElementName$1(ch) {
    return Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isAlphaNumericWord"])(ch)
        || ch === 45 /* Dash */
        || ch === 58 /* Colon */
        || ch === 33 /* Excl */;
}

const operators = {
    child: '>',
    class: '.',
    climb: '^',
    id: '#',
    equal: '=',
    close: '/',
    sibling: '+'
};
const tokenVisitor = {
    Literal(token) {
        return token.value;
    },
    Quote(token) {
        return token.single ? '\'' : '"';
    },
    Bracket(token) {
        if (token.context === 'attribute') {
            return token.open ? '[' : ']';
        }
        else if (token.context === 'expression') {
            return token.open ? '{' : '}';
        }
        else {
            return token.open ? '(' : '}';
        }
    },
    Operator(token) {
        return operators[token.operator];
    },
    Field(token, state) {
        if (token.index != null) {
            // It’s a field: by default, return TextMate-compatible field
            return token.name
                ? `\${${token.index}:${token.name}}`
                : `\${${token.index}`;
        }
        else if (token.name) {
            // It’s a variable
            return state.getVariable(token.name);
        }
        return '';
    },
    RepeaterPlaceholder(token, state) {
        // Find closest implicit repeater
        let repeater;
        for (let i = state.repeaters.length - 1; i >= 0; i--) {
            if (state.repeaters[i].implicit) {
                repeater = state.repeaters[i];
                break;
            }
        }
        state.inserted = true;
        return state.getText(repeater && repeater.value);
    },
    RepeaterNumber(token, state) {
        let value = 1;
        const lastIx = state.repeaters.length - 1;
        // const repeaterIx = Math.max(0, state.repeaters.length - 1 - token.parent);
        const repeater = state.repeaters[lastIx];
        if (repeater) {
            value = token.reverse
                ? token.base + repeater.count - repeater.value - 1
                : token.base + repeater.value;
            if (token.parent) {
                const parentIx = Math.max(0, lastIx - token.parent);
                if (parentIx !== lastIx) {
                    const parentRepeater = state.repeaters[parentIx];
                    value += repeater.count * parentRepeater.value;
                }
            }
        }
        let result = String(value);
        while (result.length < token.size) {
            result = '0' + result;
        }
        return result;
    },
    WhiteSpace(token) {
        return token.value;
    }
};
/**
 * Converts given value token to string
 */
function stringify(token, state) {
    if (!tokenVisitor[token.type]) {
        throw new Error(`Unknown token ${token.type}`);
    }
    return tokenVisitor[token.type](token, state);
}

const urlRegex = /^((https?:|ftp:|file:)?\/\/|(www|ftp)\.)[^ ]*$/;
const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/;
/**
 * Converts given token-based abbreviation into simplified and unrolled node-based
 * abbreviation
 */
function convert(abbr, options = {}) {
    let textInserted = false;
    let cleanText;
    if (options.text) {
        if (Array.isArray(options.text)) {
            cleanText = options.text.filter(s => s.trim());
        }
        else {
            cleanText = options.text;
        }
    }
    const result = {
        type: 'Abbreviation',
        children: convertGroup(abbr, {
            inserted: false,
            repeaters: [],
            text: options.text,
            cleanText,
            repeatGuard: options.maxRepeat || Number.POSITIVE_INFINITY,
            getText(pos) {
                var _a;
                textInserted = true;
                let value;
                if (Array.isArray(options.text)) {
                    if (pos !== undefined && pos >= 0 && pos < cleanText.length) {
                        return cleanText[pos];
                    }
                    value = pos !== undefined ? options.text[pos] : options.text.join('\n');
                }
                else {
                    value = (_a = options.text) !== null && _a !== void 0 ? _a : '';
                }
                return value;
            },
            getVariable(name) {
                const varValue = options.variables && options.variables[name];
                return varValue != null ? varValue : name;
            }
        })
    };
    if (options.text != null && !textInserted) {
        // Text given but no implicitly repeated elements: insert it into
        // deepest child
        const deepest = deepestNode(last(result.children));
        if (deepest) {
            const text = Array.isArray(options.text) ? options.text.join('\n') : options.text;
            insertText(deepest, text);
            if (deepest.name === 'a' && options.href) {
                // Automatically update value of `<a>` element if inserting URL or email
                insertHref(deepest, text);
            }
        }
    }
    return result;
}
/**
 * Converts given statement to abbreviation nodes
 */
function convertStatement(node, state) {
    let result = [];
    if (node.repeat) {
        // Node is repeated: we should create copies of given node
        // and supply context token with actual repeater state
        const original = node.repeat;
        const repeat = Object.assign({}, original);
        repeat.count = repeat.implicit && Array.isArray(state.text)
            ? state.cleanText.length
            : (repeat.count || 1);
        let items;
        state.repeaters.push(repeat);
        for (let i = 0; i < repeat.count; i++) {
            repeat.value = i;
            node.repeat = repeat;
            items = isGroup(node)
                ? convertGroup(node, state)
                : convertElement(node, state);
            if (repeat.implicit && !state.inserted) {
                // It’s an implicit repeater but no repeater placeholders found inside,
                // we should insert text into deepest node
                const target = last(items);
                const deepest = target && deepestNode(target);
                if (deepest) {
                    insertText(deepest, state.getText(repeat.value));
                }
            }
            result = result.concat(items);
            // We should output at least one repeated item even if it’s reached
            // repeat limit
            if (--state.repeatGuard <= 0) {
                break;
            }
        }
        state.repeaters.pop();
        node.repeat = original;
        if (repeat.implicit) {
            state.inserted = true;
        }
    }
    else {
        result = result.concat(isGroup(node) ? convertGroup(node, state) : convertElement(node, state));
    }
    return result;
}
function convertElement(node, state) {
    let children = [];
    const elem = {
        type: 'AbbreviationNode',
        name: node.name && stringifyName(node.name, state),
        value: node.value && stringifyValue(node.value, state),
        attributes: void 0,
        children,
        repeat: node.repeat && Object.assign({}, node.repeat),
        selfClosing: node.selfClose,
    };
    let result = [elem];
    for (const child of node.elements) {
        children = children.concat(convertStatement(child, state));
    }
    if (node.attributes) {
        elem.attributes = [];
        for (const attr of node.attributes) {
            elem.attributes.push(convertAttribute(attr, state));
        }
    }
    // In case if current node is a text-only snippet without fields, we should
    // put all children as siblings
    if (!elem.name && !elem.attributes && elem.value && !elem.value.some(isField)) {
        // XXX it’s unclear that `children` is not bound to `elem`
        // due to concat operation
        result = result.concat(children);
    }
    else {
        elem.children = children;
    }
    return result;
}
function convertGroup(node, state) {
    let result = [];
    for (const child of node.elements) {
        result = result.concat(convertStatement(child, state));
    }
    if (node.repeat) {
        result = attachRepeater(result, node.repeat);
    }
    return result;
}
function convertAttribute(node, state) {
    let implied = false;
    let isBoolean = false;
    let valueType = node.expression ? 'expression' : 'raw';
    let value;
    const name = node.name && stringifyName(node.name, state);
    if (name && name[0] === '!') {
        implied = true;
    }
    if (name && name[name.length - 1] === '.') {
        isBoolean = true;
    }
    if (node.value) {
        const tokens = node.value.slice();
        if (isQuote(tokens[0])) {
            // It’s a quoted value: remove quotes from output but mark attribute
            // value as quoted
            const quote = tokens.shift();
            if (tokens.length && last(tokens).type === quote.type) {
                tokens.pop();
            }
            valueType = quote.single ? 'singleQuote' : 'doubleQuote';
        }
        else if (isBracket(tokens[0], 'expression', true)) {
            // Value is expression: remove brackets but mark value type
            valueType = 'expression';
            tokens.shift();
            if (isBracket(last(tokens), 'expression', false)) {
                tokens.pop();
            }
        }
        value = stringifyValue(tokens, state);
    }
    return {
        name: isBoolean || implied
            ? name.slice(implied ? 1 : 0, isBoolean ? -1 : void 0)
            : name,
        value,
        boolean: isBoolean,
        implied,
        valueType
    };
}
/**
 * Converts given token list to string
 */
function stringifyName(tokens, state) {
    let str = '';
    for (let i = 0; i < tokens.length; i++) {
        str += stringify(tokens[i], state);
    }
    return str;
}
/**
 * Converts given token list to value list
 */
function stringifyValue(tokens, state) {
    const result = [];
    let str = '';
    for (let i = 0, token; i < tokens.length; i++) {
        token = tokens[i];
        if (isField(token)) {
            // We should keep original fields in output since some editors has their
            // own syntax for field or doesn’t support fields at all so we should
            // capture actual field location in output stream
            if (str) {
                result.push(str);
                str = '';
            }
            result.push(token);
        }
        else {
            str += stringify(token, state);
        }
    }
    if (str) {
        result.push(str);
    }
    return result;
}
function isGroup(node) {
    return node.type === 'TokenGroup';
}
function isField(token) {
    return typeof token === 'object' && token.type === 'Field' && token.index != null;
}
function last(arr) {
    return arr[arr.length - 1];
}
function deepestNode(node) {
    return node.children.length ? deepestNode(last(node.children)) : node;
}
function insertText(node, text) {
    if (node.value) {
        const lastToken = last(node.value);
        if (typeof lastToken === 'string') {
            node.value[node.value.length - 1] += text;
        }
        else {
            node.value.push(text);
        }
    }
    else {
        node.value = [text];
    }
}
function insertHref(node, text) {
    var _a;
    let href = '';
    if (urlRegex.test(text)) {
        href = text;
        if (!/\w+:/.test(href) && !href.startsWith('//')) {
            href = `http://${href}`;
        }
    }
    else if (emailRegex.test(text)) {
        href = `mailto:${text}`;
    }
    const hrefAttribute = (_a = node.attributes) === null || _a === void 0 ? void 0 : _a.find(attr => attr.name === 'href');
    if (!hrefAttribute) {
        node.attributes = [{ name: 'href', value: [href], valueType: 'doubleQuote' }];
    }
    else if (!hrefAttribute.value) {
        hrefAttribute.value = [href];
    }
}
function attachRepeater(items, repeater) {
    for (const item of items) {
        if (!item.repeat) {
            item.repeat = Object.assign({}, repeater);
        }
    }
    return items;
}

/**
 * Parses given abbreviation into node tree
 */
function parseAbbreviation(abbr, options) {
    try {
        const tokens = typeof abbr === 'string' ? tokenize(abbr) : abbr;
        return convert(abbreviation(tokens, options), options);
    }
    catch (err) {
        if (err instanceof _emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["ScannerError"] && typeof abbr === 'string') {
            err.message += `\n${abbr}\n${'-'.repeat(err.pos)}^`;
        }
        throw err;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (parseAbbreviation);

//# sourceMappingURL=abbreviation.es.js.map


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerError", function() { return ScannerError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eatPair", function() { return eatPair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eatQuoted", function() { return eatQuoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlpha", function() { return isAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphaNumeric", function() { return isAlphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphaNumericWord", function() { return isAlphaNumericWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlphaWord", function() { return isAlphaWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuote", function() { return isQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpace", function() { return isSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWhiteSpace", function() { return isWhiteSpace; });
const defaultQuotedOptions = {
    escape: 92,
    throws: false
};
/**
 * Check if given code is a number
 */
function isNumber(code) {
    return code > 47 && code < 58;
}
/**
 * Check if given character code is alpha code (letter through A to Z)
 */
function isAlpha(code, from, to) {
    from = from || 65; // A
    to = to || 90; // Z
    code &= ~32; // quick hack to convert any char code to uppercase char code
    return code >= from && code <= to;
}
/**
 * Check if given character code is alpha-numeric (letter through A to Z or number)
 */
function isAlphaNumeric(code) {
    return isNumber(code) || isAlpha(code);
}
function isAlphaNumericWord(code) {
    return isNumber(code) || isAlphaWord(code);
}
function isAlphaWord(code) {
    return code === 95 /* _ */ || isAlpha(code);
}
/**
 * Check if given character code is a white-space character: a space character
 * or line breaks
 */
function isWhiteSpace(code) {
    return code === 32 /* space */
        || code === 9 /* tab */
        || code === 160; /* non-breaking space */
}
/**
 * Check if given character code is a space character
 */
function isSpace(code) {
    return isWhiteSpace(code)
        || code === 10 /* LF */
        || code === 13; /* CR */
}
/**
 * Consumes 'single' or "double"-quoted string from given string, if possible
 * @return `true` if quoted string was consumed. The contents of quoted string
 * will be available as `stream.current()`
 */
function eatQuoted(stream, options) {
    options = Object.assign(Object.assign({}, defaultQuotedOptions), options);
    const start = stream.pos;
    const quote = stream.peek();
    if (stream.eat(isQuote)) {
        while (!stream.eof()) {
            switch (stream.next()) {
                case quote:
                    stream.start = start;
                    return true;
                case options.escape:
                    stream.next();
                    break;
            }
        }
        // If we’re here then stream wasn’t properly consumed.
        // Revert stream and decide what to do
        stream.pos = start;
        if (options.throws) {
            throw stream.error('Unable to consume quoted string');
        }
    }
    return false;
}
/**
 * Check if given character code is a quote character
 */
function isQuote(code) {
    return code === 39 /* ' */ || code === 34 /* " */;
}
/**
 * Eats paired characters substring, for example `(foo)` or `[bar]`
 * @param open Character code of pair opening
 * @param close Character code of pair closing
 * @return Returns `true` if character pair was successfully consumed, it’s
 * content will be available as `stream.current()`
 */
function eatPair(stream, open, close, options) {
    options = Object.assign(Object.assign({}, defaultQuotedOptions), options);
    const start = stream.pos;
    if (stream.eat(open)) {
        let stack = 1;
        let ch;
        while (!stream.eof()) {
            if (eatQuoted(stream, options)) {
                continue;
            }
            ch = stream.next();
            if (ch === open) {
                stack++;
            }
            else if (ch === close) {
                stack--;
                if (!stack) {
                    stream.start = start;
                    return true;
                }
            }
            else if (ch === options.escape) {
                stream.next();
            }
        }
        // If we’re here then paired character can’t be consumed
        stream.pos = start;
        if (options.throws) {
            throw stream.error(`Unable to find matching pair for ${String.fromCharCode(open)}`);
        }
    }
    return false;
}

/**
 * A streaming, character code-based string reader
 */
class Scanner {
    constructor(str, start, end) {
        if (end == null && typeof str === 'string') {
            end = str.length;
        }
        this.string = str;
        this.pos = this.start = start || 0;
        this.end = end || 0;
    }
    /**
     * Returns true only if the stream is at the end of the file.
     */
    eof() {
        return this.pos >= this.end;
    }
    /**
     * Creates a new stream instance which is limited to given `start` and `end`
     * range. E.g. its `eof()` method will look at `end` property, not actual
     * stream end
     */
    limit(start, end) {
        return new Scanner(this.string, start, end);
    }
    /**
     * Returns the next character code in the stream without advancing it.
     * Will return NaN at the end of the file.
     */
    peek() {
        return this.string.charCodeAt(this.pos);
    }
    /**
     * Returns the next character in the stream and advances it.
     * Also returns <code>undefined</code> when no more characters are available.
     */
    next() {
        if (this.pos < this.string.length) {
            return this.string.charCodeAt(this.pos++);
        }
    }
    /**
     * `match` can be a character code or a function that takes a character code
     * and returns a boolean. If the next character in the stream 'matches'
     * the given argument, it is consumed and returned.
     * Otherwise, `false` is returned.
     */
    eat(match) {
        const ch = this.peek();
        const ok = typeof match === 'function' ? match(ch) : ch === match;
        if (ok) {
            this.next();
        }
        return ok;
    }
    /**
     * Repeatedly calls <code>eat</code> with the given argument, until it
     * fails. Returns <code>true</code> if any characters were eaten.
     */
    eatWhile(match) {
        const start = this.pos;
        while (!this.eof() && this.eat(match)) { /* */ }
        return this.pos !== start;
    }
    /**
     * Backs up the stream n characters. Backing it up further than the
     * start of the current token will cause things to break, so be careful.
     */
    backUp(n) {
        this.pos -= (n || 1);
    }
    /**
     * Get the string between the start of the current token and the
     * current stream position.
     */
    current() {
        return this.substring(this.start, this.pos);
    }
    /**
     * Returns substring for given range
     */
    substring(start, end) {
        return this.string.slice(start, end);
    }
    /**
     * Creates error object with current stream state
     */
    error(message, pos = this.pos) {
        return new ScannerError(`${message} at ${pos + 1}`, pos, this.string);
    }
}
class ScannerError extends Error {
    constructor(message, pos, str) {
        super(message);
        this.pos = pos;
        this.string = str;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Scanner);

//# sourceMappingURL=scanner.es.js.map


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony import */ var _emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);


function tokenize(abbr, isValue) {
    let brackets = 0;
    let token;
    const scanner = new _emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["default"](abbr);
    const tokens = [];
    while (!scanner.eof()) {
        token = getToken(scanner, brackets === 0 && !isValue);
        if (!token) {
            throw scanner.error('Unexpected character');
        }
        if (token.type === 'Bracket') {
            if (!brackets && token.open) {
                mergeTokens(scanner, tokens);
            }
            brackets += token.open ? 1 : -1;
            if (brackets < 0) {
                throw scanner.error('Unexpected bracket', token.start);
            }
        }
        tokens.push(token);
        // Forcibly consume next operator after unit-less numeric value or color:
        // next dash `-` must be used as value delimiter
        if (shouldConsumeDashAfter(token) && (token = operator(scanner))) {
            tokens.push(token);
        }
    }
    return tokens;
}
/**
 * Returns next token from given scanner, if possible
 */
function getToken(scanner, short) {
    return field(scanner)
        || numberValue(scanner)
        || colorValue(scanner)
        || stringValue(scanner)
        || bracket(scanner)
        || operator(scanner)
        || whiteSpace(scanner)
        || literal(scanner, short);
}
function field(scanner) {
    const start = scanner.pos;
    if (scanner.eat(36 /* Dollar */) && scanner.eat(123 /* CurlyBracketOpen */)) {
        scanner.start = scanner.pos;
        let index;
        let name = '';
        if (scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])) {
            // It’s a field
            index = Number(scanner.current());
            name = scanner.eat(58 /* Colon */) ? consumePlaceholder(scanner) : '';
        }
        else if (Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isAlpha"])(scanner.peek())) {
            // It’s a variable
            name = consumePlaceholder(scanner);
        }
        if (scanner.eat(125 /* CurlyBracketClose */)) {
            return {
                type: 'Field',
                index, name,
                start,
                end: scanner.pos
            };
        }
        throw scanner.error('Expecting }');
    }
    // If we reached here then there’s no valid field here, revert
    // back to starting position
    scanner.pos = start;
}
/**
 * Consumes a placeholder: value right after `:` in field. Could be empty
 */
function consumePlaceholder(stream) {
    const stack = [];
    stream.start = stream.pos;
    while (!stream.eof()) {
        if (stream.eat(123 /* CurlyBracketOpen */)) {
            stack.push(stream.pos);
        }
        else if (stream.eat(125 /* CurlyBracketClose */)) {
            if (!stack.length) {
                stream.pos--;
                break;
            }
            stack.pop();
        }
        else {
            stream.pos++;
        }
    }
    if (stack.length) {
        stream.pos = stack.pop();
        throw stream.error(`Expecting }`);
    }
    return stream.current();
}
/**
 * Consumes literal from given scanner
 * @param short Use short notation for consuming value.
 * The difference between “short” and “full” notation is that first one uses
 * alpha characters only and used for extracting keywords from abbreviation,
 * while “full” notation also supports numbers and dashes
 */
function literal(scanner, short) {
    const start = scanner.pos;
    if (scanner.eat(isIdentPrefix)) {
        // SCSS or LESS variable
        // NB a bit dirty hack: if abbreviation starts with identifier prefix,
        // consume alpha characters only to allow embedded variables
        scanner.eatWhile(start ? isKeyword : isLiteral);
    }
    else if (scanner.eat(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isAlphaWord"])) {
        scanner.eatWhile(short ? isLiteral : isKeyword);
    }
    else {
        // Allow dots only at the beginning of literal
        scanner.eat(46 /* Dot */);
        scanner.eatWhile(isLiteral);
    }
    if (start !== scanner.pos) {
        scanner.start = start;
        return createLiteral(scanner, scanner.start = start);
    }
}
function createLiteral(scanner, start = scanner.start, end = scanner.pos) {
    return {
        type: 'Literal',
        value: scanner.substring(start, end),
        start,
        end
    };
}
/**
 * Consumes numeric CSS value (number with optional unit) from current stream,
 * if possible
 */
function numberValue(scanner) {
    const start = scanner.pos;
    if (consumeNumber(scanner)) {
        scanner.start = start;
        const rawValue = scanner.current();
        // eat unit, which can be a % or alpha word
        scanner.start = scanner.pos;
        scanner.eat(37 /* Percent */) || scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isAlphaWord"]);
        return {
            type: 'NumberValue',
            value: Number(rawValue),
            rawValue,
            unit: scanner.current(),
            start,
            end: scanner.pos
        };
    }
}
/**
 * Consumes quoted string value from given scanner
 */
function stringValue(scanner) {
    const ch = scanner.peek();
    const start = scanner.pos;
    let finished = false;
    if (Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isQuote"])(ch)) {
        scanner.pos++;
        while (!scanner.eof()) {
            // Do not throw error on malformed string
            if (scanner.eat(ch)) {
                finished = true;
                break;
            }
            else {
                scanner.pos++;
            }
        }
        scanner.start = start;
        return {
            type: 'StringValue',
            value: scanner.substring(start + 1, scanner.pos - (finished ? 1 : 0)),
            quote: ch === 39 /* SingleQuote */ ? 'single' : 'double',
            start,
            end: scanner.pos
        };
    }
}
/**
 * Consumes a color token from given string
 */
function colorValue(scanner) {
    // supported color variations:
    // #abc   → #aabbccc
    // #0     → #000000
    // #fff.5 → rgba(255, 255, 255, 0.5)
    // #t     → transparent
    const start = scanner.pos;
    if (scanner.eat(35 /* Hash */)) {
        const valueStart = scanner.pos;
        let color = '';
        let alpha = '';
        if (scanner.eatWhile(isHex)) {
            color = scanner.substring(valueStart, scanner.pos);
            alpha = colorAlpha(scanner);
        }
        else if (scanner.eat(116 /* Transparent */)) {
            color = '0';
            alpha = colorAlpha(scanner) || '0';
        }
        else {
            alpha = colorAlpha(scanner);
        }
        if (color || alpha || scanner.eof()) {
            const { r, g, b, a } = parseColor(color, alpha);
            return {
                type: 'ColorValue',
                r, g, b, a,
                raw: scanner.substring(start + 1, scanner.pos),
                start,
                end: scanner.pos
            };
        }
        else {
            // Consumed # but no actual value: invalid color value, treat it as literal
            return createLiteral(scanner, start);
        }
    }
    scanner.pos = start;
}
/**
 * Consumes alpha value of color: `.1`
 */
function colorAlpha(scanner) {
    const start = scanner.pos;
    if (scanner.eat(46 /* Dot */)) {
        scanner.start = start;
        if (scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])) {
            return scanner.current();
        }
        return '1';
    }
    return '';
}
/**
 * Consumes white space characters as string literal from given scanner
 */
function whiteSpace(scanner) {
    const start = scanner.pos;
    if (scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isSpace"])) {
        return {
            type: 'WhiteSpace',
            start,
            end: scanner.pos
        };
    }
}
/**
 * Consumes bracket from given scanner
 */
function bracket(scanner) {
    const ch = scanner.peek();
    if (isBracket(ch)) {
        return {
            type: 'Bracket',
            open: ch === 40 /* RoundBracketOpen */,
            start: scanner.pos++,
            end: scanner.pos
        };
    }
}
/**
 * Consumes operator from given scanner
 */
function operator(scanner) {
    const op = operatorType(scanner.peek());
    if (op) {
        return {
            type: 'Operator',
            operator: op,
            start: scanner.pos++,
            end: scanner.pos
        };
    }
}
/**
 * Eats number value from given stream
 * @return Returns `true` if number was consumed
 */
function consumeNumber(stream) {
    const start = stream.pos;
    stream.eat(45 /* Dash */);
    const afterNegative = stream.pos;
    const hasDecimal = stream.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"]);
    const prevPos = stream.pos;
    if (stream.eat(46 /* Dot */)) {
        // It’s perfectly valid to have numbers like `1.`, which enforces
        // value to float unit type
        const hasFloat = stream.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"]);
        if (!hasDecimal && !hasFloat) {
            // Lone dot
            stream.pos = prevPos;
        }
    }
    // Edge case: consumed dash only: not a number, bail-out
    if (stream.pos === afterNegative) {
        stream.pos = start;
    }
    return stream.pos !== start;
}
function isIdentPrefix(code) {
    return code === 64 /* At */ || code === 36 /* Dollar */;
}
/**
 * If given character is an operator, returns it’s type
 */
function operatorType(ch) {
    return (ch === 43 /* Sibling */ && "+" /* Sibling */)
        || (ch === 33 /* Excl */ && "!" /* Important */)
        || (ch === 44 /* Comma */ && "," /* ArgumentDelimiter */)
        || (ch === 58 /* Colon */ && ":" /* PropertyDelimiter */)
        || (ch === 45 /* Dash */ && "-" /* ValueDelimiter */)
        || void 0;
}
/**
 * Check if given code is a hex value (/0-9a-f/)
 */
function isHex(code) {
    return Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(code) || Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isAlpha"])(code, 65, 70); // A-F
}
function isKeyword(code) {
    return Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isAlphaNumericWord"])(code) || code === 45 /* Dash */;
}
function isBracket(code) {
    return code === 40 /* RoundBracketOpen */ || code === 41 /* RoundBracketClose */;
}
function isLiteral(code) {
    return Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isAlphaWord"])(code) || code === 37 /* Percent */ || code === 47 /* Slash */;
}
/**
 * Parses given color value from abbreviation into RGBA format
 */
function parseColor(value, alpha) {
    let r = '0';
    let g = '0';
    let b = '0';
    let a = Number(alpha != null && alpha !== '' ? alpha : 1);
    if (value === 't') {
        a = 0;
    }
    else {
        switch (value.length) {
            case 0:
                break;
            case 1:
                r = g = b = value + value;
                break;
            case 2:
                r = g = b = value;
                break;
            case 3:
                r = value[0] + value[0];
                g = value[1] + value[1];
                b = value[2] + value[2];
                break;
            default:
                value += value;
                r = value.slice(0, 2);
                g = value.slice(2, 4);
                b = value.slice(4, 6);
        }
    }
    return {
        r: parseInt(r, 16),
        g: parseInt(g, 16),
        b: parseInt(b, 16),
        a
    };
}
/**
 * Check if scanner reader must consume dash after given token.
 * Used in cases where user must explicitly separate numeric values
 */
function shouldConsumeDashAfter(token) {
    return token.type === 'ColorValue' || (token.type === 'NumberValue' && !token.unit);
}
/**
 * Merges last adjacent tokens into a single literal.
 * This function is used to overcome edge case when function name was parsed
 * as a list of separate tokens. For example, a `scale3d()` value will be
 * parsed as literal and number tokens (`scale` and `3d`) which is a perfectly
 * valid abbreviation but undesired result. This function will detect last adjacent
 * literal and number values and combine them into single literal
 */
function mergeTokens(scanner, tokens) {
    let start = 0;
    let end = 0;
    while (tokens.length) {
        const token = last(tokens);
        if (token.type === 'Literal' || token.type === 'NumberValue') {
            start = token.start;
            if (!end) {
                end = token.end;
            }
            tokens.pop();
        }
        else {
            break;
        }
    }
    if (start !== end) {
        tokens.push(createLiteral(scanner, start, end));
    }
}
function last(arr) {
    return arr[arr.length - 1];
}

function tokenScanner(tokens) {
    return {
        tokens,
        start: 0,
        pos: 0,
        size: tokens.length
    };
}
function peek(scanner) {
    return scanner.tokens[scanner.pos];
}
function readable(scanner) {
    return scanner.pos < scanner.size;
}
function consume(scanner, test) {
    if (test(peek(scanner))) {
        scanner.pos++;
        return true;
    }
    return false;
}
function error(scanner, message, token = peek(scanner)) {
    if (token && token.start != null) {
        message += ` at ${token.start}`;
    }
    const err = new Error(message);
    err['pos'] = token && token.start;
    return err;
}

function parser(tokens, options = {}) {
    const scanner = tokenScanner(tokens);
    const result = [];
    let property;
    while (readable(scanner)) {
        if (property = consumeProperty(scanner, options)) {
            result.push(property);
        }
        else if (!consume(scanner, isSiblingOperator)) {
            throw error(scanner, 'Unexpected token');
        }
    }
    return result;
}
/**
 * Consumes single CSS property
 */
function consumeProperty(scanner, options) {
    let name;
    let important = false;
    let valueFragment;
    const value = [];
    const token = peek(scanner);
    const valueMode = !!options.value;
    if (!valueMode && isLiteral$1(token) && !isFunctionStart(scanner)) {
        scanner.pos++;
        name = token.value;
        // Consume any following value delimiter after property name
        consume(scanner, isValueDelimiter);
    }
    // Skip whitespace right after property name, if any
    if (valueMode) {
        consume(scanner, isWhiteSpace);
    }
    while (readable(scanner)) {
        if (consume(scanner, isImportant)) {
            important = true;
        }
        else if (valueFragment = consumeValue(scanner, valueMode)) {
            value.push(valueFragment);
        }
        else if (!consume(scanner, isFragmentDelimiter)) {
            break;
        }
    }
    if (name || value.length || important) {
        return { name, value, important };
    }
}
/**
 * Consumes single value fragment, e.g. all value tokens before comma
 */
function consumeValue(scanner, inArgument) {
    const result = [];
    let token;
    let args;
    while (readable(scanner)) {
        token = peek(scanner);
        if (isValue(token)) {
            scanner.pos++;
            if (isLiteral$1(token) && (args = consumeArguments(scanner))) {
                result.push({
                    type: 'FunctionCall',
                    name: token.value,
                    arguments: args
                });
            }
            else {
                result.push(token);
            }
        }
        else if (isValueDelimiter(token) || (inArgument && isWhiteSpace(token))) {
            scanner.pos++;
        }
        else {
            break;
        }
    }
    return result.length
        ? { type: 'CSSValue', value: result }
        : void 0;
}
function consumeArguments(scanner) {
    const start = scanner.pos;
    if (consume(scanner, isOpenBracket)) {
        const args = [];
        let value;
        while (readable(scanner) && !consume(scanner, isCloseBracket)) {
            if (value = consumeValue(scanner, true)) {
                args.push(value);
            }
            else if (!consume(scanner, isWhiteSpace) && !consume(scanner, isArgumentDelimiter)) {
                throw error(scanner, 'Unexpected token');
            }
        }
        scanner.start = start;
        return args;
    }
}
function isLiteral$1(token) {
    return token && token.type === 'Literal';
}
function isBracket$1(token, open) {
    return token && token.type === 'Bracket' && (open == null || token.open === open);
}
function isOpenBracket(token) {
    return isBracket$1(token, true);
}
function isCloseBracket(token) {
    return isBracket$1(token, false);
}
function isWhiteSpace(token) {
    return token && token.type === 'WhiteSpace';
}
function isOperator(token, operator) {
    return token && token.type === 'Operator' && (!operator || token.operator === operator);
}
function isSiblingOperator(token) {
    return isOperator(token, "+" /* Sibling */);
}
function isArgumentDelimiter(token) {
    return isOperator(token, "," /* ArgumentDelimiter */);
}
function isFragmentDelimiter(token) {
    return isArgumentDelimiter(token);
}
function isImportant(token) {
    return isOperator(token, "!" /* Important */);
}
function isValue(token) {
    return token.type === 'StringValue'
        || token.type === 'ColorValue'
        || token.type === 'NumberValue'
        || token.type === 'Literal'
        || token.type === 'Field';
}
function isValueDelimiter(token) {
    return isOperator(token, ":" /* PropertyDelimiter */)
        || isOperator(token, "-" /* ValueDelimiter */);
}
function isFunctionStart(scanner) {
    const t1 = scanner.tokens[scanner.pos];
    const t2 = scanner.tokens[scanner.pos + 1];
    return t1 && t2 && isLiteral$1(t1) && t2.type === 'Bracket';
}

/**
 * Parses given abbreviation into property set
 */
function parse(abbr, options) {
    try {
        const tokens = typeof abbr === 'string' ? tokenize(abbr, options && options.value) : abbr;
        return parser(tokens, options);
    }
    catch (err) {
        if (err instanceof _emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["ScannerError"] && typeof abbr === 'string') {
            err.message += `\n${abbr}\n${'-'.repeat(err.pos)}^`;
        }
        throw err;
    }
}

/* harmony default export */ __webpack_exports__["default"] = (parse);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSnippets", function() { return parseSnippets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxes", function() { return syntaxes; });
/*
MIT License

Copyright (c) 2020 Sergey Chikuyonok <serge.che@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/**
 * Parses raw snippets definitions with possibly multiple keys into a plan
 * snippet map
 */
function parseSnippets(snippets) {
    const result = {};
    Object.keys(snippets).forEach(k => {
        for (const name of k.split('|')) {
            result[name] = snippets[k];
        }
    });
    return result;
}
/**
 * List of all known syntaxes
 */
const syntaxes = {
    markup: ['html', 'xml', 'xsl', 'jsx', 'js', 'pug', 'slim', 'haml'],
    stylesheet: ['css', 'sass', 'scss', 'less', 'sss', 'stylus']
};
//# sourceMappingURL=configCompat.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTag = void 0;
const vscode = __webpack_require__(2);
const parseDocument_1 = __webpack_require__(13);
const util_1 = __webpack_require__(6);
function removeTag() {
    if (!(0, util_1.validate)(false) || !vscode.window.activeTextEditor) {
        return;
    }
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    const rootNode = (0, parseDocument_1.getRootNode)(document, true);
    if (!rootNode) {
        return;
    }
    let finalRangesToRemove = editor.selections.reverse()
        .reduce((prev, selection) => prev.concat(getRangesToRemove(editor.document, rootNode, selection)), []);
    return editor.edit(editBuilder => {
        finalRangesToRemove.forEach(range => {
            editBuilder.replace(range, '');
        });
    });
}
exports.removeTag = removeTag;
/**
 * Calculates the ranges to remove, along with what to replace those ranges with.
 * It finds the node to remove based on the selection's start position
 * and then removes that node, reindenting the content in between.
 */
function getRangesToRemove(document, rootNode, selection) {
    const offset = document.offsetAt(selection.start);
    const nodeToUpdate = (0, util_1.getHtmlFlatNode)(document.getText(), rootNode, offset, true);
    if (!nodeToUpdate) {
        return [];
    }
    let openTagRange;
    if (nodeToUpdate.open) {
        openTagRange = (0, util_1.offsetRangeToVsRange)(document, nodeToUpdate.open.start, nodeToUpdate.open.end);
    }
    let closeTagRange;
    if (nodeToUpdate.close) {
        closeTagRange = (0, util_1.offsetRangeToVsRange)(document, nodeToUpdate.close.start, nodeToUpdate.close.end);
    }
    let rangesToRemove = [];
    if (openTagRange) {
        rangesToRemove.push(openTagRange);
        if (closeTagRange) {
            const indentAmountToRemove = calculateIndentAmountToRemove(document, openTagRange, closeTagRange);
            for (let i = openTagRange.start.line + 1; i < closeTagRange.start.line; i++) {
                rangesToRemove.push(new vscode.Range(i, 0, i, indentAmountToRemove));
            }
            rangesToRemove.push(closeTagRange);
        }
    }
    return rangesToRemove;
}
/**
 * Calculates the amount of indent to remove for getRangesToRemove.
 */
function calculateIndentAmountToRemove(document, openRange, closeRange) {
    const startLine = openRange.start.line;
    const endLine = closeRange.start.line;
    const startLineIndent = document.lineAt(startLine).firstNonWhitespaceCharacterIndex;
    const endLineIndent = document.lineAt(endLine).firstNonWhitespaceCharacterIndex;
    let contentIndent;
    for (let i = startLine + 1; i < endLine; i++) {
        const lineIndent = document.lineAt(i).firstNonWhitespaceCharacterIndex;
        contentIndent = !contentIndent ? lineIndent : Math.min(contentIndent, lineIndent);
    }
    let indentAmount = 0;
    if (contentIndent) {
        if (contentIndent < startLineIndent || contentIndent < endLineIndent) {
            indentAmount = 0;
        }
        else {
            indentAmount = Math.min(contentIndent - startLineIndent, contentIndent - endLineIndent);
        }
    }
    return indentAmount;
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTag = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
const parseDocument_1 = __webpack_require__(13);
function updateTag(tagName) {
    if (!(0, util_1.validate)(false) || !vscode.window.activeTextEditor) {
        return;
    }
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    const rootNode = (0, parseDocument_1.getRootNode)(document, true);
    if (!rootNode) {
        return;
    }
    const rangesToUpdate = editor.selections.reverse()
        .reduce((prev, selection) => prev.concat(getRangesToUpdate(document, selection, rootNode)), []);
    return editor.edit(editBuilder => {
        rangesToUpdate.forEach(range => {
            editBuilder.replace(range, tagName);
        });
    });
}
exports.updateTag = updateTag;
function getRangesFromNode(node, document) {
    let ranges = [];
    if (node.open) {
        const start = document.positionAt(node.open.start);
        ranges.push(new vscode.Range(start.translate(0, 1), start.translate(0, 1).translate(0, node.name.length)));
    }
    if (node.close) {
        const endTagStart = document.positionAt(node.close.start);
        const end = document.positionAt(node.close.end);
        ranges.push(new vscode.Range(endTagStart.translate(0, 2), end.translate(0, -1)));
    }
    return ranges;
}
function getRangesToUpdate(document, selection, rootNode) {
    const documentText = document.getText();
    const offset = document.offsetAt(selection.start);
    const nodeToUpdate = (0, util_1.getHtmlFlatNode)(documentText, rootNode, offset, true);
    if (!nodeToUpdate) {
        return [];
    }
    return getRangesFromNode(nodeToUpdate, document);
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchTag = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
const parseDocument_1 = __webpack_require__(13);
function matchTag() {
    if (!(0, util_1.validate)(false) || !vscode.window.activeTextEditor) {
        return;
    }
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    const rootNode = (0, parseDocument_1.getRootNode)(document, true);
    if (!rootNode) {
        return;
    }
    let updatedSelections = [];
    editor.selections.forEach(selection => {
        const updatedSelection = getUpdatedSelections(document, rootNode, selection.start);
        if (updatedSelection) {
            updatedSelections.push(updatedSelection);
        }
    });
    if (updatedSelections.length) {
        editor.selections = updatedSelections;
        editor.revealRange(editor.selections[updatedSelections.length - 1]);
    }
}
exports.matchTag = matchTag;
function getUpdatedSelections(document, rootNode, position) {
    const offset = document.offsetAt(position);
    const currentNode = (0, util_1.getHtmlFlatNode)(document.getText(), rootNode, offset, true);
    if (!currentNode) {
        return;
    }
    // If no opening/closing tag or cursor is between open and close tag, then no-op
    if (!currentNode.open
        || !currentNode.close
        || (offset > currentNode.open.end && offset < currentNode.close.start)) {
        return;
    }
    // Place cursor inside the close tag if cursor is inside the open tag, else place it inside the open tag
    const finalOffset = (offset <= currentNode.open.end) ? currentNode.close.start + 2 : currentNode.start + 1;
    return (0, util_1.offsetRangeToSelection)(document, finalOffset, finalOffset);
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceIn = exports.balanceOut = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
const parseDocument_1 = __webpack_require__(13);
let balanceOutStack = [];
let lastBalancedSelections = [];
function balanceOut() {
    balance(true);
}
exports.balanceOut = balanceOut;
function balanceIn() {
    balance(false);
}
exports.balanceIn = balanceIn;
function balance(out) {
    if (!(0, util_1.validate)(false) || !vscode.window.activeTextEditor) {
        return;
    }
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    const rootNode = (0, parseDocument_1.getRootNode)(document, true);
    if (!rootNode) {
        return;
    }
    const rangeFn = out ? getRangeToBalanceOut : getRangeToBalanceIn;
    let newSelections = [];
    editor.selections.forEach(selection => {
        const range = rangeFn(document, rootNode, selection);
        newSelections.push(range);
    });
    // check whether we are starting a balance elsewhere
    if (areSameSelections(lastBalancedSelections, editor.selections)) {
        // we are not starting elsewhere, so use the stack as-is
        if (out) {
            // make sure we are able to expand outwards
            if (!areSameSelections(editor.selections, newSelections)) {
                balanceOutStack.push(editor.selections);
            }
        }
        else if (balanceOutStack.length) {
            newSelections = balanceOutStack.pop();
        }
    }
    else {
        // we are starting elsewhere, so reset the stack
        balanceOutStack = out ? [editor.selections] : [];
    }
    editor.selections = newSelections;
    lastBalancedSelections = editor.selections;
}
function getRangeToBalanceOut(document, rootNode, selection) {
    const offset = document.offsetAt(selection.start);
    const nodeToBalance = (0, util_1.getHtmlFlatNode)(document.getText(), rootNode, offset, false);
    if (!nodeToBalance) {
        return selection;
    }
    if (!nodeToBalance.open || !nodeToBalance.close) {
        return (0, util_1.offsetRangeToSelection)(document, nodeToBalance.start, nodeToBalance.end);
    }
    const innerSelection = (0, util_1.offsetRangeToSelection)(document, nodeToBalance.open.end, nodeToBalance.close.start);
    const outerSelection = (0, util_1.offsetRangeToSelection)(document, nodeToBalance.open.start, nodeToBalance.close.end);
    if (innerSelection.contains(selection) && !innerSelection.isEqual(selection)) {
        return innerSelection;
    }
    if (outerSelection.contains(selection) && !outerSelection.isEqual(selection)) {
        return outerSelection;
    }
    return selection;
}
function getRangeToBalanceIn(document, rootNode, selection) {
    const offset = document.offsetAt(selection.start);
    const nodeToBalance = (0, util_1.getHtmlFlatNode)(document.getText(), rootNode, offset, true);
    if (!nodeToBalance) {
        return selection;
    }
    const selectionStart = document.offsetAt(selection.start);
    const selectionEnd = document.offsetAt(selection.end);
    if (nodeToBalance.open && nodeToBalance.close) {
        const entireNodeSelected = selectionStart === nodeToBalance.start && selectionEnd === nodeToBalance.end;
        const startInOpenTag = selectionStart > nodeToBalance.open.start && selectionStart < nodeToBalance.open.end;
        const startInCloseTag = selectionStart > nodeToBalance.close.start && selectionStart < nodeToBalance.close.end;
        if (entireNodeSelected || startInOpenTag || startInCloseTag) {
            return (0, util_1.offsetRangeToSelection)(document, nodeToBalance.open.end, nodeToBalance.close.start);
        }
    }
    if (!nodeToBalance.firstChild) {
        return selection;
    }
    const firstChild = nodeToBalance.firstChild;
    if (selectionStart === firstChild.start
        && selectionEnd === firstChild.end
        && firstChild.open
        && firstChild.close) {
        return (0, util_1.offsetRangeToSelection)(document, firstChild.open.end, firstChild.close.start);
    }
    return (0, util_1.offsetRangeToSelection)(document, firstChild.start, firstChild.end);
}
function areSameSelections(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!a[i].isEqual(b[i])) {
            return false;
        }
    }
    return true;
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitJoinTag = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
const parseDocument_1 = __webpack_require__(13);
function splitJoinTag() {
    if (!(0, util_1.validate)(false) || !vscode.window.activeTextEditor) {
        return;
    }
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    const rootNode = (0, parseDocument_1.getRootNode)(editor.document, true);
    if (!rootNode) {
        return;
    }
    return editor.edit(editBuilder => {
        editor.selections.reverse().forEach(selection => {
            const documentText = document.getText();
            const offset = document.offsetAt(selection.start);
            const nodeToUpdate = (0, util_1.getHtmlFlatNode)(documentText, rootNode, offset, true);
            if (nodeToUpdate) {
                const textEdit = getRangesToReplace(document, nodeToUpdate);
                editBuilder.replace(textEdit.range, textEdit.newText);
            }
        });
    });
}
exports.splitJoinTag = splitJoinTag;
function getRangesToReplace(document, nodeToUpdate) {
    let rangeToReplace;
    let textToReplaceWith;
    if (!nodeToUpdate.open || !nodeToUpdate.close) {
        // Split Tag
        const nodeText = document.getText().substring(nodeToUpdate.start, nodeToUpdate.end);
        const m = nodeText.match(/(\s*\/)?>$/);
        const end = nodeToUpdate.end;
        const start = m ? end - m[0].length : end;
        rangeToReplace = (0, util_1.offsetRangeToVsRange)(document, start, end);
        textToReplaceWith = `></${nodeToUpdate.name}>`;
    }
    else {
        // Join Tag
        const start = nodeToUpdate.open.end - 1;
        const end = nodeToUpdate.end;
        rangeToReplace = (0, util_1.offsetRangeToVsRange)(document, start, end);
        textToReplaceWith = '/>';
        const emmetMode = (0, util_1.getEmmetMode)(document.languageId, []) || '';
        const emmetConfig = (0, util_1.getEmmetConfiguration)(emmetMode);
        if (emmetMode && emmetConfig.syntaxProfiles[emmetMode] &&
            (emmetConfig.syntaxProfiles[emmetMode]['selfClosingStyle'] === 'xhtml' || emmetConfig.syntaxProfiles[emmetMode]['self_closing_tag'] === 'xhtml')) {
            textToReplaceWith = ' ' + textToReplaceWith;
        }
    }
    return new vscode.TextEdit(rangeToReplace, textToReplaceWith);
}


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeLines = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
const parseDocument_1 = __webpack_require__(13);
function mergeLines() {
    if (!(0, util_1.validate)(false) || !vscode.window.activeTextEditor) {
        return;
    }
    const editor = vscode.window.activeTextEditor;
    const rootNode = (0, parseDocument_1.getRootNode)(editor.document, true);
    if (!rootNode) {
        return;
    }
    return editor.edit(editBuilder => {
        editor.selections.reverse().forEach(selection => {
            const textEdit = getRangesToReplace(editor.document, selection, rootNode);
            if (textEdit) {
                editBuilder.replace(textEdit.range, textEdit.newText);
            }
        });
    });
}
exports.mergeLines = mergeLines;
function getRangesToReplace(document, selection, rootNode) {
    let startNodeToUpdate;
    let endNodeToUpdate;
    const selectionStart = document.offsetAt(selection.start);
    const selectionEnd = document.offsetAt(selection.end);
    if (selection.isEmpty) {
        startNodeToUpdate = endNodeToUpdate = (0, util_1.getFlatNode)(rootNode, selectionStart, true);
    }
    else {
        startNodeToUpdate = (0, util_1.getFlatNode)(rootNode, selectionStart, true);
        endNodeToUpdate = (0, util_1.getFlatNode)(rootNode, selectionEnd, true);
    }
    if (!startNodeToUpdate || !endNodeToUpdate) {
        return;
    }
    const startPos = document.positionAt(startNodeToUpdate.start);
    const startLine = startPos.line;
    const startChar = startPos.character;
    const endPos = document.positionAt(endNodeToUpdate.end);
    const endLine = endPos.line;
    if (startLine === endLine) {
        return;
    }
    const rangeToReplace = (0, util_1.offsetRangeToVsRange)(document, startNodeToUpdate.start, endNodeToUpdate.end);
    let textToReplaceWith = document.lineAt(startLine).text.substr(startChar);
    for (let i = startLine + 1; i <= endLine; i++) {
        textToReplaceWith += document.lineAt(i).text.trim();
    }
    return new vscode.TextEdit(rangeToReplace, textToReplaceWith);
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleComment = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
const css_parser_1 = __webpack_require__(10);
const parseDocument_1 = __webpack_require__(13);
let startCommentStylesheet;
let endCommentStylesheet;
let startCommentHTML;
let endCommentHTML;
function toggleComment() {
    if (!(0, util_1.validate)() || !vscode.window.activeTextEditor) {
        return;
    }
    setupCommentSpacing();
    const editor = vscode.window.activeTextEditor;
    const rootNode = (0, parseDocument_1.getRootNode)(editor.document, true);
    if (!rootNode) {
        return;
    }
    return editor.edit(editBuilder => {
        let allEdits = [];
        editor.selections.reverse().forEach(selection => {
            const edits = (0, util_1.isStyleSheet)(editor.document.languageId) ? toggleCommentStylesheet(editor.document, selection, rootNode) : toggleCommentHTML(editor.document, selection, rootNode);
            if (edits.length > 0) {
                allEdits.push(edits);
            }
        });
        // Apply edits in order so we can skip nested ones.
        allEdits.sort((arr1, arr2) => {
            let result = arr1[0].range.start.line - arr2[0].range.start.line;
            return result === 0 ? arr1[0].range.start.character - arr2[0].range.start.character : result;
        });
        let lastEditPosition = new vscode.Position(0, 0);
        for (const edits of allEdits) {
            if (edits[0].range.end.isAfterOrEqual(lastEditPosition)) {
                edits.forEach(x => {
                    editBuilder.replace(x.range, x.newText);
                    lastEditPosition = x.range.end;
                });
            }
        }
    });
}
exports.toggleComment = toggleComment;
function toggleCommentHTML(document, selection, rootNode) {
    const selectionStart = selection.isReversed ? selection.active : selection.anchor;
    const selectionEnd = selection.isReversed ? selection.anchor : selection.active;
    const selectionStartOffset = document.offsetAt(selectionStart);
    const selectionEndOffset = document.offsetAt(selectionEnd);
    const documentText = document.getText();
    const startNode = (0, util_1.getHtmlFlatNode)(documentText, rootNode, selectionStartOffset, true);
    const endNode = (0, util_1.getHtmlFlatNode)(documentText, rootNode, selectionEndOffset, true);
    if (!startNode || !endNode) {
        return [];
    }
    if ((0, util_1.sameNodes)(startNode, endNode) && startNode.name === 'style'
        && startNode.open && startNode.close
        && startNode.open.end < selectionStartOffset
        && startNode.close.start > selectionEndOffset) {
        const buffer = ' '.repeat(startNode.open.end) +
            documentText.substring(startNode.open.end, startNode.close.start);
        const cssRootNode = (0, css_parser_1.default)(buffer);
        return toggleCommentStylesheet(document, selection, cssRootNode);
    }
    let allNodes = (0, util_1.getNodesInBetween)(startNode, endNode);
    let edits = [];
    allNodes.forEach(node => {
        edits = edits.concat(getRangesToUnCommentHTML(node, document));
    });
    if (startNode.type === 'comment') {
        return edits;
    }
    edits.push(new vscode.TextEdit((0, util_1.offsetRangeToVsRange)(document, allNodes[0].start, allNodes[0].start), startCommentHTML));
    edits.push(new vscode.TextEdit((0, util_1.offsetRangeToVsRange)(document, allNodes[allNodes.length - 1].end, allNodes[allNodes.length - 1].end), endCommentHTML));
    return edits;
}
function getRangesToUnCommentHTML(node, document) {
    let unCommentTextEdits = [];
    // If current node is commented, then uncomment and return
    if (node.type === 'comment') {
        unCommentTextEdits.push(new vscode.TextEdit((0, util_1.offsetRangeToVsRange)(document, node.start, node.start + startCommentHTML.length), ''));
        unCommentTextEdits.push(new vscode.TextEdit((0, util_1.offsetRangeToVsRange)(document, node.end - endCommentHTML.length, node.end), ''));
        return unCommentTextEdits;
    }
    // All children of current node should be uncommented
    node.children.forEach(childNode => {
        unCommentTextEdits = unCommentTextEdits.concat(getRangesToUnCommentHTML(childNode, document));
    });
    return unCommentTextEdits;
}
function toggleCommentStylesheet(document, selection, rootNode) {
    const selectionStart = selection.isReversed ? selection.active : selection.anchor;
    const selectionEnd = selection.isReversed ? selection.anchor : selection.active;
    let selectionStartOffset = document.offsetAt(selectionStart);
    let selectionEndOffset = document.offsetAt(selectionEnd);
    const startNode = (0, util_1.getFlatNode)(rootNode, selectionStartOffset, true);
    const endNode = (0, util_1.getFlatNode)(rootNode, selectionEndOffset, true);
    if (!selection.isEmpty) {
        selectionStartOffset = adjustStartNodeCss(startNode, selectionStartOffset, rootNode);
        selectionEndOffset = adjustEndNodeCss(endNode, selectionEndOffset, rootNode);
        selection = (0, util_1.offsetRangeToSelection)(document, selectionStartOffset, selectionEndOffset);
    }
    else if (startNode) {
        selectionStartOffset = startNode.start;
        selectionEndOffset = startNode.end;
        selection = (0, util_1.offsetRangeToSelection)(document, selectionStartOffset, selectionEndOffset);
    }
    // Uncomment the comments that intersect with the selection.
    let rangesToUnComment = [];
    let edits = [];
    rootNode.comments.forEach(comment => {
        const commentRange = (0, util_1.offsetRangeToVsRange)(document, comment.start, comment.end);
        if (selection.intersection(commentRange)) {
            rangesToUnComment.push(commentRange);
            edits.push(new vscode.TextEdit((0, util_1.offsetRangeToVsRange)(document, comment.start, comment.start + startCommentStylesheet.length), ''));
            edits.push(new vscode.TextEdit((0, util_1.offsetRangeToVsRange)(document, comment.end - endCommentStylesheet.length, comment.end), ''));
        }
    });
    if (edits.length > 0) {
        return edits;
    }
    return [
        new vscode.TextEdit(new vscode.Range(selection.start, selection.start), startCommentStylesheet),
        new vscode.TextEdit(new vscode.Range(selection.end, selection.end), endCommentStylesheet)
    ];
}
function setupCommentSpacing() {
    const config = vscode.workspace.getConfiguration('editor.comments').get('insertSpace');
    if (config) {
        startCommentStylesheet = '/* ';
        endCommentStylesheet = ' */';
        startCommentHTML = '<!-- ';
        endCommentHTML = ' -->';
    }
    else {
        startCommentStylesheet = '/*';
        endCommentStylesheet = '*/';
        startCommentHTML = '<!--';
        endCommentHTML = '-->';
    }
}
function adjustStartNodeCss(node, offset, rootNode) {
    for (const comment of rootNode.comments) {
        if (comment.start <= offset && offset <= comment.end) {
            return offset;
        }
    }
    if (!node) {
        return offset;
    }
    if (node.type === 'property') {
        return node.start;
    }
    const rule = node;
    if (offset < rule.contentStartToken.end || !rule.firstChild) {
        return rule.start;
    }
    if (offset < rule.firstChild.start) {
        return offset;
    }
    let newStartNode = rule.firstChild;
    while (newStartNode.nextSibling && offset > newStartNode.end) {
        newStartNode = newStartNode.nextSibling;
    }
    return newStartNode.start;
}
function adjustEndNodeCss(node, offset, rootNode) {
    for (const comment of rootNode.comments) {
        if (comment.start <= offset && offset <= comment.end) {
            return offset;
        }
    }
    if (!node) {
        return offset;
    }
    if (node.type === 'property') {
        return node.end;
    }
    const rule = node;
    if (offset === rule.contentEndToken.end || !rule.firstChild) {
        return rule.end;
    }
    if (offset > rule.children[rule.children.length - 1].end) {
        return offset;
    }
    let newEndNode = rule.children[rule.children.length - 1];
    while (newEndNode.previousSibling && offset < newEndNode.start) {
        newEndNode = newEndNode.previousSibling;
    }
    return newEndNode.end;
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEditPoint = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
function fetchEditPoint(direction) {
    if (!(0, util_1.validate)() || !vscode.window.activeTextEditor) {
        return;
    }
    const editor = vscode.window.activeTextEditor;
    let newSelections = [];
    editor.selections.forEach(selection => {
        let updatedSelection = direction === 'next' ? nextEditPoint(selection, editor) : prevEditPoint(selection, editor);
        newSelections.push(updatedSelection);
    });
    editor.selections = newSelections;
    editor.revealRange(editor.selections[editor.selections.length - 1]);
}
exports.fetchEditPoint = fetchEditPoint;
function nextEditPoint(selection, editor) {
    for (let lineNum = selection.anchor.line; lineNum < editor.document.lineCount; lineNum++) {
        let updatedSelection = findEditPoint(lineNum, editor, selection.anchor, 'next');
        if (updatedSelection) {
            return updatedSelection;
        }
    }
    return selection;
}
function prevEditPoint(selection, editor) {
    for (let lineNum = selection.anchor.line; lineNum >= 0; lineNum--) {
        let updatedSelection = findEditPoint(lineNum, editor, selection.anchor, 'prev');
        if (updatedSelection) {
            return updatedSelection;
        }
    }
    return selection;
}
function findEditPoint(lineNum, editor, position, direction) {
    let line = editor.document.lineAt(lineNum);
    let lineContent = line.text;
    if (lineNum !== position.line && line.isEmptyOrWhitespace && lineContent.length) {
        return new vscode.Selection(lineNum, lineContent.length, lineNum, lineContent.length);
    }
    if (lineNum === position.line && direction === 'prev') {
        lineContent = lineContent.substr(0, position.character);
    }
    let emptyAttrIndex = direction === 'next' ? lineContent.indexOf('""', lineNum === position.line ? position.character : 0) : lineContent.lastIndexOf('""');
    let emptyTagIndex = direction === 'next' ? lineContent.indexOf('><', lineNum === position.line ? position.character : 0) : lineContent.lastIndexOf('><');
    let winner = -1;
    if (emptyAttrIndex > -1 && emptyTagIndex > -1) {
        winner = direction === 'next' ? Math.min(emptyAttrIndex, emptyTagIndex) : Math.max(emptyAttrIndex, emptyTagIndex);
    }
    else if (emptyAttrIndex > -1) {
        winner = emptyAttrIndex;
    }
    else {
        winner = emptyTagIndex;
    }
    if (winner > -1) {
        return new vscode.Selection(lineNum, winner + 1, lineNum, winner + 1);
    }
    return;
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSelectItem = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
const selectItemHTML_1 = __webpack_require__(43);
const selectItemStylesheet_1 = __webpack_require__(44);
const parseDocument_1 = __webpack_require__(13);
function fetchSelectItem(direction) {
    if (!(0, util_1.validate)() || !vscode.window.activeTextEditor) {
        return;
    }
    const editor = vscode.window.activeTextEditor;
    const document = editor.document;
    const rootNode = (0, parseDocument_1.getRootNode)(document, true);
    if (!rootNode) {
        return;
    }
    let newSelections = [];
    editor.selections.forEach(selection => {
        const selectionStart = selection.isReversed ? selection.active : selection.anchor;
        const selectionEnd = selection.isReversed ? selection.anchor : selection.active;
        let updatedSelection;
        if ((0, util_1.isStyleSheet)(editor.document.languageId)) {
            updatedSelection = direction === 'next' ?
                (0, selectItemStylesheet_1.nextItemStylesheet)(document, selectionStart, selectionEnd, rootNode) :
                (0, selectItemStylesheet_1.prevItemStylesheet)(document, selectionStart, selectionEnd, rootNode);
        }
        else {
            updatedSelection = direction === 'next' ?
                (0, selectItemHTML_1.nextItemHTML)(document, selectionStart, selectionEnd, rootNode) :
                (0, selectItemHTML_1.prevItemHTML)(document, selectionStart, selectionEnd, rootNode);
        }
        newSelections.push(updatedSelection ? updatedSelection : selection);
    });
    editor.selections = newSelections;
    editor.revealRange(editor.selections[editor.selections.length - 1]);
}
exports.fetchSelectItem = fetchSelectItem;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.prevItemHTML = exports.nextItemHTML = void 0;
const util_1 = __webpack_require__(6);
function nextItemHTML(document, selectionStart, selectionEnd, rootNode) {
    const selectionEndOffset = document.offsetAt(selectionEnd);
    let currentNode = (0, util_1.getHtmlFlatNode)(document.getText(), rootNode, selectionEndOffset, false);
    let nextNode = undefined;
    if (!currentNode) {
        return;
    }
    if (currentNode.type !== 'comment') {
        // If cursor is in the tag name, select tag
        if (currentNode.open &&
            selectionEndOffset < currentNode.open.start + currentNode.name.length) {
            return getSelectionFromNode(document, currentNode);
        }
        // If cursor is in the open tag, look for attributes
        if (currentNode.open &&
            selectionEndOffset < currentNode.open.end) {
            const selectionStartOffset = document.offsetAt(selectionStart);
            const attrSelection = getNextAttribute(document, selectionStartOffset, selectionEndOffset, currentNode);
            if (attrSelection) {
                return attrSelection;
            }
        }
        // Get the first child of current node which is right after the cursor and is not a comment
        nextNode = currentNode.firstChild;
        while (nextNode && (selectionEndOffset >= nextNode.end || nextNode.type === 'comment')) {
            nextNode = nextNode.nextSibling;
        }
    }
    // Get next sibling of current node which is not a comment. If none is found try the same on the parent
    while (!nextNode && currentNode) {
        if (currentNode.nextSibling) {
            if (currentNode.nextSibling.type !== 'comment') {
                nextNode = currentNode.nextSibling;
            }
            else {
                currentNode = currentNode.nextSibling;
            }
        }
        else {
            currentNode = currentNode.parent;
        }
    }
    return nextNode && getSelectionFromNode(document, nextNode);
}
exports.nextItemHTML = nextItemHTML;
function prevItemHTML(document, selectionStart, selectionEnd, rootNode) {
    const selectionStartOffset = document.offsetAt(selectionStart);
    let currentNode = (0, util_1.getHtmlFlatNode)(document.getText(), rootNode, selectionStartOffset, false);
    let prevNode = undefined;
    if (!currentNode) {
        return;
    }
    const selectionEndOffset = document.offsetAt(selectionEnd);
    if (currentNode.open &&
        currentNode.type !== 'comment' &&
        selectionStartOffset - 1 > currentNode.open.start) {
        if (selectionStartOffset < currentNode.open.end || !currentNode.firstChild || selectionEndOffset <= currentNode.firstChild.start) {
            prevNode = currentNode;
        }
        else {
            // Select the child that appears just before the cursor and is not a comment
            prevNode = currentNode.firstChild;
            let oldOption = undefined;
            while (prevNode.nextSibling && selectionStartOffset >= prevNode.nextSibling.end) {
                if (prevNode && prevNode.type !== 'comment') {
                    oldOption = prevNode;
                }
                prevNode = prevNode.nextSibling;
            }
            prevNode = (0, util_1.getDeepestFlatNode)((prevNode && prevNode.type !== 'comment') ? prevNode : oldOption);
        }
    }
    // Select previous sibling which is not a comment. If none found, then select parent
    while (!prevNode && currentNode) {
        if (currentNode.previousSibling) {
            if (currentNode.previousSibling.type !== 'comment') {
                prevNode = (0, util_1.getDeepestFlatNode)(currentNode.previousSibling);
            }
            else {
                currentNode = currentNode.previousSibling;
            }
        }
        else {
            prevNode = currentNode.parent;
        }
    }
    if (!prevNode) {
        return undefined;
    }
    const attrSelection = getPrevAttribute(document, selectionStartOffset, selectionEndOffset, prevNode);
    return attrSelection ? attrSelection : getSelectionFromNode(document, prevNode);
}
exports.prevItemHTML = prevItemHTML;
function getSelectionFromNode(document, node) {
    if (node && node.open) {
        const selectionStart = node.open.start + 1;
        const selectionEnd = selectionStart + node.name.length;
        return (0, util_1.offsetRangeToSelection)(document, selectionStart, selectionEnd);
    }
    return undefined;
}
function getNextAttribute(document, selectionStart, selectionEnd, node) {
    if (!node.attributes || node.attributes.length === 0 || node.type === 'comment') {
        return;
    }
    for (const attr of node.attributes) {
        if (selectionEnd < attr.start) {
            // select full attr
            return (0, util_1.offsetRangeToSelection)(document, attr.start, attr.end);
        }
        if (!attr.value || attr.value.start === attr.value.end) {
            // No attr value to select
            continue;
        }
        if ((selectionStart === attr.start && selectionEnd === attr.end) ||
            selectionEnd < attr.value.start) {
            // cursor is in attr name,  so select full attr value
            return (0, util_1.offsetRangeToSelection)(document, attr.value.start, attr.value.end);
        }
        // Fetch the next word in the attr value
        if (attr.value.toString().indexOf(' ') === -1) {
            // attr value does not have space, so no next word to find
            continue;
        }
        let pos = undefined;
        if (selectionStart === attr.value.start && selectionEnd === attr.value.end) {
            pos = -1;
        }
        if (pos === undefined && selectionEnd < attr.end) {
            const selectionEndCharacter = document.positionAt(selectionEnd).character;
            const attrValueStartCharacter = document.positionAt(attr.value.start).character;
            pos = selectionEndCharacter - attrValueStartCharacter - 1;
        }
        if (pos !== undefined) {
            const [newSelectionStartOffset, newSelectionEndOffset] = (0, util_1.findNextWord)(attr.value.toString(), pos);
            if (newSelectionStartOffset === undefined || newSelectionEndOffset === undefined) {
                return;
            }
            if (newSelectionStartOffset >= 0 && newSelectionEndOffset >= 0) {
                const newSelectionStart = attr.value.start + newSelectionStartOffset;
                const newSelectionEnd = attr.value.start + newSelectionEndOffset;
                return (0, util_1.offsetRangeToSelection)(document, newSelectionStart, newSelectionEnd);
            }
        }
    }
    return;
}
function getPrevAttribute(document, selectionStart, selectionEnd, node) {
    if (!node.attributes || node.attributes.length === 0 || node.type === 'comment') {
        return;
    }
    for (let i = node.attributes.length - 1; i >= 0; i--) {
        const attr = node.attributes[i];
        if (selectionStart <= attr.start) {
            continue;
        }
        if (!attr.value || attr.value.start === attr.value.end || selectionStart < attr.value.start) {
            // select full attr
            return (0, util_1.offsetRangeToSelection)(document, attr.start, attr.end);
        }
        if (selectionStart === attr.value.start) {
            if (selectionEnd >= attr.value.end) {
                // select full attr
                return (0, util_1.offsetRangeToSelection)(document, attr.start, attr.end);
            }
            // select attr value
            return (0, util_1.offsetRangeToSelection)(document, attr.value.start, attr.value.end);
        }
        // Fetch the prev word in the attr value
        const selectionStartCharacter = document.positionAt(selectionStart).character;
        const attrValueStartCharacter = document.positionAt(attr.value.start).character;
        const pos = selectionStart > attr.value.end ? attr.value.toString().length :
            selectionStartCharacter - attrValueStartCharacter;
        const [newSelectionStartOffset, newSelectionEndOffset] = (0, util_1.findPrevWord)(attr.value.toString(), pos);
        if (newSelectionStartOffset === undefined || newSelectionEndOffset === undefined) {
            return;
        }
        if (newSelectionStartOffset >= 0 && newSelectionEndOffset >= 0) {
            const newSelectionStart = attr.value.start + newSelectionStartOffset;
            const newSelectionEnd = attr.value.start + newSelectionEndOffset;
            return (0, util_1.offsetRangeToSelection)(document, newSelectionStart, newSelectionEnd);
        }
    }
    return;
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.prevItemStylesheet = exports.nextItemStylesheet = void 0;
const vscode = __webpack_require__(2);
const util_1 = __webpack_require__(6);
function nextItemStylesheet(document, startPosition, endPosition, rootNode) {
    const startOffset = document.offsetAt(startPosition);
    const endOffset = document.offsetAt(endPosition);
    let currentNode = (0, util_1.getFlatNode)(rootNode, endOffset, true);
    if (!currentNode) {
        currentNode = rootNode;
    }
    if (!currentNode) {
        return;
    }
    // Full property is selected, so select full property value next
    if (currentNode.type === 'property' &&
        startOffset === currentNode.start &&
        endOffset === currentNode.end) {
        return getSelectionFromProperty(document, currentNode, startOffset, endOffset, true, 'next');
    }
    // Part or whole of propertyValue is selected, so select the next word in the propertyValue
    if (currentNode.type === 'property' &&
        startOffset >= currentNode.valueToken.start &&
        endOffset <= currentNode.valueToken.end) {
        let singlePropertyValue = getSelectionFromProperty(document, currentNode, startOffset, endOffset, false, 'next');
        if (singlePropertyValue) {
            return singlePropertyValue;
        }
    }
    // Cursor is in the selector or in a property
    if ((currentNode.type === 'rule' && endOffset < currentNode.selectorToken.end)
        || (currentNode.type === 'property' && endOffset < currentNode.valueToken.end)) {
        return getSelectionFromNode(document, currentNode);
    }
    // Get the first child of current node which is right after the cursor
    let nextNode = currentNode.firstChild;
    while (nextNode && endOffset >= nextNode.end) {
        nextNode = nextNode.nextSibling;
    }
    // Get next sibling of current node or the parent
    while (!nextNode && currentNode) {
        nextNode = currentNode.nextSibling;
        currentNode = currentNode.parent;
    }
    return nextNode ? getSelectionFromNode(document, nextNode) : undefined;
}
exports.nextItemStylesheet = nextItemStylesheet;
function prevItemStylesheet(document, startPosition, endPosition, rootNode) {
    const startOffset = document.offsetAt(startPosition);
    const endOffset = document.offsetAt(endPosition);
    let currentNode = (0, util_1.getFlatNode)(rootNode, startOffset, false);
    if (!currentNode) {
        currentNode = rootNode;
    }
    if (!currentNode) {
        return;
    }
    // Full property value is selected, so select the whole property next
    if (currentNode.type === 'property' &&
        startOffset === currentNode.valueToken.start &&
        endOffset === currentNode.valueToken.end) {
        return getSelectionFromNode(document, currentNode);
    }
    // Part of propertyValue is selected, so select the prev word in the propertyValue
    if (currentNode.type === 'property' &&
        startOffset >= currentNode.valueToken.start &&
        endOffset <= currentNode.valueToken.end) {
        let singlePropertyValue = getSelectionFromProperty(document, currentNode, startOffset, endOffset, false, 'prev');
        if (singlePropertyValue) {
            return singlePropertyValue;
        }
    }
    if (currentNode.type === 'property' || !currentNode.firstChild ||
        (currentNode.type === 'rule' && startOffset <= currentNode.firstChild.start)) {
        return getSelectionFromNode(document, currentNode);
    }
    // Select the child that appears just before the cursor
    let prevNode = currentNode.firstChild;
    while (prevNode.nextSibling && startOffset >= prevNode.nextSibling.end) {
        prevNode = prevNode.nextSibling;
    }
    prevNode = (0, util_1.getDeepestFlatNode)(prevNode);
    return getSelectionFromProperty(document, prevNode, startOffset, endOffset, false, 'prev');
}
exports.prevItemStylesheet = prevItemStylesheet;
function getSelectionFromNode(document, node) {
    if (!node) {
        return;
    }
    const nodeToSelect = node.type === 'rule' ? node.selectorToken : node;
    return (0, util_1.offsetRangeToSelection)(document, nodeToSelect.start, nodeToSelect.end);
}
function getSelectionFromProperty(document, node, selectionStart, selectionEnd, selectFullValue, direction) {
    if (!node || node.type !== 'property') {
        return;
    }
    const propertyNode = node;
    let propertyValue = propertyNode.valueToken.stream.substring(propertyNode.valueToken.start, propertyNode.valueToken.end);
    selectFullValue = selectFullValue ||
        (direction === 'prev' && selectionStart === propertyNode.valueToken.start && selectionEnd < propertyNode.valueToken.end);
    if (selectFullValue) {
        return (0, util_1.offsetRangeToSelection)(document, propertyNode.valueToken.start, propertyNode.valueToken.end);
    }
    let pos = -1;
    if (direction === 'prev') {
        if (selectionStart === propertyNode.valueToken.start) {
            return;
        }
        const selectionStartChar = document.positionAt(selectionStart).character;
        const tokenStartChar = document.positionAt(propertyNode.valueToken.start).character;
        pos = selectionStart > propertyNode.valueToken.end ? propertyValue.length :
            selectionStartChar - tokenStartChar;
    }
    else if (direction === 'next') {
        if (selectionEnd === propertyNode.valueToken.end &&
            (selectionStart > propertyNode.valueToken.start || !propertyValue.includes(' '))) {
            return;
        }
        const selectionEndChar = document.positionAt(selectionEnd).character;
        const tokenStartChar = document.positionAt(propertyNode.valueToken.start).character;
        pos = selectionEnd === propertyNode.valueToken.end ? -1 :
            selectionEndChar - tokenStartChar - 1;
    }
    let [newSelectionStartOffset, newSelectionEndOffset] = direction === 'prev' ? (0, util_1.findPrevWord)(propertyValue, pos) : (0, util_1.findNextWord)(propertyValue, pos);
    if (!newSelectionStartOffset && !newSelectionEndOffset) {
        return;
    }
    const tokenStart = document.positionAt(propertyNode.valueToken.start);
    const newSelectionStart = tokenStart.translate(0, newSelectionStartOffset);
    const newSelectionEnd = tokenStart.translate(0, newSelectionEndOffset);
    return new vscode.Selection(newSelectionStart, newSelectionEnd);
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateMathExpression = void 0;
/* Based on @sergeche's work in his emmet plugin */
const vscode = __webpack_require__(2);
const math_expression_1 = __webpack_require__(46);
function evaluateMathExpression() {
    if (!vscode.window.activeTextEditor) {
        vscode.window.showInformationMessage('No editor is active');
        return Promise.resolve(false);
    }
    const editor = vscode.window.activeTextEditor;
    return editor.edit(editBuilder => {
        editor.selections.forEach(selection => {
            // startpos always comes before endpos
            const startpos = selection.isReversed ? selection.active : selection.anchor;
            const endpos = selection.isReversed ? selection.anchor : selection.active;
            const selectionText = editor.document.getText(new vscode.Range(startpos, endpos));
            try {
                if (selectionText) {
                    // respect selections
                    const result = String((0, math_expression_1.default)(selectionText));
                    editBuilder.replace(new vscode.Range(startpos, endpos), result);
                }
                else {
                    // no selection made, extract expression from line
                    const lineToSelectionEnd = editor.document.getText(new vscode.Range(new vscode.Position(selection.end.line, 0), endpos));
                    const extractedIndices = (0, math_expression_1.extract)(lineToSelectionEnd);
                    if (!extractedIndices) {
                        throw new Error('Invalid extracted indices');
                    }
                    const result = String((0, math_expression_1.default)(lineToSelectionEnd.substr(extractedIndices[0], extractedIndices[1])));
                    const rangeToReplace = new vscode.Range(new vscode.Position(selection.end.line, extractedIndices[0]), new vscode.Position(selection.end.line, extractedIndices[1]));
                    editBuilder.replace(rangeToReplace, result);
                }
            }
            catch (err) {
                vscode.window.showErrorMessage('Could not evaluate expression');
                // Ignore error since most likely it’s because of non-math expression
                console.warn('Math evaluation error', err);
            }
        });
    });
}
exports.evaluateMathExpression = evaluateMathExpression;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return extract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony import */ var _emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);


const nullary = token("null" /* Null */, 0);
/**
 * Parses given expression in forward direction
 */
function parse(expr) {
    const scanner = typeof expr === 'string' ? new _emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["default"](expr) : expr;
    let ch;
    let priority = 0;
    let expected = (1 /* Primary */ | 4 /* LParen */ | 16 /* Sign */);
    const tokens = [];
    while (!scanner.eof()) {
        scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isWhiteSpace"]);
        scanner.start = scanner.pos;
        if (consumeNumber(scanner)) {
            if ((expected & 1 /* Primary */) === 0) {
                error('Unexpected number', scanner);
            }
            tokens.push(number(scanner.current()));
            expected = (2 /* Operator */ | 8 /* RParen */);
        }
        else if (isOperator(scanner.peek())) {
            ch = scanner.next();
            if (isSign(ch) && (expected & 16 /* Sign */)) {
                if (isNegativeSign(ch)) {
                    tokens.push(op1(ch, priority));
                }
                expected = (1 /* Primary */ | 4 /* LParen */ | 16 /* Sign */);
            }
            else {
                if ((expected & 2 /* Operator */) === 0) {
                    error('Unexpected operator', scanner);
                }
                tokens.push(op2(ch, priority));
                expected = (1 /* Primary */ | 4 /* LParen */ | 16 /* Sign */);
            }
        }
        else if (scanner.eat(40 /* LeftParenthesis */)) {
            if ((expected & 4 /* LParen */) === 0) {
                error('Unexpected "("', scanner);
            }
            priority += 10;
            expected = (1 /* Primary */ | 4 /* LParen */ | 16 /* Sign */ | 32 /* NullaryCall */);
        }
        else if (scanner.eat(41 /* RightParenthesis */)) {
            priority -= 10;
            if (expected & 32 /* NullaryCall */) {
                tokens.push(nullary);
            }
            else if ((expected & 8 /* RParen */) === 0) {
                error('Unexpected ")"', scanner);
            }
            expected = (2 /* Operator */ | 8 /* RParen */ | 4 /* LParen */);
        }
        else {
            error('Unknown character', scanner);
        }
    }
    if (priority < 0 || priority >= 10) {
        error('Unmatched "()"', scanner);
    }
    const result = orderTokens(tokens);
    if (result === null) {
        error('Parity', scanner);
    }
    return result;
}
/**
 * Consumes number from given stream
 * @return Returns `true` if number was consumed
 */
function consumeNumber(scanner) {
    const start = scanner.pos;
    if (scanner.eat(46 /* Dot */) && scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])) {
        // short decimal notation: .025
        return true;
    }
    if (scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"]) && (!scanner.eat(46 /* Dot */) || scanner.eatWhile(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"]))) {
        // either integer or decimal: 10, 10.25
        return true;
    }
    scanner.pos = start;
    return false;
}
/**
 * Orders parsed tokens (operands and operators) in given array so that they are
 * laid off in order of execution
 */
function orderTokens(tokens) {
    const operators = [];
    const operands = [];
    let nOperators = 0;
    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        if (t.type === "num" /* Number */) {
            operands.push(t);
        }
        else {
            nOperators += t.type === "op1" /* Op1 */ ? 1 : 2;
            while (operators.length) {
                if (t.priority <= operators[operators.length - 1].priority) {
                    operands.push(operators.pop());
                }
                else {
                    break;
                }
            }
            operators.push(t);
        }
    }
    return nOperators + 1 === operands.length + operators.length
        ? operands.concat(operators.reverse())
        : null /* parity */;
}
/**
 * Number token factory
 */
function number(value, priority) {
    return token("num" /* Number */, parseFloat(value), priority);
}
/**
 * Unary operator factory
 * @param value    Operator  character code
 * @param priority Operator execution priority
 */
function op1(value, priority = 0) {
    if (value === 45 /* Minus */) {
        priority += 2;
    }
    return token("op1" /* Op1 */, value, priority);
}
/**
 * Binary operator factory
 * @param value Operator  character code
 * @param priority Operator execution priority
 */
function op2(value, priority = 0) {
    if (value === 42 /* Multiply */) {
        priority += 1;
    }
    else if (value === 47 /* Divide */ || value === 92 /* IntDivide */) {
        priority += 2;
    }
    return token("op2" /* Op2 */, value, priority);
}
function error(name, scanner) {
    if (scanner) {
        name += ` at column ${scanner.pos} of expression`;
    }
    throw new Error(name);
}
function isSign(ch) {
    return isPositiveSign(ch) || isNegativeSign(ch);
}
function isPositiveSign(ch) {
    return ch === 43 /* Plus */;
}
function isNegativeSign(ch) {
    return ch === 45 /* Minus */;
}
function isOperator(ch) {
    return ch === 43 /* Plus */ || ch === 45 /* Minus */ || ch === 42 /* Multiply */
        || ch === 47 /* Divide */ || ch === 92 /* IntDivide */;
}
function token(type, value, priority = 0) {
    return { type, value, priority };
}

const defaultOptions = {
    lookAhead: true,
    whitespace: true
};
function extract(text, pos = text.length, options) {
    const opt = Object.assign(Object.assign({}, defaultOptions), options);
    const scanner = { text, pos };
    let ch;
    if (opt.lookAhead && cur(scanner) === 41 /* RightParenthesis */) {
        // Basically, we should consume right parenthesis only with optional whitespace
        scanner.pos++;
        const len = text.length;
        while (scanner.pos < len) {
            ch = cur(scanner);
            if (ch !== 41 /* RightParenthesis */ && !(opt.whitespace && Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isSpace"])(ch))) {
                break;
            }
            scanner.pos++;
        }
    }
    const end = scanner.pos;
    let braces = 0;
    while (scanner.pos >= 0) {
        if (number$1(scanner)) {
            continue;
        }
        ch = prev(scanner);
        if (ch === 41 /* RightParenthesis */) {
            braces++;
        }
        else if (ch === 40 /* LeftParenthesis */) {
            if (!braces) {
                break;
            }
            braces--;
        }
        else if (!((opt.whitespace && Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isSpace"])(ch)) || isSign(ch) || isOperator(ch))) {
            break;
        }
        scanner.pos--;
    }
    if (scanner.pos !== end && !braces) {
        // Trim whitespace
        while (Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isSpace"])(cur(scanner))) {
            scanner.pos++;
        }
        return [scanner.pos, end];
    }
    return null;
}
/**
 * Backward-consumes number from given scanner, if possible
 */
function number$1(scanner) {
    if (Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(prev(scanner))) {
        scanner.pos--;
        let dot = false;
        let ch;
        while (scanner.pos >= 0) {
            ch = prev(scanner);
            if (ch === 46 /* . */) {
                if (dot) {
                    // Decimal delimiter already consumed, abort
                    break;
                }
                dot = true;
            }
            else if (!Object(_emmetio_scanner__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(ch)) {
                break;
            }
            scanner.pos--;
        }
        return true;
    }
    return false;
}
function prev(scanner) {
    return scanner.text.charCodeAt(scanner.pos - 1);
}
function cur(scanner) {
    return scanner.text.charCodeAt(scanner.pos);
}

const ops1 = {
    [45 /* Minus */]: num => -num
};
const ops2 = {
    [43 /* Plus */]: (a, b) => a + b,
    [45 /* Minus */]: (a, b) => a - b,
    [42 /* Multiply */]: (a, b) => a * b,
    [47 /* Divide */]: (a, b) => a / b,
    [92 /* IntDivide */]: (a, b) => Math.floor(a / b)
};
/**
 * Evaluates given math expression
 * @param expr Expression to evaluate
 */
function evaluate(expr) {
    if (!Array.isArray(expr)) {
        expr = parse(expr);
    }
    if (!expr || !expr.length) {
        return null;
    }
    const nStack = [];
    let n1;
    let n2;
    let f;
    for (let i = 0, il = expr.length; i < il; i++) {
        const token = expr[i];
        if (token.type === "num" /* Number */) {
            nStack.push(token.value);
        }
        else if (token.type === "op2" /* Op2 */) {
            n2 = nStack.pop();
            n1 = nStack.pop();
            f = ops2[token.value];
            nStack.push(f(n1, n2));
        }
        else if (token.type === "op1" /* Op1 */) {
            n1 = nStack.pop();
            f = ops1[token.value];
            nStack.push(f(n1));
        }
        else {
            throw new Error('Invalid expression');
        }
    }
    if (nStack.length > 1) {
        throw new Error('Invalid Expression (parity)');
    }
    return nStack[0];
}

/* harmony default export */ __webpack_exports__["default"] = (evaluate);

//# sourceMappingURL=math.es.js.map


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.locate = exports.update = exports.incrementDecrement = void 0;
/* Based on @sergeche's work in his emmet plugin */
const vscode = __webpack_require__(2);
const reNumber = /[0-9]/;
/**
 * Incerement number under caret of given editor
 */
function incrementDecrement(delta) {
    if (!vscode.window.activeTextEditor) {
        vscode.window.showInformationMessage('No editor is active');
        return;
    }
    const editor = vscode.window.activeTextEditor;
    return editor.edit(editBuilder => {
        editor.selections.forEach(selection => {
            let rangeToReplace = locate(editor.document, selection.isReversed ? selection.anchor : selection.active);
            if (!rangeToReplace) {
                return;
            }
            const text = editor.document.getText(rangeToReplace);
            if (isValidNumber(text)) {
                editBuilder.replace(rangeToReplace, update(text, delta));
            }
        });
    });
}
exports.incrementDecrement = incrementDecrement;
/**
 * Updates given number with `delta` and returns string formatted according
 * to original string format
 */
function update(numString, delta) {
    let m;
    let decimals = (m = numString.match(/\.(\d+)$/)) ? m[1].length : 1;
    let output = String((parseFloat(numString) + delta).toFixed(decimals)).replace(/\.0+$/, '');
    if (m = numString.match(/^\-?(0\d+)/)) {
        // padded number: preserve padding
        output = output.replace(/^(\-?)(\d+)/, (_, minus, prefix) => minus + '0'.repeat(Math.max(0, (m ? m[1].length : 0) - prefix.length)) + prefix);
    }
    if (/^\-?\./.test(numString)) {
        // omit integer part
        output = output.replace(/^(\-?)0+/, '$1');
    }
    return output;
}
exports.update = update;
/**
 * Locates number from given position in the document
 *
 * @return Range of number or `undefined` if not found
 */
function locate(document, pos) {
    const line = document.lineAt(pos.line).text;
    let start = pos.character;
    let end = pos.character;
    let hadDot = false, hadMinus = false;
    let ch;
    while (start > 0) {
        ch = line[--start];
        if (ch === '-') {
            hadMinus = true;
            break;
        }
        else if (ch === '.' && !hadDot) {
            hadDot = true;
        }
        else if (!reNumber.test(ch)) {
            start++;
            break;
        }
    }
    if (line[end] === '-' && !hadMinus) {
        end++;
    }
    while (end < line.length) {
        ch = line[end++];
        if (ch === '.' && !hadDot && reNumber.test(line[end])) {
            // A dot must be followed by a number. Otherwise stop parsing
            hadDot = true;
        }
        else if (!reNumber.test(ch)) {
            end--;
            break;
        }
    }
    // ensure that found range contains valid number
    if (start !== end && isValidNumber(line.slice(start, end))) {
        return new vscode.Range(pos.line, start, pos.line, end);
    }
    return;
}
exports.locate = locate;
/**
 * Check if given string contains valid number
 */
function isValidNumber(str) {
    return str ? !isNaN(parseFloat(str)) : false;
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectCssValue = void 0;
const vscode_1 = __webpack_require__(2);
const util_1 = __webpack_require__(6);
const vendorPrefixes = ['-webkit-', '-moz-', '-ms-', '-o-', ''];
function reflectCssValue() {
    const editor = vscode_1.window.activeTextEditor;
    if (!editor) {
        vscode_1.window.showInformationMessage('No editor is active.');
        return;
    }
    const node = (0, util_1.getCssPropertyFromDocument)(editor, editor.selection.active);
    if (!node) {
        return;
    }
    return updateCSSNode(editor, node);
}
exports.reflectCssValue = reflectCssValue;
function updateCSSNode(editor, property) {
    const rule = property.parent;
    let currentPrefix = '';
    // Find vendor prefix of given property node
    for (const prefix of vendorPrefixes) {
        if (property.name.startsWith(prefix)) {
            currentPrefix = prefix;
            break;
        }
    }
    const propertyName = property.name.substr(currentPrefix.length);
    const propertyValue = property.value;
    return editor.edit(builder => {
        // Find properties with vendor prefixes, update each
        vendorPrefixes.forEach(prefix => {
            if (prefix === currentPrefix) {
                return;
            }
            const vendorProperty = (0, util_1.getCssPropertyFromRule)(rule, prefix + propertyName);
            if (vendorProperty) {
                const rangeToReplace = (0, util_1.offsetRangeToVsRange)(editor.document, vendorProperty.valueToken.start, vendorProperty.valueToken.end);
                builder.replace(rangeToReplace, propertyValue);
            }
        });
    });
}


/***/ })
/******/ ])));
//# sourceMappingURL=emmetBrowserMain.js.map