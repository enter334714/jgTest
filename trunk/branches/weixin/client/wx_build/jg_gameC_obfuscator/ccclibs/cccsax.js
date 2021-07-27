var p = wx.$h;
function a_wvr() {}function a_vsxwyt(fbcged, jinlkm, qsptrv, rstp, wqrtv) {
  function jih(stwqvr) {
    var nokjlm = stwqvr['slice'](0x1, -0x1);return nokjlm in qsptrv ? qsptrv[nokjlm] : '#' === nokjlm['charAt'](0x0) ? 0xffff < (nokjlm = parseInt(nokjlm['substr'](0x1)['replace']('x', '0x'))) ? (nokjlm -= 0x10000, String['fromCharCode'](0xd800 + (nokjlm >> 0xa), 0xdc00 + (0x3ff & nokjlm))) : String['fromCharCode'](nokjlm) : (wqrtv['error']('entity not found:' + stwqvr), stwqvr);
  }function qopmr(ecf) {
    var _x$zyw;jhigl < ecf && (_x$zyw = fbcged['substring'](jhigl, ecf)['replace'](/&#?\w+;/g, jih), tsqrvp && _312$0(jhigl), rstp['characters'](_x$zyw, 0x0, ecf - jhigl), jhigl = ecf);
  }function _312$0(ifhkjg, ywvz) {
    for (; kfghji <= ifhkjg && (ywvz = ornsp['exec'](fbcged));) mlnpok = ywvz['index'], kfghji = mlnpok + ywvz[0x0]['length'], tsqrvp['lineNumber']++;tsqrvp['columnNumber'] = ifhkjg - mlnpok + 0x1;
  }for (var mlnpok = 0x0, kfghji = 0x0, ornsp = /.*(?:\r\n?|\n)|.*$/g, tsqrvp = rstp['locator'], zvwyt = [{ 'currentNSMap': jinlkm }], jhife = {}, jhigl = 0x0;;) {
    try {
      var jnlok = fbcged['indexOf']('<', jhigl),
          _2z0,
          y_zx0;if (jnlok < 0x0) return void (fbcged['substr'](jhigl)['match'](/^\s*$/) || (y_zx0 = (_2z0 = rstp['doc'])['createTextNode'](fbcged['substr'](jhigl)), _2z0['appendChild'](y_zx0), rstp['currentElement'] = y_zx0));switch (jhigl < jnlok && qopmr(jnlok), fbcged['charAt'](jnlok + 0x1)) {case '/':
          var mnklo = fbcged['indexOf']('>', jnlok + 0x3),
              _$2z = fbcged['substring'](jnlok + 0x2, mnklo),
              tzwy = zvwyt['pop']();mnklo < 0x0 ? (_$2z = fbcged['substring'](jnlok + 0x2)['replace'](/[\s<].*/, ''), wqrtv['error']('end tag name: ' + _$2z + ' is not complete:' + tzwy['tagName']), mnklo = jnlok + 0x1 + _$2z['length']) : _$2z['match'](/\s</) && (_$2z = _$2z['replace'](/[\s<].*/, ''), wqrtv['error']('end tag name: ' + _$2z + ' maybe not complete'), mnklo = jnlok + 0x1 + _$2z['length']);var aefc = tzwy['localNSMap'],
              qtrsop = tzwy['tagName'] == _$2z;if (qtrsop || tzwy['tagName'] && tzwy['tagName']['toLowerCase']() == _$2z['toLowerCase']()) {
            if (rstp['endElement'](tzwy['uri'], tzwy['localName'], _$2z), aefc) {
              for (var rnspqo in aefc) rstp['endPrefixMapping'](rnspqo);
            }qtrsop || wqrtv['fatalError']('end tag name: ' + _$2z + ' is not match the current start tagName:' + tzwy['tagName']);
          } else zvwyt['push'](tzwy);mnklo++;break;case '?':
          tsqrvp && _312$0(jnlok), mnklo = a_hfgikj(fbcged, jnlok, rstp);break;case '!':
          tsqrvp && _312$0(jnlok), mnklo = a_prto(fbcged, jnlok, rstp, wqrtv);break;default:
          tsqrvp && _312$0(jnlok);var x$_zy = new a_cfdgeh(),
              y1$0_ = zvwyt[zvwyt['length'] - 0x1]['currentNSMap'],
              mnklo = a_ghejif(fbcged, jnlok, x$_zy, y1$0_, jih, wqrtv),
              jilghk = x$_zy['length'];if (!x$_zy['closed'] && a_xvsrt(fbcged, mnklo, x$_zy['tagName'], jhife) && (x$_zy['closed'] = !0x0, qsptrv['nbsp'] || wqrtv['warning']('unclosed xml attribute')), tsqrvp && jilghk) {
            for (var gcfbde = a_onlmqp(tsqrvp, {}), plnmko = 0x0; plnmko < jilghk; plnmko++) {
              var mlqpno = x$_zy[plnmko];_312$0(mlqpno['offset']), mlqpno['locator'] = a_onlmqp(tsqrvp, {});
            }rstp['locator'] = gcfbde, a_zxwy(x$_zy, rstp, y1$0_) && zvwyt['push'](x$_zy), rstp['locator'] = tsqrvp;
          } else a_zxwy(x$_zy, rstp, y1$0_) && zvwyt['push'](x$_zy);'http://www.w3.org/1999/xhtml' !== x$_zy['uri'] || x$_zy['closed'] ? mnklo++ : mnklo = a_hlmj(fbcged, mnklo, x$_zy['tagName'], jih, rstp);}
    } catch (afdeb) {
      wqrtv['error']('element parse error: ' + afdeb), mnklo = -0x1;
    }jhigl < mnklo ? jhigl = mnklo : qopmr(Math['max'](jnlok, jhigl) + 0x1);
  }
}function a_onlmqp(xvywst, zy$10_) {
  return zy$10_['lineNumber'] = xvywst['lineNumber'], zy$10_['columnNumber'] = xvywst['columnNumber'], zy$10_;
}function a_ghejif(pvstrq, xsywv, kmopn, x_z$, klpn, gkhijf) {
  for (var yxstwv, stwrv = ++xsywv, _30214 = a_zxywt;;) {
    var fihjge = pvstrq['charAt'](stwrv);switch (fihjge) {case '=':
        if (_30214 === a_fgei) yxstwv = pvstrq['slice'](xsywv, stwrv), _30214 = a_qrvts;else {
          if (_30214 !== a_cbdefg) throw new Error('attribute equal must after attrName');_30214 = a_qrvts;
        }break;case '\x27':case '\x22':
        if (_30214 === a_qrvts || _30214 === a_fgei) {
          if (_30214 === a_fgei && (gkhijf['warning']('attribute value must after "="'), yxstwv = pvstrq['slice'](xsywv, stwrv)), !(0x0 < (stwrv = pvstrq['indexOf'](fihjge, xsywv = stwrv + 0x1)))) throw new Error('attribute value no end \'' + fihjge + '\' match');qpomnr = pvstrq['slice'](xsywv, stwrv)['replace'](/&#?\w+;/g, klpn), kmopn['add'](yxstwv, qpomnr, xsywv - 0x1), _30214 = a_tqospr;
        } else {
          if (_30214 != a_jhkgil) throw new Error('attribute value must after "="');qpomnr = pvstrq['slice'](xsywv, stwrv)['replace'](/&#?\w+;/g, klpn), kmopn['add'](yxstwv, qpomnr, xsywv), gkhijf['warning']('attribute "' + yxstwv + '" missed start quot(' + fihjge + ')!!'), xsywv = stwrv + 0x1, _30214 = a_tqospr;
        }break;case '/':
        switch (_30214) {case a_zxywt:
            kmopn['setTagName'](pvstrq['slice'](xsywv, stwrv));case a_tqospr:case a_nploqm:case a_omjnkl:
            _30214 = a_omjnkl, kmopn['closed'] = !0x0;case a_jhkgil:case a_fgei:case a_cbdefg:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gkhijf['error']('unexpected end of input'), _30214 == a_zxywt && kmopn['setTagName'](pvstrq['slice'](xsywv, stwrv)), stwrv;case '>':
        switch (_30214) {case a_zxywt:
            kmopn['setTagName'](pvstrq['slice'](xsywv, stwrv));case a_tqospr:case a_nploqm:case a_omjnkl:
            break;case a_jhkgil:case a_fgei:
            '/' === (qpomnr = pvstrq['slice'](xsywv, stwrv))['slice'](-0x1) && (kmopn['closed'] = !0x0, qpomnr = qpomnr['slice'](0x0, -0x1));case a_cbdefg:
            _30214 === a_cbdefg && (qpomnr = yxstwv), _30214 == a_jhkgil ? (gkhijf['warning']('attribute "' + qpomnr + '" missed quot(")!!'), kmopn['add'](yxstwv, qpomnr['replace'](/&#?\w+;/g, klpn), xsywv)) : ('http://www.w3.org/1999/xhtml' === x_z$[''] && qpomnr['match'](/^(?:disabled|checked|selected)$/i) || gkhijf['warning']('attribute "' + qpomnr + '" missed value!! "' + qpomnr + '" instead!!'), kmopn['add'](qpomnr, qpomnr, xsywv));break;case a_qrvts:
            throw new Error('attribute value missed!!');}return stwrv;case '\u0080':
        fihjge = '\x20';default:
        if (fihjge <= '\x20') switch (_30214) {case a_zxywt:
            kmopn['setTagName'](pvstrq['slice'](xsywv, stwrv)), _30214 = a_nploqm;break;case a_fgei:
            yxstwv = pvstrq['slice'](xsywv, stwrv), _30214 = a_cbdefg;break;case a_jhkgil:
            var qpomnr = pvstrq['slice'](xsywv, stwrv)['replace'](/&#?\w+;/g, klpn);gkhijf['warning']('attribute "' + qpomnr + '" missed quot(")!!'), kmopn['add'](yxstwv, qpomnr, xsywv);case a_tqospr:
            _30214 = a_nploqm;} else switch (_30214) {case a_cbdefg:
            kmopn['tagName'], 'http://www.w3.org/1999/xhtml' === x_z$[''] && yxstwv['match'](/^(?:disabled|checked|selected)$/i) || gkhijf['warning']('attribute "' + yxstwv + '" missed value!! "' + yxstwv + '" instead2!!'), kmopn['add'](yxstwv, yxstwv, xsywv), xsywv = stwrv, _30214 = a_fgei;break;case a_tqospr:
            gkhijf['warning']('attribute space is required"' + yxstwv + '\x22!!');case a_nploqm:
            _30214 = a_fgei, xsywv = stwrv;break;case a_qrvts:
            _30214 = a_jhkgil, xsywv = stwrv;break;case a_omjnkl:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}stwrv++;
  }
}function a_zxwy(efji, wtqrsv, qsorp) {
  for (var jmlnk = efji['tagName'], twsq = null, rvstp = efji['length']; rvstp--;) {
    var kiljm = efji[rvstp],
        glhij = kiljm['qName'],
        klmonj = kiljm['value'],
        stqpor;glhij = 0x0 < (jhlig = glhij['indexOf'](':')) ? (hfied = kiljm['prefix'] = glhij['slice'](0x0, jhlig), stqpor = glhij['slice'](jhlig + 0x1), 'xmlns' === hfied && stqpor) : (hfied = null, 'xmlns' === (stqpor = glhij) && ''), kiljm['localName'] = stqpor, !0x1 !== glhij && (null == twsq && (twsq = {}, a_kmjni(qsorp, qsorp = {})), qsorp[glhij] = twsq[glhij] = klmonj, kiljm['uri'] = 'http://www.w3.org/2000/xmlns/', wtqrsv['startPrefixMapping'](glhij, klmonj));
  }for (rvstp = efji['length']; rvstp--;) (hfied = (kiljm = efji[rvstp])['prefix']) && ('xml' === hfied && (kiljm['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hfied && (kiljm['uri'] = qsorp[hfied || '']));var jhlig;stqpor = 0x0 < (jhlig = jmlnk['indexOf'](':')) ? (hfied = efji['prefix'] = jmlnk['slice'](0x0, jhlig), efji['localName'] = jmlnk['slice'](jhlig + 0x1)) : (hfied = null, efji['localName'] = jmlnk);var cadf = efji['uri'] = qsorp[hfied || ''];if (wtqrsv['startElement'](cadf, stqpor, jmlnk, efji), !efji['closed']) return efji['currentNSMap'] = qsorp, efji['localNSMap'] = twsq, !0x0;if (wtqrsv['endElement'](cadf, stqpor, jmlnk), twsq) {
    for (var hfied in twsq) wtqrsv['endPrefixMapping'](hfied);
  }
}function a_hlmj(gfhdec, _0z1y, mqnrp, w_z, lnijk) {
  if (/^(?:script|textarea)$/i['test'](mqnrp)) {
    var _3241 = gfhdec['indexOf']('</' + mqnrp + '>', _0z1y),
        gfhdec = gfhdec['substring'](_0z1y + 0x1, _3241);if (/[&<]/['test'](gfhdec)) return (/^script$/i['test'](mqnrp) || (gfhdec = gfhdec['replace'](/&#?\w+;/g, w_z)), lnijk['characters'](gfhdec, 0x0, gfhdec['length']), _3241
    );
  }return _0z1y + 0x1;
}function a_xvsrt($20_, fgkjh, njmlko, svrx) {
  var ilkjmn = svrx[njmlko];return null == ilkjmn && ((ilkjmn = $20_['lastIndexOf']('</' + njmlko + '>')) < fgkjh && (ilkjmn = $20_['lastIndexOf']('</' + njmlko)), svrx[njmlko] = ilkjmn), ilkjmn < fgkjh;
}function a_kmjni(sqrpto, klmihj) {
  for (var ghkjli in sqrpto) klmihj[ghkjli] = sqrpto[ghkjli];
}function a_prto(zw$x_y, xsvtwr, ikmnl, vrtwqs) {
  var jfehi = zw$x_y['charAt'](xsvtwr + 0x2);if ('-' === jfehi) return '-' !== zw$x_y['charAt'](xsvtwr + 0x3) ? -0x1 : xsvtwr < (iklmh = zw$x_y['indexOf']('-->', xsvtwr + 0x4)) ? (ikmnl['comment'](zw$x_y, xsvtwr + 0x4, iklmh - xsvtwr - 0x4), iklmh + 0x3) : (vrtwqs['error']('Unclosed comment'), -0x1);if ('CDATA[' == zw$x_y['substr'](xsvtwr + 0x3, 0x6)) {
    var iklmh = zw$x_y['indexOf'](']]>', xsvtwr + 0x9);return ikmnl['startCDATA'](), ikmnl['characters'](zw$x_y, xsvtwr + 0x9, iklmh - xsvtwr - 0x9), ikmnl['endCDATA'](), iklmh + 0x3;
  }jfehi = a_opnmlk(zw$x_y, xsvtwr), vrtwqs = jfehi['length'];if (0x1 < vrtwqs && /!doctype/i['test'](jfehi[0x0][0x0])) return iklmh = jfehi[0x1][0x0], zw$x_y = 0x3 < vrtwqs && /^public$/i['test'](jfehi[0x2][0x0]) && jfehi[0x3][0x0], xsvtwr = 0x4 < vrtwqs && jfehi[0x4][0x0], vrtwqs = jfehi[vrtwqs - 0x1], (ikmnl['startDTD'](iklmh, zw$x_y && zw$x_y['replace'](/^(['"])(.*?)\1$/, '$2'), xsvtwr && xsvtwr['replace'](/^(['"])(.*?)\1$/, '$2')), ikmnl['endDTD'](), vrtwqs['index'] + vrtwqs[0x0]['length']);return -0x1;
}function a_hfgikj(vtsqw, nlmik, z_$y10) {
  var cfabed = vtsqw['indexOf']('?>', nlmik);if (cfabed) return nlmik = vtsqw['substring'](nlmik, cfabed)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), nlmik ? (nlmik[0x0]['length'], z_$y10['processingInstruction'](nlmik[0x1], nlmik[0x2]), cfabed + 0x2) : -0x1;return -0x1;
}function a_cfdgeh() {}function a_ecbfda(fgcbde, z_1$20) {
  return fgcbde['__proto__'] = z_1$20, fgcbde;
}function a_opnmlk($0_132, xw$z_y) {
  var _$x0z,
      mojlk = [],
      _0$zyx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_0$zyx['lastIndex'] = xw$z_y, _0$zyx['exec']($0_132); _$x0z = _0$zyx['exec']($0_132);) if (mojlk['push'](_$x0z), _$x0z[0x1]) return mojlk;
}var a_kgjf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_rnoqsp = new RegExp('[\\-\\.0-9' + a_kgjf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_ilnkjm = new RegExp('^' + a_kgjf['source'] + a_rnoqsp['source'] + '*(?::' + a_kgjf['source'] + a_rnoqsp['source'] + '*)?$'),
    a_zxywt = 0x0,
    a_fgei = 0x1,
    a_cbdefg = 0x2,
    a_qrvts = 0x3,
    a_jhkgil = 0x4,
    a_tqospr = 0x5,
    a_nploqm = 0x6,
    a_omjnkl = 0x7;a_wvr['prototype'] = { 'parse': function (gfh, stvp, adbcf) {
    var dgif = this['domBuilder'];dgif['startDocument'](), a_kmjni(stvp, stvp = {}), a_vsxwyt(gfh, stvp, adbcf, dgif, this['errorHandler']), dgif['endDocument']();
  } }, a_cfdgeh['prototype'] = { 'setTagName': function (gkljh) {
    if (!a_ilnkjm['test'](gkljh)) throw new Error('invalid tagName:' + gkljh);this['tagName'] = gkljh;
  }, 'add': function (igkjhf, dhecgf, rpqnom) {
    if (!a_ilnkjm['test'](igkjhf)) throw new Error('invalid attribute:' + igkjhf);this[this['length']++] = { 'qName': igkjhf, 'value': dhecgf, 'offset': rpqnom };
  }, 'length': 0x0, 'getLocalName': function (pqonml) {
    return this[pqonml]['localName'];
  }, 'getLocator': function (wz_$) {
    return this[wz_$]['locator'];
  }, 'getQName': function (kijghf) {
    return this[kijghf]['qName'];
  }, 'getURI': function (kljnim) {
    return this[kljnim]['uri'];
  }, 'getValue': function (wtysvx) {
    return this[wtysvx]['value'];
  } }, a_ecbfda({}, a_ecbfda['prototype']) instanceof a_ecbfda || (a_ecbfda = function (hgid, xyz_w$) {
  function bfed() {}for (xyz_w$ in bfed['prototype'] = xyz_w$, bfed = new bfed(), hgid) bfed[xyz_w$] = hgid[xyz_w$];return bfed;
}), exports['XMLReader'] = a_wvr;