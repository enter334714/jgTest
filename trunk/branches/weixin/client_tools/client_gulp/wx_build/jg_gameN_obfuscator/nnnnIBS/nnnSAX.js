var A = wx.$N;
function n_jq9pi() {}function n_k4hm$(nzlm, qfjiyg, jpy9i, fv3rg, ab2tw6) {
  function $_khl(ndlzmx) {
    if (ndlzmx > 0xffff) {
      ndlzmx -= 0x10000;var e3aro8 = 0xd800 + (ndlzmx >> 0xa),
          u1 = 0xdc00 + (0x3ff & ndlzmx);return String['fromCharCode'](e3aro8, u1);
    }return String['fromCharCode'](ndlzmx);
  }function c705(ov83er) {
    var k$_lm = ov83er['slice'](0x1, -0x1);return k$_lm in jpy9i ? jpy9i[k$_lm] : '#' === k$_lm['charAt'](0x0) ? $_khl(parseInt(k$_lm['substr'](0x1)['replace']('x', '0x'))) : (ab2tw6['error']('entity not found:' + ov83er), ov83er);
  }function ml$_h(gvry3f) {
    if (gvry3f > v8o) {
      var r38egv = nzlm['substring'](v8o, gvry3f)['replace'](/&#?\w+;/g, c705);vr8e && hdxzm(v8o), fv3rg['characters'](r38egv, 0x0, gvry3f - v8o), v8o = gvry3f;
    }
  }function hdxzm(dc7zs, vyfig) {
    for (; dc7zs >= p05s7 && (vyfig = ivjgyf['exec'](nzlm));) q95j0 = vyfig['index'], p05s7 = q95j0 + vyfig[0x0]['length'], vr8e['lineNumber']++;vr8e['columnNumber'] = dc7zs - q95j0 + 0x1;
  }for (var q95j0 = 0x0, p05s7 = 0x0, ivjgyf = /.*(?:\r\n?|\n)|.*$/g, vr8e = fv3rg['locator'], _$lh = [{ 'currentNSMap': qfjiyg }], y9fjqi = {}, v8o = 0x0;;) {
    try {
      var iyfgqj = nzlm['indexOf']('<', v8o);if (0x0 > iyfgqj) {
        if (!nzlm['substr'](v8o)['match'](/^\s*$/)) {
          var pq5j90 = fv3rg['doc'],
              gf8v3 = pq5j90['createTextNode'](nzlm['substr'](v8o));pq5j90['appendChild'](gf8v3), fv3rg['currentElement'] = gf8v3;
        }return;
      }switch (iyfgqj > v8o && ml$_h(iyfgqj), nzlm['charAt'](iyfgqj + 0x1)) {case '/':
          var q5j0p = nzlm['indexOf']('>', iyfgqj + 0x3),
              ve8g = nzlm['substring'](iyfgqj + 0x2, q5j0p),
              aer = _$lh['pop']();0x0 > q5j0p ? (ve8g = nzlm['substring'](iyfgqj + 0x2)['replace'](/[\s<].*/, ''), ab2tw6['error']('end tag name: ' + ve8g + ' is not complete:' + aer['tagName']), q5j0p = iyfgqj + 0x1 + ve8g['length']) : ve8g['match'](/\s</) && (ve8g = ve8g['replace'](/[\s<].*/, ''), ab2tw6['error']('end tag name: ' + ve8g + ' maybe not complete'), q5j0p = iyfgqj + 0x1 + ve8g['length']);var k4_mh = aer['localNSMap'],
              xdhk = aer['tagName'] == ve8g,
              mldzx = xdhk || aer['tagName'] && aer['tagName']['toLowerCase']() == ve8g['toLowerCase']();if (mldzx) {
            if (fv3rg['endElement'](aer['uri'], aer['localName'], ve8g), k4_mh) {
              for (var hzmxdl in k4_mh) fv3rg['endPrefixMapping'](hzmxdl);
            }xdhk || ab2tw6['fatalError']('end tag name: ' + ve8g + ' is not match the current start tagName:' + aer['tagName']);
          } else _$lh['push'](aer);q5j0p++;break;case '?':
          vr8e && hdxzm(iyfgqj), q5j0p = n__m4$hk(nzlm, iyfgqj, fv3rg);break;case '!':
          vr8e && hdxzm(iyfgqj), q5j0p = n_ryvfig(nzlm, iyfgqj, fv3rg, ab2tw6);break;default:
          vr8e && hdxzm(iyfgqj);var mh$_4 = new n_fgv38(),
              yfjgqi = _$lh[_$lh['length'] - 0x1]['currentNSMap'],
              q5j0p = n_lzsd(nzlm, iyfgqj, mh$_4, yfjgqi, c705, ab2tw6),
              $_uk = mh$_4['length'];if (!mh$_4['closed'] && n_sp5c(nzlm, q5j0p, mh$_4['tagName'], y9fjqi) && (mh$_4['closed'] = !0x0, jpy9i['nbsp'] || ab2tw6['warning']('unclosed xml attribute')), vr8e && $_uk) {
            for (var w2aeo6 = n_sncd7(vr8e, {}), igrf = 0x0; $_uk > igrf; igrf++) {
              var dncz7 = mh$_4[igrf];hdxzm(dncz7['offset']), dncz7['locator'] = n_sncd7(vr8e, {});
            }fv3rg['locator'] = w2aeo6, n_xldsn(mh$_4, fv3rg, yfjgqi) && _$lh['push'](mh$_4), fv3rg['locator'] = vr8e;
          } else n_xldsn(mh$_4, fv3rg, yfjgqi) && _$lh['push'](mh$_4);'http://www.w3.org/1999/xhtml' !== mh$_4['uri'] || mh$_4['closed'] ? q5j0p++ : q5j0p = n_vgf3y(nzlm, q5j0p, mh$_4['tagName'], c705, fv3rg);}
    } catch (eow62a) {
      ab2tw6['error']('element parse error: ' + eow62a), q5j0p = -0x1;
    }q5j0p > v8o ? v8o = q5j0p : ml$_h(Math['max'](iyfgqj, v8o) + 0x1);
  }
}function n_sncd7(orve38, lsndzx) {
  return lsndzx['lineNumber'] = orve38['lineNumber'], lsndzx['columnNumber'] = orve38['columnNumber'], lsndzx;
}function n_lzsd(dnzcxs, snld, rgf, q7p90, jqi90p, rivfg) {
  for (var xzldmh, dnsxzc, igjyvf = ++snld, s07n5c = n_o8e3a;;) {
    var o3e8rv = dnzcxs['charAt'](igjyvf);switch (o3e8rv) {case '=':
        if (s07n5c === n__m$h4) xzldmh = dnzcxs['slice'](snld, igjyvf), s07n5c = n_dhxzl;else {
          if (s07n5c !== n_v3frgy) throw new Error('attribute equal must after attrName');s07n5c = n_dhxzl;
        }break;case '\x27':case '\x22':
        if (s07n5c === n_dhxzl || s07n5c === n__m$h4) {
          if (s07n5c === n__m$h4 && (rivfg['warning']('attribute value must after "="'), xzldmh = dnzcxs['slice'](snld, igjyvf)), snld = igjyvf + 0x1, igjyvf = dnzcxs['indexOf'](o3e8rv, snld), !(igjyvf > 0x0)) throw new Error('attribute value no end \'' + o3e8rv + '\' match');dnsxzc = dnzcxs['slice'](snld, igjyvf)['replace'](/&#?\w+;/g, jqi90p), rgf['add'](xzldmh, dnsxzc, snld - 0x1), s07n5c = n__$hmk;
        } else {
          if (s07n5c != n_s7d) throw new Error('attribute value must after "="');dnsxzc = dnzcxs['slice'](snld, igjyvf)['replace'](/&#?\w+;/g, jqi90p), rgf['add'](xzldmh, dnsxzc, snld), rivfg['warning']('attribute "' + xzldmh + '" missed start quot(' + o3e8rv + ')!!'), snld = igjyvf + 0x1, s07n5c = n__$hmk;
        }break;case '/':
        switch (s07n5c) {case n_o8e3a:
            rgf['setTagName'](dnzcxs['slice'](snld, igjyvf));case n__$hmk:case n_s57n0:case n_fqyji:
            s07n5c = n_fqyji, rgf['closed'] = !0x0;case n_s7d:case n__m$h4:case n_v3frgy:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return rivfg['error']('unexpected end of input'), s07n5c == n_o8e3a && rgf['setTagName'](dnzcxs['slice'](snld, igjyvf)), igjyvf;case '>':
        switch (s07n5c) {case n_o8e3a:
            rgf['setTagName'](dnzcxs['slice'](snld, igjyvf));case n__$hmk:case n_s57n0:case n_fqyji:
            break;case n_s7d:case n__m$h4:
            dnsxzc = dnzcxs['slice'](snld, igjyvf), '/' === dnsxzc['slice'](-0x1) && (rgf['closed'] = !0x0, dnsxzc = dnsxzc['slice'](0x0, -0x1));case n_v3frgy:
            s07n5c === n_v3frgy && (dnsxzc = xzldmh), s07n5c == n_s7d ? (rivfg['warning']('attribute "' + dnsxzc + '" missed quot(")!!'), rgf['add'](xzldmh, dnsxzc['replace'](/&#?\w+;/g, jqi90p), snld)) : ('http://www.w3.org/1999/xhtml' === q7p90[''] && dnsxzc['match'](/^(?:disabled|checked|selected)$/i) || rivfg['warning']('attribute "' + dnsxzc + '" missed value!! "' + dnsxzc + '" instead!!'), rgf['add'](dnsxzc, dnsxzc, snld));break;case n_dhxzl:
            throw new Error('attribute value missed!!');}return igjyvf;case '\u0080':
        o3e8rv = '\x20';default:
        if ('\x20' >= o3e8rv) switch (s07n5c) {case n_o8e3a:
            rgf['setTagName'](dnzcxs['slice'](snld, igjyvf)), s07n5c = n_s57n0;break;case n__m$h4:
            xzldmh = dnzcxs['slice'](snld, igjyvf), s07n5c = n_v3frgy;break;case n_s7d:
            var dnsxzc = dnzcxs['slice'](snld, igjyvf)['replace'](/&#?\w+;/g, jqi90p);rivfg['warning']('attribute "' + dnsxzc + '" missed quot(")!!'), rgf['add'](xzldmh, dnsxzc, snld);case n__$hmk:
            s07n5c = n_s57n0;} else switch (s07n5c) {case n_v3frgy:
            {
              rgf['tagName'];
            }'http://www.w3.org/1999/xhtml' === q7p90[''] && xzldmh['match'](/^(?:disabled|checked|selected)$/i) || rivfg['warning']('attribute "' + xzldmh + '" missed value!! "' + xzldmh + '" instead2!!'), rgf['add'](xzldmh, xzldmh, snld), snld = igjyvf, s07n5c = n__m$h4;break;case n__$hmk:
            rivfg['warning']('attribute space is required"' + xzldmh + '\x22!!');case n_s57n0:
            s07n5c = n__m$h4, snld = igjyvf;break;case n_dhxzl:
            s07n5c = n_s7d, snld = igjyvf;break;case n_fqyji:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}igjyvf++;
  }
}function n_xldsn(ipjq9y, ob, fjy) {
  for (var a3 = ipjq9y['tagName'], awob26 = null, ns7z = ipjq9y['length']; ns7z--;) {
    var ro3v8e = ipjq9y[ns7z],
        pqi9j0 = ro3v8e['qName'],
        q05p9 = ro3v8e['value'],
        fir = pqi9j0['indexOf'](':');if (fir > 0x0) var fg8r = ro3v8e['prefix'] = pqi9j0['slice'](0x0, fir),
        z75ns = pqi9j0['slice'](fir + 0x1),
        e38vro = 'xmlns' === fg8r && z75ns;else z75ns = pqi9j0, fg8r = null, e38vro = 'xmlns' === pqi9j0 && '';ro3v8e['localName'] = z75ns, e38vro !== !0x1 && (null == awob26 && (awob26 = {}, n_nmxdzl(fjy, fjy = {})), fjy[e38vro] = awob26[e38vro] = q05p9, ro3v8e['uri'] = 'http://www.w3.org/2000/xmlns/', ob['startPrefixMapping'](e38vro, q05p9));
  }for (var ns7z = ipjq9y['length']; ns7z--;) {
    ro3v8e = ipjq9y[ns7z];var fg8r = ro3v8e['prefix'];fg8r && ('xml' === fg8r && (ro3v8e['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== fg8r && (ro3v8e['uri'] = fjy[fg8r || '']));
  }var fir = a3['indexOf'](':');fir > 0x0 ? (fg8r = ipjq9y['prefix'] = a3['slice'](0x0, fir), z75ns = ipjq9y['localName'] = a3['slice'](fir + 0x1)) : (fg8r = null, z75ns = ipjq9y['localName'] = a3);var n5z7c = ipjq9y['uri'] = fjy[fg8r || ''];if (ob['startElement'](n5z7c, z75ns, a3, ipjq9y), !ipjq9y['closed']) return ipjq9y['currentNSMap'] = fjy, ipjq9y['localNSMap'] = awob26, !0x0;if (ob['endElement'](n5z7c, z75ns, a3), awob26) {
    for (fg8r in awob26) ob['endPrefixMapping'](fg8r);
  }
}function n_vgf3y(qp9iyj, xndzsc, pj0q9, lmdkx, e3vrg8) {
  if (/^(?:script|textarea)$/i['test'](pj0q9)) {
    var oa6b2w = qp9iyj['indexOf']('</' + pj0q9 + '>', xndzsc),
        xmhkl = qp9iyj['substring'](xndzsc + 0x1, oa6b2w);if (/[&<]/['test'](xmhkl)) return (/^script$/i['test'](pj0q9) ? (e3vrg8['characters'](xmhkl, 0x0, xmhkl['length']), oa6b2w) : (xmhkl = xmhkl['replace'](/&#?\w+;/g, lmdkx), e3vrg8['characters'](xmhkl, 0x0, xmhkl['length']), oa6b2w)
    );
  }return xndzsc + 0x1;
}function n_sp5c(xzlhd, k4uh_$, jiqgfy, jfvig) {
  var ryv = jfvig[jiqgfy];return null == ryv && (ryv = xzlhd['lastIndexOf']('</' + jiqgfy + '>'), k4uh_$ > ryv && (ryv = xzlhd['lastIndexOf']('</' + jiqgfy)), jfvig[jiqgfy] = ryv), k4uh_$ > ryv;
}function n_nmxdzl(ov38, qgjify) {
  for (var zxndm in ov38) qgjify[zxndm] = ov38[zxndm];
}function n_ryvfig(dnml, xdnszc, q9j0pi, iqyjp) {
  var irfyg = dnml['charAt'](xdnszc + 0x2);switch (irfyg) {case '-':
      if ('-' === dnml['charAt'](xdnszc + 0x3)) {
        var eo826 = dnml['indexOf']('-->', xdnszc + 0x4);return eo826 > xdnszc ? (q9j0pi['comment'](dnml, xdnszc + 0x4, eo826 - xdnszc - 0x4), eo826 + 0x3) : (iqyjp['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == dnml['substr'](xdnszc + 0x3, 0x6)) {
        var eo826 = dnml['indexOf'](']]>', xdnszc + 0x9);return q9j0pi['startCDATA'](), q9j0pi['characters'](dnml, xdnszc + 0x9, eo826 - xdnszc - 0x9), q9j0pi['endCDATA'](), eo826 + 0x3;
      }var xmkhl = n_igyq(dnml, xdnszc),
          a3o2 = xmkhl['length'];if (a3o2 > 0x1 && /!doctype/i['test'](xmkhl[0x0][0x0])) {
        var g8ver3 = xmkhl[0x1][0x0],
            hxlkmd = a3o2 > 0x3 && /^public$/i['test'](xmkhl[0x2][0x0]) && xmkhl[0x3][0x0],
            vjyfig = a3o2 > 0x4 && xmkhl[0x4][0x0],
            z7n5s = xmkhl[a3o2 - 0x1];return q9j0pi['startDTD'](g8ver3, hxlkmd && hxlkmd['replace'](/^(['"])(.*?)\1$/, '$2'), vjyfig && vjyfig['replace'](/^(['"])(.*?)\1$/, '$2')), q9j0pi['endDTD'](), z7n5s['index'] + z7n5s[0x0]['length'];
      }}return -0x1;
}function n__m4$hk(ero83a, xlznd, v8fg3r) {
  var hk$_m = ero83a['indexOf']('?>', xlznd);if (hk$_m) {
    var eoa328 = ero83a['substring'](xlznd, hk$_m)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (eoa328) {
      {
        eoa328[0x0]['length'];
      }return v8fg3r['processingInstruction'](eoa328[0x1], eoa328[0x2]), hk$_m + 0x2;
    }return -0x1;
  }return -0x1;
}function n_fgv38() {}function n_at6w2(xzldsn, mhl_x) {
  return xzldsn['__proto__'] = mhl_x, xzldsn;
}function n_igyq(ldhxkm, xlzdnm) {
  var igry,
      fg3yr = [],
      oe26wa = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (oe26wa['lastIndex'] = xlzdnm, oe26wa['exec'](ldhxkm); igry = oe26wa['exec'](ldhxkm);) if (fg3yr['push'](igry), igry[0x1]) return fg3yr;
}var n_$_lh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_o3rv8 = new RegExp('[\\-\\.0-9' + n_$_lh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_gr3e8v = new RegExp('^' + n_$_lh['source'] + n_o3rv8['source'] + '*(?::' + n_$_lh['source'] + n_o3rv8['source'] + '*)?$'),
    n_o8e3a = 0x0,
    n__m$h4 = 0x1,
    n_v3frgy = 0x2,
    n_dhxzl = 0x3,
    n_s7d = 0x4,
    n__$hmk = 0x5,
    n_s57n0 = 0x6,
    n_fqyji = 0x7;n_jq9pi['prototype'] = { 'parse': function (ji9fy, reo83, x_kmlh) {
    var vigyj = this['domBuilder'];vigyj['startDocument'](), n_nmxdzl(reo83, reo83 = {}), n_k4hm$(ji9fy, reo83, x_kmlh, vigyj, this['errorHandler']), vigyj['endDocument']();
  } }, n_fgv38['prototype'] = { 'setTagName': function (u14_$k) {
    if (!n_gr3e8v['test'](u14_$k)) throw new Error('invalid tagName:' + u14_$k);this['tagName'] = u14_$k;
  }, 'add': function (fjqy9, kxml, dnmlxz) {
    if (!n_gr3e8v['test'](fjqy9)) throw new Error('invalid attribute:' + fjqy9);this[this['length']++] = { 'qName': fjqy9, 'value': kxml, 'offset': dnmlxz };
  }, 'length': 0x0, 'getLocalName': function (rgvy) {
    return this[rgvy]['localName'];
  }, 'getLocator': function ($klmh_) {
    return this[$klmh_]['locator'];
  }, 'getQName': function (dszncx) {
    return this[dszncx]['qName'];
  }, 'getURI': function (h_u4$k) {
    return this[h_u4$k]['uri'];
  }, 'getValue': function (pqjy9i) {
    return this[pqjy9i]['value'];
  } }, n_at6w2({}, n_at6w2['prototype']) instanceof n_at6w2 || (n_at6w2 = function (yq9ijp, ij9fyq) {
  function gfyq() {}gfyq['prototype'] = ij9fyq, gfyq = new gfyq();for (ij9fyq in yq9ijp) gfyq[ij9fyq] = yq9ijp[ij9fyq];return gfyq;
}), exports['XMLReader'] = n_jq9pi;