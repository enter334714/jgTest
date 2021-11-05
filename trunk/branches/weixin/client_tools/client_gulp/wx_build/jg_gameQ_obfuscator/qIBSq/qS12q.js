var g = wx.$Q;
function q_crztd$() {}function q_rtkzd(rt$zc, drtckz, hwj, k2x53y, $_zoe) {
  function glbapi(_o$9z) {
    if (_o$9z > 0xffff) {
      _o$9z -= 0x10000;var z9r$e = 0xd800 + (_o$9z >> 0xa),
          no_9e = 0xdc00 + (0x3ff & _o$9z);return String['fromCharCode'](z9r$e, no_9e);
    }return String['fromCharCode'](_o$9z);
  }function bafgp(m4h61) {
    var mh16n = m4h61['slice'](0x1, -0x1);return mh16n in hwj ? hwj[mh16n] : '#' === mh16n['charAt'](0x0) ? glbapi(parseInt(mh16n['substr'](0x1)['replace']('x', '0x'))) : ($_zoe['error']('entity not found:' + m4h61), m4h61);
  }function t5k3xy(sw8jq) {
    if (sw8jq > lpbgaf) {
      var tykx5 = rt$zc['substring'](lpbgaf, sw8jq)['replace'](/&#?\w+;/g, bafgp);ivlabg && k5tdy(lpbgaf), k2x53y['characters'](tykx5, 0x0, sw8jq - lpbgaf), lpbgaf = sw8jq;
    }
  }function k5tdy(f0ap, flx2) {
    for (; f0ap >= _dczr$ && (flx2 = pabfg['exec'](rt$zc));) f52x = flx2['index'], _dczr$ = f52x + flx2[0x0]['length'], ivlabg['lineNumber']++;ivlabg['columnNumber'] = f0ap - f52x + 0x1;
  }for (var f52x = 0x0, _dczr$ = 0x0, pabfg = /.*(?:\r\n?|\n)|.*$/g, ivlabg = k2x53y['locator'], czrd$t = [{ 'currentNSMap': drtckz }], iabp = {}, lpbgaf = 0x0;;) {
    try {
      var $9oe_z = rt$zc['indexOf']('<', lpbgaf);if (0x0 > $9oe_z) {
        if (!rt$zc['substr'](lpbgaf)['match'](/^\s*$/)) {
          var pf320x = k2x53y['doc'],
              _9o = pf320x['createTextNode'](rt$zc['substr'](lpbgaf));pf320x['appendChild'](_9o), k2x53y['currentElement'] = _9o;
        }return;
      }switch ($9oe_z > lpbgaf && t5k3xy($9oe_z), rt$zc['charAt']($9oe_z + 0x1)) {case '/':
          var _cz$ = rt$zc['indexOf']('>', $9oe_z + 0x3),
              $zdcr = rt$zc['substring']($9oe_z + 0x2, _cz$),
              bvaig = czrd$t['pop']();0x0 > _cz$ ? ($zdcr = rt$zc['substring']($9oe_z + 0x2)['replace'](/[\s<].*/, ''), $_zoe['error']('end tag name: ' + $zdcr + ' is not complete:' + bvaig['tagName']), _cz$ = $9oe_z + 0x1 + $zdcr['length']) : $zdcr['match'](/\s</) && ($zdcr = $zdcr['replace'](/[\s<].*/, ''), $_zoe['error']('end tag name: ' + $zdcr + ' maybe not complete'), _cz$ = $9oe_z + 0x1 + $zdcr['length']);var rtc = bvaig['localNSMap'],
              bafgpl = bvaig['tagName'] == $zdcr,
              xfl20 = bafgpl || bvaig['tagName'] && bvaig['tagName']['toLowerCase']() == $zdcr['toLowerCase']();if (xfl20) {
            if (k2x53y['endElement'](bvaig['uri'], bvaig['localName'], $zdcr), rtc) {
              for (var m9eo6n in rtc) k2x53y['endPrefixMapping'](m9eo6n);
            }bafgpl || $_zoe['fatalError']('end tag name: ' + $zdcr + ' is not match the current start tagName:' + bvaig['tagName']);
          } else czrd$t['push'](bvaig);_cz$++;break;case '?':
          ivlabg && k5tdy($9oe_z), _cz$ = q_nm1h6(rt$zc, $9oe_z, k2x53y);break;case '!':
          ivlabg && k5tdy($9oe_z), _cz$ = q_zdrct$(rt$zc, $9oe_z, k2x53y, $_zoe);break;default:
          ivlabg && k5tdy($9oe_z);var wusjh8 = new q_e6_9(),
              e_9n6 = czrd$t[czrd$t['length'] - 0x1]['currentNSMap'],
              _cz$ = q_r$zcd(rt$zc, $9oe_z, wusjh8, e_9n6, bafgp, $_zoe),
              x3yk2 = wusjh8['length'];if (!wusjh8['closed'] && q_czkrdt(rt$zc, _cz$, wusjh8['tagName'], iabp) && (wusjh8['closed'] = !0x0, hwj['nbsp'] || $_zoe['warning']('unclosed xml attribute')), ivlabg && x3yk2) {
            for (var s81jw = q_gvabl(ivlabg, {}), c$dtzr = 0x0; x3yk2 > c$dtzr; c$dtzr++) {
              var swh18j = wusjh8[c$dtzr];k5tdy(swh18j['offset']), swh18j['locator'] = q_gvabl(ivlabg, {});
            }k2x53y['locator'] = s81jw, q_ktdycr(wusjh8, k2x53y, e_9n6) && czrd$t['push'](wusjh8), k2x53y['locator'] = ivlabg;
          } else q_ktdycr(wusjh8, k2x53y, e_9n6) && czrd$t['push'](wusjh8);'http://www.w3.org/1999/xhtml' !== wusjh8['uri'] || wusjh8['closed'] ? _cz$++ : _cz$ = q_iv7ba(rt$zc, _cz$, wusjh8['tagName'], bafgp, k2x53y);}
    } catch (tc$rd) {
      $_zoe['error']('element parse error: ' + tc$rd), _cz$ = -0x1;
    }_cz$ > lpbgaf ? lpbgaf = _cz$ : t5k3xy(Math['max']($9oe_z, lpbgaf) + 0x1);
  }
}function q_gvabl(xp20lf, krtzc) {
  return krtzc['lineNumber'] = xp20lf['lineNumber'], krtzc['columnNumber'] = xp20lf['columnNumber'], krtzc;
}function q_r$zcd(tzrckd, x3f520, gpbal, tdrcz, rcdt$z, dyktc) {
  for (var c5tk3y, n164mh, e$_oz = ++x3f520, uq8js = q_sj1w8h;;) {
    var lbiga = tzrckd['charAt'](e$_oz);switch (lbiga) {case '=':
        if (uq8js === q_afgl0) c5tk3y = tzrckd['slice'](x3f520, e$_oz), uq8js = q_albg;else {
          if (uq8js !== q_z_oe$9) throw new Error('attribute equal must after attrName');uq8js = q_albg;
        }break;case '\x27':case '\x22':
        if (uq8js === q_albg || uq8js === q_afgl0) {
          if (uq8js === q_afgl0 && (dyktc['warning']('attribute value must after "="'), c5tk3y = tzrckd['slice'](x3f520, e$_oz)), x3f520 = e$_oz + 0x1, e$_oz = tzrckd['indexOf'](lbiga, x3f520), !(e$_oz > 0x0)) throw new Error('attribute value no end \'' + lbiga + '\' match');n164mh = tzrckd['slice'](x3f520, e$_oz)['replace'](/&#?\w+;/g, rcdt$z), gpbal['add'](c5tk3y, n164mh, x3f520 - 0x1), uq8js = q_jh841m;
        } else {
          if (uq8js != q_uhw8sj) throw new Error('attribute value must after "="');n164mh = tzrckd['slice'](x3f520, e$_oz)['replace'](/&#?\w+;/g, rcdt$z), gpbal['add'](c5tk3y, n164mh, x3f520), dyktc['warning']('attribute "' + c5tk3y + '" missed start quot(' + lbiga + ')!!'), x3f520 = e$_oz + 0x1, uq8js = q_jh841m;
        }break;case '/':
        switch (uq8js) {case q_sj1w8h:
            gpbal['setTagName'](tzrckd['slice'](x3f520, e$_oz));case q_jh841m:case q_zdr_$:case q_nh164m:
            uq8js = q_nh164m, gpbal['closed'] = !0x0;case q_uhw8sj:case q_afgl0:case q_z_oe$9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return dyktc['error']('unexpected end of input'), uq8js == q_sj1w8h && gpbal['setTagName'](tzrckd['slice'](x3f520, e$_oz)), e$_oz;case '>':
        switch (uq8js) {case q_sj1w8h:
            gpbal['setTagName'](tzrckd['slice'](x3f520, e$_oz));case q_jh841m:case q_zdr_$:case q_nh164m:
            break;case q_uhw8sj:case q_afgl0:
            n164mh = tzrckd['slice'](x3f520, e$_oz), '/' === n164mh['slice'](-0x1) && (gpbal['closed'] = !0x0, n164mh = n164mh['slice'](0x0, -0x1));case q_z_oe$9:
            uq8js === q_z_oe$9 && (n164mh = c5tk3y), uq8js == q_uhw8sj ? (dyktc['warning']('attribute "' + n164mh + '" missed quot(")!!'), gpbal['add'](c5tk3y, n164mh['replace'](/&#?\w+;/g, rcdt$z), x3f520)) : ('http://www.w3.org/1999/xhtml' === tdrcz[''] && n164mh['match'](/^(?:disabled|checked|selected)$/i) || dyktc['warning']('attribute "' + n164mh + '" missed value!! "' + n164mh + '" instead!!'), gpbal['add'](n164mh, n164mh, x3f520));break;case q_albg:
            throw new Error('attribute value missed!!');}return e$_oz;case '\u0080':
        lbiga = '\x20';default:
        if ('\x20' >= lbiga) switch (uq8js) {case q_sj1w8h:
            gpbal['setTagName'](tzrckd['slice'](x3f520, e$_oz)), uq8js = q_zdr_$;break;case q_afgl0:
            c5tk3y = tzrckd['slice'](x3f520, e$_oz), uq8js = q_z_oe$9;break;case q_uhw8sj:
            var n164mh = tzrckd['slice'](x3f520, e$_oz)['replace'](/&#?\w+;/g, rcdt$z);dyktc['warning']('attribute "' + n164mh + '" missed quot(")!!'), gpbal['add'](c5tk3y, n164mh, x3f520);case q_jh841m:
            uq8js = q_zdr_$;} else switch (uq8js) {case q_z_oe$9:
            {
              gpbal['tagName'];
            }'http://www.w3.org/1999/xhtml' === tdrcz[''] && c5tk3y['match'](/^(?:disabled|checked|selected)$/i) || dyktc['warning']('attribute "' + c5tk3y + '" missed value!! "' + c5tk3y + '" instead2!!'), gpbal['add'](c5tk3y, c5tk3y, x3f520), x3f520 = e$_oz, uq8js = q_afgl0;break;case q_jh841m:
            dyktc['warning']('attribute space is required"' + c5tk3y + '\x22!!');case q_zdr_$:
            uq8js = q_afgl0, x3f520 = e$_oz;break;case q_albg:
            uq8js = q_uhw8sj, x3f520 = e$_oz;break;case q_nh164m:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}e$_oz++;
  }
}function q_ktdycr(y5kx2, mh86, e$n_o9) {
  for (var oez9$_ = y5kx2['tagName'], o9ne6 = null, e69 = y5kx2['length']; e69--;) {
    var $z9_re = y5kx2[e69],
        xkt3y = $z9_re['qName'],
        $ezo9_ = $z9_re['value'],
        ws = xkt3y['indexOf'](':');if (ws > 0x0) var f0xp = $z9_re['prefix'] = xkt3y['slice'](0x0, ws),
        m6on94 = xkt3y['slice'](ws + 0x1),
        $e9no_ = 'xmlns' === f0xp && m6on94;else m6on94 = xkt3y, f0xp = null, $e9no_ = 'xmlns' === xkt3y && '';$z9_re['localName'] = m6on94, $e9no_ !== !0x1 && (null == o9ne6 && (o9ne6 = {}, q_j8qsuw(e$n_o9, e$n_o9 = {})), e$n_o9[$e9no_] = o9ne6[$e9no_] = $ezo9_, $z9_re['uri'] = 'http://www.w3.org/2000/xmlns/', mh86['startPrefixMapping']($e9no_, $ezo9_));
  }for (var e69 = y5kx2['length']; e69--;) {
    $z9_re = y5kx2[e69];var f0xp = $z9_re['prefix'];f0xp && ('xml' === f0xp && ($z9_re['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== f0xp && ($z9_re['uri'] = e$n_o9[f0xp || '']));
  }var ws = oez9$_['indexOf'](':');ws > 0x0 ? (f0xp = y5kx2['prefix'] = oez9$_['slice'](0x0, ws), m6on94 = y5kx2['localName'] = oez9$_['slice'](ws + 0x1)) : (f0xp = null, m6on94 = y5kx2['localName'] = oez9$_);var y3xt5k = y5kx2['uri'] = e$n_o9[f0xp || ''];if (mh86['startElement'](y3xt5k, m6on94, oez9$_, y5kx2), !y5kx2['closed']) return y5kx2['currentNSMap'] = e$n_o9, y5kx2['localNSMap'] = o9ne6, !0x0;if (mh86['endElement'](y3xt5k, m6on94, oez9$_), o9ne6) {
    for (f0xp in o9ne6) mh86['endPrefixMapping'](f0xp);
  }
}function q_iv7ba(o49, whs1, $c_rdz, p2a, h684m) {
  if (/^(?:script|textarea)$/i['test']($c_rdz)) {
    var $z_ed = o49['indexOf']('</' + $c_rdz + '>', whs1),
        x3250f = o49['substring'](whs1 + 0x1, $z_ed);if (/[&<]/['test'](x3250f)) return (/^script$/i['test']($c_rdz) ? (h684m['characters'](x3250f, 0x0, x3250f['length']), $z_ed) : (x3250f = x3250f['replace'](/&#?\w+;/g, p2a), h684m['characters'](x3250f, 0x0, x3250f['length']), $z_ed)
    );
  }return whs1 + 0x1;
}function q_czkrdt(u8jwsq, tdcrk, crdtz, _e9o6) {
  var zkctrd = _e9o6[crdtz];return null == zkctrd && (zkctrd = u8jwsq['lastIndexOf']('</' + crdtz + '>'), tdcrk > zkctrd && (zkctrd = u8jwsq['lastIndexOf']('</' + crdtz)), _e9o6[crdtz] = zkctrd), tdcrk > zkctrd;
}function q_j8qsuw(u8sj, l0pfx) {
  for (var krcz in u8sj) l0pfx[krcz] = u8sj[krcz];
}function q_zdrct$(tyck35, j41m8, avig, wsh) {
  var h1w8sj = tyck35['charAt'](j41m8 + 0x2);switch (h1w8sj) {case '-':
      if ('-' === tyck35['charAt'](j41m8 + 0x3)) {
        var dzrkc = tyck35['indexOf']('-->', j41m8 + 0x4);return dzrkc > j41m8 ? (avig['comment'](tyck35, j41m8 + 0x4, dzrkc - j41m8 - 0x4), dzrkc + 0x3) : (wsh['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == tyck35['substr'](j41m8 + 0x3, 0x6)) {
        var dzrkc = tyck35['indexOf'](']]>', j41m8 + 0x9);return avig['startCDATA'](), avig['characters'](tyck35, j41m8 + 0x9, dzrkc - j41m8 - 0x9), avig['endCDATA'](), dzrkc + 0x3;
      }var dk5c = q_sw8hj(tyck35, j41m8),
          qs8jw = dk5c['length'];if (qs8jw > 0x1 && /!doctype/i['test'](dk5c[0x0][0x0])) {
        var z$o_9 = dk5c[0x1][0x0],
            fpl0 = qs8jw > 0x3 && /^public$/i['test'](dk5c[0x2][0x0]) && dk5c[0x3][0x0],
            o9mn64 = qs8jw > 0x4 && dk5c[0x4][0x0],
            rzd$c = dk5c[qs8jw - 0x1];return avig['startDTD'](z$o_9, fpl0 && fpl0['replace'](/^(['"])(.*?)\1$/, '$2'), o9mn64 && o9mn64['replace'](/^(['"])(.*?)\1$/, '$2')), avig['endDTD'](), rzd$c['index'] + rzd$c[0x0]['length'];
      }}return -0x1;
}function q_nm1h6(pfl2a0, igbav7, xk3t5) {
  var t5dcky = pfl2a0['indexOf']('?>', igbav7);if (t5dcky) {
    var al20p = pfl2a0['substring'](igbav7, t5dcky)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (al20p) {
      {
        al20p[0x0]['length'];
      }return xk3t5['processingInstruction'](al20p[0x1], al20p[0x2]), t5dcky + 0x2;
    }return -0x1;
  }return -0x1;
}function q_e6_9() {}function q_hjus(eon9m, rzed_) {
  return eon9m['__proto__'] = rzed_, eon9m;
}function q_sw8hj(y3kxt, swujh) {
  var rtdz$,
      ezr_$ = [],
      pf2x03 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pf2x03['lastIndex'] = swujh, pf2x03['exec'](y3kxt); rtdz$ = pf2x03['exec'](y3kxt);) if (ezr_$['push'](rtdz$), rtdz$[0x1]) return ezr_$;
}var q_c5y3k = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    q_er_z = new RegExp('[\\-\\.0-9' + q_c5y3k['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    q_oe$_z9 = new RegExp('^' + q_c5y3k['source'] + q_er_z['source'] + '*(?::' + q_c5y3k['source'] + q_er_z['source'] + '*)?$'),
    q_sj1w8h = 0x0,
    q_afgl0 = 0x1,
    q_z_oe$9 = 0x2,
    q_albg = 0x3,
    q_uhw8sj = 0x4,
    q_jh841m = 0x5,
    q_zdr_$ = 0x6,
    q_nh164m = 0x7;q_crztd$['prototype'] = { 'parse': function (dz_$e, _zder$, su8qj) {
    var v7ig = this['domBuilder'];v7ig['startDocument'](), q_j8qsuw(_zder$, _zder$ = {}), q_rtkzd(dz_$e, _zder$, su8qj, v7ig, this['errorHandler']), v7ig['endDocument']();
  } }, q_e6_9['prototype'] = { 'setTagName': function (ktyrd) {
    if (!q_oe$_z9['test'](ktyrd)) throw new Error('invalid tagName:' + ktyrd);this['tagName'] = ktyrd;
  }, 'add': function (tk3xy, n4o1m6, $_rzdc) {
    if (!q_oe$_z9['test'](tk3xy)) throw new Error('invalid attribute:' + tk3xy);this[this['length']++] = { 'qName': tk3xy, 'value': n4o1m6, 'offset': $_rzdc };
  }, 'length': 0x0, 'getLocalName': function (afl0pg) {
    return this[afl0pg]['localName'];
  }, 'getLocator': function (kx5y3t) {
    return this[kx5y3t]['locator'];
  }, 'getQName': function (givlb) {
    return this[givlb]['qName'];
  }, 'getURI': function (_re9$) {
    return this[_re9$]['uri'];
  }, 'getValue': function (m84h61) {
    return this[m84h61]['value'];
  } }, q_hjus({}, q_hjus['prototype']) instanceof q_hjus || (q_hjus = function (w8squ, e_r$d) {
  function bipl() {}bipl['prototype'] = e_r$d, bipl = new bipl();for (e_r$d in w8squ) bipl[e_r$d] = w8squ[e_r$d];return bipl;
}), exports['XMLReader'] = q_crztd$;