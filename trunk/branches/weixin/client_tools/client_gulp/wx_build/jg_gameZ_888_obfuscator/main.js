'use strict';

var H = wx.$F;
window[H[0x25]] = function () {
  var xct_ = window[H[0x26]];window[H[0x26]] = undefined;if (!xct_[H[0x27]]) {
    var rq60n = xct_[H[0x28]],
        abvl2e = xct_[H[0x29]],
        rqz6n0 = xct_[H[0x2a]],
        isw79h = xct_[H[0x29]] = {};for (var eb2va in abvl2e) {
      var i1nw$ = abvl2e[eb2va],
          x5c_4 = isw79h[eb2va] = {};for (var $n6r17 in i1nw$) {
        var _h59t = i1nw$[$n6r17],
            ux8jk = _h59t[0x1];typeof ux8jk === H[0x2b] && (_h59t[0x1] = rqz6n0[ux8jk]), x5c_4[rq60n[$n6r17] || $n6r17] = _h59t;
      }
    }var c4jk_x = xct_[H[0x2c]];for (var e3mpu = 0x0; e3mpu < c4jk_x[H[0x2d]]; ++e3mpu) {
      var shi9tw = c4jk_x[e3mpu];typeof shi9tw[H[0x2e]] === H[0x2b] && (shi9tw[H[0x2e]] = rq60n[shi9tw[H[0x2e]]]);
    }var e2val = xct_[H[0x2f]];for (var abeml2 in e2val) {
      var zo06r = e2val[abeml2];for (var k4x8 = 0x0; k4x8 < zo06r[H[0x2d]]; ++k4x8) {
        typeof zo06r[k4x8] === H[0x2b] && (zo06r[k4x8] = rq60n[zo06r[k4x8]]);
      }
    }var ws5h = xct_[H[0x30]];for (var qd0zo in ws5h) {
      var eavbl2 = ws5h[qd0zo][H[0x28]];if (eavbl2) for (var mae = 0x0, eabvl2 = eavbl2[H[0x2d]]; mae < eabvl2; mae++) {
        typeof eavbl2[mae] === H[0x2b] && (eavbl2[mae] = rq60n[eavbl2[mae]]);
      }
    }
  }var lavg2 = function jk3u4() {
    cc[H[0x12]][H[0x31]][H[0x32]] = xct_[H[0x30]], cc[H[0xc]][H[0x33]](!![]), cc[H[0xc]][H[0x34]](!![]);var n1iw7$ = xct_[H[0x35]];cc[H[0x36]][H[0x37]](n1iw7$, null, function () {
      cc[H[0x12]][H[0x38]] = null, console[H[0x39]](H[0x3a] + n1iw7$);
    });
  },
      r$617n = xct_[H[0x3b]],
      hw5st9 = xct_[H[0x27]] ? H[0x3c] : H[0x3d];r$617n ? (r$617n = r$617n[H[0x3e]](function (elb2am) {
    return H[0x3f] + elb2am;
  }), r$617n[H[0x40]](hw5st9)) : r$617n = [hw5st9];var zn6qr = H[0x41];const uaemp = wx[H[0x42]]({ 'name': zn6qr, 'success': function (n1$iw7) {
      var _5c = H[0x43];const kc45_ = wx[H[0x42]]({ 'name': _5c, 'success': function (ju34k) {
          var $17wn = cc[H[0x17]][H[0x18]] === cc[H[0x17]][H[0x19]],
              z60rn1 = { 'id': H[0x44], 'scenes': xct_[H[0x2c]], 'debugMode': xct_[H[0x27]] ? cc[H[0x27]][H[0x45]][H[0x46]] : cc[H[0x27]][H[0x45]][H[0x47]], 'showFPS': !$17wn && xct_[H[0x27]], 'frameRate': 0x3c, 'jsList': r$617n, 'groupList': xct_[H[0x48]], 'collisionMatrix': xct_[H[0x49]] };cc[H[0x4a]][H[0x6]]({ 'libraryPath': H[0x4b], 'rawAssetsBase': H[0x4c], 'rawAssets': xct_[H[0x29]], 'packedAssets': xct_[H[0x2f]], 'md5AssetsMap': xct_[H[0x4d]], 'subpackages': xct_[H[0x30]] }), cc[H[0x1b]][H[0x4e]](z60rn1, lavg2);
        }, 'fail': function (ody0) {}, 'compelete': function (xs_t) {} });
    }, 'fail': function (x_sc5) {}, 'compelete': function ($hi1w) {} });
};