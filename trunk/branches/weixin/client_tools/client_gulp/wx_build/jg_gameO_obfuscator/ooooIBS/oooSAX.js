var c = wx.$o;
function o_bgo4x9() {}function o_pct5rm(g94b, cpmtr, z8gbo, cmpr5, vnal36) {
  function en3uy(l36nv) {
    if (l36nv > 0xffff) {
      l36nv -= 0x10000;var ye0$_k = 0xd800 + (l36nv >> 0xa),
          f9x14 = 0xdc00 + (0x3ff & l36nv);return String['fromCharCode'](ye0$_k, f9x14);
    }return String['fromCharCode'](l36nv);
  }function rm(f9wix1) {
    var r8c5pm = f9wix1['slice'](0x1, -0x1);return r8c5pm in z8gbo ? z8gbo[r8c5pm] : '#' === r8c5pm['charAt'](0x0) ? en3uy(parseInt(r8c5pm['substr'](0x1)['replace']('x', '0x'))) : (vnal36['error']('entity not found:' + f9wix1), f9wix1);
  }function k0eu_y(i6wd1) {
    if (i6wd1 > nuvy3) {
      var li2a6 = g94b['substring'](nuvy3, i6wd1)['replace'](/&#?\w+;/g, rm);m8zr && f19i2w(nuvy3), cmpr5['characters'](li2a6, 0x0, i6wd1 - nuvy3), nuvy3 = i6wd1;
    }
  }function f19i2w(chr8p, prmq5) {
    for (; chr8p >= idl62 && (prmq5 = s75qt['exec'](g94b));) pc8rzm = prmq5['index'], idl62 = pc8rzm + prmq5[0x0]['length'], m8zr['lineNumber']++;m8zr['columnNumber'] = chr8p - pc8rzm + 0x1;
  }for (var pc8rzm = 0x0, idl62 = 0x0, s75qt = /.*(?:\r\n?|\n)|.*$/g, m8zr = cmpr5['locator'], ptmc5r = [{ 'currentNSMap': cpmtr }], xo9g4f = {}, nuvy3 = 0x0;;) {
    try {
      var lanv6 = g94b['indexOf']('<', nuvy3);if (0x0 > lanv6) {
        if (!g94b['substr'](nuvy3)['match'](/^\s*$/)) {
          var obg4hx = cmpr5['doc'],
              tp5rqm = obg4hx['createTextNode'](g94b['substr'](nuvy3));obg4hx['appendChild'](tp5rqm), cmpr5['currentElement'] = tp5rqm;
        }return;
      }switch (lanv6 > nuvy3 && k0eu_y(lanv6), g94b['charAt'](lanv6 + 0x1)) {case '/':
          var qtpr = g94b['indexOf']('>', lanv6 + 0x3),
              gxboh4 = g94b['substring'](lanv6 + 0x2, qtpr),
              fo94 = ptmc5r['pop']();0x0 > qtpr ? (gxboh4 = g94b['substring'](lanv6 + 0x2)['replace'](/[\s<].*/, ''), vnal36['error']('end tag name: ' + gxboh4 + ' is not complete:' + fo94['tagName']), qtpr = lanv6 + 0x1 + gxboh4['length']) : gxboh4['match'](/\s</) && (gxboh4 = gxboh4['replace'](/[\s<].*/, ''), vnal36['error']('end tag name: ' + gxboh4 + ' maybe not complete'), qtpr = lanv6 + 0x1 + gxboh4['length']);var yk0j = fo94['localNSMap'],
              yke_u = fo94['tagName'] == gxboh4,
              mc5tp = yke_u || fo94['tagName'] && fo94['tagName']['toLowerCase']() == gxboh4['toLowerCase']();if (mc5tp) {
            if (cmpr5['endElement'](fo94['uri'], fo94['localName'], gxboh4), yk0j) {
              for (var y3_vu in yk0j) cmpr5['endPrefixMapping'](y3_vu);
            }yke_u || vnal36['fatalError']('end tag name: ' + gxboh4 + ' is not match the current start tagName:' + fo94['tagName']);
          } else ptmc5r['push'](fo94);qtpr++;break;case '?':
          m8zr && f19i2w(lanv6), qtpr = o_iw21f(g94b, lanv6, cmpr5);break;case '!':
          m8zr && f19i2w(lanv6), qtpr = o_i6dl2a(g94b, lanv6, cmpr5, vnal36);break;default:
          m8zr && f19i2w(lanv6);var pcmr58 = new o_iw1d2(),
              cpzr8 = ptmc5r[ptmc5r['length'] - 0x1]['currentNSMap'],
              qtpr = o_rcpmt(g94b, lanv6, pcmr58, cpzr8, rm, vnal36),
              z8gho = pcmr58['length'];if (!pcmr58['closed'] && o_g4xfo9(g94b, qtpr, pcmr58['tagName'], xo9g4f) && (pcmr58['closed'] = !0x0, z8gbo['nbsp'] || vnal36['warning']('unclosed xml attribute')), m8zr && z8gho) {
            for (var zhob8 = o_bgho4z(m8zr, {}), ohbcz8 = 0x0; z8gho > ohbcz8; ohbcz8++) {
              var y3_eu = pcmr58[ohbcz8];f19i2w(y3_eu['offset']), y3_eu['locator'] = o_bgho4z(m8zr, {});
            }cmpr5['locator'] = zhob8, o_prtc5m(pcmr58, cmpr5, cpzr8) && ptmc5r['push'](pcmr58), cmpr5['locator'] = m8zr;
          } else o_prtc5m(pcmr58, cmpr5, cpzr8) && ptmc5r['push'](pcmr58);'http://www.w3.org/1999/xhtml' !== pcmr58['uri'] || pcmr58['closed'] ? qtpr++ : qtpr = o_d16i2w(g94b, qtpr, pcmr58['tagName'], rm, cmpr5);}
    } catch (pqmrt) {
      vnal36['error']('element parse error: ' + pqmrt), qtpr = -0x1;
    }qtpr > nuvy3 ? nuvy3 = qtpr : k0eu_y(Math['max'](lanv6, nuvy3) + 0x1);
  }
}function o_bgho4z(mrqpt, kye_u) {
  return kye_u['lineNumber'] = mrqpt['lineNumber'], kye_u['columnNumber'] = mrqpt['columnNumber'], kye_u;
}function o_rcpmt(n3yeu, uek0, n3vula, nla, _3yn, gox94) {
  for (var d2i1w6, cprtm5, w1fi29 = ++uek0, mcr8p = o_s5mqt7;;) {
    var i6ald2 = n3yeu['charAt'](w1fi29);switch (i6ald2) {case '=':
        if (mcr8p === o_yekn) d2i1w6 = n3yeu['slice'](uek0, w1fi29), mcr8p = o_p8zhbc;else {
          if (mcr8p !== o_d2v6a) throw new Error('attribute equal must after attrName');mcr8p = o_p8zhbc;
        }break;case '\x27':case '\x22':
        if (mcr8p === o_p8zhbc || mcr8p === o_yekn) {
          if (mcr8p === o_yekn && (gox94['warning']('attribute value must after "="'), d2i1w6 = n3yeu['slice'](uek0, w1fi29)), uek0 = w1fi29 + 0x1, w1fi29 = n3yeu['indexOf'](i6ald2, uek0), !(w1fi29 > 0x0)) throw new Error('attribute value no end \'' + i6ald2 + '\' match');cprtm5 = n3yeu['slice'](uek0, w1fi29)['replace'](/&#?\w+;/g, _3yn), n3vula['add'](d2i1w6, cprtm5, uek0 - 0x1), mcr8p = o_fw12i9;
        } else {
          if (mcr8p != o_rcpmz) throw new Error('attribute value must after "="');cprtm5 = n3yeu['slice'](uek0, w1fi29)['replace'](/&#?\w+;/g, _3yn), n3vula['add'](d2i1w6, cprtm5, uek0), gox94['warning']('attribute "' + d2i1w6 + '" missed start quot(' + i6ald2 + ')!!'), uek0 = w1fi29 + 0x1, mcr8p = o_fw12i9;
        }break;case '/':
        switch (mcr8p) {case o_s5mqt7:
            n3vula['setTagName'](n3yeu['slice'](uek0, w1fi29));case o_fw12i9:case o_gb49:case o_x9go4f:
            mcr8p = o_x9go4f, n3vula['closed'] = !0x0;case o_rcpmz:case o_yekn:case o_d2v6a:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gox94['error']('unexpected end of input'), mcr8p == o_s5mqt7 && n3vula['setTagName'](n3yeu['slice'](uek0, w1fi29)), w1fi29;case '>':
        switch (mcr8p) {case o_s5mqt7:
            n3vula['setTagName'](n3yeu['slice'](uek0, w1fi29));case o_fw12i9:case o_gb49:case o_x9go4f:
            break;case o_rcpmz:case o_yekn:
            cprtm5 = n3yeu['slice'](uek0, w1fi29), '/' === cprtm5['slice'](-0x1) && (n3vula['closed'] = !0x0, cprtm5 = cprtm5['slice'](0x0, -0x1));case o_d2v6a:
            mcr8p === o_d2v6a && (cprtm5 = d2i1w6), mcr8p == o_rcpmz ? (gox94['warning']('attribute "' + cprtm5 + '" missed quot(")!!'), n3vula['add'](d2i1w6, cprtm5['replace'](/&#?\w+;/g, _3yn), uek0)) : ('http://www.w3.org/1999/xhtml' === nla[''] && cprtm5['match'](/^(?:disabled|checked|selected)$/i) || gox94['warning']('attribute "' + cprtm5 + '" missed value!! "' + cprtm5 + '" instead!!'), n3vula['add'](cprtm5, cprtm5, uek0));break;case o_p8zhbc:
            throw new Error('attribute value missed!!');}return w1fi29;case '\u0080':
        i6ald2 = '\x20';default:
        if ('\x20' >= i6ald2) switch (mcr8p) {case o_s5mqt7:
            n3vula['setTagName'](n3yeu['slice'](uek0, w1fi29)), mcr8p = o_gb49;break;case o_yekn:
            d2i1w6 = n3yeu['slice'](uek0, w1fi29), mcr8p = o_d2v6a;break;case o_rcpmz:
            var cprtm5 = n3yeu['slice'](uek0, w1fi29)['replace'](/&#?\w+;/g, _3yn);gox94['warning']('attribute "' + cprtm5 + '" missed quot(")!!'), n3vula['add'](d2i1w6, cprtm5, uek0);case o_fw12i9:
            mcr8p = o_gb49;} else switch (mcr8p) {case o_d2v6a:
            {
              n3vula['tagName'];
            }'http://www.w3.org/1999/xhtml' === nla[''] && d2i1w6['match'](/^(?:disabled|checked|selected)$/i) || gox94['warning']('attribute "' + d2i1w6 + '" missed value!! "' + d2i1w6 + '" instead2!!'), n3vula['add'](d2i1w6, d2i1w6, uek0), uek0 = w1fi29, mcr8p = o_yekn;break;case o_fw12i9:
            gox94['warning']('attribute space is required"' + d2i1w6 + '\x22!!');case o_gb49:
            mcr8p = o_yekn, uek0 = w1fi29;break;case o_p8zhbc:
            mcr8p = o_rcpmz, uek0 = w1fi29;break;case o_x9go4f:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}w1fi29++;
  }
}function o_prtc5m(uan, crpmz8, l36vna) {
  for (var ul3av = uan['tagName'], v6ln3a = null, tcpmr5 = uan['length']; tcpmr5--;) {
    var _knuye = uan[tcpmr5],
        t5rcm = _knuye['qName'],
        _uyne3 = _knuye['value'],
        _kyneu = t5rcm['indexOf'](':');if (_kyneu > 0x0) var y$0jek = _knuye['prefix'] = t5rcm['slice'](0x0, _kyneu),
        lnv_ = t5rcm['slice'](_kyneu + 0x1),
        xo94bg = 'xmlns' === y$0jek && lnv_;else lnv_ = t5rcm, y$0jek = null, xo94bg = 'xmlns' === t5rcm && '';_knuye['localName'] = lnv_, xo94bg !== !0x1 && (null == v6ln3a && (v6ln3a = {}, o_ozhb8(l36vna, l36vna = {})), l36vna[xo94bg] = v6ln3a[xo94bg] = _uyne3, _knuye['uri'] = 'http://www.w3.org/2000/xmlns/', crpmz8['startPrefixMapping'](xo94bg, _uyne3));
  }for (var tcpmr5 = uan['length']; tcpmr5--;) {
    _knuye = uan[tcpmr5];var y$0jek = _knuye['prefix'];y$0jek && ('xml' === y$0jek && (_knuye['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== y$0jek && (_knuye['uri'] = l36vna[y$0jek || '']));
  }var _kyneu = ul3av['indexOf'](':');_kyneu > 0x0 ? (y$0jek = uan['prefix'] = ul3av['slice'](0x0, _kyneu), lnv_ = uan['localName'] = ul3av['slice'](_kyneu + 0x1)) : (y$0jek = null, lnv_ = uan['localName'] = ul3av);var z4ghob = uan['uri'] = l36vna[y$0jek || ''];if (crpmz8['startElement'](z4ghob, lnv_, ul3av, uan), !uan['closed']) return uan['currentNSMap'] = l36vna, uan['localNSMap'] = v6ln3a, !0x0;if (crpmz8['endElement'](z4ghob, lnv_, ul3av), v6ln3a) {
    for (y$0jek in v6ln3a) crpmz8['endPrefixMapping'](y$0jek);
  }
}function o_d16i2w(r58cmp, w1id, y_ekun, e0uy, k_nuye) {
  if (/^(?:script|textarea)$/i['test'](y_ekun)) {
    var fw491x = r58cmp['indexOf']('</' + y_ekun + '>', w1id),
        d6ai1 = r58cmp['substring'](w1id + 0x1, fw491x);if (/[&<]/['test'](d6ai1)) return (/^script$/i['test'](y_ekun) ? (k_nuye['characters'](d6ai1, 0x0, d6ai1['length']), fw491x) : (d6ai1 = d6ai1['replace'](/&#?\w+;/g, e0uy), k_nuye['characters'](d6ai1, 0x0, d6ai1['length']), fw491x)
    );
  }return w1id + 0x1;
}function o_g4xfo9(czbo, u3nlva, ozb8ch, f2d1wi) {
  var kue0y_ = f2d1wi[ozb8ch];return null == kue0y_ && (kue0y_ = czbo['lastIndexOf']('</' + ozb8ch + '>'), u3nlva > kue0y_ && (kue0y_ = czbo['lastIndexOf']('</' + ozb8ch)), f2d1wi[ozb8ch] = kue0y_), u3nlva > kue0y_;
}function o_ozhb8(d6a1, ne_y) {
  for (var lv_u3n in d6a1) ne_y[lv_u3n] = d6a1[lv_u3n];
}function o_i6dl2a(nauvl, zo8, la6vn3, f91x4) {
  var nu_key = nauvl['charAt'](zo8 + 0x2);switch (nu_key) {case '-':
      if ('-' === nauvl['charAt'](zo8 + 0x3)) {
        var s5mqr = nauvl['indexOf']('-->', zo8 + 0x4);return s5mqr > zo8 ? (la6vn3['comment'](nauvl, zo8 + 0x4, s5mqr - zo8 - 0x4), s5mqr + 0x3) : (f91x4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nauvl['substr'](zo8 + 0x3, 0x6)) {
        var s5mqr = nauvl['indexOf'](']]>', zo8 + 0x9);return la6vn3['startCDATA'](), la6vn3['characters'](nauvl, zo8 + 0x9, s5mqr - zo8 - 0x9), la6vn3['endCDATA'](), s5mqr + 0x3;
      }var da2 = o_k_e0y(nauvl, zo8),
          gob9 = da2['length'];if (gob9 > 0x1 && /!doctype/i['test'](da2[0x0][0x0])) {
        var gx4o9b = da2[0x1][0x0],
            la63v = gob9 > 0x3 && /^public$/i['test'](da2[0x2][0x0]) && da2[0x3][0x0],
            da61i = gob9 > 0x4 && da2[0x4][0x0],
            n36lav = da2[gob9 - 0x1];return la6vn3['startDTD'](gx4o9b, la63v && la63v['replace'](/^(['"])(.*?)\1$/, '$2'), da61i && da61i['replace'](/^(['"])(.*?)\1$/, '$2')), la6vn3['endDTD'](), n36lav['index'] + n36lav[0x0]['length'];
      }}return -0x1;
}function o_iw21f(u_v3nl, n_y3e, zbgo8h) {
  var adi2l = u_v3nl['indexOf']('?>', n_y3e);if (adi2l) {
    var y$jk0e = u_v3nl['substring'](n_y3e, adi2l)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (y$jk0e) {
      {
        y$jk0e[0x0]['length'];
      }return zbgo8h['processingInstruction'](y$jk0e[0x1], y$jk0e[0x2]), adi2l + 0x2;
    }return -0x1;
  }return -0x1;
}function o_iw1d2() {}function o_ye$j(lda62i, u3ny_v) {
  return lda62i['__proto__'] = u3ny_v, lda62i;
}function o_k_e0y(bczh8, fxg49) {
  var n3l6a,
      unek_y = [],
      bg49ox = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bg49ox['lastIndex'] = fxg49, bg49ox['exec'](bczh8); n3l6a = bg49ox['exec'](bczh8);) if (unek_y['push'](n3l6a), n3l6a[0x1]) return unek_y;
}var o__ue3y = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_z8hbcp = new RegExp('[\\-\\.0-9' + o__ue3y['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_f12d = new RegExp('^' + o__ue3y['source'] + o_z8hbcp['source'] + '*(?::' + o__ue3y['source'] + o_z8hbcp['source'] + '*)?$'),
    o_s5mqt7 = 0x0,
    o_yekn = 0x1,
    o_d2v6a = 0x2,
    o_p8zhbc = 0x3,
    o_rcpmz = 0x4,
    o_fw12i9 = 0x5,
    o_gb49 = 0x6,
    o_x9go4f = 0x7;o_bgo4x9['prototype'] = { 'parse': function (co8, vl3d6a, e$_) {
    var v3l6da = this['domBuilder'];v3l6da['startDocument'](), o_ozhb8(vl3d6a, vl3d6a = {}), o_pct5rm(co8, vl3d6a, e$_, v3l6da, this['errorHandler']), v3l6da['endDocument']();
  } }, o_iw1d2['prototype'] = { 'setTagName': function ($0key) {
    if (!o_f12d['test']($0key)) throw new Error('invalid tagName:' + $0key);this['tagName'] = $0key;
  }, 'add': function (ai162, fw9gx, wg9x4f) {
    if (!o_f12d['test'](ai162)) throw new Error('invalid attribute:' + ai162);this[this['length']++] = { 'qName': ai162, 'value': fw9gx, 'offset': wg9x4f };
  }, 'length': 0x0, 'getLocalName': function (f9gox) {
    return this[f9gox]['localName'];
  }, 'getLocator': function (ueky) {
    return this[ueky]['locator'];
  }, 'getQName': function (wif1x9) {
    return this[wif1x9]['qName'];
  }, 'getURI': function (cmtp5r) {
    return this[cmtp5r]['uri'];
  }, 'getValue': function (l3v6ad) {
    return this[l3v6ad]['value'];
  } }, o_ye$j({}, o_ye$j['prototype']) instanceof o_ye$j || (o_ye$j = function (o4xg9f, w1i2d) {
  function _uln() {}_uln['prototype'] = w1i2d, _uln = new _uln();for (w1i2d in o4xg9f) _uln[w1i2d] = o4xg9f[w1i2d];return _uln;
}), exports['XMLReader'] = o_bgo4x9;