"use strict";

var moduleMap = {
  'src/assets/Script/engine/7cwan_sdk.js': function srcAssetsScriptEngine7cwan_sdkJs() {
    require('src/assets/Script/engine/7cwan_sdk.js');
  },
  'src/assets/Script/engine/protolib.js': function srcAssetsScriptEngineProtolibJs() {
    require('myProtoJs/protolib.js');
  },
  'src/assets/Script/engine/zlib.min.js': function srcAssetsScriptEngineZlibMinJs() {
    require('src/assets/Script/engine/zlib.min.js');
  },
  'src/project.js': function srcProjectJs() {
    require('myMainJs/project.js');
  }
};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];
  func && func();
};