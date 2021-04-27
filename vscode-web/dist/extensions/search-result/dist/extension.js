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
/* WEBPACK VAR INJECTION */(function(process) {
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __webpack_require__(2);
const pathUtils = __webpack_require__(3);
const FILE_LINE_REGEX = /^(\S.*):$/;
const RESULT_LINE_REGEX = /^(\s+)(\d+)(:| )(\s+)(.*)$/;
const ELISION_REGEX = /⟪ ([0-9]+) characters skipped ⟫/g;
const SEARCH_RESULT_SELECTOR = { language: 'search-result', exclusive: true };
const DIRECTIVES = ['# Query:', '# Flags:', '# Including:', '# Excluding:', '# ContextLines:'];
const FLAGS = ['RegExp', 'CaseSensitive', 'IgnoreExcludeSettings', 'WordMatch'];
let cachedLastParse;
let documentChangeListener;
function activate(context) {
    const contextLineDecorations = vscode.window.createTextEditorDecorationType({ opacity: '0.7' });
    const matchLineDecorations = vscode.window.createTextEditorDecorationType({ fontWeight: 'bold' });
    const decorate = (editor) => {
        const parsed = parseSearchResults(editor.document).filter(isResultLine);
        const contextRanges = parsed.filter(line => line.isContext).map(line => line.prefixRange);
        const matchRanges = parsed.filter(line => !line.isContext).map(line => line.prefixRange);
        editor.setDecorations(contextLineDecorations, contextRanges);
        editor.setDecorations(matchLineDecorations, matchRanges);
    };
    if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.languageId === 'search-result') {
        decorate(vscode.window.activeTextEditor);
    }
    context.subscriptions.push(vscode.languages.registerDocumentSymbolProvider(SEARCH_RESULT_SELECTOR, {
        provideDocumentSymbols(document, token) {
            const results = parseSearchResults(document, token)
                .filter(isFileLine)
                .map(line => new vscode.DocumentSymbol(line.path, '', vscode.SymbolKind.File, line.allLocations.map(({ originSelectionRange }) => originSelectionRange).reduce((p, c) => p.union(c), line.location.originSelectionRange), line.location.originSelectionRange));
            return results;
        }
    }), vscode.languages.registerCompletionItemProvider(SEARCH_RESULT_SELECTOR, {
        provideCompletionItems(document, position) {
            const line = document.lineAt(position.line);
            if (position.line > 3) {
                return [];
            }
            if (position.character === 0 || (position.character === 1 && line.text === '#')) {
                const header = Array.from({ length: DIRECTIVES.length }).map((_, i) => document.lineAt(i).text);
                return DIRECTIVES
                    .filter(suggestion => header.every(line => line.indexOf(suggestion) === -1))
                    .map(flag => ({ label: flag, insertText: (flag.slice(position.character)) + ' ' }));
            }
            if (line.text.indexOf('# Flags:') === -1) {
                return [];
            }
            return FLAGS
                .filter(flag => line.text.indexOf(flag) === -1)
                .map(flag => ({ label: flag, insertText: flag + ' ' }));
        }
    }, '#'), vscode.languages.registerDefinitionProvider(SEARCH_RESULT_SELECTOR, {
        provideDefinition(document, position, token) {
            const lineResult = parseSearchResults(document, token)[position.line];
            if (!lineResult) {
                return [];
            }
            if (lineResult.type === 'file') {
                return lineResult.allLocations;
            }
            const location = lineResult.locations.find(l => l.originSelectionRange.contains(position));
            if (!location) {
                return [];
            }
            const targetPos = new vscode.Position(location.targetSelectionRange.start.line, location.targetSelectionRange.start.character + (position.character - location.originSelectionRange.start.character));
            return [{
                    ...location,
                    targetSelectionRange: new vscode.Range(targetPos, targetPos),
                }];
        }
    }), vscode.languages.registerDocumentLinkProvider(SEARCH_RESULT_SELECTOR, {
        async provideDocumentLinks(document, token) {
            return parseSearchResults(document, token)
                .filter(isFileLine)
                .map(({ location }) => ({ range: location.originSelectionRange, target: location.targetUri }));
        }
    }), vscode.window.onDidChangeActiveTextEditor(editor => {
        if ((editor === null || editor === void 0 ? void 0 : editor.document.languageId) === 'search-result') {
            // Clear the parse whenever we open a new editor.
            // Conservative because things like the URI might remain constant even if the contents change, and re-parsing even large files is relatively fast.
            cachedLastParse = undefined;
            documentChangeListener === null || documentChangeListener === void 0 ? void 0 : documentChangeListener.dispose();
            documentChangeListener = vscode.workspace.onDidChangeTextDocument(doc => {
                if (doc.document.uri === editor.document.uri) {
                    decorate(editor);
                }
            });
            decorate(editor);
        }
    }), { dispose() { cachedLastParse = undefined; documentChangeListener === null || documentChangeListener === void 0 ? void 0 : documentChangeListener.dispose(); } });
}
exports.activate = activate;
function relativePathToUri(path, resultsUri) {
    const userDataPrefix = '(Settings) ';
    if (path.startsWith(userDataPrefix)) {
        return vscode.Uri.file(path.slice(userDataPrefix.length)).with({ scheme: 'vscode-userdata' });
    }
    if (pathUtils.isAbsolute(path)) {
        if (/^[\\\/]Untitled-\d*$/.test(path)) {
            return vscode.Uri.file(path.slice(1)).with({ scheme: 'untitled', path: path.slice(1) });
        }
        return vscode.Uri.file(path);
    }
    if (path.indexOf('~/') === 0) {
        const homePath = process.env.HOME || process.env.HOMEPATH || '';
        return vscode.Uri.file(pathUtils.join(homePath, path.slice(2)));
    }
    const uriFromFolderWithPath = (folder, path) => vscode.Uri.joinPath(folder.uri, path);
    if (vscode.workspace.workspaceFolders) {
        const multiRootFormattedPath = /^(.*) • (.*)$/.exec(path);
        if (multiRootFormattedPath) {
            const [, workspaceName, workspacePath] = multiRootFormattedPath;
            const folder = vscode.workspace.workspaceFolders.filter(wf => wf.name === workspaceName)[0];
            if (folder) {
                return uriFromFolderWithPath(folder, workspacePath);
            }
        }
        else if (vscode.workspace.workspaceFolders.length === 1) {
            return uriFromFolderWithPath(vscode.workspace.workspaceFolders[0], path);
        }
        else if (resultsUri.scheme !== 'untitled') {
            // We're in a multi-root workspace, but the path is not multi-root formatted
            // Possibly a saved search from a single root session. Try checking if the search result document's URI is in a current workspace folder.
            const prefixMatch = vscode.workspace.workspaceFolders.filter(wf => resultsUri.toString().startsWith(wf.uri.toString()))[0];
            if (prefixMatch) {
                return uriFromFolderWithPath(prefixMatch, path);
            }
        }
    }
    console.error(`Unable to resolve path ${path}`);
    return undefined;
}
const isFileLine = (line) => line.type === 'file';
const isResultLine = (line) => line.type === 'result';
function parseSearchResults(document, token) {
    if (cachedLastParse && cachedLastParse.uri === document.uri && cachedLastParse.version === document.version) {
        return cachedLastParse.parse;
    }
    const lines = document.getText().split(/\r?\n/);
    const links = [];
    let currentTarget = undefined;
    let currentTargetLocations = undefined;
    for (let i = 0; i < lines.length; i++) {
        // TODO: This is probably always false, given we're pegging the thread...
        if (token === null || token === void 0 ? void 0 : token.isCancellationRequested) {
            return [];
        }
        const line = lines[i];
        const fileLine = FILE_LINE_REGEX.exec(line);
        if (fileLine) {
            const [, path] = fileLine;
            currentTarget = relativePathToUri(path, document.uri);
            if (!currentTarget) {
                continue;
            }
            currentTargetLocations = [];
            const location = {
                targetRange: new vscode.Range(0, 0, 0, 1),
                targetUri: currentTarget,
                originSelectionRange: new vscode.Range(i, 0, i, line.length),
            };
            links[i] = { type: 'file', location, allLocations: currentTargetLocations, path };
        }
        if (!currentTarget) {
            continue;
        }
        const resultLine = RESULT_LINE_REGEX.exec(line);
        if (resultLine) {
            const [, indentation, _lineNumber, seperator, resultIndentation] = resultLine;
            const lineNumber = +_lineNumber - 1;
            const resultStart = (indentation + _lineNumber + seperator + resultIndentation).length;
            const metadataOffset = (indentation + _lineNumber + seperator).length;
            const targetRange = new vscode.Range(Math.max(lineNumber - 3, 0), 0, lineNumber + 3, line.length);
            let locations = [];
            // Allow line number, indentation, etc to take you to definition as well.
            locations.push({
                targetRange,
                targetSelectionRange: new vscode.Range(lineNumber, 0, lineNumber, 1),
                targetUri: currentTarget,
                originSelectionRange: new vscode.Range(i, 0, i, resultStart),
            });
            let lastEnd = resultStart;
            let offset = 0;
            ELISION_REGEX.lastIndex = resultStart;
            for (let match; (match = ELISION_REGEX.exec(line));) {
                locations.push({
                    targetRange,
                    targetSelectionRange: new vscode.Range(lineNumber, offset, lineNumber, offset),
                    targetUri: currentTarget,
                    originSelectionRange: new vscode.Range(i, lastEnd, i, ELISION_REGEX.lastIndex - match[0].length),
                });
                offset += (ELISION_REGEX.lastIndex - lastEnd - match[0].length) + Number(match[1]);
                lastEnd = ELISION_REGEX.lastIndex;
            }
            if (lastEnd < line.length) {
                locations.push({
                    targetRange,
                    targetSelectionRange: new vscode.Range(lineNumber, offset, lineNumber, offset),
                    targetUri: currentTarget,
                    originSelectionRange: new vscode.Range(i, lastEnd, i, line.length),
                });
            }
            currentTargetLocations === null || currentTargetLocations === void 0 ? void 0 : currentTargetLocations.push(...locations);
            links[i] = { type: 'result', locations, isContext: seperator === ' ', prefixRange: new vscode.Range(i, 0, i, metadataOffset) };
        }
    }
    cachedLastParse = {
        version: document.version,
        parse: links,
        uri: document.uri
    };
    return links;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
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

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ })
/******/ ])));
//# sourceMappingURL=extension.js.map