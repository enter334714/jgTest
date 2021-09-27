var _ = wx.y$;
function _dsotq() {}function _dompnr(uvwtxs, xvw$z, hedfi, sutvwr, ihkjm) {
  function tvuswr(kpom) {
    var xwtsv = kpom['slice'](0x1, -0x1);return xwtsv in hedfi ? hedfi[xwtsv] : '#' === xwtsv['charAt'](0x0) ? 0xffff < (xwtsv = parseInt(xwtsv['substr'](0x1)['replace']('x', '0x'))) ? (xwtsv -= 0x10000, String['fromCharCode'](0xd800 + (xwtsv >> 0xa), 0xdc00 + (0x3ff & xwtsv))) : String['fromCharCode'](xwtsv) : (ihkjm['error']('entity not found:' + kpom), kpom);
  }function ikgljh(fgdb) {
    var lponm;hgef < fgdb && (lponm = uvwtxs['substring'](hgef, fgdb)['replace'](/&#?\w+;/g, tvuswr), joknlm && z1_$0y(hgef), sutvwr['characters'](lponm, 0x0, fgdb - hgef), hgef = fgdb);
  }function z1_$0y(wyv, ifjhgk) {
    for (; $0z_x <= wyv && (ifjhgk = gjlk['exec'](uvwtxs));) monrqp = ifjhgk['index'], $0z_x = monrqp + ifjhgk[0x0]['length'], joknlm['lineNumber']++;joknlm['columnNumber'] = wyv - monrqp + 0x1;
  }for (var monrqp = 0x0, $0z_x = 0x0, gjlk = /.*(?:\r\n?|\n)|.*$/g, joknlm = sutvwr['locator'], mlqpn = [{ 'currentNSMap': xvw$z }], omlqnp = {}, hgef = 0x0;;) {
    try {
      var qmonl = uvwtxs['indexOf']('<', hgef),
          uxwt,
          hfkjg;if (qmonl < 0x0) return void (uvwtxs['substr'](hgef)['match'](/^\s*$/) || (hfkjg = (uxwt = sutvwr['doc'])['createTextNode'](uvwtxs['substr'](hgef)), uxwt['appendChild'](hfkjg), sutvwr['currentElement'] = hfkjg));switch (hgef < qmonl && ikgljh(qmonl), uvwtxs['charAt'](qmonl + 0x1)) {case '/':
          var moqpln = uvwtxs['indexOf']('>', qmonl + 0x3),
              zvy$ = uvwtxs['substring'](qmonl + 0x2, moqpln),
              kjgf = mlqpn['pop']();moqpln < 0x0 ? (zvy$ = uvwtxs['substring'](qmonl + 0x2)['replace'](/[\s<].*/, ''), ihkjm['error']('end tag name: ' + zvy$ + ' is not complete:' + kjgf['tagName']), moqpln = qmonl + 0x1 + zvy$['length']) : zvy$['match'](/\s</) && (zvy$ = zvy$['replace'](/[\s<].*/, ''), ihkjm['error']('end tag name: ' + zvy$ + ' maybe not complete'), moqpln = qmonl + 0x1 + zvy$['length']);var twvxy = kjgf['localNSMap'],
              rqsn = kjgf['tagName'] == zvy$;if (rqsn || kjgf['tagName'] && kjgf['tagName']['toLowerCase']() == zvy$['toLowerCase']()) {
            if (sutvwr['endElement'](kjgf['uri'], kjgf['localName'], zvy$), twvxy) {
              for (var ptqrso in twvxy) sutvwr['endPrefixMapping'](ptqrso);
            }rqsn || ihkjm['fatalError']('end tag name: ' + zvy$ + ' is not match the current start tagName:' + kjgf['tagName']);
          } else mlqpn['push'](kjgf);moqpln++;break;case '?':
          joknlm && z1_$0y(qmonl), moqpln = _duyv(uvwtxs, qmonl, sutvwr);break;case '!':
          joknlm && z1_$0y(qmonl), moqpln = _dmornqp(uvwtxs, qmonl, sutvwr, ihkjm);break;default:
          joknlm && z1_$0y(qmonl);var ojknlm = new _d_x$wyz(),
              rqnpm = mlqpn[mlqpn['length'] - 0x1]['currentNSMap'],
              moqpln = _dprnosq(uvwtxs, qmonl, ojknlm, rqnpm, tvuswr, ihkjm),
              fejihg = ojknlm['length'];if (!ojknlm['closed'] && _dsur(uvwtxs, moqpln, ojknlm['tagName'], omlqnp) && (ojknlm['closed'] = !0x0, hedfi['nbsp'] || ihkjm['warning']('unclosed xml attribute')), joknlm && fejihg) {
            for (var uswvxt = _dsquvtr(joknlm, {}), dfgceh = 0x0; dfgceh < fejihg; dfgceh++) {
              var dbea = ojknlm[dfgceh];z1_$0y(dbea['offset']), dbea['locator'] = _dsquvtr(joknlm, {});
            }sutvwr['locator'] = uswvxt, _dpqrtos(ojknlm, sutvwr, rqnpm) && mlqpn['push'](ojknlm), sutvwr['locator'] = joknlm;
          } else _dpqrtos(ojknlm, sutvwr, rqnpm) && mlqpn['push'](ojknlm);'http://www.w3.org/1999/xhtml' !== ojknlm['uri'] || ojknlm['closed'] ? moqpln++ : moqpln = _dopsrqn(uvwtxs, moqpln, ojknlm['tagName'], tvuswr, sutvwr);}
    } catch (wyvx) {
      ihkjm['error']('element parse error: ' + wyvx), moqpln = -0x1;
    }hgef < moqpln ? hgef = moqpln : ikgljh(Math['max'](qmonl, hgef) + 0x1);
  }
}function _dsquvtr(svwtu, zyvxwu) {
  return zyvxwu['lineNumber'] = svwtu['lineNumber'], zyvxwu['columnNumber'] = svwtu['columnNumber'], zyvxwu;
}function _dprnosq(no, psnqo, ljo, rvustw, qrtvus, z10_2$) {
  for (var $z01y, nkijlm = ++psnqo, kminl = _dgfhd;;) {
    var ilgjh = no['charAt'](nkijlm);switch (ilgjh) {case '=':
        if (kminl === _dtrpusq) $z01y = no['slice'](psnqo, nkijlm), kminl = _dbcegd;else {
          if (kminl !== _dstpuq) throw new Error('attribute equal must after attrName');kminl = _dbcegd;
        }break;case '\x27':case '\x22':
        if (kminl === _dbcegd || kminl === _dtrpusq) {
          if (kminl === _dtrpusq && (z10_2$['warning']('attribute value must after "="'), $z01y = no['slice'](psnqo, nkijlm)), !(0x0 < (nkijlm = no['indexOf'](ilgjh, psnqo = nkijlm + 0x1)))) throw new Error('attribute value no end \'' + ilgjh + '\' match');vxzuyw = no['slice'](psnqo, nkijlm)['replace'](/&#?\w+;/g, qrtvus), ljo['add']($z01y, vxzuyw, psnqo - 0x1), kminl = _dcefbdg;
        } else {
          if (kminl != _dtorps) throw new Error('attribute value must after "="');vxzuyw = no['slice'](psnqo, nkijlm)['replace'](/&#?\w+;/g, qrtvus), ljo['add']($z01y, vxzuyw, psnqo), z10_2$['warning']('attribute "' + $z01y + '" missed start quot(' + ilgjh + ')!!'), psnqo = nkijlm + 0x1, kminl = _dcefbdg;
        }break;case '/':
        switch (kminl) {case _dgfhd:
            ljo['setTagName'](no['slice'](psnqo, nkijlm));case _dcefbdg:case _dnorqpm:case _ddfcb:
            kminl = _ddfcb, ljo['closed'] = !0x0;case _dtorps:case _dtrpusq:case _dstpuq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z10_2$['error']('unexpected end of input'), kminl == _dgfhd && ljo['setTagName'](no['slice'](psnqo, nkijlm)), nkijlm;case '>':
        switch (kminl) {case _dgfhd:
            ljo['setTagName'](no['slice'](psnqo, nkijlm));case _dcefbdg:case _dnorqpm:case _ddfcb:
            break;case _dtorps:case _dtrpusq:
            '/' === (vxzuyw = no['slice'](psnqo, nkijlm))['slice'](-0x1) && (ljo['closed'] = !0x0, vxzuyw = vxzuyw['slice'](0x0, -0x1));case _dstpuq:
            kminl === _dstpuq && (vxzuyw = $z01y), kminl == _dtorps ? (z10_2$['warning']('attribute "' + vxzuyw + '" missed quot(")!!'), ljo['add']($z01y, vxzuyw['replace'](/&#?\w+;/g, qrtvus), psnqo)) : ('http://www.w3.org/1999/xhtml' === rvustw[''] && vxzuyw['match'](/^(?:disabled|checked|selected)$/i) || z10_2$['warning']('attribute "' + vxzuyw + '" missed value!! "' + vxzuyw + '" instead!!'), ljo['add'](vxzuyw, vxzuyw, psnqo));break;case _dbcegd:
            throw new Error('attribute value missed!!');}return nkijlm;case '\u0080':
        ilgjh = '\x20';default:
        if (ilgjh <= '\x20') switch (kminl) {case _dgfhd:
            ljo['setTagName'](no['slice'](psnqo, nkijlm)), kminl = _dnorqpm;break;case _dtrpusq:
            $z01y = no['slice'](psnqo, nkijlm), kminl = _dstpuq;break;case _dtorps:
            var vxzuyw = no['slice'](psnqo, nkijlm)['replace'](/&#?\w+;/g, qrtvus);z10_2$['warning']('attribute "' + vxzuyw + '" missed quot(")!!'), ljo['add']($z01y, vxzuyw, psnqo);case _dcefbdg:
            kminl = _dnorqpm;} else switch (kminl) {case _dstpuq:
            ljo['tagName'], 'http://www.w3.org/1999/xhtml' === rvustw[''] && $z01y['match'](/^(?:disabled|checked|selected)$/i) || z10_2$['warning']('attribute "' + $z01y + '" missed value!! "' + $z01y + '" instead2!!'), ljo['add']($z01y, $z01y, psnqo), psnqo = nkijlm, kminl = _dtrpusq;break;case _dcefbdg:
            z10_2$['warning']('attribute space is required"' + $z01y + '\x22!!');case _dnorqpm:
            kminl = _dtrpusq, psnqo = nkijlm;break;case _dbcegd:
            kminl = _dtorps, psnqo = nkijlm;break;case _ddfcb:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nkijlm++;
  }
}function _dpqrtos(tsvuqr, _10z2, $zyvx) {
  for (var hfcg = tsvuqr['tagName'], ytvxw = null, _y$xw = tsvuqr['length']; _y$xw--;) {
    var potqs = tsvuqr[_y$xw],
        efdbca = potqs['qName'],
        lpno = potqs['value'],
        klojn;efdbca = 0x0 < (kjghl = efdbca['indexOf'](':')) ? (jheif = potqs['prefix'] = efdbca['slice'](0x0, kjghl), klojn = efdbca['slice'](kjghl + 0x1), 'xmlns' === jheif && klojn) : (jheif = null, 'xmlns' === (klojn = efdbca) && ''), potqs['localName'] = klojn, !0x1 !== efdbca && (null == ytvxw && (ytvxw = {}, _dpsoqnr($zyvx, $zyvx = {})), $zyvx[efdbca] = ytvxw[efdbca] = lpno, potqs['uri'] = 'http://www.w3.org/2000/xmlns/', _10z2['startPrefixMapping'](efdbca, lpno));
  }for (_y$xw = tsvuqr['length']; _y$xw--;) (jheif = (potqs = tsvuqr[_y$xw])['prefix']) && ('xml' === jheif && (potqs['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jheif && (potqs['uri'] = $zyvx[jheif || '']));var kjghl;klojn = 0x0 < (kjghl = hfcg['indexOf'](':')) ? (jheif = tsvuqr['prefix'] = hfcg['slice'](0x0, kjghl), tsvuqr['localName'] = hfcg['slice'](kjghl + 0x1)) : (jheif = null, tsvuqr['localName'] = hfcg);var hgkli = tsvuqr['uri'] = $zyvx[jheif || ''];if (_10z2['startElement'](hgkli, klojn, hfcg, tsvuqr), !tsvuqr['closed']) return tsvuqr['currentNSMap'] = $zyvx, tsvuqr['localNSMap'] = ytvxw, !0x0;if (_10z2['endElement'](hgkli, klojn, hfcg), ytvxw) {
    for (var jheif in ytvxw) _10z2['endPrefixMapping'](jheif);
  }
}function _dopsrqn(klnjmo, sxtvwu, xstv, vutwy, ghedcf) {
  if (/^(?:script|textarea)$/i['test'](xstv)) {
    var vqrtus = klnjmo['indexOf']('</' + xstv + '>', sxtvwu),
        klnjmo = klnjmo['substring'](sxtvwu + 0x1, vqrtus);if (/[&<]/['test'](klnjmo)) return (/^script$/i['test'](xstv) || (klnjmo = klnjmo['replace'](/&#?\w+;/g, vutwy)), ghedcf['characters'](klnjmo, 0x0, klnjmo['length']), vqrtus
    );
  }return sxtvwu + 0x1;
}function _dsur(hkfi, ehdfgc, beafd, ghkf) {
  var z$y0x_ = ghkf[beafd];return null == z$y0x_ && ((z$y0x_ = hkfi['lastIndexOf']('</' + beafd + '>')) < ehdfgc && (z$y0x_ = hkfi['lastIndexOf']('</' + beafd)), ghkf[beafd] = z$y0x_), z$y0x_ < ehdfgc;
}function _dpsoqnr(mnpqro, wstuvr) {
  for (var lkjhim in mnpqro) wstuvr[lkjhim] = mnpqro[lkjhim];
}function _dmornqp(swtv, vutqsr, klnmoj, nkpmol) {
  var onqrm = swtv['charAt'](vutqsr + 0x2);if ('-' === onqrm) return '-' !== swtv['charAt'](vutqsr + 0x3) ? -0x1 : vutqsr < (vtyxu = swtv['indexOf']('-->', vutqsr + 0x4)) ? (klnmoj['comment'](swtv, vutqsr + 0x4, vtyxu - vutqsr - 0x4), vtyxu + 0x3) : (nkpmol['error']('Unclosed comment'), -0x1);if ('CDATA[' == swtv['substr'](vutqsr + 0x3, 0x6)) {
    var vtyxu = swtv['indexOf'](']]>', vutqsr + 0x9);return klnmoj['startCDATA'](), klnmoj['characters'](swtv, vutqsr + 0x9, vtyxu - vutqsr - 0x9), klnmoj['endCDATA'](), vtyxu + 0x3;
  }onqrm = _dnrsqpo(swtv, vutqsr), nkpmol = onqrm['length'];if (0x1 < nkpmol && /!doctype/i['test'](onqrm[0x0][0x0])) return vtyxu = onqrm[0x1][0x0], swtv = 0x3 < nkpmol && /^public$/i['test'](onqrm[0x2][0x0]) && onqrm[0x3][0x0], vutqsr = 0x4 < nkpmol && onqrm[0x4][0x0], nkpmol = onqrm[nkpmol - 0x1], (klnmoj['startDTD'](vtyxu, swtv && swtv['replace'](/^(['"])(.*?)\1$/, '$2'), vutqsr && vutqsr['replace'](/^(['"])(.*?)\1$/, '$2')), klnmoj['endDTD'](), nkpmol['index'] + nkpmol[0x0]['length']);return -0x1;
}function _duyv(fabdec, fgejh, rtsvq) {
  var jfhge = fabdec['indexOf']('?>', fgejh);if (jfhge) return fgejh = fabdec['substring'](fgejh, jfhge)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), fgejh ? (fgejh[0x0]['length'], rtsvq['processingInstruction'](fgejh[0x1], fgejh[0x2]), jfhge + 0x2) : -0x1;return -0x1;
}function _d_x$wyz() {}function _dlhijgk(hlkim, jnokml) {
  return hlkim['__proto__'] = jnokml, hlkim;
}function _dnrsqpo(hecgf, imhjl) {
  var nro,
      oprnsq = [],
      _y0z1$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_y0z1$['lastIndex'] = imhjl, _y0z1$['exec'](hecgf); nro = _y0z1$['exec'](hecgf);) if (oprnsq['push'](nro), nro[0x1]) return oprnsq;
}var _defac = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dljigkh = new RegExp('[\\-\\.0-9' + _defac['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dfidhe = new RegExp('^' + _defac['source'] + _dljigkh['source'] + '*(?::' + _defac['source'] + _dljigkh['source'] + '*)?$'),
    _dgfhd = 0x0,
    _dtrpusq = 0x1,
    _dstpuq = 0x2,
    _dbcegd = 0x3,
    _dtorps = 0x4,
    _dcefbdg = 0x5,
    _dnorqpm = 0x6,
    _ddfcb = 0x7;_dsotq['prototype'] = { 'parse': function (jifhkg, prons, fijgeh) {
    var poqt = this['domBuilder'];poqt['startDocument'](), _dpsoqnr(prons, prons = {}), _dompnr(jifhkg, prons, fijgeh, poqt, this['errorHandler']), poqt['endDocument']();
  } }, _d_x$wyz['prototype'] = { 'setTagName': function (hkglji) {
    if (!_dfidhe['test'](hkglji)) throw new Error('invalid tagName:' + hkglji);this['tagName'] = hkglji;
  }, 'add': function (gdhfi, $2_103, fdcb) {
    if (!_dfidhe['test'](gdhfi)) throw new Error('invalid attribute:' + gdhfi);this[this['length']++] = { 'qName': gdhfi, 'value': $2_103, 'offset': fdcb };
  }, 'length': 0x0, 'getLocalName': function (moqln) {
    return this[moqln]['localName'];
  }, 'getLocator': function (hfegj) {
    return this[hfegj]['locator'];
  }, 'getQName': function (fhegd) {
    return this[fhegd]['qName'];
  }, 'getURI': function (mjolkn) {
    return this[mjolkn]['uri'];
  }, 'getValue': function (zy_x$) {
    return this[zy_x$]['value'];
  } }, _dlhijgk({}, _dlhijgk['prototype']) instanceof _dlhijgk || (_dlhijgk = function (ljmni, urvw) {
  function pnqs() {}for (urvw in pnqs['prototype'] = urvw, pnqs = new pnqs(), ljmni) pnqs[urvw] = ljmni[urvw];return pnqs;
}), exports['XMLReader'] = _dsotq;