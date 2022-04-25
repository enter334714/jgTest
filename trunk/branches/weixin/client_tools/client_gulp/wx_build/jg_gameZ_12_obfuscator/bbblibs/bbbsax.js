var _ = wx.y$;
function _dnpkolm() {}function _dwvy$x(orqsn, mhjil, sutrwv, ijfghe, ropst) {
  function rqmonp(sop) {
    if (sop > 0xffff) {
      sop -= 0x10000;var difhg = 0xd800 + (sop >> 0xa),
          lkjmno = 0xdc00 + (0x3ff & sop);return String['fromCharCode'](difhg, lkjmno);
    }return String['fromCharCode'](sop);
  }function cfegbd(ljknmo) {
    var molnp = ljknmo['slice'](0x1, -0x1);return molnp in sutrwv ? sutrwv[molnp] : '#' === molnp['charAt'](0x0) ? rqmonp(parseInt(molnp['substr'](0x1)['replace']('x', '0x'))) : (ropst['error']('entity not found:' + ljknmo), ljknmo);
  }function $y1_z(njli) {
    if (njli > dbefac) {
      var imjnkl = orqsn['substring'](dbefac, njli)['replace'](/&#?\w+;/g, cfegbd);feb && jigfeh(dbefac), ijfghe['characters'](imjnkl, 0x0, njli - dbefac), dbefac = njli;
    }
  }function jigfeh(pnlomk, xvsuw) {
    for (; pnlomk >= $zxwvy && (xvsuw = gkil['exec'](orqsn));) rwvts = xvsuw['index'], $zxwvy = rwvts + xvsuw[0x0]['length'], feb['lineNumber']++;feb['columnNumber'] = pnlomk - rwvts + 0x1;
  }for (var rwvts = 0x0, $zxwvy = 0x0, gkil = /.*(?:\r\n?|\n)|.*$/g, feb = ijfghe['locator'], yz_x0$ = [{ 'currentNSMap': mhjil }], z$vxy = {}, dbefac = 0x0;;) {
    try {
      var qpmnro = orqsn['indexOf']('<', dbefac);if (0x0 > qpmnro) {
        if (!orqsn['substr'](dbefac)['match'](/^\s*$/)) {
          var nkolpm = ijfghe['doc'],
              ejigf = nkolpm['createTextNode'](orqsn['substr'](dbefac));nkolpm['appendChild'](ejigf), ijfghe['currentElement'] = ejigf;
        }return;
      }switch (qpmnro > dbefac && $y1_z(qpmnro), orqsn['charAt'](qpmnro + 0x1)) {case '/':
          var snpq = orqsn['indexOf']('>', qpmnro + 0x3),
              onrs = orqsn['substring'](qpmnro + 0x2, snpq),
              higlj = yz_x0$['pop']();0x0 > snpq ? (onrs = orqsn['substring'](qpmnro + 0x2)['replace'](/[\s<].*/, ''), ropst['error']('end tag name: ' + onrs + ' is not complete:' + higlj['tagName']), snpq = qpmnro + 0x1 + onrs['length']) : onrs['match'](/\s</) && (onrs = onrs['replace'](/[\s<].*/, ''), ropst['error']('end tag name: ' + onrs + ' maybe not complete'), snpq = qpmnro + 0x1 + onrs['length']);var okmjnl = higlj['localNSMap'],
              fcghe = higlj['tagName'] == onrs,
              jiknl = fcghe || higlj['tagName'] && higlj['tagName']['toLowerCase']() == onrs['toLowerCase']();if (jiknl) {
            if (ijfghe['endElement'](higlj['uri'], higlj['localName'], onrs), okmjnl) {
              for (var vyuxz in okmjnl) ijfghe['endPrefixMapping'](vyuxz);
            }fcghe || ropst['fatalError']('end tag name: ' + onrs + ' is not match the current start tagName:' + higlj['tagName']);
          } else yz_x0$['push'](higlj);snpq++;break;case '?':
          feb && jigfeh(qpmnro), snpq = _doprnqs(orqsn, qpmnro, ijfghe);break;case '!':
          feb && jigfeh(qpmnro), snpq = _dpkolnm(orqsn, qpmnro, ijfghe, ropst);break;default:
          feb && jigfeh(qpmnro);var qprnmo = new _dqtrsu(),
              vxuw = yz_x0$[yz_x0$['length'] - 0x1]['currentNSMap'],
              snpq = _dz0_2(orqsn, qpmnro, qprnmo, vxuw, cfegbd, ropst),
              moqlpn = qprnmo['length'];if (!qprnmo['closed'] && _doqln(orqsn, snpq, qprnmo['tagName'], z$vxy) && (qprnmo['closed'] = !0x0, sutrwv['nbsp'] || ropst['warning']('unclosed xml attribute')), feb && moqlpn) {
            for (var wvyuz = _dmhjikl(feb, {}), gihdef = 0x0; moqlpn > gihdef; gihdef++) {
              var pqutr = qprnmo[gihdef];jigfeh(pqutr['offset']), pqutr['locator'] = _dmhjikl(feb, {});
            }ijfghe['locator'] = wvyuz, _dxtyuw(qprnmo, ijfghe, vxuw) && yz_x0$['push'](qprnmo), ijfghe['locator'] = feb;
          } else _dxtyuw(qprnmo, ijfghe, vxuw) && yz_x0$['push'](qprnmo);'http://www.w3.org/1999/xhtml' !== qprnmo['uri'] || qprnmo['closed'] ? snpq++ : snpq = _ddgfie(orqsn, snpq, qprnmo['tagName'], cfegbd, ijfghe);}
    } catch (fbdc) {
      ropst['error']('element parse error: ' + fbdc), snpq = -0x1;
    }snpq > dbefac ? dbefac = snpq : $y1_z(Math['max'](qpmnro, dbefac) + 0x1);
  }
}function _dmhjikl(protsq, tsoq) {
  return tsoq['lineNumber'] = protsq['lineNumber'], tsoq['columnNumber'] = protsq['columnNumber'], tsoq;
}function _dz0_2(yvzx, suqpt, yxw$v, kjmnl, $zy_10, qptsr) {
  for (var lkgih, mnpoq, uwzyxv = ++suqpt, _$0xyz = _d$zy10;;) {
    var x_0$ = yvzx['charAt'](uwzyxv);switch (x_0$) {case '=':
        if (_$0xyz === _dwtsx) lkgih = yvzx['slice'](suqpt, uwzyxv), _$0xyz = _dkifg;else {
          if (_$0xyz !== _defijhg) throw new Error('attribute equal must after attrName');_$0xyz = _dkifg;
        }break;case '\x27':case '\x22':
        if (_$0xyz === _dkifg || _$0xyz === _dwtsx) {
          if (_$0xyz === _dwtsx && (qptsr['warning']('attribute value must after "="'), lkgih = yvzx['slice'](suqpt, uwzyxv)), suqpt = uwzyxv + 0x1, uwzyxv = yvzx['indexOf'](x_0$, suqpt), !(uwzyxv > 0x0)) throw new Error('attribute value no end \'' + x_0$ + '\' match');mnpoq = yvzx['slice'](suqpt, uwzyxv)['replace'](/&#?\w+;/g, $zy_10), yxw$v['add'](lkgih, mnpoq, suqpt - 0x1), _$0xyz = _dkljmih;
        } else {
          if (_$0xyz != _dehgfji) throw new Error('attribute value must after "="');mnpoq = yvzx['slice'](suqpt, uwzyxv)['replace'](/&#?\w+;/g, $zy_10), yxw$v['add'](lkgih, mnpoq, suqpt), qptsr['warning']('attribute "' + lkgih + '" missed start quot(' + x_0$ + ')!!'), suqpt = uwzyxv + 0x1, _$0xyz = _dkljmih;
        }break;case '/':
        switch (_$0xyz) {case _d$zy10:
            yxw$v['setTagName'](yvzx['slice'](suqpt, uwzyxv));case _dkljmih:case _dstrupq:case _dnmpoql:
            _$0xyz = _dnmpoql, yxw$v['closed'] = !0x0;case _dehgfji:case _dwtsx:case _defijhg:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qptsr['error']('unexpected end of input'), _$0xyz == _d$zy10 && yxw$v['setTagName'](yvzx['slice'](suqpt, uwzyxv)), uwzyxv;case '>':
        switch (_$0xyz) {case _d$zy10:
            yxw$v['setTagName'](yvzx['slice'](suqpt, uwzyxv));case _dkljmih:case _dstrupq:case _dnmpoql:
            break;case _dehgfji:case _dwtsx:
            mnpoq = yvzx['slice'](suqpt, uwzyxv), '/' === mnpoq['slice'](-0x1) && (yxw$v['closed'] = !0x0, mnpoq = mnpoq['slice'](0x0, -0x1));case _defijhg:
            _$0xyz === _defijhg && (mnpoq = lkgih), _$0xyz == _dehgfji ? (qptsr['warning']('attribute "' + mnpoq + '" missed quot(")!!'), yxw$v['add'](lkgih, mnpoq['replace'](/&#?\w+;/g, $zy_10), suqpt)) : ('http://www.w3.org/1999/xhtml' === kjmnl[''] && mnpoq['match'](/^(?:disabled|checked|selected)$/i) || qptsr['warning']('attribute "' + mnpoq + '" missed value!! "' + mnpoq + '" instead!!'), yxw$v['add'](mnpoq, mnpoq, suqpt));break;case _dkifg:
            throw new Error('attribute value missed!!');}return uwzyxv;case '\u0080':
        x_0$ = '\x20';default:
        if ('\x20' >= x_0$) switch (_$0xyz) {case _d$zy10:
            yxw$v['setTagName'](yvzx['slice'](suqpt, uwzyxv)), _$0xyz = _dstrupq;break;case _dwtsx:
            lkgih = yvzx['slice'](suqpt, uwzyxv), _$0xyz = _defijhg;break;case _dehgfji:
            var mnpoq = yvzx['slice'](suqpt, uwzyxv)['replace'](/&#?\w+;/g, $zy_10);qptsr['warning']('attribute "' + mnpoq + '" missed quot(")!!'), yxw$v['add'](lkgih, mnpoq, suqpt);case _dkljmih:
            _$0xyz = _dstrupq;} else switch (_$0xyz) {case _defijhg:
            {
              yxw$v['tagName'];
            }'http://www.w3.org/1999/xhtml' === kjmnl[''] && lkgih['match'](/^(?:disabled|checked|selected)$/i) || qptsr['warning']('attribute "' + lkgih + '" missed value!! "' + lkgih + '" instead2!!'), yxw$v['add'](lkgih, lkgih, suqpt), suqpt = uwzyxv, _$0xyz = _dwtsx;break;case _dkljmih:
            qptsr['warning']('attribute space is required"' + lkgih + '\x22!!');case _dstrupq:
            _$0xyz = _dwtsx, suqpt = uwzyxv;break;case _dkifg:
            _$0xyz = _dehgfji, suqpt = uwzyxv;break;case _dnmpoql:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}uwzyxv++;
  }
}function _dxtyuw(lnpqm, spuqtr, ponrm) {
  for (var wzyuvx = lnpqm['tagName'], olmjnk = null, gljk = lnpqm['length']; gljk--;) {
    var uvsrq = lnpqm[gljk],
        giej = uvsrq['qName'],
        lnmpk = uvsrq['value'],
        _x0z$ = giej['indexOf'](':');if (_x0z$ > 0x0) var z$02 = uvsrq['prefix'] = giej['slice'](0x0, _x0z$),
        hjmki = giej['slice'](_x0z$ + 0x1),
        pnrqos = 'xmlns' === z$02 && hjmki;else hjmki = giej, z$02 = null, pnrqos = 'xmlns' === giej && '';uvsrq['localName'] = hjmki, pnrqos !== !0x1 && (null == olmjnk && (olmjnk = {}, _djnkmli(ponrm, ponrm = {})), ponrm[pnrqos] = olmjnk[pnrqos] = lnmpk, uvsrq['uri'] = 'http://www.w3.org/2000/xmlns/', spuqtr['startPrefixMapping'](pnrqos, lnmpk));
  }for (var gljk = lnpqm['length']; gljk--;) {
    uvsrq = lnpqm[gljk];var z$02 = uvsrq['prefix'];z$02 && ('xml' === z$02 && (uvsrq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== z$02 && (uvsrq['uri'] = ponrm[z$02 || '']));
  }var _x0z$ = wzyuvx['indexOf'](':');_x0z$ > 0x0 ? (z$02 = lnpqm['prefix'] = wzyuvx['slice'](0x0, _x0z$), hjmki = lnpqm['localName'] = wzyuvx['slice'](_x0z$ + 0x1)) : (z$02 = null, hjmki = lnpqm['localName'] = wzyuvx);var jnlkim = lnpqm['uri'] = ponrm[z$02 || ''];if (spuqtr['startElement'](jnlkim, hjmki, wzyuvx, lnpqm), !lnpqm['closed']) return lnpqm['currentNSMap'] = ponrm, lnpqm['localNSMap'] = olmjnk, !0x0;if (spuqtr['endElement'](jnlkim, hjmki, wzyuvx), olmjnk) {
    for (z$02 in olmjnk) spuqtr['endPrefixMapping'](z$02);
  }
}function _ddgfie(fecdb, tuswvx, vstru, oqmrpn, igjhe) {
  if (/^(?:script|textarea)$/i['test'](vstru)) {
    var rsno = fecdb['indexOf']('</' + vstru + '>', tuswvx),
        suvtq = fecdb['substring'](tuswvx + 0x1, rsno);if (/[&<]/['test'](suvtq)) return (/^script$/i['test'](vstru) ? (igjhe['characters'](suvtq, 0x0, suvtq['length']), rsno) : (suvtq = suvtq['replace'](/&#?\w+;/g, oqmrpn), igjhe['characters'](suvtq, 0x0, suvtq['length']), rsno)
    );
  }return tuswvx + 0x1;
}function _doqln(uwsvt, gjhikf, hjgie, $01z) {
  var dfgh = $01z[hjgie];return null == dfgh && (dfgh = uwsvt['lastIndexOf']('</' + hjgie + '>'), gjhikf > dfgh && (dfgh = uwsvt['lastIndexOf']('</' + hjgie)), $01z[hjgie] = dfgh), gjhikf > dfgh;
}function _djnkmli(uvyxz, mnjik) {
  for (var mlnki in uvyxz) mnjik[mlnki] = uvyxz[mlnki];
}function _dpkolnm(tspo, mnkoj, ornpqs, ihgljk) {
  var mploqn = tspo['charAt'](mnkoj + 0x2);switch (mploqn) {case '-':
      if ('-' === tspo['charAt'](mnkoj + 0x3)) {
        var tor = tspo['indexOf']('-->', mnkoj + 0x4);return tor > mnkoj ? (ornpqs['comment'](tspo, mnkoj + 0x4, tor - mnkoj - 0x4), tor + 0x3) : (ihgljk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == tspo['substr'](mnkoj + 0x3, 0x6)) {
        var tor = tspo['indexOf'](']]>', mnkoj + 0x9);return ornpqs['startCDATA'](), ornpqs['characters'](tspo, mnkoj + 0x9, tor - mnkoj - 0x9), ornpqs['endCDATA'](), tor + 0x3;
      }var utwvy = _dhjklgi(tspo, mnkoj),
          rpson = utwvy['length'];if (rpson > 0x1 && /!doctype/i['test'](utwvy[0x0][0x0])) {
        var sorqn = utwvy[0x1][0x0],
            xy_ = rpson > 0x3 && /^public$/i['test'](utwvy[0x2][0x0]) && utwvy[0x3][0x0],
            hfejig = rpson > 0x4 && utwvy[0x4][0x0],
            hkj = utwvy[rpson - 0x1];return ornpqs['startDTD'](sorqn, xy_ && xy_['replace'](/^(['"])(.*?)\1$/, '$2'), hfejig && hfejig['replace'](/^(['"])(.*?)\1$/, '$2')), ornpqs['endDTD'](), hkj['index'] + hkj[0x0]['length'];
      }}return -0x1;
}function _doprnqs(oknj, trsuqv, vtsruw) {
  var fcbdeg = oknj['indexOf']('?>', trsuqv);if (fcbdeg) {
    var $z02_ = oknj['substring'](trsuqv, fcbdeg)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($z02_) {
      {
        $z02_[0x0]['length'];
      }return vtsruw['processingInstruction']($z02_[0x1], $z02_[0x2]), fcbdeg + 0x2;
    }return -0x1;
  }return -0x1;
}function _dqtrsu() {}function _dlmknpo(efcab, kgifjh) {
  return efcab['__proto__'] = kgifjh, efcab;
}function _dhjklgi(xwutsv, idegfh) {
  var x$zwvy,
      pnqso = [],
      kjhgif = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kjhgif['lastIndex'] = idegfh, kjhgif['exec'](xwutsv); x$zwvy = kjhgif['exec'](xwutsv);) if (pnqso['push'](x$zwvy), x$zwvy[0x1]) return pnqso;
}var _dcfdeab = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _duvrwt = new RegExp('[\\-\\.0-9' + _dcfdeab['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _djigl = new RegExp('^' + _dcfdeab['source'] + _duvrwt['source'] + '*(?::' + _dcfdeab['source'] + _duvrwt['source'] + '*)?$'),
    _d$zy10 = 0x0,
    _dwtsx = 0x1,
    _defijhg = 0x2,
    _dkifg = 0x3,
    _dehgfji = 0x4,
    _dkljmih = 0x5,
    _dstrupq = 0x6,
    _dnmpoql = 0x7;_dnpkolm['prototype'] = { 'parse': function (wvrt, kmoln, _$01zy) {
    var kponm = this['domBuilder'];kponm['startDocument'](), _djnkmli(kmoln, kmoln = {}), _dwvy$x(wvrt, kmoln, _$01zy, kponm, this['errorHandler']), kponm['endDocument']();
  } }, _dqtrsu['prototype'] = { 'setTagName': function (lknjim) {
    if (!_djigl['test'](lknjim)) throw new Error('invalid tagName:' + lknjim);this['tagName'] = lknjim;
  }, 'add': function (kmjhil, wyuzxv, jgihfe) {
    if (!_djigl['test'](kmjhil)) throw new Error('invalid attribute:' + kmjhil);this[this['length']++] = { 'qName': kmjhil, 'value': wyuzxv, 'offset': jgihfe };
  }, 'length': 0x0, 'getLocalName': function (kglhji) {
    return this[kglhji]['localName'];
  }, 'getLocator': function (oknlp) {
    return this[oknlp]['locator'];
  }, 'getQName': function (qrtv) {
    return this[qrtv]['qName'];
  }, 'getURI': function (fkgi) {
    return this[fkgi]['uri'];
  }, 'getValue': function (nomqlp) {
    return this[nomqlp]['value'];
  } }, _dlmknpo({}, _dlmknpo['prototype']) instanceof _dlmknpo || (_dlmknpo = function (wtxyuv, rutvqs) {
  function mqnrpo() {}mqnrpo['prototype'] = rutvqs, mqnrpo = new mqnrpo();for (rutvqs in wtxyuv) mqnrpo[rutvqs] = wtxyuv[rutvqs];return mqnrpo;
}), exports['XMLReader'] = _dnpkolm;