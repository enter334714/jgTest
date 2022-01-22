var k = wx.$f;
function fimvfub() {}function fjwdoc($8ry, wexnz, x7e8zr, nxdesw, k5q4_2) {
  function qh05_(x8rzn) {
    if (x8rzn > 0xffff) {
      x8rzn -= 0x10000;var exnw8z = 0xd800 + (x8rzn >> 0xa),
          t5qh = 0xdc00 + (0x3ff & x8rzn);return String['fromCharCode'](exnw8z, t5qh);
    }return String['fromCharCode'](x8rzn);
  }function hbtmi(ko6) {
    var r3y$7 = ko6['slice'](0x1, -0x1);return r3y$7 in x7e8zr ? x7e8zr[r3y$7] : '#' === r3y$7['charAt'](0x0) ? qh05_(parseInt(r3y$7['substr'](0x1)['replace']('x', '0x'))) : (k5q4_2['error']('entity not found:' + ko6), ko6);
  }function bmvuif(sdcw) {
    if (sdcw > ayp37) {
      var pa$37 = $8ry['substring'](ayp37, sdcw)['replace'](/&#?\w+;/g, hbtmi);k_o264 && cdj2o6(ayp37), nxdesw['characters'](pa$37, 0x0, sdcw - ayp37), ayp37 = sdcw;
    }
  }function cdj2o6(sxnwed, cd6) {
    for (; sxnwed >= khq0_ && (cd6 = k_q54['exec']($8ry));) z3r7$ = cd6['index'], khq0_ = z3r7$ + cd6[0x0]['length'], k_o264['lineNumber']++;k_o264['columnNumber'] = sxnwed - z3r7$ + 0x1;
  }for (var z3r7$ = 0x0, khq0_ = 0x0, k_q54 = /.*(?:\r\n?|\n)|.*$/g, k_o264 = nxdesw['locator'], oc624j = [{ 'currentNSMap': wexnz }], odcj6 = {}, ayp37 = 0x0;;) {
    try {
      var eswnxz = $8ry['indexOf']('<', ayp37);if (0x0 > eswnxz) {
        if (!$8ry['substr'](ayp37)['match'](/^\s*$/)) {
          var qf5t = nxdesw['doc'],
              zesnx = qf5t['createTextNode']($8ry['substr'](ayp37));qf5t['appendChild'](zesnx), nxdesw['currentElement'] = zesnx;
        }return;
      }switch (eswnxz > ayp37 && bmvuif(eswnxz), $8ry['charAt'](eswnxz + 0x1)) {case '/':
          var a3r$7y = $8ry['indexOf']('>', eswnxz + 0x3),
              bg9u1 = $8ry['substring'](eswnxz + 0x2, a3r$7y),
              v1gb = oc624j['pop']();0x0 > a3r$7y ? (bg9u1 = $8ry['substring'](eswnxz + 0x2)['replace'](/[\s<].*/, ''), k5q4_2['error']('end tag name: ' + bg9u1 + ' is not complete:' + v1gb['tagName']), a3r$7y = eswnxz + 0x1 + bg9u1['length']) : bg9u1['match'](/\s</) && (bg9u1 = bg9u1['replace'](/[\s<].*/, ''), k5q4_2['error']('end tag name: ' + bg9u1 + ' maybe not complete'), a3r$7y = eswnxz + 0x1 + bg9u1['length']);var mtifh = v1gb['localNSMap'],
              bimv1u = v1gb['tagName'] == bg9u1,
              bhtmfi = bimv1u || v1gb['tagName'] && v1gb['tagName']['toLowerCase']() == bg9u1['toLowerCase']();if (bhtmfi) {
            if (nxdesw['endElement'](v1gb['uri'], v1gb['localName'], bg9u1), mtifh) {
              for (var ya37 in mtifh) nxdesw['endPrefixMapping'](ya37);
            }bimv1u || k5q4_2['fatalError']('end tag name: ' + bg9u1 + ' is not match the current start tagName:' + v1gb['tagName']);
          } else oc624j['push'](v1gb);a3r$7y++;break;case '?':
          k_o264 && cdj2o6(eswnxz), a3r$7y = ffvbti($8ry, eswnxz, nxdesw);break;case '!':
          k_o264 && cdj2o6(eswnxz), a3r$7y = f_246oc($8ry, eswnxz, nxdesw, k5q4_2);break;default:
          k_o264 && cdj2o6(eswnxz);var bmifvu = new fq24k5_(),
              re78x = oc624j[oc624j['length'] - 0x1]['currentNSMap'],
              a3r$7y = fdjwncs($8ry, eswnxz, bmifvu, re78x, hbtmi, k5q4_2),
              xsnze = bmifvu['length'];if (!bmifvu['closed'] && fc4_o6($8ry, a3r$7y, bmifvu['tagName'], odcj6) && (bmifvu['closed'] = !0x0, x7e8zr['nbsp'] || k5q4_2['warning']('unclosed xml attribute')), k_o264 && xsnze) {
            for (var imfvbu = fco6(k_o264, {}), wdscn = 0x0; xsnze > wdscn; wdscn++) {
              var d6ocj = bmifvu[wdscn];cdj2o6(d6ocj['offset']), d6ocj['locator'] = fco6(k_o264, {});
            }nxdesw['locator'] = imfvbu, ff0mtq(bmifvu, nxdesw, re78x) && oc624j['push'](bmifvu), nxdesw['locator'] = k_o264;
          } else ff0mtq(bmifvu, nxdesw, re78x) && oc624j['push'](bmifvu);'http://www.w3.org/1999/xhtml' !== bmifvu['uri'] || bmifvu['closed'] ? a3r$7y++ : a3r$7y = fvibu19($8ry, a3r$7y, bmifvu['tagName'], hbtmi, nxdesw);}
    } catch (d6jcs) {
      k5q4_2['error']('element parse error: ' + d6jcs), a3r$7y = -0x1;
    }a3r$7y > ayp37 ? ayp37 = a3r$7y : bmvuif(Math['max'](eswnxz, ayp37) + 0x1);
  }
}function fco6(cnj, _h0kq) {
  return _h0kq['lineNumber'] = cnj['lineNumber'], _h0kq['columnNumber'] = cnj['columnNumber'], _h0kq;
}function fdjwncs(wze8n, scdj6, k24_5, q0k5, iubm, qkh5) {
  for (var uib91, dcsjn, zx8e7r = ++scdj6, _2oc = fxwsne;;) {
    var tifbh = wze8n['charAt'](zx8e7r);switch (tifbh) {case '=':
        if (_2oc === fifum) uib91 = wze8n['slice'](scdj6, zx8e7r), _2oc = f$r3;else {
          if (_2oc !== fimvbu) throw new Error('attribute equal must after attrName');_2oc = f$r3;
        }break;case '\x27':case '\x22':
        if (_2oc === f$r3 || _2oc === fifum) {
          if (_2oc === fifum && (qkh5['warning']('attribute value must after "="'), uib91 = wze8n['slice'](scdj6, zx8e7r)), scdj6 = zx8e7r + 0x1, zx8e7r = wze8n['indexOf'](tifbh, scdj6), !(zx8e7r > 0x0)) throw new Error('attribute value no end \'' + tifbh + '\' match');dcsjn = wze8n['slice'](scdj6, zx8e7r)['replace'](/&#?\w+;/g, iubm), k24_5['add'](uib91, dcsjn, scdj6 - 0x1), _2oc = fjsnxdw;
        } else {
          if (_2oc != f_k54q0) throw new Error('attribute value must after "="');dcsjn = wze8n['slice'](scdj6, zx8e7r)['replace'](/&#?\w+;/g, iubm), k24_5['add'](uib91, dcsjn, scdj6), qkh5['warning']('attribute "' + uib91 + '" missed start quot(' + tifbh + ')!!'), scdj6 = zx8e7r + 0x1, _2oc = fjsnxdw;
        }break;case '/':
        switch (_2oc) {case fxwsne:
            k24_5['setTagName'](wze8n['slice'](scdj6, zx8e7r));case fjsnxdw:case fkh5_:case fwsxjd:
            _2oc = fwsxjd, k24_5['closed'] = !0x0;case f_k54q0:case fifum:case fimvbu:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qkh5['error']('unexpected end of input'), _2oc == fxwsne && k24_5['setTagName'](wze8n['slice'](scdj6, zx8e7r)), zx8e7r;case '>':
        switch (_2oc) {case fxwsne:
            k24_5['setTagName'](wze8n['slice'](scdj6, zx8e7r));case fjsnxdw:case fkh5_:case fwsxjd:
            break;case f_k54q0:case fifum:
            dcsjn = wze8n['slice'](scdj6, zx8e7r), '/' === dcsjn['slice'](-0x1) && (k24_5['closed'] = !0x0, dcsjn = dcsjn['slice'](0x0, -0x1));case fimvbu:
            _2oc === fimvbu && (dcsjn = uib91), _2oc == f_k54q0 ? (qkh5['warning']('attribute "' + dcsjn + '" missed quot(")!!'), k24_5['add'](uib91, dcsjn['replace'](/&#?\w+;/g, iubm), scdj6)) : ('http://www.w3.org/1999/xhtml' === q0k5[''] && dcsjn['match'](/^(?:disabled|checked|selected)$/i) || qkh5['warning']('attribute "' + dcsjn + '" missed value!! "' + dcsjn + '" instead!!'), k24_5['add'](dcsjn, dcsjn, scdj6));break;case f$r3:
            throw new Error('attribute value missed!!');}return zx8e7r;case '\u0080':
        tifbh = '\x20';default:
        if ('\x20' >= tifbh) switch (_2oc) {case fxwsne:
            k24_5['setTagName'](wze8n['slice'](scdj6, zx8e7r)), _2oc = fkh5_;break;case fifum:
            uib91 = wze8n['slice'](scdj6, zx8e7r), _2oc = fimvbu;break;case f_k54q0:
            var dcsjn = wze8n['slice'](scdj6, zx8e7r)['replace'](/&#?\w+;/g, iubm);qkh5['warning']('attribute "' + dcsjn + '" missed quot(")!!'), k24_5['add'](uib91, dcsjn, scdj6);case fjsnxdw:
            _2oc = fkh5_;} else switch (_2oc) {case fimvbu:
            {
              k24_5['tagName'];
            }'http://www.w3.org/1999/xhtml' === q0k5[''] && uib91['match'](/^(?:disabled|checked|selected)$/i) || qkh5['warning']('attribute "' + uib91 + '" missed value!! "' + uib91 + '" instead2!!'), k24_5['add'](uib91, uib91, scdj6), scdj6 = zx8e7r, _2oc = fifum;break;case fjsnxdw:
            qkh5['warning']('attribute space is required"' + uib91 + '\x22!!');case fkh5_:
            _2oc = fifum, scdj6 = zx8e7r;break;case f$r3:
            _2oc = f_k54q0, scdj6 = zx8e7r;break;case fwsxjd:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zx8e7r++;
  }
}function ff0mtq(bfmitv, xerzn, qft0h5) {
  for (var tifmbv = bfmitv['tagName'], im0fth = null, jo62dc = bfmitv['length']; jo62dc--;) {
    var _26oc4 = bfmitv[jo62dc],
        nsdjwc = _26oc4['qName'],
        rz7e8x = _26oc4['value'],
        nr8xz = nsdjwc['indexOf'](':');if (nr8xz > 0x0) var bmfhti = _26oc4['prefix'] = nsdjwc['slice'](0x0, nr8xz),
        z8en = nsdjwc['slice'](nr8xz + 0x1),
        nwsjc = 'xmlns' === bmfhti && z8en;else z8en = nsdjwc, bmfhti = null, nwsjc = 'xmlns' === nsdjwc && '';_26oc4['localName'] = z8en, nwsjc !== !0x1 && (null == im0fth && (im0fth = {}, f$z87r3(qft0h5, qft0h5 = {})), qft0h5[nwsjc] = im0fth[nwsjc] = rz7e8x, _26oc4['uri'] = 'http://www.w3.org/2000/xmlns/', xerzn['startPrefixMapping'](nwsjc, rz7e8x));
  }for (var jo62dc = bfmitv['length']; jo62dc--;) {
    _26oc4 = bfmitv[jo62dc];var bmfhti = _26oc4['prefix'];bmfhti && ('xml' === bmfhti && (_26oc4['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== bmfhti && (_26oc4['uri'] = qft0h5[bmfhti || '']));
  }var nr8xz = tifmbv['indexOf'](':');nr8xz > 0x0 ? (bmfhti = bfmitv['prefix'] = tifmbv['slice'](0x0, nr8xz), z8en = bfmitv['localName'] = tifmbv['slice'](nr8xz + 0x1)) : (bmfhti = null, z8en = bfmitv['localName'] = tifmbv);var $3p7ya = bfmitv['uri'] = qft0h5[bmfhti || ''];if (xerzn['startElement']($3p7ya, z8en, tifmbv, bfmitv), !bfmitv['closed']) return bfmitv['currentNSMap'] = qft0h5, bfmitv['localNSMap'] = im0fth, !0x0;if (xerzn['endElement']($3p7ya, z8en, tifmbv), im0fth) {
    for (bmfhti in im0fth) xerzn['endPrefixMapping'](bmfhti);
  }
}function fvibu19(dxsen, dsnjwc, imv1u, xsjw, j462oc) {
  if (/^(?:script|textarea)$/i['test'](imv1u)) {
    var $p37ay = dxsen['indexOf']('</' + imv1u + '>', dsnjwc),
        vtimbf = dxsen['substring'](dsnjwc + 0x1, $p37ay);if (/[&<]/['test'](vtimbf)) return (/^script$/i['test'](imv1u) ? (j462oc['characters'](vtimbf, 0x0, vtimbf['length']), $p37ay) : (vtimbf = vtimbf['replace'](/&#?\w+;/g, xsjw), j462oc['characters'](vtimbf, 0x0, vtimbf['length']), $p37ay)
    );
  }return dsnjwc + 0x1;
}function fc4_o6(mhif0t, docj2, i0mhf, uvfi) {
  var e8zw = uvfi[i0mhf];return null == e8zw && (e8zw = mhif0t['lastIndexOf']('</' + i0mhf + '>'), docj2 > e8zw && (e8zw = mhif0t['lastIndexOf']('</' + i0mhf)), uvfi[i0mhf] = e8zw), docj2 > e8zw;
}function f$z87r3(wnzs, hbfmti) {
  for (var ren8x in wnzs) hbfmti[ren8x] = wnzs[ren8x];
}function f_246oc(scjdnw, ensxw, jwscd, tmfb) {
  var viumbf = scjdnw['charAt'](ensxw + 0x2);switch (viumbf) {case '-':
      if ('-' === scjdnw['charAt'](ensxw + 0x3)) {
        var i1umv = scjdnw['indexOf']('-->', ensxw + 0x4);return i1umv > ensxw ? (jwscd['comment'](scjdnw, ensxw + 0x4, i1umv - ensxw - 0x4), i1umv + 0x3) : (tmfb['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == scjdnw['substr'](ensxw + 0x3, 0x6)) {
        var i1umv = scjdnw['indexOf'](']]>', ensxw + 0x9);return jwscd['startCDATA'](), jwscd['characters'](scjdnw, ensxw + 0x9, i1umv - ensxw - 0x9), jwscd['endCDATA'](), i1umv + 0x3;
      }var a7r$3 = fscojd6(scjdnw, ensxw),
          wsdncj = a7r$3['length'];if (wsdncj > 0x1 && /!doctype/i['test'](a7r$3[0x0][0x0])) {
        var josdc6 = a7r$3[0x1][0x0],
            _k5q4 = wsdncj > 0x3 && /^public$/i['test'](a7r$3[0x2][0x0]) && a7r$3[0x3][0x0],
            py$37 = wsdncj > 0x4 && a7r$3[0x4][0x0],
            enxswd = a7r$3[wsdncj - 0x1];return jwscd['startDTD'](josdc6, _k5q4 && _k5q4['replace'](/^(['"])(.*?)\1$/, '$2'), py$37 && py$37['replace'](/^(['"])(.*?)\1$/, '$2')), jwscd['endDTD'](), enxswd['index'] + enxswd[0x0]['length'];
      }}return -0x1;
}function ffvbti(bvg1, p$3ya7, hftq0) {
  var wdosjc = bvg1['indexOf']('?>', p$3ya7);if (wdosjc) {
    var mbtfv = bvg1['substring'](p$3ya7, wdosjc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mbtfv) {
      {
        mbtfv[0x0]['length'];
      }return hftq0['processingInstruction'](mbtfv[0x1], mbtfv[0x2]), wdosjc + 0x2;
    }return -0x1;
  }return -0x1;
}function fq24k5_() {}function fa$ry37(_254q, bimu1v) {
  return _254q['__proto__'] = bimu1v, _254q;
}function fscojd6(k_h0q5, xdjswn) {
  var dc6o2,
      v19iu = [],
      hqt0f = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hqt0f['lastIndex'] = xdjswn, hqt0f['exec'](k_h0q5); dc6o2 = hqt0f['exec'](k_h0q5);) if (v19iu['push'](dc6o2), dc6o2[0x1]) return v19iu;
}var fiht0fm = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fk5q42 = new RegExp('[\\-\\.0-9' + fiht0fm['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ffmuib = new RegExp('^' + fiht0fm['source'] + fk5q42['source'] + '*(?::' + fiht0fm['source'] + fk5q42['source'] + '*)?$'),
    fxwsne = 0x0,
    fifum = 0x1,
    fimvbu = 0x2,
    f$r3 = 0x3,
    f_k54q0 = 0x4,
    fjsnxdw = 0x5,
    fkh5_ = 0x6,
    fwsxjd = 0x7;fimvfub['prototype'] = { 'parse': function (_45q2k, sdjnx, oj6scd) {
    var tmfbiv = this['domBuilder'];tmfbiv['startDocument'](), f$z87r3(sdjnx, sdjnx = {}), fjwdoc(_45q2k, sdjnx, oj6scd, tmfbiv, this['errorHandler']), tmfbiv['endDocument']();
  } }, fq24k5_['prototype'] = { 'setTagName': function (xzr7e) {
    if (!ffmuib['test'](xzr7e)) throw new Error('invalid tagName:' + xzr7e);this['tagName'] = xzr7e;
  }, 'add': function (zxs, bimvt, vibftm) {
    if (!ffmuib['test'](zxs)) throw new Error('invalid attribute:' + zxs);this[this['length']++] = { 'qName': zxs, 'value': bimvt, 'offset': vibftm };
  }, 'length': 0x0, 'getLocalName': function (ft0im) {
    return this[ft0im]['localName'];
  }, 'getLocator': function (k2465_) {
    return this[k2465_]['locator'];
  }, 'getQName': function (r$37y) {
    return this[r$37y]['qName'];
  }, 'getURI': function (r3z$78) {
    return this[r3z$78]['uri'];
  }, 'getValue': function (c462o) {
    return this[c462o]['value'];
  } }, fa$ry37({}, fa$ry37['prototype']) instanceof fa$ry37 || (fa$ry37 = function (n8exr, mfiu) {
  function ibtvmf() {}ibtvmf['prototype'] = mfiu, ibtvmf = new ibtvmf();for (mfiu in n8exr) ibtvmf[mfiu] = n8exr[mfiu];return ibtvmf;
}), exports['XMLReader'] = fimvfub;