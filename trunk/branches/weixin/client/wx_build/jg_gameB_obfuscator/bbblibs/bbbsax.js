var _ = wx.y$;
function _dz2$_() {}function _domnp(nlkjmi, zyw$_x, nmilj, _10yz, ghe) {
  function _0$31(x$w_zy) {
    var qptrs = x$w_zy['slice'](0x1, -0x1);return qptrs in nmilj ? nmilj[qptrs] : '#' === qptrs['charAt'](0x0) ? 0xffff < (qptrs = parseInt(qptrs['substr'](0x1)['replace']('x', '0x'))) ? (qptrs -= 0x10000, String['fromCharCode'](0xd800 + (qptrs >> 0xa), 0xdc00 + (0x3ff & qptrs))) : String['fromCharCode'](qptrs) : (ghe['error']('entity not found:' + x$w_zy), x$w_zy);
  }function oplnqm(jhiklg) {
    var urtspq;xuvyz < jhiklg && (urtspq = nlkjmi['substring'](xuvyz, jhiklg)['replace'](/&#?\w+;/g, _0$31), dafe && kgihlj(xuvyz), _10yz['characters'](urtspq, 0x0, jhiklg - xuvyz), xuvyz = jhiklg);
  }function kgihlj(svwtx, fgihd) {
    for (; ghfid <= svwtx && (fgihd = chge['exec'](nlkjmi));) prqots = fgihd['index'], ghfid = prqots + fgihd[0x0]['length'], dafe['lineNumber']++;dafe['columnNumber'] = svwtx - prqots + 0x1;
  }for (var prqots = 0x0, ghfid = 0x0, chge = /.*(?:\r\n?|\n)|.*$/g, dafe = _10yz['locator'], ghfced = [{ 'currentNSMap': zyw$_x }], vwzxu = {}, xuvyz = 0x0;;) {
    try {
      var $yz_x = nlkjmi['indexOf']('<', xuvyz),
          trqsuv,
          $yzx;if ($yz_x < 0x0) return void (nlkjmi['substr'](xuvyz)['match'](/^\s*$/) || ($yzx = (trqsuv = _10yz['doc'])['createTextNode'](nlkjmi['substr'](xuvyz)), trqsuv['appendChild']($yzx), _10yz['currentElement'] = $yzx));switch (xuvyz < $yz_x && oplnqm($yz_x), nlkjmi['charAt']($yz_x + 0x1)) {case '/':
          var qsurv = nlkjmi['indexOf']('>', $yz_x + 0x3),
              omplnq = nlkjmi['substring']($yz_x + 0x2, qsurv),
              ghije = ghfced['pop']();qsurv < 0x0 ? (omplnq = nlkjmi['substring']($yz_x + 0x2)['replace'](/[\s<].*/, ''), ghe['error']('end tag name: ' + omplnq + ' is not complete:' + ghije['tagName']), qsurv = $yz_x + 0x1 + omplnq['length']) : omplnq['match'](/\s</) && (omplnq = omplnq['replace'](/[\s<].*/, ''), ghe['error']('end tag name: ' + omplnq + ' maybe not complete'), qsurv = $yz_x + 0x1 + omplnq['length']);var z02_1$ = ghije['localNSMap'],
              mnoljk = ghije['tagName'] == omplnq;if (mnoljk || ghije['tagName'] && ghije['tagName']['toLowerCase']() == omplnq['toLowerCase']()) {
            if (_10yz['endElement'](ghije['uri'], ghije['localName'], omplnq), z02_1$) {
              for (var xzvuwy in z02_1$) _10yz['endPrefixMapping'](xzvuwy);
            }mnoljk || ghe['fatalError']('end tag name: ' + omplnq + ' is not match the current start tagName:' + ghije['tagName']);
          } else ghfced['push'](ghije);qsurv++;break;case '?':
          dafe && kgihlj($yz_x), qsurv = _dyuvxwz(nlkjmi, $yz_x, _10yz);break;case '!':
          dafe && kgihlj($yz_x), qsurv = _d_20z$(nlkjmi, $yz_x, _10yz, ghe);break;default:
          dafe && kgihlj($yz_x);var moqpln = new _dqtosr(),
              gjfeih = ghfced[ghfced['length'] - 0x1]['currentNSMap'],
              qsurv = _dlmknjo(nlkjmi, $yz_x, moqpln, gjfeih, _0$31, ghe),
              portqs = moqpln['length'];if (!moqpln['closed'] && _drtpqu(nlkjmi, qsurv, moqpln['tagName'], vwzxu) && (moqpln['closed'] = !0x0, nmilj['nbsp'] || ghe['warning']('unclosed xml attribute')), dafe && portqs) {
            for (var qtrop = _dcfbade(dafe, {}), degfh = 0x0; degfh < portqs; degfh++) {
              var mjnkl = moqpln[degfh];kgihlj(mjnkl['offset']), mjnkl['locator'] = _dcfbade(dafe, {});
            }_10yz['locator'] = qtrop, _dqrn(moqpln, _10yz, gjfeih) && ghfced['push'](moqpln), _10yz['locator'] = dafe;
          } else _dqrn(moqpln, _10yz, gjfeih) && ghfced['push'](moqpln);'http://www.w3.org/1999/xhtml' !== moqpln['uri'] || moqpln['closed'] ? qsurv++ : qsurv = _dmlnoq(nlkjmi, qsurv, moqpln['tagName'], _0$31, _10yz);}
    } catch (vw$) {
      ghe['error']('element parse error: ' + vw$), qsurv = -0x1;
    }xuvyz < qsurv ? xuvyz = qsurv : oplnqm(Math['max']($yz_x, xuvyz) + 0x1);
  }
}function _dcfbade(ijgkf, rspqtu) {
  return rspqtu['lineNumber'] = ijgkf['lineNumber'], rspqtu['columnNumber'] = ijgkf['columnNumber'], rspqtu;
}function _dlmknjo(nqmpro, xvtusw, y0$_xz, dhfegc, yxuwt, ljihm) {
  for (var fdbea, rqot = ++xvtusw, y_$z01 = _dkgjihf;;) {
    var jlknm = nqmpro['charAt'](rqot);switch (jlknm) {case '=':
        if (y_$z01 === _dy_z$10) fdbea = nqmpro['slice'](xvtusw, rqot), y_$z01 = _dpsqnr;else {
          if (y_$z01 !== _dmjlko) throw new Error('attribute equal must after attrName');y_$z01 = _dpsqnr;
        }break;case '\x27':case '\x22':
        if (y_$z01 === _dpsqnr || y_$z01 === _dy_z$10) {
          if (y_$z01 === _dy_z$10 && (ljihm['warning']('attribute value must after "="'), fdbea = nqmpro['slice'](xvtusw, rqot)), !(0x0 < (rqot = nqmpro['indexOf'](jlknm, xvtusw = rqot + 0x1)))) throw new Error('attribute value no end \'' + jlknm + '\' match');vwuyt = nqmpro['slice'](xvtusw, rqot)['replace'](/&#?\w+;/g, yxuwt), y0$_xz['add'](fdbea, vwuyt, xvtusw - 0x1), y_$z01 = _dlmnjk;
        } else {
          if (y_$z01 != _dhjgl) throw new Error('attribute value must after "="');vwuyt = nqmpro['slice'](xvtusw, rqot)['replace'](/&#?\w+;/g, yxuwt), y0$_xz['add'](fdbea, vwuyt, xvtusw), ljihm['warning']('attribute "' + fdbea + '" missed start quot(' + jlknm + ')!!'), xvtusw = rqot + 0x1, y_$z01 = _dlmnjk;
        }break;case '/':
        switch (y_$z01) {case _dkgjihf:
            y0$_xz['setTagName'](nqmpro['slice'](xvtusw, rqot));case _dlmnjk:case _dxwtsvu:case _djlhik:
            y_$z01 = _djlhik, y0$_xz['closed'] = !0x0;case _dhjgl:case _dy_z$10:case _dmjlko:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ljihm['error']('unexpected end of input'), y_$z01 == _dkgjihf && y0$_xz['setTagName'](nqmpro['slice'](xvtusw, rqot)), rqot;case '>':
        switch (y_$z01) {case _dkgjihf:
            y0$_xz['setTagName'](nqmpro['slice'](xvtusw, rqot));case _dlmnjk:case _dxwtsvu:case _djlhik:
            break;case _dhjgl:case _dy_z$10:
            '/' === (vwuyt = nqmpro['slice'](xvtusw, rqot))['slice'](-0x1) && (y0$_xz['closed'] = !0x0, vwuyt = vwuyt['slice'](0x0, -0x1));case _dmjlko:
            y_$z01 === _dmjlko && (vwuyt = fdbea), y_$z01 == _dhjgl ? (ljihm['warning']('attribute "' + vwuyt + '" missed quot(")!!'), y0$_xz['add'](fdbea, vwuyt['replace'](/&#?\w+;/g, yxuwt), xvtusw)) : ('http://www.w3.org/1999/xhtml' === dhfegc[''] && vwuyt['match'](/^(?:disabled|checked|selected)$/i) || ljihm['warning']('attribute "' + vwuyt + '" missed value!! "' + vwuyt + '" instead!!'), y0$_xz['add'](vwuyt, vwuyt, xvtusw));break;case _dpsqnr:
            throw new Error('attribute value missed!!');}return rqot;case '\u0080':
        jlknm = '\x20';default:
        if (jlknm <= '\x20') switch (y_$z01) {case _dkgjihf:
            y0$_xz['setTagName'](nqmpro['slice'](xvtusw, rqot)), y_$z01 = _dxwtsvu;break;case _dy_z$10:
            fdbea = nqmpro['slice'](xvtusw, rqot), y_$z01 = _dmjlko;break;case _dhjgl:
            var vwuyt = nqmpro['slice'](xvtusw, rqot)['replace'](/&#?\w+;/g, yxuwt);ljihm['warning']('attribute "' + vwuyt + '" missed quot(")!!'), y0$_xz['add'](fdbea, vwuyt, xvtusw);case _dlmnjk:
            y_$z01 = _dxwtsvu;} else switch (y_$z01) {case _dmjlko:
            y0$_xz['tagName'], 'http://www.w3.org/1999/xhtml' === dhfegc[''] && fdbea['match'](/^(?:disabled|checked|selected)$/i) || ljihm['warning']('attribute "' + fdbea + '" missed value!! "' + fdbea + '" instead2!!'), y0$_xz['add'](fdbea, fdbea, xvtusw), xvtusw = rqot, y_$z01 = _dy_z$10;break;case _dlmnjk:
            ljihm['warning']('attribute space is required"' + fdbea + '\x22!!');case _dxwtsvu:
            y_$z01 = _dy_z$10, xvtusw = rqot;break;case _dpsqnr:
            y_$z01 = _dhjgl, xvtusw = rqot;break;case _djlhik:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rqot++;
  }
}function _dqrn(cbeadf, efca, $0zx_y) {
  for (var _$z01 = cbeadf['tagName'], gefihd = null, nmjol = cbeadf['length']; nmjol--;) {
    var sport = cbeadf[nmjol],
        sqonrp = sport['qName'],
        $021_ = sport['value'],
        onjlkm;sqonrp = 0x0 < (pkmlo = sqonrp['indexOf'](':')) ? (lkjhg = sport['prefix'] = sqonrp['slice'](0x0, pkmlo), onjlkm = sqonrp['slice'](pkmlo + 0x1), 'xmlns' === lkjhg && onjlkm) : (lkjhg = null, 'xmlns' === (onjlkm = sqonrp) && ''), sport['localName'] = onjlkm, !0x1 !== sqonrp && (null == gefihd && (gefihd = {}, _doqnpmr($0zx_y, $0zx_y = {})), $0zx_y[sqonrp] = gefihd[sqonrp] = $021_, sport['uri'] = 'http://www.w3.org/2000/xmlns/', efca['startPrefixMapping'](sqonrp, $021_));
  }for (nmjol = cbeadf['length']; nmjol--;) (lkjhg = (sport = cbeadf[nmjol])['prefix']) && ('xml' === lkjhg && (sport['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lkjhg && (sport['uri'] = $0zx_y[lkjhg || '']));var pkmlo;onjlkm = 0x0 < (pkmlo = _$z01['indexOf'](':')) ? (lkjhg = cbeadf['prefix'] = _$z01['slice'](0x0, pkmlo), cbeadf['localName'] = _$z01['slice'](pkmlo + 0x1)) : (lkjhg = null, cbeadf['localName'] = _$z01);var y_zx0 = cbeadf['uri'] = $0zx_y[lkjhg || ''];if (efca['startElement'](y_zx0, onjlkm, _$z01, cbeadf), !cbeadf['closed']) return cbeadf['currentNSMap'] = $0zx_y, cbeadf['localNSMap'] = gefihd, !0x0;if (efca['endElement'](y_zx0, onjlkm, _$z01), gefihd) {
    for (var lkjhg in gefihd) efca['endPrefixMapping'](lkjhg);
  }
}function _dmlnoq(hfkj, ilhkm, $231_, ojmlkn, fhejig) {
  if (/^(?:script|textarea)$/i['test']($231_)) {
    var mkjn = hfkj['indexOf']('</' + $231_ + '>', ilhkm),
        hfkj = hfkj['substring'](ilhkm + 0x1, mkjn);if (/[&<]/['test'](hfkj)) return (/^script$/i['test']($231_) || (hfkj = hfkj['replace'](/&#?\w+;/g, ojmlkn)), fhejig['characters'](hfkj, 0x0, hfkj['length']), mkjn
    );
  }return ilhkm + 0x1;
}function _drtpqu(mlonpk, yxvzw, lnqp, ghlkji) {
  var ebfgcd = ghlkji[lnqp];return null == ebfgcd && ((ebfgcd = mlonpk['lastIndexOf']('</' + lnqp + '>')) < yxvzw && (ebfgcd = mlonpk['lastIndexOf']('</' + lnqp)), ghlkji[lnqp] = ebfgcd), ebfgcd < yxvzw;
}function _doqnpmr(zuvx, gifejh) {
  for (var bdfceg in zuvx) gifejh[bdfceg] = zuvx[bdfceg];
}function _d_20z$(klnjmo, kilhjg, trupsq, hijgfk) {
  var jfihge = klnjmo['charAt'](kilhjg + 0x2);if ('-' === jfihge) return '-' !== klnjmo['charAt'](kilhjg + 0x3) ? -0x1 : kilhjg < (nklmo = klnjmo['indexOf']('-->', kilhjg + 0x4)) ? (trupsq['comment'](klnjmo, kilhjg + 0x4, nklmo - kilhjg - 0x4), nklmo + 0x3) : (hijgfk['error']('Unclosed comment'), -0x1);if ('CDATA[' == klnjmo['substr'](kilhjg + 0x3, 0x6)) {
    var nklmo = klnjmo['indexOf'](']]>', kilhjg + 0x9);return trupsq['startCDATA'](), trupsq['characters'](klnjmo, kilhjg + 0x9, nklmo - kilhjg - 0x9), trupsq['endCDATA'](), nklmo + 0x3;
  }jfihge = _dlqnpo(klnjmo, kilhjg), hijgfk = jfihge['length'];if (0x1 < hijgfk && /!doctype/i['test'](jfihge[0x0][0x0])) return nklmo = jfihge[0x1][0x0], klnjmo = 0x3 < hijgfk && /^public$/i['test'](jfihge[0x2][0x0]) && jfihge[0x3][0x0], kilhjg = 0x4 < hijgfk && jfihge[0x4][0x0], hijgfk = jfihge[hijgfk - 0x1], (trupsq['startDTD'](nklmo, klnjmo && klnjmo['replace'](/^(['"])(.*?)\1$/, '$2'), kilhjg && kilhjg['replace'](/^(['"])(.*?)\1$/, '$2')), trupsq['endDTD'](), hijgfk['index'] + hijgfk[0x0]['length']);return -0x1;
}function _dyuvxwz(_z0yx, kfjhi, fbecg) {
  var $_1z = _z0yx['indexOf']('?>', kfjhi);if ($_1z) return kfjhi = _z0yx['substring'](kfjhi, $_1z)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), kfjhi ? (kfjhi[0x0]['length'], fbecg['processingInstruction'](kfjhi[0x1], kfjhi[0x2]), $_1z + 0x2) : -0x1;return -0x1;
}function _dqtosr() {}function _dgijfhk(kfighj, qopnrm) {
  return kfighj['__proto__'] = qopnrm, kfighj;
}function _dlqnpo(ywvut, gcdfb) {
  var efhigd,
      mjklh = [],
      _$2130 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_$2130['lastIndex'] = gcdfb, _$2130['exec'](ywvut); efhigd = _$2130['exec'](ywvut);) if (mjklh['push'](efhigd), efhigd[0x1]) return mjklh;
}var _d$_zxy0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _djknml = new RegExp('[\\-\\.0-9' + _d$_zxy0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _drvuqt = new RegExp('^' + _d$_zxy0['source'] + _djknml['source'] + '*(?::' + _d$_zxy0['source'] + _djknml['source'] + '*)?$'),
    _dkgjihf = 0x0,
    _dy_z$10 = 0x1,
    _dmjlko = 0x2,
    _dpsqnr = 0x3,
    _dhjgl = 0x4,
    _dlmnjk = 0x5,
    _dxwtsvu = 0x6,
    _djlhik = 0x7;_dz2$_['prototype'] = { 'parse': function (stuqvr, zwy_$x, sqrtpu) {
    var yxzw$ = this['domBuilder'];yxzw$['startDocument'](), _doqnpmr(zwy_$x, zwy_$x = {}), _domnp(stuqvr, zwy_$x, sqrtpu, yxzw$, this['errorHandler']), yxzw$['endDocument']();
  } }, _dqtosr['prototype'] = { 'setTagName': function (twvxus) {
    if (!_drvuqt['test'](twvxus)) throw new Error('invalid tagName:' + twvxus);this['tagName'] = twvxus;
  }, 'add': function (tvsqu, zyxvuw, xz$wy_) {
    if (!_drvuqt['test'](tvsqu)) throw new Error('invalid attribute:' + tvsqu);this[this['length']++] = { 'qName': tvsqu, 'value': zyxvuw, 'offset': xz$wy_ };
  }, 'length': 0x0, 'getLocalName': function (_021) {
    return this[_021]['localName'];
  }, 'getLocator': function (strvq) {
    return this[strvq]['locator'];
  }, 'getQName': function (pmqron) {
    return this[pmqron]['qName'];
  }, 'getURI': function ($10_zy) {
    return this[$10_zy]['uri'];
  }, 'getValue': function (cgdhfe) {
    return this[cgdhfe]['value'];
  } }, _dgijfhk({}, _dgijfhk['prototype']) instanceof _dgijfhk || (_dgijfhk = function (ytv, x$yzw) {
  function lhijm() {}for (x$yzw in lhijm['prototype'] = x$yzw, lhijm = new lhijm(), ytv) lhijm[x$yzw] = ytv[x$yzw];return lhijm;
}), exports['XMLReader'] = _dz2$_;