var S = wx.$J;
function j1_pn54b() {}function j1_r17m(m61r7f, dmq1, i9xd82, jpbn5e, ucgl04) {
  function ejbn5p(s76fr) {
    if (s76fr > 0xffff) {
      s76fr -= 0x10000;var mrf16 = 0xd800 + (s76fr >> 0xa),
          ixh9z = 0xdc00 + (0x3ff & s76fr);return String['fromCharCode'](mrf16, ixh9z);
    }return String['fromCharCode'](s76fr);
  }function yogs(dx98i) {
    var jv35 = dx98i['slice'](0x1, -0x1);return jv35 in i9xd82 ? i9xd82[jv35] : '#' === jv35['charAt'](0x0) ? ejbn5p(parseInt(jv35['substr'](0x1)['replace']('x', '0x'))) : (ucgl04['error']('entity not found:' + dx98i), dx98i);
  }function be4np(u4lpe) {
    if (u4lpe > rf6ks) {
      var rmk76f = m61r7f['substring'](rf6ks, u4lpe)['replace'](/&#?\w+;/g, yogs);njv3w && f7krs(rf6ks), jpbn5e['characters'](rmk76f, 0x0, u4lpe - rf6ks), rf6ks = u4lpe;
    }
  }function f7krs(z29, dx928i) {
    for (; z29 >= blu4 && (dx928i = d18m2['exec'](m61r7f));) ne45pb = dx928i['index'], blu4 = ne45pb + dx928i[0x0]['length'], njv3w['lineNumber']++;njv3w['columnNumber'] = z29 - ne45pb + 0x1;
  }for (var ne45pb = 0x0, blu4 = 0x0, d18m2 = /.*(?:\r\n?|\n)|.*$/g, njv3w = jpbn5e['locator'], b4ep5 = [{ 'currentNSMap': dmq1 }], r167fm = {}, rf6ks = 0x0;;) {
    try {
      var y7k6sr = m61r7f['indexOf']('<', rf6ks);if (0x0 > y7k6sr) {
        if (!m61r7f['substr'](rf6ks)['match'](/^\s*$/)) {
          var y0cl = jpbn5e['doc'],
              l0c4g = y0cl['createTextNode'](m61r7f['substr'](rf6ks));y0cl['appendChild'](l0c4g), jpbn5e['currentElement'] = l0c4g;
        }return;
      }switch (y7k6sr > rf6ks && be4np(y7k6sr), m61r7f['charAt'](y7k6sr + 0x1)) {case '/':
          var gyks = m61r7f['indexOf']('>', y7k6sr + 0x3),
              jnw3 = m61r7f['substring'](y7k6sr + 0x2, gyks),
              e3n = b4ep5['pop']();0x0 > gyks ? (jnw3 = m61r7f['substring'](y7k6sr + 0x2)['replace'](/[\s<].*/, ''), ucgl04['error']('end tag name: ' + jnw3 + ' is not complete:' + e3n['tagName']), gyks = y7k6sr + 0x1 + jnw3['length']) : jnw3['match'](/\s</) && (jnw3 = jnw3['replace'](/[\s<].*/, ''), ucgl04['error']('end tag name: ' + jnw3 + ' maybe not complete'), gyks = y7k6sr + 0x1 + jnw3['length']);var j5wnv = e3n['localNSMap'],
              ocy0lg = e3n['tagName'] == jnw3,
              aizh = ocy0lg || e3n['tagName'] && e3n['tagName']['toLowerCase']() == jnw3['toLowerCase']();if (aizh) {
            if (jpbn5e['endElement'](e3n['uri'], e3n['localName'], jnw3), j5wnv) {
              for (var ixqd82 in j5wnv) jpbn5e['endPrefixMapping'](ixqd82);
            }ocy0lg || ucgl04['fatalError']('end tag name: ' + jnw3 + ' is not match the current start tagName:' + e3n['tagName']);
          } else b4ep5['push'](e3n);gyks++;break;case '?':
          njv3w && f7krs(y7k6sr), gyks = j1_ogsy6(m61r7f, y7k6sr, jpbn5e);break;case '!':
          njv3w && f7krs(y7k6sr), gyks = j1_frmq1d(m61r7f, y7k6sr, jpbn5e, ucgl04);break;default:
          njv3w && f7krs(y7k6sr);var pjen5b = new j1_lgoc0u(),
              f67rk = b4ep5[b4ep5['length'] - 0x1]['currentNSMap'],
              gyks = j1_y7sk6(m61r7f, y7k6sr, pjen5b, f67rk, yogs, ucgl04),
              lgu40c = pjen5b['length'];if (!pjen5b['closed'] && j1_bp4lue(m61r7f, gyks, pjen5b['tagName'], r167fm) && (pjen5b['closed'] = !0x0, i9xd82['nbsp'] || ucgl04['warning']('unclosed xml attribute')), njv3w && lgu40c) {
            for (var ne3jp = j1_ryk6(njv3w, {}), o7s6 = 0x0; lgu40c > o7s6; o7s6++) {
              var bnp = pjen5b[o7s6];f7krs(bnp['offset']), bnp['locator'] = j1_ryk6(njv3w, {});
            }jpbn5e['locator'] = ne3jp, j1_ec4lub(pjen5b, jpbn5e, f67rk) && b4ep5['push'](pjen5b), jpbn5e['locator'] = njv3w;
          } else j1_ec4lub(pjen5b, jpbn5e, f67rk) && b4ep5['push'](pjen5b);'http://www.w3.org/1999/xhtml' !== pjen5b['uri'] || pjen5b['closed'] ? gyks++ : gyks = j1_h$az(m61r7f, gyks, pjen5b['tagName'], yogs, jpbn5e);}
    } catch (n5wj3) {
      ucgl04['error']('element parse error: ' + n5wj3), gyks = -0x1;
    }gyks > rf6ks ? rf6ks = gyks : be4np(Math['max'](y7k6sr, rf6ks) + 0x1);
  }
}function j1_ryk6(guo0l, k7ys6) {
  return k7ys6['lineNumber'] = guo0l['lineNumber'], k7ys6['columnNumber'] = guo0l['columnNumber'], k7ys6;
}function j1_y7sk6(rdf1m, g0yl, az$h9x, b0l4u, bje, lgu0c) {
  for (var m67f1r, mrf1q7, z89axi = ++g0yl, g0cys = j1_eul4c;;) {
    var kr6sy = rdf1m['charAt'](z89axi);switch (kr6sy) {case '=':
        if (g0cys === j1_le4bup) m67f1r = rdf1m['slice'](g0yl, z89axi), g0cys = j1_osc0;else {
          if (g0cys !== j1_elbc4) throw new Error('attribute equal must after attrName');g0cys = j1_osc0;
        }break;case '\x27':case '\x22':
        if (g0cys === j1_osc0 || g0cys === j1_le4bup) {
          if (g0cys === j1_le4bup && (lgu0c['warning']('attribute value must after "="'), m67f1r = rdf1m['slice'](g0yl, z89axi)), g0yl = z89axi + 0x1, z89axi = rdf1m['indexOf'](kr6sy, g0yl), !(z89axi > 0x0)) throw new Error('attribute value no end \'' + kr6sy + '\' match');mrf1q7 = rdf1m['slice'](g0yl, z89axi)['replace'](/&#?\w+;/g, bje), az$h9x['add'](m67f1r, mrf1q7, g0yl - 0x1), g0cys = j1_v5nwj3;
        } else {
          if (g0cys != j1_qr7m1f) throw new Error('attribute value must after "="');mrf1q7 = rdf1m['slice'](g0yl, z89axi)['replace'](/&#?\w+;/g, bje), az$h9x['add'](m67f1r, mrf1q7, g0yl), lgu0c['warning']('attribute "' + m67f1r + '" missed start quot(' + kr6sy + ')!!'), g0yl = z89axi + 0x1, g0cys = j1_v5nwj3;
        }break;case '/':
        switch (g0cys) {case j1_eul4c:
            az$h9x['setTagName'](rdf1m['slice'](g0yl, z89axi));case j1_v5nwj3:case j1_g6soy:case j1_clbu4:
            g0cys = j1_clbu4, az$h9x['closed'] = !0x0;case j1_qr7m1f:case j1_le4bup:case j1_elbc4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lgu0c['error']('unexpected end of input'), g0cys == j1_eul4c && az$h9x['setTagName'](rdf1m['slice'](g0yl, z89axi)), z89axi;case '>':
        switch (g0cys) {case j1_eul4c:
            az$h9x['setTagName'](rdf1m['slice'](g0yl, z89axi));case j1_v5nwj3:case j1_g6soy:case j1_clbu4:
            break;case j1_qr7m1f:case j1_le4bup:
            mrf1q7 = rdf1m['slice'](g0yl, z89axi), '/' === mrf1q7['slice'](-0x1) && (az$h9x['closed'] = !0x0, mrf1q7 = mrf1q7['slice'](0x0, -0x1));case j1_elbc4:
            g0cys === j1_elbc4 && (mrf1q7 = m67f1r), g0cys == j1_qr7m1f ? (lgu0c['warning']('attribute "' + mrf1q7 + '" missed quot(")!!'), az$h9x['add'](m67f1r, mrf1q7['replace'](/&#?\w+;/g, bje), g0yl)) : ('http://www.w3.org/1999/xhtml' === b0l4u[''] && mrf1q7['match'](/^(?:disabled|checked|selected)$/i) || lgu0c['warning']('attribute "' + mrf1q7 + '" missed value!! "' + mrf1q7 + '" instead!!'), az$h9x['add'](mrf1q7, mrf1q7, g0yl));break;case j1_osc0:
            throw new Error('attribute value missed!!');}return z89axi;case '\u0080':
        kr6sy = '\x20';default:
        if ('\x20' >= kr6sy) switch (g0cys) {case j1_eul4c:
            az$h9x['setTagName'](rdf1m['slice'](g0yl, z89axi)), g0cys = j1_g6soy;break;case j1_le4bup:
            m67f1r = rdf1m['slice'](g0yl, z89axi), g0cys = j1_elbc4;break;case j1_qr7m1f:
            var mrf1q7 = rdf1m['slice'](g0yl, z89axi)['replace'](/&#?\w+;/g, bje);lgu0c['warning']('attribute "' + mrf1q7 + '" missed quot(")!!'), az$h9x['add'](m67f1r, mrf1q7, g0yl);case j1_v5nwj3:
            g0cys = j1_g6soy;} else switch (g0cys) {case j1_elbc4:
            {
              az$h9x['tagName'];
            }'http://www.w3.org/1999/xhtml' === b0l4u[''] && m67f1r['match'](/^(?:disabled|checked|selected)$/i) || lgu0c['warning']('attribute "' + m67f1r + '" missed value!! "' + m67f1r + '" instead2!!'), az$h9x['add'](m67f1r, m67f1r, g0yl), g0yl = z89axi, g0cys = j1_le4bup;break;case j1_v5nwj3:
            lgu0c['warning']('attribute space is required"' + m67f1r + '\x22!!');case j1_g6soy:
            g0cys = j1_le4bup, g0yl = z89axi;break;case j1_osc0:
            g0cys = j1_qr7m1f, g0yl = z89axi;break;case j1_clbu4:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}z89axi++;
  }
}function j1_ec4lub(bunep, k6, frk6) {
  for (var x9i2d = bunep['tagName'], g0u4 = null, y0olg = bunep['length']; y0olg--;) {
    var qx2 = bunep[y0olg],
        qrf1m = qx2['qName'],
        z8ax = qx2['value'],
        iz9a8x = qrf1m['indexOf'](':');if (iz9a8x > 0x0) var q7f1mr = qx2['prefix'] = qrf1m['slice'](0x0, iz9a8x),
        rfm761 = qrf1m['slice'](iz9a8x + 0x1),
        y7k6s = 'xmlns' === q7f1mr && rfm761;else rfm761 = qrf1m, q7f1mr = null, y7k6s = 'xmlns' === qrf1m && '';qx2['localName'] = rfm761, y7k6s !== !0x1 && (null == g0u4 && (g0u4 = {}, j1_kos67y(frk6, frk6 = {})), frk6[y7k6s] = g0u4[y7k6s] = z8ax, qx2['uri'] = 'http://www.w3.org/2000/xmlns/', k6['startPrefixMapping'](y7k6s, z8ax));
  }for (var y0olg = bunep['length']; y0olg--;) {
    qx2 = bunep[y0olg];var q7f1mr = qx2['prefix'];q7f1mr && ('xml' === q7f1mr && (qx2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== q7f1mr && (qx2['uri'] = frk6[q7f1mr || '']));
  }var iz9a8x = x9i2d['indexOf'](':');iz9a8x > 0x0 ? (q7f1mr = bunep['prefix'] = x9i2d['slice'](0x0, iz9a8x), rfm761 = bunep['localName'] = x9i2d['slice'](iz9a8x + 0x1)) : (q7f1mr = null, rfm761 = bunep['localName'] = x9i2d);var skog0 = bunep['uri'] = frk6[q7f1mr || ''];if (k6['startElement'](skog0, rfm761, x9i2d, bunep), !bunep['closed']) return bunep['currentNSMap'] = frk6, bunep['localNSMap'] = g0u4, !0x0;if (k6['endElement'](skog0, rfm761, x9i2d), g0u4) {
    for (q7f1mr in g0u4) k6['endPrefixMapping'](q7f1mr);
  }
}function j1_h$az(ixh9za, l4ug, zix9ha, sycg0o, csg0) {
  if (/^(?:script|textarea)$/i['test'](zix9ha)) {
    var rs6k7f = ixh9za['indexOf']('</' + zix9ha + '>', l4ug),
        n5jpe = ixh9za['substring'](l4ug + 0x1, rs6k7f);if (/[&<]/['test'](n5jpe)) return (/^script$/i['test'](zix9ha) ? (csg0['characters'](n5jpe, 0x0, n5jpe['length']), rs6k7f) : (n5jpe = n5jpe['replace'](/&#?\w+;/g, sycg0o), csg0['characters'](n5jpe, 0x0, n5jpe['length']), rs6k7f)
    );
  }return l4ug + 0x1;
}function j1_bp4lue(ucbl, rsf7k, a9ihxz, zxh9ia) {
  var xh$9za = zxh9ia[a9ihxz];return null == xh$9za && (xh$9za = ucbl['lastIndexOf']('</' + a9ihxz + '>'), rsf7k > xh$9za && (xh$9za = ucbl['lastIndexOf']('</' + a9ihxz)), zxh9ia[a9ihxz] = xh$9za), rsf7k > xh$9za;
}function j1_kos67y(w3pnj5, fk6sr7) {
  for (var mk67 in w3pnj5) fk6sr7[mk67] = w3pnj5[mk67];
}function j1_frmq1d(d81qm2, yks76o, f716m, sr6yk7) {
  var m6rk7f = d81qm2['charAt'](yks76o + 0x2);switch (m6rk7f) {case '-':
      if ('-' === d81qm2['charAt'](yks76o + 0x3)) {
        var o0kgsy = d81qm2['indexOf']('-->', yks76o + 0x4);return o0kgsy > yks76o ? (f716m['comment'](d81qm2, yks76o + 0x4, o0kgsy - yks76o - 0x4), o0kgsy + 0x3) : (sr6yk7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == d81qm2['substr'](yks76o + 0x3, 0x6)) {
        var o0kgsy = d81qm2['indexOf'](']]>', yks76o + 0x9);return f716m['startCDATA'](), f716m['characters'](d81qm2, yks76o + 0x9, o0kgsy - yks76o - 0x9), f716m['endCDATA'](), o0kgsy + 0x3;
      }var gc0uol = j1_sogc0y(d81qm2, yks76o),
          i2d1q8 = gc0uol['length'];if (i2d1q8 > 0x1 && /!doctype/i['test'](gc0uol[0x0][0x0])) {
        var m761fr = gc0uol[0x1][0x0],
            dqfm1r = i2d1q8 > 0x3 && /^public$/i['test'](gc0uol[0x2][0x0]) && gc0uol[0x3][0x0],
            uc04lb = i2d1q8 > 0x4 && gc0uol[0x4][0x0],
            fr76m1 = gc0uol[i2d1q8 - 0x1];return f716m['startDTD'](m761fr, dqfm1r && dqfm1r['replace'](/^(['"])(.*?)\1$/, '$2'), uc04lb && uc04lb['replace'](/^(['"])(.*?)\1$/, '$2')), f716m['endDTD'](), fr76m1['index'] + fr76m1[0x0]['length'];
      }}return -0x1;
}function j1_ogsy6(log0c, n3wp5, loucg0) {
  var dm21qf = log0c['indexOf']('?>', n3wp5);if (dm21qf) {
    var g0ocu = log0c['substring'](n3wp5, dm21qf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (g0ocu) {
      {
        g0ocu[0x0]['length'];
      }return loucg0['processingInstruction'](g0ocu[0x1], g0ocu[0x2]), dm21qf + 0x2;
    }return -0x1;
  }return -0x1;
}function j1_lgoc0u() {}function j1_qmd1rf(x2dq8, b4pune) {
  return x2dq8['__proto__'] = b4pune, x2dq8;
}function j1_sogc0y(osy6, z829x) {
  var jnw5,
      g04ul = [],
      u40g = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (u40g['lastIndex'] = z829x, u40g['exec'](osy6); jnw5 = u40g['exec'](osy6);) if (g04ul['push'](jnw5), jnw5[0x1]) return g04ul;
}var j1_h$xza = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_ks6ygo = new RegExp('[\\-\\.0-9' + j1_h$xza['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_id8q21 = new RegExp('^' + j1_h$xza['source'] + j1_ks6ygo['source'] + '*(?::' + j1_h$xza['source'] + j1_ks6ygo['source'] + '*)?$'),
    j1_eul4c = 0x0,
    j1_le4bup = 0x1,
    j1_elbc4 = 0x2,
    j1_osc0 = 0x3,
    j1_qr7m1f = 0x4,
    j1_v5nwj3 = 0x5,
    j1_g6soy = 0x6,
    j1_clbu4 = 0x7;j1_pn54b['prototype'] = { 'parse': function (en3j, npj5e, gcs0y) {
    var k7rfs6 = this['domBuilder'];k7rfs6['startDocument'](), j1_kos67y(npj5e, npj5e = {}), j1_r17m(en3j, npj5e, gcs0y, k7rfs6, this['errorHandler']), k7rfs6['endDocument']();
  } }, j1_lgoc0u['prototype'] = { 'setTagName': function (lyoc) {
    if (!j1_id8q21['test'](lyoc)) throw new Error('invalid tagName:' + lyoc);this['tagName'] = lyoc;
  }, 'add': function (gy0sok, pnb4, rfq7) {
    if (!j1_id8q21['test'](gy0sok)) throw new Error('invalid attribute:' + gy0sok);this[this['length']++] = { 'qName': gy0sok, 'value': pnb4, 'offset': rfq7 };
  }, 'length': 0x0, 'getLocalName': function (pbj5ne) {
    return this[pbj5ne]['localName'];
  }, 'getLocator': function (ihxa9) {
    return this[ihxa9]['locator'];
  }, 'getQName': function (cgyo) {
    return this[cgyo]['qName'];
  }, 'getURI': function (b4eulp) {
    return this[b4eulp]['uri'];
  }, 'getValue': function (rf6ks7) {
    return this[rf6ks7]['value'];
  } }, j1_qmd1rf({}, j1_qmd1rf['prototype']) instanceof j1_qmd1rf || (j1_qmd1rf = function (n5wjp3, d82i) {
  function fdmrq1() {}fdmrq1['prototype'] = d82i, fdmrq1 = new fdmrq1();for (d82i in n5wjp3) fdmrq1[d82i] = n5wjp3[d82i];return fdmrq1;
}), exports['XMLReader'] = j1_pn54b;