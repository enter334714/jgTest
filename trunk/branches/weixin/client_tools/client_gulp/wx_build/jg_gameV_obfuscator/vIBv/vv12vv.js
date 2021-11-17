var Q = wx.$v;
function vl497b3() {}function v_q1e$i(kdx, op8jy, ot8ycj, kw$f5v, i_qe0) {
  function dvwfk(bl7s) {
    if (bl7s > 0xffff) {
      bl7s -= 0x10000;var wf5$v = 0xd800 + (bl7s >> 0xa),
          wk5q$f = 0xdc00 + (0x3ff & bl7s);return String['fromCharCode'](wf5$v, wk5q$f);
    }return String['fromCharCode'](bl7s);
  }function nui1(dxgwv5) {
    var b973l = dxgwv5['slice'](0x1, -0x1);return b973l in ot8ycj ? ot8ycj[b973l] : '#' === b973l['charAt'](0x0) ? dvwfk(parseInt(b973l['substr'](0x1)['replace']('x', '0x'))) : (i_qe0['error']('entity not found:' + dxgwv5), dxgwv5);
  }function rzn0u6($kf5vw) {
    if ($kf5vw > r0uzi) {
      var a6b7l4 = kdx['substring'](r0uzi, $kf5vw)['replace'](/&#?\w+;/g, nui1);dxkvw5 && xdw5g(r0uzi), kw$f5v['characters'](a6b7l4, 0x0, $kf5vw - r0uzi), r0uzi = $kf5vw;
    }
  }function xdw5g(fwq$k5, f_k) {
    for (; fwq$k5 >= z4u && (f_k = kwfv['exec'](kdx));) e$qkf_ = f_k['index'], z4u = e$qkf_ + f_k[0x0]['length'], dxkvw5['lineNumber']++;dxkvw5['columnNumber'] = fwq$k5 - e$qkf_ + 0x1;
  }for (var e$qkf_ = 0x0, z4u = 0x0, kwfv = /.*(?:\r\n?|\n)|.*$/g, dxkvw5 = kw$f5v['locator'], h8pojy = [{ 'currentNSMap': op8jy }], f5vk = {}, r0uzi = 0x0;;) {
    try {
      var j2stcm = kdx['indexOf']('<', r0uzi);if (0x0 > j2stcm) {
        if (!kdx['substr'](r0uzi)['match'](/^\s*$/)) {
          var lza4 = kw$f5v['doc'],
              u1ni = lza4['createTextNode'](kdx['substr'](r0uzi));lza4['appendChild'](u1ni), kw$f5v['currentElement'] = u1ni;
        }return;
      }switch (j2stcm > r0uzi && rzn0u6(j2stcm), kdx['charAt'](j2stcm + 0x1)) {case '/':
          var t32sm = kdx['indexOf']('>', j2stcm + 0x3),
              q$1_ = kdx['substring'](j2stcm + 0x2, t32sm),
              ru6nz = h8pojy['pop']();0x0 > t32sm ? (q$1_ = kdx['substring'](j2stcm + 0x2)['replace'](/[\s<].*/, ''), i_qe0['error']('end tag name: ' + q$1_ + ' is not complete:' + ru6nz['tagName']), t32sm = j2stcm + 0x1 + q$1_['length']) : q$1_['match'](/\s</) && (q$1_ = q$1_['replace'](/[\s<].*/, ''), i_qe0['error']('end tag name: ' + q$1_ + ' maybe not complete'), t32sm = j2stcm + 0x1 + q$1_['length']);var f1e_q = ru6nz['localNSMap'],
              zn0ru = ru6nz['tagName'] == q$1_,
              n6abz = zn0ru || ru6nz['tagName'] && ru6nz['tagName']['toLowerCase']() == q$1_['toLowerCase']();if (n6abz) {
            if (kw$f5v['endElement'](ru6nz['uri'], ru6nz['localName'], q$1_), f1e_q) {
              for (var r6z in f1e_q) kw$f5v['endPrefixMapping'](r6z);
            }zn0ru || i_qe0['fatalError']('end tag name: ' + q$1_ + ' is not match the current start tagName:' + ru6nz['tagName']);
          } else h8pojy['push'](ru6nz);t32sm++;break;case '?':
          dxkvw5 && xdw5g(j2stcm), t32sm = vm2s79(kdx, j2stcm, kw$f5v);break;case '!':
          dxkvw5 && xdw5g(j2stcm), t32sm = v$wqf(kdx, j2stcm, kw$f5v, i_qe0);break;default:
          dxkvw5 && xdw5g(j2stcm);var qk5e$ = new vqei$_(),
              lb97 = h8pojy[h8pojy['length'] - 0x1]['currentNSMap'],
              t32sm = vfq$5ke(kdx, j2stcm, qk5e$, lb97, nui1, i_qe0),
              $w5qkf = qk5e$['length'];if (!qk5e$['closed'] && vvkw5$f(kdx, t32sm, qk5e$['tagName'], f5vk) && (qk5e$['closed'] = !0x0, ot8ycj['nbsp'] || i_qe0['warning']('unclosed xml attribute')), dxkvw5 && $w5qkf) {
            for (var ab9l74 = vtj2cm(dxkvw5, {}), stm392 = 0x0; $w5qkf > stm392; stm392++) {
              var wf5q = qk5e$[stm392];xdw5g(wf5q['offset']), wf5q['locator'] = vtj2cm(dxkvw5, {});
            }kw$f5v['locator'] = ab9l74, vnr1i0u(qk5e$, kw$f5v, lb97) && h8pojy['push'](qk5e$), kw$f5v['locator'] = dxkvw5;
          } else vnr1i0u(qk5e$, kw$f5v, lb97) && h8pojy['push'](qk5e$);'http://www.w3.org/1999/xhtml' !== qk5e$['uri'] || qk5e$['closed'] ? t32sm++ : t32sm = vq$ek_f(kdx, t32sm, qk5e$['tagName'], nui1, kw$f5v);}
    } catch (k$wfq) {
      i_qe0['error']('element parse error: ' + k$wfq), t32sm = -0x1;
    }t32sm > r0uzi ? r0uzi = t32sm : rzn0u6(Math['max'](j2stcm, r0uzi) + 0x1);
  }
}function vtj2cm(_10, znab4) {
  return znab4['lineNumber'] = _10['lineNumber'], znab4['columnNumber'] = _10['columnNumber'], znab4;
}function vfq$5ke(vxkd, nu4, _qf$, m327s, r01, z6la4) {
  for (var rniu01, q$e5fk, b3l7 = ++nu4, rei1 = vjt8co2;;) {
    var fvd5kw = vxkd['charAt'](b3l7);switch (fvd5kw) {case '=':
        if (rei1 === vz64nb) rniu01 = vxkd['slice'](nu4, b3l7), rei1 = van6z4;else {
          if (rei1 !== vb9l4) throw new Error('attribute equal must after attrName');rei1 = van6z4;
        }break;case '\x27':case '\x22':
        if (rei1 === van6z4 || rei1 === vz64nb) {
          if (rei1 === vz64nb && (z6la4['warning']('attribute value must after "="'), rniu01 = vxkd['slice'](nu4, b3l7)), nu4 = b3l7 + 0x1, b3l7 = vxkd['indexOf'](fvd5kw, nu4), !(b3l7 > 0x0)) throw new Error('attribute value no end \'' + fvd5kw + '\' match');q$e5fk = vxkd['slice'](nu4, b3l7)['replace'](/&#?\w+;/g, r01), _qf$['add'](rniu01, q$e5fk, nu4 - 0x1), rei1 = vf1q$e_;
        } else {
          if (rei1 != vocj8yt) throw new Error('attribute value must after "="');q$e5fk = vxkd['slice'](nu4, b3l7)['replace'](/&#?\w+;/g, r01), _qf$['add'](rniu01, q$e5fk, nu4), z6la4['warning']('attribute "' + rniu01 + '" missed start quot(' + fvd5kw + ')!!'), nu4 = b3l7 + 0x1, rei1 = vf1q$e_;
        }break;case '/':
        switch (rei1) {case vjt8co2:
            _qf$['setTagName'](vxkd['slice'](nu4, b3l7));case vf1q$e_:case vau4zn6:case vd5wvkx:
            rei1 = vd5wvkx, _qf$['closed'] = !0x0;case vocj8yt:case vz64nb:case vb9l4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z6la4['error']('unexpected end of input'), rei1 == vjt8co2 && _qf$['setTagName'](vxkd['slice'](nu4, b3l7)), b3l7;case '>':
        switch (rei1) {case vjt8co2:
            _qf$['setTagName'](vxkd['slice'](nu4, b3l7));case vf1q$e_:case vau4zn6:case vd5wvkx:
            break;case vocj8yt:case vz64nb:
            q$e5fk = vxkd['slice'](nu4, b3l7), '/' === q$e5fk['slice'](-0x1) && (_qf$['closed'] = !0x0, q$e5fk = q$e5fk['slice'](0x0, -0x1));case vb9l4:
            rei1 === vb9l4 && (q$e5fk = rniu01), rei1 == vocj8yt ? (z6la4['warning']('attribute "' + q$e5fk + '" missed quot(")!!'), _qf$['add'](rniu01, q$e5fk['replace'](/&#?\w+;/g, r01), nu4)) : ('http://www.w3.org/1999/xhtml' === m327s[''] && q$e5fk['match'](/^(?:disabled|checked|selected)$/i) || z6la4['warning']('attribute "' + q$e5fk + '" missed value!! "' + q$e5fk + '" instead!!'), _qf$['add'](q$e5fk, q$e5fk, nu4));break;case van6z4:
            throw new Error('attribute value missed!!');}return b3l7;case '\u0080':
        fvd5kw = '\x20';default:
        if ('\x20' >= fvd5kw) switch (rei1) {case vjt8co2:
            _qf$['setTagName'](vxkd['slice'](nu4, b3l7)), rei1 = vau4zn6;break;case vz64nb:
            rniu01 = vxkd['slice'](nu4, b3l7), rei1 = vb9l4;break;case vocj8yt:
            var q$e5fk = vxkd['slice'](nu4, b3l7)['replace'](/&#?\w+;/g, r01);z6la4['warning']('attribute "' + q$e5fk + '" missed quot(")!!'), _qf$['add'](rniu01, q$e5fk, nu4);case vf1q$e_:
            rei1 = vau4zn6;} else switch (rei1) {case vb9l4:
            {
              _qf$['tagName'];
            }'http://www.w3.org/1999/xhtml' === m327s[''] && rniu01['match'](/^(?:disabled|checked|selected)$/i) || z6la4['warning']('attribute "' + rniu01 + '" missed value!! "' + rniu01 + '" instead2!!'), _qf$['add'](rniu01, rniu01, nu4), nu4 = b3l7, rei1 = vz64nb;break;case vf1q$e_:
            z6la4['warning']('attribute space is required"' + rniu01 + '\x22!!');case vau4zn6:
            rei1 = vz64nb, nu4 = b3l7;break;case van6z4:
            rei1 = vocj8yt, nu4 = b3l7;break;case vd5wvkx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}b3l7++;
  }
}function vnr1i0u(pj8h, fe1$q, e$fk) {
  for (var _0e1r = pj8h['tagName'], _r1ei = null, dvkf5 = pj8h['length']; dvkf5--;) {
    var tmc3s = pj8h[dvkf5],
        _0q1i = tmc3s['qName'],
        $efq5 = tmc3s['value'],
        f_1eq$ = _0q1i['indexOf'](':');if (f_1eq$ > 0x0) var _$qef = tmc3s['prefix'] = _0q1i['slice'](0x0, f_1eq$),
        eqk_f = _0q1i['slice'](f_1eq$ + 0x1),
        m2cstj = 'xmlns' === _$qef && eqk_f;else eqk_f = _0q1i, _$qef = null, m2cstj = 'xmlns' === _0q1i && '';tmc3s['localName'] = eqk_f, m2cstj !== !0x1 && (null == _r1ei && (_r1ei = {}, vi1n(e$fk, e$fk = {})), e$fk[m2cstj] = _r1ei[m2cstj] = $efq5, tmc3s['uri'] = 'http://www.w3.org/2000/xmlns/', fe1$q['startPrefixMapping'](m2cstj, $efq5));
  }for (var dvkf5 = pj8h['length']; dvkf5--;) {
    tmc3s = pj8h[dvkf5];var _$qef = tmc3s['prefix'];_$qef && ('xml' === _$qef && (tmc3s['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _$qef && (tmc3s['uri'] = e$fk[_$qef || '']));
  }var f_1eq$ = _0e1r['indexOf'](':');f_1eq$ > 0x0 ? (_$qef = pj8h['prefix'] = _0e1r['slice'](0x0, f_1eq$), eqk_f = pj8h['localName'] = _0e1r['slice'](f_1eq$ + 0x1)) : (_$qef = null, eqk_f = pj8h['localName'] = _0e1r);var f5v$ = pj8h['uri'] = e$fk[_$qef || ''];if (fe1$q['startElement'](f5v$, eqk_f, _0e1r, pj8h), !pj8h['closed']) return pj8h['currentNSMap'] = e$fk, pj8h['localNSMap'] = _r1ei, !0x0;if (fe1$q['endElement'](f5v$, eqk_f, _0e1r), _r1ei) {
    for (_$qef in _r1ei) fe1$q['endPrefixMapping'](_$qef);
  }
}function vq$ek_f(tco8, ot8j, _u01i, $kv, anz6b4) {
  if (/^(?:script|textarea)$/i['test'](_u01i)) {
    var jm28 = tco8['indexOf']('</' + _u01i + '>', ot8j),
        mct28j = tco8['substring'](ot8j + 0x1, jm28);if (/[&<]/['test'](mct28j)) return (/^script$/i['test'](_u01i) ? (anz6b4['characters'](mct28j, 0x0, mct28j['length']), jm28) : (mct28j = mct28j['replace'](/&#?\w+;/g, $kv), anz6b4['characters'](mct28j, 0x0, mct28j['length']), jm28)
    );
  }return ot8j + 0x1;
}function vvkw5$f($q_kef, octy, zrnau6, a4bn6) {
  var inru1 = a4bn6[zrnau6];return null == inru1 && (inru1 = $q_kef['lastIndexOf']('</' + zrnau6 + '>'), octy > inru1 && (inru1 = $q_kef['lastIndexOf']('</' + zrnau6)), a4bn6[zrnau6] = inru1), octy > inru1;
}function vi1n(cms3t2, k$q_) {
  for (var wvgx5d in cms3t2) k$q_[wvgx5d] = cms3t2[wvgx5d];
}function v$wqf(r_u10, f$wqk, v5wkx, v5kwf$) {
  var ab47l = r_u10['charAt'](f$wqk + 0x2);switch (ab47l) {case '-':
      if ('-' === r_u10['charAt'](f$wqk + 0x3)) {
        var sm2cjt = r_u10['indexOf']('-->', f$wqk + 0x4);return sm2cjt > f$wqk ? (v5wkx['comment'](r_u10, f$wqk + 0x4, sm2cjt - f$wqk - 0x4), sm2cjt + 0x3) : (v5kwf$['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == r_u10['substr'](f$wqk + 0x3, 0x6)) {
        var sm2cjt = r_u10['indexOf'](']]>', f$wqk + 0x9);return v5wkx['startCDATA'](), v5wkx['characters'](r_u10, f$wqk + 0x9, sm2cjt - f$wqk - 0x9), v5wkx['endCDATA'](), sm2cjt + 0x3;
      }var u1in0r = vtm2cs(r_u10, f$wqk),
          e_q$i1 = u1in0r['length'];if (e_q$i1 > 0x1 && /!doctype/i['test'](u1in0r[0x0][0x0])) {
        var baz4n = u1in0r[0x1][0x0],
            u46zna = e_q$i1 > 0x3 && /^public$/i['test'](u1in0r[0x2][0x0]) && u1in0r[0x3][0x0],
            ocj28 = e_q$i1 > 0x4 && u1in0r[0x4][0x0],
            _qf$ke = u1in0r[e_q$i1 - 0x1];return v5wkx['startDTD'](baz4n, u46zna && u46zna['replace'](/^(['"])(.*?)\1$/, '$2'), ocj28 && ocj28['replace'](/^(['"])(.*?)\1$/, '$2')), v5wkx['endDTD'](), _qf$ke['index'] + _qf$ke[0x0]['length'];
      }}return -0x1;
}function vm2s79(s379m, $kqef5, fvdk) {
  var nr6 = s379m['indexOf']('?>', $kqef5);if (nr6) {
    var choj8y = s379m['substring']($kqef5, nr6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (choj8y) {
      {
        choj8y[0x0]['length'];
      }return fvdk['processingInstruction'](choj8y[0x1], choj8y[0x2]), nr6 + 0x2;
    }return -0x1;
  }return -0x1;
}function vqei$_() {}function vra6nz(r1i0un, msc2jt) {
  return r1i0un['__proto__'] = msc2jt, r1i0un;
}function vtm2cs(i$e1q, f5qke) {
  var h8joyp,
      mst29 = [],
      d5wgvx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (d5wgvx['lastIndex'] = f5qke, d5wgvx['exec'](i$e1q); h8joyp = d5wgvx['exec'](i$e1q);) if (mst29['push'](h8joyp), h8joyp[0x1]) return mst29;
}var vdkx = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vb764a = new RegExp('[\\-\\.0-9' + vdkx['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vdkw5x = new RegExp('^' + vdkx['source'] + vb764a['source'] + '*(?::' + vdkx['source'] + vb764a['source'] + '*)?$'),
    vjt8co2 = 0x0,
    vz64nb = 0x1,
    vb9l4 = 0x2,
    van6z4 = 0x3,
    vocj8yt = 0x4,
    vf1q$e_ = 0x5,
    vau4zn6 = 0x6,
    vd5wvkx = 0x7;vl497b3['prototype'] = { 'parse': function (wdx5k, ranzu6, l79b3s) {
    var za6nb4 = this['domBuilder'];za6nb4['startDocument'](), vi1n(ranzu6, ranzu6 = {}), v_q1e$i(wdx5k, ranzu6, l79b3s, za6nb4, this['errorHandler']), za6nb4['endDocument']();
  } }, vqei$_['prototype'] = { 'setTagName': function (e_0i1) {
    if (!vdkw5x['test'](e_0i1)) throw new Error('invalid tagName:' + e_0i1);this['tagName'] = e_0i1;
  }, 'add': function (vdf, c8toyj, x5wvdk) {
    if (!vdkw5x['test'](vdf)) throw new Error('invalid attribute:' + vdf);this[this['length']++] = { 'qName': vdf, 'value': c8toyj, 'offset': x5wvdk };
  }, 'length': 0x0, 'getLocalName': function (xg5dvw) {
    return this[xg5dvw]['localName'];
  }, 'getLocator': function (jpohy) {
    return this[jpohy]['locator'];
  }, 'getQName': function (ba64l7) {
    return this[ba64l7]['qName'];
  }, 'getURI': function (z4nab) {
    return this[z4nab]['uri'];
  }, 'getValue': function ($5keqf) {
    return this[$5keqf]['value'];
  } }, vra6nz({}, vra6nz['prototype']) instanceof vra6nz || (vra6nz = function (n46ab, iru10n) {
  function gvdw5() {}gvdw5['prototype'] = iru10n, gvdw5 = new gvdw5();for (iru10n in n46ab) gvdw5[iru10n] = n46ab[iru10n];return gvdw5;
}), exports['XMLReader'] = vl497b3;