var U = wx.$k;
function K1_k6ies() {}function K1_i6h(rgp53, ulaz$, o1wnbv, $alxdu, jh7ie) {
  function xwzbua(qvn1o0) {
    if (qvn1o0 > 0xffff) {
      qvn1o0 -= 0x10000;var itmj = 0xd800 + (qvn1o0 >> 0xa),
          p5gf = 0xdc00 + (0x3ff & qvn1o0);return String['fromCharCode'](itmj, p5gf);
    }return String['fromCharCode'](qvn1o0);
  }function rp_g53(i47mj) {
    var bwnvo1 = i47mj['slice'](0x1, -0x1);return bwnvo1 in o1wnbv ? o1wnbv[bwnvo1] : '#' === bwnvo1['charAt'](0x0) ? xwzbua(parseInt(bwnvo1['substr'](0x1)['replace']('x', '0x'))) : (jh7ie['error']('entity not found:' + i47mj), i47mj);
  }function he6sk(zbuaxw) {
    if (zbuaxw > hj7eit) {
      var dxlu = rgp53['substring'](hj7eit, zbuaxw)['replace'](/&#?\w+;/g, rp_g53);q018n && teih67(hj7eit), $alxdu['characters'](dxlu, 0x0, zbuaxw - hj7eit), hj7eit = zbuaxw;
    }
  }function teih67(lxuzb, hei6kt) {
    for (; lxuzb >= se6ih && (hei6kt = ikthe['exec'](rgp53));) o1vq = hei6kt['index'], se6ih = o1vq + hei6kt[0x0]['length'], q018n['lineNumber']++;q018n['columnNumber'] = lxuzb - o1vq + 0x1;
  }for (var o1vq = 0x0, se6ih = 0x0, ikthe = /.*(?:\r\n?|\n)|.*$/g, q018n = $alxdu['locator'], xua$lz = [{ 'currentNSMap': ulaz$ }], azox = {}, hj7eit = 0x0;;) {
    try {
      var mjeti = rgp53['indexOf']('<', hj7eit);if (0x0 > mjeti) {
        if (!rgp53['substr'](hj7eit)['match'](/^\s*$/)) {
          var f35pr = $alxdu['doc'],
              xwvob = f35pr['createTextNode'](rgp53['substr'](hj7eit));f35pr['appendChild'](xwvob), $alxdu['currentElement'] = xwvob;
        }return;
      }switch (mjeti > hj7eit && he6sk(mjeti), rgp53['charAt'](mjeti + 0x1)) {case '/':
          var q108vn = rgp53['indexOf']('>', mjeti + 0x3),
              ulx$az = rgp53['substring'](mjeti + 0x2, q108vn),
              zbxwvo = xua$lz['pop']();0x0 > q108vn ? (ulx$az = rgp53['substring'](mjeti + 0x2)['replace'](/[\s<].*/, ''), jh7ie['error']('end tag name: ' + ulx$az + ' is not complete:' + zbxwvo['tagName']), q108vn = mjeti + 0x1 + ulx$az['length']) : ulx$az['match'](/\s</) && (ulx$az = ulx$az['replace'](/[\s<].*/, ''), jh7ie['error']('end tag name: ' + ulx$az + ' maybe not complete'), q108vn = mjeti + 0x1 + ulx$az['length']);var q8s092 = zbxwvo['localNSMap'],
              sh92 = zbxwvo['tagName'] == ulx$az,
              ld$a = sh92 || zbxwvo['tagName'] && zbxwvo['tagName']['toLowerCase']() == ulx$az['toLowerCase']();if (ld$a) {
            if ($alxdu['endElement'](zbxwvo['uri'], zbxwvo['localName'], ulx$az), q8s092) {
              for (var i7etmj in q8s092) $alxdu['endPrefixMapping'](i7etmj);
            }sh92 || jh7ie['fatalError']('end tag name: ' + ulx$az + ' is not match the current start tagName:' + zbxwvo['tagName']);
          } else xua$lz['push'](zbxwvo);q108vn++;break;case '?':
          q018n && teih67(mjeti), q108vn = K1_xbwza(rgp53, mjeti, $alxdu);break;case '!':
          q018n && teih67(mjeti), q108vn = K1_d$au(rgp53, mjeti, $alxdu, jh7ie);break;default:
          q018n && teih67(mjeti);var p$_lrd = new K1_wzoxv(),
              q0ov1 = xua$lz[xua$lz['length'] - 0x1]['currentNSMap'],
              q108vn = K1_zxbwao(rgp53, mjeti, p$_lrd, q0ov1, rp_g53, jh7ie),
              yg3cf = p$_lrd['length'];if (!p$_lrd['closed'] && K1_l_rud$(rgp53, q108vn, p$_lrd['tagName'], azox) && (p$_lrd['closed'] = !0x0, o1wnbv['nbsp'] || jh7ie['warning']('unclosed xml attribute')), q018n && yg3cf) {
            for (var qv180 = K1_qv10n8(q018n, {}), d_a$lu = 0x0; yg3cf > d_a$lu; d_a$lu++) {
              var luazx$ = p$_lrd[d_a$lu];teih67(luazx$['offset']), luazx$['locator'] = K1_qv10n8(q018n, {});
            }$alxdu['locator'] = qv180, K1_k9s62h(p$_lrd, $alxdu, q0ov1) && xua$lz['push'](p$_lrd), $alxdu['locator'] = q018n;
          } else K1_k9s62h(p$_lrd, $alxdu, q0ov1) && xua$lz['push'](p$_lrd);'http://www.w3.org/1999/xhtml' !== p$_lrd['uri'] || p$_lrd['closed'] ? q108vn++ : q108vn = K1_xwzuba(rgp53, q108vn, p$_lrd['tagName'], rp_g53, $alxdu);}
    } catch (grp3_) {
      jh7ie['error']('element parse error: ' + grp3_), q108vn = -0x1;
    }q108vn > hj7eit ? hj7eit = q108vn : he6sk(Math['max'](mjeti, hj7eit) + 0x1);
  }
}function K1_qv10n8(novq1w, ldrp$) {
  return ldrp$['lineNumber'] = novq1w['lineNumber'], ldrp$['columnNumber'] = novq1w['columnNumber'], ldrp$;
}function K1_zxbwao(d3_5r, ua$_dl, oq0v1n, owbnv1, th67i, itej7m) {
  for (var dl$axu, hk6si, bxwvoz = ++ua$_dl, von01q = K1_esi6;;) {
    var vqwn = d3_5r['charAt'](bxwvoz);switch (vqwn) {case '=':
        if (von01q === K1_isk6) dl$axu = d3_5r['slice'](ua$_dl, bxwvoz), von01q = K1_p$drl_;else {
          if (von01q !== K1_ul$dxa) throw new Error('attribute equal must after attrName');von01q = K1_p$drl_;
        }break;case '\x27':case '\x22':
        if (von01q === K1_p$drl_ || von01q === K1_isk6) {
          if (von01q === K1_isk6 && (itej7m['warning']('attribute value must after "="'), dl$axu = d3_5r['slice'](ua$_dl, bxwvoz)), ua$_dl = bxwvoz + 0x1, bxwvoz = d3_5r['indexOf'](vqwn, ua$_dl), !(bxwvoz > 0x0)) throw new Error('attribute value no end \'' + vqwn + '\' match');hk6si = d3_5r['slice'](ua$_dl, bxwvoz)['replace'](/&#?\w+;/g, th67i), oq0v1n['add'](dl$axu, hk6si, ua$_dl - 0x1), von01q = K1_wobza;
        } else {
          if (von01q != K1_q0o) throw new Error('attribute value must after "="');hk6si = d3_5r['slice'](ua$_dl, bxwvoz)['replace'](/&#?\w+;/g, th67i), oq0v1n['add'](dl$axu, hk6si, ua$_dl), itej7m['warning']('attribute "' + dl$axu + '" missed start quot(' + vqwn + ')!!'), ua$_dl = bxwvoz + 0x1, von01q = K1_wobza;
        }break;case '/':
        switch (von01q) {case K1_esi6:
            oq0v1n['setTagName'](d3_5r['slice'](ua$_dl, bxwvoz));case K1_wobza:case K1_bzxov:case K1_lua_d:
            von01q = K1_lua_d, oq0v1n['closed'] = !0x0;case K1_q0o:case K1_isk6:case K1_ul$dxa:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return itej7m['error']('unexpected end of input'), von01q == K1_esi6 && oq0v1n['setTagName'](d3_5r['slice'](ua$_dl, bxwvoz)), bxwvoz;case '>':
        switch (von01q) {case K1_esi6:
            oq0v1n['setTagName'](d3_5r['slice'](ua$_dl, bxwvoz));case K1_wobza:case K1_bzxov:case K1_lua_d:
            break;case K1_q0o:case K1_isk6:
            hk6si = d3_5r['slice'](ua$_dl, bxwvoz), '/' === hk6si['slice'](-0x1) && (oq0v1n['closed'] = !0x0, hk6si = hk6si['slice'](0x0, -0x1));case K1_ul$dxa:
            von01q === K1_ul$dxa && (hk6si = dl$axu), von01q == K1_q0o ? (itej7m['warning']('attribute "' + hk6si + '" missed quot(")!!'), oq0v1n['add'](dl$axu, hk6si['replace'](/&#?\w+;/g, th67i), ua$_dl)) : ('http://www.w3.org/1999/xhtml' === owbnv1[''] && hk6si['match'](/^(?:disabled|checked|selected)$/i) || itej7m['warning']('attribute "' + hk6si + '" missed value!! "' + hk6si + '" instead!!'), oq0v1n['add'](hk6si, hk6si, ua$_dl));break;case K1_p$drl_:
            throw new Error('attribute value missed!!');}return bxwvoz;case '\u0080':
        vqwn = '\x20';default:
        if ('\x20' >= vqwn) switch (von01q) {case K1_esi6:
            oq0v1n['setTagName'](d3_5r['slice'](ua$_dl, bxwvoz)), von01q = K1_bzxov;break;case K1_isk6:
            dl$axu = d3_5r['slice'](ua$_dl, bxwvoz), von01q = K1_ul$dxa;break;case K1_q0o:
            var hk6si = d3_5r['slice'](ua$_dl, bxwvoz)['replace'](/&#?\w+;/g, th67i);itej7m['warning']('attribute "' + hk6si + '" missed quot(")!!'), oq0v1n['add'](dl$axu, hk6si, ua$_dl);case K1_wobza:
            von01q = K1_bzxov;} else switch (von01q) {case K1_ul$dxa:
            {
              oq0v1n['tagName'];
            }'http://www.w3.org/1999/xhtml' === owbnv1[''] && dl$axu['match'](/^(?:disabled|checked|selected)$/i) || itej7m['warning']('attribute "' + dl$axu + '" missed value!! "' + dl$axu + '" instead2!!'), oq0v1n['add'](dl$axu, dl$axu, ua$_dl), ua$_dl = bxwvoz, von01q = K1_isk6;break;case K1_wobza:
            itej7m['warning']('attribute space is required"' + dl$axu + '\x22!!');case K1_bzxov:
            von01q = K1_isk6, ua$_dl = bxwvoz;break;case K1_p$drl_:
            von01q = K1_q0o, ua$_dl = bxwvoz;break;case K1_lua_d:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bxwvoz++;
  }
}function K1_k9s62h(k2s6h, ulxda, d53) {
  for (var fgc3p5 = k2s6h['tagName'], tkhe6 = null, qs902 = k2s6h['length']; qs902--;) {
    var eiht6 = k2s6h[qs902],
        q21n80 = eiht6['qName'],
        bz1wov = eiht6['value'],
        zov1bw = q21n80['indexOf'](':');if (zov1bw > 0x0) var zboa = eiht6['prefix'] = q21n80['slice'](0x0, zov1bw),
        pg35f = q21n80['slice'](zov1bw + 0x1),
        mt47 = 'xmlns' === zboa && pg35f;else pg35f = q21n80, zboa = null, mt47 = 'xmlns' === q21n80 && '';eiht6['localName'] = pg35f, mt47 !== !0x1 && (null == tkhe6 && (tkhe6 = {}, K1__l$dur(d53, d53 = {})), d53[mt47] = tkhe6[mt47] = bz1wov, eiht6['uri'] = 'http://www.w3.org/2000/xmlns/', ulxda['startPrefixMapping'](mt47, bz1wov));
  }for (var qs902 = k2s6h['length']; qs902--;) {
    eiht6 = k2s6h[qs902];var zboa = eiht6['prefix'];zboa && ('xml' === zboa && (eiht6['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zboa && (eiht6['uri'] = d53[zboa || '']));
  }var zov1bw = fgc3p5['indexOf'](':');zov1bw > 0x0 ? (zboa = k2s6h['prefix'] = fgc3p5['slice'](0x0, zov1bw), pg35f = k2s6h['localName'] = fgc3p5['slice'](zov1bw + 0x1)) : (zboa = null, pg35f = k2s6h['localName'] = fgc3p5);var ks8269 = k2s6h['uri'] = d53[zboa || ''];if (ulxda['startElement'](ks8269, pg35f, fgc3p5, k2s6h), !k2s6h['closed']) return k2s6h['currentNSMap'] = d53, k2s6h['localNSMap'] = tkhe6, !0x0;if (ulxda['endElement'](ks8269, pg35f, fgc3p5), tkhe6) {
    for (zboa in tkhe6) ulxda['endPrefixMapping'](zboa);
  }
}function K1_xwzuba(pdl_r, hjet7i, $zxal, yf53cg, is6he) {
  if (/^(?:script|textarea)$/i['test']($zxal)) {
    var wob1vn = pdl_r['indexOf']('</' + $zxal + '>', hjet7i),
        sh296k = pdl_r['substring'](hjet7i + 0x1, wob1vn);if (/[&<]/['test'](sh296k)) return (/^script$/i['test']($zxal) ? (is6he['characters'](sh296k, 0x0, sh296k['length']), wob1vn) : (sh296k = sh296k['replace'](/&#?\w+;/g, yf53cg), is6he['characters'](sh296k, 0x0, sh296k['length']), wob1vn)
    );
  }return hjet7i + 0x1;
}function K1_l_rud$(woz, jm47it, xwaub, qvnw) {
  var yfg53 = qvnw[xwaub];return null == yfg53 && (yfg53 = woz['lastIndexOf']('</' + xwaub + '>'), jm47it > yfg53 && (yfg53 = woz['lastIndexOf']('</' + xwaub)), qvnw[xwaub] = yfg53), jm47it > yfg53;
}function K1__l$dur(a$lxz, sk9286) {
  for (var uxzla in a$lxz) sk9286[uxzla] = a$lxz[uxzla];
}function K1_d$au(_ula$, o1vnbw, wzbvx, bwoxaz) {
  var axwozb = _ula$['charAt'](o1vnbw + 0x2);switch (axwozb) {case '-':
      if ('-' === _ula$['charAt'](o1vnbw + 0x3)) {
        var i7t4mj = _ula$['indexOf']('-->', o1vnbw + 0x4);return i7t4mj > o1vnbw ? (wzbvx['comment'](_ula$, o1vnbw + 0x4, i7t4mj - o1vnbw - 0x4), i7t4mj + 0x3) : (bwoxaz['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _ula$['substr'](o1vnbw + 0x3, 0x6)) {
        var i7t4mj = _ula$['indexOf'](']]>', o1vnbw + 0x9);return wzbvx['startCDATA'](), wzbvx['characters'](_ula$, o1vnbw + 0x9, i7t4mj - o1vnbw - 0x9), wzbvx['endCDATA'](), i7t4mj + 0x3;
      }var xlabuz = K1_ihejt7(_ula$, o1vnbw),
          r$5p = xlabuz['length'];if (r$5p > 0x1 && /!doctype/i['test'](xlabuz[0x0][0x0])) {
        var $5p = xlabuz[0x1][0x0],
            zubaxw = r$5p > 0x3 && /^public$/i['test'](xlabuz[0x2][0x0]) && xlabuz[0x3][0x0],
            zaxwbu = r$5p > 0x4 && xlabuz[0x4][0x0],
            c5yf3 = xlabuz[r$5p - 0x1];return wzbvx['startDTD']($5p, zubaxw && zubaxw['replace'](/^(['"])(.*?)\1$/, '$2'), zaxwbu && zaxwbu['replace'](/^(['"])(.*?)\1$/, '$2')), wzbvx['endDTD'](), c5yf3['index'] + c5yf3[0x0]['length'];
      }}return -0x1;
}function K1_xbwza(te7mij, q1onwv, _3gp5) {
  var f3pgc = te7mij['indexOf']('?>', q1onwv);if (f3pgc) {
    var r_ldp = te7mij['substring'](q1onwv, f3pgc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r_ldp) {
      {
        r_ldp[0x0]['length'];
      }return _3gp5['processingInstruction'](r_ldp[0x1], r_ldp[0x2]), f3pgc + 0x2;
    }return -0x1;
  }return -0x1;
}function K1_wzoxv() {}function K1_pd5r$($ulxaz, xual$z) {
  return $ulxaz['__proto__'] = xual$z, $ulxaz;
}function K1_ihejt7(lx$za, te6hi7) {
  var bwv1o,
      xobvz = [],
      bxuw = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bxuw['lastIndex'] = te6hi7, bxuw['exec'](lx$za); bwv1o = bxuw['exec'](lx$za);) if (xobvz['push'](bwv1o), bwv1o[0x1]) return xobvz;
}var K1_ijmet7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_s8k296 = new RegExp('[\\-\\.0-9' + K1_ijmet7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1_ks089 = new RegExp('^' + K1_ijmet7['source'] + K1_s8k296['source'] + '*(?::' + K1_ijmet7['source'] + K1_s8k296['source'] + '*)?$'),
    K1_esi6 = 0x0,
    K1_isk6 = 0x1,
    K1_ul$dxa = 0x2,
    K1_p$drl_ = 0x3,
    K1_q0o = 0x4,
    K1_wobza = 0x5,
    K1_bzxov = 0x6,
    K1_lua_d = 0x7;K1_k6ies['prototype'] = { 'parse': function (r3g_5, ru_l, q082s) {
    var u$axd = this['domBuilder'];u$axd['startDocument'](), K1__l$dur(ru_l, ru_l = {}), K1_i6h(r3g_5, ru_l, q082s, u$axd, this['errorHandler']), u$axd['endDocument']();
  } }, K1_wzoxv['prototype'] = { 'setTagName': function (lxuza) {
    if (!K1_ks089['test'](lxuza)) throw new Error('invalid tagName:' + lxuza);this['tagName'] = lxuza;
  }, 'add': function (zx$lu, _pld$r, auxzl$) {
    if (!K1_ks089['test'](zx$lu)) throw new Error('invalid attribute:' + zx$lu);this[this['length']++] = { 'qName': zx$lu, 'value': _pld$r, 'offset': auxzl$ };
  }, 'length': 0x0, 'getLocalName': function (k2089) {
    return this[k2089]['localName'];
  }, 'getLocator': function (laxzbu) {
    return this[laxzbu]['locator'];
  }, 'getQName': function ($_dlu) {
    return this[$_dlu]['qName'];
  }, 'getURI': function (i6ke) {
    return this[i6ke]['uri'];
  }, 'getValue': function ($zu) {
    return this[$zu]['value'];
  } }, K1_pd5r$({}, K1_pd5r$['prototype']) instanceof K1_pd5r$ || (K1_pd5r$ = function (gp3f5, i7tmj4) {
  function k2h() {}k2h['prototype'] = i7tmj4, k2h = new k2h();for (i7tmj4 in gp3f5) k2h[i7tmj4] = gp3f5[i7tmj4];return k2h;
}), exports['XMLReader'] = K1_k6ies;