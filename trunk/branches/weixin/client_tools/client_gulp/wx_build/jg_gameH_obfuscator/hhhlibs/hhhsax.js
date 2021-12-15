var O = wx.$C;
function h_ys2a6() {}function h_whjxd0(f7q4, x7hwq0, abi2, o5clup, avsy_n) {
  function xdj(hdq0w) {
    if (hdq0w > 0xffff) {
      hdq0w -= 0x10000;var ab6ei = 0xd800 + (hdq0w >> 0xa),
          h0d9j = 0xdc00 + (0x3ff & hdq0w);return String['fromCharCode'](ab6ei, h0d9j);
    }return String['fromCharCode'](hdq0w);
  }function j89rzd(ia2e6b) {
    var zjh9w = ia2e6b['slice'](0x1, -0x1);return zjh9w in abi2 ? abi2[zjh9w] : '#' === zjh9w['charAt'](0x0) ? xdj(parseInt(zjh9w['substr'](0x1)['replace']('x', '0x'))) : (avsy_n['error']('entity not found:' + ia2e6b), ia2e6b);
  }function qf34(cplu) {
    if (cplu > ctom5l) {
      var dxhqw0 = f7q4['substring'](ctom5l, cplu)['replace'](/&#?\w+;/g, j89rzd);lupo && s_vnfg(ctom5l), o5clup['characters'](dxhqw0, 0x0, cplu - ctom5l), ctom5l = cplu;
    }
  }function s_vnfg(lo5km, q1743f) {
    for (; lo5km >= mol5 && (q1743f = rp8$uz['exec'](f7q4));) r9dj8z = q1743f['index'], mol5 = r9dj8z + q1743f[0x0]['length'], lupo['lineNumber']++;lupo['columnNumber'] = lo5km - r9dj8z + 0x1;
  }for (var r9dj8z = 0x0, mol5 = 0x0, rp8$uz = /.*(?:\r\n?|\n)|.*$/g, lupo = o5clup['locator'], pc8l$u = [{ 'currentNSMap': x7hwq0 }], svgf = {}, ctom5l = 0x0;;) {
    try {
      var dzjh9w = f7q4['indexOf']('<', ctom5l);if (0x0 > dzjh9w) {
        if (!f7q4['substr'](ctom5l)['match'](/^\s*$/)) {
          var gsf_nv = o5clup['doc'],
              x1q370 = gsf_nv['createTextNode'](f7q4['substr'](ctom5l));gsf_nv['appendChild'](x1q370), o5clup['currentElement'] = x1q370;
        }return;
      }switch (dzjh9w > ctom5l && qf34(dzjh9w), f7q4['charAt'](dzjh9w + 0x1)) {case '/':
          var ab6iy2 = f7q4['indexOf']('>', dzjh9w + 0x3),
              g4f_3 = f7q4['substring'](dzjh9w + 0x2, ab6iy2),
              h9j0 = pc8l$u['pop']();0x0 > ab6iy2 ? (g4f_3 = f7q4['substring'](dzjh9w + 0x2)['replace'](/[\s<].*/, ''), avsy_n['error']('end tag name: ' + g4f_3 + ' is not complete:' + h9j0['tagName']), ab6iy2 = dzjh9w + 0x1 + g4f_3['length']) : g4f_3['match'](/\s</) && (g4f_3 = g4f_3['replace'](/[\s<].*/, ''), avsy_n['error']('end tag name: ' + g4f_3 + ' maybe not complete'), ab6iy2 = dzjh9w + 0x1 + g4f_3['length']);var j0hwd = h9j0['localNSMap'],
              wdqh0x = h9j0['tagName'] == g4f_3,
              lu5 = wdqh0x || h9j0['tagName'] && h9j0['tagName']['toLowerCase']() == g4f_3['toLowerCase']();if (lu5) {
            if (o5clup['endElement'](h9j0['uri'], h9j0['localName'], g4f_3), j0hwd) {
              for (var l$u8c in j0hwd) o5clup['endPrefixMapping'](l$u8c);
            }wdqh0x || avsy_n['fatalError']('end tag name: ' + g4f_3 + ' is not match the current start tagName:' + h9j0['tagName']);
          } else pc8l$u['push'](h9j0);ab6iy2++;break;case '?':
          lupo && s_vnfg(dzjh9w), ab6iy2 = h_i6b2ea(f7q4, dzjh9w, o5clup);break;case '!':
          lupo && s_vnfg(dzjh9w), ab6iy2 = h_ab6yi(f7q4, dzjh9w, o5clup, avsy_n);break;default:
          lupo && s_vnfg(dzjh9w);var $89rzu = new h_y2s6(),
              jdw09 = pc8l$u[pc8l$u['length'] - 0x1]['currentNSMap'],
              ab6iy2 = h_nsa_y6(f7q4, dzjh9w, $89rzu, jdw09, j89rzd, avsy_n),
              olp5 = $89rzu['length'];if (!$89rzu['closed'] && h_ys2na(f7q4, ab6iy2, $89rzu['tagName'], svgf) && ($89rzu['closed'] = !0x0, abi2['nbsp'] || avsy_n['warning']('unclosed xml attribute')), lupo && olp5) {
            for (var otcl5 = h_uc5lpo(lupo, {}), l5ocpu = 0x0; olp5 > l5ocpu; l5ocpu++) {
              var s_6n = $89rzu[l5ocpu];s_vnfg(s_6n['offset']), s_6n['locator'] = h_uc5lpo(lupo, {});
            }o5clup['locator'] = otcl5, h_xwh7q($89rzu, o5clup, jdw09) && pc8l$u['push']($89rzu), o5clup['locator'] = lupo;
          } else h_xwh7q($89rzu, o5clup, jdw09) && pc8l$u['push']($89rzu);'http://www.w3.org/1999/xhtml' !== $89rzu['uri'] || $89rzu['closed'] ? ab6iy2++ : ab6iy2 = h_$rpuc8(f7q4, ab6iy2, $89rzu['tagName'], j89rzd, o5clup);}
    } catch (h07xqw) {
      avsy_n['error']('element parse error: ' + h07xqw), ab6iy2 = -0x1;
    }ab6iy2 > ctom5l ? ctom5l = ab6iy2 : qf34(Math['max'](dzjh9w, ctom5l) + 0x1);
  }
}function h_uc5lpo(gfv341, $urz9) {
  return $urz9['lineNumber'] = gfv341['lineNumber'], $urz9['columnNumber'] = gfv341['columnNumber'], $urz9;
}function h_nsa_y6(h9dw, r8$j9z, w0q7hx, jdw0x, n_svya, x174) {
  for (var zhwj9, v14f3, l8p$cu = ++r8$j9z, a_s = h_dhzj9w;;) {
    var coplu5 = h9dw['charAt'](l8p$cu);switch (coplu5) {case '=':
        if (a_s === h_f4_3) zhwj9 = h9dw['slice'](r8$j9z, l8p$cu), a_s = h_whd9jz;else {
          if (a_s !== h_v13f4) throw new Error('attribute equal must after attrName');a_s = h_whd9jz;
        }break;case '\x27':case '\x22':
        if (a_s === h_whd9jz || a_s === h_f4_3) {
          if (a_s === h_f4_3 && (x174['warning']('attribute value must after "="'), zhwj9 = h9dw['slice'](r8$j9z, l8p$cu)), r8$j9z = l8p$cu + 0x1, l8p$cu = h9dw['indexOf'](coplu5, r8$j9z), !(l8p$cu > 0x0)) throw new Error('attribute value no end \'' + coplu5 + '\' match');v14f3 = h9dw['slice'](r8$j9z, l8p$cu)['replace'](/&#?\w+;/g, n_svya), w0q7hx['add'](zhwj9, v14f3, r8$j9z - 0x1), a_s = h_$przu8;
        } else {
          if (a_s != h_r8dj9) throw new Error('attribute value must after "="');v14f3 = h9dw['slice'](r8$j9z, l8p$cu)['replace'](/&#?\w+;/g, n_svya), w0q7hx['add'](zhwj9, v14f3, r8$j9z), x174['warning']('attribute "' + zhwj9 + '" missed start quot(' + coplu5 + ')!!'), r8$j9z = l8p$cu + 0x1, a_s = h_$przu8;
        }break;case '/':
        switch (a_s) {case h_dhzj9w:
            w0q7hx['setTagName'](h9dw['slice'](r8$j9z, l8p$cu));case h_$przu8:case h_n_asyv:case h_s_gvy:
            a_s = h_s_gvy, w0q7hx['closed'] = !0x0;case h_r8dj9:case h_f4_3:case h_v13f4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return x174['error']('unexpected end of input'), a_s == h_dhzj9w && w0q7hx['setTagName'](h9dw['slice'](r8$j9z, l8p$cu)), l8p$cu;case '>':
        switch (a_s) {case h_dhzj9w:
            w0q7hx['setTagName'](h9dw['slice'](r8$j9z, l8p$cu));case h_$przu8:case h_n_asyv:case h_s_gvy:
            break;case h_r8dj9:case h_f4_3:
            v14f3 = h9dw['slice'](r8$j9z, l8p$cu), '/' === v14f3['slice'](-0x1) && (w0q7hx['closed'] = !0x0, v14f3 = v14f3['slice'](0x0, -0x1));case h_v13f4:
            a_s === h_v13f4 && (v14f3 = zhwj9), a_s == h_r8dj9 ? (x174['warning']('attribute "' + v14f3 + '" missed quot(")!!'), w0q7hx['add'](zhwj9, v14f3['replace'](/&#?\w+;/g, n_svya), r8$j9z)) : ('http://www.w3.org/1999/xhtml' === jdw0x[''] && v14f3['match'](/^(?:disabled|checked|selected)$/i) || x174['warning']('attribute "' + v14f3 + '" missed value!! "' + v14f3 + '" instead!!'), w0q7hx['add'](v14f3, v14f3, r8$j9z));break;case h_whd9jz:
            throw new Error('attribute value missed!!');}return l8p$cu;case '\u0080':
        coplu5 = '\x20';default:
        if ('\x20' >= coplu5) switch (a_s) {case h_dhzj9w:
            w0q7hx['setTagName'](h9dw['slice'](r8$j9z, l8p$cu)), a_s = h_n_asyv;break;case h_f4_3:
            zhwj9 = h9dw['slice'](r8$j9z, l8p$cu), a_s = h_v13f4;break;case h_r8dj9:
            var v14f3 = h9dw['slice'](r8$j9z, l8p$cu)['replace'](/&#?\w+;/g, n_svya);x174['warning']('attribute "' + v14f3 + '" missed quot(")!!'), w0q7hx['add'](zhwj9, v14f3, r8$j9z);case h_$przu8:
            a_s = h_n_asyv;} else switch (a_s) {case h_v13f4:
            {
              w0q7hx['tagName'];
            }'http://www.w3.org/1999/xhtml' === jdw0x[''] && zhwj9['match'](/^(?:disabled|checked|selected)$/i) || x174['warning']('attribute "' + zhwj9 + '" missed value!! "' + zhwj9 + '" instead2!!'), w0q7hx['add'](zhwj9, zhwj9, r8$j9z), r8$j9z = l8p$cu, a_s = h_f4_3;break;case h_$przu8:
            x174['warning']('attribute space is required"' + zhwj9 + '\x22!!');case h_n_asyv:
            a_s = h_f4_3, r8$j9z = l8p$cu;break;case h_whd9jz:
            a_s = h_r8dj9, r8$j9z = l8p$cu;break;case h_s_gvy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}l8p$cu++;
  }
}function h_xwh7q(dj9hz, i2ya6, rz9$) {
  for (var vnfgs = dj9hz['tagName'], syi62a = null, gnsvy_ = dj9hz['length']; gnsvy_--;) {
    var r$upc = dj9hz[gnsvy_],
        as6yn2 = r$upc['qName'],
        $cu = r$upc['value'],
        s_6ay = as6yn2['indexOf'](':');if (s_6ay > 0x0) var ucp5o = r$upc['prefix'] = as6yn2['slice'](0x0, s_6ay),
        ur8 = as6yn2['slice'](s_6ay + 0x1),
        y2ib6 = 'xmlns' === ucp5o && ur8;else ur8 = as6yn2, ucp5o = null, y2ib6 = 'xmlns' === as6yn2 && '';r$upc['localName'] = ur8, y2ib6 !== !0x1 && (null == syi62a && (syi62a = {}, h_puc$r8(rz9$, rz9$ = {})), rz9$[y2ib6] = syi62a[y2ib6] = $cu, r$upc['uri'] = 'http://www.w3.org/2000/xmlns/', i2ya6['startPrefixMapping'](y2ib6, $cu));
  }for (var gnsvy_ = dj9hz['length']; gnsvy_--;) {
    r$upc = dj9hz[gnsvy_];var ucp5o = r$upc['prefix'];ucp5o && ('xml' === ucp5o && (r$upc['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ucp5o && (r$upc['uri'] = rz9$[ucp5o || '']));
  }var s_6ay = vnfgs['indexOf'](':');s_6ay > 0x0 ? (ucp5o = dj9hz['prefix'] = vnfgs['slice'](0x0, s_6ay), ur8 = dj9hz['localName'] = vnfgs['slice'](s_6ay + 0x1)) : (ucp5o = null, ur8 = dj9hz['localName'] = vnfgs);var z9hdj = dj9hz['uri'] = rz9$[ucp5o || ''];if (i2ya6['startElement'](z9hdj, ur8, vnfgs, dj9hz), !dj9hz['closed']) return dj9hz['currentNSMap'] = rz9$, dj9hz['localNSMap'] = syi62a, !0x0;if (i2ya6['endElement'](z9hdj, ur8, vnfgs), syi62a) {
    for (ucp5o in syi62a) i2ya6['endPrefixMapping'](ucp5o);
  }
}function h_$rpuc8(whjzd, locup, hjwd90, $zur9, pcot) {
  if (/^(?:script|textarea)$/i['test'](hjwd90)) {
    var l5pcou = whjzd['indexOf']('</' + hjwd90 + '>', locup),
        v_f43 = whjzd['substring'](locup + 0x1, l5pcou);if (/[&<]/['test'](v_f43)) return (/^script$/i['test'](hjwd90) ? (pcot['characters'](v_f43, 0x0, v_f43['length']), l5pcou) : (v_f43 = v_f43['replace'](/&#?\w+;/g, $zur9), pcot['characters'](v_f43, 0x0, v_f43['length']), l5pcou)
    );
  }return locup + 0x1;
}function h_ys2na(bea62, jzh9dr, l$puc, _sfg) {
  var wqx7 = _sfg[l$puc];return null == wqx7 && (wqx7 = bea62['lastIndexOf']('</' + l$puc + '>'), jzh9dr > wqx7 && (wqx7 = bea62['lastIndexOf']('</' + l$puc)), _sfg[l$puc] = wqx7), jzh9dr > wqx7;
}function h_puc$r8(hrzjd9, ygsn_v) {
  for (var ansvy in hrzjd9) ygsn_v[ansvy] = hrzjd9[ansvy];
}function h_ab6yi(djr9h, qx7, otcpl5, jd09) {
  var yvn_as = djr9h['charAt'](qx7 + 0x2);switch (yvn_as) {case '-':
      if ('-' === djr9h['charAt'](qx7 + 0x3)) {
        var t5mlc = djr9h['indexOf']('-->', qx7 + 0x4);return t5mlc > qx7 ? (otcpl5['comment'](djr9h, qx7 + 0x4, t5mlc - qx7 - 0x4), t5mlc + 0x3) : (jd09['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == djr9h['substr'](qx7 + 0x3, 0x6)) {
        var t5mlc = djr9h['indexOf'](']]>', qx7 + 0x9);return otcpl5['startCDATA'](), otcpl5['characters'](djr9h, qx7 + 0x9, t5mlc - qx7 - 0x9), otcpl5['endCDATA'](), t5mlc + 0x3;
      }var ba2iy6 = h_dh9rz(djr9h, qx7),
          $5uplc = ba2iy6['length'];if ($5uplc > 0x1 && /!doctype/i['test'](ba2iy6[0x0][0x0])) {
        var o5ktml = ba2iy6[0x1][0x0],
            a2n6ys = $5uplc > 0x3 && /^public$/i['test'](ba2iy6[0x2][0x0]) && ba2iy6[0x3][0x0],
            r9$8zj = $5uplc > 0x4 && ba2iy6[0x4][0x0],
            a6ib = ba2iy6[$5uplc - 0x1];return otcpl5['startDTD'](o5ktml, a2n6ys && a2n6ys['replace'](/^(['"])(.*?)\1$/, '$2'), r9$8zj && r9$8zj['replace'](/^(['"])(.*?)\1$/, '$2')), otcpl5['endDTD'](), a6ib['index'] + a6ib[0x0]['length'];
      }}return -0x1;
}function h_i6b2ea(tcmlo, svn_fg, x174q) {
  var iayb62 = tcmlo['indexOf']('?>', svn_fg);if (iayb62) {
    var gv34 = tcmlo['substring'](svn_fg, iayb62)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (gv34) {
      {
        gv34[0x0]['length'];
      }return x174q['processingInstruction'](gv34[0x1], gv34[0x2]), iayb62 + 0x2;
    }return -0x1;
  }return -0x1;
}function h_y2s6() {}function h_lp8c$(zr8u$p, $8jzr) {
  return zr8u$p['__proto__'] = $8jzr, zr8u$p;
}function h_dh9rz(g31fv, $89rjz) {
  var na26sy,
      nvgs_ = [],
      $c5ulp = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($c5ulp['lastIndex'] = $89rjz, $c5ulp['exec'](g31fv); na26sy = $c5ulp['exec'](g31fv);) if (nvgs_['push'](na26sy), na26sy[0x1]) return nvgs_;
}var h_nsfg = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_nvya_s = new RegExp('[\\-\\.0-9' + h_nsfg['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_r$ucp8 = new RegExp('^' + h_nsfg['source'] + h_nvya_s['source'] + '*(?::' + h_nsfg['source'] + h_nvya_s['source'] + '*)?$'),
    h_dhzj9w = 0x0,
    h_f4_3 = 0x1,
    h_v13f4 = 0x2,
    h_whd9jz = 0x3,
    h_r8dj9 = 0x4,
    h_$przu8 = 0x5,
    h_n_asyv = 0x6,
    h_s_gvy = 0x7;h_ys2a6['prototype'] = { 'parse': function (dxjw, f7g41, nayv) {
    var nsy_v = this['domBuilder'];nsy_v['startDocument'](), h_puc$r8(f7g41, f7g41 = {}), h_whjxd0(dxjw, f7g41, nayv, nsy_v, this['errorHandler']), nsy_v['endDocument']();
  } }, h_y2s6['prototype'] = { 'setTagName': function (c5u$) {
    if (!h_r$ucp8['test'](c5u$)) throw new Error('invalid tagName:' + c5u$);this['tagName'] = c5u$;
  }, 'add': function (oc5lm, yia6s, say6n) {
    if (!h_r$ucp8['test'](oc5lm)) throw new Error('invalid attribute:' + oc5lm);this[this['length']++] = { 'qName': oc5lm, 'value': yia6s, 'offset': say6n };
  }, 'length': 0x0, 'getLocalName': function (x107) {
    return this[x107]['localName'];
  }, 'getLocator': function (w7xhq0) {
    return this[w7xhq0]['locator'];
  }, 'getQName': function (a6ysi) {
    return this[a6ysi]['qName'];
  }, 'getURI': function (q7x0wh) {
    return this[q7x0wh]['uri'];
  }, 'getValue': function ($ulp) {
    return this[$ulp]['value'];
  } }, h_lp8c$({}, h_lp8c$['prototype']) instanceof h_lp8c$ || (h_lp8c$ = function (is62a, ngvfs) {
  function yv_ng() {}yv_ng['prototype'] = ngvfs, yv_ng = new yv_ng();for (ngvfs in is62a) yv_ng[ngvfs] = is62a[ngvfs];return yv_ng;
}), exports['XMLReader'] = h_ys2a6;