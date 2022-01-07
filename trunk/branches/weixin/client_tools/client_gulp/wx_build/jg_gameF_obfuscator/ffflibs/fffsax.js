var k = wx.$f;
function f_qhk50() {}function fexzrn8(xsnwde, q5hk_, mbtvfi, $pya37, y3$7r) {
  function vfmib(himtbf) {
    if (himtbf > 0xffff) {
      himtbf -= 0x10000;var iub1v9 = 0xd800 + (himtbf >> 0xa),
          v19gu = 0xdc00 + (0x3ff & himtbf);return String['fromCharCode'](iub1v9, v19gu);
    }return String['fromCharCode'](himtbf);
  }function nesx(r$7ya3) {
    var nz8exr = r$7ya3['slice'](0x1, -0x1);return nz8exr in mbtvfi ? mbtvfi[nz8exr] : '#' === nz8exr['charAt'](0x0) ? vfmib(parseInt(nz8exr['substr'](0x1)['replace']('x', '0x'))) : (y3$7r['error']('entity not found:' + r$7ya3), r$7ya3);
  }function y$7p(jnsdc) {
    if (jnsdc > k_50q4) {
      var wexz8 = xsnwde['substring'](k_50q4, jnsdc)['replace'](/&#?\w+;/g, nesx);snwjx && bmv1i(k_50q4), $pya37['characters'](wexz8, 0x0, jnsdc - k_50q4), k_50q4 = jnsdc;
    }
  }function bmv1i(yr73a, odjscw) {
    for (; yr73a >= j6os && (odjscw = sdco6['exec'](xsnwde));) wenz8 = odjscw['index'], j6os = wenz8 + odjscw[0x0]['length'], snwjx['lineNumber']++;snwjx['columnNumber'] = yr73a - wenz8 + 0x1;
  }for (var wenz8 = 0x0, j6os = 0x0, sdco6 = /.*(?:\r\n?|\n)|.*$/g, snwjx = $pya37['locator'], yp7$a3 = [{ 'currentNSMap': q5hk_ }], btivm = {}, k_50q4 = 0x0;;) {
    try {
      var tk5hq = xsnwde['indexOf']('<', k_50q4);if (0x0 > tk5hq) {
        if (!xsnwde['substr'](k_50q4)['match'](/^\s*$/)) {
          var th0k5 = $pya37['doc'],
              n8xwz = th0k5['createTextNode'](xsnwde['substr'](k_50q4));th0k5['appendChild'](n8xwz), $pya37['currentElement'] = n8xwz;
        }return;
      }switch (tk5hq > k_50q4 && y$7p(tk5hq), xsnwde['charAt'](tk5hq + 0x1)) {case '/':
          var hfmib = xsnwde['indexOf']('>', tk5hq + 0x3),
              esz = xsnwde['substring'](tk5hq + 0x2, hfmib),
              dwjos = yp7$a3['pop']();0x0 > hfmib ? (esz = xsnwde['substring'](tk5hq + 0x2)['replace'](/[\s<].*/, ''), y3$7r['error']('end tag name: ' + esz + ' is not complete:' + dwjos['tagName']), hfmib = tk5hq + 0x1 + esz['length']) : esz['match'](/\s</) && (esz = esz['replace'](/[\s<].*/, ''), y3$7r['error']('end tag name: ' + esz + ' maybe not complete'), hfmib = tk5hq + 0x1 + esz['length']);var cj26do = dwjos['localNSMap'],
              nxwdse = dwjos['tagName'] == esz,
              oj2cd = nxwdse || dwjos['tagName'] && dwjos['tagName']['toLowerCase']() == esz['toLowerCase']();if (oj2cd) {
            if ($pya37['endElement'](dwjos['uri'], dwjos['localName'], esz), cj26do) {
              for (var ok624 in cj26do) $pya37['endPrefixMapping'](ok624);
            }nxwdse || y3$7r['fatalError']('end tag name: ' + esz + ' is not match the current start tagName:' + dwjos['tagName']);
          } else yp7$a3['push'](dwjos);hfmib++;break;case '?':
          snwjx && bmv1i(tk5hq), hfmib = fbuvf(xsnwde, tk5hq, $pya37);break;case '!':
          snwjx && bmv1i(tk5hq), hfmib = fvbfium(xsnwde, tk5hq, $pya37, y3$7r);break;default:
          snwjx && bmv1i(tk5hq);var $z7r8e = new fq5h0(),
              exn8zw = yp7$a3[yp7$a3['length'] - 0x1]['currentNSMap'],
              hfmib = f_4kq52(xsnwde, tk5hq, $z7r8e, exn8zw, nesx, y3$7r),
              _2q5 = $z7r8e['length'];if (!$z7r8e['closed'] && fv9ug(xsnwde, hfmib, $z7r8e['tagName'], btivm) && ($z7r8e['closed'] = !0x0, mbtvfi['nbsp'] || y3$7r['warning']('unclosed xml attribute')), snwjx && _2q5) {
            for (var q0fhmt = fr7exz8(snwjx, {}), bi1muv = 0x0; _2q5 > bi1muv; bi1muv++) {
              var vmbti = $z7r8e[bi1muv];bmv1i(vmbti['offset']), vmbti['locator'] = fr7exz8(snwjx, {});
            }$pya37['locator'] = q0fhmt, fnezw($z7r8e, $pya37, exn8zw) && yp7$a3['push']($z7r8e), $pya37['locator'] = snwjx;
          } else fnezw($z7r8e, $pya37, exn8zw) && yp7$a3['push']($z7r8e);'http://www.w3.org/1999/xhtml' !== $z7r8e['uri'] || $z7r8e['closed'] ? hfmib++ : hfmib = fxdjsn(xsnwde, hfmib, $z7r8e['tagName'], nesx, $pya37);}
    } catch (ko42_6) {
      y3$7r['error']('element parse error: ' + ko42_6), hfmib = -0x1;
    }hfmib > k_50q4 ? k_50q4 = hfmib : y$7p(Math['max'](tk5hq, k_50q4) + 0x1);
  }
}function fr7exz8(rze8x, dcwjsn) {
  return dcwjsn['lineNumber'] = rze8x['lineNumber'], dcwjsn['columnNumber'] = rze8x['columnNumber'], dcwjsn;
}function f_4kq52(ocjdws, e7xz, z7rx8, $r3a7, tmbh, fmiht) {
  for (var c26jd, sjwdoc, o_24c = ++e7xz, co62d = fimvfb;;) {
    var ncd = ocjdws['charAt'](o_24c);switch (ncd) {case '=':
        if (co62d === fu19ibv) c26jd = ocjdws['slice'](e7xz, o_24c), co62d = fcdows;else {
          if (co62d !== fq0_45) throw new Error('attribute equal must after attrName');co62d = fcdows;
        }break;case '\x27':case '\x22':
        if (co62d === fcdows || co62d === fu19ibv) {
          if (co62d === fu19ibv && (fmiht['warning']('attribute value must after "="'), c26jd = ocjdws['slice'](e7xz, o_24c)), e7xz = o_24c + 0x1, o_24c = ocjdws['indexOf'](ncd, e7xz), !(o_24c > 0x0)) throw new Error('attribute value no end \'' + ncd + '\' match');sjwdoc = ocjdws['slice'](e7xz, o_24c)['replace'](/&#?\w+;/g, tmbh), z7rx8['add'](c26jd, sjwdoc, e7xz - 0x1), co62d = fnwesd;
        } else {
          if (co62d != fwsodcj) throw new Error('attribute value must after "="');sjwdoc = ocjdws['slice'](e7xz, o_24c)['replace'](/&#?\w+;/g, tmbh), z7rx8['add'](c26jd, sjwdoc, e7xz), fmiht['warning']('attribute "' + c26jd + '" missed start quot(' + ncd + ')!!'), e7xz = o_24c + 0x1, co62d = fnwesd;
        }break;case '/':
        switch (co62d) {case fimvfb:
            z7rx8['setTagName'](ocjdws['slice'](e7xz, o_24c));case fnwesd:case ftmfbv:case fco246_:
            co62d = fco246_, z7rx8['closed'] = !0x0;case fwsodcj:case fu19ibv:case fq0_45:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fmiht['error']('unexpected end of input'), co62d == fimvfb && z7rx8['setTagName'](ocjdws['slice'](e7xz, o_24c)), o_24c;case '>':
        switch (co62d) {case fimvfb:
            z7rx8['setTagName'](ocjdws['slice'](e7xz, o_24c));case fnwesd:case ftmfbv:case fco246_:
            break;case fwsodcj:case fu19ibv:
            sjwdoc = ocjdws['slice'](e7xz, o_24c), '/' === sjwdoc['slice'](-0x1) && (z7rx8['closed'] = !0x0, sjwdoc = sjwdoc['slice'](0x0, -0x1));case fq0_45:
            co62d === fq0_45 && (sjwdoc = c26jd), co62d == fwsodcj ? (fmiht['warning']('attribute "' + sjwdoc + '" missed quot(")!!'), z7rx8['add'](c26jd, sjwdoc['replace'](/&#?\w+;/g, tmbh), e7xz)) : ('http://www.w3.org/1999/xhtml' === $r3a7[''] && sjwdoc['match'](/^(?:disabled|checked|selected)$/i) || fmiht['warning']('attribute "' + sjwdoc + '" missed value!! "' + sjwdoc + '" instead!!'), z7rx8['add'](sjwdoc, sjwdoc, e7xz));break;case fcdows:
            throw new Error('attribute value missed!!');}return o_24c;case '\u0080':
        ncd = '\x20';default:
        if ('\x20' >= ncd) switch (co62d) {case fimvfb:
            z7rx8['setTagName'](ocjdws['slice'](e7xz, o_24c)), co62d = ftmfbv;break;case fu19ibv:
            c26jd = ocjdws['slice'](e7xz, o_24c), co62d = fq0_45;break;case fwsodcj:
            var sjwdoc = ocjdws['slice'](e7xz, o_24c)['replace'](/&#?\w+;/g, tmbh);fmiht['warning']('attribute "' + sjwdoc + '" missed quot(")!!'), z7rx8['add'](c26jd, sjwdoc, e7xz);case fnwesd:
            co62d = ftmfbv;} else switch (co62d) {case fq0_45:
            {
              z7rx8['tagName'];
            }'http://www.w3.org/1999/xhtml' === $r3a7[''] && c26jd['match'](/^(?:disabled|checked|selected)$/i) || fmiht['warning']('attribute "' + c26jd + '" missed value!! "' + c26jd + '" instead2!!'), z7rx8['add'](c26jd, c26jd, e7xz), e7xz = o_24c, co62d = fu19ibv;break;case fnwesd:
            fmiht['warning']('attribute space is required"' + c26jd + '\x22!!');case ftmfbv:
            co62d = fu19ibv, e7xz = o_24c;break;case fcdows:
            co62d = fwsodcj, e7xz = o_24c;break;case fco246_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}o_24c++;
  }
}function fnezw(x8ernz, wzxen8, k05q_4) {
  for (var odcjw = x8ernz['tagName'], tq = null, j6cs = x8ernz['length']; j6cs--;) {
    var fbivu = x8ernz[j6cs],
        bv9ug = fbivu['qName'],
        uvmb1i = fbivu['value'],
        x87e = bv9ug['indexOf'](':');if (x87e > 0x0) var uv9bi1 = fbivu['prefix'] = bv9ug['slice'](0x0, x87e),
        _q524k = bv9ug['slice'](x87e + 0x1),
        wsxn = 'xmlns' === uv9bi1 && _q524k;else _q524k = bv9ug, uv9bi1 = null, wsxn = 'xmlns' === bv9ug && '';fbivu['localName'] = _q524k, wsxn !== !0x1 && (null == tq && (tq = {}, fb1viu(k05q_4, k05q_4 = {})), k05q_4[wsxn] = tq[wsxn] = uvmb1i, fbivu['uri'] = 'http://www.w3.org/2000/xmlns/', wzxen8['startPrefixMapping'](wsxn, uvmb1i));
  }for (var j6cs = x8ernz['length']; j6cs--;) {
    fbivu = x8ernz[j6cs];var uv9bi1 = fbivu['prefix'];uv9bi1 && ('xml' === uv9bi1 && (fbivu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== uv9bi1 && (fbivu['uri'] = k05q_4[uv9bi1 || '']));
  }var x87e = odcjw['indexOf'](':');x87e > 0x0 ? (uv9bi1 = x8ernz['prefix'] = odcjw['slice'](0x0, x87e), _q524k = x8ernz['localName'] = odcjw['slice'](x87e + 0x1)) : (uv9bi1 = null, _q524k = x8ernz['localName'] = odcjw);var gvb9u1 = x8ernz['uri'] = k05q_4[uv9bi1 || ''];if (wzxen8['startElement'](gvb9u1, _q524k, odcjw, x8ernz), !x8ernz['closed']) return x8ernz['currentNSMap'] = k05q_4, x8ernz['localNSMap'] = tq, !0x0;if (wzxen8['endElement'](gvb9u1, _q524k, odcjw), tq) {
    for (uv9bi1 in tq) wzxen8['endPrefixMapping'](uv9bi1);
  }
}function fxdjsn($z87er, fimubv, qt0hfm, fub, cswnjd) {
  if (/^(?:script|textarea)$/i['test'](qt0hfm)) {
    var q0_k45 = $z87er['indexOf']('</' + qt0hfm + '>', fimubv),
        wndxse = $z87er['substring'](fimubv + 0x1, q0_k45);if (/[&<]/['test'](wndxse)) return (/^script$/i['test'](qt0hfm) ? (cswnjd['characters'](wndxse, 0x0, wndxse['length']), q0_k45) : (wndxse = wndxse['replace'](/&#?\w+;/g, fub), cswnjd['characters'](wndxse, 0x0, wndxse['length']), q0_k45)
    );
  }return fimubv + 0x1;
}function fv9ug(r78e$, mbufvi, _kq52, xn8) {
  var dwncjs = xn8[_kq52];return null == dwncjs && (dwncjs = r78e$['lastIndexOf']('</' + _kq52 + '>'), mbufvi > dwncjs && (dwncjs = r78e$['lastIndexOf']('</' + _kq52)), xn8[_kq52] = dwncjs), mbufvi > dwncjs;
}function fb1viu(o6jds, kth50) {
  for (var ifubv in o6jds) kth50[ifubv] = o6jds[ifubv];
}function fvbfium(y7a3, y3$ar7, kq5ht0, wdsexn) {
  var _h0kq5 = y7a3['charAt'](y3$ar7 + 0x2);switch (_h0kq5) {case '-':
      if ('-' === y7a3['charAt'](y3$ar7 + 0x3)) {
        var t50hqk = y7a3['indexOf']('-->', y3$ar7 + 0x4);return t50hqk > y3$ar7 ? (kq5ht0['comment'](y7a3, y3$ar7 + 0x4, t50hqk - y3$ar7 - 0x4), t50hqk + 0x3) : (wdsexn['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == y7a3['substr'](y3$ar7 + 0x3, 0x6)) {
        var t50hqk = y7a3['indexOf'](']]>', y3$ar7 + 0x9);return kq5ht0['startCDATA'](), kq5ht0['characters'](y7a3, y3$ar7 + 0x9, t50hqk - y3$ar7 - 0x9), kq5ht0['endCDATA'](), t50hqk + 0x3;
      }var v9bug1 = ff0h5t(y7a3, y3$ar7),
          ewdxns = v9bug1['length'];if (ewdxns > 0x1 && /!doctype/i['test'](v9bug1[0x0][0x0])) {
        var t0hf = v9bug1[0x1][0x0],
            c4o_ = ewdxns > 0x3 && /^public$/i['test'](v9bug1[0x2][0x0]) && v9bug1[0x3][0x0],
            sdjoc6 = ewdxns > 0x4 && v9bug1[0x4][0x0],
            sojcd6 = v9bug1[ewdxns - 0x1];return kq5ht0['startDTD'](t0hf, c4o_ && c4o_['replace'](/^(['"])(.*?)\1$/, '$2'), sdjoc6 && sdjoc6['replace'](/^(['"])(.*?)\1$/, '$2')), kq5ht0['endDTD'](), sojcd6['index'] + sojcd6[0x0]['length'];
      }}return -0x1;
}function fbuvf(xen, jxdsn, jodswc) {
  var densxw = xen['indexOf']('?>', jxdsn);if (densxw) {
    var sdoj6 = xen['substring'](jxdsn, densxw)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (sdoj6) {
      {
        sdoj6[0x0]['length'];
      }return jodswc['processingInstruction'](sdoj6[0x1], sdoj6[0x2]), densxw + 0x2;
    }return -0x1;
  }return -0x1;
}function fq5h0() {}function fy3$r7(wjxnsd, rnxze8) {
  return wjxnsd['__proto__'] = rnxze8, wjxnsd;
}function ff0h5t(vbmfiu, wsxzne) {
  var b9uvg1,
      cwndjs = [],
      j62cd = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (j62cd['lastIndex'] = wsxzne, j62cd['exec'](vbmfiu); b9uvg1 = j62cd['exec'](vbmfiu);) if (cwndjs['push'](b9uvg1), b9uvg1[0x1]) return cwndjs;
}var fwjx = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fy78$ = new RegExp('[\\-\\.0-9' + fwjx['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fc6do2 = new RegExp('^' + fwjx['source'] + fy78$['source'] + '*(?::' + fwjx['source'] + fy78$['source'] + '*)?$'),
    fimvfb = 0x0,
    fu19ibv = 0x1,
    fq0_45 = 0x2,
    fcdows = 0x3,
    fwsodcj = 0x4,
    fnwesd = 0x5,
    ftmfbv = 0x6,
    fco246_ = 0x7;f_qhk50['prototype'] = { 'parse': function (vimu1, vfmbt, tfmqh) {
    var ows = this['domBuilder'];ows['startDocument'](), fb1viu(vfmbt, vfmbt = {}), fexzrn8(vimu1, vfmbt, tfmqh, ows, this['errorHandler']), ows['endDocument']();
  } }, fq5h0['prototype'] = { 'setTagName': function (vmibfu) {
    if (!fc6do2['test'](vmibfu)) throw new Error('invalid tagName:' + vmibfu);this['tagName'] = vmibfu;
  }, 'add': function (_qk450, rz$78e, eszxw) {
    if (!fc6do2['test'](_qk450)) throw new Error('invalid attribute:' + _qk450);this[this['length']++] = { 'qName': _qk450, 'value': rz$78e, 'offset': eszxw };
  }, 'length': 0x0, 'getLocalName': function (htqk) {
    return this[htqk]['localName'];
  }, 'getLocator': function (cod26j) {
    return this[cod26j]['locator'];
  }, 'getQName': function (q0h_k) {
    return this[q0h_k]['qName'];
  }, 'getURI': function (snxezw) {
    return this[snxezw]['uri'];
  }, 'getValue': function (snewzx) {
    return this[snewzx]['value'];
  } }, fy3$r7({}, fy3$r7['prototype']) instanceof fy3$r7 || (fy3$r7 = function (hmfti, ezr$) {
  function xedwns() {}xedwns['prototype'] = ezr$, xedwns = new xedwns();for (ezr$ in hmfti) xedwns[ezr$] = hmfti[ezr$];return xedwns;
}), exports['XMLReader'] = f_qhk50;