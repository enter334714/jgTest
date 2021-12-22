var _ = wx.y$;
function _dvuwyxz() {}function _d$1_z0y(qpsu, vx$z, spoqnr, vzx$w, wzuv) {
  function jlhi(vzwuy) {
    if (vzwuy > 0xffff) {
      vzwuy -= 0x10000;var sqrotp = 0xd800 + (vzwuy >> 0xa),
          efcbda = 0xdc00 + (0x3ff & vzwuy);return String['fromCharCode'](sqrotp, efcbda);
    }return String['fromCharCode'](vzwuy);
  }function qurstp(ifde) {
    var nlokp = ifde['slice'](0x1, -0x1);return nlokp in spoqnr ? spoqnr[nlokp] : '#' === nlokp['charAt'](0x0) ? jlhi(parseInt(nlokp['substr'](0x1)['replace']('x', '0x'))) : (wzuv['error']('entity not found:' + ifde), ifde);
  }function fedbca(vyuxw) {
    if (vyuxw > vutwyx) {
      var zy1_$0 = qpsu['substring'](vutwyx, vyuxw)['replace'](/&#?\w+;/g, qurstp);srwtu && surqpt(vutwyx), vzx$w['characters'](zy1_$0, 0x0, vyuxw - vutwyx), vutwyx = vyuxw;
    }
  }function surqpt(bedgc, _40132) {
    for (; bedgc >= fdgehi && (_40132 = hjkgli['exec'](qpsu));) monklj = _40132['index'], fdgehi = monklj + _40132[0x0]['length'], srwtu['lineNumber']++;srwtu['columnNumber'] = bedgc - monklj + 0x1;
  }for (var monklj = 0x0, fdgehi = 0x0, hjkgli = /.*(?:\r\n?|\n)|.*$/g, srwtu = vzx$w['locator'], fgdehi = [{ 'currentNSMap': vx$z }], zwyx$v = {}, vutwyx = 0x0;;) {
    try {
      var ytuvxw = qpsu['indexOf']('<', vutwyx);if (0x0 > ytuvxw) {
        if (!qpsu['substr'](vutwyx)['match'](/^\s*$/)) {
          var kjihgl = vzx$w['doc'],
              qsur = kjihgl['createTextNode'](qpsu['substr'](vutwyx));kjihgl['appendChild'](qsur), vzx$w['currentElement'] = qsur;
        }return;
      }switch (ytuvxw > vutwyx && fedbca(ytuvxw), qpsu['charAt'](ytuvxw + 0x1)) {case '/':
          var ikjfh = qpsu['indexOf']('>', ytuvxw + 0x3),
              tqsup = qpsu['substring'](ytuvxw + 0x2, ikjfh),
              _xz$yw = fgdehi['pop']();0x0 > ikjfh ? (tqsup = qpsu['substring'](ytuvxw + 0x2)['replace'](/[\s<].*/, ''), wzuv['error']('end tag name: ' + tqsup + ' is not complete:' + _xz$yw['tagName']), ikjfh = ytuvxw + 0x1 + tqsup['length']) : tqsup['match'](/\s</) && (tqsup = tqsup['replace'](/[\s<].*/, ''), wzuv['error']('end tag name: ' + tqsup + ' maybe not complete'), ikjfh = ytuvxw + 0x1 + tqsup['length']);var $0_13 = _xz$yw['localNSMap'],
              norsq = _xz$yw['tagName'] == tqsup,
              ptsur = norsq || _xz$yw['tagName'] && _xz$yw['tagName']['toLowerCase']() == tqsup['toLowerCase']();if (ptsur) {
            if (vzx$w['endElement'](_xz$yw['uri'], _xz$yw['localName'], tqsup), $0_13) {
              for (var ljnmk in $0_13) vzx$w['endPrefixMapping'](ljnmk);
            }norsq || wzuv['fatalError']('end tag name: ' + tqsup + ' is not match the current start tagName:' + _xz$yw['tagName']);
          } else fgdehi['push'](_xz$yw);ikjfh++;break;case '?':
          srwtu && surqpt(ytuvxw), ikjfh = _dgjkihf(qpsu, ytuvxw, vzx$w);break;case '!':
          srwtu && surqpt(ytuvxw), ikjfh = _drqmonp(qpsu, ytuvxw, vzx$w, wzuv);break;default:
          srwtu && surqpt(ytuvxw);var rtop = new _dgfedc(),
              vsqtr = fgdehi[fgdehi['length'] - 0x1]['currentNSMap'],
              ikjfh = _dwtxyu(qpsu, ytuvxw, rtop, vsqtr, qurstp, wzuv),
              mjlno = rtop['length'];if (!rtop['closed'] && _dlqpm(qpsu, ikjfh, rtop['tagName'], zwyx$v) && (rtop['closed'] = !0x0, spoqnr['nbsp'] || wzuv['warning']('unclosed xml attribute')), srwtu && mjlno) {
            for (var ilgkhj = _dlijkg(srwtu, {}), uxvyw = 0x0; mjlno > uxvyw; uxvyw++) {
              var rmop = rtop[uxvyw];surqpt(rmop['offset']), rmop['locator'] = _dlijkg(srwtu, {});
            }vzx$w['locator'] = ilgkhj, _dutwsvx(rtop, vzx$w, vsqtr) && fgdehi['push'](rtop), vzx$w['locator'] = srwtu;
          } else _dutwsvx(rtop, vzx$w, vsqtr) && fgdehi['push'](rtop);'http://www.w3.org/1999/xhtml' !== rtop['uri'] || rtop['closed'] ? ikjfh++ : ikjfh = _dqostp(qpsu, ikjfh, rtop['tagName'], qurstp, vzx$w);}
    } catch (badfce) {
      wzuv['error']('element parse error: ' + badfce), ikjfh = -0x1;
    }ikjfh > vutwyx ? vutwyx = ikjfh : fedbca(Math['max'](ytuvxw, vutwyx) + 0x1);
  }
}function _dlijkg(fgech, $0x_) {
  return $0x_['lineNumber'] = fgech['lineNumber'], $0x_['columnNumber'] = fgech['columnNumber'], $0x_;
}function _dwtxyu(knojml, lmpo, imlhkj, omqnp, kmnlj, kpnlmo) {
  for (var nqor, rswu, uvrs = ++lmpo, iehgd = _dvtxuyw;;) {
    var qsutvr = knojml['charAt'](uvrs);switch (qsutvr) {case '=':
        if (iehgd === _dfedcgh) nqor = knojml['slice'](lmpo, uvrs), iehgd = _dpmlonk;else {
          if (iehgd !== _dnmklij) throw new Error('attribute equal must after attrName');iehgd = _dpmlonk;
        }break;case '\x27':case '\x22':
        if (iehgd === _dpmlonk || iehgd === _dfedcgh) {
          if (iehgd === _dfedcgh && (kpnlmo['warning']('attribute value must after "="'), nqor = knojml['slice'](lmpo, uvrs)), lmpo = uvrs + 0x1, uvrs = knojml['indexOf'](qsutvr, lmpo), !(uvrs > 0x0)) throw new Error('attribute value no end \'' + qsutvr + '\' match');rswu = knojml['slice'](lmpo, uvrs)['replace'](/&#?\w+;/g, kmnlj), imlhkj['add'](nqor, rswu, lmpo - 0x1), iehgd = _dtsruq;
        } else {
          if (iehgd != _dgkijfh) throw new Error('attribute value must after "="');rswu = knojml['slice'](lmpo, uvrs)['replace'](/&#?\w+;/g, kmnlj), imlhkj['add'](nqor, rswu, lmpo), kpnlmo['warning']('attribute "' + nqor + '" missed start quot(' + qsutvr + ')!!'), lmpo = uvrs + 0x1, iehgd = _dtsruq;
        }break;case '/':
        switch (iehgd) {case _dvtxuyw:
            imlhkj['setTagName'](knojml['slice'](lmpo, uvrs));case _dtsruq:case _dbdcae:case _dgifejh:
            iehgd = _dgifejh, imlhkj['closed'] = !0x0;case _dgkijfh:case _dfedcgh:case _dnmklij:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kpnlmo['error']('unexpected end of input'), iehgd == _dvtxuyw && imlhkj['setTagName'](knojml['slice'](lmpo, uvrs)), uvrs;case '>':
        switch (iehgd) {case _dvtxuyw:
            imlhkj['setTagName'](knojml['slice'](lmpo, uvrs));case _dtsruq:case _dbdcae:case _dgifejh:
            break;case _dgkijfh:case _dfedcgh:
            rswu = knojml['slice'](lmpo, uvrs), '/' === rswu['slice'](-0x1) && (imlhkj['closed'] = !0x0, rswu = rswu['slice'](0x0, -0x1));case _dnmklij:
            iehgd === _dnmklij && (rswu = nqor), iehgd == _dgkijfh ? (kpnlmo['warning']('attribute "' + rswu + '" missed quot(")!!'), imlhkj['add'](nqor, rswu['replace'](/&#?\w+;/g, kmnlj), lmpo)) : ('http://www.w3.org/1999/xhtml' === omqnp[''] && rswu['match'](/^(?:disabled|checked|selected)$/i) || kpnlmo['warning']('attribute "' + rswu + '" missed value!! "' + rswu + '" instead!!'), imlhkj['add'](rswu, rswu, lmpo));break;case _dpmlonk:
            throw new Error('attribute value missed!!');}return uvrs;case '\u0080':
        qsutvr = '\x20';default:
        if ('\x20' >= qsutvr) switch (iehgd) {case _dvtxuyw:
            imlhkj['setTagName'](knojml['slice'](lmpo, uvrs)), iehgd = _dbdcae;break;case _dfedcgh:
            nqor = knojml['slice'](lmpo, uvrs), iehgd = _dnmklij;break;case _dgkijfh:
            var rswu = knojml['slice'](lmpo, uvrs)['replace'](/&#?\w+;/g, kmnlj);kpnlmo['warning']('attribute "' + rswu + '" missed quot(")!!'), imlhkj['add'](nqor, rswu, lmpo);case _dtsruq:
            iehgd = _dbdcae;} else switch (iehgd) {case _dnmklij:
            {
              imlhkj['tagName'];
            }'http://www.w3.org/1999/xhtml' === omqnp[''] && nqor['match'](/^(?:disabled|checked|selected)$/i) || kpnlmo['warning']('attribute "' + nqor + '" missed value!! "' + nqor + '" instead2!!'), imlhkj['add'](nqor, nqor, lmpo), lmpo = uvrs, iehgd = _dfedcgh;break;case _dtsruq:
            kpnlmo['warning']('attribute space is required"' + nqor + '\x22!!');case _dbdcae:
            iehgd = _dfedcgh, lmpo = uvrs;break;case _dpmlonk:
            iehgd = _dgkijfh, lmpo = uvrs;break;case _dgifejh:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}uvrs++;
  }
}function _dutwsvx(ljkmi, yuvxtw, miknjl) {
  for (var dhcefg = ljkmi['tagName'], z_y$01 = null, xzyw$ = ljkmi['length']; xzyw$--;) {
    var wstxv = ljkmi[xzyw$],
        ehgidf = wstxv['qName'],
        xvty = wstxv['value'],
        gdfeih = ehgidf['indexOf'](':');if (gdfeih > 0x0) var vuty = wstxv['prefix'] = ehgidf['slice'](0x0, gdfeih),
        txywuv = ehgidf['slice'](gdfeih + 0x1),
        tvq = 'xmlns' === vuty && txywuv;else txywuv = ehgidf, vuty = null, tvq = 'xmlns' === ehgidf && '';wstxv['localName'] = txywuv, tvq !== !0x1 && (null == z_y$01 && (z_y$01 = {}, _dptrqso(miknjl, miknjl = {})), miknjl[tvq] = z_y$01[tvq] = xvty, wstxv['uri'] = 'http://www.w3.org/2000/xmlns/', yuvxtw['startPrefixMapping'](tvq, xvty));
  }for (var xzyw$ = ljkmi['length']; xzyw$--;) {
    wstxv = ljkmi[xzyw$];var vuty = wstxv['prefix'];vuty && ('xml' === vuty && (wstxv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vuty && (wstxv['uri'] = miknjl[vuty || '']));
  }var gdfeih = dhcefg['indexOf'](':');gdfeih > 0x0 ? (vuty = ljkmi['prefix'] = dhcefg['slice'](0x0, gdfeih), txywuv = ljkmi['localName'] = dhcefg['slice'](gdfeih + 0x1)) : (vuty = null, txywuv = ljkmi['localName'] = dhcefg);var $_zx0y = ljkmi['uri'] = miknjl[vuty || ''];if (yuvxtw['startElement']($_zx0y, txywuv, dhcefg, ljkmi), !ljkmi['closed']) return ljkmi['currentNSMap'] = miknjl, ljkmi['localNSMap'] = z_y$01, !0x0;if (yuvxtw['endElement']($_zx0y, txywuv, dhcefg), z_y$01) {
    for (vuty in z_y$01) yuvxtw['endPrefixMapping'](vuty);
  }
}function _dqostp(jfhki, mnljki, ilkjhm, gihfed, edfihg) {
  if (/^(?:script|textarea)$/i['test'](ilkjhm)) {
    var konl = jfhki['indexOf']('</' + ilkjhm + '>', mnljki),
        defhc = jfhki['substring'](mnljki + 0x1, konl);if (/[&<]/['test'](defhc)) return (/^script$/i['test'](ilkjhm) ? (edfihg['characters'](defhc, 0x0, defhc['length']), konl) : (defhc = defhc['replace'](/&#?\w+;/g, gihfed), edfihg['characters'](defhc, 0x0, defhc['length']), konl)
    );
  }return mnljki + 0x1;
}function _dlqpm(vtusrq, lponm, tvuq, qnopsr) {
  var _$xy0z = qnopsr[tvuq];return null == _$xy0z && (_$xy0z = vtusrq['lastIndexOf']('</' + tvuq + '>'), lponm > _$xy0z && (_$xy0z = vtusrq['lastIndexOf']('</' + tvuq)), qnopsr[tvuq] = _$xy0z), lponm > _$xy0z;
}function _dptrqso(ikljmn, pknl) {
  for (var pqrosn in ikljmn) pknl[pqrosn] = ikljmn[pqrosn];
}function _drqmonp(gl, nkjlim, xwy$, _1$y) {
  var jnmikl = gl['charAt'](nkjlim + 0x2);switch (jnmikl) {case '-':
      if ('-' === gl['charAt'](nkjlim + 0x3)) {
        var mjlkih = gl['indexOf']('-->', nkjlim + 0x4);return mjlkih > nkjlim ? (xwy$['comment'](gl, nkjlim + 0x4, mjlkih - nkjlim - 0x4), mjlkih + 0x3) : (_1$y['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gl['substr'](nkjlim + 0x3, 0x6)) {
        var mjlkih = gl['indexOf'](']]>', nkjlim + 0x9);return xwy$['startCDATA'](), xwy$['characters'](gl, nkjlim + 0x9, mjlkih - nkjlim - 0x9), xwy$['endCDATA'](), mjlkih + 0x3;
      }var xz$w_ = _dwtyu(gl, nkjlim),
          psron = xz$w_['length'];if (psron > 0x1 && /!doctype/i['test'](xz$w_[0x0][0x0])) {
        var edfbca = xz$w_[0x1][0x0],
            fedhi = psron > 0x3 && /^public$/i['test'](xz$w_[0x2][0x0]) && xz$w_[0x3][0x0],
            _21340 = psron > 0x4 && xz$w_[0x4][0x0],
            lijhkm = xz$w_[psron - 0x1];return xwy$['startDTD'](edfbca, fedhi && fedhi['replace'](/^(['"])(.*?)\1$/, '$2'), _21340 && _21340['replace'](/^(['"])(.*?)\1$/, '$2')), xwy$['endDTD'](), lijhkm['index'] + lijhkm[0x0]['length'];
      }}return -0x1;
}function _dgjkihf(oqrpns, _021$z, qornm) {
  var qsrput = oqrpns['indexOf']('?>', _021$z);if (qsrput) {
    var khjgi = oqrpns['substring'](_021$z, qsrput)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (khjgi) {
      {
        khjgi[0x0]['length'];
      }return qornm['processingInstruction'](khjgi[0x1], khjgi[0x2]), qsrput + 0x2;
    }return -0x1;
  }return -0x1;
}function _dgfedc() {}function _dtsoqp(uvwyz, qnopmr) {
  return uvwyz['__proto__'] = qnopmr, uvwyz;
}function _dwtyu(lkjinm, mqrnop) {
  var hjigk,
      cfgdbe = [],
      rstuwv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (rstuwv['lastIndex'] = mqrnop, rstuwv['exec'](lkjinm); hjigk = rstuwv['exec'](lkjinm);) if (cfgdbe['push'](hjigk), hjigk[0x1]) return cfgdbe;
}var _dprsoq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _djlhigk = new RegExp('[\\-\\.0-9' + _dprsoq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _ddcbgfe = new RegExp('^' + _dprsoq['source'] + _djlhigk['source'] + '*(?::' + _dprsoq['source'] + _djlhigk['source'] + '*)?$'),
    _dvtxuyw = 0x0,
    _dfedcgh = 0x1,
    _dnmklij = 0x2,
    _dpmlonk = 0x3,
    _dgkijfh = 0x4,
    _dtsruq = 0x5,
    _dbdcae = 0x6,
    _dgifejh = 0x7;_dvuwyxz['prototype'] = { 'parse': function (_$y10, hlmj, $3_20) {
    var _301$ = this['domBuilder'];_301$['startDocument'](), _dptrqso(hlmj, hlmj = {}), _d$1_z0y(_$y10, hlmj, $3_20, _301$, this['errorHandler']), _301$['endDocument']();
  } }, _dgfedc['prototype'] = { 'setTagName': function (ihjfg) {
    if (!_ddcbgfe['test'](ihjfg)) throw new Error('invalid tagName:' + ihjfg);this['tagName'] = ihjfg;
  }, 'add': function (utwvr, fghjik, nolmpk) {
    if (!_ddcbgfe['test'](utwvr)) throw new Error('invalid attribute:' + utwvr);this[this['length']++] = { 'qName': utwvr, 'value': fghjik, 'offset': nolmpk };
  }, 'length': 0x0, 'getLocalName': function (_2$10z) {
    return this[_2$10z]['localName'];
  }, 'getLocator': function (tpsqro) {
    return this[tpsqro]['locator'];
  }, 'getQName': function (nmloj) {
    return this[nmloj]['qName'];
  }, 'getURI': function (bfeac) {
    return this[bfeac]['uri'];
  }, 'getValue': function (x_zy$0) {
    return this[x_zy$0]['value'];
  } }, _dtsoqp({}, _dtsoqp['prototype']) instanceof _dtsoqp || (_dtsoqp = function (jkhlmi, rpnqom) {
  function xuzw() {}xuzw['prototype'] = rpnqom, xuzw = new xuzw();for (rpnqom in jkhlmi) xuzw[rpnqom] = jkhlmi[rpnqom];return xuzw;
}), exports['XMLReader'] = _dvuwyxz;