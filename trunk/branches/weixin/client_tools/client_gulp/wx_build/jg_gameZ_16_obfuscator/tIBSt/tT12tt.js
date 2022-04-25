var W = wx.$l;
function L9v5zbda() {}function L9yp3tl6(tpgoy, sw2k7f, av1, t63yp, vab5z) {
  function rim04(to6ygp) {
    if (to6ygp > 0xffff) {
      to6ygp -= 0x10000;var sfq27 = 0xd800 + (to6ygp >> 0xa),
          gr8iom = 0xdc00 + (0x3ff & to6ygp);return String['fromCharCode'](sfq27, gr8iom);
    }return String['fromCharCode'](to6ygp);
  }function a04mn5(l3yp) {
    var uh1vj = l3yp['slice'](0x1, -0x1);return uh1vj in av1 ? av1[uh1vj] : '#' === uh1vj['charAt'](0x0) ? rim04(parseInt(uh1vj['substr'](0x1)['replace']('x', '0x'))) : (vab5z['error']('entity not found:' + l3yp), l3yp);
  }function l3$ysq(opgt6y) {
    if (opgt6y > da1bzv) {
      var zn4a05 = tpgoy['substring'](da1bzv, opgt6y)['replace'](/&#?\w+;/g, a04mn5);$fs2w && gp8ot(da1bzv), t63yp['characters'](zn4a05, 0x0, opgt6y - da1bzv), da1bzv = opgt6y;
    }
  }function gp8ot(c2kw, db1vzj) {
    for (; c2kw >= pyl3qt && (db1vzj = cke_9x['exec'](tpgoy));) r8m0in = db1vzj['index'], pyl3qt = r8m0in + db1vzj[0x0]['length'], $fs2w['lineNumber']++;$fs2w['columnNumber'] = c2kw - r8m0in + 0x1;
  }for (var r8m0in = 0x0, pyl3qt = 0x0, cke_9x = /.*(?:\r\n?|\n)|.*$/g, $fs2w = t63yp['locator'], xcwe = [{ 'currentNSMap': sw2k7f }], n80rm = {}, da1bzv = 0x0;;) {
    try {
      var w27c = tpgoy['indexOf']('<', da1bzv);if (0x0 > w27c) {
        if (!tpgoy['substr'](da1bzv)['match'](/^\s*$/)) {
          var gpyo6 = t63yp['doc'],
              gimor8 = gpyo6['createTextNode'](tpgoy['substr'](da1bzv));gpyo6['appendChild'](gimor8), t63yp['currentElement'] = gimor8;
        }return;
      }switch (w27c > da1bzv && l3$ysq(w27c), tpgoy['charAt'](w27c + 0x1)) {case '/':
          var p3$qy = tpgoy['indexOf']('>', w27c + 0x3),
              k7wfc = tpgoy['substring'](w27c + 0x2, p3$qy),
              _kc7e = xcwe['pop']();0x0 > p3$qy ? (k7wfc = tpgoy['substring'](w27c + 0x2)['replace'](/[\s<].*/, ''), vab5z['error']('end tag name: ' + k7wfc + ' is not complete:' + _kc7e['tagName']), p3$qy = w27c + 0x1 + k7wfc['length']) : k7wfc['match'](/\s</) && (k7wfc = k7wfc['replace'](/[\s<].*/, ''), vab5z['error']('end tag name: ' + k7wfc + ' maybe not complete'), p3$qy = w27c + 0x1 + k7wfc['length']);var vzad1 = _kc7e['localNSMap'],
              oytgp6 = _kc7e['tagName'] == k7wfc,
              l3qtp = oytgp6 || _kc7e['tagName'] && _kc7e['tagName']['toLowerCase']() == k7wfc['toLowerCase']();if (l3qtp) {
            if (t63yp['endElement'](_kc7e['uri'], _kc7e['localName'], k7wfc), vzad1) {
              for (var ro08mi in vzad1) t63yp['endPrefixMapping'](ro08mi);
            }oytgp6 || vab5z['fatalError']('end tag name: ' + k7wfc + ' is not match the current start tagName:' + _kc7e['tagName']);
          } else xcwe['push'](_kc7e);p3$qy++;break;case '?':
          $fs2w && gp8ot(w27c), p3$qy = L9s$2fw7(tpgoy, w27c, t63yp);break;case '!':
          $fs2w && gp8ot(w27c), p3$qy = L9oigm8r(tpgoy, w27c, t63yp, vab5z);break;default:
          $fs2w && gp8ot(w27c);var tlq = new L9f7wsk(),
              jbvu = xcwe[xcwe['length'] - 0x1]['currentNSMap'],
              p3$qy = L9f27sq$(tpgoy, w27c, tlq, jbvu, a04mn5, vab5z),
              bazd4 = tlq['length'];if (!tlq['closed'] && L9i4mn0(tpgoy, p3$qy, tlq['tagName'], n80rm) && (tlq['closed'] = !0x0, av1['nbsp'] || vab5z['warning']('unclosed xml attribute')), $fs2w && bazd4) {
            for (var fsq2l$ = L9a40mn($fs2w, {}), bz5n4 = 0x0; bazd4 > bz5n4; bz5n4++) {
              var bvazd1 = tlq[bz5n4];gp8ot(bvazd1['offset']), bvazd1['locator'] = L9a40mn($fs2w, {});
            }t63yp['locator'] = fsq2l$, L9gior(tlq, t63yp, jbvu) && xcwe['push'](tlq), t63yp['locator'] = $fs2w;
          } else L9gior(tlq, t63yp, jbvu) && xcwe['push'](tlq);'http://www.w3.org/1999/xhtml' !== tlq['uri'] || tlq['closed'] ? p3$qy++ : p3$qy = L9r8im(tpgoy, p3$qy, tlq['tagName'], a04mn5, t63yp);}
    } catch (fkws2) {
      vab5z['error']('element parse error: ' + fkws2), p3$qy = -0x1;
    }p3$qy > da1bzv ? da1bzv = p3$qy : l3$ysq(Math['max'](w27c, da1bzv) + 0x1);
  }
}function L9a40mn(wk_xc, qs$l32) {
  return qs$l32['lineNumber'] = wk_xc['lineNumber'], qs$l32['columnNumber'] = wk_xc['columnNumber'], qs$l32;
}function L9f27sq$(ygp36t, qyplt, k7ecfw, cfw2k7, db1vju, mri40n) {
  for (var $2fs7, to6gyp, fs$7w = ++qyplt, kfc27w = L9$yq3pl;;) {
    var _k9ex = ygp36t['charAt'](fs$7w);switch (_k9ex) {case '=':
        if (kfc27w === L9vubj1d) $2fs7 = ygp36t['slice'](qyplt, fs$7w), kfc27w = L9_e9kcx;else {
          if (kfc27w !== L9s3) throw new Error('attribute equal must after attrName');kfc27w = L9_e9kcx;
        }break;case '\x27':case '\x22':
        if (kfc27w === L9_e9kcx || kfc27w === L9vubj1d) {
          if (kfc27w === L9vubj1d && (mri40n['warning']('attribute value must after "="'), $2fs7 = ygp36t['slice'](qyplt, fs$7w)), qyplt = fs$7w + 0x1, fs$7w = ygp36t['indexOf'](_k9ex, qyplt), !(fs$7w > 0x0)) throw new Error('attribute value no end \'' + _k9ex + '\' match');to6gyp = ygp36t['slice'](qyplt, fs$7w)['replace'](/&#?\w+;/g, db1vju), k7ecfw['add']($2fs7, to6gyp, qyplt - 0x1), kfc27w = L9o8;
        } else {
          if (kfc27w != L9a4nzb5) throw new Error('attribute value must after "="');to6gyp = ygp36t['slice'](qyplt, fs$7w)['replace'](/&#?\w+;/g, db1vju), k7ecfw['add']($2fs7, to6gyp, qyplt), mri40n['warning']('attribute "' + $2fs7 + '" missed start quot(' + _k9ex + ')!!'), qyplt = fs$7w + 0x1, kfc27w = L9o8;
        }break;case '/':
        switch (kfc27w) {case L9$yq3pl:
            k7ecfw['setTagName'](ygp36t['slice'](qyplt, fs$7w));case L9o8:case L9da4z:case L9e7:
            kfc27w = L9e7, k7ecfw['closed'] = !0x0;case L9a4nzb5:case L9vubj1d:case L9s3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mri40n['error']('unexpected end of input'), kfc27w == L9$yq3pl && k7ecfw['setTagName'](ygp36t['slice'](qyplt, fs$7w)), fs$7w;case '>':
        switch (kfc27w) {case L9$yq3pl:
            k7ecfw['setTagName'](ygp36t['slice'](qyplt, fs$7w));case L9o8:case L9da4z:case L9e7:
            break;case L9a4nzb5:case L9vubj1d:
            to6gyp = ygp36t['slice'](qyplt, fs$7w), '/' === to6gyp['slice'](-0x1) && (k7ecfw['closed'] = !0x0, to6gyp = to6gyp['slice'](0x0, -0x1));case L9s3:
            kfc27w === L9s3 && (to6gyp = $2fs7), kfc27w == L9a4nzb5 ? (mri40n['warning']('attribute "' + to6gyp + '" missed quot(")!!'), k7ecfw['add']($2fs7, to6gyp['replace'](/&#?\w+;/g, db1vju), qyplt)) : ('http://www.w3.org/1999/xhtml' === cfw2k7[''] && to6gyp['match'](/^(?:disabled|checked|selected)$/i) || mri40n['warning']('attribute "' + to6gyp + '" missed value!! "' + to6gyp + '" instead!!'), k7ecfw['add'](to6gyp, to6gyp, qyplt));break;case L9_e9kcx:
            throw new Error('attribute value missed!!');}return fs$7w;case '\u0080':
        _k9ex = '\x20';default:
        if ('\x20' >= _k9ex) switch (kfc27w) {case L9$yq3pl:
            k7ecfw['setTagName'](ygp36t['slice'](qyplt, fs$7w)), kfc27w = L9da4z;break;case L9vubj1d:
            $2fs7 = ygp36t['slice'](qyplt, fs$7w), kfc27w = L9s3;break;case L9a4nzb5:
            var to6gyp = ygp36t['slice'](qyplt, fs$7w)['replace'](/&#?\w+;/g, db1vju);mri40n['warning']('attribute "' + to6gyp + '" missed quot(")!!'), k7ecfw['add']($2fs7, to6gyp, qyplt);case L9o8:
            kfc27w = L9da4z;} else switch (kfc27w) {case L9s3:
            {
              k7ecfw['tagName'];
            }'http://www.w3.org/1999/xhtml' === cfw2k7[''] && $2fs7['match'](/^(?:disabled|checked|selected)$/i) || mri40n['warning']('attribute "' + $2fs7 + '" missed value!! "' + $2fs7 + '" instead2!!'), k7ecfw['add']($2fs7, $2fs7, qyplt), qyplt = fs$7w, kfc27w = L9vubj1d;break;case L9o8:
            mri40n['warning']('attribute space is required"' + $2fs7 + '\x22!!');case L9da4z:
            kfc27w = L9vubj1d, qyplt = fs$7w;break;case L9_e9kcx:
            kfc27w = L9a4nzb5, qyplt = fs$7w;break;case L9e7:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}fs$7w++;
  }
}function L9gior(gypo6t, gopt6, poytg6) {
  for (var vh1dju = gypo6t['tagName'], g6ot8p = null, ujbd1v = gypo6t['length']; ujbd1v--;) {
    var gor68i = gypo6t[ujbd1v],
        r8iom = gor68i['qName'],
        z45na0 = gor68i['value'],
        bvzjd = r8iom['indexOf'](':');if (bvzjd > 0x0) var ir8og = gor68i['prefix'] = r8iom['slice'](0x0, bvzjd),
        p3l$y = r8iom['slice'](bvzjd + 0x1),
        z1bd = 'xmlns' === ir8og && p3l$y;else p3l$y = r8iom, ir8og = null, z1bd = 'xmlns' === r8iom && '';gor68i['localName'] = p3l$y, z1bd !== !0x1 && (null == g6ot8p && (g6ot8p = {}, L9pg86o(poytg6, poytg6 = {})), poytg6[z1bd] = g6ot8p[z1bd] = z45na0, gor68i['uri'] = 'http://www.w3.org/2000/xmlns/', gopt6['startPrefixMapping'](z1bd, z45na0));
  }for (var ujbd1v = gypo6t['length']; ujbd1v--;) {
    gor68i = gypo6t[ujbd1v];var ir8og = gor68i['prefix'];ir8og && ('xml' === ir8og && (gor68i['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ir8og && (gor68i['uri'] = poytg6[ir8og || '']));
  }var bvzjd = vh1dju['indexOf'](':');bvzjd > 0x0 ? (ir8og = gypo6t['prefix'] = vh1dju['slice'](0x0, bvzjd), p3l$y = gypo6t['localName'] = vh1dju['slice'](bvzjd + 0x1)) : (ir8og = null, p3l$y = gypo6t['localName'] = vh1dju);var d1jvbu = gypo6t['uri'] = poytg6[ir8og || ''];if (gopt6['startElement'](d1jvbu, p3l$y, vh1dju, gypo6t), !gypo6t['closed']) return gypo6t['currentNSMap'] = poytg6, gypo6t['localNSMap'] = g6ot8p, !0x0;if (gopt6['endElement'](d1jvbu, p3l$y, vh1dju), g6ot8p) {
    for (ir8og in g6ot8p) gopt6['endPrefixMapping'](ir8og);
  }
}function L9r8im(fc2kw7, cek_7, nm40i5, x_ewk, azv1) {
  if (/^(?:script|textarea)$/i['test'](nm40i5)) {
    var yopg = fc2kw7['indexOf']('</' + nm40i5 + '>', cek_7),
        nbz4 = fc2kw7['substring'](cek_7 + 0x1, yopg);if (/[&<]/['test'](nbz4)) return (/^script$/i['test'](nm40i5) ? (azv1['characters'](nbz4, 0x0, nbz4['length']), yopg) : (nbz4 = nbz4['replace'](/&#?\w+;/g, x_ewk), azv1['characters'](nbz4, 0x0, nbz4['length']), yopg)
    );
  }return cek_7 + 0x1;
}function L9i4mn0(xwc_ke, oy6pg, w$72sf, bjv1dz) {
  var vd1zba = bjv1dz[w$72sf];return null == vd1zba && (vd1zba = xwc_ke['lastIndexOf']('</' + w$72sf + '>'), oy6pg > vd1zba && (vd1zba = xwc_ke['lastIndexOf']('</' + w$72sf)), bjv1dz[w$72sf] = vd1zba), oy6pg > vd1zba;
}function L9pg86o(xe_k, kc7_ew) {
  for (var kc7efw in xe_k) kc7_ew[kc7efw] = xe_k[kc7efw];
}function L9oigm8r(ckfwe7, i04mnr, mri, va1zdb) {
  var wcek_ = ckfwe7['charAt'](i04mnr + 0x2);switch (wcek_) {case '-':
      if ('-' === ckfwe7['charAt'](i04mnr + 0x3)) {
        var y$lpq = ckfwe7['indexOf']('-->', i04mnr + 0x4);return y$lpq > i04mnr ? (mri['comment'](ckfwe7, i04mnr + 0x4, y$lpq - i04mnr - 0x4), y$lpq + 0x3) : (va1zdb['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ckfwe7['substr'](i04mnr + 0x3, 0x6)) {
        var y$lpq = ckfwe7['indexOf'](']]>', i04mnr + 0x9);return mri['startCDATA'](), mri['characters'](ckfwe7, i04mnr + 0x9, y$lpq - i04mnr - 0x9), mri['endCDATA'](), y$lpq + 0x3;
      }var ni8r0m = L9n4am(ckfwe7, i04mnr),
          mori80 = ni8r0m['length'];if (mori80 > 0x1 && /!doctype/i['test'](ni8r0m[0x0][0x0])) {
        var na4z0 = ni8r0m[0x1][0x0],
            om8ir0 = mori80 > 0x3 && /^public$/i['test'](ni8r0m[0x2][0x0]) && ni8r0m[0x3][0x0],
            mn054a = mori80 > 0x4 && ni8r0m[0x4][0x0],
            w7k2f = ni8r0m[mori80 - 0x1];return mri['startDTD'](na4z0, om8ir0 && om8ir0['replace'](/^(['"])(.*?)\1$/, '$2'), mn054a && mn054a['replace'](/^(['"])(.*?)\1$/, '$2')), mri['endDTD'](), w7k2f['index'] + w7k2f[0x0]['length'];
      }}return -0x1;
}function L9s$2fw7(y6pto, g6y3pt, topgy6) {
  var wkxce = y6pto['indexOf']('?>', g6y3pt);if (wkxce) {
    var o8rm0i = y6pto['substring'](g6y3pt, wkxce)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (o8rm0i) {
      {
        o8rm0i[0x0]['length'];
      }return topgy6['processingInstruction'](o8rm0i[0x1], o8rm0i[0x2]), wkxce + 0x2;
    }return -0x1;
  }return -0x1;
}function L9f7wsk() {}function L9$sl(fk2ws, uhdv) {
  return fk2ws['__proto__'] = uhdv, fk2ws;
}function L9n4am(y3gp6t, hdvj1) {
  var $w7s2f,
      m8goi = [],
      cw_xek = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (cw_xek['lastIndex'] = hdvj1, cw_xek['exec'](y3gp6t); $w7s2f = cw_xek['exec'](y3gp6t);) if (m8goi['push']($w7s2f), $w7s2f[0x1]) return m8goi;
}var L9nz504a = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9pg3t = new RegExp('[\\-\\.0-9' + L9nz504a['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9kew_c7 = new RegExp('^' + L9nz504a['source'] + L9pg3t['source'] + '*(?::' + L9nz504a['source'] + L9pg3t['source'] + '*)?$'),
    L9$yq3pl = 0x0,
    L9vubj1d = 0x1,
    L9s3 = 0x2,
    L9_e9kcx = 0x3,
    L9a4nzb5 = 0x4,
    L9o8 = 0x5,
    L9da4z = 0x6,
    L9e7 = 0x7;L9v5zbda['prototype'] = { 'parse': function (yp$q3l, lpy63t, w27ks) {
    var gmo8i = this['domBuilder'];gmo8i['startDocument'](), L9pg86o(lpy63t, lpy63t = {}), L9yp3tl6(yp$q3l, lpy63t, w27ks, gmo8i, this['errorHandler']), gmo8i['endDocument']();
  } }, L9f7wsk['prototype'] = { 'setTagName': function (rnm40i) {
    if (!L9kew_c7['test'](rnm40i)) throw new Error('invalid tagName:' + rnm40i);this['tagName'] = rnm40i;
  }, 'add': function (rmiog8, dvb1a, dva5) {
    if (!L9kew_c7['test'](rmiog8)) throw new Error('invalid attribute:' + rmiog8);this[this['length']++] = { 'qName': rmiog8, 'value': dvb1a, 'offset': dva5 };
  }, 'length': 0x0, 'getLocalName': function (p$ly) {
    return this[p$ly]['localName'];
  }, 'getLocator': function (h1vjdu) {
    return this[h1vjdu]['locator'];
  }, 'getQName': function (b5dva) {
    return this[b5dva]['qName'];
  }, 'getURI': function (kw_cex) {
    return this[kw_cex]['uri'];
  }, 'getValue': function (adzvb1) {
    return this[adzvb1]['value'];
  } }, L9$sl({}, L9$sl['prototype']) instanceof L9$sl || (L9$sl = function (ty3pg, t3lpq) {
  function d1hvj() {}d1hvj['prototype'] = t3lpq, d1hvj = new d1hvj();for (t3lpq in ty3pg) d1hvj[t3lpq] = ty3pg[t3lpq];return d1hvj;
}), exports['XMLReader'] = L9v5zbda;