var W = wx.$l;
function L9jdkba() {}function L9hztq(ajzhk, ry03nx, tlzf, tfl5, cmir3w) {
  function v179(eovg1) {
    if (eovg1 > 0xffff) {
      eovg1 -= 0x10000;var eov9 = 0xd800 + (eovg1 >> 0xa),
          l9qft = 0xdc00 + (0x3ff & eovg1);return String['fromCharCode'](eov9, l9qft);
    }return String['fromCharCode'](eovg1);
  }function fo9l(lhkzq) {
    var o5ftl9 = lhkzq['slice'](0x1, -0x1);return o5ftl9 in tlzf ? tlzf[o5ftl9] : '#' === o5ftl9['charAt'](0x0) ? v179(parseInt(o5ftl9['substr'](0x1)['replace']('x', '0x'))) : (cmir3w['error']('entity not found:' + lhkzq), lhkzq);
  }function jklh(cx0) {
    if (cx0 > t5l9fo) {
      var $8d2 = ajzhk['substring'](t5l9fo, cx0)['replace'](/&#?\w+;/g, fo9l);ztfql5 && akjhb2(t5l9fo), tfl5['characters']($8d2, 0x0, cx0 - t5l9fo), t5l9fo = cx0;
    }
  }function akjhb2(gv1u7, jlqzht) {
    for (; gv1u7 >= s2d$ba && (jlqzht = _ny0x['exec'](ajzhk));) vu1eg = jlqzht['index'], s2d$ba = vu1eg + jlqzht[0x0]['length'], ztfql5['lineNumber']++;ztfql5['columnNumber'] = gv1u7 - vu1eg + 0x1;
  }for (var vu1eg = 0x0, s2d$ba = 0x0, _ny0x = /.*(?:\r\n?|\n)|.*$/g, ztfql5 = tfl5['locator'], wcmi3 = [{ 'currentNSMap': ry03nx }], z5htlq = {}, t5l9fo = 0x0;;) {
    try {
      var zlht = ajzhk['indexOf']('<', t5l9fo);if (0x0 > zlht) {
        if (!ajzhk['substr'](t5l9fo)['match'](/^\s*$/)) {
          var thlqz = tfl5['doc'],
              o1v = thlqz['createTextNode'](ajzhk['substr'](t5l9fo));thlqz['appendChild'](o1v), tfl5['currentElement'] = o1v;
        }return;
      }switch (zlht > t5l9fo && jklh(zlht), ajzhk['charAt'](zlht + 0x1)) {case '/':
          var kjdb = ajzhk['indexOf']('>', zlht + 0x3),
              zthq5 = ajzhk['substring'](zlht + 0x2, kjdb),
              ryx3n0 = wcmi3['pop']();0x0 > kjdb ? (zthq5 = ajzhk['substring'](zlht + 0x2)['replace'](/[\s<].*/, ''), cmir3w['error']('end tag name: ' + zthq5 + ' is not complete:' + ryx3n0['tagName']), kjdb = zlht + 0x1 + zthq5['length']) : zthq5['match'](/\s</) && (zthq5 = zthq5['replace'](/[\s<].*/, ''), cmir3w['error']('end tag name: ' + zthq5 + ' maybe not complete'), kjdb = zlht + 0x1 + zthq5['length']);var adb$k = ryx3n0['localNSMap'],
              oeg = ryx3n0['tagName'] == zthq5,
              sd2$4 = oeg || ryx3n0['tagName'] && ryx3n0['tagName']['toLowerCase']() == zthq5['toLowerCase']();if (sd2$4) {
            if (tfl5['endElement'](ryx3n0['uri'], ryx3n0['localName'], zthq5), adb$k) {
              for (var qajhzk in adb$k) tfl5['endPrefixMapping'](qajhzk);
            }oeg || cmir3w['fatalError']('end tag name: ' + zthq5 + ' is not match the current start tagName:' + ryx3n0['tagName']);
          } else wcmi3['push'](ryx3n0);kjdb++;break;case '?':
          ztfql5 && akjhb2(zlht), kjdb = L9q5tzl(ajzhk, zlht, tfl5);break;case '!':
          ztfql5 && akjhb2(zlht), kjdb = L9_8xny(ajzhk, zlht, tfl5, cmir3w);break;default:
          ztfql5 && akjhb2(zlht);var crm03y = new L9fqt5(),
              khqzjl = wcmi3[wcmi3['length'] - 0x1]['currentNSMap'],
              kjdb = L9jbkha(ajzhk, zlht, crm03y, khqzjl, fo9l, cmir3w),
              zkhja = crm03y['length'];if (!crm03y['closed'] && L9rmci3(ajzhk, kjdb, crm03y['tagName'], z5htlq) && (crm03y['closed'] = !0x0, tlzf['nbsp'] || cmir3w['warning']('unclosed xml attribute')), ztfql5 && zkhja) {
            for (var khjaz = L9tqljhz(ztfql5, {}), o597ft = 0x0; zkhja > o597ft; o597ft++) {
              var zlt5qf = crm03y[o597ft];akjhb2(zlt5qf['offset']), zlt5qf['locator'] = L9tqljhz(ztfql5, {});
            }tfl5['locator'] = khjaz, L9x30yc(crm03y, tfl5, khqzjl) && wcmi3['push'](crm03y), tfl5['locator'] = ztfql5;
          } else L9x30yc(crm03y, tfl5, khqzjl) && wcmi3['push'](crm03y);'http://www.w3.org/1999/xhtml' !== crm03y['uri'] || crm03y['closed'] ? kjdb++ : kjdb = L9qljhtz(ajzhk, kjdb, crm03y['tagName'], fo9l, tfl5);}
    } catch (_y8n) {
      cmir3w['error']('element parse error: ' + _y8n), kjdb = -0x1;
    }kjdb > t5l9fo ? t5l9fo = kjdb : jklh(Math['max'](zlht, t5l9fo) + 0x1);
  }
}function L9tqljhz($s82bd, zqflt5) {
  return zqflt5['lineNumber'] = $s82bd['lineNumber'], zqflt5['columnNumber'] = $s82bd['columnNumber'], zqflt5;
}function L9jbkha(x48_s, rcim03, uevg61, mwcri3, a$2kdb, qhazj) {
  for (var v79of5, xs_4n, $82s4d = ++rcim03, mi0cr = L9qzft5;;) {
    var w3mcir = x48_s['charAt']($82s4d);switch (w3mcir) {case '=':
        if (mi0cr === L9vfo17) v79of5 = x48_s['slice'](rcim03, $82s4d), mi0cr = L9n0x4_;else {
          if (mi0cr !== L9$d24s8) throw new Error('attribute equal must after attrName');mi0cr = L9n0x4_;
        }break;case '\x27':case '\x22':
        if (mi0cr === L9n0x4_ || mi0cr === L9vfo17) {
          if (mi0cr === L9vfo17 && (qhazj['warning']('attribute value must after "="'), v79of5 = x48_s['slice'](rcim03, $82s4d)), rcim03 = $82s4d + 0x1, $82s4d = x48_s['indexOf'](w3mcir, rcim03), !($82s4d > 0x0)) throw new Error('attribute value no end \'' + w3mcir + '\' match');xs_4n = x48_s['slice'](rcim03, $82s4d)['replace'](/&#?\w+;/g, a$2kdb), uevg61['add'](v79of5, xs_4n, rcim03 - 0x1), mi0cr = L9t5hzl;
        } else {
          if (mi0cr != L9$abd2s) throw new Error('attribute value must after "="');xs_4n = x48_s['slice'](rcim03, $82s4d)['replace'](/&#?\w+;/g, a$2kdb), uevg61['add'](v79of5, xs_4n, rcim03), qhazj['warning']('attribute "' + v79of5 + '" missed start quot(' + w3mcir + ')!!'), rcim03 = $82s4d + 0x1, mi0cr = L9t5hzl;
        }break;case '/':
        switch (mi0cr) {case L9qzft5:
            uevg61['setTagName'](x48_s['slice'](rcim03, $82s4d));case L9t5hzl:case L9hzqt5:case L9iwm3:
            mi0cr = L9iwm3, uevg61['closed'] = !0x0;case L9$abd2s:case L9vfo17:case L9$d24s8:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qhazj['error']('unexpected end of input'), mi0cr == L9qzft5 && uevg61['setTagName'](x48_s['slice'](rcim03, $82s4d)), $82s4d;case '>':
        switch (mi0cr) {case L9qzft5:
            uevg61['setTagName'](x48_s['slice'](rcim03, $82s4d));case L9t5hzl:case L9hzqt5:case L9iwm3:
            break;case L9$abd2s:case L9vfo17:
            xs_4n = x48_s['slice'](rcim03, $82s4d), '/' === xs_4n['slice'](-0x1) && (uevg61['closed'] = !0x0, xs_4n = xs_4n['slice'](0x0, -0x1));case L9$d24s8:
            mi0cr === L9$d24s8 && (xs_4n = v79of5), mi0cr == L9$abd2s ? (qhazj['warning']('attribute "' + xs_4n + '" missed quot(")!!'), uevg61['add'](v79of5, xs_4n['replace'](/&#?\w+;/g, a$2kdb), rcim03)) : ('http://www.w3.org/1999/xhtml' === mwcri3[''] && xs_4n['match'](/^(?:disabled|checked|selected)$/i) || qhazj['warning']('attribute "' + xs_4n + '" missed value!! "' + xs_4n + '" instead!!'), uevg61['add'](xs_4n, xs_4n, rcim03));break;case L9n0x4_:
            throw new Error('attribute value missed!!');}return $82s4d;case '\u0080':
        w3mcir = '\x20';default:
        if ('\x20' >= w3mcir) switch (mi0cr) {case L9qzft5:
            uevg61['setTagName'](x48_s['slice'](rcim03, $82s4d)), mi0cr = L9hzqt5;break;case L9vfo17:
            v79of5 = x48_s['slice'](rcim03, $82s4d), mi0cr = L9$d24s8;break;case L9$abd2s:
            var xs_4n = x48_s['slice'](rcim03, $82s4d)['replace'](/&#?\w+;/g, a$2kdb);qhazj['warning']('attribute "' + xs_4n + '" missed quot(")!!'), uevg61['add'](v79of5, xs_4n, rcim03);case L9t5hzl:
            mi0cr = L9hzqt5;} else switch (mi0cr) {case L9$d24s8:
            {
              uevg61['tagName'];
            }'http://www.w3.org/1999/xhtml' === mwcri3[''] && v79of5['match'](/^(?:disabled|checked|selected)$/i) || qhazj['warning']('attribute "' + v79of5 + '" missed value!! "' + v79of5 + '" instead2!!'), uevg61['add'](v79of5, v79of5, rcim03), rcim03 = $82s4d, mi0cr = L9vfo17;break;case L9t5hzl:
            qhazj['warning']('attribute space is required"' + v79of5 + '\x22!!');case L9hzqt5:
            mi0cr = L9vfo17, rcim03 = $82s4d;break;case L9n0x4_:
            mi0cr = L9$abd2s, rcim03 = $82s4d;break;case L9iwm3:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$82s4d++;
  }
}function L9x30yc(r0my3, kjhqlz, v1g7u) {
  for (var $da2kb = r0my3['tagName'], f9vo = null, jzah = r0my3['length']; jzah--;) {
    var irm3c = r0my3[jzah],
        d2$a = irm3c['qName'],
        kha2bj = irm3c['value'],
        cwm3r = d2$a['indexOf'](':');if (cwm3r > 0x0) var y3n0x_ = irm3c['prefix'] = d2$a['slice'](0x0, cwm3r),
        oe1v7 = d2$a['slice'](cwm3r + 0x1),
        miw = 'xmlns' === y3n0x_ && oe1v7;else oe1v7 = d2$a, y3n0x_ = null, miw = 'xmlns' === d2$a && '';irm3c['localName'] = oe1v7, miw !== !0x1 && (null == f9vo && (f9vo = {}, L9rmi03c(v1g7u, v1g7u = {})), v1g7u[miw] = f9vo[miw] = kha2bj, irm3c['uri'] = 'http://www.w3.org/2000/xmlns/', kjhqlz['startPrefixMapping'](miw, kha2bj));
  }for (var jzah = r0my3['length']; jzah--;) {
    irm3c = r0my3[jzah];var y3n0x_ = irm3c['prefix'];y3n0x_ && ('xml' === y3n0x_ && (irm3c['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== y3n0x_ && (irm3c['uri'] = v1g7u[y3n0x_ || '']));
  }var cwm3r = $da2kb['indexOf'](':');cwm3r > 0x0 ? (y3n0x_ = r0my3['prefix'] = $da2kb['slice'](0x0, cwm3r), oe1v7 = r0my3['localName'] = $da2kb['slice'](cwm3r + 0x1)) : (y3n0x_ = null, oe1v7 = r0my3['localName'] = $da2kb);var kbazh = r0my3['uri'] = v1g7u[y3n0x_ || ''];if (kjhqlz['startElement'](kbazh, oe1v7, $da2kb, r0my3), !r0my3['closed']) return r0my3['currentNSMap'] = v1g7u, r0my3['localNSMap'] = f9vo, !0x0;if (kjhqlz['endElement'](kbazh, oe1v7, $da2kb), f9vo) {
    for (y3n0x_ in f9vo) kjhqlz['endPrefixMapping'](y3n0x_);
  }
}function L9qljhtz(db$2ak, c03rm, tf95o7, hqz5t, zt5qf) {
  if (/^(?:script|textarea)$/i['test'](tf95o7)) {
    var n0_x4y = db$2ak['indexOf']('</' + tf95o7 + '>', c03rm),
        zakhbj = db$2ak['substring'](c03rm + 0x1, n0_x4y);if (/[&<]/['test'](zakhbj)) return (/^script$/i['test'](tf95o7) ? (zt5qf['characters'](zakhbj, 0x0, zakhbj['length']), n0_x4y) : (zakhbj = zakhbj['replace'](/&#?\w+;/g, hqz5t), zt5qf['characters'](zakhbj, 0x0, zakhbj['length']), n0_x4y)
    );
  }return c03rm + 0x1;
}function L9rmci3(jhkl, b2ds$a, y3cm0r, r3miw) {
  var g6u1ep = r3miw[y3cm0r];return null == g6u1ep && (g6u1ep = jhkl['lastIndexOf']('</' + y3cm0r + '>'), b2ds$a > g6u1ep && (g6u1ep = jhkl['lastIndexOf']('</' + y3cm0r)), r3miw[y3cm0r] = g6u1ep), b2ds$a > g6u1ep;
}function L9rmi03c(y0n_, _xn04) {
  for (var s_4$8d in y0n_) _xn04[s_4$8d] = y0n_[s_4$8d];
}function L9_8xny(qtzfl, _84$s, r0yx3n, y0rcx) {
  var ego7v = qtzfl['charAt'](_84$s + 0x2);switch (ego7v) {case '-':
      if ('-' === qtzfl['charAt'](_84$s + 0x3)) {
        var q5fltz = qtzfl['indexOf']('-->', _84$s + 0x4);return q5fltz > _84$s ? (r0yx3n['comment'](qtzfl, _84$s + 0x4, q5fltz - _84$s - 0x4), q5fltz + 0x3) : (y0rcx['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qtzfl['substr'](_84$s + 0x3, 0x6)) {
        var q5fltz = qtzfl['indexOf'](']]>', _84$s + 0x9);return r0yx3n['startCDATA'](), r0yx3n['characters'](qtzfl, _84$s + 0x9, q5fltz - _84$s - 0x9), r0yx3n['endCDATA'](), q5fltz + 0x3;
      }var qjlhzk = L9hqajzk(qtzfl, _84$s),
          xyn_4 = qjlhzk['length'];if (xyn_4 > 0x1 && /!doctype/i['test'](qjlhzk[0x0][0x0])) {
        var a$kb2d = qjlhzk[0x1][0x0],
            v17oeg = xyn_4 > 0x3 && /^public$/i['test'](qjlhzk[0x2][0x0]) && qjlhzk[0x3][0x0],
            jqtzhl = xyn_4 > 0x4 && qjlhzk[0x4][0x0],
            fo97 = qjlhzk[xyn_4 - 0x1];return r0yx3n['startDTD'](a$kb2d, v17oeg && v17oeg['replace'](/^(['"])(.*?)\1$/, '$2'), jqtzhl && jqtzhl['replace'](/^(['"])(.*?)\1$/, '$2')), r0yx3n['endDTD'](), fo97['index'] + fo97[0x0]['length'];
      }}return -0x1;
}function L9q5tzl(oev79, s$db2, a$b2k) {
  var zlqkj = oev79['indexOf']('?>', s$db2);if (zlqkj) {
    var $4_sn8 = oev79['substring'](s$db2, zlqkj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($4_sn8) {
      {
        $4_sn8[0x0]['length'];
      }return a$b2k['processingInstruction']($4_sn8[0x1], $4_sn8[0x2]), zlqkj + 0x2;
    }return -0x1;
  }return -0x1;
}function L9fqt5() {}function L9e7v9(evg6u1, n84s_$) {
  return evg6u1['__proto__'] = n84s_$, evg6u1;
}function L9hqajzk(qf5l9t, fltq59) {
  var jhakqz,
      ba$k2d = [],
      kdab2j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kdab2j['lastIndex'] = fltq59, kdab2j['exec'](qf5l9t); jhakqz = kdab2j['exec'](qf5l9t);) if (ba$k2d['push'](jhakqz), jhakqz[0x1]) return ba$k2d;
}var L9v7e91 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9n$s4_ = new RegExp('[\\-\\.0-9' + L9v7e91['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9hzbka = new RegExp('^' + L9v7e91['source'] + L9n$s4_['source'] + '*(?::' + L9v7e91['source'] + L9n$s4_['source'] + '*)?$'),
    L9qzft5 = 0x0,
    L9vfo17 = 0x1,
    L9$d24s8 = 0x2,
    L9n0x4_ = 0x3,
    L9$abd2s = 0x4,
    L9t5hzl = 0x5,
    L9hzqt5 = 0x6,
    L9iwm3 = 0x7;L9jdkba['prototype'] = { 'parse': function (pge6, s82, mry0c3) {
    var $2s84 = this['domBuilder'];$2s84['startDocument'](), L9rmi03c(s82, s82 = {}), L9hztq(pge6, s82, mry0c3, $2s84, this['errorHandler']), $2s84['endDocument']();
  } }, L9fqt5['prototype'] = { 'setTagName': function (n48sx_) {
    if (!L9hzbka['test'](n48sx_)) throw new Error('invalid tagName:' + n48sx_);this['tagName'] = n48sx_;
  }, 'add': function (v6eg1, jzhkl, d$4) {
    if (!L9hzbka['test'](v6eg1)) throw new Error('invalid attribute:' + v6eg1);this[this['length']++] = { 'qName': v6eg1, 'value': jzhkl, 'offset': d$4 };
  }, 'length': 0x0, 'getLocalName': function (v1f7o9) {
    return this[v1f7o9]['localName'];
  }, 'getLocator': function (c3wmr) {
    return this[c3wmr]['locator'];
  }, 'getQName': function (f791v) {
    return this[f791v]['qName'];
  }, 'getURI': function (gov71) {
    return this[gov71]['uri'];
  }, 'getValue': function (f197) {
    return this[f197]['value'];
  } }, L9e7v9({}, L9e7v9['prototype']) instanceof L9e7v9 || (L9e7v9 = function (bjak2d, zlhkjq) {
  function to975() {}to975['prototype'] = zlhkjq, to975 = new to975();for (zlhkjq in bjak2d) to975[zlhkjq] = bjak2d[zlhkjq];return to975;
}), exports['XMLReader'] = L9jdkba;