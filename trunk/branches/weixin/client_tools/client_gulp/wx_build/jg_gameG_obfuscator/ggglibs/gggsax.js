var m = wx.$g;
function gegy7vq() {}function gy1kwev(wevk1, to4z, p0f_tb, zo4dt3, g7qscv) {
  function r6o2zd(lsg89) {
    if (lsg89 > 0xffff) {
      lsg89 -= 0x10000;var fp4t0_ = 0xd800 + (lsg89 >> 0xa),
          dzor2 = 0xdc00 + (0x3ff & lsg89);return String['fromCharCode'](fp4t0_, dzor2);
    }return String['fromCharCode'](lsg89);
  }function rd2zj6(jum) {
    var g87sqc = jum['slice'](0x1, -0x1);return g87sqc in p0f_tb ? p0f_tb[g87sqc] : '#' === g87sqc['charAt'](0x0) ? r6o2zd(parseInt(g87sqc['substr'](0x1)['replace']('x', '0x'))) : (g7qscv['error']('entity not found:' + jum), jum);
  }function qsv7g(y7vw) {
    if (y7vw > w1ahk) {
      var do2zr = wevk1['substring'](w1ahk, y7vw)['replace'](/&#?\w+;/g, rd2zj6);c7eq && r6doz2(w1ahk), zo4dt3['characters'](do2zr, 0x0, y7vw - w1ahk), w1ahk = y7vw;
    }
  }function r6doz2(f0t34, vw7qye) {
    for (; f0t34 >= $ujm6r && (vw7qye = $mu6jr['exec'](wevk1));) dz34o2 = vw7qye['index'], $ujm6r = dz34o2 + vw7qye[0x0]['length'], c7eq['lineNumber']++;c7eq['columnNumber'] = f0t34 - dz34o2 + 0x1;
  }for (var dz34o2 = 0x0, $ujm6r = 0x0, $mu6jr = /.*(?:\r\n?|\n)|.*$/g, c7eq = zo4dt3['locator'], fp4_0t = [{ 'currentNSMap': to4z }], z6d2o = {}, w1ahk = 0x0;;) {
    try {
      var cq7vs = wevk1['indexOf']('<', w1ahk);if (0x0 > cq7vs) {
        if (!wevk1['substr'](w1ahk)['match'](/^\s*$/)) {
          var b_5fp = zo4dt3['doc'],
              $r6zj2 = b_5fp['createTextNode'](wevk1['substr'](w1ahk));b_5fp['appendChild']($r6zj2), zo4dt3['currentElement'] = $r6zj2;
        }return;
      }switch (cq7vs > w1ahk && qsv7g(cq7vs), wevk1['charAt'](cq7vs + 0x1)) {case '/':
          var bh5iax = wevk1['indexOf']('>', cq7vs + 0x3),
              ewhyk = wevk1['substring'](cq7vs + 0x2, bh5iax),
              s87gqc = fp4_0t['pop']();0x0 > bh5iax ? (ewhyk = wevk1['substring'](cq7vs + 0x2)['replace'](/[\s<].*/, ''), g7qscv['error']('end tag name: ' + ewhyk + ' is not complete:' + s87gqc['tagName']), bh5iax = cq7vs + 0x1 + ewhyk['length']) : ewhyk['match'](/\s</) && (ewhyk = ewhyk['replace'](/[\s<].*/, ''), g7qscv['error']('end tag name: ' + ewhyk + ' maybe not complete'), bh5iax = cq7vs + 0x1 + ewhyk['length']);var o_ = s87gqc['localNSMap'],
              xb5ai = s87gqc['tagName'] == ewhyk,
              xih1a5 = xb5ai || s87gqc['tagName'] && s87gqc['tagName']['toLowerCase']() == ewhyk['toLowerCase']();if (xih1a5) {
            if (zo4dt3['endElement'](s87gqc['uri'], s87gqc['localName'], ewhyk), o_) {
              for (var lsg9c in o_) zo4dt3['endPrefixMapping'](lsg9c);
            }xb5ai || g7qscv['fatalError']('end tag name: ' + ewhyk + ' is not match the current start tagName:' + s87gqc['tagName']);
          } else fp4_0t['push'](s87gqc);bh5iax++;break;case '?':
          c7eq && r6doz2(cq7vs), bh5iax = ghaix(wevk1, cq7vs, zo4dt3);break;case '!':
          c7eq && r6doz2(cq7vs), bh5iax = gcgqev(wevk1, cq7vs, zo4dt3, g7qscv);break;default:
          c7eq && r6doz2(cq7vs);var pba50i = new gb_ip0(),
              kye7vw = fp4_0t[fp4_0t['length'] - 0x1]['currentNSMap'],
              bh5iax = guj6(wevk1, cq7vs, pba50i, kye7vw, rd2zj6, g7qscv),
              od3zt4 = pba50i['length'];if (!pba50i['closed'] && gekw1y(wevk1, bh5iax, pba50i['tagName'], z6d2o) && (pba50i['closed'] = !0x0, p0f_tb['nbsp'] || g7qscv['warning']('unclosed xml attribute')), c7eq && od3zt4) {
            for (var zodt4 = gx51a(c7eq, {}), dz6rj = 0x0; od3zt4 > dz6rj; dz6rj++) {
              var ihk1a = pba50i[dz6rj];r6doz2(ihk1a['offset']), ihk1a['locator'] = gx51a(c7eq, {});
            }zo4dt3['locator'] = zodt4, ghewyk(pba50i, zo4dt3, kye7vw) && fp4_0t['push'](pba50i), zo4dt3['locator'] = c7eq;
          } else ghewyk(pba50i, zo4dt3, kye7vw) && fp4_0t['push'](pba50i);'http://www.w3.org/1999/xhtml' !== pba50i['uri'] || pba50i['closed'] ? bh5iax++ : bh5iax = ghwa1(wevk1, bh5iax, pba50i['tagName'], rd2zj6, zo4dt3);}
    } catch (w7vyq) {
      g7qscv['error']('element parse error: ' + w7vyq), bh5iax = -0x1;
    }bh5iax > w1ahk ? w1ahk = bh5iax : qsv7g(Math['max'](cq7vs, w1ahk) + 0x1);
  }
}function gx51a(eky1v, gqsl8c) {
  return gqsl8c['lineNumber'] = eky1v['lineNumber'], gqsl8c['columnNumber'] = eky1v['columnNumber'], gqsl8c;
}function guj6(z42d3o, _f0pt, z6r2d, o4tf3d, ib_50, pixba5) {
  for (var ai1xk, s7cg8q, ft_0bp = ++_f0pt, t34f = gkx1hi;;) {
    var wyqe7v = z42d3o['charAt'](ft_0bp);switch (wyqe7v) {case '=':
        if (t34f === gg8cls9) ai1xk = z42d3o['slice'](_f0pt, ft_0bp), t34f = gk1ehy;else {
          if (t34f !== gpi5) throw new Error('attribute equal must after attrName');t34f = gk1ehy;
        }break;case '\x27':case '\x22':
        if (t34f === gk1ehy || t34f === gg8cls9) {
          if (t34f === gg8cls9 && (pixba5['warning']('attribute value must after "="'), ai1xk = z42d3o['slice'](_f0pt, ft_0bp)), _f0pt = ft_0bp + 0x1, ft_0bp = z42d3o['indexOf'](wyqe7v, _f0pt), !(ft_0bp > 0x0)) throw new Error('attribute value no end \'' + wyqe7v + '\' match');s7cg8q = z42d3o['slice'](_f0pt, ft_0bp)['replace'](/&#?\w+;/g, ib_50), z6r2d['add'](ai1xk, s7cg8q, _f0pt - 0x1), t34f = gdz6r2o;
        } else {
          if (t34f != gu6j2r$) throw new Error('attribute value must after "="');s7cg8q = z42d3o['slice'](_f0pt, ft_0bp)['replace'](/&#?\w+;/g, ib_50), z6r2d['add'](ai1xk, s7cg8q, _f0pt), pixba5['warning']('attribute "' + ai1xk + '" missed start quot(' + wyqe7v + ')!!'), _f0pt = ft_0bp + 0x1, t34f = gdz6r2o;
        }break;case '/':
        switch (t34f) {case gkx1hi:
            z6r2d['setTagName'](z42d3o['slice'](_f0pt, ft_0bp));case gdz6r2o:case gbpia05:case ghi:
            t34f = ghi, z6r2d['closed'] = !0x0;case gu6j2r$:case gg8cls9:case gpi5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return pixba5['error']('unexpected end of input'), t34f == gkx1hi && z6r2d['setTagName'](z42d3o['slice'](_f0pt, ft_0bp)), ft_0bp;case '>':
        switch (t34f) {case gkx1hi:
            z6r2d['setTagName'](z42d3o['slice'](_f0pt, ft_0bp));case gdz6r2o:case gbpia05:case ghi:
            break;case gu6j2r$:case gg8cls9:
            s7cg8q = z42d3o['slice'](_f0pt, ft_0bp), '/' === s7cg8q['slice'](-0x1) && (z6r2d['closed'] = !0x0, s7cg8q = s7cg8q['slice'](0x0, -0x1));case gpi5:
            t34f === gpi5 && (s7cg8q = ai1xk), t34f == gu6j2r$ ? (pixba5['warning']('attribute "' + s7cg8q + '" missed quot(")!!'), z6r2d['add'](ai1xk, s7cg8q['replace'](/&#?\w+;/g, ib_50), _f0pt)) : ('http://www.w3.org/1999/xhtml' === o4tf3d[''] && s7cg8q['match'](/^(?:disabled|checked|selected)$/i) || pixba5['warning']('attribute "' + s7cg8q + '" missed value!! "' + s7cg8q + '" instead!!'), z6r2d['add'](s7cg8q, s7cg8q, _f0pt));break;case gk1ehy:
            throw new Error('attribute value missed!!');}return ft_0bp;case '\u0080':
        wyqe7v = '\x20';default:
        if ('\x20' >= wyqe7v) switch (t34f) {case gkx1hi:
            z6r2d['setTagName'](z42d3o['slice'](_f0pt, ft_0bp)), t34f = gbpia05;break;case gg8cls9:
            ai1xk = z42d3o['slice'](_f0pt, ft_0bp), t34f = gpi5;break;case gu6j2r$:
            var s7cg8q = z42d3o['slice'](_f0pt, ft_0bp)['replace'](/&#?\w+;/g, ib_50);pixba5['warning']('attribute "' + s7cg8q + '" missed quot(")!!'), z6r2d['add'](ai1xk, s7cg8q, _f0pt);case gdz6r2o:
            t34f = gbpia05;} else switch (t34f) {case gpi5:
            {
              z6r2d['tagName'];
            }'http://www.w3.org/1999/xhtml' === o4tf3d[''] && ai1xk['match'](/^(?:disabled|checked|selected)$/i) || pixba5['warning']('attribute "' + ai1xk + '" missed value!! "' + ai1xk + '" instead2!!'), z6r2d['add'](ai1xk, ai1xk, _f0pt), _f0pt = ft_0bp, t34f = gg8cls9;break;case gdz6r2o:
            pixba5['warning']('attribute space is required"' + ai1xk + '\x22!!');case gbpia05:
            t34f = gg8cls9, _f0pt = ft_0bp;break;case gk1ehy:
            t34f = gu6j2r$, _f0pt = ft_0bp;break;case ghi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ft_0bp++;
  }
}function ghewyk(t_p4f0, gvey7, jz$26) {
  for (var bap5x = t_p4f0['tagName'], cgqe = null, $mr6u = t_p4f0['length']; $mr6u--;) {
    var ft_0pb = t_p4f0[$mr6u],
        xh5ia1 = ft_0pb['qName'],
        l9gcs = ft_0pb['value'],
        bxa5pi = xh5ia1['indexOf'](':');if (bxa5pi > 0x0) var qs8lc = ft_0pb['prefix'] = xh5ia1['slice'](0x0, bxa5pi),
        weyvk1 = xh5ia1['slice'](bxa5pi + 0x1),
        yw1vke = 'xmlns' === qs8lc && weyvk1;else weyvk1 = xh5ia1, qs8lc = null, yw1vke = 'xmlns' === xh5ia1 && '';ft_0pb['localName'] = weyvk1, yw1vke !== !0x1 && (null == cgqe && (cgqe = {}, gz34o2d(jz$26, jz$26 = {})), jz$26[yw1vke] = cgqe[yw1vke] = l9gcs, ft_0pb['uri'] = 'http://www.w3.org/2000/xmlns/', gvey7['startPrefixMapping'](yw1vke, l9gcs));
  }for (var $mr6u = t_p4f0['length']; $mr6u--;) {
    ft_0pb = t_p4f0[$mr6u];var qs8lc = ft_0pb['prefix'];qs8lc && ('xml' === qs8lc && (ft_0pb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qs8lc && (ft_0pb['uri'] = jz$26[qs8lc || '']));
  }var bxa5pi = bap5x['indexOf'](':');bxa5pi > 0x0 ? (qs8lc = t_p4f0['prefix'] = bap5x['slice'](0x0, bxa5pi), weyvk1 = t_p4f0['localName'] = bap5x['slice'](bxa5pi + 0x1)) : (qs8lc = null, weyvk1 = t_p4f0['localName'] = bap5x);var y1hk = t_p4f0['uri'] = jz$26[qs8lc || ''];if (gvey7['startElement'](y1hk, weyvk1, bap5x, t_p4f0), !t_p4f0['closed']) return t_p4f0['currentNSMap'] = jz$26, t_p4f0['localNSMap'] = cgqe, !0x0;if (gvey7['endElement'](y1hk, weyvk1, bap5x), cgqe) {
    for (qs8lc in cgqe) gvey7['endPrefixMapping'](qs8lc);
  }
}function ghwa1(od26z, bf0_tp, g7vs, xbi, gyevq7) {
  if (/^(?:script|textarea)$/i['test'](g7vs)) {
    var bhx5ai = od26z['indexOf']('</' + g7vs + '>', bf0_tp),
        od43 = od26z['substring'](bf0_tp + 0x1, bhx5ai);if (/[&<]/['test'](od43)) return (/^script$/i['test'](g7vs) ? (gyevq7['characters'](od43, 0x0, od43['length']), bhx5ai) : (od43 = od43['replace'](/&#?\w+;/g, xbi), gyevq7['characters'](od43, 0x0, od43['length']), bhx5ai)
    );
  }return bf0_tp + 0x1;
}function gekw1y(j$rmu6, tozd43, ce7qgv, we7qy) {
  var pa5x = we7qy[ce7qgv];return null == pa5x && (pa5x = j$rmu6['lastIndexOf']('</' + ce7qgv + '>'), tozd43 > pa5x && (pa5x = j$rmu6['lastIndexOf']('</' + ce7qgv)), we7qy[ce7qgv] = pa5x), tozd43 > pa5x;
}function gz34o2d(hak1xi, ywve1k) {
  for (var c8slgq in hak1xi) ywve1k[c8slgq] = hak1xi[c8slgq];
}function gcgqev(f3t4_, ipa05, z2dj, b_pft0) {
  var p_4tf = f3t4_['charAt'](ipa05 + 0x2);switch (p_4tf) {case '-':
      if ('-' === f3t4_['charAt'](ipa05 + 0x3)) {
        var r$u62 = f3t4_['indexOf']('-->', ipa05 + 0x4);return r$u62 > ipa05 ? (z2dj['comment'](f3t4_, ipa05 + 0x4, r$u62 - ipa05 - 0x4), r$u62 + 0x3) : (b_pft0['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == f3t4_['substr'](ipa05 + 0x3, 0x6)) {
        var r$u62 = f3t4_['indexOf'](']]>', ipa05 + 0x9);return z2dj['startCDATA'](), z2dj['characters'](f3t4_, ipa05 + 0x9, r$u62 - ipa05 - 0x9), z2dj['endCDATA'](), r$u62 + 0x3;
      }var ha5x = gaix51(f3t4_, ipa05),
          i5xbh = ha5x['length'];if (i5xbh > 0x1 && /!doctype/i['test'](ha5x[0x0][0x0])) {
        var r$6z2j = ha5x[0x1][0x0],
            wy7 = i5xbh > 0x3 && /^public$/i['test'](ha5x[0x2][0x0]) && ha5x[0x3][0x0],
            pft0 = i5xbh > 0x4 && ha5x[0x4][0x0],
            veq7yw = ha5x[i5xbh - 0x1];return z2dj['startDTD'](r$6z2j, wy7 && wy7['replace'](/^(['"])(.*?)\1$/, '$2'), pft0 && pft0['replace'](/^(['"])(.*?)\1$/, '$2')), z2dj['endDTD'](), veq7yw['index'] + veq7yw[0x0]['length'];
      }}return -0x1;
}function ghaix(hwyx, pib5_0, q7gy) {
  var rj2$u6 = hwyx['indexOf']('?>', pib5_0);if (rj2$u6) {
    var p0bt_ = hwyx['substring'](pib5_0, rj2$u6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (p0bt_) {
      {
        p0bt_[0x0]['length'];
      }return q7gy['processingInstruction'](p0bt_[0x1], p0bt_[0x2]), rj2$u6 + 0x2;
    }return -0x1;
  }return -0x1;
}function gb_ip0() {}function gxibap(j$ru6, qeg7vc) {
  return j$ru6['__proto__'] = qeg7vc, j$ru6;
}function gaix51(ceqvg7, b0pi5) {
  var lgs9,
      to43fd = [],
      v7sqg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (v7sqg['lastIndex'] = b0pi5, v7sqg['exec'](ceqvg7); lgs9 = v7sqg['exec'](ceqvg7);) if (to43fd['push'](lgs9), lgs9[0x1]) return to43fd;
}var gu$rm = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gr62do = new RegExp('[\\-\\.0-9' + gu$rm['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gwyhk = new RegExp('^' + gu$rm['source'] + gr62do['source'] + '*(?::' + gu$rm['source'] + gr62do['source'] + '*)?$'),
    gkx1hi = 0x0,
    gg8cls9 = 0x1,
    gpi5 = 0x2,
    gk1ehy = 0x3,
    gu6j2r$ = 0x4,
    gdz6r2o = 0x5,
    gbpia05 = 0x6,
    ghi = 0x7;gegy7vq['prototype'] = { 'parse': function (gsv7q, _t4f, $j2zr) {
    var z3d42o = this['domBuilder'];z3d42o['startDocument'](), gz34o2d(_t4f, _t4f = {}), gy1kwev(gsv7q, _t4f, $j2zr, z3d42o, this['errorHandler']), z3d42o['endDocument']();
  } }, gb_ip0['prototype'] = { 'setTagName': function (ix1hak) {
    if (!gwyhk['test'](ix1hak)) throw new Error('invalid tagName:' + ix1hak);this['tagName'] = ix1hak;
  }, 'add': function (jr2u6$, x5ab, baxh5i) {
    if (!gwyhk['test'](jr2u6$)) throw new Error('invalid attribute:' + jr2u6$);this[this['length']++] = { 'qName': jr2u6$, 'value': x5ab, 'offset': baxh5i };
  }, 'length': 0x0, 'getLocalName': function (l8s9gc) {
    return this[l8s9gc]['localName'];
  }, 'getLocator': function (z26jrd) {
    return this[z26jrd]['locator'];
  }, 'getQName': function (kxyw1h) {
    return this[kxyw1h]['qName'];
  }, 'getURI': function (o23d) {
    return this[o23d]['uri'];
  }, 'getValue': function (r6d2o) {
    return this[r6d2o]['value'];
  } }, gxibap({}, gxibap['prototype']) instanceof gxibap || (gxibap = function ($jr6, p0b5_) {
  function fo3t4d() {}fo3t4d['prototype'] = p0b5_, fo3t4d = new fo3t4d();for (p0b5_ in $jr6) fo3t4d[p0b5_] = $jr6[p0b5_];return fo3t4d;
}), exports['XMLReader'] = gegy7vq;