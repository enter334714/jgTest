var _ = wx.y$;
function _dlonpk() {}function _dmhjkli(olkmnj, noqlm, vtwus, vuwtyx, acbedf) {
  function suqvt(imkh) {
    var fiedgh = imkh['slice'](0x1, -0x1);return fiedgh in vtwus ? vtwus[fiedgh] : '#' === fiedgh['charAt'](0x0) ? 0xffff < (fiedgh = parseInt(fiedgh['substr'](0x1)['replace']('x', '0x'))) ? (fiedgh -= 0x10000, String['fromCharCode'](0xd800 + (fiedgh >> 0xa), 0xdc00 + (0x3ff & fiedgh))) : String['fromCharCode'](fiedgh) : (acbedf['error']('entity not found:' + imkh), imkh);
  }function gbcde(x0y$z_) {
    var nomprq;y0_$1 < x0y$z_ && (nomprq = olkmnj['substring'](y0_$1, x0y$z_)['replace'](/&#?\w+;/g, suqvt), sturqv && pmno(y0_$1), vuwtyx['characters'](nomprq, 0x0, x0y$z_ - y0_$1), y0_$1 = x0y$z_);
  }function pmno(xz_, rqmp) {
    for (; mkijhl <= xz_ && (rqmp = vrqt['exec'](olkmnj));) wv$xyz = rqmp['index'], mkijhl = wv$xyz + rqmp[0x0]['length'], sturqv['lineNumber']++;sturqv['columnNumber'] = xz_ - wv$xyz + 0x1;
  }for (var wv$xyz = 0x0, mkijhl = 0x0, vrqt = /.*(?:\r\n?|\n)|.*$/g, sturqv = vuwtyx['locator'], hijg = [{ 'currentNSMap': noqlm }], tyxvuw = {}, y0_$1 = 0x0;;) {
    try {
      var cefbg = olkmnj['indexOf']('<', y0_$1),
          prqmo,
          wsu;if (cefbg < 0x0) return void (olkmnj['substr'](y0_$1)['match'](/^\s*$/) || (wsu = (prqmo = vuwtyx['doc'])['createTextNode'](olkmnj['substr'](y0_$1)), prqmo['appendChild'](wsu), vuwtyx['currentElement'] = wsu));switch (y0_$1 < cefbg && gbcde(cefbg), olkmnj['charAt'](cefbg + 0x1)) {case '/':
          var vuxy = olkmnj['indexOf']('>', cefbg + 0x3),
              hjgl = olkmnj['substring'](cefbg + 0x2, vuxy),
              ihfd = hijg['pop']();vuxy < 0x0 ? (hjgl = olkmnj['substring'](cefbg + 0x2)['replace'](/[\s<].*/, ''), acbedf['error']('end tag name: ' + hjgl + ' is not complete:' + ihfd['tagName']), vuxy = cefbg + 0x1 + hjgl['length']) : hjgl['match'](/\s</) && (hjgl = hjgl['replace'](/[\s<].*/, ''), acbedf['error']('end tag name: ' + hjgl + ' maybe not complete'), vuxy = cefbg + 0x1 + hjgl['length']);var hedig = ihfd['localNSMap'],
              lmjhki = ihfd['tagName'] == hjgl;if (lmjhki || ihfd['tagName'] && ihfd['tagName']['toLowerCase']() == hjgl['toLowerCase']()) {
            if (vuwtyx['endElement'](ihfd['uri'], ihfd['localName'], hjgl), hedig) {
              for (var gfcdbe in hedig) vuwtyx['endPrefixMapping'](gfcdbe);
            }lmjhki || acbedf['fatalError']('end tag name: ' + hjgl + ' is not match the current start tagName:' + ihfd['tagName']);
          } else hijg['push'](ihfd);vuxy++;break;case '?':
          sturqv && pmno(cefbg), vuxy = _dfjhgki(olkmnj, cefbg, vuwtyx);break;case '!':
          sturqv && pmno(cefbg), vuxy = _dkjnlm(olkmnj, cefbg, vuwtyx, acbedf);break;default:
          sturqv && pmno(cefbg);var twvuy = new _dhilkg(),
              yzxu = hijg[hijg['length'] - 0x1]['currentNSMap'],
              vuxy = _d_1zy0(olkmnj, cefbg, twvuy, yzxu, suqvt, acbedf),
              nkjlo = twvuy['length'];if (!twvuy['closed'] && _dxwvyzu(olkmnj, vuxy, twvuy['tagName'], tyxvuw) && (twvuy['closed'] = !0x0, vtwus['nbsp'] || acbedf['warning']('unclosed xml attribute')), sturqv && nkjlo) {
            for (var vwsutr = _dpnrqso(sturqv, {}), ljonkm = 0x0; ljonkm < nkjlo; ljonkm++) {
              var qmnlpo = twvuy[ljonkm];pmno(qmnlpo['offset']), qmnlpo['locator'] = _dpnrqso(sturqv, {});
            }vuwtyx['locator'] = vwsutr, _dtyxv(twvuy, vuwtyx, yzxu) && hijg['push'](twvuy), vuwtyx['locator'] = sturqv;
          } else _dtyxv(twvuy, vuwtyx, yzxu) && hijg['push'](twvuy);'http://www.w3.org/1999/xhtml' !== twvuy['uri'] || twvuy['closed'] ? vuxy++ : vuxy = _dutvyxw(olkmnj, vuxy, twvuy['tagName'], suqvt, vuwtyx);}
    } catch (ijhlg) {
      acbedf['error']('element parse error: ' + ijhlg), vuxy = -0x1;
    }y0_$1 < vuxy ? y0_$1 = vuxy : gbcde(Math['max'](cefbg, y0_$1) + 0x1);
  }
}function _dpnrqso(jfe, npmq) {
  return npmq['lineNumber'] = jfe['lineNumber'], npmq['columnNumber'] = jfe['columnNumber'], npmq;
}function _d_1zy0(kpol, ijkhg, wuvrs, mnokl, rqsupt, eijgf) {
  for (var ponrm, jigfhk = ++ijkhg, vzx$y = _dcgfd;;) {
    var yuwzv = kpol['charAt'](jigfhk);switch (yuwzv) {case '=':
        if (vzx$y === _dlknoj) ponrm = kpol['slice'](ijkhg, jigfhk), vzx$y = _dehdifg;else {
          if (vzx$y !== _dwuxtv) throw new Error('attribute equal must after attrName');vzx$y = _dehdifg;
        }break;case '\x27':case '\x22':
        if (vzx$y === _dehdifg || vzx$y === _dlknoj) {
          if (vzx$y === _dlknoj && (eijgf['warning']('attribute value must after "="'), ponrm = kpol['slice'](ijkhg, jigfhk)), !(0x0 < (jigfhk = kpol['indexOf'](yuwzv, ijkhg = jigfhk + 0x1)))) throw new Error('attribute value no end \'' + yuwzv + '\' match');jfkg = kpol['slice'](ijkhg, jigfhk)['replace'](/&#?\w+;/g, rqsupt), wuvrs['add'](ponrm, jfkg, ijkhg - 0x1), vzx$y = _dsqprto;
        } else {
          if (vzx$y != _dz$ywvx) throw new Error('attribute value must after "="');jfkg = kpol['slice'](ijkhg, jigfhk)['replace'](/&#?\w+;/g, rqsupt), wuvrs['add'](ponrm, jfkg, ijkhg), eijgf['warning']('attribute "' + ponrm + '" missed start quot(' + yuwzv + ')!!'), ijkhg = jigfhk + 0x1, vzx$y = _dsqprto;
        }break;case '/':
        switch (vzx$y) {case _dcgfd:
            wuvrs['setTagName'](kpol['slice'](ijkhg, jigfhk));case _dsqprto:case _djhmi:case _ddighfe:
            vzx$y = _ddighfe, wuvrs['closed'] = !0x0;case _dz$ywvx:case _dlknoj:case _dwuxtv:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return eijgf['error']('unexpected end of input'), vzx$y == _dcgfd && wuvrs['setTagName'](kpol['slice'](ijkhg, jigfhk)), jigfhk;case '>':
        switch (vzx$y) {case _dcgfd:
            wuvrs['setTagName'](kpol['slice'](ijkhg, jigfhk));case _dsqprto:case _djhmi:case _ddighfe:
            break;case _dz$ywvx:case _dlknoj:
            '/' === (jfkg = kpol['slice'](ijkhg, jigfhk))['slice'](-0x1) && (wuvrs['closed'] = !0x0, jfkg = jfkg['slice'](0x0, -0x1));case _dwuxtv:
            vzx$y === _dwuxtv && (jfkg = ponrm), vzx$y == _dz$ywvx ? (eijgf['warning']('attribute "' + jfkg + '" missed quot(")!!'), wuvrs['add'](ponrm, jfkg['replace'](/&#?\w+;/g, rqsupt), ijkhg)) : ('http://www.w3.org/1999/xhtml' === mnokl[''] && jfkg['match'](/^(?:disabled|checked|selected)$/i) || eijgf['warning']('attribute "' + jfkg + '" missed value!! "' + jfkg + '" instead!!'), wuvrs['add'](jfkg, jfkg, ijkhg));break;case _dehdifg:
            throw new Error('attribute value missed!!');}return jigfhk;case '\u0080':
        yuwzv = '\x20';default:
        if (yuwzv <= '\x20') switch (vzx$y) {case _dcgfd:
            wuvrs['setTagName'](kpol['slice'](ijkhg, jigfhk)), vzx$y = _djhmi;break;case _dlknoj:
            ponrm = kpol['slice'](ijkhg, jigfhk), vzx$y = _dwuxtv;break;case _dz$ywvx:
            var jfkg = kpol['slice'](ijkhg, jigfhk)['replace'](/&#?\w+;/g, rqsupt);eijgf['warning']('attribute "' + jfkg + '" missed quot(")!!'), wuvrs['add'](ponrm, jfkg, ijkhg);case _dsqprto:
            vzx$y = _djhmi;} else switch (vzx$y) {case _dwuxtv:
            wuvrs['tagName'], 'http://www.w3.org/1999/xhtml' === mnokl[''] && ponrm['match'](/^(?:disabled|checked|selected)$/i) || eijgf['warning']('attribute "' + ponrm + '" missed value!! "' + ponrm + '" instead2!!'), wuvrs['add'](ponrm, ponrm, ijkhg), ijkhg = jigfhk, vzx$y = _dlknoj;break;case _dsqprto:
            eijgf['warning']('attribute space is required"' + ponrm + '\x22!!');case _djhmi:
            vzx$y = _dlknoj, ijkhg = jigfhk;break;case _dehdifg:
            vzx$y = _dz$ywvx, ijkhg = jigfhk;break;case _ddighfe:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}jigfhk++;
  }
}function _dtyxv(gklj, $02z1_, nmjil) {
  for (var w$xy = gklj['tagName'], hfgik = null, $_0123 = gklj['length']; $_0123--;) {
    var nrqp = gklj[$_0123],
        fgje = nrqp['qName'],
        hcgd = nrqp['value'],
        lomk;fgje = 0x0 < (swvr = fgje['indexOf'](':')) ? (pomkl = nrqp['prefix'] = fgje['slice'](0x0, swvr), lomk = fgje['slice'](swvr + 0x1), 'xmlns' === pomkl && lomk) : (pomkl = null, 'xmlns' === (lomk = fgje) && ''), nrqp['localName'] = lomk, !0x1 !== fgje && (null == hfgik && (hfgik = {}, _dhjgk(nmjil, nmjil = {})), nmjil[fgje] = hfgik[fgje] = hcgd, nrqp['uri'] = 'http://www.w3.org/2000/xmlns/', $02z1_['startPrefixMapping'](fgje, hcgd));
  }for ($_0123 = gklj['length']; $_0123--;) (pomkl = (nrqp = gklj[$_0123])['prefix']) && ('xml' === pomkl && (nrqp['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pomkl && (nrqp['uri'] = nmjil[pomkl || '']));var swvr;lomk = 0x0 < (swvr = w$xy['indexOf'](':')) ? (pomkl = gklj['prefix'] = w$xy['slice'](0x0, swvr), gklj['localName'] = w$xy['slice'](swvr + 0x1)) : (pomkl = null, gklj['localName'] = w$xy);var wy$xvz = gklj['uri'] = nmjil[pomkl || ''];if ($02z1_['startElement'](wy$xvz, lomk, w$xy, gklj), !gklj['closed']) return gklj['currentNSMap'] = nmjil, gklj['localNSMap'] = hfgik, !0x0;if ($02z1_['endElement'](wy$xvz, lomk, w$xy), hfgik) {
    for (var pomkl in hfgik) $02z1_['endPrefixMapping'](pomkl);
  }
}function _dutvyxw(olpnm, jmihk, yzw$_x, vxtws, lmkih) {
  if (/^(?:script|textarea)$/i['test'](yzw$_x)) {
    var ostpq = olpnm['indexOf']('</' + yzw$_x + '>', jmihk),
        olpnm = olpnm['substring'](jmihk + 0x1, ostpq);if (/[&<]/['test'](olpnm)) return (/^script$/i['test'](yzw$_x) || (olpnm = olpnm['replace'](/&#?\w+;/g, vxtws)), lmkih['characters'](olpnm, 0x0, olpnm['length']), ostpq
    );
  }return jmihk + 0x1;
}function _dxwvyzu(loqn, sonqp, jkfig, _012$z) {
  var psut = _012$z[jkfig];return null == psut && ((psut = loqn['lastIndexOf']('</' + jkfig + '>')) < sonqp && (psut = loqn['lastIndexOf']('</' + jkfig)), _012$z[jkfig] = psut), psut < sonqp;
}function _dhjgk(zy0$1, lnmp) {
  for (var kjgf in zy0$1) lnmp[kjgf] = zy0$1[kjgf];
}function _dkjnlm(hifje, uqptr, fgkhji, egfid) {
  var nkomlj = hifje['charAt'](uqptr + 0x2);if ('-' === nkomlj) return '-' !== hifje['charAt'](uqptr + 0x3) ? -0x1 : uqptr < (utxsv = hifje['indexOf']('-->', uqptr + 0x4)) ? (fgkhji['comment'](hifje, uqptr + 0x4, utxsv - uqptr - 0x4), utxsv + 0x3) : (egfid['error']('Unclosed comment'), -0x1);if ('CDATA[' == hifje['substr'](uqptr + 0x3, 0x6)) {
    var utxsv = hifje['indexOf'](']]>', uqptr + 0x9);return fgkhji['startCDATA'](), fgkhji['characters'](hifje, uqptr + 0x9, utxsv - uqptr - 0x9), fgkhji['endCDATA'](), utxsv + 0x3;
  }nkomlj = _dqsron(hifje, uqptr), egfid = nkomlj['length'];if (0x1 < egfid && /!doctype/i['test'](nkomlj[0x0][0x0])) return utxsv = nkomlj[0x1][0x0], hifje = 0x3 < egfid && /^public$/i['test'](nkomlj[0x2][0x0]) && nkomlj[0x3][0x0], uqptr = 0x4 < egfid && nkomlj[0x4][0x0], egfid = nkomlj[egfid - 0x1], (fgkhji['startDTD'](utxsv, hifje && hifje['replace'](/^(['"])(.*?)\1$/, '$2'), uqptr && uqptr['replace'](/^(['"])(.*?)\1$/, '$2')), fgkhji['endDTD'](), egfid['index'] + egfid[0x0]['length']);return -0x1;
}function _dfjhgki(hiljkm, bgcfed, vyxuwt) {
  var ijhlgk = hiljkm['indexOf']('?>', bgcfed);if (ijhlgk) return bgcfed = hiljkm['substring'](bgcfed, ijhlgk)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), bgcfed ? (bgcfed[0x0]['length'], vyxuwt['processingInstruction'](bgcfed[0x1], bgcfed[0x2]), ijhlgk + 0x2) : -0x1;return -0x1;
}function _dhilkg() {}function _dfhedg(xwvstu, wvrut) {
  return xwvstu['__proto__'] = wvrut, xwvstu;
}function _dqsron(sxwtv, rpoqns) {
  var $yzvw,
      fhik = [],
      edhif = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (edhif['lastIndex'] = rpoqns, edhif['exec'](sxwtv); $yzvw = edhif['exec'](sxwtv);) if (fhik['push']($yzvw), $yzvw[0x1]) return fhik;
}var _dsrutpq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _ddecf = new RegExp('[\\-\\.0-9' + _dsrutpq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dmhlk = new RegExp('^' + _dsrutpq['source'] + _ddecf['source'] + '*(?::' + _dsrutpq['source'] + _ddecf['source'] + '*)?$'),
    _dcgfd = 0x0,
    _dlknoj = 0x1,
    _dwuxtv = 0x2,
    _dehdifg = 0x3,
    _dz$ywvx = 0x4,
    _dsqprto = 0x5,
    _djhmi = 0x6,
    _ddighfe = 0x7;_dlonpk['prototype'] = { 'parse': function (ihfg, ptqos, srqot) {
    var klnmji = this['domBuilder'];klnmji['startDocument'](), _dhjgk(ptqos, ptqos = {}), _dmhjkli(ihfg, ptqos, srqot, klnmji, this['errorHandler']), klnmji['endDocument']();
  } }, _dhilkg['prototype'] = { 'setTagName': function (suwvxt) {
    if (!_dmhlk['test'](suwvxt)) throw new Error('invalid tagName:' + suwvxt);this['tagName'] = suwvxt;
  }, 'add': function (ponkm, rstpu, rpqo) {
    if (!_dmhlk['test'](ponkm)) throw new Error('invalid attribute:' + ponkm);this[this['length']++] = { 'qName': ponkm, 'value': rstpu, 'offset': rpqo };
  }, 'length': 0x0, 'getLocalName': function (yxuvzw) {
    return this[yxuvzw]['localName'];
  }, 'getLocator': function (mpolk) {
    return this[mpolk]['locator'];
  }, 'getQName': function (xy_z$0) {
    return this[xy_z$0]['qName'];
  }, 'getURI': function (cadfeb) {
    return this[cadfeb]['uri'];
  }, 'getValue': function (xutsvw) {
    return this[xutsvw]['value'];
  } }, _dfhedg({}, _dfhedg['prototype']) instanceof _dfhedg || (_dfhedg = function (ytvxwu, fgid) {
  function opkm() {}for (fgid in opkm['prototype'] = fgid, opkm = new opkm(), ytvxwu) opkm[fgid] = ytvxwu[fgid];return opkm;
}), exports['XMLReader'] = _dlonpk;