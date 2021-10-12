var m = wx.$g;
function gea3vmt() {}function g_is1(zs$g, tvjmq3, kgsf8, wbyhi1, w41y) {
  function tqumj(t3va) {
    var irb1yh = t3va['slice'](0x1, -0x1);return irb1yh in kgsf8 ? kgsf8[irb1yh] : '#' === irb1yh['charAt'](0x0) ? 0xffff < (irb1yh = parseInt(irb1yh['substr'](0x1)['replace']('x', '0x'))) ? (irb1yh -= 0x10000, String['fromCharCode'](0xd800 + (irb1yh >> 0xa), 0xdc00 + (0x3ff & irb1yh))) : String['fromCharCode'](irb1yh) : (w41y['error']('entity not found:' + t3va), t3va);
  }function _ib(mvtq3j) {
    var s$_8fg;dvem3 < mvtq3j && (s$_8fg = zs$g['substring'](dvem3, mvtq3j)['replace'](/&#?\w+;/g, tqumj), h4wda && co0692(dvem3), wbyhi1['characters'](s$_8fg, 0x0, mvtq3j - dvem3), dvem3 = mvtq3j);
  }function co0692(b1_ih, mtjq3v) {
    for (; wbiy1 <= b1_ih && (mtjq3v = sirf$_['exec'](zs$g));) $1br_i = mtjq3v['index'], wbiy1 = $1br_i + mtjq3v[0x0]['length'], h4wda['lineNumber']++;h4wda['columnNumber'] = b1_ih - $1br_i + 0x1;
  }for (var $1br_i = 0x0, wbiy1 = 0x0, sirf$_ = /.*(?:\r\n?|\n)|.*$/g, h4wda = wbyhi1['locator'], _bi$ = [{ 'currentNSMap': tvjmq3 }], f$_sr = {}, dvem3 = 0x0;;) {
    try {
      var m3tjqu = zs$g['indexOf']('<', dvem3),
          dv34ea,
          adwe4y;if (m3tjqu < 0x0) return void (zs$g['substr'](dvem3)['match'](/^\s*$/) || (adwe4y = (dv34ea = wbyhi1['doc'])['createTextNode'](zs$g['substr'](dvem3)), dv34ea['appendChild'](adwe4y), wbyhi1['currentElement'] = adwe4y));switch (dvem3 < m3tjqu && _ib(m3tjqu), zs$g['charAt'](m3tjqu + 0x1)) {case '/':
          var av34ed = zs$g['indexOf']('>', m3tjqu + 0x3),
              biw = zs$g['substring'](m3tjqu + 0x2, av34ed),
              jvt3 = _bi$['pop']();av34ed < 0x0 ? (biw = zs$g['substring'](m3tjqu + 0x2)['replace'](/[\s<].*/, ''), w41y['error']('end tag name: ' + biw + ' is not complete:' + jvt3['tagName']), av34ed = m3tjqu + 0x1 + biw['length']) : biw['match'](/\s</) && (biw = biw['replace'](/[\s<].*/, ''), w41y['error']('end tag name: ' + biw + ' maybe not complete'), av34ed = m3tjqu + 0x1 + biw['length']);var aemtv3 = jvt3['localNSMap'],
              ta3m = jvt3['tagName'] == biw;if (ta3m || jvt3['tagName'] && jvt3['tagName']['toLowerCase']() == biw['toLowerCase']()) {
            if (wbyhi1['endElement'](jvt3['uri'], jvt3['localName'], biw), aemtv3) {
              for (var mq3tvj in aemtv3) wbyhi1['endPrefixMapping'](mq3tvj);
            }ta3m || w41y['fatalError']('end tag name: ' + biw + ' is not match the current start tagName:' + jvt3['tagName']);
          } else _bi$['push'](jvt3);av34ed++;break;case '?':
          h4wda && co0692(m3tjqu), av34ed = gzfpk8g(zs$g, m3tjqu, wbyhi1);break;case '!':
          h4wda && co0692(m3tjqu), av34ed = gpgl5k(zs$g, m3tjqu, wbyhi1, w41y);break;default:
          h4wda && co0692(m3tjqu);var dv4ae3 = new gtuxj(),
              y1biw = _bi$[_bi$['length'] - 0x1]['currentNSMap'],
              av34ed = gf$s8_r(zs$g, m3tjqu, dv4ae3, y1biw, tqumj, w41y),
              ejm3v = dv4ae3['length'];if (!dv4ae3['closed'] && geva34d(zs$g, av34ed, dv4ae3['tagName'], f$_sr) && (dv4ae3['closed'] = !0x0, kgsf8['nbsp'] || w41y['warning']('unclosed xml attribute')), h4wda && ejm3v) {
            for (var yhw1b = g$8s_rf(h4wda, {}), vetm3j = 0x0; vetm3j < ejm3v; vetm3j++) {
              var mqtv = dv4ae3[vetm3j];co0692(mqtv['offset']), mqtv['locator'] = g$8s_rf(h4wda, {});
            }wbyhi1['locator'] = yhw1b, guqxm(dv4ae3, wbyhi1, y1biw) && _bi$['push'](dv4ae3), wbyhi1['locator'] = h4wda;
          } else guqxm(dv4ae3, wbyhi1, y1biw) && _bi$['push'](dv4ae3);'http://www.w3.org/1999/xhtml' !== dv4ae3['uri'] || dv4ae3['closed'] ? av34ed++ : av34ed = g$_bri1(zs$g, av34ed, dv4ae3['tagName'], tqumj, wbyhi1);}
    } catch (_rhi1b) {
      w41y['error']('element parse error: ' + _rhi1b), av34ed = -0x1;
    }dvem3 < av34ed ? dvem3 = av34ed : _ib(Math['max'](m3tjqu, dvem3) + 0x1);
  }
}function g$8s_rf(kc5zpl, jvm3q) {
  return jvm3q['lineNumber'] = kc5zpl['lineNumber'], jvm3q['columnNumber'] = kc5zpl['columnNumber'], jvm3q;
}function gf$s8_r(yirhb, xmjut, t3qvjm, a4ydwh, wdva, _hb1) {
  for (var tjvem3, $_8sgf = ++xmjut, gk8pl = gzsg8$;;) {
    var _sfr$i = yirhb['charAt']($_8sgf);switch (_sfr$i) {case '=':
        if (gk8pl === gi1r$_) tjvem3 = yirhb['slice'](xmjut, $_8sgf), gk8pl = gmtquj3;else {
          if (gk8pl !== gcpk5lz) throw new Error('attribute equal must after attrName');gk8pl = gmtquj3;
        }break;case '\x27':case '\x22':
        if (gk8pl === gmtquj3 || gk8pl === gi1r$_) {
          if (gk8pl === gi1r$_ && (_hb1['warning']('attribute value must after "="'), tjvem3 = yirhb['slice'](xmjut, $_8sgf)), !(0x0 < ($_8sgf = yirhb['indexOf'](_sfr$i, xmjut = $_8sgf + 0x1)))) throw new Error('attribute value no end \'' + _sfr$i + '\' match');yw1bh = yirhb['slice'](xmjut, $_8sgf)['replace'](/&#?\w+;/g, wdva), t3qvjm['add'](tjvem3, yw1bh, xmjut - 0x1), gk8pl = gc5026;
        } else {
          if (gk8pl != gwiyhb1) throw new Error('attribute value must after "="');yw1bh = yirhb['slice'](xmjut, $_8sgf)['replace'](/&#?\w+;/g, wdva), t3qvjm['add'](tjvem3, yw1bh, xmjut), _hb1['warning']('attribute "' + tjvem3 + '" missed start quot(' + _sfr$i + ')!!'), xmjut = $_8sgf + 0x1, gk8pl = gc5026;
        }break;case '/':
        switch (gk8pl) {case gzsg8$:
            t3qvjm['setTagName'](yirhb['slice'](xmjut, $_8sgf));case gc5026:case gtaevm3:case gk5pc9:
            gk8pl = gk5pc9, t3qvjm['closed'] = !0x0;case gwiyhb1:case gi1r$_:case gcpk5lz:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _hb1['error']('unexpected end of input'), gk8pl == gzsg8$ && t3qvjm['setTagName'](yirhb['slice'](xmjut, $_8sgf)), $_8sgf;case '>':
        switch (gk8pl) {case gzsg8$:
            t3qvjm['setTagName'](yirhb['slice'](xmjut, $_8sgf));case gc5026:case gtaevm3:case gk5pc9:
            break;case gwiyhb1:case gi1r$_:
            '/' === (yw1bh = yirhb['slice'](xmjut, $_8sgf))['slice'](-0x1) && (t3qvjm['closed'] = !0x0, yw1bh = yw1bh['slice'](0x0, -0x1));case gcpk5lz:
            gk8pl === gcpk5lz && (yw1bh = tjvem3), gk8pl == gwiyhb1 ? (_hb1['warning']('attribute "' + yw1bh + '" missed quot(")!!'), t3qvjm['add'](tjvem3, yw1bh['replace'](/&#?\w+;/g, wdva), xmjut)) : ('http://www.w3.org/1999/xhtml' === a4ydwh[''] && yw1bh['match'](/^(?:disabled|checked|selected)$/i) || _hb1['warning']('attribute "' + yw1bh + '" missed value!! "' + yw1bh + '" instead!!'), t3qvjm['add'](yw1bh, yw1bh, xmjut));break;case gmtquj3:
            throw new Error('attribute value missed!!');}return $_8sgf;case '\u0080':
        _sfr$i = '\x20';default:
        if (_sfr$i <= '\x20') switch (gk8pl) {case gzsg8$:
            t3qvjm['setTagName'](yirhb['slice'](xmjut, $_8sgf)), gk8pl = gtaevm3;break;case gi1r$_:
            tjvem3 = yirhb['slice'](xmjut, $_8sgf), gk8pl = gcpk5lz;break;case gwiyhb1:
            var yw1bh = yirhb['slice'](xmjut, $_8sgf)['replace'](/&#?\w+;/g, wdva);_hb1['warning']('attribute "' + yw1bh + '" missed quot(")!!'), t3qvjm['add'](tjvem3, yw1bh, xmjut);case gc5026:
            gk8pl = gtaevm3;} else switch (gk8pl) {case gcpk5lz:
            t3qvjm['tagName'], 'http://www.w3.org/1999/xhtml' === a4ydwh[''] && tjvem3['match'](/^(?:disabled|checked|selected)$/i) || _hb1['warning']('attribute "' + tjvem3 + '" missed value!! "' + tjvem3 + '" instead2!!'), t3qvjm['add'](tjvem3, tjvem3, xmjut), xmjut = $_8sgf, gk8pl = gi1r$_;break;case gc5026:
            _hb1['warning']('attribute space is required"' + tjvem3 + '\x22!!');case gtaevm3:
            gk8pl = gi1r$_, xmjut = $_8sgf;break;case gmtquj3:
            gk8pl = gwiyhb1, xmjut = $_8sgf;break;case gk5pc9:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$_8sgf++;
  }
}function guqxm(bi_h1r, _br1$, kc5p9) {
  for (var zgpk = bi_h1r['tagName'], ib_1h = null, sgf$8 = bi_h1r['length']; sgf$8--;) {
    var lc5z = bi_h1r[sgf$8],
        i_bhr1 = lc5z['qName'],
        klcp = lc5z['value'],
        fs$g;i_bhr1 = 0x0 < (rb1_i = i_bhr1['indexOf'](':')) ? (vd3a4 = lc5z['prefix'] = i_bhr1['slice'](0x0, rb1_i), fs$g = i_bhr1['slice'](rb1_i + 0x1), 'xmlns' === vd3a4 && fs$g) : (vd3a4 = null, 'xmlns' === (fs$g = i_bhr1) && ''), lc5z['localName'] = fs$g, !0x1 !== i_bhr1 && (null == ib_1h && (ib_1h = {}, gir1hb_(kc5p9, kc5p9 = {})), kc5p9[i_bhr1] = ib_1h[i_bhr1] = klcp, lc5z['uri'] = 'http://www.w3.org/2000/xmlns/', _br1$['startPrefixMapping'](i_bhr1, klcp));
  }for (sgf$8 = bi_h1r['length']; sgf$8--;) (vd3a4 = (lc5z = bi_h1r[sgf$8])['prefix']) && ('xml' === vd3a4 && (lc5z['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vd3a4 && (lc5z['uri'] = kc5p9[vd3a4 || '']));var rb1_i;fs$g = 0x0 < (rb1_i = zgpk['indexOf'](':')) ? (vd3a4 = bi_h1r['prefix'] = zgpk['slice'](0x0, rb1_i), bi_h1r['localName'] = zgpk['slice'](rb1_i + 0x1)) : (vd3a4 = null, bi_h1r['localName'] = zgpk);var c9l025 = bi_h1r['uri'] = kc5p9[vd3a4 || ''];if (_br1$['startElement'](c9l025, fs$g, zgpk, bi_h1r), !bi_h1r['closed']) return bi_h1r['currentNSMap'] = kc5p9, bi_h1r['localNSMap'] = ib_1h, !0x0;if (_br1$['endElement'](c9l025, fs$g, zgpk), ib_1h) {
    for (var vd3a4 in ib_1h) _br1$['endPrefixMapping'](vd3a4);
  }
}function g$_bri1(wy, pl5zc, zpf8kg, t3vmea, v34da) {
  if (/^(?:script|textarea)$/i['test'](zpf8kg)) {
    var lc95k = wy['indexOf']('</' + zpf8kg + '>', pl5zc),
        wy = wy['substring'](pl5zc + 0x1, lc95k);if (/[&<]/['test'](wy)) return (/^script$/i['test'](zpf8kg) || (wy = wy['replace'](/&#?\w+;/g, t3vmea)), v34da['characters'](wy, 0x0, wy['length']), lc95k
    );
  }return pl5zc + 0x1;
}function geva34d(c560, $ifsr_, wyb, zkgp8l) {
  var l2c95 = zkgp8l[wyb];return null == l2c95 && ((l2c95 = c560['lastIndexOf']('</' + wyb + '>')) < $ifsr_ && (l2c95 = c560['lastIndexOf']('</' + wyb)), zkgp8l[wyb] = l2c95), l2c95 < $ifsr_;
}function gir1hb_(_$r1bi, tm3vqj) {
  for (var z8gfp in _$r1bi) tm3vqj[z8gfp] = _$r1bi[z8gfp];
}function gpgl5k(cl5z, h1bw, i$_rsf, zg8kl) {
  var lgzk8 = cl5z['charAt'](h1bw + 0x2);if ('-' === lgzk8) return '-' !== cl5z['charAt'](h1bw + 0x3) ? -0x1 : h1bw < (lpg8 = cl5z['indexOf']('-->', h1bw + 0x4)) ? (i$_rsf['comment'](cl5z, h1bw + 0x4, lpg8 - h1bw - 0x4), lpg8 + 0x3) : (zg8kl['error']('Unclosed comment'), -0x1);if ('CDATA[' == cl5z['substr'](h1bw + 0x3, 0x6)) {
    var lpg8 = cl5z['indexOf'](']]>', h1bw + 0x9);return i$_rsf['startCDATA'](), i$_rsf['characters'](cl5z, h1bw + 0x9, lpg8 - h1bw - 0x9), i$_rsf['endCDATA'](), lpg8 + 0x3;
  }lgzk8 = gvdaem3(cl5z, h1bw), zg8kl = lgzk8['length'];if (0x1 < zg8kl && /!doctype/i['test'](lgzk8[0x0][0x0])) return lpg8 = lgzk8[0x1][0x0], cl5z = 0x3 < zg8kl && /^public$/i['test'](lgzk8[0x2][0x0]) && lgzk8[0x3][0x0], h1bw = 0x4 < zg8kl && lgzk8[0x4][0x0], zg8kl = lgzk8[zg8kl - 0x1], (i$_rsf['startDTD'](lpg8, cl5z && cl5z['replace'](/^(['"])(.*?)\1$/, '$2'), h1bw && h1bw['replace'](/^(['"])(.*?)\1$/, '$2')), i$_rsf['endDTD'](), zg8kl['index'] + zg8kl[0x0]['length']);return -0x1;
}function gzfpk8g(rb1_, r_bh1, y4dwae) {
  var me3dav = rb1_['indexOf']('?>', r_bh1);if (me3dav) return r_bh1 = rb1_['substring'](r_bh1, me3dav)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), r_bh1 ? (r_bh1[0x0]['length'], y4dwae['processingInstruction'](r_bh1[0x1], r_bh1[0x2]), me3dav + 0x2) : -0x1;return -0x1;
}function gtuxj() {}function g_8fgs(yhawd4, _i$br1) {
  return yhawd4['__proto__'] = _i$br1, yhawd4;
}function gvdaem3(vm3ejt, etavm) {
  var _g8sf,
      f8gksz = [],
      ri_$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ri_$['lastIndex'] = etavm, ri_$['exec'](vm3ejt); _g8sf = ri_$['exec'](vm3ejt);) if (f8gksz['push'](_g8sf), _g8sf[0x1]) return f8gksz;
}var g$irs_f = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gevma3t = new RegExp('[\\-\\.0-9' + g$irs_f['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gzgk8lp = new RegExp('^' + g$irs_f['source'] + gevma3t['source'] + '*(?::' + g$irs_f['source'] + gevma3t['source'] + '*)?$'),
    gzsg8$ = 0x0,
    gi1r$_ = 0x1,
    gcpk5lz = 0x2,
    gmtquj3 = 0x3,
    gwiyhb1 = 0x4,
    gc5026 = 0x5,
    gtaevm3 = 0x6,
    gk5pc9 = 0x7;gea3vmt['prototype'] = { 'parse': function (e3dav, zkc5p, zgk8fs) {
    var mje3tv = this['domBuilder'];mje3tv['startDocument'](), gir1hb_(zkc5p, zkc5p = {}), g_is1(e3dav, zkc5p, zgk8fs, mje3tv, this['errorHandler']), mje3tv['endDocument']();
  } }, gtuxj['prototype'] = { 'setTagName': function (ahd4y) {
    if (!gzgk8lp['test'](ahd4y)) throw new Error('invalid tagName:' + ahd4y);this['tagName'] = ahd4y;
  }, 'add': function (c2590l, ae34v, mujtq3) {
    if (!gzgk8lp['test'](c2590l)) throw new Error('invalid attribute:' + c2590l);this[this['length']++] = { 'qName': c2590l, 'value': ae34v, 'offset': mujtq3 };
  }, 'length': 0x0, 'getLocalName': function (qjmuxt) {
    return this[qjmuxt]['localName'];
  }, 'getLocator': function (_$8sf) {
    return this[_$8sf]['locator'];
  }, 'getQName': function (lz5cpk) {
    return this[lz5cpk]['qName'];
  }, 'getURI': function (pkzc5l) {
    return this[pkzc5l]['uri'];
  }, 'getValue': function (ae34d) {
    return this[ae34d]['value'];
  } }, g_8fgs({}, g_8fgs['prototype']) instanceof g_8fgs || (g_8fgs = function (tm3ave, skf8zg) {
  function hbyi1w() {}for (skf8zg in hbyi1w['prototype'] = skf8zg, hbyi1w = new hbyi1w(), tm3ave) hbyi1w[skf8zg] = tm3ave[skf8zg];return hbyi1w;
}), exports['XMLReader'] = gea3vmt;