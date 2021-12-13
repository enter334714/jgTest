var C = wx.$a;
function aj_9cmz() {}function ax2pboh(bpox82, dm4zj5, _scqr, rl0q$v, vq0$kl) {
  function m4ij5(j4mid5) {
    if (j4mid5 > 0xffff) {
      j4mid5 -= 0x10000;var v0$qlk = 0xd800 + (j4mid5 >> 0xa),
          xoh2pb = 0xdc00 + (0x3ff & j4mid5);return String['fromCharCode'](v0$qlk, xoh2pb);
    }return String['fromCharCode'](j4mid5);
  }function ihoxb(c_z9ms) {
    var b8xnp2 = c_z9ms['slice'](0x1, -0x1);return b8xnp2 in _scqr ? _scqr[b8xnp2] : '#' === b8xnp2['charAt'](0x0) ? m4ij5(parseInt(b8xnp2['substr'](0x1)['replace']('x', '0x'))) : (vq0$kl['error']('entity not found:' + c_z9ms), c_z9ms);
  }function s$rvcq(y6fu71) {
    if (y6fu71 > dtohi) {
      var c_m9j = bpox82['substring'](dtohi, y6fu71)['replace'](/&#?\w+;/g, ihoxb);k7fy16 && yk$f(dtohi), rl0q$v['characters'](c_m9j, 0x0, y6fu71 - dtohi), dtohi = y6fu71;
    }
  }function yk$f(d5tij4, boh) {
    for (; d5tij4 >= cj9z_ && (boh = rlqv$s['exec'](bpox82));) xpb28n = boh['index'], cj9z_ = xpb28n + boh[0x0]['length'], k7fy16['lineNumber']++;k7fy16['columnNumber'] = d5tij4 - xpb28n + 0x1;
  }for (var xpb28n = 0x0, cj9z_ = 0x0, rlqv$s = /.*(?:\r\n?|\n)|.*$/g, k7fy16 = rl0q$v['locator'], jz4_ = [{ 'currentNSMap': dm4zj5 }], z_4m9j = {}, dtohi = 0x0;;) {
    try {
      var sz_mc = bpox82['indexOf']('<', dtohi);if (0x0 > sz_mc) {
        if (!bpox82['substr'](dtohi)['match'](/^\s*$/)) {
          var b2pxo = rl0q$v['doc'],
              mj45dz = b2pxo['createTextNode'](bpox82['substr'](dtohi));b2pxo['appendChild'](mj45dz), rl0q$v['currentElement'] = mj45dz;
        }return;
      }switch (sz_mc > dtohi && s$rvcq(sz_mc), bpox82['charAt'](sz_mc + 0x1)) {case '/':
          var jzmd45 = bpox82['indexOf']('>', sz_mc + 0x3),
              zrcs9_ = bpox82['substring'](sz_mc + 0x2, jzmd45),
              iht5xo = jz4_['pop']();0x0 > jzmd45 ? (zrcs9_ = bpox82['substring'](sz_mc + 0x2)['replace'](/[\s<].*/, ''), vq0$kl['error']('end tag name: ' + zrcs9_ + ' is not complete:' + iht5xo['tagName']), jzmd45 = sz_mc + 0x1 + zrcs9_['length']) : zrcs9_['match'](/\s</) && (zrcs9_ = zrcs9_['replace'](/[\s<].*/, ''), vq0$kl['error']('end tag name: ' + zrcs9_ + ' maybe not complete'), jzmd45 = sz_mc + 0x1 + zrcs9_['length']);var npe38 = iht5xo['localNSMap'],
              todi5h = iht5xo['tagName'] == zrcs9_,
              kvfl$0 = todi5h || iht5xo['tagName'] && iht5xo['tagName']['toLowerCase']() == zrcs9_['toLowerCase']();if (kvfl$0) {
            if (rl0q$v['endElement'](iht5xo['uri'], iht5xo['localName'], zrcs9_), npe38) {
              for (var h4id5 in npe38) rl0q$v['endPrefixMapping'](h4id5);
            }todi5h || vq0$kl['fatalError']('end tag name: ' + zrcs9_ + ' is not match the current start tagName:' + iht5xo['tagName']);
          } else jz4_['push'](iht5xo);jzmd45++;break;case '?':
          k7fy16 && yk$f(sz_mc), jzmd45 = ae8p2nb(bpox82, sz_mc, rl0q$v);break;case '!':
          k7fy16 && yk$f(sz_mc), jzmd45 = adt(bpox82, sz_mc, rl0q$v, vq0$kl);break;default:
          k7fy16 && yk$f(sz_mc);var rqsc = new amdij54(),
              $v0rl = jz4_[jz4_['length'] - 0x1]['currentNSMap'],
              jzmd45 = asvqlr(bpox82, sz_mc, rqsc, $v0rl, ihoxb, vq0$kl),
              rv_s = rqsc['length'];if (!rqsc['closed'] && af0lkv(bpox82, jzmd45, rqsc['tagName'], z_4m9j) && (rqsc['closed'] = !0x0, _scqr['nbsp'] || vq0$kl['warning']('unclosed xml attribute')), k7fy16 && rv_s) {
            for (var jzm49_ = ae2pn83(k7fy16, {}), td4hi5 = 0x0; rv_s > td4hi5; td4hi5++) {
              var p8en3 = rqsc[td4hi5];yk$f(p8en3['offset']), p8en3['locator'] = ae2pn83(k7fy16, {});
            }rl0q$v['locator'] = jzm49_, axoh2(rqsc, rl0q$v, $v0rl) && jz4_['push'](rqsc), rl0q$v['locator'] = k7fy16;
          } else axoh2(rqsc, rl0q$v, $v0rl) && jz4_['push'](rqsc);'http://www.w3.org/1999/xhtml' !== rqsc['uri'] || rqsc['closed'] ? jzmd45++ : jzmd45 = aq$r0l(bpox82, jzmd45, rqsc['tagName'], ihoxb, rl0q$v);}
    } catch (otdh) {
      vq0$kl['error']('element parse error: ' + otdh), jzmd45 = -0x1;
    }jzmd45 > dtohi ? dtohi = jzmd45 : s$rvcq(Math['max'](sz_mc, dtohi) + 0x1);
  }
}function ae2pn83(qrcv, vrl0q) {
  return vrl0q['lineNumber'] = qrcv['lineNumber'], vrl0q['columnNumber'] = qrcv['columnNumber'], vrl0q;
}function asvqlr(di5j4, $lky, bxtoh, i45hd, cqsr9, mj94z) {
  for (var _r9csq, pbx2, itx5ho = ++$lky, _zcjm = avqrl$0;;) {
    var bxp2o8 = di5j4['charAt'](itx5ho);switch (bxp2o8) {case '=':
        if (_zcjm === ak6fly) _r9csq = di5j4['slice']($lky, itx5ho), _zcjm = aotixhb;else {
          if (_zcjm !== aiohdt5) throw new Error('attribute equal must after attrName');_zcjm = aotixhb;
        }break;case '\x27':case '\x22':
        if (_zcjm === aotixhb || _zcjm === ak6fly) {
          if (_zcjm === ak6fly && (mj94z['warning']('attribute value must after "="'), _r9csq = di5j4['slice']($lky, itx5ho)), $lky = itx5ho + 0x1, itx5ho = di5j4['indexOf'](bxp2o8, $lky), !(itx5ho > 0x0)) throw new Error('attribute value no end \'' + bxp2o8 + '\' match');pbx2 = di5j4['slice']($lky, itx5ho)['replace'](/&#?\w+;/g, cqsr9), bxtoh['add'](_r9csq, pbx2, $lky - 0x1), _zcjm = aim54j;
        } else {
          if (_zcjm != aoh5di) throw new Error('attribute value must after "="');pbx2 = di5j4['slice']($lky, itx5ho)['replace'](/&#?\w+;/g, cqsr9), bxtoh['add'](_r9csq, pbx2, $lky), mj94z['warning']('attribute "' + _r9csq + '" missed start quot(' + bxp2o8 + ')!!'), $lky = itx5ho + 0x1, _zcjm = aim54j;
        }break;case '/':
        switch (_zcjm) {case avqrl$0:
            bxtoh['setTagName'](di5j4['slice']($lky, itx5ho));case aim54j:case ai5otdh:case aij45:
            _zcjm = aij45, bxtoh['closed'] = !0x0;case aoh5di:case ak6fly:case aiohdt5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mj94z['error']('unexpected end of input'), _zcjm == avqrl$0 && bxtoh['setTagName'](di5j4['slice']($lky, itx5ho)), itx5ho;case '>':
        switch (_zcjm) {case avqrl$0:
            bxtoh['setTagName'](di5j4['slice']($lky, itx5ho));case aim54j:case ai5otdh:case aij45:
            break;case aoh5di:case ak6fly:
            pbx2 = di5j4['slice']($lky, itx5ho), '/' === pbx2['slice'](-0x1) && (bxtoh['closed'] = !0x0, pbx2 = pbx2['slice'](0x0, -0x1));case aiohdt5:
            _zcjm === aiohdt5 && (pbx2 = _r9csq), _zcjm == aoh5di ? (mj94z['warning']('attribute "' + pbx2 + '" missed quot(")!!'), bxtoh['add'](_r9csq, pbx2['replace'](/&#?\w+;/g, cqsr9), $lky)) : ('http://www.w3.org/1999/xhtml' === i45hd[''] && pbx2['match'](/^(?:disabled|checked|selected)$/i) || mj94z['warning']('attribute "' + pbx2 + '" missed value!! "' + pbx2 + '" instead!!'), bxtoh['add'](pbx2, pbx2, $lky));break;case aotixhb:
            throw new Error('attribute value missed!!');}return itx5ho;case '\u0080':
        bxp2o8 = '\x20';default:
        if ('\x20' >= bxp2o8) switch (_zcjm) {case avqrl$0:
            bxtoh['setTagName'](di5j4['slice']($lky, itx5ho)), _zcjm = ai5otdh;break;case ak6fly:
            _r9csq = di5j4['slice']($lky, itx5ho), _zcjm = aiohdt5;break;case aoh5di:
            var pbx2 = di5j4['slice']($lky, itx5ho)['replace'](/&#?\w+;/g, cqsr9);mj94z['warning']('attribute "' + pbx2 + '" missed quot(")!!'), bxtoh['add'](_r9csq, pbx2, $lky);case aim54j:
            _zcjm = ai5otdh;} else switch (_zcjm) {case aiohdt5:
            {
              bxtoh['tagName'];
            }'http://www.w3.org/1999/xhtml' === i45hd[''] && _r9csq['match'](/^(?:disabled|checked|selected)$/i) || mj94z['warning']('attribute "' + _r9csq + '" missed value!! "' + _r9csq + '" instead2!!'), bxtoh['add'](_r9csq, _r9csq, $lky), $lky = itx5ho, _zcjm = ak6fly;break;case aim54j:
            mj94z['warning']('attribute space is required"' + _r9csq + '\x22!!');case ai5otdh:
            _zcjm = ak6fly, $lky = itx5ho;break;case aotixhb:
            _zcjm = aoh5di, $lky = itx5ho;break;case aij45:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}itx5ho++;
  }
}function axoh2(zsc9m_, ihboxt, rls$vq) {
  for (var pbhx2o = zsc9m_['tagName'], _m9czj = null, oxbp8 = zsc9m_['length']; oxbp8--;) {
    var biot = zsc9m_[oxbp8],
        s$vl = biot['qName'],
        ylf0 = biot['value'],
        oi5dht = s$vl['indexOf'](':');if (oi5dht > 0x0) var v_scrq = biot['prefix'] = s$vl['slice'](0x0, oi5dht),
        _rcs9q = s$vl['slice'](oi5dht + 0x1),
        $yf = 'xmlns' === v_scrq && _rcs9q;else _rcs9q = s$vl, v_scrq = null, $yf = 'xmlns' === s$vl && '';biot['localName'] = _rcs9q, $yf !== !0x1 && (null == _m9czj && (_m9czj = {}, ac_rsq(rls$vq, rls$vq = {})), rls$vq[$yf] = _m9czj[$yf] = ylf0, biot['uri'] = 'http://www.w3.org/2000/xmlns/', ihboxt['startPrefixMapping']($yf, ylf0));
  }for (var oxbp8 = zsc9m_['length']; oxbp8--;) {
    biot = zsc9m_[oxbp8];var v_scrq = biot['prefix'];v_scrq && ('xml' === v_scrq && (biot['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== v_scrq && (biot['uri'] = rls$vq[v_scrq || '']));
  }var oi5dht = pbhx2o['indexOf'](':');oi5dht > 0x0 ? (v_scrq = zsc9m_['prefix'] = pbhx2o['slice'](0x0, oi5dht), _rcs9q = zsc9m_['localName'] = pbhx2o['slice'](oi5dht + 0x1)) : (v_scrq = null, _rcs9q = zsc9m_['localName'] = pbhx2o);var rv_sq = zsc9m_['uri'] = rls$vq[v_scrq || ''];if (ihboxt['startElement'](rv_sq, _rcs9q, pbhx2o, zsc9m_), !zsc9m_['closed']) return zsc9m_['currentNSMap'] = rls$vq, zsc9m_['localNSMap'] = _m9czj, !0x0;if (ihboxt['endElement'](rv_sq, _rcs9q, pbhx2o), _m9czj) {
    for (v_scrq in _m9czj) ihboxt['endPrefixMapping'](v_scrq);
  }
}function aq$r0l(f0k$l, f0vkl$, othid, qc$srv, qr$csv) {
  if (/^(?:script|textarea)$/i['test'](othid)) {
    var mzjc = f0k$l['indexOf']('</' + othid + '>', f0vkl$),
        b2ho = f0k$l['substring'](f0vkl$ + 0x1, mzjc);if (/[&<]/['test'](b2ho)) return (/^script$/i['test'](othid) ? (qr$csv['characters'](b2ho, 0x0, b2ho['length']), mzjc) : (b2ho = b2ho['replace'](/&#?\w+;/g, qc$srv), qr$csv['characters'](b2ho, 0x0, b2ho['length']), mzjc)
    );
  }return f0vkl$ + 0x1;
}function af0lkv(htbio, pxb8, kyf70, z9_src) {
  var q9sr_ = z9_src[kyf70];return null == q9sr_ && (q9sr_ = htbio['lastIndexOf']('</' + kyf70 + '>'), pxb8 > q9sr_ && (q9sr_ = htbio['lastIndexOf']('</' + kyf70)), z9_src[kyf70] = q9sr_), pxb8 > q9sr_;
}function ac_rsq(x2bh, x8b2n) {
  for (var rvl$ in x2bh) x8b2n[rvl$] = x2bh[rvl$];
}function adt(_z9csr, d5oiht, yl60fk, z94j) {
  var qc9s = _z9csr['charAt'](d5oiht + 0x2);switch (qc9s) {case '-':
      if ('-' === _z9csr['charAt'](d5oiht + 0x3)) {
        var $fl = _z9csr['indexOf']('-->', d5oiht + 0x4);return $fl > d5oiht ? (yl60fk['comment'](_z9csr, d5oiht + 0x4, $fl - d5oiht - 0x4), $fl + 0x3) : (z94j['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _z9csr['substr'](d5oiht + 0x3, 0x6)) {
        var $fl = _z9csr['indexOf'](']]>', d5oiht + 0x9);return yl60fk['startCDATA'](), yl60fk['characters'](_z9csr, d5oiht + 0x9, $fl - d5oiht - 0x9), yl60fk['endCDATA'](), $fl + 0x3;
      }var ykf1 = aj_cz9(_z9csr, d5oiht),
          c$svq = ykf1['length'];if (c$svq > 0x1 && /!doctype/i['test'](ykf1[0x0][0x0])) {
        var sqlr$v = ykf1[0x1][0x0],
            y$fl0 = c$svq > 0x3 && /^public$/i['test'](ykf1[0x2][0x0]) && ykf1[0x3][0x0],
            ng32e8 = c$svq > 0x4 && ykf1[0x4][0x0],
            j54dm = ykf1[c$svq - 0x1];return yl60fk['startDTD'](sqlr$v, y$fl0 && y$fl0['replace'](/^(['"])(.*?)\1$/, '$2'), ng32e8 && ng32e8['replace'](/^(['"])(.*?)\1$/, '$2')), yl60fk['endDTD'](), j54dm['index'] + j54dm[0x0]['length'];
      }}return -0x1;
}function ae8p2nb(xp2bo8, e2n8g, p82nx) {
  var xo5tih = xp2bo8['indexOf']('?>', e2n8g);if (xo5tih) {
    var wu16y = xp2bo8['substring'](e2n8g, xo5tih)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (wu16y) {
      {
        wu16y[0x0]['length'];
      }return p82nx['processingInstruction'](wu16y[0x1], wu16y[0x2]), xo5tih + 0x2;
    }return -0x1;
  }return -0x1;
}function amdij54() {}function am9_jz4(rs$qv, mjd4) {
  return rs$qv['__proto__'] = mjd4, rs$qv;
}function aj_cz9(xitbo, e8n2p) {
  var btpoh,
      s9rqc_ = [],
      h2 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (h2['lastIndex'] = e8n2p, h2['exec'](xitbo); btpoh = h2['exec'](xitbo);) if (s9rqc_['push'](btpoh), btpoh[0x1]) return s9rqc_;
}var ae38ng2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ap3ne8 = new RegExp('[\\-\\.0-9' + ae38ng2['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    abphox = new RegExp('^' + ae38ng2['source'] + ap3ne8['source'] + '*(?::' + ae38ng2['source'] + ap3ne8['source'] + '*)?$'),
    avqrl$0 = 0x0,
    ak6fly = 0x1,
    aiohdt5 = 0x2,
    aotixhb = 0x3,
    aoh5di = 0x4,
    aim54j = 0x5,
    ai5otdh = 0x6,
    aij45 = 0x7;aj_9cmz['prototype'] = { 'parse': function (bxo2ph, lq$sr, ihb) {
    var d45hti = this['domBuilder'];d45hti['startDocument'](), ac_rsq(lq$sr, lq$sr = {}), ax2pboh(bxo2ph, lq$sr, ihb, d45hti, this['errorHandler']), d45hti['endDocument']();
  } }, amdij54['prototype'] = { 'setTagName': function (rlv$0q) {
    if (!abphox['test'](rlv$0q)) throw new Error('invalid tagName:' + rlv$0q);this['tagName'] = rlv$0q;
  }, 'add': function (jzdm9, sqvc$, w6y) {
    if (!abphox['test'](jzdm9)) throw new Error('invalid attribute:' + jzdm9);this[this['length']++] = { 'qName': jzdm9, 'value': sqvc$, 'offset': w6y };
  }, 'length': 0x0, 'getLocalName': function (e82gn) {
    return this[e82gn]['localName'];
  }, 'getLocator': function (p38en2) {
    return this[p38en2]['locator'];
  }, 'getQName': function (srv_cq) {
    return this[srv_cq]['qName'];
  }, 'getURI': function (f6y17) {
    return this[f6y17]['uri'];
  }, 'getValue': function (dthoi5) {
    return this[dthoi5]['value'];
  } }, am9_jz4({}, am9_jz4['prototype']) instanceof am9_jz4 || (am9_jz4 = function (pb8ox2, fly$) {
  function htid() {}htid['prototype'] = fly$, htid = new htid();for (fly$ in pb8ox2) htid[fly$] = pb8ox2[fly$];return htid;
}), exports['XMLReader'] = aj_9cmz;