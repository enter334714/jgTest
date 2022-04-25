'use strict';

var H = wx.$F;
window[H[0x27]] = function () {
  var sc5_t9 = window[H[0x28]];window[H[0x28]] = undefined;if (!sc5_t9[H[0x29]]) {
    var $71ih = sc5_t9[H[0x2a]],
        qdrz0 = sc5_t9[H[0x2b]],
        zr106n = sc5_t9[H[0x2c]],
        kjc4_ = sc5_t9[H[0x2b]] = {};for (var zrq06n in qdrz0) {
      var ae3bmp = qdrz0[zrq06n],
          jp483u = kjc4_[zrq06n] = {};for (var vl2aeb in ae3bmp) {
        var u83mep = ae3bmp[vl2aeb],
            j4u8p3 = u83mep[-0x1a * 0x53 + -0x92b + 0x8cd * 0x2];typeof j4u8p3 === H[0x2d] && (u83mep[-0xb93 + -0x1 * -0xb08 + 0xe * 0xa] = zr106n[j4u8p3]), jp483u[$71ih[vl2aeb] || vl2aeb] = u83mep;
      }
    }var el2avb = sc5_t9[H[0x2e]];for (var s97w = 0x286 + -0x177a + -0xa7a * -0x2; s97w < el2avb[H[0x2f]]; ++s97w) {
      var isw97 = el2avb[s97w];typeof isw97[H[0x30]] === H[0x2d] && (isw97[H[0x30]] = $71ih[isw97[H[0x30]]]);
    }var x5_tk = sc5_t9[H[0x31]];for (var nq6z0 in x5_tk) {
      var vbal = x5_tk[nq6z0];for (var upa = 0x2 * 0xaab + -0x40 * -0x56 + 0x156b * -0x2; upa < vbal[H[0x2f]]; ++upa) {
        typeof vbal[upa] === H[0x2d] && (vbal[upa] = $71ih[vbal[upa]]);
      }
    }var xc_4j = sc5_t9[H[0x32]];for (var $671i in xc_4j) {
      var h9tiws = xc_4j[$671i][H[0x2a]];if (h9tiws) for (var c5_9s = 0x1dde + -0xce3 * -0x1 + -0x2ac1, ag2lvb = h9tiws[H[0x2f]]; c5_9s < ag2lvb; c5_9s++) {
        typeof h9tiws[c5_9s] === H[0x2d] && (h9tiws[c5_9s] = $71ih[h9tiws[c5_9s]]);
      }
    }
  }var zdy = function _xs5() {
    cc[H[0x14]][H[0x33]][H[0x34]] = sc5_t9[H[0x32]], cc[H[0xe]][H[0x35]](!![]), cc[H[0xe]][H[0x36]](!![]);var kj384u = sc5_t9[H[0x37]];cc[H[0x38]][H[0x39]](kj384u, null, function () {
      cc[H[0x14]][H[0x3a]] = null, console[H[0x3b]](H[0x3c] + kj384u);
    });
  },
      m8jpu3 = sc5_t9[H[0x3d]],
      e8mp3u = sc5_t9[H[0x29]] ? H[0x3e] : H[0x3];m8jpu3 ? (m8jpu3 = m8jpu3[H[0x3f]](function (tw9ih) {
    return H[0x40] + tw9ih;
  }), m8jpu3[H[0x41]](e8mp3u)) : m8jpu3 = [e8mp3u];var st9_c5 = H[0x42];const w9h7si = wx[H[0x43]]({ 'name': st9_c5, 'success': function (c5_s) {
      var va2ebl = H[0x44];const qozdy0 = wx[H[0x43]]({ 'name': va2ebl, 'success': function (x_4jc) {
          var l2ma = cc[H[0x19]][H[0x1a]] === cc[H[0x19]][H[0x1b]],
              lem2 = { 'id': H[0x45], 'scenes': sc5_t9[H[0x2e]], 'debugMode': sc5_t9[H[0x29]] ? cc[H[0x29]][H[0x46]][H[0x47]] : cc[H[0x29]][H[0x46]][H[0x48]], 'showFPS': !l2ma && sc5_t9[H[0x29]], 'frameRate': 0x3c, 'jsList': m8jpu3, 'groupList': sc5_t9[H[0x49]], 'collisionMatrix': sc5_t9[H[0x4a]] };cc[H[0x4b]][H[0x8]]({ 'libraryPath': H[0x4c], 'rawAssetsBase': H[0x4d], 'rawAssets': sc5_t9[H[0x2b]], 'packedAssets': sc5_t9[H[0x31]], 'md5AssetsMap': sc5_t9[H[0x4e]], 'subpackages': sc5_t9[H[0x32]] }), cc[H[0x1d]][H[0x4f]](lem2, zdy);
        }, 'fail': function (rz0dq) {}, 'compelete': function (ckj48x) {} });
    }, 'fail': function (puem) {}, 'compelete': function (pe83um) {} });
};