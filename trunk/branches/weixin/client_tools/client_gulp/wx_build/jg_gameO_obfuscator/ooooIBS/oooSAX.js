var c = wx.$o;
function o_i6l2ad() {}function o_ox9g(iwd612, ia26dl, cob8zh, zcmp8r, msr5t) {
  function rcpt5(rm8cp) {
    if (rm8cp > 0xffff) {
      rm8cp -= 0x10000;var e_$y0 = 0xd800 + (rm8cp >> 0xa),
          qtm = 0xdc00 + (0x3ff & rm8cp);return String['fromCharCode'](e_$y0, qtm);
    }return String['fromCharCode'](rm8cp);
  }function pmt(uk_e0) {
    var a6l3d = uk_e0['slice'](0x1, -0x1);return a6l3d in cob8zh ? cob8zh[a6l3d] : '#' === a6l3d['charAt'](0x0) ? rcpt5(parseInt(a6l3d['substr'](0x1)['replace']('x', '0x'))) : (msr5t['error']('entity not found:' + uk_e0), uk_e0);
  }function e$0j(_yuenk) {
    if (_yuenk > j$k) {
      var rpm8cz = iwd612['substring'](j$k, _yuenk)['replace'](/&#?\w+;/g, pmt);ald6v && ye$k_(j$k), zcmp8r['characters'](rpm8cz, 0x0, _yuenk - j$k), j$k = _yuenk;
    }
  }function ye$k_(mrt5cp, nyk_e) {
    for (; mrt5cp >= rm85 && (nyk_e = t75qm['exec'](iwd612));) alv63 = nyk_e['index'], rm85 = alv63 + nyk_e[0x0]['length'], ald6v['lineNumber']++;ald6v['columnNumber'] = mrt5cp - alv63 + 0x1;
  }for (var alv63 = 0x0, rm85 = 0x0, t75qm = /.*(?:\r\n?|\n)|.*$/g, ald6v = zcmp8r['locator'], mp5c8r = [{ 'currentNSMap': ia26dl }], $0y_ = {}, j$k = 0x0;;) {
    try {
      var ke0y_ = iwd612['indexOf']('<', j$k);if (0x0 > ke0y_) {
        if (!iwd612['substr'](j$k)['match'](/^\s*$/)) {
          var t5sm = zcmp8r['doc'],
              zphcb8 = t5sm['createTextNode'](iwd612['substr'](j$k));t5sm['appendChild'](zphcb8), zcmp8r['currentElement'] = zphcb8;
        }return;
      }switch (ke0y_ > j$k && e$0j(ke0y_), iwd612['charAt'](ke0y_ + 0x1)) {case '/':
          var fwi19x = iwd612['indexOf']('>', ke0y_ + 0x3),
              ogxb4h = iwd612['substring'](ke0y_ + 0x2, fwi19x),
              keynu_ = mp5c8r['pop']();0x0 > fwi19x ? (ogxb4h = iwd612['substring'](ke0y_ + 0x2)['replace'](/[\s<].*/, ''), msr5t['error']('end tag name: ' + ogxb4h + ' is not complete:' + keynu_['tagName']), fwi19x = ke0y_ + 0x1 + ogxb4h['length']) : ogxb4h['match'](/\s</) && (ogxb4h = ogxb4h['replace'](/[\s<].*/, ''), msr5t['error']('end tag name: ' + ogxb4h + ' maybe not complete'), fwi19x = ke0y_ + 0x1 + ogxb4h['length']);var ai61d2 = keynu_['localNSMap'],
              n36av = keynu_['tagName'] == ogxb4h,
              o8gbh = n36av || keynu_['tagName'] && keynu_['tagName']['toLowerCase']() == ogxb4h['toLowerCase']();if (o8gbh) {
            if (zcmp8r['endElement'](keynu_['uri'], keynu_['localName'], ogxb4h), ai61d2) {
              for (var h4bgz in ai61d2) zcmp8r['endPrefixMapping'](h4bgz);
            }n36av || msr5t['fatalError']('end tag name: ' + ogxb4h + ' is not match the current start tagName:' + keynu_['tagName']);
          } else mp5c8r['push'](keynu_);fwi19x++;break;case '?':
          ald6v && ye$k_(ke0y_), fwi19x = o_ai162(iwd612, ke0y_, zcmp8r);break;case '!':
          ald6v && ye$k_(ke0y_), fwi19x = o_$yej(iwd612, ke0y_, zcmp8r, msr5t);break;default:
          ald6v && ye$k_(ke0y_);var l3_nuv = new o_tmp5(),
              f419w = mp5c8r[mp5c8r['length'] - 0x1]['currentNSMap'],
              fwi19x = o_r8c5mp(iwd612, ke0y_, l3_nuv, f419w, pmt, msr5t),
              $ke0_y = l3_nuv['length'];if (!l3_nuv['closed'] && o_b8zcph(iwd612, fwi19x, l3_nuv['tagName'], $0y_) && (l3_nuv['closed'] = !0x0, cob8zh['nbsp'] || msr5t['warning']('unclosed xml attribute')), ald6v && $ke0_y) {
            for (var x9fg4w = o_h8cbz(ald6v, {}), crmp85 = 0x0; $ke0_y > crmp85; crmp85++) {
              var pm5rq = l3_nuv[crmp85];ye$k_(pm5rq['offset']), pm5rq['locator'] = o_h8cbz(ald6v, {});
            }zcmp8r['locator'] = x9fg4w, o_g8hzb(l3_nuv, zcmp8r, f419w) && mp5c8r['push'](l3_nuv), zcmp8r['locator'] = ald6v;
          } else o_g8hzb(l3_nuv, zcmp8r, f419w) && mp5c8r['push'](l3_nuv);'http://www.w3.org/1999/xhtml' !== l3_nuv['uri'] || l3_nuv['closed'] ? fwi19x++ : fwi19x = o_uk_ne(iwd612, fwi19x, l3_nuv['tagName'], pmt, zcmp8r);}
    } catch (h8zgob) {
      msr5t['error']('element parse error: ' + h8zgob), fwi19x = -0x1;
    }fwi19x > j$k ? j$k = fwi19x : e$0j(Math['max'](ke0y_, j$k) + 0x1);
  }
}function o_h8cbz(zphc8r, bhzc8o) {
  return bhzc8o['lineNumber'] = zphc8r['lineNumber'], bhzc8o['columnNumber'] = zphc8r['columnNumber'], bhzc8o;
}function o_r8c5mp(i6d2w, y_$ek, f2w91i, fx94og, mtq5s7, _u3nlv) {
  for (var zc8rm, ogzb4h, qtrmp = ++y_$ek, uyk_en = o_ct5rm;;) {
    var c8hrp = i6d2w['charAt'](qtrmp);switch (c8hrp) {case '=':
        if (uyk_en === o_xgw9) zc8rm = i6d2w['slice'](y_$ek, qtrmp), uyk_en = o_ulnva3;else {
          if (uyk_en !== o_nu_y3e) throw new Error('attribute equal must after attrName');uyk_en = o_ulnva3;
        }break;case '\x27':case '\x22':
        if (uyk_en === o_ulnva3 || uyk_en === o_xgw9) {
          if (uyk_en === o_xgw9 && (_u3nlv['warning']('attribute value must after "="'), zc8rm = i6d2w['slice'](y_$ek, qtrmp)), y_$ek = qtrmp + 0x1, qtrmp = i6d2w['indexOf'](c8hrp, y_$ek), !(qtrmp > 0x0)) throw new Error('attribute value no end \'' + c8hrp + '\' match');ogzb4h = i6d2w['slice'](y_$ek, qtrmp)['replace'](/&#?\w+;/g, mtq5s7), f2w91i['add'](zc8rm, ogzb4h, y_$ek - 0x1), uyk_en = o_x491wf;
        } else {
          if (uyk_en != o_uke_n) throw new Error('attribute value must after "="');ogzb4h = i6d2w['slice'](y_$ek, qtrmp)['replace'](/&#?\w+;/g, mtq5s7), f2w91i['add'](zc8rm, ogzb4h, y_$ek), _u3nlv['warning']('attribute "' + zc8rm + '" missed start quot(' + c8hrp + ')!!'), y_$ek = qtrmp + 0x1, uyk_en = o_x491wf;
        }break;case '/':
        switch (uyk_en) {case o_ct5rm:
            f2w91i['setTagName'](i6d2w['slice'](y_$ek, qtrmp));case o_x491wf:case o_mc5rpt:case o_y$0_ek:
            uyk_en = o_y$0_ek, f2w91i['closed'] = !0x0;case o_uke_n:case o_xgw9:case o_nu_y3e:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _u3nlv['error']('unexpected end of input'), uyk_en == o_ct5rm && f2w91i['setTagName'](i6d2w['slice'](y_$ek, qtrmp)), qtrmp;case '>':
        switch (uyk_en) {case o_ct5rm:
            f2w91i['setTagName'](i6d2w['slice'](y_$ek, qtrmp));case o_x491wf:case o_mc5rpt:case o_y$0_ek:
            break;case o_uke_n:case o_xgw9:
            ogzb4h = i6d2w['slice'](y_$ek, qtrmp), '/' === ogzb4h['slice'](-0x1) && (f2w91i['closed'] = !0x0, ogzb4h = ogzb4h['slice'](0x0, -0x1));case o_nu_y3e:
            uyk_en === o_nu_y3e && (ogzb4h = zc8rm), uyk_en == o_uke_n ? (_u3nlv['warning']('attribute "' + ogzb4h + '" missed quot(")!!'), f2w91i['add'](zc8rm, ogzb4h['replace'](/&#?\w+;/g, mtq5s7), y_$ek)) : ('http://www.w3.org/1999/xhtml' === fx94og[''] && ogzb4h['match'](/^(?:disabled|checked|selected)$/i) || _u3nlv['warning']('attribute "' + ogzb4h + '" missed value!! "' + ogzb4h + '" instead!!'), f2w91i['add'](ogzb4h, ogzb4h, y_$ek));break;case o_ulnva3:
            throw new Error('attribute value missed!!');}return qtrmp;case '\u0080':
        c8hrp = '\x20';default:
        if ('\x20' >= c8hrp) switch (uyk_en) {case o_ct5rm:
            f2w91i['setTagName'](i6d2w['slice'](y_$ek, qtrmp)), uyk_en = o_mc5rpt;break;case o_xgw9:
            zc8rm = i6d2w['slice'](y_$ek, qtrmp), uyk_en = o_nu_y3e;break;case o_uke_n:
            var ogzb4h = i6d2w['slice'](y_$ek, qtrmp)['replace'](/&#?\w+;/g, mtq5s7);_u3nlv['warning']('attribute "' + ogzb4h + '" missed quot(")!!'), f2w91i['add'](zc8rm, ogzb4h, y_$ek);case o_x491wf:
            uyk_en = o_mc5rpt;} else switch (uyk_en) {case o_nu_y3e:
            {
              f2w91i['tagName'];
            }'http://www.w3.org/1999/xhtml' === fx94og[''] && zc8rm['match'](/^(?:disabled|checked|selected)$/i) || _u3nlv['warning']('attribute "' + zc8rm + '" missed value!! "' + zc8rm + '" instead2!!'), f2w91i['add'](zc8rm, zc8rm, y_$ek), y_$ek = qtrmp, uyk_en = o_xgw9;break;case o_x491wf:
            _u3nlv['warning']('attribute space is required"' + zc8rm + '\x22!!');case o_mc5rpt:
            uyk_en = o_xgw9, y_$ek = qtrmp;break;case o_ulnva3:
            uyk_en = o_uke_n, y_$ek = qtrmp;break;case o_y$0_ek:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}qtrmp++;
  }
}function o_g8hzb(dfw21, $eykj0, ukye0) {
  for (var p8m5rc = dfw21['tagName'], mc8zpr = null, ix1fw = dfw21['length']; ix1fw--;) {
    var _lvn = dfw21[ix1fw],
        crmz8 = _lvn['qName'],
        vla2 = _lvn['value'],
        m58pr = crmz8['indexOf'](':');if (m58pr > 0x0) var i1f9xw = _lvn['prefix'] = crmz8['slice'](0x0, m58pr),
        d2w61i = crmz8['slice'](m58pr + 0x1),
        czrph = 'xmlns' === i1f9xw && d2w61i;else d2w61i = crmz8, i1f9xw = null, czrph = 'xmlns' === crmz8 && '';_lvn['localName'] = d2w61i, czrph !== !0x1 && (null == mc8zpr && (mc8zpr = {}, o_lnua3v(ukye0, ukye0 = {})), ukye0[czrph] = mc8zpr[czrph] = vla2, _lvn['uri'] = 'http://www.w3.org/2000/xmlns/', $eykj0['startPrefixMapping'](czrph, vla2));
  }for (var ix1fw = dfw21['length']; ix1fw--;) {
    _lvn = dfw21[ix1fw];var i1f9xw = _lvn['prefix'];i1f9xw && ('xml' === i1f9xw && (_lvn['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== i1f9xw && (_lvn['uri'] = ukye0[i1f9xw || '']));
  }var m58pr = p8m5rc['indexOf'](':');m58pr > 0x0 ? (i1f9xw = dfw21['prefix'] = p8m5rc['slice'](0x0, m58pr), d2w61i = dfw21['localName'] = p8m5rc['slice'](m58pr + 0x1)) : (i1f9xw = null, d2w61i = dfw21['localName'] = p8m5rc);var ho4zb = dfw21['uri'] = ukye0[i1f9xw || ''];if ($eykj0['startElement'](ho4zb, d2w61i, p8m5rc, dfw21), !dfw21['closed']) return dfw21['currentNSMap'] = ukye0, dfw21['localNSMap'] = mc8zpr, !0x0;if ($eykj0['endElement'](ho4zb, d2w61i, p8m5rc), mc8zpr) {
    for (i1f9xw in mc8zpr) $eykj0['endPrefixMapping'](i1f9xw);
  }
}function o_uk_ne(pbhz8c, e0uk_, i1fd2w, pcmtr, o4bzh) {
  if (/^(?:script|textarea)$/i['test'](i1fd2w)) {
    var gh4ob = pbhz8c['indexOf']('</' + i1fd2w + '>', e0uk_),
        y0ej$k = pbhz8c['substring'](e0uk_ + 0x1, gh4ob);if (/[&<]/['test'](y0ej$k)) return (/^script$/i['test'](i1fd2w) ? (o4bzh['characters'](y0ej$k, 0x0, y0ej$k['length']), gh4ob) : (y0ej$k = y0ej$k['replace'](/&#?\w+;/g, pcmtr), o4bzh['characters'](y0ej$k, 0x0, y0ej$k['length']), gh4ob)
    );
  }return e0uk_ + 0x1;
}function o_b8zcph(i9x1, dw1f2, tc5p, iw19xf) {
  var w9fg4 = iw19xf[tc5p];return null == w9fg4 && (w9fg4 = i9x1['lastIndexOf']('</' + tc5p + '>'), dw1f2 > w9fg4 && (w9fg4 = i9x1['lastIndexOf']('</' + tc5p)), iw19xf[tc5p] = w9fg4), dw1f2 > w9fg4;
}function o_lnua3v(t5prq, l3vna6) {
  for (var enuk_ in t5prq) l3vna6[enuk_] = t5prq[enuk_];
}function o_$yej(k$0ye_, d2alv, li26a, phbc8) {
  var g4bhoz = k$0ye_['charAt'](d2alv + 0x2);switch (g4bhoz) {case '-':
      if ('-' === k$0ye_['charAt'](d2alv + 0x3)) {
        var id1 = k$0ye_['indexOf']('-->', d2alv + 0x4);return id1 > d2alv ? (li26a['comment'](k$0ye_, d2alv + 0x4, id1 - d2alv - 0x4), id1 + 0x3) : (phbc8['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == k$0ye_['substr'](d2alv + 0x3, 0x6)) {
        var id1 = k$0ye_['indexOf'](']]>', d2alv + 0x9);return li26a['startCDATA'](), li26a['characters'](k$0ye_, d2alv + 0x9, id1 - d2alv - 0x9), li26a['endCDATA'](), id1 + 0x3;
      }var ul3_v = o_trqms(k$0ye_, d2alv),
          o4gfx = ul3_v['length'];if (o4gfx > 0x1 && /!doctype/i['test'](ul3_v[0x0][0x0])) {
        var phrzc = ul3_v[0x1][0x0],
            a62id = o4gfx > 0x3 && /^public$/i['test'](ul3_v[0x2][0x0]) && ul3_v[0x3][0x0],
            x9wf = o4gfx > 0x4 && ul3_v[0x4][0x0],
            bhocz8 = ul3_v[o4gfx - 0x1];return li26a['startDTD'](phrzc, a62id && a62id['replace'](/^(['"])(.*?)\1$/, '$2'), x9wf && x9wf['replace'](/^(['"])(.*?)\1$/, '$2')), li26a['endDTD'](), bhocz8['index'] + bhocz8[0x0]['length'];
      }}return -0x1;
}function o_ai162(vd62a, bxgo4, p8hz) {
  var _$0yk = vd62a['indexOf']('?>', bxgo4);if (_$0yk) {
    var n3_yv = vd62a['substring'](bxgo4, _$0yk)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (n3_yv) {
      {
        n3_yv[0x0]['length'];
      }return p8hz['processingInstruction'](n3_yv[0x1], n3_yv[0x2]), _$0yk + 0x2;
    }return -0x1;
  }return -0x1;
}function o_tmp5() {}function o_mp58(ey0k_$, v6da) {
  return ey0k_$['__proto__'] = v6da, ey0k_$;
}function o_trqms(hozcb8, jke$y0) {
  var bx4og9,
      dw162i = [],
      _uvnl3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_uvnl3['lastIndex'] = jke$y0, _uvnl3['exec'](hozcb8); bx4og9 = _uvnl3['exec'](hozcb8);) if (dw162i['push'](bx4og9), bx4og9[0x1]) return dw162i;
}var o_cpz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_tsrm = new RegExp('[\\-\\.0-9' + o_cpz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_knye_u = new RegExp('^' + o_cpz['source'] + o_tsrm['source'] + '*(?::' + o_cpz['source'] + o_tsrm['source'] + '*)?$'),
    o_ct5rm = 0x0,
    o_xgw9 = 0x1,
    o_nu_y3e = 0x2,
    o_ulnva3 = 0x3,
    o_uke_n = 0x4,
    o_x491wf = 0x5,
    o_mc5rpt = 0x6,
    o_y$0_ek = 0x7;o_i6l2ad['prototype'] = { 'parse': function (obz4gh, keyj0$, _nekuy) {
    var fxog94 = this['domBuilder'];fxog94['startDocument'](), o_lnua3v(keyj0$, keyj0$ = {}), o_ox9g(obz4gh, keyj0$, _nekuy, fxog94, this['errorHandler']), fxog94['endDocument']();
  } }, o_tmp5['prototype'] = { 'setTagName': function (l3nv_) {
    if (!o_knye_u['test'](l3nv_)) throw new Error('invalid tagName:' + l3nv_);this['tagName'] = l3nv_;
  }, 'add': function (uv3_ln, uy_e0k, p5ctm) {
    if (!o_knye_u['test'](uv3_ln)) throw new Error('invalid attribute:' + uv3_ln);this[this['length']++] = { 'qName': uv3_ln, 'value': uy_e0k, 'offset': p5ctm };
  }, 'length': 0x0, 'getLocalName': function (zogbh8) {
    return this[zogbh8]['localName'];
  }, 'getLocator': function (bzoc) {
    return this[bzoc]['locator'];
  }, 'getQName': function (ixw19) {
    return this[ixw19]['qName'];
  }, 'getURI': function (m8r5cp) {
    return this[m8r5cp]['uri'];
  }, 'getValue': function (ke$y0) {
    return this[ke$y0]['value'];
  } }, o_mp58({}, o_mp58['prototype']) instanceof o_mp58 || (o_mp58 = function (dval36, fxiw1) {
  function og4x9() {}og4x9['prototype'] = fxiw1, og4x9 = new og4x9();for (fxiw1 in dval36) og4x9[fxiw1] = dval36[fxiw1];return og4x9;
}), exports['XMLReader'] = o_i6l2ad;