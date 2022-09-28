'use strict';

var H = wx.$F;
var moduleMap = { 'src/assets/Script/engine/7cwan_sdk.js': function fswi79() {
    require(H[0x0]);
  }, 'src/assets/Script/engine/protolib.js': function flab2ve() {
    require(H[0x1]);
  }, 'src/assets/Script/engine/zlib.min.js': function fz$6n1() {
    require(H[0x2]);
  }, 'src/project.js': function fths() {
    require(H[0x3]);
  } };window[H[0x4]] = function (moduleName) {
  var u8jp43 = moduleMap[moduleName];u8jp43 && u8jp43();
};