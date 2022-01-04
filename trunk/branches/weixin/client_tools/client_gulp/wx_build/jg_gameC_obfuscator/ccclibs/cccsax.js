var p = wx.$h;
function a_rpn2w() {}function a_k68$i(y$kie6, apwr2, ybe6$, kh$068, d15m) {
  function h0_g8k(fc1jt) {
    if (fc1jt > 0xffff) {
      fc1jt -= 0x10000;var v_g0x = 0xd800 + (fc1jt >> 0xa),
          prn2w = 0xdc00 + (0x3ff & fc1jt);return String['fromCharCode'](v_g0x, prn2w);
    }return String['fromCharCode'](fc1jt);
  }function f13tj7(aw4r) {
    var _vgx0 = aw4r['slice'](0x1, -0x1);return _vgx0 in ybe6$ ? ybe6$[_vgx0] : '#' === _vgx0['charAt'](0x0) ? h0_g8k(parseInt(_vgx0['substr'](0x1)['replace']('x', '0x'))) : (d15m['error']('entity not found:' + aw4r), aw4r);
  }function q9yz(stj3) {
    if (stj3 > xhvg0) {
      var e$8i6 = y$kie6['substring'](xhvg0, stj3)['replace'](/&#?\w+;/g, f13tj7);vn2_r && d5tc1s(xhvg0), kh$068['characters'](e$8i6, 0x0, stj3 - xhvg0), xhvg0 = stj3;
    }
  }function d5tc1s(_kg8, xvnr2) {
    for (; _kg8 >= iyboe$ && (xvnr2 = m1s5cd['exec'](y$kie6));) p3aw7 = xvnr2['index'], iyboe$ = p3aw7 + xvnr2[0x0]['length'], vn2_r['lineNumber']++;vn2_r['columnNumber'] = _kg8 - p3aw7 + 0x1;
  }for (var p3aw7 = 0x0, iyboe$ = 0x0, m1s5cd = /.*(?:\r\n?|\n)|.*$/g, vn2_r = kh$068['locator'], a73w4p = [{ 'currentNSMap': apwr2 }], fa7j4 = {}, xhvg0 = 0x0;;) {
    try {
      var m1s5c = y$kie6['indexOf']('<', xhvg0);if (0x0 > m1s5c) {
        if (!y$kie6['substr'](xhvg0)['match'](/^\s*$/)) {
          var rap4nw = kh$068['doc'],
              j17t3 = rap4nw['createTextNode'](y$kie6['substr'](xhvg0));rap4nw['appendChild'](j17t3), kh$068['currentElement'] = j17t3;
        }return;
      }switch (m1s5c > xhvg0 && q9yz(m1s5c), y$kie6['charAt'](m1s5c + 0x1)) {case '/':
          var eb$ioy = y$kie6['indexOf']('>', m1s5c + 0x3),
              jc = y$kie6['substring'](m1s5c + 0x2, eb$ioy),
              tcf1js = a73w4p['pop']();0x0 > eb$ioy ? (jc = y$kie6['substring'](m1s5c + 0x2)['replace'](/[\s<].*/, ''), d15m['error']('end tag name: ' + jc + ' is not complete:' + tcf1js['tagName']), eb$ioy = m1s5c + 0x1 + jc['length']) : jc['match'](/\s</) && (jc = jc['replace'](/[\s<].*/, ''), d15m['error']('end tag name: ' + jc + ' maybe not complete'), eb$ioy = m1s5c + 0x1 + jc['length']);var bioe9 = tcf1js['localNSMap'],
              $hk60 = tcf1js['tagName'] == jc,
              ajf34 = $hk60 || tcf1js['tagName'] && tcf1js['tagName']['toLowerCase']() == jc['toLowerCase']();if (ajf34) {
            if (kh$068['endElement'](tcf1js['uri'], tcf1js['localName'], jc), bioe9) {
              for (var a2nrwp in bioe9) kh$068['endPrefixMapping'](a2nrwp);
            }$hk60 || d15m['fatalError']('end tag name: ' + jc + ' is not match the current start tagName:' + tcf1js['tagName']);
          } else a73w4p['push'](tcf1js);eb$ioy++;break;case '?':
          vn2_r && d5tc1s(m1s5c), eb$ioy = a_vwrxn2(y$kie6, m1s5c, kh$068);break;case '!':
          vn2_r && d5tc1s(m1s5c), eb$ioy = a_nrpa4(y$kie6, m1s5c, kh$068, d15m);break;default:
          vn2_r && d5tc1s(m1s5c);var c1dsm = new a_g_8kh0(),
              ob$ = a73w4p[a73w4p['length'] - 0x1]['currentNSMap'],
              eb$ioy = a_r_vx2n(y$kie6, m1s5c, c1dsm, ob$, f13tj7, d15m),
              b$iy6 = c1dsm['length'];if (!c1dsm['closed'] && a_h_g8(y$kie6, eb$ioy, c1dsm['tagName'], fa7j4) && (c1dsm['closed'] = !0x0, ybe6$['nbsp'] || d15m['warning']('unclosed xml attribute')), vn2_r && b$iy6) {
            for (var i8$ek6 = a_w2xvnr(vn2_r, {}), a47pwr = 0x0; b$iy6 > a47pwr; a47pwr++) {
              var f4a7p3 = c1dsm[a47pwr];d5tc1s(f4a7p3['offset']), f4a7p3['locator'] = a_w2xvnr(vn2_r, {});
            }kh$068['locator'] = i8$ek6, a_fctj1(c1dsm, kh$068, ob$) && a73w4p['push'](c1dsm), kh$068['locator'] = vn2_r;
          } else a_fctj1(c1dsm, kh$068, ob$) && a73w4p['push'](c1dsm);'http://www.w3.org/1999/xhtml' !== c1dsm['uri'] || c1dsm['closed'] ? eb$ioy++ : eb$ioy = a_k8hg(y$kie6, eb$ioy, c1dsm['tagName'], f13tj7, kh$068);}
    } catch ($6y) {
      d15m['error']('element parse error: ' + $6y), eb$ioy = -0x1;
    }eb$ioy > xhvg0 ? xhvg0 = eb$ioy : q9yz(Math['max'](m1s5c, xhvg0) + 0x1);
  }
}function a_w2xvnr(ikey6, zyq9ob) {
  return zyq9ob['lineNumber'] = ikey6['lineNumber'], zyq9ob['columnNumber'] = ikey6['columnNumber'], zyq9ob;
}function a_r_vx2n(ml5csd, jfa743, fa347, iy9zbo, yoib9e, iz9yb) {
  for (var v0xgh_, i6$bey, mslcd5 = ++jfa743, hk68$0 = a_y9ibo;;) {
    var g0hxv = ml5csd['charAt'](mslcd5);switch (g0hxv) {case '=':
        if (hk68$0 === a_jt1fc) v0xgh_ = ml5csd['slice'](jfa743, mslcd5), hk68$0 = a_n2rwap;else {
          if (hk68$0 !== a_eboi$) throw new Error('attribute equal must after attrName');hk68$0 = a_n2rwap;
        }break;case '\x27':case '\x22':
        if (hk68$0 === a_n2rwap || hk68$0 === a_jt1fc) {
          if (hk68$0 === a_jt1fc && (iz9yb['warning']('attribute value must after "="'), v0xgh_ = ml5csd['slice'](jfa743, mslcd5)), jfa743 = mslcd5 + 0x1, mslcd5 = ml5csd['indexOf'](g0hxv, jfa743), !(mslcd5 > 0x0)) throw new Error('attribute value no end \'' + g0hxv + '\' match');i6$bey = ml5csd['slice'](jfa743, mslcd5)['replace'](/&#?\w+;/g, yoib9e), fa347['add'](v0xgh_, i6$bey, jfa743 - 0x1), hk68$0 = a_ibyo9e;
        } else {
          if (hk68$0 != a_be9o) throw new Error('attribute value must after "="');i6$bey = ml5csd['slice'](jfa743, mslcd5)['replace'](/&#?\w+;/g, yoib9e), fa347['add'](v0xgh_, i6$bey, jfa743), iz9yb['warning']('attribute "' + v0xgh_ + '" missed start quot(' + g0hxv + ')!!'), jfa743 = mslcd5 + 0x1, hk68$0 = a_ibyo9e;
        }break;case '/':
        switch (hk68$0) {case a_y9ibo:
            fa347['setTagName'](ml5csd['slice'](jfa743, mslcd5));case a_ibyo9e:case a_wapr4:case a_v_2gx:
            hk68$0 = a_v_2gx, fa347['closed'] = !0x0;case a_be9o:case a_jt1fc:case a_eboi$:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return iz9yb['error']('unexpected end of input'), hk68$0 == a_y9ibo && fa347['setTagName'](ml5csd['slice'](jfa743, mslcd5)), mslcd5;case '>':
        switch (hk68$0) {case a_y9ibo:
            fa347['setTagName'](ml5csd['slice'](jfa743, mslcd5));case a_ibyo9e:case a_wapr4:case a_v_2gx:
            break;case a_be9o:case a_jt1fc:
            i6$bey = ml5csd['slice'](jfa743, mslcd5), '/' === i6$bey['slice'](-0x1) && (fa347['closed'] = !0x0, i6$bey = i6$bey['slice'](0x0, -0x1));case a_eboi$:
            hk68$0 === a_eboi$ && (i6$bey = v0xgh_), hk68$0 == a_be9o ? (iz9yb['warning']('attribute "' + i6$bey + '" missed quot(")!!'), fa347['add'](v0xgh_, i6$bey['replace'](/&#?\w+;/g, yoib9e), jfa743)) : ('http://www.w3.org/1999/xhtml' === iy9zbo[''] && i6$bey['match'](/^(?:disabled|checked|selected)$/i) || iz9yb['warning']('attribute "' + i6$bey + '" missed value!! "' + i6$bey + '" instead!!'), fa347['add'](i6$bey, i6$bey, jfa743));break;case a_n2rwap:
            throw new Error('attribute value missed!!');}return mslcd5;case '\u0080':
        g0hxv = '\x20';default:
        if ('\x20' >= g0hxv) switch (hk68$0) {case a_y9ibo:
            fa347['setTagName'](ml5csd['slice'](jfa743, mslcd5)), hk68$0 = a_wapr4;break;case a_jt1fc:
            v0xgh_ = ml5csd['slice'](jfa743, mslcd5), hk68$0 = a_eboi$;break;case a_be9o:
            var i6$bey = ml5csd['slice'](jfa743, mslcd5)['replace'](/&#?\w+;/g, yoib9e);iz9yb['warning']('attribute "' + i6$bey + '" missed quot(")!!'), fa347['add'](v0xgh_, i6$bey, jfa743);case a_ibyo9e:
            hk68$0 = a_wapr4;} else switch (hk68$0) {case a_eboi$:
            {
              fa347['tagName'];
            }'http://www.w3.org/1999/xhtml' === iy9zbo[''] && v0xgh_['match'](/^(?:disabled|checked|selected)$/i) || iz9yb['warning']('attribute "' + v0xgh_ + '" missed value!! "' + v0xgh_ + '" instead2!!'), fa347['add'](v0xgh_, v0xgh_, jfa743), jfa743 = mslcd5, hk68$0 = a_jt1fc;break;case a_ibyo9e:
            iz9yb['warning']('attribute space is required"' + v0xgh_ + '\x22!!');case a_wapr4:
            hk68$0 = a_jt1fc, jfa743 = mslcd5;break;case a_n2rwap:
            hk68$0 = a_be9o, jfa743 = mslcd5;break;case a_v_2gx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}mslcd5++;
  }
}function a_fctj1(warn2, j734ft, i9yozb) {
  for (var m5lds = warn2['tagName'], _g20xv = null, i6ybe$ = warn2['length']; i6ybe$--;) {
    var gx_0vh = warn2[i6ybe$],
        eiboy = gx_0vh['qName'],
        e8ki = gx_0vh['value'],
        gvx2_0 = eiboy['indexOf'](':');if (gvx2_0 > 0x0) var rpna4w = gx_0vh['prefix'] = eiboy['slice'](0x0, gvx2_0),
        g0v8h_ = eiboy['slice'](gvx2_0 + 0x1),
        gk06h = 'xmlns' === rpna4w && g0v8h_;else g0v8h_ = eiboy, rpna4w = null, gk06h = 'xmlns' === eiboy && '';gx_0vh['localName'] = g0v8h_, gk06h !== !0x1 && (null == _g20xv && (_g20xv = {}, a_bz9yi(i9yozb, i9yozb = {})), i9yozb[gk06h] = _g20xv[gk06h] = e8ki, gx_0vh['uri'] = 'http://www.w3.org/2000/xmlns/', j734ft['startPrefixMapping'](gk06h, e8ki));
  }for (var i6ybe$ = warn2['length']; i6ybe$--;) {
    gx_0vh = warn2[i6ybe$];var rpna4w = gx_0vh['prefix'];rpna4w && ('xml' === rpna4w && (gx_0vh['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== rpna4w && (gx_0vh['uri'] = i9yozb[rpna4w || '']));
  }var gvx2_0 = m5lds['indexOf'](':');gvx2_0 > 0x0 ? (rpna4w = warn2['prefix'] = m5lds['slice'](0x0, gvx2_0), g0v8h_ = warn2['localName'] = m5lds['slice'](gvx2_0 + 0x1)) : (rpna4w = null, g0v8h_ = warn2['localName'] = m5lds);var jf71t3 = warn2['uri'] = i9yozb[rpna4w || ''];if (j734ft['startElement'](jf71t3, g0v8h_, m5lds, warn2), !warn2['closed']) return warn2['currentNSMap'] = i9yozb, warn2['localNSMap'] = _g20xv, !0x0;if (j734ft['endElement'](jf71t3, g0v8h_, m5lds), _g20xv) {
    for (rpna4w in _g20xv) j734ft['endPrefixMapping'](rpna4w);
  }
}function a_k8hg(e$6kh, y6be$, jt13sf, p34a, ik8e6) {
  if (/^(?:script|textarea)$/i['test'](jt13sf)) {
    var rxwpn = e$6kh['indexOf']('</' + jt13sf + '>', y6be$),
        gk_80h = e$6kh['substring'](y6be$ + 0x1, rxwpn);if (/[&<]/['test'](gk_80h)) return (/^script$/i['test'](jt13sf) ? (ik8e6['characters'](gk_80h, 0x0, gk_80h['length']), rxwpn) : (gk_80h = gk_80h['replace'](/&#?\w+;/g, p34a), ik8e6['characters'](gk_80h, 0x0, gk_80h['length']), rxwpn)
    );
  }return y6be$ + 0x1;
}function a_h_g8(an4wp, vg8h_, s51dcm, a4prw) {
  var nwrp4 = a4prw[s51dcm];return null == nwrp4 && (nwrp4 = an4wp['lastIndexOf']('</' + s51dcm + '>'), vg8h_ > nwrp4 && (nwrp4 = an4wp['lastIndexOf']('</' + s51dcm)), a4prw[s51dcm] = nwrp4), vg8h_ > nwrp4;
}function a_bz9yi(y9ibe, c5jts1) {
  for (var t1fj7 in y9ibe) c5jts1[t1fj7] = y9ibe[t1fj7];
}function a_nrpa4(bye9o, dcs51t, ozqb9, y9eibo) {
  var wp47a3 = bye9o['charAt'](dcs51t + 0x2);switch (wp47a3) {case '-':
      if ('-' === bye9o['charAt'](dcs51t + 0x3)) {
        var dmlc5s = bye9o['indexOf']('-->', dcs51t + 0x4);return dmlc5s > dcs51t ? (ozqb9['comment'](bye9o, dcs51t + 0x4, dmlc5s - dcs51t - 0x4), dmlc5s + 0x3) : (y9eibo['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bye9o['substr'](dcs51t + 0x3, 0x6)) {
        var dmlc5s = bye9o['indexOf'](']]>', dcs51t + 0x9);return ozqb9['startCDATA'](), ozqb9['characters'](bye9o, dcs51t + 0x9, dmlc5s - dcs51t - 0x9), ozqb9['endCDATA'](), dmlc5s + 0x3;
      }var ki6e$y = a__xn2(bye9o, dcs51t),
          eoyi = ki6e$y['length'];if (eoyi > 0x1 && /!doctype/i['test'](ki6e$y[0x0][0x0])) {
        var e9iyb = ki6e$y[0x1][0x0],
            _gxv02 = eoyi > 0x3 && /^public$/i['test'](ki6e$y[0x2][0x0]) && ki6e$y[0x3][0x0],
            $6eky = eoyi > 0x4 && ki6e$y[0x4][0x0],
            p37a4f = ki6e$y[eoyi - 0x1];return ozqb9['startDTD'](e9iyb, _gxv02 && _gxv02['replace'](/^(['"])(.*?)\1$/, '$2'), $6eky && $6eky['replace'](/^(['"])(.*?)\1$/, '$2')), ozqb9['endDTD'](), p37a4f['index'] + p37a4f[0x0]['length'];
      }}return -0x1;
}function a_vwrxn2(b9ie, ap473w, gh68k) {
  var a43f7 = b9ie['indexOf']('?>', ap473w);if (a43f7) {
    var ozib = b9ie['substring'](ap473w, a43f7)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ozib) {
      {
        ozib[0x0]['length'];
      }return gh68k['processingInstruction'](ozib[0x1], ozib[0x2]), a43f7 + 0x2;
    }return -0x1;
  }return -0x1;
}function a_g_8kh0() {}function a_g6h8k0(xgv20, gh08k6) {
  return xgv20['__proto__'] = gh08k6, xgv20;
}function a__xn2(xrv_2n, ap2rw) {
  var cf1tjs,
      xwrvn2 = [],
      h68gk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (h68gk['lastIndex'] = ap2rw, h68gk['exec'](xrv_2n); cf1tjs = h68gk['exec'](xrv_2n);) if (xwrvn2['push'](cf1tjs), cf1tjs[0x1]) return xwrvn2;
}var a_w34ap7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_s5ldmc = new RegExp('[\\-\\.0-9' + a_w34ap7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_xnr2 = new RegExp('^' + a_w34ap7['source'] + a_s5ldmc['source'] + '*(?::' + a_w34ap7['source'] + a_s5ldmc['source'] + '*)?$'),
    a_y9ibo = 0x0,
    a_jt1fc = 0x1,
    a_eboi$ = 0x2,
    a_n2rwap = 0x3,
    a_be9o = 0x4,
    a_ibyo9e = 0x5,
    a_wapr4 = 0x6,
    a_v_2gx = 0x7;a_rpn2w['prototype'] = { 'parse': function (xvg20, p7a43, xgv0h_) {
    var dlsm = this['domBuilder'];dlsm['startDocument'](), a_bz9yi(p7a43, p7a43 = {}), a_k68$i(xvg20, p7a43, xgv0h_, dlsm, this['errorHandler']), dlsm['endDocument']();
  } }, a_g_8kh0['prototype'] = { 'setTagName': function (h60g8) {
    if (!a_xnr2['test'](h60g8)) throw new Error('invalid tagName:' + h60g8);this['tagName'] = h60g8;
  }, 'add': function (e8$i6k, ld5cms, iye6k$) {
    if (!a_xnr2['test'](e8$i6k)) throw new Error('invalid attribute:' + e8$i6k);this[this['length']++] = { 'qName': e8$i6k, 'value': ld5cms, 'offset': iye6k$ };
  }, 'length': 0x0, 'getLocalName': function (h0gv_x) {
    return this[h0gv_x]['localName'];
  }, 'getLocator': function ($ek6h8) {
    return this[$ek6h8]['locator'];
  }, 'getQName': function (nrvxw2) {
    return this[nrvxw2]['qName'];
  }, 'getURI': function (yoi9e) {
    return this[yoi9e]['uri'];
  }, 'getValue': function (ky$6ie) {
    return this[ky$6ie]['value'];
  } }, a_g6h8k0({}, a_g6h8k0['prototype']) instanceof a_g6h8k0 || (a_g6h8k0 = function (o9yeb, xg_h) {
  function ek$6yi() {}ek$6yi['prototype'] = xg_h, ek$6yi = new ek$6yi();for (xg_h in o9yeb) ek$6yi[xg_h] = o9yeb[xg_h];return ek$6yi;
}), exports['XMLReader'] = a_rpn2w;