var M = wx.$T;
function tkuj() {}function td9$ip(n13568, pz7$df, bg3r, xe0_yq, ye0) {
  function yx0e_(hw15m) {
    if (hw15m > 0xffff) {
      hw15m -= 0x10000;var dpz$7 = 0xd800 + (hw15m >> 0xa),
          usbkj = 0xdc00 + (0x3ff & hw15m);return String['fromCharCode'](dpz$7, usbkj);
    }return String['fromCharCode'](hw15m);
  }function qy0xm_(dvpfz) {
    var _qey0 = dvpfz['slice'](0x1, -0x1);return _qey0 in bg3r ? bg3r[_qey0] : '#' === _qey0['charAt'](0x0) ? yx0e_(parseInt(_qey0['substr'](0x1)['replace']('x', '0x'))) : (ye0['error']('entity not found:' + dvpfz), dvpfz);
  }function dp$fv9(w5m61) {
    if (w5m61 > _wymxh) {
      var z$vp = n13568['substring'](_wymxh, w5m61)['replace'](/&#?\w+;/g, qy0xm_);e0yqox && i$c9v(_wymxh), xe0_yq['characters'](z$vp, 0x0, w5m61 - _wymxh), _wymxh = w5m61;
    }
  }function i$c9v(xwym_h, jrkbg) {
    for (; xwym_h >= ipv && (jrkbg = $icv9['exec'](n13568));) jr38n = jrkbg['index'], ipv = jr38n + jrkbg[0x0]['length'], e0yqox['lineNumber']++;e0yqox['columnNumber'] = xwym_h - jr38n + 0x1;
  }for (var jr38n = 0x0, ipv = 0x0, $icv9 = /.*(?:\r\n?|\n)|.*$/g, e0yqox = xe0_yq['locator'], jarksb = [{ 'currentNSMap': pz7$df }], njrbg = {}, _wymxh = 0x0;;) {
    try {
      var gjakb = n13568['indexOf']('<', _wymxh);if (0x0 > gjakb) {
        if (!n13568['substr'](_wymxh)['match'](/^\s*$/)) {
          var jn3rbg = xe0_yq['doc'],
              t9cv = jn3rbg['createTextNode'](n13568['substr'](_wymxh));jn3rbg['appendChild'](t9cv), xe0_yq['currentElement'] = t9cv;
        }return;
      }switch (gjakb > _wymxh && dp$fv9(gjakb), n13568['charAt'](gjakb + 0x1)) {case '/':
          var t$i9v = n13568['indexOf']('>', gjakb + 0x3),
              yexo0 = n13568['substring'](gjakb + 0x2, t$i9v),
              pv9f$d = jarksb['pop']();0x0 > t$i9v ? (yexo0 = n13568['substring'](gjakb + 0x2)['replace'](/[\s<].*/, ''), ye0['error']('end tag name: ' + yexo0 + ' is not complete:' + pv9f$d['tagName']), t$i9v = gjakb + 0x1 + yexo0['length']) : yexo0['match'](/\s</) && (yexo0 = yexo0['replace'](/[\s<].*/, ''), ye0['error']('end tag name: ' + yexo0 + ' maybe not complete'), t$i9v = gjakb + 0x1 + yexo0['length']);var dvp$i = pv9f$d['localNSMap'],
              skarjb = pv9f$d['tagName'] == yexo0,
              w1m5h6 = skarjb || pv9f$d['tagName'] && pv9f$d['tagName']['toLowerCase']() == yexo0['toLowerCase']();if (w1m5h6) {
            if (xe0_yq['endElement'](pv9f$d['uri'], pv9f$d['localName'], yexo0), dvp$i) {
              for (var w516h in dvp$i) xe0_yq['endPrefixMapping'](w516h);
            }skarjb || ye0['fatalError']('end tag name: ' + yexo0 + ' is not match the current start tagName:' + pv9f$d['tagName']);
          } else jarksb['push'](pv9f$d);t$i9v++;break;case '?':
          e0yqox && i$c9v(gjakb), t$i9v = toqz7f(n13568, gjakb, xe0_yq);break;case '!':
          e0yqox && i$c9v(gjakb), t$i9v = tt4l2ic(n13568, gjakb, xe0_yq, ye0);break;default:
          e0yqox && i$c9v(gjakb);var q7efz = new twm_h5y(),
              v92ti = jarksb[jarksb['length'] - 0x1]['currentNSMap'],
              t$i9v = t_5(n13568, gjakb, q7efz, v92ti, qy0xm_, ye0),
              ng3r81 = q7efz['length'];if (!q7efz['closed'] && tdf(n13568, t$i9v, q7efz['tagName'], njrbg) && (q7efz['closed'] = !0x0, bg3r['nbsp'] || ye0['warning']('unclosed xml attribute')), e0yqox && ng3r81) {
            for (var gjnrb = tw5h_my(e0yqox, {}), fpvdz = 0x0; ng3r81 > fpvdz; fpvdz++) {
              var q_y0xm = q7efz[fpvdz];i$c9v(q_y0xm['offset']), q_y0xm['locator'] = tw5h_my(e0yqox, {});
            }xe0_yq['locator'] = gjnrb, topef(q7efz, xe0_yq, v92ti) && jarksb['push'](q7efz), xe0_yq['locator'] = e0yqox;
          } else topef(q7efz, xe0_yq, v92ti) && jarksb['push'](q7efz);'http://www.w3.org/1999/xhtml' !== q7efz['uri'] || q7efz['closed'] ? t$i9v++ : t$i9v = tzof7d(n13568, t$i9v, q7efz['tagName'], qy0xm_, xe0_yq);}
    } catch (grjnba) {
      ye0['error']('element parse error: ' + grjnba), t$i9v = -0x1;
    }t$i9v > _wymxh ? _wymxh = t$i9v : dp$fv9(Math['max'](gjakb, _wymxh) + 0x1);
  }
}function tw5h_my(d$9vpi, cvi9$) {
  return cvi9$['lineNumber'] = d$9vpi['lineNumber'], cvi9$['columnNumber'] = d$9vpi['columnNumber'], cvi9$;
}function t_5(o0qe7z, ic$v9t, jabks, g361, jgarkb, hw6m15) {
  for (var gbnjar, busakj, mwh5y_ = ++ic$v9t, jn3g8 = tzpvf$;;) {
    var p$fdz7 = o0qe7z['charAt'](mwh5y_);switch (p$fdz7) {case '=':
        if (jn3g8 === tjbrk) gbnjar = o0qe7z['slice'](ic$v9t, mwh5y_), jn3g8 = tbksaju;else {
          if (jn3g8 !== tsrbajk) throw new Error('attribute equal must after attrName');jn3g8 = tbksaju;
        }break;case '\x27':case '\x22':
        if (jn3g8 === tbksaju || jn3g8 === tjbrk) {
          if (jn3g8 === tjbrk && (hw6m15['warning']('attribute value must after "="'), gbnjar = o0qe7z['slice'](ic$v9t, mwh5y_)), ic$v9t = mwh5y_ + 0x1, mwh5y_ = o0qe7z['indexOf'](p$fdz7, ic$v9t), !(mwh5y_ > 0x0)) throw new Error('attribute value no end \'' + p$fdz7 + '\' match');busakj = o0qe7z['slice'](ic$v9t, mwh5y_)['replace'](/&#?\w+;/g, jgarkb), jabks['add'](gbnjar, busakj, ic$v9t - 0x1), jn3g8 = tfp$dv;
        } else {
          if (jn3g8 != tfvp9d$) throw new Error('attribute value must after "="');busakj = o0qe7z['slice'](ic$v9t, mwh5y_)['replace'](/&#?\w+;/g, jgarkb), jabks['add'](gbnjar, busakj, ic$v9t), hw6m15['warning']('attribute "' + gbnjar + '" missed start quot(' + p$fdz7 + ')!!'), ic$v9t = mwh5y_ + 0x1, jn3g8 = tfp$dv;
        }break;case '/':
        switch (jn3g8) {case tzpvf$:
            jabks['setTagName'](o0qe7z['slice'](ic$v9t, mwh5y_));case tfp$dv:case t$zd7:case txh_0y:
            jn3g8 = txh_0y, jabks['closed'] = !0x0;case tfvp9d$:case tjbrk:case tsrbajk:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hw6m15['error']('unexpected end of input'), jn3g8 == tzpvf$ && jabks['setTagName'](o0qe7z['slice'](ic$v9t, mwh5y_)), mwh5y_;case '>':
        switch (jn3g8) {case tzpvf$:
            jabks['setTagName'](o0qe7z['slice'](ic$v9t, mwh5y_));case tfp$dv:case t$zd7:case txh_0y:
            break;case tfvp9d$:case tjbrk:
            busakj = o0qe7z['slice'](ic$v9t, mwh5y_), '/' === busakj['slice'](-0x1) && (jabks['closed'] = !0x0, busakj = busakj['slice'](0x0, -0x1));case tsrbajk:
            jn3g8 === tsrbajk && (busakj = gbnjar), jn3g8 == tfvp9d$ ? (hw6m15['warning']('attribute "' + busakj + '" missed quot(")!!'), jabks['add'](gbnjar, busakj['replace'](/&#?\w+;/g, jgarkb), ic$v9t)) : ('http://www.w3.org/1999/xhtml' === g361[''] && busakj['match'](/^(?:disabled|checked|selected)$/i) || hw6m15['warning']('attribute "' + busakj + '" missed value!! "' + busakj + '" instead!!'), jabks['add'](busakj, busakj, ic$v9t));break;case tbksaju:
            throw new Error('attribute value missed!!');}return mwh5y_;case '\u0080':
        p$fdz7 = '\x20';default:
        if ('\x20' >= p$fdz7) switch (jn3g8) {case tzpvf$:
            jabks['setTagName'](o0qe7z['slice'](ic$v9t, mwh5y_)), jn3g8 = t$zd7;break;case tjbrk:
            gbnjar = o0qe7z['slice'](ic$v9t, mwh5y_), jn3g8 = tsrbajk;break;case tfvp9d$:
            var busakj = o0qe7z['slice'](ic$v9t, mwh5y_)['replace'](/&#?\w+;/g, jgarkb);hw6m15['warning']('attribute "' + busakj + '" missed quot(")!!'), jabks['add'](gbnjar, busakj, ic$v9t);case tfp$dv:
            jn3g8 = t$zd7;} else switch (jn3g8) {case tsrbajk:
            {
              jabks['tagName'];
            }'http://www.w3.org/1999/xhtml' === g361[''] && gbnjar['match'](/^(?:disabled|checked|selected)$/i) || hw6m15['warning']('attribute "' + gbnjar + '" missed value!! "' + gbnjar + '" instead2!!'), jabks['add'](gbnjar, gbnjar, ic$v9t), ic$v9t = mwh5y_, jn3g8 = tjbrk;break;case tfp$dv:
            hw6m15['warning']('attribute space is required"' + gbnjar + '\x22!!');case t$zd7:
            jn3g8 = tjbrk, ic$v9t = mwh5y_;break;case tbksaju:
            jn3g8 = tfvp9d$, ic$v9t = mwh5y_;break;case txh_0y:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}mwh5y_++;
  }
}function topef(w51m6h, kjb, i9pdv) {
  for (var fvp$9 = w51m6h['tagName'], oe7zf = null, fpzod = w51m6h['length']; fpzod--;) {
    var zo7d = w51m6h[fpzod],
        epf7z = zo7d['qName'],
        lt4i2 = zo7d['value'],
        i2vct9 = epf7z['indexOf'](':');if (i2vct9 > 0x0) var oefpz = zo7d['prefix'] = epf7z['slice'](0x0, i2vct9),
        xoyeq = epf7z['slice'](i2vct9 + 0x1),
        mw5h_y = 'xmlns' === oefpz && xoyeq;else xoyeq = epf7z, oefpz = null, mw5h_y = 'xmlns' === epf7z && '';zo7d['localName'] = xoyeq, mw5h_y !== !0x1 && (null == oe7zf && (oe7zf = {}, tfpz7od(i9pdv, i9pdv = {})), i9pdv[mw5h_y] = oe7zf[mw5h_y] = lt4i2, zo7d['uri'] = 'http://www.w3.org/2000/xmlns/', kjb['startPrefixMapping'](mw5h_y, lt4i2));
  }for (var fpzod = w51m6h['length']; fpzod--;) {
    zo7d = w51m6h[fpzod];var oefpz = zo7d['prefix'];oefpz && ('xml' === oefpz && (zo7d['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== oefpz && (zo7d['uri'] = i9pdv[oefpz || '']));
  }var i2vct9 = fvp$9['indexOf'](':');i2vct9 > 0x0 ? (oefpz = w51m6h['prefix'] = fvp$9['slice'](0x0, i2vct9), xoyeq = w51m6h['localName'] = fvp$9['slice'](i2vct9 + 0x1)) : (oefpz = null, xoyeq = w51m6h['localName'] = fvp$9);var qfez7 = w51m6h['uri'] = i9pdv[oefpz || ''];if (kjb['startElement'](qfez7, xoyeq, fvp$9, w51m6h), !w51m6h['closed']) return w51m6h['currentNSMap'] = i9pdv, w51m6h['localNSMap'] = oe7zf, !0x0;if (kjb['endElement'](qfez7, xoyeq, fvp$9), oe7zf) {
    for (oefpz in oe7zf) kjb['endPrefixMapping'](oefpz);
  }
}function tzof7d(w6158, j83gnr, yq0x_, pf7dzo, y_whxm) {
  if (/^(?:script|textarea)$/i['test'](yq0x_)) {
    var oze07q = w6158['indexOf']('</' + yq0x_ + '>', j83gnr),
        _wm56 = w6158['substring'](j83gnr + 0x1, oze07q);if (/[&<]/['test'](_wm56)) return (/^script$/i['test'](yq0x_) ? (y_whxm['characters'](_wm56, 0x0, _wm56['length']), oze07q) : (_wm56 = _wm56['replace'](/&#?\w+;/g, pf7dzo), y_whxm['characters'](_wm56, 0x0, _wm56['length']), oze07q)
    );
  }return j83gnr + 0x1;
}function tdf(bausj, feopz7, fp9v, bajrsk) {
  var kusabj = bajrsk[fp9v];return null == kusabj && (kusabj = bausj['lastIndexOf']('</' + fp9v + '>'), feopz7 > kusabj && (kusabj = bausj['lastIndexOf']('</' + fp9v)), bajrsk[fp9v] = kusabj), feopz7 > kusabj;
}function tfpz7od(vc$9it, d7ozp) {
  for (var gnarj in vc$9it) d7ozp[gnarj] = vc$9it[gnarj];
}function tt4l2ic(ip$, ipdv, pz7ofe, ci29vt) {
  var p7z = ip$['charAt'](ipdv + 0x2);switch (p7z) {case '-':
      if ('-' === ip$['charAt'](ipdv + 0x3)) {
        var of = ip$['indexOf']('-->', ipdv + 0x4);return of > ipdv ? (pz7ofe['comment'](ip$, ipdv + 0x4, of - ipdv - 0x4), of + 0x3) : (ci29vt['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ip$['substr'](ipdv + 0x3, 0x6)) {
        var of = ip$['indexOf'](']]>', ipdv + 0x9);return pz7ofe['startCDATA'](), pz7ofe['characters'](ip$, ipdv + 0x9, of - ipdv - 0x9), pz7ofe['endCDATA'](), of + 0x3;
      }var q7o0e = ttic4(ip$, ipdv),
          v$9f = q7o0e['length'];if (v$9f > 0x1 && /!doctype/i['test'](q7o0e[0x0][0x0])) {
        var oqex07 = q7o0e[0x1][0x0],
            qex_y = v$9f > 0x3 && /^public$/i['test'](q7o0e[0x2][0x0]) && q7o0e[0x3][0x0],
            rajks = v$9f > 0x4 && q7o0e[0x4][0x0],
            rbja = q7o0e[v$9f - 0x1];return pz7ofe['startDTD'](oqex07, qex_y && qex_y['replace'](/^(['"])(.*?)\1$/, '$2'), rajks && rajks['replace'](/^(['"])(.*?)\1$/, '$2')), pz7ofe['endDTD'](), rbja['index'] + rbja[0x0]['length'];
      }}return -0x1;
}function toqz7f(eox7, n1rg38, x70q) {
  var dop7zf = eox7['indexOf']('?>', n1rg38);if (dop7zf) {
    var x_hmw = eox7['substring'](n1rg38, dop7zf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (x_hmw) {
      {
        x_hmw[0x0]['length'];
      }return x70q['processingInstruction'](x_hmw[0x1], x_hmw[0x2]), dop7zf + 0x2;
    }return -0x1;
  }return -0x1;
}function twm_h5y() {}function tctvi29(vc9it2, jrsbk) {
  return vc9it2['__proto__'] = jrsbk, vc9it2;
}function ttic4(ksrab, w156mh) {
  var ti29vc,
      dpi$9v = [],
      n863g1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (n863g1['lastIndex'] = w156mh, n863g1['exec'](ksrab); ti29vc = n863g1['exec'](ksrab);) if (dpi$9v['push'](ti29vc), ti29vc[0x1]) return dpi$9v;
}var tq7oze0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tc9id = new RegExp('[\\-\\.0-9' + tq7oze0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tz7eqo = new RegExp('^' + tq7oze0['source'] + tc9id['source'] + '*(?::' + tq7oze0['source'] + tc9id['source'] + '*)?$'),
    tzpvf$ = 0x0,
    tjbrk = 0x1,
    tsrbajk = 0x2,
    tbksaju = 0x3,
    tfvp9d$ = 0x4,
    tfp$dv = 0x5,
    t$zd7 = 0x6,
    txh_0y = 0x7;tkuj['prototype'] = { 'parse': function (hy_w5, mxywh_, qym_x0) {
    var opz7 = this['domBuilder'];opz7['startDocument'](), tfpz7od(mxywh_, mxywh_ = {}), td9$ip(hy_w5, mxywh_, qym_x0, opz7, this['errorHandler']), opz7['endDocument']();
  } }, twm_h5y['prototype'] = { 'setTagName': function (lt2i) {
    if (!tz7eqo['test'](lt2i)) throw new Error('invalid tagName:' + lt2i);this['tagName'] = lt2i;
  }, 'add': function (y_q0m, eqof7, $piv9) {
    if (!tz7eqo['test'](y_q0m)) throw new Error('invalid attribute:' + y_q0m);this[this['length']++] = { 'qName': y_q0m, 'value': eqof7, 'offset': $piv9 };
  }, 'length': 0x0, 'getLocalName': function (m5wh6) {
    return this[m5wh6]['localName'];
  }, 'getLocator': function (barksj) {
    return this[barksj]['locator'];
  }, 'getQName': function (ksju) {
    return this[ksju]['qName'];
  }, 'getURI': function (zfeo7p) {
    return this[zfeo7p]['uri'];
  }, 'getValue': function (x0ymh_) {
    return this[x0ymh_]['value'];
  } }, tctvi29({}, tctvi29['prototype']) instanceof tctvi29 || (tctvi29 = function (mxh_yw, gkjra) {
  function asrkb() {}asrkb['prototype'] = gkjra, asrkb = new asrkb();for (gkjra in mxh_yw) asrkb[gkjra] = mxh_yw[gkjra];return asrkb;
}), exports['XMLReader'] = tkuj;