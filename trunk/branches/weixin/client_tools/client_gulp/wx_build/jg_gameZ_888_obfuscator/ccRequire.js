'use strict';

var H = wx.$F;
var moduleMap = { 'src/assets/Script/engine/7cwan_sdk.js': function fk5_cx4() {
    require(H[0x0]);
  }, 'src/assets/Script/engine/protolib.js': function ftwshi() {
    require(H[0x1]);
  }, 'src/assets/Script/engine/zlib.min.js': function fu38pme() {
    require(H[0x2]);
  }, 'src/project.js': function fbalme() {
    require(H[0x3]);
  } };window[H[0x4]] = function (moduleName) {
  var qdor0z = moduleMap[moduleName];qdor0z && qdor0z();
};