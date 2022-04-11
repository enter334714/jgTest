var G = wx.$G;
function abxntzm() {}function av67lak(u1o0, k5f4, xcyh2, fkv57a, zbrs) {
  function tbnzs(zxbmn) {
    if (zxbmn > 0xffff) {
      zxbmn -= 0x10000;var ql83e6 = 0xd800 + (zxbmn >> 0xa),
          ntzs = 0xdc00 + (0x3ff & zxbmn);return String['fromCharCode'](ql83e6, ntzs);
    }return String['fromCharCode'](zxbmn);
  }function cyjih2(yixtnb) {
    var zmbtns = yixtnb['slice'](0x1, -0x1);return zmbtns in xcyh2 ? xcyh2[zmbtns] : '#' === zmbtns['charAt'](0x0) ? tbnzs(parseInt(zmbtns['substr'](0x1)['replace']('x', '0x'))) : (zbrs['error']('entity not found:' + yixtnb), yixtnb);
  }function $s_mzr(mrsb) {
    if (mrsb > ouw01p) {
      var xytbni = u1o0['substring'](ouw01p, mrsb)['replace'](/&#?\w+;/g, cyjih2);w9u10p && x2i(ouw01p), fkv57a['characters'](xytbni, 0x0, mrsb - ouw01p), ouw01p = mrsb;
    }
  }function x2i(wpo0u, va45kf) {
    for (; wpo0u >= l8q3 && (va45kf = szr$_m['exec'](u1o0));) inytxb = va45kf['index'], l8q3 = inytxb + va45kf[0x0]['length'], w9u10p['lineNumber']++;w9u10p['columnNumber'] = wpo0u - inytxb + 0x1;
  }for (var inytxb = 0x0, l8q3 = 0x0, szr$_m = /.*(?:\r\n?|\n)|.*$/g, w9u10p = fkv57a['locator'], bmsznr = [{ 'currentNSMap': k5f4 }], d5uo = {}, ouw01p = 0x0;;) {
    try {
      var rsn_ = u1o0['indexOf']('<', ouw01p);if (0x0 > rsn_) {
        if (!u1o0['substr'](ouw01p)['match'](/^\s*$/)) {
          var d5of4 = fkv57a['doc'],
              w1d4ou = d5of4['createTextNode'](u1o0['substr'](ouw01p));d5of4['appendChild'](w1d4ou), fkv57a['currentElement'] = w1d4ou;
        }return;
      }switch (rsn_ > ouw01p && $s_mzr(rsn_), u1o0['charAt'](rsn_ + 0x1)) {case '/':
          var rem_$s = u1o0['indexOf']('>', rsn_ + 0x3),
              nm_rz = u1o0['substring'](rsn_ + 0x2, rem_$s),
              btxyih = bmsznr['pop']();0x0 > rem_$s ? (nm_rz = u1o0['substring'](rsn_ + 0x2)['replace'](/[\s<].*/, ''), zbrs['error']('end tag name: ' + nm_rz + ' is not complete:' + btxyih['tagName']), rem_$s = rsn_ + 0x1 + nm_rz['length']) : nm_rz['match'](/\s</) && (nm_rz = nm_rz['replace'](/[\s<].*/, ''), zbrs['error']('end tag name: ' + nm_rz + ' maybe not complete'), rem_$s = rsn_ + 0x1 + nm_rz['length']);var $esm_ = btxyih['localNSMap'],
              stmbn = btxyih['tagName'] == nm_rz,
              txyh2i = stmbn || btxyih['tagName'] && btxyih['tagName']['toLowerCase']() == nm_rz['toLowerCase']();if (txyh2i) {
            if (fkv57a['endElement'](btxyih['uri'], btxyih['localName'], nm_rz), $esm_) {
              for (var l6q873 in $esm_) fkv57a['endPrefixMapping'](l6q873);
            }stmbn || zbrs['fatalError']('end tag name: ' + nm_rz + ' is not match the current start tagName:' + btxyih['tagName']);
          } else bmsznr['push'](btxyih);rem_$s++;break;case '?':
          w9u10p && x2i(rsn_), rem_$s = aitzx(u1o0, rsn_, fkv57a);break;case '!':
          w9u10p && x2i(rsn_), rem_$s = abyix(u1o0, rsn_, fkv57a, zbrs);break;default:
          w9u10p && x2i(rsn_);var n_zr = new a_qe8$(),
              w1u = bmsznr[bmsznr['length'] - 0x1]['currentNSMap'],
              rem_$s = abztin(u1o0, rsn_, n_zr, w1u, cyjih2, zbrs),
              $e_qs = n_zr['length'];if (!n_zr['closed'] && awuo0p1(u1o0, rem_$s, n_zr['tagName'], d5uo) && (n_zr['closed'] = !0x0, xcyh2['nbsp'] || zbrs['warning']('unclosed xml attribute')), w9u10p && $e_qs) {
            for (var ynbxi = a_qr3$e(w9u10p, {}), e$_qr3 = 0x0; $e_qs > e$_qr3; e$_qr3++) {
              var znmst = n_zr[e$_qr3];x2i(znmst['offset']), znmst['locator'] = a_qr3$e(w9u10p, {});
            }fkv57a['locator'] = ynbxi, azsrmn_(n_zr, fkv57a, w1u) && bmsznr['push'](n_zr), fkv57a['locator'] = w9u10p;
          } else azsrmn_(n_zr, fkv57a, w1u) && bmsznr['push'](n_zr);'http://www.w3.org/1999/xhtml' !== n_zr['uri'] || n_zr['closed'] ? rem_$s++ : rem_$s = aav4fk5(u1o0, rem_$s, n_zr['tagName'], cyjih2, fkv57a);}
    } catch (_rmes) {
      zbrs['error']('element parse error: ' + _rmes), rem_$s = -0x1;
    }rem_$s > ouw01p ? ouw01p = rem_$s : $s_mzr(Math['max'](rsn_, ouw01p) + 0x1);
  }
}function a_qr3$e(p0ouw, ybhxti) {
  return ybhxti['lineNumber'] = p0ouw['lineNumber'], ybhxti['columnNumber'] = p0ouw['columnNumber'], ybhxti;
}function abztin(iznbx, do5uf, r_3e, p0w9, ak675, ynxb) {
  for (var zxtn, $mres_, _zsrmn = ++do5uf, ntyibx = ao4uf1;;) {
    var lq3876 = iznbx['charAt'](_zsrmn);switch (lq3876) {case '=':
        if (ntyibx === ap1w0o) zxtn = iznbx['slice'](do5uf, _zsrmn), ntyibx = an_mr;else {
          if (ntyibx !== aszbmtn) throw new Error('attribute equal must after attrName');ntyibx = an_mr;
        }break;case '\x27':case '\x22':
        if (ntyibx === an_mr || ntyibx === ap1w0o) {
          if (ntyibx === ap1w0o && (ynxb['warning']('attribute value must after "="'), zxtn = iznbx['slice'](do5uf, _zsrmn)), do5uf = _zsrmn + 0x1, _zsrmn = iznbx['indexOf'](lq3876, do5uf), !(_zsrmn > 0x0)) throw new Error('attribute value no end \'' + lq3876 + '\' match');$mres_ = iznbx['slice'](do5uf, _zsrmn)['replace'](/&#?\w+;/g, ak675), r_3e['add'](zxtn, $mres_, do5uf - 0x1), ntyibx = amntz;
        } else {
          if (ntyibx != aibxy) throw new Error('attribute value must after "="');$mres_ = iznbx['slice'](do5uf, _zsrmn)['replace'](/&#?\w+;/g, ak675), r_3e['add'](zxtn, $mres_, do5uf), ynxb['warning']('attribute "' + zxtn + '" missed start quot(' + lq3876 + ')!!'), do5uf = _zsrmn + 0x1, ntyibx = amntz;
        }break;case '/':
        switch (ntyibx) {case ao4uf1:
            r_3e['setTagName'](iznbx['slice'](do5uf, _zsrmn));case amntz:case aadf54:case anbiyt:
            ntyibx = anbiyt, r_3e['closed'] = !0x0;case aibxy:case ap1w0o:case aszbmtn:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ynxb['error']('unexpected end of input'), ntyibx == ao4uf1 && r_3e['setTagName'](iznbx['slice'](do5uf, _zsrmn)), _zsrmn;case '>':
        switch (ntyibx) {case ao4uf1:
            r_3e['setTagName'](iznbx['slice'](do5uf, _zsrmn));case amntz:case aadf54:case anbiyt:
            break;case aibxy:case ap1w0o:
            $mres_ = iznbx['slice'](do5uf, _zsrmn), '/' === $mres_['slice'](-0x1) && (r_3e['closed'] = !0x0, $mres_ = $mres_['slice'](0x0, -0x1));case aszbmtn:
            ntyibx === aszbmtn && ($mres_ = zxtn), ntyibx == aibxy ? (ynxb['warning']('attribute "' + $mres_ + '" missed quot(")!!'), r_3e['add'](zxtn, $mres_['replace'](/&#?\w+;/g, ak675), do5uf)) : ('http://www.w3.org/1999/xhtml' === p0w9[''] && $mres_['match'](/^(?:disabled|checked|selected)$/i) || ynxb['warning']('attribute "' + $mres_ + '" missed value!! "' + $mres_ + '" instead!!'), r_3e['add']($mres_, $mres_, do5uf));break;case an_mr:
            throw new Error('attribute value missed!!');}return _zsrmn;case '\u0080':
        lq3876 = '\x20';default:
        if ('\x20' >= lq3876) switch (ntyibx) {case ao4uf1:
            r_3e['setTagName'](iznbx['slice'](do5uf, _zsrmn)), ntyibx = aadf54;break;case ap1w0o:
            zxtn = iznbx['slice'](do5uf, _zsrmn), ntyibx = aszbmtn;break;case aibxy:
            var $mres_ = iznbx['slice'](do5uf, _zsrmn)['replace'](/&#?\w+;/g, ak675);ynxb['warning']('attribute "' + $mres_ + '" missed quot(")!!'), r_3e['add'](zxtn, $mres_, do5uf);case amntz:
            ntyibx = aadf54;} else switch (ntyibx) {case aszbmtn:
            {
              r_3e['tagName'];
            }'http://www.w3.org/1999/xhtml' === p0w9[''] && zxtn['match'](/^(?:disabled|checked|selected)$/i) || ynxb['warning']('attribute "' + zxtn + '" missed value!! "' + zxtn + '" instead2!!'), r_3e['add'](zxtn, zxtn, do5uf), do5uf = _zsrmn, ntyibx = ap1w0o;break;case amntz:
            ynxb['warning']('attribute space is required"' + zxtn + '\x22!!');case aadf54:
            ntyibx = ap1w0o, do5uf = _zsrmn;break;case an_mr:
            ntyibx = aibxy, do5uf = _zsrmn;break;case anbiyt:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_zsrmn++;
  }
}function azsrmn_(fak57v, ms_r$, tybnix) {
  for (var nxyi = fak57v['tagName'], bztnxi = null, bhix = fak57v['length']; bhix--;) {
    var v8376 = fak57v[bhix],
        l37q8 = v8376['qName'],
        bzti = v8376['value'],
        v78l63 = l37q8['indexOf'](':');if (v78l63 > 0x0) var tybhx = v8376['prefix'] = l37q8['slice'](0x0, v78l63),
        serm_$ = l37q8['slice'](v78l63 + 0x1),
        $3_8 = 'xmlns' === tybhx && serm_$;else serm_$ = l37q8, tybhx = null, $3_8 = 'xmlns' === l37q8 && '';v8376['localName'] = serm_$, $3_8 !== !0x1 && (null == bztnxi && (bztnxi = {}, a$8_3qe(tybnix, tybnix = {})), tybnix[$3_8] = bztnxi[$3_8] = bzti, v8376['uri'] = 'http://www.w3.org/2000/xmlns/', ms_r$['startPrefixMapping']($3_8, bzti));
  }for (var bhix = fak57v['length']; bhix--;) {
    v8376 = fak57v[bhix];var tybhx = v8376['prefix'];tybhx && ('xml' === tybhx && (v8376['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== tybhx && (v8376['uri'] = tybnix[tybhx || '']));
  }var v78l63 = nxyi['indexOf'](':');v78l63 > 0x0 ? (tybhx = fak57v['prefix'] = nxyi['slice'](0x0, v78l63), serm_$ = fak57v['localName'] = nxyi['slice'](v78l63 + 0x1)) : (tybhx = null, serm_$ = fak57v['localName'] = nxyi);var inyxt = fak57v['uri'] = tybnix[tybhx || ''];if (ms_r$['startElement'](inyxt, serm_$, nxyi, fak57v), !fak57v['closed']) return fak57v['currentNSMap'] = tybnix, fak57v['localNSMap'] = bztnxi, !0x0;if (ms_r$['endElement'](inyxt, serm_$, nxyi), bztnxi) {
    for (tybhx in bztnxi) ms_r$['endPrefixMapping'](tybhx);
  }
}function aav4fk5(fka7, _3erq, m_znsr, rnzs_, hytib) {
  if (/^(?:script|textarea)$/i['test'](m_znsr)) {
    var rmn_ = fka7['indexOf']('</' + m_znsr + '>', _3erq),
        zmsnr = fka7['substring'](_3erq + 0x1, rmn_);if (/[&<]/['test'](zmsnr)) return (/^script$/i['test'](m_znsr) ? (hytib['characters'](zmsnr, 0x0, zmsnr['length']), rmn_) : (zmsnr = zmsnr['replace'](/&#?\w+;/g, rnzs_), hytib['characters'](zmsnr, 0x0, zmsnr['length']), rmn_)
    );
  }return _3erq + 0x1;
}function awuo0p1(m_s$re, rzm_s$, t2yxi, do41uw) {
  var chixy2 = do41uw[t2yxi];return null == chixy2 && (chixy2 = m_s$re['lastIndexOf']('</' + t2yxi + '>'), rzm_s$ > chixy2 && (chixy2 = m_s$re['lastIndexOf']('</' + t2yxi)), do41uw[t2yxi] = chixy2), rzm_s$ > chixy2;
}function a$8_3qe(ntbxz, zbnxmt) {
  for (var kda45f in ntbxz) zbnxmt[kda45f] = ntbxz[kda45f];
}function abyix(intxyb, kafv45, nxibt, kdaf45) {
  var txhiy2 = intxyb['charAt'](kafv45 + 0x2);switch (txhiy2) {case '-':
      if ('-' === intxyb['charAt'](kafv45 + 0x3)) {
        var e8q36l = intxyb['indexOf']('-->', kafv45 + 0x4);return e8q36l > kafv45 ? (nxibt['comment'](intxyb, kafv45 + 0x4, e8q36l - kafv45 - 0x4), e8q36l + 0x3) : (kdaf45['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == intxyb['substr'](kafv45 + 0x3, 0x6)) {
        var e8q36l = intxyb['indexOf'](']]>', kafv45 + 0x9);return nxibt['startCDATA'](), nxibt['characters'](intxyb, kafv45 + 0x9, e8q36l - kafv45 - 0x9), nxibt['endCDATA'](), e8q36l + 0x3;
      }var f54okd = ao4dfk5(intxyb, kafv45),
          ou0 = f54okd['length'];if (ou0 > 0x1 && /!doctype/i['test'](f54okd[0x0][0x0])) {
        var hyt2i = f54okd[0x1][0x0],
            _$zms = ou0 > 0x3 && /^public$/i['test'](f54okd[0x2][0x0]) && f54okd[0x3][0x0],
            esmr$_ = ou0 > 0x4 && f54okd[0x4][0x0],
            dfo = f54okd[ou0 - 0x1];return nxibt['startDTD'](hyt2i, _$zms && _$zms['replace'](/^(['"])(.*?)\1$/, '$2'), esmr$_ && esmr$_['replace'](/^(['"])(.*?)\1$/, '$2')), nxibt['endDTD'](), dfo['index'] + dfo[0x0]['length'];
      }}return -0x1;
}function aitzx(sbtnm, iytnb, e3$r) {
  var tznbm = sbtnm['indexOf']('?>', iytnb);if (tznbm) {
    var f7k5va = sbtnm['substring'](iytnb, tznbm)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (f7k5va) {
      {
        f7k5va[0x0]['length'];
      }return e3$r['processingInstruction'](f7k5va[0x1], f7k5va[0x2]), tznbm + 0x2;
    }return -0x1;
  }return -0x1;
}function a_qe8$() {}function asmnz_r(zrm_s$, v5) {
  return zrm_s$['__proto__'] = v5, zrm_s$;
}function ao4dfk5(o1du4w, d14uo) {
  var ibz,
      nsbtmz = [],
      od1u4f = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (od1u4f['lastIndex'] = d14uo, od1u4f['exec'](o1du4w); ibz = od1u4f['exec'](o1du4w);) if (nsbtmz['push'](ibz), ibz[0x1]) return nsbtmz;
}var aa5fd = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a$_qs = new RegExp('[\\-\\.0-9' + aa5fd['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    av836 = new RegExp('^' + aa5fd['source'] + a$_qs['source'] + '*(?::' + aa5fd['source'] + a$_qs['source'] + '*)?$'),
    ao4uf1 = 0x0,
    ap1w0o = 0x1,
    aszbmtn = 0x2,
    an_mr = 0x3,
    aibxy = 0x4,
    amntz = 0x5,
    aadf54 = 0x6,
    anbiyt = 0x7;abxntzm['prototype'] = { 'parse': function (zxnmb, e$8_3, x2iych) {
    var sqe_r = this['domBuilder'];sqe_r['startDocument'](), a$8_3qe(e$8_3, e$8_3 = {}), av67lak(zxnmb, e$8_3, x2iych, sqe_r, this['errorHandler']), sqe_r['endDocument']();
  } }, a_qe8$['prototype'] = { 'setTagName': function (d0uwo) {
    if (!av836['test'](d0uwo)) throw new Error('invalid tagName:' + d0uwo);this['tagName'] = d0uwo;
  }, 'add': function (uw09p1, r_3eq$, bntzi) {
    if (!av836['test'](uw09p1)) throw new Error('invalid attribute:' + uw09p1);this[this['length']++] = { 'qName': uw09p1, 'value': r_3eq$, 'offset': bntzi };
  }, 'length': 0x0, 'getLocalName': function (yjhc2) {
    return this[yjhc2]['localName'];
  }, 'getLocator': function (brmns) {
    return this[brmns]['locator'];
  }, 'getQName': function (nzxib) {
    return this[nzxib]['qName'];
  }, 'getURI': function (zxitb) {
    return this[zxitb]['uri'];
  }, 'getValue': function (xbnyt) {
    return this[xbnyt]['value'];
  } }, asmnz_r({}, asmnz_r['prototype']) instanceof asmnz_r || (asmnz_r = function (bxithy, vak765) {
  function el68() {}el68['prototype'] = vak765, el68 = new el68();for (vak765 in bxithy) el68[vak765] = bxithy[vak765];return el68;
}), exports['XMLReader'] = abxntzm;