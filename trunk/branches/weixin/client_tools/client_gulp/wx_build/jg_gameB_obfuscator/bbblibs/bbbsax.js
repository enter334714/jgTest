var _ = wx.y$;
function _dnomk() {}function _d$0zx_(w_yx$, prmqn, jigeh, edgh, ijmkln) {
  function fbdecg(ebcfa) {
    if (ebcfa > 0xffff) {
      ebcfa -= 0x10000;var pnmloq = 0xd800 + (ebcfa >> 0xa),
          adcfbe = 0xdc00 + (0x3ff & ebcfa);return String['fromCharCode'](pnmloq, adcfbe);
    }return String['fromCharCode'](ebcfa);
  }function kolnjm(yz$) {
    var w$_xyz = yz$['slice'](0x1, -0x1);return w$_xyz in jigeh ? jigeh[w$_xyz] : '#' === w$_xyz['charAt'](0x0) ? fbdecg(parseInt(w$_xyz['substr'](0x1)['replace']('x', '0x'))) : (ijmkln['error']('entity not found:' + yz$), yz$);
  }function w$xvy(y$_0z1) {
    if (y$_0z1 > wvusr) {
      var oklpnm = w_yx$['substring'](wvusr, y$_0z1)['replace'](/&#?\w+;/g, kolnjm);$_yxzw && dhie(wvusr), edgh['characters'](oklpnm, 0x0, y$_0z1 - wvusr), wvusr = y$_0z1;
    }
  }function dhie(rotpq, mqlpn) {
    for (; rotpq >= qtpsur && (mqlpn = $zxyv['exec'](w_yx$));) _3241 = mqlpn['index'], qtpsur = _3241 + mqlpn[0x0]['length'], $_yxzw['lineNumber']++;$_yxzw['columnNumber'] = rotpq - _3241 + 0x1;
  }for (var _3241 = 0x0, qtpsur = 0x0, $zxyv = /.*(?:\r\n?|\n)|.*$/g, $_yxzw = edgh['locator'], $_3120 = [{ 'currentNSMap': prmqn }], feghc = {}, wvusr = 0x0;;) {
    try {
      var mojlnk = w_yx$['indexOf']('<', wvusr);if (0x0 > mojlnk) {
        if (!w_yx$['substr'](wvusr)['match'](/^\s*$/)) {
          var cbdfeg = edgh['doc'],
              hfdgi = cbdfeg['createTextNode'](w_yx$['substr'](wvusr));cbdfeg['appendChild'](hfdgi), edgh['currentElement'] = hfdgi;
        }return;
      }switch (mojlnk > wvusr && w$xvy(mojlnk), w_yx$['charAt'](mojlnk + 0x1)) {case '/':
          var $0231_ = w_yx$['indexOf']('>', mojlnk + 0x3),
              xywzu = w_yx$['substring'](mojlnk + 0x2, $0231_),
              xtusw = $_3120['pop']();0x0 > $0231_ ? (xywzu = w_yx$['substring'](mojlnk + 0x2)['replace'](/[\s<].*/, ''), ijmkln['error']('end tag name: ' + xywzu + ' is not complete:' + xtusw['tagName']), $0231_ = mojlnk + 0x1 + xywzu['length']) : xywzu['match'](/\s</) && (xywzu = xywzu['replace'](/[\s<].*/, ''), ijmkln['error']('end tag name: ' + xywzu + ' maybe not complete'), $0231_ = mojlnk + 0x1 + xywzu['length']);var efdghc = xtusw['localNSMap'],
              yzv$ = xtusw['tagName'] == xywzu,
              tsorqp = yzv$ || xtusw['tagName'] && xtusw['tagName']['toLowerCase']() == xywzu['toLowerCase']();if (tsorqp) {
            if (edgh['endElement'](xtusw['uri'], xtusw['localName'], xywzu), efdghc) {
              for (var ptqurs in efdghc) edgh['endPrefixMapping'](ptqurs);
            }yzv$ || ijmkln['fatalError']('end tag name: ' + xywzu + ' is not match the current start tagName:' + xtusw['tagName']);
          } else $_3120['push'](xtusw);$0231_++;break;case '?':
          $_yxzw && dhie(mojlnk), $0231_ = _dfcade(w_yx$, mojlnk, edgh);break;case '!':
          $_yxzw && dhie(mojlnk), $0231_ = _dcbdfge(w_yx$, mojlnk, edgh, ijmkln);break;default:
          $_yxzw && dhie(mojlnk);var pqmn = new _dhmlkj(),
              adefbc = $_3120[$_3120['length'] - 0x1]['currentNSMap'],
              $0231_ = _d$z0_(w_yx$, mojlnk, pqmn, adefbc, kolnjm, ijmkln),
              kmnlji = pqmn['length'];if (!pqmn['closed'] && _ddfgbe(w_yx$, $0231_, pqmn['tagName'], feghc) && (pqmn['closed'] = !0x0, jigeh['nbsp'] || ijmkln['warning']('unclosed xml attribute')), $_yxzw && kmnlji) {
            for (var jnkmli = _dlpnmk($_yxzw, {}), srpq = 0x0; kmnlji > srpq; srpq++) {
              var lnqmo = pqmn[srpq];dhie(lnqmo['offset']), lnqmo['locator'] = _dlpnmk($_yxzw, {});
            }edgh['locator'] = jnkmli, _dnqrpm(pqmn, edgh, adefbc) && $_3120['push'](pqmn), edgh['locator'] = $_yxzw;
          } else _dnqrpm(pqmn, edgh, adefbc) && $_3120['push'](pqmn);'http://www.w3.org/1999/xhtml' !== pqmn['uri'] || pqmn['closed'] ? $0231_++ : $0231_ = _dtuqvrs(w_yx$, $0231_, pqmn['tagName'], kolnjm, edgh);}
    } catch (khlmi) {
      ijmkln['error']('element parse error: ' + khlmi), $0231_ = -0x1;
    }$0231_ > wvusr ? wvusr = $0231_ : w$xvy(Math['max'](mojlnk, wvusr) + 0x1);
  }
}function _dlpnmk(vy$xw, _zy$10) {
  return _zy$10['lineNumber'] = vy$xw['lineNumber'], _zy$10['columnNumber'] = vy$xw['columnNumber'], _zy$10;
}function _d$z0_(gkfhj, qmlopn, mljkhi, fhdecg, yuxz, lmik) {
  for (var omjknl, _xyw, qrtpsu = ++qmlopn, prqts = _dtqros;;) {
    var moqnpl = gkfhj['charAt'](qrtpsu);switch (moqnpl) {case '=':
        if (prqts === _d$2_0z) omjknl = gkfhj['slice'](qmlopn, qrtpsu), prqts = _dgdihe;else {
          if (prqts !== _duvrswt) throw new Error('attribute equal must after attrName');prqts = _dgdihe;
        }break;case '\x27':case '\x22':
        if (prqts === _dgdihe || prqts === _d$2_0z) {
          if (prqts === _d$2_0z && (lmik['warning']('attribute value must after "="'), omjknl = gkfhj['slice'](qmlopn, qrtpsu)), qmlopn = qrtpsu + 0x1, qrtpsu = gkfhj['indexOf'](moqnpl, qmlopn), !(qrtpsu > 0x0)) throw new Error('attribute value no end \'' + moqnpl + '\' match');_xyw = gkfhj['slice'](qmlopn, qrtpsu)['replace'](/&#?\w+;/g, yuxz), mljkhi['add'](omjknl, _xyw, qmlopn - 0x1), prqts = _dpoml;
        } else {
          if (prqts != _diljmkh) throw new Error('attribute value must after "="');_xyw = gkfhj['slice'](qmlopn, qrtpsu)['replace'](/&#?\w+;/g, yuxz), mljkhi['add'](omjknl, _xyw, qmlopn), lmik['warning']('attribute "' + omjknl + '" missed start quot(' + moqnpl + ')!!'), qmlopn = qrtpsu + 0x1, prqts = _dpoml;
        }break;case '/':
        switch (prqts) {case _dtqros:
            mljkhi['setTagName'](gkfhj['slice'](qmlopn, qrtpsu));case _dpoml:case _ddefcb:case _dgdfch:
            prqts = _dgdfch, mljkhi['closed'] = !0x0;case _diljmkh:case _d$2_0z:case _duvrswt:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lmik['error']('unexpected end of input'), prqts == _dtqros && mljkhi['setTagName'](gkfhj['slice'](qmlopn, qrtpsu)), qrtpsu;case '>':
        switch (prqts) {case _dtqros:
            mljkhi['setTagName'](gkfhj['slice'](qmlopn, qrtpsu));case _dpoml:case _ddefcb:case _dgdfch:
            break;case _diljmkh:case _d$2_0z:
            _xyw = gkfhj['slice'](qmlopn, qrtpsu), '/' === _xyw['slice'](-0x1) && (mljkhi['closed'] = !0x0, _xyw = _xyw['slice'](0x0, -0x1));case _duvrswt:
            prqts === _duvrswt && (_xyw = omjknl), prqts == _diljmkh ? (lmik['warning']('attribute "' + _xyw + '" missed quot(")!!'), mljkhi['add'](omjknl, _xyw['replace'](/&#?\w+;/g, yuxz), qmlopn)) : ('http://www.w3.org/1999/xhtml' === fhdecg[''] && _xyw['match'](/^(?:disabled|checked|selected)$/i) || lmik['warning']('attribute "' + _xyw + '" missed value!! "' + _xyw + '" instead!!'), mljkhi['add'](_xyw, _xyw, qmlopn));break;case _dgdihe:
            throw new Error('attribute value missed!!');}return qrtpsu;case '\u0080':
        moqnpl = '\x20';default:
        if ('\x20' >= moqnpl) switch (prqts) {case _dtqros:
            mljkhi['setTagName'](gkfhj['slice'](qmlopn, qrtpsu)), prqts = _ddefcb;break;case _d$2_0z:
            omjknl = gkfhj['slice'](qmlopn, qrtpsu), prqts = _duvrswt;break;case _diljmkh:
            var _xyw = gkfhj['slice'](qmlopn, qrtpsu)['replace'](/&#?\w+;/g, yuxz);lmik['warning']('attribute "' + _xyw + '" missed quot(")!!'), mljkhi['add'](omjknl, _xyw, qmlopn);case _dpoml:
            prqts = _ddefcb;} else switch (prqts) {case _duvrswt:
            {
              mljkhi['tagName'];
            }'http://www.w3.org/1999/xhtml' === fhdecg[''] && omjknl['match'](/^(?:disabled|checked|selected)$/i) || lmik['warning']('attribute "' + omjknl + '" missed value!! "' + omjknl + '" instead2!!'), mljkhi['add'](omjknl, omjknl, qmlopn), qmlopn = qrtpsu, prqts = _d$2_0z;break;case _dpoml:
            lmik['warning']('attribute space is required"' + omjknl + '\x22!!');case _ddefcb:
            prqts = _d$2_0z, qmlopn = qrtpsu;break;case _dgdihe:
            prqts = _diljmkh, qmlopn = qrtpsu;break;case _dgdfch:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}qrtpsu++;
  }
}function _dnqrpm(vwzuyx, nspo, cefghd) {
  for (var gfihd = vwzuyx['tagName'], ptqsru = null, hgf = vwzuyx['length']; hgf--;) {
    var befgcd = vwzuyx[hgf],
        onlpqm = befgcd['qName'],
        ywvxtu = befgcd['value'],
        him = onlpqm['indexOf'](':');if (him > 0x0) var ihm = befgcd['prefix'] = onlpqm['slice'](0x0, him),
        lmjon = onlpqm['slice'](him + 0x1),
        nmpolq = 'xmlns' === ihm && lmjon;else lmjon = onlpqm, ihm = null, nmpolq = 'xmlns' === onlpqm && '';befgcd['localName'] = lmjon, nmpolq !== !0x1 && (null == ptqsru && (ptqsru = {}, _dfeghd(cefghd, cefghd = {})), cefghd[nmpolq] = ptqsru[nmpolq] = ywvxtu, befgcd['uri'] = 'http://www.w3.org/2000/xmlns/', nspo['startPrefixMapping'](nmpolq, ywvxtu));
  }for (var hgf = vwzuyx['length']; hgf--;) {
    befgcd = vwzuyx[hgf];var ihm = befgcd['prefix'];ihm && ('xml' === ihm && (befgcd['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ihm && (befgcd['uri'] = cefghd[ihm || '']));
  }var him = gfihd['indexOf'](':');him > 0x0 ? (ihm = vwzuyx['prefix'] = gfihd['slice'](0x0, him), lmjon = vwzuyx['localName'] = gfihd['slice'](him + 0x1)) : (ihm = null, lmjon = vwzuyx['localName'] = gfihd);var fdechg = vwzuyx['uri'] = cefghd[ihm || ''];if (nspo['startElement'](fdechg, lmjon, gfihd, vwzuyx), !vwzuyx['closed']) return vwzuyx['currentNSMap'] = cefghd, vwzuyx['localNSMap'] = ptqsru, !0x0;if (nspo['endElement'](fdechg, lmjon, gfihd), ptqsru) {
    for (ihm in ptqsru) nspo['endPrefixMapping'](ihm);
  }
}function _dtuqvrs(poqns, mklnj, adefcb, ikmjlh, qstvur) {
  if (/^(?:script|textarea)$/i['test'](adefcb)) {
    var bgfec = poqns['indexOf']('</' + adefcb + '>', mklnj),
        pstqu = poqns['substring'](mklnj + 0x1, bgfec);if (/[&<]/['test'](pstqu)) return (/^script$/i['test'](adefcb) ? (qstvur['characters'](pstqu, 0x0, pstqu['length']), bgfec) : (pstqu = pstqu['replace'](/&#?\w+;/g, ikmjlh), qstvur['characters'](pstqu, 0x0, pstqu['length']), bgfec)
    );
  }return mklnj + 0x1;
}function _ddfgbe(mil, yzvwux, qstur, hkljim) {
  var y$0_1 = hkljim[qstur];return null == y$0_1 && (y$0_1 = mil['lastIndexOf']('</' + qstur + '>'), yzvwux > y$0_1 && (y$0_1 = mil['lastIndexOf']('</' + qstur)), hkljim[qstur] = y$0_1), yzvwux > y$0_1;
}function _dfeghd(yxvtu, fjhikg) {
  for (var gfdeb in yxvtu) fjhikg[gfdeb] = yxvtu[gfdeb];
}function _dcbdfge(igdfhe, rtospq, _$yz10, yzx_w) {
  var z_0y1$ = igdfhe['charAt'](rtospq + 0x2);switch (z_0y1$) {case '-':
      if ('-' === igdfhe['charAt'](rtospq + 0x3)) {
        var _w$yz = igdfhe['indexOf']('-->', rtospq + 0x4);return _w$yz > rtospq ? (_$yz10['comment'](igdfhe, rtospq + 0x4, _w$yz - rtospq - 0x4), _w$yz + 0x3) : (yzx_w['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == igdfhe['substr'](rtospq + 0x3, 0x6)) {
        var _w$yz = igdfhe['indexOf'](']]>', rtospq + 0x9);return _$yz10['startCDATA'](), _$yz10['characters'](igdfhe, rtospq + 0x9, _w$yz - rtospq - 0x9), _$yz10['endCDATA'](), _w$yz + 0x3;
      }var xz$0_y = _drqtp(igdfhe, rtospq),
          lomnjk = xz$0_y['length'];if (lomnjk > 0x1 && /!doctype/i['test'](xz$0_y[0x0][0x0])) {
        var vrtws = xz$0_y[0x1][0x0],
            mjlnik = lomnjk > 0x3 && /^public$/i['test'](xz$0_y[0x2][0x0]) && xz$0_y[0x3][0x0],
            cdaefb = lomnjk > 0x4 && xz$0_y[0x4][0x0],
            fhieg = xz$0_y[lomnjk - 0x1];return _$yz10['startDTD'](vrtws, mjlnik && mjlnik['replace'](/^(['"])(.*?)\1$/, '$2'), cdaefb && cdaefb['replace'](/^(['"])(.*?)\1$/, '$2')), _$yz10['endDTD'](), fhieg['index'] + fhieg[0x0]['length'];
      }}return -0x1;
}function _dfcade(gcbdef, jlkih, jkimhl) {
  var pomnr = gcbdef['indexOf']('?>', jlkih);if (pomnr) {
    var ywuxv = gcbdef['substring'](jlkih, pomnr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ywuxv) {
      {
        ywuxv[0x0]['length'];
      }return jkimhl['processingInstruction'](ywuxv[0x1], ywuxv[0x2]), pomnr + 0x2;
    }return -0x1;
  }return -0x1;
}function _dhmlkj() {}function _d_13$20(dgf, y10z) {
  return dgf['__proto__'] = y10z, dgf;
}function _drqtp(ljkgih, xyz$_) {
  var yxuwvz,
      mqprn = [],
      v$zwyx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (v$zwyx['lastIndex'] = xyz$_, v$zwyx['exec'](ljkgih); yxuwvz = v$zwyx['exec'](ljkgih);) if (mqprn['push'](yxuwvz), yxuwvz[0x1]) return mqprn;
}var _dqprmon = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dgfdbe = new RegExp('[\\-\\.0-9' + _dqprmon['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dplmqon = new RegExp('^' + _dqprmon['source'] + _dgfdbe['source'] + '*(?::' + _dqprmon['source'] + _dgfdbe['source'] + '*)?$'),
    _dtqros = 0x0,
    _d$2_0z = 0x1,
    _duvrswt = 0x2,
    _dgdihe = 0x3,
    _diljmkh = 0x4,
    _dpoml = 0x5,
    _ddefcb = 0x6,
    _dgdfch = 0x7;_dnomk['prototype'] = { 'parse': function (z0y1, xz$wv, gedfc) {
    var lmnk = this['domBuilder'];lmnk['startDocument'](), _dfeghd(xz$wv, xz$wv = {}), _d$0zx_(z0y1, xz$wv, gedfc, lmnk, this['errorHandler']), lmnk['endDocument']();
  } }, _dhmlkj['prototype'] = { 'setTagName': function (pnqrm) {
    if (!_dplmqon['test'](pnqrm)) throw new Error('invalid tagName:' + pnqrm);this['tagName'] = pnqrm;
  }, 'add': function (_$3, rutps, ljkmo) {
    if (!_dplmqon['test'](_$3)) throw new Error('invalid attribute:' + _$3);this[this['length']++] = { 'qName': _$3, 'value': rutps, 'offset': ljkmo };
  }, 'length': 0x0, 'getLocalName': function (efdhgc) {
    return this[efdhgc]['localName'];
  }, 'getLocator': function (rsvuqt) {
    return this[rsvuqt]['locator'];
  }, 'getQName': function (vutxws) {
    return this[vutxws]['qName'];
  }, 'getURI': function (npqsro) {
    return this[npqsro]['uri'];
  }, 'getValue': function (jmok) {
    return this[jmok]['value'];
  } }, _d_13$20({}, _d_13$20['prototype']) instanceof _d_13$20 || (_d_13$20 = function (uyxvwt, _yxwz) {
  function nsqor() {}nsqor['prototype'] = _yxwz, nsqor = new nsqor();for (_yxwz in uyxvwt) nsqor[_yxwz] = uyxvwt[_yxwz];return nsqor;
}), exports['XMLReader'] = _dnomk;