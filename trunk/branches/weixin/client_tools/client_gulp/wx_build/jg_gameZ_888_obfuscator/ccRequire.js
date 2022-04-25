'use strict';

var H = wx.$F;
var fkx8uj = H[0x0],
    fau8e3pm = H[0x1],
    fi$97hsw = H[0x2],
    fx_k5c4j = H[0x3],
    moduleMap = {};moduleMap[fkx8uj] = function fro6q() {
  require(fkx8uj);
}, moduleMap[fau8e3pm] = function fe2bapl() {
  require(H[0x4]);
}, moduleMap[fi$97hsw] = function fbvlgae2() {
  require(fi$97hsw);
}, moduleMap[fx_k5c4j] = function fhtsc_() {
  require(H[0x5]);
}, window[H[0x6]] = function (moduleName) {
  var j4kucx8 = moduleMap[moduleName];j4kucx8 && j4kucx8();
};