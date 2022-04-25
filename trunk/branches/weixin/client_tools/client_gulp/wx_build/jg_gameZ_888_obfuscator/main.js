'use strict';

var H = wx.$F;
window[H[0x27]] = function () {
  var j43ku8p = window[H[0x28]];window[H[0x28]] = undefined;if (!j43ku8p[H[0x29]]) {
    var w_9sht5 = j43ku8p[H[0x2a]],
        eu8a3mp = j43ku8p[H[0x2b]],
        uj8mep = j43ku8p[H[0x2c]],
        c_5xst9 = j43ku8p[H[0x2b]] = {};for (var a83pmeu in eu8a3mp) {
      var h9st5_w = eu8a3mp[a83pmeu],
          $rnz617 = c_5xst9[a83pmeu] = {};for (var $in7wh in h9st5_w) {
        var _9hsw5 = h9st5_w[$in7wh],
            n1$h7wi = _9hsw5[0x42a * -0x6 + 0x4 * -0x20f + -0x69 * -0x51];typeof n1$h7wi === H[0x2d] && (_9hsw5[0x1 * -0x1749 + 0xa * -0x5 + 0x177c] = uj8mep[n1$h7wi]), $rnz617[w_9sht5[$in7wh] || $in7wh] = _9hsw5;
      }
    }var hi19w7$ = j43ku8p[H[0x2e]];for (var lbamp2 = 0x1ecb + -0x1bcc + -0x2ff; lbamp2 < hi19w7$[H[0x2f]]; ++lbamp2) {
      var cx5t4_ = hi19w7$[lbamp2];typeof cx5t4_[H[0x30]] === H[0x2d] && (cx5t4_[H[0x30]] = w_9sht5[cx5t4_[H[0x30]]]);
    }var pumeab = j43ku8p[H[0x31]];for (var iws7t9 in pumeab) {
      var r$z671 = pumeab[iws7t9];for (var blv2a = -0xbb6 + -0x1793 + -0x2349 * -0x1; blv2a < r$z671[H[0x2f]]; ++blv2a) {
        typeof r$z671[blv2a] === H[0x2d] && (r$z671[blv2a] = w_9sht5[r$z671[blv2a]]);
      }
    }var q10rn6z = j43ku8p[H[0x32]];for (var k8ux4 in q10rn6z) {
      var kjc45 = q10rn6z[k8ux4][H[0x2a]];if (kjc45) for (var r160qn = -0x870 + 0x1d78 + -0x1508, hi719 = kjc45[H[0x2f]]; r160qn < hi719; r160qn++) {
        typeof kjc45[r160qn] === H[0x2d] && (kjc45[r160qn] = w_9sht5[kjc45[r160qn]]);
      }
    }
  }var ck5_4 = function i$7hnw() {
    cc[H[0x14]][H[0x33]][H[0x34]] = j43ku8p[H[0x32]], cc[H[0xe]][H[0x35]](!![]), cc[H[0xe]][H[0x36]](!![]);var hw9i$17 = j43ku8p[H[0x37]];cc[H[0x38]][H[0x39]](hw9i$17, null, function () {
      cc[H[0x14]][H[0x3a]] = null, console[H[0x3b]](H[0x3c] + hw9i$17);
    });
  },
      bl2em = j43ku8p[H[0x3d]],
      wh$s9i7 = j43ku8p[H[0x29]] ? H[0x3e] : H[0x3];bl2em ? (bl2em = bl2em[H[0x3f]](function (p8k3ju4) {
    return H[0x40] + p8k3ju4;
  }), bl2em[H[0x41]](wh$s9i7)) : bl2em = [wh$s9i7];var p2bem3 = H[0x42];const elbvg2 = wx[H[0x43]]({ 'name': p2bem3, 'success': function (cxkt_4) {
      var bap2e = H[0x44];const wni$7h = wx[H[0x43]]({ 'name': bap2e, 'success': function (is79wth) {
          var u8xcj = cc[H[0x19]][H[0x1a]] === cc[H[0x19]][H[0x1b]],
              _th95w = { 'id': H[0x45], 'scenes': j43ku8p[H[0x2e]], 'debugMode': j43ku8p[H[0x29]] ? cc[H[0x29]][H[0x46]][H[0x47]] : cc[H[0x29]][H[0x46]][H[0x48]], 'showFPS': !u8xcj && j43ku8p[H[0x29]], 'frameRate': 0x3c, 'jsList': bl2em, 'groupList': j43ku8p[H[0x49]], 'collisionMatrix': j43ku8p[H[0x4a]] };cc[H[0x4b]][H[0x8]]({ 'libraryPath': H[0x4c], 'rawAssetsBase': H[0x4d], 'rawAssets': j43ku8p[H[0x2b]], 'packedAssets': j43ku8p[H[0x31]], 'md5AssetsMap': j43ku8p[H[0x4e]], 'subpackages': j43ku8p[H[0x32]] }), cc[H[0x1d]][H[0x4f]](_th95w, ck5_4);
        }, 'fail': function (or06qz) {}, 'compelete': function (s5xtck_) {} });
    }, 'fail': function (x5k4_t) {}, 'compelete': function (kj34x8) {} });
};