var W = wx.$l;
function L9n84s_x() {}function L9jkzhb(ve7g1o, w3micr, gve7u, k$bad2, r03mci) {
  function kzjhab(akjqzh) {
    var n8$4_s = akjqzh['slice'](0x1, -0x1);return n8$4_s in gve7u ? gve7u[n8$4_s] : '#' === n8$4_s['charAt'](0x0) ? 0xffff < (n8$4_s = parseInt(n8$4_s['substr'](0x1)['replace']('x', '0x'))) ? (n8$4_s -= 0x10000, String['fromCharCode'](0xd800 + (n8$4_s >> 0xa), 0xdc00 + (0x3ff & n8$4_s))) : String['fromCharCode'](n8$4_s) : (r03mci['error']('entity not found:' + akjqzh), akjqzh);
  }function f7vo1(o1vf79) {
    var u1p6e;$2da < o1vf79 && (u1p6e = ve7g1o['substring']($2da, o1vf79)['replace'](/&#?\w+;/g, kzjhab), flot9 && zlqjht($2da), k$bad2['characters'](u1p6e, 0x0, o1vf79 - $2da), $2da = o1vf79);
  }function zlqjht(rcmy3, r0mi) {
    for (; d2kabj <= rcmy3 && (r0mi = m3ry0['exec'](ve7g1o));) $b2dsa = r0mi['index'], d2kabj = $b2dsa + r0mi[0x0]['length'], flot9['lineNumber']++;flot9['columnNumber'] = rcmy3 - $b2dsa + 0x1;
  }for (var $b2dsa = 0x0, d2kabj = 0x0, m3ry0 = /.*(?:\r\n?|\n)|.*$/g, flot9 = k$bad2['locator'], lq9t5 = [{ 'currentNSMap': w3micr }], $48n_ = {}, $2da = 0x0;;) {
    try {
      var r3wc = ve7g1o['indexOf']('<', $2da),
          cmir0,
          z5tqf;if (r3wc < 0x0) return void (ve7g1o['substr']($2da)['match'](/^\s*$/) || (z5tqf = (cmir0 = k$bad2['doc'])['createTextNode'](ve7g1o['substr']($2da)), cmir0['appendChild'](z5tqf), k$bad2['currentElement'] = z5tqf));switch ($2da < r3wc && f7vo1(r3wc), ve7g1o['charAt'](r3wc + 0x1)) {case '/':
          var o5f7v9 = ve7g1o['indexOf']('>', r3wc + 0x3),
              v1e97 = ve7g1o['substring'](r3wc + 0x2, o5f7v9),
              x40yn = lq9t5['pop']();o5f7v9 < 0x0 ? (v1e97 = ve7g1o['substring'](r3wc + 0x2)['replace'](/[\s<].*/, ''), r03mci['error']('end tag name: ' + v1e97 + ' is not complete:' + x40yn['tagName']), o5f7v9 = r3wc + 0x1 + v1e97['length']) : v1e97['match'](/\s</) && (v1e97 = v1e97['replace'](/[\s<].*/, ''), r03mci['error']('end tag name: ' + v1e97 + ' maybe not complete'), o5f7v9 = r3wc + 0x1 + v1e97['length']);var cmri3 = x40yn['localNSMap'],
              lhq = x40yn['tagName'] == v1e97;if (lhq || x40yn['tagName'] && x40yn['tagName']['toLowerCase']() == v1e97['toLowerCase']()) {
            if (k$bad2['endElement'](x40yn['uri'], x40yn['localName'], v1e97), cmri3) {
              for (var s$adb in cmri3) k$bad2['endPrefixMapping'](s$adb);
            }lhq || r03mci['fatalError']('end tag name: ' + v1e97 + ' is not match the current start tagName:' + x40yn['tagName']);
          } else lq9t5['push'](x40yn);o5f7v9++;break;case '?':
          flot9 && zlqjht(r3wc), o5f7v9 = L9$abk2(ve7g1o, r3wc, k$bad2);break;case '!':
          flot9 && zlqjht(r3wc), o5f7v9 = L9g61peu(ve7g1o, r3wc, k$bad2, r03mci);break;default:
          flot9 && zlqjht(r3wc);var qt95f = new L9yrx03(),
              ov179 = lq9t5[lq9t5['length'] - 0x1]['currentNSMap'],
              o5f7v9 = L9_s84n$(ve7g1o, r3wc, qt95f, ov179, kzjhab, r03mci),
              egu17v = qt95f['length'];if (!qt95f['closed'] && L9zkabjh(ve7g1o, o5f7v9, qt95f['tagName'], $48n_) && (qt95f['closed'] = !0x0, gve7u['nbsp'] || r03mci['warning']('unclosed xml attribute')), flot9 && egu17v) {
            for (var cr0xy = L9qzaj(flot9, {}), v6ueg1 = 0x0; v6ueg1 < egu17v; v6ueg1++) {
              var s8nx_4 = qt95f[v6ueg1];zlqjht(s8nx_4['offset']), s8nx_4['locator'] = L9qzaj(flot9, {});
            }k$bad2['locator'] = cr0xy, L9q5z(qt95f, k$bad2, ov179) && lq9t5['push'](qt95f), k$bad2['locator'] = flot9;
          } else L9q5z(qt95f, k$bad2, ov179) && lq9t5['push'](qt95f);'http://www.w3.org/1999/xhtml' !== qt95f['uri'] || qt95f['closed'] ? o5f7v9++ : o5f7v9 = L9qhtzlj(ve7g1o, o5f7v9, qt95f['tagName'], kzjhab, k$bad2);}
    } catch (ahkq) {
      r03mci['error']('element parse error: ' + ahkq), o5f7v9 = -0x1;
    }$2da < o5f7v9 ? $2da = o5f7v9 : f7vo1(Math['max'](r3wc, $2da) + 0x1);
  }
}function L9qzaj(_n3y0, up1ge6) {
  return up1ge6['lineNumber'] = _n3y0['lineNumber'], up1ge6['columnNumber'] = _n3y0['columnNumber'], up1ge6;
}function L9_s84n$(asbd2$, s_nx8, xy0rn3, as2$, fo7v95, $k2abd) {
  for (var lf95tq, zqka = ++s_nx8, _0yx3 = L9$bk2d;;) {
    var rmy30c = asbd2$['charAt'](zqka);switch (rmy30c) {case '=':
        if (_0yx3 === L9my0c3) lf95tq = asbd2$['slice'](s_nx8, zqka), _0yx3 = L9o9e1v7;else {
          if (_0yx3 !== L9htzjl) throw new Error('attribute equal must after attrName');_0yx3 = L9o9e1v7;
        }break;case '\x27':case '\x22':
        if (_0yx3 === L9o9e1v7 || _0yx3 === L9my0c3) {
          if (_0yx3 === L9my0c3 && ($k2abd['warning']('attribute value must after "="'), lf95tq = asbd2$['slice'](s_nx8, zqka)), !(0x0 < (zqka = asbd2$['indexOf'](rmy30c, s_nx8 = zqka + 0x1)))) throw new Error('attribute value no end \'' + rmy30c + '\' match');k$2adb = asbd2$['slice'](s_nx8, zqka)['replace'](/&#?\w+;/g, fo7v95), xy0rn3['add'](lf95tq, k$2adb, s_nx8 - 0x1), _0yx3 = L9ftol5;
        } else {
          if (_0yx3 != L9d$sb28) throw new Error('attribute value must after "="');k$2adb = asbd2$['slice'](s_nx8, zqka)['replace'](/&#?\w+;/g, fo7v95), xy0rn3['add'](lf95tq, k$2adb, s_nx8), $k2abd['warning']('attribute "' + lf95tq + '" missed start quot(' + rmy30c + ')!!'), s_nx8 = zqka + 0x1, _0yx3 = L9ftol5;
        }break;case '/':
        switch (_0yx3) {case L9$bk2d:
            xy0rn3['setTagName'](asbd2$['slice'](s_nx8, zqka));case L9ftol5:case L9ltf5z:case L9hjzk:
            _0yx3 = L9hjzk, xy0rn3['closed'] = !0x0;case L9d$sb28:case L9my0c3:case L9htzjl:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $k2abd['error']('unexpected end of input'), _0yx3 == L9$bk2d && xy0rn3['setTagName'](asbd2$['slice'](s_nx8, zqka)), zqka;case '>':
        switch (_0yx3) {case L9$bk2d:
            xy0rn3['setTagName'](asbd2$['slice'](s_nx8, zqka));case L9ftol5:case L9ltf5z:case L9hjzk:
            break;case L9d$sb28:case L9my0c3:
            '/' === (k$2adb = asbd2$['slice'](s_nx8, zqka))['slice'](-0x1) && (xy0rn3['closed'] = !0x0, k$2adb = k$2adb['slice'](0x0, -0x1));case L9htzjl:
            _0yx3 === L9htzjl && (k$2adb = lf95tq), _0yx3 == L9d$sb28 ? ($k2abd['warning']('attribute "' + k$2adb + '" missed quot(")!!'), xy0rn3['add'](lf95tq, k$2adb['replace'](/&#?\w+;/g, fo7v95), s_nx8)) : ('http://www.w3.org/1999/xhtml' === as2$[''] && k$2adb['match'](/^(?:disabled|checked|selected)$/i) || $k2abd['warning']('attribute "' + k$2adb + '" missed value!! "' + k$2adb + '" instead!!'), xy0rn3['add'](k$2adb, k$2adb, s_nx8));break;case L9o9e1v7:
            throw new Error('attribute value missed!!');}return zqka;case '\u0080':
        rmy30c = '\x20';default:
        if (rmy30c <= '\x20') switch (_0yx3) {case L9$bk2d:
            xy0rn3['setTagName'](asbd2$['slice'](s_nx8, zqka)), _0yx3 = L9ltf5z;break;case L9my0c3:
            lf95tq = asbd2$['slice'](s_nx8, zqka), _0yx3 = L9htzjl;break;case L9d$sb28:
            var k$2adb = asbd2$['slice'](s_nx8, zqka)['replace'](/&#?\w+;/g, fo7v95);$k2abd['warning']('attribute "' + k$2adb + '" missed quot(")!!'), xy0rn3['add'](lf95tq, k$2adb, s_nx8);case L9ftol5:
            _0yx3 = L9ltf5z;} else switch (_0yx3) {case L9htzjl:
            xy0rn3['tagName'], 'http://www.w3.org/1999/xhtml' === as2$[''] && lf95tq['match'](/^(?:disabled|checked|selected)$/i) || $k2abd['warning']('attribute "' + lf95tq + '" missed value!! "' + lf95tq + '" instead2!!'), xy0rn3['add'](lf95tq, lf95tq, s_nx8), s_nx8 = zqka, _0yx3 = L9my0c3;break;case L9ftol5:
            $k2abd['warning']('attribute space is required"' + lf95tq + '\x22!!');case L9ltf5z:
            _0yx3 = L9my0c3, s_nx8 = zqka;break;case L9o9e1v7:
            _0yx3 = L9d$sb28, s_nx8 = zqka;break;case L9hjzk:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zqka++;
  }
}function L9q5z(ov1f9, eug16, t5lfq9) {
  for (var $s_d4 = ov1f9['tagName'], vu7eg = null, qthzlj = ov1f9['length']; qthzlj--;) {
    var mri0c = ov1f9[qthzlj],
        jzaqh = mri0c['qName'],
        n8s4_x = mri0c['value'],
        $dsb28;jzaqh = 0x0 < (ovf795 = jzaqh['indexOf'](':')) ? (p1g6ue = mri0c['prefix'] = jzaqh['slice'](0x0, ovf795), $dsb28 = jzaqh['slice'](ovf795 + 0x1), 'xmlns' === p1g6ue && $dsb28) : (p1g6ue = null, 'xmlns' === ($dsb28 = jzaqh) && ''), mri0c['localName'] = $dsb28, !0x1 !== jzaqh && (null == vu7eg && (vu7eg = {}, L9iw3m(t5lfq9, t5lfq9 = {})), t5lfq9[jzaqh] = vu7eg[jzaqh] = n8s4_x, mri0c['uri'] = 'http://www.w3.org/2000/xmlns/', eug16['startPrefixMapping'](jzaqh, n8s4_x));
  }for (qthzlj = ov1f9['length']; qthzlj--;) (p1g6ue = (mri0c = ov1f9[qthzlj])['prefix']) && ('xml' === p1g6ue && (mri0c['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== p1g6ue && (mri0c['uri'] = t5lfq9[p1g6ue || '']));var ovf795;$dsb28 = 0x0 < (ovf795 = $s_d4['indexOf'](':')) ? (p1g6ue = ov1f9['prefix'] = $s_d4['slice'](0x0, ovf795), ov1f9['localName'] = $s_d4['slice'](ovf795 + 0x1)) : (p1g6ue = null, ov1f9['localName'] = $s_d4);var o5v9f7 = ov1f9['uri'] = t5lfq9[p1g6ue || ''];if (eug16['startElement'](o5v9f7, $dsb28, $s_d4, ov1f9), !ov1f9['closed']) return ov1f9['currentNSMap'] = t5lfq9, ov1f9['localNSMap'] = vu7eg, !0x0;if (eug16['endElement'](o5v9f7, $dsb28, $s_d4), vu7eg) {
    for (var p1g6ue in vu7eg) eug16['endPrefixMapping'](p1g6ue);
  }
}function L9qhtzlj(y4xn_8, cm3r0i, r3xy0n, kjqahz, c3rm0y) {
  if (/^(?:script|textarea)$/i['test'](r3xy0n)) {
    var ajbk = y4xn_8['indexOf']('</' + r3xy0n + '>', cm3r0i),
        y4xn_8 = y4xn_8['substring'](cm3r0i + 0x1, ajbk);if (/[&<]/['test'](y4xn_8)) return (/^script$/i['test'](r3xy0n) || (y4xn_8 = y4xn_8['replace'](/&#?\w+;/g, kjqahz)), c3rm0y['characters'](y4xn_8, 0x0, y4xn_8['length']), ajbk
    );
  }return cm3r0i + 0x1;
}function L9zkabjh($sab2, vego17, $kab2d, qtf95) {
  var db2sa$ = qtf95[$kab2d];return null == db2sa$ && ((db2sa$ = $sab2['lastIndexOf']('</' + $kab2d + '>')) < vego17 && (db2sa$ = $sab2['lastIndexOf']('</' + $kab2d)), qtf95[$kab2d] = db2sa$), db2sa$ < vego17;
}function L9iw3m(o7v1e9, ov1ge7) {
  for (var n84y_ in o7v1e9) ov1ge7[n84y_] = o7v1e9[n84y_];
}function L9g61peu(vegu61, q5hz, qajzk, s_8$4d) {
  var s482d = vegu61['charAt'](q5hz + 0x2);if ('-' === s482d) return '-' !== vegu61['charAt'](q5hz + 0x3) ? -0x1 : q5hz < (mc03ry = vegu61['indexOf']('-->', q5hz + 0x4)) ? (qajzk['comment'](vegu61, q5hz + 0x4, mc03ry - q5hz - 0x4), mc03ry + 0x3) : (s_8$4d['error']('Unclosed comment'), -0x1);if ('CDATA[' == vegu61['substr'](q5hz + 0x3, 0x6)) return mc03ry = vegu61['indexOf'](']]>', q5hz + 0x9), qajzk['startCDATA'](), qajzk['characters'](vegu61, q5hz + 0x9, mc03ry - q5hz - 0x9), qajzk['endCDATA'](), mc03ry + 0x3;s482d = L9_s4x8(vegu61, q5hz), s_8$4d = s482d['length'];var mc03ry;return 0x1 < s_8$4d && /!doctype/i['test'](s482d[0x0][0x0]) ? (mc03ry = s482d[0x1][0x0], vegu61 = 0x3 < s_8$4d && /^public$/i['test'](s482d[0x2][0x0]) && s482d[0x3][0x0], q5hz = 0x4 < s_8$4d && s482d[0x4][0x0], s482d = s482d[s_8$4d - 0x1], qajzk['startDTD'](mc03ry, vegu61 && vegu61['replace'](/^(['"])(.*?)\1$/, '$2'), q5hz && q5hz['replace'](/^(['"])(.*?)\1$/, '$2')), qajzk['endDTD'](), s482d['index'] + s482d[0x0]['length']) : -0x1;
}function L9$abk2(b28d$, _nx4, qzlt5f) {
  var dk2a = b28d$['indexOf']('?>', _nx4);return dk2a && (b28d$ = b28d$['substring'](_nx4, dk2a)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (b28d$[0x0]['length'], qzlt5f['processingInstruction'](b28d$[0x1], b28d$[0x2]), dk2a + 0x2) : -0x1;
}function L9yrx03() {}function L9hjqtzl(n$4_s, f97ot5) {
  return n$4_s['__proto__'] = f97ot5, n$4_s;
}function L9_s4x8(hlzjk, _4xn8y) {
  var _ny4x8,
      kjabz = [],
      bsa2d = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bsa2d['lastIndex'] = _4xn8y, bsa2d['exec'](hlzjk); _ny4x8 = bsa2d['exec'](hlzjk);) if (kjabz['push'](_ny4x8), _ny4x8[0x1]) return kjabz;
}var L9d2$sab = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9x_04 = new RegExp('[\\-\\.0-9' + L9d2$sab['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9jdka2 = new RegExp('^' + L9d2$sab['source'] + L9x_04['source'] + '*(?::' + L9d2$sab['source'] + L9x_04['source'] + '*)?$'),
    L9$bk2d = 0x0,
    L9my0c3 = 0x1,
    L9htzjl = 0x2,
    L9o9e1v7 = 0x3,
    L9d$sb28 = 0x4,
    L9ftol5 = 0x5,
    L9ltf5z = 0x6,
    L9hjzk = 0x7;L9n84s_x['prototype'] = { 'parse': function (y0r3xn, $2dbak, kqzh) {
    var qhtljz = this['domBuilder'];qhtljz['startDocument'](), L9iw3m($2dbak, $2dbak = {}), L9jkzhb(y0r3xn, $2dbak, kqzh, qhtljz, this['errorHandler']), qhtljz['endDocument']();
  } }, L9yrx03['prototype'] = { 'setTagName': function (y_48n) {
    if (!L9jdka2['test'](y_48n)) throw new Error('invalid tagName:' + y_48n);this['tagName'] = y_48n;
  }, 'add': function (tf975o, _04x, zlqhkj) {
    if (!L9jdka2['test'](tf975o)) throw new Error('invalid attribute:' + tf975o);this[this['length']++] = { 'qName': tf975o, 'value': _04x, 'offset': zlqhkj };
  }, 'length': 0x0, 'getLocalName': function (eo19v7) {
    return this[eo19v7]['localName'];
  }, 'getLocator': function (o59v7f) {
    return this[o59v7f]['locator'];
  }, 'getQName': function (_3yxn0) {
    return this[_3yxn0]['qName'];
  }, 'getURI': function (egvu61) {
    return this[egvu61]['uri'];
  }, 'getValue': function ($48sd2) {
    return this[$48sd2]['value'];
  } }, L9hjqtzl({}, L9hjqtzl['prototype']) instanceof L9hjqtzl || (L9hjqtzl = function (r0cm, b2d$ka) {
  function jqhlzk() {}for (b2d$ka in jqhlzk['prototype'] = b2d$ka, jqhlzk = new jqhlzk(), r0cm) jqhlzk[b2d$ka] = r0cm[b2d$ka];return jqhlzk;
}), exports['XMLReader'] = L9n84s_x;