var _ = wx.y$;
function _dnolkm() {}function _dpmnklo(y$0z_1, gfbed, jmnk, jnlimk, _$0x) {
  function yz10$(zy_0x) {
    var qorsn = zy_0x['slice'](0x1, -0x1);return qorsn in jmnk ? jmnk[qorsn] : '#' === qorsn['charAt'](0x0) ? 0xffff < (qorsn = parseInt(qorsn['substr'](0x1)['replace']('x', '0x'))) ? (qorsn -= 0x10000, String['fromCharCode'](0xd800 + (qorsn >> 0xa), 0xdc00 + (0x3ff & qorsn))) : String['fromCharCode'](qorsn) : (_$0x['error']('entity not found:' + zy_0x), zy_0x);
  }function ifgdhe(qtsrv) {
    var mnlkjo;rqus < qtsrv && (mnlkjo = y$0z_1['substring'](rqus, qtsrv)['replace'](/&#?\w+;/g, yz10$), fhdcge && fdgbc(rqus), jnlimk['characters'](mnlkjo, 0x0, qtsrv - rqus), rqus = qtsrv);
  }function fdgbc(wsvu, qurps) {
    for (; tvruws <= wsvu && (qurps = hkjgfi['exec'](y$0z_1));) fcdgeb = qurps['index'], tvruws = fcdgeb + qurps[0x0]['length'], fhdcge['lineNumber']++;fhdcge['columnNumber'] = wsvu - fcdgeb + 0x1;
  }for (var fcdgeb = 0x0, tvruws = 0x0, hkjgfi = /.*(?:\r\n?|\n)|.*$/g, fhdcge = jnlimk['locator'], wytxu = [{ 'currentNSMap': gfbed }], higfe = {}, rqus = 0x0;;) {
    try {
      var jlomkn = y$0z_1['indexOf']('<', rqus),
          hifgd,
          ehgjf;if (jlomkn < 0x0) return void (y$0z_1['substr'](rqus)['match'](/^\s*$/) || (ehgjf = (hifgd = jnlimk['doc'])['createTextNode'](y$0z_1['substr'](rqus)), hifgd['appendChild'](ehgjf), jnlimk['currentElement'] = ehgjf));switch (rqus < jlomkn && ifgdhe(jlomkn), y$0z_1['charAt'](jlomkn + 0x1)) {case '/':
          var potrsq = y$0z_1['indexOf']('>', jlomkn + 0x3),
              xwzvu = y$0z_1['substring'](jlomkn + 0x2, potrsq),
              idfge = wytxu['pop']();potrsq < 0x0 ? (xwzvu = y$0z_1['substring'](jlomkn + 0x2)['replace'](/[\s<].*/, ''), _$0x['error']('end tag name: ' + xwzvu + ' is not complete:' + idfge['tagName']), potrsq = jlomkn + 0x1 + xwzvu['length']) : xwzvu['match'](/\s</) && (xwzvu = xwzvu['replace'](/[\s<].*/, ''), _$0x['error']('end tag name: ' + xwzvu + ' maybe not complete'), potrsq = jlomkn + 0x1 + xwzvu['length']);var vxuwt = idfge['localNSMap'],
              jklm = idfge['tagName'] == xwzvu;if (jklm || idfge['tagName'] && idfge['tagName']['toLowerCase']() == xwzvu['toLowerCase']()) {
            if (jnlimk['endElement'](idfge['uri'], idfge['localName'], xwzvu), vxuwt) {
              for (var uvrqts in vxuwt) jnlimk['endPrefixMapping'](uvrqts);
            }jklm || _$0x['fatalError']('end tag name: ' + xwzvu + ' is not match the current start tagName:' + idfge['tagName']);
          } else wytxu['push'](idfge);potrsq++;break;case '?':
          fhdcge && fdgbc(jlomkn), potrsq = _djklonm(y$0z_1, jlomkn, jnlimk);break;case '!':
          fhdcge && fdgbc(jlomkn), potrsq = _dedbc(y$0z_1, jlomkn, jnlimk, _$0x);break;default:
          fhdcge && fdgbc(jlomkn);var trwsuv = new _drtsuvw(),
              cdebf = wytxu[wytxu['length'] - 0x1]['currentNSMap'],
              potrsq = _dljmih(y$0z_1, jlomkn, trwsuv, cdebf, yz10$, _$0x),
              kompn = trwsuv['length'];if (!trwsuv['closed'] && _dfikgh(y$0z_1, potrsq, trwsuv['tagName'], higfe) && (trwsuv['closed'] = !0x0, jmnk['nbsp'] || _$0x['warning']('unclosed xml attribute')), fhdcge && kompn) {
            for (var stwvxu = _dcebda(fhdcge, {}), xyvw$ = 0x0; xyvw$ < kompn; xyvw$++) {
              var rspqtu = trwsuv[xyvw$];fdgbc(rspqtu['offset']), rspqtu['locator'] = _dcebda(fhdcge, {});
            }jnlimk['locator'] = stwvxu, _dz_1y$0(trwsuv, jnlimk, cdebf) && wytxu['push'](trwsuv), jnlimk['locator'] = fhdcge;
          } else _dz_1y$0(trwsuv, jnlimk, cdebf) && wytxu['push'](trwsuv);'http://www.w3.org/1999/xhtml' !== trwsuv['uri'] || trwsuv['closed'] ? potrsq++ : potrsq = _doqlmpn(y$0z_1, potrsq, trwsuv['tagName'], yz10$, jnlimk);}
    } catch (ws) {
      _$0x['error']('element parse error: ' + ws), potrsq = -0x1;
    }rqus < potrsq ? rqus = potrsq : ifgdhe(Math['max'](jlomkn, rqus) + 0x1);
  }
}function _dcebda(fbcgd, rtqpsu) {
  return rtqpsu['lineNumber'] = fbcgd['lineNumber'], rtqpsu['columnNumber'] = fbcgd['columnNumber'], rtqpsu;
}function _dljmih(plokn, xutvws, qrnmop, olnjkm, wuxzv, y1_z0$) {
  for (var xvwuz, ijghlk = ++xutvws, tsvrqu = _dyxwvtu;;) {
    var $xz_yw = plokn['charAt'](ijghlk);switch ($xz_yw) {case '=':
        if (tsvrqu === _dacdbef) xvwuz = plokn['slice'](xutvws, ijghlk), tsvrqu = _dfhik;else {
          if (tsvrqu !== _dlihkm) throw new Error('attribute equal must after attrName');tsvrqu = _dfhik;
        }break;case '\x27':case '\x22':
        if (tsvrqu === _dfhik || tsvrqu === _dacdbef) {
          if (tsvrqu === _dacdbef && (y1_z0$['warning']('attribute value must after "="'), xvwuz = plokn['slice'](xutvws, ijghlk)), !(0x0 < (ijghlk = plokn['indexOf']($xz_yw, xutvws = ijghlk + 0x1)))) throw new Error('attribute value no end \'' + $xz_yw + '\' match');fhecg = plokn['slice'](xutvws, ijghlk)['replace'](/&#?\w+;/g, wuxzv), qrnmop['add'](xvwuz, fhecg, xutvws - 0x1), tsvrqu = _dopqrnm;
        } else {
          if (tsvrqu != _dhfdgec) throw new Error('attribute value must after "="');fhecg = plokn['slice'](xutvws, ijghlk)['replace'](/&#?\w+;/g, wuxzv), qrnmop['add'](xvwuz, fhecg, xutvws), y1_z0$['warning']('attribute "' + xvwuz + '" missed start quot(' + $xz_yw + ')!!'), xutvws = ijghlk + 0x1, tsvrqu = _dopqrnm;
        }break;case '/':
        switch (tsvrqu) {case _dyxwvtu:
            qrnmop['setTagName'](plokn['slice'](xutvws, ijghlk));case _dopqrnm:case _dvurs:case _dvqsru:
            tsvrqu = _dvqsru, qrnmop['closed'] = !0x0;case _dhfdgec:case _dacdbef:case _dlihkm:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return y1_z0$['error']('unexpected end of input'), tsvrqu == _dyxwvtu && qrnmop['setTagName'](plokn['slice'](xutvws, ijghlk)), ijghlk;case '>':
        switch (tsvrqu) {case _dyxwvtu:
            qrnmop['setTagName'](plokn['slice'](xutvws, ijghlk));case _dopqrnm:case _dvurs:case _dvqsru:
            break;case _dhfdgec:case _dacdbef:
            '/' === (fhecg = plokn['slice'](xutvws, ijghlk))['slice'](-0x1) && (qrnmop['closed'] = !0x0, fhecg = fhecg['slice'](0x0, -0x1));case _dlihkm:
            tsvrqu === _dlihkm && (fhecg = xvwuz), tsvrqu == _dhfdgec ? (y1_z0$['warning']('attribute "' + fhecg + '" missed quot(")!!'), qrnmop['add'](xvwuz, fhecg['replace'](/&#?\w+;/g, wuxzv), xutvws)) : ('http://www.w3.org/1999/xhtml' === olnjkm[''] && fhecg['match'](/^(?:disabled|checked|selected)$/i) || y1_z0$['warning']('attribute "' + fhecg + '" missed value!! "' + fhecg + '" instead!!'), qrnmop['add'](fhecg, fhecg, xutvws));break;case _dfhik:
            throw new Error('attribute value missed!!');}return ijghlk;case '\u0080':
        $xz_yw = '\x20';default:
        if ($xz_yw <= '\x20') switch (tsvrqu) {case _dyxwvtu:
            qrnmop['setTagName'](plokn['slice'](xutvws, ijghlk)), tsvrqu = _dvurs;break;case _dacdbef:
            xvwuz = plokn['slice'](xutvws, ijghlk), tsvrqu = _dlihkm;break;case _dhfdgec:
            var fhecg = plokn['slice'](xutvws, ijghlk)['replace'](/&#?\w+;/g, wuxzv);y1_z0$['warning']('attribute "' + fhecg + '" missed quot(")!!'), qrnmop['add'](xvwuz, fhecg, xutvws);case _dopqrnm:
            tsvrqu = _dvurs;} else switch (tsvrqu) {case _dlihkm:
            qrnmop['tagName'], 'http://www.w3.org/1999/xhtml' === olnjkm[''] && xvwuz['match'](/^(?:disabled|checked|selected)$/i) || y1_z0$['warning']('attribute "' + xvwuz + '" missed value!! "' + xvwuz + '" instead2!!'), qrnmop['add'](xvwuz, xvwuz, xutvws), xutvws = ijghlk, tsvrqu = _dacdbef;break;case _dopqrnm:
            y1_z0$['warning']('attribute space is required"' + xvwuz + '\x22!!');case _dvurs:
            tsvrqu = _dacdbef, xutvws = ijghlk;break;case _dfhik:
            tsvrqu = _dhfdgec, xutvws = ijghlk;break;case _dvqsru:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ijghlk++;
  }
}function _dz_1y$0(xz$yv, ustwv, mlkpon) {
  for (var kilj = xz$yv['tagName'], aebfdc = null, zx$_w = xz$yv['length']; zx$_w--;) {
    var qnro = xz$yv[zx$_w],
        vqr = qnro['qName'],
        gfhec = qnro['value'],
        spron;vqr = 0x0 < (sqnpor = vqr['indexOf'](':')) ? (snqop = qnro['prefix'] = vqr['slice'](0x0, sqnpor), spron = vqr['slice'](sqnpor + 0x1), 'xmlns' === snqop && spron) : (snqop = null, 'xmlns' === (spron = vqr) && ''), qnro['localName'] = spron, !0x1 !== vqr && (null == aebfdc && (aebfdc = {}, _dmikjnl(mlkpon, mlkpon = {})), mlkpon[vqr] = aebfdc[vqr] = gfhec, qnro['uri'] = 'http://www.w3.org/2000/xmlns/', ustwv['startPrefixMapping'](vqr, gfhec));
  }for (zx$_w = xz$yv['length']; zx$_w--;) (snqop = (qnro = xz$yv[zx$_w])['prefix']) && ('xml' === snqop && (qnro['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== snqop && (qnro['uri'] = mlkpon[snqop || '']));var sqnpor;spron = 0x0 < (sqnpor = kilj['indexOf'](':')) ? (snqop = xz$yv['prefix'] = kilj['slice'](0x0, sqnpor), xz$yv['localName'] = kilj['slice'](sqnpor + 0x1)) : (snqop = null, xz$yv['localName'] = kilj);var ljokm = xz$yv['uri'] = mlkpon[snqop || ''];if (ustwv['startElement'](ljokm, spron, kilj, xz$yv), !xz$yv['closed']) return xz$yv['currentNSMap'] = mlkpon, xz$yv['localNSMap'] = aebfdc, !0x0;if (ustwv['endElement'](ljokm, spron, kilj), aebfdc) {
    for (var snqop in aebfdc) ustwv['endPrefixMapping'](snqop);
  }
}function _doqlmpn(bdecaf, bfaed, gcdfe, z0_yx$, qtursv) {
  if (/^(?:script|textarea)$/i['test'](gcdfe)) {
    var dgfceh = bdecaf['indexOf']('</' + gcdfe + '>', bfaed),
        bdecaf = bdecaf['substring'](bfaed + 0x1, dgfceh);if (/[&<]/['test'](bdecaf)) return (/^script$/i['test'](gcdfe) || (bdecaf = bdecaf['replace'](/&#?\w+;/g, z0_yx$)), qtursv['characters'](bdecaf, 0x0, bdecaf['length']), dgfceh
    );
  }return bfaed + 0x1;
}function _dfikgh(z1_02, urqtsp, lmpko, $1320) {
  var y_10z = $1320[lmpko];return null == y_10z && ((y_10z = z1_02['lastIndexOf']('</' + lmpko + '>')) < urqtsp && (y_10z = z1_02['lastIndexOf']('</' + lmpko)), $1320[lmpko] = y_10z), y_10z < urqtsp;
}function _dmikjnl(zy$10, onlmjk) {
  for (var $zx in zy$10) onlmjk[$zx] = zy$10[$zx];
}function _dedbc(gidfh, xuyvw, wv$, wvx$z) {
  var gdfec = gidfh['charAt'](xuyvw + 0x2);if ('-' === gdfec) return '-' !== gidfh['charAt'](xuyvw + 0x3) ? -0x1 : xuyvw < (gheifj = gidfh['indexOf']('-->', xuyvw + 0x4)) ? (wv$['comment'](gidfh, xuyvw + 0x4, gheifj - xuyvw - 0x4), gheifj + 0x3) : (wvx$z['error']('Unclosed comment'), -0x1);if ('CDATA[' == gidfh['substr'](xuyvw + 0x3, 0x6)) {
    var gheifj = gidfh['indexOf'](']]>', xuyvw + 0x9);return wv$['startCDATA'](), wv$['characters'](gidfh, xuyvw + 0x9, gheifj - xuyvw - 0x9), wv$['endCDATA'](), gheifj + 0x3;
  }gdfec = _dmj(gidfh, xuyvw), wvx$z = gdfec['length'];if (0x1 < wvx$z && /!doctype/i['test'](gdfec[0x0][0x0])) return gheifj = gdfec[0x1][0x0], gidfh = 0x3 < wvx$z && /^public$/i['test'](gdfec[0x2][0x0]) && gdfec[0x3][0x0], xuyvw = 0x4 < wvx$z && gdfec[0x4][0x0], wvx$z = gdfec[wvx$z - 0x1], (wv$['startDTD'](gheifj, gidfh && gidfh['replace'](/^(['"])(.*?)\1$/, '$2'), xuyvw && xuyvw['replace'](/^(['"])(.*?)\1$/, '$2')), wv$['endDTD'](), wvx$z['index'] + wvx$z[0x0]['length']);return -0x1;
}function _djklonm(debcaf, ehdfgi, onmk) {
  var ijkfh = debcaf['indexOf']('?>', ehdfgi);if (ijkfh) return ehdfgi = debcaf['substring'](ehdfgi, ijkfh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), ehdfgi ? (ehdfgi[0x0]['length'], onmk['processingInstruction'](ehdfgi[0x1], ehdfgi[0x2]), ijkfh + 0x2) : -0x1;return -0x1;
}function _drtsuvw() {}function _dv$zyxw(lmkni, _ywzx$) {
  return lmkni['__proto__'] = _ywzx$, lmkni;
}function _dmj(becdfa, liknmj) {
  var ywvxz,
      _0$xy = [],
      onlmqp = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (onlmqp['lastIndex'] = liknmj, onlmqp['exec'](becdfa); ywvxz = onlmqp['exec'](becdfa);) if (_0$xy['push'](ywvxz), ywvxz[0x1]) return _0$xy;
}var _dzxvywu = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _d_$023 = new RegExp('[\\-\\.0-9' + _dzxvywu['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dlmijhk = new RegExp('^' + _dzxvywu['source'] + _d_$023['source'] + '*(?::' + _dzxvywu['source'] + _d_$023['source'] + '*)?$'),
    _dyxwvtu = 0x0,
    _dacdbef = 0x1,
    _dlihkm = 0x2,
    _dfhik = 0x3,
    _dhfdgec = 0x4,
    _dopqrnm = 0x5,
    _dvurs = 0x6,
    _dvqsru = 0x7;_dnolkm['prototype'] = { 'parse': function (swvutr, oln, twsxv) {
    var gfdeih = this['domBuilder'];gfdeih['startDocument'](), _dmikjnl(oln, oln = {}), _dpmnklo(swvutr, oln, twsxv, gfdeih, this['errorHandler']), gfdeih['endDocument']();
  } }, _drtsuvw['prototype'] = { 'setTagName': function (bcdea) {
    if (!_dlmijhk['test'](bcdea)) throw new Error('invalid tagName:' + bcdea);this['tagName'] = bcdea;
  }, 'add': function (gcdefh, $vxwz, ceab) {
    if (!_dlmijhk['test'](gcdefh)) throw new Error('invalid attribute:' + gcdefh);this[this['length']++] = { 'qName': gcdefh, 'value': $vxwz, 'offset': ceab };
  }, 'length': 0x0, 'getLocalName': function (miljnk) {
    return this[miljnk]['localName'];
  }, 'getLocator': function (dfei) {
    return this[dfei]['locator'];
  }, 'getQName': function (rsuwvt) {
    return this[rsuwvt]['qName'];
  }, 'getURI': function (ljmon) {
    return this[ljmon]['uri'];
  }, 'getValue': function (higlj) {
    return this[higlj]['value'];
  } }, _dv$zyxw({}, _dv$zyxw['prototype']) instanceof _dv$zyxw || (_dv$zyxw = function (jimlhk, hfgid) {
  function tsuprq() {}for (hfgid in tsuprq['prototype'] = hfgid, tsuprq = new tsuprq(), jimlhk) tsuprq[hfgid] = jimlhk[hfgid];return tsuprq;
}), exports['XMLReader'] = _dnolkm;