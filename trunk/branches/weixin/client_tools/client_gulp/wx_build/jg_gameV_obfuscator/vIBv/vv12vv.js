var Q = wx.$v;
function vos3$n4() {}function vd0cj(qgpwv, qgvpx, k5c7v, h_t21y, h_yt21) {
  function ulz68b(ebqwg8) {
    if (ebqwg8 > 0xffff) {
      ebqwg8 -= 0x10000;var c0kv5 = 0xd800 + (ebqwg8 >> 0xa),
          f9$r = 0xdc00 + (0x3ff & ebqwg8);return String['fromCharCode'](c0kv5, f9$r);
    }return String['fromCharCode'](ebqwg8);
  }function gbew8q(yt21_h) {
    var hl1z6 = yt21_h['slice'](0x1, -0x1);return hl1z6 in k5c7v ? k5c7v[hl1z6] : '#' === hl1z6['charAt'](0x0) ? ulz68b(parseInt(hl1z6['substr'](0x1)['replace']('x', '0x'))) : (h_yt21['error']('entity not found:' + yt21_h), yt21_h);
  }function k0vp(ebqw8u) {
    if (ebqw8u > dmac0) {
      var vkc05 = qgpwv['substring'](dmac0, ebqw8u)['replace'](/&#?\w+;/g, gbew8q);hy_z1 && $4osif(dmac0), h_t21y['characters'](vkc05, 0x0, ebqw8u - dmac0), dmac0 = ebqw8u;
    }
  }function $4osif(so$i9f, l8y6z) {
    for (; so$i9f >= eqw8ub && (l8y6z = o2n4t3['exec'](qgpwv));) o$ns4 = l8y6z['index'], eqw8ub = o$ns4 + l8y6z[0x0]['length'], hy_z1['lineNumber']++;hy_z1['columnNumber'] = so$i9f - o$ns4 + 0x1;
  }for (var o$ns4 = 0x0, eqw8ub = 0x0, o2n4t3 = /.*(?:\r\n?|\n)|.*$/g, hy_z1 = h_t21y['locator'], qgebw = [{ 'currentNSMap': qgvpx }], xv57gp = {}, dmac0 = 0x0;;) {
    try {
      var geqwbx = qgpwv['indexOf']('<', dmac0);if (0x0 > geqwbx) {
        if (!qgpwv['substr'](dmac0)['match'](/^\s*$/)) {
          var _21nt3 = h_t21y['doc'],
              lue8q = _21nt3['createTextNode'](qgpwv['substr'](dmac0));_21nt3['appendChild'](lue8q), h_t21y['currentElement'] = lue8q;
        }return;
      }switch (geqwbx > dmac0 && k0vp(geqwbx), qgpwv['charAt'](geqwbx + 0x1)) {case '/':
          var jadm = qgpwv['indexOf']('>', geqwbx + 0x3),
              no32t = qgpwv['substring'](geqwbx + 0x2, jadm),
              n4_32t = qgebw['pop']();0x0 > jadm ? (no32t = qgpwv['substring'](geqwbx + 0x2)['replace'](/[\s<].*/, ''), h_yt21['error']('end tag name: ' + no32t + ' is not complete:' + n4_32t['tagName']), jadm = geqwbx + 0x1 + no32t['length']) : no32t['match'](/\s</) && (no32t = no32t['replace'](/[\s<].*/, ''), h_yt21['error']('end tag name: ' + no32t + ' maybe not complete'), jadm = geqwbx + 0x1 + no32t['length']);var a0jdc = n4_32t['localNSMap'],
              m7c5 = n4_32t['tagName'] == no32t,
              w8g = m7c5 || n4_32t['tagName'] && n4_32t['tagName']['toLowerCase']() == no32t['toLowerCase']();if (w8g) {
            if (h_t21y['endElement'](n4_32t['uri'], n4_32t['localName'], no32t), a0jdc) {
              for (var m507kc in a0jdc) h_t21y['endPrefixMapping'](m507kc);
            }m7c5 || h_yt21['fatalError']('end tag name: ' + no32t + ' is not match the current start tagName:' + n4_32t['tagName']);
          } else qgebw['push'](n4_32t);jadm++;break;case '?':
          hy_z1 && $4osif(geqwbx), jadm = vbweu8(qgpwv, geqwbx, h_t21y);break;case '!':
          hy_z1 && $4osif(geqwbx), jadm = vh_2t1(qgpwv, geqwbx, h_t21y, h_yt21);break;default:
          hy_z1 && $4osif(geqwbx);var uzle8 = new vcm0jd(),
              osi4$f = qgebw[qgebw['length'] - 0x1]['currentNSMap'],
              jadm = vio4$sf(qgpwv, geqwbx, uzle8, osi4$f, gbew8q, h_yt21),
              to4n32 = uzle8['length'];if (!uzle8['closed'] && vqbge(qgpwv, jadm, uzle8['tagName'], xv57gp) && (uzle8['closed'] = !0x0, k5c7v['nbsp'] || h_yt21['warning']('unclosed xml attribute')), hy_z1 && to4n32) {
            for (var wvgpx5 = vn_21t(hy_z1, {}), ylz16h = 0x0; to4n32 > ylz16h; ylz16h++) {
              var kp507v = uzle8[ylz16h];$4osif(kp507v['offset']), kp507v['locator'] = vn_21t(hy_z1, {});
            }h_t21y['locator'] = wvgpx5, v$43ns(uzle8, h_t21y, osi4$f) && qgebw['push'](uzle8), h_t21y['locator'] = hy_z1;
          } else v$43ns(uzle8, h_t21y, osi4$f) && qgebw['push'](uzle8);'http://www.w3.org/1999/xhtml' !== uzle8['uri'] || uzle8['closed'] ? jadm++ : jadm = vt_123(qgpwv, jadm, uzle8['tagName'], gbew8q, h_t21y);}
    } catch (cmk07d) {
      h_yt21['error']('element parse error: ' + cmk07d), jadm = -0x1;
    }jadm > dmac0 ? dmac0 = jadm : k0vp(Math['max'](geqwbx, dmac0) + 0x1);
  }
}function vn_21t(gpxw5v, t24n3o) {
  return t24n3o['lineNumber'] = gpxw5v['lineNumber'], t24n3o['columnNumber'] = gpxw5v['columnNumber'], t24n3o;
}function vio4$sf(bl8e, qlbe, tn_312, hy_26, qbew8g, t34n_2) {
  for (var s$rif9, h_t2y1, xp57k = ++qlbe, ht_12n = vk0c7d;;) {
    var _t2hy = bl8e['charAt'](xp57k);switch (_t2hy) {case '=':
        if (ht_12n === vt42_) s$rif9 = bl8e['slice'](qlbe, xp57k), ht_12n = vulb8eq;else {
          if (ht_12n !== vt1_2hy) throw new Error('attribute equal must after attrName');ht_12n = vulb8eq;
        }break;case '\x27':case '\x22':
        if (ht_12n === vulb8eq || ht_12n === vt42_) {
          if (ht_12n === vt42_ && (t34n_2['warning']('attribute value must after "="'), s$rif9 = bl8e['slice'](qlbe, xp57k)), qlbe = xp57k + 0x1, xp57k = bl8e['indexOf'](_t2hy, qlbe), !(xp57k > 0x0)) throw new Error('attribute value no end \'' + _t2hy + '\' match');h_t2y1 = bl8e['slice'](qlbe, xp57k)['replace'](/&#?\w+;/g, qbew8g), tn_312['add'](s$rif9, h_t2y1, qlbe - 0x1), ht_12n = vnh1_2;
        } else {
          if (ht_12n != vlh1z) throw new Error('attribute value must after "="');h_t2y1 = bl8e['slice'](qlbe, xp57k)['replace'](/&#?\w+;/g, qbew8g), tn_312['add'](s$rif9, h_t2y1, qlbe), t34n_2['warning']('attribute "' + s$rif9 + '" missed start quot(' + _t2hy + ')!!'), qlbe = xp57k + 0x1, ht_12n = vnh1_2;
        }break;case '/':
        switch (ht_12n) {case vk0c7d:
            tn_312['setTagName'](bl8e['slice'](qlbe, xp57k));case vnh1_2:case vjdcmk:case vgxpwvq:
            ht_12n = vgxpwvq, tn_312['closed'] = !0x0;case vlh1z:case vt42_:case vt1_2hy:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return t34n_2['error']('unexpected end of input'), ht_12n == vk0c7d && tn_312['setTagName'](bl8e['slice'](qlbe, xp57k)), xp57k;case '>':
        switch (ht_12n) {case vk0c7d:
            tn_312['setTagName'](bl8e['slice'](qlbe, xp57k));case vnh1_2:case vjdcmk:case vgxpwvq:
            break;case vlh1z:case vt42_:
            h_t2y1 = bl8e['slice'](qlbe, xp57k), '/' === h_t2y1['slice'](-0x1) && (tn_312['closed'] = !0x0, h_t2y1 = h_t2y1['slice'](0x0, -0x1));case vt1_2hy:
            ht_12n === vt1_2hy && (h_t2y1 = s$rif9), ht_12n == vlh1z ? (t34n_2['warning']('attribute "' + h_t2y1 + '" missed quot(")!!'), tn_312['add'](s$rif9, h_t2y1['replace'](/&#?\w+;/g, qbew8g), qlbe)) : ('http://www.w3.org/1999/xhtml' === hy_26[''] && h_t2y1['match'](/^(?:disabled|checked|selected)$/i) || t34n_2['warning']('attribute "' + h_t2y1 + '" missed value!! "' + h_t2y1 + '" instead!!'), tn_312['add'](h_t2y1, h_t2y1, qlbe));break;case vulb8eq:
            throw new Error('attribute value missed!!');}return xp57k;case '\u0080':
        _t2hy = '\x20';default:
        if ('\x20' >= _t2hy) switch (ht_12n) {case vk0c7d:
            tn_312['setTagName'](bl8e['slice'](qlbe, xp57k)), ht_12n = vjdcmk;break;case vt42_:
            s$rif9 = bl8e['slice'](qlbe, xp57k), ht_12n = vt1_2hy;break;case vlh1z:
            var h_t2y1 = bl8e['slice'](qlbe, xp57k)['replace'](/&#?\w+;/g, qbew8g);t34n_2['warning']('attribute "' + h_t2y1 + '" missed quot(")!!'), tn_312['add'](s$rif9, h_t2y1, qlbe);case vnh1_2:
            ht_12n = vjdcmk;} else switch (ht_12n) {case vt1_2hy:
            {
              tn_312['tagName'];
            }'http://www.w3.org/1999/xhtml' === hy_26[''] && s$rif9['match'](/^(?:disabled|checked|selected)$/i) || t34n_2['warning']('attribute "' + s$rif9 + '" missed value!! "' + s$rif9 + '" instead2!!'), tn_312['add'](s$rif9, s$rif9, qlbe), qlbe = xp57k, ht_12n = vt42_;break;case vnh1_2:
            t34n_2['warning']('attribute space is required"' + s$rif9 + '\x22!!');case vjdcmk:
            ht_12n = vt42_, qlbe = xp57k;break;case vulb8eq:
            ht_12n = vlh1z, qlbe = xp57k;break;case vgxpwvq:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}xp57k++;
  }
}function v$43ns(bweqg, g5xvp, sif9o) {
  for (var hy16zl = bweqg['tagName'], wq8 = null, e8ql = bweqg['length']; e8ql--;) {
    var v75x = bweqg[e8ql],
        mdck70 = v75x['qName'],
        w8ubqe = v75x['value'],
        fr$9 = mdck70['indexOf'](':');if (fr$9 > 0x0) var zhuyl = v75x['prefix'] = mdck70['slice'](0x0, fr$9),
        ul8bq = mdck70['slice'](fr$9 + 0x1),
        wqvpg = 'xmlns' === zhuyl && ul8bq;else ul8bq = mdck70, zhuyl = null, wqvpg = 'xmlns' === mdck70 && '';v75x['localName'] = ul8bq, wqvpg !== !0x1 && (null == wq8 && (wq8 = {}, vfoi9(sif9o, sif9o = {})), sif9o[wqvpg] = wq8[wqvpg] = w8ubqe, v75x['uri'] = 'http://www.w3.org/2000/xmlns/', g5xvp['startPrefixMapping'](wqvpg, w8ubqe));
  }for (var e8ql = bweqg['length']; e8ql--;) {
    v75x = bweqg[e8ql];var zhuyl = v75x['prefix'];zhuyl && ('xml' === zhuyl && (v75x['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zhuyl && (v75x['uri'] = sif9o[zhuyl || '']));
  }var fr$9 = hy16zl['indexOf'](':');fr$9 > 0x0 ? (zhuyl = bweqg['prefix'] = hy16zl['slice'](0x0, fr$9), ul8bq = bweqg['localName'] = hy16zl['slice'](fr$9 + 0x1)) : (zhuyl = null, ul8bq = bweqg['localName'] = hy16zl);var p0vk = bweqg['uri'] = sif9o[zhuyl || ''];if (g5xvp['startElement'](p0vk, ul8bq, hy16zl, bweqg), !bweqg['closed']) return bweqg['currentNSMap'] = sif9o, bweqg['localNSMap'] = wq8, !0x0;if (g5xvp['endElement'](p0vk, ul8bq, hy16zl), wq8) {
    for (zhuyl in wq8) g5xvp['endPrefixMapping'](zhuyl);
  }
}function vt_123(c7dm0, is4f$o, mdk70, uez8, gpxv75) {
  if (/^(?:script|textarea)$/i['test'](mdk70)) {
    var w8eubq = c7dm0['indexOf']('</' + mdk70 + '>', is4f$o),
        l6zh1y = c7dm0['substring'](is4f$o + 0x1, w8eubq);if (/[&<]/['test'](l6zh1y)) return (/^script$/i['test'](mdk70) ? (gpxv75['characters'](l6zh1y, 0x0, l6zh1y['length']), w8eubq) : (l6zh1y = l6zh1y['replace'](/&#?\w+;/g, uez8), gpxv75['characters'](l6zh1y, 0x0, l6zh1y['length']), w8eubq)
    );
  }return is4f$o + 0x1;
}function vqbge(qxgvw, pgx5v, gx7v5, fo9$is) {
  var ck0d7 = fo9$is[gx7v5];return null == ck0d7 && (ck0d7 = qxgvw['lastIndexOf']('</' + gx7v5 + '>'), pgx5v > ck0d7 && (ck0d7 = qxgvw['lastIndexOf']('</' + gx7v5)), fo9$is[gx7v5] = ck0d7), pgx5v > ck0d7;
}function vfoi9(no$4s3, xqwgeb) {
  for (var g7xpv in no$4s3) xqwgeb[g7xpv] = no$4s3[g7xpv];
}function vh_2t1(_2nth1, ty_h, eblu8z, wepxgq) {
  var y8zul = _2nth1['charAt'](ty_h + 0x2);switch (y8zul) {case '-':
      if ('-' === _2nth1['charAt'](ty_h + 0x3)) {
        var tn3o24 = _2nth1['indexOf']('-->', ty_h + 0x4);return tn3o24 > ty_h ? (eblu8z['comment'](_2nth1, ty_h + 0x4, tn3o24 - ty_h - 0x4), tn3o24 + 0x3) : (wepxgq['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _2nth1['substr'](ty_h + 0x3, 0x6)) {
        var tn3o24 = _2nth1['indexOf'](']]>', ty_h + 0x9);return eblu8z['startCDATA'](), eblu8z['characters'](_2nth1, ty_h + 0x9, tn3o24 - ty_h - 0x9), eblu8z['endCDATA'](), tn3o24 + 0x3;
      }var qxgwv = vgx7p5(_2nth1, ty_h),
          h1y6l = qxgwv['length'];if (h1y6l > 0x1 && /!doctype/i['test'](qxgwv[0x0][0x0])) {
        var i9ofs = qxgwv[0x1][0x0],
            v75c0k = h1y6l > 0x3 && /^public$/i['test'](qxgwv[0x2][0x0]) && qxgwv[0x3][0x0],
            p70 = h1y6l > 0x4 && qxgwv[0x4][0x0],
            pwvgxq = qxgwv[h1y6l - 0x1];return eblu8z['startDTD'](i9ofs, v75c0k && v75c0k['replace'](/^(['"])(.*?)\1$/, '$2'), p70 && p70['replace'](/^(['"])(.*?)\1$/, '$2')), eblu8z['endDTD'](), pwvgxq['index'] + pwvgxq[0x0]['length'];
      }}return -0x1;
}function vbweu8(i$9sf, jmkd, $of9is) {
  var e8zlu = i$9sf['indexOf']('?>', jmkd);if (e8zlu) {
    var h1t_n = i$9sf['substring'](jmkd, e8zlu)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (h1t_n) {
      {
        h1t_n[0x0]['length'];
      }return $of9is['processingInstruction'](h1t_n[0x1], h1t_n[0x2]), e8zlu + 0x2;
    }return -0x1;
  }return -0x1;
}function vcm0jd() {}function vl8ubeq(z_6yh, cjk0) {
  return z_6yh['__proto__'] = cjk0, z_6yh;
}function vgx7p5(xgwpeq, gw8ebq) {
  var qxvpw,
      o4isf$ = [],
      el8q = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (el8q['lastIndex'] = gw8ebq, el8q['exec'](xgwpeq); qxvpw = el8q['exec'](xgwpeq);) if (o4isf$['push'](qxvpw), qxvpw[0x1]) return o4isf$;
}var vtn_324 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vepw = new RegExp('[\\-\\.0-9' + vtn_324['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vfi$r = new RegExp('^' + vtn_324['source'] + vepw['source'] + '*(?::' + vtn_324['source'] + vepw['source'] + '*)?$'),
    vk0c7d = 0x0,
    vt42_ = 0x1,
    vt1_2hy = 0x2,
    vulb8eq = 0x3,
    vlh1z = 0x4,
    vnh1_2 = 0x5,
    vjdcmk = 0x6,
    vgxpwvq = 0x7;vos3$n4['prototype'] = { 'parse': function (v7px, b6u8lz, wbgqxe) {
    var l8ebuz = this['domBuilder'];l8ebuz['startDocument'](), vfoi9(b6u8lz, b6u8lz = {}), vd0cj(v7px, b6u8lz, wbgqxe, l8ebuz, this['errorHandler']), l8ebuz['endDocument']();
  } }, vcm0jd['prototype'] = { 'setTagName': function (i9r) {
    if (!vfi$r['test'](i9r)) throw new Error('invalid tagName:' + i9r);this['tagName'] = i9r;
  }, 'add': function (jcamd, ebqlu, m0kc) {
    if (!vfi$r['test'](jcamd)) throw new Error('invalid attribute:' + jcamd);this[this['length']++] = { 'qName': jcamd, 'value': ebqlu, 'offset': m0kc };
  }, 'length': 0x0, 'getLocalName': function (b8qe) {
    return this[b8qe]['localName'];
  }, 'getLocator': function (c70km) {
    return this[c70km]['locator'];
  }, 'getQName': function (sfi9$r) {
    return this[sfi9$r]['qName'];
  }, 'getURI': function (t4no3) {
    return this[t4no3]['uri'];
  }, 'getValue': function (fos$4i) {
    return this[fos$4i]['value'];
  } }, vl8ubeq({}, vl8ubeq['prototype']) instanceof vl8ubeq || (vl8ubeq = function (bzl68, p7v50k) {
  function s34no() {}s34no['prototype'] = p7v50k, s34no = new s34no();for (p7v50k in bzl68) s34no[p7v50k] = bzl68[p7v50k];return s34no;
}), exports['XMLReader'] = vos3$n4;