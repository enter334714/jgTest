var H = wx.$F;
function fuy_ps9() {}function fegjw12(u9p4, g2wh1, tavnz7, q03brm, tax7n) {
  function x7b0z(x$7z0) {
    if (x$7z0 > 0xffff) {
      x$7z0 -= 0x10000;var jwe2 = 0xd800 + (x$7z0 >> 0xa),
          axn$ = 0xdc00 + (0x3ff & x$7z0);return String['fromCharCode'](jwe2, axn$);
    }return String['fromCharCode'](x$7z0);
  }function lkhgcw(pus_y9) {
    var ys9up_ = pus_y9['slice'](0x1, -0x1);return ys9up_ in tavnz7 ? tavnz7[ys9up_] : '#' === ys9up_['charAt'](0x0) ? x7b0z(parseInt(ys9up_['substr'](0x1)['replace']('x', '0x'))) : (tax7n['error']('entity not found:' + pus_y9), pus_y9);
  }function _pdus(kud4s) {
    if (kud4s > na5tzv) {
      var _69p = u9p4['substring'](na5tzv, kud4s)['replace'](/&#?\w+;/g, lkhgcw);nzx$7a && ysp9u_(na5tzv), q03brm['characters'](_69p, 0x0, kud4s - na5tzv), na5tzv = kud4s;
    }
  }function ysp9u_(n5vzt, $bq3) {
    for (; n5vzt >= skl && ($bq3 = i_9o6y['exec'](u9p4));) ntjv5 = $bq3['index'], skl = ntjv5 + $bq3[0x0]['length'], nzx$7a['lineNumber']++;nzx$7a['columnNumber'] = n5vzt - ntjv5 + 0x1;
  }for (var ntjv5 = 0x0, skl = 0x0, i_9o6y = /.*(?:\r\n?|\n)|.*$/g, nzx$7a = q03brm['locator'], nz7$xa = [{ 'currentNSMap': g2wh1 }], e1hg2 = {}, na5tzv = 0x0;;) {
    try {
      var pukd4s = u9p4['indexOf']('<', na5tzv);if (0x0 > pukd4s) {
        if (!u9p4['substr'](na5tzv)['match'](/^\s*$/)) {
          var zn5at = q03brm['doc'],
              rm3bq = zn5at['createTextNode'](u9p4['substr'](na5tzv));zn5at['appendChild'](rm3bq), q03brm['currentElement'] = rm3bq;
        }return;
      }switch (pukd4s > na5tzv && _pdus(pukd4s), u9p4['charAt'](pukd4s + 0x1)) {case '/':
          var j1e258 = u9p4['indexOf']('>', pukd4s + 0x3),
              h1wlcg = u9p4['substring'](pukd4s + 0x2, j1e258),
              jw82 = nz7$xa['pop']();0x0 > j1e258 ? (h1wlcg = u9p4['substring'](pukd4s + 0x2)['replace'](/[\s<].*/, ''), tax7n['error']('end tag name: ' + h1wlcg + ' is not complete:' + jw82['tagName']), j1e258 = pukd4s + 0x1 + h1wlcg['length']) : h1wlcg['match'](/\s</) && (h1wlcg = h1wlcg['replace'](/[\s<].*/, ''), tax7n['error']('end tag name: ' + h1wlcg + ' maybe not complete'), j1e258 = pukd4s + 0x1 + h1wlcg['length']);var b$03 = jw82['localNSMap'],
              je8w1 = jw82['tagName'] == h1wlcg,
              n7tv = je8w1 || jw82['tagName'] && jw82['tagName']['toLowerCase']() == h1wlcg['toLowerCase']();if (n7tv) {
            if (q03brm['endElement'](jw82['uri'], jw82['localName'], h1wlcg), b$03) {
              for (var gwe12 in b$03) q03brm['endPrefixMapping'](gwe12);
            }je8w1 || tax7n['fatalError']('end tag name: ' + h1wlcg + ' is not match the current start tagName:' + jw82['tagName']);
          } else nz7$xa['push'](jw82);j1e258++;break;case '?':
          nzx$7a && ysp9u_(pukd4s), j1e258 = fck4lhd(u9p4, pukd4s, q03brm);break;case '!':
          nzx$7a && ysp9u_(pukd4s), j1e258 = fa5tvn8(u9p4, pukd4s, q03brm, tax7n);break;default:
          nzx$7a && ysp9u_(pukd4s);var jt5ev8 = new fc1lg(),
              vte85 = nz7$xa[nz7$xa['length'] - 0x1]['currentNSMap'],
              j1e258 = fypus(u9p4, pukd4s, jt5ev8, vte85, lkhgcw, tax7n),
              j12wge = jt5ev8['length'];if (!jt5ev8['closed'] && f$3x0m(u9p4, j1e258, jt5ev8['tagName'], e1hg2) && (jt5ev8['closed'] = !0x0, tavnz7['nbsp'] || tax7n['warning']('unclosed xml attribute')), nzx$7a && j12wge) {
            for (var e8j521 = fyp_(nzx$7a, {}), y9_ps = 0x0; j12wge > y9_ps; y9_ps++) {
              var zx7$n = jt5ev8[y9_ps];ysp9u_(zx7$n['offset']), zx7$n['locator'] = fyp_(nzx$7a, {});
            }q03brm['locator'] = e8j521, fa7bz$(jt5ev8, q03brm, vte85) && nz7$xa['push'](jt5ev8), q03brm['locator'] = nzx$7a;
          } else fa7bz$(jt5ev8, q03brm, vte85) && nz7$xa['push'](jt5ev8);'http://www.w3.org/1999/xhtml' !== jt5ev8['uri'] || jt5ev8['closed'] ? j1e258++ : j1e258 = fp_9yus(u9p4, j1e258, jt5ev8['tagName'], lkhgcw, q03brm);}
    } catch ($xbm70) {
      tax7n['error']('element parse error: ' + $xbm70), j1e258 = -0x1;
    }j1e258 > na5tzv ? na5tzv = j1e258 : _pdus(Math['max'](pukd4s, na5tzv) + 0x1);
  }
}function fyp_(ejgw, z7xab) {
  return z7xab['lineNumber'] = ejgw['lineNumber'], z7xab['columnNumber'] = ejgw['columnNumber'], z7xab;
}function fypus(kgwch, ksul, _9yio6, b0mx3$, tnazx, du4pks) {
  for (var z0x7b$, $xz7ab, tj58nv = ++ksul, avn8t5 = fgw2hc;;) {
    var lg1c = kgwch['charAt'](tj58nv);switch (lg1c) {case '=':
        if (avn8t5 === fzxa$7) z0x7b$ = kgwch['slice'](ksul, tj58nv), avn8t5 = fkclds;else {
          if (avn8t5 !== frm30q) throw new Error('attribute equal must after attrName');avn8t5 = fkclds;
        }break;case '\x27':case '\x22':
        if (avn8t5 === fkclds || avn8t5 === fzxa$7) {
          if (avn8t5 === fzxa$7 && (du4pks['warning']('attribute value must after "="'), z0x7b$ = kgwch['slice'](ksul, tj58nv)), ksul = tj58nv + 0x1, tj58nv = kgwch['indexOf'](lg1c, ksul), !(tj58nv > 0x0)) throw new Error('attribute value no end \'' + lg1c + '\' match');$xz7ab = kgwch['slice'](ksul, tj58nv)['replace'](/&#?\w+;/g, tnazx), _9yio6['add'](z0x7b$, $xz7ab, ksul - 0x1), avn8t5 = fgkhl4;
        } else {
          if (avn8t5 != fzb7x) throw new Error('attribute value must after "="');$xz7ab = kgwch['slice'](ksul, tj58nv)['replace'](/&#?\w+;/g, tnazx), _9yio6['add'](z0x7b$, $xz7ab, ksul), du4pks['warning']('attribute "' + z0x7b$ + '" missed start quot(' + lg1c + ')!!'), ksul = tj58nv + 0x1, avn8t5 = fgkhl4;
        }break;case '/':
        switch (avn8t5) {case fgw2hc:
            _9yio6['setTagName'](kgwch['slice'](ksul, tj58nv));case fgkhl4:case fj825e1:case fmb$7x0:
            avn8t5 = fmb$7x0, _9yio6['closed'] = !0x0;case fzb7x:case fzxa$7:case frm30q:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return du4pks['error']('unexpected end of input'), avn8t5 == fgw2hc && _9yio6['setTagName'](kgwch['slice'](ksul, tj58nv)), tj58nv;case '>':
        switch (avn8t5) {case fgw2hc:
            _9yio6['setTagName'](kgwch['slice'](ksul, tj58nv));case fgkhl4:case fj825e1:case fmb$7x0:
            break;case fzb7x:case fzxa$7:
            $xz7ab = kgwch['slice'](ksul, tj58nv), '/' === $xz7ab['slice'](-0x1) && (_9yio6['closed'] = !0x0, $xz7ab = $xz7ab['slice'](0x0, -0x1));case frm30q:
            avn8t5 === frm30q && ($xz7ab = z0x7b$), avn8t5 == fzb7x ? (du4pks['warning']('attribute "' + $xz7ab + '" missed quot(")!!'), _9yio6['add'](z0x7b$, $xz7ab['replace'](/&#?\w+;/g, tnazx), ksul)) : ('http://www.w3.org/1999/xhtml' === b0mx3$[''] && $xz7ab['match'](/^(?:disabled|checked|selected)$/i) || du4pks['warning']('attribute "' + $xz7ab + '" missed value!! "' + $xz7ab + '" instead!!'), _9yio6['add']($xz7ab, $xz7ab, ksul));break;case fkclds:
            throw new Error('attribute value missed!!');}return tj58nv;case '\u0080':
        lg1c = '\x20';default:
        if ('\x20' >= lg1c) switch (avn8t5) {case fgw2hc:
            _9yio6['setTagName'](kgwch['slice'](ksul, tj58nv)), avn8t5 = fj825e1;break;case fzxa$7:
            z0x7b$ = kgwch['slice'](ksul, tj58nv), avn8t5 = frm30q;break;case fzb7x:
            var $xz7ab = kgwch['slice'](ksul, tj58nv)['replace'](/&#?\w+;/g, tnazx);du4pks['warning']('attribute "' + $xz7ab + '" missed quot(")!!'), _9yio6['add'](z0x7b$, $xz7ab, ksul);case fgkhl4:
            avn8t5 = fj825e1;} else switch (avn8t5) {case frm30q:
            {
              _9yio6['tagName'];
            }'http://www.w3.org/1999/xhtml' === b0mx3$[''] && z0x7b$['match'](/^(?:disabled|checked|selected)$/i) || du4pks['warning']('attribute "' + z0x7b$ + '" missed value!! "' + z0x7b$ + '" instead2!!'), _9yio6['add'](z0x7b$, z0x7b$, ksul), ksul = tj58nv, avn8t5 = fzxa$7;break;case fgkhl4:
            du4pks['warning']('attribute space is required"' + z0x7b$ + '\x22!!');case fj825e1:
            avn8t5 = fzxa$7, ksul = tj58nv;break;case fkclds:
            avn8t5 = fzb7x, ksul = tj58nv;break;case fmb$7x0:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tj58nv++;
  }
}function fa7bz$(p9_y6i, u_p9sy, e582) {
  for (var b03m = p9_y6i['tagName'], j2ev5 = null, wge1j = p9_y6i['length']; wge1j--;) {
    var m$30qb = p9_y6i[wge1j],
        y9_ip6 = m$30qb['qName'],
        $3bqm = m$30qb['value'],
        zv5atn = y9_ip6['indexOf'](':');if (zv5atn > 0x0) var sp9d_u = m$30qb['prefix'] = y9_ip6['slice'](0x0, zv5atn),
        sd4pu = y9_ip6['slice'](zv5atn + 0x1),
        je21gw = 'xmlns' === sp9d_u && sd4pu;else sd4pu = y9_ip6, sp9d_u = null, je21gw = 'xmlns' === y9_ip6 && '';m$30qb['localName'] = sd4pu, je21gw !== !0x1 && (null == j2ev5 && (j2ev5 = {}, ftv5j8(e582, e582 = {})), e582[je21gw] = j2ev5[je21gw] = $3bqm, m$30qb['uri'] = 'http://www.w3.org/2000/xmlns/', u_p9sy['startPrefixMapping'](je21gw, $3bqm));
  }for (var wge1j = p9_y6i['length']; wge1j--;) {
    m$30qb = p9_y6i[wge1j];var sp9d_u = m$30qb['prefix'];sp9d_u && ('xml' === sp9d_u && (m$30qb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== sp9d_u && (m$30qb['uri'] = e582[sp9d_u || '']));
  }var zv5atn = b03m['indexOf'](':');zv5atn > 0x0 ? (sp9d_u = p9_y6i['prefix'] = b03m['slice'](0x0, zv5atn), sd4pu = p9_y6i['localName'] = b03m['slice'](zv5atn + 0x1)) : (sp9d_u = null, sd4pu = p9_y6i['localName'] = b03m);var tnaz5v = p9_y6i['uri'] = e582[sp9d_u || ''];if (u_p9sy['startElement'](tnaz5v, sd4pu, b03m, p9_y6i), !p9_y6i['closed']) return p9_y6i['currentNSMap'] = e582, p9_y6i['localNSMap'] = j2ev5, !0x0;if (u_p9sy['endElement'](tnaz5v, sd4pu, b03m), j2ev5) {
    for (sp9d_u in j2ev5) u_p9sy['endPrefixMapping'](sp9d_u);
  }
}function fp_9yus(y6_9up, cl1hw, io9_6, etj85v, _9yo6i) {
  if (/^(?:script|textarea)$/i['test'](io9_6)) {
    var _p69i = y6_9up['indexOf']('</' + io9_6 + '>', cl1hw),
        q0bmr3 = y6_9up['substring'](cl1hw + 0x1, _p69i);if (/[&<]/['test'](q0bmr3)) return (/^script$/i['test'](io9_6) ? (_9yo6i['characters'](q0bmr3, 0x0, q0bmr3['length']), _p69i) : (q0bmr3 = q0bmr3['replace'](/&#?\w+;/g, etj85v), _9yo6i['characters'](q0bmr3, 0x0, q0bmr3['length']), _p69i)
    );
  }return cl1hw + 0x1;
}function f$3x0m(m0r3q, m$b3x, wcgh1l, $x7zan) {
  var sdukp4 = $x7zan[wcgh1l];return null == sdukp4 && (sdukp4 = m0r3q['lastIndexOf']('</' + wcgh1l + '>'), m$b3x > sdukp4 && (sdukp4 = m0r3q['lastIndexOf']('</' + wcgh1l)), $x7zan[wcgh1l] = sdukp4), m$b3x > sdukp4;
}function ftv5j8(b$xm3, p9sy) {
  for (var zva7t in b$xm3) p9sy[zva7t] = b$xm3[zva7t];
}function fa5tvn8(suk4l, xb7az, uyp_s9, b$x0z) {
  var cgh4lk = suk4l['charAt'](xb7az + 0x2);switch (cgh4lk) {case '-':
      if ('-' === suk4l['charAt'](xb7az + 0x3)) {
        var h1we = suk4l['indexOf']('-->', xb7az + 0x4);return h1we > xb7az ? (uyp_s9['comment'](suk4l, xb7az + 0x4, h1we - xb7az - 0x4), h1we + 0x3) : (b$x0z['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == suk4l['substr'](xb7az + 0x3, 0x6)) {
        var h1we = suk4l['indexOf'](']]>', xb7az + 0x9);return uyp_s9['startCDATA'](), uyp_s9['characters'](suk4l, xb7az + 0x9, h1we - xb7az - 0x9), uyp_s9['endCDATA'](), h1we + 0x3;
      }var gwe21j = fbm0x7(suk4l, xb7az),
          nv85t = gwe21j['length'];if (nv85t > 0x1 && /!doctype/i['test'](gwe21j[0x0][0x0])) {
        var nvaz7t = gwe21j[0x1][0x0],
            x0$3m = nv85t > 0x3 && /^public$/i['test'](gwe21j[0x2][0x0]) && gwe21j[0x3][0x0],
            gwh21 = nv85t > 0x4 && gwe21j[0x4][0x0],
            nv8t5a = gwe21j[nv85t - 0x1];return uyp_s9['startDTD'](nvaz7t, x0$3m && x0$3m['replace'](/^(['"])(.*?)\1$/, '$2'), gwh21 && gwh21['replace'](/^(['"])(.*?)\1$/, '$2')), uyp_s9['endDTD'](), nv8t5a['index'] + nv8t5a[0x0]['length'];
      }}return -0x1;
}function fck4lhd(oy_i6, $0b, b3m$x0) {
  var mr3b0 = oy_i6['indexOf']('?>', $0b);if (mr3b0) {
    var nzxta7 = oy_i6['substring']($0b, mr3b0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nzxta7) {
      {
        nzxta7[0x0]['length'];
      }return b3m$x0['processingInstruction'](nzxta7[0x1], nzxta7[0x2]), mr3b0 + 0x2;
    }return -0x1;
  }return -0x1;
}function fc1lg() {}function fkwlgc(s9pd4, axn7z$) {
  return s9pd4['__proto__'] = axn7z$, s9pd4;
}function fbm0x7(kl4h, e5vt8) {
  var k4slud,
      _ip9y = [],
      _9o6yi = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_9o6yi['lastIndex'] = e5vt8, _9o6yi['exec'](kl4h); k4slud = _9o6yi['exec'](kl4h);) if (_ip9y['push'](k4slud), k4slud[0x1]) return _ip9y;
}var fiy_96p = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fz$x7 = new RegExp('[\\-\\.0-9' + fiy_96p['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fsp_ = new RegExp('^' + fiy_96p['source'] + fz$x7['source'] + '*(?::' + fiy_96p['source'] + fz$x7['source'] + '*)?$'),
    fgw2hc = 0x0,
    fzxa$7 = 0x1,
    frm30q = 0x2,
    fkclds = 0x3,
    fzb7x = 0x4,
    fgkhl4 = 0x5,
    fj825e1 = 0x6,
    fmb$7x0 = 0x7;fuy_ps9['prototype'] = { 'parse': function (nj5, tz7vn, nvt58) {
    var pdsu4k = this['domBuilder'];pdsu4k['startDocument'](), ftv5j8(tz7vn, tz7vn = {}), fegjw12(nj5, tz7vn, nvt58, pdsu4k, this['errorHandler']), pdsu4k['endDocument']();
  } }, fc1lg['prototype'] = { 'setTagName': function (vztn7) {
    if (!fsp_['test'](vztn7)) throw new Error('invalid tagName:' + vztn7);this['tagName'] = vztn7;
  }, 'add': function (i9_6yo, rbq0, e8j1w2) {
    if (!fsp_['test'](i9_6yo)) throw new Error('invalid attribute:' + i9_6yo);this[this['length']++] = { 'qName': i9_6yo, 'value': rbq0, 'offset': e8j1w2 };
  }, 'length': 0x0, 'getLocalName': function (g1w2he) {
    return this[g1w2he]['localName'];
  }, 'getLocator': function (i69y) {
    return this[i69y]['locator'];
  }, 'getQName': function (kcldh) {
    return this[kcldh]['qName'];
  }, 'getURI': function (yi6p) {
    return this[yi6p]['uri'];
  }, 'getValue': function (hc2g1) {
    return this[hc2g1]['value'];
  } }, fkwlgc({}, fkwlgc['prototype']) instanceof fkwlgc || (fkwlgc = function (qm0b3, ypu) {
  function tn58av() {}tn58av['prototype'] = ypu, tn58av = new tn58av();for (ypu in qm0b3) tn58av[ypu] = qm0b3[ypu];return tn58av;
}), exports['XMLReader'] = fuy_ps9;