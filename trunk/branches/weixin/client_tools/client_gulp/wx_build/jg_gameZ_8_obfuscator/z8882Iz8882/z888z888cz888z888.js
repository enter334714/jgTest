var G = wx.$G;
function abxith() {}function axiyh2c(se, u01o, ud1, htxyib, g19p0) {
  function hix2yc($38l) {
    if ($38l > 0xffff) {
      $38l -= 0x10000;var u41 = 0xd800 + ($38l >> 0xa),
          le$3 = 0xdc00 + (0x3ff & $38l);return String['fromCharCode'](u41, le$3);
    }return String['fromCharCode']($38l);
  }function pwo10u(o1u0wd) {
    var lv7ak = o1u0wd['slice'](0x1, -0x1);return lv7ak in ud1 ? ud1[lv7ak] : '#' === lv7ak['charAt'](0x0) ? hix2yc(parseInt(lv7ak['substr'](0x1)['replace']('x', '0x'))) : (g19p0['error']('entity not found:' + o1u0wd), o1u0wd);
  }function _mnsz(ch2xyi) {
    if (ch2xyi > bmsnzr) {
      var $rmzs_ = se['substring'](bmsnzr, ch2xyi)['replace'](/&#?\w+;/g, pwo10u);xibthy && wd1o4(bmsnzr), htxyib['characters']($rmzs_, 0x0, ch2xyi - bmsnzr), bmsnzr = ch2xyi;
    }
  }function wd1o4($_3qe8, _rzs$m) {
    for (; $_3qe8 >= u54fod && (_rzs$m = l6v83['exec'](se));) fo5k4d = _rzs$m['index'], u54fod = fo5k4d + _rzs$m[0x0]['length'], xibthy['lineNumber']++;xibthy['columnNumber'] = $_3qe8 - fo5k4d + 0x1;
  }for (var fo5k4d = 0x0, u54fod = 0x0, l6v83 = /.*(?:\r\n?|\n)|.*$/g, xibthy = htxyib['locator'], $le = [{ 'currentNSMap': u01o }], x2ichy = {}, bmsnzr = 0x0;;) {
    try {
      var $qe_r = se['indexOf']('<', bmsnzr);if (0x0 > $qe_r) {
        if (!se['substr'](bmsnzr)['match'](/^\s*$/)) {
          var ibynxt = htxyib['doc'],
              w0udo1 = ibynxt['createTextNode'](se['substr'](bmsnzr));ibynxt['appendChild'](w0udo1), htxyib['currentElement'] = w0udo1;
        }return;
      }switch ($qe_r > bmsnzr && _mnsz($qe_r), se['charAt']($qe_r + 0x1)) {case '/':
          var yci2jh = se['indexOf']('>', $qe_r + 0x3),
              z_mrs$ = se['substring']($qe_r + 0x2, yci2jh),
              r$3eq_ = $le['pop']();0x0 > yci2jh ? (z_mrs$ = se['substring']($qe_r + 0x2)['replace'](/[\s<].*/, ''), g19p0['error']('end tag name: ' + z_mrs$ + ' is not complete:' + r$3eq_['tagName']), yci2jh = $qe_r + 0x1 + z_mrs$['length']) : z_mrs$['match'](/\s</) && (z_mrs$ = z_mrs$['replace'](/[\s<].*/, ''), g19p0['error']('end tag name: ' + z_mrs$ + ' maybe not complete'), yci2jh = $qe_r + 0x1 + z_mrs$['length']);var q3r = r$3eq_['localNSMap'],
              xbht = r$3eq_['tagName'] == z_mrs$,
              u1ofd = xbht || r$3eq_['tagName'] && r$3eq_['tagName']['toLowerCase']() == z_mrs$['toLowerCase']();if (u1ofd) {
            if (htxyib['endElement'](r$3eq_['uri'], r$3eq_['localName'], z_mrs$), q3r) {
              for (var e3rq in q3r) htxyib['endPrefixMapping'](e3rq);
            }xbht || g19p0['fatalError']('end tag name: ' + z_mrs$ + ' is not match the current start tagName:' + r$3eq_['tagName']);
          } else $le['push'](r$3eq_);yci2jh++;break;case '?':
          xibthy && wd1o4($qe_r), yci2jh = ayxbtih(se, $qe_r, htxyib);break;case '!':
          xibthy && wd1o4($qe_r), yci2jh = abznti(se, $qe_r, htxyib, g19p0);break;default:
          xibthy && wd1o4($qe_r);var pw0g = new awu0po1(),
              bmzsrn = $le[$le['length'] - 0x1]['currentNSMap'],
              yci2jh = ak7vl6a(se, $qe_r, pw0g, bmzsrn, pwo10u, g19p0),
              $q3er = pw0g['length'];if (!pw0g['closed'] && anstz(se, yci2jh, pw0g['tagName'], x2ichy) && (pw0g['closed'] = !0x0, ud1['nbsp'] || g19p0['warning']('unclosed xml attribute')), xibthy && $q3er) {
            for (var bnmt = ao0upw(xibthy, {}), v56a7 = 0x0; $q3er > v56a7; v56a7++) {
              var q$r_3 = pw0g[v56a7];wd1o4(q$r_3['offset']), q$r_3['locator'] = ao0upw(xibthy, {});
            }htxyib['locator'] = bnmt, anybxt(pw0g, htxyib, bmzsrn) && $le['push'](pw0g), htxyib['locator'] = xibthy;
          } else anybxt(pw0g, htxyib, bmzsrn) && $le['push'](pw0g);'http://www.w3.org/1999/xhtml' !== pw0g['uri'] || pw0g['closed'] ? yci2jh++ : yci2jh = anbxztm(se, yci2jh, pw0g['tagName'], pwo10u, htxyib);}
    } catch (j2hci) {
      g19p0['error']('element parse error: ' + j2hci), yci2jh = -0x1;
    }yci2jh > bmsnzr ? bmsnzr = yci2jh : _mnsz(Math['max']($qe_r, bmsnzr) + 0x1);
  }
}function ao0upw(s_$mer, afk57v) {
  return afk57v['lineNumber'] = s_$mer['lineNumber'], afk57v['columnNumber'] = s_$mer['columnNumber'], afk57v;
}function ak7vl6a(nzibt, xtyih, rbmz, brsz, $m_zs, val68) {
  for (var wd1ou4, eq_83, tbmxn = ++xtyih, pgw19 = acijhy2;;) {
    var iy2htx = nzibt['charAt'](tbmxn);switch (iy2htx) {case '=':
        if (pgw19 === ay2hic) wd1ou4 = nzibt['slice'](xtyih, tbmxn), pgw19 = atbnyi;else {
          if (pgw19 !== aqel6) throw new Error('attribute equal must after attrName');pgw19 = atbnyi;
        }break;case '\x27':case '\x22':
        if (pgw19 === atbnyi || pgw19 === ay2hic) {
          if (pgw19 === ay2hic && (val68['warning']('attribute value must after "="'), wd1ou4 = nzibt['slice'](xtyih, tbmxn)), xtyih = tbmxn + 0x1, tbmxn = nzibt['indexOf'](iy2htx, xtyih), !(tbmxn > 0x0)) throw new Error('attribute value no end \'' + iy2htx + '\' match');eq_83 = nzibt['slice'](xtyih, tbmxn)['replace'](/&#?\w+;/g, $m_zs), rbmz['add'](wd1ou4, eq_83, xtyih - 0x1), pgw19 = aok4f5d;
        } else {
          if (pgw19 != azm_sn) throw new Error('attribute value must after "="');eq_83 = nzibt['slice'](xtyih, tbmxn)['replace'](/&#?\w+;/g, $m_zs), rbmz['add'](wd1ou4, eq_83, xtyih), val68['warning']('attribute "' + wd1ou4 + '" missed start quot(' + iy2htx + ')!!'), xtyih = tbmxn + 0x1, pgw19 = aok4f5d;
        }break;case '/':
        switch (pgw19) {case acijhy2:
            rbmz['setTagName'](nzibt['slice'](xtyih, tbmxn));case aok4f5d:case atxhyib:case ayhxi:
            pgw19 = ayhxi, rbmz['closed'] = !0x0;case azm_sn:case ay2hic:case aqel6:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return val68['error']('unexpected end of input'), pgw19 == acijhy2 && rbmz['setTagName'](nzibt['slice'](xtyih, tbmxn)), tbmxn;case '>':
        switch (pgw19) {case acijhy2:
            rbmz['setTagName'](nzibt['slice'](xtyih, tbmxn));case aok4f5d:case atxhyib:case ayhxi:
            break;case azm_sn:case ay2hic:
            eq_83 = nzibt['slice'](xtyih, tbmxn), '/' === eq_83['slice'](-0x1) && (rbmz['closed'] = !0x0, eq_83 = eq_83['slice'](0x0, -0x1));case aqel6:
            pgw19 === aqel6 && (eq_83 = wd1ou4), pgw19 == azm_sn ? (val68['warning']('attribute "' + eq_83 + '" missed quot(")!!'), rbmz['add'](wd1ou4, eq_83['replace'](/&#?\w+;/g, $m_zs), xtyih)) : ('http://www.w3.org/1999/xhtml' === brsz[''] && eq_83['match'](/^(?:disabled|checked|selected)$/i) || val68['warning']('attribute "' + eq_83 + '" missed value!! "' + eq_83 + '" instead!!'), rbmz['add'](eq_83, eq_83, xtyih));break;case atbnyi:
            throw new Error('attribute value missed!!');}return tbmxn;case '\u0080':
        iy2htx = '\x20';default:
        if ('\x20' >= iy2htx) switch (pgw19) {case acijhy2:
            rbmz['setTagName'](nzibt['slice'](xtyih, tbmxn)), pgw19 = atxhyib;break;case ay2hic:
            wd1ou4 = nzibt['slice'](xtyih, tbmxn), pgw19 = aqel6;break;case azm_sn:
            var eq_83 = nzibt['slice'](xtyih, tbmxn)['replace'](/&#?\w+;/g, $m_zs);val68['warning']('attribute "' + eq_83 + '" missed quot(")!!'), rbmz['add'](wd1ou4, eq_83, xtyih);case aok4f5d:
            pgw19 = atxhyib;} else switch (pgw19) {case aqel6:
            {
              rbmz['tagName'];
            }'http://www.w3.org/1999/xhtml' === brsz[''] && wd1ou4['match'](/^(?:disabled|checked|selected)$/i) || val68['warning']('attribute "' + wd1ou4 + '" missed value!! "' + wd1ou4 + '" instead2!!'), rbmz['add'](wd1ou4, wd1ou4, xtyih), xtyih = tbmxn, pgw19 = ay2hic;break;case aok4f5d:
            val68['warning']('attribute space is required"' + wd1ou4 + '\x22!!');case atxhyib:
            pgw19 = ay2hic, xtyih = tbmxn;break;case atbnyi:
            pgw19 = azm_sn, xtyih = tbmxn;break;case ayhxi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tbmxn++;
  }
}function anybxt(k7vla, ych2i, cy2xih) {
  for (var xch2y = k7vla['tagName'], txihy2 = null, cyxhi2 = k7vla['length']; cyxhi2--;) {
    var znsbmt = k7vla[cyxhi2],
        r$_q = znsbmt['qName'],
        eq$ = znsbmt['value'],
        zmsrn = r$_q['indexOf'](':');if (zmsrn > 0x0) var op0u1 = znsbmt['prefix'] = r$_q['slice'](0x0, zmsrn),
        byxhi = r$_q['slice'](zmsrn + 0x1),
        d1u0ow = 'xmlns' === op0u1 && byxhi;else byxhi = r$_q, op0u1 = null, d1u0ow = 'xmlns' === r$_q && '';znsbmt['localName'] = byxhi, d1u0ow !== !0x1 && (null == txihy2 && (txihy2 = {}, aihbtxy(cy2xih, cy2xih = {})), cy2xih[d1u0ow] = txihy2[d1u0ow] = eq$, znsbmt['uri'] = 'http://www.w3.org/2000/xmlns/', ych2i['startPrefixMapping'](d1u0ow, eq$));
  }for (var cyxhi2 = k7vla['length']; cyxhi2--;) {
    znsbmt = k7vla[cyxhi2];var op0u1 = znsbmt['prefix'];op0u1 && ('xml' === op0u1 && (znsbmt['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== op0u1 && (znsbmt['uri'] = cy2xih[op0u1 || '']));
  }var zmsrn = xch2y['indexOf'](':');zmsrn > 0x0 ? (op0u1 = k7vla['prefix'] = xch2y['slice'](0x0, zmsrn), byxhi = k7vla['localName'] = xch2y['slice'](zmsrn + 0x1)) : (op0u1 = null, byxhi = k7vla['localName'] = xch2y);var szntb = k7vla['uri'] = cy2xih[op0u1 || ''];if (ych2i['startElement'](szntb, byxhi, xch2y, k7vla), !k7vla['closed']) return k7vla['currentNSMap'] = cy2xih, k7vla['localNSMap'] = txihy2, !0x0;if (ych2i['endElement'](szntb, byxhi, xch2y), txihy2) {
    for (op0u1 in txihy2) ych2i['endPrefixMapping'](op0u1);
  }
}function anbxztm(h2ity, sn_zrm, bhtxyi, h2y, kd5af) {
  if (/^(?:script|textarea)$/i['test'](bhtxyi)) {
    var tnxiz = h2ity['indexOf']('</' + bhtxyi + '>', sn_zrm),
        o1uw4 = h2ity['substring'](sn_zrm + 0x1, tnxiz);if (/[&<]/['test'](o1uw4)) return (/^script$/i['test'](bhtxyi) ? (kd5af['characters'](o1uw4, 0x0, o1uw4['length']), tnxiz) : (o1uw4 = o1uw4['replace'](/&#?\w+;/g, h2y), kd5af['characters'](o1uw4, 0x0, o1uw4['length']), tnxiz)
    );
  }return sn_zrm + 0x1;
}function anstz(oud1f, znsrmb, q$3el, ofu1d) {
  var p0wu1o = ofu1d[q$3el];return null == p0wu1o && (p0wu1o = oud1f['lastIndexOf']('</' + q$3el + '>'), znsrmb > p0wu1o && (p0wu1o = oud1f['lastIndexOf']('</' + q$3el)), ofu1d[q$3el] = p0wu1o), znsrmb > p0wu1o;
}function aihbtxy(fdok5, iy2txh) {
  for (var g9w in fdok5) iy2txh[g9w] = fdok5[g9w];
}function abznti(btinxz, niybx, nxybit, w1u09p) {
  var zsbrn = btinxz['charAt'](niybx + 0x2);switch (zsbrn) {case '-':
      if ('-' === btinxz['charAt'](niybx + 0x3)) {
        var r$esq_ = btinxz['indexOf']('-->', niybx + 0x4);return r$esq_ > niybx ? (nxybit['comment'](btinxz, niybx + 0x4, r$esq_ - niybx - 0x4), r$esq_ + 0x3) : (w1u09p['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == btinxz['substr'](niybx + 0x3, 0x6)) {
        var r$esq_ = btinxz['indexOf'](']]>', niybx + 0x9);return nxybit['startCDATA'](), nxybit['characters'](btinxz, niybx + 0x9, r$esq_ - niybx - 0x9), nxybit['endCDATA'](), r$esq_ + 0x3;
      }var p10wu9 = aakd(btinxz, niybx),
          q3867l = p10wu9['length'];if (q3867l > 0x1 && /!doctype/i['test'](p10wu9[0x0][0x0])) {
        var v76a5k = p10wu9[0x1][0x0],
            k4a5fv = q3867l > 0x3 && /^public$/i['test'](p10wu9[0x2][0x0]) && p10wu9[0x3][0x0],
            rmszbn = q3867l > 0x4 && p10wu9[0x4][0x0],
            le$8q = p10wu9[q3867l - 0x1];return nxybit['startDTD'](v76a5k, k4a5fv && k4a5fv['replace'](/^(['"])(.*?)\1$/, '$2'), rmszbn && rmszbn['replace'](/^(['"])(.*?)\1$/, '$2')), nxybit['endDTD'](), le$8q['index'] + le$8q[0x0]['length'];
      }}return -0x1;
}function ayxbtih(_eq83, $rzms, sntbz) {
  var xbtiny = _eq83['indexOf']('?>', $rzms);if (xbtiny) {
    var a78vl = _eq83['substring']($rzms, xbtiny)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (a78vl) {
      {
        a78vl[0x0]['length'];
      }return sntbz['processingInstruction'](a78vl[0x1], a78vl[0x2]), xbtiny + 0x2;
    }return -0x1;
  }return -0x1;
}function awu0po1() {}function aa87lv6(ntbzmx, kfa54d) {
  return ntbzmx['__proto__'] = kfa54d, ntbzmx;
}function aakd(lq7863, tyx2ih) {
  var htyx2i,
      tsmzb = [],
      bzntsm = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bzntsm['lastIndex'] = tyx2ih, bzntsm['exec'](lq7863); htyx2i = bzntsm['exec'](lq7863);) if (tsmzb['push'](htyx2i), htyx2i[0x1]) return tsmzb;
}var asnbrz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    atibx = new RegExp('[\\-\\.0-9' + asnbrz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    aou0p = new RegExp('^' + asnbrz['source'] + atibx['source'] + '*(?::' + asnbrz['source'] + atibx['source'] + '*)?$'),
    acijhy2 = 0x0,
    ay2hic = 0x1,
    aqel6 = 0x2,
    atbnyi = 0x3,
    azm_sn = 0x4,
    aok4f5d = 0x5,
    atxhyib = 0x6,
    ayhxi = 0x7;abxith['prototype'] = { 'parse': function (d5kfa, znsmr, tbzxm) {
    var fuo45 = this['domBuilder'];fuo45['startDocument'](), aihbtxy(znsmr, znsmr = {}), axiyh2c(d5kfa, znsmr, tbzxm, fuo45, this['errorHandler']), fuo45['endDocument']();
  } }, awu0po1['prototype'] = { 'setTagName': function (a6lv7) {
    if (!aou0p['test'](a6lv7)) throw new Error('invalid tagName:' + a6lv7);this['tagName'] = a6lv7;
  }, 'add': function (e3q$r_, tnxby, bityn) {
    if (!aou0p['test'](e3q$r_)) throw new Error('invalid attribute:' + e3q$r_);this[this['length']++] = { 'qName': e3q$r_, 'value': tnxby, 'offset': bityn };
  }, 'length': 0x0, 'getLocalName': function (u1of4d) {
    return this[u1of4d]['localName'];
  }, 'getLocator': function (nmztsb) {
    return this[nmztsb]['locator'];
  }, 'getQName': function (bsnzmt) {
    return this[bsnzmt]['qName'];
  }, 'getURI': function (lak67v) {
    return this[lak67v]['uri'];
  }, 'getValue': function ($3le8q) {
    return this[$3le8q]['value'];
  } }, aa87lv6({}, aa87lv6['prototype']) instanceof aa87lv6 || (aa87lv6 = function (rmbsnz, biyxtn) {
  function l3$eq() {}l3$eq['prototype'] = biyxtn, l3$eq = new l3$eq();for (biyxtn in rmbsnz) l3$eq[biyxtn] = rmbsnz[biyxtn];return l3$eq;
}), exports['XMLReader'] = abxith;