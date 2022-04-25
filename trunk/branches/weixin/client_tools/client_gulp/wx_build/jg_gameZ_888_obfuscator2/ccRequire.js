"use strict";

var H = wx.$F;
var moduleMap = {
  'src/7cwan_sdk.js': function srcAssetsScriptEngine7cwan_sdkJs() {
    require(H[0]);
  },
  'src/assets/Script/engine/protolib.js': function srcAssetsScriptEngineProtolibJs() {
    require(H[1]);
  },
  'src/zlib.min.js': function srcAssetsScriptEngineZlibMinJs() {
    require(H[2]);
  },
  'src/project.js': function srcProjectJs() {
    require(H[3]);
  }
};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];
  func && func();
};