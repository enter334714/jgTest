var o = wx.$U;
function uzwgd79() {}function uu$4efp(tz529d, lqo7ix, dwgz5, kra60, z9xw7) {
  function cra86(gd9z) {
    if (gd9z > 0xffff) {
      gd9z -= 0x10000;var v6_c = 0xd800 + (gd9z >> 0xa),
          p3f4ju = 0xdc00 + (0x3ff & gd9z);return String['fromCharCode'](v6_c, p3f4ju);
    }return String['fromCharCode'](gd9z);
  }function jhqoi(p43fjh) {
    var rk6ca = p43fjh['slice'](0x1, -0x1);return rk6ca in dwgz5 ? dwgz5[rk6ca] : '#' === rk6ca['charAt'](0x0) ? cra86(parseInt(rk6ca['substr'](0x1)['replace']('x', '0x'))) : (z9xw7['error']('entity not found:' + p43fjh), p43fjh);
  }function pmjh(ojqih) {
    if (ojqih > p4ue$f) {
      var aksv_ = tz529d['substring'](p4ue$f, ojqih)['replace'](/&#?\w+;/g, jhqoi);uefs$ && lwqg7x(p4ue$f), kra60['characters'](aksv_, 0x0, ojqih - p4ue$f), p4ue$f = ojqih;
    }
  }function lwqg7x(b0r18c, l9wg7x) {
    for (; b0r18c >= uefns$ && (l9wg7x = c0ak['exec'](tz529d));) k_nv$ = l9wg7x['index'], uefns$ = k_nv$ + l9wg7x[0x0]['length'], uefs$['lineNumber']++;uefs$['columnNumber'] = b0r18c - k_nv$ + 0x1;
  }for (var k_nv$ = 0x0, uefns$ = 0x0, c0ak = /.*(?:\r\n?|\n)|.*$/g, uefs$ = kra60['locator'], qlxi = [{ 'currentNSMap': lqo7ix }], ufesp$ = {}, p4ue$f = 0x0;;) {
    try {
      var _ev$s = tz529d['indexOf']('<', p4ue$f);if (0x0 > _ev$s) {
        if (!tz529d['substr'](p4ue$f)['match'](/^\s*$/)) {
          var pef$u4 = kra60['doc'],
              i3mj4h = pef$u4['createTextNode'](tz529d['substr'](p4ue$f));pef$u4['appendChild'](i3mj4h), kra60['currentElement'] = i3mj4h;
        }return;
      }switch (_ev$s > p4ue$f && pmjh(_ev$s), tz529d['charAt'](_ev$s + 0x1)) {case '/':
          var _$nk = tz529d['indexOf']('>', _ev$s + 0x3),
              oxwlq = tz529d['substring'](_ev$s + 0x2, _$nk),
              xq7lo = qlxi['pop']();0x0 > _$nk ? (oxwlq = tz529d['substring'](_ev$s + 0x2)['replace'](/[\s<].*/, ''), z9xw7['error']('end tag name: ' + oxwlq + ' is not complete:' + xq7lo['tagName']), _$nk = _ev$s + 0x1 + oxwlq['length']) : oxwlq['match'](/\s</) && (oxwlq = oxwlq['replace'](/[\s<].*/, ''), z9xw7['error']('end tag name: ' + oxwlq + ' maybe not complete'), _$nk = _ev$s + 0x1 + oxwlq['length']);var wlqxg = xq7lo['localNSMap'],
              iojhm = xq7lo['tagName'] == oxwlq,
              vak6_n = iojhm || xq7lo['tagName'] && xq7lo['tagName']['toLowerCase']() == oxwlq['toLowerCase']();if (vak6_n) {
            if (kra60['endElement'](xq7lo['uri'], xq7lo['localName'], oxwlq), wlqxg) {
              for (var imlh in wlqxg) kra60['endPrefixMapping'](imlh);
            }iojhm || z9xw7['fatalError']('end tag name: ' + oxwlq + ' is not match the current start tagName:' + xq7lo['tagName']);
          } else qlxi['push'](xq7lo);_$nk++;break;case '?':
          uefs$ && lwqg7x(_ev$s), _$nk = uwd95(tz529d, _ev$s, kra60);break;case '!':
          uefs$ && lwqg7x(_ev$s), _$nk = usn_$vk(tz529d, _ev$s, kra60, z9xw7);break;default:
          uefs$ && lwqg7x(_ev$s);var wzg97x = new ulw7gx(),
              uef$sp = qlxi[qlxi['length'] - 0x1]['currentNSMap'],
              _$nk = u$svu(tz529d, _ev$s, wzg97x, uef$sp, jhqoi, z9xw7),
              moxil = wzg97x['length'];if (!wzg97x['closed'] && uavn_sk(tz529d, _$nk, wzg97x['tagName'], ufesp$) && (wzg97x['closed'] = !0x0, dwgz5['nbsp'] || z9xw7['warning']('unclosed xml attribute')), uefs$ && moxil) {
            for (var _6navk = upj4hm3(uefs$, {}), n$s = 0x0; moxil > n$s; n$s++) {
              var h3jf4 = wzg97x[n$s];lwqg7x(h3jf4['offset']), h3jf4['locator'] = upj4hm3(uefs$, {});
            }kra60['locator'] = _6navk, ul79xwg(wzg97x, kra60, uef$sp) && qlxi['push'](wzg97x), kra60['locator'] = uefs$;
          } else ul79xwg(wzg97x, kra60, uef$sp) && qlxi['push'](wzg97x);'http://www.w3.org/1999/xhtml' !== wzg97x['uri'] || wzg97x['closed'] ? _$nk++ : _$nk = usefpu$(tz529d, _$nk, wzg97x['tagName'], jhqoi, kra60);}
    } catch (svk_an) {
      z9xw7['error']('element parse error: ' + svk_an), _$nk = -0x1;
    }_$nk > p4ue$f ? p4ue$f = _$nk : pmjh(Math['max'](_ev$s, p4ue$f) + 0x1);
  }
}function upj4hm3(pj4fh, j3m4p) {
  return j3m4p['lineNumber'] = pj4fh['lineNumber'], j3m4p['columnNumber'] = pj4fh['columnNumber'], j3m4p;
}function u$svu(lmqxo, xg97, i4mh3, efsu, wgzx, vks$_) {
  for (var uep$4f, pu4, w9xl7g = ++xg97, a6r08c = uf$uspe;;) {
    var imoxq = lmqxo['charAt'](w9xl7g);switch (imoxq) {case '=':
        if (a6r08c === uk6v_ac) uep$4f = lmqxo['slice'](xg97, w9xl7g), a6r08c = uoqxlmi;else {
          if (a6r08c !== uens_$) throw new Error('attribute equal must after attrName');a6r08c = uoqxlmi;
        }break;case '\x27':case '\x22':
        if (a6r08c === uoqxlmi || a6r08c === uk6v_ac) {
          if (a6r08c === uk6v_ac && (vks$_['warning']('attribute value must after "="'), uep$4f = lmqxo['slice'](xg97, w9xl7g)), xg97 = w9xl7g + 0x1, w9xl7g = lmqxo['indexOf'](imoxq, xg97), !(w9xl7g > 0x0)) throw new Error('attribute value no end \'' + imoxq + '\' match');pu4 = lmqxo['slice'](xg97, w9xl7g)['replace'](/&#?\w+;/g, wgzx), i4mh3['add'](uep$4f, pu4, xg97 - 0x1), a6r08c = ugw79dz;
        } else {
          if (a6r08c != urk0c6a) throw new Error('attribute value must after "="');pu4 = lmqxo['slice'](xg97, w9xl7g)['replace'](/&#?\w+;/g, wgzx), i4mh3['add'](uep$4f, pu4, xg97), vks$_['warning']('attribute "' + uep$4f + '" missed start quot(' + imoxq + ')!!'), xg97 = w9xl7g + 0x1, a6r08c = ugw79dz;
        }break;case '/':
        switch (a6r08c) {case uf$uspe:
            i4mh3['setTagName'](lmqxo['slice'](xg97, w9xl7g));case ugw79dz:case umohqj:case uoq7ixl:
            a6r08c = uoq7ixl, i4mh3['closed'] = !0x0;case urk0c6a:case uk6v_ac:case uens_$:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return vks$_['error']('unexpected end of input'), a6r08c == uf$uspe && i4mh3['setTagName'](lmqxo['slice'](xg97, w9xl7g)), w9xl7g;case '>':
        switch (a6r08c) {case uf$uspe:
            i4mh3['setTagName'](lmqxo['slice'](xg97, w9xl7g));case ugw79dz:case umohqj:case uoq7ixl:
            break;case urk0c6a:case uk6v_ac:
            pu4 = lmqxo['slice'](xg97, w9xl7g), '/' === pu4['slice'](-0x1) && (i4mh3['closed'] = !0x0, pu4 = pu4['slice'](0x0, -0x1));case uens_$:
            a6r08c === uens_$ && (pu4 = uep$4f), a6r08c == urk0c6a ? (vks$_['warning']('attribute "' + pu4 + '" missed quot(")!!'), i4mh3['add'](uep$4f, pu4['replace'](/&#?\w+;/g, wgzx), xg97)) : ('http://www.w3.org/1999/xhtml' === efsu[''] && pu4['match'](/^(?:disabled|checked|selected)$/i) || vks$_['warning']('attribute "' + pu4 + '" missed value!! "' + pu4 + '" instead!!'), i4mh3['add'](pu4, pu4, xg97));break;case uoqxlmi:
            throw new Error('attribute value missed!!');}return w9xl7g;case '\u0080':
        imoxq = '\x20';default:
        if ('\x20' >= imoxq) switch (a6r08c) {case uf$uspe:
            i4mh3['setTagName'](lmqxo['slice'](xg97, w9xl7g)), a6r08c = umohqj;break;case uk6v_ac:
            uep$4f = lmqxo['slice'](xg97, w9xl7g), a6r08c = uens_$;break;case urk0c6a:
            var pu4 = lmqxo['slice'](xg97, w9xl7g)['replace'](/&#?\w+;/g, wgzx);vks$_['warning']('attribute "' + pu4 + '" missed quot(")!!'), i4mh3['add'](uep$4f, pu4, xg97);case ugw79dz:
            a6r08c = umohqj;} else switch (a6r08c) {case uens_$:
            {
              i4mh3['tagName'];
            }'http://www.w3.org/1999/xhtml' === efsu[''] && uep$4f['match'](/^(?:disabled|checked|selected)$/i) || vks$_['warning']('attribute "' + uep$4f + '" missed value!! "' + uep$4f + '" instead2!!'), i4mh3['add'](uep$4f, uep$4f, xg97), xg97 = w9xl7g, a6r08c = uk6v_ac;break;case ugw79dz:
            vks$_['warning']('attribute space is required"' + uep$4f + '\x22!!');case umohqj:
            a6r08c = uk6v_ac, xg97 = w9xl7g;break;case uoqxlmi:
            a6r08c = urk0c6a, xg97 = w9xl7g;break;case uoq7ixl:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}w9xl7g++;
  }
}function ul79xwg(olqi, holiqm, zwdg59) {
  for (var dg5 = olqi['tagName'], ph3jm4 = null, up4 = olqi['length']; up4--;) {
    var hqoiml = olqi[up4],
        ca_ = hqoiml['qName'],
        a6c_kr = hqoiml['value'],
        phfj = ca_['indexOf'](':');if (phfj > 0x0) var oih3 = hqoiml['prefix'] = ca_['slice'](0x0, phfj),
        e$ns = ca_['slice'](phfj + 0x1),
        a_6kv = 'xmlns' === oih3 && e$ns;else e$ns = ca_, oih3 = null, a_6kv = 'xmlns' === ca_ && '';hqoiml['localName'] = e$ns, a_6kv !== !0x1 && (null == ph3jm4 && (ph3jm4 = {}, upj4f(zwdg59, zwdg59 = {})), zwdg59[a_6kv] = ph3jm4[a_6kv] = a6c_kr, hqoiml['uri'] = 'http://www.w3.org/2000/xmlns/', holiqm['startPrefixMapping'](a_6kv, a6c_kr));
  }for (var up4 = olqi['length']; up4--;) {
    hqoiml = olqi[up4];var oih3 = hqoiml['prefix'];oih3 && ('xml' === oih3 && (hqoiml['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== oih3 && (hqoiml['uri'] = zwdg59[oih3 || '']));
  }var phfj = dg5['indexOf'](':');phfj > 0x0 ? (oih3 = olqi['prefix'] = dg5['slice'](0x0, phfj), e$ns = olqi['localName'] = dg5['slice'](phfj + 0x1)) : (oih3 = null, e$ns = olqi['localName'] = dg5);var imqhoj = olqi['uri'] = zwdg59[oih3 || ''];if (holiqm['startElement'](imqhoj, e$ns, dg5, olqi), !olqi['closed']) return olqi['currentNSMap'] = zwdg59, olqi['localNSMap'] = ph3jm4, !0x0;if (holiqm['endElement'](imqhoj, e$ns, dg5), ph3jm4) {
    for (oih3 in ph3jm4) holiqm['endPrefixMapping'](oih3);
  }
}function usefpu$(ak_c, epsf$, _skvn, hoi3j, $svneu) {
  if (/^(?:script|textarea)$/i['test'](_skvn)) {
    var $_ensv = ak_c['indexOf']('</' + _skvn + '>', epsf$),
        ens_$v = ak_c['substring'](epsf$ + 0x1, $_ensv);if (/[&<]/['test'](ens_$v)) return (/^script$/i['test'](_skvn) ? ($svneu['characters'](ens_$v, 0x0, ens_$v['length']), $_ensv) : (ens_$v = ens_$v['replace'](/&#?\w+;/g, hoi3j), $svneu['characters'](ens_$v, 0x0, ens_$v['length']), $_ensv)
    );
  }return epsf$ + 0x1;
}function uavn_sk(lhqmi, f3u4j, qxli, gdzt95) {
  var rc8a06 = gdzt95[qxli];return null == rc8a06 && (rc8a06 = lhqmi['lastIndexOf']('</' + qxli + '>'), f3u4j > rc8a06 && (rc8a06 = lhqmi['lastIndexOf']('</' + qxli)), gdzt95[qxli] = rc8a06), f3u4j > rc8a06;
}function upj4f(j34, n_$evs) {
  for (var hql in j34) n_$evs[hql] = j34[hql];
}function usn_$vk(lxmo, u34pef, zgx9w, xqwo7) {
  var vc6a_k = lxmo['charAt'](u34pef + 0x2);switch (vc6a_k) {case '-':
      if ('-' === lxmo['charAt'](u34pef + 0x3)) {
        var enf$ = lxmo['indexOf']('-->', u34pef + 0x4);return enf$ > u34pef ? (zgx9w['comment'](lxmo, u34pef + 0x4, enf$ - u34pef - 0x4), enf$ + 0x3) : (xqwo7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == lxmo['substr'](u34pef + 0x3, 0x6)) {
        var enf$ = lxmo['indexOf'](']]>', u34pef + 0x9);return zgx9w['startCDATA'](), zgx9w['characters'](lxmo, u34pef + 0x9, enf$ - u34pef - 0x9), zgx9w['endCDATA'](), enf$ + 0x3;
      }var dwz79 = uak0rc6(lxmo, u34pef),
          d9zgw5 = dwz79['length'];if (d9zgw5 > 0x1 && /!doctype/i['test'](dwz79[0x0][0x0])) {
        var funes = dwz79[0x1][0x0],
            qloi7 = d9zgw5 > 0x3 && /^public$/i['test'](dwz79[0x2][0x0]) && dwz79[0x3][0x0],
            enufs = d9zgw5 > 0x4 && dwz79[0x4][0x0],
            g9x7wz = dwz79[d9zgw5 - 0x1];return zgx9w['startDTD'](funes, qloi7 && qloi7['replace'](/^(['"])(.*?)\1$/, '$2'), enufs && enufs['replace'](/^(['"])(.*?)\1$/, '$2')), zgx9w['endDTD'](), g9x7wz['index'] + g9x7wz[0x0]['length'];
      }}return -0x1;
}function uwd95(sv$_nk, pj4hf3, im43h) {
  var kra6c0 = sv$_nk['indexOf']('?>', pj4hf3);if (kra6c0) {
    var d59wgz = sv$_nk['substring'](pj4hf3, kra6c0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (d59wgz) {
      {
        d59wgz[0x0]['length'];
      }return im43h['processingInstruction'](d59wgz[0x1], d59wgz[0x2]), kra6c0 + 0x2;
    }return -0x1;
  }return -0x1;
}function ulw7gx() {}function urcb8(navsk_, j4fp3) {
  return navsk_['__proto__'] = j4fp3, navsk_;
}function uak0rc6(qilho, ztg59d) {
  var fpu3e,
      _knsa = [],
      qmhoi = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (qmhoi['lastIndex'] = ztg59d, qmhoi['exec'](qilho); fpu3e = qmhoi['exec'](qilho);) if (_knsa['push'](fpu3e), fpu3e[0x1]) return _knsa;
}var udz7w9g = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    unkasv = new RegExp('[\\-\\.0-9' + udz7w9g['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    uj4hp = new RegExp('^' + udz7w9g['source'] + unkasv['source'] + '*(?::' + udz7w9g['source'] + unkasv['source'] + '*)?$'),
    uf$uspe = 0x0,
    uk6v_ac = 0x1,
    uens_$ = 0x2,
    uoqxlmi = 0x3,
    urk0c6a = 0x4,
    ugw79dz = 0x5,
    umohqj = 0x6,
    uoq7ixl = 0x7;uzwgd79['prototype'] = { 'parse': function (_nev$s, v6ca, f3pju4) {
    var d7z9wg = this['domBuilder'];d7z9wg['startDocument'](), upj4f(v6ca, v6ca = {}), uu$4efp(_nev$s, v6ca, f3pju4, d7z9wg, this['errorHandler']), d7z9wg['endDocument']();
  } }, ulw7gx['prototype'] = { 'setTagName': function (hf) {
    if (!uj4hp['test'](hf)) throw new Error('invalid tagName:' + hf);this['tagName'] = hf;
  }, 'add': function (c68ar0, avnsk_, kva6_) {
    if (!uj4hp['test'](c68ar0)) throw new Error('invalid attribute:' + c68ar0);this[this['length']++] = { 'qName': c68ar0, 'value': avnsk_, 'offset': kva6_ };
  }, 'length': 0x0, 'getLocalName': function (imqohl) {
    return this[imqohl]['localName'];
  }, 'getLocator': function (svk) {
    return this[svk]['locator'];
  }, 'getQName': function (v_$k) {
    return this[v_$k]['qName'];
  }, 'getURI': function (f43jh) {
    return this[f43jh]['uri'];
  }, 'getValue': function (ohmij3) {
    return this[ohmij3]['value'];
  } }, urcb8({}, urcb8['prototype']) instanceof urcb8 || (urcb8 = function (qmiohj, f34u) {
  function n_ak6v() {}n_ak6v['prototype'] = f34u, n_ak6v = new n_ak6v();for (f34u in qmiohj) n_ak6v[f34u] = qmiohj[f34u];return n_ak6v;
}), exports['XMLReader'] = uzwgd79;