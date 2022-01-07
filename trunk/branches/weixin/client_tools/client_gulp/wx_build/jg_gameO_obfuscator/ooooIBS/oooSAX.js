var c = wx.$o;
function o_o4zbg() {}function o_zcrph8(if2dw, anlvu, p5tcm, nyk_eu, pcmr8) {
  function z4hgb(z8hgbo) {
    if (z8hgbo > 0xffff) {
      z8hgbo -= 0x10000;var tqm57 = 0xd800 + (z8hgbo >> 0xa),
          ad3v6l = 0xdc00 + (0x3ff & z8hgbo);return String['fromCharCode'](tqm57, ad3v6l);
    }return String['fromCharCode'](z8hgbo);
  }function pzr8c(zpchb8) {
    var adli62 = zpchb8['slice'](0x1, -0x1);return adli62 in p5tcm ? p5tcm[adli62] : '#' === adli62['charAt'](0x0) ? z4hgb(parseInt(adli62['substr'](0x1)['replace']('x', '0x'))) : (pcmr8['error']('entity not found:' + zpchb8), zpchb8);
  }function uy3vn_(zobgh4) {
    if (zobgh4 > li2da) {
      var a6id2 = if2dw['substring'](li2da, zobgh4)['replace'](/&#?\w+;/g, pzr8c);b8coz && la62i(li2da), nyk_eu['characters'](a6id2, 0x0, zobgh4 - li2da), li2da = zobgh4;
    }
  }function la62i(tpcr5m, yk_neu) {
    for (; tpcr5m >= cmrtp && (yk_neu = i21a['exec'](if2dw));) w9fgx4 = yk_neu['index'], cmrtp = w9fgx4 + yk_neu[0x0]['length'], b8coz['lineNumber']++;b8coz['columnNumber'] = tpcr5m - w9fgx4 + 0x1;
  }for (var w9fgx4 = 0x0, cmrtp = 0x0, i21a = /.*(?:\r\n?|\n)|.*$/g, b8coz = nyk_eu['locator'], gbox94 = [{ 'currentNSMap': anlvu }], nv3au = {}, li2da = 0x0;;) {
    try {
      var y0_kue = if2dw['indexOf']('<', li2da);if (0x0 > y0_kue) {
        if (!if2dw['substr'](li2da)['match'](/^\s*$/)) {
          var e$_k0y = nyk_eu['doc'],
              wf4x = e$_k0y['createTextNode'](if2dw['substr'](li2da));e$_k0y['appendChild'](wf4x), nyk_eu['currentElement'] = wf4x;
        }return;
      }switch (y0_kue > li2da && uy3vn_(y0_kue), if2dw['charAt'](y0_kue + 0x1)) {case '/':
          var z8pmc = if2dw['indexOf']('>', y0_kue + 0x3),
              auvnl = if2dw['substring'](y0_kue + 0x2, z8pmc),
              x9f4o = gbox94['pop']();0x0 > z8pmc ? (auvnl = if2dw['substring'](y0_kue + 0x2)['replace'](/[\s<].*/, ''), pcmr8['error']('end tag name: ' + auvnl + ' is not complete:' + x9f4o['tagName']), z8pmc = y0_kue + 0x1 + auvnl['length']) : auvnl['match'](/\s</) && (auvnl = auvnl['replace'](/[\s<].*/, ''), pcmr8['error']('end tag name: ' + auvnl + ' maybe not complete'), z8pmc = y0_kue + 0x1 + auvnl['length']);var gbohx = x9f4o['localNSMap'],
              k_y0ue = x9f4o['tagName'] == auvnl,
              tq75m = k_y0ue || x9f4o['tagName'] && x9f4o['tagName']['toLowerCase']() == auvnl['toLowerCase']();if (tq75m) {
            if (nyk_eu['endElement'](x9f4o['uri'], x9f4o['localName'], auvnl), gbohx) {
              for (var ho4xgb in gbohx) nyk_eu['endPrefixMapping'](ho4xgb);
            }k_y0ue || pcmr8['fatalError']('end tag name: ' + auvnl + ' is not match the current start tagName:' + x9f4o['tagName']);
          } else gbox94['push'](x9f4o);z8pmc++;break;case '?':
          b8coz && la62i(y0_kue), z8pmc = o_p8zrh(if2dw, y0_kue, nyk_eu);break;case '!':
          b8coz && la62i(y0_kue), z8pmc = o_l3n_v(if2dw, y0_kue, nyk_eu, pcmr8);break;default:
          b8coz && la62i(y0_kue);var nuv_l = new o_$k0ye(),
              ct5rp = gbox94[gbox94['length'] - 0x1]['currentNSMap'],
              z8pmc = o_gbo4(if2dw, y0_kue, nuv_l, ct5rp, pzr8c, pcmr8),
              fd12wi = nuv_l['length'];if (!nuv_l['closed'] && o_zcprm8(if2dw, z8pmc, nuv_l['tagName'], nv3au) && (nuv_l['closed'] = !0x0, p5tcm['nbsp'] || pcmr8['warning']('unclosed xml attribute')), b8coz && fd12wi) {
            for (var f1d2 = o_eyu_k0(b8coz, {}), cpz8rh = 0x0; fd12wi > cpz8rh; cpz8rh++) {
              var q5pt = nuv_l[cpz8rh];la62i(q5pt['offset']), q5pt['locator'] = o_eyu_k0(b8coz, {});
            }nyk_eu['locator'] = f1d2, o_e3_y(nuv_l, nyk_eu, ct5rp) && gbox94['push'](nuv_l), nyk_eu['locator'] = b8coz;
          } else o_e3_y(nuv_l, nyk_eu, ct5rp) && gbox94['push'](nuv_l);'http://www.w3.org/1999/xhtml' !== nuv_l['uri'] || nuv_l['closed'] ? z8pmc++ : z8pmc = o_id21a6(if2dw, z8pmc, nuv_l['tagName'], pzr8c, nyk_eu);}
    } catch (k0eyj) {
      pcmr8['error']('element parse error: ' + k0eyj), z8pmc = -0x1;
    }z8pmc > li2da ? li2da = z8pmc : uy3vn_(Math['max'](y0_kue, li2da) + 0x1);
  }
}function o_eyu_k0(cr8mpz, d62v) {
  return d62v['lineNumber'] = cr8mpz['lineNumber'], d62v['columnNumber'] = cr8mpz['columnNumber'], d62v;
}function o_gbo4(o8hbc, pt5qmr, un_lv, w12i, qm5st, qs5rtm) {
  for (var fwdi21, rm5c8p, ky$e0 = ++pt5qmr, ph8bz = o_nv63la;;) {
    var luavn = o8hbc['charAt'](ky$e0);switch (luavn) {case '=':
        if (ph8bz === o_h4gbxo) fwdi21 = o8hbc['slice'](pt5qmr, ky$e0), ph8bz = o_zb4ohg;else {
          if (ph8bz !== o_m8czr) throw new Error('attribute equal must after attrName');ph8bz = o_zb4ohg;
        }break;case '\x27':case '\x22':
        if (ph8bz === o_zb4ohg || ph8bz === o_h4gbxo) {
          if (ph8bz === o_h4gbxo && (qs5rtm['warning']('attribute value must after "="'), fwdi21 = o8hbc['slice'](pt5qmr, ky$e0)), pt5qmr = ky$e0 + 0x1, ky$e0 = o8hbc['indexOf'](luavn, pt5qmr), !(ky$e0 > 0x0)) throw new Error('attribute value no end \'' + luavn + '\' match');rm5c8p = o8hbc['slice'](pt5qmr, ky$e0)['replace'](/&#?\w+;/g, qm5st), un_lv['add'](fwdi21, rm5c8p, pt5qmr - 0x1), ph8bz = o_zh4g;
        } else {
          if (ph8bz != o_k_ueny) throw new Error('attribute value must after "="');rm5c8p = o8hbc['slice'](pt5qmr, ky$e0)['replace'](/&#?\w+;/g, qm5st), un_lv['add'](fwdi21, rm5c8p, pt5qmr), qs5rtm['warning']('attribute "' + fwdi21 + '" missed start quot(' + luavn + ')!!'), pt5qmr = ky$e0 + 0x1, ph8bz = o_zh4g;
        }break;case '/':
        switch (ph8bz) {case o_nv63la:
            un_lv['setTagName'](o8hbc['slice'](pt5qmr, ky$e0));case o_zh4g:case o_ho4zb:case o_pc58r:
            ph8bz = o_pc58r, un_lv['closed'] = !0x0;case o_k_ueny:case o_h4gbxo:case o_m8czr:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qs5rtm['error']('unexpected end of input'), ph8bz == o_nv63la && un_lv['setTagName'](o8hbc['slice'](pt5qmr, ky$e0)), ky$e0;case '>':
        switch (ph8bz) {case o_nv63la:
            un_lv['setTagName'](o8hbc['slice'](pt5qmr, ky$e0));case o_zh4g:case o_ho4zb:case o_pc58r:
            break;case o_k_ueny:case o_h4gbxo:
            rm5c8p = o8hbc['slice'](pt5qmr, ky$e0), '/' === rm5c8p['slice'](-0x1) && (un_lv['closed'] = !0x0, rm5c8p = rm5c8p['slice'](0x0, -0x1));case o_m8czr:
            ph8bz === o_m8czr && (rm5c8p = fwdi21), ph8bz == o_k_ueny ? (qs5rtm['warning']('attribute "' + rm5c8p + '" missed quot(")!!'), un_lv['add'](fwdi21, rm5c8p['replace'](/&#?\w+;/g, qm5st), pt5qmr)) : ('http://www.w3.org/1999/xhtml' === w12i[''] && rm5c8p['match'](/^(?:disabled|checked|selected)$/i) || qs5rtm['warning']('attribute "' + rm5c8p + '" missed value!! "' + rm5c8p + '" instead!!'), un_lv['add'](rm5c8p, rm5c8p, pt5qmr));break;case o_zb4ohg:
            throw new Error('attribute value missed!!');}return ky$e0;case '\u0080':
        luavn = '\x20';default:
        if ('\x20' >= luavn) switch (ph8bz) {case o_nv63la:
            un_lv['setTagName'](o8hbc['slice'](pt5qmr, ky$e0)), ph8bz = o_ho4zb;break;case o_h4gbxo:
            fwdi21 = o8hbc['slice'](pt5qmr, ky$e0), ph8bz = o_m8czr;break;case o_k_ueny:
            var rm5c8p = o8hbc['slice'](pt5qmr, ky$e0)['replace'](/&#?\w+;/g, qm5st);qs5rtm['warning']('attribute "' + rm5c8p + '" missed quot(")!!'), un_lv['add'](fwdi21, rm5c8p, pt5qmr);case o_zh4g:
            ph8bz = o_ho4zb;} else switch (ph8bz) {case o_m8czr:
            {
              un_lv['tagName'];
            }'http://www.w3.org/1999/xhtml' === w12i[''] && fwdi21['match'](/^(?:disabled|checked|selected)$/i) || qs5rtm['warning']('attribute "' + fwdi21 + '" missed value!! "' + fwdi21 + '" instead2!!'), un_lv['add'](fwdi21, fwdi21, pt5qmr), pt5qmr = ky$e0, ph8bz = o_h4gbxo;break;case o_zh4g:
            qs5rtm['warning']('attribute space is required"' + fwdi21 + '\x22!!');case o_ho4zb:
            ph8bz = o_h4gbxo, pt5qmr = ky$e0;break;case o_zb4ohg:
            ph8bz = o_k_ueny, pt5qmr = ky$e0;break;case o_pc58r:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ky$e0++;
  }
}function o_e3_y(rm5t, mrpc58, rp8czh) {
  for (var k_uyn = rm5t['tagName'], trmpq = null, id126a = rm5t['length']; id126a--;) {
    var _yke$ = rm5t[id126a],
        vnau3l = _yke$['qName'],
        t5mrsq = _yke$['value'],
        d21ia = vnau3l['indexOf'](':');if (d21ia > 0x0) var g4zoh = _yke$['prefix'] = vnau3l['slice'](0x0, d21ia),
        x4wgf = vnau3l['slice'](d21ia + 0x1),
        n3ul_v = 'xmlns' === g4zoh && x4wgf;else x4wgf = vnau3l, g4zoh = null, n3ul_v = 'xmlns' === vnau3l && '';_yke$['localName'] = x4wgf, n3ul_v !== !0x1 && (null == trmpq && (trmpq = {}, o_nvl3u_(rp8czh, rp8czh = {})), rp8czh[n3ul_v] = trmpq[n3ul_v] = t5mrsq, _yke$['uri'] = 'http://www.w3.org/2000/xmlns/', mrpc58['startPrefixMapping'](n3ul_v, t5mrsq));
  }for (var id126a = rm5t['length']; id126a--;) {
    _yke$ = rm5t[id126a];var g4zoh = _yke$['prefix'];g4zoh && ('xml' === g4zoh && (_yke$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== g4zoh && (_yke$['uri'] = rp8czh[g4zoh || '']));
  }var d21ia = k_uyn['indexOf'](':');d21ia > 0x0 ? (g4zoh = rm5t['prefix'] = k_uyn['slice'](0x0, d21ia), x4wgf = rm5t['localName'] = k_uyn['slice'](d21ia + 0x1)) : (g4zoh = null, x4wgf = rm5t['localName'] = k_uyn);var ejk$y = rm5t['uri'] = rp8czh[g4zoh || ''];if (mrpc58['startElement'](ejk$y, x4wgf, k_uyn, rm5t), !rm5t['closed']) return rm5t['currentNSMap'] = rp8czh, rm5t['localNSMap'] = trmpq, !0x0;if (mrpc58['endElement'](ejk$y, x4wgf, k_uyn), trmpq) {
    for (g4zoh in trmpq) mrpc58['endPrefixMapping'](g4zoh);
  }
}function o_id21a6(ye$0_k, kue0y_, f9x1w4, cp58, u3yn) {
  if (/^(?:script|textarea)$/i['test'](f9x1w4)) {
    var valu3 = ye$0_k['indexOf']('</' + f9x1w4 + '>', kue0y_),
        zpc8r = ye$0_k['substring'](kue0y_ + 0x1, valu3);if (/[&<]/['test'](zpc8r)) return (/^script$/i['test'](f9x1w4) ? (u3yn['characters'](zpc8r, 0x0, zpc8r['length']), valu3) : (zpc8r = zpc8r['replace'](/&#?\w+;/g, cp58), u3yn['characters'](zpc8r, 0x0, zpc8r['length']), valu3)
    );
  }return kue0y_ + 0x1;
}function o_zcprm8(pmtc5, e_$y0, u3_e, rc5p8m) {
  var n_euy = rc5p8m[u3_e];return null == n_euy && (n_euy = pmtc5['lastIndexOf']('</' + u3_e + '>'), e_$y0 > n_euy && (n_euy = pmtc5['lastIndexOf']('</' + u3_e)), rc5p8m[u3_e] = n_euy), e_$y0 > n_euy;
}function o_nvl3u_(i16da2, c8pbzh) {
  for (var e_uyk in i16da2) c8pbzh[e_uyk] = i16da2[e_uyk];
}function o_l3n_v(ogb4zh, w49fx, $_0y, d21wfi) {
  var lnavu3 = ogb4zh['charAt'](w49fx + 0x2);switch (lnavu3) {case '-':
      if ('-' === ogb4zh['charAt'](w49fx + 0x3)) {
        var zbp8h = ogb4zh['indexOf']('-->', w49fx + 0x4);return zbp8h > w49fx ? ($_0y['comment'](ogb4zh, w49fx + 0x4, zbp8h - w49fx - 0x4), zbp8h + 0x3) : (d21wfi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ogb4zh['substr'](w49fx + 0x3, 0x6)) {
        var zbp8h = ogb4zh['indexOf'](']]>', w49fx + 0x9);return $_0y['startCDATA'](), $_0y['characters'](ogb4zh, w49fx + 0x9, zbp8h - w49fx - 0x9), $_0y['endCDATA'](), zbp8h + 0x3;
      }var ln3ua = o_a3l6n(ogb4zh, w49fx),
          bg4zh = ln3ua['length'];if (bg4zh > 0x1 && /!doctype/i['test'](ln3ua[0x0][0x0])) {
        var x4f = ln3ua[0x1][0x0],
            g4of = bg4zh > 0x3 && /^public$/i['test'](ln3ua[0x2][0x0]) && ln3ua[0x3][0x0],
            q7sm5t = bg4zh > 0x4 && ln3ua[0x4][0x0],
            d12ia6 = ln3ua[bg4zh - 0x1];return $_0y['startDTD'](x4f, g4of && g4of['replace'](/^(['"])(.*?)\1$/, '$2'), q7sm5t && q7sm5t['replace'](/^(['"])(.*?)\1$/, '$2')), $_0y['endDTD'](), d12ia6['index'] + d12ia6[0x0]['length'];
      }}return -0x1;
}function o_p8zrh(ifd21, auvn3, _ln3) {
  var qm5tr = ifd21['indexOf']('?>', auvn3);if (qm5tr) {
    var ynuv_3 = ifd21['substring'](auvn3, qm5tr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ynuv_3) {
      {
        ynuv_3[0x0]['length'];
      }return _ln3['processingInstruction'](ynuv_3[0x1], ynuv_3[0x2]), qm5tr + 0x2;
    }return -0x1;
  }return -0x1;
}function o_$k0ye() {}function o_ocz8b(wf9x1, rsm5tq) {
  return wf9x1['__proto__'] = rsm5tq, wf9x1;
}function o_a3l6n(r5tqs, r5smtq) {
  var iw62d1,
      i2w91f = [],
      unal3v = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (unal3v['lastIndex'] = r5smtq, unal3v['exec'](r5tqs); iw62d1 = unal3v['exec'](r5tqs);) if (i2w91f['push'](iw62d1), iw62d1[0x1]) return i2w91f;
}var o_ul_v = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_x49gf = new RegExp('[\\-\\.0-9' + o_ul_v['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_nyue_k = new RegExp('^' + o_ul_v['source'] + o_x49gf['source'] + '*(?::' + o_ul_v['source'] + o_x49gf['source'] + '*)?$'),
    o_nv63la = 0x0,
    o_h4gbxo = 0x1,
    o_m8czr = 0x2,
    o_zb4ohg = 0x3,
    o_k_ueny = 0x4,
    o_zh4g = 0x5,
    o_ho4zb = 0x6,
    o_pc58r = 0x7;o_o4zbg['prototype'] = { 'parse': function (_kyuen, _e3, w94) {
    var z4 = this['domBuilder'];z4['startDocument'](), o_nvl3u_(_e3, _e3 = {}), o_zcrph8(_kyuen, _e3, w94, z4, this['errorHandler']), z4['endDocument']();
  } }, o_$k0ye['prototype'] = { 'setTagName': function (og9b4) {
    if (!o_nyue_k['test'](og9b4)) throw new Error('invalid tagName:' + og9b4);this['tagName'] = og9b4;
  }, 'add': function (e0_, aulnv3, l6v3na) {
    if (!o_nyue_k['test'](e0_)) throw new Error('invalid attribute:' + e0_);this[this['length']++] = { 'qName': e0_, 'value': aulnv3, 'offset': l6v3na };
  }, 'length': 0x0, 'getLocalName': function (mq5ts) {
    return this[mq5ts]['localName'];
  }, 'getLocator': function (y3nv) {
    return this[y3nv]['locator'];
  }, 'getQName': function ($jeky) {
    return this[$jeky]['qName'];
  }, 'getURI': function (pmctr) {
    return this[pmctr]['uri'];
  }, 'getValue': function (kyne) {
    return this[kyne]['value'];
  } }, o_ocz8b({}, o_ocz8b['prototype']) instanceof o_ocz8b || (o_ocz8b = function (_y0$e, m7s5) {
  function mptrq5() {}mptrq5['prototype'] = m7s5, mptrq5 = new mptrq5();for (m7s5 in _y0$e) mptrq5[m7s5] = _y0$e[m7s5];return mptrq5;
}), exports['XMLReader'] = o_o4zbg;