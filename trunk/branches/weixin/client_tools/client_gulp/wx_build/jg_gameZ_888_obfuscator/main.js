'use strict';

var H = wx.$F;
window[H[0x25]] = function () {
  var bm3pe2a = window[H[0x26]];window[H[0x26]] = undefined;if (!bm3pe2a[H[0x27]]) {
    var $ni6r7 = bm3pe2a[H[0x28]],
        m3u8pj = bm3pe2a[H[0x29]],
        euj38pm = bm3pe2a[H[0x2a]],
        x84ujk = bm3pe2a[H[0x29]] = {};for (var z0qdyr in m3u8pj) {
      var x_tcs5k = m3u8pj[z0qdyr],
          w97sh$i = x84ujk[z0qdyr] = {};for (var n6q0ozr in x_tcs5k) {
        var hs9t_w = x_tcs5k[n6q0ozr],
            m3eap2b = hs9t_w[-0x586 * -0x6 + -0x257b + 0x458];typeof m3eap2b === H[0x2b] && (hs9t_w[-0xd15 + -0x6ed + 0x1403] = euj38pm[m3eap2b]), w97sh$i[$ni6r7[n6q0ozr] || n6q0ozr] = hs9t_w;
      }
    }var dy0o = bm3pe2a[H[0x2c]];for (var n671w$ = -0x234a + -0x1 * 0xff1 + -0x2b * -0x131; n671w$ < dy0o[H[0x2d]]; ++n671w$) {
      var hiws5 = dy0o[n671w$];typeof hiws5[H[0x2e]] === H[0x2b] && (hiws5[H[0x2e]] = $ni6r7[hiws5[H[0x2e]]]);
    }var hn$wi71 = bm3pe2a[H[0x2f]];for (var n6$i1w in hn$wi71) {
      var z1n0r6$ = hn$wi71[n6$i1w];for (var hwi95t = 0x2 * -0x3ee + -0xe87 + 0xb * 0x209; hwi95t < z1n0r6$[H[0x2d]]; ++hwi95t) {
        typeof z1n0r6$[hwi95t] === H[0x2b] && (z1n0r6$[hwi95t] = $ni6r7[z1n0r6$[hwi95t]]);
      }
    }var qyz0o = bm3pe2a[H[0x30]];for (var qro0zd in qyz0o) {
      var ema2b3p = qyz0o[qro0zd][H[0x28]];if (ema2b3p) for (var r$17zn6 = -0x293 * 0xb + 0x9f * -0x1 + 0x1cf0, uxjk34 = ema2b3p[H[0x2d]]; r$17zn6 < uxjk34; r$17zn6++) {
        typeof ema2b3p[r$17zn6] === H[0x2b] && (ema2b3p[r$17zn6] = $ni6r7[ema2b3p[r$17zn6]]);
      }
    }
  }var qd0rz6 = function u8e3() {
    cc[H[0x12]][H[0x31]][H[0x32]] = bm3pe2a[H[0x30]], cc[H[0xc]][H[0x33]](!![]), cc[H[0xc]][H[0x34]](!![]);var eabm3p2 = bm3pe2a[H[0x35]];cc[H[0x36]][H[0x37]](eabm3p2, null, function () {
      cc[H[0x12]][H[0x38]] = null, console[H[0x39]](H[0x3a] + eabm3p2);
    });
  },
      vbagel = bm3pe2a[H[0x3b]],
      yor0q = bm3pe2a[H[0x27]] ? H[0x3c] : H[0x3d];vbagel ? (vbagel = vbagel[H[0x3e]](function (i$91h7w) {
    return H[0x3f] + i$91h7w;
  }), vbagel[H[0x40]](yor0q)) : vbagel = [yor0q];var mjp83 = H[0x41];const sw9i7$ = wx[H[0x42]]({ 'name': mjp83, 'success': function (nh7i) {
      var eamp = H[0x43];const pbeum = wx[H[0x42]]({ 'name': eamp, 'success': function (n0qzor) {
          var r0zq1n = cc[H[0x17]][H[0x18]] === cc[H[0x17]][H[0x19]],
              tswi9h5 = { 'id': H[0x44], 'scenes': bm3pe2a[H[0x2c]], 'debugMode': bm3pe2a[H[0x27]] ? cc[H[0x27]][H[0x45]][H[0x46]] : cc[H[0x27]][H[0x45]][H[0x47]], 'showFPS': !r0zq1n && bm3pe2a[H[0x27]], 'frameRate': 0x3c, 'jsList': vbagel, 'groupList': bm3pe2a[H[0x48]], 'collisionMatrix': bm3pe2a[H[0x49]] };cc[H[0x4a]][H[0x6]]({ 'libraryPath': H[0x4b], 'rawAssetsBase': H[0x4c], 'rawAssets': bm3pe2a[H[0x29]], 'packedAssets': bm3pe2a[H[0x2f]], 'md5AssetsMap': bm3pe2a[H[0x4d]], 'subpackages': bm3pe2a[H[0x30]] }), cc[H[0x1b]][H[0x4e]](tswi9h5, qd0rz6);
        }, 'fail': function (z10n$r) {}, 'compelete': function (_ch5t9s) {} });
    }, 'fail': function (sxt_c5) {}, 'compelete': function (v2bemal) {} });
};