var B = wx.$B;
function Bhgsun() {}function Bkv4b(zk9b64, e2giap, iu2eg, $qx_t, sh7nug) {
  function lvy4$0(yx0vt$) {
    if (yx0vt$ > 0xffff) {
      yx0vt$ -= 0x10000;var lvy04$ = 0xd800 + (yx0vt$ >> 0xa),
          ylzbv = 0xdc00 + (0x3ff & yx0vt$);return String['fromCharCode'](lvy04$, ylzbv);
    }return String['fromCharCode'](yx0vt$);
  }function $vyt(shn7u6) {
    var dx = shn7u6['slice'](0x1, -0x1);return dx in iu2eg ? iu2eg[dx] : '#' === dx['charAt'](0x0) ? lvy4$0(parseInt(dx['substr'](0x1)['replace']('x', '0x'))) : (sh7nug['error']('entity not found:' + shn7u6), shn7u6);
  }function ro1m(j5r8f) {
    if (j5r8f > apgie) {
      var w8r5f = zk9b64['substring'](apgie, j5r8f)['replace'](/&#?\w+;/g, $vyt);p2eug && ug7s(apgie), $qx_t['characters'](w8r5f, 0x0, j5r8f - apgie), apgie = j5r8f;
    }
  }function ug7s(l4kzb, w2eaip) {
    for (; l4kzb >= t_q$xd && (w2eaip = x0$_d['exec'](zk9b64));) n7h96s = w2eaip['index'], t_q$xd = n7h96s + w2eaip[0x0]['length'], p2eug['lineNumber']++;p2eug['columnNumber'] = l4kzb - n7h96s + 0x1;
  }for (var n7h96s = 0x0, t_q$xd = 0x0, x0$_d = /.*(?:\r\n?|\n)|.*$/g, p2eug = $qx_t['locator'], iawe23 = [{ 'currentNSMap': e2giap }], aeg2i = {}, apgie = 0x0;;) {
    try {
      var u7gs = zk9b64['indexOf']('<', apgie);if (0x0 > u7gs) {
        if (!zk9b64['substr'](apgie)['match'](/^\s*$/)) {
          var _yx0t = $qx_t['doc'],
              $xdq = _yx0t['createTextNode'](zk9b64['substr'](apgie));_yx0t['appendChild']($xdq), $qx_t['currentElement'] = $xdq;
        }return;
      }switch (u7gs > apgie && ro1m(u7gs), zk9b64['charAt'](u7gs + 0x1)) {case '/':
          var $tyv0l = zk9b64['indexOf']('>', u7gs + 0x3),
              yxvt$ = zk9b64['substring'](u7gs + 0x2, $tyv0l),
              gi2epa = iawe23['pop']();0x0 > $tyv0l ? (yxvt$ = zk9b64['substring'](u7gs + 0x2)['replace'](/[\s<].*/, ''), sh7nug['error']('end tag name: ' + yxvt$ + ' is not complete:' + gi2epa['tagName']), $tyv0l = u7gs + 0x1 + yxvt$['length']) : yxvt$['match'](/\s</) && (yxvt$ = yxvt$['replace'](/[\s<].*/, ''), sh7nug['error']('end tag name: ' + yxvt$ + ' maybe not complete'), $tyv0l = u7gs + 0x1 + yxvt$['length']);var rf = gi2epa['localNSMap'],
              hkb9z6 = gi2epa['tagName'] == yxvt$,
              uepngi = hkb9z6 || gi2epa['tagName'] && gi2epa['tagName']['toLowerCase']() == yxvt$['toLowerCase']();if (uepngi) {
            if ($qx_t['endElement'](gi2epa['uri'], gi2epa['localName'], yxvt$), rf) {
              for (var ugp2ie in rf) $qx_t['endPrefixMapping'](ugp2ie);
            }hkb9z6 || sh7nug['fatalError']('end tag name: ' + yxvt$ + ' is not match the current start tagName:' + gi2epa['tagName']);
          } else iawe23['push'](gi2epa);$tyv0l++;break;case '?':
          p2eug && ug7s(u7gs), $tyv0l = Bd$_x0t(zk9b64, u7gs, $qx_t);break;case '!':
          p2eug && ug7s(u7gs), $tyv0l = Bueing(zk9b64, u7gs, $qx_t, sh7nug);break;default:
          p2eug && ug7s(u7gs);var y4bv = new Bsp7ugn(),
              i8w23a = iawe23[iawe23['length'] - 0x1]['currentNSMap'],
              $tyv0l = Bnsgh7(zk9b64, u7gs, y4bv, i8w23a, $vyt, sh7nug),
              husn67 = y4bv['length'];if (!y4bv['closed'] && Bnu7hgs(zk9b64, $tyv0l, y4bv['tagName'], aeg2i) && (y4bv['closed'] = !0x0, iu2eg['nbsp'] || sh7nug['warning']('unclosed xml attribute')), p2eug && husn67) {
            for (var kvz4lb = Bnpg7u(p2eug, {}), b69hz = 0x0; husn67 > b69hz; b69hz++) {
              var y_0$xt = y4bv[b69hz];ug7s(y_0$xt['offset']), y_0$xt['locator'] = Bnpg7u(p2eug, {});
            }$qx_t['locator'] = kvz4lb, Biup(y4bv, $qx_t, i8w23a) && iawe23['push'](y4bv), $qx_t['locator'] = p2eug;
          } else Biup(y4bv, $qx_t, i8w23a) && iawe23['push'](y4bv);'http://www.w3.org/1999/xhtml' !== y4bv['uri'] || y4bv['closed'] ? $tyv0l++ : $tyv0l = Bw2peia(zk9b64, $tyv0l, y4bv['tagName'], $vyt, $qx_t);}
    } catch (h9b76) {
      sh7nug['error']('element parse error: ' + h9b76), $tyv0l = -0x1;
    }$tyv0l > apgie ? apgie = $tyv0l : ro1m(Math['max'](u7gs, apgie) + 0x1);
  }
}function Bnpg7u(rw8f3, l4yv) {
  return l4yv['lineNumber'] = rw8f3['lineNumber'], l4yv['columnNumber'] = rw8f3['columnNumber'], l4yv;
}function Bnsgh7(mr51o, nps7ug, awie23, yvbzl4, ei2agp, sh67) {
  for (var fa3wr, f3j8r5, i2apew = ++nps7ug, jr385 = Bblz4kv;;) {
    var k79sh = mr51o['charAt'](i2apew);switch (k79sh) {case '=':
        if (jr385 === Bf3arw8) fa3wr = mr51o['slice'](nps7ug, i2apew), jr385 = B$0yvt;else {
          if (jr385 !== Br1jf58) throw new Error('attribute equal must after attrName');jr385 = B$0yvt;
        }break;case '\x27':case '\x22':
        if (jr385 === B$0yvt || jr385 === Bf3arw8) {
          if (jr385 === Bf3arw8 && (sh67['warning']('attribute value must after "="'), fa3wr = mr51o['slice'](nps7ug, i2apew)), nps7ug = i2apew + 0x1, i2apew = mr51o['indexOf'](k79sh, nps7ug), !(i2apew > 0x0)) throw new Error('attribute value no end \'' + k79sh + '\' match');f3j8r5 = mr51o['slice'](nps7ug, i2apew)['replace'](/&#?\w+;/g, ei2agp), awie23['add'](fa3wr, f3j8r5, nps7ug - 0x1), jr385 = Bsgpu;
        } else {
          if (jr385 != Byvz0) throw new Error('attribute value must after "="');f3j8r5 = mr51o['slice'](nps7ug, i2apew)['replace'](/&#?\w+;/g, ei2agp), awie23['add'](fa3wr, f3j8r5, nps7ug), sh67['warning']('attribute "' + fa3wr + '" missed start quot(' + k79sh + ')!!'), nps7ug = i2apew + 0x1, jr385 = Bsgpu;
        }break;case '/':
        switch (jr385) {case Bblz4kv:
            awie23['setTagName'](mr51o['slice'](nps7ug, i2apew));case Bsgpu:case Bzb4vlk:case Bzbkl4:
            jr385 = Bzbkl4, awie23['closed'] = !0x0;case Byvz0:case Bf3arw8:case Br1jf58:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return sh67['error']('unexpected end of input'), jr385 == Bblz4kv && awie23['setTagName'](mr51o['slice'](nps7ug, i2apew)), i2apew;case '>':
        switch (jr385) {case Bblz4kv:
            awie23['setTagName'](mr51o['slice'](nps7ug, i2apew));case Bsgpu:case Bzb4vlk:case Bzbkl4:
            break;case Byvz0:case Bf3arw8:
            f3j8r5 = mr51o['slice'](nps7ug, i2apew), '/' === f3j8r5['slice'](-0x1) && (awie23['closed'] = !0x0, f3j8r5 = f3j8r5['slice'](0x0, -0x1));case Br1jf58:
            jr385 === Br1jf58 && (f3j8r5 = fa3wr), jr385 == Byvz0 ? (sh67['warning']('attribute "' + f3j8r5 + '" missed quot(")!!'), awie23['add'](fa3wr, f3j8r5['replace'](/&#?\w+;/g, ei2agp), nps7ug)) : ('http://www.w3.org/1999/xhtml' === yvbzl4[''] && f3j8r5['match'](/^(?:disabled|checked|selected)$/i) || sh67['warning']('attribute "' + f3j8r5 + '" missed value!! "' + f3j8r5 + '" instead!!'), awie23['add'](f3j8r5, f3j8r5, nps7ug));break;case B$0yvt:
            throw new Error('attribute value missed!!');}return i2apew;case '\u0080':
        k79sh = '\x20';default:
        if ('\x20' >= k79sh) switch (jr385) {case Bblz4kv:
            awie23['setTagName'](mr51o['slice'](nps7ug, i2apew)), jr385 = Bzb4vlk;break;case Bf3arw8:
            fa3wr = mr51o['slice'](nps7ug, i2apew), jr385 = Br1jf58;break;case Byvz0:
            var f3j8r5 = mr51o['slice'](nps7ug, i2apew)['replace'](/&#?\w+;/g, ei2agp);sh67['warning']('attribute "' + f3j8r5 + '" missed quot(")!!'), awie23['add'](fa3wr, f3j8r5, nps7ug);case Bsgpu:
            jr385 = Bzb4vlk;} else switch (jr385) {case Br1jf58:
            {
              awie23['tagName'];
            }'http://www.w3.org/1999/xhtml' === yvbzl4[''] && fa3wr['match'](/^(?:disabled|checked|selected)$/i) || sh67['warning']('attribute "' + fa3wr + '" missed value!! "' + fa3wr + '" instead2!!'), awie23['add'](fa3wr, fa3wr, nps7ug), nps7ug = i2apew, jr385 = Bf3arw8;break;case Bsgpu:
            sh67['warning']('attribute space is required"' + fa3wr + '\x22!!');case Bzb4vlk:
            jr385 = Bf3arw8, nps7ug = i2apew;break;case B$0yvt:
            jr385 = Byvz0, nps7ug = i2apew;break;case Bzbkl4:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}i2apew++;
  }
}function Biup(usng7h, bz4lvy, blzk) {
  for (var $_0 = usng7h['tagName'], aewi32 = null, weia32 = usng7h['length']; weia32--;) {
    var f1jr5m = usng7h[weia32],
        u67hs = f1jr5m['qName'],
        eug2pi = f1jr5m['value'],
        _0x = u67hs['indexOf'](':');if (_0x > 0x0) var we32ia = f1jr5m['prefix'] = u67hs['slice'](0x0, _0x),
        lbkz4 = u67hs['slice'](_0x + 0x1),
        w3ra = 'xmlns' === we32ia && lbkz4;else lbkz4 = u67hs, we32ia = null, w3ra = 'xmlns' === u67hs && '';f1jr5m['localName'] = lbkz4, w3ra !== !0x1 && (null == aewi32 && (aewi32 = {}, Bi3w28a(blzk, blzk = {})), blzk[w3ra] = aewi32[w3ra] = eug2pi, f1jr5m['uri'] = 'http://www.w3.org/2000/xmlns/', bz4lvy['startPrefixMapping'](w3ra, eug2pi));
  }for (var weia32 = usng7h['length']; weia32--;) {
    f1jr5m = usng7h[weia32];var we32ia = f1jr5m['prefix'];we32ia && ('xml' === we32ia && (f1jr5m['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== we32ia && (f1jr5m['uri'] = blzk[we32ia || '']));
  }var _0x = $_0['indexOf'](':');_0x > 0x0 ? (we32ia = usng7h['prefix'] = $_0['slice'](0x0, _0x), lbkz4 = usng7h['localName'] = $_0['slice'](_0x + 0x1)) : (we32ia = null, lbkz4 = usng7h['localName'] = $_0);var y$04 = usng7h['uri'] = blzk[we32ia || ''];if (bz4lvy['startElement'](y$04, lbkz4, $_0, usng7h), !usng7h['closed']) return usng7h['currentNSMap'] = blzk, usng7h['localNSMap'] = aewi32, !0x0;if (bz4lvy['endElement'](y$04, lbkz4, $_0), aewi32) {
    for (we32ia in aewi32) bz4lvy['endPrefixMapping'](we32ia);
  }
}function Bw2peia(j8f51, einup, wa38r, afw823, pugesn) {
  if (/^(?:script|textarea)$/i['test'](wa38r)) {
    var h96zkb = j8f51['indexOf']('</' + wa38r + '>', einup),
        hsun7g = j8f51['substring'](einup + 0x1, h96zkb);if (/[&<]/['test'](hsun7g)) return (/^script$/i['test'](wa38r) ? (pugesn['characters'](hsun7g, 0x0, hsun7g['length']), h96zkb) : (hsun7g = hsun7g['replace'](/&#?\w+;/g, afw823), pugesn['characters'](hsun7g, 0x0, hsun7g['length']), h96zkb)
    );
  }return einup + 0x1;
}function Bnu7hgs(j8rf1, pea2i, vbzl4y, $l4y0v) {
  var sh7k69 = $l4y0v[vbzl4y];return null == sh7k69 && (sh7k69 = j8rf1['lastIndexOf']('</' + vbzl4y + '>'), pea2i > sh7k69 && (sh7k69 = j8rf1['lastIndexOf']('</' + vbzl4y)), $l4y0v[vbzl4y] = sh7k69), pea2i > sh7k69;
}function Bi3w28a(p2egai, epsu) {
  for (var ug7h in p2egai) epsu[ug7h] = p2egai[ug7h];
}function Bueing(u67nh, m15roj, x_tq$, awf238) {
  var hks96 = u67nh['charAt'](m15roj + 0x2);switch (hks96) {case '-':
      if ('-' === u67nh['charAt'](m15roj + 0x3)) {
        var eusngp = u67nh['indexOf']('-->', m15roj + 0x4);return eusngp > m15roj ? (x_tq$['comment'](u67nh, m15roj + 0x4, eusngp - m15roj - 0x4), eusngp + 0x3) : (awf238['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == u67nh['substr'](m15roj + 0x3, 0x6)) {
        var eusngp = u67nh['indexOf'](']]>', m15roj + 0x9);return x_tq$['startCDATA'](), x_tq$['characters'](u67nh, m15roj + 0x9, eusngp - m15roj - 0x9), x_tq$['endCDATA'](), eusngp + 0x3;
      }var wfr583 = Ba3ei2w(u67nh, m15roj),
          e3ai2w = wfr583['length'];if (e3ai2w > 0x1 && /!doctype/i['test'](wfr583[0x0][0x0])) {
        var yv04 = wfr583[0x1][0x0],
            vl = e3ai2w > 0x3 && /^public$/i['test'](wfr583[0x2][0x0]) && wfr583[0x3][0x0],
            pnuegi = e3ai2w > 0x4 && wfr583[0x4][0x0],
            ly40v = wfr583[e3ai2w - 0x1];return x_tq$['startDTD'](yv04, vl && vl['replace'](/^(['"])(.*?)\1$/, '$2'), pnuegi && pnuegi['replace'](/^(['"])(.*?)\1$/, '$2')), x_tq$['endDTD'](), ly40v['index'] + ly40v[0x0]['length'];
      }}return -0x1;
}function Bd$_x0t(h76s9, tx$0vy, w853rf) {
  var nigp = h76s9['indexOf']('?>', tx$0vy);if (nigp) {
    var zb946k = h76s9['substring'](tx$0vy, nigp)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (zb946k) {
      {
        zb946k[0x0]['length'];
      }return w853rf['processingInstruction'](zb946k[0x1], zb946k[0x2]), nigp + 0x2;
    }return -0x1;
  }return -0x1;
}function Bsp7ugn() {}function Bs7uh6n(yv$tl0, y4zv0l) {
  return yv$tl0['__proto__'] = y4zv0l, yv$tl0;
}function Ba3ei2w(k7h9, ieg2p) {
  var pgine,
      vlz4b = [],
      gnpiu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (gnpiu['lastIndex'] = ieg2p, gnpiu['exec'](k7h9); pgine = gnpiu['exec'](k7h9);) if (vlz4b['push'](pgine), pgine[0x1]) return vlz4b;
}var Bo5mjr = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Bw3ai2 = new RegExp('[\\-\\.0-9' + Bo5mjr['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Bup7sgn = new RegExp('^' + Bo5mjr['source'] + Bw3ai2['source'] + '*(?::' + Bo5mjr['source'] + Bw3ai2['source'] + '*)?$'),
    Bblz4kv = 0x0,
    Bf3arw8 = 0x1,
    Br1jf58 = 0x2,
    B$0yvt = 0x3,
    Byvz0 = 0x4,
    Bsgpu = 0x5,
    Bzb4vlk = 0x6,
    Bzbkl4 = 0x7;Bhgsun['prototype'] = { 'parse': function (pgsue, guiepn, w32i) {
    var r51mj = this['domBuilder'];r51mj['startDocument'](), Bi3w28a(guiepn, guiepn = {}), Bkv4b(pgsue, guiepn, w32i, r51mj, this['errorHandler']), r51mj['endDocument']();
  } }, Bsp7ugn['prototype'] = { 'setTagName': function (wi32a8) {
    if (!Bup7sgn['test'](wi32a8)) throw new Error('invalid tagName:' + wi32a8);this['tagName'] = wi32a8;
  }, 'add': function (bzk9l, xt_$d0, y$_t) {
    if (!Bup7sgn['test'](bzk9l)) throw new Error('invalid attribute:' + bzk9l);this[this['length']++] = { 'qName': bzk9l, 'value': xt_$d0, 'offset': y$_t };
  }, 'length': 0x0, 'getLocalName': function ($xyt_0) {
    return this[$xyt_0]['localName'];
  }, 'getLocator': function (a823w) {
    return this[a823w]['locator'];
  }, 'getQName': function (k76b9h) {
    return this[k76b9h]['qName'];
  }, 'getURI': function (pgus7) {
    return this[pgus7]['uri'];
  }, 'getValue': function (ushg7n) {
    return this[ushg7n]['value'];
  } }, Bs7uh6n({}, Bs7uh6n['prototype']) instanceof Bs7uh6n || (Bs7uh6n = function (i2agep, bl4zk9) {
  function bl4vzy() {}bl4vzy['prototype'] = bl4zk9, bl4vzy = new bl4vzy();for (bl4zk9 in i2agep) bl4vzy[bl4zk9] = i2agep[bl4zk9];return bl4vzy;
}), exports['XMLReader'] = Bhgsun;