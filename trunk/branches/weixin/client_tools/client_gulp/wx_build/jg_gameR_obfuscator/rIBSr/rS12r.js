var i = wx.$R;
function r_fc5p() {}function r_omy8kw($14, z3slv, pn5cfd, gmrqe, chu65_) {
  function jy8kio(wgme7r) {
    if (wgme7r > 0xffff) {
      wgme7r -= 0x10000;var grwk = 0xd800 + (wgme7r >> 0xa),
          ba1$u = 0xdc00 + (0x3ff & wgme7r);return String['fromCharCode'](grwk, ba1$u);
    }return String['fromCharCode'](wgme7r);
  }function h1ua(b9$a41) {
    var ah_u6 = b9$a41['slice'](0x1, -0x1);return ah_u6 in pn5cfd ? pn5cfd[ah_u6] : '#' === ah_u6['charAt'](0x0) ? jy8kio(parseInt(ah_u6['substr'](0x1)['replace']('x', '0x'))) : (chu65_['error']('entity not found:' + b9$a41), b9$a41);
  }function r8kmw7(cdpnqf) {
    if (cdpnqf > gpe7) {
      var tsv3zl = $14['substring'](gpe7, cdpnqf)['replace'](/&#?\w+;/g, h1ua);a_1ubh && v3lz(gpe7), gmrqe['characters'](tsv3zl, 0x0, cdpnqf - gpe7), gpe7 = cdpnqf;
    }
  }function v3lz(edg7q, fdnc) {
    for (; edg7q >= j2xoi && (fdnc = $u9ab['exec']($14));) t0sl3 = fdnc['index'], j2xoi = t0sl3 + fdnc[0x0]['length'], a_1ubh['lineNumber']++;a_1ubh['columnNumber'] = edg7q - t0sl3 + 0x1;
  }for (var t0sl3 = 0x0, j2xoi = 0x0, $u9ab = /.*(?:\r\n?|\n)|.*$/g, a_1ubh = gmrqe['locator'], cn6_5h = [{ 'currentNSMap': z3slv }], txs2zj = {}, gpe7 = 0x0;;) {
    try {
      var cnh56_ = $14['indexOf']('<', gpe7);if (0x0 > cnh56_) {
        if (!$14['substr'](gpe7)['match'](/^\s*$/)) {
          var qg7erm = gmrqe['doc'],
              rg7emw = qg7erm['createTextNode']($14['substr'](gpe7));qg7erm['appendChild'](rg7emw), gmrqe['currentElement'] = rg7emw;
        }return;
      }switch (cnh56_ > gpe7 && r8kmw7(cnh56_), $14['charAt'](cnh56_ + 0x1)) {case '/':
          var dnfcqp = $14['indexOf']('>', cnh56_ + 0x3),
              dqfepn = $14['substring'](cnh56_ + 0x2, dnfcqp),
              a91b4 = cn6_5h['pop']();0x0 > dnfcqp ? (dqfepn = $14['substring'](cnh56_ + 0x2)['replace'](/[\s<].*/, ''), chu65_['error']('end tag name: ' + dqfepn + ' is not complete:' + a91b4['tagName']), dnfcqp = cnh56_ + 0x1 + dqfepn['length']) : dqfepn['match'](/\s</) && (dqfepn = dqfepn['replace'](/[\s<].*/, ''), chu65_['error']('end tag name: ' + dqfepn + ' maybe not complete'), dnfcqp = cnh56_ + 0x1 + dqfepn['length']);var z23lt = a91b4['localNSMap'],
              n6cdf5 = a91b4['tagName'] == dqfepn,
              o2jix = n6cdf5 || a91b4['tagName'] && a91b4['tagName']['toLowerCase']() == dqfepn['toLowerCase']();if (o2jix) {
            if (gmrqe['endElement'](a91b4['uri'], a91b4['localName'], dqfepn), z23lt) {
              for (var ojyx2 in z23lt) gmrqe['endPrefixMapping'](ojyx2);
            }n6cdf5 || chu65_['fatalError']('end tag name: ' + dqfepn + ' is not match the current start tagName:' + a91b4['tagName']);
          } else cn6_5h['push'](a91b4);dnfcqp++;break;case '?':
          a_1ubh && v3lz(cnh56_), dnfcqp = r_$a_ub1($14, cnh56_, gmrqe);break;case '!':
          a_1ubh && v3lz(cnh56_), dnfcqp = r_grw7mk($14, cnh56_, gmrqe, chu65_);break;default:
          a_1ubh && v3lz(cnh56_);var yj2ox = new r__ahb1(),
              u6_a = cn6_5h[cn6_5h['length'] - 0x1]['currentNSMap'],
              dnfcqp = r_yrwk8m($14, cnh56_, yj2ox, u6_a, h1ua, chu65_),
              pedfnq = yj2ox['length'];if (!yj2ox['closed'] && r_rkmwy8($14, dnfcqp, yj2ox['tagName'], txs2zj) && (yj2ox['closed'] = !0x0, pn5cfd['nbsp'] || chu65_['warning']('unclosed xml attribute')), a_1ubh && pedfnq) {
            for (var _hn5c6 = r_h16_5u(a_1ubh, {}), dnpfe = 0x0; pedfnq > dnpfe; dnpfe++) {
              var kwg7mr = yj2ox[dnpfe];v3lz(kwg7mr['offset']), kwg7mr['locator'] = r_h16_5u(a_1ubh, {});
            }gmrqe['locator'] = _hn5c6, r_krwy(yj2ox, gmrqe, u6_a) && cn6_5h['push'](yj2ox), gmrqe['locator'] = a_1ubh;
          } else r_krwy(yj2ox, gmrqe, u6_a) && cn6_5h['push'](yj2ox);'http://www.w3.org/1999/xhtml' !== yj2ox['uri'] || yj2ox['closed'] ? dnfcqp++ : dnfcqp = r_mg7kr($14, dnfcqp, yj2ox['tagName'], h1ua, gmrqe);}
    } catch (yikwo) {
      chu65_['error']('element parse error: ' + yikwo), dnfcqp = -0x1;
    }dnfcqp > gpe7 ? gpe7 = dnfcqp : r8kmw7(Math['max'](cnh56_, gpe7) + 0x1);
  }
}function r_h16_5u(au$b_, aubh1_) {
  return aubh1_['lineNumber'] = au$b_['lineNumber'], aubh1_['columnNumber'] = au$b_['columnNumber'], aubh1_;
}function r_yrwk8m(a1ub, a1bu_h, pcndfq, d5f6n, fqc, jyo2x) {
  for (var wmr7ge, rwymk, rgwm7 = ++a1bu_h, mokw8 = r_b91a$u;;) {
    var gefq = a1ub['charAt'](rgwm7);switch (gefq) {case '=':
        if (mokw8 === r_jxzi2) wmr7ge = a1ub['slice'](a1bu_h, rgwm7), mokw8 = r_rge7m;else {
          if (mokw8 !== r_krw78m) throw new Error('attribute equal must after attrName');mokw8 = r_rge7m;
        }break;case '\x27':case '\x22':
        if (mokw8 === r_rge7m || mokw8 === r_jxzi2) {
          if (mokw8 === r_jxzi2 && (jyo2x['warning']('attribute value must after "="'), wmr7ge = a1ub['slice'](a1bu_h, rgwm7)), a1bu_h = rgwm7 + 0x1, rgwm7 = a1ub['indexOf'](gefq, a1bu_h), !(rgwm7 > 0x0)) throw new Error('attribute value no end \'' + gefq + '\' match');rwymk = a1ub['slice'](a1bu_h, rgwm7)['replace'](/&#?\w+;/g, fqc), pcndfq['add'](wmr7ge, rwymk, a1bu_h - 0x1), mokw8 = r_geq7p;
        } else {
          if (mokw8 != r_ky8omw) throw new Error('attribute value must after "="');rwymk = a1ub['slice'](a1bu_h, rgwm7)['replace'](/&#?\w+;/g, fqc), pcndfq['add'](wmr7ge, rwymk, a1bu_h), jyo2x['warning']('attribute "' + wmr7ge + '" missed start quot(' + gefq + ')!!'), a1bu_h = rgwm7 + 0x1, mokw8 = r_geq7p;
        }break;case '/':
        switch (mokw8) {case r_b91a$u:
            pcndfq['setTagName'](a1ub['slice'](a1bu_h, rgwm7));case r_geq7p:case r_hc5_6:case r_ioxj2z:
            mokw8 = r_ioxj2z, pcndfq['closed'] = !0x0;case r_ky8omw:case r_jxzi2:case r_krw78m:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return jyo2x['error']('unexpected end of input'), mokw8 == r_b91a$u && pcndfq['setTagName'](a1ub['slice'](a1bu_h, rgwm7)), rgwm7;case '>':
        switch (mokw8) {case r_b91a$u:
            pcndfq['setTagName'](a1ub['slice'](a1bu_h, rgwm7));case r_geq7p:case r_hc5_6:case r_ioxj2z:
            break;case r_ky8omw:case r_jxzi2:
            rwymk = a1ub['slice'](a1bu_h, rgwm7), '/' === rwymk['slice'](-0x1) && (pcndfq['closed'] = !0x0, rwymk = rwymk['slice'](0x0, -0x1));case r_krw78m:
            mokw8 === r_krw78m && (rwymk = wmr7ge), mokw8 == r_ky8omw ? (jyo2x['warning']('attribute "' + rwymk + '" missed quot(")!!'), pcndfq['add'](wmr7ge, rwymk['replace'](/&#?\w+;/g, fqc), a1bu_h)) : ('http://www.w3.org/1999/xhtml' === d5f6n[''] && rwymk['match'](/^(?:disabled|checked|selected)$/i) || jyo2x['warning']('attribute "' + rwymk + '" missed value!! "' + rwymk + '" instead!!'), pcndfq['add'](rwymk, rwymk, a1bu_h));break;case r_rge7m:
            throw new Error('attribute value missed!!');}return rgwm7;case '\u0080':
        gefq = '\x20';default:
        if ('\x20' >= gefq) switch (mokw8) {case r_b91a$u:
            pcndfq['setTagName'](a1ub['slice'](a1bu_h, rgwm7)), mokw8 = r_hc5_6;break;case r_jxzi2:
            wmr7ge = a1ub['slice'](a1bu_h, rgwm7), mokw8 = r_krw78m;break;case r_ky8omw:
            var rwymk = a1ub['slice'](a1bu_h, rgwm7)['replace'](/&#?\w+;/g, fqc);jyo2x['warning']('attribute "' + rwymk + '" missed quot(")!!'), pcndfq['add'](wmr7ge, rwymk, a1bu_h);case r_geq7p:
            mokw8 = r_hc5_6;} else switch (mokw8) {case r_krw78m:
            {
              pcndfq['tagName'];
            }'http://www.w3.org/1999/xhtml' === d5f6n[''] && wmr7ge['match'](/^(?:disabled|checked|selected)$/i) || jyo2x['warning']('attribute "' + wmr7ge + '" missed value!! "' + wmr7ge + '" instead2!!'), pcndfq['add'](wmr7ge, wmr7ge, a1bu_h), a1bu_h = rgwm7, mokw8 = r_jxzi2;break;case r_geq7p:
            jyo2x['warning']('attribute space is required"' + wmr7ge + '\x22!!');case r_hc5_6:
            mokw8 = r_jxzi2, a1bu_h = rgwm7;break;case r_rge7m:
            mokw8 = r_ky8omw, a1bu_h = rgwm7;break;case r_ioxj2z:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rgwm7++;
  }
}function r_krwy(penqdf, qgep7d, xo8ji) {
  for (var zlst3v = penqdf['tagName'], mwrgk = null, izjx = penqdf['length']; izjx--;) {
    var wr87 = penqdf[izjx],
        kw8iyo = wr87['qName'],
        _nh65c = wr87['value'],
        zxjio2 = kw8iyo['indexOf'](':');if (zxjio2 > 0x0) var _6hu5c = wr87['prefix'] = kw8iyo['slice'](0x0, zxjio2),
        c6n5fh = kw8iyo['slice'](zxjio2 + 0x1),
        h5u1_6 = 'xmlns' === _6hu5c && c6n5fh;else c6n5fh = kw8iyo, _6hu5c = null, h5u1_6 = 'xmlns' === kw8iyo && '';wr87['localName'] = c6n5fh, h5u1_6 !== !0x1 && (null == mwrgk && (mwrgk = {}, r_z32s(xo8ji, xo8ji = {})), xo8ji[h5u1_6] = mwrgk[h5u1_6] = _nh65c, wr87['uri'] = 'http://www.w3.org/2000/xmlns/', qgep7d['startPrefixMapping'](h5u1_6, _nh65c));
  }for (var izjx = penqdf['length']; izjx--;) {
    wr87 = penqdf[izjx];var _6hu5c = wr87['prefix'];_6hu5c && ('xml' === _6hu5c && (wr87['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _6hu5c && (wr87['uri'] = xo8ji[_6hu5c || '']));
  }var zxjio2 = zlst3v['indexOf'](':');zxjio2 > 0x0 ? (_6hu5c = penqdf['prefix'] = zlst3v['slice'](0x0, zxjio2), c6n5fh = penqdf['localName'] = zlst3v['slice'](zxjio2 + 0x1)) : (_6hu5c = null, c6n5fh = penqdf['localName'] = zlst3v);var gd7qp = penqdf['uri'] = xo8ji[_6hu5c || ''];if (qgep7d['startElement'](gd7qp, c6n5fh, zlst3v, penqdf), !penqdf['closed']) return penqdf['currentNSMap'] = xo8ji, penqdf['localNSMap'] = mwrgk, !0x0;if (qgep7d['endElement'](gd7qp, c6n5fh, zlst3v), mwrgk) {
    for (_6hu5c in mwrgk) qgep7d['endPrefixMapping'](_6hu5c);
  }
}function r_mg7kr(szt2l3, bu1h, a1_u$b, cf65hn, iyo8) {
  if (/^(?:script|textarea)$/i['test'](a1_u$b)) {
    var zt3svl = szt2l3['indexOf']('</' + a1_u$b + '>', bu1h),
        a$u1b = szt2l3['substring'](bu1h + 0x1, zt3svl);if (/[&<]/['test'](a$u1b)) return (/^script$/i['test'](a1_u$b) ? (iyo8['characters'](a$u1b, 0x0, a$u1b['length']), zt3svl) : (a$u1b = a$u1b['replace'](/&#?\w+;/g, cf65hn), iyo8['characters'](a$u1b, 0x0, a$u1b['length']), zt3svl)
    );
  }return bu1h + 0x1;
}function r_rkmwy8(ndfqe, qdfcpn, svzt3l, g7wer) {
  var m8r7k = g7wer[svzt3l];return null == m8r7k && (m8r7k = ndfqe['lastIndexOf']('</' + svzt3l + '>'), qdfcpn > m8r7k && (m8r7k = ndfqe['lastIndexOf']('</' + svzt3l)), g7wer[svzt3l] = m8r7k), qdfcpn > m8r7k;
}function r_z32s(okiy8j, w8mr7k) {
  for (var z2j in okiy8j) w8mr7k[z2j] = okiy8j[z2j];
}function r_grw7mk(ba$1_, sjxz, auh6_, ep7rqg) {
  var h65n_c = ba$1_['charAt'](sjxz + 0x2);switch (h65n_c) {case '-':
      if ('-' === ba$1_['charAt'](sjxz + 0x3)) {
        var h6c5f = ba$1_['indexOf']('-->', sjxz + 0x4);return h6c5f > sjxz ? (auh6_['comment'](ba$1_, sjxz + 0x4, h6c5f - sjxz - 0x4), h6c5f + 0x3) : (ep7rqg['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ba$1_['substr'](sjxz + 0x3, 0x6)) {
        var h6c5f = ba$1_['indexOf'](']]>', sjxz + 0x9);return auh6_['startCDATA'](), auh6_['characters'](ba$1_, sjxz + 0x9, h6c5f - sjxz - 0x9), auh6_['endCDATA'](), h6c5f + 0x3;
      }var ua_1h6 = r_u5_hc6(ba$1_, sjxz),
          _u16 = ua_1h6['length'];if (_u16 > 0x1 && /!doctype/i['test'](ua_1h6[0x0][0x0])) {
        var zl3vst = ua_1h6[0x1][0x0],
            u15_h6 = _u16 > 0x3 && /^public$/i['test'](ua_1h6[0x2][0x0]) && ua_1h6[0x3][0x0],
            cpfn = _u16 > 0x4 && ua_1h6[0x4][0x0],
            gme7wr = ua_1h6[_u16 - 0x1];return auh6_['startDTD'](zl3vst, u15_h6 && u15_h6['replace'](/^(['"])(.*?)\1$/, '$2'), cpfn && cpfn['replace'](/^(['"])(.*?)\1$/, '$2')), auh6_['endDTD'](), gme7wr['index'] + gme7wr[0x0]['length'];
      }}return -0x1;
}function r_$a_ub1(lvt3z, r8wymk, h5cn6_) {
  var gefdp = lvt3z['indexOf']('?>', r8wymk);if (gefdp) {
    var wmo8k = lvt3z['substring'](r8wymk, gefdp)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (wmo8k) {
      {
        wmo8k[0x0]['length'];
      }return h5cn6_['processingInstruction'](wmo8k[0x1], wmo8k[0x2]), gefdp + 0x2;
    }return -0x1;
  }return -0x1;
}function r__ahb1() {}function r_t3lsvz(v0ls3, s2xzjt) {
  return v0ls3['__proto__'] = s2xzjt, v0ls3;
}function r_u5_hc6(_5cu6, r7megw) {
  var ijs2xz,
      mk7rw8 = [],
      $b149a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($b149a['lastIndex'] = r7megw, $b149a['exec'](_5cu6); ijs2xz = $b149a['exec'](_5cu6);) if (mk7rw8['push'](ijs2xz), ijs2xz[0x1]) return mk7rw8;
}var r_ij2zx = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r__ch56u = new RegExp('[\\-\\.0-9' + r_ij2zx['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r_ixzsj2 = new RegExp('^' + r_ij2zx['source'] + r__ch56u['source'] + '*(?::' + r_ij2zx['source'] + r__ch56u['source'] + '*)?$'),
    r_b91a$u = 0x0,
    r_jxzi2 = 0x1,
    r_krw78m = 0x2,
    r_rge7m = 0x3,
    r_ky8omw = 0x4,
    r_geq7p = 0x5,
    r_hc5_6 = 0x6,
    r_ioxj2z = 0x7;r_fc5p['prototype'] = { 'parse': function (a914, i8koy, oizj2x) {
    var rm7gqe = this['domBuilder'];rm7gqe['startDocument'](), r_z32s(i8koy, i8koy = {}), r_omy8kw(a914, i8koy, oizj2x, rm7gqe, this['errorHandler']), rm7gqe['endDocument']();
  } }, r__ahb1['prototype'] = { 'setTagName': function (qpdenf) {
    if (!r_ixzsj2['test'](qpdenf)) throw new Error('invalid tagName:' + qpdenf);this['tagName'] = qpdenf;
  }, 'add': function (c6fn5d, rmy, qfncp) {
    if (!r_ixzsj2['test'](c6fn5d)) throw new Error('invalid attribute:' + c6fn5d);this[this['length']++] = { 'qName': c6fn5d, 'value': rmy, 'offset': qfncp };
  }, 'length': 0x0, 'getLocalName': function (ykrw8m) {
    return this[ykrw8m]['localName'];
  }, 'getLocator': function (yk8oij) {
    return this[yk8oij]['locator'];
  }, 'getQName': function (epnf) {
    return this[epnf]['qName'];
  }, 'getURI': function (b1a9$4) {
    return this[b1a9$4]['uri'];
  }, 'getValue': function (c_nh65) {
    return this[c_nh65]['value'];
  } }, r_t3lsvz({}, r_t3lsvz['prototype']) instanceof r_t3lsvz || (r_t3lsvz = function (j2zio, _h61a) {
  function b4$() {}b4$['prototype'] = _h61a, b4$ = new b4$();for (_h61a in j2zio) b4$[_h61a] = j2zio[_h61a];return b4$;
}), exports['XMLReader'] = r_fc5p;