var s = wx.$W;
function wp80t() {}function w$vax9(j3z1ef, ckdrb, u058h, bgxr, f1jew) {
  function vy9x$a(fwjons) {
    if (fwjons > 0xffff) {
      fwjons -= 0x10000;var _$9avl = 0xd800 + (fwjons >> 0xa),
          gcb08 = 0xdc00 + (0x3ff & fwjons);return String['fromCharCode'](_$9avl, gcb08);
    }return String['fromCharCode'](fwjons);
  }function c5gkbd(jsow) {
    var dkxar = jsow['slice'](0x1, -0x1);return dkxar in u058h ? u058h[dkxar] : '#' === dkxar['charAt'](0x0) ? vy9x$a(parseInt(dkxar['substr'](0x1)['replace']('x', '0x'))) : (f1jew['error']('entity not found:' + jsow), jsow);
  }function ph6q4u(q6uhp) {
    if (q6uhp > akxd) {
      var utc05 = j3z1ef['substring'](akxd, q6uhp)['replace'](/&#?\w+;/g, c5gkbd);vl$a_9 && htpu4(akxd), bgxr['characters'](utc05, 0x0, q6uhp - akxd), akxd = q6uhp;
    }
  }function htpu4(t05uh, rd$ax) {
    for (; t05uh >= qswnom && (rd$ax = $ryvxa['exec'](j3z1ef));) bkdrxy = rd$ax['index'], qswnom = bkdrxy + rd$ax[0x0]['length'], vl$a_9['lineNumber']++;vl$a_9['columnNumber'] = t05uh - bkdrxy + 0x1;
  }for (var bkdrxy = 0x0, qswnom = 0x0, $ryvxa = /.*(?:\r\n?|\n)|.*$/g, vl$a_9 = bgxr['locator'], j1wzf = [{ 'currentNSMap': ckdrb }], a_9vl = {}, akxd = 0x0;;) {
    try {
      var xya9 = j3z1ef['indexOf']('<', akxd);if (0x0 > xya9) {
        if (!j3z1ef['substr'](akxd)['match'](/^\s*$/)) {
          var wqnmso = bgxr['doc'],
              wmqs = wqnmso['createTextNode'](j3z1ef['substr'](akxd));wqnmso['appendChild'](wmqs), bgxr['currentElement'] = wmqs;
        }return;
      }switch (xya9 > akxd && ph6q4u(xya9), j3z1ef['charAt'](xya9 + 0x1)) {case '/':
          var _$lv9a = j3z1ef['indexOf']('>', xya9 + 0x3),
              q4nm = j3z1ef['substring'](xya9 + 0x2, _$lv9a),
              pt0uh6 = j1wzf['pop']();0x0 > _$lv9a ? (q4nm = j3z1ef['substring'](xya9 + 0x2)['replace'](/[\s<].*/, ''), f1jew['error']('end tag name: ' + q4nm + ' is not complete:' + pt0uh6['tagName']), _$lv9a = xya9 + 0x1 + q4nm['length']) : q4nm['match'](/\s</) && (q4nm = q4nm['replace'](/[\s<].*/, ''), f1jew['error']('end tag name: ' + q4nm + ' maybe not complete'), _$lv9a = xya9 + 0x1 + q4nm['length']);var q4p6hm = pt0uh6['localNSMap'],
              hpqm6 = pt0uh6['tagName'] == q4nm,
              wfonjs = hpqm6 || pt0uh6['tagName'] && pt0uh6['tagName']['toLowerCase']() == q4nm['toLowerCase']();if (wfonjs) {
            if (bgxr['endElement'](pt0uh6['uri'], pt0uh6['localName'], q4nm), q4p6hm) {
              for (var d$xya in q4p6hm) bgxr['endPrefixMapping'](d$xya);
            }hpqm6 || f1jew['fatalError']('end tag name: ' + q4nm + ' is not match the current start tagName:' + pt0uh6['tagName']);
          } else j1wzf['push'](pt0uh6);_$lv9a++;break;case '?':
          vl$a_9 && htpu4(xya9), _$lv9a = wtup(j3z1ef, xya9, bgxr);break;case '!':
          vl$a_9 && htpu4(xya9), _$lv9a = wezwf1j(j3z1ef, xya9, bgxr, f1jew);break;default:
          vl$a_9 && htpu4(xya9);var c5kgb = new wqm4so6(),
              ojwfsn = j1wzf[j1wzf['length'] - 0x1]['currentNSMap'],
              _$lv9a = wyxbrkd(j3z1ef, xya9, c5kgb, ojwfsn, c5gkbd, f1jew),
              pu80 = c5kgb['length'];if (!c5kgb['closed'] && w$drxa(j3z1ef, _$lv9a, c5kgb['tagName'], a_9vl) && (c5kgb['closed'] = !0x0, u058h['nbsp'] || f1jew['warning']('unclosed xml attribute')), vl$a_9 && pu80) {
            for (var fwnzj = wfon(vl$a_9, {}), zf1e3j = 0x0; pu80 > zf1e3j; zf1e3j++) {
              var j1wze = c5kgb[zf1e3j];htpu4(j1wze['offset']), j1wze['locator'] = wfon(vl$a_9, {});
            }bgxr['locator'] = fwnzj, wct8g50(c5kgb, bgxr, ojwfsn) && j1wzf['push'](c5kgb), bgxr['locator'] = vl$a_9;
          } else wct8g50(c5kgb, bgxr, ojwfsn) && j1wzf['push'](c5kgb);'http://www.w3.org/1999/xhtml' !== c5kgb['uri'] || c5kgb['closed'] ? _$lv9a++ : _$lv9a = wkdcg5b(j3z1ef, _$lv9a, c5kgb['tagName'], c5gkbd, bgxr);}
    } catch (mp46sq) {
      f1jew['error']('element parse error: ' + mp46sq), _$lv9a = -0x1;
    }_$lv9a > akxd ? akxd = _$lv9a : ph6q4u(Math['max'](xya9, akxd) + 0x1);
  }
}function wfon($xa9y, mswnj) {
  return mswnj['lineNumber'] = $xa9y['lineNumber'], mswnj['columnNumber'] = $xa9y['columnNumber'], mswnj;
}function wyxbrkd(sojnfw, akdrx, jf3ze, hu58t0, nsm4qo, qnmos) {
  for (var o4msqn, cdgrb, fz13j = ++akdrx, yav$l = wmosjn;;) {
    var t0phu6 = sojnfw['charAt'](fz13j);switch (t0phu6) {case '=':
        if (yav$l === wfonjwe) o4msqn = sojnfw['slice'](akdrx, fz13j), yav$l = wsq64mp;else {
          if (yav$l !== wg50c8b) throw new Error('attribute equal must after attrName');yav$l = wsq64mp;
        }break;case '\x27':case '\x22':
        if (yav$l === wsq64mp || yav$l === wfonjwe) {
          if (yav$l === wfonjwe && (qnmos['warning']('attribute value must after "="'), o4msqn = sojnfw['slice'](akdrx, fz13j)), akdrx = fz13j + 0x1, fz13j = sojnfw['indexOf'](t0phu6, akdrx), !(fz13j > 0x0)) throw new Error('attribute value no end \'' + t0phu6 + '\' match');cdgrb = sojnfw['slice'](akdrx, fz13j)['replace'](/&#?\w+;/g, nsm4qo), jf3ze['add'](o4msqn, cdgrb, akdrx - 0x1), yav$l = wq46puh;
        } else {
          if (yav$l != wbdxkg) throw new Error('attribute value must after "="');cdgrb = sojnfw['slice'](akdrx, fz13j)['replace'](/&#?\w+;/g, nsm4qo), jf3ze['add'](o4msqn, cdgrb, akdrx), qnmos['warning']('attribute "' + o4msqn + '" missed start quot(' + t0phu6 + ')!!'), akdrx = fz13j + 0x1, yav$l = wq46puh;
        }break;case '/':
        switch (yav$l) {case wmosjn:
            jf3ze['setTagName'](sojnfw['slice'](akdrx, fz13j));case wq46puh:case wt0c5g8:case wbyxkr:
            yav$l = wbyxkr, jf3ze['closed'] = !0x0;case wbdxkg:case wfonjwe:case wg50c8b:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qnmos['error']('unexpected end of input'), yav$l == wmosjn && jf3ze['setTagName'](sojnfw['slice'](akdrx, fz13j)), fz13j;case '>':
        switch (yav$l) {case wmosjn:
            jf3ze['setTagName'](sojnfw['slice'](akdrx, fz13j));case wq46puh:case wt0c5g8:case wbyxkr:
            break;case wbdxkg:case wfonjwe:
            cdgrb = sojnfw['slice'](akdrx, fz13j), '/' === cdgrb['slice'](-0x1) && (jf3ze['closed'] = !0x0, cdgrb = cdgrb['slice'](0x0, -0x1));case wg50c8b:
            yav$l === wg50c8b && (cdgrb = o4msqn), yav$l == wbdxkg ? (qnmos['warning']('attribute "' + cdgrb + '" missed quot(")!!'), jf3ze['add'](o4msqn, cdgrb['replace'](/&#?\w+;/g, nsm4qo), akdrx)) : ('http://www.w3.org/1999/xhtml' === hu58t0[''] && cdgrb['match'](/^(?:disabled|checked|selected)$/i) || qnmos['warning']('attribute "' + cdgrb + '" missed value!! "' + cdgrb + '" instead!!'), jf3ze['add'](cdgrb, cdgrb, akdrx));break;case wsq64mp:
            throw new Error('attribute value missed!!');}return fz13j;case '\u0080':
        t0phu6 = '\x20';default:
        if ('\x20' >= t0phu6) switch (yav$l) {case wmosjn:
            jf3ze['setTagName'](sojnfw['slice'](akdrx, fz13j)), yav$l = wt0c5g8;break;case wfonjwe:
            o4msqn = sojnfw['slice'](akdrx, fz13j), yav$l = wg50c8b;break;case wbdxkg:
            var cdgrb = sojnfw['slice'](akdrx, fz13j)['replace'](/&#?\w+;/g, nsm4qo);qnmos['warning']('attribute "' + cdgrb + '" missed quot(")!!'), jf3ze['add'](o4msqn, cdgrb, akdrx);case wq46puh:
            yav$l = wt0c5g8;} else switch (yav$l) {case wg50c8b:
            {
              jf3ze['tagName'];
            }'http://www.w3.org/1999/xhtml' === hu58t0[''] && o4msqn['match'](/^(?:disabled|checked|selected)$/i) || qnmos['warning']('attribute "' + o4msqn + '" missed value!! "' + o4msqn + '" instead2!!'), jf3ze['add'](o4msqn, o4msqn, akdrx), akdrx = fz13j, yav$l = wfonjwe;break;case wq46puh:
            qnmos['warning']('attribute space is required"' + o4msqn + '\x22!!');case wt0c5g8:
            yav$l = wfonjwe, akdrx = fz13j;break;case wsq64mp:
            yav$l = wbdxkg, akdrx = fz13j;break;case wbyxkr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}fz13j++;
  }
}function wct8g50(onfje, upt64, c085g) {
  for (var $dax = onfje['tagName'], u4qp = null, swonmj = onfje['length']; swonmj--;) {
    var drxay$ = onfje[swonmj],
        ut5c = drxay$['qName'],
        bg58c0 = drxay$['value'],
        dkbrg = ut5c['indexOf'](':');if (dkbrg > 0x0) var z3jef = drxay$['prefix'] = ut5c['slice'](0x0, dkbrg),
        smpq = ut5c['slice'](dkbrg + 0x1),
        hut6 = 'xmlns' === z3jef && smpq;else smpq = ut5c, z3jef = null, hut6 = 'xmlns' === ut5c && '';drxay$['localName'] = smpq, hut6 !== !0x1 && (null == u4qp && (u4qp = {}, wc5bg08(c085g, c085g = {})), c085g[hut6] = u4qp[hut6] = bg58c0, drxay$['uri'] = 'http://www.w3.org/2000/xmlns/', upt64['startPrefixMapping'](hut6, bg58c0));
  }for (var swonmj = onfje['length']; swonmj--;) {
    drxay$ = onfje[swonmj];var z3jef = drxay$['prefix'];z3jef && ('xml' === z3jef && (drxay$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== z3jef && (drxay$['uri'] = c085g[z3jef || '']));
  }var dkbrg = $dax['indexOf'](':');dkbrg > 0x0 ? (z3jef = onfje['prefix'] = $dax['slice'](0x0, dkbrg), smpq = onfje['localName'] = $dax['slice'](dkbrg + 0x1)) : (z3jef = null, smpq = onfje['localName'] = $dax);var p6t0h = onfje['uri'] = c085g[z3jef || ''];if (upt64['startElement'](p6t0h, smpq, $dax, onfje), !onfje['closed']) return onfje['currentNSMap'] = c085g, onfje['localNSMap'] = u4qp, !0x0;if (upt64['endElement'](p6t0h, smpq, $dax), u4qp) {
    for (z3jef in u4qp) upt64['endPrefixMapping'](z3jef);
  }
}function wkdcg5b(nojwfs, sqonmw, gt508c, xbdrk, rdyxak) {
  if (/^(?:script|textarea)$/i['test'](gt508c)) {
    var qh6m4p = nojwfs['indexOf']('</' + gt508c + '>', sqonmw),
        nofws = nojwfs['substring'](sqonmw + 0x1, qh6m4p);if (/[&<]/['test'](nofws)) return (/^script$/i['test'](gt508c) ? (rdyxak['characters'](nofws, 0x0, nofws['length']), qh6m4p) : (nofws = nofws['replace'](/&#?\w+;/g, xbdrk), rdyxak['characters'](nofws, 0x0, nofws['length']), qh6m4p)
    );
  }return sqonmw + 0x1;
}function w$drxa(wfso, akry, bdckg, fjwzne) {
  var rxkgb = fjwzne[bdckg];return null == rxkgb && (rxkgb = wfso['lastIndexOf']('</' + bdckg + '>'), akry > rxkgb && (rxkgb = wfso['lastIndexOf']('</' + bdckg)), fjwzne[bdckg] = rxkgb), akry > rxkgb;
}function wc5bg08(wsnf, njwosf) {
  for (var oefjnw in wsnf) njwosf[oefjnw] = wsnf[oefjnw];
}function wezwf1j(wosmj, wjz1, p0tu6, oqs64m) {
  var tg058 = wosmj['charAt'](wjz1 + 0x2);switch (tg058) {case '-':
      if ('-' === wosmj['charAt'](wjz1 + 0x3)) {
        var yv9x$a = wosmj['indexOf']('-->', wjz1 + 0x4);return yv9x$a > wjz1 ? (p0tu6['comment'](wosmj, wjz1 + 0x4, yv9x$a - wjz1 - 0x4), yv9x$a + 0x3) : (oqs64m['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == wosmj['substr'](wjz1 + 0x3, 0x6)) {
        var yv9x$a = wosmj['indexOf'](']]>', wjz1 + 0x9);return p0tu6['startCDATA'](), p0tu6['characters'](wosmj, wjz1 + 0x9, yv9x$a - wjz1 - 0x9), p0tu6['endCDATA'](), yv9x$a + 0x3;
      }var yv9l = wnowqsm(wosmj, wjz1),
          f3jze1 = yv9l['length'];if (f3jze1 > 0x1 && /!doctype/i['test'](yv9l[0x0][0x0])) {
        var av$y9x = yv9l[0x1][0x0],
            quhp46 = f3jze1 > 0x3 && /^public$/i['test'](yv9l[0x2][0x0]) && yv9l[0x3][0x0],
            nsm = f3jze1 > 0x4 && yv9l[0x4][0x0],
            bgdkcr = yv9l[f3jze1 - 0x1];return p0tu6['startDTD'](av$y9x, quhp46 && quhp46['replace'](/^(['"])(.*?)\1$/, '$2'), nsm && nsm['replace'](/^(['"])(.*?)\1$/, '$2')), p0tu6['endDTD'](), bgdkcr['index'] + bgdkcr[0x0]['length'];
      }}return -0x1;
}function wtup(dgckrb, somjn, ut0p) {
  var xvya$r = dgckrb['indexOf']('?>', somjn);if (xvya$r) {
    var msowj = dgckrb['substring'](somjn, xvya$r)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (msowj) {
      {
        msowj[0x0]['length'];
      }return ut0p['processingInstruction'](msowj[0x1], msowj[0x2]), xvya$r + 0x2;
    }return -0x1;
  }return -0x1;
}function wqm4so6() {}function wgbkdrc(ybr, njoswm) {
  return ybr['__proto__'] = njoswm, ybr;
}function wnowqsm(h6pu0t, kbcg58) {
  var p08,
      jzfe13 = [],
      xrbgdk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (xrbgdk['lastIndex'] = kbcg58, xrbgdk['exec'](h6pu0t); p08 = xrbgdk['exec'](h6pu0t);) if (jzfe13['push'](p08), p08[0x1]) return jzfe13;
}var wcbg80 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    wz3jfe1 = new RegExp('[\\-\\.0-9' + wcbg80['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    wjfz1we = new RegExp('^' + wcbg80['source'] + wz3jfe1['source'] + '*(?::' + wcbg80['source'] + wz3jfe1['source'] + '*)?$'),
    wmosjn = 0x0,
    wfonjwe = 0x1,
    wg50c8b = 0x2,
    wsq64mp = 0x3,
    wbdxkg = 0x4,
    wq46puh = 0x5,
    wt0c5g8 = 0x6,
    wbyxkr = 0x7;wp80t['prototype'] = { 'parse': function (_av$9l, phtu80, e3172z) {
    var arx$yv = this['domBuilder'];arx$yv['startDocument'](), wc5bg08(phtu80, phtu80 = {}), w$vax9(_av$9l, phtu80, e3172z, arx$yv, this['errorHandler']), arx$yv['endDocument']();
  } }, wqm4so6['prototype'] = { 'setTagName': function ($a9lvy) {
    if (!wjfz1we['test']($a9lvy)) throw new Error('invalid tagName:' + $a9lvy);this['tagName'] = $a9lvy;
  }, 'add': function (yl$va, z132e7, nq4os) {
    if (!wjfz1we['test'](yl$va)) throw new Error('invalid attribute:' + yl$va);this[this['length']++] = { 'qName': yl$va, 'value': z132e7, 'offset': nq4os };
  }, 'length': 0x0, 'getLocalName': function (fewjnz) {
    return this[fewjnz]['localName'];
  }, 'getLocator': function (x$yarv) {
    return this[x$yarv]['locator'];
  }, 'getQName': function (ayrkx) {
    return this[ayrkx]['qName'];
  }, 'getURI': function (jzf1ew) {
    return this[jzf1ew]['uri'];
  }, 'getValue': function (p8ut0) {
    return this[p8ut0]['value'];
  } }, wgbkdrc({}, wgbkdrc['prototype']) instanceof wgbkdrc || (wgbkdrc = function (c5t8, b8c5g) {
  function bc0g85() {}bc0g85['prototype'] = b8c5g, bc0g85 = new bc0g85();for (b8c5g in c5t8) bc0g85[b8c5g] = c5t8[b8c5g];return bc0g85;
}), exports['XMLReader'] = wp80t;