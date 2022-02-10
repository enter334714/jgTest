'use strict';

var _ = wx.y$;
(function () {
  'use strict';

  var wstxu = void 0x0,
      dgbcef = window;function lnmkoj(hgjik, wz$yx) {
    var opst = hgjik['split']('.'),
        jmhil = dgbcef;!(opst[0x0] in jmhil) && jmhil['execScript'] && jmhil['execScript']('var ' + opst[0x0]);for (var vsrutq; opst['length'] && (vsrutq = opst['shift']());) !opst['length'] && wz$yx !== wstxu ? jmhil[vsrutq] = wz$yx : jmhil = jmhil[vsrutq] ? jmhil[vsrutq] : jmhil[vsrutq] = {};
  };var jm = 'undefined' !== typeof Uint8Array && 'undefined' !== typeof Uint16Array && 'undefined' !== typeof Uint32Array && 'undefined' !== typeof DataView;function _132$0(sqtrop) {
    var ijhmk = sqtrop['length'],
        yxzwuv = 0x0,
        opqsnr = Number['POSITIVE_INFINITY'],
        yw$xz_,
        usqtp,
        lijmn,
        mpoknl,
        w$zy_,
        ilg,
        mlikjh,
        xwy_z,
        jhifg,
        qpsto;for (xwy_z = 0x0; xwy_z < ijhmk; ++xwy_z) sqtrop[xwy_z] > yxzwuv && (yxzwuv = sqtrop[xwy_z]), sqtrop[xwy_z] < opqsnr && (opqsnr = sqtrop[xwy_z]);yw$xz_ = 0x1 << yxzwuv, usqtp = new (jm ? Uint32Array : Array)(yw$xz_), lijmn = 0x1, mpoknl = 0x0;for (w$zy_ = 0x2; lijmn <= yxzwuv;) {
      for (xwy_z = 0x0; xwy_z < ijhmk; ++xwy_z) if (sqtrop[xwy_z] === lijmn) {
        ilg = 0x0, mlikjh = mpoknl;for (jhifg = 0x0; jhifg < lijmn; ++jhifg) ilg = ilg << 0x1 | mlikjh & 0x1, mlikjh >>= 0x1;qpsto = lijmn << 0x10 | xwy_z;for (jhifg = ilg; jhifg < yw$xz_; jhifg += w$zy_) usqtp[jhifg] = qpsto;++mpoknl;
      }++lijmn, mpoknl <<= 0x1, w$zy_ <<= 0x1;
    }return [usqtp, yxzwuv, opqsnr];
  };function ehij(trpsqu, wz$_xy) {
    this['g'] = [], this['h'] = 0x8000, this['d'] = this['f'] = this['a'] = this['l'] = 0x0, this['input'] = jm ? new Uint8Array(trpsqu) : trpsqu, this['m'] = !0x1, this['i'] = injmk, this['r'] = !0x1;if (wz$_xy || !(wz$_xy = {})) wz$_xy['index'] && (this['a'] = wz$_xy['index']), wz$_xy['bufferSize'] && (this['h'] = wz$_xy['bufferSize']), wz$_xy['bufferType'] && (this['i'] = wz$_xy['bufferType']), wz$_xy['resize'] && (this['r'] = wz$_xy['resize']);switch (this['i']) {case ifhdeg:
        this['b'] = 0x8000, this['c'] = new (jm ? Uint8Array : Array)(0x8000 + this['h'] + 0x102);break;case injmk:
        this['b'] = 0x0, this['c'] = new (jm ? Uint8Array : Array)(this['h']), this['e'] = this['z'], this['n'] = this['v'], this['j'] = this['w'];break;default:
        throw Error('invalid inflate mode');}
  }var ifhdeg = 0x0,
      injmk = 0x1,
      $x0yz_ = { 't': ifhdeg, 's': injmk };ehij['prototype']['k'] = function () {
    for (; !this['m'];) {
      var lgjk = ihe(this, 0x3);lgjk & 0x1 && (this['m'] = !0x0), lgjk >>>= 0x1;switch (lgjk) {case 0x0:
          var xzvy = this['input'],
              qu = this['a'],
              hfjeig = this['c'],
              x$_zwy = this['b'],
              ceadf = xzvy['length'],
              klimn = wstxu,
              vzyux = wstxu,
              gfdecb = hfjeig['length'],
              lqmop = wstxu;this['d'] = this['f'] = 0x0;if (qu + 0x1 >= ceadf) throw Error('invalid uncompressed block header: LEN');klimn = xzvy[qu++] | xzvy[qu++] << 0x8;if (qu + 0x1 >= ceadf) throw Error('invalid uncompressed block header: NLEN');vzyux = xzvy[qu++] | xzvy[qu++] << 0x8;if (klimn === ~vzyux) throw Error('invalid uncompressed block header: length verify');if (qu + klimn > xzvy['length']) throw Error('input buffer is broken');switch (this['i']) {case ifhdeg:
              for (; x$_zwy + klimn > hfjeig['length'];) {
                lqmop = gfdecb - x$_zwy, klimn -= lqmop;if (jm) hfjeig['set'](xzvy['subarray'](qu, qu + lqmop), x$_zwy), x$_zwy += lqmop, qu += lqmop;else {
                  for (; lqmop--;) hfjeig[x$_zwy++] = xzvy[qu++];
                }this['b'] = x$_zwy, hfjeig = this['e'](), x$_zwy = this['b'];
              }break;case injmk:
              for (; x$_zwy + klimn > hfjeig['length'];) hfjeig = this['e']({ 'p': 0x2 });break;default:
              throw Error('invalid inflate mode');}if (jm) hfjeig['set'](xzvy['subarray'](qu, qu + klimn), x$_zwy), x$_zwy += klimn, qu += klimn;else {
            for (; klimn--;) hfjeig[x$_zwy++] = xzvy[qu++];
          }this['a'] = qu, this['b'] = x$_zwy, this['c'] = hfjeig;break;case 0x1:
          this['j'](twrsv, utxvwy);break;case 0x2:
          for (var jkghif = ihe(this, 0x5) + 0x101, fedgb = ihe(this, 0x5) + 0x1, nrpsoq = ihe(this, 0x4) + 0x4, ljgih = new (jm ? Uint8Array : Array)(pnqor['length']), ljknmi = wstxu, rvwus = wstxu, vtw = wstxu, hcfge = wstxu, rvtws = wstxu, komjl = wstxu, psutr = wstxu, xwvtuy = wstxu, svuwrt = wstxu, xwvtuy = 0x0; xwvtuy < nrpsoq; ++xwvtuy) ljgih[pnqor[xwvtuy]] = ihe(this, 0x3);if (!jm) {
            xwvtuy = nrpsoq;for (nrpsoq = ljgih['length']; xwvtuy < nrpsoq; ++xwvtuy) ljgih[pnqor[xwvtuy]] = 0x0;
          }ljknmi = _132$0(ljgih), hcfge = new (jm ? Uint8Array : Array)(jkghif + fedgb), xwvtuy = 0x0;for (svuwrt = jkghif + fedgb; xwvtuy < svuwrt;) switch (rvtws = opqmnl(this, ljknmi), rvtws) {case 0x10:
              for (psutr = 0x3 + ihe(this, 0x2); psutr--;) hcfge[xwvtuy++] = komjl;break;case 0x11:
              for (psutr = 0x3 + ihe(this, 0x3); psutr--;) hcfge[xwvtuy++] = 0x0;komjl = 0x0;break;case 0x12:
              for (psutr = 0xb + ihe(this, 0x7); psutr--;) hcfge[xwvtuy++] = 0x0;komjl = 0x0;break;default:
              komjl = hcfge[xwvtuy++] = rvtws;}rvwus = jm ? _132$0(hcfge['subarray'](0x0, jkghif)) : _132$0(hcfge['slice'](0x0, jkghif)), vtw = jm ? _132$0(hcfge['subarray'](jkghif)) : _132$0(hcfge['slice'](jkghif)), this['j'](rvwus, vtw);break;default:
          throw Error('unknown BTYPE: ' + lgjk);}
    }return this['n']();
  };var _wyx$ = [0x10, 0x11, 0x12, 0x0, 0x8, 0x7, 0x9, 0x6, 0xa, 0x5, 0xb, 0x4, 0xc, 0x3, 0xd, 0x2, 0xe, 0x1, 0xf],
      pnqor = jm ? new Uint16Array(_wyx$) : _wyx$,
      nmplq = [0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xd, 0xf, 0x11, 0x13, 0x17, 0x1b, 0x1f, 0x23, 0x2b, 0x33, 0x3b, 0x43, 0x53, 0x63, 0x73, 0x83, 0xa3, 0xc3, 0xe3, 0x102, 0x102, 0x102],
      tusrq = jm ? new Uint16Array(nmplq) : nmplq,
      opstrq = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x4, 0x5, 0x5, 0x5, 0x5, 0x0, 0x0, 0x0],
      pqts = jm ? new Uint8Array(opstrq) : opstrq,
      lnko = [0x1, 0x2, 0x3, 0x4, 0x5, 0x7, 0x9, 0xd, 0x11, 0x19, 0x21, 0x31, 0x41, 0x61, 0x81, 0xc1, 0x101, 0x181, 0x201, 0x301, 0x401, 0x601, 0x801, 0xc01, 0x1001, 0x1801, 0x2001, 0x3001, 0x4001, 0x6001],
      stvu = jm ? new Uint16Array(lnko) : lnko,
      mkloj = [0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x7, 0x8, 0x8, 0x9, 0x9, 0xa, 0xa, 0xb, 0xb, 0xc, 0xc, 0xd, 0xd],
      rptqos = jm ? new Uint8Array(mkloj) : mkloj,
      qoprst = new (jm ? Uint8Array : Array)(0x120),
      lkgjh,
      iln;lkgjh = 0x0;for (iln = qoprst['length']; lkgjh < iln; ++lkgjh) qoprst[lkgjh] = 0x8f >= lkgjh ? 0x8 : 0xff >= lkgjh ? 0x9 : 0x117 >= lkgjh ? 0x7 : 0x8;var twrsv = _132$0(qoprst),
      utwvx = new (jm ? Uint8Array : Array)(0x1e),
      jfhie,
      qsptor;jfhie = 0x0;for (qsptor = utwvx['length']; jfhie < qsptor; ++jfhie) utwvx[jfhie] = 0x5;var utxvwy = _132$0(utwvx);function ihe(z$_0, zvwuy) {
    for (var vxuzyw = z$_0['f'], fjhgei = z$_0['d'], onrsq = z$_0['input'], hegcf = z$_0['a'], nokmjl = onrsq['length'], khgf; fjhgei < zvwuy;) {
      if (hegcf >= nokmjl) throw Error('input buffer is broken');vxuzyw |= onrsq[hegcf++] << fjhgei, fjhgei += 0x8;
    }return khgf = vxuzyw & (0x1 << zvwuy) - 0x1, z$_0['f'] = vxuzyw >>> zvwuy, z$_0['d'] = fjhgei - zvwuy, z$_0['a'] = hegcf, khgf;
  }function opqmnl(dgheif, jehif) {
    for (var ponrs = dgheif['f'], knmljo = dgheif['d'], dgfech = dgheif['input'], _102z$ = dgheif['a'], pmrq = dgfech['length'], $0z_x = jehif[0x0], xvzw = jehif[0x1], tvrsw, pnqomr; knmljo < xvzw && !(_102z$ >= pmrq);) ponrs |= dgfech[_102z$++] << knmljo, knmljo += 0x8;tvrsw = $0z_x[ponrs & (0x1 << xvzw) - 0x1], pnqomr = tvrsw >>> 0x10;if (pnqomr > knmljo) throw Error('invalid code length: ' + pnqomr);return dgheif['f'] = ponrs >> pnqomr, dgheif['d'] = knmljo - pnqomr, dgheif['a'] = _102z$, tvrsw & 0xffff;
  }ehij['prototype']['j'] = function (ecbad, nkompl) {
    var $_yxz = this['c'],
        utrvs = this['b'];this['o'] = ecbad;for (var rmo = $_yxz['length'] - 0x102, nsorq, zxyv$w, idhge, qorp; 0x100 !== (nsorq = opqmnl(this, ecbad));) if (0x100 > nsorq) utrvs >= rmo && (this['b'] = utrvs, $_yxz = this['e'](), utrvs = this['b']), $_yxz[utrvs++] = nsorq;else {
      zxyv$w = nsorq - 0x101, qorp = tusrq[zxyv$w], 0x0 < pqts[zxyv$w] && (qorp += ihe(this, pqts[zxyv$w])), nsorq = opqmnl(this, nkompl), idhge = stvu[nsorq], 0x0 < rptqos[nsorq] && (idhge += ihe(this, rptqos[nsorq])), utrvs >= rmo && (this['b'] = utrvs, $_yxz = this['e'](), utrvs = this['b']);for (; qorp--;) $_yxz[utrvs] = $_yxz[utrvs++ - idhge];
    }for (; 0x8 <= this['d'];) this['d'] -= 0x8, this['a']--;this['b'] = utrvs;
  }, ehij['prototype']['w'] = function (z1_$2, gfdc) {
    var bad = this['c'],
        oqnrps = this['b'];this['o'] = z1_$2;for (var nomlk = bad['length'], wsuv, eigdfh, mprq, w_yz$; 0x100 !== (wsuv = opqmnl(this, z1_$2));) if (0x100 > wsuv) oqnrps >= nomlk && (bad = this['e'](), nomlk = bad['length']), bad[oqnrps++] = wsuv;else {
      eigdfh = wsuv - 0x101, w_yz$ = tusrq[eigdfh], 0x0 < pqts[eigdfh] && (w_yz$ += ihe(this, pqts[eigdfh])), wsuv = opqmnl(this, gfdc), mprq = stvu[wsuv], 0x0 < rptqos[wsuv] && (mprq += ihe(this, rptqos[wsuv])), oqnrps + w_yz$ > nomlk && (bad = this['e'](), nomlk = bad['length']);for (; w_yz$--;) bad[oqnrps] = bad[oqnrps++ - mprq];
    }for (; 0x8 <= this['d'];) this['d'] -= 0x8, this['a']--;this['b'] = oqnrps;
  }, ehij['prototype']['e'] = function () {
    var otspr = new (jm ? Uint8Array : Array)(this['b'] - 0x8000),
        jmkoln = this['b'] - 0x8000,
        dbecgf,
        lkmnji,
        kjgihl = this['c'];if (jm) otspr['set'](kjgihl['subarray'](0x8000, otspr['length']));else {
      dbecgf = 0x0;for (lkmnji = otspr['length']; dbecgf < lkmnji; ++dbecgf) otspr[dbecgf] = kjgihl[dbecgf + 0x8000];
    }this['g']['push'](otspr), this['l'] += otspr['length'];if (jm) kjgihl['set'](kjgihl['subarray'](jmkoln, jmkoln + 0x8000));else {
      for (dbecgf = 0x0; 0x8000 > dbecgf; ++dbecgf) kjgihl[dbecgf] = kjgihl[jmkoln + dbecgf];
    }return this['b'] = 0x8000, kjgihl;
  }, ehij['prototype']['z'] = function (qursv) {
    var hidef,
        ronmq = this['input']['length'] / this['a'] + 0x1 | 0x0,
        kjlimn,
        ihjkg,
        hde,
        trvusq = this['input'],
        gjkhi = this['c'];return qursv && ('number' === typeof qursv['p'] && (ronmq = qursv['p']), 'number' === typeof qursv['u'] && (ronmq += qursv['u'])), 0x2 > ronmq ? (kjlimn = (trvusq['length'] - this['a']) / this['o'][0x2], hde = 0x102 * (kjlimn / 0x2) | 0x0, ihjkg = hde < gjkhi['length'] ? gjkhi['length'] + hde : gjkhi['length'] << 0x1) : ihjkg = gjkhi['length'] * ronmq, jm ? (hidef = new Uint8Array(ihjkg), hidef['set'](gjkhi)) : hidef = gjkhi, this['c'] = hidef;
  }, ehij['prototype']['n'] = function () {
    var bcaf = 0x0,
        x_0$yz = this['c'],
        _21$z = this['g'],
        ropnm,
        njok = new (jm ? Uint8Array : Array)(this['l'] + (this['b'] - 0x8000)),
        dgh,
        upsrtq,
        rqtups,
        mnikl;if (0x0 === _21$z['length']) return jm ? this['c']['subarray'](0x8000, this['b']) : this['c']['slice'](0x8000, this['b']);dgh = 0x0;for (upsrtq = _21$z['length']; dgh < upsrtq; ++dgh) {
      ropnm = _21$z[dgh], rqtups = 0x0;for (mnikl = ropnm['length']; rqtups < mnikl; ++rqtups) njok[bcaf++] = ropnm[rqtups];
    }dgh = 0x8000;for (upsrtq = this['b']; dgh < upsrtq; ++dgh) njok[bcaf++] = x_0$yz[dgh];return this['g'] = [], this['buffer'] = njok;
  }, ehij['prototype']['v'] = function () {
    var osprqt,
        twrus = this['b'];return jm ? this['r'] ? (osprqt = new Uint8Array(twrus), osprqt['set'](this['c']['subarray'](0x0, twrus))) : osprqt = this['c']['subarray'](0x0, twrus) : (this['c']['length'] > twrus && (this['c']['length'] = twrus), osprqt = this['c']), this['buffer'] = osprqt;
  };function jmlikn($xz_y0, vtusw) {
    var wzxv, jeifg;this['input'] = $xz_y0, this['a'] = 0x0;if (vtusw || !(vtusw = {})) vtusw['index'] && (this['a'] = vtusw['index']), vtusw['verify'] && (this['A'] = vtusw['verify']);wzxv = $xz_y0[this['a']++], jeifg = $xz_y0[this['a']++];switch (wzxv & 0xf) {case $_301:
        this['method'] = $_301;break;default:
        throw Error('unsupported compression method');}if (0x0 !== ((wzxv << 0x8) + jeifg) % 0x1f) throw Error('invalid fcheck flag:' + ((wzxv << 0x8) + jeifg) % 0x1f);if (jeifg & 0x20) throw Error('fdict flag is not supported');this['q'] = new ehij($xz_y0, { 'index': this['a'], 'bufferSize': vtusw['bufferSize'], 'bufferType': vtusw['bufferType'], 'resize': vtusw['resize'] });
  }jmlikn['prototype']['k'] = function () {
    var fhd = this['input'],
        yvzxuw,
        igljhk;yvzxuw = this['q']['k'](), this['a'] = this['q']['a'];if (this['A']) {
      igljhk = (fhd[this['a']++] << 0x18 | fhd[this['a']++] << 0x10 | fhd[this['a']++] << 0x8 | fhd[this['a']++]) >>> 0x0;var nlkmpo = yvzxuw;if ('string' === typeof nlkmpo) {
        var z20 = nlkmpo['split'](''),
            jglhki,
            klp;jglhki = 0x0;for (klp = z20['length']; jglhki < klp; jglhki++) z20[jglhki] = (z20[jglhki]['charCodeAt'](0x0) & 0xff) >>> 0x0;nlkmpo = z20;
      }for (var efhgdi = 0x1, ijlkh = 0x0, lqnop = nlkmpo['length'], tqspro, ijlkn = 0x0; 0x0 < lqnop;) {
        tqspro = 0x400 < lqnop ? 0x400 : lqnop, lqnop -= tqspro;do efhgdi += nlkmpo[ijlkn++], ijlkh += efhgdi; while (--tqspro);efhgdi %= 0xfff1, ijlkh %= 0xfff1;
      }if (igljhk !== (ijlkh << 0x10 | efhgdi) >>> 0x0) throw Error('invalid adler-32 checksum');
    }return yvzxuw;
  };var $_301 = 0x8;lnmkoj('Zlib.Inflate', jmlikn), lnmkoj('Zlib.Inflate.prototype.decompress', jmlikn['prototype']['k']);var dcabf = { 'ADAPTIVE': $x0yz_['s'], 'BLOCK': $x0yz_['t'] },
      zwvy,
      gkjfi,
      zxvwy$,
      rtpqsu;if (Object['keys']) zwvy = Object['keys'](dcabf);else {
    for (gkjfi in zwvy = [], zxvwy$ = 0x0, dcabf) zwvy[zxvwy$++] = gkjfi;
  }zxvwy$ = 0x0;for (rtpqsu = zwvy['length']; zxvwy$ < rtpqsu; ++zxvwy$) gkjfi = zwvy[zxvwy$], lnmkoj('Zlib.Inflate.BufferType.' + gkjfi, dcabf[gkjfi]);
})['call'](this), function () {
  'use strict';

  function hiejgf(urtspq) {
    throw urtspq;
  }var vwut = void 0x0,
      begdc,
      srvuqt = window;function cebda(idfeh, vuq) {
    var fhdgi = idfeh['split']('.'),
        hgdcfe = srvuqt;!(fhdgi[0x0] in hgdcfe) && hgdcfe['execScript'] && hgdcfe['execScript']('var ' + fhdgi[0x0]);for (var $0y_; fhdgi['length'] && ($0y_ = fhdgi['shift']());) !fhdgi['length'] && vuq !== vwut ? hgdcfe[$0y_] = vuq : hgdcfe = hgdcfe[$0y_] ? hgdcfe[$0y_] : hgdcfe[$0y_] = {};
  };var lpokmn = 'undefined' !== typeof Uint8Array && 'undefined' !== typeof Uint16Array && 'undefined' !== typeof Uint32Array && 'undefined' !== typeof DataView;new (lpokmn ? Uint8Array : Array)(0x100);var qtsrv;for (qtsrv = 0x0; 0x100 > qtsrv; ++qtsrv) for (var pnsoq = qtsrv, egdfc = 0x7, pnsoq = pnsoq >>> 0x1; pnsoq; pnsoq >>>= 0x1) --egdfc;var rsuqp = [0x0, 0x77073096, 0xee0e612c, 0x990951ba, 0x76dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0xedb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x9b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x1db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x6b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0xf00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x86d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x3b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x4db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0xd6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0xa00ae27, 0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x26d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x5005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0xcb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0xbdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d],
      _yx0$z = lpokmn ? new Uint32Array(rsuqp) : rsuqp;if (srvuqt['Uint8Array'] !== vwut) String['fromCharCode']['apply'] = function (bgfdce) {
    return function (vyxuwt, hjfeig) {
      return bgfdce['call'](String['fromCharCode'], vyxuwt, Array['prototype']['slice']['call'](hjfeig));
    };
  }(String['fromCharCode']['apply']);function chegd(decg) {
    var adbfc = decg['length'],
        qolnmp = 0x0,
        uxwts = Number['POSITIVE_INFINITY'],
        urtqp,
        xstuw,
        wzyuxv,
        jmlnik,
        nlomp,
        fjgik,
        $0zy_x,
        loknpm,
        vwuzy,
        trqpus;for (loknpm = 0x0; loknpm < adbfc; ++loknpm) decg[loknpm] > qolnmp && (qolnmp = decg[loknpm]), decg[loknpm] < uxwts && (uxwts = decg[loknpm]);urtqp = 0x1 << qolnmp, xstuw = new (lpokmn ? Uint32Array : Array)(urtqp), wzyuxv = 0x1, jmlnik = 0x0;for (nlomp = 0x2; wzyuxv <= qolnmp;) {
      for (loknpm = 0x0; loknpm < adbfc; ++loknpm) if (decg[loknpm] === wzyuxv) {
        fjgik = 0x0, $0zy_x = jmlnik;for (vwuzy = 0x0; vwuzy < wzyuxv; ++vwuzy) fjgik = fjgik << 0x1 | $0zy_x & 0x1, $0zy_x >>= 0x1;trqpus = wzyuxv << 0x10 | loknpm;for (vwuzy = fjgik; vwuzy < urtqp; vwuzy += nlomp) xstuw[vwuzy] = trqpus;++jmlnik;
      }++wzyuxv, jmlnik <<= 0x1, nlomp <<= 0x1;
    }return [xstuw, qolnmp, uxwts];
  };var lhjim = [],
      bfged;for (bfged = 0x0; 0x120 > bfged; bfged++) switch (!0x0) {case 0x8f >= bfged:
      lhjim['push']([bfged + 0x30, 0x8]);break;case 0xff >= bfged:
      lhjim['push']([bfged - 0x90 + 0x190, 0x9]);break;case 0x117 >= bfged:
      lhjim['push']([bfged - 0x100 + 0x0, 0x7]);break;case 0x11f >= bfged:
      lhjim['push']([bfged - 0x118 + 0xc0, 0x8]);break;default:
      hiejgf('invalid literal: ' + bfged);}var egbdf = function () {
    function poqrnm(fgiedh) {
      switch (!0x0) {case 0x3 === fgiedh:
          return [0x101, fgiedh - 0x3, 0x0];case 0x4 === fgiedh:
          return [0x102, fgiedh - 0x4, 0x0];case 0x5 === fgiedh:
          return [0x103, fgiedh - 0x5, 0x0];case 0x6 === fgiedh:
          return [0x104, fgiedh - 0x6, 0x0];case 0x7 === fgiedh:
          return [0x105, fgiedh - 0x7, 0x0];case 0x8 === fgiedh:
          return [0x106, fgiedh - 0x8, 0x0];case 0x9 === fgiedh:
          return [0x107, fgiedh - 0x9, 0x0];case 0xa === fgiedh:
          return [0x108, fgiedh - 0xa, 0x0];case 0xc >= fgiedh:
          return [0x109, fgiedh - 0xb, 0x1];case 0xe >= fgiedh:
          return [0x10a, fgiedh - 0xd, 0x1];case 0x10 >= fgiedh:
          return [0x10b, fgiedh - 0xf, 0x1];case 0x12 >= fgiedh:
          return [0x10c, fgiedh - 0x11, 0x1];case 0x16 >= fgiedh:
          return [0x10d, fgiedh - 0x13, 0x2];case 0x1a >= fgiedh:
          return [0x10e, fgiedh - 0x17, 0x2];case 0x1e >= fgiedh:
          return [0x10f, fgiedh - 0x1b, 0x2];case 0x22 >= fgiedh:
          return [0x110, fgiedh - 0x1f, 0x2];case 0x2a >= fgiedh:
          return [0x111, fgiedh - 0x23, 0x3];case 0x32 >= fgiedh:
          return [0x112, fgiedh - 0x2b, 0x3];case 0x3a >= fgiedh:
          return [0x113, fgiedh - 0x33, 0x3];case 0x42 >= fgiedh:
          return [0x114, fgiedh - 0x3b, 0x3];case 0x52 >= fgiedh:
          return [0x115, fgiedh - 0x43, 0x4];case 0x62 >= fgiedh:
          return [0x116, fgiedh - 0x53, 0x4];case 0x72 >= fgiedh:
          return [0x117, fgiedh - 0x63, 0x4];case 0x82 >= fgiedh:
          return [0x118, fgiedh - 0x73, 0x4];case 0xa2 >= fgiedh:
          return [0x119, fgiedh - 0x83, 0x5];case 0xc2 >= fgiedh:
          return [0x11a, fgiedh - 0xa3, 0x5];case 0xe2 >= fgiedh:
          return [0x11b, fgiedh - 0xc3, 0x5];case 0x101 >= fgiedh:
          return [0x11c, fgiedh - 0xe3, 0x5];case 0x102 === fgiedh:
          return [0x11d, fgiedh - 0x102, 0x0];default:
          hiejgf('invalid length: ' + fgiedh);}
    }var zx0_y$ = [],
        zyx$wv,
        $z10_;for (zyx$wv = 0x3; 0x102 >= zyx$wv; zyx$wv++) $z10_ = poqrnm(zyx$wv), zx0_y$[zyx$wv] = $z10_[0x2] << 0x18 | $z10_[0x1] << 0x10 | $z10_[0x0];return zx0_y$;
  }();lpokmn && new Uint32Array(egbdf);function qortsp(ihgfed, fejih) {
    this['l'] = [], this['m'] = 0x8000, this['d'] = this['f'] = this['c'] = this['t'] = 0x0, this['input'] = lpokmn ? new Uint8Array(ihgfed) : ihgfed, this['u'] = !0x1, this['n'] = uvwyzx, this['K'] = !0x1;if (fejih || !(fejih = {})) fejih['index'] && (this['c'] = fejih['index']), fejih['bufferSize'] && (this['m'] = fejih['bufferSize']), fejih['bufferType'] && (this['n'] = fejih['bufferType']), fejih['resize'] && (this['K'] = fejih['resize']);switch (this['n']) {case kpomn:
        this['a'] = 0x8000, this['b'] = new (lpokmn ? Uint8Array : Array)(0x8000 + this['m'] + 0x102);break;case uvwyzx:
        this['a'] = 0x0, this['b'] = new (lpokmn ? Uint8Array : Array)(this['m']), this['e'] = this['W'], this['B'] = this['R'], this['q'] = this['V'];break;default:
        hiejgf(Error('invalid inflate mode'));}
  }var kpomn = 0x0,
      uvwyzx = 0x1;qortsp['prototype']['r'] = function () {
    for (; !this['u'];) {
      var pqromn = mknpol(this, 0x3);pqromn & 0x1 && (this['u'] = !0x0), pqromn >>>= 0x1;switch (pqromn) {case 0x0:
          var mjklin = this['input'],
              hjkmi = this['c'],
              fecdhg = this['b'],
              tsqpru = this['a'],
              $10_z = mjklin['length'],
              lmi = vwut,
              yuxwvz = vwut,
              fidehg = fecdhg['length'],
              jikgh = vwut;this['d'] = this['f'] = 0x0, hjkmi + 0x1 >= $10_z && hiejgf(Error('invalid uncompressed block header: LEN')), lmi = mjklin[hjkmi++] | mjklin[hjkmi++] << 0x8, hjkmi + 0x1 >= $10_z && hiejgf(Error('invalid uncompressed block header: NLEN')), yuxwvz = mjklin[hjkmi++] | mjklin[hjkmi++] << 0x8, lmi === ~yuxwvz && hiejgf(Error('invalid uncompressed block header: length verify')), hjkmi + lmi > mjklin['length'] && hiejgf(Error('input buffer is broken'));switch (this['n']) {case kpomn:
              for (; tsqpru + lmi > fecdhg['length'];) {
                jikgh = fidehg - tsqpru, lmi -= jikgh;if (lpokmn) fecdhg['set'](mjklin['subarray'](hjkmi, hjkmi + jikgh), tsqpru), tsqpru += jikgh, hjkmi += jikgh;else {
                  for (; jikgh--;) fecdhg[tsqpru++] = mjklin[hjkmi++];
                }this['a'] = tsqpru, fecdhg = this['e'](), tsqpru = this['a'];
              }break;case uvwyzx:
              for (; tsqpru + lmi > fecdhg['length'];) fecdhg = this['e']({ 'H': 0x2 });break;default:
              hiejgf(Error('invalid inflate mode'));}if (lpokmn) fecdhg['set'](mjklin['subarray'](hjkmi, hjkmi + lmi), tsqpru), tsqpru += lmi, hjkmi += lmi;else {
            for (; lmi--;) fecdhg[tsqpru++] = mjklin[hjkmi++];
          }this['c'] = hjkmi, this['a'] = tsqpru, this['b'] = fecdhg;break;case 0x1:
          this['q'](aecbd, yw);break;case 0x2:
          for (var xtuswv = mknpol(this, 0x5) + 0x101, xyvwtu = mknpol(this, 0x5) + 0x1, $2_3 = mknpol(this, 0x4) + 0x4, ecfg = new (lpokmn ? Uint8Array : Array)(jhei['length']), spqto = vwut, $_zyx = vwut, $_yxzw = vwut, qmpo = vwut, trpu = vwut, yzx0_$ = vwut, jkhgli = vwut, pqomln = vwut, vxtsuw = vwut, pqomln = 0x0; pqomln < $2_3; ++pqomln) ecfg[jhei[pqomln]] = mknpol(this, 0x3);if (!lpokmn) {
            pqomln = $2_3;for ($2_3 = ecfg['length']; pqomln < $2_3; ++pqomln) ecfg[jhei[pqomln]] = 0x0;
          }spqto = chegd(ecfg), qmpo = new (lpokmn ? Uint8Array : Array)(xtuswv + xyvwtu), pqomln = 0x0;for (vxtsuw = xtuswv + xyvwtu; pqomln < vxtsuw;) switch (trpu = lmkj(this, spqto), trpu) {case 0x10:
              for (jkhgli = 0x3 + mknpol(this, 0x2); jkhgli--;) qmpo[pqomln++] = yzx0_$;break;case 0x11:
              for (jkhgli = 0x3 + mknpol(this, 0x3); jkhgli--;) qmpo[pqomln++] = 0x0;yzx0_$ = 0x0;break;case 0x12:
              for (jkhgli = 0xb + mknpol(this, 0x7); jkhgli--;) qmpo[pqomln++] = 0x0;yzx0_$ = 0x0;break;default:
              yzx0_$ = qmpo[pqomln++] = trpu;}$_zyx = lpokmn ? chegd(qmpo['subarray'](0x0, xtuswv)) : chegd(qmpo['slice'](0x0, xtuswv)), $_yxzw = lpokmn ? chegd(qmpo['subarray'](xtuswv)) : chegd(qmpo['slice'](xtuswv)), this['q']($_zyx, $_yxzw);break;default:
          hiejgf(Error('unknown BTYPE: ' + pqromn));}
    }return this['B']();
  };var gdfhe = [0x10, 0x11, 0x12, 0x0, 0x8, 0x7, 0x9, 0x6, 0xa, 0x5, 0xb, 0x4, 0xc, 0x3, 0xd, 0x2, 0xe, 0x1, 0xf],
      jhei = lpokmn ? new Uint16Array(gdfhe) : gdfhe,
      chfde = [0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xd, 0xf, 0x11, 0x13, 0x17, 0x1b, 0x1f, 0x23, 0x2b, 0x33, 0x3b, 0x43, 0x53, 0x63, 0x73, 0x83, 0xa3, 0xc3, 0xe3, 0x102, 0x102, 0x102],
      y0z$x = lpokmn ? new Uint16Array(chfde) : chfde,
      nmqorp = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x4, 0x5, 0x5, 0x5, 0x5, 0x0, 0x0, 0x0],
      polqn = lpokmn ? new Uint8Array(nmqorp) : nmqorp,
      ljmon = [0x1, 0x2, 0x3, 0x4, 0x5, 0x7, 0x9, 0xd, 0x11, 0x19, 0x21, 0x31, 0x41, 0x61, 0x81, 0xc1, 0x101, 0x181, 0x201, 0x301, 0x401, 0x601, 0x801, 0xc01, 0x1001, 0x1801, 0x2001, 0x3001, 0x4001, 0x6001],
      hkilm = lpokmn ? new Uint16Array(ljmon) : ljmon,
      qupstr = [0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x7, 0x8, 0x8, 0x9, 0x9, 0xa, 0xa, 0xb, 0xb, 0xc, 0xc, 0xd, 0xd],
      poqsrn = lpokmn ? new Uint8Array(qupstr) : qupstr,
      fehcd = new (lpokmn ? Uint8Array : Array)(0x120),
      cegfbd,
      usqtr;cegfbd = 0x0;for (usqtr = fehcd['length']; cegfbd < usqtr; ++cegfbd) fehcd[cegfbd] = 0x8f >= cegfbd ? 0x8 : 0xff >= cegfbd ? 0x9 : 0x117 >= cegfbd ? 0x7 : 0x8;var aecbd = chegd(fehcd),
      adfbc = new (lpokmn ? Uint8Array : Array)(0x1e),
      fda,
      hkilj;fda = 0x0;for (hkilj = adfbc['length']; fda < hkilj; ++fda) adfbc[fda] = 0x5;var yw = chegd(adfbc);function mknpol(nrpom, z2_1$) {
    for (var gfkhj = nrpom['f'], svtw = nrpom['d'], hfjik = nrpom['input'], rstoqp = nrpom['c'], tvxwuy = hfjik['length'], tuyw; svtw < z2_1$;) rstoqp >= tvxwuy && hiejgf(Error('input buffer is broken')), gfkhj |= hfjik[rstoqp++] << svtw, svtw += 0x8;return tuyw = gfkhj & (0x1 << z2_1$) - 0x1, nrpom['f'] = gfkhj >>> z2_1$, nrpom['d'] = svtw - z2_1$, nrpom['c'] = rstoqp, tuyw;
  }function lmkj(tpsqr, fced) {
    for (var vxwts = tpsqr['f'], qnlmp = tpsqr['d'], dfhgce = tpsqr['input'], y$_xz = tpsqr['c'], igjeh = dfhgce['length'], efbadc = fced[0x0], gdcef = fced[0x1], qomlnp, ikgljh; qnlmp < gdcef && !(y$_xz >= igjeh);) vxwts |= dfhgce[y$_xz++] << qnlmp, qnlmp += 0x8;return qomlnp = efbadc[vxwts & (0x1 << gdcef) - 0x1], ikgljh = qomlnp >>> 0x10, ikgljh > qnlmp && hiejgf(Error('invalid code length: ' + ikgljh)), tpsqr['f'] = vxwts >> ikgljh, tpsqr['d'] = qnlmp - ikgljh, tpsqr['c'] = y$_xz, qomlnp & 0xffff;
  }begdc = qortsp['prototype'], begdc['q'] = function (wyzuxv, tvqu) {
    var _0xzy$ = this['b'],
        urvwst = this['a'];this['C'] = wyzuxv;for (var mojnk = _0xzy$['length'] - 0x102, hjkifg, tuvwsx, xy_z$w, pnmlq; 0x100 !== (hjkifg = lmkj(this, wyzuxv));) if (0x100 > hjkifg) urvwst >= mojnk && (this['a'] = urvwst, _0xzy$ = this['e'](), urvwst = this['a']), _0xzy$[urvwst++] = hjkifg;else {
      tuvwsx = hjkifg - 0x101, pnmlq = y0z$x[tuvwsx], 0x0 < polqn[tuvwsx] && (pnmlq += mknpol(this, polqn[tuvwsx])), hjkifg = lmkj(this, tvqu), xy_z$w = hkilm[hjkifg], 0x0 < poqsrn[hjkifg] && (xy_z$w += mknpol(this, poqsrn[hjkifg])), urvwst >= mojnk && (this['a'] = urvwst, _0xzy$ = this['e'](), urvwst = this['a']);for (; pnmlq--;) _0xzy$[urvwst] = _0xzy$[urvwst++ - xy_z$w];
    }for (; 0x8 <= this['d'];) this['d'] -= 0x8, this['c']--;this['a'] = urvwst;
  }, begdc['V'] = function ($1z_2, mlkno) {
    var _0243 = this['b'],
        zuvyx = this['a'];this['C'] = $1z_2;for (var ptruqs = _0243['length'], eifgd, ljhgk, qmlpo, xw$yz_; 0x100 !== (eifgd = lmkj(this, $1z_2));) if (0x100 > eifgd) zuvyx >= ptruqs && (_0243 = this['e'](), ptruqs = _0243['length']), _0243[zuvyx++] = eifgd;else {
      ljhgk = eifgd - 0x101, xw$yz_ = y0z$x[ljhgk], 0x0 < polqn[ljhgk] && (xw$yz_ += mknpol(this, polqn[ljhgk])), eifgd = lmkj(this, mlkno), qmlpo = hkilm[eifgd], 0x0 < poqsrn[eifgd] && (qmlpo += mknpol(this, poqsrn[eifgd])), zuvyx + xw$yz_ > ptruqs && (_0243 = this['e'](), ptruqs = _0243['length']);for (; xw$yz_--;) _0243[zuvyx] = _0243[zuvyx++ - qmlpo];
    }for (; 0x8 <= this['d'];) this['d'] -= 0x8, this['c']--;this['a'] = zuvyx;
  }, begdc['e'] = function () {
    var zuwyvx = new (lpokmn ? Uint8Array : Array)(this['a'] - 0x8000),
        pmoknl = this['a'] - 0x8000,
        uvyxt,
        jgklih,
        y_zx$ = this['b'];if (lpokmn) zuwyvx['set'](y_zx$['subarray'](0x8000, zuwyvx['length']));else {
      uvyxt = 0x0;for (jgklih = zuwyvx['length']; uvyxt < jgklih; ++uvyxt) zuwyvx[uvyxt] = y_zx$[uvyxt + 0x8000];
    }this['l']['push'](zuwyvx), this['t'] += zuwyvx['length'];if (lpokmn) y_zx$['set'](y_zx$['subarray'](pmoknl, pmoknl + 0x8000));else {
      for (uvyxt = 0x0; 0x8000 > uvyxt; ++uvyxt) y_zx$[uvyxt] = y_zx$[pmoknl + uvyxt];
    }return this['a'] = 0x8000, y_zx$;
  }, begdc['W'] = function (kopm) {
    var osqpn,
        _320 = this['input']['length'] / this['c'] + 0x1 | 0x0,
        kjimhl,
        fihe,
        toqrsp,
        rvwts = this['input'],
        suqtrp = this['b'];return kopm && ('number' === typeof kopm['H'] && (_320 = kopm['H']), 'number' === typeof kopm['P'] && (_320 += kopm['P'])), 0x2 > _320 ? (kjimhl = (rvwts['length'] - this['c']) / this['C'][0x2], toqrsp = 0x102 * (kjimhl / 0x2) | 0x0, fihe = toqrsp < suqtrp['length'] ? suqtrp['length'] + toqrsp : suqtrp['length'] << 0x1) : fihe = suqtrp['length'] * _320, lpokmn ? (osqpn = new Uint8Array(fihe), osqpn['set'](suqtrp)) : osqpn = suqtrp, this['b'] = osqpn;
  }, begdc['B'] = function () {
    var fhcdeg = 0x0,
        yxwuzv = this['b'],
        ihdfge = this['l'],
        gjlhi,
        konmpl = new (lpokmn ? Uint8Array : Array)(this['t'] + (this['a'] - 0x8000)),
        stoqp,
        lnjkmi,
        gjkhfi,
        wuytv;if (0x0 === ihdfge['length']) return lpokmn ? this['b']['subarray'](0x8000, this['a']) : this['b']['slice'](0x8000, this['a']);stoqp = 0x0;for (lnjkmi = ihdfge['length']; stoqp < lnjkmi; ++stoqp) {
      gjlhi = ihdfge[stoqp], gjkhfi = 0x0;for (wuytv = gjlhi['length']; gjkhfi < wuytv; ++gjkhfi) konmpl[fhcdeg++] = gjlhi[gjkhfi];
    }stoqp = 0x8000;for (lnjkmi = this['a']; stoqp < lnjkmi; ++stoqp) konmpl[fhcdeg++] = yxwuzv[stoqp];return this['l'] = [], this['buffer'] = konmpl;
  }, begdc['R'] = function () {
    var wtxyvu,
        bfdcge = this['a'];return lpokmn ? this['K'] ? (wtxyvu = new Uint8Array(bfdcge), wtxyvu['set'](this['b']['subarray'](0x0, bfdcge))) : wtxyvu = this['b']['subarray'](0x0, bfdcge) : (this['b']['length'] > bfdcge && (this['b']['length'] = bfdcge), wtxyvu = this['b']), this['buffer'] = wtxyvu;
  };function rnoqpm(lknmij) {
    lknmij = lknmij || {}, this['files'] = [], this['v'] = lknmij['comment'];
  }rnoqpm['prototype']['L'] = function (nlpk) {
    this['j'] = nlpk;
  }, rnoqpm['prototype']['s'] = function (vuwzy) {
    var $yvzxw = vuwzy[0x2] & 0xffff | 0x2;return $yvzxw * ($yvzxw ^ 0x1) >> 0x8 & 0xff;
  }, rnoqpm['prototype']['k'] = function (zy0$_, dihgfe) {
    zy0$_[0x0] = (_yx0$z[(zy0$_[0x0] ^ dihgfe) & 0xff] ^ zy0$_[0x0] >>> 0x8) >>> 0x0, zy0$_[0x1] = (0x1a19 * (0x4ecd * (zy0$_[0x1] + (zy0$_[0x0] & 0xff)) >>> 0x0) >>> 0x0) + 0x1 >>> 0x0, zy0$_[0x2] = (_yx0$z[(zy0$_[0x2] ^ zy0$_[0x1] >>> 0x18) & 0xff] ^ zy0$_[0x2] >>> 0x8) >>> 0x0;
  }, rnoqpm['prototype']['T'] = function (uqtsp) {
    var osqnr = [0x12345678, 0x23456789, 0x34567890],
        nosqrp,
        xzy$;lpokmn && (osqnr = new Uint32Array(osqnr)), nosqrp = 0x0;for (xzy$ = uqtsp['length']; nosqrp < xzy$; ++nosqrp) this['k'](osqnr, uqtsp[nosqrp] & 0xff);return osqnr;
  };function uvrtqs(x$yz_0, khmi) {
    khmi = khmi || {}, this['input'] = lpokmn && x$yz_0 instanceof Array ? new Uint8Array(x$yz_0) : x$yz_0, this['c'] = 0x0, this['ba'] = khmi['verify'] || !0x1, this['j'] = khmi['password'];
  }var fkigjh = { 'O': 0x0, 'M': 0x8 },
      usqrtv = [0x50, 0x4b, 0x1, 0x2],
      dfgceh = [0x50, 0x4b, 0x3, 0x4],
      xsut = [0x50, 0x4b, 0x5, 0x6];function olqpn(onpl, uqvrst) {
    this['input'] = onpl, this['offset'] = uqvrst;
  }olqpn['prototype']['parse'] = function () {
    var vyuxz = this['input'],
        ortqs = this['offset'];(vyuxz[ortqs++] !== usqrtv[0x0] || vyuxz[ortqs++] !== usqrtv[0x1] || vyuxz[ortqs++] !== usqrtv[0x2] || vyuxz[ortqs++] !== usqrtv[0x3]) && hiejgf(Error('invalid file header signature')), this['version'] = vyuxz[ortqs++], this['ia'] = vyuxz[ortqs++], this['Z'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['I'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['A'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['time'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['U'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['p'] = (vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8 | vyuxz[ortqs++] << 0x10 | vyuxz[ortqs++] << 0x18) >>> 0x0, this['z'] = (vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8 | vyuxz[ortqs++] << 0x10 | vyuxz[ortqs++] << 0x18) >>> 0x0, this['J'] = (vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8 | vyuxz[ortqs++] << 0x10 | vyuxz[ortqs++] << 0x18) >>> 0x0, this['h'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['g'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['F'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['ea'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['ga'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8, this['fa'] = vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8 | vyuxz[ortqs++] << 0x10 | vyuxz[ortqs++] << 0x18, this['$'] = (vyuxz[ortqs++] | vyuxz[ortqs++] << 0x8 | vyuxz[ortqs++] << 0x10 | vyuxz[ortqs++] << 0x18) >>> 0x0, this['filename'] = String['fromCharCode']['apply'](null, lpokmn ? vyuxz['subarray'](ortqs, ortqs += this['h']) : vyuxz['slice'](ortqs, ortqs += this['h'])), this['X'] = lpokmn ? vyuxz['subarray'](ortqs, ortqs += this['g']) : vyuxz['slice'](ortqs, ortqs += this['g']), this['v'] = lpokmn ? vyuxz['subarray'](ortqs, ortqs + this['F']) : vyuxz['slice'](ortqs, ortqs + this['F']), this['length'] = ortqs - this['offset'];
  };function dcebgf(rvt, igfej) {
    this['input'] = rvt, this['offset'] = igfej;
  }var jomkl = { 'N': 0x1, 'ca': 0x8, 'da': 0x800 };dcebgf['prototype']['parse'] = function () {
    var toqrps = this['input'],
        $_xyzw = this['offset'];(toqrps[$_xyzw++] !== dfgceh[0x0] || toqrps[$_xyzw++] !== dfgceh[0x1] || toqrps[$_xyzw++] !== dfgceh[0x2] || toqrps[$_xyzw++] !== dfgceh[0x3]) && hiejgf(Error('invalid local file header signature')), this['Z'] = toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8, this['I'] = toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8, this['A'] = toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8, this['time'] = toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8, this['U'] = toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8, this['p'] = (toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8 | toqrps[$_xyzw++] << 0x10 | toqrps[$_xyzw++] << 0x18) >>> 0x0, this['z'] = (toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8 | toqrps[$_xyzw++] << 0x10 | toqrps[$_xyzw++] << 0x18) >>> 0x0, this['J'] = (toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8 | toqrps[$_xyzw++] << 0x10 | toqrps[$_xyzw++] << 0x18) >>> 0x0, this['h'] = toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8, this['g'] = toqrps[$_xyzw++] | toqrps[$_xyzw++] << 0x8, this['filename'] = String['fromCharCode']['apply'](null, lpokmn ? toqrps['subarray']($_xyzw, $_xyzw += this['h']) : toqrps['slice']($_xyzw, $_xyzw += this['h'])), this['X'] = lpokmn ? toqrps['subarray']($_xyzw, $_xyzw += this['g']) : toqrps['slice']($_xyzw, $_xyzw += this['g']), this['length'] = $_xyzw - this['offset'];
  };function yxtvu($v) {
    var srto = [],
        zy$_0 = {},
        ghkl,
        begcfd,
        hjg,
        nqmpol;if (!$v['i']) {
      if ($v['o'] === vwut) {
        var hgfje = $v['input'],
            mlpokn;if (!$v['D']) pnomlq: {
          var rnsqp = $v['input'],
              jinmlk;for (jinmlk = rnsqp['length'] - 0xc; 0x0 < jinmlk; --jinmlk) if (rnsqp[jinmlk] === xsut[0x0] && rnsqp[jinmlk + 0x1] === xsut[0x1] && rnsqp[jinmlk + 0x2] === xsut[0x2] && rnsqp[jinmlk + 0x3] === xsut[0x3]) {
            $v['D'] = jinmlk;break pnomlq;
          }hiejgf(Error('End of Central Directory Record not found'));
        }mlpokn = $v['D'], (hgfje[mlpokn++] !== xsut[0x0] || hgfje[mlpokn++] !== xsut[0x1] || hgfje[mlpokn++] !== xsut[0x2] || hgfje[mlpokn++] !== xsut[0x3]) && hiejgf(Error('invalid signature')), $v['ha'] = hgfje[mlpokn++] | hgfje[mlpokn++] << 0x8, $v['ja'] = hgfje[mlpokn++] | hgfje[mlpokn++] << 0x8, $v['ka'] = hgfje[mlpokn++] | hgfje[mlpokn++] << 0x8, $v['aa'] = hgfje[mlpokn++] | hgfje[mlpokn++] << 0x8, $v['Q'] = (hgfje[mlpokn++] | hgfje[mlpokn++] << 0x8 | hgfje[mlpokn++] << 0x10 | hgfje[mlpokn++] << 0x18) >>> 0x0, $v['o'] = (hgfje[mlpokn++] | hgfje[mlpokn++] << 0x8 | hgfje[mlpokn++] << 0x10 | hgfje[mlpokn++] << 0x18) >>> 0x0, $v['w'] = hgfje[mlpokn++] | hgfje[mlpokn++] << 0x8, $v['v'] = lpokmn ? hgfje['subarray'](mlpokn, mlpokn + $v['w']) : hgfje['slice'](mlpokn, mlpokn + $v['w']);
      }ghkl = $v['o'], hjg = 0x0;for (nqmpol = $v['aa']; hjg < nqmpol; ++hjg) begcfd = new olqpn($v['input'], ghkl), begcfd['parse'](), ghkl += begcfd['length'], srto[hjg] = begcfd, zy$_0[begcfd['filename']] = hjg;$v['Q'] < ghkl - $v['o'] && hiejgf(Error('invalid file header size')), $v['i'] = srto, $v['G'] = zy$_0;
    }
  }begdc = uvrtqs['prototype'], begdc['Y'] = function () {
    var qropts = [],
        twuy,
        z1_$0,
        xzyvw;this['i'] || yxtvu(this), xzyvw = this['i'], twuy = 0x0;for (z1_$0 = xzyvw['length']; twuy < z1_$0; ++twuy) qropts[twuy] = xzyvw[twuy]['filename'];return qropts;
  }, begdc['r'] = function (hmklij, jkhim) {
    var jnlikm;this['G'] || yxtvu(this), jnlikm = this['G'][hmklij], jnlikm === vwut && hiejgf(Error(hmklij + ' not found'));var wtyvx;wtyvx = jkhim || {};var topqrs = this['input'],
        mopknl = this['i'],
        ikgh,
        upqrs,
        soprn,
        urts,
        xy_w$z,
        jhfie,
        dfbgec,
        ecghdf;mopknl || yxtvu(this), mopknl[jnlikm] === vwut && hiejgf(Error('wrong index')), upqrs = mopknl[jnlikm]['$'], ikgh = new dcebgf(this['input'], upqrs), ikgh['parse'](), upqrs += ikgh['length'], soprn = ikgh['z'];if (0x0 !== (ikgh['I'] & jomkl['N'])) {
      !wtyvx['password'] && !this['j'] && hiejgf(Error('please set password')), jhfie = this['S'](wtyvx['password'] || this['j']), dfbgec = upqrs;for (ecghdf = upqrs + 0xc; dfbgec < ecghdf; ++dfbgec) z$_201(this, jhfie, topqrs[dfbgec]);upqrs += 0xc, soprn -= 0xc, dfbgec = upqrs;for (ecghdf = upqrs + soprn; dfbgec < ecghdf; ++dfbgec) topqrs[dfbgec] = z$_201(this, jhfie, topqrs[dfbgec]);
    }switch (ikgh['A']) {case fkigjh['O']:
        urts = lpokmn ? this['input']['subarray'](upqrs, upqrs + soprn) : this['input']['slice'](upqrs, upqrs + soprn);break;case fkigjh['M']:
        urts = new qortsp(this['input'], { 'index': upqrs, 'bufferSize': ikgh['J'] })['r']();break;default:
        hiejgf(Error('unknown compression type'));}if (this['ba']) {
      var khijm = vwut,
          ebdf,
          vwuzyx = 'number' === typeof khijm ? khijm : khijm = 0x0,
          qvuts = urts['length'];ebdf = -0x1;for (vwuzyx = qvuts & 0x7; vwuzyx--; ++khijm) ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm]) & 0xff];for (vwuzyx = qvuts >> 0x3; vwuzyx--; khijm += 0x8) ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm]) & 0xff], ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm + 0x1]) & 0xff], ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm + 0x2]) & 0xff], ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm + 0x3]) & 0xff], ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm + 0x4]) & 0xff], ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm + 0x5]) & 0xff], ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm + 0x6]) & 0xff], ebdf = ebdf >>> 0x8 ^ _yx0$z[(ebdf ^ urts[khijm + 0x7]) & 0xff];xy_w$z = (ebdf ^ 0xffffffff) >>> 0x0, ikgh['p'] !== xy_w$z && hiejgf(Error('wrong crc: file=0x' + ikgh['p']['toString'](0x10) + ', data=0x' + xy_w$z['toString'](0x10)));
    }return urts;
  }, begdc['L'] = function (z$120) {
    this['j'] = z$120;
  };function z$_201(zwuv, omprq, sonr) {
    return sonr ^= zwuv['s'](omprq), zwuv['k'](omprq, sonr), sonr;
  }begdc['k'] = rnoqpm['prototype']['k'], begdc['S'] = rnoqpm['prototype']['T'], begdc['s'] = rnoqpm['prototype']['s'], cebda('Zlib.Unzip', uvrtqs), cebda('Zlib.Unzip.prototype.decompress', uvrtqs['prototype']['r']), cebda('Zlib.Unzip.prototype.getFilenames', uvrtqs['prototype']['Y']), cebda('Zlib.Unzip.prototype.setPassword', uvrtqs['prototype']['L']);
}['call'](this), function _dnjmolk(sor, _210$z) {
  if (typeof exports === 'object' && typeof module === 'object') window['msgpack'] = module['exports'] = _210$z();else {
    if (typeof define === 'function' && define['amd']) window['msgpack'] = define([], _210$z);else {
      if (typeof exports === 'object') window['msgpack'] = exports['msgpack'] = _210$z();else window['msgpack'] = sor['msgpack'] = _210$z();
    }
  }
}(this, function () {
  return function (modules) {
    var $y_zx = {};function __webpack_require__(moduleId) {
      if ($y_zx[moduleId]) return $y_zx[moduleId]['exports'];var module = $y_zx[moduleId] = { 'i': moduleId, 'l': ![], 'exports': {} };return modules[moduleId]['call'](module['exports'], module, module['exports'], __webpack_require__), module['l'] = !![], module['exports'];
    }return __webpack_require__['m'] = modules, __webpack_require__['c'] = $y_zx, __webpack_require__['d'] = function (exports, wyuxvt, qps) {
      !__webpack_require__['o'](exports, wyuxvt) && Object['defineProperty'](exports, wyuxvt, { 'enumerable': !![], 'get': qps });
    }, __webpack_require__['r'] = function (exports) {
      typeof Symbol !== 'undefined' && Symbol['toStringTag'] && Object['defineProperty'](exports, Symbol['toStringTag'], { 'value': 'Module' }), Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    }, __webpack_require__['t'] = function (qnors, _0yz1) {
      if (_0yz1 & 0x1) qnors = __webpack_require__(qnors);if (_0yz1 & 0x8) return qnors;if (_0yz1 & 0x4 && typeof qnors === 'object' && qnors && qnors['__esModule']) return qnors;var efgdih = Object['create'](null);__webpack_require__['r'](efgdih), Object['defineProperty'](efgdih, 'default', { 'enumerable': !![], 'value': qnors });if (_0yz1 & 0x2 && typeof qnors != 'string') {
        for (var mpnok in qnors) __webpack_require__['d'](efgdih, mpnok, function (hefcgd) {
          return qnors[hefcgd];
        }['bind'](null, mpnok));
      }return efgdih;
    }, __webpack_require__['n'] = function (module) {
      var lghjk = module && module['__esModule'] ? function komnpl() {
        return module['default'];
      } : function lqnmpo() {
        return module;
      };return __webpack_require__['d'](lghjk, 'a', lghjk), lghjk;
    }, __webpack_require__['o'] = function (kpnm, kmilj) {
      return Object['prototype']['hasOwnProperty']['call'](kpnm, kmilj);
    }, __webpack_require__['p'] = '', __webpack_require__(__webpack_require__['s'] = 0x0);
  }([function (module, __webpack_exports__, __webpack_require__) {
    'use strict';

    __webpack_require__['r'](__webpack_exports__), __webpack_require__['d'](__webpack_exports__, 'encode', function () {
      return bedgcf;
    }), __webpack_require__['d'](__webpack_exports__, 'decode', function () {
      return fehcgd;
    }), __webpack_require__['d'](__webpack_exports__, 'decodeAsync', function () {
      return stwuvx;
    }), __webpack_require__['d'](__webpack_exports__, 'decodeArrayStream', function () {
      return hgeifj;
    }), __webpack_require__['d'](__webpack_exports__, 'decodeStream', function () {
      return lqpon;
    }), __webpack_require__['d'](__webpack_exports__, 'Decoder', function () {
      return kighlj;
    }), __webpack_require__['d'](__webpack_exports__, 'Encoder', function () {
      return qrputs;
    }), __webpack_require__['d'](__webpack_exports__, 'ExtensionCodec', function () {
      return vyxwtu;
    }), __webpack_require__['d'](__webpack_exports__, 'ExtData', function () {
      return sqrpot;
    }), __webpack_require__['d'](__webpack_exports__, 'EXT_TIMESTAMP', function () {
      return rpu;
    }), __webpack_require__['d'](__webpack_exports__, 'encodeDateToTimeSpec', function () {
      return y_$xwz;
    }), __webpack_require__['d'](__webpack_exports__, 'encodeTimeSpecToTimestamp', function () {
      return gfhdec;
    }), __webpack_require__['d'](__webpack_exports__, 'decodeTimestampToTimeSpec', function () {
      return monlqp;
    }), __webpack_require__['d'](__webpack_exports__, 'encodeTimestampExtension', function () {
      return mqnro;
    }), __webpack_require__['d'](__webpack_exports__, 'decodeTimestampExtension', function () {
      return uqtr;
    });var qnlmop = undefined && undefined['__read'] || function (jihg, gedhc) {
      var xwtv = typeof Symbol === 'function' && jihg[Symbol['iterator']];if (!xwtv) return jihg;var yvxtuw = xwtv['call'](jihg),
          mjhik,
          wtxsu = [],
          oqnmlp;try {
        while ((gedhc === void 0x0 || gedhc-- > 0x0) && !(mjhik = yvxtuw['next']())['done']) wtxsu['push'](mjhik['value']);
      } catch (lmjni) {
        oqnmlp = { 'error': lmjni };
      } finally {
        try {
          if (mjhik && !mjhik['done'] && (xwtv = yvxtuw['return'])) xwtv['call'](yvxtuw);
        } finally {
          if (oqnmlp) throw oqnmlp['error'];
        }
      }return wtxsu;
    },
        eihfd = undefined && undefined['__spread'] || function () {
      for (var vutxws = [], egjihf = 0x0; egjihf < arguments['length']; egjihf++) vutxws = vutxws['concat'](qnlmop(arguments[egjihf]));return vutxws;
    },
        jnlim = typeof process !== 'undefined' && undefined !== 'never' && typeof TextEncoder !== 'undefined' && typeof TextDecoder !== 'undefined';function mjhli(gedf) {
      var xwzvyu = gedf['length'],
          eihfjg = 0x0,
          qrvtsu = 0x0;while (qrvtsu < xwzvyu) {
        var olnpmk = gedf['charCodeAt'](qrvtsu++);if ((olnpmk & 0xffffff80) === 0x0) {
          eihfjg++;continue;
        } else {
          if ((olnpmk & 0xfffff800) === 0x0) eihfjg += 0x2;else {
            if (olnpmk >= 0xd800 && olnpmk <= 0xdbff) {
              if (qrvtsu < xwzvyu) {
                var pqnmr = gedf['charCodeAt'](qrvtsu);(pqnmr & 0xfc00) === 0xdc00 && (++qrvtsu, olnpmk = ((olnpmk & 0x3ff) << 0xa) + (pqnmr & 0x3ff) + 0x10000);
              }
            }(olnpmk & 0xffff0000) === 0x0 ? eihfjg += 0x3 : eihfjg += 0x4;
          }
        }
      }return eihfjg;
    }function lhgik(xvyzuw, putsq, opqmn) {
      var wursvt = xvyzuw['length'],
          jomkn = opqmn,
          lhkjg = 0x0;while (lhkjg < wursvt) {
        var fhce = xvyzuw['charCodeAt'](lhkjg++);if ((fhce & 0xffffff80) === 0x0) {
          putsq[jomkn++] = fhce;continue;
        } else {
          if ((fhce & 0xfffff800) === 0x0) putsq[jomkn++] = fhce >> 0x6 & 0x1f | 0xc0;else {
            if (fhce >= 0xd800 && fhce <= 0xdbff) {
              if (lhkjg < wursvt) {
                var rw = xvyzuw['charCodeAt'](lhkjg);(rw & 0xfc00) === 0xdc00 && (++lhkjg, fhce = ((fhce & 0x3ff) << 0xa) + (rw & 0x3ff) + 0x10000);
              }
            }(fhce & 0xffff0000) === 0x0 ? (putsq[jomkn++] = fhce >> 0xc & 0xf | 0xe0, putsq[jomkn++] = fhce >> 0x6 & 0x3f | 0x80) : (putsq[jomkn++] = fhce >> 0x12 & 0x7 | 0xf0, putsq[jomkn++] = fhce >> 0xc & 0x3f | 0x80, putsq[jomkn++] = fhce >> 0x6 & 0x3f | 0x80);
          }
        }putsq[jomkn++] = fhce & 0x3f | 0x80;
      }
    }var deabc = jnlim ? new TextEncoder() : undefined,
        cabe = typeof process !== 'undefined' && undefined !== 'force' ? 0xc8 : 0x0;function qsrpu(qmnorp, rvtq, fdabce) {
      rvtq['set'](deabc['encode'](qmnorp), fdabce);
    }function rqtvs(_432, yxw$, qnmplo) {
      deabc['encodeInto'](_432, yxw$['subarray'](qnmplo));
    }var efcdgh = (deabc === null || deabc === void 0x0 ? void 0x0 : deabc['encodeInto']) ? rqtvs : qsrpu,
        z$_y1 = 0x1000;function xuwvzy(iehfjg, ploqm, xwz$yv) {
      var rsotp = ploqm,
          swvutr = rsotp + xwz$yv,
          qmlop = [],
          z$x0_ = '';while (rsotp < swvutr) {
        var tsvrwu = iehfjg[rsotp++];if ((tsvrwu & 0x80) === 0x0) qmlop['push'](tsvrwu);else {
          if ((tsvrwu & 0xe0) === 0xc0) {
            var nmopk = iehfjg[rsotp++] & 0x3f;qmlop['push']((tsvrwu & 0x1f) << 0x6 | nmopk);
          } else {
            if ((tsvrwu & 0xf0) === 0xe0) {
              var nmopk = iehfjg[rsotp++] & 0x3f,
                  rotspq = iehfjg[rsotp++] & 0x3f;qmlop['push']((tsvrwu & 0x1f) << 0xc | nmopk << 0x6 | rotspq);
            } else {
              if ((tsvrwu & 0xf8) === 0xf0) {
                var nmopk = iehfjg[rsotp++] & 0x3f,
                    rotspq = iehfjg[rsotp++] & 0x3f,
                    mqpnol = iehfjg[rsotp++] & 0x3f,
                    x_wz$y = (tsvrwu & 0x7) << 0x12 | nmopk << 0xc | rotspq << 0x6 | mqpnol;x_wz$y > 0xffff && (x_wz$y -= 0x10000, qmlop['push'](x_wz$y >>> 0xa & 0x3ff | 0xd800), x_wz$y = 0xdc00 | x_wz$y & 0x3ff), qmlop['push'](x_wz$y);
              } else qmlop['push'](tsvrwu);
            }
          }
        }qmlop['length'] >= z$_y1 && (z$x0_ += String['fromCharCode']['apply'](String, eihfd(qmlop)), qmlop['length'] = 0x0);
      }return qmlop['length'] > 0x0 && (z$x0_ += String['fromCharCode']['apply'](String, eihfd(qmlop))), z$x0_;
    }var orsp = jnlim ? new TextDecoder() : null,
        _1yz$ = typeof process !== 'undefined' && undefined !== 'force' ? 0xc8 : 0x0;function otsprq(_3412, iehf, aecbdf) {
      var dfecgb = _3412['subarray'](iehf, iehf + aecbdf);return orsp['decode'](dfecgb);
    }var sqrpot = function () {
      function topq(ljinmk, efhjg) {
        this['type'] = ljinmk, this['data'] = efhjg;
      }return topq;
    }();function edgfi(omkjl, jnokm, qmolp) {
      var lgkihj = qmolp / 0x100000000,
          qt = qmolp;omkjl['setUint32'](jnokm, lgkihj), omkjl['setUint32'](jnokm + 0x4, qt);
    }function lkijm(jhlk, jigfe, vxt) {
      var qrupst = Math['floor'](vxt / 0x100000000),
          osptr = vxt;jhlk['setUint32'](jigfe, qrupst), jhlk['setUint32'](jigfe + 0x4, osptr);
    }function lqnomp(rstup, utprsq) {
      var afecb = rstup['getInt32'](utprsq),
          efjih = rstup['getUint32'](utprsq + 0x4);return afecb * 0x100000000 + efjih;
    }function pmkl(qtu, yuxw) {
      var uvstrw = qtu['getUint32'](yuxw),
          poqnml = qtu['getUint32'](yuxw + 0x4);return uvstrw * 0x100000000 + poqnml;
    }var rpu = -0x1,
        lopmn = 0x100000000 - 0x1,
        iegfjh = 0x400000000 - 0x1;function gfhdec(stpqor) {
      var kjlnmi = stpqor['sec'],
          ijgef = stpqor['nsec'];if (kjlnmi >= 0x0 && ijgef >= 0x0 && kjlnmi <= iegfjh) {
        if (ijgef === 0x0 && kjlnmi <= lopmn) {
          var jfg = new Uint8Array(0x4),
              tpqur = new DataView(jfg['buffer']);return tpqur['setUint32'](0x0, kjlnmi), jfg;
        } else {
          var yx$w_z = kjlnmi / 0x100000000,
              $z120 = kjlnmi & 0xffffffff,
              jfg = new Uint8Array(0x8),
              tpqur = new DataView(jfg['buffer']);return tpqur['setUint32'](0x0, ijgef << 0x2 | yx$w_z & 0x3), tpqur['setUint32'](0x4, $z120), jfg;
        }
      } else {
        var jfg = new Uint8Array(0xc),
            tpqur = new DataView(jfg['buffer']);return tpqur['setUint32'](0x0, ijgef), lkijm(tpqur, 0x4, kjlnmi), jfg;
      }
    }function y_$xwz(mnpro) {
      var xwuvty = mnpro['getTime'](),
          $x_wy = Math['floor'](xwuvty / 0x3e8),
          vxz$yw = (xwuvty - $x_wy * 0x3e8) * 0xf4240,
          jihmkl = Math['floor'](vxz$yw / 0x3b9aca00);return { 'sec': $x_wy + jihmkl, 'nsec': vxz$yw - jihmkl * 0x3b9aca00 };
    }function mqnro(hmkil) {
      if (hmkil instanceof Date) {
        var mjlikh = y_$xwz(hmkil);return gfhdec(mjlikh);
      } else return null;
    }function monlqp(nmqolp) {
      var jlkmn = new DataView(nmqolp['buffer'], nmqolp['byteOffset'], nmqolp['byteLength']);switch (nmqolp['byteLength']) {case 0x4:
          {
            var khglj = jlkmn['getUint32'](0x0),
                hjikfg = 0x0;return { 'sec': khglj, 'nsec': hjikfg };
          }case 0x8:
          {
            var vyuz = jlkmn['getUint32'](0x0),
                yz$x_ = jlkmn['getUint32'](0x4),
                khglj = (vyuz & 0x3) * 0x100000000 + yz$x_,
                hjikfg = vyuz >>> 0x2;return { 'sec': khglj, 'nsec': hjikfg };
          }case 0xc:
          {
            var khglj = lqnomp(jlkmn, 0x4),
                hjikfg = jlkmn['getUint32'](0x0);return { 'sec': khglj, 'nsec': hjikfg };
          }default:
          throw new Error('Unrecognized data size for timestamp: ' + nmqolp['length']);}
    }function uqtr(lkin) {
      var fhged = monlqp(lkin);return new Date(fhged['sec'] * 0x3e8 + fhged['nsec'] / 0xf4240);
    }var gehfj = { 'type': rpu, 'encode': mqnro, 'decode': uqtr },
        vyxwtu = function () {
      function okplmn() {
        this['builtInEncoders'] = [], this['builtInDecoders'] = [], this['encoders'] = [], this['decoders'] = [], this['register'](gehfj);
      }return okplmn['prototype']['register'] = function (gecfdb) {
        var eabdc = gecfdb['type'],
            khijg = gecfdb['encode'],
            jiehgf = gecfdb['decode'];if (eabdc >= 0x0) this['encoders'][eabdc] = khijg, this['decoders'][eabdc] = jiehgf;else {
          var hiegd = 0x1 + eabdc;this['builtInEncoders'][hiegd] = khijg, this['builtInDecoders'][hiegd] = jiehgf;
        }
      }, okplmn['prototype']['tryToEncode'] = function (vxuty, cehfdg) {
        for (var lijmnk = 0x0; lijmnk < this['builtInEncoders']['length']; lijmnk++) {
          var qorpts = this['builtInEncoders'][lijmnk];if (qorpts != null) {
            var yzx = qorpts(vxuty, cehfdg);if (yzx != null) {
              var hgkifj = -0x1 - lijmnk;return new sqrpot(hgkifj, yzx);
            }
          }
        }for (var lijmnk = 0x0; lijmnk < this['encoders']['length']; lijmnk++) {
          var qorpts = this['encoders'][lijmnk];if (qorpts != null) {
            var yzx = qorpts(vxuty, cehfdg);if (yzx != null) {
              var hgkifj = lijmnk;return new sqrpot(hgkifj, yzx);
            }
          }
        }if (vxuty instanceof sqrpot) return vxuty;return null;
      }, okplmn['prototype']['decode'] = function (hedfgi, uqrvs, mlon) {
        var kjnolm = uqrvs < 0x0 ? this['builtInDecoders'][-0x1 - uqrvs] : this['decoders'][uqrvs];return kjnolm ? kjnolm(hedfgi, uqrvs, mlon) : new sqrpot(uqrvs, hedfgi);
      }, okplmn['defaultCodec'] = new okplmn(), okplmn;
    }();function _1320($w_zxy) {
      if ($w_zxy instanceof Uint8Array) return $w_zxy;else {
        if (ArrayBuffer['isView']($w_zxy)) return new Uint8Array($w_zxy['buffer'], $w_zxy['byteOffset'], $w_zxy['byteLength']);else return $w_zxy instanceof ArrayBuffer ? new Uint8Array($w_zxy) : Uint8Array['from']($w_zxy);
      }
    }function fgdebc(baced) {
      if (baced instanceof ArrayBuffer) return new DataView(baced);var svuxtw = _1320(baced);return new DataView(svuxtw['buffer'], svuxtw['byteOffset'], svuxtw['byteLength']);
    }var molknj = undefined && undefined['__values'] || function ($yz_w) {
      var mhlk = typeof Symbol === 'function' && Symbol['iterator'],
          y0z_$1 = mhlk && $yz_w[mhlk],
          utvwrs = 0x0;if (y0z_$1) return y0z_$1['call']($yz_w);if ($yz_w && typeof $yz_w['length'] === 'number') return { 'next': function () {
          if ($yz_w && utvwrs >= $yz_w['length']) $yz_w = void 0x0;return { 'value': $yz_w && $yz_w[utvwrs++], 'done': !$yz_w };
        } };throw new TypeError(mhlk ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
    },
        $02 = Uint8Array['prototype']['slice'] != null || Uint8Array['prototype']['slice'] != undefined,
        kjinm = 0x3e8,
        rpnoqm = 0x800,
        qrputs = function () {
      function sqtvr(khgif, dhecg, svxtw, poln, $xz_, klimj, ijhe) {
        khgif === void 0x0 && (khgif = vyxwtu['defaultCodec']), svxtw === void 0x0 && (svxtw = kjinm), poln === void 0x0 && (poln = rpnoqm), $xz_ === void 0x0 && ($xz_ = ![]), klimj === void 0x0 && (klimj = ![]), ijhe === void 0x0 && (ijhe = ![]), this['extensionCodec'] = khgif, this['context'] = dhecg, this['maxDepth'] = svxtw, this['initialBufferSize'] = poln, this['sortKeys'] = $xz_, this['forceFloat32'] = klimj, this['ignoreUndefined'] = ijhe, this['pos'] = 0x0, this['view'] = new DataView(new ArrayBuffer(this['initialBufferSize'])), this['bytes'] = new Uint8Array(this['view']['buffer']);
      }return sqtvr['prototype']['encode'] = function (ijghfe, tvqsr) {
        if (tvqsr > this['maxDepth']) throw new Error('Too deep objects in depth ' + tvqsr);if (ijghfe == null) this['encodeNil']();else {
          if (typeof ijghfe === 'boolean') this['encodeBoolean'](ijghfe);else {
            if (typeof ijghfe === 'number') this['encodeNumber'](ijghfe);else typeof ijghfe === 'string' ? this['encodeString'](ijghfe) : this['encodeObject'](ijghfe, tvqsr);
          }
        }
      }, sqtvr['prototype']['getUint8Array'] = function () {
        return this['bytes']['subarray'](0x0, this['pos']);
      }, sqtvr['prototype']['ensureBufferSizeToWrite'] = function (xzvuwy) {
        var requiredSize = this['pos'] + xzvuwy;this['view']['byteLength'] < requiredSize && this['resizeBuffer'](requiredSize * 0x2);
      }, sqtvr['prototype']['resizeBuffer'] = function (qosnr) {
        var opkmnl = new ArrayBuffer(qosnr),
            x0_z$ = new Uint8Array(opkmnl),
            xy$vw = new DataView(opkmnl);x0_z$['set'](this['bytes']), this['view'] = xy$vw, this['bytes'] = x0_z$;
      }, sqtvr['prototype']['encodeNil'] = function () {
        this['writeU8'](0xc0);
      }, sqtvr['prototype']['encodeBoolean'] = function (_zy0x) {
        _zy0x === ![] ? this['writeU8'](0xc2) : this['writeU8'](0xc3);
      }, sqtvr['prototype']['encodeNumber'] = function (pomnkl) {
        if (!Number['isSafeInteger'] || Number['isSafeInteger'](pomnkl)) {
          if (pomnkl >= 0x0) {
            if (pomnkl < 0x80) this['writeU8'](pomnkl);else {
              if (pomnkl < 0x100) this['writeU8'](0xcc), this['writeU8'](pomnkl);else {
                if (pomnkl < 0x10000) this['writeU8'](0xcd), this['writeU16'](pomnkl);else pomnkl < 0x100000000 ? (this['writeU8'](0xce), this['writeU32'](pomnkl)) : (this['writeU8'](0xcf), this['writeU64'](pomnkl));
              }
            }
          } else {
            if (pomnkl >= -0x20) this['writeU8'](0xe0 | pomnkl + 0x20);else {
              if (pomnkl >= -0x80) this['writeU8'](0xd0), this['writeI8'](pomnkl);else {
                if (pomnkl >= -0x8000) this['writeU8'](0xd1), this['writeI16'](pomnkl);else pomnkl >= -0x80000000 ? (this['writeU8'](0xd2), this['writeI32'](pomnkl)) : (this['writeU8'](0xd3), this['writeI64'](pomnkl));
              }
            }
          }
        } else this['forceFloat32'] ? (this['writeU8'](0xca), this['writeF32'](pomnkl)) : (this['writeU8'](0xcb), this['writeF64'](pomnkl));
      }, sqtvr['prototype']['writeStringHeader'] = function (yuxzwv) {
        if (yuxzwv < 0x20) this['writeU8'](0xa0 + yuxzwv);else {
          if (yuxzwv < 0x100) this['writeU8'](0xd9), this['writeU8'](yuxzwv);else {
            if (yuxzwv < 0x10000) this['writeU8'](0xda), this['writeU16'](yuxzwv);else {
              if (yuxzwv < 0x100000000) this['writeU8'](0xdb), this['writeU32'](yuxzwv);else throw new Error('Too long string: ' + yuxzwv + ' bytes in UTF-8');
            }
          }
        }
      }, sqtvr['prototype']['encodeString'] = function (plnomq) {
        var ceabd = 0x1 + 0x4,
            klgihj = plnomq['length'];if (jnlim && klgihj > cabe) {
          var qputr = mjhli(plnomq);this['ensureBufferSizeToWrite'](ceabd + qputr), this['writeStringHeader'](qputr), efcdgh(plnomq, this['bytes'], this['pos']), this['pos'] += qputr;
        } else {
          var qputr = mjhli(plnomq);this['ensureBufferSizeToWrite'](ceabd + qputr), this['writeStringHeader'](qputr), lhgik(plnomq, this['bytes'], this['pos']), this['pos'] += qputr;
        }
      }, sqtvr['prototype']['encodeObject'] = function (uwvxt, uzvwyx) {
        var _0z21 = this['extensionCodec']['tryToEncode'](uwvxt, this['context']);if (_0z21 != null) this['encodeExtension'](_0z21);else {
          if (Array['isArray'](uwvxt)) this['encodeArray'](uwvxt, uzvwyx);else {
            if (ArrayBuffer['isView'](uwvxt)) this['encodeBinary'](uwvxt);else {
              if (typeof uwvxt === 'object') this['encodeMap'](uwvxt, uzvwyx);else throw new Error('Unrecognized object: ' + Object['prototype']['toString']['apply'](uwvxt));
            }
          }
        }
      }, sqtvr['prototype']['encodeBinary'] = function (pnoq) {
        var nmopqr = pnoq['byteLength'];if (nmopqr < 0x100) this['writeU8'](0xc4), this['writeU8'](nmopqr);else {
          if (nmopqr < 0x10000) this['writeU8'](0xc5), this['writeU16'](nmopqr);else {
            if (nmopqr < 0x100000000) this['writeU8'](0xc6), this['writeU32'](nmopqr);else throw new Error('Too large binary: ' + nmopqr);
          }
        }var tsorp = _1320(pnoq);this['writeU8a'](tsorp);
      }, sqtvr['prototype']['encodeArray'] = function (mnqp, z1$y0_) {
        var gdceh,
            sorqpn,
            decaf = mnqp['length'];if (decaf < 0x10) this['writeU8'](0x90 + decaf);else {
          if (decaf < 0x10000) this['writeU8'](0xdc), this['writeU16'](decaf);else {
            if (decaf < 0x100000000) this['writeU8'](0xdd), this['writeU32'](decaf);else throw new Error('Too large array: ' + decaf);
          }
        }try {
          for (var cbgdef = molknj(mnqp), jhkgf = cbgdef['next'](); !jhkgf['done']; jhkgf = cbgdef['next']()) {
            var okpl = jhkgf['value'];this['encode'](okpl, z1$y0_ + 0x1);
          }
        } catch (ijnm) {
          gdceh = { 'error': ijnm };
        } finally {
          try {
            if (jhkgf && !jhkgf['done'] && (sorqpn = cbgdef['return'])) sorqpn['call'](cbgdef);
          } finally {
            if (gdceh) throw gdceh['error'];
          }
        }
      }, sqtvr['prototype']['countWithoutUndefined'] = function (_x$wyz, uxwvyt) {
        var ifd,
            mnpkol,
            _123$ = 0x0;try {
          for (var hglki = molknj(uxwvyt), kfghij = hglki['next'](); !kfghij['done']; kfghij = hglki['next']()) {
            var ihjklg = kfghij['value'];_x$wyz[ihjklg] !== undefined && _123$++;
          }
        } catch (defg) {
          ifd = { 'error': defg };
        } finally {
          try {
            if (kfghij && !kfghij['done'] && (mnpkol = hglki['return'])) mnpkol['call'](hglki);
          } finally {
            if (ifd) throw ifd['error'];
          }
        }return _123$;
      }, sqtvr['prototype']['encodeMap'] = function (wtxuvs, baecdf) {
        var vxtwuy,
            cef,
            qpomnl = Object['keys'](wtxuvs);this['sortKeys'] && qpomnl['sort']();var eghf = this['ignoreUndefined'] ? this['countWithoutUndefined'](wtxuvs, qpomnl) : qpomnl['length'];if (eghf < 0x10) this['writeU8'](0x80 + eghf);else {
          if (eghf < 0x10000) this['writeU8'](0xde), this['writeU16'](eghf);else {
            if (eghf < 0x100000000) this['writeU8'](0xdf), this['writeU32'](eghf);else throw new Error('Too large map object: ' + eghf);
          }
        }try {
          for (var w$_yx = molknj(qpomnl), nlimj = w$_yx['next'](); !nlimj['done']; nlimj = w$_yx['next']()) {
            var gcdef = nlimj['value'],
                rvsuqt = wtxuvs[gcdef];!(this['ignoreUndefined'] && rvsuqt === undefined) && (this['encodeString'](gcdef), this['encode'](rvsuqt, baecdf + 0x1));
          }
        } catch (xvwty) {
          vxtwuy = { 'error': xvwty };
        } finally {
          try {
            if (nlimj && !nlimj['done'] && (cef = w$_yx['return'])) cef['call'](w$_yx);
          } finally {
            if (vxtwuy) throw vxtwuy['error'];
          }
        }
      }, sqtvr['prototype']['encodeExtension'] = function (kjlmin) {
        var dhife = kjlmin['data']['length'];if (dhife === 0x1) this['writeU8'](0xd4);else {
          if (dhife === 0x2) this['writeU8'](0xd5);else {
            if (dhife === 0x4) this['writeU8'](0xd6);else {
              if (dhife === 0x8) this['writeU8'](0xd7);else {
                if (dhife === 0x10) this['writeU8'](0xd8);else {
                  if (dhife < 0x100) this['writeU8'](0xc7), this['writeU8'](dhife);else {
                    if (dhife < 0x10000) this['writeU8'](0xc8), this['writeU16'](dhife);else {
                      if (dhife < 0x100000000) this['writeU8'](0xc9), this['writeU32'](dhife);else throw new Error('Too large extension object: ' + dhife);
                    }
                  }
                }
              }
            }
          }
        }this['writeI8'](kjlmin['type']), this['writeU8a'](kjlmin['data']);
      }, sqtvr['prototype']['writeU8'] = function (jefhg) {
        this['ensureBufferSizeToWrite'](0x1), this['view']['setUint8'](this['pos'], jefhg), this['pos']++;
      }, sqtvr['prototype']['writeU8a'] = function (nmol) {
        var wsruvt = nmol['length'];this['ensureBufferSizeToWrite'](wsruvt), this['bytes']['set'](nmol, this['pos']), this['pos'] += wsruvt;
      }, sqtvr['prototype']['writeI8'] = function (orpnqs) {
        this['ensureBufferSizeToWrite'](0x1), this['view']['setInt8'](this['pos'], orpnqs), this['pos']++;
      }, sqtvr['prototype']['writeU16'] = function (cadf) {
        this['ensureBufferSizeToWrite'](0x2), this['view']['setUint16'](this['pos'], cadf), this['pos'] += 0x2;
      }, sqtvr['prototype']['writeI16'] = function (mropq) {
        this['ensureBufferSizeToWrite'](0x2), this['view']['setInt16'](this['pos'], mropq), this['pos'] += 0x2;
      }, sqtvr['prototype']['writeU32'] = function (fjk) {
        this['ensureBufferSizeToWrite'](0x4), this['view']['setUint32'](this['pos'], fjk), this['pos'] += 0x4;
      }, sqtvr['prototype']['writeI32'] = function (yvuwtx) {
        this['ensureBufferSizeToWrite'](0x4), this['view']['setInt32'](this['pos'], yvuwtx), this['pos'] += 0x4;
      }, sqtvr['prototype']['writeF32'] = function (qpor) {
        this['ensureBufferSizeToWrite'](0x4), this['view']['setFloat32'](this['pos'], qpor), this['pos'] += 0x4;
      }, sqtvr['prototype']['writeF64'] = function (qtrsv) {
        this['ensureBufferSizeToWrite'](0x8), this['view']['setFloat64'](this['pos'], qtrsv), this['pos'] += 0x8;
      }, sqtvr['prototype']['writeU64'] = function (ikfgj) {
        this['ensureBufferSizeToWrite'](0x8), edgfi(this['view'], this['pos'], ikfgj), this['pos'] += 0x8;
      }, sqtvr['prototype']['writeI64'] = function (onmrp) {
        this['ensureBufferSizeToWrite'](0x8), lkijm(this['view'], this['pos'], onmrp), this['pos'] += 0x8;
      }, sqtvr;
    }(),
        fidg = {};function bedgcf(hjgie, jgfik) {
      jgfik === void 0x0 && (jgfik = fidg);var opkm = new qrputs(jgfik['extensionCodec'], jgfik['context'], jgfik['maxDepth'], jgfik['initialBufferSize'], jgfik['sortKeys'], jgfik['forceFloat32'], jgfik['ignoreUndefined']);return opkm['encode'](hjgie, 0x1), opkm['getUint8Array']();
    }function wtyuv(jonklm) {
      return (jonklm < 0x0 ? '-' : '') + '0x' + Math['abs'](jonklm)['toString'](0x10)['padStart'](0x2, '0');
    }var cfgebd = 0x10,
        rnpmq = 0x10,
        hdfeg = function () {
      function mhijl(lmqpo, soqnrp) {
        lmqpo === void 0x0 && (lmqpo = cfgebd);soqnrp === void 0x0 && (soqnrp = rnpmq);this['maxKeyLength'] = lmqpo, this['maxLengthPerKey'] = soqnrp, this['caches'] = [];for (var rtswvu = 0x0; rtswvu < this['maxKeyLength']; rtswvu++) {
          this['caches']['push']([]);
        }
      }return mhijl['prototype']['canBeCached'] = function (kimlnj) {
        return kimlnj > 0x0 && kimlnj <= this['maxKeyLength'];
      }, mhijl['prototype']['get'] = function (tvsuqr, mokjln, prstu) {
        var lhjm = this['caches'][prstu - 0x1],
            lihjkm = lhjm['length'];spqrtu: for (var gdecb = 0x0; gdecb < lihjkm; gdecb++) {
          var ronpm = lhjm[gdecb],
              ehfgi = ronpm['bytes'];for (var ljkihm = 0x0; ljkihm < prstu; ljkihm++) {
            if (ehfgi[ljkihm] !== tvsuqr[mokjln + ljkihm]) continue spqrtu;
          }return ronpm['value'];
        }return null;
      }, mhijl['prototype']['store'] = function (_$0z21, vqturs) {
        var fhge = this['caches'][_$0z21['length'] - 0x1],
            svtr = { 'bytes': _$0z21, 'value': vqturs };fhge['length'] >= this['maxLengthPerKey'] ? fhge[Math['random']() * fhge['length'] | 0x0] = svtr : fhge['push'](svtr);
      }, mhijl['prototype']['decode'] = function (rqspt, _10$z, imhjl) {
        var lnpmoq = this['get'](rqspt, _10$z, imhjl);if (lnpmoq != null) return lnpmoq;var fbadc = xuwvzy(rqspt, _10$z, imhjl),
            ilkhmj;if ($02) ilkhmj = Uint8Array['prototype']['slice']['call'](rqspt, _10$z, _10$z + imhjl);else ilkhmj = Uint8Array['prototype']['subarray']['call'](rqspt, _10$z, _10$z + imhjl);return this['store'](ilkhmj, fbadc), fbadc;
      }, mhijl;
    }(),
        xzuw = undefined && undefined['__awaiter'] || function (ql, xvyu, plknm, omrnp) {
      function vy$xz(bfcdeg) {
        return bfcdeg instanceof plknm ? bfcdeg : new plknm(function (kiln) {
          kiln(bfcdeg);
        });
      }return new (plknm || (plknm = Promise))(function (txswv, gkij) {
        function tuyx(nlkmo) {
          try {
            z$wy(omrnp['next'](nlkmo));
          } catch (vwzxy) {
            gkij(vwzxy);
          }
        }function _z0y1$(xsvtw) {
          try {
            z$wy(omrnp['throw'](xsvtw));
          } catch (miljnk) {
            gkij(miljnk);
          }
        }function z$wy(w_xyz) {
          w_xyz['done'] ? txswv(w_xyz['value']) : vy$xz(w_xyz['value'])['then'](tuyx, _z0y1$);
        }z$wy((omrnp = omrnp['apply'](ql, xvyu || []))['next']());
      });
    },
        _xyw$z = undefined && undefined['__generator'] || function (qopst, z$_y0x) {
      var qnprm = { 'label': 0x0, 'sent': function () {
          if (jkhilg[0x0] & 0x1) throw jkhilg[0x1];return jkhilg[0x1];
        }, 'trys': [], 'ops': [] },
          zxuyv,
          wrtv,
          jkhilg,
          $z_x0;return $z_x0 = { 'next': _$yz0(0x0), 'throw': _$yz0(0x1), 'return': _$yz0(0x2) }, typeof Symbol === 'function' && ($z_x0[Symbol['iterator']] = function () {
        return this;
      }), $z_x0;function _$yz0(kfihgj) {
        return function (hfgk) {
          return txwuv([kfihgj, hfgk]);
        };
      }function txwuv(fbgce) {
        if (zxuyv) throw new TypeError('Generator is already executing.');while (qnprm) try {
          if (zxuyv = 0x1, wrtv && (jkhilg = fbgce[0x0] & 0x2 ? wrtv['return'] : fbgce[0x0] ? wrtv['throw'] || ((jkhilg = wrtv['return']) && jkhilg['call'](wrtv), 0x0) : wrtv['next']) && !(jkhilg = jkhilg['call'](wrtv, fbgce[0x1]))['done']) return jkhilg;if (wrtv = 0x0, jkhilg) fbgce = [fbgce[0x0] & 0x2, jkhilg['value']];switch (fbgce[0x0]) {case 0x0:case 0x1:
              jkhilg = fbgce;break;case 0x4:
              qnprm['label']++;return { 'value': fbgce[0x1], 'done': ![] };case 0x5:
              qnprm['label']++, wrtv = fbgce[0x1], fbgce = [0x0];continue;case 0x7:
              fbgce = qnprm['ops']['pop'](), qnprm['trys']['pop']();continue;default:
              if (!(jkhilg = qnprm['trys'], jkhilg = jkhilg['length'] > 0x0 && jkhilg[jkhilg['length'] - 0x1]) && (fbgce[0x0] === 0x6 || fbgce[0x0] === 0x2)) {
                qnprm = 0x0;continue;
              }if (fbgce[0x0] === 0x3 && (!jkhilg || fbgce[0x1] > jkhilg[0x0] && fbgce[0x1] < jkhilg[0x3])) {
                qnprm['label'] = fbgce[0x1];break;
              }if (fbgce[0x0] === 0x6 && qnprm['label'] < jkhilg[0x1]) {
                qnprm['label'] = jkhilg[0x1], jkhilg = fbgce;break;
              }if (jkhilg && qnprm['label'] < jkhilg[0x2]) {
                qnprm['label'] = jkhilg[0x2], qnprm['ops']['push'](fbgce);break;
              }if (jkhilg[0x2]) qnprm['ops']['pop']();qnprm['trys']['pop']();continue;}fbgce = z$_y0x['call'](qopst, qnprm);
        } catch (zuwvx) {
          fbgce = [0x6, zuwvx], wrtv = 0x0;
        } finally {
          zxuyv = jkhilg = 0x0;
        }if (fbgce[0x0] & 0x5) throw fbgce[0x1];return { 'value': fbgce[0x0] ? fbgce[0x1] : void 0x0, 'done': !![] };
      }
    },
        _1z$y = undefined && undefined['__asyncValues'] || function (ijkgh) {
      if (!Symbol['asyncIterator']) throw new TypeError('Symbol.asyncIterator is not defined.');var hecdg = ijkgh[Symbol['asyncIterator']],
          dhcfeg;return hecdg ? hecdg['call'](ijkgh) : (ijkgh = typeof __values === 'function' ? __values(ijkgh) : ijkgh[Symbol['iterator']](), dhcfeg = {}, w_$yxz('next'), w_$yxz('throw'), w_$yxz('return'), dhcfeg[Symbol['asyncIterator']] = function () {
        return this;
      }, dhcfeg);function w_$yxz(nlkjmo) {
        dhcfeg[nlkjmo] = ijkgh[nlkjmo] && function (fdeh) {
          return new Promise(function (noqrmp, wtvxyu) {
            fdeh = ijkgh[nlkjmo](fdeh), srut(noqrmp, wtvxyu, fdeh['done'], fdeh['value']);
          });
        };
      }function srut(fdihe, utxv, moqprn, hkjigf) {
        Promise['resolve'](hkjigf)['then'](function (y_$xzw) {
          fdihe({ 'value': y_$xzw, 'done': moqprn });
        }, utxv);
      }
    },
        yz = undefined && undefined['__await'] || function (ropqm) {
      return this instanceof yz ? (this['v'] = ropqm, this) : new yz(ropqm);
    },
        qtusrv = undefined && undefined['__asyncGenerator'] || function (mkopn, $xzwy, _x) {
      if (!Symbol['asyncIterator']) throw new TypeError('Symbol.asyncIterator is not defined.');var vwzyx = _x['apply'](mkopn, $xzwy || []),
          promqn,
          dcbfa = [];return promqn = {}, gbdfce('next'), gbdfce('throw'), gbdfce('return'), promqn[Symbol['asyncIterator']] = function () {
        return this;
      }, promqn;function gbdfce(pqolmn) {
        if (vwzyx[pqolmn]) promqn[pqolmn] = function (lojnkm) {
          return new Promise(function (qrost, osnrp) {
            dcbfa['push']([pqolmn, lojnkm, qrost, osnrp]) > 0x1 || ifegdh(pqolmn, lojnkm);
          });
        };
      }function ifegdh(utspr, opnlmk) {
        try {
          fhije(vwzyx[utspr](opnlmk));
        } catch (prqmn) {
          spotr(dcbfa[0x0][0x3], prqmn);
        }
      }function fhije(truwv) {
        truwv['value'] instanceof yz ? Promise['resolve'](truwv['value']['v'])['then'](opl, vwtyxu) : spotr(dcbfa[0x0][0x2], truwv);
      }function opl(uxvywt) {
        ifegdh('next', uxvywt);
      }function vwtyxu(pmnqr) {
        ifegdh('throw', pmnqr);
      }function spotr(_32410, noprqs) {
        if (_32410(noprqs), dcbfa['shift'](), dcbfa['length']) ifegdh(dcbfa[0x0][0x0], dcbfa[0x0][0x1]);
      }
    },
        y$01_z = function (vturws) {
      var xvyuwz = typeof vturws;return xvyuwz === 'string' || xvyuwz === 'number';
    },
        oqrs = -0x1,
        vuwt = new DataView(new ArrayBuffer(0x0)),
        mlknjo = new Uint8Array(vuwt['buffer']),
        oqlmn = function () {
      try {
        vuwt['getInt8'](0x0);
      } catch (nopsqr) {
        return nopsqr['constructor'];
      }throw new Error('never reached');
    }(),
        y_xw$ = new oqlmn('Insufficient data'),
        wv$yzx = 0xffffffff,
        vustrq = new hdfeg(),
        kighlj = function () {
      function vtsuq(fdegb, mhljki, jikl, pnomqr, lmn, kgjif, higjfk, cdbeg) {
        fdegb === void 0x0 && (fdegb = vyxwtu['defaultCodec']), jikl === void 0x0 && (jikl = wv$yzx), pnomqr === void 0x0 && (pnomqr = wv$yzx), lmn === void 0x0 && (lmn = wv$yzx), kgjif === void 0x0 && (kgjif = wv$yzx), higjfk === void 0x0 && (higjfk = wv$yzx), cdbeg === void 0x0 && (cdbeg = vustrq), this['extensionCodec'] = fdegb, this['context'] = mhljki, this['maxStrLength'] = jikl, this['maxBinLength'] = pnomqr, this['maxArrayLength'] = lmn, this['maxMapLength'] = kgjif, this['maxExtLength'] = higjfk, this['cachedKeyDecoder'] = cdbeg, this['totalPos'] = 0x0, this['pos'] = 0x0, this['view'] = vuwt, this['bytes'] = mlknjo, this['headByte'] = oqrs, this['stack'] = [];
      }return vtsuq['prototype']['setBuffer'] = function (fcge) {
        this['bytes'] = _1320(fcge), this['view'] = fgdebc(this['bytes']), this['pos'] = 0x0;
      }, vtsuq['prototype']['appendBuffer'] = function (hjigk) {
        if (this['headByte'] === oqrs && !this['hasRemaining']()) this['setBuffer'](hjigk);else {
          var pqsotr = this['bytes']['subarray'](this['pos']),
              psrutq = _1320(hjigk),
              qonrps = new Uint8Array(pqsotr['length'] + psrutq['length']);qonrps['set'](pqsotr), qonrps['set'](psrutq, pqsotr['length']), this['setBuffer'](qonrps);
        }
      }, vtsuq['prototype']['hasRemaining'] = function (hlikj) {
        return hlikj === void 0x0 && (hlikj = 0x1), this['view']['byteLength'] - this['pos'] >= hlikj;
      }, vtsuq['prototype']['createNoExtraBytesError'] = function (gcf) {
        var mjlik = this,
            egbcf = mjlik['view'],
            ptru = mjlik['pos'];return new RangeError('Extra ' + (egbcf['byteLength'] - ptru) + ' byte(s) found at buffer[' + gcf + ']');
      }, vtsuq['prototype']['decodeSingleSync'] = function () {
        var lmknop = this['decodeSync']();if (this['hasRemaining']()) throw this['createNoExtraBytesError'](this['pos']);return lmknop;
      }, vtsuq['prototype']['decodeSingleAsync'] = function (nkiljm) {
        var ikmhl, jiegh, ebfad, xtyvu;return xzuw(this, void 0x0, void 0x0, function () {
          var zxvuy, utyx, usqvtr, ptsru, z0, tvwsru, ghjef, uqrps;return _xyw$z(this, function (pmkon) {
            switch (pmkon['label']) {case 0x0:
                zxvuy = ![], pmkon['label'] = 0x1;case 0x1:
                pmkon['trys']['push']([0x1, 0x6, 0x7, 0xc]), ikmhl = _1z$y(nkiljm), pmkon['label'] = 0x2;case 0x2:
                return [0x4, ikmhl['next']()];case 0x3:
                if (!(jiegh = pmkon['sent'](), !jiegh['done'])) return [0x3, 0x5];usqvtr = jiegh['value'];if (zxvuy) throw this['createNoExtraBytesError'](this['totalPos']);this['appendBuffer'](usqvtr);try {
                  utyx = this['decodeSync'](), zxvuy = !![];
                } catch (kimn) {
                  if (!(kimn instanceof oqlmn)) throw kimn;
                }this['totalPos'] += this['pos'], pmkon['label'] = 0x4;case 0x4:
                return [0x3, 0x2];case 0x5:
                return [0x3, 0xc];case 0x6:
                ptsru = pmkon['sent'](), ebfad = { 'error': ptsru };return [0x3, 0xc];case 0x7:
                pmkon['trys']['push']([0x7,, 0xa, 0xb]);if (!(jiegh && !jiegh['done'] && (xtyvu = ikmhl['return']))) return [0x3, 0x9];return [0x4, xtyvu['call'](ikmhl)];case 0x8:
                pmkon['sent'](), pmkon['label'] = 0x9;case 0x9:
                return [0x3, 0xb];case 0xa:
                if (ebfad) throw ebfad['error'];return [0x7];case 0xb:
                return [0x7];case 0xc:
                if (zxvuy) {
                  if (this['hasRemaining']()) throw this['createNoExtraBytesError'](this['totalPos']);return [0x2, utyx];
                }z0 = this, tvwsru = z0['headByte'], ghjef = z0['pos'], uqrps = z0['totalPos'];throw new RangeError('Insufficient data in parcing ' + wtyuv(tvwsru) + ' at ' + uqrps + '\x20(' + ghjef + ' in the current buffer)');}
          });
        });
      }, vtsuq['prototype']['decodeArrayStream'] = function (vwrst) {
        return this['decodeMultiAsync'](vwrst, !![]);
      }, vtsuq['prototype']['decodeStream'] = function (rutqsp) {
        return this['decodeMultiAsync'](rutqsp, ![]);
      }, vtsuq['prototype']['decodeMultiAsync'] = function (fbacd, ecfabd) {
        return qtusrv(this, arguments, function _31() {
          var $x_0, fdig, fhgjei, dhefi, yzx$_, bfdce, rtvwsu, qrpomn, uvsrqt;return _xyw$z(this, function (mpklo) {
            switch (mpklo['label']) {case 0x0:
                $x_0 = ecfabd, fdig = -0x1, mpklo['label'] = 0x1;case 0x1:
                mpklo['trys']['push']([0x1, 0xd, 0xe, 0x13]), fhgjei = _1z$y(fbacd), mpklo['label'] = 0x2;case 0x2:
                return [0x4, yz(fhgjei['next']())];case 0x3:
                if (!(dhefi = mpklo['sent'](), !dhefi['done'])) return [0x3, 0xc];yzx$_ = dhefi['value'];if (ecfabd && fdig === 0x0) throw this['createNoExtraBytesError'](this['totalPos']);this['appendBuffer'](yzx$_);$x_0 && (fdig = this['readArraySize'](), $x_0 = ![], this['complete']());mpklo['label'] = 0x4;case 0x4:
                mpklo['trys']['push']([0x4, 0x9,, 0xa]), mpklo['label'] = 0x5;case 0x5:
                if (![]) {}return [0x4, yz(this['decodeSync']())];case 0x6:
                return [0x4, mpklo['sent']()];case 0x7:
                mpklo['sent']();if (--fdig === 0x0) return [0x3, 0x8];return [0x3, 0x5];case 0x8:
                return [0x3, 0xa];case 0x9:
                bfdce = mpklo['sent']();if (!(bfdce instanceof oqlmn)) throw bfdce;return [0x3, 0xa];case 0xa:
                this['totalPos'] += this['pos'], mpklo['label'] = 0xb;case 0xb:
                return [0x3, 0x2];case 0xc:
                return [0x3, 0x13];case 0xd:
                rtvwsu = mpklo['sent'](), qrpomn = { 'error': rtvwsu };return [0x3, 0x13];case 0xe:
                mpklo['trys']['push']([0xe,, 0x11, 0x12]);if (!(dhefi && !dhefi['done'] && (uvsrqt = fhgjei['return']))) return [0x3, 0x10];return [0x4, yz(uvsrqt['call'](fhgjei))];case 0xf:
                mpklo['sent'](), mpklo['label'] = 0x10;case 0x10:
                return [0x3, 0x12];case 0x11:
                if (qrpomn) throw qrpomn['error'];return [0x7];case 0x12:
                return [0x7];case 0x13:
                return [0x2];}
          });
        });
      }, vtsuq['prototype']['decodeSync'] = function () {
        ifgh: while (!![]) {
          var ronmp = this['readHeadByte'](),
              uyvxtw = void 0x0;if (ronmp >= 0xe0) uyvxtw = ronmp - 0x100;else {
            if (ronmp < 0xc0) {
              if (ronmp < 0x80) uyvxtw = ronmp;else {
                if (ronmp < 0x90) {
                  var z$_y10 = ronmp - 0x80;if (z$_y10 !== 0x0) {
                    this['pushMapState'](z$_y10), this['complete']();continue ifgh;
                  } else uyvxtw = {};
                } else {
                  if (ronmp < 0xa0) {
                    var z$_y10 = ronmp - 0x90;if (z$_y10 !== 0x0) {
                      this['pushArrayState'](z$_y10), this['complete']();continue ifgh;
                    } else uyvxtw = [];
                  } else {
                    var nsrp = ronmp - 0xa0;uyvxtw = this['decodeUtf8String'](nsrp, 0x0);
                  }
                }
              }
            } else {
              if (ronmp === 0xc0) uyvxtw = null;else {
                if (ronmp === 0xc2) uyvxtw = ![];else {
                  if (ronmp === 0xc3) uyvxtw = !![];else {
                    if (ronmp === 0xca) uyvxtw = this['readF32']();else {
                      if (ronmp === 0xcb) uyvxtw = this['readF64']();else {
                        if (ronmp === 0xcc) uyvxtw = this['readU8']();else {
                          if (ronmp === 0xcd) uyvxtw = this['readU16']();else {
                            if (ronmp === 0xce) uyvxtw = this['readU32']();else {
                              if (ronmp === 0xcf) uyvxtw = this['readU64']();else {
                                if (ronmp === 0xd0) uyvxtw = this['readI8']();else {
                                  if (ronmp === 0xd1) uyvxtw = this['readI16']();else {
                                    if (ronmp === 0xd2) uyvxtw = this['readI32']();else {
                                      if (ronmp === 0xd3) uyvxtw = this['readI64']();else {
                                        if (ronmp === 0xd9) {
                                          var nsrp = this['lookU8']();uyvxtw = this['decodeUtf8String'](nsrp, 0x1);
                                        } else {
                                          if (ronmp === 0xda) {
                                            var nsrp = this['lookU16']();uyvxtw = this['decodeUtf8String'](nsrp, 0x2);
                                          } else {
                                            if (ronmp === 0xdb) {
                                              var nsrp = this['lookU32']();uyvxtw = this['decodeUtf8String'](nsrp, 0x4);
                                            } else {
                                              if (ronmp === 0xdc) {
                                                var z$_y10 = this['readU16']();if (z$_y10 !== 0x0) {
                                                  this['pushArrayState'](z$_y10), this['complete']();continue ifgh;
                                                } else uyvxtw = [];
                                              } else {
                                                if (ronmp === 0xdd) {
                                                  var z$_y10 = this['readU32']();if (z$_y10 !== 0x0) {
                                                    this['pushArrayState'](z$_y10), this['complete']();continue ifgh;
                                                  } else uyvxtw = [];
                                                } else {
                                                  if (ronmp === 0xde) {
                                                    var z$_y10 = this['readU16']();if (z$_y10 !== 0x0) {
                                                      this['pushMapState'](z$_y10), this['complete']();continue ifgh;
                                                    } else uyvxtw = {};
                                                  } else {
                                                    if (ronmp === 0xdf) {
                                                      var z$_y10 = this['readU32']();if (z$_y10 !== 0x0) {
                                                        this['pushMapState'](z$_y10), this['complete']();continue ifgh;
                                                      } else uyvxtw = {};
                                                    } else {
                                                      if (ronmp === 0xc4) {
                                                        var z$_y10 = this['lookU8']();uyvxtw = this['decodeBinary'](z$_y10, 0x1);
                                                      } else {
                                                        if (ronmp === 0xc5) {
                                                          var z$_y10 = this['lookU16']();uyvxtw = this['decodeBinary'](z$_y10, 0x2);
                                                        } else {
                                                          if (ronmp === 0xc6) {
                                                            var z$_y10 = this['lookU32']();uyvxtw = this['decodeBinary'](z$_y10, 0x4);
                                                          } else {
                                                            if (ronmp === 0xd4) uyvxtw = this['decodeExtension'](0x1, 0x0);else {
                                                              if (ronmp === 0xd5) uyvxtw = this['decodeExtension'](0x2, 0x0);else {
                                                                if (ronmp === 0xd6) uyvxtw = this['decodeExtension'](0x4, 0x0);else {
                                                                  if (ronmp === 0xd7) uyvxtw = this['decodeExtension'](0x8, 0x0);else {
                                                                    if (ronmp === 0xd8) uyvxtw = this['decodeExtension'](0x10, 0x0);else {
                                                                      if (ronmp === 0xc7) {
                                                                        var z$_y10 = this['lookU8']();uyvxtw = this['decodeExtension'](z$_y10, 0x1);
                                                                      } else {
                                                                        if (ronmp === 0xc8) {
                                                                          var z$_y10 = this['lookU16']();uyvxtw = this['decodeExtension'](z$_y10, 0x2);
                                                                        } else {
                                                                          if (ronmp === 0xc9) {
                                                                            var z$_y10 = this['lookU32']();uyvxtw = this['decodeExtension'](z$_y10, 0x4);
                                                                          } else throw new Error('Unrecognized type byte: ' + wtyuv(ronmp));
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }this['complete']();var $2z0 = this['stack'];while ($2z0['length'] > 0x0) {
            var qtsrup = $2z0[$2z0['length'] - 0x1];if (qtsrup['type'] === 0x0) {
              qtsrup['array'][qtsrup['position']] = uyvxtw, qtsrup['position']++;if (qtsrup['position'] === qtsrup['size']) $2z0['pop'](), uyvxtw = qtsrup['array'];else continue ifgh;
            } else {
              if (qtsrup['type'] === 0x1) {
                if (!y$01_z(uyvxtw)) throw new Error('The type of key must be string or number but ' + typeof uyvxtw);qtsrup['key'] = uyvxtw, qtsrup['type'] = 0x2;continue ifgh;
              } else {
                qtsrup['map'][qtsrup['key']] = uyvxtw, qtsrup['readCount']++;if (qtsrup['readCount'] === qtsrup['size']) $2z0['pop'](), uyvxtw = qtsrup['map'];else {
                  qtsrup['key'] = null, qtsrup['type'] = 0x1;continue ifgh;
                }
              }
            }
          }return uyvxtw;
        }
      }, vtsuq['prototype']['readHeadByte'] = function () {
        return this['headByte'] === oqrs && (this['headByte'] = this['readU8']()), this['headByte'];
      }, vtsuq['prototype']['complete'] = function () {
        this['headByte'] = oqrs;
      }, vtsuq['prototype']['readArraySize'] = function () {
        var difg = this['readHeadByte']();switch (difg) {case 0xdc:
            return this['readU16']();case 0xdd:
            return this['readU32']();default:
            {
              if (difg < 0xa0) return difg - 0x90;else throw new Error('Unrecognized array type byte: ' + wtyuv(difg));
            }}
      }, vtsuq['prototype']['pushMapState'] = function (jkhmil) {
        if (jkhmil > this['maxMapLength']) throw new Error('Max length exceeded: map length (' + jkhmil + ') > maxMapLengthLength (' + this['maxMapLength'] + ')');this['stack']['push']({ 'type': 0x1, 'size': jkhmil, 'key': null, 'readCount': 0x0, 'map': {} });
      }, vtsuq['prototype']['pushArrayState'] = function (wyuzvx) {
        if (wyuzvx > this['maxArrayLength']) throw new Error('Max length exceeded: array length (' + wyuzvx + ') > maxArrayLength (' + this['maxArrayLength'] + ')');this['stack']['push']({ 'type': 0x0, 'size': wyuzvx, 'array': new Array(wyuzvx), 'position': 0x0 });
      }, vtsuq['prototype']['decodeUtf8String'] = function (orstp, $yw_z) {
        var $yz_10;if (orstp > this['maxStrLength']) throw new Error('Max length exceeded: UTF-8 byte length (' + orstp + ') > maxStrLength (' + this['maxStrLength'] + ')');if (this['bytes']['byteLength'] < this['pos'] + $yw_z + orstp) throw y_xw$;var iefjg = this['pos'] + $yw_z,
            qsrot;if (this['stateIsMapKey']() && (($yz_10 = this['cachedKeyDecoder']) === null || $yz_10 === void 0x0 ? void 0x0 : $yz_10['canBeCached'](orstp))) qsrot = this['cachedKeyDecoder']['decode'](this['bytes'], iefjg, orstp);else jnlim && orstp > _1yz$ ? qsrot = otsprq(this['bytes'], iefjg, orstp) : qsrot = xuwvzy(this['bytes'], iefjg, orstp);return this['pos'] += $yw_z + orstp, qsrot;
      }, vtsuq['prototype']['stateIsMapKey'] = function () {
        if (this['stack']['length'] > 0x0) {
          var jihkfg = this['stack'][this['stack']['length'] - 0x1];return jihkfg['type'] === 0x1;
        }return ![];
      }, vtsuq['prototype']['decodeBinary'] = function (dcbea, opqlnm) {
        if (dcbea > this['maxBinLength']) throw new Error('Max length exceeded: bin length (' + dcbea + ') > maxBinLength (' + this['maxBinLength'] + ')');if (!this['hasRemaining'](dcbea + opqlnm)) throw y_xw$;var $z0y_x = this['pos'] + opqlnm,
            zvuxwy = this['bytes']['subarray']($z0y_x, $z0y_x + dcbea);return this['pos'] += opqlnm + dcbea, zvuxwy;
      }, vtsuq['prototype']['decodeExtension'] = function (klmnji, mrqonp) {
        if (klmnji > this['maxExtLength']) throw new Error('Max length exceeded: ext length (' + klmnji + ') > maxExtLength (' + this['maxExtLength'] + ')');var knjmil = this['view']['getInt8'](this['pos'] + mrqonp),
            xw = this['decodeBinary'](klmnji, mrqonp + 0x1);return this['extensionCodec']['decode'](xw, knjmil, this['context']);
      }, vtsuq['prototype']['lookU8'] = function () {
        return this['view']['getUint8'](this['pos']);
      }, vtsuq['prototype']['lookU16'] = function () {
        return this['view']['getUint16'](this['pos']);
      }, vtsuq['prototype']['lookU32'] = function () {
        return this['view']['getUint32'](this['pos']);
      }, vtsuq['prototype']['readU8'] = function () {
        var eigh = this['view']['getUint8'](this['pos']);return this['pos']++, eigh;
      }, vtsuq['prototype']['readI8'] = function () {
        var ebgdf = this['view']['getInt8'](this['pos']);return this['pos']++, ebgdf;
      }, vtsuq['prototype']['readU16'] = function () {
        var wvy$xz = this['view']['getUint16'](this['pos']);return this['pos'] += 0x2, wvy$xz;
      }, vtsuq['prototype']['readI16'] = function () {
        var fije = this['view']['getInt16'](this['pos']);return this['pos'] += 0x2, fije;
      }, vtsuq['prototype']['readU32'] = function () {
        var nji = this['view']['getUint32'](this['pos']);return this['pos'] += 0x4, nji;
      }, vtsuq['prototype']['readI32'] = function () {
        var edafcb = this['view']['getInt32'](this['pos']);return this['pos'] += 0x4, edafcb;
      }, vtsuq['prototype']['readU64'] = function () {
        var $w_y = pmkl(this['view'], this['pos']);return this['pos'] += 0x8, $w_y;
      }, vtsuq['prototype']['readI64'] = function () {
        var qsuvtr = lqnomp(this['view'], this['pos']);return this['pos'] += 0x8, qsuvtr;
      }, vtsuq['prototype']['readF32'] = function () {
        var xwyvut = this['view']['getFloat32'](this['pos']);return this['pos'] += 0x4, xwyvut;
      }, vtsuq['prototype']['readF64'] = function () {
        var qvurt = this['view']['getFloat64'](this['pos']);return this['pos'] += 0x8, qvurt;
      }, vtsuq;
    }(),
        usrp = {};function fehcgd(tvwru, jhie) {
      jhie === void 0x0 && (jhie = usrp);var z02_1$ = new kighlj(jhie['extensionCodec'], jhie['context'], jhie['maxStrLength'], jhie['maxBinLength'], jhie['maxArrayLength'], jhie['maxMapLength'], jhie['maxExtLength']);return z02_1$['setBuffer'](tvwru), z02_1$['decodeSingleSync']();
    }var $zyx0_ = undefined && undefined['__generator'] || function (rmnpoq, svurq) {
      var vuxstw = { 'label': 0x0, 'sent': function () {
          if (wv$[0x0] & 0x1) throw wv$[0x1];return wv$[0x1];
        }, 'trys': [], 'ops': [] },
          nmolqp,
          kminjl,
          wv$,
          fhdeig;return fhdeig = { 'next': urtvqs(0x0), 'throw': urtvqs(0x1), 'return': urtvqs(0x2) }, typeof Symbol === 'function' && (fhdeig[Symbol['iterator']] = function () {
        return this;
      }), fhdeig;function urtvqs(polkmn) {
        return function (qpsort) {
          return becdf([polkmn, qpsort]);
        };
      }function becdf(igdfeh) {
        if (nmolqp) throw new TypeError('Generator is already executing.');while (vuxstw) try {
          if (nmolqp = 0x1, kminjl && (wv$ = igdfeh[0x0] & 0x2 ? kminjl['return'] : igdfeh[0x0] ? kminjl['throw'] || ((wv$ = kminjl['return']) && wv$['call'](kminjl), 0x0) : kminjl['next']) && !(wv$ = wv$['call'](kminjl, igdfeh[0x1]))['done']) return wv$;if (kminjl = 0x0, wv$) igdfeh = [igdfeh[0x0] & 0x2, wv$['value']];switch (igdfeh[0x0]) {case 0x0:case 0x1:
              wv$ = igdfeh;break;case 0x4:
              vuxstw['label']++;return { 'value': igdfeh[0x1], 'done': ![] };case 0x5:
              vuxstw['label']++, kminjl = igdfeh[0x1], igdfeh = [0x0];continue;case 0x7:
              igdfeh = vuxstw['ops']['pop'](), vuxstw['trys']['pop']();continue;default:
              if (!(wv$ = vuxstw['trys'], wv$ = wv$['length'] > 0x0 && wv$[wv$['length'] - 0x1]) && (igdfeh[0x0] === 0x6 || igdfeh[0x0] === 0x2)) {
                vuxstw = 0x0;continue;
              }if (igdfeh[0x0] === 0x3 && (!wv$ || igdfeh[0x1] > wv$[0x0] && igdfeh[0x1] < wv$[0x3])) {
                vuxstw['label'] = igdfeh[0x1];break;
              }if (igdfeh[0x0] === 0x6 && vuxstw['label'] < wv$[0x1]) {
                vuxstw['label'] = wv$[0x1], wv$ = igdfeh;break;
              }if (wv$ && vuxstw['label'] < wv$[0x2]) {
                vuxstw['label'] = wv$[0x2], vuxstw['ops']['push'](igdfeh);break;
              }if (wv$[0x2]) vuxstw['ops']['pop']();vuxstw['trys']['pop']();continue;}igdfeh = svurq['call'](rmnpoq, vuxstw);
        } catch (lponm) {
          igdfeh = [0x6, lponm], kminjl = 0x0;
        } finally {
          nmolqp = wv$ = 0x0;
        }if (igdfeh[0x0] & 0x5) throw igdfeh[0x1];return { 'value': igdfeh[0x0] ? igdfeh[0x1] : void 0x0, 'done': !![] };
      }
    },
        sprotq = undefined && undefined['__await'] || function (kom) {
      return this instanceof sprotq ? (this['v'] = kom, this) : new sprotq(kom);
    },
        $1y0_ = undefined && undefined['__asyncGenerator'] || function (kjm, gfdeh, inm) {
      if (!Symbol['asyncIterator']) throw new TypeError('Symbol.asyncIterator is not defined.');var hfeid = inm['apply'](kjm, gfdeh || []),
          opsr,
          debfc = [];return opsr = {}, x$wvyz('next'), x$wvyz('throw'), x$wvyz('return'), opsr[Symbol['asyncIterator']] = function () {
        return this;
      }, opsr;function x$wvyz(_$y0z) {
        if (hfeid[_$y0z]) opsr[_$y0z] = function (vtrq) {
          return new Promise(function (_$zy0, _3102$) {
            debfc['push']([_$y0z, vtrq, _$zy0, _3102$]) > 0x1 || usvrwt(_$y0z, vtrq);
          });
        };
      }function usvrwt(efgdh, wsxvtu) {
        try {
          oklmj(hfeid[efgdh](wsxvtu));
        } catch (iknmj) {
          qvrst(debfc[0x0][0x3], iknmj);
        }
      }function oklmj(vursw) {
        vursw['value'] instanceof sprotq ? Promise['resolve'](vursw['value']['v'])['then'](jfgk, _3) : qvrst(debfc[0x0][0x2], vursw);
      }function jfgk(cfdbeg) {
        usvrwt('next', cfdbeg);
      }function _3(bfdg) {
        usvrwt('throw', bfdg);
      }function qvrst(igdfhe, sxwu) {
        if (igdfhe(sxwu), debfc['shift'](), debfc['length']) usvrwt(debfc[0x0][0x0], debfc[0x0][0x1]);
      }
    };function ilhkgj(mpnolq) {
      return mpnolq[Symbol['asyncIterator']] != null;
    }function njilmk(txvyu) {
      if (txvyu == null) throw new Error('Assertion Failure: value must not be null nor undefined');
    }function jloknm(jhgfk) {
      return $1y0_(this, arguments, function bdaec() {
        var nmpr, ifgdhe, squrp, vturw;return $zyx0_(this, function (ywuvx) {
          switch (ywuvx['label']) {case 0x0:
              nmpr = jhgfk['getReader'](), ywuvx['label'] = 0x1;case 0x1:
              ywuvx['trys']['push']([0x1,, 0x9, 0xa]), ywuvx['label'] = 0x2;case 0x2:
              if (![]) {}return [0x4, sprotq(nmpr['read']())];case 0x3:
              ifgdhe = ywuvx['sent'](), squrp = ifgdhe['done'], vturw = ifgdhe['value'];if (!squrp) return [0x3, 0x5];return [0x4, sprotq(void 0x0)];case 0x4:
              return [0x2, ywuvx['sent']()];case 0x5:
              njilmk(vturw);return [0x4, sprotq(vturw)];case 0x6:
              return [0x4, ywuvx['sent']()];case 0x7:
              ywuvx['sent']();return [0x3, 0x2];case 0x8:
              return [0x3, 0xa];case 0x9:
              nmpr['releaseLock']();return [0x7];case 0xa:
              return [0x2];}
        });
      });
    }function dbecfg(rvwuts) {
      return ilhkgj(rvwuts) ? rvwuts : jloknm(rvwuts);
    }var twuxvy = undefined && undefined['__awaiter'] || function (konl, npkmlo, gceb, hcegdf) {
      function jgefi(ighfde) {
        return ighfde instanceof gceb ? ighfde : new gceb(function (z$21_) {
          z$21_(ighfde);
        });
      }return new (gceb || (gceb = Promise))(function (fhjeg, $1_02) {
        function utr(ijnmkl) {
          try {
            hdgfce(hcegdf['next'](ijnmkl));
          } catch (kjlonm) {
            $1_02(kjlonm);
          }
        }function qoprs(kolnm) {
          try {
            hdgfce(hcegdf['throw'](kolnm));
          } catch (_0y$xz) {
            $1_02(_0y$xz);
          }
        }function hdgfce(tspqu) {
          tspqu['done'] ? fhjeg(tspqu['value']) : jgefi(tspqu['value'])['then'](utr, qoprs);
        }hdgfce((hcegdf = hcegdf['apply'](konl, npkmlo || []))['next']());
      });
    },
        suvtrw = undefined && undefined['__generator'] || function (wvstu, kmljih) {
      var cafde = { 'label': 0x0, 'sent': function () {
          if (stu[0x0] & 0x1) throw stu[0x1];return stu[0x1];
        }, 'trys': [], 'ops': [] },
          mpnlqo,
          dfegch,
          stu,
          nmrpqo;return nmrpqo = { 'next': z1$0y(0x0), 'throw': z1$0y(0x1), 'return': z1$0y(0x2) }, typeof Symbol === 'function' && (nmrpqo[Symbol['iterator']] = function () {
        return this;
      }), nmrpqo;function z1$0y(jhiklm) {
        return function (lnoqp) {
          return $wzv([jhiklm, lnoqp]);
        };
      }function $wzv(stoqpr) {
        if (mpnlqo) throw new TypeError('Generator is already executing.');while (cafde) try {
          if (mpnlqo = 0x1, dfegch && (stu = stoqpr[0x0] & 0x2 ? dfegch['return'] : stoqpr[0x0] ? dfegch['throw'] || ((stu = dfegch['return']) && stu['call'](dfegch), 0x0) : dfegch['next']) && !(stu = stu['call'](dfegch, stoqpr[0x1]))['done']) return stu;if (dfegch = 0x0, stu) stoqpr = [stoqpr[0x0] & 0x2, stu['value']];switch (stoqpr[0x0]) {case 0x0:case 0x1:
              stu = stoqpr;break;case 0x4:
              cafde['label']++;return { 'value': stoqpr[0x1], 'done': ![] };case 0x5:
              cafde['label']++, dfegch = stoqpr[0x1], stoqpr = [0x0];continue;case 0x7:
              stoqpr = cafde['ops']['pop'](), cafde['trys']['pop']();continue;default:
              if (!(stu = cafde['trys'], stu = stu['length'] > 0x0 && stu[stu['length'] - 0x1]) && (stoqpr[0x0] === 0x6 || stoqpr[0x0] === 0x2)) {
                cafde = 0x0;continue;
              }if (stoqpr[0x0] === 0x3 && (!stu || stoqpr[0x1] > stu[0x0] && stoqpr[0x1] < stu[0x3])) {
                cafde['label'] = stoqpr[0x1];break;
              }if (stoqpr[0x0] === 0x6 && cafde['label'] < stu[0x1]) {
                cafde['label'] = stu[0x1], stu = stoqpr;break;
              }if (stu && cafde['label'] < stu[0x2]) {
                cafde['label'] = stu[0x2], cafde['ops']['push'](stoqpr);break;
              }if (stu[0x2]) cafde['ops']['pop']();cafde['trys']['pop']();continue;}stoqpr = kmljih['call'](wvstu, cafde);
        } catch (pstuq) {
          stoqpr = [0x6, pstuq], dfegch = 0x0;
        } finally {
          mpnlqo = stu = 0x0;
        }if (stoqpr[0x0] & 0x5) throw stoqpr[0x1];return { 'value': stoqpr[0x0] ? stoqpr[0x1] : void 0x0, 'done': !![] };
      }
    };function stwuvx(rusqp, imljk) {
      return imljk === void 0x0 && (imljk = usrp), twuxvy(this, void 0x0, void 0x0, function () {
        var imhj, xwtvy;return suvtrw(this, function (sxtuw) {
          return imhj = dbecfg(rusqp), xwtvy = new kighlj(imljk['extensionCodec'], imljk['context'], imljk['maxStrLength'], imljk['maxBinLength'], imljk['maxArrayLength'], imljk['maxMapLength'], imljk['maxExtLength']), [0x2, xwtvy['decodeSingleAsync'](imhj)];
        });
      });
    }function hgeifj(tprqos, rtqsp) {
      rtqsp === void 0x0 && (rtqsp = usrp);var nlik = dbecfg(tprqos),
          ustrqv = new kighlj(rtqsp['extensionCodec'], rtqsp['context'], rtqsp['maxStrLength'], rtqsp['maxBinLength'], rtqsp['maxArrayLength'], rtqsp['maxMapLength'], rtqsp['maxExtLength']);return ustrqv['decodeArrayStream'](nlik);
    }function lqpon(yxzuv, lmpqo) {
      lmpqo === void 0x0 && (lmpqo = usrp);var vzuyw = dbecfg(yxzuv),
          mjhkl = new kighlj(lmpqo['extensionCodec'], lmpqo['context'], lmpqo['maxStrLength'], lmpqo['maxBinLength'], lmpqo['maxArrayLength'], lmpqo['maxMapLength'], lmpqo['maxExtLength']);return mjhkl['decodeStream'](vzuyw);
    }
  }]);
});var _domrqn = function () {
  function $wzvy() {}return $wzvy['prototype']['bytesAvailable'] = function () {
    return this['length'] - this['cursor'];
  }, $wzvy['prototype']['getUint8'] = function () {
    return this['input'][this['cursor']++];
  }, $wzvy['prototype']['getUint16'] = function () {
    var ghied = this['view']['getUint16'](this['cursor'], this['littleEndian']);return this['cursor'] += 0x2, ghied;
  }, $wzvy['prototype']['getUint32'] = function () {
    var moqln = this['view']['getUint32'](this['cursor'], this['littleEndian']);return this['cursor'] += 0x4, moqln;
  }, $wzvy['prototype']['getUTF'] = function (y$zv) {
    var rtusvq = new Array(y$zv);for (var fjgh = 0x0; fjgh < y$zv; ++fjgh) {
      rtusvq[fjgh] = String['fromCharCode'](this['input'][this['cursor']++]);
    }return rtusvq['join']('');
  }, $wzvy['prototype']['getBytes'] = function (uxtyv) {
    var jfigkh = new Uint8Array(this['input']['buffer'], this['input']['byteOffset'] + this['cursor'], uxtyv);return this['cursor'] += uxtyv, jfigkh;
  }, $wzvy['prototype']['skip'] = function (pqosr) {
    this['cursor'] += pqosr;
  }, $wzvy['prototype']['open'] = function (tsrwuv, jheigf) {
    jheigf === void 0x0 && (jheigf = ![]), this['cursor'] = 0x0, this['length'] = tsrwuv['byteLength'], this['input'] = tsrwuv, this['view'] = new DataView(tsrwuv['buffer']), this['littleEndian'] = jheigf;
  }, $wzvy['prototype']['close'] = function () {
    this['input'] = null, this['view'] = null;
  }, $wzvy;
}(),
    _dilhmkj = function _dotqrp() {
  function omklj(kijlhg, igedfh) {
    this['message'] = kijlhg, this['scanLines'] = igedfh;
  }return omklj['prototype'] = new Error(), omklj['prototype']['name'] = 'DNLMarkerError', omklj['constructor'] = omklj, omklj;
}(),
    _d$_201z = function _dtvxy() {
  function swuxt(hilkmj) {
    this['message'] = hilkmj;
  }return swuxt['prototype'] = new Error(), swuxt['prototype']['name'] = 'EOIMarkerError', swuxt['constructor'] = swuxt, swuxt;
}(),
    _dnlkmi = function _dwurtsv() {
  var npqso = new Uint8Array([0x0, 0x1, 0x8, 0x10, 0x9, 0x2, 0x3, 0xa, 0x11, 0x18, 0x20, 0x19, 0x12, 0xb, 0x4, 0x5, 0xc, 0x13, 0x1a, 0x21, 0x28, 0x30, 0x29, 0x22, 0x1b, 0x14, 0xd, 0x6, 0x7, 0xe, 0x15, 0x1c, 0x23, 0x2a, 0x31, 0x38, 0x39, 0x32, 0x2b, 0x24, 0x1d, 0x16, 0xf, 0x17, 0x1e, 0x25, 0x2c, 0x33, 0x3a, 0x3b, 0x34, 0x2d, 0x26, 0x1f, 0x27, 0x2e, 0x35, 0x3c, 0x3d, 0x36, 0x2f, 0x37, 0x3e, 0x3f]),
      gfije = 0xfb1,
      nmkopl = 0x31f,
      omlq = 0xd4e,
      rspqot = 0x8e4,
      _$zy = 0x61f,
      rsqopn = 0xec8,
      svtwu = 0x16a1,
      mlhikj = 0xb50;function ustwvr(zyuw) {
    var fihgde = zyuw === void 0x0 ? {} : zyuw,
        pornm = fihgde['decodeTransform'],
        hgijl = pornm === void 0x0 ? null : pornm,
        fhkji = fihgde['colorTransform'],
        jokn = fhkji === void 0x0 ? -0x1 : fhkji;this['_decodeTransform'] = hgijl, this['_colorTransform'] = jokn;
  }function kljnmi(gfcbd, ieghdf) {
    var sprqt = 0x0,
        jgl = [],
        pqrnmo,
        $_zyw,
        $xzy_0 = 0x10;while ($xzy_0 > 0x0 && !gfcbd[$xzy_0 - 0x1]) {
      $xzy_0--;
    }jgl['push']({ 'children': [], 'index': 0x0 });var ecafbd = jgl[0x0],
        zv$yw;for (pqrnmo = 0x0; pqrnmo < $xzy_0; pqrnmo++) {
      for ($_zyw = 0x0; $_zyw < gfcbd[pqrnmo]; $_zyw++) {
        ecafbd = jgl['pop'](), ecafbd['children'][ecafbd['index']] = ieghdf[sprqt];while (ecafbd['index'] > 0x0) {
          ecafbd = jgl['pop']();
        }ecafbd['index']++, jgl['push'](ecafbd);while (jgl['length'] <= pqrnmo) {
          jgl['push'](zv$yw = { 'children': [], 'index': 0x0 }), ecafbd['children'][ecafbd['index']] = zv$yw['children'], ecafbd = zv$yw;
        }sprqt++;
      }pqrnmo + 0x1 < $xzy_0 && (jgl['push'](zv$yw = { 'children': [], 'index': 0x0 }), ecafbd['children'][ecafbd['index']] = zv$yw['children'], ecafbd = zv$yw);
    }return jgl[0x0]['children'];
  }function x_y0$(omnkjl, pqruts, $yz1) {
    return 0x40 * ((omnkjl['blocksPerLine'] + 0x1) * pqruts + $yz1);
  }function gdbfce(qtrpus, y_10z, svtru, ljonk, adcefb, wz$yv, pnqrmo, ikjmln, utvy, nqosrp) {
    nqosrp === void 0x0 && (nqosrp = ![]);var bdgcfe = svtru['mcusPerLine'],
        ghlkji = svtru['progressive'],
        iknjl = y_10z,
        nposq = 0x0,
        jlnkom = 0x0;function nlpoq() {
      if (jlnkom > 0x0) return jlnkom--, nposq >> jlnkom & 0x1;nposq = qtrpus[y_10z++];if (nposq === 0xff) {
        var sqrtpo = qtrpus[y_10z++];if (sqrtpo) {
          if (sqrtpo === 0xdc && nqosrp) {
            y_10z += 0x2;var jkhlig = qtrpus[y_10z++] << 0x8 | qtrpus[y_10z++];if (jkhlig > 0x0 && jkhlig !== svtru['scanLines']) throw new _dilhmkj('Found DNL marker (0xFFDC) while parsing scan data', jkhlig);
          } else {
            if (sqrtpo === 0xd9) throw new _d$_201z('Found EOI marker (0xFFD9) while parsing scan data');
          }throw new Error('unexpected marker ' + (nposq << 0x8 | sqrtpo)['toString'](0x10));
        }
      }return jlnkom = 0x7, nposq >>> 0x7;
    }function x_$(y0_$xz) {
      var fejigh = y0_$xz;while (!![]) {
        fejigh = fejigh[nlpoq()];if (typeof fejigh === 'number') return fejigh;if (typeof fejigh !== 'object') throw new Error('invalid huffman sequence');
      }
    }function ljgi(knjmi) {
      var $21z_0 = 0x0;while (knjmi > 0x0) {
        $21z_0 = $21z_0 << 0x1 | nlpoq(), knjmi--;
      }return $21z_0;
    }function jkmhil(stvru) {
      if (stvru === 0x1) return nlpoq() === 0x1 ? 0x1 : -0x1;var svuwr = ljgi(stvru);if (svuwr >= 0x1 << stvru - 0x1) return svuwr;return svuwr + (-0x1 << stvru) + 0x1;
    }function fhijk(yv$zx, jinkm) {
      var pnqlo = x_$(yv$zx['huffmanTableDC']),
          vtqsur = pnqlo === 0x0 ? 0x0 : jkmhil(pnqlo);yv$zx['blockData'][jinkm] = yv$zx['pred'] += vtqsur;var w$z_yx = 0x1;while (w$z_yx < 0x40) {
        var hcdfg = x_$(yv$zx['huffmanTableAC']),
            tsqru = hcdfg & 0xf,
            egdcfh = hcdfg >> 0x4;if (tsqru === 0x0) {
          if (egdcfh < 0xf) break;w$z_yx += 0x10;continue;
        }w$z_yx += egdcfh;var z_x0 = npqso[w$z_yx];yv$zx['blockData'][jinkm + z_x0] = jkmhil(tsqru), w$z_yx++;
      }
    }function _0$x(nkojl, ehfij) {
      var njmklo = x_$(nkojl['huffmanTableDC']),
          vqur = njmklo === 0x0 ? 0x0 : jkmhil(njmklo) << utvy;nkojl['blockData'][ehfij] = nkojl['pred'] += vqur;
    }function sruwv($wzxv, klmno) {
      $wzxv['blockData'][klmno] |= nlpoq() << utvy;
    }var hgjef = 0x0;function kmhij(stxv, kjnim) {
      if (hgjef > 0x0) {
        hgjef--;return;
      }var _z201$ = wz$yv,
          utsqv = pnqrmo;while (_z201$ <= utsqv) {
        var eidh = x_$(stxv['huffmanTableAC']),
            lqopm = eidh & 0xf,
            xz_$ = eidh >> 0x4;if (lqopm === 0x0) {
          if (xz_$ < 0xf) {
            hgjef = ljgi(xz_$) + (0x1 << xz_$) - 0x1;break;
          }_z201$ += 0x10;continue;
        }_z201$ += xz_$;var mlnpqo = npqso[_z201$];stxv['blockData'][kjnim + mlnpqo] = jkmhil(lqopm) * (0x1 << utvy), _z201$++;
      }
    }var iljhmk = 0x0,
        orpq;function xyvwz$(jmlkno, tsurvw) {
      var dfbge = wz$yv,
          txuvwy = pnqrmo,
          pqust = 0x0,
          mkonp,
          prqtus;while (dfbge <= txuvwy) {
        var ikgfjh = tsurvw + npqso[dfbge],
            fidhge = jmlkno['blockData'][ikgfjh] < 0x0 ? -0x1 : 0x1;switch (iljhmk) {case 0x0:
            prqtus = x_$(jmlkno['huffmanTableAC']), mkonp = prqtus & 0xf, pqust = prqtus >> 0x4;if (mkonp === 0x0) pqust < 0xf ? (hgjef = ljgi(pqust) + (0x1 << pqust), iljhmk = 0x4) : (pqust = 0x10, iljhmk = 0x1);else {
              if (mkonp !== 0x1) throw new Error('invalid ACn encoding');orpq = jkmhil(mkonp), iljhmk = pqust ? 0x2 : 0x3;
            }continue;case 0x1:case 0x2:
            jmlkno['blockData'][ikgfjh] ? jmlkno['blockData'][ikgfjh] += fidhge * (nlpoq() << utvy) : (pqust--, pqust === 0x0 && (iljhmk = iljhmk === 0x2 ? 0x3 : 0x0));break;case 0x3:
            jmlkno['blockData'][ikgfjh] ? jmlkno['blockData'][ikgfjh] += fidhge * (nlpoq() << utvy) : (jmlkno['blockData'][ikgfjh] = orpq << utvy, iljhmk = 0x0);break;case 0x4:
            jmlkno['blockData'][ikgfjh] && (jmlkno['blockData'][ikgfjh] += fidhge * (nlpoq() << utvy));break;}dfbge++;
      }iljhmk === 0x4 && (hgjef--, hgjef === 0x0 && (iljhmk = 0x0));
    }function nlk(jkimhl, nilj, hmli, qsrtpo, lgkijh) {
      var nqmlo = hmli / bdgcfe | 0x0,
          prsn = hmli % bdgcfe,
          knlmop = nqmlo * jkimhl['v'] + qsrtpo,
          sxtuv = prsn * jkimhl['h'] + lgkijh,
          hkifgj = x_y0$(jkimhl, knlmop, sxtuv);nilj(jkimhl, hkifgj);
    }function z_w$(z$w_y, lponmk, bdafce) {
      var oqt = bdafce / z$w_y['blocksPerLine'] | 0x0,
          wtsuxv = bdafce % z$w_y['blocksPerLine'],
          tsqro = x_y0$(z$w_y, oqt, wtsuxv);lponmk(z$w_y, tsqro);
    }var z$vw = ljonk['length'],
        moljnk,
        $21_,
        qtvsru,
        dhgef,
        debafc,
        prmnq;ghlkji ? wz$yv === 0x0 ? prmnq = ikjmln === 0x0 ? _0$x : sruwv : prmnq = ikjmln === 0x0 ? kmhij : xyvwz$ : prmnq = fhijk;var jnm = 0x0,
        rqsupt,
        deabfc;z$vw === 0x1 ? deabfc = ljonk[0x0]['blocksPerLine'] * ljonk[0x0]['blocksPerColumn'] : deabfc = bdgcfe * svtru['mcusPerColumn'];var hiefdg, defca;while (jnm < deabfc) {
      var $wyx = adcefb ? Math['min'](deabfc - jnm, adcefb) : deabfc;for ($21_ = 0x0; $21_ < z$vw; $21_++) {
        ljonk[$21_]['pred'] = 0x0;
      }hgjef = 0x0;if (z$vw === 0x1) {
        moljnk = ljonk[0x0];for (debafc = 0x0; debafc < $wyx; debafc++) {
          z_w$(moljnk, prmnq, jnm), jnm++;
        }
      } else for (debafc = 0x0; debafc < $wyx; debafc++) {
        for ($21_ = 0x0; $21_ < z$vw; $21_++) {
          moljnk = ljonk[$21_], hiefdg = moljnk['h'], defca = moljnk['v'];for (qtvsru = 0x0; qtvsru < defca; qtvsru++) {
            for (dhgef = 0x0; dhgef < hiefdg; dhgef++) {
              nlk(moljnk, prmnq, jnm, qtvsru, dhgef);
            }
          }
        }jnm++;
      }jlnkom = 0x0, rqsupt = ghief(qtrpus, y_10z);rqsupt && rqsupt['invalid'] && (warn('decodeScan - unexpected MCU data, current marker is: ' + rqsupt['invalid']), y_10z = rqsupt['offset']);var ehgfcd = rqsupt && rqsupt['marker'];if (!ehgfcd || ehgfcd <= 0xff00) throw new Error('marker was not found');if (ehgfcd >= 0xffd0 && ehgfcd <= 0xffd7) y_10z += 0x2;else break;
    }return rqsupt = ghief(qtrpus, y_10z), rqsupt && rqsupt['invalid'] && (warn('decodeScan - unexpected Scan data, current marker is: ' + rqsupt['invalid']), y_10z = rqsupt['offset']), y_10z - iknjl;
  }function wustxv(vyzxw, hefgj, _zx0y) {
    var ihgkjf = vyzxw['quantizationTable'],
        qnlm = vyzxw['blockData'],
        osqp,
        ehgj,
        oqpmnl,
        dcbg,
        spotrq,
        iklnmj,
        _$0z12,
        kompn,
        fbecd,
        tvswur,
        pmonqr,
        usvtqr,
        nljok,
        hkgli,
        cdbef,
        urtqs,
        qporm;if (!ihgkjf) throw new Error('missing required Quantization Table.');for (var nrpmo = 0x0; nrpmo < 0x40; nrpmo += 0x8) {
      fbecd = qnlm[hefgj + nrpmo], tvswur = qnlm[hefgj + nrpmo + 0x1], pmonqr = qnlm[hefgj + nrpmo + 0x2], usvtqr = qnlm[hefgj + nrpmo + 0x3], nljok = qnlm[hefgj + nrpmo + 0x4], hkgli = qnlm[hefgj + nrpmo + 0x5], cdbef = qnlm[hefgj + nrpmo + 0x6], urtqs = qnlm[hefgj + nrpmo + 0x7], fbecd *= ihgkjf[nrpmo];if ((tvswur | pmonqr | usvtqr | nljok | hkgli | cdbef | urtqs) === 0x0) {
        qporm = svtwu * fbecd + 0x200 >> 0xa, _zx0y[nrpmo] = qporm, _zx0y[nrpmo + 0x1] = qporm, _zx0y[nrpmo + 0x2] = qporm, _zx0y[nrpmo + 0x3] = qporm, _zx0y[nrpmo + 0x4] = qporm, _zx0y[nrpmo + 0x5] = qporm, _zx0y[nrpmo + 0x6] = qporm, _zx0y[nrpmo + 0x7] = qporm;continue;
      }tvswur *= ihgkjf[nrpmo + 0x1], pmonqr *= ihgkjf[nrpmo + 0x2], usvtqr *= ihgkjf[nrpmo + 0x3], nljok *= ihgkjf[nrpmo + 0x4], hkgli *= ihgkjf[nrpmo + 0x5], cdbef *= ihgkjf[nrpmo + 0x6], urtqs *= ihgkjf[nrpmo + 0x7], osqp = svtwu * fbecd + 0x80 >> 0x8, ehgj = svtwu * nljok + 0x80 >> 0x8, oqpmnl = pmonqr, dcbg = cdbef, spotrq = mlhikj * (tvswur - urtqs) + 0x80 >> 0x8, kompn = mlhikj * (tvswur + urtqs) + 0x80 >> 0x8, iklnmj = usvtqr << 0x4, _$0z12 = hkgli << 0x4, osqp = osqp + ehgj + 0x1 >> 0x1, ehgj = osqp - ehgj, qporm = oqpmnl * rsqopn + dcbg * _$zy + 0x80 >> 0x8, oqpmnl = oqpmnl * _$zy - dcbg * rsqopn + 0x80 >> 0x8, dcbg = qporm, spotrq = spotrq + _$0z12 + 0x1 >> 0x1, _$0z12 = spotrq - _$0z12, kompn = kompn + iklnmj + 0x1 >> 0x1, iklnmj = kompn - iklnmj, osqp = osqp + dcbg + 0x1 >> 0x1, dcbg = osqp - dcbg, ehgj = ehgj + oqpmnl + 0x1 >> 0x1, oqpmnl = ehgj - oqpmnl, qporm = spotrq * rspqot + kompn * omlq + 0x800 >> 0xc, spotrq = spotrq * omlq - kompn * rspqot + 0x800 >> 0xc, kompn = qporm, qporm = iklnmj * nmkopl + _$0z12 * gfije + 0x800 >> 0xc, iklnmj = iklnmj * gfije - _$0z12 * nmkopl + 0x800 >> 0xc, _$0z12 = qporm, _zx0y[nrpmo] = osqp + kompn, _zx0y[nrpmo + 0x7] = osqp - kompn, _zx0y[nrpmo + 0x1] = ehgj + _$0z12, _zx0y[nrpmo + 0x6] = ehgj - _$0z12, _zx0y[nrpmo + 0x2] = oqpmnl + iklnmj, _zx0y[nrpmo + 0x5] = oqpmnl - iklnmj, _zx0y[nrpmo + 0x3] = dcbg + spotrq, _zx0y[nrpmo + 0x4] = dcbg - spotrq;
    }for (var edifhg = 0x0; edifhg < 0x8; ++edifhg) {
      fbecd = _zx0y[edifhg], tvswur = _zx0y[edifhg + 0x8], pmonqr = _zx0y[edifhg + 0x10], usvtqr = _zx0y[edifhg + 0x18], nljok = _zx0y[edifhg + 0x20], hkgli = _zx0y[edifhg + 0x28], cdbef = _zx0y[edifhg + 0x30], urtqs = _zx0y[edifhg + 0x38];if ((tvswur | pmonqr | usvtqr | nljok | hkgli | cdbef | urtqs) === 0x0) {
        qporm = svtwu * fbecd + 0x2000 >> 0xe, qporm = qporm < -0x7f8 ? 0x0 : qporm >= 0x7e8 ? 0xff : qporm + 0x808 >> 0x4, qnlm[hefgj + edifhg] = qporm, qnlm[hefgj + edifhg + 0x8] = qporm, qnlm[hefgj + edifhg + 0x10] = qporm, qnlm[hefgj + edifhg + 0x18] = qporm, qnlm[hefgj + edifhg + 0x20] = qporm, qnlm[hefgj + edifhg + 0x28] = qporm, qnlm[hefgj + edifhg + 0x30] = qporm, qnlm[hefgj + edifhg + 0x38] = qporm;continue;
      }osqp = svtwu * fbecd + 0x800 >> 0xc, ehgj = svtwu * nljok + 0x800 >> 0xc, oqpmnl = pmonqr, dcbg = cdbef, spotrq = mlhikj * (tvswur - urtqs) + 0x800 >> 0xc, kompn = mlhikj * (tvswur + urtqs) + 0x800 >> 0xc, iklnmj = usvtqr, _$0z12 = hkgli, osqp = (osqp + ehgj + 0x1 >> 0x1) + 0x1010, ehgj = osqp - ehgj, qporm = oqpmnl * rsqopn + dcbg * _$zy + 0x800 >> 0xc, oqpmnl = oqpmnl * _$zy - dcbg * rsqopn + 0x800 >> 0xc, dcbg = qporm, spotrq = spotrq + _$0z12 + 0x1 >> 0x1, _$0z12 = spotrq - _$0z12, kompn = kompn + iklnmj + 0x1 >> 0x1, iklnmj = kompn - iklnmj, osqp = osqp + dcbg + 0x1 >> 0x1, dcbg = osqp - dcbg, ehgj = ehgj + oqpmnl + 0x1 >> 0x1, oqpmnl = ehgj - oqpmnl, qporm = spotrq * rspqot + kompn * omlq + 0x800 >> 0xc, spotrq = spotrq * omlq - kompn * rspqot + 0x800 >> 0xc, kompn = qporm, qporm = iklnmj * nmkopl + _$0z12 * gfije + 0x800 >> 0xc, iklnmj = iklnmj * gfije - _$0z12 * nmkopl + 0x800 >> 0xc, _$0z12 = qporm, fbecd = osqp + kompn, urtqs = osqp - kompn, tvswur = ehgj + _$0z12, cdbef = ehgj - _$0z12, pmonqr = oqpmnl + iklnmj, hkgli = oqpmnl - iklnmj, usvtqr = dcbg + spotrq, nljok = dcbg - spotrq, fbecd = fbecd < 0x10 ? 0x0 : fbecd >= 0xff0 ? 0xff : fbecd >> 0x4, tvswur = tvswur < 0x10 ? 0x0 : tvswur >= 0xff0 ? 0xff : tvswur >> 0x4, pmonqr = pmonqr < 0x10 ? 0x0 : pmonqr >= 0xff0 ? 0xff : pmonqr >> 0x4, usvtqr = usvtqr < 0x10 ? 0x0 : usvtqr >= 0xff0 ? 0xff : usvtqr >> 0x4, nljok = nljok < 0x10 ? 0x0 : nljok >= 0xff0 ? 0xff : nljok >> 0x4, hkgli = hkgli < 0x10 ? 0x0 : hkgli >= 0xff0 ? 0xff : hkgli >> 0x4, cdbef = cdbef < 0x10 ? 0x0 : cdbef >= 0xff0 ? 0xff : cdbef >> 0x4, urtqs = urtqs < 0x10 ? 0x0 : urtqs >= 0xff0 ? 0xff : urtqs >> 0x4, qnlm[hefgj + edifhg] = fbecd, qnlm[hefgj + edifhg + 0x8] = tvswur, qnlm[hefgj + edifhg + 0x10] = pmonqr, qnlm[hefgj + edifhg + 0x18] = usvtqr, qnlm[hefgj + edifhg + 0x20] = nljok, qnlm[hefgj + edifhg + 0x28] = hkgli, qnlm[hefgj + edifhg + 0x30] = cdbef, qnlm[hefgj + edifhg + 0x38] = urtqs;
    }
  }function ebcdaf(qplonm, jefigh) {
    var fgdch = jefigh['blocksPerLine'],
        jmokl = jefigh['blocksPerColumn'],
        fdgceb = new Int16Array(0x40);for (var opqnrm = 0x0; opqnrm < jmokl; opqnrm++) {
      for (var vuwsr = 0x0; vuwsr < fgdch; vuwsr++) {
        var iljkm = x_y0$(jefigh, opqnrm, vuwsr);wustxv(jefigh, iljkm, fdgceb);
      }
    }return jefigh['blockData'];
  }function ghief(fdhgc, psqtru, gb) {
    gb === void 0x0 && (gb = psqtru);function jhmikl(ikhlg) {
      return fdhgc[ikhlg] << 0x8 | fdhgc[ikhlg + 0x1];
    }var pkomln = fdhgc['length'] - 0x1,
        $x0z_y = gb < psqtru ? gb : psqtru;if (psqtru >= pkomln) return null;var hjefgi = jhmikl(psqtru);if (hjefgi >= 0xffc0 && hjefgi <= 0xfffe) return { 'invalid': null, 'marker': hjefgi, 'offset': psqtru };var vtwrus = jhmikl($x0z_y);while (!(vtwrus >= 0xffc0 && vtwrus <= 0xfffe)) {
      if (++$x0z_y >= pkomln) return null;vtwrus = jhmikl($x0z_y);
    }return { 'invalid': hjefgi['toString'](0x10), 'marker': vtwrus, 'offset': $x0z_y };
  }return ustwvr['prototype'] = { 'width': 0x0, 'height': 0x0, 'parse': function (efbad, gcfdeb) {
      var adfebc = (gcfdeb === void 0x0 ? {} : gcfdeb)['dnlScanLines'],
          mok = adfebc === void 0x0 ? null : adfebc;function potsr() {
        var z_xwy$ = efbad[gdheif] << 0x8 | efbad[gdheif + 0x1];return gdheif += 0x2, z_xwy$;
      }function usqvt() {
        var egcfdh = potsr(),
            eafc = gdheif + egcfdh - 0x2,
            _$z12 = ghief(efbad, eafc, gdheif);_$z12 && _$z12['invalid'] && (warn('readDataBlock - incorrect length, current marker is: ' + _$z12['invalid']), eafc = _$z12['offset']);var rqtsp = efbad['subarray'](gdheif, eafc);return gdheif += rqtsp['length'], rqtsp;
      }function jihklm(spot) {
        var gfih = Math['ceil'](spot['samplesPerLine'] / 0x8 / spot['maxH']),
            diheg = Math['ceil'](spot['scanLines'] / 0x8 / spot['maxV']);for (var hejig = 0x0; hejig < spot['components']['length']; hejig++) {
          oqrnsp = spot['components'][hejig];var hgfdce = Math['ceil'](Math['ceil'](spot['samplesPerLine'] / 0x8) * oqrnsp['h'] / spot['maxH']),
              eidfgh = Math['ceil'](Math['ceil'](spot['scanLines'] / 0x8) * oqrnsp['v'] / spot['maxV']),
              mnjikl = gfih * oqrnsp['h'],
              gehdi = diheg * oqrnsp['v'],
              ighfe = 0x40 * gehdi * (mnjikl + 0x1);oqrnsp['blockData'] = new Int16Array(ighfe), oqrnsp['blocksPerLine'] = hgfdce, oqrnsp['blocksPerColumn'] = eidfgh;
        }spot['mcusPerLine'] = gfih, spot['mcusPerColumn'] = diheg;
      }var gdheif = 0x0,
          abfcde = null,
          nrsopq = null,
          glhik,
          xz_0,
          _$1y0 = 0x0,
          fchgde = [],
          ebdcfg = [],
          uqt = [],
          twrsu = potsr();if (twrsu !== 0xffd8) throw new Error('SOI not found');twrsu = potsr();z0yx_: while (twrsu !== 0xffd9) {
        var ljkmhi, inj, sqtur;switch (twrsu) {case 0xffe0:case 0xffe1:case 0xffe2:case 0xffe3:case 0xffe4:case 0xffe5:case 0xffe6:case 0xffe7:case 0xffe8:case 0xffe9:case 0xffea:case 0xffeb:case 0xffec:case 0xffed:case 0xffee:case 0xffef:case 0xfffe:
            var edaf = usqvt();twrsu === 0xffe0 && edaf[0x0] === 0x4a && edaf[0x1] === 0x46 && edaf[0x2] === 0x49 && edaf[0x3] === 0x46 && edaf[0x4] === 0x0 && (abfcde = { 'version': { 'major': edaf[0x5], 'minor': edaf[0x6] }, 'densityUnits': edaf[0x7], 'xDensity': edaf[0x8] << 0x8 | edaf[0x9], 'yDensity': edaf[0xa] << 0x8 | edaf[0xb], 'thumbWidth': edaf[0xc], 'thumbHeight': edaf[0xd], 'thumbData': edaf['subarray'](0xe, 0xe + 0x3 * edaf[0xc] * edaf[0xd]) });twrsu === 0xffee && edaf[0x0] === 0x41 && edaf[0x1] === 0x64 && edaf[0x2] === 0x6f && edaf[0x3] === 0x62 && edaf[0x4] === 0x65 && (nrsopq = { 'version': edaf[0x5] << 0x8 | edaf[0x6], 'flags0': edaf[0x7] << 0x8 | edaf[0x8], 'flags1': edaf[0x9] << 0x8 | edaf[0xa], 'transformCode': edaf[0xb] });break;case 0xffdb:
            var z$y_01 = potsr(),
                tsuwrv = z$y_01 + gdheif - 0x2,
                posnqr;while (gdheif < tsuwrv) {
              var prqsno = efbad[gdheif++],
                  olnkpm = new Uint16Array(0x40);if (prqsno >> 0x4 === 0x0) for (inj = 0x0; inj < 0x40; inj++) {
                posnqr = npqso[inj], olnkpm[posnqr] = efbad[gdheif++];
              } else {
                if (prqsno >> 0x4 === 0x1) for (inj = 0x0; inj < 0x40; inj++) {
                  posnqr = npqso[inj], olnkpm[posnqr] = potsr();
                } else throw new Error('DQT - invalid table spec');
              }fchgde[prqsno & 0xf] = olnkpm;
            }break;case 0xffc0:case 0xffc1:case 0xffc2:
            if (glhik) throw new Error('Only single frame JPEGs supported');potsr(), glhik = {}, glhik['extended'] = twrsu === 0xffc1, glhik['progressive'] = twrsu === 0xffc2, glhik['precision'] = efbad[gdheif++];var koplnm = potsr();glhik['scanLines'] = mok || koplnm, glhik['samplesPerLine'] = potsr(), glhik['components'] = [], glhik['componentIds'] = {};var jimlh = efbad[gdheif++],
                abed,
                tpsoq = 0x0,
                ruptsq = 0x0;for (ljkmhi = 0x0; ljkmhi < jimlh; ljkmhi++) {
              abed = efbad[gdheif];var nomlqp = efbad[gdheif + 0x1] >> 0x4,
                  vqusr = efbad[gdheif + 0x1] & 0xf;tpsoq < nomlqp && (tpsoq = nomlqp);ruptsq < vqusr && (ruptsq = vqusr);var vqsrtu = efbad[gdheif + 0x2];sqtur = glhik['components']['push']({ 'h': nomlqp, 'v': vqusr, 'quantizationId': vqsrtu, 'quantizationTable': null }), glhik['componentIds'][abed] = sqtur - 0x1, gdheif += 0x3;
            }glhik['maxH'] = tpsoq, glhik['maxV'] = ruptsq, jihklm(glhik);break;case 0xffc4:
            var wyzvx = potsr();for (ljkmhi = 0x2; ljkmhi < wyzvx;) {
              var lhjgik = efbad[gdheif++],
                  fgdbec = new Uint8Array(0x10),
                  opmqnr = 0x0;for (inj = 0x0; inj < 0x10; inj++, gdheif++) {
                opmqnr += fgdbec[inj] = efbad[gdheif];
              }var klmih = new Uint8Array(opmqnr);for (inj = 0x0; inj < opmqnr; inj++, gdheif++) {
                klmih[inj] = efbad[gdheif];
              }ljkmhi += 0x11 + opmqnr, (lhjgik >> 0x4 === 0x0 ? uqt : ebdcfg)[lhjgik & 0xf] = kljnmi(fgdbec, klmih);
            }break;case 0xffdd:
            potsr(), xz_0 = potsr();break;case 0xffda:
            var yzuvxw = ++_$1y0 === 0x1 && !mok;potsr();var egfidh = efbad[gdheif++],
                poqnlm = [],
                oqrnsp;for (ljkmhi = 0x0; ljkmhi < egfidh; ljkmhi++) {
              var hgcf = glhik['componentIds'][efbad[gdheif++]];oqrnsp = glhik['components'][hgcf];var gikhf = efbad[gdheif++];oqrnsp['huffmanTableDC'] = uqt[gikhf >> 0x4], oqrnsp['huffmanTableAC'] = ebdcfg[gikhf & 0xf], poqnlm['push'](oqrnsp);
            }var omnlkj = efbad[gdheif++],
                oqpnml = efbad[gdheif++],
                $203_1 = efbad[gdheif++];try {
              var mjnokl = gdbfce(efbad, gdheif, glhik, poqnlm, xz_0, omnlkj, oqpnml, $203_1 >> 0x4, $203_1 & 0xf, yzuvxw);gdheif += mjnokl;
            } catch ($1z_02) {
              if ($1z_02 instanceof _dilhmkj) return warn($1z_02['message'] + ' -- attempting to re-parse the JPEG image.'), this['parse'](efbad, { 'dnlScanLines': $1z_02['scanLines'] });else {
                if ($1z_02 instanceof _d$_201z) {
                  warn($1z_02['message'] + ' -- ignoring the rest of the image data.');break z0yx_;
                }
              }throw $1z_02;
            }break;case 0xffdc:
            gdheif += 0x4;break;case 0xffff:
            efbad[gdheif] !== 0xff && gdheif--;break;default:
            if (efbad[gdheif - 0x3] === 0xff && efbad[gdheif - 0x2] >= 0xc0 && efbad[gdheif - 0x2] <= 0xfe) {
              gdheif -= 0x3;break;
            }var wyvzxu = ghief(efbad, gdheif - 0x2);if (wyvzxu && wyvzxu['invalid']) {
              warn('JpegImage.parse - unexpected data, current marker is: ' + wyvzxu['invalid']), gdheif = wyvzxu['offset'];break;
            }throw new Error('unknown marker ' + twrsu['toString'](0x10));}twrsu = potsr();
      }this['width'] = glhik['samplesPerLine'], this['height'] = glhik['scanLines'], this['jfif'] = abfcde, this['adobe'] = nrsopq, this['components'] = [];for (ljkmhi = 0x0; ljkmhi < glhik['components']['length']; ljkmhi++) {
        oqrnsp = glhik['components'][ljkmhi];var wzvy = fchgde[oqrnsp['quantizationId']];wzvy && (oqrnsp['quantizationTable'] = wzvy), this['components']['push']({ 'output': ebcdaf(glhik, oqrnsp), 'scaleX': oqrnsp['h'] / glhik['maxH'], 'scaleY': oqrnsp['v'] / glhik['maxV'], 'blocksPerLine': oqrnsp['blocksPerLine'], 'blocksPerColumn': oqrnsp['blocksPerColumn'] });
      }this['numComponents'] = this['components']['length'];
    }, '_getLinearizedBlockData': function (qvrsut, jlnmi, mqponl, rpto, onqmp) {
      mqponl === void 0x0 && (mqponl = ![]);rpto === void 0x0 && (rpto = 0x0);onqmp === void 0x0 && (onqmp = null);var edbcfa = ![],
          zx$_ = this['width'] / qvrsut,
          yx$v = this['height'] / jlnmi,
          prsqto,
          gifkjh,
          txyvw,
          qnmpl,
          _0124,
          rsqopt,
          _yzx$0,
          rsquv,
          vxwtyu,
          wv$zxy,
          suxwt = 0x0,
          xtsuwv,
          mnpolq = this['components']['length'],
          wyzux = qvrsut * jlnmi * mnpolq;mnpolq == 0x3 && mqponl && (wyzux = qvrsut * jlnmi * 0x4);var vutrq = new ArrayBuffer(wyzux + rpto),
          hlgkij = new Uint8ClampedArray(vutrq, rpto),
          ihfegj = new Uint32Array(qvrsut),
          yv = 0xfffffff8;if (mnpolq == 0x3 && mqponl) {
        for (_yzx$0 = 0x0; _yzx$0 < mnpolq; _yzx$0++) {
          prsqto = this['components'][_yzx$0], gifkjh = prsqto['scaleX'] * zx$_, txyvw = prsqto['scaleY'] * yx$v, suxwt = _yzx$0, xtsuwv = prsqto['output'], qnmpl = prsqto['blocksPerLine'] + 0x1 << 0x3;for (_0124 = 0x0; _0124 < qvrsut; _0124++) {
            rsquv = 0x0 | _0124 * gifkjh, ihfegj[_0124] = (rsquv & yv) << 0x3 | rsquv & 0x7;
          }for (rsqopt = 0x0; rsqopt < jlnmi; rsqopt++) {
            rsquv = 0x0 | rsqopt * txyvw, wv$zxy = qnmpl * (rsquv & yv) | (rsquv & 0x7) << 0x3;for (_0124 = 0x0; _0124 < qvrsut; _0124++) {
              hlgkij[suxwt] = xtsuwv[wv$zxy + ihfegj[_0124]], suxwt += 0x4;
            }
          }
        }suxwt = 0x3;if (onqmp != null) {
          var egdcb = 0x0;for (rsqopt = 0x0; rsqopt < jlnmi; rsqopt++) {
            for (_0124 = 0x0; _0124 < qvrsut; _0124++) {
              hlgkij[suxwt] = onqmp[egdcb++], suxwt += 0x4;
            }
          }
        } else for (rsqopt = 0x0; rsqopt < jlnmi; rsqopt++) {
          for (_0124 = 0x0; _0124 < qvrsut; _0124++) {
            hlgkij[suxwt] = 0xff, suxwt += 0x4;
          }
        }
      } else for (_yzx$0 = 0x0; _yzx$0 < mnpolq; _yzx$0++) {
        prsqto = this['components'][_yzx$0], gifkjh = prsqto['scaleX'] * zx$_, txyvw = prsqto['scaleY'] * yx$v, suxwt = _yzx$0, xtsuwv = prsqto['output'], qnmpl = prsqto['blocksPerLine'] + 0x1 << 0x3;for (_0124 = 0x0; _0124 < qvrsut; _0124++) {
          rsquv = 0x0 | _0124 * gifkjh, ihfegj[_0124] = (rsquv & yv) << 0x3 | rsquv & 0x7;
        }for (rsqopt = 0x0; rsqopt < jlnmi; rsqopt++) {
          rsquv = 0x0 | rsqopt * txyvw, wv$zxy = qnmpl * (rsquv & yv) | (rsquv & 0x7) << 0x3;for (_0124 = 0x0; _0124 < qvrsut; _0124++) {
            hlgkij[suxwt] = xtsuwv[wv$zxy + ihfegj[_0124]], suxwt += mnpolq;
          }
        }
      }var xzy$_ = this['_decodeTransform'];!edbcfa && mnpolq === 0x4 && !xzy$_ && (xzy$_ = new Int32Array([-0x100, 0xff, -0x100, 0xff, -0x100, 0xff, -0x100, 0xff]));if (xzy$_) {
        if (mnpolq == 0x3 && mqponl) for (_yzx$0 = 0x0; _yzx$0 < wyzux;) {
          for (rsquv = 0x0, vxwtyu = 0x0; rsquv < mnpolq; rsquv++, _yzx$0++, vxwtyu += 0x2) {
            hlgkij[_yzx$0] = (hlgkij[_yzx$0] * xzy$_[vxwtyu] >> 0x8) + xzy$_[vxwtyu + 0x1];
          }_yzx$0++;
        } else for (_yzx$0 = 0x0; _yzx$0 < wyzux;) {
          for (rsquv = 0x0, vxwtyu = 0x0; rsquv < mnpolq; rsquv++, _yzx$0++, vxwtyu += 0x2) {
            hlgkij[_yzx$0] = (hlgkij[_yzx$0] * xzy$_[vxwtyu] >> 0x8) + xzy$_[vxwtyu + 0x1];
          }
        }
      }return hlgkij;
    }, get '_isColorConversionNeeded'() {
      if (this['adobe']) return !!this['adobe']['transformCode'];if (this['numComponents'] === 0x3) {
        if (this['_colorTransform'] === 0x0) return ![];return !![];
      }if (this['_colorTransform'] === 0x1) return !![];return ![];
    }, '_convertYccToRgb': function fghd(daebcf, mkljhi) {
      mkljhi === void 0x0 && (mkljhi = ![]);var qprut, mlqpo, oqprsn, pqnl, faecd;if (mkljhi) for (pqnl = 0x0, faecd = daebcf['length']; pqnl < faecd; pqnl += 0x3) {
        qprut = daebcf[pqnl], mlqpo = daebcf[pqnl + 0x1], oqprsn = daebcf[pqnl + 0x2], daebcf[pqnl] = qprut - 179.456 + 1.402 * oqprsn, daebcf[pqnl + 0x1] = qprut + 135.459 - 0.344 * mlqpo - 0.714 * oqprsn, daebcf[pqnl + 0x2] = qprut - 226.816 + 1.772 * mlqpo, pqnl++;
      } else for (pqnl = 0x0, faecd = daebcf['length']; pqnl < faecd; pqnl += 0x3) {
        qprut = daebcf[pqnl], mlqpo = daebcf[pqnl + 0x1], oqprsn = daebcf[pqnl + 0x2], daebcf[pqnl] = qprut - 179.456 + 1.402 * oqprsn, daebcf[pqnl + 0x1] = qprut + 135.459 - 0.344 * mlqpo - 0.714 * oqprsn, daebcf[pqnl + 0x2] = qprut - 226.816 + 1.772 * mlqpo;
      }return daebcf;
    }, '_convertYcckToRgb': function yzv$w(kihfjg) {
      var ljhig,
          uwyzvx,
          vwuxyt,
          lkjnmo,
          rswtu = 0x0;for (var vtsw = 0x0, urvtws = kihfjg['length']; vtsw < urvtws; vtsw += 0x4) {
        ljhig = kihfjg[vtsw], uwyzvx = kihfjg[vtsw + 0x1], vwuxyt = kihfjg[vtsw + 0x2], lkjnmo = kihfjg[vtsw + 0x3], kihfjg[rswtu++] = -122.67195406894 + uwyzvx * (-0.0000660635669420364 * uwyzvx + 0.000437130475926232 * vwuxyt - 0.000054080610064599 * ljhig + 0.00048449797120281 * lkjnmo - 0.154362151871126) + vwuxyt * (-0.000957964378445773 * vwuxyt + 0.000817076911346625 * ljhig - 0.00477271405408747 * lkjnmo + 1.53380253221734) + ljhig * (0.000961250184130688 * ljhig - 0.00266257332283933 * lkjnmo + 0.48357088451265) + lkjnmo * (-0.000336197177618394 * lkjnmo + 0.484791561490776), kihfjg[rswtu++] = 107.268039397724 + uwyzvx * (0.0000219927104525741 * uwyzvx - 0.000640992018297945 * vwuxyt + 0.000659397001245577 * ljhig + 0.000426105652938837 * lkjnmo - 0.176491792462875) + vwuxyt * (-0.000778269941513683 * vwuxyt + 0.00130872261408275 * ljhig + 0.000770482631801132 * lkjnmo - 0.151051492775562) + ljhig * (0.00126935368114843 * ljhig - 0.00265090189010898 * lkjnmo + 0.25802910206845) + lkjnmo * (-0.000318913117588328 * lkjnmo - 0.213742400323665), kihfjg[rswtu++] = -20.810012546947 + uwyzvx * (-0.000570115196973677 * uwyzvx - 0.0000263409051004589 * vwuxyt + 0.0020741088115012 * ljhig - 0.00288260236853442 * lkjnmo + 0.814272968359295) + vwuxyt * (-0.0000153496057440975 * vwuxyt - 0.000132689043961446 * ljhig + 0.000560833691242812 * lkjnmo - 0.195152027534049) + ljhig * (0.00174418132927582 * ljhig - 0.00255243321439347 * lkjnmo + 0.116935020465145) + lkjnmo * (-0.000343531996510555 * lkjnmo + 0.24165260232407);
      }return kihfjg['subarray'](0x0, rswtu);
    }, '_convertYcckToCmyk': function hjifgk(mnokp) {
      var begdcf, khjim, geihdf;for (var cdefh = 0x0, mnqrpo = mnokp['length']; cdefh < mnqrpo; cdefh += 0x4) {
        begdcf = mnokp[cdefh], khjim = mnokp[cdefh + 0x1], geihdf = mnokp[cdefh + 0x2], mnokp[cdefh] = 434.456 - begdcf - 1.402 * geihdf, mnokp[cdefh + 0x1] = 119.541 - begdcf + 0.344 * khjim + 0.714 * geihdf, mnokp[cdefh + 0x2] = 481.816 - begdcf - 1.772 * khjim;
      }return mnokp;
    }, '_convertCmykToRgb': function lhjkm($0z_) {
      var ghfkji,
          mjkhl,
          nmql,
          _0x$zy,
          svx = 0x0,
          lkhmi = 0x1 / 0xff;for (var ustw = 0x0, z_2$01 = $0z_['length']; ustw < z_2$01; ustw += 0x4) {
        ghfkji = $0z_[ustw] * lkhmi, mjkhl = $0z_[ustw + 0x1] * lkhmi, nmql = $0z_[ustw + 0x2] * lkhmi, _0x$zy = $0z_[ustw + 0x3] * lkhmi, $0z_[svx++] = 0xff + ghfkji * (-4.387332384609988 * ghfkji + 54.48615194189176 * mjkhl + 18.82290502165302 * nmql + 212.25662451639585 * _0x$zy - 285.2331026137004) + mjkhl * (1.7149763477362134 * mjkhl - 5.6096736904047315 * nmql - 17.873870861415444 * _0x$zy - 5.497006427196366) + nmql * (-2.5217340131683033 * nmql - 21.248923337353073 * _0x$zy + 17.5119270841813) - _0x$zy * (21.86122147463605 * _0x$zy + 189.48180835922747), $0z_[svx++] = 0xff + ghfkji * (8.841041422036149 * ghfkji + 60.118027045597366 * mjkhl + 6.871425592049007 * nmql + 31.159100130055922 * _0x$zy - 79.2970844816548) + mjkhl * (-15.310361306967817 * mjkhl + 17.575251261109482 * nmql + 131.35250912493976 * _0x$zy - 190.9453302588951) + nmql * (4.444339102852739 * nmql + 9.8632861493405 * _0x$zy - 24.86741582555878) - _0x$zy * (20.737325471181034 * _0x$zy + 187.80453709719578), $0z_[svx++] = 0xff + ghfkji * (0.8842522430003296 * ghfkji + 8.078677503112928 * mjkhl + 30.89978309703729 * nmql - 0.23883238689178934 * _0x$zy - 14.183576799673286) + mjkhl * (10.49593273432072 * mjkhl + 63.02378494754052 * nmql + 50.606957656360734 * _0x$zy - 112.23884253719248) + nmql * (0.03296041114873217 * nmql + 115.60384449646641 * _0x$zy - 193.58209356861505) - _0x$zy * (22.33816807309886 * _0x$zy + 180.12613974708367);
      }return $0z_['subarray'](0x0, svx);
    }, 'getData': function (otpsq, fidghe, wurst, sp, hikjml, w$vyxz) {
      wurst === void 0x0 && (wurst = ![]);sp === void 0x0 && (sp = ![]);hikjml === void 0x0 && (hikjml = 0x0);w$vyxz === void 0x0 && (w$vyxz = null);if (this['numComponents'] > 0x4) throw new Error('Unsupported color mode');var rnpmo = this['_getLinearizedBlockData'](otpsq, fidghe, sp, hikjml, w$vyxz);if (this['numComponents'] === 0x1 && wurst) {
        var fghce = rnpmo['length'],
            tosp = new Uint8ClampedArray(fghce * 0x3),
            ikfjhg = 0x0;for (var sprot = 0x0; sprot < fghce; sprot++) {
          var nlpmok = rnpmo[sprot];tosp[ikfjhg++] = nlpmok, tosp[ikfjhg++] = nlpmok, tosp[ikfjhg++] = nlpmok;
        }return tosp;
      } else {
        if (this['numComponents'] === 0x3 && this['_isColorConversionNeeded']) return this['_convertYccToRgb'](rnpmo, sp);else {
          if (this['numComponents'] === 0x4) {
            if (this['_isColorConversionNeeded']) {
              if (wurst) return this['_convertYcckToRgb'](rnpmo);return this['_convertYcckToCmyk'](rnpmo);
            } else {
              if (wurst) return this['_convertCmykToRgb'](rnpmo);
            }
          }
        }
      }return rnpmo;
    } }, ustwvr;
}(),
    _dmjlkn = function () {
  function gijhfk() {
    this['segments'] = [];
  }return gijhfk['create'] = function () {
    var gilhjk;return gijhfk['p_sJob'] != null ? (gilhjk = this['p_sJob'], this['p_sJob'] = this['p_sJob']['p_next']) : gilhjk = new gijhfk(), gilhjk;
  }, gijhfk['free'] = function (oqplnm) {
    oqplnm['p_next'] = this['p_sJob'], gijhfk['p_sJob'] = oqplnm, oqplnm['paleT'] = null, oqplnm['segments']['length'] = 0x0, oqplnm['transT'] = null;
  }, gijhfk;
}(),
    _dyuxtvw = function () {
  function sxuwv() {}sxuwv['init'] = function () {
    sxuwv['p_setHands'] = { 'IHDR': sxuwv['p_IHDR'], 'PLTE': sxuwv['p_PLTE'], 'IDAT': sxuwv['p_IDAT'], 'tRNS': sxuwv['p_TRNS'] };
  }, sxuwv['decode'] = function (_02341) {
    var yv$zw = _dmjlkn['create'](),
        rtvusw = new _domrqn();rtvusw['open'](_02341), rtvusw['skip'](0x8);while (rtvusw['bytesAvailable']() > 0x0) {
      var $z210 = rtvusw['getUint32'](),
          y1_z0 = rtvusw['getUTF'](0x4),
          likmhj = sxuwv['p_setHands'][y1_z0];likmhj != null ? likmhj(yv$zw, rtvusw, $z210) : rtvusw['skip']($z210);var efijhg = rtvusw['getUint32']();
    }rtvusw['close']();var mqlopn = sxuwv['p_decodePix'](yv$zw);if (mqlopn == null) return null;var yzuxv = 0x0,
        mnkil = 0x0,
        spnoq = yv$zw['w'],
        $xwzy = yv$zw['h'],
        quvt = new ArrayBuffer(spnoq * $xwzy * sxuwv['p_Pix'](yv$zw) + 0x8),
        jgihk = new Uint8Array(quvt, 0x8),
        ko = new DataView(quvt, 0x0, 0x8);ko['setUint32'](0x0, spnoq), ko['setUint32'](0x4, $xwzy);switch (yv$zw['colorT']) {case 0x3:
        {
          sxuwv['p_byPale'](yv$zw, mqlopn, jgihk);break;
        }case 0x2:
        {
          switch (yv$zw['bits']) {case 0x8:
              {
                for (var oplq = 0x0; oplq < $xwzy; ++oplq) {
                  mnkil++;for (var $3_1 = 0x0; $3_1 < spnoq; ++$3_1) {
                    jgihk[yzuxv++] = mqlopn[mnkil++], jgihk[yzuxv++] = mqlopn[mnkil++], jgihk[yzuxv++] = mqlopn[mnkil++];
                  }
                }break;
              }case 0x10:
              {
                for (var oplq = 0x0; oplq < $xwzy; ++oplq) {
                  mnkil++;for (var $3_1 = 0x0; $3_1 < spnoq; ++$3_1) {
                    jgihk[yzuxv++] = (mqlopn[mnkil] << 0x8 | mqlopn[mnkil + 0x1]) / 0xffff * 0xff, mnkil += 0x2, jgihk[yzuxv++] = (mqlopn[mnkil] << 0x8 | mqlopn[mnkil + 0x1]) / 0xffff * 0xff, mnkil += 0x2, jgihk[yzuxv++] = (mqlopn[mnkil] << 0x8 | mqlopn[mnkil + 0x1]) / 0xffff * 0xff, mnkil += 0x2;
                  }
                }break;
              }}break;
        }case 0x6:
        {
          switch (yv$zw['bits']) {case 0x8:
              {
                for (var oplq = 0x0; oplq < $xwzy; ++oplq) {
                  mnkil++;for (var $3_1 = 0x0; $3_1 < spnoq; ++$3_1) {
                    jgihk[yzuxv++] = mqlopn[mnkil++], jgihk[yzuxv++] = mqlopn[mnkil++], jgihk[yzuxv++] = mqlopn[mnkil++], jgihk[yzuxv++] = mqlopn[mnkil++];
                  }
                }break;
              }case 0x10:
              {
                for (var oplq = 0x0; oplq < $xwzy; ++oplq) {
                  mnkil++;for (var $3_1 = 0x0; $3_1 < spnoq; ++$3_1) {
                    jgihk[yzuxv++] = (mqlopn[mnkil] << 0x8 | mqlopn[mnkil + 0x1]) / 0xffff * 0xff, mnkil += 0x2, jgihk[yzuxv++] = (mqlopn[mnkil] << 0x8 | mqlopn[mnkil + 0x1]) / 0xffff * 0xff, mnkil += 0x2, jgihk[yzuxv++] = (mqlopn[mnkil] << 0x8 | mqlopn[mnkil + 0x1]) / 0xffff * 0xff, mnkil += 0x2, jgihk[yzuxv++] = (mqlopn[mnkil] << 0x8 | mqlopn[mnkil + 0x1]) / 0xffff * 0xff, mnkil += 0x2;
                  }
                }break;
              }}break;
        }default:
        {
          console['error']('未支持的类型：', yv$zw['colorT'], yv$zw['bits']);break;
        }}return _dmjlkn['free'](yv$zw), quvt;
  }, sxuwv['p_IHDR'] = function (ojmnkl, dif, _31420) {
    ojmnkl['w'] = dif['getUint32'](), ojmnkl['h'] = dif['getUint32'](), ojmnkl['bits'] = dif['getUint8'](), ojmnkl['colorT'] = dif['getUint8'](), ojmnkl['compressT'] = dif['getUint8'](), ojmnkl['filterT'] = dif['getUint8'](), ojmnkl['interT'] = dif['getUint8']();
  }, sxuwv['p_PLTE'] = function (cfgbde, lonkmp, gklijh) {
    cfgbde['paleT'] = lonkmp['getBytes'](gklijh);
  }, sxuwv['p_IDAT'] = function (iljkhm, hkijfg, _0$1y) {
    iljkhm['segments']['push'](hkijfg['getBytes'](_0$1y));
  }, sxuwv['p_TRNS'] = function (nmproq, rnsq, df) {
    nmproq['transT'] = rnsq['getBytes'](df);
  }, sxuwv['p_Pale'] = function (vtwsur) {
    var qsnrop = vtwsur['paleT'],
        oqsrtp = vtwsur['transT'],
        zxwv = qsnrop['length'],
        vqstu = new Uint8Array(zxwv / 0x3 * 0x4),
        hmkjli = 0x0,
        hjfige = 0x0,
        dgecb = oqsrtp['byteLength'],
        qopnr = 0x0;while (hmkjli < zxwv) {
      vqstu[hjfige++] = qsnrop[hmkjli++], vqstu[hjfige++] = qsnrop[hmkjli++], vqstu[hjfige++] = qsnrop[hmkjli++], vqstu[hjfige++] = qopnr < dgecb ? oqsrtp[qopnr++] : 0xff;
    }return vqstu;
  };;return sxuwv['p_mergeSeg'] = function (ghdefc) {
    var tqopr = 0x0;for (var hlkmji = 0x0, npmoq = ghdefc; hlkmji < npmoq['length']; hlkmji++) {
      var pnrqos = npmoq[hlkmji];tqopr += pnrqos['byteLength'];
    }var wuxsvt = new Uint8Array(tqopr),
        mijkh = 0x0;for (var gikhj = 0x0, $_zyxw = ghdefc; gikhj < $_zyxw['length']; gikhj++) {
      var pnrqos = $_zyxw[gikhj];wuxsvt['set'](pnrqos, mijkh), mijkh += pnrqos['length'];
    }return new Zlib['Inflate'](wuxsvt)['decompress']();
  }, sxuwv['p_Pix'] = function (cafebd) {
    var knmp = 0x3;return cafebd['colorT'] & 0x4 && (knmp = 0x4), cafebd['colorT'] == 0x3 && cafebd['transT'] && (knmp = 0x4), knmp;
  }, sxuwv['p_Bytes'] = function (sruvtw) {
    var $y0_z = 0x1;switch (sruvtw['colorT']) {case 0x2:
        {
          $y0_z = 0x3;break;
        }case 0x4:
        {
          $y0_z = 0x2;break;
        }case 0x6:
        {
          $y0_z = 0x4;break;
        }}var ywtvu = $y0_z * sruvtw['bits'];return ywtvu + 0x7 >> 0x3;
  }, sxuwv['p_decodePix'] = function ($z1y_0) {
    if ($z1y_0['interT'] == 0x0) return this['p_decodeInterT']($z1y_0);return null;
  }, sxuwv['p_decodeInterT'] = function (yxv$wz) {
    var ghdfec = sxuwv['p_mergeSeg'](yxv$wz['segments']),
        ifeh = ghdfec['byteLength'],
        kghjil = yxv$wz['h'],
        srptu = sxuwv['p_Bytes'](yxv$wz),
        hedg = Math['floor']((ifeh - kghjil) / kghjil),
        $yz_01 = hedg + 0x1,
        gklji = 0x0,
        jmil = 0x0,
        fik = 0x0,
        nolmkj = 0x0,
        npolqm = 0x0,
        storqp = 0x0,
        rqutsv = 0x0,
        hefg = 0x0,
        niklj = 0x0,
        lmkji = 0x0;while (jmil < ifeh) {
      switch (ghdfec[jmil++]) {case 0x0:
          {
            jmil += hedg;break;
          }case 0x1:
          {
            jmil += srptu;for (gklji = srptu; gklji < hedg; ++gklji, ++jmil) {
              ghdfec[jmil] = (ghdfec[jmil] + ghdfec[jmil - srptu]) % 0x100;
            }break;
          }case 0x2:
          {
            if (jmil != 0x1) for (gklji = 0x0; gklji < hedg; ++gklji, ++jmil) {
              ghdfec[jmil] = (ghdfec[jmil] + ghdfec[jmil - $yz_01]) % 0x100;
            }break;
          }case 0x3:
          {
            if (jmil == 0x1) {
              jmil += srptu;for (gklji = srptu; gklji < hedg; ++gklji, ++jmil) {
                ghdfec[jmil] = (ghdfec[jmil] + (ghdfec[jmil - srptu] >> 0x1)) % 0x100;
              }
            } else {
              for (gklji = 0x0; gklji < srptu; ++gklji, ++jmil) {
                ghdfec[jmil] = (ghdfec[jmil] + (ghdfec[jmil - $yz_01] >> 0x1)) % 0x100;
              }for (gklji = srptu; gklji < hedg; ++gklji, ++jmil) {
                ghdfec[jmil] = (ghdfec[jmil] + (ghdfec[jmil - srptu] + ghdfec[jmil - $yz_01] >> 0x1)) % 0x100;
              }
            }break;
          }case 0x4:
          {
            if (srptu == 0x1) {
              if (jmil == 0x1) {
                fik = ghdfec[jmil++];for (gklji = 0x1; gklji < hedg; ++gklji, ++jmil) {
                  lmkji = fik > 0x0 ? fik : 0x0, fik = ghdfec[jmil] = (ghdfec[jmil] + lmkji) % 0x100;
                }
              } else {
                nolmkj = ghdfec[jmil - $yz_01], storqp = nolmkj, rqutsv = storqp;rqutsv < 0x0 && (rqutsv = -rqutsv);niklj = storqp;niklj < 0x0 && (niklj = -niklj);lmkji = storqp <= 0x0 ? 0x0 : 0x0 <= niklj ? nolmkj : 0x0, fik = ghdfec[jmil] = ghdfec[jmil] + lmkji, jmil++;for (gklji = 0x1; gklji < hedg; ++gklji, ++jmil) {
                  nolmkj = ghdfec[jmil - $yz_01], npolqm = ghdfec[jmil - $yz_01 - 0x1], storqp = fik + nolmkj - npolqm, rqutsv = storqp - fik, rqutsv < 0x0 && (rqutsv = -rqutsv), hefg = storqp - nolmkj, hefg < 0x0 && (hefg = -hefg), niklj = storqp - npolqm, niklj < 0x0 && (niklj = -niklj), lmkji = rqutsv <= hefg && rqutsv <= niklj ? fik : hefg <= niklj ? nolmkj : npolqm, fik = ghdfec[jmil] = (ghdfec[jmil] + lmkji) % 0x100;
                }
              }
            } else {
              if (jmil == 0x1) {
                jmil += srptu, nolmkj = npolqm = 0x0;for (gklji = srptu; gklji < hedg; ++gklji, ++jmil) {
                  fik = ghdfec[jmil - srptu], storqp = fik + nolmkj - npolqm, rqutsv = storqp - fik, rqutsv < 0x0 && (rqutsv = -rqutsv), hefg = storqp - nolmkj, hefg < 0x0 && (hefg = -hefg), niklj = storqp - npolqm, niklj < 0x0 && (niklj = -niklj), lmkji = rqutsv <= hefg && rqutsv <= niklj ? fik : hefg <= niklj ? nolmkj : npolqm, ghdfec[jmil] = (ghdfec[jmil] + lmkji) % 0x100;
                }
              } else {
                for (gklji = 0x0; gklji < srptu; ++gklji, ++jmil) {
                  fik = 0x0, nolmkj = ghdfec[jmil - $yz_01], npolqm = 0x0, storqp = fik + nolmkj - npolqm, rqutsv = storqp - fik, rqutsv < 0x0 && (rqutsv = -rqutsv), hefg = storqp - nolmkj, hefg < 0x0 && (hefg = -hefg), niklj = storqp - npolqm, niklj < 0x0 && (niklj = -niklj), lmkji = rqutsv <= hefg && rqutsv <= niklj ? fik : hefg <= niklj ? nolmkj : npolqm, ghdfec[jmil] = (ghdfec[jmil] + lmkji) % 0x100;
                }for (gklji = srptu; gklji < hedg; ++gklji, ++jmil) {
                  fik = ghdfec[jmil - srptu], nolmkj = ghdfec[jmil - $yz_01], npolqm = ghdfec[jmil - $yz_01 - srptu], storqp = fik + nolmkj - npolqm, rqutsv = storqp - fik, rqutsv < 0x0 && (rqutsv = -rqutsv), hefg = storqp - nolmkj, hefg < 0x0 && (hefg = -hefg), niklj = storqp - npolqm, niklj < 0x0 && (niklj = -niklj), lmkji = rqutsv <= hefg && rqutsv <= niklj ? fik : hefg <= niklj ? nolmkj : npolqm, ghdfec[jmil] = (ghdfec[jmil] + lmkji) % 0x100;
                }
              }
            }break;
          }default:
          {
            console['log']('解析出错：' + yxv$wz['w'] + ',\x20' + yxv$wz['h'] + ',\x20' + srptu), console['log'](ghdfec['byteLength']);break;
          }}
    }return ghdfec;
  }, sxuwv['p_byPale'] = function (wvy$zx, lijgk, vxuyzw) {
    var wtyux = 0x0,
        xzyw = 0x0,
        vtx = wvy$zx['w'],
        nsrqop = wvy$zx['h'],
        trwvs = wvy$zx['paleT'];if (wvy$zx['transT'] != null) {
      trwvs = sxuwv['p_Pale'](wvy$zx);switch (wvy$zx['bits']) {case 0x1:
          {
            for (var tusprq = 0x0; tusprq < nsrqop; ++tusprq) {
              xzyw++;for (var ifkghj = 0x0; ifkghj < vtx; ++ifkghj) {
                var pmqn = (lijgk[xzyw + (ifkghj >> 0x3)] & 0x1) * 0x4;vxuyzw[wtyux++] = trwvs[pmqn], vxuyzw[wtyux++] = trwvs[pmqn + 0x1], vxuyzw[wtyux++] = trwvs[pmqn + 0x2], vxuyzw[wtyux++] = trwvs[pmqn + 0x3];
              }xzyw += vtx + 0x7 >> 0x3;
            }break;
          }case 0x2:
          {
            for (var tusprq = 0x0; tusprq < nsrqop; ++tusprq) {
              xzyw++;for (var ifkghj = 0x0; ifkghj < vtx; ++ifkghj) {
                var pmqn = (lijgk[xzyw + (ifkghj >> 0x2)] & 0x3) * 0x4;vxuyzw[wtyux++] = trwvs[pmqn], vxuyzw[wtyux++] = trwvs[pmqn + 0x1], vxuyzw[wtyux++] = trwvs[pmqn + 0x2], vxuyzw[wtyux++] = trwvs[pmqn + 0x3];
              }xzyw += vtx + 0x3 >> 0x2;
            }break;
          }case 0x4:
          {
            for (var tusprq = 0x0; tusprq < nsrqop; ++tusprq) {
              xzyw++;for (var ifkghj = 0x0; ifkghj < vtx; ++ifkghj) {
                var pmqn = (lijgk[xzyw + (ifkghj >> 0x1)] & 0xf) * 0x4;vxuyzw[wtyux++] = trwvs[pmqn], vxuyzw[wtyux++] = trwvs[pmqn + 0x1], vxuyzw[wtyux++] = trwvs[pmqn + 0x2], vxuyzw[wtyux++] = trwvs[pmqn + 0x3];
              }xzyw += vtx + 0x1 >> 0x1;
            }break;
          }case 0x8:
          {
            for (var tusprq = 0x0; tusprq < nsrqop; ++tusprq) {
              xzyw++;for (var ifkghj = 0x0; ifkghj < vtx; ++ifkghj) {
                var pmqn = lijgk[xzyw++] * 0x4;vxuyzw[wtyux++] = trwvs[pmqn], vxuyzw[wtyux++] = trwvs[pmqn + 0x1], vxuyzw[wtyux++] = trwvs[pmqn + 0x2], vxuyzw[wtyux++] = trwvs[pmqn + 0x3];
              }
            }break;
          }}
    } else switch (wvy$zx['bits']) {case 0x1:
        {
          for (var tusprq = 0x0; tusprq < nsrqop; ++tusprq) {
            xzyw++;for (var ifkghj = 0x0; ifkghj < vtx; ++ifkghj) {
              var pmqn = (lijgk[xzyw + (ifkghj >> 0x3)] & 0x1) * 0x3;vxuyzw[wtyux++] = trwvs[pmqn], vxuyzw[wtyux++] = trwvs[pmqn + 0x1], vxuyzw[wtyux++] = trwvs[pmqn + 0x2];
            }xzyw += vtx + 0x7 >> 0x3;
          }break;
        }case 0x2:
        {
          for (var tusprq = 0x0; tusprq < nsrqop; ++tusprq) {
            xzyw++;for (var ifkghj = 0x0; ifkghj < vtx; ++ifkghj) {
              var pmqn = (lijgk[xzyw + (ifkghj >> 0x2)] & 0x3) * 0x3;vxuyzw[wtyux++] = trwvs[pmqn], vxuyzw[wtyux++] = trwvs[pmqn + 0x1], vxuyzw[wtyux++] = trwvs[pmqn + 0x2];
            }xzyw += vtx + 0x3 >> 0x2;
          }break;
        }case 0x4:
        {
          for (var tusprq = 0x0; tusprq < nsrqop; ++tusprq) {
            xzyw++;for (var ifkghj = 0x0; ifkghj < vtx; ++ifkghj) {
              var pmqn = (lijgk[xzyw + (ifkghj >> 0x1)] & 0xf) * 0x3;vxuyzw[wtyux++] = trwvs[pmqn], vxuyzw[wtyux++] = trwvs[pmqn + 0x1], vxuyzw[wtyux++] = trwvs[pmqn + 0x2];
            }xzyw += vtx + 0x1 >> 0x1;
          }break;
        }case 0x8:
        {
          for (var tusprq = 0x0; tusprq < nsrqop; ++tusprq) {
            xzyw++;for (var ifkghj = 0x0; ifkghj < vtx; ++ifkghj) {
              var pmqn = lijgk[xzyw++] * 0x3;vxuyzw[wtyux++] = trwvs[pmqn], vxuyzw[wtyux++] = trwvs[pmqn + 0x1], vxuyzw[wtyux++] = trwvs[pmqn + 0x2];
            }
          }break;
        }}
  }, sxuwv['p_setHands'] = {}, sxuwv;
}(),
    _dplqonm = window['DecodeTools'] = function () {
  function mnolq() {}return mnolq['init'] = function () {
    _dyuxtvw['init']();
  }, mnolq['decodeBuff'] = function (rsqpon, qlnopm) {
    var xyz_;if (qlnopm) xyz_ = new Zlib['Inflate'](new Uint8Array(rsqpon))['decompress']();else {
      let pmqrn = new Zlib['Unzip'](new Uint8Array(rsqpon));xyz_ = pmqrn['decompress']('res');
    }return xyz_['buffer']['slice'](xyz_['byteOffset'], xyz_['byteLength']);
  }, mnolq['decodeImage'] = function (vxuzw, wzyuvx) {
    wzyuvx === void 0x0 && (wzyuvx = null);if (this['isPng'](vxuzw)) return _dyuxtvw['decode'](vxuzw);var aedcbf = new _dnlkmi();aedcbf['parse'](vxuzw);var wvzyux = aedcbf['width'],
        _213 = aedcbf['height'],
        $02z_ = mnolq['p_needAlpha'](wvzyux, _213) || wzyuvx != null,
        uxwvzy = aedcbf['getData'](wvzyux, _213, !![], $02z_, 0x8, wzyuvx),
        cdae = new DataView(uxwvzy['buffer']);return cdae['setUint32'](0x0, wvzyux), cdae['setUint32'](0x4, _213), uxwvzy['buffer'];
  }, mnolq['p_needAlpha'] = function (hdefgi, dgcfh) {
    if (hdefgi % 0x2 != 0x0 || dgcfh % 0x2 != 0x0) return !![];if (hdefgi == 0x122 && dgcfh == 0x154) return !![];if (hdefgi == 0x24a && dgcfh == 0x212) return !![];if (hdefgi == 0x25a && dgcfh == 0x12e) return !![];if (hdefgi == 0x27e && dgcfh == 0x1d2) return !![];return ![];
  }, mnolq['isPng'] = function (fgiehj) {
    var pmkno = mnolq['PngHeader'];for (var njik = 0x0; njik < 0x8; ++njik) {
      if (fgiehj[njik] != pmkno[njik]) return ![];
    }return !![];
  }, mnolq['PngHeader'] = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0xd, 0xa, 0x1a, 0xa]), mnolq;
}();window['Number']['isSafeInteger'] = Number['isSafeInteger'] || function (lkmnjo) {
  return typeof lkmnjo === 'number' && (Math['round'](lkmnjo) === lkmnjo || lkmnjo === -0x1fffffffffffff || lkmnjo === 0x1fffffffffffff) && -0x1fffffffffffff <= lkmnjo && lkmnjo <= 0x1fffffffffffff;
};var _dljnimk = function (turswv, pqstro, dghfei) {
  pqstro = pqstro || 0x0, dghfei = dghfei || this['length'];pqstro < 0x0 && (pqstro = this['length'] + pqstro);dghfei < 0x0 && (dghfei = this['length'] + dghfei);if (pqstro >= this['length']) return;dghfei > this['length'] && (dghfei = this['length']);while (pqstro < dghfei) {
    this[pqstro++] = turswv;
  }return this;
},
    _dsrvuq = [Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];for (var _dfdbgec = 0x0, _dfhje = _dsrvuq; _dfdbgec < _dfhje['length']; _dfdbgec++) {
  var _dtqros = _dfhje[_dfdbgec];!_dtqros['prototype']['fill'] && (_dtqros['prototype']['fill'] = _dljnimk);
}