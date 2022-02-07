var H = wx.$F;
var fina3k = wx['$F'];const fbvika_ = require(H[0]),
      fxlew3n = fbvika_[H[1]],
      fb3a_k = fbvika_['fs'],
      fsjvd = wx[H[2]]();class fz6r891 {
  [H[3]](l40uxw, o1hc2) {
    var { root: r4p6t9, url: o1hc2 } = o1hc2;let r91z68 = r4p6t9 + o1hc2;if (RES[H[6]] && (r91z68 = RES[H[6]](r91z68)), !fxlew3n[H[7]](r91z68)) return fs$dvj(r91z68);if (fpt68r(r4p6t9, o1hc2)) {
      const bv_ika = fxlew3n[H[8]](r91z68);return fb3a_k[H[9]](bv_ika) ? fs$dvj(fxlew3n[H[11]](bv_ika)) : fpt4u06(r91z68, bv_ika)[H[12]](vs5d_ => (fb3a_k[H[62]](bv_ika, 0x1), fs$dvj(vs5d_)), $5djm => {
        console[H[31]]($5djm);
      });
    }return fs$dvj(r91z68);
  }[H[17]](sm, c9o1) {
    return Promise[H[18]]();
  }
}function fs$dvj(ikab3_) {
  return new Promise((t96r8, ulxp04) => {
    let $m7gqy = new egret[H[78]]();$m7gqy[H[79]](egret[H[80]][H[81]], () => {
      t96r8($m7gqy);
    }, this), $m7gqy[H[79]](egret[H[82]][H[83]], () => {
      var a3_bik = new RES[H[30]](0x3e9, ikab3_);ulxp04(a3_bik);
    }, this), $m7gqy[H[84]](ikab3_);
  });
}function fpt4u06(tr49p, bv_5ak) {
  return new Promise(($dygq, ka_3ib) => {
    var l0xn = fxlew3n[H[13]](bv_5ak);fb3a_k[H[14]](l0xn);const sdm$j5 = fxlew3n[H[11]](bv_5ak);wx[H[74]]({ 'url': tr49p, 'filePath': sdm$j5, 'success': mqyd$s => {
        if (0x190 <= mqyd$s[H[75]]) {
          try {
            fsjvd[H[46]](sdm$j5), fsjvd[H[42]](sdm$j5);
          } catch (ba_5kv) {}ka_3ib(H[76] + tr49p);
        } else $dygq(sdm$j5);
      }, 'fail': r81z => {
        var zo89 = new RES[H[30]](0x3e9, tr49p);ka_3ib(zo89);
      } });
  });
}function fpt68r(o1czh2, k_avb) {
  return 0x0 <= o1czh2[H[4]](H[33]);
}const fb_aki = new fz6r891();RES[H[34]][H[35]](H[85], fb_aki);