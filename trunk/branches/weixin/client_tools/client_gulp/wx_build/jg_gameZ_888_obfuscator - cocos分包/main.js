'use strict';

var H = wx.$F;
window[H[0x27]] = function () {
  var h$isw7 = window[H[0x28]];window[H[0x28]] = undefined;if (!h$isw7[H[0x29]]) {
    var is9t5hw = h$isw7[H[0x2a]],
        nz10r6q = h$isw7[H[0x2b]],
        aeb2vg = h$isw7[H[0x2c]],
        vlbgae2 = h$isw7[H[0x2b]] = {};for (var e32 in nz10r6q) {
      var lvbm2 = nz10r6q[e32],
          zn$r167 = vlbgae2[e32] = {};for (var p38m4u in lvbm2) {
        var i$76n1 = lvbm2[p38m4u],
            jx4k8u = i$76n1[0x1a16 + 0x211 + -0x1c26];typeof jx4k8u === H[0x2d] && (i$76n1[-0x216a + 0xac + -0x53 * -0x65] = aeb2vg[jx4k8u]), zn$r167[is9t5hw[p38m4u] || p38m4u] = i$76n1;
      }
    }var v2almbe = h$isw7[H[0x2e]];for (var thiw97s = -0xb5 * 0x1 + -0x1d49 + -0x16 * -0x15d; thiw97s < v2almbe[H[0x2f]]; ++thiw97s) {
      var tsh5c_9 = v2almbe[thiw97s];typeof tsh5c_9[H[0x30]] === H[0x2d] && (tsh5c_9[H[0x30]] = is9t5hw[tsh5c_9[H[0x30]]]);
    }var maep3bu = h$isw7[H[0x31]];for (var q6d0zr in maep3bu) {
      var z16$r0 = maep3bu[q6d0zr];for (var m2epal = 0xf6a + -0xac * 0x2f + 0x2 * 0x815; m2epal < z16$r0[H[0x2f]]; ++m2epal) {
        typeof z16$r0[m2epal] === H[0x2d] && (z16$r0[m2epal] = is9t5hw[z16$r0[m2epal]]);
      }
    }var mu438j = h$isw7[H[0x32]];for (var gva2l in mu438j) {
      var u4kxcj = mu438j[gva2l][H[0x2a]];if (u4kxcj) for (var w$n716i = 0x22fb + -0x1fe + -0x20fd, oqz0n6 = u4kxcj[H[0x2f]]; w$n716i < oqz0n6; w$n716i++) {
        typeof u4kxcj[w$n716i] === H[0x2d] && (u4kxcj[w$n716i] = is9t5hw[u4kxcj[w$n716i]]);
      }
    }
  }var uap3em8 = function $niw76() {
    cc[H[0x14]][H[0x33]][H[0x34]] = h$isw7[H[0x32]], cc[H[0xe]][H[0x35]](!![]), cc[H[0xe]][H[0x36]](!![]);var valge2b = h$isw7[H[0x37]];cc[H[0x38]][H[0x39]](valge2b, null, function () {
      cc[H[0x14]][H[0x3a]] = null, console[H[0x3b]](H[0x3c] + valge2b);
    });
  },
      aue3bp = h$isw7[H[0x3d]],
      jume38 = h$isw7[H[0x29]] ? H[0x3e] : H[0x3];aue3bp ? (aue3bp = aue3bp[H[0x3f]](function (m2pbael) {
    return H[0x40] + m2pbael;
  }), aue3bp[H[0x41]](jume38)) : aue3bp = [jume38];var _5k4jc = H[0x42];const jx84uk3 = wx[H[0x43]]({ 'name': _5k4jc, 'success': function (sw$h9) {
      var win67$1 = H[0x44];const b2malev = wx[H[0x43]]({ 'name': win67$1, 'success': function (t54k_x) {
          var abl2vg = cc[H[0x19]][H[0x1a]] === cc[H[0x19]][H[0x1b]],
              ea8up = { 'id': H[0x45], 'scenes': h$isw7[H[0x2e]], 'debugMode': h$isw7[H[0x29]] ? cc[H[0x29]][H[0x46]][H[0x47]] : cc[H[0x29]][H[0x46]][H[0x48]], 'showFPS': !abl2vg && h$isw7[H[0x29]], 'frameRate': 0x3c, 'jsList': aue3bp, 'groupList': h$isw7[H[0x49]], 'collisionMatrix': h$isw7[H[0x4a]] };cc[H[0x4b]][H[0x8]]({ 'libraryPath': H[0x4c], 'rawAssetsBase': H[0x4d], 'rawAssets': h$isw7[H[0x2b]], 'packedAssets': h$isw7[H[0x31]], 'md5AssetsMap': h$isw7[H[0x4e]], 'subpackages': h$isw7[H[0x32]] }), cc[H[0x1d]][H[0x4f]](ea8up, uap3em8);
        }, 'fail': function (xj_k4c) {}, 'compelete': function (i917) {} });
    }, 'fail': function (jk834) {}, 'compelete': function (vlmaeb2) {} });
};