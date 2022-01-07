var s = wx.$W;
function wnqm4o() {}function war$yxd(yvx$9a, jnwzef, j31zfe, s4omq, nejzfw) {
  function e2fz(kyrdb) {
    if (kyrdb > 0xffff) {
      kyrdb -= 0x10000;var bydrxk = 0xd800 + (kyrdb >> 0xa),
          xdkg = 0xdc00 + (0x3ff & kyrdb);return String['fromCharCode'](bydrxk, xdkg);
    }return String['fromCharCode'](kyrdb);
  }function kadrxy(osnjw) {
    var gc05 = osnjw['slice'](0x1, -0x1);return gc05 in j31zfe ? j31zfe[gc05] : '#' === gc05['charAt'](0x0) ? e2fz(parseInt(gc05['substr'](0x1)['replace']('x', '0x'))) : (nejzfw['error']('entity not found:' + osnjw), osnjw);
  }function yra$d(ut5h80) {
    if (ut5h80 > q6m4o) {
      var $ayd = yvx$9a['substring'](q6m4o, ut5h80)['replace'](/&#?\w+;/g, kadrxy);xkdbrg && adyx(q6m4o), s4omq['characters']($ayd, 0x0, ut5h80 - q6m4o), q6m4o = ut5h80;
    }
  }function adyx(nmwsoq, hpu6t0) {
    for (; nmwsoq >= rxdkby && (hpu6t0 = i173['exec'](yvx$9a));) $_vla = hpu6t0['index'], rxdkby = $_vla + hpu6t0[0x0]['length'], xkdbrg['lineNumber']++;xkdbrg['columnNumber'] = nmwsoq - $_vla + 0x1;
  }for (var $_vla = 0x0, rxdkby = 0x0, i173 = /.*(?:\r\n?|\n)|.*$/g, xkdbrg = s4omq['locator'], t0p6 = [{ 'currentNSMap': jnwzef }], uhpt08 = {}, q6m4o = 0x0;;) {
    try {
      var xrya = yvx$9a['indexOf']('<', q6m4o);if (0x0 > xrya) {
        if (!yvx$9a['substr'](q6m4o)['match'](/^\s*$/)) {
          var c5bg0 = s4omq['doc'],
              gc58t = c5bg0['createTextNode'](yvx$9a['substr'](q6m4o));c5bg0['appendChild'](gc58t), s4omq['currentElement'] = gc58t;
        }return;
      }switch (xrya > q6m4o && yra$d(xrya), yvx$9a['charAt'](xrya + 0x1)) {case '/':
          var yxdkbr = yvx$9a['indexOf']('>', xrya + 0x3),
              gkxbdr = yvx$9a['substring'](xrya + 0x2, yxdkbr),
              lva$y = t0p6['pop']();0x0 > yxdkbr ? (gkxbdr = yvx$9a['substring'](xrya + 0x2)['replace'](/[\s<].*/, ''), nejzfw['error']('end tag name: ' + gkxbdr + ' is not complete:' + lva$y['tagName']), yxdkbr = xrya + 0x1 + gkxbdr['length']) : gkxbdr['match'](/\s</) && (gkxbdr = gkxbdr['replace'](/[\s<].*/, ''), nejzfw['error']('end tag name: ' + gkxbdr + ' maybe not complete'), yxdkbr = xrya + 0x1 + gkxbdr['length']);var uph6t0 = lva$y['localNSMap'],
              a9v_ = lva$y['tagName'] == gkxbdr,
              cg58t0 = a9v_ || lva$y['tagName'] && lva$y['tagName']['toLowerCase']() == gkxbdr['toLowerCase']();if (cg58t0) {
            if (s4omq['endElement'](lva$y['uri'], lva$y['localName'], gkxbdr), uph6t0) {
              for (var lay9v$ in uph6t0) s4omq['endPrefixMapping'](lay9v$);
            }a9v_ || nejzfw['fatalError']('end tag name: ' + gkxbdr + ' is not match the current start tagName:' + lva$y['tagName']);
          } else t0p6['push'](lva$y);yxdkbr++;break;case '?':
          xkdbrg && adyx(xrya), yxdkbr = wbcgdr(yvx$9a, xrya, s4omq);break;case '!':
          xkdbrg && adyx(xrya), yxdkbr = wrkgx(yvx$9a, xrya, s4omq, nejzfw);break;default:
          xkdbrg && adyx(xrya);var a9vx = new wjwe1f(),
              b5g0 = t0p6[t0p6['length'] - 0x1]['currentNSMap'],
              yxdkbr = wwqon(yvx$9a, xrya, a9vx, b5g0, kadrxy, nejzfw),
              ojsnw = a9vx['length'];if (!a9vx['closed'] && wth80(yvx$9a, yxdkbr, a9vx['tagName'], uhpt08) && (a9vx['closed'] = !0x0, j31zfe['nbsp'] || nejzfw['warning']('unclosed xml attribute')), xkdbrg && ojsnw) {
            for (var wnjfo = wmsp6(xkdbrg, {}), t60p = 0x0; ojsnw > t60p; t60p++) {
              var g85tc = a9vx[t60p];adyx(g85tc['offset']), g85tc['locator'] = wmsp6(xkdbrg, {});
            }s4omq['locator'] = wnjfo, wsonwjm(a9vx, s4omq, b5g0) && t0p6['push'](a9vx), s4omq['locator'] = xkdbrg;
          } else wsonwjm(a9vx, s4omq, b5g0) && t0p6['push'](a9vx);'http://www.w3.org/1999/xhtml' !== a9vx['uri'] || a9vx['closed'] ? yxdkbr++ : yxdkbr = wnq4mos(yvx$9a, yxdkbr, a9vx['tagName'], kadrxy, s4omq);}
    } catch (u8ct0) {
      nejzfw['error']('element parse error: ' + u8ct0), yxdkbr = -0x1;
    }yxdkbr > q6m4o ? q6m4o = yxdkbr : yra$d(Math['max'](xrya, q6m4o) + 0x1);
  }
}function wmsp6(kg8bc5, u058tc) {
  return u058tc['lineNumber'] = kg8bc5['lineNumber'], u058tc['columnNumber'] = kg8bc5['columnNumber'], u058tc;
}function wwqon(a$9lv_, qmnwos, nm4, mo6sq4, ejwfnz, $_a9) {
  for (var tpu6h0, yrxv, cbdkr = ++qmnwos, $rxdy = w$rvx;;) {
    var womsn = a$9lv_['charAt'](cbdkr);switch (womsn) {case '=':
        if ($rxdy === w$dyxa) tpu6h0 = a$9lv_['slice'](qmnwos, cbdkr), $rxdy = wcu80;else {
          if ($rxdy !== wnfzwje) throw new Error('attribute equal must after attrName');$rxdy = wcu80;
        }break;case '\x27':case '\x22':
        if ($rxdy === wcu80 || $rxdy === w$dyxa) {
          if ($rxdy === w$dyxa && ($_a9['warning']('attribute value must after "="'), tpu6h0 = a$9lv_['slice'](qmnwos, cbdkr)), qmnwos = cbdkr + 0x1, cbdkr = a$9lv_['indexOf'](womsn, qmnwos), !(cbdkr > 0x0)) throw new Error('attribute value no end \'' + womsn + '\' match');yrxv = a$9lv_['slice'](qmnwos, cbdkr)['replace'](/&#?\w+;/g, ejwfnz), nm4['add'](tpu6h0, yrxv, qmnwos - 0x1), $rxdy = wbgrcdk;
        } else {
          if ($rxdy != wjfw1e) throw new Error('attribute value must after "="');yrxv = a$9lv_['slice'](qmnwos, cbdkr)['replace'](/&#?\w+;/g, ejwfnz), nm4['add'](tpu6h0, yrxv, qmnwos), $_a9['warning']('attribute "' + tpu6h0 + '" missed start quot(' + womsn + ')!!'), qmnwos = cbdkr + 0x1, $rxdy = wbgrcdk;
        }break;case '/':
        switch ($rxdy) {case w$rvx:
            nm4['setTagName'](a$9lv_['slice'](qmnwos, cbdkr));case wbgrcdk:case wwmnsoj:case wax$ydr:
            $rxdy = wax$ydr, nm4['closed'] = !0x0;case wjfw1e:case w$dyxa:case wnfzwje:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $_a9['error']('unexpected end of input'), $rxdy == w$rvx && nm4['setTagName'](a$9lv_['slice'](qmnwos, cbdkr)), cbdkr;case '>':
        switch ($rxdy) {case w$rvx:
            nm4['setTagName'](a$9lv_['slice'](qmnwos, cbdkr));case wbgrcdk:case wwmnsoj:case wax$ydr:
            break;case wjfw1e:case w$dyxa:
            yrxv = a$9lv_['slice'](qmnwos, cbdkr), '/' === yrxv['slice'](-0x1) && (nm4['closed'] = !0x0, yrxv = yrxv['slice'](0x0, -0x1));case wnfzwje:
            $rxdy === wnfzwje && (yrxv = tpu6h0), $rxdy == wjfw1e ? ($_a9['warning']('attribute "' + yrxv + '" missed quot(")!!'), nm4['add'](tpu6h0, yrxv['replace'](/&#?\w+;/g, ejwfnz), qmnwos)) : ('http://www.w3.org/1999/xhtml' === mo6sq4[''] && yrxv['match'](/^(?:disabled|checked|selected)$/i) || $_a9['warning']('attribute "' + yrxv + '" missed value!! "' + yrxv + '" instead!!'), nm4['add'](yrxv, yrxv, qmnwos));break;case wcu80:
            throw new Error('attribute value missed!!');}return cbdkr;case '\u0080':
        womsn = '\x20';default:
        if ('\x20' >= womsn) switch ($rxdy) {case w$rvx:
            nm4['setTagName'](a$9lv_['slice'](qmnwos, cbdkr)), $rxdy = wwmnsoj;break;case w$dyxa:
            tpu6h0 = a$9lv_['slice'](qmnwos, cbdkr), $rxdy = wnfzwje;break;case wjfw1e:
            var yrxv = a$9lv_['slice'](qmnwos, cbdkr)['replace'](/&#?\w+;/g, ejwfnz);$_a9['warning']('attribute "' + yrxv + '" missed quot(")!!'), nm4['add'](tpu6h0, yrxv, qmnwos);case wbgrcdk:
            $rxdy = wwmnsoj;} else switch ($rxdy) {case wnfzwje:
            {
              nm4['tagName'];
            }'http://www.w3.org/1999/xhtml' === mo6sq4[''] && tpu6h0['match'](/^(?:disabled|checked|selected)$/i) || $_a9['warning']('attribute "' + tpu6h0 + '" missed value!! "' + tpu6h0 + '" instead2!!'), nm4['add'](tpu6h0, tpu6h0, qmnwos), qmnwos = cbdkr, $rxdy = w$dyxa;break;case wbgrcdk:
            $_a9['warning']('attribute space is required"' + tpu6h0 + '\x22!!');case wwmnsoj:
            $rxdy = w$dyxa, qmnwos = cbdkr;break;case wcu80:
            $rxdy = wjfw1e, qmnwos = cbdkr;break;case wax$ydr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}cbdkr++;
  }
}function wsonwjm(t80c5g, fez1j, d$yrxa) {
  for (var nowmq = t80c5g['tagName'], av9y$l = null, u6htp0 = t80c5g['length']; u6htp0--;) {
    var kdgrbc = t80c5g[u6htp0],
        avyrx$ = kdgrbc['qName'],
        xdrgb = kdgrbc['value'],
        rdybx = avyrx$['indexOf'](':');if (rdybx > 0x0) var gb8c50 = kdgrbc['prefix'] = avyrx$['slice'](0x0, rdybx),
        vyxar$ = avyrx$['slice'](rdybx + 0x1),
        v9xay$ = 'xmlns' === gb8c50 && vyxar$;else vyxar$ = avyrx$, gb8c50 = null, v9xay$ = 'xmlns' === avyrx$ && '';kdgrbc['localName'] = vyxar$, v9xay$ !== !0x1 && (null == av9y$l && (av9y$l = {}, wo4qsn(d$yrxa, d$yrxa = {})), d$yrxa[v9xay$] = av9y$l[v9xay$] = xdrgb, kdgrbc['uri'] = 'http://www.w3.org/2000/xmlns/', fez1j['startPrefixMapping'](v9xay$, xdrgb));
  }for (var u6htp0 = t80c5g['length']; u6htp0--;) {
    kdgrbc = t80c5g[u6htp0];var gb8c50 = kdgrbc['prefix'];gb8c50 && ('xml' === gb8c50 && (kdgrbc['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gb8c50 && (kdgrbc['uri'] = d$yrxa[gb8c50 || '']));
  }var rdybx = nowmq['indexOf'](':');rdybx > 0x0 ? (gb8c50 = t80c5g['prefix'] = nowmq['slice'](0x0, rdybx), vyxar$ = t80c5g['localName'] = nowmq['slice'](rdybx + 0x1)) : (gb8c50 = null, vyxar$ = t80c5g['localName'] = nowmq);var t58hu0 = t80c5g['uri'] = d$yrxa[gb8c50 || ''];if (fez1j['startElement'](t58hu0, vyxar$, nowmq, t80c5g), !t80c5g['closed']) return t80c5g['currentNSMap'] = d$yrxa, t80c5g['localNSMap'] = av9y$l, !0x0;if (fez1j['endElement'](t58hu0, vyxar$, nowmq), av9y$l) {
    for (gb8c50 in av9y$l) fez1j['endPrefixMapping'](gb8c50);
  }
}function wnq4mos(yrkxd, hp8ut0, ez713, hu6t, dya) {
  if (/^(?:script|textarea)$/i['test'](ez713)) {
    var onwsjm = yrkxd['indexOf']('</' + ez713 + '>', hp8ut0),
        i1z723 = yrkxd['substring'](hp8ut0 + 0x1, onwsjm);if (/[&<]/['test'](i1z723)) return (/^script$/i['test'](ez713) ? (dya['characters'](i1z723, 0x0, i1z723['length']), onwsjm) : (i1z723 = i1z723['replace'](/&#?\w+;/g, hu6t), dya['characters'](i1z723, 0x0, i1z723['length']), onwsjm)
    );
  }return hp8ut0 + 0x1;
}function wth80(nfwso, kdxrya, c8b5g, dka) {
  var $xday = dka[c8b5g];return null == $xday && ($xday = nfwso['lastIndexOf']('</' + c8b5g + '>'), kdxrya > $xday && ($xday = nfwso['lastIndexOf']('</' + c8b5g)), dka[c8b5g] = $xday), kdxrya > $xday;
}function wo4qsn(osjwnf, p4mqh) {
  for (var up4t6h in osjwnf) p4mqh[up4t6h] = osjwnf[up4t6h];
}function wrkgx(rxa$dy, m6sp4, ayxdr$, fj3z1e) {
  var x$v9y = rxa$dy['charAt'](m6sp4 + 0x2);switch (x$v9y) {case '-':
      if ('-' === rxa$dy['charAt'](m6sp4 + 0x3)) {
        var y$avxr = rxa$dy['indexOf']('-->', m6sp4 + 0x4);return y$avxr > m6sp4 ? (ayxdr$['comment'](rxa$dy, m6sp4 + 0x4, y$avxr - m6sp4 - 0x4), y$avxr + 0x3) : (fj3z1e['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rxa$dy['substr'](m6sp4 + 0x3, 0x6)) {
        var y$avxr = rxa$dy['indexOf'](']]>', m6sp4 + 0x9);return ayxdr$['startCDATA'](), ayxdr$['characters'](rxa$dy, m6sp4 + 0x9, y$avxr - m6sp4 - 0x9), ayxdr$['endCDATA'](), y$avxr + 0x3;
      }var u5c0t8 = wwonjef(rxa$dy, m6sp4),
          m4hpq = u5c0t8['length'];if (m4hpq > 0x1 && /!doctype/i['test'](u5c0t8[0x0][0x0])) {
        var rkad = u5c0t8[0x1][0x0],
            nwfze = m4hpq > 0x3 && /^public$/i['test'](u5c0t8[0x2][0x0]) && u5c0t8[0x3][0x0],
            xbykd = m4hpq > 0x4 && u5c0t8[0x4][0x0],
            owjf = u5c0t8[m4hpq - 0x1];return ayxdr$['startDTD'](rkad, nwfze && nwfze['replace'](/^(['"])(.*?)\1$/, '$2'), xbykd && xbykd['replace'](/^(['"])(.*?)\1$/, '$2')), ayxdr$['endDTD'](), owjf['index'] + owjf[0x0]['length'];
      }}return -0x1;
}function wbcgdr(b805c, raxd, kgdrbx) {
  var h8up = b805c['indexOf']('?>', raxd);if (h8up) {
    var h46qp = b805c['substring'](raxd, h8up)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (h46qp) {
      {
        h46qp[0x0]['length'];
      }return kgdrbx['processingInstruction'](h46qp[0x1], h46qp[0x2]), h8up + 0x2;
    }return -0x1;
  }return -0x1;
}function wjwe1f() {}function wwqmo(r$x, e3fz1) {
  return r$x['__proto__'] = e3fz1, r$x;
}function wwonjef(u0c8t, z17i23) {
  var $9yavx,
      phu0t6 = [],
      fzew1j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (fzew1j['lastIndex'] = z17i23, fzew1j['exec'](u0c8t); $9yavx = fzew1j['exec'](u0c8t);) if (phu0t6['push']($9yavx), $9yavx[0x1]) return phu0t6;
}var wb508 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    wvxar = new RegExp('[\\-\\.0-9' + wb508['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    wkdgbc5 = new RegExp('^' + wb508['source'] + wvxar['source'] + '*(?::' + wb508['source'] + wvxar['source'] + '*)?$'),
    w$rvx = 0x0,
    w$dyxa = 0x1,
    wnfzwje = 0x2,
    wcu80 = 0x3,
    wjfw1e = 0x4,
    wbgrcdk = 0x5,
    wwmnsoj = 0x6,
    wax$ydr = 0x7;wnqm4o['prototype'] = { 'parse': function (vxyra$, h80tpu, a9$yxv) {
    var k8cg5b = this['domBuilder'];k8cg5b['startDocument'](), wo4qsn(h80tpu, h80tpu = {}), war$yxd(vxyra$, h80tpu, a9$yxv, k8cg5b, this['errorHandler']), k8cg5b['endDocument']();
  } }, wjwe1f['prototype'] = { 'setTagName': function (p64thu) {
    if (!wkdgbc5['test'](p64thu)) throw new Error('invalid tagName:' + p64thu);this['tagName'] = p64thu;
  }, 'add': function (oswmjn, qm46ps, xkdya) {
    if (!wkdgbc5['test'](oswmjn)) throw new Error('invalid attribute:' + oswmjn);this[this['length']++] = { 'qName': oswmjn, 'value': qm46ps, 'offset': xkdya };
  }, 'length': 0x0, 'getLocalName': function (ydxbk) {
    return this[ydxbk]['localName'];
  }, 'getLocator': function (hupq) {
    return this[hupq]['locator'];
  }, 'getQName': function (m6h4pq) {
    return this[m6h4pq]['qName'];
  }, 'getURI': function (e3zf) {
    return this[e3zf]['uri'];
  }, 'getValue': function (yvar$) {
    return this[yvar$]['value'];
  } }, wwqmo({}, wwqmo['prototype']) instanceof wwqmo || (wwqmo = function (i3z71, $adr) {
  function j1f3() {}j1f3['prototype'] = $adr, j1f3 = new j1f3();for ($adr in i3z71) j1f3[$adr] = i3z71[$adr];return j1f3;
}), exports['XMLReader'] = wnqm4o;