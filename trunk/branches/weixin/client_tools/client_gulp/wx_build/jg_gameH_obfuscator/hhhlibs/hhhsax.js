var O = wx.$C;
function h_whj0dx() {}function h_drjh9z($u8rpc, as6i2y, gnvs, xq03, hdj0xw) {
  function lup5$(zd9rj8) {
    var z8u$r = zd9rj8['slice'](0x1, -0x1);return z8u$r in gnvs ? gnvs[z8u$r] : '#' === z8u$r['charAt'](0x0) ? 0xffff < (z8u$r = parseInt(z8u$r['substr'](0x1)['replace']('x', '0x'))) ? (z8u$r -= 0x10000, String['fromCharCode'](0xd800 + (z8u$r >> 0xa), 0xdc00 + (0x3ff & z8u$r))) : String['fromCharCode'](z8u$r) : (hdj0xw['error']('entity not found:' + zd9rj8), zd9rj8);
  }function nvsa_(zj9rd8) {
    var vng_s;a2s6iy < zj9rd8 && (vng_s = $u8rpc['substring'](a2s6iy, zj9rd8)['replace'](/&#?\w+;/g, lup5$), f43v1 && colpt(a2s6iy), xq03['characters'](vng_s, 0x0, zj9rd8 - a2s6iy), a2s6iy = zj9rd8);
  }function colpt(lc5t, fnsg_) {
    for (; xw170 <= lc5t && (fnsg_ = i6bya2['exec']($u8rpc));) pu8z$ = fnsg_['index'], xw170 = pu8z$ + fnsg_[0x0]['length'], f43v1['lineNumber']++;f43v1['columnNumber'] = lc5t - pu8z$ + 0x1;
  }for (var pu8z$ = 0x0, xw170 = 0x0, i6bya2 = /.*(?:\r\n?|\n)|.*$/g, f43v1 = xq03['locator'], dh9w0j = [{ 'currentNSMap': as6i2y }], louc = {}, a2s6iy = 0x0;;) {
    try {
      var avsy_n = $u8rpc['indexOf']('<', a2s6iy),
          qx0dw,
          sg;if (avsy_n < 0x0) return void ($u8rpc['substr'](a2s6iy)['match'](/^\s*$/) || (sg = (qx0dw = xq03['doc'])['createTextNode']($u8rpc['substr'](a2s6iy)), qx0dw['appendChild'](sg), xq03['currentElement'] = sg));switch (a2s6iy < avsy_n && nvsa_(avsy_n), $u8rpc['charAt'](avsy_n + 0x1)) {case '/':
          var hz9 = $u8rpc['indexOf']('>', avsy_n + 0x3),
              $r89uz = $u8rpc['substring'](avsy_n + 0x2, hz9),
              qwdh = dh9w0j['pop']();hz9 < 0x0 ? ($r89uz = $u8rpc['substring'](avsy_n + 0x2)['replace'](/[\s<].*/, ''), hdj0xw['error']('end tag name: ' + $r89uz + ' is not complete:' + qwdh['tagName']), hz9 = avsy_n + 0x1 + $r89uz['length']) : $r89uz['match'](/\s</) && ($r89uz = $r89uz['replace'](/[\s<].*/, ''), hdj0xw['error']('end tag name: ' + $r89uz + ' maybe not complete'), hz9 = avsy_n + 0x1 + $r89uz['length']);var rz$j98 = qwdh['localNSMap'],
              g4fv_ = qwdh['tagName'] == $r89uz;if (g4fv_ || qwdh['tagName'] && qwdh['tagName']['toLowerCase']() == $r89uz['toLowerCase']()) {
            if (xq03['endElement'](qwdh['uri'], qwdh['localName'], $r89uz), rz$j98) {
              for (var yv_asn in rz$j98) xq03['endPrefixMapping'](yv_asn);
            }g4fv_ || hdj0xw['fatalError']('end tag name: ' + $r89uz + ' is not match the current start tagName:' + qwdh['tagName']);
          } else dh9w0j['push'](qwdh);hz9++;break;case '?':
          f43v1 && colpt(avsy_n), hz9 = h_cmo5($u8rpc, avsy_n, xq03);break;case '!':
          f43v1 && colpt(avsy_n), hz9 = h_z9dr8($u8rpc, avsy_n, xq03, hdj0xw);break;default:
          f43v1 && colpt(avsy_n);var ya6_n = new h_cltm(),
              q317x4 = dh9w0j[dh9w0j['length'] - 0x1]['currentNSMap'],
              hz9 = h_up8r$z($u8rpc, avsy_n, ya6_n, q317x4, lup5$, hdj0xw),
              $ul8cp = ya6_n['length'];if (!ya6_n['closed'] && h__6ays($u8rpc, hz9, ya6_n['tagName'], louc) && (ya6_n['closed'] = !0x0, gnvs['nbsp'] || hdj0xw['warning']('unclosed xml attribute')), f43v1 && $ul8cp) {
            for (var v314gf = h_w9jzhd(f43v1, {}), ulc = 0x0; ulc < $ul8cp; ulc++) {
              var poct5 = ya6_n[ulc];colpt(poct5['offset']), poct5['locator'] = h_w9jzhd(f43v1, {});
            }xq03['locator'] = v314gf, h_jdhxw0(ya6_n, xq03, q317x4) && dh9w0j['push'](ya6_n), xq03['locator'] = f43v1;
          } else h_jdhxw0(ya6_n, xq03, q317x4) && dh9w0j['push'](ya6_n);'http://www.w3.org/1999/xhtml' !== ya6_n['uri'] || ya6_n['closed'] ? hz9++ : hz9 = h_n6as_y($u8rpc, hz9, ya6_n['tagName'], lup5$, xq03);}
    } catch (f_ngs) {
      hdj0xw['error']('element parse error: ' + f_ngs), hz9 = -0x1;
    }a2s6iy < hz9 ? a2s6iy = hz9 : nvsa_(Math['max'](avsy_n, a2s6iy) + 0x1);
  }
}function h_w9jzhd(d9jhr, _6a) {
  return _6a['lineNumber'] = d9jhr['lineNumber'], _6a['columnNumber'] = d9jhr['columnNumber'], _6a;
}function h_up8r$z(yn2as6, tcl5om, i6ys2a, $l8ucp, ulc5p$, g17f43) {
  for (var qxhd0, w1q70x = ++tcl5om, asn6y2 = h_$8zrj9;;) {
    var l$upc = yn2as6['charAt'](w1q70x);switch (l$upc) {case '=':
        if (asn6y2 === h_gn4_) qxhd0 = yn2as6['slice'](tcl5om, w1q70x), asn6y2 = h_a6syn2;else {
          if (asn6y2 !== h_wq0xd) throw new Error('attribute equal must after attrName');asn6y2 = h_a6syn2;
        }break;case '\x27':case '\x22':
        if (asn6y2 === h_a6syn2 || asn6y2 === h_gn4_) {
          if (asn6y2 === h_gn4_ && (g17f43['warning']('attribute value must after "="'), qxhd0 = yn2as6['slice'](tcl5om, w1q70x)), !(0x0 < (w1q70x = yn2as6['indexOf'](l$upc, tcl5om = w1q70x + 0x1)))) throw new Error('attribute value no end \'' + l$upc + '\' match');mct5l = yn2as6['slice'](tcl5om, w1q70x)['replace'](/&#?\w+;/g, ulc5p$), i6ys2a['add'](qxhd0, mct5l, tcl5om - 0x1), asn6y2 = h_y6s2i;
        } else {
          if (asn6y2 != h_rdz89j) throw new Error('attribute value must after "="');mct5l = yn2as6['slice'](tcl5om, w1q70x)['replace'](/&#?\w+;/g, ulc5p$), i6ys2a['add'](qxhd0, mct5l, tcl5om), g17f43['warning']('attribute "' + qxhd0 + '" missed start quot(' + l$upc + ')!!'), tcl5om = w1q70x + 0x1, asn6y2 = h_y6s2i;
        }break;case '/':
        switch (asn6y2) {case h_$8zrj9:
            i6ys2a['setTagName'](yn2as6['slice'](tcl5om, w1q70x));case h_y6s2i:case h_op5tl:case h_f_4g3:
            asn6y2 = h_f_4g3, i6ys2a['closed'] = !0x0;case h_rdz89j:case h_gn4_:case h_wq0xd:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return g17f43['error']('unexpected end of input'), asn6y2 == h_$8zrj9 && i6ys2a['setTagName'](yn2as6['slice'](tcl5om, w1q70x)), w1q70x;case '>':
        switch (asn6y2) {case h_$8zrj9:
            i6ys2a['setTagName'](yn2as6['slice'](tcl5om, w1q70x));case h_y6s2i:case h_op5tl:case h_f_4g3:
            break;case h_rdz89j:case h_gn4_:
            '/' === (mct5l = yn2as6['slice'](tcl5om, w1q70x))['slice'](-0x1) && (i6ys2a['closed'] = !0x0, mct5l = mct5l['slice'](0x0, -0x1));case h_wq0xd:
            asn6y2 === h_wq0xd && (mct5l = qxhd0), asn6y2 == h_rdz89j ? (g17f43['warning']('attribute "' + mct5l + '" missed quot(")!!'), i6ys2a['add'](qxhd0, mct5l['replace'](/&#?\w+;/g, ulc5p$), tcl5om)) : ('http://www.w3.org/1999/xhtml' === $l8ucp[''] && mct5l['match'](/^(?:disabled|checked|selected)$/i) || g17f43['warning']('attribute "' + mct5l + '" missed value!! "' + mct5l + '" instead!!'), i6ys2a['add'](mct5l, mct5l, tcl5om));break;case h_a6syn2:
            throw new Error('attribute value missed!!');}return w1q70x;case '\u0080':
        l$upc = '\x20';default:
        if (l$upc <= '\x20') switch (asn6y2) {case h_$8zrj9:
            i6ys2a['setTagName'](yn2as6['slice'](tcl5om, w1q70x)), asn6y2 = h_op5tl;break;case h_gn4_:
            qxhd0 = yn2as6['slice'](tcl5om, w1q70x), asn6y2 = h_wq0xd;break;case h_rdz89j:
            var mct5l = yn2as6['slice'](tcl5om, w1q70x)['replace'](/&#?\w+;/g, ulc5p$);g17f43['warning']('attribute "' + mct5l + '" missed quot(")!!'), i6ys2a['add'](qxhd0, mct5l, tcl5om);case h_y6s2i:
            asn6y2 = h_op5tl;} else switch (asn6y2) {case h_wq0xd:
            i6ys2a['tagName'], 'http://www.w3.org/1999/xhtml' === $l8ucp[''] && qxhd0['match'](/^(?:disabled|checked|selected)$/i) || g17f43['warning']('attribute "' + qxhd0 + '" missed value!! "' + qxhd0 + '" instead2!!'), i6ys2a['add'](qxhd0, qxhd0, tcl5om), tcl5om = w1q70x, asn6y2 = h_gn4_;break;case h_y6s2i:
            g17f43['warning']('attribute space is required"' + qxhd0 + '\x22!!');case h_op5tl:
            asn6y2 = h_gn4_, tcl5om = w1q70x;break;case h_a6syn2:
            asn6y2 = h_rdz89j, tcl5om = w1q70x;break;case h_f_4g3:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}w1q70x++;
  }
}function h_jdhxw0(pclou5, dw9hj, $8r9z) {
  for (var $8uzp = pclou5['tagName'], x17wq0 = null, y62as = pclou5['length']; y62as--;) {
    var _ys6an = pclou5[y62as],
        k5tm = _ys6an['qName'],
        j9dr8 = _ys6an['value'],
        a_6ysn;k5tm = 0x0 < (drz89 = k5tm['indexOf'](':')) ? ($plcu = _ys6an['prefix'] = k5tm['slice'](0x0, drz89), a_6ysn = k5tm['slice'](drz89 + 0x1), 'xmlns' === $plcu && a_6ysn) : ($plcu = null, 'xmlns' === (a_6ysn = k5tm) && ''), _ys6an['localName'] = a_6ysn, !0x1 !== k5tm && (null == x17wq0 && (x17wq0 = {}, h_clu8($8r9z, $8r9z = {})), $8r9z[k5tm] = x17wq0[k5tm] = j9dr8, _ys6an['uri'] = 'http://www.w3.org/2000/xmlns/', dw9hj['startPrefixMapping'](k5tm, j9dr8));
  }for (y62as = pclou5['length']; y62as--;) ($plcu = (_ys6an = pclou5[y62as])['prefix']) && ('xml' === $plcu && (_ys6an['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $plcu && (_ys6an['uri'] = $8r9z[$plcu || '']));var drz89;a_6ysn = 0x0 < (drz89 = $8uzp['indexOf'](':')) ? ($plcu = pclou5['prefix'] = $8uzp['slice'](0x0, drz89), pclou5['localName'] = $8uzp['slice'](drz89 + 0x1)) : ($plcu = null, pclou5['localName'] = $8uzp);var whdj = pclou5['uri'] = $8r9z[$plcu || ''];if (dw9hj['startElement'](whdj, a_6ysn, $8uzp, pclou5), !pclou5['closed']) return pclou5['currentNSMap'] = $8r9z, pclou5['localNSMap'] = x17wq0, !0x0;if (dw9hj['endElement'](whdj, a_6ysn, $8uzp), x17wq0) {
    for (var $plcu in x17wq0) dw9hj['endPrefixMapping']($plcu);
  }
}function h_n6as_y(q41, zwdh9j, a6iy2b, uc8p, iy2as6) {
  if (/^(?:script|textarea)$/i['test'](a6iy2b)) {
    var ru$c8p = q41['indexOf']('</' + a6iy2b + '>', zwdh9j),
        q41 = q41['substring'](zwdh9j + 0x1, ru$c8p);if (/[&<]/['test'](q41)) return (/^script$/i['test'](a6iy2b) || (q41 = q41['replace'](/&#?\w+;/g, uc8p)), iy2as6['characters'](q41, 0x0, q41['length']), ru$c8p
    );
  }return zwdh9j + 0x1;
}function h__6ays(plc8u$, isa62y, fq3, xq4731) {
  var r8$pcu = xq4731[fq3];return null == r8$pcu && ((r8$pcu = plc8u$['lastIndexOf']('</' + fq3 + '>')) < isa62y && (r8$pcu = plc8u$['lastIndexOf']('</' + fq3)), xq4731[fq3] = r8$pcu), r8$pcu < isa62y;
}function h_clu8(q741f3, f_vngs) {
  for (var rjdz89 in q741f3) f_vngs[rjdz89] = q741f3[rjdz89];
}function h_z9dr8(u9r8z, cmlot5, vynas, $8ucrp) {
  var rz8$9j = u9r8z['charAt'](cmlot5 + 0x2);if ('-' === rz8$9j) return '-' !== u9r8z['charAt'](cmlot5 + 0x3) ? -0x1 : cmlot5 < (f_snv = u9r8z['indexOf']('-->', cmlot5 + 0x4)) ? (vynas['comment'](u9r8z, cmlot5 + 0x4, f_snv - cmlot5 - 0x4), f_snv + 0x3) : ($8ucrp['error']('Unclosed comment'), -0x1);if ('CDATA[' == u9r8z['substr'](cmlot5 + 0x3, 0x6)) return f_snv = u9r8z['indexOf'](']]>', cmlot5 + 0x9), vynas['startCDATA'](), vynas['characters'](u9r8z, cmlot5 + 0x9, f_snv - cmlot5 - 0x9), vynas['endCDATA'](), f_snv + 0x3;rz8$9j = h_$9z8j(u9r8z, cmlot5), $8ucrp = rz8$9j['length'];var f_snv;return 0x1 < $8ucrp && /!doctype/i['test'](rz8$9j[0x0][0x0]) ? (f_snv = rz8$9j[0x1][0x0], u9r8z = 0x3 < $8ucrp && /^public$/i['test'](rz8$9j[0x2][0x0]) && rz8$9j[0x3][0x0], cmlot5 = 0x4 < $8ucrp && rz8$9j[0x4][0x0], rz8$9j = rz8$9j[$8ucrp - 0x1], vynas['startDTD'](f_snv, u9r8z && u9r8z['replace'](/^(['"])(.*?)\1$/, '$2'), cmlot5 && cmlot5['replace'](/^(['"])(.*?)\1$/, '$2')), vynas['endDTD'](), rz8$9j['index'] + rz8$9j[0x0]['length']) : -0x1;
}function h_cmo5(o5lpt, c8pl$, n4_fv) {
  var fn_sg = o5lpt['indexOf']('?>', c8pl$);return fn_sg && (o5lpt = o5lpt['substring'](c8pl$, fn_sg)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (o5lpt[0x0]['length'], n4_fv['processingInstruction'](o5lpt[0x1], o5lpt[0x2]), fn_sg + 0x2) : -0x1;
}function h_cltm() {}function h_$curp8(_nvf, wdzhj9) {
  return _nvf['__proto__'] = wdzhj9, _nvf;
}function h_$9z8j(g41vf3, sngfv) {
  var lk5om,
      djhw0x = [],
      wqd = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (wqd['lastIndex'] = sngfv, wqd['exec'](g41vf3); lk5om = wqd['exec'](g41vf3);) if (djhw0x['push'](lk5om), lk5om[0x1]) return djhw0x;
}var h_$jz8r9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_qwdx0 = new RegExp('[\\-\\.0-9' + h_$jz8r9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h__gv43f = new RegExp('^' + h_$jz8r9['source'] + h_qwdx0['source'] + '*(?::' + h_$jz8r9['source'] + h_qwdx0['source'] + '*)?$'),
    h_$8zrj9 = 0x0,
    h_gn4_ = 0x1,
    h_wq0xd = 0x2,
    h_a6syn2 = 0x3,
    h_rdz89j = 0x4,
    h_y6s2i = 0x5,
    h_op5tl = 0x6,
    h_f_4g3 = 0x7;h_whj0dx['prototype'] = { 'parse': function (nvs_fg, dr9h, vgf34_) {
    var zru9$ = this['domBuilder'];zru9$['startDocument'](), h_clu8(dr9h, dr9h = {}), h_drjh9z(nvs_fg, dr9h, vgf34_, zru9$, this['errorHandler']), zru9$['endDocument']();
  } }, h_cltm['prototype'] = { 'setTagName': function (xqw) {
    if (!h__gv43f['test'](xqw)) throw new Error('invalid tagName:' + xqw);this['tagName'] = xqw;
  }, 'add': function (plt5o, v4_n, jd0h) {
    if (!h__gv43f['test'](plt5o)) throw new Error('invalid attribute:' + plt5o);this[this['length']++] = { 'qName': plt5o, 'value': v4_n, 'offset': jd0h };
  }, 'length': 0x0, 'getLocalName': function (qx7413) {
    return this[qx7413]['localName'];
  }, 'getLocator': function (mkl5o) {
    return this[mkl5o]['locator'];
  }, 'getQName': function (p5cluo) {
    return this[p5cluo]['qName'];
  }, 'getURI': function (sn_vgf) {
    return this[sn_vgf]['uri'];
  }, 'getValue': function (_4fn) {
    return this[_4fn]['value'];
  } }, h_$curp8({}, h_$curp8['prototype']) instanceof h_$curp8 || (h_$curp8 = function (tclmo5, d8j9) {
  function xhdwj() {}for (d8j9 in xhdwj['prototype'] = d8j9, xhdwj = new xhdwj(), tclmo5) xhdwj[d8j9] = tclmo5[d8j9];return xhdwj;
}), exports['XMLReader'] = h_whj0dx;