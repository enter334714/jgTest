"use strict";

var c7cwan_sdk = 'src/assets/Script/engine/7cwan_sdk.js';
var protolib = 'src/assets/Script/engine/protolib.js';
var zlibmin = 'src/assets/Script/engine/zlib.min.js';
var project = 'src/project.js';
var moduleMap = {};
moduleMap[c7cwan_sdk] = function srcAssetsScriptEngine7cwan_sdkJs() {
  require(c7cwan_sdk);
};
moduleMap[protolib] = function srcAssetsScriptEngineProtolibJs() {
  require('myProtoJs/protolib.js');
};

moduleMap[zlibmin] = function srcAssetsScriptEngineZlibMinJs() {
  require(zlibmin);
};
moduleMap[project] = function srcProjectJs() {
  require('myMainJs/project.js');
};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];
  func && func();
};