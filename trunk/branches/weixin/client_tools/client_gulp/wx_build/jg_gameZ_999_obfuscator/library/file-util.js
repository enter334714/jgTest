var H = wx.$F;
var fl3xn = wx['$F'];const wxFs = wx[H[2]](),
      fvjs5d_ = wx[H[37]][H[38]] + '/';function f_jvds(n3lxe, ho21cz) {
  for (var oz981r of wxFs[H[39]](n3lxe)) {
    oz981r = n3lxe + '/' + oz981r;const len3 = wxFs[H[40]](oz981r);len3[H[41]]() ? f_jvds(oz981r, ho21cz) : ho21cz(oz981r);
  }
}function fqdm$ys(r689pt, vjk_a5) {
  for (var s5jmd$ of wxFs[H[39]](r689pt)) {
    s5jmd$ = r689pt + '/' + s5jmd$;const t40l = wxFs[H[40]](s5jmd$);t40l[H[41]]() && (fqdm$ys(s5jmd$, vjk_a5), vjk_a5(s5jmd$));
  }
}let ftp4l0 = {};const fjq$s = { 'remove': vj5k_ => {
    fjq$s[H[9]](vj5k_) && (f_jvds(vj5k_ = fvjs5d_ + vj5k_, dv5 => {
      wxFs[H[42]](dv5), dv5 = dv5[H[43]](fvjs5d_, ''), (dv5 = fsdym$[H[44]](dv5), ftp4l0[dv5] && (ftp4l0[dv5] = 0x0));
    }), fqdm$ys(vj5k_, niwe3 => {
      wxFs[H[45]](niwe3), niwe3 = niwe3[H[43]](fvjs5d_, ''), (niwe3 = fsdym$[H[44]](niwe3), ftp4l0[niwe3] && (ftp4l0[niwe3] = 0x0));
    }));
  }, 'existsSync': tup460 => {
    var aein3 = ftp4l0[tup460];if (0x0 == aein3) return !0x1;if (0x1 == aein3) return !0x0;try {
      return wxFs[H[46]](fvjs5d_ + tup460), (tup460 = fsdym$[H[44]](tup460)) && (ftp4l0[tup460] = 0x1), !0x0;
    } catch (u4p60) {
      return tup460 = fsdym$[H[44]](tup460), ftp4l0[tup460] = 0x0, !0x1;
    }
  }, 'writeSync': (qy$dgm, j_d5s) => {
    qy$dgm = fsdym$[H[44]](qy$dgm), ftp4l0[qy$dgm] = 0x1, wxFs[H[47]](fvjs5d_ + qy$dgm, j_d5s);
  }, 'readSync': (k_bvia, svd$5) => (svd$5 = svd$5 || H[48], wxFs[H[10]](fvjs5d_ + k_bvia, svd$5)), 'mkdirsSync': tu0p46 => {
    var wn3ex = Date[H[49]]();if (!fjq$s[H[9]](tu0p46)) {
      {
        var anki = tu0p46[H[22]]('/');let xl4p = '';for (let vib = 0x0; vib < anki[H[50]]; vib++) {
          var kai3_ = anki[vib];xl4p += kai3_ + '/', fjq$s[H[9]](xl4p) || (kai3_ = fsdym$[H[44]](xl4p), ftp4l0[kai3_] = 0x1, wxFs[H[51]](fvjs5d_ + xl4p));
        }
      }Date[H[49]]();
    }
  }, 'unzip': (r6t, $q7ymg) => (r6t = fvjs5d_ + r6t, $q7ymg = fvjs5d_ + $q7ymg, new Promise((lut0p4, ho2cz1) => {
    wxFs[H[52]]({ 'zipFilePath': r6t, 'targetPath': $q7ymg, 'success': () => {
        lut0p4();
      }, 'fail'(bnak) {
        ho2cz1(bnak);
      } });
  })), 'setFsCache': (bein3, z89o1c) => {
    ftp4l0[bein3] = z89o1c;
  } },
      fsdym$ = { 'dirname': t6rp4 => {
    const _sjvk5 = t6rp4[H[22]]('/');return _sjvk5[H[53]](), _sjvk5[H[54]]('/');
  }, 'isRemotePath': dsj5v => 0x0 == dsj5v[H[4]](H[55]) || 0x0 == dsj5v[H[4]](H[56]), 'normailze': p8tr69 => {
    var a3nibe = p8tr69[H[22]]('/');let sdyqm = p8tr69[H[22]]('/');for (var ksvj_5 of a3nibe) '' != ksvj_5 && null != ksvj_5 || (ksvj_5 = sdyqm[H[4]](ksvj_5), sdyqm[H[57]](ksvj_5, 0x1));if (0x0 < sdyqm[H[50]]) return sdyqm[H[54]]('/');
  }, 'getLocalFilePath': aeib3n => {
    for (var $gdyq in fsdym$[H[58]]) if (0x0 <= aeib3n[H[4]]($gdyq)) return aeib3n = aeib3n[H[43]]($gdyq, fsdym$[H[58]][$gdyq]), fsdym$[H[44]](aeib3n);return (0x0 <= aeib3n[H[4]](':') || 0x0 <= aeib3n[H[4]]('#') || 0x0 <= aeib3n[H[4]]('?')) && (aeib3n = aeib3n[H[43]](/[^a-z0-9.]/gi, '/')), fsdym$[H[44]](aeib3n);
  }, 'getWxUserPath': $dgqm => fvjs5d_ + $dgqm, 'localFileMap': {} };module[H[59]]['fs'] = fjq$s, module[H[59]][H[1]] = fsdym$;