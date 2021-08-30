var _ = wx.y$;
function _dutrq() {}function _dhlimj(vsurwt, jikmhl, ecdbf, wyv$xz, nokp) {
  function rqsv(jkhfi) {
    var porqts = jkhfi['slice'](0x1, -0x1);return porqts in ecdbf ? ecdbf[porqts] : '#' === porqts['charAt'](0x0) ? 0xffff < (porqts = parseInt(porqts['substr'](0x1)['replace']('x', '0x'))) ? (porqts -= 0x10000, String['fromCharCode'](0xd800 + (porqts >> 0xa), 0xdc00 + (0x3ff & porqts))) : String['fromCharCode'](porqts) : (nokp['error']('entity not found:' + jkhfi), jkhfi);
  }function qotp(opqrm) {
    var x$vwyz;y_01$z < opqrm && (x$vwyz = vsurwt['substring'](y_01$z, opqrm)['replace'](/&#?\w+;/g, rqsv), qpsrto && trqpsu(y_01$z), wyv$xz['characters'](x$vwyz, 0x0, opqrm - y_01$z), y_01$z = opqrm);
  }function trqpsu(svxutw, tpqsor) {
    for (; dhgcf <= svxutw && (tpqsor = lnjmok['exec'](vsurwt));) wvyt = tpqsor['index'], dhgcf = wvyt + tpqsor[0x0]['length'], qpsrto['lineNumber']++;qpsrto['columnNumber'] = svxutw - wvyt + 0x1;
  }for (var wvyt = 0x0, dhgcf = 0x0, lnjmok = /.*(?:\r\n?|\n)|.*$/g, qpsrto = wyv$xz['locator'], wyuxvz = [{ 'currentNSMap': jikmhl }], xtvwu = {}, y_01$z = 0x0;;) {
    try {
      var fbca = vsurwt['indexOf']('<', y_01$z),
          mqpln,
          cfedbg;if (fbca < 0x0) return void (vsurwt['substr'](y_01$z)['match'](/^\s*$/) || (cfedbg = (mqpln = wyv$xz['doc'])['createTextNode'](vsurwt['substr'](y_01$z)), mqpln['appendChild'](cfedbg), wyv$xz['currentElement'] = cfedbg));switch (y_01$z < fbca && qotp(fbca), vsurwt['charAt'](fbca + 0x1)) {case '/':
          var jkifgh = vsurwt['indexOf']('>', fbca + 0x3),
              lpnqm = vsurwt['substring'](fbca + 0x2, jkifgh),
              igedhf = wyuxvz['pop']();jkifgh < 0x0 ? (lpnqm = vsurwt['substring'](fbca + 0x2)['replace'](/[\s<].*/, ''), nokp['error']('end tag name: ' + lpnqm + ' is not complete:' + igedhf['tagName']), jkifgh = fbca + 0x1 + lpnqm['length']) : lpnqm['match'](/\s</) && (lpnqm = lpnqm['replace'](/[\s<].*/, ''), nokp['error']('end tag name: ' + lpnqm + ' maybe not complete'), jkifgh = fbca + 0x1 + lpnqm['length']);var lmqpn = igedhf['localNSMap'],
              ropqnm = igedhf['tagName'] == lpnqm;if (ropqnm || igedhf['tagName'] && igedhf['tagName']['toLowerCase']() == lpnqm['toLowerCase']()) {
            if (wyv$xz['endElement'](igedhf['uri'], igedhf['localName'], lpnqm), lmqpn) {
              for (var trsuqv in lmqpn) wyv$xz['endPrefixMapping'](trsuqv);
            }ropqnm || nokp['fatalError']('end tag name: ' + lpnqm + ' is not match the current start tagName:' + igedhf['tagName']);
          } else wyuxvz['push'](igedhf);jkifgh++;break;case '?':
          qpsrto && trqpsu(fbca), jkifgh = _dlmiknj(vsurwt, fbca, wyv$xz);break;case '!':
          qpsrto && trqpsu(fbca), jkifgh = _dwtxyvu(vsurwt, fbca, wyv$xz, nokp);break;default:
          qpsrto && trqpsu(fbca);var vw$x = new _duvwyx(),
              _z2$01 = wyuxvz[wyuxvz['length'] - 0x1]['currentNSMap'],
              jkifgh = _dpotsqr(vsurwt, fbca, vw$x, _z2$01, rqsv, nokp),
              lgij = vw$x['length'];if (!vw$x['closed'] && _duvsrtq(vsurwt, jkifgh, vw$x['tagName'], xtvwu) && (vw$x['closed'] = !0x0, ecdbf['nbsp'] || nokp['warning']('unclosed xml attribute')), qpsrto && lgij) {
            for (var uxwytv = _d_x$0(qpsrto, {}), wtxu = 0x0; wtxu < lgij; wtxu++) {
              var suxwvt = vw$x[wtxu];trqpsu(suxwvt['offset']), suxwvt['locator'] = _d_x$0(qpsrto, {});
            }wyv$xz['locator'] = uxwytv, _dqnmlop(vw$x, wyv$xz, _z2$01) && wyuxvz['push'](vw$x), wyv$xz['locator'] = qpsrto;
          } else _dqnmlop(vw$x, wyv$xz, _z2$01) && wyuxvz['push'](vw$x);'http://www.w3.org/1999/xhtml' !== vw$x['uri'] || vw$x['closed'] ? jkifgh++ : jkifgh = _dqustp(vsurwt, jkifgh, vw$x['tagName'], rqsv, wyv$xz);}
    } catch (lkmnj) {
      nokp['error']('element parse error: ' + lkmnj), jkifgh = -0x1;
    }y_01$z < jkifgh ? y_01$z = jkifgh : qotp(Math['max'](fbca, y_01$z) + 0x1);
  }
}function _d_x$0(pnrs, hiegfd) {
  return hiegfd['lineNumber'] = pnrs['lineNumber'], hiegfd['columnNumber'] = pnrs['columnNumber'], hiegfd;
}function _dpotsqr(hikgjf, nqspor, opqts, fjgki, ponrm, plon) {
  for (var x$z_0y, qpnrom = ++nqspor, uxvywt = _dxvy$z;;) {
    var wrtvsu = hikgjf['charAt'](qpnrom);switch (wrtvsu) {case '=':
        if (uxvywt === _dotpqs) x$z_0y = hikgjf['slice'](nqspor, qpnrom), uxvywt = _dkljno;else {
          if (uxvywt !== _dxwyvtu) throw new Error('attribute equal must after attrName');uxvywt = _dkljno;
        }break;case '\x27':case '\x22':
        if (uxvywt === _dkljno || uxvywt === _dotpqs) {
          if (uxvywt === _dotpqs && (plon['warning']('attribute value must after "="'), x$z_0y = hikgjf['slice'](nqspor, qpnrom)), !(0x0 < (qpnrom = hikgjf['indexOf'](wrtvsu, nqspor = qpnrom + 0x1)))) throw new Error('attribute value no end \'' + wrtvsu + '\' match');qnmolp = hikgjf['slice'](nqspor, qpnrom)['replace'](/&#?\w+;/g, ponrm), opqts['add'](x$z_0y, qnmolp, nqspor - 0x1), uxvywt = _dkghlji;
        } else {
          if (uxvywt != _dhlikjm) throw new Error('attribute value must after "="');qnmolp = hikgjf['slice'](nqspor, qpnrom)['replace'](/&#?\w+;/g, ponrm), opqts['add'](x$z_0y, qnmolp, nqspor), plon['warning']('attribute "' + x$z_0y + '" missed start quot(' + wrtvsu + ')!!'), nqspor = qpnrom + 0x1, uxvywt = _dkghlji;
        }break;case '/':
        switch (uxvywt) {case _dxvy$z:
            opqts['setTagName'](hikgjf['slice'](nqspor, qpnrom));case _dkghlji:case _drpos:case _dkjgifh:
            uxvywt = _dkjgifh, opqts['closed'] = !0x0;case _dhlikjm:case _dotpqs:case _dxwyvtu:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return plon['error']('unexpected end of input'), uxvywt == _dxvy$z && opqts['setTagName'](hikgjf['slice'](nqspor, qpnrom)), qpnrom;case '>':
        switch (uxvywt) {case _dxvy$z:
            opqts['setTagName'](hikgjf['slice'](nqspor, qpnrom));case _dkghlji:case _drpos:case _dkjgifh:
            break;case _dhlikjm:case _dotpqs:
            '/' === (qnmolp = hikgjf['slice'](nqspor, qpnrom))['slice'](-0x1) && (opqts['closed'] = !0x0, qnmolp = qnmolp['slice'](0x0, -0x1));case _dxwyvtu:
            uxvywt === _dxwyvtu && (qnmolp = x$z_0y), uxvywt == _dhlikjm ? (plon['warning']('attribute "' + qnmolp + '" missed quot(")!!'), opqts['add'](x$z_0y, qnmolp['replace'](/&#?\w+;/g, ponrm), nqspor)) : ('http://www.w3.org/1999/xhtml' === fjgki[''] && qnmolp['match'](/^(?:disabled|checked|selected)$/i) || plon['warning']('attribute "' + qnmolp + '" missed value!! "' + qnmolp + '" instead!!'), opqts['add'](qnmolp, qnmolp, nqspor));break;case _dkljno:
            throw new Error('attribute value missed!!');}return qpnrom;case '\u0080':
        wrtvsu = '\x20';default:
        if (wrtvsu <= '\x20') switch (uxvywt) {case _dxvy$z:
            opqts['setTagName'](hikgjf['slice'](nqspor, qpnrom)), uxvywt = _drpos;break;case _dotpqs:
            x$z_0y = hikgjf['slice'](nqspor, qpnrom), uxvywt = _dxwyvtu;break;case _dhlikjm:
            var qnmolp = hikgjf['slice'](nqspor, qpnrom)['replace'](/&#?\w+;/g, ponrm);plon['warning']('attribute "' + qnmolp + '" missed quot(")!!'), opqts['add'](x$z_0y, qnmolp, nqspor);case _dkghlji:
            uxvywt = _drpos;} else switch (uxvywt) {case _dxwyvtu:
            opqts['tagName'], 'http://www.w3.org/1999/xhtml' === fjgki[''] && x$z_0y['match'](/^(?:disabled|checked|selected)$/i) || plon['warning']('attribute "' + x$z_0y + '" missed value!! "' + x$z_0y + '" instead2!!'), opqts['add'](x$z_0y, x$z_0y, nqspor), nqspor = qpnrom, uxvywt = _dotpqs;break;case _dkghlji:
            plon['warning']('attribute space is required"' + x$z_0y + '\x22!!');case _drpos:
            uxvywt = _dotpqs, nqspor = qpnrom;break;case _dkljno:
            uxvywt = _dhlikjm, nqspor = qpnrom;break;case _dkjgifh:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}qpnrom++;
  }
}function _dqnmlop(x$y_0, _14032, z_$yx) {
  for (var uwrvts = x$y_0['tagName'], fgched = null, mqnpol = x$y_0['length']; mqnpol--;) {
    var becdaf = x$y_0[mqnpol],
        rsu = becdaf['qName'],
        xtswvu = becdaf['value'],
        klmp;rsu = 0x0 < (xwuvs = rsu['indexOf'](':')) ? (_$23 = becdaf['prefix'] = rsu['slice'](0x0, xwuvs), klmp = rsu['slice'](xwuvs + 0x1), 'xmlns' === _$23 && klmp) : (_$23 = null, 'xmlns' === (klmp = rsu) && ''), becdaf['localName'] = klmp, !0x1 !== rsu && (null == fgched && (fgched = {}, _drwsuvt(z_$yx, z_$yx = {})), z_$yx[rsu] = fgched[rsu] = xtswvu, becdaf['uri'] = 'http://www.w3.org/2000/xmlns/', _14032['startPrefixMapping'](rsu, xtswvu));
  }for (mqnpol = x$y_0['length']; mqnpol--;) (_$23 = (becdaf = x$y_0[mqnpol])['prefix']) && ('xml' === _$23 && (becdaf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _$23 && (becdaf['uri'] = z_$yx[_$23 || '']));var xwuvs;klmp = 0x0 < (xwuvs = uwrvts['indexOf'](':')) ? (_$23 = x$y_0['prefix'] = uwrvts['slice'](0x0, xwuvs), x$y_0['localName'] = uwrvts['slice'](xwuvs + 0x1)) : (_$23 = null, x$y_0['localName'] = uwrvts);var spronq = x$y_0['uri'] = z_$yx[_$23 || ''];if (_14032['startElement'](spronq, klmp, uwrvts, x$y_0), !x$y_0['closed']) return x$y_0['currentNSMap'] = z_$yx, x$y_0['localNSMap'] = fgched, !0x0;if (_14032['endElement'](spronq, klmp, uwrvts), fgched) {
    for (var _$23 in fgched) _14032['endPrefixMapping'](_$23);
  }
}function _dqustp(yz1_0$, _$1z0y, x$_z0, ptsruq, fdbegc) {
  if (/^(?:script|textarea)$/i['test'](x$_z0)) {
    var $y_1z = yz1_0$['indexOf']('</' + x$_z0 + '>', _$1z0y),
        yz1_0$ = yz1_0$['substring'](_$1z0y + 0x1, $y_1z);if (/[&<]/['test'](yz1_0$)) return (/^script$/i['test'](x$_z0) || (yz1_0$ = yz1_0$['replace'](/&#?\w+;/g, ptsruq)), fdbegc['characters'](yz1_0$, 0x0, yz1_0$['length']), $y_1z
    );
  }return _$1z0y + 0x1;
}function _duvsrtq(chdf, dgfbce, mjklin, fjgikh) {
  var yzvxu = fjgikh[mjklin];return null == yzvxu && ((yzvxu = chdf['lastIndexOf']('</' + mjklin + '>')) < dgfbce && (yzvxu = chdf['lastIndexOf']('</' + mjklin)), fjgikh[mjklin] = yzvxu), yzvxu < dgfbce;
}function _drwsuvt(jghfie, xzy$_) {
  for (var fcbdea in jghfie) xzy$_[fcbdea] = jghfie[fcbdea];
}function _dwtxyvu(w_zxy$, poqnlm, _x$wz, strupq) {
  var defih = w_zxy$['charAt'](poqnlm + 0x2);if ('-' === defih) return '-' !== w_zxy$['charAt'](poqnlm + 0x3) ? -0x1 : poqnlm < (mknjli = w_zxy$['indexOf']('-->', poqnlm + 0x4)) ? (_x$wz['comment'](w_zxy$, poqnlm + 0x4, mknjli - poqnlm - 0x4), mknjli + 0x3) : (strupq['error']('Unclosed comment'), -0x1);if ('CDATA[' == w_zxy$['substr'](poqnlm + 0x3, 0x6)) {
    var mknjli = w_zxy$['indexOf'](']]>', poqnlm + 0x9);return _x$wz['startCDATA'](), _x$wz['characters'](w_zxy$, poqnlm + 0x9, mknjli - poqnlm - 0x9), _x$wz['endCDATA'](), mknjli + 0x3;
  }defih = _dehifgd(w_zxy$, poqnlm), strupq = defih['length'];if (0x1 < strupq && /!doctype/i['test'](defih[0x0][0x0])) return mknjli = defih[0x1][0x0], w_zxy$ = 0x3 < strupq && /^public$/i['test'](defih[0x2][0x0]) && defih[0x3][0x0], poqnlm = 0x4 < strupq && defih[0x4][0x0], strupq = defih[strupq - 0x1], (_x$wz['startDTD'](mknjli, w_zxy$ && w_zxy$['replace'](/^(['"])(.*?)\1$/, '$2'), poqnlm && poqnlm['replace'](/^(['"])(.*?)\1$/, '$2')), _x$wz['endDTD'](), strupq['index'] + strupq[0x0]['length']);return -0x1;
}function _dlmiknj(oklmj, pqomn, kmijhl) {
  var lnok = oklmj['indexOf']('?>', pqomn);if (lnok) return pqomn = oklmj['substring'](pqomn, lnok)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), pqomn ? (pqomn[0x0]['length'], kmijhl['processingInstruction'](pqomn[0x1], pqomn[0x2]), lnok + 0x2) : -0x1;return -0x1;
}function _duvwyx() {}function _dikl($yz_x, plomnq) {
  return $yz_x['__proto__'] = plomnq, $yz_x;
}function _dehifgd(ejhgif, yxz$w) {
  var becg,
      qlonm = [],
      srqvt = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (srqvt['lastIndex'] = yxz$w, srqvt['exec'](ejhgif); becg = srqvt['exec'](ejhgif);) if (qlonm['push'](becg), becg[0x1]) return qlonm;
}var _dcfdhe = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dxvw = new RegExp('[\\-\\.0-9' + _dcfdhe['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dabdef = new RegExp('^' + _dcfdhe['source'] + _dxvw['source'] + '*(?::' + _dcfdhe['source'] + _dxvw['source'] + '*)?$'),
    _dxvy$z = 0x0,
    _dotpqs = 0x1,
    _dxwyvtu = 0x2,
    _dkljno = 0x3,
    _dhlikjm = 0x4,
    _dkghlji = 0x5,
    _drpos = 0x6,
    _dkjgifh = 0x7;_dutrq['prototype'] = { 'parse': function (xvwzy, pusq, _243) {
    var kihjgl = this['domBuilder'];kihjgl['startDocument'](), _drwsuvt(pusq, pusq = {}), _dhlimj(xvwzy, pusq, _243, kihjgl, this['errorHandler']), kihjgl['endDocument']();
  } }, _duvwyx['prototype'] = { 'setTagName': function (hgfied) {
    if (!_dabdef['test'](hgfied)) throw new Error('invalid tagName:' + hgfied);this['tagName'] = hgfied;
  }, 'add': function (iglhk, mnklji, y1z) {
    if (!_dabdef['test'](iglhk)) throw new Error('invalid attribute:' + iglhk);this[this['length']++] = { 'qName': iglhk, 'value': mnklji, 'offset': y1z };
  }, 'length': 0x0, 'getLocalName': function (lkmjn) {
    return this[lkmjn]['localName'];
  }, 'getLocator': function (jmlkno) {
    return this[jmlkno]['locator'];
  }, 'getQName': function (vsqtr) {
    return this[vsqtr]['qName'];
  }, 'getURI': function (qotr) {
    return this[qotr]['uri'];
  }, 'getValue': function (qtrpsu) {
    return this[qtrpsu]['value'];
  } }, _dikl({}, _dikl['prototype']) instanceof _dikl || (_dikl = function (jifkg, $_210) {
  function vx$yz() {}for ($_210 in vx$yz['prototype'] = $_210, vx$yz = new vx$yz(), jifkg) vx$yz[$_210] = jifkg[$_210];return vx$yz;
}), exports['XMLReader'] = _dutrq;