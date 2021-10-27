var U = wx.$k;
function K1_dqgu() {}function K1_j87kvn(o5z02y, $a5e6s, vjmi_7, i_h43, jmi7v_) {
  function ugdw2(z5eo0y) {
    if (z5eo0y > 0xffff) {
      z5eo0y -= 0x10000;var mh3ti_ = 0xd800 + (z5eo0y >> 0xa),
          jn78kv = 0xdc00 + (0x3ff & z5eo0y);return String['fromCharCode'](mh3ti_, jn78kv);
    }return String['fromCharCode'](z5eo0y);
  }function ey5zs0(knl8jc) {
    var tmi3h = knl8jc['slice'](0x1, -0x1);return tmi3h in vjmi_7 ? vjmi_7[tmi3h] : '#' === tmi3h['charAt'](0x0) ? ugdw2(parseInt(tmi3h['substr'](0x1)['replace']('x', '0x'))) : (jmi7v_['error']('entity not found:' + knl8jc), knl8jc);
  }function th3bx4(imh3t) {
    if (imh3t > wo2gdf) {
      var x349tb = o5z02y['substring'](wo2gdf, imh3t)['replace'](/&#?\w+;/g, ey5zs0);syez05 && fg0ow2(wo2gdf), i_h43['characters'](x349tb, 0x0, imh3t - wo2gdf), wo2gdf = imh3t;
    }
  }function fg0ow2(btx149, ye5z0) {
    for (; btx149 >= e5$ && (ye5z0 = w2fdg['exec'](o5z02y));) xt39b = ye5z0['index'], e5$ = xt39b + ye5z0[0x0]['length'], syez05['lineNumber']++;syez05['columnNumber'] = btx149 - xt39b + 0x1;
  }for (var xt39b = 0x0, e5$ = 0x0, w2fdg = /.*(?:\r\n?|\n)|.*$/g, syez05 = i_h43['locator'], x_t34 = [{ 'currentNSMap': $a5e6s }], mhi = {}, wo2gdf = 0x0;;) {
    try {
      var za$5se = o5z02y['indexOf']('<', wo2gdf);if (0x0 > za$5se) {
        if (!o5z02y['substr'](wo2gdf)['match'](/^\s*$/)) {
          var o02zy5 = i_h43['doc'],
              esyza = o02zy5['createTextNode'](o5z02y['substr'](wo2gdf));o02zy5['appendChild'](esyza), i_h43['currentElement'] = esyza;
        }return;
      }switch (za$5se > wo2gdf && th3bx4(za$5se), o5z02y['charAt'](za$5se + 0x1)) {case '/':
          var b43t = o5z02y['indexOf']('>', za$5se + 0x3),
              it_34h = o5z02y['substring'](za$5se + 0x2, b43t),
              b$169x = x_t34['pop']();0x0 > b43t ? (it_34h = o5z02y['substring'](za$5se + 0x2)['replace'](/[\s<].*/, ''), jmi7v_['error']('end tag name: ' + it_34h + ' is not complete:' + b$169x['tagName']), b43t = za$5se + 0x1 + it_34h['length']) : it_34h['match'](/\s</) && (it_34h = it_34h['replace'](/[\s<].*/, ''), jmi7v_['error']('end tag name: ' + it_34h + ' maybe not complete'), b43t = za$5se + 0x1 + it_34h['length']);var h34tx_ = b$169x['localNSMap'],
              dwgof = b$169x['tagName'] == it_34h,
              mv_i = dwgof || b$169x['tagName'] && b$169x['tagName']['toLowerCase']() == it_34h['toLowerCase']();if (mv_i) {
            if (i_h43['endElement'](b$169x['uri'], b$169x['localName'], it_34h), h34tx_) {
              for (var y05o2 in h34tx_) i_h43['endPrefixMapping'](y05o2);
            }dwgof || jmi7v_['fatalError']('end tag name: ' + it_34h + ' is not match the current start tagName:' + b$169x['tagName']);
          } else x_t34['push'](b$169x);b43t++;break;case '?':
          syez05 && fg0ow2(za$5se), b43t = K1_rnlc(o5z02y, za$5se, i_h43);break;case '!':
          syez05 && fg0ow2(za$5se), b43t = K1_ofw0g(o5z02y, za$5se, i_h43, jmi7v_);break;default:
          syez05 && fg0ow2(za$5se);var x4b16 = new K1_klr8pc(),
              lkc8pr = x_t34[x_t34['length'] - 0x1]['currentNSMap'],
              b43t = K1_x_th3(o5z02y, za$5se, x4b16, lkc8pr, ey5zs0, jmi7v_),
              i7h_mv = x4b16['length'];if (!x4b16['closed'] && K1_$b96x(o5z02y, b43t, x4b16['tagName'], mhi) && (x4b16['closed'] = !0x0, vjmi_7['nbsp'] || jmi7v_['warning']('unclosed xml attribute')), syez05 && i7h_mv) {
            for (var ufdqg = K1_ih4_(syez05, {}), kclp = 0x0; i7h_mv > kclp; kclp++) {
              var b416 = x4b16[kclp];fg0ow2(b416['offset']), b416['locator'] = K1_ih4_(syez05, {});
            }i_h43['locator'] = ufdqg, K1_$96a1b(x4b16, i_h43, lkc8pr) && x_t34['push'](x4b16), i_h43['locator'] = syez05;
          } else K1_$96a1b(x4b16, i_h43, lkc8pr) && x_t34['push'](x4b16);'http://www.w3.org/1999/xhtml' !== x4b16['uri'] || x4b16['closed'] ? b43t++ : b43t = K1__m3ihv(o5z02y, b43t, x4b16['tagName'], ey5zs0, i_h43);}
    } catch (o2gw0) {
      jmi7v_['error']('element parse error: ' + o2gw0), b43t = -0x1;
    }b43t > wo2gdf ? wo2gdf = b43t : th3bx4(Math['max'](za$5se, wo2gdf) + 0x1);
  }
}function K1_ih4_(zaeys5, x6b1) {
  return x6b1['lineNumber'] = zaeys5['lineNumber'], x6b1['columnNumber'] = zaeys5['columnNumber'], x6b1;
}function K1_x_th3(e$sa16, njv8m7, ufwd2g, x9b164, esyaz, fdwg) {
  for (var t4i3_, wufdgq, h_43x = ++njv8m7, j8klc = K1_yz0go;;) {
    var j7n8 = e$sa16['charAt'](h_43x);switch (j7n8) {case '=':
        if (j8klc === K1_wo2f) t4i3_ = e$sa16['slice'](njv8m7, h_43x), j8klc = K1_i7vj_;else {
          if (j8klc !== K1_ogyz0) throw new Error('attribute equal must after attrName');j8klc = K1_i7vj_;
        }break;case '\x27':case '\x22':
        if (j8klc === K1_i7vj_ || j8klc === K1_wo2f) {
          if (j8klc === K1_wo2f && (fdwg['warning']('attribute value must after "="'), t4i3_ = e$sa16['slice'](njv8m7, h_43x)), njv8m7 = h_43x + 0x1, h_43x = e$sa16['indexOf'](j7n8, njv8m7), !(h_43x > 0x0)) throw new Error('attribute value no end \'' + j7n8 + '\' match');wufdgq = e$sa16['slice'](njv8m7, h_43x)['replace'](/&#?\w+;/g, esyaz), ufwd2g['add'](t4i3_, wufdgq, njv8m7 - 0x1), j8klc = K1_v_3;
        } else {
          if (j8klc != K1_fo2g0w) throw new Error('attribute value must after "="');wufdgq = e$sa16['slice'](njv8m7, h_43x)['replace'](/&#?\w+;/g, esyaz), ufwd2g['add'](t4i3_, wufdgq, njv8m7), fdwg['warning']('attribute "' + t4i3_ + '" missed start quot(' + j7n8 + ')!!'), njv8m7 = h_43x + 0x1, j8klc = K1_v_3;
        }break;case '/':
        switch (j8klc) {case K1_yz0go:
            ufwd2g['setTagName'](e$sa16['slice'](njv8m7, h_43x));case K1_v_3:case K1_yseza5:case K1_zy50o:
            j8klc = K1_zy50o, ufwd2g['closed'] = !0x0;case K1_fo2g0w:case K1_wo2f:case K1_ogyz0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fdwg['error']('unexpected end of input'), j8klc == K1_yz0go && ufwd2g['setTagName'](e$sa16['slice'](njv8m7, h_43x)), h_43x;case '>':
        switch (j8klc) {case K1_yz0go:
            ufwd2g['setTagName'](e$sa16['slice'](njv8m7, h_43x));case K1_v_3:case K1_yseza5:case K1_zy50o:
            break;case K1_fo2g0w:case K1_wo2f:
            wufdgq = e$sa16['slice'](njv8m7, h_43x), '/' === wufdgq['slice'](-0x1) && (ufwd2g['closed'] = !0x0, wufdgq = wufdgq['slice'](0x0, -0x1));case K1_ogyz0:
            j8klc === K1_ogyz0 && (wufdgq = t4i3_), j8klc == K1_fo2g0w ? (fdwg['warning']('attribute "' + wufdgq + '" missed quot(")!!'), ufwd2g['add'](t4i3_, wufdgq['replace'](/&#?\w+;/g, esyaz), njv8m7)) : ('http://www.w3.org/1999/xhtml' === x9b164[''] && wufdgq['match'](/^(?:disabled|checked|selected)$/i) || fdwg['warning']('attribute "' + wufdgq + '" missed value!! "' + wufdgq + '" instead!!'), ufwd2g['add'](wufdgq, wufdgq, njv8m7));break;case K1_i7vj_:
            throw new Error('attribute value missed!!');}return h_43x;case '\u0080':
        j7n8 = '\x20';default:
        if ('\x20' >= j7n8) switch (j8klc) {case K1_yz0go:
            ufwd2g['setTagName'](e$sa16['slice'](njv8m7, h_43x)), j8klc = K1_yseza5;break;case K1_wo2f:
            t4i3_ = e$sa16['slice'](njv8m7, h_43x), j8klc = K1_ogyz0;break;case K1_fo2g0w:
            var wufdgq = e$sa16['slice'](njv8m7, h_43x)['replace'](/&#?\w+;/g, esyaz);fdwg['warning']('attribute "' + wufdgq + '" missed quot(")!!'), ufwd2g['add'](t4i3_, wufdgq, njv8m7);case K1_v_3:
            j8klc = K1_yseza5;} else switch (j8klc) {case K1_ogyz0:
            {
              ufwd2g['tagName'];
            }'http://www.w3.org/1999/xhtml' === x9b164[''] && t4i3_['match'](/^(?:disabled|checked|selected)$/i) || fdwg['warning']('attribute "' + t4i3_ + '" missed value!! "' + t4i3_ + '" instead2!!'), ufwd2g['add'](t4i3_, t4i3_, njv8m7), njv8m7 = h_43x, j8klc = K1_wo2f;break;case K1_v_3:
            fdwg['warning']('attribute space is required"' + t4i3_ + '\x22!!');case K1_yseza5:
            j8klc = K1_wo2f, njv8m7 = h_43x;break;case K1_i7vj_:
            j8klc = K1_fo2g0w, njv8m7 = h_43x;break;case K1_zy50o:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}h_43x++;
  }
}function K1_$96a1b(fqgdu, y0zgo2, r8plk) {
  for (var gw2o0y = fqgdu['tagName'], $96as1 = null, ogw0f = fqgdu['length']; ogw0f--;) {
    var k8rl = fqgdu[ogw0f],
        xtb4h3 = k8rl['qName'],
        rn8kc = k8rl['value'],
        z5se$ = xtb4h3['indexOf'](':');if (z5se$ > 0x0) var owfgd = k8rl['prefix'] = xtb4h3['slice'](0x0, z5se$),
        ea6$s = xtb4h3['slice'](z5se$ + 0x1),
        kj8lnc = 'xmlns' === owfgd && ea6$s;else ea6$s = xtb4h3, owfgd = null, kj8lnc = 'xmlns' === xtb4h3 && '';k8rl['localName'] = ea6$s, kj8lnc !== !0x1 && (null == $96as1 && ($96as1 = {}, K1_lrpkc(r8plk, r8plk = {})), r8plk[kj8lnc] = $96as1[kj8lnc] = rn8kc, k8rl['uri'] = 'http://www.w3.org/2000/xmlns/', y0zgo2['startPrefixMapping'](kj8lnc, rn8kc));
  }for (var ogw0f = fqgdu['length']; ogw0f--;) {
    k8rl = fqgdu[ogw0f];var owfgd = k8rl['prefix'];owfgd && ('xml' === owfgd && (k8rl['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== owfgd && (k8rl['uri'] = r8plk[owfgd || '']));
  }var z5se$ = gw2o0y['indexOf'](':');z5se$ > 0x0 ? (owfgd = fqgdu['prefix'] = gw2o0y['slice'](0x0, z5se$), ea6$s = fqgdu['localName'] = gw2o0y['slice'](z5se$ + 0x1)) : (owfgd = null, ea6$s = fqgdu['localName'] = gw2o0y);var lcrp8k = fqgdu['uri'] = r8plk[owfgd || ''];if (y0zgo2['startElement'](lcrp8k, ea6$s, gw2o0y, fqgdu), !fqgdu['closed']) return fqgdu['currentNSMap'] = r8plk, fqgdu['localNSMap'] = $96as1, !0x0;if (y0zgo2['endElement'](lcrp8k, ea6$s, gw2o0y), $96as1) {
    for (owfgd in $96as1) y0zgo2['endPrefixMapping'](owfgd);
  }
}function K1__m3ihv(_hmvi3, t1xb, rlpc8, $ez, a691s$) {
  if (/^(?:script|textarea)$/i['test'](rlpc8)) {
    var $56ea = _hmvi3['indexOf']('</' + rlpc8 + '>', t1xb),
        _x3th4 = _hmvi3['substring'](t1xb + 0x1, $56ea);if (/[&<]/['test'](_x3th4)) return (/^script$/i['test'](rlpc8) ? (a691s$['characters'](_x3th4, 0x0, _x3th4['length']), $56ea) : (_x3th4 = _x3th4['replace'](/&#?\w+;/g, $ez), a691s$['characters'](_x3th4, 0x0, _x3th4['length']), $56ea)
    );
  }return t1xb + 0x1;
}function K1_$b96x(zog02y, $5szae, m7vhi, him3t) {
  var qwfudg = him3t[m7vhi];return null == qwfudg && (qwfudg = zog02y['lastIndexOf']('</' + m7vhi + '>'), $5szae > qwfudg && (qwfudg = zog02y['lastIndexOf']('</' + m7vhi)), him3t[m7vhi] = qwfudg), $5szae > qwfudg;
}function K1_lrpkc(ih34t_, lnrc) {
  for (var s6$a in ih34t_) lnrc[s6$a] = ih34t_[s6$a];
}function K1_ofw0g(lkn8j, jn7v8, mt3_ih, wufg2d) {
  var v7mj_ = lkn8j['charAt'](jn7v8 + 0x2);switch (v7mj_) {case '-':
      if ('-' === lkn8j['charAt'](jn7v8 + 0x3)) {
        var n8kcrl = lkn8j['indexOf']('-->', jn7v8 + 0x4);return n8kcrl > jn7v8 ? (mt3_ih['comment'](lkn8j, jn7v8 + 0x4, n8kcrl - jn7v8 - 0x4), n8kcrl + 0x3) : (wufg2d['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == lkn8j['substr'](jn7v8 + 0x3, 0x6)) {
        var n8kcrl = lkn8j['indexOf'](']]>', jn7v8 + 0x9);return mt3_ih['startCDATA'](), mt3_ih['characters'](lkn8j, jn7v8 + 0x9, n8kcrl - jn7v8 - 0x9), mt3_ih['endCDATA'](), n8kcrl + 0x3;
      }var nljk8c = K1_g02yo(lkn8j, jn7v8),
          ogy2 = nljk8c['length'];if (ogy2 > 0x1 && /!doctype/i['test'](nljk8c[0x0][0x0])) {
        var s5a$ze = nljk8c[0x1][0x0],
            yze5sa = ogy2 > 0x3 && /^public$/i['test'](nljk8c[0x2][0x0]) && nljk8c[0x3][0x0],
            s0ey5 = ogy2 > 0x4 && nljk8c[0x4][0x0],
            $5a6e = nljk8c[ogy2 - 0x1];return mt3_ih['startDTD'](s5a$ze, yze5sa && yze5sa['replace'](/^(['"])(.*?)\1$/, '$2'), s0ey5 && s0ey5['replace'](/^(['"])(.*?)\1$/, '$2')), mt3_ih['endDTD'](), $5a6e['index'] + $5a6e[0x0]['length'];
      }}return -0x1;
}function K1_rnlc(klcj8n, mjv_, x4htb3) {
  var ab$961 = klcj8n['indexOf']('?>', mjv_);if (ab$961) {
    var $1xb6 = klcj8n['substring'](mjv_, ab$961)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($1xb6) {
      {
        $1xb6[0x0]['length'];
      }return x4htb3['processingInstruction']($1xb6[0x1], $1xb6[0x2]), ab$961 + 0x2;
    }return -0x1;
  }return -0x1;
}function K1_klr8pc() {}function K1_uwg2fd(o5e0zy, hm3_) {
  return o5e0zy['__proto__'] = hm3_, o5e0zy;
}function K1_g02yo(tx49b1, s6e$a) {
  var i_m7jv,
      t4hxb = [],
      a$zes = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (a$zes['lastIndex'] = s6e$a, a$zes['exec'](tx49b1); i_m7jv = a$zes['exec'](tx49b1);) if (t4hxb['push'](i_m7jv), i_m7jv[0x1]) return t4hxb;
}var K1_ez5$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_a1$e6s = new RegExp('[\\-\\.0-9' + K1_ez5$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1_t4x_3 = new RegExp('^' + K1_ez5$['source'] + K1_a1$e6s['source'] + '*(?::' + K1_ez5$['source'] + K1_a1$e6s['source'] + '*)?$'),
    K1_yz0go = 0x0,
    K1_wo2f = 0x1,
    K1_ogyz0 = 0x2,
    K1_i7vj_ = 0x3,
    K1_fo2g0w = 0x4,
    K1_v_3 = 0x5,
    K1_yseza5 = 0x6,
    K1_zy50o = 0x7;K1_dqgu['prototype'] = { 'parse': function (zyse5, ncj8k, t3xb9) {
    var az5s = this['domBuilder'];az5s['startDocument'](), K1_lrpkc(ncj8k, ncj8k = {}), K1_j87kvn(zyse5, ncj8k, t3xb9, az5s, this['errorHandler']), az5s['endDocument']();
  } }, K1_klr8pc['prototype'] = { 'setTagName': function (h7m) {
    if (!K1_t4x_3['test'](h7m)) throw new Error('invalid tagName:' + h7m);this['tagName'] = h7m;
  }, 'add': function (se50z, zs5ye, i_v3mh) {
    if (!K1_t4x_3['test'](se50z)) throw new Error('invalid attribute:' + se50z);this[this['length']++] = { 'qName': se50z, 'value': zs5ye, 'offset': i_v3mh };
  }, 'length': 0x0, 'getLocalName': function (k8j7n) {
    return this[k8j7n]['localName'];
  }, 'getLocator': function (b6a91) {
    return this[b6a91]['locator'];
  }, 'getQName': function (rlk8pc) {
    return this[rlk8pc]['qName'];
  }, 'getURI': function (ivjmn) {
    return this[ivjmn]['uri'];
  }, 'getValue': function (z0go2) {
    return this[z0go2]['value'];
  } }, K1_uwg2fd({}, K1_uwg2fd['prototype']) instanceof K1_uwg2fd || (K1_uwg2fd = function (g2wof0, n7ijvm) {
  function hvim3() {}hvim3['prototype'] = n7ijvm, hvim3 = new hvim3();for (n7ijvm in g2wof0) hvim3[n7ijvm] = g2wof0[n7ijvm];return hvim3;
}), exports['XMLReader'] = K1_dqgu;