var a = wx.$y;
function yc92lks() {}function yk8lsc(ma51u6, lk29cs, u15m6, fh4_, rz0v3) {
  function tumd(_ojh7) {
    if (_ojh7 > 0xffff) {
      _ojh7 -= 0x10000;var ohw4 = 0xd800 + (_ojh7 >> 0xa),
          umtd = 0xdc00 + (0x3ff & _ojh7);return String['fromCharCode'](ohw4, umtd);
    }return String['fromCharCode'](_ojh7);
  }function $n29(ckn2) {
    var v5y6a = ckn2['slice'](0x1, -0x1);return v5y6a in u15m6 ? u15m6[v5y6a] : '#' === v5y6a['charAt'](0x0) ? tumd(parseInt(v5y6a['substr'](0x1)['replace']('x', '0x'))) : (rz0v3['error']('entity not found:' + ckn2), ckn2);
  }function v6m5a3(ck89) {
    if (ck89 > a53u6) {
      var td4hw = ma51u6['substring'](a53u6, ck89)['replace'](/&#?\w+;/g, $n29);xryez && n$ip(a53u6), fh4_['characters'](td4hw, 0x0, ck89 - a53u6), a53u6 = ck89;
    }
  }function n$ip(f_jo, _8s7fl) {
    for (; f_jo >= g$i2n && (_8s7fl = y0va63['exec'](ma51u6));) l_fo8 = _8s7fl['index'], g$i2n = l_fo8 + _8s7fl[0x0]['length'], xryez['lineNumber']++;xryez['columnNumber'] = f_jo - l_fo8 + 0x1;
  }for (var l_fo8 = 0x0, g$i2n = 0x0, y0va63 = /.*(?:\r\n?|\n)|.*$/g, xryez = fh4_['locator'], p$qig = [{ 'currentNSMap': lk29cs }], k2c9ls = {}, a53u6 = 0x0;;) {
    try {
      var ua61 = ma51u6['indexOf']('<', a53u6);if (0x0 > ua61) {
        if (!ma51u6['substr'](a53u6)['match'](/^\s*$/)) {
          var ay06v3 = fh4_['doc'],
              u3ma5 = ay06v3['createTextNode'](ma51u6['substr'](a53u6));ay06v3['appendChild'](u3ma5), fh4_['currentElement'] = u3ma5;
        }return;
      }switch (ua61 > a53u6 && v6m5a3(ua61), ma51u6['charAt'](ua61 + 0x1)) {case '/':
          var fo_8j7 = ma51u6['indexOf']('>', ua61 + 0x3),
              vy30a6 = ma51u6['substring'](ua61 + 0x2, fo_8j7),
              _h4foj = p$qig['pop']();0x0 > fo_8j7 ? (vy30a6 = ma51u6['substring'](ua61 + 0x2)['replace'](/[\s<].*/, ''), rz0v3['error']('end tag name: ' + vy30a6 + ' is not complete:' + _h4foj['tagName']), fo_8j7 = ua61 + 0x1 + vy30a6['length']) : vy30a6['match'](/\s</) && (vy30a6 = vy30a6['replace'](/[\s<].*/, ''), rz0v3['error']('end tag name: ' + vy30a6 + ' maybe not complete'), fo_8j7 = ua61 + 0x1 + vy30a6['length']);var d5am1 = _h4foj['localNSMap'],
              m6a35u = _h4foj['tagName'] == vy30a6,
              g$q2ni = m6a35u || _h4foj['tagName'] && _h4foj['tagName']['toLowerCase']() == vy30a6['toLowerCase']();if (g$q2ni) {
            if (fh4_['endElement'](_h4foj['uri'], _h4foj['localName'], vy30a6), d5am1) {
              for (var $9k2c in d5am1) fh4_['endPrefixMapping']($9k2c);
            }m6a35u || rz0v3['fatalError']('end tag name: ' + vy30a6 + ' is not match the current start tagName:' + _h4foj['tagName']);
          } else p$qig['push'](_h4foj);fo_8j7++;break;case '?':
          xryez && n$ip(ua61), fo_8j7 = ydjt4wh(ma51u6, ua61, fh4_);break;case '!':
          xryez && n$ip(ua61), fo_8j7 = yh7jf_o(ma51u6, ua61, fh4_, rz0v3);break;default:
          xryez && n$ip(ua61);var l8f7o_ = new ydhw4t1(),
              l897c = p$qig[p$qig['length'] - 0x1]['currentNSMap'],
              fo_8j7 = yma35v6(ma51u6, ua61, l8f7o_, l897c, $n29, rz0v3),
              c29snk = l8f7o_['length'];if (!l8f7o_['closed'] && ynks2c9(ma51u6, fo_8j7, l8f7o_['tagName'], k2c9ls) && (l8f7o_['closed'] = !0x0, u15m6['nbsp'] || rz0v3['warning']('unclosed xml attribute')), xryez && c29snk) {
            for (var jh4owt = yjhf_o(xryez, {}), twd4h = 0x0; c29snk > twd4h; twd4h++) {
              var nki2$ = l8f7o_[twd4h];n$ip(nki2$['offset']), nki2$['locator'] = yjhf_o(xryez, {});
            }fh4_['locator'] = jh4owt, yyr3zv0(l8f7o_, fh4_, l897c) && p$qig['push'](l8f7o_), fh4_['locator'] = xryez;
          } else yyr3zv0(l8f7o_, fh4_, l897c) && p$qig['push'](l8f7o_);'http://www.w3.org/1999/xhtml' !== l8f7o_['uri'] || l8f7o_['closed'] ? fo_8j7++ : fo_8j7 = yt1w4d(ma51u6, fo_8j7, l8f7o_['tagName'], $n29, fh4_);}
    } catch (r0vy63) {
      rz0v3['error']('element parse error: ' + r0vy63), fo_8j7 = -0x1;
    }fo_8j7 > a53u6 ? a53u6 = fo_8j7 : v6m5a3(Math['max'](ua61, a53u6) + 0x1);
  }
}function yjhf_o(lk92cs, u5m3a) {
  return u5m3a['lineNumber'] = lk92cs['lineNumber'], u5m3a['columnNumber'] = lk92cs['columnNumber'], u5m3a;
}function yma35v6(gn92$, sc98kl, k29ls, ol_7f8, qngp$i, fjwoh) {
  for (var kc2, wt4d1h, pi$qg = ++sc98kl, hjwdt4 = ykg$2n;;) {
    var zy3v0 = gn92$['charAt'](pi$qg);switch (zy3v0) {case '=':
        if (hjwdt4 === yjfhwo) kc2 = gn92$['slice'](sc98kl, pi$qg), hjwdt4 = yr0zvx;else {
          if (hjwdt4 !== ylcs8_) throw new Error('attribute equal must after attrName');hjwdt4 = yr0zvx;
        }break;case '\x27':case '\x22':
        if (hjwdt4 === yr0zvx || hjwdt4 === yjfhwo) {
          if (hjwdt4 === yjfhwo && (fjwoh['warning']('attribute value must after "="'), kc2 = gn92$['slice'](sc98kl, pi$qg)), sc98kl = pi$qg + 0x1, pi$qg = gn92$['indexOf'](zy3v0, sc98kl), !(pi$qg > 0x0)) throw new Error('attribute value no end \'' + zy3v0 + '\' match');wt4d1h = gn92$['slice'](sc98kl, pi$qg)['replace'](/&#?\w+;/g, qngp$i), k29ls['add'](kc2, wt4d1h, sc98kl - 0x1), hjwdt4 = ywtd1um;
        } else {
          if (hjwdt4 != yadu15) throw new Error('attribute value must after "="');wt4d1h = gn92$['slice'](sc98kl, pi$qg)['replace'](/&#?\w+;/g, qngp$i), k29ls['add'](kc2, wt4d1h, sc98kl), fjwoh['warning']('attribute "' + kc2 + '" missed start quot(' + zy3v0 + ')!!'), sc98kl = pi$qg + 0x1, hjwdt4 = ywtd1um;
        }break;case '/':
        switch (hjwdt4) {case ykg$2n:
            k29ls['setTagName'](gn92$['slice'](sc98kl, pi$qg));case ywtd1um:case ye0yzrx:case ym53u:
            hjwdt4 = ym53u, k29ls['closed'] = !0x0;case yadu15:case yjfhwo:case ylcs8_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fjwoh['error']('unexpected end of input'), hjwdt4 == ykg$2n && k29ls['setTagName'](gn92$['slice'](sc98kl, pi$qg)), pi$qg;case '>':
        switch (hjwdt4) {case ykg$2n:
            k29ls['setTagName'](gn92$['slice'](sc98kl, pi$qg));case ywtd1um:case ye0yzrx:case ym53u:
            break;case yadu15:case yjfhwo:
            wt4d1h = gn92$['slice'](sc98kl, pi$qg), '/' === wt4d1h['slice'](-0x1) && (k29ls['closed'] = !0x0, wt4d1h = wt4d1h['slice'](0x0, -0x1));case ylcs8_:
            hjwdt4 === ylcs8_ && (wt4d1h = kc2), hjwdt4 == yadu15 ? (fjwoh['warning']('attribute "' + wt4d1h + '" missed quot(")!!'), k29ls['add'](kc2, wt4d1h['replace'](/&#?\w+;/g, qngp$i), sc98kl)) : ('http://www.w3.org/1999/xhtml' === ol_7f8[''] && wt4d1h['match'](/^(?:disabled|checked|selected)$/i) || fjwoh['warning']('attribute "' + wt4d1h + '" missed value!! "' + wt4d1h + '" instead!!'), k29ls['add'](wt4d1h, wt4d1h, sc98kl));break;case yr0zvx:
            throw new Error('attribute value missed!!');}return pi$qg;case '\u0080':
        zy3v0 = '\x20';default:
        if ('\x20' >= zy3v0) switch (hjwdt4) {case ykg$2n:
            k29ls['setTagName'](gn92$['slice'](sc98kl, pi$qg)), hjwdt4 = ye0yzrx;break;case yjfhwo:
            kc2 = gn92$['slice'](sc98kl, pi$qg), hjwdt4 = ylcs8_;break;case yadu15:
            var wt4d1h = gn92$['slice'](sc98kl, pi$qg)['replace'](/&#?\w+;/g, qngp$i);fjwoh['warning']('attribute "' + wt4d1h + '" missed quot(")!!'), k29ls['add'](kc2, wt4d1h, sc98kl);case ywtd1um:
            hjwdt4 = ye0yzrx;} else switch (hjwdt4) {case ylcs8_:
            {
              k29ls['tagName'];
            }'http://www.w3.org/1999/xhtml' === ol_7f8[''] && kc2['match'](/^(?:disabled|checked|selected)$/i) || fjwoh['warning']('attribute "' + kc2 + '" missed value!! "' + kc2 + '" instead2!!'), k29ls['add'](kc2, kc2, sc98kl), sc98kl = pi$qg, hjwdt4 = yjfhwo;break;case ywtd1um:
            fjwoh['warning']('attribute space is required"' + kc2 + '\x22!!');case ye0yzrx:
            hjwdt4 = yjfhwo, sc98kl = pi$qg;break;case yr0zvx:
            hjwdt4 = yadu15, sc98kl = pi$qg;break;case ym53u:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}pi$qg++;
  }
}function yyr3zv0(ohw, t4wu1, ex0zry) {
  for (var sc92l = ohw['tagName'], _lc = null, c2n$k = ohw['length']; c2n$k--;) {
    var a1m5u = ohw[c2n$k],
        gki$n = a1m5u['qName'],
        gqip$ = a1m5u['value'],
        udtw41 = gki$n['indexOf'](':');if (udtw41 > 0x0) var ipnqg$ = a1m5u['prefix'] = gki$n['slice'](0x0, udtw41),
        yx0vr = gki$n['slice'](udtw41 + 0x1),
        qpi$ng = 'xmlns' === ipnqg$ && yx0vr;else yx0vr = gki$n, ipnqg$ = null, qpi$ng = 'xmlns' === gki$n && '';a1m5u['localName'] = yx0vr, qpi$ng !== !0x1 && (null == _lc && (_lc = {}, yy0zrx(ex0zry, ex0zry = {})), ex0zry[qpi$ng] = _lc[qpi$ng] = gqip$, a1m5u['uri'] = 'http://www.w3.org/2000/xmlns/', t4wu1['startPrefixMapping'](qpi$ng, gqip$));
  }for (var c2n$k = ohw['length']; c2n$k--;) {
    a1m5u = ohw[c2n$k];var ipnqg$ = a1m5u['prefix'];ipnqg$ && ('xml' === ipnqg$ && (a1m5u['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ipnqg$ && (a1m5u['uri'] = ex0zry[ipnqg$ || '']));
  }var udtw41 = sc92l['indexOf'](':');udtw41 > 0x0 ? (ipnqg$ = ohw['prefix'] = sc92l['slice'](0x0, udtw41), yx0vr = ohw['localName'] = sc92l['slice'](udtw41 + 0x1)) : (ipnqg$ = null, yx0vr = ohw['localName'] = sc92l);var ofwjh4 = ohw['uri'] = ex0zry[ipnqg$ || ''];if (t4wu1['startElement'](ofwjh4, yx0vr, sc92l, ohw), !ohw['closed']) return ohw['currentNSMap'] = ex0zry, ohw['localNSMap'] = _lc, !0x0;if (t4wu1['endElement'](ofwjh4, yx0vr, sc92l), _lc) {
    for (ipnqg$ in _lc) t4wu1['endPrefixMapping'](ipnqg$);
  }
}function yt1w4d(x0zrv, wmt1du, nk9$2g, v03zr, cnk2$9) {
  if (/^(?:script|textarea)$/i['test'](nk9$2g)) {
    var ipg$qn = x0zrv['indexOf']('</' + nk9$2g + '>', wmt1du),
        g$2kni = x0zrv['substring'](wmt1du + 0x1, ipg$qn);if (/[&<]/['test'](g$2kni)) return (/^script$/i['test'](nk9$2g) ? (cnk2$9['characters'](g$2kni, 0x0, g$2kni['length']), ipg$qn) : (g$2kni = g$2kni['replace'](/&#?\w+;/g, v03zr), cnk2$9['characters'](g$2kni, 0x0, g$2kni['length']), ipg$qn)
    );
  }return wmt1du + 0x1;
}function ynks2c9(q$inpg, dwjh, k9cl8s, x0vy) {
  var _hjo4 = x0vy[k9cl8s];return null == _hjo4 && (_hjo4 = q$inpg['lastIndexOf']('</' + k9cl8s + '>'), dwjh > _hjo4 && (_hjo4 = q$inpg['lastIndexOf']('</' + k9cl8s)), x0vy[k9cl8s] = _hjo4), dwjh > _hjo4;
}function yy0zrx(udtw1, c2k9sn) {
  for (var vr0zx in udtw1) c2k9sn[vr0zx] = udtw1[vr0zx];
}function yh7jf_o(h_j7f, v30zyr, ncs9k, jwf4oh) {
  var t4u1dw = h_j7f['charAt'](v30zyr + 0x2);switch (t4u1dw) {case '-':
      if ('-' === h_j7f['charAt'](v30zyr + 0x3)) {
        var _lo87 = h_j7f['indexOf']('-->', v30zyr + 0x4);return _lo87 > v30zyr ? (ncs9k['comment'](h_j7f, v30zyr + 0x4, _lo87 - v30zyr - 0x4), _lo87 + 0x3) : (jwf4oh['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == h_j7f['substr'](v30zyr + 0x3, 0x6)) {
        var _lo87 = h_j7f['indexOf'](']]>', v30zyr + 0x9);return ncs9k['startCDATA'](), ncs9k['characters'](h_j7f, v30zyr + 0x9, _lo87 - v30zyr - 0x9), ncs9k['endCDATA'](), _lo87 + 0x3;
      }var kc89l = yh4f_(h_j7f, v30zyr),
          s_c78 = kc89l['length'];if (s_c78 > 0x1 && /!doctype/i['test'](kc89l[0x0][0x0])) {
        var nc$9k = kc89l[0x1][0x0],
            n$qgi = s_c78 > 0x3 && /^public$/i['test'](kc89l[0x2][0x0]) && kc89l[0x3][0x0],
            ngk9 = s_c78 > 0x4 && kc89l[0x4][0x0],
            l7s_8f = kc89l[s_c78 - 0x1];return ncs9k['startDTD'](nc$9k, n$qgi && n$qgi['replace'](/^(['"])(.*?)\1$/, '$2'), ngk9 && ngk9['replace'](/^(['"])(.*?)\1$/, '$2')), ncs9k['endDTD'](), l7s_8f['index'] + l7s_8f[0x0]['length'];
      }}return -0x1;
}function ydjt4wh(yv03a6, k2cl9, yz0er) {
  var hfoj7_ = yv03a6['indexOf']('?>', k2cl9);if (hfoj7_) {
    var vm6a = yv03a6['substring'](k2cl9, hfoj7_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (vm6a) {
      {
        vm6a[0x0]['length'];
      }return yz0er['processingInstruction'](vm6a[0x1], vm6a[0x2]), hfoj7_ + 0x2;
    }return -0x1;
  }return -0x1;
}function ydhw4t1() {}function yzxry0(ls9c2k, lcs8) {
  return ls9c2k['__proto__'] = lcs8, ls9c2k;
}function yh4f_(scnk9, nqp$) {
  var a356mu,
      f4h_jo = [],
      duwm = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (duwm['lastIndex'] = nqp$, duwm['exec'](scnk9); a356mu = duwm['exec'](scnk9);) if (f4h_jo['push'](a356mu), a356mu[0x1]) return f4h_jo;
}var yfwo4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    yt14h = new RegExp('[\\-\\.0-9' + yfwo4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ygi$nk2 = new RegExp('^' + yfwo4['source'] + yt14h['source'] + '*(?::' + yfwo4['source'] + yt14h['source'] + '*)?$'),
    ykg$2n = 0x0,
    yjfhwo = 0x1,
    ylcs8_ = 0x2,
    yr0zvx = 0x3,
    yadu15 = 0x4,
    ywtd1um = 0x5,
    ye0yzrx = 0x6,
    ym53u = 0x7;yc92lks['prototype'] = { 'parse': function (hf_jo, $inqgp, d41wu) {
    var g$92n = this['domBuilder'];g$92n['startDocument'](), yy0zrx($inqgp, $inqgp = {}), yk8lsc(hf_jo, $inqgp, d41wu, g$92n, this['errorHandler']), g$92n['endDocument']();
  } }, ydhw4t1['prototype'] = { 'setTagName': function (wtd41) {
    if (!ygi$nk2['test'](wtd41)) throw new Error('invalid tagName:' + wtd41);this['tagName'] = wtd41;
  }, 'add': function (td14wu, sk9n2, m5ud1a) {
    if (!ygi$nk2['test'](td14wu)) throw new Error('invalid attribute:' + td14wu);this[this['length']++] = { 'qName': td14wu, 'value': sk9n2, 'offset': m5ud1a };
  }, 'length': 0x0, 'getLocalName': function (s89l7) {
    return this[s89l7]['localName'];
  }, 'getLocator': function (s98l7c) {
    return this[s98l7c]['locator'];
  }, 'getQName': function (j_of4h) {
    return this[j_of4h]['qName'];
  }, 'getURI': function (uma3) {
    return this[uma3]['uri'];
  }, 'getValue': function (t14wh) {
    return this[t14wh]['value'];
  } }, yzxry0({}, yzxry0['prototype']) instanceof yzxry0 || (yzxry0 = function (kn$g2, udw1tm) {
  function vzy0() {}vzy0['prototype'] = udw1tm, vzy0 = new vzy0();for (udw1tm in kn$g2) vzy0[udw1tm] = kn$g2[udw1tm];return vzy0;
}), exports['XMLReader'] = yc92lks;