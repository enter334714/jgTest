var B = wx.$z;
function zmn7() {}function zrby8_k(mi7q, tezad, ze9sa, iqm$3, yzdo) {
  function x9sea(dtkz) {
    if (dtkz > 0xffff) {
      dtkz -= 0x10000;var s9hax1 = 0xd800 + (dtkz >> 0xa),
          ghp64 = 0xdc00 + (0x3ff & dtkz);return String['fromCharCode'](s9hax1, ghp64);
    }return String['fromCharCode'](dtkz);
  }function vnfl6(aexstz) {
    var u58r2_ = aexstz['slice'](0x1, -0x1);return u58r2_ in ze9sa ? ze9sa[u58r2_] : '#' === u58r2_['charAt'](0x0) ? x9sea(parseInt(u58r2_['substr'](0x1)['replace']('x', '0x'))) : (yzdo['error']('entity not found:' + aexstz), aexstz);
  }function h9xa1s(_bk58r) {
    if (_bk58r > rk8yb_) {
      var lnim7 = mi7q['substring'](rk8yb_, _bk58r)['replace'](/&#?\w+;/g, vnfl6);v7n6fl && qmn7i(rk8yb_), iqm$3['characters'](lnim7, 0x0, _bk58r - rk8yb_), rk8yb_ = _bk58r;
    }
  }function qmn7i(br_ky, tezdao) {
    for (; br_ky >= qi$m3j && (tezdao = xsh1['exec'](mi7q));) _852 = tezdao['index'], qi$m3j = _852 + tezdao[0x0]['length'], v7n6fl['lineNumber']++;v7n6fl['columnNumber'] = br_ky - _852 + 0x1;
  }for (var _852 = 0x0, qi$m3j = 0x0, xsh1 = /.*(?:\r\n?|\n)|.*$/g, v7n6fl = iqm$3['locator'], ok8 = [{ 'currentNSMap': tezad }], f6gv4 = {}, rk8yb_ = 0x0;;) {
    try {
      var tedzy = mi7q['indexOf']('<', rk8yb_);if (0x0 > tedzy) {
        if (!mi7q['substr'](rk8yb_)['match'](/^\s*$/)) {
          var qjm$3 = iqm$3['doc'],
              v4flg6 = qjm$3['createTextNode'](mi7q['substr'](rk8yb_));qjm$3['appendChild'](v4flg6), iqm$3['currentElement'] = v4flg6;
        }return;
      }switch (tedzy > rk8yb_ && h9xa1s(tedzy), mi7q['charAt'](tedzy + 0x1)) {case '/':
          var nm73li = mi7q['indexOf']('>', tedzy + 0x3),
              mnvli = mi7q['substring'](tedzy + 0x2, nm73li),
              ky8do = ok8['pop']();0x0 > nm73li ? (mnvli = mi7q['substring'](tedzy + 0x2)['replace'](/[\s<].*/, ''), yzdo['error']('end tag name: ' + mnvli + ' is not complete:' + ky8do['tagName']), nm73li = tedzy + 0x1 + mnvli['length']) : mnvli['match'](/\s</) && (mnvli = mnvli['replace'](/[\s<].*/, ''), yzdo['error']('end tag name: ' + mnvli + ' maybe not complete'), nm73li = tedzy + 0x1 + mnvli['length']);var btodk = ky8do['localNSMap'],
              hsxp91 = ky8do['tagName'] == mnvli,
              xsztea = hsxp91 || ky8do['tagName'] && ky8do['tagName']['toLowerCase']() == mnvli['toLowerCase']();if (xsztea) {
            if (iqm$3['endElement'](ky8do['uri'], ky8do['localName'], mnvli), btodk) {
              for (var y_b8 in btodk) iqm$3['endPrefixMapping'](y_b8);
            }hsxp91 || yzdo['fatalError']('end tag name: ' + mnvli + ' is not match the current start tagName:' + ky8do['tagName']);
          } else ok8['push'](ky8do);nm73li++;break;case '?':
          v7n6fl && qmn7i(tedzy), nm73li = zb8odk(mi7q, tedzy, iqm$3);break;case '!':
          v7n6fl && qmn7i(tedzy), nm73li = zf6l7(mi7q, tedzy, iqm$3, yzdo);break;default:
          v7n6fl && qmn7i(tedzy);var okyb = new znv4fl6(),
              zaexs9 = ok8[ok8['length'] - 0x1]['currentNSMap'],
              nm73li = z_58ru(mi7q, tedzy, okyb, zaexs9, vnfl6, yzdo),
              iq3j = okyb['length'];if (!okyb['closed'] && zzse9a(mi7q, nm73li, okyb['tagName'], f6gv4) && (okyb['closed'] = !0x0, ze9sa['nbsp'] || yzdo['warning']('unclosed xml attribute')), v7n6fl && iq3j) {
            for (var bdtyk = zkoyd8b(v7n6fl, {}), _u25 = 0x0; iq3j > _u25; _u25++) {
              var seaot = okyb[_u25];qmn7i(seaot['offset']), seaot['locator'] = zkoyd8b(v7n6fl, {});
            }iqm$3['locator'] = bdtyk, zpgv4(okyb, iqm$3, zaexs9) && ok8['push'](okyb), iqm$3['locator'] = v7n6fl;
          } else zpgv4(okyb, iqm$3, zaexs9) && ok8['push'](okyb);'http://www.w3.org/1999/xhtml' !== okyb['uri'] || okyb['closed'] ? nm73li++ : nm73li = zr25b8(mi7q, nm73li, okyb['tagName'], vnfl6, iqm$3);}
    } catch (taoez) {
      yzdo['error']('element parse error: ' + taoez), nm73li = -0x1;
    }nm73li > rk8yb_ ? rk8yb_ = nm73li : h9xa1s(Math['max'](tedzy, rk8yb_) + 0x1);
  }
}function zkoyd8b(gh9xp1, v46l) {
  return v46l['lineNumber'] = gh9xp1['lineNumber'], v46l['columnNumber'] = gh9xp1['columnNumber'], v46l;
}function z_58ru(ezoas, rb82, dkyz, p19xs, _0wu, h1g94p) {
  for (var g6v4p, i3mq7, esx9a = ++rb82, eozdt = zbr28;;) {
    var es19xa = ezoas['charAt'](esx9a);switch (es19xa) {case '=':
        if (eozdt === zoaezs) g6v4p = ezoas['slice'](rb82, esx9a), eozdt = zmi3qn7;else {
          if (eozdt !== zf4vl) throw new Error('attribute equal must after attrName');eozdt = zmi3qn7;
        }break;case '\x27':case '\x22':
        if (eozdt === zmi3qn7 || eozdt === zoaezs) {
          if (eozdt === zoaezs && (h1g94p['warning']('attribute value must after "="'), g6v4p = ezoas['slice'](rb82, esx9a)), rb82 = esx9a + 0x1, esx9a = ezoas['indexOf'](es19xa, rb82), !(esx9a > 0x0)) throw new Error('attribute value no end \'' + es19xa + '\' match');i3mq7 = ezoas['slice'](rb82, esx9a)['replace'](/&#?\w+;/g, _0wu), dkyz['add'](g6v4p, i3mq7, rb82 - 0x1), eozdt = zazo;
        } else {
          if (eozdt != zh4gp6f) throw new Error('attribute value must after "="');i3mq7 = ezoas['slice'](rb82, esx9a)['replace'](/&#?\w+;/g, _0wu), dkyz['add'](g6v4p, i3mq7, rb82), h1g94p['warning']('attribute "' + g6v4p + '" missed start quot(' + es19xa + ')!!'), rb82 = esx9a + 0x1, eozdt = zazo;
        }break;case '/':
        switch (eozdt) {case zbr28:
            dkyz['setTagName'](ezoas['slice'](rb82, esx9a));case zazo:case zh1sxa9:case zdyzteo:
            eozdt = zdyzteo, dkyz['closed'] = !0x0;case zh4gp6f:case zoaezs:case zf4vl:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return h1g94p['error']('unexpected end of input'), eozdt == zbr28 && dkyz['setTagName'](ezoas['slice'](rb82, esx9a)), esx9a;case '>':
        switch (eozdt) {case zbr28:
            dkyz['setTagName'](ezoas['slice'](rb82, esx9a));case zazo:case zh1sxa9:case zdyzteo:
            break;case zh4gp6f:case zoaezs:
            i3mq7 = ezoas['slice'](rb82, esx9a), '/' === i3mq7['slice'](-0x1) && (dkyz['closed'] = !0x0, i3mq7 = i3mq7['slice'](0x0, -0x1));case zf4vl:
            eozdt === zf4vl && (i3mq7 = g6v4p), eozdt == zh4gp6f ? (h1g94p['warning']('attribute "' + i3mq7 + '" missed quot(")!!'), dkyz['add'](g6v4p, i3mq7['replace'](/&#?\w+;/g, _0wu), rb82)) : ('http://www.w3.org/1999/xhtml' === p19xs[''] && i3mq7['match'](/^(?:disabled|checked|selected)$/i) || h1g94p['warning']('attribute "' + i3mq7 + '" missed value!! "' + i3mq7 + '" instead!!'), dkyz['add'](i3mq7, i3mq7, rb82));break;case zmi3qn7:
            throw new Error('attribute value missed!!');}return esx9a;case '\u0080':
        es19xa = '\x20';default:
        if ('\x20' >= es19xa) switch (eozdt) {case zbr28:
            dkyz['setTagName'](ezoas['slice'](rb82, esx9a)), eozdt = zh1sxa9;break;case zoaezs:
            g6v4p = ezoas['slice'](rb82, esx9a), eozdt = zf4vl;break;case zh4gp6f:
            var i3mq7 = ezoas['slice'](rb82, esx9a)['replace'](/&#?\w+;/g, _0wu);h1g94p['warning']('attribute "' + i3mq7 + '" missed quot(")!!'), dkyz['add'](g6v4p, i3mq7, rb82);case zazo:
            eozdt = zh1sxa9;} else switch (eozdt) {case zf4vl:
            {
              dkyz['tagName'];
            }'http://www.w3.org/1999/xhtml' === p19xs[''] && g6v4p['match'](/^(?:disabled|checked|selected)$/i) || h1g94p['warning']('attribute "' + g6v4p + '" missed value!! "' + g6v4p + '" instead2!!'), dkyz['add'](g6v4p, g6v4p, rb82), rb82 = esx9a, eozdt = zoaezs;break;case zazo:
            h1g94p['warning']('attribute space is required"' + g6v4p + '\x22!!');case zh1sxa9:
            eozdt = zoaezs, rb82 = esx9a;break;case zmi3qn7:
            eozdt = zh4gp6f, rb82 = esx9a;break;case zdyzteo:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}esx9a++;
  }
}function zpgv4(ea1xs9, haxs1, tedoz) {
  for (var _2br58 = ea1xs9['tagName'], fviln7 = null, pgh6f4 = ea1xs9['length']; pgh6f4--;) {
    var n6l7 = ea1xs9[pgh6f4],
        kr_by = n6l7['qName'],
        v4fp = n6l7['value'],
        r8yb_k = kr_by['indexOf'](':');if (r8yb_k > 0x0) var zsx9e = n6l7['prefix'] = kr_by['slice'](0x0, r8yb_k),
        kod8by = kr_by['slice'](r8yb_k + 0x1),
        aeotd = 'xmlns' === zsx9e && kod8by;else kod8by = kr_by, zsx9e = null, aeotd = 'xmlns' === kr_by && '';n6l7['localName'] = kod8by, aeotd !== !0x1 && (null == fviln7 && (fviln7 = {}, zodytbk(tedoz, tedoz = {})), tedoz[aeotd] = fviln7[aeotd] = v4fp, n6l7['uri'] = 'http://www.w3.org/2000/xmlns/', haxs1['startPrefixMapping'](aeotd, v4fp));
  }for (var pgh6f4 = ea1xs9['length']; pgh6f4--;) {
    n6l7 = ea1xs9[pgh6f4];var zsx9e = n6l7['prefix'];zsx9e && ('xml' === zsx9e && (n6l7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zsx9e && (n6l7['uri'] = tedoz[zsx9e || '']));
  }var r8yb_k = _2br58['indexOf'](':');r8yb_k > 0x0 ? (zsx9e = ea1xs9['prefix'] = _2br58['slice'](0x0, r8yb_k), kod8by = ea1xs9['localName'] = _2br58['slice'](r8yb_k + 0x1)) : (zsx9e = null, kod8by = ea1xs9['localName'] = _2br58);var m7qn3i = ea1xs9['uri'] = tedoz[zsx9e || ''];if (haxs1['startElement'](m7qn3i, kod8by, _2br58, ea1xs9), !ea1xs9['closed']) return ea1xs9['currentNSMap'] = tedoz, ea1xs9['localNSMap'] = fviln7, !0x0;if (haxs1['endElement'](m7qn3i, kod8by, _2br58), fviln7) {
    for (zsx9e in fviln7) haxs1['endPrefixMapping'](zsx9e);
  }
}function zr25b8(r5b_k8, nf64vl, u_582, sxztae, oaetz) {
  if (/^(?:script|textarea)$/i['test'](u_582)) {
    var h1s = r5b_k8['indexOf']('</' + u_582 + '>', nf64vl),
        sh19xa = r5b_k8['substring'](nf64vl + 0x1, h1s);if (/[&<]/['test'](sh19xa)) return (/^script$/i['test'](u_582) ? (oaetz['characters'](sh19xa, 0x0, sh19xa['length']), h1s) : (sh19xa = sh19xa['replace'](/&#?\w+;/g, sxztae), oaetz['characters'](sh19xa, 0x0, sh19xa['length']), h1s)
    );
  }return nf64vl + 0x1;
}function zzse9a(uw2_05, m73inq, lfvn7, daezto) {
  var dytkoz = daezto[lfvn7];return null == dytkoz && (dytkoz = uw2_05['lastIndexOf']('</' + lfvn7 + '>'), m73inq > dytkoz && (dytkoz = uw2_05['lastIndexOf']('</' + lfvn7)), daezto[lfvn7] = dytkoz), m73inq > dytkoz;
}function zodytbk(_u825, vl7nm) {
  for (var ytob in _u825) vl7nm[ytob] = _u825[ytob];
}function zf6l7(br8_k, azdt, asot, daezo) {
  var doyztk = br8_k['charAt'](azdt + 0x2);switch (doyztk) {case '-':
      if ('-' === br8_k['charAt'](azdt + 0x3)) {
        var l64nfv = br8_k['indexOf']('-->', azdt + 0x4);return l64nfv > azdt ? (asot['comment'](br8_k, azdt + 0x4, l64nfv - azdt - 0x4), l64nfv + 0x3) : (daezo['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == br8_k['substr'](azdt + 0x3, 0x6)) {
        var l64nfv = br8_k['indexOf'](']]>', azdt + 0x9);return asot['startCDATA'](), asot['characters'](br8_k, azdt + 0x9, l64nfv - azdt - 0x9), asot['endCDATA'](), l64nfv + 0x3;
      }var xg9p1 = zdoaetz(br8_k, azdt),
          mi7n3q = xg9p1['length'];if (mi7n3q > 0x1 && /!doctype/i['test'](xg9p1[0x0][0x0])) {
        var etdoyz = xg9p1[0x1][0x0],
            u285r = mi7n3q > 0x3 && /^public$/i['test'](xg9p1[0x2][0x0]) && xg9p1[0x3][0x0],
            vim = mi7n3q > 0x4 && xg9p1[0x4][0x0],
            r2b5_ = xg9p1[mi7n3q - 0x1];return asot['startDTD'](etdoyz, u285r && u285r['replace'](/^(['"])(.*?)\1$/, '$2'), vim && vim['replace'](/^(['"])(.*?)\1$/, '$2')), asot['endDTD'](), r2b5_['index'] + r2b5_[0x0]['length'];
      }}return -0x1;
}function zb8odk(qn7im3, _2r8u, h9as1) {
  var dyk8o = qn7im3['indexOf']('?>', _2r8u);if (dyk8o) {
    var nf7lv = qn7im3['substring'](_2r8u, dyk8o)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nf7lv) {
      {
        nf7lv[0x0]['length'];
      }return h9as1['processingInstruction'](nf7lv[0x1], nf7lv[0x2]), dyk8o + 0x2;
    }return -0x1;
  }return -0x1;
}function znv4fl6() {}function zh6p4g1(s1e9xa, hs) {
  return s1e9xa['__proto__'] = hs, s1e9xa;
}function zdoaetz(nmv, sxa91h) {
  var yko,
      fhp46g = [],
      btkdy = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (btkdy['lastIndex'] = sxa91h, btkdy['exec'](nmv); yko = btkdy['exec'](nmv);) if (fhp46g['push'](yko), yko[0x1]) return fhp46g;
}var zdkryb = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zp91sx = new RegExp('[\\-\\.0-9' + zdkryb['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zeazt = new RegExp('^' + zdkryb['source'] + zp91sx['source'] + '*(?::' + zdkryb['source'] + zp91sx['source'] + '*)?$'),
    zbr28 = 0x0,
    zoaezs = 0x1,
    zf4vl = 0x2,
    zmi3qn7 = 0x3,
    zh4gp6f = 0x4,
    zazo = 0x5,
    zh1sxa9 = 0x6,
    zdyzteo = 0x7;zmn7['prototype'] = { 'parse': function ($iqmj3, sx9a1h, br5_8) {
    var zaseto = this['domBuilder'];zaseto['startDocument'](), zodytbk(sx9a1h, sx9a1h = {}), zrby8_k($iqmj3, sx9a1h, br5_8, zaseto, this['errorHandler']), zaseto['endDocument']();
  } }, znv4fl6['prototype'] = { 'setTagName': function (_kr8b) {
    if (!zeazt['test'](_kr8b)) throw new Error('invalid tagName:' + _kr8b);this['tagName'] = _kr8b;
  }, 'add': function (f4vlg, u0_52w, ah19) {
    if (!zeazt['test'](f4vlg)) throw new Error('invalid attribute:' + f4vlg);this[this['length']++] = { 'qName': f4vlg, 'value': u0_52w, 'offset': ah19 };
  }, 'length': 0x0, 'getLocalName': function (asxzet) {
    return this[asxzet]['localName'];
  }, 'getLocator': function (doyk) {
    return this[doyk]['locator'];
  }, 'getQName': function (h94p) {
    return this[h94p]['qName'];
  }, 'getURI': function (_r28b5) {
    return this[_r28b5]['uri'];
  }, 'getValue': function (n7fl6) {
    return this[n7fl6]['value'];
  } }, zh6p4g1({}, zh6p4g1['prototype']) instanceof zh6p4g1 || (zh6p4g1 = function (azset, xta) {
  function iq$m7() {}iq$m7['prototype'] = xta, iq$m7 = new iq$m7();for (xta in azset) iq$m7[xta] = azset[xta];return iq$m7;
}), exports['XMLReader'] = zmn7;