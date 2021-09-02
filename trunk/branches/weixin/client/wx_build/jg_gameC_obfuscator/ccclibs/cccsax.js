var p = wx.$h;
function a_lgjs3o() {}function a_ejsz53(r9_m0yd, mr0h9d_, dl1h9t, dh1m0r9, ej3sog) {
  function xjgszb5(kz$p5bx) {
    var mrdh1 = kz$p5bx['slice'](0x1, -0x1);return mrdh1 in dl1h9t ? dl1h9t[mrdh1] : '#' === mrdh1['charAt'](0x0) ? 0xffff < (mrdh1 = parseInt(mrdh1['substr'](0x1)['replace']('x', '0x'))) ? (mrdh1 -= 0x10000, String['fromCharCode'](0xd800 + (mrdh1 >> 0xa), 0xdc00 + (0x3ff & mrdh1))) : String['fromCharCode'](mrdh1) : (ej3sog['error']('entity not found:' + kz$p5bx), kz$p5bx);
  }function ny_72v(hr_d09) {
    var o1l93h;loj3sg < hr_d09 && (o1l93h = r9_m0yd['substring'](loj3sg, hr_d09)['replace'](/&#?\w+;/g, xjgszb5), rmdy_2 && eolst(loj3sg), dh1m0r9['characters'](o1l93h, 0x0, hr_d09 - loj3sg), loj3sg = hr_d09);
  }function eolst(tho19, ny02v_r) {
    for (; mh1r9td <= tho19 && (ny02v_r = w7v86['exec'](r9_m0yd));) jbg5 = ny02v_r['index'], mh1r9td = jbg5 + ny02v_r[0x0]['length'], rmdy_2['lineNumber']++;rmdy_2['columnNumber'] = tho19 - jbg5 + 0x1;
  }for (var jbg5 = 0x0, mh1r9td = 0x0, w7v86 = /.*(?:\r\n?|\n)|.*$/g, rmdy_2 = dh1m0r9['locator'], d910rmh = [{ 'currentNSMap': mr0h9d_ }], fawiq4 = {}, loj3sg = 0x0;;) {
    try {
      var r20n_my = r9_m0yd['indexOf']('<', loj3sg),
          vyn287c,
          ol1te3h;if (r20n_my < 0x0) return void (r9_m0yd['substr'](loj3sg)['match'](/^\s*$/) || (ol1te3h = (vyn287c = dh1m0r9['doc'])['createTextNode'](r9_m0yd['substr'](loj3sg)), vyn287c['appendChild'](ol1te3h), dh1m0r9['currentElement'] = ol1te3h));switch (loj3sg < r20n_my && ny_72v(r20n_my), r9_m0yd['charAt'](r20n_my + 0x1)) {case '/':
          var d9_hm0 = r9_m0yd['indexOf']('>', r20n_my + 0x3),
              _dr9hm0 = r9_m0yd['substring'](r20n_my + 0x2, d9_hm0),
              n20v_y = d910rmh['pop']();d9_hm0 < 0x0 ? (_dr9hm0 = r9_m0yd['substring'](r20n_my + 0x2)['replace'](/[\s<].*/, ''), ej3sog['error']('end tag name: ' + _dr9hm0 + ' is not complete:' + n20v_y['tagName']), d9_hm0 = r20n_my + 0x1 + _dr9hm0['length']) : _dr9hm0['match'](/\s</) && (_dr9hm0 = _dr9hm0['replace'](/[\s<].*/, ''), ej3sog['error']('end tag name: ' + _dr9hm0 + ' maybe not complete'), d9_hm0 = r20n_my + 0x1 + _dr9hm0['length']);var oelj13 = n20v_y['localNSMap'],
              vy_2r = n20v_y['tagName'] == _dr9hm0;if (vy_2r || n20v_y['tagName'] && n20v_y['tagName']['toLowerCase']() == _dr9hm0['toLowerCase']()) {
            if (dh1m0r9['endElement'](n20v_y['uri'], n20v_y['localName'], _dr9hm0), oelj13) {
              for (var xzgsb5j in oelj13) dh1m0r9['endPrefixMapping'](xzgsb5j);
            }vy_2r || ej3sog['fatalError']('end tag name: ' + _dr9hm0 + ' is not match the current start tagName:' + n20v_y['tagName']);
          } else d910rmh['push'](n20v_y);d9_hm0++;break;case '?':
          rmdy_2 && eolst(r20n_my), d9_hm0 = a_gx(r9_m0yd, r20n_my, dh1m0r9);break;case '!':
          rmdy_2 && eolst(r20n_my), d9_hm0 = a_sez3jgo(r9_m0yd, r20n_my, dh1m0r9, ej3sog);break;default:
          rmdy_2 && eolst(r20n_my);var vn728yc = new a_v2y0n_r(),
              xsje5zg = d910rmh[d910rmh['length'] - 0x1]['currentNSMap'],
              d9_hm0 = a_t91drm(r9_m0yd, r20n_my, vn728yc, xsje5zg, xjgszb5, ej3sog),
              dht91lm = vn728yc['length'];if (!vn728yc['closed'] && a_s35ze(r9_m0yd, d9_hm0, vn728yc['tagName'], fawiq4) && (vn728yc['closed'] = !0x0, dl1h9t['nbsp'] || ej3sog['warning']('unclosed xml attribute')), rmdy_2 && dht91lm) {
            for (var gz5sjbx = a_y2nr0_m(rmdy_2, {}), zs5je = 0x0; zs5je < dht91lm; zs5je++) {
              var toh1l = vn728yc[zs5je];eolst(toh1l['offset']), toh1l['locator'] = a_y2nr0_m(rmdy_2, {});
            }dh1m0r9['locator'] = gz5sjbx, a_osg3ez(vn728yc, dh1m0r9, xsje5zg) && d910rmh['push'](vn728yc), dh1m0r9['locator'] = rmdy_2;
          } else a_osg3ez(vn728yc, dh1m0r9, xsje5zg) && d910rmh['push'](vn728yc);'http://www.w3.org/1999/xhtml' !== vn728yc['uri'] || vn728yc['closed'] ? d9_hm0++ : d9_hm0 = a_n72f8cv(r9_m0yd, d9_hm0, vn728yc['tagName'], xjgszb5, dh1m0r9);}
    } catch (mr_9yd) {
      ej3sog['error']('element parse error: ' + mr_9yd), d9_hm0 = -0x1;
    }loj3sg < d9_hm0 ? loj3sg = d9_hm0 : ny_72v(Math['max'](r20n_my, loj3sg) + 0x1);
  }
}function a_y2nr0_m(f4i6aw, n02v_r) {
  return n02v_r['lineNumber'] = f4i6aw['lineNumber'], n02v_r['columnNumber'] = f4i6aw['columnNumber'], n02v_r;
}function a_t91drm(v7wc6, ym_r20d, e1jlot3, ac6wi4, zsxb5gk, yr02_nv) {
  for (var k$b5zxp, zxsgb5k = ++ym_r20d, fciw6 = a_r0v2yn;;) {
    var bgs5kx = v7wc6['charAt'](zxsgb5k);switch (bgs5kx) {case '=':
        if (fciw6 === a_nmr2y0_) k$b5zxp = v7wc6['slice'](ym_r20d, zxsgb5k), fciw6 = a_m_dry2;else {
          if (fciw6 !== a_o13hlt9) throw new Error('attribute equal must after attrName');fciw6 = a_m_dry2;
        }break;case '\x27':case '\x22':
        if (fciw6 === a_m_dry2 || fciw6 === a_nmr2y0_) {
          if (fciw6 === a_nmr2y0_ && (yr02_nv['warning']('attribute value must after "="'), k$b5zxp = v7wc6['slice'](ym_r20d, zxsgb5k)), !(0x0 < (zxsgb5k = v7wc6['indexOf'](bgs5kx, ym_r20d = zxsgb5k + 0x1)))) throw new Error('attribute value no end \'' + bgs5kx + '\' match');md0ry_2 = v7wc6['slice'](ym_r20d, zxsgb5k)['replace'](/&#?\w+;/g, zsxb5gk), e1jlot3['add'](k$b5zxp, md0ry_2, ym_r20d - 0x1), fciw6 = a_wac4fi;
        } else {
          if (fciw6 != a_n8v2f) throw new Error('attribute value must after "="');md0ry_2 = v7wc6['slice'](ym_r20d, zxsgb5k)['replace'](/&#?\w+;/g, zsxb5gk), e1jlot3['add'](k$b5zxp, md0ry_2, ym_r20d), yr02_nv['warning']('attribute "' + k$b5zxp + '" missed start quot(' + bgs5kx + ')!!'), ym_r20d = zxsgb5k + 0x1, fciw6 = a_wac4fi;
        }break;case '/':
        switch (fciw6) {case a_r0v2yn:
            e1jlot3['setTagName'](v7wc6['slice'](ym_r20d, zxsgb5k));case a_wac4fi:case a_jegs35:case a_kp$5zx:
            fciw6 = a_kp$5zx, e1jlot3['closed'] = !0x0;case a_n8v2f:case a_nmr2y0_:case a_o13hlt9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yr02_nv['error']('unexpected end of input'), fciw6 == a_r0v2yn && e1jlot3['setTagName'](v7wc6['slice'](ym_r20d, zxsgb5k)), zxsgb5k;case '>':
        switch (fciw6) {case a_r0v2yn:
            e1jlot3['setTagName'](v7wc6['slice'](ym_r20d, zxsgb5k));case a_wac4fi:case a_jegs35:case a_kp$5zx:
            break;case a_n8v2f:case a_nmr2y0_:
            '/' === (md0ry_2 = v7wc6['slice'](ym_r20d, zxsgb5k))['slice'](-0x1) && (e1jlot3['closed'] = !0x0, md0ry_2 = md0ry_2['slice'](0x0, -0x1));case a_o13hlt9:
            fciw6 === a_o13hlt9 && (md0ry_2 = k$b5zxp), fciw6 == a_n8v2f ? (yr02_nv['warning']('attribute "' + md0ry_2 + '" missed quot(")!!'), e1jlot3['add'](k$b5zxp, md0ry_2['replace'](/&#?\w+;/g, zsxb5gk), ym_r20d)) : ('http://www.w3.org/1999/xhtml' === ac6wi4[''] && md0ry_2['match'](/^(?:disabled|checked|selected)$/i) || yr02_nv['warning']('attribute "' + md0ry_2 + '" missed value!! "' + md0ry_2 + '" instead!!'), e1jlot3['add'](md0ry_2, md0ry_2, ym_r20d));break;case a_m_dry2:
            throw new Error('attribute value missed!!');}return zxsgb5k;case '\u0080':
        bgs5kx = '\x20';default:
        if (bgs5kx <= '\x20') switch (fciw6) {case a_r0v2yn:
            e1jlot3['setTagName'](v7wc6['slice'](ym_r20d, zxsgb5k)), fciw6 = a_jegs35;break;case a_nmr2y0_:
            k$b5zxp = v7wc6['slice'](ym_r20d, zxsgb5k), fciw6 = a_o13hlt9;break;case a_n8v2f:
            var md0ry_2 = v7wc6['slice'](ym_r20d, zxsgb5k)['replace'](/&#?\w+;/g, zsxb5gk);yr02_nv['warning']('attribute "' + md0ry_2 + '" missed quot(")!!'), e1jlot3['add'](k$b5zxp, md0ry_2, ym_r20d);case a_wac4fi:
            fciw6 = a_jegs35;} else switch (fciw6) {case a_o13hlt9:
            e1jlot3['tagName'], 'http://www.w3.org/1999/xhtml' === ac6wi4[''] && k$b5zxp['match'](/^(?:disabled|checked|selected)$/i) || yr02_nv['warning']('attribute "' + k$b5zxp + '" missed value!! "' + k$b5zxp + '" instead2!!'), e1jlot3['add'](k$b5zxp, k$b5zxp, ym_r20d), ym_r20d = zxsgb5k, fciw6 = a_nmr2y0_;break;case a_wac4fi:
            yr02_nv['warning']('attribute space is required"' + k$b5zxp + '\x22!!');case a_jegs35:
            fciw6 = a_nmr2y0_, ym_r20d = zxsgb5k;break;case a_m_dry2:
            fciw6 = a_n8v2f, ym_r20d = zxsgb5k;break;case a_kp$5zx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zxsgb5k++;
  }
}function a_osg3ez(sj3oe, yr_m9, sbxjg) {
  for (var h13tol = sj3oe['tagName'], tdm1 = null, tdm91r = sj3oe['length']; tdm91r--;) {
    var nr_20vy = sj3oe[tdm91r],
        zkpx5$ = nr_20vy['qName'],
        h_r9m0 = nr_20vy['value'],
        n87fcvw;zkpx5$ = 0x0 < (vny782 = zkpx5$['indexOf'](':')) ? (_8vy7n2 = nr_20vy['prefix'] = zkpx5$['slice'](0x0, vny782), n87fcvw = zkpx5$['slice'](vny782 + 0x1), 'xmlns' === _8vy7n2 && n87fcvw) : (_8vy7n2 = null, 'xmlns' === (n87fcvw = zkpx5$) && ''), nr_20vy['localName'] = n87fcvw, !0x1 !== zkpx5$ && (null == tdm1 && (tdm1 = {}, a_dr09y_m(sbxjg, sbxjg = {})), sbxjg[zkpx5$] = tdm1[zkpx5$] = h_r9m0, nr_20vy['uri'] = 'http://www.w3.org/2000/xmlns/', yr_m9['startPrefixMapping'](zkpx5$, h_r9m0));
  }for (tdm91r = sj3oe['length']; tdm91r--;) (_8vy7n2 = (nr_20vy = sj3oe[tdm91r])['prefix']) && ('xml' === _8vy7n2 && (nr_20vy['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _8vy7n2 && (nr_20vy['uri'] = sbxjg[_8vy7n2 || '']));var vny782;n87fcvw = 0x0 < (vny782 = h13tol['indexOf'](':')) ? (_8vy7n2 = sj3oe['prefix'] = h13tol['slice'](0x0, vny782), sj3oe['localName'] = h13tol['slice'](vny782 + 0x1)) : (_8vy7n2 = null, sj3oe['localName'] = h13tol);var aw8c6f = sj3oe['uri'] = sbxjg[_8vy7n2 || ''];if (yr_m9['startElement'](aw8c6f, n87fcvw, h13tol, sj3oe), !sj3oe['closed']) return sj3oe['currentNSMap'] = sbxjg, sj3oe['localNSMap'] = tdm1, !0x0;if (yr_m9['endElement'](aw8c6f, n87fcvw, h13tol), tdm1) {
    for (var _8vy7n2 in tdm1) yr_m9['endPrefixMapping'](_8vy7n2);
  }
}function a_n72f8cv($kzpbx, my2nr, xj5sgez, _9y0d, bg5xjz) {
  if (/^(?:script|textarea)$/i['test'](xj5sgez)) {
    var nv287_y = $kzpbx['indexOf']('</' + xj5sgez + '>', my2nr),
        $kzpbx = $kzpbx['substring'](my2nr + 0x1, nv287_y);if (/[&<]/['test']($kzpbx)) return (/^script$/i['test'](xj5sgez) || ($kzpbx = $kzpbx['replace'](/&#?\w+;/g, _9y0d)), bg5xjz['characters']($kzpbx, 0x0, $kzpbx['length']), nv287_y
    );
  }return my2nr + 0x1;
}function a_s35ze(cyn27, $pzkx5, awq6, h3tel) {
  var goejzs = h3tel[awq6];return null == goejzs && ((goejzs = cyn27['lastIndexOf']('</' + awq6 + '>')) < $pzkx5 && (goejzs = cyn27['lastIndexOf']('</' + awq6)), h3tel[awq6] = goejzs), goejzs < $pzkx5;
}function a_dr09y_m(lgoe3j, kbg5sz) {
  for (var wf78c6v in lgoe3j) kbg5sz[wf78c6v] = lgoe3j[wf78c6v];
}function a_sez3jgo(joel13, xsej, dr20y, zbj) {
  var lmt91h = joel13['charAt'](xsej + 0x2);if ('-' === lmt91h) return '-' !== joel13['charAt'](xsej + 0x3) ? -0x1 : xsej < (d0yr_2 = joel13['indexOf']('-->', xsej + 0x4)) ? (dr20y['comment'](joel13, xsej + 0x4, d0yr_2 - xsej - 0x4), d0yr_2 + 0x3) : (zbj['error']('Unclosed comment'), -0x1);if ('CDATA[' == joel13['substr'](xsej + 0x3, 0x6)) {
    var d0yr_2 = joel13['indexOf'](']]>', xsej + 0x9);return dr20y['startCDATA'](), dr20y['characters'](joel13, xsej + 0x9, d0yr_2 - xsej - 0x9), dr20y['endCDATA'](), d0yr_2 + 0x3;
  }lmt91h = a_ejstol3(joel13, xsej), zbj = lmt91h['length'];if (0x1 < zbj && /!doctype/i['test'](lmt91h[0x0][0x0])) return d0yr_2 = lmt91h[0x1][0x0], joel13 = 0x3 < zbj && /^public$/i['test'](lmt91h[0x2][0x0]) && lmt91h[0x3][0x0], xsej = 0x4 < zbj && lmt91h[0x4][0x0], zbj = lmt91h[zbj - 0x1], (dr20y['startDTD'](d0yr_2, joel13 && joel13['replace'](/^(['"])(.*?)\1$/, '$2'), xsej && xsej['replace'](/^(['"])(.*?)\1$/, '$2')), dr20y['endDTD'](), zbj['index'] + zbj[0x0]['length']);return -0x1;
}function a_gx(gjsloe, jsoe, fnvw78c) {
  var zbx$pk5 = gjsloe['indexOf']('?>', jsoe);if (zbx$pk5) return jsoe = gjsloe['substring'](jsoe, zbx$pk5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), jsoe ? (jsoe[0x0]['length'], fnvw78c['processingInstruction'](jsoe[0x1], jsoe[0x2]), zbx$pk5 + 0x2) : -0x1;return -0x1;
}function a_v2y0n_r() {}function a_m0hdr(t3oelh, ejosgl) {
  return t3oelh['__proto__'] = ejosgl, t3oelh;
}function a_ejstol3(fc8v6w, hto1l9d) {
  var ej1lt3,
      dhr1t = [],
      je3szg5 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (je3szg5['lastIndex'] = hto1l9d, je3szg5['exec'](fc8v6w); ej1lt3 = je3szg5['exec'](fc8v6w);) if (dhr1t['push'](ej1lt3), ej1lt3[0x1]) return dhr1t;
}var a_p5zgkb = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_t1h3eo = new RegExp('[\\-\\.0-9' + a_p5zgkb['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_ldm9 = new RegExp('^' + a_p5zgkb['source'] + a_t1h3eo['source'] + '*(?::' + a_p5zgkb['source'] + a_t1h3eo['source'] + '*)?$'),
    a_r0v2yn = 0x0,
    a_nmr2y0_ = 0x1,
    a_o13hlt9 = 0x2,
    a_m_dry2 = 0x3,
    a_n8v2f = 0x4,
    a_wac4fi = 0x5,
    a_jegs35 = 0x6,
    a_kp$5zx = 0x7;a_lgjs3o['prototype'] = { 'parse': function (_2yrv0, lje31ot, cw6f) {
    var $kxp5bz = this['domBuilder'];$kxp5bz['startDocument'](), a_dr09y_m(lje31ot, lje31ot = {}), a_ejsz53(_2yrv0, lje31ot, cw6f, $kxp5bz, this['errorHandler']), $kxp5bz['endDocument']();
  } }, a_v2y0n_r['prototype'] = { 'setTagName': function (ia46cfw) {
    if (!a_ldm9['test'](ia46cfw)) throw new Error('invalid tagName:' + ia46cfw);this['tagName'] = ia46cfw;
  }, 'add': function (gkxs5b, gb5jzs, kx5$) {
    if (!a_ldm9['test'](gkxs5b)) throw new Error('invalid attribute:' + gkxs5b);this[this['length']++] = { 'qName': gkxs5b, 'value': gb5jzs, 'offset': kx5$ };
  }, 'length': 0x0, 'getLocalName': function (wi46q) {
    return this[wi46q]['localName'];
  }, 'getLocator': function (vr_y2n) {
    return this[vr_y2n]['locator'];
  }, 'getQName': function (sjelot) {
    return this[sjelot]['qName'];
  }, 'getURI': function (zbxp$) {
    return this[zbxp$]['uri'];
  }, 'getValue': function (wqfa4i) {
    return this[wqfa4i]['value'];
  } }, a_m0hdr({}, a_m0hdr['prototype']) instanceof a_m0hdr || (a_m0hdr = function (golsje3, b5jxzs) {
  function dmr01() {}for (b5jxzs in dmr01['prototype'] = b5jxzs, dmr01 = new dmr01(), golsje3) dmr01[b5jxzs] = golsje3[b5jxzs];return dmr01;
}), exports['XMLReader'] = a_lgjs3o;