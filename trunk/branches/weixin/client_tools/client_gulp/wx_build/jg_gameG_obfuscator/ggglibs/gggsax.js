var m = wx.$g;
function gz2ro() {}function gr$j2(zr62jd, p5_0bi, cg8sq7, xibpa5, h1xki) {
  function pib50(c7gsqv) {
    if (c7gsqv > 0xffff) {
      c7gsqv -= 0x10000;var wkeh1 = 0xd800 + (c7gsqv >> 0xa),
          xbip5 = 0xdc00 + (0x3ff & c7gsqv);return String['fromCharCode'](wkeh1, xbip5);
    }return String['fromCharCode'](c7gsqv);
  }function x5ahbi(hi1k) {
    var ax5bhi = hi1k['slice'](0x1, -0x1);return ax5bhi in cg8sq7 ? cg8sq7[ax5bhi] : '#' === ax5bhi['charAt'](0x0) ? pib50(parseInt(ax5bhi['substr'](0x1)['replace']('x', '0x'))) : (h1xki['error']('entity not found:' + hi1k), hi1k);
  }function hxika(k1wyx) {
    if (k1wyx > e7ywv) {
      var odrz = zr62jd['substring'](e7ywv, k1wyx)['replace'](/&#?\w+;/g, x5ahbi);ikhxa && qsc7v(e7ywv), xibpa5['characters'](odrz, 0x0, k1wyx - e7ywv), e7ywv = k1wyx;
    }
  }function qsc7v(_f5p, xkywh) {
    for (; _f5p >= g87qc && (xkywh = ixapb5['exec'](zr62jd));) dt4oz3 = xkywh['index'], g87qc = dt4oz3 + xkywh[0x0]['length'], ikhxa['lineNumber']++;ikhxa['columnNumber'] = _f5p - dt4oz3 + 0x1;
  }for (var dt4oz3 = 0x0, g87qc = 0x0, ixapb5 = /.*(?:\r\n?|\n)|.*$/g, ikhxa = xibpa5['locator'], axhkw1 = [{ 'currentNSMap': p5_0bi }], wv7qye = {}, e7ywv = 0x0;;) {
    try {
      var vq7yw = zr62jd['indexOf']('<', e7ywv);if (0x0 > vq7yw) {
        if (!zr62jd['substr'](e7ywv)['match'](/^\s*$/)) {
          var z62$r = xibpa5['doc'],
              slgcq = z62$r['createTextNode'](zr62jd['substr'](e7ywv));z62$r['appendChild'](slgcq), xibpa5['currentElement'] = slgcq;
        }return;
      }switch (vq7yw > e7ywv && hxika(vq7yw), zr62jd['charAt'](vq7yw + 0x1)) {case '/':
          var gl8cq = zr62jd['indexOf']('>', vq7yw + 0x3),
              pbixa = zr62jd['substring'](vq7yw + 0x2, gl8cq),
              o4d2 = axhkw1['pop']();0x0 > gl8cq ? (pbixa = zr62jd['substring'](vq7yw + 0x2)['replace'](/[\s<].*/, ''), h1xki['error']('end tag name: ' + pbixa + ' is not complete:' + o4d2['tagName']), gl8cq = vq7yw + 0x1 + pbixa['length']) : pbixa['match'](/\s</) && (pbixa = pbixa['replace'](/[\s<].*/, ''), h1xki['error']('end tag name: ' + pbixa + ' maybe not complete'), gl8cq = vq7yw + 0x1 + pbixa['length']);var y1vwe = o4d2['localNSMap'],
              z62ro = o4d2['tagName'] == pbixa,
              rd2z = z62ro || o4d2['tagName'] && o4d2['tagName']['toLowerCase']() == pbixa['toLowerCase']();if (rd2z) {
            if (xibpa5['endElement'](o4d2['uri'], o4d2['localName'], pbixa), y1vwe) {
              for (var y7vkwe in y1vwe) xibpa5['endPrefixMapping'](y7vkwe);
            }z62ro || h1xki['fatalError']('end tag name: ' + pbixa + ' is not match the current start tagName:' + o4d2['tagName']);
          } else axhkw1['push'](o4d2);gl8cq++;break;case '?':
          ikhxa && qsc7v(vq7yw), gl8cq = gi1xak(zr62jd, vq7yw, xibpa5);break;case '!':
          ikhxa && qsc7v(vq7yw), gl8cq = gbp_f5(zr62jd, vq7yw, xibpa5, h1xki);break;default:
          ikhxa && qsc7v(vq7yw);var i5bxha = new gxbh(),
              qvy7w = axhkw1[axhkw1['length'] - 0x1]['currentNSMap'],
              gl8cq = grj2$6z(zr62jd, vq7yw, i5bxha, qvy7w, x5ahbi, h1xki),
              weky7 = i5bxha['length'];if (!i5bxha['closed'] && gev1k(zr62jd, gl8cq, i5bxha['tagName'], wv7qye) && (i5bxha['closed'] = !0x0, cg8sq7['nbsp'] || h1xki['warning']('unclosed xml attribute')), ikhxa && weky7) {
            for (var yvqge = gq7svcg(ikhxa, {}), jmr = 0x0; weky7 > jmr; jmr++) {
              var dtof34 = i5bxha[jmr];qsc7v(dtof34['offset']), dtof34['locator'] = gq7svcg(ikhxa, {});
            }xibpa5['locator'] = yvqge, gai0(i5bxha, xibpa5, qvy7w) && axhkw1['push'](i5bxha), xibpa5['locator'] = ikhxa;
          } else gai0(i5bxha, xibpa5, qvy7w) && axhkw1['push'](i5bxha);'http://www.w3.org/1999/xhtml' !== i5bxha['uri'] || i5bxha['closed'] ? gl8cq++ : gl8cq = gyqe7vw(zr62jd, gl8cq, i5bxha['tagName'], x5ahbi, xibpa5);}
    } catch (qg7eyv) {
      h1xki['error']('element parse error: ' + qg7eyv), gl8cq = -0x1;
    }gl8cq > e7ywv ? e7ywv = gl8cq : hxika(Math['max'](vq7yw, e7ywv) + 0x1);
  }
}function gq7svcg(fp_50, ptb0_) {
  return ptb0_['lineNumber'] = fp_50['lineNumber'], ptb0_['columnNumber'] = fp_50['columnNumber'], ptb0_;
}function grj2$6z(jz$r2, axbp5i, v7geqc, qc, gl89c, yewv7q) {
  for (var r2jz$6, b_0pf5, lc98g = ++axbp5i, w1yvke = gyq7veg;;) {
    var ax1khi = jz$r2['charAt'](lc98g);switch (ax1khi) {case '=':
        if (w1yvke === gvwy1e) r2jz$6 = jz$r2['slice'](axbp5i, lc98g), w1yvke = ggy7ev;else {
          if (w1yvke !== gyqg) throw new Error('attribute equal must after attrName');w1yvke = ggy7ev;
        }break;case '\x27':case '\x22':
        if (w1yvke === ggy7ev || w1yvke === gvwy1e) {
          if (w1yvke === gvwy1e && (yewv7q['warning']('attribute value must after "="'), r2jz$6 = jz$r2['slice'](axbp5i, lc98g)), axbp5i = lc98g + 0x1, lc98g = jz$r2['indexOf'](ax1khi, axbp5i), !(lc98g > 0x0)) throw new Error('attribute value no end \'' + ax1khi + '\' match');b_0pf5 = jz$r2['slice'](axbp5i, lc98g)['replace'](/&#?\w+;/g, gl89c), v7geqc['add'](r2jz$6, b_0pf5, axbp5i - 0x1), w1yvke = gky1ev;
        } else {
          if (w1yvke != gaipx5b) throw new Error('attribute value must after "="');b_0pf5 = jz$r2['slice'](axbp5i, lc98g)['replace'](/&#?\w+;/g, gl89c), v7geqc['add'](r2jz$6, b_0pf5, axbp5i), yewv7q['warning']('attribute "' + r2jz$6 + '" missed start quot(' + ax1khi + ')!!'), axbp5i = lc98g + 0x1, w1yvke = gky1ev;
        }break;case '/':
        switch (w1yvke) {case gyq7veg:
            v7geqc['setTagName'](jz$r2['slice'](axbp5i, lc98g));case gky1ev:case g$j6m:case goz36d:
            w1yvke = goz36d, v7geqc['closed'] = !0x0;case gaipx5b:case gvwy1e:case gyqg:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yewv7q['error']('unexpected end of input'), w1yvke == gyq7veg && v7geqc['setTagName'](jz$r2['slice'](axbp5i, lc98g)), lc98g;case '>':
        switch (w1yvke) {case gyq7veg:
            v7geqc['setTagName'](jz$r2['slice'](axbp5i, lc98g));case gky1ev:case g$j6m:case goz36d:
            break;case gaipx5b:case gvwy1e:
            b_0pf5 = jz$r2['slice'](axbp5i, lc98g), '/' === b_0pf5['slice'](-0x1) && (v7geqc['closed'] = !0x0, b_0pf5 = b_0pf5['slice'](0x0, -0x1));case gyqg:
            w1yvke === gyqg && (b_0pf5 = r2jz$6), w1yvke == gaipx5b ? (yewv7q['warning']('attribute "' + b_0pf5 + '" missed quot(")!!'), v7geqc['add'](r2jz$6, b_0pf5['replace'](/&#?\w+;/g, gl89c), axbp5i)) : ('http://www.w3.org/1999/xhtml' === qc[''] && b_0pf5['match'](/^(?:disabled|checked|selected)$/i) || yewv7q['warning']('attribute "' + b_0pf5 + '" missed value!! "' + b_0pf5 + '" instead!!'), v7geqc['add'](b_0pf5, b_0pf5, axbp5i));break;case ggy7ev:
            throw new Error('attribute value missed!!');}return lc98g;case '\u0080':
        ax1khi = '\x20';default:
        if ('\x20' >= ax1khi) switch (w1yvke) {case gyq7veg:
            v7geqc['setTagName'](jz$r2['slice'](axbp5i, lc98g)), w1yvke = g$j6m;break;case gvwy1e:
            r2jz$6 = jz$r2['slice'](axbp5i, lc98g), w1yvke = gyqg;break;case gaipx5b:
            var b_0pf5 = jz$r2['slice'](axbp5i, lc98g)['replace'](/&#?\w+;/g, gl89c);yewv7q['warning']('attribute "' + b_0pf5 + '" missed quot(")!!'), v7geqc['add'](r2jz$6, b_0pf5, axbp5i);case gky1ev:
            w1yvke = g$j6m;} else switch (w1yvke) {case gyqg:
            {
              v7geqc['tagName'];
            }'http://www.w3.org/1999/xhtml' === qc[''] && r2jz$6['match'](/^(?:disabled|checked|selected)$/i) || yewv7q['warning']('attribute "' + r2jz$6 + '" missed value!! "' + r2jz$6 + '" instead2!!'), v7geqc['add'](r2jz$6, r2jz$6, axbp5i), axbp5i = lc98g, w1yvke = gvwy1e;break;case gky1ev:
            yewv7q['warning']('attribute space is required"' + r2jz$6 + '\x22!!');case g$j6m:
            w1yvke = gvwy1e, axbp5i = lc98g;break;case ggy7ev:
            w1yvke = gaipx5b, axbp5i = lc98g;break;case goz36d:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}lc98g++;
  }
}function gai0(rz62od, eqygv7, aki1) {
  for (var s9c8 = rz62od['tagName'], rzj6 = null, _tf40p = rz62od['length']; _tf40p--;) {
    var ikh1xa = rz62od[_tf40p],
        r6$u2j = ikh1xa['qName'],
        qvge7 = ikh1xa['value'],
        hxkia1 = r6$u2j['indexOf'](':');if (hxkia1 > 0x0) var qsg8cl = ikh1xa['prefix'] = r6$u2j['slice'](0x0, hxkia1),
        g9csl = r6$u2j['slice'](hxkia1 + 0x1),
        f043t_ = 'xmlns' === qsg8cl && g9csl;else g9csl = r6$u2j, qsg8cl = null, f043t_ = 'xmlns' === r6$u2j && '';ikh1xa['localName'] = g9csl, f043t_ !== !0x1 && (null == rzj6 && (rzj6 = {}, gk1ih(aki1, aki1 = {})), aki1[f043t_] = rzj6[f043t_] = qvge7, ikh1xa['uri'] = 'http://www.w3.org/2000/xmlns/', eqygv7['startPrefixMapping'](f043t_, qvge7));
  }for (var _tf40p = rz62od['length']; _tf40p--;) {
    ikh1xa = rz62od[_tf40p];var qsg8cl = ikh1xa['prefix'];qsg8cl && ('xml' === qsg8cl && (ikh1xa['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qsg8cl && (ikh1xa['uri'] = aki1[qsg8cl || '']));
  }var hxkia1 = s9c8['indexOf'](':');hxkia1 > 0x0 ? (qsg8cl = rz62od['prefix'] = s9c8['slice'](0x0, hxkia1), g9csl = rz62od['localName'] = s9c8['slice'](hxkia1 + 0x1)) : (qsg8cl = null, g9csl = rz62od['localName'] = s9c8);var ykvwe7 = rz62od['uri'] = aki1[qsg8cl || ''];if (eqygv7['startElement'](ykvwe7, g9csl, s9c8, rz62od), !rz62od['closed']) return rz62od['currentNSMap'] = aki1, rz62od['localNSMap'] = rzj6, !0x0;if (eqygv7['endElement'](ykvwe7, g9csl, s9c8), rzj6) {
    for (qsg8cl in rzj6) eqygv7['endPrefixMapping'](qsg8cl);
  }
}function gyqe7vw(xha1w, ot4dz3, g8sql, yew7kv, xwhak1) {
  if (/^(?:script|textarea)$/i['test'](g8sql)) {
    var do3f4 = xha1w['indexOf']('</' + g8sql + '>', ot4dz3),
        qwev = xha1w['substring'](ot4dz3 + 0x1, do3f4);if (/[&<]/['test'](qwev)) return (/^script$/i['test'](g8sql) ? (xwhak1['characters'](qwev, 0x0, qwev['length']), do3f4) : (qwev = qwev['replace'](/&#?\w+;/g, yew7kv), xwhak1['characters'](qwev, 0x0, qwev['length']), do3f4)
    );
  }return ot4dz3 + 0x1;
}function gev1k(l8c9s, ba5pi0, lq8sgc, _4f3o) {
  var o3t4dz = _4f3o[lq8sgc];return null == o3t4dz && (o3t4dz = l8c9s['lastIndexOf']('</' + lq8sgc + '>'), ba5pi0 > o3t4dz && (o3t4dz = l8c9s['lastIndexOf']('</' + lq8sgc)), _4f3o[lq8sgc] = o3t4dz), ba5pi0 > o3t4dz;
}function gk1ih(ba5h, vkye7w) {
  for (var vy7we in ba5h) vkye7w[vy7we] = ba5h[vy7we];
}function gbp_f5(d2rzj, l8csgq, cl, a5b0pi) {
  var zdjr2 = d2rzj['charAt'](l8csgq + 0x2);switch (zdjr2) {case '-':
      if ('-' === d2rzj['charAt'](l8csgq + 0x3)) {
        var o62zd3 = d2rzj['indexOf']('-->', l8csgq + 0x4);return o62zd3 > l8csgq ? (cl['comment'](d2rzj, l8csgq + 0x4, o62zd3 - l8csgq - 0x4), o62zd3 + 0x3) : (a5b0pi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == d2rzj['substr'](l8csgq + 0x3, 0x6)) {
        var o62zd3 = d2rzj['indexOf'](']]>', l8csgq + 0x9);return cl['startCDATA'](), cl['characters'](d2rzj, l8csgq + 0x9, o62zd3 - l8csgq - 0x9), cl['endCDATA'](), o62zd3 + 0x3;
      }var bip_50 = gaxp5(d2rzj, l8csgq),
          w1xykh = bip_50['length'];if (w1xykh > 0x1 && /!doctype/i['test'](bip_50[0x0][0x0])) {
        var $6ruj2 = bip_50[0x1][0x0],
            mj6u$ = w1xykh > 0x3 && /^public$/i['test'](bip_50[0x2][0x0]) && bip_50[0x3][0x0],
            qewvy = w1xykh > 0x4 && bip_50[0x4][0x0],
            ix1ahk = bip_50[w1xykh - 0x1];return cl['startDTD']($6ruj2, mj6u$ && mj6u$['replace'](/^(['"])(.*?)\1$/, '$2'), qewvy && qewvy['replace'](/^(['"])(.*?)\1$/, '$2')), cl['endDTD'](), ix1ahk['index'] + ix1ahk[0x0]['length'];
      }}return -0x1;
}function gi1xak(qw, $j2zr6, i50bap) {
  var o3t = qw['indexOf']('?>', $j2zr6);if (o3t) {
    var ywh1ek = qw['substring']($j2zr6, o3t)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ywh1ek) {
      {
        ywh1ek[0x0]['length'];
      }return i50bap['processingInstruction'](ywh1ek[0x1], ywh1ek[0x2]), o3t + 0x2;
    }return -0x1;
  }return -0x1;
}function gxbh() {}function go4d23(yewk1, d62o) {
  return yewk1['__proto__'] = d62o, yewk1;
}function gaxp5(cegqv, h1x5ai) {
  var rj2u6$,
      j$26rz = [],
      z62jrd = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (z62jrd['lastIndex'] = h1x5ai, z62jrd['exec'](cegqv); rj2u6$ = z62jrd['exec'](cegqv);) if (j$26rz['push'](rj2u6$), rj2u6$[0x1]) return j$26rz;
}var gd34to = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ggs9lc = new RegExp('[\\-\\.0-9' + gd34to['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gey7kwv = new RegExp('^' + gd34to['source'] + ggs9lc['source'] + '*(?::' + gd34to['source'] + ggs9lc['source'] + '*)?$'),
    gyq7veg = 0x0,
    gvwy1e = 0x1,
    gyqg = 0x2,
    ggy7ev = 0x3,
    gaipx5b = 0x4,
    gky1ev = 0x5,
    g$j6m = 0x6,
    goz36d = 0x7;gz2ro['prototype'] = { 'parse': function (ew1yvk, qywe, p0ft) {
    var o4f3t = this['domBuilder'];o4f3t['startDocument'](), gk1ih(qywe, qywe = {}), gr$j2(ew1yvk, qywe, p0ft, o4f3t, this['errorHandler']), o4f3t['endDocument']();
  } }, gxbh['prototype'] = { 'setTagName': function (gvcs7q) {
    if (!gey7kwv['test'](gvcs7q)) throw new Error('invalid tagName:' + gvcs7q);this['tagName'] = gvcs7q;
  }, 'add': function (xpab, c7s8, d6r2oz) {
    if (!gey7kwv['test'](xpab)) throw new Error('invalid attribute:' + xpab);this[this['length']++] = { 'qName': xpab, 'value': c7s8, 'offset': d6r2oz };
  }, 'length': 0x0, 'getLocalName': function (sq8cg7) {
    return this[sq8cg7]['localName'];
  }, 'getLocator': function (p5a0b) {
    return this[p5a0b]['locator'];
  }, 'getQName': function (j6r$) {
    return this[j6r$]['qName'];
  }, 'getURI': function (a5ixh1) {
    return this[a5ixh1]['uri'];
  }, 'getValue': function (i5x1h) {
    return this[i5x1h]['value'];
  } }, go4d23({}, go4d23['prototype']) instanceof go4d23 || (go4d23 = function (a1xhi5, vqsg7) {
  function _ptb() {}_ptb['prototype'] = vqsg7, _ptb = new _ptb();for (vqsg7 in a1xhi5) _ptb[vqsg7] = a1xhi5[vqsg7];return _ptb;
}), exports['XMLReader'] = gz2ro;