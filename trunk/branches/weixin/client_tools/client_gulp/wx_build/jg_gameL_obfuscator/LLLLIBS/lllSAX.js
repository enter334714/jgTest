var W = wx.$l;
function L9i3rc0m() {}function L9sbd$8(qzljth, mcy30r, fqt9l5, vug7, nsx_48) {
  function $d_s84(y3rxn) {
    if (y3rxn > 0xffff) {
      y3rxn -= 0x10000;var nxy84_ = 0xd800 + (y3rxn >> 0xa),
          lt9fq5 = 0xdc00 + (0x3ff & y3rxn);return String['fromCharCode'](nxy84_, lt9fq5);
    }return String['fromCharCode'](y3rxn);
  }function $ds(zh5tq) {
    var jkql = zh5tq['slice'](0x1, -0x1);return jkql in fqt9l5 ? fqt9l5[jkql] : '#' === jkql['charAt'](0x0) ? $d_s84(parseInt(jkql['substr'](0x1)['replace']('x', '0x'))) : (nsx_48['error']('entity not found:' + zh5tq), zh5tq);
  }function geov71(n_8xs) {
    if (n_8xs > n_0x4y) {
      var haj2kb = qzljth['substring'](n_0x4y, n_8xs)['replace'](/&#?\w+;/g, $ds);l9tf5 && kzjlh(n_0x4y), vug7['characters'](haj2kb, 0x0, n_8xs - n_0x4y), n_0x4y = n_8xs;
    }
  }function kzjlh($db2as, ug1ve) {
    for (; $db2as >= ltjzh && (ug1ve = lqft5z['exec'](qzljth));) d8s4$ = ug1ve['index'], ltjzh = d8s4$ + ug1ve[0x0]['length'], l9tf5['lineNumber']++;l9tf5['columnNumber'] = $db2as - d8s4$ + 0x1;
  }for (var d8s4$ = 0x0, ltjzh = 0x0, lqft5z = /.*(?:\r\n?|\n)|.*$/g, l9tf5 = vug7['locator'], qzflt = [{ 'currentNSMap': mcy30r }], yc3x = {}, n_0x4y = 0x0;;) {
    try {
      var uveg = qzljth['indexOf']('<', n_0x4y);if (0x0 > uveg) {
        if (!qzljth['substr'](n_0x4y)['match'](/^\s*$/)) {
          var ge16up = vug7['doc'],
              a2$ds = ge16up['createTextNode'](qzljth['substr'](n_0x4y));ge16up['appendChild'](a2$ds), vug7['currentElement'] = a2$ds;
        }return;
      }switch (uveg > n_0x4y && geov71(uveg), qzljth['charAt'](uveg + 0x1)) {case '/':
          var ljqkh = qzljth['indexOf']('>', uveg + 0x3),
              s_4d$ = qzljth['substring'](uveg + 0x2, ljqkh),
              n8_s$4 = qzflt['pop']();0x0 > ljqkh ? (s_4d$ = qzljth['substring'](uveg + 0x2)['replace'](/[\s<].*/, ''), nsx_48['error']('end tag name: ' + s_4d$ + ' is not complete:' + n8_s$4['tagName']), ljqkh = uveg + 0x1 + s_4d$['length']) : s_4d$['match'](/\s</) && (s_4d$ = s_4d$['replace'](/[\s<].*/, ''), nsx_48['error']('end tag name: ' + s_4d$ + ' maybe not complete'), ljqkh = uveg + 0x1 + s_4d$['length']);var fo9v71 = n8_s$4['localNSMap'],
              vgeu16 = n8_s$4['tagName'] == s_4d$,
              _8sn$4 = vgeu16 || n8_s$4['tagName'] && n8_s$4['tagName']['toLowerCase']() == s_4d$['toLowerCase']();if (_8sn$4) {
            if (vug7['endElement'](n8_s$4['uri'], n8_s$4['localName'], s_4d$), fo9v71) {
              for (var rcxy3 in fo9v71) vug7['endPrefixMapping'](rcxy3);
            }vgeu16 || nsx_48['fatalError']('end tag name: ' + s_4d$ + ' is not match the current start tagName:' + n8_s$4['tagName']);
          } else qzflt['push'](n8_s$4);ljqkh++;break;case '?':
          l9tf5 && kzjlh(uveg), ljqkh = L9gp16u(qzljth, uveg, vug7);break;case '!':
          l9tf5 && kzjlh(uveg), ljqkh = L9$akdb(qzljth, uveg, vug7, nsx_48);break;default:
          l9tf5 && kzjlh(uveg);var o71egv = new L9ot9f75(),
              lz5htq = qzflt[qzflt['length'] - 0x1]['currentNSMap'],
              ljqkh = L9olf5t9(qzljth, uveg, o71egv, lz5htq, $ds, nsx_48),
              oe719 = o71egv['length'];if (!o71egv['closed'] && L9veug(qzljth, ljqkh, o71egv['tagName'], yc3x) && (o71egv['closed'] = !0x0, fqt9l5['nbsp'] || nsx_48['warning']('unclosed xml attribute')), l9tf5 && oe719) {
            for (var bkaz = L9bhzajk(l9tf5, {}), ci03mr = 0x0; oe719 > ci03mr; ci03mr++) {
              var cm3ir0 = o71egv[ci03mr];kzjlh(cm3ir0['offset']), cm3ir0['locator'] = L9bhzajk(l9tf5, {});
            }vug7['locator'] = bkaz, L9ric3(o71egv, vug7, lz5htq) && qzflt['push'](o71egv), vug7['locator'] = l9tf5;
          } else L9ric3(o71egv, vug7, lz5htq) && qzflt['push'](o71egv);'http://www.w3.org/1999/xhtml' !== o71egv['uri'] || o71egv['closed'] ? ljqkh++ : ljqkh = L9_$84d(qzljth, ljqkh, o71egv['tagName'], $ds, vug7);}
    } catch (tlhqzj) {
      nsx_48['error']('element parse error: ' + tlhqzj), ljqkh = -0x1;
    }ljqkh > n_0x4y ? n_0x4y = ljqkh : geov71(Math['max'](uveg, n_0x4y) + 0x1);
  }
}function L9bhzajk(sx4_n8, f91vo) {
  return f91vo['lineNumber'] = sx4_n8['lineNumber'], f91vo['columnNumber'] = sx4_n8['columnNumber'], f91vo;
}function L9olf5t9(jzahbk, s84$d_, yn3x0_, jhabk, crwmi3, adb2k) {
  for (var ve1og7, geu7v1, crw3 = ++s84$d_, tl9q5f = L9zqltj;;) {
    var rc30yx = jzahbk['charAt'](crw3);switch (rc30yx) {case '=':
        if (tl9q5f === L9vgu7e1) ve1og7 = jzahbk['slice'](s84$d_, crw3), tl9q5f = L9_yx;else {
          if (tl9q5f !== L9x3n_) throw new Error('attribute equal must after attrName');tl9q5f = L9_yx;
        }break;case '\x27':case '\x22':
        if (tl9q5f === L9_yx || tl9q5f === L9vgu7e1) {
          if (tl9q5f === L9vgu7e1 && (adb2k['warning']('attribute value must after "="'), ve1og7 = jzahbk['slice'](s84$d_, crw3)), s84$d_ = crw3 + 0x1, crw3 = jzahbk['indexOf'](rc30yx, s84$d_), !(crw3 > 0x0)) throw new Error('attribute value no end \'' + rc30yx + '\' match');geu7v1 = jzahbk['slice'](s84$d_, crw3)['replace'](/&#?\w+;/g, crwmi3), yn3x0_['add'](ve1og7, geu7v1, s84$d_ - 0x1), tl9q5f = L9eugp16;
        } else {
          if (tl9q5f != L9$adkb) throw new Error('attribute value must after "="');geu7v1 = jzahbk['slice'](s84$d_, crw3)['replace'](/&#?\w+;/g, crwmi3), yn3x0_['add'](ve1og7, geu7v1, s84$d_), adb2k['warning']('attribute "' + ve1og7 + '" missed start quot(' + rc30yx + ')!!'), s84$d_ = crw3 + 0x1, tl9q5f = L9eugp16;
        }break;case '/':
        switch (tl9q5f) {case L9zqltj:
            yn3x0_['setTagName'](jzahbk['slice'](s84$d_, crw3));case L9eugp16:case L9jzkb:case L9gu16pe:
            tl9q5f = L9gu16pe, yn3x0_['closed'] = !0x0;case L9$adkb:case L9vgu7e1:case L9x3n_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return adb2k['error']('unexpected end of input'), tl9q5f == L9zqltj && yn3x0_['setTagName'](jzahbk['slice'](s84$d_, crw3)), crw3;case '>':
        switch (tl9q5f) {case L9zqltj:
            yn3x0_['setTagName'](jzahbk['slice'](s84$d_, crw3));case L9eugp16:case L9jzkb:case L9gu16pe:
            break;case L9$adkb:case L9vgu7e1:
            geu7v1 = jzahbk['slice'](s84$d_, crw3), '/' === geu7v1['slice'](-0x1) && (yn3x0_['closed'] = !0x0, geu7v1 = geu7v1['slice'](0x0, -0x1));case L9x3n_:
            tl9q5f === L9x3n_ && (geu7v1 = ve1og7), tl9q5f == L9$adkb ? (adb2k['warning']('attribute "' + geu7v1 + '" missed quot(")!!'), yn3x0_['add'](ve1og7, geu7v1['replace'](/&#?\w+;/g, crwmi3), s84$d_)) : ('http://www.w3.org/1999/xhtml' === jhabk[''] && geu7v1['match'](/^(?:disabled|checked|selected)$/i) || adb2k['warning']('attribute "' + geu7v1 + '" missed value!! "' + geu7v1 + '" instead!!'), yn3x0_['add'](geu7v1, geu7v1, s84$d_));break;case L9_yx:
            throw new Error('attribute value missed!!');}return crw3;case '\u0080':
        rc30yx = '\x20';default:
        if ('\x20' >= rc30yx) switch (tl9q5f) {case L9zqltj:
            yn3x0_['setTagName'](jzahbk['slice'](s84$d_, crw3)), tl9q5f = L9jzkb;break;case L9vgu7e1:
            ve1og7 = jzahbk['slice'](s84$d_, crw3), tl9q5f = L9x3n_;break;case L9$adkb:
            var geu7v1 = jzahbk['slice'](s84$d_, crw3)['replace'](/&#?\w+;/g, crwmi3);adb2k['warning']('attribute "' + geu7v1 + '" missed quot(")!!'), yn3x0_['add'](ve1og7, geu7v1, s84$d_);case L9eugp16:
            tl9q5f = L9jzkb;} else switch (tl9q5f) {case L9x3n_:
            {
              yn3x0_['tagName'];
            }'http://www.w3.org/1999/xhtml' === jhabk[''] && ve1og7['match'](/^(?:disabled|checked|selected)$/i) || adb2k['warning']('attribute "' + ve1og7 + '" missed value!! "' + ve1og7 + '" instead2!!'), yn3x0_['add'](ve1og7, ve1og7, s84$d_), s84$d_ = crw3, tl9q5f = L9vgu7e1;break;case L9eugp16:
            adb2k['warning']('attribute space is required"' + ve1og7 + '\x22!!');case L9jzkb:
            tl9q5f = L9vgu7e1, s84$d_ = crw3;break;case L9_yx:
            tl9q5f = L9$adkb, s84$d_ = crw3;break;case L9gu16pe:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}crw3++;
  }
}function L9ric3(ak$b, _8d$4, g1eu6p) {
  for (var bkad2 = ak$b['tagName'], ql5zft = null, zlkhjq = ak$b['length']; zlkhjq--;) {
    var s$n84 = ak$b[zlkhjq],
        zjqtl = s$n84['qName'],
        bjk = s$n84['value'],
        ot957f = zjqtl['indexOf'](':');if (ot957f > 0x0) var l5ft9q = s$n84['prefix'] = zjqtl['slice'](0x0, ot957f),
        cm0y3r = zjqtl['slice'](ot957f + 0x1),
        e1v9o7 = 'xmlns' === l5ft9q && cm0y3r;else cm0y3r = zjqtl, l5ft9q = null, e1v9o7 = 'xmlns' === zjqtl && '';s$n84['localName'] = cm0y3r, e1v9o7 !== !0x1 && (null == ql5zft && (ql5zft = {}, L9cx30r(g1eu6p, g1eu6p = {})), g1eu6p[e1v9o7] = ql5zft[e1v9o7] = bjk, s$n84['uri'] = 'http://www.w3.org/2000/xmlns/', _8d$4['startPrefixMapping'](e1v9o7, bjk));
  }for (var zlkhjq = ak$b['length']; zlkhjq--;) {
    s$n84 = ak$b[zlkhjq];var l5ft9q = s$n84['prefix'];l5ft9q && ('xml' === l5ft9q && (s$n84['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== l5ft9q && (s$n84['uri'] = g1eu6p[l5ft9q || '']));
  }var ot957f = bkad2['indexOf'](':');ot957f > 0x0 ? (l5ft9q = ak$b['prefix'] = bkad2['slice'](0x0, ot957f), cm0y3r = ak$b['localName'] = bkad2['slice'](ot957f + 0x1)) : (l5ft9q = null, cm0y3r = ak$b['localName'] = bkad2);var v579 = ak$b['uri'] = g1eu6p[l5ft9q || ''];if (_8d$4['startElement'](v579, cm0y3r, bkad2, ak$b), !ak$b['closed']) return ak$b['currentNSMap'] = g1eu6p, ak$b['localNSMap'] = ql5zft, !0x0;if (_8d$4['endElement'](v579, cm0y3r, bkad2), ql5zft) {
    for (l5ft9q in ql5zft) _8d$4['endPrefixMapping'](l5ft9q);
  }
}function L9_$84d(icwm3r, f795ov, b2ahkj, xn4y, zlq) {
  if (/^(?:script|textarea)$/i['test'](b2ahkj)) {
    var x4s_n8 = icwm3r['indexOf']('</' + b2ahkj + '>', f795ov),
        hltq5z = icwm3r['substring'](f795ov + 0x1, x4s_n8);if (/[&<]/['test'](hltq5z)) return (/^script$/i['test'](b2ahkj) ? (zlq['characters'](hltq5z, 0x0, hltq5z['length']), x4s_n8) : (hltq5z = hltq5z['replace'](/&#?\w+;/g, xn4y), zlq['characters'](hltq5z, 0x0, hltq5z['length']), x4s_n8)
    );
  }return f795ov + 0x1;
}function L9veug(ad$sb, h5tqzl, y84nx, vg71) {
  var qf95l = vg71[y84nx];return null == qf95l && (qf95l = ad$sb['lastIndexOf']('</' + y84nx + '>'), h5tqzl > qf95l && (qf95l = ad$sb['lastIndexOf']('</' + y84nx)), vg71[y84nx] = qf95l), h5tqzl > qf95l;
}function L9cx30r(ds$48, y_nx30) {
  for (var ofv91 in ds$48) y_nx30[ofv91] = ds$48[ofv91];
}function L9$akdb(cri3m, pge1u, v957o, o9f5v7) {
  var bdj2ka = cri3m['charAt'](pge1u + 0x2);switch (bdj2ka) {case '-':
      if ('-' === cri3m['charAt'](pge1u + 0x3)) {
        var e97vo1 = cri3m['indexOf']('-->', pge1u + 0x4);return e97vo1 > pge1u ? (v957o['comment'](cri3m, pge1u + 0x4, e97vo1 - pge1u - 0x4), e97vo1 + 0x3) : (o9f5v7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cri3m['substr'](pge1u + 0x3, 0x6)) {
        var e97vo1 = cri3m['indexOf'](']]>', pge1u + 0x9);return v957o['startCDATA'](), v957o['characters'](cri3m, pge1u + 0x9, e97vo1 - pge1u - 0x9), v957o['endCDATA'](), e97vo1 + 0x3;
      }var ajzhk = L9zhljt(cri3m, pge1u),
          hba2 = ajzhk['length'];if (hba2 > 0x1 && /!doctype/i['test'](ajzhk[0x0][0x0])) {
        var n_y40x = ajzhk[0x1][0x0],
            ab$2 = hba2 > 0x3 && /^public$/i['test'](ajzhk[0x2][0x0]) && ajzhk[0x3][0x0],
            y3crm = hba2 > 0x4 && ajzhk[0x4][0x0],
            ba2d$s = ajzhk[hba2 - 0x1];return v957o['startDTD'](n_y40x, ab$2 && ab$2['replace'](/^(['"])(.*?)\1$/, '$2'), y3crm && y3crm['replace'](/^(['"])(.*?)\1$/, '$2')), v957o['endDTD'](), ba2d$s['index'] + ba2d$s[0x0]['length'];
      }}return -0x1;
}function L9gp16u(ovg7e, tl5qh, kja2b) {
  var ve719 = ovg7e['indexOf']('?>', tl5qh);if (ve719) {
    var n0y3_ = ovg7e['substring'](tl5qh, ve719)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (n0y3_) {
      {
        n0y3_[0x0]['length'];
      }return kja2b['processingInstruction'](n0y3_[0x1], n0y3_[0x2]), ve719 + 0x2;
    }return -0x1;
  }return -0x1;
}function L9ot9f75() {}function L9s$8bd(uvg17, jaqhzk) {
  return uvg17['__proto__'] = jaqhzk, uvg17;
}function L9zhljt(lhqzjk, v9o5f7) {
  var jtzhl,
      qtlh = [],
      d2akbj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (d2akbj['lastIndex'] = v9o5f7, d2akbj['exec'](lhqzjk); jtzhl = d2akbj['exec'](lhqzjk);) if (qtlh['push'](jtzhl), jtzhl[0x1]) return qtlh;
}var L9cymr03 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9jba2h = new RegExp('[\\-\\.0-9' + L9cymr03['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9ajqkz = new RegExp('^' + L9cymr03['source'] + L9jba2h['source'] + '*(?::' + L9cymr03['source'] + L9jba2h['source'] + '*)?$'),
    L9zqltj = 0x0,
    L9vgu7e1 = 0x1,
    L9x3n_ = 0x2,
    L9_yx = 0x3,
    L9$adkb = 0x4,
    L9eugp16 = 0x5,
    L9jzkb = 0x6,
    L9gu16pe = 0x7;L9i3rc0m['prototype'] = { 'parse': function (jdk2ab, x_0y3, khabzj) {
    var hzkbj = this['domBuilder'];hzkbj['startDocument'](), L9cx30r(x_0y3, x_0y3 = {}), L9sbd$8(jdk2ab, x_0y3, khabzj, hzkbj, this['errorHandler']), hzkbj['endDocument']();
  } }, L9ot9f75['prototype'] = { 'setTagName': function (b2$sa) {
    if (!L9ajqkz['test'](b2$sa)) throw new Error('invalid tagName:' + b2$sa);this['tagName'] = b2$sa;
  }, 'add': function (hkzab, ab2$, ov7eg) {
    if (!L9ajqkz['test'](hkzab)) throw new Error('invalid attribute:' + hkzab);this[this['length']++] = { 'qName': hkzab, 'value': ab2$, 'offset': ov7eg };
  }, 'length': 0x0, 'getLocalName': function (b2kd$a) {
    return this[b2kd$a]['localName'];
  }, 'getLocator': function (vo71eg) {
    return this[vo71eg]['locator'];
  }, 'getQName': function (y0c3m) {
    return this[y0c3m]['qName'];
  }, 'getURI': function (ev7g) {
    return this[ev7g]['uri'];
  }, 'getValue': function ($sb28d) {
    return this[$sb28d]['value'];
  } }, L9s$8bd({}, L9s$8bd['prototype']) instanceof L9s$8bd || (L9s$8bd = function (ba2ds$, zflqt) {
  function qjkhzl() {}qjkhzl['prototype'] = zflqt, qjkhzl = new qjkhzl();for (zflqt in ba2ds$) qjkhzl[zflqt] = ba2ds$[zflqt];return qjkhzl;
}), exports['XMLReader'] = L9i3rc0m;