var i = wx.$R;
function r_b_u$a() {}function r_jik(stx3, ts3z, c65fnd, megwr, cf56nd) {
  function u1$a9(edqnpf) {
    if (edqnpf > 0xffff) {
      edqnpf -= 0x10000;var yojix8 = 0xd800 + (edqnpf >> 0xa),
          uhc_6 = 0xdc00 + (0x3ff & edqnpf);return String['fromCharCode'](yojix8, uhc_6);
    }return String['fromCharCode'](edqnpf);
  }function kwm78(owym) {
    var auh_6 = owym['slice'](0x1, -0x1);return auh_6 in c65fnd ? c65fnd[auh_6] : '#' === auh_6['charAt'](0x0) ? u1$a9(parseInt(auh_6['substr'](0x1)['replace']('x', '0x'))) : (cf56nd['error']('entity not found:' + owym), owym);
  }function k8yiwo(t2s3zl) {
    if (t2s3zl > efgdqp) {
      var ky8wio = stx3['substring'](efgdqp, t2s3zl)['replace'](/&#?\w+;/g, kwm78);xoi2jz && n_5hc6(efgdqp), megwr['characters'](ky8wio, 0x0, t2s3zl - efgdqp), efgdqp = t2s3zl;
    }
  }function n_5hc6(yojik8, au1b) {
    for (; yojik8 >= zlt && (au1b = sjx2zi['exec'](stx3));) nf65h = au1b['index'], zlt = nf65h + au1b[0x0]['length'], xoi2jz['lineNumber']++;xoi2jz['columnNumber'] = yojik8 - nf65h + 0x1;
  }for (var nf65h = 0x0, zlt = 0x0, sjx2zi = /.*(?:\r\n?|\n)|.*$/g, xoi2jz = megwr['locator'], yoxi2 = [{ 'currentNSMap': ts3z }], gm7ew = {}, efgdqp = 0x0;;) {
    try {
      var $a_1u = stx3['indexOf']('<', efgdqp);if (0x0 > $a_1u) {
        if (!stx3['substr'](efgdqp)['match'](/^\s*$/)) {
          var fndc65 = megwr['doc'],
              cnp5fd = fndc65['createTextNode'](stx3['substr'](efgdqp));fndc65['appendChild'](cnp5fd), megwr['currentElement'] = cnp5fd;
        }return;
      }switch ($a_1u > efgdqp && k8yiwo($a_1u), stx3['charAt']($a_1u + 0x1)) {case '/':
          var em7 = stx3['indexOf']('>', $a_1u + 0x3),
              mow = stx3['substring']($a_1u + 0x2, em7),
              yo2ijx = yoxi2['pop']();0x0 > em7 ? (mow = stx3['substring']($a_1u + 0x2)['replace'](/[\s<].*/, ''), cf56nd['error']('end tag name: ' + mow + ' is not complete:' + yo2ijx['tagName']), em7 = $a_1u + 0x1 + mow['length']) : mow['match'](/\s</) && (mow = mow['replace'](/[\s<].*/, ''), cf56nd['error']('end tag name: ' + mow + ' maybe not complete'), em7 = $a_1u + 0x1 + mow['length']);var xzio2 = yo2ijx['localNSMap'],
              vlt3 = yo2ijx['tagName'] == mow,
              ts3vz = vlt3 || yo2ijx['tagName'] && yo2ijx['tagName']['toLowerCase']() == mow['toLowerCase']();if (ts3vz) {
            if (megwr['endElement'](yo2ijx['uri'], yo2ijx['localName'], mow), xzio2) {
              for (var qg7pde in xzio2) megwr['endPrefixMapping'](qg7pde);
            }vlt3 || cf56nd['fatalError']('end tag name: ' + mow + ' is not match the current start tagName:' + yo2ijx['tagName']);
          } else yoxi2['push'](yo2ijx);em7++;break;case '?':
          xoi2jz && n_5hc6($a_1u), em7 = r_iojy2x(stx3, $a_1u, megwr);break;case '!':
          xoi2jz && n_5hc6($a_1u), em7 = r_e7wmrg(stx3, $a_1u, megwr, cf56nd);break;default:
          xoi2jz && n_5hc6($a_1u);var yiox8 = new r_ywr8mk(),
              wykmo = yoxi2[yoxi2['length'] - 0x1]['currentNSMap'],
              em7 = r_fh5c6n(stx3, $a_1u, yiox8, wykmo, kwm78, cf56nd),
              cqnf = yiox8['length'];if (!yiox8['closed'] && r_ywkmo8(stx3, em7, yiox8['tagName'], gm7ew) && (yiox8['closed'] = !0x0, c65fnd['nbsp'] || cf56nd['warning']('unclosed xml attribute')), xoi2jz && cqnf) {
            for (var kmrw8 = r_nepdfq(xoi2jz, {}), nfdc = 0x0; cqnf > nfdc; nfdc++) {
              var r7qemg = yiox8[nfdc];n_5hc6(r7qemg['offset']), r7qemg['locator'] = r_nepdfq(xoi2jz, {});
            }megwr['locator'] = kmrw8, r_huba(yiox8, megwr, wykmo) && yoxi2['push'](yiox8), megwr['locator'] = xoi2jz;
          } else r_huba(yiox8, megwr, wykmo) && yoxi2['push'](yiox8);'http://www.w3.org/1999/xhtml' !== yiox8['uri'] || yiox8['closed'] ? em7++ : em7 = r_pgd7(stx3, em7, yiox8['tagName'], kwm78, megwr);}
    } catch (p5fndc) {
      cf56nd['error']('element parse error: ' + p5fndc), em7 = -0x1;
    }em7 > efgdqp ? efgdqp = em7 : k8yiwo(Math['max']($a_1u, efgdqp) + 0x1);
  }
}function r_nepdfq(rgpqe, nh_65c) {
  return nh_65c['lineNumber'] = rgpqe['lineNumber'], nh_65c['columnNumber'] = rgpqe['columnNumber'], nh_65c;
}function r_fh5c6n(a6h1, abu1$, jixyo2, pg7qe, haub, gmwr7e) {
  for (var pdgqef, s2xjiz, a4$9 = ++abu1$, wgre = r_qgpfe;;) {
    var dge7 = a6h1['charAt'](a4$9);switch (dge7) {case '=':
        if (wgre === r_auh61) pdgqef = a6h1['slice'](abu1$, a4$9), wgre = r_m8wyok;else {
          if (wgre !== r_mk8rw7) throw new Error('attribute equal must after attrName');wgre = r_m8wyok;
        }break;case '\x27':case '\x22':
        if (wgre === r_m8wyok || wgre === r_auh61) {
          if (wgre === r_auh61 && (gmwr7e['warning']('attribute value must after "="'), pdgqef = a6h1['slice'](abu1$, a4$9)), abu1$ = a4$9 + 0x1, a4$9 = a6h1['indexOf'](dge7, abu1$), !(a4$9 > 0x0)) throw new Error('attribute value no end \'' + dge7 + '\' match');s2xjiz = a6h1['slice'](abu1$, a4$9)['replace'](/&#?\w+;/g, haub), jixyo2['add'](pdgqef, s2xjiz, abu1$ - 0x1), wgre = r_tzl32s;
        } else {
          if (wgre != r_l03s) throw new Error('attribute value must after "="');s2xjiz = a6h1['slice'](abu1$, a4$9)['replace'](/&#?\w+;/g, haub), jixyo2['add'](pdgqef, s2xjiz, abu1$), gmwr7e['warning']('attribute "' + pdgqef + '" missed start quot(' + dge7 + ')!!'), abu1$ = a4$9 + 0x1, wgre = r_tzl32s;
        }break;case '/':
        switch (wgre) {case r_qgpfe:
            jixyo2['setTagName'](a6h1['slice'](abu1$, a4$9));case r_tzl32s:case r_mw8r7:case r_zsltv:
            wgre = r_zsltv, jixyo2['closed'] = !0x0;case r_l03s:case r_auh61:case r_mk8rw7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gmwr7e['error']('unexpected end of input'), wgre == r_qgpfe && jixyo2['setTagName'](a6h1['slice'](abu1$, a4$9)), a4$9;case '>':
        switch (wgre) {case r_qgpfe:
            jixyo2['setTagName'](a6h1['slice'](abu1$, a4$9));case r_tzl32s:case r_mw8r7:case r_zsltv:
            break;case r_l03s:case r_auh61:
            s2xjiz = a6h1['slice'](abu1$, a4$9), '/' === s2xjiz['slice'](-0x1) && (jixyo2['closed'] = !0x0, s2xjiz = s2xjiz['slice'](0x0, -0x1));case r_mk8rw7:
            wgre === r_mk8rw7 && (s2xjiz = pdgqef), wgre == r_l03s ? (gmwr7e['warning']('attribute "' + s2xjiz + '" missed quot(")!!'), jixyo2['add'](pdgqef, s2xjiz['replace'](/&#?\w+;/g, haub), abu1$)) : ('http://www.w3.org/1999/xhtml' === pg7qe[''] && s2xjiz['match'](/^(?:disabled|checked|selected)$/i) || gmwr7e['warning']('attribute "' + s2xjiz + '" missed value!! "' + s2xjiz + '" instead!!'), jixyo2['add'](s2xjiz, s2xjiz, abu1$));break;case r_m8wyok:
            throw new Error('attribute value missed!!');}return a4$9;case '\u0080':
        dge7 = '\x20';default:
        if ('\x20' >= dge7) switch (wgre) {case r_qgpfe:
            jixyo2['setTagName'](a6h1['slice'](abu1$, a4$9)), wgre = r_mw8r7;break;case r_auh61:
            pdgqef = a6h1['slice'](abu1$, a4$9), wgre = r_mk8rw7;break;case r_l03s:
            var s2xjiz = a6h1['slice'](abu1$, a4$9)['replace'](/&#?\w+;/g, haub);gmwr7e['warning']('attribute "' + s2xjiz + '" missed quot(")!!'), jixyo2['add'](pdgqef, s2xjiz, abu1$);case r_tzl32s:
            wgre = r_mw8r7;} else switch (wgre) {case r_mk8rw7:
            {
              jixyo2['tagName'];
            }'http://www.w3.org/1999/xhtml' === pg7qe[''] && pdgqef['match'](/^(?:disabled|checked|selected)$/i) || gmwr7e['warning']('attribute "' + pdgqef + '" missed value!! "' + pdgqef + '" instead2!!'), jixyo2['add'](pdgqef, pdgqef, abu1$), abu1$ = a4$9, wgre = r_auh61;break;case r_tzl32s:
            gmwr7e['warning']('attribute space is required"' + pdgqef + '\x22!!');case r_mw8r7:
            wgre = r_auh61, abu1$ = a4$9;break;case r_m8wyok:
            wgre = r_l03s, abu1$ = a4$9;break;case r_zsltv:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}a4$9++;
  }
}function r_huba(k8jiyo, qepnd, rgwme7) {
  for (var t0vs3 = k8jiyo['tagName'], tszlv = null, a_61uh = k8jiyo['length']; a_61uh--;) {
    var eqfgdp = k8jiyo[a_61uh],
        rqgm = eqfgdp['qName'],
        zsxjt2 = eqfgdp['value'],
        nqfcpd = rqgm['indexOf'](':');if (nqfcpd > 0x0) var ikoyj8 = eqfgdp['prefix'] = rqgm['slice'](0x0, nqfcpd),
        d7pqge = rqgm['slice'](nqfcpd + 0x1),
        qgp7er = 'xmlns' === ikoyj8 && d7pqge;else d7pqge = rqgm, ikoyj8 = null, qgp7er = 'xmlns' === rqgm && '';eqfgdp['localName'] = d7pqge, qgp7er !== !0x1 && (null == tszlv && (tszlv = {}, r_siz(rgwme7, rgwme7 = {})), rgwme7[qgp7er] = tszlv[qgp7er] = zsxjt2, eqfgdp['uri'] = 'http://www.w3.org/2000/xmlns/', qepnd['startPrefixMapping'](qgp7er, zsxjt2));
  }for (var a_61uh = k8jiyo['length']; a_61uh--;) {
    eqfgdp = k8jiyo[a_61uh];var ikoyj8 = eqfgdp['prefix'];ikoyj8 && ('xml' === ikoyj8 && (eqfgdp['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ikoyj8 && (eqfgdp['uri'] = rgwme7[ikoyj8 || '']));
  }var nqfcpd = t0vs3['indexOf'](':');nqfcpd > 0x0 ? (ikoyj8 = k8jiyo['prefix'] = t0vs3['slice'](0x0, nqfcpd), d7pqge = k8jiyo['localName'] = t0vs3['slice'](nqfcpd + 0x1)) : (ikoyj8 = null, d7pqge = k8jiyo['localName'] = t0vs3);var x2js = k8jiyo['uri'] = rgwme7[ikoyj8 || ''];if (qepnd['startElement'](x2js, d7pqge, t0vs3, k8jiyo), !k8jiyo['closed']) return k8jiyo['currentNSMap'] = rgwme7, k8jiyo['localNSMap'] = tszlv, !0x0;if (qepnd['endElement'](x2js, d7pqge, t0vs3), tszlv) {
    for (ikoyj8 in tszlv) qepnd['endPrefixMapping'](ikoyj8);
  }
}function r_pgd7(qd7, s32tz, grqe7m, zlst3v, e7mwrg) {
  if (/^(?:script|textarea)$/i['test'](grqe7m)) {
    var mkyrw = qd7['indexOf']('</' + grqe7m + '>', s32tz),
        f65hc = qd7['substring'](s32tz + 0x1, mkyrw);if (/[&<]/['test'](f65hc)) return (/^script$/i['test'](grqe7m) ? (e7mwrg['characters'](f65hc, 0x0, f65hc['length']), mkyrw) : (f65hc = f65hc['replace'](/&#?\w+;/g, zlst3v), e7mwrg['characters'](f65hc, 0x0, f65hc['length']), mkyrw)
    );
  }return s32tz + 0x1;
}function r_ywkmo8($b1_, pdnf, rmkyw8, pefqd) {
  var _6hc5 = pefqd[rmkyw8];return null == _6hc5 && (_6hc5 = $b1_['lastIndexOf']('</' + rmkyw8 + '>'), pdnf > _6hc5 && (_6hc5 = $b1_['lastIndexOf']('</' + rmkyw8)), pefqd[rmkyw8] = _6hc5), pdnf > _6hc5;
}function r_siz($uab1, pq7r) {
  for (var c56_u in $uab1) pq7r[c56_u] = $uab1[c56_u];
}function r_e7wmrg(ge7dqp, rem7wg, fdqpcn, qcndp) {
  var yw8i = ge7dqp['charAt'](rem7wg + 0x2);switch (yw8i) {case '-':
      if ('-' === ge7dqp['charAt'](rem7wg + 0x3)) {
        var rm7geq = ge7dqp['indexOf']('-->', rem7wg + 0x4);return rm7geq > rem7wg ? (fdqpcn['comment'](ge7dqp, rem7wg + 0x4, rm7geq - rem7wg - 0x4), rm7geq + 0x3) : (qcndp['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ge7dqp['substr'](rem7wg + 0x3, 0x6)) {
        var rm7geq = ge7dqp['indexOf'](']]>', rem7wg + 0x9);return fdqpcn['startCDATA'](), fdqpcn['characters'](ge7dqp, rem7wg + 0x9, rm7geq - rem7wg - 0x9), fdqpcn['endCDATA'](), rm7geq + 0x3;
      }var wmok = r_b1ah_(ge7dqp, rem7wg),
          b$9ua1 = wmok['length'];if (b$9ua1 > 0x1 && /!doctype/i['test'](wmok[0x0][0x0])) {
        var c5fn6 = wmok[0x1][0x0],
            s2txz3 = b$9ua1 > 0x3 && /^public$/i['test'](wmok[0x2][0x0]) && wmok[0x3][0x0],
            uh615_ = b$9ua1 > 0x4 && wmok[0x4][0x0],
            rmg7qe = wmok[b$9ua1 - 0x1];return fdqpcn['startDTD'](c5fn6, s2txz3 && s2txz3['replace'](/^(['"])(.*?)\1$/, '$2'), uh615_ && uh615_['replace'](/^(['"])(.*?)\1$/, '$2')), fdqpcn['endDTD'](), rmg7qe['index'] + rmg7qe[0x0]['length'];
      }}return -0x1;
}function r_iojy2x(ztxj2s, j2zi, jsxtz) {
  var zxs3 = ztxj2s['indexOf']('?>', j2zi);if (zxs3) {
    var l2z3s = ztxj2s['substring'](j2zi, zxs3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (l2z3s) {
      {
        l2z3s[0x0]['length'];
      }return jsxtz['processingInstruction'](l2z3s[0x1], l2z3s[0x2]), zxs3 + 0x2;
    }return -0x1;
  }return -0x1;
}function r_ywr8mk() {}function r_jok8i(l3vst, $9ua) {
  return l3vst['__proto__'] = $9ua, l3vst;
}function r_b1ah_(owmky8, qp7ge) {
  var oywmk,
      huba_ = [],
      oi8xjy = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (oi8xjy['lastIndex'] = qp7ge, oi8xjy['exec'](owmky8); oywmk = oi8xjy['exec'](owmky8);) if (huba_['push'](oywmk), oywmk[0x1]) return huba_;
}var r_au$b1_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r_m7wr8k = new RegExp('[\\-\\.0-9' + r_au$b1_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r_wm7eg = new RegExp('^' + r_au$b1_['source'] + r_m7wr8k['source'] + '*(?::' + r_au$b1_['source'] + r_m7wr8k['source'] + '*)?$'),
    r_qgpfe = 0x0,
    r_auh61 = 0x1,
    r_mk8rw7 = 0x2,
    r_m8wyok = 0x3,
    r_l03s = 0x4,
    r_tzl32s = 0x5,
    r_mw8r7 = 0x6,
    r_zsltv = 0x7;r_b_u$a['prototype'] = { 'parse': function (nc6df5, x2zoj, gr7p) {
    var _5u = this['domBuilder'];_5u['startDocument'](), r_siz(x2zoj, x2zoj = {}), r_jik(nc6df5, x2zoj, gr7p, _5u, this['errorHandler']), _5u['endDocument']();
  } }, r_ywr8mk['prototype'] = { 'setTagName': function (d6c) {
    if (!r_wm7eg['test'](d6c)) throw new Error('invalid tagName:' + d6c);this['tagName'] = d6c;
  }, 'add': function (wrkm87, uh5c6, zxj2s) {
    if (!r_wm7eg['test'](wrkm87)) throw new Error('invalid attribute:' + wrkm87);this[this['length']++] = { 'qName': wrkm87, 'value': uh5c6, 'offset': zxj2s };
  }, 'length': 0x0, 'getLocalName': function (jzt2sx) {
    return this[jzt2sx]['localName'];
  }, 'getLocator': function (rym8) {
    return this[rym8]['locator'];
  }, 'getQName': function (_b$a1) {
    return this[_b$a1]['qName'];
  }, 'getURI': function (z2ixs) {
    return this[z2ixs]['uri'];
  }, 'getValue': function (edp7) {
    return this[edp7]['value'];
  } }, r_jok8i({}, r_jok8i['prototype']) instanceof r_jok8i || (r_jok8i = function (ztsl, jyx8io) {
  function izjx2s() {}izjx2s['prototype'] = jyx8io, izjx2s = new izjx2s();for (jyx8io in ztsl) izjx2s[jyx8io] = ztsl[jyx8io];return izjx2s;
}), exports['XMLReader'] = r_b_u$a;