'use strict';

var H = wx.$F;
window[H[0x25]] = function () {
  var s97wi = window[H[0x26]];window[H[0x26]] = undefined;if (!s97wi[H[0x27]]) {
    var _xctk5 = s97wi[H[0x28]],
        xck84 = s97wi[H[0x29]],
        ae3pbm = s97wi[H[0x2a]],
        wsth59 = s97wi[H[0x29]] = {};for (var z6nqr in xck84) {
      var mpj8u = xck84[z6nqr],
          r6z1n = wsth59[z6nqr] = {};for (var up3a in mpj8u) {
        var cx_5ts = mpj8u[up3a],
            k4_xc5 = cx_5ts[0x1];typeof k4_xc5 === H[0x2b] && (cx_5ts[0x1] = ae3pbm[k4_xc5]), r6z1n[_xctk5[up3a] || up3a] = cx_5ts;
      }
    }var ih$17w = s97wi[H[0x2c]];for (var u4xkj8 = 0x0; u4xkj8 < ih$17w[H[0x2d]]; ++u4xkj8) {
      var eab2p = ih$17w[u4xkj8];typeof eab2p[H[0x2e]] === H[0x2b] && (eab2p[H[0x2e]] = _xctk5[eab2p[H[0x2e]]]);
    }var c9_t5 = s97wi[H[0x2f]];for (var drz0oq in c9_t5) {
      var r71n$ = c9_t5[drz0oq];for (var r6n$71 = 0x0; r6n$71 < r71n$[H[0x2d]]; ++r6n$71) {
        typeof r71n$[r6n$71] === H[0x2b] && (r71n$[r6n$71] = _xctk5[r71n$[r6n$71]]);
      }
    }var r0qnz = s97wi[H[0x30]];for (var $1w7ni in r0qnz) {
      var gv2 = r0qnz[$1w7ni][H[0x28]];if (gv2) for (var oyzdq0 = 0x0, ck5tx_ = gv2[H[0x2d]]; oyzdq0 < ck5tx_; oyzdq0++) {
        typeof gv2[oyzdq0] === H[0x2b] && (gv2[oyzdq0] = _xctk5[gv2[oyzdq0]]);
      }
    }
  }var si9tw = function h9w5ts() {
    cc[H[0x12]][H[0x31]][H[0x32]] = s97wi[H[0x30]], cc[H[0xc]][H[0x33]](!![]), cc[H[0xc]][H[0x34]](!![]);var dozy = s97wi[H[0x35]];cc[H[0x36]][H[0x37]](dozy, null, function () {
      cc[H[0x12]][H[0x38]] = null, console[H[0x39]](H[0x3a] + dozy);
    });
  },
      j_xkc = s97wi[H[0x3b]],
      al2ebv = s97wi[H[0x27]] ? H[0x3c] : H[0x3d];j_xkc ? (j_xkc = j_xkc[H[0x3e]](function (uema) {
    return H[0x3f] + uema;
  }), j_xkc[H[0x40]](al2ebv)) : j_xkc = [al2ebv];var _s95t = H[0x41];const ck_x = wx[H[0x42]]({ 'name': _s95t, 'success': function (c4_xkj) {
      var z$n1r6 = H[0x43];const cxk8 = wx[H[0x42]]({ 'name': z$n1r6, 'success': function (xujk4) {
          var c9ts5 = cc[H[0x17]][H[0x18]] === cc[H[0x17]][H[0x19]],
              qzor0d = { 'id': H[0x44], 'scenes': s97wi[H[0x2c]], 'debugMode': s97wi[H[0x27]] ? cc[H[0x27]][H[0x45]][H[0x46]] : cc[H[0x27]][H[0x45]][H[0x47]], 'showFPS': !c9ts5 && s97wi[H[0x27]], 'frameRate': 0x3c, 'jsList': j_xkc, 'groupList': s97wi[H[0x48]], 'collisionMatrix': s97wi[H[0x49]] };cc[H[0x4a]][H[0x6]]({ 'libraryPath': H[0x4b], 'rawAssetsBase': H[0x4c], 'rawAssets': s97wi[H[0x29]], 'packedAssets': s97wi[H[0x2f]], 'md5AssetsMap': s97wi[H[0x4d]], 'subpackages': s97wi[H[0x30]] }), cc[H[0x1b]][H[0x4e]](qzor0d, si9tw);
        }, 'fail': function ($i79h) {}, 'compelete': function (z61) {} });
    }, 'fail': function (mpab2) {}, 'compelete': function (ts5cx) {} });
};