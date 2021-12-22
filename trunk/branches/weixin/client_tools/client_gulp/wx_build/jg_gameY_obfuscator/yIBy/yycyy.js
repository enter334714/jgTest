var a = wx.$y;
function yls87_f() {}function yl7_s8c(n29kcs, e0xyrz, wumtd1, mv536a, wdut41) {
  function n$2kc9(l87_cs) {
    if (l87_cs > 0xffff) {
      l87_cs -= 0x10000;var cksl2 = 0xd800 + (l87_cs >> 0xa),
          hofj4 = 0xdc00 + (0x3ff & l87_cs);return String['fromCharCode'](cksl2, hofj4);
    }return String['fromCharCode'](l87_cs);
  }function ojhw(v6y3) {
    var c89s = v6y3['slice'](0x1, -0x1);return c89s in wumtd1 ? wumtd1[c89s] : '#' === c89s['charAt'](0x0) ? n$2kc9(parseInt(c89s['substr'](0x1)['replace']('x', '0x'))) : (wdut41['error']('entity not found:' + v6y3), v6y3);
  }function k92$ng(ks98cl) {
    if (ks98cl > c98ksl) {
      var d1thw4 = n29kcs['substring'](c98ksl, ks98cl)['replace'](/&#?\w+;/g, ojhw);m6v35a && j_f4o(c98ksl), mv536a['characters'](d1thw4, 0x0, ks98cl - c98ksl), c98ksl = ks98cl;
    }
  }function j_f4o(owjh4, dwt1h4) {
    for (; owjh4 >= s29n && (dwt1h4 = rvxy0['exec'](n29kcs));) ksl92 = dwt1h4['index'], s29n = ksl92 + dwt1h4[0x0]['length'], m6v35a['lineNumber']++;m6v35a['columnNumber'] = owjh4 - ksl92 + 0x1;
  }for (var ksl92 = 0x0, s29n = 0x0, rvxy0 = /.*(?:\r\n?|\n)|.*$/g, m6v35a = mv536a['locator'], rv3zy0 = [{ 'currentNSMap': e0xyrz }], tdumw = {}, c98ksl = 0x0;;) {
    try {
      var gp$qi = n29kcs['indexOf']('<', c98ksl);if (0x0 > gp$qi) {
        if (!n29kcs['substr'](c98ksl)['match'](/^\s*$/)) {
          var c7s8_l = mv536a['doc'],
              jw4hd = c7s8_l['createTextNode'](n29kcs['substr'](c98ksl));c7s8_l['appendChild'](jw4hd), mv536a['currentElement'] = jw4hd;
        }return;
      }switch (gp$qi > c98ksl && k92$ng(gp$qi), n29kcs['charAt'](gp$qi + 0x1)) {case '/':
          var am1 = n29kcs['indexOf']('>', gp$qi + 0x3),
              npgq$i = n29kcs['substring'](gp$qi + 0x2, am1),
              h_o7 = rv3zy0['pop']();0x0 > am1 ? (npgq$i = n29kcs['substring'](gp$qi + 0x2)['replace'](/[\s<].*/, ''), wdut41['error']('end tag name: ' + npgq$i + ' is not complete:' + h_o7['tagName']), am1 = gp$qi + 0x1 + npgq$i['length']) : npgq$i['match'](/\s</) && (npgq$i = npgq$i['replace'](/[\s<].*/, ''), wdut41['error']('end tag name: ' + npgq$i + ' maybe not complete'), am1 = gp$qi + 0x1 + npgq$i['length']);var wtm1d = h_o7['localNSMap'],
              dwutm = h_o7['tagName'] == npgq$i,
              _sf7l = dwutm || h_o7['tagName'] && h_o7['tagName']['toLowerCase']() == npgq$i['toLowerCase']();if (_sf7l) {
            if (mv536a['endElement'](h_o7['uri'], h_o7['localName'], npgq$i), wtm1d) {
              for (var f7h_j in wtm1d) mv536a['endPrefixMapping'](f7h_j);
            }dwutm || wdut41['fatalError']('end tag name: ' + npgq$i + ' is not match the current start tagName:' + h_o7['tagName']);
          } else rv3zy0['push'](h_o7);am1++;break;case '?':
          m6v35a && j_f4o(gp$qi), am1 = ym635av(n29kcs, gp$qi, mv536a);break;case '!':
          m6v35a && j_f4o(gp$qi), am1 = yh_jo4f(n29kcs, gp$qi, mv536a, wdut41);break;default:
          m6v35a && j_f4o(gp$qi);var tjh4ow = new ywt4du1(),
              uwdm1 = rv3zy0[rv3zy0['length'] - 0x1]['currentNSMap'],
              am1 = yryex0(n29kcs, gp$qi, tjh4ow, uwdm1, ojhw, wdut41),
              m6ua = tjh4ow['length'];if (!tjh4ow['closed'] && yhf_o7j(n29kcs, am1, tjh4ow['tagName'], tdumw) && (tjh4ow['closed'] = !0x0, wumtd1['nbsp'] || wdut41['warning']('unclosed xml attribute')), m6v35a && m6ua) {
            for (var dtwm = y$n9gk2(m6v35a, {}), htwjd4 = 0x0; m6ua > htwjd4; htwjd4++) {
              var jwohf4 = tjh4ow[htwjd4];j_f4o(jwohf4['offset']), jwohf4['locator'] = y$n9gk2(m6v35a, {});
            }mv536a['locator'] = dtwm, yk2n9g(tjh4ow, mv536a, uwdm1) && rv3zy0['push'](tjh4ow), mv536a['locator'] = m6v35a;
          } else yk2n9g(tjh4ow, mv536a, uwdm1) && rv3zy0['push'](tjh4ow);'http://www.w3.org/1999/xhtml' !== tjh4ow['uri'] || tjh4ow['closed'] ? am1++ : am1 = ym3v5a(n29kcs, am1, tjh4ow['tagName'], ojhw, mv536a);}
    } catch (xzy0e) {
      wdut41['error']('element parse error: ' + xzy0e), am1 = -0x1;
    }am1 > c98ksl ? c98ksl = am1 : k92$ng(Math['max'](gp$qi, c98ksl) + 0x1);
  }
}function y$n9gk2(rxzvy, xvy0z) {
  return xvy0z['lineNumber'] = rxzvy['lineNumber'], xvy0z['columnNumber'] = rxzvy['columnNumber'], xvy0z;
}function yryex0(o7_, vay306, mau63, piqgn, $i2kg, d1tuw4) {
  for (var h7of, gqni2, jhwdt4 = ++vay306, avy30 = yum5t;;) {
    var ls92 = o7_['charAt'](jhwdt4);switch (ls92) {case '=':
        if (avy30 === yy3v6a) h7of = o7_['slice'](vay306, jhwdt4), avy30 = ypqi;else {
          if (avy30 !== ya36v) throw new Error('attribute equal must after attrName');avy30 = ypqi;
        }break;case '\x27':case '\x22':
        if (avy30 === ypqi || avy30 === yy3v6a) {
          if (avy30 === yy3v6a && (d1tuw4['warning']('attribute value must after "="'), h7of = o7_['slice'](vay306, jhwdt4)), vay306 = jhwdt4 + 0x1, jhwdt4 = o7_['indexOf'](ls92, vay306), !(jhwdt4 > 0x0)) throw new Error('attribute value no end \'' + ls92 + '\' match');gqni2 = o7_['slice'](vay306, jhwdt4)['replace'](/&#?\w+;/g, $i2kg), mau63['add'](h7of, gqni2, vay306 - 0x1), avy30 = yo_jhf7;
        } else {
          if (avy30 != yg2$q) throw new Error('attribute value must after "="');gqni2 = o7_['slice'](vay306, jhwdt4)['replace'](/&#?\w+;/g, $i2kg), mau63['add'](h7of, gqni2, vay306), d1tuw4['warning']('attribute "' + h7of + '" missed start quot(' + ls92 + ')!!'), vay306 = jhwdt4 + 0x1, avy30 = yo_jhf7;
        }break;case '/':
        switch (avy30) {case yum5t:
            mau63['setTagName'](o7_['slice'](vay306, jhwdt4));case yo_jhf7:case yrxzy0:case yyr03vz:
            avy30 = yyr03vz, mau63['closed'] = !0x0;case yg2$q:case yy3v6a:case ya36v:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return d1tuw4['error']('unexpected end of input'), avy30 == yum5t && mau63['setTagName'](o7_['slice'](vay306, jhwdt4)), jhwdt4;case '>':
        switch (avy30) {case yum5t:
            mau63['setTagName'](o7_['slice'](vay306, jhwdt4));case yo_jhf7:case yrxzy0:case yyr03vz:
            break;case yg2$q:case yy3v6a:
            gqni2 = o7_['slice'](vay306, jhwdt4), '/' === gqni2['slice'](-0x1) && (mau63['closed'] = !0x0, gqni2 = gqni2['slice'](0x0, -0x1));case ya36v:
            avy30 === ya36v && (gqni2 = h7of), avy30 == yg2$q ? (d1tuw4['warning']('attribute "' + gqni2 + '" missed quot(")!!'), mau63['add'](h7of, gqni2['replace'](/&#?\w+;/g, $i2kg), vay306)) : ('http://www.w3.org/1999/xhtml' === piqgn[''] && gqni2['match'](/^(?:disabled|checked|selected)$/i) || d1tuw4['warning']('attribute "' + gqni2 + '" missed value!! "' + gqni2 + '" instead!!'), mau63['add'](gqni2, gqni2, vay306));break;case ypqi:
            throw new Error('attribute value missed!!');}return jhwdt4;case '\u0080':
        ls92 = '\x20';default:
        if ('\x20' >= ls92) switch (avy30) {case yum5t:
            mau63['setTagName'](o7_['slice'](vay306, jhwdt4)), avy30 = yrxzy0;break;case yy3v6a:
            h7of = o7_['slice'](vay306, jhwdt4), avy30 = ya36v;break;case yg2$q:
            var gqni2 = o7_['slice'](vay306, jhwdt4)['replace'](/&#?\w+;/g, $i2kg);d1tuw4['warning']('attribute "' + gqni2 + '" missed quot(")!!'), mau63['add'](h7of, gqni2, vay306);case yo_jhf7:
            avy30 = yrxzy0;} else switch (avy30) {case ya36v:
            {
              mau63['tagName'];
            }'http://www.w3.org/1999/xhtml' === piqgn[''] && h7of['match'](/^(?:disabled|checked|selected)$/i) || d1tuw4['warning']('attribute "' + h7of + '" missed value!! "' + h7of + '" instead2!!'), mau63['add'](h7of, h7of, vay306), vay306 = jhwdt4, avy30 = yy3v6a;break;case yo_jhf7:
            d1tuw4['warning']('attribute space is required"' + h7of + '\x22!!');case yrxzy0:
            avy30 = yy3v6a, vay306 = jhwdt4;break;case ypqi:
            avy30 = yg2$q, vay306 = jhwdt4;break;case yyr03vz:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}jhwdt4++;
  }
}function yk2n9g(fj4hwo, n92cks, k$ng2i) {
  for (var h41t = fj4hwo['tagName'], gq$ipn = null, sf7l_ = fj4hwo['length']; sf7l_--;) {
    var w4utd1 = fj4hwo[sf7l_],
        mduw1t = w4utd1['qName'],
        tj4o = w4utd1['value'],
        s8l9 = mduw1t['indexOf'](':');if (s8l9 > 0x0) var _fj4ho = w4utd1['prefix'] = mduw1t['slice'](0x0, s8l9),
        am5v6 = mduw1t['slice'](s8l9 + 0x1),
        m3u56a = 'xmlns' === _fj4ho && am5v6;else am5v6 = mduw1t, _fj4ho = null, m3u56a = 'xmlns' === mduw1t && '';w4utd1['localName'] = am5v6, m3u56a !== !0x1 && (null == gq$ipn && (gq$ipn = {}, ylcks9(k$ng2i, k$ng2i = {})), k$ng2i[m3u56a] = gq$ipn[m3u56a] = tj4o, w4utd1['uri'] = 'http://www.w3.org/2000/xmlns/', n92cks['startPrefixMapping'](m3u56a, tj4o));
  }for (var sf7l_ = fj4hwo['length']; sf7l_--;) {
    w4utd1 = fj4hwo[sf7l_];var _fj4ho = w4utd1['prefix'];_fj4ho && ('xml' === _fj4ho && (w4utd1['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _fj4ho && (w4utd1['uri'] = k$ng2i[_fj4ho || '']));
  }var s8l9 = h41t['indexOf'](':');s8l9 > 0x0 ? (_fj4ho = fj4hwo['prefix'] = h41t['slice'](0x0, s8l9), am5v6 = fj4hwo['localName'] = h41t['slice'](s8l9 + 0x1)) : (_fj4ho = null, am5v6 = fj4hwo['localName'] = h41t);var av3m = fj4hwo['uri'] = k$ng2i[_fj4ho || ''];if (n92cks['startElement'](av3m, am5v6, h41t, fj4hwo), !fj4hwo['closed']) return fj4hwo['currentNSMap'] = k$ng2i, fj4hwo['localNSMap'] = gq$ipn, !0x0;if (n92cks['endElement'](av3m, am5v6, h41t), gq$ipn) {
    for (_fj4ho in gq$ipn) n92cks['endPrefixMapping'](_fj4ho);
  }
}function ym3v5a(zy0exr, w4fhj, kg$n92, n$ipgq, dt4hj) {
  if (/^(?:script|textarea)$/i['test'](kg$n92)) {
    var mt5d1u = zy0exr['indexOf']('</' + kg$n92 + '>', w4fhj),
        w4ohjt = zy0exr['substring'](w4fhj + 0x1, mt5d1u);if (/[&<]/['test'](w4ohjt)) return (/^script$/i['test'](kg$n92) ? (dt4hj['characters'](w4ohjt, 0x0, w4ohjt['length']), mt5d1u) : (w4ohjt = w4ohjt['replace'](/&#?\w+;/g, n$ipgq), dt4hj['characters'](w4ohjt, 0x0, w4ohjt['length']), mt5d1u)
    );
  }return w4fhj + 0x1;
}function yhf_o7j(lf8s, g9n, vyxz0, c9snk2) {
  var v56am3 = c9snk2[vyxz0];return null == v56am3 && (v56am3 = lf8s['lastIndexOf']('</' + vyxz0 + '>'), g9n > v56am3 && (v56am3 = lf8s['lastIndexOf']('</' + vyxz0)), c9snk2[vyxz0] = v56am3), g9n > v56am3;
}function ylcks9(kl, jwt4hd) {
  for (var u5m63 in kl) jwt4hd[u5m63] = kl[u5m63];
}function yh_jo4f(zey0, f4wohj, fol8_, vzryx) {
  var l7_c = zey0['charAt'](f4wohj + 0x2);switch (l7_c) {case '-':
      if ('-' === zey0['charAt'](f4wohj + 0x3)) {
        var ls97c8 = zey0['indexOf']('-->', f4wohj + 0x4);return ls97c8 > f4wohj ? (fol8_['comment'](zey0, f4wohj + 0x4, ls97c8 - f4wohj - 0x4), ls97c8 + 0x3) : (vzryx['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == zey0['substr'](f4wohj + 0x3, 0x6)) {
        var ls97c8 = zey0['indexOf'](']]>', f4wohj + 0x9);return fol8_['startCDATA'](), fol8_['characters'](zey0, f4wohj + 0x9, ls97c8 - f4wohj - 0x9), fol8_['endCDATA'](), ls97c8 + 0x3;
      }var v63yr0 = yj4twho(zey0, f4wohj),
          ua15dm = v63yr0['length'];if (ua15dm > 0x1 && /!doctype/i['test'](v63yr0[0x0][0x0])) {
        var zyr30 = v63yr0[0x1][0x0],
            y0erzx = ua15dm > 0x3 && /^public$/i['test'](v63yr0[0x2][0x0]) && v63yr0[0x3][0x0],
            l78_fo = ua15dm > 0x4 && v63yr0[0x4][0x0],
            kg2n = v63yr0[ua15dm - 0x1];return fol8_['startDTD'](zyr30, y0erzx && y0erzx['replace'](/^(['"])(.*?)\1$/, '$2'), l78_fo && l78_fo['replace'](/^(['"])(.*?)\1$/, '$2')), fol8_['endDTD'](), kg2n['index'] + kg2n[0x0]['length'];
      }}return -0x1;
}function ym635av(_fo7l, g2$qi, f_oh7j) {
  var niqg = _fo7l['indexOf']('?>', g2$qi);if (niqg) {
    var udm5 = _fo7l['substring'](g2$qi, niqg)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (udm5) {
      {
        udm5[0x0]['length'];
      }return f_oh7j['processingInstruction'](udm5[0x1], udm5[0x2]), niqg + 0x2;
    }return -0x1;
  }return -0x1;
}function ywt4du1() {}function yyr3v60(ad5u1, _o4hj) {
  return ad5u1['__proto__'] = _o4hj, ad5u1;
}function yj4twho(f8_7oj, gn2i$) {
  var rz3v,
      u61am5 = [],
      oj_78 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (oj_78['lastIndex'] = gn2i$, oj_78['exec'](f8_7oj); rz3v = oj_78['exec'](f8_7oj);) if (u61am5['push'](rz3v), rz3v[0x1]) return u61am5;
}var yy6r3v0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ywhjf4o = new RegExp('[\\-\\.0-9' + yy6r3v0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    yk89scl = new RegExp('^' + yy6r3v0['source'] + ywhjf4o['source'] + '*(?::' + yy6r3v0['source'] + ywhjf4o['source'] + '*)?$'),
    yum5t = 0x0,
    yy3v6a = 0x1,
    ya36v = 0x2,
    ypqi = 0x3,
    yg2$q = 0x4,
    yo_jhf7 = 0x5,
    yrxzy0 = 0x6,
    yyr03vz = 0x7;yls87_f['prototype'] = { 'parse': function (u5dt1, jdth, wtu41) {
    var _7ol = this['domBuilder'];_7ol['startDocument'](), ylcks9(jdth, jdth = {}), yl7_s8c(u5dt1, jdth, wtu41, _7ol, this['errorHandler']), _7ol['endDocument']();
  } }, ywt4du1['prototype'] = { 'setTagName': function (jhw4o) {
    if (!yk89scl['test'](jhw4o)) throw new Error('invalid tagName:' + jhw4o);this['tagName'] = jhw4o;
  }, 'add': function (d4u, tmuwd1, s8cl_7) {
    if (!yk89scl['test'](d4u)) throw new Error('invalid attribute:' + d4u);this[this['length']++] = { 'qName': d4u, 'value': tmuwd1, 'offset': s8cl_7 };
  }, 'length': 0x0, 'getLocalName': function (f_j4h) {
    return this[f_j4h]['localName'];
  }, 'getLocator': function (r6v) {
    return this[r6v]['locator'];
  }, 'getQName': function (s92nc) {
    return this[s92nc]['qName'];
  }, 'getURI': function (ud5tm1) {
    return this[ud5tm1]['uri'];
  }, 'getValue': function (ua563) {
    return this[ua563]['value'];
  } }, yyr3v60({}, yyr3v60['prototype']) instanceof yyr3v60 || (yyr3v60 = function (y3va, jdh4w) {
  function z0xvry() {}z0xvry['prototype'] = jdh4w, z0xvry = new z0xvry();for (jdh4w in y3va) z0xvry[jdh4w] = y3va[jdh4w];return z0xvry;
}), exports['XMLReader'] = yls87_f;