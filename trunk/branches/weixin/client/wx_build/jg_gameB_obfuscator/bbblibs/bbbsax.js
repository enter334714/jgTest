var _ = wx.y$;
function _dstrquv() {}function _dgfehj(oqrpt, wvy, yz$10, tuqvr, rpsqno) {
  function gdbc(wyvut) {
    var nqsrop = wyvut['slice'](0x1, -0x1);return nqsrop in yz$10 ? yz$10[nqsrop] : '#' === nqsrop['charAt'](0x0) ? 0xffff < (nqsrop = parseInt(nqsrop['substr'](0x1)['replace']('x', '0x'))) ? (nqsrop -= 0x10000, String['fromCharCode'](0xd800 + (nqsrop >> 0xa), 0xdc00 + (0x3ff & nqsrop))) : String['fromCharCode'](nqsrop) : (rpsqno['error']('entity not found:' + wyvut), wyvut);
  }function ojl(ecgdh) {
    var qurps;jihlmk < ecgdh && (qurps = oqrpt['substring'](jihlmk, ecgdh)['replace'](/&#?\w+;/g, gdbc), wyuv && dfghc(jihlmk), tuqvr['characters'](qurps, 0x0, ecgdh - jihlmk), jihlmk = ecgdh);
  }function dfghc(vursqt, xvwt) {
    for (; imjlkn <= vursqt && (xvwt = lop['exec'](oqrpt));) pmnklo = xvwt['index'], imjlkn = pmnklo + xvwt[0x0]['length'], wyuv['lineNumber']++;wyuv['columnNumber'] = vursqt - pmnklo + 0x1;
  }for (var pmnklo = 0x0, imjlkn = 0x0, lop = /.*(?:\r\n?|\n)|.*$/g, wyuv = tuqvr['locator'], y$zw_ = [{ 'currentNSMap': wvy }], npolkm = {}, jihlmk = 0x0;;) {
    try {
      var uqtvr = oqrpt['indexOf']('<', jihlmk),
          dgehc,
          pqsutr;if (uqtvr < 0x0) return void (oqrpt['substr'](jihlmk)['match'](/^\s*$/) || (pqsutr = (dgehc = tuqvr['doc'])['createTextNode'](oqrpt['substr'](jihlmk)), dgehc['appendChild'](pqsutr), tuqvr['currentElement'] = pqsutr));switch (jihlmk < uqtvr && ojl(uqtvr), oqrpt['charAt'](uqtvr + 0x1)) {case '/':
          var _z0xy = oqrpt['indexOf']('>', uqtvr + 0x3),
              ikljgh = oqrpt['substring'](uqtvr + 0x2, _z0xy),
              noqs = y$zw_['pop']();_z0xy < 0x0 ? (ikljgh = oqrpt['substring'](uqtvr + 0x2)['replace'](/[\s<].*/, ''), rpsqno['error']('end tag name: ' + ikljgh + ' is not complete:' + noqs['tagName']), _z0xy = uqtvr + 0x1 + ikljgh['length']) : ikljgh['match'](/\s</) && (ikljgh = ikljgh['replace'](/[\s<].*/, ''), rpsqno['error']('end tag name: ' + ikljgh + ' maybe not complete'), _z0xy = uqtvr + 0x1 + ikljgh['length']);var spoq = noqs['localNSMap'],
              otspqr = noqs['tagName'] == ikljgh;if (otspqr || noqs['tagName'] && noqs['tagName']['toLowerCase']() == ikljgh['toLowerCase']()) {
            if (tuqvr['endElement'](noqs['uri'], noqs['localName'], ikljgh), spoq) {
              for (var dgfieh in spoq) tuqvr['endPrefixMapping'](dgfieh);
            }otspqr || rpsqno['fatalError']('end tag name: ' + ikljgh + ' is not match the current start tagName:' + noqs['tagName']);
          } else y$zw_['push'](noqs);_z0xy++;break;case '?':
          wyuv && dfghc(uqtvr), _z0xy = _dfdcgh(oqrpt, uqtvr, tuqvr);break;case '!':
          wyuv && dfghc(uqtvr), _z0xy = _dnorqm(oqrpt, uqtvr, tuqvr, rpsqno);break;default:
          wyuv && dfghc(uqtvr);var nrmqpo = new _dsxutv(),
              ruq = y$zw_[y$zw_['length'] - 0x1]['currentNSMap'],
              _z0xy = _dbdgef(oqrpt, uqtvr, nrmqpo, ruq, gdbc, rpsqno),
              rqspno = nrmqpo['length'];if (!nrmqpo['closed'] && _dqrpson(oqrpt, _z0xy, nrmqpo['tagName'], npolkm) && (nrmqpo['closed'] = !0x0, yz$10['nbsp'] || rpsqno['warning']('unclosed xml attribute')), wyuv && rqspno) {
            for (var _y$1z0 = _dhkim(wyuv, {}), qnpmr = 0x0; qnpmr < rqspno; qnpmr++) {
              var kjhml = nrmqpo[qnpmr];dfghc(kjhml['offset']), kjhml['locator'] = _dhkim(wyuv, {});
            }tuqvr['locator'] = _y$1z0, _dzxyuw(nrmqpo, tuqvr, ruq) && y$zw_['push'](nrmqpo), tuqvr['locator'] = wyuv;
          } else _dzxyuw(nrmqpo, tuqvr, ruq) && y$zw_['push'](nrmqpo);'http://www.w3.org/1999/xhtml' !== nrmqpo['uri'] || nrmqpo['closed'] ? _z0xy++ : _z0xy = _dvwty(oqrpt, _z0xy, nrmqpo['tagName'], gdbc, tuqvr);}
    } catch (rqpots) {
      rpsqno['error']('element parse error: ' + rqpots), _z0xy = -0x1;
    }jihlmk < _z0xy ? jihlmk = _z0xy : ojl(Math['max'](uqtvr, jihlmk) + 0x1);
  }
}function _dhkim(tsuxvw, _10zy) {
  return _10zy['lineNumber'] = tsuxvw['lineNumber'], _10zy['columnNumber'] = tsuxvw['columnNumber'], _10zy;
}function _dbdgef(fjkgi, fbacd, ighjef, gbecfd, jhilm, _021) {
  for (var oqln, pmnor = ++fbacd, jlg = _dbcdgf;;) {
    var utsxv = fjkgi['charAt'](pmnor);switch (utsxv) {case '=':
        if (jlg === _dfbcg) oqln = fjkgi['slice'](fbacd, pmnor), jlg = _d_$132;else {
          if (jlg !== _dspqno) throw new Error('attribute equal must after attrName');jlg = _d_$132;
        }break;case '\x27':case '\x22':
        if (jlg === _d_$132 || jlg === _dfbcg) {
          if (jlg === _dfbcg && (_021['warning']('attribute value must after "="'), oqln = fjkgi['slice'](fbacd, pmnor)), !(0x0 < (pmnor = fjkgi['indexOf'](utsxv, fbacd = pmnor + 0x1)))) throw new Error('attribute value no end \'' + utsxv + '\' match');gidhf = fjkgi['slice'](fbacd, pmnor)['replace'](/&#?\w+;/g, jhilm), ighjef['add'](oqln, gidhf, fbacd - 0x1), jlg = _dfghcde;
        } else {
          if (jlg != _dxvzuw) throw new Error('attribute value must after "="');gidhf = fjkgi['slice'](fbacd, pmnor)['replace'](/&#?\w+;/g, jhilm), ighjef['add'](oqln, gidhf, fbacd), _021['warning']('attribute "' + oqln + '" missed start quot(' + utsxv + ')!!'), fbacd = pmnor + 0x1, jlg = _dfghcde;
        }break;case '/':
        switch (jlg) {case _dbcdgf:
            ighjef['setTagName'](fjkgi['slice'](fbacd, pmnor));case _dfghcde:case _dqtspro:case _dvwyx:
            jlg = _dvwyx, ighjef['closed'] = !0x0;case _dxvzuw:case _dfbcg:case _dspqno:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _021['error']('unexpected end of input'), jlg == _dbcdgf && ighjef['setTagName'](fjkgi['slice'](fbacd, pmnor)), pmnor;case '>':
        switch (jlg) {case _dbcdgf:
            ighjef['setTagName'](fjkgi['slice'](fbacd, pmnor));case _dfghcde:case _dqtspro:case _dvwyx:
            break;case _dxvzuw:case _dfbcg:
            '/' === (gidhf = fjkgi['slice'](fbacd, pmnor))['slice'](-0x1) && (ighjef['closed'] = !0x0, gidhf = gidhf['slice'](0x0, -0x1));case _dspqno:
            jlg === _dspqno && (gidhf = oqln), jlg == _dxvzuw ? (_021['warning']('attribute "' + gidhf + '" missed quot(")!!'), ighjef['add'](oqln, gidhf['replace'](/&#?\w+;/g, jhilm), fbacd)) : ('http://www.w3.org/1999/xhtml' === gbecfd[''] && gidhf['match'](/^(?:disabled|checked|selected)$/i) || _021['warning']('attribute "' + gidhf + '" missed value!! "' + gidhf + '" instead!!'), ighjef['add'](gidhf, gidhf, fbacd));break;case _d_$132:
            throw new Error('attribute value missed!!');}return pmnor;case '\u0080':
        utsxv = '\x20';default:
        if (utsxv <= '\x20') switch (jlg) {case _dbcdgf:
            ighjef['setTagName'](fjkgi['slice'](fbacd, pmnor)), jlg = _dqtspro;break;case _dfbcg:
            oqln = fjkgi['slice'](fbacd, pmnor), jlg = _dspqno;break;case _dxvzuw:
            var gidhf = fjkgi['slice'](fbacd, pmnor)['replace'](/&#?\w+;/g, jhilm);_021['warning']('attribute "' + gidhf + '" missed quot(")!!'), ighjef['add'](oqln, gidhf, fbacd);case _dfghcde:
            jlg = _dqtspro;} else switch (jlg) {case _dspqno:
            ighjef['tagName'], 'http://www.w3.org/1999/xhtml' === gbecfd[''] && oqln['match'](/^(?:disabled|checked|selected)$/i) || _021['warning']('attribute "' + oqln + '" missed value!! "' + oqln + '" instead2!!'), ighjef['add'](oqln, oqln, fbacd), fbacd = pmnor, jlg = _dfbcg;break;case _dfghcde:
            _021['warning']('attribute space is required"' + oqln + '\x22!!');case _dqtspro:
            jlg = _dfbcg, fbacd = pmnor;break;case _d_$132:
            jlg = _dxvzuw, fbacd = pmnor;break;case _dvwyx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}pmnor++;
  }
}function _dzxyuw(usptr, pnolkm, knmji) {
  for (var yxuvz = usptr['tagName'], fijkgh = null, opmlq = usptr['length']; opmlq--;) {
    var uqstrv = usptr[opmlq],
        kpnlom = uqstrv['qName'],
        oknlp = uqstrv['value'],
        vuqst;kpnlom = 0x0 < (y_zx0 = kpnlom['indexOf'](':')) ? (pqmonl = uqstrv['prefix'] = kpnlom['slice'](0x0, y_zx0), vuqst = kpnlom['slice'](y_zx0 + 0x1), 'xmlns' === pqmonl && vuqst) : (pqmonl = null, 'xmlns' === (vuqst = kpnlom) && ''), uqstrv['localName'] = vuqst, !0x1 !== kpnlom && (null == fijkgh && (fijkgh = {}, _dpomqn(knmji, knmji = {})), knmji[kpnlom] = fijkgh[kpnlom] = oknlp, uqstrv['uri'] = 'http://www.w3.org/2000/xmlns/', pnolkm['startPrefixMapping'](kpnlom, oknlp));
  }for (opmlq = usptr['length']; opmlq--;) (pqmonl = (uqstrv = usptr[opmlq])['prefix']) && ('xml' === pqmonl && (uqstrv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pqmonl && (uqstrv['uri'] = knmji[pqmonl || '']));var y_zx0;vuqst = 0x0 < (y_zx0 = yxuvz['indexOf'](':')) ? (pqmonl = usptr['prefix'] = yxuvz['slice'](0x0, y_zx0), usptr['localName'] = yxuvz['slice'](y_zx0 + 0x1)) : (pqmonl = null, usptr['localName'] = yxuvz);var yxut = usptr['uri'] = knmji[pqmonl || ''];if (pnolkm['startElement'](yxut, vuqst, yxuvz, usptr), !usptr['closed']) return usptr['currentNSMap'] = knmji, usptr['localNSMap'] = fijkgh, !0x0;if (pnolkm['endElement'](yxut, vuqst, yxuvz), fijkgh) {
    for (var pqmonl in fijkgh) pnolkm['endPrefixMapping'](pqmonl);
  }
}function _dvwty(qstrp, $yxz0, jighfk, ursqp, ijhlm) {
  if (/^(?:script|textarea)$/i['test'](jighfk)) {
    var sut = qstrp['indexOf']('</' + jighfk + '>', $yxz0),
        qstrp = qstrp['substring']($yxz0 + 0x1, sut);if (/[&<]/['test'](qstrp)) return (/^script$/i['test'](jighfk) || (qstrp = qstrp['replace'](/&#?\w+;/g, ursqp)), ijhlm['characters'](qstrp, 0x0, qstrp['length']), sut
    );
  }return $yxz0 + 0x1;
}function _dqrpson(z0xy$, vstux, srvtu, ruvw) {
  var nlokp = ruvw[srvtu];return null == nlokp && ((nlokp = z0xy$['lastIndexOf']('</' + srvtu + '>')) < vstux && (nlokp = z0xy$['lastIndexOf']('</' + srvtu)), ruvw[srvtu] = nlokp), nlokp < vstux;
}function _dpomqn(gkhifj, olmqp) {
  for (var psrotq in gkhifj) olmqp[psrotq] = gkhifj[psrotq];
}function _dnorqm(uzxv, qprons, tqupsr, rqsutp) {
  var npqoml = uzxv['charAt'](qprons + 0x2);if ('-' === npqoml) return '-' !== uzxv['charAt'](qprons + 0x3) ? -0x1 : qprons < (hifjge = uzxv['indexOf']('-->', qprons + 0x4)) ? (tqupsr['comment'](uzxv, qprons + 0x4, hifjge - qprons - 0x4), hifjge + 0x3) : (rqsutp['error']('Unclosed comment'), -0x1);if ('CDATA[' == uzxv['substr'](qprons + 0x3, 0x6)) {
    var hifjge = uzxv['indexOf'](']]>', qprons + 0x9);return tqupsr['startCDATA'](), tqupsr['characters'](uzxv, qprons + 0x9, hifjge - qprons - 0x9), tqupsr['endCDATA'](), hifjge + 0x3;
  }npqoml = _dmljikn(uzxv, qprons), rqsutp = npqoml['length'];if (0x1 < rqsutp && /!doctype/i['test'](npqoml[0x0][0x0])) return hifjge = npqoml[0x1][0x0], uzxv = 0x3 < rqsutp && /^public$/i['test'](npqoml[0x2][0x0]) && npqoml[0x3][0x0], qprons = 0x4 < rqsutp && npqoml[0x4][0x0], rqsutp = npqoml[rqsutp - 0x1], (tqupsr['startDTD'](hifjge, uzxv && uzxv['replace'](/^(['"])(.*?)\1$/, '$2'), qprons && qprons['replace'](/^(['"])(.*?)\1$/, '$2')), tqupsr['endDTD'](), rqsutp['index'] + rqsutp[0x0]['length']);return -0x1;
}function _dfdcgh(gdhcfe, yvtxw, suvxtw) {
  var nomqpl = gdhcfe['indexOf']('?>', yvtxw);if (nomqpl) return yvtxw = gdhcfe['substring'](yvtxw, nomqpl)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), yvtxw ? (yvtxw[0x0]['length'], suvxtw['processingInstruction'](yvtxw[0x1], yvtxw[0x2]), nomqpl + 0x2) : -0x1;return -0x1;
}function _dsxutv() {}function _dptqos(tsqvr, eijfg) {
  return tsqvr['__proto__'] = eijfg, tsqvr;
}function _dmljikn(rqvst, zyxuw) {
  var opqsnr,
      qopm = [],
      edcbfg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (edcbfg['lastIndex'] = zyxuw, edcbfg['exec'](rqvst); opqsnr = edcbfg['exec'](rqvst);) if (qopm['push'](opqsnr), opqsnr[0x1]) return qopm;
}var _d_xz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dlhikgj = new RegExp('[\\-\\.0-9' + _d_xz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _duptrqs = new RegExp('^' + _d_xz['source'] + _dlhikgj['source'] + '*(?::' + _d_xz['source'] + _dlhikgj['source'] + '*)?$'),
    _dbcdgf = 0x0,
    _dfbcg = 0x1,
    _dspqno = 0x2,
    _d_$132 = 0x3,
    _dxvzuw = 0x4,
    _dfghcde = 0x5,
    _dqtspro = 0x6,
    _dvwyx = 0x7;_dstrquv['prototype'] = { 'parse': function (decfgh, z_2$01, omklnp) {
    var iegfd = this['domBuilder'];iegfd['startDocument'](), _dpomqn(z_2$01, z_2$01 = {}), _dgfehj(decfgh, z_2$01, omklnp, iegfd, this['errorHandler']), iegfd['endDocument']();
  } }, _dsxutv['prototype'] = { 'setTagName': function (xyz_w) {
    if (!_duptrqs['test'](xyz_w)) throw new Error('invalid tagName:' + xyz_w);this['tagName'] = xyz_w;
  }, 'add': function (lomjn, sqtrpo, bfdcg) {
    if (!_duptrqs['test'](lomjn)) throw new Error('invalid attribute:' + lomjn);this[this['length']++] = { 'qName': lomjn, 'value': sqtrpo, 'offset': bfdcg };
  }, 'length': 0x0, 'getLocalName': function (z$yx0_) {
    return this[z$yx0_]['localName'];
  }, 'getLocator': function (prqus) {
    return this[prqus]['locator'];
  }, 'getQName': function ($_z1) {
    return this[$_z1]['qName'];
  }, 'getURI': function (_z0y$x) {
    return this[_z0y$x]['uri'];
  }, 'getValue': function (pnolqm) {
    return this[pnolqm]['value'];
  } }, _dptqos({}, _dptqos['prototype']) instanceof _dptqos || (_dptqos = function (ormnqp, kghij) {
  function vyxwut() {}for (kghij in vyxwut['prototype'] = kghij, vyxwut = new vyxwut(), ormnqp) vyxwut[kghij] = ormnqp[kghij];return vyxwut;
}), exports['XMLReader'] = _dstrquv;