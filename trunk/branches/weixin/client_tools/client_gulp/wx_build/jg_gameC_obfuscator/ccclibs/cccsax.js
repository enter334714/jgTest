var p = wx.$h;
function a_md5lcs() {}function a_g0kh6(jc5s1t, ms5cld, v_0gx2, _8g0kh, w4r) {
  function g02_v(c5lsm) {
    if (c5lsm > 0xffff) {
      c5lsm -= 0x10000;var h0v8_g = 0xd800 + (c5lsm >> 0xa),
          w4pna = 0xdc00 + (0x3ff & c5lsm);return String['fromCharCode'](h0v8_g, w4pna);
    }return String['fromCharCode'](c5lsm);
  }function y9boqz(g2_0xv) {
    var ye6$ = g2_0xv['slice'](0x1, -0x1);return ye6$ in v_0gx2 ? v_0gx2[ye6$] : '#' === ye6$['charAt'](0x0) ? g02_v(parseInt(ye6$['substr'](0x1)['replace']('x', '0x'))) : (w4r['error']('entity not found:' + g2_0xv), g2_0xv);
  }function c5sdm(y$eki6) {
    if (y$eki6 > g086h) {
      var a4wp7 = jc5s1t['substring'](g086h, y$eki6)['replace'](/&#?\w+;/g, y9boqz);v2x_ng && $ey(g086h), _8g0kh['characters'](a4wp7, 0x0, y$eki6 - g086h), g086h = y$eki6;
    }
  }function $ey(a74p3f, paf74) {
    for (; a74p3f >= ts1j5c && (paf74 = rnwp2a['exec'](jc5s1t));) _xn = paf74['index'], ts1j5c = _xn + paf74[0x0]['length'], v2x_ng['lineNumber']++;v2x_ng['columnNumber'] = a74p3f - _xn + 0x1;
  }for (var _xn = 0x0, ts1j5c = 0x0, rnwp2a = /.*(?:\r\n?|\n)|.*$/g, v2x_ng = _8g0kh['locator'], f374aj = [{ 'currentNSMap': ms5cld }], b$eiy = {}, g086h = 0x0;;) {
    try {
      var fa4p7 = jc5s1t['indexOf']('<', g086h);if (0x0 > fa4p7) {
        if (!jc5s1t['substr'](g086h)['match'](/^\s*$/)) {
          var pf3a47 = _8g0kh['doc'],
              xr2n_ = pf3a47['createTextNode'](jc5s1t['substr'](g086h));pf3a47['appendChild'](xr2n_), _8g0kh['currentElement'] = xr2n_;
        }return;
      }switch (fa4p7 > g086h && c5sdm(fa4p7), jc5s1t['charAt'](fa4p7 + 0x1)) {case '/':
          var t51ds = jc5s1t['indexOf']('>', fa4p7 + 0x3),
              msdc51 = jc5s1t['substring'](fa4p7 + 0x2, t51ds),
              x2_gv = f374aj['pop']();0x0 > t51ds ? (msdc51 = jc5s1t['substring'](fa4p7 + 0x2)['replace'](/[\s<].*/, ''), w4r['error']('end tag name: ' + msdc51 + ' is not complete:' + x2_gv['tagName']), t51ds = fa4p7 + 0x1 + msdc51['length']) : msdc51['match'](/\s</) && (msdc51 = msdc51['replace'](/[\s<].*/, ''), w4r['error']('end tag name: ' + msdc51 + ' maybe not complete'), t51ds = fa4p7 + 0x1 + msdc51['length']);var pa4wn = x2_gv['localNSMap'],
              yi6eb$ = x2_gv['tagName'] == msdc51,
              ob$iy = yi6eb$ || x2_gv['tagName'] && x2_gv['tagName']['toLowerCase']() == msdc51['toLowerCase']();if (ob$iy) {
            if (_8g0kh['endElement'](x2_gv['uri'], x2_gv['localName'], msdc51), pa4wn) {
              for (var iobyz in pa4wn) _8g0kh['endPrefixMapping'](iobyz);
            }yi6eb$ || w4r['fatalError']('end tag name: ' + msdc51 + ' is not match the current start tagName:' + x2_gv['tagName']);
          } else f374aj['push'](x2_gv);t51ds++;break;case '?':
          v2x_ng && $ey(fa4p7), t51ds = a_j1fst(jc5s1t, fa4p7, _8g0kh);break;case '!':
          v2x_ng && $ey(fa4p7), t51ds = a_cld5s(jc5s1t, fa4p7, _8g0kh, w4r);break;default:
          v2x_ng && $ey(fa4p7);var nvx2 = new a_ds1m5c(),
              f731jt = f374aj[f374aj['length'] - 0x1]['currentNSMap'],
              t51ds = a_wr2npa(jc5s1t, fa4p7, nvx2, f731jt, y9boqz, w4r),
              s5dlcm = nvx2['length'];if (!nvx2['closed'] && a_af7p4(jc5s1t, t51ds, nvx2['tagName'], b$eiy) && (nvx2['closed'] = !0x0, v_0gx2['nbsp'] || w4r['warning']('unclosed xml attribute')), v2x_ng && s5dlcm) {
            for (var a37pw4 = a_jt3f1s(v2x_ng, {}), xv2nr_ = 0x0; s5dlcm > xv2nr_; xv2nr_++) {
              var e9obi = nvx2[xv2nr_];$ey(e9obi['offset']), e9obi['locator'] = a_jt3f1s(v2x_ng, {});
            }_8g0kh['locator'] = a37pw4, a_g0vx(nvx2, _8g0kh, f731jt) && f374aj['push'](nvx2), _8g0kh['locator'] = v2x_ng;
          } else a_g0vx(nvx2, _8g0kh, f731jt) && f374aj['push'](nvx2);'http://www.w3.org/1999/xhtml' !== nvx2['uri'] || nvx2['closed'] ? t51ds++ : t51ds = a_$he8(jc5s1t, t51ds, nvx2['tagName'], y9boqz, _8g0kh);}
    } catch (oyi$eb) {
      w4r['error']('element parse error: ' + oyi$eb), t51ds = -0x1;
    }t51ds > g086h ? g086h = t51ds : c5sdm(Math['max'](fa4p7, g086h) + 0x1);
  }
}function a_jt3f1s(oei9b, xpn2rw) {
  return xpn2rw['lineNumber'] = oei9b['lineNumber'], xpn2rw['columnNumber'] = oei9b['columnNumber'], xpn2rw;
}function a_wr2npa(f7j43t, rv2nx_, _g0k8, eiy9bo, yb9oq, w2xn) {
  for (var f3jts, $byie6, eyibo9 = ++rv2nx_, h6$k08 = a_vg8h0;;) {
    var xnvwr2 = f7j43t['charAt'](eyibo9);switch (xnvwr2) {case '=':
        if (h6$k08 === a__h0kg8) f3jts = f7j43t['slice'](rv2nx_, eyibo9), h6$k08 = a_v8g0h_;else {
          if (h6$k08 !== a_oi$yb) throw new Error('attribute equal must after attrName');h6$k08 = a_v8g0h_;
        }break;case '\x27':case '\x22':
        if (h6$k08 === a_v8g0h_ || h6$k08 === a__h0kg8) {
          if (h6$k08 === a__h0kg8 && (w2xn['warning']('attribute value must after "="'), f3jts = f7j43t['slice'](rv2nx_, eyibo9)), rv2nx_ = eyibo9 + 0x1, eyibo9 = f7j43t['indexOf'](xnvwr2, rv2nx_), !(eyibo9 > 0x0)) throw new Error('attribute value no end \'' + xnvwr2 + '\' match');$byie6 = f7j43t['slice'](rv2nx_, eyibo9)['replace'](/&#?\w+;/g, yb9oq), _g0k8['add'](f3jts, $byie6, rv2nx_ - 0x1), h6$k08 = a_pwn4ra;
        } else {
          if (h6$k08 != a__rn) throw new Error('attribute value must after "="');$byie6 = f7j43t['slice'](rv2nx_, eyibo9)['replace'](/&#?\w+;/g, yb9oq), _g0k8['add'](f3jts, $byie6, rv2nx_), w2xn['warning']('attribute "' + f3jts + '" missed start quot(' + xnvwr2 + ')!!'), rv2nx_ = eyibo9 + 0x1, h6$k08 = a_pwn4ra;
        }break;case '/':
        switch (h6$k08) {case a_vg8h0:
            _g0k8['setTagName'](f7j43t['slice'](rv2nx_, eyibo9));case a_pwn4ra:case a_tj43f:case a_v2gn_:
            h6$k08 = a_v2gn_, _g0k8['closed'] = !0x0;case a__rn:case a__h0kg8:case a_oi$yb:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return w2xn['error']('unexpected end of input'), h6$k08 == a_vg8h0 && _g0k8['setTagName'](f7j43t['slice'](rv2nx_, eyibo9)), eyibo9;case '>':
        switch (h6$k08) {case a_vg8h0:
            _g0k8['setTagName'](f7j43t['slice'](rv2nx_, eyibo9));case a_pwn4ra:case a_tj43f:case a_v2gn_:
            break;case a__rn:case a__h0kg8:
            $byie6 = f7j43t['slice'](rv2nx_, eyibo9), '/' === $byie6['slice'](-0x1) && (_g0k8['closed'] = !0x0, $byie6 = $byie6['slice'](0x0, -0x1));case a_oi$yb:
            h6$k08 === a_oi$yb && ($byie6 = f3jts), h6$k08 == a__rn ? (w2xn['warning']('attribute "' + $byie6 + '" missed quot(")!!'), _g0k8['add'](f3jts, $byie6['replace'](/&#?\w+;/g, yb9oq), rv2nx_)) : ('http://www.w3.org/1999/xhtml' === eiy9bo[''] && $byie6['match'](/^(?:disabled|checked|selected)$/i) || w2xn['warning']('attribute "' + $byie6 + '" missed value!! "' + $byie6 + '" instead!!'), _g0k8['add']($byie6, $byie6, rv2nx_));break;case a_v8g0h_:
            throw new Error('attribute value missed!!');}return eyibo9;case '\u0080':
        xnvwr2 = '\x20';default:
        if ('\x20' >= xnvwr2) switch (h6$k08) {case a_vg8h0:
            _g0k8['setTagName'](f7j43t['slice'](rv2nx_, eyibo9)), h6$k08 = a_tj43f;break;case a__h0kg8:
            f3jts = f7j43t['slice'](rv2nx_, eyibo9), h6$k08 = a_oi$yb;break;case a__rn:
            var $byie6 = f7j43t['slice'](rv2nx_, eyibo9)['replace'](/&#?\w+;/g, yb9oq);w2xn['warning']('attribute "' + $byie6 + '" missed quot(")!!'), _g0k8['add'](f3jts, $byie6, rv2nx_);case a_pwn4ra:
            h6$k08 = a_tj43f;} else switch (h6$k08) {case a_oi$yb:
            {
              _g0k8['tagName'];
            }'http://www.w3.org/1999/xhtml' === eiy9bo[''] && f3jts['match'](/^(?:disabled|checked|selected)$/i) || w2xn['warning']('attribute "' + f3jts + '" missed value!! "' + f3jts + '" instead2!!'), _g0k8['add'](f3jts, f3jts, rv2nx_), rv2nx_ = eyibo9, h6$k08 = a__h0kg8;break;case a_pwn4ra:
            w2xn['warning']('attribute space is required"' + f3jts + '\x22!!');case a_tj43f:
            h6$k08 = a__h0kg8, rv2nx_ = eyibo9;break;case a_v8g0h_:
            h6$k08 = a__rn, rv2nx_ = eyibo9;break;case a_v2gn_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}eyibo9++;
  }
}function a_g0vx(h_v0gx, eb$6, rpxwn2) {
  for (var e$k86 = h_v0gx['tagName'], ar4pw7 = null, wv2xnr = h_v0gx['length']; wv2xnr--;) {
    var k06h8$ = h_v0gx[wv2xnr],
        w37pa = k06h8$['qName'],
        w374 = k06h8$['value'],
        an4rw = w37pa['indexOf'](':');if (an4rw > 0x0) var yi$eob = k06h8$['prefix'] = w37pa['slice'](0x0, an4rw),
        h08v_g = w37pa['slice'](an4rw + 0x1),
        vrn_ = 'xmlns' === yi$eob && h08v_g;else h08v_g = w37pa, yi$eob = null, vrn_ = 'xmlns' === w37pa && '';k06h8$['localName'] = h08v_g, vrn_ !== !0x1 && (null == ar4pw7 && (ar4pw7 = {}, a_m5d1(rpxwn2, rpxwn2 = {})), rpxwn2[vrn_] = ar4pw7[vrn_] = w374, k06h8$['uri'] = 'http://www.w3.org/2000/xmlns/', eb$6['startPrefixMapping'](vrn_, w374));
  }for (var wv2xnr = h_v0gx['length']; wv2xnr--;) {
    k06h8$ = h_v0gx[wv2xnr];var yi$eob = k06h8$['prefix'];yi$eob && ('xml' === yi$eob && (k06h8$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== yi$eob && (k06h8$['uri'] = rpxwn2[yi$eob || '']));
  }var an4rw = e$k86['indexOf'](':');an4rw > 0x0 ? (yi$eob = h_v0gx['prefix'] = e$k86['slice'](0x0, an4rw), h08v_g = h_v0gx['localName'] = e$k86['slice'](an4rw + 0x1)) : (yi$eob = null, h08v_g = h_v0gx['localName'] = e$k86);var ctj51 = h_v0gx['uri'] = rpxwn2[yi$eob || ''];if (eb$6['startElement'](ctj51, h08v_g, e$k86, h_v0gx), !h_v0gx['closed']) return h_v0gx['currentNSMap'] = rpxwn2, h_v0gx['localNSMap'] = ar4pw7, !0x0;if (eb$6['endElement'](ctj51, h08v_g, e$k86), ar4pw7) {
    for (yi$eob in ar4pw7) eb$6['endPrefixMapping'](yi$eob);
  }
}function a_$he8(rnpx, dtcs1, k06g8, r_xvn, t5j1sc) {
  if (/^(?:script|textarea)$/i['test'](k06g8)) {
    var wr2v = rnpx['indexOf']('</' + k06g8 + '>', dtcs1),
        d5c1ts = rnpx['substring'](dtcs1 + 0x1, wr2v);if (/[&<]/['test'](d5c1ts)) return (/^script$/i['test'](k06g8) ? (t5j1sc['characters'](d5c1ts, 0x0, d5c1ts['length']), wr2v) : (d5c1ts = d5c1ts['replace'](/&#?\w+;/g, r_xvn), t5j1sc['characters'](d5c1ts, 0x0, d5c1ts['length']), wr2v)
    );
  }return dtcs1 + 0x1;
}function a_af7p4(yoib9e, oeb$iy, bi9yeo, eyb9o) {
  var afj47 = eyb9o[bi9yeo];return null == afj47 && (afj47 = yoib9e['lastIndexOf']('</' + bi9yeo + '>'), oeb$iy > afj47 && (afj47 = yoib9e['lastIndexOf']('</' + bi9yeo)), eyb9o[bi9yeo] = afj47), oeb$iy > afj47;
}function a_m5d1(xn2wrv, x0gv_2) {
  for (var kgh8_0 in xn2wrv) x0gv_2[kgh8_0] = xn2wrv[kgh8_0];
}function a_cld5s(mscd51, _nxr, tc1sj, o9biey) {
  var d5cml = mscd51['charAt'](_nxr + 0x2);switch (d5cml) {case '-':
      if ('-' === mscd51['charAt'](_nxr + 0x3)) {
        var e$yb = mscd51['indexOf']('-->', _nxr + 0x4);return e$yb > _nxr ? (tc1sj['comment'](mscd51, _nxr + 0x4, e$yb - _nxr - 0x4), e$yb + 0x3) : (o9biey['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == mscd51['substr'](_nxr + 0x3, 0x6)) {
        var e$yb = mscd51['indexOf'](']]>', _nxr + 0x9);return tc1sj['startCDATA'](), tc1sj['characters'](mscd51, _nxr + 0x9, e$yb - _nxr - 0x9), tc1sj['endCDATA'](), e$yb + 0x3;
      }var $eiyo = a_a4f7p(mscd51, _nxr),
          v_nrx = $eiyo['length'];if (v_nrx > 0x1 && /!doctype/i['test']($eiyo[0x0][0x0])) {
        var yozbq9 = $eiyo[0x1][0x0],
            ft43 = v_nrx > 0x3 && /^public$/i['test']($eiyo[0x2][0x0]) && $eiyo[0x3][0x0],
            j5ct1 = v_nrx > 0x4 && $eiyo[0x4][0x0],
            wr4p7 = $eiyo[v_nrx - 0x1];return tc1sj['startDTD'](yozbq9, ft43 && ft43['replace'](/^(['"])(.*?)\1$/, '$2'), j5ct1 && j5ct1['replace'](/^(['"])(.*?)\1$/, '$2')), tc1sj['endDTD'](), wr4p7['index'] + wr4p7[0x0]['length'];
      }}return -0x1;
}function a_j1fst(eyi6b, c5lm, biyzo) {
  var d5lmc = eyi6b['indexOf']('?>', c5lm);if (d5lmc) {
    var vh_gx0 = eyi6b['substring'](c5lm, d5lmc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (vh_gx0) {
      {
        vh_gx0[0x0]['length'];
      }return biyzo['processingInstruction'](vh_gx0[0x1], vh_gx0[0x2]), d5lmc + 0x2;
    }return -0x1;
  }return -0x1;
}function a_ds1m5c() {}function a_ftj347(lm5dcs, vx2_0) {
  return lm5dcs['__proto__'] = vx2_0, lm5dcs;
}function a_a4f7p(stc1j, ioy9z) {
  var c1ms5d,
      stf1j3 = [],
      n2xg_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (n2xg_['lastIndex'] = ioy9z, n2xg_['exec'](stc1j); c1ms5d = n2xg_['exec'](stc1j);) if (stf1j3['push'](c1ms5d), c1ms5d[0x1]) return stf1j3;
}var a_wnap4r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_sjct1 = new RegExp('[\\-\\.0-9' + a_wnap4r['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_k6$h = new RegExp('^' + a_wnap4r['source'] + a_sjct1['source'] + '*(?::' + a_wnap4r['source'] + a_sjct1['source'] + '*)?$'),
    a_vg8h0 = 0x0,
    a__h0kg8 = 0x1,
    a_oi$yb = 0x2,
    a_v8g0h_ = 0x3,
    a__rn = 0x4,
    a_pwn4ra = 0x5,
    a_tj43f = 0x6,
    a_v2gn_ = 0x7;a_md5lcs['prototype'] = { 'parse': function (nr2xpw, pr2aw, t5c1js) {
    var be6iy = this['domBuilder'];be6iy['startDocument'](), a_m5d1(pr2aw, pr2aw = {}), a_g0kh6(nr2xpw, pr2aw, t5c1js, be6iy, this['errorHandler']), be6iy['endDocument']();
  } }, a_ds1m5c['prototype'] = { 'setTagName': function (ibyz) {
    if (!a_k6$h['test'](ibyz)) throw new Error('invalid tagName:' + ibyz);this['tagName'] = ibyz;
  }, 'add': function (hxg0v, ts5j1c, k_hg) {
    if (!a_k6$h['test'](hxg0v)) throw new Error('invalid attribute:' + hxg0v);this[this['length']++] = { 'qName': hxg0v, 'value': ts5j1c, 'offset': k_hg };
  }, 'length': 0x0, 'getLocalName': function ($eh68) {
    return this[$eh68]['localName'];
  }, 'getLocator': function (awn4) {
    return this[awn4]['locator'];
  }, 'getQName': function (yie6$) {
    return this[yie6$]['qName'];
  }, 'getURI': function (j34f7) {
    return this[j34f7]['uri'];
  }, 'getValue': function (f34) {
    return this[f34]['value'];
  } }, a_ftj347({}, a_ftj347['prototype']) instanceof a_ftj347 || (a_ftj347 = function (e$68h, wp734) {
  function fap4() {}fap4['prototype'] = wp734, fap4 = new fap4();for (wp734 in e$68h) fap4[wp734] = e$68h[wp734];return fap4;
}), exports['XMLReader'] = a_md5lcs;