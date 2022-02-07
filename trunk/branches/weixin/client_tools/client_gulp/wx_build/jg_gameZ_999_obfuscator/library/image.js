var H = wx.$F;
var fsyqd$ = wx['$F'];const fu0lp4t = require(H[0]),
      fvk5_ba = fu0lp4t[H[1]],
      fulxp40 = fu0lp4t['fs'],
      fabe3n = wx[H[2]]();class fu0lp4 {
  [H[3]](r98pt, aivbk_) {
    let el0n;var { root: t9p4, url: z8or19, scale9grid: biv } = aivbk_;biv && (aivbk_ = aivbk_[H[60]][H[22]](','), el0n = new egret[H[61]](parseInt(aivbk_[0x0]), parseInt(aivbk_[0x1]), parseInt(aivbk_[0x2]), parseInt(aivbk_[0x3])));let rt6up = t9p4 + z8or19;if (RES[H[6]] && (rt6up = RES[H[6]](rt6up)), !fvk5_ba[H[7]](rt6up)) return fna3b(rt6up, el0n);if (!fibe3nw(t9p4, z8or19)) return fna3b(rt6up, el0n);const $sydqm = fvk5_ba[H[8]](rt6up);return fulxp40[H[9]]($sydqm) ? fna3b(fvk5_ba[H[11]]($sydqm), el0n) : fi_bvak(rt6up, $sydqm)[H[12]](bva_ => (fulxp40[H[62]]($sydqm, 0x1), fna3b(bva_, el0n)), p6rt8 => {
      console[H[31]](p6rt8);
    });
  }[H[17]](mgyq, enb3i) {
    let _vjsd = mgyq[H[27]](enb3i);return _vjsd[H[63]](), Promise[H[18]]();
  }
}let fm$sjq;function fna3b(j$s5vd, k_3bai) {
  return new Promise((w4lx, z68r1) => {
    const b_a5vk = wx[H[64]]();b_a5vk[H[65]] = () => {
      var g$dqym = new egret[H[66]](b_a5vk);const wl40u = new egret[H[67]]();wl40u[H[68]](g$dqym), k_3bai && (wl40u[H[69]] = k_3bai), null == fm$sjq && (fm$sjq = wx[H[19]]()), H[70] == fm$sjq[H[71]] ? setTimeout(() => {
        w4lx(wl40u);
      }, 0x0) : w4lx(wl40u);
    }, b_a5vk[H[72]] = qm$sd => {
      var iexn3 = new RES[H[30]](0x3e9, j$s5vd);z68r1(iexn3);
    }, b_a5vk[H[73]] = j$s5vd;
  });
}function fi_bvak(v5_jd, t69p8r) {
  return new Promise((jdv$s5, h1co2z) => {
    var wlxu0e = fvk5_ba[H[13]](t69p8r);fulxp40[H[14]](wlxu0e);const smd5j$ = fvk5_ba[H[11]](t69p8r);wx[H[74]]({ 'url': v5_jd, 'filePath': smd5j$, 'success': nb3iew => {
        if (0x190 <= nb3iew[H[75]]) {
          try {
            fabe3n[H[46]](smd5j$), fabe3n[H[42]](smd5j$);
          } catch (vd$5) {}h1co2z(H[76] + v5_jd);
        } else jdv$s5(smd5j$);
      }, 'fail': xe0wu => {
        var qdjm$ = new RES[H[30]](0x3e9, v5_jd);h1co2z(qdjm$);
      } });
  });
}function fibe3nw(r9z8o1, $mg7y) {
  return 0x0 <= r9z8o1[H[4]](H[33]);
}const f$yg7 = new fu0lp4();RES[H[34]][H[35]](H[77], f$yg7);