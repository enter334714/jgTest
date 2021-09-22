var p = wx.$h;
function a_ctbs() {}function a__dgr5y(ce, nqhw8, jrg_xy, kj4$2e, erjg$x) {
  function y_g5r(wonvm) {
    var dygx_ = wonvm['slice'](0x1, -0x1);return dygx_ in jrg_xy ? jrg_xy[dygx_] : '#' === dygx_['charAt'](0x0) ? 0xffff < (dygx_ = parseInt(dygx_['substr'](0x1)['replace']('x', '0x'))) ? (dygx_ -= 0x10000, String['fromCharCode'](0xd800 + (dygx_ >> 0xa), 0xdc00 + (0x3ff & dygx_))) : String['fromCharCode'](dygx_) : (erjg$x['error']('entity not found:' + wonvm), wonvm);
  }function wfqhi(fhi8q) {
    var stc7b4;jkx$2e < fhi8q && (stc7b4 = ce['substring'](jkx$2e, fhi8q)['replace'](/&#?\w+;/g, y_g5r), hfqn && $c4s2k(jkx$2e), kj4$2e['characters'](stc7b4, 0x0, fhi8q - jkx$2e), jkx$2e = fhi8q);
  }function $c4s2k(_dg35, oa09m) {
    for (; egjrx_ <= _dg35 && (oa09m = _dxygr['exec'](ce));) gj_y = oa09m['index'], egjrx_ = gj_y + oa09m[0x0]['length'], hfqn['lineNumber']++;hfqn['columnNumber'] = _dg35 - gj_y + 0x1;
  }for (var gj_y = 0x0, egjrx_ = 0x0, _dxygr = /.*(?:\r\n?|\n)|.*$/g, hfqn = kj4$2e['locator'], yjxgr = [{ 'currentNSMap': nqhw8 }], x_gryd = {}, jkx$2e = 0x0;;) {
    try {
      var dy_r5g = ce['indexOf']('<', jkx$2e),
          wqn1om,
          mq1n8;if (dy_r5g < 0x0) return void (ce['substr'](jkx$2e)['match'](/^\s*$/) || (mq1n8 = (wqn1om = kj4$2e['doc'])['createTextNode'](ce['substr'](jkx$2e)), wqn1om['appendChild'](mq1n8), kj4$2e['currentElement'] = mq1n8));switch (jkx$2e < dy_r5g && wfqhi(dy_r5g), ce['charAt'](dy_r5g + 0x1)) {case '/':
          var az6tl9 = ce['indexOf']('>', dy_r5g + 0x3),
              wo1qm = ce['substring'](dy_r5g + 0x2, az6tl9),
              zvla0 = yjxgr['pop']();az6tl9 < 0x0 ? (wo1qm = ce['substring'](dy_r5g + 0x2)['replace'](/[\s<].*/, ''), erjg$x['error']('end tag name: ' + wo1qm + ' is not complete:' + zvla0['tagName']), az6tl9 = dy_r5g + 0x1 + wo1qm['length']) : wo1qm['match'](/\s</) && (wo1qm = wo1qm['replace'](/[\s<].*/, ''), erjg$x['error']('end tag name: ' + wo1qm + ' maybe not complete'), az6tl9 = dy_r5g + 0x1 + wo1qm['length']);var c$ks24 = zvla0['localNSMap'],
              _rjygx = zvla0['tagName'] == wo1qm;if (_rjygx || zvla0['tagName'] && zvla0['tagName']['toLowerCase']() == wo1qm['toLowerCase']()) {
            if (kj4$2e['endElement'](zvla0['uri'], zvla0['localName'], wo1qm), c$ks24) {
              for (var $xgj in c$ks24) kj4$2e['endPrefixMapping']($xgj);
            }_rjygx || erjg$x['fatalError']('end tag name: ' + wo1qm + ' is not match the current start tagName:' + zvla0['tagName']);
          } else yjxgr['push'](zvla0);az6tl9++;break;case '?':
          hfqn && $c4s2k(dy_r5g), az6tl9 = a_l6z9tb(ce, dy_r5g, kj4$2e);break;case '!':
          hfqn && $c4s2k(dy_r5g), az6tl9 = a_z9vl(ce, dy_r5g, kj4$2e, erjg$x);break;default:
          hfqn && $c4s2k(dy_r5g);var l69az = new a_fq1w8n(),
              dg_ = yjxgr[yjxgr['length'] - 0x1]['currentNSMap'],
              az6tl9 = a_f1wq(ce, dy_r5g, l69az, dg_, y_g5r, erjg$x),
              k47sc2 = l69az['length'];if (!l69az['closed'] && a_gjy_x(ce, az6tl9, l69az['tagName'], x_gryd) && (l69az['closed'] = !0x0, jrg_xy['nbsp'] || erjg$x['warning']('unclosed xml attribute')), hfqn && k47sc2) {
            for (var z67blt = a_$xjr2(hfqn, {}), nwqf18 = 0x0; nwqf18 < k47sc2; nwqf18++) {
              var nm1o0 = l69az[nwqf18];$c4s2k(nm1o0['offset']), nm1o0['locator'] = a_$xjr2(hfqn, {});
            }kj4$2e['locator'] = z67blt, a_s7l6tb(l69az, kj4$2e, dg_) && yjxgr['push'](l69az), kj4$2e['locator'] = hfqn;
          } else a_s7l6tb(l69az, kj4$2e, dg_) && yjxgr['push'](l69az);'http://www.w3.org/1999/xhtml' !== l69az['uri'] || l69az['closed'] ? az6tl9++ : az6tl9 = a_kj$e2(ce, az6tl9, l69az['tagName'], y_g5r, kj4$2e);}
    } catch (tb7c6) {
      erjg$x['error']('element parse error: ' + tb7c6), az6tl9 = -0x1;
    }jkx$2e < az6tl9 ? jkx$2e = az6tl9 : wfqhi(Math['max'](dy_r5g, jkx$2e) + 0x1);
  }
}function a_$xjr2(oavm01, am0ov) {
  return am0ov['lineNumber'] = oavm01['lineNumber'], am0ov['columnNumber'] = oavm01['columnNumber'], am0ov;
}function a_f1wq(ma10, av9o, erxj_g, z67btl, c4sb7t, ygr5_d) {
  for (var b6cs, _yr5d = ++av9o, hqwnf = a__dyrg5;;) {
    var r_dyxg = ma10['charAt'](_yr5d);switch (r_dyxg) {case '=':
        if (hqwnf === a_ygrxd) b6cs = ma10['slice'](av9o, _yr5d), hqwnf = a_r$gxje;else {
          if (hqwnf !== a_ltza69) throw new Error('attribute equal must after attrName');hqwnf = a_r$gxje;
        }break;case '\x27':case '\x22':
        if (hqwnf === a_r$gxje || hqwnf === a_ygrxd) {
          if (hqwnf === a_ygrxd && (ygr5_d['warning']('attribute value must after "="'), b6cs = ma10['slice'](av9o, _yr5d)), !(0x0 < (_yr5d = ma10['indexOf'](r_dyxg, av9o = _yr5d + 0x1)))) throw new Error('attribute value no end \'' + r_dyxg + '\' match');yrdg_x = ma10['slice'](av9o, _yr5d)['replace'](/&#?\w+;/g, c4sb7t), erxj_g['add'](b6cs, yrdg_x, av9o - 0x1), hqwnf = a_t69b;
        } else {
          if (hqwnf != a_mqnwo) throw new Error('attribute value must after "="');yrdg_x = ma10['slice'](av9o, _yr5d)['replace'](/&#?\w+;/g, c4sb7t), erxj_g['add'](b6cs, yrdg_x, av9o), ygr5_d['warning']('attribute "' + b6cs + '" missed start quot(' + r_dyxg + ')!!'), av9o = _yr5d + 0x1, hqwnf = a_t69b;
        }break;case '/':
        switch (hqwnf) {case a__dyrg5:
            erxj_g['setTagName'](ma10['slice'](av9o, _yr5d));case a_t69b:case a_jxe$2k:case a_ovm9a:
            hqwnf = a_ovm9a, erxj_g['closed'] = !0x0;case a_mqnwo:case a_ygrxd:case a_ltza69:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ygr5_d['error']('unexpected end of input'), hqwnf == a__dyrg5 && erxj_g['setTagName'](ma10['slice'](av9o, _yr5d)), _yr5d;case '>':
        switch (hqwnf) {case a__dyrg5:
            erxj_g['setTagName'](ma10['slice'](av9o, _yr5d));case a_t69b:case a_jxe$2k:case a_ovm9a:
            break;case a_mqnwo:case a_ygrxd:
            '/' === (yrdg_x = ma10['slice'](av9o, _yr5d))['slice'](-0x1) && (erxj_g['closed'] = !0x0, yrdg_x = yrdg_x['slice'](0x0, -0x1));case a_ltza69:
            hqwnf === a_ltza69 && (yrdg_x = b6cs), hqwnf == a_mqnwo ? (ygr5_d['warning']('attribute "' + yrdg_x + '" missed quot(")!!'), erxj_g['add'](b6cs, yrdg_x['replace'](/&#?\w+;/g, c4sb7t), av9o)) : ('http://www.w3.org/1999/xhtml' === z67btl[''] && yrdg_x['match'](/^(?:disabled|checked|selected)$/i) || ygr5_d['warning']('attribute "' + yrdg_x + '" missed value!! "' + yrdg_x + '" instead!!'), erxj_g['add'](yrdg_x, yrdg_x, av9o));break;case a_r$gxje:
            throw new Error('attribute value missed!!');}return _yr5d;case '\u0080':
        r_dyxg = '\x20';default:
        if (r_dyxg <= '\x20') switch (hqwnf) {case a__dyrg5:
            erxj_g['setTagName'](ma10['slice'](av9o, _yr5d)), hqwnf = a_jxe$2k;break;case a_ygrxd:
            b6cs = ma10['slice'](av9o, _yr5d), hqwnf = a_ltza69;break;case a_mqnwo:
            var yrdg_x = ma10['slice'](av9o, _yr5d)['replace'](/&#?\w+;/g, c4sb7t);ygr5_d['warning']('attribute "' + yrdg_x + '" missed quot(")!!'), erxj_g['add'](b6cs, yrdg_x, av9o);case a_t69b:
            hqwnf = a_jxe$2k;} else switch (hqwnf) {case a_ltza69:
            erxj_g['tagName'], 'http://www.w3.org/1999/xhtml' === z67btl[''] && b6cs['match'](/^(?:disabled|checked|selected)$/i) || ygr5_d['warning']('attribute "' + b6cs + '" missed value!! "' + b6cs + '" instead2!!'), erxj_g['add'](b6cs, b6cs, av9o), av9o = _yr5d, hqwnf = a_ygrxd;break;case a_t69b:
            ygr5_d['warning']('attribute space is required"' + b6cs + '\x22!!');case a_jxe$2k:
            hqwnf = a_ygrxd, av9o = _yr5d;break;case a_r$gxje:
            hqwnf = a_mqnwo, av9o = _yr5d;break;case a_ovm9a:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_yr5d++;
  }
}function a_s7l6tb(a0vmo1, _ygx, c4ek2) {
  for (var lt67bs = a0vmo1['tagName'], jek2$ = null, sc7tb = a0vmo1['length']; sc7tb--;) {
    var dgr5y = a0vmo1[sc7tb],
        gej = dgr5y['qName'],
        hwi = dgr5y['value'],
        t9zbl6;gej = 0x0 < (g$rxe = gej['indexOf'](':')) ? (xgje$ = dgr5y['prefix'] = gej['slice'](0x0, g$rxe), t9zbl6 = gej['slice'](g$rxe + 0x1), 'xmlns' === xgje$ && t9zbl6) : (xgje$ = null, 'xmlns' === (t9zbl6 = gej) && ''), dgr5y['localName'] = t9zbl6, !0x1 !== gej && (null == jek2$ && (jek2$ = {}, a_egj$rx(c4ek2, c4ek2 = {})), c4ek2[gej] = jek2$[gej] = hwi, dgr5y['uri'] = 'http://www.w3.org/2000/xmlns/', _ygx['startPrefixMapping'](gej, hwi));
  }for (sc7tb = a0vmo1['length']; sc7tb--;) (xgje$ = (dgr5y = a0vmo1[sc7tb])['prefix']) && ('xml' === xgje$ && (dgr5y['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xgje$ && (dgr5y['uri'] = c4ek2[xgje$ || '']));var g$rxe;t9zbl6 = 0x0 < (g$rxe = lt67bs['indexOf'](':')) ? (xgje$ = a0vmo1['prefix'] = lt67bs['slice'](0x0, g$rxe), a0vmo1['localName'] = lt67bs['slice'](g$rxe + 0x1)) : (xgje$ = null, a0vmo1['localName'] = lt67bs);var zlva = a0vmo1['uri'] = c4ek2[xgje$ || ''];if (_ygx['startElement'](zlva, t9zbl6, lt67bs, a0vmo1), !a0vmo1['closed']) return a0vmo1['currentNSMap'] = c4ek2, a0vmo1['localNSMap'] = jek2$, !0x0;if (_ygx['endElement'](zlva, t9zbl6, lt67bs), jek2$) {
    for (var xgje$ in jek2$) _ygx['endPrefixMapping'](xgje$);
  }
}function a_kj$e2(vm10, wnqhf8, tl69b, o1mw, e$j2x) {
  if (/^(?:script|textarea)$/i['test'](tl69b)) {
    var m1a0v = vm10['indexOf']('</' + tl69b + '>', wnqhf8),
        vm10 = vm10['substring'](wnqhf8 + 0x1, m1a0v);if (/[&<]/['test'](vm10)) return (/^script$/i['test'](tl69b) || (vm10 = vm10['replace'](/&#?\w+;/g, o1mw)), e$j2x['characters'](vm10, 0x0, vm10['length']), m1a0v
    );
  }return wnqhf8 + 0x1;
}function a_gjy_x(azv90, ct6b7, e$k4j2, $jge) {
  var _rxej = $jge[e$k4j2];return null == _rxej && ((_rxej = azv90['lastIndexOf']('</' + e$k4j2 + '>')) < ct6b7 && (_rxej = azv90['lastIndexOf']('</' + e$k4j2)), $jge[e$k4j2] = _rxej), _rxej < ct6b7;
}function a_egj$rx(amv0o, nh8f) {
  for (var q1m8 in amv0o) nh8f[q1m8] = amv0o[q1m8];
}function a_z9vl(xr2e$, b6tlz, j_grxe, jx2ek) {
  var x$gjer = xr2e$['charAt'](b6tlz + 0x2);if ('-' === x$gjer) return '-' !== xr2e$['charAt'](b6tlz + 0x3) ? -0x1 : b6tlz < (t76lz = xr2e$['indexOf']('-->', b6tlz + 0x4)) ? (j_grxe['comment'](xr2e$, b6tlz + 0x4, t76lz - b6tlz - 0x4), t76lz + 0x3) : (jx2ek['error']('Unclosed comment'), -0x1);if ('CDATA[' == xr2e$['substr'](b6tlz + 0x3, 0x6)) {
    var t76lz = xr2e$['indexOf'](']]>', b6tlz + 0x9);return j_grxe['startCDATA'](), j_grxe['characters'](xr2e$, b6tlz + 0x9, t76lz - b6tlz - 0x9), j_grxe['endCDATA'](), t76lz + 0x3;
  }x$gjer = a_kj4e(xr2e$, b6tlz), jx2ek = x$gjer['length'];if (0x1 < jx2ek && /!doctype/i['test'](x$gjer[0x0][0x0])) return t76lz = x$gjer[0x1][0x0], xr2e$ = 0x3 < jx2ek && /^public$/i['test'](x$gjer[0x2][0x0]) && x$gjer[0x3][0x0], b6tlz = 0x4 < jx2ek && x$gjer[0x4][0x0], jx2ek = x$gjer[jx2ek - 0x1], (j_grxe['startDTD'](t76lz, xr2e$ && xr2e$['replace'](/^(['"])(.*?)\1$/, '$2'), b6tlz && b6tlz['replace'](/^(['"])(.*?)\1$/, '$2')), j_grxe['endDTD'](), jx2ek['index'] + jx2ek[0x0]['length']);return -0x1;
}function a_l6z9tb(lz9bt6, voa1m, xyg_rd) {
  var mw1qn = lz9bt6['indexOf']('?>', voa1m);if (mw1qn) return voa1m = lz9bt6['substring'](voa1m, mw1qn)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), voa1m ? (voa1m[0x0]['length'], xyg_rd['processingInstruction'](voa1m[0x1], voa1m[0x2]), mw1qn + 0x2) : -0x1;return -0x1;
}function a_fq1w8n() {}function a_v0oaz9(vm01, dyrx_g) {
  return vm01['__proto__'] = dyrx_g, vm01;
}function a_kj4e(a0m1ov, n8w1qm) {
  var bst6c,
      m1owv = [],
      _rydgx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_rydgx['lastIndex'] = n8w1qm, _rydgx['exec'](a0m1ov); bst6c = _rydgx['exec'](a0m1ov);) if (m1owv['push'](bst6c), bst6c[0x1]) return m1owv;
}var a_xyrdg = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_a1ov0m = new RegExp('[\\-\\.0-9' + a_xyrdg['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_kx2j$ = new RegExp('^' + a_xyrdg['source'] + a_a1ov0m['source'] + '*(?::' + a_xyrdg['source'] + a_a1ov0m['source'] + '*)?$'),
    a__dyrg5 = 0x0,
    a_ygrxd = 0x1,
    a_ltza69 = 0x2,
    a_r$gxje = 0x3,
    a_mqnwo = 0x4,
    a_t69b = 0x5,
    a_jxe$2k = 0x6,
    a_ovm9a = 0x7;a_ctbs['prototype'] = { 'parse': function (kej2$, mo0av1, c76bs) {
    var qwo1mn = this['domBuilder'];qwo1mn['startDocument'](), a_egj$rx(mo0av1, mo0av1 = {}), a__dgr5y(kej2$, mo0av1, c76bs, qwo1mn, this['errorHandler']), qwo1mn['endDocument']();
  } }, a_fq1w8n['prototype'] = { 'setTagName': function (t4scb) {
    if (!a_kx2j$['test'](t4scb)) throw new Error('invalid tagName:' + t4scb);this['tagName'] = t4scb;
  }, 'add': function (w8qnf, bks74c, m1owqn) {
    if (!a_kx2j$['test'](w8qnf)) throw new Error('invalid attribute:' + w8qnf);this[this['length']++] = { 'qName': w8qnf, 'value': bks74c, 'offset': m1owqn };
  }, 'length': 0x0, 'getLocalName': function ($j2exk) {
    return this[$j2exk]['localName'];
  }, 'getLocator': function (yj_x) {
    return this[yj_x]['locator'];
  }, 'getQName': function (jke2$x) {
    return this[jke2$x]['qName'];
  }, 'getURI': function (n1mqw8) {
    return this[n1mqw8]['uri'];
  }, 'getValue': function (rx_ygd) {
    return this[rx_ygd]['value'];
  } }, a_v0oaz9({}, a_v0oaz9['prototype']) instanceof a_v0oaz9 || (a_v0oaz9 = function (xgd, sct76b) {
  function kj2e$4() {}for (sct76b in kj2e$4['prototype'] = sct76b, kj2e$4 = new kj2e$4(), xgd) kj2e$4[sct76b] = xgd[sct76b];return kj2e$4;
}), exports['XMLReader'] = a_ctbs;