var _ = wx.y$;
function _dqrosnp() {}function _dtyxvuw(fbeca, rsnqo, qtrvu, daecfb, z$y_10) {
  function wutrsv(zx$_wy) {
    var tvsxuw = zx$_wy['slice'](0x1, -0x1);return tvsxuw in qtrvu ? qtrvu[tvsxuw] : '#' === tvsxuw['charAt'](0x0) ? 0xffff < (tvsxuw = parseInt(tvsxuw['substr'](0x1)['replace']('x', '0x'))) ? (tvsxuw -= 0x10000, String['fromCharCode'](0xd800 + (tvsxuw >> 0xa), 0xdc00 + (0x3ff & tvsxuw))) : String['fromCharCode'](tvsxuw) : (z$y_10['error']('entity not found:' + zx$_wy), zx$_wy);
  }function mkjihl(dechfg) {
    var lkihg;caedb < dechfg && (lkihg = fbeca['substring'](caedb, dechfg)['replace'](/&#?\w+;/g, wutrsv), uwvstx && dgbefc(caedb), daecfb['characters'](lkihg, 0x0, dechfg - caedb), caedb = dechfg);
  }function dgbefc($y0_z1, zwyv$x) {
    for (; ponlm <= $y0_z1 && (zwyv$x = fceabd['exec'](fbeca));) qolnm = zwyv$x['index'], ponlm = qolnm + zwyv$x[0x0]['length'], uwvstx['lineNumber']++;uwvstx['columnNumber'] = $y0_z1 - qolnm + 0x1;
  }for (var qolnm = 0x0, ponlm = 0x0, fceabd = /.*(?:\r\n?|\n)|.*$/g, uwvstx = daecfb['locator'], gcehf = [{ 'currentNSMap': rsnqo }], vyuxz = {}, caedb = 0x0;;) {
    try {
      var wsuvtr = fbeca['indexOf']('<', caedb),
          fba,
          stuwr;if (wsuvtr < 0x0) return void (fbeca['substr'](caedb)['match'](/^\s*$/) || (stuwr = (fba = daecfb['doc'])['createTextNode'](fbeca['substr'](caedb)), fba['appendChild'](stuwr), daecfb['currentElement'] = stuwr));switch (caedb < wsuvtr && mkjihl(wsuvtr), fbeca['charAt'](wsuvtr + 0x1)) {case '/':
          var fg = fbeca['indexOf']('>', wsuvtr + 0x3),
              wyvxut = fbeca['substring'](wsuvtr + 0x2, fg),
              vw$z = gcehf['pop']();fg < 0x0 ? (wyvxut = fbeca['substring'](wsuvtr + 0x2)['replace'](/[\s<].*/, ''), z$y_10['error']('end tag name: ' + wyvxut + ' is not complete:' + vw$z['tagName']), fg = wsuvtr + 0x1 + wyvxut['length']) : wyvxut['match'](/\s</) && (wyvxut = wyvxut['replace'](/[\s<].*/, ''), z$y_10['error']('end tag name: ' + wyvxut + ' maybe not complete'), fg = wsuvtr + 0x1 + wyvxut['length']);var y_zx$0 = vw$z['localNSMap'],
              kimnlj = vw$z['tagName'] == wyvxut;if (kimnlj || vw$z['tagName'] && vw$z['tagName']['toLowerCase']() == wyvxut['toLowerCase']()) {
            if (daecfb['endElement'](vw$z['uri'], vw$z['localName'], wyvxut), y_zx$0) {
              for (var ompk in y_zx$0) daecfb['endPrefixMapping'](ompk);
            }kimnlj || z$y_10['fatalError']('end tag name: ' + wyvxut + ' is not match the current start tagName:' + vw$z['tagName']);
          } else gcehf['push'](vw$z);fg++;break;case '?':
          uwvstx && dgbefc(wsuvtr), fg = _d_0yzx(fbeca, wsuvtr, daecfb);break;case '!':
          uwvstx && dgbefc(wsuvtr), fg = _dfcaedb(fbeca, wsuvtr, daecfb, z$y_10);break;default:
          uwvstx && dgbefc(wsuvtr);var upqtr = new _dpuqtsr(),
              kjmhli = gcehf[gcehf['length'] - 0x1]['currentNSMap'],
              fg = _dhfgdie(fbeca, wsuvtr, upqtr, kjmhli, wutrsv, z$y_10),
              vtsrwu = upqtr['length'];if (!upqtr['closed'] && _dutrpsq(fbeca, fg, upqtr['tagName'], vyuxz) && (upqtr['closed'] = !0x0, qtrvu['nbsp'] || z$y_10['warning']('unclosed xml attribute')), uwvstx && vtsrwu) {
            for (var zyx$0 = _dqsoprn(uwvstx, {}), jlnko = 0x0; jlnko < vtsrwu; jlnko++) {
              var $zxvwy = upqtr[jlnko];dgbefc($zxvwy['offset']), $zxvwy['locator'] = _dqsoprn(uwvstx, {});
            }daecfb['locator'] = zyx$0, _d$_y0xz(upqtr, daecfb, kjmhli) && gcehf['push'](upqtr), daecfb['locator'] = uwvstx;
          } else _d$_y0xz(upqtr, daecfb, kjmhli) && gcehf['push'](upqtr);'http://www.w3.org/1999/xhtml' !== upqtr['uri'] || upqtr['closed'] ? fg++ : fg = _dilgkhj(fbeca, fg, upqtr['tagName'], wutrsv, daecfb);}
    } catch (mjkonl) {
      z$y_10['error']('element parse error: ' + mjkonl), fg = -0x1;
    }caedb < fg ? caedb = fg : mkjihl(Math['max'](wsuvtr, caedb) + 0x1);
  }
}function _dqsoprn(rnqpo, degfcb) {
  return degfcb['lineNumber'] = rnqpo['lineNumber'], degfcb['columnNumber'] = rnqpo['columnNumber'], degfcb;
}function _dhfgdie(nli, nokp, opqmn, lmknoj, jlihmk, z_y0) {
  for (var dcea, efi = ++nokp, uvt = _dqosrn;;) {
    var hfideg = nli['charAt'](efi);switch (hfideg) {case '=':
        if (uvt === _defch) dcea = nli['slice'](nokp, efi), uvt = _dustqv;else {
          if (uvt !== _dilkgj) throw new Error('attribute equal must after attrName');uvt = _dustqv;
        }break;case '\x27':case '\x22':
        if (uvt === _dustqv || uvt === _defch) {
          if (uvt === _defch && (z_y0['warning']('attribute value must after "="'), dcea = nli['slice'](nokp, efi)), !(0x0 < (efi = nli['indexOf'](hfideg, nokp = efi + 0x1)))) throw new Error('attribute value no end \'' + hfideg + '\' match');cbfdge = nli['slice'](nokp, efi)['replace'](/&#?\w+;/g, jlihmk), opqmn['add'](dcea, cbfdge, nokp - 0x1), uvt = _ddhcgfe;
        } else {
          if (uvt != _dlpmqon) throw new Error('attribute value must after "="');cbfdge = nli['slice'](nokp, efi)['replace'](/&#?\w+;/g, jlihmk), opqmn['add'](dcea, cbfdge, nokp), z_y0['warning']('attribute "' + dcea + '" missed start quot(' + hfideg + ')!!'), nokp = efi + 0x1, uvt = _ddhcgfe;
        }break;case '/':
        switch (uvt) {case _dqosrn:
            opqmn['setTagName'](nli['slice'](nokp, efi));case _ddhcgfe:case _deb:case _dotrs:
            uvt = _dotrs, opqmn['closed'] = !0x0;case _dlpmqon:case _defch:case _dilkgj:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z_y0['error']('unexpected end of input'), uvt == _dqosrn && opqmn['setTagName'](nli['slice'](nokp, efi)), efi;case '>':
        switch (uvt) {case _dqosrn:
            opqmn['setTagName'](nli['slice'](nokp, efi));case _ddhcgfe:case _deb:case _dotrs:
            break;case _dlpmqon:case _defch:
            '/' === (cbfdge = nli['slice'](nokp, efi))['slice'](-0x1) && (opqmn['closed'] = !0x0, cbfdge = cbfdge['slice'](0x0, -0x1));case _dilkgj:
            uvt === _dilkgj && (cbfdge = dcea), uvt == _dlpmqon ? (z_y0['warning']('attribute "' + cbfdge + '" missed quot(")!!'), opqmn['add'](dcea, cbfdge['replace'](/&#?\w+;/g, jlihmk), nokp)) : ('http://www.w3.org/1999/xhtml' === lmknoj[''] && cbfdge['match'](/^(?:disabled|checked|selected)$/i) || z_y0['warning']('attribute "' + cbfdge + '" missed value!! "' + cbfdge + '" instead!!'), opqmn['add'](cbfdge, cbfdge, nokp));break;case _dustqv:
            throw new Error('attribute value missed!!');}return efi;case '\u0080':
        hfideg = '\x20';default:
        if (hfideg <= '\x20') switch (uvt) {case _dqosrn:
            opqmn['setTagName'](nli['slice'](nokp, efi)), uvt = _deb;break;case _defch:
            dcea = nli['slice'](nokp, efi), uvt = _dilkgj;break;case _dlpmqon:
            var cbfdge = nli['slice'](nokp, efi)['replace'](/&#?\w+;/g, jlihmk);z_y0['warning']('attribute "' + cbfdge + '" missed quot(")!!'), opqmn['add'](dcea, cbfdge, nokp);case _ddhcgfe:
            uvt = _deb;} else switch (uvt) {case _dilkgj:
            opqmn['tagName'], 'http://www.w3.org/1999/xhtml' === lmknoj[''] && dcea['match'](/^(?:disabled|checked|selected)$/i) || z_y0['warning']('attribute "' + dcea + '" missed value!! "' + dcea + '" instead2!!'), opqmn['add'](dcea, dcea, nokp), nokp = efi, uvt = _defch;break;case _ddhcgfe:
            z_y0['warning']('attribute space is required"' + dcea + '\x22!!');case _deb:
            uvt = _defch, nokp = efi;break;case _dustqv:
            uvt = _dlpmqon, nokp = efi;break;case _dotrs:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}efi++;
  }
}function _d$_y0xz(jmlnki, portq, efgchd) {
  for (var kfjgih = jmlnki['tagName'], adcebf = null, tspo = jmlnki['length']; tspo--;) {
    var _0z1y$ = jmlnki[tspo],
        befg = _0z1y$['qName'],
        hedig = _0z1y$['value'],
        _y01;befg = 0x0 < (mknijl = befg['indexOf'](':')) ? (hjeif = _0z1y$['prefix'] = befg['slice'](0x0, mknijl), _y01 = befg['slice'](mknijl + 0x1), 'xmlns' === hjeif && _y01) : (hjeif = null, 'xmlns' === (_y01 = befg) && ''), _0z1y$['localName'] = _y01, !0x1 !== befg && (null == adcebf && (adcebf = {}, _dvuqtrs(efgchd, efgchd = {})), efgchd[befg] = adcebf[befg] = hedig, _0z1y$['uri'] = 'http://www.w3.org/2000/xmlns/', portq['startPrefixMapping'](befg, hedig));
  }for (tspo = jmlnki['length']; tspo--;) (hjeif = (_0z1y$ = jmlnki[tspo])['prefix']) && ('xml' === hjeif && (_0z1y$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hjeif && (_0z1y$['uri'] = efgchd[hjeif || '']));var mknijl;_y01 = 0x0 < (mknijl = kfjgih['indexOf'](':')) ? (hjeif = jmlnki['prefix'] = kfjgih['slice'](0x0, mknijl), jmlnki['localName'] = kfjgih['slice'](mknijl + 0x1)) : (hjeif = null, jmlnki['localName'] = kfjgih);var pomqnl = jmlnki['uri'] = efgchd[hjeif || ''];if (portq['startElement'](pomqnl, _y01, kfjgih, jmlnki), !jmlnki['closed']) return jmlnki['currentNSMap'] = efgchd, jmlnki['localNSMap'] = adcebf, !0x0;if (portq['endElement'](pomqnl, _y01, kfjgih), adcebf) {
    for (var hjeif in adcebf) portq['endPrefixMapping'](hjeif);
  }
}function _dilgkhj(vzxuyw, qruv, $2_1z0, nljomk, pmonkl) {
  if (/^(?:script|textarea)$/i['test']($2_1z0)) {
    var lpqmo = vzxuyw['indexOf']('</' + $2_1z0 + '>', qruv),
        vzxuyw = vzxuyw['substring'](qruv + 0x1, lpqmo);if (/[&<]/['test'](vzxuyw)) return (/^script$/i['test']($2_1z0) || (vzxuyw = vzxuyw['replace'](/&#?\w+;/g, nljomk)), pmonkl['characters'](vzxuyw, 0x0, vzxuyw['length']), lpqmo
    );
  }return qruv + 0x1;
}function _dutrpsq(tqpos, cfdba, vtxsuw, sqrtpu) {
  var qropn = sqrtpu[vtxsuw];return null == qropn && ((qropn = tqpos['lastIndexOf']('</' + vtxsuw + '>')) < cfdba && (qropn = tqpos['lastIndexOf']('</' + vtxsuw)), sqrtpu[vtxsuw] = qropn), qropn < cfdba;
}function _dvuqtrs(gfijeh, igkjlh) {
  for (var pqmln in gfijeh) igkjlh[pqmln] = gfijeh[pqmln];
}function _dfcaedb(vywtxu, uvyz, qvurts, z$02) {
  var lkihj = vywtxu['charAt'](uvyz + 0x2);if ('-' === lkihj) return '-' !== vywtxu['charAt'](uvyz + 0x3) ? -0x1 : uvyz < (tsvwur = vywtxu['indexOf']('-->', uvyz + 0x4)) ? (qvurts['comment'](vywtxu, uvyz + 0x4, tsvwur - uvyz - 0x4), tsvwur + 0x3) : (z$02['error']('Unclosed comment'), -0x1);if ('CDATA[' == vywtxu['substr'](uvyz + 0x3, 0x6)) {
    var tsvwur = vywtxu['indexOf'](']]>', uvyz + 0x9);return qvurts['startCDATA'](), qvurts['characters'](vywtxu, uvyz + 0x9, tsvwur - uvyz - 0x9), qvurts['endCDATA'](), tsvwur + 0x3;
  }lkihj = _ddfegi(vywtxu, uvyz), z$02 = lkihj['length'];if (0x1 < z$02 && /!doctype/i['test'](lkihj[0x0][0x0])) return tsvwur = lkihj[0x1][0x0], vywtxu = 0x3 < z$02 && /^public$/i['test'](lkihj[0x2][0x0]) && lkihj[0x3][0x0], uvyz = 0x4 < z$02 && lkihj[0x4][0x0], z$02 = lkihj[z$02 - 0x1], (qvurts['startDTD'](tsvwur, vywtxu && vywtxu['replace'](/^(['"])(.*?)\1$/, '$2'), uvyz && uvyz['replace'](/^(['"])(.*?)\1$/, '$2')), qvurts['endDTD'](), z$02['index'] + z$02[0x0]['length']);return -0x1;
}function _d_0yzx(z1_y0, zxw$y_, bdgef) {
  var prno = z1_y0['indexOf']('?>', zxw$y_);if (prno) return zxw$y_ = z1_y0['substring'](zxw$y_, prno)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), zxw$y_ ? (zxw$y_[0x0]['length'], bdgef['processingInstruction'](zxw$y_[0x1], zxw$y_[0x2]), prno + 0x2) : -0x1;return -0x1;
}function _dpuqtsr() {}function _dz10y_$(ghijk, zwvyux) {
  return ghijk['__proto__'] = zwvyux, ghijk;
}function _ddfegi(xwvu, egh) {
  var dcbf,
      utswvx = [],
      jlnki = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jlnki['lastIndex'] = egh, jlnki['exec'](xwvu); dcbf = jlnki['exec'](xwvu);) if (utswvx['push'](dcbf), dcbf[0x1]) return utswvx;
}var _dkgjhi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _djiglhk = new RegExp('[\\-\\.0-9' + _dkgjhi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _drvqust = new RegExp('^' + _dkgjhi['source'] + _djiglhk['source'] + '*(?::' + _dkgjhi['source'] + _djiglhk['source'] + '*)?$'),
    _dqosrn = 0x0,
    _defch = 0x1,
    _dilkgj = 0x2,
    _dustqv = 0x3,
    _dlpmqon = 0x4,
    _ddhcgfe = 0x5,
    _deb = 0x6,
    _dotrs = 0x7;_dqrosnp['prototype'] = { 'parse': function (wtvxus, ljhk, ejhi) {
    var lokjnm = this['domBuilder'];lokjnm['startDocument'](), _dvuqtrs(ljhk, ljhk = {}), _dtyxvuw(wtvxus, ljhk, ejhi, lokjnm, this['errorHandler']), lokjnm['endDocument']();
  } }, _dpuqtsr['prototype'] = { 'setTagName': function (olj) {
    if (!_drvqust['test'](olj)) throw new Error('invalid tagName:' + olj);this['tagName'] = olj;
  }, 'add': function ($xw_, uwtrvs, uvxwyt) {
    if (!_drvqust['test']($xw_)) throw new Error('invalid attribute:' + $xw_);this[this['length']++] = { 'qName': $xw_, 'value': uwtrvs, 'offset': uvxwyt };
  }, 'length': 0x0, 'getLocalName': function (nlmqo) {
    return this[nlmqo]['localName'];
  }, 'getLocator': function (z210_) {
    return this[z210_]['locator'];
  }, 'getQName': function (urpsq) {
    return this[urpsq]['qName'];
  }, 'getURI': function (ijkmn) {
    return this[ijkmn]['uri'];
  }, 'getValue': function (jklhgi) {
    return this[jklhgi]['value'];
  } }, _dz10y_$({}, _dz10y_$['prototype']) instanceof _dz10y_$ || (_dz10y_$ = function (heif, xtuvyw) {
  function _10y() {}for (xtuvyw in _10y['prototype'] = xtuvyw, _10y = new _10y(), heif) _10y[xtuvyw] = heif[xtuvyw];return _10y;
}), exports['XMLReader'] = _dqrosnp;