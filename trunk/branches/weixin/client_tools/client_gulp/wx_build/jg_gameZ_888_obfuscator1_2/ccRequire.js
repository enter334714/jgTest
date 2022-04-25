"use strict";

var H = wx.$F;
var moduleMap = {
  'src/assets/Script/engine/7cwan_sdk.js': function srcAssetsScriptEngine7cwan_sdkJs() {
    require(H[0x0]);
  },
  'src/assets/Script/engine/protolib.js': function srcAssetsScriptEngineProtolibJs() {
    require(H[0x1]);
  },
  'src/assets/Script/engine/zlib.min.js': function srcAssetsScriptEngineZlibMinJs() {
    require(H[0x2]);
  },
  'src/project.js': function srcProjectJs() {
    require(H[0x3]);
  }
};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];
  func && func();
};