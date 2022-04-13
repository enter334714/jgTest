var J = wx.h$;
function gpw9e_() {}function gq0db(dkcg68, gd6t8c, dqbgk, pf_92, swf2) {
  function h2_p(vrjxy7) {
    if (vrjxy7 > 0xffff) {
      vrjxy7 -= 0x10000;var k0qb5g = 0xd800 + (vrjxy7 >> 0xa),
          b0oq5y = 0xdc00 + (0x3ff & vrjxy7);return String['fromCharCode'](k0qb5g, b0oq5y);
    }return String['fromCharCode'](vrjxy7);
  }function n1i34x(cpeh) {
    var qg50kb = cpeh['slice'](0x1, -0x1);return qg50kb in dqbgk ? dqbgk[qg50kb] : '#' === qg50kb['charAt'](0x0) ? h2_p(parseInt(qg50kb['substr'](0x1)['replace']('x', '0x'))) : (swf2['error']('entity not found:' + cpeh), cpeh);
  }function phztce(hz_pe2) {
    if (hz_pe2 > _29w) {
      var pz_2we = dkcg68['substring'](_29w, hz_pe2)['replace'](/&#?\w+;/g, n1i34x);ct6gd && zhtce8(_29w), pf_92['characters'](pz_2we, 0x0, hz_pe2 - _29w), _29w = hz_pe2;
    }
  }function zhtce8(kdg8, yrbo5) {
    for (; kdg8 >= et8 && (yrbo5 = w2sf$['exec'](dkcg68));) jyrvo7 = yrbo5['index'], et8 = jyrvo7 + yrbo5[0x0]['length'], ct6gd['lineNumber']++;ct6gd['columnNumber'] = kdg8 - jyrvo7 + 0x1;
  }for (var jyrvo7 = 0x0, et8 = 0x0, w2sf$ = /.*(?:\r\n?|\n)|.*$/g, ct6gd = pf_92['locator'], g8kdc6 = [{ 'currentNSMap': gd6t8c }], ct6hd8 = {}, _29w = 0x0;;) {
    try {
      var wze_2 = dkcg68['indexOf']('<', _29w);if (0x0 > wze_2) {
        if (!dkcg68['substr'](_29w)['match'](/^\s*$/)) {
          var qdbg0 = pf_92['doc'],
              td68hc = qdbg0['createTextNode'](dkcg68['substr'](_29w));qdbg0['appendChild'](td68hc), pf_92['currentElement'] = td68hc;
        }return;
      }switch (wze_2 > _29w && phztce(wze_2), dkcg68['charAt'](wze_2 + 0x1)) {case '/':
          var kbq50g = dkcg68['indexOf']('>', wze_2 + 0x3),
              g50qkb = dkcg68['substring'](wze_2 + 0x2, kbq50g),
              wez2_p = g8kdc6['pop']();0x0 > kbq50g ? (g50qkb = dkcg68['substring'](wze_2 + 0x2)['replace'](/[\s<].*/, ''), swf2['error']('end tag name: ' + g50qkb + ' is not complete:' + wez2_p['tagName']), kbq50g = wze_2 + 0x1 + g50qkb['length']) : g50qkb['match'](/\s</) && (g50qkb = g50qkb['replace'](/[\s<].*/, ''), swf2['error']('end tag name: ' + g50qkb + ' maybe not complete'), kbq50g = wze_2 + 0x1 + g50qkb['length']);var jixrv7 = wez2_p['localNSMap'],
              qb5gk = wez2_p['tagName'] == g50qkb,
              gdkb = qb5gk || wez2_p['tagName'] && wez2_p['tagName']['toLowerCase']() == g50qkb['toLowerCase']();if (gdkb) {
            if (pf_92['endElement'](wez2_p['uri'], wez2_p['localName'], g50qkb), jixrv7) {
              for (var rxy7 in jixrv7) pf_92['endPrefixMapping'](rxy7);
            }qb5gk || swf2['fatalError']('end tag name: ' + g50qkb + ' is not match the current start tagName:' + wez2_p['tagName']);
          } else g8kdc6['push'](wez2_p);kbq50g++;break;case '?':
          ct6gd && zhtce8(wze_2), kbq50g = gkg860d(dkcg68, wze_2, pf_92);break;case '!':
          ct6gd && zhtce8(wze_2), kbq50g = gyjv7ro(dkcg68, wze_2, pf_92, swf2);break;default:
          ct6gd && zhtce8(wze_2);var the_p = new gn47x1i(),
              tcz6h = g8kdc6[g8kdc6['length'] - 0x1]['currentNSMap'],
              kbq50g = gy5jorv(dkcg68, wze_2, the_p, tcz6h, n1i34x, swf2),
              _p29wf = the_p['length'];if (!the_p['closed'] && gtz_ep(dkcg68, kbq50g, the_p['tagName'], ct6hd8) && (the_p['closed'] = !0x0, dqbgk['nbsp'] || swf2['warning']('unclosed xml attribute')), ct6gd && _p29wf) {
            for (var t8gd6 = gezcth8(ct6gd, {}), vn7ix = 0x0; _p29wf > vn7ix; vn7ix++) {
              var kdgc6 = the_p[vn7ix];zhtce8(kdgc6['offset']), kdgc6['locator'] = gezcth8(ct6gd, {});
            }pf_92['locator'] = t8gd6, gryoqv(the_p, pf_92, tcz6h) && g8kdc6['push'](the_p), pf_92['locator'] = ct6gd;
          } else gryoqv(the_p, pf_92, tcz6h) && g8kdc6['push'](the_p);'http://www.w3.org/1999/xhtml' !== the_p['uri'] || the_p['closed'] ? kbq50g++ : kbq50g = gw29e(dkcg68, kbq50g, the_p['tagName'], n1i34x, pf_92);}
    } catch (ezp_w2) {
      swf2['error']('element parse error: ' + ezp_w2), kbq50g = -0x1;
    }kbq50g > _29w ? _29w = kbq50g : phztce(Math['max'](wze_2, _29w) + 0x1);
  }
}function gezcth8(gb0dk6, d6k8) {
  return d6k8['lineNumber'] = gb0dk6['lineNumber'], d6k8['columnNumber'] = gb0dk6['columnNumber'], d6k8;
}function gy5jorv(dg8k6, gdqkb, i3u41, wf_$9, x3n1, wf$2) {
  for (var hz2p, dgc, ztpc = ++gdqkb, zcpht = gd0qkgb;;) {
    var pe2w = dg8k6['charAt'](ztpc);switch (pe2w) {case '=':
        if (zcpht === gqb0gd) hz2p = dg8k6['slice'](gdqkb, ztpc), zcpht = gq5yobr;else {
          if (zcpht !== gb0qoy) throw new Error('attribute equal must after attrName');zcpht = gq5yobr;
        }break;case '\x27':case '\x22':
        if (zcpht === gq5yobr || zcpht === gqb0gd) {
          if (zcpht === gqb0gd && (wf$2['warning']('attribute value must after "="'), hz2p = dg8k6['slice'](gdqkb, ztpc)), gdqkb = ztpc + 0x1, ztpc = dg8k6['indexOf'](pe2w, gdqkb), !(ztpc > 0x0)) throw new Error('attribute value no end \'' + pe2w + '\' match');dgc = dg8k6['slice'](gdqkb, ztpc)['replace'](/&#?\w+;/g, x3n1), i3u41['add'](hz2p, dgc, gdqkb - 0x1), zcpht = go7jrv;
        } else {
          if (zcpht != gzep_th) throw new Error('attribute value must after "="');dgc = dg8k6['slice'](gdqkb, ztpc)['replace'](/&#?\w+;/g, x3n1), i3u41['add'](hz2p, dgc, gdqkb), wf$2['warning']('attribute "' + hz2p + '" missed start quot(' + pe2w + ')!!'), gdqkb = ztpc + 0x1, zcpht = go7jrv;
        }break;case '/':
        switch (zcpht) {case gd0qkgb:
            i3u41['setTagName'](dg8k6['slice'](gdqkb, ztpc));case go7jrv:case gq5ybo0:case gvyqr:
            zcpht = gvyqr, i3u41['closed'] = !0x0;case gzep_th:case gqb0gd:case gb0qoy:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wf$2['error']('unexpected end of input'), zcpht == gd0qkgb && i3u41['setTagName'](dg8k6['slice'](gdqkb, ztpc)), ztpc;case '>':
        switch (zcpht) {case gd0qkgb:
            i3u41['setTagName'](dg8k6['slice'](gdqkb, ztpc));case go7jrv:case gq5ybo0:case gvyqr:
            break;case gzep_th:case gqb0gd:
            dgc = dg8k6['slice'](gdqkb, ztpc), '/' === dgc['slice'](-0x1) && (i3u41['closed'] = !0x0, dgc = dgc['slice'](0x0, -0x1));case gb0qoy:
            zcpht === gb0qoy && (dgc = hz2p), zcpht == gzep_th ? (wf$2['warning']('attribute "' + dgc + '" missed quot(")!!'), i3u41['add'](hz2p, dgc['replace'](/&#?\w+;/g, x3n1), gdqkb)) : ('http://www.w3.org/1999/xhtml' === wf_$9[''] && dgc['match'](/^(?:disabled|checked|selected)$/i) || wf$2['warning']('attribute "' + dgc + '" missed value!! "' + dgc + '" instead!!'), i3u41['add'](dgc, dgc, gdqkb));break;case gq5yobr:
            throw new Error('attribute value missed!!');}return ztpc;case '\u0080':
        pe2w = '\x20';default:
        if ('\x20' >= pe2w) switch (zcpht) {case gd0qkgb:
            i3u41['setTagName'](dg8k6['slice'](gdqkb, ztpc)), zcpht = gq5ybo0;break;case gqb0gd:
            hz2p = dg8k6['slice'](gdqkb, ztpc), zcpht = gb0qoy;break;case gzep_th:
            var dgc = dg8k6['slice'](gdqkb, ztpc)['replace'](/&#?\w+;/g, x3n1);wf$2['warning']('attribute "' + dgc + '" missed quot(")!!'), i3u41['add'](hz2p, dgc, gdqkb);case go7jrv:
            zcpht = gq5ybo0;} else switch (zcpht) {case gb0qoy:
            {
              i3u41['tagName'];
            }'http://www.w3.org/1999/xhtml' === wf_$9[''] && hz2p['match'](/^(?:disabled|checked|selected)$/i) || wf$2['warning']('attribute "' + hz2p + '" missed value!! "' + hz2p + '" instead2!!'), i3u41['add'](hz2p, hz2p, gdqkb), gdqkb = ztpc, zcpht = gqb0gd;break;case go7jrv:
            wf$2['warning']('attribute space is required"' + hz2p + '\x22!!');case gq5ybo0:
            zcpht = gqb0gd, gdqkb = ztpc;break;case gq5yobr:
            zcpht = gzep_th, gdqkb = ztpc;break;case gvyqr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ztpc++;
  }
}function gryoqv(p9w_e2, dc8k6, ij7xn) {
  for (var kb5q0g = p9w_e2['tagName'], x4n1i3 = null, ua34lm = p9w_e2['length']; ua34lm--;) {
    var n43a = p9w_e2[ua34lm],
        tdc6h = n43a['qName'],
        vjo5y = n43a['value'],
        vxnj7i = tdc6h['indexOf'](':');if (vxnj7i > 0x0) var dcg6k = n43a['prefix'] = tdc6h['slice'](0x0, vxnj7i),
        chtpze = tdc6h['slice'](vxnj7i + 0x1),
        r7jyx = 'xmlns' === dcg6k && chtpze;else chtpze = tdc6h, dcg6k = null, r7jyx = 'xmlns' === tdc6h && '';n43a['localName'] = chtpze, r7jyx !== !0x1 && (null == x4n1i3 && (x4n1i3 = {}, gceth(ij7xn, ij7xn = {})), ij7xn[r7jyx] = x4n1i3[r7jyx] = vjo5y, n43a['uri'] = 'http://www.w3.org/2000/xmlns/', dc8k6['startPrefixMapping'](r7jyx, vjo5y));
  }for (var ua34lm = p9w_e2['length']; ua34lm--;) {
    n43a = p9w_e2[ua34lm];var dcg6k = n43a['prefix'];dcg6k && ('xml' === dcg6k && (n43a['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== dcg6k && (n43a['uri'] = ij7xn[dcg6k || '']));
  }var vxnj7i = kb5q0g['indexOf'](':');vxnj7i > 0x0 ? (dcg6k = p9w_e2['prefix'] = kb5q0g['slice'](0x0, vxnj7i), chtpze = p9w_e2['localName'] = kb5q0g['slice'](vxnj7i + 0x1)) : (dcg6k = null, chtpze = p9w_e2['localName'] = kb5q0g);var j17nx = p9w_e2['uri'] = ij7xn[dcg6k || ''];if (dc8k6['startElement'](j17nx, chtpze, kb5q0g, p9w_e2), !p9w_e2['closed']) return p9w_e2['currentNSMap'] = ij7xn, p9w_e2['localNSMap'] = x4n1i3, !0x0;if (dc8k6['endElement'](j17nx, chtpze, kb5q0g), x4n1i3) {
    for (dcg6k in x4n1i3) dc8k6['endPrefixMapping'](dcg6k);
  }
}function gw29e(_hezt, zep2w, l314au, zpw2_e, pz2w_e) {
  if (/^(?:script|textarea)$/i['test'](l314au)) {
    var u43in = _hezt['indexOf']('</' + l314au + '>', zep2w),
        nx417i = _hezt['substring'](zep2w + 0x1, u43in);if (/[&<]/['test'](nx417i)) return (/^script$/i['test'](l314au) ? (pz2w_e['characters'](nx417i, 0x0, nx417i['length']), u43in) : (nx417i = nx417i['replace'](/&#?\w+;/g, zpw2_e), pz2w_e['characters'](nx417i, 0x0, nx417i['length']), u43in)
    );
  }return zep2w + 0x1;
}function gtz_ep(eth_, b0kdqg, dgck68, zc8h6t) {
  var yqvo5r = zc8h6t[dgck68];return null == yqvo5r && (yqvo5r = eth_['lastIndexOf']('</' + dgck68 + '>'), b0kdqg > yqvo5r && (yqvo5r = eth_['lastIndexOf']('</' + dgck68)), zc8h6t[dgck68] = yqvo5r), b0kdqg > yqvo5r;
}function gceth(i1xn3, ht8cz6) {
  for (var xirv7 in i1xn3) ht8cz6[xirv7] = i1xn3[xirv7];
}function gyjv7ro(zhtcp, zcpeth, byoqr, h8zct) {
  var c8zth = zhtcp['charAt'](zcpeth + 0x2);switch (c8zth) {case '-':
      if ('-' === zhtcp['charAt'](zcpeth + 0x3)) {
        var fwp92 = zhtcp['indexOf']('-->', zcpeth + 0x4);return fwp92 > zcpeth ? (byoqr['comment'](zhtcp, zcpeth + 0x4, fwp92 - zcpeth - 0x4), fwp92 + 0x3) : (h8zct['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == zhtcp['substr'](zcpeth + 0x3, 0x6)) {
        var fwp92 = zhtcp['indexOf'](']]>', zcpeth + 0x9);return byoqr['startCDATA'](), byoqr['characters'](zhtcp, zcpeth + 0x9, fwp92 - zcpeth - 0x9), byoqr['endCDATA'](), fwp92 + 0x3;
      }var gb5kq = gro7yvj(zhtcp, zcpeth),
          dbkg60 = gb5kq['length'];if (dbkg60 > 0x1 && /!doctype/i['test'](gb5kq[0x0][0x0])) {
        var c8gt6d = gb5kq[0x1][0x0],
            h6dt8c = dbkg60 > 0x3 && /^public$/i['test'](gb5kq[0x2][0x0]) && gb5kq[0x3][0x0],
            royqv5 = dbkg60 > 0x4 && gb5kq[0x4][0x0],
            dgck = gb5kq[dbkg60 - 0x1];return byoqr['startDTD'](c8gt6d, h6dt8c && h6dt8c['replace'](/^(['"])(.*?)\1$/, '$2'), royqv5 && royqv5['replace'](/^(['"])(.*?)\1$/, '$2')), byoqr['endDTD'](), dgck['index'] + dgck[0x0]['length'];
      }}return -0x1;
}function gkg860d(phz_2, x1ni7, d86th) {
  var pewz2 = phz_2['indexOf']('?>', x1ni7);if (pewz2) {
    var oyr7jv = phz_2['substring'](x1ni7, pewz2)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (oyr7jv) {
      {
        oyr7jv[0x0]['length'];
      }return d86th['processingInstruction'](oyr7jv[0x1], oyr7jv[0x2]), pewz2 + 0x2;
    }return -0x1;
  }return -0x1;
}function gn47x1i() {}function gi3u14n(xni7jv, o0byq) {
  return xni7jv['__proto__'] = o0byq, xni7jv;
}function gro7yvj(pwze2, ri7vj) {
  var hz68t,
      ctze8 = [],
      vrxjy7 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vrxjy7['lastIndex'] = ri7vj, vrxjy7['exec'](pwze2); hz68t = vrxjy7['exec'](pwze2);) if (ctze8['push'](hz68t), hz68t[0x1]) return ctze8;
}var gzche8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gw_f9p2 = new RegExp('[\\-\\.0-9' + gzche8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ggbq0dk = new RegExp('^' + gzche8['source'] + gw_f9p2['source'] + '*(?::' + gzche8['source'] + gw_f9p2['source'] + '*)?$'),
    gd0qkgb = 0x0,
    gqb0gd = 0x1,
    gb0qoy = 0x2,
    gq5yobr = 0x3,
    gzep_th = 0x4,
    go7jrv = 0x5,
    gq5ybo0 = 0x6,
    gvyqr = 0x7;gpw9e_['prototype'] = { 'parse': function (we2, nu14, t8cezh) {
    var xj7ry = this['domBuilder'];xj7ry['startDocument'](), gceth(nu14, nu14 = {}), gq0db(we2, nu14, t8cezh, xj7ry, this['errorHandler']), xj7ry['endDocument']();
  } }, gn47x1i['prototype'] = { 'setTagName': function (dt) {
    if (!ggbq0dk['test'](dt)) throw new Error('invalid tagName:' + dt);this['tagName'] = dt;
  }, 'add': function (qdg0kb, we_9p, jr7oyv) {
    if (!ggbq0dk['test'](qdg0kb)) throw new Error('invalid attribute:' + qdg0kb);this[this['length']++] = { 'qName': qdg0kb, 'value': we_9p, 'offset': jr7oyv };
  }, 'length': 0x0, 'getLocalName': function (pzhetc) {
    return this[pzhetc]['localName'];
  }, 'getLocator': function (i4u1n) {
    return this[i4u1n]['locator'];
  }, 'getQName': function (w2_9ep) {
    return this[w2_9ep]['qName'];
  }, 'getURI': function (g0dqk) {
    return this[g0dqk]['uri'];
  }, 'getValue': function (a4l31) {
    return this[a4l31]['value'];
  } }, gi3u14n({}, gi3u14n['prototype']) instanceof gi3u14n || (gi3u14n = function (oybr5, i31u) {
  function z6ch8() {}z6ch8['prototype'] = i31u, z6ch8 = new z6ch8();for (i31u in oybr5) z6ch8[i31u] = oybr5[i31u];return z6ch8;
}), exports['XMLReader'] = gpw9e_;