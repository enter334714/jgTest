var o = wx.$U;
function ud95w() {}function umqioj(qjoih, r0y8, kr6ac_, puj3, ev$un) {
  function ufp4(fsnu) {
    if (fsnu > 0xffff) {
      fsnu -= 0x10000;var u$fs = 0xd800 + (fsnu >> 0xa),
          _sn$vk = 0xdc00 + (0x3ff & fsnu);return String['fromCharCode'](u$fs, _sn$vk);
    }return String['fromCharCode'](fsnu);
  }function nfe$(e3p4) {
    var ckv_6a = e3p4['slice'](0x1, -0x1);return ckv_6a in kr6ac_ ? kr6ac_[ckv_6a] : '#' === ckv_6a['charAt'](0x0) ? ufp4(parseInt(ckv_6a['substr'](0x1)['replace']('x', '0x'))) : (ev$un['error']('entity not found:' + e3p4), e3p4);
  }function qhoilm(a0ckr6) {
    if (a0ckr6 > j43im) {
      var hiqo = qjoih['substring'](j43im, a0ckr6)['replace'](/&#?\w+;/g, nfe$);akrc_ && vakn_6(j43im), puj3['characters'](hiqo, 0x0, a0ckr6 - j43im), j43im = a0ckr6;
    }
  }function vakn_6(hj3m, kcv6_a) {
    for (; hj3m >= n$e_vs && (kcv6_a = ar6k0c['exec'](qjoih));) dt9zg5 = kcv6_a['index'], n$e_vs = dt9zg5 + kcv6_a[0x0]['length'], akrc_['lineNumber']++;akrc_['columnNumber'] = hj3m - dt9zg5 + 0x1;
  }for (var dt9zg5 = 0x0, n$e_vs = 0x0, ar6k0c = /.*(?:\r\n?|\n)|.*$/g, akrc_ = puj3['locator'], jf34u = [{ 'currentNSMap': r0y8 }], z5t9dg = {}, j43im = 0x0;;) {
    try {
      var f43jph = qjoih['indexOf']('<', j43im);if (0x0 > f43jph) {
        if (!qjoih['substr'](j43im)['match'](/^\s*$/)) {
          var kc_ = puj3['doc'],
              gqw7xl = kc_['createTextNode'](qjoih['substr'](j43im));kc_['appendChild'](gqw7xl), puj3['currentElement'] = gqw7xl;
        }return;
      }switch (f43jph > j43im && qhoilm(f43jph), qjoih['charAt'](f43jph + 0x1)) {case '/':
          var v_skn = qjoih['indexOf']('>', f43jph + 0x3),
              imjhqo = qjoih['substring'](f43jph + 0x2, v_skn),
              $_nsev = jf34u['pop']();0x0 > v_skn ? (imjhqo = qjoih['substring'](f43jph + 0x2)['replace'](/[\s<].*/, ''), ev$un['error']('end tag name: ' + imjhqo + ' is not complete:' + $_nsev['tagName']), v_skn = f43jph + 0x1 + imjhqo['length']) : imjhqo['match'](/\s</) && (imjhqo = imjhqo['replace'](/[\s<].*/, ''), ev$un['error']('end tag name: ' + imjhqo + ' maybe not complete'), v_skn = f43jph + 0x1 + imjhqo['length']);var e4pu$ = $_nsev['localNSMap'],
              lx7gq = $_nsev['tagName'] == imjhqo,
              ck6_ra = lx7gq || $_nsev['tagName'] && $_nsev['tagName']['toLowerCase']() == imjhqo['toLowerCase']();if (ck6_ra) {
            if (puj3['endElement']($_nsev['uri'], $_nsev['localName'], imjhqo), e4pu$) {
              for (var mjhoiq in e4pu$) puj3['endPrefixMapping'](mjhoiq);
            }lx7gq || ev$un['fatalError']('end tag name: ' + imjhqo + ' is not match the current start tagName:' + $_nsev['tagName']);
          } else jf34u['push']($_nsev);v_skn++;break;case '?':
          akrc_ && vakn_6(f43jph), v_skn = uoqihl(qjoih, f43jph, puj3);break;case '!':
          akrc_ && vakn_6(f43jph), v_skn = um4jp(qjoih, f43jph, puj3, ev$un);break;default:
          akrc_ && vakn_6(f43jph);var oqi = new ue$_sv(),
              wzdg5 = jf34u[jf34u['length'] - 0x1]['currentNSMap'],
              v_skn = unka6v(qjoih, f43jph, oqi, wzdg5, nfe$, ev$un),
              skvan = oqi['length'];if (!oqi['closed'] && uhijm3(qjoih, v_skn, oqi['tagName'], z5t9dg) && (oqi['closed'] = !0x0, kr6ac_['nbsp'] || ev$un['warning']('unclosed xml attribute')), akrc_ && skvan) {
            for (var epfsu = uac6kr_(akrc_, {}), d92t = 0x0; skvan > d92t; d92t++) {
              var pmh4 = oqi[d92t];vakn_6(pmh4['offset']), pmh4['locator'] = uac6kr_(akrc_, {});
            }puj3['locator'] = epfsu, ui43hjm(oqi, puj3, wzdg5) && jf34u['push'](oqi), puj3['locator'] = akrc_;
          } else ui43hjm(oqi, puj3, wzdg5) && jf34u['push'](oqi);'http://www.w3.org/1999/xhtml' !== oqi['uri'] || oqi['closed'] ? v_skn++ : v_skn = uiohqj(qjoih, v_skn, oqi['tagName'], nfe$, puj3);}
    } catch (c8br) {
      ev$un['error']('element parse error: ' + c8br), v_skn = -0x1;
    }v_skn > j43im ? j43im = v_skn : qhoilm(Math['max'](f43jph, j43im) + 0x1);
  }
}function uac6kr_(up$, lxqio7) {
  return lxqio7['lineNumber'] = up$['lineNumber'], lxqio7['columnNumber'] = up$['columnNumber'], lxqio7;
}function unka6v(pfe43u, dg9z7, g59zw, iqjomh, ef$nu, a6_kvn) {
  for (var euspf$, v$snk_, bcr81 = ++dg9z7, u3f4 = u$fu4pe;;) {
    var l9g7 = pfe43u['charAt'](bcr81);switch (l9g7) {case '=':
        if (u3f4 === uvk6an) euspf$ = pfe43u['slice'](dg9z7, bcr81), u3f4 = uholqm;else {
          if (u3f4 !== ufups$e) throw new Error('attribute equal must after attrName');u3f4 = uholqm;
        }break;case '\x27':case '\x22':
        if (u3f4 === uholqm || u3f4 === uvk6an) {
          if (u3f4 === uvk6an && (a6_kvn['warning']('attribute value must after "="'), euspf$ = pfe43u['slice'](dg9z7, bcr81)), dg9z7 = bcr81 + 0x1, bcr81 = pfe43u['indexOf'](l9g7, dg9z7), !(bcr81 > 0x0)) throw new Error('attribute value no end \'' + l9g7 + '\' match');v$snk_ = pfe43u['slice'](dg9z7, bcr81)['replace'](/&#?\w+;/g, ef$nu), g59zw['add'](euspf$, v$snk_, dg9z7 - 0x1), u3f4 = u_rc6;
        } else {
          if (u3f4 != unkvs$_) throw new Error('attribute value must after "="');v$snk_ = pfe43u['slice'](dg9z7, bcr81)['replace'](/&#?\w+;/g, ef$nu), g59zw['add'](euspf$, v$snk_, dg9z7), a6_kvn['warning']('attribute "' + euspf$ + '" missed start quot(' + l9g7 + ')!!'), dg9z7 = bcr81 + 0x1, u3f4 = u_rc6;
        }break;case '/':
        switch (u3f4) {case u$fu4pe:
            g59zw['setTagName'](pfe43u['slice'](dg9z7, bcr81));case u_rc6:case uvuns$:case ucvka:
            u3f4 = ucvka, g59zw['closed'] = !0x0;case unkvs$_:case uvk6an:case ufups$e:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return a6_kvn['error']('unexpected end of input'), u3f4 == u$fu4pe && g59zw['setTagName'](pfe43u['slice'](dg9z7, bcr81)), bcr81;case '>':
        switch (u3f4) {case u$fu4pe:
            g59zw['setTagName'](pfe43u['slice'](dg9z7, bcr81));case u_rc6:case uvuns$:case ucvka:
            break;case unkvs$_:case uvk6an:
            v$snk_ = pfe43u['slice'](dg9z7, bcr81), '/' === v$snk_['slice'](-0x1) && (g59zw['closed'] = !0x0, v$snk_ = v$snk_['slice'](0x0, -0x1));case ufups$e:
            u3f4 === ufups$e && (v$snk_ = euspf$), u3f4 == unkvs$_ ? (a6_kvn['warning']('attribute "' + v$snk_ + '" missed quot(")!!'), g59zw['add'](euspf$, v$snk_['replace'](/&#?\w+;/g, ef$nu), dg9z7)) : ('http://www.w3.org/1999/xhtml' === iqjomh[''] && v$snk_['match'](/^(?:disabled|checked|selected)$/i) || a6_kvn['warning']('attribute "' + v$snk_ + '" missed value!! "' + v$snk_ + '" instead!!'), g59zw['add'](v$snk_, v$snk_, dg9z7));break;case uholqm:
            throw new Error('attribute value missed!!');}return bcr81;case '\u0080':
        l9g7 = '\x20';default:
        if ('\x20' >= l9g7) switch (u3f4) {case u$fu4pe:
            g59zw['setTagName'](pfe43u['slice'](dg9z7, bcr81)), u3f4 = uvuns$;break;case uvk6an:
            euspf$ = pfe43u['slice'](dg9z7, bcr81), u3f4 = ufups$e;break;case unkvs$_:
            var v$snk_ = pfe43u['slice'](dg9z7, bcr81)['replace'](/&#?\w+;/g, ef$nu);a6_kvn['warning']('attribute "' + v$snk_ + '" missed quot(")!!'), g59zw['add'](euspf$, v$snk_, dg9z7);case u_rc6:
            u3f4 = uvuns$;} else switch (u3f4) {case ufups$e:
            {
              g59zw['tagName'];
            }'http://www.w3.org/1999/xhtml' === iqjomh[''] && euspf$['match'](/^(?:disabled|checked|selected)$/i) || a6_kvn['warning']('attribute "' + euspf$ + '" missed value!! "' + euspf$ + '" instead2!!'), g59zw['add'](euspf$, euspf$, dg9z7), dg9z7 = bcr81, u3f4 = uvk6an;break;case u_rc6:
            a6_kvn['warning']('attribute space is required"' + euspf$ + '\x22!!');case uvuns$:
            u3f4 = uvk6an, dg9z7 = bcr81;break;case uholqm:
            u3f4 = unkvs$_, dg9z7 = bcr81;break;case ucvka:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bcr81++;
  }
}function ui43hjm(_6kvan, o7lqxi, ybr) {
  for (var liqo7 = _6kvan['tagName'], _svk$ = null, _a6nvk = _6kvan['length']; _a6nvk--;) {
    var c_6ak = _6kvan[_a6nvk],
        holmq = c_6ak['qName'],
        kv_sna = c_6ak['value'],
        wg7lxq = holmq['indexOf'](':');if (wg7lxq > 0x0) var eu$4pf = c_6ak['prefix'] = holmq['slice'](0x0, wg7lxq),
        mihqoj = holmq['slice'](wg7lxq + 0x1),
        rcb10 = 'xmlns' === eu$4pf && mihqoj;else mihqoj = holmq, eu$4pf = null, rcb10 = 'xmlns' === holmq && '';c_6ak['localName'] = mihqoj, rcb10 !== !0x1 && (null == _svk$ && (_svk$ = {}, u$nve(ybr, ybr = {})), ybr[rcb10] = _svk$[rcb10] = kv_sna, c_6ak['uri'] = 'http://www.w3.org/2000/xmlns/', o7lqxi['startPrefixMapping'](rcb10, kv_sna));
  }for (var _a6nvk = _6kvan['length']; _a6nvk--;) {
    c_6ak = _6kvan[_a6nvk];var eu$4pf = c_6ak['prefix'];eu$4pf && ('xml' === eu$4pf && (c_6ak['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== eu$4pf && (c_6ak['uri'] = ybr[eu$4pf || '']));
  }var wg7lxq = liqo7['indexOf'](':');wg7lxq > 0x0 ? (eu$4pf = _6kvan['prefix'] = liqo7['slice'](0x0, wg7lxq), mihqoj = _6kvan['localName'] = liqo7['slice'](wg7lxq + 0x1)) : (eu$4pf = null, mihqoj = _6kvan['localName'] = liqo7);var iq7 = _6kvan['uri'] = ybr[eu$4pf || ''];if (o7lqxi['startElement'](iq7, mihqoj, liqo7, _6kvan), !_6kvan['closed']) return _6kvan['currentNSMap'] = ybr, _6kvan['localNSMap'] = _svk$, !0x0;if (o7lqxi['endElement'](iq7, mihqoj, liqo7), _svk$) {
    for (eu$4pf in _svk$) o7lqxi['endPrefixMapping'](eu$4pf);
  }
}function uiohqj(mjhqoi, xol, c_r6k, h3pf, e$fpu) {
  if (/^(?:script|textarea)$/i['test'](c_r6k)) {
    var z92d5 = mjhqoi['indexOf']('</' + c_r6k + '>', xol),
        ve$ns = mjhqoi['substring'](xol + 0x1, z92d5);if (/[&<]/['test'](ve$ns)) return (/^script$/i['test'](c_r6k) ? (e$fpu['characters'](ve$ns, 0x0, ve$ns['length']), z92d5) : (ve$ns = ve$ns['replace'](/&#?\w+;/g, h3pf), e$fpu['characters'](ve$ns, 0x0, ve$ns['length']), z92d5)
    );
  }return xol + 0x1;
}function uhijm3(xgw7lq, ca0rk, pju3f, c10) {
  var ioml = c10[pju3f];return null == ioml && (ioml = xgw7lq['lastIndexOf']('</' + pju3f + '>'), ca0rk > ioml && (ioml = xgw7lq['lastIndexOf']('</' + pju3f)), c10[pju3f] = ioml), ca0rk > ioml;
}function u$nve(_ka6rc, nak_s) {
  for (var fu4e$ in _ka6rc) nak_s[fu4e$] = _ka6rc[fu4e$];
}function um4jp($e_sv, us, wgl, r180yb) {
  var h4i3m = $e_sv['charAt'](us + 0x2);switch (h4i3m) {case '-':
      if ('-' === $e_sv['charAt'](us + 0x3)) {
        var rcka06 = $e_sv['indexOf']('-->', us + 0x4);return rcka06 > us ? (wgl['comment']($e_sv, us + 0x4, rcka06 - us - 0x4), rcka06 + 0x3) : (r180yb['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == $e_sv['substr'](us + 0x3, 0x6)) {
        var rcka06 = $e_sv['indexOf'](']]>', us + 0x9);return wgl['startCDATA'](), wgl['characters']($e_sv, us + 0x9, rcka06 - us - 0x9), wgl['endCDATA'](), rcka06 + 0x3;
      }var i3jh = uloqmih($e_sv, us),
          jio3mh = i3jh['length'];if (jio3mh > 0x1 && /!doctype/i['test'](i3jh[0x0][0x0])) {
        var oihj3m = i3jh[0x1][0x0],
            f$esup = jio3mh > 0x3 && /^public$/i['test'](i3jh[0x2][0x0]) && i3jh[0x3][0x0],
            a08cr6 = jio3mh > 0x4 && i3jh[0x4][0x0],
            k_cv6 = i3jh[jio3mh - 0x1];return wgl['startDTD'](oihj3m, f$esup && f$esup['replace'](/^(['"])(.*?)\1$/, '$2'), a08cr6 && a08cr6['replace'](/^(['"])(.*?)\1$/, '$2')), wgl['endDTD'](), k_cv6['index'] + k_cv6[0x0]['length'];
      }}return -0x1;
}function uoqihl(sn$u, jiomhq, g7wzx9) {
  var hpmj4 = sn$u['indexOf']('?>', jiomhq);if (hpmj4) {
    var dzt529 = sn$u['substring'](jiomhq, hpmj4)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (dzt529) {
      {
        dzt529[0x0]['length'];
      }return g7wzx9['processingInstruction'](dzt529[0x1], dzt529[0x2]), hpmj4 + 0x2;
    }return -0x1;
  }return -0x1;
}function ue$_sv() {}function upj3f4h(z79dg, g7zw9) {
  return z79dg['__proto__'] = g7zw9, z79dg;
}function uloqmih(v_n$, c_vak6) {
  var a_kr,
      qhojm = [],
      lxgqw = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (lxgqw['lastIndex'] = c_vak6, lxgqw['exec'](v_n$); a_kr = lxgqw['exec'](v_n$);) if (qhojm['push'](a_kr), a_kr[0x1]) return qhojm;
}var uenv$us = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    uiqomh = new RegExp('[\\-\\.0-9' + uenv$us['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    uk_ca6 = new RegExp('^' + uenv$us['source'] + uiqomh['source'] + '*(?::' + uenv$us['source'] + uiqomh['source'] + '*)?$'),
    u$fu4pe = 0x0,
    uvk6an = 0x1,
    ufups$e = 0x2,
    uholqm = 0x3,
    unkvs$_ = 0x4,
    u_rc6 = 0x5,
    uvuns$ = 0x6,
    ucvka = 0x7;ud95w['prototype'] = { 'parse': function (ijm3oh, wz7dg9, acr068) {
    var ji4m = this['domBuilder'];ji4m['startDocument'](), u$nve(wz7dg9, wz7dg9 = {}), umqioj(ijm3oh, wz7dg9, acr068, ji4m, this['errorHandler']), ji4m['endDocument']();
  } }, ue$_sv['prototype'] = { 'setTagName': function (ev$s) {
    if (!uk_ca6['test'](ev$s)) throw new Error('invalid tagName:' + ev$s);this['tagName'] = ev$s;
  }, 'add': function (w7qxg, hjf3, hjoi3) {
    if (!uk_ca6['test'](w7qxg)) throw new Error('invalid attribute:' + w7qxg);this[this['length']++] = { 'qName': w7qxg, 'value': hjf3, 'offset': hjoi3 };
  }, 'length': 0x0, 'getLocalName': function (z9gd7w) {
    return this[z9gd7w]['localName'];
  }, 'getLocator': function (wo7qlx) {
    return this[wo7qlx]['locator'];
  }, 'getQName': function (hmijo) {
    return this[hmijo]['qName'];
  }, 'getURI': function ($n_kv) {
    return this[$n_kv]['uri'];
  }, 'getValue': function (oliq7) {
    return this[oliq7]['value'];
  } }, upj3f4h({}, upj3f4h['prototype']) instanceof upj3f4h || (upj3f4h = function (ihmql, ns_va) {
  function ihmj43() {}ihmj43['prototype'] = ns_va, ihmj43 = new ihmj43();for (ns_va in ihmql) ihmj43[ns_va] = ihmql[ns_va];return ihmj43;
}), exports['XMLReader'] = ud95w;