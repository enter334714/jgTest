var S = wx.$J;
function j1_vz63bk() {}function j1_oq18g$(alnf0u, btv25k, lqn08, yum4dj, yew9s_) {
  function _swe4y(jmy4) {
    var $52t = jmy4['slice'](0x1, -0x1);return $52t in lqn08 ? lqn08[$52t] : '#' === $52t['charAt'](0x0) ? 0xffff < ($52t = parseInt($52t['substr'](0x1)['replace']('x', '0x'))) ? ($52t -= 0x10000, String['fromCharCode'](0xd800 + ($52t >> 0xa), 0xdc00 + (0x3ff & $52t))) : String['fromCharCode']($52t) : (yew9s_['error']('entity not found:' + jmy4), jmy4);
  }function djualf(gc$8o2) {
    var $8g1;mu4aj < gc$8o2 && ($8g1 = alnf0u['substring'](mu4aj, gc$8o2)['replace'](/&#?\w+;/g, _swe4y), n08q && k2tv5(mu4aj), yum4dj['characters']($8g1, 0x0, gc$8o2 - mu4aj), mu4aj = gc$8o2);
  }function k2tv5(pb6z, falduj) {
    for (; ws_y9e <= pb6z && (falduj = co1$8g['exec'](alnf0u));) dulaj = falduj['index'], ws_y9e = dulaj + falduj[0x0]['length'], n08q['lineNumber']++;n08q['columnNumber'] = pb6z - dulaj + 0x1;
  }for (var dulaj = 0x0, ws_y9e = 0x0, co1$8g = /.*(?:\r\n?|\n)|.*$/g, n08q = yum4dj['locator'], t2gc$o = [{ 'currentNSMap': btv25k }], q0o18g = {}, mu4aj = 0x0;;) {
    try {
      var w97_se = alnf0u['indexOf']('<', mu4aj),
          tvck25,
          r3xiph;if (w97_se < 0x0) return void (alnf0u['substr'](mu4aj)['match'](/^\s*$/) || (r3xiph = (tvck25 = yum4dj['doc'])['createTextNode'](alnf0u['substr'](mu4aj)), tvck25['appendChild'](r3xiph), yum4dj['currentElement'] = r3xiph));switch (mu4aj < w97_se && djualf(w97_se), alnf0u['charAt'](w97_se + 0x1)) {case '/':
          var gq08n1 = alnf0u['indexOf']('>', w97_se + 0x3),
              gc8o$2 = alnf0u['substring'](w97_se + 0x2, gq08n1),
              fmuj = t2gc$o['pop']();gq08n1 < 0x0 ? (gc8o$2 = alnf0u['substring'](w97_se + 0x2)['replace'](/[\s<].*/, ''), yew9s_['error']('end tag name: ' + gc8o$2 + ' is not complete:' + fmuj['tagName']), gq08n1 = w97_se + 0x1 + gc8o$2['length']) : gc8o$2['match'](/\s</) && (gc8o$2 = gc8o$2['replace'](/[\s<].*/, ''), yew9s_['error']('end tag name: ' + gc8o$2 + ' maybe not complete'), gq08n1 = w97_se + 0x1 + gc8o$2['length']);var mw4djy = fmuj['localNSMap'],
              uaf0 = fmuj['tagName'] == gc8o$2;if (uaf0 || fmuj['tagName'] && fmuj['tagName']['toLowerCase']() == gc8o$2['toLowerCase']()) {
            if (yum4dj['endElement'](fmuj['uri'], fmuj['localName'], gc8o$2), mw4djy) {
              for (var alnuf0 in mw4djy) yum4dj['endPrefixMapping'](alnuf0);
            }uaf0 || yew9s_['fatalError']('end tag name: ' + gc8o$2 + ' is not match the current start tagName:' + fmuj['tagName']);
          } else t2gc$o['push'](fmuj);gq08n1++;break;case '?':
          n08q && k2tv5(w97_se), gq08n1 = j1__eysw(alnf0u, w97_se, yum4dj);break;case '!':
          n08q && k2tv5(w97_se), gq08n1 = j1_ocgt$2(alnf0u, w97_se, yum4dj, yew9s_);break;default:
          n08q && k2tv5(w97_se);var m4w_ye = new j1_v3zk(),
              ql081 = t2gc$o[t2gc$o['length'] - 0x1]['currentNSMap'],
              gq08n1 = j1_vtb2(alnf0u, w97_se, m4w_ye, ql081, _swe4y, yew9s_),
              sy4w_ = m4w_ye['length'];if (!m4w_ye['closed'] && j1_w_e4ym(alnf0u, gq08n1, m4w_ye['tagName'], q0o18g) && (m4w_ye['closed'] = !0x0, lqn08['nbsp'] || yew9s_['warning']('unclosed xml attribute')), n08q && sy4w_) {
            for (var h6pi3z = j1_ufljad(n08q, {}), g$oc18 = 0x0; g$oc18 < sy4w_; g$oc18++) {
              var gco2$t = m4w_ye[g$oc18];k2tv5(gco2$t['offset']), gco2$t['locator'] = j1_ufljad(n08q, {});
            }yum4dj['locator'] = h6pi3z, j1_h63ixp(m4w_ye, yum4dj, ql081) && t2gc$o['push'](m4w_ye), yum4dj['locator'] = n08q;
          } else j1_h63ixp(m4w_ye, yum4dj, ql081) && t2gc$o['push'](m4w_ye);'http://www.w3.org/1999/xhtml' !== m4w_ye['uri'] || m4w_ye['closed'] ? gq08n1++ : gq08n1 = j1_mywe(alnf0u, gq08n1, m4w_ye['tagName'], _swe4y, yum4dj);}
    } catch (_y4se) {
      yew9s_['error']('element parse error: ' + _y4se), gq08n1 = -0x1;
    }mu4aj < gq08n1 ? mu4aj = gq08n1 : djualf(Math['max'](w97_se, mu4aj) + 0x1);
  }
}function j1_ufljad(zkb36, gq1$8o) {
  return gq1$8o['lineNumber'] = zkb36['lineNumber'], gq1$8o['columnNumber'] = zkb36['columnNumber'], gq1$8o;
}function j1_vtb2(e_4myw, mujf, faudjm, o2$c5t, i6x3, g1c8) {
  for (var $g8q1, $goc8 = ++mujf, zv3k6 = j1_wyse9_;;) {
    var adfjl = e_4myw['charAt']($goc8);switch (adfjl) {case '=':
        if (zv3k6 === j1_rhipx) $g8q1 = e_4myw['slice'](mujf, $goc8), zv3k6 = j1_tkv52;else {
          if (zv3k6 !== j1_ihzp3) throw new Error('attribute equal must after attrName');zv3k6 = j1_tkv52;
        }break;case '\x27':case '\x22':
        if (zv3k6 === j1_tkv52 || zv3k6 === j1_rhipx) {
          if (zv3k6 === j1_rhipx && (g1c8['warning']('attribute value must after "="'), $g8q1 = e_4myw['slice'](mujf, $goc8)), !(0x0 < ($goc8 = e_4myw['indexOf'](adfjl, mujf = $goc8 + 0x1)))) throw new Error('attribute value no end \'' + adfjl + '\' match');$ogc = e_4myw['slice'](mujf, $goc8)['replace'](/&#?\w+;/g, i6x3), faudjm['add']($g8q1, $ogc, mujf - 0x1), zv3k6 = j1_mew_4;
        } else {
          if (zv3k6 != j1_umjdaf) throw new Error('attribute value must after "="');$ogc = e_4myw['slice'](mujf, $goc8)['replace'](/&#?\w+;/g, i6x3), faudjm['add']($g8q1, $ogc, mujf), g1c8['warning']('attribute "' + $g8q1 + '" missed start quot(' + adfjl + ')!!'), mujf = $goc8 + 0x1, zv3k6 = j1_mew_4;
        }break;case '/':
        switch (zv3k6) {case j1_wyse9_:
            faudjm['setTagName'](e_4myw['slice'](mujf, $goc8));case j1_mew_4:case j1_adflnu:case j1_j4ewym:
            zv3k6 = j1_j4ewym, faudjm['closed'] = !0x0;case j1_umjdaf:case j1_rhipx:case j1_ihzp3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return g1c8['error']('unexpected end of input'), zv3k6 == j1_wyse9_ && faudjm['setTagName'](e_4myw['slice'](mujf, $goc8)), $goc8;case '>':
        switch (zv3k6) {case j1_wyse9_:
            faudjm['setTagName'](e_4myw['slice'](mujf, $goc8));case j1_mew_4:case j1_adflnu:case j1_j4ewym:
            break;case j1_umjdaf:case j1_rhipx:
            '/' === ($ogc = e_4myw['slice'](mujf, $goc8))['slice'](-0x1) && (faudjm['closed'] = !0x0, $ogc = $ogc['slice'](0x0, -0x1));case j1_ihzp3:
            zv3k6 === j1_ihzp3 && ($ogc = $g8q1), zv3k6 == j1_umjdaf ? (g1c8['warning']('attribute "' + $ogc + '" missed quot(")!!'), faudjm['add']($g8q1, $ogc['replace'](/&#?\w+;/g, i6x3), mujf)) : ('http://www.w3.org/1999/xhtml' === o2$c5t[''] && $ogc['match'](/^(?:disabled|checked|selected)$/i) || g1c8['warning']('attribute "' + $ogc + '" missed value!! "' + $ogc + '" instead!!'), faudjm['add']($ogc, $ogc, mujf));break;case j1_tkv52:
            throw new Error('attribute value missed!!');}return $goc8;case '\u0080':
        adfjl = '\x20';default:
        if (adfjl <= '\x20') switch (zv3k6) {case j1_wyse9_:
            faudjm['setTagName'](e_4myw['slice'](mujf, $goc8)), zv3k6 = j1_adflnu;break;case j1_rhipx:
            $g8q1 = e_4myw['slice'](mujf, $goc8), zv3k6 = j1_ihzp3;break;case j1_umjdaf:
            var $ogc = e_4myw['slice'](mujf, $goc8)['replace'](/&#?\w+;/g, i6x3);g1c8['warning']('attribute "' + $ogc + '" missed quot(")!!'), faudjm['add']($g8q1, $ogc, mujf);case j1_mew_4:
            zv3k6 = j1_adflnu;} else switch (zv3k6) {case j1_ihzp3:
            faudjm['tagName'], 'http://www.w3.org/1999/xhtml' === o2$c5t[''] && $g8q1['match'](/^(?:disabled|checked|selected)$/i) || g1c8['warning']('attribute "' + $g8q1 + '" missed value!! "' + $g8q1 + '" instead2!!'), faudjm['add']($g8q1, $g8q1, mujf), mujf = $goc8, zv3k6 = j1_rhipx;break;case j1_mew_4:
            g1c8['warning']('attribute space is required"' + $g8q1 + '\x22!!');case j1_adflnu:
            zv3k6 = j1_rhipx, mujf = $goc8;break;case j1_tkv52:
            zv3k6 = j1_umjdaf, mujf = $goc8;break;case j1_j4ewym:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$goc8++;
  }
}function j1_h63ixp(zk5vbt, t$52co, q$o81) {
  for (var og18q$ = zk5vbt['tagName'], vk3zb = null, t5vzk = zk5vbt['length']; t5vzk--;) {
    var faldu = zk5vbt[t5vzk],
        udm4y = faldu['qName'],
        ldn = faldu['value'],
        nadf;udm4y = 0x0 < (pi3xrh = udm4y['indexOf'](':')) ? (k5 = faldu['prefix'] = udm4y['slice'](0x0, pi3xrh), nadf = udm4y['slice'](pi3xrh + 0x1), 'xmlns' === k5 && nadf) : (k5 = null, 'xmlns' === (nadf = udm4y) && ''), faldu['localName'] = nadf, !0x1 !== udm4y && (null == vk3zb && (vk3zb = {}, j1_k2vbt5(q$o81, q$o81 = {})), q$o81[udm4y] = vk3zb[udm4y] = ldn, faldu['uri'] = 'http://www.w3.org/2000/xmlns/', t$52co['startPrefixMapping'](udm4y, ldn));
  }for (t5vzk = zk5vbt['length']; t5vzk--;) (k5 = (faldu = zk5vbt[t5vzk])['prefix']) && ('xml' === k5 && (faldu['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== k5 && (faldu['uri'] = q$o81[k5 || '']));var pi3xrh;nadf = 0x0 < (pi3xrh = og18q$['indexOf'](':')) ? (k5 = zk5vbt['prefix'] = og18q$['slice'](0x0, pi3xrh), zk5vbt['localName'] = og18q$['slice'](pi3xrh + 0x1)) : (k5 = null, zk5vbt['localName'] = og18q$);var fudln = zk5vbt['uri'] = q$o81[k5 || ''];if (t$52co['startElement'](fudln, nadf, og18q$, zk5vbt), !zk5vbt['closed']) return zk5vbt['currentNSMap'] = q$o81, zk5vbt['localNSMap'] = vk3zb, !0x0;if (t$52co['endElement'](fudln, nadf, og18q$), vk3zb) {
    for (var k5 in vk3zb) t$52co['endPrefixMapping'](k5);
  }
}function j1_mywe(_ws4ey, gq0n1, kvt2b, fjmaud, esyw9) {
  if (/^(?:script|textarea)$/i['test'](kvt2b)) {
    var ndlafu = _ws4ey['indexOf']('</' + kvt2b + '>', gq0n1),
        _ws4ey = _ws4ey['substring'](gq0n1 + 0x1, ndlafu);if (/[&<]/['test'](_ws4ey)) return (/^script$/i['test'](kvt2b) || (_ws4ey = _ws4ey['replace'](/&#?\w+;/g, fjmaud)), esyw9['characters'](_ws4ey, 0x0, _ws4ey['length']), ndlafu
    );
  }return gq0n1 + 0x1;
}function j1_w_e4ym(kv5zb6, o28c, b6z3v, fmuda) {
  var lafnq0 = fmuda[b6z3v];return null == lafnq0 && ((lafnq0 = kv5zb6['lastIndexOf']('</' + b6z3v + '>')) < o28c && (lafnq0 = kv5zb6['lastIndexOf']('</' + b6z3v)), fmuda[b6z3v] = lafnq0), lafnq0 < o28c;
}function j1_k2vbt5(v2btk, wyjm) {
  for (var ym_4ew in v2btk) wyjm[ym_4ew] = v2btk[ym_4ew];
}function j1_ocgt$2(funda, zk63, tg$o2c, e4my_) {
  var ew = funda['charAt'](zk63 + 0x2);if ('-' === ew) return '-' !== funda['charAt'](zk63 + 0x3) ? -0x1 : zk63 < (j4umyd = funda['indexOf']('-->', zk63 + 0x4)) ? (tg$o2c['comment'](funda, zk63 + 0x4, j4umyd - zk63 - 0x4), j4umyd + 0x3) : (e4my_['error']('Unclosed comment'), -0x1);if ('CDATA[' == funda['substr'](zk63 + 0x3, 0x6)) {
    var j4umyd = funda['indexOf'](']]>', zk63 + 0x9);return tg$o2c['startCDATA'](), tg$o2c['characters'](funda, zk63 + 0x9, j4umyd - zk63 - 0x9), tg$o2c['endCDATA'](), j4umyd + 0x3;
  }ew = j1_sw4(funda, zk63), e4my_ = ew['length'];if (0x1 < e4my_ && /!doctype/i['test'](ew[0x0][0x0])) return j4umyd = ew[0x1][0x0], funda = 0x3 < e4my_ && /^public$/i['test'](ew[0x2][0x0]) && ew[0x3][0x0], zk63 = 0x4 < e4my_ && ew[0x4][0x0], e4my_ = ew[e4my_ - 0x1], (tg$o2c['startDTD'](j4umyd, funda && funda['replace'](/^(['"])(.*?)\1$/, '$2'), zk63 && zk63['replace'](/^(['"])(.*?)\1$/, '$2')), tg$o2c['endDTD'](), e4my_['index'] + e4my_[0x0]['length']);return -0x1;
}function j1__eysw(fmjdua, q108go, aqn0) {
  var _we7 = fmjdua['indexOf']('?>', q108go);if (_we7) return q108go = fmjdua['substring'](q108go, _we7)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), q108go ? (q108go[0x0]['length'], aqn0['processingInstruction'](q108go[0x1], q108go[0x2]), _we7 + 0x2) : -0x1;return -0x1;
}function j1_v3zk() {}function j1_c$o25t(n01ql, umdjfa) {
  return n01ql['__proto__'] = umdjfa, n01ql;
}function j1_sw4($52vct, oq$g8) {
  var t2v5ck,
      yj4wme = [],
      nl0afu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (nl0afu['lastIndex'] = oq$g8, nl0afu['exec']($52vct); t2v5ck = nl0afu['exec']($52vct);) if (yj4wme['push'](t2v5ck), t2v5ck[0x1]) return yj4wme;
}var j1__m4wey = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_$gq8 = new RegExp('[\\-\\.0-9' + j1__m4wey['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_z3vb = new RegExp('^' + j1__m4wey['source'] + j1_$gq8['source'] + '*(?::' + j1__m4wey['source'] + j1_$gq8['source'] + '*)?$'),
    j1_wyse9_ = 0x0,
    j1_rhipx = 0x1,
    j1_ihzp3 = 0x2,
    j1_tkv52 = 0x3,
    j1_umjdaf = 0x4,
    j1_mew_4 = 0x5,
    j1_adflnu = 0x6,
    j1_j4ewym = 0x7;j1_vz63bk['prototype'] = { 'parse': function (fdauln, e9_yw, mudja4) {
    var og2 = this['domBuilder'];og2['startDocument'](), j1_k2vbt5(e9_yw, e9_yw = {}), j1_oq18g$(fdauln, e9_yw, mudja4, og2, this['errorHandler']), og2['endDocument']();
  } }, j1_v3zk['prototype'] = { 'setTagName': function (ik63bz) {
    if (!j1_z3vb['test'](ik63bz)) throw new Error('invalid tagName:' + ik63bz);this['tagName'] = ik63bz;
  }, 'add': function (_se9w7, qn0g8, jmuy) {
    if (!j1_z3vb['test'](_se9w7)) throw new Error('invalid attribute:' + _se9w7);this[this['length']++] = { 'qName': _se9w7, 'value': qn0g8, 'offset': jmuy };
  }, 'length': 0x0, 'getLocalName': function (nq180g) {
    return this[nq180g]['localName'];
  }, 'getLocator': function (kzb36i) {
    return this[kzb36i]['locator'];
  }, 'getQName': function (uymdj) {
    return this[uymdj]['qName'];
  }, 'getURI': function (n801g) {
    return this[n801g]['uri'];
  }, 'getValue': function (al0nq) {
    return this[al0nq]['value'];
  } }, j1_c$o25t({}, j1_c$o25t['prototype']) instanceof j1_c$o25t || (j1_c$o25t = function (tc2g$, y9) {
  function n0aufl() {}for (y9 in n0aufl['prototype'] = y9, n0aufl = new n0aufl(), tc2g$) n0aufl[y9] = tc2g$[y9];return n0aufl;
}), exports['XMLReader'] = j1_vz63bk;