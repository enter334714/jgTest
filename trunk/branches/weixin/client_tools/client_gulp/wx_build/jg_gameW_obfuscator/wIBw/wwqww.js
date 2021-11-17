var s = wx.$W;
function whp4ut6() {}function whtpu46(ay9xv$, fwnjeo, g0c58b, sjomn, owjfs) {
  function pm4qh(j1z3fe) {
    if (j1z3fe > 0xffff) {
      j1z3fe -= 0x10000;var ykxadr = 0xd800 + (j1z3fe >> 0xa),
          a9$vx = 0xdc00 + (0x3ff & j1z3fe);return String['fromCharCode'](ykxadr, a9$vx);
    }return String['fromCharCode'](j1z3fe);
  }function tuh06p(cgbkd) {
    var upt0h6 = cgbkd['slice'](0x1, -0x1);return upt0h6 in g0c58b ? g0c58b[upt0h6] : '#' === upt0h6['charAt'](0x0) ? pm4qh(parseInt(upt0h6['substr'](0x1)['replace']('x', '0x'))) : (owjfs['error']('entity not found:' + cgbkd), cgbkd);
  }function p4tuh(var$yx) {
    if (var$yx > gkb8c5) {
      var cgrd = ay9xv$['substring'](gkb8c5, var$yx)['replace'](/&#?\w+;/g, tuh06p);fnwosj && kdxyb(gkb8c5), sjomn['characters'](cgrd, 0x0, var$yx - gkb8c5), gkb8c5 = var$yx;
    }
  }function kdxyb(rgdbx, o46sq) {
    for (; rgdbx >= e2173z && (o46sq = lay$['exec'](ay9xv$));) q4nos = o46sq['index'], e2173z = q4nos + o46sq[0x0]['length'], fnwosj['lineNumber']++;fnwosj['columnNumber'] = rgdbx - q4nos + 0x1;
  }for (var q4nos = 0x0, e2173z = 0x0, lay$ = /.*(?:\r\n?|\n)|.*$/g, fnwosj = sjomn['locator'], snwmjo = [{ 'currentNSMap': fwnjeo }], g58b = {}, gkb8c5 = 0x0;;) {
    try {
      var xkgdbr = ay9xv$['indexOf']('<', gkb8c5);if (0x0 > xkgdbr) {
        if (!ay9xv$['substr'](gkb8c5)['match'](/^\s*$/)) {
          var qsmnw = sjomn['doc'],
              fwson = qsmnw['createTextNode'](ay9xv$['substr'](gkb8c5));qsmnw['appendChild'](fwson), sjomn['currentElement'] = fwson;
        }return;
      }switch (xkgdbr > gkb8c5 && p4tuh(xkgdbr), ay9xv$['charAt'](xkgdbr + 0x1)) {case '/':
          var e31z = ay9xv$['indexOf']('>', xkgdbr + 0x3),
              ownfej = ay9xv$['substring'](xkgdbr + 0x2, e31z),
              gb5k = snwmjo['pop']();0x0 > e31z ? (ownfej = ay9xv$['substring'](xkgdbr + 0x2)['replace'](/[\s<].*/, ''), owjfs['error']('end tag name: ' + ownfej + ' is not complete:' + gb5k['tagName']), e31z = xkgdbr + 0x1 + ownfej['length']) : ownfej['match'](/\s</) && (ownfej = ownfej['replace'](/[\s<].*/, ''), owjfs['error']('end tag name: ' + ownfej + ' maybe not complete'), e31z = xkgdbr + 0x1 + ownfej['length']);var u8htp0 = gb5k['localNSMap'],
              jwzfn = gb5k['tagName'] == ownfej,
              $arydx = jwzfn || gb5k['tagName'] && gb5k['tagName']['toLowerCase']() == ownfej['toLowerCase']();if ($arydx) {
            if (sjomn['endElement'](gb5k['uri'], gb5k['localName'], ownfej), u8htp0) {
              for (var yrbdkx in u8htp0) sjomn['endPrefixMapping'](yrbdkx);
            }jwzfn || owjfs['fatalError']('end tag name: ' + ownfej + ' is not match the current start tagName:' + gb5k['tagName']);
          } else snwmjo['push'](gb5k);e31z++;break;case '?':
          fnwosj && kdxyb(xkgdbr), e31z = wydxrka(ay9xv$, xkgdbr, sjomn);break;case '!':
          fnwosj && kdxyb(xkgdbr), e31z = wuhp46q(ay9xv$, xkgdbr, sjomn, owjfs);break;default:
          fnwosj && kdxyb(xkgdbr);var jwosfn = new wrayvx$(),
              jzwe = snwmjo[snwmjo['length'] - 0x1]['currentNSMap'],
              e31z = wuh5t8(ay9xv$, xkgdbr, jwosfn, jzwe, tuh06p, owjfs),
              gb850c = jwosfn['length'];if (!jwosfn['closed'] && w$rydx(ay9xv$, e31z, jwosfn['tagName'], g58b) && (jwosfn['closed'] = !0x0, g0c58b['nbsp'] || owjfs['warning']('unclosed xml attribute')), fnwosj && gb850c) {
            for (var wejon = wm4ps(fnwosj, {}), c0gb = 0x0; gb850c > c0gb; c0gb++) {
              var g5c80t = jwosfn[c0gb];kdxyb(g5c80t['offset']), g5c80t['locator'] = wm4ps(fnwosj, {});
            }sjomn['locator'] = wejon, we1wzj(jwosfn, sjomn, jzwe) && snwmjo['push'](jwosfn), sjomn['locator'] = fnwosj;
          } else we1wzj(jwosfn, sjomn, jzwe) && snwmjo['push'](jwosfn);'http://www.w3.org/1999/xhtml' !== jwosfn['uri'] || jwosfn['closed'] ? e31z++ : e31z = wdcbgk5(ay9xv$, e31z, jwosfn['tagName'], tuh06p, sjomn);}
    } catch (yxv9) {
      owjfs['error']('element parse error: ' + yxv9), e31z = -0x1;
    }e31z > gkb8c5 ? gkb8c5 = e31z : p4tuh(Math['max'](xkgdbr, gkb8c5) + 0x1);
  }
}function wm4ps(v$ya9x, qmnosw) {
  return qmnosw['lineNumber'] = v$ya9x['lineNumber'], qmnosw['columnNumber'] = v$ya9x['columnNumber'], qmnosw;
}function wuh5t8(ybkxrd, l$9y, drcgkb, v$9xya, _$av, h60u) {
  for (var nfwo, cg85b0, ejwnfz = ++l$9y, ph8tu = w$9lyv;;) {
    var hu06tp = ybkxrd['charAt'](ejwnfz);switch (hu06tp) {case '=':
        if (ph8tu === wmp4s6q) nfwo = ybkxrd['slice'](l$9y, ejwnfz), ph8tu = w$yax9;else {
          if (ph8tu !== wzwjef) throw new Error('attribute equal must after attrName');ph8tu = w$yax9;
        }break;case '\x27':case '\x22':
        if (ph8tu === w$yax9 || ph8tu === wmp4s6q) {
          if (ph8tu === wmp4s6q && (h60u['warning']('attribute value must after "="'), nfwo = ybkxrd['slice'](l$9y, ejwnfz)), l$9y = ejwnfz + 0x1, ejwnfz = ybkxrd['indexOf'](hu06tp, l$9y), !(ejwnfz > 0x0)) throw new Error('attribute value no end \'' + hu06tp + '\' match');cg85b0 = ybkxrd['slice'](l$9y, ejwnfz)['replace'](/&#?\w+;/g, _$av), drcgkb['add'](nfwo, cg85b0, l$9y - 0x1), ph8tu = wy$lv;
        } else {
          if (ph8tu != wdkrbg) throw new Error('attribute value must after "="');cg85b0 = ybkxrd['slice'](l$9y, ejwnfz)['replace'](/&#?\w+;/g, _$av), drcgkb['add'](nfwo, cg85b0, l$9y), h60u['warning']('attribute "' + nfwo + '" missed start quot(' + hu06tp + ')!!'), l$9y = ejwnfz + 0x1, ph8tu = wy$lv;
        }break;case '/':
        switch (ph8tu) {case w$9lyv:
            drcgkb['setTagName'](ybkxrd['slice'](l$9y, ejwnfz));case wy$lv:case wr$ayxd:case wg8ct5:
            ph8tu = wg8ct5, drcgkb['closed'] = !0x0;case wdkrbg:case wmp4s6q:case wzwjef:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return h60u['error']('unexpected end of input'), ph8tu == w$9lyv && drcgkb['setTagName'](ybkxrd['slice'](l$9y, ejwnfz)), ejwnfz;case '>':
        switch (ph8tu) {case w$9lyv:
            drcgkb['setTagName'](ybkxrd['slice'](l$9y, ejwnfz));case wy$lv:case wr$ayxd:case wg8ct5:
            break;case wdkrbg:case wmp4s6q:
            cg85b0 = ybkxrd['slice'](l$9y, ejwnfz), '/' === cg85b0['slice'](-0x1) && (drcgkb['closed'] = !0x0, cg85b0 = cg85b0['slice'](0x0, -0x1));case wzwjef:
            ph8tu === wzwjef && (cg85b0 = nfwo), ph8tu == wdkrbg ? (h60u['warning']('attribute "' + cg85b0 + '" missed quot(")!!'), drcgkb['add'](nfwo, cg85b0['replace'](/&#?\w+;/g, _$av), l$9y)) : ('http://www.w3.org/1999/xhtml' === v$9xya[''] && cg85b0['match'](/^(?:disabled|checked|selected)$/i) || h60u['warning']('attribute "' + cg85b0 + '" missed value!! "' + cg85b0 + '" instead!!'), drcgkb['add'](cg85b0, cg85b0, l$9y));break;case w$yax9:
            throw new Error('attribute value missed!!');}return ejwnfz;case '\u0080':
        hu06tp = '\x20';default:
        if ('\x20' >= hu06tp) switch (ph8tu) {case w$9lyv:
            drcgkb['setTagName'](ybkxrd['slice'](l$9y, ejwnfz)), ph8tu = wr$ayxd;break;case wmp4s6q:
            nfwo = ybkxrd['slice'](l$9y, ejwnfz), ph8tu = wzwjef;break;case wdkrbg:
            var cg85b0 = ybkxrd['slice'](l$9y, ejwnfz)['replace'](/&#?\w+;/g, _$av);h60u['warning']('attribute "' + cg85b0 + '" missed quot(")!!'), drcgkb['add'](nfwo, cg85b0, l$9y);case wy$lv:
            ph8tu = wr$ayxd;} else switch (ph8tu) {case wzwjef:
            {
              drcgkb['tagName'];
            }'http://www.w3.org/1999/xhtml' === v$9xya[''] && nfwo['match'](/^(?:disabled|checked|selected)$/i) || h60u['warning']('attribute "' + nfwo + '" missed value!! "' + nfwo + '" instead2!!'), drcgkb['add'](nfwo, nfwo, l$9y), l$9y = ejwnfz, ph8tu = wmp4s6q;break;case wy$lv:
            h60u['warning']('attribute space is required"' + nfwo + '\x22!!');case wr$ayxd:
            ph8tu = wmp4s6q, l$9y = ejwnfz;break;case w$yax9:
            ph8tu = wdkrbg, l$9y = ejwnfz;break;case wg8ct5:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ejwnfz++;
  }
}function we1wzj(tu85, drx$, $xrv) {
  for (var utp46 = tu85['tagName'], kbdxg = null, u6q4h = tu85['length']; u6q4h--;) {
    var xardky = tu85[u6q4h],
        u4qp6 = xardky['qName'],
        ph64 = xardky['value'],
        kdxyrb = u4qp6['indexOf'](':');if (kdxyrb > 0x0) var swnm = xardky['prefix'] = u4qp6['slice'](0x0, kdxyrb),
        u46hpt = u4qp6['slice'](kdxyrb + 0x1),
        ryx$ad = 'xmlns' === swnm && u46hpt;else u46hpt = u4qp6, swnm = null, ryx$ad = 'xmlns' === u4qp6 && '';xardky['localName'] = u46hpt, ryx$ad !== !0x1 && (null == kbdxg && (kbdxg = {}, wzjfnwe($xrv, $xrv = {})), $xrv[ryx$ad] = kbdxg[ryx$ad] = ph64, xardky['uri'] = 'http://www.w3.org/2000/xmlns/', drx$['startPrefixMapping'](ryx$ad, ph64));
  }for (var u6q4h = tu85['length']; u6q4h--;) {
    xardky = tu85[u6q4h];var swnm = xardky['prefix'];swnm && ('xml' === swnm && (xardky['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== swnm && (xardky['uri'] = $xrv[swnm || '']));
  }var kdxyrb = utp46['indexOf'](':');kdxyrb > 0x0 ? (swnm = tu85['prefix'] = utp46['slice'](0x0, kdxyrb), u46hpt = tu85['localName'] = utp46['slice'](kdxyrb + 0x1)) : (swnm = null, u46hpt = tu85['localName'] = utp46);var qo4sm6 = tu85['uri'] = $xrv[swnm || ''];if (drx$['startElement'](qo4sm6, u46hpt, utp46, tu85), !tu85['closed']) return tu85['currentNSMap'] = $xrv, tu85['localNSMap'] = kbdxg, !0x0;if (drx$['endElement'](qo4sm6, u46hpt, utp46), kbdxg) {
    for (swnm in kbdxg) drx$['endPrefixMapping'](swnm);
  }
}function wdcbgk5(tg8c05, rxvya$, bkxgr, k58b, ph4ut) {
  if (/^(?:script|textarea)$/i['test'](bkxgr)) {
    var m6p4hq = tg8c05['indexOf']('</' + bkxgr + '>', rxvya$),
        fj31e = tg8c05['substring'](rxvya$ + 0x1, m6p4hq);if (/[&<]/['test'](fj31e)) return (/^script$/i['test'](bkxgr) ? (ph4ut['characters'](fj31e, 0x0, fj31e['length']), m6p4hq) : (fj31e = fj31e['replace'](/&#?\w+;/g, k58b), ph4ut['characters'](fj31e, 0x0, fj31e['length']), m6p4hq)
    );
  }return rxvya$ + 0x1;
}function w$rydx(v$l_9a, wnsof, phm4q6, gd5cb) {
  var bcg50 = gd5cb[phm4q6];return null == bcg50 && (bcg50 = v$l_9a['lastIndexOf']('</' + phm4q6 + '>'), wnsof > bcg50 && (bcg50 = v$l_9a['lastIndexOf']('</' + phm4q6)), gd5cb[phm4q6] = bcg50), wnsof > bcg50;
}function wzjfnwe(noms, hup08t) {
  for (var m6p in noms) hup08t[m6p] = noms[m6p];
}function wuhp46q(swjm, z3e2f, z132, kyadr) {
  var fezj31 = swjm['charAt'](z3e2f + 0x2);switch (fezj31) {case '-':
      if ('-' === swjm['charAt'](z3e2f + 0x3)) {
        var mno = swjm['indexOf']('-->', z3e2f + 0x4);return mno > z3e2f ? (z132['comment'](swjm, z3e2f + 0x4, mno - z3e2f - 0x4), mno + 0x3) : (kyadr['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == swjm['substr'](z3e2f + 0x3, 0x6)) {
        var mno = swjm['indexOf'](']]>', z3e2f + 0x9);return z132['startCDATA'](), z132['characters'](swjm, z3e2f + 0x9, mno - z3e2f - 0x9), z132['endCDATA'](), mno + 0x3;
      }var t8phu0 = wez1w(swjm, z3e2f),
          om46qs = t8phu0['length'];if (om46qs > 0x1 && /!doctype/i['test'](t8phu0[0x0][0x0])) {
        var sqm46p = t8phu0[0x1][0x0],
            t58h0u = om46qs > 0x3 && /^public$/i['test'](t8phu0[0x2][0x0]) && t8phu0[0x3][0x0],
            fe1zj3 = om46qs > 0x4 && t8phu0[0x4][0x0],
            o6q4m = t8phu0[om46qs - 0x1];return z132['startDTD'](sqm46p, t58h0u && t58h0u['replace'](/^(['"])(.*?)\1$/, '$2'), fe1zj3 && fe1zj3['replace'](/^(['"])(.*?)\1$/, '$2')), z132['endDTD'](), o6q4m['index'] + o6q4m[0x0]['length'];
      }}return -0x1;
}function wydxrka(e1zjwf, vla_$, gkdcb) {
  var jewnfo = e1zjwf['indexOf']('?>', vla_$);if (jewnfo) {
    var bcd = e1zjwf['substring'](vla_$, jewnfo)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (bcd) {
      {
        bcd[0x0]['length'];
      }return gkdcb['processingInstruction'](bcd[0x1], bcd[0x2]), jewnfo + 0x2;
    }return -0x1;
  }return -0x1;
}function wrayvx$() {}function wdgrbkc(ejnfwo, raxyv) {
  return ejnfwo['__proto__'] = raxyv, ejnfwo;
}function wez1w(rcdgbk, ojenwf) {
  var nzf,
      ayr$v = [],
      hptu64 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hptu64['lastIndex'] = ojenwf, hptu64['exec'](rcdgbk); nzf = hptu64['exec'](rcdgbk);) if (ayr$v['push'](nzf), nzf[0x1]) return ayr$v;
}var wvl9_a = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    waxrdky = new RegExp('[\\-\\.0-9' + wvl9_a['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    wo4snqm = new RegExp('^' + wvl9_a['source'] + waxrdky['source'] + '*(?::' + wvl9_a['source'] + waxrdky['source'] + '*)?$'),
    w$9lyv = 0x0,
    wmp4s6q = 0x1,
    wzwjef = 0x2,
    w$yax9 = 0x3,
    wdkrbg = 0x4,
    wy$lv = 0x5,
    wr$ayxd = 0x6,
    wg8ct5 = 0x7;whp4ut6['prototype'] = { 'parse': function (dkrgxb, nfjezw, r$dya) {
    var oqs64 = this['domBuilder'];oqs64['startDocument'](), wzjfnwe(nfjezw, nfjezw = {}), whtpu46(dkrgxb, nfjezw, r$dya, oqs64, this['errorHandler']), oqs64['endDocument']();
  } }, wrayvx$['prototype'] = { 'setTagName': function (c8t0) {
    if (!wo4snqm['test'](c8t0)) throw new Error('invalid tagName:' + c8t0);this['tagName'] = c8t0;
  }, 'add': function (q4snm, qmsn, dxb) {
    if (!wo4snqm['test'](q4snm)) throw new Error('invalid attribute:' + q4snm);this[this['length']++] = { 'qName': q4snm, 'value': qmsn, 'offset': dxb };
  }, 'length': 0x0, 'getLocalName': function ($lv9) {
    return this[$lv9]['localName'];
  }, 'getLocator': function (kdarx) {
    return this[kdarx]['locator'];
  }, 'getQName': function (jmnwos) {
    return this[jmnwos]['qName'];
  }, 'getURI': function (v$yxar) {
    return this[v$yxar]['uri'];
  }, 'getValue': function (b5dk) {
    return this[b5dk]['value'];
  } }, wdgrbkc({}, wdgrbkc['prototype']) instanceof wdgrbkc || (wdgrbkc = function (ez31f, $9lv_a) {
  function dxrby() {}dxrby['prototype'] = $9lv_a, dxrby = new dxrby();for ($9lv_a in ez31f) dxrby[$9lv_a] = ez31f[$9lv_a];return dxrby;
}), exports['XMLReader'] = whp4ut6;