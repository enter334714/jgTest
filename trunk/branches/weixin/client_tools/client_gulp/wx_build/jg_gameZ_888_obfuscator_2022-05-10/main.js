'use strict';

var H = wx.$F;
window[H[0x25]] = function () {
  var e3aupm8 = window[H[0x26]];window[H[0x26]] = undefined;if (!e3aupm8[H[0x27]]) {
    var _5xst9c = e3aupm8[H[0x28]],
        w$6in = e3aupm8[H[0x29]],
        p3u4mj = e3aupm8[H[0x2a]],
        pe8muj3 = e3aupm8[H[0x29]] = {};for (var $61rn7 in w$6in) {
      var swh9$7 = w$6in[$61rn7],
          $7r16in = pe8muj3[$61rn7] = {};for (var ro0d6q in swh9$7) {
        var orydz0q = swh9$7[ro0d6q],
            j_4kx5 = orydz0q[0x369 + 0x35b * 0xb + -0x2851];typeof j_4kx5 === H[0x2b] && (orydz0q[-0xe86 + -0x19ec + -0x221 * -0x13] = p3u4mj[j_4kx5]), $7r16in[_5xst9c[ro0d6q] || ro0d6q] = orydz0q;
      }
    }var w$97i1h = e3aupm8[H[0x2c]];for (var tch5s9_ = -0x1f2f + 0x100a * 0x2 + -0xe5; tch5s9_ < w$97i1h[H[0x2d]]; ++tch5s9_) {
      var m43pu8j = w$97i1h[tch5s9_];typeof m43pu8j[H[0x2e]] === H[0x2b] && (m43pu8j[H[0x2e]] = _5xst9c[m43pu8j[H[0x2e]]]);
    }var r01z = e3aupm8[H[0x2f]];for (var ubmep3a in r01z) {
      var _k5stxc = r01z[ubmep3a];for (var umap8e3 = 0x1 * -0x4d1 + 0x224b * 0x1 + -0x1d7a; umap8e3 < _k5stxc[H[0x2d]]; ++umap8e3) {
        typeof _k5stxc[umap8e3] === H[0x2b] && (_k5stxc[umap8e3] = _5xst9c[_k5stxc[umap8e3]]);
      }
    }var _tx59 = e3aupm8[H[0x30]];for (var _ckt5sx in _tx59) {
      var w76$1in = _tx59[_ckt5sx][H[0x28]];if (w76$1in) for (var on0rq6z = 0x52 * -0x45 + 0x13 * 0x206 + 0x4 * -0x416, umpje38 = w76$1in[H[0x2d]]; on0rq6z < umpje38; on0rq6z++) {
        typeof w76$1in[on0rq6z] === H[0x2b] && (w76$1in[on0rq6z] = _5xst9c[w76$1in[on0rq6z]]);
      }
    }
  }var ni6$1w7 = function $rn167i() {
    cc[H[0x12]][H[0x31]][H[0x32]] = e3aupm8[H[0x30]], cc[H[0xc]][H[0x33]](!![]), cc[H[0xc]][H[0x34]](!![]);var zqnor06 = e3aupm8[H[0x35]];cc[H[0x36]][H[0x37]](zqnor06, null, function () {
      cc[H[0x12]][H[0x38]] = null, console[H[0x39]](H[0x3a] + zqnor06);
    });
  },
      ws97 = e3aupm8[H[0x3b]],
      thi5 = e3aupm8[H[0x27]] ? H[0x3c] : H[0x3d];ws97 ? (ws97 = ws97[H[0x3e]](function (k_xj4c8) {
    return H[0x3f] + k_xj4c8;
  }), ws97[H[0x40]](thi5)) : ws97 = [thi5];var h1w79i$ = H[0x41];const s9_wh5t = wx[H[0x42]]({ 'name': h1w79i$, 'success': function (i7htws) {
      var up8am3e = H[0x43];const evbgl2 = wx[H[0x42]]({ 'name': up8am3e, 'success': function (t7shw9i) {
          var jem38p = cc[H[0x17]][H[0x18]] === cc[H[0x17]][H[0x19]],
              t5xk4c_ = { 'id': H[0x44], 'scenes': e3aupm8[H[0x2c]], 'debugMode': e3aupm8[H[0x27]] ? cc[H[0x27]][H[0x45]][H[0x46]] : cc[H[0x27]][H[0x45]][H[0x47]], 'showFPS': !jem38p && e3aupm8[H[0x27]], 'frameRate': 0x3c, 'jsList': ws97, 'groupList': e3aupm8[H[0x48]], 'collisionMatrix': e3aupm8[H[0x49]] };cc[H[0x4a]][H[0x6]]({ 'libraryPath': H[0x4b], 'rawAssetsBase': H[0x4c], 'rawAssets': e3aupm8[H[0x29]], 'packedAssets': e3aupm8[H[0x2f]], 'md5AssetsMap': e3aupm8[H[0x4d]], 'subpackages': e3aupm8[H[0x30]] }), cc[H[0x1b]][H[0x4e]](t5xk4c_, ni6$1w7);
        }, 'fail': function (_kcs5t) {}, 'compelete': function (zdrqy0o) {} });
    }, 'fail': function (h7i9tw) {}, 'compelete': function (zq06nro) {} });
};