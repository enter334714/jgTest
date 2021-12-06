var D = wx.$b;
function bih1tc2() {}function bo2ithe(lq9j6, y$8au, zua8$, $wzuya, awuy7d) {
  function wuyz$(cfis1m) {
    if (cfis1m > 0xffff) {
      cfis1m -= 0x10000;var lotq = 0xd800 + (cfis1m >> 0xa),
          vpgxk = 0xdc00 + (0x3ff & cfis1m);return String['fromCharCode'](lotq, vpgxk);
    }return String['fromCharCode'](cfis1m);
  }function sch2i(d70_4) {
    var s12ihc = d70_4['slice'](0x1, -0x1);return s12ihc in zua8$ ? zua8$[s12ihc] : '#' === s12ihc['charAt'](0x0) ? wuyz$(parseInt(s12ihc['substr'](0x1)['replace']('x', '0x'))) : (awuy7d['error']('entity not found:' + d70_4), d70_4);
  }function vkrp6g(_sfm) {
    if (_sfm > k5g9r) {
      var wa7y = lq9j6['substring'](k5g9r, _sfm)['replace'](/&#?\w+;/g, sch2i);dwa7u && $7uwy(k5g9r), $wzuya['characters'](wa7y, 0x0, _sfm - k5g9r), k5g9r = _sfm;
    }
  }function $7uwy(m_fd04, tihc21) {
    for (; m_fd04 >= dy47w && (tihc21 = n3uz$8['exec'](lq9j6));) f4d70 = tihc21['index'], dy47w = f4d70 + tihc21[0x0]['length'], dwa7u['lineNumber']++;dwa7u['columnNumber'] = m_fd04 - f4d70 + 0x1;
  }for (var f4d70 = 0x0, dy47w = 0x0, n3uz$8 = /.*(?:\r\n?|\n)|.*$/g, dwa7u = $wzuya['locator'], vg5 = [{ 'currentNSMap': y$8au }], hict21 = {}, k5g9r = 0x0;;) {
    try {
      var ojtleq = lq9j6['indexOf']('<', k5g9r);if (0x0 > ojtleq) {
        if (!lq9j6['substr'](k5g9r)['match'](/^\s*$/)) {
          var aywd47 = $wzuya['doc'],
              hotle2 = aywd47['createTextNode'](lq9j6['substr'](k5g9r));aywd47['appendChild'](hotle2), $wzuya['currentElement'] = hotle2;
        }return;
      }switch (ojtleq > k5g9r && vkrp6g(ojtleq), lq9j6['charAt'](ojtleq + 0x1)) {case '/':
          var qo9l = lq9j6['indexOf']('>', ojtleq + 0x3),
              is1fc = lq9j6['substring'](ojtleq + 0x2, qo9l),
              c1mshi = vg5['pop']();0x0 > qo9l ? (is1fc = lq9j6['substring'](ojtleq + 0x2)['replace'](/[\s<].*/, ''), awuy7d['error']('end tag name: ' + is1fc + ' is not complete:' + c1mshi['tagName']), qo9l = ojtleq + 0x1 + is1fc['length']) : is1fc['match'](/\s</) && (is1fc = is1fc['replace'](/[\s<].*/, ''), awuy7d['error']('end tag name: ' + is1fc + ' maybe not complete'), qo9l = ojtleq + 0x1 + is1fc['length']);var j56gq = c1mshi['localNSMap'],
              hmsci = c1mshi['tagName'] == is1fc,
              cite = hmsci || c1mshi['tagName'] && c1mshi['tagName']['toLowerCase']() == is1fc['toLowerCase']();if (cite) {
            if ($wzuya['endElement'](c1mshi['uri'], c1mshi['localName'], is1fc), j56gq) {
              for (var tc1i2h in j56gq) $wzuya['endPrefixMapping'](tc1i2h);
            }hmsci || awuy7d['fatalError']('end tag name: ' + is1fc + ' is not match the current start tagName:' + c1mshi['tagName']);
          } else vg5['push'](c1mshi);qo9l++;break;case '?':
          dwa7u && $7uwy(ojtleq), qo9l = bte2lh(lq9j6, ojtleq, $wzuya);break;case '!':
          dwa7u && $7uwy(ojtleq), qo9l = bk95g6r(lq9j6, ojtleq, $wzuya, awuy7d);break;default:
          dwa7u && $7uwy(ojtleq);var _f0 = new beohti(),
              smf_01 = vg5[vg5['length'] - 0x1]['currentNSMap'],
              qo9l = bl9qj5(lq9j6, ojtleq, _f0, smf_01, sch2i, awuy7d),
              fm01c = _f0['length'];if (!_f0['closed'] && bg69qr5(lq9j6, qo9l, _f0['tagName'], hict21) && (_f0['closed'] = !0x0, zua8$['nbsp'] || awuy7d['warning']('unclosed xml attribute')), dwa7u && fm01c) {
            for (var j9l6q = bq9eojl(dwa7u, {}), l65 = 0x0; fm01c > l65; l65++) {
              var hcmsi = _f0[l65];$7uwy(hcmsi['offset']), hcmsi['locator'] = bq9eojl(dwa7u, {});
            }$wzuya['locator'] = j9l6q, b_4ydw7(_f0, $wzuya, smf_01) && vg5['push'](_f0), $wzuya['locator'] = dwa7u;
          } else b_4ydw7(_f0, $wzuya, smf_01) && vg5['push'](_f0);'http://www.w3.org/1999/xhtml' !== _f0['uri'] || _f0['closed'] ? qo9l++ : qo9l = bcsi(lq9j6, qo9l, _f0['tagName'], sch2i, $wzuya);}
    } catch (jgq569) {
      awuy7d['error']('element parse error: ' + jgq569), qo9l = -0x1;
    }qo9l > k5g9r ? k5g9r = qo9l : vkrp6g(Math['max'](ojtleq, k5g9r) + 0x1);
  }
}function bq9eojl(za, vrpkgx) {
  return vrpkgx['lineNumber'] = za['lineNumber'], vrpkgx['columnNumber'] = za['columnNumber'], vrpkgx;
}function bl9qj5(cti12, auz8y$, u8zn3, v6pgrk, cehti2, $uzyaw) {
  for (var i1hscm, fs0_m4, $uawy7 = ++auz8y$, sm04f_ = br9q5g6;;) {
    var ieho = cti12['charAt']($uawy7);switch (ieho) {case '=':
        if (sm04f_ === bd4_7y) i1hscm = cti12['slice'](auz8y$, $uawy7), sm04f_ = biteh2;else {
          if (sm04f_ !== bvrgpk6) throw new Error('attribute equal must after attrName');sm04f_ = biteh2;
        }break;case '\x27':case '\x22':
        if (sm04f_ === biteh2 || sm04f_ === bd4_7y) {
          if (sm04f_ === bd4_7y && ($uzyaw['warning']('attribute value must after "="'), i1hscm = cti12['slice'](auz8y$, $uawy7)), auz8y$ = $uawy7 + 0x1, $uawy7 = cti12['indexOf'](ieho, auz8y$), !($uawy7 > 0x0)) throw new Error('attribute value no end \'' + ieho + '\' match');fs0_m4 = cti12['slice'](auz8y$, $uawy7)['replace'](/&#?\w+;/g, cehti2), u8zn3['add'](i1hscm, fs0_m4, auz8y$ - 0x1), sm04f_ = b$zua38;
        } else {
          if (sm04f_ != bsi1cm) throw new Error('attribute value must after "="');fs0_m4 = cti12['slice'](auz8y$, $uawy7)['replace'](/&#?\w+;/g, cehti2), u8zn3['add'](i1hscm, fs0_m4, auz8y$), $uzyaw['warning']('attribute "' + i1hscm + '" missed start quot(' + ieho + ')!!'), auz8y$ = $uawy7 + 0x1, sm04f_ = b$zua38;
        }break;case '/':
        switch (sm04f_) {case br9q5g6:
            u8zn3['setTagName'](cti12['slice'](auz8y$, $uawy7));case b$zua38:case baz8u3$:case boi2eth:
            sm04f_ = boi2eth, u8zn3['closed'] = !0x0;case bsi1cm:case bd4_7y:case bvrgpk6:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $uzyaw['error']('unexpected end of input'), sm04f_ == br9q5g6 && u8zn3['setTagName'](cti12['slice'](auz8y$, $uawy7)), $uawy7;case '>':
        switch (sm04f_) {case br9q5g6:
            u8zn3['setTagName'](cti12['slice'](auz8y$, $uawy7));case b$zua38:case baz8u3$:case boi2eth:
            break;case bsi1cm:case bd4_7y:
            fs0_m4 = cti12['slice'](auz8y$, $uawy7), '/' === fs0_m4['slice'](-0x1) && (u8zn3['closed'] = !0x0, fs0_m4 = fs0_m4['slice'](0x0, -0x1));case bvrgpk6:
            sm04f_ === bvrgpk6 && (fs0_m4 = i1hscm), sm04f_ == bsi1cm ? ($uzyaw['warning']('attribute "' + fs0_m4 + '" missed quot(")!!'), u8zn3['add'](i1hscm, fs0_m4['replace'](/&#?\w+;/g, cehti2), auz8y$)) : ('http://www.w3.org/1999/xhtml' === v6pgrk[''] && fs0_m4['match'](/^(?:disabled|checked|selected)$/i) || $uzyaw['warning']('attribute "' + fs0_m4 + '" missed value!! "' + fs0_m4 + '" instead!!'), u8zn3['add'](fs0_m4, fs0_m4, auz8y$));break;case biteh2:
            throw new Error('attribute value missed!!');}return $uawy7;case '\u0080':
        ieho = '\x20';default:
        if ('\x20' >= ieho) switch (sm04f_) {case br9q5g6:
            u8zn3['setTagName'](cti12['slice'](auz8y$, $uawy7)), sm04f_ = baz8u3$;break;case bd4_7y:
            i1hscm = cti12['slice'](auz8y$, $uawy7), sm04f_ = bvrgpk6;break;case bsi1cm:
            var fs0_m4 = cti12['slice'](auz8y$, $uawy7)['replace'](/&#?\w+;/g, cehti2);$uzyaw['warning']('attribute "' + fs0_m4 + '" missed quot(")!!'), u8zn3['add'](i1hscm, fs0_m4, auz8y$);case b$zua38:
            sm04f_ = baz8u3$;} else switch (sm04f_) {case bvrgpk6:
            {
              u8zn3['tagName'];
            }'http://www.w3.org/1999/xhtml' === v6pgrk[''] && i1hscm['match'](/^(?:disabled|checked|selected)$/i) || $uzyaw['warning']('attribute "' + i1hscm + '" missed value!! "' + i1hscm + '" instead2!!'), u8zn3['add'](i1hscm, i1hscm, auz8y$), auz8y$ = $uawy7, sm04f_ = bd4_7y;break;case b$zua38:
            $uzyaw['warning']('attribute space is required"' + i1hscm + '\x22!!');case baz8u3$:
            sm04f_ = bd4_7y, auz8y$ = $uawy7;break;case biteh2:
            sm04f_ = bsi1cm, auz8y$ = $uawy7;break;case boi2eth:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$uawy7++;
  }
}function b_4ydw7(awu$7y, _s1m0, w7yd_) {
  for (var jl2toe = awu$7y['tagName'], pgk6 = null, fs = awu$7y['length']; fs--;) {
    var sm_0f1 = awu$7y[fs],
        dayu = sm_0f1['qName'],
        eot2ih = sm_0f1['value'],
        nu83$z = dayu['indexOf'](':');if (nu83$z > 0x0) var qj9g = sm_0f1['prefix'] = dayu['slice'](0x0, nu83$z),
        rxkgv = dayu['slice'](nu83$z + 0x1),
        r6g5 = 'xmlns' === qj9g && rxkgv;else rxkgv = dayu, qj9g = null, r6g5 = 'xmlns' === dayu && '';sm_0f1['localName'] = rxkgv, r6g5 !== !0x1 && (null == pgk6 && (pgk6 = {}, bscmfi1(w7yd_, w7yd_ = {})), w7yd_[r6g5] = pgk6[r6g5] = eot2ih, sm_0f1['uri'] = 'http://www.w3.org/2000/xmlns/', _s1m0['startPrefixMapping'](r6g5, eot2ih));
  }for (var fs = awu$7y['length']; fs--;) {
    sm_0f1 = awu$7y[fs];var qj9g = sm_0f1['prefix'];qj9g && ('xml' === qj9g && (sm_0f1['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qj9g && (sm_0f1['uri'] = w7yd_[qj9g || '']));
  }var nu83$z = jl2toe['indexOf'](':');nu83$z > 0x0 ? (qj9g = awu$7y['prefix'] = jl2toe['slice'](0x0, nu83$z), rxkgv = awu$7y['localName'] = jl2toe['slice'](nu83$z + 0x1)) : (qj9g = null, rxkgv = awu$7y['localName'] = jl2toe);var zauy8$ = awu$7y['uri'] = w7yd_[qj9g || ''];if (_s1m0['startElement'](zauy8$, rxkgv, jl2toe, awu$7y), !awu$7y['closed']) return awu$7y['currentNSMap'] = w7yd_, awu$7y['localNSMap'] = pgk6, !0x0;if (_s1m0['endElement'](zauy8$, rxkgv, jl2toe), pgk6) {
    for (qj9g in pgk6) _s1m0['endPrefixMapping'](qj9g);
  }
}function bcsi(d04f_7, csmi1h, w7_d0, wu7ayd, z$83ua) {
  if (/^(?:script|textarea)$/i['test'](w7_d0)) {
    var g6r9k5 = d04f_7['indexOf']('</' + w7_d0 + '>', csmi1h),
        ohle2t = d04f_7['substring'](csmi1h + 0x1, g6r9k5);if (/[&<]/['test'](ohle2t)) return (/^script$/i['test'](w7_d0) ? (z$83ua['characters'](ohle2t, 0x0, ohle2t['length']), g6r9k5) : (ohle2t = ohle2t['replace'](/&#?\w+;/g, wu7ayd), z$83ua['characters'](ohle2t, 0x0, ohle2t['length']), g6r9k5)
    );
  }return csmi1h + 0x1;
}function bg69qr5(it12hc, ywzu, tleo2h, kxpgr) {
  var rxgv = kxpgr[tleo2h];return null == rxgv && (rxgv = it12hc['lastIndexOf']('</' + tleo2h + '>'), ywzu > rxgv && (rxgv = it12hc['lastIndexOf']('</' + tleo2h)), kxpgr[tleo2h] = rxgv), ywzu > rxgv;
}function bscmfi1(icsf1m, smi) {
  for (var ms40f_ in icsf1m) smi[ms40f_] = icsf1m[ms40f_];
}function bk95g6r(imcfs1, q65gj9, uay7dw, _w4d70) {
  var a8uzy$ = imcfs1['charAt'](q65gj9 + 0x2);switch (a8uzy$) {case '-':
      if ('-' === imcfs1['charAt'](q65gj9 + 0x3)) {
        var cte2h = imcfs1['indexOf']('-->', q65gj9 + 0x4);return cte2h > q65gj9 ? (uay7dw['comment'](imcfs1, q65gj9 + 0x4, cte2h - q65gj9 - 0x4), cte2h + 0x3) : (_w4d70['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == imcfs1['substr'](q65gj9 + 0x3, 0x6)) {
        var cte2h = imcfs1['indexOf'](']]>', q65gj9 + 0x9);return uay7dw['startCDATA'](), uay7dw['characters'](imcfs1, q65gj9 + 0x9, cte2h - q65gj9 - 0x9), uay7dw['endCDATA'](), cte2h + 0x3;
      }var d74y_w = bit2(imcfs1, q65gj9),
          wd_y4 = d74y_w['length'];if (wd_y4 > 0x1 && /!doctype/i['test'](d74y_w[0x0][0x0])) {
        var sfcm01 = d74y_w[0x1][0x0],
            w4y_d7 = wd_y4 > 0x3 && /^public$/i['test'](d74y_w[0x2][0x0]) && d74y_w[0x3][0x0],
            _0w4d7 = wd_y4 > 0x4 && d74y_w[0x4][0x0],
            eoj9l = d74y_w[wd_y4 - 0x1];return uay7dw['startDTD'](sfcm01, w4y_d7 && w4y_d7['replace'](/^(['"])(.*?)\1$/, '$2'), _0w4d7 && _0w4d7['replace'](/^(['"])(.*?)\1$/, '$2')), uay7dw['endDTD'](), eoj9l['index'] + eoj9l[0x0]['length'];
      }}return -0x1;
}function bte2lh(i2ohte, w_y4d, gv5kr) {
  var _d074 = i2ohte['indexOf']('?>', w_y4d);if (_d074) {
    var d40w = i2ohte['substring'](w_y4d, _d074)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (d40w) {
      {
        d40w[0x0]['length'];
      }return gv5kr['processingInstruction'](d40w[0x1], d40w[0x2]), _d074 + 0x2;
    }return -0x1;
  }return -0x1;
}function beohti() {}function bto2he(z83$ua, tci1) {
  return z83$ua['__proto__'] = tci1, z83$ua;
}function bit2(icsmh1, w$yu7a) {
  var yda,
      l2thoe = [],
      dmf4 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dmf4['lastIndex'] = w$yu7a, dmf4['exec'](icsmh1); yda = dmf4['exec'](icsmh1);) if (l2thoe['push'](yda), yda[0x1]) return l2thoe;
}var bsci12 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    bhi1tc2 = new RegExp('[\\-\\.0-9' + bsci12['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    bih2eto = new RegExp('^' + bsci12['source'] + bhi1tc2['source'] + '*(?::' + bsci12['source'] + bhi1tc2['source'] + '*)?$'),
    br9q5g6 = 0x0,
    bd4_7y = 0x1,
    bvrgpk6 = 0x2,
    biteh2 = 0x3,
    bsi1cm = 0x4,
    b$zua38 = 0x5,
    baz8u3$ = 0x6,
    boi2eth = 0x7;bih1tc2['prototype'] = { 'parse': function ($3zn8, sci2, d0_w) {
    var u$nz3 = this['domBuilder'];u$nz3['startDocument'](), bscmfi1(sci2, sci2 = {}), bo2ithe($3zn8, sci2, d0_w, u$nz3, this['errorHandler']), u$nz3['endDocument']();
  } }, beohti['prototype'] = { 'setTagName': function (kxp) {
    if (!bih2eto['test'](kxp)) throw new Error('invalid tagName:' + kxp);this['tagName'] = kxp;
  }, 'add': function (cm1sf0, ojqelt, _fd04) {
    if (!bih2eto['test'](cm1sf0)) throw new Error('invalid attribute:' + cm1sf0);this[this['length']++] = { 'qName': cm1sf0, 'value': ojqelt, 'offset': _fd04 };
  }, 'length': 0x0, 'getLocalName': function ($yua7) {
    return this[$yua7]['localName'];
  }, 'getLocator': function (ql5) {
    return this[ql5]['locator'];
  }, 'getQName': function (aw7y4d) {
    return this[aw7y4d]['qName'];
  }, 'getURI': function (un83z) {
    return this[un83z]['uri'];
  }, 'getValue': function (ydaw7u) {
    return this[ydaw7u]['value'];
  } }, bto2he({}, bto2he['prototype']) instanceof bto2he || (bto2he = function (z3u$n8, ya8z$) {
  function jg56q() {}jg56q['prototype'] = ya8z$, jg56q = new jg56q();for (ya8z$ in z3u$n8) jg56q[ya8z$] = z3u$n8[ya8z$];return jg56q;
}), exports['XMLReader'] = bih1tc2;