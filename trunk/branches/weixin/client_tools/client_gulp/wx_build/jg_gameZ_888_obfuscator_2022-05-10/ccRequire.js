'use strict';

var H = wx.$F;
var moduleMap = { 'src/assets/Script/engine/7cwan_sdk.js': function fpmbl2() {
    require(H[0x0]);
  }, 'src/assets/Script/engine/protolib.js': function fu3bpem() {
    require(H[0x1]);
  }, 'src/assets/Script/engine/zlib.min.js': function fi9hwts() {
    require(H[0x2]);
  }, 'src/project.js': function fk5cx4_t() {
    require(H[0x3]);
  } };window[H[0x4]] = function (moduleName) {
  var epmu3a = moduleMap[moduleName];epmu3a && epmu3a();
};