var O = wx.$c;
function hfyskb() {}function htj3i_(cevln9, t_jw3$, ybhrk, xz7q61, lec9m) {
  function qsxf1(rvl98n) {
    var l8ncv9 = rvl98n['slice'](0x1, -0x1);return l8ncv9 in ybhrk ? ybhrk[l8ncv9] : '#' === l8ncv9['charAt'](0x0) ? 0xffff < (l8ncv9 = parseInt(l8ncv9['substr'](0x1)['replace']('x', '0x'))) ? (l8ncv9 -= 0x10000, String['fromCharCode'](0xd800 + (l8ncv9 >> 0xa), 0xdc00 + (0x3ff & l8ncv9))) : String['fromCharCode'](l8ncv9) : (lec9m['error']('entity not found:' + rvl98n), rvl98n);
  }function brk(m9cle) {
    var ou052i;c9nev < m9cle && (ou052i = cevln9['substring'](c9nev, m9cle)['replace'](/&#?\w+;/g, qsxf1), v8h9a && jtiw_(c9nev), xz7q61['characters'](ou052i, 0x0, m9cle - c9nev), c9nev = m9cle);
  }function jtiw_(elm9nc, lmcen9) {
    for (; cvnl9 <= elm9nc && (lmcen9 = gjt7$z['exec'](cevln9));) g7q$1 = lmcen9['index'], cvnl9 = g7q$1 + lmcen9[0x0]['length'], v8h9a['lineNumber']++;v8h9a['columnNumber'] = elm9nc - g7q$1 + 0x1;
  }for (var g7q$1 = 0x0, cvnl9 = 0x0, gjt7$z = /.*(?:\r\n?|\n)|.*$/g, v8h9a = xz7q61['locator'], bfsykd = [{ 'currentNSMap': t_jw3$ }], yvahr = {}, c9nev = 0x0;;) {
    try {
      var h8vary = cevln9['indexOf']('<', c9nev),
          q7zj,
          ykfad;if (h8vary < 0x0) return void (cevln9['substr'](c9nev)['match'](/^\s*$/) || (ykfad = (q7zj = xz7q61['doc'])['createTextNode'](cevln9['substr'](c9nev)), q7zj['appendChild'](ykfad), xz7q61['currentElement'] = ykfad));switch (c9nev < h8vary && brk(h8vary), cevln9['charAt'](h8vary + 0x1)) {case '/':
          var lnvr9 = cevln9['indexOf']('>', h8vary + 0x3),
              cnlme = cevln9['substring'](h8vary + 0x2, lnvr9),
              ydbaf = bfsykd['pop']();lnvr9 < 0x0 ? (cnlme = cevln9['substring'](h8vary + 0x2)['replace'](/[\s<].*/, ''), lec9m['error']('end tag name: ' + cnlme + ' is not complete:' + ydbaf['tagName']), lnvr9 = h8vary + 0x1 + cnlme['length']) : cnlme['match'](/\s</) && (cnlme = cnlme['replace'](/[\s<].*/, ''), lec9m['error']('end tag name: ' + cnlme + ' maybe not complete'), lnvr9 = h8vary + 0x1 + cnlme['length']);var u24o5 = ydbaf['localNSMap'],
              _jg$t3 = ydbaf['tagName'] == cnlme;if (_jg$t3 || ydbaf['tagName'] && ydbaf['tagName']['toLowerCase']() == cnlme['toLowerCase']()) {
            if (xz7q61['endElement'](ydbaf['uri'], ydbaf['localName'], cnlme), u24o5) {
              for (var ksbf6d in u24o5) xz7q61['endPrefixMapping'](ksbf6d);
            }_jg$t3 || lec9m['fatalError']('end tag name: ' + cnlme + ' is not match the current start tagName:' + ydbaf['tagName']);
          } else bfsykd['push'](ydbaf);lnvr9++;break;case '?':
          v8h9a && jtiw_(h8vary), lnvr9 = hg$t7zj(cevln9, h8vary, xz7q61);break;case '!':
          v8h9a && jtiw_(h8vary), lnvr9 = hg$q7j(cevln9, h8vary, xz7q61, lec9m);break;default:
          v8h9a && jtiw_(h8vary);var fx1s = new hdbfs(),
              q7zx16 = bfsykd[bfsykd['length'] - 0x1]['currentNSMap'],
              lnvr9 = hbhkyr(cevln9, h8vary, fx1s, q7zx16, qsxf1, lec9m),
              q7$jg = fx1s['length'];if (!fx1s['closed'] && h$tgj7(cevln9, lnvr9, fx1s['tagName'], yvahr) && (fx1s['closed'] = !0x0, ybhrk['nbsp'] || lec9m['warning']('unclosed xml attribute')), v8h9a && q7$jg) {
            for (var _t2i3 = hyakbr(v8h9a, {}), n8c9lv = 0x0; n8c9lv < q7$jg; n8c9lv++) {
              var $j_ = fx1s[n8c9lv];jtiw_($j_['offset']), $j_['locator'] = hyakbr(v8h9a, {});
            }xz7q61['locator'] = _t2i3, haybrh(fx1s, xz7q61, q7zx16) && bfsykd['push'](fx1s), xz7q61['locator'] = v8h9a;
          } else haybrh(fx1s, xz7q61, q7zx16) && bfsykd['push'](fx1s);'http://www.w3.org/1999/xhtml' !== fx1s['uri'] || fx1s['closed'] ? lnvr9++ : lnvr9 = hya8hbr(cevln9, lnvr9, fx1s['tagName'], qsxf1, xz7q61);}
    } catch (n9c8l) {
      lec9m['error']('element parse error: ' + n9c8l), lnvr9 = -0x1;
    }c9nev < lnvr9 ? c9nev = lnvr9 : brk(Math['max'](h8vary, c9nev) + 0x1);
  }
}function hyakbr(ykabd, xs1d6f) {
  return xs1d6f['lineNumber'] = ykabd['lineNumber'], xs1d6f['columnNumber'] = ykabd['columnNumber'], xs1d6f;
}function hbhkyr(jtg3z$, hrav8y, jt$3, ksdfb6, abdyhk, $zjg3t) {
  for (var i2_w03, qx7s = ++hrav8y, dxfs1 = hqxg7;;) {
    var j7zt$ = jtg3z$['charAt'](qx7s);switch (j7zt$) {case '=':
        if (dxfs1 === hq76zx) i2_w03 = jtg3z$['slice'](hrav8y, qx7s), dxfs1 = hsdx16f;else {
          if (dxfs1 !== hln8vr) throw new Error('attribute equal must after attrName');dxfs1 = hsdx16f;
        }break;case '\x27':case '\x22':
        if (dxfs1 === hsdx16f || dxfs1 === hq76zx) {
          if (dxfs1 === hq76zx && ($zjg3t['warning']('attribute value must after "="'), i2_w03 = jtg3z$['slice'](hrav8y, qx7s)), !(0x0 < (qx7s = jtg3z$['indexOf'](j7zt$, hrav8y = qx7s + 0x1)))) throw new Error('attribute value no end \'' + j7zt$ + '\' match');r8hyba = jtg3z$['slice'](hrav8y, qx7s)['replace'](/&#?\w+;/g, abdyhk), jt$3['add'](i2_w03, r8hyba, hrav8y - 0x1), dxfs1 = h$3gtj;
        } else {
          if (dxfs1 != hf1d6x) throw new Error('attribute value must after "="');r8hyba = jtg3z$['slice'](hrav8y, qx7s)['replace'](/&#?\w+;/g, abdyhk), jt$3['add'](i2_w03, r8hyba, hrav8y), $zjg3t['warning']('attribute "' + i2_w03 + '" missed start quot(' + j7zt$ + ')!!'), hrav8y = qx7s + 0x1, dxfs1 = h$3gtj;
        }break;case '/':
        switch (dxfs1) {case hqxg7:
            jt$3['setTagName'](jtg3z$['slice'](hrav8y, qx7s));case h$3gtj:case hqsf6:case hu5i:
            dxfs1 = hu5i, jt$3['closed'] = !0x0;case hf1d6x:case hq76zx:case hln8vr:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $zjg3t['error']('unexpected end of input'), dxfs1 == hqxg7 && jt$3['setTagName'](jtg3z$['slice'](hrav8y, qx7s)), qx7s;case '>':
        switch (dxfs1) {case hqxg7:
            jt$3['setTagName'](jtg3z$['slice'](hrav8y, qx7s));case h$3gtj:case hqsf6:case hu5i:
            break;case hf1d6x:case hq76zx:
            '/' === (r8hyba = jtg3z$['slice'](hrav8y, qx7s))['slice'](-0x1) && (jt$3['closed'] = !0x0, r8hyba = r8hyba['slice'](0x0, -0x1));case hln8vr:
            dxfs1 === hln8vr && (r8hyba = i2_w03), dxfs1 == hf1d6x ? ($zjg3t['warning']('attribute "' + r8hyba + '" missed quot(")!!'), jt$3['add'](i2_w03, r8hyba['replace'](/&#?\w+;/g, abdyhk), hrav8y)) : ('http://www.w3.org/1999/xhtml' === ksdfb6[''] && r8hyba['match'](/^(?:disabled|checked|selected)$/i) || $zjg3t['warning']('attribute "' + r8hyba + '" missed value!! "' + r8hyba + '" instead!!'), jt$3['add'](r8hyba, r8hyba, hrav8y));break;case hsdx16f:
            throw new Error('attribute value missed!!');}return qx7s;case '\u0080':
        j7zt$ = '\x20';default:
        if (j7zt$ <= '\x20') switch (dxfs1) {case hqxg7:
            jt$3['setTagName'](jtg3z$['slice'](hrav8y, qx7s)), dxfs1 = hqsf6;break;case hq76zx:
            i2_w03 = jtg3z$['slice'](hrav8y, qx7s), dxfs1 = hln8vr;break;case hf1d6x:
            var r8hyba = jtg3z$['slice'](hrav8y, qx7s)['replace'](/&#?\w+;/g, abdyhk);$zjg3t['warning']('attribute "' + r8hyba + '" missed quot(")!!'), jt$3['add'](i2_w03, r8hyba, hrav8y);case h$3gtj:
            dxfs1 = hqsf6;} else switch (dxfs1) {case hln8vr:
            jt$3['tagName'], 'http://www.w3.org/1999/xhtml' === ksdfb6[''] && i2_w03['match'](/^(?:disabled|checked|selected)$/i) || $zjg3t['warning']('attribute "' + i2_w03 + '" missed value!! "' + i2_w03 + '" instead2!!'), jt$3['add'](i2_w03, i2_w03, hrav8y), hrav8y = qx7s, dxfs1 = hq76zx;break;case h$3gtj:
            $zjg3t['warning']('attribute space is required"' + i2_w03 + '\x22!!');case hqsf6:
            dxfs1 = hq76zx, hrav8y = qx7s;break;case hsdx16f:
            dxfs1 = hf1d6x, hrav8y = qx7s;break;case hu5i:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}qx7s++;
  }
}function haybrh(s76qx1, xd6fs, hydbak) {
  for (var _g$j = s76qx1['tagName'], y8rab = null, bay = s76qx1['length']; bay--;) {
    var w3$t_ = s76qx1[bay],
        ahrv98 = w3$t_['qName'],
        q$7gz1 = w3$t_['value'],
        akdbfy;ahrv98 = 0x0 < ($3_tjg = ahrv98['indexOf'](':')) ? (dksbf = w3$t_['prefix'] = ahrv98['slice'](0x0, $3_tjg), akdbfy = ahrv98['slice']($3_tjg + 0x1), 'xmlns' === dksbf && akdbfy) : (dksbf = null, 'xmlns' === (akdbfy = ahrv98) && ''), w3$t_['localName'] = akdbfy, !0x1 !== ahrv98 && (null == y8rab && (y8rab = {}, hi32w0(hydbak, hydbak = {})), hydbak[ahrv98] = y8rab[ahrv98] = q$7gz1, w3$t_['uri'] = 'http://www.w3.org/2000/xmlns/', xd6fs['startPrefixMapping'](ahrv98, q$7gz1));
  }for (bay = s76qx1['length']; bay--;) (dksbf = (w3$t_ = s76qx1[bay])['prefix']) && ('xml' === dksbf && (w3$t_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== dksbf && (w3$t_['uri'] = hydbak[dksbf || '']));var $3_tjg;akdbfy = 0x0 < ($3_tjg = _g$j['indexOf'](':')) ? (dksbf = s76qx1['prefix'] = _g$j['slice'](0x0, $3_tjg), s76qx1['localName'] = _g$j['slice']($3_tjg + 0x1)) : (dksbf = null, s76qx1['localName'] = _g$j);var lcenm = s76qx1['uri'] = hydbak[dksbf || ''];if (xd6fs['startElement'](lcenm, akdbfy, _g$j, s76qx1), !s76qx1['closed']) return s76qx1['currentNSMap'] = hydbak, s76qx1['localNSMap'] = y8rab, !0x0;if (xd6fs['endElement'](lcenm, akdbfy, _g$j), y8rab) {
    for (var dksbf in y8rab) xd6fs['endPrefixMapping'](dksbf);
  }
}function hya8hbr($jgz7, haryb, _3twj$, adkfby, y8vr) {
  if (/^(?:script|textarea)$/i['test'](_3twj$)) {
    var gjzq$7 = $jgz7['indexOf']('</' + _3twj$ + '>', haryb),
        $jgz7 = $jgz7['substring'](haryb + 0x1, gjzq$7);if (/[&<]/['test']($jgz7)) return (/^script$/i['test'](_3twj$) || ($jgz7 = $jgz7['replace'](/&#?\w+;/g, adkfby)), y8vr['characters']($jgz7, 0x0, $jgz7['length']), gjzq$7
    );
  }return haryb + 0x1;
}function h$tgj7(f6sqx1, sbk6d, sd1x, q61sxf) {
  var _wit2 = q61sxf[sd1x];return null == _wit2 && ((_wit2 = f6sqx1['lastIndexOf']('</' + sd1x + '>')) < sbk6d && (_wit2 = f6sqx1['lastIndexOf']('</' + sd1x)), q61sxf[sd1x] = _wit2), _wit2 < sbk6d;
}function hi32w0(n89rvl, jzqg) {
  for (var rv8hay in n89rvl) jzqg[rv8hay] = n89rvl[rv8hay];
}function hg$q7j(cv9ln, u0o52i, vrh98l, y8ahb) {
  var wij_3 = cv9ln['charAt'](u0o52i + 0x2);if ('-' === wij_3) return '-' !== cv9ln['charAt'](u0o52i + 0x3) ? -0x1 : u0o52i < (_3tj = cv9ln['indexOf']('-->', u0o52i + 0x4)) ? (vrh98l['comment'](cv9ln, u0o52i + 0x4, _3tj - u0o52i - 0x4), _3tj + 0x3) : (y8ahb['error']('Unclosed comment'), -0x1);if ('CDATA[' == cv9ln['substr'](u0o52i + 0x3, 0x6)) {
    var _3tj = cv9ln['indexOf'](']]>', u0o52i + 0x9);return vrh98l['startCDATA'](), vrh98l['characters'](cv9ln, u0o52i + 0x9, _3tj - u0o52i - 0x9), vrh98l['endCDATA'](), _3tj + 0x3;
  }wij_3 = hztg$3j(cv9ln, u0o52i), y8ahb = wij_3['length'];if (0x1 < y8ahb && /!doctype/i['test'](wij_3[0x0][0x0])) return _3tj = wij_3[0x1][0x0], cv9ln = 0x3 < y8ahb && /^public$/i['test'](wij_3[0x2][0x0]) && wij_3[0x3][0x0], u0o52i = 0x4 < y8ahb && wij_3[0x4][0x0], y8ahb = wij_3[y8ahb - 0x1], (vrh98l['startDTD'](_3tj, cv9ln && cv9ln['replace'](/^(['"])(.*?)\1$/, '$2'), u0o52i && u0o52i['replace'](/^(['"])(.*?)\1$/, '$2')), vrh98l['endDTD'](), y8ahb['index'] + y8ahb[0x0]['length']);return -0x1;
}function hg$t7zj($jt_w, fkd6b, $jtgz7) {
  var gz3$jt = $jt_w['indexOf']('?>', fkd6b);if (gz3$jt) return fkd6b = $jt_w['substring'](fkd6b, gz3$jt)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), fkd6b ? (fkd6b[0x0]['length'], $jtgz7['processingInstruction'](fkd6b[0x1], fkd6b[0x2]), gz3$jt + 0x2) : -0x1;return -0x1;
}function hdbfs() {}function hi50o2(z$jgt3, skbyd) {
  return z$jgt3['__proto__'] = skbyd, z$jgt3;
}function hztg$3j(dabkf, cl98v) {
  var ui25o0,
      rh9lv8 = [],
      kfd6x = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kfd6x['lastIndex'] = cl98v, kfd6x['exec'](dabkf); ui25o0 = kfd6x['exec'](dabkf);) if (rh9lv8['push'](ui25o0), ui25o0[0x1]) return rh9lv8;
}var hby8hra = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    hs1fxq = new RegExp('[\\-\\.0-9' + hby8hra['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    htij_w = new RegExp('^' + hby8hra['source'] + hs1fxq['source'] + '*(?::' + hby8hra['source'] + hs1fxq['source'] + '*)?$'),
    hqxg7 = 0x0,
    hq76zx = 0x1,
    hln8vr = 0x2,
    hsdx16f = 0x3,
    hf1d6x = 0x4,
    h$3gtj = 0x5,
    hqsf6 = 0x6,
    hu5i = 0x7;hfyskb['prototype'] = { 'parse': function (tg3j, vhr8ya, dykha) {
    var yadbh = this['domBuilder'];yadbh['startDocument'](), hi32w0(vhr8ya, vhr8ya = {}), htj3i_(tg3j, vhr8ya, dykha, yadbh, this['errorHandler']), yadbh['endDocument']();
  } }, hdbfs['prototype'] = { 'setTagName': function (q617zx) {
    if (!htij_w['test'](q617zx)) throw new Error('invalid tagName:' + q617zx);this['tagName'] = q617zx;
  }, 'add': function (rbyahk, fysbd, jgz$q) {
    if (!htij_w['test'](rbyahk)) throw new Error('invalid attribute:' + rbyahk);this[this['length']++] = { 'qName': rbyahk, 'value': fysbd, 'offset': jgz$q };
  }, 'length': 0x0, 'getLocalName': function (i_302) {
    return this[i_302]['localName'];
  }, 'getLocator': function (fksxd6) {
    return this[fksxd6]['locator'];
  }, 'getQName': function (byfdk) {
    return this[byfdk]['qName'];
  }, 'getURI': function (c89nv) {
    return this[c89nv]['uri'];
  }, 'getValue': function (elcv9) {
    return this[elcv9]['value'];
  } }, hi50o2({}, hi50o2['prototype']) instanceof hi50o2 || (hi50o2 = function (bsfdk, $3jtz) {
  function wi_02u() {}for ($3jtz in wi_02u['prototype'] = $3jtz, wi_02u = new wi_02u(), bsfdk) wi_02u[$3jtz] = bsfdk[$3jtz];return wi_02u;
}), exports['XMLReader'] = hfyskb;