var _ = wx.y$;
function _dknlmji() {}function _dstwruv(_2$103, rspnq, z2_$1, cdfeb, tuwsr) {
  function _z$x(mkojln) {
    if (mkojln > 0xffff) {
      mkojln -= 0x10000;var xwvtsu = 0xd800 + (mkojln >> 0xa),
          omql = 0xdc00 + (0x3ff & mkojln);return String['fromCharCode'](xwvtsu, omql);
    }return String['fromCharCode'](mkojln);
  }function fdbeac(twsr) {
    var ghfedc = twsr['slice'](0x1, -0x1);return ghfedc in z2_$1 ? z2_$1[ghfedc] : '#' === ghfedc['charAt'](0x0) ? _z$x(parseInt(ghfedc['substr'](0x1)['replace']('x', '0x'))) : (tuwsr['error']('entity not found:' + twsr), twsr);
  }function uwsrtv(ponmq) {
    if (ponmq > omkln) {
      var lgjkhi = _2$103['substring'](omkln, ponmq)['replace'](/&#?\w+;/g, fdbeac);vzw && _0231(omkln), cdfeb['characters'](lgjkhi, 0x0, ponmq - omkln), omkln = ponmq;
    }
  }function _0231(kpmlno, bcdfge) {
    for (; kpmlno >= mnrpq && (bcdfge = jkhim['exec'](_2$103));) _x0 = bcdfge['index'], mnrpq = _x0 + bcdfge[0x0]['length'], vzw['lineNumber']++;vzw['columnNumber'] = kpmlno - _x0 + 0x1;
  }for (var _x0 = 0x0, mnrpq = 0x0, jkhim = /.*(?:\r\n?|\n)|.*$/g, vzw = cdfeb['locator'], xz$y_0 = [{ 'currentNSMap': rspnq }], nrmpqo = {}, omkln = 0x0;;) {
    try {
      var jhkiml = _2$103['indexOf']('<', omkln);if (0x0 > jhkiml) {
        if (!_2$103['substr'](omkln)['match'](/^\s*$/)) {
          var qlnmo = cdfeb['doc'],
              qolmn = qlnmo['createTextNode'](_2$103['substr'](omkln));qlnmo['appendChild'](qolmn), cdfeb['currentElement'] = qolmn;
        }return;
      }switch (jhkiml > omkln && uwsrtv(jhkiml), _2$103['charAt'](jhkiml + 0x1)) {case '/':
          var nkjlmi = _2$103['indexOf']('>', jhkiml + 0x3),
              mporn = _2$103['substring'](jhkiml + 0x2, nkjlmi),
              y0_z = xz$y_0['pop']();0x0 > nkjlmi ? (mporn = _2$103['substring'](jhkiml + 0x2)['replace'](/[\s<].*/, ''), tuwsr['error']('end tag name: ' + mporn + ' is not complete:' + y0_z['tagName']), nkjlmi = jhkiml + 0x1 + mporn['length']) : mporn['match'](/\s</) && (mporn = mporn['replace'](/[\s<].*/, ''), tuwsr['error']('end tag name: ' + mporn + ' maybe not complete'), nkjlmi = jhkiml + 0x1 + mporn['length']);var xuwz = y0_z['localNSMap'],
              ronqpm = y0_z['tagName'] == mporn,
              bcdfg = ronqpm || y0_z['tagName'] && y0_z['tagName']['toLowerCase']() == mporn['toLowerCase']();if (bcdfg) {
            if (cdfeb['endElement'](y0_z['uri'], y0_z['localName'], mporn), xuwz) {
              for (var faceb in xuwz) cdfeb['endPrefixMapping'](faceb);
            }ronqpm || tuwsr['fatalError']('end tag name: ' + mporn + ' is not match the current start tagName:' + y0_z['tagName']);
          } else xz$y_0['push'](y0_z);nkjlmi++;break;case '?':
          vzw && _0231(jhkiml), nkjlmi = _d_$zy01(_2$103, jhkiml, cdfeb);break;case '!':
          vzw && _0231(jhkiml), nkjlmi = _domqpn(_2$103, jhkiml, cdfeb, tuwsr);break;default:
          vzw && _0231(jhkiml);var klijnm = new _dqtsvru(),
              qlnmop = xz$y_0[xz$y_0['length'] - 0x1]['currentNSMap'],
              nkjlmi = _domkl(_2$103, jhkiml, klijnm, qlnmop, fdbeac, tuwsr),
              $z0_ = klijnm['length'];if (!klijnm['closed'] && _dqutpr(_2$103, nkjlmi, klijnm['tagName'], nrmpqo) && (klijnm['closed'] = !0x0, z2_$1['nbsp'] || tuwsr['warning']('unclosed xml attribute')), vzw && $z0_) {
            for (var qrpmno = _dedfbca(vzw, {}), onr = 0x0; $z0_ > onr; onr++) {
              var mrpnoq = klijnm[onr];_0231(mrpnoq['offset']), mrpnoq['locator'] = _dedfbca(vzw, {});
            }cdfeb['locator'] = qrpmno, _d$0_1(klijnm, cdfeb, qlnmop) && xz$y_0['push'](klijnm), cdfeb['locator'] = vzw;
          } else _d$0_1(klijnm, cdfeb, qlnmop) && xz$y_0['push'](klijnm);'http://www.w3.org/1999/xhtml' !== klijnm['uri'] || klijnm['closed'] ? nkjlmi++ : nkjlmi = _dy_$wzx(_2$103, nkjlmi, klijnm['tagName'], fdbeac, cdfeb);}
    } catch (egdcf) {
      tuwsr['error']('element parse error: ' + egdcf), nkjlmi = -0x1;
    }nkjlmi > omkln ? omkln = nkjlmi : uwsrtv(Math['max'](jhkiml, omkln) + 0x1);
  }
}function _dedfbca(rtsoq, twusx) {
  return twusx['lineNumber'] = rtsoq['lineNumber'], twusx['columnNumber'] = rtsoq['columnNumber'], twusx;
}function _domkl(onrpm, hcefd, z0y_$1, nlqpo, jigkfh, dghef) {
  for (var $012z_, ilnmj, deacf = ++hcefd, wvz$x = _dgdfehc;;) {
    var defgc = onrpm['charAt'](deacf);switch (defgc) {case '=':
        if (wvz$x === _dadfbe) $012z_ = onrpm['slice'](hcefd, deacf), wvz$x = _ddcfhe;else {
          if (wvz$x !== _dxv$yw) throw new Error('attribute equal must after attrName');wvz$x = _ddcfhe;
        }break;case '\x27':case '\x22':
        if (wvz$x === _ddcfhe || wvz$x === _dadfbe) {
          if (wvz$x === _dadfbe && (dghef['warning']('attribute value must after "="'), $012z_ = onrpm['slice'](hcefd, deacf)), hcefd = deacf + 0x1, deacf = onrpm['indexOf'](defgc, hcefd), !(deacf > 0x0)) throw new Error('attribute value no end \'' + defgc + '\' match');ilnmj = onrpm['slice'](hcefd, deacf)['replace'](/&#?\w+;/g, jigkfh), z0y_$1['add']($012z_, ilnmj, hcefd - 0x1), wvz$x = _dtxyvw;
        } else {
          if (wvz$x != _dejfhig) throw new Error('attribute value must after "="');ilnmj = onrpm['slice'](hcefd, deacf)['replace'](/&#?\w+;/g, jigkfh), z0y_$1['add']($012z_, ilnmj, hcefd), dghef['warning']('attribute "' + $012z_ + '" missed start quot(' + defgc + ')!!'), hcefd = deacf + 0x1, wvz$x = _dtxyvw;
        }break;case '/':
        switch (wvz$x) {case _dgdfehc:
            z0y_$1['setTagName'](onrpm['slice'](hcefd, deacf));case _dtxyvw:case _dgjifh:case _dnorqps:
            wvz$x = _dnorqps, z0y_$1['closed'] = !0x0;case _dejfhig:case _dadfbe:case _dxv$yw:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return dghef['error']('unexpected end of input'), wvz$x == _dgdfehc && z0y_$1['setTagName'](onrpm['slice'](hcefd, deacf)), deacf;case '>':
        switch (wvz$x) {case _dgdfehc:
            z0y_$1['setTagName'](onrpm['slice'](hcefd, deacf));case _dtxyvw:case _dgjifh:case _dnorqps:
            break;case _dejfhig:case _dadfbe:
            ilnmj = onrpm['slice'](hcefd, deacf), '/' === ilnmj['slice'](-0x1) && (z0y_$1['closed'] = !0x0, ilnmj = ilnmj['slice'](0x0, -0x1));case _dxv$yw:
            wvz$x === _dxv$yw && (ilnmj = $012z_), wvz$x == _dejfhig ? (dghef['warning']('attribute "' + ilnmj + '" missed quot(")!!'), z0y_$1['add']($012z_, ilnmj['replace'](/&#?\w+;/g, jigkfh), hcefd)) : ('http://www.w3.org/1999/xhtml' === nlqpo[''] && ilnmj['match'](/^(?:disabled|checked|selected)$/i) || dghef['warning']('attribute "' + ilnmj + '" missed value!! "' + ilnmj + '" instead!!'), z0y_$1['add'](ilnmj, ilnmj, hcefd));break;case _ddcfhe:
            throw new Error('attribute value missed!!');}return deacf;case '\u0080':
        defgc = '\x20';default:
        if ('\x20' >= defgc) switch (wvz$x) {case _dgdfehc:
            z0y_$1['setTagName'](onrpm['slice'](hcefd, deacf)), wvz$x = _dgjifh;break;case _dadfbe:
            $012z_ = onrpm['slice'](hcefd, deacf), wvz$x = _dxv$yw;break;case _dejfhig:
            var ilnmj = onrpm['slice'](hcefd, deacf)['replace'](/&#?\w+;/g, jigkfh);dghef['warning']('attribute "' + ilnmj + '" missed quot(")!!'), z0y_$1['add']($012z_, ilnmj, hcefd);case _dtxyvw:
            wvz$x = _dgjifh;} else switch (wvz$x) {case _dxv$yw:
            {
              z0y_$1['tagName'];
            }'http://www.w3.org/1999/xhtml' === nlqpo[''] && $012z_['match'](/^(?:disabled|checked|selected)$/i) || dghef['warning']('attribute "' + $012z_ + '" missed value!! "' + $012z_ + '" instead2!!'), z0y_$1['add']($012z_, $012z_, hcefd), hcefd = deacf, wvz$x = _dadfbe;break;case _dtxyvw:
            dghef['warning']('attribute space is required"' + $012z_ + '\x22!!');case _dgjifh:
            wvz$x = _dadfbe, hcefd = deacf;break;case _ddcfhe:
            wvz$x = _dejfhig, hcefd = deacf;break;case _dnorqps:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}deacf++;
  }
}function _d$0_1(_z0$21, hjkigf, _32$1) {
  for (var njklm = _z0$21['tagName'], tuv = null, xw_zy$ = _z0$21['length']; xw_zy$--;) {
    var ljnmi = _z0$21[xw_zy$],
        qpsrn = ljnmi['qName'],
        jfigkh = ljnmi['value'],
        cedbaf = qpsrn['indexOf'](':');if (cedbaf > 0x0) var idhe = ljnmi['prefix'] = qpsrn['slice'](0x0, cedbaf),
        poqnm = qpsrn['slice'](cedbaf + 0x1),
        rqps = 'xmlns' === idhe && poqnm;else poqnm = qpsrn, idhe = null, rqps = 'xmlns' === qpsrn && '';ljnmi['localName'] = poqnm, rqps !== !0x1 && (null == tuv && (tuv = {}, _dxwzv(_32$1, _32$1 = {})), _32$1[rqps] = tuv[rqps] = jfigkh, ljnmi['uri'] = 'http://www.w3.org/2000/xmlns/', hjkigf['startPrefixMapping'](rqps, jfigkh));
  }for (var xw_zy$ = _z0$21['length']; xw_zy$--;) {
    ljnmi = _z0$21[xw_zy$];var idhe = ljnmi['prefix'];idhe && ('xml' === idhe && (ljnmi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== idhe && (ljnmi['uri'] = _32$1[idhe || '']));
  }var cedbaf = njklm['indexOf'](':');cedbaf > 0x0 ? (idhe = _z0$21['prefix'] = njklm['slice'](0x0, cedbaf), poqnm = _z0$21['localName'] = njklm['slice'](cedbaf + 0x1)) : (idhe = null, poqnm = _z0$21['localName'] = njklm);var ighjef = _z0$21['uri'] = _32$1[idhe || ''];if (hjkigf['startElement'](ighjef, poqnm, njklm, _z0$21), !_z0$21['closed']) return _z0$21['currentNSMap'] = _32$1, _z0$21['localNSMap'] = tuv, !0x0;if (hjkigf['endElement'](ighjef, poqnm, njklm), tuv) {
    for (idhe in tuv) hjkigf['endPrefixMapping'](idhe);
  }
}function _dy_$wzx(kfhjg, iefd, dgfhei, nsqo, yz$x0) {
  if (/^(?:script|textarea)$/i['test'](dgfhei)) {
    var rsqp = kfhjg['indexOf']('</' + dgfhei + '>', iefd),
        ihjf = kfhjg['substring'](iefd + 0x1, rsqp);if (/[&<]/['test'](ihjf)) return (/^script$/i['test'](dgfhei) ? (yz$x0['characters'](ihjf, 0x0, ihjf['length']), rsqp) : (ihjf = ihjf['replace'](/&#?\w+;/g, nsqo), yz$x0['characters'](ihjf, 0x0, ihjf['length']), rsqp)
    );
  }return iefd + 0x1;
}function _dqutpr(hedfig, eijfgh, _ywz, vwuxty) {
  var gkfhi = vwuxty[_ywz];return null == gkfhi && (gkfhi = hedfig['lastIndexOf']('</' + _ywz + '>'), eijfgh > gkfhi && (gkfhi = hedfig['lastIndexOf']('</' + _ywz)), vwuxty[_ywz] = gkfhi), eijfgh > gkfhi;
}function _dxwzv(lkjig, z_1) {
  for (var rtsv in lkjig) z_1[rtsv] = lkjig[rtsv];
}function _domqpn(hjifeg, khigjf, fikghj, dgcehf) {
  var nosrqp = hjifeg['charAt'](khigjf + 0x2);switch (nosrqp) {case '-':
      if ('-' === hjifeg['charAt'](khigjf + 0x3)) {
        var hkgjfi = hjifeg['indexOf']('-->', khigjf + 0x4);return hkgjfi > khigjf ? (fikghj['comment'](hjifeg, khigjf + 0x4, hkgjfi - khigjf - 0x4), hkgjfi + 0x3) : (dgcehf['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == hjifeg['substr'](khigjf + 0x3, 0x6)) {
        var hkgjfi = hjifeg['indexOf'](']]>', khigjf + 0x9);return fikghj['startCDATA'](), fikghj['characters'](hjifeg, khigjf + 0x9, hkgjfi - khigjf - 0x9), fikghj['endCDATA'](), hkgjfi + 0x3;
      }var uwyzxv = _dfchgde(hjifeg, khigjf),
          $zyxv = uwyzxv['length'];if ($zyxv > 0x1 && /!doctype/i['test'](uwyzxv[0x0][0x0])) {
        var fceh = uwyzxv[0x1][0x0],
            rtpq = $zyxv > 0x3 && /^public$/i['test'](uwyzxv[0x2][0x0]) && uwyzxv[0x3][0x0],
            wtxy = $zyxv > 0x4 && uwyzxv[0x4][0x0],
            nosrp = uwyzxv[$zyxv - 0x1];return fikghj['startDTD'](fceh, rtpq && rtpq['replace'](/^(['"])(.*?)\1$/, '$2'), wtxy && wtxy['replace'](/^(['"])(.*?)\1$/, '$2')), fikghj['endDTD'](), nosrp['index'] + nosrp[0x0]['length'];
      }}return -0x1;
}function _d_$zy01(ebcf, _12403, kihlgj) {
  var $z0_2 = ebcf['indexOf']('?>', _12403);if ($z0_2) {
    var dhefc = ebcf['substring'](_12403, $z0_2)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (dhefc) {
      {
        dhefc[0x0]['length'];
      }return kihlgj['processingInstruction'](dhefc[0x1], dhefc[0x2]), $z0_2 + 0x2;
    }return -0x1;
  }return -0x1;
}function _dqtsvru() {}function _dedgif(gfdeb, loq) {
  return gfdeb['__proto__'] = loq, gfdeb;
}function _dfchgde(svtqr, qnrsp) {
  var fehgi,
      ljnmki = [],
      jkhfg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jkhfg['lastIndex'] = qnrsp, jkhfg['exec'](svtqr); fehgi = jkhfg['exec'](svtqr);) if (ljnmki['push'](fehgi), fehgi[0x1]) return ljnmki;
}var _dnolp = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dtuvrsq = new RegExp('[\\-\\.0-9' + _dnolp['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dtwsv = new RegExp('^' + _dnolp['source'] + _dtuvrsq['source'] + '*(?::' + _dnolp['source'] + _dtuvrsq['source'] + '*)?$'),
    _dgdfehc = 0x0,
    _dadfbe = 0x1,
    _dxv$yw = 0x2,
    _ddcfhe = 0x3,
    _dejfhig = 0x4,
    _dtxyvw = 0x5,
    _dgjifh = 0x6,
    _dnorqps = 0x7;_dknlmji['prototype'] = { 'parse': function (ytvx, gdbef, _0z$y) {
    var ecghf = this['domBuilder'];ecghf['startDocument'](), _dxwzv(gdbef, gdbef = {}), _dstwruv(ytvx, gdbef, _0z$y, ecghf, this['errorHandler']), ecghf['endDocument']();
  } }, _dqtsvru['prototype'] = { 'setTagName': function (qvst) {
    if (!_dtwsv['test'](qvst)) throw new Error('invalid tagName:' + qvst);this['tagName'] = qvst;
  }, 'add': function (cdae, opqnrs, zy_x) {
    if (!_dtwsv['test'](cdae)) throw new Error('invalid attribute:' + cdae);this[this['length']++] = { 'qName': cdae, 'value': opqnrs, 'offset': zy_x };
  }, 'length': 0x0, 'getLocalName': function (gehij) {
    return this[gehij]['localName'];
  }, 'getLocator': function (rvs) {
    return this[rvs]['locator'];
  }, 'getQName': function (soqtp) {
    return this[soqtp]['qName'];
  }, 'getURI': function (ifjhe) {
    return this[ifjhe]['uri'];
  }, 'getValue': function (sport) {
    return this[sport]['value'];
  } }, _dedgif({}, _dedgif['prototype']) instanceof _dedgif || (_dedgif = function (gcfhe, _$wzx) {
  function qtusvr() {}qtusvr['prototype'] = _$wzx, qtusvr = new qtusvr();for (_$wzx in gcfhe) qtusvr[_$wzx] = gcfhe[_$wzx];return qtusvr;
}), exports['XMLReader'] = _dknlmji;