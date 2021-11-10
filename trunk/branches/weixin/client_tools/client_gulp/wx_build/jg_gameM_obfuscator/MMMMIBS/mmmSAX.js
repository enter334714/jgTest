var Y = wx.$M;
function M_m7njih() {}function M_f9r1w(pezt8, m_47js, r91kf, s7j64, rx91uk) {
  function gs_o(xk9v1r) {
    if (xk9v1r > 0xffff) {
      xk9v1r -= 0x10000;var wb0fd = 0xd800 + (xk9v1r >> 0xa),
          xq3uyk = 0xdc00 + (0x3ff & xk9v1r);return String['fromCharCode'](wb0fd, xq3uyk);
    }return String['fromCharCode'](xk9v1r);
  }function b9f(os_4g6) {
    var mnh5ij = os_4g6['slice'](0x1, -0x1);return mnh5ij in r91kf ? r91kf[mnh5ij] : '#' === mnh5ij['charAt'](0x0) ? gs_o(parseInt(mnh5ij['substr'](0x1)['replace']('x', '0x'))) : (rx91uk['error']('entity not found:' + os_4g6), os_4g6);
  }function o4gas6(_7sm) {
    if (_7sm > fdwv) {
      var f1r9vw = pezt8['substring'](fdwv, _7sm)['replace'](/&#?\w+;/g, b9f);ilmh5 && dfrvw(fdwv), s7j64['characters'](f1r9vw, 0x0, _7sm - fdwv), fdwv = _7sm;
    }
  }function dfrvw(iln05, vr1w) {
    for (; iln05 >= w0$bd && (vr1w = o74_s6['exec'](pezt8));) c8z2t = vr1w['index'], w0$bd = c8z2t + vr1w[0x0]['length'], ilmh5['lineNumber']++;ilmh5['columnNumber'] = iln05 - c8z2t + 0x1;
  }for (var c8z2t = 0x0, w0$bd = 0x0, o74_s6 = /.*(?:\r\n?|\n)|.*$/g, ilmh5 = s7j64['locator'], s_j64 = [{ 'currentNSMap': m_47js }], g2ec = {}, fdwv = 0x0;;) {
    try {
      var nihm7 = pezt8['indexOf']('<', fdwv);if (0x0 > nihm7) {
        if (!pezt8['substr'](fdwv)['match'](/^\s*$/)) {
          var ml5h = s7j64['doc'],
              dlwb0 = ml5h['createTextNode'](pezt8['substr'](fdwv));ml5h['appendChild'](dlwb0), s7j64['currentElement'] = dlwb0;
        }return;
      }switch (nihm7 > fdwv && o4gas6(nihm7), pezt8['charAt'](nihm7 + 0x1)) {case '/':
          var lihm = pezt8['indexOf']('>', nihm7 + 0x3),
              j4_h = pezt8['substring'](nihm7 + 0x2, lihm),
              i7mhj = s_j64['pop']();0x0 > lihm ? (j4_h = pezt8['substring'](nihm7 + 0x2)['replace'](/[\s<].*/, ''), rx91uk['error']('end tag name: ' + j4_h + ' is not complete:' + i7mhj['tagName']), lihm = nihm7 + 0x1 + j4_h['length']) : j4_h['match'](/\s</) && (j4_h = j4_h['replace'](/[\s<].*/, ''), rx91uk['error']('end tag name: ' + j4_h + ' maybe not complete'), lihm = nihm7 + 0x1 + j4_h['length']);var d$0fbw = i7mhj['localNSMap'],
              w9fvr = i7mhj['tagName'] == j4_h,
              i5hl0 = w9fvr || i7mhj['tagName'] && i7mhj['tagName']['toLowerCase']() == j4_h['toLowerCase']();if (i5hl0) {
            if (s7j64['endElement'](i7mhj['uri'], i7mhj['localName'], j4_h), d$0fbw) {
              for (var yqxku1 in d$0fbw) s7j64['endPrefixMapping'](yqxku1);
            }w9fvr || rx91uk['fatalError']('end tag name: ' + j4_h + ' is not match the current start tagName:' + i7mhj['tagName']);
          } else s_j64['push'](i7mhj);lihm++;break;case '?':
          ilmh5 && dfrvw(nihm7), lihm = M_h_7jm(pezt8, nihm7, s7j64);break;case '!':
          ilmh5 && dfrvw(nihm7), lihm = M_bdl5$(pezt8, nihm7, s7j64, rx91uk);break;default:
          ilmh5 && dfrvw(nihm7);var sc6ga = new M_cg6ao8(),
              jh4_ = s_j64[s_j64['length'] - 0x1]['currentNSMap'],
              lihm = M_$5d0b(pezt8, nihm7, sc6ga, jh4_, b9f, rx91uk),
              f0$dw = sc6ga['length'];if (!sc6ga['closed'] && M_g8ea(pezt8, lihm, sc6ga['tagName'], g2ec) && (sc6ga['closed'] = !0x0, r91kf['nbsp'] || rx91uk['warning']('unclosed xml attribute')), ilmh5 && f0$dw) {
            for (var g4s_o = M_i0nh5l(ilmh5, {}), c6goa8 = 0x0; f0$dw > c6goa8; c6goa8++) {
              var zp28 = sc6ga[c6goa8];dfrvw(zp28['offset']), zp28['locator'] = M_i0nh5l(ilmh5, {});
            }s7j64['locator'] = g4s_o, M_jnh7mi(sc6ga, s7j64, jh4_) && s_j64['push'](sc6ga), s7j64['locator'] = ilmh5;
          } else M_jnh7mi(sc6ga, s7j64, jh4_) && s_j64['push'](sc6ga);'http://www.w3.org/1999/xhtml' !== sc6ga['uri'] || sc6ga['closed'] ? lihm++ : lihm = M_k19xrv(pezt8, lihm, sc6ga['tagName'], b9f, s7j64);}
    } catch (oe) {
      rx91uk['error']('element parse error: ' + oe), lihm = -0x1;
    }lihm > fdwv ? fdwv = lihm : o4gas6(Math['max'](nihm7, fdwv) + 0x1);
  }
}function M_i0nh5l(dwf0b, tp8z2) {
  return tp8z2['lineNumber'] = dwf0b['lineNumber'], tp8z2['columnNumber'] = dwf0b['columnNumber'], tp8z2;
}function M_$5d0b(bdl$5, rkv9x1, zc2te, xkuyq3, pz82, lbwd0$) {
  for (var d$wfb, wrb9f, kqux1 = ++rkv9x1, gscao6 = M_gos4_6;;) {
    var jinmh5 = bdl$5['charAt'](kqux1);switch (jinmh5) {case '=':
        if (gscao6 === M_fr9wvb) d$wfb = bdl$5['slice'](rkv9x1, kqux1), gscao6 = M_rvfw91;else {
          if (gscao6 !== M_fbw$d0) throw new Error('attribute equal must after attrName');gscao6 = M_rvfw91;
        }break;case '\x27':case '\x22':
        if (gscao6 === M_rvfw91 || gscao6 === M_fr9wvb) {
          if (gscao6 === M_fr9wvb && (lbwd0$['warning']('attribute value must after "="'), d$wfb = bdl$5['slice'](rkv9x1, kqux1)), rkv9x1 = kqux1 + 0x1, kqux1 = bdl$5['indexOf'](jinmh5, rkv9x1), !(kqux1 > 0x0)) throw new Error('attribute value no end \'' + jinmh5 + '\' match');wrb9f = bdl$5['slice'](rkv9x1, kqux1)['replace'](/&#?\w+;/g, pz82), zc2te['add'](d$wfb, wrb9f, rkv9x1 - 0x1), gscao6 = M_dvbrf;
        } else {
          if (gscao6 != M_l$dwb) throw new Error('attribute value must after "="');wrb9f = bdl$5['slice'](rkv9x1, kqux1)['replace'](/&#?\w+;/g, pz82), zc2te['add'](d$wfb, wrb9f, rkv9x1), lbwd0$['warning']('attribute "' + d$wfb + '" missed start quot(' + jinmh5 + ')!!'), rkv9x1 = kqux1 + 0x1, gscao6 = M_dvbrf;
        }break;case '/':
        switch (gscao6) {case M_gos4_6:
            zc2te['setTagName'](bdl$5['slice'](rkv9x1, kqux1));case M_dvbrf:case M_vwdrbf:case M_s46oag:
            gscao6 = M_s46oag, zc2te['closed'] = !0x0;case M_l$dwb:case M_fr9wvb:case M_fbw$d0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lbwd0$['error']('unexpected end of input'), gscao6 == M_gos4_6 && zc2te['setTagName'](bdl$5['slice'](rkv9x1, kqux1)), kqux1;case '>':
        switch (gscao6) {case M_gos4_6:
            zc2te['setTagName'](bdl$5['slice'](rkv9x1, kqux1));case M_dvbrf:case M_vwdrbf:case M_s46oag:
            break;case M_l$dwb:case M_fr9wvb:
            wrb9f = bdl$5['slice'](rkv9x1, kqux1), '/' === wrb9f['slice'](-0x1) && (zc2te['closed'] = !0x0, wrb9f = wrb9f['slice'](0x0, -0x1));case M_fbw$d0:
            gscao6 === M_fbw$d0 && (wrb9f = d$wfb), gscao6 == M_l$dwb ? (lbwd0$['warning']('attribute "' + wrb9f + '" missed quot(")!!'), zc2te['add'](d$wfb, wrb9f['replace'](/&#?\w+;/g, pz82), rkv9x1)) : ('http://www.w3.org/1999/xhtml' === xkuyq3[''] && wrb9f['match'](/^(?:disabled|checked|selected)$/i) || lbwd0$['warning']('attribute "' + wrb9f + '" missed value!! "' + wrb9f + '" instead!!'), zc2te['add'](wrb9f, wrb9f, rkv9x1));break;case M_rvfw91:
            throw new Error('attribute value missed!!');}return kqux1;case '\u0080':
        jinmh5 = '\x20';default:
        if ('\x20' >= jinmh5) switch (gscao6) {case M_gos4_6:
            zc2te['setTagName'](bdl$5['slice'](rkv9x1, kqux1)), gscao6 = M_vwdrbf;break;case M_fr9wvb:
            d$wfb = bdl$5['slice'](rkv9x1, kqux1), gscao6 = M_fbw$d0;break;case M_l$dwb:
            var wrb9f = bdl$5['slice'](rkv9x1, kqux1)['replace'](/&#?\w+;/g, pz82);lbwd0$['warning']('attribute "' + wrb9f + '" missed quot(")!!'), zc2te['add'](d$wfb, wrb9f, rkv9x1);case M_dvbrf:
            gscao6 = M_vwdrbf;} else switch (gscao6) {case M_fbw$d0:
            {
              zc2te['tagName'];
            }'http://www.w3.org/1999/xhtml' === xkuyq3[''] && d$wfb['match'](/^(?:disabled|checked|selected)$/i) || lbwd0$['warning']('attribute "' + d$wfb + '" missed value!! "' + d$wfb + '" instead2!!'), zc2te['add'](d$wfb, d$wfb, rkv9x1), rkv9x1 = kqux1, gscao6 = M_fr9wvb;break;case M_dvbrf:
            lbwd0$['warning']('attribute space is required"' + d$wfb + '\x22!!');case M_vwdrbf:
            gscao6 = M_fr9wvb, rkv9x1 = kqux1;break;case M_rvfw91:
            gscao6 = M_l$dwb, rkv9x1 = kqux1;break;case M_s46oag:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}kqux1++;
  }
}function M_jnh7mi(s4a6, f9r1, wrf9v) {
  for (var u9yk1x = s4a6['tagName'], _j76s = null, ag46o = s4a6['length']; ag46o--;) {
    var yuk1x9 = s4a6[ag46o],
        sm4j_7 = yuk1x9['qName'],
        og6a = yuk1x9['value'],
        lhni0 = sm4j_7['indexOf'](':');if (lhni0 > 0x0) var a4o6s = yuk1x9['prefix'] = sm4j_7['slice'](0x0, lhni0),
        sa6og = sm4j_7['slice'](lhni0 + 0x1),
        yqx1 = 'xmlns' === a4o6s && sa6og;else sa6og = sm4j_7, a4o6s = null, yqx1 = 'xmlns' === sm4j_7 && '';yuk1x9['localName'] = sa6og, yqx1 !== !0x1 && (null == _j76s && (_j76s = {}, M__74hjm(wrf9v, wrf9v = {})), wrf9v[yqx1] = _j76s[yqx1] = og6a, yuk1x9['uri'] = 'http://www.w3.org/2000/xmlns/', f9r1['startPrefixMapping'](yqx1, og6a));
  }for (var ag46o = s4a6['length']; ag46o--;) {
    yuk1x9 = s4a6[ag46o];var a4o6s = yuk1x9['prefix'];a4o6s && ('xml' === a4o6s && (yuk1x9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== a4o6s && (yuk1x9['uri'] = wrf9v[a4o6s || '']));
  }var lhni0 = u9yk1x['indexOf'](':');lhni0 > 0x0 ? (a4o6s = s4a6['prefix'] = u9yk1x['slice'](0x0, lhni0), sa6og = s4a6['localName'] = u9yk1x['slice'](lhni0 + 0x1)) : (a4o6s = null, sa6og = s4a6['localName'] = u9yk1x);var s4a6g = s4a6['uri'] = wrf9v[a4o6s || ''];if (f9r1['startElement'](s4a6g, sa6og, u9yk1x, s4a6), !s4a6['closed']) return s4a6['currentNSMap'] = wrf9v, s4a6['localNSMap'] = _j76s, !0x0;if (f9r1['endElement'](s4a6g, sa6og, u9yk1x), _j76s) {
    for (a4o6s in _j76s) f9r1['endPrefixMapping'](a4o6s);
  }
}function M_k19xrv(cga86, e2a, b5l0$d, d$5i0, fvr91w) {
  if (/^(?:script|textarea)$/i['test'](b5l0$d)) {
    var k9rxu = cga86['indexOf']('</' + b5l0$d + '>', e2a),
        ac6go8 = cga86['substring'](e2a + 0x1, k9rxu);if (/[&<]/['test'](ac6go8)) return (/^script$/i['test'](b5l0$d) ? (fvr91w['characters'](ac6go8, 0x0, ac6go8['length']), k9rxu) : (ac6go8 = ac6go8['replace'](/&#?\w+;/g, d$5i0), fvr91w['characters'](ac6go8, 0x0, ac6go8['length']), k9rxu)
    );
  }return e2a + 0x1;
}function M_g8ea(goa86, e8gc2a, ukx91, nl5mh) {
  var lin$50 = nl5mh[ukx91];return null == lin$50 && (lin$50 = goa86['lastIndexOf']('</' + ukx91 + '>'), e8gc2a > lin$50 && (lin$50 = goa86['lastIndexOf']('</' + ukx91)), nl5mh[ukx91] = lin$50), e8gc2a > lin$50;
}function M__74hjm(t28cea, yxku9) {
  for (var vw9f1 in t28cea) yxku9[vw9f1] = t28cea[vw9f1];
}function M_bdl5$(a8ct2e, dli05$, wv$f, e28zt) {
  var d$l50 = a8ct2e['charAt'](dli05$ + 0x2);switch (d$l50) {case '-':
      if ('-' === a8ct2e['charAt'](dli05$ + 0x3)) {
        var kyu3xq = a8ct2e['indexOf']('-->', dli05$ + 0x4);return kyu3xq > dli05$ ? (wv$f['comment'](a8ct2e, dli05$ + 0x4, kyu3xq - dli05$ - 0x4), kyu3xq + 0x3) : (e28zt['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == a8ct2e['substr'](dli05$ + 0x3, 0x6)) {
        var kyu3xq = a8ct2e['indexOf'](']]>', dli05$ + 0x9);return wv$f['startCDATA'](), wv$f['characters'](a8ct2e, dli05$ + 0x9, kyu3xq - dli05$ - 0x9), wv$f['endCDATA'](), kyu3xq + 0x3;
      }var vdbwrf = M_nj_h7(a8ct2e, dli05$),
          xkuy1q = vdbwrf['length'];if (xkuy1q > 0x1 && /!doctype/i['test'](vdbwrf[0x0][0x0])) {
        var s_o4g6 = vdbwrf[0x1][0x0],
            bwvdrf = xkuy1q > 0x3 && /^public$/i['test'](vdbwrf[0x2][0x0]) && vdbwrf[0x3][0x0],
            ld0bw$ = xkuy1q > 0x4 && vdbwrf[0x4][0x0],
            i0ln$5 = vdbwrf[xkuy1q - 0x1];return wv$f['startDTD'](s_o4g6, bwvdrf && bwvdrf['replace'](/^(['"])(.*?)\1$/, '$2'), ld0bw$ && ld0bw$['replace'](/^(['"])(.*?)\1$/, '$2')), wv$f['endDTD'](), i0ln$5['index'] + i0ln$5[0x0]['length'];
      }}return -0x1;
}function M_h_7jm(s47jm_, injmh7, gca6so) {
  var rxk = s47jm_['indexOf']('?>', injmh7);if (rxk) {
    var coa8 = s47jm_['substring'](injmh7, rxk)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (coa8) {
      {
        coa8[0x0]['length'];
      }return gca6so['processingInstruction'](coa8[0x1], coa8[0x2]), rxk + 0x2;
    }return -0x1;
  }return -0x1;
}function M_cg6ao8() {}function M_r9ku1(jh5mni, ezt82) {
  return jh5mni['__proto__'] = ezt82, jh5mni;
}function M_nj_h7(p8z2t, w$l0bd) {
  var c82e,
      fb0wd$ = [],
      _s6go4 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_s6go4['lastIndex'] = w$l0bd, _s6go4['exec'](p8z2t); c82e = _s6go4['exec'](p8z2t);) if (fb0wd$['push'](c82e), c82e[0x1]) return fb0wd$;
}var M_wdbv$f = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_f1wr9 = new RegExp('[\\-\\.0-9' + M_wdbv$f['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_uqxk1y = new RegExp('^' + M_wdbv$f['source'] + M_f1wr9['source'] + '*(?::' + M_wdbv$f['source'] + M_f1wr9['source'] + '*)?$'),
    M_gos4_6 = 0x0,
    M_fr9wvb = 0x1,
    M_fbw$d0 = 0x2,
    M_rvfw91 = 0x3,
    M_l$dwb = 0x4,
    M_dvbrf = 0x5,
    M_vwdrbf = 0x6,
    M_s46oag = 0x7;M_m7njih['prototype'] = { 'parse': function (t28ezc, r1fv9w, vf1k9) {
    var xkyqu = this['domBuilder'];xkyqu['startDocument'](), M__74hjm(r1fv9w, r1fv9w = {}), M_f9r1w(t28ezc, r1fv9w, vf1k9, xkyqu, this['errorHandler']), xkyqu['endDocument']();
  } }, M_cg6ao8['prototype'] = { 'setTagName': function (ceog) {
    if (!M_uqxk1y['test'](ceog)) throw new Error('invalid tagName:' + ceog);this['tagName'] = ceog;
  }, 'add': function (fbwvd, l0h5ni, zp2e8) {
    if (!M_uqxk1y['test'](fbwvd)) throw new Error('invalid attribute:' + fbwvd);this[this['length']++] = { 'qName': fbwvd, 'value': l0h5ni, 'offset': zp2e8 };
  }, 'length': 0x0, 'getLocalName': function (v9rw1f) {
    return this[v9rw1f]['localName'];
  }, 'getLocator': function (o8gcea) {
    return this[o8gcea]['locator'];
  }, 'getQName': function (jm7_nh) {
    return this[jm7_nh]['qName'];
  }, 'getURI': function (hj5n) {
    return this[hj5n]['uri'];
  }, 'getValue': function (ihmln5) {
    return this[ihmln5]['value'];
  } }, M_r9ku1({}, M_r9ku1['prototype']) instanceof M_r9ku1 || (M_r9ku1 = function (xq1kuy, xkyqu1) {
  function ln0h5() {}ln0h5['prototype'] = xkyqu1, ln0h5 = new ln0h5();for (xkyqu1 in xq1kuy) ln0h5[xkyqu1] = xq1kuy[xkyqu1];return ln0h5;
}), exports['XMLReader'] = M_m7njih;