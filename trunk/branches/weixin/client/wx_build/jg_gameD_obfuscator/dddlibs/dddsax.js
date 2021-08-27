var v = wx.$d;
function z$py7mgb() {}function zgbam$(ou_b6a$, pygbm97, opabm$, ua_$6e, gmy7bp) {
  function zen1f(k1jhri) {
    var y97gmwp = k1jhri['slice'](0x1, -0x1);return y97gmwp in opabm$ ? opabm$[y97gmwp] : '#' === y97gmwp['charAt'](0x0) ? 0xffff < (y97gmwp = parseInt(y97gmwp['substr'](0x1)['replace']('x', '0x'))) ? (y97gmwp -= 0x10000, String['fromCharCode'](0xd800 + (y97gmwp >> 0xa), 0xdc00 + (0x3ff & y97gmwp))) : String['fromCharCode'](y97gmwp) : (gmy7bp['error']('entity not found:' + k1jhri), k1jhri);
  }function a$mobu_(e6o_zu) {
    var tkjfh1n;nft1z3j < e6o_zu && (tkjfh1n = ou_b6a$['substring'](nft1z3j, e6o_zu)['replace'](/&#?\w+;/g, zen1f), p7y59w && tf1zne3(nft1z3j), ua_$6e['characters'](tkjfh1n, 0x0, e6o_zu - nft1z3j), nft1z3j = e6o_zu);
  }function tf1zne3(h1nkftj, _obm) {
    for (; ze_au6 <= h1nkftj && (_obm = gmpo$ab['exec'](ou_b6a$));) lx2584 = _obm['index'], ze_au6 = lx2584 + _obm[0x0]['length'], p7y59w['lineNumber']++;p7y59w['columnNumber'] = h1nkftj - lx2584 + 0x1;
  }for (var lx2584 = 0x0, ze_au6 = 0x0, gmpo$ab = /.*(?:\r\n?|\n)|.*$/g, p7y59w = ua_$6e['locator'], ouza6 = [{ 'currentNSMap': pygbm97 }], $ao_um = {}, nft1z3j = 0x0;;) {
    try {
      var y94w75 = ou_b6a$['indexOf']('<', nft1z3j),
          hrtkj,
          z63nt1e;if (y94w75 < 0x0) return void (ou_b6a$['substr'](nft1z3j)['match'](/^\s*$/) || (z63nt1e = (hrtkj = ua_$6e['doc'])['createTextNode'](ou_b6a$['substr'](nft1z3j)), hrtkj['appendChild'](z63nt1e), ua_$6e['currentElement'] = z63nt1e));switch (nft1z3j < y94w75 && a$mobu_(y94w75), ou_b6a$['charAt'](y94w75 + 0x1)) {case '/':
          var hjfnkt1 = ou_b6a$['indexOf']('>', y94w75 + 0x3),
              ih1rkfj = ou_b6a$['substring'](y94w75 + 0x2, hjfnkt1),
              q02l8x = ouza6['pop']();hjfnkt1 < 0x0 ? (ih1rkfj = ou_b6a$['substring'](y94w75 + 0x2)['replace'](/[\s<].*/, ''), gmy7bp['error']('end tag name: ' + ih1rkfj + ' is not complete:' + q02l8x['tagName']), hjfnkt1 = y94w75 + 0x1 + ih1rkfj['length']) : ih1rkfj['match'](/\s</) && (ih1rkfj = ih1rkfj['replace'](/[\s<].*/, ''), gmy7bp['error']('end tag name: ' + ih1rkfj + ' maybe not complete'), hjfnkt1 = y94w75 + 0x1 + ih1rkfj['length']);var x0qv8l = q02l8x['localNSMap'],
              $obag = q02l8x['tagName'] == ih1rkfj;if ($obag || q02l8x['tagName'] && q02l8x['tagName']['toLowerCase']() == ih1rkfj['toLowerCase']()) {
            if (ua_$6e['endElement'](q02l8x['uri'], q02l8x['localName'], ih1rkfj), x0qv8l) {
              for (var pc5y7w in x0qv8l) ua_$6e['endPrefixMapping'](pc5y7w);
            }$obag || gmy7bp['fatalError']('end tag name: ' + ih1rkfj + ' is not match the current start tagName:' + q02l8x['tagName']);
          } else ouza6['push'](q02l8x);hjfnkt1++;break;case '?':
          p7y59w && tf1zne3(y94w75), hjfnkt1 = zg7wmyp(ou_b6a$, y94w75, ua_$6e);break;case '!':
          p7y59w && tf1zne3(y94w75), hjfnkt1 = z$b_auo(ou_b6a$, y94w75, ua_$6e, gmy7bp);break;default:
          p7y59w && tf1zne3(y94w75);var c59l42 = new zbouagm$(),
              go7$bp = ouza6[ouza6['length'] - 0x1]['currentNSMap'],
              hjfnkt1 = zen61z3t(ou_b6a$, y94w75, c59l42, go7$bp, zen1f, gmy7bp),
              mp9wy7g = c59l42['length'];if (!c59l42['closed'] && zoua_6$b(ou_b6a$, hjfnkt1, c59l42['tagName'], $ao_um) && (c59l42['closed'] = !0x0, opabm$['nbsp'] || gmy7bp['warning']('unclosed xml attribute')), p7y59w && mp9wy7g) {
            for (var wc42l58 = zl8254cw(p7y59w, {}), y9gp75 = 0x0; y9gp75 < mp9wy7g; y9gp75++) {
              var u3e_z6n = c59l42[y9gp75];tf1zne3(u3e_z6n['offset']), u3e_z6n['locator'] = zl8254cw(p7y59w, {});
            }ua_$6e['locator'] = wc42l58, zp9bgm7(c59l42, ua_$6e, go7$bp) && ouza6['push'](c59l42), ua_$6e['locator'] = p7y59w;
          } else zp9bgm7(c59l42, ua_$6e, go7$bp) && ouza6['push'](c59l42);'http://www.w3.org/1999/xhtml' !== c59l42['uri'] || c59l42['closed'] ? hjfnkt1++ : hjfnkt1 = za6_b$(ou_b6a$, hjfnkt1, c59l42['tagName'], zen1f, ua_$6e);}
    } catch (b$oagmu) {
      gmy7bp['error']('element parse error: ' + b$oagmu), hjfnkt1 = -0x1;
    }nft1z3j < hjfnkt1 ? nft1z3j = hjfnkt1 : a$mobu_(Math['max'](y94w75, nft1z3j) + 0x1);
  }
}function zl8254cw(_6o$au, gyb9p7m) {
  return gyb9p7m['lineNumber'] = _6o$au['lineNumber'], gyb9p7m['columnNumber'] = _6o$au['columnNumber'], gyb9p7m;
}function zen61z3t(ambo_$, tn3f1ez, c5749wy, k13jn, p$bmo7g, hfjir) {
  for (var m$uago, ba6$ = ++tn3f1ez, pm$agb = z$gop7;;) {
    var t36e = ambo_$['charAt'](ba6$);switch (t36e) {case '=':
        if (pm$agb === zgom7$p) m$uago = ambo_$['slice'](tn3f1ez, ba6$), pm$agb = zzt13fe;else {
          if (pm$agb !== ztfnj1k) throw new Error('attribute equal must after attrName');pm$agb = zzt13fe;
        }break;case '\x27':case '\x22':
        if (pm$agb === zzt13fe || pm$agb === zgom7$p) {
          if (pm$agb === zgom7$p && (hfjir['warning']('attribute value must after "="'), m$uago = ambo_$['slice'](tn3f1ez, ba6$)), !(0x0 < (ba6$ = ambo_$['indexOf'](t36e, tn3f1ez = ba6$ + 0x1)))) throw new Error('attribute value no end \'' + t36e + '\' match');q8xl24 = ambo_$['slice'](tn3f1ez, ba6$)['replace'](/&#?\w+;/g, p$bmo7g), c5749wy['add'](m$uago, q8xl24, tn3f1ez - 0x1), pm$agb = zt1hfjr;
        } else {
          if (pm$agb != zbg$m7o) throw new Error('attribute value must after "="');q8xl24 = ambo_$['slice'](tn3f1ez, ba6$)['replace'](/&#?\w+;/g, p$bmo7g), c5749wy['add'](m$uago, q8xl24, tn3f1ez), hfjir['warning']('attribute "' + m$uago + '" missed start quot(' + t36e + ')!!'), tn3f1ez = ba6$ + 0x1, pm$agb = zt1hfjr;
        }break;case '/':
        switch (pm$agb) {case z$gop7:
            c5749wy['setTagName'](ambo_$['slice'](tn3f1ez, ba6$));case zt1hfjr:case zbp7$ogm:case zy7p95g:
            pm$agb = zy7p95g, c5749wy['closed'] = !0x0;case zbg$m7o:case zgom7$p:case ztfnj1k:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hfjir['error']('unexpected end of input'), pm$agb == z$gop7 && c5749wy['setTagName'](ambo_$['slice'](tn3f1ez, ba6$)), ba6$;case '>':
        switch (pm$agb) {case z$gop7:
            c5749wy['setTagName'](ambo_$['slice'](tn3f1ez, ba6$));case zt1hfjr:case zbp7$ogm:case zy7p95g:
            break;case zbg$m7o:case zgom7$p:
            '/' === (q8xl24 = ambo_$['slice'](tn3f1ez, ba6$))['slice'](-0x1) && (c5749wy['closed'] = !0x0, q8xl24 = q8xl24['slice'](0x0, -0x1));case ztfnj1k:
            pm$agb === ztfnj1k && (q8xl24 = m$uago), pm$agb == zbg$m7o ? (hfjir['warning']('attribute "' + q8xl24 + '" missed quot(")!!'), c5749wy['add'](m$uago, q8xl24['replace'](/&#?\w+;/g, p$bmo7g), tn3f1ez)) : ('http://www.w3.org/1999/xhtml' === k13jn[''] && q8xl24['match'](/^(?:disabled|checked|selected)$/i) || hfjir['warning']('attribute "' + q8xl24 + '" missed value!! "' + q8xl24 + '" instead!!'), c5749wy['add'](q8xl24, q8xl24, tn3f1ez));break;case zzt13fe:
            throw new Error('attribute value missed!!');}return ba6$;case '\u0080':
        t36e = '\x20';default:
        if (t36e <= '\x20') switch (pm$agb) {case z$gop7:
            c5749wy['setTagName'](ambo_$['slice'](tn3f1ez, ba6$)), pm$agb = zbp7$ogm;break;case zgom7$p:
            m$uago = ambo_$['slice'](tn3f1ez, ba6$), pm$agb = ztfnj1k;break;case zbg$m7o:
            var q8xl24 = ambo_$['slice'](tn3f1ez, ba6$)['replace'](/&#?\w+;/g, p$bmo7g);hfjir['warning']('attribute "' + q8xl24 + '" missed quot(")!!'), c5749wy['add'](m$uago, q8xl24, tn3f1ez);case zt1hfjr:
            pm$agb = zbp7$ogm;} else switch (pm$agb) {case ztfnj1k:
            c5749wy['tagName'], 'http://www.w3.org/1999/xhtml' === k13jn[''] && m$uago['match'](/^(?:disabled|checked|selected)$/i) || hfjir['warning']('attribute "' + m$uago + '" missed value!! "' + m$uago + '" instead2!!'), c5749wy['add'](m$uago, m$uago, tn3f1ez), tn3f1ez = ba6$, pm$agb = zgom7$p;break;case zt1hfjr:
            hfjir['warning']('attribute space is required"' + m$uago + '\x22!!');case zbp7$ogm:
            pm$agb = zgom7$p, tn3f1ez = ba6$;break;case zzt13fe:
            pm$agb = zbg$m7o, tn3f1ez = ba6$;break;case zy7p95g:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ba6$++;
  }
}function zp9bgm7(gu$mo, h1kfjnt, y47w5c) {
  for (var c7594w = gu$mo['tagName'], mpg$y = null, eu$ao_ = gu$mo['length']; eu$ao_--;) {
    var m$7pbog = gu$mo[eu$ao_],
        x02v8qd = m$7pbog['qName'],
        cl5w249 = m$7pbog['value'],
        mbpo7$;x02v8qd = 0x0 < (w7yg59 = x02v8qd['indexOf'](':')) ? (p957gw = m$7pbog['prefix'] = x02v8qd['slice'](0x0, w7yg59), mbpo7$ = x02v8qd['slice'](w7yg59 + 0x1), 'xmlns' === p957gw && mbpo7$) : (p957gw = null, 'xmlns' === (mbpo7$ = x02v8qd) && ''), m$7pbog['localName'] = mbpo7$, !0x1 !== x02v8qd && (null == mpg$y && (mpg$y = {}, ze6u3za(y47w5c, y47w5c = {})), y47w5c[x02v8qd] = mpg$y[x02v8qd] = cl5w249, m$7pbog['uri'] = 'http://www.w3.org/2000/xmlns/', h1kfjnt['startPrefixMapping'](x02v8qd, cl5w249));
  }for (eu$ao_ = gu$mo['length']; eu$ao_--;) (p957gw = (m$7pbog = gu$mo[eu$ao_])['prefix']) && ('xml' === p957gw && (m$7pbog['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== p957gw && (m$7pbog['uri'] = y47w5c[p957gw || '']));var w7yg59;mbpo7$ = 0x0 < (w7yg59 = c7594w['indexOf'](':')) ? (p957gw = gu$mo['prefix'] = c7594w['slice'](0x0, w7yg59), gu$mo['localName'] = c7594w['slice'](w7yg59 + 0x1)) : (p957gw = null, gu$mo['localName'] = c7594w);var p97ywc = gu$mo['uri'] = y47w5c[p957gw || ''];if (h1kfjnt['startElement'](p97ywc, mbpo7$, c7594w, gu$mo), !gu$mo['closed']) return gu$mo['currentNSMap'] = y47w5c, gu$mo['localNSMap'] = mpg$y, !0x0;if (h1kfjnt['endElement'](p97ywc, mbpo7$, c7594w), mpg$y) {
    for (var p957gw in mpg$y) h1kfjnt['endPrefixMapping'](p957gw);
  }
}function za6_b$(ymb7pg, eztn, _$abmo, _e$au, z316n) {
  if (/^(?:script|textarea)$/i['test'](_$abmo)) {
    var gp$by7m = ymb7pg['indexOf']('</' + _$abmo + '>', eztn),
        ymb7pg = ymb7pg['substring'](eztn + 0x1, gp$by7m);if (/[&<]/['test'](ymb7pg)) return (/^script$/i['test'](_$abmo) || (ymb7pg = ymb7pg['replace'](/&#?\w+;/g, _e$au)), z316n['characters'](ymb7pg, 0x0, ymb7pg['length']), gp$by7m
    );
  }return eztn + 0x1;
}function zoua_6$b(mwy9g7, jz3n1t, $o6uae_, m$yb7p) {
  var m97gyw = m$yb7p[$o6uae_];return null == m97gyw && ((m97gyw = mwy9g7['lastIndexOf']('</' + $o6uae_ + '>')) < jz3n1t && (m97gyw = mwy9g7['lastIndexOf']('</' + $o6uae_)), m$yb7p[$o6uae_] = m97gyw), m97gyw < jz3n1t;
}function ze6u3za(_3z6uen, nzt36e) {
  for (var cl4qx28 in _3z6uen) nzt36e[cl4qx28] = _3z6uen[cl4qx28];
}function z$b_auo(fjk3tn1, kfijh1r, rh1ijfk, n1ft3) {
  var _e36znt = fjk3tn1['charAt'](kfijh1r + 0x2);if ('-' === _e36znt) return '-' !== fjk3tn1['charAt'](kfijh1r + 0x3) ? -0x1 : kfijh1r < (au$g = fjk3tn1['indexOf']('-->', kfijh1r + 0x4)) ? (rh1ijfk['comment'](fjk3tn1, kfijh1r + 0x4, au$g - kfijh1r - 0x4), au$g + 0x3) : (n1ft3['error']('Unclosed comment'), -0x1);if ('CDATA[' == fjk3tn1['substr'](kfijh1r + 0x3, 0x6)) {
    var au$g = fjk3tn1['indexOf'](']]>', kfijh1r + 0x9);return rh1ijfk['startCDATA'](), rh1ijfk['characters'](fjk3tn1, kfijh1r + 0x9, au$g - kfijh1r - 0x9), rh1ijfk['endCDATA'](), au$g + 0x3;
  }_e36znt = zu_3a6(fjk3tn1, kfijh1r), n1ft3 = _e36znt['length'];if (0x1 < n1ft3 && /!doctype/i['test'](_e36znt[0x0][0x0])) return au$g = _e36znt[0x1][0x0], fjk3tn1 = 0x3 < n1ft3 && /^public$/i['test'](_e36znt[0x2][0x0]) && _e36znt[0x3][0x0], kfijh1r = 0x4 < n1ft3 && _e36znt[0x4][0x0], n1ft3 = _e36znt[n1ft3 - 0x1], (rh1ijfk['startDTD'](au$g, fjk3tn1 && fjk3tn1['replace'](/^(['"])(.*?)\1$/, '$2'), kfijh1r && kfijh1r['replace'](/^(['"])(.*?)\1$/, '$2')), rh1ijfk['endDTD'](), n1ft3['index'] + n1ft3[0x0]['length']);return -0x1;
}function zg7wmyp(t_36nz, bmo$a_u, _u6a$) {
  var kt1jfh = t_36nz['indexOf']('?>', bmo$a_u);if (kt1jfh) return bmo$a_u = t_36nz['substring'](bmo$a_u, kt1jfh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), bmo$a_u ? (bmo$a_u[0x0]['length'], _u6a$['processingInstruction'](bmo$a_u[0x1], bmo$a_u[0x2]), kt1jfh + 0x2) : -0x1;return -0x1;
}function zbouagm$() {}function zc94wl5y(y97wg5p, x54c82) {
  return y97wg5p['__proto__'] = x54c82, y97wg5p;
}function zu_3a6(_n36euz, q40xl) {
  var et3fz,
      myb9gp = [],
      _$ao6bu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_$ao6bu['lastIndex'] = q40xl, _$ao6bu['exec'](_n36euz); et3fz = _$ao6bu['exec'](_n36euz);) if (myb9gp['push'](et3fz), et3fz[0x1]) return myb9gp;
}var zt13enf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zx8dv20 = new RegExp('[\\-\\.0-9' + zt13enf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zm$u_ab = new RegExp('^' + zt13enf['source'] + zx8dv20['source'] + '*(?::' + zt13enf['source'] + zx8dv20['source'] + '*)?$'),
    z$gop7 = 0x0,
    zgom7$p = 0x1,
    ztfnj1k = 0x2,
    zzt13fe = 0x3,
    zbg$m7o = 0x4,
    zt1hfjr = 0x5,
    zbp7$ogm = 0x6,
    zy7p95g = 0x7;z$py7mgb['prototype'] = { 'parse': function (xvq02d8, m7p$b, v8dx20q) {
    var f1hkrt = this['domBuilder'];f1hkrt['startDocument'](), ze6u3za(m7p$b, m7p$b = {}), zgbam$(xvq02d8, m7p$b, v8dx20q, f1hkrt, this['errorHandler']), f1hkrt['endDocument']();
  } }, zbouagm$['prototype'] = { 'setTagName': function (rk1jh) {
    if (!zm$u_ab['test'](rk1jh)) throw new Error('invalid tagName:' + rk1jh);this['tagName'] = rk1jh;
  }, 'add': function (jh1rftk, nkf1hjt, n6z_3eu) {
    if (!zm$u_ab['test'](jh1rftk)) throw new Error('invalid attribute:' + jh1rftk);this[this['length']++] = { 'qName': jh1rftk, 'value': nkf1hjt, 'offset': n6z_3eu };
  }, 'length': 0x0, 'getLocalName': function (fj3nz) {
    return this[fj3nz]['localName'];
  }, 'getLocator': function (x0l284q) {
    return this[x0l284q]['locator'];
  }, 'getQName': function (thkfnj) {
    return this[thkfnj]['qName'];
  }, 'getURI': function (uae3z6_) {
    return this[uae3z6_]['uri'];
  }, 'getValue': function (g795pw) {
    return this[g795pw]['value'];
  } }, zc94wl5y({}, zc94wl5y['prototype']) instanceof zc94wl5y || (zc94wl5y = function (n13tfkj, _ma$ou) {
  function jk31ntf() {}for (_ma$ou in jk31ntf['prototype'] = _ma$ou, jk31ntf = new jk31ntf(), n13tfkj) jk31ntf[_ma$ou] = n13tfkj[_ma$ou];return jk31ntf;
}), exports['XMLReader'] = z$py7mgb;