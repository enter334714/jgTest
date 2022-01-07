var v = wx.$d;
function zkfqg0() {}function zbr18a(qabgz, mdej6h, fk0gzq, ka0gzq, enjhm) {
  function jhe6m(_6njh) {
    if (_6njh > 0xffff) {
      _6njh -= 0x10000;var udmite = 0xd800 + (_6njh >> 0xa),
          gfk0t = 0xdc00 + (0x3ff & _6njh);return String['fromCharCode'](udmite, gfk0t);
    }return String['fromCharCode'](_6njh);
  }function w1bxr(tkidu) {
    var za0kgq = tkidu['slice'](0x1, -0x1);return za0kgq in fk0gzq ? fk0gzq[za0kgq] : '#' === za0kgq['charAt'](0x0) ? jhe6m(parseInt(za0kgq['substr'](0x1)['replace']('x', '0x'))) : (enjhm['error']('entity not found:' + tkidu), tkidu);
  }function kfg0zq(nh4j_6) {
    if (nh4j_6 > pvrw$7) {
      var n_4j39 = qabgz['substring'](pvrw$7, nh4j_6)['replace'](/&#?\w+;/g, w1bxr);a1bz8x && tgkuq(pvrw$7), ka0gzq['characters'](n_4j39, 0x0, nh4j_6 - pvrw$7), pvrw$7 = nh4j_6;
    }
  }function tgkuq(dimute, hn4j9_) {
    for (; dimute >= qtfku && (hn4j9_ = c3o259['exec'](qabgz));) i6mdh = hn4j9_['index'], qtfku = i6mdh + hn4j9_[0x0]['length'], a1bz8x['lineNumber']++;a1bz8x['columnNumber'] = dimute - i6mdh + 0x1;
  }for (var i6mdh = 0x0, qtfku = 0x0, c3o259 = /.*(?:\r\n?|\n)|.*$/g, a1bz8x = ka0gzq['locator'], yvpl$7 = [{ 'currentNSMap': mdej6h }], edfit = {}, pvrw$7 = 0x0;;) {
    try {
      var abz0qx = qabgz['indexOf']('<', pvrw$7);if (0x0 > abz0qx) {
        if (!qabgz['substr'](pvrw$7)['match'](/^\s*$/)) {
          var x8z0a = ka0gzq['doc'],
              itudfe = x8z0a['createTextNode'](qabgz['substr'](pvrw$7));x8z0a['appendChild'](itudfe), ka0gzq['currentElement'] = itudfe;
        }return;
      }switch (abz0qx > pvrw$7 && kfg0zq(abz0qx), qabgz['charAt'](abz0qx + 0x1)) {case '/':
          var hej6 = qabgz['indexOf']('>', abz0qx + 0x3),
              y7vl$ = qabgz['substring'](abz0qx + 0x2, hej6),
              mdeui6 = yvpl$7['pop']();0x0 > hej6 ? (y7vl$ = qabgz['substring'](abz0qx + 0x2)['replace'](/[\s<].*/, ''), enjhm['error']('end tag name: ' + y7vl$ + ' is not complete:' + mdeui6['tagName']), hej6 = abz0qx + 0x1 + y7vl$['length']) : y7vl$['match'](/\s</) && (y7vl$ = y7vl$['replace'](/[\s<].*/, ''), enjhm['error']('end tag name: ' + y7vl$ + ' maybe not complete'), hej6 = abz0qx + 0x1 + y7vl$['length']);var ide6mu = mdeui6['localNSMap'],
              tkifug = mdeui6['tagName'] == y7vl$,
              $y7v = tkifug || mdeui6['tagName'] && mdeui6['tagName']['toLowerCase']() == y7vl$['toLowerCase']();if ($y7v) {
            if (ka0gzq['endElement'](mdeui6['uri'], mdeui6['localName'], y7vl$), ide6mu) {
              for (var fqg0t in ide6mu) ka0gzq['endPrefixMapping'](fqg0t);
            }tkifug || enjhm['fatalError']('end tag name: ' + y7vl$ + ' is not match the current start tagName:' + mdeui6['tagName']);
          } else yvpl$7['push'](mdeui6);hej6++;break;case '?':
          a1bz8x && tgkuq(abz0qx), hej6 = zbxzq(qabgz, abz0qx, ka0gzq);break;case '!':
          a1bz8x && tgkuq(abz0qx), hej6 = zu6dmi(qabgz, abz0qx, ka0gzq, enjhm);break;default:
          a1bz8x && tgkuq(abz0qx);var mj6dhe = new zm6nhe(),
              pw7v$ = yvpl$7[yvpl$7['length'] - 0x1]['currentNSMap'],
              hej6 = zo_395(qabgz, abz0qx, mj6dhe, pw7v$, w1bxr, enjhm),
              m6hn4 = mj6dhe['length'];if (!mj6dhe['closed'] && zgfkuti(qabgz, hej6, mj6dhe['tagName'], edfit) && (mj6dhe['closed'] = !0x0, fk0gzq['nbsp'] || enjhm['warning']('unclosed xml attribute')), a1bz8x && m6hn4) {
            for (var $wv7rp = zmjde(a1bz8x, {}), z1bax8 = 0x0; m6hn4 > z1bax8; z1bax8++) {
              var v$7ly = mj6dhe[z1bax8];tgkuq(v$7ly['offset']), v$7ly['locator'] = zmjde(a1bz8x, {});
            }ka0gzq['locator'] = $wv7rp, z$rp7wv(mj6dhe, ka0gzq, pw7v$) && yvpl$7['push'](mj6dhe), ka0gzq['locator'] = a1bz8x;
          } else z$rp7wv(mj6dhe, ka0gzq, pw7v$) && yvpl$7['push'](mj6dhe);'http://www.w3.org/1999/xhtml' !== mj6dhe['uri'] || mj6dhe['closed'] ? hej6++ : hej6 = zhj6de(qabgz, hej6, mj6dhe['tagName'], w1bxr, ka0gzq);}
    } catch (o395) {
      enjhm['error']('element parse error: ' + o395), hej6 = -0x1;
    }hej6 > pvrw$7 ? pvrw$7 = hej6 : kfg0zq(Math['max'](abz0qx, pvrw$7) + 0x1);
  }
}function zmjde(uieftd, qk0gaz) {
  return qk0gaz['lineNumber'] = uieftd['lineNumber'], qk0gaz['columnNumber'] = uieftd['columnNumber'], qk0gaz;
}function zo_395(agbz, n_4jh9, yw7v$, m6jhde, m6njh, $wvrp1) {
  for (var eft, gfukti, aqk0g = ++n_4jh9, fzqkg = zhdmi6;;) {
    var o4c39_ = agbz['charAt'](aqk0g);switch (o4c39_) {case '=':
        if (fzqkg === z$w8xr1) eft = agbz['slice'](n_4jh9, aqk0g), fzqkg = zemi;else {
          if (fzqkg !== zvr1wp) throw new Error('attribute equal must after attrName');fzqkg = zemi;
        }break;case '\x27':case '\x22':
        if (fzqkg === zemi || fzqkg === z$w8xr1) {
          if (fzqkg === z$w8xr1 && ($wvrp1['warning']('attribute value must after "="'), eft = agbz['slice'](n_4jh9, aqk0g)), n_4jh9 = aqk0g + 0x1, aqk0g = agbz['indexOf'](o4c39_, n_4jh9), !(aqk0g > 0x0)) throw new Error('attribute value no end \'' + o4c39_ + '\' match');gfukti = agbz['slice'](n_4jh9, aqk0g)['replace'](/&#?\w+;/g, m6njh), yw7v$['add'](eft, gfukti, n_4jh9 - 0x1), fzqkg = zgqa0kz;
        } else {
          if (fzqkg != zmutd) throw new Error('attribute value must after "="');gfukti = agbz['slice'](n_4jh9, aqk0g)['replace'](/&#?\w+;/g, m6njh), yw7v$['add'](eft, gfukti, n_4jh9), $wvrp1['warning']('attribute "' + eft + '" missed start quot(' + o4c39_ + ')!!'), n_4jh9 = aqk0g + 0x1, fzqkg = zgqa0kz;
        }break;case '/':
        switch (fzqkg) {case zhdmi6:
            yw7v$['setTagName'](agbz['slice'](n_4jh9, aqk0g));case zgqa0kz:case zqfg0k:case zh4_jn9:
            fzqkg = zh4_jn9, yw7v$['closed'] = !0x0;case zmutd:case z$w8xr1:case zvr1wp:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $wvrp1['error']('unexpected end of input'), fzqkg == zhdmi6 && yw7v$['setTagName'](agbz['slice'](n_4jh9, aqk0g)), aqk0g;case '>':
        switch (fzqkg) {case zhdmi6:
            yw7v$['setTagName'](agbz['slice'](n_4jh9, aqk0g));case zgqa0kz:case zqfg0k:case zh4_jn9:
            break;case zmutd:case z$w8xr1:
            gfukti = agbz['slice'](n_4jh9, aqk0g), '/' === gfukti['slice'](-0x1) && (yw7v$['closed'] = !0x0, gfukti = gfukti['slice'](0x0, -0x1));case zvr1wp:
            fzqkg === zvr1wp && (gfukti = eft), fzqkg == zmutd ? ($wvrp1['warning']('attribute "' + gfukti + '" missed quot(")!!'), yw7v$['add'](eft, gfukti['replace'](/&#?\w+;/g, m6njh), n_4jh9)) : ('http://www.w3.org/1999/xhtml' === m6jhde[''] && gfukti['match'](/^(?:disabled|checked|selected)$/i) || $wvrp1['warning']('attribute "' + gfukti + '" missed value!! "' + gfukti + '" instead!!'), yw7v$['add'](gfukti, gfukti, n_4jh9));break;case zemi:
            throw new Error('attribute value missed!!');}return aqk0g;case '\u0080':
        o4c39_ = '\x20';default:
        if ('\x20' >= o4c39_) switch (fzqkg) {case zhdmi6:
            yw7v$['setTagName'](agbz['slice'](n_4jh9, aqk0g)), fzqkg = zqfg0k;break;case z$w8xr1:
            eft = agbz['slice'](n_4jh9, aqk0g), fzqkg = zvr1wp;break;case zmutd:
            var gfukti = agbz['slice'](n_4jh9, aqk0g)['replace'](/&#?\w+;/g, m6njh);$wvrp1['warning']('attribute "' + gfukti + '" missed quot(")!!'), yw7v$['add'](eft, gfukti, n_4jh9);case zgqa0kz:
            fzqkg = zqfg0k;} else switch (fzqkg) {case zvr1wp:
            {
              yw7v$['tagName'];
            }'http://www.w3.org/1999/xhtml' === m6jhde[''] && eft['match'](/^(?:disabled|checked|selected)$/i) || $wvrp1['warning']('attribute "' + eft + '" missed value!! "' + eft + '" instead2!!'), yw7v$['add'](eft, eft, n_4jh9), n_4jh9 = aqk0g, fzqkg = z$w8xr1;break;case zgqa0kz:
            $wvrp1['warning']('attribute space is required"' + eft + '\x22!!');case zqfg0k:
            fzqkg = z$w8xr1, n_4jh9 = aqk0g;break;case zemi:
            fzqkg = zmutd, n_4jh9 = aqk0g;break;case zh4_jn9:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}aqk0g++;
  }
}function z$rp7wv(tkuqfg, $p7l, kfgtq0) {
  for (var tdiemu = tkuqfg['tagName'], imeud6 = null, y$lpv = tkuqfg['length']; y$lpv--;) {
    var m6jnh4 = tkuqfg[y$lpv],
        h6dmej = m6jnh4['qName'],
        abz8x0 = m6jnh4['value'],
        ehi6m = h6dmej['indexOf'](':');if (ehi6m > 0x0) var o3c925 = m6jnh4['prefix'] = h6dmej['slice'](0x0, ehi6m),
        v1p$w = h6dmej['slice'](ehi6m + 0x1),
        detmui = 'xmlns' === o3c925 && v1p$w;else v1p$w = h6dmej, o3c925 = null, detmui = 'xmlns' === h6dmej && '';m6jnh4['localName'] = v1p$w, detmui !== !0x1 && (null == imeud6 && (imeud6 = {}, zftudki(kfgtq0, kfgtq0 = {})), kfgtq0[detmui] = imeud6[detmui] = abz8x0, m6jnh4['uri'] = 'http://www.w3.org/2000/xmlns/', $p7l['startPrefixMapping'](detmui, abz8x0));
  }for (var y$lpv = tkuqfg['length']; y$lpv--;) {
    m6jnh4 = tkuqfg[y$lpv];var o3c925 = m6jnh4['prefix'];o3c925 && ('xml' === o3c925 && (m6jnh4['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== o3c925 && (m6jnh4['uri'] = kfgtq0[o3c925 || '']));
  }var ehi6m = tdiemu['indexOf'](':');ehi6m > 0x0 ? (o3c925 = tkuqfg['prefix'] = tdiemu['slice'](0x0, ehi6m), v1p$w = tkuqfg['localName'] = tdiemu['slice'](ehi6m + 0x1)) : (o3c925 = null, v1p$w = tkuqfg['localName'] = tdiemu);var m6n = tkuqfg['uri'] = kfgtq0[o3c925 || ''];if ($p7l['startElement'](m6n, v1p$w, tdiemu, tkuqfg), !tkuqfg['closed']) return tkuqfg['currentNSMap'] = kfgtq0, tkuqfg['localNSMap'] = imeud6, !0x0;if ($p7l['endElement'](m6n, v1p$w, tdiemu), imeud6) {
    for (o3c925 in imeud6) $p7l['endPrefixMapping'](o3c925);
  }
}function zhj6de(umiedt, eih6, $wvy7p, kugtq, wp1r$v) {
  if (/^(?:script|textarea)$/i['test']($wvy7p)) {
    var utdime = umiedt['indexOf']('</' + $wvy7p + '>', eih6),
        a0zx8b = umiedt['substring'](eih6 + 0x1, utdime);if (/[&<]/['test'](a0zx8b)) return (/^script$/i['test']($wvy7p) ? (wp1r$v['characters'](a0zx8b, 0x0, a0zx8b['length']), utdime) : (a0zx8b = a0zx8b['replace'](/&#?\w+;/g, kugtq), wp1r$v['characters'](a0zx8b, 0x0, a0zx8b['length']), utdime)
    );
  }return eih6 + 0x1;
}function zgfkuti(vyp7$, m6dhej, idmeut, wr$v1p) {
  var qzba0 = wr$v1p[idmeut];return null == qzba0 && (qzba0 = vyp7$['lastIndexOf']('</' + idmeut + '>'), m6dhej > qzba0 && (qzba0 = vyp7$['lastIndexOf']('</' + idmeut)), wr$v1p[idmeut] = qzba0), m6dhej > qzba0;
}function zftudki(qagzk, eimdu6) {
  for (var zgqb0 in qagzk) eimdu6[zgqb0] = qagzk[zgqb0];
}function zu6dmi(gqfkz0, $r7w, azgbq0, emdhi) {
  var x80ab = gqfkz0['charAt']($r7w + 0x2);switch (x80ab) {case '-':
      if ('-' === gqfkz0['charAt']($r7w + 0x3)) {
        var tim = gqfkz0['indexOf']('-->', $r7w + 0x4);return tim > $r7w ? (azgbq0['comment'](gqfkz0, $r7w + 0x4, tim - $r7w - 0x4), tim + 0x3) : (emdhi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gqfkz0['substr']($r7w + 0x3, 0x6)) {
        var tim = gqfkz0['indexOf'](']]>', $r7w + 0x9);return azgbq0['startCDATA'](), azgbq0['characters'](gqfkz0, $r7w + 0x9, tim - $r7w - 0x9), azgbq0['endCDATA'](), tim + 0x3;
      }var tfuig = zhm6nj(gqfkz0, $r7w),
          w1r$ = tfuig['length'];if (w1r$ > 0x1 && /!doctype/i['test'](tfuig[0x0][0x0])) {
        var wrxb18 = tfuig[0x1][0x0],
            tfkqug = w1r$ > 0x3 && /^public$/i['test'](tfuig[0x2][0x0]) && tfuig[0x3][0x0],
            dehi = w1r$ > 0x4 && tfuig[0x4][0x0],
            ax0qzb = tfuig[w1r$ - 0x1];return azgbq0['startDTD'](wrxb18, tfkqug && tfkqug['replace'](/^(['"])(.*?)\1$/, '$2'), dehi && dehi['replace'](/^(['"])(.*?)\1$/, '$2')), azgbq0['endDTD'](), ax0qzb['index'] + ax0qzb[0x0]['length'];
      }}return -0x1;
}function zbxzq(rvp1w, j6hmn, tfkq) {
  var ed6mh = rvp1w['indexOf']('?>', j6hmn);if (ed6mh) {
    var k0fzqg = rvp1w['substring'](j6hmn, ed6mh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (k0fzqg) {
      {
        k0fzqg[0x0]['length'];
      }return tfkq['processingInstruction'](k0fzqg[0x1], k0fzqg[0x2]), ed6mh + 0x2;
    }return -0x1;
  }return -0x1;
}function zm6nhe() {}function zv$ylp7(xb1a8r, x0azqb) {
  return xb1a8r['__proto__'] = x0azqb, xb1a8r;
}function zhm6nj(vpw7r, iudktf) {
  var x1za8,
      n_34c = [],
      emu6i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (emu6i['lastIndex'] = iudktf, emu6i['exec'](vpw7r); x1za8 = emu6i['exec'](vpw7r);) if (n_34c['push'](x1za8), x1za8[0x1]) return n_34c;
}var zgkzfq0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zzgk0qf = new RegExp('[\\-\\.0-9' + zgkzfq0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zco2359 = new RegExp('^' + zgkzfq0['source'] + zzgk0qf['source'] + '*(?::' + zgkzfq0['source'] + zzgk0qf['source'] + '*)?$'),
    zhdmi6 = 0x0,
    z$w8xr1 = 0x1,
    zvr1wp = 0x2,
    zemi = 0x3,
    zmutd = 0x4,
    zgqa0kz = 0x5,
    zqfg0k = 0x6,
    zh4_jn9 = 0x7;zkfqg0['prototype'] = { 'parse': function (rv7pw$, gzkq, tqg0k) {
    var tfqkgu = this['domBuilder'];tfqkgu['startDocument'](), zftudki(gzkq, gzkq = {}), zbr18a(rv7pw$, gzkq, tqg0k, tfqkgu, this['errorHandler']), tfqkgu['endDocument']();
  } }, zm6nhe['prototype'] = { 'setTagName': function (_h6j4n) {
    if (!zco2359['test'](_h6j4n)) throw new Error('invalid tagName:' + _h6j4n);this['tagName'] = _h6j4n;
  }, 'add': function (zqbg0a, igtuk, a80bxz) {
    if (!zco2359['test'](zqbg0a)) throw new Error('invalid attribute:' + zqbg0a);this[this['length']++] = { 'qName': zqbg0a, 'value': igtuk, 'offset': a80bxz };
  }, 'length': 0x0, 'getLocalName': function (nj6h4) {
    return this[nj6h4]['localName'];
  }, 'getLocator': function (mjn64) {
    return this[mjn64]['locator'];
  }, 'getQName': function (wyvp$) {
    return this[wyvp$]['qName'];
  }, 'getURI': function (c9523) {
    return this[c9523]['uri'];
  }, 'getValue': function (r8p1$w) {
    return this[r8p1$w]['value'];
  } }, zv$ylp7({}, zv$ylp7['prototype']) instanceof zv$ylp7 || (zv$ylp7 = function (co59_, vw7yp) {
  function r$w1v() {}r$w1v['prototype'] = vw7yp, r$w1v = new r$w1v();for (vw7yp in co59_) r$w1v[vw7yp] = co59_[vw7yp];return r$w1v;
}), exports['XMLReader'] = zkfqg0;