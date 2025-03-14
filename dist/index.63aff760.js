// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2glVN":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"adjPd":[function(require,module,exports,__globalThis) {
var _utils = require("@noble/hashes/utils");
var _nostrTools = require("nostr-tools");
// Make necessary functions available to the global scope
window.connectESP32 = connectESP32;
window.sendData = sendData;
window.resetConfiguration = resetConfiguration;
window.updateDerivedKeys = updateDerivedKeys;
window.togglePasswordVisibility = togglePasswordVisibility;
window.handleModalConfirm = handleModalConfirm;
window.closeAlertModal = closeAlertModal;
window.validateAndSendData = validateAndSendData;
let port;
let writer;
let reader;
function validateAndSendData() {
    // Get all required inputs
    const requiredInputs = document.querySelectorAll('input[required]');
    let isValid = true;
    let firstInvalidInput = null;
    // Check each required input
    requiredInputs.forEach((input)=>{
        if (!input.value.trim()) {
            console.log("Input is empty:", input.id);
            isValid = false;
            input.classList.add('border-red-500', 'ring-2', 'ring-red-500');
            if (!firstInvalidInput) firstInvalidInput = input;
        } else input.classList.remove('border-red-500', 'ring-2', 'ring-red-500');
    });
    if (!isValid) {
        // Show alert modal with error message
        const alertMessage = document.getElementById('alertMessage');
        alertMessage.textContent = 'Please fill in all required fields';
        document.getElementById('alertModal').classList.remove('hidden');
        // Scroll to and focus the first invalid input
        if (firstInvalidInput) {
            firstInvalidInput.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            firstInvalidInput.focus();
        }
        return;
    }
    // If validation passes, proceed with sending data
    sendData();
}
async function connectESP32() {
    try {
        port = await navigator.serial.requestPort();
        await port.open({
            baudRate: 115200
        });
        writer = port.writable.getWriter();
        reader = port.readable.getReader();
        document.getElementById("status").innerText = "Connected to device.";
        // Hide the connection overlay
        document.getElementById("connectionOverlay").classList.add("hidden");
        // Show loading spinner
        document.getElementById("loadingSpinner").classList.remove("hidden");
        // Wait for 1 second to show the loading animation
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        // Hide loading spinner and load configuration
        document.getElementById("loadingSpinner").classList.add("hidden");
        await loadConfig();
    } catch (error) {
        console.error("Error connecting to device:", error);
        document.getElementById("status").innerText = "Failed to connect. Try refreshing the page and connecting again.";
    }
}
// Add these new modal-related functions
let modalResolve = null;
function showConfirmationModal(title, message) {
    document.getElementById('confirmationMessageTitle').innerHTML = title;
    document.getElementById('confirmationMessageContent').innerHTML = message;
    document.getElementById('confirmationModal').classList.remove('hidden');
    return new Promise((resolve)=>{
        modalResolve = resolve;
    });
}
function handleModalConfirm(confirmed) {
    document.getElementById('confirmationModal').classList.add('hidden');
    if (modalResolve) {
        modalResolve(confirmed);
        modalResolve = null;
    }
}
function showAlertModal(message) {
    document.getElementById('alertMessage').textContent = message;
    document.getElementById('alertModal').classList.remove('hidden');
}
function closeAlertModal() {
    document.getElementById('alertModal').classList.add('hidden');
}
async function sendData() {
    if (!writer) {
        document.getElementById("status").innerText = "Device not connected. Try refreshing the page and connecting again.";
        return;
    }
    const confirmed = await showConfirmationModal("Upload Configuration", "Are you sure you want to upload these configuration values? This will overwrite any existing values you have saved to your device");
    if (!confirmed) return;
    const config = {
        ssid: document.getElementById("wifiSsid").value,
        password: document.getElementById("wifiPassword").value,
        relay_uri: document.getElementById("relayUri").value,
        private_key: document.getElementById("hexPrivateKey").value,
        public_key: document.getElementById("hexPublicKey").value
    };
    const jsonData = JSON.stringify(config);
    console.log(jsonData);
    try {
        await writer.write(new TextEncoder().encode(jsonData + "\n"));
        document.getElementById("status").innerText = "Configuration updated successfully! Restart the device to use the new configuration.";
    } catch (error) {
        console.error("Error sending configuration:", error);
        document.getElementById("status").innerText = "Error sending configuration. Try refreshing the page and connecting again.";
    }
}
async function loadConfig() {
    console.log("Loading configuration...");
    if (!reader) {
        document.getElementById("status").innerText = "Device not connected. Try refreshing the page and connecting again.";
        return;
    }
    try {
        console.log("Sending command to request configuration...");
        await writer.write(new TextEncoder().encode("get_config\n"));
        // Read response until we get a complete JSON string
        let jsonStr = '';
        while(true){
            const { value, done } = await reader.read();
            if (done) break;
            jsonStr += new TextDecoder().decode(value);
            // Try to parse the accumulated string as JSON
            if (isValidJson(jsonStr)) {
                const config = JSON.parse(jsonStr);
                console.log("Configuration received:", config);
                // Populate form fields
                document.getElementById("wifiSsid").value = config.ssid || '';
                document.getElementById("wifiPassword").value = config.password || '';
                document.getElementById("relayUri").value = config.relay_uri || '';
                const pk = new Uint8Array(config.private_key.match(/.{1,2}/g).map((byte)=>parseInt(byte, 16)));
                const nsec = _nostrTools.nip19.nsecEncode(pk);
                document.getElementById("nsec").value = nsec || '';
                document.getElementById("hexPrivateKey").value = config.private_key || '';
                // derive the public key
                const pubkey = _nostrTools.getPublicKey(pk);
                document.getElementById("hexPublicKey").value = pubkey;
                // and the npub
                const npub = _nostrTools.nip19.npubEncode(pubkey);
                document.getElementById("npub").value = npub || '';
                document.getElementById("status").innerText = "Configuration loaded.";
                break;
            }
        }
    } catch (error) {
        console.error("Error loading configuration:", error);
        document.getElementById("status").innerText = "Error loading configuration. Try refreshing the page and connecting again.";
    }
}
function isValidJson(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}
// Replace the updateHexPrivateKey function with this new one
async function updateDerivedKeys(nsec) {
    try {
        if (!nsec.startsWith('nsec')) {
            document.getElementById('hexPrivateKey').value = '';
            document.getElementById('npub').value = '';
            document.getElementById('hexPublicKey').value = '';
            return;
        }
        const { type, data } = _nostrTools.nip19.decode(nsec);
        console.log(type, data);
        if (type === 'nsec') {
            // Update hex private key
            const hexPrivateKey = (0, _utils.bytesToHex)(data);
            document.getElementById('hexPrivateKey').value = hexPrivateKey;
            // Derive public key and npub
            const pubkey = _nostrTools.getPublicKey(hexPrivateKey);
            const npub = _nostrTools.nip19.npubEncode(pubkey);
            document.getElementById('npub').value = npub;
            document.getElementById('hexPublicKey').value = pubkey;
        } else {
            document.getElementById('hexPrivateKey').value = '';
            document.getElementById('npub').value = '';
            document.getElementById('hexPublicKey').value = '';
        }
    } catch (error) {
        document.getElementById('hexPrivateKey').value = '';
        document.getElementById('npub').value = '';
        document.getElementById('hexPublicKey').value = '';
        console.error('Error converting nsec to hex:', error);
    }
}
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(inputId + 'ToggleIcon');
    if (input.type === 'password') {
        input.type = 'text';
        icon.setAttribute('d', 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21');
    } else {
        input.type = 'password';
        icon.setAttribute('d', 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z');
    }
}
async function resetConfiguration() {
    if (!writer) {
        document.getElementById("status").innerText = "Device not connected. Try refreshing the page and connecting again.";
        return;
    }
    const confirmed = await showConfirmationModal("WARNING", "This will erase all configuration data from your device. Are you sure you want to continue?");
    if (!confirmed) return;
    try {
        await writer.write(new TextEncoder().encode("reset_config\n"));
        document.getElementById("status").innerText = "Configuration reset successfully!";
        // Clear all form fields
        document.getElementById("wifiSsid").value = '';
        document.getElementById("wifiPassword").value = '';
        document.getElementById("relayUri").value = '';
        document.getElementById("nsec").value = '';
        document.getElementById("hexPrivateKey").value = '';
        document.getElementById("npub").value = '';
        document.getElementById("hexPublicKey").value = '';
        showAlertModal("Configuration has been successfully reset!");
    } catch (error) {
        console.error("Error resetting configuration:", error);
        document.getElementById("status").innerText = "Error resetting configuration. Try refreshing the page and connecting again.";
    }
}
// Make NostrTools available globally
window.NostrTools = _nostrTools;

},{"@noble/hashes/utils":"2ehgp","nostr-tools":"khWR5"}],"2ehgp":[function(require,module,exports,__globalThis) {
"use strict";
/**
 * Utilities for hex, bytes, CSPRNG.
 * @module
 */ /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Hash = exports.nextTick = exports.byteSwapIfBE = exports.isLE = void 0;
exports.isBytes = isBytes;
exports.u8 = u8;
exports.u32 = u32;
exports.createView = createView;
exports.rotr = rotr;
exports.rotl = rotl;
exports.byteSwap = byteSwap;
exports.byteSwap32 = byteSwap32;
exports.bytesToHex = bytesToHex;
exports.hexToBytes = hexToBytes;
exports.asyncLoop = asyncLoop;
exports.utf8ToBytes = utf8ToBytes;
exports.toBytes = toBytes;
exports.concatBytes = concatBytes;
exports.checkOpts = checkOpts;
exports.wrapConstructor = wrapConstructor;
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
exports.randomBytes = randomBytes;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated (2025-04-30), we can just drop the import.
const crypto_1 = require("308a0f9b8753b4af");
const _assert_js_1 = require("f33264417aee0570");
// export { isBytes } from './_assert.js';
// We can't reuse isBytes from _assert, because somehow this causes huge perf issues
function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
// Cast array to different type
function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
// Cast array to view
function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
/** The rotate right (circular right shift) operation for uint32 */ function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
}
/** The rotate left (circular left shift) operation for uint32 */ function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
}
/** Is current platform little-endian? Most are. Big-Endian platform: IBM */ exports.isLE = (()=>new Uint8Array(new Uint32Array([
        0x11223344
    ]).buffer)[0] === 0x44)();
// The byte swap operation for uint32
function byteSwap(word) {
    return word << 24 & 0xff000000 | word << 8 & 0xff0000 | word >>> 8 & 0xff00 | word >>> 24 & 0xff;
}
/** Conditionally byte swap if on a big-endian platform */ exports.byteSwapIfBE = exports.isLE ? (n)=>n : (n)=>byteSwap(n);
/** In place byte swap for Uint32Array */ function byteSwap32(arr) {
    for(let i = 0; i < arr.length; i++)arr[i] = byteSwap(arr[i]);
}
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
/**
 * Convert byte array to hex string.
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    (0, _assert_js_1.abytes)(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9) return ch - asciis._0; // '2' => 50-48
    if (ch >= asciis.A && ch <= asciis.F) return ch - (asciis.A - 10); // 'B' => 66-(65-10)
    if (ch >= asciis.a && ch <= asciis.f) return ch - (asciis.a - 10); // 'b' => 98-(97-10)
    return;
}
/**
 * Convert hex string to byte array.
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2; // multiply first octet, e.g. 'a3' => 10*16+3 => 160 + 3 => 163
    }
    return array;
}
/**
 * There is no setImmediate in browser and setTimeout is slow.
 * Call of async fn will return Promise, which will be fullfiled only on
 * next scheduler queue processing step and this is exactly what we need.
 */ const nextTick = async ()=>{};
exports.nextTick = nextTick;
/** Returns control to thread each 'tick' ms to avoid blocking. */ async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
/**
 * Convert JS string to byte array.
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error('utf8ToBytes expected string, got ' + typeof str);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    (0, _assert_js_1.abytes)(data);
    return data;
}
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        (0, _assert_js_1.abytes)(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
/** For runtime check if class implements interface */ class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
function checkOpts(defaults, opts) {
    if (opts !== undefined && ({}).toString.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
/** Wraps hash function, creating an interface on top of it */ function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
/** Cryptographically secure PRNG. Uses internal OS-level `crypto.getRandomValues`. */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    // Legacy Node.js compatibility
    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === 'function') return crypto_1.crypto.randomBytes(bytesLength);
    throw new Error('crypto.getRandomValues must be defined');
}

},{"308a0f9b8753b4af":"85XD8","f33264417aee0570":"BFdql"}],"85XD8":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

},{}],"BFdql":[function(require,module,exports,__globalThis) {
"use strict";
/**
 * Internal assertion helpers.
 * @module
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.anumber = anumber;
exports.abytes = abytes;
exports.ahash = ahash;
exports.aexists = aexists;
exports.aoutput = aoutput;
/** Asserts something is positive integer. */ function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error('positive integer expected, got ' + n);
}
/** Is number an Uint8Array? Copied from utils for perf. */ function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === 'Uint8Array';
}
/** Asserts something is Uint8Array. */ function abytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error('Uint8Array expected of length ' + lengths + ', got length=' + b.length);
}
/** Asserts something is hash */ function ahash(h) {
    if (typeof h !== 'function' || typeof h.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    anumber(h.outputLen);
    anumber(h.blockLen);
}
/** Asserts a hash instance has not been destroyed / finished */ function aexists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
/** Asserts output is properly-sized byte array */ function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error('digestInto() expects output buffer of length at least ' + min);
}

},{}],"khWR5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Relay", ()=>Relay);
parcelHelpers.export(exports, "SimplePool", ()=>SimplePool);
parcelHelpers.export(exports, "finalizeEvent", ()=>finalizeEvent);
parcelHelpers.export(exports, "fj", ()=>fakejson_exports);
parcelHelpers.export(exports, "generateSecretKey", ()=>generateSecretKey);
parcelHelpers.export(exports, "getEventHash", ()=>getEventHash);
parcelHelpers.export(exports, "getFilterLimit", ()=>getFilterLimit);
parcelHelpers.export(exports, "getPublicKey", ()=>getPublicKey);
parcelHelpers.export(exports, "kinds", ()=>kinds_exports);
parcelHelpers.export(exports, "matchFilter", ()=>matchFilter);
parcelHelpers.export(exports, "matchFilters", ()=>matchFilters);
parcelHelpers.export(exports, "mergeFilters", ()=>mergeFilters);
parcelHelpers.export(exports, "nip04", ()=>nip04_exports);
parcelHelpers.export(exports, "nip05", ()=>nip05_exports);
parcelHelpers.export(exports, "nip10", ()=>nip10_exports);
parcelHelpers.export(exports, "nip11", ()=>nip11_exports);
parcelHelpers.export(exports, "nip13", ()=>nip13_exports);
parcelHelpers.export(exports, "nip18", ()=>nip18_exports);
parcelHelpers.export(exports, "nip19", ()=>nip19_exports);
parcelHelpers.export(exports, "nip21", ()=>nip21_exports);
parcelHelpers.export(exports, "nip25", ()=>nip25_exports);
parcelHelpers.export(exports, "nip27", ()=>nip27_exports);
parcelHelpers.export(exports, "nip28", ()=>nip28_exports);
parcelHelpers.export(exports, "nip30", ()=>nip30_exports);
parcelHelpers.export(exports, "nip39", ()=>nip39_exports);
parcelHelpers.export(exports, "nip42", ()=>nip42_exports);
parcelHelpers.export(exports, "nip44", ()=>nip44_exports);
parcelHelpers.export(exports, "nip47", ()=>nip47_exports);
parcelHelpers.export(exports, "nip57", ()=>nip57_exports);
parcelHelpers.export(exports, "nip59", ()=>nip59_exports);
parcelHelpers.export(exports, "nip98", ()=>nip98_exports);
parcelHelpers.export(exports, "parseReferences", ()=>parseReferences);
parcelHelpers.export(exports, "serializeEvent", ()=>serializeEvent);
parcelHelpers.export(exports, "sortEvents", ()=>sortEvents);
parcelHelpers.export(exports, "utils", ()=>utils_exports);
parcelHelpers.export(exports, "validateEvent", ()=>validateEvent);
parcelHelpers.export(exports, "verifiedSymbol", ()=>verifiedSymbol);
parcelHelpers.export(exports, "verifyEvent", ()=>verifyEvent);
// pure.ts
var _secp256K1 = require("@noble/curves/secp256k1");
var _utils = require("@noble/hashes/utils");
// pure.ts
var _sha256 = require("@noble/hashes/sha256");
var _base = require("@scure/base");
var _aes = require("@noble/ciphers/aes");
var _chacha = require("@noble/ciphers/chacha");
var _utils1 = require("@noble/ciphers/utils");
var _hkdf = require("@noble/hashes/hkdf");
var _hmac = require("@noble/hashes/hmac");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// core.ts
var verifiedSymbol = Symbol("verified");
var isRecord = (obj)=>obj instanceof Object;
function validateEvent(event) {
    if (!isRecord(event)) return false;
    if (typeof event.kind !== "number") return false;
    if (typeof event.content !== "string") return false;
    if (typeof event.created_at !== "number") return false;
    if (typeof event.pubkey !== "string") return false;
    if (!event.pubkey.match(/^[a-f0-9]{64}$/)) return false;
    if (!Array.isArray(event.tags)) return false;
    for(let i2 = 0; i2 < event.tags.length; i2++){
        let tag = event.tags[i2];
        if (!Array.isArray(tag)) return false;
        for(let j = 0; j < tag.length; j++){
            if (typeof tag[j] === "object") return false;
        }
    }
    return true;
}
function sortEvents(events) {
    return events.sort((a, b)=>{
        if (a.created_at !== b.created_at) return b.created_at - a.created_at;
        return a.id.localeCompare(b.id);
    });
}
// utils.ts
var utils_exports = {};
__export(utils_exports, {
    Queue: ()=>Queue,
    QueueNode: ()=>QueueNode,
    binarySearch: ()=>binarySearch,
    insertEventIntoAscendingList: ()=>insertEventIntoAscendingList,
    insertEventIntoDescendingList: ()=>insertEventIntoDescendingList,
    normalizeURL: ()=>normalizeURL,
    utf8Decoder: ()=>utf8Decoder,
    utf8Encoder: ()=>utf8Encoder
});
var utf8Decoder = new TextDecoder("utf-8");
var utf8Encoder = new TextEncoder();
function normalizeURL(url) {
    if (url.indexOf("://") === -1) url = "wss://" + url;
    let p = new URL(url);
    p.pathname = p.pathname.replace(/\/+/g, "/");
    if (p.pathname.endsWith("/")) p.pathname = p.pathname.slice(0, -1);
    if (p.port === "80" && p.protocol === "ws:" || p.port === "443" && p.protocol === "wss:") p.port = "";
    p.searchParams.sort();
    p.hash = "";
    return p.toString();
}
function insertEventIntoDescendingList(sortedArray, event) {
    const [idx, found] = binarySearch(sortedArray, (b)=>{
        if (event.id === b.id) return 0;
        if (event.created_at === b.created_at) return -1;
        return b.created_at - event.created_at;
    });
    if (!found) sortedArray.splice(idx, 0, event);
    return sortedArray;
}
function insertEventIntoAscendingList(sortedArray, event) {
    const [idx, found] = binarySearch(sortedArray, (b)=>{
        if (event.id === b.id) return 0;
        if (event.created_at === b.created_at) return -1;
        return event.created_at - b.created_at;
    });
    if (!found) sortedArray.splice(idx, 0, event);
    return sortedArray;
}
function binarySearch(arr, compare) {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        const cmp = compare(arr[mid]);
        if (cmp === 0) return [
            mid,
            true
        ];
        if (cmp < 0) end = mid - 1;
        else start = mid + 1;
    }
    return [
        start,
        false
    ];
}
var QueueNode = class {
    value;
    next = null;
    prev = null;
    constructor(message){
        this.value = message;
    }
};
var Queue = class {
    first;
    last;
    constructor(){
        this.first = null;
        this.last = null;
    }
    enqueue(value) {
        const newNode = new QueueNode(value);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        } else if (this.last === this.first) {
            this.last = newNode;
            this.last.prev = this.first;
            this.first.next = newNode;
        } else {
            newNode.prev = this.last;
            this.last.next = newNode;
            this.last = newNode;
        }
        return true;
    }
    dequeue() {
        if (!this.first) return null;
        if (this.first === this.last) {
            const target2 = this.first;
            this.first = null;
            this.last = null;
            return target2.value;
        }
        const target = this.first;
        this.first = target.next;
        return target.value;
    }
};
// pure.ts
var JS = class {
    generateSecretKey() {
        return (0, _secp256K1.schnorr).utils.randomPrivateKey();
    }
    getPublicKey(secretKey) {
        return (0, _utils.bytesToHex)((0, _secp256K1.schnorr).getPublicKey(secretKey));
    }
    finalizeEvent(t, secretKey) {
        const event = t;
        event.pubkey = (0, _utils.bytesToHex)((0, _secp256K1.schnorr).getPublicKey(secretKey));
        event.id = getEventHash(event);
        event.sig = (0, _utils.bytesToHex)((0, _secp256K1.schnorr).sign(getEventHash(event), secretKey));
        event[verifiedSymbol] = true;
        return event;
    }
    verifyEvent(event) {
        if (typeof event[verifiedSymbol] === "boolean") return event[verifiedSymbol];
        const hash = getEventHash(event);
        if (hash !== event.id) {
            event[verifiedSymbol] = false;
            return false;
        }
        try {
            const valid = (0, _secp256K1.schnorr).verify(event.sig, hash, event.pubkey);
            event[verifiedSymbol] = valid;
            return valid;
        } catch (err) {
            event[verifiedSymbol] = false;
            return false;
        }
    }
};
function serializeEvent(evt) {
    if (!validateEvent(evt)) throw new Error("can't serialize event with wrong or missing properties");
    return JSON.stringify([
        0,
        evt.pubkey,
        evt.created_at,
        evt.kind,
        evt.tags,
        evt.content
    ]);
}
function getEventHash(event) {
    let eventHash = (0, _sha256.sha256)(utf8Encoder.encode(serializeEvent(event)));
    return (0, _utils.bytesToHex)(eventHash);
}
var i = new JS();
var generateSecretKey = i.generateSecretKey;
var getPublicKey = i.getPublicKey;
var finalizeEvent = i.finalizeEvent;
var verifyEvent = i.verifyEvent;
// kinds.ts
var kinds_exports = {};
__export(kinds_exports, {
    Application: ()=>Application,
    BadgeAward: ()=>BadgeAward,
    BadgeDefinition: ()=>BadgeDefinition,
    BlockedRelaysList: ()=>BlockedRelaysList,
    BookmarkList: ()=>BookmarkList,
    Bookmarksets: ()=>Bookmarksets,
    Calendar: ()=>Calendar,
    CalendarEventRSVP: ()=>CalendarEventRSVP,
    ChannelCreation: ()=>ChannelCreation,
    ChannelHideMessage: ()=>ChannelHideMessage,
    ChannelMessage: ()=>ChannelMessage,
    ChannelMetadata: ()=>ChannelMetadata,
    ChannelMuteUser: ()=>ChannelMuteUser,
    ClassifiedListing: ()=>ClassifiedListing,
    ClientAuth: ()=>ClientAuth,
    CommunitiesList: ()=>CommunitiesList,
    CommunityDefinition: ()=>CommunityDefinition,
    CommunityPostApproval: ()=>CommunityPostApproval,
    Contacts: ()=>Contacts,
    CreateOrUpdateProduct: ()=>CreateOrUpdateProduct,
    CreateOrUpdateStall: ()=>CreateOrUpdateStall,
    Curationsets: ()=>Curationsets,
    Date: ()=>Date2,
    DirectMessageRelaysList: ()=>DirectMessageRelaysList,
    DraftClassifiedListing: ()=>DraftClassifiedListing,
    DraftLong: ()=>DraftLong,
    Emojisets: ()=>Emojisets,
    EncryptedDirectMessage: ()=>EncryptedDirectMessage,
    EventDeletion: ()=>EventDeletion,
    FileMetadata: ()=>FileMetadata,
    FileServerPreference: ()=>FileServerPreference,
    Followsets: ()=>Followsets,
    GenericRepost: ()=>GenericRepost,
    Genericlists: ()=>Genericlists,
    GiftWrap: ()=>GiftWrap,
    HTTPAuth: ()=>HTTPAuth,
    Handlerinformation: ()=>Handlerinformation,
    Handlerrecommendation: ()=>Handlerrecommendation,
    Highlights: ()=>Highlights,
    InterestsList: ()=>InterestsList,
    Interestsets: ()=>Interestsets,
    JobFeedback: ()=>JobFeedback,
    JobRequest: ()=>JobRequest,
    JobResult: ()=>JobResult,
    Label: ()=>Label,
    LightningPubRPC: ()=>LightningPubRPC,
    LiveChatMessage: ()=>LiveChatMessage,
    LiveEvent: ()=>LiveEvent,
    LongFormArticle: ()=>LongFormArticle,
    Metadata: ()=>Metadata,
    Mutelist: ()=>Mutelist,
    NWCWalletInfo: ()=>NWCWalletInfo,
    NWCWalletRequest: ()=>NWCWalletRequest,
    NWCWalletResponse: ()=>NWCWalletResponse,
    NostrConnect: ()=>NostrConnect,
    OpenTimestamps: ()=>OpenTimestamps,
    Pinlist: ()=>Pinlist,
    PrivateDirectMessage: ()=>PrivateDirectMessage,
    ProblemTracker: ()=>ProblemTracker,
    ProfileBadges: ()=>ProfileBadges,
    PublicChatsList: ()=>PublicChatsList,
    Reaction: ()=>Reaction,
    RecommendRelay: ()=>RecommendRelay,
    RelayList: ()=>RelayList,
    Relaysets: ()=>Relaysets,
    Report: ()=>Report,
    Reporting: ()=>Reporting,
    Repost: ()=>Repost,
    Seal: ()=>Seal,
    SearchRelaysList: ()=>SearchRelaysList,
    ShortTextNote: ()=>ShortTextNote,
    Time: ()=>Time,
    UserEmojiList: ()=>UserEmojiList,
    UserStatuses: ()=>UserStatuses,
    Zap: ()=>Zap,
    ZapGoal: ()=>ZapGoal,
    ZapRequest: ()=>ZapRequest,
    classifyKind: ()=>classifyKind,
    isEphemeralKind: ()=>isEphemeralKind,
    isKind: ()=>isKind,
    isParameterizedReplaceableKind: ()=>isParameterizedReplaceableKind,
    isRegularKind: ()=>isRegularKind,
    isReplaceableKind: ()=>isReplaceableKind
});
function isRegularKind(kind) {
    return 1e3 <= kind && kind < 1e4 || [
        1,
        2,
        4,
        5,
        6,
        7,
        8,
        16,
        40,
        41,
        42,
        43,
        44
    ].includes(kind);
}
function isReplaceableKind(kind) {
    return [
        0,
        3
    ].includes(kind) || 1e4 <= kind && kind < 2e4;
}
function isEphemeralKind(kind) {
    return 2e4 <= kind && kind < 3e4;
}
function isParameterizedReplaceableKind(kind) {
    return 3e4 <= kind && kind < 4e4;
}
function classifyKind(kind) {
    if (isRegularKind(kind)) return "regular";
    if (isReplaceableKind(kind)) return "replaceable";
    if (isEphemeralKind(kind)) return "ephemeral";
    if (isParameterizedReplaceableKind(kind)) return "parameterized";
    return "unknown";
}
function isKind(event, kind) {
    const kindAsArray = kind instanceof Array ? kind : [
        kind
    ];
    return validateEvent(event) && kindAsArray.includes(event.kind) || false;
}
var Metadata = 0;
var ShortTextNote = 1;
var RecommendRelay = 2;
var Contacts = 3;
var EncryptedDirectMessage = 4;
var EventDeletion = 5;
var Repost = 6;
var Reaction = 7;
var BadgeAward = 8;
var Seal = 13;
var PrivateDirectMessage = 14;
var GenericRepost = 16;
var ChannelCreation = 40;
var ChannelMetadata = 41;
var ChannelMessage = 42;
var ChannelHideMessage = 43;
var ChannelMuteUser = 44;
var OpenTimestamps = 1040;
var GiftWrap = 1059;
var FileMetadata = 1063;
var LiveChatMessage = 1311;
var ProblemTracker = 1971;
var Report = 1984;
var Reporting = 1984;
var Label = 1985;
var CommunityPostApproval = 4550;
var JobRequest = 5999;
var JobResult = 6999;
var JobFeedback = 7e3;
var ZapGoal = 9041;
var ZapRequest = 9734;
var Zap = 9735;
var Highlights = 9802;
var Mutelist = 1e4;
var Pinlist = 10001;
var RelayList = 10002;
var BookmarkList = 10003;
var CommunitiesList = 10004;
var PublicChatsList = 10005;
var BlockedRelaysList = 10006;
var SearchRelaysList = 10007;
var InterestsList = 10015;
var UserEmojiList = 10030;
var DirectMessageRelaysList = 10050;
var FileServerPreference = 10096;
var NWCWalletInfo = 13194;
var LightningPubRPC = 21e3;
var ClientAuth = 22242;
var NWCWalletRequest = 23194;
var NWCWalletResponse = 23195;
var NostrConnect = 24133;
var HTTPAuth = 27235;
var Followsets = 3e4;
var Genericlists = 30001;
var Relaysets = 30002;
var Bookmarksets = 30003;
var Curationsets = 30004;
var ProfileBadges = 30008;
var BadgeDefinition = 30009;
var Interestsets = 30015;
var CreateOrUpdateStall = 30017;
var CreateOrUpdateProduct = 30018;
var LongFormArticle = 30023;
var DraftLong = 30024;
var Emojisets = 30030;
var Application = 30078;
var LiveEvent = 30311;
var UserStatuses = 30315;
var ClassifiedListing = 30402;
var DraftClassifiedListing = 30403;
var Date2 = 31922;
var Time = 31923;
var Calendar = 31924;
var CalendarEventRSVP = 31925;
var Handlerrecommendation = 31989;
var Handlerinformation = 31990;
var CommunityDefinition = 34550;
// filter.ts
function matchFilter(filter, event) {
    if (filter.ids && filter.ids.indexOf(event.id) === -1) return false;
    if (filter.kinds && filter.kinds.indexOf(event.kind) === -1) return false;
    if (filter.authors && filter.authors.indexOf(event.pubkey) === -1) return false;
    for(let f in filter)if (f[0] === "#") {
        let tagName = f.slice(1);
        let values = filter[`#${tagName}`];
        if (values && !event.tags.find(([t, v])=>t === f.slice(1) && values.indexOf(v) !== -1)) return false;
    }
    if (filter.since && event.created_at < filter.since) return false;
    if (filter.until && event.created_at > filter.until) return false;
    return true;
}
function matchFilters(filters, event) {
    for(let i2 = 0; i2 < filters.length; i2++){
        if (matchFilter(filters[i2], event)) return true;
    }
    return false;
}
function mergeFilters(...filters) {
    let result = {};
    for(let i2 = 0; i2 < filters.length; i2++){
        let filter = filters[i2];
        Object.entries(filter).forEach(([property, values])=>{
            if (property === "kinds" || property === "ids" || property === "authors" || property[0] === "#") {
                result[property] = result[property] || [];
                for(let v = 0; v < values.length; v++){
                    let value = values[v];
                    if (!result[property].includes(value)) result[property].push(value);
                }
            }
        });
        if (filter.limit && (!result.limit || filter.limit > result.limit)) result.limit = filter.limit;
        if (filter.until && (!result.until || filter.until > result.until)) result.until = filter.until;
        if (filter.since && (!result.since || filter.since < result.since)) result.since = filter.since;
    }
    return result;
}
function getFilterLimit(filter) {
    if (filter.ids && !filter.ids.length) return 0;
    if (filter.kinds && !filter.kinds.length) return 0;
    if (filter.authors && !filter.authors.length) return 0;
    for (const [key, value] of Object.entries(filter)){
        if (key[0] === "#" && Array.isArray(value) && !value.length) return 0;
    }
    return Math.min(Math.max(0, filter.limit ?? Infinity), filter.ids?.length ?? Infinity, filter.authors?.length && filter.kinds?.every((kind)=>isReplaceableKind(kind)) ? filter.authors.length * filter.kinds.length : Infinity, filter.authors?.length && filter.kinds?.every((kind)=>isParameterizedReplaceableKind(kind)) && filter["#d"]?.length ? filter.authors.length * filter.kinds.length * filter["#d"].length : Infinity);
}
// fakejson.ts
var fakejson_exports = {};
__export(fakejson_exports, {
    getHex64: ()=>getHex64,
    getInt: ()=>getInt,
    getSubscriptionId: ()=>getSubscriptionId,
    matchEventId: ()=>matchEventId,
    matchEventKind: ()=>matchEventKind,
    matchEventPubkey: ()=>matchEventPubkey
});
function getHex64(json, field) {
    let len = field.length + 3;
    let idx = json.indexOf(`"${field}":`) + len;
    let s = json.slice(idx).indexOf(`"`) + idx + 1;
    return json.slice(s, s + 64);
}
function getInt(json, field) {
    let len = field.length;
    let idx = json.indexOf(`"${field}":`) + len + 3;
    let sliced = json.slice(idx);
    let end = Math.min(sliced.indexOf(","), sliced.indexOf("}"));
    return parseInt(sliced.slice(0, end), 10);
}
function getSubscriptionId(json) {
    let idx = json.slice(0, 22).indexOf(`"EVENT"`);
    if (idx === -1) return null;
    let pstart = json.slice(idx + 7 + 1).indexOf(`"`);
    if (pstart === -1) return null;
    let start = idx + 7 + 1 + pstart;
    let pend = json.slice(start + 1, 80).indexOf(`"`);
    if (pend === -1) return null;
    let end = start + 1 + pend;
    return json.slice(start + 1, end);
}
function matchEventId(json, id) {
    return id === getHex64(json, "id");
}
function matchEventPubkey(json, pubkey) {
    return pubkey === getHex64(json, "pubkey");
}
function matchEventKind(json, kind) {
    return kind === getInt(json, "kind");
}
// nip42.ts
var nip42_exports = {};
__export(nip42_exports, {
    makeAuthEvent: ()=>makeAuthEvent
});
function makeAuthEvent(relayURL, challenge) {
    return {
        kind: ClientAuth,
        created_at: Math.floor(Date.now() / 1e3),
        tags: [
            [
                "relay",
                relayURL
            ],
            [
                "challenge",
                challenge
            ]
        ],
        content: ""
    };
}
// helpers.ts
async function yieldThread() {
    return new Promise((resolve)=>{
        const ch = new MessageChannel();
        const handler = ()=>{
            ch.port1.removeEventListener("message", handler);
            resolve();
        };
        ch.port1.addEventListener("message", handler);
        ch.port2.postMessage(0);
        ch.port1.start();
    });
}
var alwaysTrue = (t)=>{
    t[verifiedSymbol] = true;
    return true;
};
// abstract-relay.ts
var AbstractRelay = class {
    url;
    _connected = false;
    onclose = null;
    onnotice = (msg)=>console.debug(`NOTICE from ${this.url}: ${msg}`);
    _onauth = null;
    baseEoseTimeout = 4400;
    connectionTimeout = 4400;
    publishTimeout = 4400;
    openSubs = /* @__PURE__ */ new Map();
    connectionTimeoutHandle;
    connectionPromise;
    openCountRequests = /* @__PURE__ */ new Map();
    openEventPublishes = /* @__PURE__ */ new Map();
    ws;
    incomingMessageQueue = new Queue();
    queueRunning = false;
    challenge;
    serial = 0;
    verifyEvent;
    _WebSocket;
    constructor(url, opts){
        this.url = normalizeURL(url);
        this.verifyEvent = opts.verifyEvent;
        this._WebSocket = opts.websocketImplementation || WebSocket;
    }
    static async connect(url, opts) {
        const relay = new AbstractRelay(url, opts);
        await relay.connect();
        return relay;
    }
    closeAllSubscriptions(reason) {
        for (let [_, sub] of this.openSubs)sub.close(reason);
        this.openSubs.clear();
        for (let [_, ep] of this.openEventPublishes)ep.reject(new Error(reason));
        this.openEventPublishes.clear();
        for (let [_, cr] of this.openCountRequests)cr.reject(new Error(reason));
        this.openCountRequests.clear();
    }
    get connected() {
        return this._connected;
    }
    async connect() {
        if (this.connectionPromise) return this.connectionPromise;
        this.challenge = void 0;
        this.connectionPromise = new Promise((resolve, reject)=>{
            this.connectionTimeoutHandle = setTimeout(()=>{
                reject("connection timed out");
                this.connectionPromise = void 0;
                this.onclose?.();
                this.closeAllSubscriptions("relay connection timed out");
            }, this.connectionTimeout);
            try {
                this.ws = new this._WebSocket(this.url);
            } catch (err) {
                reject(err);
                return;
            }
            this.ws.onopen = ()=>{
                clearTimeout(this.connectionTimeoutHandle);
                this._connected = true;
                resolve();
            };
            this.ws.onerror = (ev)=>{
                reject(ev.message || "websocket error");
                if (this._connected) {
                    this._connected = false;
                    this.connectionPromise = void 0;
                    this.onclose?.();
                    this.closeAllSubscriptions("relay connection errored");
                }
            };
            this.ws.onclose = async ()=>{
                if (this._connected) {
                    this._connected = false;
                    this.connectionPromise = void 0;
                    this.onclose?.();
                    this.closeAllSubscriptions("relay connection closed");
                }
            };
            this.ws.onmessage = this._onmessage.bind(this);
        });
        return this.connectionPromise;
    }
    async runQueue() {
        this.queueRunning = true;
        while(true){
            if (false === this.handleNext()) break;
            await yieldThread();
        }
        this.queueRunning = false;
    }
    handleNext() {
        const json = this.incomingMessageQueue.dequeue();
        if (!json) return false;
        const subid = getSubscriptionId(json);
        if (subid) {
            const so = this.openSubs.get(subid);
            if (!so) return;
            const id = getHex64(json, "id");
            const alreadyHave = so.alreadyHaveEvent?.(id);
            so.receivedEvent?.(this, id);
            if (alreadyHave) return;
        }
        try {
            let data = JSON.parse(json);
            switch(data[0]){
                case "EVENT":
                    {
                        const so = this.openSubs.get(data[1]);
                        const event = data[2];
                        if (this.verifyEvent(event) && matchFilters(so.filters, event)) so.onevent(event);
                        return;
                    }
                case "COUNT":
                    {
                        const id = data[1];
                        const payload = data[2];
                        const cr = this.openCountRequests.get(id);
                        if (cr) {
                            cr.resolve(payload.count);
                            this.openCountRequests.delete(id);
                        }
                        return;
                    }
                case "EOSE":
                    {
                        const so = this.openSubs.get(data[1]);
                        if (!so) return;
                        so.receivedEose();
                        return;
                    }
                case "OK":
                    {
                        const id = data[1];
                        const ok = data[2];
                        const reason = data[3];
                        const ep = this.openEventPublishes.get(id);
                        if (ep) {
                            if (ok) ep.resolve(reason);
                            else ep.reject(new Error(reason));
                            this.openEventPublishes.delete(id);
                        }
                        return;
                    }
                case "CLOSED":
                    {
                        const id = data[1];
                        const so = this.openSubs.get(id);
                        if (!so) return;
                        so.closed = true;
                        so.close(data[2]);
                        return;
                    }
                case "NOTICE":
                    this.onnotice(data[1]);
                    return;
                case "AUTH":
                    this.challenge = data[1];
                    this._onauth?.(data[1]);
                    return;
            }
        } catch (err) {
            return;
        }
    }
    async send(message) {
        if (!this.connectionPromise) throw new Error("sending on closed connection");
        this.connectionPromise.then(()=>{
            this.ws?.send(message);
        });
    }
    async auth(signAuthEvent) {
        if (!this.challenge) throw new Error("can't perform auth, no challenge was received");
        const evt = await signAuthEvent(makeAuthEvent(this.url, this.challenge));
        const ret = new Promise((resolve, reject)=>{
            this.openEventPublishes.set(evt.id, {
                resolve,
                reject
            });
        });
        this.send('["AUTH",' + JSON.stringify(evt) + "]");
        return ret;
    }
    async publish(event) {
        const ret = new Promise((resolve, reject)=>{
            this.openEventPublishes.set(event.id, {
                resolve,
                reject
            });
        });
        this.send('["EVENT",' + JSON.stringify(event) + "]");
        setTimeout(()=>{
            const ep = this.openEventPublishes.get(event.id);
            if (ep) {
                ep.reject(new Error("publish timed out"));
                this.openEventPublishes.delete(event.id);
            }
        }, this.publishTimeout);
        return ret;
    }
    async count(filters, params) {
        this.serial++;
        const id = params?.id || "count:" + this.serial;
        const ret = new Promise((resolve, reject)=>{
            this.openCountRequests.set(id, {
                resolve,
                reject
            });
        });
        this.send('["COUNT","' + id + '",' + JSON.stringify(filters).substring(1));
        return ret;
    }
    subscribe(filters, params) {
        const subscription = this.prepareSubscription(filters, params);
        subscription.fire();
        return subscription;
    }
    prepareSubscription(filters, params) {
        this.serial++;
        const id = params.id || "sub:" + this.serial;
        const subscription = new Subscription(this, id, filters, params);
        this.openSubs.set(id, subscription);
        return subscription;
    }
    close() {
        this.closeAllSubscriptions("relay connection closed by us");
        this._connected = false;
        this.ws?.close();
    }
    _onmessage(ev) {
        this.incomingMessageQueue.enqueue(ev.data);
        if (!this.queueRunning) this.runQueue();
    }
};
var Subscription = class {
    relay;
    id;
    closed = false;
    eosed = false;
    filters;
    alreadyHaveEvent;
    receivedEvent;
    onevent;
    oneose;
    onclose;
    eoseTimeout;
    eoseTimeoutHandle;
    constructor(relay, id, filters, params){
        this.relay = relay;
        this.filters = filters;
        this.id = id;
        this.alreadyHaveEvent = params.alreadyHaveEvent;
        this.receivedEvent = params.receivedEvent;
        this.eoseTimeout = params.eoseTimeout || relay.baseEoseTimeout;
        this.oneose = params.oneose;
        this.onclose = params.onclose;
        this.onevent = params.onevent || ((event)=>{
            console.warn(`onevent() callback not defined for subscription '${this.id}' in relay ${this.relay.url}. event received:`, event);
        });
    }
    fire() {
        this.relay.send('["REQ","' + this.id + '",' + JSON.stringify(this.filters).substring(1));
        this.eoseTimeoutHandle = setTimeout(this.receivedEose.bind(this), this.eoseTimeout);
    }
    receivedEose() {
        if (this.eosed) return;
        clearTimeout(this.eoseTimeoutHandle);
        this.eosed = true;
        this.oneose?.();
    }
    close(reason = "closed by caller") {
        if (!this.closed && this.relay.connected) {
            this.relay.send('["CLOSE",' + JSON.stringify(this.id) + "]");
            this.closed = true;
        }
        this.relay.openSubs.delete(this.id);
        this.onclose?.(reason);
    }
};
// relay.ts
var _WebSocket;
try {
    _WebSocket = WebSocket;
} catch  {}
var Relay = class extends AbstractRelay {
    constructor(url){
        super(url, {
            verifyEvent,
            websocketImplementation: _WebSocket
        });
    }
    static async connect(url) {
        const relay = new Relay(url);
        await relay.connect();
        return relay;
    }
};
// abstract-pool.ts
var AbstractSimplePool = class {
    relays = /* @__PURE__ */ new Map();
    seenOn = /* @__PURE__ */ new Map();
    trackRelays = false;
    verifyEvent;
    trustedRelayURLs = /* @__PURE__ */ new Set();
    _WebSocket;
    constructor(opts){
        this.verifyEvent = opts.verifyEvent;
        this._WebSocket = opts.websocketImplementation;
    }
    async ensureRelay(url, params) {
        url = normalizeURL(url);
        let relay = this.relays.get(url);
        if (!relay) {
            relay = new AbstractRelay(url, {
                verifyEvent: this.trustedRelayURLs.has(url) ? alwaysTrue : this.verifyEvent,
                websocketImplementation: this._WebSocket
            });
            if (params?.connectionTimeout) relay.connectionTimeout = params.connectionTimeout;
            this.relays.set(url, relay);
        }
        await relay.connect();
        return relay;
    }
    close(relays) {
        relays.map(normalizeURL).forEach((url)=>{
            this.relays.get(url)?.close();
        });
    }
    subscribeMany(relays, filters, params) {
        return this.subscribeManyMap(Object.fromEntries(relays.map((url)=>[
                url,
                filters
            ])), params);
    }
    subscribeManyMap(requests, params) {
        if (this.trackRelays) params.receivedEvent = (relay, id)=>{
            let set = this.seenOn.get(id);
            if (!set) {
                set = /* @__PURE__ */ new Set();
                this.seenOn.set(id, set);
            }
            set.add(relay);
        };
        const _knownIds = /* @__PURE__ */ new Set();
        const subs = [];
        const relaysLength = Object.keys(requests).length;
        const eosesReceived = [];
        let handleEose = (i2)=>{
            eosesReceived[i2] = true;
            if (eosesReceived.filter((a)=>a).length === relaysLength) {
                params.oneose?.();
                handleEose = ()=>{};
            }
        };
        const closesReceived = [];
        let handleClose = (i2, reason)=>{
            handleEose(i2);
            closesReceived[i2] = reason;
            if (closesReceived.filter((a)=>a).length === relaysLength) {
                params.onclose?.(closesReceived);
                handleClose = ()=>{};
            }
        };
        const localAlreadyHaveEventHandler = (id)=>{
            if (params.alreadyHaveEvent?.(id)) return true;
            const have = _knownIds.has(id);
            _knownIds.add(id);
            return have;
        };
        const allOpened = Promise.all(Object.entries(requests).map(async (req, i2, arr)=>{
            if (arr.indexOf(req) !== i2) {
                handleClose(i2, "duplicate url");
                return;
            }
            let [url, filters] = req;
            url = normalizeURL(url);
            let relay;
            try {
                relay = await this.ensureRelay(url, {
                    connectionTimeout: params.maxWait ? Math.max(params.maxWait * 0.8, params.maxWait - 1e3) : void 0
                });
            } catch (err) {
                handleClose(i2, err?.message || String(err));
                return;
            }
            let subscription = relay.subscribe(filters, {
                ...params,
                oneose: ()=>handleEose(i2),
                onclose: (reason)=>handleClose(i2, reason),
                alreadyHaveEvent: localAlreadyHaveEventHandler,
                eoseTimeout: params.maxWait
            });
            subs.push(subscription);
        }));
        return {
            async close () {
                await allOpened;
                subs.forEach((sub)=>{
                    sub.close();
                });
            }
        };
    }
    subscribeManyEose(relays, filters, params) {
        const subcloser = this.subscribeMany(relays, filters, {
            ...params,
            oneose () {
                subcloser.close();
            }
        });
        return subcloser;
    }
    async querySync(relays, filter, params) {
        return new Promise(async (resolve)=>{
            const events = [];
            this.subscribeManyEose(relays, [
                filter
            ], {
                ...params,
                onevent (event) {
                    events.push(event);
                },
                onclose (_) {
                    resolve(events);
                }
            });
        });
    }
    async get(relays, filter, params) {
        filter.limit = 1;
        const events = await this.querySync(relays, filter, params);
        events.sort((a, b)=>b.created_at - a.created_at);
        return events[0] || null;
    }
    publish(relays, event) {
        return relays.map(normalizeURL).map(async (url, i2, arr)=>{
            if (arr.indexOf(url) !== i2) return Promise.reject("duplicate url");
            let r = await this.ensureRelay(url);
            return r.publish(event).then((reason)=>{
                if (this.trackRelays) {
                    let set = this.seenOn.get(event.id);
                    if (!set) {
                        set = /* @__PURE__ */ new Set();
                        this.seenOn.set(event.id, set);
                    }
                    set.add(r);
                }
                return reason;
            });
        });
    }
    listConnectionStatus() {
        const map = /* @__PURE__ */ new Map();
        this.relays.forEach((relay, url)=>map.set(url, relay.connected));
        return map;
    }
    destroy() {
        this.relays.forEach((conn)=>conn.close());
        this.relays = /* @__PURE__ */ new Map();
    }
};
// pool.ts
var _WebSocket2;
try {
    _WebSocket2 = WebSocket;
} catch  {}
var SimplePool = class extends AbstractSimplePool {
    constructor(){
        super({
            verifyEvent,
            websocketImplementation: _WebSocket2
        });
    }
};
// nip19.ts
var nip19_exports = {};
__export(nip19_exports, {
    BECH32_REGEX: ()=>BECH32_REGEX,
    Bech32MaxSize: ()=>Bech32MaxSize,
    NostrTypeGuard: ()=>NostrTypeGuard,
    decode: ()=>decode,
    encodeBytes: ()=>encodeBytes,
    naddrEncode: ()=>naddrEncode,
    neventEncode: ()=>neventEncode,
    noteEncode: ()=>noteEncode,
    nprofileEncode: ()=>nprofileEncode,
    npubEncode: ()=>npubEncode,
    nsecEncode: ()=>nsecEncode
});
var NostrTypeGuard = {
    isNProfile: (value)=>/^nprofile1[a-z\d]+$/.test(value || ""),
    isNEvent: (value)=>/^nevent1[a-z\d]+$/.test(value || ""),
    isNAddr: (value)=>/^naddr1[a-z\d]+$/.test(value || ""),
    isNSec: (value)=>/^nsec1[a-z\d]{58}$/.test(value || ""),
    isNPub: (value)=>/^npub1[a-z\d]{58}$/.test(value || ""),
    isNote: (value)=>/^note1[a-z\d]+$/.test(value || ""),
    isNcryptsec: (value)=>/^ncryptsec1[a-z\d]+$/.test(value || "")
};
var Bech32MaxSize = 5e3;
var BECH32_REGEX = /[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;
function integerToUint8Array(number) {
    const uint8Array = new Uint8Array(4);
    uint8Array[0] = number >> 24 & 255;
    uint8Array[1] = number >> 16 & 255;
    uint8Array[2] = number >> 8 & 255;
    uint8Array[3] = number & 255;
    return uint8Array;
}
function decode(nip19) {
    let { prefix, words } = (0, _base.bech32).decode(nip19, Bech32MaxSize);
    let data = new Uint8Array((0, _base.bech32).fromWords(words));
    switch(prefix){
        case "nprofile":
            {
                let tlv = parseTLV(data);
                if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for nprofile");
                if (tlv[0][0].length !== 32) throw new Error("TLV 0 should be 32 bytes");
                return {
                    type: "nprofile",
                    data: {
                        pubkey: (0, _utils.bytesToHex)(tlv[0][0]),
                        relays: tlv[1] ? tlv[1].map((d)=>utf8Decoder.decode(d)) : []
                    }
                };
            }
        case "nevent":
            {
                let tlv = parseTLV(data);
                if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for nevent");
                if (tlv[0][0].length !== 32) throw new Error("TLV 0 should be 32 bytes");
                if (tlv[2] && tlv[2][0].length !== 32) throw new Error("TLV 2 should be 32 bytes");
                if (tlv[3] && tlv[3][0].length !== 4) throw new Error("TLV 3 should be 4 bytes");
                return {
                    type: "nevent",
                    data: {
                        id: (0, _utils.bytesToHex)(tlv[0][0]),
                        relays: tlv[1] ? tlv[1].map((d)=>utf8Decoder.decode(d)) : [],
                        author: tlv[2]?.[0] ? (0, _utils.bytesToHex)(tlv[2][0]) : void 0,
                        kind: tlv[3]?.[0] ? parseInt((0, _utils.bytesToHex)(tlv[3][0]), 16) : void 0
                    }
                };
            }
        case "naddr":
            {
                let tlv = parseTLV(data);
                if (!tlv[0]?.[0]) throw new Error("missing TLV 0 for naddr");
                if (!tlv[2]?.[0]) throw new Error("missing TLV 2 for naddr");
                if (tlv[2][0].length !== 32) throw new Error("TLV 2 should be 32 bytes");
                if (!tlv[3]?.[0]) throw new Error("missing TLV 3 for naddr");
                if (tlv[3][0].length !== 4) throw new Error("TLV 3 should be 4 bytes");
                return {
                    type: "naddr",
                    data: {
                        identifier: utf8Decoder.decode(tlv[0][0]),
                        pubkey: (0, _utils.bytesToHex)(tlv[2][0]),
                        kind: parseInt((0, _utils.bytesToHex)(tlv[3][0]), 16),
                        relays: tlv[1] ? tlv[1].map((d)=>utf8Decoder.decode(d)) : []
                    }
                };
            }
        case "nsec":
            return {
                type: prefix,
                data
            };
        case "npub":
        case "note":
            return {
                type: prefix,
                data: (0, _utils.bytesToHex)(data)
            };
        default:
            throw new Error(`unknown prefix ${prefix}`);
    }
}
function parseTLV(data) {
    let result = {};
    let rest = data;
    while(rest.length > 0){
        let t = rest[0];
        let l = rest[1];
        let v = rest.slice(2, 2 + l);
        rest = rest.slice(2 + l);
        if (v.length < l) throw new Error(`not enough data to read on TLV ${t}`);
        result[t] = result[t] || [];
        result[t].push(v);
    }
    return result;
}
function nsecEncode(key) {
    return encodeBytes("nsec", key);
}
function npubEncode(hex) {
    return encodeBytes("npub", (0, _utils.hexToBytes)(hex));
}
function noteEncode(hex) {
    return encodeBytes("note", (0, _utils.hexToBytes)(hex));
}
function encodeBech32(prefix, data) {
    let words = (0, _base.bech32).toWords(data);
    return (0, _base.bech32).encode(prefix, words, Bech32MaxSize);
}
function encodeBytes(prefix, bytes) {
    return encodeBech32(prefix, bytes);
}
function nprofileEncode(profile) {
    let data = encodeTLV({
        0: [
            (0, _utils.hexToBytes)(profile.pubkey)
        ],
        1: (profile.relays || []).map((url)=>utf8Encoder.encode(url))
    });
    return encodeBech32("nprofile", data);
}
function neventEncode(event) {
    let kindArray;
    if (event.kind !== void 0) kindArray = integerToUint8Array(event.kind);
    let data = encodeTLV({
        0: [
            (0, _utils.hexToBytes)(event.id)
        ],
        1: (event.relays || []).map((url)=>utf8Encoder.encode(url)),
        2: event.author ? [
            (0, _utils.hexToBytes)(event.author)
        ] : [],
        3: kindArray ? [
            new Uint8Array(kindArray)
        ] : []
    });
    return encodeBech32("nevent", data);
}
function naddrEncode(addr) {
    let kind = new ArrayBuffer(4);
    new DataView(kind).setUint32(0, addr.kind, false);
    let data = encodeTLV({
        0: [
            utf8Encoder.encode(addr.identifier)
        ],
        1: (addr.relays || []).map((url)=>utf8Encoder.encode(url)),
        2: [
            (0, _utils.hexToBytes)(addr.pubkey)
        ],
        3: [
            new Uint8Array(kind)
        ]
    });
    return encodeBech32("naddr", data);
}
function encodeTLV(tlv) {
    let entries = [];
    Object.entries(tlv).reverse().forEach(([t, vs])=>{
        vs.forEach((v)=>{
            let entry = new Uint8Array(v.length + 2);
            entry.set([
                parseInt(t)
            ], 0);
            entry.set([
                v.length
            ], 1);
            entry.set(v, 2);
            entries.push(entry);
        });
    });
    return (0, _utils.concatBytes)(...entries);
}
// references.ts
var mentionRegex = /\bnostr:((note|npub|naddr|nevent|nprofile)1\w+)\b|#\[(\d+)\]/g;
function parseReferences(evt) {
    let references = [];
    for (let ref of evt.content.matchAll(mentionRegex)){
        if (ref[2]) try {
            let { type, data } = decode(ref[1]);
            switch(type){
                case "npub":
                    references.push({
                        text: ref[0],
                        profile: {
                            pubkey: data,
                            relays: []
                        }
                    });
                    break;
                case "nprofile":
                    references.push({
                        text: ref[0],
                        profile: data
                    });
                    break;
                case "note":
                    references.push({
                        text: ref[0],
                        event: {
                            id: data,
                            relays: []
                        }
                    });
                    break;
                case "nevent":
                    references.push({
                        text: ref[0],
                        event: data
                    });
                    break;
                case "naddr":
                    references.push({
                        text: ref[0],
                        address: data
                    });
                    break;
            }
        } catch (err) {}
        else if (ref[3]) {
            let idx = parseInt(ref[3], 10);
            let tag = evt.tags[idx];
            if (!tag) continue;
            switch(tag[0]){
                case "p":
                    references.push({
                        text: ref[0],
                        profile: {
                            pubkey: tag[1],
                            relays: tag[2] ? [
                                tag[2]
                            ] : []
                        }
                    });
                    break;
                case "e":
                    references.push({
                        text: ref[0],
                        event: {
                            id: tag[1],
                            relays: tag[2] ? [
                                tag[2]
                            ] : []
                        }
                    });
                    break;
                case "a":
                    try {
                        let [kind, pubkey, identifier] = tag[1].split(":");
                        references.push({
                            text: ref[0],
                            address: {
                                identifier,
                                pubkey,
                                kind: parseInt(kind, 10),
                                relays: tag[2] ? [
                                    tag[2]
                                ] : []
                            }
                        });
                    } catch (err) {}
                    break;
            }
        }
    }
    return references;
}
// nip04.ts
var nip04_exports = {};
__export(nip04_exports, {
    decrypt: ()=>decrypt,
    encrypt: ()=>encrypt
});
async function encrypt(secretKey, pubkey, text) {
    const privkey = secretKey instanceof Uint8Array ? (0, _utils.bytesToHex)(secretKey) : secretKey;
    const key = (0, _secp256K1.secp256k1).getSharedSecret(privkey, "02" + pubkey);
    const normalizedKey = getNormalizedX(key);
    let iv = Uint8Array.from((0, _utils.randomBytes)(16));
    let plaintext = utf8Encoder.encode(text);
    let ciphertext = (0, _aes.cbc)(normalizedKey, iv).encrypt(plaintext);
    let ctb64 = (0, _base.base64).encode(new Uint8Array(ciphertext));
    let ivb64 = (0, _base.base64).encode(new Uint8Array(iv.buffer));
    return `${ctb64}?iv=${ivb64}`;
}
async function decrypt(secretKey, pubkey, data) {
    const privkey = secretKey instanceof Uint8Array ? (0, _utils.bytesToHex)(secretKey) : secretKey;
    let [ctb64, ivb64] = data.split("?iv=");
    let key = (0, _secp256K1.secp256k1).getSharedSecret(privkey, "02" + pubkey);
    let normalizedKey = getNormalizedX(key);
    let iv = (0, _base.base64).decode(ivb64);
    let ciphertext = (0, _base.base64).decode(ctb64);
    let plaintext = (0, _aes.cbc)(normalizedKey, iv).decrypt(ciphertext);
    return utf8Decoder.decode(plaintext);
}
function getNormalizedX(key) {
    return key.slice(1, 33);
}
// nip05.ts
var nip05_exports = {};
__export(nip05_exports, {
    NIP05_REGEX: ()=>NIP05_REGEX,
    isNip05: ()=>isNip05,
    isValid: ()=>isValid,
    queryProfile: ()=>queryProfile,
    searchDomain: ()=>searchDomain,
    useFetchImplementation: ()=>useFetchImplementation
});
var NIP05_REGEX = /^(?:([\w.+-]+)@)?([\w_-]+(\.[\w_-]+)+)$/;
var isNip05 = (value)=>NIP05_REGEX.test(value || "");
var _fetch;
try {
    _fetch = fetch;
} catch (_) {}
function useFetchImplementation(fetchImplementation) {
    _fetch = fetchImplementation;
}
async function searchDomain(domain, query = "") {
    try {
        const url = `https://${domain}/.well-known/nostr.json?name=${query}`;
        const res = await _fetch(url, {
            redirect: "manual"
        });
        if (res.status !== 200) throw Error("Wrong response code");
        const json = await res.json();
        return json.names;
    } catch (_) {
        return {};
    }
}
async function queryProfile(fullname) {
    const match = fullname.match(NIP05_REGEX);
    if (!match) return null;
    const [, name = "_", domain] = match;
    try {
        const url = `https://${domain}/.well-known/nostr.json?name=${name}`;
        const res = await _fetch(url, {
            redirect: "manual"
        });
        if (res.status !== 200) throw Error("Wrong response code");
        const json = await res.json();
        const pubkey = json.names[name];
        return pubkey ? {
            pubkey,
            relays: json.relays?.[pubkey]
        } : null;
    } catch (_e) {
        return null;
    }
}
async function isValid(pubkey, nip05) {
    const res = await queryProfile(nip05);
    return res ? res.pubkey === pubkey : false;
}
// nip10.ts
var nip10_exports = {};
__export(nip10_exports, {
    parse: ()=>parse
});
function parse(event) {
    const result = {
        reply: void 0,
        root: void 0,
        mentions: [],
        profiles: [],
        quotes: []
    };
    let maybeParent;
    let maybeRoot;
    for(let i2 = event.tags.length - 1; i2 >= 0; i2--){
        const tag = event.tags[i2];
        if (tag[0] === "e" && tag[1]) {
            const [_, eTagEventId, eTagRelayUrl, eTagMarker, eTagAuthor] = tag;
            const eventPointer = {
                id: eTagEventId,
                relays: eTagRelayUrl ? [
                    eTagRelayUrl
                ] : [],
                author: eTagAuthor
            };
            if (eTagMarker === "root") {
                result.root = eventPointer;
                continue;
            }
            if (eTagMarker === "reply") {
                result.reply = eventPointer;
                continue;
            }
            if (eTagMarker === "mention") {
                result.mentions.push(eventPointer);
                continue;
            }
            if (!maybeParent) maybeParent = eventPointer;
            else maybeRoot = eventPointer;
            result.mentions.push(eventPointer);
            continue;
        }
        if (tag[0] === "q" && tag[1]) {
            const [_, eTagEventId, eTagRelayUrl] = tag;
            result.quotes.push({
                id: eTagEventId,
                relays: eTagRelayUrl ? [
                    eTagRelayUrl
                ] : []
            });
        }
        if (tag[0] === "p" && tag[1]) {
            result.profiles.push({
                pubkey: tag[1],
                relays: tag[2] ? [
                    tag[2]
                ] : []
            });
            continue;
        }
    }
    if (!result.root) result.root = maybeRoot || maybeParent || result.reply;
    if (!result.reply) result.reply = maybeParent || result.root;
    [
        result.reply,
        result.root
    ].forEach((ref)=>{
        if (!ref) return;
        let idx = result.mentions.indexOf(ref);
        if (idx !== -1) result.mentions.splice(idx, 1);
        if (ref.author) {
            let author = result.profiles.find((p)=>p.pubkey === ref.author);
            if (author && author.relays) {
                if (!ref.relays) ref.relays = [];
                author.relays.forEach((url)=>{
                    if (ref.relays?.indexOf(url) === -1) ref.relays.push(url);
                });
                author.relays = ref.relays;
            }
        }
    });
    result.mentions.forEach((ref)=>{
        if (ref.author) {
            let author = result.profiles.find((p)=>p.pubkey === ref.author);
            if (author && author.relays) {
                if (!ref.relays) ref.relays = [];
                author.relays.forEach((url)=>{
                    if (ref.relays.indexOf(url) === -1) ref.relays.push(url);
                });
                author.relays = ref.relays;
            }
        }
    });
    return result;
}
// nip11.ts
var nip11_exports = {};
__export(nip11_exports, {
    fetchRelayInformation: ()=>fetchRelayInformation,
    useFetchImplementation: ()=>useFetchImplementation2
});
var _fetch2;
try {
    _fetch2 = fetch;
} catch  {}
function useFetchImplementation2(fetchImplementation) {
    _fetch2 = fetchImplementation;
}
async function fetchRelayInformation(url) {
    return await (await fetch(url.replace("ws://", "http://").replace("wss://", "https://"), {
        headers: {
            Accept: "application/nostr+json"
        }
    })).json();
}
// nip13.ts
var nip13_exports = {};
__export(nip13_exports, {
    fastEventHash: ()=>fastEventHash,
    getPow: ()=>getPow,
    minePow: ()=>minePow
});
function getPow(hex) {
    let count = 0;
    for(let i2 = 0; i2 < 64; i2 += 8){
        const nibble = parseInt(hex.substring(i2, i2 + 8), 16);
        if (nibble === 0) count += 32;
        else {
            count += Math.clz32(nibble);
            break;
        }
    }
    return count;
}
function minePow(unsigned, difficulty) {
    let count = 0;
    const event = unsigned;
    const tag = [
        "nonce",
        count.toString(),
        difficulty.toString()
    ];
    event.tags.push(tag);
    while(true){
        const now2 = Math.floor(new Date().getTime() / 1e3);
        if (now2 !== event.created_at) {
            count = 0;
            event.created_at = now2;
        }
        tag[1] = (++count).toString();
        event.id = fastEventHash(event);
        if (getPow(event.id) >= difficulty) break;
    }
    return event;
}
function fastEventHash(evt) {
    return (0, _utils.bytesToHex)((0, _sha256.sha256)(utf8Encoder.encode(JSON.stringify([
        0,
        evt.pubkey,
        evt.created_at,
        evt.kind,
        evt.tags,
        evt.content
    ]))));
}
// nip18.ts
var nip18_exports = {};
__export(nip18_exports, {
    finishRepostEvent: ()=>finishRepostEvent,
    getRepostedEvent: ()=>getRepostedEvent,
    getRepostedEventPointer: ()=>getRepostedEventPointer
});
function finishRepostEvent(t, reposted, relayUrl, privateKey) {
    return finalizeEvent({
        kind: Repost,
        tags: [
            ...t.tags ?? [],
            [
                "e",
                reposted.id,
                relayUrl
            ],
            [
                "p",
                reposted.pubkey
            ]
        ],
        content: t.content === "" ? "" : JSON.stringify(reposted),
        created_at: t.created_at
    }, privateKey);
}
function getRepostedEventPointer(event) {
    if (event.kind !== Repost) return void 0;
    let lastETag;
    let lastPTag;
    for(let i2 = event.tags.length - 1; i2 >= 0 && (lastETag === void 0 || lastPTag === void 0); i2--){
        const tag = event.tags[i2];
        if (tag.length >= 2) {
            if (tag[0] === "e" && lastETag === void 0) lastETag = tag;
            else if (tag[0] === "p" && lastPTag === void 0) lastPTag = tag;
        }
    }
    if (lastETag === void 0) return void 0;
    return {
        id: lastETag[1],
        relays: [
            lastETag[2],
            lastPTag?.[2]
        ].filter((x)=>typeof x === "string"),
        author: lastPTag?.[1]
    };
}
function getRepostedEvent(event, { skipVerification } = {}) {
    const pointer = getRepostedEventPointer(event);
    if (pointer === void 0 || event.content === "") return void 0;
    let repostedEvent;
    try {
        repostedEvent = JSON.parse(event.content);
    } catch (error) {
        return void 0;
    }
    if (repostedEvent.id !== pointer.id) return void 0;
    if (!skipVerification && !verifyEvent(repostedEvent)) return void 0;
    return repostedEvent;
}
// nip21.ts
var nip21_exports = {};
__export(nip21_exports, {
    NOSTR_URI_REGEX: ()=>NOSTR_URI_REGEX,
    parse: ()=>parse2,
    test: ()=>test
});
var NOSTR_URI_REGEX = new RegExp(`nostr:(${BECH32_REGEX.source})`);
function test(value) {
    return typeof value === "string" && new RegExp(`^${NOSTR_URI_REGEX.source}$`).test(value);
}
function parse2(uri) {
    const match = uri.match(new RegExp(`^${NOSTR_URI_REGEX.source}$`));
    if (!match) throw new Error(`Invalid Nostr URI: ${uri}`);
    return {
        uri: match[0],
        value: match[1],
        decoded: decode(match[1])
    };
}
// nip25.ts
var nip25_exports = {};
__export(nip25_exports, {
    finishReactionEvent: ()=>finishReactionEvent,
    getReactedEventPointer: ()=>getReactedEventPointer
});
function finishReactionEvent(t, reacted, privateKey) {
    const inheritedTags = reacted.tags.filter((tag)=>tag.length >= 2 && (tag[0] === "e" || tag[0] === "p"));
    return finalizeEvent({
        ...t,
        kind: Reaction,
        tags: [
            ...t.tags ?? [],
            ...inheritedTags,
            [
                "e",
                reacted.id
            ],
            [
                "p",
                reacted.pubkey
            ]
        ],
        content: t.content ?? "+"
    }, privateKey);
}
function getReactedEventPointer(event) {
    if (event.kind !== Reaction) return void 0;
    let lastETag;
    let lastPTag;
    for(let i2 = event.tags.length - 1; i2 >= 0 && (lastETag === void 0 || lastPTag === void 0); i2--){
        const tag = event.tags[i2];
        if (tag.length >= 2) {
            if (tag[0] === "e" && lastETag === void 0) lastETag = tag;
            else if (tag[0] === "p" && lastPTag === void 0) lastPTag = tag;
        }
    }
    if (lastETag === void 0 || lastPTag === void 0) return void 0;
    return {
        id: lastETag[1],
        relays: [
            lastETag[2],
            lastPTag[2]
        ].filter((x)=>x !== void 0),
        author: lastPTag[1]
    };
}
// nip27.ts
var nip27_exports = {};
__export(nip27_exports, {
    matchAll: ()=>matchAll,
    regex: ()=>regex,
    replaceAll: ()=>replaceAll
});
var regex = ()=>new RegExp(`\\b${NOSTR_URI_REGEX.source}\\b`, "g");
function* matchAll(content) {
    const matches = content.matchAll(regex());
    for (const match of matches)try {
        const [uri, value] = match;
        yield {
            uri,
            value,
            decoded: decode(value),
            start: match.index,
            end: match.index + uri.length
        };
    } catch (_e) {}
}
function replaceAll(content, replacer) {
    return content.replaceAll(regex(), (uri, value)=>{
        return replacer({
            uri,
            value,
            decoded: decode(value)
        });
    });
}
// nip28.ts
var nip28_exports = {};
__export(nip28_exports, {
    channelCreateEvent: ()=>channelCreateEvent,
    channelHideMessageEvent: ()=>channelHideMessageEvent,
    channelMessageEvent: ()=>channelMessageEvent,
    channelMetadataEvent: ()=>channelMetadataEvent,
    channelMuteUserEvent: ()=>channelMuteUserEvent
});
var channelCreateEvent = (t, privateKey)=>{
    let content;
    if (typeof t.content === "object") content = JSON.stringify(t.content);
    else if (typeof t.content === "string") content = t.content;
    else return void 0;
    return finalizeEvent({
        kind: ChannelCreation,
        tags: [
            ...t.tags ?? []
        ],
        content,
        created_at: t.created_at
    }, privateKey);
};
var channelMetadataEvent = (t, privateKey)=>{
    let content;
    if (typeof t.content === "object") content = JSON.stringify(t.content);
    else if (typeof t.content === "string") content = t.content;
    else return void 0;
    return finalizeEvent({
        kind: ChannelMetadata,
        tags: [
            [
                "e",
                t.channel_create_event_id
            ],
            ...t.tags ?? []
        ],
        content,
        created_at: t.created_at
    }, privateKey);
};
var channelMessageEvent = (t, privateKey)=>{
    const tags = [
        [
            "e",
            t.channel_create_event_id,
            t.relay_url,
            "root"
        ]
    ];
    if (t.reply_to_channel_message_event_id) tags.push([
        "e",
        t.reply_to_channel_message_event_id,
        t.relay_url,
        "reply"
    ]);
    return finalizeEvent({
        kind: ChannelMessage,
        tags: [
            ...tags,
            ...t.tags ?? []
        ],
        content: t.content,
        created_at: t.created_at
    }, privateKey);
};
var channelHideMessageEvent = (t, privateKey)=>{
    let content;
    if (typeof t.content === "object") content = JSON.stringify(t.content);
    else if (typeof t.content === "string") content = t.content;
    else return void 0;
    return finalizeEvent({
        kind: ChannelHideMessage,
        tags: [
            [
                "e",
                t.channel_message_event_id
            ],
            ...t.tags ?? []
        ],
        content,
        created_at: t.created_at
    }, privateKey);
};
var channelMuteUserEvent = (t, privateKey)=>{
    let content;
    if (typeof t.content === "object") content = JSON.stringify(t.content);
    else if (typeof t.content === "string") content = t.content;
    else return void 0;
    return finalizeEvent({
        kind: ChannelMuteUser,
        tags: [
            [
                "p",
                t.pubkey_to_mute
            ],
            ...t.tags ?? []
        ],
        content,
        created_at: t.created_at
    }, privateKey);
};
// nip30.ts
var nip30_exports = {};
__export(nip30_exports, {
    EMOJI_SHORTCODE_REGEX: ()=>EMOJI_SHORTCODE_REGEX,
    matchAll: ()=>matchAll2,
    regex: ()=>regex2,
    replaceAll: ()=>replaceAll2
});
var EMOJI_SHORTCODE_REGEX = /:(\w+):/;
var regex2 = ()=>new RegExp(`\\B${EMOJI_SHORTCODE_REGEX.source}\\B`, "g");
function* matchAll2(content) {
    const matches = content.matchAll(regex2());
    for (const match of matches)try {
        const [shortcode, name] = match;
        yield {
            shortcode,
            name,
            start: match.index,
            end: match.index + shortcode.length
        };
    } catch (_e) {}
}
function replaceAll2(content, replacer) {
    return content.replaceAll(regex2(), (shortcode, name)=>{
        return replacer({
            shortcode,
            name
        });
    });
}
// nip39.ts
var nip39_exports = {};
__export(nip39_exports, {
    useFetchImplementation: ()=>useFetchImplementation3,
    validateGithub: ()=>validateGithub
});
var _fetch3;
try {
    _fetch3 = fetch;
} catch  {}
function useFetchImplementation3(fetchImplementation) {
    _fetch3 = fetchImplementation;
}
async function validateGithub(pubkey, username, proof) {
    try {
        let res = await (await _fetch3(`https://gist.github.com/${username}/${proof}/raw`)).text();
        return res === `Verifying that I control the following Nostr public key: ${pubkey}`;
    } catch (_) {
        return false;
    }
}
// nip44.ts
var nip44_exports = {};
__export(nip44_exports, {
    decrypt: ()=>decrypt2,
    encrypt: ()=>encrypt2,
    getConversationKey: ()=>getConversationKey,
    v2: ()=>v2
});
var minPlaintextSize = 1;
var maxPlaintextSize = 65535;
function getConversationKey(privkeyA, pubkeyB) {
    const sharedX = (0, _secp256K1.secp256k1).getSharedSecret(privkeyA, "02" + pubkeyB).subarray(1, 33);
    return (0, _hkdf.extract)((0, _sha256.sha256), sharedX, "nip44-v2");
}
function getMessageKeys(conversationKey, nonce) {
    const keys = (0, _hkdf.expand)((0, _sha256.sha256), conversationKey, nonce, 76);
    return {
        chacha_key: keys.subarray(0, 32),
        chacha_nonce: keys.subarray(32, 44),
        hmac_key: keys.subarray(44, 76)
    };
}
function calcPaddedLen(len) {
    if (!Number.isSafeInteger(len) || len < 1) throw new Error("expected positive integer");
    if (len <= 32) return 32;
    const nextPower = 1 << Math.floor(Math.log2(len - 1)) + 1;
    const chunk = nextPower <= 256 ? 32 : nextPower / 8;
    return chunk * (Math.floor((len - 1) / chunk) + 1);
}
function writeU16BE(num) {
    if (!Number.isSafeInteger(num) || num < minPlaintextSize || num > maxPlaintextSize) throw new Error("invalid plaintext size: must be between 1 and 65535 bytes");
    const arr = new Uint8Array(2);
    new DataView(arr.buffer).setUint16(0, num, false);
    return arr;
}
function pad(plaintext) {
    const unpadded = utf8Encoder.encode(plaintext);
    const unpaddedLen = unpadded.length;
    const prefix = writeU16BE(unpaddedLen);
    const suffix = new Uint8Array(calcPaddedLen(unpaddedLen) - unpaddedLen);
    return (0, _utils.concatBytes)(prefix, unpadded, suffix);
}
function unpad(padded) {
    const unpaddedLen = new DataView(padded.buffer).getUint16(0);
    const unpadded = padded.subarray(2, 2 + unpaddedLen);
    if (unpaddedLen < minPlaintextSize || unpaddedLen > maxPlaintextSize || unpadded.length !== unpaddedLen || padded.length !== 2 + calcPaddedLen(unpaddedLen)) throw new Error("invalid padding");
    return utf8Decoder.decode(unpadded);
}
function hmacAad(key, message, aad) {
    if (aad.length !== 32) throw new Error("AAD associated data must be 32 bytes");
    const combined = (0, _utils.concatBytes)(aad, message);
    return (0, _hmac.hmac)((0, _sha256.sha256), key, combined);
}
function decodePayload(payload) {
    if (typeof payload !== "string") throw new Error("payload must be a valid string");
    const plen = payload.length;
    if (plen < 132 || plen > 87472) throw new Error("invalid payload length: " + plen);
    if (payload[0] === "#") throw new Error("unknown encryption version");
    let data;
    try {
        data = (0, _base.base64).decode(payload);
    } catch (error) {
        throw new Error("invalid base64: " + error.message);
    }
    const dlen = data.length;
    if (dlen < 99 || dlen > 65603) throw new Error("invalid data length: " + dlen);
    const vers = data[0];
    if (vers !== 2) throw new Error("unknown encryption version " + vers);
    return {
        nonce: data.subarray(1, 33),
        ciphertext: data.subarray(33, -32),
        mac: data.subarray(-32)
    };
}
function encrypt2(plaintext, conversationKey, nonce = (0, _utils.randomBytes)(32)) {
    const { chacha_key, chacha_nonce, hmac_key } = getMessageKeys(conversationKey, nonce);
    const padded = pad(plaintext);
    const ciphertext = (0, _chacha.chacha20)(chacha_key, chacha_nonce, padded);
    const mac = hmacAad(hmac_key, ciphertext, nonce);
    return (0, _base.base64).encode((0, _utils.concatBytes)(new Uint8Array([
        2
    ]), nonce, ciphertext, mac));
}
function decrypt2(payload, conversationKey) {
    const { nonce, ciphertext, mac } = decodePayload(payload);
    const { chacha_key, chacha_nonce, hmac_key } = getMessageKeys(conversationKey, nonce);
    const calculatedMac = hmacAad(hmac_key, ciphertext, nonce);
    if (!(0, _utils1.equalBytes)(calculatedMac, mac)) throw new Error("invalid MAC");
    const padded = (0, _chacha.chacha20)(chacha_key, chacha_nonce, ciphertext);
    return unpad(padded);
}
var v2 = {
    utils: {
        getConversationKey,
        calcPaddedLen
    },
    encrypt: encrypt2,
    decrypt: decrypt2
};
// nip47.ts
var nip47_exports = {};
__export(nip47_exports, {
    makeNwcRequestEvent: ()=>makeNwcRequestEvent,
    parseConnectionString: ()=>parseConnectionString
});
function parseConnectionString(connectionString) {
    const { pathname, searchParams } = new URL(connectionString);
    const pubkey = pathname;
    const relay = searchParams.get("relay");
    const secret = searchParams.get("secret");
    if (!pubkey || !relay || !secret) throw new Error("invalid connection string");
    return {
        pubkey,
        relay,
        secret
    };
}
async function makeNwcRequestEvent(pubkey, secretKey, invoice) {
    const content = {
        method: "pay_invoice",
        params: {
            invoice
        }
    };
    const encryptedContent = await encrypt(secretKey, pubkey, JSON.stringify(content));
    const eventTemplate = {
        kind: NWCWalletRequest,
        created_at: Math.round(Date.now() / 1e3),
        content: encryptedContent,
        tags: [
            [
                "p",
                pubkey
            ]
        ]
    };
    return finalizeEvent(eventTemplate, secretKey);
}
// nip57.ts
var nip57_exports = {};
__export(nip57_exports, {
    getZapEndpoint: ()=>getZapEndpoint,
    makeZapReceipt: ()=>makeZapReceipt,
    makeZapRequest: ()=>makeZapRequest,
    useFetchImplementation: ()=>useFetchImplementation4,
    validateZapRequest: ()=>validateZapRequest
});
var _fetch4;
try {
    _fetch4 = fetch;
} catch  {}
function useFetchImplementation4(fetchImplementation) {
    _fetch4 = fetchImplementation;
}
async function getZapEndpoint(metadata) {
    try {
        let lnurl = "";
        let { lud06, lud16 } = JSON.parse(metadata.content);
        if (lud06) {
            let { words } = (0, _base.bech32).decode(lud06, 1e3);
            let data = (0, _base.bech32).fromWords(words);
            lnurl = utf8Decoder.decode(data);
        } else if (lud16) {
            let [name, domain] = lud16.split("@");
            lnurl = new URL(`/.well-known/lnurlp/${name}`, `https://${domain}`).toString();
        } else return null;
        let res = await _fetch4(lnurl);
        let body = await res.json();
        if (body.allowsNostr && body.nostrPubkey) return body.callback;
    } catch (err) {}
    return null;
}
function makeZapRequest({ profile, event, amount, relays, comment = "" }) {
    if (!amount) throw new Error("amount not given");
    if (!profile) throw new Error("profile not given");
    let zr = {
        kind: 9734,
        created_at: Math.round(Date.now() / 1e3),
        content: comment,
        tags: [
            [
                "p",
                profile
            ],
            [
                "amount",
                amount.toString()
            ],
            [
                "relays",
                ...relays
            ]
        ]
    };
    if (event) zr.tags.push([
        "e",
        event
    ]);
    return zr;
}
function validateZapRequest(zapRequestString) {
    let zapRequest;
    try {
        zapRequest = JSON.parse(zapRequestString);
    } catch (err) {
        return "Invalid zap request JSON.";
    }
    if (!validateEvent(zapRequest)) return "Zap request is not a valid Nostr event.";
    if (!verifyEvent(zapRequest)) return "Invalid signature on zap request.";
    let p = zapRequest.tags.find(([t, v])=>t === "p" && v);
    if (!p) return "Zap request doesn't have a 'p' tag.";
    if (!p[1].match(/^[a-f0-9]{64}$/)) return "Zap request 'p' tag is not valid hex.";
    let e = zapRequest.tags.find(([t, v])=>t === "e" && v);
    if (e && !e[1].match(/^[a-f0-9]{64}$/)) return "Zap request 'e' tag is not valid hex.";
    let relays = zapRequest.tags.find(([t, v])=>t === "relays" && v);
    if (!relays) return "Zap request doesn't have a 'relays' tag.";
    return null;
}
function makeZapReceipt({ zapRequest, preimage, bolt11, paidAt }) {
    let zr = JSON.parse(zapRequest);
    let tagsFromZapRequest = zr.tags.filter(([t])=>t === "e" || t === "p" || t === "a");
    let zap = {
        kind: 9735,
        created_at: Math.round(paidAt.getTime() / 1e3),
        content: "",
        tags: [
            ...tagsFromZapRequest,
            [
                "P",
                zr.pubkey
            ],
            [
                "bolt11",
                bolt11
            ],
            [
                "description",
                zapRequest
            ]
        ]
    };
    if (preimage) zap.tags.push([
        "preimage",
        preimage
    ]);
    return zap;
}
// nip59.ts
var nip59_exports = {};
__export(nip59_exports, {
    createRumor: ()=>createRumor,
    createSeal: ()=>createSeal,
    createWrap: ()=>createWrap,
    unwrapEvent: ()=>unwrapEvent,
    unwrapManyEvents: ()=>unwrapManyEvents,
    wrapEvent: ()=>wrapEvent,
    wrapManyEvents: ()=>wrapManyEvents
});
var TWO_DAYS = 172800;
var now = ()=>Math.round(Date.now() / 1e3);
var randomNow = ()=>Math.round(now() - Math.random() * TWO_DAYS);
var nip44ConversationKey = (privateKey, publicKey)=>getConversationKey(privateKey, publicKey);
var nip44Encrypt = (data, privateKey, publicKey)=>encrypt2(JSON.stringify(data), nip44ConversationKey(privateKey, publicKey));
var nip44Decrypt = (data, privateKey)=>JSON.parse(decrypt2(data.content, nip44ConversationKey(privateKey, data.pubkey)));
function createRumor(event, privateKey) {
    const rumor = {
        created_at: now(),
        content: "",
        tags: [],
        ...event,
        pubkey: getPublicKey(privateKey)
    };
    rumor.id = getEventHash(rumor);
    return rumor;
}
function createSeal(rumor, privateKey, recipientPublicKey) {
    return finalizeEvent({
        kind: Seal,
        content: nip44Encrypt(rumor, privateKey, recipientPublicKey),
        created_at: randomNow(),
        tags: []
    }, privateKey);
}
function createWrap(seal, recipientPublicKey) {
    const randomKey = generateSecretKey();
    return finalizeEvent({
        kind: GiftWrap,
        content: nip44Encrypt(seal, randomKey, recipientPublicKey),
        created_at: randomNow(),
        tags: [
            [
                "p",
                recipientPublicKey
            ]
        ]
    }, randomKey);
}
function wrapEvent(event, senderPrivateKey, recipientPublicKey) {
    const rumor = createRumor(event, senderPrivateKey);
    const seal = createSeal(rumor, senderPrivateKey, recipientPublicKey);
    return createWrap(seal, recipientPublicKey);
}
function wrapManyEvents(event, senderPrivateKey, recipientsPublicKeys) {
    if (!recipientsPublicKeys || recipientsPublicKeys.length === 0) throw new Error("At least one recipient is required.");
    const senderPublicKey = getPublicKey(senderPrivateKey);
    const wrappeds = [
        wrapEvent(event, senderPrivateKey, senderPublicKey)
    ];
    recipientsPublicKeys.forEach((recipientPublicKey)=>{
        wrappeds.push(wrapEvent(event, senderPrivateKey, recipientPublicKey));
    });
    return wrappeds;
}
function unwrapEvent(wrap, recipientPrivateKey) {
    const unwrappedSeal = nip44Decrypt(wrap, recipientPrivateKey);
    return nip44Decrypt(unwrappedSeal, recipientPrivateKey);
}
function unwrapManyEvents(wrappedEvents, recipientPrivateKey) {
    let unwrappedEvents = [];
    wrappedEvents.forEach((e)=>{
        unwrappedEvents.push(unwrapEvent(e, recipientPrivateKey));
    });
    unwrappedEvents.sort((a, b)=>a.created_at - b.created_at);
    return unwrappedEvents;
}
// nip98.ts
var nip98_exports = {};
__export(nip98_exports, {
    getToken: ()=>getToken,
    hashPayload: ()=>hashPayload,
    unpackEventFromToken: ()=>unpackEventFromToken,
    validateEvent: ()=>validateEvent2,
    validateEventKind: ()=>validateEventKind,
    validateEventMethodTag: ()=>validateEventMethodTag,
    validateEventPayloadTag: ()=>validateEventPayloadTag,
    validateEventTimestamp: ()=>validateEventTimestamp,
    validateEventUrlTag: ()=>validateEventUrlTag,
    validateToken: ()=>validateToken
});
var _authorizationScheme = "Nostr ";
async function getToken(loginUrl, httpMethod, sign, includeAuthorizationScheme = false, payload) {
    const event = {
        kind: HTTPAuth,
        tags: [
            [
                "u",
                loginUrl
            ],
            [
                "method",
                httpMethod
            ]
        ],
        created_at: Math.round(new Date().getTime() / 1e3),
        content: ""
    };
    if (payload) event.tags.push([
        "payload",
        hashPayload(payload)
    ]);
    const signedEvent = await sign(event);
    const authorizationScheme = includeAuthorizationScheme ? _authorizationScheme : "";
    return authorizationScheme + (0, _base.base64).encode(utf8Encoder.encode(JSON.stringify(signedEvent)));
}
async function validateToken(token, url, method) {
    const event = await unpackEventFromToken(token).catch((error)=>{
        throw error;
    });
    const valid = await validateEvent2(event, url, method).catch((error)=>{
        throw error;
    });
    return valid;
}
async function unpackEventFromToken(token) {
    if (!token) throw new Error("Missing token");
    token = token.replace(_authorizationScheme, "");
    const eventB64 = utf8Decoder.decode((0, _base.base64).decode(token));
    if (!eventB64 || eventB64.length === 0 || !eventB64.startsWith("{")) throw new Error("Invalid token");
    const event = JSON.parse(eventB64);
    return event;
}
function validateEventTimestamp(event) {
    if (!event.created_at) return false;
    return Math.round(new Date().getTime() / 1e3) - event.created_at < 60;
}
function validateEventKind(event) {
    return event.kind === HTTPAuth;
}
function validateEventUrlTag(event, url) {
    const urlTag = event.tags.find((t)=>t[0] === "u");
    if (!urlTag) return false;
    return urlTag.length > 0 && urlTag[1] === url;
}
function validateEventMethodTag(event, method) {
    const methodTag = event.tags.find((t)=>t[0] === "method");
    if (!methodTag) return false;
    return methodTag.length > 0 && methodTag[1].toLowerCase() === method.toLowerCase();
}
function hashPayload(payload) {
    const hash = (0, _sha256.sha256)(utf8Encoder.encode(JSON.stringify(payload)));
    return (0, _utils.bytesToHex)(hash);
}
function validateEventPayloadTag(event, payload) {
    const payloadTag = event.tags.find((t)=>t[0] === "payload");
    if (!payloadTag) return false;
    const payloadHash = hashPayload(payload);
    return payloadTag.length > 0 && payloadTag[1] === payloadHash;
}
async function validateEvent2(event, url, method, body) {
    if (!verifyEvent(event)) throw new Error("Invalid nostr event, signature invalid");
    if (!validateEventKind(event)) throw new Error("Invalid nostr event, kind invalid");
    if (!validateEventTimestamp(event)) throw new Error("Invalid nostr event, created_at timestamp invalid");
    if (!validateEventUrlTag(event, url)) throw new Error("Invalid nostr event, url tag invalid");
    if (!validateEventMethodTag(event, method)) throw new Error("Invalid nostr event, method tag invalid");
    if (Boolean(body) && typeof body === "object" && Object.keys(body).length > 0) {
        if (!validateEventPayloadTag(event, body)) throw new Error("Invalid nostr event, payload tag does not match request body hash");
    }
    return true;
}

},{"@noble/curves/secp256k1":"9sjVG","@noble/hashes/utils":"4eGYF","@noble/hashes/sha256":"gMMnQ","@scure/base":"cvmUK","@noble/ciphers/aes":"kP7IV","@noble/ciphers/chacha":"flgZG","@noble/ciphers/utils":"5vA16","@noble/hashes/hkdf":"jgC5i","@noble/hashes/hmac":"b3lnM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sjVG":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encodeToCurve = exports.hashToCurve = exports.schnorr = exports.secp256k1 = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const sha256_1 = require("a89c1505decc763e");
const utils_1 = require("362802f5a451efcb");
const modular_js_1 = require("6a274edd04635854");
const weierstrass_js_1 = require("4687d8e71912c9bd");
const utils_js_1 = require("49209a65a14a4a44");
const hash_to_curve_js_1 = require("992867e7d1ef8b");
const _shortw_utils_js_1 = require("8a5ef77428763709");
const secp256k1P = BigInt('0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f');
const secp256k1N = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
const _1n = BigInt(1);
const _2n = BigInt(2);
const divNearest = (a, b)=>(a + b / _2n) / b;
/**
 * √n = n^((p+1)/4) for fields p = 3 mod 4. We unwrap the loop and multiply bit-by-bit.
 * (P+1n/4n).toString(2) would produce bits [223x 1, 0, 22x 1, 4x 0, 11, 00]
 */ function sqrtMod(y) {
    const P = secp256k1P;
    // prettier-ignore
    const _3n = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
    // prettier-ignore
    const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
    const b2 = y * y * y % P; // x^3, 11
    const b3 = b2 * b2 * y % P; // x^7
    const b6 = (0, modular_js_1.pow2)(b3, _3n, P) * b3 % P;
    const b9 = (0, modular_js_1.pow2)(b6, _3n, P) * b3 % P;
    const b11 = (0, modular_js_1.pow2)(b9, _2n, P) * b2 % P;
    const b22 = (0, modular_js_1.pow2)(b11, _11n, P) * b11 % P;
    const b44 = (0, modular_js_1.pow2)(b22, _22n, P) * b22 % P;
    const b88 = (0, modular_js_1.pow2)(b44, _44n, P) * b44 % P;
    const b176 = (0, modular_js_1.pow2)(b88, _88n, P) * b88 % P;
    const b220 = (0, modular_js_1.pow2)(b176, _44n, P) * b44 % P;
    const b223 = (0, modular_js_1.pow2)(b220, _3n, P) * b3 % P;
    const t1 = (0, modular_js_1.pow2)(b223, _23n, P) * b22 % P;
    const t2 = (0, modular_js_1.pow2)(t1, _6n, P) * b2 % P;
    const root = (0, modular_js_1.pow2)(t2, _2n, P);
    if (!Fp.eql(Fp.sqr(root), y)) throw new Error('Cannot find square root');
    return root;
}
const Fp = (0, modular_js_1.Field)(secp256k1P, undefined, undefined, {
    sqrt: sqrtMod
});
exports.secp256k1 = (0, _shortw_utils_js_1.createCurve)({
    a: BigInt(0),
    b: BigInt(7),
    Fp,
    n: secp256k1N,
    // Base point (x, y) aka generator point
    Gx: BigInt('55066263022277343669578718895168534326250603453777594175500187360389116729240'),
    Gy: BigInt('32670510020758816978083085130507043184471273380659243275938904335757337482424'),
    h: BigInt(1),
    lowS: true,
    /**
     * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
     * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
     * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
     * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
     */ endo: {
        beta: BigInt('0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee'),
        splitScalar: (k)=>{
            const n = secp256k1N;
            const a1 = BigInt('0x3086d221a7d46bcde86c90e49284eb15');
            const b1 = -_1n * BigInt('0xe4437ed6010e88286f547fa90abfe4c3');
            const a2 = BigInt('0x114ca50f7a8e2f3f657c1108d9d44cfd8');
            const b2 = a1;
            const POW_2_128 = BigInt('0x100000000000000000000000000000000'); // (2n**128n).toString(16)
            const c1 = divNearest(b2 * k, n);
            const c2 = divNearest(-b1 * k, n);
            let k1 = (0, modular_js_1.mod)(k - c1 * a1 - c2 * a2, n);
            let k2 = (0, modular_js_1.mod)(-c1 * b1 - c2 * b2, n);
            const k1neg = k1 > POW_2_128;
            const k2neg = k2 > POW_2_128;
            if (k1neg) k1 = n - k1;
            if (k2neg) k2 = n - k2;
            if (k1 > POW_2_128 || k2 > POW_2_128) throw new Error('splitScalar: Endomorphism failed, k=' + k);
            return {
                k1neg,
                k1,
                k2neg,
                k2
            };
        }
    }
}, sha256_1.sha256);
// Schnorr signatures are superior to ECDSA from above. Below is Schnorr-specific BIP0340 code.
// https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki
const _0n = BigInt(0);
const fe = (x)=>typeof x === 'bigint' && _0n < x && x < secp256k1P;
const ge = (x)=>typeof x === 'bigint' && _0n < x && x < secp256k1N;
/** An object mapping tags to their tagged hash prefix of [SHA256(tag) | SHA256(tag)] */ const TAGGED_HASH_PREFIXES = {};
function taggedHash(tag, ...messages) {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === undefined) {
        const tagH = (0, sha256_1.sha256)(Uint8Array.from(tag, (c)=>c.charCodeAt(0)));
        tagP = (0, utils_js_1.concatBytes)(tagH, tagH);
        TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return (0, sha256_1.sha256)((0, utils_js_1.concatBytes)(tagP, ...messages));
}
// ECDSA compact points are 33-byte. Schnorr is 32: we strip first byte 0x02 or 0x03
const pointToBytes = (point)=>point.toRawBytes(true).slice(1);
const numTo32b = (n)=>(0, utils_js_1.numberToBytesBE)(n, 32);
const modP = (x)=>(0, modular_js_1.mod)(x, secp256k1P);
const modN = (x)=>(0, modular_js_1.mod)(x, secp256k1N);
const Point = exports.secp256k1.ProjectivePoint;
const GmulAdd = (Q, a, b)=>Point.BASE.multiplyAndAddUnsafe(Q, a, b);
// Calculate point, scalar and bytes
function schnorrGetExtPubKey(priv) {
    let d_ = exports.secp256k1.utils.normPrivateKeyToScalar(priv); // same method executed in fromPrivateKey
    let p = Point.fromPrivateKey(d_); // P = d'⋅G; 0 < d' < n check is done inside
    const scalar = p.hasEvenY() ? d_ : modN(-d_);
    return {
        scalar: scalar,
        bytes: pointToBytes(p)
    };
}
/**
 * lift_x from BIP340. Convert 32-byte x coordinate to elliptic curve point.
 * @returns valid point checked for being on-curve
 */ function lift_x(x) {
    if (!fe(x)) throw new Error('bad x: need 0 < x < p'); // Fail if x ≥ p.
    const xx = modP(x * x);
    const c = modP(xx * x + BigInt(7)); // Let c = x³ + 7 mod p.
    let y = sqrtMod(c); // Let y = c^(p+1)/4 mod p.
    if (y % _2n !== _0n) y = modP(-y); // Return the unique point P such that x(P) = x and
    const p = new Point(x, y, _1n); // y(P) = y if y mod 2 = 0 or y(P) = p-y otherwise.
    p.assertValidity();
    return p;
}
/**
 * Create tagged hash, convert it to bigint, reduce modulo-n.
 */ function challenge(...args) {
    return modN((0, utils_js_1.bytesToNumberBE)(taggedHash('BIP0340/challenge', ...args)));
}
/**
 * Schnorr public key is just `x` coordinate of Point as per BIP340.
 */ function schnorrGetPublicKey(privateKey) {
    return schnorrGetExtPubKey(privateKey).bytes; // d'=int(sk). Fail if d'=0 or d'≥n. Ret bytes(d'⋅G)
}
/**
 * Creates Schnorr signature as per BIP340. Verifies itself before returning anything.
 * auxRand is optional and is not the sole source of k generation: bad CSPRNG won't be dangerous.
 */ function schnorrSign(message, privateKey, auxRand = (0, utils_1.randomBytes)(32)) {
    const m = (0, utils_js_1.ensureBytes)('message', message);
    const { bytes: px, scalar: d } = schnorrGetExtPubKey(privateKey); // checks for isWithinCurveOrder
    const a = (0, utils_js_1.ensureBytes)('auxRand', auxRand, 32); // Auxiliary random data a: a 32-byte array
    const t = numTo32b(d ^ (0, utils_js_1.bytesToNumberBE)(taggedHash('BIP0340/aux', a))); // Let t be the byte-wise xor of bytes(d) and hash/aux(a)
    const rand = taggedHash('BIP0340/nonce', t, px, m); // Let rand = hash/nonce(t || bytes(P) || m)
    const k_ = modN((0, utils_js_1.bytesToNumberBE)(rand)); // Let k' = int(rand) mod n
    if (k_ === _0n) throw new Error('sign failed: k is zero'); // Fail if k' = 0.
    const { bytes: rx, scalar: k } = schnorrGetExtPubKey(k_); // Let R = k'⋅G.
    const e = challenge(rx, px, m); // Let e = int(hash/challenge(bytes(R) || bytes(P) || m)) mod n.
    const sig = new Uint8Array(64); // Let sig = bytes(R) || bytes((k + ed) mod n).
    sig.set(rx, 0);
    sig.set(numTo32b(modN(k + e * d)), 32);
    // If Verify(bytes(P), m, sig) (see below) returns failure, abort
    if (!schnorrVerify(sig, m, px)) throw new Error('sign: Invalid signature produced');
    return sig;
}
/**
 * Verifies Schnorr signature.
 * Will swallow errors & return false except for initial type validation of arguments.
 */ function schnorrVerify(signature, message, publicKey) {
    const sig = (0, utils_js_1.ensureBytes)('signature', signature, 64);
    const m = (0, utils_js_1.ensureBytes)('message', message);
    const pub = (0, utils_js_1.ensureBytes)('publicKey', publicKey, 32);
    try {
        const P = lift_x((0, utils_js_1.bytesToNumberBE)(pub)); // P = lift_x(int(pk)); fail if that fails
        const r = (0, utils_js_1.bytesToNumberBE)(sig.subarray(0, 32)); // Let r = int(sig[0:32]); fail if r ≥ p.
        if (!fe(r)) return false;
        const s = (0, utils_js_1.bytesToNumberBE)(sig.subarray(32, 64)); // Let s = int(sig[32:64]); fail if s ≥ n.
        if (!ge(s)) return false;
        const e = challenge(numTo32b(r), pointToBytes(P), m); // int(challenge(bytes(r)||bytes(P)||m))%n
        const R = GmulAdd(P, s, modN(-e)); // R = s⋅G - e⋅P
        if (!R || !R.hasEvenY() || R.toAffine().x !== r) return false; // -eP == (n-e)P
        return true; // Fail if is_infinite(R) / not has_even_y(R) / x(R) ≠ r.
    } catch (error) {
        return false;
    }
}
exports.schnorr = (()=>({
        getPublicKey: schnorrGetPublicKey,
        sign: schnorrSign,
        verify: schnorrVerify,
        utils: {
            randomPrivateKey: exports.secp256k1.utils.randomPrivateKey,
            lift_x,
            pointToBytes,
            numberToBytesBE: utils_js_1.numberToBytesBE,
            bytesToNumberBE: utils_js_1.bytesToNumberBE,
            taggedHash,
            mod: modular_js_1.mod
        }
    }))();
const isoMap = /* @__PURE__ */ (()=>(0, hash_to_curve_js_1.isogenyMap)(Fp, [
        // xNum
        [
            '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7',
            '0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581',
            '0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262',
            '0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c'
        ],
        // xDen
        [
            '0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b',
            '0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14',
            '0x0000000000000000000000000000000000000000000000000000000000000001'
        ],
        // yNum
        [
            '0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c',
            '0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3',
            '0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931',
            '0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84'
        ],
        // yDen
        [
            '0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b',
            '0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573',
            '0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f',
            '0x0000000000000000000000000000000000000000000000000000000000000001'
        ]
    ].map((i)=>i.map((j)=>BigInt(j)))))();
const mapSWU = /* @__PURE__ */ (()=>(0, weierstrass_js_1.mapToCurveSimpleSWU)(Fp, {
        A: BigInt('0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533'),
        B: BigInt('1771'),
        Z: Fp.create(BigInt('-11'))
    }))();
const htf = /* @__PURE__ */ (()=>(0, hash_to_curve_js_1.createHasher)(exports.secp256k1.ProjectivePoint, (scalars)=>{
        const { x, y } = mapSWU(Fp.create(scalars[0]));
        return isoMap(x, y);
    }, {
        DST: 'secp256k1_XMD:SHA-256_SSWU_RO_',
        encodeDST: 'secp256k1_XMD:SHA-256_SSWU_NU_',
        p: Fp.ORDER,
        m: 1,
        k: 128,
        expand: 'xmd',
        hash: sha256_1.sha256
    }))();
exports.hashToCurve = (()=>htf.hashToCurve)();
exports.encodeToCurve = (()=>htf.encodeToCurve)();

},{"a89c1505decc763e":"9GrzS","362802f5a451efcb":"8fH4O","6a274edd04635854":"cB5Z5","4687d8e71912c9bd":"5TEzS","49209a65a14a4a44":"cBmkf","992867e7d1ef8b":"2yuJj","8a5ef77428763709":"jmUYM"}],"9GrzS":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha224 = exports.sha256 = void 0;
const _sha2_js_1 = require("f3b7e1099e3dffe3");
const utils_js_1 = require("2582a2a48878bf64");
// SHA2-256 need to try 2^128 hashes to execute birthday attack.
// BTC network is doing 2^67 hashes/sec as per early 2023.
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = /* @__PURE__ */ new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = /* @__PURE__ */ new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = /* @__PURE__ */ new Uint32Array(64);
class SHA256 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = -1056596264;
        this.B = 914150663;
        this.C = 812702999;
        this.D = -150054599;
        this.E = -4191439;
        this.F = 1750603025;
        this.G = 1694076839;
        this.H = -1090891868;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */ exports.sha256 = (0, utils_js_1.wrapConstructor)(()=>new SHA256());
exports.sha224 = (0, utils_js_1.wrapConstructor)(()=>new SHA224());

},{"f3b7e1099e3dffe3":"3qIUe","2582a2a48878bf64":"8fH4O"}],"3qIUe":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHA2 = void 0;
const _assert_js_1 = require("e80023f7971138b1");
const utils_js_1 = require("127a2bcc8b9148b");
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends utils_js_1.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
    }
    update(data) {
        (0, _assert_js_1.exists)(this);
        const { view, buffer, blockLen } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
exports.SHA2 = SHA2;

},{"e80023f7971138b1":"fsodm","127a2bcc8b9148b":"8fH4O"}],"fsodm":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== 'boolean') throw new Error(`Expected boolean, not ${b}`);
}
exports.bool = bool;
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new Error('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"8fH4O":[function(require,module,exports,__globalThis) {
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated, we can just drop the import.
const crypto_1 = require("68fd839c1f011a30");
const u8a = (a)=>a instanceof Uint8Array;
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
if (!exports.isLE) throw new Error('Non little-endian hardware is not supported');
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    if (!u8a(bytes)) throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const len = hex.length;
    if (len % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + len);
    const array = new Uint8Array(len / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
exports.utf8ToBytes = utf8ToBytes;
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    if (!u8a(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
exports.toBytes = toBytes;
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a)=>sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a)=>{
        if (!u8a(a)) throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
exports.concatBytes = concatBytes;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
const toStr = {}.toString;
function checkOpts(defaults, opts) {
    if (opts !== undefined && toStr.call(opts) !== '[object Object]') throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    throw new Error('crypto.getRandomValues must be defined');
}
exports.randomBytes = randomBytes;

},{"68fd839c1f011a30":"iucl4"}],"iucl4":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

},{}],"cB5Z5":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapHashToField = exports.getMinHashLength = exports.getFieldBytesLength = exports.hashToPrivateScalar = exports.FpSqrtEven = exports.FpSqrtOdd = exports.Field = exports.nLength = exports.FpIsSquare = exports.FpDiv = exports.FpInvertBatch = exports.FpPow = exports.validateField = exports.isNegativeLE = exports.FpSqrt = exports.tonelliShanks = exports.invert = exports.pow2 = exports.pow = exports.mod = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Utilities for modular arithmetics and finite fields
const utils_js_1 = require("d8ac4b6c79c60614");
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3);
// prettier-ignore
const _4n = BigInt(4), _5n = BigInt(5), _8n = BigInt(8);
// prettier-ignore
const _9n = BigInt(9), _16n = BigInt(16);
// Calculates a modulo b
function mod(a, b) {
    const result = a % b;
    return result >= _0n ? result : b + result;
}
exports.mod = mod;
/**
 * Efficiently raise num to power and do modular division.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 * @example
 * pow(2n, 6n, 11n) // 64n % 11n == 9n
 */ // TODO: use field version && remove
function pow(num, power, modulo) {
    if (modulo <= _0n || power < _0n) throw new Error('Expected power/modulo > 0');
    if (modulo === _1n) return _0n;
    let res = _1n;
    while(power > _0n){
        if (power & _1n) res = res * num % modulo;
        num = num * num % modulo;
        power >>= _1n;
    }
    return res;
}
exports.pow = pow;
// Does x ^ (2 ^ power) mod p. pow2(30, 4) == 30 ^ (2 ^ 4)
function pow2(x, power, modulo) {
    let res = x;
    while(power-- > _0n){
        res *= res;
        res %= modulo;
    }
    return res;
}
exports.pow2 = pow2;
// Inverses number over modulo
function invert(number, modulo) {
    if (number === _0n || modulo <= _0n) throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    // Euclidean GCD https://brilliant.org/wiki/extended-euclidean-algorithm/
    // Fermat's little theorem "CT-like" version inv(n) = n^(m-2) mod m is 30x slower.
    let a = mod(number, modulo);
    let b = modulo;
    // prettier-ignore
    let x = _0n, y = _1n, u = _1n, v = _0n;
    while(a !== _0n){
        // JIT applies optimization if those two lines follow each other
        const q = b / a;
        const r = b % a;
        const m = x - u * q;
        const n = y - v * q;
        // prettier-ignore
        b = a, a = r, x = u, y = v, u = m, v = n;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error('invert: does not exist');
    return mod(x, modulo);
}
exports.invert = invert;
/**
 * Tonelli-Shanks square root search algorithm.
 * 1. https://eprint.iacr.org/2012/685.pdf (page 12)
 * 2. Square Roots from 1; 24, 51, 10 to Dan Shanks
 * Will start an infinite loop if field order P is not prime.
 * @param P field order
 * @returns function that takes field Fp (created from P) and number n
 */ function tonelliShanks(P) {
    // Legendre constant: used to calculate Legendre symbol (a | p),
    // which denotes the value of a^((p-1)/2) (mod p).
    // (a | p) ≡ 1    if a is a square (mod p)
    // (a | p) ≡ -1   if a is not a square (mod p)
    // (a | p) ≡ 0    if a ≡ 0 (mod p)
    const legendreC = (P - _1n) / _2n;
    let Q, S, Z;
    // Step 1: By factoring out powers of 2 from p - 1,
    // find q and s such that p - 1 = q*(2^s) with q odd
    for(Q = P - _1n, S = 0; Q % _2n === _0n; Q /= _2n, S++);
    // Step 2: Select a non-square z such that (z | p) ≡ -1 and set c ≡ zq
    for(Z = _2n; Z < P && pow(Z, legendreC, P) !== P - _1n; Z++);
    // Fast-path
    if (S === 1) {
        const p1div4 = (P + _1n) / _4n;
        return function tonelliFast(Fp, n) {
            const root = Fp.pow(n, p1div4);
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error('Cannot find square root');
            return root;
        };
    }
    // Slow-path
    const Q1div2 = (Q + _1n) / _2n;
    return function tonelliSlow(Fp, n) {
        // Step 0: Check that n is indeed a square: (n | p) should not be ≡ -1
        if (Fp.pow(n, legendreC) === Fp.neg(Fp.ONE)) throw new Error('Cannot find square root');
        let r = S;
        // TODO: will fail at Fp2/etc
        let g = Fp.pow(Fp.mul(Fp.ONE, Z), Q); // will update both x and b
        let x = Fp.pow(n, Q1div2); // first guess at the square root
        let b = Fp.pow(n, Q); // first guess at the fudge factor
        while(!Fp.eql(b, Fp.ONE)){
            if (Fp.eql(b, Fp.ZERO)) return Fp.ZERO; // https://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm (4. If t = 0, return r = 0)
            // Find m such b^(2^m)==1
            let m = 1;
            for(let t2 = Fp.sqr(b); m < r; m++){
                if (Fp.eql(t2, Fp.ONE)) break;
                t2 = Fp.sqr(t2); // t2 *= t2
            }
            // NOTE: r-m-1 can be bigger than 32, need to convert to bigint before shift, otherwise there will be overflow
            const ge = Fp.pow(g, _1n << BigInt(r - m - 1)); // ge = 2^(r-m-1)
            g = Fp.sqr(ge); // g = ge * ge
            x = Fp.mul(x, ge); // x *= ge
            b = Fp.mul(b, g); // b *= g
            r = m;
        }
        return x;
    };
}
exports.tonelliShanks = tonelliShanks;
function FpSqrt(P) {
    // NOTE: different algorithms can give different roots, it is up to user to decide which one they want.
    // For example there is FpSqrtOdd/FpSqrtEven to choice root based on oddness (used for hash-to-curve).
    // P ≡ 3 (mod 4)
    // √n = n^((P+1)/4)
    if (P % _4n === _3n) {
        // Not all roots possible!
        // const ORDER =
        //   0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn;
        // const NUM = 72057594037927816n;
        const p1div4 = (P + _1n) / _4n;
        return function sqrt3mod4(Fp, n) {
            const root = Fp.pow(n, p1div4);
            // Throw if root**2 != n
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error('Cannot find square root');
            return root;
        };
    }
    // Atkin algorithm for q ≡ 5 (mod 8), https://eprint.iacr.org/2012/685.pdf (page 10)
    if (P % _8n === _5n) {
        const c1 = (P - _5n) / _8n;
        return function sqrt5mod8(Fp, n) {
            const n2 = Fp.mul(n, _2n);
            const v = Fp.pow(n2, c1);
            const nv = Fp.mul(n, v);
            const i = Fp.mul(Fp.mul(nv, _2n), v);
            const root = Fp.mul(nv, Fp.sub(i, Fp.ONE));
            if (!Fp.eql(Fp.sqr(root), n)) throw new Error('Cannot find square root');
            return root;
        };
    }
    // P ≡ 9 (mod 16)
    _9n;
    // Other cases: Tonelli-Shanks algorithm
    return tonelliShanks(P);
}
exports.FpSqrt = FpSqrt;
// Little-endian check for first LE bit (last BE bit);
const isNegativeLE = (num, modulo)=>(mod(num, modulo) & _1n) === _1n;
exports.isNegativeLE = isNegativeLE;
// prettier-ignore
const FIELD_FIELDS = [
    'create',
    'isValid',
    'is0',
    'neg',
    'inv',
    'sqrt',
    'sqr',
    'eql',
    'add',
    'sub',
    'mul',
    'pow',
    'div',
    'addN',
    'subN',
    'mulN',
    'sqrN'
];
function validateField(field) {
    const initial = {
        ORDER: 'bigint',
        MASK: 'bigint',
        BYTES: 'isSafeInteger',
        BITS: 'isSafeInteger'
    };
    const opts = FIELD_FIELDS.reduce((map, val)=>{
        map[val] = 'function';
        return map;
    }, initial);
    return (0, utils_js_1.validateObject)(field, opts);
}
exports.validateField = validateField;
// Generic field functions
/**
 * Same as `pow` but for Fp: non-constant-time.
 * Unsafe in some contexts: uses ladder, so can expose bigint bits.
 */ function FpPow(f, num, power) {
    // Should have same speed as pow for bigints
    // TODO: benchmark!
    if (power < _0n) throw new Error('Expected power > 0');
    if (power === _0n) return f.ONE;
    if (power === _1n) return num;
    let p = f.ONE;
    let d = num;
    while(power > _0n){
        if (power & _1n) p = f.mul(p, d);
        d = f.sqr(d);
        power >>= _1n;
    }
    return p;
}
exports.FpPow = FpPow;
/**
 * Efficiently invert an array of Field elements.
 * `inv(0)` will return `undefined` here: make sure to throw an error.
 */ function FpInvertBatch(f, nums) {
    const tmp = new Array(nums.length);
    // Walk from first to last, multiply them by each other MOD p
    const lastMultiplied = nums.reduce((acc, num, i)=>{
        if (f.is0(num)) return acc;
        tmp[i] = acc;
        return f.mul(acc, num);
    }, f.ONE);
    // Invert last element
    const inverted = f.inv(lastMultiplied);
    // Walk from last to first, multiply them by inverted each other MOD p
    nums.reduceRight((acc, num, i)=>{
        if (f.is0(num)) return acc;
        tmp[i] = f.mul(acc, tmp[i]);
        return f.mul(acc, num);
    }, inverted);
    return tmp;
}
exports.FpInvertBatch = FpInvertBatch;
function FpDiv(f, lhs, rhs) {
    return f.mul(lhs, typeof rhs === 'bigint' ? invert(rhs, f.ORDER) : f.inv(rhs));
}
exports.FpDiv = FpDiv;
// This function returns True whenever the value x is a square in the field F.
function FpIsSquare(f) {
    const legendreConst = (f.ORDER - _1n) / _2n; // Integer arithmetic
    return (x)=>{
        const p = f.pow(x, legendreConst);
        return f.eql(p, f.ZERO) || f.eql(p, f.ONE);
    };
}
exports.FpIsSquare = FpIsSquare;
// CURVE.n lengths
function nLength(n, nBitLength) {
    // Bit size, byte size of CURVE.n
    const _nBitLength = nBitLength !== undefined ? nBitLength : n.toString(2).length;
    const nByteLength = Math.ceil(_nBitLength / 8);
    return {
        nBitLength: _nBitLength,
        nByteLength
    };
}
exports.nLength = nLength;
/**
 * Initializes a finite field over prime. **Non-primes are not supported.**
 * Do not init in loop: slow. Very fragile: always run a benchmark on a change.
 * Major performance optimizations:
 * * a) denormalized operations like mulN instead of mul
 * * b) same object shape: never add or remove keys
 * * c) Object.freeze
 * @param ORDER prime positive bigint
 * @param bitLen how many bits the field consumes
 * @param isLE (def: false) if encoding / decoding should be in little-endian
 * @param redef optional faster redefinitions of sqrt and other methods
 */ function Field(ORDER, bitLen, isLE = false, redef = {}) {
    if (ORDER <= _0n) throw new Error(`Expected Field ORDER > 0, got ${ORDER}`);
    const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen);
    if (BYTES > 2048) throw new Error('Field lengths over 2048 bytes are not supported');
    const sqrtP = FpSqrt(ORDER);
    const f = Object.freeze({
        ORDER,
        BITS,
        BYTES,
        MASK: (0, utils_js_1.bitMask)(BITS),
        ZERO: _0n,
        ONE: _1n,
        create: (num)=>mod(num, ORDER),
        isValid: (num)=>{
            if (typeof num !== 'bigint') throw new Error(`Invalid field element: expected bigint, got ${typeof num}`);
            return _0n <= num && num < ORDER; // 0 is valid element, but it's not invertible
        },
        is0: (num)=>num === _0n,
        isOdd: (num)=>(num & _1n) === _1n,
        neg: (num)=>mod(-num, ORDER),
        eql: (lhs, rhs)=>lhs === rhs,
        sqr: (num)=>mod(num * num, ORDER),
        add: (lhs, rhs)=>mod(lhs + rhs, ORDER),
        sub: (lhs, rhs)=>mod(lhs - rhs, ORDER),
        mul: (lhs, rhs)=>mod(lhs * rhs, ORDER),
        pow: (num, power)=>FpPow(f, num, power),
        div: (lhs, rhs)=>mod(lhs * invert(rhs, ORDER), ORDER),
        // Same as above, but doesn't normalize
        sqrN: (num)=>num * num,
        addN: (lhs, rhs)=>lhs + rhs,
        subN: (lhs, rhs)=>lhs - rhs,
        mulN: (lhs, rhs)=>lhs * rhs,
        inv: (num)=>invert(num, ORDER),
        sqrt: redef.sqrt || ((n)=>sqrtP(f, n)),
        invertBatch: (lst)=>FpInvertBatch(f, lst),
        // TODO: do we really need constant cmov?
        // We don't have const-time bigints anyway, so probably will be not very useful
        cmov: (a, b, c)=>c ? b : a,
        toBytes: (num)=>isLE ? (0, utils_js_1.numberToBytesLE)(num, BYTES) : (0, utils_js_1.numberToBytesBE)(num, BYTES),
        fromBytes: (bytes)=>{
            if (bytes.length !== BYTES) throw new Error(`Fp.fromBytes: expected ${BYTES}, got ${bytes.length}`);
            return isLE ? (0, utils_js_1.bytesToNumberLE)(bytes) : (0, utils_js_1.bytesToNumberBE)(bytes);
        }
    });
    return Object.freeze(f);
}
exports.Field = Field;
function FpSqrtOdd(Fp, elm) {
    if (!Fp.isOdd) throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? root : Fp.neg(root);
}
exports.FpSqrtOdd = FpSqrtOdd;
function FpSqrtEven(Fp, elm) {
    if (!Fp.isOdd) throw new Error(`Field doesn't have isOdd`);
    const root = Fp.sqrt(elm);
    return Fp.isOdd(root) ? Fp.neg(root) : root;
}
exports.FpSqrtEven = FpSqrtEven;
/**
 * "Constant-time" private key generation utility.
 * Same as mapKeyToField, but accepts less bytes (40 instead of 48 for 32-byte field).
 * Which makes it slightly more biased, less secure.
 * @deprecated use mapKeyToField instead
 */ function hashToPrivateScalar(hash, groupOrder, isLE = false) {
    hash = (0, utils_js_1.ensureBytes)('privateHash', hash);
    const hashLen = hash.length;
    const minLen = nLength(groupOrder).nByteLength + 8;
    if (minLen < 24 || hashLen < minLen || hashLen > 1024) throw new Error(`hashToPrivateScalar: expected ${minLen}-1024 bytes of input, got ${hashLen}`);
    const num = isLE ? (0, utils_js_1.bytesToNumberLE)(hash) : (0, utils_js_1.bytesToNumberBE)(hash);
    return mod(num, groupOrder - _1n) + _1n;
}
exports.hashToPrivateScalar = hashToPrivateScalar;
/**
 * Returns total number of bytes consumed by the field element.
 * For example, 32 bytes for usual 256-bit weierstrass curve.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of field
 */ function getFieldBytesLength(fieldOrder) {
    if (typeof fieldOrder !== 'bigint') throw new Error('field order must be bigint');
    const bitLength = fieldOrder.toString(2).length;
    return Math.ceil(bitLength / 8);
}
exports.getFieldBytesLength = getFieldBytesLength;
/**
 * Returns minimal amount of bytes that can be safely reduced
 * by field order.
 * Should be 2^-128 for 128-bit curve such as P256.
 * @param fieldOrder number of field elements, usually CURVE.n
 * @returns byte length of target hash
 */ function getMinHashLength(fieldOrder) {
    const length = getFieldBytesLength(fieldOrder);
    return length + Math.ceil(length / 2);
}
exports.getMinHashLength = getMinHashLength;
/**
 * "Constant-time" private key generation utility.
 * Can take (n + n/2) or more bytes of uniform input e.g. from CSPRNG or KDF
 * and convert them into private scalar, with the modulo bias being negligible.
 * Needs at least 48 bytes of input for 32-byte private key.
 * https://research.kudelskisecurity.com/2020/07/28/the-definitive-guide-to-modulo-bias-and-how-to-avoid-it/
 * FIPS 186-5, A.2 https://csrc.nist.gov/publications/detail/fips/186/5/final
 * RFC 9380, https://www.rfc-editor.org/rfc/rfc9380#section-5
 * @param hash hash output from SHA3 or a similar function
 * @param groupOrder size of subgroup - (e.g. secp256k1.CURVE.n)
 * @param isLE interpret hash bytes as LE num
 * @returns valid private scalar
 */ function mapHashToField(key, fieldOrder, isLE = false) {
    const len = key.length;
    const fieldLen = getFieldBytesLength(fieldOrder);
    const minLen = getMinHashLength(fieldOrder);
    // No small numbers: need to understand bias story. No huge numbers: easier to detect JS timings.
    if (len < 16 || len < minLen || len > 1024) throw new Error(`expected ${minLen}-1024 bytes of input, got ${len}`);
    const num = isLE ? (0, utils_js_1.bytesToNumberBE)(key) : (0, utils_js_1.bytesToNumberLE)(key);
    // `mod(x, 11)` can sometimes produce 0. `mod(x, 10) + 1` is the same, but no 0
    const reduced = mod(num, fieldOrder - _1n) + _1n;
    return isLE ? (0, utils_js_1.numberToBytesLE)(reduced, fieldLen) : (0, utils_js_1.numberToBytesBE)(reduced, fieldLen);
}
exports.mapHashToField = mapHashToField;

},{"d8ac4b6c79c60614":"cBmkf"}],"cBmkf":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateObject = exports.createHmacDrbg = exports.bitMask = exports.bitSet = exports.bitGet = exports.bitLen = exports.utf8ToBytes = exports.equalBytes = exports.concatBytes = exports.ensureBytes = exports.numberToVarBytesBE = exports.numberToBytesLE = exports.numberToBytesBE = exports.bytesToNumberLE = exports.bytesToNumberBE = exports.hexToBytes = exports.hexToNumber = exports.numberToHexUnpadded = exports.bytesToHex = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // 100 lines of code in the file are duplicated from noble-hashes (utils).
// This is OK: `abstract` directory does not use noble-hashes.
// User may opt-in into using different hashing library. This way, noble-hashes
// won't be included into their bundle.
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const u8a = (a)=>a instanceof Uint8Array;
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    if (!u8a(bytes)) throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
function numberToHexUnpadded(num) {
    const hex = num.toString(16);
    return hex.length & 1 ? `0${hex}` : hex;
}
exports.numberToHexUnpadded = numberToHexUnpadded;
function hexToNumber(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // Big Endian
    return BigInt(hex === '' ? '0' : `0x${hex}`);
}
exports.hexToNumber = hexToNumber;
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const len = hex.length;
    if (len % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + len);
    const array = new Uint8Array(len / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// BE: Big Endian, LE: Little Endian
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
exports.bytesToNumberBE = bytesToNumberBE;
function bytesToNumberLE(bytes) {
    if (!u8a(bytes)) throw new Error('Uint8Array expected');
    return hexToNumber(bytesToHex(Uint8Array.from(bytes).reverse()));
}
exports.bytesToNumberLE = bytesToNumberLE;
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
exports.numberToBytesBE = numberToBytesBE;
function numberToBytesLE(n, len) {
    return numberToBytesBE(n, len).reverse();
}
exports.numberToBytesLE = numberToBytesLE;
// Unpadded, rarely used
function numberToVarBytesBE(n) {
    return hexToBytes(numberToHexUnpadded(n));
}
exports.numberToVarBytesBE = numberToVarBytesBE;
/**
 * Takes hex string or Uint8Array, converts to Uint8Array.
 * Validates output length.
 * Will throw error for other types.
 * @param title descriptive title for an error e.g. 'private key'
 * @param hex hex string or Uint8Array
 * @param expectedLength optional, will compare to result array's length
 * @returns
 */ function ensureBytes(title, hex, expectedLength) {
    let res;
    if (typeof hex === 'string') try {
        res = hexToBytes(hex);
    } catch (e) {
        throw new Error(`${title} must be valid hex string, got "${hex}". Cause: ${e}`);
    }
    else if (u8a(hex)) // Uint8Array.from() instead of hash.slice() because node.js Buffer
    // is instance of Uint8Array, and its slice() creates **mutable** copy
    res = Uint8Array.from(hex);
    else throw new Error(`${title} must be hex string or Uint8Array`);
    const len = res.length;
    if (typeof expectedLength === 'number' && len !== expectedLength) throw new Error(`${title} expected ${expectedLength} bytes, got ${len}`);
    return res;
}
exports.ensureBytes = ensureBytes;
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a)=>sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a)=>{
        if (!u8a(a)) throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
exports.concatBytes = concatBytes;
function equalBytes(b1, b2) {
    // We don't care about timing attacks here
    if (b1.length !== b2.length) return false;
    for(let i = 0; i < b1.length; i++)if (b1[i] !== b2[i]) return false;
    return true;
}
exports.equalBytes = equalBytes;
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
exports.utf8ToBytes = utf8ToBytes;
// Bit operations
/**
 * Calculates amount of bits in a bigint.
 * Same as `n.toString(2).length`
 */ function bitLen(n) {
    let len;
    for(len = 0; n > _0n; n >>= _1n, len += 1);
    return len;
}
exports.bitLen = bitLen;
/**
 * Gets single bit at position.
 * NOTE: first bit position is 0 (same as arrays)
 * Same as `!!+Array.from(n.toString(2)).reverse()[pos]`
 */ function bitGet(n, pos) {
    return n >> BigInt(pos) & _1n;
}
exports.bitGet = bitGet;
/**
 * Sets single bit at position.
 */ const bitSet = (n, pos, value)=>{
    return n | (value ? _1n : _0n) << BigInt(pos);
};
exports.bitSet = bitSet;
/**
 * Calculate mask for N bits. Not using ** operator with bigints because of old engines.
 * Same as BigInt(`0b${Array(i).fill('1').join('')}`)
 */ const bitMask = (n)=>(_2n << BigInt(n - 1)) - _1n;
exports.bitMask = bitMask;
// DRBG
const u8n = (data)=>new Uint8Array(data); // creates Uint8Array
const u8fr = (arr)=>Uint8Array.from(arr); // another shortcut
/**
 * Minimal HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
 * @returns function that will call DRBG until 2nd arg returns something meaningful
 * @example
 *   const drbg = createHmacDRBG<Key>(32, 32, hmac);
 *   drbg(seed, bytesToKey); // bytesToKey must return Key or undefined
 */ function createHmacDrbg(hashLen, qByteLen, hmacFn) {
    if (typeof hashLen !== 'number' || hashLen < 2) throw new Error('hashLen must be a number');
    if (typeof qByteLen !== 'number' || qByteLen < 2) throw new Error('qByteLen must be a number');
    if (typeof hmacFn !== 'function') throw new Error('hmacFn must be a function');
    // Step B, Step C: set hashLen to 8*ceil(hlen/8)
    let v = u8n(hashLen); // Minimal non-full-spec HMAC-DRBG from NIST 800-90 for RFC6979 sigs.
    let k = u8n(hashLen); // Steps B and C of RFC6979 3.2: set hashLen, in our case always same
    let i = 0; // Iterations counter, will throw when over 1000
    const reset = ()=>{
        v.fill(1);
        k.fill(0);
        i = 0;
    };
    const h = (...b)=>hmacFn(k, v, ...b); // hmac(k)(v, ...values)
    const reseed = (seed = u8n())=>{
        // HMAC-DRBG reseed() function. Steps D-G
        k = h(u8fr([
            0x00
        ]), seed); // k = hmac(k || v || 0x00 || seed)
        v = h(); // v = hmac(k || v)
        if (seed.length === 0) return;
        k = h(u8fr([
            0x01
        ]), seed); // k = hmac(k || v || 0x01 || seed)
        v = h(); // v = hmac(k || v)
    };
    const gen = ()=>{
        // HMAC-DRBG generate() function
        if (i++ >= 1000) throw new Error('drbg: tried 1000 values');
        let len = 0;
        const out = [];
        while(len < qByteLen){
            v = h();
            const sl = v.slice();
            out.push(sl);
            len += v.length;
        }
        return concatBytes(...out);
    };
    const genUntil = (seed, pred)=>{
        reset();
        reseed(seed); // Steps D-G
        let res = undefined; // Step H: grind until k is in [1..n-1]
        while(!(res = pred(gen())))reseed();
        reset();
        return res;
    };
    return genUntil;
}
exports.createHmacDrbg = createHmacDrbg;
// Validating curves and fields
const validatorFns = {
    bigint: (val)=>typeof val === 'bigint',
    function: (val)=>typeof val === 'function',
    boolean: (val)=>typeof val === 'boolean',
    string: (val)=>typeof val === 'string',
    stringOrUint8Array: (val)=>typeof val === 'string' || val instanceof Uint8Array,
    isSafeInteger: (val)=>Number.isSafeInteger(val),
    array: (val)=>Array.isArray(val),
    field: (val, object)=>object.Fp.isValid(val),
    hash: (val)=>typeof val === 'function' && Number.isSafeInteger(val.outputLen)
};
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
function validateObject(object, validators, optValidators = {}) {
    const checkField = (fieldName, type, isOptional)=>{
        const checkVal = validatorFns[type];
        if (typeof checkVal !== 'function') throw new Error(`Invalid validator "${type}", expected function`);
        const val = object[fieldName];
        if (isOptional && val === undefined) return;
        if (!checkVal(val, object)) throw new Error(`Invalid param ${String(fieldName)}=${val} (${typeof val}), expected ${type}`);
    };
    for (const [fieldName, type] of Object.entries(validators))checkField(fieldName, type, false);
    for (const [fieldName, type] of Object.entries(optValidators))checkField(fieldName, type, true);
    return object;
}
exports.validateObject = validateObject; // validate type tests
 // const o: { a: number; b: number; c: number } = { a: 1, b: 5, c: 6 };
 // const z0 = validateObject(o, { a: 'isSafeInteger' }, { c: 'bigint' }); // Ok!
 // // Should fail type-check
 // const z1 = validateObject(o, { a: 'tmp' }, { c: 'zz' });
 // const z2 = validateObject(o, { a: 'isSafeInteger' }, { c: 'zz' });
 // const z3 = validateObject(o, { test: 'boolean', z: 'bug' });
 // const z4 = validateObject(o, { a: 'boolean', z: 'bug' });

},{}],"5TEzS":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapToCurveSimpleSWU = exports.SWUFpSqrtRatio = exports.weierstrass = exports.weierstrassPoints = exports.DER = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Short Weierstrass curve. The formula is: y² = x³ + ax + b
const mod = require("d8b1615c256fe3fa");
const ut = require("aae491f09795d5ee");
const utils_js_1 = require("aae491f09795d5ee");
const curve_js_1 = require("11f68d725b0f6f5d");
function validatePointOpts(curve) {
    const opts = (0, curve_js_1.validateBasic)(curve);
    ut.validateObject(opts, {
        a: 'field',
        b: 'field'
    }, {
        allowedPrivateKeyLengths: 'array',
        wrapPrivateKey: 'boolean',
        isTorsionFree: 'function',
        clearCofactor: 'function',
        allowInfinityPoint: 'boolean',
        fromBytes: 'function',
        toBytes: 'function'
    });
    const { endo, Fp, a } = opts;
    if (endo) {
        if (!Fp.eql(a, Fp.ZERO)) throw new Error('Endomorphism can only be defined for Koblitz curves that have a=0');
        if (typeof endo !== 'object' || typeof endo.beta !== 'bigint' || typeof endo.splitScalar !== 'function') throw new Error('Expected endomorphism with beta: bigint and splitScalar: function');
    }
    return Object.freeze({
        ...opts
    });
}
// ASN.1 DER encoding utilities
const { bytesToNumberBE: b2n, hexToBytes: h2b } = ut;
exports.DER = {
    // asn.1 DER encoding utils
    Err: class DERErr extends Error {
        constructor(m = ''){
            super(m);
        }
    },
    _parseInt (data) {
        const { Err: E } = exports.DER;
        if (data.length < 2 || data[0] !== 0x02) throw new E('Invalid signature integer tag');
        const len = data[1];
        const res = data.subarray(2, len + 2);
        if (!len || res.length !== len) throw new E('Invalid signature integer: wrong length');
        // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
        // since we always use positive integers here. It must always be empty:
        // - add zero byte if exists
        // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
        if (res[0] & 128) throw new E('Invalid signature integer: negative');
        if (res[0] === 0x00 && !(res[1] & 128)) throw new E('Invalid signature integer: unnecessary leading zero');
        return {
            d: b2n(res),
            l: data.subarray(len + 2)
        }; // d is data, l is left
    },
    toSig (hex) {
        // parse DER signature
        const { Err: E } = exports.DER;
        const data = typeof hex === 'string' ? h2b(hex) : hex;
        if (!(data instanceof Uint8Array)) throw new Error('ui8a expected');
        let l = data.length;
        if (l < 2 || data[0] != 0x30) throw new E('Invalid signature tag');
        if (data[1] !== l - 2) throw new E('Invalid signature: incorrect length');
        const { d: r, l: sBytes } = exports.DER._parseInt(data.subarray(2));
        const { d: s, l: rBytesLeft } = exports.DER._parseInt(sBytes);
        if (rBytesLeft.length) throw new E('Invalid signature: left bytes after parsing');
        return {
            r,
            s
        };
    },
    hexFromSig (sig) {
        // Add leading zero if first byte has negative bit enabled. More details in '_parseInt'
        const slice = (s)=>Number.parseInt(s[0], 16) & 8 ? '00' + s : s;
        const h = (num)=>{
            const hex = num.toString(16);
            return hex.length & 1 ? `0${hex}` : hex;
        };
        const s = slice(h(sig.s));
        const r = slice(h(sig.r));
        const shl = s.length / 2;
        const rhl = r.length / 2;
        const sl = h(shl);
        const rl = h(rhl);
        return `30${h(rhl + shl + 4)}02${rl}${r}02${sl}${s}`;
    }
};
// Be friendly to bad ECMAScript parsers by not using bigint literals
// prettier-ignore
const _0n = BigInt(0), _1n = BigInt(1), _2n = BigInt(2), _3n = BigInt(3), _4n = BigInt(4);
function weierstrassPoints(opts) {
    const CURVE = validatePointOpts(opts);
    const { Fp } = CURVE; // All curves has same field / group length as for now, but they can differ
    const toBytes = CURVE.toBytes || ((_c, point, _isCompressed)=>{
        const a = point.toAffine();
        return ut.concatBytes(Uint8Array.from([
            0x04
        ]), Fp.toBytes(a.x), Fp.toBytes(a.y));
    });
    const fromBytes = CURVE.fromBytes || ((bytes)=>{
        // const head = bytes[0];
        const tail = bytes.subarray(1);
        // if (head !== 0x04) throw new Error('Only non-compressed encoding is supported');
        const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return {
            x,
            y
        };
    });
    /**
     * y² = x³ + ax + b: Short weierstrass curve formula
     * @returns y²
     */ function weierstrassEquation(x) {
        const { a, b } = CURVE;
        const x2 = Fp.sqr(x); // x * x
        const x3 = Fp.mul(x2, x); // x2 * x
        return Fp.add(Fp.add(x3, Fp.mul(x, a)), b); // x3 + a * x + b
    }
    // Validate whether the passed curve params are valid.
    // We check if curve equation works for generator point.
    // `assertValidity()` won't work: `isTorsionFree()` is not available at this point in bls12-381.
    // ProjectivePoint class has not been initialized yet.
    if (!Fp.eql(Fp.sqr(CURVE.Gy), weierstrassEquation(CURVE.Gx))) throw new Error('bad generator point: equation left != right');
    // Valid group elements reside in range 1..n-1
    function isWithinCurveOrder(num) {
        return typeof num === 'bigint' && _0n < num && num < CURVE.n;
    }
    function assertGE(num) {
        if (!isWithinCurveOrder(num)) throw new Error('Expected valid bigint: 0 < bigint < curve.n');
    }
    // Validates if priv key is valid and converts it to bigint.
    // Supports options allowedPrivateKeyLengths and wrapPrivateKey.
    function normPrivateKeyToScalar(key) {
        const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n } = CURVE;
        if (lengths && typeof key !== 'bigint') {
            if (key instanceof Uint8Array) key = ut.bytesToHex(key);
            // Normalize to hex string, pad. E.g. P521 would norm 130-132 char hex to 132-char bytes
            if (typeof key !== 'string' || !lengths.includes(key.length)) throw new Error('Invalid key');
            key = key.padStart(nByteLength * 2, '0');
        }
        let num;
        try {
            num = typeof key === 'bigint' ? key : ut.bytesToNumberBE((0, utils_js_1.ensureBytes)('private key', key, nByteLength));
        } catch (error) {
            throw new Error(`private key must be ${nByteLength} bytes, hex or bigint, not ${typeof key}`);
        }
        if (wrapPrivateKey) num = mod.mod(num, n); // disabled by default, enabled for BLS
        assertGE(num); // num in range [1..N-1]
        return num;
    }
    const pointPrecomputes = new Map();
    function assertPrjPoint(other) {
        if (!(other instanceof Point)) throw new Error('ProjectivePoint expected');
    }
    /**
     * Projective Point works in 3d / projective (homogeneous) coordinates: (x, y, z) ∋ (x=x/z, y=y/z)
     * Default Point works in 2d / affine coordinates: (x, y)
     * We're doing calculations in projective, because its operations don't require costly inversion.
     */ class Point {
        constructor(px, py, pz){
            this.px = px;
            this.py = py;
            this.pz = pz;
            if (px == null || !Fp.isValid(px)) throw new Error('x required');
            if (py == null || !Fp.isValid(py)) throw new Error('y required');
            if (pz == null || !Fp.isValid(pz)) throw new Error('z required');
        }
        // Does not validate if the point is on-curve.
        // Use fromHex instead, or call assertValidity() later.
        static fromAffine(p) {
            const { x, y } = p || {};
            if (!p || !Fp.isValid(x) || !Fp.isValid(y)) throw new Error('invalid affine point');
            if (p instanceof Point) throw new Error('projective point not allowed');
            const is0 = (i)=>Fp.eql(i, Fp.ZERO);
            // fromAffine(x:0, y:0) would produce (x:0, y:0, z:1), but we need (x:0, y:1, z:0)
            if (is0(x) && is0(y)) return Point.ZERO;
            return new Point(x, y, Fp.ONE);
        }
        get x() {
            return this.toAffine().x;
        }
        get y() {
            return this.toAffine().y;
        }
        /**
         * Takes a bunch of Projective Points but executes only one
         * inversion on all of them. Inversion is very slow operation,
         * so this improves performance massively.
         * Optimization: converts a list of projective points to a list of identical points with Z=1.
         */ static normalizeZ(points) {
            const toInv = Fp.invertBatch(points.map((p)=>p.pz));
            return points.map((p, i)=>p.toAffine(toInv[i])).map(Point.fromAffine);
        }
        /**
         * Converts hash string or Uint8Array to Point.
         * @param hex short/long ECDSA hex
         */ static fromHex(hex) {
            const P = Point.fromAffine(fromBytes((0, utils_js_1.ensureBytes)('pointHex', hex)));
            P.assertValidity();
            return P;
        }
        // Multiplies generator point by privateKey.
        static fromPrivateKey(privateKey) {
            return Point.BASE.multiply(normPrivateKeyToScalar(privateKey));
        }
        // "Private method", don't use it directly
        _setWindowSize(windowSize) {
            this._WINDOW_SIZE = windowSize;
            pointPrecomputes.delete(this);
        }
        // A point on curve is valid if it conforms to equation.
        assertValidity() {
            if (this.is0()) {
                // (0, 1, 0) aka ZERO is invalid in most contexts.
                // In BLS, ZERO can be serialized, so we allow it.
                // (0, 0, 0) is wrong representation of ZERO and is always invalid.
                if (CURVE.allowInfinityPoint && !Fp.is0(this.py)) return;
                throw new Error('bad point: ZERO');
            }
            // Some 3rd-party test vectors require different wording between here & `fromCompressedHex`
            const { x, y } = this.toAffine();
            // Check if x, y are valid field elements
            if (!Fp.isValid(x) || !Fp.isValid(y)) throw new Error('bad point: x or y not FE');
            const left = Fp.sqr(y); // y²
            const right = weierstrassEquation(x); // x³ + ax + b
            if (!Fp.eql(left, right)) throw new Error('bad point: equation left != right');
            if (!this.isTorsionFree()) throw new Error('bad point: not in prime-order subgroup');
        }
        hasEvenY() {
            const { y } = this.toAffine();
            if (Fp.isOdd) return !Fp.isOdd(y);
            throw new Error("Field doesn't support isOdd");
        }
        /**
         * Compare one point to another.
         */ equals(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            const U1 = Fp.eql(Fp.mul(X1, Z2), Fp.mul(X2, Z1));
            const U2 = Fp.eql(Fp.mul(Y1, Z2), Fp.mul(Y2, Z1));
            return U1 && U2;
        }
        /**
         * Flips point to one corresponding to (x, -y) in Affine coordinates.
         */ negate() {
            return new Point(this.px, Fp.neg(this.py), this.pz);
        }
        // Renes-Costello-Batina exception-free doubling formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 3
        // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
        double() {
            const { a, b } = CURVE;
            const b3 = Fp.mul(b, _3n);
            const { px: X1, py: Y1, pz: Z1 } = this;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            let t0 = Fp.mul(X1, X1); // step 1
            let t1 = Fp.mul(Y1, Y1);
            let t2 = Fp.mul(Z1, Z1);
            let t3 = Fp.mul(X1, Y1);
            t3 = Fp.add(t3, t3); // step 5
            Z3 = Fp.mul(X1, Z1);
            Z3 = Fp.add(Z3, Z3);
            X3 = Fp.mul(a, Z3);
            Y3 = Fp.mul(b3, t2);
            Y3 = Fp.add(X3, Y3); // step 10
            X3 = Fp.sub(t1, Y3);
            Y3 = Fp.add(t1, Y3);
            Y3 = Fp.mul(X3, Y3);
            X3 = Fp.mul(t3, X3);
            Z3 = Fp.mul(b3, Z3); // step 15
            t2 = Fp.mul(a, t2);
            t3 = Fp.sub(t0, t2);
            t3 = Fp.mul(a, t3);
            t3 = Fp.add(t3, Z3);
            Z3 = Fp.add(t0, t0); // step 20
            t0 = Fp.add(Z3, t0);
            t0 = Fp.add(t0, t2);
            t0 = Fp.mul(t0, t3);
            Y3 = Fp.add(Y3, t0);
            t2 = Fp.mul(Y1, Z1); // step 25
            t2 = Fp.add(t2, t2);
            t0 = Fp.mul(t2, t3);
            X3 = Fp.sub(X3, t0);
            Z3 = Fp.mul(t2, t1);
            Z3 = Fp.add(Z3, Z3); // step 30
            Z3 = Fp.add(Z3, Z3);
            return new Point(X3, Y3, Z3);
        }
        // Renes-Costello-Batina exception-free addition formula.
        // There is 30% faster Jacobian formula, but it is not complete.
        // https://eprint.iacr.org/2015/1060, algorithm 1
        // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
        add(other) {
            assertPrjPoint(other);
            const { px: X1, py: Y1, pz: Z1 } = this;
            const { px: X2, py: Y2, pz: Z2 } = other;
            let X3 = Fp.ZERO, Y3 = Fp.ZERO, Z3 = Fp.ZERO; // prettier-ignore
            const a = CURVE.a;
            const b3 = Fp.mul(CURVE.b, _3n);
            let t0 = Fp.mul(X1, X2); // step 1
            let t1 = Fp.mul(Y1, Y2);
            let t2 = Fp.mul(Z1, Z2);
            let t3 = Fp.add(X1, Y1);
            let t4 = Fp.add(X2, Y2); // step 5
            t3 = Fp.mul(t3, t4);
            t4 = Fp.add(t0, t1);
            t3 = Fp.sub(t3, t4);
            t4 = Fp.add(X1, Z1);
            let t5 = Fp.add(X2, Z2); // step 10
            t4 = Fp.mul(t4, t5);
            t5 = Fp.add(t0, t2);
            t4 = Fp.sub(t4, t5);
            t5 = Fp.add(Y1, Z1);
            X3 = Fp.add(Y2, Z2); // step 15
            t5 = Fp.mul(t5, X3);
            X3 = Fp.add(t1, t2);
            t5 = Fp.sub(t5, X3);
            Z3 = Fp.mul(a, t4);
            X3 = Fp.mul(b3, t2); // step 20
            Z3 = Fp.add(X3, Z3);
            X3 = Fp.sub(t1, Z3);
            Z3 = Fp.add(t1, Z3);
            Y3 = Fp.mul(X3, Z3);
            t1 = Fp.add(t0, t0); // step 25
            t1 = Fp.add(t1, t0);
            t2 = Fp.mul(a, t2);
            t4 = Fp.mul(b3, t4);
            t1 = Fp.add(t1, t2);
            t2 = Fp.sub(t0, t2); // step 30
            t2 = Fp.mul(a, t2);
            t4 = Fp.add(t4, t2);
            t0 = Fp.mul(t1, t4);
            Y3 = Fp.add(Y3, t0);
            t0 = Fp.mul(t5, t4); // step 35
            X3 = Fp.mul(t3, X3);
            X3 = Fp.sub(X3, t0);
            t0 = Fp.mul(t3, t1);
            Z3 = Fp.mul(t5, Z3);
            Z3 = Fp.add(Z3, t0); // step 40
            return new Point(X3, Y3, Z3);
        }
        subtract(other) {
            return this.add(other.negate());
        }
        is0() {
            return this.equals(Point.ZERO);
        }
        wNAF(n) {
            return wnaf.wNAFCached(this, pointPrecomputes, n, (comp)=>{
                const toInv = Fp.invertBatch(comp.map((p)=>p.pz));
                return comp.map((p, i)=>p.toAffine(toInv[i])).map(Point.fromAffine);
            });
        }
        /**
         * Non-constant-time multiplication. Uses double-and-add algorithm.
         * It's faster, but should only be used when you don't care about
         * an exposed private key e.g. sig verification, which works over *public* keys.
         */ multiplyUnsafe(n) {
            const I = Point.ZERO;
            if (n === _0n) return I;
            assertGE(n); // Will throw on 0
            if (n === _1n) return this;
            const { endo } = CURVE;
            if (!endo) return wnaf.unsafeLadder(this, n);
            // Apply endomorphism
            let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
            let k1p = I;
            let k2p = I;
            let d = this;
            while(k1 > _0n || k2 > _0n){
                if (k1 & _1n) k1p = k1p.add(d);
                if (k2 & _1n) k2p = k2p.add(d);
                d = d.double();
                k1 >>= _1n;
                k2 >>= _1n;
            }
            if (k1neg) k1p = k1p.negate();
            if (k2neg) k2p = k2p.negate();
            k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
            return k1p.add(k2p);
        }
        /**
         * Constant time multiplication.
         * Uses wNAF method. Windowed method may be 10% faster,
         * but takes 2x longer to generate and consumes 2x memory.
         * Uses precomputes when available.
         * Uses endomorphism for Koblitz curves.
         * @param scalar by which the point would be multiplied
         * @returns New point
         */ multiply(scalar) {
            assertGE(scalar);
            let n = scalar;
            let point, fake; // Fake point is used to const-time mult
            const { endo } = CURVE;
            if (endo) {
                const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n);
                let { p: k1p, f: f1p } = this.wNAF(k1);
                let { p: k2p, f: f2p } = this.wNAF(k2);
                k1p = wnaf.constTimeNegate(k1neg, k1p);
                k2p = wnaf.constTimeNegate(k2neg, k2p);
                k2p = new Point(Fp.mul(k2p.px, endo.beta), k2p.py, k2p.pz);
                point = k1p.add(k2p);
                fake = f1p.add(f2p);
            } else {
                const { p, f } = this.wNAF(n);
                point = p;
                fake = f;
            }
            // Normalize `z` for both points, but return only real one
            return Point.normalizeZ([
                point,
                fake
            ])[0];
        }
        /**
         * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
         * Not using Strauss-Shamir trick: precomputation tables are faster.
         * The trick could be useful if both P and Q are not G (not in our case).
         * @returns non-zero affine point
         */ multiplyAndAddUnsafe(Q, a, b) {
            const G = Point.BASE; // No Strauss-Shamir trick: we have 10% faster G precomputes
            const mul = (P, a // Select faster multiply() method
            )=>a === _0n || a === _1n || !P.equals(G) ? P.multiplyUnsafe(a) : P.multiply(a);
            const sum = mul(this, a).add(mul(Q, b));
            return sum.is0() ? undefined : sum;
        }
        // Converts Projective point to affine (x, y) coordinates.
        // Can accept precomputed Z^-1 - for example, from invertBatch.
        // (x, y, z) ∋ (x=x/z, y=y/z)
        toAffine(iz) {
            const { px: x, py: y, pz: z } = this;
            const is0 = this.is0();
            // If invZ was 0, we return zero point. However we still want to execute
            // all operations, so we replace invZ with a random number, 1.
            if (iz == null) iz = is0 ? Fp.ONE : Fp.inv(z);
            const ax = Fp.mul(x, iz);
            const ay = Fp.mul(y, iz);
            const zz = Fp.mul(z, iz);
            if (is0) return {
                x: Fp.ZERO,
                y: Fp.ZERO
            };
            if (!Fp.eql(zz, Fp.ONE)) throw new Error('invZ was invalid');
            return {
                x: ax,
                y: ay
            };
        }
        isTorsionFree() {
            const { h: cofactor, isTorsionFree } = CURVE;
            if (cofactor === _1n) return true; // No subgroups, always torsion-free
            if (isTorsionFree) return isTorsionFree(Point, this);
            throw new Error('isTorsionFree() has not been declared for the elliptic curve');
        }
        clearCofactor() {
            const { h: cofactor, clearCofactor } = CURVE;
            if (cofactor === _1n) return this; // Fast-path
            if (clearCofactor) return clearCofactor(Point, this);
            return this.multiplyUnsafe(CURVE.h);
        }
        toRawBytes(isCompressed = true) {
            this.assertValidity();
            return toBytes(Point, this, isCompressed);
        }
        toHex(isCompressed = true) {
            return ut.bytesToHex(this.toRawBytes(isCompressed));
        }
    }
    Point.BASE = new Point(CURVE.Gx, CURVE.Gy, Fp.ONE);
    Point.ZERO = new Point(Fp.ZERO, Fp.ONE, Fp.ZERO);
    const _bits = CURVE.nBitLength;
    const wnaf = (0, curve_js_1.wNAF)(Point, CURVE.endo ? Math.ceil(_bits / 2) : _bits);
    // Validate if generator point is on curve
    return {
        CURVE,
        ProjectivePoint: Point,
        normPrivateKeyToScalar,
        weierstrassEquation,
        isWithinCurveOrder
    };
}
exports.weierstrassPoints = weierstrassPoints;
function validateOpts(curve) {
    const opts = (0, curve_js_1.validateBasic)(curve);
    ut.validateObject(opts, {
        hash: 'hash',
        hmac: 'function',
        randomBytes: 'function'
    }, {
        bits2int: 'function',
        bits2int_modN: 'function',
        lowS: 'boolean'
    });
    return Object.freeze({
        lowS: true,
        ...opts
    });
}
function weierstrass(curveDef) {
    const CURVE = validateOpts(curveDef);
    const { Fp, n: CURVE_ORDER } = CURVE;
    const compressedLen = Fp.BYTES + 1; // e.g. 33 for 32
    const uncompressedLen = 2 * Fp.BYTES + 1; // e.g. 65 for 32
    function isValidFieldElement(num) {
        return _0n < num && num < Fp.ORDER; // 0 is banned since it's not invertible FE
    }
    function modN(a) {
        return mod.mod(a, CURVE_ORDER);
    }
    function invN(a) {
        return mod.invert(a, CURVE_ORDER);
    }
    const { ProjectivePoint: Point, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
        ...CURVE,
        toBytes (_c, point, isCompressed) {
            const a = point.toAffine();
            const x = Fp.toBytes(a.x);
            const cat = ut.concatBytes;
            if (isCompressed) return cat(Uint8Array.from([
                point.hasEvenY() ? 0x02 : 0x03
            ]), x);
            else return cat(Uint8Array.from([
                0x04
            ]), x, Fp.toBytes(a.y));
        },
        fromBytes (bytes) {
            const len = bytes.length;
            const head = bytes[0];
            const tail = bytes.subarray(1);
            // this.assertValidity() is done inside of fromHex
            if (len === compressedLen && (head === 0x02 || head === 0x03)) {
                const x = ut.bytesToNumberBE(tail);
                if (!isValidFieldElement(x)) throw new Error('Point is not on curve');
                const y2 = weierstrassEquation(x); // y² = x³ + ax + b
                let y = Fp.sqrt(y2); // y = y² ^ (p+1)/4
                const isYOdd = (y & _1n) === _1n;
                // ECDSA
                const isHeadOdd = (head & 1) === 1;
                if (isHeadOdd !== isYOdd) y = Fp.neg(y);
                return {
                    x,
                    y
                };
            } else if (len === uncompressedLen && head === 0x04) {
                const x = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
                const y = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
                return {
                    x,
                    y
                };
            } else throw new Error(`Point of length ${len} was invalid. Expected ${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes`);
        }
    });
    const numToNByteStr = (num)=>ut.bytesToHex(ut.numberToBytesBE(num, CURVE.nByteLength));
    function isBiggerThanHalfOrder(number) {
        const HALF = CURVE_ORDER >> _1n;
        return number > HALF;
    }
    function normalizeS(s) {
        return isBiggerThanHalfOrder(s) ? modN(-s) : s;
    }
    // slice bytes num
    const slcNum = (b, from, to)=>ut.bytesToNumberBE(b.slice(from, to));
    /**
     * ECDSA signature with its (r, s) properties. Supports DER & compact representations.
     */ class Signature {
        constructor(r, s, recovery){
            this.r = r;
            this.s = s;
            this.recovery = recovery;
            this.assertValidity();
        }
        // pair (bytes of r, bytes of s)
        static fromCompact(hex) {
            const l = CURVE.nByteLength;
            hex = (0, utils_js_1.ensureBytes)('compactSignature', hex, l * 2);
            return new Signature(slcNum(hex, 0, l), slcNum(hex, l, 2 * l));
        }
        // DER encoded ECDSA signature
        // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
        static fromDER(hex) {
            const { r, s } = exports.DER.toSig((0, utils_js_1.ensureBytes)('DER', hex));
            return new Signature(r, s);
        }
        assertValidity() {
            // can use assertGE here
            if (!isWithinCurveOrder(this.r)) throw new Error('r must be 0 < r < CURVE.n');
            if (!isWithinCurveOrder(this.s)) throw new Error('s must be 0 < s < CURVE.n');
        }
        addRecoveryBit(recovery) {
            return new Signature(this.r, this.s, recovery);
        }
        recoverPublicKey(msgHash) {
            const { r, s, recovery: rec } = this;
            const h = bits2int_modN((0, utils_js_1.ensureBytes)('msgHash', msgHash)); // Truncate hash
            if (rec == null || ![
                0,
                1,
                2,
                3
            ].includes(rec)) throw new Error('recovery id invalid');
            const radj = rec === 2 || rec === 3 ? r + CURVE.n : r;
            if (radj >= Fp.ORDER) throw new Error('recovery id 2 or 3 invalid');
            const prefix = (rec & 1) === 0 ? '02' : '03';
            const R = Point.fromHex(prefix + numToNByteStr(radj));
            const ir = invN(radj); // r^-1
            const u1 = modN(-h * ir); // -hr^-1
            const u2 = modN(s * ir); // sr^-1
            const Q = Point.BASE.multiplyAndAddUnsafe(R, u1, u2); // (sr^-1)R-(hr^-1)G = -(hr^-1)G + (sr^-1)
            if (!Q) throw new Error('point at infinify'); // unsafe is fine: no priv data leaked
            Q.assertValidity();
            return Q;
        }
        // Signatures should be low-s, to prevent malleability.
        hasHighS() {
            return isBiggerThanHalfOrder(this.s);
        }
        normalizeS() {
            return this.hasHighS() ? new Signature(this.r, modN(-this.s), this.recovery) : this;
        }
        // DER-encoded
        toDERRawBytes() {
            return ut.hexToBytes(this.toDERHex());
        }
        toDERHex() {
            return exports.DER.hexFromSig({
                r: this.r,
                s: this.s
            });
        }
        // padded bytes of r, then padded bytes of s
        toCompactRawBytes() {
            return ut.hexToBytes(this.toCompactHex());
        }
        toCompactHex() {
            return numToNByteStr(this.r) + numToNByteStr(this.s);
        }
    }
    const utils = {
        isValidPrivateKey (privateKey) {
            try {
                normPrivateKeyToScalar(privateKey);
                return true;
            } catch (error) {
                return false;
            }
        },
        normPrivateKeyToScalar: normPrivateKeyToScalar,
        /**
         * Produces cryptographically secure private key from random of size
         * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
         */ randomPrivateKey: ()=>{
            const length = mod.getMinHashLength(CURVE.n);
            return mod.mapHashToField(CURVE.randomBytes(length), CURVE.n);
        },
        /**
         * Creates precompute table for an arbitrary EC point. Makes point "cached".
         * Allows to massively speed-up `point.multiply(scalar)`.
         * @returns cached point
         * @example
         * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
         * fast.multiply(privKey); // much faster ECDH now
         */ precompute (windowSize = 8, point = Point.BASE) {
            point._setWindowSize(windowSize);
            point.multiply(BigInt(3)); // 3 is arbitrary, just need any number here
            return point;
        }
    };
    /**
     * Computes public key for a private key. Checks for validity of the private key.
     * @param privateKey private key
     * @param isCompressed whether to return compact (default), or full key
     * @returns Public key, full when isCompressed=false; short when isCompressed=true
     */ function getPublicKey(privateKey, isCompressed = true) {
        return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
    }
    /**
     * Quick and dirty check for item being public key. Does not validate hex, or being on-curve.
     */ function isProbPub(item) {
        const arr = item instanceof Uint8Array;
        const str = typeof item === 'string';
        const len = (arr || str) && item.length;
        if (arr) return len === compressedLen || len === uncompressedLen;
        if (str) return len === 2 * compressedLen || len === 2 * uncompressedLen;
        if (item instanceof Point) return true;
        return false;
    }
    /**
     * ECDH (Elliptic Curve Diffie Hellman).
     * Computes shared public key from private key and public key.
     * Checks: 1) private key validity 2) shared key is on-curve.
     * Does NOT hash the result.
     * @param privateA private key
     * @param publicB different public key
     * @param isCompressed whether to return compact (default), or full key
     * @returns shared public key
     */ function getSharedSecret(privateA, publicB, isCompressed = true) {
        if (isProbPub(privateA)) throw new Error('first arg must be private key');
        if (!isProbPub(publicB)) throw new Error('second arg must be public key');
        const b = Point.fromHex(publicB); // check for being on-curve
        return b.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
    }
    // RFC6979: ensure ECDSA msg is X bytes and < N. RFC suggests optional truncating via bits2octets.
    // FIPS 186-4 4.6 suggests the leftmost min(nBitLen, outLen) bits, which matches bits2int.
    // bits2int can produce res>N, we can do mod(res, N) since the bitLen is the same.
    // int2octets can't be used; pads small msgs with 0: unacceptatble for trunc as per RFC vectors
    const bits2int = CURVE.bits2int || function(bytes) {
        // For curves with nBitLength % 8 !== 0: bits2octets(bits2octets(m)) !== bits2octets(m)
        // for some cases, since bytes.length * 8 is not actual bitLength.
        const num = ut.bytesToNumberBE(bytes); // check for == u8 done here
        const delta = bytes.length * 8 - CURVE.nBitLength; // truncate to nBitLength leftmost bits
        return delta > 0 ? num >> BigInt(delta) : num;
    };
    const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
        return modN(bits2int(bytes)); // can't use bytesToNumberBE here
    };
    // NOTE: pads output with zero as per spec
    const ORDER_MASK = ut.bitMask(CURVE.nBitLength);
    /**
     * Converts to bytes. Checks if num in `[0..ORDER_MASK-1]` e.g.: `[0..2^256-1]`.
     */ function int2octets(num) {
        if (typeof num !== 'bigint') throw new Error('bigint expected');
        if (!(_0n <= num && num < ORDER_MASK)) throw new Error(`bigint expected < 2^${CURVE.nBitLength}`);
        // works with order, can have different size than numToField!
        return ut.numberToBytesBE(num, CURVE.nByteLength);
    }
    // Steps A, D of RFC6979 3.2
    // Creates RFC6979 seed; converts msg/privKey to numbers.
    // Used only in sign, not in verify.
    // NOTE: we cannot assume here that msgHash has same amount of bytes as curve order, this will be wrong at least for P521.
    // Also it can be bigger for P224 + SHA256
    function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
        if ([
            'recovered',
            'canonical'
        ].some((k)=>k in opts)) throw new Error('sign() legacy options not supported');
        const { hash, randomBytes } = CURVE;
        let { lowS, prehash, extraEntropy: ent } = opts; // generates low-s sigs by default
        if (lowS == null) lowS = true; // RFC6979 3.2: we skip step A, because we already provide hash
        msgHash = (0, utils_js_1.ensureBytes)('msgHash', msgHash);
        if (prehash) msgHash = (0, utils_js_1.ensureBytes)('prehashed msgHash', hash(msgHash));
        // We can't later call bits2octets, since nested bits2int is broken for curves
        // with nBitLength % 8 !== 0. Because of that, we unwrap it here as int2octets call.
        // const bits2octets = (bits) => int2octets(bits2int_modN(bits))
        const h1int = bits2int_modN(msgHash);
        const d = normPrivateKeyToScalar(privateKey); // validate private key, convert to bigint
        const seedArgs = [
            int2octets(d),
            int2octets(h1int)
        ];
        // extraEntropy. RFC6979 3.6: additional k' (optional).
        if (ent != null) {
            // K = HMAC_K(V || 0x00 || int2octets(x) || bits2octets(h1) || k')
            const e = ent === true ? randomBytes(Fp.BYTES) : ent; // generate random bytes OR pass as-is
            seedArgs.push((0, utils_js_1.ensureBytes)('extraEntropy', e)); // check for being bytes
        }
        const seed = ut.concatBytes(...seedArgs); // Step D of RFC6979 3.2
        const m = h1int; // NOTE: no need to call bits2int second time here, it is inside truncateHash!
        // Converts signature params into point w r/s, checks result for validity.
        function k2sig(kBytes) {
            // RFC 6979 Section 3.2, step 3: k = bits2int(T)
            const k = bits2int(kBytes); // Cannot use fields methods, since it is group element
            if (!isWithinCurveOrder(k)) return; // Important: all mod() calls here must be done over N
            const ik = invN(k); // k^-1 mod n
            const q = Point.BASE.multiply(k).toAffine(); // q = Gk
            const r = modN(q.x); // r = q.x mod n
            if (r === _0n) return;
            // Can use scalar blinding b^-1(bm + bdr) where b ∈ [1,q−1] according to
            // https://tches.iacr.org/index.php/TCHES/article/view/7337/6509. We've decided against it:
            // a) dependency on CSPRNG b) 15% slowdown c) doesn't really help since bigints are not CT
            const s = modN(ik * modN(m + r * d)); // Not using blinding here
            if (s === _0n) return;
            let recovery = (q.x === r ? 0 : 2) | Number(q.y & _1n); // recovery bit (2 or 3, when q.x > n)
            let normS = s;
            if (lowS && isBiggerThanHalfOrder(s)) {
                normS = normalizeS(s); // if lowS was passed, ensure s is always
                recovery ^= 1; // // in the bottom half of N
            }
            return new Signature(r, normS, recovery); // use normS, not s
        }
        return {
            seed,
            k2sig
        };
    }
    const defaultSigOpts = {
        lowS: CURVE.lowS,
        prehash: false
    };
    const defaultVerOpts = {
        lowS: CURVE.lowS,
        prehash: false
    };
    /**
     * Signs message hash with a private key.
     * ```
     * sign(m, d, k) where
     *   (x, y) = G × k
     *   r = x mod n
     *   s = (m + dr)/k mod n
     * ```
     * @param msgHash NOT message. msg needs to be hashed to `msgHash`, or use `prehash`.
     * @param privKey private key
     * @param opts lowS for non-malleable sigs. extraEntropy for mixing randomness into k. prehash will hash first arg.
     * @returns signature with recovery param
     */ function sign(msgHash, privKey, opts = defaultSigOpts) {
        const { seed, k2sig } = prepSig(msgHash, privKey, opts); // Steps A, D of RFC6979 3.2.
        const C = CURVE;
        const drbg = ut.createHmacDrbg(C.hash.outputLen, C.nByteLength, C.hmac);
        return drbg(seed, k2sig); // Steps B, C, D, E, F, G
    }
    // Enable precomputes. Slows down first publicKey computation by 20ms.
    Point.BASE._setWindowSize(8);
    // utils.precompute(8, ProjectivePoint.BASE)
    /**
     * Verifies a signature against message hash and public key.
     * Rejects lowS signatures by default: to override,
     * specify option `{lowS: false}`. Implements section 4.1.4 from https://www.secg.org/sec1-v2.pdf:
     *
     * ```
     * verify(r, s, h, P) where
     *   U1 = hs^-1 mod n
     *   U2 = rs^-1 mod n
     *   R = U1⋅G - U2⋅P
     *   mod(R.x, n) == r
     * ```
     */ function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
        const sg = signature;
        msgHash = (0, utils_js_1.ensureBytes)('msgHash', msgHash);
        publicKey = (0, utils_js_1.ensureBytes)('publicKey', publicKey);
        if ('strict' in opts) throw new Error('options.strict was renamed to lowS');
        const { lowS, prehash } = opts;
        let _sig = undefined;
        let P;
        try {
            if (typeof sg === 'string' || sg instanceof Uint8Array) // Signature can be represented in 2 ways: compact (2*nByteLength) & DER (variable-length).
            // Since DER can also be 2*nByteLength bytes, we check for it first.
            try {
                _sig = Signature.fromDER(sg);
            } catch (derError) {
                if (!(derError instanceof exports.DER.Err)) throw derError;
                _sig = Signature.fromCompact(sg);
            }
            else if (typeof sg === 'object' && typeof sg.r === 'bigint' && typeof sg.s === 'bigint') {
                const { r, s } = sg;
                _sig = new Signature(r, s);
            } else throw new Error('PARSE');
            P = Point.fromHex(publicKey);
        } catch (error) {
            if (error.message === 'PARSE') throw new Error(`signature must be Signature instance, Uint8Array or hex string`);
            return false;
        }
        if (lowS && _sig.hasHighS()) return false;
        if (prehash) msgHash = CURVE.hash(msgHash);
        const { r, s } = _sig;
        const h = bits2int_modN(msgHash); // Cannot use fields methods, since it is group element
        const is = invN(s); // s^-1
        const u1 = modN(h * is); // u1 = hs^-1 mod n
        const u2 = modN(r * is); // u2 = rs^-1 mod n
        const R = Point.BASE.multiplyAndAddUnsafe(P, u1, u2)?.toAffine(); // R = u1⋅G + u2⋅P
        if (!R) return false;
        const v = modN(R.x);
        return v === r;
    }
    return {
        CURVE,
        getPublicKey,
        getSharedSecret,
        sign,
        verify,
        ProjectivePoint: Point,
        Signature,
        utils
    };
}
exports.weierstrass = weierstrass;
/**
 * Implementation of the Shallue and van de Woestijne method for any weierstrass curve.
 * TODO: check if there is a way to merge this with uvRatio in Edwards; move to modular.
 * b = True and y = sqrt(u / v) if (u / v) is square in F, and
 * b = False and y = sqrt(Z * (u / v)) otherwise.
 * @param Fp
 * @param Z
 * @returns
 */ function SWUFpSqrtRatio(Fp, Z) {
    // Generic implementation
    const q = Fp.ORDER;
    let l = _0n;
    for(let o = q - _1n; o % _2n === _0n; o /= _2n)l += _1n;
    const c1 = l; // 1. c1, the largest integer such that 2^c1 divides q - 1.
    // We need 2n ** c1 and 2n ** (c1-1). We can't use **; but we can use <<.
    // 2n ** c1 == 2n << (c1-1)
    const _2n_pow_c1_1 = _2n << c1 - _1n - _1n;
    const _2n_pow_c1 = _2n_pow_c1_1 * _2n;
    const c2 = (q - _1n) / _2n_pow_c1; // 2. c2 = (q - 1) / (2^c1)  # Integer arithmetic
    const c3 = (c2 - _1n) / _2n; // 3. c3 = (c2 - 1) / 2            # Integer arithmetic
    const c4 = _2n_pow_c1 - _1n; // 4. c4 = 2^c1 - 1                # Integer arithmetic
    const c5 = _2n_pow_c1_1; // 5. c5 = 2^(c1 - 1)                  # Integer arithmetic
    const c6 = Fp.pow(Z, c2); // 6. c6 = Z^c2
    const c7 = Fp.pow(Z, (c2 + _1n) / _2n); // 7. c7 = Z^((c2 + 1) / 2)
    let sqrtRatio = (u, v)=>{
        let tv1 = c6; // 1. tv1 = c6
        let tv2 = Fp.pow(v, c4); // 2. tv2 = v^c4
        let tv3 = Fp.sqr(tv2); // 3. tv3 = tv2^2
        tv3 = Fp.mul(tv3, v); // 4. tv3 = tv3 * v
        let tv5 = Fp.mul(u, tv3); // 5. tv5 = u * tv3
        tv5 = Fp.pow(tv5, c3); // 6. tv5 = tv5^c3
        tv5 = Fp.mul(tv5, tv2); // 7. tv5 = tv5 * tv2
        tv2 = Fp.mul(tv5, v); // 8. tv2 = tv5 * v
        tv3 = Fp.mul(tv5, u); // 9. tv3 = tv5 * u
        let tv4 = Fp.mul(tv3, tv2); // 10. tv4 = tv3 * tv2
        tv5 = Fp.pow(tv4, c5); // 11. tv5 = tv4^c5
        let isQR = Fp.eql(tv5, Fp.ONE); // 12. isQR = tv5 == 1
        tv2 = Fp.mul(tv3, c7); // 13. tv2 = tv3 * c7
        tv5 = Fp.mul(tv4, tv1); // 14. tv5 = tv4 * tv1
        tv3 = Fp.cmov(tv2, tv3, isQR); // 15. tv3 = CMOV(tv2, tv3, isQR)
        tv4 = Fp.cmov(tv5, tv4, isQR); // 16. tv4 = CMOV(tv5, tv4, isQR)
        // 17. for i in (c1, c1 - 1, ..., 2):
        for(let i = c1; i > _1n; i--){
            let tv5 = i - _2n; // 18.    tv5 = i - 2
            tv5 = _2n << tv5 - _1n; // 19.    tv5 = 2^tv5
            let tvv5 = Fp.pow(tv4, tv5); // 20.    tv5 = tv4^tv5
            const e1 = Fp.eql(tvv5, Fp.ONE); // 21.    e1 = tv5 == 1
            tv2 = Fp.mul(tv3, tv1); // 22.    tv2 = tv3 * tv1
            tv1 = Fp.mul(tv1, tv1); // 23.    tv1 = tv1 * tv1
            tvv5 = Fp.mul(tv4, tv1); // 24.    tv5 = tv4 * tv1
            tv3 = Fp.cmov(tv2, tv3, e1); // 25.    tv3 = CMOV(tv2, tv3, e1)
            tv4 = Fp.cmov(tvv5, tv4, e1); // 26.    tv4 = CMOV(tv5, tv4, e1)
        }
        return {
            isValid: isQR,
            value: tv3
        };
    };
    if (Fp.ORDER % _4n === _3n) {
        // sqrt_ratio_3mod4(u, v)
        const c1 = (Fp.ORDER - _3n) / _4n; // 1. c1 = (q - 3) / 4     # Integer arithmetic
        const c2 = Fp.sqrt(Fp.neg(Z)); // 2. c2 = sqrt(-Z)
        sqrtRatio = (u, v)=>{
            let tv1 = Fp.sqr(v); // 1. tv1 = v^2
            const tv2 = Fp.mul(u, v); // 2. tv2 = u * v
            tv1 = Fp.mul(tv1, tv2); // 3. tv1 = tv1 * tv2
            let y1 = Fp.pow(tv1, c1); // 4. y1 = tv1^c1
            y1 = Fp.mul(y1, tv2); // 5. y1 = y1 * tv2
            const y2 = Fp.mul(y1, c2); // 6. y2 = y1 * c2
            const tv3 = Fp.mul(Fp.sqr(y1), v); // 7. tv3 = y1^2; 8. tv3 = tv3 * v
            const isQR = Fp.eql(tv3, u); // 9. isQR = tv3 == u
            let y = Fp.cmov(y2, y1, isQR); // 10. y = CMOV(y2, y1, isQR)
            return {
                isValid: isQR,
                value: y
            }; // 11. return (isQR, y) isQR ? y : y*c2
        };
    }
    // No curves uses that
    // if (Fp.ORDER % _8n === _5n) // sqrt_ratio_5mod8
    return sqrtRatio;
}
exports.SWUFpSqrtRatio = SWUFpSqrtRatio;
/**
 * Simplified Shallue-van de Woestijne-Ulas Method
 * https://www.rfc-editor.org/rfc/rfc9380#section-6.6.2
 */ function mapToCurveSimpleSWU(Fp, opts) {
    mod.validateField(Fp);
    if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z)) throw new Error('mapToCurveSimpleSWU: invalid opts');
    const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
    if (!Fp.isOdd) throw new Error('Fp.isOdd is not implemented!');
    // Input: u, an element of F.
    // Output: (x, y), a point on E.
    return (u)=>{
        // prettier-ignore
        let tv1, tv2, tv3, tv4, tv5, tv6, x, y;
        tv1 = Fp.sqr(u); // 1.  tv1 = u^2
        tv1 = Fp.mul(tv1, opts.Z); // 2.  tv1 = Z * tv1
        tv2 = Fp.sqr(tv1); // 3.  tv2 = tv1^2
        tv2 = Fp.add(tv2, tv1); // 4.  tv2 = tv2 + tv1
        tv3 = Fp.add(tv2, Fp.ONE); // 5.  tv3 = tv2 + 1
        tv3 = Fp.mul(tv3, opts.B); // 6.  tv3 = B * tv3
        tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO)); // 7.  tv4 = CMOV(Z, -tv2, tv2 != 0)
        tv4 = Fp.mul(tv4, opts.A); // 8.  tv4 = A * tv4
        tv2 = Fp.sqr(tv3); // 9.  tv2 = tv3^2
        tv6 = Fp.sqr(tv4); // 10. tv6 = tv4^2
        tv5 = Fp.mul(tv6, opts.A); // 11. tv5 = A * tv6
        tv2 = Fp.add(tv2, tv5); // 12. tv2 = tv2 + tv5
        tv2 = Fp.mul(tv2, tv3); // 13. tv2 = tv2 * tv3
        tv6 = Fp.mul(tv6, tv4); // 14. tv6 = tv6 * tv4
        tv5 = Fp.mul(tv6, opts.B); // 15. tv5 = B * tv6
        tv2 = Fp.add(tv2, tv5); // 16. tv2 = tv2 + tv5
        x = Fp.mul(tv1, tv3); // 17.   x = tv1 * tv3
        const { isValid, value } = sqrtRatio(tv2, tv6); // 18. (is_gx1_square, y1) = sqrt_ratio(tv2, tv6)
        y = Fp.mul(tv1, u); // 19.   y = tv1 * u  -> Z * u^3 * y1
        y = Fp.mul(y, value); // 20.   y = y * y1
        x = Fp.cmov(x, tv3, isValid); // 21.   x = CMOV(x, tv3, is_gx1_square)
        y = Fp.cmov(y, value, isValid); // 22.   y = CMOV(y, y1, is_gx1_square)
        const e1 = Fp.isOdd(u) === Fp.isOdd(y); // 23.  e1 = sgn0(u) == sgn0(y)
        y = Fp.cmov(Fp.neg(y), y, e1); // 24.   y = CMOV(-y, y, e1)
        x = Fp.div(x, tv4); // 25.   x = x / tv4
        return {
            x,
            y
        };
    };
}
exports.mapToCurveSimpleSWU = mapToCurveSimpleSWU;

},{"d8b1615c256fe3fa":"cB5Z5","aae491f09795d5ee":"cBmkf","11f68d725b0f6f5d":"etkeY"}],"etkeY":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateBasic = exports.wNAF = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ // Abelian group utilities
const modular_js_1 = require("72c8f755a25fddc3");
const utils_js_1 = require("f90fcba6ea31de55");
const _0n = BigInt(0);
const _1n = BigInt(1);
// Elliptic curve multiplication of Point by scalar. Fragile.
// Scalars should always be less than curve order: this should be checked inside of a curve itself.
// Creates precomputation tables for fast multiplication:
// - private scalar is split by fixed size windows of W bits
// - every window point is collected from window's table & added to accumulator
// - since windows are different, same point inside tables won't be accessed more than once per calc
// - each multiplication is 'Math.ceil(CURVE_ORDER / 𝑊) + 1' point additions (fixed for any scalar)
// - +1 window is neccessary for wNAF
// - wNAF reduces table size: 2x less memory + 2x faster generation, but 10% slower multiplication
// TODO: Research returning 2d JS array of windows, instead of a single window. This would allow
// windows to be in different memory locations
function wNAF(c, bits) {
    const constTimeNegate = (condition, item)=>{
        const neg = item.negate();
        return condition ? neg : item;
    };
    const opts = (W)=>{
        const windows = Math.ceil(bits / W) + 1; // +1, because
        const windowSize = 2 ** (W - 1); // -1 because we skip zero
        return {
            windows,
            windowSize
        };
    };
    return {
        constTimeNegate,
        // non-const time multiplication ladder
        unsafeLadder (elm, n) {
            let p = c.ZERO;
            let d = elm;
            while(n > _0n){
                if (n & _1n) p = p.add(d);
                d = d.double();
                n >>= _1n;
            }
            return p;
        },
        /**
         * Creates a wNAF precomputation window. Used for caching.
         * Default window size is set by `utils.precompute()` and is equal to 8.
         * Number of precomputed points depends on the curve size:
         * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
         * - 𝑊 is the window size
         * - 𝑛 is the bitlength of the curve order.
         * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
         * @returns precomputed point tables flattened to a single array
         */ precomputeWindow (elm, W) {
            const { windows, windowSize } = opts(W);
            const points = [];
            let p = elm;
            let base = p;
            for(let window = 0; window < windows; window++){
                base = p;
                points.push(base);
                // =1, because we skip zero
                for(let i = 1; i < windowSize; i++){
                    base = base.add(p);
                    points.push(base);
                }
                p = base.double();
            }
            return points;
        },
        /**
         * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
         * @param W window size
         * @param precomputes precomputed tables
         * @param n scalar (we don't check here, but should be less than curve order)
         * @returns real and fake (for const-time) points
         */ wNAF (W, precomputes, n) {
            // TODO: maybe check that scalar is less than group order? wNAF behavious is undefined otherwise
            // But need to carefully remove other checks before wNAF. ORDER == bits here
            const { windows, windowSize } = opts(W);
            let p = c.ZERO;
            let f = c.BASE;
            const mask = BigInt(2 ** W - 1); // Create mask with W ones: 0b1111 for W=4 etc.
            const maxNumber = 2 ** W;
            const shiftBy = BigInt(W);
            for(let window = 0; window < windows; window++){
                const offset = window * windowSize;
                // Extract W bits.
                let wbits = Number(n & mask);
                // Shift number by W bits.
                n >>= shiftBy;
                // If the bits are bigger than max size, we'll split those.
                // +224 => 256 - 32
                if (wbits > windowSize) {
                    wbits -= maxNumber;
                    n += _1n;
                }
                // This code was first written with assumption that 'f' and 'p' will never be infinity point:
                // since each addition is multiplied by 2 ** W, it cannot cancel each other. However,
                // there is negate now: it is possible that negated element from low value
                // would be the same as high element, which will create carry into next window.
                // It's not obvious how this can fail, but still worth investigating later.
                // Check if we're onto Zero point.
                // Add random point inside current window to f.
                const offset1 = offset;
                const offset2 = offset + Math.abs(wbits) - 1; // -1 because we skip zero
                const cond1 = window % 2 !== 0;
                const cond2 = wbits < 0;
                if (wbits === 0) // The most important part for const-time getPublicKey
                f = f.add(constTimeNegate(cond1, precomputes[offset1]));
                else p = p.add(constTimeNegate(cond2, precomputes[offset2]));
            }
            // JIT-compiler should not eliminate f here, since it will later be used in normalizeZ()
            // Even if the variable is still unused, there are some checks which will
            // throw an exception, so compiler needs to prove they won't happen, which is hard.
            // At this point there is a way to F be infinity-point even if p is not,
            // which makes it less const-time: around 1 bigint multiply.
            return {
                p,
                f
            };
        },
        wNAFCached (P, precomputesMap, n, transform) {
            // @ts-ignore
            const W = P._WINDOW_SIZE || 1;
            // Calculate precomputes on a first run, reuse them after
            let comp = precomputesMap.get(P);
            if (!comp) {
                comp = this.precomputeWindow(P, W);
                if (W !== 1) precomputesMap.set(P, transform(comp));
            }
            return this.wNAF(W, comp, n);
        }
    };
}
exports.wNAF = wNAF;
function validateBasic(curve) {
    (0, modular_js_1.validateField)(curve.Fp);
    (0, utils_js_1.validateObject)(curve, {
        n: 'bigint',
        h: 'bigint',
        Gx: 'field',
        Gy: 'field'
    }, {
        nBitLength: 'isSafeInteger',
        nByteLength: 'isSafeInteger'
    });
    // Set defaults
    return Object.freeze({
        ...(0, modular_js_1.nLength)(curve.n, curve.nBitLength),
        ...curve,
        p: curve.Fp.ORDER
    });
}
exports.validateBasic = validateBasic;

},{"72c8f755a25fddc3":"cB5Z5","f90fcba6ea31de55":"cBmkf"}],"2yuJj":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createHasher = exports.isogenyMap = exports.hash_to_field = exports.expand_message_xof = exports.expand_message_xmd = void 0;
const modular_js_1 = require("eccb35e649679ca");
const utils_js_1 = require("202487820f28c009");
function validateDST(dst) {
    if (dst instanceof Uint8Array) return dst;
    if (typeof dst === 'string') return (0, utils_js_1.utf8ToBytes)(dst);
    throw new Error('DST must be Uint8Array or string');
}
// Octet Stream to Integer. "spec" implementation of os2ip is 2.5x slower vs bytesToNumberBE.
const os2ip = utils_js_1.bytesToNumberBE;
// Integer to Octet Stream (numberToBytesBE)
function i2osp(value, length) {
    if (value < 0 || value >= 1 << 8 * length) throw new Error(`bad I2OSP call: value=${value} length=${length}`);
    const res = Array.from({
        length
    }).fill(0);
    for(let i = length - 1; i >= 0; i--){
        res[i] = value & 0xff;
        value >>>= 8;
    }
    return new Uint8Array(res);
}
function strxor(a, b) {
    const arr = new Uint8Array(a.length);
    for(let i = 0; i < a.length; i++)arr[i] = a[i] ^ b[i];
    return arr;
}
function isBytes(item) {
    if (!(item instanceof Uint8Array)) throw new Error('Uint8Array expected');
}
function isNum(item) {
    if (!Number.isSafeInteger(item)) throw new Error('number expected');
}
// Produces a uniformly random byte string using a cryptographic hash function H that outputs b bits
// https://www.rfc-editor.org/rfc/rfc9380#section-5.3.1
function expand_message_xmd(msg, DST, lenInBytes, H) {
    isBytes(msg);
    isBytes(DST);
    isNum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    if (DST.length > 255) DST = H((0, utils_js_1.concatBytes)((0, utils_js_1.utf8ToBytes)('H2C-OVERSIZE-DST-'), DST));
    const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H;
    const ell = Math.ceil(lenInBytes / b_in_bytes);
    if (ell > 255) throw new Error('Invalid xmd length');
    const DST_prime = (0, utils_js_1.concatBytes)(DST, i2osp(DST.length, 1));
    const Z_pad = i2osp(0, r_in_bytes);
    const l_i_b_str = i2osp(lenInBytes, 2); // len_in_bytes_str
    const b = new Array(ell);
    const b_0 = H((0, utils_js_1.concatBytes)(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
    b[0] = H((0, utils_js_1.concatBytes)(b_0, i2osp(1, 1), DST_prime));
    for(let i = 1; i <= ell; i++){
        const args = [
            strxor(b_0, b[i - 1]),
            i2osp(i + 1, 1),
            DST_prime
        ];
        b[i] = H((0, utils_js_1.concatBytes)(...args));
    }
    const pseudo_random_bytes = (0, utils_js_1.concatBytes)(...b);
    return pseudo_random_bytes.slice(0, lenInBytes);
}
exports.expand_message_xmd = expand_message_xmd;
// Produces a uniformly random byte string using an extendable-output function (XOF) H.
// 1. The collision resistance of H MUST be at least k bits.
// 2. H MUST be an XOF that has been proved indifferentiable from
//    a random oracle under a reasonable cryptographic assumption.
// https://www.rfc-editor.org/rfc/rfc9380#section-5.3.2
function expand_message_xof(msg, DST, lenInBytes, k, H) {
    isBytes(msg);
    isBytes(DST);
    isNum(lenInBytes);
    // https://www.rfc-editor.org/rfc/rfc9380#section-5.3.3
    // DST = H('H2C-OVERSIZE-DST-' || a_very_long_DST, Math.ceil((lenInBytes * k) / 8));
    if (DST.length > 255) {
        const dkLen = Math.ceil(2 * k / 8);
        DST = H.create({
            dkLen
        }).update((0, utils_js_1.utf8ToBytes)('H2C-OVERSIZE-DST-')).update(DST).digest();
    }
    if (lenInBytes > 65535 || DST.length > 255) throw new Error('expand_message_xof: invalid lenInBytes');
    return H.create({
        dkLen: lenInBytes
    }).update(msg).update(i2osp(lenInBytes, 2))// 2. DST_prime = DST || I2OSP(len(DST), 1)
    .update(DST).update(i2osp(DST.length, 1)).digest();
}
exports.expand_message_xof = expand_message_xof;
/**
 * Hashes arbitrary-length byte strings to a list of one or more elements of a finite field F
 * https://www.rfc-editor.org/rfc/rfc9380#section-5.2
 * @param msg a byte string containing the message to hash
 * @param count the number of elements of F to output
 * @param options `{DST: string, p: bigint, m: number, k: number, expand: 'xmd' | 'xof', hash: H}`, see above
 * @returns [u_0, ..., u_(count - 1)], a list of field elements.
 */ function hash_to_field(msg, count, options) {
    (0, utils_js_1.validateObject)(options, {
        DST: 'stringOrUint8Array',
        p: 'bigint',
        m: 'isSafeInteger',
        k: 'isSafeInteger',
        hash: 'hash'
    });
    const { p, k, m, hash, expand, DST: _DST } = options;
    isBytes(msg);
    isNum(count);
    const DST = validateDST(_DST);
    const log2p = p.toString(2).length;
    const L = Math.ceil((log2p + k) / 8); // section 5.1 of ietf draft link above
    const len_in_bytes = count * m * L;
    let prb; // pseudo_random_bytes
    if (expand === 'xmd') prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
    else if (expand === 'xof') prb = expand_message_xof(msg, DST, len_in_bytes, k, hash);
    else if (expand === '_internal_pass') // for internal tests only
    prb = msg;
    else throw new Error('expand must be "xmd" or "xof"');
    const u = new Array(count);
    for(let i = 0; i < count; i++){
        const e = new Array(m);
        for(let j = 0; j < m; j++){
            const elm_offset = L * (j + i * m);
            const tv = prb.subarray(elm_offset, elm_offset + L);
            e[j] = (0, modular_js_1.mod)(os2ip(tv), p);
        }
        u[i] = e;
    }
    return u;
}
exports.hash_to_field = hash_to_field;
function isogenyMap(field, map) {
    // Make same order as in spec
    const COEFF = map.map((i)=>Array.from(i).reverse());
    return (x, y)=>{
        const [xNum, xDen, yNum, yDen] = COEFF.map((val)=>val.reduce((acc, i)=>field.add(field.mul(acc, x), i)));
        x = field.div(xNum, xDen); // xNum / xDen
        y = field.mul(y, field.div(yNum, yDen)); // y * (yNum / yDev)
        return {
            x,
            y
        };
    };
}
exports.isogenyMap = isogenyMap;
function createHasher(Point, mapToCurve, def) {
    if (typeof mapToCurve !== 'function') throw new Error('mapToCurve() must be defined');
    return {
        // Encodes byte string to elliptic curve.
        // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        hashToCurve (msg, options) {
            const u = hash_to_field(msg, 2, {
                ...def,
                DST: def.DST,
                ...options
            });
            const u0 = Point.fromAffine(mapToCurve(u[0]));
            const u1 = Point.fromAffine(mapToCurve(u[1]));
            const P = u0.add(u1).clearCofactor();
            P.assertValidity();
            return P;
        },
        // Encodes byte string to elliptic curve.
        // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
        encodeToCurve (msg, options) {
            const u = hash_to_field(msg, 1, {
                ...def,
                DST: def.encodeDST,
                ...options
            });
            const P = Point.fromAffine(mapToCurve(u[0])).clearCofactor();
            P.assertValidity();
            return P;
        }
    };
}
exports.createHasher = createHasher;

},{"eccb35e649679ca":"cB5Z5","202487820f28c009":"cBmkf"}],"jmUYM":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCurve = exports.getHash = void 0;
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ const hmac_1 = require("2bb3ed73a71161e3");
const utils_1 = require("808050cc11f056c7");
const weierstrass_js_1 = require("bceff96a5b87336d");
// connects noble-curves to noble-hashes
function getHash(hash) {
    return {
        hash,
        hmac: (key, ...msgs)=>(0, hmac_1.hmac)(hash, key, (0, utils_1.concatBytes)(...msgs)),
        randomBytes: utils_1.randomBytes
    };
}
exports.getHash = getHash;
function createCurve(curveDef, defHash) {
    const create = (hash)=>(0, weierstrass_js_1.weierstrass)({
            ...curveDef,
            ...getHash(hash)
        });
    return Object.freeze({
        ...create(defHash),
        create
    });
}
exports.createCurve = createCurve;

},{"2bb3ed73a71161e3":"42AGl","808050cc11f056c7":"8fH4O","bceff96a5b87336d":"5TEzS"}],"42AGl":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hmac = exports.HMAC = void 0;
const _assert_js_1 = require("6b524da50970d987");
const utils_js_1 = require("54bb4061811e0f46");
// HMAC (RFC 2104)
class HMAC extends utils_js_1.Hash {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        (0, _assert_js_1.hash)(hash);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 106;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        (0, _assert_js_1.exists)(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.bytes)(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
exports.HMAC = HMAC;
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */ const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
exports.hmac = hmac;
exports.hmac.create = (hash, key)=>new HMAC(hash, key);

},{"6b524da50970d987":"fsodm","54bb4061811e0f46":"8fH4O"}],"4eGYF":[function(require,module,exports,__globalThis) {
"use strict";
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomBytes = exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.checkOpts = exports.Hash = exports.concatBytes = exports.toBytes = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.rotr = exports.createView = exports.u32 = exports.u8 = void 0;
// We use WebCrypto aka globalThis.crypto, which exists in browsers and node.js 16+.
// node.js versions earlier than v19 don't declare it in global scope.
// For node.js, package.json#exports field mapping rewrites import
// from `crypto` to `cryptoNode`, which imports native module.
// Makes the utils un-importable in browsers without a bundler.
// Once node.js 18 is deprecated, we can just drop the import.
const crypto_1 = require("2f0ed677024116e5");
const u8a = (a)=>a instanceof Uint8Array;
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// The rotate right (circular right shift) operation for uint32
const rotr = (word, shift)=>word << 32 - shift | word >>> shift;
exports.rotr = rotr;
// big-endian hardware is rare. Just in case someone still decides to run hashes:
// early-throw an error because we don't support BE yet.
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
if (!exports.isLE) throw new Error('Non little-endian hardware is not supported');
const hexes = Array.from({
    length: 256
}, (v, i)=>i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    if (!u8a(bytes)) throw new Error('Uint8Array expected');
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const len = hex.length;
    if (len % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + len);
    const array = new Uint8Array(len / 2);
    for(let i = 0; i < array.length; i++){
        const j = i * 2;
        const hexByte = hex.slice(j, j + 2);
        const byte = Number.parseInt(hexByte, 16);
        if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
        array[i] = byte;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error(`utf8ToBytes expected string, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
exports.utf8ToBytes = utf8ToBytes;
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    if (!u8a(data)) throw new Error(`expected Uint8Array, got ${typeof data}`);
    return data;
}
exports.toBytes = toBytes;
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    const r = new Uint8Array(arrays.reduce((sum, a)=>sum + a.length, 0));
    let pad = 0; // walk through each item, ensure they have proper type
    arrays.forEach((a)=>{
        if (!u8a(a)) throw new Error('Uint8Array expected');
        r.set(a, pad);
        pad += a.length;
    });
    return r;
}
exports.concatBytes = concatBytes;
// For runtime check if class implements interface
class Hash {
    // Safe version that clones internal state
    clone() {
        return this._cloneInto();
    }
}
exports.Hash = Hash;
// Check if object doens't have custom constructor (like Uint8Array/Array)
const isPlainObject = (obj)=>Object.prototype.toString.call(obj) === '[object Object]' && obj.constructor === Object;
function checkOpts(defaults, opts) {
    if (opts !== undefined && (typeof opts !== 'object' || !isPlainObject(opts))) throw new Error('Options should be object or undefined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
function wrapConstructor(hashCons) {
    const hashC = (msg)=>hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = ()=>hashCons();
    return hashC;
}
exports.wrapConstructor = wrapConstructor;
function wrapConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapConstructorWithOpts = wrapConstructorWithOpts;
function wrapXOFConstructorWithOpts(hashCons) {
    const hashC = (msg, opts)=>hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts)=>hashCons(opts);
    return hashC;
}
exports.wrapXOFConstructorWithOpts = wrapXOFConstructorWithOpts;
/**
 * Secure PRNG. Uses `crypto.getRandomValues`, which defers to OS.
 */ function randomBytes(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === 'function') return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    throw new Error('crypto.getRandomValues must be defined');
}
exports.randomBytes = randomBytes;

},{"2f0ed677024116e5":"1xXhj"}],"1xXhj":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.crypto = void 0;
exports.crypto = typeof globalThis === 'object' && 'crypto' in globalThis ? globalThis.crypto : undefined;

},{}],"gMMnQ":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sha224 = exports.sha256 = void 0;
const _sha2_js_1 = require("4f5daf8800452cd4");
const utils_js_1 = require("653508b9f32deb48");
// Choice: a ? b : c
const Chi = (a, b, c)=>a & b ^ ~a & c;
// Majority function, true if any two inpust is true
const Maj = (a, b, c)=>a & b ^ a & c ^ b & c;
// Round constants:
// first 32 bits of the fractional parts of the cube roots of the first 64 primes 2..311)
// prettier-ignore
const SHA256_K = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
// Initial state (first 32 bits of the fractional parts of the square roots of the first 8 primes 2..19):
// prettier-ignore
const IV = new Uint32Array([
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
]);
// Temporary buffer, not used to store anything between runs
// Named this way because it matches specification.
const SHA256_W = new Uint32Array(64);
class SHA256 extends _sha2_js_1.SHA2 {
    constructor(){
        super(64, 32, 8, false);
        // We cannot use array here since array allows indexing by variable
        // which means optimizer/compiler cannot use registers.
        this.A = IV[0] | 0;
        this.B = IV[1] | 0;
        this.C = IV[2] | 0;
        this.D = IV[3] | 0;
        this.E = IV[4] | 0;
        this.F = IV[5] | 0;
        this.G = IV[6] | 0;
        this.H = IV[7] | 0;
    }
    get() {
        const { A, B, C, D, E, F, G, H } = this;
        return [
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H
        ];
    }
    // prettier-ignore
    set(A, B, C, D, E, F, G, H) {
        this.A = A | 0;
        this.B = B | 0;
        this.C = C | 0;
        this.D = D | 0;
        this.E = E | 0;
        this.F = F | 0;
        this.G = G | 0;
        this.H = H | 0;
    }
    process(view, offset) {
        // Extend the first 16 words into the remaining 48 words w[16..63] of the message schedule array
        for(let i = 0; i < 16; i++, offset += 4)SHA256_W[i] = view.getUint32(offset, false);
        for(let i = 16; i < 64; i++){
            const W15 = SHA256_W[i - 15];
            const W2 = SHA256_W[i - 2];
            const s0 = (0, utils_js_1.rotr)(W15, 7) ^ (0, utils_js_1.rotr)(W15, 18) ^ W15 >>> 3;
            const s1 = (0, utils_js_1.rotr)(W2, 17) ^ (0, utils_js_1.rotr)(W2, 19) ^ W2 >>> 10;
            SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
        }
        // Compression function main loop, 64 rounds
        let { A, B, C, D, E, F, G, H } = this;
        for(let i = 0; i < 64; i++){
            const sigma1 = (0, utils_js_1.rotr)(E, 6) ^ (0, utils_js_1.rotr)(E, 11) ^ (0, utils_js_1.rotr)(E, 25);
            const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
            const sigma0 = (0, utils_js_1.rotr)(A, 2) ^ (0, utils_js_1.rotr)(A, 13) ^ (0, utils_js_1.rotr)(A, 22);
            const T2 = sigma0 + Maj(A, B, C) | 0;
            H = G;
            G = F;
            F = E;
            E = D + T1 | 0;
            D = C;
            C = B;
            B = A;
            A = T1 + T2 | 0;
        }
        // Add the compressed chunk to the current hash value
        A = A + this.A | 0;
        B = B + this.B | 0;
        C = C + this.C | 0;
        D = D + this.D | 0;
        E = E + this.E | 0;
        F = F + this.F | 0;
        G = G + this.G | 0;
        H = H + this.H | 0;
        this.set(A, B, C, D, E, F, G, H);
    }
    roundClean() {
        SHA256_W.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        this.buffer.fill(0);
    }
}
// Constants from https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
class SHA224 extends SHA256 {
    constructor(){
        super();
        this.A = -1056596264;
        this.B = 914150663;
        this.C = 812702999;
        this.D = -150054599;
        this.E = -4191439;
        this.F = 1750603025;
        this.G = 1694076839;
        this.H = -1090891868;
        this.outputLen = 28;
    }
}
/**
 * SHA2-256 hash function
 * @param message - data that would be hashed
 */ exports.sha256 = (0, utils_js_1.wrapConstructor)(()=>new SHA256());
exports.sha224 = (0, utils_js_1.wrapConstructor)(()=>new SHA224());

},{"4f5daf8800452cd4":"6grsp","653508b9f32deb48":"4eGYF"}],"6grsp":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SHA2 = void 0;
const _assert_js_1 = require("bb5295537c0a7272");
const utils_js_1 = require("1519cf8ac6ceb885");
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
// Base SHA2 class (RFC 6234)
class SHA2 extends utils_js_1.Hash {
    constructor(blockLen, outputLen, padOffset, isLE){
        super();
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE;
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.buffer = new Uint8Array(blockLen);
        this.view = (0, utils_js_1.createView)(this.buffer);
    }
    update(data) {
        _assert_js_1.default.exists(this);
        const { view, buffer, blockLen } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input, cast it to view and process
            if (take === blockLen) {
                const dataView = (0, utils_js_1.createView)(data);
                for(; blockLen <= len - pos; pos += blockLen)this.process(dataView, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(view, 0);
                this.pos = 0;
            }
        }
        this.length += data.length;
        this.roundClean();
        return this;
    }
    digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.output(out, this);
        this.finished = true;
        // Padding
        // We can avoid allocation of buffer for padding completely if it
        // was previously not allocated here. But it won't change performance.
        const { buffer, view, blockLen, isLE } = this;
        let { pos } = this;
        // append the bit '1' to the message
        buffer[pos++] = 128;
        this.buffer.subarray(pos).fill(0);
        // we have less than padOffset left in buffer, so we cannot put length in current block, need process it and pad again
        if (this.padOffset > blockLen - pos) {
            this.process(view, 0);
            pos = 0;
        }
        // Pad until full block byte with zeros
        for(let i = pos; i < blockLen; i++)buffer[i] = 0;
        // Note: sha512 requires length to be 128bit integer, but length in JS will overflow before that
        // You need to write around 2 exabytes (u64_max / 8 / (1024**6)) for this to happen.
        // So we just write lowest 64 bits of that value.
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE);
        this.process(view, 0);
        const oview = (0, utils_js_1.createView)(out);
        const len = this.outputLen;
        // NOTE: we do division by 4 later, which should be fused in single op with modulo by JIT
        if (len % 4) throw new Error('_sha2: outputLen should be aligned to 32bit');
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length) throw new Error('_sha2: outputLen bigger than state');
        for(let i = 0; i < outLen; i++)oview.setUint32(4 * i, state[i], isLE);
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
    _cloneInto(to) {
        to || (to = new this.constructor());
        to.set(...this.get());
        const { blockLen, buffer, length, finished, destroyed, pos } = this;
        to.length = length;
        to.pos = pos;
        to.finished = finished;
        to.destroyed = destroyed;
        if (length % blockLen) to.buffer.set(buffer);
        return to;
    }
}
exports.SHA2 = SHA2;

},{"bb5295537c0a7272":"3JYF4","1519cf8ac6ceb885":"4eGYF"}],"3JYF4":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`Wrong positive integer: ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== 'boolean') throw new Error(`Expected boolean, not ${b}`);
}
exports.bool = bool;
function bytes(b, ...lengths) {
    if (!(b instanceof Uint8Array)) throw new Error('Expected Uint8Array');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function') throw new Error('Hash should be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"cvmUK":[function(require,module,exports,__globalThis) {
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assertNumber", ()=>assertNumber);
parcelHelpers.export(exports, "utils", ()=>utils);
parcelHelpers.export(exports, "base16", ()=>base16);
parcelHelpers.export(exports, "base32", ()=>base32);
parcelHelpers.export(exports, "base32hex", ()=>base32hex);
parcelHelpers.export(exports, "base32crockford", ()=>base32crockford);
parcelHelpers.export(exports, "base64", ()=>base64);
parcelHelpers.export(exports, "base64url", ()=>base64url);
parcelHelpers.export(exports, "base58", ()=>base58);
parcelHelpers.export(exports, "base58flickr", ()=>base58flickr);
parcelHelpers.export(exports, "base58xrp", ()=>base58xrp);
parcelHelpers.export(exports, "base58xmr", ()=>base58xmr);
parcelHelpers.export(exports, "base58check", ()=>base58check);
parcelHelpers.export(exports, "bech32", ()=>bech32);
parcelHelpers.export(exports, "bech32m", ()=>bech32m);
parcelHelpers.export(exports, "utf8", ()=>utf8);
parcelHelpers.export(exports, "hex", ()=>hex);
parcelHelpers.export(exports, "bytesToString", ()=>bytesToString);
parcelHelpers.export(exports, "str", ()=>str);
parcelHelpers.export(exports, "stringToBytes", ()=>stringToBytes);
parcelHelpers.export(exports, "bytes", ()=>bytes);
function assertNumber(n) {
    if (!Number.isSafeInteger(n)) throw new Error(`Wrong integer: ${n}`);
}
function chain(...args) {
    const wrap = (a, b)=>(c)=>a(b(c));
    const encode = Array.from(args).reverse().reduce((acc, i)=>acc ? wrap(acc, i.encode) : i.encode, undefined);
    const decode = args.reduce((acc, i)=>acc ? wrap(acc, i.decode) : i.decode, undefined);
    return {
        encode,
        decode
    };
}
function alphabet(alphabet) {
    return {
        encode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('alphabet.encode input should be an array of numbers');
            return digits.map((i)=>{
                assertNumber(i);
                if (i < 0 || i >= alphabet.length) throw new Error(`Digit index outside alphabet: ${i} (alphabet: ${alphabet.length})`);
                return alphabet[i];
            });
        },
        decode: (input)=>{
            if (!Array.isArray(input) || input.length && typeof input[0] !== 'string') throw new Error('alphabet.decode input should be array of strings');
            return input.map((letter)=>{
                if (typeof letter !== 'string') throw new Error(`alphabet.decode: not string element=${letter}`);
                const index = alphabet.indexOf(letter);
                if (index === -1) throw new Error(`Unknown letter: "${letter}". Allowed: ${alphabet}`);
                return index;
            });
        }
    };
}
function join(separator = '') {
    if (typeof separator !== 'string') throw new Error('join separator should be string');
    return {
        encode: (from)=>{
            if (!Array.isArray(from) || from.length && typeof from[0] !== 'string') throw new Error('join.encode input should be array of strings');
            for (let i of from)if (typeof i !== 'string') throw new Error(`join.encode: non-string input=${i}`);
            return from.join(separator);
        },
        decode: (to)=>{
            if (typeof to !== 'string') throw new Error('join.decode input should be string');
            return to.split(separator);
        }
    };
}
function padding(bits, chr = '=') {
    assertNumber(bits);
    if (typeof chr !== 'string') throw new Error('padding chr should be string');
    return {
        encode (data) {
            if (!Array.isArray(data) || data.length && typeof data[0] !== 'string') throw new Error('padding.encode input should be array of strings');
            for (let i of data)if (typeof i !== 'string') throw new Error(`padding.encode: non-string input=${i}`);
            while(data.length * bits % 8)data.push(chr);
            return data;
        },
        decode (input) {
            if (!Array.isArray(input) || input.length && typeof input[0] !== 'string') throw new Error('padding.encode input should be array of strings');
            for (let i of input)if (typeof i !== 'string') throw new Error(`padding.decode: non-string input=${i}`);
            let end = input.length;
            if (end * bits % 8) throw new Error('Invalid padding: string should have whole number of bytes');
            for(; end > 0 && input[end - 1] === chr; end--){
                if (!((end - 1) * bits % 8)) throw new Error('Invalid padding: string has too much padding');
            }
            return input.slice(0, end);
        }
    };
}
function normalize(fn) {
    if (typeof fn !== 'function') throw new Error('normalize fn should be function');
    return {
        encode: (from)=>from,
        decode: (to)=>fn(to)
    };
}
function convertRadix(data, from, to) {
    if (from < 2) throw new Error(`convertRadix: wrong from=${from}, base cannot be less than 2`);
    if (to < 2) throw new Error(`convertRadix: wrong to=${to}, base cannot be less than 2`);
    if (!Array.isArray(data)) throw new Error('convertRadix: data should be array');
    if (!data.length) return [];
    let pos = 0;
    const res = [];
    const digits = Array.from(data);
    digits.forEach((d)=>{
        assertNumber(d);
        if (d < 0 || d >= from) throw new Error(`Wrong integer: ${d}`);
    });
    while(true){
        let carry = 0;
        let done = true;
        for(let i = pos; i < digits.length; i++){
            const digit = digits[i];
            const digitBase = from * carry + digit;
            if (!Number.isSafeInteger(digitBase) || from * carry / from !== carry || digitBase - digit !== from * carry) throw new Error('convertRadix: carry overflow');
            carry = digitBase % to;
            digits[i] = Math.floor(digitBase / to);
            if (!Number.isSafeInteger(digits[i]) || digits[i] * to + carry !== digitBase) throw new Error('convertRadix: carry overflow');
            if (!done) continue;
            else if (!digits[i]) pos = i;
            else done = false;
        }
        res.push(carry);
        if (done) break;
    }
    for(let i = 0; i < data.length - 1 && data[i] === 0; i++)res.push(0);
    return res.reverse();
}
const gcd = (a, b)=>!b ? a : gcd(b, a % b);
const radix2carry = (from, to)=>from + (to - gcd(from, to));
function convertRadix2(data, from, to, padding) {
    if (!Array.isArray(data)) throw new Error('convertRadix2: data should be array');
    if (from <= 0 || from > 32) throw new Error(`convertRadix2: wrong from=${from}`);
    if (to <= 0 || to > 32) throw new Error(`convertRadix2: wrong to=${to}`);
    if (radix2carry(from, to) > 32) throw new Error(`convertRadix2: carry overflow from=${from} to=${to} carryBits=${radix2carry(from, to)}`);
    let carry = 0;
    let pos = 0;
    const mask = 2 ** to - 1;
    const res = [];
    for (const n of data){
        assertNumber(n);
        if (n >= 2 ** from) throw new Error(`convertRadix2: invalid data word=${n} from=${from}`);
        carry = carry << from | n;
        if (pos + from > 32) throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from}`);
        pos += from;
        for(; pos >= to; pos -= to)res.push((carry >> pos - to & mask) >>> 0);
        carry &= 2 ** pos - 1;
    }
    carry = carry << to - pos & mask;
    if (!padding && pos >= from) throw new Error('Excess padding');
    if (!padding && carry) throw new Error(`Non-zero padding: ${carry}`);
    if (padding && pos > 0) res.push(carry >>> 0);
    return res;
}
function radix(num) {
    assertNumber(num);
    return {
        encode: (bytes)=>{
            if (!(bytes instanceof Uint8Array)) throw new Error('radix.encode input should be Uint8Array');
            return convertRadix(Array.from(bytes), 256, num);
        },
        decode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('radix.decode input should be array of strings');
            return Uint8Array.from(convertRadix(digits, num, 256));
        }
    };
}
function radix2(bits, revPadding = false) {
    assertNumber(bits);
    if (bits <= 0 || bits > 32) throw new Error('radix2: bits should be in (0..32]');
    if (radix2carry(8, bits) > 32 || radix2carry(bits, 8) > 32) throw new Error('radix2: carry overflow');
    return {
        encode: (bytes)=>{
            if (!(bytes instanceof Uint8Array)) throw new Error('radix2.encode input should be Uint8Array');
            return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
        },
        decode: (digits)=>{
            if (!Array.isArray(digits) || digits.length && typeof digits[0] !== 'number') throw new Error('radix2.decode input should be array of strings');
            return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
        }
    };
}
function unsafeWrapper(fn) {
    if (typeof fn !== 'function') throw new Error('unsafeWrapper fn should be function');
    return function(...args) {
        try {
            return fn.apply(null, args);
        } catch (e) {}
    };
}
function checksum(len, fn) {
    assertNumber(len);
    if (typeof fn !== 'function') throw new Error('checksum fn should be function');
    return {
        encode (data) {
            if (!(data instanceof Uint8Array)) throw new Error('checksum.encode: input should be Uint8Array');
            const checksum = fn(data).slice(0, len);
            const res = new Uint8Array(data.length + len);
            res.set(data);
            res.set(checksum, data.length);
            return res;
        },
        decode (data) {
            if (!(data instanceof Uint8Array)) throw new Error('checksum.decode: input should be Uint8Array');
            const payload = data.slice(0, -len);
            const newChecksum = fn(payload).slice(0, len);
            const oldChecksum = data.slice(-len);
            for(let i = 0; i < len; i++)if (newChecksum[i] !== oldChecksum[i]) throw new Error('Invalid checksum');
            return payload;
        }
    };
}
const utils = {
    alphabet,
    chain,
    checksum,
    radix,
    radix2,
    join,
    padding
};
const base16 = chain(radix2(4), alphabet('0123456789ABCDEF'), join(''));
const base32 = chain(radix2(5), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'), padding(5), join(''));
const base32hex = chain(radix2(5), alphabet('0123456789ABCDEFGHIJKLMNOPQRSTUV'), padding(5), join(''));
const base32crockford = chain(radix2(5), alphabet('0123456789ABCDEFGHJKMNPQRSTVWXYZ'), join(''), normalize((s)=>s.toUpperCase().replace(/O/g, '0').replace(/[IL]/g, '1')));
const base64 = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'), padding(6), join(''));
const base64url = chain(radix2(6), alphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'), padding(6), join(''));
const genBase58 = (abc)=>chain(radix(58), alphabet(abc), join(''));
const base58 = genBase58('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
const base58flickr = genBase58('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
const base58xrp = genBase58('rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz');
const XMR_BLOCK_LEN = [
    0,
    2,
    3,
    5,
    6,
    7,
    9,
    10,
    11
];
const base58xmr = {
    encode (data) {
        let res = '';
        for(let i = 0; i < data.length; i += 8){
            const block = data.subarray(i, i + 8);
            res += base58.encode(block).padStart(XMR_BLOCK_LEN[block.length], '1');
        }
        return res;
    },
    decode (str) {
        let res = [];
        for(let i = 0; i < str.length; i += 11){
            const slice = str.slice(i, i + 11);
            const blockLen = XMR_BLOCK_LEN.indexOf(slice.length);
            const block = base58.decode(slice);
            for(let j = 0; j < block.length - blockLen; j++){
                if (block[j] !== 0) throw new Error('base58xmr: wrong padding');
            }
            res = res.concat(Array.from(block.slice(block.length - blockLen)));
        }
        return Uint8Array.from(res);
    }
};
const base58check = (sha256)=>chain(checksum(4, (data)=>sha256(sha256(data))), base58);
const BECH_ALPHABET = chain(alphabet('qpzry9x8gf2tvdw0s3jn54khce6mua7l'), join(''));
const POLYMOD_GENERATORS = [
    0x3b6a57b2,
    0x26508e6d,
    0x1ea119fa,
    0x3d4233dd,
    0x2a1462b3
];
function bech32Polymod(pre) {
    const b = pre >> 25;
    let chk = (pre & 0x1ffffff) << 5;
    for(let i = 0; i < POLYMOD_GENERATORS.length; i++)if ((b >> i & 1) === 1) chk ^= POLYMOD_GENERATORS[i];
    return chk;
}
function bechChecksum(prefix, words, encodingConst = 1) {
    const len = prefix.length;
    let chk = 1;
    for(let i = 0; i < len; i++){
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126) throw new Error(`Invalid prefix (${prefix})`);
        chk = bech32Polymod(chk) ^ c >> 5;
    }
    chk = bech32Polymod(chk);
    for(let i = 0; i < len; i++)chk = bech32Polymod(chk) ^ prefix.charCodeAt(i) & 0x1f;
    for (let v of words)chk = bech32Polymod(chk) ^ v;
    for(let i = 0; i < 6; i++)chk = bech32Polymod(chk);
    chk ^= encodingConst;
    return BECH_ALPHABET.encode(convertRadix2([
        chk % 2 ** 30
    ], 30, 5, false));
}
function genBech32(encoding) {
    const ENCODING_CONST = encoding === 'bech32' ? 1 : 0x2bc830a3;
    const _words = radix2(5);
    const fromWords = _words.decode;
    const toWords = _words.encode;
    const fromWordsUnsafe = unsafeWrapper(fromWords);
    function encode(prefix, words, limit = 90) {
        if (typeof prefix !== 'string') throw new Error(`bech32.encode prefix should be string, not ${typeof prefix}`);
        if (!Array.isArray(words) || words.length && typeof words[0] !== 'number') throw new Error(`bech32.encode words should be array of numbers, not ${typeof words}`);
        const actualLength = prefix.length + 7 + words.length;
        if (limit !== false && actualLength > limit) throw new TypeError(`Length ${actualLength} exceeds limit ${limit}`);
        prefix = prefix.toLowerCase();
        return `${prefix}1${BECH_ALPHABET.encode(words)}${bechChecksum(prefix, words, ENCODING_CONST)}`;
    }
    function decode(str, limit = 90) {
        if (typeof str !== 'string') throw new Error(`bech32.decode input should be string, not ${typeof str}`);
        if (str.length < 8 || limit !== false && str.length > limit) throw new TypeError(`Wrong string length: ${str.length} (${str}). Expected (8..${limit})`);
        const lowered = str.toLowerCase();
        if (str !== lowered && str !== str.toUpperCase()) throw new Error(`String must be lowercase or uppercase`);
        str = lowered;
        const sepIndex = str.lastIndexOf('1');
        if (sepIndex === 0 || sepIndex === -1) throw new Error(`Letter "1" must be present between prefix and data only`);
        const prefix = str.slice(0, sepIndex);
        const _words = str.slice(sepIndex + 1);
        if (_words.length < 6) throw new Error('Data must be at least 6 characters long');
        const words = BECH_ALPHABET.decode(_words).slice(0, -6);
        const sum = bechChecksum(prefix, words, ENCODING_CONST);
        if (!_words.endsWith(sum)) throw new Error(`Invalid checksum in ${str}: expected "${sum}"`);
        return {
            prefix,
            words
        };
    }
    const decodeUnsafe = unsafeWrapper(decode);
    function decodeToBytes(str) {
        const { prefix, words } = decode(str, false);
        return {
            prefix,
            words,
            bytes: fromWords(words)
        };
    }
    return {
        encode,
        decode,
        decodeToBytes,
        decodeUnsafe,
        fromWords,
        fromWordsUnsafe,
        toWords
    };
}
const bech32 = genBech32('bech32');
const bech32m = genBech32('bech32m');
const utf8 = {
    encode: (data)=>new TextDecoder().decode(data),
    decode: (str)=>new TextEncoder().encode(str)
};
const hex = chain(radix2(4), alphabet('0123456789abcdef'), join(''), normalize((s)=>{
    if (typeof s !== 'string' || s.length % 2) throw new TypeError(`hex.decode: expected string, got ${typeof s} with length ${s.length}`);
    return s.toLowerCase();
}));
const CODERS = {
    utf8,
    hex,
    base16,
    base32,
    base64,
    base64url,
    base58,
    base58xmr
};
const coderTypeError = `Invalid encoding type. Available types: ${Object.keys(CODERS).join(', ')}`;
const bytesToString = (type, bytes)=>{
    if (typeof type !== 'string' || !CODERS.hasOwnProperty(type)) throw new TypeError(coderTypeError);
    if (!(bytes instanceof Uint8Array)) throw new TypeError('bytesToString() expects Uint8Array');
    return CODERS[type].encode(bytes);
};
const str = bytesToString;
const stringToBytes = (type, str)=>{
    if (!CODERS.hasOwnProperty(type)) throw new TypeError(coderTypeError);
    if (typeof str !== 'string') throw new TypeError('stringToBytes() expects string');
    return CODERS[type].decode(str);
};
const bytes = stringToBytes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kP7IV":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unsafe = exports.siv = exports.gcm = exports.cfb = exports.cbc = exports.ecb = exports.ctr = exports.expandKeyDecLE = exports.expandKeyLE = void 0;
// prettier-ignore
const utils_js_1 = require("2008965cb9c2430b");
const _polyval_js_1 = require("16eabe3b4792ec22");
const _assert_js_1 = require("bb4612fd79b5519f");
/*
AES (Advanced Encryption Standard) aka Rijndael block cipher.

Data is split into 128-bit blocks. Encrypted in 10/12/14 rounds (128/192/256 bits). In every round:
1. **S-box**, table substitution
2. **Shift rows**, cyclic shift left of all rows of data array
3. **Mix columns**, multiplying every column by fixed polynomial
4. **Add round key**, round_key xor i-th column of array

Resources:
- FIPS-197 https://csrc.nist.gov/files/pubs/fips/197/final/docs/fips-197.pdf
- Original proposal: https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/documents/aes-development/rijndael-ammended.pdf
*/ const BLOCK_SIZE = 16;
const BLOCK_SIZE32 = 4;
const EMPTY_BLOCK = new Uint8Array(BLOCK_SIZE);
const POLY = 0x11b; // 1 + x + x**3 + x**4 + x**8
// TODO: remove multiplication, binary ops only
function mul2(n) {
    return n << 1 ^ POLY & -(n >> 7);
}
function mul(a, b) {
    let res = 0;
    for(; b > 0; b >>= 1){
        // Montgomery ladder
        res ^= a & -(b & 1); // if (b&1) res ^=a (but const-time).
        a = mul2(a); // a = 2*a
    }
    return res;
}
// AES S-box is generated using finite field inversion,
// an affine transform, and xor of a constant 0x63.
const sbox = /* @__PURE__ */ (()=>{
    let t = new Uint8Array(256);
    for(let i = 0, x = 1; i < 256; i++, x ^= mul2(x))t[i] = x;
    const box = new Uint8Array(256);
    box[0] = 0x63; // first elm
    for(let i = 0; i < 255; i++){
        let x = t[255 - i];
        x |= x << 8;
        box[t[i]] = (x ^ x >> 4 ^ x >> 5 ^ x >> 6 ^ x >> 7 ^ 0x63) & 0xff;
    }
    return box;
})();
// Inverted S-box
const invSbox = /* @__PURE__ */ sbox.map((_, j)=>sbox.indexOf(j));
// Rotate u32 by 8
const rotr32_8 = (n)=>n << 24 | n >>> 8;
const rotl32_8 = (n)=>n << 8 | n >>> 24;
// T-table is optimization suggested in 5.2 of original proposal (missed from FIPS-197). Changes:
// - LE instead of BE
// - bigger tables: T0 and T1 are merged into T01 table and T2 & T3 into T23;
//   so index is u16, instead of u8. This speeds up things, unexpectedly
function genTtable(sbox, fn) {
    if (sbox.length !== 256) throw new Error('Wrong sbox length');
    const T0 = new Uint32Array(256).map((_, j)=>fn(sbox[j]));
    const T1 = T0.map(rotl32_8);
    const T2 = T1.map(rotl32_8);
    const T3 = T2.map(rotl32_8);
    const T01 = new Uint32Array(65536);
    const T23 = new Uint32Array(65536);
    const sbox2 = new Uint16Array(65536);
    for(let i = 0; i < 256; i++)for(let j = 0; j < 256; j++){
        const idx = i * 256 + j;
        T01[idx] = T0[i] ^ T1[j];
        T23[idx] = T2[i] ^ T3[j];
        sbox2[idx] = sbox[i] << 8 | sbox[j];
    }
    return {
        sbox,
        sbox2,
        T0,
        T1,
        T2,
        T3,
        T01,
        T23
    };
}
const tableEncoding = /* @__PURE__ */ genTtable(sbox, (s)=>mul(s, 3) << 24 | s << 16 | s << 8 | mul(s, 2));
const tableDecoding = /* @__PURE__ */ genTtable(invSbox, (s)=>mul(s, 11) << 24 | mul(s, 13) << 16 | mul(s, 9) << 8 | mul(s, 14));
const xPowers = /* @__PURE__ */ (()=>{
    const p = new Uint8Array(16);
    for(let i = 0, x = 1; i < 16; i++, x = mul2(x))p[i] = x;
    return p;
})();
function expandKeyLE(key) {
    (0, _assert_js_1.bytes)(key);
    const len = key.length;
    if (![
        16,
        24,
        32
    ].includes(len)) throw new Error(`aes: wrong key size: should be 16, 24 or 32, got: ${len}`);
    const { sbox2 } = tableEncoding;
    const k32 = (0, utils_js_1.u32)(key);
    const Nk = k32.length;
    const subByte = (n)=>applySbox(sbox2, n, n, n, n);
    const xk = new Uint32Array(len + 28); // expanded key
    xk.set(k32);
    // 4.3.1 Key expansion
    for(let i = Nk; i < xk.length; i++){
        let t = xk[i - 1];
        if (i % Nk === 0) t = subByte(rotr32_8(t)) ^ xPowers[i / Nk - 1];
        else if (Nk > 6 && i % Nk === 4) t = subByte(t);
        xk[i] = xk[i - Nk] ^ t;
    }
    return xk;
}
exports.expandKeyLE = expandKeyLE;
function expandKeyDecLE(key) {
    const encKey = expandKeyLE(key);
    const xk = encKey.slice();
    const Nk = encKey.length;
    const { sbox2 } = tableEncoding;
    const { T0, T1, T2, T3 } = tableDecoding;
    // Inverse key by chunks of 4 (rounds)
    for(let i = 0; i < Nk; i += 4)for(let j = 0; j < 4; j++)xk[i + j] = encKey[Nk - i - 4 + j];
    encKey.fill(0);
    // apply InvMixColumn except first & last round
    for(let i = 4; i < Nk - 4; i++){
        const x = xk[i];
        const w = applySbox(sbox2, x, x, x, x);
        xk[i] = T0[w & 0xff] ^ T1[w >>> 8 & 0xff] ^ T2[w >>> 16 & 0xff] ^ T3[w >>> 24];
    }
    return xk;
}
exports.expandKeyDecLE = expandKeyDecLE;
// Apply tables
function apply0123(T01, T23, s0, s1, s2, s3) {
    return T01[s0 << 8 & 0xff00 | s1 >>> 8 & 0xff] ^ T23[s2 >>> 8 & 0xff00 | s3 >>> 24 & 0xff];
}
function applySbox(sbox2, s0, s1, s2, s3) {
    return sbox2[s0 & 0xff | s1 & 0xff00] | sbox2[s2 >>> 16 & 0xff | s3 >>> 16 & 0xff00] << 16;
}
function encrypt(xk, s0, s1, s2, s3) {
    const { sbox2, T01, T23 } = tableEncoding;
    let k = 0;
    s0 ^= xk[k++], s1 ^= xk[k++], s2 ^= xk[k++], s3 ^= xk[k++];
    const rounds = xk.length / 4 - 2;
    for(let i = 0; i < rounds; i++){
        const t0 = xk[k++] ^ apply0123(T01, T23, s0, s1, s2, s3);
        const t1 = xk[k++] ^ apply0123(T01, T23, s1, s2, s3, s0);
        const t2 = xk[k++] ^ apply0123(T01, T23, s2, s3, s0, s1);
        const t3 = xk[k++] ^ apply0123(T01, T23, s3, s0, s1, s2);
        s0 = t0, s1 = t1, s2 = t2, s3 = t3;
    }
    // last round (without mixcolumns, so using SBOX2 table)
    const t0 = xk[k++] ^ applySbox(sbox2, s0, s1, s2, s3);
    const t1 = xk[k++] ^ applySbox(sbox2, s1, s2, s3, s0);
    const t2 = xk[k++] ^ applySbox(sbox2, s2, s3, s0, s1);
    const t3 = xk[k++] ^ applySbox(sbox2, s3, s0, s1, s2);
    return {
        s0: t0,
        s1: t1,
        s2: t2,
        s3: t3
    };
}
function decrypt(xk, s0, s1, s2, s3) {
    const { sbox2, T01, T23 } = tableDecoding;
    let k = 0;
    s0 ^= xk[k++], s1 ^= xk[k++], s2 ^= xk[k++], s3 ^= xk[k++];
    const rounds = xk.length / 4 - 2;
    for(let i = 0; i < rounds; i++){
        const t0 = xk[k++] ^ apply0123(T01, T23, s0, s3, s2, s1);
        const t1 = xk[k++] ^ apply0123(T01, T23, s1, s0, s3, s2);
        const t2 = xk[k++] ^ apply0123(T01, T23, s2, s1, s0, s3);
        const t3 = xk[k++] ^ apply0123(T01, T23, s3, s2, s1, s0);
        s0 = t0, s1 = t1, s2 = t2, s3 = t3;
    }
    // Last round
    const t0 = xk[k++] ^ applySbox(sbox2, s0, s3, s2, s1);
    const t1 = xk[k++] ^ applySbox(sbox2, s1, s0, s3, s2);
    const t2 = xk[k++] ^ applySbox(sbox2, s2, s1, s0, s3);
    const t3 = xk[k++] ^ applySbox(sbox2, s3, s2, s1, s0);
    return {
        s0: t0,
        s1: t1,
        s2: t2,
        s3: t3
    };
}
function getDst(len, dst) {
    if (!dst) return new Uint8Array(len);
    (0, _assert_js_1.bytes)(dst);
    if (dst.length < len) throw new Error(`aes: wrong destination length, expected at least ${len}, got: ${dst.length}`);
    return dst;
}
// TODO: investigate merging with ctr32
function ctrCounter(xk, nonce, src, dst) {
    (0, _assert_js_1.bytes)(nonce, BLOCK_SIZE);
    (0, _assert_js_1.bytes)(src);
    const srcLen = src.length;
    dst = getDst(srcLen, dst);
    const ctr = nonce;
    const c32 = (0, utils_js_1.u32)(ctr);
    // Fill block (empty, ctr=0)
    let { s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]);
    const src32 = (0, utils_js_1.u32)(src);
    const dst32 = (0, utils_js_1.u32)(dst);
    // process blocks
    for(let i = 0; i + 4 <= src32.length; i += 4){
        dst32[i + 0] = src32[i + 0] ^ s0;
        dst32[i + 1] = src32[i + 1] ^ s1;
        dst32[i + 2] = src32[i + 2] ^ s2;
        dst32[i + 3] = src32[i + 3] ^ s3;
        // Full 128 bit counter with wrap around
        let carry = 1;
        for(let i = ctr.length - 1; i >= 0; i--){
            carry = carry + (ctr[i] & 0xff) | 0;
            ctr[i] = carry & 0xff;
            carry >>>= 8;
        }
        ({ s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]));
    }
    // leftovers (less than block)
    // It's possible to handle > u32 fast, but is it worth it?
    const start = BLOCK_SIZE * Math.floor(src32.length / BLOCK_SIZE32);
    if (start < srcLen) {
        const b32 = new Uint32Array([
            s0,
            s1,
            s2,
            s3
        ]);
        const buf = (0, utils_js_1.u8)(b32);
        for(let i = start, pos = 0; i < srcLen; i++, pos++)dst[i] = src[i] ^ buf[pos];
    }
    return dst;
}
// AES CTR with overflowing 32 bit counter
// It's possible to do 32le significantly simpler (and probably faster) by using u32.
// But, we need both, and perf bottleneck is in ghash anyway.
function ctr32(xk, isLE, nonce, src, dst) {
    (0, _assert_js_1.bytes)(nonce, BLOCK_SIZE);
    (0, _assert_js_1.bytes)(src);
    dst = getDst(src.length, dst);
    const ctr = nonce; // write new value to nonce, so it can be re-used
    const c32 = (0, utils_js_1.u32)(ctr);
    const view = (0, utils_js_1.createView)(ctr);
    const src32 = (0, utils_js_1.u32)(src);
    const dst32 = (0, utils_js_1.u32)(dst);
    const ctrPos = isLE ? 0 : 12;
    const srcLen = src.length;
    // Fill block (empty, ctr=0)
    let ctrNum = view.getUint32(ctrPos, isLE); // read current counter value
    let { s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]);
    // process blocks
    for(let i = 0; i + 4 <= src32.length; i += 4){
        dst32[i + 0] = src32[i + 0] ^ s0;
        dst32[i + 1] = src32[i + 1] ^ s1;
        dst32[i + 2] = src32[i + 2] ^ s2;
        dst32[i + 3] = src32[i + 3] ^ s3;
        ctrNum = ctrNum + 1 >>> 0; // u32 wrap
        view.setUint32(ctrPos, ctrNum, isLE);
        ({ s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]));
    }
    // leftovers (less than a block)
    const start = BLOCK_SIZE * Math.floor(src32.length / BLOCK_SIZE32);
    if (start < srcLen) {
        const b32 = new Uint32Array([
            s0,
            s1,
            s2,
            s3
        ]);
        const buf = (0, utils_js_1.u8)(b32);
        for(let i = start, pos = 0; i < srcLen; i++, pos++)dst[i] = src[i] ^ buf[pos];
    }
    return dst;
}
/**
 * CTR: counter mode. Creates stream cipher.
 * Requires good IV. Parallelizable. OK, but no MAC.
 */ exports.ctr = (0, utils_js_1.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function ctr(key, nonce) {
    (0, _assert_js_1.bytes)(key);
    (0, _assert_js_1.bytes)(nonce, BLOCK_SIZE);
    function processCtr(buf, dst) {
        const xk = expandKeyLE(key);
        const n = nonce.slice();
        const out = ctrCounter(xk, n, buf, dst);
        xk.fill(0);
        n.fill(0);
        return out;
    }
    return {
        encrypt: (plaintext, dst)=>processCtr(plaintext, dst),
        decrypt: (ciphertext, dst)=>processCtr(ciphertext, dst)
    };
});
function validateBlockDecrypt(data) {
    (0, _assert_js_1.bytes)(data);
    if (data.length % BLOCK_SIZE !== 0) throw new Error(`aes/(cbc-ecb).decrypt ciphertext should consist of blocks with size ${BLOCK_SIZE}`);
}
function validateBlockEncrypt(plaintext, pcks5, dst) {
    let outLen = plaintext.length;
    const remaining = outLen % BLOCK_SIZE;
    if (!pcks5 && remaining !== 0) throw new Error('aec/(cbc-ecb): unpadded plaintext with disabled padding');
    const b = (0, utils_js_1.u32)(plaintext);
    if (pcks5) {
        let left = BLOCK_SIZE - remaining;
        if (!left) left = BLOCK_SIZE; // if no bytes left, create empty padding block
        outLen = outLen + left;
    }
    const out = getDst(outLen, dst);
    const o = (0, utils_js_1.u32)(out);
    return {
        b,
        o,
        out
    };
}
function validatePCKS(data, pcks5) {
    if (!pcks5) return data;
    const len = data.length;
    if (!len) throw new Error(`aes/pcks5: empty ciphertext not allowed`);
    const lastByte = data[len - 1];
    if (lastByte <= 0 || lastByte > 16) throw new Error(`aes/pcks5: wrong padding byte: ${lastByte}`);
    const out = data.subarray(0, -lastByte);
    for(let i = 0; i < lastByte; i++)if (data[len - i - 1] !== lastByte) throw new Error(`aes/pcks5: wrong padding`);
    return out;
}
function padPCKS(left) {
    const tmp = new Uint8Array(16);
    const tmp32 = (0, utils_js_1.u32)(tmp);
    tmp.set(left);
    const paddingByte = BLOCK_SIZE - left.length;
    for(let i = BLOCK_SIZE - paddingByte; i < BLOCK_SIZE; i++)tmp[i] = paddingByte;
    return tmp32;
}
/**
 * ECB: Electronic CodeBook. Simple deterministic replacement.
 * Dangerous: always map x to y. See [AES Penguin](https://words.filippo.io/the-ecb-penguin/).
 */ exports.ecb = (0, utils_js_1.wrapCipher)({
    blockSize: 16
}, function ecb(key, opts = {}) {
    (0, _assert_js_1.bytes)(key);
    const pcks5 = !opts.disablePadding;
    return {
        encrypt: (plaintext, dst)=>{
            (0, _assert_js_1.bytes)(plaintext);
            const { b, o, out: _out } = validateBlockEncrypt(plaintext, pcks5, dst);
            const xk = expandKeyLE(key);
            let i = 0;
            for(; i + 4 <= b.length;){
                const { s0, s1, s2, s3 } = encrypt(xk, b[i + 0], b[i + 1], b[i + 2], b[i + 3]);
                o[i++] = s0, o[i++] = s1, o[i++] = s2, o[i++] = s3;
            }
            if (pcks5) {
                const tmp32 = padPCKS(plaintext.subarray(i * 4));
                const { s0, s1, s2, s3 } = encrypt(xk, tmp32[0], tmp32[1], tmp32[2], tmp32[3]);
                o[i++] = s0, o[i++] = s1, o[i++] = s2, o[i++] = s3;
            }
            xk.fill(0);
            return _out;
        },
        decrypt: (ciphertext, dst)=>{
            validateBlockDecrypt(ciphertext);
            const xk = expandKeyDecLE(key);
            const out = getDst(ciphertext.length, dst);
            const b = (0, utils_js_1.u32)(ciphertext);
            const o = (0, utils_js_1.u32)(out);
            for(let i = 0; i + 4 <= b.length;){
                const { s0, s1, s2, s3 } = decrypt(xk, b[i + 0], b[i + 1], b[i + 2], b[i + 3]);
                o[i++] = s0, o[i++] = s1, o[i++] = s2, o[i++] = s3;
            }
            xk.fill(0);
            return validatePCKS(out, pcks5);
        }
    };
});
/**
 * CBC: Cipher-Block-Chaining. Key is previous round’s block.
 * Fragile: needs proper padding. Unauthenticated: needs MAC.
 */ exports.cbc = (0, utils_js_1.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function cbc(key, iv, opts = {}) {
    (0, _assert_js_1.bytes)(key);
    (0, _assert_js_1.bytes)(iv, 16);
    const pcks5 = !opts.disablePadding;
    return {
        encrypt: (plaintext, dst)=>{
            const xk = expandKeyLE(key);
            const { b, o, out: _out } = validateBlockEncrypt(plaintext, pcks5, dst);
            const n32 = (0, utils_js_1.u32)(iv);
            // prettier-ignore
            let s0 = n32[0], s1 = n32[1], s2 = n32[2], s3 = n32[3];
            let i = 0;
            for(; i + 4 <= b.length;){
                s0 ^= b[i + 0], s1 ^= b[i + 1], s2 ^= b[i + 2], s3 ^= b[i + 3];
                ({ s0, s1, s2, s3 } = encrypt(xk, s0, s1, s2, s3));
                o[i++] = s0, o[i++] = s1, o[i++] = s2, o[i++] = s3;
            }
            if (pcks5) {
                const tmp32 = padPCKS(plaintext.subarray(i * 4));
                s0 ^= tmp32[0], s1 ^= tmp32[1], s2 ^= tmp32[2], s3 ^= tmp32[3];
                ({ s0, s1, s2, s3 } = encrypt(xk, s0, s1, s2, s3));
                o[i++] = s0, o[i++] = s1, o[i++] = s2, o[i++] = s3;
            }
            xk.fill(0);
            return _out;
        },
        decrypt: (ciphertext, dst)=>{
            validateBlockDecrypt(ciphertext);
            const xk = expandKeyDecLE(key);
            const n32 = (0, utils_js_1.u32)(iv);
            const out = getDst(ciphertext.length, dst);
            const b = (0, utils_js_1.u32)(ciphertext);
            const o = (0, utils_js_1.u32)(out);
            // prettier-ignore
            let s0 = n32[0], s1 = n32[1], s2 = n32[2], s3 = n32[3];
            for(let i = 0; i + 4 <= b.length;){
                // prettier-ignore
                const ps0 = s0, ps1 = s1, ps2 = s2, ps3 = s3;
                s0 = b[i + 0], s1 = b[i + 1], s2 = b[i + 2], s3 = b[i + 3];
                const { s0: o0, s1: o1, s2: o2, s3: o3 } = decrypt(xk, s0, s1, s2, s3);
                o[i++] = o0 ^ ps0, o[i++] = o1 ^ ps1, o[i++] = o2 ^ ps2, o[i++] = o3 ^ ps3;
            }
            xk.fill(0);
            return validatePCKS(out, pcks5);
        }
    };
});
/**
 * CFB: Cipher Feedback Mode. The input for the block cipher is the previous cipher output.
 * Unauthenticated: needs MAC.
 */ exports.cfb = (0, utils_js_1.wrapCipher)({
    blockSize: 16,
    nonceLength: 16
}, function cfb(key, iv) {
    (0, _assert_js_1.bytes)(key);
    (0, _assert_js_1.bytes)(iv, 16);
    function processCfb(src, isEncrypt, dst) {
        const xk = expandKeyLE(key);
        const srcLen = src.length;
        dst = getDst(srcLen, dst);
        const src32 = (0, utils_js_1.u32)(src);
        const dst32 = (0, utils_js_1.u32)(dst);
        const next32 = isEncrypt ? dst32 : src32;
        const n32 = (0, utils_js_1.u32)(iv);
        // prettier-ignore
        let s0 = n32[0], s1 = n32[1], s2 = n32[2], s3 = n32[3];
        for(let i = 0; i + 4 <= src32.length;){
            const { s0: e0, s1: e1, s2: e2, s3: e3 } = encrypt(xk, s0, s1, s2, s3);
            dst32[i + 0] = src32[i + 0] ^ e0;
            dst32[i + 1] = src32[i + 1] ^ e1;
            dst32[i + 2] = src32[i + 2] ^ e2;
            dst32[i + 3] = src32[i + 3] ^ e3;
            s0 = next32[i++], s1 = next32[i++], s2 = next32[i++], s3 = next32[i++];
        }
        // leftovers (less than block)
        const start = BLOCK_SIZE * Math.floor(src32.length / BLOCK_SIZE32);
        if (start < srcLen) {
            ({ s0, s1, s2, s3 } = encrypt(xk, s0, s1, s2, s3));
            const buf = (0, utils_js_1.u8)(new Uint32Array([
                s0,
                s1,
                s2,
                s3
            ]));
            for(let i = start, pos = 0; i < srcLen; i++, pos++)dst[i] = src[i] ^ buf[pos];
            buf.fill(0);
        }
        xk.fill(0);
        return dst;
    }
    return {
        encrypt: (plaintext, dst)=>processCfb(plaintext, true, dst),
        decrypt: (ciphertext, dst)=>processCfb(ciphertext, false, dst)
    };
});
// TODO: merge with chacha, however gcm has bitLen while chacha has byteLen
function computeTag(fn, isLE, key, data, AAD) {
    const h = fn.create(key, data.length + (AAD?.length || 0));
    if (AAD) h.update(AAD);
    h.update(data);
    const num = new Uint8Array(16);
    const view = (0, utils_js_1.createView)(num);
    if (AAD) (0, utils_js_1.setBigUint64)(view, 0, BigInt(AAD.length * 8), isLE);
    (0, utils_js_1.setBigUint64)(view, 8, BigInt(data.length * 8), isLE);
    h.update(num);
    return h.digest();
}
/**
 * GCM: Galois/Counter Mode.
 * Good, modern version of CTR, parallel, with MAC.
 * Be careful: MACs can be forged.
 */ exports.gcm = (0, utils_js_1.wrapCipher)({
    blockSize: 16,
    nonceLength: 12,
    tagLength: 16
}, function gcm(key, nonce, AAD) {
    (0, _assert_js_1.bytes)(nonce);
    // Nonce can be pretty much anything (even 1 byte). But smaller nonces less secure.
    if (nonce.length === 0) throw new Error('aes/gcm: empty nonce');
    const tagLength = 16;
    function _computeTag(authKey, tagMask, data) {
        const tag = computeTag(_polyval_js_1.ghash, false, authKey, data, AAD);
        for(let i = 0; i < tagMask.length; i++)tag[i] ^= tagMask[i];
        return tag;
    }
    function deriveKeys() {
        const xk = expandKeyLE(key);
        const authKey = EMPTY_BLOCK.slice();
        const counter = EMPTY_BLOCK.slice();
        ctr32(xk, false, counter, counter, authKey);
        if (nonce.length === 12) counter.set(nonce);
        else {
            // Spec (NIST 800-38d) supports variable size nonce.
            // Not supported for now, but can be useful.
            const nonceLen = EMPTY_BLOCK.slice();
            const view = (0, utils_js_1.createView)(nonceLen);
            (0, utils_js_1.setBigUint64)(view, 8, BigInt(nonce.length * 8), false);
            // ghash(nonce || u64be(0) || u64be(nonceLen*8))
            _polyval_js_1.ghash.create(authKey).update(nonce).update(nonceLen).digestInto(counter);
        }
        const tagMask = ctr32(xk, false, counter, EMPTY_BLOCK);
        return {
            xk,
            authKey,
            counter,
            tagMask
        };
    }
    return {
        encrypt: (plaintext)=>{
            (0, _assert_js_1.bytes)(plaintext);
            const { xk, authKey, counter, tagMask } = deriveKeys();
            const out = new Uint8Array(plaintext.length + tagLength);
            ctr32(xk, false, counter, plaintext, out);
            const tag = _computeTag(authKey, tagMask, out.subarray(0, out.length - tagLength));
            out.set(tag, plaintext.length);
            xk.fill(0);
            return out;
        },
        decrypt: (ciphertext)=>{
            (0, _assert_js_1.bytes)(ciphertext);
            if (ciphertext.length < tagLength) throw new Error(`aes/gcm: ciphertext less than tagLen (${tagLength})`);
            const { xk, authKey, counter, tagMask } = deriveKeys();
            const data = ciphertext.subarray(0, -tagLength);
            const passedTag = ciphertext.subarray(-tagLength);
            const tag = _computeTag(authKey, tagMask, data);
            if (!(0, utils_js_1.equalBytes)(tag, passedTag)) throw new Error('aes/gcm: invalid ghash tag');
            const out = ctr32(xk, false, counter, data);
            authKey.fill(0);
            tagMask.fill(0);
            xk.fill(0);
            return out;
        }
    };
});
const limit = (name, min, max)=>(value)=>{
        if (!Number.isSafeInteger(value) || min > value || value > max) throw new Error(`${name}: invalid value=${value}, must be [${min}..${max}]`);
    };
/**
 * AES-GCM-SIV: classic AES-GCM with nonce-misuse resistance.
 * Guarantees that, when a nonce is repeated, the only security loss is that identical
 * plaintexts will produce identical ciphertexts.
 * RFC 8452, https://datatracker.ietf.org/doc/html/rfc8452
 */ exports.siv = (0, utils_js_1.wrapCipher)({
    blockSize: 16,
    nonceLength: 12,
    tagLength: 16
}, function siv(key, nonce, AAD) {
    const tagLength = 16;
    // From RFC 8452: Section 6
    const AAD_LIMIT = limit('AAD', 0, 2 ** 36);
    const PLAIN_LIMIT = limit('plaintext', 0, 2 ** 36);
    const NONCE_LIMIT = limit('nonce', 12, 12);
    const CIPHER_LIMIT = limit('ciphertext', 16, 2 ** 36 + 16);
    (0, _assert_js_1.bytes)(nonce);
    NONCE_LIMIT(nonce.length);
    if (AAD) {
        (0, _assert_js_1.bytes)(AAD);
        AAD_LIMIT(AAD.length);
    }
    function deriveKeys() {
        const len = key.length;
        if (len !== 16 && len !== 24 && len !== 32) throw new Error(`key length must be 16, 24 or 32 bytes, got: ${len} bytes`);
        const xk = expandKeyLE(key);
        const encKey = new Uint8Array(len);
        const authKey = new Uint8Array(16);
        const n32 = (0, utils_js_1.u32)(nonce);
        // prettier-ignore
        let s0 = 0, s1 = n32[0], s2 = n32[1], s3 = n32[2];
        let counter = 0;
        for (const derivedKey of [
            authKey,
            encKey
        ].map(utils_js_1.u32)){
            const d32 = (0, utils_js_1.u32)(derivedKey);
            for(let i = 0; i < d32.length; i += 2){
                // aes(u32le(0) || nonce)[:8] || aes(u32le(1) || nonce)[:8] ...
                const { s0: o0, s1: o1 } = encrypt(xk, s0, s1, s2, s3);
                d32[i + 0] = o0;
                d32[i + 1] = o1;
                s0 = ++counter; // increment counter inside state
            }
        }
        xk.fill(0);
        return {
            authKey,
            encKey: expandKeyLE(encKey)
        };
    }
    function _computeTag(encKey, authKey, data) {
        const tag = computeTag(_polyval_js_1.polyval, true, authKey, data, AAD);
        // Compute the expected tag by XORing S_s and the nonce, clearing the
        // most significant bit of the last byte and encrypting with the
        // message-encryption key.
        for(let i = 0; i < 12; i++)tag[i] ^= nonce[i];
        tag[15] &= 0x7f; // Clear the highest bit
        // encrypt tag as block
        const t32 = (0, utils_js_1.u32)(tag);
        // prettier-ignore
        let s0 = t32[0], s1 = t32[1], s2 = t32[2], s3 = t32[3];
        ({ s0, s1, s2, s3 } = encrypt(encKey, s0, s1, s2, s3));
        t32[0] = s0, t32[1] = s1, t32[2] = s2, t32[3] = s3;
        return tag;
    }
    // actual decrypt/encrypt of message.
    function processSiv(encKey, tag, input) {
        let block = tag.slice();
        block[15] |= 0x80; // Force highest bit
        return ctr32(encKey, true, block, input);
    }
    return {
        encrypt: (plaintext)=>{
            (0, _assert_js_1.bytes)(plaintext);
            PLAIN_LIMIT(plaintext.length);
            const { encKey, authKey } = deriveKeys();
            const tag = _computeTag(encKey, authKey, plaintext);
            const out = new Uint8Array(plaintext.length + tagLength);
            out.set(tag, plaintext.length);
            out.set(processSiv(encKey, tag, plaintext));
            encKey.fill(0);
            authKey.fill(0);
            return out;
        },
        decrypt: (ciphertext)=>{
            (0, _assert_js_1.bytes)(ciphertext);
            CIPHER_LIMIT(ciphertext.length);
            const tag = ciphertext.subarray(-tagLength);
            const { encKey, authKey } = deriveKeys();
            const plaintext = processSiv(encKey, tag, ciphertext.subarray(0, -tagLength));
            const expectedTag = _computeTag(encKey, authKey, plaintext);
            encKey.fill(0);
            authKey.fill(0);
            if (!(0, utils_js_1.equalBytes)(tag, expectedTag)) throw new Error('invalid polyval tag');
            return plaintext;
        }
    };
});
function isBytes32(a) {
    return a != null && typeof a === 'object' && (a instanceof Uint32Array || a.constructor.name === 'Uint32Array');
}
function encryptBlock(xk, block) {
    (0, _assert_js_1.bytes)(block, 16);
    if (!isBytes32(xk)) throw new Error('_encryptBlock accepts result of expandKeyLE');
    const b32 = (0, utils_js_1.u32)(block);
    let { s0, s1, s2, s3 } = encrypt(xk, b32[0], b32[1], b32[2], b32[3]);
    b32[0] = s0, b32[1] = s1, b32[2] = s2, b32[3] = s3;
    return block;
}
function decryptBlock(xk, block) {
    (0, _assert_js_1.bytes)(block, 16);
    if (!isBytes32(xk)) throw new Error('_decryptBlock accepts result of expandKeyLE');
    const b32 = (0, utils_js_1.u32)(block);
    let { s0, s1, s2, s3 } = decrypt(xk, b32[0], b32[1], b32[2], b32[3]);
    b32[0] = s0, b32[1] = s1, b32[2] = s2, b32[3] = s3;
    return block;
}
// Highly unsafe private functions for implementing new modes or ciphers based on AES
// Can change at any time, no API guarantees
exports.unsafe = {
    expandKeyLE,
    expandKeyDecLE,
    encrypt,
    decrypt,
    encryptBlock,
    decryptBlock,
    ctrCounter,
    ctr32
};

},{"2008965cb9c2430b":"5vA16","16eabe3b4792ec22":"euFUu","bb4612fd79b5519f":"fsAQB"}],"5vA16":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.u64Lengths = exports.setBigUint64 = exports.wrapCipher = exports.Hash = exports.equalBytes = exports.checkOpts = exports.concatBytes = exports.toBytes = exports.bytesToUtf8 = exports.utf8ToBytes = exports.asyncLoop = exports.nextTick = exports.numberToBytesBE = exports.bytesToNumberBE = exports.hexToNumber = exports.hexToBytes = exports.bytesToHex = exports.isLE = exports.createView = exports.u32 = exports.u16 = exports.u8 = void 0;
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */ const _assert_js_1 = require("357be8548bd6f2fb");
// Cast array to different type
const u8 = (arr)=>new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
exports.u8 = u8;
const u16 = (arr)=>new Uint16Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 2));
exports.u16 = u16;
const u32 = (arr)=>new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
exports.u32 = u32;
// Cast array to view
const createView = (arr)=>new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
exports.createView = createView;
// big-endian hardware is rare. Just in case someone still decides to run ciphers:
// early-throw an error because we don't support BE yet.
exports.isLE = new Uint8Array(new Uint32Array([
    0x11223344
]).buffer)[0] === 0x44;
if (!exports.isLE) throw new Error('Non little-endian hardware is not supported');
// Array where index 0xf0 (240) is mapped to string 'f0'
const hexes = /* @__PURE__ */ Array.from({
    length: 256
}, (_, i)=>i.toString(16).padStart(2, '0'));
/**
 * @example bytesToHex(Uint8Array.from([0xca, 0xfe, 0x01, 0x23])) // 'cafe0123'
 */ function bytesToHex(bytes) {
    (0, _assert_js_1.bytes)(bytes);
    // pre-caching improves the speed 6x
    let hex = '';
    for(let i = 0; i < bytes.length; i++)hex += hexes[bytes[i]];
    return hex;
}
exports.bytesToHex = bytesToHex;
// We use optimized technique to convert hex string to byte array
const asciis = {
    _0: 48,
    _9: 57,
    _A: 65,
    _F: 70,
    _a: 97,
    _f: 102
};
function asciiToBase16(char) {
    if (char >= asciis._0 && char <= asciis._9) return char - asciis._0;
    if (char >= asciis._A && char <= asciis._F) return char - (asciis._A - 10);
    if (char >= asciis._a && char <= asciis._f) return char - (asciis._a - 10);
    return;
}
/**
 * @example hexToBytes('cafe0123') // Uint8Array.from([0xca, 0xfe, 0x01, 0x23])
 */ function hexToBytes(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2) throw new Error('padded hex string expected, got unpadded hex of length ' + hl);
    const array = new Uint8Array(al);
    for(let ai = 0, hi = 0; ai < al; ai++, hi += 2){
        const n1 = asciiToBase16(hex.charCodeAt(hi));
        const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
        if (n1 === undefined || n2 === undefined) {
            const char = hex[hi] + hex[hi + 1];
            throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
        }
        array[ai] = n1 * 16 + n2;
    }
    return array;
}
exports.hexToBytes = hexToBytes;
function hexToNumber(hex) {
    if (typeof hex !== 'string') throw new Error('hex string expected, got ' + typeof hex);
    // Big Endian
    return BigInt(hex === '' ? '0' : `0x${hex}`);
}
exports.hexToNumber = hexToNumber;
// BE: Big Endian, LE: Little Endian
function bytesToNumberBE(bytes) {
    return hexToNumber(bytesToHex(bytes));
}
exports.bytesToNumberBE = bytesToNumberBE;
function numberToBytesBE(n, len) {
    return hexToBytes(n.toString(16).padStart(len * 2, '0'));
}
exports.numberToBytesBE = numberToBytesBE;
// There is no setImmediate in browser and setTimeout is slow.
// call of async fn will return Promise, which will be fullfiled only on
// next scheduler queue processing step and this is exactly what we need.
const nextTick = async ()=>{};
exports.nextTick = nextTick;
// Returns control to thread each 'tick' ms to avoid blocking
async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for(let i = 0; i < iters; i++){
        cb(i);
        // Date.now() is not monotonic, so in case if clock goes backwards we return return control too
        const diff = Date.now() - ts;
        if (diff >= 0 && diff < tick) continue;
        await (0, exports.nextTick)();
        ts += diff;
    }
}
exports.asyncLoop = asyncLoop;
/**
 * @example utf8ToBytes('abc') // new Uint8Array([97, 98, 99])
 */ function utf8ToBytes(str) {
    if (typeof str !== 'string') throw new Error(`string expected, got ${typeof str}`);
    return new Uint8Array(new TextEncoder().encode(str)); // https://bugzil.la/1681809
}
exports.utf8ToBytes = utf8ToBytes;
/**
 * @example bytesToUtf8(new Uint8Array([97, 98, 99])) // 'abc'
 */ function bytesToUtf8(bytes) {
    return new TextDecoder().decode(bytes);
}
exports.bytesToUtf8 = bytesToUtf8;
/**
 * Normalizes (non-hex) string or Uint8Array to Uint8Array.
 * Warning: when Uint8Array is passed, it would NOT get copied.
 * Keep in mind for future mutable operations.
 */ function toBytes(data) {
    if (typeof data === 'string') data = utf8ToBytes(data);
    else if ((0, _assert_js_1.isBytes)(data)) data = data.slice();
    else throw new Error(`Uint8Array expected, got ${typeof data}`);
    return data;
}
exports.toBytes = toBytes;
/**
 * Copies several Uint8Arrays into one.
 */ function concatBytes(...arrays) {
    let sum = 0;
    for(let i = 0; i < arrays.length; i++){
        const a = arrays[i];
        (0, _assert_js_1.bytes)(a);
        sum += a.length;
    }
    const res = new Uint8Array(sum);
    for(let i = 0, pad = 0; i < arrays.length; i++){
        const a = arrays[i];
        res.set(a, pad);
        pad += a.length;
    }
    return res;
}
exports.concatBytes = concatBytes;
function checkOpts(defaults, opts) {
    if (opts == null || typeof opts !== 'object') throw new Error('options must be defined');
    const merged = Object.assign(defaults, opts);
    return merged;
}
exports.checkOpts = checkOpts;
// Compares 2 u8a-s in kinda constant time
function equalBytes(a, b) {
    if (a.length !== b.length) return false;
    let diff = 0;
    for(let i = 0; i < a.length; i++)diff |= a[i] ^ b[i];
    return diff === 0;
}
exports.equalBytes = equalBytes;
// For runtime check if class implements interface
class Hash {
}
exports.Hash = Hash;
/**
 * @__NO_SIDE_EFFECTS__
 */ const wrapCipher = (params, c)=>{
    Object.assign(c, params);
    return c;
};
exports.wrapCipher = wrapCipher;
// Polyfill for Safari 14
function setBigUint64(view, byteOffset, value, isLE) {
    if (typeof view.setBigUint64 === 'function') return view.setBigUint64(byteOffset, value, isLE);
    const _32n = BigInt(32);
    const _u32_max = BigInt(0xffffffff);
    const wh = Number(value >> _32n & _u32_max);
    const wl = Number(value & _u32_max);
    const h = isLE ? 4 : 0;
    const l = isLE ? 0 : 4;
    view.setUint32(byteOffset + h, wh, isLE);
    view.setUint32(byteOffset + l, wl, isLE);
}
exports.setBigUint64 = setBigUint64;
function u64Lengths(ciphertext, AAD) {
    const num = new Uint8Array(16);
    const view = (0, exports.createView)(num);
    setBigUint64(view, 0, BigInt(AAD ? AAD.length : 0), true);
    setBigUint64(view, 8, BigInt(ciphertext.length), true);
    return num;
}
exports.u64Lengths = u64Lengths;

},{"357be8548bd6f2fb":"fsAQB"}],"fsAQB":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.output = exports.exists = exports.hash = exports.bytes = exports.bool = exports.number = exports.isBytes = void 0;
function number(n) {
    if (!Number.isSafeInteger(n) || n < 0) throw new Error(`positive integer expected, not ${n}`);
}
exports.number = number;
function bool(b) {
    if (typeof b !== 'boolean') throw new Error(`boolean expected, not ${b}`);
}
exports.bool = bool;
function isBytes(a) {
    return a instanceof Uint8Array || a != null && typeof a === 'object' && a.constructor.name === 'Uint8Array';
}
exports.isBytes = isBytes;
function bytes(b, ...lengths) {
    if (!isBytes(b)) throw new Error('Uint8Array expected');
    if (lengths.length > 0 && !lengths.includes(b.length)) throw new Error(`Uint8Array expected of length ${lengths}, not of length=${b.length}`);
}
exports.bytes = bytes;
function hash(hash) {
    if (typeof hash !== 'function' || typeof hash.create !== 'function') throw new Error('hash must be wrapped by utils.wrapConstructor');
    number(hash.outputLen);
    number(hash.blockLen);
}
exports.hash = hash;
function exists(instance, checkFinished = true) {
    if (instance.destroyed) throw new Error('Hash instance has been destroyed');
    if (checkFinished && instance.finished) throw new Error('Hash#digest() has already been called');
}
exports.exists = exists;
function output(out, instance) {
    bytes(out);
    const min = instance.outputLen;
    if (out.length < min) throw new Error(`digestInto() expects output buffer of length at least ${min}`);
}
exports.output = output;
const assert = {
    number,
    bool,
    bytes,
    hash,
    exists,
    output
};
exports.default = assert;

},{}],"euFUu":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.polyval = exports.ghash = exports._toGHASHKey = void 0;
const utils_js_1 = require("2aa1599dd9180bdc");
const _assert_js_1 = require("73a79c40b33f1f5f");
// GHash from AES-GCM and its little-endian "mirror image" Polyval from AES-SIV.
// Implemented in terms of GHash with conversion function for keys
// GCM GHASH from NIST SP800-38d, SIV from RFC 8452.
// https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf
// GHASH   modulo: x^128 + x^7   + x^2   + x     + 1
// POLYVAL modulo: x^128 + x^127 + x^126 + x^121 + 1
const BLOCK_SIZE = 16;
// TODO: rewrite
// temporary padding buffer
const ZEROS16 = /* @__PURE__ */ new Uint8Array(16);
const ZEROS32 = (0, utils_js_1.u32)(ZEROS16);
const POLY = 0xe1; // v = 2*v % POLY
// v = 2*v % POLY
// NOTE: because x + x = 0 (add/sub is same), mul2(x) != x+x
// We can multiply any number using montgomery ladder and this function (works as double, add is simple xor)
const mul2 = (s0, s1, s2, s3)=>{
    const hiBit = s3 & 1;
    return {
        s3: s2 << 31 | s3 >>> 1,
        s2: s1 << 31 | s2 >>> 1,
        s1: s0 << 31 | s1 >>> 1,
        s0: s0 >>> 1 ^ POLY << 24 & -(hiBit & 1)
    };
};
const swapLE = (n)=>(n >>> 0 & 0xff) << 24 | (n >>> 8 & 0xff) << 16 | (n >>> 16 & 0xff) << 8 | n >>> 24 & 0xff | 0;
/**
 * `mulX_POLYVAL(ByteReverse(H))` from spec
 * @param k mutated in place
 */ function _toGHASHKey(k) {
    k.reverse();
    const hiBit = k[15] & 1;
    // k >>= 1
    let carry = 0;
    for(let i = 0; i < k.length; i++){
        const t = k[i];
        k[i] = t >>> 1 | carry;
        carry = (t & 1) << 7;
    }
    k[0] ^= -hiBit & 0xe1; // if (hiBit) n ^= 0xe1000000000000000000000000000000;
    return k;
}
exports._toGHASHKey = _toGHASHKey;
const estimateWindow = (bytes)=>{
    if (bytes > 65536) return 8;
    if (bytes > 1024) return 4;
    return 2;
};
class GHASH {
    // We select bits per window adaptively based on expectedLength
    constructor(key, expectedLength){
        this.blockLen = BLOCK_SIZE;
        this.outputLen = BLOCK_SIZE;
        this.s0 = 0;
        this.s1 = 0;
        this.s2 = 0;
        this.s3 = 0;
        this.finished = false;
        key = (0, utils_js_1.toBytes)(key);
        (0, _assert_js_1.bytes)(key, 16);
        const kView = (0, utils_js_1.createView)(key);
        let k0 = kView.getUint32(0, false);
        let k1 = kView.getUint32(4, false);
        let k2 = kView.getUint32(8, false);
        let k3 = kView.getUint32(12, false);
        // generate table of doubled keys (half of montgomery ladder)
        const doubles = [];
        for(let i = 0; i < 128; i++){
            doubles.push({
                s0: swapLE(k0),
                s1: swapLE(k1),
                s2: swapLE(k2),
                s3: swapLE(k3)
            });
            ({ s0: k0, s1: k1, s2: k2, s3: k3 } = mul2(k0, k1, k2, k3));
        }
        const W = estimateWindow(expectedLength || 1024);
        if (![
            1,
            2,
            4,
            8
        ].includes(W)) throw new Error(`ghash: wrong window size=${W}, should be 2, 4 or 8`);
        this.W = W;
        const bits = 128; // always 128 bits;
        const windows = bits / W;
        const windowSize = this.windowSize = 2 ** W;
        const items = [];
        // Create precompute table for window of W bits
        for(let w = 0; w < windows; w++)// truth table: 00, 01, 10, 11
        for(let byte = 0; byte < windowSize; byte++){
            // prettier-ignore
            let s0 = 0, s1 = 0, s2 = 0, s3 = 0;
            for(let j = 0; j < W; j++){
                const bit = byte >>> W - j - 1 & 1;
                if (!bit) continue;
                const { s0: d0, s1: d1, s2: d2, s3: d3 } = doubles[W * w + j];
                s0 ^= d0, s1 ^= d1, s2 ^= d2, s3 ^= d3;
            }
            items.push({
                s0,
                s1,
                s2,
                s3
            });
        }
        this.t = items;
    }
    _updateBlock(s0, s1, s2, s3) {
        s0 ^= this.s0, s1 ^= this.s1, s2 ^= this.s2, s3 ^= this.s3;
        const { W, t, windowSize } = this;
        // prettier-ignore
        let o0 = 0, o1 = 0, o2 = 0, o3 = 0;
        const mask = (1 << W) - 1; // 2**W will kill performance.
        let w = 0;
        for (const num of [
            s0,
            s1,
            s2,
            s3
        ])for(let bytePos = 0; bytePos < 4; bytePos++){
            const byte = num >>> 8 * bytePos & 0xff;
            for(let bitPos = 8 / W - 1; bitPos >= 0; bitPos--){
                const bit = byte >>> W * bitPos & mask;
                const { s0: e0, s1: e1, s2: e2, s3: e3 } = t[w * windowSize + bit];
                o0 ^= e0, o1 ^= e1, o2 ^= e2, o3 ^= e3;
                w += 1;
            }
        }
        this.s0 = o0;
        this.s1 = o1;
        this.s2 = o2;
        this.s3 = o3;
    }
    update(data) {
        data = (0, utils_js_1.toBytes)(data);
        (0, _assert_js_1.exists)(this);
        const b32 = (0, utils_js_1.u32)(data);
        const blocks = Math.floor(data.length / BLOCK_SIZE);
        const left = data.length % BLOCK_SIZE;
        for(let i = 0; i < blocks; i++)this._updateBlock(b32[i * 4 + 0], b32[i * 4 + 1], b32[i * 4 + 2], b32[i * 4 + 3]);
        if (left) {
            ZEROS16.set(data.subarray(blocks * BLOCK_SIZE));
            this._updateBlock(ZEROS32[0], ZEROS32[1], ZEROS32[2], ZEROS32[3]);
            ZEROS32.fill(0); // clean tmp buffer
        }
        return this;
    }
    destroy() {
        const { t } = this;
        // clean precompute table
        for (const elm of t)elm.s0 = 0, elm.s1 = 0, elm.s2 = 0, elm.s3 = 0;
    }
    digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        const { s0, s1, s2, s3 } = this;
        const o32 = (0, utils_js_1.u32)(out);
        o32[0] = s0;
        o32[1] = s1;
        o32[2] = s2;
        o32[3] = s3;
        return out;
    }
    digest() {
        const res = new Uint8Array(BLOCK_SIZE);
        this.digestInto(res);
        this.destroy();
        return res;
    }
}
class Polyval extends GHASH {
    constructor(key, expectedLength){
        key = (0, utils_js_1.toBytes)(key);
        const ghKey = _toGHASHKey(key.slice());
        super(ghKey, expectedLength);
        ghKey.fill(0);
    }
    update(data) {
        data = (0, utils_js_1.toBytes)(data);
        (0, _assert_js_1.exists)(this);
        const b32 = (0, utils_js_1.u32)(data);
        const left = data.length % BLOCK_SIZE;
        const blocks = Math.floor(data.length / BLOCK_SIZE);
        for(let i = 0; i < blocks; i++)this._updateBlock(swapLE(b32[i * 4 + 3]), swapLE(b32[i * 4 + 2]), swapLE(b32[i * 4 + 1]), swapLE(b32[i * 4 + 0]));
        if (left) {
            ZEROS16.set(data.subarray(blocks * BLOCK_SIZE));
            this._updateBlock(swapLE(ZEROS32[3]), swapLE(ZEROS32[2]), swapLE(ZEROS32[1]), swapLE(ZEROS32[0]));
            ZEROS32.fill(0); // clean tmp buffer
        }
        return this;
    }
    digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        // tmp ugly hack
        const { s0, s1, s2, s3 } = this;
        const o32 = (0, utils_js_1.u32)(out);
        o32[0] = s0;
        o32[1] = s1;
        o32[2] = s2;
        o32[3] = s3;
        return out.reverse();
    }
}
function wrapConstructorWithKey(hashCons) {
    const hashC = (msg, key)=>hashCons(key, msg.length).update((0, utils_js_1.toBytes)(msg)).digest();
    const tmp = hashCons(new Uint8Array(16), 0);
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (key, expectedLength)=>hashCons(key, expectedLength);
    return hashC;
}
exports.ghash = wrapConstructorWithKey((key, expectedLength)=>new GHASH(key, expectedLength));
exports.polyval = wrapConstructorWithKey((key, expectedLength)=>new Polyval(key, expectedLength));

},{"2aa1599dd9180bdc":"5vA16","73a79c40b33f1f5f":"fsAQB"}],"flgZG":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.xchacha20poly1305 = exports.chacha20poly1305 = exports._poly1305_aead = exports.chacha12 = exports.chacha8 = exports.xchacha20 = exports.chacha20 = exports.chacha20orig = exports.hchacha = void 0;
// prettier-ignore
const utils_js_1 = require("93240c83fe2b64be");
const _poly1305_js_1 = require("4bc7624fcda0dfdf");
const _arx_js_1 = require("9d5797bedbdd6e1f");
const _assert_js_1 = require("1988b7058434e360");
// ChaCha20 stream cipher was released in 2008. ChaCha aims to increase
// the diffusion per round, but had slightly less cryptanalysis.
// https://cr.yp.to/chacha.html, http://cr.yp.to/chacha/chacha-20080128.pdf
/**
 * ChaCha core function.
 */ // prettier-ignore
function chachaCore(s, k, n, out, cnt, rounds = 20) {
    let y00 = s[0], y01 = s[1], y02 = s[2], y03 = s[3], y04 = k[0], y05 = k[1], y06 = k[2], y07 = k[3], y08 = k[4], y09 = k[5], y10 = k[6], y11 = k[7], y12 = cnt, y13 = n[0], y14 = n[1], y15 = n[2]; // Counter  Counter	Nonce   Nonce
    // Save state to temporary variables
    let x00 = y00, x01 = y01, x02 = y02, x03 = y03, x04 = y04, x05 = y05, x06 = y06, x07 = y07, x08 = y08, x09 = y09, x10 = y10, x11 = y11, x12 = y12, x13 = y13, x14 = y14, x15 = y15;
    for(let r = 0; r < rounds; r += 2){
        x00 = x00 + x04 | 0;
        x12 = (0, _arx_js_1.rotl)(x12 ^ x00, 16);
        x08 = x08 + x12 | 0;
        x04 = (0, _arx_js_1.rotl)(x04 ^ x08, 12);
        x00 = x00 + x04 | 0;
        x12 = (0, _arx_js_1.rotl)(x12 ^ x00, 8);
        x08 = x08 + x12 | 0;
        x04 = (0, _arx_js_1.rotl)(x04 ^ x08, 7);
        x01 = x01 + x05 | 0;
        x13 = (0, _arx_js_1.rotl)(x13 ^ x01, 16);
        x09 = x09 + x13 | 0;
        x05 = (0, _arx_js_1.rotl)(x05 ^ x09, 12);
        x01 = x01 + x05 | 0;
        x13 = (0, _arx_js_1.rotl)(x13 ^ x01, 8);
        x09 = x09 + x13 | 0;
        x05 = (0, _arx_js_1.rotl)(x05 ^ x09, 7);
        x02 = x02 + x06 | 0;
        x14 = (0, _arx_js_1.rotl)(x14 ^ x02, 16);
        x10 = x10 + x14 | 0;
        x06 = (0, _arx_js_1.rotl)(x06 ^ x10, 12);
        x02 = x02 + x06 | 0;
        x14 = (0, _arx_js_1.rotl)(x14 ^ x02, 8);
        x10 = x10 + x14 | 0;
        x06 = (0, _arx_js_1.rotl)(x06 ^ x10, 7);
        x03 = x03 + x07 | 0;
        x15 = (0, _arx_js_1.rotl)(x15 ^ x03, 16);
        x11 = x11 + x15 | 0;
        x07 = (0, _arx_js_1.rotl)(x07 ^ x11, 12);
        x03 = x03 + x07 | 0;
        x15 = (0, _arx_js_1.rotl)(x15 ^ x03, 8);
        x11 = x11 + x15 | 0;
        x07 = (0, _arx_js_1.rotl)(x07 ^ x11, 7);
        x00 = x00 + x05 | 0;
        x15 = (0, _arx_js_1.rotl)(x15 ^ x00, 16);
        x10 = x10 + x15 | 0;
        x05 = (0, _arx_js_1.rotl)(x05 ^ x10, 12);
        x00 = x00 + x05 | 0;
        x15 = (0, _arx_js_1.rotl)(x15 ^ x00, 8);
        x10 = x10 + x15 | 0;
        x05 = (0, _arx_js_1.rotl)(x05 ^ x10, 7);
        x01 = x01 + x06 | 0;
        x12 = (0, _arx_js_1.rotl)(x12 ^ x01, 16);
        x11 = x11 + x12 | 0;
        x06 = (0, _arx_js_1.rotl)(x06 ^ x11, 12);
        x01 = x01 + x06 | 0;
        x12 = (0, _arx_js_1.rotl)(x12 ^ x01, 8);
        x11 = x11 + x12 | 0;
        x06 = (0, _arx_js_1.rotl)(x06 ^ x11, 7);
        x02 = x02 + x07 | 0;
        x13 = (0, _arx_js_1.rotl)(x13 ^ x02, 16);
        x08 = x08 + x13 | 0;
        x07 = (0, _arx_js_1.rotl)(x07 ^ x08, 12);
        x02 = x02 + x07 | 0;
        x13 = (0, _arx_js_1.rotl)(x13 ^ x02, 8);
        x08 = x08 + x13 | 0;
        x07 = (0, _arx_js_1.rotl)(x07 ^ x08, 7);
        x03 = x03 + x04 | 0;
        x14 = (0, _arx_js_1.rotl)(x14 ^ x03, 16);
        x09 = x09 + x14 | 0;
        x04 = (0, _arx_js_1.rotl)(x04 ^ x09, 12);
        x03 = x03 + x04 | 0;
        x14 = (0, _arx_js_1.rotl)(x14 ^ x03, 8);
        x09 = x09 + x14 | 0;
        x04 = (0, _arx_js_1.rotl)(x04 ^ x09, 7);
    }
    // Write output
    let oi = 0;
    out[oi++] = y00 + x00 | 0;
    out[oi++] = y01 + x01 | 0;
    out[oi++] = y02 + x02 | 0;
    out[oi++] = y03 + x03 | 0;
    out[oi++] = y04 + x04 | 0;
    out[oi++] = y05 + x05 | 0;
    out[oi++] = y06 + x06 | 0;
    out[oi++] = y07 + x07 | 0;
    out[oi++] = y08 + x08 | 0;
    out[oi++] = y09 + x09 | 0;
    out[oi++] = y10 + x10 | 0;
    out[oi++] = y11 + x11 | 0;
    out[oi++] = y12 + x12 | 0;
    out[oi++] = y13 + x13 | 0;
    out[oi++] = y14 + x14 | 0;
    out[oi++] = y15 + x15 | 0;
}
/**
 * hchacha helper method, used primarily in xchacha, to hash
 * key and nonce into key' and nonce'.
 * Same as chachaCore, but there doesn't seem to be a way to move the block
 * out without 25% performance hit.
 */ // prettier-ignore
function hchacha(s, k, i, o32) {
    let x00 = s[0], x01 = s[1], x02 = s[2], x03 = s[3], x04 = k[0], x05 = k[1], x06 = k[2], x07 = k[3], x08 = k[4], x09 = k[5], x10 = k[6], x11 = k[7], x12 = i[0], x13 = i[1], x14 = i[2], x15 = i[3];
    for(let r = 0; r < 20; r += 2){
        x00 = x00 + x04 | 0;
        x12 = (0, _arx_js_1.rotl)(x12 ^ x00, 16);
        x08 = x08 + x12 | 0;
        x04 = (0, _arx_js_1.rotl)(x04 ^ x08, 12);
        x00 = x00 + x04 | 0;
        x12 = (0, _arx_js_1.rotl)(x12 ^ x00, 8);
        x08 = x08 + x12 | 0;
        x04 = (0, _arx_js_1.rotl)(x04 ^ x08, 7);
        x01 = x01 + x05 | 0;
        x13 = (0, _arx_js_1.rotl)(x13 ^ x01, 16);
        x09 = x09 + x13 | 0;
        x05 = (0, _arx_js_1.rotl)(x05 ^ x09, 12);
        x01 = x01 + x05 | 0;
        x13 = (0, _arx_js_1.rotl)(x13 ^ x01, 8);
        x09 = x09 + x13 | 0;
        x05 = (0, _arx_js_1.rotl)(x05 ^ x09, 7);
        x02 = x02 + x06 | 0;
        x14 = (0, _arx_js_1.rotl)(x14 ^ x02, 16);
        x10 = x10 + x14 | 0;
        x06 = (0, _arx_js_1.rotl)(x06 ^ x10, 12);
        x02 = x02 + x06 | 0;
        x14 = (0, _arx_js_1.rotl)(x14 ^ x02, 8);
        x10 = x10 + x14 | 0;
        x06 = (0, _arx_js_1.rotl)(x06 ^ x10, 7);
        x03 = x03 + x07 | 0;
        x15 = (0, _arx_js_1.rotl)(x15 ^ x03, 16);
        x11 = x11 + x15 | 0;
        x07 = (0, _arx_js_1.rotl)(x07 ^ x11, 12);
        x03 = x03 + x07 | 0;
        x15 = (0, _arx_js_1.rotl)(x15 ^ x03, 8);
        x11 = x11 + x15 | 0;
        x07 = (0, _arx_js_1.rotl)(x07 ^ x11, 7);
        x00 = x00 + x05 | 0;
        x15 = (0, _arx_js_1.rotl)(x15 ^ x00, 16);
        x10 = x10 + x15 | 0;
        x05 = (0, _arx_js_1.rotl)(x05 ^ x10, 12);
        x00 = x00 + x05 | 0;
        x15 = (0, _arx_js_1.rotl)(x15 ^ x00, 8);
        x10 = x10 + x15 | 0;
        x05 = (0, _arx_js_1.rotl)(x05 ^ x10, 7);
        x01 = x01 + x06 | 0;
        x12 = (0, _arx_js_1.rotl)(x12 ^ x01, 16);
        x11 = x11 + x12 | 0;
        x06 = (0, _arx_js_1.rotl)(x06 ^ x11, 12);
        x01 = x01 + x06 | 0;
        x12 = (0, _arx_js_1.rotl)(x12 ^ x01, 8);
        x11 = x11 + x12 | 0;
        x06 = (0, _arx_js_1.rotl)(x06 ^ x11, 7);
        x02 = x02 + x07 | 0;
        x13 = (0, _arx_js_1.rotl)(x13 ^ x02, 16);
        x08 = x08 + x13 | 0;
        x07 = (0, _arx_js_1.rotl)(x07 ^ x08, 12);
        x02 = x02 + x07 | 0;
        x13 = (0, _arx_js_1.rotl)(x13 ^ x02, 8);
        x08 = x08 + x13 | 0;
        x07 = (0, _arx_js_1.rotl)(x07 ^ x08, 7);
        x03 = x03 + x04 | 0;
        x14 = (0, _arx_js_1.rotl)(x14 ^ x03, 16);
        x09 = x09 + x14 | 0;
        x04 = (0, _arx_js_1.rotl)(x04 ^ x09, 12);
        x03 = x03 + x04 | 0;
        x14 = (0, _arx_js_1.rotl)(x14 ^ x03, 8);
        x09 = x09 + x14 | 0;
        x04 = (0, _arx_js_1.rotl)(x04 ^ x09, 7);
    }
    let oi = 0;
    o32[oi++] = x00;
    o32[oi++] = x01;
    o32[oi++] = x02;
    o32[oi++] = x03;
    o32[oi++] = x12;
    o32[oi++] = x13;
    o32[oi++] = x14;
    o32[oi++] = x15;
}
exports.hchacha = hchacha;
/**
 * Original, non-RFC chacha20 from DJB. 8-byte nonce, 8-byte counter.
 */ exports.chacha20orig = (0, _arx_js_1.createCipher)(chachaCore, {
    counterRight: false,
    counterLength: 8,
    allowShortKeys: true
});
/**
 * ChaCha stream cipher. Conforms to RFC 8439 (IETF, TLS). 12-byte nonce, 4-byte counter.
 * With 12-byte nonce, it's not safe to use fill it with random (CSPRNG), due to collision chance.
 */ exports.chacha20 = (0, _arx_js_1.createCipher)(chachaCore, {
    counterRight: false,
    counterLength: 4,
    allowShortKeys: false
});
/**
 * XChaCha eXtended-nonce ChaCha. 24-byte nonce.
 * With 24-byte nonce, it's safe to use fill it with random (CSPRNG).
 * https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha
 */ exports.xchacha20 = (0, _arx_js_1.createCipher)(chachaCore, {
    counterRight: false,
    counterLength: 8,
    extendNonceFn: hchacha,
    allowShortKeys: false
});
/**
 * Reduced 8-round chacha, described in original paper.
 */ exports.chacha8 = (0, _arx_js_1.createCipher)(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 8
});
/**
 * Reduced 12-round chacha, described in original paper.
 */ exports.chacha12 = (0, _arx_js_1.createCipher)(chachaCore, {
    counterRight: false,
    counterLength: 4,
    rounds: 12
});
const ZEROS16 = /* @__PURE__ */ new Uint8Array(16);
// Pad to digest size with zeros
const updatePadded = (h, msg)=>{
    h.update(msg);
    const left = msg.length % 16;
    if (left) h.update(ZEROS16.subarray(left));
};
const ZEROS32 = /* @__PURE__ */ new Uint8Array(32);
function computeTag(fn, key, nonce, data, AAD) {
    const authKey = fn(key, nonce, ZEROS32);
    const h = _poly1305_js_1.poly1305.create(authKey);
    if (AAD) updatePadded(h, AAD);
    updatePadded(h, data);
    const num = new Uint8Array(16);
    const view = (0, utils_js_1.createView)(num);
    (0, utils_js_1.setBigUint64)(view, 0, BigInt(AAD ? AAD.length : 0), true);
    (0, utils_js_1.setBigUint64)(view, 8, BigInt(data.length), true);
    h.update(num);
    const res = h.digest();
    authKey.fill(0);
    return res;
}
/**
 * AEAD algorithm from RFC 8439.
 * Salsa20 and chacha (RFC 8439) use poly1305 differently.
 * We could have composed them similar to:
 * https://github.com/paulmillr/scure-base/blob/b266c73dde977b1dd7ef40ef7a23cc15aab526b3/index.ts#L250
 * But it's hard because of authKey:
 * In salsa20, authKey changes position in salsa stream.
 * In chacha, authKey can't be computed inside computeTag, it modifies the counter.
 */ const _poly1305_aead = (xorStream)=>(key, nonce, AAD)=>{
        const tagLength = 16;
        (0, _assert_js_1.bytes)(key, 32);
        (0, _assert_js_1.bytes)(nonce);
        return {
            encrypt: (plaintext, output)=>{
                const plength = plaintext.length;
                const clength = plength + tagLength;
                if (output) (0, _assert_js_1.bytes)(output, clength);
                else output = new Uint8Array(clength);
                xorStream(key, nonce, plaintext, output, 1);
                const tag = computeTag(xorStream, key, nonce, output.subarray(0, -tagLength), AAD);
                output.set(tag, plength); // append tag
                return output;
            },
            decrypt: (ciphertext, output)=>{
                const clength = ciphertext.length;
                const plength = clength - tagLength;
                if (clength < tagLength) throw new Error(`encrypted data must be at least ${tagLength} bytes`);
                if (output) (0, _assert_js_1.bytes)(output, plength);
                else output = new Uint8Array(plength);
                const data = ciphertext.subarray(0, -tagLength);
                const passedTag = ciphertext.subarray(-tagLength);
                const tag = computeTag(xorStream, key, nonce, data, AAD);
                if (!(0, utils_js_1.equalBytes)(passedTag, tag)) throw new Error('invalid tag');
                xorStream(key, nonce, data, output, 1);
                return output;
            }
        };
    };
exports._poly1305_aead = _poly1305_aead;
/**
 * ChaCha20-Poly1305 from RFC 8439.
 * With 12-byte nonce, it's not safe to use fill it with random (CSPRNG), due to collision chance.
 */ exports.chacha20poly1305 = (0, utils_js_1.wrapCipher)({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, (0, exports._poly1305_aead)(exports.chacha20));
/**
 * XChaCha20-Poly1305 extended-nonce chacha.
 * https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha
 * With 24-byte nonce, it's safe to use fill it with random (CSPRNG).
 */ exports.xchacha20poly1305 = (0, utils_js_1.wrapCipher)({
    blockSize: 64,
    nonceLength: 24,
    tagLength: 16
}, (0, exports._poly1305_aead)(exports.xchacha20));

},{"93240c83fe2b64be":"5vA16","4bc7624fcda0dfdf":"hYecD","9d5797bedbdd6e1f":"giKhY","1988b7058434e360":"fsAQB"}],"hYecD":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.poly1305 = exports.wrapConstructorWithKey = void 0;
const _assert_js_1 = require("c97f2deac84d7ec9");
const utils_js_1 = require("989a64bbfc29f1fc");
// Poly1305 is a fast and parallel secret-key message-authentication code.
// https://cr.yp.to/mac.html, https://cr.yp.to/mac/poly1305-20050329.pdf
// https://datatracker.ietf.org/doc/html/rfc8439
// Based on Public Domain poly1305-donna https://github.com/floodyberry/poly1305-donna
const u8to16 = (a, i)=>a[i++] & 0xff | (a[i++] & 0xff) << 8;
class Poly1305 {
    constructor(key){
        this.blockLen = 16;
        this.outputLen = 16;
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.pos = 0;
        this.finished = false;
        key = (0, utils_js_1.toBytes)(key);
        (0, _assert_js_1.bytes)(key, 32);
        const t0 = u8to16(key, 0);
        const t1 = u8to16(key, 2);
        const t2 = u8to16(key, 4);
        const t3 = u8to16(key, 6);
        const t4 = u8to16(key, 8);
        const t5 = u8to16(key, 10);
        const t6 = u8to16(key, 12);
        const t7 = u8to16(key, 14);
        // https://github.com/floodyberry/poly1305-donna/blob/e6ad6e091d30d7f4ec2d4f978be1fcfcbce72781/poly1305-donna-16.h#L47
        this.r[0] = t0 & 0x1fff;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 0x1fff;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 0x1f03;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 0x1fff;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 0x00ff;
        this.r[5] = t4 >>> 1 & 0x1ffe;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 0x1fff;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 0x1f81;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 0x1fff;
        this.r[9] = t7 >>> 5 & 0x007f;
        for(let i = 0; i < 8; i++)this.pad[i] = u8to16(key, 16 + 2 * i);
    }
    process(data, offset, isLast = false) {
        const hibit = isLast ? 0 : 2048;
        const { h, r } = this;
        const r0 = r[0];
        const r1 = r[1];
        const r2 = r[2];
        const r3 = r[3];
        const r4 = r[4];
        const r5 = r[5];
        const r6 = r[6];
        const r7 = r[7];
        const r8 = r[8];
        const r9 = r[9];
        const t0 = u8to16(data, offset + 0);
        const t1 = u8to16(data, offset + 2);
        const t2 = u8to16(data, offset + 4);
        const t3 = u8to16(data, offset + 6);
        const t4 = u8to16(data, offset + 8);
        const t5 = u8to16(data, offset + 10);
        const t6 = u8to16(data, offset + 12);
        const t7 = u8to16(data, offset + 14);
        let h0 = h[0] + (t0 & 0x1fff);
        let h1 = h[1] + ((t0 >>> 13 | t1 << 3) & 0x1fff);
        let h2 = h[2] + ((t1 >>> 10 | t2 << 6) & 0x1fff);
        let h3 = h[3] + ((t2 >>> 7 | t3 << 9) & 0x1fff);
        let h4 = h[4] + ((t3 >>> 4 | t4 << 12) & 0x1fff);
        let h5 = h[5] + (t4 >>> 1 & 0x1fff);
        let h6 = h[6] + ((t4 >>> 14 | t5 << 2) & 0x1fff);
        let h7 = h[7] + ((t5 >>> 11 | t6 << 5) & 0x1fff);
        let h8 = h[8] + ((t6 >>> 8 | t7 << 8) & 0x1fff);
        let h9 = h[9] + (t7 >>> 5 | hibit);
        let c = 0;
        let d0 = c + h0 * r0 + h1 * (5 * r9) + h2 * (5 * r8) + h3 * (5 * r7) + h4 * (5 * r6);
        c = d0 >>> 13;
        d0 &= 0x1fff;
        d0 += h5 * (5 * r5) + h6 * (5 * r4) + h7 * (5 * r3) + h8 * (5 * r2) + h9 * (5 * r1);
        c += d0 >>> 13;
        d0 &= 0x1fff;
        let d1 = c + h0 * r1 + h1 * r0 + h2 * (5 * r9) + h3 * (5 * r8) + h4 * (5 * r7);
        c = d1 >>> 13;
        d1 &= 0x1fff;
        d1 += h5 * (5 * r6) + h6 * (5 * r5) + h7 * (5 * r4) + h8 * (5 * r3) + h9 * (5 * r2);
        c += d1 >>> 13;
        d1 &= 0x1fff;
        let d2 = c + h0 * r2 + h1 * r1 + h2 * r0 + h3 * (5 * r9) + h4 * (5 * r8);
        c = d2 >>> 13;
        d2 &= 0x1fff;
        d2 += h5 * (5 * r7) + h6 * (5 * r6) + h7 * (5 * r5) + h8 * (5 * r4) + h9 * (5 * r3);
        c += d2 >>> 13;
        d2 &= 0x1fff;
        let d3 = c + h0 * r3 + h1 * r2 + h2 * r1 + h3 * r0 + h4 * (5 * r9);
        c = d3 >>> 13;
        d3 &= 0x1fff;
        d3 += h5 * (5 * r8) + h6 * (5 * r7) + h7 * (5 * r6) + h8 * (5 * r5) + h9 * (5 * r4);
        c += d3 >>> 13;
        d3 &= 0x1fff;
        let d4 = c + h0 * r4 + h1 * r3 + h2 * r2 + h3 * r1 + h4 * r0;
        c = d4 >>> 13;
        d4 &= 0x1fff;
        d4 += h5 * (5 * r9) + h6 * (5 * r8) + h7 * (5 * r7) + h8 * (5 * r6) + h9 * (5 * r5);
        c += d4 >>> 13;
        d4 &= 0x1fff;
        let d5 = c + h0 * r5 + h1 * r4 + h2 * r3 + h3 * r2 + h4 * r1;
        c = d5 >>> 13;
        d5 &= 0x1fff;
        d5 += h5 * r0 + h6 * (5 * r9) + h7 * (5 * r8) + h8 * (5 * r7) + h9 * (5 * r6);
        c += d5 >>> 13;
        d5 &= 0x1fff;
        let d6 = c + h0 * r6 + h1 * r5 + h2 * r4 + h3 * r3 + h4 * r2;
        c = d6 >>> 13;
        d6 &= 0x1fff;
        d6 += h5 * r1 + h6 * r0 + h7 * (5 * r9) + h8 * (5 * r8) + h9 * (5 * r7);
        c += d6 >>> 13;
        d6 &= 0x1fff;
        let d7 = c + h0 * r7 + h1 * r6 + h2 * r5 + h3 * r4 + h4 * r3;
        c = d7 >>> 13;
        d7 &= 0x1fff;
        d7 += h5 * r2 + h6 * r1 + h7 * r0 + h8 * (5 * r9) + h9 * (5 * r8);
        c += d7 >>> 13;
        d7 &= 0x1fff;
        let d8 = c + h0 * r8 + h1 * r7 + h2 * r6 + h3 * r5 + h4 * r4;
        c = d8 >>> 13;
        d8 &= 0x1fff;
        d8 += h5 * r3 + h6 * r2 + h7 * r1 + h8 * r0 + h9 * (5 * r9);
        c += d8 >>> 13;
        d8 &= 0x1fff;
        let d9 = c + h0 * r9 + h1 * r8 + h2 * r7 + h3 * r6 + h4 * r5;
        c = d9 >>> 13;
        d9 &= 0x1fff;
        d9 += h5 * r4 + h6 * r3 + h7 * r2 + h8 * r1 + h9 * r0;
        c += d9 >>> 13;
        d9 &= 0x1fff;
        c = (c << 2) + c | 0;
        c = c + d0 | 0;
        d0 = c & 0x1fff;
        c = c >>> 13;
        d1 += c;
        h[0] = d0;
        h[1] = d1;
        h[2] = d2;
        h[3] = d3;
        h[4] = d4;
        h[5] = d5;
        h[6] = d6;
        h[7] = d7;
        h[8] = d8;
        h[9] = d9;
    }
    finalize() {
        const { h, pad } = this;
        const g = new Uint16Array(10);
        let c = h[1] >>> 13;
        h[1] &= 0x1fff;
        for(let i = 2; i < 10; i++){
            h[i] += c;
            c = h[i] >>> 13;
            h[i] &= 0x1fff;
        }
        h[0] += c * 5;
        c = h[0] >>> 13;
        h[0] &= 0x1fff;
        h[1] += c;
        c = h[1] >>> 13;
        h[1] &= 0x1fff;
        h[2] += c;
        g[0] = h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for(let i = 1; i < 10; i++){
            g[i] = h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= 8192;
        let mask = (c ^ 1) - 1;
        for(let i = 0; i < 10; i++)g[i] &= mask;
        mask = ~mask;
        for(let i = 0; i < 10; i++)h[i] = h[i] & mask | g[i];
        h[0] = (h[0] | h[1] << 13) & 0xffff;
        h[1] = (h[1] >>> 3 | h[2] << 10) & 0xffff;
        h[2] = (h[2] >>> 6 | h[3] << 7) & 0xffff;
        h[3] = (h[3] >>> 9 | h[4] << 4) & 0xffff;
        h[4] = (h[4] >>> 12 | h[5] << 1 | h[6] << 14) & 0xffff;
        h[5] = (h[6] >>> 2 | h[7] << 11) & 0xffff;
        h[6] = (h[7] >>> 5 | h[8] << 8) & 0xffff;
        h[7] = (h[8] >>> 8 | h[9] << 5) & 0xffff;
        let f = h[0] + pad[0];
        h[0] = f & 0xffff;
        for(let i = 1; i < 8; i++){
            f = (h[i] + pad[i] | 0) + (f >>> 16) | 0;
            h[i] = f & 0xffff;
        }
    }
    update(data) {
        (0, _assert_js_1.exists)(this);
        const { buffer, blockLen } = this;
        data = (0, utils_js_1.toBytes)(data);
        const len = data.length;
        for(let pos = 0; pos < len;){
            const take = Math.min(blockLen - this.pos, len - pos);
            // Fast path: we have at least one block in input
            if (take === blockLen) {
                for(; blockLen <= len - pos; pos += blockLen)this.process(data, pos);
                continue;
            }
            buffer.set(data.subarray(pos, pos + take), this.pos);
            this.pos += take;
            pos += take;
            if (this.pos === blockLen) {
                this.process(buffer, 0, false);
                this.pos = 0;
            }
        }
        return this;
    }
    destroy() {
        this.h.fill(0);
        this.r.fill(0);
        this.buffer.fill(0);
        this.pad.fill(0);
    }
    digestInto(out) {
        (0, _assert_js_1.exists)(this);
        (0, _assert_js_1.output)(out, this);
        this.finished = true;
        const { buffer, h } = this;
        let { pos } = this;
        if (pos) {
            buffer[pos++] = 1;
            // buffer.subarray(pos).fill(0);
            for(; pos < 16; pos++)buffer[pos] = 0;
            this.process(buffer, 0, true);
        }
        this.finalize();
        let opos = 0;
        for(let i = 0; i < 8; i++){
            out[opos++] = h[i] >>> 0;
            out[opos++] = h[i] >>> 8;
        }
        return out;
    }
    digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
    }
}
function wrapConstructorWithKey(hashCons) {
    const hashC = (msg, key)=>hashCons(key).update((0, utils_js_1.toBytes)(msg)).digest();
    const tmp = hashCons(new Uint8Array(32));
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (key)=>hashCons(key);
    return hashC;
}
exports.wrapConstructorWithKey = wrapConstructorWithKey;
exports.poly1305 = wrapConstructorWithKey((key)=>new Poly1305(key));

},{"c97f2deac84d7ec9":"fsAQB","989a64bbfc29f1fc":"5vA16"}],"giKhY":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createCipher = exports.rotl = exports.sigma = void 0;
// Basic utils for ARX (add-rotate-xor) salsa and chacha ciphers.
const _assert_js_1 = require("28eede09089fab5b");
const utils_js_1 = require("7e60b3e5ff53101e");
/*
RFC8439 requires multi-step cipher stream, where
authKey starts with counter: 0, actual msg with counter: 1.

For this, we need a way to re-use nonce / counter:

    const counter = new Uint8Array(4);
    chacha(..., counter, ...); // counter is now 1
    chacha(..., counter, ...); // counter is now 2

This is complicated:

- 32-bit counters are enough, no need for 64-bit: max ArrayBuffer size in JS is 4GB
- Original papers don't allow mutating counters
- Counter overflow is undefined [^1]
- Idea A: allow providing (nonce | counter) instead of just nonce, re-use it
- Caveat: Cannot be re-used through all cases:
- * chacha has (counter | nonce)
- * xchacha has (nonce16 | counter | nonce16)
- Idea B: separate nonce / counter and provide separate API for counter re-use
- Caveat: there are different counter sizes depending on an algorithm.
- salsa & chacha also differ in structures of key & sigma:
  salsa20:      s[0] | k(4) | s[1] | nonce(2) | ctr(2) | s[2] | k(4) | s[3]
  chacha:       s(4) | k(8) | ctr(1) | nonce(3)
  chacha20orig: s(4) | k(8) | ctr(2) | nonce(2)
- Idea C: helper method such as `setSalsaState(key, nonce, sigma, data)`
- Caveat: we can't re-use counter array

xchacha [^2] uses the subkey and remaining 8 byte nonce with ChaCha20 as normal
(prefixed by 4 NUL bytes, since [RFC8439] specifies a 12-byte nonce).

[^1]: https://mailarchive.ietf.org/arch/msg/cfrg/gsOnTJzcbgG6OqD8Sc0GO5aR_tU/
[^2]: https://datatracker.ietf.org/doc/html/draft-irtf-cfrg-xchacha#appendix-A.2
*/ // We can't make top-level var depend on utils.utf8ToBytes
// because it's not present in all envs. Creating a similar fn here
const _utf8ToBytes = (str)=>Uint8Array.from(str.split('').map((c)=>c.charCodeAt(0)));
const sigma16 = _utf8ToBytes('expand 16-byte k');
const sigma32 = _utf8ToBytes('expand 32-byte k');
const sigma16_32 = (0, utils_js_1.u32)(sigma16);
const sigma32_32 = (0, utils_js_1.u32)(sigma32);
exports.sigma = sigma32_32.slice();
function rotl(a, b) {
    return a << b | a >>> 32 - b;
}
exports.rotl = rotl;
// Is byte array aligned to 4 byte offset (u32)?
function isAligned32(b) {
    return b.byteOffset % 4 === 0;
}
// Salsa and Chacha block length is always 512-bit
const BLOCK_LEN = 64;
const BLOCK_LEN32 = 16;
// new Uint32Array([2**32])   // => Uint32Array(1) [ 0 ]
// new Uint32Array([2**32-1]) // => Uint32Array(1) [ 4294967295 ]
const MAX_COUNTER = 2 ** 32 - 1;
const U32_EMPTY = new Uint32Array();
function runCipher(core, sigma, key, nonce, data, output, counter, rounds) {
    const len = data.length;
    const block = new Uint8Array(BLOCK_LEN);
    const b32 = (0, utils_js_1.u32)(block);
    // Make sure that buffers aligned to 4 bytes
    const isAligned = isAligned32(data) && isAligned32(output);
    const d32 = isAligned ? (0, utils_js_1.u32)(data) : U32_EMPTY;
    const o32 = isAligned ? (0, utils_js_1.u32)(output) : U32_EMPTY;
    for(let pos = 0; pos < len; counter++){
        core(sigma, key, nonce, b32, counter, rounds);
        if (counter >= MAX_COUNTER) throw new Error('arx: counter overflow');
        const take = Math.min(BLOCK_LEN, len - pos);
        // aligned to 4 bytes
        if (isAligned && take === BLOCK_LEN) {
            const pos32 = pos / 4;
            if (pos % 4 !== 0) throw new Error('arx: invalid block position');
            for(let j = 0, posj; j < BLOCK_LEN32; j++){
                posj = pos32 + j;
                o32[posj] = d32[posj] ^ b32[j];
            }
            pos += BLOCK_LEN;
            continue;
        }
        for(let j = 0, posj; j < take; j++){
            posj = pos + j;
            output[posj] = data[posj] ^ block[j];
        }
        pos += take;
    }
}
function createCipher(core, opts) {
    const { allowShortKeys, extendNonceFn, counterLength, counterRight, rounds } = (0, utils_js_1.checkOpts)({
        allowShortKeys: false,
        counterLength: 8,
        counterRight: false,
        rounds: 20
    }, opts);
    if (typeof core !== 'function') throw new Error('core must be a function');
    (0, _assert_js_1.number)(counterLength);
    (0, _assert_js_1.number)(rounds);
    (0, _assert_js_1.bool)(counterRight);
    (0, _assert_js_1.bool)(allowShortKeys);
    return (key, nonce, data, output, counter = 0)=>{
        (0, _assert_js_1.bytes)(key);
        (0, _assert_js_1.bytes)(nonce);
        (0, _assert_js_1.bytes)(data);
        const len = data.length;
        if (!output) output = new Uint8Array(len);
        (0, _assert_js_1.bytes)(output);
        (0, _assert_js_1.number)(counter);
        if (counter < 0 || counter >= MAX_COUNTER) throw new Error('arx: counter overflow');
        if (output.length < len) throw new Error(`arx: output (${output.length}) is shorter than data (${len})`);
        const toClean = [];
        // Key & sigma
        // key=16 -> sigma16, k=key|key
        // key=32 -> sigma32, k=key
        let l = key.length, k, sigma;
        if (l === 32) {
            k = key.slice();
            toClean.push(k);
            sigma = sigma32_32;
        } else if (l === 16 && allowShortKeys) {
            k = new Uint8Array(32);
            k.set(key);
            k.set(key, 16);
            sigma = sigma16_32;
            toClean.push(k);
        } else throw new Error(`arx: invalid 32-byte key, got length=${l}`);
        // Nonce
        // salsa20:      8   (8-byte counter)
        // chacha20orig: 8   (8-byte counter)
        // chacha20:     12  (4-byte counter)
        // xsalsa20:     24  (16 -> hsalsa,  8 -> old nonce)
        // xchacha20:    24  (16 -> hchacha, 8 -> old nonce)
        // Align nonce to 4 bytes
        if (!isAligned32(nonce)) {
            nonce = nonce.slice();
            toClean.push(nonce);
        }
        const k32 = (0, utils_js_1.u32)(k);
        // hsalsa & hchacha: handle extended nonce
        if (extendNonceFn) {
            if (nonce.length !== 24) throw new Error(`arx: extended nonce must be 24 bytes`);
            extendNonceFn(sigma, k32, (0, utils_js_1.u32)(nonce.subarray(0, 16)), k32);
            nonce = nonce.subarray(16);
        }
        // Handle nonce counter
        const nonceNcLen = 16 - counterLength;
        if (nonceNcLen !== nonce.length) throw new Error(`arx: nonce must be ${nonceNcLen} or 16 bytes`);
        // Pad counter when nonce is 64 bit
        if (nonceNcLen !== 12) {
            const nc = new Uint8Array(12);
            nc.set(nonce, counterRight ? 0 : 12 - nonce.length);
            nonce = nc;
            toClean.push(nonce);
        }
        const n32 = (0, utils_js_1.u32)(nonce);
        runCipher(core, sigma, k32, n32, data, output, counter, rounds);
        while(toClean.length > 0)toClean.pop().fill(0);
        return output;
    };
}
exports.createCipher = createCipher;

},{"28eede09089fab5b":"fsAQB","7e60b3e5ff53101e":"5vA16"}],"jgC5i":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hkdf = exports.expand = exports.extract = void 0;
const _assert_js_1 = require("1d445f5fa159e79");
const utils_js_1 = require("77848dd600b0ec63");
const hmac_js_1 = require("62ad64977a58609f");
// HKDF (RFC 5869)
// https://soatok.blog/2021/11/17/understanding-hkdf/
/**
 * HKDF-Extract(IKM, salt) -> PRK
 * Arguments position differs from spec (IKM is first one, since it is not optional)
 * @param hash
 * @param ikm
 * @param salt
 * @returns
 */ function extract(hash, ikm, salt) {
    _assert_js_1.default.hash(hash);
    // NOTE: some libraries treat zero-length array as 'not provided';
    // we don't, since we have undefined as 'not provided'
    // https://github.com/RustCrypto/KDFs/issues/15
    if (salt === undefined) salt = new Uint8Array(hash.outputLen); // if not provided, it is set to a string of HashLen zeros
    return (0, hmac_js_1.hmac)(hash, (0, utils_js_1.toBytes)(salt), (0, utils_js_1.toBytes)(ikm));
}
exports.extract = extract;
// HKDF-Expand(PRK, info, L) -> OKM
const HKDF_COUNTER = new Uint8Array([
    0
]);
const EMPTY_BUFFER = new Uint8Array();
/**
 * HKDF-expand from the spec.
 * @param prk - a pseudorandom key of at least HashLen octets (usually, the output from the extract step)
 * @param info - optional context and application specific information (can be a zero-length string)
 * @param length - length of output keying material in octets
 */ function expand(hash, prk, info, length = 32) {
    _assert_js_1.default.hash(hash);
    _assert_js_1.default.number(length);
    if (length > 255 * hash.outputLen) throw new Error('Length should be <= 255*HashLen');
    const blocks = Math.ceil(length / hash.outputLen);
    if (info === undefined) info = EMPTY_BUFFER;
    // first L(ength) octets of T
    const okm = new Uint8Array(blocks * hash.outputLen);
    // Re-use HMAC instance between blocks
    const HMAC = hmac_js_1.hmac.create(hash, prk);
    const HMACTmp = HMAC._cloneInto();
    const T = new Uint8Array(HMAC.outputLen);
    for(let counter = 0; counter < blocks; counter++){
        HKDF_COUNTER[0] = counter + 1;
        // T(0) = empty string (zero length)
        // T(N) = HMAC-Hash(PRK, T(N-1) | info | N)
        HMACTmp.update(counter === 0 ? EMPTY_BUFFER : T).update(info).update(HKDF_COUNTER).digestInto(T);
        okm.set(T, hash.outputLen * counter);
        HMAC._cloneInto(HMACTmp);
    }
    HMAC.destroy();
    HMACTmp.destroy();
    T.fill(0);
    HKDF_COUNTER.fill(0);
    return okm.slice(0, length);
}
exports.expand = expand;
/**
 * HKDF (RFC 5869): extract + expand in one step.
 * @param hash - hash function that would be used (e.g. sha256)
 * @param ikm - input keying material, the initial key
 * @param salt - optional salt value (a non-secret random value)
 * @param info - optional context and application specific information
 * @param length - length of output keying material in octets
 */ const hkdf = (hash, ikm, salt, info, length)=>expand(hash, extract(hash, ikm, salt), info, length);
exports.hkdf = hkdf;

},{"1d445f5fa159e79":"3JYF4","77848dd600b0ec63":"4eGYF","62ad64977a58609f":"b3lnM"}],"b3lnM":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hmac = exports.HMAC = void 0;
const _assert_js_1 = require("e193f8e480ff22c8");
const utils_js_1 = require("5f3e4c645aa0c8ba");
// HMAC (RFC 2104)
class HMAC extends utils_js_1.Hash {
    constructor(hash, _key){
        super();
        this.finished = false;
        this.destroyed = false;
        _assert_js_1.default.hash(hash);
        const key = (0, utils_js_1.toBytes)(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== 'function') throw new Error('Expected instance of class which extends utils.Hash');
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad = new Uint8Array(blockLen);
        // blockLen can be bigger than outputLen
        pad.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for(let i = 0; i < pad.length; i++)pad[i] ^= 0x36;
        this.iHash.update(pad);
        // By doing update (processing of first block) of outer hash here we can re-use it between multiple calls via clone
        this.oHash = hash.create();
        // Undo internal XOR && apply outer XOR
        for(let i = 0; i < pad.length; i++)pad[i] ^= 106;
        this.oHash.update(pad);
        pad.fill(0);
    }
    update(buf) {
        _assert_js_1.default.exists(this);
        this.iHash.update(buf);
        return this;
    }
    digestInto(out) {
        _assert_js_1.default.exists(this);
        _assert_js_1.default.bytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
    }
    digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
    }
    _cloneInto(to) {
        // Create new instance without calling constructor since key already in state and we don't know it.
        to || (to = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to;
        to.finished = finished;
        to.destroyed = destroyed;
        to.blockLen = blockLen;
        to.outputLen = outputLen;
        to.oHash = oHash._cloneInto(to.oHash);
        to.iHash = iHash._cloneInto(to.iHash);
        return to;
    }
    destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
    }
}
exports.HMAC = HMAC;
/**
 * HMAC: RFC2104 message authentication code.
 * @param hash - function that would be used e.g. sha256
 * @param key - message key
 * @param message - message data
 */ const hmac = (hash, key, message)=>new HMAC(hash, key).update(message).digest();
exports.hmac = hmac;
exports.hmac.create = (hash, key)=>new HMAC(hash, key);

},{"e193f8e480ff22c8":"3JYF4","5f3e4c645aa0c8ba":"4eGYF"}]},["2glVN","adjPd"], "adjPd", "parcelRequire94c2")

//# sourceMappingURL=index.63aff760.js.map
