var I = wx.$R;
function r_s2xij() {}function r_neqdpf(tsj2xz, ji2oxy, _hu1a, fdnepq, mwkr) {
  function cd5f(efpqn) {
    var g7wmer = efpqn['slice'](0x1, -0x1);return g7wmer in _hu1a ? _hu1a[g7wmer] : '#' === g7wmer['charAt'](0x0) ? 0xffff < (g7wmer = parseInt(g7wmer['substr'](0x1)['replace']('x', '0x'))) ? (g7wmer -= 0x10000, String['fromCharCode'](0xd800 + (g7wmer >> 0xa), 0xdc00 + (0x3ff & g7wmer))) : String['fromCharCode'](g7wmer) : (mwkr['error']('entity not found:' + efpqn), efpqn);
  }function my8kow(z3xts2) {
    var jxi8o;yr8kw < z3xts2 && (jxi8o = tsj2xz['substring'](yr8kw, z3xts2)['replace'](/&#?\w+;/g, cd5f), xiyo && qfpen(yr8kw), fdnepq['characters'](jxi8o, 0x0, z3xts2 - yr8kw), yr8kw = z3xts2);
  }function qfpen(omky8, ewr7gm) {
    for (; efnqdp <= omky8 && (ewr7gm = t0s3['exec'](tsj2xz));) izj2x = ewr7gm['index'], efnqdp = izj2x + ewr7gm[0x0]['length'], xiyo['lineNumber']++;xiyo['columnNumber'] = omky8 - izj2x + 0x1;
  }for (var izj2x = 0x0, efnqdp = 0x0, t0s3 = /.*(?:\r\n?|\n)|.*$/g, xiyo = fdnepq['locator'], b_a$u1 = [{ 'currentNSMap': ji2oxy }], mwr87 = {}, yr8kw = 0x0;;) {
    try {
      var a6_1 = tsj2xz['indexOf']('<', yr8kw),
          jk8oyi,
          u$ba19;if (a6_1 < 0x0) return void (tsj2xz['substr'](yr8kw)['match'](/^\s*$/) || (u$ba19 = (jk8oyi = fdnepq['doc'])['createTextNode'](tsj2xz['substr'](yr8kw)), jk8oyi['appendChild'](u$ba19), fdnepq['currentElement'] = u$ba19));switch (yr8kw < a6_1 && my8kow(a6_1), tsj2xz['charAt'](a6_1 + 0x1)) {case '/':
          var r7wmge = tsj2xz['indexOf']('>', a6_1 + 0x3),
              egfq = tsj2xz['substring'](a6_1 + 0x2, r7wmge),
              z23lt = b_a$u1['pop']();r7wmge < 0x0 ? (egfq = tsj2xz['substring'](a6_1 + 0x2)['replace'](/[\s<].*/, ''), mwkr['error']('end tag name: ' + egfq + ' is not complete:' + z23lt['tagName']), r7wmge = a6_1 + 0x1 + egfq['length']) : egfq['match'](/\s</) && (egfq = egfq['replace'](/[\s<].*/, ''), mwkr['error']('end tag name: ' + egfq + ' maybe not complete'), r7wmge = a6_1 + 0x1 + egfq['length']);var qpdcnf = z23lt['localNSMap'],
              zs23xt = z23lt['tagName'] == egfq;if (zs23xt || z23lt['tagName'] && z23lt['tagName']['toLowerCase']() == egfq['toLowerCase']()) {
            if (fdnepq['endElement'](z23lt['uri'], z23lt['localName'], egfq), qpdcnf) {
              for (var w8koym in qpdcnf) fdnepq['endPrefixMapping'](w8koym);
            }zs23xt || mwkr['fatalError']('end tag name: ' + egfq + ' is not match the current start tagName:' + z23lt['tagName']);
          } else b_a$u1['push'](z23lt);r7wmge++;break;case '?':
          xiyo && qfpen(a6_1), r7wmge = r_ztl3sv(tsj2xz, a6_1, fdnepq);break;case '!':
          xiyo && qfpen(a6_1), r7wmge = r_chn(tsj2xz, a6_1, fdnepq, mwkr);break;default:
          xiyo && qfpen(a6_1);var pfegd = new r_ls3t(),
              pndqef = b_a$u1[b_a$u1['length'] - 0x1]['currentNSMap'],
              r7wmge = r_emwg7r(tsj2xz, a6_1, pfegd, pndqef, cd5f, mwkr),
              ge7qr = pfegd['length'];if (!pfegd['closed'] && r_koyji8(tsj2xz, r7wmge, pfegd['tagName'], mwr87) && (pfegd['closed'] = !0x0, _hu1a['nbsp'] || mwkr['warning']('unclosed xml attribute')), xiyo && ge7qr) {
            for (var o2zi = r_p7gqe(xiyo, {}), gerpq7 = 0x0; gerpq7 < ge7qr; gerpq7++) {
              var b$_ua1 = pfegd[gerpq7];qfpen(b$_ua1['offset']), b$_ua1['locator'] = r_p7gqe(xiyo, {});
            }fdnepq['locator'] = o2zi, r_c_65nh(pfegd, fdnepq, pndqef) && b_a$u1['push'](pfegd), fdnepq['locator'] = xiyo;
          } else r_c_65nh(pfegd, fdnepq, pndqef) && b_a$u1['push'](pfegd);'http://www.w3.org/1999/xhtml' !== pfegd['uri'] || pfegd['closed'] ? r7wmge++ : r7wmge = r_zsvl3(tsj2xz, r7wmge, pfegd['tagName'], cd5f, fdnepq);}
    } catch (l3z2st) {
      mwkr['error']('element parse error: ' + l3z2st), r7wmge = -0x1;
    }yr8kw < r7wmge ? yr8kw = r7wmge : my8kow(Math['max'](a6_1, yr8kw) + 0x1);
  }
}function r_p7gqe(a_uh6, h65_c) {
  return h65_c['lineNumber'] = a_uh6['lineNumber'], h65_c['columnNumber'] = a_uh6['columnNumber'], h65_c;
}function r_emwg7r(hu_, rkmg7w, $9ab14, depqg7, c5fn6d, kw7m) {
  for (var xijo8y, x2ijsz = ++rkmg7w, sjzix = r_jiy;;) {
    var xiyj8o = hu_['charAt'](x2ijsz);switch (xiyj8o) {case '=':
        if (sjzix === r_qmr) xijo8y = hu_['slice'](rkmg7w, x2ijsz), sjzix = r_ts0v3l;else {
          if (sjzix !== r_mqr7) throw new Error('attribute equal must after attrName');sjzix = r_ts0v3l;
        }break;case '\x27':case '\x22':
        if (sjzix === r_ts0v3l || sjzix === r_qmr) {
          if (sjzix === r_qmr && (kw7m['warning']('attribute value must after "="'), xijo8y = hu_['slice'](rkmg7w, x2ijsz)), !(0x0 < (x2ijsz = hu_['indexOf'](xiyj8o, rkmg7w = x2ijsz + 0x1)))) throw new Error('attribute value no end \'' + xiyj8o + '\' match');fdcp = hu_['slice'](rkmg7w, x2ijsz)['replace'](/&#?\w+;/g, c5fn6d), $9ab14['add'](xijo8y, fdcp, rkmg7w - 0x1), sjzix = r_a4b$9;
        } else {
          if (sjzix != r_st3zlv) throw new Error('attribute value must after "="');fdcp = hu_['slice'](rkmg7w, x2ijsz)['replace'](/&#?\w+;/g, c5fn6d), $9ab14['add'](xijo8y, fdcp, rkmg7w), kw7m['warning']('attribute "' + xijo8y + '" missed start quot(' + xiyj8o + ')!!'), rkmg7w = x2ijsz + 0x1, sjzix = r_a4b$9;
        }break;case '/':
        switch (sjzix) {case r_jiy:
            $9ab14['setTagName'](hu_['slice'](rkmg7w, x2ijsz));case r_a4b$9:case r_uba$:case r_d5fnc:
            sjzix = r_d5fnc, $9ab14['closed'] = !0x0;case r_st3zlv:case r_qmr:case r_mqr7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kw7m['error']('unexpected end of input'), sjzix == r_jiy && $9ab14['setTagName'](hu_['slice'](rkmg7w, x2ijsz)), x2ijsz;case '>':
        switch (sjzix) {case r_jiy:
            $9ab14['setTagName'](hu_['slice'](rkmg7w, x2ijsz));case r_a4b$9:case r_uba$:case r_d5fnc:
            break;case r_st3zlv:case r_qmr:
            '/' === (fdcp = hu_['slice'](rkmg7w, x2ijsz))['slice'](-0x1) && ($9ab14['closed'] = !0x0, fdcp = fdcp['slice'](0x0, -0x1));case r_mqr7:
            sjzix === r_mqr7 && (fdcp = xijo8y), sjzix == r_st3zlv ? (kw7m['warning']('attribute "' + fdcp + '" missed quot(")!!'), $9ab14['add'](xijo8y, fdcp['replace'](/&#?\w+;/g, c5fn6d), rkmg7w)) : ('http://www.w3.org/1999/xhtml' === depqg7[''] && fdcp['match'](/^(?:disabled|checked|selected)$/i) || kw7m['warning']('attribute "' + fdcp + '" missed value!! "' + fdcp + '" instead!!'), $9ab14['add'](fdcp, fdcp, rkmg7w));break;case r_ts0v3l:
            throw new Error('attribute value missed!!');}return x2ijsz;case '\u0080':
        xiyj8o = '\x20';default:
        if (xiyj8o <= '\x20') switch (sjzix) {case r_jiy:
            $9ab14['setTagName'](hu_['slice'](rkmg7w, x2ijsz)), sjzix = r_uba$;break;case r_qmr:
            xijo8y = hu_['slice'](rkmg7w, x2ijsz), sjzix = r_mqr7;break;case r_st3zlv:
            var fdcp = hu_['slice'](rkmg7w, x2ijsz)['replace'](/&#?\w+;/g, c5fn6d);kw7m['warning']('attribute "' + fdcp + '" missed quot(")!!'), $9ab14['add'](xijo8y, fdcp, rkmg7w);case r_a4b$9:
            sjzix = r_uba$;} else switch (sjzix) {case r_mqr7:
            $9ab14['tagName'], 'http://www.w3.org/1999/xhtml' === depqg7[''] && xijo8y['match'](/^(?:disabled|checked|selected)$/i) || kw7m['warning']('attribute "' + xijo8y + '" missed value!! "' + xijo8y + '" instead2!!'), $9ab14['add'](xijo8y, xijo8y, rkmg7w), rkmg7w = x2ijsz, sjzix = r_qmr;break;case r_a4b$9:
            kw7m['warning']('attribute space is required"' + xijo8y + '\x22!!');case r_uba$:
            sjzix = r_qmr, rkmg7w = x2ijsz;break;case r_ts0v3l:
            sjzix = r_st3zlv, rkmg7w = x2ijsz;break;case r_d5fnc:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}x2ijsz++;
  }
}function r_c_65nh(siz2jx, iko, zix2sj) {
  for (var bh1_ = siz2jx['tagName'], h5cf = null, szj2ix = siz2jx['length']; szj2ix--;) {
    var txs2 = siz2jx[szj2ix],
        g7remq = txs2['qName'],
        a_b = txs2['value'],
        yj;g7remq = 0x0 < (xzijs2 = g7remq['indexOf'](':')) ? (gw7em = txs2['prefix'] = g7remq['slice'](0x0, xzijs2), yj = g7remq['slice'](xzijs2 + 0x1), 'xmlns' === gw7em && yj) : (gw7em = null, 'xmlns' === (yj = g7remq) && ''), txs2['localName'] = yj, !0x1 !== g7remq && (null == h5cf && (h5cf = {}, r_emwrg(zix2sj, zix2sj = {})), zix2sj[g7remq] = h5cf[g7remq] = a_b, txs2['uri'] = 'http://www.w3.org/2000/xmlns/', iko['startPrefixMapping'](g7remq, a_b));
  }for (szj2ix = siz2jx['length']; szj2ix--;) (gw7em = (txs2 = siz2jx[szj2ix])['prefix']) && ('xml' === gw7em && (txs2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gw7em && (txs2['uri'] = zix2sj[gw7em || '']));var xzijs2;yj = 0x0 < (xzijs2 = bh1_['indexOf'](':')) ? (gw7em = siz2jx['prefix'] = bh1_['slice'](0x0, xzijs2), siz2jx['localName'] = bh1_['slice'](xzijs2 + 0x1)) : (gw7em = null, siz2jx['localName'] = bh1_);var mwyo8k = siz2jx['uri'] = zix2sj[gw7em || ''];if (iko['startElement'](mwyo8k, yj, bh1_, siz2jx), !siz2jx['closed']) return siz2jx['currentNSMap'] = zix2sj, siz2jx['localNSMap'] = h5cf, !0x0;if (iko['endElement'](mwyo8k, yj, bh1_), h5cf) {
    for (var gw7em in h5cf) iko['endPrefixMapping'](gw7em);
  }
}function r_zsvl3(wrge, wmko8, xt, hbu1a, xjoiz2) {
  if (/^(?:script|textarea)$/i['test'](xt)) {
    var nqcpf = wrge['indexOf']('</' + xt + '>', wmko8),
        wrge = wrge['substring'](wmko8 + 0x1, nqcpf);if (/[&<]/['test'](wrge)) return (/^script$/i['test'](xt) || (wrge = wrge['replace'](/&#?\w+;/g, hbu1a)), xjoiz2['characters'](wrge, 0x0, wrge['length']), nqcpf
    );
  }return wmko8 + 0x1;
}function r_koyji8(egm7rw, eqr7gp, wk78mr, qpdnc) {
  var epdnfq = qpdnc[wk78mr];return null == epdnfq && ((epdnfq = egm7rw['lastIndexOf']('</' + wk78mr + '>')) < eqr7gp && (epdnfq = egm7rw['lastIndexOf']('</' + wk78mr)), qpdnc[wk78mr] = epdnfq), epdnfq < eqr7gp;
}function r_emwrg(l0s3t, e7gqm) {
  for (var oj8ixy in l0s3t) e7gqm[oj8ixy] = l0s3t[oj8ixy];
}function r_chn(oykmw, $b, _a$ub, s2tx3) {
  var izjx = oykmw['charAt']($b + 0x2);if ('-' === izjx) return '-' !== oykmw['charAt']($b + 0x3) ? -0x1 : $b < (fepdq = oykmw['indexOf']('-->', $b + 0x4)) ? (_a$ub['comment'](oykmw, $b + 0x4, fepdq - $b - 0x4), fepdq + 0x3) : (s2tx3['error']('Unclosed comment'), -0x1);if ('CDATA[' == oykmw['substr']($b + 0x3, 0x6)) return fepdq = oykmw['indexOf'](']]>', $b + 0x9), _a$ub['startCDATA'](), _a$ub['characters'](oykmw, $b + 0x9, fepdq - $b - 0x9), _a$ub['endCDATA'](), fepdq + 0x3;izjx = r_kwo8(oykmw, $b), s2tx3 = izjx['length'];var fepdq;return 0x1 < s2tx3 && /!doctype/i['test'](izjx[0x0][0x0]) ? (fepdq = izjx[0x1][0x0], oykmw = 0x3 < s2tx3 && /^public$/i['test'](izjx[0x2][0x0]) && izjx[0x3][0x0], $b = 0x4 < s2tx3 && izjx[0x4][0x0], izjx = izjx[s2tx3 - 0x1], _a$ub['startDTD'](fepdq, oykmw && oykmw['replace'](/^(['"])(.*?)\1$/, '$2'), $b && $b['replace'](/^(['"])(.*?)\1$/, '$2')), _a$ub['endDTD'](), izjx['index'] + izjx[0x0]['length']) : -0x1;
}function r_ztl3sv(u_$1, kmwy, mo) {
  var we7gmr = u_$1['indexOf']('?>', kmwy);return we7gmr && (u_$1 = u_$1['substring'](kmwy, we7gmr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (u_$1[0x0]['length'], mo['processingInstruction'](u_$1[0x1], u_$1[0x2]), we7gmr + 0x2) : -0x1;
}function r_ls3t() {}function r_ztlsv(xjoi2z, nfch65) {
  return xjoi2z['__proto__'] = nfch65, xjoi2z;
}function r_kwo8(ioxy, _b$1a) {
  var p5fdn,
      a6h_u = [],
      xyoi2j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (xyoi2j['lastIndex'] = _b$1a, xyoi2j['exec'](ioxy); p5fdn = xyoi2j['exec'](ioxy);) if (a6h_u['push'](p5fdn), p5fdn[0x1]) return a6h_u;
}var r_cnqd = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r_sx3zt2 = new RegExp('[\\-\\.0-9' + r_cnqd['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r_$b94 = new RegExp('^' + r_cnqd['source'] + r_sx3zt2['source'] + '*(?::' + r_cnqd['source'] + r_sx3zt2['source'] + '*)?$'),
    r_jiy = 0x0,
    r_qmr = 0x1,
    r_mqr7 = 0x2,
    r_ts0v3l = 0x3,
    r_st3zlv = 0x4,
    r_a4b$9 = 0x5,
    r_uba$ = 0x6,
    r_d5fnc = 0x7;r_s2xij['prototype'] = { 'parse': function (m7wegr, yi8ok, gqerp) {
    var nepqdf = this['domBuilder'];nepqdf['startDocument'](), r_emwrg(yi8ok, yi8ok = {}), r_neqdpf(m7wegr, yi8ok, gqerp, nepqdf, this['errorHandler']), nepqdf['endDocument']();
  } }, r_ls3t['prototype'] = { 'setTagName': function (mr7weg) {
    if (!r_$b94['test'](mr7weg)) throw new Error('invalid tagName:' + mr7weg);this['tagName'] = mr7weg;
  }, 'add': function (_ub1a, a_61, epgqr7) {
    if (!r_$b94['test'](_ub1a)) throw new Error('invalid attribute:' + _ub1a);this[this['length']++] = { 'qName': _ub1a, 'value': a_61, 'offset': epgqr7 };
  }, 'length': 0x0, 'getLocalName': function (mrg7we) {
    return this[mrg7we]['localName'];
  }, 'getLocator': function (h5cn) {
    return this[h5cn]['locator'];
  }, 'getQName': function (_u$b) {
    return this[_u$b]['qName'];
  }, 'getURI': function (z2xjo) {
    return this[z2xjo]['uri'];
  }, 'getValue': function (jtsz2) {
    return this[jtsz2]['value'];
  } }, r_ztlsv({}, r_ztlsv['prototype']) instanceof r_ztlsv || (r_ztlsv = function (zjsxi, nc_h56) {
  function a1$49() {}for (nc_h56 in a1$49['prototype'] = nc_h56, a1$49 = new a1$49(), zjsxi) a1$49[nc_h56] = zjsxi[nc_h56];return a1$49;
}), exports['XMLReader'] = r_s2xij;