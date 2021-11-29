var B = wx.$z;
function zgh9px() {}function zoydt(dkotb, n7qi3m, zytkdo, bdyto, ezody) {
  function lvi7nf(fg4vl) {
    if (fg4vl > 0xffff) {
      fg4vl -= 0x10000;var j3iq = 0xd800 + (fg4vl >> 0xa),
          k_r8by = 0xdc00 + (0x3ff & fg4vl);return String['fromCharCode'](j3iq, k_r8by);
    }return String['fromCharCode'](fg4vl);
  }function xtzase(kydtoz) {
    var _5u0 = kydtoz['slice'](0x1, -0x1);return _5u0 in zytkdo ? zytkdo[_5u0] : '#' === _5u0['charAt'](0x0) ? lvi7nf(parseInt(_5u0['substr'](0x1)['replace']('x', '0x'))) : (ezody['error']('entity not found:' + kydtoz), kydtoz);
  }function rb8k_5(eatzos) {
    if (eatzos > texa) {
      var ykb8_ = dkotb['substring'](texa, eatzos)['replace'](/&#?\w+;/g, xtzase);u50_2 && nl67fv(texa), bdyto['characters'](ykb8_, 0x0, eatzos - texa), texa = eatzos;
    }
  }function nl67fv(kobyt, dtzoae) {
    for (; kobyt >= kdb8 && (dtzoae = dbyko['exec'](dkotb));) saex91 = dtzoae['index'], kdb8 = saex91 + dtzoae[0x0]['length'], u50_2['lineNumber']++;u50_2['columnNumber'] = kobyt - saex91 + 0x1;
  }for (var saex91 = 0x0, kdb8 = 0x0, dbyko = /.*(?:\r\n?|\n)|.*$/g, u50_2 = bdyto['locator'], u50 = [{ 'currentNSMap': n7qi3m }], k8rbyd = {}, texa = 0x0;;) {
    try {
      var rw52 = dkotb['indexOf']('<', texa);if (0x0 > rw52) {
        if (!dkotb['substr'](texa)['match'](/^\s*$/)) {
          var dkyb = bdyto['doc'],
              i7nlv = dkyb['createTextNode'](dkotb['substr'](texa));dkyb['appendChild'](i7nlv), bdyto['currentElement'] = i7nlv;
        }return;
      }switch (rw52 > texa && rb8k_5(rw52), dkotb['charAt'](rw52 + 0x1)) {case '/':
          var u5r28_ = dkotb['indexOf']('>', rw52 + 0x3),
              za9x = dkotb['substring'](rw52 + 0x2, u5r28_),
              u5w_2r = u50['pop']();0x0 > u5r28_ ? (za9x = dkotb['substring'](rw52 + 0x2)['replace'](/[\s<].*/, ''), ezody['error']('end tag name: ' + za9x + ' is not complete:' + u5w_2r['tagName']), u5r28_ = rw52 + 0x1 + za9x['length']) : za9x['match'](/\s</) && (za9x = za9x['replace'](/[\s<].*/, ''), ezody['error']('end tag name: ' + za9x + ' maybe not complete'), u5r28_ = rw52 + 0x1 + za9x['length']);var tdeoz = u5w_2r['localNSMap'],
              tzyeod = u5w_2r['tagName'] == za9x,
              u5r_2w = tzyeod || u5w_2r['tagName'] && u5w_2r['tagName']['toLowerCase']() == za9x['toLowerCase']();if (u5r_2w) {
            if (bdyto['endElement'](u5w_2r['uri'], u5w_2r['localName'], za9x), tdeoz) {
              for (var bky_r in tdeoz) bdyto['endPrefixMapping'](bky_r);
            }tzyeod || ezody['fatalError']('end tag name: ' + za9x + ' is not match the current start tagName:' + u5w_2r['tagName']);
          } else u50['push'](u5w_2r);u5r28_++;break;case '?':
          u50_2 && nl67fv(rw52), u5r28_ = zozdeat(dkotb, rw52, bdyto);break;case '!':
          u50_2 && nl67fv(rw52), u5r28_ = ztdobk(dkotb, rw52, bdyto, ezody);break;default:
          u50_2 && nl67fv(rw52);var i3$mq = new zxe19a(),
              rk_8by = u50[u50['length'] - 0x1]['currentNSMap'],
              u5r28_ = zyb8okd(dkotb, rw52, i3$mq, rk_8by, xtzase, ezody),
              br8yd = i3$mq['length'];if (!i3$mq['closed'] && ztoye(dkotb, u5r28_, i3$mq['tagName'], k8rbyd) && (i3$mq['closed'] = !0x0, zytkdo['nbsp'] || ezody['warning']('unclosed xml attribute')), u50_2 && br8yd) {
            for (var vl76fn = zdoatze(u50_2, {}), yktzdo = 0x0; br8yd > yktzdo; yktzdo++) {
              var j3$im = i3$mq[yktzdo];nl67fv(j3$im['offset']), j3$im['locator'] = zdoatze(u50_2, {});
            }bdyto['locator'] = vl76fn, zp9xh1(i3$mq, bdyto, rk_8by) && u50['push'](i3$mq), bdyto['locator'] = u50_2;
          } else zp9xh1(i3$mq, bdyto, rk_8by) && u50['push'](i3$mq);'http://www.w3.org/1999/xhtml' !== i3$mq['uri'] || i3$mq['closed'] ? u5r28_++ : u5r28_ = zu25r8_(dkotb, u5r28_, i3$mq['tagName'], xtzase, bdyto);}
    } catch (doyt) {
      ezody['error']('element parse error: ' + doyt), u5r28_ = -0x1;
    }u5r28_ > texa ? texa = u5r28_ : rb8k_5(Math['max'](rw52, texa) + 0x1);
  }
}function zdoatze(b82, j3i$q) {
  return j3i$q['lineNumber'] = b82['lineNumber'], j3i$q['columnNumber'] = b82['columnNumber'], j3i$q;
}function zyb8okd(vnfl76, u52, lnfv6, zoety, mvin7l, wu2_r) {
  for (var z9aesx, xahs9, xsa91h = ++u52, vg4f = zmq3i7n;;) {
    var zotsae = vnfl76['charAt'](xsa91h);switch (zotsae) {case '=':
        if (vg4f === zivf) z9aesx = vnfl76['slice'](u52, xsa91h), vg4f = ztboyd;else {
          if (vg4f !== z_5u8) throw new Error('attribute equal must after attrName');vg4f = ztboyd;
        }break;case '\x27':case '\x22':
        if (vg4f === ztboyd || vg4f === zivf) {
          if (vg4f === zivf && (wu2_r['warning']('attribute value must after "="'), z9aesx = vnfl76['slice'](u52, xsa91h)), u52 = xsa91h + 0x1, xsa91h = vnfl76['indexOf'](zotsae, u52), !(xsa91h > 0x0)) throw new Error('attribute value no end \'' + zotsae + '\' match');xahs9 = vnfl76['slice'](u52, xsa91h)['replace'](/&#?\w+;/g, mvin7l), lnfv6['add'](z9aesx, xahs9, u52 - 0x1), vg4f = zqj3m$;
        } else {
          if (vg4f != zpx1g9) throw new Error('attribute value must after "="');xahs9 = vnfl76['slice'](u52, xsa91h)['replace'](/&#?\w+;/g, mvin7l), lnfv6['add'](z9aesx, xahs9, u52), wu2_r['warning']('attribute "' + z9aesx + '" missed start quot(' + zotsae + ')!!'), u52 = xsa91h + 0x1, vg4f = zqj3m$;
        }break;case '/':
        switch (vg4f) {case zmq3i7n:
            lnfv6['setTagName'](vnfl76['slice'](u52, xsa91h));case zqj3m$:case zkrb:case zzxtea:
            vg4f = zzxtea, lnfv6['closed'] = !0x0;case zpx1g9:case zivf:case z_5u8:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wu2_r['error']('unexpected end of input'), vg4f == zmq3i7n && lnfv6['setTagName'](vnfl76['slice'](u52, xsa91h)), xsa91h;case '>':
        switch (vg4f) {case zmq3i7n:
            lnfv6['setTagName'](vnfl76['slice'](u52, xsa91h));case zqj3m$:case zkrb:case zzxtea:
            break;case zpx1g9:case zivf:
            xahs9 = vnfl76['slice'](u52, xsa91h), '/' === xahs9['slice'](-0x1) && (lnfv6['closed'] = !0x0, xahs9 = xahs9['slice'](0x0, -0x1));case z_5u8:
            vg4f === z_5u8 && (xahs9 = z9aesx), vg4f == zpx1g9 ? (wu2_r['warning']('attribute "' + xahs9 + '" missed quot(")!!'), lnfv6['add'](z9aesx, xahs9['replace'](/&#?\w+;/g, mvin7l), u52)) : ('http://www.w3.org/1999/xhtml' === zoety[''] && xahs9['match'](/^(?:disabled|checked|selected)$/i) || wu2_r['warning']('attribute "' + xahs9 + '" missed value!! "' + xahs9 + '" instead!!'), lnfv6['add'](xahs9, xahs9, u52));break;case ztboyd:
            throw new Error('attribute value missed!!');}return xsa91h;case '\u0080':
        zotsae = '\x20';default:
        if ('\x20' >= zotsae) switch (vg4f) {case zmq3i7n:
            lnfv6['setTagName'](vnfl76['slice'](u52, xsa91h)), vg4f = zkrb;break;case zivf:
            z9aesx = vnfl76['slice'](u52, xsa91h), vg4f = z_5u8;break;case zpx1g9:
            var xahs9 = vnfl76['slice'](u52, xsa91h)['replace'](/&#?\w+;/g, mvin7l);wu2_r['warning']('attribute "' + xahs9 + '" missed quot(")!!'), lnfv6['add'](z9aesx, xahs9, u52);case zqj3m$:
            vg4f = zkrb;} else switch (vg4f) {case z_5u8:
            {
              lnfv6['tagName'];
            }'http://www.w3.org/1999/xhtml' === zoety[''] && z9aesx['match'](/^(?:disabled|checked|selected)$/i) || wu2_r['warning']('attribute "' + z9aesx + '" missed value!! "' + z9aesx + '" instead2!!'), lnfv6['add'](z9aesx, z9aesx, u52), u52 = xsa91h, vg4f = zivf;break;case zqj3m$:
            wu2_r['warning']('attribute space is required"' + z9aesx + '\x22!!');case zkrb:
            vg4f = zivf, u52 = xsa91h;break;case ztboyd:
            vg4f = zpx1g9, u52 = xsa91h;break;case zzxtea:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}xsa91h++;
  }
}function zp9xh1(g61ph, osaze, ae9xs) {
  for (var q7$3i = g61ph['tagName'], pshx19 = null, ybdko8 = g61ph['length']; ybdko8--;) {
    var w25_ru = g61ph[ybdko8],
        g6f4 = w25_ru['qName'],
        y8dkb = w25_ru['value'],
        gph164 = g6f4['indexOf'](':');if (gph164 > 0x0) var vn76l = w25_ru['prefix'] = g6f4['slice'](0x0, gph164),
        gv46lf = g6f4['slice'](gph164 + 0x1),
        g9p4h = 'xmlns' === vn76l && gv46lf;else gv46lf = g6f4, vn76l = null, g9p4h = 'xmlns' === g6f4 && '';w25_ru['localName'] = gv46lf, g9p4h !== !0x1 && (null == pshx19 && (pshx19 = {}, zxsze9a(ae9xs, ae9xs = {})), ae9xs[g9p4h] = pshx19[g9p4h] = y8dkb, w25_ru['uri'] = 'http://www.w3.org/2000/xmlns/', osaze['startPrefixMapping'](g9p4h, y8dkb));
  }for (var ybdko8 = g61ph['length']; ybdko8--;) {
    w25_ru = g61ph[ybdko8];var vn76l = w25_ru['prefix'];vn76l && ('xml' === vn76l && (w25_ru['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vn76l && (w25_ru['uri'] = ae9xs[vn76l || '']));
  }var gph164 = q7$3i['indexOf'](':');gph164 > 0x0 ? (vn76l = g61ph['prefix'] = q7$3i['slice'](0x0, gph164), gv46lf = g61ph['localName'] = q7$3i['slice'](gph164 + 0x1)) : (vn76l = null, gv46lf = g61ph['localName'] = q7$3i);var ji3qm$ = g61ph['uri'] = ae9xs[vn76l || ''];if (osaze['startElement'](ji3qm$, gv46lf, q7$3i, g61ph), !g61ph['closed']) return g61ph['currentNSMap'] = ae9xs, g61ph['localNSMap'] = pshx19, !0x0;if (osaze['endElement'](ji3qm$, gv46lf, q7$3i), pshx19) {
    for (vn76l in pshx19) osaze['endPrefixMapping'](vn76l);
  }
}function zu25r8_(todyez, ktbyd, yeztdo, se19ax, xas) {
  if (/^(?:script|textarea)$/i['test'](yeztdo)) {
    var g6hp1 = todyez['indexOf']('</' + yeztdo + '>', ktbyd),
        g1h49 = todyez['substring'](ktbyd + 0x1, g6hp1);if (/[&<]/['test'](g1h49)) return (/^script$/i['test'](yeztdo) ? (xas['characters'](g1h49, 0x0, g1h49['length']), g6hp1) : (g1h49 = g1h49['replace'](/&#?\w+;/g, se19ax), xas['characters'](g1h49, 0x0, g1h49['length']), g6hp1)
    );
  }return ktbyd + 0x1;
}function ztoye($37q, sztax, fln64v, nli3m7) {
  var r2_5wu = nli3m7[fln64v];return null == r2_5wu && (r2_5wu = $37q['lastIndexOf']('</' + fln64v + '>'), sztax > r2_5wu && (r2_5wu = $37q['lastIndexOf']('</' + fln64v)), nli3m7[fln64v] = r2_5wu), sztax > r2_5wu;
}function zxsze9a(exasz, g6p4) {
  for (var sp9h in exasz) g6p4[sp9h] = exasz[sp9h];
}function ztdobk(esaxz, brkd8, xps9, n6vf4) {
  var $iq73 = esaxz['charAt'](brkd8 + 0x2);switch ($iq73) {case '-':
      if ('-' === esaxz['charAt'](brkd8 + 0x3)) {
        var i$q = esaxz['indexOf']('-->', brkd8 + 0x4);return i$q > brkd8 ? (xps9['comment'](esaxz, brkd8 + 0x4, i$q - brkd8 - 0x4), i$q + 0x3) : (n6vf4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == esaxz['substr'](brkd8 + 0x3, 0x6)) {
        var i$q = esaxz['indexOf'](']]>', brkd8 + 0x9);return xps9['startCDATA'](), xps9['characters'](esaxz, brkd8 + 0x9, i$q - brkd8 - 0x9), xps9['endCDATA'](), i$q + 0x3;
      }var $qi7 = zh94p1g(esaxz, brkd8),
          f6pv4g = $qi7['length'];if (f6pv4g > 0x1 && /!doctype/i['test']($qi7[0x0][0x0])) {
        var d8byr = $qi7[0x1][0x0],
            a1se9x = f6pv4g > 0x3 && /^public$/i['test']($qi7[0x2][0x0]) && $qi7[0x3][0x0],
            azsex = f6pv4g > 0x4 && $qi7[0x4][0x0],
            k8dr = $qi7[f6pv4g - 0x1];return xps9['startDTD'](d8byr, a1se9x && a1se9x['replace'](/^(['"])(.*?)\1$/, '$2'), azsex && azsex['replace'](/^(['"])(.*?)\1$/, '$2')), xps9['endDTD'](), k8dr['index'] + k8dr[0x0]['length'];
      }}return -0x1;
}function zozdeat(p1gxh9, dtaoez, sa19x) {
  var dbok8 = p1gxh9['indexOf']('?>', dtaoez);if (dbok8) {
    var kr8_by = p1gxh9['substring'](dtaoez, dbok8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (kr8_by) {
      {
        kr8_by[0x0]['length'];
      }return sa19x['processingInstruction'](kr8_by[0x1], kr8_by[0x2]), dbok8 + 0x2;
    }return -0x1;
  }return -0x1;
}function zxe19a() {}function ztezod(zaxes, ykozd) {
  return zaxes['__proto__'] = ykozd, zaxes;
}function zh94p1g(ru5w, y8dr) {
  var ybdk,
      m37in = [],
      v4n6 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (v4n6['lastIndex'] = y8dr, v4n6['exec'](ru5w); ybdk = v4n6['exec'](ru5w);) if (m37in['push'](ybdk), ybdk[0x1]) return m37in;
}var zy8rk = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zx1sh9 = new RegExp('[\\-\\.0-9' + zy8rk['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zq7m$i3 = new RegExp('^' + zy8rk['source'] + zx1sh9['source'] + '*(?::' + zy8rk['source'] + zx1sh9['source'] + '*)?$'),
    zmq3i7n = 0x0,
    zivf = 0x1,
    z_5u8 = 0x2,
    ztboyd = 0x3,
    zpx1g9 = 0x4,
    zqj3m$ = 0x5,
    zkrb = 0x6,
    zzxtea = 0x7;zgh9px['prototype'] = { 'parse': function (edztoy, asxh, b8r_k5) {
    var mi37q = this['domBuilder'];mi37q['startDocument'](), zxsze9a(asxh, asxh = {}), zoydt(edztoy, asxh, b8r_k5, mi37q, this['errorHandler']), mi37q['endDocument']();
  } }, zxe19a['prototype'] = { 'setTagName': function (kob8y) {
    if (!zq7m$i3['test'](kob8y)) throw new Error('invalid tagName:' + kob8y);this['tagName'] = kob8y;
  }, 'add': function (k85_br, v4l6g, s9xa1h) {
    if (!zq7m$i3['test'](k85_br)) throw new Error('invalid attribute:' + k85_br);this[this['length']++] = { 'qName': k85_br, 'value': v4l6g, 'offset': s9xa1h };
  }, 'length': 0x0, 'getLocalName': function (bydko8) {
    return this[bydko8]['localName'];
  }, 'getLocator': function (eszoa) {
    return this[eszoa]['locator'];
  }, 'getQName': function (vminl) {
    return this[vminl]['qName'];
  }, 'getURI': function (sezax9) {
    return this[sezax9]['uri'];
  }, 'getValue': function (fn7vil) {
    return this[fn7vil]['value'];
  } }, ztezod({}, ztezod['prototype']) instanceof ztezod || (ztezod = function (pgfh, iqm37n) {
  function w_u2() {}w_u2['prototype'] = iqm37n, w_u2 = new w_u2();for (iqm37n in pgfh) w_u2[iqm37n] = pgfh[iqm37n];return w_u2;
}), exports['XMLReader'] = zgh9px;