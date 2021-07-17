var _ = wx.y$;
function _dwzxyvu() {}function _dsuqrvt(w_$yzx, knijlm, ihljg, jnoklm, ropst) {
  function $zwyxv(xzy_0) {
    var hkjil = xzy_0['slice'](0x1, -0x1);return hkjil in ihljg ? ihljg[hkjil] : '#' === hkjil['charAt'](0x0) ? 0xffff < (hkjil = parseInt(hkjil['substr'](0x1)['replace']('x', '0x'))) ? (hkjil -= 0x10000, String['fromCharCode'](0xd800 + (hkjil >> 0xa), 0xdc00 + (0x3ff & hkjil))) : String['fromCharCode'](hkjil) : (ropst['error']('entity not found:' + xzy_0), xzy_0);
  }function jihegf(npqrmo) {
    var difghe;$2_31 < npqrmo && (difghe = w_$yzx['substring']($2_31, npqrmo)['replace'](/&#?\w+;/g, $zwyxv), nqlmpo && qrmno($2_31), jnoklm['characters'](difghe, 0x0, npqrmo - $2_31), $2_31 = npqrmo);
  }function qrmno(qrnsp, svx) {
    for (; nklom <= qrnsp && (svx = ruqsp['exec'](w_$yzx));) mjinlk = svx['index'], nklom = mjinlk + svx[0x0]['length'], nqlmpo['lineNumber']++;nqlmpo['columnNumber'] = qrnsp - mjinlk + 0x1;
  }for (var mjinlk = 0x0, nklom = 0x0, ruqsp = /.*(?:\r\n?|\n)|.*$/g, nqlmpo = jnoklm['locator'], glhi = [{ 'currentNSMap': knijlm }], ptrus = {}, $2_31 = 0x0;;) {
    try {
      var pnmkol = w_$yzx['indexOf']('<', $2_31),
          fca,
          xz0;if (pnmkol < 0x0) return void (w_$yzx['substr']($2_31)['match'](/^\s*$/) || (xz0 = (fca = jnoklm['doc'])['createTextNode'](w_$yzx['substr']($2_31)), fca['appendChild'](xz0), jnoklm['currentElement'] = xz0));switch ($2_31 < pnmkol && jihegf(pnmkol), w_$yzx['charAt'](pnmkol + 0x1)) {case '/':
          var kgil = w_$yzx['indexOf']('>', pnmkol + 0x3),
              trspo = w_$yzx['substring'](pnmkol + 0x2, kgil),
              jilhg = glhi['pop']();kgil < 0x0 ? (trspo = w_$yzx['substring'](pnmkol + 0x2)['replace'](/[\s<].*/, ''), ropst['error']('end tag name: ' + trspo + ' is not complete:' + jilhg['tagName']), kgil = pnmkol + 0x1 + trspo['length']) : trspo['match'](/\s</) && (trspo = trspo['replace'](/[\s<].*/, ''), ropst['error']('end tag name: ' + trspo + ' maybe not complete'), kgil = pnmkol + 0x1 + trspo['length']);var igjefh = jilhg['localNSMap'],
              xvzwuy = jilhg['tagName'] == trspo;if (xvzwuy || jilhg['tagName'] && jilhg['tagName']['toLowerCase']() == trspo['toLowerCase']()) {
            if (jnoklm['endElement'](jilhg['uri'], jilhg['localName'], trspo), igjefh) {
              for (var zxwy$_ in igjefh) jnoklm['endPrefixMapping'](zxwy$_);
            }xvzwuy || ropst['fatalError']('end tag name: ' + trspo + ' is not match the current start tagName:' + jilhg['tagName']);
          } else glhi['push'](jilhg);kgil++;break;case '?':
          nqlmpo && qrmno(pnmkol), kgil = _dy1$_0(w_$yzx, pnmkol, jnoklm);break;case '!':
          nqlmpo && qrmno(pnmkol), kgil = _dqo(w_$yzx, pnmkol, jnoklm, ropst);break;default:
          nqlmpo && qrmno(pnmkol);var wy$xv = new _dgfcde(),
              pqnsro = glhi[glhi['length'] - 0x1]['currentNSMap'],
              kgil = _dturswv(w_$yzx, pnmkol, wy$xv, pqnsro, $zwyxv, ropst),
              wuvst = wy$xv['length'];if (!wy$xv['closed'] && _dwvuyx(w_$yzx, kgil, wy$xv['tagName'], ptrus) && (wy$xv['closed'] = !0x0, ihljg['nbsp'] || ropst['warning']('unclosed xml attribute')), nqlmpo && wuvst) {
            for (var fgjieh = _dzw_$xy(nqlmpo, {}), xuwzyv = 0x0; xuwzyv < wuvst; xuwzyv++) {
              var zyxw$_ = wy$xv[xuwzyv];qrmno(zyxw$_['offset']), zyxw$_['locator'] = _dzw_$xy(nqlmpo, {});
            }jnoklm['locator'] = fgjieh, _dgefdhc(wy$xv, jnoklm, pqnsro) && glhi['push'](wy$xv), jnoklm['locator'] = nqlmpo;
          } else _dgefdhc(wy$xv, jnoklm, pqnsro) && glhi['push'](wy$xv);'http://www.w3.org/1999/xhtml' !== wy$xv['uri'] || wy$xv['closed'] ? kgil++ : kgil = _drtopsq(w_$yzx, kgil, wy$xv['tagName'], $zwyxv, jnoklm);}
    } catch (qsrpno) {
      ropst['error']('element parse error: ' + qsrpno), kgil = -0x1;
    }$2_31 < kgil ? $2_31 = kgil : jihegf(Math['max'](pnmkol, $2_31) + 0x1);
  }
}function _dzw_$xy(_$zyxw, lpnm) {
  return lpnm['lineNumber'] = _$zyxw['lineNumber'], lpnm['columnNumber'] = _$zyxw['columnNumber'], lpnm;
}function _dturswv(zw$vyx, xv$wy, wuvrt, vwuz, z$1_y0, _1023$) {
  for (var x$z0y, uswrv = ++xv$wy, jlkhgi = _ddbacf;;) {
    var hegdif = zw$vyx['charAt'](uswrv);switch (hegdif) {case '=':
        if (jlkhgi === _dsutqrp) x$z0y = zw$vyx['slice'](xv$wy, uswrv), jlkhgi = _dstvu;else {
          if (jlkhgi !== _dmnropq) throw new Error('attribute equal must after attrName');jlkhgi = _dstvu;
        }break;case '\x27':case '\x22':
        if (jlkhgi === _dstvu || jlkhgi === _dsutqrp) {
          if (jlkhgi === _dsutqrp && (_1023$['warning']('attribute value must after "="'), x$z0y = zw$vyx['slice'](xv$wy, uswrv)), !(0x0 < (uswrv = zw$vyx['indexOf'](hegdif, xv$wy = uswrv + 0x1)))) throw new Error('attribute value no end \'' + hegdif + '\' match');nlkom = zw$vyx['slice'](xv$wy, uswrv)['replace'](/&#?\w+;/g, z$1_y0), wuvrt['add'](x$z0y, nlkom, xv$wy - 0x1), jlkhgi = _djkgfhi;
        } else {
          if (jlkhgi != _dfihk) throw new Error('attribute value must after "="');nlkom = zw$vyx['slice'](xv$wy, uswrv)['replace'](/&#?\w+;/g, z$1_y0), wuvrt['add'](x$z0y, nlkom, xv$wy), _1023$['warning']('attribute "' + x$z0y + '" missed start quot(' + hegdif + ')!!'), xv$wy = uswrv + 0x1, jlkhgi = _djkgfhi;
        }break;case '/':
        switch (jlkhgi) {case _ddbacf:
            wuvrt['setTagName'](zw$vyx['slice'](xv$wy, uswrv));case _djkgfhi:case _dyxwv$:case _dpkmonl:
            jlkhgi = _dpkmonl, wuvrt['closed'] = !0x0;case _dfihk:case _dsutqrp:case _dmnropq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _1023$['error']('unexpected end of input'), jlkhgi == _ddbacf && wuvrt['setTagName'](zw$vyx['slice'](xv$wy, uswrv)), uswrv;case '>':
        switch (jlkhgi) {case _ddbacf:
            wuvrt['setTagName'](zw$vyx['slice'](xv$wy, uswrv));case _djkgfhi:case _dyxwv$:case _dpkmonl:
            break;case _dfihk:case _dsutqrp:
            '/' === (nlkom = zw$vyx['slice'](xv$wy, uswrv))['slice'](-0x1) && (wuvrt['closed'] = !0x0, nlkom = nlkom['slice'](0x0, -0x1));case _dmnropq:
            jlkhgi === _dmnropq && (nlkom = x$z0y), jlkhgi == _dfihk ? (_1023$['warning']('attribute "' + nlkom + '" missed quot(")!!'), wuvrt['add'](x$z0y, nlkom['replace'](/&#?\w+;/g, z$1_y0), xv$wy)) : ('http://www.w3.org/1999/xhtml' === vwuz[''] && nlkom['match'](/^(?:disabled|checked|selected)$/i) || _1023$['warning']('attribute "' + nlkom + '" missed value!! "' + nlkom + '" instead!!'), wuvrt['add'](nlkom, nlkom, xv$wy));break;case _dstvu:
            throw new Error('attribute value missed!!');}return uswrv;case '\u0080':
        hegdif = '\x20';default:
        if (hegdif <= '\x20') switch (jlkhgi) {case _ddbacf:
            wuvrt['setTagName'](zw$vyx['slice'](xv$wy, uswrv)), jlkhgi = _dyxwv$;break;case _dsutqrp:
            x$z0y = zw$vyx['slice'](xv$wy, uswrv), jlkhgi = _dmnropq;break;case _dfihk:
            var nlkom = zw$vyx['slice'](xv$wy, uswrv)['replace'](/&#?\w+;/g, z$1_y0);_1023$['warning']('attribute "' + nlkom + '" missed quot(")!!'), wuvrt['add'](x$z0y, nlkom, xv$wy);case _djkgfhi:
            jlkhgi = _dyxwv$;} else switch (jlkhgi) {case _dmnropq:
            wuvrt['tagName'], 'http://www.w3.org/1999/xhtml' === vwuz[''] && x$z0y['match'](/^(?:disabled|checked|selected)$/i) || _1023$['warning']('attribute "' + x$z0y + '" missed value!! "' + x$z0y + '" instead2!!'), wuvrt['add'](x$z0y, x$z0y, xv$wy), xv$wy = uswrv, jlkhgi = _dsutqrp;break;case _djkgfhi:
            _1023$['warning']('attribute space is required"' + x$z0y + '\x22!!');case _dyxwv$:
            jlkhgi = _dsutqrp, xv$wy = uswrv;break;case _dstvu:
            jlkhgi = _dfihk, xv$wy = uswrv;break;case _dpkmonl:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}uswrv++;
  }
}function _dgefdhc(qrons, dfch, ifgkj) {
  for (var lkihjg = qrons['tagName'], _zw$xy = null, mjlnki = qrons['length']; mjlnki--;) {
    var zwy$v = qrons[mjlnki],
        nilm = zwy$v['qName'],
        purtq = zwy$v['value'],
        _1$y0;nilm = 0x0 < (gjih = nilm['indexOf'](':')) ? (gkfj = zwy$v['prefix'] = nilm['slice'](0x0, gjih), _1$y0 = nilm['slice'](gjih + 0x1), 'xmlns' === gkfj && _1$y0) : (gkfj = null, 'xmlns' === (_1$y0 = nilm) && ''), zwy$v['localName'] = _1$y0, !0x1 !== nilm && (null == _zw$xy && (_zw$xy = {}, _dmlokn(ifgkj, ifgkj = {})), ifgkj[nilm] = _zw$xy[nilm] = purtq, zwy$v['uri'] = 'http://www.w3.org/2000/xmlns/', dfch['startPrefixMapping'](nilm, purtq));
  }for (mjlnki = qrons['length']; mjlnki--;) (gkfj = (zwy$v = qrons[mjlnki])['prefix']) && ('xml' === gkfj && (zwy$v['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gkfj && (zwy$v['uri'] = ifgkj[gkfj || '']));var gjih;_1$y0 = 0x0 < (gjih = lkihjg['indexOf'](':')) ? (gkfj = qrons['prefix'] = lkihjg['slice'](0x0, gjih), qrons['localName'] = lkihjg['slice'](gjih + 0x1)) : (gkfj = null, qrons['localName'] = lkihjg);var oqlmn = qrons['uri'] = ifgkj[gkfj || ''];if (dfch['startElement'](oqlmn, _1$y0, lkihjg, qrons), !qrons['closed']) return qrons['currentNSMap'] = ifgkj, qrons['localNSMap'] = _zw$xy, !0x0;if (dfch['endElement'](oqlmn, _1$y0, lkihjg), _zw$xy) {
    for (var gkfj in _zw$xy) dfch['endPrefixMapping'](gkfj);
  }
}function _drtopsq(_1043, njmolk, geijfh, uwvx, ifgejh) {
  if (/^(?:script|textarea)$/i['test'](geijfh)) {
    var qsrupt = _1043['indexOf']('</' + geijfh + '>', njmolk),
        _1043 = _1043['substring'](njmolk + 0x1, qsrupt);if (/[&<]/['test'](_1043)) return (/^script$/i['test'](geijfh) || (_1043 = _1043['replace'](/&#?\w+;/g, uwvx)), ifgejh['characters'](_1043, 0x0, _1043['length']), qsrupt
    );
  }return njmolk + 0x1;
}function _dwvuyx(iknlmj, zwy_x$, wtvxsu, kfjihg) {
  var cdefbg = kfjihg[wtvxsu];return null == cdefbg && ((cdefbg = iknlmj['lastIndexOf']('</' + wtvxsu + '>')) < zwy_x$ && (cdefbg = iknlmj['lastIndexOf']('</' + wtvxsu)), kfjihg[wtvxsu] = cdefbg), cdefbg < zwy_x$;
}function _dmlokn(tuvwsx, pqsu) {
  for (var lkn in tuvwsx) pqsu[lkn] = tuvwsx[lkn];
}function _dqo(gdefhi, gcedfb, eda, lhkigj) {
  var iljgkh = gdefhi['charAt'](gcedfb + 0x2);if ('-' === iljgkh) return '-' !== gdefhi['charAt'](gcedfb + 0x3) ? -0x1 : gcedfb < (dcaef = gdefhi['indexOf']('-->', gcedfb + 0x4)) ? (eda['comment'](gdefhi, gcedfb + 0x4, dcaef - gcedfb - 0x4), dcaef + 0x3) : (lhkigj['error']('Unclosed comment'), -0x1);if ('CDATA[' == gdefhi['substr'](gcedfb + 0x3, 0x6)) {
    var dcaef = gdefhi['indexOf'](']]>', gcedfb + 0x9);return eda['startCDATA'](), eda['characters'](gdefhi, gcedfb + 0x9, dcaef - gcedfb - 0x9), eda['endCDATA'](), dcaef + 0x3;
  }iljgkh = _dklmnj(gdefhi, gcedfb), lhkigj = iljgkh['length'];if (0x1 < lhkigj && /!doctype/i['test'](iljgkh[0x0][0x0])) return dcaef = iljgkh[0x1][0x0], gdefhi = 0x3 < lhkigj && /^public$/i['test'](iljgkh[0x2][0x0]) && iljgkh[0x3][0x0], gcedfb = 0x4 < lhkigj && iljgkh[0x4][0x0], lhkigj = iljgkh[lhkigj - 0x1], (eda['startDTD'](dcaef, gdefhi && gdefhi['replace'](/^(['"])(.*?)\1$/, '$2'), gcedfb && gcedfb['replace'](/^(['"])(.*?)\1$/, '$2')), eda['endDTD'](), lhkigj['index'] + lhkigj[0x0]['length']);return -0x1;
}function _dy1$_0(xuwytv, $xyzwv, $z) {
  var mqporn = xuwytv['indexOf']('?>', $xyzwv);if (mqporn) return $xyzwv = xuwytv['substring']($xyzwv, mqporn)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), $xyzwv ? ($xyzwv[0x0]['length'], $z['processingInstruction']($xyzwv[0x1], $xyzwv[0x2]), mqporn + 0x2) : -0x1;return -0x1;
}function _dgfcde() {}function _d_0xz(fdgecb, nsqrp) {
  return fdgecb['__proto__'] = nsqrp, fdgecb;
}function _dklmnj(hjif, oqm) {
  var wtxuv,
      xuywzv = [],
      nmkloj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (nmkloj['lastIndex'] = oqm, nmkloj['exec'](hjif); wtxuv = nmkloj['exec'](hjif);) if (xuywzv['push'](wtxuv), wtxuv[0x1]) return xuywzv;
}var _dwsxvt = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dhkf = new RegExp('[\\-\\.0-9' + _dwsxvt['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _ddhgcf = new RegExp('^' + _dwsxvt['source'] + _dhkf['source'] + '*(?::' + _dwsxvt['source'] + _dhkf['source'] + '*)?$'),
    _ddbacf = 0x0,
    _dsutqrp = 0x1,
    _dmnropq = 0x2,
    _dstvu = 0x3,
    _dfihk = 0x4,
    _djkgfhi = 0x5,
    _dyxwv$ = 0x6,
    _dpkmonl = 0x7;_dwzxyvu['prototype'] = { 'parse': function (kon, tsvxw, usvtr) {
    var y$vxw = this['domBuilder'];y$vxw['startDocument'](), _dmlokn(tsvxw, tsvxw = {}), _dsuqrvt(kon, tsvxw, usvtr, y$vxw, this['errorHandler']), y$vxw['endDocument']();
  } }, _dgfcde['prototype'] = { 'setTagName': function ($3_1) {
    if (!_ddhgcf['test']($3_1)) throw new Error('invalid tagName:' + $3_1);this['tagName'] = $3_1;
  }, 'add': function (dbfcge, nklomj, qpmno) {
    if (!_ddhgcf['test'](dbfcge)) throw new Error('invalid attribute:' + dbfcge);this[this['length']++] = { 'qName': dbfcge, 'value': nklomj, 'offset': qpmno };
  }, 'length': 0x0, 'getLocalName': function (z$vx) {
    return this[z$vx]['localName'];
  }, 'getLocator': function (wvyz$x) {
    return this[wvyz$x]['locator'];
  }, 'getQName': function (tvswux) {
    return this[tvswux]['qName'];
  }, 'getURI': function (ilhjgk) {
    return this[ilhjgk]['uri'];
  }, 'getValue': function (jehgif) {
    return this[jehgif]['value'];
  } }, _d_0xz({}, _d_0xz['prototype']) instanceof _d_0xz || (_d_0xz = function (qrtosp, gkjfhi) {
  function qrus() {}for (gkjfhi in qrus['prototype'] = gkjfhi, qrus = new qrus(), qrtosp) qrus[gkjfhi] = qrtosp[gkjfhi];return qrus;
}), exports['XMLReader'] = _dwzxyvu;