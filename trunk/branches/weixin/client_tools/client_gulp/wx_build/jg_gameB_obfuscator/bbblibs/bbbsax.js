var _ = wx.y$;
function _dnpqso() {}function _dgjeifh(cedabf, cbfged, jimnk, $0_2z1, gihfd) {
  function cgf(uxvtyw) {
    if (uxvtyw > 0xffff) {
      uxvtyw -= 0x10000;var zwy$x_ = 0xd800 + (uxvtyw >> 0xa),
          vsux = 0xdc00 + (0x3ff & uxvtyw);return String['fromCharCode'](zwy$x_, vsux);
    }return String['fromCharCode'](uxvtyw);
  }function lpomqn(olknmp) {
    var hjegi = olknmp['slice'](0x1, -0x1);return hjegi in jimnk ? jimnk[hjegi] : '#' === hjegi['charAt'](0x0) ? cgf(parseInt(hjegi['substr'](0x1)['replace']('x', '0x'))) : (gihfd['error']('entity not found:' + olknmp), olknmp);
  }function jli(efdcba) {
    if (efdcba > chefgd) {
      var tuvsx = cedabf['substring'](chefgd, efdcba)['replace'](/&#?\w+;/g, lpomqn);z1$_0y && $zwv(chefgd), $0_2z1['characters'](tuvsx, 0x0, efdcba - chefgd), chefgd = efdcba;
    }
  }function $zwv(vwyuxt, gklijh) {
    for (; vwyuxt >= ruqtps && (gklijh = mnqp['exec'](cedabf));) jmilkh = gklijh['index'], ruqtps = jmilkh + gklijh[0x0]['length'], z1$_0y['lineNumber']++;z1$_0y['columnNumber'] = vwyuxt - jmilkh + 0x1;
  }for (var jmilkh = 0x0, ruqtps = 0x0, mnqp = /.*(?:\r\n?|\n)|.*$/g, z1$_0y = $0_2z1['locator'], jgk = [{ 'currentNSMap': cbfged }], hkfjig = {}, chefgd = 0x0;;) {
    try {
      var wuvrts = cedabf['indexOf']('<', chefgd);if (0x0 > wuvrts) {
        if (!cedabf['substr'](chefgd)['match'](/^\s*$/)) {
          var gdfbec = $0_2z1['doc'],
              ihgdf = gdfbec['createTextNode'](cedabf['substr'](chefgd));gdfbec['appendChild'](ihgdf), $0_2z1['currentElement'] = ihgdf;
        }return;
      }switch (wuvrts > chefgd && jli(wuvrts), cedabf['charAt'](wuvrts + 0x1)) {case '/':
          var $_y10 = cedabf['indexOf']('>', wuvrts + 0x3),
              kjhgi = cedabf['substring'](wuvrts + 0x2, $_y10),
              z2_1$ = jgk['pop']();0x0 > $_y10 ? (kjhgi = cedabf['substring'](wuvrts + 0x2)['replace'](/[\s<].*/, ''), gihfd['error']('end tag name: ' + kjhgi + ' is not complete:' + z2_1$['tagName']), $_y10 = wuvrts + 0x1 + kjhgi['length']) : kjhgi['match'](/\s</) && (kjhgi = kjhgi['replace'](/[\s<].*/, ''), gihfd['error']('end tag name: ' + kjhgi + ' maybe not complete'), $_y10 = wuvrts + 0x1 + kjhgi['length']);var qusvt = z2_1$['localNSMap'],
              ihjge = z2_1$['tagName'] == kjhgi,
              nlmpq = ihjge || z2_1$['tagName'] && z2_1$['tagName']['toLowerCase']() == kjhgi['toLowerCase']();if (nlmpq) {
            if ($0_2z1['endElement'](z2_1$['uri'], z2_1$['localName'], kjhgi), qusvt) {
              for (var nkolj in qusvt) $0_2z1['endPrefixMapping'](nkolj);
            }ihjge || gihfd['fatalError']('end tag name: ' + kjhgi + ' is not match the current start tagName:' + z2_1$['tagName']);
          } else jgk['push'](z2_1$);$_y10++;break;case '?':
          z1$_0y && $zwv(wuvrts), $_y10 = _dhgiej(cedabf, wuvrts, $0_2z1);break;case '!':
          z1$_0y && $zwv(wuvrts), $_y10 = _dy0xz$(cedabf, wuvrts, $0_2z1, gihfd);break;default:
          z1$_0y && $zwv(wuvrts);var edif = new _dhcfgd(),
              ijkh = jgk[jgk['length'] - 0x1]['currentNSMap'],
              $_y10 = _dw$xyz_(cedabf, wuvrts, edif, ijkh, lpomqn, gihfd),
              dhefgc = edif['length'];if (!edif['closed'] && _dsrvwt(cedabf, $_y10, edif['tagName'], hkfjig) && (edif['closed'] = !0x0, jimnk['nbsp'] || gihfd['warning']('unclosed xml attribute')), z1$_0y && dhefgc) {
            for (var njomkl = _dzx_y0$(z1$_0y, {}), rtups = 0x0; dhefgc > rtups; rtups++) {
              var gjheif = edif[rtups];$zwv(gjheif['offset']), gjheif['locator'] = _dzx_y0$(z1$_0y, {});
            }$0_2z1['locator'] = njomkl, _d_zx$yw(edif, $0_2z1, ijkh) && jgk['push'](edif), $0_2z1['locator'] = z1$_0y;
          } else _d_zx$yw(edif, $0_2z1, ijkh) && jgk['push'](edif);'http://www.w3.org/1999/xhtml' !== edif['uri'] || edif['closed'] ? $_y10++ : $_y10 = _dstvr(cedabf, $_y10, edif['tagName'], lpomqn, $0_2z1);}
    } catch (pqmln) {
      gihfd['error']('element parse error: ' + pqmln), $_y10 = -0x1;
    }$_y10 > chefgd ? chefgd = $_y10 : jli(Math['max'](wuvrts, chefgd) + 0x1);
  }
}function _dzx_y0$(pkomln, ejfih) {
  return ejfih['lineNumber'] = pkomln['lineNumber'], ejfih['columnNumber'] = pkomln['columnNumber'], ejfih;
}function _dw$xyz_(rpnoqs, w$_yzx, z_1$y, nopqml, kmlinj, $13) {
  for (var lighj, jigeh, gedfch = ++w$_yzx, rmnq = _dkjlni;;) {
    var rspqn = rpnoqs['charAt'](gedfch);switch (rspqn) {case '=':
        if (rmnq === _donsp) lighj = rpnoqs['slice'](w$_yzx, gedfch), rmnq = _dfdecb;else {
          if (rmnq !== _degfhi) throw new Error('attribute equal must after attrName');rmnq = _dfdecb;
        }break;case '\x27':case '\x22':
        if (rmnq === _dfdecb || rmnq === _donsp) {
          if (rmnq === _donsp && ($13['warning']('attribute value must after "="'), lighj = rpnoqs['slice'](w$_yzx, gedfch)), w$_yzx = gedfch + 0x1, gedfch = rpnoqs['indexOf'](rspqn, w$_yzx), !(gedfch > 0x0)) throw new Error('attribute value no end \'' + rspqn + '\' match');jigeh = rpnoqs['slice'](w$_yzx, gedfch)['replace'](/&#?\w+;/g, kmlinj), z_1$y['add'](lighj, jigeh, w$_yzx - 0x1), rmnq = _druvsw;
        } else {
          if (rmnq != _dvzwy) throw new Error('attribute value must after "="');jigeh = rpnoqs['slice'](w$_yzx, gedfch)['replace'](/&#?\w+;/g, kmlinj), z_1$y['add'](lighj, jigeh, w$_yzx), $13['warning']('attribute "' + lighj + '" missed start quot(' + rspqn + ')!!'), w$_yzx = gedfch + 0x1, rmnq = _druvsw;
        }break;case '/':
        switch (rmnq) {case _dkjlni:
            z_1$y['setTagName'](rpnoqs['slice'](w$_yzx, gedfch));case _druvsw:case _dwvts:case _dfihej:
            rmnq = _dfihej, z_1$y['closed'] = !0x0;case _dvzwy:case _donsp:case _degfhi:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $13['error']('unexpected end of input'), rmnq == _dkjlni && z_1$y['setTagName'](rpnoqs['slice'](w$_yzx, gedfch)), gedfch;case '>':
        switch (rmnq) {case _dkjlni:
            z_1$y['setTagName'](rpnoqs['slice'](w$_yzx, gedfch));case _druvsw:case _dwvts:case _dfihej:
            break;case _dvzwy:case _donsp:
            jigeh = rpnoqs['slice'](w$_yzx, gedfch), '/' === jigeh['slice'](-0x1) && (z_1$y['closed'] = !0x0, jigeh = jigeh['slice'](0x0, -0x1));case _degfhi:
            rmnq === _degfhi && (jigeh = lighj), rmnq == _dvzwy ? ($13['warning']('attribute "' + jigeh + '" missed quot(")!!'), z_1$y['add'](lighj, jigeh['replace'](/&#?\w+;/g, kmlinj), w$_yzx)) : ('http://www.w3.org/1999/xhtml' === nopqml[''] && jigeh['match'](/^(?:disabled|checked|selected)$/i) || $13['warning']('attribute "' + jigeh + '" missed value!! "' + jigeh + '" instead!!'), z_1$y['add'](jigeh, jigeh, w$_yzx));break;case _dfdecb:
            throw new Error('attribute value missed!!');}return gedfch;case '\u0080':
        rspqn = '\x20';default:
        if ('\x20' >= rspqn) switch (rmnq) {case _dkjlni:
            z_1$y['setTagName'](rpnoqs['slice'](w$_yzx, gedfch)), rmnq = _dwvts;break;case _donsp:
            lighj = rpnoqs['slice'](w$_yzx, gedfch), rmnq = _degfhi;break;case _dvzwy:
            var jigeh = rpnoqs['slice'](w$_yzx, gedfch)['replace'](/&#?\w+;/g, kmlinj);$13['warning']('attribute "' + jigeh + '" missed quot(")!!'), z_1$y['add'](lighj, jigeh, w$_yzx);case _druvsw:
            rmnq = _dwvts;} else switch (rmnq) {case _degfhi:
            {
              z_1$y['tagName'];
            }'http://www.w3.org/1999/xhtml' === nopqml[''] && lighj['match'](/^(?:disabled|checked|selected)$/i) || $13['warning']('attribute "' + lighj + '" missed value!! "' + lighj + '" instead2!!'), z_1$y['add'](lighj, lighj, w$_yzx), w$_yzx = gedfch, rmnq = _donsp;break;case _druvsw:
            $13['warning']('attribute space is required"' + lighj + '\x22!!');case _dwvts:
            rmnq = _donsp, w$_yzx = gedfch;break;case _dfdecb:
            rmnq = _dvzwy, w$_yzx = gedfch;break;case _dfihej:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gedfch++;
  }
}function _d_zx$yw(hfkijg, nproqs, x0yz$_) {
  for (var upsq = hfkijg['tagName'], eab = null, kjlmih = hfkijg['length']; kjlmih--;) {
    var wsuxtv = hfkijg[kjlmih],
        jegf = wsuxtv['qName'],
        bfec = wsuxtv['value'],
        uytxv = jegf['indexOf'](':');if (uytxv > 0x0) var stqpur = wsuxtv['prefix'] = jegf['slice'](0x0, uytxv),
        tuvqs = jegf['slice'](uytxv + 0x1),
        olmnp = 'xmlns' === stqpur && tuvqs;else tuvqs = jegf, stqpur = null, olmnp = 'xmlns' === jegf && '';wsuxtv['localName'] = tuvqs, olmnp !== !0x1 && (null == eab && (eab = {}, _dabfe(x0yz$_, x0yz$_ = {})), x0yz$_[olmnp] = eab[olmnp] = bfec, wsuxtv['uri'] = 'http://www.w3.org/2000/xmlns/', nproqs['startPrefixMapping'](olmnp, bfec));
  }for (var kjlmih = hfkijg['length']; kjlmih--;) {
    wsuxtv = hfkijg[kjlmih];var stqpur = wsuxtv['prefix'];stqpur && ('xml' === stqpur && (wsuxtv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== stqpur && (wsuxtv['uri'] = x0yz$_[stqpur || '']));
  }var uytxv = upsq['indexOf'](':');uytxv > 0x0 ? (stqpur = hfkijg['prefix'] = upsq['slice'](0x0, uytxv), tuvqs = hfkijg['localName'] = upsq['slice'](uytxv + 0x1)) : (stqpur = null, tuvqs = hfkijg['localName'] = upsq);var mqnp = hfkijg['uri'] = x0yz$_[stqpur || ''];if (nproqs['startElement'](mqnp, tuvqs, upsq, hfkijg), !hfkijg['closed']) return hfkijg['currentNSMap'] = x0yz$_, hfkijg['localNSMap'] = eab, !0x0;if (nproqs['endElement'](mqnp, tuvqs, upsq), eab) {
    for (stqpur in eab) nproqs['endPrefixMapping'](stqpur);
  }
}function _dstvr(_2304, eghcfd, hfegij, xwuytv, hjeif) {
  if (/^(?:script|textarea)$/i['test'](hfegij)) {
    var oqnprm = _2304['indexOf']('</' + hfegij + '>', eghcfd),
        pnlmk = _2304['substring'](eghcfd + 0x1, oqnprm);if (/[&<]/['test'](pnlmk)) return (/^script$/i['test'](hfegij) ? (hjeif['characters'](pnlmk, 0x0, pnlmk['length']), oqnprm) : (pnlmk = pnlmk['replace'](/&#?\w+;/g, xwuytv), hjeif['characters'](pnlmk, 0x0, pnlmk['length']), oqnprm)
    );
  }return eghcfd + 0x1;
}function _dsrvwt(uvrst, khljig, ojmnl, ijnkml) {
  var komljn = ijnkml[ojmnl];return null == komljn && (komljn = uvrst['lastIndexOf']('</' + ojmnl + '>'), khljig > komljn && (komljn = uvrst['lastIndexOf']('</' + ojmnl)), ijnkml[ojmnl] = komljn), khljig > komljn;
}function _dabfe(jmnikl, swrtv) {
  for (var uvzwy in jmnikl) swrtv[uvzwy] = jmnikl[uvzwy];
}function _dy0xz$(ecdghf, qorns, fijge, urtwv) {
  var orqpts = ecdghf['charAt'](qorns + 0x2);switch (orqpts) {case '-':
      if ('-' === ecdghf['charAt'](qorns + 0x3)) {
        var nsqrp = ecdghf['indexOf']('-->', qorns + 0x4);return nsqrp > qorns ? (fijge['comment'](ecdghf, qorns + 0x4, nsqrp - qorns - 0x4), nsqrp + 0x3) : (urtwv['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ecdghf['substr'](qorns + 0x3, 0x6)) {
        var nsqrp = ecdghf['indexOf'](']]>', qorns + 0x9);return fijge['startCDATA'](), fijge['characters'](ecdghf, qorns + 0x9, nsqrp - qorns - 0x9), fijge['endCDATA'](), nsqrp + 0x3;
      }var vrtsuq = _dljgkhi(ecdghf, qorns),
          fdchge = vrtsuq['length'];if (fdchge > 0x1 && /!doctype/i['test'](vrtsuq[0x0][0x0])) {
        var $0x_ = vrtsuq[0x1][0x0],
            dcghf = fdchge > 0x3 && /^public$/i['test'](vrtsuq[0x2][0x0]) && vrtsuq[0x3][0x0],
            _$yxw = fdchge > 0x4 && vrtsuq[0x4][0x0],
            ruvsqt = vrtsuq[fdchge - 0x1];return fijge['startDTD']($0x_, dcghf && dcghf['replace'](/^(['"])(.*?)\1$/, '$2'), _$yxw && _$yxw['replace'](/^(['"])(.*?)\1$/, '$2')), fijge['endDTD'](), ruvsqt['index'] + ruvsqt[0x0]['length'];
      }}return -0x1;
}function _dhgiej(omnl, wzyx_$, milhj) {
  var z_210$ = omnl['indexOf']('?>', wzyx_$);if (z_210$) {
    var xyvuw = omnl['substring'](wzyx_$, z_210$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xyvuw) {
      {
        xyvuw[0x0]['length'];
      }return milhj['processingInstruction'](xyvuw[0x1], xyvuw[0x2]), z_210$ + 0x2;
    }return -0x1;
  }return -0x1;
}function _dhcfgd() {}function _dmklpon(nkmjil, bdefc) {
  return nkmjil['__proto__'] = bdefc, nkmjil;
}function _dljgkhi($_10zy, nqpso) {
  var x_w$,
      qrstv = [],
      x$_y0z = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (x$_y0z['lastIndex'] = nqpso, x$_y0z['exec']($_10zy); x_w$ = x$_y0z['exec']($_10zy);) if (qrstv['push'](x_w$), x_w$[0x1]) return qrstv;
}var _dedighf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dhikjf = new RegExp('[\\-\\.0-9' + _dedighf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dhdfgc = new RegExp('^' + _dedighf['source'] + _dhikjf['source'] + '*(?::' + _dedighf['source'] + _dhikjf['source'] + '*)?$'),
    _dkjlni = 0x0,
    _donsp = 0x1,
    _degfhi = 0x2,
    _dfdecb = 0x3,
    _dvzwy = 0x4,
    _druvsw = 0x5,
    _dwvts = 0x6,
    _dfihej = 0x7;_dnpqso['prototype'] = { 'parse': function (qlpnm, xvzw$, mhjlk) {
    var degbfc = this['domBuilder'];degbfc['startDocument'](), _dabfe(xvzw$, xvzw$ = {}), _dgjeifh(qlpnm, xvzw$, mhjlk, degbfc, this['errorHandler']), degbfc['endDocument']();
  } }, _dhcfgd['prototype'] = { 'setTagName': function (ywtu) {
    if (!_dhdfgc['test'](ywtu)) throw new Error('invalid tagName:' + ywtu);this['tagName'] = ywtu;
  }, 'add': function (upqs, xuwzy, dcbegf) {
    if (!_dhdfgc['test'](upqs)) throw new Error('invalid attribute:' + upqs);this[this['length']++] = { 'qName': upqs, 'value': xuwzy, 'offset': dcbegf };
  }, 'length': 0x0, 'getLocalName': function (gehji) {
    return this[gehji]['localName'];
  }, 'getLocator': function (srwvt) {
    return this[srwvt]['locator'];
  }, 'getQName': function (vsutwr) {
    return this[vsutwr]['qName'];
  }, 'getURI': function (lnikmj) {
    return this[lnikmj]['uri'];
  }, 'getValue': function (pln) {
    return this[pln]['value'];
  } }, _dmklpon({}, _dmklpon['prototype']) instanceof _dmklpon || (_dmklpon = function (hgfiej, wutx) {
  function $20_3() {}$20_3['prototype'] = wutx, $20_3 = new $20_3();for (wutx in hgfiej) $20_3[wutx] = hgfiej[wutx];return $20_3;
}), exports['XMLReader'] = _dnpqso;