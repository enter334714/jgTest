var D = wx.$b;
function bwt1cpm() {}function bnaj4(yuizm, i0muy, u0jin, zwt1m, i0n5j4) {
  function p2hrv(d82sr) {
    if (d82sr > 0xffff) {
      d82sr -= 0x10000;var do6kxl = 0xd800 + (d82sr >> 0xa),
          d9os8 = 0xdc00 + (0x3ff & d82sr);return String['fromCharCode'](do6kxl, d9os8);
    }return String['fromCharCode'](d82sr);
  }function lodxk(cpwt) {
    var _r8 = cpwt['slice'](0x1, -0x1);return _r8 in u0jin ? u0jin[_r8] : '#' === _r8['charAt'](0x0) ? p2hrv(parseInt(_r8['substr'](0x1)['replace']('x', '0x'))) : (i0n5j4['error']('entity not found:' + cpwt), cpwt);
  }function lo7qx(t1mwp) {
    if (t1mwp > pt1mc) {
      var odlk6x = yuizm['substring'](pt1mc, t1mwp)['replace'](/&#?\w+;/g, lodxk);jn40iu && v2pr_(pt1mc), zwt1m['characters'](odlk6x, 0x0, t1mwp - pt1mc), pt1mc = t1mwp;
    }
  }function v2pr_(efa5$, ytcm) {
    for (; efa5$ >= pr_2h && (ytcm = p1tcv['exec'](yuizm));) r9_s8 = ytcm['index'], pr_2h = r9_s8 + ytcm[0x0]['length'], jn40iu['lineNumber']++;jn40iu['columnNumber'] = efa5$ - r9_s8 + 0x1;
  }for (var r9_s8 = 0x0, pr_2h = 0x0, p1tcv = /.*(?:\r\n?|\n)|.*$/g, jn40iu = zwt1m['locator'], d86s9 = [{ 'currentNSMap': i0muy }], utyzi = {}, pt1mc = 0x0;;) {
    try {
      var j5i4 = yuizm['indexOf']('<', pt1mc);if (0x0 > j5i4) {
        if (!yuizm['substr'](pt1mc)['match'](/^\s*$/)) {
          var kx3qg7 = zwt1m['doc'],
              ji05n = kx3qg7['createTextNode'](yuizm['substr'](pt1mc));kx3qg7['appendChild'](ji05n), zwt1m['currentElement'] = ji05n;
        }return;
      }switch (j5i4 > pt1mc && lo7qx(j5i4), yuizm['charAt'](j5i4 + 0x1)) {case '/':
          var t1cmp = yuizm['indexOf']('>', j5i4 + 0x3),
              f45ea = yuizm['substring'](j5i4 + 0x2, t1cmp),
              u0znyi = d86s9['pop']();0x0 > t1cmp ? (f45ea = yuizm['substring'](j5i4 + 0x2)['replace'](/[\s<].*/, ''), i0n5j4['error']('end tag name: ' + f45ea + ' is not complete:' + u0znyi['tagName']), t1cmp = j5i4 + 0x1 + f45ea['length']) : f45ea['match'](/\s</) && (f45ea = f45ea['replace'](/[\s<].*/, ''), i0n5j4['error']('end tag name: ' + f45ea + ' maybe not complete'), t1cmp = j5i4 + 0x1 + f45ea['length']);var pmtcw = u0znyi['localNSMap'],
              ol86ds = u0znyi['tagName'] == f45ea,
              phw_2 = ol86ds || u0znyi['tagName'] && u0znyi['tagName']['toLowerCase']() == f45ea['toLowerCase']();if (phw_2) {
            if (zwt1m['endElement'](u0znyi['uri'], u0znyi['localName'], f45ea), pmtcw) {
              for (var jn0yui in pmtcw) zwt1m['endPrefixMapping'](jn0yui);
            }ol86ds || i0n5j4['fatalError']('end tag name: ' + f45ea + ' is not match the current start tagName:' + u0znyi['tagName']);
          } else d86s9['push'](u0znyi);t1cmp++;break;case '?':
          jn40iu && v2pr_(j5i4), t1cmp = bd2rs89(yuizm, j5i4, zwt1m);break;case '!':
          jn40iu && v2pr_(j5i4), t1cmp = bunyj0(yuizm, j5i4, zwt1m, i0n5j4);break;default:
          jn40iu && v2pr_(j5i4);var o7xl = new bymctuz(),
              l68dok = d86s9[d86s9['length'] - 0x1]['currentNSMap'],
              t1cmp = bwmzc1(yuizm, j5i4, o7xl, l68dok, lodxk, i0n5j4),
              yuczm = o7xl['length'];if (!o7xl['closed'] && bko6d8(yuizm, t1cmp, o7xl['tagName'], utyzi) && (o7xl['closed'] = !0x0, u0jin['nbsp'] || i0n5j4['warning']('unclosed xml attribute')), jn40iu && yuczm) {
            for (var cytmz = boxlk76(jn40iu, {}), pwmt = 0x0; yuczm > pwmt; pwmt++) {
              var i0ujn4 = o7xl[pwmt];v2pr_(i0ujn4['offset']), i0ujn4['locator'] = boxlk76(jn40iu, {});
            }zwt1m['locator'] = cytmz, bkxglq(o7xl, zwt1m, l68dok) && d86s9['push'](o7xl), zwt1m['locator'] = jn40iu;
          } else bkxglq(o7xl, zwt1m, l68dok) && d86s9['push'](o7xl);'http://www.w3.org/1999/xhtml' !== o7xl['uri'] || o7xl['closed'] ? t1cmp++ : t1cmp = bd9r8(yuizm, t1cmp, o7xl['tagName'], lodxk, zwt1m);}
    } catch (fa$j54) {
      i0n5j4['error']('element parse error: ' + fa$j54), t1cmp = -0x1;
    }t1cmp > pt1mc ? pt1mc = t1cmp : lo7qx(Math['max'](j5i4, pt1mc) + 0x1);
  }
}function boxlk76(tyzmc1, w_pv1h) {
  return w_pv1h['lineNumber'] = tyzmc1['lineNumber'], w_pv1h['columnNumber'] = tyzmc1['columnNumber'], w_pv1h;
}function bwmzc1(o7xlkq, cm1wpt, rs89_, v1cwpt, sd2r89, yn0jiu) {
  for (var h_vr9, wv1cp, sl8d6 = ++cm1wpt, hpvw = bw1hvc;;) {
    var h92r_s = o7xlkq['charAt'](sl8d6);switch (h92r_s) {case '=':
        if (hpvw === bw1mcpt) h_vr9 = o7xlkq['slice'](cm1wpt, sl8d6), hpvw = bkxq73;else {
          if (hpvw !== bf4a5j) throw new Error('attribute equal must after attrName');hpvw = bkxq73;
        }break;case '\x27':case '\x22':
        if (hpvw === bkxq73 || hpvw === bw1mcpt) {
          if (hpvw === bw1mcpt && (yn0jiu['warning']('attribute value must after "="'), h_vr9 = o7xlkq['slice'](cm1wpt, sl8d6)), cm1wpt = sl8d6 + 0x1, sl8d6 = o7xlkq['indexOf'](h92r_s, cm1wpt), !(sl8d6 > 0x0)) throw new Error('attribute value no end \'' + h92r_s + '\' match');wv1cp = o7xlkq['slice'](cm1wpt, sl8d6)['replace'](/&#?\w+;/g, sd2r89), rs89_['add'](h_vr9, wv1cp, cm1wpt - 0x1), hpvw = bhvp_w;
        } else {
          if (hpvw != blsd86o) throw new Error('attribute value must after "="');wv1cp = o7xlkq['slice'](cm1wpt, sl8d6)['replace'](/&#?\w+;/g, sd2r89), rs89_['add'](h_vr9, wv1cp, cm1wpt), yn0jiu['warning']('attribute "' + h_vr9 + '" missed start quot(' + h92r_s + ')!!'), cm1wpt = sl8d6 + 0x1, hpvw = bhvp_w;
        }break;case '/':
        switch (hpvw) {case bw1hvc:
            rs89_['setTagName'](o7xlkq['slice'](cm1wpt, sl8d6));case bhvp_w:case bztmuiy:case bmwzc:
            hpvw = bmwzc, rs89_['closed'] = !0x0;case blsd86o:case bw1mcpt:case bf4a5j:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yn0jiu['error']('unexpected end of input'), hpvw == bw1hvc && rs89_['setTagName'](o7xlkq['slice'](cm1wpt, sl8d6)), sl8d6;case '>':
        switch (hpvw) {case bw1hvc:
            rs89_['setTagName'](o7xlkq['slice'](cm1wpt, sl8d6));case bhvp_w:case bztmuiy:case bmwzc:
            break;case blsd86o:case bw1mcpt:
            wv1cp = o7xlkq['slice'](cm1wpt, sl8d6), '/' === wv1cp['slice'](-0x1) && (rs89_['closed'] = !0x0, wv1cp = wv1cp['slice'](0x0, -0x1));case bf4a5j:
            hpvw === bf4a5j && (wv1cp = h_vr9), hpvw == blsd86o ? (yn0jiu['warning']('attribute "' + wv1cp + '" missed quot(")!!'), rs89_['add'](h_vr9, wv1cp['replace'](/&#?\w+;/g, sd2r89), cm1wpt)) : ('http://www.w3.org/1999/xhtml' === v1cwpt[''] && wv1cp['match'](/^(?:disabled|checked|selected)$/i) || yn0jiu['warning']('attribute "' + wv1cp + '" missed value!! "' + wv1cp + '" instead!!'), rs89_['add'](wv1cp, wv1cp, cm1wpt));break;case bkxq73:
            throw new Error('attribute value missed!!');}return sl8d6;case '\u0080':
        h92r_s = '\x20';default:
        if ('\x20' >= h92r_s) switch (hpvw) {case bw1hvc:
            rs89_['setTagName'](o7xlkq['slice'](cm1wpt, sl8d6)), hpvw = bztmuiy;break;case bw1mcpt:
            h_vr9 = o7xlkq['slice'](cm1wpt, sl8d6), hpvw = bf4a5j;break;case blsd86o:
            var wv1cp = o7xlkq['slice'](cm1wpt, sl8d6)['replace'](/&#?\w+;/g, sd2r89);yn0jiu['warning']('attribute "' + wv1cp + '" missed quot(")!!'), rs89_['add'](h_vr9, wv1cp, cm1wpt);case bhvp_w:
            hpvw = bztmuiy;} else switch (hpvw) {case bf4a5j:
            {
              rs89_['tagName'];
            }'http://www.w3.org/1999/xhtml' === v1cwpt[''] && h_vr9['match'](/^(?:disabled|checked|selected)$/i) || yn0jiu['warning']('attribute "' + h_vr9 + '" missed value!! "' + h_vr9 + '" instead2!!'), rs89_['add'](h_vr9, h_vr9, cm1wpt), cm1wpt = sl8d6, hpvw = bw1mcpt;break;case bhvp_w:
            yn0jiu['warning']('attribute space is required"' + h_vr9 + '\x22!!');case bztmuiy:
            hpvw = bw1mcpt, cm1wpt = sl8d6;break;case bkxq73:
            hpvw = blsd86o, cm1wpt = sl8d6;break;case bmwzc:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}sl8d6++;
  }
}function bkxglq(lsd68, a4jf$, tw1mzc) {
  for (var hwv = lsd68['tagName'], rs_82 = null, o89s6 = lsd68['length']; o89s6--;) {
    var pt1cmw = lsd68[o89s6],
        sd96 = pt1cmw['qName'],
        u0i4nj = pt1cmw['value'],
        lx7qgk = sd96['indexOf'](':');if (lx7qgk > 0x0) var unzy0 = pt1cmw['prefix'] = sd96['slice'](0x0, lx7qgk),
        _rs9h2 = sd96['slice'](lx7qgk + 0x1),
        zu = 'xmlns' === unzy0 && _rs9h2;else _rs9h2 = sd96, unzy0 = null, zu = 'xmlns' === sd96 && '';pt1cmw['localName'] = _rs9h2, zu !== !0x1 && (null == rs_82 && (rs_82 = {}, bvh_pw2(tw1mzc, tw1mzc = {})), tw1mzc[zu] = rs_82[zu] = u0i4nj, pt1cmw['uri'] = 'http://www.w3.org/2000/xmlns/', a4jf$['startPrefixMapping'](zu, u0i4nj));
  }for (var o89s6 = lsd68['length']; o89s6--;) {
    pt1cmw = lsd68[o89s6];var unzy0 = pt1cmw['prefix'];unzy0 && ('xml' === unzy0 && (pt1cmw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== unzy0 && (pt1cmw['uri'] = tw1mzc[unzy0 || '']));
  }var lx7qgk = hwv['indexOf'](':');lx7qgk > 0x0 ? (unzy0 = lsd68['prefix'] = hwv['slice'](0x0, lx7qgk), _rs9h2 = lsd68['localName'] = hwv['slice'](lx7qgk + 0x1)) : (unzy0 = null, _rs9h2 = lsd68['localName'] = hwv);var mw1cz = lsd68['uri'] = tw1mzc[unzy0 || ''];if (a4jf$['startElement'](mw1cz, _rs9h2, hwv, lsd68), !lsd68['closed']) return lsd68['currentNSMap'] = tw1mzc, lsd68['localNSMap'] = rs_82, !0x0;if (a4jf$['endElement'](mw1cz, _rs9h2, hwv), rs_82) {
    for (unzy0 in rs_82) a4jf$['endPrefixMapping'](unzy0);
  }
}function bd9r8(twpc1, ynij0u, z1mcyt, itmu, a5ef4) {
  if (/^(?:script|textarea)$/i['test'](z1mcyt)) {
    var r2ph_v = twpc1['indexOf']('</' + z1mcyt + '>', ynij0u),
        i0ynuj = twpc1['substring'](ynij0u + 0x1, r2ph_v);if (/[&<]/['test'](i0ynuj)) return (/^script$/i['test'](z1mcyt) ? (a5ef4['characters'](i0ynuj, 0x0, i0ynuj['length']), r2ph_v) : (i0ynuj = i0ynuj['replace'](/&#?\w+;/g, itmu), a5ef4['characters'](i0ynuj, 0x0, i0ynuj['length']), r2ph_v)
    );
  }return ynij0u + 0x1;
}function bko6d8(od8, xkld, $a, tpcwv1) {
  var do9s = tpcwv1[$a];return null == do9s && (do9s = od8['lastIndexOf']('</' + $a + '>'), xkld > do9s && (do9s = od8['lastIndexOf']('</' + $a)), tpcwv1[$a] = do9s), xkld > do9s;
}function bvh_pw2(l7qoxk, hw2pv) {
  for (var wv1p in l7qoxk) hw2pv[wv1p] = l7qoxk[wv1p];
}function bunyj0(cvtp1w, ef54a$, kqlgx7, un0zi) {
  var ldk6ox = cvtp1w['charAt'](ef54a$ + 0x2);switch (ldk6ox) {case '-':
      if ('-' === cvtp1w['charAt'](ef54a$ + 0x3)) {
        var zniyu = cvtp1w['indexOf']('-->', ef54a$ + 0x4);return zniyu > ef54a$ ? (kqlgx7['comment'](cvtp1w, ef54a$ + 0x4, zniyu - ef54a$ - 0x4), zniyu + 0x3) : (un0zi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cvtp1w['substr'](ef54a$ + 0x3, 0x6)) {
        var zniyu = cvtp1w['indexOf'](']]>', ef54a$ + 0x9);return kqlgx7['startCDATA'](), kqlgx7['characters'](cvtp1w, ef54a$ + 0x9, zniyu - ef54a$ - 0x9), kqlgx7['endCDATA'](), zniyu + 0x3;
      }var u0zmy = bi0yunj(cvtp1w, ef54a$),
          pcvwt = u0zmy['length'];if (pcvwt > 0x1 && /!doctype/i['test'](u0zmy[0x0][0x0])) {
        var kglq = u0zmy[0x1][0x0],
            j$5a4 = pcvwt > 0x3 && /^public$/i['test'](u0zmy[0x2][0x0]) && u0zmy[0x3][0x0],
            lk6xo7 = pcvwt > 0x4 && u0zmy[0x4][0x0],
            uzmyi0 = u0zmy[pcvwt - 0x1];return kqlgx7['startDTD'](kglq, j$5a4 && j$5a4['replace'](/^(['"])(.*?)\1$/, '$2'), lk6xo7 && lk6xo7['replace'](/^(['"])(.*?)\1$/, '$2')), kqlgx7['endDTD'](), uzmyi0['index'] + uzmyi0[0x0]['length'];
      }}return -0x1;
}function bd2rs89(_pv2h, i0nyuz, ijny0) {
  var r_2pvh = _pv2h['indexOf']('?>', i0nyuz);if (r_2pvh) {
    var czy1t = _pv2h['substring'](i0nyuz, r_2pvh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (czy1t) {
      {
        czy1t[0x0]['length'];
      }return ijny0['processingInstruction'](czy1t[0x1], czy1t[0x2]), r_2pvh + 0x2;
    }return -0x1;
  }return -0x1;
}function bymctuz() {}function bm1zyt(qkgl7, wtcpv) {
  return qkgl7['__proto__'] = wtcpv, qkgl7;
}function bi0yunj(s8od, j45$na) {
  var mw1tzc,
      _92rhs = [],
      yj0uin = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (yj0uin['lastIndex'] = j45$na, yj0uin['exec'](s8od); mw1tzc = yj0uin['exec'](s8od);) if (_92rhs['push'](mw1tzc), mw1tzc[0x1]) return _92rhs;
}var b_98r2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    byj0i = new RegExp('[\\-\\.0-9' + b_98r2['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    bc1zmy = new RegExp('^' + b_98r2['source'] + byj0i['source'] + '*(?::' + b_98r2['source'] + byj0i['source'] + '*)?$'),
    bw1hvc = 0x0,
    bw1mcpt = 0x1,
    bf4a5j = 0x2,
    bkxq73 = 0x3,
    blsd86o = 0x4,
    bhvp_w = 0x5,
    bztmuiy = 0x6,
    bmwzc = 0x7;bwt1cpm['prototype'] = { 'parse': function (a5$4j, gx73, muczty) {
    var uyz0 = this['domBuilder'];uyz0['startDocument'](), bvh_pw2(gx73, gx73 = {}), bnaj4(a5$4j, gx73, muczty, uyz0, this['errorHandler']), uyz0['endDocument']();
  } }, bymctuz['prototype'] = { 'setTagName': function (kgx7lq) {
    if (!bc1zmy['test'](kgx7lq)) throw new Error('invalid tagName:' + kgx7lq);this['tagName'] = kgx7lq;
  }, 'add': function (_89s2, mt1ycz, wtmpc1) {
    if (!bc1zmy['test'](_89s2)) throw new Error('invalid attribute:' + _89s2);this[this['length']++] = { 'qName': _89s2, 'value': mt1ycz, 'offset': wtmpc1 };
  }, 'length': 0x0, 'getLocalName': function (_vr2p) {
    return this[_vr2p]['localName'];
  }, 'getLocator': function (l6o8k) {
    return this[l6o8k]['locator'];
  }, 'getQName': function (fj$a5) {
    return this[fj$a5]['qName'];
  }, 'getURI': function (myuiz0) {
    return this[myuiz0]['uri'];
  }, 'getValue': function (a$f) {
    return this[a$f]['value'];
  } }, bm1zyt({}, bm1zyt['prototype']) instanceof bm1zyt || (bm1zyt = function (uy0jni, $j405n) {
  function vph2r_() {}vph2r_['prototype'] = $j405n, vph2r_ = new vph2r_();for ($j405n in uy0jni) vph2r_[$j405n] = uy0jni[$j405n];return vph2r_;
}), exports['XMLReader'] = bwt1cpm;