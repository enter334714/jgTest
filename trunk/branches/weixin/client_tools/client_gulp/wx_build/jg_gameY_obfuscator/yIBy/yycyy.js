var a = wx.$y;
function yi$kg() {}function ydu1wt(utmd, umd5a, av35m, qigp$, $k9n2) {
  function hwtd(dwjh) {
    if (dwjh > 0xffff) {
      dwjh -= 0x10000;var m3au5 = 0xd800 + (dwjh >> 0xa),
          fo_7l8 = 0xdc00 + (0x3ff & dwjh);return String['fromCharCode'](m3au5, fo_7l8);
    }return String['fromCharCode'](dwjh);
  }function yrv0x(oh_f7j) {
    var $qign = oh_f7j['slice'](0x1, -0x1);return $qign in av35m ? av35m[$qign] : '#' === $qign['charAt'](0x0) ? hwtd(parseInt($qign['substr'](0x1)['replace']('x', '0x'))) : ($k9n2['error']('entity not found:' + oh_f7j), oh_f7j);
  }function m61a5(lfo87_) {
    if (lfo87_ > slc789) {
      var o7_fjh = utmd['substring'](slc789, lfo87_)['replace'](/&#?\w+;/g, yrv0x);a56um1 && yxzrv0(slc789), qigp$['characters'](o7_fjh, 0x0, lfo87_ - slc789), slc789 = lfo87_;
    }
  }function yxzrv0(hto4wj, yvr30z) {
    for (; hto4wj >= kc$29n && (yvr30z = yzxr0e['exec'](utmd));) v365ya = yvr30z['index'], kc$29n = v365ya + yvr30z[0x0]['length'], a56um1['lineNumber']++;a56um1['columnNumber'] = hto4wj - v365ya + 0x1;
  }for (var v365ya = 0x0, kc$29n = 0x0, yzxr0e = /.*(?:\r\n?|\n)|.*$/g, a56um1 = qigp$['locator'], xyrzv0 = [{ 'currentNSMap': umd5a }], gn$29k = {}, slc789 = 0x0;;) {
    try {
      var rzy0x = utmd['indexOf']('<', slc789);if (0x0 > rzy0x) {
        if (!utmd['substr'](slc789)['match'](/^\s*$/)) {
          var yv603r = qigp$['doc'],
              h4jwt = yv603r['createTextNode'](utmd['substr'](slc789));yv603r['appendChild'](h4jwt), qigp$['currentElement'] = h4jwt;
        }return;
      }switch (rzy0x > slc789 && m61a5(rzy0x), utmd['charAt'](rzy0x + 0x1)) {case '/':
          var m5d1u = utmd['indexOf']('>', rzy0x + 0x3),
              r03v6 = utmd['substring'](rzy0x + 0x2, m5d1u),
              vzryx0 = xyrzv0['pop']();0x0 > m5d1u ? (r03v6 = utmd['substring'](rzy0x + 0x2)['replace'](/[\s<].*/, ''), $k9n2['error']('end tag name: ' + r03v6 + ' is not complete:' + vzryx0['tagName']), m5d1u = rzy0x + 0x1 + r03v6['length']) : r03v6['match'](/\s</) && (r03v6 = r03v6['replace'](/[\s<].*/, ''), $k9n2['error']('end tag name: ' + r03v6 + ' maybe not complete'), m5d1u = rzy0x + 0x1 + r03v6['length']);var z0vyr3 = vzryx0['localNSMap'],
              $ig2k = vzryx0['tagName'] == r03v6,
              y0vr3 = $ig2k || vzryx0['tagName'] && vzryx0['tagName']['toLowerCase']() == r03v6['toLowerCase']();if (y0vr3) {
            if (qigp$['endElement'](vzryx0['uri'], vzryx0['localName'], r03v6), z0vyr3) {
              for (var m635a in z0vyr3) qigp$['endPrefixMapping'](m635a);
            }$ig2k || $k9n2['fatalError']('end tag name: ' + r03v6 + ' is not match the current start tagName:' + vzryx0['tagName']);
          } else xyrzv0['push'](vzryx0);m5d1u++;break;case '?':
          a56um1 && yxzrv0(rzy0x), m5d1u = yjo7_f(utmd, rzy0x, qigp$);break;case '!':
          a56um1 && yxzrv0(rzy0x), m5d1u = yj8f_7(utmd, rzy0x, qigp$, $k9n2);break;default:
          a56um1 && yxzrv0(rzy0x);var o4_hf = new yt1d4wh(),
              yv6r0 = xyrzv0[xyrzv0['length'] - 0x1]['currentNSMap'],
              m5d1u = ysk2c(utmd, rzy0x, o4_hf, yv6r0, yrv0x, $k9n2),
              zxryv = o4_hf['length'];if (!o4_hf['closed'] && yhfwjo(utmd, m5d1u, o4_hf['tagName'], gn$29k) && (o4_hf['closed'] = !0x0, av35m['nbsp'] || $k9n2['warning']('unclosed xml attribute')), a56um1 && zxryv) {
            for (var vy0r3z = yu1dtwm(a56um1, {}), htd = 0x0; zxryv > htd; htd++) {
              var $ck92n = o4_hf[htd];yxzrv0($ck92n['offset']), $ck92n['locator'] = yu1dtwm(a56um1, {});
            }qigp$['locator'] = vy0r3z, ycl7s(o4_hf, qigp$, yv6r0) && xyrzv0['push'](o4_hf), qigp$['locator'] = a56um1;
          } else ycl7s(o4_hf, qigp$, yv6r0) && xyrzv0['push'](o4_hf);'http://www.w3.org/1999/xhtml' !== o4_hf['uri'] || o4_hf['closed'] ? m5d1u++ : m5d1u = yk9ls2(utmd, m5d1u, o4_hf['tagName'], yrv0x, qigp$);}
    } catch (c987sl) {
      $k9n2['error']('element parse error: ' + c987sl), m5d1u = -0x1;
    }m5d1u > slc789 ? slc789 = m5d1u : m61a5(Math['max'](rzy0x, slc789) + 0x1);
  }
}function yu1dtwm(amu653, k29nc$) {
  return k29nc$['lineNumber'] = amu653['lineNumber'], k29nc$['columnNumber'] = amu653['columnNumber'], k29nc$;
}function ysk2c(_7fol8, a56mu1, dutm5, ut1wd4, u15mtd, wmudt) {
  for (var ryv6, xreyz0, rz = ++a56mu1, gn$i = yu561m;;) {
    var fo7j_h = _7fol8['charAt'](rz);switch (fo7j_h) {case '=':
        if (gn$i === y$ink2) ryv6 = _7fol8['slice'](a56mu1, rz), gn$i = yvy03rz;else {
          if (gn$i !== yv36ay0) throw new Error('attribute equal must after attrName');gn$i = yvy03rz;
        }break;case '\x27':case '\x22':
        if (gn$i === yvy03rz || gn$i === y$ink2) {
          if (gn$i === y$ink2 && (wmudt['warning']('attribute value must after "="'), ryv6 = _7fol8['slice'](a56mu1, rz)), a56mu1 = rz + 0x1, rz = _7fol8['indexOf'](fo7j_h, a56mu1), !(rz > 0x0)) throw new Error('attribute value no end \'' + fo7j_h + '\' match');xreyz0 = _7fol8['slice'](a56mu1, rz)['replace'](/&#?\w+;/g, u15mtd), dutm5['add'](ryv6, xreyz0, a56mu1 - 0x1), gn$i = ya6m1u5;
        } else {
          if (gn$i != ym653ua) throw new Error('attribute value must after "="');xreyz0 = _7fol8['slice'](a56mu1, rz)['replace'](/&#?\w+;/g, u15mtd), dutm5['add'](ryv6, xreyz0, a56mu1), wmudt['warning']('attribute "' + ryv6 + '" missed start quot(' + fo7j_h + ')!!'), a56mu1 = rz + 0x1, gn$i = ya6m1u5;
        }break;case '/':
        switch (gn$i) {case yu561m:
            dutm5['setTagName'](_7fol8['slice'](a56mu1, rz));case ya6m1u5:case yingq:case ylk:
            gn$i = ylk, dutm5['closed'] = !0x0;case ym653ua:case y$ink2:case yv36ay0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wmudt['error']('unexpected end of input'), gn$i == yu561m && dutm5['setTagName'](_7fol8['slice'](a56mu1, rz)), rz;case '>':
        switch (gn$i) {case yu561m:
            dutm5['setTagName'](_7fol8['slice'](a56mu1, rz));case ya6m1u5:case yingq:case ylk:
            break;case ym653ua:case y$ink2:
            xreyz0 = _7fol8['slice'](a56mu1, rz), '/' === xreyz0['slice'](-0x1) && (dutm5['closed'] = !0x0, xreyz0 = xreyz0['slice'](0x0, -0x1));case yv36ay0:
            gn$i === yv36ay0 && (xreyz0 = ryv6), gn$i == ym653ua ? (wmudt['warning']('attribute "' + xreyz0 + '" missed quot(")!!'), dutm5['add'](ryv6, xreyz0['replace'](/&#?\w+;/g, u15mtd), a56mu1)) : ('http://www.w3.org/1999/xhtml' === ut1wd4[''] && xreyz0['match'](/^(?:disabled|checked|selected)$/i) || wmudt['warning']('attribute "' + xreyz0 + '" missed value!! "' + xreyz0 + '" instead!!'), dutm5['add'](xreyz0, xreyz0, a56mu1));break;case yvy03rz:
            throw new Error('attribute value missed!!');}return rz;case '\u0080':
        fo7j_h = '\x20';default:
        if ('\x20' >= fo7j_h) switch (gn$i) {case yu561m:
            dutm5['setTagName'](_7fol8['slice'](a56mu1, rz)), gn$i = yingq;break;case y$ink2:
            ryv6 = _7fol8['slice'](a56mu1, rz), gn$i = yv36ay0;break;case ym653ua:
            var xreyz0 = _7fol8['slice'](a56mu1, rz)['replace'](/&#?\w+;/g, u15mtd);wmudt['warning']('attribute "' + xreyz0 + '" missed quot(")!!'), dutm5['add'](ryv6, xreyz0, a56mu1);case ya6m1u5:
            gn$i = yingq;} else switch (gn$i) {case yv36ay0:
            {
              dutm5['tagName'];
            }'http://www.w3.org/1999/xhtml' === ut1wd4[''] && ryv6['match'](/^(?:disabled|checked|selected)$/i) || wmudt['warning']('attribute "' + ryv6 + '" missed value!! "' + ryv6 + '" instead2!!'), dutm5['add'](ryv6, ryv6, a56mu1), a56mu1 = rz, gn$i = y$ink2;break;case ya6m1u5:
            wmudt['warning']('attribute space is required"' + ryv6 + '\x22!!');case yingq:
            gn$i = y$ink2, a56mu1 = rz;break;case yvy03rz:
            gn$i = ym653ua, a56mu1 = rz;break;case ylk:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rz++;
  }
}function ycl7s(yrxe, m5tu1, lf7) {
  for (var w4 = yrxe['tagName'], ho4t = null, dtj4h = yrxe['length']; dtj4h--;) {
    var oj_78f = yrxe[dtj4h],
        v6y5a = oj_78f['qName'],
        _7hof = oj_78f['value'],
        m3u6a = v6y5a['indexOf'](':');if (m3u6a > 0x0) var of4_j = oj_78f['prefix'] = v6y5a['slice'](0x0, m3u6a),
        dm1tu5 = v6y5a['slice'](m3u6a + 0x1),
        j87_f = 'xmlns' === of4_j && dm1tu5;else dm1tu5 = v6y5a, of4_j = null, j87_f = 'xmlns' === v6y5a && '';oj_78f['localName'] = dm1tu5, j87_f !== !0x1 && (null == ho4t && (ho4t = {}, yh4fjow(lf7, lf7 = {})), lf7[j87_f] = ho4t[j87_f] = _7hof, oj_78f['uri'] = 'http://www.w3.org/2000/xmlns/', m5tu1['startPrefixMapping'](j87_f, _7hof));
  }for (var dtj4h = yrxe['length']; dtj4h--;) {
    oj_78f = yrxe[dtj4h];var of4_j = oj_78f['prefix'];of4_j && ('xml' === of4_j && (oj_78f['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== of4_j && (oj_78f['uri'] = lf7[of4_j || '']));
  }var m3u6a = w4['indexOf'](':');m3u6a > 0x0 ? (of4_j = yrxe['prefix'] = w4['slice'](0x0, m3u6a), dm1tu5 = yrxe['localName'] = w4['slice'](m3u6a + 0x1)) : (of4_j = null, dm1tu5 = yrxe['localName'] = w4);var jhw4t = yrxe['uri'] = lf7[of4_j || ''];if (m5tu1['startElement'](jhw4t, dm1tu5, w4, yrxe), !yrxe['closed']) return yrxe['currentNSMap'] = lf7, yrxe['localNSMap'] = ho4t, !0x0;if (m5tu1['endElement'](jhw4t, dm1tu5, w4), ho4t) {
    for (of4_j in ho4t) m5tu1['endPrefixMapping'](of4_j);
  }
}function yk9ls2(s_l7f8, s2kn, $9ng2k, $c2k, r0xv) {
  if (/^(?:script|textarea)$/i['test']($9ng2k)) {
    var _ol7 = s_l7f8['indexOf']('</' + $9ng2k + '>', s2kn),
        l79cs8 = s_l7f8['substring'](s2kn + 0x1, _ol7);if (/[&<]/['test'](l79cs8)) return (/^script$/i['test']($9ng2k) ? (r0xv['characters'](l79cs8, 0x0, l79cs8['length']), _ol7) : (l79cs8 = l79cs8['replace'](/&#?\w+;/g, $c2k), r0xv['characters'](l79cs8, 0x0, l79cs8['length']), _ol7)
    );
  }return s2kn + 0x1;
}function yhfwjo(npg$q, f8o_j7, dt14h, n$qp) {
  var dmu51t = n$qp[dt14h];return null == dmu51t && (dmu51t = npg$q['lastIndexOf']('</' + dt14h + '>'), f8o_j7 > dmu51t && (dmu51t = npg$q['lastIndexOf']('</' + dt14h)), n$qp[dt14h] = dmu51t), f8o_j7 > dmu51t;
}function yh4fjow(wutdm, ofjh_4) {
  for (var l_f78 in wutdm) ofjh_4[l_f78] = wutdm[l_f78];
}function yj8f_7(cls978, n2$c, rze0yx, y35v6) {
  var dtuw = cls978['charAt'](n2$c + 0x2);switch (dtuw) {case '-':
      if ('-' === cls978['charAt'](n2$c + 0x3)) {
        var cl9s78 = cls978['indexOf']('-->', n2$c + 0x4);return cl9s78 > n2$c ? (rze0yx['comment'](cls978, n2$c + 0x4, cl9s78 - n2$c - 0x4), cl9s78 + 0x3) : (y35v6['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cls978['substr'](n2$c + 0x3, 0x6)) {
        var cl9s78 = cls978['indexOf'](']]>', n2$c + 0x9);return rze0yx['startCDATA'](), rze0yx['characters'](cls978, n2$c + 0x9, cl9s78 - n2$c - 0x9), rze0yx['endCDATA'](), cl9s78 + 0x3;
      }var yvrxz = ym1a5d(cls978, n2$c),
          klcs8 = yvrxz['length'];if (klcs8 > 0x1 && /!doctype/i['test'](yvrxz[0x0][0x0])) {
        var ojt4w = yvrxz[0x1][0x0],
            _s87lf = klcs8 > 0x3 && /^public$/i['test'](yvrxz[0x2][0x0]) && yvrxz[0x3][0x0],
            gi2nq = klcs8 > 0x4 && yvrxz[0x4][0x0],
            snc = yvrxz[klcs8 - 0x1];return rze0yx['startDTD'](ojt4w, _s87lf && _s87lf['replace'](/^(['"])(.*?)\1$/, '$2'), gi2nq && gi2nq['replace'](/^(['"])(.*?)\1$/, '$2')), rze0yx['endDTD'](), snc['index'] + snc[0x0]['length'];
      }}return -0x1;
}function yjo7_f(cnk92, y3v60a, y3vzr0) {
  var ua56m1 = cnk92['indexOf']('?>', y3v60a);if (ua56m1) {
    var d51a = cnk92['substring'](y3v60a, ua56m1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (d51a) {
      {
        d51a[0x0]['length'];
      }return y3vzr0['processingInstruction'](d51a[0x1], d51a[0x2]), ua56m1 + 0x2;
    }return -0x1;
  }return -0x1;
}function yt1d4wh() {}function ysk98lc(am1u56, p$giqn) {
  return am1u56['__proto__'] = p$giqn, am1u56;
}function ym1a5d(_lf8, oj_7) {
  var y6av35,
      xrz0yv = [],
      ohwf = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ohwf['lastIndex'] = oj_7, ohwf['exec'](_lf8); y6av35 = ohwf['exec'](_lf8);) if (xrz0yv['push'](y6av35), y6av35[0x1]) return xrz0yv;
}var yz0vy3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    yt5ud1 = new RegExp('[\\-\\.0-9' + yz0vy3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ygnk$i2 = new RegExp('^' + yz0vy3['source'] + yt5ud1['source'] + '*(?::' + yz0vy3['source'] + yt5ud1['source'] + '*)?$'),
    yu561m = 0x0,
    y$ink2 = 0x1,
    yv36ay0 = 0x2,
    yvy03rz = 0x3,
    ym653ua = 0x4,
    ya6m1u5 = 0x5,
    yingq = 0x6,
    ylk = 0x7;yi$kg['prototype'] = { 'parse': function (s7_8lf, v6a, j4fo_) {
    var dtjw = this['domBuilder'];dtjw['startDocument'](), yh4fjow(v6a, v6a = {}), ydu1wt(s7_8lf, v6a, j4fo_, dtjw, this['errorHandler']), dtjw['endDocument']();
  } }, yt1d4wh['prototype'] = { 'setTagName': function (m1a5ud) {
    if (!ygnk$i2['test'](m1a5ud)) throw new Error('invalid tagName:' + m1a5ud);this['tagName'] = m1a5ud;
  }, 'add': function (csk8l, m65a1u, n$g9k) {
    if (!ygnk$i2['test'](csk8l)) throw new Error('invalid attribute:' + csk8l);this[this['length']++] = { 'qName': csk8l, 'value': m65a1u, 'offset': n$g9k };
  }, 'length': 0x0, 'getLocalName': function (g$qn2) {
    return this[g$qn2]['localName'];
  }, 'getLocator': function (hwojf) {
    return this[hwojf]['locator'];
  }, 'getQName': function (g$ki) {
    return this[g$ki]['qName'];
  }, 'getURI': function (j_f87o) {
    return this[j_f87o]['uri'];
  }, 'getValue': function (xy0rez) {
    return this[xy0rez]['value'];
  } }, ysk98lc({}, ysk98lc['prototype']) instanceof ysk98lc || (ysk98lc = function (v563y, l978c) {
  function mu15d() {}mu15d['prototype'] = l978c, mu15d = new mu15d();for (l978c in v563y) mu15d[l978c] = v563y[l978c];return mu15d;
}), exports['XMLReader'] = yi$kg;