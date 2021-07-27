var p = wx.$h;
function a_w_$() {}function a_qlpm(y10_, ilhkjm, xyvtw, gfied, xvywt) {
  function opnqrm(hlijkm) {
    var lmjonk = hlijkm['slice'](0x1, -0x1);return lmjonk in xyvtw ? xyvtw[lmjonk] : '#' === lmjonk['charAt'](0x0) ? 0xffff < (lmjonk = parseInt(lmjonk['substr'](0x1)['replace']('x', '0x'))) ? (lmjonk -= 0x10000, String['fromCharCode'](0xd800 + (lmjonk >> 0xa), 0xdc00 + (0x3ff & lmjonk))) : String['fromCharCode'](lmjonk) : (xvywt['error']('entity not found:' + hlijkm), hlijkm);
  }function rqvt(rtxwvs) {
    var omrq;xyvst < rtxwvs && (omrq = y10_['substring'](xyvst, rtxwvs)['replace'](/&#?\w+;/g, opnqrm), rsvqpt && kmhjil(xyvst), gfied['characters'](omrq, 0x0, rtxwvs - xyvst), xyvst = rtxwvs);
  }function kmhjil(hcdgfe, gijf) {
    for (; wvxzt <= hcdgfe && (gijf = kljhim['exec'](y10_));) egcf = gijf['index'], wvxzt = egcf + gijf[0x0]['length'], rsvqpt['lineNumber']++;rsvqpt['columnNumber'] = hcdgfe - egcf + 0x1;
  }for (var egcf = 0x0, wvxzt = 0x0, kljhim = /.*(?:\r\n?|\n)|.*$/g, rsvqpt = gfied['locator'], _z0$2 = [{ 'currentNSMap': ilhkjm }], _2z1$ = {}, xyvst = 0x0;;) {
    try {
      var pstr = y10_['indexOf']('<', xyvst),
          fihk,
          strq;if (pstr < 0x0) return void (y10_['substr'](xyvst)['match'](/^\s*$/) || (strq = (fihk = gfied['doc'])['createTextNode'](y10_['substr'](xyvst)), fihk['appendChild'](strq), gfied['currentElement'] = strq));switch (xyvst < pstr && rqvt(pstr), y10_['charAt'](pstr + 0x1)) {case '/':
          var pnkmo = y10_['indexOf']('>', pstr + 0x3),
              kgfij = y10_['substring'](pstr + 0x2, pnkmo),
              gchd = _z0$2['pop']();pnkmo < 0x0 ? (kgfij = y10_['substring'](pstr + 0x2)['replace'](/[\s<].*/, ''), xvywt['error']('end tag name: ' + kgfij + ' is not complete:' + gchd['tagName']), pnkmo = pstr + 0x1 + kgfij['length']) : kgfij['match'](/\s</) && (kgfij = kgfij['replace'](/[\s<].*/, ''), xvywt['error']('end tag name: ' + kgfij + ' maybe not complete'), pnkmo = pstr + 0x1 + kgfij['length']);var lpkomn = gchd['localNSMap'],
              rqswt = gchd['tagName'] == kgfij;if (rqswt || gchd['tagName'] && gchd['tagName']['toLowerCase']() == kgfij['toLowerCase']()) {
            if (gfied['endElement'](gchd['uri'], gchd['localName'], kgfij), lpkomn) {
              for (var kmjnli in lpkomn) gfied['endPrefixMapping'](kmjnli);
            }rqswt || xvywt['fatalError']('end tag name: ' + kgfij + ' is not match the current start tagName:' + gchd['tagName']);
          } else _z0$2['push'](gchd);pnkmo++;break;case '?':
          rsvqpt && kmhjil(pstr), pnkmo = a_jkhim(y10_, pstr, gfied);break;case '!':
          rsvqpt && kmhjil(pstr), pnkmo = a_rvtqw(y10_, pstr, gfied, xvywt);break;default:
          rsvqpt && kmhjil(pstr);var x$wzy = new a_lgihk(),
              $_13 = _z0$2[_z0$2['length'] - 0x1]['currentNSMap'],
              pnkmo = a_qrvwt(y10_, pstr, x$wzy, $_13, opnqrm, xvywt),
              sot = x$wzy['length'];if (!x$wzy['closed'] && a_osnqp(y10_, pnkmo, x$wzy['tagName'], _2z1$) && (x$wzy['closed'] = !0x0, xyvtw['nbsp'] || xvywt['warning']('unclosed xml attribute')), rsvqpt && sot) {
            for (var hlgjki = a_nkjlmo(rsvqpt, {}), dcgfe = 0x0; dcgfe < sot; dcgfe++) {
              var gecdh = x$wzy[dcgfe];kmhjil(gecdh['offset']), gecdh['locator'] = a_nkjlmo(rsvqpt, {});
            }gfied['locator'] = hlgjki, a_rtsoqp(x$wzy, gfied, $_13) && _z0$2['push'](x$wzy), gfied['locator'] = rsvqpt;
          } else a_rtsoqp(x$wzy, gfied, $_13) && _z0$2['push'](x$wzy);'http://www.w3.org/1999/xhtml' !== x$wzy['uri'] || x$wzy['closed'] ? pnkmo++ : pnkmo = a_iljhgk(y10_, pnkmo, x$wzy['tagName'], opnqrm, gfied);}
    } catch (gihlj) {
      xvywt['error']('element parse error: ' + gihlj), pnkmo = -0x1;
    }xyvst < pnkmo ? xyvst = pnkmo : rqvt(Math['max'](pstr, xyvst) + 0x1);
  }
}function a_nkjlmo(gljk, opnkml) {
  return opnkml['lineNumber'] = gljk['lineNumber'], opnkml['columnNumber'] = gljk['columnNumber'], opnkml;
}function a_qrvwt(w$z_yx, sv, z2$_0, gikfh, klmop, mlokjn) {
  for (var morqpn, gkjlih = ++sv, vqrpt = a_stvqp;;) {
    var fcehd = w$z_yx['charAt'](gkjlih);switch (fcehd) {case '=':
        if (vqrpt === a_ijkl) morqpn = w$z_yx['slice'](sv, gkjlih), vqrpt = a_qolmp;else {
          if (vqrpt !== a_ilkm) throw new Error('attribute equal must after attrName');vqrpt = a_qolmp;
        }break;case '\x27':case '\x22':
        if (vqrpt === a_qolmp || vqrpt === a_ijkl) {
          if (vqrpt === a_ijkl && (mlokjn['warning']('attribute value must after "="'), morqpn = w$z_yx['slice'](sv, gkjlih)), !(0x0 < (gkjlih = w$z_yx['indexOf'](fcehd, sv = gkjlih + 0x1)))) throw new Error('attribute value no end \'' + fcehd + '\' match');pqmron = w$z_yx['slice'](sv, gkjlih)['replace'](/&#?\w+;/g, klmop), z2$_0['add'](morqpn, pqmron, sv - 0x1), vqrpt = a_vyxzw;
        } else {
          if (vqrpt != a_fdbaec) throw new Error('attribute value must after "="');pqmron = w$z_yx['slice'](sv, gkjlih)['replace'](/&#?\w+;/g, klmop), z2$_0['add'](morqpn, pqmron, sv), mlokjn['warning']('attribute "' + morqpn + '" missed start quot(' + fcehd + ')!!'), sv = gkjlih + 0x1, vqrpt = a_vyxzw;
        }break;case '/':
        switch (vqrpt) {case a_stvqp:
            z2$_0['setTagName'](w$z_yx['slice'](sv, gkjlih));case a_vyxzw:case a_ghfdei:case a_ifjge:
            vqrpt = a_ifjge, z2$_0['closed'] = !0x0;case a_fdbaec:case a_ijkl:case a_ilkm:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mlokjn['error']('unexpected end of input'), vqrpt == a_stvqp && z2$_0['setTagName'](w$z_yx['slice'](sv, gkjlih)), gkjlih;case '>':
        switch (vqrpt) {case a_stvqp:
            z2$_0['setTagName'](w$z_yx['slice'](sv, gkjlih));case a_vyxzw:case a_ghfdei:case a_ifjge:
            break;case a_fdbaec:case a_ijkl:
            '/' === (pqmron = w$z_yx['slice'](sv, gkjlih))['slice'](-0x1) && (z2$_0['closed'] = !0x0, pqmron = pqmron['slice'](0x0, -0x1));case a_ilkm:
            vqrpt === a_ilkm && (pqmron = morqpn), vqrpt == a_fdbaec ? (mlokjn['warning']('attribute "' + pqmron + '" missed quot(")!!'), z2$_0['add'](morqpn, pqmron['replace'](/&#?\w+;/g, klmop), sv)) : ('http://www.w3.org/1999/xhtml' === gikfh[''] && pqmron['match'](/^(?:disabled|checked|selected)$/i) || mlokjn['warning']('attribute "' + pqmron + '" missed value!! "' + pqmron + '" instead!!'), z2$_0['add'](pqmron, pqmron, sv));break;case a_qolmp:
            throw new Error('attribute value missed!!');}return gkjlih;case '\u0080':
        fcehd = '\x20';default:
        if (fcehd <= '\x20') switch (vqrpt) {case a_stvqp:
            z2$_0['setTagName'](w$z_yx['slice'](sv, gkjlih)), vqrpt = a_ghfdei;break;case a_ijkl:
            morqpn = w$z_yx['slice'](sv, gkjlih), vqrpt = a_ilkm;break;case a_fdbaec:
            var pqmron = w$z_yx['slice'](sv, gkjlih)['replace'](/&#?\w+;/g, klmop);mlokjn['warning']('attribute "' + pqmron + '" missed quot(")!!'), z2$_0['add'](morqpn, pqmron, sv);case a_vyxzw:
            vqrpt = a_ghfdei;} else switch (vqrpt) {case a_ilkm:
            z2$_0['tagName'], 'http://www.w3.org/1999/xhtml' === gikfh[''] && morqpn['match'](/^(?:disabled|checked|selected)$/i) || mlokjn['warning']('attribute "' + morqpn + '" missed value!! "' + morqpn + '" instead2!!'), z2$_0['add'](morqpn, morqpn, sv), sv = gkjlih, vqrpt = a_ijkl;break;case a_vyxzw:
            mlokjn['warning']('attribute space is required"' + morqpn + '\x22!!');case a_ghfdei:
            vqrpt = a_ijkl, sv = gkjlih;break;case a_qolmp:
            vqrpt = a_fdbaec, sv = gkjlih;break;case a_ifjge:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gkjlih++;
  }
}function a_rtsoqp(onmkj, lihmjk, trpq) {
  for (var xwtvs = onmkj['tagName'], hgejf = null, plnq = onmkj['length']; plnq--;) {
    var _013$2 = onmkj[plnq],
        ljknim = _013$2['qName'],
        _3204 = _013$2['value'],
        qropm;ljknim = 0x0 < (sporn = ljknim['indexOf'](':')) ? ($zyx_0 = _013$2['prefix'] = ljknim['slice'](0x0, sporn), qropm = ljknim['slice'](sporn + 0x1), 'xmlns' === $zyx_0 && qropm) : ($zyx_0 = null, 'xmlns' === (qropm = ljknim) && ''), _013$2['localName'] = qropm, !0x1 !== ljknim && (null == hgejf && (hgejf = {}, a_igjhk(trpq, trpq = {})), trpq[ljknim] = hgejf[ljknim] = _3204, _013$2['uri'] = 'http://www.w3.org/2000/xmlns/', lihmjk['startPrefixMapping'](ljknim, _3204));
  }for (plnq = onmkj['length']; plnq--;) ($zyx_0 = (_013$2 = onmkj[plnq])['prefix']) && ('xml' === $zyx_0 && (_013$2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $zyx_0 && (_013$2['uri'] = trpq[$zyx_0 || '']));var sporn;qropm = 0x0 < (sporn = xwtvs['indexOf'](':')) ? ($zyx_0 = onmkj['prefix'] = xwtvs['slice'](0x0, sporn), onmkj['localName'] = xwtvs['slice'](sporn + 0x1)) : ($zyx_0 = null, onmkj['localName'] = xwtvs);var z10_2$ = onmkj['uri'] = trpq[$zyx_0 || ''];if (lihmjk['startElement'](z10_2$, qropm, xwtvs, onmkj), !onmkj['closed']) return onmkj['currentNSMap'] = trpq, onmkj['localNSMap'] = hgejf, !0x0;if (lihmjk['endElement'](z10_2$, qropm, xwtvs), hgejf) {
    for (var $zyx_0 in hgejf) lihmjk['endPrefixMapping']($zyx_0);
  }
}function a_iljhgk(_1z0$, $1_y, jfgeh, mpoqrn, stprvq) {
  if (/^(?:script|textarea)$/i['test'](jfgeh)) {
    var kjomn = _1z0$['indexOf']('</' + jfgeh + '>', $1_y),
        _1z0$ = _1z0$['substring']($1_y + 0x1, kjomn);if (/[&<]/['test'](_1z0$)) return (/^script$/i['test'](jfgeh) || (_1z0$ = _1z0$['replace'](/&#?\w+;/g, mpoqrn)), stprvq['characters'](_1z0$, 0x0, _1z0$['length']), kjomn
    );
  }return $1_y + 0x1;
}function a_osnqp(okmjln, spnqo, $yw, zxtywv) {
  var dcegbf = zxtywv[$yw];return null == dcegbf && ((dcegbf = okmjln['lastIndexOf']('</' + $yw + '>')) < spnqo && (dcegbf = okmjln['lastIndexOf']('</' + $yw)), zxtywv[$yw] = dcegbf), dcegbf < spnqo;
}function a_igjhk(klpm, fgeh) {
  for (var jefhgi in klpm) fgeh[jefhgi] = klpm[jefhgi];
}function a_rvtqw(vy$xzw, qtswr, opmk, twrq) {
  var nolpmk = vy$xzw['charAt'](qtswr + 0x2);if ('-' === nolpmk) return '-' !== vy$xzw['charAt'](qtswr + 0x3) ? -0x1 : qtswr < (lmkjno = vy$xzw['indexOf']('-->', qtswr + 0x4)) ? (opmk['comment'](vy$xzw, qtswr + 0x4, lmkjno - qtswr - 0x4), lmkjno + 0x3) : (twrq['error']('Unclosed comment'), -0x1);if ('CDATA[' == vy$xzw['substr'](qtswr + 0x3, 0x6)) {
    var lmkjno = vy$xzw['indexOf'](']]>', qtswr + 0x9);return opmk['startCDATA'](), opmk['characters'](vy$xzw, qtswr + 0x9, lmkjno - qtswr - 0x9), opmk['endCDATA'](), lmkjno + 0x3;
  }nolpmk = a_cfdae(vy$xzw, qtswr), twrq = nolpmk['length'];if (0x1 < twrq && /!doctype/i['test'](nolpmk[0x0][0x0])) return lmkjno = nolpmk[0x1][0x0], vy$xzw = 0x3 < twrq && /^public$/i['test'](nolpmk[0x2][0x0]) && nolpmk[0x3][0x0], qtswr = 0x4 < twrq && nolpmk[0x4][0x0], twrq = nolpmk[twrq - 0x1], (opmk['startDTD'](lmkjno, vy$xzw && vy$xzw['replace'](/^(['"])(.*?)\1$/, '$2'), qtswr && qtswr['replace'](/^(['"])(.*?)\1$/, '$2')), opmk['endDTD'](), twrq['index'] + twrq[0x0]['length']);return -0x1;
}function a_jkhim(x0y_$z, twqsv, xsytvw) {
  var klpom = x0y_$z['indexOf']('?>', twqsv);if (klpom) return twqsv = x0y_$z['substring'](twqsv, klpom)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), twqsv ? (twqsv[0x0]['length'], xsytvw['processingInstruction'](twqsv[0x1], twqsv[0x2]), klpom + 0x2) : -0x1;return -0x1;
}function a_lgihk() {}function a_jmiknl(vtxwsr, ch) {
  return vtxwsr['__proto__'] = ch, vtxwsr;
}function a_cfdae(rptvq, vwyst) {
  var njlk,
      lomj = [],
      zx_y0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zx_y0['lastIndex'] = vwyst, zx_y0['exec'](rptvq); njlk = zx_y0['exec'](rptvq);) if (lomj['push'](njlk), njlk[0x1]) return lomj;
}var a_zvy$w = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_qpos = new RegExp('[\\-\\.0-9' + a_zvy$w['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_xyz$vw = new RegExp('^' + a_zvy$w['source'] + a_qpos['source'] + '*(?::' + a_zvy$w['source'] + a_qpos['source'] + '*)?$'),
    a_stvqp = 0x0,
    a_ijkl = 0x1,
    a_ilkm = 0x2,
    a_qolmp = 0x3,
    a_fdbaec = 0x4,
    a_vyxzw = 0x5,
    a_ghfdei = 0x6,
    a_ifjge = 0x7;a_w_$['prototype'] = { 'parse': function (nmlqp, sxtwrv, gjik) {
    var higjlk = this['domBuilder'];higjlk['startDocument'](), a_igjhk(sxtwrv, sxtwrv = {}), a_qlpm(nmlqp, sxtwrv, gjik, higjlk, this['errorHandler']), higjlk['endDocument']();
  } }, a_lgihk['prototype'] = { 'setTagName': function (lhijm) {
    if (!a_xyz$vw['test'](lhijm)) throw new Error('invalid tagName:' + lhijm);this['tagName'] = lhijm;
  }, 'add': function (_$1320, dgb, twvxsy) {
    if (!a_xyz$vw['test'](_$1320)) throw new Error('invalid attribute:' + _$1320);this[this['length']++] = { 'qName': _$1320, 'value': dgb, 'offset': twvxsy };
  }, 'length': 0x0, 'getLocalName': function (svwyxt) {
    return this[svwyxt]['localName'];
  }, 'getLocator': function (chfde) {
    return this[chfde]['locator'];
  }, 'getQName': function (fdceh) {
    return this[fdceh]['qName'];
  }, 'getURI': function (hejifg) {
    return this[hejifg]['uri'];
  }, 'getValue': function (qormp) {
    return this[qormp]['value'];
  } }, a_jmiknl({}, a_jmiknl['prototype']) instanceof a_jmiknl || (a_jmiknl = function (dhcgef, cfhdeg) {
  function nmpkl() {}for (cfhdeg in nmpkl['prototype'] = cfhdeg, nmpkl = new nmpkl(), dhcgef) nmpkl[cfhdeg] = dhcgef[cfhdeg];return nmpkl;
}), exports['XMLReader'] = a_w_$;