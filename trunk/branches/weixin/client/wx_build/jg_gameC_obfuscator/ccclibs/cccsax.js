var p = wx.$h;
function a_ytxs() {}function a_mjnlk(gbfcde, jnlkom, cfhg, qonprm, hkmilj) {
  function mikjn(ehfji) {
    var ighjf = ehfji['slice'](0x1, -0x1);return ighjf in cfhg ? cfhg[ighjf] : '#' === ighjf['charAt'](0x0) ? 0xffff < (ighjf = parseInt(ighjf['substr'](0x1)['replace']('x', '0x'))) ? (ighjf -= 0x10000, String['fromCharCode'](0xd800 + (ighjf >> 0xa), 0xdc00 + (0x3ff & ighjf))) : String['fromCharCode'](ighjf) : (hkmilj['error']('entity not found:' + ehfji), ehfji);
  }function qvrwt(ecfda) {
    var stvxrw;lokj < ecfda && (stvxrw = gbfcde['substring'](lokj, ecfda)['replace'](/&#?\w+;/g, mikjn), xzwyvt && sponrq(lokj), qonprm['characters'](stvxrw, 0x0, ecfda - lokj), lokj = ecfda);
  }function sponrq(glkij, opqsrn) {
    for (; jlkm <= glkij && (opqsrn = twvysx['exec'](gbfcde));) xrvst = opqsrn['index'], jlkm = xrvst + opqsrn[0x0]['length'], xzwyvt['lineNumber']++;xzwyvt['columnNumber'] = glkij - xrvst + 0x1;
  }for (var xrvst = 0x0, jlkm = 0x0, twvysx = /.*(?:\r\n?|\n)|.*$/g, xzwyvt = qonprm['locator'], qwtvsr = [{ 'currentNSMap': jnlkom }], wtqvr = {}, lokj = 0x0;;) {
    try {
      var imlkhj = gbfcde['indexOf']('<', lokj),
          sxvwtr,
          lojnmk;if (imlkhj < 0x0) return void (gbfcde['substr'](lokj)['match'](/^\s*$/) || (lojnmk = (sxvwtr = qonprm['doc'])['createTextNode'](gbfcde['substr'](lokj)), sxvwtr['appendChild'](lojnmk), qonprm['currentElement'] = lojnmk));switch (lokj < imlkhj && qvrwt(imlkhj), gbfcde['charAt'](imlkhj + 0x1)) {case '/':
          var nljik = gbfcde['indexOf']('>', imlkhj + 0x3),
              wvyxzt = gbfcde['substring'](imlkhj + 0x2, nljik),
              onmrp = qwtvsr['pop']();nljik < 0x0 ? (wvyxzt = gbfcde['substring'](imlkhj + 0x2)['replace'](/[\s<].*/, ''), hkmilj['error']('end tag name: ' + wvyxzt + ' is not complete:' + onmrp['tagName']), nljik = imlkhj + 0x1 + wvyxzt['length']) : wvyxzt['match'](/\s</) && (wvyxzt = wvyxzt['replace'](/[\s<].*/, ''), hkmilj['error']('end tag name: ' + wvyxzt + ' maybe not complete'), nljik = imlkhj + 0x1 + wvyxzt['length']);var _32$0 = onmrp['localNSMap'],
              gdebcf = onmrp['tagName'] == wvyxzt;if (gdebcf || onmrp['tagName'] && onmrp['tagName']['toLowerCase']() == wvyxzt['toLowerCase']()) {
            if (qonprm['endElement'](onmrp['uri'], onmrp['localName'], wvyxzt), _32$0) {
              for (var xwyz$v in _32$0) qonprm['endPrefixMapping'](xwyz$v);
            }gdebcf || hkmilj['fatalError']('end tag name: ' + wvyxzt + ' is not match the current start tagName:' + onmrp['tagName']);
          } else qwtvsr['push'](onmrp);nljik++;break;case '?':
          xzwyvt && sponrq(imlkhj), nljik = a_z1_0$y(gbfcde, imlkhj, qonprm);break;case '!':
          xzwyvt && sponrq(imlkhj), nljik = a_tqsrvp(gbfcde, imlkhj, qonprm, hkmilj);break;default:
          xzwyvt && sponrq(imlkhj);var ywv = new a_z_$1y0(),
              bgec = qwtvsr[qwtvsr['length'] - 0x1]['currentNSMap'],
              nljik = a_xwtyvs(gbfcde, imlkhj, ywv, bgec, mikjn, hkmilj),
              hkli = ywv['length'];if (!ywv['closed'] && a_nmolk(gbfcde, nljik, ywv['tagName'], wtqvr) && (ywv['closed'] = !0x0, cfhg['nbsp'] || hkmilj['warning']('unclosed xml attribute')), xzwyvt && hkli) {
            for (var edcafb = a_hjlgk(xzwyvt, {}), fdeba = 0x0; fdeba < hkli; fdeba++) {
              var prvts = ywv[fdeba];sponrq(prvts['offset']), prvts['locator'] = a_hjlgk(xzwyvt, {});
            }qonprm['locator'] = edcafb, a_gbfec(ywv, qonprm, bgec) && qwtvsr['push'](ywv), qonprm['locator'] = xzwyvt;
          } else a_gbfec(ywv, qonprm, bgec) && qwtvsr['push'](ywv);'http://www.w3.org/1999/xhtml' !== ywv['uri'] || ywv['closed'] ? nljik++ : nljik = a_qopml(gbfcde, nljik, ywv['tagName'], mikjn, qonprm);}
    } catch (dhgfi) {
      hkmilj['error']('element parse error: ' + dhgfi), nljik = -0x1;
    }lokj < nljik ? lokj = nljik : qvrwt(Math['max'](imlkhj, lokj) + 0x1);
  }
}function a_hjlgk($yz_, vqsrt) {
  return vqsrt['lineNumber'] = $yz_['lineNumber'], vqsrt['columnNumber'] = $yz_['columnNumber'], vqsrt;
}function a_xwtyvs(fjkig, beafdc, osqprt, nlqm, ilh, yvx$wz) {
  for (var _z10y$, jif = ++beafdc, gdcf = a_koplnm;;) {
    var hlmjk = fjkig['charAt'](jif);switch (hlmjk) {case '=':
        if (gdcf === a_oprstq) _z10y$ = fjkig['slice'](beafdc, jif), gdcf = a_wsvxty;else {
          if (gdcf !== a_xv$yw) throw new Error('attribute equal must after attrName');gdcf = a_wsvxty;
        }break;case '\x27':case '\x22':
        if (gdcf === a_wsvxty || gdcf === a_oprstq) {
          if (gdcf === a_oprstq && (yvx$wz['warning']('attribute value must after "="'), _z10y$ = fjkig['slice'](beafdc, jif)), !(0x0 < (jif = fjkig['indexOf'](hlmjk, beafdc = jif + 0x1)))) throw new Error('attribute value no end \'' + hlmjk + '\' match');_x$wyz = fjkig['slice'](beafdc, jif)['replace'](/&#?\w+;/g, ilh), osqprt['add'](_z10y$, _x$wyz, beafdc - 0x1), gdcf = a__12$0z;
        } else {
          if (gdcf != a_lokm) throw new Error('attribute value must after "="');_x$wyz = fjkig['slice'](beafdc, jif)['replace'](/&#?\w+;/g, ilh), osqprt['add'](_z10y$, _x$wyz, beafdc), yvx$wz['warning']('attribute "' + _z10y$ + '" missed start quot(' + hlmjk + ')!!'), beafdc = jif + 0x1, gdcf = a__12$0z;
        }break;case '/':
        switch (gdcf) {case a_koplnm:
            osqprt['setTagName'](fjkig['slice'](beafdc, jif));case a__12$0z:case a_qtrsv:case a_vz$yx:
            gdcf = a_vz$yx, osqprt['closed'] = !0x0;case a_lokm:case a_oprstq:case a_xv$yw:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yvx$wz['error']('unexpected end of input'), gdcf == a_koplnm && osqprt['setTagName'](fjkig['slice'](beafdc, jif)), jif;case '>':
        switch (gdcf) {case a_koplnm:
            osqprt['setTagName'](fjkig['slice'](beafdc, jif));case a__12$0z:case a_qtrsv:case a_vz$yx:
            break;case a_lokm:case a_oprstq:
            '/' === (_x$wyz = fjkig['slice'](beafdc, jif))['slice'](-0x1) && (osqprt['closed'] = !0x0, _x$wyz = _x$wyz['slice'](0x0, -0x1));case a_xv$yw:
            gdcf === a_xv$yw && (_x$wyz = _z10y$), gdcf == a_lokm ? (yvx$wz['warning']('attribute "' + _x$wyz + '" missed quot(")!!'), osqprt['add'](_z10y$, _x$wyz['replace'](/&#?\w+;/g, ilh), beafdc)) : ('http://www.w3.org/1999/xhtml' === nlqm[''] && _x$wyz['match'](/^(?:disabled|checked|selected)$/i) || yvx$wz['warning']('attribute "' + _x$wyz + '" missed value!! "' + _x$wyz + '" instead!!'), osqprt['add'](_x$wyz, _x$wyz, beafdc));break;case a_wsvxty:
            throw new Error('attribute value missed!!');}return jif;case '\u0080':
        hlmjk = '\x20';default:
        if (hlmjk <= '\x20') switch (gdcf) {case a_koplnm:
            osqprt['setTagName'](fjkig['slice'](beafdc, jif)), gdcf = a_qtrsv;break;case a_oprstq:
            _z10y$ = fjkig['slice'](beafdc, jif), gdcf = a_xv$yw;break;case a_lokm:
            var _x$wyz = fjkig['slice'](beafdc, jif)['replace'](/&#?\w+;/g, ilh);yvx$wz['warning']('attribute "' + _x$wyz + '" missed quot(")!!'), osqprt['add'](_z10y$, _x$wyz, beafdc);case a__12$0z:
            gdcf = a_qtrsv;} else switch (gdcf) {case a_xv$yw:
            osqprt['tagName'], 'http://www.w3.org/1999/xhtml' === nlqm[''] && _z10y$['match'](/^(?:disabled|checked|selected)$/i) || yvx$wz['warning']('attribute "' + _z10y$ + '" missed value!! "' + _z10y$ + '" instead2!!'), osqprt['add'](_z10y$, _z10y$, beafdc), beafdc = jif, gdcf = a_oprstq;break;case a__12$0z:
            yvx$wz['warning']('attribute space is required"' + _z10y$ + '\x22!!');case a_qtrsv:
            gdcf = a_oprstq, beafdc = jif;break;case a_wsvxty:
            gdcf = a_lokm, beafdc = jif;break;case a_vz$yx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}jif++;
  }
}function a_gbfec(cdfbae, igjkhf, bfdc) {
  for (var hmjkli = cdfbae['tagName'], _z0$1y = null, tvxsrw = cdfbae['length']; tvxsrw--;) {
    var gihkjl = cdfbae[tvxsrw],
        ronqps = gihkjl['qName'],
        fhdegi = gihkjl['value'],
        ihjgfe;ronqps = 0x0 < (zyx_0 = ronqps['indexOf'](':')) ? (xwsrv = gihkjl['prefix'] = ronqps['slice'](0x0, zyx_0), ihjgfe = ronqps['slice'](zyx_0 + 0x1), 'xmlns' === xwsrv && ihjgfe) : (xwsrv = null, 'xmlns' === (ihjgfe = ronqps) && ''), gihkjl['localName'] = ihjgfe, !0x1 !== ronqps && (null == _z0$1y && (_z0$1y = {}, a_kfi(bfdc, bfdc = {})), bfdc[ronqps] = _z0$1y[ronqps] = fhdegi, gihkjl['uri'] = 'http://www.w3.org/2000/xmlns/', igjkhf['startPrefixMapping'](ronqps, fhdegi));
  }for (tvxsrw = cdfbae['length']; tvxsrw--;) (xwsrv = (gihkjl = cdfbae[tvxsrw])['prefix']) && ('xml' === xwsrv && (gihkjl['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xwsrv && (gihkjl['uri'] = bfdc[xwsrv || '']));var zyx_0;ihjgfe = 0x0 < (zyx_0 = hmjkli['indexOf'](':')) ? (xwsrv = cdfbae['prefix'] = hmjkli['slice'](0x0, zyx_0), cdfbae['localName'] = hmjkli['slice'](zyx_0 + 0x1)) : (xwsrv = null, cdfbae['localName'] = hmjkli);var degcf = cdfbae['uri'] = bfdc[xwsrv || ''];if (igjkhf['startElement'](degcf, ihjgfe, hmjkli, cdfbae), !cdfbae['closed']) return cdfbae['currentNSMap'] = bfdc, cdfbae['localNSMap'] = _z0$1y, !0x0;if (igjkhf['endElement'](degcf, ihjgfe, hmjkli), _z0$1y) {
    for (var xwsrv in _z0$1y) igjkhf['endPrefixMapping'](xwsrv);
  }
}function a_qopml(srxwv, knjlmi, _24031, ifedh, pokmln) {
  if (/^(?:script|textarea)$/i['test'](_24031)) {
    var zvtwy = srxwv['indexOf']('</' + _24031 + '>', knjlmi),
        srxwv = srxwv['substring'](knjlmi + 0x1, zvtwy);if (/[&<]/['test'](srxwv)) return (/^script$/i['test'](_24031) || (srxwv = srxwv['replace'](/&#?\w+;/g, ifedh)), pokmln['characters'](srxwv, 0x0, srxwv['length']), zvtwy
    );
  }return knjlmi + 0x1;
}function a_nmolk(igjklh, nromp, ejgh, pnml) {
  var qsvwtr = pnml[ejgh];return null == qsvwtr && ((qsvwtr = igjklh['lastIndexOf']('</' + ejgh + '>')) < nromp && (qsvwtr = igjklh['lastIndexOf']('</' + ejgh)), pnml[ejgh] = qsvwtr), qsvwtr < nromp;
}function a_kfi(y_xz0, mnjol) {
  for (var ljnmik in y_xz0) mnjol[ljnmik] = y_xz0[ljnmik];
}function a_tqsrvp(fhkji, ijgfhk, $zxyv, $wyxz) {
  var ysxvt = fhkji['charAt'](ijgfhk + 0x2);if ('-' === ysxvt) return '-' !== fhkji['charAt'](ijgfhk + 0x3) ? -0x1 : ijgfhk < (iknjlm = fhkji['indexOf']('-->', ijgfhk + 0x4)) ? ($zxyv['comment'](fhkji, ijgfhk + 0x4, iknjlm - ijgfhk - 0x4), iknjlm + 0x3) : ($wyxz['error']('Unclosed comment'), -0x1);if ('CDATA[' == fhkji['substr'](ijgfhk + 0x3, 0x6)) {
    var iknjlm = fhkji['indexOf'](']]>', ijgfhk + 0x9);return $zxyv['startCDATA'](), $zxyv['characters'](fhkji, ijgfhk + 0x9, iknjlm - ijgfhk - 0x9), $zxyv['endCDATA'](), iknjlm + 0x3;
  }ysxvt = a_tsvxwr(fhkji, ijgfhk), $wyxz = ysxvt['length'];if (0x1 < $wyxz && /!doctype/i['test'](ysxvt[0x0][0x0])) return iknjlm = ysxvt[0x1][0x0], fhkji = 0x3 < $wyxz && /^public$/i['test'](ysxvt[0x2][0x0]) && ysxvt[0x3][0x0], ijgfhk = 0x4 < $wyxz && ysxvt[0x4][0x0], $wyxz = ysxvt[$wyxz - 0x1], ($zxyv['startDTD'](iknjlm, fhkji && fhkji['replace'](/^(['"])(.*?)\1$/, '$2'), ijgfhk && ijgfhk['replace'](/^(['"])(.*?)\1$/, '$2')), $zxyv['endDTD'](), $wyxz['index'] + $wyxz[0x0]['length']);return -0x1;
}function a_z1_0$y(prqsot, ijkfgh, hfjik) {
  var fgeji = prqsot['indexOf']('?>', ijkfgh);if (fgeji) return ijkfgh = prqsot['substring'](ijkfgh, fgeji)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), ijkfgh ? (ijkfgh[0x0]['length'], hfjik['processingInstruction'](ijkfgh[0x1], ijkfgh[0x2]), fgeji + 0x2) : -0x1;return -0x1;
}function a_z_$1y0() {}function a_$z0x_y(_03241, wyxz$) {
  return _03241['__proto__'] = wyxz$, _03241;
}function a_tsvxwr(xvy, y1$0_) {
  var gjkhil,
      wqrs = [],
      iljgkh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (iljgkh['lastIndex'] = y1$0_, iljgkh['exec'](xvy); gjkhil = iljgkh['exec'](xvy);) if (wqrs['push'](gjkhil), gjkhil[0x1]) return wqrs;
}var a_mkiln = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_higjfe = new RegExp('[\\-\\.0-9' + a_mkiln['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_sqtr = new RegExp('^' + a_mkiln['source'] + a_higjfe['source'] + '*(?::' + a_mkiln['source'] + a_higjfe['source'] + '*)?$'),
    a_koplnm = 0x0,
    a_oprstq = 0x1,
    a_xv$yw = 0x2,
    a_wsvxty = 0x3,
    a_lokm = 0x4,
    a__12$0z = 0x5,
    a_qtrsv = 0x6,
    a_vz$yx = 0x7;a_ytxs['prototype'] = { 'parse': function (lnjko, wy$zvx, pokn) {
    var _z0$x = this['domBuilder'];_z0$x['startDocument'](), a_kfi(wy$zvx, wy$zvx = {}), a_mjnlk(lnjko, wy$zvx, pokn, _z0$x, this['errorHandler']), _z0$x['endDocument']();
  } }, a_z_$1y0['prototype'] = { 'setTagName': function (qsrv) {
    if (!a_sqtr['test'](qsrv)) throw new Error('invalid tagName:' + qsrv);this['tagName'] = qsrv;
  }, 'add': function (qnlpmo, dabec, swvxt) {
    if (!a_sqtr['test'](qnlpmo)) throw new Error('invalid attribute:' + qnlpmo);this[this['length']++] = { 'qName': qnlpmo, 'value': dabec, 'offset': swvxt };
  }, 'length': 0x0, 'getLocalName': function (ghej) {
    return this[ghej]['localName'];
  }, 'getLocator': function (dbca) {
    return this[dbca]['locator'];
  }, 'getQName': function (tswr) {
    return this[tswr]['qName'];
  }, 'getURI': function (qnor) {
    return this[qnor]['uri'];
  }, 'getValue': function (_03124) {
    return this[_03124]['value'];
  } }, a_$z0x_y({}, a_$z0x_y['prototype']) instanceof a_$z0x_y || (a_$z0x_y = function (efgbdc, gljhi) {
  function beadf() {}for (gljhi in beadf['prototype'] = gljhi, beadf = new beadf(), efgbdc) beadf[gljhi] = efgbdc[gljhi];return beadf;
}), exports['XMLReader'] = a_ytxs;