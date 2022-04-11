var a = wx.$y;
function yry063v() {}function yv06ay3(dua, ay360v, yvr3z, n9$kc2, dm51u) {
  function a63v5(_8ol7) {
    if (_8ol7 > 0xffff) {
      _8ol7 -= 0x10000;var $nigq = 0xd800 + (_8ol7 >> 0xa),
          mt1wdu = 0xdc00 + (0x3ff & _8ol7);return String['fromCharCode']($nigq, mt1wdu);
    }return String['fromCharCode'](_8ol7);
  }function f7l_s(r0xzye) {
    var k92ns = r0xzye['slice'](0x1, -0x1);return k92ns in yvr3z ? yvr3z[k92ns] : '#' === k92ns['charAt'](0x0) ? a63v5(parseInt(k92ns['substr'](0x1)['replace']('x', '0x'))) : (dm51u['error']('entity not found:' + r0xzye), r0xzye);
  }function wu4d1t(ryzvx) {
    if (ryzvx > _7lo8f) {
      var _fj7o8 = dua['substring'](_7lo8f, ryzvx)['replace'](/&#?\w+;/g, f7l_s);vm653 && y0v3rz(_7lo8f), n9$kc2['characters'](_fj7o8, 0x0, ryzvx - _7lo8f), _7lo8f = ryzvx;
    }
  }function y0v3rz(qpni, h4t1w) {
    for (; qpni >= aum51d && (h4t1w = u51tmd['exec'](dua));) ohj7f = h4t1w['index'], aum51d = ohj7f + h4t1w[0x0]['length'], vm653['lineNumber']++;vm653['columnNumber'] = qpni - ohj7f + 0x1;
  }for (var ohj7f = 0x0, aum51d = 0x0, u51tmd = /.*(?:\r\n?|\n)|.*$/g, vm653 = n9$kc2['locator'], v6ay30 = [{ 'currentNSMap': ay360v }], m51au = {}, _7lo8f = 0x0;;) {
    try {
      var d5a1m = dua['indexOf']('<', _7lo8f);if (0x0 > d5a1m) {
        if (!dua['substr'](_7lo8f)['match'](/^\s*$/)) {
          var _fj8o7 = n9$kc2['doc'],
              k$ngi = _fj8o7['createTextNode'](dua['substr'](_7lo8f));_fj8o7['appendChild'](k$ngi), n9$kc2['currentElement'] = k$ngi;
        }return;
      }switch (d5a1m > _7lo8f && wu4d1t(d5a1m), dua['charAt'](d5a1m + 0x1)) {case '/':
          var w4tu = dua['indexOf']('>', d5a1m + 0x3),
              lf7_o8 = dua['substring'](d5a1m + 0x2, w4tu),
              ngqi2 = v6ay30['pop']();0x0 > w4tu ? (lf7_o8 = dua['substring'](d5a1m + 0x2)['replace'](/[\s<].*/, ''), dm51u['error']('end tag name: ' + lf7_o8 + ' is not complete:' + ngqi2['tagName']), w4tu = d5a1m + 0x1 + lf7_o8['length']) : lf7_o8['match'](/\s</) && (lf7_o8 = lf7_o8['replace'](/[\s<].*/, ''), dm51u['error']('end tag name: ' + lf7_o8 + ' maybe not complete'), w4tu = d5a1m + 0x1 + lf7_o8['length']);var wmu1t = ngqi2['localNSMap'],
              j8f_ = ngqi2['tagName'] == lf7_o8,
              ya063v = j8f_ || ngqi2['tagName'] && ngqi2['tagName']['toLowerCase']() == lf7_o8['toLowerCase']();if (ya063v) {
            if (n9$kc2['endElement'](ngqi2['uri'], ngqi2['localName'], lf7_o8), wmu1t) {
              for (var niqpg$ in wmu1t) n9$kc2['endPrefixMapping'](niqpg$);
            }j8f_ || dm51u['fatalError']('end tag name: ' + lf7_o8 + ' is not match the current start tagName:' + ngqi2['tagName']);
          } else v6ay30['push'](ngqi2);w4tu++;break;case '?':
          vm653 && y0v3rz(d5a1m), w4tu = ydt1wu4(dua, d5a1m, n9$kc2);break;case '!':
          vm653 && y0v3rz(d5a1m), w4tu = ylf_87s(dua, d5a1m, n9$kc2, dm51u);break;default:
          vm653 && y0v3rz(d5a1m);var y3v0a = new yt41ud(),
              g$np = v6ay30[v6ay30['length'] - 0x1]['currentNSMap'],
              w4tu = yv03a(dua, d5a1m, y3v0a, g$np, f7l_s, dm51u),
              umtd1w = y3v0a['length'];if (!y3v0a['closed'] && yi2$qng(dua, w4tu, y3v0a['tagName'], m51au) && (y3v0a['closed'] = !0x0, yvr3z['nbsp'] || dm51u['warning']('unclosed xml attribute')), vm653 && umtd1w) {
            for (var u3a56 = yfl87_(vm653, {}), tu14dw = 0x0; umtd1w > tu14dw; tu14dw++) {
              var s8_lc7 = y3v0a[tu14dw];y0v3rz(s8_lc7['offset']), s8_lc7['locator'] = yfl87_(vm653, {});
            }n9$kc2['locator'] = u3a56, yyr03z(y3v0a, n9$kc2, g$np) && v6ay30['push'](y3v0a), n9$kc2['locator'] = vm653;
          } else yyr03z(y3v0a, n9$kc2, g$np) && v6ay30['push'](y3v0a);'http://www.w3.org/1999/xhtml' !== y3v0a['uri'] || y3v0a['closed'] ? w4tu++ : w4tu = yofh4j(dua, w4tu, y3v0a['tagName'], f7l_s, n9$kc2);}
    } catch (fj7o8_) {
      dm51u['error']('element parse error: ' + fj7o8_), w4tu = -0x1;
    }w4tu > _7lo8f ? _7lo8f = w4tu : wu4d1t(Math['max'](d5a1m, _7lo8f) + 0x1);
  }
}function yfl87_(yav630, n$k9c) {
  return n$k9c['lineNumber'] = yav630['lineNumber'], n$k9c['columnNumber'] = yav630['columnNumber'], n$k9c;
}function yv03a(i$nqp, n92kg, _8sf7, h_jf7, skl9c, rzv03y) {
  for (var hwt1d, c78l_, nk29sc = ++n92kg, ay5v = yt1h4d;;) {
    var whjt = i$nqp['charAt'](nk29sc);switch (whjt) {case '=':
        if (ay5v === y$qgp) hwt1d = i$nqp['slice'](n92kg, nk29sc), ay5v = ylc9k8;else {
          if (ay5v !== yq$inp) throw new Error('attribute equal must after attrName');ay5v = ylc9k8;
        }break;case '\x27':case '\x22':
        if (ay5v === ylc9k8 || ay5v === y$qgp) {
          if (ay5v === y$qgp && (rzv03y['warning']('attribute value must after "="'), hwt1d = i$nqp['slice'](n92kg, nk29sc)), n92kg = nk29sc + 0x1, nk29sc = i$nqp['indexOf'](whjt, n92kg), !(nk29sc > 0x0)) throw new Error('attribute value no end \'' + whjt + '\' match');c78l_ = i$nqp['slice'](n92kg, nk29sc)['replace'](/&#?\w+;/g, skl9c), _8sf7['add'](hwt1d, c78l_, n92kg - 0x1), ay5v = yqni$2;
        } else {
          if (ay5v != y$2nkgi) throw new Error('attribute value must after "="');c78l_ = i$nqp['slice'](n92kg, nk29sc)['replace'](/&#?\w+;/g, skl9c), _8sf7['add'](hwt1d, c78l_, n92kg), rzv03y['warning']('attribute "' + hwt1d + '" missed start quot(' + whjt + ')!!'), n92kg = nk29sc + 0x1, ay5v = yqni$2;
        }break;case '/':
        switch (ay5v) {case yt1h4d:
            _8sf7['setTagName'](i$nqp['slice'](n92kg, nk29sc));case yqni$2:case yqpin$:case yrv306y:
            ay5v = yrv306y, _8sf7['closed'] = !0x0;case y$2nkgi:case y$qgp:case yq$inp:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return rzv03y['error']('unexpected end of input'), ay5v == yt1h4d && _8sf7['setTagName'](i$nqp['slice'](n92kg, nk29sc)), nk29sc;case '>':
        switch (ay5v) {case yt1h4d:
            _8sf7['setTagName'](i$nqp['slice'](n92kg, nk29sc));case yqni$2:case yqpin$:case yrv306y:
            break;case y$2nkgi:case y$qgp:
            c78l_ = i$nqp['slice'](n92kg, nk29sc), '/' === c78l_['slice'](-0x1) && (_8sf7['closed'] = !0x0, c78l_ = c78l_['slice'](0x0, -0x1));case yq$inp:
            ay5v === yq$inp && (c78l_ = hwt1d), ay5v == y$2nkgi ? (rzv03y['warning']('attribute "' + c78l_ + '" missed quot(")!!'), _8sf7['add'](hwt1d, c78l_['replace'](/&#?\w+;/g, skl9c), n92kg)) : ('http://www.w3.org/1999/xhtml' === h_jf7[''] && c78l_['match'](/^(?:disabled|checked|selected)$/i) || rzv03y['warning']('attribute "' + c78l_ + '" missed value!! "' + c78l_ + '" instead!!'), _8sf7['add'](c78l_, c78l_, n92kg));break;case ylc9k8:
            throw new Error('attribute value missed!!');}return nk29sc;case '\u0080':
        whjt = '\x20';default:
        if ('\x20' >= whjt) switch (ay5v) {case yt1h4d:
            _8sf7['setTagName'](i$nqp['slice'](n92kg, nk29sc)), ay5v = yqpin$;break;case y$qgp:
            hwt1d = i$nqp['slice'](n92kg, nk29sc), ay5v = yq$inp;break;case y$2nkgi:
            var c78l_ = i$nqp['slice'](n92kg, nk29sc)['replace'](/&#?\w+;/g, skl9c);rzv03y['warning']('attribute "' + c78l_ + '" missed quot(")!!'), _8sf7['add'](hwt1d, c78l_, n92kg);case yqni$2:
            ay5v = yqpin$;} else switch (ay5v) {case yq$inp:
            {
              _8sf7['tagName'];
            }'http://www.w3.org/1999/xhtml' === h_jf7[''] && hwt1d['match'](/^(?:disabled|checked|selected)$/i) || rzv03y['warning']('attribute "' + hwt1d + '" missed value!! "' + hwt1d + '" instead2!!'), _8sf7['add'](hwt1d, hwt1d, n92kg), n92kg = nk29sc, ay5v = y$qgp;break;case yqni$2:
            rzv03y['warning']('attribute space is required"' + hwt1d + '\x22!!');case yqpin$:
            ay5v = y$qgp, n92kg = nk29sc;break;case ylc9k8:
            ay5v = y$2nkgi, n92kg = nk29sc;break;case yrv306y:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nk29sc++;
  }
}function yyr03z(wjt4oh, vzr0yx, ad5um) {
  for (var _f4oj = wjt4oh['tagName'], owjth = null, skcn = wjt4oh['length']; skcn--;) {
    var x0yvrz = wjt4oh[skcn],
        jwfo4 = x0yvrz['qName'],
        o_fjh = x0yvrz['value'],
        c_8 = jwfo4['indexOf'](':');if (c_8 > 0x0) var n2s9kc = x0yvrz['prefix'] = jwfo4['slice'](0x0, c_8),
        a63um5 = jwfo4['slice'](c_8 + 0x1),
        h4jfo = 'xmlns' === n2s9kc && a63um5;else a63um5 = jwfo4, n2s9kc = null, h4jfo = 'xmlns' === jwfo4 && '';x0yvrz['localName'] = a63um5, h4jfo !== !0x1 && (null == owjth && (owjth = {}, yv3y5a6(ad5um, ad5um = {})), ad5um[h4jfo] = owjth[h4jfo] = o_fjh, x0yvrz['uri'] = 'http://www.w3.org/2000/xmlns/', vzr0yx['startPrefixMapping'](h4jfo, o_fjh));
  }for (var skcn = wjt4oh['length']; skcn--;) {
    x0yvrz = wjt4oh[skcn];var n2s9kc = x0yvrz['prefix'];n2s9kc && ('xml' === n2s9kc && (x0yvrz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== n2s9kc && (x0yvrz['uri'] = ad5um[n2s9kc || '']));
  }var c_8 = _f4oj['indexOf'](':');c_8 > 0x0 ? (n2s9kc = wjt4oh['prefix'] = _f4oj['slice'](0x0, c_8), a63um5 = wjt4oh['localName'] = _f4oj['slice'](c_8 + 0x1)) : (n2s9kc = null, a63um5 = wjt4oh['localName'] = _f4oj);var duw4t1 = wjt4oh['uri'] = ad5um[n2s9kc || ''];if (vzr0yx['startElement'](duw4t1, a63um5, _f4oj, wjt4oh), !wjt4oh['closed']) return wjt4oh['currentNSMap'] = ad5um, wjt4oh['localNSMap'] = owjth, !0x0;if (vzr0yx['endElement'](duw4t1, a63um5, _f4oj), owjth) {
    for (n2s9kc in owjth) vzr0yx['endPrefixMapping'](n2s9kc);
  }
}function yofh4j(gk$9, adm15u, uma156, ikgn$2, h_j4) {
  if (/^(?:script|textarea)$/i['test'](uma156)) {
    var exzyr0 = gk$9['indexOf']('</' + uma156 + '>', adm15u),
        csl8 = gk$9['substring'](adm15u + 0x1, exzyr0);if (/[&<]/['test'](csl8)) return (/^script$/i['test'](uma156) ? (h_j4['characters'](csl8, 0x0, csl8['length']), exzyr0) : (csl8 = csl8['replace'](/&#?\w+;/g, ikgn$2), h_j4['characters'](csl8, 0x0, csl8['length']), exzyr0)
    );
  }return adm15u + 0x1;
}function yi2$qng($n2igk, $c9kn2, mtud5, piqg) {
  var a563um = piqg[mtud5];return null == a563um && (a563um = $n2igk['lastIndexOf']('</' + mtud5 + '>'), $c9kn2 > a563um && (a563um = $n2igk['lastIndexOf']('</' + mtud5)), piqg[mtud5] = a563um), $c9kn2 > a563um;
}function yv3y5a6($nq2gi, d1wutm) {
  for (var k9g$n in $nq2gi) d1wutm[k9g$n] = $nq2gi[k9g$n];
}function ylf_87s(_lo87f, ry360, va35m, s9l7) {
  var wmtud = _lo87f['charAt'](ry360 + 0x2);switch (wmtud) {case '-':
      if ('-' === _lo87f['charAt'](ry360 + 0x3)) {
        var sk2c = _lo87f['indexOf']('-->', ry360 + 0x4);return sk2c > ry360 ? (va35m['comment'](_lo87f, ry360 + 0x4, sk2c - ry360 - 0x4), sk2c + 0x3) : (s9l7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _lo87f['substr'](ry360 + 0x3, 0x6)) {
        var sk2c = _lo87f['indexOf'](']]>', ry360 + 0x9);return va35m['startCDATA'](), va35m['characters'](_lo87f, ry360 + 0x9, sk2c - ry360 - 0x9), va35m['endCDATA'](), sk2c + 0x3;
      }var fh7_oj = ylo87_(_lo87f, ry360),
          uw1 = fh7_oj['length'];if (uw1 > 0x1 && /!doctype/i['test'](fh7_oj[0x0][0x0])) {
        var qn2gi$ = fh7_oj[0x1][0x0],
            m51ua6 = uw1 > 0x3 && /^public$/i['test'](fh7_oj[0x2][0x0]) && fh7_oj[0x3][0x0],
            utw1md = uw1 > 0x4 && fh7_oj[0x4][0x0],
            vrx0y = fh7_oj[uw1 - 0x1];return va35m['startDTD'](qn2gi$, m51ua6 && m51ua6['replace'](/^(['"])(.*?)\1$/, '$2'), utw1md && utw1md['replace'](/^(['"])(.*?)\1$/, '$2')), va35m['endDTD'](), vrx0y['index'] + vrx0y[0x0]['length'];
      }}return -0x1;
}function ydt1wu4(cslk29, fowh, du5mt) {
  var ya06 = cslk29['indexOf']('?>', fowh);if (ya06) {
    var vz03ry = cslk29['substring'](fowh, ya06)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (vz03ry) {
      {
        vz03ry[0x0]['length'];
      }return du5mt['processingInstruction'](vz03ry[0x1], vz03ry[0x2]), ya06 + 0x2;
    }return -0x1;
  }return -0x1;
}function yt41ud() {}function yx0yer(rzeyx, uad1m5) {
  return rzeyx['__proto__'] = uad1m5, rzeyx;
}function ylo87_(k9cl2, o4fhw) {
  var ohwf4j,
      jh_4 = [],
      _f8s = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_f8s['lastIndex'] = o4fhw, _f8s['exec'](k9cl2); ohwf4j = _f8s['exec'](k9cl2);) if (jh_4['push'](ohwf4j), ohwf4j[0x1]) return jh_4;
}var yh4jwof = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    yvyxrz = new RegExp('[\\-\\.0-9' + yh4jwof['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    yu4wd = new RegExp('^' + yh4jwof['source'] + yvyxrz['source'] + '*(?::' + yh4jwof['source'] + yvyxrz['source'] + '*)?$'),
    yt1h4d = 0x0,
    y$qgp = 0x1,
    yq$inp = 0x2,
    ylc9k8 = 0x3,
    y$2nkgi = 0x4,
    yqni$2 = 0x5,
    yqpin$ = 0x6,
    yrv306y = 0x7;yry063v['prototype'] = { 'parse': function (tud5, tjwho4, ns2c) {
    var dthjw = this['domBuilder'];dthjw['startDocument'](), yv3y5a6(tjwho4, tjwho4 = {}), yv06ay3(tud5, tjwho4, ns2c, dthjw, this['errorHandler']), dthjw['endDocument']();
  } }, yt41ud['prototype'] = { 'setTagName': function (g2$nik) {
    if (!yu4wd['test'](g2$nik)) throw new Error('invalid tagName:' + g2$nik);this['tagName'] = g2$nik;
  }, 'add': function (c9$2, tdwm, dam51u) {
    if (!yu4wd['test'](c9$2)) throw new Error('invalid attribute:' + c9$2);this[this['length']++] = { 'qName': c9$2, 'value': tdwm, 'offset': dam51u };
  }, 'length': 0x0, 'getLocalName': function (gqi$p) {
    return this[gqi$p]['localName'];
  }, 'getLocator': function (w1td) {
    return this[w1td]['locator'];
  }, 'getQName': function (l8c79) {
    return this[l8c79]['qName'];
  }, 'getURI': function (k9ncs2) {
    return this[k9ncs2]['uri'];
  }, 'getValue': function (sk9lc2) {
    return this[sk9lc2]['value'];
  } }, yx0yer({}, yx0yer['prototype']) instanceof yx0yer || (yx0yer = function (h7o_fj, _8lsf) {
  function clk9() {}clk9['prototype'] = _8lsf, clk9 = new clk9();for (_8lsf in h7o_fj) clk9[_8lsf] = h7o_fj[_8lsf];return clk9;
}), exports['XMLReader'] = yry063v;