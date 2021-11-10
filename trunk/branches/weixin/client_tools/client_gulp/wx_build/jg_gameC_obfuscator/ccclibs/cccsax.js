var p = wx.$h;
function a_csdt() {}function a_h_g8k(vnx2_g, a47pr, v_2nxg, h86e$k, j73f1) {
  function iybe$6(jfsc) {
    if (jfsc > 0xffff) {
      jfsc -= 0x10000;var e6h$k = 0xd800 + (jfsc >> 0xa),
          j13tf = 0xdc00 + (0x3ff & jfsc);return String['fromCharCode'](e6h$k, j13tf);
    }return String['fromCharCode'](jfsc);
  }function lcd5ms(arwn2) {
    var he86k$ = arwn2['slice'](0x1, -0x1);return he86k$ in v_2nxg ? v_2nxg[he86k$] : '#' === he86k$['charAt'](0x0) ? iybe$6(parseInt(he86k$['substr'](0x1)['replace']('x', '0x'))) : (j73f1['error']('entity not found:' + arwn2), arwn2);
  }function gk6(t473j) {
    if (t473j > cj5ts) {
      var gxv20_ = vnx2_g['substring'](cj5ts, t473j)['replace'](/&#?\w+;/g, lcd5ms);ie$by6 && oiyzb(cj5ts), h86e$k['characters'](gxv20_, 0x0, t473j - cj5ts), cj5ts = t473j;
    }
  }function oiyzb(scdm51, _rxvn2) {
    for (; scdm51 >= n2_vxr && (_rxvn2 = n_v['exec'](vnx2_g));) hk$80 = _rxvn2['index'], n2_vxr = hk$80 + _rxvn2[0x0]['length'], ie$by6['lineNumber']++;ie$by6['columnNumber'] = scdm51 - hk$80 + 0x1;
  }for (var hk$80 = 0x0, n2_vxr = 0x0, n_v = /.*(?:\r\n?|\n)|.*$/g, ie$by6 = h86e$k['locator'], tfj1c = [{ 'currentNSMap': a47pr }], ct5 = {}, cj5ts = 0x0;;) {
    try {
      var b6yie$ = vnx2_g['indexOf']('<', cj5ts);if (0x0 > b6yie$) {
        if (!vnx2_g['substr'](cj5ts)['match'](/^\s*$/)) {
          var tsjc = h86e$k['doc'],
              clms5 = tsjc['createTextNode'](vnx2_g['substr'](cj5ts));tsjc['appendChild'](clms5), h86e$k['currentElement'] = clms5;
        }return;
      }switch (b6yie$ > cj5ts && gk6(b6yie$), vnx2_g['charAt'](b6yie$ + 0x1)) {case '/':
          var ap47wr = vnx2_g['indexOf']('>', b6yie$ + 0x3),
              tj4 = vnx2_g['substring'](b6yie$ + 0x2, ap47wr),
              kiy6$e = tfj1c['pop']();0x0 > ap47wr ? (tj4 = vnx2_g['substring'](b6yie$ + 0x2)['replace'](/[\s<].*/, ''), j73f1['error']('end tag name: ' + tj4 + ' is not complete:' + kiy6$e['tagName']), ap47wr = b6yie$ + 0x1 + tj4['length']) : tj4['match'](/\s</) && (tj4 = tj4['replace'](/[\s<].*/, ''), j73f1['error']('end tag name: ' + tj4 + ' maybe not complete'), ap47wr = b6yie$ + 0x1 + tj4['length']);var i$68 = kiy6$e['localNSMap'],
              rvx2n_ = kiy6$e['tagName'] == tj4,
              mscd1 = rvx2n_ || kiy6$e['tagName'] && kiy6$e['tagName']['toLowerCase']() == tj4['toLowerCase']();if (mscd1) {
            if (h86e$k['endElement'](kiy6$e['uri'], kiy6$e['localName'], tj4), i$68) {
              for (var _ghvx0 in i$68) h86e$k['endPrefixMapping'](_ghvx0);
            }rvx2n_ || j73f1['fatalError']('end tag name: ' + tj4 + ' is not match the current start tagName:' + kiy6$e['tagName']);
          } else tfj1c['push'](kiy6$e);ap47wr++;break;case '?':
          ie$by6 && oiyzb(b6yie$), ap47wr = a_h$e6k(vnx2_g, b6yie$, h86e$k);break;case '!':
          ie$by6 && oiyzb(b6yie$), ap47wr = a_$ie6k(vnx2_g, b6yie$, h86e$k, j73f1);break;default:
          ie$by6 && oiyzb(b6yie$);var oebyi9 = new a_gv0hx(),
              awr47p = tfj1c[tfj1c['length'] - 0x1]['currentNSMap'],
              ap47wr = a_ike(vnx2_g, b6yie$, oebyi9, awr47p, lcd5ms, j73f1),
              f4jt73 = oebyi9['length'];if (!oebyi9['closed'] && a_h80_k(vnx2_g, ap47wr, oebyi9['tagName'], ct5) && (oebyi9['closed'] = !0x0, v_2nxg['nbsp'] || j73f1['warning']('unclosed xml attribute')), ie$by6 && f4jt73) {
            for (var ib9e = a_e6y$ib(ie$by6, {}), _0vgx2 = 0x0; f4jt73 > _0vgx2; _0vgx2++) {
              var $biy = oebyi9[_0vgx2];oiyzb($biy['offset']), $biy['locator'] = a_e6y$ib(ie$by6, {});
            }h86e$k['locator'] = ib9e, a_ib$eo(oebyi9, h86e$k, awr47p) && tfj1c['push'](oebyi9), h86e$k['locator'] = ie$by6;
          } else a_ib$eo(oebyi9, h86e$k, awr47p) && tfj1c['push'](oebyi9);'http://www.w3.org/1999/xhtml' !== oebyi9['uri'] || oebyi9['closed'] ? ap47wr++ : ap47wr = a_npwa4r(vnx2_g, ap47wr, oebyi9['tagName'], lcd5ms, h86e$k);}
    } catch (bo9zyi) {
      j73f1['error']('element parse error: ' + bo9zyi), ap47wr = -0x1;
    }ap47wr > cj5ts ? cj5ts = ap47wr : gk6(Math['max'](b6yie$, cj5ts) + 0x1);
  }
}function a_e6y$ib(x2gv_n, vxgh) {
  return vxgh['lineNumber'] = x2gv_n['lineNumber'], vxgh['columnNumber'] = x2gv_n['columnNumber'], vxgh;
}function a_ike(ms1dc5, f1sj, cdml, f3ja7, c1tsj, _gvx) {
  for (var wpnr2x, qb9zyo, k60g = ++f1sj, vx2n_g = a__v2xr;;) {
    var ar47pw = ms1dc5['charAt'](k60g);switch (ar47pw) {case '=':
        if (vx2n_g === a_f7t4) wpnr2x = ms1dc5['slice'](f1sj, k60g), vx2n_g = a_tfj317;else {
          if (vx2n_g !== a_e9boi) throw new Error('attribute equal must after attrName');vx2n_g = a_tfj317;
        }break;case '\x27':case '\x22':
        if (vx2n_g === a_tfj317 || vx2n_g === a_f7t4) {
          if (vx2n_g === a_f7t4 && (_gvx['warning']('attribute value must after "="'), wpnr2x = ms1dc5['slice'](f1sj, k60g)), f1sj = k60g + 0x1, k60g = ms1dc5['indexOf'](ar47pw, f1sj), !(k60g > 0x0)) throw new Error('attribute value no end \'' + ar47pw + '\' match');qb9zyo = ms1dc5['slice'](f1sj, k60g)['replace'](/&#?\w+;/g, c1tsj), cdml['add'](wpnr2x, qb9zyo, f1sj - 0x1), vx2n_g = a_m5l;
        } else {
          if (vx2n_g != a_eboiy$) throw new Error('attribute value must after "="');qb9zyo = ms1dc5['slice'](f1sj, k60g)['replace'](/&#?\w+;/g, c1tsj), cdml['add'](wpnr2x, qb9zyo, f1sj), _gvx['warning']('attribute "' + wpnr2x + '" missed start quot(' + ar47pw + ')!!'), f1sj = k60g + 0x1, vx2n_g = a_m5l;
        }break;case '/':
        switch (vx2n_g) {case a__v2xr:
            cdml['setTagName'](ms1dc5['slice'](f1sj, k60g));case a_m5l:case a_jftc1:case a_a4p37f:
            vx2n_g = a_a4p37f, cdml['closed'] = !0x0;case a_eboiy$:case a_f7t4:case a_e9boi:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _gvx['error']('unexpected end of input'), vx2n_g == a__v2xr && cdml['setTagName'](ms1dc5['slice'](f1sj, k60g)), k60g;case '>':
        switch (vx2n_g) {case a__v2xr:
            cdml['setTagName'](ms1dc5['slice'](f1sj, k60g));case a_m5l:case a_jftc1:case a_a4p37f:
            break;case a_eboiy$:case a_f7t4:
            qb9zyo = ms1dc5['slice'](f1sj, k60g), '/' === qb9zyo['slice'](-0x1) && (cdml['closed'] = !0x0, qb9zyo = qb9zyo['slice'](0x0, -0x1));case a_e9boi:
            vx2n_g === a_e9boi && (qb9zyo = wpnr2x), vx2n_g == a_eboiy$ ? (_gvx['warning']('attribute "' + qb9zyo + '" missed quot(")!!'), cdml['add'](wpnr2x, qb9zyo['replace'](/&#?\w+;/g, c1tsj), f1sj)) : ('http://www.w3.org/1999/xhtml' === f3ja7[''] && qb9zyo['match'](/^(?:disabled|checked|selected)$/i) || _gvx['warning']('attribute "' + qb9zyo + '" missed value!! "' + qb9zyo + '" instead!!'), cdml['add'](qb9zyo, qb9zyo, f1sj));break;case a_tfj317:
            throw new Error('attribute value missed!!');}return k60g;case '\u0080':
        ar47pw = '\x20';default:
        if ('\x20' >= ar47pw) switch (vx2n_g) {case a__v2xr:
            cdml['setTagName'](ms1dc5['slice'](f1sj, k60g)), vx2n_g = a_jftc1;break;case a_f7t4:
            wpnr2x = ms1dc5['slice'](f1sj, k60g), vx2n_g = a_e9boi;break;case a_eboiy$:
            var qb9zyo = ms1dc5['slice'](f1sj, k60g)['replace'](/&#?\w+;/g, c1tsj);_gvx['warning']('attribute "' + qb9zyo + '" missed quot(")!!'), cdml['add'](wpnr2x, qb9zyo, f1sj);case a_m5l:
            vx2n_g = a_jftc1;} else switch (vx2n_g) {case a_e9boi:
            {
              cdml['tagName'];
            }'http://www.w3.org/1999/xhtml' === f3ja7[''] && wpnr2x['match'](/^(?:disabled|checked|selected)$/i) || _gvx['warning']('attribute "' + wpnr2x + '" missed value!! "' + wpnr2x + '" instead2!!'), cdml['add'](wpnr2x, wpnr2x, f1sj), f1sj = k60g, vx2n_g = a_f7t4;break;case a_m5l:
            _gvx['warning']('attribute space is required"' + wpnr2x + '\x22!!');case a_jftc1:
            vx2n_g = a_f7t4, f1sj = k60g;break;case a_tfj317:
            vx2n_g = a_eboiy$, f1sj = k60g;break;case a_a4p37f:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}k60g++;
  }
}function a_ib$eo(wrn2vx, f3t47, e9yibo) {
  for (var cds = wrn2vx['tagName'], n2xgv = null, pwar4n = wrn2vx['length']; pwar4n--;) {
    var hxvg0_ = wrn2vx[pwar4n],
        t71fj3 = hxvg0_['qName'],
        npwa2r = hxvg0_['value'],
        g0h_8k = t71fj3['indexOf'](':');if (g0h_8k > 0x0) var sft3j = hxvg0_['prefix'] = t71fj3['slice'](0x0, g0h_8k),
        ie6y = t71fj3['slice'](g0h_8k + 0x1),
        boizy = 'xmlns' === sft3j && ie6y;else ie6y = t71fj3, sft3j = null, boizy = 'xmlns' === t71fj3 && '';hxvg0_['localName'] = ie6y, boizy !== !0x1 && (null == n2xgv && (n2xgv = {}, a_gnx(e9yibo, e9yibo = {})), e9yibo[boizy] = n2xgv[boizy] = npwa2r, hxvg0_['uri'] = 'http://www.w3.org/2000/xmlns/', f3t47['startPrefixMapping'](boizy, npwa2r));
  }for (var pwar4n = wrn2vx['length']; pwar4n--;) {
    hxvg0_ = wrn2vx[pwar4n];var sft3j = hxvg0_['prefix'];sft3j && ('xml' === sft3j && (hxvg0_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== sft3j && (hxvg0_['uri'] = e9yibo[sft3j || '']));
  }var g0h_8k = cds['indexOf'](':');g0h_8k > 0x0 ? (sft3j = wrn2vx['prefix'] = cds['slice'](0x0, g0h_8k), ie6y = wrn2vx['localName'] = cds['slice'](g0h_8k + 0x1)) : (sft3j = null, ie6y = wrn2vx['localName'] = cds);var jts51c = wrn2vx['uri'] = e9yibo[sft3j || ''];if (f3t47['startElement'](jts51c, ie6y, cds, wrn2vx), !wrn2vx['closed']) return wrn2vx['currentNSMap'] = e9yibo, wrn2vx['localNSMap'] = n2xgv, !0x0;if (f3t47['endElement'](jts51c, ie6y, cds), n2xgv) {
    for (sft3j in n2xgv) f3t47['endPrefixMapping'](sft3j);
  }
}function a_npwa4r(wrpx2, $ie6k8, wnpxr, zy9bio, k8gh_0) {
  if (/^(?:script|textarea)$/i['test'](wnpxr)) {
    var bzoy9q = wrpx2['indexOf']('</' + wnpxr + '>', $ie6k8),
        smc5l = wrpx2['substring']($ie6k8 + 0x1, bzoy9q);if (/[&<]/['test'](smc5l)) return (/^script$/i['test'](wnpxr) ? (k8gh_0['characters'](smc5l, 0x0, smc5l['length']), bzoy9q) : (smc5l = smc5l['replace'](/&#?\w+;/g, zy9bio), k8gh_0['characters'](smc5l, 0x0, smc5l['length']), bzoy9q)
    );
  }return $ie6k8 + 0x1;
}function a_h80_k($h8e6k, _0xg2, t3sf1j, $ie6yb) {
  var jst = $ie6yb[t3sf1j];return null == jst && (jst = $h8e6k['lastIndexOf']('</' + t3sf1j + '>'), _0xg2 > jst && (jst = $h8e6k['lastIndexOf']('</' + t3sf1j)), $ie6yb[t3sf1j] = jst), _0xg2 > jst;
}function a_gnx(f43a7j, ft3js1) {
  for (var k_0 in f43a7j) ft3js1[k_0] = f43a7j[k_0];
}function a_$ie6k(wra7p, y9oqz, wa2prn, $ey6i) {
  var g0k86h = wra7p['charAt'](y9oqz + 0x2);switch (g0k86h) {case '-':
      if ('-' === wra7p['charAt'](y9oqz + 0x3)) {
        var g0h68 = wra7p['indexOf']('-->', y9oqz + 0x4);return g0h68 > y9oqz ? (wa2prn['comment'](wra7p, y9oqz + 0x4, g0h68 - y9oqz - 0x4), g0h68 + 0x3) : ($ey6i['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == wra7p['substr'](y9oqz + 0x3, 0x6)) {
        var g0h68 = wra7p['indexOf'](']]>', y9oqz + 0x9);return wa2prn['startCDATA'](), wa2prn['characters'](wra7p, y9oqz + 0x9, g0h68 - y9oqz - 0x9), wa2prn['endCDATA'](), g0h68 + 0x3;
      }var iky6e$ = a_ng_v2(wra7p, y9oqz),
          he6k = iky6e$['length'];if (he6k > 0x1 && /!doctype/i['test'](iky6e$[0x0][0x0])) {
        var p4awr7 = iky6e$[0x1][0x0],
            c1tj5s = he6k > 0x3 && /^public$/i['test'](iky6e$[0x2][0x0]) && iky6e$[0x3][0x0],
            j3fa7 = he6k > 0x4 && iky6e$[0x4][0x0],
            _xr2 = iky6e$[he6k - 0x1];return wa2prn['startDTD'](p4awr7, c1tj5s && c1tj5s['replace'](/^(['"])(.*?)\1$/, '$2'), j3fa7 && j3fa7['replace'](/^(['"])(.*?)\1$/, '$2')), wa2prn['endDTD'](), _xr2['index'] + _xr2[0x0]['length'];
      }}return -0x1;
}function a_h$e6k(ra74, i$k86, f1t37j) {
  var nw4pra = ra74['indexOf']('?>', i$k86);if (nw4pra) {
    var p4rw7a = ra74['substring'](i$k86, nw4pra)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (p4rw7a) {
      {
        p4rw7a[0x0]['length'];
      }return f1t37j['processingInstruction'](p4rw7a[0x1], p4rw7a[0x2]), nw4pra + 0x2;
    }return -0x1;
  }return -0x1;
}function a_gv0hx() {}function a_xn2rpw(o$y, m5sc1) {
  return o$y['__proto__'] = m5sc1, o$y;
}function a_ng_v2(hk$e, k6e8i) {
  var $b6,
      wpar47 = [],
      oiybe$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (oiybe$['lastIndex'] = k6e8i, oiybe$['exec'](hk$e); $b6 = oiybe$['exec'](hk$e);) if (wpar47['push']($b6), $b6[0x1]) return wpar47;
}var a_gx0_hv = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_k608$h = new RegExp('[\\-\\.0-9' + a_gx0_hv['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_pnr2 = new RegExp('^' + a_gx0_hv['source'] + a_k608$h['source'] + '*(?::' + a_gx0_hv['source'] + a_k608$h['source'] + '*)?$'),
    a__v2xr = 0x0,
    a_f7t4 = 0x1,
    a_e9boi = 0x2,
    a_tfj317 = 0x3,
    a_eboiy$ = 0x4,
    a_m5l = 0x5,
    a_jftc1 = 0x6,
    a_a4p37f = 0x7;a_csdt['prototype'] = { 'parse': function ($hk086, js5, c5dst) {
    var s3jft = this['domBuilder'];s3jft['startDocument'](), a_gnx(js5, js5 = {}), a_h_g8k($hk086, js5, c5dst, s3jft, this['errorHandler']), s3jft['endDocument']();
  } }, a_gv0hx['prototype'] = { 'setTagName': function (ar7pw) {
    if (!a_pnr2['test'](ar7pw)) throw new Error('invalid tagName:' + ar7pw);this['tagName'] = ar7pw;
  }, 'add': function ($y6kei, yeb$i6, msdlc5) {
    if (!a_pnr2['test']($y6kei)) throw new Error('invalid attribute:' + $y6kei);this[this['length']++] = { 'qName': $y6kei, 'value': yeb$i6, 'offset': msdlc5 };
  }, 'length': 0x0, 'getLocalName': function (by9zoq) {
    return this[by9zoq]['localName'];
  }, 'getLocator': function (ts5j1) {
    return this[ts5j1]['locator'];
  }, 'getQName': function (yo9bq) {
    return this[yo9bq]['qName'];
  }, 'getURI': function (rv2xw) {
    return this[rv2xw]['uri'];
  }, 'getValue': function (dcs51) {
    return this[dcs51]['value'];
  } }, a_xn2rpw({}, a_xn2rpw['prototype']) instanceof a_xn2rpw || (a_xn2rpw = function (tcjs1, x0hg) {
  function np2xw() {}np2xw['prototype'] = x0hg, np2xw = new np2xw();for (x0hg in tcjs1) np2xw[x0hg] = tcjs1[x0hg];return np2xw;
}), exports['XMLReader'] = a_csdt;