var B = wx.$z;
function zaenqh() {}function zqjg(rijsuo, _qh0na, z93dw, wmnz0, mz0fw) {
  function t$y25(byui) {
    if (byui > 0xffff) {
      byui -= 0x10000;var aqmh0n = 0xd800 + (byui >> 0xa),
          z09w = 0xdc00 + (0x3ff & byui);return String['fromCharCode'](aqmh0n, z09w);
    }return String['fromCharCode'](byui);
  }function iosur7(sri7) {
    var d3wz9f = sri7['slice'](0x1, -0x1);return d3wz9f in z93dw ? z93dw[d3wz9f] : '#' === d3wz9f['charAt'](0x0) ? t$y25(parseInt(d3wz9f['substr'](0x1)['replace']('x', '0x'))) : (mz0fw['error']('entity not found:' + sri7), sri7);
  }function p6x31(x1kp84) {
    if (x1kp84 > mhn) {
      var aqh = rijsuo['substring'](mhn, x1kp84)['replace'](/&#?\w+;/g, iosur7);y5ib72 && n_hea(mhn), wmnz0['characters'](aqh, 0x0, x1kp84 - mhn), mhn = x1kp84;
    }
  }function n_hea(hmqw0, y$vt2l) {
    for (; hmqw0 >= qmnh0 && (y$vt2l = z93d['exec'](rijsuo));) vl2y$ = y$vt2l['index'], qmnh0 = vl2y$ + y$vt2l[0x0]['length'], y5ib72['lineNumber']++;y5ib72['columnNumber'] = hmqw0 - vl2y$ + 0x1;
  }for (var vl2y$ = 0x0, qmnh0 = 0x0, z93d = /.*(?:\r\n?|\n)|.*$/g, y5ib72 = wmnz0['locator'], b2ty75 = [{ 'currentNSMap': _qh0na }], wfd39z = {}, mhn = 0x0;;) {
    try {
      var hq0nw = rijsuo['indexOf']('<', mhn);if (0x0 > hq0nw) {
        if (!rijsuo['substr'](mhn)['match'](/^\s*$/)) {
          var rjeo = wmnz0['doc'],
              i25by = rjeo['createTextNode'](rijsuo['substr'](mhn));rjeo['appendChild'](i25by), wmnz0['currentElement'] = i25by;
        }return;
      }switch (hq0nw > mhn && p6x31(hq0nw), rijsuo['charAt'](hq0nw + 0x1)) {case '/':
          var mhan = rijsuo['indexOf']('>', hq0nw + 0x3),
              mh0wn = rijsuo['substring'](hq0nw + 0x2, mhan),
              df613 = b2ty75['pop']();0x0 > mhan ? (mh0wn = rijsuo['substring'](hq0nw + 0x2)['replace'](/[\s<].*/, ''), mz0fw['error']('end tag name: ' + mh0wn + ' is not complete:' + df613['tagName']), mhan = hq0nw + 0x1 + mh0wn['length']) : mh0wn['match'](/\s</) && (mh0wn = mh0wn['replace'](/[\s<].*/, ''), mz0fw['error']('end tag name: ' + mh0wn + ' maybe not complete'), mhan = hq0nw + 0x1 + mh0wn['length']);var iujso = df613['localNSMap'],
              x4k8p = df613['tagName'] == mh0wn,
              wh0 = x4k8p || df613['tagName'] && df613['tagName']['toLowerCase']() == mh0wn['toLowerCase']();if (wh0) {
            if (wmnz0['endElement'](df613['uri'], df613['localName'], mh0wn), iujso) {
              for (var zdwm9f in iujso) wmnz0['endPrefixMapping'](zdwm9f);
            }x4k8p || mz0fw['fatalError']('end tag name: ' + mh0wn + ' is not match the current start tagName:' + df613['tagName']);
          } else b2ty75['push'](df613);mhan++;break;case '?':
          y5ib72 && n_hea(hq0nw), mhan = zmznh0w(rijsuo, hq0nw, wmnz0);break;case '!':
          y5ib72 && n_hea(hq0nw), mhan = zb25yt$(rijsuo, hq0nw, wmnz0, mz0fw);break;default:
          y5ib72 && n_hea(hq0nw);var d1863x = new zrgjuo(),
              d618 = b2ty75[b2ty75['length'] - 0x1]['currentNSMap'],
              mhan = zsuboi(rijsuo, hq0nw, d1863x, d618, iosur7, mz0fw),
              t2y5b$ = d1863x['length'];if (!d1863x['closed'] && z$2y5tb(rijsuo, mhan, d1863x['tagName'], wfd39z) && (d1863x['closed'] = !0x0, z93dw['nbsp'] || mz0fw['warning']('unclosed xml attribute')), y5ib72 && t2y5b$) {
            for (var y52t$l = zyt257(y5ib72, {}), p64x81 = 0x0; t2y5b$ > p64x81; p64x81++) {
              var m0wfz9 = d1863x[p64x81];n_hea(m0wfz9['offset']), m0wfz9['locator'] = zyt257(y5ib72, {});
            }wmnz0['locator'] = y52t$l, zuriosj(d1863x, wmnz0, d618) && b2ty75['push'](d1863x), wmnz0['locator'] = y5ib72;
          } else zuriosj(d1863x, wmnz0, d618) && b2ty75['push'](d1863x);'http://www.w3.org/1999/xhtml' !== d1863x['uri'] || d1863x['closed'] ? mhan++ : mhan = zhma(rijsuo, mhan, d1863x['tagName'], iosur7, wmnz0);}
    } catch (zwhfm) {
      mz0fw['error']('element parse error: ' + zwhfm), mhan = -0x1;
    }mhan > mhn ? mhn = mhan : p6x31(Math['max'](hq0nw, mhn) + 0x1);
  }
}function zyt257(f963dz, hm0wnz) {
  return hm0wnz['lineNumber'] = f963dz['lineNumber'], hm0wnz['columnNumber'] = f963dz['columnNumber'], hm0wnz;
}function zsuboi(b57i2, $y5t2b, fz963, gjrous, gsjoru, resgj) {
  for (var ty2b75, hwzn0m, z90m = ++$y5t2b, yt2b$ = zzwfdm9;;) {
    var aegqj = b57i2['charAt'](z90m);switch (aegqj) {case '=':
        if (yt2b$ === zp1863) ty2b75 = b57i2['slice']($y5t2b, z90m), yt2b$ = zujsgo;else {
          if (yt2b$ !== zoib7) throw new Error('attribute equal must after attrName');yt2b$ = zujsgo;
        }break;case '\x27':case '\x22':
        if (yt2b$ === zujsgo || yt2b$ === zp1863) {
          if (yt2b$ === zp1863 && (resgj['warning']('attribute value must after "="'), ty2b75 = b57i2['slice']($y5t2b, z90m)), $y5t2b = z90m + 0x1, z90m = b57i2['indexOf'](aegqj, $y5t2b), !(z90m > 0x0)) throw new Error('attribute value no end \'' + aegqj + '\' match');hwzn0m = b57i2['slice']($y5t2b, z90m)['replace'](/&#?\w+;/g, gsjoru), fz963['add'](ty2b75, hwzn0m, $y5t2b - 0x1), yt2b$ = zwfdz9m;
        } else {
          if (yt2b$ != zf90wz) throw new Error('attribute value must after "="');hwzn0m = b57i2['slice']($y5t2b, z90m)['replace'](/&#?\w+;/g, gsjoru), fz963['add'](ty2b75, hwzn0m, $y5t2b), resgj['warning']('attribute "' + ty2b75 + '" missed start quot(' + aegqj + ')!!'), $y5t2b = z90m + 0x1, yt2b$ = zwfdz9m;
        }break;case '/':
        switch (yt2b$) {case zzwfdm9:
            fz963['setTagName'](b57i2['slice']($y5t2b, z90m));case zwfdz9m:case zeq_nag:case zgn_qea:
            yt2b$ = zgn_qea, fz963['closed'] = !0x0;case zf90wz:case zp1863:case zoib7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return resgj['error']('unexpected end of input'), yt2b$ == zzwfdm9 && fz963['setTagName'](b57i2['slice']($y5t2b, z90m)), z90m;case '>':
        switch (yt2b$) {case zzwfdm9:
            fz963['setTagName'](b57i2['slice']($y5t2b, z90m));case zwfdz9m:case zeq_nag:case zgn_qea:
            break;case zf90wz:case zp1863:
            hwzn0m = b57i2['slice']($y5t2b, z90m), '/' === hwzn0m['slice'](-0x1) && (fz963['closed'] = !0x0, hwzn0m = hwzn0m['slice'](0x0, -0x1));case zoib7:
            yt2b$ === zoib7 && (hwzn0m = ty2b75), yt2b$ == zf90wz ? (resgj['warning']('attribute "' + hwzn0m + '" missed quot(")!!'), fz963['add'](ty2b75, hwzn0m['replace'](/&#?\w+;/g, gsjoru), $y5t2b)) : ('http://www.w3.org/1999/xhtml' === gjrous[''] && hwzn0m['match'](/^(?:disabled|checked|selected)$/i) || resgj['warning']('attribute "' + hwzn0m + '" missed value!! "' + hwzn0m + '" instead!!'), fz963['add'](hwzn0m, hwzn0m, $y5t2b));break;case zujsgo:
            throw new Error('attribute value missed!!');}return z90m;case '\u0080':
        aegqj = '\x20';default:
        if ('\x20' >= aegqj) switch (yt2b$) {case zzwfdm9:
            fz963['setTagName'](b57i2['slice']($y5t2b, z90m)), yt2b$ = zeq_nag;break;case zp1863:
            ty2b75 = b57i2['slice']($y5t2b, z90m), yt2b$ = zoib7;break;case zf90wz:
            var hwzn0m = b57i2['slice']($y5t2b, z90m)['replace'](/&#?\w+;/g, gsjoru);resgj['warning']('attribute "' + hwzn0m + '" missed quot(")!!'), fz963['add'](ty2b75, hwzn0m, $y5t2b);case zwfdz9m:
            yt2b$ = zeq_nag;} else switch (yt2b$) {case zoib7:
            {
              fz963['tagName'];
            }'http://www.w3.org/1999/xhtml' === gjrous[''] && ty2b75['match'](/^(?:disabled|checked|selected)$/i) || resgj['warning']('attribute "' + ty2b75 + '" missed value!! "' + ty2b75 + '" instead2!!'), fz963['add'](ty2b75, ty2b75, $y5t2b), $y5t2b = z90m, yt2b$ = zp1863;break;case zwfdz9m:
            resgj['warning']('attribute space is required"' + ty2b75 + '\x22!!');case zeq_nag:
            yt2b$ = zp1863, $y5t2b = z90m;break;case zujsgo:
            yt2b$ = zf90wz, $y5t2b = z90m;break;case zgn_qea:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}z90m++;
  }
}function zuriosj(px6814, mqw0h, y75iu) {
  for (var t2yvl$ = px6814['tagName'], px8136 = null, z93f6d = px6814['length']; z93f6d--;) {
    var sjrgu = px6814[z93f6d],
        u5sb7 = sjrgu['qName'],
        wmnq0h = sjrgu['value'],
        eqgn = u5sb7['indexOf'](':');if (eqgn > 0x0) var rgsoej = sjrgu['prefix'] = u5sb7['slice'](0x0, eqgn),
        bi2y57 = u5sb7['slice'](eqgn + 0x1),
        ujrois = 'xmlns' === rgsoej && bi2y57;else bi2y57 = u5sb7, rgsoej = null, ujrois = 'xmlns' === u5sb7 && '';sjrgu['localName'] = bi2y57, ujrois !== !0x1 && (null == px8136 && (px8136 = {}, zmdwzf(y75iu, y75iu = {})), y75iu[ujrois] = px8136[ujrois] = wmnq0h, sjrgu['uri'] = 'http://www.w3.org/2000/xmlns/', mqw0h['startPrefixMapping'](ujrois, wmnq0h));
  }for (var z93f6d = px6814['length']; z93f6d--;) {
    sjrgu = px6814[z93f6d];var rgsoej = sjrgu['prefix'];rgsoej && ('xml' === rgsoej && (sjrgu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== rgsoej && (sjrgu['uri'] = y75iu[rgsoej || '']));
  }var eqgn = t2yvl$['indexOf'](':');eqgn > 0x0 ? (rgsoej = px6814['prefix'] = t2yvl$['slice'](0x0, eqgn), bi2y57 = px6814['localName'] = t2yvl$['slice'](eqgn + 0x1)) : (rgsoej = null, bi2y57 = px6814['localName'] = t2yvl$);var ea_g = px6814['uri'] = y75iu[rgsoej || ''];if (mqw0h['startElement'](ea_g, bi2y57, t2yvl$, px6814), !px6814['closed']) return px6814['currentNSMap'] = y75iu, px6814['localNSMap'] = px8136, !0x0;if (mqw0h['endElement'](ea_g, bi2y57, t2yvl$), px8136) {
    for (rgsoej in px8136) mqw0h['endPrefixMapping'](rgsoej);
  }
}function zhma(_hqn, oujis, p681, u5bis, dwz3f9) {
  if (/^(?:script|textarea)$/i['test'](p681)) {
    var w9m0 = _hqn['indexOf']('</' + p681 + '>', oujis),
        o_gr = _hqn['substring'](oujis + 0x1, w9m0);if (/[&<]/['test'](o_gr)) return (/^script$/i['test'](p681) ? (dwz3f9['characters'](o_gr, 0x0, o_gr['length']), w9m0) : (o_gr = o_gr['replace'](/&#?\w+;/g, u5bis), dwz3f9['characters'](o_gr, 0x0, o_gr['length']), w9m0)
    );
  }return oujis + 0x1;
}function z$2y5tb(je_gaq, biu7so, z90mw, neq_) {
  var u7oris = neq_[z90mw];return null == u7oris && (u7oris = je_gaq['lastIndexOf']('</' + z90mw + '>'), biu7so > u7oris && (u7oris = je_gaq['lastIndexOf']('</' + z90mw)), neq_[z90mw] = u7oris), biu7so > u7oris;
}function zmdwzf(esjr, rs7ui) {
  for (var df9316 in esjr) rs7ui[df9316] = esjr[df9316];
}function zb25yt$(aqh0, w0f9, gjsu, nwmzh) {
  var qa0h_ = aqh0['charAt'](w0f9 + 0x2);switch (qa0h_) {case '-':
      if ('-' === aqh0['charAt'](w0f9 + 0x3)) {
        var jagre = aqh0['indexOf']('-->', w0f9 + 0x4);return jagre > w0f9 ? (gjsu['comment'](aqh0, w0f9 + 0x4, jagre - w0f9 - 0x4), jagre + 0x3) : (nwmzh['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == aqh0['substr'](w0f9 + 0x3, 0x6)) {
        var jagre = aqh0['indexOf'](']]>', w0f9 + 0x9);return gjsu['startCDATA'](), gjsu['characters'](aqh0, w0f9 + 0x9, jagre - w0f9 - 0x9), gjsu['endCDATA'](), jagre + 0x3;
      }var f3d9zw = zfd93zw(aqh0, w0f9),
          osijru = f3d9zw['length'];if (osijru > 0x1 && /!doctype/i['test'](f3d9zw[0x0][0x0])) {
        var ega_ = f3d9zw[0x1][0x0],
            g_orje = osijru > 0x3 && /^public$/i['test'](f3d9zw[0x2][0x0]) && f3d9zw[0x3][0x0],
            z6f93 = osijru > 0x4 && f3d9zw[0x4][0x0],
            qhn0a = f3d9zw[osijru - 0x1];return gjsu['startDTD'](ega_, g_orje && g_orje['replace'](/^(['"])(.*?)\1$/, '$2'), z6f93 && z6f93['replace'](/^(['"])(.*?)\1$/, '$2')), gjsu['endDTD'](), qhn0a['index'] + qhn0a[0x0]['length'];
      }}return -0x1;
}function zmznh0w(_hqn0, d3zf9w, isroju) {
  var t$2lyv = _hqn0['indexOf']('?>', d3zf9w);if (t$2lyv) {
    var nwh0 = _hqn0['substring'](d3zf9w, t$2lyv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nwh0) {
      {
        nwh0[0x0]['length'];
      }return isroju['processingInstruction'](nwh0[0x1], nwh0[0x2]), t$2lyv + 0x2;
    }return -0x1;
  }return -0x1;
}function zrgjuo() {}function zgorse(gjrse, o_gej) {
  return gjrse['__proto__'] = o_gej, gjrse;
}function zfd93zw(yb5u, ag_rje) {
  var aejg,
      ub5i = [],
      f6z39d = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (f6z39d['lastIndex'] = ag_rje, f6z39d['exec'](yb5u); aejg = f6z39d['exec'](yb5u);) if (ub5i['push'](aejg), aejg[0x1]) return ub5i;
}var zm9zwfd = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zmaq0nh = new RegExp('[\\-\\.0-9' + zm9zwfd['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zy5tb2 = new RegExp('^' + zm9zwfd['source'] + zmaq0nh['source'] + '*(?::' + zm9zwfd['source'] + zmaq0nh['source'] + '*)?$'),
    zzwfdm9 = 0x0,
    zp1863 = 0x1,
    zoib7 = 0x2,
    zujsgo = 0x3,
    zf90wz = 0x4,
    zwfdz9m = 0x5,
    zeq_nag = 0x6,
    zgn_qea = 0x7;zaenqh['prototype'] = { 'parse': function ($5tby2, usrogj, fwz3) {
    var d9f31 = this['domBuilder'];d9f31['startDocument'](), zmdwzf(usrogj, usrogj = {}), zqjg($5tby2, usrogj, fwz3, d9f31, this['errorHandler']), d9f31['endDocument']();
  } }, zrgjuo['prototype'] = { 'setTagName': function (y52i7) {
    if (!zy5tb2['test'](y52i7)) throw new Error('invalid tagName:' + y52i7);this['tagName'] = y52i7;
  }, 'add': function (ah_nq0, f96z3d, bo7ui) {
    if (!zy5tb2['test'](ah_nq0)) throw new Error('invalid attribute:' + ah_nq0);this[this['length']++] = { 'qName': ah_nq0, 'value': f96z3d, 'offset': bo7ui };
  }, 'length': 0x0, 'getLocalName': function (gjo_er) {
    return this[gjo_er]['localName'];
  }, 'getLocator': function (z39dw) {
    return this[z39dw]['locator'];
  }, 'getQName': function (v2yt) {
    return this[v2yt]['qName'];
  }, 'getURI': function (suio7) {
    return this[suio7]['uri'];
  }, 'getValue': function (f0zwm) {
    return this[f0zwm]['value'];
  } }, zgorse({}, zgorse['prototype']) instanceof zgorse || (zgorse = function (zmwd9, mnw0h) {
  function rijosu() {}rijosu['prototype'] = mnw0h, rijosu = new rijosu();for (mnw0h in zmwd9) rijosu[mnw0h] = zmwd9[mnw0h];return rijosu;
}), exports['XMLReader'] = zaenqh;