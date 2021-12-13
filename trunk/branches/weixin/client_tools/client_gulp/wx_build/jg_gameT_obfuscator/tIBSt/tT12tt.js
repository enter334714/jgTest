var M = wx.$T;
function tmw65() {}function tfvpd$z(e0oz7, tv29ci, gnj3rb, mq0y, kbrjas) {
  function jnabr(y_0hm) {
    if (y_0hm > 0xffff) {
      y_0hm -= 0x10000;var vdzf$p = 0xd800 + (y_0hm >> 0xa),
          pe7fz = 0xdc00 + (0x3ff & y_0hm);return String['fromCharCode'](vdzf$p, pe7fz);
    }return String['fromCharCode'](y_0hm);
  }function _h5w6(v9pdf) {
    var bjran = v9pdf['slice'](0x1, -0x1);return bjran in gnj3rb ? gnj3rb[bjran] : '#' === bjran['charAt'](0x0) ? jnabr(parseInt(bjran['substr'](0x1)['replace']('x', '0x'))) : (kbrjas['error']('entity not found:' + v9pdf), v9pdf);
  }function w1835($pvd) {
    if ($pvd > rksjba) {
      var ozpe7f = e0oz7['substring'](rksjba, $pvd)['replace'](/&#?\w+;/g, _h5w6);lct24 && zf7e(rksjba), mq0y['characters'](ozpe7f, 0x0, $pvd - rksjba), rksjba = $pvd;
    }
  }function zf7e(pf$9dv, yw_hx) {
    for (; pf$9dv >= q0_myx && (yw_hx = fdp$7['exec'](e0oz7));) ywmh5_ = yw_hx['index'], q0_myx = ywmh5_ + yw_hx[0x0]['length'], lct24['lineNumber']++;lct24['columnNumber'] = pf$9dv - ywmh5_ + 0x1;
  }for (var ywmh5_ = 0x0, q0_myx = 0x0, fdp$7 = /.*(?:\r\n?|\n)|.*$/g, lct24 = mq0y['locator'], p7d$ = [{ 'currentNSMap': tv29ci }], qeox = {}, rksjba = 0x0;;) {
    try {
      var $pvfd9 = e0oz7['indexOf']('<', rksjba);if (0x0 > $pvfd9) {
        if (!e0oz7['substr'](rksjba)['match'](/^\s*$/)) {
          var vidp = mq0y['doc'],
              i49 = vidp['createTextNode'](e0oz7['substr'](rksjba));vidp['appendChild'](i49), mq0y['currentElement'] = i49;
        }return;
      }switch ($pvfd9 > rksjba && w1835($pvfd9), e0oz7['charAt']($pvfd9 + 0x1)) {case '/':
          var y0hmx_ = e0oz7['indexOf']('>', $pvfd9 + 0x3),
              fe7p = e0oz7['substring']($pvfd9 + 0x2, y0hmx_),
              bg3 = p7d$['pop']();0x0 > y0hmx_ ? (fe7p = e0oz7['substring']($pvfd9 + 0x2)['replace'](/[\s<].*/, ''), kbrjas['error']('end tag name: ' + fe7p + ' is not complete:' + bg3['tagName']), y0hmx_ = $pvfd9 + 0x1 + fe7p['length']) : fe7p['match'](/\s</) && (fe7p = fe7p['replace'](/[\s<].*/, ''), kbrjas['error']('end tag name: ' + fe7p + ' maybe not complete'), y0hmx_ = $pvfd9 + 0x1 + fe7p['length']);var kabgj = bg3['localNSMap'],
              h0xmy_ = bg3['tagName'] == fe7p,
              xoq0y = h0xmy_ || bg3['tagName'] && bg3['tagName']['toLowerCase']() == fe7p['toLowerCase']();if (xoq0y) {
            if (mq0y['endElement'](bg3['uri'], bg3['localName'], fe7p), kabgj) {
              for (var p7ofzd in kabgj) mq0y['endPrefixMapping'](p7ofzd);
            }h0xmy_ || kbrjas['fatalError']('end tag name: ' + fe7p + ' is not match the current start tagName:' + bg3['tagName']);
          } else p7d$['push'](bg3);y0hmx_++;break;case '?':
          lct24 && zf7e($pvfd9), y0hmx_ = tjgrn3b(e0oz7, $pvfd9, mq0y);break;case '!':
          lct24 && zf7e($pvfd9), y0hmx_ = tpfezo(e0oz7, $pvfd9, mq0y, kbrjas);break;default:
          lct24 && zf7e($pvfd9);var eqoxy = new ty_e0qx(),
              sajkbr = p7d$[p7d$['length'] - 0x1]['currentNSMap'],
              y0hmx_ = tdpz7o(e0oz7, $pvfd9, eqoxy, sajkbr, _h5w6, kbrjas),
              brka = eqoxy['length'];if (!eqoxy['closed'] && tpvd$f(e0oz7, y0hmx_, eqoxy['tagName'], qeox) && (eqoxy['closed'] = !0x0, gnj3rb['nbsp'] || kbrjas['warning']('unclosed xml attribute')), lct24 && brka) {
            for (var bnajr = toyexq0(lct24, {}), zq7o0e = 0x0; brka > zq7o0e; zq7o0e++) {
              var fopzd7 = eqoxy[zq7o0e];zf7e(fopzd7['offset']), fopzd7['locator'] = toyexq0(lct24, {});
            }mq0y['locator'] = bnajr, twy_m5h(eqoxy, mq0y, sajkbr) && p7d$['push'](eqoxy), mq0y['locator'] = lct24;
          } else twy_m5h(eqoxy, mq0y, sajkbr) && p7d$['push'](eqoxy);'http://www.w3.org/1999/xhtml' !== eqoxy['uri'] || eqoxy['closed'] ? y0hmx_++ : y0hmx_ = tpv9df$(e0oz7, y0hmx_, eqoxy['tagName'], _h5w6, mq0y);}
    } catch (df$pv) {
      kbrjas['error']('element parse error: ' + df$pv), y0hmx_ = -0x1;
    }y0hmx_ > rksjba ? rksjba = y0hmx_ : w1835(Math['max']($pvfd9, rksjba) + 0x1);
  }
}function toyexq0(ymh5_w, vpd$i9) {
  return vpd$i9['lineNumber'] = ymh5_w['lineNumber'], vpd$i9['columnNumber'] = ymh5_w['columnNumber'], vpd$i9;
}function tdpz7o(w_yh5m, exq70o, mx0yh_, brn3gj, ezfpo, $zvdp) {
  for (var h5mw_6, n36518, sjabrk = ++exq70o, v9cti2 = tw3851;;) {
    var bajrgn = w_yh5m['charAt'](sjabrk);switch (bajrgn) {case '=':
        if (v9cti2 === tr8jn3) h5mw_6 = w_yh5m['slice'](exq70o, sjabrk), v9cti2 = tujabks;else {
          if (v9cti2 !== tw513) throw new Error('attribute equal must after attrName');v9cti2 = tujabks;
        }break;case '\x27':case '\x22':
        if (v9cti2 === tujabks || v9cti2 === tr8jn3) {
          if (v9cti2 === tr8jn3 && ($zvdp['warning']('attribute value must after "="'), h5mw_6 = w_yh5m['slice'](exq70o, sjabrk)), exq70o = sjabrk + 0x1, sjabrk = w_yh5m['indexOf'](bajrgn, exq70o), !(sjabrk > 0x0)) throw new Error('attribute value no end \'' + bajrgn + '\' match');n36518 = w_yh5m['slice'](exq70o, sjabrk)['replace'](/&#?\w+;/g, ezfpo), mx0yh_['add'](h5mw_6, n36518, exq70o - 0x1), v9cti2 = tc2l4t;
        } else {
          if (v9cti2 != tkjsaub) throw new Error('attribute value must after "="');n36518 = w_yh5m['slice'](exq70o, sjabrk)['replace'](/&#?\w+;/g, ezfpo), mx0yh_['add'](h5mw_6, n36518, exq70o), $zvdp['warning']('attribute "' + h5mw_6 + '" missed start quot(' + bajrgn + ')!!'), exq70o = sjabrk + 0x1, v9cti2 = tc2l4t;
        }break;case '/':
        switch (v9cti2) {case tw3851:
            mx0yh_['setTagName'](w_yh5m['slice'](exq70o, sjabrk));case tc2l4t:case tywh_xm:case tfp9d$v:
            v9cti2 = tfp9d$v, mx0yh_['closed'] = !0x0;case tkjsaub:case tr8jn3:case tw513:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $zvdp['error']('unexpected end of input'), v9cti2 == tw3851 && mx0yh_['setTagName'](w_yh5m['slice'](exq70o, sjabrk)), sjabrk;case '>':
        switch (v9cti2) {case tw3851:
            mx0yh_['setTagName'](w_yh5m['slice'](exq70o, sjabrk));case tc2l4t:case tywh_xm:case tfp9d$v:
            break;case tkjsaub:case tr8jn3:
            n36518 = w_yh5m['slice'](exq70o, sjabrk), '/' === n36518['slice'](-0x1) && (mx0yh_['closed'] = !0x0, n36518 = n36518['slice'](0x0, -0x1));case tw513:
            v9cti2 === tw513 && (n36518 = h5mw_6), v9cti2 == tkjsaub ? ($zvdp['warning']('attribute "' + n36518 + '" missed quot(")!!'), mx0yh_['add'](h5mw_6, n36518['replace'](/&#?\w+;/g, ezfpo), exq70o)) : ('http://www.w3.org/1999/xhtml' === brn3gj[''] && n36518['match'](/^(?:disabled|checked|selected)$/i) || $zvdp['warning']('attribute "' + n36518 + '" missed value!! "' + n36518 + '" instead!!'), mx0yh_['add'](n36518, n36518, exq70o));break;case tujabks:
            throw new Error('attribute value missed!!');}return sjabrk;case '\u0080':
        bajrgn = '\x20';default:
        if ('\x20' >= bajrgn) switch (v9cti2) {case tw3851:
            mx0yh_['setTagName'](w_yh5m['slice'](exq70o, sjabrk)), v9cti2 = tywh_xm;break;case tr8jn3:
            h5mw_6 = w_yh5m['slice'](exq70o, sjabrk), v9cti2 = tw513;break;case tkjsaub:
            var n36518 = w_yh5m['slice'](exq70o, sjabrk)['replace'](/&#?\w+;/g, ezfpo);$zvdp['warning']('attribute "' + n36518 + '" missed quot(")!!'), mx0yh_['add'](h5mw_6, n36518, exq70o);case tc2l4t:
            v9cti2 = tywh_xm;} else switch (v9cti2) {case tw513:
            {
              mx0yh_['tagName'];
            }'http://www.w3.org/1999/xhtml' === brn3gj[''] && h5mw_6['match'](/^(?:disabled|checked|selected)$/i) || $zvdp['warning']('attribute "' + h5mw_6 + '" missed value!! "' + h5mw_6 + '" instead2!!'), mx0yh_['add'](h5mw_6, h5mw_6, exq70o), exq70o = sjabrk, v9cti2 = tr8jn3;break;case tc2l4t:
            $zvdp['warning']('attribute space is required"' + h5mw_6 + '\x22!!');case tywh_xm:
            v9cti2 = tr8jn3, exq70o = sjabrk;break;case tujabks:
            v9cti2 = tkjsaub, exq70o = sjabrk;break;case tfp9d$v:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}sjabrk++;
  }
}function twy_m5h(_yh0m, w_hxy, arkjs) {
  for (var ozfe7p = _yh0m['tagName'], raskbj = null, eq_y0 = _yh0m['length']; eq_y0--;) {
    var pf7dzo = _yh0m[eq_y0],
        d$pf7z = pf7dzo['qName'],
        m_0qy = pf7dzo['value'],
        pv$zd = d$pf7z['indexOf'](':');if (pv$zd > 0x0) var qoez70 = pf7dzo['prefix'] = d$pf7z['slice'](0x0, pv$zd),
        d$fp = d$pf7z['slice'](pv$zd + 0x1),
        i2cl4t = 'xmlns' === qoez70 && d$fp;else d$fp = d$pf7z, qoez70 = null, i2cl4t = 'xmlns' === d$pf7z && '';pf7dzo['localName'] = d$fp, i2cl4t !== !0x1 && (null == raskbj && (raskbj = {}, tn158(arkjs, arkjs = {})), arkjs[i2cl4t] = raskbj[i2cl4t] = m_0qy, pf7dzo['uri'] = 'http://www.w3.org/2000/xmlns/', w_hxy['startPrefixMapping'](i2cl4t, m_0qy));
  }for (var eq_y0 = _yh0m['length']; eq_y0--;) {
    pf7dzo = _yh0m[eq_y0];var qoez70 = pf7dzo['prefix'];qoez70 && ('xml' === qoez70 && (pf7dzo['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qoez70 && (pf7dzo['uri'] = arkjs[qoez70 || '']));
  }var pv$zd = ozfe7p['indexOf'](':');pv$zd > 0x0 ? (qoez70 = _yh0m['prefix'] = ozfe7p['slice'](0x0, pv$zd), d$fp = _yh0m['localName'] = ozfe7p['slice'](pv$zd + 0x1)) : (qoez70 = null, d$fp = _yh0m['localName'] = ozfe7p);var ipv$9d = _yh0m['uri'] = arkjs[qoez70 || ''];if (w_hxy['startElement'](ipv$9d, d$fp, ozfe7p, _yh0m), !_yh0m['closed']) return _yh0m['currentNSMap'] = arkjs, _yh0m['localNSMap'] = raskbj, !0x0;if (w_hxy['endElement'](ipv$9d, d$fp, ozfe7p), raskbj) {
    for (qoez70 in raskbj) w_hxy['endPrefixMapping'](qoez70);
  }
}function tpv9df$(jsuka, pi$v9d, wyhm5_, ezqo7, rsbj) {
  if (/^(?:script|textarea)$/i['test'](wyhm5_)) {
    var dv9 = jsuka['indexOf']('</' + wyhm5_ + '>', pi$v9d),
        v2c9it = jsuka['substring'](pi$v9d + 0x1, dv9);if (/[&<]/['test'](v2c9it)) return (/^script$/i['test'](wyhm5_) ? (rsbj['characters'](v2c9it, 0x0, v2c9it['length']), dv9) : (v2c9it = v2c9it['replace'](/&#?\w+;/g, ezqo7), rsbj['characters'](v2c9it, 0x0, v2c9it['length']), dv9)
    );
  }return pi$v9d + 0x1;
}function tpvd$f(_yx0qm, y0mx_h, pi9vd$, gnrjb) {
  var oe0zq7 = gnrjb[pi9vd$];return null == oe0zq7 && (oe0zq7 = _yx0qm['lastIndexOf']('</' + pi9vd$ + '>'), y0mx_h > oe0zq7 && (oe0zq7 = _yx0qm['lastIndexOf']('</' + pi9vd$)), gnrjb[pi9vd$] = oe0zq7), y0mx_h > oe0zq7;
}function tn158(y_m0h, id9v) {
  for (var zpfeo in y_m0h) id9v[zpfeo] = y_m0h[zpfeo];
}function tpfezo(fep, di9$v, $ic9dv, h6m51) {
  var yqo0xe = fep['charAt'](di9$v + 0x2);switch (yqo0xe) {case '-':
      if ('-' === fep['charAt'](di9$v + 0x3)) {
        var bngraj = fep['indexOf']('-->', di9$v + 0x4);return bngraj > di9$v ? ($ic9dv['comment'](fep, di9$v + 0x4, bngraj - di9$v - 0x4), bngraj + 0x3) : (h6m51['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == fep['substr'](di9$v + 0x3, 0x6)) {
        var bngraj = fep['indexOf'](']]>', di9$v + 0x9);return $ic9dv['startCDATA'](), $ic9dv['characters'](fep, di9$v + 0x9, bngraj - di9$v - 0x9), $ic9dv['endCDATA'](), bngraj + 0x3;
      }var $7dfpz = tm5w6(fep, di9$v),
          f7zpd = $7dfpz['length'];if (f7zpd > 0x1 && /!doctype/i['test']($7dfpz[0x0][0x0])) {
        var yhmw5_ = $7dfpz[0x1][0x0],
            vit9 = f7zpd > 0x3 && /^public$/i['test']($7dfpz[0x2][0x0]) && $7dfpz[0x3][0x0],
            h86w1 = f7zpd > 0x4 && $7dfpz[0x4][0x0],
            eofzp7 = $7dfpz[f7zpd - 0x1];return $ic9dv['startDTD'](yhmw5_, vit9 && vit9['replace'](/^(['"])(.*?)\1$/, '$2'), h86w1 && h86w1['replace'](/^(['"])(.*?)\1$/, '$2')), $ic9dv['endDTD'](), eofzp7['index'] + eofzp7[0x0]['length'];
      }}return -0x1;
}function tjgrn3b(xe70q, ti492c, ex0y_) {
  var vitc = xe70q['indexOf']('?>', ti492c);if (vitc) {
    var xqoey = xe70q['substring'](ti492c, vitc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xqoey) {
      {
        xqoey[0x0]['length'];
      }return ex0y_['processingInstruction'](xqoey[0x1], xqoey[0x2]), vitc + 0x2;
    }return -0x1;
  }return -0x1;
}function ty_e0qx() {}function ty_5wh(n6538, _5whym) {
  return n6538['__proto__'] = _5whym, n6538;
}function tm5w6(f$vzp, _yqex0) {
  var asjbk,
      vcd$ = [],
      jga = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jga['lastIndex'] = _yqex0, jga['exec'](f$vzp); asjbk = jga['exec'](f$vzp);) if (vcd$['push'](asjbk), asjbk[0x1]) return vcd$;
}var txeo7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tvdfp9 = new RegExp('[\\-\\.0-9' + txeo7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tg8136 = new RegExp('^' + txeo7['source'] + tvdfp9['source'] + '*(?::' + txeo7['source'] + tvdfp9['source'] + '*)?$'),
    tw3851 = 0x0,
    tr8jn3 = 0x1,
    tw513 = 0x2,
    tujabks = 0x3,
    tkjsaub = 0x4,
    tc2l4t = 0x5,
    tywh_xm = 0x6,
    tfp9d$v = 0x7;tmw65['prototype'] = { 'parse': function ($cdi9, yx0m_h, t9i2c4) {
    var i4tcl = this['domBuilder'];i4tcl['startDocument'](), tn158(yx0m_h, yx0m_h = {}), tfvpd$z($cdi9, yx0m_h, t9i2c4, i4tcl, this['errorHandler']), i4tcl['endDocument']();
  } }, ty_e0qx['prototype'] = { 'setTagName': function (vfz$dp) {
    if (!tg8136['test'](vfz$dp)) throw new Error('invalid tagName:' + vfz$dp);this['tagName'] = vfz$dp;
  }, 'add': function (d$vic9, ajnbg, _6mw5) {
    if (!tg8136['test'](d$vic9)) throw new Error('invalid attribute:' + d$vic9);this[this['length']++] = { 'qName': d$vic9, 'value': ajnbg, 'offset': _6mw5 };
  }, 'length': 0x0, 'getLocalName': function (ezf7p) {
    return this[ezf7p]['localName'];
  }, 'getLocator': function (fdz$p7) {
    return this[fdz$p7]['locator'];
  }, 'getQName': function (_ymhx0) {
    return this[_ymhx0]['qName'];
  }, 'getURI': function (c2it9v) {
    return this[c2it9v]['uri'];
  }, 'getValue': function (pfd7) {
    return this[pfd7]['value'];
  } }, ty_5wh({}, ty_5wh['prototype']) instanceof ty_5wh || (ty_5wh = function (w6h58, krs) {
  function qfo7e() {}qfo7e['prototype'] = krs, qfo7e = new qfo7e();for (krs in w6h58) qfo7e[krs] = w6h58[krs];return qfo7e;
}), exports['XMLReader'] = tmw65;