var m = wx.$g;
function gh9() {}function gfxbrk(frxbk7, hi4s, jsa61, usaig, epd0mt) {
  function jiga6s(ih) {
    var rxf2k = ih['slice'](0x1, -0x1);return rxf2k in jsa61 ? jsa61[rxf2k] : '#' === rxf2k['charAt'](0x0) ? 0xffff < (rxf2k = parseInt(rxf2k['substr'](0x1)['replace']('x', '0x'))) ? (rxf2k -= 0x10000, String['fromCharCode'](0xd800 + (rxf2k >> 0xa), 0xdc00 + (0x3ff & rxf2k))) : String['fromCharCode'](rxf2k) : (epd0mt['error']('entity not found:' + ih), ih);
  }function voctp(me_083) {
    var _$zl3w;fy9r < me_083 && (_$zl3w = frxbk7['substring'](fy9r, me_083)['replace'](/&#?\w+;/g, jiga6s), s1g6ja && $2kzxw(fy9r), usaig['characters'](_$zl3w, 0x0, me_083 - fy9r), fy9r = me_083);
  }function $2kzxw(bfr9k, ctov) {
    for (; iyu45 <= bfr9k && (ctov = y54hi['exec'](frxbk7));) dqtvo = ctov['index'], iyu45 = dqtvo + ctov[0x0]['length'], s1g6ja['lineNumber']++;s1g6ja['columnNumber'] = bfr9k - dqtvo + 0x1;
  }for (var dqtvo = 0x0, iyu45 = 0x0, y54hi = /.*(?:\r\n?|\n)|.*$/g, s1g6ja = usaig['locator'], rbk79f = [{ 'currentNSMap': hi4s }], ybf5r = {}, fy9r = 0x0;;) {
    try {
      var vdtcp = frxbk7['indexOf']('<', fy9r),
          cdoptv,
          w$xz2l;if (vdtcp < 0x0) return void (frxbk7['substr'](fy9r)['match'](/^\s*$/) || (w$xz2l = (cdoptv = usaig['doc'])['createTextNode'](frxbk7['substr'](fy9r)), cdoptv['appendChild'](w$xz2l), usaig['currentElement'] = w$xz2l));switch (fy9r < vdtcp && voctp(vdtcp), frxbk7['charAt'](vdtcp + 0x1)) {case '/':
          var _83ml = frxbk7['indexOf']('>', vdtcp + 0x3),
              _3lw$z = frxbk7['substring'](vdtcp + 0x2, _83ml),
              _z8m3 = rbk79f['pop']();_83ml < 0x0 ? (_3lw$z = frxbk7['substring'](vdtcp + 0x2)['replace'](/[\s<].*/, ''), epd0mt['error']('end tag name: ' + _3lw$z + ' is not complete:' + _z8m3['tagName']), _83ml = vdtcp + 0x1 + _3lw$z['length']) : _3lw$z['match'](/\s</) && (_3lw$z = _3lw$z['replace'](/[\s<].*/, ''), epd0mt['error']('end tag name: ' + _3lw$z + ' maybe not complete'), _83ml = vdtcp + 0x1 + _3lw$z['length']);var qcotvd = _z8m3['localNSMap'],
              odtcqv = _z8m3['tagName'] == _3lw$z;if (odtcqv || _z8m3['tagName'] && _z8m3['tagName']['toLowerCase']() == _3lw$z['toLowerCase']()) {
            if (usaig['endElement'](_z8m3['uri'], _z8m3['localName'], _3lw$z), qcotvd) {
              for (var f95hy in qcotvd) usaig['endPrefixMapping'](f95hy);
            }odtcqv || epd0mt['fatalError']('end tag name: ' + _3lw$z + ' is not match the current start tagName:' + _z8m3['tagName']);
          } else rbk79f['push'](_z8m3);_83ml++;break;case '?':
          s1g6ja && $2kzxw(vdtcp), _83ml = gr5(frxbk7, vdtcp, usaig);break;case '!':
          s1g6ja && $2kzxw(vdtcp), _83ml = giau4js(frxbk7, vdtcp, usaig, epd0mt);break;default:
          s1g6ja && $2kzxw(vdtcp);var pe0tc = new g_8em0(),
              x27wk = rbk79f[rbk79f['length'] - 0x1]['currentNSMap'],
              _83ml = gz$3lw(frxbk7, vdtcp, pe0tc, x27wk, jiga6s, epd0mt),
              z_83lm = pe0tc['length'];if (!pe0tc['closed'] && gw2xz$(frxbk7, _83ml, pe0tc['tagName'], ybf5r) && (pe0tc['closed'] = !0x0, jsa61['nbsp'] || epd0mt['warning']('unclosed xml attribute')), s1g6ja && z_83lm) {
            for (var f59ryb = gsj6ga1(s1g6ja, {}), _$z3l8 = 0x0; _$z3l8 < z_83lm; _$z3l8++) {
              var $wlz_ = pe0tc[_$z3l8];$2kzxw($wlz_['offset']), $wlz_['locator'] = gsj6ga1(s1g6ja, {});
            }usaig['locator'] = f59ryb, gkw$zx(pe0tc, usaig, x27wk) && rbk79f['push'](pe0tc), usaig['locator'] = s1g6ja;
          } else gkw$zx(pe0tc, usaig, x27wk) && rbk79f['push'](pe0tc);'http://www.w3.org/1999/xhtml' !== pe0tc['uri'] || pe0tc['closed'] ? _83ml++ : _83ml = giujsg(frxbk7, _83ml, pe0tc['tagName'], jiga6s, usaig);}
    } catch (r97fb) {
      epd0mt['error']('element parse error: ' + r97fb), _83ml = -0x1;
    }fy9r < _83ml ? fy9r = _83ml : voctp(Math['max'](vdtcp, fy9r) + 0x1);
  }
}function gsj6ga1(by9f5r, b579) {
  return b579['lineNumber'] = by9f5r['lineNumber'], b579['columnNumber'] = by9f5r['columnNumber'], b579;
}function gz$3lw(dcovtp, l$zx, ujhsi, yu4si, d0mpt, tmpde) {
  for (var h9u4y, wz$k = ++l$zx, ijga = gempt0;;) {
    var e0cdt = dcovtp['charAt'](wz$k);switch (e0cdt) {case '=':
        if (ijga === ghy9b5f) h9u4y = dcovtp['slice'](l$zx, wz$k), ijga = gwz;else {
          if (ijga !== gbrkxf) throw new Error('attribute equal must after attrName');ijga = gwz;
        }break;case '\x27':case '\x22':
        if (ijga === gwz || ijga === ghy9b5f) {
          if (ijga === ghy9b5f && (tmpde['warning']('attribute value must after "="'), h9u4y = dcovtp['slice'](l$zx, wz$k)), !(0x0 < (wz$k = dcovtp['indexOf'](e0cdt, l$zx = wz$k + 0x1)))) throw new Error('attribute value no end \'' + e0cdt + '\' match');vqcdo = dcovtp['slice'](l$zx, wz$k)['replace'](/&#?\w+;/g, d0mpt), ujhsi['add'](h9u4y, vqcdo, l$zx - 0x1), ijga = gw7kxr;
        } else {
          if (ijga != gm_3zl8) throw new Error('attribute value must after "="');vqcdo = dcovtp['slice'](l$zx, wz$k)['replace'](/&#?\w+;/g, d0mpt), ujhsi['add'](h9u4y, vqcdo, l$zx), tmpde['warning']('attribute "' + h9u4y + '" missed start quot(' + e0cdt + ')!!'), l$zx = wz$k + 0x1, ijga = gw7kxr;
        }break;case '/':
        switch (ijga) {case gempt0:
            ujhsi['setTagName'](dcovtp['slice'](l$zx, wz$k));case gw7kxr:case gk72xwr:case grfkxb7:
            ijga = grfkxb7, ujhsi['closed'] = !0x0;case gm_3zl8:case ghy9b5f:case gbrkxf:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return tmpde['error']('unexpected end of input'), ijga == gempt0 && ujhsi['setTagName'](dcovtp['slice'](l$zx, wz$k)), wz$k;case '>':
        switch (ijga) {case gempt0:
            ujhsi['setTagName'](dcovtp['slice'](l$zx, wz$k));case gw7kxr:case gk72xwr:case grfkxb7:
            break;case gm_3zl8:case ghy9b5f:
            '/' === (vqcdo = dcovtp['slice'](l$zx, wz$k))['slice'](-0x1) && (ujhsi['closed'] = !0x0, vqcdo = vqcdo['slice'](0x0, -0x1));case gbrkxf:
            ijga === gbrkxf && (vqcdo = h9u4y), ijga == gm_3zl8 ? (tmpde['warning']('attribute "' + vqcdo + '" missed quot(")!!'), ujhsi['add'](h9u4y, vqcdo['replace'](/&#?\w+;/g, d0mpt), l$zx)) : ('http://www.w3.org/1999/xhtml' === yu4si[''] && vqcdo['match'](/^(?:disabled|checked|selected)$/i) || tmpde['warning']('attribute "' + vqcdo + '" missed value!! "' + vqcdo + '" instead!!'), ujhsi['add'](vqcdo, vqcdo, l$zx));break;case gwz:
            throw new Error('attribute value missed!!');}return wz$k;case '\u0080':
        e0cdt = '\x20';default:
        if (e0cdt <= '\x20') switch (ijga) {case gempt0:
            ujhsi['setTagName'](dcovtp['slice'](l$zx, wz$k)), ijga = gk72xwr;break;case ghy9b5f:
            h9u4y = dcovtp['slice'](l$zx, wz$k), ijga = gbrkxf;break;case gm_3zl8:
            var vqcdo = dcovtp['slice'](l$zx, wz$k)['replace'](/&#?\w+;/g, d0mpt);tmpde['warning']('attribute "' + vqcdo + '" missed quot(")!!'), ujhsi['add'](h9u4y, vqcdo, l$zx);case gw7kxr:
            ijga = gk72xwr;} else switch (ijga) {case gbrkxf:
            ujhsi['tagName'], 'http://www.w3.org/1999/xhtml' === yu4si[''] && h9u4y['match'](/^(?:disabled|checked|selected)$/i) || tmpde['warning']('attribute "' + h9u4y + '" missed value!! "' + h9u4y + '" instead2!!'), ujhsi['add'](h9u4y, h9u4y, l$zx), l$zx = wz$k, ijga = ghy9b5f;break;case gw7kxr:
            tmpde['warning']('attribute space is required"' + h9u4y + '\x22!!');case gk72xwr:
            ijga = ghy9b5f, l$zx = wz$k;break;case gwz:
            ijga = gm_3zl8, l$zx = wz$k;break;case grfkxb7:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wz$k++;
  }
}function gkw$zx(rb79fk, me80_3, kxf72) {
  for (var yu945 = rb79fk['tagName'], hiuj4 = null, _3m8l = rb79fk['length']; _3m8l--;) {
    var gaiu = rb79fk[_3m8l],
        emptd = gaiu['qName'],
        y4ihs = gaiu['value'],
        w3z$l;emptd = 0x0 < (xkbrf7 = emptd['indexOf'](':')) ? (xzwk$ = gaiu['prefix'] = emptd['slice'](0x0, xkbrf7), w3z$l = emptd['slice'](xkbrf7 + 0x1), 'xmlns' === xzwk$ && w3z$l) : (xzwk$ = null, 'xmlns' === (w3z$l = emptd) && ''), gaiu['localName'] = w3z$l, !0x1 !== emptd && (null == hiuj4 && (hiuj4 = {}, gtde0pc(kxf72, kxf72 = {})), kxf72[emptd] = hiuj4[emptd] = y4ihs, gaiu['uri'] = 'http://www.w3.org/2000/xmlns/', me80_3['startPrefixMapping'](emptd, y4ihs));
  }for (_3m8l = rb79fk['length']; _3m8l--;) (xzwk$ = (gaiu = rb79fk[_3m8l])['prefix']) && ('xml' === xzwk$ && (gaiu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xzwk$ && (gaiu['uri'] = kxf72[xzwk$ || '']));var xkbrf7;w3z$l = 0x0 < (xkbrf7 = yu945['indexOf'](':')) ? (xzwk$ = rb79fk['prefix'] = yu945['slice'](0x0, xkbrf7), rb79fk['localName'] = yu945['slice'](xkbrf7 + 0x1)) : (xzwk$ = null, rb79fk['localName'] = yu945);var agjsi6 = rb79fk['uri'] = kxf72[xzwk$ || ''];if (me80_3['startElement'](agjsi6, w3z$l, yu945, rb79fk), !rb79fk['closed']) return rb79fk['currentNSMap'] = kxf72, rb79fk['localNSMap'] = hiuj4, !0x0;if (me80_3['endElement'](agjsi6, w3z$l, yu945), hiuj4) {
    for (var xzwk$ in hiuj4) me80_3['endPrefixMapping'](xzwk$);
  }
}function giujsg(xzwl2, tpecd0, tp0ce, m8_ep, yh94u) {
  if (/^(?:script|textarea)$/i['test'](tp0ce)) {
    var w3_l$ = xzwl2['indexOf']('</' + tp0ce + '>', tpecd0),
        xzwl2 = xzwl2['substring'](tpecd0 + 0x1, w3_l$);if (/[&<]/['test'](xzwl2)) return (/^script$/i['test'](tp0ce) || (xzwl2 = xzwl2['replace'](/&#?\w+;/g, m8_ep)), yh94u['characters'](xzwl2, 0x0, xzwl2['length']), w3_l$
    );
  }return tpecd0 + 0x1;
}function gw2xz$(fbry9, pte0md, $xz, xw2$kz) {
  var aj6 = xw2$kz[$xz];return null == aj6 && ((aj6 = fbry9['lastIndexOf']('</' + $xz + '>')) < pte0md && (aj6 = fbry9['lastIndexOf']('</' + $xz)), xw2$kz[$xz] = aj6), aj6 < pte0md;
}function gtde0pc(b95r, mde80p) {
  for (var cpe0t in b95r) mde80p[cpe0t] = b95r[cpe0t];
}function giau4js(p8dm, p0ctd, emd8p, kf97r) {
  var ctoe = p8dm['charAt'](p0ctd + 0x2);if ('-' === ctoe) return '-' !== p8dm['charAt'](p0ctd + 0x3) ? -0x1 : p0ctd < (x7f2r = p8dm['indexOf']('-->', p0ctd + 0x4)) ? (emd8p['comment'](p8dm, p0ctd + 0x4, x7f2r - p0ctd - 0x4), x7f2r + 0x3) : (kf97r['error']('Unclosed comment'), -0x1);if ('CDATA[' == p8dm['substr'](p0ctd + 0x3, 0x6)) {
    var x7f2r = p8dm['indexOf'](']]>', p0ctd + 0x9);return emd8p['startCDATA'](), emd8p['characters'](p8dm, p0ctd + 0x9, x7f2r - p0ctd - 0x9), emd8p['endCDATA'](), x7f2r + 0x3;
  }ctoe = gz2$w3l(p8dm, p0ctd), kf97r = ctoe['length'];if (0x1 < kf97r && /!doctype/i['test'](ctoe[0x0][0x0])) return x7f2r = ctoe[0x1][0x0], p8dm = 0x3 < kf97r && /^public$/i['test'](ctoe[0x2][0x0]) && ctoe[0x3][0x0], p0ctd = 0x4 < kf97r && ctoe[0x4][0x0], kf97r = ctoe[kf97r - 0x1], (emd8p['startDTD'](x7f2r, p8dm && p8dm['replace'](/^(['"])(.*?)\1$/, '$2'), p0ctd && p0ctd['replace'](/^(['"])(.*?)\1$/, '$2')), emd8p['endDTD'](), kf97r['index'] + kf97r[0x0]['length']);return -0x1;
}function gr5(e8p0dm, lw3$_, f9hby) {
  var x7rbk = e8p0dm['indexOf']('?>', lw3$_);if (x7rbk) return lw3$_ = e8p0dm['substring'](lw3$_, x7rbk)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), lw3$_ ? (lw3$_[0x0]['length'], f9hby['processingInstruction'](lw3$_[0x1], lw3$_[0x2]), x7rbk + 0x2) : -0x1;return -0x1;
}function g_8em0() {}function gyi5(y95b4, toec) {
  return y95b4['__proto__'] = toec, y95b4;
}function gz2$w3l(wr7x2k, h5b4y) {
  var $w_lz,
      r759b = [],
      y5h9b4 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (y5h9b4['lastIndex'] = h5b4y, y5h9b4['exec'](wr7x2k); $w_lz = y5h9b4['exec'](wr7x2k);) if (r759b['push']($w_lz), $w_lz[0x1]) return r759b;
}var g_$8z = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gby5h4 = new RegExp('[\\-\\.0-9' + g_$8z['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gocvqdt = new RegExp('^' + g_$8z['source'] + gby5h4['source'] + '*(?::' + g_$8z['source'] + gby5h4['source'] + '*)?$'),
    gempt0 = 0x0,
    ghy9b5f = 0x1,
    gbrkxf = 0x2,
    gwz = 0x3,
    gm_3zl8 = 0x4,
    gw7kxr = 0x5,
    gk72xwr = 0x6,
    grfkxb7 = 0x7;gh9['prototype'] = { 'parse': function (z$l_3w, ovptdc, ajg6s1) {
    var l80m3_ = this['domBuilder'];l80m3_['startDocument'](), gtde0pc(ovptdc, ovptdc = {}), gfxbrk(z$l_3w, ovptdc, ajg6s1, l80m3_, this['errorHandler']), l80m3_['endDocument']();
  } }, g_8em0['prototype'] = { 'setTagName': function (jh4ui) {
    if (!gocvqdt['test'](jh4ui)) throw new Error('invalid tagName:' + jh4ui);this['tagName'] = jh4ui;
  }, 'add': function (_380, yhb945, cpvd) {
    if (!gocvqdt['test'](_380)) throw new Error('invalid attribute:' + _380);this[this['length']++] = { 'qName': _380, 'value': yhb945, 'offset': cpvd };
  }, 'length': 0x0, 'getLocalName': function (_0p8m) {
    return this[_0p8m]['localName'];
  }, 'getLocator': function ($l_z8) {
    return this[$l_z8]['locator'];
  }, 'getQName': function (zx$l2w) {
    return this[zx$l2w]['qName'];
  }, 'getURI': function (xkrf72) {
    return this[xkrf72]['uri'];
  }, 'getValue': function (isgaj) {
    return this[isgaj]['value'];
  } }, gyi5({}, gyi5['prototype']) instanceof gyi5 || (gyi5 = function (rxfbk7, $lxw2) {
  function _m0e8p() {}for ($lxw2 in _m0e8p['prototype'] = $lxw2, _m0e8p = new _m0e8p(), rxfbk7) _m0e8p[$lxw2] = rxfbk7[$lxw2];return _m0e8p;
}), exports['XMLReader'] = gh9;