var H = wx.$F;
var fvs$j = wx['$F'];const fkj_5av = require(H[0]),
      frpt4 = fkj_5av[H[1]],
      fxw3ln = fkj_5av['fs'],
      fy7gq$m = wx[H[2]]();class ftp40lu {
  [H[3]](dqmgy, co18z9) {
    const { root: ho21z, url: sj_vk } = co18z9;return new Promise((nibk3a, ydmqs$) => {
      let t40u = 0x0 <= sj_vk[H[4]](H[5]) ? sj_vk : ho21z + sj_vk;if (RES[H[6]] && (t40u = RES[H[6]](t40u)), frpt4[H[7]](t40u)) {
        if (fdv$js5(t40u)) {
          const c8z91o = frpt4[H[8]](t40u);var ixwe;fxw3ln[H[9]](c8z91o) ? (ixwe = fy7gq$m[H[10]](frpt4[H[11]](c8z91o)), nibk3a(ixwe)) : fdj_v(t40u)[H[12]](nl3e => {
            var m7q = frpt4[H[13]](c8z91o);fxw3ln[H[14]](m7q), fxw3ln[H[15]](c8z91o, nl3e), fpx04ul() && (nl3e = fy7gq$m[H[10]](frpt4[H[11]](c8z91o))), nibk3a(nl3e);
          })[H[16]](r916z8 => {
            ydmqs$(r916z8);
          });
        } else fdj_v(t40u)[H[12]](l4px => {
          nibk3a(l4px);
        })[H[16]](m$ydq => {
          ydmqs$(m$ydq);
        });
      } else try {
        var $7ygqm = fy7gq$m[H[10]](t40u);nibk3a($7ygqm);
      } catch (z98o1r) {
        nibk3a(null);
      }
    });
  }[H[17]](ulew, js$q) {
    return Promise[H[18]]();
  }
}let wxSystemInfo;function fpx04ul() {
  wxSystemInfo = wxSystemInfo || wx[H[19]]();var roz19 = wxSystemInfo[H[20]],
      eina3b = wxSystemInfo[H[21]][H[22]]('\x20')[H[23]]();return roz19 <= H[24] && H[25] == eina3b;
}function fdj_v(nw3be) {
  return new Promise((wlnx3e, g$mdy) => {
    wx[H[26]]({ 'url': nw3be, 'method': H[27], 'responseType': H[28], 'success': function (sv$) {
        wlnx3e(sv$[H[29]]);
      }, 'fail': function (m7q$yg) {
        var b_ki3a = new RES[H[30]](0x3e9, nw3be);console[H[31]](H[32], nw3be), g$mdy(b_ki3a);
      } });
  });
}function fdv$js5(hoz21) {
  return 0x0 <= hoz21[H[4]](H[33]);
}const fu64prt = new ftp40lu();RES[H[34]][H[35]](H[36], fu64prt);