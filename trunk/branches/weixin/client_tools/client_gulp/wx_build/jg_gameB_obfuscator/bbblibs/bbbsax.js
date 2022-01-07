var _ = wx.y$;
function _ddgfec() {}function _ddfei(_0$yzx, lkmjin, rnoq, mhikj, igefd) {
  function ecfda(x_zyw$) {
    if (x_zyw$ > 0xffff) {
      x_zyw$ -= 0x10000;var xyz_ = 0xd800 + (x_zyw$ >> 0xa),
          fihjg = 0xdc00 + (0x3ff & x_zyw$);return String['fromCharCode'](xyz_, fihjg);
    }return String['fromCharCode'](x_zyw$);
  }function sqvr(qpnso) {
    var $ywzv = qpnso['slice'](0x1, -0x1);return $ywzv in rnoq ? rnoq[$ywzv] : '#' === $ywzv['charAt'](0x0) ? ecfda(parseInt($ywzv['substr'](0x1)['replace']('x', '0x'))) : (igefd['error']('entity not found:' + qpnso), qpnso);
  }function gefdcb(bfgcd) {
    if (bfgcd > dgiefh) {
      var olpnm = _0$yzx['substring'](dgiefh, bfgcd)['replace'](/&#?\w+;/g, sqvr);lkih && dbgc(dgiefh), mhikj['characters'](olpnm, 0x0, bfgcd - dgiefh), dgiefh = bfgcd;
    }
  }function dbgc(_13042, fdgei) {
    for (; _13042 >= lhkjim && (fdgei = iljghk['exec'](_0$yzx));) vutsxw = fdgei['index'], lhkjim = vutsxw + fdgei[0x0]['length'], lkih['lineNumber']++;lkih['columnNumber'] = _13042 - vutsxw + 0x1;
  }for (var vutsxw = 0x0, lhkjim = 0x0, iljghk = /.*(?:\r\n?|\n)|.*$/g, lkih = mhikj['locator'], tspqur = [{ 'currentNSMap': lkmjin }], kljon = {}, dgiefh = 0x0;;) {
    try {
      var njlkom = _0$yzx['indexOf']('<', dgiefh);if (0x0 > njlkom) {
        if (!_0$yzx['substr'](dgiefh)['match'](/^\s*$/)) {
          var yvxuw = mhikj['doc'],
              okplm = yvxuw['createTextNode'](_0$yzx['substr'](dgiefh));yvxuw['appendChild'](okplm), mhikj['currentElement'] = okplm;
        }return;
      }switch (njlkom > dgiefh && gefdcb(njlkom), _0$yzx['charAt'](njlkom + 0x1)) {case '/':
          var hkm = _0$yzx['indexOf']('>', njlkom + 0x3),
              hjfkg = _0$yzx['substring'](njlkom + 0x2, hkm),
              sprto = tspqur['pop']();0x0 > hkm ? (hjfkg = _0$yzx['substring'](njlkom + 0x2)['replace'](/[\s<].*/, ''), igefd['error']('end tag name: ' + hjfkg + ' is not complete:' + sprto['tagName']), hkm = njlkom + 0x1 + hjfkg['length']) : hjfkg['match'](/\s</) && (hjfkg = hjfkg['replace'](/[\s<].*/, ''), igefd['error']('end tag name: ' + hjfkg + ' maybe not complete'), hkm = njlkom + 0x1 + hjfkg['length']);var knlji = sprto['localNSMap'],
              eidgf = sprto['tagName'] == hjfkg,
              lghkij = eidgf || sprto['tagName'] && sprto['tagName']['toLowerCase']() == hjfkg['toLowerCase']();if (lghkij) {
            if (mhikj['endElement'](sprto['uri'], sprto['localName'], hjfkg), knlji) {
              for (var jlghk in knlji) mhikj['endPrefixMapping'](jlghk);
            }eidgf || igefd['fatalError']('end tag name: ' + hjfkg + ' is not match the current start tagName:' + sprto['tagName']);
          } else tspqur['push'](sprto);hkm++;break;case '?':
          lkih && dbgc(njlkom), hkm = _dvsxwt(_0$yzx, njlkom, mhikj);break;case '!':
          lkih && dbgc(njlkom), hkm = _d_xz0y(_0$yzx, njlkom, mhikj, igefd);break;default:
          lkih && dbgc(njlkom);var x_$yzw = new _dbcedfa(),
              porq = tspqur[tspqur['length'] - 0x1]['currentNSMap'],
              hkm = _d$0213_(_0$yzx, njlkom, x_$yzw, porq, sqvr, igefd),
              _$y01 = x_$yzw['length'];if (!x_$yzw['closed'] && _dlpnok(_0$yzx, hkm, x_$yzw['tagName'], kljon) && (x_$yzw['closed'] = !0x0, rnoq['nbsp'] || igefd['warning']('unclosed xml attribute')), lkih && _$y01) {
            for (var z102$ = _dmknpl(lkih, {}), qsupt = 0x0; _$y01 > qsupt; qsupt++) {
              var utqsvr = x_$yzw[qsupt];dbgc(utqsvr['offset']), utqsvr['locator'] = _dmknpl(lkih, {});
            }mhikj['locator'] = z102$, _dbcgdef(x_$yzw, mhikj, porq) && tspqur['push'](x_$yzw), mhikj['locator'] = lkih;
          } else _dbcgdef(x_$yzw, mhikj, porq) && tspqur['push'](x_$yzw);'http://www.w3.org/1999/xhtml' !== x_$yzw['uri'] || x_$yzw['closed'] ? hkm++ : hkm = _digjef(_0$yzx, hkm, x_$yzw['tagName'], sqvr, mhikj);}
    } catch (qlonmp) {
      igefd['error']('element parse error: ' + qlonmp), hkm = -0x1;
    }hkm > dgiefh ? dgiefh = hkm : gefdcb(Math['max'](njlkom, dgiefh) + 0x1);
  }
}function _dmknpl(jmklh, yzvw$x) {
  return yzvw$x['lineNumber'] = jmklh['lineNumber'], yzvw$x['columnNumber'] = jmklh['columnNumber'], yzvw$x;
}function _d$0213_(trvwsu, zx_0, kmol, jink, $0321_, z_y1) {
  for (var zyx_w$, dbgce, ursqtp = ++zx_0, qusp = _dihgjef;;) {
    var fdhgce = trvwsu['charAt'](ursqtp);switch (fdhgce) {case '=':
        if (qusp === _dwzuv) zyx_w$ = trvwsu['slice'](zx_0, ursqtp), qusp = _drwutvs;else {
          if (qusp !== _dwutsvx) throw new Error('attribute equal must after attrName');qusp = _drwutvs;
        }break;case '\x27':case '\x22':
        if (qusp === _drwutvs || qusp === _dwzuv) {
          if (qusp === _dwzuv && (z_y1['warning']('attribute value must after "="'), zyx_w$ = trvwsu['slice'](zx_0, ursqtp)), zx_0 = ursqtp + 0x1, ursqtp = trvwsu['indexOf'](fdhgce, zx_0), !(ursqtp > 0x0)) throw new Error('attribute value no end \'' + fdhgce + '\' match');dbgce = trvwsu['slice'](zx_0, ursqtp)['replace'](/&#?\w+;/g, $0321_), kmol['add'](zyx_w$, dbgce, zx_0 - 0x1), qusp = _dsq;
        } else {
          if (qusp != _dprmonq) throw new Error('attribute value must after "="');dbgce = trvwsu['slice'](zx_0, ursqtp)['replace'](/&#?\w+;/g, $0321_), kmol['add'](zyx_w$, dbgce, zx_0), z_y1['warning']('attribute "' + zyx_w$ + '" missed start quot(' + fdhgce + ')!!'), zx_0 = ursqtp + 0x1, qusp = _dsq;
        }break;case '/':
        switch (qusp) {case _dihgjef:
            kmol['setTagName'](trvwsu['slice'](zx_0, ursqtp));case _dsq:case _dyvtwu:case _dvsruwt:
            qusp = _dvsruwt, kmol['closed'] = !0x0;case _dprmonq:case _dwzuv:case _dwutsvx:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z_y1['error']('unexpected end of input'), qusp == _dihgjef && kmol['setTagName'](trvwsu['slice'](zx_0, ursqtp)), ursqtp;case '>':
        switch (qusp) {case _dihgjef:
            kmol['setTagName'](trvwsu['slice'](zx_0, ursqtp));case _dsq:case _dyvtwu:case _dvsruwt:
            break;case _dprmonq:case _dwzuv:
            dbgce = trvwsu['slice'](zx_0, ursqtp), '/' === dbgce['slice'](-0x1) && (kmol['closed'] = !0x0, dbgce = dbgce['slice'](0x0, -0x1));case _dwutsvx:
            qusp === _dwutsvx && (dbgce = zyx_w$), qusp == _dprmonq ? (z_y1['warning']('attribute "' + dbgce + '" missed quot(")!!'), kmol['add'](zyx_w$, dbgce['replace'](/&#?\w+;/g, $0321_), zx_0)) : ('http://www.w3.org/1999/xhtml' === jink[''] && dbgce['match'](/^(?:disabled|checked|selected)$/i) || z_y1['warning']('attribute "' + dbgce + '" missed value!! "' + dbgce + '" instead!!'), kmol['add'](dbgce, dbgce, zx_0));break;case _drwutvs:
            throw new Error('attribute value missed!!');}return ursqtp;case '\u0080':
        fdhgce = '\x20';default:
        if ('\x20' >= fdhgce) switch (qusp) {case _dihgjef:
            kmol['setTagName'](trvwsu['slice'](zx_0, ursqtp)), qusp = _dyvtwu;break;case _dwzuv:
            zyx_w$ = trvwsu['slice'](zx_0, ursqtp), qusp = _dwutsvx;break;case _dprmonq:
            var dbgce = trvwsu['slice'](zx_0, ursqtp)['replace'](/&#?\w+;/g, $0321_);z_y1['warning']('attribute "' + dbgce + '" missed quot(")!!'), kmol['add'](zyx_w$, dbgce, zx_0);case _dsq:
            qusp = _dyvtwu;} else switch (qusp) {case _dwutsvx:
            {
              kmol['tagName'];
            }'http://www.w3.org/1999/xhtml' === jink[''] && zyx_w$['match'](/^(?:disabled|checked|selected)$/i) || z_y1['warning']('attribute "' + zyx_w$ + '" missed value!! "' + zyx_w$ + '" instead2!!'), kmol['add'](zyx_w$, zyx_w$, zx_0), zx_0 = ursqtp, qusp = _dwzuv;break;case _dsq:
            z_y1['warning']('attribute space is required"' + zyx_w$ + '\x22!!');case _dyvtwu:
            qusp = _dwzuv, zx_0 = ursqtp;break;case _drwutvs:
            qusp = _dprmonq, zx_0 = ursqtp;break;case _dvsruwt:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ursqtp++;
  }
}function _dbcgdef(mnoqp, qnorpm, z_x0$) {
  for (var bgfe = mnoqp['tagName'], xv$zy = null, igjfh = mnoqp['length']; igjfh--;) {
    var vuxtw = mnoqp[igjfh],
        xzyv$w = vuxtw['qName'],
        ruvwst = vuxtw['value'],
        fihgjk = xzyv$w['indexOf'](':');if (fihgjk > 0x0) var nijkl = vuxtw['prefix'] = xzyv$w['slice'](0x0, fihgjk),
        ghfde = xzyv$w['slice'](fihgjk + 0x1),
        uzyxv = 'xmlns' === nijkl && ghfde;else ghfde = xzyv$w, nijkl = null, uzyxv = 'xmlns' === xzyv$w && '';vuxtw['localName'] = ghfde, uzyxv !== !0x1 && (null == xv$zy && (xv$zy = {}, _dspqtor(z_x0$, z_x0$ = {})), z_x0$[uzyxv] = xv$zy[uzyxv] = ruvwst, vuxtw['uri'] = 'http://www.w3.org/2000/xmlns/', qnorpm['startPrefixMapping'](uzyxv, ruvwst));
  }for (var igjfh = mnoqp['length']; igjfh--;) {
    vuxtw = mnoqp[igjfh];var nijkl = vuxtw['prefix'];nijkl && ('xml' === nijkl && (vuxtw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nijkl && (vuxtw['uri'] = z_x0$[nijkl || '']));
  }var fihgjk = bgfe['indexOf'](':');fihgjk > 0x0 ? (nijkl = mnoqp['prefix'] = bgfe['slice'](0x0, fihgjk), ghfde = mnoqp['localName'] = bgfe['slice'](fihgjk + 0x1)) : (nijkl = null, ghfde = mnoqp['localName'] = bgfe);var npqso = mnoqp['uri'] = z_x0$[nijkl || ''];if (qnorpm['startElement'](npqso, ghfde, bgfe, mnoqp), !mnoqp['closed']) return mnoqp['currentNSMap'] = z_x0$, mnoqp['localNSMap'] = xv$zy, !0x0;if (qnorpm['endElement'](npqso, ghfde, bgfe), xv$zy) {
    for (nijkl in xv$zy) qnorpm['endPrefixMapping'](nijkl);
  }
}function _digjef(vtrqus, yuxwv, prqno, qonrps, lmjkhi) {
  if (/^(?:script|textarea)$/i['test'](prqno)) {
    var spruq = vtrqus['indexOf']('</' + prqno + '>', yuxwv),
        tvwsr = vtrqus['substring'](yuxwv + 0x1, spruq);if (/[&<]/['test'](tvwsr)) return (/^script$/i['test'](prqno) ? (lmjkhi['characters'](tvwsr, 0x0, tvwsr['length']), spruq) : (tvwsr = tvwsr['replace'](/&#?\w+;/g, qonrps), lmjkhi['characters'](tvwsr, 0x0, tvwsr['length']), spruq)
    );
  }return yuxwv + 0x1;
}function _dlpnok(omnqrp, pnomql, mrno, rtvqu) {
  var gkhif = rtvqu[mrno];return null == gkhif && (gkhif = omnqrp['lastIndexOf']('</' + mrno + '>'), pnomql > gkhif && (gkhif = omnqrp['lastIndexOf']('</' + mrno)), rtvqu[mrno] = gkhif), pnomql > gkhif;
}function _dspqtor(pqtrus, vtqur) {
  for (var pnoqm in pqtrus) vtqur[pnoqm] = pqtrus[pnoqm];
}function _d_xz0y($wy_x, rotsp, nplk, jkn) {
  var hide = $wy_x['charAt'](rotsp + 0x2);switch (hide) {case '-':
      if ('-' === $wy_x['charAt'](rotsp + 0x3)) {
        var lmkjhi = $wy_x['indexOf']('-->', rotsp + 0x4);return lmkjhi > rotsp ? (nplk['comment']($wy_x, rotsp + 0x4, lmkjhi - rotsp - 0x4), lmkjhi + 0x3) : (jkn['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == $wy_x['substr'](rotsp + 0x3, 0x6)) {
        var lmkjhi = $wy_x['indexOf'](']]>', rotsp + 0x9);return nplk['startCDATA'](), nplk['characters']($wy_x, rotsp + 0x9, lmkjhi - rotsp - 0x9), nplk['endCDATA'](), lmkjhi + 0x3;
      }var onrm = _dxy_z($wy_x, rotsp),
          lhgikj = onrm['length'];if (lhgikj > 0x1 && /!doctype/i['test'](onrm[0x0][0x0])) {
        var ecbfad = onrm[0x1][0x0],
            gjfe = lhgikj > 0x3 && /^public$/i['test'](onrm[0x2][0x0]) && onrm[0x3][0x0],
            bdefc = lhgikj > 0x4 && onrm[0x4][0x0],
            beafd = onrm[lhgikj - 0x1];return nplk['startDTD'](ecbfad, gjfe && gjfe['replace'](/^(['"])(.*?)\1$/, '$2'), bdefc && bdefc['replace'](/^(['"])(.*?)\1$/, '$2')), nplk['endDTD'](), beafd['index'] + beafd[0x0]['length'];
      }}return -0x1;
}function _dvsxwt(polmnk, turwv, cbged) {
  var nlkop = polmnk['indexOf']('?>', turwv);if (nlkop) {
    var lknjim = polmnk['substring'](turwv, nlkop)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lknjim) {
      {
        lknjim[0x0]['length'];
      }return cbged['processingInstruction'](lknjim[0x1], lknjim[0x2]), nlkop + 0x2;
    }return -0x1;
  }return -0x1;
}function _dbcedfa() {}function _dpmroqn(mljikh, jklonm) {
  return mljikh['__proto__'] = jklonm, mljikh;
}function _dxy_z(heifjg, lkhmi) {
  var snpqo,
      sxtw = [],
      ojlmn = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ojlmn['lastIndex'] = lkhmi, ojlmn['exec'](heifjg); snpqo = ojlmn['exec'](heifjg);) if (sxtw['push'](snpqo), snpqo[0x1]) return sxtw;
}var _difgejh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dtrpoq = new RegExp('[\\-\\.0-9' + _difgejh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dgjie = new RegExp('^' + _difgejh['source'] + _dtrpoq['source'] + '*(?::' + _difgejh['source'] + _dtrpoq['source'] + '*)?$'),
    _dihgjef = 0x0,
    _dwzuv = 0x1,
    _dwutsvx = 0x2,
    _drwutvs = 0x3,
    _dprmonq = 0x4,
    _dsq = 0x5,
    _dyvtwu = 0x6,
    _dvsruwt = 0x7;_ddgfec['prototype'] = { 'parse': function (adcfbe, w$zvy, xsvtu) {
    var iejgh = this['domBuilder'];iejgh['startDocument'](), _dspqtor(w$zvy, w$zvy = {}), _ddfei(adcfbe, w$zvy, xsvtu, iejgh, this['errorHandler']), iejgh['endDocument']();
  } }, _dbcedfa['prototype'] = { 'setTagName': function (komjln) {
    if (!_dgjie['test'](komjln)) throw new Error('invalid tagName:' + komjln);this['tagName'] = komjln;
  }, 'add': function (qut, hgdfce, cbdaf) {
    if (!_dgjie['test'](qut)) throw new Error('invalid attribute:' + qut);this[this['length']++] = { 'qName': qut, 'value': hgdfce, 'offset': cbdaf };
  }, 'length': 0x0, 'getLocalName': function (opnqs) {
    return this[opnqs]['localName'];
  }, 'getLocator': function (dfiehg) {
    return this[dfiehg]['locator'];
  }, 'getQName': function ($013) {
    return this[$013]['qName'];
  }, 'getURI': function (jlimh) {
    return this[jlimh]['uri'];
  }, 'getValue': function (prmo) {
    return this[prmo]['value'];
  } }, _dpmroqn({}, _dpmroqn['prototype']) instanceof _dpmroqn || (_dpmroqn = function (vw, prosnq) {
  function qprmo() {}qprmo['prototype'] = prosnq, qprmo = new qprmo();for (prosnq in vw) qprmo[prosnq] = vw[prosnq];return qprmo;
}), exports['XMLReader'] = _ddgfec;