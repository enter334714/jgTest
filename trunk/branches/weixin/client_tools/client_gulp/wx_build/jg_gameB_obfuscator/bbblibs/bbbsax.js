var _ = wx.y$;
function _dxwy$vz() {}function _dus(mojnl, y_1z$0, z02_1, rmopnq, dcebgf) {
  function dfgeh(vzwuy) {
    if (vzwuy > 0xffff) {
      vzwuy -= 0x10000;var kmjno = 0xd800 + (vzwuy >> 0xa),
          ijefgh = 0xdc00 + (0x3ff & vzwuy);return String['fromCharCode'](kmjno, ijefgh);
    }return String['fromCharCode'](vzwuy);
  }function mkjnl(stw) {
    var mpqln = stw['slice'](0x1, -0x1);return mpqln in z02_1 ? z02_1[mpqln] : '#' === mpqln['charAt'](0x0) ? dfgeh(parseInt(mpqln['substr'](0x1)['replace']('x', '0x'))) : (dcebgf['error']('entity not found:' + stw), stw);
  }function fhjegi(x$zywv) {
    if (x$zywv > qnmplo) {
      var rtuqvs = mojnl['substring'](qnmplo, x$zywv)['replace'](/&#?\w+;/g, mkjnl);ecgdh && acdef(qnmplo), rmopnq['characters'](rtuqvs, 0x0, x$zywv - qnmplo), qnmplo = x$zywv;
    }
  }function acdef(utqpr, pnmolk) {
    for (; utqpr >= hecfgd && (pnmolk = ljkhig['exec'](mojnl));) $012 = pnmolk['index'], hecfgd = $012 + pnmolk[0x0]['length'], ecgdh['lineNumber']++;ecgdh['columnNumber'] = utqpr - $012 + 0x1;
  }for (var $012 = 0x0, hecfgd = 0x0, ljkhig = /.*(?:\r\n?|\n)|.*$/g, ecgdh = rmopnq['locator'], gefchd = [{ 'currentNSMap': y_1z$0 }], z_$yxw = {}, qnmplo = 0x0;;) {
    try {
      var qompln = mojnl['indexOf']('<', qnmplo);if (0x0 > qompln) {
        if (!mojnl['substr'](qnmplo)['match'](/^\s*$/)) {
          var bcafde = rmopnq['doc'],
              mlonpk = bcafde['createTextNode'](mojnl['substr'](qnmplo));bcafde['appendChild'](mlonpk), rmopnq['currentElement'] = mlonpk;
        }return;
      }switch (qompln > qnmplo && fhjegi(qompln), mojnl['charAt'](qompln + 0x1)) {case '/':
          var deghf = mojnl['indexOf']('>', qompln + 0x3),
              rpnosq = mojnl['substring'](qompln + 0x2, deghf),
              lomkj = gefchd['pop']();0x0 > deghf ? (rpnosq = mojnl['substring'](qompln + 0x2)['replace'](/[\s<].*/, ''), dcebgf['error']('end tag name: ' + rpnosq + ' is not complete:' + lomkj['tagName']), deghf = qompln + 0x1 + rpnosq['length']) : rpnosq['match'](/\s</) && (rpnosq = rpnosq['replace'](/[\s<].*/, ''), dcebgf['error']('end tag name: ' + rpnosq + ' maybe not complete'), deghf = qompln + 0x1 + rpnosq['length']);var ropmqn = lomkj['localNSMap'],
              jfgkhi = lomkj['tagName'] == rpnosq,
              opsrn = jfgkhi || lomkj['tagName'] && lomkj['tagName']['toLowerCase']() == rpnosq['toLowerCase']();if (opsrn) {
            if (rmopnq['endElement'](lomkj['uri'], lomkj['localName'], rpnosq), ropmqn) {
              for (var ljhk in ropmqn) rmopnq['endPrefixMapping'](ljhk);
            }jfgkhi || dcebgf['fatalError']('end tag name: ' + rpnosq + ' is not match the current start tagName:' + lomkj['tagName']);
          } else gefchd['push'](lomkj);deghf++;break;case '?':
          ecgdh && acdef(qompln), deghf = _deihgfd(mojnl, qompln, rmopnq);break;case '!':
          ecgdh && acdef(qompln), deghf = _dwvtrsu(mojnl, qompln, rmopnq, dcebgf);break;default:
          ecgdh && acdef(qompln);var ifgedh = new _dkghjfi(),
              $01zy_ = gefchd[gefchd['length'] - 0x1]['currentNSMap'],
              deghf = _dmknolp(mojnl, qompln, ifgedh, $01zy_, mkjnl, dcebgf),
              igjlkh = ifgedh['length'];if (!ifgedh['closed'] && _dpnmqo(mojnl, deghf, ifgedh['tagName'], z_$yxw) && (ifgedh['closed'] = !0x0, z02_1['nbsp'] || dcebgf['warning']('unclosed xml attribute')), ecgdh && igjlkh) {
            for (var _$213 = _dz10_$y(ecgdh, {}), monljk = 0x0; igjlkh > monljk; monljk++) {
              var y0_zx$ = ifgedh[monljk];acdef(y0_zx$['offset']), y0_zx$['locator'] = _dz10_$y(ecgdh, {});
            }rmopnq['locator'] = _$213, _dvyzxuw(ifgedh, rmopnq, $01zy_) && gefchd['push'](ifgedh), rmopnq['locator'] = ecgdh;
          } else _dvyzxuw(ifgedh, rmopnq, $01zy_) && gefchd['push'](ifgedh);'http://www.w3.org/1999/xhtml' !== ifgedh['uri'] || ifgedh['closed'] ? deghf++ : deghf = _d$_zy0(mojnl, deghf, ifgedh['tagName'], mkjnl, rmopnq);}
    } catch (qtpsor) {
      dcebgf['error']('element parse error: ' + qtpsor), deghf = -0x1;
    }deghf > qnmplo ? qnmplo = deghf : fhjegi(Math['max'](qompln, qnmplo) + 0x1);
  }
}function _dz10_$y(yz0_$1, $yx_z) {
  return $yx_z['lineNumber'] = yz0_$1['lineNumber'], $yx_z['columnNumber'] = yz0_$1['columnNumber'], $yx_z;
}function _dmknolp(vtwsux, ghkfi, qtos, noplmq, mhjlk, imhl) {
  for (var vut, txuvws, wy$v = ++ghkfi, vywzx = _dnqmrop;;) {
    var $_012z = vtwsux['charAt'](wy$v);switch ($_012z) {case '=':
        if (vywzx === _dqnopmr) vut = vtwsux['slice'](ghkfi, wy$v), vywzx = _dvwustx;else {
          if (vywzx !== _dechdfg) throw new Error('attribute equal must after attrName');vywzx = _dvwustx;
        }break;case '\x27':case '\x22':
        if (vywzx === _dvwustx || vywzx === _dqnopmr) {
          if (vywzx === _dqnopmr && (imhl['warning']('attribute value must after "="'), vut = vtwsux['slice'](ghkfi, wy$v)), ghkfi = wy$v + 0x1, wy$v = vtwsux['indexOf']($_012z, ghkfi), !(wy$v > 0x0)) throw new Error('attribute value no end \'' + $_012z + '\' match');txuvws = vtwsux['slice'](ghkfi, wy$v)['replace'](/&#?\w+;/g, mhjlk), qtos['add'](vut, txuvws, ghkfi - 0x1), vywzx = _djikgfh;
        } else {
          if (vywzx != _dpqmln) throw new Error('attribute value must after "="');txuvws = vtwsux['slice'](ghkfi, wy$v)['replace'](/&#?\w+;/g, mhjlk), qtos['add'](vut, txuvws, ghkfi), imhl['warning']('attribute "' + vut + '" missed start quot(' + $_012z + ')!!'), ghkfi = wy$v + 0x1, vywzx = _djikgfh;
        }break;case '/':
        switch (vywzx) {case _dnqmrop:
            qtos['setTagName'](vtwsux['slice'](ghkfi, wy$v));case _djikgfh:case _dnklmoj:case _dplnoqm:
            vywzx = _dplnoqm, qtos['closed'] = !0x0;case _dpqmln:case _dqnopmr:case _dechdfg:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return imhl['error']('unexpected end of input'), vywzx == _dnqmrop && qtos['setTagName'](vtwsux['slice'](ghkfi, wy$v)), wy$v;case '>':
        switch (vywzx) {case _dnqmrop:
            qtos['setTagName'](vtwsux['slice'](ghkfi, wy$v));case _djikgfh:case _dnklmoj:case _dplnoqm:
            break;case _dpqmln:case _dqnopmr:
            txuvws = vtwsux['slice'](ghkfi, wy$v), '/' === txuvws['slice'](-0x1) && (qtos['closed'] = !0x0, txuvws = txuvws['slice'](0x0, -0x1));case _dechdfg:
            vywzx === _dechdfg && (txuvws = vut), vywzx == _dpqmln ? (imhl['warning']('attribute "' + txuvws + '" missed quot(")!!'), qtos['add'](vut, txuvws['replace'](/&#?\w+;/g, mhjlk), ghkfi)) : ('http://www.w3.org/1999/xhtml' === noplmq[''] && txuvws['match'](/^(?:disabled|checked|selected)$/i) || imhl['warning']('attribute "' + txuvws + '" missed value!! "' + txuvws + '" instead!!'), qtos['add'](txuvws, txuvws, ghkfi));break;case _dvwustx:
            throw new Error('attribute value missed!!');}return wy$v;case '\u0080':
        $_012z = '\x20';default:
        if ('\x20' >= $_012z) switch (vywzx) {case _dnqmrop:
            qtos['setTagName'](vtwsux['slice'](ghkfi, wy$v)), vywzx = _dnklmoj;break;case _dqnopmr:
            vut = vtwsux['slice'](ghkfi, wy$v), vywzx = _dechdfg;break;case _dpqmln:
            var txuvws = vtwsux['slice'](ghkfi, wy$v)['replace'](/&#?\w+;/g, mhjlk);imhl['warning']('attribute "' + txuvws + '" missed quot(")!!'), qtos['add'](vut, txuvws, ghkfi);case _djikgfh:
            vywzx = _dnklmoj;} else switch (vywzx) {case _dechdfg:
            {
              qtos['tagName'];
            }'http://www.w3.org/1999/xhtml' === noplmq[''] && vut['match'](/^(?:disabled|checked|selected)$/i) || imhl['warning']('attribute "' + vut + '" missed value!! "' + vut + '" instead2!!'), qtos['add'](vut, vut, ghkfi), ghkfi = wy$v, vywzx = _dqnopmr;break;case _djikgfh:
            imhl['warning']('attribute space is required"' + vut + '\x22!!');case _dnklmoj:
            vywzx = _dqnopmr, ghkfi = wy$v;break;case _dvwustx:
            vywzx = _dpqmln, ghkfi = wy$v;break;case _dplnoqm:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wy$v++;
  }
}function _dvyzxuw(yxvzuw, inklmj, x$) {
  for (var zwv$yx = yxvzuw['tagName'], ornm = null, mojlk = yxvzuw['length']; mojlk--;) {
    var vsuwtx = yxvzuw[mojlk],
        vwsux = vsuwtx['qName'],
        urtvw = vsuwtx['value'],
        kjhgi = vwsux['indexOf'](':');if (kjhgi > 0x0) var gdhef = vsuwtx['prefix'] = vwsux['slice'](0x0, kjhgi),
        ilhkg = vwsux['slice'](kjhgi + 0x1),
        qutr = 'xmlns' === gdhef && ilhkg;else ilhkg = vwsux, gdhef = null, qutr = 'xmlns' === vwsux && '';vsuwtx['localName'] = ilhkg, qutr !== !0x1 && (null == ornm && (ornm = {}, _djomkln(x$, x$ = {})), x$[qutr] = ornm[qutr] = urtvw, vsuwtx['uri'] = 'http://www.w3.org/2000/xmlns/', inklmj['startPrefixMapping'](qutr, urtvw));
  }for (var mojlk = yxvzuw['length']; mojlk--;) {
    vsuwtx = yxvzuw[mojlk];var gdhef = vsuwtx['prefix'];gdhef && ('xml' === gdhef && (vsuwtx['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gdhef && (vsuwtx['uri'] = x$[gdhef || '']));
  }var kjhgi = zwv$yx['indexOf'](':');kjhgi > 0x0 ? (gdhef = yxvzuw['prefix'] = zwv$yx['slice'](0x0, kjhgi), ilhkg = yxvzuw['localName'] = zwv$yx['slice'](kjhgi + 0x1)) : (gdhef = null, ilhkg = yxvzuw['localName'] = zwv$yx);var uqtpsr = yxvzuw['uri'] = x$[gdhef || ''];if (inklmj['startElement'](uqtpsr, ilhkg, zwv$yx, yxvzuw), !yxvzuw['closed']) return yxvzuw['currentNSMap'] = x$, yxvzuw['localNSMap'] = ornm, !0x0;if (inklmj['endElement'](uqtpsr, ilhkg, zwv$yx), ornm) {
    for (gdhef in ornm) inklmj['endPrefixMapping'](gdhef);
  }
}function _d$_zy0(egdb, bcade, yx$wv, rpmoqn, ebcdfg) {
  if (/^(?:script|textarea)$/i['test'](yx$wv)) {
    var cgdfe = egdb['indexOf']('</' + yx$wv + '>', bcade),
        ospqnr = egdb['substring'](bcade + 0x1, cgdfe);if (/[&<]/['test'](ospqnr)) return (/^script$/i['test'](yx$wv) ? (ebcdfg['characters'](ospqnr, 0x0, ospqnr['length']), cgdfe) : (ospqnr = ospqnr['replace'](/&#?\w+;/g, rpmoqn), ebcdfg['characters'](ospqnr, 0x0, ospqnr['length']), cgdfe)
    );
  }return bcade + 0x1;
}function _dpnmqo(ecafbd, rpnmoq, lkpmn, hmjli) {
  var _01zy = hmjli[lkpmn];return null == _01zy && (_01zy = ecafbd['lastIndexOf']('</' + lkpmn + '>'), rpnmoq > _01zy && (_01zy = ecafbd['lastIndexOf']('</' + lkpmn)), hmjli[lkpmn] = _01zy), rpnmoq > _01zy;
}function _djomkln(torsp, kpolnm) {
  for (var zxy_ in torsp) kpolnm[zxy_] = torsp[zxy_];
}function _dwvtrsu(qtrpso, vrqsu, prson, fjkihg) {
  var vxz = qtrpso['charAt'](vrqsu + 0x2);switch (vxz) {case '-':
      if ('-' === qtrpso['charAt'](vrqsu + 0x3)) {
        var stwrv = qtrpso['indexOf']('-->', vrqsu + 0x4);return stwrv > vrqsu ? (prson['comment'](qtrpso, vrqsu + 0x4, stwrv - vrqsu - 0x4), stwrv + 0x3) : (fjkihg['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qtrpso['substr'](vrqsu + 0x3, 0x6)) {
        var stwrv = qtrpso['indexOf'](']]>', vrqsu + 0x9);return prson['startCDATA'](), prson['characters'](qtrpso, vrqsu + 0x9, stwrv - vrqsu - 0x9), prson['endCDATA'](), stwrv + 0x3;
      }var mnlpko = _dxwyuvt(qtrpso, vrqsu),
          plmqo = mnlpko['length'];if (plmqo > 0x1 && /!doctype/i['test'](mnlpko[0x0][0x0])) {
        var ruwtvs = mnlpko[0x1][0x0],
            hefdcg = plmqo > 0x3 && /^public$/i['test'](mnlpko[0x2][0x0]) && mnlpko[0x3][0x0],
            _1$z02 = plmqo > 0x4 && mnlpko[0x4][0x0],
            dcbge = mnlpko[plmqo - 0x1];return prson['startDTD'](ruwtvs, hefdcg && hefdcg['replace'](/^(['"])(.*?)\1$/, '$2'), _1$z02 && _1$z02['replace'](/^(['"])(.*?)\1$/, '$2')), prson['endDTD'](), dcbge['index'] + dcbge[0x0]['length'];
      }}return -0x1;
}function _deihgfd(nos, vsrwut, qnomp) {
  var wstuvr = nos['indexOf']('?>', vsrwut);if (wstuvr) {
    var fcebda = nos['substring'](vsrwut, wstuvr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (fcebda) {
      {
        fcebda[0x0]['length'];
      }return qnomp['processingInstruction'](fcebda[0x1], fcebda[0x2]), wstuvr + 0x2;
    }return -0x1;
  }return -0x1;
}function _dkghjfi() {}function _dxyz0_$(kmjin, rosqnp) {
  return kmjin['__proto__'] = rosqnp, kmjin;
}function _dxwyuvt(chedf, rqmop) {
  var xuwzv,
      jihfe = [],
      cdeafb = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (cdeafb['lastIndex'] = rqmop, cdeafb['exec'](chedf); xuwzv = cdeafb['exec'](chedf);) if (jihfe['push'](xuwzv), xuwzv[0x1]) return jihfe;
}var _dqml = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dehdfcg = new RegExp('[\\-\\.0-9' + _dqml['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dusrqtv = new RegExp('^' + _dqml['source'] + _dehdfcg['source'] + '*(?::' + _dqml['source'] + _dehdfcg['source'] + '*)?$'),
    _dnqmrop = 0x0,
    _dqnopmr = 0x1,
    _dechdfg = 0x2,
    _dvwustx = 0x3,
    _dpqmln = 0x4,
    _djikgfh = 0x5,
    _dnklmoj = 0x6,
    _dplnoqm = 0x7;_dxwy$vz['prototype'] = { 'parse': function ($_z2, mljihk, qsprut) {
    var vurswt = this['domBuilder'];vurswt['startDocument'](), _djomkln(mljihk, mljihk = {}), _dus($_z2, mljihk, qsprut, vurswt, this['errorHandler']), vurswt['endDocument']();
  } }, _dkghjfi['prototype'] = { 'setTagName': function (fdcba) {
    if (!_dusrqtv['test'](fdcba)) throw new Error('invalid tagName:' + fdcba);this['tagName'] = fdcba;
  }, 'add': function (wvstr, vurqts, cdfabe) {
    if (!_dusrqtv['test'](wvstr)) throw new Error('invalid attribute:' + wvstr);this[this['length']++] = { 'qName': wvstr, 'value': vurqts, 'offset': cdfabe };
  }, 'length': 0x0, 'getLocalName': function (z21_$) {
    return this[z21_$]['localName'];
  }, 'getLocator': function (kimlh) {
    return this[kimlh]['locator'];
  }, 'getQName': function (imlkhj) {
    return this[imlkhj]['qName'];
  }, 'getURI': function (rnqom) {
    return this[rnqom]['uri'];
  }, 'getValue': function (z0y$_) {
    return this[z0y$_]['value'];
  } }, _dxyz0_$({}, _dxyz0_$['prototype']) instanceof _dxyz0_$ || (_dxyz0_$ = function (ecfd, $y0_z) {
  function ebcgdf() {}ebcgdf['prototype'] = $y0_z, ebcgdf = new ebcgdf();for ($y0_z in ecfd) ebcgdf[$y0_z] = ecfd[$y0_z];return ebcgdf;
}), exports['XMLReader'] = _dxwy$vz;