var B = wx.$B;
function B_y$xt0() {}function Ba3fr8(eugni, gsnepu, ug7nsp, yvtx$0, by4lv) {
  function zl4y0(zly4b) {
    if (zly4b > 0xffff) {
      zly4b -= 0x10000;var zbly = 0xd800 + (zly4b >> 0xa),
          yvz4lb = 0xdc00 + (0x3ff & zly4b);return String['fromCharCode'](zbly, yvz4lb);
    }return String['fromCharCode'](zly4b);
  }function d0t$(tyx$v) {
    var gunsep = tyx$v['slice'](0x1, -0x1);return gunsep in ug7nsp ? ug7nsp[gunsep] : '#' === gunsep['charAt'](0x0) ? zl4y0(parseInt(gunsep['substr'](0x1)['replace']('x', '0x'))) : (by4lv['error']('entity not found:' + tyx$v), tyx$v);
  }function wr583(s9n76) {
    if (s9n76 > v4zyl0) {
      var kb679 = eugni['substring'](v4zyl0, s9n76)['replace'](/&#?\w+;/g, d0t$);epa2w && jo15mr(v4zyl0), yvtx$0['characters'](kb679, 0x0, s9n76 - v4zyl0), v4zyl0 = s9n76;
    }
  }function jo15mr(zl94k, j18rf5) {
    for (; zl94k >= lv0y && (j18rf5 = w2eia['exec'](eugni));) j581rf = j18rf5['index'], lv0y = j581rf + j18rf5[0x0]['length'], epa2w['lineNumber']++;epa2w['columnNumber'] = zl94k - j581rf + 0x1;
  }for (var j581rf = 0x0, lv0y = 0x0, w2eia = /.*(?:\r\n?|\n)|.*$/g, epa2w = yvtx$0['locator'], z4vbl = [{ 'currentNSMap': gsnepu }], j15mfr = {}, v4zyl0 = 0x0;;) {
    try {
      var s6n97h = eugni['indexOf']('<', v4zyl0);if (0x0 > s6n97h) {
        if (!eugni['substr'](v4zyl0)['match'](/^\s*$/)) {
          var pigeu2 = yvtx$0['doc'],
              hb6 = pigeu2['createTextNode'](eugni['substr'](v4zyl0));pigeu2['appendChild'](hb6), yvtx$0['currentElement'] = hb6;
        }return;
      }switch (s6n97h > v4zyl0 && wr583(s6n97h), eugni['charAt'](s6n97h + 0x1)) {case '/':
          var u6hn = eugni['indexOf']('>', s6n97h + 0x3),
              sug7 = eugni['substring'](s6n97h + 0x2, u6hn),
              hugs = z4vbl['pop']();0x0 > u6hn ? (sug7 = eugni['substring'](s6n97h + 0x2)['replace'](/[\s<].*/, ''), by4lv['error']('end tag name: ' + sug7 + ' is not complete:' + hugs['tagName']), u6hn = s6n97h + 0x1 + sug7['length']) : sug7['match'](/\s</) && (sug7 = sug7['replace'](/[\s<].*/, ''), by4lv['error']('end tag name: ' + sug7 + ' maybe not complete'), u6hn = s6n97h + 0x1 + sug7['length']);var j518rf = hugs['localNSMap'],
              raf8 = hugs['tagName'] == sug7,
              z4lyv = raf8 || hugs['tagName'] && hugs['tagName']['toLowerCase']() == sug7['toLowerCase']();if (z4lyv) {
            if (yvtx$0['endElement'](hugs['uri'], hugs['localName'], sug7), j518rf) {
              for (var bh679 in j518rf) yvtx$0['endPrefixMapping'](bh679);
            }raf8 || by4lv['fatalError']('end tag name: ' + sug7 + ' is not match the current start tagName:' + hugs['tagName']);
          } else z4vbl['push'](hugs);u6hn++;break;case '?':
          epa2w && jo15mr(s6n97h), u6hn = Bz4l0(eugni, s6n97h, yvtx$0);break;case '!':
          epa2w && jo15mr(s6n97h), u6hn = Bvb4klz(eugni, s6n97h, yvtx$0, by4lv);break;default:
          epa2w && jo15mr(s6n97h);var t$vly = new Begi(),
              mr1f = z4vbl[z4vbl['length'] - 0x1]['currentNSMap'],
              u6hn = Braf38(eugni, s6n97h, t$vly, mr1f, d0t$, by4lv),
              zb9h6k = t$vly['length'];if (!t$vly['closed'] && Bwi38a2(eugni, u6hn, t$vly['tagName'], j15mfr) && (t$vly['closed'] = !0x0, ug7nsp['nbsp'] || by4lv['warning']('unclosed xml attribute')), epa2w && zb9h6k) {
            for (var ape2gi = Bl0vyz(epa2w, {}), ybvl = 0x0; zb9h6k > ybvl; ybvl++) {
              var s96h7n = t$vly[ybvl];jo15mr(s96h7n['offset']), s96h7n['locator'] = Bl0vyz(epa2w, {});
            }yvtx$0['locator'] = ape2gi, Bnuepgs(t$vly, yvtx$0, mr1f) && z4vbl['push'](t$vly), yvtx$0['locator'] = epa2w;
          } else Bnuepgs(t$vly, yvtx$0, mr1f) && z4vbl['push'](t$vly);'http://www.w3.org/1999/xhtml' !== t$vly['uri'] || t$vly['closed'] ? u6hn++ : u6hn = Bugpnei(eugni, u6hn, t$vly['tagName'], d0t$, yvtx$0);}
    } catch (gepin) {
      by4lv['error']('element parse error: ' + gepin), u6hn = -0x1;
    }u6hn > v4zyl0 ? v4zyl0 = u6hn : wr583(Math['max'](s6n97h, v4zyl0) + 0x1);
  }
}function Bl0vyz(zbl4k, upn7sg) {
  return upn7sg['lineNumber'] = zbl4k['lineNumber'], upn7sg['columnNumber'] = zbl4k['columnNumber'], upn7sg;
}function Braf38(bk67h9, ep2uig, rwf583, tx_dq, y4, pnuegs) {
  for (var gnhsu, paige2, hk79s6 = ++ep2uig, h96n = Bfr51m;;) {
    var zlv04y = bk67h9['charAt'](hk79s6);switch (zlv04y) {case '=':
        if (h96n === Bs697) gnhsu = bk67h9['slice'](ep2uig, hk79s6), h96n = Bvlz4bk;else {
          if (h96n !== Bm51rjf) throw new Error('attribute equal must after attrName');h96n = Bvlz4bk;
        }break;case '\x27':case '\x22':
        if (h96n === Bvlz4bk || h96n === Bs697) {
          if (h96n === Bs697 && (pnuegs['warning']('attribute value must after "="'), gnhsu = bk67h9['slice'](ep2uig, hk79s6)), ep2uig = hk79s6 + 0x1, hk79s6 = bk67h9['indexOf'](zlv04y, ep2uig), !(hk79s6 > 0x0)) throw new Error('attribute value no end \'' + zlv04y + '\' match');paige2 = bk67h9['slice'](ep2uig, hk79s6)['replace'](/&#?\w+;/g, y4), rwf583['add'](gnhsu, paige2, ep2uig - 0x1), h96n = Bshg7un;
        } else {
          if (h96n != Ba2w3ie) throw new Error('attribute value must after "="');paige2 = bk67h9['slice'](ep2uig, hk79s6)['replace'](/&#?\w+;/g, y4), rwf583['add'](gnhsu, paige2, ep2uig), pnuegs['warning']('attribute "' + gnhsu + '" missed start quot(' + zlv04y + ')!!'), ep2uig = hk79s6 + 0x1, h96n = Bshg7un;
        }break;case '/':
        switch (h96n) {case Bfr51m:
            rwf583['setTagName'](bk67h9['slice'](ep2uig, hk79s6));case Bshg7un:case Bdqx_t:case Bl$04y:
            h96n = Bl$04y, rwf583['closed'] = !0x0;case Ba2w3ie:case Bs697:case Bm51rjf:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return pnuegs['error']('unexpected end of input'), h96n == Bfr51m && rwf583['setTagName'](bk67h9['slice'](ep2uig, hk79s6)), hk79s6;case '>':
        switch (h96n) {case Bfr51m:
            rwf583['setTagName'](bk67h9['slice'](ep2uig, hk79s6));case Bshg7un:case Bdqx_t:case Bl$04y:
            break;case Ba2w3ie:case Bs697:
            paige2 = bk67h9['slice'](ep2uig, hk79s6), '/' === paige2['slice'](-0x1) && (rwf583['closed'] = !0x0, paige2 = paige2['slice'](0x0, -0x1));case Bm51rjf:
            h96n === Bm51rjf && (paige2 = gnhsu), h96n == Ba2w3ie ? (pnuegs['warning']('attribute "' + paige2 + '" missed quot(")!!'), rwf583['add'](gnhsu, paige2['replace'](/&#?\w+;/g, y4), ep2uig)) : ('http://www.w3.org/1999/xhtml' === tx_dq[''] && paige2['match'](/^(?:disabled|checked|selected)$/i) || pnuegs['warning']('attribute "' + paige2 + '" missed value!! "' + paige2 + '" instead!!'), rwf583['add'](paige2, paige2, ep2uig));break;case Bvlz4bk:
            throw new Error('attribute value missed!!');}return hk79s6;case '\u0080':
        zlv04y = '\x20';default:
        if ('\x20' >= zlv04y) switch (h96n) {case Bfr51m:
            rwf583['setTagName'](bk67h9['slice'](ep2uig, hk79s6)), h96n = Bdqx_t;break;case Bs697:
            gnhsu = bk67h9['slice'](ep2uig, hk79s6), h96n = Bm51rjf;break;case Ba2w3ie:
            var paige2 = bk67h9['slice'](ep2uig, hk79s6)['replace'](/&#?\w+;/g, y4);pnuegs['warning']('attribute "' + paige2 + '" missed quot(")!!'), rwf583['add'](gnhsu, paige2, ep2uig);case Bshg7un:
            h96n = Bdqx_t;} else switch (h96n) {case Bm51rjf:
            {
              rwf583['tagName'];
            }'http://www.w3.org/1999/xhtml' === tx_dq[''] && gnhsu['match'](/^(?:disabled|checked|selected)$/i) || pnuegs['warning']('attribute "' + gnhsu + '" missed value!! "' + gnhsu + '" instead2!!'), rwf583['add'](gnhsu, gnhsu, ep2uig), ep2uig = hk79s6, h96n = Bs697;break;case Bshg7un:
            pnuegs['warning']('attribute space is required"' + gnhsu + '\x22!!');case Bdqx_t:
            h96n = Bs697, ep2uig = hk79s6;break;case Bvlz4bk:
            h96n = Ba2w3ie, ep2uig = hk79s6;break;case Bl$04y:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hk79s6++;
  }
}function Bnuepgs(k694bz, $0xyvt, f3r8aw) {
  for (var pg7usn = k694bz['tagName'], a82wf = null, zb9kl = k694bz['length']; zb9kl--;) {
    var a3w8f2 = k694bz[zb9kl],
        v4ybzl = a3w8f2['qName'],
        ty$lv = a3w8f2['value'],
        kbh69z = v4ybzl['indexOf'](':');if (kbh69z > 0x0) var r8j53f = a3w8f2['prefix'] = v4ybzl['slice'](0x0, kbh69z),
        uieg = v4ybzl['slice'](kbh69z + 0x1),
        q$tx_ = 'xmlns' === r8j53f && uieg;else uieg = v4ybzl, r8j53f = null, q$tx_ = 'xmlns' === v4ybzl && '';a3w8f2['localName'] = uieg, q$tx_ !== !0x1 && (null == a82wf && (a82wf = {}, Bz4k9lb(f3r8aw, f3r8aw = {})), f3r8aw[q$tx_] = a82wf[q$tx_] = ty$lv, a3w8f2['uri'] = 'http://www.w3.org/2000/xmlns/', $0xyvt['startPrefixMapping'](q$tx_, ty$lv));
  }for (var zb9kl = k694bz['length']; zb9kl--;) {
    a3w8f2 = k694bz[zb9kl];var r8j53f = a3w8f2['prefix'];r8j53f && ('xml' === r8j53f && (a3w8f2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r8j53f && (a3w8f2['uri'] = f3r8aw[r8j53f || '']));
  }var kbh69z = pg7usn['indexOf'](':');kbh69z > 0x0 ? (r8j53f = k694bz['prefix'] = pg7usn['slice'](0x0, kbh69z), uieg = k694bz['localName'] = pg7usn['slice'](kbh69z + 0x1)) : (r8j53f = null, uieg = k694bz['localName'] = pg7usn);var v0x$ = k694bz['uri'] = f3r8aw[r8j53f || ''];if ($0xyvt['startElement'](v0x$, uieg, pg7usn, k694bz), !k694bz['closed']) return k694bz['currentNSMap'] = f3r8aw, k694bz['localNSMap'] = a82wf, !0x0;if ($0xyvt['endElement'](v0x$, uieg, pg7usn), a82wf) {
    for (r8j53f in a82wf) $0xyvt['endPrefixMapping'](r8j53f);
  }
}function Bugpnei(l$yv, uspgn7, ughs7, sh7un, zk4b6) {
  if (/^(?:script|textarea)$/i['test'](ughs7)) {
    var k7hb = l$yv['indexOf']('</' + ughs7 + '>', uspgn7),
        k9b46 = l$yv['substring'](uspgn7 + 0x1, k7hb);if (/[&<]/['test'](k9b46)) return (/^script$/i['test'](ughs7) ? (zk4b6['characters'](k9b46, 0x0, k9b46['length']), k7hb) : (k9b46 = k9b46['replace'](/&#?\w+;/g, sh7un), zk4b6['characters'](k9b46, 0x0, k9b46['length']), k7hb)
    );
  }return uspgn7 + 0x1;
}function Bwi38a2(k9sh76, f85r1j, zh69bk, y_x$0) {
  var yltv$0 = y_x$0[zh69bk];return null == yltv$0 && (yltv$0 = k9sh76['lastIndexOf']('</' + zh69bk + '>'), f85r1j > yltv$0 && (yltv$0 = k9sh76['lastIndexOf']('</' + zh69bk)), y_x$0[zh69bk] = yltv$0), f85r1j > yltv$0;
}function Bz4k9lb(fw8r3a, ghu7ns) {
  for (var wf238 in fw8r3a) ghu7ns[wf238] = fw8r3a[wf238];
}function Bvb4klz(qdt$x, kzlb4v, f3w82a, g2aie) {
  var jm5r1f = qdt$x['charAt'](kzlb4v + 0x2);switch (jm5r1f) {case '-':
      if ('-' === qdt$x['charAt'](kzlb4v + 0x3)) {
        var tyvl = qdt$x['indexOf']('-->', kzlb4v + 0x4);return tyvl > kzlb4v ? (f3w82a['comment'](qdt$x, kzlb4v + 0x4, tyvl - kzlb4v - 0x4), tyvl + 0x3) : (g2aie['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qdt$x['substr'](kzlb4v + 0x3, 0x6)) {
        var tyvl = qdt$x['indexOf'](']]>', kzlb4v + 0x9);return f3w82a['startCDATA'](), f3w82a['characters'](qdt$x, kzlb4v + 0x9, tyvl - kzlb4v - 0x9), f3w82a['endCDATA'](), tyvl + 0x3;
      }var ugh7n = Bhz6b9k(qdt$x, kzlb4v),
          jf518r = ugh7n['length'];if (jf518r > 0x1 && /!doctype/i['test'](ugh7n[0x0][0x0])) {
        var vz4byl = ugh7n[0x1][0x0],
            x$dt0_ = jf518r > 0x3 && /^public$/i['test'](ugh7n[0x2][0x0]) && ugh7n[0x3][0x0],
            hngus7 = jf518r > 0x4 && ugh7n[0x4][0x0],
            iaw23e = ugh7n[jf518r - 0x1];return f3w82a['startDTD'](vz4byl, x$dt0_ && x$dt0_['replace'](/^(['"])(.*?)\1$/, '$2'), hngus7 && hngus7['replace'](/^(['"])(.*?)\1$/, '$2')), f3w82a['endDTD'](), iaw23e['index'] + iaw23e[0x0]['length'];
      }}return -0x1;
}function Bz4l0(yl$vt0, _qtxd$, gnpe) {
  var y0z4lv = yl$vt0['indexOf']('?>', _qtxd$);if (y0z4lv) {
    var f8j3 = yl$vt0['substring'](_qtxd$, y0z4lv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (f8j3) {
      {
        f8j3[0x0]['length'];
      }return gnpe['processingInstruction'](f8j3[0x1], f8j3[0x2]), y0z4lv + 0x2;
    }return -0x1;
  }return -0x1;
}function Begi() {}function Bgsunp(b6hz9, bz96kh) {
  return b6hz9['__proto__'] = bz96kh, b6hz9;
}function Bhz6b9k(gh7s, dt0$x) {
  var iawpe,
      jr5om = [],
      hs7ngu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hs7ngu['lastIndex'] = dt0$x, hs7ngu['exec'](gh7s); iawpe = hs7ngu['exec'](gh7s);) if (jr5om['push'](iawpe), iawpe[0x1]) return jr5om;
}var Bn7gpus = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Bh96b7 = new RegExp('[\\-\\.0-9' + Bn7gpus['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Bytx$_ = new RegExp('^' + Bn7gpus['source'] + Bh96b7['source'] + '*(?::' + Bn7gpus['source'] + Bh96b7['source'] + '*)?$'),
    Bfr51m = 0x0,
    Bs697 = 0x1,
    Bm51rjf = 0x2,
    Bvlz4bk = 0x3,
    Ba2w3ie = 0x4,
    Bshg7un = 0x5,
    Bdqx_t = 0x6,
    Bl$04y = 0x7;B_y$xt0['prototype'] = { 'parse': function (i2a3w8, r3w85, h9k7s) {
    var nsgpu7 = this['domBuilder'];nsgpu7['startDocument'](), Bz4k9lb(r3w85, r3w85 = {}), Ba3fr8(i2a3w8, r3w85, h9k7s, nsgpu7, this['errorHandler']), nsgpu7['endDocument']();
  } }, Begi['prototype'] = { 'setTagName': function (x_t$q) {
    if (!Bytx$_['test'](x_t$q)) throw new Error('invalid tagName:' + x_t$q);this['tagName'] = x_t$q;
  }, 'add': function (zlbkv4, nsg7uh, yvl0z4) {
    if (!Bytx$_['test'](zlbkv4)) throw new Error('invalid attribute:' + zlbkv4);this[this['length']++] = { 'qName': zlbkv4, 'value': nsg7uh, 'offset': yvl0z4 };
  }, 'length': 0x0, 'getLocalName': function (giaep2) {
    return this[giaep2]['localName'];
  }, 'getLocator': function (sn6) {
    return this[sn6]['locator'];
  }, 'getQName': function (gnupes) {
    return this[gnupes]['qName'];
  }, 'getURI': function (mfjr51) {
    return this[mfjr51]['uri'];
  }, 'getValue': function (x_t$y0) {
    return this[x_t$y0]['value'];
  } }, Bgsunp({}, Bgsunp['prototype']) instanceof Bgsunp || (Bgsunp = function (ugns7p, sgeup) {
  function $q_t() {}$q_t['prototype'] = sgeup, $q_t = new $q_t();for (sgeup in ugns7p) $q_t[sgeup] = ugns7p[sgeup];return $q_t;
}), exports['XMLReader'] = B_y$xt0;