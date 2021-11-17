var _ = wx.y$;
function _dcbdaef() {}function _dejfihg(jihgl, gech, xzw$_, yx, hkjlig) {
  function lkin(qlnpm) {
    if (qlnpm > 0xffff) {
      qlnpm -= 0x10000;var ebcgf = 0xd800 + (qlnpm >> 0xa),
          knmpo = 0xdc00 + (0x3ff & qlnpm);return String['fromCharCode'](ebcgf, knmpo);
    }return String['fromCharCode'](qlnpm);
  }function sprqu(dghif) {
    var omrqpn = dghif['slice'](0x1, -0x1);return omrqpn in xzw$_ ? xzw$_[omrqpn] : '#' === omrqpn['charAt'](0x0) ? lkin(parseInt(omrqpn['substr'](0x1)['replace']('x', '0x'))) : (hkjlig['error']('entity not found:' + dghif), dghif);
  }function nok(lmnqo) {
    if (lmnqo > xvyzu) {
      var fcghde = jihgl['substring'](xvyzu, lmnqo)['replace'](/&#?\w+;/g, sprqu);_$z120 && qmrnp(xvyzu), yx['characters'](fcghde, 0x0, lmnqo - xvyzu), xvyzu = lmnqo;
    }
  }function qmrnp(nroqps, lonqp) {
    for (; nroqps >= ikhjl && (lonqp = vrstuq['exec'](jihgl));) y_zx0$ = lonqp['index'], ikhjl = y_zx0$ + lonqp[0x0]['length'], _$z120['lineNumber']++;_$z120['columnNumber'] = nroqps - y_zx0$ + 0x1;
  }for (var y_zx0$ = 0x0, ikhjl = 0x0, vrstuq = /.*(?:\r\n?|\n)|.*$/g, _$z120 = yx['locator'], nkplom = [{ 'currentNSMap': gech }], hfik = {}, xvyzu = 0x0;;) {
    try {
      var npmroq = jihgl['indexOf']('<', xvyzu);if (0x0 > npmroq) {
        if (!jihgl['substr'](xvyzu)['match'](/^\s*$/)) {
          var tprqs = yx['doc'],
              ifhkj = tprqs['createTextNode'](jihgl['substr'](xvyzu));tprqs['appendChild'](ifhkj), yx['currentElement'] = ifhkj;
        }return;
      }switch (npmroq > xvyzu && nok(npmroq), jihgl['charAt'](npmroq + 0x1)) {case '/':
          var cbade = jihgl['indexOf']('>', npmroq + 0x3),
              zxwvy = jihgl['substring'](npmroq + 0x2, cbade),
              $0zxy = nkplom['pop']();0x0 > cbade ? (zxwvy = jihgl['substring'](npmroq + 0x2)['replace'](/[\s<].*/, ''), hkjlig['error']('end tag name: ' + zxwvy + ' is not complete:' + $0zxy['tagName']), cbade = npmroq + 0x1 + zxwvy['length']) : zxwvy['match'](/\s</) && (zxwvy = zxwvy['replace'](/[\s<].*/, ''), hkjlig['error']('end tag name: ' + zxwvy + ' maybe not complete'), cbade = npmroq + 0x1 + zxwvy['length']);var bgc = $0zxy['localNSMap'],
              mqrp = $0zxy['tagName'] == zxwvy,
              bdeac = mqrp || $0zxy['tagName'] && $0zxy['tagName']['toLowerCase']() == zxwvy['toLowerCase']();if (bdeac) {
            if (yx['endElement']($0zxy['uri'], $0zxy['localName'], zxwvy), bgc) {
              for (var wurst in bgc) yx['endPrefixMapping'](wurst);
            }mqrp || hkjlig['fatalError']('end tag name: ' + zxwvy + ' is not match the current start tagName:' + $0zxy['tagName']);
          } else nkplom['push']($0zxy);cbade++;break;case '?':
          _$z120 && qmrnp(npmroq), cbade = _drqom(jihgl, npmroq, yx);break;case '!':
          _$z120 && qmrnp(npmroq), cbade = _d$10_23(jihgl, npmroq, yx, hkjlig);break;default:
          _$z120 && qmrnp(npmroq);var molnqp = new _djehfi(),
              pstq = nkplom[nkplom['length'] - 0x1]['currentNSMap'],
              cbade = _dmilkh(jihgl, npmroq, molnqp, pstq, sprqu, hkjlig),
              qmplo = molnqp['length'];if (!molnqp['closed'] && _dvxyuw(jihgl, cbade, molnqp['tagName'], hfik) && (molnqp['closed'] = !0x0, xzw$_['nbsp'] || hkjlig['warning']('unclosed xml attribute')), _$z120 && qmplo) {
            for (var x0y$z_ = _dhgjik(_$z120, {}), bgfec = 0x0; qmplo > bgfec; bgfec++) {
              var cghef = molnqp[bgfec];qmrnp(cghef['offset']), cghef['locator'] = _dhgjik(_$z120, {});
            }yx['locator'] = x0y$z_, _d_z$yx0(molnqp, yx, pstq) && nkplom['push'](molnqp), yx['locator'] = _$z120;
          } else _d_z$yx0(molnqp, yx, pstq) && nkplom['push'](molnqp);'http://www.w3.org/1999/xhtml' !== molnqp['uri'] || molnqp['closed'] ? cbade++ : cbade = _dvq(jihgl, cbade, molnqp['tagName'], sprqu, yx);}
    } catch (vsqu) {
      hkjlig['error']('element parse error: ' + vsqu), cbade = -0x1;
    }cbade > xvyzu ? xvyzu = cbade : nok(Math['max'](npmroq, xvyzu) + 0x1);
  }
}function _dhgjik(_y$x, lnmkoj) {
  return lnmkoj['lineNumber'] = _y$x['lineNumber'], lnmkoj['columnNumber'] = _y$x['columnNumber'], lnmkoj;
}function _dmilkh(nolpmq, _z$x, wuzy, higljk, lmkni, xzywv$) {
  for (var w_xy$z, _20$1z, lmpnko = ++_z$x, jlihg = _dfbdcg;;) {
    var khfg = nolpmq['charAt'](lmpnko);switch (khfg) {case '=':
        if (jlihg === _dfji) w_xy$z = nolpmq['slice'](_z$x, lmpnko), jlihg = _dehfgid;else {
          if (jlihg !== _d$2_1z0) throw new Error('attribute equal must after attrName');jlihg = _dehfgid;
        }break;case '\x27':case '\x22':
        if (jlihg === _dehfgid || jlihg === _dfji) {
          if (jlihg === _dfji && (xzywv$['warning']('attribute value must after "="'), w_xy$z = nolpmq['slice'](_z$x, lmpnko)), _z$x = lmpnko + 0x1, lmpnko = nolpmq['indexOf'](khfg, _z$x), !(lmpnko > 0x0)) throw new Error('attribute value no end \'' + khfg + '\' match');_20$1z = nolpmq['slice'](_z$x, lmpnko)['replace'](/&#?\w+;/g, lmkni), wuzy['add'](w_xy$z, _20$1z, _z$x - 0x1), jlihg = _dhlik;
        } else {
          if (jlihg != _dwy_$x) throw new Error('attribute value must after "="');_20$1z = nolpmq['slice'](_z$x, lmpnko)['replace'](/&#?\w+;/g, lmkni), wuzy['add'](w_xy$z, _20$1z, _z$x), xzywv$['warning']('attribute "' + w_xy$z + '" missed start quot(' + khfg + ')!!'), _z$x = lmpnko + 0x1, jlihg = _dhlik;
        }break;case '/':
        switch (jlihg) {case _dfbdcg:
            wuzy['setTagName'](nolpmq['slice'](_z$x, lmpnko));case _dhlik:case _dpuq:case _dvrustw:
            jlihg = _dvrustw, wuzy['closed'] = !0x0;case _dwy_$x:case _dfji:case _d$2_1z0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xzywv$['error']('unexpected end of input'), jlihg == _dfbdcg && wuzy['setTagName'](nolpmq['slice'](_z$x, lmpnko)), lmpnko;case '>':
        switch (jlihg) {case _dfbdcg:
            wuzy['setTagName'](nolpmq['slice'](_z$x, lmpnko));case _dhlik:case _dpuq:case _dvrustw:
            break;case _dwy_$x:case _dfji:
            _20$1z = nolpmq['slice'](_z$x, lmpnko), '/' === _20$1z['slice'](-0x1) && (wuzy['closed'] = !0x0, _20$1z = _20$1z['slice'](0x0, -0x1));case _d$2_1z0:
            jlihg === _d$2_1z0 && (_20$1z = w_xy$z), jlihg == _dwy_$x ? (xzywv$['warning']('attribute "' + _20$1z + '" missed quot(")!!'), wuzy['add'](w_xy$z, _20$1z['replace'](/&#?\w+;/g, lmkni), _z$x)) : ('http://www.w3.org/1999/xhtml' === higljk[''] && _20$1z['match'](/^(?:disabled|checked|selected)$/i) || xzywv$['warning']('attribute "' + _20$1z + '" missed value!! "' + _20$1z + '" instead!!'), wuzy['add'](_20$1z, _20$1z, _z$x));break;case _dehfgid:
            throw new Error('attribute value missed!!');}return lmpnko;case '\u0080':
        khfg = '\x20';default:
        if ('\x20' >= khfg) switch (jlihg) {case _dfbdcg:
            wuzy['setTagName'](nolpmq['slice'](_z$x, lmpnko)), jlihg = _dpuq;break;case _dfji:
            w_xy$z = nolpmq['slice'](_z$x, lmpnko), jlihg = _d$2_1z0;break;case _dwy_$x:
            var _20$1z = nolpmq['slice'](_z$x, lmpnko)['replace'](/&#?\w+;/g, lmkni);xzywv$['warning']('attribute "' + _20$1z + '" missed quot(")!!'), wuzy['add'](w_xy$z, _20$1z, _z$x);case _dhlik:
            jlihg = _dpuq;} else switch (jlihg) {case _d$2_1z0:
            {
              wuzy['tagName'];
            }'http://www.w3.org/1999/xhtml' === higljk[''] && w_xy$z['match'](/^(?:disabled|checked|selected)$/i) || xzywv$['warning']('attribute "' + w_xy$z + '" missed value!! "' + w_xy$z + '" instead2!!'), wuzy['add'](w_xy$z, w_xy$z, _z$x), _z$x = lmpnko, jlihg = _dfji;break;case _dhlik:
            xzywv$['warning']('attribute space is required"' + w_xy$z + '\x22!!');case _dpuq:
            jlihg = _dfji, _z$x = lmpnko;break;case _dehfgid:
            jlihg = _dwy_$x, _z$x = lmpnko;break;case _dvrustw:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}lmpnko++;
  }
}function _d_z$yx0(tyxuw, $_2, $ywvxz) {
  for (var urstq = tyxuw['tagName'], $x_zy = null, omrpqn = tyxuw['length']; omrpqn--;) {
    var fdgche = tyxuw[omrpqn],
        lonmkp = fdgche['qName'],
        nmlpko = fdgche['value'],
        pnso = lonmkp['indexOf'](':');if (pnso > 0x0) var qnl = fdgche['prefix'] = lonmkp['slice'](0x0, pnso),
        z$10 = lonmkp['slice'](pnso + 0x1),
        hljm = 'xmlns' === qnl && z$10;else z$10 = lonmkp, qnl = null, hljm = 'xmlns' === lonmkp && '';fdgche['localName'] = z$10, hljm !== !0x1 && (null == $x_zy && ($x_zy = {}, _dostr($ywvxz, $ywvxz = {})), $ywvxz[hljm] = $x_zy[hljm] = nmlpko, fdgche['uri'] = 'http://www.w3.org/2000/xmlns/', $_2['startPrefixMapping'](hljm, nmlpko));
  }for (var omrpqn = tyxuw['length']; omrpqn--;) {
    fdgche = tyxuw[omrpqn];var qnl = fdgche['prefix'];qnl && ('xml' === qnl && (fdgche['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qnl && (fdgche['uri'] = $ywvxz[qnl || '']));
  }var pnso = urstq['indexOf'](':');pnso > 0x0 ? (qnl = tyxuw['prefix'] = urstq['slice'](0x0, pnso), z$10 = tyxuw['localName'] = urstq['slice'](pnso + 0x1)) : (qnl = null, z$10 = tyxuw['localName'] = urstq);var dhgfei = tyxuw['uri'] = $ywvxz[qnl || ''];if ($_2['startElement'](dhgfei, z$10, urstq, tyxuw), !tyxuw['closed']) return tyxuw['currentNSMap'] = $ywvxz, tyxuw['localNSMap'] = $x_zy, !0x0;if ($_2['endElement'](dhgfei, z$10, urstq), $x_zy) {
    for (qnl in $x_zy) $_2['endPrefixMapping'](qnl);
  }
}function _dvq(ilgkj, mpnkol, hcefgd, urqstp, diefh) {
  if (/^(?:script|textarea)$/i['test'](hcefgd)) {
    var wyzv$ = ilgkj['indexOf']('</' + hcefgd + '>', mpnkol),
        feihdg = ilgkj['substring'](mpnkol + 0x1, wyzv$);if (/[&<]/['test'](feihdg)) return (/^script$/i['test'](hcefgd) ? (diefh['characters'](feihdg, 0x0, feihdg['length']), wyzv$) : (feihdg = feihdg['replace'](/&#?\w+;/g, urqstp), diefh['characters'](feihdg, 0x0, feihdg['length']), wyzv$)
    );
  }return mpnkol + 0x1;
}function _dvxyuw(igedfh, ruvtsq, jghlk, x$zywv) {
  var ecdba = x$zywv[jghlk];return null == ecdba && (ecdba = igedfh['lastIndexOf']('</' + jghlk + '>'), ruvtsq > ecdba && (ecdba = igedfh['lastIndexOf']('</' + jghlk)), x$zywv[jghlk] = ecdba), ruvtsq > ecdba;
}function _dostr(vywzx, z1_20) {
  for (var uspr in vywzx) z1_20[uspr] = vywzx[uspr];
}function _d$10_23(lpko, gehifj, hefgdc, kiglhj) {
  var ropqn = lpko['charAt'](gehifj + 0x2);switch (ropqn) {case '-':
      if ('-' === lpko['charAt'](gehifj + 0x3)) {
        var tsruqp = lpko['indexOf']('-->', gehifj + 0x4);return tsruqp > gehifj ? (hefgdc['comment'](lpko, gehifj + 0x4, tsruqp - gehifj - 0x4), tsruqp + 0x3) : (kiglhj['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == lpko['substr'](gehifj + 0x3, 0x6)) {
        var tsruqp = lpko['indexOf'](']]>', gehifj + 0x9);return hefgdc['startCDATA'](), hefgdc['characters'](lpko, gehifj + 0x9, tsruqp - gehifj - 0x9), hefgdc['endCDATA'](), tsruqp + 0x3;
      }var _120z$ = _dbefdc(lpko, gehifj),
          pronsq = _120z$['length'];if (pronsq > 0x1 && /!doctype/i['test'](_120z$[0x0][0x0])) {
        var qonrpm = _120z$[0x1][0x0],
            gjfkhi = pronsq > 0x3 && /^public$/i['test'](_120z$[0x2][0x0]) && _120z$[0x3][0x0],
            mlj = pronsq > 0x4 && _120z$[0x4][0x0],
            z_$02 = _120z$[pronsq - 0x1];return hefgdc['startDTD'](qonrpm, gjfkhi && gjfkhi['replace'](/^(['"])(.*?)\1$/, '$2'), mlj && mlj['replace'](/^(['"])(.*?)\1$/, '$2')), hefgdc['endDTD'](), z_$02['index'] + z_$02[0x0]['length'];
      }}return -0x1;
}function _drqom(rusqpt, pmrnq, egdih) {
  var degcbf = rusqpt['indexOf']('?>', pmrnq);if (degcbf) {
    var nkmjil = rusqpt['substring'](pmrnq, degcbf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nkmjil) {
      {
        nkmjil[0x0]['length'];
      }return egdih['processingInstruction'](nkmjil[0x1], nkmjil[0x2]), degcbf + 0x2;
    }return -0x1;
  }return -0x1;
}function _djehfi() {}function _djmlihk(srqv, uqsrpt) {
  return srqv['__proto__'] = uqsrpt, srqv;
}function _dbefdc(normpq, vyx$) {
  var linjk,
      tyxwu = [],
      nmprqo = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (nmprqo['lastIndex'] = vyx$, nmprqo['exec'](normpq); linjk = nmprqo['exec'](normpq);) if (tyxwu['push'](linjk), linjk[0x1]) return tyxwu;
}var _d_1$0zy = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dqornps = new RegExp('[\\-\\.0-9' + _d_1$0zy['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dzwuxyv = new RegExp('^' + _d_1$0zy['source'] + _dqornps['source'] + '*(?::' + _d_1$0zy['source'] + _dqornps['source'] + '*)?$'),
    _dfbdcg = 0x0,
    _dfji = 0x1,
    _d$2_1z0 = 0x2,
    _dehfgid = 0x3,
    _dwy_$x = 0x4,
    _dhlik = 0x5,
    _dpuq = 0x6,
    _dvrustw = 0x7;_dcbdaef['prototype'] = { 'parse': function (z21$_, imln, dcgfhe) {
    var hgfied = this['domBuilder'];hgfied['startDocument'](), _dostr(imln, imln = {}), _dejfihg(z21$_, imln, dcgfhe, hgfied, this['errorHandler']), hgfied['endDocument']();
  } }, _djehfi['prototype'] = { 'setTagName': function (rtwvs) {
    if (!_dzwuxyv['test'](rtwvs)) throw new Error('invalid tagName:' + rtwvs);this['tagName'] = rtwvs;
  }, 'add': function (cdgbfe, tvsqu, efgdbc) {
    if (!_dzwuxyv['test'](cdgbfe)) throw new Error('invalid attribute:' + cdgbfe);this[this['length']++] = { 'qName': cdgbfe, 'value': tvsqu, 'offset': efgdbc };
  }, 'length': 0x0, 'getLocalName': function (dbfac) {
    return this[dbfac]['localName'];
  }, 'getLocator': function (pmnoqr) {
    return this[pmnoqr]['locator'];
  }, 'getQName': function (z2_$) {
    return this[z2_$]['qName'];
  }, 'getURI': function (pus) {
    return this[pus]['uri'];
  }, 'getValue': function (cfedab) {
    return this[cfedab]['value'];
  } }, _djmlihk({}, _djmlihk['prototype']) instanceof _djmlihk || (_djmlihk = function (pnolq, _0$1z2) {
  function knjmol() {}knjmol['prototype'] = _0$1z2, knjmol = new knjmol();for (_0$1z2 in pnolq) knjmol[_0$1z2] = pnolq[_0$1z2];return knjmol;
}), exports['XMLReader'] = _dcbdaef;