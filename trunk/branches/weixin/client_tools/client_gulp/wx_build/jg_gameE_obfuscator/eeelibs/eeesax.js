var b = wx.$e;
function ef49zt() {}function eglha(t9zefq, w3uvam, rj781, n5r0o, h_x4g) {
  function lkaxg(h_gs4) {
    if (h_gs4 > 0xffff) {
      h_gs4 -= 0x10000;var q29ei = 0xd800 + (h_gs4 >> 0xa),
          vm3u6 = 0xdc00 + (0x3ff & h_gs4);return String['fromCharCode'](q29ei, vm3u6);
    }return String['fromCharCode'](h_gs4);
  }function zs4_h(no65$d) {
    var tqi = no65$d['slice'](0x1, -0x1);return tqi in rj781 ? rj781[tqi] : '#' === tqi['charAt'](0x0) ? lkaxg(parseInt(tqi['substr'](0x1)['replace']('x', '0x'))) : (h_x4g['error']('entity not found:' + no65$d), no65$d);
  }function f_s4h(sf4hz_) {
    if (sf4hz_ > y2beq) {
      var nm6dw$ = t9zefq['substring'](y2beq, sf4hz_)['replace'](/&#?\w+;/g, zs4_h);ro07 && h4g(y2beq), n5r0o['characters'](nm6dw$, 0x0, sf4hz_ - y2beq), y2beq = sf4hz_;
    }
  }function h4g(kagxv3, khlxga) {
    for (; kagxv3 >= fz9se && (khlxga = hsg['exec'](t9zefq));) y2be = khlxga['index'], fz9se = y2be + khlxga[0x0]['length'], ro07['lineNumber']++;ro07['columnNumber'] = kagxv3 - y2be + 0x1;
  }for (var y2be = 0x0, fz9se = 0x0, hsg = /.*(?:\r\n?|\n)|.*$/g, ro07 = n5r0o['locator'], w6od$ = [{ 'currentNSMap': w3uvam }], on6d5 = {}, y2beq = 0x0;;) {
    try {
      var zshl4_ = t9zefq['indexOf']('<', y2beq);if (0x0 > zshl4_) {
        if (!t9zefq['substr'](y2beq)['match'](/^\s*$/)) {
          var dor501 = n5r0o['doc'],
              w6n$md = dor501['createTextNode'](t9zefq['substr'](y2beq));dor501['appendChild'](w6n$md), n5r0o['currentElement'] = w6n$md;
        }return;
      }switch (zshl4_ > y2beq && f_s4h(zshl4_), t9zefq['charAt'](zshl4_ + 0x1)) {case '/':
          var jr781 = t9zefq['indexOf']('>', zshl4_ + 0x3),
              t9qef = t9zefq['substring'](zshl4_ + 0x2, jr781),
              _s9 = w6od$['pop']();0x0 > jr781 ? (t9qef = t9zefq['substring'](zshl4_ + 0x2)['replace'](/[\s<].*/, ''), h_x4g['error']('end tag name: ' + t9qef + ' is not complete:' + _s9['tagName']), jr781 = zshl4_ + 0x1 + t9qef['length']) : t9qef['match'](/\s</) && (t9qef = t9qef['replace'](/[\s<].*/, ''), h_x4g['error']('end tag name: ' + t9qef + ' maybe not complete'), jr781 = zshl4_ + 0x1 + t9qef['length']);var akgl = _s9['localNSMap'],
              $6nod = _s9['tagName'] == t9qef,
              ti2eyq = $6nod || _s9['tagName'] && _s9['tagName']['toLowerCase']() == t9qef['toLowerCase']();if (ti2eyq) {
            if (n5r0o['endElement'](_s9['uri'], _s9['localName'], t9qef), akgl) {
              for (var zfhs_ in akgl) n5r0o['endPrefixMapping'](zfhs_);
            }$6nod || h_x4g['fatalError']('end tag name: ' + t9qef + ' is not match the current start tagName:' + _s9['tagName']);
          } else w6od$['push'](_s9);jr781++;break;case '?':
          ro07 && h4g(zshl4_), jr781 = e$no(t9zefq, zshl4_, n5r0o);break;case '!':
          ro07 && h4g(zshl4_), jr781 = ee9tfq2(t9zefq, zshl4_, n5r0o, h_x4g);break;default:
          ro07 && h4g(zshl4_);var fzeq = new e_s49(),
              mu36v = w6od$[w6od$['length'] - 0x1]['currentNSMap'],
              jr781 = ew$nd6m(t9zefq, zshl4_, fzeq, mu36v, zs4_h, h_x4g),
              f49sz = fzeq['length'];if (!fzeq['closed'] && evwu6m(t9zefq, jr781, fzeq['tagName'], on6d5) && (fzeq['closed'] = !0x0, rj781['nbsp'] || h_x4g['warning']('unclosed xml attribute')), ro07 && f49sz) {
            for (var r0n5do = ew6$unm(ro07, {}), ga3vxk = 0x0; f49sz > ga3vxk; ga3vxk++) {
              var _hzfs4 = fzeq[ga3vxk];h4g(_hzfs4['offset']), _hzfs4['locator'] = ew6$unm(ro07, {});
            }n5r0o['locator'] = r0n5do, ei92et(fzeq, n5r0o, mu36v) && w6od$['push'](fzeq), n5r0o['locator'] = ro07;
          } else ei92et(fzeq, n5r0o, mu36v) && w6od$['push'](fzeq);'http://www.w3.org/1999/xhtml' !== fzeq['uri'] || fzeq['closed'] ? jr781++ : jr781 = ebyei2(t9zefq, jr781, fzeq['tagName'], zs4_h, n5r0o);}
    } catch (mndw$6) {
      h_x4g['error']('element parse error: ' + mndw$6), jr781 = -0x1;
    }jr781 > y2beq ? y2beq = jr781 : f_s4h(Math['max'](zshl4_, y2beq) + 0x1);
  }
}function ew6$unm(gavk, xkl_) {
  return xkl_['lineNumber'] = gavk['lineNumber'], xkl_['columnNumber'] = gavk['columnNumber'], xkl_;
}function ew$nd6m(e29qtf, vka3m, gavlkx, b2p, s9f_z4, kxg_l) {
  for (var iqpy, $3m6, hkaglx = ++vka3m, o$5n = ewuvma3;;) {
    var xlhakg = e29qtf['charAt'](hkaglx);switch (xlhakg) {case '=':
        if (o$5n === ed5$ron) iqpy = e29qtf['slice'](vka3m, hkaglx), o$5n = eu3$wm6;else {
          if (o$5n !== emauv) throw new Error('attribute equal must after attrName');o$5n = eu3$wm6;
        }break;case '\x27':case '\x22':
        if (o$5n === eu3$wm6 || o$5n === ed5$ron) {
          if (o$5n === ed5$ron && (kxg_l['warning']('attribute value must after "="'), iqpy = e29qtf['slice'](vka3m, hkaglx)), vka3m = hkaglx + 0x1, hkaglx = e29qtf['indexOf'](xlhakg, vka3m), !(hkaglx > 0x0)) throw new Error('attribute value no end \'' + xlhakg + '\' match');$3m6 = e29qtf['slice'](vka3m, hkaglx)['replace'](/&#?\w+;/g, s9f_z4), gavlkx['add'](iqpy, $3m6, vka3m - 0x1), o$5n = ehsf_z;
        } else {
          if (o$5n != eetf9sz) throw new Error('attribute value must after "="');$3m6 = e29qtf['slice'](vka3m, hkaglx)['replace'](/&#?\w+;/g, s9f_z4), gavlkx['add'](iqpy, $3m6, vka3m), kxg_l['warning']('attribute "' + iqpy + '" missed start quot(' + xlhakg + ')!!'), vka3m = hkaglx + 0x1, o$5n = ehsf_z;
        }break;case '/':
        switch (o$5n) {case ewuvma3:
            gavlkx['setTagName'](e29qtf['slice'](vka3m, hkaglx));case ehsf_z:case elvkga:case euk3mv:
            o$5n = euk3mv, gavlkx['closed'] = !0x0;case eetf9sz:case ed5$ron:case emauv:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kxg_l['error']('unexpected end of input'), o$5n == ewuvma3 && gavlkx['setTagName'](e29qtf['slice'](vka3m, hkaglx)), hkaglx;case '>':
        switch (o$5n) {case ewuvma3:
            gavlkx['setTagName'](e29qtf['slice'](vka3m, hkaglx));case ehsf_z:case elvkga:case euk3mv:
            break;case eetf9sz:case ed5$ron:
            $3m6 = e29qtf['slice'](vka3m, hkaglx), '/' === $3m6['slice'](-0x1) && (gavlkx['closed'] = !0x0, $3m6 = $3m6['slice'](0x0, -0x1));case emauv:
            o$5n === emauv && ($3m6 = iqpy), o$5n == eetf9sz ? (kxg_l['warning']('attribute "' + $3m6 + '" missed quot(")!!'), gavlkx['add'](iqpy, $3m6['replace'](/&#?\w+;/g, s9f_z4), vka3m)) : ('http://www.w3.org/1999/xhtml' === b2p[''] && $3m6['match'](/^(?:disabled|checked|selected)$/i) || kxg_l['warning']('attribute "' + $3m6 + '" missed value!! "' + $3m6 + '" instead!!'), gavlkx['add']($3m6, $3m6, vka3m));break;case eu3$wm6:
            throw new Error('attribute value missed!!');}return hkaglx;case '\u0080':
        xlhakg = '\x20';default:
        if ('\x20' >= xlhakg) switch (o$5n) {case ewuvma3:
            gavlkx['setTagName'](e29qtf['slice'](vka3m, hkaglx)), o$5n = elvkga;break;case ed5$ron:
            iqpy = e29qtf['slice'](vka3m, hkaglx), o$5n = emauv;break;case eetf9sz:
            var $3m6 = e29qtf['slice'](vka3m, hkaglx)['replace'](/&#?\w+;/g, s9f_z4);kxg_l['warning']('attribute "' + $3m6 + '" missed quot(")!!'), gavlkx['add'](iqpy, $3m6, vka3m);case ehsf_z:
            o$5n = elvkga;} else switch (o$5n) {case emauv:
            {
              gavlkx['tagName'];
            }'http://www.w3.org/1999/xhtml' === b2p[''] && iqpy['match'](/^(?:disabled|checked|selected)$/i) || kxg_l['warning']('attribute "' + iqpy + '" missed value!! "' + iqpy + '" instead2!!'), gavlkx['add'](iqpy, iqpy, vka3m), vka3m = hkaglx, o$5n = ed5$ron;break;case ehsf_z:
            kxg_l['warning']('attribute space is required"' + iqpy + '\x22!!');case elvkga:
            o$5n = ed5$ron, vka3m = hkaglx;break;case eu3$wm6:
            o$5n = eetf9sz, vka3m = hkaglx;break;case euk3mv:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hkaglx++;
  }
}function ei92et(hlz4_, r5701, s4f9) {
  for (var gx3ka = hlz4_['tagName'], am3vw = null, zfste = hlz4_['length']; zfste--;) {
    var w3u6v = hlz4_[zfste],
        $wmu = w3u6v['qName'],
        rdn$o5 = w3u6v['value'],
        fe29qt = $wmu['indexOf'](':');if (fe29qt > 0x0) var _gkl = w3u6v['prefix'] = $wmu['slice'](0x0, fe29qt),
        h_z = $wmu['slice'](fe29qt + 0x1),
        m$w3u6 = 'xmlns' === _gkl && h_z;else h_z = $wmu, _gkl = null, m$w3u6 = 'xmlns' === $wmu && '';w3u6v['localName'] = h_z, m$w3u6 !== !0x1 && (null == am3vw && (am3vw = {}, etf2eq(s4f9, s4f9 = {})), s4f9[m$w3u6] = am3vw[m$w3u6] = rdn$o5, w3u6v['uri'] = 'http://www.w3.org/2000/xmlns/', r5701['startPrefixMapping'](m$w3u6, rdn$o5));
  }for (var zfste = hlz4_['length']; zfste--;) {
    w3u6v = hlz4_[zfste];var _gkl = w3u6v['prefix'];_gkl && ('xml' === _gkl && (w3u6v['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _gkl && (w3u6v['uri'] = s4f9[_gkl || '']));
  }var fe29qt = gx3ka['indexOf'](':');fe29qt > 0x0 ? (_gkl = hlz4_['prefix'] = gx3ka['slice'](0x0, fe29qt), h_z = hlz4_['localName'] = gx3ka['slice'](fe29qt + 0x1)) : (_gkl = null, h_z = hlz4_['localName'] = gx3ka);var j8 = hlz4_['uri'] = s4f9[_gkl || ''];if (r5701['startElement'](j8, h_z, gx3ka, hlz4_), !hlz4_['closed']) return hlz4_['currentNSMap'] = s4f9, hlz4_['localNSMap'] = am3vw, !0x0;if (r5701['endElement'](j8, h_z, gx3ka), am3vw) {
    for (_gkl in am3vw) r5701['endPrefixMapping'](_gkl);
  }
}function ebyei2(s94tfz, fqzet, $o5nd6, o$5drn, nwm6$) {
  if (/^(?:script|textarea)$/i['test']($o5nd6)) {
    var do6n5 = s94tfz['indexOf']('</' + $o5nd6 + '>', fqzet),
        sf_z = s94tfz['substring'](fqzet + 0x1, do6n5);if (/[&<]/['test'](sf_z)) return (/^script$/i['test']($o5nd6) ? (nwm6$['characters'](sf_z, 0x0, sf_z['length']), do6n5) : (sf_z = sf_z['replace'](/&#?\w+;/g, o$5drn), nwm6$['characters'](sf_z, 0x0, sf_z['length']), do6n5)
    );
  }return fqzet + 0x1;
}function evwu6m(hsf_, o7r1, hs4, uwa3vm) {
  var _sf9z = uwa3vm[hs4];return null == _sf9z && (_sf9z = hsf_['lastIndexOf']('</' + hs4 + '>'), o7r1 > _sf9z && (_sf9z = hsf_['lastIndexOf']('</' + hs4)), uwa3vm[hs4] = _sf9z), o7r1 > _sf9z;
}function etf2eq(u3vak, b2iyp) {
  for (var w6$n in u3vak) b2iyp[w6$n] = u3vak[w6$n];
}function ee9tfq2(ax3uvk, mnw6u, lzs4, xkvag) {
  var n$mu6 = ax3uvk['charAt'](mnw6u + 0x2);switch (n$mu6) {case '-':
      if ('-' === ax3uvk['charAt'](mnw6u + 0x3)) {
        var z4tsf = ax3uvk['indexOf']('-->', mnw6u + 0x4);return z4tsf > mnw6u ? (lzs4['comment'](ax3uvk, mnw6u + 0x4, z4tsf - mnw6u - 0x4), z4tsf + 0x3) : (xkvag['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ax3uvk['substr'](mnw6u + 0x3, 0x6)) {
        var z4tsf = ax3uvk['indexOf'](']]>', mnw6u + 0x9);return lzs4['startCDATA'](), lzs4['characters'](ax3uvk, mnw6u + 0x9, z4tsf - mnw6u - 0x9), lzs4['endCDATA'](), z4tsf + 0x3;
      }var $wm6d = exg3vk(ax3uvk, mnw6u),
          p2yiq = $wm6d['length'];if (p2yiq > 0x1 && /!doctype/i['test']($wm6d[0x0][0x0])) {
        var ak3m = $wm6d[0x1][0x0],
            $ordn = p2yiq > 0x3 && /^public$/i['test']($wm6d[0x2][0x0]) && $wm6d[0x3][0x0],
            r05j = p2yiq > 0x4 && $wm6d[0x4][0x0],
            qyebi = $wm6d[p2yiq - 0x1];return lzs4['startDTD'](ak3m, $ordn && $ordn['replace'](/^(['"])(.*?)\1$/, '$2'), r05j && r05j['replace'](/^(['"])(.*?)\1$/, '$2')), lzs4['endDTD'](), qyebi['index'] + qyebi[0x0]['length'];
      }}return -0x1;
}function e$no(y2qite, o5, dmwn6) {
  var r87j10 = y2qite['indexOf']('?>', o5);if (r87j10) {
    var mvwu3 = y2qite['substring'](o5, r87j10)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mvwu3) {
      {
        mvwu3[0x0]['length'];
      }return dmwn6['processingInstruction'](mvwu3[0x1], mvwu3[0x2]), r87j10 + 0x2;
    }return -0x1;
  }return -0x1;
}function e_s49() {}function ekvg(wd6n$, wmnd6$) {
  return wd6n$['__proto__'] = wmnd6$, wd6n$;
}function exg3vk(gxlvak, hklagx) {
  var do5r$,
      ztf49 = [],
      y2beqi = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (y2beqi['lastIndex'] = hklagx, y2beqi['exec'](gxlvak); do5r$ = y2beqi['exec'](gxlvak);) if (ztf49['push'](do5r$), do5r$[0x1]) return ztf49;
}var eefsz9t = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ees9tzf = new RegExp('[\\-\\.0-9' + eefsz9t['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eakghxl = new RegExp('^' + eefsz9t['source'] + ees9tzf['source'] + '*(?::' + eefsz9t['source'] + ees9tzf['source'] + '*)?$'),
    ewuvma3 = 0x0,
    ed5$ron = 0x1,
    emauv = 0x2,
    eu3$wm6 = 0x3,
    eetf9sz = 0x4,
    ehsf_z = 0x5,
    elvkga = 0x6,
    euk3mv = 0x7;ef49zt['prototype'] = { 'parse': function (ft4s, d15ro, sz_hf4) {
    var r8j17 = this['domBuilder'];r8j17['startDocument'](), etf2eq(d15ro, d15ro = {}), eglha(ft4s, d15ro, sz_hf4, r8j17, this['errorHandler']), r8j17['endDocument']();
  } }, e_s49['prototype'] = { 'setTagName': function (x3kvg) {
    if (!eakghxl['test'](x3kvg)) throw new Error('invalid tagName:' + x3kvg);this['tagName'] = x3kvg;
  }, 'add': function (hs_z4f, ron5$, j810r) {
    if (!eakghxl['test'](hs_z4f)) throw new Error('invalid attribute:' + hs_z4f);this[this['length']++] = { 'qName': hs_z4f, 'value': ron5$, 'offset': j810r };
  }, 'length': 0x0, 'getLocalName': function (i2yqt) {
    return this[i2yqt]['localName'];
  }, 'getLocator': function (umaw) {
    return this[umaw]['locator'];
  }, 'getQName': function (axklvg) {
    return this[axklvg]['qName'];
  }, 'getURI': function (x4g_lh) {
    return this[x4g_lh]['uri'];
  }, 'getValue': function ($5o6dn) {
    return this[$5o6dn]['value'];
  } }, ekvg({}, ekvg['prototype']) instanceof ekvg || (ekvg = function ($rod5n, e92) {
  function f4hz_s() {}f4hz_s['prototype'] = e92, f4hz_s = new f4hz_s();for (e92 in $rod5n) f4hz_s[e92] = $rod5n[e92];return f4hz_s;
}), exports['XMLReader'] = ef49zt;