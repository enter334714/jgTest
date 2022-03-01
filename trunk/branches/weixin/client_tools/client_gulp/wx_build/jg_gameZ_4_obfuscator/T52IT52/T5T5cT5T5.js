var B = wx.$B;
function Bvt$xy() {}function Bpeiag(sup7g, hns6, wp2ia, vx$ty, aiw2pe) {
  function z46kb(s7pnu) {
    if (s7pnu > 0xffff) {
      s7pnu -= 0x10000;var ea3iw2 = 0xd800 + (s7pnu >> 0xa),
          h9b6 = 0xdc00 + (0x3ff & s7pnu);return String['fromCharCode'](ea3iw2, h9b6);
    }return String['fromCharCode'](s7pnu);
  }function fj15r8(lytv) {
    var wiepa2 = lytv['slice'](0x1, -0x1);return wiepa2 in wp2ia ? wp2ia[wiepa2] : '#' === wiepa2['charAt'](0x0) ? z46kb(parseInt(wiepa2['substr'](0x1)['replace']('x', '0x'))) : (aiw2pe['error']('entity not found:' + lytv), lytv);
  }function gpn7u(unsh67) {
    if (unsh67 > aeig2p) {
      var ybvl = sup7g['substring'](aeig2p, unsh67)['replace'](/&#?\w+;/g, fj15r8);w8af2 && jr5m1o(aeig2p), vx$ty['characters'](ybvl, 0x0, unsh67 - aeig2p), aeig2p = unsh67;
    }
  }function jr5m1o($0t_d, epu2i) {
    for (; $0t_d >= _0$dtx && (epu2i = vklbz['exec'](sup7g));) kz4lbv = epu2i['index'], _0$dtx = kz4lbv + epu2i[0x0]['length'], w8af2['lineNumber']++;w8af2['columnNumber'] = $0t_d - kz4lbv + 0x1;
  }for (var kz4lbv = 0x0, _0$dtx = 0x0, vklbz = /.*(?:\r\n?|\n)|.*$/g, w8af2 = vx$ty['locator'], dt_x0$ = [{ 'currentNSMap': hns6 }], ormj15 = {}, aeig2p = 0x0;;) {
    try {
      var lvyz = sup7g['indexOf']('<', aeig2p);if (0x0 > lvyz) {
        if (!sup7g['substr'](aeig2p)['match'](/^\s*$/)) {
          var _q$xtd = vx$ty['doc'],
              $yt0xv = _q$xtd['createTextNode'](sup7g['substr'](aeig2p));_q$xtd['appendChild']($yt0xv), vx$ty['currentElement'] = $yt0xv;
        }return;
      }switch (lvyz > aeig2p && gpn7u(lvyz), sup7g['charAt'](lvyz + 0x1)) {case '/':
          var weia23 = sup7g['indexOf']('>', lvyz + 0x3),
              h7s = sup7g['substring'](lvyz + 0x2, weia23),
              g7hnsu = dt_x0$['pop']();0x0 > weia23 ? (h7s = sup7g['substring'](lvyz + 0x2)['replace'](/[\s<].*/, ''), aiw2pe['error']('end tag name: ' + h7s + ' is not complete:' + g7hnsu['tagName']), weia23 = lvyz + 0x1 + h7s['length']) : h7s['match'](/\s</) && (h7s = h7s['replace'](/[\s<].*/, ''), aiw2pe['error']('end tag name: ' + h7s + ' maybe not complete'), weia23 = lvyz + 0x1 + h7s['length']);var vytl$ = g7hnsu['localNSMap'],
              b4y = g7hnsu['tagName'] == h7s,
              eusng = b4y || g7hnsu['tagName'] && g7hnsu['tagName']['toLowerCase']() == h7s['toLowerCase']();if (eusng) {
            if (vx$ty['endElement'](g7hnsu['uri'], g7hnsu['localName'], h7s), vytl$) {
              for (var hngs7 in vytl$) vx$ty['endPrefixMapping'](hngs7);
            }b4y || aiw2pe['fatalError']('end tag name: ' + h7s + ' is not match the current start tagName:' + g7hnsu['tagName']);
          } else dt_x0$['push'](g7hnsu);weia23++;break;case '?':
          w8af2 && jr5m1o(lvyz), weia23 = B_0xd(sup7g, lvyz, vx$ty);break;case '!':
          w8af2 && jr5m1o(lvyz), weia23 = Bk4lz(sup7g, lvyz, vx$ty, aiw2pe);break;default:
          w8af2 && jr5m1o(lvyz);var aew = new Busp7n(),
              $xyt0 = dt_x0$[dt_x0$['length'] - 0x1]['currentNSMap'],
              weia23 = Buegsp(sup7g, lvyz, aew, $xyt0, fj15r8, aiw2pe),
              raf38 = aew['length'];if (!aew['closed'] && Bugi2(sup7g, weia23, aew['tagName'], ormj15) && (aew['closed'] = !0x0, wp2ia['nbsp'] || aiw2pe['warning']('unclosed xml attribute')), w8af2 && raf38) {
            for (var vy0lt$ = Bx$q_(w8af2, {}), iape2g = 0x0; raf38 > iape2g; iape2g++) {
              var wf583 = aew[iape2g];jr5m1o(wf583['offset']), wf583['locator'] = Bx$q_(w8af2, {});
            }vx$ty['locator'] = vy0lt$, By0l4v$(aew, vx$ty, $xyt0) && dt_x0$['push'](aew), vx$ty['locator'] = w8af2;
          } else By0l4v$(aew, vx$ty, $xyt0) && dt_x0$['push'](aew);'http://www.w3.org/1999/xhtml' !== aew['uri'] || aew['closed'] ? weia23++ : weia23 = Bngp7u(sup7g, weia23, aew['tagName'], fj15r8, vx$ty);}
    } catch (yzvl4) {
      aiw2pe['error']('element parse error: ' + yzvl4), weia23 = -0x1;
    }weia23 > aeig2p ? aeig2p = weia23 : gpn7u(Math['max'](lvyz, aeig2p) + 0x1);
  }
}function Bx$q_(shug7n, hg7u) {
  return hg7u['lineNumber'] = shug7n['lineNumber'], hg7u['columnNumber'] = shug7n['columnNumber'], hg7u;
}function Buegsp($t_xdq, oj5rm, ug2ie, sg7np, f1jr5, bzlyv) {
  for (var v40$y, vlk, x0y$_ = ++oj5rm, vzbkl = Bi3w28;;) {
    var hsk796 = $t_xdq['charAt'](x0y$_);switch (hsk796) {case '=':
        if (vzbkl === Bvz0l4y) v40$y = $t_xdq['slice'](oj5rm, x0y$_), vzbkl = Bb4vly;else {
          if (vzbkl !== Brw58f) throw new Error('attribute equal must after attrName');vzbkl = Bb4vly;
        }break;case '\x27':case '\x22':
        if (vzbkl === Bb4vly || vzbkl === Bvz0l4y) {
          if (vzbkl === Bvz0l4y && (bzlyv['warning']('attribute value must after "="'), v40$y = $t_xdq['slice'](oj5rm, x0y$_)), oj5rm = x0y$_ + 0x1, x0y$_ = $t_xdq['indexOf'](hsk796, oj5rm), !(x0y$_ > 0x0)) throw new Error('attribute value no end \'' + hsk796 + '\' match');vlk = $t_xdq['slice'](oj5rm, x0y$_)['replace'](/&#?\w+;/g, f1jr5), ug2ie['add'](v40$y, vlk, oj5rm - 0x1), vzbkl = Bx_t$q;
        } else {
          if (vzbkl != Bgesn) throw new Error('attribute value must after "="');vlk = $t_xdq['slice'](oj5rm, x0y$_)['replace'](/&#?\w+;/g, f1jr5), ug2ie['add'](v40$y, vlk, oj5rm), bzlyv['warning']('attribute "' + v40$y + '" missed start quot(' + hsk796 + ')!!'), oj5rm = x0y$_ + 0x1, vzbkl = Bx_t$q;
        }break;case '/':
        switch (vzbkl) {case Bi3w28:
            ug2ie['setTagName']($t_xdq['slice'](oj5rm, x0y$_));case Bx_t$q:case Bi2w83a:case Bf3rj:
            vzbkl = Bf3rj, ug2ie['closed'] = !0x0;case Bgesn:case Bvz0l4y:case Brw58f:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return bzlyv['error']('unexpected end of input'), vzbkl == Bi3w28 && ug2ie['setTagName']($t_xdq['slice'](oj5rm, x0y$_)), x0y$_;case '>':
        switch (vzbkl) {case Bi3w28:
            ug2ie['setTagName']($t_xdq['slice'](oj5rm, x0y$_));case Bx_t$q:case Bi2w83a:case Bf3rj:
            break;case Bgesn:case Bvz0l4y:
            vlk = $t_xdq['slice'](oj5rm, x0y$_), '/' === vlk['slice'](-0x1) && (ug2ie['closed'] = !0x0, vlk = vlk['slice'](0x0, -0x1));case Brw58f:
            vzbkl === Brw58f && (vlk = v40$y), vzbkl == Bgesn ? (bzlyv['warning']('attribute "' + vlk + '" missed quot(")!!'), ug2ie['add'](v40$y, vlk['replace'](/&#?\w+;/g, f1jr5), oj5rm)) : ('http://www.w3.org/1999/xhtml' === sg7np[''] && vlk['match'](/^(?:disabled|checked|selected)$/i) || bzlyv['warning']('attribute "' + vlk + '" missed value!! "' + vlk + '" instead!!'), ug2ie['add'](vlk, vlk, oj5rm));break;case Bb4vly:
            throw new Error('attribute value missed!!');}return x0y$_;case '\u0080':
        hsk796 = '\x20';default:
        if ('\x20' >= hsk796) switch (vzbkl) {case Bi3w28:
            ug2ie['setTagName']($t_xdq['slice'](oj5rm, x0y$_)), vzbkl = Bi2w83a;break;case Bvz0l4y:
            v40$y = $t_xdq['slice'](oj5rm, x0y$_), vzbkl = Brw58f;break;case Bgesn:
            var vlk = $t_xdq['slice'](oj5rm, x0y$_)['replace'](/&#?\w+;/g, f1jr5);bzlyv['warning']('attribute "' + vlk + '" missed quot(")!!'), ug2ie['add'](v40$y, vlk, oj5rm);case Bx_t$q:
            vzbkl = Bi2w83a;} else switch (vzbkl) {case Brw58f:
            {
              ug2ie['tagName'];
            }'http://www.w3.org/1999/xhtml' === sg7np[''] && v40$y['match'](/^(?:disabled|checked|selected)$/i) || bzlyv['warning']('attribute "' + v40$y + '" missed value!! "' + v40$y + '" instead2!!'), ug2ie['add'](v40$y, v40$y, oj5rm), oj5rm = x0y$_, vzbkl = Bvz0l4y;break;case Bx_t$q:
            bzlyv['warning']('attribute space is required"' + v40$y + '\x22!!');case Bi2w83a:
            vzbkl = Bvz0l4y, oj5rm = x0y$_;break;case Bb4vly:
            vzbkl = Bgesn, oj5rm = x0y$_;break;case Bf3rj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}x0y$_++;
  }
}function By0l4v$(h7sn69, w32eia, f3war8) {
  for (var xtd0_ = h7sn69['tagName'], f53 = null, f382w = h7sn69['length']; f382w--;) {
    var negpus = h7sn69[f382w],
        hsgu7 = negpus['qName'],
        r3w8 = negpus['value'],
        fr35j8 = hsgu7['indexOf'](':');if (fr35j8 > 0x0) var kh79b = negpus['prefix'] = hsgu7['slice'](0x0, fr35j8),
        j5rom = hsgu7['slice'](fr35j8 + 0x1),
        z964b = 'xmlns' === kh79b && j5rom;else j5rom = hsgu7, kh79b = null, z964b = 'xmlns' === hsgu7 && '';negpus['localName'] = j5rom, z964b !== !0x1 && (null == f53 && (f53 = {}, Byv4bz(f3war8, f3war8 = {})), f3war8[z964b] = f53[z964b] = r3w8, negpus['uri'] = 'http://www.w3.org/2000/xmlns/', w32eia['startPrefixMapping'](z964b, r3w8));
  }for (var f382w = h7sn69['length']; f382w--;) {
    negpus = h7sn69[f382w];var kh79b = negpus['prefix'];kh79b && ('xml' === kh79b && (negpus['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kh79b && (negpus['uri'] = f3war8[kh79b || '']));
  }var fr35j8 = xtd0_['indexOf'](':');fr35j8 > 0x0 ? (kh79b = h7sn69['prefix'] = xtd0_['slice'](0x0, fr35j8), j5rom = h7sn69['localName'] = xtd0_['slice'](fr35j8 + 0x1)) : (kh79b = null, j5rom = h7sn69['localName'] = xtd0_);var vblzy4 = h7sn69['uri'] = f3war8[kh79b || ''];if (w32eia['startElement'](vblzy4, j5rom, xtd0_, h7sn69), !h7sn69['closed']) return h7sn69['currentNSMap'] = f3war8, h7sn69['localNSMap'] = f53, !0x0;if (w32eia['endElement'](vblzy4, j5rom, xtd0_), f53) {
    for (kh79b in f53) w32eia['endPrefixMapping'](kh79b);
  }
}function Bngp7u(a32wf, uh7ngs, q$_xt, vzy4bl, ige2p) {
  if (/^(?:script|textarea)$/i['test'](q$_xt)) {
    var nhs7gu = a32wf['indexOf']('</' + q$_xt + '>', uh7ngs),
        eunpgi = a32wf['substring'](uh7ngs + 0x1, nhs7gu);if (/[&<]/['test'](eunpgi)) return (/^script$/i['test'](q$_xt) ? (ige2p['characters'](eunpgi, 0x0, eunpgi['length']), nhs7gu) : (eunpgi = eunpgi['replace'](/&#?\w+;/g, vzy4bl), ige2p['characters'](eunpgi, 0x0, eunpgi['length']), nhs7gu)
    );
  }return uh7ngs + 0x1;
}function Bugi2(npsuge, l4vkbz, jf85r1, b4zkl) {
  var e2iw3a = b4zkl[jf85r1];return null == e2iw3a && (e2iw3a = npsuge['lastIndexOf']('</' + jf85r1 + '>'), l4vkbz > e2iw3a && (e2iw3a = npsuge['lastIndexOf']('</' + jf85r1)), b4zkl[jf85r1] = e2iw3a), l4vkbz > e2iw3a;
}function Byv4bz(wr3fa, piueg2) {
  for (var eugs in wr3fa) piueg2[eugs] = wr3fa[eugs];
}function Bk4lz(sgn7u, y0vt$l, iaw2ep, v0lty) {
  var s96k = sgn7u['charAt'](y0vt$l + 0x2);switch (s96k) {case '-':
      if ('-' === sgn7u['charAt'](y0vt$l + 0x3)) {
        var b9kh6z = sgn7u['indexOf']('-->', y0vt$l + 0x4);return b9kh6z > y0vt$l ? (iaw2ep['comment'](sgn7u, y0vt$l + 0x4, b9kh6z - y0vt$l - 0x4), b9kh6z + 0x3) : (v0lty['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == sgn7u['substr'](y0vt$l + 0x3, 0x6)) {
        var b9kh6z = sgn7u['indexOf'](']]>', y0vt$l + 0x9);return iaw2ep['startCDATA'](), iaw2ep['characters'](sgn7u, y0vt$l + 0x9, b9kh6z - y0vt$l - 0x9), iaw2ep['endCDATA'](), b9kh6z + 0x3;
      }var mjr51o = Bnguesp(sgn7u, y0vt$l),
          eiupng = mjr51o['length'];if (eiupng > 0x1 && /!doctype/i['test'](mjr51o[0x0][0x0])) {
        var ipwa = mjr51o[0x1][0x0],
            nupsg = eiupng > 0x3 && /^public$/i['test'](mjr51o[0x2][0x0]) && mjr51o[0x3][0x0],
            td_$x = eiupng > 0x4 && mjr51o[0x4][0x0],
            _dq$x = mjr51o[eiupng - 0x1];return iaw2ep['startDTD'](ipwa, nupsg && nupsg['replace'](/^(['"])(.*?)\1$/, '$2'), td_$x && td_$x['replace'](/^(['"])(.*?)\1$/, '$2')), iaw2ep['endDTD'](), _dq$x['index'] + _dq$x[0x0]['length'];
      }}return -0x1;
}function B_0xd(lyb4v, guspen, gi2pe) {
  var r15fjm = lyb4v['indexOf']('?>', guspen);if (r15fjm) {
    var ungs = lyb4v['substring'](guspen, r15fjm)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ungs) {
      {
        ungs[0x0]['length'];
      }return gi2pe['processingInstruction'](ungs[0x1], ungs[0x2]), r15fjm + 0x2;
    }return -0x1;
  }return -0x1;
}function Busp7n() {}function Btd$q_x(a38, n96s7h) {
  return a38['__proto__'] = n96s7h, a38;
}function Bnguesp($0lv, nhg7su) {
  var v0ytl,
      g7uhn = [],
      pea2g = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pea2g['lastIndex'] = nhg7su, pea2g['exec']($0lv); v0ytl = pea2g['exec']($0lv);) if (g7uhn['push'](v0ytl), v0ytl[0x1]) return g7uhn;
}var Bh769 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Bh67nsu = new RegExp('[\\-\\.0-9' + Bh769['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Bg7un = new RegExp('^' + Bh769['source'] + Bh67nsu['source'] + '*(?::' + Bh769['source'] + Bh67nsu['source'] + '*)?$'),
    Bi3w28 = 0x0,
    Bvz0l4y = 0x1,
    Brw58f = 0x2,
    Bb4vly = 0x3,
    Bgesn = 0x4,
    Bx_t$q = 0x5,
    Bi2w83a = 0x6,
    Bf3rj = 0x7;Bvt$xy['prototype'] = { 'parse': function (yvbl4z, e2ugp, lzv) {
    var kzl4bv = this['domBuilder'];kzl4bv['startDocument'](), Byv4bz(e2ugp, e2ugp = {}), Bpeiag(yvbl4z, e2ugp, lzv, kzl4bv, this['errorHandler']), kzl4bv['endDocument']();
  } }, Busp7n['prototype'] = { 'setTagName': function (s76h) {
    if (!Bg7un['test'](s76h)) throw new Error('invalid tagName:' + s76h);this['tagName'] = s76h;
  }, 'add': function (i2w3e, ty0lv, eia2gp) {
    if (!Bg7un['test'](i2w3e)) throw new Error('invalid attribute:' + i2w3e);this[this['length']++] = { 'qName': i2w3e, 'value': ty0lv, 'offset': eia2gp };
  }, 'length': 0x0, 'getLocalName': function (gai2pe) {
    return this[gai2pe]['localName'];
  }, 'getLocator': function (nugesp) {
    return this[nugesp]['locator'];
  }, 'getQName': function (ia2w83) {
    return this[ia2w83]['qName'];
  }, 'getURI': function (d_t0) {
    return this[d_t0]['uri'];
  }, 'getValue': function (usg7p) {
    return this[usg7p]['value'];
  } }, Btd$q_x({}, Btd$q_x['prototype']) instanceof Btd$q_x || (Btd$q_x = function (w832fa, uipng) {
  function gpsnu7() {}gpsnu7['prototype'] = uipng, gpsnu7 = new gpsnu7();for (uipng in w832fa) gpsnu7[uipng] = w832fa[uipng];return gpsnu7;
}), exports['XMLReader'] = Bvt$xy;