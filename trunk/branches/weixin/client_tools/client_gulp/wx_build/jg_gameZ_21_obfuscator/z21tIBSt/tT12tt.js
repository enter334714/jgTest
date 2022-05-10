var v = wx.$d;
function zli1b() {}function zfulb8(v3z_2, v216_i, xda95p, ky3wvz, i18_26) {
  function n7ecj(a954px) {
    if (a954px > 0xffff) {
      a954px -= 0x10000;var z6v3_2 = 0xd800 + (a954px >> 0xa),
          r7enjc = 0xdc00 + (0x3ff & a954px);return String['fromCharCode'](z6v3_2, r7enjc);
    }return String['fromCharCode'](a954px);
  }function l18bfi(eywcn) {
    var mh0oq = eywcn['slice'](0x1, -0x1);return mh0oq in xda95p ? xda95p[mh0oq] : '#' === mh0oq['charAt'](0x0) ? n7ecj(parseInt(mh0oq['substr'](0x1)['replace']('x', '0x'))) : (i18_26['error']('entity not found:' + eywcn), eywcn);
  }function cn7wk(v6_23z) {
    if (v6_23z > i8b61_) {
      var u9dfx = v3z_2['substring'](i8b61_, v6_23z)['replace'](/&#?\w+;/g, l18bfi);wc7kny && v32_6(i8b61_), ky3wvz['characters'](u9dfx, 0x0, v6_23z - i8b61_), i8b61_ = v6_23z;
    }
  }function v32_6(i_62v, ld) {
    for (; i_62v >= xq4a5p && (ld = af9udx['exec'](v3z_2));) oq0$mh = ld['index'], xq4a5p = oq0$mh + ld[0x0]['length'], wc7kny['lineNumber']++;wc7kny['columnNumber'] = i_62v - oq0$mh + 0x1;
  }for (var oq0$mh = 0x0, xq4a5p = 0x0, af9udx = /.*(?:\r\n?|\n)|.*$/g, wc7kny = ky3wvz['locator'], _v6z1 = [{ 'currentNSMap': v216_i }], h4o = {}, i8b61_ = 0x0;;) {
    try {
      var lfxd9 = v3z_2['indexOf']('<', i8b61_);if (0x0 > lfxd9) {
        if (!v3z_2['substr'](i8b61_)['match'](/^\s*$/)) {
          var xlu9d = ky3wvz['doc'],
              m0$th = xlu9d['createTextNode'](v3z_2['substr'](i8b61_));xlu9d['appendChild'](m0$th), ky3wvz['currentElement'] = m0$th;
        }return;
      }switch (lfxd9 > i8b61_ && cn7wk(lfxd9), v3z_2['charAt'](lfxd9 + 0x1)) {case '/':
          var l8bif1 = v3z_2['indexOf']('>', lfxd9 + 0x3),
              ew7 = v3z_2['substring'](lfxd9 + 0x2, l8bif1),
              c3y7kw = _v6z1['pop']();0x0 > l8bif1 ? (ew7 = v3z_2['substring'](lfxd9 + 0x2)['replace'](/[\s<].*/, ''), i18_26['error']('end tag name: ' + ew7 + ' is not complete:' + c3y7kw['tagName']), l8bif1 = lfxd9 + 0x1 + ew7['length']) : ew7['match'](/\s</) && (ew7 = ew7['replace'](/[\s<].*/, ''), i18_26['error']('end tag name: ' + ew7 + ' maybe not complete'), l8bif1 = lfxd9 + 0x1 + ew7['length']);var dl9u = c3y7kw['localNSMap'],
              wck3zy = c3y7kw['tagName'] == ew7,
              k23zv_ = wck3zy || c3y7kw['tagName'] && c3y7kw['tagName']['toLowerCase']() == ew7['toLowerCase']();if (k23zv_) {
            if (ky3wvz['endElement'](c3y7kw['uri'], c3y7kw['localName'], ew7), dl9u) {
              for (var ulibf in dl9u) ky3wvz['endPrefixMapping'](ulibf);
            }wck3zy || i18_26['fatalError']('end tag name: ' + ew7 + ' is not match the current start tagName:' + c3y7kw['tagName']);
          } else _v6z1['push'](c3y7kw);l8bif1++;break;case '?':
          wc7kny && v32_6(lfxd9), l8bif1 = z_2z3k(v3z_2, lfxd9, ky3wvz);break;case '!':
          wc7kny && v32_6(lfxd9), l8bif1 = zoh0t$m(v3z_2, lfxd9, ky3wvz, i18_26);break;default:
          wc7kny && v32_6(lfxd9);var mth$o = new zbli86(),
              c7nky = _v6z1[_v6z1['length'] - 0x1]['currentNSMap'],
              l8bif1 = zpq5x(v3z_2, lfxd9, mth$o, c7nky, l18bfi, i18_26),
              y3vzwk = mth$o['length'];if (!mth$o['closed'] && ztgo(v3z_2, l8bif1, mth$o['tagName'], h4o) && (mth$o['closed'] = !0x0, xda95p['nbsp'] || i18_26['warning']('unclosed xml attribute')), wc7kny && y3vzwk) {
            for (var o$mg0 = zd8bluf(wc7kny, {}), rcw7n = 0x0; y3vzwk > rcw7n; rcw7n++) {
              var ht0om$ = mth$o[rcw7n];v32_6(ht0om$['offset']), ht0om$['locator'] = zd8bluf(wc7kny, {});
            }ky3wvz['locator'] = o$mg0, zl861i(mth$o, ky3wvz, c7nky) && _v6z1['push'](mth$o), ky3wvz['locator'] = wc7kny;
          } else zl861i(mth$o, ky3wvz, c7nky) && _v6z1['push'](mth$o);'http://www.w3.org/1999/xhtml' !== mth$o['uri'] || mth$o['closed'] ? l8bif1++ : l8bif1 = zo0g$m(v3z_2, l8bif1, mth$o['tagName'], l18bfi, ky3wvz);}
    } catch (h0qom) {
      i18_26['error']('element parse error: ' + h0qom), l8bif1 = -0x1;
    }l8bif1 > i8b61_ ? i8b61_ = l8bif1 : cn7wk(Math['max'](lfxd9, i8b61_) + 0x1);
  }
}function zd8bluf(yw3c7, ycz3) {
  return ycz3['lineNumber'] = yw3c7['lineNumber'], ycz3['columnNumber'] = yw3c7['columnNumber'], ycz3;
}function zpq5x(k_2v, df9aux, libuf, w73cky, aqhp5, o$tmh) {
  for (var faxud9, nk7wyc, ywk3cz = ++df9aux, qohm4 = zp9a4x5;;) {
    var hmq40 = k_2v['charAt'](ywk3cz);switch (hmq40) {case '=':
        if (qohm4 === zbf9lud) faxud9 = k_2v['slice'](df9aux, ywk3cz), qohm4 = zo0ht;else {
          if (qohm4 !== zldfbu) throw new Error('attribute equal must after attrName');qohm4 = zo0ht;
        }break;case '\x27':case '\x22':
        if (qohm4 === zo0ht || qohm4 === zbf9lud) {
          if (qohm4 === zbf9lud && (o$tmh['warning']('attribute value must after "="'), faxud9 = k_2v['slice'](df9aux, ywk3cz)), df9aux = ywk3cz + 0x1, ywk3cz = k_2v['indexOf'](hmq40, df9aux), !(ywk3cz > 0x0)) throw new Error('attribute value no end \'' + hmq40 + '\' match');nk7wyc = k_2v['slice'](df9aux, ywk3cz)['replace'](/&#?\w+;/g, aqhp5), libuf['add'](faxud9, nk7wyc, df9aux - 0x1), qohm4 = zh0t;
        } else {
          if (qohm4 != zfi1lb) throw new Error('attribute value must after "="');nk7wyc = k_2v['slice'](df9aux, ywk3cz)['replace'](/&#?\w+;/g, aqhp5), libuf['add'](faxud9, nk7wyc, df9aux), o$tmh['warning']('attribute "' + faxud9 + '" missed start quot(' + hmq40 + ')!!'), df9aux = ywk3cz + 0x1, qohm4 = zh0t;
        }break;case '/':
        switch (qohm4) {case zp9a4x5:
            libuf['setTagName'](k_2v['slice'](df9aux, ywk3cz));case zh0t:case zkywv3:case zjecn7r:
            qohm4 = zjecn7r, libuf['closed'] = !0x0;case zfi1lb:case zbf9lud:case zldfbu:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return o$tmh['error']('unexpected end of input'), qohm4 == zp9a4x5 && libuf['setTagName'](k_2v['slice'](df9aux, ywk3cz)), ywk3cz;case '>':
        switch (qohm4) {case zp9a4x5:
            libuf['setTagName'](k_2v['slice'](df9aux, ywk3cz));case zh0t:case zkywv3:case zjecn7r:
            break;case zfi1lb:case zbf9lud:
            nk7wyc = k_2v['slice'](df9aux, ywk3cz), '/' === nk7wyc['slice'](-0x1) && (libuf['closed'] = !0x0, nk7wyc = nk7wyc['slice'](0x0, -0x1));case zldfbu:
            qohm4 === zldfbu && (nk7wyc = faxud9), qohm4 == zfi1lb ? (o$tmh['warning']('attribute "' + nk7wyc + '" missed quot(")!!'), libuf['add'](faxud9, nk7wyc['replace'](/&#?\w+;/g, aqhp5), df9aux)) : ('http://www.w3.org/1999/xhtml' === w73cky[''] && nk7wyc['match'](/^(?:disabled|checked|selected)$/i) || o$tmh['warning']('attribute "' + nk7wyc + '" missed value!! "' + nk7wyc + '" instead!!'), libuf['add'](nk7wyc, nk7wyc, df9aux));break;case zo0ht:
            throw new Error('attribute value missed!!');}return ywk3cz;case '\u0080':
        hmq40 = '\x20';default:
        if ('\x20' >= hmq40) switch (qohm4) {case zp9a4x5:
            libuf['setTagName'](k_2v['slice'](df9aux, ywk3cz)), qohm4 = zkywv3;break;case zbf9lud:
            faxud9 = k_2v['slice'](df9aux, ywk3cz), qohm4 = zldfbu;break;case zfi1lb:
            var nk7wyc = k_2v['slice'](df9aux, ywk3cz)['replace'](/&#?\w+;/g, aqhp5);o$tmh['warning']('attribute "' + nk7wyc + '" missed quot(")!!'), libuf['add'](faxud9, nk7wyc, df9aux);case zh0t:
            qohm4 = zkywv3;} else switch (qohm4) {case zldfbu:
            {
              libuf['tagName'];
            }'http://www.w3.org/1999/xhtml' === w73cky[''] && faxud9['match'](/^(?:disabled|checked|selected)$/i) || o$tmh['warning']('attribute "' + faxud9 + '" missed value!! "' + faxud9 + '" instead2!!'), libuf['add'](faxud9, faxud9, df9aux), df9aux = ywk3cz, qohm4 = zbf9lud;break;case zh0t:
            o$tmh['warning']('attribute space is required"' + faxud9 + '\x22!!');case zkywv3:
            qohm4 = zbf9lud, df9aux = ywk3cz;break;case zo0ht:
            qohm4 = zfi1lb, df9aux = ywk3cz;break;case zjecn7r:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ywk3cz++;
  }
}function zl861i(ncwky7, dfuax9, r7ejcn) {
  for (var xlufd = ncwky7['tagName'], ho5qp4 = null, zvwk3y = ncwky7['length']; zvwk3y--;) {
    var l8ibfu = ncwky7[zvwk3y],
        w7ncye = l8ibfu['qName'],
        xpa945 = l8ibfu['value'],
        oh0 = w7ncye['indexOf'](':');if (oh0 > 0x0) var _3zk2v = l8ibfu['prefix'] = w7ncye['slice'](0x0, oh0),
        fiulb = w7ncye['slice'](oh0 + 0x1),
        _z6v2 = 'xmlns' === _3zk2v && fiulb;else fiulb = w7ncye, _3zk2v = null, _z6v2 = 'xmlns' === w7ncye && '';l8ibfu['localName'] = fiulb, _z6v2 !== !0x1 && (null == ho5qp4 && (ho5qp4 = {}, zg0otm$(r7ejcn, r7ejcn = {})), r7ejcn[_z6v2] = ho5qp4[_z6v2] = xpa945, l8ibfu['uri'] = 'http://www.w3.org/2000/xmlns/', dfuax9['startPrefixMapping'](_z6v2, xpa945));
  }for (var zvwk3y = ncwky7['length']; zvwk3y--;) {
    l8ibfu = ncwky7[zvwk3y];var _3zk2v = l8ibfu['prefix'];_3zk2v && ('xml' === _3zk2v && (l8ibfu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _3zk2v && (l8ibfu['uri'] = r7ejcn[_3zk2v || '']));
  }var oh0 = xlufd['indexOf'](':');oh0 > 0x0 ? (_3zk2v = ncwky7['prefix'] = xlufd['slice'](0x0, oh0), fiulb = ncwky7['localName'] = xlufd['slice'](oh0 + 0x1)) : (_3zk2v = null, fiulb = ncwky7['localName'] = xlufd);var om4qh = ncwky7['uri'] = r7ejcn[_3zk2v || ''];if (dfuax9['startElement'](om4qh, fiulb, xlufd, ncwky7), !ncwky7['closed']) return ncwky7['currentNSMap'] = r7ejcn, ncwky7['localNSMap'] = ho5qp4, !0x0;if (dfuax9['endElement'](om4qh, fiulb, xlufd), ho5qp4) {
    for (_3zk2v in ho5qp4) dfuax9['endPrefixMapping'](_3zk2v);
  }
}function zo0g$m(wn7cky, h0otm$, tm$0, w3c7, gm$0to) {
  if (/^(?:script|textarea)$/i['test'](tm$0)) {
    var wnye = wn7cky['indexOf']('</' + tm$0 + '>', h0otm$),
        ceny7w = wn7cky['substring'](h0otm$ + 0x1, wnye);if (/[&<]/['test'](ceny7w)) return (/^script$/i['test'](tm$0) ? (gm$0to['characters'](ceny7w, 0x0, ceny7w['length']), wnye) : (ceny7w = ceny7w['replace'](/&#?\w+;/g, w3c7), gm$0to['characters'](ceny7w, 0x0, ceny7w['length']), wnye)
    );
  }return h0otm$ + 0x1;
}function ztgo(xa95p4, ib168_, rec7j, xpq4a5) {
  var ap5hq4 = xpq4a5[rec7j];return null == ap5hq4 && (ap5hq4 = xa95p4['lastIndexOf']('</' + rec7j + '>'), ib168_ > ap5hq4 && (ap5hq4 = xa95p4['lastIndexOf']('</' + rec7j)), xpq4a5[rec7j] = ap5hq4), ib168_ > ap5hq4;
}function zg0otm$(nwyc7e, $o0hq) {
  for (var dfux9l in nwyc7e) $o0hq[dfux9l] = nwyc7e[dfux9l];
}function zoh0t$m(cy37, fubld, xfud9a, yv2z3k) {
  var i8l1 = cy37['charAt'](fubld + 0x2);switch (i8l1) {case '-':
      if ('-' === cy37['charAt'](fubld + 0x3)) {
        var zwv3 = cy37['indexOf']('-->', fubld + 0x4);return zwv3 > fubld ? (xfud9a['comment'](cy37, fubld + 0x4, zwv3 - fubld - 0x4), zwv3 + 0x3) : (yv2z3k['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cy37['substr'](fubld + 0x3, 0x6)) {
        var zwv3 = cy37['indexOf'](']]>', fubld + 0x9);return xfud9a['startCDATA'](), xfud9a['characters'](cy37, fubld + 0x9, zwv3 - fubld - 0x9), xfud9a['endCDATA'](), zwv3 + 0x3;
      }var oh4q0m = zu8dlf(cy37, fubld),
          hop4 = oh4q0m['length'];if (hop4 > 0x1 && /!doctype/i['test'](oh4q0m[0x0][0x0])) {
        var g0t$m = oh4q0m[0x1][0x0],
            q5axp = hop4 > 0x3 && /^public$/i['test'](oh4q0m[0x2][0x0]) && oh4q0m[0x3][0x0],
            wk3yv = hop4 > 0x4 && oh4q0m[0x4][0x0],
            fbu8i = oh4q0m[hop4 - 0x1];return xfud9a['startDTD'](g0t$m, q5axp && q5axp['replace'](/^(['"])(.*?)\1$/, '$2'), wk3yv && wk3yv['replace'](/^(['"])(.*?)\1$/, '$2')), xfud9a['endDTD'](), fbu8i['index'] + fbu8i[0x0]['length'];
      }}return -0x1;
}function z_2z3k(z3_6, kyzv23, fldb9) {
  var _z621v = z3_6['indexOf']('?>', kyzv23);if (_z621v) {
    var v1_2z = z3_6['substring'](kyzv23, _z621v)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (v1_2z) {
      {
        v1_2z[0x0]['length'];
      }return fldb9['processingInstruction'](v1_2z[0x1], v1_2z[0x2]), _z621v + 0x2;
    }return -0x1;
  }return -0x1;
}function zbli86() {}function zw3cyk7(njrce7, enc7w) {
  return njrce7['__proto__'] = enc7w, njrce7;
}function zu8dlf(wycn7, p0q) {
  var wc7ner,
      fxdu9a = [],
      d9xap5 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (d9xap5['lastIndex'] = p0q, d9xap5['exec'](wycn7); wc7ner = d9xap5['exec'](wycn7);) if (fxdu9a['push'](wc7ner), wc7ner[0x1]) return fxdu9a;
}var zh54o = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zb16i_8 = new RegExp('[\\-\\.0-9' + zh54o['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    z$mtog = new RegExp('^' + zh54o['source'] + zb16i_8['source'] + '*(?::' + zh54o['source'] + zb16i_8['source'] + '*)?$'),
    zp9a4x5 = 0x0,
    zbf9lud = 0x1,
    zldfbu = 0x2,
    zo0ht = 0x3,
    zfi1lb = 0x4,
    zh0t = 0x5,
    zkywv3 = 0x6,
    zjecn7r = 0x7;zli1b['prototype'] = { 'parse': function (u8fibl, p5, hoq5) {
    var fx9ud = this['domBuilder'];fx9ud['startDocument'](), zg0otm$(p5, p5 = {}), zfulb8(u8fibl, p5, hoq5, fx9ud, this['errorHandler']), fx9ud['endDocument']();
  } }, zbli86['prototype'] = { 'setTagName': function (aq4h) {
    if (!z$mtog['test'](aq4h)) throw new Error('invalid tagName:' + aq4h);this['tagName'] = aq4h;
  }, 'add': function (neyw7, w3yzkv, wcr) {
    if (!z$mtog['test'](neyw7)) throw new Error('invalid attribute:' + neyw7);this[this['length']++] = { 'qName': neyw7, 'value': w3yzkv, 'offset': wcr };
  }, 'length': 0x0, 'getLocalName': function (xd9ufl) {
    return this[xd9ufl]['localName'];
  }, 'getLocator': function (p95xad) {
    return this[p95xad]['locator'];
  }, 'getQName': function (ufx9l) {
    return this[ufx9l]['qName'];
  }, 'getURI': function (p9) {
    return this[p9]['uri'];
  }, 'getValue': function (m0tg$o) {
    return this[m0tg$o]['value'];
  } }, zw3cyk7({}, zw3cyk7['prototype']) instanceof zw3cyk7 || (zw3cyk7 = function (zyw3kc, vk3z_) {
  function zv3y2k() {}zv3y2k['prototype'] = vk3z_, zv3y2k = new zv3y2k();for (vk3z_ in zyw3kc) zv3y2k[vk3z_] = zyw3kc[vk3z_];return zv3y2k;
}), exports['XMLReader'] = zli1b;