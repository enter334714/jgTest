var m = wx.$g;
function gia5b0p() {}function gd4o3tz(fot_34, cvg7s, tof3d, sgcq7, do2zr6) {
  function c7gsv(dzo623) {
    if (dzo623 > 0xffff) {
      dzo623 -= 0x10000;var cqg87 = 0xd800 + (dzo623 >> 0xa),
          jr6mu$ = 0xdc00 + (0x3ff & dzo623);return String['fromCharCode'](cqg87, jr6mu$);
    }return String['fromCharCode'](dzo623);
  }function o4f_(bxi5h) {
    var z23 = bxi5h['slice'](0x1, -0x1);return z23 in tof3d ? tof3d[z23] : '#' === z23['charAt'](0x0) ? c7gsv(parseInt(z23['substr'](0x1)['replace']('x', '0x'))) : (do2zr6['error']('entity not found:' + bxi5h), bxi5h);
  }function f_43o(ekwyv) {
    if (ekwyv > gqlcs) {
      var o62dzr = fot_34['substring'](gqlcs, ekwyv)['replace'](/&#?\w+;/g, o4f_);lcgsq8 && $2r6j(gqlcs), sgcq7['characters'](o62dzr, 0x0, ekwyv - gqlcs), gqlcs = ekwyv;
    }
  }function $2r6j(yvwk7e, xbip5) {
    for (; yvwk7e >= dz6or && (xbip5 = xabi5h['exec'](fot_34));) d2rjz6 = xbip5['index'], dz6or = d2rjz6 + xbip5[0x0]['length'], lcgsq8['lineNumber']++;lcgsq8['columnNumber'] = yvwk7e - d2rjz6 + 0x1;
  }for (var d2rjz6 = 0x0, dz6or = 0x0, xabi5h = /.*(?:\r\n?|\n)|.*$/g, lcgsq8 = sgcq7['locator'], w1hey = [{ 'currentNSMap': cvg7s }], e7qc = {}, gqlcs = 0x0;;) {
    try {
      var r6u2$j = fot_34['indexOf']('<', gqlcs);if (0x0 > r6u2$j) {
        if (!fot_34['substr'](gqlcs)['match'](/^\s*$/)) {
          var dfto34 = sgcq7['doc'],
              xhyw = dfto34['createTextNode'](fot_34['substr'](gqlcs));dfto34['appendChild'](xhyw), sgcq7['currentElement'] = xhyw;
        }return;
      }switch (r6u2$j > gqlcs && f_43o(r6u2$j), fot_34['charAt'](r6u2$j + 0x1)) {case '/':
          var gv7qs = fot_34['indexOf']('>', r6u2$j + 0x3),
              scg7qv = fot_34['substring'](r6u2$j + 0x2, gv7qs),
              sg8qcl = w1hey['pop']();0x0 > gv7qs ? (scg7qv = fot_34['substring'](r6u2$j + 0x2)['replace'](/[\s<].*/, ''), do2zr6['error']('end tag name: ' + scg7qv + ' is not complete:' + sg8qcl['tagName']), gv7qs = r6u2$j + 0x1 + scg7qv['length']) : scg7qv['match'](/\s</) && (scg7qv = scg7qv['replace'](/[\s<].*/, ''), do2zr6['error']('end tag name: ' + scg7qv + ' maybe not complete'), gv7qs = r6u2$j + 0x1 + scg7qv['length']);var $zj6r2 = sg8qcl['localNSMap'],
              j26$z = sg8qcl['tagName'] == scg7qv,
              v7gscq = j26$z || sg8qcl['tagName'] && sg8qcl['tagName']['toLowerCase']() == scg7qv['toLowerCase']();if (v7gscq) {
            if (sgcq7['endElement'](sg8qcl['uri'], sg8qcl['localName'], scg7qv), $zj6r2) {
              for (var hwka1x in $zj6r2) sgcq7['endPrefixMapping'](hwka1x);
            }j26$z || do2zr6['fatalError']('end tag name: ' + scg7qv + ' is not match the current start tagName:' + sg8qcl['tagName']);
          } else w1hey['push'](sg8qcl);gv7qs++;break;case '?':
          lcgsq8 && $2r6j(r6u2$j), gv7qs = gz4o32d(fot_34, r6u2$j, sgcq7);break;case '!':
          lcgsq8 && $2r6j(r6u2$j), gv7qs = gv7qw(fot_34, r6u2$j, sgcq7, do2zr6);break;default:
          lcgsq8 && $2r6j(r6u2$j);var ax1h = new g_04ft3(),
              v7geqc = w1hey[w1hey['length'] - 0x1]['currentNSMap'],
              gv7qs = goz3d26(fot_34, r6u2$j, ax1h, v7geqc, o4f_, do2zr6),
              _f043t = ax1h['length'];if (!ax1h['closed'] && gp4f_t0(fot_34, gv7qs, ax1h['tagName'], e7qc) && (ax1h['closed'] = !0x0, tof3d['nbsp'] || do2zr6['warning']('unclosed xml attribute')), lcgsq8 && _f043t) {
            for (var k1ahi = gy1wehk(lcgsq8, {}), tdo3f = 0x0; _f043t > tdo3f; tdo3f++) {
              var dz2rj = ax1h[tdo3f];$2r6j(dz2rj['offset']), dz2rj['locator'] = gy1wehk(lcgsq8, {});
            }sgcq7['locator'] = k1ahi, gvq7s(ax1h, sgcq7, v7geqc) && w1hey['push'](ax1h), sgcq7['locator'] = lcgsq8;
          } else gvq7s(ax1h, sgcq7, v7geqc) && w1hey['push'](ax1h);'http://www.w3.org/1999/xhtml' !== ax1h['uri'] || ax1h['closed'] ? gv7qs++ : gv7qs = gk1hewy(fot_34, gv7qs, ax1h['tagName'], o4f_, sgcq7);}
    } catch (b05) {
      do2zr6['error']('element parse error: ' + b05), gv7qs = -0x1;
    }gv7qs > gqlcs ? gqlcs = gv7qs : f_43o(Math['max'](r6u2$j, gqlcs) + 0x1);
  }
}function gy1wehk(w7vqe, c98sl) {
  return c98sl['lineNumber'] = w7vqe['lineNumber'], c98sl['columnNumber'] = w7vqe['columnNumber'], c98sl;
}function goz3d26(eqy7vg, r6$u2j, j6$r2u, j6rz2d, r$z2, gsq8lc) {
  for (var csg98, t_0bfp, v7wyeq = ++r6$u2j, gvy7eq = ga0bp;;) {
    var glc9s = eqy7vg['charAt'](v7wyeq);switch (glc9s) {case '=':
        if (gvy7eq === gvscq7) csg98 = eqy7vg['slice'](r6$u2j, v7wyeq), gvy7eq = gpi0b5;else {
          if (gvy7eq !== gi1kax) throw new Error('attribute equal must after attrName');gvy7eq = gpi0b5;
        }break;case '\x27':case '\x22':
        if (gvy7eq === gpi0b5 || gvy7eq === gvscq7) {
          if (gvy7eq === gvscq7 && (gsq8lc['warning']('attribute value must after "="'), csg98 = eqy7vg['slice'](r6$u2j, v7wyeq)), r6$u2j = v7wyeq + 0x1, v7wyeq = eqy7vg['indexOf'](glc9s, r6$u2j), !(v7wyeq > 0x0)) throw new Error('attribute value no end \'' + glc9s + '\' match');t_0bfp = eqy7vg['slice'](r6$u2j, v7wyeq)['replace'](/&#?\w+;/g, r$z2), j6$r2u['add'](csg98, t_0bfp, r6$u2j - 0x1), gvy7eq = gcve7q;
        } else {
          if (gvy7eq != gi51ha) throw new Error('attribute value must after "="');t_0bfp = eqy7vg['slice'](r6$u2j, v7wyeq)['replace'](/&#?\w+;/g, r$z2), j6$r2u['add'](csg98, t_0bfp, r6$u2j), gsq8lc['warning']('attribute "' + csg98 + '" missed start quot(' + glc9s + ')!!'), r6$u2j = v7wyeq + 0x1, gvy7eq = gcve7q;
        }break;case '/':
        switch (gvy7eq) {case ga0bp:
            j6$r2u['setTagName'](eqy7vg['slice'](r6$u2j, v7wyeq));case gcve7q:case gf_0t4p:case ggl8sc:
            gvy7eq = ggl8sc, j6$r2u['closed'] = !0x0;case gi51ha:case gvscq7:case gi1kax:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gsq8lc['error']('unexpected end of input'), gvy7eq == ga0bp && j6$r2u['setTagName'](eqy7vg['slice'](r6$u2j, v7wyeq)), v7wyeq;case '>':
        switch (gvy7eq) {case ga0bp:
            j6$r2u['setTagName'](eqy7vg['slice'](r6$u2j, v7wyeq));case gcve7q:case gf_0t4p:case ggl8sc:
            break;case gi51ha:case gvscq7:
            t_0bfp = eqy7vg['slice'](r6$u2j, v7wyeq), '/' === t_0bfp['slice'](-0x1) && (j6$r2u['closed'] = !0x0, t_0bfp = t_0bfp['slice'](0x0, -0x1));case gi1kax:
            gvy7eq === gi1kax && (t_0bfp = csg98), gvy7eq == gi51ha ? (gsq8lc['warning']('attribute "' + t_0bfp + '" missed quot(")!!'), j6$r2u['add'](csg98, t_0bfp['replace'](/&#?\w+;/g, r$z2), r6$u2j)) : ('http://www.w3.org/1999/xhtml' === j6rz2d[''] && t_0bfp['match'](/^(?:disabled|checked|selected)$/i) || gsq8lc['warning']('attribute "' + t_0bfp + '" missed value!! "' + t_0bfp + '" instead!!'), j6$r2u['add'](t_0bfp, t_0bfp, r6$u2j));break;case gpi0b5:
            throw new Error('attribute value missed!!');}return v7wyeq;case '\u0080':
        glc9s = '\x20';default:
        if ('\x20' >= glc9s) switch (gvy7eq) {case ga0bp:
            j6$r2u['setTagName'](eqy7vg['slice'](r6$u2j, v7wyeq)), gvy7eq = gf_0t4p;break;case gvscq7:
            csg98 = eqy7vg['slice'](r6$u2j, v7wyeq), gvy7eq = gi1kax;break;case gi51ha:
            var t_0bfp = eqy7vg['slice'](r6$u2j, v7wyeq)['replace'](/&#?\w+;/g, r$z2);gsq8lc['warning']('attribute "' + t_0bfp + '" missed quot(")!!'), j6$r2u['add'](csg98, t_0bfp, r6$u2j);case gcve7q:
            gvy7eq = gf_0t4p;} else switch (gvy7eq) {case gi1kax:
            {
              j6$r2u['tagName'];
            }'http://www.w3.org/1999/xhtml' === j6rz2d[''] && csg98['match'](/^(?:disabled|checked|selected)$/i) || gsq8lc['warning']('attribute "' + csg98 + '" missed value!! "' + csg98 + '" instead2!!'), j6$r2u['add'](csg98, csg98, r6$u2j), r6$u2j = v7wyeq, gvy7eq = gvscq7;break;case gcve7q:
            gsq8lc['warning']('attribute space is required"' + csg98 + '\x22!!');case gf_0t4p:
            gvy7eq = gvscq7, r6$u2j = v7wyeq;break;case gpi0b5:
            gvy7eq = gi51ha, r6$u2j = v7wyeq;break;case ggl8sc:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}v7wyeq++;
  }
}function gvq7s(wekhy, drz62o, fdot34) {
  for (var abi = wekhy['tagName'], rozd2 = null, ipa5 = wekhy['length']; ipa5--;) {
    var jrd26 = wekhy[ipa5],
        c7ev = jrd26['qName'],
        zrd62o = jrd26['value'],
        glsq = c7ev['indexOf'](':');if (glsq > 0x0) var ywkh1e = jrd26['prefix'] = c7ev['slice'](0x0, glsq),
        p5ibxa = c7ev['slice'](glsq + 0x1),
        i1xkh = 'xmlns' === ywkh1e && p5ibxa;else p5ibxa = c7ev, ywkh1e = null, i1xkh = 'xmlns' === c7ev && '';jrd26['localName'] = p5ibxa, i1xkh !== !0x1 && (null == rozd2 && (rozd2 = {}, gt3zd(fdot34, fdot34 = {})), fdot34[i1xkh] = rozd2[i1xkh] = zrd62o, jrd26['uri'] = 'http://www.w3.org/2000/xmlns/', drz62o['startPrefixMapping'](i1xkh, zrd62o));
  }for (var ipa5 = wekhy['length']; ipa5--;) {
    jrd26 = wekhy[ipa5];var ywkh1e = jrd26['prefix'];ywkh1e && ('xml' === ywkh1e && (jrd26['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ywkh1e && (jrd26['uri'] = fdot34[ywkh1e || '']));
  }var glsq = abi['indexOf'](':');glsq > 0x0 ? (ywkh1e = wekhy['prefix'] = abi['slice'](0x0, glsq), p5ibxa = wekhy['localName'] = abi['slice'](glsq + 0x1)) : (ywkh1e = null, p5ibxa = wekhy['localName'] = abi);var kwy1v = wekhy['uri'] = fdot34[ywkh1e || ''];if (drz62o['startElement'](kwy1v, p5ibxa, abi, wekhy), !wekhy['closed']) return wekhy['currentNSMap'] = fdot34, wekhy['localNSMap'] = rozd2, !0x0;if (drz62o['endElement'](kwy1v, p5ibxa, abi), rozd2) {
    for (ywkh1e in rozd2) drz62o['endPrefixMapping'](ywkh1e);
  }
}function gk1hewy(j$6u2r, hk1ix, a0pib, hkwa1, eqcg) {
  if (/^(?:script|textarea)$/i['test'](a0pib)) {
    var xywh = j$6u2r['indexOf']('</' + a0pib + '>', hk1ix),
        vke1y = j$6u2r['substring'](hk1ix + 0x1, xywh);if (/[&<]/['test'](vke1y)) return (/^script$/i['test'](a0pib) ? (eqcg['characters'](vke1y, 0x0, vke1y['length']), xywh) : (vke1y = vke1y['replace'](/&#?\w+;/g, hkwa1), eqcg['characters'](vke1y, 0x0, vke1y['length']), xywh)
    );
  }return hk1ix + 0x1;
}function gp4f_t0(x1hi5a, wyve, ec7gq, p0b5_f) {
  var e1wvyk = p0b5_f[ec7gq];return null == e1wvyk && (e1wvyk = x1hi5a['lastIndexOf']('</' + ec7gq + '>'), wyve > e1wvyk && (e1wvyk = x1hi5a['lastIndexOf']('</' + ec7gq)), p0b5_f[ec7gq] = e1wvyk), wyve > e1wvyk;
}function gt3zd(p0_bf5, xhy1wk) {
  for (var wyek1h in p0_bf5) xhy1wk[wyek1h] = p0_bf5[wyek1h];
}function gv7qw(u6$j2r, g7svc, cg7vqe, ipa0b) {
  var kxw = u6$j2r['charAt'](g7svc + 0x2);switch (kxw) {case '-':
      if ('-' === u6$j2r['charAt'](g7svc + 0x3)) {
        var hwy1e = u6$j2r['indexOf']('-->', g7svc + 0x4);return hwy1e > g7svc ? (cg7vqe['comment'](u6$j2r, g7svc + 0x4, hwy1e - g7svc - 0x4), hwy1e + 0x3) : (ipa0b['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == u6$j2r['substr'](g7svc + 0x3, 0x6)) {
        var hwy1e = u6$j2r['indexOf'](']]>', g7svc + 0x9);return cg7vqe['startCDATA'](), cg7vqe['characters'](u6$j2r, g7svc + 0x9, hwy1e - g7svc - 0x9), cg7vqe['endCDATA'](), hwy1e + 0x3;
      }var c8s7g = gbtfp(u6$j2r, g7svc),
          xwyhk1 = c8s7g['length'];if (xwyhk1 > 0x1 && /!doctype/i['test'](c8s7g[0x0][0x0])) {
        var yqv7 = c8s7g[0x1][0x0],
            drj = xwyhk1 > 0x3 && /^public$/i['test'](c8s7g[0x2][0x0]) && c8s7g[0x3][0x0],
            w1xak = xwyhk1 > 0x4 && c8s7g[0x4][0x0],
            pt04_ = c8s7g[xwyhk1 - 0x1];return cg7vqe['startDTD'](yqv7, drj && drj['replace'](/^(['"])(.*?)\1$/, '$2'), w1xak && w1xak['replace'](/^(['"])(.*?)\1$/, '$2')), cg7vqe['endDTD'](), pt04_['index'] + pt04_[0x0]['length'];
      }}return -0x1;
}function gz4o32d(k1ihx, otf_3, bxih) {
  var qvy7ge = k1ihx['indexOf']('?>', otf_3);if (qvy7ge) {
    var sq7vcg = k1ihx['substring'](otf_3, qvy7ge)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (sq7vcg) {
      {
        sq7vcg[0x0]['length'];
      }return bxih['processingInstruction'](sq7vcg[0x1], sq7vcg[0x2]), qvy7ge + 0x2;
    }return -0x1;
  }return -0x1;
}function g_04ft3() {}function gf0_p(bp_f5, wveqy7) {
  return bp_f5['__proto__'] = wveqy7, bp_f5;
}function gbtfp(ap50bi, t_f4p0) {
  var f05,
      ibap50 = [],
      wkvey1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (wkvey1['lastIndex'] = t_f4p0, wkvey1['exec'](ap50bi); f05 = wkvey1['exec'](ap50bi);) if (ibap50['push'](f05), f05[0x1]) return ibap50;
}var giha5b = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gevq7c = new RegExp('[\\-\\.0-9' + giha5b['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ggveqc7 = new RegExp('^' + giha5b['source'] + gevq7c['source'] + '*(?::' + giha5b['source'] + gevq7c['source'] + '*)?$'),
    ga0bp = 0x0,
    gvscq7 = 0x1,
    gi1kax = 0x2,
    gpi0b5 = 0x3,
    gi51ha = 0x4,
    gcve7q = 0x5,
    gf_0t4p = 0x6,
    ggl8sc = 0x7;gia5b0p['prototype'] = { 'parse': function ($6rjz, xh5ba, q8lgcs) {
    var d34tzo = this['domBuilder'];d34tzo['startDocument'](), gt3zd(xh5ba, xh5ba = {}), gd4o3tz($6rjz, xh5ba, q8lgcs, d34tzo, this['errorHandler']), d34tzo['endDocument']();
  } }, g_04ft3['prototype'] = { 'setTagName': function (o23z6d) {
    if (!ggveqc7['test'](o23z6d)) throw new Error('invalid tagName:' + o23z6d);this['tagName'] = o23z6d;
  }, 'add': function (j$r62, $6umrj, ftdo4) {
    if (!ggveqc7['test'](j$r62)) throw new Error('invalid attribute:' + j$r62);this[this['length']++] = { 'qName': j$r62, 'value': $6umrj, 'offset': ftdo4 };
  }, 'length': 0x0, 'getLocalName': function (cl9gs8) {
    return this[cl9gs8]['localName'];
  }, 'getLocator': function (kw1vy) {
    return this[kw1vy]['locator'];
  }, 'getQName': function (vgc7eq) {
    return this[vgc7eq]['qName'];
  }, 'getURI': function (lgs98) {
    return this[lgs98]['uri'];
  }, 'getValue': function ($u6mr) {
    return this[$u6mr]['value'];
  } }, gf0_p({}, gf0_p['prototype']) instanceof gf0_p || (gf0_p = function (um6r$, g7vqye) {
  function qc7gvs() {}qc7gvs['prototype'] = g7vqye, qc7gvs = new qc7gvs();for (g7vqye in um6r$) qc7gvs[g7vqye] = um6r$[g7vqye];return qc7gvs;
}), exports['XMLReader'] = gia5b0p;