var v = wx.$d;
function zpma06v() {}function ztz5r1(uzkrt, pva6m, f$5_, ig0b, mva6j) {
  function trkuyz(yuktr) {
    if (yuktr > 0xffff) {
      yuktr -= 0x10000;var yutkh = 0xd800 + (yuktr >> 0xa),
          ba0nge = 0xdc00 + (0x3ff & yuktr);return String['fromCharCode'](yutkh, ba0nge);
    }return String['fromCharCode'](yuktr);
  }function kruzy(gei0b) {
    var lrku = gei0b['slice'](0x1, -0x1);return lrku in f$5_ ? f$5_[lrku] : '#' === lrku['charAt'](0x0) ? trkuyz(parseInt(lrku['substr'](0x1)['replace']('x', '0x'))) : (mva6j['error']('entity not found:' + gei0b), gei0b);
  }function oqc8w(rytz5) {
    if (rytz5 > xmj6vp) {
      var ytr = uzkrt['substring'](xmj6vp, rytz5)['replace'](/&#?\w+;/g, kruzy);bieng && uylrk(xmj6vp), ig0b['characters'](ytr, 0x0, rytz5 - xmj6vp), xmj6vp = rytz5;
    }
  }function uylrk(htlkuy, d348c2) {
    for (; htlkuy >= nagbp && (d348c2 = l3ukyh['exec'](uzkrt));) mnab = d348c2['index'], nagbp = mnab + d348c2[0x0]['length'], bieng['lineNumber']++;bieng['columnNumber'] = htlkuy - mnab + 0x1;
  }for (var mnab = 0x0, nagbp = 0x0, l3ukyh = /.*(?:\r\n?|\n)|.*$/g, bieng = ig0b['locator'], apvm06 = [{ 'currentNSMap': pva6m }], lkuhyt = {}, xmj6vp = 0x0;;) {
    try {
      var e0ign = uzkrt['indexOf']('<', xmj6vp);if (0x0 > e0ign) {
        if (!uzkrt['substr'](xmj6vp)['match'](/^\s*$/)) {
          var np0abg = ig0b['doc'],
              ft5 = np0abg['createTextNode'](uzkrt['substr'](xmj6vp));np0abg['appendChild'](ft5), ig0b['currentElement'] = ft5;
        }return;
      }switch (e0ign > xmj6vp && oqc8w(e0ign), uzkrt['charAt'](e0ign + 0x1)) {case '/':
          var trykzu = uzkrt['indexOf']('>', e0ign + 0x3),
              rz1kt = uzkrt['substring'](e0ign + 0x2, trykzu),
              ba0eg = apvm06['pop']();0x0 > trykzu ? (rz1kt = uzkrt['substring'](e0ign + 0x2)['replace'](/[\s<].*/, ''), mva6j['error']('end tag name: ' + rz1kt + ' is not complete:' + ba0eg['tagName']), trykzu = e0ign + 0x1 + rz1kt['length']) : rz1kt['match'](/\s</) && (rz1kt = rz1kt['replace'](/[\s<].*/, ''), mva6j['error']('end tag name: ' + rz1kt + ' maybe not complete'), trykzu = e0ign + 0x1 + rz1kt['length']);var ktyhlu = ba0eg['localNSMap'],
              co82w = ba0eg['tagName'] == rz1kt,
              d4l8 = co82w || ba0eg['tagName'] && ba0eg['tagName']['toLowerCase']() == rz1kt['toLowerCase']();if (d4l8) {
            if (ig0b['endElement'](ba0eg['uri'], ba0eg['localName'], rz1kt), ktyhlu) {
              for (var z5yt1r in ktyhlu) ig0b['endPrefixMapping'](z5yt1r);
            }co82w || mva6j['fatalError']('end tag name: ' + rz1kt + ' is not match the current start tagName:' + ba0eg['tagName']);
          } else apvm06['push'](ba0eg);trykzu++;break;case '?':
          bieng && uylrk(e0ign), trykzu = zxvjm(uzkrt, e0ign, ig0b);break;case '!':
          bieng && uylrk(e0ign), trykzu = zm0va6(uzkrt, e0ign, ig0b, mva6j);break;default:
          bieng && uylrk(e0ign);var _x79 = new zpv6mja(),
              $j97x_ = apvm06[apvm06['length'] - 0x1]['currentNSMap'],
              trykzu = zngapb(uzkrt, e0ign, _x79, $j97x_, kruzy, mva6j),
              hkul = _x79['length'];if (!_x79['closed'] && zv$jx97(uzkrt, trykzu, _x79['tagName'], lkuhyt) && (_x79['closed'] = !0x0, f$5_['nbsp'] || mva6j['warning']('unclosed xml attribute')), bieng && hkul) {
            for (var xmvpj = zt15zfr(bieng, {}), wo8qc2 = 0x0; hkul > wo8qc2; wo8qc2++) {
              var zrf15 = _x79[wo8qc2];uylrk(zrf15['offset']), zrf15['locator'] = zt15zfr(bieng, {});
            }ig0b['locator'] = xmvpj, zdc82o(_x79, ig0b, $j97x_) && apvm06['push'](_x79), ig0b['locator'] = bieng;
          } else zdc82o(_x79, ig0b, $j97x_) && apvm06['push'](_x79);'http://www.w3.org/1999/xhtml' !== _x79['uri'] || _x79['closed'] ? trykzu++ : trykzu = zamjp6v(uzkrt, trykzu, _x79['tagName'], kruzy, ig0b);}
    } catch (_59f$) {
      mva6j['error']('element parse error: ' + _59f$), trykzu = -0x1;
    }trykzu > xmj6vp ? xmj6vp = trykzu : oqc8w(Math['max'](e0ign, xmj6vp) + 0x1);
  }
}function zt15zfr(bpag, f_$x) {
  return f_$x['lineNumber'] = bpag['lineNumber'], f_$x['columnNumber'] = bpag['columnNumber'], f_$x;
}function zngapb(u3lhk4, b0ae, vx6j$9, f$75_9, x69vj, vx6j) {
  for (var pga0n, wcq2o8, $97x_f = ++b0ae, rfzt = zm6v0p;;) {
    var zyk = u3lhk4['charAt']($97x_f);switch (zyk) {case '=':
        if (rfzt === zu3ly) pga0n = u3lhk4['slice'](b0ae, $97x_f), rfzt = zf_9$7x;else {
          if (rfzt !== zam) throw new Error('attribute equal must after attrName');rfzt = zf_9$7x;
        }break;case '\x27':case '\x22':
        if (rfzt === zf_9$7x || rfzt === zu3ly) {
          if (rfzt === zu3ly && (vx6j['warning']('attribute value must after "="'), pga0n = u3lhk4['slice'](b0ae, $97x_f)), b0ae = $97x_f + 0x1, $97x_f = u3lhk4['indexOf'](zyk, b0ae), !($97x_f > 0x0)) throw new Error('attribute value no end \'' + zyk + '\' match');wcq2o8 = u3lhk4['slice'](b0ae, $97x_f)['replace'](/&#?\w+;/g, x69vj), vx6j$9['add'](pga0n, wcq2o8, b0ae - 0x1), rfzt = znba0eg;
        } else {
          if (rfzt != zjam) throw new Error('attribute value must after "="');wcq2o8 = u3lhk4['slice'](b0ae, $97x_f)['replace'](/&#?\w+;/g, x69vj), vx6j$9['add'](pga0n, wcq2o8, b0ae), vx6j['warning']('attribute "' + pga0n + '" missed start quot(' + zyk + ')!!'), b0ae = $97x_f + 0x1, rfzt = znba0eg;
        }break;case '/':
        switch (rfzt) {case zm6v0p:
            vx6j$9['setTagName'](u3lhk4['slice'](b0ae, $97x_f));case znba0eg:case zz1f5_:case za06vm:
            rfzt = za06vm, vx6j$9['closed'] = !0x0;case zjam:case zu3ly:case zam:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return vx6j['error']('unexpected end of input'), rfzt == zm6v0p && vx6j$9['setTagName'](u3lhk4['slice'](b0ae, $97x_f)), $97x_f;case '>':
        switch (rfzt) {case zm6v0p:
            vx6j$9['setTagName'](u3lhk4['slice'](b0ae, $97x_f));case znba0eg:case zz1f5_:case za06vm:
            break;case zjam:case zu3ly:
            wcq2o8 = u3lhk4['slice'](b0ae, $97x_f), '/' === wcq2o8['slice'](-0x1) && (vx6j$9['closed'] = !0x0, wcq2o8 = wcq2o8['slice'](0x0, -0x1));case zam:
            rfzt === zam && (wcq2o8 = pga0n), rfzt == zjam ? (vx6j['warning']('attribute "' + wcq2o8 + '" missed quot(")!!'), vx6j$9['add'](pga0n, wcq2o8['replace'](/&#?\w+;/g, x69vj), b0ae)) : ('http://www.w3.org/1999/xhtml' === f$75_9[''] && wcq2o8['match'](/^(?:disabled|checked|selected)$/i) || vx6j['warning']('attribute "' + wcq2o8 + '" missed value!! "' + wcq2o8 + '" instead!!'), vx6j$9['add'](wcq2o8, wcq2o8, b0ae));break;case zf_9$7x:
            throw new Error('attribute value missed!!');}return $97x_f;case '\u0080':
        zyk = '\x20';default:
        if ('\x20' >= zyk) switch (rfzt) {case zm6v0p:
            vx6j$9['setTagName'](u3lhk4['slice'](b0ae, $97x_f)), rfzt = zz1f5_;break;case zu3ly:
            pga0n = u3lhk4['slice'](b0ae, $97x_f), rfzt = zam;break;case zjam:
            var wcq2o8 = u3lhk4['slice'](b0ae, $97x_f)['replace'](/&#?\w+;/g, x69vj);vx6j['warning']('attribute "' + wcq2o8 + '" missed quot(")!!'), vx6j$9['add'](pga0n, wcq2o8, b0ae);case znba0eg:
            rfzt = zz1f5_;} else switch (rfzt) {case zam:
            {
              vx6j$9['tagName'];
            }'http://www.w3.org/1999/xhtml' === f$75_9[''] && pga0n['match'](/^(?:disabled|checked|selected)$/i) || vx6j['warning']('attribute "' + pga0n + '" missed value!! "' + pga0n + '" instead2!!'), vx6j$9['add'](pga0n, pga0n, b0ae), b0ae = $97x_f, rfzt = zu3ly;break;case znba0eg:
            vx6j['warning']('attribute space is required"' + pga0n + '\x22!!');case zz1f5_:
            rfzt = zu3ly, b0ae = $97x_f;break;case zf_9$7x:
            rfzt = zjam, b0ae = $97x_f;break;case za06vm:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$97x_f++;
  }
}function zdc82o(z1try, uhl4, u3yl) {
  for (var rf_ = z1try['tagName'], do2 = null, j6vm = z1try['length']; j6vm--;) {
    var m6apj = z1try[j6vm],
        ba0gpn = m6apj['qName'],
        l4ku3h = m6apj['value'],
        fx_$79 = ba0gpn['indexOf'](':');if (fx_$79 > 0x0) var mp6a0n = m6apj['prefix'] = ba0gpn['slice'](0x0, fx_$79),
        gn0bae = ba0gpn['slice'](fx_$79 + 0x1),
        l4u3dh = 'xmlns' === mp6a0n && gn0bae;else gn0bae = ba0gpn, mp6a0n = null, l4u3dh = 'xmlns' === ba0gpn && '';m6apj['localName'] = gn0bae, l4u3dh !== !0x1 && (null == do2 && (do2 = {}, zei0ngb(u3yl, u3yl = {})), u3yl[l4u3dh] = do2[l4u3dh] = l4ku3h, m6apj['uri'] = 'http://www.w3.org/2000/xmlns/', uhl4['startPrefixMapping'](l4u3dh, l4ku3h));
  }for (var j6vm = z1try['length']; j6vm--;) {
    m6apj = z1try[j6vm];var mp6a0n = m6apj['prefix'];mp6a0n && ('xml' === mp6a0n && (m6apj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mp6a0n && (m6apj['uri'] = u3yl[mp6a0n || '']));
  }var fx_$79 = rf_['indexOf'](':');fx_$79 > 0x0 ? (mp6a0n = z1try['prefix'] = rf_['slice'](0x0, fx_$79), gn0bae = z1try['localName'] = rf_['slice'](fx_$79 + 0x1)) : (mp6a0n = null, gn0bae = z1try['localName'] = rf_);var dc248 = z1try['uri'] = u3yl[mp6a0n || ''];if (uhl4['startElement'](dc248, gn0bae, rf_, z1try), !z1try['closed']) return z1try['currentNSMap'] = u3yl, z1try['localNSMap'] = do2, !0x0;if (uhl4['endElement'](dc248, gn0bae, rf_), do2) {
    for (mp6a0n in do2) uhl4['endPrefixMapping'](mp6a0n);
  }
}function zamjp6v(vj79x, rkytuz, mpvxj6, dcq248, j97$_) {
  if (/^(?:script|textarea)$/i['test'](mpvxj6)) {
    var hk3u4l = vj79x['indexOf']('</' + mpvxj6 + '>', rkytuz),
        gbe0in = vj79x['substring'](rkytuz + 0x1, hk3u4l);if (/[&<]/['test'](gbe0in)) return (/^script$/i['test'](mpvxj6) ? (j97$_['characters'](gbe0in, 0x0, gbe0in['length']), hk3u4l) : (gbe0in = gbe0in['replace'](/&#?\w+;/g, dcq248), j97$_['characters'](gbe0in, 0x0, gbe0in['length']), hk3u4l)
    );
  }return rkytuz + 0x1;
}function zv$jx97(kuztry, d4ulh, x7v$j9, xf_79) {
  var av6mp0 = xf_79[x7v$j9];return null == av6mp0 && (av6mp0 = kuztry['lastIndexOf']('</' + x7v$j9 + '>'), d4ulh > av6mp0 && (av6mp0 = kuztry['lastIndexOf']('</' + x7v$j9)), xf_79[x7v$j9] = av6mp0), d4ulh > av6mp0;
}function zei0ngb(v60, khuytl) {
  for (var _rzf1 in v60) khuytl[_rzf1] = v60[_rzf1];
}function zm0va6(v7x9j, yrklut, ytuhlk, huy3l) {
  var yuht = v7x9j['charAt'](yrklut + 0x2);switch (yuht) {case '-':
      if ('-' === v7x9j['charAt'](yrklut + 0x3)) {
        var px6jm = v7x9j['indexOf']('-->', yrklut + 0x4);return px6jm > yrklut ? (ytuhlk['comment'](v7x9j, yrklut + 0x4, px6jm - yrklut - 0x4), px6jm + 0x3) : (huy3l['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == v7x9j['substr'](yrklut + 0x3, 0x6)) {
        var px6jm = v7x9j['indexOf'](']]>', yrklut + 0x9);return ytuhlk['startCDATA'](), ytuhlk['characters'](v7x9j, yrklut + 0x9, px6jm - yrklut - 0x9), ytuhlk['endCDATA'](), px6jm + 0x3;
      }var dc8o = ztrylku(v7x9j, yrklut),
          b0gean = dc8o['length'];if (b0gean > 0x1 && /!doctype/i['test'](dc8o[0x0][0x0])) {
        var mp0bna = dc8o[0x1][0x0],
            lyruk = b0gean > 0x3 && /^public$/i['test'](dc8o[0x2][0x0]) && dc8o[0x3][0x0],
            $j9x7v = b0gean > 0x4 && dc8o[0x4][0x0],
            z1_r5f = dc8o[b0gean - 0x1];return ytuhlk['startDTD'](mp0bna, lyruk && lyruk['replace'](/^(['"])(.*?)\1$/, '$2'), $j9x7v && $j9x7v['replace'](/^(['"])(.*?)\1$/, '$2')), ytuhlk['endDTD'](), z1_r5f['index'] + z1_r5f[0x0]['length'];
      }}return -0x1;
}function zxvjm(yklu3h, amvjp6, bgine0) {
  var b0gi = yklu3h['indexOf']('?>', amvjp6);if (b0gi) {
    var j9x$_7 = yklu3h['substring'](amvjp6, b0gi)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (j9x$_7) {
      {
        j9x$_7[0x0]['length'];
      }return bgine0['processingInstruction'](j9x$_7[0x1], j9x$_7[0x2]), b0gi + 0x2;
    }return -0x1;
  }return -0x1;
}function zpv6mja() {}function ze0b($xjv6m, xv7j$) {
  return $xjv6m['__proto__'] = xv7j$, $xjv6m;
}function ztrylku(_xf7$9, rfz1_5) {
  var zty1r,
      kythul = [],
      lyk3u = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (lyk3u['lastIndex'] = rfz1_5, lyk3u['exec'](_xf7$9); zty1r = lyk3u['exec'](_xf7$9);) if (kythul['push'](zty1r), zty1r[0x1]) return kythul;
}var z$9fx7_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zrz51t = new RegExp('[\\-\\.0-9' + z$9fx7_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    z_j9$x7 = new RegExp('^' + z$9fx7_['source'] + zrz51t['source'] + '*(?::' + z$9fx7_['source'] + zrz51t['source'] + '*)?$'),
    zm6v0p = 0x0,
    zu3ly = 0x1,
    zam = 0x2,
    zf_9$7x = 0x3,
    zjam = 0x4,
    znba0eg = 0x5,
    zz1f5_ = 0x6,
    za06vm = 0x7;zpma06v['prototype'] = { 'parse': function (ulyrt, x_9j, yztkur) {
    var gan0e = this['domBuilder'];gan0e['startDocument'](), zei0ngb(x_9j, x_9j = {}), ztz5r1(ulyrt, x_9j, yztkur, gan0e, this['errorHandler']), gan0e['endDocument']();
  } }, zpv6mja['prototype'] = { 'setTagName': function (_z5fr1) {
    if (!z_j9$x7['test'](_z5fr1)) throw new Error('invalid tagName:' + _z5fr1);this['tagName'] = _z5fr1;
  }, 'add': function (v$6xjm, h4ldu, egbi0n) {
    if (!z_j9$x7['test'](v$6xjm)) throw new Error('invalid attribute:' + v$6xjm);this[this['length']++] = { 'qName': v$6xjm, 'value': h4ldu, 'offset': egbi0n };
  }, 'length': 0x0, 'getLocalName': function (pjvmx6) {
    return this[pjvmx6]['localName'];
  }, 'getLocator': function (jpma6v) {
    return this[jpma6v]['locator'];
  }, 'getQName': function (mna0p6) {
    return this[mna0p6]['qName'];
  }, 'getURI': function (na0pbm) {
    return this[na0pbm]['uri'];
  }, 'getValue': function (cd8432) {
    return this[cd8432]['value'];
  } }, ze0b({}, ze0b['prototype']) instanceof ze0b || (ze0b = function (wc8q, ktyzru) {
  function z5ty1() {}z5ty1['prototype'] = ktyzru, z5ty1 = new z5ty1();for (ktyzru in wc8q) z5ty1[ktyzru] = wc8q[ktyzru];return z5ty1;
}), exports['XMLReader'] = zpma06v;