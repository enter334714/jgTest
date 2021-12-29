var v = wx.$d;
function zwpr8() {}function ztuq(jh4mn, $vl7, c392o5, v1r$p, _4n6h) {
  function fgkz0q(fdkuti) {
    if (fdkuti > 0xffff) {
      fdkuti -= 0x10000;var fk0tgq = 0xd800 + (fdkuti >> 0xa),
          w7pvy = 0xdc00 + (0x3ff & fdkuti);return String['fromCharCode'](fk0tgq, w7pvy);
    }return String['fromCharCode'](fdkuti);
  }function utmd(fqzgk) {
    var kgq0z = fqzgk['slice'](0x1, -0x1);return kgq0z in c392o5 ? c392o5[kgq0z] : '#' === kgq0z['charAt'](0x0) ? fgkz0q(parseInt(kgq0z['substr'](0x1)['replace']('x', '0x'))) : (_4n6h['error']('entity not found:' + fqzgk), fqzgk);
  }function ugtkfq(qzfkg) {
    if (qzfkg > co_93) {
      var id6e = jh4mn['substring'](co_93, qzfkg)['replace'](/&#?\w+;/g, utmd);_6jh && tkuidf(co_93), v1r$p['characters'](id6e, 0x0, qzfkg - co_93), co_93 = qzfkg;
    }
  }function tkuidf(g0qba, uigft) {
    for (; g0qba >= ukqg && (uigft = xa8b0z['exec'](jh4mn));) jmhd = uigft['index'], ukqg = jmhd + uigft[0x0]['length'], _6jh['lineNumber']++;_6jh['columnNumber'] = g0qba - jmhd + 0x1;
  }for (var jmhd = 0x0, ukqg = 0x0, xa8b0z = /.*(?:\r\n?|\n)|.*$/g, _6jh = v1r$p['locator'], rw7$ = [{ 'currentNSMap': $vl7 }], zkg = {}, co_93 = 0x0;;) {
    try {
      var gf0zqk = jh4mn['indexOf']('<', co_93);if (0x0 > gf0zqk) {
        if (!jh4mn['substr'](co_93)['match'](/^\s*$/)) {
          var etmui = v1r$p['doc'],
              emhnj = etmui['createTextNode'](jh4mn['substr'](co_93));etmui['appendChild'](emhnj), v1r$p['currentElement'] = emhnj;
        }return;
      }switch (gf0zqk > co_93 && ugtkfq(gf0zqk), jh4mn['charAt'](gf0zqk + 0x1)) {case '/':
          var zg0bq = jh4mn['indexOf']('>', gf0zqk + 0x3),
              $vwp1r = jh4mn['substring'](gf0zqk + 0x2, zg0bq),
              bqax = rw7$['pop']();0x0 > zg0bq ? ($vwp1r = jh4mn['substring'](gf0zqk + 0x2)['replace'](/[\s<].*/, ''), _4n6h['error']('end tag name: ' + $vwp1r + ' is not complete:' + bqax['tagName']), zg0bq = gf0zqk + 0x1 + $vwp1r['length']) : $vwp1r['match'](/\s</) && ($vwp1r = $vwp1r['replace'](/[\s<].*/, ''), _4n6h['error']('end tag name: ' + $vwp1r + ' maybe not complete'), zg0bq = gf0zqk + 0x1 + $vwp1r['length']);var o49c_ = bqax['localNSMap'],
              hdei = bqax['tagName'] == $vwp1r,
              edu6 = hdei || bqax['tagName'] && bqax['tagName']['toLowerCase']() == $vwp1r['toLowerCase']();if (edu6) {
            if (v1r$p['endElement'](bqax['uri'], bqax['localName'], $vwp1r), o49c_) {
              for (var g0zaqb in o49c_) v1r$p['endPrefixMapping'](g0zaqb);
            }hdei || _4n6h['fatalError']('end tag name: ' + $vwp1r + ' is not match the current start tagName:' + bqax['tagName']);
          } else rw7$['push'](bqax);zg0bq++;break;case '?':
          _6jh && tkuidf(gf0zqk), zg0bq = zitu(jh4mn, gf0zqk, v1r$p);break;case '!':
          _6jh && tkuidf(gf0zqk), zg0bq = zly$7pv(jh4mn, gf0zqk, v1r$p, _4n6h);break;default:
          _6jh && tkuidf(gf0zqk);var d6ehim = new zumie6d(),
              emud6 = rw7$[rw7$['length'] - 0x1]['currentNSMap'],
              zg0bq = zgbaq0z(jh4mn, gf0zqk, d6ehim, emud6, utmd, _4n6h),
              emtid = d6ehim['length'];if (!d6ehim['closed'] && zyv$p7l(jh4mn, zg0bq, d6ehim['tagName'], zkg) && (d6ehim['closed'] = !0x0, c392o5['nbsp'] || _4n6h['warning']('unclosed xml attribute')), _6jh && emtid) {
            for (var wv7py = zfidute(_6jh, {}), gk0qa = 0x0; emtid > gk0qa; gk0qa++) {
              var mieutd = d6ehim[gk0qa];tkuidf(mieutd['offset']), mieutd['locator'] = zfidute(_6jh, {});
            }v1r$p['locator'] = wv7py, zfutikd(d6ehim, v1r$p, emud6) && rw7$['push'](d6ehim), v1r$p['locator'] = _6jh;
          } else zfutikd(d6ehim, v1r$p, emud6) && rw7$['push'](d6ehim);'http://www.w3.org/1999/xhtml' !== d6ehim['uri'] || d6ehim['closed'] ? zg0bq++ : zg0bq = zkfgtq(jh4mn, zg0bq, d6ehim['tagName'], utmd, v1r$p);}
    } catch (jne6hm) {
      _4n6h['error']('element parse error: ' + jne6hm), zg0bq = -0x1;
    }zg0bq > co_93 ? co_93 = zg0bq : ugtkfq(Math['max'](gf0zqk, co_93) + 0x1);
  }
}function zfidute(pr1w8, gakq) {
  return gakq['lineNumber'] = pr1w8['lineNumber'], gakq['columnNumber'] = pr1w8['columnNumber'], gakq;
}function zgbaq0z(wvp7$, dktuf, mdhe, fkzg, $wyv7p, gazk0q) {
  for (var mudeit, wyvp, $w1x8 = ++dktuf, ugkfqt = zb8a;;) {
    var v1p$r = wvp7$['charAt']($w1x8);switch (v1p$r) {case '=':
        if (ugkfqt === zr1bx8) mudeit = wvp7$['slice'](dktuf, $w1x8), ugkfqt = zejd6h;else {
          if (ugkfqt !== zaz0qg) throw new Error('attribute equal must after attrName');ugkfqt = zejd6h;
        }break;case '\x27':case '\x22':
        if (ugkfqt === zejd6h || ugkfqt === zr1bx8) {
          if (ugkfqt === zr1bx8 && (gazk0q['warning']('attribute value must after "="'), mudeit = wvp7$['slice'](dktuf, $w1x8)), dktuf = $w1x8 + 0x1, $w1x8 = wvp7$['indexOf'](v1p$r, dktuf), !($w1x8 > 0x0)) throw new Error('attribute value no end \'' + v1p$r + '\' match');wyvp = wvp7$['slice'](dktuf, $w1x8)['replace'](/&#?\w+;/g, $wyv7p), mdhe['add'](mudeit, wyvp, dktuf - 0x1), ugkfqt = z_3co49;
        } else {
          if (ugkfqt != ze6mui) throw new Error('attribute value must after "="');wyvp = wvp7$['slice'](dktuf, $w1x8)['replace'](/&#?\w+;/g, $wyv7p), mdhe['add'](mudeit, wyvp, dktuf), gazk0q['warning']('attribute "' + mudeit + '" missed start quot(' + v1p$r + ')!!'), dktuf = $w1x8 + 0x1, ugkfqt = z_3co49;
        }break;case '/':
        switch (ugkfqt) {case zb8a:
            mdhe['setTagName'](wvp7$['slice'](dktuf, $w1x8));case z_3co49:case zxw1r8b:case zitguf:
            ugkfqt = zitguf, mdhe['closed'] = !0x0;case ze6mui:case zr1bx8:case zaz0qg:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gazk0q['error']('unexpected end of input'), ugkfqt == zb8a && mdhe['setTagName'](wvp7$['slice'](dktuf, $w1x8)), $w1x8;case '>':
        switch (ugkfqt) {case zb8a:
            mdhe['setTagName'](wvp7$['slice'](dktuf, $w1x8));case z_3co49:case zxw1r8b:case zitguf:
            break;case ze6mui:case zr1bx8:
            wyvp = wvp7$['slice'](dktuf, $w1x8), '/' === wyvp['slice'](-0x1) && (mdhe['closed'] = !0x0, wyvp = wyvp['slice'](0x0, -0x1));case zaz0qg:
            ugkfqt === zaz0qg && (wyvp = mudeit), ugkfqt == ze6mui ? (gazk0q['warning']('attribute "' + wyvp + '" missed quot(")!!'), mdhe['add'](mudeit, wyvp['replace'](/&#?\w+;/g, $wyv7p), dktuf)) : ('http://www.w3.org/1999/xhtml' === fkzg[''] && wyvp['match'](/^(?:disabled|checked|selected)$/i) || gazk0q['warning']('attribute "' + wyvp + '" missed value!! "' + wyvp + '" instead!!'), mdhe['add'](wyvp, wyvp, dktuf));break;case zejd6h:
            throw new Error('attribute value missed!!');}return $w1x8;case '\u0080':
        v1p$r = '\x20';default:
        if ('\x20' >= v1p$r) switch (ugkfqt) {case zb8a:
            mdhe['setTagName'](wvp7$['slice'](dktuf, $w1x8)), ugkfqt = zxw1r8b;break;case zr1bx8:
            mudeit = wvp7$['slice'](dktuf, $w1x8), ugkfqt = zaz0qg;break;case ze6mui:
            var wyvp = wvp7$['slice'](dktuf, $w1x8)['replace'](/&#?\w+;/g, $wyv7p);gazk0q['warning']('attribute "' + wyvp + '" missed quot(")!!'), mdhe['add'](mudeit, wyvp, dktuf);case z_3co49:
            ugkfqt = zxw1r8b;} else switch (ugkfqt) {case zaz0qg:
            {
              mdhe['tagName'];
            }'http://www.w3.org/1999/xhtml' === fkzg[''] && mudeit['match'](/^(?:disabled|checked|selected)$/i) || gazk0q['warning']('attribute "' + mudeit + '" missed value!! "' + mudeit + '" instead2!!'), mdhe['add'](mudeit, mudeit, dktuf), dktuf = $w1x8, ugkfqt = zr1bx8;break;case z_3co49:
            gazk0q['warning']('attribute space is required"' + mudeit + '\x22!!');case zxw1r8b:
            ugkfqt = zr1bx8, dktuf = $w1x8;break;case zejd6h:
            ugkfqt = ze6mui, dktuf = $w1x8;break;case zitguf:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$w1x8++;
  }
}function zfutikd(zbax8, dftuk, w$1vr) {
  for (var _j439 = zbax8['tagName'], w$v7pr = null, c3n4_9 = zbax8['length']; c3n4_9--;) {
    var r8bw1 = zbax8[c3n4_9],
        ietf = r8bw1['qName'],
        w1pr8$ = r8bw1['value'],
        lvyp7$ = ietf['indexOf'](':');if (lvyp7$ > 0x0) var $1v = r8bw1['prefix'] = ietf['slice'](0x0, lvyp7$),
        $8rx1 = ietf['slice'](lvyp7$ + 0x1),
        ba8zx1 = 'xmlns' === $1v && $8rx1;else $8rx1 = ietf, $1v = null, ba8zx1 = 'xmlns' === ietf && '';r8bw1['localName'] = $8rx1, ba8zx1 !== !0x1 && (null == w$v7pr && (w$v7pr = {}, zi6m(w$1vr, w$1vr = {})), w$1vr[ba8zx1] = w$v7pr[ba8zx1] = w1pr8$, r8bw1['uri'] = 'http://www.w3.org/2000/xmlns/', dftuk['startPrefixMapping'](ba8zx1, w1pr8$));
  }for (var c3n4_9 = zbax8['length']; c3n4_9--;) {
    r8bw1 = zbax8[c3n4_9];var $1v = r8bw1['prefix'];$1v && ('xml' === $1v && (r8bw1['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $1v && (r8bw1['uri'] = w$1vr[$1v || '']));
  }var lvyp7$ = _j439['indexOf'](':');lvyp7$ > 0x0 ? ($1v = zbax8['prefix'] = _j439['slice'](0x0, lvyp7$), $8rx1 = zbax8['localName'] = _j439['slice'](lvyp7$ + 0x1)) : ($1v = null, $8rx1 = zbax8['localName'] = _j439);var ej6mn = zbax8['uri'] = w$1vr[$1v || ''];if (dftuk['startElement'](ej6mn, $8rx1, _j439, zbax8), !zbax8['closed']) return zbax8['currentNSMap'] = w$1vr, zbax8['localNSMap'] = w$v7pr, !0x0;if (dftuk['endElement'](ej6mn, $8rx1, _j439), w$v7pr) {
    for ($1v in w$v7pr) dftuk['endPrefixMapping']($1v);
  }
}function zkfgtq(kufq, qzbg, m6ehn, r$x1w8, gzq0ka) {
  if (/^(?:script|textarea)$/i['test'](m6ehn)) {
    var n93 = kufq['indexOf']('</' + m6ehn + '>', qzbg),
        p$rv7 = kufq['substring'](qzbg + 0x1, n93);if (/[&<]/['test'](p$rv7)) return (/^script$/i['test'](m6ehn) ? (gzq0ka['characters'](p$rv7, 0x0, p$rv7['length']), n93) : (p$rv7 = p$rv7['replace'](/&#?\w+;/g, r$x1w8), gzq0ka['characters'](p$rv7, 0x0, p$rv7['length']), n93)
    );
  }return qzbg + 0x1;
}function zyv$p7l(gkufit, ktguf, vwp1r$, dmietu) {
  var dtmuie = dmietu[vwp1r$];return null == dtmuie && (dtmuie = gkufit['lastIndexOf']('</' + vwp1r$ + '>'), ktguf > dtmuie && (dtmuie = gkufit['lastIndexOf']('</' + vwp1r$)), dmietu[vwp1r$] = dtmuie), ktguf > dtmuie;
}function zi6m(_j4n93, j_46) {
  for (var ba1xr in _j4n93) j_46[ba1xr] = _j4n93[ba1xr];
}function zly$7pv(bax0zq, uftqkg, uidtkf, qfgkut) {
  var iefutd = bax0zq['charAt'](uftqkg + 0x2);switch (iefutd) {case '-':
      if ('-' === bax0zq['charAt'](uftqkg + 0x3)) {
        var k0qz = bax0zq['indexOf']('-->', uftqkg + 0x4);return k0qz > uftqkg ? (uidtkf['comment'](bax0zq, uftqkg + 0x4, k0qz - uftqkg - 0x4), k0qz + 0x3) : (qfgkut['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bax0zq['substr'](uftqkg + 0x3, 0x6)) {
        var k0qz = bax0zq['indexOf'](']]>', uftqkg + 0x9);return uidtkf['startCDATA'](), uidtkf['characters'](bax0zq, uftqkg + 0x9, k0qz - uftqkg - 0x9), uidtkf['endCDATA'](), k0qz + 0x3;
      }var c9_35 = zgktqu(bax0zq, uftqkg),
          rwv$1 = c9_35['length'];if (rwv$1 > 0x1 && /!doctype/i['test'](c9_35[0x0][0x0])) {
        var pw1v$ = c9_35[0x1][0x0],
            tfkidu = rwv$1 > 0x3 && /^public$/i['test'](c9_35[0x2][0x0]) && c9_35[0x3][0x0],
            c9352 = rwv$1 > 0x4 && c9_35[0x4][0x0],
            ak0 = c9_35[rwv$1 - 0x1];return uidtkf['startDTD'](pw1v$, tfkidu && tfkidu['replace'](/^(['"])(.*?)\1$/, '$2'), c9352 && c9352['replace'](/^(['"])(.*?)\1$/, '$2')), uidtkf['endDTD'](), ak0['index'] + ak0[0x0]['length'];
      }}return -0x1;
}function zitu(dtkfi, b1a8xz, ktiugf) {
  var h4n9j = dtkfi['indexOf']('?>', b1a8xz);if (h4n9j) {
    var xzqb0a = dtkfi['substring'](b1a8xz, h4n9j)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xzqb0a) {
      {
        xzqb0a[0x0]['length'];
      }return ktiugf['processingInstruction'](xzqb0a[0x1], xzqb0a[0x2]), h4n9j + 0x2;
    }return -0x1;
  }return -0x1;
}function zumie6d() {}function za8xz(utdif, a0qxz) {
  return utdif['__proto__'] = a0qxz, utdif;
}function zgktqu(n4j9, hm6en) {
  var $vyp7w,
      nh4_j6 = [],
      n_93c = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (n_93c['lastIndex'] = hm6en, n_93c['exec'](n4j9); $vyp7w = n_93c['exec'](n4j9);) if (nh4_j6['push']($vyp7w), $vyp7w[0x1]) return nh4_j6;
}var zeih6d = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ze6ud = new RegExp('[\\-\\.0-9' + zeih6d['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zaq0gz = new RegExp('^' + zeih6d['source'] + ze6ud['source'] + '*(?::' + zeih6d['source'] + ze6ud['source'] + '*)?$'),
    zb8a = 0x0,
    zr1bx8 = 0x1,
    zaz0qg = 0x2,
    zejd6h = 0x3,
    ze6mui = 0x4,
    z_3co49 = 0x5,
    zxw1r8b = 0x6,
    zitguf = 0x7;zwpr8['prototype'] = { 'parse': function ($81wpr, he6mj, qut) {
    var d6i = this['domBuilder'];d6i['startDocument'](), zi6m(he6mj, he6mj = {}), ztuq($81wpr, he6mj, qut, d6i, this['errorHandler']), d6i['endDocument']();
  } }, zumie6d['prototype'] = { 'setTagName': function (ab0) {
    if (!zaq0gz['test'](ab0)) throw new Error('invalid tagName:' + ab0);this['tagName'] = ab0;
  }, 'add': function (imd6eh, de6hi, pvr$w1) {
    if (!zaq0gz['test'](imd6eh)) throw new Error('invalid attribute:' + imd6eh);this[this['length']++] = { 'qName': imd6eh, 'value': de6hi, 'offset': pvr$w1 };
  }, 'length': 0x0, 'getLocalName': function (pl$yv7) {
    return this[pl$yv7]['localName'];
  }, 'getLocator': function (duk) {
    return this[duk]['locator'];
  }, 'getQName': function (fetu) {
    return this[fetu]['qName'];
  }, 'getURI': function (v$yp7l) {
    return this[v$yp7l]['uri'];
  }, 'getValue': function ($7pvwy) {
    return this[$7pvwy]['value'];
  } }, za8xz({}, za8xz['prototype']) instanceof za8xz || (za8xz = function (abqg, azgk0) {
  function o25c9() {}o25c9['prototype'] = azgk0, o25c9 = new o25c9();for (azgk0 in abqg) o25c9[azgk0] = abqg[azgk0];return o25c9;
}), exports['XMLReader'] = zwpr8;