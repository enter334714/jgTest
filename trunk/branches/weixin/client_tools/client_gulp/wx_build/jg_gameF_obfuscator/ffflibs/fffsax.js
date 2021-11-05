var k = wx.$f;
function fr83() {}function fimvuf(wexnz, f5hq, r$7a, htqm0f, khq50t) {
  function mviftb(vub1i) {
    if (vub1i > 0xffff) {
      vub1i -= 0x10000;var dxsjnw = 0xd800 + (vub1i >> 0xa),
          k_2465 = 0xdc00 + (0x3ff & vub1i);return String['fromCharCode'](dxsjnw, k_2465);
    }return String['fromCharCode'](vub1i);
  }function kt5(z738r$) {
    var rz$873 = z738r$['slice'](0x1, -0x1);return rz$873 in r$7a ? r$7a[rz$873] : '#' === rz$873['charAt'](0x0) ? mviftb(parseInt(rz$873['substr'](0x1)['replace']('x', '0x'))) : (khq50t['error']('entity not found:' + z738r$), z738r$);
  }function y3a$r7(ocjwd) {
    if (ocjwd > jdsnx) {
      var j6c2od = wexnz['substring'](jdsnx, ocjwd)['replace'](/&#?\w+;/g, kt5);dxesw && pa7$3(jdsnx), htqm0f['characters'](j6c2od, 0x0, ocjwd - jdsnx), jdsnx = ocjwd;
    }
  }function pa7$3(vbmf, bv9ui1) {
    for (; vbmf >= fuibvm && (bv9ui1 = k4562['exec'](wexnz));) o4_62 = bv9ui1['index'], fuibvm = o4_62 + bv9ui1[0x0]['length'], dxesw['lineNumber']++;dxesw['columnNumber'] = vbmf - o4_62 + 0x1;
  }for (var o4_62 = 0x0, fuibvm = 0x0, k4562 = /.*(?:\r\n?|\n)|.*$/g, dxesw = htqm0f['locator'], fbmtv = [{ 'currentNSMap': f5hq }], $e7r = {}, jdsnx = 0x0;;) {
    try {
      var ez78$ = wexnz['indexOf']('<', jdsnx);if (0x0 > ez78$) {
        if (!wexnz['substr'](jdsnx)['match'](/^\s*$/)) {
          var xwzesn = htqm0f['doc'],
              y3ap$7 = xwzesn['createTextNode'](wexnz['substr'](jdsnx));xwzesn['appendChild'](y3ap$7), htqm0f['currentElement'] = y3ap$7;
        }return;
      }switch (ez78$ > jdsnx && y3a$r7(ez78$), wexnz['charAt'](ez78$ + 0x1)) {case '/':
          var _0q5hk = wexnz['indexOf']('>', ez78$ + 0x3),
              p7ya3$ = wexnz['substring'](ez78$ + 0x2, _0q5hk),
              sdjcwn = fbmtv['pop']();0x0 > _0q5hk ? (p7ya3$ = wexnz['substring'](ez78$ + 0x2)['replace'](/[\s<].*/, ''), khq50t['error']('end tag name: ' + p7ya3$ + ' is not complete:' + sdjcwn['tagName']), _0q5hk = ez78$ + 0x1 + p7ya3$['length']) : p7ya3$['match'](/\s</) && (p7ya3$ = p7ya3$['replace'](/[\s<].*/, ''), khq50t['error']('end tag name: ' + p7ya3$ + ' maybe not complete'), _0q5hk = ez78$ + 0x1 + p7ya3$['length']);var c26jo = sdjcwn['localNSMap'],
              vmft = sdjcwn['tagName'] == p7ya3$,
              r$78z3 = vmft || sdjcwn['tagName'] && sdjcwn['tagName']['toLowerCase']() == p7ya3$['toLowerCase']();if (r$78z3) {
            if (htqm0f['endElement'](sdjcwn['uri'], sdjcwn['localName'], p7ya3$), c26jo) {
              for (var _54q in c26jo) htqm0f['endPrefixMapping'](_54q);
            }vmft || khq50t['fatalError']('end tag name: ' + p7ya3$ + ' is not match the current start tagName:' + sdjcwn['tagName']);
          } else fbmtv['push'](sdjcwn);_0q5hk++;break;case '?':
          dxesw && pa7$3(ez78$), _0q5hk = fjwsdnc(wexnz, ez78$, htqm0f);break;case '!':
          dxesw && pa7$3(ez78$), _0q5hk = fkq0_5(wexnz, ez78$, htqm0f, khq50t);break;default:
          dxesw && pa7$3(ez78$);var mbihtf = new fbimvf(),
              qf05 = fbmtv[fbmtv['length'] - 0x1]['currentNSMap'],
              _0q5hk = fuvbi91(wexnz, ez78$, mbihtf, qf05, kt5, khq50t),
              tk0qh5 = mbihtf['length'];if (!mbihtf['closed'] && fdjsowc(wexnz, _0q5hk, mbihtf['tagName'], $e7r) && (mbihtf['closed'] = !0x0, r$7a['nbsp'] || khq50t['warning']('unclosed xml attribute')), dxesw && tk0qh5) {
            for (var bimtv = fwexzs(dxesw, {}), ihbfmt = 0x0; tk0qh5 > ihbfmt; ihbfmt++) {
              var kh50q_ = mbihtf[ihbfmt];pa7$3(kh50q_['offset']), kh50q_['locator'] = fwexzs(dxesw, {});
            }htqm0f['locator'] = bimtv, fap73y$(mbihtf, htqm0f, qf05) && fbmtv['push'](mbihtf), htqm0f['locator'] = dxesw;
          } else fap73y$(mbihtf, htqm0f, qf05) && fbmtv['push'](mbihtf);'http://www.w3.org/1999/xhtml' !== mbihtf['uri'] || mbihtf['closed'] ? _0q5hk++ : _0q5hk = fx8zre(wexnz, _0q5hk, mbihtf['tagName'], kt5, htqm0f);}
    } catch (y$873) {
      khq50t['error']('element parse error: ' + y$873), _0q5hk = -0x1;
    }_0q5hk > jdsnx ? jdsnx = _0q5hk : y3a$r7(Math['max'](ez78$, jdsnx) + 0x1);
  }
}function fwexzs(jdnsx, bihmf) {
  return bihmf['lineNumber'] = jdnsx['lineNumber'], bihmf['columnNumber'] = jdnsx['columnNumber'], bihmf;
}function fuvbi91(ap73$y, gu9v, zre7$8, ufi, r$z873, b1uim) {
  for (var mfthib, fit0h, wjsndx = ++gu9v, ewnzs = fvmi1u;;) {
    var ibtmfv = ap73$y['charAt'](wjsndx);switch (ibtmfv) {case '=':
        if (ewnzs === fk64o2) mfthib = ap73$y['slice'](gu9v, wjsndx), ewnzs = fvftb;else {
          if (ewnzs !== f_26k5) throw new Error('attribute equal must after attrName');ewnzs = fvftb;
        }break;case '\x27':case '\x22':
        if (ewnzs === fvftb || ewnzs === fk64o2) {
          if (ewnzs === fk64o2 && (b1uim['warning']('attribute value must after "="'), mfthib = ap73$y['slice'](gu9v, wjsndx)), gu9v = wjsndx + 0x1, wjsndx = ap73$y['indexOf'](ibtmfv, gu9v), !(wjsndx > 0x0)) throw new Error('attribute value no end \'' + ibtmfv + '\' match');fit0h = ap73$y['slice'](gu9v, wjsndx)['replace'](/&#?\w+;/g, r$z873), zre7$8['add'](mfthib, fit0h, gu9v - 0x1), ewnzs = fjd6o2c;
        } else {
          if (ewnzs != fo2k6) throw new Error('attribute value must after "="');fit0h = ap73$y['slice'](gu9v, wjsndx)['replace'](/&#?\w+;/g, r$z873), zre7$8['add'](mfthib, fit0h, gu9v), b1uim['warning']('attribute "' + mfthib + '" missed start quot(' + ibtmfv + ')!!'), gu9v = wjsndx + 0x1, ewnzs = fjd6o2c;
        }break;case '/':
        switch (ewnzs) {case fvmi1u:
            zre7$8['setTagName'](ap73$y['slice'](gu9v, wjsndx));case fjd6o2c:case ffumb:case fumvb1:
            ewnzs = fumvb1, zre7$8['closed'] = !0x0;case fo2k6:case fk64o2:case f_26k5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return b1uim['error']('unexpected end of input'), ewnzs == fvmi1u && zre7$8['setTagName'](ap73$y['slice'](gu9v, wjsndx)), wjsndx;case '>':
        switch (ewnzs) {case fvmi1u:
            zre7$8['setTagName'](ap73$y['slice'](gu9v, wjsndx));case fjd6o2c:case ffumb:case fumvb1:
            break;case fo2k6:case fk64o2:
            fit0h = ap73$y['slice'](gu9v, wjsndx), '/' === fit0h['slice'](-0x1) && (zre7$8['closed'] = !0x0, fit0h = fit0h['slice'](0x0, -0x1));case f_26k5:
            ewnzs === f_26k5 && (fit0h = mfthib), ewnzs == fo2k6 ? (b1uim['warning']('attribute "' + fit0h + '" missed quot(")!!'), zre7$8['add'](mfthib, fit0h['replace'](/&#?\w+;/g, r$z873), gu9v)) : ('http://www.w3.org/1999/xhtml' === ufi[''] && fit0h['match'](/^(?:disabled|checked|selected)$/i) || b1uim['warning']('attribute "' + fit0h + '" missed value!! "' + fit0h + '" instead!!'), zre7$8['add'](fit0h, fit0h, gu9v));break;case fvftb:
            throw new Error('attribute value missed!!');}return wjsndx;case '\u0080':
        ibtmfv = '\x20';default:
        if ('\x20' >= ibtmfv) switch (ewnzs) {case fvmi1u:
            zre7$8['setTagName'](ap73$y['slice'](gu9v, wjsndx)), ewnzs = ffumb;break;case fk64o2:
            mfthib = ap73$y['slice'](gu9v, wjsndx), ewnzs = f_26k5;break;case fo2k6:
            var fit0h = ap73$y['slice'](gu9v, wjsndx)['replace'](/&#?\w+;/g, r$z873);b1uim['warning']('attribute "' + fit0h + '" missed quot(")!!'), zre7$8['add'](mfthib, fit0h, gu9v);case fjd6o2c:
            ewnzs = ffumb;} else switch (ewnzs) {case f_26k5:
            {
              zre7$8['tagName'];
            }'http://www.w3.org/1999/xhtml' === ufi[''] && mfthib['match'](/^(?:disabled|checked|selected)$/i) || b1uim['warning']('attribute "' + mfthib + '" missed value!! "' + mfthib + '" instead2!!'), zre7$8['add'](mfthib, mfthib, gu9v), gu9v = wjsndx, ewnzs = fk64o2;break;case fjd6o2c:
            b1uim['warning']('attribute space is required"' + mfthib + '\x22!!');case ffumb:
            ewnzs = fk64o2, gu9v = wjsndx;break;case fvftb:
            ewnzs = fo2k6, gu9v = wjsndx;break;case fumvb1:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wjsndx++;
  }
}function fap73y$(jo, tmi0f, k25q) {
  for (var ium1bv = jo['tagName'], hft5 = null, b1m = jo['length']; b1m--;) {
    var umifb = jo[b1m],
        owjc = umifb['qName'],
        wdsx = umifb['value'],
        imt0hf = owjc['indexOf'](':');if (imt0hf > 0x0) var kh0tq5 = umifb['prefix'] = owjc['slice'](0x0, imt0hf),
        jdxnw = owjc['slice'](imt0hf + 0x1),
        uivmbf = 'xmlns' === kh0tq5 && jdxnw;else jdxnw = owjc, kh0tq5 = null, uivmbf = 'xmlns' === owjc && '';umifb['localName'] = jdxnw, uivmbf !== !0x1 && (null == hft5 && (hft5 = {}, fuiv19b(k25q, k25q = {})), k25q[uivmbf] = hft5[uivmbf] = wdsx, umifb['uri'] = 'http://www.w3.org/2000/xmlns/', tmi0f['startPrefixMapping'](uivmbf, wdsx));
  }for (var b1m = jo['length']; b1m--;) {
    umifb = jo[b1m];var kh0tq5 = umifb['prefix'];kh0tq5 && ('xml' === kh0tq5 && (umifb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kh0tq5 && (umifb['uri'] = k25q[kh0tq5 || '']));
  }var imt0hf = ium1bv['indexOf'](':');imt0hf > 0x0 ? (kh0tq5 = jo['prefix'] = ium1bv['slice'](0x0, imt0hf), jdxnw = jo['localName'] = ium1bv['slice'](imt0hf + 0x1)) : (kh0tq5 = null, jdxnw = jo['localName'] = ium1bv);var o_6c4 = jo['uri'] = k25q[kh0tq5 || ''];if (tmi0f['startElement'](o_6c4, jdxnw, ium1bv, jo), !jo['closed']) return jo['currentNSMap'] = k25q, jo['localNSMap'] = hft5, !0x0;if (tmi0f['endElement'](o_6c4, jdxnw, ium1bv), hft5) {
    for (kh0tq5 in hft5) tmi0f['endPrefixMapping'](kh0tq5);
  }
}function fx8zre(fhq05, k4o_26, _k05hq, o26cj, dnwsc) {
  if (/^(?:script|textarea)$/i['test'](_k05hq)) {
    var bthmfi = fhq05['indexOf']('</' + _k05hq + '>', k4o_26),
        _q0kh = fhq05['substring'](k4o_26 + 0x1, bthmfi);if (/[&<]/['test'](_q0kh)) return (/^script$/i['test'](_k05hq) ? (dnwsc['characters'](_q0kh, 0x0, _q0kh['length']), bthmfi) : (_q0kh = _q0kh['replace'](/&#?\w+;/g, o26cj), dnwsc['characters'](_q0kh, 0x0, _q0kh['length']), bthmfi)
    );
  }return k4o_26 + 0x1;
}function fdjsowc(k_hq, r37$ay, xseznw, fibhm) {
  var hf05q = fibhm[xseznw];return null == hf05q && (hf05q = k_hq['lastIndexOf']('</' + xseznw + '>'), r37$ay > hf05q && (hf05q = k_hq['lastIndexOf']('</' + xseznw)), fibhm[xseznw] = hf05q), r37$ay > hf05q;
}function fuiv19b(qthf0m, ui1vbm) {
  for (var scdwj in qthf0m) ui1vbm[scdwj] = qthf0m[scdwj];
}function fkq0_5(djsnc, hmqt0, xnesz, fvim) {
  var $3yap7 = djsnc['charAt'](hmqt0 + 0x2);switch ($3yap7) {case '-':
      if ('-' === djsnc['charAt'](hmqt0 + 0x3)) {
        var miu1vb = djsnc['indexOf']('-->', hmqt0 + 0x4);return miu1vb > hmqt0 ? (xnesz['comment'](djsnc, hmqt0 + 0x4, miu1vb - hmqt0 - 0x4), miu1vb + 0x3) : (fvim['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == djsnc['substr'](hmqt0 + 0x3, 0x6)) {
        var miu1vb = djsnc['indexOf'](']]>', hmqt0 + 0x9);return xnesz['startCDATA'](), xnesz['characters'](djsnc, hmqt0 + 0x9, miu1vb - hmqt0 - 0x9), xnesz['endCDATA'](), miu1vb + 0x3;
      }var ry3a7$ = f_4q0(djsnc, hmqt0),
          r$z8 = ry3a7$['length'];if (r$z8 > 0x1 && /!doctype/i['test'](ry3a7$[0x0][0x0])) {
        var fhti = ry3a7$[0x1][0x0],
            $8yr = r$z8 > 0x3 && /^public$/i['test'](ry3a7$[0x2][0x0]) && ry3a7$[0x3][0x0],
            $a3r = r$z8 > 0x4 && ry3a7$[0x4][0x0],
            h_kq5 = ry3a7$[r$z8 - 0x1];return xnesz['startDTD'](fhti, $8yr && $8yr['replace'](/^(['"])(.*?)\1$/, '$2'), $a3r && $a3r['replace'](/^(['"])(.*?)\1$/, '$2')), xnesz['endDTD'](), h_kq5['index'] + h_kq5[0x0]['length'];
      }}return -0x1;
}function fjwsdnc(h0qf, ry7$38, y8r37$) {
  var zsxew = h0qf['indexOf']('?>', ry7$38);if (zsxew) {
    var xsndj = h0qf['substring'](ry7$38, zsxew)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xsndj) {
      {
        xsndj[0x0]['length'];
      }return y8r37$['processingInstruction'](xsndj[0x1], xsndj[0x2]), zsxew + 0x2;
    }return -0x1;
  }return -0x1;
}function fbimvf() {}function fay3$7(fvmbiu, tihf) {
  return fvmbiu['__proto__'] = tihf, fvmbiu;
}function f_4q0(zxnw8, ez8$r7) {
  var co64j,
      rzn8x = [],
      v91b = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (v91b['lastIndex'] = ez8$r7, v91b['exec'](zxnw8); co64j = v91b['exec'](zxnw8);) if (rzn8x['push'](co64j), co64j[0x1]) return rzn8x;
}var fenzw8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fm0qfht = new RegExp('[\\-\\.0-9' + fenzw8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    f_h5kq0 = new RegExp('^' + fenzw8['source'] + fm0qfht['source'] + '*(?::' + fenzw8['source'] + fm0qfht['source'] + '*)?$'),
    fvmi1u = 0x0,
    fk64o2 = 0x1,
    f_26k5 = 0x2,
    fvftb = 0x3,
    fo2k6 = 0x4,
    fjd6o2c = 0x5,
    ffumb = 0x6,
    fumvb1 = 0x7;fr83['prototype'] = { 'parse': function (enxz8, r7z$3, h0k_q5) {
    var sxewnd = this['domBuilder'];sxewnd['startDocument'](), fuiv19b(r7z$3, r7z$3 = {}), fimvuf(enxz8, r7z$3, h0k_q5, sxewnd, this['errorHandler']), sxewnd['endDocument']();
  } }, fbimvf['prototype'] = { 'setTagName': function (s6jodc) {
    if (!f_h5kq0['test'](s6jodc)) throw new Error('invalid tagName:' + s6jodc);this['tagName'] = s6jodc;
  }, 'add': function (fmqh0, k_h5, xren8z) {
    if (!f_h5kq0['test'](fmqh0)) throw new Error('invalid attribute:' + fmqh0);this[this['length']++] = { 'qName': fmqh0, 'value': k_h5, 'offset': xren8z };
  }, 'length': 0x0, 'getLocalName': function (h50tf) {
    return this[h50tf]['localName'];
  }, 'getLocator': function (xsdwne) {
    return this[xsdwne]['locator'];
  }, 'getQName': function (nwzx) {
    return this[nwzx]['qName'];
  }, 'getURI': function (tvfmb) {
    return this[tvfmb]['uri'];
  }, 'getValue': function (odcsjw) {
    return this[odcsjw]['value'];
  } }, fay3$7({}, fay3$7['prototype']) instanceof fay3$7 || (fay3$7 = function (r$7ay, tfmibh) {
  function vitmf() {}vitmf['prototype'] = tfmibh, vitmf = new vitmf();for (tfmibh in r$7ay) vitmf[tfmibh] = r$7ay[tfmibh];return vitmf;
}), exports['XMLReader'] = fr83;