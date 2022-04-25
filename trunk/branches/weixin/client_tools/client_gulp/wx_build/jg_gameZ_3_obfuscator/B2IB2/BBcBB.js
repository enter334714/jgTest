var D = wx.$b;
function bh92rs() {}function by1mztc(s892d, dr98s6, phcv1w, t1zmy, _r2h9s) {
  function tzmw(gxk37) {
    if (gxk37 > 0xffff) {
      gxk37 -= 0x10000;var k76lo = 0xd800 + (gxk37 >> 0xa),
          n4$j0 = 0xdc00 + (0x3ff & gxk37);return String['fromCharCode'](k76lo, n4$j0);
    }return String['fromCharCode'](gxk37);
  }function cwtmp(n04j5) {
    var rds968 = n04j5['slice'](0x1, -0x1);return rds968 in phcv1w ? phcv1w[rds968] : '#' === rds968['charAt'](0x0) ? tzmw(parseInt(rds968['substr'](0x1)['replace']('x', '0x'))) : (_r2h9s['error']('entity not found:' + n04j5), n04j5);
  }function yzi0(qlxk7g) {
    if (qlxk7g > f5ae4$) {
      var ztmcw = s892d['substring'](f5ae4$, qlxk7g)['replace'](/&#?\w+;/g, cwtmp);wtpm && s2_98(f5ae4$), t1zmy['characters'](ztmcw, 0x0, qlxk7g - f5ae4$), f5ae4$ = qlxk7g;
    }
  }function s2_98(ztm1w, n4uij) {
    for (; ztm1w >= j4$a5n && (n4uij = kdo8['exec'](s892d));) yni0j = n4uij['index'], j4$a5n = yni0j + n4uij[0x0]['length'], wtpm['lineNumber']++;wtpm['columnNumber'] = ztm1w - yni0j + 0x1;
  }for (var yni0j = 0x0, j4$a5n = 0x0, kdo8 = /.*(?:\r\n?|\n)|.*$/g, wtpm = t1zmy['locator'], sdl6 = [{ 'currentNSMap': dr98s6 }], vwph_ = {}, f5ae4$ = 0x0;;) {
    try {
      var zuiym0 = s892d['indexOf']('<', f5ae4$);if (0x0 > zuiym0) {
        if (!s892d['substr'](f5ae4$)['match'](/^\s*$/)) {
          var an = t1zmy['doc'],
              jnyu0 = an['createTextNode'](s892d['substr'](f5ae4$));an['appendChild'](jnyu0), t1zmy['currentElement'] = jnyu0;
        }return;
      }switch (zuiym0 > f5ae4$ && yzi0(zuiym0), s892d['charAt'](zuiym0 + 0x1)) {case '/':
          var s9r2d = s892d['indexOf']('>', zuiym0 + 0x3),
              zuyni = s892d['substring'](zuiym0 + 0x2, s9r2d),
              $n5j04 = sdl6['pop']();0x0 > s9r2d ? (zuyni = s892d['substring'](zuiym0 + 0x2)['replace'](/[\s<].*/, ''), _r2h9s['error']('end tag name: ' + zuyni + ' is not complete:' + $n5j04['tagName']), s9r2d = zuiym0 + 0x1 + zuyni['length']) : zuyni['match'](/\s</) && (zuyni = zuyni['replace'](/[\s<].*/, ''), _r2h9s['error']('end tag name: ' + zuyni + ' maybe not complete'), s9r2d = zuiym0 + 0x1 + zuyni['length']);var c1hw = $n5j04['localNSMap'],
              kq7l = $n5j04['tagName'] == zuyni,
              h2_9rv = kq7l || $n5j04['tagName'] && $n5j04['tagName']['toLowerCase']() == zuyni['toLowerCase']();if (h2_9rv) {
            if (t1zmy['endElement']($n5j04['uri'], $n5j04['localName'], zuyni), c1hw) {
              for (var wh_p1v in c1hw) t1zmy['endPrefixMapping'](wh_p1v);
            }kq7l || _r2h9s['fatalError']('end tag name: ' + zuyni + ' is not match the current start tagName:' + $n5j04['tagName']);
          } else sdl6['push']($n5j04);s9r2d++;break;case '?':
          wtpm && s2_98(zuiym0), s9r2d = btzmuiy(s892d, zuiym0, t1zmy);break;case '!':
          wtpm && s2_98(zuiym0), s9r2d = bdkl68o(s892d, zuiym0, t1zmy, _r2h9s);break;default:
          wtpm && s2_98(zuiym0);var d96rs = new bchw1vp(),
              iy0u = sdl6[sdl6['length'] - 0x1]['currentNSMap'],
              s9r2d = ba$45fe(s892d, zuiym0, d96rs, iy0u, cwtmp, _r2h9s),
              dk86l = d96rs['length'];if (!d96rs['closed'] && bs_9r8(s892d, s9r2d, d96rs['tagName'], vwph_) && (d96rs['closed'] = !0x0, phcv1w['nbsp'] || _r2h9s['warning']('unclosed xml attribute')), wtpm && dk86l) {
            for (var r9hv2_ = bvch1w(wtpm, {}), jni504 = 0x0; dk86l > jni504; jni504++) {
              var m0yz = d96rs[jni504];s2_98(m0yz['offset']), m0yz['locator'] = bvch1w(wtpm, {});
            }t1zmy['locator'] = r9hv2_, biztmu(d96rs, t1zmy, iy0u) && sdl6['push'](d96rs), t1zmy['locator'] = wtpm;
          } else biztmu(d96rs, t1zmy, iy0u) && sdl6['push'](d96rs);'http://www.w3.org/1999/xhtml' !== d96rs['uri'] || d96rs['closed'] ? s9r2d++ : s9r2d = bdr8s2(s892d, s9r2d, d96rs['tagName'], cwtmp, t1zmy);}
    } catch (rs8d2) {
      _r2h9s['error']('element parse error: ' + rs8d2), s9r2d = -0x1;
    }s9r2d > f5ae4$ ? f5ae4$ = s9r2d : yzi0(Math['max'](zuiym0, f5ae4$) + 0x1);
  }
}function bvch1w(x7qk3, vr2h9_) {
  return vr2h9_['lineNumber'] = x7qk3['lineNumber'], vr2h9_['columnNumber'] = x7qk3['columnNumber'], vr2h9_;
}function ba$45fe(j045n, n54$a, inju40, ld6o8s, j0nyui, h9r_s2) {
  for (var ds289r, $5nj4a, v2_rh = ++n54$a, pwhc = buztymc;;) {
    var yzn0iu = j045n['charAt'](v2_rh);switch (yzn0iu) {case '=':
        if (pwhc === bpmc1tw) ds289r = j045n['slice'](n54$a, v2_rh), pwhc = bl7kqx;else {
          if (pwhc !== bwvhp1c) throw new Error('attribute equal must after attrName');pwhc = bl7kqx;
        }break;case '\x27':case '\x22':
        if (pwhc === bl7kqx || pwhc === bpmc1tw) {
          if (pwhc === bpmc1tw && (h9r_s2['warning']('attribute value must after "="'), ds289r = j045n['slice'](n54$a, v2_rh)), n54$a = v2_rh + 0x1, v2_rh = j045n['indexOf'](yzn0iu, n54$a), !(v2_rh > 0x0)) throw new Error('attribute value no end \'' + yzn0iu + '\' match');$5nj4a = j045n['slice'](n54$a, v2_rh)['replace'](/&#?\w+;/g, j0nyui), inju40['add'](ds289r, $5nj4a, n54$a - 0x1), pwhc = be4f5$a;
        } else {
          if (pwhc != bpw1vch) throw new Error('attribute value must after "="');$5nj4a = j045n['slice'](n54$a, v2_rh)['replace'](/&#?\w+;/g, j0nyui), inju40['add'](ds289r, $5nj4a, n54$a), h9r_s2['warning']('attribute "' + ds289r + '" missed start quot(' + yzn0iu + ')!!'), n54$a = v2_rh + 0x1, pwhc = be4f5$a;
        }break;case '/':
        switch (pwhc) {case buztymc:
            inju40['setTagName'](j045n['slice'](n54$a, v2_rh));case be4f5$a:case bm1twzc:case bwp2h_:
            pwhc = bwp2h_, inju40['closed'] = !0x0;case bpw1vch:case bpmc1tw:case bwvhp1c:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return h9r_s2['error']('unexpected end of input'), pwhc == buztymc && inju40['setTagName'](j045n['slice'](n54$a, v2_rh)), v2_rh;case '>':
        switch (pwhc) {case buztymc:
            inju40['setTagName'](j045n['slice'](n54$a, v2_rh));case be4f5$a:case bm1twzc:case bwp2h_:
            break;case bpw1vch:case bpmc1tw:
            $5nj4a = j045n['slice'](n54$a, v2_rh), '/' === $5nj4a['slice'](-0x1) && (inju40['closed'] = !0x0, $5nj4a = $5nj4a['slice'](0x0, -0x1));case bwvhp1c:
            pwhc === bwvhp1c && ($5nj4a = ds289r), pwhc == bpw1vch ? (h9r_s2['warning']('attribute "' + $5nj4a + '" missed quot(")!!'), inju40['add'](ds289r, $5nj4a['replace'](/&#?\w+;/g, j0nyui), n54$a)) : ('http://www.w3.org/1999/xhtml' === ld6o8s[''] && $5nj4a['match'](/^(?:disabled|checked|selected)$/i) || h9r_s2['warning']('attribute "' + $5nj4a + '" missed value!! "' + $5nj4a + '" instead!!'), inju40['add']($5nj4a, $5nj4a, n54$a));break;case bl7kqx:
            throw new Error('attribute value missed!!');}return v2_rh;case '\u0080':
        yzn0iu = '\x20';default:
        if ('\x20' >= yzn0iu) switch (pwhc) {case buztymc:
            inju40['setTagName'](j045n['slice'](n54$a, v2_rh)), pwhc = bm1twzc;break;case bpmc1tw:
            ds289r = j045n['slice'](n54$a, v2_rh), pwhc = bwvhp1c;break;case bpw1vch:
            var $5nj4a = j045n['slice'](n54$a, v2_rh)['replace'](/&#?\w+;/g, j0nyui);h9r_s2['warning']('attribute "' + $5nj4a + '" missed quot(")!!'), inju40['add'](ds289r, $5nj4a, n54$a);case be4f5$a:
            pwhc = bm1twzc;} else switch (pwhc) {case bwvhp1c:
            {
              inju40['tagName'];
            }'http://www.w3.org/1999/xhtml' === ld6o8s[''] && ds289r['match'](/^(?:disabled|checked|selected)$/i) || h9r_s2['warning']('attribute "' + ds289r + '" missed value!! "' + ds289r + '" instead2!!'), inju40['add'](ds289r, ds289r, n54$a), n54$a = v2_rh, pwhc = bpmc1tw;break;case be4f5$a:
            h9r_s2['warning']('attribute space is required"' + ds289r + '\x22!!');case bm1twzc:
            pwhc = bpmc1tw, n54$a = v2_rh;break;case bl7kqx:
            pwhc = bpw1vch, n54$a = v2_rh;break;case bwp2h_:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}v2_rh++;
  }
}function biztmu(r2_vhp, k6xdlo, cphwv1) {
  for (var ctyuzm = r2_vhp['tagName'], q37gx = null, sr92_ = r2_vhp['length']; sr92_--;) {
    var okdl86 = r2_vhp[sr92_],
        qxokl7 = okdl86['qName'],
        wv1_ = okdl86['value'],
        xkl7g = qxokl7['indexOf'](':');if (xkl7g > 0x0) var nijuy = okdl86['prefix'] = qxokl7['slice'](0x0, xkl7g),
        zym0ui = qxokl7['slice'](xkl7g + 0x1),
        lk6ox = 'xmlns' === nijuy && zym0ui;else zym0ui = qxokl7, nijuy = null, lk6ox = 'xmlns' === qxokl7 && '';okdl86['localName'] = zym0ui, lk6ox !== !0x1 && (null == q37gx && (q37gx = {}, bzc1(cphwv1, cphwv1 = {})), cphwv1[lk6ox] = q37gx[lk6ox] = wv1_, okdl86['uri'] = 'http://www.w3.org/2000/xmlns/', k6xdlo['startPrefixMapping'](lk6ox, wv1_));
  }for (var sr92_ = r2_vhp['length']; sr92_--;) {
    okdl86 = r2_vhp[sr92_];var nijuy = okdl86['prefix'];nijuy && ('xml' === nijuy && (okdl86['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nijuy && (okdl86['uri'] = cphwv1[nijuy || '']));
  }var xkl7g = ctyuzm['indexOf'](':');xkl7g > 0x0 ? (nijuy = r2_vhp['prefix'] = ctyuzm['slice'](0x0, xkl7g), zym0ui = r2_vhp['localName'] = ctyuzm['slice'](xkl7g + 0x1)) : (nijuy = null, zym0ui = r2_vhp['localName'] = ctyuzm);var cwtm1p = r2_vhp['uri'] = cphwv1[nijuy || ''];if (k6xdlo['startElement'](cwtm1p, zym0ui, ctyuzm, r2_vhp), !r2_vhp['closed']) return r2_vhp['currentNSMap'] = cphwv1, r2_vhp['localNSMap'] = q37gx, !0x0;if (k6xdlo['endElement'](cwtm1p, zym0ui, ctyuzm), q37gx) {
    for (nijuy in q37gx) k6xdlo['endPrefixMapping'](nijuy);
  }
}function bdr8s2(_h2rv9, vw2, a$4e5f, so86ld, o86dk) {
  if (/^(?:script|textarea)$/i['test'](a$4e5f)) {
    var i0u4n = _h2rv9['indexOf']('</' + a$4e5f + '>', vw2),
        yiut = _h2rv9['substring'](vw2 + 0x1, i0u4n);if (/[&<]/['test'](yiut)) return (/^script$/i['test'](a$4e5f) ? (o86dk['characters'](yiut, 0x0, yiut['length']), i0u4n) : (yiut = yiut['replace'](/&#?\w+;/g, so86ld), o86dk['characters'](yiut, 0x0, yiut['length']), i0u4n)
    );
  }return vw2 + 0x1;
}function bs_9r8(w2p_, n5$j40, zty1, tmuyzc) {
  var g3x7kq = tmuyzc[zty1];return null == g3x7kq && (g3x7kq = w2p_['lastIndexOf']('</' + zty1 + '>'), n5$j40 > g3x7kq && (g3x7kq = w2p_['lastIndexOf']('</' + zty1)), tmuyzc[zty1] = g3x7kq), n5$j40 > g3x7kq;
}function bzc1($na4, sol6) {
  for (var ajf45$ in $na4) sol6[ajf45$] = $na4[ajf45$];
}function bdkl68o(cpwmt1, nj0iu4, n50j$4, ctp1) {
  var tym1c = cpwmt1['charAt'](nj0iu4 + 0x2);switch (tym1c) {case '-':
      if ('-' === cpwmt1['charAt'](nj0iu4 + 0x3)) {
        var ucmyzt = cpwmt1['indexOf']('-->', nj0iu4 + 0x4);return ucmyzt > nj0iu4 ? (n50j$4['comment'](cpwmt1, nj0iu4 + 0x4, ucmyzt - nj0iu4 - 0x4), ucmyzt + 0x3) : (ctp1['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cpwmt1['substr'](nj0iu4 + 0x3, 0x6)) {
        var ucmyzt = cpwmt1['indexOf'](']]>', nj0iu4 + 0x9);return n50j$4['startCDATA'](), n50j$4['characters'](cpwmt1, nj0iu4 + 0x9, ucmyzt - nj0iu4 - 0x9), n50j$4['endCDATA'](), ucmyzt + 0x3;
      }var ds86ol = bw_v2(cpwmt1, nj0iu4),
          $5ae4f = ds86ol['length'];if ($5ae4f > 0x1 && /!doctype/i['test'](ds86ol[0x0][0x0])) {
        var vwh_p2 = ds86ol[0x1][0x0],
            hrv29_ = $5ae4f > 0x3 && /^public$/i['test'](ds86ol[0x2][0x0]) && ds86ol[0x3][0x0],
            kxl7oq = $5ae4f > 0x4 && ds86ol[0x4][0x0],
            qkgxl = ds86ol[$5ae4f - 0x1];return n50j$4['startDTD'](vwh_p2, hrv29_ && hrv29_['replace'](/^(['"])(.*?)\1$/, '$2'), kxl7oq && kxl7oq['replace'](/^(['"])(.*?)\1$/, '$2')), n50j$4['endDTD'](), qkgxl['index'] + qkgxl[0x0]['length'];
      }}return -0x1;
}function btzmuiy(xokql, v9r2, n054j$) {
  var mcz1tw = xokql['indexOf']('?>', v9r2);if (mcz1tw) {
    var kl6o7x = xokql['substring'](v9r2, mcz1tw)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (kl6o7x) {
      {
        kl6o7x[0x0]['length'];
      }return n054j$['processingInstruction'](kl6o7x[0x1], kl6o7x[0x2]), mcz1tw + 0x2;
    }return -0x1;
  }return -0x1;
}function bchw1vp() {}function bj5a$(sod68l, ldso8) {
  return sod68l['__proto__'] = ldso8, sod68l;
}function bw_v2(u4in, afe$) {
  var sd89o,
      oqk7 = [],
      h1_p = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (h1_p['lastIndex'] = afe$, h1_p['exec'](u4in); sd89o = h1_p['exec'](u4in);) if (oqk7['push'](sd89o), sd89o[0x1]) return oqk7;
}var bg7qx3k = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    bium0y = new RegExp('[\\-\\.0-9' + bg7qx3k['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    btyz1m = new RegExp('^' + bg7qx3k['source'] + bium0y['source'] + '*(?::' + bg7qx3k['source'] + bium0y['source'] + '*)?$'),
    buztymc = 0x0,
    bpmc1tw = 0x1,
    bwvhp1c = 0x2,
    bl7kqx = 0x3,
    bpw1vch = 0x4,
    be4f5$a = 0x5,
    bm1twzc = 0x6,
    bwp2h_ = 0x7;bh92rs['prototype'] = { 'parse': function (u40inj, cyzt1, wtc1pv) {
    var ziuyn0 = this['domBuilder'];ziuyn0['startDocument'](), bzc1(cyzt1, cyzt1 = {}), by1mztc(u40inj, cyzt1, wtc1pv, ziuyn0, this['errorHandler']), ziuyn0['endDocument']();
  } }, bchw1vp['prototype'] = { 'setTagName': function (l76k) {
    if (!btyz1m['test'](l76k)) throw new Error('invalid tagName:' + l76k);this['tagName'] = l76k;
  }, 'add': function (myuti, i0mu, $f4ae) {
    if (!btyz1m['test'](myuti)) throw new Error('invalid attribute:' + myuti);this[this['length']++] = { 'qName': myuti, 'value': i0mu, 'offset': $f4ae };
  }, 'length': 0x0, 'getLocalName': function (r829) {
    return this[r829]['localName'];
  }, 'getLocator': function (x6odlk) {
    return this[x6odlk]['locator'];
  }, 'getQName': function (m1zwt) {
    return this[m1zwt]['qName'];
  }, 'getURI': function (dso968) {
    return this[dso968]['uri'];
  }, 'getValue': function (hwv1c) {
    return this[hwv1c]['value'];
  } }, bj5a$({}, bj5a$['prototype']) instanceof bj5a$ || (bj5a$ = function (o7xqk, d8s6o) {
  function d2r9() {}d2r9['prototype'] = d8s6o, d2r9 = new d2r9();for (d8s6o in o7xqk) d2r9[d8s6o] = o7xqk[d8s6o];return d2r9;
}), exports['XMLReader'] = bh92rs;