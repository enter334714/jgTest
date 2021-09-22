var _ = wx.y$;
function _dronq() {}function _dy_0z1$(qupsr, idfghe, acfbed, lokjmn, tvwsu) {
  function pusrt(uvzx) {
    var gfiedh = uvzx['slice'](0x1, -0x1);return gfiedh in acfbed ? acfbed[gfiedh] : '#' === gfiedh['charAt'](0x0) ? 0xffff < (gfiedh = parseInt(gfiedh['substr'](0x1)['replace']('x', '0x'))) ? (gfiedh -= 0x10000, String['fromCharCode'](0xd800 + (gfiedh >> 0xa), 0xdc00 + (0x3ff & gfiedh))) : String['fromCharCode'](gfiedh) : (tvwsu['error']('entity not found:' + uvzx), uvzx);
  }function lmjkn(edihg) {
    var rqtusv;$y0_z1 < edihg && (rqtusv = qupsr['substring']($y0_z1, edihg)['replace'](/&#?\w+;/g, pusrt), $0zx_ && jfkg($y0_z1), lokjmn['characters'](rqtusv, 0x0, edihg - $y0_z1), $y0_z1 = edihg);
  }function jfkg(bcefg, plnm) {
    for (; $yxz_ <= bcefg && (plnm = oljkm['exec'](qupsr));) qnrop = plnm['index'], $yxz_ = qnrop + plnm[0x0]['length'], $0zx_['lineNumber']++;$0zx_['columnNumber'] = bcefg - qnrop + 0x1;
  }for (var qnrop = 0x0, $yxz_ = 0x0, oljkm = /.*(?:\r\n?|\n)|.*$/g, $0zx_ = lokjmn['locator'], mnl = [{ 'currentNSMap': idfghe }], kjfhgi = {}, $y0_z1 = 0x0;;) {
    try {
      var mlpnqo = qupsr['indexOf']('<', $y0_z1),
          rosnq,
          yzv$xw;if (mlpnqo < 0x0) return void (qupsr['substr']($y0_z1)['match'](/^\s*$/) || (yzv$xw = (rosnq = lokjmn['doc'])['createTextNode'](qupsr['substr']($y0_z1)), rosnq['appendChild'](yzv$xw), lokjmn['currentElement'] = yzv$xw));switch ($y0_z1 < mlpnqo && lmjkn(mlpnqo), qupsr['charAt'](mlpnqo + 0x1)) {case '/':
          var hcdge = qupsr['indexOf']('>', mlpnqo + 0x3),
              mjnkli = qupsr['substring'](mlpnqo + 0x2, hcdge),
              gcdfh = mnl['pop']();hcdge < 0x0 ? (mjnkli = qupsr['substring'](mlpnqo + 0x2)['replace'](/[\s<].*/, ''), tvwsu['error']('end tag name: ' + mjnkli + ' is not complete:' + gcdfh['tagName']), hcdge = mlpnqo + 0x1 + mjnkli['length']) : mjnkli['match'](/\s</) && (mjnkli = mjnkli['replace'](/[\s<].*/, ''), tvwsu['error']('end tag name: ' + mjnkli + ' maybe not complete'), hcdge = mlpnqo + 0x1 + mjnkli['length']);var x0y_z = gcdfh['localNSMap'],
              gcbfde = gcdfh['tagName'] == mjnkli;if (gcbfde || gcdfh['tagName'] && gcdfh['tagName']['toLowerCase']() == mjnkli['toLowerCase']()) {
            if (lokjmn['endElement'](gcdfh['uri'], gcdfh['localName'], mjnkli), x0y_z) {
              for (var yzw_ in x0y_z) lokjmn['endPrefixMapping'](yzw_);
            }gcbfde || tvwsu['fatalError']('end tag name: ' + mjnkli + ' is not match the current start tagName:' + gcdfh['tagName']);
          } else mnl['push'](gcdfh);hcdge++;break;case '?':
          $0zx_ && jfkg(mlpnqo), hcdge = _dx_w$zy(qupsr, mlpnqo, lokjmn);break;case '!':
          $0zx_ && jfkg(mlpnqo), hcdge = _dfdab(qupsr, mlpnqo, lokjmn, tvwsu);break;default:
          $0zx_ && jfkg(mlpnqo);var tvsux = new _dlnkp(),
              rnmpq = mnl[mnl['length'] - 0x1]['currentNSMap'],
              hcdge = _dhijegf(qupsr, mlpnqo, tvsux, rnmpq, pusrt, tvwsu),
              hjmlik = tvsux['length'];if (!tvsux['closed'] && _degbcdf(qupsr, hcdge, tvsux['tagName'], kjfhgi) && (tvsux['closed'] = !0x0, acfbed['nbsp'] || tvwsu['warning']('unclosed xml attribute')), $0zx_ && hjmlik) {
            for (var zyvw$x = _dprns($0zx_, {}), vxw$z = 0x0; vxw$z < hjmlik; vxw$z++) {
              var stvxwu = tvsux[vxw$z];jfkg(stvxwu['offset']), stvxwu['locator'] = _dprns($0zx_, {});
            }lokjmn['locator'] = zyvw$x, _dijfk(tvsux, lokjmn, rnmpq) && mnl['push'](tvsux), lokjmn['locator'] = $0zx_;
          } else _dijfk(tvsux, lokjmn, rnmpq) && mnl['push'](tvsux);'http://www.w3.org/1999/xhtml' !== tvsux['uri'] || tvsux['closed'] ? hcdge++ : hcdge = _dqponrm(qupsr, hcdge, tvsux['tagName'], pusrt, lokjmn);}
    } catch (y$xzw) {
      tvwsu['error']('element parse error: ' + y$xzw), hcdge = -0x1;
    }$y0_z1 < hcdge ? $y0_z1 = hcdge : lmjkn(Math['max'](mlpnqo, $y0_z1) + 0x1);
  }
}function _dprns(jgfeih, zy$) {
  return zy$['lineNumber'] = jgfeih['lineNumber'], zy$['columnNumber'] = jgfeih['columnNumber'], zy$;
}function _dhijegf(pomnql, ghkif, spotqr, $x0_, xwuty, ehjifg) {
  for (var qnmorp, tuprqs = ++ghkif, mjlikh = _dkhigjf;;) {
    var uptsq = pomnql['charAt'](tuprqs);switch (uptsq) {case '=':
        if (mjlikh === _dvyxwz) qnmorp = pomnql['slice'](ghkif, tuprqs), mjlikh = _dsxvtw;else {
          if (mjlikh !== _dfhik) throw new Error('attribute equal must after attrName');mjlikh = _dsxvtw;
        }break;case '\x27':case '\x22':
        if (mjlikh === _dsxvtw || mjlikh === _dvyxwz) {
          if (mjlikh === _dvyxwz && (ehjifg['warning']('attribute value must after "="'), qnmorp = pomnql['slice'](ghkif, tuprqs)), !(0x0 < (tuprqs = pomnql['indexOf'](uptsq, ghkif = tuprqs + 0x1)))) throw new Error('attribute value no end \'' + uptsq + '\' match');$wyvx = pomnql['slice'](ghkif, tuprqs)['replace'](/&#?\w+;/g, xwuty), spotqr['add'](qnmorp, $wyvx, ghkif - 0x1), mjlikh = _duywvxz;
        } else {
          if (mjlikh != _dbecfa) throw new Error('attribute value must after "="');$wyvx = pomnql['slice'](ghkif, tuprqs)['replace'](/&#?\w+;/g, xwuty), spotqr['add'](qnmorp, $wyvx, ghkif), ehjifg['warning']('attribute "' + qnmorp + '" missed start quot(' + uptsq + ')!!'), ghkif = tuprqs + 0x1, mjlikh = _duywvxz;
        }break;case '/':
        switch (mjlikh) {case _dkhigjf:
            spotqr['setTagName'](pomnql['slice'](ghkif, tuprqs));case _duywvxz:case _d$0y_1z:case _dsvruq:
            mjlikh = _dsvruq, spotqr['closed'] = !0x0;case _dbecfa:case _dvyxwz:case _dfhik:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ehjifg['error']('unexpected end of input'), mjlikh == _dkhigjf && spotqr['setTagName'](pomnql['slice'](ghkif, tuprqs)), tuprqs;case '>':
        switch (mjlikh) {case _dkhigjf:
            spotqr['setTagName'](pomnql['slice'](ghkif, tuprqs));case _duywvxz:case _d$0y_1z:case _dsvruq:
            break;case _dbecfa:case _dvyxwz:
            '/' === ($wyvx = pomnql['slice'](ghkif, tuprqs))['slice'](-0x1) && (spotqr['closed'] = !0x0, $wyvx = $wyvx['slice'](0x0, -0x1));case _dfhik:
            mjlikh === _dfhik && ($wyvx = qnmorp), mjlikh == _dbecfa ? (ehjifg['warning']('attribute "' + $wyvx + '" missed quot(")!!'), spotqr['add'](qnmorp, $wyvx['replace'](/&#?\w+;/g, xwuty), ghkif)) : ('http://www.w3.org/1999/xhtml' === $x0_[''] && $wyvx['match'](/^(?:disabled|checked|selected)$/i) || ehjifg['warning']('attribute "' + $wyvx + '" missed value!! "' + $wyvx + '" instead!!'), spotqr['add']($wyvx, $wyvx, ghkif));break;case _dsxvtw:
            throw new Error('attribute value missed!!');}return tuprqs;case '\u0080':
        uptsq = '\x20';default:
        if (uptsq <= '\x20') switch (mjlikh) {case _dkhigjf:
            spotqr['setTagName'](pomnql['slice'](ghkif, tuprqs)), mjlikh = _d$0y_1z;break;case _dvyxwz:
            qnmorp = pomnql['slice'](ghkif, tuprqs), mjlikh = _dfhik;break;case _dbecfa:
            var $wyvx = pomnql['slice'](ghkif, tuprqs)['replace'](/&#?\w+;/g, xwuty);ehjifg['warning']('attribute "' + $wyvx + '" missed quot(")!!'), spotqr['add'](qnmorp, $wyvx, ghkif);case _duywvxz:
            mjlikh = _d$0y_1z;} else switch (mjlikh) {case _dfhik:
            spotqr['tagName'], 'http://www.w3.org/1999/xhtml' === $x0_[''] && qnmorp['match'](/^(?:disabled|checked|selected)$/i) || ehjifg['warning']('attribute "' + qnmorp + '" missed value!! "' + qnmorp + '" instead2!!'), spotqr['add'](qnmorp, qnmorp, ghkif), ghkif = tuprqs, mjlikh = _dvyxwz;break;case _duywvxz:
            ehjifg['warning']('attribute space is required"' + qnmorp + '\x22!!');case _d$0y_1z:
            mjlikh = _dvyxwz, ghkif = tuprqs;break;case _dsxvtw:
            mjlikh = _dbecfa, ghkif = tuprqs;break;case _dsvruq:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tuprqs++;
  }
}function _dijfk(hdfcg, onrqs, ihfkjg) {
  for (var cefdab = hdfcg['tagName'], jlink = null, uwstr = hdfcg['length']; uwstr--;) {
    var srtop = hdfcg[uwstr],
        z0y_$1 = srtop['qName'],
        vzy = srtop['value'],
        kmjln;z0y_$1 = 0x0 < (kimljh = z0y_$1['indexOf'](':')) ? (urtsw = srtop['prefix'] = z0y_$1['slice'](0x0, kimljh), kmjln = z0y_$1['slice'](kimljh + 0x1), 'xmlns' === urtsw && kmjln) : (urtsw = null, 'xmlns' === (kmjln = z0y_$1) && ''), srtop['localName'] = kmjln, !0x1 !== z0y_$1 && (null == jlink && (jlink = {}, _drsqp(ihfkjg, ihfkjg = {})), ihfkjg[z0y_$1] = jlink[z0y_$1] = vzy, srtop['uri'] = 'http://www.w3.org/2000/xmlns/', onrqs['startPrefixMapping'](z0y_$1, vzy));
  }for (uwstr = hdfcg['length']; uwstr--;) (urtsw = (srtop = hdfcg[uwstr])['prefix']) && ('xml' === urtsw && (srtop['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== urtsw && (srtop['uri'] = ihfkjg[urtsw || '']));var kimljh;kmjln = 0x0 < (kimljh = cefdab['indexOf'](':')) ? (urtsw = hdfcg['prefix'] = cefdab['slice'](0x0, kimljh), hdfcg['localName'] = cefdab['slice'](kimljh + 0x1)) : (urtsw = null, hdfcg['localName'] = cefdab);var nqporm = hdfcg['uri'] = ihfkjg[urtsw || ''];if (onrqs['startElement'](nqporm, kmjln, cefdab, hdfcg), !hdfcg['closed']) return hdfcg['currentNSMap'] = ihfkjg, hdfcg['localNSMap'] = jlink, !0x0;if (onrqs['endElement'](nqporm, kmjln, cefdab), jlink) {
    for (var urtsw in jlink) onrqs['endPrefixMapping'](urtsw);
  }
}function _dqponrm(klg, rqvus, mnloq, $yvwz, spqno) {
  if (/^(?:script|textarea)$/i['test'](mnloq)) {
    var inkjml = klg['indexOf']('</' + mnloq + '>', rqvus),
        klg = klg['substring'](rqvus + 0x1, inkjml);if (/[&<]/['test'](klg)) return (/^script$/i['test'](mnloq) || (klg = klg['replace'](/&#?\w+;/g, $yvwz)), spqno['characters'](klg, 0x0, klg['length']), inkjml
    );
  }return rqvus + 0x1;
}function _degbcdf(oqmpln, ljmnk, fabcde, nil) {
  var uzyvx = nil[fabcde];return null == uzyvx && ((uzyvx = oqmpln['lastIndexOf']('</' + fabcde + '>')) < ljmnk && (uzyvx = oqmpln['lastIndexOf']('</' + fabcde)), nil[fabcde] = uzyvx), uzyvx < ljmnk;
}function _drsqp(gjihl, jlnkmo) {
  for (var yw_$zx in gjihl) jlnkmo[yw_$zx] = gjihl[yw_$zx];
}function _dfdab(onlmj, _$21, ghkj, xy$_z) {
  var psu = onlmj['charAt'](_$21 + 0x2);if ('-' === psu) return '-' !== onlmj['charAt'](_$21 + 0x3) ? -0x1 : _$21 < (ejfhgi = onlmj['indexOf']('-->', _$21 + 0x4)) ? (ghkj['comment'](onlmj, _$21 + 0x4, ejfhgi - _$21 - 0x4), ejfhgi + 0x3) : (xy$_z['error']('Unclosed comment'), -0x1);if ('CDATA[' == onlmj['substr'](_$21 + 0x3, 0x6)) {
    var ejfhgi = onlmj['indexOf'](']]>', _$21 + 0x9);return ghkj['startCDATA'](), ghkj['characters'](onlmj, _$21 + 0x9, ejfhgi - _$21 - 0x9), ghkj['endCDATA'](), ejfhgi + 0x3;
  }psu = _dqtop(onlmj, _$21), xy$_z = psu['length'];if (0x1 < xy$_z && /!doctype/i['test'](psu[0x0][0x0])) return ejfhgi = psu[0x1][0x0], onlmj = 0x3 < xy$_z && /^public$/i['test'](psu[0x2][0x0]) && psu[0x3][0x0], _$21 = 0x4 < xy$_z && psu[0x4][0x0], xy$_z = psu[xy$_z - 0x1], (ghkj['startDTD'](ejfhgi, onlmj && onlmj['replace'](/^(['"])(.*?)\1$/, '$2'), _$21 && _$21['replace'](/^(['"])(.*?)\1$/, '$2')), ghkj['endDTD'](), xy$_z['index'] + xy$_z[0x0]['length']);return -0x1;
}function _dx_w$zy(qsptu, mnprq, xw_$z) {
  var swuvtx = qsptu['indexOf']('?>', mnprq);if (swuvtx) return mnprq = qsptu['substring'](mnprq, swuvtx)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), mnprq ? (mnprq[0x0]['length'], xw_$z['processingInstruction'](mnprq[0x1], mnprq[0x2]), swuvtx + 0x2) : -0x1;return -0x1;
}function _dlnkp() {}function _duvtx(qsprn, lgjkhi) {
  return qsprn['__proto__'] = lgjkhi, qsprn;
}function _dqtop($_wyxz, kn) {
  var dfcabe,
      fdghc = [],
      pno = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pno['lastIndex'] = kn, pno['exec']($_wyxz); dfcabe = pno['exec']($_wyxz);) if (fdghc['push'](dfcabe), dfcabe[0x1]) return fdghc;
}var _dsxwtv = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dfeigd = new RegExp('[\\-\\.0-9' + _dsxwtv['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dz$yw = new RegExp('^' + _dsxwtv['source'] + _dfeigd['source'] + '*(?::' + _dsxwtv['source'] + _dfeigd['source'] + '*)?$'),
    _dkhigjf = 0x0,
    _dvyxwz = 0x1,
    _dfhik = 0x2,
    _dsxvtw = 0x3,
    _dbecfa = 0x4,
    _duywvxz = 0x5,
    _d$0y_1z = 0x6,
    _dsvruq = 0x7;_dronq['prototype'] = { 'parse': function (hejfig, mknojl, egjhf) {
    var plqnm = this['domBuilder'];plqnm['startDocument'](), _drsqp(mknojl, mknojl = {}), _dy_0z1$(hejfig, mknojl, egjhf, plqnm, this['errorHandler']), plqnm['endDocument']();
  } }, _dlnkp['prototype'] = { 'setTagName': function (efabdc) {
    if (!_dz$yw['test'](efabdc)) throw new Error('invalid tagName:' + efabdc);this['tagName'] = efabdc;
  }, 'add': function (_yzx$w, vxwyt, rpsnoq) {
    if (!_dz$yw['test'](_yzx$w)) throw new Error('invalid attribute:' + _yzx$w);this[this['length']++] = { 'qName': _yzx$w, 'value': vxwyt, 'offset': rpsnoq };
  }, 'length': 0x0, 'getLocalName': function (yzwu) {
    return this[yzwu]['localName'];
  }, 'getLocator': function (fgdbce) {
    return this[fgdbce]['locator'];
  }, 'getQName': function (rsvtwu) {
    return this[rsvtwu]['qName'];
  }, 'getURI': function (ehifj) {
    return this[ehifj]['uri'];
  }, 'getValue': function (_0$21z) {
    return this[_0$21z]['value'];
  } }, _duvtx({}, _duvtx['prototype']) instanceof _duvtx || (_duvtx = function (fdaceb, hmilkj) {
  function befdca() {}for (hmilkj in befdca['prototype'] = hmilkj, befdca = new befdca(), fdaceb) befdca[hmilkj] = fdaceb[hmilkj];return befdca;
}), exports['XMLReader'] = _dronq;