var O = wx.$C;
function h_mxq9() {}function h_pctgs0(xqm9f6, okl3, l4ok18, pwu0, kl84o3) {
  function tpw0su(e_5jzv) {
    if (e_5jzv > 0xffff) {
      e_5jzv -= 0x10000;var nxq = 0xd800 + (e_5jzv >> 0xa),
          fehmq = 0xdc00 + (0x3ff & e_5jzv);return String['fromCharCode'](nxq, fehmq);
    }return String['fromCharCode'](e_5jzv);
  }function s0tpu(y3k48b) {
    var grip$c = y3k48b['slice'](0x1, -0x1);return grip$c in l4ok18 ? l4ok18[grip$c] : '#' === grip$c['charAt'](0x0) ? tpw0su(parseInt(grip$c['substr'](0x1)['replace']('x', '0x'))) : (kl84o3['error']('entity not found:' + y3k48b), y3k48b);
  }function l18kon(pgtus0) {
    if (pgtus0 > y4a73) {
      var wba7u2 = xqm9f6['substring'](y4a73, pgtus0)['replace'](/&#?\w+;/g, s0tpu);n6l1d && zj5hve(y4a73), pwu0['characters'](wba7u2, 0x0, pgtus0 - y4a73), y4a73 = pgtus0;
    }
  }function zj5hve(v5hfze, qmhxe) {
    for (; v5hfze >= gpcs$ && (qmhxe = eqzm['exec'](xqm9f6));) a3k4 = qmhxe['index'], gpcs$ = a3k4 + qmhxe[0x0]['length'], n6l1d['lineNumber']++;n6l1d['columnNumber'] = v5hfze - a3k4 + 0x1;
  }for (var a3k4 = 0x0, gpcs$ = 0x0, eqzm = /.*(?:\r\n?|\n)|.*$/g, n6l1d = pwu0['locator'], nod8l = [{ 'currentNSMap': okl3 }], q9dn6 = {}, y4a73 = 0x0;;) {
    try {
      var e_v5j = xqm9f6['indexOf']('<', y4a73);if (0x0 > e_v5j) {
        if (!xqm9f6['substr'](y4a73)['match'](/^\s*$/)) {
          var ezfmq = pwu0['doc'],
              twua72 = ezfmq['createTextNode'](xqm9f6['substr'](y4a73));ezfmq['appendChild'](twua72), pwu0['currentElement'] = twua72;
        }return;
      }switch (e_v5j > y4a73 && l18kon(e_v5j), xqm9f6['charAt'](e_v5j + 0x1)) {case '/':
          var n18lk = xqm9f6['indexOf']('>', e_v5j + 0x3),
              $pc0s = xqm9f6['substring'](e_v5j + 0x2, n18lk),
              rcip = nod8l['pop']();0x0 > n18lk ? ($pc0s = xqm9f6['substring'](e_v5j + 0x2)['replace'](/[\s<].*/, ''), kl84o3['error']('end tag name: ' + $pc0s + ' is not complete:' + rcip['tagName']), n18lk = e_v5j + 0x1 + $pc0s['length']) : $pc0s['match'](/\s</) && ($pc0s = $pc0s['replace'](/[\s<].*/, ''), kl84o3['error']('end tag name: ' + $pc0s + ' maybe not complete'), n18lk = e_v5j + 0x1 + $pc0s['length']);var gprs$ = rcip['localNSMap'],
              xmqd9 = rcip['tagName'] == $pc0s,
              ehmzq = xmqd9 || rcip['tagName'] && rcip['tagName']['toLowerCase']() == $pc0s['toLowerCase']();if (ehmzq) {
            if (pwu0['endElement'](rcip['uri'], rcip['localName'], $pc0s), gprs$) {
              for (var qzehm in gprs$) pwu0['endPrefixMapping'](qzehm);
            }xmqd9 || kl84o3['fatalError']('end tag name: ' + $pc0s + ' is not match the current start tagName:' + rcip['tagName']);
          } else nod8l['push'](rcip);n18lk++;break;case '?':
          n6l1d && zj5hve(e_v5j), n18lk = h_do9n(xqm9f6, e_v5j, pwu0);break;case '!':
          n6l1d && zj5hve(e_v5j), n18lk = h_y3a(xqm9f6, e_v5j, pwu0, kl84o3);break;default:
          n6l1d && zj5hve(e_v5j);var x1nd96 = new h_pg0tus(),
              stu0 = nod8l[nod8l['length'] - 0x1]['currentNSMap'],
              n18lk = h_sgutp(xqm9f6, e_v5j, x1nd96, stu0, s0tpu, kl84o3),
              cpig$r = x1nd96['length'];if (!x1nd96['closed'] && h_d61nx(xqm9f6, n18lk, x1nd96['tagName'], q9dn6) && (x1nd96['closed'] = !0x0, l4ok18['nbsp'] || kl84o3['warning']('unclosed xml attribute')), n6l1d && cpig$r) {
            for (var bk4y3 = h_hm9fq(n6l1d, {}), u07w2 = 0x0; cpig$r > u07w2; u07w2++) {
              var gupst0 = x1nd96[u07w2];zj5hve(gupst0['offset']), gupst0['locator'] = h_hm9fq(n6l1d, {});
            }pwu0['locator'] = bk4y3, h_wb27ay(x1nd96, pwu0, stu0) && nod8l['push'](x1nd96), pwu0['locator'] = n6l1d;
          } else h_wb27ay(x1nd96, pwu0, stu0) && nod8l['push'](x1nd96);'http://www.w3.org/1999/xhtml' !== x1nd96['uri'] || x1nd96['closed'] ? n18lk++ : n18lk = h_pir$c(xqm9f6, n18lk, x1nd96['tagName'], s0tpu, pwu0);}
    } catch (fzh5ev) {
      kl84o3['error']('element parse error: ' + fzh5ev), n18lk = -0x1;
    }n18lk > y4a73 ? y4a73 = n18lk : l18kon(Math['max'](e_v5j, y4a73) + 0x1);
  }
}function h_hm9fq(by73a2, zm5efh) {
  return zm5efh['lineNumber'] = by73a2['lineNumber'], zm5efh['columnNumber'] = by73a2['columnNumber'], zm5efh;
}function h_sgutp(qd9, hf5em, p$s, qhfezm, qx96m, tuw27) {
  for (var k38yb, d1x6, _e5jvz = ++hf5em, $igcpr = h_uw02;;) {
    var ig$rp = qd9['charAt'](_e5jvz);switch (ig$rp) {case '=':
        if ($igcpr === h_zef5hm) k38yb = qd9['slice'](hf5em, _e5jvz), $igcpr = h_q6f9x;else {
          if ($igcpr !== h_pi$rc) throw new Error('attribute equal must after attrName');$igcpr = h_q6f9x;
        }break;case '\x27':case '\x22':
        if ($igcpr === h_q6f9x || $igcpr === h_zef5hm) {
          if ($igcpr === h_zef5hm && (tuw27['warning']('attribute value must after "="'), k38yb = qd9['slice'](hf5em, _e5jvz)), hf5em = _e5jvz + 0x1, _e5jvz = qd9['indexOf'](ig$rp, hf5em), !(_e5jvz > 0x0)) throw new Error('attribute value no end \'' + ig$rp + '\' match');d1x6 = qd9['slice'](hf5em, _e5jvz)['replace'](/&#?\w+;/g, qx96m), p$s['add'](k38yb, d1x6, hf5em - 0x1), $igcpr = h_pst0g;
        } else {
          if ($igcpr != h_hqmfx) throw new Error('attribute value must after "="');d1x6 = qd9['slice'](hf5em, _e5jvz)['replace'](/&#?\w+;/g, qx96m), p$s['add'](k38yb, d1x6, hf5em), tuw27['warning']('attribute "' + k38yb + '" missed start quot(' + ig$rp + ')!!'), hf5em = _e5jvz + 0x1, $igcpr = h_pst0g;
        }break;case '/':
        switch ($igcpr) {case h_uw02:
            p$s['setTagName'](qd9['slice'](hf5em, _e5jvz));case h_pst0g:case h_ehvz5j:case h_r$cg:
            $igcpr = h_r$cg, p$s['closed'] = !0x0;case h_hqmfx:case h_zef5hm:case h_pi$rc:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return tuw27['error']('unexpected end of input'), $igcpr == h_uw02 && p$s['setTagName'](qd9['slice'](hf5em, _e5jvz)), _e5jvz;case '>':
        switch ($igcpr) {case h_uw02:
            p$s['setTagName'](qd9['slice'](hf5em, _e5jvz));case h_pst0g:case h_ehvz5j:case h_r$cg:
            break;case h_hqmfx:case h_zef5hm:
            d1x6 = qd9['slice'](hf5em, _e5jvz), '/' === d1x6['slice'](-0x1) && (p$s['closed'] = !0x0, d1x6 = d1x6['slice'](0x0, -0x1));case h_pi$rc:
            $igcpr === h_pi$rc && (d1x6 = k38yb), $igcpr == h_hqmfx ? (tuw27['warning']('attribute "' + d1x6 + '" missed quot(")!!'), p$s['add'](k38yb, d1x6['replace'](/&#?\w+;/g, qx96m), hf5em)) : ('http://www.w3.org/1999/xhtml' === qhfezm[''] && d1x6['match'](/^(?:disabled|checked|selected)$/i) || tuw27['warning']('attribute "' + d1x6 + '" missed value!! "' + d1x6 + '" instead!!'), p$s['add'](d1x6, d1x6, hf5em));break;case h_q6f9x:
            throw new Error('attribute value missed!!');}return _e5jvz;case '\u0080':
        ig$rp = '\x20';default:
        if ('\x20' >= ig$rp) switch ($igcpr) {case h_uw02:
            p$s['setTagName'](qd9['slice'](hf5em, _e5jvz)), $igcpr = h_ehvz5j;break;case h_zef5hm:
            k38yb = qd9['slice'](hf5em, _e5jvz), $igcpr = h_pi$rc;break;case h_hqmfx:
            var d1x6 = qd9['slice'](hf5em, _e5jvz)['replace'](/&#?\w+;/g, qx96m);tuw27['warning']('attribute "' + d1x6 + '" missed quot(")!!'), p$s['add'](k38yb, d1x6, hf5em);case h_pst0g:
            $igcpr = h_ehvz5j;} else switch ($igcpr) {case h_pi$rc:
            {
              p$s['tagName'];
            }'http://www.w3.org/1999/xhtml' === qhfezm[''] && k38yb['match'](/^(?:disabled|checked|selected)$/i) || tuw27['warning']('attribute "' + k38yb + '" missed value!! "' + k38yb + '" instead2!!'), p$s['add'](k38yb, k38yb, hf5em), hf5em = _e5jvz, $igcpr = h_zef5hm;break;case h_pst0g:
            tuw27['warning']('attribute space is required"' + k38yb + '\x22!!');case h_ehvz5j:
            $igcpr = h_zef5hm, hf5em = _e5jvz;break;case h_q6f9x:
            $igcpr = h_hqmfx, hf5em = _e5jvz;break;case h_r$cg:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_e5jvz++;
  }
}function h_wb27ay(y48k3b, ws0utp, d9o6) {
  for (var dn9x6 = y48k3b['tagName'], jz5_v = null, jv5e_ = y48k3b['length']; jv5e_--;) {
    var u2ws = y48k3b[jv5e_],
        ze5m = u2ws['qName'],
        o6l1n = u2ws['value'],
        zejv5 = ze5m['indexOf'](':');if (zejv5 > 0x0) var vfez5h = u2ws['prefix'] = ze5m['slice'](0x0, zejv5),
        zhef5 = ze5m['slice'](zejv5 + 0x1),
        fqmx = 'xmlns' === vfez5h && zhef5;else zhef5 = ze5m, vfez5h = null, fqmx = 'xmlns' === ze5m && '';u2ws['localName'] = zhef5, fqmx !== !0x1 && (null == jz5_v && (jz5_v = {}, h_scgtp0(d9o6, d9o6 = {})), d9o6[fqmx] = jz5_v[fqmx] = o6l1n, u2ws['uri'] = 'http://www.w3.org/2000/xmlns/', ws0utp['startPrefixMapping'](fqmx, o6l1n));
  }for (var jv5e_ = y48k3b['length']; jv5e_--;) {
    u2ws = y48k3b[jv5e_];var vfez5h = u2ws['prefix'];vfez5h && ('xml' === vfez5h && (u2ws['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vfez5h && (u2ws['uri'] = d9o6[vfez5h || '']));
  }var zejv5 = dn9x6['indexOf'](':');zejv5 > 0x0 ? (vfez5h = y48k3b['prefix'] = dn9x6['slice'](0x0, zejv5), zhef5 = y48k3b['localName'] = dn9x6['slice'](zejv5 + 0x1)) : (vfez5h = null, zhef5 = y48k3b['localName'] = dn9x6);var fm9hxq = y48k3b['uri'] = d9o6[vfez5h || ''];if (ws0utp['startElement'](fm9hxq, zhef5, dn9x6, y48k3b), !y48k3b['closed']) return y48k3b['currentNSMap'] = d9o6, y48k3b['localNSMap'] = jz5_v, !0x0;if (ws0utp['endElement'](fm9hxq, zhef5, dn9x6), jz5_v) {
    for (vfez5h in jz5_v) ws0utp['endPrefixMapping'](vfez5h);
  }
}function h_pir$c(wb72y, zqehm, klno, mq6dx, efxmhq) {
  if (/^(?:script|textarea)$/i['test'](klno)) {
    var hm5fze = wb72y['indexOf']('</' + klno + '>', zqehm),
        l8k3o = wb72y['substring'](zqehm + 0x1, hm5fze);if (/[&<]/['test'](l8k3o)) return (/^script$/i['test'](klno) ? (efxmhq['characters'](l8k3o, 0x0, l8k3o['length']), hm5fze) : (l8k3o = l8k3o['replace'](/&#?\w+;/g, mq6dx), efxmhq['characters'](l8k3o, 0x0, l8k3o['length']), hm5fze)
    );
  }return zqehm + 0x1;
}function h_d61nx(vz5je_, xq6fm, jzhv5, g$rs) {
  var ab2wy = g$rs[jzhv5];return null == ab2wy && (ab2wy = vz5je_['lastIndexOf']('</' + jzhv5 + '>'), xq6fm > ab2wy && (ab2wy = vz5je_['lastIndexOf']('</' + jzhv5)), g$rs[jzhv5] = ab2wy), xq6fm > ab2wy;
}function h_scgtp0(t0w27u, y73a4) {
  for (var v5ez in t0w27u) y73a4[v5ez] = t0w27u[v5ez];
}function h_y3a(cgsp$, md9q6x, ol418k, i$prgc) {
  var w2yab = cgsp$['charAt'](md9q6x + 0x2);switch (w2yab) {case '-':
      if ('-' === cgsp$['charAt'](md9q6x + 0x3)) {
        var nl1d6o = cgsp$['indexOf']('-->', md9q6x + 0x4);return nl1d6o > md9q6x ? (ol418k['comment'](cgsp$, md9q6x + 0x4, nl1d6o - md9q6x - 0x4), nl1d6o + 0x3) : (i$prgc['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cgsp$['substr'](md9q6x + 0x3, 0x6)) {
        var nl1d6o = cgsp$['indexOf'](']]>', md9q6x + 0x9);return ol418k['startCDATA'](), ol418k['characters'](cgsp$, md9q6x + 0x9, nl1d6o - md9q6x - 0x9), ol418k['endCDATA'](), nl1d6o + 0x3;
      }var fq9xm6 = h_jevh5z(cgsp$, md9q6x),
          sp0tgc = fq9xm6['length'];if (sp0tgc > 0x1 && /!doctype/i['test'](fq9xm6[0x0][0x0])) {
        var o1l4k8 = fq9xm6[0x1][0x0],
            fze5mh = sp0tgc > 0x3 && /^public$/i['test'](fq9xm6[0x2][0x0]) && fq9xm6[0x3][0x0],
            v5hjz = sp0tgc > 0x4 && fq9xm6[0x4][0x0],
            o18dn = fq9xm6[sp0tgc - 0x1];return ol418k['startDTD'](o1l4k8, fze5mh && fze5mh['replace'](/^(['"])(.*?)\1$/, '$2'), v5hjz && v5hjz['replace'](/^(['"])(.*?)\1$/, '$2')), ol418k['endDTD'](), o18dn['index'] + o18dn[0x0]['length'];
      }}return -0x1;
}function h_do9n(tsupw0, gr$psc, pscg$0) {
  var hvz5f = tsupw0['indexOf']('?>', gr$psc);if (hvz5f) {
    var hz5jv = tsupw0['substring'](gr$psc, hvz5f)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hz5jv) {
      {
        hz5jv[0x0]['length'];
      }return pscg$0['processingInstruction'](hz5jv[0x1], hz5jv[0x2]), hvz5f + 0x2;
    }return -0x1;
  }return -0x1;
}function h_pg0tus() {}function h_spw(ezf5, g0$s) {
  return ezf5['__proto__'] = g0$s, ezf5;
}function h_jevh5z(fhqmx9, p0ustw) {
  var b2a7y3,
      l48o1 = [],
      uptg0s = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (uptg0s['lastIndex'] = p0ustw, uptg0s['exec'](fhqmx9); b2a7y3 = uptg0s['exec'](fhqmx9);) if (l48o1['push'](b2a7y3), b2a7y3[0x1]) return l48o1;
}var h_f9qmx6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_ev5_j = new RegExp('[\\-\\.0-9' + h_f9qmx6['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_igcr = new RegExp('^' + h_f9qmx6['source'] + h_ev5_j['source'] + '*(?::' + h_f9qmx6['source'] + h_ev5_j['source'] + '*)?$'),
    h_uw02 = 0x0,
    h_zef5hm = 0x1,
    h_pi$rc = 0x2,
    h_q6f9x = 0x3,
    h_hqmfx = 0x4,
    h_pst0g = 0x5,
    h_ehvz5j = 0x6,
    h_r$cg = 0x7;h_mxq9['prototype'] = { 'parse': function (pic, ln61do, y438lk) {
    var v5_z = this['domBuilder'];v5_z['startDocument'](), h_scgtp0(ln61do, ln61do = {}), h_pctgs0(pic, ln61do, y438lk, v5_z, this['errorHandler']), v5_z['endDocument']();
  } }, h_pg0tus['prototype'] = { 'setTagName': function (fe5hv) {
    if (!h_igcr['test'](fe5hv)) throw new Error('invalid tagName:' + fe5hv);this['tagName'] = fe5hv;
  }, 'add': function (x9fm, tcgs0, a7wu2t) {
    if (!h_igcr['test'](x9fm)) throw new Error('invalid attribute:' + x9fm);this[this['length']++] = { 'qName': x9fm, 'value': tcgs0, 'offset': a7wu2t };
  }, 'length': 0x0, 'getLocalName': function (mhexfq) {
    return this[mhexfq]['localName'];
  }, 'getLocator': function (awt2) {
    return this[awt2]['locator'];
  }, 'getQName': function (wb2ua7) {
    return this[wb2ua7]['qName'];
  }, 'getURI': function (oln1k8) {
    return this[oln1k8]['uri'];
  }, 'getValue': function (gs0$cp) {
    return this[gs0$cp]['value'];
  } }, h_spw({}, h_spw['prototype']) instanceof h_spw || (h_spw = function (ok83l4, vhjz) {
  function _ejv5z() {}_ejv5z['prototype'] = vhjz, _ejv5z = new _ejv5z();for (vhjz in ok83l4) _ejv5z[vhjz] = ok83l4[vhjz];return _ejv5z;
}), exports['XMLReader'] = h_mxq9;