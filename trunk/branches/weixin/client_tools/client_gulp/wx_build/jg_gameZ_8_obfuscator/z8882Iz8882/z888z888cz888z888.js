var G = wx.$G;
function av87l63() {}function au019wp(puw, odf5k4, vl6ka, bztsnm, txzbmn) {
  function pw901g(af5vk4) {
    if (af5vk4 > 0xffff) {
      af5vk4 -= 0x10000;var uf1 = 0xd800 + (af5vk4 >> 0xa),
          $3qr_e = 0xdc00 + (0x3ff & af5vk4);return String['fromCharCode'](uf1, $3qr_e);
    }return String['fromCharCode'](af5vk4);
  }function f54kdo(pwuo) {
    var wd0u = pwuo['slice'](0x1, -0x1);return wd0u in vl6ka ? vl6ka[wd0u] : '#' === wd0u['charAt'](0x0) ? pw901g(parseInt(wd0u['substr'](0x1)['replace']('x', '0x'))) : (txzbmn['error']('entity not found:' + pwuo), pwuo);
  }function alkv67(wupo1) {
    if (wupo1 > mrsz$) {
      var le3$q = puw['substring'](mrsz$, wupo1)['replace'](/&#?\w+;/g, f54kdo);ow0ud1 && v67lak(mrsz$), bztsnm['characters'](le3$q, 0x0, wupo1 - mrsz$), mrsz$ = wupo1;
    }
  }function v67lak(nyxt, iyc2jh) {
    for (; nyxt >= xhyc && (iyc2jh = re_sm['exec'](puw));) yxtni = iyc2jh['index'], xhyc = yxtni + iyc2jh[0x0]['length'], ow0ud1['lineNumber']++;ow0ud1['columnNumber'] = nyxt - yxtni + 0x1;
  }for (var yxtni = 0x0, xhyc = 0x0, re_sm = /.*(?:\r\n?|\n)|.*$/g, ow0ud1 = bztsnm['locator'], u01wpo = [{ 'currentNSMap': odf5k4 }], le38q$ = {}, mrsz$ = 0x0;;) {
    try {
      var f45 = puw['indexOf']('<', mrsz$);if (0x0 > f45) {
        if (!puw['substr'](mrsz$)['match'](/^\s*$/)) {
          var rmzn_ = bztsnm['doc'],
              it2hy = rmzn_['createTextNode'](puw['substr'](mrsz$));rmzn_['appendChild'](it2hy), bztsnm['currentElement'] = it2hy;
        }return;
      }switch (f45 > mrsz$ && alkv67(f45), puw['charAt'](f45 + 0x1)) {case '/':
          var re$_q3 = puw['indexOf']('>', f45 + 0x3),
              h2ixyt = puw['substring'](f45 + 0x2, re$_q3),
              sm_rz = u01wpo['pop']();0x0 > re$_q3 ? (h2ixyt = puw['substring'](f45 + 0x2)['replace'](/[\s<].*/, ''), txzbmn['error']('end tag name: ' + h2ixyt + ' is not complete:' + sm_rz['tagName']), re$_q3 = f45 + 0x1 + h2ixyt['length']) : h2ixyt['match'](/\s</) && (h2ixyt = h2ixyt['replace'](/[\s<].*/, ''), txzbmn['error']('end tag name: ' + h2ixyt + ' maybe not complete'), re$_q3 = f45 + 0x1 + h2ixyt['length']);var seq$r_ = sm_rz['localNSMap'],
              w9p10 = sm_rz['tagName'] == h2ixyt,
              _emr$ = w9p10 || sm_rz['tagName'] && sm_rz['tagName']['toLowerCase']() == h2ixyt['toLowerCase']();if (_emr$) {
            if (bztsnm['endElement'](sm_rz['uri'], sm_rz['localName'], h2ixyt), seq$r_) {
              for (var i2hyxc in seq$r_) bztsnm['endPrefixMapping'](i2hyxc);
            }w9p10 || txzbmn['fatalError']('end tag name: ' + h2ixyt + ' is not match the current start tagName:' + sm_rz['tagName']);
          } else u01wpo['push'](sm_rz);re$_q3++;break;case '?':
          ow0ud1 && v67lak(f45), re$_q3 = a$ms_z(puw, f45, bztsnm);break;case '!':
          ow0ud1 && v67lak(f45), re$_q3 = a_3r$(puw, f45, bztsnm, txzbmn);break;default:
          ow0ud1 && v67lak(f45);var _rszn = new av75k6(),
              tbxniz = u01wpo[u01wpo['length'] - 0x1]['currentNSMap'],
              re$_q3 = a_q38(puw, f45, _rszn, tbxniz, f54kdo, txzbmn),
              yth2i = _rszn['length'];if (!_rszn['closed'] && aeqrs_(puw, re$_q3, _rszn['tagName'], le38q$) && (_rszn['closed'] = !0x0, vl6ka['nbsp'] || txzbmn['warning']('unclosed xml attribute')), ow0ud1 && yth2i) {
            for (var ntbixz = ae$ms(ow0ud1, {}), do1w0 = 0x0; yth2i > do1w0; do1w0++) {
              var mz_snr = _rszn[do1w0];v67lak(mz_snr['offset']), mz_snr['locator'] = ae$ms(ow0ud1, {});
            }bztsnm['locator'] = ntbixz, apwu901(_rszn, bztsnm, tbxniz) && u01wpo['push'](_rszn), bztsnm['locator'] = ow0ud1;
          } else apwu901(_rszn, bztsnm, tbxniz) && u01wpo['push'](_rszn);'http://www.w3.org/1999/xhtml' !== _rszn['uri'] || _rszn['closed'] ? re$_q3++ : re$_q3 = anrsmz_(puw, re$_q3, _rszn['tagName'], f54kdo, bztsnm);}
    } catch (u1pwo) {
      txzbmn['error']('element parse error: ' + u1pwo), re$_q3 = -0x1;
    }re$_q3 > mrsz$ ? mrsz$ = re$_q3 : alkv67(Math['max'](f45, mrsz$) + 0x1);
  }
}function ae$ms(g1w09, ak67) {
  return ak67['lineNumber'] = g1w09['lineNumber'], ak67['columnNumber'] = g1w09['columnNumber'], ak67;
}function a_q38(zmn_rs, mnrs, vlak6, $r_szm, chyx, fd5ak) {
  for (var af5k, $e_r3, bixnt = ++mnrs, ybxhit = ae3$l;;) {
    var sm_rnz = zmn_rs['charAt'](bixnt);switch (sm_rnz) {case '=':
        if (ybxhit === a_esm) af5k = zmn_rs['slice'](mnrs, bixnt), ybxhit = amtbs;else {
          if (ybxhit !== ayh2ji) throw new Error('attribute equal must after attrName');ybxhit = amtbs;
        }break;case '\x27':case '\x22':
        if (ybxhit === amtbs || ybxhit === a_esm) {
          if (ybxhit === a_esm && (fd5ak['warning']('attribute value must after "="'), af5k = zmn_rs['slice'](mnrs, bixnt)), mnrs = bixnt + 0x1, bixnt = zmn_rs['indexOf'](sm_rnz, mnrs), !(bixnt > 0x0)) throw new Error('attribute value no end \'' + sm_rnz + '\' match');$e_r3 = zmn_rs['slice'](mnrs, bixnt)['replace'](/&#?\w+;/g, chyx), vlak6['add'](af5k, $e_r3, mnrs - 0x1), ybxhit = a_mr$;
        } else {
          if (ybxhit != asrem$) throw new Error('attribute value must after "="');$e_r3 = zmn_rs['slice'](mnrs, bixnt)['replace'](/&#?\w+;/g, chyx), vlak6['add'](af5k, $e_r3, mnrs), fd5ak['warning']('attribute "' + af5k + '" missed start quot(' + sm_rnz + ')!!'), mnrs = bixnt + 0x1, ybxhit = a_mr$;
        }break;case '/':
        switch (ybxhit) {case ae3$l:
            vlak6['setTagName'](zmn_rs['slice'](mnrs, bixnt));case a_mr$:case al6vk7:case al7a:
            ybxhit = al7a, vlak6['closed'] = !0x0;case asrem$:case a_esm:case ayh2ji:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fd5ak['error']('unexpected end of input'), ybxhit == ae3$l && vlak6['setTagName'](zmn_rs['slice'](mnrs, bixnt)), bixnt;case '>':
        switch (ybxhit) {case ae3$l:
            vlak6['setTagName'](zmn_rs['slice'](mnrs, bixnt));case a_mr$:case al6vk7:case al7a:
            break;case asrem$:case a_esm:
            $e_r3 = zmn_rs['slice'](mnrs, bixnt), '/' === $e_r3['slice'](-0x1) && (vlak6['closed'] = !0x0, $e_r3 = $e_r3['slice'](0x0, -0x1));case ayh2ji:
            ybxhit === ayh2ji && ($e_r3 = af5k), ybxhit == asrem$ ? (fd5ak['warning']('attribute "' + $e_r3 + '" missed quot(")!!'), vlak6['add'](af5k, $e_r3['replace'](/&#?\w+;/g, chyx), mnrs)) : ('http://www.w3.org/1999/xhtml' === $r_szm[''] && $e_r3['match'](/^(?:disabled|checked|selected)$/i) || fd5ak['warning']('attribute "' + $e_r3 + '" missed value!! "' + $e_r3 + '" instead!!'), vlak6['add']($e_r3, $e_r3, mnrs));break;case amtbs:
            throw new Error('attribute value missed!!');}return bixnt;case '\u0080':
        sm_rnz = '\x20';default:
        if ('\x20' >= sm_rnz) switch (ybxhit) {case ae3$l:
            vlak6['setTagName'](zmn_rs['slice'](mnrs, bixnt)), ybxhit = al6vk7;break;case a_esm:
            af5k = zmn_rs['slice'](mnrs, bixnt), ybxhit = ayh2ji;break;case asrem$:
            var $e_r3 = zmn_rs['slice'](mnrs, bixnt)['replace'](/&#?\w+;/g, chyx);fd5ak['warning']('attribute "' + $e_r3 + '" missed quot(")!!'), vlak6['add'](af5k, $e_r3, mnrs);case a_mr$:
            ybxhit = al6vk7;} else switch (ybxhit) {case ayh2ji:
            {
              vlak6['tagName'];
            }'http://www.w3.org/1999/xhtml' === $r_szm[''] && af5k['match'](/^(?:disabled|checked|selected)$/i) || fd5ak['warning']('attribute "' + af5k + '" missed value!! "' + af5k + '" instead2!!'), vlak6['add'](af5k, af5k, mnrs), mnrs = bixnt, ybxhit = a_esm;break;case a_mr$:
            fd5ak['warning']('attribute space is required"' + af5k + '\x22!!');case al6vk7:
            ybxhit = a_esm, mnrs = bixnt;break;case amtbs:
            ybxhit = asrem$, mnrs = bixnt;break;case al7a:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bixnt++;
  }
}function apwu901(ic2yj, av8l6, srmz_n) {
  for (var s_$er = ic2yj['tagName'], xbmzn = null, fo54dk = ic2yj['length']; fo54dk--;) {
    var do5f = ic2yj[fo54dk],
        e3l$8q = do5f['qName'],
        cyi2hx = do5f['value'],
        v45akf = e3l$8q['indexOf'](':');if (v45akf > 0x0) var xtynib = do5f['prefix'] = e3l$8q['slice'](0x0, v45akf),
        rme = e3l$8q['slice'](v45akf + 0x1),
        hy2i = 'xmlns' === xtynib && rme;else rme = e3l$8q, xtynib = null, hy2i = 'xmlns' === e3l$8q && '';do5f['localName'] = rme, hy2i !== !0x1 && (null == xbmzn && (xbmzn = {}, agp19w0(srmz_n, srmz_n = {})), srmz_n[hy2i] = xbmzn[hy2i] = cyi2hx, do5f['uri'] = 'http://www.w3.org/2000/xmlns/', av8l6['startPrefixMapping'](hy2i, cyi2hx));
  }for (var fo54dk = ic2yj['length']; fo54dk--;) {
    do5f = ic2yj[fo54dk];var xtynib = do5f['prefix'];xtynib && ('xml' === xtynib && (do5f['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xtynib && (do5f['uri'] = srmz_n[xtynib || '']));
  }var v45akf = s_$er['indexOf'](':');v45akf > 0x0 ? (xtynib = ic2yj['prefix'] = s_$er['slice'](0x0, v45akf), rme = ic2yj['localName'] = s_$er['slice'](v45akf + 0x1)) : (xtynib = null, rme = ic2yj['localName'] = s_$er);var er_ = ic2yj['uri'] = srmz_n[xtynib || ''];if (av8l6['startElement'](er_, rme, s_$er, ic2yj), !ic2yj['closed']) return ic2yj['currentNSMap'] = srmz_n, ic2yj['localNSMap'] = xbmzn, !0x0;if (av8l6['endElement'](er_, rme, s_$er), xbmzn) {
    for (xtynib in xbmzn) av8l6['endPrefixMapping'](xtynib);
  }
}function anrsmz_(tbmszn, hyxti2, mnzbsr, v6a7k, akfd4) {
  if (/^(?:script|textarea)$/i['test'](mnzbsr)) {
    var hyj = tbmszn['indexOf']('</' + mnzbsr + '>', hyxti2),
        btnixy = tbmszn['substring'](hyxti2 + 0x1, hyj);if (/[&<]/['test'](btnixy)) return (/^script$/i['test'](mnzbsr) ? (akfd4['characters'](btnixy, 0x0, btnixy['length']), hyj) : (btnixy = btnixy['replace'](/&#?\w+;/g, v6a7k), akfd4['characters'](btnixy, 0x0, btnixy['length']), hyj)
    );
  }return hyxti2 + 0x1;
}function aeqrs_(le38$, $srem_, kfa4v, q863l) {
  var l8367q = q863l[kfa4v];return null == l8367q && (l8367q = le38$['lastIndexOf']('</' + kfa4v + '>'), $srem_ > l8367q && (l8367q = le38$['lastIndexOf']('</' + kfa4v)), q863l[kfa4v] = l8367q), $srem_ > l8367q;
}function agp19w0(f4av, xmzbnt) {
  for (var uf5o in f4av) xmzbnt[uf5o] = f4av[uf5o];
}function a_3r$(nrm_zs, tzbxnm, bhity, sm$_) {
  var znxmbt = nrm_zs['charAt'](tzbxnm + 0x2);switch (znxmbt) {case '-':
      if ('-' === nrm_zs['charAt'](tzbxnm + 0x3)) {
        var cih2yj = nrm_zs['indexOf']('-->', tzbxnm + 0x4);return cih2yj > tzbxnm ? (bhity['comment'](nrm_zs, tzbxnm + 0x4, cih2yj - tzbxnm - 0x4), cih2yj + 0x3) : (sm$_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nrm_zs['substr'](tzbxnm + 0x3, 0x6)) {
        var cih2yj = nrm_zs['indexOf'](']]>', tzbxnm + 0x9);return bhity['startCDATA'](), bhity['characters'](nrm_zs, tzbxnm + 0x9, cih2yj - tzbxnm - 0x9), bhity['endCDATA'](), cih2yj + 0x3;
      }var u54dof = akfa4(nrm_zs, tzbxnm),
          mzn_sr = u54dof['length'];if (mzn_sr > 0x1 && /!doctype/i['test'](u54dof[0x0][0x0])) {
        var e_38q = u54dof[0x1][0x0],
            woup01 = mzn_sr > 0x3 && /^public$/i['test'](u54dof[0x2][0x0]) && u54dof[0x3][0x0],
            wp9u1 = mzn_sr > 0x4 && u54dof[0x4][0x0],
            ybinxt = u54dof[mzn_sr - 0x1];return bhity['startDTD'](e_38q, woup01 && woup01['replace'](/^(['"])(.*?)\1$/, '$2'), wp9u1 && wp9u1['replace'](/^(['"])(.*?)\1$/, '$2')), bhity['endDTD'](), ybinxt['index'] + ybinxt[0x0]['length'];
      }}return -0x1;
}function a$ms_z(kvf, val67k, $_3e8q) {
  var h2cxi = kvf['indexOf']('?>', val67k);if (h2cxi) {
    var hxyc2i = kvf['substring'](val67k, h2cxi)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hxyc2i) {
      {
        hxyc2i[0x0]['length'];
      }return $_3e8q['processingInstruction'](hxyc2i[0x1], hxyc2i[0x2]), h2cxi + 0x2;
    }return -0x1;
  }return -0x1;
}function av75k6() {}function a_3r(w4du1o, hti) {
  return w4du1o['__proto__'] = hti, w4du1o;
}function akfa4(ql638, sztnb) {
  var vl78a6,
      od45fk = [],
      e$_ms = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (e$_ms['lastIndex'] = sztnb, e$_ms['exec'](ql638); vl78a6 = e$_ms['exec'](ql638);) if (od45fk['push'](vl78a6), vl78a6[0x1]) return od45fk;
}var as$r_zm = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    aitxybh = new RegExp('[\\-\\.0-9' + as$r_zm['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    alvk76 = new RegExp('^' + as$r_zm['source'] + aitxybh['source'] + '*(?::' + as$r_zm['source'] + aitxybh['source'] + '*)?$'),
    ae3$l = 0x0,
    a_esm = 0x1,
    ayh2ji = 0x2,
    amtbs = 0x3,
    asrem$ = 0x4,
    a_mr$ = 0x5,
    al6vk7 = 0x6,
    al7a = 0x7;av87l63['prototype'] = { 'parse': function (xhyci, bxitn, _znmsr) {
    var tmnbzx = this['domBuilder'];tmnbzx['startDocument'](), agp19w0(bxitn, bxitn = {}), au019wp(xhyci, bxitn, _znmsr, tmnbzx, this['errorHandler']), tmnbzx['endDocument']();
  } }, av75k6['prototype'] = { 'setTagName': function (ud4f5) {
    if (!alvk76['test'](ud4f5)) throw new Error('invalid tagName:' + ud4f5);this['tagName'] = ud4f5;
  }, 'add': function (uo14d, bxhti, avl67k) {
    if (!alvk76['test'](uo14d)) throw new Error('invalid attribute:' + uo14d);this[this['length']++] = { 'qName': uo14d, 'value': bxhti, 'offset': avl67k };
  }, 'length': 0x0, 'getLocalName': function (dfka45) {
    return this[dfka45]['localName'];
  }, 'getLocator': function (qle38) {
    return this[qle38]['locator'];
  }, 'getQName': function (mtbxzn) {
    return this[mtbxzn]['qName'];
  }, 'getURI': function (jyih2c) {
    return this[jyih2c]['uri'];
  }, 'getValue': function (_s$m) {
    return this[_s$m]['value'];
  } }, a_3r({}, a_3r['prototype']) instanceof a_3r || (a_3r = function (xty2ih, po1) {
  function inztx() {}inztx['prototype'] = po1, inztx = new inztx();for (po1 in xty2ih) inztx[po1] = xty2ih[po1];return inztx;
}), exports['XMLReader'] = av87l63;