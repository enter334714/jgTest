var a = wx.$y;
function ydum1a5() {}function ym536au(o7_l, hwd1t, jhf_, wtdjh, m3u6a) {
  function o8jf(t1udmw) {
    if (t1udmw > 0xffff) {
      t1udmw -= 0x10000;var jwh4fo = 0xd800 + (t1udmw >> 0xa),
          y0erxz = 0xdc00 + (0x3ff & t1udmw);return String['fromCharCode'](jwh4fo, y0erxz);
    }return String['fromCharCode'](t1udmw);
  }function $ikg2n(wdht14) {
    var yzx0e = wdht14['slice'](0x1, -0x1);return yzx0e in jhf_ ? jhf_[yzx0e] : '#' === yzx0e['charAt'](0x0) ? o8jf(parseInt(yzx0e['substr'](0x1)['replace']('x', '0x'))) : (m3u6a['error']('entity not found:' + wdht14), wdht14);
  }function a360vy(y3av56) {
    if (y3av56 > mdw1t) {
      var um1a56 = o7_l['substring'](mdw1t, y3av56)['replace'](/&#?\w+;/g, $ikg2n);g2$kn9 && sc978l(mdw1t), wtdjh['characters'](um1a56, 0x0, y3av56 - mdw1t), mdw1t = y3av56;
    }
  }function sc978l(s8_l7c, v30r) {
    for (; s8_l7c >= dw1umt && (v30r = f7oj_['exec'](o7_l));) igq2$n = v30r['index'], dw1umt = igq2$n + v30r[0x0]['length'], g2$kn9['lineNumber']++;g2$kn9['columnNumber'] = s8_l7c - igq2$n + 0x1;
  }for (var igq2$n = 0x0, dw1umt = 0x0, f7oj_ = /.*(?:\r\n?|\n)|.*$/g, g2$kn9 = wtdjh['locator'], j_fho = [{ 'currentNSMap': hwd1t }], h41d = {}, mdw1t = 0x0;;) {
    try {
      var j78o_f = o7_l['indexOf']('<', mdw1t);if (0x0 > j78o_f) {
        if (!o7_l['substr'](mdw1t)['match'](/^\s*$/)) {
          var nqig2$ = wtdjh['doc'],
              d5a1u = nqig2$['createTextNode'](o7_l['substr'](mdw1t));nqig2$['appendChild'](d5a1u), wtdjh['currentElement'] = d5a1u;
        }return;
      }switch (j78o_f > mdw1t && a360vy(j78o_f), o7_l['charAt'](j78o_f + 0x1)) {case '/':
          var a0y36v = o7_l['indexOf']('>', j78o_f + 0x3),
              zxr0ey = o7_l['substring'](j78o_f + 0x2, a0y36v),
              a3v60 = j_fho['pop']();0x0 > a0y36v ? (zxr0ey = o7_l['substring'](j78o_f + 0x2)['replace'](/[\s<].*/, ''), m3u6a['error']('end tag name: ' + zxr0ey + ' is not complete:' + a3v60['tagName']), a0y36v = j78o_f + 0x1 + zxr0ey['length']) : zxr0ey['match'](/\s</) && (zxr0ey = zxr0ey['replace'](/[\s<].*/, ''), m3u6a['error']('end tag name: ' + zxr0ey + ' maybe not complete'), a0y36v = j78o_f + 0x1 + zxr0ey['length']);var s98 = a3v60['localNSMap'],
              $qign2 = a3v60['tagName'] == zxr0ey,
              sc8l97 = $qign2 || a3v60['tagName'] && a3v60['tagName']['toLowerCase']() == zxr0ey['toLowerCase']();if (sc8l97) {
            if (wtdjh['endElement'](a3v60['uri'], a3v60['localName'], zxr0ey), s98) {
              for (var ay635 in s98) wtdjh['endPrefixMapping'](ay635);
            }$qign2 || m3u6a['fatalError']('end tag name: ' + zxr0ey + ' is not match the current start tagName:' + a3v60['tagName']);
          } else j_fho['push'](a3v60);a0y36v++;break;case '?':
          g2$kn9 && sc978l(j78o_f), a0y36v = ydmtuw(o7_l, j78o_f, wtdjh);break;case '!':
          g2$kn9 && sc978l(j78o_f), a0y36v = yn2$kg(o7_l, j78o_f, wtdjh, m3u6a);break;default:
          g2$kn9 && sc978l(j78o_f);var dut1w4 = new ykgi2n(),
              ngqi$2 = j_fho[j_fho['length'] - 0x1]['currentNSMap'],
              a0y36v = y_jh7o(o7_l, j78o_f, dut1w4, ngqi$2, $ikg2n, m3u6a),
              yz30 = dut1w4['length'];if (!dut1w4['closed'] && ye0rzxy(o7_l, a0y36v, dut1w4['tagName'], h41d) && (dut1w4['closed'] = !0x0, jhf_['nbsp'] || m3u6a['warning']('unclosed xml attribute')), g2$kn9 && yz30) {
            for (var u4wt1 = yvrzy0(g2$kn9, {}), f78oj_ = 0x0; yz30 > f78oj_; f78oj_++) {
              var vzr3y0 = dut1w4[f78oj_];sc978l(vzr3y0['offset']), vzr3y0['locator'] = yvrzy0(g2$kn9, {});
            }wtdjh['locator'] = u4wt1, yc89k(dut1w4, wtdjh, ngqi$2) && j_fho['push'](dut1w4), wtdjh['locator'] = g2$kn9;
          } else yc89k(dut1w4, wtdjh, ngqi$2) && j_fho['push'](dut1w4);'http://www.w3.org/1999/xhtml' !== dut1w4['uri'] || dut1w4['closed'] ? a0y36v++ : a0y36v = ytd4wh1(o7_l, a0y36v, dut1w4['tagName'], $ikg2n, wtdjh);}
    } catch (of8l_7) {
      m3u6a['error']('element parse error: ' + of8l_7), a0y36v = -0x1;
    }a0y36v > mdw1t ? mdw1t = a0y36v : a360vy(Math['max'](j78o_f, mdw1t) + 0x1);
  }
}function yvrzy0(_j4hf, ksn2c) {
  return ksn2c['lineNumber'] = _j4hf['lineNumber'], ksn2c['columnNumber'] = _j4hf['columnNumber'], ksn2c;
}function y_jh7o(f78s_l, g$nik, h_o7, owh4f, cs879l, ot4wh) {
  for (var yv630r, m1au65, dum1t = ++g$nik, _lf7o = yof7l_8;;) {
    var k9$2gn = f78s_l['charAt'](dum1t);switch (k9$2gn) {case '=':
        if (_lf7o === ygk2i$n) yv630r = f78s_l['slice'](g$nik, dum1t), _lf7o = yduam51;else {
          if (_lf7o !== ym63au5) throw new Error('attribute equal must after attrName');_lf7o = yduam51;
        }break;case '\x27':case '\x22':
        if (_lf7o === yduam51 || _lf7o === ygk2i$n) {
          if (_lf7o === ygk2i$n && (ot4wh['warning']('attribute value must after "="'), yv630r = f78s_l['slice'](g$nik, dum1t)), g$nik = dum1t + 0x1, dum1t = f78s_l['indexOf'](k9$2gn, g$nik), !(dum1t > 0x0)) throw new Error('attribute value no end \'' + k9$2gn + '\' match');m1au65 = f78s_l['slice'](g$nik, dum1t)['replace'](/&#?\w+;/g, cs879l), h_o7['add'](yv630r, m1au65, g$nik - 0x1), _lf7o = yf4_o;
        } else {
          if (_lf7o != yk2c$n) throw new Error('attribute value must after "="');m1au65 = f78s_l['slice'](g$nik, dum1t)['replace'](/&#?\w+;/g, cs879l), h_o7['add'](yv630r, m1au65, g$nik), ot4wh['warning']('attribute "' + yv630r + '" missed start quot(' + k9$2gn + ')!!'), g$nik = dum1t + 0x1, _lf7o = yf4_o;
        }break;case '/':
        switch (_lf7o) {case yof7l_8:
            h_o7['setTagName'](f78s_l['slice'](g$nik, dum1t));case yf4_o:case yhd4twj:case yr3y0zv:
            _lf7o = yr3y0zv, h_o7['closed'] = !0x0;case yk2c$n:case ygk2i$n:case ym63au5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ot4wh['error']('unexpected end of input'), _lf7o == yof7l_8 && h_o7['setTagName'](f78s_l['slice'](g$nik, dum1t)), dum1t;case '>':
        switch (_lf7o) {case yof7l_8:
            h_o7['setTagName'](f78s_l['slice'](g$nik, dum1t));case yf4_o:case yhd4twj:case yr3y0zv:
            break;case yk2c$n:case ygk2i$n:
            m1au65 = f78s_l['slice'](g$nik, dum1t), '/' === m1au65['slice'](-0x1) && (h_o7['closed'] = !0x0, m1au65 = m1au65['slice'](0x0, -0x1));case ym63au5:
            _lf7o === ym63au5 && (m1au65 = yv630r), _lf7o == yk2c$n ? (ot4wh['warning']('attribute "' + m1au65 + '" missed quot(")!!'), h_o7['add'](yv630r, m1au65['replace'](/&#?\w+;/g, cs879l), g$nik)) : ('http://www.w3.org/1999/xhtml' === owh4f[''] && m1au65['match'](/^(?:disabled|checked|selected)$/i) || ot4wh['warning']('attribute "' + m1au65 + '" missed value!! "' + m1au65 + '" instead!!'), h_o7['add'](m1au65, m1au65, g$nik));break;case yduam51:
            throw new Error('attribute value missed!!');}return dum1t;case '\u0080':
        k9$2gn = '\x20';default:
        if ('\x20' >= k9$2gn) switch (_lf7o) {case yof7l_8:
            h_o7['setTagName'](f78s_l['slice'](g$nik, dum1t)), _lf7o = yhd4twj;break;case ygk2i$n:
            yv630r = f78s_l['slice'](g$nik, dum1t), _lf7o = ym63au5;break;case yk2c$n:
            var m1au65 = f78s_l['slice'](g$nik, dum1t)['replace'](/&#?\w+;/g, cs879l);ot4wh['warning']('attribute "' + m1au65 + '" missed quot(")!!'), h_o7['add'](yv630r, m1au65, g$nik);case yf4_o:
            _lf7o = yhd4twj;} else switch (_lf7o) {case ym63au5:
            {
              h_o7['tagName'];
            }'http://www.w3.org/1999/xhtml' === owh4f[''] && yv630r['match'](/^(?:disabled|checked|selected)$/i) || ot4wh['warning']('attribute "' + yv630r + '" missed value!! "' + yv630r + '" instead2!!'), h_o7['add'](yv630r, yv630r, g$nik), g$nik = dum1t, _lf7o = ygk2i$n;break;case yf4_o:
            ot4wh['warning']('attribute space is required"' + yv630r + '\x22!!');case yhd4twj:
            _lf7o = ygk2i$n, g$nik = dum1t;break;case yduam51:
            _lf7o = yk2c$n, g$nik = dum1t;break;case yr3y0zv:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}dum1t++;
  }
}function yc89k(whtjo, vm3a, owhjf) {
  for (var s7l8 = whtjo['tagName'], tw41h = null, htjwd = whtjo['length']; htjwd--;) {
    var m1t5d = whtjo[htjwd],
        $i2kng = m1t5d['qName'],
        whdt = m1t5d['value'],
        m53u6a = $i2kng['indexOf'](':');if (m53u6a > 0x0) var dwmtu1 = m1t5d['prefix'] = $i2kng['slice'](0x0, m53u6a),
        v6am = $i2kng['slice'](m53u6a + 0x1),
        i2qng$ = 'xmlns' === dwmtu1 && v6am;else v6am = $i2kng, dwmtu1 = null, i2qng$ = 'xmlns' === $i2kng && '';m1t5d['localName'] = v6am, i2qng$ !== !0x1 && (null == tw41h && (tw41h = {}, ywd4tu(owhjf, owhjf = {})), owhjf[i2qng$] = tw41h[i2qng$] = whdt, m1t5d['uri'] = 'http://www.w3.org/2000/xmlns/', vm3a['startPrefixMapping'](i2qng$, whdt));
  }for (var htjwd = whtjo['length']; htjwd--;) {
    m1t5d = whtjo[htjwd];var dwmtu1 = m1t5d['prefix'];dwmtu1 && ('xml' === dwmtu1 && (m1t5d['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== dwmtu1 && (m1t5d['uri'] = owhjf[dwmtu1 || '']));
  }var m53u6a = s7l8['indexOf'](':');m53u6a > 0x0 ? (dwmtu1 = whtjo['prefix'] = s7l8['slice'](0x0, m53u6a), v6am = whtjo['localName'] = s7l8['slice'](m53u6a + 0x1)) : (dwmtu1 = null, v6am = whtjo['localName'] = s7l8);var u16ma5 = whtjo['uri'] = owhjf[dwmtu1 || ''];if (vm3a['startElement'](u16ma5, v6am, s7l8, whtjo), !whtjo['closed']) return whtjo['currentNSMap'] = owhjf, whtjo['localNSMap'] = tw41h, !0x0;if (vm3a['endElement'](u16ma5, v6am, s7l8), tw41h) {
    for (dwmtu1 in tw41h) vm3a['endPrefixMapping'](dwmtu1);
  }
}function ytd4wh1(iqgn, l7c, uw41t, y6va3, m5dtu) {
  if (/^(?:script|textarea)$/i['test'](uw41t)) {
    var ht = iqgn['indexOf']('</' + uw41t + '>', l7c),
        l7s_8c = iqgn['substring'](l7c + 0x1, ht);if (/[&<]/['test'](l7s_8c)) return (/^script$/i['test'](uw41t) ? (m5dtu['characters'](l7s_8c, 0x0, l7s_8c['length']), ht) : (l7s_8c = l7s_8c['replace'](/&#?\w+;/g, y6va3), m5dtu['characters'](l7s_8c, 0x0, l7s_8c['length']), ht)
    );
  }return l7c + 0x1;
}function ye0rzxy(td4h, whjdt, wohj4, z3yr) {
  var l_of8 = z3yr[wohj4];return null == l_of8 && (l_of8 = td4h['lastIndexOf']('</' + wohj4 + '>'), whjdt > l_of8 && (l_of8 = td4h['lastIndexOf']('</' + wohj4)), z3yr[wohj4] = l_of8), whjdt > l_of8;
}function ywd4tu(y6vr30, s_f87l) {
  for (var sl9kc in y6vr30) s_f87l[sl9kc] = y6vr30[sl9kc];
}function yn2$kg(qni$2, l978c, yrzxv0, o87_) {
  var ezy0rx = qni$2['charAt'](l978c + 0x2);switch (ezy0rx) {case '-':
      if ('-' === qni$2['charAt'](l978c + 0x3)) {
        var o_l = qni$2['indexOf']('-->', l978c + 0x4);return o_l > l978c ? (yrzxv0['comment'](qni$2, l978c + 0x4, o_l - l978c - 0x4), o_l + 0x3) : (o87_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qni$2['substr'](l978c + 0x3, 0x6)) {
        var o_l = qni$2['indexOf'](']]>', l978c + 0x9);return yrzxv0['startCDATA'](), yrzxv0['characters'](qni$2, l978c + 0x9, o_l - l978c - 0x9), yrzxv0['endCDATA'](), o_l + 0x3;
      }var wd4j = yscl987(qni$2, l978c),
          skn2c = wd4j['length'];if (skn2c > 0x1 && /!doctype/i['test'](wd4j[0x0][0x0])) {
        var f_8sl = wd4j[0x1][0x0],
            $n9ck2 = skn2c > 0x3 && /^public$/i['test'](wd4j[0x2][0x0]) && wd4j[0x3][0x0],
            hd4w1t = skn2c > 0x4 && wd4j[0x4][0x0],
            v3y06a = wd4j[skn2c - 0x1];return yrzxv0['startDTD'](f_8sl, $n9ck2 && $n9ck2['replace'](/^(['"])(.*?)\1$/, '$2'), hd4w1t && hd4w1t['replace'](/^(['"])(.*?)\1$/, '$2')), yrzxv0['endDTD'](), v3y06a['index'] + v3y06a[0x0]['length'];
      }}return -0x1;
}function ydmtuw(sl7_8, erzy0, l_f7) {
  var n92$kg = sl7_8['indexOf']('?>', erzy0);if (n92$kg) {
    var f87_jo = sl7_8['substring'](erzy0, n92$kg)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (f87_jo) {
      {
        f87_jo[0x0]['length'];
      }return l_f7['processingInstruction'](f87_jo[0x1], f87_jo[0x2]), n92$kg + 0x2;
    }return -0x1;
  }return -0x1;
}function ykgi2n() {}function yj78fo_(tdm, dwu1t4) {
  return tdm['__proto__'] = dwu1t4, tdm;
}function yscl987(rzey0x, _of78l) {
  var of_7l,
      md5a1u = [],
      c98lks = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (c98lks['lastIndex'] = _of78l, c98lks['exec'](rzey0x); of_7l = c98lks['exec'](rzey0x);) if (md5a1u['push'](of_7l), of_7l[0x1]) return md5a1u;
}var yc7l8_s = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    yf4o_h = new RegExp('[\\-\\.0-9' + yc7l8_s['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ylfs78_ = new RegExp('^' + yc7l8_s['source'] + yf4o_h['source'] + '*(?::' + yc7l8_s['source'] + yf4o_h['source'] + '*)?$'),
    yof7l_8 = 0x0,
    ygk2i$n = 0x1,
    ym63au5 = 0x2,
    yduam51 = 0x3,
    yk2c$n = 0x4,
    yf4_o = 0x5,
    yhd4twj = 0x6,
    yr3y0zv = 0x7;ydum1a5['prototype'] = { 'parse': function (wh14d, fo_7, yzvx) {
    var $g29 = this['domBuilder'];$g29['startDocument'](), ywd4tu(fo_7, fo_7 = {}), ym536au(wh14d, fo_7, yzvx, $g29, this['errorHandler']), $g29['endDocument']();
  } }, ykgi2n['prototype'] = { 'setTagName': function (t1w4u) {
    if (!ylfs78_['test'](t1w4u)) throw new Error('invalid tagName:' + t1w4u);this['tagName'] = t1w4u;
  }, 'add': function (ngq$pi, hdwtj, v630r) {
    if (!ylfs78_['test'](ngq$pi)) throw new Error('invalid attribute:' + ngq$pi);this[this['length']++] = { 'qName': ngq$pi, 'value': hdwtj, 'offset': v630r };
  }, 'length': 0x0, 'getLocalName': function (a06v) {
    return this[a06v]['localName'];
  }, 'getLocator': function (l_cs7) {
    return this[l_cs7]['locator'];
  }, 'getQName': function (l8f_) {
    return this[l8f_]['qName'];
  }, 'getURI': function (sn29k) {
    return this[sn29k]['uri'];
  }, 'getValue': function (f_7lo) {
    return this[f_7lo]['value'];
  } }, yj78fo_({}, yj78fo_['prototype']) instanceof yj78fo_ || (yj78fo_ = function (lk8s, l89ks) {
  function c89lks() {}c89lks['prototype'] = l89ks, c89lks = new c89lks();for (l89ks in lk8s) c89lks[l89ks] = lk8s[l89ks];return c89lks;
}), exports['XMLReader'] = ydum1a5;