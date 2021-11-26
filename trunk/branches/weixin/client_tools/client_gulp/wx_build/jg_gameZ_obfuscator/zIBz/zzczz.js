var B = wx.$z;
function zzesa9x() {}function z_r58kb(gf6p4, $jq3mi, $q7m3, $3iq7, y8dbok) {
  function bdky(xph19g) {
    if (xph19g > 0xffff) {
      xph19g -= 0x10000;var f7nliv = 0xd800 + (xph19g >> 0xa),
          by_8kr = 0xdc00 + (0x3ff & xph19g);return String['fromCharCode'](f7nliv, by_8kr);
    }return String['fromCharCode'](xph19g);
  }function sozate(_8b25r) {
    var otkyb = _8b25r['slice'](0x1, -0x1);return otkyb in $q7m3 ? $q7m3[otkyb] : '#' === otkyb['charAt'](0x0) ? bdky(parseInt(otkyb['substr'](0x1)['replace']('x', '0x'))) : (y8dbok['error']('entity not found:' + _8b25r), _8b25r);
  }function _ur25w(xhps1) {
    if (xhps1 > xtzea) {
      var inm7q3 = gf6p4['substring'](xtzea, xhps1)['replace'](/&#?\w+;/g, sozate);s9ezax && b_r285(xtzea), $3iq7['characters'](inm7q3, 0x0, xhps1 - xtzea), xtzea = xhps1;
    }
  }function b_r285(lni7f, tkybd) {
    for (; lni7f >= tdboy && (tkybd = p1sx['exec'](gf6p4));) zxea = tkybd['index'], tdboy = zxea + tkybd[0x0]['length'], s9ezax['lineNumber']++;s9ezax['columnNumber'] = lni7f - zxea + 0x1;
  }for (var zxea = 0x0, tdboy = 0x0, p1sx = /.*(?:\r\n?|\n)|.*$/g, s9ezax = $3iq7['locator'], m7nvil = [{ 'currentNSMap': $jq3mi }], n46fvl = {}, xtzea = 0x0;;) {
    try {
      var azse = gf6p4['indexOf']('<', xtzea);if (0x0 > azse) {
        if (!gf6p4['substr'](xtzea)['match'](/^\s*$/)) {
          var hsa1x9 = $3iq7['doc'],
              ztesoa = hsa1x9['createTextNode'](gf6p4['substr'](xtzea));hsa1x9['appendChild'](ztesoa), $3iq7['currentElement'] = ztesoa;
        }return;
      }switch (azse > xtzea && _ur25w(azse), gf6p4['charAt'](azse + 0x1)) {case '/':
          var k_r5b = gf6p4['indexOf']('>', azse + 0x3),
              xeszta = gf6p4['substring'](azse + 0x2, k_r5b),
              tazsoe = m7nvil['pop']();0x0 > k_r5b ? (xeszta = gf6p4['substring'](azse + 0x2)['replace'](/[\s<].*/, ''), y8dbok['error']('end tag name: ' + xeszta + ' is not complete:' + tazsoe['tagName']), k_r5b = azse + 0x1 + xeszta['length']) : xeszta['match'](/\s</) && (xeszta = xeszta['replace'](/[\s<].*/, ''), y8dbok['error']('end tag name: ' + xeszta + ' maybe not complete'), k_r5b = azse + 0x1 + xeszta['length']);var pg4v6f = tazsoe['localNSMap'],
              vinlm = tazsoe['tagName'] == xeszta,
              f46vn = vinlm || tazsoe['tagName'] && tazsoe['tagName']['toLowerCase']() == xeszta['toLowerCase']();if (f46vn) {
            if ($3iq7['endElement'](tazsoe['uri'], tazsoe['localName'], xeszta), pg4v6f) {
              for (var hp1gx9 in pg4v6f) $3iq7['endPrefixMapping'](hp1gx9);
            }vinlm || y8dbok['fatalError']('end tag name: ' + xeszta + ' is not match the current start tagName:' + tazsoe['tagName']);
          } else m7nvil['push'](tazsoe);k_r5b++;break;case '?':
          s9ezax && b_r285(azse), k_r5b = zg1xh9(gf6p4, azse, $3iq7);break;case '!':
          s9ezax && b_r285(azse), k_r5b = ziq7m$(gf6p4, azse, $3iq7, y8dbok);break;default:
          s9ezax && b_r285(azse);var toea = new zesxta(),
              m$7 = m7nvil[m7nvil['length'] - 0x1]['currentNSMap'],
              k_r5b = zaozste(gf6p4, azse, toea, m$7, sozate, y8dbok),
              hxp9s1 = toea['length'];if (!toea['closed'] && z$3mq7i(gf6p4, k_r5b, toea['tagName'], n46fvl) && (toea['closed'] = !0x0, $q7m3['nbsp'] || y8dbok['warning']('unclosed xml attribute')), s9ezax && hxp9s1) {
            for (var imq73 = ziqn3(s9ezax, {}), qm7n = 0x0; hxp9s1 > qm7n; qm7n++) {
              var vnf46l = toea[qm7n];b_r285(vnf46l['offset']), vnf46l['locator'] = ziqn3(s9ezax, {});
            }$3iq7['locator'] = imq73, zvf7iln(toea, $3iq7, m$7) && m7nvil['push'](toea), $3iq7['locator'] = s9ezax;
          } else zvf7iln(toea, $3iq7, m$7) && m7nvil['push'](toea);'http://www.w3.org/1999/xhtml' !== toea['uri'] || toea['closed'] ? k_r5b++ : k_r5b = zastxz(gf6p4, k_r5b, toea['tagName'], sozate, $3iq7);}
    } catch (dyztk) {
      y8dbok['error']('element parse error: ' + dyztk), k_r5b = -0x1;
    }k_r5b > xtzea ? xtzea = k_r5b : _ur25w(Math['max'](azse, xtzea) + 0x1);
  }
}function ziqn3(ph9g, m7iq$) {
  return m7iq$['lineNumber'] = ph9g['lineNumber'], m7iq$['columnNumber'] = ph9g['columnNumber'], m7iq$;
}function zaozste(b85k, g49p1h, s9x1ha, rb_285, pfh64g, satoze) {
  for (var m73inl, xzsea, w02_ = ++g49p1h, pfh6g = z$37iqm;;) {
    var _byk8r = b85k['charAt'](w02_);switch (_byk8r) {case '=':
        if (pfh6g === ztaoez) m73inl = b85k['slice'](g49p1h, w02_), pfh6g = ztezoad;else {
          if (pfh6g !== zbr_k58) throw new Error('attribute equal must after attrName');pfh6g = ztezoad;
        }break;case '\x27':case '\x22':
        if (pfh6g === ztezoad || pfh6g === ztaoez) {
          if (pfh6g === ztaoez && (satoze['warning']('attribute value must after "="'), m73inl = b85k['slice'](g49p1h, w02_)), g49p1h = w02_ + 0x1, w02_ = b85k['indexOf'](_byk8r, g49p1h), !(w02_ > 0x0)) throw new Error('attribute value no end \'' + _byk8r + '\' match');xzsea = b85k['slice'](g49p1h, w02_)['replace'](/&#?\w+;/g, pfh64g), s9x1ha['add'](m73inl, xzsea, g49p1h - 0x1), pfh6g = zsa9zex;
        } else {
          if (pfh6g != zszexat) throw new Error('attribute value must after "="');xzsea = b85k['slice'](g49p1h, w02_)['replace'](/&#?\w+;/g, pfh64g), s9x1ha['add'](m73inl, xzsea, g49p1h), satoze['warning']('attribute "' + m73inl + '" missed start quot(' + _byk8r + ')!!'), g49p1h = w02_ + 0x1, pfh6g = zsa9zex;
        }break;case '/':
        switch (pfh6g) {case z$37iqm:
            s9x1ha['setTagName'](b85k['slice'](g49p1h, w02_));case zsa9zex:case zokd8yb:case z_r8bky:
            pfh6g = z_r8bky, s9x1ha['closed'] = !0x0;case zszexat:case ztaoez:case zbr_k58:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return satoze['error']('unexpected end of input'), pfh6g == z$37iqm && s9x1ha['setTagName'](b85k['slice'](g49p1h, w02_)), w02_;case '>':
        switch (pfh6g) {case z$37iqm:
            s9x1ha['setTagName'](b85k['slice'](g49p1h, w02_));case zsa9zex:case zokd8yb:case z_r8bky:
            break;case zszexat:case ztaoez:
            xzsea = b85k['slice'](g49p1h, w02_), '/' === xzsea['slice'](-0x1) && (s9x1ha['closed'] = !0x0, xzsea = xzsea['slice'](0x0, -0x1));case zbr_k58:
            pfh6g === zbr_k58 && (xzsea = m73inl), pfh6g == zszexat ? (satoze['warning']('attribute "' + xzsea + '" missed quot(")!!'), s9x1ha['add'](m73inl, xzsea['replace'](/&#?\w+;/g, pfh64g), g49p1h)) : ('http://www.w3.org/1999/xhtml' === rb_285[''] && xzsea['match'](/^(?:disabled|checked|selected)$/i) || satoze['warning']('attribute "' + xzsea + '" missed value!! "' + xzsea + '" instead!!'), s9x1ha['add'](xzsea, xzsea, g49p1h));break;case ztezoad:
            throw new Error('attribute value missed!!');}return w02_;case '\u0080':
        _byk8r = '\x20';default:
        if ('\x20' >= _byk8r) switch (pfh6g) {case z$37iqm:
            s9x1ha['setTagName'](b85k['slice'](g49p1h, w02_)), pfh6g = zokd8yb;break;case ztaoez:
            m73inl = b85k['slice'](g49p1h, w02_), pfh6g = zbr_k58;break;case zszexat:
            var xzsea = b85k['slice'](g49p1h, w02_)['replace'](/&#?\w+;/g, pfh64g);satoze['warning']('attribute "' + xzsea + '" missed quot(")!!'), s9x1ha['add'](m73inl, xzsea, g49p1h);case zsa9zex:
            pfh6g = zokd8yb;} else switch (pfh6g) {case zbr_k58:
            {
              s9x1ha['tagName'];
            }'http://www.w3.org/1999/xhtml' === rb_285[''] && m73inl['match'](/^(?:disabled|checked|selected)$/i) || satoze['warning']('attribute "' + m73inl + '" missed value!! "' + m73inl + '" instead2!!'), s9x1ha['add'](m73inl, m73inl, g49p1h), g49p1h = w02_, pfh6g = ztaoez;break;case zsa9zex:
            satoze['warning']('attribute space is required"' + m73inl + '\x22!!');case zokd8yb:
            pfh6g = ztaoez, g49p1h = w02_;break;case ztezoad:
            pfh6g = zszexat, g49p1h = w02_;break;case z_r8bky:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}w02_++;
  }
}function zvf7iln(p19ghx, axs1h9, xasz) {
  for (var xh1a = p19ghx['tagName'], lmvi7n = null, u82_5r = p19ghx['length']; u82_5r--;) {
    var niv7m = p19ghx[u82_5r],
        rbd8yk = niv7m['qName'],
        iln7m3 = niv7m['value'],
        nmi7lv = rbd8yk['indexOf'](':');if (nmi7lv > 0x0) var vilm7 = niv7m['prefix'] = rbd8yk['slice'](0x0, nmi7lv),
        uwr2 = rbd8yk['slice'](nmi7lv + 0x1),
        n3m7i = 'xmlns' === vilm7 && uwr2;else uwr2 = rbd8yk, vilm7 = null, n3m7i = 'xmlns' === rbd8yk && '';niv7m['localName'] = uwr2, n3m7i !== !0x1 && (null == lmvi7n && (lmvi7n = {}, zr8b(xasz, xasz = {})), xasz[n3m7i] = lmvi7n[n3m7i] = iln7m3, niv7m['uri'] = 'http://www.w3.org/2000/xmlns/', axs1h9['startPrefixMapping'](n3m7i, iln7m3));
  }for (var u82_5r = p19ghx['length']; u82_5r--;) {
    niv7m = p19ghx[u82_5r];var vilm7 = niv7m['prefix'];vilm7 && ('xml' === vilm7 && (niv7m['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vilm7 && (niv7m['uri'] = xasz[vilm7 || '']));
  }var nmi7lv = xh1a['indexOf'](':');nmi7lv > 0x0 ? (vilm7 = p19ghx['prefix'] = xh1a['slice'](0x0, nmi7lv), uwr2 = p19ghx['localName'] = xh1a['slice'](nmi7lv + 0x1)) : (vilm7 = null, uwr2 = p19ghx['localName'] = xh1a);var ryd8b = p19ghx['uri'] = xasz[vilm7 || ''];if (axs1h9['startElement'](ryd8b, uwr2, xh1a, p19ghx), !p19ghx['closed']) return p19ghx['currentNSMap'] = xasz, p19ghx['localNSMap'] = lmvi7n, !0x0;if (axs1h9['endElement'](ryd8b, uwr2, xh1a), lmvi7n) {
    for (vilm7 in lmvi7n) axs1h9['endPrefixMapping'](vilm7);
  }
}function zastxz($mjqi, _r825, ztosea, ydz, az9s) {
  if (/^(?:script|textarea)$/i['test'](ztosea)) {
    var h1px9s = $mjqi['indexOf']('</' + ztosea + '>', _r825),
        yb_kr8 = $mjqi['substring'](_r825 + 0x1, h1px9s);if (/[&<]/['test'](yb_kr8)) return (/^script$/i['test'](ztosea) ? (az9s['characters'](yb_kr8, 0x0, yb_kr8['length']), h1px9s) : (yb_kr8 = yb_kr8['replace'](/&#?\w+;/g, ydz), az9s['characters'](yb_kr8, 0x0, yb_kr8['length']), h1px9s)
    );
  }return _r825 + 0x1;
}function z$3mq7i(ry8bk, stzex, k8_rb5, xsea) {
  var imq3j$ = xsea[k8_rb5];return null == imq3j$ && (imq3j$ = ry8bk['lastIndexOf']('</' + k8_rb5 + '>'), stzex > imq3j$ && (imq3j$ = ry8bk['lastIndexOf']('</' + k8_rb5)), xsea[k8_rb5] = imq3j$), stzex > imq3j$;
}function zr8b(tedoy, sa9) {
  for (var zotase in tedoy) sa9[zotase] = tedoy[zotase];
}function ziq7m$(p91hg4, mi7q3n, _wru25, l7iv) {
  var mivl7n = p91hg4['charAt'](mi7q3n + 0x2);switch (mivl7n) {case '-':
      if ('-' === p91hg4['charAt'](mi7q3n + 0x3)) {
        var fg6p4 = p91hg4['indexOf']('-->', mi7q3n + 0x4);return fg6p4 > mi7q3n ? (_wru25['comment'](p91hg4, mi7q3n + 0x4, fg6p4 - mi7q3n - 0x4), fg6p4 + 0x3) : (l7iv['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == p91hg4['substr'](mi7q3n + 0x3, 0x6)) {
        var fg6p4 = p91hg4['indexOf'](']]>', mi7q3n + 0x9);return _wru25['startCDATA'](), _wru25['characters'](p91hg4, mi7q3n + 0x9, fg6p4 - mi7q3n - 0x9), _wru25['endCDATA'](), fg6p4 + 0x3;
      }var d8okyb = zeodzat(p91hg4, mi7q3n),
          x1hpg9 = d8okyb['length'];if (x1hpg9 > 0x1 && /!doctype/i['test'](d8okyb[0x0][0x0])) {
        var h14p6g = d8okyb[0x1][0x0],
            fpv6g = x1hpg9 > 0x3 && /^public$/i['test'](d8okyb[0x2][0x0]) && d8okyb[0x3][0x0],
            m$3ij = x1hpg9 > 0x4 && d8okyb[0x4][0x0],
            r_kb5 = d8okyb[x1hpg9 - 0x1];return _wru25['startDTD'](h14p6g, fpv6g && fpv6g['replace'](/^(['"])(.*?)\1$/, '$2'), m$3ij && m$3ij['replace'](/^(['"])(.*?)\1$/, '$2')), _wru25['endDTD'](), r_kb5['index'] + r_kb5[0x0]['length'];
      }}return -0x1;
}function zg1xh9(zkty, r2uw_, oza) {
  var f6vpg4 = zkty['indexOf']('?>', r2uw_);if (f6vpg4) {
    var v7imln = zkty['substring'](r2uw_, f6vpg4)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (v7imln) {
      {
        v7imln[0x0]['length'];
      }return oza['processingInstruction'](v7imln[0x1], v7imln[0x2]), f6vpg4 + 0x2;
    }return -0x1;
  }return -0x1;
}function zesxta() {}function zinm3l7(ztdye, u82_5) {
  return ztdye['__proto__'] = u82_5, ztdye;
}function zeodzat(gvl64f, zatesx) {
  var mil7vn,
      dyozt = [],
      zast = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zast['lastIndex'] = zatesx, zast['exec'](gvl64f); mil7vn = zast['exec'](gvl64f);) if (dyozt['push'](mil7vn), mil7vn[0x1]) return dyozt;
}var zv6lg4f = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zjq3mi = new RegExp('[\\-\\.0-9' + zv6lg4f['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zztxsae = new RegExp('^' + zv6lg4f['source'] + zjq3mi['source'] + '*(?::' + zv6lg4f['source'] + zjq3mi['source'] + '*)?$'),
    z$37iqm = 0x0,
    ztaoez = 0x1,
    zbr_k58 = 0x2,
    ztezoad = 0x3,
    zszexat = 0x4,
    zsa9zex = 0x5,
    zokd8yb = 0x6,
    z_r8bky = 0x7;zzesa9x['prototype'] = { 'parse': function (etosz, eozsa, fvn46) {
    var n3l7m = this['domBuilder'];n3l7m['startDocument'](), zr8b(eozsa, eozsa = {}), z_r58kb(etosz, eozsa, fvn46, n3l7m, this['errorHandler']), n3l7m['endDocument']();
  } }, zesxta['prototype'] = { 'setTagName': function (ezyodt) {
    if (!zztxsae['test'](ezyodt)) throw new Error('invalid tagName:' + ezyodt);this['tagName'] = ezyodt;
  }, 'add': function (xsza, oaztd, yb8odk) {
    if (!zztxsae['test'](xsza)) throw new Error('invalid attribute:' + xsza);this[this['length']++] = { 'qName': xsza, 'value': oaztd, 'offset': yb8odk };
  }, 'length': 0x0, 'getLocalName': function (w25_ru) {
    return this[w25_ru]['localName'];
  }, 'getLocator': function (a1esx9) {
    return this[a1esx9]['locator'];
  }, 'getQName': function (eszxat) {
    return this[eszxat]['qName'];
  }, 'getURI': function (nlv7m) {
    return this[nlv7m]['uri'];
  }, 'getValue': function (yobtkd) {
    return this[yobtkd]['value'];
  } }, zinm3l7({}, zinm3l7['prototype']) instanceof zinm3l7 || (zinm3l7 = function (hx91a, ah1x) {
  function x9hp() {}x9hp['prototype'] = ah1x, x9hp = new x9hp();for (ah1x in hx91a) x9hp[ah1x] = hx91a[ah1x];return x9hp;
}), exports['XMLReader'] = zzesa9x;