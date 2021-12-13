var o = wx.$U;
function uvns$_e() {}function uh3m4jp(_evn$s, kra, usve$, xlio7, lxwg9) {
  function t59zd2(zxgw97) {
    if (zxgw97 > 0xffff) {
      zxgw97 -= 0x10000;var $nveu = 0xd800 + (zxgw97 >> 0xa),
          iojq = 0xdc00 + (0x3ff & zxgw97);return String['fromCharCode']($nveu, iojq);
    }return String['fromCharCode'](zxgw97);
  }function tz9d5(c8r60a) {
    var dzt925 = c8r60a['slice'](0x1, -0x1);return dzt925 in usve$ ? usve$[dzt925] : '#' === dzt925['charAt'](0x0) ? t59zd2(parseInt(dzt925['substr'](0x1)['replace']('x', '0x'))) : (lxwg9['error']('entity not found:' + c8r60a), c8r60a);
  }function mj4h3p(pe4$) {
    if (pe4$ > _v$) {
      var gw97 = _evn$s['substring'](_v$, pe4$)['replace'](/&#?\w+;/g, tz9d5);e$s && i3jh4(_v$), xlio7['characters'](gw97, 0x0, pe4$ - _v$), _v$ = pe4$;
    }
  }function i3jh4(ans_vk, n$vs_e) {
    for (; ans_vk >= nvk6_ && (n$vs_e = v_es$['exec'](_evn$s));) gdz9t5 = n$vs_e['index'], nvk6_ = gdz9t5 + n$vs_e[0x0]['length'], e$s['lineNumber']++;e$s['columnNumber'] = ans_vk - gdz9t5 + 0x1;
  }for (var gdz9t5 = 0x0, nvk6_ = 0x0, v_es$ = /.*(?:\r\n?|\n)|.*$/g, e$s = xlio7['locator'], iomqxl = [{ 'currentNSMap': kra }], nvuse = {}, _v$ = 0x0;;) {
    try {
      var lqimoh = _evn$s['indexOf']('<', _v$);if (0x0 > lqimoh) {
        if (!_evn$s['substr'](_v$)['match'](/^\s*$/)) {
          var q7lio = xlio7['doc'],
              dztg9 = q7lio['createTextNode'](_evn$s['substr'](_v$));q7lio['appendChild'](dztg9), xlio7['currentElement'] = dztg9;
        }return;
      }switch (lqimoh > _v$ && mj4h3p(lqimoh), _evn$s['charAt'](lqimoh + 0x1)) {case '/':
          var qxomli = _evn$s['indexOf']('>', lqimoh + 0x3),
              jhf4p = _evn$s['substring'](lqimoh + 0x2, qxomli),
              moiqhl = iomqxl['pop']();0x0 > qxomli ? (jhf4p = _evn$s['substring'](lqimoh + 0x2)['replace'](/[\s<].*/, ''), lxwg9['error']('end tag name: ' + jhf4p + ' is not complete:' + moiqhl['tagName']), qxomli = lqimoh + 0x1 + jhf4p['length']) : jhf4p['match'](/\s</) && (jhf4p = jhf4p['replace'](/[\s<].*/, ''), lxwg9['error']('end tag name: ' + jhf4p + ' maybe not complete'), qxomli = lqimoh + 0x1 + jhf4p['length']);var nv$se = moiqhl['localNSMap'],
              c1r0b = moiqhl['tagName'] == jhf4p,
              h34pjf = c1r0b || moiqhl['tagName'] && moiqhl['tagName']['toLowerCase']() == jhf4p['toLowerCase']();if (h34pjf) {
            if (xlio7['endElement'](moiqhl['uri'], moiqhl['localName'], jhf4p), nv$se) {
              for (var $s_n in nv$se) xlio7['endPrefixMapping']($s_n);
            }c1r0b || lxwg9['fatalError']('end tag name: ' + jhf4p + ' is not match the current start tagName:' + moiqhl['tagName']);
          } else iomqxl['push'](moiqhl);qxomli++;break;case '?':
          e$s && i3jh4(lqimoh), qxomli = uby80(_evn$s, lqimoh, xlio7);break;case '!':
          e$s && i3jh4(lqimoh), qxomli = ubc108r(_evn$s, lqimoh, xlio7, lxwg9);break;default:
          e$s && i3jh4(lqimoh);var lmoihq = new usuf$e(),
              ufesp = iomqxl[iomqxl['length'] - 0x1]['currentNSMap'],
              qxomli = ufus$p(_evn$s, lqimoh, lmoihq, ufesp, tz9d5, lxwg9),
              a6vnk_ = lmoihq['length'];if (!lmoihq['closed'] && un$skv_(_evn$s, qxomli, lmoihq['tagName'], nvuse) && (lmoihq['closed'] = !0x0, usve$['nbsp'] || lxwg9['warning']('unclosed xml attribute')), e$s && a6vnk_) {
            for (var uf$ = us$upf(e$s, {}), g7dzw9 = 0x0; a6vnk_ > g7dzw9; g7dzw9++) {
              var c08rb1 = lmoihq[g7dzw9];i3jh4(c08rb1['offset']), c08rb1['locator'] = us$upf(e$s, {});
            }xlio7['locator'] = uf$, ue43fp(lmoihq, xlio7, ufesp) && iomqxl['push'](lmoihq), xlio7['locator'] = e$s;
          } else ue43fp(lmoihq, xlio7, ufesp) && iomqxl['push'](lmoihq);'http://www.w3.org/1999/xhtml' !== lmoihq['uri'] || lmoihq['closed'] ? qxomli++ : qxomli = uxwg7ql(_evn$s, qxomli, lmoihq['tagName'], tz9d5, xlio7);}
    } catch ($kns_) {
      lxwg9['error']('element parse error: ' + $kns_), qxomli = -0x1;
    }qxomli > _v$ ? _v$ = qxomli : mj4h3p(Math['max'](lqimoh, _v$) + 0x1);
  }
}function us$upf(zt952d, qxlmoi) {
  return qxlmoi['lineNumber'] = zt952d['lineNumber'], qxlmoi['columnNumber'] = zt952d['columnNumber'], qxlmoi;
}function ufus$p(us$fne, gxw97, c16r80, phmj3, n$eufs, lwqo7) {
  for (var dw9g5z, qix7, u4$pf = ++gxw97, jph = uj3mp4h;;) {
    var nf$ = us$fne['charAt'](u4$pf);switch (nf$) {case '=':
        if (jph === uepfu$4) dw9g5z = us$fne['slice'](gxw97, u4$pf), jph = uz7w9gx;else {
          if (jph !== u$ufp4) throw new Error('attribute equal must after attrName');jph = uz7w9gx;
        }break;case '\x27':case '\x22':
        if (jph === uz7w9gx || jph === uepfu$4) {
          if (jph === uepfu$4 && (lwqo7['warning']('attribute value must after "="'), dw9g5z = us$fne['slice'](gxw97, u4$pf)), gxw97 = u4$pf + 0x1, u4$pf = us$fne['indexOf'](nf$, gxw97), !(u4$pf > 0x0)) throw new Error('attribute value no end \'' + nf$ + '\' match');qix7 = us$fne['slice'](gxw97, u4$pf)['replace'](/&#?\w+;/g, n$eufs), c16r80['add'](dw9g5z, qix7, gxw97 - 0x1), jph = uu4e$pf;
        } else {
          if (jph != uqx7ow) throw new Error('attribute value must after "="');qix7 = us$fne['slice'](gxw97, u4$pf)['replace'](/&#?\w+;/g, n$eufs), c16r80['add'](dw9g5z, qix7, gxw97), lwqo7['warning']('attribute "' + dw9g5z + '" missed start quot(' + nf$ + ')!!'), gxw97 = u4$pf + 0x1, jph = uu4e$pf;
        }break;case '/':
        switch (jph) {case uj3mp4h:
            c16r80['setTagName'](us$fne['slice'](gxw97, u4$pf));case uu4e$pf:case ulx9w:case uqilhmo:
            jph = uqilhmo, c16r80['closed'] = !0x0;case uqx7ow:case uepfu$4:case u$ufp4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lwqo7['error']('unexpected end of input'), jph == uj3mp4h && c16r80['setTagName'](us$fne['slice'](gxw97, u4$pf)), u4$pf;case '>':
        switch (jph) {case uj3mp4h:
            c16r80['setTagName'](us$fne['slice'](gxw97, u4$pf));case uu4e$pf:case ulx9w:case uqilhmo:
            break;case uqx7ow:case uepfu$4:
            qix7 = us$fne['slice'](gxw97, u4$pf), '/' === qix7['slice'](-0x1) && (c16r80['closed'] = !0x0, qix7 = qix7['slice'](0x0, -0x1));case u$ufp4:
            jph === u$ufp4 && (qix7 = dw9g5z), jph == uqx7ow ? (lwqo7['warning']('attribute "' + qix7 + '" missed quot(")!!'), c16r80['add'](dw9g5z, qix7['replace'](/&#?\w+;/g, n$eufs), gxw97)) : ('http://www.w3.org/1999/xhtml' === phmj3[''] && qix7['match'](/^(?:disabled|checked|selected)$/i) || lwqo7['warning']('attribute "' + qix7 + '" missed value!! "' + qix7 + '" instead!!'), c16r80['add'](qix7, qix7, gxw97));break;case uz7w9gx:
            throw new Error('attribute value missed!!');}return u4$pf;case '\u0080':
        nf$ = '\x20';default:
        if ('\x20' >= nf$) switch (jph) {case uj3mp4h:
            c16r80['setTagName'](us$fne['slice'](gxw97, u4$pf)), jph = ulx9w;break;case uepfu$4:
            dw9g5z = us$fne['slice'](gxw97, u4$pf), jph = u$ufp4;break;case uqx7ow:
            var qix7 = us$fne['slice'](gxw97, u4$pf)['replace'](/&#?\w+;/g, n$eufs);lwqo7['warning']('attribute "' + qix7 + '" missed quot(")!!'), c16r80['add'](dw9g5z, qix7, gxw97);case uu4e$pf:
            jph = ulx9w;} else switch (jph) {case u$ufp4:
            {
              c16r80['tagName'];
            }'http://www.w3.org/1999/xhtml' === phmj3[''] && dw9g5z['match'](/^(?:disabled|checked|selected)$/i) || lwqo7['warning']('attribute "' + dw9g5z + '" missed value!! "' + dw9g5z + '" instead2!!'), c16r80['add'](dw9g5z, dw9g5z, gxw97), gxw97 = u4$pf, jph = uepfu$4;break;case uu4e$pf:
            lwqo7['warning']('attribute space is required"' + dw9g5z + '\x22!!');case ulx9w:
            jph = uepfu$4, gxw97 = u4$pf;break;case uz7w9gx:
            jph = uqx7ow, gxw97 = u4$pf;break;case uqilhmo:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}u4$pf++;
  }
}function ue43fp(r_ack, lmqoi, u$esv) {
  for (var hm3ioj = r_ack['tagName'], wlg7qx = null, k0arc = r_ack['length']; k0arc--;) {
    var m4j3ph = r_ack[k0arc],
        rc8a60 = m4j3ph['qName'],
        r8b1y = m4j3ph['value'],
        crk_6 = rc8a60['indexOf'](':');if (crk_6 > 0x0) var wzgd95 = m4j3ph['prefix'] = rc8a60['slice'](0x0, crk_6),
        qoix = rc8a60['slice'](crk_6 + 0x1),
        _6anvk = 'xmlns' === wzgd95 && qoix;else qoix = rc8a60, wzgd95 = null, _6anvk = 'xmlns' === rc8a60 && '';m4j3ph['localName'] = qoix, _6anvk !== !0x1 && (null == wlg7qx && (wlg7qx = {}, uqjomi(u$esv, u$esv = {})), u$esv[_6anvk] = wlg7qx[_6anvk] = r8b1y, m4j3ph['uri'] = 'http://www.w3.org/2000/xmlns/', lmqoi['startPrefixMapping'](_6anvk, r8b1y));
  }for (var k0arc = r_ack['length']; k0arc--;) {
    m4j3ph = r_ack[k0arc];var wzgd95 = m4j3ph['prefix'];wzgd95 && ('xml' === wzgd95 && (m4j3ph['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== wzgd95 && (m4j3ph['uri'] = u$esv[wzgd95 || '']));
  }var crk_6 = hm3ioj['indexOf'](':');crk_6 > 0x0 ? (wzgd95 = r_ack['prefix'] = hm3ioj['slice'](0x0, crk_6), qoix = r_ack['localName'] = hm3ioj['slice'](crk_6 + 0x1)) : (wzgd95 = null, qoix = r_ack['localName'] = hm3ioj);var byr8 = r_ack['uri'] = u$esv[wzgd95 || ''];if (lmqoi['startElement'](byr8, qoix, hm3ioj, r_ack), !r_ack['closed']) return r_ack['currentNSMap'] = u$esv, r_ack['localNSMap'] = wlg7qx, !0x0;if (lmqoi['endElement'](byr8, qoix, hm3ioj), wlg7qx) {
    for (wzgd95 in wlg7qx) lmqoi['endPrefixMapping'](wzgd95);
  }
}function uxwg7ql(gdt9z, qilmh, mi3j, lqohmi, h3ijm) {
  if (/^(?:script|textarea)$/i['test'](mi3j)) {
    var xwlg7 = gdt9z['indexOf']('</' + mi3j + '>', qilmh),
        iqxlmo = gdt9z['substring'](qilmh + 0x1, xwlg7);if (/[&<]/['test'](iqxlmo)) return (/^script$/i['test'](mi3j) ? (h3ijm['characters'](iqxlmo, 0x0, iqxlmo['length']), xwlg7) : (iqxlmo = iqxlmo['replace'](/&#?\w+;/g, lqohmi), h3ijm['characters'](iqxlmo, 0x0, iqxlmo['length']), xwlg7)
    );
  }return qilmh + 0x1;
}function un$skv_(w7xoql, evs_n$, x97, a_snv) {
  var ac8r60 = a_snv[x97];return null == ac8r60 && (ac8r60 = w7xoql['lastIndexOf']('</' + x97 + '>'), evs_n$ > ac8r60 && (ac8r60 = w7xoql['lastIndexOf']('</' + x97)), a_snv[x97] = ac8r60), evs_n$ > ac8r60;
}function uqjomi(qimohj, wg79xl) {
  for (var r_akc6 in qimohj) wg79xl[r_akc6] = qimohj[r_akc6];
}function ubc108r(cr80b, qlox7i, _vns$, z9gxw) {
  var gtz5d = cr80b['charAt'](qlox7i + 0x2);switch (gtz5d) {case '-':
      if ('-' === cr80b['charAt'](qlox7i + 0x3)) {
        var lxg7w9 = cr80b['indexOf']('-->', qlox7i + 0x4);return lxg7w9 > qlox7i ? (_vns$['comment'](cr80b, qlox7i + 0x4, lxg7w9 - qlox7i - 0x4), lxg7w9 + 0x3) : (z9gxw['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cr80b['substr'](qlox7i + 0x3, 0x6)) {
        var lxg7w9 = cr80b['indexOf'](']]>', qlox7i + 0x9);return _vns$['startCDATA'](), _vns$['characters'](cr80b, qlox7i + 0x9, lxg7w9 - qlox7i - 0x9), _vns$['endCDATA'](), lxg7w9 + 0x3;
      }var ksan_v = ugqx(cr80b, qlox7i),
          xiql7o = ksan_v['length'];if (xiql7o > 0x1 && /!doctype/i['test'](ksan_v[0x0][0x0])) {
        var ojih = ksan_v[0x1][0x0],
            u4ep$f = xiql7o > 0x3 && /^public$/i['test'](ksan_v[0x2][0x0]) && ksan_v[0x3][0x0],
            yb801r = xiql7o > 0x4 && ksan_v[0x4][0x0],
            hjp34m = ksan_v[xiql7o - 0x1];return _vns$['startDTD'](ojih, u4ep$f && u4ep$f['replace'](/^(['"])(.*?)\1$/, '$2'), yb801r && yb801r['replace'](/^(['"])(.*?)\1$/, '$2')), _vns$['endDTD'](), hjp34m['index'] + hjp34m[0x0]['length'];
      }}return -0x1;
}function uby80(oqmji, fupe4, ne_sv) {
  var _knav = oqmji['indexOf']('?>', fupe4);if (_knav) {
    var usnve$ = oqmji['substring'](fupe4, _knav)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (usnve$) {
      {
        usnve$[0x0]['length'];
      }return ne_sv['processingInstruction'](usnve$[0x1], usnve$[0x2]), _knav + 0x2;
    }return -0x1;
  }return -0x1;
}function usuf$e() {}function uxilm(n$se_v, acr6_) {
  return n$se_v['__proto__'] = acr6_, n$se_v;
}function ugqx(ak6r_c, mp4jh3) {
  var fup43j,
      wg7xql = [],
      v_nse = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (v_nse['lastIndex'] = mp4jh3, v_nse['exec'](ak6r_c); fup43j = v_nse['exec'](ak6r_c);) if (wg7xql['push'](fup43j), fup43j[0x1]) return wg7xql;
}var ulqx7gw = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ulw7qgx = new RegExp('[\\-\\.0-9' + ulqx7gw['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    umoqxl = new RegExp('^' + ulqx7gw['source'] + ulw7qgx['source'] + '*(?::' + ulqx7gw['source'] + ulw7qgx['source'] + '*)?$'),
    uj3mp4h = 0x0,
    uepfu$4 = 0x1,
    u$ufp4 = 0x2,
    uz7w9gx = 0x3,
    uqx7ow = 0x4,
    uu4e$pf = 0x5,
    ulx9w = 0x6,
    uqilhmo = 0x7;uvns$_e['prototype'] = { 'parse': function (ves$, $efu, v_e$s) {
    var jh4mi = this['domBuilder'];jh4mi['startDocument'](), uqjomi($efu, $efu = {}), uh3m4jp(ves$, $efu, v_e$s, jh4mi, this['errorHandler']), jh4mi['endDocument']();
  } }, usuf$e['prototype'] = { 'setTagName': function ($vseun) {
    if (!umoqxl['test']($vseun)) throw new Error('invalid tagName:' + $vseun);this['tagName'] = $vseun;
  }, 'add': function (d59t2z, oilx7, z9g7d) {
    if (!umoqxl['test'](d59t2z)) throw new Error('invalid attribute:' + d59t2z);this[this['length']++] = { 'qName': d59t2z, 'value': oilx7, 'offset': z9g7d };
  }, 'length': 0x0, 'getLocalName': function (esv_) {
    return this[esv_]['localName'];
  }, 'getLocator': function (xmoql) {
    return this[xmoql]['locator'];
  }, 'getQName': function (w79lx) {
    return this[w79lx]['qName'];
  }, 'getURI': function (b8r0y) {
    return this[b8r0y]['uri'];
  }, 'getValue': function (ihmjoq) {
    return this[ihmjoq]['value'];
  } }, uxilm({}, uxilm['prototype']) instanceof uxilm || (uxilm = function (u$pe, _n6akv) {
  function $ufsep() {}$ufsep['prototype'] = _n6akv, $ufsep = new $ufsep();for (_n6akv in u$pe) $ufsep[_n6akv] = u$pe[_n6akv];return $ufsep;
}), exports['XMLReader'] = uvns$_e;