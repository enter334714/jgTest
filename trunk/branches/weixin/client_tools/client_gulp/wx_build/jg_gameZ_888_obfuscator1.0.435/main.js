'use strict';

var H = wx.$F;
window[H[0x25]] = function () {
  var j834up = window[H[0x26]];window[H[0x26]] = undefined;if (!j834up[H[0x27]]) {
    var t9_h5 = j834up[H[0x28]],
        u4xkj8 = j834up[H[0x29]],
        _4k5x = j834up[H[0x2a]],
        w$7in1 = j834up[H[0x29]] = {};for (var epm8 in u4xkj8) {
      var zoqdr0 = u4xkj8[epm8],
          aupe3 = w$7in1[epm8] = {};for (var jmu8p in zoqdr0) {
        var ujp438 = zoqdr0[jmu8p],
            zoqd0r = ujp438[0x1];typeof zoqd0r === H[0x2b] && (ujp438[0x1] = _4k5x[zoqd0r]), aupe3[t9_h5[jmu8p] || jmu8p] = ujp438;
      }
    }var nz60 = j834up[H[0x2c]];for (var avbel = 0x0; avbel < nz60[H[0x2d]]; ++avbel) {
      var z$rn6 = nz60[avbel];typeof z$rn6[H[0x2e]] === H[0x2b] && (z$rn6[H[0x2e]] = t9_h5[z$rn6[H[0x2e]]]);
    }var zod0 = j834up[H[0x2f]];for (var qyz0od in zod0) {
      var roqz60 = zod0[qyz0od];for (var p2be = 0x0; p2be < roqz60[H[0x2d]]; ++p2be) {
        typeof roqz60[p2be] === H[0x2b] && (roqz60[p2be] = t9_h5[roqz60[p2be]]);
      }
    }var oq0zr = j834up[H[0x30]];for (var ordqz0 in oq0zr) {
      var k83j = oq0zr[ordqz0][H[0x28]];if (k83j) for (var xc48jk = 0x0, h$w97 = k83j[H[0x2d]]; xc48jk < h$w97; xc48jk++) {
        typeof k83j[xc48jk] === H[0x2b] && (k83j[xc48jk] = t9_h5[k83j[xc48jk]]);
      }
    }
  }var h1i$w = function _c54() {
    cc[H[0x12]][H[0x31]][H[0x32]] = j834up[H[0x30]], cc[H[0xc]][H[0x33]](!![]), cc[H[0xc]][H[0x34]](!![]);var j4c8k = j834up[H[0x35]];cc[H[0x36]][H[0x37]](j4c8k, null, function () {
      cc[H[0x12]][H[0x38]] = null, console[H[0x39]](H[0x3a] + j4c8k);
    });
  },
      r6nqz = j834up[H[0x3b]],
      lbm2 = j834up[H[0x27]] ? H[0x3c] : H[0x3d];r6nqz ? (r6nqz = r6nqz[H[0x3e]](function (xj4ck_) {
    return H[0x3f] + xj4ck_;
  }), r6nqz[H[0x40]](lbm2)) : r6nqz = [lbm2];var vl2ba = H[0x41];const k84xj = wx[H[0x42]]({ 'name': vl2ba, 'success': function (e2pamb) {
      var glbva2 = H[0x43];const wihts9 = wx[H[0x42]]({ 'name': glbva2, 'success': function (pju348) {
          var zrdq = cc[H[0x17]][H[0x18]] === cc[H[0x17]][H[0x19]],
              _csx = { 'id': H[0x44], 'scenes': j834up[H[0x2c]], 'debugMode': j834up[H[0x27]] ? cc[H[0x27]][H[0x45]][H[0x46]] : cc[H[0x27]][H[0x45]][H[0x47]], 'showFPS': !zrdq && j834up[H[0x27]], 'frameRate': 0x3c, 'jsList': r6nqz, 'groupList': j834up[H[0x48]], 'collisionMatrix': j834up[H[0x49]] };cc[H[0x4a]][H[0x6]]({ 'libraryPath': H[0x4b], 'rawAssetsBase': H[0x4c], 'rawAssets': j834up[H[0x29]], 'packedAssets': j834up[H[0x2f]], 'md5AssetsMap': j834up[H[0x4d]], 'subpackages': j834up[H[0x30]] }), cc[H[0x1b]][H[0x4e]](_csx, h1i$w);
        }, 'fail': function (qoyd) {}, 'compelete': function (tkc) {} });
    }, 'fail': function (ume38p) {}, 'compelete': function (qd0roz) {} });
};