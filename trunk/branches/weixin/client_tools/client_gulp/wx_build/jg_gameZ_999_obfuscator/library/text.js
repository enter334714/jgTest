var H = wx.$F;
var fqsm$dj = wx['$F'];const fxne3lw = require(H[0]),
      f$5sjd = fxne3lw[H[1]],
      ftlp0 = fxne3lw['fs'],
      f$smqdj = wx[H[2]]();class fu0lp4t {
  [H[3]]($gym7q, put64r) {
    const { root: nb3ka, url: r8z96 } = put64r;return new Promise((s_kj5, dsjv$) => {
      let dv$5js = 0x0 <= r8z96[H[4]](H[5]) ? r8z96 : nb3ka + r8z96;if (RES[H[6]] && (dv$5js = RES[H[6]](dv$5js)), f$5sjd[H[7]](dv$5js)) {
        if (fn3wei(nb3ka, r8z96)) {
          const _a5jk = f$5sjd[H[8]](dv$5js);ftlp0[H[9]](_a5jk) ? (ptul40 = ftlp0[H[86]](_a5jk, H[48]), s_kj5(ptul40)) : f$qmsd(dv$5js)[H[12]](b_akv5 => {
            var lxpu = f$5sjd[H[13]](_a5jk);ftlp0[H[14]](lxpu), ftlp0[H[15]](_a5jk, b_akv5), s_kj5(b_akv5);
          })[H[16]](ew0xu => {
            dsjv$(ew0xu);
          });
        } else f$qmsd(dv$5js)[H[12]](ul0p4t => {
          s_kj5(ul0p4t);
        })[H[16]](m$y7gq => {
          dsjv$(m$y7gq);
        });
      } else {
        var ptul40 = f$smqdj[H[10]](dv$5js, H[48]);s_kj5(ptul40);
      }
    });
  }[H[17]](jqs$m, ebni3) {
    return Promise[H[18]]();
  }
}function f$qmsd(gydqm) {
  return new Promise((pr6ut4, zo9r1) => {
    const oh2z = new XMLHttpRequest();oh2z[H[65]] = () => {
      var ab_i3;0x190 <= oh2z[H[87]] ? (ab_i3 = H[76] + gydqm, console[H[31]](ab_i3), zo9r1(ab_i3)) : pr6ut4(oh2z[H[88]]);
    }, oh2z[H[72]] = mqsd$j => {
      var p4u60 = new RES[H[30]](0x3e9, gydqm);console[H[31]](mqsd$j), zo9r1(p4u60);
    }, oh2z[H[89]](H[27], gydqm), oh2z[H[90]]();
  });
}function fn3wei($yq7mg, jd5$) {
  return 0x0 <= $yq7mg[H[4]](H[33]);
}const fjsvk_ = new fu0lp4t();RES[H[34]][H[35]](H[91], fjsvk_);