var Q = wx.$v;
function vt1y_h() {}function vyhlz(n31_t, fo9i$s, hz_61y, n4_32, ca0mdj) {
  function s4$3o(vkx7p) {
    if (vkx7p > 0xffff) {
      vkx7p -= 0x10000;var o43nt$ = 0xd800 + (vkx7p >> 0xa),
          hz6yu = 0xdc00 + (0x3ff & vkx7p);return String['fromCharCode'](o43nt$, hz6yu);
    }return String['fromCharCode'](vkx7p);
  }function z8uelb(_z16) {
    var v7c5k = _z16['slice'](0x1, -0x1);return v7c5k in hz_61y ? hz_61y[v7c5k] : '#' === v7c5k['charAt'](0x0) ? s4$3o(parseInt(v7c5k['substr'](0x1)['replace']('x', '0x'))) : (ca0mdj['error']('entity not found:' + _z16), _z16);
  }function son4$(o43s$) {
    if (o43s$ > $4ns) {
      var y2h = n31_t['substring']($4ns, o43s$)['replace'](/&#?\w+;/g, z8uelb);vqgpx && pgwv($4ns), n4_32['characters'](y2h, 0x0, o43s$ - $4ns), $4ns = o43s$;
    }
  }function pgwv(_h26y, _ht12) {
    for (; _h26y >= d7m0ck && (_ht12 = uelb8z['exec'](n31_t));) m70dkc = _ht12['index'], d7m0ck = m70dkc + _ht12[0x0]['length'], vqgpx['lineNumber']++;vqgpx['columnNumber'] = _h26y - m70dkc + 0x1;
  }for (var m70dkc = 0x0, d7m0ck = 0x0, uelb8z = /.*(?:\r\n?|\n)|.*$/g, vqgpx = n4_32['locator'], o24nt = [{ 'currentNSMap': fo9i$s }], y8ulz6 = {}, $4ns = 0x0;;) {
    try {
      var g8wbq = n31_t['indexOf']('<', $4ns);if (0x0 > g8wbq) {
        if (!n31_t['substr']($4ns)['match'](/^\s*$/)) {
          var y1_h2t = n4_32['doc'],
              djc0km = y1_h2t['createTextNode'](n31_t['substr']($4ns));y1_h2t['appendChild'](djc0km), n4_32['currentElement'] = djc0km;
        }return;
      }switch (g8wbq > $4ns && son4$(g8wbq), n31_t['charAt'](g8wbq + 0x1)) {case '/':
          var ios9f$ = n31_t['indexOf']('>', g8wbq + 0x3),
              u6l8y = n31_t['substring'](g8wbq + 0x2, ios9f$),
              lze8ub = o24nt['pop']();0x0 > ios9f$ ? (u6l8y = n31_t['substring'](g8wbq + 0x2)['replace'](/[\s<].*/, ''), ca0mdj['error']('end tag name: ' + u6l8y + ' is not complete:' + lze8ub['tagName']), ios9f$ = g8wbq + 0x1 + u6l8y['length']) : u6l8y['match'](/\s</) && (u6l8y = u6l8y['replace'](/[\s<].*/, ''), ca0mdj['error']('end tag name: ' + u6l8y + ' maybe not complete'), ios9f$ = g8wbq + 0x1 + u6l8y['length']);var fs9$r = lze8ub['localNSMap'],
              ubz6l = lze8ub['tagName'] == u6l8y,
              _th1 = ubz6l || lze8ub['tagName'] && lze8ub['tagName']['toLowerCase']() == u6l8y['toLowerCase']();if (_th1) {
            if (n4_32['endElement'](lze8ub['uri'], lze8ub['localName'], u6l8y), fs9$r) {
              for (var _tn1h in fs9$r) n4_32['endPrefixMapping'](_tn1h);
            }ubz6l || ca0mdj['fatalError']('end tag name: ' + u6l8y + ' is not match the current start tagName:' + lze8ub['tagName']);
          } else o24nt['push'](lze8ub);ios9f$++;break;case '?':
          vqgpx && pgwv(g8wbq), ios9f$ = vo9f$s(n31_t, g8wbq, n4_32);break;case '!':
          vqgpx && pgwv(g8wbq), ios9f$ = vpx5(n31_t, g8wbq, n4_32, ca0mdj);break;default:
          vqgpx && pgwv(g8wbq);var rif9$s = new vl86(),
              fir$9 = o24nt[o24nt['length'] - 0x1]['currentNSMap'],
              ios9f$ = vsifo4(n31_t, g8wbq, rif9$s, fir$9, z8uelb, ca0mdj),
              uyl6z8 = rif9$s['length'];if (!rif9$s['closed'] && vwvpgxq(n31_t, ios9f$, rif9$s['tagName'], y8ulz6) && (rif9$s['closed'] = !0x0, hz_61y['nbsp'] || ca0mdj['warning']('unclosed xml attribute')), vqgpx && uyl6z8) {
            for (var qubw8e = voi43$(vqgpx, {}), c0mk7d = 0x0; uyl6z8 > c0mk7d; c0mk7d++) {
              var uebwq8 = rif9$s[c0mk7d];pgwv(uebwq8['offset']), uebwq8['locator'] = voi43$(vqgpx, {});
            }n4_32['locator'] = qubw8e, vz8ulb(rif9$s, n4_32, fir$9) && o24nt['push'](rif9$s), n4_32['locator'] = vqgpx;
          } else vz8ulb(rif9$s, n4_32, fir$9) && o24nt['push'](rif9$s);'http://www.w3.org/1999/xhtml' !== rif9$s['uri'] || rif9$s['closed'] ? ios9f$++ : ios9f$ = vpxwgqv(n31_t, ios9f$, rif9$s['tagName'], z8uelb, n4_32);}
    } catch (nt13_2) {
      ca0mdj['error']('element parse error: ' + nt13_2), ios9f$ = -0x1;
    }ios9f$ > $4ns ? $4ns = ios9f$ : son4$(Math['max'](g8wbq, $4ns) + 0x1);
  }
}function voi43$(on3t2, lu8e) {
  return lu8e['lineNumber'] = on3t2['lineNumber'], lu8e['columnNumber'] = on3t2['columnNumber'], lu8e;
}function vsifo4(adcj0, mcdk07, b8lzue, yzhlu6, i9$os, _n12) {
  for (var iof$s4, s3no4, r$si9 = ++mcdk07, buqew8 = vxegpqw;;) {
    var otn2 = adcj0['charAt'](r$si9);switch (otn2) {case '=':
        if (buqew8 === vt2y1h_) iof$s4 = adcj0['slice'](mcdk07, r$si9), buqew8 = vmjd0ck;else {
          if (buqew8 !== vi$sof4) throw new Error('attribute equal must after attrName');buqew8 = vmjd0ck;
        }break;case '\x27':case '\x22':
        if (buqew8 === vmjd0ck || buqew8 === vt2y1h_) {
          if (buqew8 === vt2y1h_ && (_n12['warning']('attribute value must after "="'), iof$s4 = adcj0['slice'](mcdk07, r$si9)), mcdk07 = r$si9 + 0x1, r$si9 = adcj0['indexOf'](otn2, mcdk07), !(r$si9 > 0x0)) throw new Error('attribute value no end \'' + otn2 + '\' match');s3no4 = adcj0['slice'](mcdk07, r$si9)['replace'](/&#?\w+;/g, i9$os), b8lzue['add'](iof$s4, s3no4, mcdk07 - 0x1), buqew8 = vxgq;
        } else {
          if (buqew8 != vhly1z) throw new Error('attribute value must after "="');s3no4 = adcj0['slice'](mcdk07, r$si9)['replace'](/&#?\w+;/g, i9$os), b8lzue['add'](iof$s4, s3no4, mcdk07), _n12['warning']('attribute "' + iof$s4 + '" missed start quot(' + otn2 + ')!!'), mcdk07 = r$si9 + 0x1, buqew8 = vxgq;
        }break;case '/':
        switch (buqew8) {case vxegpqw:
            b8lzue['setTagName'](adcj0['slice'](mcdk07, r$si9));case vxgq:case vwvgp5x:case va0jmc:
            buqew8 = va0jmc, b8lzue['closed'] = !0x0;case vhly1z:case vt2y1h_:case vi$sof4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _n12['error']('unexpected end of input'), buqew8 == vxegpqw && b8lzue['setTagName'](adcj0['slice'](mcdk07, r$si9)), r$si9;case '>':
        switch (buqew8) {case vxegpqw:
            b8lzue['setTagName'](adcj0['slice'](mcdk07, r$si9));case vxgq:case vwvgp5x:case va0jmc:
            break;case vhly1z:case vt2y1h_:
            s3no4 = adcj0['slice'](mcdk07, r$si9), '/' === s3no4['slice'](-0x1) && (b8lzue['closed'] = !0x0, s3no4 = s3no4['slice'](0x0, -0x1));case vi$sof4:
            buqew8 === vi$sof4 && (s3no4 = iof$s4), buqew8 == vhly1z ? (_n12['warning']('attribute "' + s3no4 + '" missed quot(")!!'), b8lzue['add'](iof$s4, s3no4['replace'](/&#?\w+;/g, i9$os), mcdk07)) : ('http://www.w3.org/1999/xhtml' === yzhlu6[''] && s3no4['match'](/^(?:disabled|checked|selected)$/i) || _n12['warning']('attribute "' + s3no4 + '" missed value!! "' + s3no4 + '" instead!!'), b8lzue['add'](s3no4, s3no4, mcdk07));break;case vmjd0ck:
            throw new Error('attribute value missed!!');}return r$si9;case '\u0080':
        otn2 = '\x20';default:
        if ('\x20' >= otn2) switch (buqew8) {case vxegpqw:
            b8lzue['setTagName'](adcj0['slice'](mcdk07, r$si9)), buqew8 = vwvgp5x;break;case vt2y1h_:
            iof$s4 = adcj0['slice'](mcdk07, r$si9), buqew8 = vi$sof4;break;case vhly1z:
            var s3no4 = adcj0['slice'](mcdk07, r$si9)['replace'](/&#?\w+;/g, i9$os);_n12['warning']('attribute "' + s3no4 + '" missed quot(")!!'), b8lzue['add'](iof$s4, s3no4, mcdk07);case vxgq:
            buqew8 = vwvgp5x;} else switch (buqew8) {case vi$sof4:
            {
              b8lzue['tagName'];
            }'http://www.w3.org/1999/xhtml' === yzhlu6[''] && iof$s4['match'](/^(?:disabled|checked|selected)$/i) || _n12['warning']('attribute "' + iof$s4 + '" missed value!! "' + iof$s4 + '" instead2!!'), b8lzue['add'](iof$s4, iof$s4, mcdk07), mcdk07 = r$si9, buqew8 = vt2y1h_;break;case vxgq:
            _n12['warning']('attribute space is required"' + iof$s4 + '\x22!!');case vwvgp5x:
            buqew8 = vt2y1h_, mcdk07 = r$si9;break;case vmjd0ck:
            buqew8 = vhly1z, mcdk07 = r$si9;break;case va0jmc:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}r$si9++;
  }
}function vz8ulb(bl8uz6, vc70k5, z6yuhl) {
  for (var _h2yt1 = bl8uz6['tagName'], n2_t1h = null, xwg5pv = bl8uz6['length']; xwg5pv--;) {
    var on$43s = bl8uz6[xwg5pv],
        v7xg5p = on$43s['qName'],
        l8zbe = on$43s['value'],
        jcmda0 = v7xg5p['indexOf'](':');if (jcmda0 > 0x0) var so3n$ = on$43s['prefix'] = v7xg5p['slice'](0x0, jcmda0),
        kv70p = v7xg5p['slice'](jcmda0 + 0x1),
        _1n2th = 'xmlns' === so3n$ && kv70p;else kv70p = v7xg5p, so3n$ = null, _1n2th = 'xmlns' === v7xg5p && '';on$43s['localName'] = kv70p, _1n2th !== !0x1 && (null == n2_t1h && (n2_t1h = {}, v_hzy61(z6yuhl, z6yuhl = {})), z6yuhl[_1n2th] = n2_t1h[_1n2th] = l8zbe, on$43s['uri'] = 'http://www.w3.org/2000/xmlns/', vc70k5['startPrefixMapping'](_1n2th, l8zbe));
  }for (var xwg5pv = bl8uz6['length']; xwg5pv--;) {
    on$43s = bl8uz6[xwg5pv];var so3n$ = on$43s['prefix'];so3n$ && ('xml' === so3n$ && (on$43s['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== so3n$ && (on$43s['uri'] = z6yuhl[so3n$ || '']));
  }var jcmda0 = _h2yt1['indexOf'](':');jcmda0 > 0x0 ? (so3n$ = bl8uz6['prefix'] = _h2yt1['slice'](0x0, jcmda0), kv70p = bl8uz6['localName'] = _h2yt1['slice'](jcmda0 + 0x1)) : (so3n$ = null, kv70p = bl8uz6['localName'] = _h2yt1);var jd0ac = bl8uz6['uri'] = z6yuhl[so3n$ || ''];if (vc70k5['startElement'](jd0ac, kv70p, _h2yt1, bl8uz6), !bl8uz6['closed']) return bl8uz6['currentNSMap'] = z6yuhl, bl8uz6['localNSMap'] = n2_t1h, !0x0;if (vc70k5['endElement'](jd0ac, kv70p, _h2yt1), n2_t1h) {
    for (so3n$ in n2_t1h) vc70k5['endPrefixMapping'](so3n$);
  }
}function vpxwgqv(xwgep, $ir9fs, kp075, t32n4_, da0mcj) {
  if (/^(?:script|textarea)$/i['test'](kp075)) {
    var fois$4 = xwgep['indexOf']('</' + kp075 + '>', $ir9fs),
        y1hz6_ = xwgep['substring']($ir9fs + 0x1, fois$4);if (/[&<]/['test'](y1hz6_)) return (/^script$/i['test'](kp075) ? (da0mcj['characters'](y1hz6_, 0x0, y1hz6_['length']), fois$4) : (y1hz6_ = y1hz6_['replace'](/&#?\w+;/g, t32n4_), da0mcj['characters'](y1hz6_, 0x0, y1hz6_['length']), fois$4)
    );
  }return $ir9fs + 0x1;
}function vwvpgxq(o4n23, xqvwpg, t$3no, bexqw) {
  var n3to2 = bexqw[t$3no];return null == n3to2 && (n3to2 = o4n23['lastIndexOf']('</' + t$3no + '>'), xqvwpg > n3to2 && (n3to2 = o4n23['lastIndexOf']('</' + t$3no)), bexqw[t$3no] = n3to2), xqvwpg > n3to2;
}function v_hzy61(s3n, hz6yl1) {
  for (var jcdm0 in s3n) hz6yl1[jcdm0] = s3n[jcdm0];
}function vpx5(z8yu6l, hyzl16, i43so$, e8zlbu) {
  var s9$ifr = z8yu6l['charAt'](hyzl16 + 0x2);switch (s9$ifr) {case '-':
      if ('-' === z8yu6l['charAt'](hyzl16 + 0x3)) {
        var to4n3 = z8yu6l['indexOf']('-->', hyzl16 + 0x4);return to4n3 > hyzl16 ? (i43so$['comment'](z8yu6l, hyzl16 + 0x4, to4n3 - hyzl16 - 0x4), to4n3 + 0x3) : (e8zlbu['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == z8yu6l['substr'](hyzl16 + 0x3, 0x6)) {
        var to4n3 = z8yu6l['indexOf'](']]>', hyzl16 + 0x9);return i43so$['startCDATA'](), i43so$['characters'](z8yu6l, hyzl16 + 0x9, to4n3 - hyzl16 - 0x9), i43so$['endCDATA'](), to4n3 + 0x3;
      }var ble8u = vebgw8q(z8yu6l, hyzl16),
          c7km5 = ble8u['length'];if (c7km5 > 0x1 && /!doctype/i['test'](ble8u[0x0][0x0])) {
        var s4$fio = ble8u[0x1][0x0],
            oi4s3 = c7km5 > 0x3 && /^public$/i['test'](ble8u[0x2][0x0]) && ble8u[0x3][0x0],
            $9sifr = c7km5 > 0x4 && ble8u[0x4][0x0],
            sofi9$ = ble8u[c7km5 - 0x1];return i43so$['startDTD'](s4$fio, oi4s3 && oi4s3['replace'](/^(['"])(.*?)\1$/, '$2'), $9sifr && $9sifr['replace'](/^(['"])(.*?)\1$/, '$2')), i43so$['endDTD'](), sofi9$['index'] + sofi9$[0x0]['length'];
      }}return -0x1;
}function vo9f$s(_312nt, ebuq, cm07k5) {
  var $o4nt = _312nt['indexOf']('?>', ebuq);if ($o4nt) {
    var z68lb = _312nt['substring'](ebuq, $o4nt)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (z68lb) {
      {
        z68lb[0x0]['length'];
      }return cm07k5['processingInstruction'](z68lb[0x1], z68lb[0x2]), $o4nt + 0x2;
    }return -0x1;
  }return -0x1;
}function vl86() {}function vs$on3(jdmkc, rfi$s9) {
  return jdmkc['__proto__'] = rfi$s9, jdmkc;
}function vebgw8q(mj0d, $ot34n) {
  var io34s,
      pqxgwv = [],
      mk7cd0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (mk7cd0['lastIndex'] = $ot34n, mk7cd0['exec'](mj0d); io34s = mk7cd0['exec'](mj0d);) if (pqxgwv['push'](io34s), io34s[0x1]) return pqxgwv;
}var von4$3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vs43o$i = new RegExp('[\\-\\.0-9' + von4$3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vwqgeb = new RegExp('^' + von4$3['source'] + vs43o$i['source'] + '*(?::' + von4$3['source'] + vs43o$i['source'] + '*)?$'),
    vxegpqw = 0x0,
    vt2y1h_ = 0x1,
    vi$sof4 = 0x2,
    vmjd0ck = 0x3,
    vhly1z = 0x4,
    vxgq = 0x5,
    vwvgp5x = 0x6,
    va0jmc = 0x7;vt1y_h['prototype'] = { 'parse': function (mdcj0, xgwvq, osf9$) {
    var bu8lze = this['domBuilder'];bu8lze['startDocument'](), v_hzy61(xgwvq, xgwvq = {}), vyhlz(mdcj0, xgwvq, osf9$, bu8lze, this['errorHandler']), bu8lze['endDocument']();
  } }, vl86['prototype'] = { 'setTagName': function (dcm0ja) {
    if (!vwqgeb['test'](dcm0ja)) throw new Error('invalid tagName:' + dcm0ja);this['tagName'] = dcm0ja;
  }, 'add': function (y1_h6, k750mc, qbwg) {
    if (!vwqgeb['test'](y1_h6)) throw new Error('invalid attribute:' + y1_h6);this[this['length']++] = { 'qName': y1_h6, 'value': k750mc, 'offset': qbwg };
  }, 'length': 0x0, 'getLocalName': function (jmckd) {
    return this[jmckd]['localName'];
  }, 'getLocator': function (g8qwb) {
    return this[g8qwb]['locator'];
  }, 'getQName': function (epxwqg) {
    return this[epxwqg]['qName'];
  }, 'getURI': function (j0dmck) {
    return this[j0dmck]['uri'];
  }, 'getValue': function (lz8yu6) {
    return this[lz8yu6]['value'];
  } }, vs$on3({}, vs$on3['prototype']) instanceof vs$on3 || (vs$on3 = function (hyz1, xqgwep) {
  function i4sfo() {}i4sfo['prototype'] = xqgwep, i4sfo = new i4sfo();for (xqgwep in hyz1) i4sfo[xqgwep] = hyz1[xqgwep];return i4sfo;
}), exports['XMLReader'] = vt1y_h;