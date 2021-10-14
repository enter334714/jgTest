var S = wx.$J;
function j1_bzeo() {}function j1_nx382(lbc91, cjlb, zobh09, muw7d, om0szd) {
  function n2_ax(z0ohd) {
    var $4ka5 = z0ohd['slice'](0x1, -0x1);return $4ka5 in zobh09 ? zobh09[$4ka5] : '#' === $4ka5['charAt'](0x0) ? 0xffff < ($4ka5 = parseInt($4ka5['substr'](0x1)['replace']('x', '0x'))) ? ($4ka5 -= 0x10000, String['fromCharCode'](0xd800 + ($4ka5 >> 0xa), 0xdc00 + (0x3ff & $4ka5))) : String['fromCharCode']($4ka5) : (om0szd['error']('entity not found:' + z0ohd), z0ohd);
  }function if3rqg(h9e) {
    var hdszo;muv < h9e && (hdszo = lbc91['substring'](muv, h9e)['replace'](/&#?\w+;/g, n2_ax), agxn && szh09(muv), muw7d['characters'](hdszo, 0x0, h9e - muv), muv = h9e);
  }function szh09(s0zo9h, $5ak_) {
    for (; na2x_$ <= s0zo9h && ($5ak_ = fg3ri8['exec'](lbc91));) md7vw = $5ak_['index'], na2x_$ = md7vw + $5ak_[0x0]['length'], agxn['lineNumber']++;agxn['columnNumber'] = s0zo9h - md7vw + 0x1;
  }for (var md7vw = 0x0, na2x_$ = 0x0, fg3ri8 = /.*(?:\r\n?|\n)|.*$/g, agxn = muw7d['locator'], y6rif = [{ 'currentNSMap': cjlb }], ej14 = {}, muv = 0x0;;) {
    try {
      var lcje1b = lbc91['indexOf']('<', muv),
          iy6tqr,
          zeb9ch;if (lcje1b < 0x0) return void (lbc91['substr'](muv)['match'](/^\s*$/) || (zeb9ch = (iy6tqr = muw7d['doc'])['createTextNode'](lbc91['substr'](muv)), iy6tqr['appendChild'](zeb9ch), muw7d['currentElement'] = zeb9ch));switch (muv < lcje1b && if3rqg(lcje1b), lbc91['charAt'](lcje1b + 0x1)) {case '/':
          var j_54k$ = lbc91['indexOf']('>', lcje1b + 0x3),
              h0oz = lbc91['substring'](lcje1b + 0x2, j_54k$),
              f38xg2 = y6rif['pop']();j_54k$ < 0x0 ? (h0oz = lbc91['substring'](lcje1b + 0x2)['replace'](/[\s<].*/, ''), om0szd['error']('end tag name: ' + h0oz + ' is not complete:' + f38xg2['tagName']), j_54k$ = lcje1b + 0x1 + h0oz['length']) : h0oz['match'](/\s</) && (h0oz = h0oz['replace'](/[\s<].*/, ''), om0szd['error']('end tag name: ' + h0oz + ' maybe not complete'), j_54k$ = lcje1b + 0x1 + h0oz['length']);var odmsu0 = f38xg2['localNSMap'],
              _8xn2 = f38xg2['tagName'] == h0oz;if (_8xn2 || f38xg2['tagName'] && f38xg2['tagName']['toLowerCase']() == h0oz['toLowerCase']()) {
            if (muw7d['endElement'](f38xg2['uri'], f38xg2['localName'], h0oz), odmsu0) {
              for (var uw in odmsu0) muw7d['endPrefixMapping'](uw);
            }_8xn2 || om0szd['fatalError']('end tag name: ' + h0oz + ' is not match the current start tagName:' + f38xg2['tagName']);
          } else y6rif['push'](f38xg2);j_54k$++;break;case '?':
          agxn && szh09(lcje1b), j_54k$ = j1_ce1bj(lbc91, lcje1b, muw7d);break;case '!':
          agxn && szh09(lcje1b), j_54k$ = j1__ka5(lbc91, lcje1b, muw7d, om0szd);break;default:
          agxn && szh09(lcje1b);var c4el1 = new j1_j4$5k_(),
              clbe19 = y6rif[y6rif['length'] - 0x1]['currentNSMap'],
              j_54k$ = j1_l5$(lbc91, lcje1b, c4el1, clbe19, n2_ax, om0szd),
              qriy = c4el1['length'];if (!c4el1['closed'] && j1_ifyr(lbc91, j_54k$, c4el1['tagName'], ej14) && (c4el1['closed'] = !0x0, zobh09['nbsp'] || om0szd['warning']('unclosed xml attribute')), agxn && qriy) {
            for (var lcb1ej = j1_a_k5n(agxn, {}), f3yqi = 0x0; f3yqi < qriy; f3yqi++) {
              var ejl = c4el1[f3yqi];szh09(ejl['offset']), ejl['locator'] = j1_a_k5n(agxn, {});
            }muw7d['locator'] = lcb1ej, j1_$4_ka5(c4el1, muw7d, clbe19) && y6rif['push'](c4el1), muw7d['locator'] = agxn;
          } else j1_$4_ka5(c4el1, muw7d, clbe19) && y6rif['push'](c4el1);'http://www.w3.org/1999/xhtml' !== c4el1['uri'] || c4el1['closed'] ? j_54k$++ : j_54k$ = j1_zsodh(lbc91, j_54k$, c4el1['tagName'], n2_ax, muw7d);}
    } catch (yfirq) {
      om0szd['error']('element parse error: ' + yfirq), j_54k$ = -0x1;
    }muv < j_54k$ ? muv = j_54k$ : if3rqg(Math['max'](lcje1b, muv) + 0x1);
  }
}function j1_a_k5n(bc1l9, rtq6iy) {
  return rtq6iy['lineNumber'] = bc1l9['lineNumber'], rtq6iy['columnNumber'] = bc1l9['columnNumber'], rtq6iy;
}function j1_l5$(dmo0s, ck41l, clb1e, x2ng, s7mvud, irqfy6) {
  for (var mzds0, x8ga2 = ++ck41l, n25 = j1_oeb9h;;) {
    var yqr6if = dmo0s['charAt'](x8ga2);switch (yqr6if) {case '=':
        if (n25 === j1_e19h) mzds0 = dmo0s['slice'](ck41l, x8ga2), n25 = j1_oumd0;else {
          if (n25 !== j1_rqfi3g) throw new Error('attribute equal must after attrName');n25 = j1_oumd0;
        }break;case '\x27':case '\x22':
        if (n25 === j1_oumd0 || n25 === j1_e19h) {
          if (n25 === j1_e19h && (irqfy6['warning']('attribute value must after "="'), mzds0 = dmo0s['slice'](ck41l, x8ga2)), !(0x0 < (x8ga2 = dmo0s['indexOf'](yqr6if, ck41l = x8ga2 + 0x1)))) throw new Error('attribute value no end \'' + yqr6if + '\' match');odz0hs = dmo0s['slice'](ck41l, x8ga2)['replace'](/&#?\w+;/g, s7mvud), clb1e['add'](mzds0, odz0hs, ck41l - 0x1), n25 = j1_p6r;
        } else {
          if (n25 != j1_zce9hb) throw new Error('attribute value must after "="');odz0hs = dmo0s['slice'](ck41l, x8ga2)['replace'](/&#?\w+;/g, s7mvud), clb1e['add'](mzds0, odz0hs, ck41l), irqfy6['warning']('attribute "' + mzds0 + '" missed start quot(' + yqr6if + ')!!'), ck41l = x8ga2 + 0x1, n25 = j1_p6r;
        }break;case '/':
        switch (n25) {case j1_oeb9h:
            clb1e['setTagName'](dmo0s['slice'](ck41l, x8ga2));case j1_p6r:case j1_hz9oe:case j1_g3ixf:
            n25 = j1_g3ixf, clb1e['closed'] = !0x0;case j1_zce9hb:case j1_e19h:case j1_rqfi3g:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return irqfy6['error']('unexpected end of input'), n25 == j1_oeb9h && clb1e['setTagName'](dmo0s['slice'](ck41l, x8ga2)), x8ga2;case '>':
        switch (n25) {case j1_oeb9h:
            clb1e['setTagName'](dmo0s['slice'](ck41l, x8ga2));case j1_p6r:case j1_hz9oe:case j1_g3ixf:
            break;case j1_zce9hb:case j1_e19h:
            '/' === (odz0hs = dmo0s['slice'](ck41l, x8ga2))['slice'](-0x1) && (clb1e['closed'] = !0x0, odz0hs = odz0hs['slice'](0x0, -0x1));case j1_rqfi3g:
            n25 === j1_rqfi3g && (odz0hs = mzds0), n25 == j1_zce9hb ? (irqfy6['warning']('attribute "' + odz0hs + '" missed quot(")!!'), clb1e['add'](mzds0, odz0hs['replace'](/&#?\w+;/g, s7mvud), ck41l)) : ('http://www.w3.org/1999/xhtml' === x2ng[''] && odz0hs['match'](/^(?:disabled|checked|selected)$/i) || irqfy6['warning']('attribute "' + odz0hs + '" missed value!! "' + odz0hs + '" instead!!'), clb1e['add'](odz0hs, odz0hs, ck41l));break;case j1_oumd0:
            throw new Error('attribute value missed!!');}return x8ga2;case '\u0080':
        yqr6if = '\x20';default:
        if (yqr6if <= '\x20') switch (n25) {case j1_oeb9h:
            clb1e['setTagName'](dmo0s['slice'](ck41l, x8ga2)), n25 = j1_hz9oe;break;case j1_e19h:
            mzds0 = dmo0s['slice'](ck41l, x8ga2), n25 = j1_rqfi3g;break;case j1_zce9hb:
            var odz0hs = dmo0s['slice'](ck41l, x8ga2)['replace'](/&#?\w+;/g, s7mvud);irqfy6['warning']('attribute "' + odz0hs + '" missed quot(")!!'), clb1e['add'](mzds0, odz0hs, ck41l);case j1_p6r:
            n25 = j1_hz9oe;} else switch (n25) {case j1_rqfi3g:
            clb1e['tagName'], 'http://www.w3.org/1999/xhtml' === x2ng[''] && mzds0['match'](/^(?:disabled|checked|selected)$/i) || irqfy6['warning']('attribute "' + mzds0 + '" missed value!! "' + mzds0 + '" instead2!!'), clb1e['add'](mzds0, mzds0, ck41l), ck41l = x8ga2, n25 = j1_e19h;break;case j1_p6r:
            irqfy6['warning']('attribute space is required"' + mzds0 + '\x22!!');case j1_hz9oe:
            n25 = j1_e19h, ck41l = x8ga2;break;case j1_oumd0:
            n25 = j1_zce9hb, ck41l = x8ga2;break;case j1_g3ixf:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}x8ga2++;
  }
}function j1_$4_ka5(ohsd0, an_x2, n382gx) {
  for (var tir = ohsd0['tagName'], ceb = null, kl1c4 = ohsd0['length']; kl1c4--;) {
    var ehbz9c = ohsd0[kl1c4],
        fxi = ehbz9c['qName'],
        hzeb9c = ehbz9c['value'],
        c4k1;fxi = 0x0 < (cbe19l = fxi['indexOf'](':')) ? (t6iy = ehbz9c['prefix'] = fxi['slice'](0x0, cbe19l), c4k1 = fxi['slice'](cbe19l + 0x1), 'xmlns' === t6iy && c4k1) : (t6iy = null, 'xmlns' === (c4k1 = fxi) && ''), ehbz9c['localName'] = c4k1, !0x1 !== fxi && (null == ceb && (ceb = {}, j1_hoe9bz(n382gx, n382gx = {})), n382gx[fxi] = ceb[fxi] = hzeb9c, ehbz9c['uri'] = 'http://www.w3.org/2000/xmlns/', an_x2['startPrefixMapping'](fxi, hzeb9c));
  }for (kl1c4 = ohsd0['length']; kl1c4--;) (t6iy = (ehbz9c = ohsd0[kl1c4])['prefix']) && ('xml' === t6iy && (ehbz9c['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== t6iy && (ehbz9c['uri'] = n382gx[t6iy || '']));var cbe19l;c4k1 = 0x0 < (cbe19l = tir['indexOf'](':')) ? (t6iy = ohsd0['prefix'] = tir['slice'](0x0, cbe19l), ohsd0['localName'] = tir['slice'](cbe19l + 0x1)) : (t6iy = null, ohsd0['localName'] = tir);var an2_x$ = ohsd0['uri'] = n382gx[t6iy || ''];if (an_x2['startElement'](an2_x$, c4k1, tir, ohsd0), !ohsd0['closed']) return ohsd0['currentNSMap'] = n382gx, ohsd0['localNSMap'] = ceb, !0x0;if (an_x2['endElement'](an2_x$, c4k1, tir), ceb) {
    for (var t6iy in ceb) an_x2['endPrefixMapping'](t6iy);
  }
}function j1_zsodh(szmd0, ytr6p, qifrg3, u7vdms, k4jl$5) {
  if (/^(?:script|textarea)$/i['test'](qifrg3)) {
    var yfri6q = szmd0['indexOf']('</' + qifrg3 + '>', ytr6p),
        szmd0 = szmd0['substring'](ytr6p + 0x1, yfri6q);if (/[&<]/['test'](szmd0)) return (/^script$/i['test'](qifrg3) || (szmd0 = szmd0['replace'](/&#?\w+;/g, u7vdms)), k4jl$5['characters'](szmd0, 0x0, szmd0['length']), yfri6q
    );
  }return ytr6p + 0x1;
}function j1_ifyr(h09boz, k_na, jc4e, xfig3) {
  var g2x38f = xfig3[jc4e];return null == g2x38f && ((g2x38f = h09boz['lastIndexOf']('</' + jc4e + '>')) < k_na && (g2x38f = h09boz['lastIndexOf']('</' + jc4e)), xfig3[jc4e] = g2x38f), g2x38f < k_na;
}function j1_hoe9bz(qytpr6, d0szh) {
  for (var n2_5a$ in qytpr6) d0szh[n2_5a$] = qytpr6[n2_5a$];
}function j1__ka5(a5n2_$, lejc1b, bh9zeo, h0szo9) {
  var fq6 = a5n2_$['charAt'](lejc1b + 0x2);if ('-' === fq6) return '-' !== a5n2_$['charAt'](lejc1b + 0x3) ? -0x1 : lejc1b < (axgn = a5n2_$['indexOf']('-->', lejc1b + 0x4)) ? (bh9zeo['comment'](a5n2_$, lejc1b + 0x4, axgn - lejc1b - 0x4), axgn + 0x3) : (h0szo9['error']('Unclosed comment'), -0x1);if ('CDATA[' == a5n2_$['substr'](lejc1b + 0x3, 0x6)) {
    var axgn = a5n2_$['indexOf'](']]>', lejc1b + 0x9);return bh9zeo['startCDATA'](), bh9zeo['characters'](a5n2_$, lejc1b + 0x9, axgn - lejc1b - 0x9), bh9zeo['endCDATA'](), axgn + 0x3;
  }fq6 = j1_kl$54(a5n2_$, lejc1b), h0szo9 = fq6['length'];if (0x1 < h0szo9 && /!doctype/i['test'](fq6[0x0][0x0])) return axgn = fq6[0x1][0x0], a5n2_$ = 0x3 < h0szo9 && /^public$/i['test'](fq6[0x2][0x0]) && fq6[0x3][0x0], lejc1b = 0x4 < h0szo9 && fq6[0x4][0x0], h0szo9 = fq6[h0szo9 - 0x1], (bh9zeo['startDTD'](axgn, a5n2_$ && a5n2_$['replace'](/^(['"])(.*?)\1$/, '$2'), lejc1b && lejc1b['replace'](/^(['"])(.*?)\1$/, '$2')), bh9zeo['endDTD'](), h0szo9['index'] + h0szo9[0x0]['length']);return -0x1;
}function j1_ce1bj(f8i3rg, xn$_a, ecjlb1) {
  var ifrg38 = f8i3rg['indexOf']('?>', xn$_a);if (ifrg38) return xn$_a = f8i3rg['substring'](xn$_a, ifrg38)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), xn$_a ? (xn$_a[0x0]['length'], ecjlb1['processingInstruction'](xn$_a[0x1], xn$_a[0x2]), ifrg38 + 0x2) : -0x1;return -0x1;
}function j1_j4$5k_() {}function j1_n8gx2a(fxg, a$_5k4) {
  return fxg['__proto__'] = a$_5k4, fxg;
}function j1_kl$54(n8ag2, zb9ho0) {
  var c1lj4,
      hz09s = [],
      $kj5_4 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($kj5_4['lastIndex'] = zb9ho0, $kj5_4['exec'](n8ag2); c1lj4 = $kj5_4['exec'](n8ag2);) if (hz09s['push'](c1lj4), c1lj4[0x1]) return hz09s;
}var j1_gf3xi8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_n2$a_ = new RegExp('[\\-\\.0-9' + j1_gf3xi8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_m7usd = new RegExp('^' + j1_gf3xi8['source'] + j1_n2$a_['source'] + '*(?::' + j1_gf3xi8['source'] + j1_n2$a_['source'] + '*)?$'),
    j1_oeb9h = 0x0,
    j1_e19h = 0x1,
    j1_rqfi3g = 0x2,
    j1_oumd0 = 0x3,
    j1_zce9hb = 0x4,
    j1_p6r = 0x5,
    j1_hz9oe = 0x6,
    j1_g3ixf = 0x7;j1_bzeo['prototype'] = { 'parse': function (x$a2n_, fgri8, s0zmd) {
    var suomd0 = this['domBuilder'];suomd0['startDocument'](), j1_hoe9bz(fgri8, fgri8 = {}), j1_nx382(x$a2n_, fgri8, s0zmd, suomd0, this['errorHandler']), suomd0['endDocument']();
  } }, j1_j4$5k_['prototype'] = { 'setTagName': function (qi6rty) {
    if (!j1_m7usd['test'](qi6rty)) throw new Error('invalid tagName:' + qi6rty);this['tagName'] = qi6rty;
  }, 'add': function (hec19b, ohs09z, u0smo) {
    if (!j1_m7usd['test'](hec19b)) throw new Error('invalid attribute:' + hec19b);this[this['length']++] = { 'qName': hec19b, 'value': ohs09z, 'offset': u0smo };
  }, 'length': 0x0, 'getLocalName': function (if6yr) {
    return this[if6yr]['localName'];
  }, 'getLocator': function (g8a2n) {
    return this[g8a2n]['locator'];
  }, 'getQName': function (svmu7) {
    return this[svmu7]['qName'];
  }, 'getURI': function (a_n5k$) {
    return this[a_n5k$]['uri'];
  }, 'getValue': function (xa2n$_) {
    return this[xa2n$_]['value'];
  } }, j1_n8gx2a({}, j1_n8gx2a['prototype']) instanceof j1_n8gx2a || (j1_n8gx2a = function (r3iqfg, $x2_an) {
  function $5a2() {}for ($x2_an in $5a2['prototype'] = $x2_an, $5a2 = new $5a2(), r3iqfg) $5a2[$x2_an] = r3iqfg[$x2_an];return $5a2;
}), exports['XMLReader'] = j1_bzeo;