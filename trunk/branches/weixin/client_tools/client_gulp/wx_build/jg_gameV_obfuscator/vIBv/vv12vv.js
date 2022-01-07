var Q = wx.$v;
function vm7dc() {}function vh12_tn(osi$f, if$o4s, on$s3, pgw5x, son$34) {
  function wueb(mcja0d) {
    if (mcja0d > 0xffff) {
      mcja0d -= 0x10000;var s34 = 0xd800 + (mcja0d >> 0xa),
          hyz_ = 0xdc00 + (0x3ff & mcja0d);return String['fromCharCode'](s34, hyz_);
    }return String['fromCharCode'](mcja0d);
  }function nt123(r9f$i) {
    var xg75p = r9f$i['slice'](0x1, -0x1);return xg75p in on$s3 ? on$s3[xg75p] : '#' === xg75p['charAt'](0x0) ? wueb(parseInt(xg75p['substr'](0x1)['replace']('x', '0x'))) : (son$34['error']('entity not found:' + r9f$i), r9f$i);
  }function l16hzy(t1h2_n) {
    if (t1h2_n > k7cmd0) {
      var _h621y = osi$f['substring'](k7cmd0, t1h2_n)['replace'](/&#?\w+;/g, nt123);uy8zl6 && egqb8(k7cmd0), pgw5x['characters'](_h621y, 0x0, t1h2_n - k7cmd0), k7cmd0 = t1h2_n;
    }
  }function egqb8(qeuw8, _42tn) {
    for (; qeuw8 >= pwg5x && (_42tn = vgx5pw['exec'](osi$f));) c07dm = _42tn['index'], pwg5x = c07dm + _42tn[0x0]['length'], uy8zl6['lineNumber']++;uy8zl6['columnNumber'] = qeuw8 - c07dm + 0x1;
  }for (var c07dm = 0x0, pwg5x = 0x0, vgx5pw = /.*(?:\r\n?|\n)|.*$/g, uy8zl6 = pgw5x['locator'], o34sn$ = [{ 'currentNSMap': if$o4s }], gxpvqw = {}, k7cmd0 = 0x0;;) {
    try {
      var lz8ub6 = osi$f['indexOf']('<', k7cmd0);if (0x0 > lz8ub6) {
        if (!osi$f['substr'](k7cmd0)['match'](/^\s*$/)) {
          var qxgewp = pgw5x['doc'],
              e8lubz = qxgewp['createTextNode'](osi$f['substr'](k7cmd0));qxgewp['appendChild'](e8lubz), pgw5x['currentElement'] = e8lubz;
        }return;
      }switch (lz8ub6 > k7cmd0 && l16hzy(lz8ub6), osi$f['charAt'](lz8ub6 + 0x1)) {case '/':
          var if$9o = osi$f['indexOf']('>', lz8ub6 + 0x3),
              $si9o = osi$f['substring'](lz8ub6 + 0x2, if$9o),
              km0cd7 = o34sn$['pop']();0x0 > if$9o ? ($si9o = osi$f['substring'](lz8ub6 + 0x2)['replace'](/[\s<].*/, ''), son$34['error']('end tag name: ' + $si9o + ' is not complete:' + km0cd7['tagName']), if$9o = lz8ub6 + 0x1 + $si9o['length']) : $si9o['match'](/\s</) && ($si9o = $si9o['replace'](/[\s<].*/, ''), son$34['error']('end tag name: ' + $si9o + ' maybe not complete'), if$9o = lz8ub6 + 0x1 + $si9o['length']);var y6luz8 = km0cd7['localNSMap'],
              zh_ = km0cd7['tagName'] == $si9o,
              n_h = zh_ || km0cd7['tagName'] && km0cd7['tagName']['toLowerCase']() == $si9o['toLowerCase']();if (n_h) {
            if (pgw5x['endElement'](km0cd7['uri'], km0cd7['localName'], $si9o), y6luz8) {
              for (var wq8g in y6luz8) pgw5x['endPrefixMapping'](wq8g);
            }zh_ || son$34['fatalError']('end tag name: ' + $si9o + ' is not match the current start tagName:' + km0cd7['tagName']);
          } else o34sn$['push'](km0cd7);if$9o++;break;case '?':
          uy8zl6 && egqb8(lz8ub6), if$9o = vkcm50(osi$f, lz8ub6, pgw5x);break;case '!':
          uy8zl6 && egqb8(lz8ub6), if$9o = ve8bulq(osi$f, lz8ub6, pgw5x, son$34);break;default:
          uy8zl6 && egqb8(lz8ub6);var yh1_t = new vylz16(),
              oif$9 = o34sn$[o34sn$['length'] - 0x1]['currentNSMap'],
              if$9o = vz61_yh(osi$f, lz8ub6, yh1_t, oif$9, nt123, son$34),
              gxweqp = yh1_t['length'];if (!yh1_t['closed'] && vh1yz6l(osi$f, if$9o, yh1_t['tagName'], gxpvqw) && (yh1_t['closed'] = !0x0, on$s3['nbsp'] || son$34['warning']('unclosed xml attribute')), uy8zl6 && gxweqp) {
            for (var s9$io = vkvp57(uy8zl6, {}), yh6z1l = 0x0; gxweqp > yh6z1l; yh6z1l++) {
              var hyu6zl = yh1_t[yh6z1l];egqb8(hyu6zl['offset']), hyu6zl['locator'] = vkvp57(uy8zl6, {});
            }pgw5x['locator'] = s9$io, vno43t(yh1_t, pgw5x, oif$9) && o34sn$['push'](yh1_t), pgw5x['locator'] = uy8zl6;
          } else vno43t(yh1_t, pgw5x, oif$9) && o34sn$['push'](yh1_t);'http://www.w3.org/1999/xhtml' !== yh1_t['uri'] || yh1_t['closed'] ? if$9o++ : if$9o = vn12(osi$f, if$9o, yh1_t['tagName'], nt123, pgw5x);}
    } catch (lu6z8y) {
      son$34['error']('element parse error: ' + lu6z8y), if$9o = -0x1;
    }if$9o > k7cmd0 ? k7cmd0 = if$9o : l16hzy(Math['max'](lz8ub6, k7cmd0) + 0x1);
  }
}function vkvp57(ck07v, n4o2) {
  return n4o2['lineNumber'] = ck07v['lineNumber'], n4o2['columnNumber'] = ck07v['columnNumber'], n4o2;
}function vz61_yh(xpqeg, zl68bu, cvk570, bexgqw, _21h, l6yh) {
  for (var l8ub6z, bulq8, j0cmda = ++zl68bu, hzu = vi$f9;;) {
    var beu8ql = xpqeg['charAt'](j0cmda);switch (beu8ql) {case '=':
        if (hzu === vvqxpgw) l8ub6z = xpqeg['slice'](zl68bu, j0cmda), hzu = vz1ly6;else {
          if (hzu !== vxv7g) throw new Error('attribute equal must after attrName');hzu = vz1ly6;
        }break;case '\x27':case '\x22':
        if (hzu === vz1ly6 || hzu === vvqxpgw) {
          if (hzu === vvqxpgw && (l6yh['warning']('attribute value must after "="'), l8ub6z = xpqeg['slice'](zl68bu, j0cmda)), zl68bu = j0cmda + 0x1, j0cmda = xpqeg['indexOf'](beu8ql, zl68bu), !(j0cmda > 0x0)) throw new Error('attribute value no end \'' + beu8ql + '\' match');bulq8 = xpqeg['slice'](zl68bu, j0cmda)['replace'](/&#?\w+;/g, _21h), cvk570['add'](l8ub6z, bulq8, zl68bu - 0x1), hzu = vh6y_2;
        } else {
          if (hzu != vf$9sri) throw new Error('attribute value must after "="');bulq8 = xpqeg['slice'](zl68bu, j0cmda)['replace'](/&#?\w+;/g, _21h), cvk570['add'](l8ub6z, bulq8, zl68bu), l6yh['warning']('attribute "' + l8ub6z + '" missed start quot(' + beu8ql + ')!!'), zl68bu = j0cmda + 0x1, hzu = vh6y_2;
        }break;case '/':
        switch (hzu) {case vi$f9:
            cvk570['setTagName'](xpqeg['slice'](zl68bu, j0cmda));case vh6y_2:case v$3o4:case vyh_12t:
            hzu = vyh_12t, cvk570['closed'] = !0x0;case vf$9sri:case vvqxpgw:case vxv7g:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return l6yh['error']('unexpected end of input'), hzu == vi$f9 && cvk570['setTagName'](xpqeg['slice'](zl68bu, j0cmda)), j0cmda;case '>':
        switch (hzu) {case vi$f9:
            cvk570['setTagName'](xpqeg['slice'](zl68bu, j0cmda));case vh6y_2:case v$3o4:case vyh_12t:
            break;case vf$9sri:case vvqxpgw:
            bulq8 = xpqeg['slice'](zl68bu, j0cmda), '/' === bulq8['slice'](-0x1) && (cvk570['closed'] = !0x0, bulq8 = bulq8['slice'](0x0, -0x1));case vxv7g:
            hzu === vxv7g && (bulq8 = l8ub6z), hzu == vf$9sri ? (l6yh['warning']('attribute "' + bulq8 + '" missed quot(")!!'), cvk570['add'](l8ub6z, bulq8['replace'](/&#?\w+;/g, _21h), zl68bu)) : ('http://www.w3.org/1999/xhtml' === bexgqw[''] && bulq8['match'](/^(?:disabled|checked|selected)$/i) || l6yh['warning']('attribute "' + bulq8 + '" missed value!! "' + bulq8 + '" instead!!'), cvk570['add'](bulq8, bulq8, zl68bu));break;case vz1ly6:
            throw new Error('attribute value missed!!');}return j0cmda;case '\u0080':
        beu8ql = '\x20';default:
        if ('\x20' >= beu8ql) switch (hzu) {case vi$f9:
            cvk570['setTagName'](xpqeg['slice'](zl68bu, j0cmda)), hzu = v$3o4;break;case vvqxpgw:
            l8ub6z = xpqeg['slice'](zl68bu, j0cmda), hzu = vxv7g;break;case vf$9sri:
            var bulq8 = xpqeg['slice'](zl68bu, j0cmda)['replace'](/&#?\w+;/g, _21h);l6yh['warning']('attribute "' + bulq8 + '" missed quot(")!!'), cvk570['add'](l8ub6z, bulq8, zl68bu);case vh6y_2:
            hzu = v$3o4;} else switch (hzu) {case vxv7g:
            {
              cvk570['tagName'];
            }'http://www.w3.org/1999/xhtml' === bexgqw[''] && l8ub6z['match'](/^(?:disabled|checked|selected)$/i) || l6yh['warning']('attribute "' + l8ub6z + '" missed value!! "' + l8ub6z + '" instead2!!'), cvk570['add'](l8ub6z, l8ub6z, zl68bu), zl68bu = j0cmda, hzu = vvqxpgw;break;case vh6y_2:
            l6yh['warning']('attribute space is required"' + l8ub6z + '\x22!!');case v$3o4:
            hzu = vvqxpgw, zl68bu = j0cmda;break;case vz1ly6:
            hzu = vf$9sri, zl68bu = j0cmda;break;case vyh_12t:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}j0cmda++;
  }
}function vno43t(wpvxg, uze8, k7dc0m) {
  for (var _2h1ty = wpvxg['tagName'], v7xgp = null, u86ylz = wpvxg['length']; u86ylz--;) {
    var uhlz6y = wpvxg[u86ylz],
        yl68uz = uhlz6y['qName'],
        uhyz6 = uhlz6y['value'],
        fi9rs$ = yl68uz['indexOf'](':');if (fi9rs$ > 0x0) var lzhy16 = uhlz6y['prefix'] = yl68uz['slice'](0x0, fi9rs$),
        ylh6uz = yl68uz['slice'](fi9rs$ + 0x1),
        yu6z8 = 'xmlns' === lzhy16 && ylh6uz;else ylh6uz = yl68uz, lzhy16 = null, yu6z8 = 'xmlns' === yl68uz && '';uhlz6y['localName'] = ylh6uz, yu6z8 !== !0x1 && (null == v7xgp && (v7xgp = {}, vo$(k7dc0m, k7dc0m = {})), k7dc0m[yu6z8] = v7xgp[yu6z8] = uhyz6, uhlz6y['uri'] = 'http://www.w3.org/2000/xmlns/', uze8['startPrefixMapping'](yu6z8, uhyz6));
  }for (var u86ylz = wpvxg['length']; u86ylz--;) {
    uhlz6y = wpvxg[u86ylz];var lzhy16 = uhlz6y['prefix'];lzhy16 && ('xml' === lzhy16 && (uhlz6y['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lzhy16 && (uhlz6y['uri'] = k7dc0m[lzhy16 || '']));
  }var fi9rs$ = _2h1ty['indexOf'](':');fi9rs$ > 0x0 ? (lzhy16 = wpvxg['prefix'] = _2h1ty['slice'](0x0, fi9rs$), ylh6uz = wpvxg['localName'] = _2h1ty['slice'](fi9rs$ + 0x1)) : (lzhy16 = null, ylh6uz = wpvxg['localName'] = _2h1ty);var ubzl6 = wpvxg['uri'] = k7dc0m[lzhy16 || ''];if (uze8['startElement'](ubzl6, ylh6uz, _2h1ty, wpvxg), !wpvxg['closed']) return wpvxg['currentNSMap'] = k7dc0m, wpvxg['localNSMap'] = v7xgp, !0x0;if (uze8['endElement'](ubzl6, ylh6uz, _2h1ty), v7xgp) {
    for (lzhy16 in v7xgp) uze8['endPrefixMapping'](lzhy16);
  }
}function vn12(xp, hn_21t, nto342, ca0jmd, osi$) {
  if (/^(?:script|textarea)$/i['test'](nto342)) {
    var mk70dc = xp['indexOf']('</' + nto342 + '>', hn_21t),
        b6z8ul = xp['substring'](hn_21t + 0x1, mk70dc);if (/[&<]/['test'](b6z8ul)) return (/^script$/i['test'](nto342) ? (osi$['characters'](b6z8ul, 0x0, b6z8ul['length']), mk70dc) : (b6z8ul = b6z8ul['replace'](/&#?\w+;/g, ca0jmd), osi$['characters'](b6z8ul, 0x0, b6z8ul['length']), mk70dc)
    );
  }return hn_21t + 0x1;
}function vh1yz6l(epxqwg, bule8, fr9i$s, isf9r$) {
  var qvpwgx = isf9r$[fr9i$s];return null == qvpwgx && (qvpwgx = epxqwg['lastIndexOf']('</' + fr9i$s + '>'), bule8 > qvpwgx && (qvpwgx = epxqwg['lastIndexOf']('</' + fr9i$s)), isf9r$[fr9i$s] = qvpwgx), bule8 > qvpwgx;
}function vo$(foi4$s, eqgbw8) {
  for (var zl1y6h in foi4$s) eqgbw8[zl1y6h] = foi4$s[zl1y6h];
}function ve8bulq(yht, kc70d, _6yhz, w8euq) {
  var ulb68z = yht['charAt'](kc70d + 0x2);switch (ulb68z) {case '-':
      if ('-' === yht['charAt'](kc70d + 0x3)) {
        var y_21t = yht['indexOf']('-->', kc70d + 0x4);return y_21t > kc70d ? (_6yhz['comment'](yht, kc70d + 0x4, y_21t - kc70d - 0x4), y_21t + 0x3) : (w8euq['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == yht['substr'](kc70d + 0x3, 0x6)) {
        var y_21t = yht['indexOf'](']]>', kc70d + 0x9);return _6yhz['startCDATA'](), _6yhz['characters'](yht, kc70d + 0x9, y_21t - kc70d - 0x9), _6yhz['endCDATA'](), y_21t + 0x3;
      }var xqpvwg = vhu6lz(yht, kc70d),
          zyl16h = xqpvwg['length'];if (zyl16h > 0x1 && /!doctype/i['test'](xqpvwg[0x0][0x0])) {
        var lb8zeu = xqpvwg[0x1][0x0],
            c7vk = zyl16h > 0x3 && /^public$/i['test'](xqpvwg[0x2][0x0]) && xqpvwg[0x3][0x0],
            t1n2h = zyl16h > 0x4 && xqpvwg[0x4][0x0],
            n324ot = xqpvwg[zyl16h - 0x1];return _6yhz['startDTD'](lb8zeu, c7vk && c7vk['replace'](/^(['"])(.*?)\1$/, '$2'), t1n2h && t1n2h['replace'](/^(['"])(.*?)\1$/, '$2')), _6yhz['endDTD'](), n324ot['index'] + n324ot[0x0]['length'];
      }}return -0x1;
}function vkcm50(sf$oi4, n_t432, o4t3) {
  var bl86zu = sf$oi4['indexOf']('?>', n_t432);if (bl86zu) {
    var j0mkc = sf$oi4['substring'](n_t432, bl86zu)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (j0mkc) {
      {
        j0mkc[0x0]['length'];
      }return o4t3['processingInstruction'](j0mkc[0x1], j0mkc[0x2]), bl86zu + 0x2;
    }return -0x1;
  }return -0x1;
}function vylz16() {}function vz6l8u(gpx5, n2_ht) {
  return gpx5['__proto__'] = n2_ht, gpx5;
}function vhu6lz(z_16, ck50m7) {
  var f9i$os,
      pgv57 = [],
      kv57x = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kv57x['lastIndex'] = ck50m7, kv57x['exec'](z_16); f9i$os = kv57x['exec'](z_16);) if (pgv57['push'](f9i$os), f9i$os[0x1]) return pgv57;
}var vkc0v7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vmdk0 = new RegExp('[\\-\\.0-9' + vkc0v7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vvk75xp = new RegExp('^' + vkc0v7['source'] + vmdk0['source'] + '*(?::' + vkc0v7['source'] + vmdk0['source'] + '*)?$'),
    vi$f9 = 0x0,
    vvqxpgw = 0x1,
    vxv7g = 0x2,
    vz1ly6 = 0x3,
    vf$9sri = 0x4,
    vh6y_2 = 0x5,
    v$3o4 = 0x6,
    vyh_12t = 0x7;vm7dc['prototype'] = { 'parse': function (hn21_, belq8u, uq8bel) {
    var epqgx = this['domBuilder'];epqgx['startDocument'](), vo$(belq8u, belq8u = {}), vh12_tn(hn21_, belq8u, uq8bel, epqgx, this['errorHandler']), epqgx['endDocument']();
  } }, vylz16['prototype'] = { 'setTagName': function (_t432) {
    if (!vvk75xp['test'](_t432)) throw new Error('invalid tagName:' + _t432);this['tagName'] = _t432;
  }, 'add': function (rf9, z68lub, vwgx5p) {
    if (!vvk75xp['test'](rf9)) throw new Error('invalid attribute:' + rf9);this[this['length']++] = { 'qName': rf9, 'value': z68lub, 'offset': vwgx5p };
  }, 'length': 0x0, 'getLocalName': function (bgewq) {
    return this[bgewq]['localName'];
  }, 'getLocator': function (mk7cd) {
    return this[mk7cd]['locator'];
  }, 'getQName': function (h16y_) {
    return this[h16y_]['qName'];
  }, 'getURI': function (qbe8w) {
    return this[qbe8w]['uri'];
  }, 'getValue': function (pxw) {
    return this[pxw]['value'];
  } }, vz6l8u({}, vz6l8u['prototype']) instanceof vz6l8u || (vz6l8u = function (hzy6_, p7kv50) {
  function eq8ulb() {}eq8ulb['prototype'] = p7kv50, eq8ulb = new eq8ulb();for (p7kv50 in hzy6_) eq8ulb[p7kv50] = hzy6_[p7kv50];return eq8ulb;
}), exports['XMLReader'] = vm7dc;