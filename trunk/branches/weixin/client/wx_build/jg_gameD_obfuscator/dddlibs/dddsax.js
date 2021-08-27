var a_ = wx.$d;
function b_p4ut62o() {}function b_wb7xd3(mz_c, qjy19h, mpu, l_dzw, jt6o) {
  function ldi_0wz(nkh19q) {
    var ytjop26 = nkh19q['slice'](0x1, -0x1);return ytjop26 in mpu ? mpu[ytjop26] : '#' === ytjop26['charAt'](0x0) ? 0xffff < (ytjop26 = parseInt(ytjop26['substr'](0x1)['replace']('x', '0x'))) ? (ytjop26 -= 0x10000, String['fromCharCode'](0xd800 + (ytjop26 >> 0xa), 0xdc00 + (0x3ff & ytjop26))) : String['fromCharCode'](ytjop26) : (jt6o['error']('entity not found:' + nkh19q), nkh19q);
  }function nkhv9(q1jyhk9) {
    var dilf0_z;agmfc_z < q1jyhk9 && (dilf0_z = mz_c['substring'](agmfc_z, q1jyhk9)['replace'](/&#?\w+;/g, ldi_0wz), izl3dw && _zfmgl(agmfc_z), l_dzw['characters'](dilf0_z, 0x0, q1jyhk9 - agmfc_z), agmfc_z = q1jyhk9);
  }function _zfmgl(ypjt62o, vnq$9e) {
    for (; k2jt <= ypjt62o && (vnq$9e = qnv9e1h['exec'](mz_c));) _gzfdli = vnq$9e['index'], k2jt = _gzfdli + vnq$9e[0x0]['length'], izl3dw['lineNumber']++;izl3dw['columnNumber'] = ypjt62o - _gzfdli + 0x1;
  }for (var _gzfdli = 0x0, k2jt = 0x0, qnv9e1h = /.*(?:\r\n?|\n)|.*$/g, izl3dw = l_dzw['locator'], liz0fd_ = [{ 'currentNSMap': qjy19h }], cga48fm = {}, agmfc_z = 0x0;;) {
    try {
      var gzilfd_ = mz_c['indexOf']('<', agmfc_z),
          a8gfmc4,
          she9$;if (gzilfd_ < 0x0) return void (mz_c['substr'](agmfc_z)['match'](/^\s*$/) || (she9$ = (a8gfmc4 = l_dzw['doc'])['createTextNode'](mz_c['substr'](agmfc_z)), a8gfmc4['appendChild'](she9$), l_dzw['currentElement'] = she9$));switch (agmfc_z < gzilfd_ && nkhv9(gzilfd_), mz_c['charAt'](gzilfd_ + 0x1)) {case '/':
          var a8up62 = mz_c['indexOf']('>', gzilfd_ + 0x3),
              t1okj6y = mz_c['substring'](gzilfd_ + 0x2, a8up62),
              mig_zl = liz0fd_['pop']();a8up62 < 0x0 ? (t1okj6y = mz_c['substring'](gzilfd_ + 0x2)['replace'](/[\s<].*/, ''), jt6o['error']('end tag name: ' + t1okj6y + ' is not complete:' + mig_zl['tagName']), a8up62 = gzilfd_ + 0x1 + t1okj6y['length']) : t1okj6y['match'](/\s</) && (t1okj6y = t1okj6y['replace'](/[\s<].*/, ''), jt6o['error']('end tag name: ' + t1okj6y + ' maybe not complete'), a8up62 = gzilfd_ + 0x1 + t1okj6y['length']);var d07l3 = mig_zl['localNSMap'],
              p8ua462 = mig_zl['tagName'] == t1okj6y;if (p8ua462 || mig_zl['tagName'] && mig_zl['tagName']['toLowerCase']() == t1okj6y['toLowerCase']()) {
            if (l_dzw['endElement'](mig_zl['uri'], mig_zl['localName'], t1okj6y), d07l3) {
              for (var u2jp6to in d07l3) l_dzw['endPrefixMapping'](u2jp6to);
            }p8ua462 || jt6o['fatalError']('end tag name: ' + t1okj6y + ' is not match the current start tagName:' + mig_zl['tagName']);
          } else liz0fd_['push'](mig_zl);a8up62++;break;case '?':
          izl3dw && _zfmgl(gzilfd_), a8up62 = b_flzgi(mz_c, gzilfd_, l_dzw);break;case '!':
          izl3dw && _zfmgl(gzilfd_), a8up62 = b_mzgicf_(mz_c, gzilfd_, l_dzw, jt6o);break;default:
          izl3dw && _zfmgl(gzilfd_);var koty62j = new b_ilfz(),
              _lzwdi = liz0fd_[liz0fd_['length'] - 0x1]['currentNSMap'],
              a8up62 = b__8acfm(mz_c, gzilfd_, koty62j, _lzwdi, ldi_0wz, jt6o),
              qty1jko = koty62j['length'];if (!koty62j['closed'] && b_blwi30d(mz_c, a8up62, koty62j['tagName'], cga48fm) && (koty62j['closed'] = !0x0, mpu['nbsp'] || jt6o['warning']('unclosed xml attribute')), izl3dw && qty1jko) {
            for (var ykv91 = b_$ve5snr(izl3dw, {}), $9v = 0x0; $9v < qty1jko; $9v++) {
              var qhnv9$e = koty62j[$9v];_zfmgl(qhnv9$e['offset']), qhnv9$e['locator'] = b_$ve5snr(izl3dw, {});
            }l_dzw['locator'] = ykv91, b_ns$erv5(koty62j, l_dzw, _lzwdi) && liz0fd_['push'](koty62j), l_dzw['locator'] = izl3dw;
          } else b_ns$erv5(koty62j, l_dzw, _lzwdi) && liz0fd_['push'](koty62j);'http://www.w3.org/1999/xhtml' !== koty62j['uri'] || koty62j['closed'] ? a8up62++ : a8up62 = b_jhyq9(mz_c, a8up62, koty62j['tagName'], ldi_0wz, l_dzw);}
    } catch (otp62yj) {
      jt6o['error']('element parse error: ' + otp62yj), a8up62 = -0x1;
    }agmfc_z < a8up62 ? agmfc_z = a8up62 : nkhv9(Math['max'](gzilfd_, agmfc_z) + 0x1);
  }
}function b_$ve5snr(ild30z, envs5$) {
  return envs5$['lineNumber'] = ild30z['lineNumber'], envs5$['columnNumber'] = ild30z['columnNumber'], envs5$;
}function b__8acfm(o6tpju2, nshve9$, a8mc4ug, _cmgf8a, wz30dli, a6u248p) {
  for (var afc8, h$sn5ev = ++nshve9$, l70bw3d = b_zagmf_c;;) {
    var wlidb30 = o6tpju2['charAt'](h$sn5ev);switch (wlidb30) {case '=':
        if (l70bw3d === b_ua428cp) afc8 = o6tpju2['slice'](nshve9$, h$sn5ev), l70bw3d = b_a8p4mc;else {
          if (l70bw3d !== b_tqojk) throw new Error('attribute equal must after attrName');l70bw3d = b_a8p4mc;
        }break;case '\x27':case '\x22':
        if (l70bw3d === b_a8p4mc || l70bw3d === b_ua428cp) {
          if (l70bw3d === b_ua428cp && (a6u248p['warning']('attribute value must after "="'), afc8 = o6tpju2['slice'](nshve9$, h$sn5ev)), !(0x0 < (h$sn5ev = o6tpju2['indexOf'](wlidb30, nshve9$ = h$sn5ev + 0x1)))) throw new Error('attribute value no end \'' + wlidb30 + '\' match');svh9n = o6tpju2['slice'](nshve9$, h$sn5ev)['replace'](/&#?\w+;/g, wz30dli), a8mc4ug['add'](afc8, svh9n, nshve9$ - 0x1), l70bw3d = b_u4op;
        } else {
          if (l70bw3d != b_lifz_gm) throw new Error('attribute value must after "="');svh9n = o6tpju2['slice'](nshve9$, h$sn5ev)['replace'](/&#?\w+;/g, wz30dli), a8mc4ug['add'](afc8, svh9n, nshve9$), a6u248p['warning']('attribute "' + afc8 + '" missed start quot(' + wlidb30 + ')!!'), nshve9$ = h$sn5ev + 0x1, l70bw3d = b_u4op;
        }break;case '/':
        switch (l70bw3d) {case b_zagmf_c:
            a8mc4ug['setTagName'](o6tpju2['slice'](nshve9$, h$sn5ev));case b_u4op:case b_c8upa4:case b_a8c4gu:
            l70bw3d = b_a8c4gu, a8mc4ug['closed'] = !0x0;case b_lifz_gm:case b_ua428cp:case b_tqojk:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return a6u248p['error']('unexpected end of input'), l70bw3d == b_zagmf_c && a8mc4ug['setTagName'](o6tpju2['slice'](nshve9$, h$sn5ev)), h$sn5ev;case '>':
        switch (l70bw3d) {case b_zagmf_c:
            a8mc4ug['setTagName'](o6tpju2['slice'](nshve9$, h$sn5ev));case b_u4op:case b_c8upa4:case b_a8c4gu:
            break;case b_lifz_gm:case b_ua428cp:
            '/' === (svh9n = o6tpju2['slice'](nshve9$, h$sn5ev))['slice'](-0x1) && (a8mc4ug['closed'] = !0x0, svh9n = svh9n['slice'](0x0, -0x1));case b_tqojk:
            l70bw3d === b_tqojk && (svh9n = afc8), l70bw3d == b_lifz_gm ? (a6u248p['warning']('attribute "' + svh9n + '" missed quot(")!!'), a8mc4ug['add'](afc8, svh9n['replace'](/&#?\w+;/g, wz30dli), nshve9$)) : ('http://www.w3.org/1999/xhtml' === _cmgf8a[''] && svh9n['match'](/^(?:disabled|checked|selected)$/i) || a6u248p['warning']('attribute "' + svh9n + '" missed value!! "' + svh9n + '" instead!!'), a8mc4ug['add'](svh9n, svh9n, nshve9$));break;case b_a8p4mc:
            throw new Error('attribute value missed!!');}return h$sn5ev;case '\u0080':
        wlidb30 = '\x20';default:
        if (wlidb30 <= '\x20') switch (l70bw3d) {case b_zagmf_c:
            a8mc4ug['setTagName'](o6tpju2['slice'](nshve9$, h$sn5ev)), l70bw3d = b_c8upa4;break;case b_ua428cp:
            afc8 = o6tpju2['slice'](nshve9$, h$sn5ev), l70bw3d = b_tqojk;break;case b_lifz_gm:
            var svh9n = o6tpju2['slice'](nshve9$, h$sn5ev)['replace'](/&#?\w+;/g, wz30dli);a6u248p['warning']('attribute "' + svh9n + '" missed quot(")!!'), a8mc4ug['add'](afc8, svh9n, nshve9$);case b_u4op:
            l70bw3d = b_c8upa4;} else switch (l70bw3d) {case b_tqojk:
            a8mc4ug['tagName'], 'http://www.w3.org/1999/xhtml' === _cmgf8a[''] && afc8['match'](/^(?:disabled|checked|selected)$/i) || a6u248p['warning']('attribute "' + afc8 + '" missed value!! "' + afc8 + '" instead2!!'), a8mc4ug['add'](afc8, afc8, nshve9$), nshve9$ = h$sn5ev, l70bw3d = b_ua428cp;break;case b_u4op:
            a6u248p['warning']('attribute space is required"' + afc8 + '\x22!!');case b_c8upa4:
            l70bw3d = b_ua428cp, nshve9$ = h$sn5ev;break;case b_a8p4mc:
            l70bw3d = b_lifz_gm, nshve9$ = h$sn5ev;break;case b_a8c4gu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}h$sn5ev++;
  }
}function b_ns$erv5(um4p8a, t2uj6, t6jko2y) {
  for (var $sr5v = um4p8a['tagName'], d03b7l = null, _z0ldif = um4p8a['length']; _z0ldif--;) {
    var q1jkoy9 = um4p8a[_z0ldif],
        k9h1j = q1jkoy9['qName'],
        fi_0lz = q1jkoy9['value'],
        mifgzc_;k9h1j = 0x0 < (w3dl7b0 = k9h1j['indexOf'](':')) ? (f84gam = q1jkoy9['prefix'] = k9h1j['slice'](0x0, w3dl7b0), mifgzc_ = k9h1j['slice'](w3dl7b0 + 0x1), 'xmlns' === f84gam && mifgzc_) : (f84gam = null, 'xmlns' === (mifgzc_ = k9h1j) && ''), q1jkoy9['localName'] = mifgzc_, !0x1 !== k9h1j && (null == d03b7l && (d03b7l = {}, b_ot42u6p(t6jko2y, t6jko2y = {})), t6jko2y[k9h1j] = d03b7l[k9h1j] = fi_0lz, q1jkoy9['uri'] = 'http://www.w3.org/2000/xmlns/', t2uj6['startPrefixMapping'](k9h1j, fi_0lz));
  }for (_z0ldif = um4p8a['length']; _z0ldif--;) (f84gam = (q1jkoy9 = um4p8a[_z0ldif])['prefix']) && ('xml' === f84gam && (q1jkoy9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== f84gam && (q1jkoy9['uri'] = t6jko2y[f84gam || '']));var w3dl7b0;mifgzc_ = 0x0 < (w3dl7b0 = $sr5v['indexOf'](':')) ? (f84gam = um4p8a['prefix'] = $sr5v['slice'](0x0, w3dl7b0), um4p8a['localName'] = $sr5v['slice'](w3dl7b0 + 0x1)) : (f84gam = null, um4p8a['localName'] = $sr5v);var g_8acfm = um4p8a['uri'] = t6jko2y[f84gam || ''];if (t2uj6['startElement'](g_8acfm, mifgzc_, $sr5v, um4p8a), !um4p8a['closed']) return um4p8a['currentNSMap'] = t6jko2y, um4p8a['localNSMap'] = d03b7l, !0x0;if (t2uj6['endElement'](g_8acfm, mifgzc_, $sr5v), d03b7l) {
    for (var f84gam in d03b7l) t2uj6['endPrefixMapping'](f84gam);
  }
}function b_jhyq9(f0_dl, li3b0d, lizf_dg, _idglf, mf_8cag) {
  if (/^(?:script|textarea)$/i['test'](lizf_dg)) {
    var c2u8p4 = f0_dl['indexOf']('</' + lizf_dg + '>', li3b0d),
        f0_dl = f0_dl['substring'](li3b0d + 0x1, c2u8p4);if (/[&<]/['test'](f0_dl)) return (/^script$/i['test'](lizf_dg) || (f0_dl = f0_dl['replace'](/&#?\w+;/g, _idglf)), mf_8cag['characters'](f0_dl, 0x0, f0_dl['length']), c2u8p4
    );
  }return li3b0d + 0x1;
}function b_blwi30d(_zgidlf, d_0fiz, toujp2, mc8uag) {
  var ma8p4cu = mc8uag[toujp2];return null == ma8p4cu && ((ma8p4cu = _zgidlf['lastIndexOf']('</' + toujp2 + '>')) < d_0fiz && (ma8p4cu = _zgidlf['lastIndexOf']('</' + toujp2)), mc8uag[toujp2] = ma8p4cu), ma8p4cu < d_0fiz;
}function b_ot42u6p(yok62j, n$h9ev) {
  for (var ifzg_dl in yok62j) n$h9ev[ifzg_dl] = yok62j[ifzg_dl];
}function b_mzgicf_(w73xb0d, b3w0di, mca8pu4, w_ilz0) {
  var gamcz = w73xb0d['charAt'](b3w0di + 0x2);if ('-' === gamcz) return '-' !== w73xb0d['charAt'](b3w0di + 0x3) ? -0x1 : b3w0di < (r$5esn = w73xb0d['indexOf']('-->', b3w0di + 0x4)) ? (mca8pu4['comment'](w73xb0d, b3w0di + 0x4, r$5esn - b3w0di - 0x4), r$5esn + 0x3) : (w_ilz0['error']('Unclosed comment'), -0x1);if ('CDATA[' == w73xb0d['substr'](b3w0di + 0x3, 0x6)) {
    var r$5esn = w73xb0d['indexOf'](']]>', b3w0di + 0x9);return mca8pu4['startCDATA'](), mca8pu4['characters'](w73xb0d, b3w0di + 0x9, r$5esn - b3w0di - 0x9), mca8pu4['endCDATA'](), r$5esn + 0x3;
  }gamcz = b_a42puc8(w73xb0d, b3w0di), w_ilz0 = gamcz['length'];if (0x1 < w_ilz0 && /!doctype/i['test'](gamcz[0x0][0x0])) return r$5esn = gamcz[0x1][0x0], w73xb0d = 0x3 < w_ilz0 && /^public$/i['test'](gamcz[0x2][0x0]) && gamcz[0x3][0x0], b3w0di = 0x4 < w_ilz0 && gamcz[0x4][0x0], w_ilz0 = gamcz[w_ilz0 - 0x1], (mca8pu4['startDTD'](r$5esn, w73xb0d && w73xb0d['replace'](/^(['"])(.*?)\1$/, '$2'), b3w0di && b3w0di['replace'](/^(['"])(.*?)\1$/, '$2')), mca8pu4['endDTD'](), w_ilz0['index'] + w_ilz0[0x0]['length']);return -0x1;
}function b_flzgi(kqo1y9j, l_gidzf, otpy6j2) {
  var wldib = kqo1y9j['indexOf']('?>', l_gidzf);if (wldib) return l_gidzf = kqo1y9j['substring'](l_gidzf, wldib)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), l_gidzf ? (l_gidzf[0x0]['length'], otpy6j2['processingInstruction'](l_gidzf[0x1], l_gidzf[0x2]), wldib + 0x2) : -0x1;return -0x1;
}function b_ilfz() {}function b_q1y9ok(_lizf0d, yk9qv1) {
  return _lizf0d['__proto__'] = yk9qv1, _lizf0d;
}function b_a42puc8(kqnv9h, ap28c4) {
  var zfm_,
      $n5evhs = [],
      eh$ns = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (eh$ns['lastIndex'] = ap28c4, eh$ns['exec'](kqnv9h); zfm_ = eh$ns['exec'](kqnv9h);) if ($n5evhs['push'](zfm_), zfm_[0x1]) return $n5evhs;
}var b_ehnvq$9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    b_zl_gf = new RegExp('[\\-\\.0-9' + b_ehnvq$9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    b_ve$snh = new RegExp('^' + b_ehnvq$9['source'] + b_zl_gf['source'] + '*(?::' + b_ehnvq$9['source'] + b_zl_gf['source'] + '*)?$'),
    b_zagmf_c = 0x0,
    b_ua428cp = 0x1,
    b_tqojk = 0x2,
    b_a8p4mc = 0x3,
    b_lifz_gm = 0x4,
    b_u4op = 0x5,
    b_c8upa4 = 0x6,
    b_a8c4gu = 0x7;b_p4ut62o['prototype'] = { 'parse': function (_glfz, es$rn5, j6uo2pt) {
    var p2auc4 = this['domBuilder'];p2auc4['startDocument'](), b_ot42u6p(es$rn5, es$rn5 = {}), b_wb7xd3(_glfz, es$rn5, j6uo2pt, p2auc4, this['errorHandler']), p2auc4['endDocument']();
  } }, b_ilfz['prototype'] = { 'setTagName': function (ligzf_d) {
    if (!b_ve$snh['test'](ligzf_d)) throw new Error('invalid tagName:' + ligzf_d);this['tagName'] = ligzf_d;
  }, 'add': function (n1v9qe, o2kj6t, z_idlgf) {
    if (!b_ve$snh['test'](n1v9qe)) throw new Error('invalid attribute:' + n1v9qe);this[this['length']++] = { 'qName': n1v9qe, 'value': o2kj6t, 'offset': z_idlgf };
  }, 'length': 0x0, 'getLocalName': function (c8fmg4a) {
    return this[c8fmg4a]['localName'];
  }, 'getLocator': function (sr5$ev) {
    return this[sr5$ev]['locator'];
  }, 'getQName': function (s$9evhn) {
    return this[s$9evhn]['qName'];
  }, 'getURI': function (bi0w3dl) {
    return this[bi0w3dl]['uri'];
  }, 'getValue': function (uc8m4a) {
    return this[uc8m4a]['value'];
  } }, b_q1y9ok({}, b_q1y9ok['prototype']) instanceof b_q1y9ok || (b_q1y9ok = function (n9hes$, _8amcfg) {
  function o6pt2ju() {}for (_8amcfg in o6pt2ju['prototype'] = _8amcfg, o6pt2ju = new o6pt2ju(), n9hes$) o6pt2ju[_8amcfg] = n9hes$[_8amcfg];return o6pt2ju;
}), exports['XMLReader'] = b_p4ut62o;