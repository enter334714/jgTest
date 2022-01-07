var K = wx.$S;
function sl61fb8() {}function shpq5(r3e4u$, u34reo, jl81b, kzw90v, mt2xin) {
  function shp5(ds5p) {
    if (ds5p > 0xffff) {
      ds5p -= 0x10000;var mic2x = 0xd800 + (ds5p >> 0xa),
          ad$5e = 0xdc00 + (0x3ff & ds5p);return String['fromCharCode'](mic2x, ad$5e);
    }return String['fromCharCode'](ds5p);
  }function ro3eu(j6l) {
    var $dea4u = j6l['slice'](0x1, -0x1);return $dea4u in jl81b ? jl81b[$dea4u] : '#' === $dea4u['charAt'](0x0) ? shp5(parseInt($dea4u['substr'](0x1)['replace']('x', '0x'))) : (mt2xin['error']('entity not found:' + j6l), j6l);
  }function hy5qs(u3oevr) {
    if (u3oevr > ds5ah) {
      var _c0xmi = r3e4u$['substring'](ds5ah, u3oevr)['replace'](/&#?\w+;/g, ro3eu);zvw90k && xtmn2(ds5ah), kzw90v['characters'](_c0xmi, 0x0, u3oevr - ds5ah), ds5ah = u3oevr;
    }
  }function xtmn2(vuzro3, m0_ic) {
    for (; vuzro3 >= fl8b6 && (m0_ic = u43r$e['exec'](r3e4u$));) hy5$ = m0_ic['index'], fl8b6 = hy5$ + m0_ic[0x0]['length'], zvw90k['lineNumber']++;zvw90k['columnNumber'] = vuzro3 - hy5$ + 0x1;
  }for (var hy5$ = 0x0, fl8b6 = 0x0, u43r$e = /.*(?:\r\n?|\n)|.*$/g, zvw90k = kzw90v['locator'], mxci2 = [{ 'currentNSMap': u34reo }], c0x_w = {}, ds5ah = 0x0;;) {
    try {
      var $ed4au = r3e4u$['indexOf']('<', ds5ah);if (0x0 > $ed4au) {
        if (!r3e4u$['substr'](ds5ah)['match'](/^\s*$/)) {
          var pgqj18 = kzw90v['doc'],
              a$5y = pgqj18['createTextNode'](r3e4u$['substr'](ds5ah));pgqj18['appendChild'](a$5y), kzw90v['currentElement'] = a$5y;
        }return;
      }switch ($ed4au > ds5ah && hy5qs($ed4au), r3e4u$['charAt']($ed4au + 0x1)) {case '/':
          var rokz3 = r3e4u$['indexOf']('>', $ed4au + 0x3),
              e4ar$ = r3e4u$['substring']($ed4au + 0x2, rokz3),
              hys5qp = mxci2['pop']();0x0 > rokz3 ? (e4ar$ = r3e4u$['substring']($ed4au + 0x2)['replace'](/[\s<].*/, ''), mt2xin['error']('end tag name: ' + e4ar$ + ' is not complete:' + hys5qp['tagName']), rokz3 = $ed4au + 0x1 + e4ar$['length']) : e4ar$['match'](/\s</) && (e4ar$ = e4ar$['replace'](/[\s<].*/, ''), mt2xin['error']('end tag name: ' + e4ar$ + ' maybe not complete'), rokz3 = $ed4au + 0x1 + e4ar$['length']);var r43$ue = hys5qp['localNSMap'],
              oeruv3 = hys5qp['tagName'] == e4ar$,
              jp1qs = oeruv3 || hys5qp['tagName'] && hys5qp['tagName']['toLowerCase']() == e4ar$['toLowerCase']();if (jp1qs) {
            if (kzw90v['endElement'](hys5qp['uri'], hys5qp['localName'], e4ar$), r43$ue) {
              for (var c0kzw in r43$ue) kzw90v['endPrefixMapping'](c0kzw);
            }oeruv3 || mt2xin['fatalError']('end tag name: ' + e4ar$ + ' is not match the current start tagName:' + hys5qp['tagName']);
          } else mxci2['push'](hys5qp);rokz3++;break;case '?':
          zvw90k && xtmn2($ed4au), rokz3 = syshq(r3e4u$, $ed4au, kzw90v);break;case '!':
          zvw90k && xtmn2($ed4au), rokz3 = shspg(r3e4u$, $ed4au, kzw90v, mt2xin);break;default:
          zvw90k && xtmn2($ed4au);var _xc2im = new shspdy5(),
              d$5a4e = mxci2[mxci2['length'] - 0x1]['currentNSMap'],
              rokz3 = sxt7(r3e4u$, $ed4au, _xc2im, d$5a4e, ro3eu, mt2xin),
              h4$d5 = _xc2im['length'];if (!_xc2im['closed'] && sa4reu(r3e4u$, rokz3, _xc2im['tagName'], c0x_w) && (_xc2im['closed'] = !0x0, jl81b['nbsp'] || mt2xin['warning']('unclosed xml attribute')), zvw90k && h4$d5) {
            for (var jspgq1 = skzovr3(zvw90k, {}), w9kv = 0x0; h4$d5 > w9kv; w9kv++) {
              var ha5yds = _xc2im[w9kv];xtmn2(ha5yds['offset']), ha5yds['locator'] = skzovr3(zvw90k, {});
            }kzw90v['locator'] = jspgq1, sk3zvo(_xc2im, kzw90v, d$5a4e) && mxci2['push'](_xc2im), kzw90v['locator'] = zvw90k;
          } else sk3zvo(_xc2im, kzw90v, d$5a4e) && mxci2['push'](_xc2im);'http://www.w3.org/1999/xhtml' !== _xc2im['uri'] || _xc2im['closed'] ? rokz3++ : rokz3 = snt2ixm(r3e4u$, rokz3, _xc2im['tagName'], ro3eu, kzw90v);}
    } catch (jbq8g1) {
      mt2xin['error']('element parse error: ' + jbq8g1), rokz3 = -0x1;
    }rokz3 > ds5ah ? ds5ah = rokz3 : hy5qs(Math['max']($ed4au, ds5ah) + 0x1);
  }
}function skzovr3(qyhspg, p8q1j) {
  return p8q1j['lineNumber'] = qyhspg['lineNumber'], p8q1j['columnNumber'] = qyhspg['columnNumber'], p8q1j;
}function sxt7(b8j1gq, syqph5, ruov, uo3rv, xmi_2, eur3v) {
  for (var g8jqb, k_0w, _xi0mc = ++syqph5, ic_x0 = s_xicm;;) {
    var d$ea54 = b8j1gq['charAt'](_xi0mc);switch (d$ea54) {case '=':
        if (ic_x0 === sgyhp) g8jqb = b8j1gq['slice'](syqph5, _xi0mc), ic_x0 = spgqsyj;else {
          if (ic_x0 !== smx2n_) throw new Error('attribute equal must after attrName');ic_x0 = spgqsyj;
        }break;case '\x27':case '\x22':
        if (ic_x0 === spgqsyj || ic_x0 === sgyhp) {
          if (ic_x0 === sgyhp && (eur3v['warning']('attribute value must after "="'), g8jqb = b8j1gq['slice'](syqph5, _xi0mc)), syqph5 = _xi0mc + 0x1, _xi0mc = b8j1gq['indexOf'](d$ea54, syqph5), !(_xi0mc > 0x0)) throw new Error('attribute value no end \'' + d$ea54 + '\' match');k_0w = b8j1gq['slice'](syqph5, _xi0mc)['replace'](/&#?\w+;/g, xmi_2), ruov['add'](g8jqb, k_0w, syqph5 - 0x1), ic_x0 = sysadh;
        } else {
          if (ic_x0 != ssgyjqp) throw new Error('attribute value must after "="');k_0w = b8j1gq['slice'](syqph5, _xi0mc)['replace'](/&#?\w+;/g, xmi_2), ruov['add'](g8jqb, k_0w, syqph5), eur3v['warning']('attribute "' + g8jqb + '" missed start quot(' + d$ea54 + ')!!'), syqph5 = _xi0mc + 0x1, ic_x0 = sysadh;
        }break;case '/':
        switch (ic_x0) {case s_xicm:
            ruov['setTagName'](b8j1gq['slice'](syqph5, _xi0mc));case sysadh:case sd5as:case s_i0xw:
            ic_x0 = s_i0xw, ruov['closed'] = !0x0;case ssgyjqp:case sgyhp:case smx2n_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return eur3v['error']('unexpected end of input'), ic_x0 == s_xicm && ruov['setTagName'](b8j1gq['slice'](syqph5, _xi0mc)), _xi0mc;case '>':
        switch (ic_x0) {case s_xicm:
            ruov['setTagName'](b8j1gq['slice'](syqph5, _xi0mc));case sysadh:case sd5as:case s_i0xw:
            break;case ssgyjqp:case sgyhp:
            k_0w = b8j1gq['slice'](syqph5, _xi0mc), '/' === k_0w['slice'](-0x1) && (ruov['closed'] = !0x0, k_0w = k_0w['slice'](0x0, -0x1));case smx2n_:
            ic_x0 === smx2n_ && (k_0w = g8jqb), ic_x0 == ssgyjqp ? (eur3v['warning']('attribute "' + k_0w + '" missed quot(")!!'), ruov['add'](g8jqb, k_0w['replace'](/&#?\w+;/g, xmi_2), syqph5)) : ('http://www.w3.org/1999/xhtml' === uo3rv[''] && k_0w['match'](/^(?:disabled|checked|selected)$/i) || eur3v['warning']('attribute "' + k_0w + '" missed value!! "' + k_0w + '" instead!!'), ruov['add'](k_0w, k_0w, syqph5));break;case spgqsyj:
            throw new Error('attribute value missed!!');}return _xi0mc;case '\u0080':
        d$ea54 = '\x20';default:
        if ('\x20' >= d$ea54) switch (ic_x0) {case s_xicm:
            ruov['setTagName'](b8j1gq['slice'](syqph5, _xi0mc)), ic_x0 = sd5as;break;case sgyhp:
            g8jqb = b8j1gq['slice'](syqph5, _xi0mc), ic_x0 = smx2n_;break;case ssgyjqp:
            var k_0w = b8j1gq['slice'](syqph5, _xi0mc)['replace'](/&#?\w+;/g, xmi_2);eur3v['warning']('attribute "' + k_0w + '" missed quot(")!!'), ruov['add'](g8jqb, k_0w, syqph5);case sysadh:
            ic_x0 = sd5as;} else switch (ic_x0) {case smx2n_:
            {
              ruov['tagName'];
            }'http://www.w3.org/1999/xhtml' === uo3rv[''] && g8jqb['match'](/^(?:disabled|checked|selected)$/i) || eur3v['warning']('attribute "' + g8jqb + '" missed value!! "' + g8jqb + '" instead2!!'), ruov['add'](g8jqb, g8jqb, syqph5), syqph5 = _xi0mc, ic_x0 = sgyhp;break;case sysadh:
            eur3v['warning']('attribute space is required"' + g8jqb + '\x22!!');case sd5as:
            ic_x0 = sgyhp, syqph5 = _xi0mc;break;case spgqsyj:
            ic_x0 = ssgyjqp, syqph5 = _xi0mc;break;case s_i0xw:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_xi0mc++;
  }
}function sk3zvo(v3uorz, hqp5, l18b6j) {
  for (var $u3r4e = v3uorz['tagName'], ovkzr3 = null, sd5yha = v3uorz['length']; sd5yha--;) {
    var vk3ro = v3uorz[sd5yha],
        jgq1 = vk3ro['qName'],
        cwzk09 = vk3ro['value'],
        kzvw09 = jgq1['indexOf'](':');if (kzvw09 > 0x0) var q18 = vk3ro['prefix'] = jgq1['slice'](0x0, kzvw09),
        veruo = jgq1['slice'](kzvw09 + 0x1),
        kr3v = 'xmlns' === q18 && veruo;else veruo = jgq1, q18 = null, kr3v = 'xmlns' === jgq1 && '';vk3ro['localName'] = veruo, kr3v !== !0x1 && (null == ovkzr3 && (ovkzr3 = {}, sh5ady$(l18b6j, l18b6j = {})), l18b6j[kr3v] = ovkzr3[kr3v] = cwzk09, vk3ro['uri'] = 'http://www.w3.org/2000/xmlns/', hqp5['startPrefixMapping'](kr3v, cwzk09));
  }for (var sd5yha = v3uorz['length']; sd5yha--;) {
    vk3ro = v3uorz[sd5yha];var q18 = vk3ro['prefix'];q18 && ('xml' === q18 && (vk3ro['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== q18 && (vk3ro['uri'] = l18b6j[q18 || '']));
  }var kzvw09 = $u3r4e['indexOf'](':');kzvw09 > 0x0 ? (q18 = v3uorz['prefix'] = $u3r4e['slice'](0x0, kzvw09), veruo = v3uorz['localName'] = $u3r4e['slice'](kzvw09 + 0x1)) : (q18 = null, veruo = v3uorz['localName'] = $u3r4e);var i0_mc = v3uorz['uri'] = l18b6j[q18 || ''];if (hqp5['startElement'](i0_mc, veruo, $u3r4e, v3uorz), !v3uorz['closed']) return v3uorz['currentNSMap'] = l18b6j, v3uorz['localNSMap'] = ovkzr3, !0x0;if (hqp5['endElement'](i0_mc, veruo, $u3r4e), ovkzr3) {
    for (q18 in ovkzr3) hqp5['endPrefixMapping'](q18);
  }
}function snt2ixm(i0mc_x, l681jb, fb1l8, nxtm2, eo) {
  if (/^(?:script|textarea)$/i['test'](fb1l8)) {
    var vozw = i0mc_x['indexOf']('</' + fb1l8 + '>', l681jb),
        x_2cim = i0mc_x['substring'](l681jb + 0x1, vozw);if (/[&<]/['test'](x_2cim)) return (/^script$/i['test'](fb1l8) ? (eo['characters'](x_2cim, 0x0, x_2cim['length']), vozw) : (x_2cim = x_2cim['replace'](/&#?\w+;/g, nxtm2), eo['characters'](x_2cim, 0x0, x_2cim['length']), vozw)
    );
  }return l681jb + 0x1;
}function sa4reu(w0cx_, eu$, hays5, rz3ok) {
  var l1fb8 = rz3ok[hays5];return null == l1fb8 && (l1fb8 = w0cx_['lastIndexOf']('</' + hays5 + '>'), eu$ > l1fb8 && (l1fb8 = w0cx_['lastIndexOf']('</' + hays5)), rz3ok[hays5] = l1fb8), eu$ > l1fb8;
}function sh5ady$(icw9_0, rv3euo) {
  for (var i_x0cm in icw9_0) rv3euo[i_x0cm] = icw9_0[i_x0cm];
}function shspg(xt2mni, $euad4, n2im_x, pjyqs) {
  var _x0cmi = xt2mni['charAt']($euad4 + 0x2);switch (_x0cmi) {case '-':
      if ('-' === xt2mni['charAt']($euad4 + 0x3)) {
        var qphsy5 = xt2mni['indexOf']('-->', $euad4 + 0x4);return qphsy5 > $euad4 ? (n2im_x['comment'](xt2mni, $euad4 + 0x4, qphsy5 - $euad4 - 0x4), qphsy5 + 0x3) : (pjyqs['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == xt2mni['substr']($euad4 + 0x3, 0x6)) {
        var qphsy5 = xt2mni['indexOf'](']]>', $euad4 + 0x9);return n2im_x['startCDATA'](), n2im_x['characters'](xt2mni, $euad4 + 0x9, qphsy5 - $euad4 - 0x9), n2im_x['endCDATA'](), qphsy5 + 0x3;
      }var mxc_2 = sgsj(xt2mni, $euad4),
          au4ed = mxc_2['length'];if (au4ed > 0x1 && /!doctype/i['test'](mxc_2[0x0][0x0])) {
        var e4da5 = mxc_2[0x1][0x0],
            dy5hps = au4ed > 0x3 && /^public$/i['test'](mxc_2[0x2][0x0]) && mxc_2[0x3][0x0],
            z0k9w = au4ed > 0x4 && mxc_2[0x4][0x0],
            uozv3 = mxc_2[au4ed - 0x1];return n2im_x['startDTD'](e4da5, dy5hps && dy5hps['replace'](/^(['"])(.*?)\1$/, '$2'), z0k9w && z0k9w['replace'](/^(['"])(.*?)\1$/, '$2')), n2im_x['endDTD'](), uozv3['index'] + uozv3[0x0]['length'];
      }}return -0x1;
}function syshq(pyshq, g68jb, adyh$) {
  var uveo3 = pyshq['indexOf']('?>', g68jb);if (uveo3) {
    var evoru = pyshq['substring'](g68jb, uveo3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (evoru) {
      {
        evoru[0x0]['length'];
      }return adyh$['processingInstruction'](evoru[0x1], evoru[0x2]), uveo3 + 0x2;
    }return -0x1;
  }return -0x1;
}function shspdy5() {}function skz90c(rz3ovu, min_2x) {
  return rz3ovu['__proto__'] = min_2x, rz3ovu;
}function sgsj(oru4e3, v9kz0) {
  var h5yas,
      pgjq1s = [],
      udea$4 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (udea$4['lastIndex'] = v9kz0, udea$4['exec'](oru4e3); h5yas = udea$4['exec'](oru4e3);) if (pgjq1s['push'](h5yas), h5yas[0x1]) return pgjq1s;
}var sfl168b = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ssy5hda = new RegExp('[\\-\\.0-9' + sfl168b['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    sveu3r = new RegExp('^' + sfl168b['source'] + ssy5hda['source'] + '*(?::' + sfl168b['source'] + ssy5hda['source'] + '*)?$'),
    s_xicm = 0x0,
    sgyhp = 0x1,
    smx2n_ = 0x2,
    spgqsyj = 0x3,
    ssgyjqp = 0x4,
    sysadh = 0x5,
    sd5as = 0x6,
    s_i0xw = 0x7;sl61fb8['prototype'] = { 'parse': function (lb18, $ahd45, q18jb) {
    var jbg81 = this['domBuilder'];jbg81['startDocument'](), sh5ady$($ahd45, $ahd45 = {}), shpq5(lb18, $ahd45, q18jb, jbg81, this['errorHandler']), jbg81['endDocument']();
  } }, shspdy5['prototype'] = { 'setTagName': function (w9z0kv) {
    if (!sveu3r['test'](w9z0kv)) throw new Error('invalid tagName:' + w9z0kv);this['tagName'] = w9z0kv;
  }, 'add': function (b618gj, _0xwci, y5p) {
    if (!sveu3r['test'](b618gj)) throw new Error('invalid attribute:' + b618gj);this[this['length']++] = { 'qName': b618gj, 'value': _0xwci, 'offset': y5p };
  }, 'length': 0x0, 'getLocalName': function (s5pyq) {
    return this[s5pyq]['localName'];
  }, 'getLocator': function (_i9cw0) {
    return this[_i9cw0]['locator'];
  }, 'getQName': function (tx2mn7) {
    return this[tx2mn7]['qName'];
  }, 'getURI': function (hsypd) {
    return this[hsypd]['uri'];
  }, 'getValue': function (p81qjg) {
    return this[p81qjg]['value'];
  } }, skz90c({}, skz90c['prototype']) instanceof skz90c || (skz90c = function (bl18f, _imc2x) {
  function wkz9() {}wkz9['prototype'] = _imc2x, wkz9 = new wkz9();for (_imc2x in bl18f) wkz9[_imc2x] = bl18f[_imc2x];return wkz9;
}), exports['XMLReader'] = sl61fb8;