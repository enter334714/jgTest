var k = wx.$f;
function fpa3() {}function fq0k4(u1v9bi, wdc, wsodjc, jo4c2, csjd6) {
  function m0hqf(jo2d) {
    if (jo2d > 0xffff) {
      jo2d -= 0x10000;var c6o4_ = 0xd800 + (jo2d >> 0xa),
          y7ra$3 = 0xdc00 + (0x3ff & jo2d);return String['fromCharCode'](c6o4_, y7ra$3);
    }return String['fromCharCode'](jo2d);
  }function rx8n(_q) {
    var kq_254 = _q['slice'](0x1, -0x1);return kq_254 in wsodjc ? wsodjc[kq_254] : '#' === kq_254['charAt'](0x0) ? m0hqf(parseInt(kq_254['substr'](0x1)['replace']('x', '0x'))) : (csjd6['error']('entity not found:' + _q), _q);
  }function mq0th(jsdco) {
    if (jsdco > k_4) {
      var ht0mfq = u1v9bi['substring'](k_4, jsdco)['replace'](/&#?\w+;/g, rx8n);j6co2d && odsc6(k_4), jo4c2['characters'](ht0mfq, 0x0, jsdco - k_4), k_4 = jsdco;
    }
  }function odsc6(nxsj, ihbtmf) {
    for (; nxsj >= jndws && (ihbtmf = do6jc['exec'](u1v9bi));) odswjc = ihbtmf['index'], jndws = odswjc + ihbtmf[0x0]['length'], j6co2d['lineNumber']++;j6co2d['columnNumber'] = nxsj - odswjc + 0x1;
  }for (var odswjc = 0x0, jndws = 0x0, do6jc = /.*(?:\r\n?|\n)|.*$/g, j6co2d = jo4c2['locator'], xnwdj = [{ 'currentNSMap': wdc }], hitfmb = {}, k_4 = 0x0;;) {
    try {
      var xswdj = u1v9bi['indexOf']('<', k_4);if (0x0 > xswdj) {
        if (!u1v9bi['substr'](k_4)['match'](/^\s*$/)) {
          var ary3 = jo4c2['doc'],
              _k46o2 = ary3['createTextNode'](u1v9bi['substr'](k_4));ary3['appendChild'](_k46o2), jo4c2['currentElement'] = _k46o2;
        }return;
      }switch (xswdj > k_4 && mq0th(xswdj), u1v9bi['charAt'](xswdj + 0x1)) {case '/':
          var wexsnd = u1v9bi['indexOf']('>', xswdj + 0x3),
              njcs = u1v9bi['substring'](xswdj + 0x2, wexsnd),
              uvfib = xnwdj['pop']();0x0 > wexsnd ? (njcs = u1v9bi['substring'](xswdj + 0x2)['replace'](/[\s<].*/, ''), csjd6['error']('end tag name: ' + njcs + ' is not complete:' + uvfib['tagName']), wexsnd = xswdj + 0x1 + njcs['length']) : njcs['match'](/\s</) && (njcs = njcs['replace'](/[\s<].*/, ''), csjd6['error']('end tag name: ' + njcs + ' maybe not complete'), wexsnd = xswdj + 0x1 + njcs['length']);var cowsjd = uvfib['localNSMap'],
              k526_4 = uvfib['tagName'] == njcs,
              ubm1vi = k526_4 || uvfib['tagName'] && uvfib['tagName']['toLowerCase']() == njcs['toLowerCase']();if (ubm1vi) {
            if (jo4c2['endElement'](uvfib['uri'], uvfib['localName'], njcs), cowsjd) {
              for (var $py73a in cowsjd) jo4c2['endPrefixMapping']($py73a);
            }k526_4 || csjd6['fatalError']('end tag name: ' + njcs + ' is not match the current start tagName:' + uvfib['tagName']);
          } else xnwdj['push'](uvfib);wexsnd++;break;case '?':
          j6co2d && odsc6(xswdj), wexsnd = fxsjwn(u1v9bi, xswdj, jo4c2);break;case '!':
          j6co2d && odsc6(xswdj), wexsnd = fxsez(u1v9bi, xswdj, jo4c2, csjd6);break;default:
          j6co2d && odsc6(xswdj);var ze8nrx = new ftmb(),
              _5hkq0 = xnwdj[xnwdj['length'] - 0x1]['currentNSMap'],
              wexsnd = fxe8z7r(u1v9bi, xswdj, ze8nrx, _5hkq0, rx8n, csjd6),
              u1bv = ze8nrx['length'];if (!ze8nrx['closed'] && fuv9ib(u1v9bi, wexsnd, ze8nrx['tagName'], hitfmb) && (ze8nrx['closed'] = !0x0, wsodjc['nbsp'] || csjd6['warning']('unclosed xml attribute')), j6co2d && u1bv) {
            for (var coj24 = fdesxn(j6co2d, {}), zw8xn = 0x0; u1bv > zw8xn; zw8xn++) {
              var c4o62j = ze8nrx[zw8xn];odsc6(c4o62j['offset']), c4o62j['locator'] = fdesxn(j6co2d, {});
            }jo4c2['locator'] = coj24, fdcjows(ze8nrx, jo4c2, _5hkq0) && xnwdj['push'](ze8nrx), jo4c2['locator'] = j6co2d;
          } else fdcjows(ze8nrx, jo4c2, _5hkq0) && xnwdj['push'](ze8nrx);'http://www.w3.org/1999/xhtml' !== ze8nrx['uri'] || ze8nrx['closed'] ? wexsnd++ : wexsnd = fxezn8r(u1v9bi, wexsnd, ze8nrx['tagName'], rx8n, jo4c2);}
    } catch ($y3ra) {
      csjd6['error']('element parse error: ' + $y3ra), wexsnd = -0x1;
    }wexsnd > k_4 ? k_4 = wexsnd : mq0th(Math['max'](xswdj, k_4) + 0x1);
  }
}function fdesxn(_q0, dowcs) {
  return dowcs['lineNumber'] = _q0['lineNumber'], dowcs['columnNumber'] = _q0['columnNumber'], dowcs;
}function fxe8z7r(q50tkh, njwdx, dwjn, _q05k, sxenzw, tqh0) {
  for (var fibvm, xzwe8, _qhk5 = ++njwdx, wncjd = fmuvbfi;;) {
    var dsjncw = q50tkh['charAt'](_qhk5);switch (dsjncw) {case '=':
        if (wncjd === fihmf) fibvm = q50tkh['slice'](njwdx, _qhk5), wncjd = fesxnzw;else {
          if (wncjd !== fzer8xn) throw new Error('attribute equal must after attrName');wncjd = fesxnzw;
        }break;case '\x27':case '\x22':
        if (wncjd === fesxnzw || wncjd === fihmf) {
          if (wncjd === fihmf && (tqh0['warning']('attribute value must after "="'), fibvm = q50tkh['slice'](njwdx, _qhk5)), njwdx = _qhk5 + 0x1, _qhk5 = q50tkh['indexOf'](dsjncw, njwdx), !(_qhk5 > 0x0)) throw new Error('attribute value no end \'' + dsjncw + '\' match');xzwe8 = q50tkh['slice'](njwdx, _qhk5)['replace'](/&#?\w+;/g, sxenzw), dwjn['add'](fibvm, xzwe8, njwdx - 0x1), wncjd = fnxjdsw;
        } else {
          if (wncjd != fwsjdnc) throw new Error('attribute value must after "="');xzwe8 = q50tkh['slice'](njwdx, _qhk5)['replace'](/&#?\w+;/g, sxenzw), dwjn['add'](fibvm, xzwe8, njwdx), tqh0['warning']('attribute "' + fibvm + '" missed start quot(' + dsjncw + ')!!'), njwdx = _qhk5 + 0x1, wncjd = fnxjdsw;
        }break;case '/':
        switch (wncjd) {case fmuvbfi:
            dwjn['setTagName'](q50tkh['slice'](njwdx, _qhk5));case fnxjdsw:case fjdxwn:case fvfbimt:
            wncjd = fvfbimt, dwjn['closed'] = !0x0;case fwsjdnc:case fihmf:case fzer8xn:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return tqh0['error']('unexpected end of input'), wncjd == fmuvbfi && dwjn['setTagName'](q50tkh['slice'](njwdx, _qhk5)), _qhk5;case '>':
        switch (wncjd) {case fmuvbfi:
            dwjn['setTagName'](q50tkh['slice'](njwdx, _qhk5));case fnxjdsw:case fjdxwn:case fvfbimt:
            break;case fwsjdnc:case fihmf:
            xzwe8 = q50tkh['slice'](njwdx, _qhk5), '/' === xzwe8['slice'](-0x1) && (dwjn['closed'] = !0x0, xzwe8 = xzwe8['slice'](0x0, -0x1));case fzer8xn:
            wncjd === fzer8xn && (xzwe8 = fibvm), wncjd == fwsjdnc ? (tqh0['warning']('attribute "' + xzwe8 + '" missed quot(")!!'), dwjn['add'](fibvm, xzwe8['replace'](/&#?\w+;/g, sxenzw), njwdx)) : ('http://www.w3.org/1999/xhtml' === _q05k[''] && xzwe8['match'](/^(?:disabled|checked|selected)$/i) || tqh0['warning']('attribute "' + xzwe8 + '" missed value!! "' + xzwe8 + '" instead!!'), dwjn['add'](xzwe8, xzwe8, njwdx));break;case fesxnzw:
            throw new Error('attribute value missed!!');}return _qhk5;case '\u0080':
        dsjncw = '\x20';default:
        if ('\x20' >= dsjncw) switch (wncjd) {case fmuvbfi:
            dwjn['setTagName'](q50tkh['slice'](njwdx, _qhk5)), wncjd = fjdxwn;break;case fihmf:
            fibvm = q50tkh['slice'](njwdx, _qhk5), wncjd = fzer8xn;break;case fwsjdnc:
            var xzwe8 = q50tkh['slice'](njwdx, _qhk5)['replace'](/&#?\w+;/g, sxenzw);tqh0['warning']('attribute "' + xzwe8 + '" missed quot(")!!'), dwjn['add'](fibvm, xzwe8, njwdx);case fnxjdsw:
            wncjd = fjdxwn;} else switch (wncjd) {case fzer8xn:
            {
              dwjn['tagName'];
            }'http://www.w3.org/1999/xhtml' === _q05k[''] && fibvm['match'](/^(?:disabled|checked|selected)$/i) || tqh0['warning']('attribute "' + fibvm + '" missed value!! "' + fibvm + '" instead2!!'), dwjn['add'](fibvm, fibvm, njwdx), njwdx = _qhk5, wncjd = fihmf;break;case fnxjdsw:
            tqh0['warning']('attribute space is required"' + fibvm + '\x22!!');case fjdxwn:
            wncjd = fihmf, njwdx = _qhk5;break;case fesxnzw:
            wncjd = fwsjdnc, njwdx = _qhk5;break;case fvfbimt:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_qhk5++;
  }
}function fdcjows(z7e8r, c624j, hbfmi) {
  for (var mftbih = z7e8r['tagName'], d62o = null, zexnr = z7e8r['length']; zexnr--;) {
    var z387$ = z7e8r[zexnr],
        _2645k = z387$['qName'],
        h50_k = z387$['value'],
        $38 = _2645k['indexOf'](':');if ($38 > 0x0) var ewsdx = z387$['prefix'] = _2645k['slice'](0x0, $38),
        zrxe7 = _2645k['slice']($38 + 0x1),
        thmfbi = 'xmlns' === ewsdx && zrxe7;else zrxe7 = _2645k, ewsdx = null, thmfbi = 'xmlns' === _2645k && '';z387$['localName'] = zrxe7, thmfbi !== !0x1 && (null == d62o && (d62o = {}, fwsednx(hbfmi, hbfmi = {})), hbfmi[thmfbi] = d62o[thmfbi] = h50_k, z387$['uri'] = 'http://www.w3.org/2000/xmlns/', c624j['startPrefixMapping'](thmfbi, h50_k));
  }for (var zexnr = z7e8r['length']; zexnr--;) {
    z387$ = z7e8r[zexnr];var ewsdx = z387$['prefix'];ewsdx && ('xml' === ewsdx && (z387$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ewsdx && (z387$['uri'] = hbfmi[ewsdx || '']));
  }var $38 = mftbih['indexOf'](':');$38 > 0x0 ? (ewsdx = z7e8r['prefix'] = mftbih['slice'](0x0, $38), zrxe7 = z7e8r['localName'] = mftbih['slice']($38 + 0x1)) : (ewsdx = null, zrxe7 = z7e8r['localName'] = mftbih);var pa$y = z7e8r['uri'] = hbfmi[ewsdx || ''];if (c624j['startElement'](pa$y, zrxe7, mftbih, z7e8r), !z7e8r['closed']) return z7e8r['currentNSMap'] = hbfmi, z7e8r['localNSMap'] = d62o, !0x0;if (c624j['endElement'](pa$y, zrxe7, mftbih), d62o) {
    for (ewsdx in d62o) c624j['endPrefixMapping'](ewsdx);
  }
}function fxezn8r(_56k24, zexn8w, oj462c, x8enzr, yr783) {
  if (/^(?:script|textarea)$/i['test'](oj462c)) {
    var y$83r7 = _56k24['indexOf']('</' + oj462c + '>', zexn8w),
        sojcd = _56k24['substring'](zexn8w + 0x1, y$83r7);if (/[&<]/['test'](sojcd)) return (/^script$/i['test'](oj462c) ? (yr783['characters'](sojcd, 0x0, sojcd['length']), y$83r7) : (sojcd = sojcd['replace'](/&#?\w+;/g, x8enzr), yr783['characters'](sojcd, 0x0, sojcd['length']), y$83r7)
    );
  }return zexn8w + 0x1;
}function fuv9ib(ap7y$3, vtmibf, ewnxsd, rya$73) {
  var cjdnw = rya$73[ewnxsd];return null == cjdnw && (cjdnw = ap7y$3['lastIndexOf']('</' + ewnxsd + '>'), vtmibf > cjdnw && (cjdnw = ap7y$3['lastIndexOf']('</' + ewnxsd)), rya$73[ewnxsd] = cjdnw), vtmibf > cjdnw;
}function fwsednx(_4o62, zrne8) {
  for (var djxnws in _4o62) zrne8[djxnws] = _4o62[djxnws];
}function fxsez(iufbmv, n8rz, r3y7a$, c6o4) {
  var ftimhb = iufbmv['charAt'](n8rz + 0x2);switch (ftimhb) {case '-':
      if ('-' === iufbmv['charAt'](n8rz + 0x3)) {
        var kq0_54 = iufbmv['indexOf']('-->', n8rz + 0x4);return kq0_54 > n8rz ? (r3y7a$['comment'](iufbmv, n8rz + 0x4, kq0_54 - n8rz - 0x4), kq0_54 + 0x3) : (c6o4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == iufbmv['substr'](n8rz + 0x3, 0x6)) {
        var kq0_54 = iufbmv['indexOf'](']]>', n8rz + 0x9);return r3y7a$['startCDATA'](), r3y7a$['characters'](iufbmv, n8rz + 0x9, kq0_54 - n8rz - 0x9), r3y7a$['endCDATA'](), kq0_54 + 0x3;
      }var cs = fi9uvb1(iufbmv, n8rz),
          kq5h0 = cs['length'];if (kq5h0 > 0x1 && /!doctype/i['test'](cs[0x0][0x0])) {
        var mhfi0 = cs[0x1][0x0],
            bmth = kq5h0 > 0x3 && /^public$/i['test'](cs[0x2][0x0]) && cs[0x3][0x0],
            dojs6 = kq5h0 > 0x4 && cs[0x4][0x0],
            nrex = cs[kq5h0 - 0x1];return r3y7a$['startDTD'](mhfi0, bmth && bmth['replace'](/^(['"])(.*?)\1$/, '$2'), dojs6 && dojs6['replace'](/^(['"])(.*?)\1$/, '$2')), r3y7a$['endDTD'](), nrex['index'] + nrex[0x0]['length'];
      }}return -0x1;
}function fxsjwn(htk50q, xwsenz, sdc6o) {
  var hk0t = htk50q['indexOf']('?>', xwsenz);if (hk0t) {
    var py$7 = htk50q['substring'](xwsenz, hk0t)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (py$7) {
      {
        py$7[0x0]['length'];
      }return sdc6o['processingInstruction'](py$7[0x1], py$7[0x2]), hk0t + 0x2;
    }return -0x1;
  }return -0x1;
}function ftmb() {}function fedw(jwdsxn, zxre8) {
  return jwdsxn['__proto__'] = zxre8, jwdsxn;
}function fi9uvb1(v1m, _5q4k) {
  var qhtk50,
      a73ry$ = [],
      zx8nw = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zx8nw['lastIndex'] = _5q4k, zx8nw['exec'](v1m); qhtk50 = zx8nw['exec'](v1m);) if (a73ry$['push'](qhtk50), qhtk50[0x1]) return a73ry$;
}var ftq5 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fi1vbum = new RegExp('[\\-\\.0-9' + ftq5['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fk46_o2 = new RegExp('^' + ftq5['source'] + fi1vbum['source'] + '*(?::' + ftq5['source'] + fi1vbum['source'] + '*)?$'),
    fmuvbfi = 0x0,
    fihmf = 0x1,
    fzer8xn = 0x2,
    fesxnzw = 0x3,
    fwsjdnc = 0x4,
    fnxjdsw = 0x5,
    fjdxwn = 0x6,
    fvfbimt = 0x7;fpa3['prototype'] = { 'parse': function (_46co, nwdj, _0k5) {
    var x87e = this['domBuilder'];x87e['startDocument'](), fwsednx(nwdj, nwdj = {}), fq0k4(_46co, nwdj, _0k5, x87e, this['errorHandler']), x87e['endDocument']();
  } }, ftmb['prototype'] = { 'setTagName': function (r8ezx) {
    if (!fk46_o2['test'](r8ezx)) throw new Error('invalid tagName:' + r8ezx);this['tagName'] = r8ezx;
  }, 'add': function (o6sjd, xwsne, vbfmui) {
    if (!fk46_o2['test'](o6sjd)) throw new Error('invalid attribute:' + o6sjd);this[this['length']++] = { 'qName': o6sjd, 'value': xwsne, 'offset': vbfmui };
  }, 'length': 0x0, 'getLocalName': function (bhft) {
    return this[bhft]['localName'];
  }, 'getLocator': function (osd6j) {
    return this[osd6j]['locator'];
  }, 'getQName': function (nx8ew) {
    return this[nx8ew]['qName'];
  }, 'getURI': function (fthq5) {
    return this[fthq5]['uri'];
  }, 'getValue': function (p73ay) {
    return this[p73ay]['value'];
  } }, fedw({}, fedw['prototype']) instanceof fedw || (fedw = function (sndexw, ezr8) {
  function swjcdo() {}swjcdo['prototype'] = ezr8, swjcdo = new swjcdo();for (ezr8 in sndexw) swjcdo[ezr8] = sndexw[ezr8];return swjcdo;
}), exports['XMLReader'] = fpa3;