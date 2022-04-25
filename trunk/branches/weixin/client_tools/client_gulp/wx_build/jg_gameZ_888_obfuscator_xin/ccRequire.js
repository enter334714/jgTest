'use strict';

var H = wx.$F;
var femu8 = H[0x0],
    fihw$ = H[0x1],
    fux48j = H[0x2],
    fjxu48k = H[0x3],
    moduleMap = {};moduleMap[femu8] = function f$6n1rz() {
  require(femu8);
}, moduleMap[fihw$] = function f$1z6n() {
  require(H[0x4]);
}, moduleMap[fux48j] = function fi16n() {
  require(fux48j);
}, moduleMap[fjxu48k] = function fnz$1() {
  require(H[0x5]);
}, window[H[0x6]] = function (moduleName) {
  var $7in1w = moduleMap[moduleName];$7in1w && $7in1w();
};