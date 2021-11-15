var _ = wx.y$;
function _decg() {}function _dnopmql(mopnr, suwtvx, ronqps, ebafc, gdcb) {
  function _12$0(tsxu) {
    if (tsxu > 0xffff) {
      tsxu -= 0x10000;var jimklh = 0xd800 + (tsxu >> 0xa),
          njlim = 0xdc00 + (0x3ff & tsxu);return String['fromCharCode'](jimklh, njlim);
    }return String['fromCharCode'](tsxu);
  }function uwts(tporqs) {
    var jnlom = tporqs['slice'](0x1, -0x1);return jnlom in ronqps ? ronqps[jnlom] : '#' === jnlom['charAt'](0x0) ? _12$0(parseInt(jnlom['substr'](0x1)['replace']('x', '0x'))) : (gdcb['error']('entity not found:' + tporqs), tporqs);
  }function omljn(himjlk) {
    if (himjlk > wtvxu) {
      var rsonq = mopnr['substring'](wtvxu, himjlk)['replace'](/&#?\w+;/g, uwts);mjlni && rnpmqo(wtvxu), ebafc['characters'](rsonq, 0x0, himjlk - wtvxu), wtvxu = himjlk;
    }
  }function rnpmqo(hgkjfi, sropnq) {
    for (; hgkjfi >= tvrqu && (sropnq = omknpl['exec'](mopnr));) jfgih = sropnq['index'], tvrqu = jfgih + sropnq[0x0]['length'], mjlni['lineNumber']++;mjlni['columnNumber'] = hgkjfi - jfgih + 0x1;
  }for (var jfgih = 0x0, tvrqu = 0x0, omknpl = /.*(?:\r\n?|\n)|.*$/g, mjlni = ebafc['locator'], jnml = [{ 'currentNSMap': suwtvx }], degfb = {}, wtvxu = 0x0;;) {
    try {
      var ytuwvx = mopnr['indexOf']('<', wtvxu);if (0x0 > ytuwvx) {
        if (!mopnr['substr'](wtvxu)['match'](/^\s*$/)) {
          var vtuxwy = ebafc['doc'],
              hdegi = vtuxwy['createTextNode'](mopnr['substr'](wtvxu));vtuxwy['appendChild'](hdegi), ebafc['currentElement'] = hdegi;
        }return;
      }switch (ytuwvx > wtvxu && omljn(ytuwvx), mopnr['charAt'](ytuwvx + 0x1)) {case '/':
          var jlhgk = mopnr['indexOf']('>', ytuwvx + 0x3),
              kojnm = mopnr['substring'](ytuwvx + 0x2, jlhgk),
              uvyt = jnml['pop']();0x0 > jlhgk ? (kojnm = mopnr['substring'](ytuwvx + 0x2)['replace'](/[\s<].*/, ''), gdcb['error']('end tag name: ' + kojnm + ' is not complete:' + uvyt['tagName']), jlhgk = ytuwvx + 0x1 + kojnm['length']) : kojnm['match'](/\s</) && (kojnm = kojnm['replace'](/[\s<].*/, ''), gdcb['error']('end tag name: ' + kojnm + ' maybe not complete'), jlhgk = ytuwvx + 0x1 + kojnm['length']);var qostp = uvyt['localNSMap'],
              tsvxu = uvyt['tagName'] == kojnm,
              wvuxz = tsvxu || uvyt['tagName'] && uvyt['tagName']['toLowerCase']() == kojnm['toLowerCase']();if (wvuxz) {
            if (ebafc['endElement'](uvyt['uri'], uvyt['localName'], kojnm), qostp) {
              for (var orqnm in qostp) ebafc['endPrefixMapping'](orqnm);
            }tsvxu || gdcb['fatalError']('end tag name: ' + kojnm + ' is not match the current start tagName:' + uvyt['tagName']);
          } else jnml['push'](uvyt);jlhgk++;break;case '?':
          mjlni && rnpmqo(ytuwvx), jlhgk = _dkljh(mopnr, ytuwvx, ebafc);break;case '!':
          mjlni && rnpmqo(ytuwvx), jlhgk = _digjhfk(mopnr, ytuwvx, ebafc, gdcb);break;default:
          mjlni && rnpmqo(ytuwvx);var soptq = new _dbfae(),
              snro = jnml[jnml['length'] - 0x1]['currentNSMap'],
              jlhgk = _dqrpson(mopnr, ytuwvx, soptq, snro, uwts, gdcb),
              yxzu = soptq['length'];if (!soptq['closed'] && _dmjl(mopnr, jlhgk, soptq['tagName'], degfb) && (soptq['closed'] = !0x0, ronqps['nbsp'] || gdcb['warning']('unclosed xml attribute')), mjlni && yxzu) {
            for (var gcfbd = _d_13042(mjlni, {}), vxwst = 0x0; yxzu > vxwst; vxwst++) {
              var hkilgj = soptq[vxwst];rnpmqo(hkilgj['offset']), hkilgj['locator'] = _d_13042(mjlni, {});
            }ebafc['locator'] = gcfbd, _drspt(soptq, ebafc, snro) && jnml['push'](soptq), ebafc['locator'] = mjlni;
          } else _drspt(soptq, ebafc, snro) && jnml['push'](soptq);'http://www.w3.org/1999/xhtml' !== soptq['uri'] || soptq['closed'] ? jlhgk++ : jlhgk = _dspqt(mopnr, jlhgk, soptq['tagName'], uwts, ebafc);}
    } catch (orpnm) {
      gdcb['error']('element parse error: ' + orpnm), jlhgk = -0x1;
    }jlhgk > wtvxu ? wtvxu = jlhgk : omljn(Math['max'](ytuwvx, wtvxu) + 0x1);
  }
}function _d_13042(rqomp, _3201) {
  return _3201['lineNumber'] = rqomp['lineNumber'], _3201['columnNumber'] = rqomp['columnNumber'], _3201;
}function _dqrpson(yz$_10, gfced, kmnopl, fgb, fhijg, uvtyw) {
  for (var vuqs, zy$_x, lq = ++gfced, pqsrot = _dehgidf;;) {
    var stur = yz$_10['charAt'](lq);switch (stur) {case '=':
        if (pqsrot === _dqvur) vuqs = yz$_10['slice'](gfced, lq), pqsrot = _dgfihd;else {
          if (pqsrot !== _dfjkigh) throw new Error('attribute equal must after attrName');pqsrot = _dgfihd;
        }break;case '\x27':case '\x22':
        if (pqsrot === _dgfihd || pqsrot === _dqvur) {
          if (pqsrot === _dqvur && (uvtyw['warning']('attribute value must after "="'), vuqs = yz$_10['slice'](gfced, lq)), gfced = lq + 0x1, lq = yz$_10['indexOf'](stur, gfced), !(lq > 0x0)) throw new Error('attribute value no end \'' + stur + '\' match');zy$_x = yz$_10['slice'](gfced, lq)['replace'](/&#?\w+;/g, fhijg), kmnopl['add'](vuqs, zy$_x, gfced - 0x1), pqsrot = _ddfe;
        } else {
          if (pqsrot != _drvuwt) throw new Error('attribute value must after "="');zy$_x = yz$_10['slice'](gfced, lq)['replace'](/&#?\w+;/g, fhijg), kmnopl['add'](vuqs, zy$_x, gfced), uvtyw['warning']('attribute "' + vuqs + '" missed start quot(' + stur + ')!!'), gfced = lq + 0x1, pqsrot = _ddfe;
        }break;case '/':
        switch (pqsrot) {case _dehgidf:
            kmnopl['setTagName'](yz$_10['slice'](gfced, lq));case _ddfe:case _dfceda:case _duswvr:
            pqsrot = _duswvr, kmnopl['closed'] = !0x0;case _drvuwt:case _dqvur:case _dfjkigh:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return uvtyw['error']('unexpected end of input'), pqsrot == _dehgidf && kmnopl['setTagName'](yz$_10['slice'](gfced, lq)), lq;case '>':
        switch (pqsrot) {case _dehgidf:
            kmnopl['setTagName'](yz$_10['slice'](gfced, lq));case _ddfe:case _dfceda:case _duswvr:
            break;case _drvuwt:case _dqvur:
            zy$_x = yz$_10['slice'](gfced, lq), '/' === zy$_x['slice'](-0x1) && (kmnopl['closed'] = !0x0, zy$_x = zy$_x['slice'](0x0, -0x1));case _dfjkigh:
            pqsrot === _dfjkigh && (zy$_x = vuqs), pqsrot == _drvuwt ? (uvtyw['warning']('attribute "' + zy$_x + '" missed quot(")!!'), kmnopl['add'](vuqs, zy$_x['replace'](/&#?\w+;/g, fhijg), gfced)) : ('http://www.w3.org/1999/xhtml' === fgb[''] && zy$_x['match'](/^(?:disabled|checked|selected)$/i) || uvtyw['warning']('attribute "' + zy$_x + '" missed value!! "' + zy$_x + '" instead!!'), kmnopl['add'](zy$_x, zy$_x, gfced));break;case _dgfihd:
            throw new Error('attribute value missed!!');}return lq;case '\u0080':
        stur = '\x20';default:
        if ('\x20' >= stur) switch (pqsrot) {case _dehgidf:
            kmnopl['setTagName'](yz$_10['slice'](gfced, lq)), pqsrot = _dfceda;break;case _dqvur:
            vuqs = yz$_10['slice'](gfced, lq), pqsrot = _dfjkigh;break;case _drvuwt:
            var zy$_x = yz$_10['slice'](gfced, lq)['replace'](/&#?\w+;/g, fhijg);uvtyw['warning']('attribute "' + zy$_x + '" missed quot(")!!'), kmnopl['add'](vuqs, zy$_x, gfced);case _ddfe:
            pqsrot = _dfceda;} else switch (pqsrot) {case _dfjkigh:
            {
              kmnopl['tagName'];
            }'http://www.w3.org/1999/xhtml' === fgb[''] && vuqs['match'](/^(?:disabled|checked|selected)$/i) || uvtyw['warning']('attribute "' + vuqs + '" missed value!! "' + vuqs + '" instead2!!'), kmnopl['add'](vuqs, vuqs, gfced), gfced = lq, pqsrot = _dqvur;break;case _ddfe:
            uvtyw['warning']('attribute space is required"' + vuqs + '\x22!!');case _dfceda:
            pqsrot = _dqvur, gfced = lq;break;case _dgfihd:
            pqsrot = _drvuwt, gfced = lq;break;case _duswvr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}lq++;
  }
}function _drspt(zyxw_$, olnpmq, txuywv) {
  for (var ghijef = zyxw_$['tagName'], sqotrp = null, otqp = zyxw_$['length']; otqp--;) {
    var ejhif = zyxw_$[otqp],
        xzwy_$ = ejhif['qName'],
        tsrqop = ejhif['value'],
        cdegf = xzwy_$['indexOf'](':');if (cdegf > 0x0) var hcdge = ejhif['prefix'] = xzwy_$['slice'](0x0, cdegf),
        $xy_0z = xzwy_$['slice'](cdegf + 0x1),
        qpnrm = 'xmlns' === hcdge && $xy_0z;else $xy_0z = xzwy_$, hcdge = null, qpnrm = 'xmlns' === xzwy_$ && '';ejhif['localName'] = $xy_0z, qpnrm !== !0x1 && (null == sqotrp && (sqotrp = {}, _dwvrus(txuywv, txuywv = {})), txuywv[qpnrm] = sqotrp[qpnrm] = tsrqop, ejhif['uri'] = 'http://www.w3.org/2000/xmlns/', olnpmq['startPrefixMapping'](qpnrm, tsrqop));
  }for (var otqp = zyxw_$['length']; otqp--;) {
    ejhif = zyxw_$[otqp];var hcdge = ejhif['prefix'];hcdge && ('xml' === hcdge && (ejhif['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hcdge && (ejhif['uri'] = txuywv[hcdge || '']));
  }var cdegf = ghijef['indexOf'](':');cdegf > 0x0 ? (hcdge = zyxw_$['prefix'] = ghijef['slice'](0x0, cdegf), $xy_0z = zyxw_$['localName'] = ghijef['slice'](cdegf + 0x1)) : (hcdge = null, $xy_0z = zyxw_$['localName'] = ghijef);var vutsw = zyxw_$['uri'] = txuywv[hcdge || ''];if (olnpmq['startElement'](vutsw, $xy_0z, ghijef, zyxw_$), !zyxw_$['closed']) return zyxw_$['currentNSMap'] = txuywv, zyxw_$['localNSMap'] = sqotrp, !0x0;if (olnpmq['endElement'](vutsw, $xy_0z, ghijef), sqotrp) {
    for (hcdge in sqotrp) olnpmq['endPrefixMapping'](hcdge);
  }
}function _dspqt(spuqtr, wuxyv, feigjh, defhig, soq) {
  if (/^(?:script|textarea)$/i['test'](feigjh)) {
    var xzyw_$ = spuqtr['indexOf']('</' + feigjh + '>', wuxyv),
        rtsq = spuqtr['substring'](wuxyv + 0x1, xzyw_$);if (/[&<]/['test'](rtsq)) return (/^script$/i['test'](feigjh) ? (soq['characters'](rtsq, 0x0, rtsq['length']), xzyw_$) : (rtsq = rtsq['replace'](/&#?\w+;/g, defhig), soq['characters'](rtsq, 0x0, rtsq['length']), xzyw_$)
    );
  }return wuxyv + 0x1;
}function _dmjl(kjhigl, tqspo, _yz$1, nqmplo) {
  var fchdge = nqmplo[_yz$1];return null == fchdge && (fchdge = kjhigl['lastIndexOf']('</' + _yz$1 + '>'), tqspo > fchdge && (fchdge = kjhigl['lastIndexOf']('</' + _yz$1)), nqmplo[_yz$1] = fchdge), tqspo > fchdge;
}function _dwvrus(x_w$zy, fie) {
  for (var uyxwz in x_w$zy) fie[uyxwz] = x_w$zy[uyxwz];
}function _digjhfk(bgecdf, rqpso, hkimjl, qonlpm) {
  var xwyu = bgecdf['charAt'](rqpso + 0x2);switch (xwyu) {case '-':
      if ('-' === bgecdf['charAt'](rqpso + 0x3)) {
        var xy0$_ = bgecdf['indexOf']('-->', rqpso + 0x4);return xy0$_ > rqpso ? (hkimjl['comment'](bgecdf, rqpso + 0x4, xy0$_ - rqpso - 0x4), xy0$_ + 0x3) : (qonlpm['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bgecdf['substr'](rqpso + 0x3, 0x6)) {
        var xy0$_ = bgecdf['indexOf'](']]>', rqpso + 0x9);return hkimjl['startCDATA'](), hkimjl['characters'](bgecdf, rqpso + 0x9, xy0$_ - rqpso - 0x9), hkimjl['endCDATA'](), xy0$_ + 0x3;
      }var xz0y = _dsuxtvw(bgecdf, rqpso),
          xsut = xz0y['length'];if (xsut > 0x1 && /!doctype/i['test'](xz0y[0x0][0x0])) {
        var _0$zx = xz0y[0x1][0x0],
            egfhij = xsut > 0x3 && /^public$/i['test'](xz0y[0x2][0x0]) && xz0y[0x3][0x0],
            pnlmok = xsut > 0x4 && xz0y[0x4][0x0],
            kghlij = xz0y[xsut - 0x1];return hkimjl['startDTD'](_0$zx, egfhij && egfhij['replace'](/^(['"])(.*?)\1$/, '$2'), pnlmok && pnlmok['replace'](/^(['"])(.*?)\1$/, '$2')), hkimjl['endDTD'](), kghlij['index'] + kghlij[0x0]['length'];
      }}return -0x1;
}function _dkljh(_x0zy, twuxvs, plkm) {
  var vtrus = _x0zy['indexOf']('?>', twuxvs);if (vtrus) {
    var qsptro = _x0zy['substring'](twuxvs, vtrus)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qsptro) {
      {
        qsptro[0x0]['length'];
      }return plkm['processingInstruction'](qsptro[0x1], qsptro[0x2]), vtrus + 0x2;
    }return -0x1;
  }return -0x1;
}function _dbfae() {}function _dkopmnl(lijnkm, mlknj) {
  return lijnkm['__proto__'] = mlknj, lijnkm;
}function _dsuxtvw(v$xwyz, gijkf) {
  var inkj,
      uswvtr = [],
      ihgjf = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ihgjf['lastIndex'] = gijkf, ihgjf['exec'](v$xwyz); inkj = ihgjf['exec'](v$xwyz);) if (uswvtr['push'](inkj), inkj[0x1]) return uswvtr;
}var _dlnkom = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dmlqnp = new RegExp('[\\-\\.0-9' + _dlnkom['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _ddbfceg = new RegExp('^' + _dlnkom['source'] + _dmlqnp['source'] + '*(?::' + _dlnkom['source'] + _dmlqnp['source'] + '*)?$'),
    _dehgidf = 0x0,
    _dqvur = 0x1,
    _dfjkigh = 0x2,
    _dgfihd = 0x3,
    _drvuwt = 0x4,
    _ddfe = 0x5,
    _dfceda = 0x6,
    _duswvr = 0x7;_decg['prototype'] = { 'parse': function (jminl, hilkj, nr) {
    var tvs = this['domBuilder'];tvs['startDocument'](), _dwvrus(hilkj, hilkj = {}), _dnopmql(jminl, hilkj, nr, tvs, this['errorHandler']), tvs['endDocument']();
  } }, _dbfae['prototype'] = { 'setTagName': function (tyxvwu) {
    if (!_ddbfceg['test'](tyxvwu)) throw new Error('invalid tagName:' + tyxvwu);this['tagName'] = tyxvwu;
  }, 'add': function (ihegjf, hilmjk, jonklm) {
    if (!_ddbfceg['test'](ihegjf)) throw new Error('invalid attribute:' + ihegjf);this[this['length']++] = { 'qName': ihegjf, 'value': hilmjk, 'offset': jonklm };
  }, 'length': 0x0, 'getLocalName': function (usrvqt) {
    return this[usrvqt]['localName'];
  }, 'getLocator': function (srwu) {
    return this[srwu]['locator'];
  }, 'getQName': function (uvwy) {
    return this[uvwy]['qName'];
  }, 'getURI': function (ejhg) {
    return this[ejhg]['uri'];
  }, 'getValue': function (stopr) {
    return this[stopr]['value'];
  } }, _dkopmnl({}, _dkopmnl['prototype']) instanceof _dkopmnl || (_dkopmnl = function (edcfgh, wuyvxz) {
  function likh() {}likh['prototype'] = wuyvxz, likh = new likh();for (wuyvxz in edcfgh) likh[wuyvxz] = edcfgh[wuyvxz];return likh;
}), exports['XMLReader'] = _decg;