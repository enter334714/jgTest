var _ = wx.y$;
function _dhdcfeg() {}function _dzxy0_$(gdebfc, dfbeca, wzvu, wytvu, _2z$0) {
  function khjim(xwzy_$) {
    if (xwzy_$ > 0xffff) {
      xwzy_$ -= 0x10000;var fdih = 0xd800 + (xwzy_$ >> 0xa),
          mqnro = 0xdc00 + (0x3ff & xwzy_$);return String['fromCharCode'](fdih, mqnro);
    }return String['fromCharCode'](xwzy_$);
  }function uqsv(usvwtx) {
    var hklmi = usvwtx['slice'](0x1, -0x1);return hklmi in wzvu ? wzvu[hklmi] : '#' === hklmi['charAt'](0x0) ? khjim(parseInt(hklmi['substr'](0x1)['replace']('x', '0x'))) : (_2z$0['error']('entity not found:' + usvwtx), usvwtx);
  }function sopn(tvxyu) {
    if (tvxyu > yzx$w) {
      var mnkojl = gdebfc['substring'](yzx$w, tvxyu)['replace'](/&#?\w+;/g, uqsv);kmnloj && ifjge(yzx$w), wytvu['characters'](mnkojl, 0x0, tvxyu - yzx$w), yzx$w = tvxyu;
    }
  }function ifjge(adeb, dcfgb) {
    for (; adeb >= eba && (dcfgb = uvswr['exec'](gdebfc));) $ywvzx = dcfgb['index'], eba = $ywvzx + dcfgb[0x0]['length'], kmnloj['lineNumber']++;kmnloj['columnNumber'] = adeb - $ywvzx + 0x1;
  }for (var $ywvzx = 0x0, eba = 0x0, uvswr = /.*(?:\r\n?|\n)|.*$/g, kmnloj = wytvu['locator'], uyvxw = [{ 'currentNSMap': dfbeca }], rqosn = {}, yzx$w = 0x0;;) {
    try {
      var vzwyx$ = gdebfc['indexOf']('<', yzx$w);if (0x0 > vzwyx$) {
        if (!gdebfc['substr'](yzx$w)['match'](/^\s*$/)) {
          var egdbcf = wytvu['doc'],
              rutv = egdbcf['createTextNode'](gdebfc['substr'](yzx$w));egdbcf['appendChild'](rutv), wytvu['currentElement'] = rutv;
        }return;
      }switch (vzwyx$ > yzx$w && sopn(vzwyx$), gdebfc['charAt'](vzwyx$ + 0x1)) {case '/':
          var efabc = gdebfc['indexOf']('>', vzwyx$ + 0x3),
              wz$_x = gdebfc['substring'](vzwyx$ + 0x2, efabc),
              hcefdg = uyvxw['pop']();0x0 > efabc ? (wz$_x = gdebfc['substring'](vzwyx$ + 0x2)['replace'](/[\s<].*/, ''), _2z$0['error']('end tag name: ' + wz$_x + ' is not complete:' + hcefdg['tagName']), efabc = vzwyx$ + 0x1 + wz$_x['length']) : wz$_x['match'](/\s</) && (wz$_x = wz$_x['replace'](/[\s<].*/, ''), _2z$0['error']('end tag name: ' + wz$_x + ' maybe not complete'), efabc = vzwyx$ + 0x1 + wz$_x['length']);var rtvwsu = hcefdg['localNSMap'],
              vsxwtu = hcefdg['tagName'] == wz$_x,
              vxuzyw = vsxwtu || hcefdg['tagName'] && hcefdg['tagName']['toLowerCase']() == wz$_x['toLowerCase']();if (vxuzyw) {
            if (wytvu['endElement'](hcefdg['uri'], hcefdg['localName'], wz$_x), rtvwsu) {
              for (var utqpsr in rtvwsu) wytvu['endPrefixMapping'](utqpsr);
            }vsxwtu || _2z$0['fatalError']('end tag name: ' + wz$_x + ' is not match the current start tagName:' + hcefdg['tagName']);
          } else uyvxw['push'](hcefdg);efabc++;break;case '?':
          kmnloj && ifjge(vzwyx$), efabc = _dpqmrno(gdebfc, vzwyx$, wytvu);break;case '!':
          kmnloj && ifjge(vzwyx$), efabc = _debdcaf(gdebfc, vzwyx$, wytvu, _2z$0);break;default:
          kmnloj && ifjge(vzwyx$);var yx$vw = new _degjihf(),
              sturvw = uyvxw[uyvxw['length'] - 0x1]['currentNSMap'],
              efabc = _defdbac(gdebfc, vzwyx$, yx$vw, sturvw, uqsv, _2z$0),
              iejghf = yx$vw['length'];if (!yx$vw['closed'] && _dqomp(gdebfc, efabc, yx$vw['tagName'], rqosn) && (yx$vw['closed'] = !0x0, wzvu['nbsp'] || _2z$0['warning']('unclosed xml attribute')), kmnloj && iejghf) {
            for (var utwvsx = _d_zwyx(kmnloj, {}), egdfhc = 0x0; iejghf > egdfhc; egdfhc++) {
              var orsqpt = yx$vw[egdfhc];ifjge(orsqpt['offset']), orsqpt['locator'] = _d_zwyx(kmnloj, {});
            }wytvu['locator'] = utwvsx, _d_yxz(yx$vw, wytvu, sturvw) && uyvxw['push'](yx$vw), wytvu['locator'] = kmnloj;
          } else _d_yxz(yx$vw, wytvu, sturvw) && uyvxw['push'](yx$vw);'http://www.w3.org/1999/xhtml' !== yx$vw['uri'] || yx$vw['closed'] ? efabc++ : efabc = _droptq(gdebfc, efabc, yx$vw['tagName'], uqsv, wytvu);}
    } catch (qstvur) {
      _2z$0['error']('element parse error: ' + qstvur), efabc = -0x1;
    }efabc > yzx$w ? yzx$w = efabc : sopn(Math['max'](vzwyx$, yzx$w) + 0x1);
  }
}function _d_zwyx(z$vyw, qrup) {
  return qrup['lineNumber'] = z$vyw['lineNumber'], qrup['columnNumber'] = z$vyw['columnNumber'], qrup;
}function _defdbac(nqro, cbdegf, kifhjg, purt, febdc, _210$3) {
  for (var lmjkh, gfecdb, ihjefg = ++cbdegf, ljikn = _dxzy$_w;;) {
    var _zyw = nqro['charAt'](ihjefg);switch (_zyw) {case '=':
        if (ljikn === _duyxtw) lmjkh = nqro['slice'](cbdegf, ihjefg), ljikn = _dswutx;else {
          if (ljikn !== _dtrqups) throw new Error('attribute equal must after attrName');ljikn = _dswutx;
        }break;case '\x27':case '\x22':
        if (ljikn === _dswutx || ljikn === _duyxtw) {
          if (ljikn === _duyxtw && (_210$3['warning']('attribute value must after "="'), lmjkh = nqro['slice'](cbdegf, ihjefg)), cbdegf = ihjefg + 0x1, ihjefg = nqro['indexOf'](_zyw, cbdegf), !(ihjefg > 0x0)) throw new Error('attribute value no end \'' + _zyw + '\' match');gfecdb = nqro['slice'](cbdegf, ihjefg)['replace'](/&#?\w+;/g, febdc), kifhjg['add'](lmjkh, gfecdb, cbdegf - 0x1), ljikn = _dvwturs;
        } else {
          if (ljikn != _dklpnm) throw new Error('attribute value must after "="');gfecdb = nqro['slice'](cbdegf, ihjefg)['replace'](/&#?\w+;/g, febdc), kifhjg['add'](lmjkh, gfecdb, cbdegf), _210$3['warning']('attribute "' + lmjkh + '" missed start quot(' + _zyw + ')!!'), cbdegf = ihjefg + 0x1, ljikn = _dvwturs;
        }break;case '/':
        switch (ljikn) {case _dxzy$_w:
            kifhjg['setTagName'](nqro['slice'](cbdegf, ihjefg));case _dvwturs:case _dopqnrs:case _dvtqusr:
            ljikn = _dvtqusr, kifhjg['closed'] = !0x0;case _dklpnm:case _duyxtw:case _dtrqups:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _210$3['error']('unexpected end of input'), ljikn == _dxzy$_w && kifhjg['setTagName'](nqro['slice'](cbdegf, ihjefg)), ihjefg;case '>':
        switch (ljikn) {case _dxzy$_w:
            kifhjg['setTagName'](nqro['slice'](cbdegf, ihjefg));case _dvwturs:case _dopqnrs:case _dvtqusr:
            break;case _dklpnm:case _duyxtw:
            gfecdb = nqro['slice'](cbdegf, ihjefg), '/' === gfecdb['slice'](-0x1) && (kifhjg['closed'] = !0x0, gfecdb = gfecdb['slice'](0x0, -0x1));case _dtrqups:
            ljikn === _dtrqups && (gfecdb = lmjkh), ljikn == _dklpnm ? (_210$3['warning']('attribute "' + gfecdb + '" missed quot(")!!'), kifhjg['add'](lmjkh, gfecdb['replace'](/&#?\w+;/g, febdc), cbdegf)) : ('http://www.w3.org/1999/xhtml' === purt[''] && gfecdb['match'](/^(?:disabled|checked|selected)$/i) || _210$3['warning']('attribute "' + gfecdb + '" missed value!! "' + gfecdb + '" instead!!'), kifhjg['add'](gfecdb, gfecdb, cbdegf));break;case _dswutx:
            throw new Error('attribute value missed!!');}return ihjefg;case '\u0080':
        _zyw = '\x20';default:
        if ('\x20' >= _zyw) switch (ljikn) {case _dxzy$_w:
            kifhjg['setTagName'](nqro['slice'](cbdegf, ihjefg)), ljikn = _dopqnrs;break;case _duyxtw:
            lmjkh = nqro['slice'](cbdegf, ihjefg), ljikn = _dtrqups;break;case _dklpnm:
            var gfecdb = nqro['slice'](cbdegf, ihjefg)['replace'](/&#?\w+;/g, febdc);_210$3['warning']('attribute "' + gfecdb + '" missed quot(")!!'), kifhjg['add'](lmjkh, gfecdb, cbdegf);case _dvwturs:
            ljikn = _dopqnrs;} else switch (ljikn) {case _dtrqups:
            {
              kifhjg['tagName'];
            }'http://www.w3.org/1999/xhtml' === purt[''] && lmjkh['match'](/^(?:disabled|checked|selected)$/i) || _210$3['warning']('attribute "' + lmjkh + '" missed value!! "' + lmjkh + '" instead2!!'), kifhjg['add'](lmjkh, lmjkh, cbdegf), cbdegf = ihjefg, ljikn = _duyxtw;break;case _dvwturs:
            _210$3['warning']('attribute space is required"' + lmjkh + '\x22!!');case _dopqnrs:
            ljikn = _duyxtw, cbdegf = ihjefg;break;case _dswutx:
            ljikn = _dklpnm, cbdegf = ihjefg;break;case _dvtqusr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ihjefg++;
  }
}function _d_yxz(lhjkg, lonmpk, hkilmj) {
  for (var xwt = lhjkg['tagName'], omnlpq = null, jnki = lhjkg['length']; jnki--;) {
    var lijnk = lhjkg[jnki],
        wuxyzv = lijnk['qName'],
        fhiged = lijnk['value'],
        urps = wuxyzv['indexOf'](':');if (urps > 0x0) var okmp = lijnk['prefix'] = wuxyzv['slice'](0x0, urps),
        lijghk = wuxyzv['slice'](urps + 0x1),
        fech = 'xmlns' === okmp && lijghk;else lijghk = wuxyzv, okmp = null, fech = 'xmlns' === wuxyzv && '';lijnk['localName'] = lijghk, fech !== !0x1 && (null == omnlpq && (omnlpq = {}, _dvwuxty(hkilmj, hkilmj = {})), hkilmj[fech] = omnlpq[fech] = fhiged, lijnk['uri'] = 'http://www.w3.org/2000/xmlns/', lonmpk['startPrefixMapping'](fech, fhiged));
  }for (var jnki = lhjkg['length']; jnki--;) {
    lijnk = lhjkg[jnki];var okmp = lijnk['prefix'];okmp && ('xml' === okmp && (lijnk['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== okmp && (lijnk['uri'] = hkilmj[okmp || '']));
  }var urps = xwt['indexOf'](':');urps > 0x0 ? (okmp = lhjkg['prefix'] = xwt['slice'](0x0, urps), lijghk = lhjkg['localName'] = xwt['slice'](urps + 0x1)) : (okmp = null, lijghk = lhjkg['localName'] = xwt);var mnp = lhjkg['uri'] = hkilmj[okmp || ''];if (lonmpk['startElement'](mnp, lijghk, xwt, lhjkg), !lhjkg['closed']) return lhjkg['currentNSMap'] = hkilmj, lhjkg['localNSMap'] = omnlpq, !0x0;if (lonmpk['endElement'](mnp, lijghk, xwt), omnlpq) {
    for (okmp in omnlpq) lonmpk['endPrefixMapping'](okmp);
  }
}function _droptq(mqpnor, wusvrt, ihgdfe, pturs, nlj) {
  if (/^(?:script|textarea)$/i['test'](ihgdfe)) {
    var ikfgjh = mqpnor['indexOf']('</' + ihgdfe + '>', wusvrt),
        tpsqor = mqpnor['substring'](wusvrt + 0x1, ikfgjh);if (/[&<]/['test'](tpsqor)) return (/^script$/i['test'](ihgdfe) ? (nlj['characters'](tpsqor, 0x0, tpsqor['length']), ikfgjh) : (tpsqor = tpsqor['replace'](/&#?\w+;/g, pturs), nlj['characters'](tpsqor, 0x0, tpsqor['length']), ikfgjh)
    );
  }return wusvrt + 0x1;
}function _dqomp(z20_1$, turqv, ptso, _y$xw) {
  var $zy_w = _y$xw[ptso];return null == $zy_w && ($zy_w = z20_1$['lastIndexOf']('</' + ptso + '>'), turqv > $zy_w && ($zy_w = z20_1$['lastIndexOf']('</' + ptso)), _y$xw[ptso] = $zy_w), turqv > $zy_w;
}function _dvwuxty(mklinj, qosrpt) {
  for (var mnoq in mklinj) qosrpt[mnoq] = mklinj[mnoq];
}function _debdcaf(wzxvy$, mpqoln, qtsp, wstvr) {
  var ihjfe = wzxvy$['charAt'](mpqoln + 0x2);switch (ihjfe) {case '-':
      if ('-' === wzxvy$['charAt'](mpqoln + 0x3)) {
        var vzyu = wzxvy$['indexOf']('-->', mpqoln + 0x4);return vzyu > mpqoln ? (qtsp['comment'](wzxvy$, mpqoln + 0x4, vzyu - mpqoln - 0x4), vzyu + 0x3) : (wstvr['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == wzxvy$['substr'](mpqoln + 0x3, 0x6)) {
        var vzyu = wzxvy$['indexOf'](']]>', mpqoln + 0x9);return qtsp['startCDATA'](), qtsp['characters'](wzxvy$, mpqoln + 0x9, vzyu - mpqoln - 0x9), qtsp['endCDATA'](), vzyu + 0x3;
      }var xvytuw = _djmkhli(wzxvy$, mpqoln),
          ieghd = xvytuw['length'];if (ieghd > 0x1 && /!doctype/i['test'](xvytuw[0x0][0x0])) {
        var qsruvt = xvytuw[0x1][0x0],
            oqrsn = ieghd > 0x3 && /^public$/i['test'](xvytuw[0x2][0x0]) && xvytuw[0x3][0x0],
            ie = ieghd > 0x4 && xvytuw[0x4][0x0],
            wzv$y = xvytuw[ieghd - 0x1];return qtsp['startDTD'](qsruvt, oqrsn && oqrsn['replace'](/^(['"])(.*?)\1$/, '$2'), ie && ie['replace'](/^(['"])(.*?)\1$/, '$2')), qtsp['endDTD'](), wzv$y['index'] + wzv$y[0x0]['length'];
      }}return -0x1;
}function _dpqmrno(likgh, omklj, oljmnk) {
  var ecdabf = likgh['indexOf']('?>', omklj);if (ecdabf) {
    var sutxv = likgh['substring'](omklj, ecdabf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (sutxv) {
      {
        sutxv[0x0]['length'];
      }return oljmnk['processingInstruction'](sutxv[0x1], sutxv[0x2]), ecdabf + 0x2;
    }return -0x1;
  }return -0x1;
}function _degjihf() {}function _dgfje(mknol, zw_y) {
  return mknol['__proto__'] = zw_y, mknol;
}function _djmkhli(lnokpm, qtrsop) {
  var tvsxuw,
      wzvxyu = [],
      jklig = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jklig['lastIndex'] = qtrsop, jklig['exec'](lnokpm); tvsxuw = jklig['exec'](lnokpm);) if (wzvxyu['push'](tvsxuw), tvsxuw[0x1]) return wzvxyu;
}var _dbfcged = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _d_1$2 = new RegExp('[\\-\\.0-9' + _dbfcged['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _degi = new RegExp('^' + _dbfcged['source'] + _d_1$2['source'] + '*(?::' + _dbfcged['source'] + _d_1$2['source'] + '*)?$'),
    _dxzy$_w = 0x0,
    _duyxtw = 0x1,
    _dtrqups = 0x2,
    _dswutx = 0x3,
    _dklpnm = 0x4,
    _dvwturs = 0x5,
    _dopqnrs = 0x6,
    _dvtqusr = 0x7;_dhdcfeg['prototype'] = { 'parse': function (vyx$wz, pnmko, gheijf) {
    var ebdgcf = this['domBuilder'];ebdgcf['startDocument'](), _dvwuxty(pnmko, pnmko = {}), _dzxy0_$(vyx$wz, pnmko, gheijf, ebdgcf, this['errorHandler']), ebdgcf['endDocument']();
  } }, _degjihf['prototype'] = { 'setTagName': function (dghief) {
    if (!_degi['test'](dghief)) throw new Error('invalid tagName:' + dghief);this['tagName'] = dghief;
  }, 'add': function (wut, fhgce, mq) {
    if (!_degi['test'](wut)) throw new Error('invalid attribute:' + wut);this[this['length']++] = { 'qName': wut, 'value': fhgce, 'offset': mq };
  }, 'length': 0x0, 'getLocalName': function (mhi) {
    return this[mhi]['localName'];
  }, 'getLocator': function (urpstq) {
    return this[urpstq]['locator'];
  }, 'getQName': function ($_1y) {
    return this[$_1y]['qName'];
  }, 'getURI': function (npmlko) {
    return this[npmlko]['uri'];
  }, 'getValue': function (opnmrq) {
    return this[opnmrq]['value'];
  } }, _dgfje({}, _dgfje['prototype']) instanceof _dgfje || (_dgfje = function (swrvt, z$21_) {
  function qonl() {}qonl['prototype'] = z$21_, qonl = new qonl();for (z$21_ in swrvt) qonl[z$21_] = swrvt[z$21_];return qonl;
}), exports['XMLReader'] = _dhdcfeg;