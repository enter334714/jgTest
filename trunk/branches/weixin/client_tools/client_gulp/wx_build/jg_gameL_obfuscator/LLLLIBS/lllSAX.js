var W = wx.$l;
function L9huzm34() {}function L9gnwfb(jch0r, fsk81, gfkwbn, tuz, _q$y9w) {
  function yqw9g(vae57$) {
    if (vae57$ > 0xffff) {
      vae57$ -= 0x10000;var i2z4m = 0xd800 + (vae57$ >> 0xa),
          m4rz3h = 0xdc00 + (0x3ff & vae57$);return String['fromCharCode'](i2z4m, m4rz3h);
    }return String['fromCharCode'](vae57$);
  }function nqwgyb(x2otiu) {
    var y$w9_ = x2otiu['slice'](0x1, -0x1);return y$w9_ in gfkwbn ? gfkwbn[y$w9_] : '#' === y$w9_['charAt'](0x0) ? yqw9g(parseInt(y$w9_['substr'](0x1)['replace']('x', '0x'))) : (_q$y9w['error']('entity not found:' + x2otiu), x2otiu);
  }function e7a5v(zui42o) {
    if (zui42o > _ygq9w) {
      var z4r3h = jch0r['substring'](_ygq9w, zui42o)['replace'](/&#?\w+;/g, nqwgyb);m3z4h && nkfbg(_ygq9w), tuz['characters'](z4r3h, 0x0, zui42o - _ygq9w), _ygq9w = zui42o;
    }
  }function nkfbg(sf81kc, e5av76) {
    for (; sf81kc >= m4u32z && (e5av76 = _5$7e9['exec'](jch0r));) _yw9$ = e5av76['index'], m4u32z = _yw9$ + e5av76[0x0]['length'], m3z4h['lineNumber']++;m3z4h['columnNumber'] = sf81kc - _yw9$ + 0x1;
  }for (var _yw9$ = 0x0, m4u32z = 0x0, _5$7e9 = /.*(?:\r\n?|\n)|.*$/g, m3z4h = tuz['locator'], w_y9 = [{ 'currentNSMap': fsk81 }], uo2z = {}, _ygq9w = 0x0;;) {
    try {
      var hclj0 = jch0r['indexOf']('<', _ygq9w);if (0x0 > hclj0) {
        if (!jch0r['substr'](_ygq9w)['match'](/^\s*$/)) {
          var $e957_ = tuz['doc'],
              u4o = $e957_['createTextNode'](jch0r['substr'](_ygq9w));$e957_['appendChild'](u4o), tuz['currentElement'] = u4o;
        }return;
      }switch (hclj0 > _ygq9w && e7a5v(hclj0), jch0r['charAt'](hclj0 + 0x1)) {case '/':
          var nqbg = jch0r['indexOf']('>', hclj0 + 0x3),
              ywqg9 = jch0r['substring'](hclj0 + 0x2, nqbg),
              eav5$ = w_y9['pop']();0x0 > nqbg ? (ywqg9 = jch0r['substring'](hclj0 + 0x2)['replace'](/[\s<].*/, ''), _q$y9w['error']('end tag name: ' + ywqg9 + ' is not complete:' + eav5$['tagName']), nqbg = hclj0 + 0x1 + ywqg9['length']) : ywqg9['match'](/\s</) && (ywqg9 = ywqg9['replace'](/[\s<].*/, ''), _q$y9w['error']('end tag name: ' + ywqg9 + ' maybe not complete'), nqbg = hclj0 + 0x1 + ywqg9['length']);var hlr3m4 = eav5$['localNSMap'],
              hjc0lr = eav5$['tagName'] == ywqg9,
              gfnqb = hjc0lr || eav5$['tagName'] && eav5$['tagName']['toLowerCase']() == ywqg9['toLowerCase']();if (gfnqb) {
            if (tuz['endElement'](eav5$['uri'], eav5$['localName'], ywqg9), hlr3m4) {
              for (var qnbgw in hlr3m4) tuz['endPrefixMapping'](qnbgw);
            }hjc0lr || _q$y9w['fatalError']('end tag name: ' + ywqg9 + ' is not match the current start tagName:' + eav5$['tagName']);
          } else w_y9['push'](eav5$);nqbg++;break;case '?':
          m3z4h && nkfbg(hclj0), nqbg = L9s8j01(jch0r, hclj0, tuz);break;case '!':
          m3z4h && nkfbg(hclj0), nqbg = L9v$5ae(jch0r, hclj0, tuz, _q$y9w);break;default:
          m3z4h && nkfbg(hclj0);var h3rml = new L9kbwfn(),
              kcjs81 = w_y9[w_y9['length'] - 0x1]['currentNSMap'],
              nqbg = L9gbyw(jch0r, hclj0, h3rml, kcjs81, nqwgyb, _q$y9w),
              q9w_yg = h3rml['length'];if (!h3rml['closed'] && L9peva7(jch0r, nqbg, h3rml['tagName'], uo2z) && (h3rml['closed'] = !0x0, gfkwbn['nbsp'] || _q$y9w['warning']('unclosed xml attribute')), m3z4h && q9w_yg) {
            for (var j801lc = L9mlhr34(m3z4h, {}), ae5$7v = 0x0; q9w_yg > ae5$7v; ae5$7v++) {
              var qnbfg = h3rml[ae5$7v];nkfbg(qnbfg['offset']), qnbfg['locator'] = L9mlhr34(m3z4h, {});
            }tuz['locator'] = j801lc, L9k8bf(h3rml, tuz, kcjs81) && w_y9['push'](h3rml), tuz['locator'] = m3z4h;
          } else L9k8bf(h3rml, tuz, kcjs81) && w_y9['push'](h3rml);'http://www.w3.org/1999/xhtml' !== h3rml['uri'] || h3rml['closed'] ? nqbg++ : nqbg = L9fk1cs8(jch0r, nqbg, h3rml['tagName'], nqwgyb, tuz);}
    } catch (l0m) {
      _q$y9w['error']('element parse error: ' + l0m), nqbg = -0x1;
    }nqbg > _ygq9w ? _ygq9w = nqbg : e7a5v(Math['max'](hclj0, _ygq9w) + 0x1);
  }
}function L9mlhr34(hrj30, a$_75e) {
  return a$_75e['lineNumber'] = hrj30['lineNumber'], a$_75e['columnNumber'] = hrj30['columnNumber'], a$_75e;
}function L9gbyw(lh30jr, i42muz, l4rh, ae7pv6, j0lr3, ybnwq) {
  for (var wnkgb, cl1jr0, cfs18k = ++i42muz, a76pve = L9knsfb8;;) {
    var i2uoz = lh30jr['charAt'](cfs18k);switch (i2uoz) {case '=':
        if (a76pve === L9k8c) wnkgb = lh30jr['slice'](i42muz, cfs18k), a76pve = L9g9q_;else {
          if (a76pve !== L9m3l4rh) throw new Error('attribute equal must after attrName');a76pve = L9g9q_;
        }break;case '\x27':case '\x22':
        if (a76pve === L9g9q_ || a76pve === L9k8c) {
          if (a76pve === L9k8c && (ybnwq['warning']('attribute value must after "="'), wnkgb = lh30jr['slice'](i42muz, cfs18k)), i42muz = cfs18k + 0x1, cfs18k = lh30jr['indexOf'](i2uoz, i42muz), !(cfs18k > 0x0)) throw new Error('attribute value no end \'' + i2uoz + '\' match');cl1jr0 = lh30jr['slice'](i42muz, cfs18k)['replace'](/&#?\w+;/g, j0lr3), l4rh['add'](wnkgb, cl1jr0, i42muz - 0x1), a76pve = L9l8cj01;
        } else {
          if (a76pve != L9sfnbg) throw new Error('attribute value must after "="');cl1jr0 = lh30jr['slice'](i42muz, cfs18k)['replace'](/&#?\w+;/g, j0lr3), l4rh['add'](wnkgb, cl1jr0, i42muz), ybnwq['warning']('attribute "' + wnkgb + '" missed start quot(' + i2uoz + ')!!'), i42muz = cfs18k + 0x1, a76pve = L9l8cj01;
        }break;case '/':
        switch (a76pve) {case L9knsfb8:
            l4rh['setTagName'](lh30jr['slice'](i42muz, cfs18k));case L9l8cj01:case L9s01c8j:case L9wkbgf:
            a76pve = L9wkbgf, l4rh['closed'] = !0x0;case L9sfnbg:case L9k8c:case L9m3l4rh:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ybnwq['error']('unexpected end of input'), a76pve == L9knsfb8 && l4rh['setTagName'](lh30jr['slice'](i42muz, cfs18k)), cfs18k;case '>':
        switch (a76pve) {case L9knsfb8:
            l4rh['setTagName'](lh30jr['slice'](i42muz, cfs18k));case L9l8cj01:case L9s01c8j:case L9wkbgf:
            break;case L9sfnbg:case L9k8c:
            cl1jr0 = lh30jr['slice'](i42muz, cfs18k), '/' === cl1jr0['slice'](-0x1) && (l4rh['closed'] = !0x0, cl1jr0 = cl1jr0['slice'](0x0, -0x1));case L9m3l4rh:
            a76pve === L9m3l4rh && (cl1jr0 = wnkgb), a76pve == L9sfnbg ? (ybnwq['warning']('attribute "' + cl1jr0 + '" missed quot(")!!'), l4rh['add'](wnkgb, cl1jr0['replace'](/&#?\w+;/g, j0lr3), i42muz)) : ('http://www.w3.org/1999/xhtml' === ae7pv6[''] && cl1jr0['match'](/^(?:disabled|checked|selected)$/i) || ybnwq['warning']('attribute "' + cl1jr0 + '" missed value!! "' + cl1jr0 + '" instead!!'), l4rh['add'](cl1jr0, cl1jr0, i42muz));break;case L9g9q_:
            throw new Error('attribute value missed!!');}return cfs18k;case '\u0080':
        i2uoz = '\x20';default:
        if ('\x20' >= i2uoz) switch (a76pve) {case L9knsfb8:
            l4rh['setTagName'](lh30jr['slice'](i42muz, cfs18k)), a76pve = L9s01c8j;break;case L9k8c:
            wnkgb = lh30jr['slice'](i42muz, cfs18k), a76pve = L9m3l4rh;break;case L9sfnbg:
            var cl1jr0 = lh30jr['slice'](i42muz, cfs18k)['replace'](/&#?\w+;/g, j0lr3);ybnwq['warning']('attribute "' + cl1jr0 + '" missed quot(")!!'), l4rh['add'](wnkgb, cl1jr0, i42muz);case L9l8cj01:
            a76pve = L9s01c8j;} else switch (a76pve) {case L9m3l4rh:
            {
              l4rh['tagName'];
            }'http://www.w3.org/1999/xhtml' === ae7pv6[''] && wnkgb['match'](/^(?:disabled|checked|selected)$/i) || ybnwq['warning']('attribute "' + wnkgb + '" missed value!! "' + wnkgb + '" instead2!!'), l4rh['add'](wnkgb, wnkgb, i42muz), i42muz = cfs18k, a76pve = L9k8c;break;case L9l8cj01:
            ybnwq['warning']('attribute space is required"' + wnkgb + '\x22!!');case L9s01c8j:
            a76pve = L9k8c, i42muz = cfs18k;break;case L9g9q_:
            a76pve = L9sfnbg, i42muz = cfs18k;break;case L9wkbgf:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}cfs18k++;
  }
}function L9k8bf(yqgn, pv7ae, a$v5) {
  for (var jc1lr = yqgn['tagName'], e$5a_ = null, evda6p = yqgn['length']; evda6p--;) {
    var zo2i = yqgn[evda6p],
        yw$q_9 = zo2i['qName'],
        wbgqy = zo2i['value'],
        $79_5 = yw$q_9['indexOf'](':');if ($79_5 > 0x0) var vp6dea = zo2i['prefix'] = yw$q_9['slice'](0x0, $79_5),
        depa6 = yw$q_9['slice']($79_5 + 0x1),
        knsfgb = 'xmlns' === vp6dea && depa6;else depa6 = yw$q_9, vp6dea = null, knsfgb = 'xmlns' === yw$q_9 && '';zo2i['localName'] = depa6, knsfgb !== !0x1 && (null == e$5a_ && (e$5a_ = {}, L9sfkc8(a$v5, a$v5 = {})), a$v5[knsfgb] = e$5a_[knsfgb] = wbgqy, zo2i['uri'] = 'http://www.w3.org/2000/xmlns/', pv7ae['startPrefixMapping'](knsfgb, wbgqy));
  }for (var evda6p = yqgn['length']; evda6p--;) {
    zo2i = yqgn[evda6p];var vp6dea = zo2i['prefix'];vp6dea && ('xml' === vp6dea && (zo2i['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vp6dea && (zo2i['uri'] = a$v5[vp6dea || '']));
  }var $79_5 = jc1lr['indexOf'](':');$79_5 > 0x0 ? (vp6dea = yqgn['prefix'] = jc1lr['slice'](0x0, $79_5), depa6 = yqgn['localName'] = jc1lr['slice']($79_5 + 0x1)) : (vp6dea = null, depa6 = yqgn['localName'] = jc1lr);var peva76 = yqgn['uri'] = a$v5[vp6dea || ''];if (pv7ae['startElement'](peva76, depa6, jc1lr, yqgn), !yqgn['closed']) return yqgn['currentNSMap'] = a$v5, yqgn['localNSMap'] = e$5a_, !0x0;if (pv7ae['endElement'](peva76, depa6, jc1lr), e$5a_) {
    for (vp6dea in e$5a_) pv7ae['endPrefixMapping'](vp6dea);
  }
}function L9fk1cs8(bwygn, hj03r, e5_$a7, gsfknb, vp7ea) {
  if (/^(?:script|textarea)$/i['test'](e5_$a7)) {
    var lm3hr4 = bwygn['indexOf']('</' + e5_$a7 + '>', hj03r),
        va$5 = bwygn['substring'](hj03r + 0x1, lm3hr4);if (/[&<]/['test'](va$5)) return (/^script$/i['test'](e5_$a7) ? (vp7ea['characters'](va$5, 0x0, va$5['length']), lm3hr4) : (va$5 = va$5['replace'](/&#?\w+;/g, gsfknb), vp7ea['characters'](va$5, 0x0, va$5['length']), lm3hr4)
    );
  }return hj03r + 0x1;
}function L9peva7(eva65, iuto2, cj18, crlj1) {
  var umh3z4 = crlj1[cj18];return null == umh3z4 && (umh3z4 = eva65['lastIndexOf']('</' + cj18 + '>'), iuto2 > umh3z4 && (umh3z4 = eva65['lastIndexOf']('</' + cj18)), crlj1[cj18] = umh3z4), iuto2 > umh3z4;
}function L9sfkc8(rl3hj0, _e7$5a) {
  for (var wknfb in rl3hj0) _e7$5a[wknfb] = rl3hj0[wknfb];
}function L9v$5ae(nfbkgs, w_y9q$, i2u4zm, ui4zm) {
  var l30j = nfbkgs['charAt'](w_y9q$ + 0x2);switch (l30j) {case '-':
      if ('-' === nfbkgs['charAt'](w_y9q$ + 0x3)) {
        var fsnk81 = nfbkgs['indexOf']('-->', w_y9q$ + 0x4);return fsnk81 > w_y9q$ ? (i2u4zm['comment'](nfbkgs, w_y9q$ + 0x4, fsnk81 - w_y9q$ - 0x4), fsnk81 + 0x3) : (ui4zm['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nfbkgs['substr'](w_y9q$ + 0x3, 0x6)) {
        var fsnk81 = nfbkgs['indexOf'](']]>', w_y9q$ + 0x9);return i2u4zm['startCDATA'](), i2u4zm['characters'](nfbkgs, w_y9q$ + 0x9, fsnk81 - w_y9q$ - 0x9), i2u4zm['endCDATA'](), fsnk81 + 0x3;
      }var y5$_q = L9fns8(nfbkgs, w_y9q$),
          _wyq$9 = y5$_q['length'];if (_wyq$9 > 0x1 && /!doctype/i['test'](y5$_q[0x0][0x0])) {
        var hlm3r = y5$_q[0x1][0x0],
            e75av6 = _wyq$9 > 0x3 && /^public$/i['test'](y5$_q[0x2][0x0]) && y5$_q[0x3][0x0],
            ae$57 = _wyq$9 > 0x4 && y5$_q[0x4][0x0],
            cks81f = y5$_q[_wyq$9 - 0x1];return i2u4zm['startDTD'](hlm3r, e75av6 && e75av6['replace'](/^(['"])(.*?)\1$/, '$2'), ae$57 && ae$57['replace'](/^(['"])(.*?)\1$/, '$2')), i2u4zm['endDTD'](), cks81f['index'] + cks81f[0x0]['length'];
      }}return -0x1;
}function L9s8j01($wq_y, j0s8c1, l0hm3r) {
  var sjc8 = $wq_y['indexOf']('?>', j0s8c1);if (sjc8) {
    var ksj8c1 = $wq_y['substring'](j0s8c1, sjc8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ksj8c1) {
      {
        ksj8c1[0x0]['length'];
      }return l0hm3r['processingInstruction'](ksj8c1[0x1], ksj8c1[0x2]), sjc8 + 0x2;
    }return -0x1;
  }return -0x1;
}function L9kbwfn() {}function L9ve$7a5(wyqbng, c0jlhr) {
  return wyqbng['__proto__'] = c0jlhr, wyqbng;
}function L9fns8(ep6vda, va5$7) {
  var hl0m,
      nbgfks = [],
      snfb = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (snfb['lastIndex'] = va5$7, snfb['exec'](ep6vda); hl0m = snfb['exec'](ep6vda);) if (nbgfks['push'](hl0m), hl0m[0x1]) return nbgfks;
}var L9nqygbw = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9hc0rlj = new RegExp('[\\-\\.0-9' + L9nqygbw['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9ygbnq = new RegExp('^' + L9nqygbw['source'] + L9hc0rlj['source'] + '*(?::' + L9nqygbw['source'] + L9hc0rlj['source'] + '*)?$'),
    L9knsfb8 = 0x0,
    L9k8c = 0x1,
    L9m3l4rh = 0x2,
    L9g9q_ = 0x3,
    L9sfnbg = 0x4,
    L9l8cj01 = 0x5,
    L9s01c8j = 0x6,
    L9wkbgf = 0x7;L9huzm34['prototype'] = { 'parse': function (iu2m4, _y, kb8ns) {
    var nqfwg = this['domBuilder'];nqfwg['startDocument'](), L9sfkc8(_y, _y = {}), L9gnwfb(iu2m4, _y, kb8ns, nqfwg, this['errorHandler']), nqfwg['endDocument']();
  } }, L9kbwfn['prototype'] = { 'setTagName': function (g9_qy) {
    if (!L9ygbnq['test'](g9_qy)) throw new Error('invalid tagName:' + g9_qy);this['tagName'] = g9_qy;
  }, 'add': function (hml3r4, s8j1c, r0lc) {
    if (!L9ygbnq['test'](hml3r4)) throw new Error('invalid attribute:' + hml3r4);this[this['length']++] = { 'qName': hml3r4, 'value': s8j1c, 'offset': r0lc };
  }, 'length': 0x0, 'getLocalName': function (rm0h) {
    return this[rm0h]['localName'];
  }, 'getLocator': function (rmzh43) {
    return this[rmzh43]['locator'];
  }, 'getQName': function (l180) {
    return this[l180]['qName'];
  }, 'getURI': function (ziu42o) {
    return this[ziu42o]['uri'];
  }, 'getValue': function (zo4u2) {
    return this[zo4u2]['value'];
  } }, L9ve$7a5({}, L9ve$7a5['prototype']) instanceof L9ve$7a5 || (L9ve$7a5 = function (a56ve7, ioz42u) {
  function nskfg() {}nskfg['prototype'] = ioz42u, nskfg = new nskfg();for (ioz42u in a56ve7) nskfg[ioz42u] = a56ve7[ioz42u];return nskfg;
}), exports['XMLReader'] = L9huzm34;