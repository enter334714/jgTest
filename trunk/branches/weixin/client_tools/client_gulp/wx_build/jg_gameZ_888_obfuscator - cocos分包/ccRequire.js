'use strict';

var H = wx.$F;
var fpam38 = H[0x0],
    fv2ambl = H[0x1],
    fw7i6n = H[0x2],
    fm2bap3e = H[0x3],
    moduleMap = {};moduleMap[fpam38] = function fi6n71r() {
  require(fpam38);
}, moduleMap[fv2ambl] = function fu4p3jm() {
  require(H[0x4]);
}, moduleMap[fw7i6n] = function fhw79$i() {
  require(fw7i6n);
}, moduleMap[fm2bap3e] = function foqrn0z6() {
  require(H[0x5]);
}, window[H[0x6]] = function (moduleName) {
  var _4ckt5x = moduleMap[moduleName];_4ckt5x && _4ckt5x();
};