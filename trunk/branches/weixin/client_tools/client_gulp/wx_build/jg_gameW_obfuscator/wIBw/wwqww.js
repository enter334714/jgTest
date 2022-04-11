var s = wx.$W;
function wjra7() {}function wo3wb(p_9rj, ka18e, npl9, u8e1, cajr7k) {
  function e1zc38(b5uwod) {
    if (b5uwod > 0xffff) {
      b5uwod -= 0x10000;var ja7_kr = 0xd800 + (b5uwod >> 0xa),
          u13bzw = 0xdc00 + (0x3ff & b5uwod);return String['fromCharCode'](ja7_kr, u13bzw);
    }return String['fromCharCode'](b5uwod);
  }function nl$0i(uobd) {
    var a78ce = uobd['slice'](0x1, -0x1);return a78ce in npl9 ? npl9[a78ce] : '#' === a78ce['charAt'](0x0) ? e1zc38(parseInt(a78ce['substr'](0x1)['replace']('x', '0x'))) : (cajr7k['error']('entity not found:' + uobd), uobd);
  }function $l0tni(u53o) {
    if (u53o > k8c7j) {
      var npl9i = p_9rj['substring'](k8c7j, u53o)['replace'](/&#?\w+;/g, nl$0i);piy_ && _7j(k8c7j), u8e1['characters'](npl9i, 0x0, u53o - k8c7j), k8c7j = u53o;
    }
  }function _7j(st2$, wbd6) {
    for (; st2$ >= cze183 && (wbd6 = ltqsn['exec'](p_9rj));) tls$fq = wbd6['index'], cze183 = tls$fq + wbd6[0x0]['length'], piy_['lineNumber']++;piy_['columnNumber'] = st2$ - tls$fq + 0x1;
  }for (var tls$fq = 0x0, cze183 = 0x0, ltqsn = /.*(?:\r\n?|\n)|.*$/g, piy_ = u8e1['locator'], dx4 = [{ 'currentNSMap': ka18e }], tf$2s = {}, k8c7j = 0x0;;) {
    try {
      var buwo35 = p_9rj['indexOf']('<', k8c7j);if (0x0 > buwo35) {
        if (!p_9rj['substr'](k8c7j)['match'](/^\s*$/)) {
          var aek81 = u8e1['doc'],
              c8e3z1 = aek81['createTextNode'](p_9rj['substr'](k8c7j));aek81['appendChild'](c8e3z1), u8e1['currentElement'] = c8e3z1;
        }return;
      }switch (buwo35 > k8c7j && $l0tni(buwo35), p_9rj['charAt'](buwo35 + 0x1)) {case '/':
          var tis = p_9rj['indexOf']('>', buwo35 + 0x3),
              o6d5bw = p_9rj['substring'](buwo35 + 0x2, tis),
              nlit$s = dx4['pop']();0x0 > tis ? (o6d5bw = p_9rj['substring'](buwo35 + 0x2)['replace'](/[\s<].*/, ''), cajr7k['error']('end tag name: ' + o6d5bw + ' is not complete:' + nlit$s['tagName']), tis = buwo35 + 0x1 + o6d5bw['length']) : o6d5bw['match'](/\s</) && (o6d5bw = o6d5bw['replace'](/[\s<].*/, ''), cajr7k['error']('end tag name: ' + o6d5bw + ' maybe not complete'), tis = buwo35 + 0x1 + o6d5bw['length']);var $itlsn = nlit$s['localNSMap'],
              h6vd = nlit$s['tagName'] == o6d5bw,
              lqsf$t = h6vd || nlit$s['tagName'] && nlit$s['tagName']['toLowerCase']() == o6d5bw['toLowerCase']();if (lqsf$t) {
            if (u8e1['endElement'](nlit$s['uri'], nlit$s['localName'], o6d5bw), $itlsn) {
              for (var wbuz53 in $itlsn) u8e1['endPrefixMapping'](wbuz53);
            }h6vd || cajr7k['fatalError']('end tag name: ' + o6d5bw + ' is not match the current start tagName:' + nlit$s['tagName']);
          } else dx4['push'](nlit$s);tis++;break;case '?':
          piy_ && _7j(buwo35), tis = wdx4h6(p_9rj, buwo35, u8e1);break;case '!':
          piy_ && _7j(buwo35), tis = wodvw56(p_9rj, buwo35, u8e1, cajr7k);break;default:
          piy_ && _7j(buwo35);var vow56d = new wy0r9(),
              ke8ca1 = dx4[dx4['length'] - 0x1]['currentNSMap'],
              tis = wjrka_7(p_9rj, buwo35, vow56d, ke8ca1, nl$0i, cajr7k),
              crajk = vow56d['length'];if (!vow56d['closed'] && wou3(p_9rj, tis, vow56d['tagName'], tf$2s) && (vow56d['closed'] = !0x0, npl9['nbsp'] || cajr7k['warning']('unclosed xml attribute')), piy_ && crajk) {
            for (var vhd4o = wltsfq(piy_, {}), ja_k7 = 0x0; crajk > ja_k7; ja_k7++) {
              var nl0it$ = vow56d[ja_k7];_7j(nl0it$['offset']), nl0it$['locator'] = wltsfq(piy_, {});
            }u8e1['locator'] = vhd4o, wfslq(vow56d, u8e1, ke8ca1) && dx4['push'](vow56d), u8e1['locator'] = piy_;
          } else wfslq(vow56d, u8e1, ke8ca1) && dx4['push'](vow56d);'http://www.w3.org/1999/xhtml' !== vow56d['uri'] || vow56d['closed'] ? tis++ : tis = wbwuo35(p_9rj, tis, vow56d['tagName'], nl$0i, u8e1);}
    } catch (_7ray) {
      cajr7k['error']('element parse error: ' + _7ray), tis = -0x1;
    }tis > k8c7j ? k8c7j = tis : $l0tni(Math['max'](buwo35, k8c7j) + 0x1);
  }
}function wltsfq(nlsti$, mg4xh) {
  return mg4xh['lineNumber'] = nlsti$['lineNumber'], mg4xh['columnNumber'] = nlsti$['columnNumber'], mg4xh;
}function wjrka_7(_rpy9, z3ue81, qfts$l, wou35, uw3z1, aj7k8) {
  for (var a_krj7, w1u3, uwb5 = ++z3ue81, ak7 = wjy9p_r;;) {
    var ck7ja = _rpy9['charAt'](uwb5);switch (ck7ja) {case '=':
        if (ak7 === wk7rcj) a_krj7 = _rpy9['slice'](z3ue81, uwb5), ak7 = wa_jyr7;else {
          if (ak7 !== wt$lnis) throw new Error('attribute equal must after attrName');ak7 = wa_jyr7;
        }break;case '\x27':case '\x22':
        if (ak7 === wa_jyr7 || ak7 === wk7rcj) {
          if (ak7 === wk7rcj && (aj7k8['warning']('attribute value must after "="'), a_krj7 = _rpy9['slice'](z3ue81, uwb5)), z3ue81 = uwb5 + 0x1, uwb5 = _rpy9['indexOf'](ck7ja, z3ue81), !(uwb5 > 0x0)) throw new Error('attribute value no end \'' + ck7ja + '\' match');w1u3 = _rpy9['slice'](z3ue81, uwb5)['replace'](/&#?\w+;/g, uw3z1), qfts$l['add'](a_krj7, w1u3, z3ue81 - 0x1), ak7 = wajk7_r;
        } else {
          if (ak7 != wbz5w) throw new Error('attribute value must after "="');w1u3 = _rpy9['slice'](z3ue81, uwb5)['replace'](/&#?\w+;/g, uw3z1), qfts$l['add'](a_krj7, w1u3, z3ue81), aj7k8['warning']('attribute "' + a_krj7 + '" missed start quot(' + ck7ja + ')!!'), z3ue81 = uwb5 + 0x1, ak7 = wajk7_r;
        }break;case '/':
        switch (ak7) {case wjy9p_r:
            qfts$l['setTagName'](_rpy9['slice'](z3ue81, uwb5));case wajk7_r:case wz8u13e:case wd6h5v:
            ak7 = wd6h5v, qfts$l['closed'] = !0x0;case wbz5w:case wk7rcj:case wt$lnis:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return aj7k8['error']('unexpected end of input'), ak7 == wjy9p_r && qfts$l['setTagName'](_rpy9['slice'](z3ue81, uwb5)), uwb5;case '>':
        switch (ak7) {case wjy9p_r:
            qfts$l['setTagName'](_rpy9['slice'](z3ue81, uwb5));case wajk7_r:case wz8u13e:case wd6h5v:
            break;case wbz5w:case wk7rcj:
            w1u3 = _rpy9['slice'](z3ue81, uwb5), '/' === w1u3['slice'](-0x1) && (qfts$l['closed'] = !0x0, w1u3 = w1u3['slice'](0x0, -0x1));case wt$lnis:
            ak7 === wt$lnis && (w1u3 = a_krj7), ak7 == wbz5w ? (aj7k8['warning']('attribute "' + w1u3 + '" missed quot(")!!'), qfts$l['add'](a_krj7, w1u3['replace'](/&#?\w+;/g, uw3z1), z3ue81)) : ('http://www.w3.org/1999/xhtml' === wou35[''] && w1u3['match'](/^(?:disabled|checked|selected)$/i) || aj7k8['warning']('attribute "' + w1u3 + '" missed value!! "' + w1u3 + '" instead!!'), qfts$l['add'](w1u3, w1u3, z3ue81));break;case wa_jyr7:
            throw new Error('attribute value missed!!');}return uwb5;case '\u0080':
        ck7ja = '\x20';default:
        if ('\x20' >= ck7ja) switch (ak7) {case wjy9p_r:
            qfts$l['setTagName'](_rpy9['slice'](z3ue81, uwb5)), ak7 = wz8u13e;break;case wk7rcj:
            a_krj7 = _rpy9['slice'](z3ue81, uwb5), ak7 = wt$lnis;break;case wbz5w:
            var w1u3 = _rpy9['slice'](z3ue81, uwb5)['replace'](/&#?\w+;/g, uw3z1);aj7k8['warning']('attribute "' + w1u3 + '" missed quot(")!!'), qfts$l['add'](a_krj7, w1u3, z3ue81);case wajk7_r:
            ak7 = wz8u13e;} else switch (ak7) {case wt$lnis:
            {
              qfts$l['tagName'];
            }'http://www.w3.org/1999/xhtml' === wou35[''] && a_krj7['match'](/^(?:disabled|checked|selected)$/i) || aj7k8['warning']('attribute "' + a_krj7 + '" missed value!! "' + a_krj7 + '" instead2!!'), qfts$l['add'](a_krj7, a_krj7, z3ue81), z3ue81 = uwb5, ak7 = wk7rcj;break;case wajk7_r:
            aj7k8['warning']('attribute space is required"' + a_krj7 + '\x22!!');case wz8u13e:
            ak7 = wk7rcj, z3ue81 = uwb5;break;case wa_jyr7:
            ak7 = wbz5w, z3ue81 = uwb5;break;case wd6h5v:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}uwb5++;
  }
}function wfslq(k7_ra, ca7e, wd56bo) {
  for (var y09ipn = k7_ra['tagName'], _ayr7j = null, rcj7 = k7_ra['length']; rcj7--;) {
    var odubw = k7_ra[rcj7],
        a18ck = odubw['qName'],
        vxg4 = odubw['value'],
        rjkc7 = a18ck['indexOf'](':');if (rjkc7 > 0x0) var j_r = odubw['prefix'] = a18ck['slice'](0x0, rjkc7),
        l$nts = a18ck['slice'](rjkc7 + 0x1),
        z813ce = 'xmlns' === j_r && l$nts;else l$nts = a18ck, j_r = null, z813ce = 'xmlns' === a18ck && '';odubw['localName'] = l$nts, z813ce !== !0x1 && (null == _ayr7j && (_ayr7j = {}, wvm4hxg(wd56bo, wd56bo = {})), wd56bo[z813ce] = _ayr7j[z813ce] = vxg4, odubw['uri'] = 'http://www.w3.org/2000/xmlns/', ca7e['startPrefixMapping'](z813ce, vxg4));
  }for (var rcj7 = k7_ra['length']; rcj7--;) {
    odubw = k7_ra[rcj7];var j_r = odubw['prefix'];j_r && ('xml' === j_r && (odubw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== j_r && (odubw['uri'] = wd56bo[j_r || '']));
  }var rjkc7 = y09ipn['indexOf'](':');rjkc7 > 0x0 ? (j_r = k7_ra['prefix'] = y09ipn['slice'](0x0, rjkc7), l$nts = k7_ra['localName'] = y09ipn['slice'](rjkc7 + 0x1)) : (j_r = null, l$nts = k7_ra['localName'] = y09ipn);var xm4h6v = k7_ra['uri'] = wd56bo[j_r || ''];if (ca7e['startElement'](xm4h6v, l$nts, y09ipn, k7_ra), !k7_ra['closed']) return k7_ra['currentNSMap'] = wd56bo, k7_ra['localNSMap'] = _ayr7j, !0x0;if (ca7e['endElement'](xm4h6v, l$nts, y09ipn), _ayr7j) {
    for (j_r in _ayr7j) ca7e['endPrefixMapping'](j_r);
  }
}function wbwuo35(wb1uz3, _ak7rj, z3wbu, doh, sqft2$) {
  if (/^(?:script|textarea)$/i['test'](z3wbu)) {
    var k8a1ce = wb1uz3['indexOf']('</' + z3wbu + '>', _ak7rj),
        gvxm = wb1uz3['substring'](_ak7rj + 0x1, k8a1ce);if (/[&<]/['test'](gvxm)) return (/^script$/i['test'](z3wbu) ? (sqft2$['characters'](gvxm, 0x0, gvxm['length']), k8a1ce) : (gvxm = gvxm['replace'](/&#?\w+;/g, doh), sqft2$['characters'](gvxm, 0x0, gvxm['length']), k8a1ce)
    );
  }return _ak7rj + 0x1;
}function wou3(t0nli$, l$itn, zw3b5u, rj_7a) {
  var jrka = rj_7a[zw3b5u];return null == jrka && (jrka = t0nli$['lastIndexOf']('</' + zw3b5u + '>'), l$itn > jrka && (jrka = t0nli$['lastIndexOf']('</' + zw3b5u)), rj_7a[zw3b5u] = jrka), l$itn > jrka;
}function wvm4hxg(xm6h4v, qs2f$) {
  for (var uez81 in xm6h4v) qs2f$[uez81] = xm6h4v[uez81];
}function wodvw56(zc8e, zu5w3b, aeck7, v4d6ho) {
  var bw5u = zc8e['charAt'](zu5w3b + 0x2);switch (bw5u) {case '-':
      if ('-' === zc8e['charAt'](zu5w3b + 0x3)) {
        var qstn$l = zc8e['indexOf']('-->', zu5w3b + 0x4);return qstn$l > zu5w3b ? (aeck7['comment'](zc8e, zu5w3b + 0x4, qstn$l - zu5w3b - 0x4), qstn$l + 0x3) : (v4d6ho['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == zc8e['substr'](zu5w3b + 0x3, 0x6)) {
        var qstn$l = zc8e['indexOf'](']]>', zu5w3b + 0x9);return aeck7['startCDATA'](), aeck7['characters'](zc8e, zu5w3b + 0x9, qstn$l - zu5w3b - 0x9), aeck7['endCDATA'](), qstn$l + 0x3;
      }var h4v6dx = wjr_ka(zc8e, zu5w3b),
          woubd = h4v6dx['length'];if (woubd > 0x1 && /!doctype/i['test'](h4v6dx[0x0][0x0])) {
        var g4vhmx = h4v6dx[0x1][0x0],
            qft$2s = woubd > 0x3 && /^public$/i['test'](h4v6dx[0x2][0x0]) && h4v6dx[0x3][0x0],
            r0_y9p = woubd > 0x4 && h4v6dx[0x4][0x0],
            kacr7j = h4v6dx[woubd - 0x1];return aeck7['startDTD'](g4vhmx, qft$2s && qft$2s['replace'](/^(['"])(.*?)\1$/, '$2'), r0_y9p && r0_y9p['replace'](/^(['"])(.*?)\1$/, '$2')), aeck7['endDTD'](), kacr7j['index'] + kacr7j[0x0]['length'];
      }}return -0x1;
}function wdx4h6(tinl, h5vo6d, ezb31u) {
  var yrj_a = tinl['indexOf']('?>', h5vo6d);if (yrj_a) {
    var ek87ac = tinl['substring'](h5vo6d, yrj_a)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ek87ac) {
      {
        ek87ac[0x0]['length'];
      }return ezb31u['processingInstruction'](ek87ac[0x1], ek87ac[0x2]), yrj_a + 0x2;
    }return -0x1;
  }return -0x1;
}function wy0r9() {}function w$inls(o5dw6v, qtl$f) {
  return o5dw6v['__proto__'] = qtl$f, o5dw6v;
}function wjr_ka(yarj_, r_a7k) {
  var ek7a8c,
      yra_j7 = [],
      q$tnsl = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (q$tnsl['lastIndex'] = r_a7k, q$tnsl['exec'](yarj_); ek7a8c = q$tnsl['exec'](yarj_);) if (yra_j7['push'](ek7a8c), ek7a8c[0x1]) return yra_j7;
}var wli9n = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    wwd5obu = new RegExp('[\\-\\.0-9' + wli9n['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    wnyp90 = new RegExp('^' + wli9n['source'] + wwd5obu['source'] + '*(?::' + wli9n['source'] + wwd5obu['source'] + '*)?$'),
    wjy9p_r = 0x0,
    wk7rcj = 0x1,
    wt$lnis = 0x2,
    wa_jyr7 = 0x3,
    wbz5w = 0x4,
    wajk7_r = 0x5,
    wz8u13e = 0x6,
    wd6h5v = 0x7;wjra7['prototype'] = { 'parse': function (a8eck1, $ln0p, mh6v4x) {
    var ez8kc1 = this['domBuilder'];ez8kc1['startDocument'](), wvm4hxg($ln0p, $ln0p = {}), wo3wb(a8eck1, $ln0p, mh6v4x, ez8kc1, this['errorHandler']), ez8kc1['endDocument']();
  } }, wy0r9['prototype'] = { 'setTagName': function ($tsf2) {
    if (!wnyp90['test']($tsf2)) throw new Error('invalid tagName:' + $tsf2);this['tagName'] = $tsf2;
  }, 'add': function (h6dv4x, j7r_9y, mxv4h6) {
    if (!wnyp90['test'](h6dv4x)) throw new Error('invalid attribute:' + h6dv4x);this[this['length']++] = { 'qName': h6dv4x, 'value': j7r_9y, 'offset': mxv4h6 };
  }, 'length': 0x0, 'getLocalName': function (a7k) {
    return this[a7k]['localName'];
  }, 'getLocator': function (o6vw5) {
    return this[o6vw5]['locator'];
  }, 'getQName': function (yr7a_j) {
    return this[yr7a_j]['qName'];
  }, 'getURI': function (z1ek) {
    return this[z1ek]['uri'];
  }, 'getValue': function (wbd65) {
    return this[wbd65]['value'];
  } }, w$inls({}, w$inls['prototype']) instanceof w$inls || (w$inls = function (stli$, y90pr) {
  function rp90y_() {}rp90y_['prototype'] = y90pr, rp90y_ = new rp90y_();for (y90pr in stli$) rp90y_[y90pr] = stli$[y90pr];return rp90y_;
}), exports['XMLReader'] = wjra7;