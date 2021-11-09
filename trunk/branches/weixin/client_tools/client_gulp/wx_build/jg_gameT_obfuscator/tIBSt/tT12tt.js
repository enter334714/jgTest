var M = wx.$T;
function tvd$p9() {}function tdfp$(gr81n3, g86n, sbakr, _wm6, dzfv) {
  function xe0o(tci92) {
    if (tci92 > 0xffff) {
      tci92 -= 0x10000;var $p9iv = 0xd800 + (tci92 >> 0xa),
          hy0x = 0xdc00 + (0x3ff & tci92);return String['fromCharCode']($p9iv, hy0x);
    }return String['fromCharCode'](tci92);
  }function dz7f$p(t$cv9i) {
    var rksjba = t$cv9i['slice'](0x1, -0x1);return rksjba in sbakr ? sbakr[rksjba] : '#' === rksjba['charAt'](0x0) ? xe0o(parseInt(rksjba['substr'](0x1)['replace']('x', '0x'))) : (dzfv['error']('entity not found:' + t$cv9i), t$cv9i);
  }function p$d9vf(zef7qo) {
    if (zef7qo > rabn) {
      var j8 = gr81n3['substring'](rabn, zef7qo)['replace'](/&#?\w+;/g, dz7f$p);h6m15w && xy0_qm(rabn), _wm6['characters'](j8, 0x0, zef7qo - rabn), rabn = zef7qo;
    }
  }function xy0_qm(ti2l4, vc29ti) {
    for (; ti2l4 >= agjrbk && (vc29ti = d7opf['exec'](gr81n3));) wh5_6 = vc29ti['index'], agjrbk = wh5_6 + vc29ti[0x0]['length'], h6m15w['lineNumber']++;h6m15w['columnNumber'] = ti2l4 - wh5_6 + 0x1;
  }for (var wh5_6 = 0x0, agjrbk = 0x0, d7opf = /.*(?:\r\n?|\n)|.*$/g, h6m15w = _wm6['locator'], bagjn = [{ 'currentNSMap': g86n }], e7qz0o = {}, rabn = 0x0;;) {
    try {
      var _qxye = gr81n3['indexOf']('<', rabn);if (0x0 > _qxye) {
        if (!gr81n3['substr'](rabn)['match'](/^\s*$/)) {
          var zpf$vd = _wm6['doc'],
              z7qeo = zpf$vd['createTextNode'](gr81n3['substr'](rabn));zpf$vd['appendChild'](z7qeo), _wm6['currentElement'] = z7qeo;
        }return;
      }switch (_qxye > rabn && p$d9vf(_qxye), gr81n3['charAt'](_qxye + 0x1)) {case '/':
          var h8156 = gr81n3['indexOf']('>', _qxye + 0x3),
              odp7fz = gr81n3['substring'](_qxye + 0x2, h8156),
              o70exq = bagjn['pop']();0x0 > h8156 ? (odp7fz = gr81n3['substring'](_qxye + 0x2)['replace'](/[\s<].*/, ''), dzfv['error']('end tag name: ' + odp7fz + ' is not complete:' + o70exq['tagName']), h8156 = _qxye + 0x1 + odp7fz['length']) : odp7fz['match'](/\s</) && (odp7fz = odp7fz['replace'](/[\s<].*/, ''), dzfv['error']('end tag name: ' + odp7fz + ' maybe not complete'), h8156 = _qxye + 0x1 + odp7fz['length']);var i9vc2t = o70exq['localNSMap'],
              v9ic$d = o70exq['tagName'] == odp7fz,
              i9v$cd = v9ic$d || o70exq['tagName'] && o70exq['tagName']['toLowerCase']() == odp7fz['toLowerCase']();if (i9v$cd) {
            if (_wm6['endElement'](o70exq['uri'], o70exq['localName'], odp7fz), i9vc2t) {
              for (var pd7 in i9vc2t) _wm6['endPrefixMapping'](pd7);
            }v9ic$d || dzfv['fatalError']('end tag name: ' + odp7fz + ' is not match the current start tagName:' + o70exq['tagName']);
          } else bagjn['push'](o70exq);h8156++;break;case '?':
          h6m15w && xy0_qm(_qxye), h8156 = tjbngr(gr81n3, _qxye, _wm6);break;case '!':
          h6m15w && xy0_qm(_qxye), h8156 = t_q0e(gr81n3, _qxye, _wm6, dzfv);break;default:
          h6m15w && xy0_qm(_qxye);var tl42ci = new tdzpof7(),
              l4c2 = bagjn[bagjn['length'] - 0x1]['currentNSMap'],
              h8156 = tabjrgn(gr81n3, _qxye, tl42ci, l4c2, dz7f$p, dzfv),
              anrbj = tl42ci['length'];if (!tl42ci['closed'] && tkrgba(gr81n3, h8156, tl42ci['tagName'], e7qz0o) && (tl42ci['closed'] = !0x0, sbakr['nbsp'] || dzfv['warning']('unclosed xml attribute')), h6m15w && anrbj) {
            for (var xm0_h = t$ivc9(h6m15w, {}), oepf7z = 0x0; anrbj > oepf7z; oepf7z++) {
              var v$id9c = tl42ci[oepf7z];xy0_qm(v$id9c['offset']), v$id9c['locator'] = t$ivc9(h6m15w, {});
            }_wm6['locator'] = xm0_h, tn135(tl42ci, _wm6, l4c2) && bagjn['push'](tl42ci), _wm6['locator'] = h6m15w;
          } else tn135(tl42ci, _wm6, l4c2) && bagjn['push'](tl42ci);'http://www.w3.org/1999/xhtml' !== tl42ci['uri'] || tl42ci['closed'] ? h8156++ : h8156 = t_6m5h(gr81n3, h8156, tl42ci['tagName'], dz7f$p, _wm6);}
    } catch (eq_x0) {
      dzfv['error']('element parse error: ' + eq_x0), h8156 = -0x1;
    }h8156 > rabn ? rabn = h8156 : p$d9vf(Math['max'](_qxye, rabn) + 0x1);
  }
}function t$ivc9(hwm615, kjrs) {
  return kjrs['lineNumber'] = hwm615['lineNumber'], kjrs['columnNumber'] = hwm615['columnNumber'], kjrs;
}function tabjrgn(zvdp, ex_q0, w68153, _mwh, hy_xm0, qxy0m) {
  for (var xm0y_, n8r1, bjrna = ++ex_q0, h5w18 = tkgjbar;;) {
    var w5myh_ = zvdp['charAt'](bjrna);switch (w5myh_) {case '=':
        if (h5w18 === tezo7qf) xm0y_ = zvdp['slice'](ex_q0, bjrna), h5w18 = tsbkr;else {
          if (h5w18 !== ttc294i) throw new Error('attribute equal must after attrName');h5w18 = tsbkr;
        }break;case '\x27':case '\x22':
        if (h5w18 === tsbkr || h5w18 === tezo7qf) {
          if (h5w18 === tezo7qf && (qxy0m['warning']('attribute value must after "="'), xm0y_ = zvdp['slice'](ex_q0, bjrna)), ex_q0 = bjrna + 0x1, bjrna = zvdp['indexOf'](w5myh_, ex_q0), !(bjrna > 0x0)) throw new Error('attribute value no end \'' + w5myh_ + '\' match');n8r1 = zvdp['slice'](ex_q0, bjrna)['replace'](/&#?\w+;/g, hy_xm0), w68153['add'](xm0y_, n8r1, ex_q0 - 0x1), h5w18 = tpfoez;
        } else {
          if (h5w18 != tm_xhw) throw new Error('attribute value must after "="');n8r1 = zvdp['slice'](ex_q0, bjrna)['replace'](/&#?\w+;/g, hy_xm0), w68153['add'](xm0y_, n8r1, ex_q0), qxy0m['warning']('attribute "' + xm0y_ + '" missed start quot(' + w5myh_ + ')!!'), ex_q0 = bjrna + 0x1, h5w18 = tpfoez;
        }break;case '/':
        switch (h5w18) {case tkgjbar:
            w68153['setTagName'](zvdp['slice'](ex_q0, bjrna));case tpfoez:case txmh_y0:case tw5186h:
            h5w18 = tw5186h, w68153['closed'] = !0x0;case tm_xhw:case tezo7qf:case ttc294i:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qxy0m['error']('unexpected end of input'), h5w18 == tkgjbar && w68153['setTagName'](zvdp['slice'](ex_q0, bjrna)), bjrna;case '>':
        switch (h5w18) {case tkgjbar:
            w68153['setTagName'](zvdp['slice'](ex_q0, bjrna));case tpfoez:case txmh_y0:case tw5186h:
            break;case tm_xhw:case tezo7qf:
            n8r1 = zvdp['slice'](ex_q0, bjrna), '/' === n8r1['slice'](-0x1) && (w68153['closed'] = !0x0, n8r1 = n8r1['slice'](0x0, -0x1));case ttc294i:
            h5w18 === ttc294i && (n8r1 = xm0y_), h5w18 == tm_xhw ? (qxy0m['warning']('attribute "' + n8r1 + '" missed quot(")!!'), w68153['add'](xm0y_, n8r1['replace'](/&#?\w+;/g, hy_xm0), ex_q0)) : ('http://www.w3.org/1999/xhtml' === _mwh[''] && n8r1['match'](/^(?:disabled|checked|selected)$/i) || qxy0m['warning']('attribute "' + n8r1 + '" missed value!! "' + n8r1 + '" instead!!'), w68153['add'](n8r1, n8r1, ex_q0));break;case tsbkr:
            throw new Error('attribute value missed!!');}return bjrna;case '\u0080':
        w5myh_ = '\x20';default:
        if ('\x20' >= w5myh_) switch (h5w18) {case tkgjbar:
            w68153['setTagName'](zvdp['slice'](ex_q0, bjrna)), h5w18 = txmh_y0;break;case tezo7qf:
            xm0y_ = zvdp['slice'](ex_q0, bjrna), h5w18 = ttc294i;break;case tm_xhw:
            var n8r1 = zvdp['slice'](ex_q0, bjrna)['replace'](/&#?\w+;/g, hy_xm0);qxy0m['warning']('attribute "' + n8r1 + '" missed quot(")!!'), w68153['add'](xm0y_, n8r1, ex_q0);case tpfoez:
            h5w18 = txmh_y0;} else switch (h5w18) {case ttc294i:
            {
              w68153['tagName'];
            }'http://www.w3.org/1999/xhtml' === _mwh[''] && xm0y_['match'](/^(?:disabled|checked|selected)$/i) || qxy0m['warning']('attribute "' + xm0y_ + '" missed value!! "' + xm0y_ + '" instead2!!'), w68153['add'](xm0y_, xm0y_, ex_q0), ex_q0 = bjrna, h5w18 = tezo7qf;break;case tpfoez:
            qxy0m['warning']('attribute space is required"' + xm0y_ + '\x22!!');case txmh_y0:
            h5w18 = tezo7qf, ex_q0 = bjrna;break;case tsbkr:
            h5w18 = tm_xhw, ex_q0 = bjrna;break;case tw5186h:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bjrna++;
  }
}function tn135(cvt9i2, _0mxqy, rjnba) {
  for (var x0_mh = cvt9i2['tagName'], vzpd = null, mhw6 = cvt9i2['length']; mhw6--;) {
    var fd7pz$ = cvt9i2[mhw6],
        zpfdo = fd7pz$['qName'],
        rkbaj = fd7pz$['value'],
        mw156 = zpfdo['indexOf'](':');if (mw156 > 0x0) var lcit2 = fd7pz$['prefix'] = zpfdo['slice'](0x0, mw156),
        yqox0 = zpfdo['slice'](mw156 + 0x1),
        eq7z0o = 'xmlns' === lcit2 && yqox0;else yqox0 = zpfdo, lcit2 = null, eq7z0o = 'xmlns' === zpfdo && '';fd7pz$['localName'] = yqox0, eq7z0o !== !0x1 && (null == vzpd && (vzpd = {}, tf9dv$p(rjnba, rjnba = {})), rjnba[eq7z0o] = vzpd[eq7z0o] = rkbaj, fd7pz$['uri'] = 'http://www.w3.org/2000/xmlns/', _0mxqy['startPrefixMapping'](eq7z0o, rkbaj));
  }for (var mhw6 = cvt9i2['length']; mhw6--;) {
    fd7pz$ = cvt9i2[mhw6];var lcit2 = fd7pz$['prefix'];lcit2 && ('xml' === lcit2 && (fd7pz$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lcit2 && (fd7pz$['uri'] = rjnba[lcit2 || '']));
  }var mw156 = x0_mh['indexOf'](':');mw156 > 0x0 ? (lcit2 = cvt9i2['prefix'] = x0_mh['slice'](0x0, mw156), yqox0 = cvt9i2['localName'] = x0_mh['slice'](mw156 + 0x1)) : (lcit2 = null, yqox0 = cvt9i2['localName'] = x0_mh);var n8g13r = cvt9i2['uri'] = rjnba[lcit2 || ''];if (_0mxqy['startElement'](n8g13r, yqox0, x0_mh, cvt9i2), !cvt9i2['closed']) return cvt9i2['currentNSMap'] = rjnba, cvt9i2['localNSMap'] = vzpd, !0x0;if (_0mxqy['endElement'](n8g13r, yqox0, x0_mh), vzpd) {
    for (lcit2 in vzpd) _0mxqy['endPrefixMapping'](lcit2);
  }
}function t_6m5h(dvi9c$, n3658, eoz7pf, gr1n3, asrjb) {
  if (/^(?:script|textarea)$/i['test'](eoz7pf)) {
    var yh_0xm = dvi9c$['indexOf']('</' + eoz7pf + '>', n3658),
        eox0q7 = dvi9c$['substring'](n3658 + 0x1, yh_0xm);if (/[&<]/['test'](eox0q7)) return (/^script$/i['test'](eoz7pf) ? (asrjb['characters'](eox0q7, 0x0, eox0q7['length']), yh_0xm) : (eox0q7 = eox0q7['replace'](/&#?\w+;/g, gr1n3), asrjb['characters'](eox0q7, 0x0, eox0q7['length']), yh_0xm)
    );
  }return n3658 + 0x1;
}function tkrgba(jbrkas, d$i9pv, fpzd7o, w156) {
  var xe0qoy = w156[fpzd7o];return null == xe0qoy && (xe0qoy = jbrkas['lastIndexOf']('</' + fpzd7o + '>'), d$i9pv > xe0qoy && (xe0qoy = jbrkas['lastIndexOf']('</' + fpzd7o)), w156[fpzd7o] = xe0qoy), d$i9pv > xe0qoy;
}function tf9dv$p(x70qoe, z7pfo) {
  for (var ox0qey in x70qoe) z7pfo[ox0qey] = x70qoe[ox0qey];
}function t_q0e(gajn, j3gbr, d7fzop, hy5_wm) {
  var h6_m5w = gajn['charAt'](j3gbr + 0x2);switch (h6_m5w) {case '-':
      if ('-' === gajn['charAt'](j3gbr + 0x3)) {
        var ct2v9 = gajn['indexOf']('-->', j3gbr + 0x4);return ct2v9 > j3gbr ? (d7fzop['comment'](gajn, j3gbr + 0x4, ct2v9 - j3gbr - 0x4), ct2v9 + 0x3) : (hy5_wm['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gajn['substr'](j3gbr + 0x3, 0x6)) {
        var ct2v9 = gajn['indexOf'](']]>', j3gbr + 0x9);return d7fzop['startCDATA'](), d7fzop['characters'](gajn, j3gbr + 0x9, ct2v9 - j3gbr - 0x9), d7fzop['endCDATA'](), ct2v9 + 0x3;
      }var zf7eo = tbkr(gajn, j3gbr),
          jar = zf7eo['length'];if (jar > 0x1 && /!doctype/i['test'](zf7eo[0x0][0x0])) {
        var vid9c = zf7eo[0x1][0x0],
            _6mhw = jar > 0x3 && /^public$/i['test'](zf7eo[0x2][0x0]) && zf7eo[0x3][0x0],
            m15w = jar > 0x4 && zf7eo[0x4][0x0],
            ezpf7 = zf7eo[jar - 0x1];return d7fzop['startDTD'](vid9c, _6mhw && _6mhw['replace'](/^(['"])(.*?)\1$/, '$2'), m15w && m15w['replace'](/^(['"])(.*?)\1$/, '$2')), d7fzop['endDTD'](), ezpf7['index'] + ezpf7[0x0]['length'];
      }}return -0x1;
}function tjbngr(cvd9$, ozpe7f, id9p) {
  var yhmxw_ = cvd9$['indexOf']('?>', ozpe7f);if (yhmxw_) {
    var h16w58 = cvd9$['substring'](ozpe7f, yhmxw_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (h16w58) {
      {
        h16w58[0x0]['length'];
      }return id9p['processingInstruction'](h16w58[0x1], h16w58[0x2]), yhmxw_ + 0x2;
    }return -0x1;
  }return -0x1;
}function tdzpof7() {}function tci24tl(it4c2l, z0e7) {
  return it4c2l['__proto__'] = z0e7, it4c2l;
}function tbkr(_yhw5, jkrabg) {
  var h86,
      pdvi9 = [],
      z7dfop = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (z7dfop['lastIndex'] = jkrabg, z7dfop['exec'](_yhw5); h86 = z7dfop['exec'](_yhw5);) if (pdvi9['push'](h86), h86[0x1]) return pdvi9;
}var tv9i$ct = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    trbjgna = new RegExp('[\\-\\.0-9' + tv9i$ct['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    t$fdv = new RegExp('^' + tv9i$ct['source'] + trbjgna['source'] + '*(?::' + tv9i$ct['source'] + trbjgna['source'] + '*)?$'),
    tkgjbar = 0x0,
    tezo7qf = 0x1,
    ttc294i = 0x2,
    tsbkr = 0x3,
    tm_xhw = 0x4,
    tpfoez = 0x5,
    txmh_y0 = 0x6,
    tw5186h = 0x7;tvd$p9['prototype'] = { 'parse': function (ci4lt, p$iv, od7) {
    var j3gn = this['domBuilder'];j3gn['startDocument'](), tf9dv$p(p$iv, p$iv = {}), tdfp$(ci4lt, p$iv, od7, j3gn, this['errorHandler']), j3gn['endDocument']();
  } }, tdzpof7['prototype'] = { 'setTagName': function (c$v9id) {
    if (!t$fdv['test'](c$v9id)) throw new Error('invalid tagName:' + c$v9id);this['tagName'] = c$v9id;
  }, 'add': function (vfd9$p, _eqxy0, _wym5) {
    if (!t$fdv['test'](vfd9$p)) throw new Error('invalid attribute:' + vfd9$p);this[this['length']++] = { 'qName': vfd9$p, 'value': _eqxy0, 'offset': _wym5 };
  }, 'length': 0x0, 'getLocalName': function (_qxmy) {
    return this[_qxmy]['localName'];
  }, 'getLocator': function (i$tc9) {
    return this[i$tc9]['locator'];
  }, 'getQName': function (brk) {
    return this[brk]['qName'];
  }, 'getURI': function (kgjb) {
    return this[kgjb]['uri'];
  }, 'getValue': function (y5w_m) {
    return this[y5w_m]['value'];
  } }, tci24tl({}, tci24tl['prototype']) instanceof tci24tl || (tci24tl = function (p7z$f, sujab) {
  function vdp$9() {}vdp$9['prototype'] = sujab, vdp$9 = new vdp$9();for (sujab in p7z$f) vdp$9[sujab] = p7z$f[sujab];return vdp$9;
}), exports['XMLReader'] = tvd$p9;