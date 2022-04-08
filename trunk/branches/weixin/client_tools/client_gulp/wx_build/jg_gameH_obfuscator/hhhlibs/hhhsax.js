var O = wx.$C;
function h_a26yis() {}function h_fg4v3(svnf, gv_4fn, v_gf, c$pul, $uc) {
  function hx0jd(_yan6) {
    if (_yan6 > 0xffff) {
      _yan6 -= 0x10000;var j90whd = 0xd800 + (_yan6 >> 0xa),
          lom5tk = 0xdc00 + (0x3ff & _yan6);return String['fromCharCode'](j90whd, lom5tk);
    }return String['fromCharCode'](_yan6);
  }function v4g_3f(w0djh) {
    var cop5lt = w0djh['slice'](0x1, -0x1);return cop5lt in v_gf ? v_gf[cop5lt] : '#' === cop5lt['charAt'](0x0) ? hx0jd(parseInt(cop5lt['substr'](0x1)['replace']('x', '0x'))) : ($uc['error']('entity not found:' + w0djh), w0djh);
  }function uz$r9(u8rp$c) {
    if (u8rp$c > f_nsgv) {
      var iysa6 = svnf['substring'](f_nsgv, u8rp$c)['replace'](/&#?\w+;/g, v4g_3f);_4g3 && r8d9z(f_nsgv), c$pul['characters'](iysa6, 0x0, u8rp$c - f_nsgv), f_nsgv = u8rp$c;
    }
  }function r8d9z(urp$, uz9$r) {
    for (; urp$ >= h0dwq && (uz9$r = nf4_v['exec'](svnf));) as26 = uz9$r['index'], h0dwq = as26 + uz9$r[0x0]['length'], _4g3['lineNumber']++;_4g3['columnNumber'] = urp$ - as26 + 0x1;
  }for (var as26 = 0x0, h0dwq = 0x0, nf4_v = /.*(?:\r\n?|\n)|.*$/g, _4g3 = c$pul['locator'], puc$8l = [{ 'currentNSMap': gv_4fn }], n_vf4g = {}, f_nsgv = 0x0;;) {
    try {
      var pr$c8u = svnf['indexOf']('<', f_nsgv);if (0x0 > pr$c8u) {
        if (!svnf['substr'](f_nsgv)['match'](/^\s*$/)) {
          var clp$5 = c$pul['doc'],
              v4_gnf = clp$5['createTextNode'](svnf['substr'](f_nsgv));clp$5['appendChild'](v4_gnf), c$pul['currentElement'] = v4_gnf;
        }return;
      }switch (pr$c8u > f_nsgv && uz$r9(pr$c8u), svnf['charAt'](pr$c8u + 0x1)) {case '/':
          var bei6 = svnf['indexOf']('>', pr$c8u + 0x3),
              ayib26 = svnf['substring'](pr$c8u + 0x2, bei6),
              ucpr = puc$8l['pop']();0x0 > bei6 ? (ayib26 = svnf['substring'](pr$c8u + 0x2)['replace'](/[\s<].*/, ''), $uc['error']('end tag name: ' + ayib26 + ' is not complete:' + ucpr['tagName']), bei6 = pr$c8u + 0x1 + ayib26['length']) : ayib26['match'](/\s</) && (ayib26 = ayib26['replace'](/[\s<].*/, ''), $uc['error']('end tag name: ' + ayib26 + ' maybe not complete'), bei6 = pr$c8u + 0x1 + ayib26['length']);var lomtk = ucpr['localNSMap'],
              xwj0hd = ucpr['tagName'] == ayib26,
              ie6b2a = xwj0hd || ucpr['tagName'] && ucpr['tagName']['toLowerCase']() == ayib26['toLowerCase']();if (ie6b2a) {
            if (c$pul['endElement'](ucpr['uri'], ucpr['localName'], ayib26), lomtk) {
              for (var $9z8ur in lomtk) c$pul['endPrefixMapping']($9z8ur);
            }xwj0hd || $uc['fatalError']('end tag name: ' + ayib26 + ' is not match the current start tagName:' + ucpr['tagName']);
          } else puc$8l['push'](ucpr);bei6++;break;case '?':
          _4g3 && r8d9z(pr$c8u), bei6 = h_ngs_f(svnf, pr$c8u, c$pul);break;case '!':
          _4g3 && r8d9z(pr$c8u), bei6 = h__snvgf(svnf, pr$c8u, c$pul, $uc);break;default:
          _4g3 && r8d9z(pr$c8u);var hwqx0 = new h_bi26ya(),
              w0hjxd = puc$8l[puc$8l['length'] - 0x1]['currentNSMap'],
              bei6 = h_ai(svnf, pr$c8u, hwqx0, w0hjxd, v4g_3f, $uc),
              ouplc5 = hwqx0['length'];if (!hwqx0['closed'] && h_ea26(svnf, bei6, hwqx0['tagName'], n_vf4g) && (hwqx0['closed'] = !0x0, v_gf['nbsp'] || $uc['warning']('unclosed xml attribute')), _4g3 && ouplc5) {
            for (var pl5ot = h_hj09wd(_4g3, {}), u8p = 0x0; ouplc5 > u8p; u8p++) {
              var q1x3 = hwqx0[u8p];r8d9z(q1x3['offset']), q1x3['locator'] = h_hj09wd(_4g3, {});
            }c$pul['locator'] = pl5ot, h_sa6y2n(hwqx0, c$pul, w0hjxd) && puc$8l['push'](hwqx0), c$pul['locator'] = _4g3;
          } else h_sa6y2n(hwqx0, c$pul, w0hjxd) && puc$8l['push'](hwqx0);'http://www.w3.org/1999/xhtml' !== hwqx0['uri'] || hwqx0['closed'] ? bei6++ : bei6 = h_rpu8z(svnf, bei6, hwqx0['tagName'], v4g_3f, c$pul);}
    } catch (vsyg) {
      $uc['error']('element parse error: ' + vsyg), bei6 = -0x1;
    }bei6 > f_nsgv ? f_nsgv = bei6 : uz$r9(Math['max'](pr$c8u, f_nsgv) + 0x1);
  }
}function h_hj09wd(ct5m, wq7h0x) {
  return wq7h0x['lineNumber'] = ct5m['lineNumber'], wq7h0x['columnNumber'] = ct5m['columnNumber'], wq7h0x;
}function h_ai($pcu5, x7w0q, g_fn4v, p8ru$c, clup5$, w9zhdj) {
  for (var zurp8$, q4f13, beia2 = ++x7w0q, b2a6 = h_dh0jw;;) {
    var gv43f_ = $pcu5['charAt'](beia2);switch (gv43f_) {case '=':
        if (b2a6 === h_syg_v) zurp8$ = $pcu5['slice'](x7w0q, beia2), b2a6 = h_z89jr$;else {
          if (b2a6 !== h_yn26sa) throw new Error('attribute equal must after attrName');b2a6 = h_z89jr$;
        }break;case '\x27':case '\x22':
        if (b2a6 === h_z89jr$ || b2a6 === h_syg_v) {
          if (b2a6 === h_syg_v && (w9zhdj['warning']('attribute value must after "="'), zurp8$ = $pcu5['slice'](x7w0q, beia2)), x7w0q = beia2 + 0x1, beia2 = $pcu5['indexOf'](gv43f_, x7w0q), !(beia2 > 0x0)) throw new Error('attribute value no end \'' + gv43f_ + '\' match');q4f13 = $pcu5['slice'](x7w0q, beia2)['replace'](/&#?\w+;/g, clup5$), g_fn4v['add'](zurp8$, q4f13, x7w0q - 0x1), b2a6 = h_k5otl;
        } else {
          if (b2a6 != h_p5olcu) throw new Error('attribute value must after "="');q4f13 = $pcu5['slice'](x7w0q, beia2)['replace'](/&#?\w+;/g, clup5$), g_fn4v['add'](zurp8$, q4f13, x7w0q), w9zhdj['warning']('attribute "' + zurp8$ + '" missed start quot(' + gv43f_ + ')!!'), x7w0q = beia2 + 0x1, b2a6 = h_k5otl;
        }break;case '/':
        switch (b2a6) {case h_dh0jw:
            g_fn4v['setTagName']($pcu5['slice'](x7w0q, beia2));case h_k5otl:case h_ngfs:case h_sgy_:
            b2a6 = h_sgy_, g_fn4v['closed'] = !0x0;case h_p5olcu:case h_syg_v:case h_yn26sa:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return w9zhdj['error']('unexpected end of input'), b2a6 == h_dh0jw && g_fn4v['setTagName']($pcu5['slice'](x7w0q, beia2)), beia2;case '>':
        switch (b2a6) {case h_dh0jw:
            g_fn4v['setTagName']($pcu5['slice'](x7w0q, beia2));case h_k5otl:case h_ngfs:case h_sgy_:
            break;case h_p5olcu:case h_syg_v:
            q4f13 = $pcu5['slice'](x7w0q, beia2), '/' === q4f13['slice'](-0x1) && (g_fn4v['closed'] = !0x0, q4f13 = q4f13['slice'](0x0, -0x1));case h_yn26sa:
            b2a6 === h_yn26sa && (q4f13 = zurp8$), b2a6 == h_p5olcu ? (w9zhdj['warning']('attribute "' + q4f13 + '" missed quot(")!!'), g_fn4v['add'](zurp8$, q4f13['replace'](/&#?\w+;/g, clup5$), x7w0q)) : ('http://www.w3.org/1999/xhtml' === p8ru$c[''] && q4f13['match'](/^(?:disabled|checked|selected)$/i) || w9zhdj['warning']('attribute "' + q4f13 + '" missed value!! "' + q4f13 + '" instead!!'), g_fn4v['add'](q4f13, q4f13, x7w0q));break;case h_z89jr$:
            throw new Error('attribute value missed!!');}return beia2;case '\u0080':
        gv43f_ = '\x20';default:
        if ('\x20' >= gv43f_) switch (b2a6) {case h_dh0jw:
            g_fn4v['setTagName']($pcu5['slice'](x7w0q, beia2)), b2a6 = h_ngfs;break;case h_syg_v:
            zurp8$ = $pcu5['slice'](x7w0q, beia2), b2a6 = h_yn26sa;break;case h_p5olcu:
            var q4f13 = $pcu5['slice'](x7w0q, beia2)['replace'](/&#?\w+;/g, clup5$);w9zhdj['warning']('attribute "' + q4f13 + '" missed quot(")!!'), g_fn4v['add'](zurp8$, q4f13, x7w0q);case h_k5otl:
            b2a6 = h_ngfs;} else switch (b2a6) {case h_yn26sa:
            {
              g_fn4v['tagName'];
            }'http://www.w3.org/1999/xhtml' === p8ru$c[''] && zurp8$['match'](/^(?:disabled|checked|selected)$/i) || w9zhdj['warning']('attribute "' + zurp8$ + '" missed value!! "' + zurp8$ + '" instead2!!'), g_fn4v['add'](zurp8$, zurp8$, x7w0q), x7w0q = beia2, b2a6 = h_syg_v;break;case h_k5otl:
            w9zhdj['warning']('attribute space is required"' + zurp8$ + '\x22!!');case h_ngfs:
            b2a6 = h_syg_v, x7w0q = beia2;break;case h_z89jr$:
            b2a6 = h_p5olcu, x7w0q = beia2;break;case h_sgy_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}beia2++;
  }
}function h_sa6y2n(ay6, y6_na, _g4f3v) {
  for (var qx1w70 = ay6['tagName'], fvn4g_ = null, u5cpl$ = ay6['length']; u5cpl$--;) {
    var y6nsa = ay6[u5cpl$],
        _g4fv = y6nsa['qName'],
        hdrz9 = y6nsa['value'],
        uzp$8 = _g4fv['indexOf'](':');if (uzp$8 > 0x0) var vg314f = y6nsa['prefix'] = _g4fv['slice'](0x0, uzp$8),
        g34_vf = _g4fv['slice'](uzp$8 + 0x1),
        ltcpo5 = 'xmlns' === vg314f && g34_vf;else g34_vf = _g4fv, vg314f = null, ltcpo5 = 'xmlns' === _g4fv && '';y6nsa['localName'] = g34_vf, ltcpo5 !== !0x1 && (null == fvn4g_ && (fvn4g_ = {}, h_q4f7(_g4f3v, _g4f3v = {})), _g4f3v[ltcpo5] = fvn4g_[ltcpo5] = hdrz9, y6nsa['uri'] = 'http://www.w3.org/2000/xmlns/', y6_na['startPrefixMapping'](ltcpo5, hdrz9));
  }for (var u5cpl$ = ay6['length']; u5cpl$--;) {
    y6nsa = ay6[u5cpl$];var vg314f = y6nsa['prefix'];vg314f && ('xml' === vg314f && (y6nsa['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vg314f && (y6nsa['uri'] = _g4f3v[vg314f || '']));
  }var uzp$8 = qx1w70['indexOf'](':');uzp$8 > 0x0 ? (vg314f = ay6['prefix'] = qx1w70['slice'](0x0, uzp$8), g34_vf = ay6['localName'] = qx1w70['slice'](uzp$8 + 0x1)) : (vg314f = null, g34_vf = ay6['localName'] = qx1w70);var q71x03 = ay6['uri'] = _g4f3v[vg314f || ''];if (y6_na['startElement'](q71x03, g34_vf, qx1w70, ay6), !ay6['closed']) return ay6['currentNSMap'] = _g4f3v, ay6['localNSMap'] = fvn4g_, !0x0;if (y6_na['endElement'](q71x03, g34_vf, qx1w70), fvn4g_) {
    for (vg314f in fvn4g_) y6_na['endPrefixMapping'](vg314f);
  }
}function h_rpu8z(_snyv, wdzhj9, xw0q71, hjwdz9, a2s6) {
  if (/^(?:script|textarea)$/i['test'](xw0q71)) {
    var z8j$9r = _snyv['indexOf']('</' + xw0q71 + '>', wdzhj9),
        tplco = _snyv['substring'](wdzhj9 + 0x1, z8j$9r);if (/[&<]/['test'](tplco)) return (/^script$/i['test'](xw0q71) ? (a2s6['characters'](tplco, 0x0, tplco['length']), z8j$9r) : (tplco = tplco['replace'](/&#?\w+;/g, hjwdz9), a2s6['characters'](tplco, 0x0, tplco['length']), z8j$9r)
    );
  }return wdzhj9 + 0x1;
}function h_ea26(c8upr$, bi6ya, rp$u8c, up$r8) {
  var f14vg3 = up$r8[rp$u8c];return null == f14vg3 && (f14vg3 = c8upr$['lastIndexOf']('</' + rp$u8c + '>'), bi6ya > f14vg3 && (f14vg3 = c8upr$['lastIndexOf']('</' + rp$u8c)), up$r8[rp$u8c] = f14vg3), bi6ya > f14vg3;
}function h_q4f7(zjr9dh, b2ai6e) {
  for (var l5tcm in zjr9dh) b2ai6e[l5tcm] = zjr9dh[l5tcm];
}function h__snvgf(jzrd9, gysnv_, yi62as, f_svng) {
  var x0qwhd = jzrd9['charAt'](gysnv_ + 0x2);switch (x0qwhd) {case '-':
      if ('-' === jzrd9['charAt'](gysnv_ + 0x3)) {
        var sa2iy = jzrd9['indexOf']('-->', gysnv_ + 0x4);return sa2iy > gysnv_ ? (yi62as['comment'](jzrd9, gysnv_ + 0x4, sa2iy - gysnv_ - 0x4), sa2iy + 0x3) : (f_svng['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jzrd9['substr'](gysnv_ + 0x3, 0x6)) {
        var sa2iy = jzrd9['indexOf'](']]>', gysnv_ + 0x9);return yi62as['startCDATA'](), yi62as['characters'](jzrd9, gysnv_ + 0x9, sa2iy - gysnv_ - 0x9), yi62as['endCDATA'](), sa2iy + 0x3;
      }var j9$8 = h_dz9h(jzrd9, gysnv_),
          gnvs = j9$8['length'];if (gnvs > 0x1 && /!doctype/i['test'](j9$8[0x0][0x0])) {
        var lmok5 = j9$8[0x1][0x0],
            wjz9h = gnvs > 0x3 && /^public$/i['test'](j9$8[0x2][0x0]) && j9$8[0x3][0x0],
            xwq710 = gnvs > 0x4 && j9$8[0x4][0x0],
            _yvan = j9$8[gnvs - 0x1];return yi62as['startDTD'](lmok5, wjz9h && wjz9h['replace'](/^(['"])(.*?)\1$/, '$2'), xwq710 && xwq710['replace'](/^(['"])(.*?)\1$/, '$2')), yi62as['endDTD'](), _yvan['index'] + _yvan[0x0]['length'];
      }}return -0x1;
}function h_ngs_f(cplot, q7x, cltom5) {
  var tlc5m = cplot['indexOf']('?>', q7x);if (tlc5m) {
    var r$89u = cplot['substring'](q7x, tlc5m)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r$89u) {
      {
        r$89u[0x0]['length'];
      }return cltom5['processingInstruction'](r$89u[0x1], r$89u[0x2]), tlc5m + 0x2;
    }return -0x1;
  }return -0x1;
}function h_bi26ya() {}function h_x0w71q(ny_sa6, ltop) {
  return ny_sa6['__proto__'] = ltop, ny_sa6;
}function h_dz9h(nay62s, zjr$98) {
  var q437f1,
      copl5t = [],
      v413f = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (v413f['lastIndex'] = zjr$98, v413f['exec'](nay62s); q437f1 = v413f['exec'](nay62s);) if (copl5t['push'](q437f1), q437f1[0x1]) return copl5t;
}var h_ulp$5c = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_$8r9 = new RegExp('[\\-\\.0-9' + h_ulp$5c['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_zj9dwh = new RegExp('^' + h_ulp$5c['source'] + h_$8r9['source'] + '*(?::' + h_ulp$5c['source'] + h_$8r9['source'] + '*)?$'),
    h_dh0jw = 0x0,
    h_syg_v = 0x1,
    h_yn26sa = 0x2,
    h_z89jr$ = 0x3,
    h_p5olcu = 0x4,
    h_k5otl = 0x5,
    h_ngfs = 0x6,
    h_sgy_ = 0x7;h_a26yis['prototype'] = { 'parse': function (sn_fvg, cop, l5omtk) {
    var sfng_v = this['domBuilder'];sfng_v['startDocument'](), h_q4f7(cop, cop = {}), h_fg4v3(sn_fvg, cop, l5omtk, sfng_v, this['errorHandler']), sfng_v['endDocument']();
  } }, h_bi26ya['prototype'] = { 'setTagName': function (lk5otm) {
    if (!h_zj9dwh['test'](lk5otm)) throw new Error('invalid tagName:' + lk5otm);this['tagName'] = lk5otm;
  }, 'add': function (tklom5, q301x, vg1f43) {
    if (!h_zj9dwh['test'](tklom5)) throw new Error('invalid attribute:' + tklom5);this[this['length']++] = { 'qName': tklom5, 'value': q301x, 'offset': vg1f43 };
  }, 'length': 0x0, 'getLocalName': function ($8pucl) {
    return this[$8pucl]['localName'];
  }, 'getLocator': function (aiy6b2) {
    return this[aiy6b2]['locator'];
  }, 'getQName': function (g_nys) {
    return this[g_nys]['qName'];
  }, 'getURI': function (tkl5om) {
    return this[tkl5om]['uri'];
  }, 'getValue': function (ctlo5m) {
    return this[ctlo5m]['value'];
  } }, h_x0w71q({}, h_x0w71q['prototype']) instanceof h_x0w71q || (h_x0w71q = function (f1g437, dxq0hw) {
  function zp8u$() {}zp8u$['prototype'] = dxq0hw, zp8u$ = new zp8u$();for (dxq0hw in f1g437) zp8u$[dxq0hw] = f1g437[dxq0hw];return zp8u$;
}), exports['XMLReader'] = h_a26yis;