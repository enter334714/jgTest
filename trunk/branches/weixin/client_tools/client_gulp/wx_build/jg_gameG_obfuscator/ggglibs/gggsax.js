var m = wx.$g;
function gyqw() {}function gapib0(jr6mu$, qs8glc, dtf3, h1a5ix, xib5p) {
  function u$2rj(xaki) {
    if (xaki > 0xffff) {
      xaki -= 0x10000;var kihx = 0xd800 + (xaki >> 0xa),
          j$z2r6 = 0xdc00 + (0x3ff & xaki);return String['fromCharCode'](kihx, j$z2r6);
    }return String['fromCharCode'](xaki);
  }function kvye(y7eqwv) {
    var evg7cq = y7eqwv['slice'](0x1, -0x1);return evg7cq in dtf3 ? dtf3[evg7cq] : '#' === evg7cq['charAt'](0x0) ? u$2rj(parseInt(evg7cq['substr'](0x1)['replace']('x', '0x'))) : (xib5p['error']('entity not found:' + y7eqwv), y7eqwv);
  }function bxiap(cgve7q) {
    if (cgve7q > xib) {
      var x5ahi = jr6mu$['substring'](xib, cgve7q)['replace'](/&#?\w+;/g, kvye);pb_0 && droz26(xib), h1a5ix['characters'](x5ahi, 0x0, cgve7q - xib), xib = cgve7q;
    }
  }function droz26(tzo4d, wh1axk) {
    for (; tzo4d >= o236z && (wh1axk = f_o3t4['exec'](jr6mu$));) iapb0 = wh1axk['index'], o236z = iapb0 + wh1axk[0x0]['length'], pb_0['lineNumber']++;pb_0['columnNumber'] = tzo4d - iapb0 + 0x1;
  }for (var iapb0 = 0x0, o236z = 0x0, f_o3t4 = /.*(?:\r\n?|\n)|.*$/g, pb_0 = h1a5ix['locator'], qc78sg = [{ 'currentNSMap': qs8glc }], vy7ge = {}, xib = 0x0;;) {
    try {
      var slgqc8 = jr6mu$['indexOf']('<', xib);if (0x0 > slgqc8) {
        if (!jr6mu$['substr'](xib)['match'](/^\s*$/)) {
          var o36 = h1a5ix['doc'],
              bhax5 = o36['createTextNode'](jr6mu$['substr'](xib));o36['appendChild'](bhax5), h1a5ix['currentElement'] = bhax5;
        }return;
      }switch (slgqc8 > xib && bxiap(slgqc8), jr6mu$['charAt'](slgqc8 + 0x1)) {case '/':
          var i5p0ba = jr6mu$['indexOf']('>', slgqc8 + 0x3),
              pi5xa = jr6mu$['substring'](slgqc8 + 0x2, i5p0ba),
              $rj6mu = qc78sg['pop']();0x0 > i5p0ba ? (pi5xa = jr6mu$['substring'](slgqc8 + 0x2)['replace'](/[\s<].*/, ''), xib5p['error']('end tag name: ' + pi5xa + ' is not complete:' + $rj6mu['tagName']), i5p0ba = slgqc8 + 0x1 + pi5xa['length']) : pi5xa['match'](/\s</) && (pi5xa = pi5xa['replace'](/[\s<].*/, ''), xib5p['error']('end tag name: ' + pi5xa + ' maybe not complete'), i5p0ba = slgqc8 + 0x1 + pi5xa['length']);var bf5_0 = $rj6mu['localNSMap'],
              vg7ceq = $rj6mu['tagName'] == pi5xa,
              axi5h1 = vg7ceq || $rj6mu['tagName'] && $rj6mu['tagName']['toLowerCase']() == pi5xa['toLowerCase']();if (axi5h1) {
            if (h1a5ix['endElement']($rj6mu['uri'], $rj6mu['localName'], pi5xa), bf5_0) {
              for (var ha1k in bf5_0) h1a5ix['endPrefixMapping'](ha1k);
            }vg7ceq || xib5p['fatalError']('end tag name: ' + pi5xa + ' is not match the current start tagName:' + $rj6mu['tagName']);
          } else qc78sg['push']($rj6mu);i5p0ba++;break;case '?':
          pb_0 && droz26(slgqc8), i5p0ba = ghi5xa1(jr6mu$, slgqc8, h1a5ix);break;case '!':
          pb_0 && droz26(slgqc8), i5p0ba = gv7qeyg(jr6mu$, slgqc8, h1a5ix, xib5p);break;default:
          pb_0 && droz26(slgqc8);var rumj$6 = new g_0i5b(),
              vc7 = qc78sg[qc78sg['length'] - 0x1]['currentNSMap'],
              i5p0ba = gfp(jr6mu$, slgqc8, rumj$6, vc7, kvye, xib5p),
              p0ia5b = rumj$6['length'];if (!rumj$6['closed'] && gpbi50(jr6mu$, i5p0ba, rumj$6['tagName'], vy7ge) && (rumj$6['closed'] = !0x0, dtf3['nbsp'] || xib5p['warning']('unclosed xml attribute')), pb_0 && p0ia5b) {
            for (var z6jr = gekhy1(pb_0, {}), tf_043 = 0x0; p0ia5b > tf_043; tf_043++) {
              var $umjr6 = rumj$6[tf_043];droz26($umjr6['offset']), $umjr6['locator'] = gekhy1(pb_0, {});
            }h1a5ix['locator'] = z6jr, g_0bip(rumj$6, h1a5ix, vc7) && qc78sg['push'](rumj$6), h1a5ix['locator'] = pb_0;
          } else g_0bip(rumj$6, h1a5ix, vc7) && qc78sg['push'](rumj$6);'http://www.w3.org/1999/xhtml' !== rumj$6['uri'] || rumj$6['closed'] ? i5p0ba++ : i5p0ba = g_tp0(jr6mu$, i5p0ba, rumj$6['tagName'], kvye, h1a5ix);}
    } catch (tf_b0p) {
      xib5p['error']('element parse error: ' + tf_b0p), i5p0ba = -0x1;
    }i5p0ba > xib ? xib = i5p0ba : bxiap(Math['max'](slgqc8, xib) + 0x1);
  }
}function gekhy1(kyeh, ls9cg8) {
  return ls9cg8['lineNumber'] = kyeh['lineNumber'], ls9cg8['columnNumber'] = kyeh['columnNumber'], ls9cg8;
}function gfp(u$mr6, baipx, yhkw1e, z324od, j2zd6, yx) {
  for (var z423d, d2z6rj, kewv7 = ++baipx, e7qvgy = gbpf05;;) {
    var gve7yq = u$mr6['charAt'](kewv7);switch (gve7yq) {case '=':
        if (e7qvgy === gywqe7) z423d = u$mr6['slice'](baipx, kewv7), e7qvgy = gxba5p;else {
          if (e7qvgy !== gjr2u) throw new Error('attribute equal must after attrName');e7qvgy = gxba5p;
        }break;case '\x27':case '\x22':
        if (e7qvgy === gxba5p || e7qvgy === gywqe7) {
          if (e7qvgy === gywqe7 && (yx['warning']('attribute value must after "="'), z423d = u$mr6['slice'](baipx, kewv7)), baipx = kewv7 + 0x1, kewv7 = u$mr6['indexOf'](gve7yq, baipx), !(kewv7 > 0x0)) throw new Error('attribute value no end \'' + gve7yq + '\' match');d2z6rj = u$mr6['slice'](baipx, kewv7)['replace'](/&#?\w+;/g, j2zd6), yhkw1e['add'](z423d, d2z6rj, baipx - 0x1), e7qvgy = gxp5ia;
        } else {
          if (e7qvgy != gabp50) throw new Error('attribute value must after "="');d2z6rj = u$mr6['slice'](baipx, kewv7)['replace'](/&#?\w+;/g, j2zd6), yhkw1e['add'](z423d, d2z6rj, baipx), yx['warning']('attribute "' + z423d + '" missed start quot(' + gve7yq + ')!!'), baipx = kewv7 + 0x1, e7qvgy = gxp5ia;
        }break;case '/':
        switch (e7qvgy) {case gbpf05:
            yhkw1e['setTagName'](u$mr6['slice'](baipx, kewv7));case gxp5ia:case gglcs9:case gpb0ft:
            e7qvgy = gpb0ft, yhkw1e['closed'] = !0x0;case gabp50:case gywqe7:case gjr2u:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yx['error']('unexpected end of input'), e7qvgy == gbpf05 && yhkw1e['setTagName'](u$mr6['slice'](baipx, kewv7)), kewv7;case '>':
        switch (e7qvgy) {case gbpf05:
            yhkw1e['setTagName'](u$mr6['slice'](baipx, kewv7));case gxp5ia:case gglcs9:case gpb0ft:
            break;case gabp50:case gywqe7:
            d2z6rj = u$mr6['slice'](baipx, kewv7), '/' === d2z6rj['slice'](-0x1) && (yhkw1e['closed'] = !0x0, d2z6rj = d2z6rj['slice'](0x0, -0x1));case gjr2u:
            e7qvgy === gjr2u && (d2z6rj = z423d), e7qvgy == gabp50 ? (yx['warning']('attribute "' + d2z6rj + '" missed quot(")!!'), yhkw1e['add'](z423d, d2z6rj['replace'](/&#?\w+;/g, j2zd6), baipx)) : ('http://www.w3.org/1999/xhtml' === z324od[''] && d2z6rj['match'](/^(?:disabled|checked|selected)$/i) || yx['warning']('attribute "' + d2z6rj + '" missed value!! "' + d2z6rj + '" instead!!'), yhkw1e['add'](d2z6rj, d2z6rj, baipx));break;case gxba5p:
            throw new Error('attribute value missed!!');}return kewv7;case '\u0080':
        gve7yq = '\x20';default:
        if ('\x20' >= gve7yq) switch (e7qvgy) {case gbpf05:
            yhkw1e['setTagName'](u$mr6['slice'](baipx, kewv7)), e7qvgy = gglcs9;break;case gywqe7:
            z423d = u$mr6['slice'](baipx, kewv7), e7qvgy = gjr2u;break;case gabp50:
            var d2z6rj = u$mr6['slice'](baipx, kewv7)['replace'](/&#?\w+;/g, j2zd6);yx['warning']('attribute "' + d2z6rj + '" missed quot(")!!'), yhkw1e['add'](z423d, d2z6rj, baipx);case gxp5ia:
            e7qvgy = gglcs9;} else switch (e7qvgy) {case gjr2u:
            {
              yhkw1e['tagName'];
            }'http://www.w3.org/1999/xhtml' === z324od[''] && z423d['match'](/^(?:disabled|checked|selected)$/i) || yx['warning']('attribute "' + z423d + '" missed value!! "' + z423d + '" instead2!!'), yhkw1e['add'](z423d, z423d, baipx), baipx = kewv7, e7qvgy = gywqe7;break;case gxp5ia:
            yx['warning']('attribute space is required"' + z423d + '\x22!!');case gglcs9:
            e7qvgy = gywqe7, baipx = kewv7;break;case gxba5p:
            e7qvgy = gabp50, baipx = kewv7;break;case gpb0ft:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}kewv7++;
  }
}function g_0bip(o3tdf, y7vewk, ju$62r) {
  for (var scq7v = o3tdf['tagName'], x1hawk = null, t40p = o3tdf['length']; t40p--;) {
    var hyw1k = o3tdf[t40p],
        yveq7g = hyw1k['qName'],
        egyq = hyw1k['value'],
        _05fb = yveq7g['indexOf'](':');if (_05fb > 0x0) var xhkw1 = hyw1k['prefix'] = yveq7g['slice'](0x0, _05fb),
        egvy7q = yveq7g['slice'](_05fb + 0x1),
        tf43_o = 'xmlns' === xhkw1 && egvy7q;else egvy7q = yveq7g, xhkw1 = null, tf43_o = 'xmlns' === yveq7g && '';hyw1k['localName'] = egvy7q, tf43_o !== !0x1 && (null == x1hawk && (x1hawk = {}, gpbf_5(ju$62r, ju$62r = {})), ju$62r[tf43_o] = x1hawk[tf43_o] = egyq, hyw1k['uri'] = 'http://www.w3.org/2000/xmlns/', y7vewk['startPrefixMapping'](tf43_o, egyq));
  }for (var t40p = o3tdf['length']; t40p--;) {
    hyw1k = o3tdf[t40p];var xhkw1 = hyw1k['prefix'];xhkw1 && ('xml' === xhkw1 && (hyw1k['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xhkw1 && (hyw1k['uri'] = ju$62r[xhkw1 || '']));
  }var _05fb = scq7v['indexOf'](':');_05fb > 0x0 ? (xhkw1 = o3tdf['prefix'] = scq7v['slice'](0x0, _05fb), egvy7q = o3tdf['localName'] = scq7v['slice'](_05fb + 0x1)) : (xhkw1 = null, egvy7q = o3tdf['localName'] = scq7v);var cs87 = o3tdf['uri'] = ju$62r[xhkw1 || ''];if (y7vewk['startElement'](cs87, egvy7q, scq7v, o3tdf), !o3tdf['closed']) return o3tdf['currentNSMap'] = ju$62r, o3tdf['localNSMap'] = x1hawk, !0x0;if (y7vewk['endElement'](cs87, egvy7q, scq7v), x1hawk) {
    for (xhkw1 in x1hawk) y7vewk['endPrefixMapping'](xhkw1);
  }
}function g_tp0(jr6u$m, kwaxh1, ur$6, z2rd6, wa1kx) {
  if (/^(?:script|textarea)$/i['test'](ur$6)) {
    var to3_4f = jr6u$m['indexOf']('</' + ur$6 + '>', kwaxh1),
        xab5ip = jr6u$m['substring'](kwaxh1 + 0x1, to3_4f);if (/[&<]/['test'](xab5ip)) return (/^script$/i['test'](ur$6) ? (wa1kx['characters'](xab5ip, 0x0, xab5ip['length']), to3_4f) : (xab5ip = xab5ip['replace'](/&#?\w+;/g, z2rd6), wa1kx['characters'](xab5ip, 0x0, xab5ip['length']), to3_4f)
    );
  }return kwaxh1 + 0x1;
}function gpbi50(od6rz, l9gcs8, evkyw7, f_ptb0) {
  var hi51x = f_ptb0[evkyw7];return null == hi51x && (hi51x = od6rz['lastIndexOf']('</' + evkyw7 + '>'), l9gcs8 > hi51x && (hi51x = od6rz['lastIndexOf']('</' + evkyw7)), f_ptb0[evkyw7] = hi51x), l9gcs8 > hi51x;
}function gpbf_5(x5i1h, gvce) {
  for (var hk1a in x5i1h) gvce[hk1a] = x5i1h[hk1a];
}function gv7qeyg(zj62$r, kw1, f4tdo3, $6rum) {
  var u$6mj = zj62$r['charAt'](kw1 + 0x2);switch (u$6mj) {case '-':
      if ('-' === zj62$r['charAt'](kw1 + 0x3)) {
        var qvye7 = zj62$r['indexOf']('-->', kw1 + 0x4);return qvye7 > kw1 ? (f4tdo3['comment'](zj62$r, kw1 + 0x4, qvye7 - kw1 - 0x4), qvye7 + 0x3) : ($6rum['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == zj62$r['substr'](kw1 + 0x3, 0x6)) {
        var qvye7 = zj62$r['indexOf'](']]>', kw1 + 0x9);return f4tdo3['startCDATA'](), f4tdo3['characters'](zj62$r, kw1 + 0x9, qvye7 - kw1 - 0x9), f4tdo3['endCDATA'](), qvye7 + 0x3;
      }var fot3d4 = gt304f_(zj62$r, kw1),
          l9gc8s = fot3d4['length'];if (l9gc8s > 0x1 && /!doctype/i['test'](fot3d4[0x0][0x0])) {
        var gsvcq7 = fot3d4[0x1][0x0],
            ru6$j = l9gc8s > 0x3 && /^public$/i['test'](fot3d4[0x2][0x0]) && fot3d4[0x3][0x0],
            xhwy1k = l9gc8s > 0x4 && fot3d4[0x4][0x0],
            ygqve7 = fot3d4[l9gc8s - 0x1];return f4tdo3['startDTD'](gsvcq7, ru6$j && ru6$j['replace'](/^(['"])(.*?)\1$/, '$2'), xhwy1k && xhwy1k['replace'](/^(['"])(.*?)\1$/, '$2')), f4tdo3['endDTD'](), ygqve7['index'] + ygqve7[0x0]['length'];
      }}return -0x1;
}function ghi5xa1(wkv1y, vyk1ew, jz6$2r) {
  var y1x = wkv1y['indexOf']('?>', vyk1ew);if (y1x) {
    var ce7qvg = wkv1y['substring'](vyk1ew, y1x)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ce7qvg) {
      {
        ce7qvg[0x0]['length'];
      }return jz6$2r['processingInstruction'](ce7qvg[0x1], ce7qvg[0x2]), y1x + 0x2;
    }return -0x1;
  }return -0x1;
}function g_0i5b() {}function gqgcv7e(vygeq, hy1k) {
  return vygeq['__proto__'] = hy1k, vygeq;
}function gt304f_(_tf40, pxba5) {
  var rd26z,
      $6jzr2 = [],
      cgevq7 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (cgevq7['lastIndex'] = pxba5, cgevq7['exec'](_tf40); rd26z = cgevq7['exec'](_tf40);) if ($6jzr2['push'](rd26z), rd26z[0x1]) return $6jzr2;
}var gqew7yv = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gxka1h = new RegExp('[\\-\\.0-9' + gqew7yv['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    g_ot3 = new RegExp('^' + gqew7yv['source'] + gxka1h['source'] + '*(?::' + gqew7yv['source'] + gxka1h['source'] + '*)?$'),
    gbpf05 = 0x0,
    gywqe7 = 0x1,
    gjr2u = 0x2,
    gxba5p = 0x3,
    gabp50 = 0x4,
    gxp5ia = 0x5,
    gglcs9 = 0x6,
    gpb0ft = 0x7;gyqw['prototype'] = { 'parse': function (r6u$, ewykh1, pxb5ai) {
    var to34_ = this['domBuilder'];to34_['startDocument'](), gpbf_5(ewykh1, ewykh1 = {}), gapib0(r6u$, ewykh1, pxb5ai, to34_, this['errorHandler']), to34_['endDocument']();
  } }, g_0i5b['prototype'] = { 'setTagName': function (gev7y) {
    if (!g_ot3['test'](gev7y)) throw new Error('invalid tagName:' + gev7y);this['tagName'] = gev7y;
  }, 'add': function (gqve7, u26r, tof4) {
    if (!g_ot3['test'](gqve7)) throw new Error('invalid attribute:' + gqve7);this[this['length']++] = { 'qName': gqve7, 'value': u26r, 'offset': tof4 };
  }, 'length': 0x0, 'getLocalName': function (xak1h) {
    return this[xak1h]['localName'];
  }, 'getLocator': function (svcq) {
    return this[svcq]['locator'];
  }, 'getQName': function (wke1vy) {
    return this[wke1vy]['qName'];
  }, 'getURI': function (vgc7s) {
    return this[vgc7s]['uri'];
  }, 'getValue': function (vye7qw) {
    return this[vye7qw]['value'];
  } }, gqgcv7e({}, gqgcv7e['prototype']) instanceof gqgcv7e || (gqgcv7e = function (f0t_34, rz26jd) {
  function xb5a() {}xb5a['prototype'] = rz26jd, xb5a = new xb5a();for (rz26jd in f0t_34) xb5a[rz26jd] = f0t_34[rz26jd];return xb5a;
}), exports['XMLReader'] = gyqw;