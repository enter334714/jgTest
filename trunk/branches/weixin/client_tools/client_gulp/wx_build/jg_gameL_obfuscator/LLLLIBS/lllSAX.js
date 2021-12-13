var W = wx.$l;
function L9hakb2() {}function L9e1o79(cr0x, cri3, lqh5z, jkzah, hjazk) {
  function y3rnx(ahbjkz) {
    if (ahbjkz > 0xffff) {
      ahbjkz -= 0x10000;var flq9 = 0xd800 + (ahbjkz >> 0xa),
          o179 = 0xdc00 + (0x3ff & ahbjkz);return String['fromCharCode'](flq9, o179);
    }return String['fromCharCode'](ahbjkz);
  }function ot9f7(s2$bad) {
    var jbahzk = s2$bad['slice'](0x1, -0x1);return jbahzk in lqh5z ? lqh5z[jbahzk] : '#' === jbahzk['charAt'](0x0) ? y3rnx(parseInt(jbahzk['substr'](0x1)['replace']('x', '0x'))) : (hjazk['error']('entity not found:' + s2$bad), s2$bad);
  }function nsx8_4(tfzq5) {
    if (tfzq5 > hzt5l) {
      var x0_3y = cr0x['substring'](hzt5l, tfzq5)['replace'](/&#?\w+;/g, ot9f7);_y04 && s8d(hzt5l), jkzah['characters'](x0_3y, 0x0, tfzq5 - hzt5l), hzt5l = tfzq5;
    }
  }function s8d(go17v, tqz) {
    for (; go17v >= azhqjk && (tqz = d8$s24['exec'](cr0x));) d8$4s2 = tqz['index'], azhqjk = d8$4s2 + tqz[0x0]['length'], _y04['lineNumber']++;_y04['columnNumber'] = go17v - d8$4s2 + 0x1;
  }for (var d8$4s2 = 0x0, azhqjk = 0x0, d8$s24 = /.*(?:\r\n?|\n)|.*$/g, _y04 = jkzah['locator'], zt5flq = [{ 'currentNSMap': cri3 }], v7f = {}, hzt5l = 0x0;;) {
    try {
      var _y0x3 = cr0x['indexOf']('<', hzt5l);if (0x0 > _y0x3) {
        if (!cr0x['substr'](hzt5l)['match'](/^\s*$/)) {
          var vf975o = jkzah['doc'],
              rim0c3 = vf975o['createTextNode'](cr0x['substr'](hzt5l));vf975o['appendChild'](rim0c3), jkzah['currentElement'] = rim0c3;
        }return;
      }switch (_y0x3 > hzt5l && nsx8_4(_y0x3), cr0x['charAt'](_y0x3 + 0x1)) {case '/':
          var c0yrm3 = cr0x['indexOf']('>', _y0x3 + 0x3),
              aqzhj = cr0x['substring'](_y0x3 + 0x2, c0yrm3),
              veu17g = zt5flq['pop']();0x0 > c0yrm3 ? (aqzhj = cr0x['substring'](_y0x3 + 0x2)['replace'](/[\s<].*/, ''), hjazk['error']('end tag name: ' + aqzhj + ' is not complete:' + veu17g['tagName']), c0yrm3 = _y0x3 + 0x1 + aqzhj['length']) : aqzhj['match'](/\s</) && (aqzhj = aqzhj['replace'](/[\s<].*/, ''), hjazk['error']('end tag name: ' + aqzhj + ' maybe not complete'), c0yrm3 = _y0x3 + 0x1 + aqzhj['length']);var to = veu17g['localNSMap'],
              hzl5 = veu17g['tagName'] == aqzhj,
              l9fto5 = hzl5 || veu17g['tagName'] && veu17g['tagName']['toLowerCase']() == aqzhj['toLowerCase']();if (l9fto5) {
            if (jkzah['endElement'](veu17g['uri'], veu17g['localName'], aqzhj), to) {
              for (var n_30x in to) jkzah['endPrefixMapping'](n_30x);
            }hzl5 || hjazk['fatalError']('end tag name: ' + aqzhj + ' is not match the current start tagName:' + veu17g['tagName']);
          } else zt5flq['push'](veu17g);c0yrm3++;break;case '?':
          _y04 && s8d(_y0x3), c0yrm3 = L9zqkhja(cr0x, _y0x3, jkzah);break;case '!':
          _y04 && s8d(_y0x3), c0yrm3 = L9kzhqjl(cr0x, _y0x3, jkzah, hjazk);break;default:
          _y04 && s8d(_y0x3);var lt9fo5 = new L9tzf5(),
              lhqzt5 = zt5flq[zt5flq['length'] - 0x1]['currentNSMap'],
              c0yrm3 = L9up61e(cr0x, _y0x3, lt9fo5, lhqzt5, ot9f7, hjazk),
              sx4_ = lt9fo5['length'];if (!lt9fo5['closed'] && L9of7t9(cr0x, c0yrm3, lt9fo5['tagName'], v7f) && (lt9fo5['closed'] = !0x0, lqh5z['nbsp'] || hjazk['warning']('unclosed xml attribute')), _y04 && sx4_) {
            for (var lhjtq = L9z5qlf(_y04, {}), eg1p6 = 0x0; sx4_ > eg1p6; eg1p6++) {
              var p16eu = lt9fo5[eg1p6];s8d(p16eu['offset']), p16eu['locator'] = L9z5qlf(_y04, {});
            }jkzah['locator'] = lhjtq, L9zh5lqt(lt9fo5, jkzah, lhqzt5) && zt5flq['push'](lt9fo5), jkzah['locator'] = _y04;
          } else L9zh5lqt(lt9fo5, jkzah, lhqzt5) && zt5flq['push'](lt9fo5);'http://www.w3.org/1999/xhtml' !== lt9fo5['uri'] || lt9fo5['closed'] ? c0yrm3++ : c0yrm3 = L9pu1eg(cr0x, c0yrm3, lt9fo5['tagName'], ot9f7, jkzah);}
    } catch (b2ahk) {
      hjazk['error']('element parse error: ' + b2ahk), c0yrm3 = -0x1;
    }c0yrm3 > hzt5l ? hzt5l = c0yrm3 : nsx8_4(Math['max'](_y0x3, hzt5l) + 0x1);
  }
}function L9z5qlf(kbd, $ba2) {
  return $ba2['lineNumber'] = kbd['lineNumber'], $ba2['columnNumber'] = kbd['columnNumber'], $ba2;
}function L9up61e(kbjda2, kjlqzh, n8$s, lhtq, n_8sx4, akhbj2) {
  for (var qzjhk, egu7v1, mwri3c = ++kjlqzh, n4y_0 = L9_48xs;;) {
    var oeg1v7 = kbjda2['charAt'](mwri3c);switch (oeg1v7) {case '=':
        if (n4y_0 === L9c3y0xr) qzjhk = kbjda2['slice'](kjlqzh, mwri3c), n4y_0 = L9x4n0;else {
          if (n4y_0 !== L9bdkaj2) throw new Error('attribute equal must after attrName');n4y_0 = L9x4n0;
        }break;case '\x27':case '\x22':
        if (n4y_0 === L9x4n0 || n4y_0 === L9c3y0xr) {
          if (n4y_0 === L9c3y0xr && (akhbj2['warning']('attribute value must after "="'), qzjhk = kbjda2['slice'](kjlqzh, mwri3c)), kjlqzh = mwri3c + 0x1, mwri3c = kbjda2['indexOf'](oeg1v7, kjlqzh), !(mwri3c > 0x0)) throw new Error('attribute value no end \'' + oeg1v7 + '\' match');egu7v1 = kbjda2['slice'](kjlqzh, mwri3c)['replace'](/&#?\w+;/g, n_8sx4), n8$s['add'](qzjhk, egu7v1, kjlqzh - 0x1), n4y_0 = L9b8$sd2;
        } else {
          if (n4y_0 != L9ugev7) throw new Error('attribute value must after "="');egu7v1 = kbjda2['slice'](kjlqzh, mwri3c)['replace'](/&#?\w+;/g, n_8sx4), n8$s['add'](qzjhk, egu7v1, kjlqzh), akhbj2['warning']('attribute "' + qzjhk + '" missed start quot(' + oeg1v7 + ')!!'), kjlqzh = mwri3c + 0x1, n4y_0 = L9b8$sd2;
        }break;case '/':
        switch (n4y_0) {case L9_48xs:
            n8$s['setTagName'](kbjda2['slice'](kjlqzh, mwri3c));case L9b8$sd2:case L9gpu:case L9e1ugp6:
            n4y_0 = L9e1ugp6, n8$s['closed'] = !0x0;case L9ugev7:case L9c3y0xr:case L9bdkaj2:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return akhbj2['error']('unexpected end of input'), n4y_0 == L9_48xs && n8$s['setTagName'](kbjda2['slice'](kjlqzh, mwri3c)), mwri3c;case '>':
        switch (n4y_0) {case L9_48xs:
            n8$s['setTagName'](kbjda2['slice'](kjlqzh, mwri3c));case L9b8$sd2:case L9gpu:case L9e1ugp6:
            break;case L9ugev7:case L9c3y0xr:
            egu7v1 = kbjda2['slice'](kjlqzh, mwri3c), '/' === egu7v1['slice'](-0x1) && (n8$s['closed'] = !0x0, egu7v1 = egu7v1['slice'](0x0, -0x1));case L9bdkaj2:
            n4y_0 === L9bdkaj2 && (egu7v1 = qzjhk), n4y_0 == L9ugev7 ? (akhbj2['warning']('attribute "' + egu7v1 + '" missed quot(")!!'), n8$s['add'](qzjhk, egu7v1['replace'](/&#?\w+;/g, n_8sx4), kjlqzh)) : ('http://www.w3.org/1999/xhtml' === lhtq[''] && egu7v1['match'](/^(?:disabled|checked|selected)$/i) || akhbj2['warning']('attribute "' + egu7v1 + '" missed value!! "' + egu7v1 + '" instead!!'), n8$s['add'](egu7v1, egu7v1, kjlqzh));break;case L9x4n0:
            throw new Error('attribute value missed!!');}return mwri3c;case '\u0080':
        oeg1v7 = '\x20';default:
        if ('\x20' >= oeg1v7) switch (n4y_0) {case L9_48xs:
            n8$s['setTagName'](kbjda2['slice'](kjlqzh, mwri3c)), n4y_0 = L9gpu;break;case L9c3y0xr:
            qzjhk = kbjda2['slice'](kjlqzh, mwri3c), n4y_0 = L9bdkaj2;break;case L9ugev7:
            var egu7v1 = kbjda2['slice'](kjlqzh, mwri3c)['replace'](/&#?\w+;/g, n_8sx4);akhbj2['warning']('attribute "' + egu7v1 + '" missed quot(")!!'), n8$s['add'](qzjhk, egu7v1, kjlqzh);case L9b8$sd2:
            n4y_0 = L9gpu;} else switch (n4y_0) {case L9bdkaj2:
            {
              n8$s['tagName'];
            }'http://www.w3.org/1999/xhtml' === lhtq[''] && qzjhk['match'](/^(?:disabled|checked|selected)$/i) || akhbj2['warning']('attribute "' + qzjhk + '" missed value!! "' + qzjhk + '" instead2!!'), n8$s['add'](qzjhk, qzjhk, kjlqzh), kjlqzh = mwri3c, n4y_0 = L9c3y0xr;break;case L9b8$sd2:
            akhbj2['warning']('attribute space is required"' + qzjhk + '\x22!!');case L9gpu:
            n4y_0 = L9c3y0xr, kjlqzh = mwri3c;break;case L9x4n0:
            n4y_0 = L9ugev7, kjlqzh = mwri3c;break;case L9e1ugp6:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}mwri3c++;
  }
}function L9zh5lqt(x_4ny0, abd2k$, qthjl) {
  for (var hajk = x_4ny0['tagName'], d$8b = null, cy0rm3 = x_4ny0['length']; cy0rm3--;) {
    var t75f9 = x_4ny0[cy0rm3],
        hlz = t75f9['qName'],
        of5t9l = t75f9['value'],
        c3irm = hlz['indexOf'](':');if (c3irm > 0x0) var ue1vg = t75f9['prefix'] = hlz['slice'](0x0, c3irm),
        bd = hlz['slice'](c3irm + 0x1),
        zhql5 = 'xmlns' === ue1vg && bd;else bd = hlz, ue1vg = null, zhql5 = 'xmlns' === hlz && '';t75f9['localName'] = bd, zhql5 !== !0x1 && (null == d$8b && (d$8b = {}, L9rm3iwc(qthjl, qthjl = {})), qthjl[zhql5] = d$8b[zhql5] = of5t9l, t75f9['uri'] = 'http://www.w3.org/2000/xmlns/', abd2k$['startPrefixMapping'](zhql5, of5t9l));
  }for (var cy0rm3 = x_4ny0['length']; cy0rm3--;) {
    t75f9 = x_4ny0[cy0rm3];var ue1vg = t75f9['prefix'];ue1vg && ('xml' === ue1vg && (t75f9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ue1vg && (t75f9['uri'] = qthjl[ue1vg || '']));
  }var c3irm = hajk['indexOf'](':');c3irm > 0x0 ? (ue1vg = x_4ny0['prefix'] = hajk['slice'](0x0, c3irm), bd = x_4ny0['localName'] = hajk['slice'](c3irm + 0x1)) : (ue1vg = null, bd = x_4ny0['localName'] = hajk);var lfqtz = x_4ny0['uri'] = qthjl[ue1vg || ''];if (abd2k$['startElement'](lfqtz, bd, hajk, x_4ny0), !x_4ny0['closed']) return x_4ny0['currentNSMap'] = qthjl, x_4ny0['localNSMap'] = d$8b, !0x0;if (abd2k$['endElement'](lfqtz, bd, hajk), d$8b) {
    for (ue1vg in d$8b) abd2k$['endPrefixMapping'](ue1vg);
  }
}function L9pu1eg(sd$24, nyr03x, lztjhq, egv1o7, zjqhk) {
  if (/^(?:script|textarea)$/i['test'](lztjhq)) {
    var n4x_8y = sd$24['indexOf']('</' + lztjhq + '>', nyr03x),
        x_0 = sd$24['substring'](nyr03x + 0x1, n4x_8y);if (/[&<]/['test'](x_0)) return (/^script$/i['test'](lztjhq) ? (zjqhk['characters'](x_0, 0x0, x_0['length']), n4x_8y) : (x_0 = x_0['replace'](/&#?\w+;/g, egv1o7), zjqhk['characters'](x_0, 0x0, x_0['length']), n4x_8y)
    );
  }return nyr03x + 0x1;
}function L9of7t9(kzhbaj, flo59t, uge17, s8d$b2) {
  var kjadb2 = s8d$b2[uge17];return null == kjadb2 && (kjadb2 = kzhbaj['lastIndexOf']('</' + uge17 + '>'), flo59t > kjadb2 && (kjadb2 = kzhbaj['lastIndexOf']('</' + uge17)), s8d$b2[uge17] = kjadb2), flo59t > kjadb2;
}function L9rm3iwc(x4_, qzft5) {
  for (var g6ve in x4_) qzft5[g6ve] = x4_[g6ve];
}function L9kzhqjl(ba2s$, khj2a, ltfq, p6eg) {
  var lf5z = ba2s$['charAt'](khj2a + 0x2);switch (lf5z) {case '-':
      if ('-' === ba2s$['charAt'](khj2a + 0x3)) {
        var khjbaz = ba2s$['indexOf']('-->', khj2a + 0x4);return khjbaz > khj2a ? (ltfq['comment'](ba2s$, khj2a + 0x4, khjbaz - khj2a - 0x4), khjbaz + 0x3) : (p6eg['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ba2s$['substr'](khj2a + 0x3, 0x6)) {
        var khjbaz = ba2s$['indexOf'](']]>', khj2a + 0x9);return ltfq['startCDATA'](), ltfq['characters'](ba2s$, khj2a + 0x9, khjbaz - khj2a - 0x9), ltfq['endCDATA'](), khjbaz + 0x3;
      }var _xs84n = L9y3rn(ba2s$, khj2a),
          rc03my = _xs84n['length'];if (rc03my > 0x1 && /!doctype/i['test'](_xs84n[0x0][0x0])) {
        var rcm3i = _xs84n[0x1][0x0],
            y0xn_4 = rc03my > 0x3 && /^public$/i['test'](_xs84n[0x2][0x0]) && _xs84n[0x3][0x0],
            s$_48 = rc03my > 0x4 && _xs84n[0x4][0x0],
            fzqt5 = _xs84n[rc03my - 0x1];return ltfq['startDTD'](rcm3i, y0xn_4 && y0xn_4['replace'](/^(['"])(.*?)\1$/, '$2'), s$_48 && s$_48['replace'](/^(['"])(.*?)\1$/, '$2')), ltfq['endDTD'](), fzqt5['index'] + fzqt5[0x0]['length'];
      }}return -0x1;
}function L9zqkhja(crm3wi, hjkzl, $2adb) {
  var xy48_ = crm3wi['indexOf']('?>', hjkzl);if (xy48_) {
    var kj2bd = crm3wi['substring'](hjkzl, xy48_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (kj2bd) {
      {
        kj2bd[0x0]['length'];
      }return $2adb['processingInstruction'](kj2bd[0x1], kj2bd[0x2]), xy48_ + 0x2;
    }return -0x1;
  }return -0x1;
}function L9tzf5() {}function L9g1v7ue(hjqzk, jhkqz) {
  return hjqzk['__proto__'] = jhkqz, hjqzk;
}function L9y3rn(_yx4n, vu) {
  var zjkqlh,
      kjhqz = [],
      u7gv1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (u7gv1['lastIndex'] = vu, u7gv1['exec'](_yx4n); zjkqlh = u7gv1['exec'](_yx4n);) if (kjhqz['push'](zjkqlh), zjkqlh[0x1]) return kjhqz;
}var L9xn4y_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9$da = new RegExp('[\\-\\.0-9' + L9xn4y_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9mr3wci = new RegExp('^' + L9xn4y_['source'] + L9$da['source'] + '*(?::' + L9xn4y_['source'] + L9$da['source'] + '*)?$'),
    L9_48xs = 0x0,
    L9c3y0xr = 0x1,
    L9bdkaj2 = 0x2,
    L9x4n0 = 0x3,
    L9ugev7 = 0x4,
    L9b8$sd2 = 0x5,
    L9gpu = 0x6,
    L9e1ugp6 = 0x7;L9hakb2['prototype'] = { 'parse': function (ns_8x4, mci3w, wi3mcr) {
    var v6gu = this['domBuilder'];v6gu['startDocument'](), L9rm3iwc(mci3w, mci3w = {}), L9e1o79(ns_8x4, mci3w, wi3mcr, v6gu, this['errorHandler']), v6gu['endDocument']();
  } }, L9tzf5['prototype'] = { 'setTagName': function (d$ab2k) {
    if (!L9mr3wci['test'](d$ab2k)) throw new Error('invalid tagName:' + d$ab2k);this['tagName'] = d$ab2k;
  }, 'add': function (fltq59, dbs$a2, g1epu) {
    if (!L9mr3wci['test'](fltq59)) throw new Error('invalid attribute:' + fltq59);this[this['length']++] = { 'qName': fltq59, 'value': dbs$a2, 'offset': g1epu };
  }, 'length': 0x0, 'getLocalName': function (ue1vg6) {
    return this[ue1vg6]['localName'];
  }, 'getLocator': function (r0) {
    return this[r0]['locator'];
  }, 'getQName': function (yn3x_) {
    return this[yn3x_]['qName'];
  }, 'getURI': function (d28) {
    return this[d28]['uri'];
  }, 'getValue': function (myr) {
    return this[myr]['value'];
  } }, L9g1v7ue({}, L9g1v7ue['prototype']) instanceof L9g1v7ue || (L9g1v7ue = function (uv61ge, mwcri) {
  function lkq() {}lkq['prototype'] = mwcri, lkq = new lkq();for (mwcri in uv61ge) lkq[mwcri] = uv61ge[mwcri];return lkq;
}), exports['XMLReader'] = L9hakb2;