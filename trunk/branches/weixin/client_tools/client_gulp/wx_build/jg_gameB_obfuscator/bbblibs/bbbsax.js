var _ = wx.y$;
function _dxyzvu() {}function _dsnrop(twusvx, kljmih, figkjh, optqsr, ecdfb) {
  function yvwz(kmnlji) {
    if (kmnlji > 0xffff) {
      kmnlji -= 0x10000;var $wyx = 0xd800 + (kmnlji >> 0xa),
          pqormn = 0xdc00 + (0x3ff & kmnlji);return String['fromCharCode']($wyx, pqormn);
    }return String['fromCharCode'](kmnlji);
  }function nropsq(hcdfg) {
    var pqo = hcdfg['slice'](0x1, -0x1);return pqo in figkjh ? figkjh[pqo] : '#' === pqo['charAt'](0x0) ? yvwz(parseInt(pqo['substr'](0x1)['replace']('x', '0x'))) : (ecdfb['error']('entity not found:' + hcdfg), hcdfg);
  }function gkfhij(rsuqt) {
    if (rsuqt > _21$3) {
      var topq = twusvx['substring'](_21$3, rsuqt)['replace'](/&#?\w+;/g, nropsq);klnij && y1$0(_21$3), optqsr['characters'](topq, 0x0, rsuqt - _21$3), _21$3 = rsuqt;
    }
  }function y1$0(z_yxw$, ejihg) {
    for (; z_yxw$ >= lihkjm && (ejihg = jonmkl['exec'](twusvx));) $yxvw = ejihg['index'], lihkjm = $yxvw + ejihg[0x0]['length'], klnij['lineNumber']++;klnij['columnNumber'] = z_yxw$ - $yxvw + 0x1;
  }for (var $yxvw = 0x0, lihkjm = 0x0, jonmkl = /.*(?:\r\n?|\n)|.*$/g, klnij = optqsr['locator'], xzy_w$ = [{ 'currentNSMap': kljmih }], fbace = {}, _21$3 = 0x0;;) {
    try {
      var dfigeh = twusvx['indexOf']('<', _21$3);if (0x0 > dfigeh) {
        if (!twusvx['substr'](_21$3)['match'](/^\s*$/)) {
          var khgjf = optqsr['doc'],
              qvstru = khgjf['createTextNode'](twusvx['substr'](_21$3));khgjf['appendChild'](qvstru), optqsr['currentElement'] = qvstru;
        }return;
      }switch (dfigeh > _21$3 && gkfhij(dfigeh), twusvx['charAt'](dfigeh + 0x1)) {case '/':
          var vustrw = twusvx['indexOf']('>', dfigeh + 0x3),
              xz_yw$ = twusvx['substring'](dfigeh + 0x2, vustrw),
              kpln = xzy_w$['pop']();0x0 > vustrw ? (xz_yw$ = twusvx['substring'](dfigeh + 0x2)['replace'](/[\s<].*/, ''), ecdfb['error']('end tag name: ' + xz_yw$ + ' is not complete:' + kpln['tagName']), vustrw = dfigeh + 0x1 + xz_yw$['length']) : xz_yw$['match'](/\s</) && (xz_yw$ = xz_yw$['replace'](/[\s<].*/, ''), ecdfb['error']('end tag name: ' + xz_yw$ + ' maybe not complete'), vustrw = dfigeh + 0x1 + xz_yw$['length']);var cbdeaf = kpln['localNSMap'],
              kfghj = kpln['tagName'] == xz_yw$,
              uqrv = kfghj || kpln['tagName'] && kpln['tagName']['toLowerCase']() == xz_yw$['toLowerCase']();if (uqrv) {
            if (optqsr['endElement'](kpln['uri'], kpln['localName'], xz_yw$), cbdeaf) {
              for (var lo in cbdeaf) optqsr['endPrefixMapping'](lo);
            }kfghj || ecdfb['fatalError']('end tag name: ' + xz_yw$ + ' is not match the current start tagName:' + kpln['tagName']);
          } else xzy_w$['push'](kpln);vustrw++;break;case '?':
          klnij && y1$0(dfigeh), vustrw = _dutrq(twusvx, dfigeh, optqsr);break;case '!':
          klnij && y1$0(dfigeh), vustrw = _d$0yzx_(twusvx, dfigeh, optqsr, ecdfb);break;default:
          klnij && y1$0(dfigeh);var kiglh = new _drpoqt(),
              upstr = xzy_w$[xzy_w$['length'] - 0x1]['currentNSMap'],
              vustrw = _donmlp(twusvx, dfigeh, kiglh, upstr, nropsq, ecdfb),
              rponq = kiglh['length'];if (!kiglh['closed'] && _dv$wzyx(twusvx, vustrw, kiglh['tagName'], fbace) && (kiglh['closed'] = !0x0, figkjh['nbsp'] || ecdfb['warning']('unclosed xml attribute')), klnij && rponq) {
            for (var fdeab = _dkljomn(klnij, {}), rwvsu = 0x0; rponq > rwvsu; rwvsu++) {
              var hki = kiglh[rwvsu];y1$0(hki['offset']), hki['locator'] = _dkljomn(klnij, {});
            }optqsr['locator'] = fdeab, _drno(kiglh, optqsr, upstr) && xzy_w$['push'](kiglh), optqsr['locator'] = klnij;
          } else _drno(kiglh, optqsr, upstr) && xzy_w$['push'](kiglh);'http://www.w3.org/1999/xhtml' !== kiglh['uri'] || kiglh['closed'] ? vustrw++ : vustrw = _dkno(twusvx, vustrw, kiglh['tagName'], nropsq, optqsr);}
    } catch (lnim) {
      ecdfb['error']('element parse error: ' + lnim), vustrw = -0x1;
    }vustrw > _21$3 ? _21$3 = vustrw : gkfhij(Math['max'](dfigeh, _21$3) + 0x1);
  }
}function _dkljomn(mrq, lmkop) {
  return lmkop['lineNumber'] = mrq['lineNumber'], lmkop['columnNumber'] = mrq['columnNumber'], lmkop;
}function _donmlp($10, eafdc, jknol, _0243, yxzvw$, mrnq) {
  for (var wvtsux, sutpq, v$wyz = ++eafdc, fbadce = _dnjmli;;) {
    var nkjlmi = $10['charAt'](v$wyz);switch (nkjlmi) {case '=':
        if (fbadce === _dy0_x) wvtsux = $10['slice'](eafdc, v$wyz), fbadce = _dnmqplo;else {
          if (fbadce !== _dcafd) throw new Error('attribute equal must after attrName');fbadce = _dnmqplo;
        }break;case '\x27':case '\x22':
        if (fbadce === _dnmqplo || fbadce === _dy0_x) {
          if (fbadce === _dy0_x && (mrnq['warning']('attribute value must after "="'), wvtsux = $10['slice'](eafdc, v$wyz)), eafdc = v$wyz + 0x1, v$wyz = $10['indexOf'](nkjlmi, eafdc), !(v$wyz > 0x0)) throw new Error('attribute value no end \'' + nkjlmi + '\' match');sutpq = $10['slice'](eafdc, v$wyz)['replace'](/&#?\w+;/g, yxzvw$), jknol['add'](wvtsux, sutpq, eafdc - 0x1), fbadce = _dtrvuws;
        } else {
          if (fbadce != _dehdfig) throw new Error('attribute value must after "="');sutpq = $10['slice'](eafdc, v$wyz)['replace'](/&#?\w+;/g, yxzvw$), jknol['add'](wvtsux, sutpq, eafdc), mrnq['warning']('attribute "' + wvtsux + '" missed start quot(' + nkjlmi + ')!!'), eafdc = v$wyz + 0x1, fbadce = _dtrvuws;
        }break;case '/':
        switch (fbadce) {case _dnjmli:
            jknol['setTagName']($10['slice'](eafdc, v$wyz));case _dtrvuws:case _dzwyv$x:case _dlnpomk:
            fbadce = _dlnpomk, jknol['closed'] = !0x0;case _dehdfig:case _dy0_x:case _dcafd:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mrnq['error']('unexpected end of input'), fbadce == _dnjmli && jknol['setTagName']($10['slice'](eafdc, v$wyz)), v$wyz;case '>':
        switch (fbadce) {case _dnjmli:
            jknol['setTagName']($10['slice'](eafdc, v$wyz));case _dtrvuws:case _dzwyv$x:case _dlnpomk:
            break;case _dehdfig:case _dy0_x:
            sutpq = $10['slice'](eafdc, v$wyz), '/' === sutpq['slice'](-0x1) && (jknol['closed'] = !0x0, sutpq = sutpq['slice'](0x0, -0x1));case _dcafd:
            fbadce === _dcafd && (sutpq = wvtsux), fbadce == _dehdfig ? (mrnq['warning']('attribute "' + sutpq + '" missed quot(")!!'), jknol['add'](wvtsux, sutpq['replace'](/&#?\w+;/g, yxzvw$), eafdc)) : ('http://www.w3.org/1999/xhtml' === _0243[''] && sutpq['match'](/^(?:disabled|checked|selected)$/i) || mrnq['warning']('attribute "' + sutpq + '" missed value!! "' + sutpq + '" instead!!'), jknol['add'](sutpq, sutpq, eafdc));break;case _dnmqplo:
            throw new Error('attribute value missed!!');}return v$wyz;case '\u0080':
        nkjlmi = '\x20';default:
        if ('\x20' >= nkjlmi) switch (fbadce) {case _dnjmli:
            jknol['setTagName']($10['slice'](eafdc, v$wyz)), fbadce = _dzwyv$x;break;case _dy0_x:
            wvtsux = $10['slice'](eafdc, v$wyz), fbadce = _dcafd;break;case _dehdfig:
            var sutpq = $10['slice'](eafdc, v$wyz)['replace'](/&#?\w+;/g, yxzvw$);mrnq['warning']('attribute "' + sutpq + '" missed quot(")!!'), jknol['add'](wvtsux, sutpq, eafdc);case _dtrvuws:
            fbadce = _dzwyv$x;} else switch (fbadce) {case _dcafd:
            {
              jknol['tagName'];
            }'http://www.w3.org/1999/xhtml' === _0243[''] && wvtsux['match'](/^(?:disabled|checked|selected)$/i) || mrnq['warning']('attribute "' + wvtsux + '" missed value!! "' + wvtsux + '" instead2!!'), jknol['add'](wvtsux, wvtsux, eafdc), eafdc = v$wyz, fbadce = _dy0_x;break;case _dtrvuws:
            mrnq['warning']('attribute space is required"' + wvtsux + '\x22!!');case _dzwyv$x:
            fbadce = _dy0_x, eafdc = v$wyz;break;case _dnmqplo:
            fbadce = _dehdfig, eafdc = v$wyz;break;case _dlnpomk:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}v$wyz++;
  }
}function _drno(utrsvw, toqrps, xvsutw) {
  for (var vsqur = utrsvw['tagName'], mijlk = null, befgdc = utrsvw['length']; befgdc--;) {
    var echgdf = utrsvw[befgdc],
        $yxvz = echgdf['qName'],
        npqo = echgdf['value'],
        opkmn = $yxvz['indexOf'](':');if (opkmn > 0x0) var uwtxsv = echgdf['prefix'] = $yxvz['slice'](0x0, opkmn),
        prutsq = $yxvz['slice'](opkmn + 0x1),
        y$xzwv = 'xmlns' === uwtxsv && prutsq;else prutsq = $yxvz, uwtxsv = null, y$xzwv = 'xmlns' === $yxvz && '';echgdf['localName'] = prutsq, y$xzwv !== !0x1 && (null == mijlk && (mijlk = {}, _dqpmro(xvsutw, xvsutw = {})), xvsutw[y$xzwv] = mijlk[y$xzwv] = npqo, echgdf['uri'] = 'http://www.w3.org/2000/xmlns/', toqrps['startPrefixMapping'](y$xzwv, npqo));
  }for (var befgdc = utrsvw['length']; befgdc--;) {
    echgdf = utrsvw[befgdc];var uwtxsv = echgdf['prefix'];uwtxsv && ('xml' === uwtxsv && (echgdf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== uwtxsv && (echgdf['uri'] = xvsutw[uwtxsv || '']));
  }var opkmn = vsqur['indexOf'](':');opkmn > 0x0 ? (uwtxsv = utrsvw['prefix'] = vsqur['slice'](0x0, opkmn), prutsq = utrsvw['localName'] = vsqur['slice'](opkmn + 0x1)) : (uwtxsv = null, prutsq = utrsvw['localName'] = vsqur);var nlimkj = utrsvw['uri'] = xvsutw[uwtxsv || ''];if (toqrps['startElement'](nlimkj, prutsq, vsqur, utrsvw), !utrsvw['closed']) return utrsvw['currentNSMap'] = xvsutw, utrsvw['localNSMap'] = mijlk, !0x0;if (toqrps['endElement'](nlimkj, prutsq, vsqur), mijlk) {
    for (uwtxsv in mijlk) toqrps['endPrefixMapping'](uwtxsv);
  }
}function _dkno(rusqv, tpoqrs, _023$, gfbdc, rnoqp) {
  if (/^(?:script|textarea)$/i['test'](_023$)) {
    var hjl = rusqv['indexOf']('</' + _023$ + '>', tpoqrs),
        rqmpo = rusqv['substring'](tpoqrs + 0x1, hjl);if (/[&<]/['test'](rqmpo)) return (/^script$/i['test'](_023$) ? (rnoqp['characters'](rqmpo, 0x0, rqmpo['length']), hjl) : (rqmpo = rqmpo['replace'](/&#?\w+;/g, gfbdc), rnoqp['characters'](rqmpo, 0x0, rqmpo['length']), hjl)
    );
  }return tpoqrs + 0x1;
}function _dv$wzyx(olpnmk, mkj, uvxtw, yx$vzw) {
  var snqrop = yx$vzw[uvxtw];return null == snqrop && (snqrop = olpnmk['lastIndexOf']('</' + uvxtw + '>'), mkj > snqrop && (snqrop = olpnmk['lastIndexOf']('</' + uvxtw)), yx$vzw[uvxtw] = snqrop), mkj > snqrop;
}function _dqpmro(xswvt, hljkim) {
  for (var bgdec in xswvt) hljkim[bgdec] = xswvt[bgdec];
}function _d$0yzx_(jlkgi, opsnq, lmkonp, fcbad) {
  var _zy0$ = jlkgi['charAt'](opsnq + 0x2);switch (_zy0$) {case '-':
      if ('-' === jlkgi['charAt'](opsnq + 0x3)) {
        var fdgbec = jlkgi['indexOf']('-->', opsnq + 0x4);return fdgbec > opsnq ? (lmkonp['comment'](jlkgi, opsnq + 0x4, fdgbec - opsnq - 0x4), fdgbec + 0x3) : (fcbad['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jlkgi['substr'](opsnq + 0x3, 0x6)) {
        var fdgbec = jlkgi['indexOf'](']]>', opsnq + 0x9);return lmkonp['startCDATA'](), lmkonp['characters'](jlkgi, opsnq + 0x9, fdgbec - opsnq - 0x9), lmkonp['endCDATA'](), fdgbec + 0x3;
      }var glikjh = _dy0z_1$(jlkgi, opsnq),
          jnikml = glikjh['length'];if (jnikml > 0x1 && /!doctype/i['test'](glikjh[0x0][0x0])) {
        var hfegc = glikjh[0x1][0x0],
            nlmkjo = jnikml > 0x3 && /^public$/i['test'](glikjh[0x2][0x0]) && glikjh[0x3][0x0],
            urvtq = jnikml > 0x4 && glikjh[0x4][0x0],
            dfgehi = glikjh[jnikml - 0x1];return lmkonp['startDTD'](hfegc, nlmkjo && nlmkjo['replace'](/^(['"])(.*?)\1$/, '$2'), urvtq && urvtq['replace'](/^(['"])(.*?)\1$/, '$2')), lmkonp['endDTD'](), dfgehi['index'] + dfgehi[0x0]['length'];
      }}return -0x1;
}function _dutrq(surqp, rmno, ruwtv) {
  var klmop = surqp['indexOf']('?>', rmno);if (klmop) {
    var mqpn = surqp['substring'](rmno, klmop)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mqpn) {
      {
        mqpn[0x0]['length'];
      }return ruwtv['processingInstruction'](mqpn[0x1], mqpn[0x2]), klmop + 0x2;
    }return -0x1;
  }return -0x1;
}function _drpoqt() {}function _dimljnk(knlopm, lkjimn) {
  return knlopm['__proto__'] = lkjimn, knlopm;
}function _dy0z_1$(xvwyut, gilkh) {
  var lqnpm,
      oqsrn = [],
      vyx$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vyx$['lastIndex'] = gilkh, vyx$['exec'](xvwyut); lqnpm = vyx$['exec'](xvwyut);) if (oqsrn['push'](lqnpm), lqnpm[0x1]) return oqsrn;
}var _dknpol = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _doqspr = new RegExp('[\\-\\.0-9' + _dknpol['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _duvwyt = new RegExp('^' + _dknpol['source'] + _doqspr['source'] + '*(?::' + _dknpol['source'] + _doqspr['source'] + '*)?$'),
    _dnjmli = 0x0,
    _dy0_x = 0x1,
    _dcafd = 0x2,
    _dnmqplo = 0x3,
    _dehdfig = 0x4,
    _dtrvuws = 0x5,
    _dzwyv$x = 0x6,
    _dlnpomk = 0x7;_dxyzvu['prototype'] = { 'parse': function (gdifh, qmpnr, njkm) {
    var dafbce = this['domBuilder'];dafbce['startDocument'](), _dqpmro(qmpnr, qmpnr = {}), _dsnrop(gdifh, qmpnr, njkm, dafbce, this['errorHandler']), dafbce['endDocument']();
  } }, _drpoqt['prototype'] = { 'setTagName': function (yz$x_0) {
    if (!_duvwyt['test'](yz$x_0)) throw new Error('invalid tagName:' + yz$x_0);this['tagName'] = yz$x_0;
  }, 'add': function (strqvu, w_zxy, twuxs) {
    if (!_duvwyt['test'](strqvu)) throw new Error('invalid attribute:' + strqvu);this[this['length']++] = { 'qName': strqvu, 'value': w_zxy, 'offset': twuxs };
  }, 'length': 0x0, 'getLocalName': function (orsnq) {
    return this[orsnq]['localName'];
  }, 'getLocator': function (ejfi) {
    return this[ejfi]['locator'];
  }, 'getQName': function (qpoln) {
    return this[qpoln]['qName'];
  }, 'getURI': function (yzx_$0) {
    return this[yzx_$0]['uri'];
  }, 'getValue': function (yz0x$_) {
    return this[yz0x$_]['value'];
  } }, _dimljnk({}, _dimljnk['prototype']) instanceof _dimljnk || (_dimljnk = function (ikhlmj, ihkgj) {
  function jkglhi() {}jkglhi['prototype'] = ihkgj, jkglhi = new jkglhi();for (ihkgj in ikhlmj) jkglhi[ihkgj] = ikhlmj[ihkgj];return jkglhi;
}), exports['XMLReader'] = _dxyzvu;