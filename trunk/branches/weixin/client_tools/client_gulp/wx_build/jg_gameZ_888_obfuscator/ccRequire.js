'use strict';

var H = wx.$F;
var moduleMap = { 'src/assets/Script/engine/7cwan_sdk.js': function fn1z$6r() {
    require(H[0x0]);
  }, 'src/assets/Script/engine/protolib.js': function fqo60z() {
    require(H[0x1]);
  }, 'src/assets/Script/engine/zlib.min.js': function fvba2el() {
    require(H[0x2]);
  }, 'src/project.js': function f_kxt5c() {
    require(H[0x3]);
  } };window[H[0x4]] = function (moduleName) {
  var uk4x8 = moduleMap[moduleName];uk4x8 && uk4x8();
};