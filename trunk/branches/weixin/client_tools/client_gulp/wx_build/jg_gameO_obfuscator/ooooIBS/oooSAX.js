var c = wx.$o;
function o_chrp8() {}function o_yeun3_(_nv3yu, nuyk, rcz8mp, ox4gf9, u3va) {
  function $e0jy(m5prt) {
    var yeu3_ = m5prt['slice'](0x1, -0x1);return yeu3_ in rcz8mp ? rcz8mp[yeu3_] : '#' === yeu3_['charAt'](0x0) ? 0xffff < (yeu3_ = parseInt(yeu3_['substr'](0x1)['replace']('x', '0x'))) ? (yeu3_ -= 0x10000, String['fromCharCode'](0xd800 + (yeu3_ >> 0xa), 0xdc00 + (0x3ff & yeu3_))) : String['fromCharCode'](yeu3_) : (u3va['error']('entity not found:' + m5prt), m5prt);
  }function f4gw9x(n_kyue) {
    var bz8hg;uvn3_l < n_kyue && (bz8hg = _nv3yu['substring'](uvn3_l, n_kyue)['replace'](/&#?\w+;/g, $e0jy), $kyj0e && m7sqt(uvn3_l), ox4gf9['characters'](bz8hg, 0x0, n_kyue - uvn3_l), uvn3_l = n_kyue);
  }function m7sqt(x419wf, mcrtp5) {
    for (; uy_ne3 <= x419wf && (mcrtp5 = xw4gf9['exec'](_nv3yu));) b94gxo = mcrtp5['index'], uy_ne3 = b94gxo + mcrtp5[0x0]['length'], $kyj0e['lineNumber']++;$kyj0e['columnNumber'] = x419wf - b94gxo + 0x1;
  }for (var b94gxo = 0x0, uy_ne3 = 0x0, xw4gf9 = /.*(?:\r\n?|\n)|.*$/g, $kyj0e = ox4gf9['locator'], q5tms = [{ 'currentNSMap': nuyk }], ctprm5 = {}, uvn3_l = 0x0;;) {
    try {
      var prmzc = _nv3yu['indexOf']('<', uvn3_l),
          msq5t,
          rp5qt;if (prmzc < 0x0) return void (_nv3yu['substr'](uvn3_l)['match'](/^\s*$/) || (rp5qt = (msq5t = ox4gf9['doc'])['createTextNode'](_nv3yu['substr'](uvn3_l)), msq5t['appendChild'](rp5qt), ox4gf9['currentElement'] = rp5qt));switch (uvn3_l < prmzc && f4gw9x(prmzc), _nv3yu['charAt'](prmzc + 0x1)) {case '/':
          var n3auv = _nv3yu['indexOf']('>', prmzc + 0x3),
              sm5qt = _nv3yu['substring'](prmzc + 0x2, n3auv),
              tq5mrp = q5tms['pop']();n3auv < 0x0 ? (sm5qt = _nv3yu['substring'](prmzc + 0x2)['replace'](/[\s<].*/, ''), u3va['error']('end tag name: ' + sm5qt + ' is not complete:' + tq5mrp['tagName']), n3auv = prmzc + 0x1 + sm5qt['length']) : sm5qt['match'](/\s</) && (sm5qt = sm5qt['replace'](/[\s<].*/, ''), u3va['error']('end tag name: ' + sm5qt + ' maybe not complete'), n3auv = prmzc + 0x1 + sm5qt['length']);var rc8zph = tq5mrp['localNSMap'],
              dav63 = tq5mrp['tagName'] == sm5qt;if (dav63 || tq5mrp['tagName'] && tq5mrp['tagName']['toLowerCase']() == sm5qt['toLowerCase']()) {
            if (ox4gf9['endElement'](tq5mrp['uri'], tq5mrp['localName'], sm5qt), rc8zph) {
              for (var yeuk_0 in rc8zph) ox4gf9['endPrefixMapping'](yeuk_0);
            }dav63 || u3va['fatalError']('end tag name: ' + sm5qt + ' is not match the current start tagName:' + tq5mrp['tagName']);
          } else q5tms['push'](tq5mrp);n3auv++;break;case '?':
          $kyj0e && m7sqt(prmzc), n3auv = o_cpm85(_nv3yu, prmzc, ox4gf9);break;case '!':
          $kyj0e && m7sqt(prmzc), n3auv = o_unl3v_(_nv3yu, prmzc, ox4gf9, u3va);break;default:
          $kyj0e && m7sqt(prmzc);var ohx = new o_rphc(),
              _nu3e = q5tms[q5tms['length'] - 0x1]['currentNSMap'],
              n3auv = o_vd6a2l(_nv3yu, prmzc, ohx, _nu3e, $e0jy, u3va),
              _yn3u = ohx['length'];if (!ohx['closed'] && o_lu_nv(_nv3yu, n3auv, ohx['tagName'], ctprm5) && (ohx['closed'] = !0x0, rcz8mp['nbsp'] || u3va['warning']('unclosed xml attribute')), $kyj0e && _yn3u) {
            for (var j$yk0 = o_g4x9of($kyj0e, {}), ogbxh4 = 0x0; ogbxh4 < _yn3u; ogbxh4++) {
              var c5mrtp = ohx[ogbxh4];m7sqt(c5mrtp['offset']), c5mrtp['locator'] = o_g4x9of($kyj0e, {});
            }ox4gf9['locator'] = j$yk0, o_lvu3n(ohx, ox4gf9, _nu3e) && q5tms['push'](ohx), ox4gf9['locator'] = $kyj0e;
          } else o_lvu3n(ohx, ox4gf9, _nu3e) && q5tms['push'](ohx);'http://www.w3.org/1999/xhtml' !== ohx['uri'] || ohx['closed'] ? n3auv++ : n3auv = o_kye_u(_nv3yu, n3auv, ohx['tagName'], $e0jy, ox4gf9);}
    } catch (ohgzb4) {
      u3va['error']('element parse error: ' + ohgzb4), n3auv = -0x1;
    }uvn3_l < n3auv ? uvn3_l = n3auv : f4gw9x(Math['max'](prmzc, uvn3_l) + 0x1);
  }
}function o_g4x9of(eyk_n, obc8z) {
  return obc8z['lineNumber'] = eyk_n['lineNumber'], obc8z['columnNumber'] = eyk_n['columnNumber'], obc8z;
}function o_vd6a2l($yej, fxw4, l2i6, gb94ox, t5sq, oz4hb) {
  for (var qsm7t, zch8pb = ++fxw4, c8mpr = o_d6vl3a;;) {
    var wdi62 = $yej['charAt'](zch8pb);switch (wdi62) {case '=':
        if (c8mpr === o_widf2) qsm7t = $yej['slice'](fxw4, zch8pb), c8mpr = o_bzc8;else {
          if (c8mpr !== o_smqt7) throw new Error('attribute equal must after attrName');c8mpr = o_bzc8;
        }break;case '\x27':case '\x22':
        if (c8mpr === o_bzc8 || c8mpr === o_widf2) {
          if (c8mpr === o_widf2 && (oz4hb['warning']('attribute value must after "="'), qsm7t = $yej['slice'](fxw4, zch8pb)), !(0x0 < (zch8pb = $yej['indexOf'](wdi62, fxw4 = zch8pb + 0x1)))) throw new Error('attribute value no end \'' + wdi62 + '\' match');smtrq5 = $yej['slice'](fxw4, zch8pb)['replace'](/&#?\w+;/g, t5sq), l2i6['add'](qsm7t, smtrq5, fxw4 - 0x1), c8mpr = o_pt5rmq;
        } else {
          if (c8mpr != o_f21iw9) throw new Error('attribute value must after "="');smtrq5 = $yej['slice'](fxw4, zch8pb)['replace'](/&#?\w+;/g, t5sq), l2i6['add'](qsm7t, smtrq5, fxw4), oz4hb['warning']('attribute "' + qsm7t + '" missed start quot(' + wdi62 + ')!!'), fxw4 = zch8pb + 0x1, c8mpr = o_pt5rmq;
        }break;case '/':
        switch (c8mpr) {case o_d6vl3a:
            l2i6['setTagName']($yej['slice'](fxw4, zch8pb));case o_pt5rmq:case o_pcrzh:case o_zoc8b:
            c8mpr = o_zoc8b, l2i6['closed'] = !0x0;case o_f21iw9:case o_widf2:case o_smqt7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return oz4hb['error']('unexpected end of input'), c8mpr == o_d6vl3a && l2i6['setTagName']($yej['slice'](fxw4, zch8pb)), zch8pb;case '>':
        switch (c8mpr) {case o_d6vl3a:
            l2i6['setTagName']($yej['slice'](fxw4, zch8pb));case o_pt5rmq:case o_pcrzh:case o_zoc8b:
            break;case o_f21iw9:case o_widf2:
            '/' === (smtrq5 = $yej['slice'](fxw4, zch8pb))['slice'](-0x1) && (l2i6['closed'] = !0x0, smtrq5 = smtrq5['slice'](0x0, -0x1));case o_smqt7:
            c8mpr === o_smqt7 && (smtrq5 = qsm7t), c8mpr == o_f21iw9 ? (oz4hb['warning']('attribute "' + smtrq5 + '" missed quot(")!!'), l2i6['add'](qsm7t, smtrq5['replace'](/&#?\w+;/g, t5sq), fxw4)) : ('http://www.w3.org/1999/xhtml' === gb94ox[''] && smtrq5['match'](/^(?:disabled|checked|selected)$/i) || oz4hb['warning']('attribute "' + smtrq5 + '" missed value!! "' + smtrq5 + '" instead!!'), l2i6['add'](smtrq5, smtrq5, fxw4));break;case o_bzc8:
            throw new Error('attribute value missed!!');}return zch8pb;case '\u0080':
        wdi62 = '\x20';default:
        if (wdi62 <= '\x20') switch (c8mpr) {case o_d6vl3a:
            l2i6['setTagName']($yej['slice'](fxw4, zch8pb)), c8mpr = o_pcrzh;break;case o_widf2:
            qsm7t = $yej['slice'](fxw4, zch8pb), c8mpr = o_smqt7;break;case o_f21iw9:
            var smtrq5 = $yej['slice'](fxw4, zch8pb)['replace'](/&#?\w+;/g, t5sq);oz4hb['warning']('attribute "' + smtrq5 + '" missed quot(")!!'), l2i6['add'](qsm7t, smtrq5, fxw4);case o_pt5rmq:
            c8mpr = o_pcrzh;} else switch (c8mpr) {case o_smqt7:
            l2i6['tagName'], 'http://www.w3.org/1999/xhtml' === gb94ox[''] && qsm7t['match'](/^(?:disabled|checked|selected)$/i) || oz4hb['warning']('attribute "' + qsm7t + '" missed value!! "' + qsm7t + '" instead2!!'), l2i6['add'](qsm7t, qsm7t, fxw4), fxw4 = zch8pb, c8mpr = o_widf2;break;case o_pt5rmq:
            oz4hb['warning']('attribute space is required"' + qsm7t + '\x22!!');case o_pcrzh:
            c8mpr = o_widf2, fxw4 = zch8pb;break;case o_bzc8:
            c8mpr = o_f21iw9, fxw4 = zch8pb;break;case o_zoc8b:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zch8pb++;
  }
}function o_lvu3n(qrsm5t, nu_ye3, vlda3) {
  for (var rtq5 = qrsm5t['tagName'], _n3uvy = null, ualn3v = qrsm5t['length']; ualn3v--;) {
    var s5m7tq = qrsm5t[ualn3v],
        nuv3y = s5m7tq['qName'],
        gfo = s5m7tq['value'],
        mtp5;nuv3y = 0x0 < (v6ln3 = nuv3y['indexOf'](':')) ? (nu_l = s5m7tq['prefix'] = nuv3y['slice'](0x0, v6ln3), mtp5 = nuv3y['slice'](v6ln3 + 0x1), 'xmlns' === nu_l && mtp5) : (nu_l = null, 'xmlns' === (mtp5 = nuv3y) && ''), s5m7tq['localName'] = mtp5, !0x1 !== nuv3y && (null == _n3uvy && (_n3uvy = {}, o_ny_ue3(vlda3, vlda3 = {})), vlda3[nuv3y] = _n3uvy[nuv3y] = gfo, s5m7tq['uri'] = 'http://www.w3.org/2000/xmlns/', nu_ye3['startPrefixMapping'](nuv3y, gfo));
  }for (ualn3v = qrsm5t['length']; ualn3v--;) (nu_l = (s5m7tq = qrsm5t[ualn3v])['prefix']) && ('xml' === nu_l && (s5m7tq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nu_l && (s5m7tq['uri'] = vlda3[nu_l || '']));var v6ln3;mtp5 = 0x0 < (v6ln3 = rtq5['indexOf'](':')) ? (nu_l = qrsm5t['prefix'] = rtq5['slice'](0x0, v6ln3), qrsm5t['localName'] = rtq5['slice'](v6ln3 + 0x1)) : (nu_l = null, qrsm5t['localName'] = rtq5);var idw62 = qrsm5t['uri'] = vlda3[nu_l || ''];if (nu_ye3['startElement'](idw62, mtp5, rtq5, qrsm5t), !qrsm5t['closed']) return qrsm5t['currentNSMap'] = vlda3, qrsm5t['localNSMap'] = _n3uvy, !0x0;if (nu_ye3['endElement'](idw62, mtp5, rtq5), _n3uvy) {
    for (var nu_l in _n3uvy) nu_ye3['endPrefixMapping'](nu_l);
  }
}function o_kye_u(boxhg, fi1w2, k_ye0$, ye$k_0, x1w94f) {
  if (/^(?:script|textarea)$/i['test'](k_ye0$)) {
    var xf4gw9 = boxhg['indexOf']('</' + k_ye0$ + '>', fi1w2),
        boxhg = boxhg['substring'](fi1w2 + 0x1, xf4gw9);if (/[&<]/['test'](boxhg)) return (/^script$/i['test'](k_ye0$) || (boxhg = boxhg['replace'](/&#?\w+;/g, ye$k_0)), x1w94f['characters'](boxhg, 0x0, boxhg['length']), xf4gw9
    );
  }return fi1w2 + 0x1;
}function o_lu_nv(i9x1wf, rqmtp5, v3aunl, c58r) {
  var ne_3uy = c58r[v3aunl];return null == ne_3uy && ((ne_3uy = i9x1wf['lastIndexOf']('</' + v3aunl + '>')) < rqmtp5 && (ne_3uy = i9x1wf['lastIndexOf']('</' + v3aunl)), c58r[v3aunl] = ne_3uy), ne_3uy < rqmtp5;
}function o_ny_ue3(xbg94, rt5qpm) {
  for (var y_$e in xbg94) rt5qpm[y_$e] = xbg94[y_$e];
}function o_unl3v_(obxh, z8o, uyn_3, smt7) {
  var v63lad = obxh['charAt'](z8o + 0x2);if ('-' === v63lad) return '-' !== obxh['charAt'](z8o + 0x3) ? -0x1 : z8o < (e_ny = obxh['indexOf']('-->', z8o + 0x4)) ? (uyn_3['comment'](obxh, z8o + 0x4, e_ny - z8o - 0x4), e_ny + 0x3) : (smt7['error']('Unclosed comment'), -0x1);if ('CDATA[' == obxh['substr'](z8o + 0x3, 0x6)) {
    var e_ny = obxh['indexOf'](']]>', z8o + 0x9);return uyn_3['startCDATA'](), uyn_3['characters'](obxh, z8o + 0x9, e_ny - z8o - 0x9), uyn_3['endCDATA'](), e_ny + 0x3;
  }v63lad = o_oczbh(obxh, z8o), smt7 = v63lad['length'];if (0x1 < smt7 && /!doctype/i['test'](v63lad[0x0][0x0])) return e_ny = v63lad[0x1][0x0], obxh = 0x3 < smt7 && /^public$/i['test'](v63lad[0x2][0x0]) && v63lad[0x3][0x0], z8o = 0x4 < smt7 && v63lad[0x4][0x0], smt7 = v63lad[smt7 - 0x1], (uyn_3['startDTD'](e_ny, obxh && obxh['replace'](/^(['"])(.*?)\1$/, '$2'), z8o && z8o['replace'](/^(['"])(.*?)\1$/, '$2')), uyn_3['endDTD'](), smt7['index'] + smt7[0x0]['length']);return -0x1;
}function o_cpm85(rmpc5, uye3_, lida2) {
  var d1wi6 = rmpc5['indexOf']('?>', uye3_);if (d1wi6) return uye3_ = rmpc5['substring'](uye3_, d1wi6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), uye3_ ? (uye3_[0x0]['length'], lida2['processingInstruction'](uye3_[0x1], uye3_[0x2]), d1wi6 + 0x2) : -0x1;return -0x1;
}function o_rphc() {}function o_s5mqtr(zboc8h, b4gx) {
  return zboc8h['__proto__'] = b4gx, zboc8h;
}function o_oczbh(i2w1df, gobhz4) {
  var co8hzb,
      _y$ke = [],
      zh8rpc = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zh8rpc['lastIndex'] = gobhz4, zh8rpc['exec'](i2w1df); co8hzb = zh8rpc['exec'](i2w1df);) if (_y$ke['push'](co8hzb), co8hzb[0x1]) return _y$ke;
}var o_zrpcm8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_an3vu = new RegExp('[\\-\\.0-9' + o_zrpcm8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_y$e_0 = new RegExp('^' + o_zrpcm8['source'] + o_an3vu['source'] + '*(?::' + o_zrpcm8['source'] + o_an3vu['source'] + '*)?$'),
    o_d6vl3a = 0x0,
    o_widf2 = 0x1,
    o_smqt7 = 0x2,
    o_bzc8 = 0x3,
    o_f21iw9 = 0x4,
    o_pt5rmq = 0x5,
    o_pcrzh = 0x6,
    o_zoc8b = 0x7;o_chrp8['prototype'] = { 'parse': function (_k$, i21dw6, obh8cz) {
    var c8obz = this['domBuilder'];c8obz['startDocument'](), o_ny_ue3(i21dw6, i21dw6 = {}), o_yeun3_(_k$, i21dw6, obh8cz, c8obz, this['errorHandler']), c8obz['endDocument']();
  } }, o_rphc['prototype'] = { 'setTagName': function (xoh) {
    if (!o_y$e_0['test'](xoh)) throw new Error('invalid tagName:' + xoh);this['tagName'] = xoh;
  }, 'add': function (zh8bog, e_unyk, fi19w2) {
    if (!o_y$e_0['test'](zh8bog)) throw new Error('invalid attribute:' + zh8bog);this[this['length']++] = { 'qName': zh8bog, 'value': e_unyk, 'offset': fi19w2 };
  }, 'length': 0x0, 'getLocalName': function (k$0ejy) {
    return this[k$0ejy]['localName'];
  }, 'getLocator': function (knyu_) {
    return this[knyu_]['locator'];
  }, 'getQName': function (bhx4og) {
    return this[bhx4og]['qName'];
  }, 'getURI': function (vl3n6) {
    return this[vl3n6]['uri'];
  }, 'getValue': function (f941) {
    return this[f941]['value'];
  } }, o_s5mqtr({}, o_s5mqtr['prototype']) instanceof o_s5mqtr || (o_s5mqtr = function (oxf94g, l2d) {
  function d62va() {}for (l2d in d62va['prototype'] = l2d, d62va = new d62va(), oxf94g) d62va[l2d] = oxf94g[l2d];return d62va;
}), exports['XMLReader'] = o_chrp8;