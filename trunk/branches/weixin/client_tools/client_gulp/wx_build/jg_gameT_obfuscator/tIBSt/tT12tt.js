var M = wx.$T;
function tkjsau() {}function tx_whm(n6815, jarbsk, bg3, d7pzo, i94t) {
  function t2lci4(gbrka) {
    if (gbrka > 0xffff) {
      gbrka -= 0x10000;var skju = 0xd800 + (gbrka >> 0xa),
          pd$9 = 0xdc00 + (0x3ff & gbrka);return String['fromCharCode'](skju, pd$9);
    }return String['fromCharCode'](gbrka);
  }function yx0hm_(poefz7) {
    var zfo7pd = poefz7['slice'](0x1, -0x1);return zfo7pd in bg3 ? bg3[zfo7pd] : '#' === zfo7pd['charAt'](0x0) ? t2lci4(parseInt(zfo7pd['substr'](0x1)['replace']('x', '0x'))) : (i94t['error']('entity not found:' + poefz7), poefz7);
  }function ubksja(c$ti9) {
    if (c$ti9 > gjn38) {
      var i2cvt = n6815['substring'](gjn38, c$ti9)['replace'](/&#?\w+;/g, yx0hm_);z$dfpv && angj(gjn38), d7pzo['characters'](i2cvt, 0x0, c$ti9 - gjn38), gjn38 = c$ti9;
    }
  }function angj(njagb, c9vd) {
    for (; njagb >= o0qyx && (c9vd = li4['exec'](n6815));) _0mhy = c9vd['index'], o0qyx = _0mhy + c9vd[0x0]['length'], z$dfpv['lineNumber']++;z$dfpv['columnNumber'] = njagb - _0mhy + 0x1;
  }for (var _0mhy = 0x0, o0qyx = 0x0, li4 = /.*(?:\r\n?|\n)|.*$/g, z$dfpv = d7pzo['locator'], kb = [{ 'currentNSMap': jarbsk }], vd$f9 = {}, gjn38 = 0x0;;) {
    try {
      var wh65m1 = n6815['indexOf']('<', gjn38);if (0x0 > wh65m1) {
        if (!n6815['substr'](gjn38)['match'](/^\s*$/)) {
          var gn863 = d7pzo['doc'],
              fez7oq = gn863['createTextNode'](n6815['substr'](gjn38));gn863['appendChild'](fez7oq), d7pzo['currentElement'] = fez7oq;
        }return;
      }switch (wh65m1 > gjn38 && ubksja(wh65m1), n6815['charAt'](wh65m1 + 0x1)) {case '/':
          var kbsrja = n6815['indexOf']('>', wh65m1 + 0x3),
              f$vd9 = n6815['substring'](wh65m1 + 0x2, kbsrja),
              yeq0_ = kb['pop']();0x0 > kbsrja ? (f$vd9 = n6815['substring'](wh65m1 + 0x2)['replace'](/[\s<].*/, ''), i94t['error']('end tag name: ' + f$vd9 + ' is not complete:' + yeq0_['tagName']), kbsrja = wh65m1 + 0x1 + f$vd9['length']) : f$vd9['match'](/\s</) && (f$vd9 = f$vd9['replace'](/[\s<].*/, ''), i94t['error']('end tag name: ' + f$vd9 + ' maybe not complete'), kbsrja = wh65m1 + 0x1 + f$vd9['length']);var cl = yeq0_['localNSMap'],
              _h6wm = yeq0_['tagName'] == f$vd9,
              rkab = _h6wm || yeq0_['tagName'] && yeq0_['tagName']['toLowerCase']() == f$vd9['toLowerCase']();if (rkab) {
            if (d7pzo['endElement'](yeq0_['uri'], yeq0_['localName'], f$vd9), cl) {
              for (var hy_wm in cl) d7pzo['endPrefixMapping'](hy_wm);
            }_h6wm || i94t['fatalError']('end tag name: ' + f$vd9 + ' is not match the current start tagName:' + yeq0_['tagName']);
          } else kb['push'](yeq0_);kbsrja++;break;case '?':
          z$dfpv && angj(wh65m1), kbsrja = tz$vdpf(n6815, wh65m1, d7pzo);break;case '!':
          z$dfpv && angj(wh65m1), kbsrja = tm_0xy(n6815, wh65m1, d7pzo, i94t);break;default:
          z$dfpv && angj(wh65m1);var _q0yex = new tn168g3(),
              ubjsak = kb[kb['length'] - 0x1]['currentNSMap'],
              kbsrja = tp7fz(n6815, wh65m1, _q0yex, ubjsak, yx0hm_, i94t),
              j3grn8 = _q0yex['length'];if (!_q0yex['closed'] && tn318g6(n6815, kbsrja, _q0yex['tagName'], vd$f9) && (_q0yex['closed'] = !0x0, bg3['nbsp'] || i94t['warning']('unclosed xml attribute')), z$dfpv && j3grn8) {
            for (var sbku = tbsuka(z$dfpv, {}), jsbak = 0x0; j3grn8 > jsbak; jsbak++) {
              var g1r = _q0yex[jsbak];angj(g1r['offset']), g1r['locator'] = tbsuka(z$dfpv, {});
            }d7pzo['locator'] = sbku, takbsrj(_q0yex, d7pzo, ubjsak) && kb['push'](_q0yex), d7pzo['locator'] = z$dfpv;
          } else takbsrj(_q0yex, d7pzo, ubjsak) && kb['push'](_q0yex);'http://www.w3.org/1999/xhtml' !== _q0yex['uri'] || _q0yex['closed'] ? kbsrja++ : kbsrja = toeq07(n6815, kbsrja, _q0yex['tagName'], yx0hm_, d7pzo);}
    } catch (cdvi9) {
      i94t['error']('element parse error: ' + cdvi9), kbsrja = -0x1;
    }kbsrja > gjn38 ? gjn38 = kbsrja : ubksja(Math['max'](wh65m1, gjn38) + 0x1);
  }
}function tbsuka(gn3jr8, fd$p7) {
  return fd$p7['lineNumber'] = gn3jr8['lineNumber'], fd$p7['columnNumber'] = gn3jr8['columnNumber'], fd$p7;
}function tp7fz(c29ivt, zdf7p, o70qe, oz0e, lcit42, eq7zo0) {
  for (var l4ic2, iv9$dc, xh0 = ++zdf7p, n618g3 = tq7foe;;) {
    var $9tv = c29ivt['charAt'](xh0);switch ($9tv) {case '=':
        if (n618g3 === toqe07) l4ic2 = c29ivt['slice'](zdf7p, xh0), n618g3 = trgjkba;else {
          if (n618g3 !== tq_exy0) throw new Error('attribute equal must after attrName');n618g3 = trgjkba;
        }break;case '\x27':case '\x22':
        if (n618g3 === trgjkba || n618g3 === toqe07) {
          if (n618g3 === toqe07 && (eq7zo0['warning']('attribute value must after "="'), l4ic2 = c29ivt['slice'](zdf7p, xh0)), zdf7p = xh0 + 0x1, xh0 = c29ivt['indexOf']($9tv, zdf7p), !(xh0 > 0x0)) throw new Error('attribute value no end \'' + $9tv + '\' match');iv9$dc = c29ivt['slice'](zdf7p, xh0)['replace'](/&#?\w+;/g, lcit42), o70qe['add'](l4ic2, iv9$dc, zdf7p - 0x1), n618g3 = tc29ti4;
        } else {
          if (n618g3 != txq_e0y) throw new Error('attribute value must after "="');iv9$dc = c29ivt['slice'](zdf7p, xh0)['replace'](/&#?\w+;/g, lcit42), o70qe['add'](l4ic2, iv9$dc, zdf7p), eq7zo0['warning']('attribute "' + l4ic2 + '" missed start quot(' + $9tv + ')!!'), zdf7p = xh0 + 0x1, n618g3 = tc29ti4;
        }break;case '/':
        switch (n618g3) {case tq7foe:
            o70qe['setTagName'](c29ivt['slice'](zdf7p, xh0));case tc29ti4:case ti$cv:case tqyex_0:
            n618g3 = tqyex_0, o70qe['closed'] = !0x0;case txq_e0y:case toqe07:case tq_exy0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return eq7zo0['error']('unexpected end of input'), n618g3 == tq7foe && o70qe['setTagName'](c29ivt['slice'](zdf7p, xh0)), xh0;case '>':
        switch (n618g3) {case tq7foe:
            o70qe['setTagName'](c29ivt['slice'](zdf7p, xh0));case tc29ti4:case ti$cv:case tqyex_0:
            break;case txq_e0y:case toqe07:
            iv9$dc = c29ivt['slice'](zdf7p, xh0), '/' === iv9$dc['slice'](-0x1) && (o70qe['closed'] = !0x0, iv9$dc = iv9$dc['slice'](0x0, -0x1));case tq_exy0:
            n618g3 === tq_exy0 && (iv9$dc = l4ic2), n618g3 == txq_e0y ? (eq7zo0['warning']('attribute "' + iv9$dc + '" missed quot(")!!'), o70qe['add'](l4ic2, iv9$dc['replace'](/&#?\w+;/g, lcit42), zdf7p)) : ('http://www.w3.org/1999/xhtml' === oz0e[''] && iv9$dc['match'](/^(?:disabled|checked|selected)$/i) || eq7zo0['warning']('attribute "' + iv9$dc + '" missed value!! "' + iv9$dc + '" instead!!'), o70qe['add'](iv9$dc, iv9$dc, zdf7p));break;case trgjkba:
            throw new Error('attribute value missed!!');}return xh0;case '\u0080':
        $9tv = '\x20';default:
        if ('\x20' >= $9tv) switch (n618g3) {case tq7foe:
            o70qe['setTagName'](c29ivt['slice'](zdf7p, xh0)), n618g3 = ti$cv;break;case toqe07:
            l4ic2 = c29ivt['slice'](zdf7p, xh0), n618g3 = tq_exy0;break;case txq_e0y:
            var iv9$dc = c29ivt['slice'](zdf7p, xh0)['replace'](/&#?\w+;/g, lcit42);eq7zo0['warning']('attribute "' + iv9$dc + '" missed quot(")!!'), o70qe['add'](l4ic2, iv9$dc, zdf7p);case tc29ti4:
            n618g3 = ti$cv;} else switch (n618g3) {case tq_exy0:
            {
              o70qe['tagName'];
            }'http://www.w3.org/1999/xhtml' === oz0e[''] && l4ic2['match'](/^(?:disabled|checked|selected)$/i) || eq7zo0['warning']('attribute "' + l4ic2 + '" missed value!! "' + l4ic2 + '" instead2!!'), o70qe['add'](l4ic2, l4ic2, zdf7p), zdf7p = xh0, n618g3 = toqe07;break;case tc29ti4:
            eq7zo0['warning']('attribute space is required"' + l4ic2 + '\x22!!');case ti$cv:
            n618g3 = toqe07, zdf7p = xh0;break;case trgjkba:
            n618g3 = txq_e0y, zdf7p = xh0;break;case tqyex_0:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}xh0++;
  }
}function takbsrj(x_0qe, rb3jng, o7z0e) {
  for (var _hwm56 = x_0qe['tagName'], fzvp = null, pfd$ = x_0qe['length']; pfd$--;) {
    var q0exy_ = x_0qe[pfd$],
        jrabs = q0exy_['qName'],
        w56318 = q0exy_['value'],
        hm1 = jrabs['indexOf'](':');if (hm1 > 0x0) var d9p$i = q0exy_['prefix'] = jrabs['slice'](0x0, hm1),
        saubjk = jrabs['slice'](hm1 + 0x1),
        sju = 'xmlns' === d9p$i && saubjk;else saubjk = jrabs, d9p$i = null, sju = 'xmlns' === jrabs && '';q0exy_['localName'] = saubjk, sju !== !0x1 && (null == fzvp && (fzvp = {}, tw861(o7z0e, o7z0e = {})), o7z0e[sju] = fzvp[sju] = w56318, q0exy_['uri'] = 'http://www.w3.org/2000/xmlns/', rb3jng['startPrefixMapping'](sju, w56318));
  }for (var pfd$ = x_0qe['length']; pfd$--;) {
    q0exy_ = x_0qe[pfd$];var d9p$i = q0exy_['prefix'];d9p$i && ('xml' === d9p$i && (q0exy_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== d9p$i && (q0exy_['uri'] = o7z0e[d9p$i || '']));
  }var hm1 = _hwm56['indexOf'](':');hm1 > 0x0 ? (d9p$i = x_0qe['prefix'] = _hwm56['slice'](0x0, hm1), saubjk = x_0qe['localName'] = _hwm56['slice'](hm1 + 0x1)) : (d9p$i = null, saubjk = x_0qe['localName'] = _hwm56);var _y0ex = x_0qe['uri'] = o7z0e[d9p$i || ''];if (rb3jng['startElement'](_y0ex, saubjk, _hwm56, x_0qe), !x_0qe['closed']) return x_0qe['currentNSMap'] = o7z0e, x_0qe['localNSMap'] = fzvp, !0x0;if (rb3jng['endElement'](_y0ex, saubjk, _hwm56), fzvp) {
    for (d9p$i in fzvp) rb3jng['endPrefixMapping'](d9p$i);
  }
}function toeq07(rkbajg, hw56_, vc2it9, fpz$d, z7poe) {
  if (/^(?:script|textarea)$/i['test'](vc2it9)) {
    var jrnb3 = rkbajg['indexOf']('</' + vc2it9 + '>', hw56_),
        v$id9c = rkbajg['substring'](hw56_ + 0x1, jrnb3);if (/[&<]/['test'](v$id9c)) return (/^script$/i['test'](vc2it9) ? (z7poe['characters'](v$id9c, 0x0, v$id9c['length']), jrnb3) : (v$id9c = v$id9c['replace'](/&#?\w+;/g, fpz$d), z7poe['characters'](v$id9c, 0x0, v$id9c['length']), jrnb3)
    );
  }return hw56_ + 0x1;
}function tn318g6($vic9, gr38n1, vi9$cd, jgakr) {
  var $zf7p = jgakr[vi9$cd];return null == $zf7p && ($zf7p = $vic9['lastIndexOf']('</' + vi9$cd + '>'), gr38n1 > $zf7p && ($zf7p = $vic9['lastIndexOf']('</' + vi9$cd)), jgakr[vi9$cd] = $zf7p), gr38n1 > $zf7p;
}function tw861(jrgna, m5w_) {
  for (var mwy5 in jrgna) m5w_[mwy5] = jrgna[mwy5];
}function tm_0xy(qexy_0, vzpf$, x0oey, v9itc$) {
  var yx0o = qexy_0['charAt'](vzpf$ + 0x2);switch (yx0o) {case '-':
      if ('-' === qexy_0['charAt'](vzpf$ + 0x3)) {
        var tc = qexy_0['indexOf']('-->', vzpf$ + 0x4);return tc > vzpf$ ? (x0oey['comment'](qexy_0, vzpf$ + 0x4, tc - vzpf$ - 0x4), tc + 0x3) : (v9itc$['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qexy_0['substr'](vzpf$ + 0x3, 0x6)) {
        var tc = qexy_0['indexOf'](']]>', vzpf$ + 0x9);return x0oey['startCDATA'](), x0oey['characters'](qexy_0, vzpf$ + 0x9, tc - vzpf$ - 0x9), x0oey['endCDATA'](), tc + 0x3;
      }var y_wmx = tbuks(qexy_0, vzpf$),
          it24lc = y_wmx['length'];if (it24lc > 0x1 && /!doctype/i['test'](y_wmx[0x0][0x0])) {
        var g3brj = y_wmx[0x1][0x0],
            li4ct2 = it24lc > 0x3 && /^public$/i['test'](y_wmx[0x2][0x0]) && y_wmx[0x3][0x0],
            kjas = it24lc > 0x4 && y_wmx[0x4][0x0],
            o7d = y_wmx[it24lc - 0x1];return x0oey['startDTD'](g3brj, li4ct2 && li4ct2['replace'](/^(['"])(.*?)\1$/, '$2'), kjas && kjas['replace'](/^(['"])(.*?)\1$/, '$2')), x0oey['endDTD'](), o7d['index'] + o7d[0x0]['length'];
      }}return -0x1;
}function tz$vdpf(bgrkj, $vcti, ajrkb) {
  var n8g3 = bgrkj['indexOf']('?>', $vcti);if (n8g3) {
    var m5h6_ = bgrkj['substring']($vcti, n8g3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (m5h6_) {
      {
        m5h6_[0x0]['length'];
      }return ajrkb['processingInstruction'](m5h6_[0x1], m5h6_[0x2]), n8g3 + 0x2;
    }return -0x1;
  }return -0x1;
}function tn168g3() {}function t_h6m(fzdop7, dvzf) {
  return fzdop7['__proto__'] = dvzf, fzdop7;
}function tbuks(cti$9, f7opz) {
  var q0oye,
      asbjku = [],
      w8351 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (w8351['lastIndex'] = f7opz, w8351['exec'](cti$9); q0oye = w8351['exec'](cti$9);) if (asbjku['push'](q0oye), q0oye[0x1]) return asbjku;
}var tc$9vit = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tfep = new RegExp('[\\-\\.0-9' + tc$9vit['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tqez0 = new RegExp('^' + tc$9vit['source'] + tfep['source'] + '*(?::' + tc$9vit['source'] + tfep['source'] + '*)?$'),
    tq7foe = 0x0,
    toqe07 = 0x1,
    tq_exy0 = 0x2,
    trgjkba = 0x3,
    txq_e0y = 0x4,
    tc29ti4 = 0x5,
    ti$cv = 0x6,
    tqyex_0 = 0x7;tkjsau['prototype'] = { 'parse': function (bgjrk, h0_ymx, pfvd$9) {
    var nbrjg3 = this['domBuilder'];nbrjg3['startDocument'](), tw861(h0_ymx, h0_ymx = {}), tx_whm(bgjrk, h0_ymx, pfvd$9, nbrjg3, this['errorHandler']), nbrjg3['endDocument']();
  } }, tn168g3['prototype'] = { 'setTagName': function (rgjbka) {
    if (!tqez0['test'](rgjbka)) throw new Error('invalid tagName:' + rgjbka);this['tagName'] = rgjbka;
  }, 'add': function ($7fpd, id9p$v, fpoe) {
    if (!tqez0['test']($7fpd)) throw new Error('invalid attribute:' + $7fpd);this[this['length']++] = { 'qName': $7fpd, 'value': id9p$v, 'offset': fpoe };
  }, 'length': 0x0, 'getLocalName': function (agkjbr) {
    return this[agkjbr]['localName'];
  }, 'getLocator': function (zpf7od) {
    return this[zpf7od]['locator'];
  }, 'getQName': function (jgba) {
    return this[jgba]['qName'];
  }, 'getURI': function (pf$7z) {
    return this[pf$7z]['uri'];
  }, 'getValue': function (z7oef) {
    return this[z7oef]['value'];
  } }, t_h6m({}, t_h6m['prototype']) instanceof t_h6m || (t_h6m = function (wy_mxh, hx0y) {
  function _hxym() {}_hxym['prototype'] = hx0y, _hxym = new _hxym();for (hx0y in wy_mxh) _hxym[hx0y] = wy_mxh[hx0y];return _hxym;
}), exports['XMLReader'] = tkjsau;