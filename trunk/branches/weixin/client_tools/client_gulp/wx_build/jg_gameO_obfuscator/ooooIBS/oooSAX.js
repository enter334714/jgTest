var c = wx.$o;
function o_$0jke() {}function o_m7st(il, _y0uk, nu_ke, _l3nu, d63lv) {
  function ghbo8z(id1a2) {
    var lia2 = id1a2['slice'](0x1, -0x1);return lia2 in nu_ke ? nu_ke[lia2] : '#' === lia2['charAt'](0x0) ? 0xffff < (lia2 = parseInt(lia2['substr'](0x1)['replace']('x', '0x'))) ? (lia2 -= 0x10000, String['fromCharCode'](0xd800 + (lia2 >> 0xa), 0xdc00 + (0x3ff & lia2))) : String['fromCharCode'](lia2) : (d63lv['error']('entity not found:' + id1a2), id1a2);
  }function l3vua(czb8oh) {
    var vnu3l;ejy$ < czb8oh && (vnu3l = il['substring'](ejy$, czb8oh)['replace'](/&#?\w+;/g, ghbo8z), xobgh4 && x9w14f(ejy$), _l3nu['characters'](vnu3l, 0x0, czb8oh - ejy$), ejy$ = czb8oh);
  }function x9w14f(ghob4, oxf9g) {
    for (; stm5rq <= ghob4 && (oxf9g = u0_ky['exec'](il));) p8hzc = oxf9g['index'], stm5rq = p8hzc + oxf9g[0x0]['length'], xobgh4['lineNumber']++;xobgh4['columnNumber'] = ghob4 - p8hzc + 0x1;
  }for (var p8hzc = 0x0, stm5rq = 0x0, u0_ky = /.*(?:\r\n?|\n)|.*$/g, xobgh4 = _l3nu['locator'], v3l6an = [{ 'currentNSMap': _y0uk }], n3_l = {}, ejy$ = 0x0;;) {
    try {
      var yke_ = il['indexOf']('<', ejy$),
          gh4bxo,
          a6vdl3;if (yke_ < 0x0) return void (il['substr'](ejy$)['match'](/^\s*$/) || (a6vdl3 = (gh4bxo = _l3nu['doc'])['createTextNode'](il['substr'](ejy$)), gh4bxo['appendChild'](a6vdl3), _l3nu['currentElement'] = a6vdl3));switch (ejy$ < yke_ && l3vua(yke_), il['charAt'](yke_ + 0x1)) {case '/':
          var iwf1x = il['indexOf']('>', yke_ + 0x3),
              zmpr8 = il['substring'](yke_ + 0x2, iwf1x),
              ghbo = v3l6an['pop']();iwf1x < 0x0 ? (zmpr8 = il['substring'](yke_ + 0x2)['replace'](/[\s<].*/, ''), d63lv['error']('end tag name: ' + zmpr8 + ' is not complete:' + ghbo['tagName']), iwf1x = yke_ + 0x1 + zmpr8['length']) : zmpr8['match'](/\s</) && (zmpr8 = zmpr8['replace'](/[\s<].*/, ''), d63lv['error']('end tag name: ' + zmpr8 + ' maybe not complete'), iwf1x = yke_ + 0x1 + zmpr8['length']);var xg4w9f = ghbo['localNSMap'],
              x91iw = ghbo['tagName'] == zmpr8;if (x91iw || ghbo['tagName'] && ghbo['tagName']['toLowerCase']() == zmpr8['toLowerCase']()) {
            if (_l3nu['endElement'](ghbo['uri'], ghbo['localName'], zmpr8), xg4w9f) {
              for (var z8rhc in xg4w9f) _l3nu['endPrefixMapping'](z8rhc);
            }x91iw || d63lv['fatalError']('end tag name: ' + zmpr8 + ' is not match the current start tagName:' + ghbo['tagName']);
          } else v3l6an['push'](ghbo);iwf1x++;break;case '?':
          xobgh4 && x9w14f(yke_), iwf1x = o__unyke(il, yke_, _l3nu);break;case '!':
          xobgh4 && x9w14f(yke_), iwf1x = o_oz8ch(il, yke_, _l3nu, d63lv);break;default:
          xobgh4 && x9w14f(yke_);var cmzr = new o_m5tcp(),
              nye_3 = v3l6an[v3l6an['length'] - 0x1]['currentNSMap'],
              iwf1x = o_ai16d2(il, yke_, cmzr, nye_3, ghbo8z, d63lv),
              nlu3va = cmzr['length'];if (!cmzr['closed'] && o_c8bhz(il, iwf1x, cmzr['tagName'], n3_l) && (cmzr['closed'] = !0x0, nu_ke['nbsp'] || d63lv['warning']('unclosed xml attribute')), xobgh4 && nlu3va) {
            for (var adl6v = o_hzbgo(xobgh4, {}), a2dvl6 = 0x0; a2dvl6 < nlu3va; a2dvl6++) {
              var anluv = cmzr[a2dvl6];x9w14f(anluv['offset']), anluv['locator'] = o_hzbgo(xobgh4, {});
            }_l3nu['locator'] = adl6v, o_va6(cmzr, _l3nu, nye_3) && v3l6an['push'](cmzr), _l3nu['locator'] = xobgh4;
          } else o_va6(cmzr, _l3nu, nye_3) && v3l6an['push'](cmzr);'http://www.w3.org/1999/xhtml' !== cmzr['uri'] || cmzr['closed'] ? iwf1x++ : iwf1x = o_rtmq(il, iwf1x, cmzr['tagName'], ghbo8z, _l3nu);}
    } catch (pcr5tm) {
      d63lv['error']('element parse error: ' + pcr5tm), iwf1x = -0x1;
    }ejy$ < iwf1x ? ejy$ = iwf1x : l3vua(Math['max'](yke_, ejy$) + 0x1);
  }
}function o_hzbgo(n3uavl, v2adl) {
  return v2adl['lineNumber'] = n3uavl['lineNumber'], v2adl['columnNumber'] = n3uavl['columnNumber'], v2adl;
}function o_ai16d2(ye_k0u, zb8coh, u3_vnl, xf91, e_ynku, u3y_en) {
  for (var q5tmrs, zho4bg = ++zb8coh, bho8z = o_iw1f9x;;) {
    var zgob8h = ye_k0u['charAt'](zho4bg);switch (zgob8h) {case '=':
        if (bho8z === o_tr5cp) q5tmrs = ye_k0u['slice'](zb8coh, zho4bg), bho8z = o_h8zg;else {
          if (bho8z !== o_gxf4o9) throw new Error('attribute equal must after attrName');bho8z = o_h8zg;
        }break;case '\x27':case '\x22':
        if (bho8z === o_h8zg || bho8z === o_tr5cp) {
          if (bho8z === o_tr5cp && (u3y_en['warning']('attribute value must after "="'), q5tmrs = ye_k0u['slice'](zb8coh, zho4bg)), !(0x0 < (zho4bg = ye_k0u['indexOf'](zgob8h, zb8coh = zho4bg + 0x1)))) throw new Error('attribute value no end \'' + zgob8h + '\' match');hpzc = ye_k0u['slice'](zb8coh, zho4bg)['replace'](/&#?\w+;/g, e_ynku), u3_vnl['add'](q5tmrs, hpzc, zb8coh - 0x1), bho8z = o_$e_k0y;
        } else {
          if (bho8z != o_di6l) throw new Error('attribute value must after "="');hpzc = ye_k0u['slice'](zb8coh, zho4bg)['replace'](/&#?\w+;/g, e_ynku), u3_vnl['add'](q5tmrs, hpzc, zb8coh), u3y_en['warning']('attribute "' + q5tmrs + '" missed start quot(' + zgob8h + ')!!'), zb8coh = zho4bg + 0x1, bho8z = o_$e_k0y;
        }break;case '/':
        switch (bho8z) {case o_iw1f9x:
            u3_vnl['setTagName'](ye_k0u['slice'](zb8coh, zho4bg));case o_$e_k0y:case o_a3l6:case o_hcz8r:
            bho8z = o_hcz8r, u3_vnl['closed'] = !0x0;case o_di6l:case o_tr5cp:case o_gxf4o9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return u3y_en['error']('unexpected end of input'), bho8z == o_iw1f9x && u3_vnl['setTagName'](ye_k0u['slice'](zb8coh, zho4bg)), zho4bg;case '>':
        switch (bho8z) {case o_iw1f9x:
            u3_vnl['setTagName'](ye_k0u['slice'](zb8coh, zho4bg));case o_$e_k0y:case o_a3l6:case o_hcz8r:
            break;case o_di6l:case o_tr5cp:
            '/' === (hpzc = ye_k0u['slice'](zb8coh, zho4bg))['slice'](-0x1) && (u3_vnl['closed'] = !0x0, hpzc = hpzc['slice'](0x0, -0x1));case o_gxf4o9:
            bho8z === o_gxf4o9 && (hpzc = q5tmrs), bho8z == o_di6l ? (u3y_en['warning']('attribute "' + hpzc + '" missed quot(")!!'), u3_vnl['add'](q5tmrs, hpzc['replace'](/&#?\w+;/g, e_ynku), zb8coh)) : ('http://www.w3.org/1999/xhtml' === xf91[''] && hpzc['match'](/^(?:disabled|checked|selected)$/i) || u3y_en['warning']('attribute "' + hpzc + '" missed value!! "' + hpzc + '" instead!!'), u3_vnl['add'](hpzc, hpzc, zb8coh));break;case o_h8zg:
            throw new Error('attribute value missed!!');}return zho4bg;case '\u0080':
        zgob8h = '\x20';default:
        if (zgob8h <= '\x20') switch (bho8z) {case o_iw1f9x:
            u3_vnl['setTagName'](ye_k0u['slice'](zb8coh, zho4bg)), bho8z = o_a3l6;break;case o_tr5cp:
            q5tmrs = ye_k0u['slice'](zb8coh, zho4bg), bho8z = o_gxf4o9;break;case o_di6l:
            var hpzc = ye_k0u['slice'](zb8coh, zho4bg)['replace'](/&#?\w+;/g, e_ynku);u3y_en['warning']('attribute "' + hpzc + '" missed quot(")!!'), u3_vnl['add'](q5tmrs, hpzc, zb8coh);case o_$e_k0y:
            bho8z = o_a3l6;} else switch (bho8z) {case o_gxf4o9:
            u3_vnl['tagName'], 'http://www.w3.org/1999/xhtml' === xf91[''] && q5tmrs['match'](/^(?:disabled|checked|selected)$/i) || u3y_en['warning']('attribute "' + q5tmrs + '" missed value!! "' + q5tmrs + '" instead2!!'), u3_vnl['add'](q5tmrs, q5tmrs, zb8coh), zb8coh = zho4bg, bho8z = o_tr5cp;break;case o_$e_k0y:
            u3y_en['warning']('attribute space is required"' + q5tmrs + '\x22!!');case o_a3l6:
            bho8z = o_tr5cp, zb8coh = zho4bg;break;case o_h8zg:
            bho8z = o_di6l, zb8coh = zho4bg;break;case o_hcz8r:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zho4bg++;
  }
}function o_va6(pcmtr, cmzpr8, f9w12) {
  for (var xfg4w = pcmtr['tagName'], yuk_ = null, w1d2i6 = pcmtr['length']; w1d2i6--;) {
    var tq5rms = pcmtr[w1d2i6],
        r8m5c = tq5rms['qName'],
        s5rmq = tq5rms['value'],
        gho4zb;r8m5c = 0x0 < (fiw291 = r8m5c['indexOf'](':')) ? (n3lua = tq5rms['prefix'] = r8m5c['slice'](0x0, fiw291), gho4zb = r8m5c['slice'](fiw291 + 0x1), 'xmlns' === n3lua && gho4zb) : (n3lua = null, 'xmlns' === (gho4zb = r8m5c) && ''), tq5rms['localName'] = gho4zb, !0x1 !== r8m5c && (null == yuk_ && (yuk_ = {}, o_r8pmc5(f9w12, f9w12 = {})), f9w12[r8m5c] = yuk_[r8m5c] = s5rmq, tq5rms['uri'] = 'http://www.w3.org/2000/xmlns/', cmzpr8['startPrefixMapping'](r8m5c, s5rmq));
  }for (w1d2i6 = pcmtr['length']; w1d2i6--;) (n3lua = (tq5rms = pcmtr[w1d2i6])['prefix']) && ('xml' === n3lua && (tq5rms['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== n3lua && (tq5rms['uri'] = f9w12[n3lua || '']));var fiw291;gho4zb = 0x0 < (fiw291 = xfg4w['indexOf'](':')) ? (n3lua = pcmtr['prefix'] = xfg4w['slice'](0x0, fiw291), pcmtr['localName'] = xfg4w['slice'](fiw291 + 0x1)) : (n3lua = null, pcmtr['localName'] = xfg4w);var dvl2a6 = pcmtr['uri'] = f9w12[n3lua || ''];if (cmzpr8['startElement'](dvl2a6, gho4zb, xfg4w, pcmtr), !pcmtr['closed']) return pcmtr['currentNSMap'] = f9w12, pcmtr['localNSMap'] = yuk_, !0x0;if (cmzpr8['endElement'](dvl2a6, gho4zb, xfg4w), yuk_) {
    for (var n3lua in yuk_) cmzpr8['endPrefixMapping'](n3lua);
  }
}function o_rtmq(vy_3un, m5t7sq, w12i9, eyj$k, mcrp85) {
  if (/^(?:script|textarea)$/i['test'](w12i9)) {
    var _kye0 = vy_3un['indexOf']('</' + w12i9 + '>', m5t7sq),
        vy_3un = vy_3un['substring'](m5t7sq + 0x1, _kye0);if (/[&<]/['test'](vy_3un)) return (/^script$/i['test'](w12i9) || (vy_3un = vy_3un['replace'](/&#?\w+;/g, eyj$k)), mcrp85['characters'](vy_3un, 0x0, vy_3un['length']), _kye0
    );
  }return m5t7sq + 0x1;
}function o_c8bhz(a62dl, lunv, zr8ch, i21fwd) {
  var zpmr = i21fwd[zr8ch];return null == zpmr && ((zpmr = a62dl['lastIndexOf']('</' + zr8ch + '>')) < lunv && (zpmr = a62dl['lastIndexOf']('</' + zr8ch)), i21fwd[zr8ch] = zpmr), zpmr < lunv;
}function o_r8pmc5(xfw914, o4g9) {
  for (var kuen_y in xfw914) o4g9[kuen_y] = xfw914[kuen_y];
}function o_oz8ch(srmt, kjy0$e, ogb8hz, vdl36a) {
  var zo4hb = srmt['charAt'](kjy0$e + 0x2);if ('-' === zo4hb) return '-' !== srmt['charAt'](kjy0$e + 0x3) ? -0x1 : kjy0$e < (a6nv3 = srmt['indexOf']('-->', kjy0$e + 0x4)) ? (ogb8hz['comment'](srmt, kjy0$e + 0x4, a6nv3 - kjy0$e - 0x4), a6nv3 + 0x3) : (vdl36a['error']('Unclosed comment'), -0x1);if ('CDATA[' == srmt['substr'](kjy0$e + 0x3, 0x6)) {
    var a6nv3 = srmt['indexOf'](']]>', kjy0$e + 0x9);return ogb8hz['startCDATA'](), ogb8hz['characters'](srmt, kjy0$e + 0x9, a6nv3 - kjy0$e - 0x9), ogb8hz['endCDATA'](), a6nv3 + 0x3;
  }zo4hb = o_w91if(srmt, kjy0$e), vdl36a = zo4hb['length'];if (0x1 < vdl36a && /!doctype/i['test'](zo4hb[0x0][0x0])) return a6nv3 = zo4hb[0x1][0x0], srmt = 0x3 < vdl36a && /^public$/i['test'](zo4hb[0x2][0x0]) && zo4hb[0x3][0x0], kjy0$e = 0x4 < vdl36a && zo4hb[0x4][0x0], vdl36a = zo4hb[vdl36a - 0x1], (ogb8hz['startDTD'](a6nv3, srmt && srmt['replace'](/^(['"])(.*?)\1$/, '$2'), kjy0$e && kjy0$e['replace'](/^(['"])(.*?)\1$/, '$2')), ogb8hz['endDTD'](), vdl36a['index'] + vdl36a[0x0]['length']);return -0x1;
}function o__unyke(ejy0$k, i61a, u3) {
  var oghbz8 = ejy0$k['indexOf']('?>', i61a);if (oghbz8) return i61a = ejy0$k['substring'](i61a, oghbz8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), i61a ? (i61a[0x0]['length'], u3['processingInstruction'](i61a[0x1], i61a[0x2]), oghbz8 + 0x2) : -0x1;return -0x1;
}function o_m5tcp() {}function o_u3vn_y(d3v6al, v2lad6) {
  return d3v6al['__proto__'] = v2lad6, d3v6al;
}function o_w91if(xi9fw1, r8chzp) {
  var x9w1i,
      ifxw19 = [],
      z8hco = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (z8hco['lastIndex'] = r8chzp, z8hco['exec'](xi9fw1); x9w1i = z8hco['exec'](xi9fw1);) if (ifxw19['push'](x9w1i), x9w1i[0x1]) return ifxw19;
}var o_unvla3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_rmt5qp = new RegExp('[\\-\\.0-9' + o_unvla3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_gh4boz = new RegExp('^' + o_unvla3['source'] + o_rmt5qp['source'] + '*(?::' + o_unvla3['source'] + o_rmt5qp['source'] + '*)?$'),
    o_iw1f9x = 0x0,
    o_tr5cp = 0x1,
    o_gxf4o9 = 0x2,
    o_h8zg = 0x3,
    o_di6l = 0x4,
    o_$e_k0y = 0x5,
    o_a3l6 = 0x6,
    o_hcz8r = 0x7;o_$0jke['prototype'] = { 'parse': function (hcprz8, wfg9x, _e3nu) {
    var w12fi = this['domBuilder'];w12fi['startDocument'](), o_r8pmc5(wfg9x, wfg9x = {}), o_m7st(hcprz8, wfg9x, _e3nu, w12fi, this['errorHandler']), w12fi['endDocument']();
  } }, o_m5tcp['prototype'] = { 'setTagName': function (f4w91x) {
    if (!o_gh4boz['test'](f4w91x)) throw new Error('invalid tagName:' + f4w91x);this['tagName'] = f4w91x;
  }, 'add': function (zb4hog, f92w1, u3yv_n) {
    if (!o_gh4boz['test'](zb4hog)) throw new Error('invalid attribute:' + zb4hog);this[this['length']++] = { 'qName': zb4hog, 'value': f92w1, 'offset': u3yv_n };
  }, 'length': 0x0, 'getLocalName': function (p8rzhc) {
    return this[p8rzhc]['localName'];
  }, 'getLocator': function (dv3a6l) {
    return this[dv3a6l]['locator'];
  }, 'getQName': function (y$0e) {
    return this[y$0e]['qName'];
  }, 'getURI': function (qtrp5) {
    return this[qtrp5]['uri'];
  }, 'getValue': function (ghzo8b) {
    return this[ghzo8b]['value'];
  } }, o_u3vn_y({}, o_u3vn_y['prototype']) instanceof o_u3vn_y || (o_u3vn_y = function (ifw2, h8prc) {
  function rm5pt() {}for (h8prc in rm5pt['prototype'] = h8prc, rm5pt = new rm5pt(), ifw2) rm5pt[h8prc] = ifw2[h8prc];return rm5pt;
}), exports['XMLReader'] = o_$0jke;