var B = wx.$B;
function Bxv0$yt() {}function Bi328a(eapg2, qt$_dx, f158rj, u2gpe, yt$0_) {
  function kzbv4l(w2i3ea) {
    if (w2i3ea > 0xffff) {
      w2i3ea -= 0x10000;var wf83ra = 0xd800 + (w2i3ea >> 0xa),
          v$y0lt = 0xdc00 + (0x3ff & w2i3ea);return String['fromCharCode'](wf83ra, v$y0lt);
    }return String['fromCharCode'](w2i3ea);
  }function $vy0xt(_qx$) {
    var wf3r5 = _qx$['slice'](0x1, -0x1);return wf3r5 in f158rj ? f158rj[wf3r5] : '#' === wf3r5['charAt'](0x0) ? kzbv4l(parseInt(wf3r5['substr'](0x1)['replace']('x', '0x'))) : (yt$0_['error']('entity not found:' + _qx$), _qx$);
  }function o5mr(pig2ae) {
    if (pig2ae > pe2ug) {
      var b976 = eapg2['substring'](pe2ug, pig2ae)['replace'](/&#?\w+;/g, $vy0xt);moj15r && api2eg(pe2ug), u2gpe['characters'](b976, 0x0, pig2ae - pe2ug), pe2ug = pig2ae;
    }
  }function api2eg(w3r8af, pens) {
    for (; w3r8af >= bz49lk && (pens = pu2e['exec'](eapg2));) ai2ew3 = pens['index'], bz49lk = ai2ew3 + pens[0x0]['length'], moj15r['lineNumber']++;moj15r['columnNumber'] = w3r8af - ai2ew3 + 0x1;
  }for (var ai2ew3 = 0x0, bz49lk = 0x0, pu2e = /.*(?:\r\n?|\n)|.*$/g, moj15r = u2gpe['locator'], blzyv4 = [{ 'currentNSMap': qt$_dx }], yx = {}, pe2ug = 0x0;;) {
    try {
      var f3r5j = eapg2['indexOf']('<', pe2ug);if (0x0 > f3r5j) {
        if (!eapg2['substr'](pe2ug)['match'](/^\s*$/)) {
          var nup7g = u2gpe['doc'],
              r5jf83 = nup7g['createTextNode'](eapg2['substr'](pe2ug));nup7g['appendChild'](r5jf83), u2gpe['currentElement'] = r5jf83;
        }return;
      }switch (f3r5j > pe2ug && o5mr(f3r5j), eapg2['charAt'](f3r5j + 0x1)) {case '/':
          var rwf3a = eapg2['indexOf']('>', f3r5j + 0x3),
              weip = eapg2['substring'](f3r5j + 0x2, rwf3a),
              neupsg = blzyv4['pop']();0x0 > rwf3a ? (weip = eapg2['substring'](f3r5j + 0x2)['replace'](/[\s<].*/, ''), yt$0_['error']('end tag name: ' + weip + ' is not complete:' + neupsg['tagName']), rwf3a = f3r5j + 0x1 + weip['length']) : weip['match'](/\s</) && (weip = weip['replace'](/[\s<].*/, ''), yt$0_['error']('end tag name: ' + weip + ' maybe not complete'), rwf3a = f3r5j + 0x1 + weip['length']);var y4zvlb = neupsg['localNSMap'],
              hsn7u = neupsg['tagName'] == weip,
              y$t0v = hsn7u || neupsg['tagName'] && neupsg['tagName']['toLowerCase']() == weip['toLowerCase']();if (y$t0v) {
            if (u2gpe['endElement'](neupsg['uri'], neupsg['localName'], weip), y4zvlb) {
              for (var fr8wa3 in y4zvlb) u2gpe['endPrefixMapping'](fr8wa3);
            }hsn7u || yt$0_['fatalError']('end tag name: ' + weip + ' is not match the current start tagName:' + neupsg['tagName']);
          } else blzyv4['push'](neupsg);rwf3a++;break;case '?':
          moj15r && api2eg(f3r5j), rwf3a = Bues(eapg2, f3r5j, u2gpe);break;case '!':
          moj15r && api2eg(f3r5j), rwf3a = Byxt0$_(eapg2, f3r5j, u2gpe, yt$0_);break;default:
          moj15r && api2eg(f3r5j);var b9kh = new B$x_yt(),
              pnsg7 = blzyv4[blzyv4['length'] - 0x1]['currentNSMap'],
              rwf3a = Brj51f(eapg2, f3r5j, b9kh, pnsg7, $vy0xt, yt$0_),
              gipneu = b9kh['length'];if (!b9kh['closed'] && Bp2aiwe(eapg2, rwf3a, b9kh['tagName'], yx) && (b9kh['closed'] = !0x0, f158rj['nbsp'] || yt$0_['warning']('unclosed xml attribute')), moj15r && gipneu) {
            for (var _0$d = B$vtxy(moj15r, {}), n7sh6u = 0x0; gipneu > n7sh6u; n7sh6u++) {
              var zl4vby = b9kh[n7sh6u];api2eg(zl4vby['offset']), zl4vby['locator'] = B$vtxy(moj15r, {});
            }u2gpe['locator'] = _0$d, Bu6ns7h(b9kh, u2gpe, pnsg7) && blzyv4['push'](b9kh), u2gpe['locator'] = moj15r;
          } else Bu6ns7h(b9kh, u2gpe, pnsg7) && blzyv4['push'](b9kh);'http://www.w3.org/1999/xhtml' !== b9kh['uri'] || b9kh['closed'] ? rwf3a++ : rwf3a = Bs76unh(eapg2, rwf3a, b9kh['tagName'], $vy0xt, u2gpe);}
    } catch (pia2) {
      yt$0_['error']('element parse error: ' + pia2), rwf3a = -0x1;
    }rwf3a > pe2ug ? pe2ug = rwf3a : o5mr(Math['max'](f3r5j, pe2ug) + 0x1);
  }
}function B$vtxy(_x$qt, ung7p) {
  return ung7p['lineNumber'] = _x$qt['lineNumber'], ung7p['columnNumber'] = _x$qt['columnNumber'], ung7p;
}function Brj51f(l0yv, b4k9zl, tlv$0y, kb7h96, vlzb, v$lty) {
  for (var awf83r, r85f1j, f53w8r = ++b4k9zl, xyv$t0 = Bhk6s79;;) {
    var blkv = l0yv['charAt'](f53w8r);switch (blkv) {case '=':
        if (xyv$t0 === Bh69s7k) awf83r = l0yv['slice'](b4k9zl, f53w8r), xyv$t0 = Bvkzbl;else {
          if (xyv$t0 !== Bjr815) throw new Error('attribute equal must after attrName');xyv$t0 = Bvkzbl;
        }break;case '\x27':case '\x22':
        if (xyv$t0 === Bvkzbl || xyv$t0 === Bh69s7k) {
          if (xyv$t0 === Bh69s7k && (v$lty['warning']('attribute value must after "="'), awf83r = l0yv['slice'](b4k9zl, f53w8r)), b4k9zl = f53w8r + 0x1, f53w8r = l0yv['indexOf'](blkv, b4k9zl), !(f53w8r > 0x0)) throw new Error('attribute value no end \'' + blkv + '\' match');r85f1j = l0yv['slice'](b4k9zl, f53w8r)['replace'](/&#?\w+;/g, vlzb), tlv$0y['add'](awf83r, r85f1j, b4k9zl - 0x1), xyv$t0 = Bty$lv;
        } else {
          if (xyv$t0 != Bipgne) throw new Error('attribute value must after "="');r85f1j = l0yv['slice'](b4k9zl, f53w8r)['replace'](/&#?\w+;/g, vlzb), tlv$0y['add'](awf83r, r85f1j, b4k9zl), v$lty['warning']('attribute "' + awf83r + '" missed start quot(' + blkv + ')!!'), b4k9zl = f53w8r + 0x1, xyv$t0 = Bty$lv;
        }break;case '/':
        switch (xyv$t0) {case Bhk6s79:
            tlv$0y['setTagName'](l0yv['slice'](b4k9zl, f53w8r));case Bty$lv:case Bjr15mf:case B$t0_:
            xyv$t0 = B$t0_, tlv$0y['closed'] = !0x0;case Bipgne:case Bh69s7k:case Bjr815:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return v$lty['error']('unexpected end of input'), xyv$t0 == Bhk6s79 && tlv$0y['setTagName'](l0yv['slice'](b4k9zl, f53w8r)), f53w8r;case '>':
        switch (xyv$t0) {case Bhk6s79:
            tlv$0y['setTagName'](l0yv['slice'](b4k9zl, f53w8r));case Bty$lv:case Bjr15mf:case B$t0_:
            break;case Bipgne:case Bh69s7k:
            r85f1j = l0yv['slice'](b4k9zl, f53w8r), '/' === r85f1j['slice'](-0x1) && (tlv$0y['closed'] = !0x0, r85f1j = r85f1j['slice'](0x0, -0x1));case Bjr815:
            xyv$t0 === Bjr815 && (r85f1j = awf83r), xyv$t0 == Bipgne ? (v$lty['warning']('attribute "' + r85f1j + '" missed quot(")!!'), tlv$0y['add'](awf83r, r85f1j['replace'](/&#?\w+;/g, vlzb), b4k9zl)) : ('http://www.w3.org/1999/xhtml' === kb7h96[''] && r85f1j['match'](/^(?:disabled|checked|selected)$/i) || v$lty['warning']('attribute "' + r85f1j + '" missed value!! "' + r85f1j + '" instead!!'), tlv$0y['add'](r85f1j, r85f1j, b4k9zl));break;case Bvkzbl:
            throw new Error('attribute value missed!!');}return f53w8r;case '\u0080':
        blkv = '\x20';default:
        if ('\x20' >= blkv) switch (xyv$t0) {case Bhk6s79:
            tlv$0y['setTagName'](l0yv['slice'](b4k9zl, f53w8r)), xyv$t0 = Bjr15mf;break;case Bh69s7k:
            awf83r = l0yv['slice'](b4k9zl, f53w8r), xyv$t0 = Bjr815;break;case Bipgne:
            var r85f1j = l0yv['slice'](b4k9zl, f53w8r)['replace'](/&#?\w+;/g, vlzb);v$lty['warning']('attribute "' + r85f1j + '" missed quot(")!!'), tlv$0y['add'](awf83r, r85f1j, b4k9zl);case Bty$lv:
            xyv$t0 = Bjr15mf;} else switch (xyv$t0) {case Bjr815:
            {
              tlv$0y['tagName'];
            }'http://www.w3.org/1999/xhtml' === kb7h96[''] && awf83r['match'](/^(?:disabled|checked|selected)$/i) || v$lty['warning']('attribute "' + awf83r + '" missed value!! "' + awf83r + '" instead2!!'), tlv$0y['add'](awf83r, awf83r, b4k9zl), b4k9zl = f53w8r, xyv$t0 = Bh69s7k;break;case Bty$lv:
            v$lty['warning']('attribute space is required"' + awf83r + '\x22!!');case Bjr15mf:
            xyv$t0 = Bh69s7k, b4k9zl = f53w8r;break;case Bvkzbl:
            xyv$t0 = Bipgne, b4k9zl = f53w8r;break;case B$t0_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}f53w8r++;
  }
}function Bu6ns7h(bvk4, b9kz6h, peusn) {
  for (var kzh6 = bvk4['tagName'], epngsu = null, sk79h = bvk4['length']; sk79h--;) {
    var ap2ie = bvk4[sk79h],
        z6khb = ap2ie['qName'],
        tx$dq = ap2ie['value'],
        vt0l$y = z6khb['indexOf'](':');if (vt0l$y > 0x0) var v$yl = ap2ie['prefix'] = z6khb['slice'](0x0, vt0l$y),
        seupg = z6khb['slice'](vt0l$y + 0x1),
        w2ea3 = 'xmlns' === v$yl && seupg;else seupg = z6khb, v$yl = null, w2ea3 = 'xmlns' === z6khb && '';ap2ie['localName'] = seupg, w2ea3 !== !0x1 && (null == epngsu && (epngsu = {}, Bs7hn(peusn, peusn = {})), peusn[w2ea3] = epngsu[w2ea3] = tx$dq, ap2ie['uri'] = 'http://www.w3.org/2000/xmlns/', b9kz6h['startPrefixMapping'](w2ea3, tx$dq));
  }for (var sk79h = bvk4['length']; sk79h--;) {
    ap2ie = bvk4[sk79h];var v$yl = ap2ie['prefix'];v$yl && ('xml' === v$yl && (ap2ie['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== v$yl && (ap2ie['uri'] = peusn[v$yl || '']));
  }var vt0l$y = kzh6['indexOf'](':');vt0l$y > 0x0 ? (v$yl = bvk4['prefix'] = kzh6['slice'](0x0, vt0l$y), seupg = bvk4['localName'] = kzh6['slice'](vt0l$y + 0x1)) : (v$yl = null, seupg = bvk4['localName'] = kzh6);var l$0t = bvk4['uri'] = peusn[v$yl || ''];if (b9kz6h['startElement'](l$0t, seupg, kzh6, bvk4), !bvk4['closed']) return bvk4['currentNSMap'] = peusn, bvk4['localNSMap'] = epngsu, !0x0;if (b9kz6h['endElement'](l$0t, seupg, kzh6), epngsu) {
    for (v$yl in epngsu) b9kz6h['endPrefixMapping'](v$yl);
  }
}function Bs76unh(z0v4, epui, $0dt_, iue2gp, w83i2a) {
  if (/^(?:script|textarea)$/i['test']($0dt_)) {
    var lvt$y0 = z0v4['indexOf']('</' + $0dt_ + '>', epui),
        khs6 = z0v4['substring'](epui + 0x1, lvt$y0);if (/[&<]/['test'](khs6)) return (/^script$/i['test']($0dt_) ? (w83i2a['characters'](khs6, 0x0, khs6['length']), lvt$y0) : (khs6 = khs6['replace'](/&#?\w+;/g, iue2gp), w83i2a['characters'](khs6, 0x0, khs6['length']), lvt$y0)
    );
  }return epui + 0x1;
}function Bp2aiwe(nugepi, i2eagp, lbyv4z, z69bh) {
  var $ltv0y = z69bh[lbyv4z];return null == $ltv0y && ($ltv0y = nugepi['lastIndexOf']('</' + lbyv4z + '>'), i2eagp > $ltv0y && ($ltv0y = nugepi['lastIndexOf']('</' + lbyv4z)), z69bh[lbyv4z] = $ltv0y), i2eagp > $ltv0y;
}function Bs7hn(r5m1oj, vb4yz) {
  for (var kbl4vz in r5m1oj) vb4yz[kbl4vz] = r5m1oj[kbl4vz];
}function Byxt0$_(gshu7, $vyl4, ughs7, $t_0xy) {
  var y$t_ = gshu7['charAt']($vyl4 + 0x2);switch (y$t_) {case '-':
      if ('-' === gshu7['charAt']($vyl4 + 0x3)) {
        var txyv = gshu7['indexOf']('-->', $vyl4 + 0x4);return txyv > $vyl4 ? (ughs7['comment'](gshu7, $vyl4 + 0x4, txyv - $vyl4 - 0x4), txyv + 0x3) : ($t_0xy['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gshu7['substr']($vyl4 + 0x3, 0x6)) {
        var txyv = gshu7['indexOf'](']]>', $vyl4 + 0x9);return ughs7['startCDATA'](), ughs7['characters'](gshu7, $vyl4 + 0x9, txyv - $vyl4 - 0x9), ughs7['endCDATA'](), txyv + 0x3;
      }var v4lzk = Bjm15(gshu7, $vyl4),
          o15m = v4lzk['length'];if (o15m > 0x1 && /!doctype/i['test'](v4lzk[0x0][0x0])) {
        var $x0ty = v4lzk[0x1][0x0],
            eupg2 = o15m > 0x3 && /^public$/i['test'](v4lzk[0x2][0x0]) && v4lzk[0x3][0x0],
            su76n = o15m > 0x4 && v4lzk[0x4][0x0],
            _x0$td = v4lzk[o15m - 0x1];return ughs7['startDTD']($x0ty, eupg2 && eupg2['replace'](/^(['"])(.*?)\1$/, '$2'), su76n && su76n['replace'](/^(['"])(.*?)\1$/, '$2')), ughs7['endDTD'](), _x0$td['index'] + _x0$td[0x0]['length'];
      }}return -0x1;
}function Bues(ty0v$, seng, x$t_) {
  var x0ty_ = ty0v$['indexOf']('?>', seng);if (x0ty_) {
    var lvyt$ = ty0v$['substring'](seng, x0ty_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lvyt$) {
      {
        lvyt$[0x0]['length'];
      }return x$t_['processingInstruction'](lvyt$[0x1], lvyt$[0x2]), x0ty_ + 0x2;
    }return -0x1;
  }return -0x1;
}function B$x_yt() {}function Br58j3f(xyt_0, tdx0_$) {
  return xyt_0['__proto__'] = tdx0_$, xyt_0;
}function Bjm15(ie2u, d$x0t_) {
  var bvyzl4,
      rf8a = [],
      $y_tx0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($y_tx0['lastIndex'] = d$x0t_, $y_tx0['exec'](ie2u); bvyzl4 = $y_tx0['exec'](ie2u);) if (rf8a['push'](bvyzl4), bvyzl4[0x1]) return rf8a;
}var Beia2wp = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Bxy_t = new RegExp('[\\-\\.0-9' + Beia2wp['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Bt_dq$x = new RegExp('^' + Beia2wp['source'] + Bxy_t['source'] + '*(?::' + Beia2wp['source'] + Bxy_t['source'] + '*)?$'),
    Bhk6s79 = 0x0,
    Bh69s7k = 0x1,
    Bjr815 = 0x2,
    Bvkzbl = 0x3,
    Bipgne = 0x4,
    Bty$lv = 0x5,
    Bjr15mf = 0x6,
    B$t0_ = 0x7;Bxv0$yt['prototype'] = { 'parse': function (vb4yl, k9hs7, lvy$04) {
    var iwae2p = this['domBuilder'];iwae2p['startDocument'](), Bs7hn(k9hs7, k9hs7 = {}), Bi328a(vb4yl, k9hs7, lvy$04, iwae2p, this['errorHandler']), iwae2p['endDocument']();
  } }, B$x_yt['prototype'] = { 'setTagName': function (afw3) {
    if (!Bt_dq$x['test'](afw3)) throw new Error('invalid tagName:' + afw3);this['tagName'] = afw3;
  }, 'add': function (khs769, pusng, zk496b) {
    if (!Bt_dq$x['test'](khs769)) throw new Error('invalid attribute:' + khs769);this[this['length']++] = { 'qName': khs769, 'value': pusng, 'offset': zk496b };
  }, 'length': 0x0, 'getLocalName': function (fjmr51) {
    return this[fjmr51]['localName'];
  }, 'getLocator': function (eu2gpi) {
    return this[eu2gpi]['locator'];
  }, 'getQName': function (s76hun) {
    return this[s76hun]['qName'];
  }, 'getURI': function (blv4zk) {
    return this[blv4zk]['uri'];
  }, 'getValue': function (w328f) {
    return this[w328f]['value'];
  } }, Br58j3f({}, Br58j3f['prototype']) instanceof Br58j3f || (Br58j3f = function (w8ia32, kzbl49) {
  function iewa2p() {}iewa2p['prototype'] = kzbl49, iewa2p = new iewa2p();for (kzbl49 in w8ia32) iewa2p[kzbl49] = w8ia32[kzbl49];return iewa2p;
}), exports['XMLReader'] = Bxv0$yt;