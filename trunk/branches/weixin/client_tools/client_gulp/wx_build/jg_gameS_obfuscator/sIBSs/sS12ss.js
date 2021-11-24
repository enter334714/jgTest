var K = wx.$S;
function sx_ic() {}function sovkz(lb8f, a54$d, $4uare, wc9zk0, r3oe4) {
  function bj168g(c9kw_) {
    if (c9kw_ > 0xffff) {
      c9kw_ -= 0x10000;var ua$r4 = 0xd800 + (c9kw_ >> 0xa),
          _wk9 = 0xdc00 + (0x3ff & c9kw_);return String['fromCharCode'](ua$r4, _wk9);
    }return String['fromCharCode'](c9kw_);
  }function ghs(nt2xmi) {
    var kwozv = nt2xmi['slice'](0x1, -0x1);return kwozv in $4uare ? $4uare[kwozv] : '#' === kwozv['charAt'](0x0) ? bj168g(parseInt(kwozv['substr'](0x1)['replace']('x', '0x'))) : (r3oe4['error']('entity not found:' + nt2xmi), nt2xmi);
  }function n2xi_(e5da4) {
    if (e5da4 > y5phq) {
      var qjyspg = lb8f['substring'](y5phq, e5da4)['replace'](/&#?\w+;/g, ghs);w0_ic && pqgyjs(y5phq), wc9zk0['characters'](qjyspg, 0x0, e5da4 - y5phq), y5phq = e5da4;
    }
  }function pqgyjs(g1pjq, sjq1p) {
    for (; g1pjq >= qpshg && (sjq1p = x0iwc['exec'](lb8f));) m_icx0 = sjq1p['index'], qpshg = m_icx0 + sjq1p[0x0]['length'], w0_ic['lineNumber']++;w0_ic['columnNumber'] = g1pjq - m_icx0 + 0x1;
  }for (var m_icx0 = 0x0, qpshg = 0x0, x0iwc = /.*(?:\r\n?|\n)|.*$/g, w0_ic = wc9zk0['locator'], o4e = [{ 'currentNSMap': a54$d }], w09zc = {}, y5phq = 0x0;;) {
    try {
      var w_kc9 = lb8f['indexOf']('<', y5phq);if (0x0 > w_kc9) {
        if (!lb8f['substr'](y5phq)['match'](/^\s*$/)) {
          var e$dua4 = wc9zk0['doc'],
              j1psq = e$dua4['createTextNode'](lb8f['substr'](y5phq));e$dua4['appendChild'](j1psq), wc9zk0['currentElement'] = j1psq;
        }return;
      }switch (w_kc9 > y5phq && n2xi_(w_kc9), lb8f['charAt'](w_kc9 + 0x1)) {case '/':
          var b8l61j = lb8f['indexOf']('>', w_kc9 + 0x3),
              pq81g = lb8f['substring'](w_kc9 + 0x2, b8l61j),
              ix_c = o4e['pop']();0x0 > b8l61j ? (pq81g = lb8f['substring'](w_kc9 + 0x2)['replace'](/[\s<].*/, ''), r3oe4['error']('end tag name: ' + pq81g + ' is not complete:' + ix_c['tagName']), b8l61j = w_kc9 + 0x1 + pq81g['length']) : pq81g['match'](/\s</) && (pq81g = pq81g['replace'](/[\s<].*/, ''), r3oe4['error']('end tag name: ' + pq81g + ' maybe not complete'), b8l61j = w_kc9 + 0x1 + pq81g['length']);var o3uvre = ix_c['localNSMap'],
              cxi0_ = ix_c['tagName'] == pq81g,
              bf68 = cxi0_ || ix_c['tagName'] && ix_c['tagName']['toLowerCase']() == pq81g['toLowerCase']();if (bf68) {
            if (wc9zk0['endElement'](ix_c['uri'], ix_c['localName'], pq81g), o3uvre) {
              for (var zr3vko in o3uvre) wc9zk0['endPrefixMapping'](zr3vko);
            }cxi0_ || r3oe4['fatalError']('end tag name: ' + pq81g + ' is not match the current start tagName:' + ix_c['tagName']);
          } else o4e['push'](ix_c);b8l61j++;break;case '?':
          w0_ic && pqgyjs(w_kc9), b8l61j = slb6f8(lb8f, w_kc9, wc9zk0);break;case '!':
          w0_ic && pqgyjs(w_kc9), b8l61j = sov3kzr(lb8f, w_kc9, wc9zk0, r3oe4);break;default:
          w0_ic && pqgyjs(w_kc9);var phqsgy = new spgsyh(),
              mc_x = o4e[o4e['length'] - 0x1]['currentNSMap'],
              b8l61j = soe3v(lb8f, w_kc9, phqsgy, mc_x, ghs, r3oe4),
              c9_0 = phqsgy['length'];if (!phqsgy['closed'] && stnix2(lb8f, b8l61j, phqsgy['tagName'], w09zc) && (phqsgy['closed'] = !0x0, $4uare['nbsp'] || r3oe4['warning']('unclosed xml attribute')), w0_ic && c9_0) {
            for (var cix_w = sshypd(w0_ic, {}), k3o9zv = 0x0; c9_0 > k3o9zv; k3o9zv++) {
              var sj1qp = phqsgy[k3o9zv];pqgyjs(sj1qp['offset']), sj1qp['locator'] = sshypd(w0_ic, {});
            }wc9zk0['locator'] = cix_w, sw9kc_(phqsgy, wc9zk0, mc_x) && o4e['push'](phqsgy), wc9zk0['locator'] = w0_ic;
          } else sw9kc_(phqsgy, wc9zk0, mc_x) && o4e['push'](phqsgy);'http://www.w3.org/1999/xhtml' !== phqsgy['uri'] || phqsgy['closed'] ? b8l61j++ : b8l61j = smi2xtn(lb8f, b8l61j, phqsgy['tagName'], ghs, wc9zk0);}
    } catch (p1qjg8) {
      r3oe4['error']('element parse error: ' + p1qjg8), b8l61j = -0x1;
    }b8l61j > y5phq ? y5phq = b8l61j : n2xi_(Math['max'](w_kc9, y5phq) + 0x1);
  }
}function sshypd(k3zro, spgyj) {
  return spgyj['lineNumber'] = k3zro['lineNumber'], spgyj['columnNumber'] = k3zro['columnNumber'], spgyj;
}function soe3v(p5syhd, icx0m_, wo9zv, vkzor3, q1psjg, d4ea) {
  for (var c9w0_, xc_wi, vzko39 = ++icx0m_, kw9cz = sdu4e$;;) {
    var b8g1j6 = p5syhd['charAt'](vzko39);switch (b8g1j6) {case '=':
        if (kw9cz === sshypgq) c9w0_ = p5syhd['slice'](icx0m_, vzko39), kw9cz = s_0cmxi;else {
          if (kw9cz !== soz3kvr) throw new Error('attribute equal must after attrName');kw9cz = s_0cmxi;
        }break;case '\x27':case '\x22':
        if (kw9cz === s_0cmxi || kw9cz === sshypgq) {
          if (kw9cz === sshypgq && (d4ea['warning']('attribute value must after "="'), c9w0_ = p5syhd['slice'](icx0m_, vzko39)), icx0m_ = vzko39 + 0x1, vzko39 = p5syhd['indexOf'](b8g1j6, icx0m_), !(vzko39 > 0x0)) throw new Error('attribute value no end \'' + b8g1j6 + '\' match');xc_wi = p5syhd['slice'](icx0m_, vzko39)['replace'](/&#?\w+;/g, q1psjg), wo9zv['add'](c9w0_, xc_wi, icx0m_ - 0x1), kw9cz = shqp5y;
        } else {
          if (kw9cz != sgqbj81) throw new Error('attribute value must after "="');xc_wi = p5syhd['slice'](icx0m_, vzko39)['replace'](/&#?\w+;/g, q1psjg), wo9zv['add'](c9w0_, xc_wi, icx0m_), d4ea['warning']('attribute "' + c9w0_ + '" missed start quot(' + b8g1j6 + ')!!'), icx0m_ = vzko39 + 0x1, kw9cz = shqp5y;
        }break;case '/':
        switch (kw9cz) {case sdu4e$:
            wo9zv['setTagName'](p5syhd['slice'](icx0m_, vzko39));case shqp5y:case syhqps:case sq1b8g:
            kw9cz = sq1b8g, wo9zv['closed'] = !0x0;case sgqbj81:case sshypgq:case soz3kvr:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return d4ea['error']('unexpected end of input'), kw9cz == sdu4e$ && wo9zv['setTagName'](p5syhd['slice'](icx0m_, vzko39)), vzko39;case '>':
        switch (kw9cz) {case sdu4e$:
            wo9zv['setTagName'](p5syhd['slice'](icx0m_, vzko39));case shqp5y:case syhqps:case sq1b8g:
            break;case sgqbj81:case sshypgq:
            xc_wi = p5syhd['slice'](icx0m_, vzko39), '/' === xc_wi['slice'](-0x1) && (wo9zv['closed'] = !0x0, xc_wi = xc_wi['slice'](0x0, -0x1));case soz3kvr:
            kw9cz === soz3kvr && (xc_wi = c9w0_), kw9cz == sgqbj81 ? (d4ea['warning']('attribute "' + xc_wi + '" missed quot(")!!'), wo9zv['add'](c9w0_, xc_wi['replace'](/&#?\w+;/g, q1psjg), icx0m_)) : ('http://www.w3.org/1999/xhtml' === vkzor3[''] && xc_wi['match'](/^(?:disabled|checked|selected)$/i) || d4ea['warning']('attribute "' + xc_wi + '" missed value!! "' + xc_wi + '" instead!!'), wo9zv['add'](xc_wi, xc_wi, icx0m_));break;case s_0cmxi:
            throw new Error('attribute value missed!!');}return vzko39;case '\u0080':
        b8g1j6 = '\x20';default:
        if ('\x20' >= b8g1j6) switch (kw9cz) {case sdu4e$:
            wo9zv['setTagName'](p5syhd['slice'](icx0m_, vzko39)), kw9cz = syhqps;break;case sshypgq:
            c9w0_ = p5syhd['slice'](icx0m_, vzko39), kw9cz = soz3kvr;break;case sgqbj81:
            var xc_wi = p5syhd['slice'](icx0m_, vzko39)['replace'](/&#?\w+;/g, q1psjg);d4ea['warning']('attribute "' + xc_wi + '" missed quot(")!!'), wo9zv['add'](c9w0_, xc_wi, icx0m_);case shqp5y:
            kw9cz = syhqps;} else switch (kw9cz) {case soz3kvr:
            {
              wo9zv['tagName'];
            }'http://www.w3.org/1999/xhtml' === vkzor3[''] && c9w0_['match'](/^(?:disabled|checked|selected)$/i) || d4ea['warning']('attribute "' + c9w0_ + '" missed value!! "' + c9w0_ + '" instead2!!'), wo9zv['add'](c9w0_, c9w0_, icx0m_), icx0m_ = vzko39, kw9cz = sshypgq;break;case shqp5y:
            d4ea['warning']('attribute space is required"' + c9w0_ + '\x22!!');case syhqps:
            kw9cz = sshypgq, icx0m_ = vzko39;break;case s_0cmxi:
            kw9cz = sgqbj81, icx0m_ = vzko39;break;case sq1b8g:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}vzko39++;
  }
}function sw9kc_(ueo34r, uro34, xic_0) {
  for (var _9ic0w = ueo34r['tagName'], w90kv = null, x72m = ueo34r['length']; x72m--;) {
    var rko3 = ueo34r[x72m],
        yd5ash = rko3['qName'],
        z9wvko = rko3['value'],
        n2ix_m = yd5ash['indexOf'](':');if (n2ix_m > 0x0) var _c2 = rko3['prefix'] = yd5ash['slice'](0x0, n2ix_m),
        _9ciw0 = yd5ash['slice'](n2ix_m + 0x1),
        ozvu = 'xmlns' === _c2 && _9ciw0;else _9ciw0 = yd5ash, _c2 = null, ozvu = 'xmlns' === yd5ash && '';rko3['localName'] = _9ciw0, ozvu !== !0x1 && (null == w90kv && (w90kv = {}, swz9kc(xic_0, xic_0 = {})), xic_0[ozvu] = w90kv[ozvu] = z9wvko, rko3['uri'] = 'http://www.w3.org/2000/xmlns/', uro34['startPrefixMapping'](ozvu, z9wvko));
  }for (var x72m = ueo34r['length']; x72m--;) {
    rko3 = ueo34r[x72m];var _c2 = rko3['prefix'];_c2 && ('xml' === _c2 && (rko3['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _c2 && (rko3['uri'] = xic_0[_c2 || '']));
  }var n2ix_m = _9ic0w['indexOf'](':');n2ix_m > 0x0 ? (_c2 = ueo34r['prefix'] = _9ic0w['slice'](0x0, n2ix_m), _9ciw0 = ueo34r['localName'] = _9ic0w['slice'](n2ix_m + 0x1)) : (_c2 = null, _9ciw0 = ueo34r['localName'] = _9ic0w);var vo3zr = ueo34r['uri'] = xic_0[_c2 || ''];if (uro34['startElement'](vo3zr, _9ciw0, _9ic0w, ueo34r), !ueo34r['closed']) return ueo34r['currentNSMap'] = xic_0, ueo34r['localNSMap'] = w90kv, !0x0;if (uro34['endElement'](vo3zr, _9ciw0, _9ic0w), w90kv) {
    for (_c2 in w90kv) uro34['endPrefixMapping'](_c2);
  }
}function smi2xtn(gb18j, m_cix2, ed4$u, n7tm, $ue4d) {
  if (/^(?:script|textarea)$/i['test'](ed4$u)) {
    var v09wk = gb18j['indexOf']('</' + ed4$u + '>', m_cix2),
        vzoru3 = gb18j['substring'](m_cix2 + 0x1, v09wk);if (/[&<]/['test'](vzoru3)) return (/^script$/i['test'](ed4$u) ? ($ue4d['characters'](vzoru3, 0x0, vzoru3['length']), v09wk) : (vzoru3 = vzoru3['replace'](/&#?\w+;/g, n7tm), $ue4d['characters'](vzoru3, 0x0, vzoru3['length']), v09wk)
    );
  }return m_cix2 + 0x1;
}function stnix2(ahsd, u3r4oe, yda$h5, dha4$5) {
  var z39kov = dha4$5[yda$h5];return null == z39kov && (z39kov = ahsd['lastIndexOf']('</' + yda$h5 + '>'), u3r4oe > z39kov && (z39kov = ahsd['lastIndexOf']('</' + yda$h5)), dha4$5[yda$h5] = z39kov), u3r4oe > z39kov;
}function swz9kc(v3reu, sg1j) {
  for (var re$u3 in v3reu) sg1j[re$u3] = v3reu[re$u3];
}function sov3kzr(bjg861, x_i0wc, ed5a$, n_mi2x) {
  var ueo4r3 = bjg861['charAt'](x_i0wc + 0x2);switch (ueo4r3) {case '-':
      if ('-' === bjg861['charAt'](x_i0wc + 0x3)) {
        var mxt2in = bjg861['indexOf']('-->', x_i0wc + 0x4);return mxt2in > x_i0wc ? (ed5a$['comment'](bjg861, x_i0wc + 0x4, mxt2in - x_i0wc - 0x4), mxt2in + 0x3) : (n_mi2x['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bjg861['substr'](x_i0wc + 0x3, 0x6)) {
        var mxt2in = bjg861['indexOf'](']]>', x_i0wc + 0x9);return ed5a$['startCDATA'](), ed5a$['characters'](bjg861, x_i0wc + 0x9, mxt2in - x_i0wc - 0x9), ed5a$['endCDATA'](), mxt2in + 0x3;
      }var pyd5 = sayds5(bjg861, x_i0wc),
          ru34$ = pyd5['length'];if (ru34$ > 0x1 && /!doctype/i['test'](pyd5[0x0][0x0])) {
        var _x0m = pyd5[0x1][0x0],
            g8bj = ru34$ > 0x3 && /^public$/i['test'](pyd5[0x2][0x0]) && pyd5[0x3][0x0],
            pjq8g = ru34$ > 0x4 && pyd5[0x4][0x0],
            _x2ci = pyd5[ru34$ - 0x1];return ed5a$['startDTD'](_x0m, g8bj && g8bj['replace'](/^(['"])(.*?)\1$/, '$2'), pjq8g && pjq8g['replace'](/^(['"])(.*?)\1$/, '$2')), ed5a$['endDTD'](), _x2ci['index'] + _x2ci[0x0]['length'];
      }}return -0x1;
}function slb6f8(_0xwci, _90wci, bl168f) {
  var p5ysqh = _0xwci['indexOf']('?>', _90wci);if (p5ysqh) {
    var i_m2c = _0xwci['substring'](_90wci, p5ysqh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (i_m2c) {
      {
        i_m2c[0x0]['length'];
      }return bl168f['processingInstruction'](i_m2c[0x1], i_m2c[0x2]), p5ysqh + 0x2;
    }return -0x1;
  }return -0x1;
}function spgsyh() {}function se$4ad(ea45, wk0z9v) {
  return ea45['__proto__'] = wk0z9v, ea45;
}function sayds5(jyqpgs, _mxci2) {
  var $ea4ru,
      e4r$u3 = [],
      yjpqsg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (yjpqsg['lastIndex'] = _mxci2, yjpqsg['exec'](jyqpgs); $ea4ru = yjpqsg['exec'](jyqpgs);) if (e4r$u3['push']($ea4ru), $ea4ru[0x1]) return e4r$u3;
}var srkoz3v = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    sz3vko9 = new RegExp('[\\-\\.0-9' + srkoz3v['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    sa5ds = new RegExp('^' + srkoz3v['source'] + sz3vko9['source'] + '*(?::' + srkoz3v['source'] + sz3vko9['source'] + '*)?$'),
    sdu4e$ = 0x0,
    sshypgq = 0x1,
    soz3kvr = 0x2,
    s_0cmxi = 0x3,
    sgqbj81 = 0x4,
    shqp5y = 0x5,
    syhqps = 0x6,
    sq1b8g = 0x7;sx_ic['prototype'] = { 'parse': function (_xnim, j18gp, l16bf) {
    var jpqg1 = this['domBuilder'];jpqg1['startDocument'](), swz9kc(j18gp, j18gp = {}), sovkz(_xnim, j18gp, l16bf, jpqg1, this['errorHandler']), jpqg1['endDocument']();
  } }, spgsyh['prototype'] = { 'setTagName': function (i_c0xw) {
    if (!sa5ds['test'](i_c0xw)) throw new Error('invalid tagName:' + i_c0xw);this['tagName'] = i_c0xw;
  }, 'add': function (l16b, ahd$45, $hyd5) {
    if (!sa5ds['test'](l16b)) throw new Error('invalid attribute:' + l16b);this[this['length']++] = { 'qName': l16b, 'value': ahd$45, 'offset': $hyd5 };
  }, 'length': 0x0, 'getLocalName': function (j61) {
    return this[j61]['localName'];
  }, 'getLocator': function (jg1b8q) {
    return this[jg1b8q]['locator'];
  }, 'getQName': function (txnm2) {
    return this[txnm2]['qName'];
  }, 'getURI': function (wv9kz) {
    return this[wv9kz]['uri'];
  }, 'getValue': function (p5ydh) {
    return this[p5ydh]['value'];
  } }, se$4ad({}, se$4ad['prototype']) instanceof se$4ad || (se$4ad = function (psygq, yh$da) {
  function k0c_9w() {}k0c_9w['prototype'] = yh$da, k0c_9w = new k0c_9w();for (yh$da in psygq) k0c_9w[yh$da] = psygq[yh$da];return k0c_9w;
}), exports['XMLReader'] = sx_ic;