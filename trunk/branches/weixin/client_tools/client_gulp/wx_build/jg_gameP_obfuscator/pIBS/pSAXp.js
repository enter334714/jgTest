var E = wx.$p;
function p_skh4pj() {}function p_$16jy(w32z05, q8nb9e, aqgcb, xfutm, zv0r2) {
  function rz7v(rv6$7) {
    if (rv6$7 > 0xffff) {
      rv6$7 -= 0x10000;var _ofmx = 0xd800 + (rv6$7 >> 0xa),
          z05n3 = 0xdc00 + (0x3ff & rv6$7);return String['fromCharCode'](_ofmx, z05n3);
    }return String['fromCharCode'](rv6$7);
  }function xtpluf(w035z) {
    var ut4lxp = w035z['slice'](0x1, -0x1);return ut4lxp in aqgcb ? aqgcb[ut4lxp] : '#' === ut4lxp['charAt'](0x0) ? rz7v(parseInt(ut4lxp['substr'](0x1)['replace']('x', '0x'))) : (zv0r2['error']('entity not found:' + w035z), w035z);
  }function qenb(kh4isj) {
    if (kh4isj > i1$6) {
      var phksl4 = w32z05['substring'](i1$6, kh4isj)['replace'](/&#?\w+;/g, xtpluf);ew985n && k4ihj(i1$6), xfutm['characters'](phksl4, 0x0, kh4isj - i1$6), i1$6 = kh4isj;
    }
  }function k4ihj(y6ijk, h$k) {
    for (; y6ijk >= ykj && (h$k = b9n8q['exec'](w32z05));) ftp = h$k['index'], ykj = ftp + h$k[0x0]['length'], ew985n['lineNumber']++;ew985n['columnNumber'] = y6ijk - ftp + 0x1;
  }for (var ftp = 0x0, ykj = 0x0, b9n8q = /.*(?:\r\n?|\n)|.*$/g, ew985n = xfutm['locator'], ac8q = [{ 'currentNSMap': q8nb9e }], bq9g8a = {}, i1$6 = 0x0;;) {
    try {
      var r0723z = w32z05['indexOf']('<', i1$6);if (0x0 > r0723z) {
        if (!w32z05['substr'](i1$6)['match'](/^\s*$/)) {
          var $y6v1i = xfutm['doc'],
              l4txp = $y6v1i['createTextNode'](w32z05['substr'](i1$6));$y6v1i['appendChild'](l4txp), xfutm['currentElement'] = l4txp;
        }return;
      }switch (r0723z > i1$6 && qenb(r0723z), w32z05['charAt'](r0723z + 0x1)) {case '/':
          var txf_um = w32z05['indexOf']('>', r0723z + 0x3),
              l4phts = w32z05['substring'](r0723z + 0x2, txf_um),
              yjiksh = ac8q['pop']();0x0 > txf_um ? (l4phts = w32z05['substring'](r0723z + 0x2)['replace'](/[\s<].*/, ''), zv0r2['error']('end tag name: ' + l4phts + ' is not complete:' + yjiksh['tagName']), txf_um = r0723z + 0x1 + l4phts['length']) : l4phts['match'](/\s</) && (l4phts = l4phts['replace'](/[\s<].*/, ''), zv0r2['error']('end tag name: ' + l4phts + ' maybe not complete'), txf_um = r0723z + 0x1 + l4phts['length']);var utxp4l = yjiksh['localNSMap'],
              q89ba = yjiksh['tagName'] == l4phts,
              kjphs = q89ba || yjiksh['tagName'] && yjiksh['tagName']['toLowerCase']() == l4phts['toLowerCase']();if (kjphs) {
            if (xfutm['endElement'](yjiksh['uri'], yjiksh['localName'], l4phts), utxp4l) {
              for (var vr$6 in utxp4l) xfutm['endPrefixMapping'](vr$6);
            }q89ba || zv0r2['fatalError']('end tag name: ' + l4phts + ' is not match the current start tagName:' + yjiksh['tagName']);
          } else ac8q['push'](yjiksh);txf_um++;break;case '?':
          ew985n && k4ihj(r0723z), txf_um = p_z5e(w32z05, r0723z, xfutm);break;case '!':
          ew985n && k4ihj(r0723z), txf_um = p_nw035z(w32z05, r0723z, xfutm, zv0r2);break;default:
          ew985n && k4ihj(r0723z);var n53ewz = new p_w53ze(),
              q89ben = ac8q[ac8q['length'] - 0x1]['currentNSMap'],
              txf_um = p_wzn350(w32z05, r0723z, n53ewz, q89ben, xtpluf, zv0r2),
              lphts = n53ewz['length'];if (!n53ewz['closed'] && p_slp4k(w32z05, txf_um, n53ewz['tagName'], bq9g8a) && (n53ewz['closed'] = !0x0, aqgcb['nbsp'] || zv0r2['warning']('unclosed xml attribute')), ew985n && lphts) {
            for (var nw39 = p_uofmx_(ew985n, {}), bcqag8 = 0x0; lphts > bcqag8; bcqag8++) {
              var e58n9q = n53ewz[bcqag8];k4ihj(e58n9q['offset']), e58n9q['locator'] = p_uofmx_(ew985n, {});
            }xfutm['locator'] = nw39, p_yihj$(n53ewz, xfutm, q89ben) && ac8q['push'](n53ewz), xfutm['locator'] = ew985n;
          } else p_yihj$(n53ewz, xfutm, q89ben) && ac8q['push'](n53ewz);'http://www.w3.org/1999/xhtml' !== n53ewz['uri'] || n53ewz['closed'] ? txf_um++ : txf_um = p_zvr02(w32z05, txf_um, n53ewz['tagName'], xtpluf, xfutm);}
    } catch (y1$i6j) {
      zv0r2['error']('element parse error: ' + y1$i6j), txf_um = -0x1;
    }txf_um > i1$6 ? i1$6 = txf_um : qenb(Math['max'](r0723z, i1$6) + 0x1);
  }
}function p_uofmx_(s4jhik, l4shk) {
  return l4shk['lineNumber'] = s4jhik['lineNumber'], l4shk['columnNumber'] = s4jhik['columnNumber'], l4shk;
}function p_wzn350(z5w0, yhj, y6iv1$, e5w3zn, rw3z0, v7$61) {
  for (var o_uxf, ox_umf, wn3z5e = ++yhj, dbac = p_rv7$61;;) {
    var ikjy6 = z5w0['charAt'](wn3z5e);switch (ikjy6) {case '=':
        if (dbac === p_k6$) o_uxf = z5w0['slice'](yhj, wn3z5e), dbac = p_r6v1;else {
          if (dbac !== p_w2z) throw new Error('attribute equal must after attrName');dbac = p_r6v1;
        }break;case '\x27':case '\x22':
        if (dbac === p_r6v1 || dbac === p_k6$) {
          if (dbac === p_k6$ && (v7$61['warning']('attribute value must after "="'), o_uxf = z5w0['slice'](yhj, wn3z5e)), yhj = wn3z5e + 0x1, wn3z5e = z5w0['indexOf'](ikjy6, yhj), !(wn3z5e > 0x0)) throw new Error('attribute value no end \'' + ikjy6 + '\' match');ox_umf = z5w0['slice'](yhj, wn3z5e)['replace'](/&#?\w+;/g, rw3z0), y6iv1$['add'](o_uxf, ox_umf, yhj - 0x1), dbac = p_zv7r2;
        } else {
          if (dbac != p_t4s) throw new Error('attribute value must after "="');ox_umf = z5w0['slice'](yhj, wn3z5e)['replace'](/&#?\w+;/g, rw3z0), y6iv1$['add'](o_uxf, ox_umf, yhj), v7$61['warning']('attribute "' + o_uxf + '" missed start quot(' + ikjy6 + ')!!'), yhj = wn3z5e + 0x1, dbac = p_zv7r2;
        }break;case '/':
        switch (dbac) {case p_rv7$61:
            y6iv1$['setTagName'](z5w0['slice'](yhj, wn3z5e));case p_zv7r2:case p_v716r$:case p_n8e:
            dbac = p_n8e, y6iv1$['closed'] = !0x0;case p_t4s:case p_k6$:case p_w2z:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return v7$61['error']('unexpected end of input'), dbac == p_rv7$61 && y6iv1$['setTagName'](z5w0['slice'](yhj, wn3z5e)), wn3z5e;case '>':
        switch (dbac) {case p_rv7$61:
            y6iv1$['setTagName'](z5w0['slice'](yhj, wn3z5e));case p_zv7r2:case p_v716r$:case p_n8e:
            break;case p_t4s:case p_k6$:
            ox_umf = z5w0['slice'](yhj, wn3z5e), '/' === ox_umf['slice'](-0x1) && (y6iv1$['closed'] = !0x0, ox_umf = ox_umf['slice'](0x0, -0x1));case p_w2z:
            dbac === p_w2z && (ox_umf = o_uxf), dbac == p_t4s ? (v7$61['warning']('attribute "' + ox_umf + '" missed quot(")!!'), y6iv1$['add'](o_uxf, ox_umf['replace'](/&#?\w+;/g, rw3z0), yhj)) : ('http://www.w3.org/1999/xhtml' === e5w3zn[''] && ox_umf['match'](/^(?:disabled|checked|selected)$/i) || v7$61['warning']('attribute "' + ox_umf + '" missed value!! "' + ox_umf + '" instead!!'), y6iv1$['add'](ox_umf, ox_umf, yhj));break;case p_r6v1:
            throw new Error('attribute value missed!!');}return wn3z5e;case '\u0080':
        ikjy6 = '\x20';default:
        if ('\x20' >= ikjy6) switch (dbac) {case p_rv7$61:
            y6iv1$['setTagName'](z5w0['slice'](yhj, wn3z5e)), dbac = p_v716r$;break;case p_k6$:
            o_uxf = z5w0['slice'](yhj, wn3z5e), dbac = p_w2z;break;case p_t4s:
            var ox_umf = z5w0['slice'](yhj, wn3z5e)['replace'](/&#?\w+;/g, rw3z0);v7$61['warning']('attribute "' + ox_umf + '" missed quot(")!!'), y6iv1$['add'](o_uxf, ox_umf, yhj);case p_zv7r2:
            dbac = p_v716r$;} else switch (dbac) {case p_w2z:
            {
              y6iv1$['tagName'];
            }'http://www.w3.org/1999/xhtml' === e5w3zn[''] && o_uxf['match'](/^(?:disabled|checked|selected)$/i) || v7$61['warning']('attribute "' + o_uxf + '" missed value!! "' + o_uxf + '" instead2!!'), y6iv1$['add'](o_uxf, o_uxf, yhj), yhj = wn3z5e, dbac = p_k6$;break;case p_zv7r2:
            v7$61['warning']('attribute space is required"' + o_uxf + '\x22!!');case p_v716r$:
            dbac = p_k6$, yhj = wn3z5e;break;case p_r6v1:
            dbac = p_t4s, yhj = wn3z5e;break;case p_n8e:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wn3z5e++;
  }
}function p_yihj$(txlfu, v2r710, ki$6jy) {
  for (var nz05w3 = txlfu['tagName'], g8caqb = null, a9qeb8 = txlfu['length']; a9qeb8--;) {
    var tup4l = txlfu[a9qeb8],
        cga8 = tup4l['qName'],
        e3z5n = tup4l['value'],
        hsjkiy = cga8['indexOf'](':');if (hsjkiy > 0x0) var _mfxut = tup4l['prefix'] = cga8['slice'](0x0, hsjkiy),
        y$6ij = cga8['slice'](hsjkiy + 0x1),
        qg8ab = 'xmlns' === _mfxut && y$6ij;else y$6ij = cga8, _mfxut = null, qg8ab = 'xmlns' === cga8 && '';tup4l['localName'] = y$6ij, qg8ab !== !0x1 && (null == g8caqb && (g8caqb = {}, p_qacgb(ki$6jy, ki$6jy = {})), ki$6jy[qg8ab] = g8caqb[qg8ab] = e3z5n, tup4l['uri'] = 'http://www.w3.org/2000/xmlns/', v2r710['startPrefixMapping'](qg8ab, e3z5n));
  }for (var a9qeb8 = txlfu['length']; a9qeb8--;) {
    tup4l = txlfu[a9qeb8];var _mfxut = tup4l['prefix'];_mfxut && ('xml' === _mfxut && (tup4l['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _mfxut && (tup4l['uri'] = ki$6jy[_mfxut || '']));
  }var hsjkiy = nz05w3['indexOf'](':');hsjkiy > 0x0 ? (_mfxut = txlfu['prefix'] = nz05w3['slice'](0x0, hsjkiy), y$6ij = txlfu['localName'] = nz05w3['slice'](hsjkiy + 0x1)) : (_mfxut = null, y$6ij = txlfu['localName'] = nz05w3);var iyjksh = txlfu['uri'] = ki$6jy[_mfxut || ''];if (v2r710['startElement'](iyjksh, y$6ij, nz05w3, txlfu), !txlfu['closed']) return txlfu['currentNSMap'] = ki$6jy, txlfu['localNSMap'] = g8caqb, !0x0;if (v2r710['endElement'](iyjksh, y$6ij, nz05w3), g8caqb) {
    for (_mfxut in g8caqb) v2r710['endPrefixMapping'](_mfxut);
  }
}function p_zvr02(ivy16, pulxf, w523z, sikh, uptx) {
  if (/^(?:script|textarea)$/i['test'](w523z)) {
    var wn9 = ivy16['indexOf']('</' + w523z + '>', pulxf),
        txm_uf = ivy16['substring'](pulxf + 0x1, wn9);if (/[&<]/['test'](txm_uf)) return (/^script$/i['test'](w523z) ? (uptx['characters'](txm_uf, 0x0, txm_uf['length']), wn9) : (txm_uf = txm_uf['replace'](/&#?\w+;/g, sikh), uptx['characters'](txm_uf, 0x0, txm_uf['length']), wn9)
    );
  }return pulxf + 0x1;
}function p_slp4k(i$1jy, ne3, vy6$i1, sjhiyk) {
  var hji4s = sjhiyk[vy6$i1];return null == hji4s && (hji4s = i$1jy['lastIndexOf']('</' + vy6$i1 + '>'), ne3 > hji4s && (hji4s = i$1jy['lastIndexOf']('</' + vy6$i1)), sjhiyk[vy6$i1] = hji4s), ne3 > hji4s;
}function p_qacgb(cdbgaq, yhsijk) {
  for (var $ykhj in cdbgaq) yhsijk[$ykhj] = cdbgaq[$ykhj];
}function p_nw035z(rv7, jkyi$6, r0721, $y61v7) {
  var $y6jik = rv7['charAt'](jkyi$6 + 0x2);switch ($y6jik) {case '-':
      if ('-' === rv7['charAt'](jkyi$6 + 0x3)) {
        var abgq8c = rv7['indexOf']('-->', jkyi$6 + 0x4);return abgq8c > jkyi$6 ? (r0721['comment'](rv7, jkyi$6 + 0x4, abgq8c - jkyi$6 - 0x4), abgq8c + 0x3) : ($y61v7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rv7['substr'](jkyi$6 + 0x3, 0x6)) {
        var abgq8c = rv7['indexOf'](']]>', jkyi$6 + 0x9);return r0721['startCDATA'](), r0721['characters'](rv7, jkyi$6 + 0x9, abgq8c - jkyi$6 - 0x9), r0721['endCDATA'](), abgq8c + 0x3;
      }var xmut_ = p_jk4hi(rv7, jkyi$6),
          ne395 = xmut_['length'];if (ne395 > 0x1 && /!doctype/i['test'](xmut_[0x0][0x0])) {
        var ewz5n3 = xmut_[0x1][0x0],
            sh4i = ne395 > 0x3 && /^public$/i['test'](xmut_[0x2][0x0]) && xmut_[0x3][0x0],
            $6kjiy = ne395 > 0x4 && xmut_[0x4][0x0],
            r20zv = xmut_[ne395 - 0x1];return r0721['startDTD'](ewz5n3, sh4i && sh4i['replace'](/^(['"])(.*?)\1$/, '$2'), $6kjiy && $6kjiy['replace'](/^(['"])(.*?)\1$/, '$2')), r0721['endDTD'](), r20zv['index'] + r20zv[0x0]['length'];
      }}return -0x1;
}function p_z5e(qacbd, k$i6j, $vi61y) {
  var qdagc = qacbd['indexOf']('?>', k$i6j);if (qdagc) {
    var uxmt_f = qacbd['substring'](k$i6j, qdagc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (uxmt_f) {
      {
        uxmt_f[0x0]['length'];
      }return $vi61y['processingInstruction'](uxmt_f[0x1], uxmt_f[0x2]), qdagc + 0x2;
    }return -0x1;
  }return -0x1;
}function p_w53ze() {}function p_z0n3w(ne39, g8qcb) {
  return ne39['__proto__'] = g8qcb, ne39;
}function p_jk4hi(sky, fxplu) {
  var tlp4xs,
      v1$7y = [],
      q89abe = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (q89abe['lastIndex'] = fxplu, q89abe['exec'](sky); tlp4xs = q89abe['exec'](sky);) if (v1$7y['push'](tlp4xs), tlp4xs[0x1]) return v1$7y;
}var p_tx_ul = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    p_i4 = new RegExp('[\\-\\.0-9' + p_tx_ul['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    p__ufmxo = new RegExp('^' + p_tx_ul['source'] + p_i4['source'] + '*(?::' + p_tx_ul['source'] + p_i4['source'] + '*)?$'),
    p_rv7$61 = 0x0,
    p_k6$ = 0x1,
    p_w2z = 0x2,
    p_r6v1 = 0x3,
    p_t4s = 0x4,
    p_zv7r2 = 0x5,
    p_v716r$ = 0x6,
    p_n8e = 0x7;p_skh4pj['prototype'] = { 'parse': function (r7v16$, ulxp, pxut4) {
    var xtfum = this['domBuilder'];xtfum['startDocument'](), p_qacgb(ulxp, ulxp = {}), p_$16jy(r7v16$, ulxp, pxut4, xtfum, this['errorHandler']), xtfum['endDocument']();
  } }, p_w53ze['prototype'] = { 'setTagName': function (s4ijkh) {
    if (!p__ufmxo['test'](s4ijkh)) throw new Error('invalid tagName:' + s4ijkh);this['tagName'] = s4ijkh;
  }, 'add': function ($jkyi6, i4k, jyikhs) {
    if (!p__ufmxo['test']($jkyi6)) throw new Error('invalid attribute:' + $jkyi6);this[this['length']++] = { 'qName': $jkyi6, 'value': i4k, 'offset': jyikhs };
  }, 'length': 0x0, 'getLocalName': function (kj4shp) {
    return this[kj4shp]['localName'];
  }, 'getLocator': function (rz2703) {
    return this[rz2703]['locator'];
  }, 'getQName': function (e95qn8) {
    return this[e95qn8]['qName'];
  }, 'getURI': function (_utxfl) {
    return this[_utxfl]['uri'];
  }, 'getValue': function (pufltx) {
    return this[pufltx]['value'];
  } }, p_z0n3w({}, p_z0n3w['prototype']) instanceof p_z0n3w || (p_z0n3w = function (eznw, s4khij) {
  function yjkhis() {}yjkhis['prototype'] = s4khij, yjkhis = new yjkhis();for (s4khij in eznw) yjkhis[s4khij] = eznw[s4khij];return yjkhis;
}), exports['XMLReader'] = p_skh4pj;