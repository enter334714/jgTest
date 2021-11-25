var B = wx.$z;
function zf6vl() {}function zyd8rb(kr8b_y, g64h, bry8, e9asxz, uw025) {
  function zodty(rbdy8) {
    if (rbdy8 > 0xffff) {
      rbdy8 -= 0x10000;var _ur2w = 0xd800 + (rbdy8 >> 0xa),
          p614h = 0xdc00 + (0x3ff & rbdy8);return String['fromCharCode'](_ur2w, p614h);
    }return String['fromCharCode'](rbdy8);
  }function b58_r(ifvnl) {
    var f6lvg4 = ifvnl['slice'](0x1, -0x1);return f6lvg4 in bry8 ? bry8[f6lvg4] : '#' === f6lvg4['charAt'](0x0) ? zodty(parseInt(f6lvg4['substr'](0x1)['replace']('x', '0x'))) : (uw025['error']('entity not found:' + ifvnl), ifvnl);
  }function _285ur(i$73) {
    if (i$73 > p4g1h9) {
      var qimj$ = kr8b_y['substring'](p4g1h9, i$73)['replace'](/&#?\w+;/g, b58_r);db8kyo && mn7q(p4g1h9), e9asxz['characters'](qimj$, 0x0, i$73 - p4g1h9), p4g1h9 = i$73;
    }
  }function mn7q(ru_w52, ex1s9a) {
    for (; ru_w52 >= ghf6 && (ex1s9a = ru825['exec'](kr8b_y));) xe9asz = ex1s9a['index'], ghf6 = xe9asz + ex1s9a[0x0]['length'], db8kyo['lineNumber']++;db8kyo['columnNumber'] = ru_w52 - xe9asz + 0x1;
  }for (var xe9asz = 0x0, ghf6 = 0x0, ru825 = /.*(?:\r\n?|\n)|.*$/g, db8kyo = e9asxz['locator'], v67ln = [{ 'currentNSMap': g64h }], n7im3l = {}, p4g1h9 = 0x0;;) {
    try {
      var tadezo = kr8b_y['indexOf']('<', p4g1h9);if (0x0 > tadezo) {
        if (!kr8b_y['substr'](p4g1h9)['match'](/^\s*$/)) {
          var eazts = e9asxz['doc'],
              txsze = eazts['createTextNode'](kr8b_y['substr'](p4g1h9));eazts['appendChild'](txsze), e9asxz['currentElement'] = txsze;
        }return;
      }switch (tadezo > p4g1h9 && _285ur(tadezo), kr8b_y['charAt'](tadezo + 0x1)) {case '/':
          var _b5r = kr8b_y['indexOf']('>', tadezo + 0x3),
              xes9a = kr8b_y['substring'](tadezo + 0x2, _b5r),
              u2wr_ = v67ln['pop']();0x0 > _b5r ? (xes9a = kr8b_y['substring'](tadezo + 0x2)['replace'](/[\s<].*/, ''), uw025['error']('end tag name: ' + xes9a + ' is not complete:' + u2wr_['tagName']), _b5r = tadezo + 0x1 + xes9a['length']) : xes9a['match'](/\s</) && (xes9a = xes9a['replace'](/[\s<].*/, ''), uw025['error']('end tag name: ' + xes9a + ' maybe not complete'), _b5r = tadezo + 0x1 + xes9a['length']);var odktb = u2wr_['localNSMap'],
              szex9 = u2wr_['tagName'] == xes9a,
              todze = szex9 || u2wr_['tagName'] && u2wr_['tagName']['toLowerCase']() == xes9a['toLowerCase']();if (todze) {
            if (e9asxz['endElement'](u2wr_['uri'], u2wr_['localName'], xes9a), odktb) {
              for (var nv7 in odktb) e9asxz['endPrefixMapping'](nv7);
            }szex9 || uw025['fatalError']('end tag name: ' + xes9a + ' is not match the current start tagName:' + u2wr_['tagName']);
          } else v67ln['push'](u2wr_);_b5r++;break;case '?':
          db8kyo && mn7q(tadezo), _b5r = z_2ru(kr8b_y, tadezo, e9asxz);break;case '!':
          db8kyo && mn7q(tadezo), _b5r = zotybkd(kr8b_y, tadezo, e9asxz, uw025);break;default:
          db8kyo && mn7q(tadezo);var eztx = new zozde(),
              kzo = v67ln[v67ln['length'] - 0x1]['currentNSMap'],
              _b5r = zqm$7(kr8b_y, tadezo, eztx, kzo, b58_r, uw025),
              pgfv6 = eztx['length'];if (!eztx['closed'] && zozkytd(kr8b_y, _b5r, eztx['tagName'], n7im3l) && (eztx['closed'] = !0x0, bry8['nbsp'] || uw025['warning']('unclosed xml attribute')), db8kyo && pgfv6) {
            for (var aztde = z_85rkb(db8kyo, {}), phg491 = 0x0; pgfv6 > phg491; phg491++) {
              var _ky8b = eztx[phg491];mn7q(_ky8b['offset']), _ky8b['locator'] = z_85rkb(db8kyo, {});
            }e9asxz['locator'] = aztde, zhgpf46(eztx, e9asxz, kzo) && v67ln['push'](eztx), e9asxz['locator'] = db8kyo;
          } else zhgpf46(eztx, e9asxz, kzo) && v67ln['push'](eztx);'http://www.w3.org/1999/xhtml' !== eztx['uri'] || eztx['closed'] ? _b5r++ : _b5r = zilnv7(kr8b_y, _b5r, eztx['tagName'], b58_r, e9asxz);}
    } catch (xszta) {
      uw025['error']('element parse error: ' + xszta), _b5r = -0x1;
    }_b5r > p4g1h9 ? p4g1h9 = _b5r : _285ur(Math['max'](tadezo, p4g1h9) + 0x1);
  }
}function z_85rkb(mvnil7, zatode) {
  return zatode['lineNumber'] = mvnil7['lineNumber'], zatode['columnNumber'] = mvnil7['columnNumber'], zatode;
}function zqm$7(dzey, zktydo, imnvl, hfp46, dzate, i3$mq7) {
  for (var rd8y, h1x9g, i7m$3 = ++zktydo, x1hsa9 = zxgh91p;;) {
    var xe1a = dzey['charAt'](i7m$3);switch (xe1a) {case '=':
        if (x1hsa9 === zrk8dby) rd8y = dzey['slice'](zktydo, i7m$3), x1hsa9 = zzydeto;else {
          if (x1hsa9 !== z_kb8) throw new Error('attribute equal must after attrName');x1hsa9 = zzydeto;
        }break;case '\x27':case '\x22':
        if (x1hsa9 === zzydeto || x1hsa9 === zrk8dby) {
          if (x1hsa9 === zrk8dby && (i3$mq7['warning']('attribute value must after "="'), rd8y = dzey['slice'](zktydo, i7m$3)), zktydo = i7m$3 + 0x1, i7m$3 = dzey['indexOf'](xe1a, zktydo), !(i7m$3 > 0x0)) throw new Error('attribute value no end \'' + xe1a + '\' match');h1x9g = dzey['slice'](zktydo, i7m$3)['replace'](/&#?\w+;/g, dzate), imnvl['add'](rd8y, h1x9g, zktydo - 0x1), x1hsa9 = zm7nq3i;
        } else {
          if (x1hsa9 != zetdoaz) throw new Error('attribute value must after "="');h1x9g = dzey['slice'](zktydo, i7m$3)['replace'](/&#?\w+;/g, dzate), imnvl['add'](rd8y, h1x9g, zktydo), i3$mq7['warning']('attribute "' + rd8y + '" missed start quot(' + xe1a + ')!!'), zktydo = i7m$3 + 0x1, x1hsa9 = zm7nq3i;
        }break;case '/':
        switch (x1hsa9) {case zxgh91p:
            imnvl['setTagName'](dzey['slice'](zktydo, i7m$3));case zm7nq3i:case zrwu_25:case zztkdoy:
            x1hsa9 = zztkdoy, imnvl['closed'] = !0x0;case zetdoaz:case zrk8dby:case z_kb8:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return i3$mq7['error']('unexpected end of input'), x1hsa9 == zxgh91p && imnvl['setTagName'](dzey['slice'](zktydo, i7m$3)), i7m$3;case '>':
        switch (x1hsa9) {case zxgh91p:
            imnvl['setTagName'](dzey['slice'](zktydo, i7m$3));case zm7nq3i:case zrwu_25:case zztkdoy:
            break;case zetdoaz:case zrk8dby:
            h1x9g = dzey['slice'](zktydo, i7m$3), '/' === h1x9g['slice'](-0x1) && (imnvl['closed'] = !0x0, h1x9g = h1x9g['slice'](0x0, -0x1));case z_kb8:
            x1hsa9 === z_kb8 && (h1x9g = rd8y), x1hsa9 == zetdoaz ? (i3$mq7['warning']('attribute "' + h1x9g + '" missed quot(")!!'), imnvl['add'](rd8y, h1x9g['replace'](/&#?\w+;/g, dzate), zktydo)) : ('http://www.w3.org/1999/xhtml' === hfp46[''] && h1x9g['match'](/^(?:disabled|checked|selected)$/i) || i3$mq7['warning']('attribute "' + h1x9g + '" missed value!! "' + h1x9g + '" instead!!'), imnvl['add'](h1x9g, h1x9g, zktydo));break;case zzydeto:
            throw new Error('attribute value missed!!');}return i7m$3;case '\u0080':
        xe1a = '\x20';default:
        if ('\x20' >= xe1a) switch (x1hsa9) {case zxgh91p:
            imnvl['setTagName'](dzey['slice'](zktydo, i7m$3)), x1hsa9 = zrwu_25;break;case zrk8dby:
            rd8y = dzey['slice'](zktydo, i7m$3), x1hsa9 = z_kb8;break;case zetdoaz:
            var h1x9g = dzey['slice'](zktydo, i7m$3)['replace'](/&#?\w+;/g, dzate);i3$mq7['warning']('attribute "' + h1x9g + '" missed quot(")!!'), imnvl['add'](rd8y, h1x9g, zktydo);case zm7nq3i:
            x1hsa9 = zrwu_25;} else switch (x1hsa9) {case z_kb8:
            {
              imnvl['tagName'];
            }'http://www.w3.org/1999/xhtml' === hfp46[''] && rd8y['match'](/^(?:disabled|checked|selected)$/i) || i3$mq7['warning']('attribute "' + rd8y + '" missed value!! "' + rd8y + '" instead2!!'), imnvl['add'](rd8y, rd8y, zktydo), zktydo = i7m$3, x1hsa9 = zrk8dby;break;case zm7nq3i:
            i3$mq7['warning']('attribute space is required"' + rd8y + '\x22!!');case zrwu_25:
            x1hsa9 = zrk8dby, zktydo = i7m$3;break;case zzydeto:
            x1hsa9 = zetdoaz, zktydo = i7m$3;break;case zztkdoy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}i7m$3++;
  }
}function zhgpf46(ytko, p19xhs, bo8) {
  for (var n73iml = ytko['tagName'], p4ghf = null, g4vp6 = ytko['length']; g4vp6--;) {
    var lmn7iv = ytko[g4vp6],
        mn7i = lmn7iv['qName'],
        fn6lv = lmn7iv['value'],
        odzety = mn7i['indexOf'](':');if (odzety > 0x0) var r_8ykb = lmn7iv['prefix'] = mn7i['slice'](0x0, odzety),
        fpg4h = mn7i['slice'](odzety + 0x1),
        exa1 = 'xmlns' === r_8ykb && fpg4h;else fpg4h = mn7i, r_8ykb = null, exa1 = 'xmlns' === mn7i && '';lmn7iv['localName'] = fpg4h, exa1 !== !0x1 && (null == p4ghf && (p4ghf = {}, zdykob8(bo8, bo8 = {})), bo8[exa1] = p4ghf[exa1] = fn6lv, lmn7iv['uri'] = 'http://www.w3.org/2000/xmlns/', p19xhs['startPrefixMapping'](exa1, fn6lv));
  }for (var g4vp6 = ytko['length']; g4vp6--;) {
    lmn7iv = ytko[g4vp6];var r_8ykb = lmn7iv['prefix'];r_8ykb && ('xml' === r_8ykb && (lmn7iv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r_8ykb && (lmn7iv['uri'] = bo8[r_8ykb || '']));
  }var odzety = n73iml['indexOf'](':');odzety > 0x0 ? (r_8ykb = ytko['prefix'] = n73iml['slice'](0x0, odzety), fpg4h = ytko['localName'] = n73iml['slice'](odzety + 0x1)) : (r_8ykb = null, fpg4h = ytko['localName'] = n73iml);var gpv46 = ytko['uri'] = bo8[r_8ykb || ''];if (p19xhs['startElement'](gpv46, fpg4h, n73iml, ytko), !ytko['closed']) return ytko['currentNSMap'] = bo8, ytko['localNSMap'] = p4ghf, !0x0;if (p19xhs['endElement'](gpv46, fpg4h, n73iml), p4ghf) {
    for (r_8ykb in p4ghf) p19xhs['endPrefixMapping'](r_8ykb);
  }
}function zilnv7(zykd, eaodt, nmlvi7, pg41h9, ha9x1s) {
  if (/^(?:script|textarea)$/i['test'](nmlvi7)) {
    var oyb = zykd['indexOf']('</' + nmlvi7 + '>', eaodt),
        p46fh = zykd['substring'](eaodt + 0x1, oyb);if (/[&<]/['test'](p46fh)) return (/^script$/i['test'](nmlvi7) ? (ha9x1s['characters'](p46fh, 0x0, p46fh['length']), oyb) : (p46fh = p46fh['replace'](/&#?\w+;/g, pg41h9), ha9x1s['characters'](p46fh, 0x0, p46fh['length']), oyb)
    );
  }return eaodt + 0x1;
}function zozkytd(h9g1p, gp1h9x, xzsa9, qm$3ij) {
  var vf67l = qm$3ij[xzsa9];return null == vf67l && (vf67l = h9g1p['lastIndexOf']('</' + xzsa9 + '>'), gp1h9x > vf67l && (vf67l = h9g1p['lastIndexOf']('</' + xzsa9)), qm$3ij[xzsa9] = vf67l), gp1h9x > vf67l;
}function zdykob8(d8ybk, bytdko) {
  for (var pvf46g in d8ybk) bytdko[pvf46g] = d8ybk[pvf46g];
}function zotybkd(ad, ozy, hp91, hax1s9) {
  var m3$j = ad['charAt'](ozy + 0x2);switch (m3$j) {case '-':
      if ('-' === ad['charAt'](ozy + 0x3)) {
        var a1xes9 = ad['indexOf']('-->', ozy + 0x4);return a1xes9 > ozy ? (hp91['comment'](ad, ozy + 0x4, a1xes9 - ozy - 0x4), a1xes9 + 0x3) : (hax1s9['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ad['substr'](ozy + 0x3, 0x6)) {
        var a1xes9 = ad['indexOf'](']]>', ozy + 0x9);return hp91['startCDATA'](), hp91['characters'](ad, ozy + 0x9, a1xes9 - ozy - 0x9), hp91['endCDATA'](), a1xes9 + 0x3;
      }var ezoda = z_rb82(ad, ozy),
          l6f4gv = ezoda['length'];if (l6f4gv > 0x1 && /!doctype/i['test'](ezoda[0x0][0x0])) {
        var d8bykr = ezoda[0x1][0x0],
            gvp4 = l6f4gv > 0x3 && /^public$/i['test'](ezoda[0x2][0x0]) && ezoda[0x3][0x0],
            nq7im = l6f4gv > 0x4 && ezoda[0x4][0x0],
            gpfh4 = ezoda[l6f4gv - 0x1];return hp91['startDTD'](d8bykr, gvp4 && gvp4['replace'](/^(['"])(.*?)\1$/, '$2'), nq7im && nq7im['replace'](/^(['"])(.*?)\1$/, '$2')), hp91['endDTD'](), gpfh4['index'] + gpfh4[0x0]['length'];
      }}return -0x1;
}function z_2ru(qi7m, r_28b, v4lf) {
  var eotad = qi7m['indexOf']('?>', r_28b);if (eotad) {
    var jmi3 = qi7m['substring'](r_28b, eotad)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jmi3) {
      {
        jmi3[0x0]['length'];
      }return v4lf['processingInstruction'](jmi3[0x1], jmi3[0x2]), eotad + 0x2;
    }return -0x1;
  }return -0x1;
}function zozde() {}function zsexa91(r2b58_, lnvmi) {
  return r2b58_['__proto__'] = lnvmi, r2b58_;
}function z_rb82(i$q3j, ex91s) {
  var o8dkb,
      j$3mqi = [],
      oydkb8 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (oydkb8['lastIndex'] = ex91s, oydkb8['exec'](i$q3j); o8dkb = oydkb8['exec'](i$q3j);) if (j$3mqi['push'](o8dkb), o8dkb[0x1]) return j$3mqi;
}var z$imq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zjq$m3i = new RegExp('[\\-\\.0-9' + z$imq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zb_ky8r = new RegExp('^' + z$imq['source'] + zjq$m3i['source'] + '*(?::' + z$imq['source'] + zjq$m3i['source'] + '*)?$'),
    zxgh91p = 0x0,
    zrk8dby = 0x1,
    z_kb8 = 0x2,
    zzydeto = 0x3,
    zetdoaz = 0x4,
    zm7nq3i = 0x5,
    zrwu_25 = 0x6,
    zztkdoy = 0x7;zf6vl['prototype'] = { 'parse': function (q$m3i, tbd, a9x1) {
    var mi3ln7 = this['domBuilder'];mi3ln7['startDocument'](), zdykob8(tbd, tbd = {}), zyd8rb(q$m3i, tbd, a9x1, mi3ln7, this['errorHandler']), mi3ln7['endDocument']();
  } }, zozde['prototype'] = { 'setTagName': function (vi7m) {
    if (!zb_ky8r['test'](vi7m)) throw new Error('invalid tagName:' + vi7m);this['tagName'] = vi7m;
  }, 'add': function (kdtby, ktdbyo, f7nv6l) {
    if (!zb_ky8r['test'](kdtby)) throw new Error('invalid attribute:' + kdtby);this[this['length']++] = { 'qName': kdtby, 'value': ktdbyo, 'offset': f7nv6l };
  }, 'length': 0x0, 'getLocalName': function (vf64) {
    return this[vf64]['localName'];
  }, 'getLocator': function (gf4pv) {
    return this[gf4pv]['locator'];
  }, 'getQName': function (brk8d) {
    return this[brk8d]['qName'];
  }, 'getURI': function (m3$7qi) {
    return this[m3$7qi]['uri'];
  }, 'getValue': function (xetzsa) {
    return this[xetzsa]['value'];
  } }, zsexa91({}, zsexa91['prototype']) instanceof zsexa91 || (zsexa91 = function (mqn3, _u52) {
  function szaeo() {}szaeo['prototype'] = _u52, szaeo = new szaeo();for (_u52 in mqn3) szaeo[_u52] = mqn3[_u52];return szaeo;
}), exports['XMLReader'] = zf6vl;