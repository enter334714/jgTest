'use strict';

var H = wx.$F;
var moduleMap = { 'src/assets/Script/engine/7cwan_sdk.js': function fgelbav2() {
    require(H[0x0]);
  }, 'src/assets/Script/engine/protolib.js': function fhwi7s$() {
    require(H[0x1]);
  }, 'src/assets/Script/engine/zlib.min.js': function fs97w$ih() {
    require(H[0x2]);
  }, 'src/project.js': function f$71z6nr() {
    require(H[0x3]);
  } };window[H[0x4]] = function (moduleName) {
  var n$61z0 = moduleMap[moduleName];n$61z0 && n$61z0();
};