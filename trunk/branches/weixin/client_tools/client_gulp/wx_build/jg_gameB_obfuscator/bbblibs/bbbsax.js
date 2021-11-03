var _ = wx.y$;
function _dheifgj() {}function _dkjlhm(rqtu, igdehf, $y_1z0, swuxt, ljkm) {
  function edcfba(qrusvt) {
    if (qrusvt > 0xffff) {
      qrusvt -= 0x10000;var fecgb = 0xd800 + (qrusvt >> 0xa),
          zyvwu = 0xdc00 + (0x3ff & qrusvt);return String['fromCharCode'](fecgb, zyvwu);
    }return String['fromCharCode'](qrusvt);
  }function qrutp(xy0z_) {
    var limkjn = xy0z_['slice'](0x1, -0x1);return limkjn in $y_1z0 ? $y_1z0[limkjn] : '#' === limkjn['charAt'](0x0) ? edcfba(parseInt(limkjn['substr'](0x1)['replace']('x', '0x'))) : (ljkm['error']('entity not found:' + xy0z_), xy0z_);
  }function bgcef(yuwtv) {
    if (yuwtv > xwvyt) {
      var mklop = rqtu['substring'](xwvyt, yuwtv)['replace'](/&#?\w+;/g, qrutp);_yzxw$ && usxtw(xwvyt), swuxt['characters'](mklop, 0x0, yuwtv - xwvyt), xwvyt = yuwtv;
    }
  }function usxtw(ruqtps, figkj) {
    for (; ruqtps >= fghkj && (figkj = vwuzyx['exec'](rqtu));) twsur = figkj['index'], fghkj = twsur + figkj[0x0]['length'], _yzxw$['lineNumber']++;_yzxw$['columnNumber'] = ruqtps - twsur + 0x1;
  }for (var twsur = 0x0, fghkj = 0x0, vwuzyx = /.*(?:\r\n?|\n)|.*$/g, _yzxw$ = swuxt['locator'], zw$xy_ = [{ 'currentNSMap': igdehf }], mjonk = {}, xwvyt = 0x0;;) {
    try {
      var mqronp = rqtu['indexOf']('<', xwvyt);if (0x0 > mqronp) {
        if (!rqtu['substr'](xwvyt)['match'](/^\s*$/)) {
          var lkgjh = swuxt['doc'],
              qsrot = lkgjh['createTextNode'](rqtu['substr'](xwvyt));lkgjh['appendChild'](qsrot), swuxt['currentElement'] = qsrot;
        }return;
      }switch (mqronp > xwvyt && bgcef(mqronp), rqtu['charAt'](mqronp + 0x1)) {case '/':
          var ejhgf = rqtu['indexOf']('>', mqronp + 0x3),
              limknj = rqtu['substring'](mqronp + 0x2, ejhgf),
              egcfb = zw$xy_['pop']();0x0 > ejhgf ? (limknj = rqtu['substring'](mqronp + 0x2)['replace'](/[\s<].*/, ''), ljkm['error']('end tag name: ' + limknj + ' is not complete:' + egcfb['tagName']), ejhgf = mqronp + 0x1 + limknj['length']) : limknj['match'](/\s</) && (limknj = limknj['replace'](/[\s<].*/, ''), ljkm['error']('end tag name: ' + limknj + ' maybe not complete'), ejhgf = mqronp + 0x1 + limknj['length']);var ijfehg = egcfb['localNSMap'],
              y0z$_ = egcfb['tagName'] == limknj,
              ghfei = y0z$_ || egcfb['tagName'] && egcfb['tagName']['toLowerCase']() == limknj['toLowerCase']();if (ghfei) {
            if (swuxt['endElement'](egcfb['uri'], egcfb['localName'], limknj), ijfehg) {
              for (var ghf in ijfehg) swuxt['endPrefixMapping'](ghf);
            }y0z$_ || ljkm['fatalError']('end tag name: ' + limknj + ' is not match the current start tagName:' + egcfb['tagName']);
          } else zw$xy_['push'](egcfb);ejhgf++;break;case '?':
          _yzxw$ && usxtw(mqronp), ejhgf = _dvyuw(rqtu, mqronp, swuxt);break;case '!':
          _yzxw$ && usxtw(mqronp), ejhgf = _duzxywv(rqtu, mqronp, swuxt, ljkm);break;default:
          _yzxw$ && usxtw(mqronp);var mkop = new _dhkgf(),
              gcbe = zw$xy_[zw$xy_['length'] - 0x1]['currentNSMap'],
              ejhgf = _dtpqso(rqtu, mqronp, mkop, gcbe, qrutp, ljkm),
              qtorsp = mkop['length'];if (!mkop['closed'] && _dursqv(rqtu, ejhgf, mkop['tagName'], mjonk) && (mkop['closed'] = !0x0, $y_1z0['nbsp'] || ljkm['warning']('unclosed xml attribute')), _yzxw$ && qtorsp) {
            for (var xtyuvw = _djmklni(_yzxw$, {}), w$x_zy = 0x0; qtorsp > w$x_zy; w$x_zy++) {
              var dhfcge = mkop[w$x_zy];usxtw(dhfcge['offset']), dhfcge['locator'] = _djmklni(_yzxw$, {});
            }swuxt['locator'] = xtyuvw, _dhglijk(mkop, swuxt, gcbe) && zw$xy_['push'](mkop), swuxt['locator'] = _yzxw$;
          } else _dhglijk(mkop, swuxt, gcbe) && zw$xy_['push'](mkop);'http://www.w3.org/1999/xhtml' !== mkop['uri'] || mkop['closed'] ? ejhgf++ : ejhgf = _dokjmnl(rqtu, ejhgf, mkop['tagName'], qrutp, swuxt);}
    } catch (uzvxyw) {
      ljkm['error']('element parse error: ' + uzvxyw), ejhgf = -0x1;
    }ejhgf > xwvyt ? xwvyt = ejhgf : bgcef(Math['max'](mqronp, xwvyt) + 0x1);
  }
}function _djmklni(_1y$0z, $0_yxz) {
  return $0_yxz['lineNumber'] = _1y$0z['lineNumber'], $0_yxz['columnNumber'] = _1y$0z['columnNumber'], $0_yxz;
}function _dtpqso(xtusv, bgced, lmjhik, rqopns, hdie, mkjlo) {
  for (var tpusr, rmopn, feda = ++bgced, $320_1 = _d_$yz0;;) {
    var qrtop = xtusv['charAt'](feda);switch (qrtop) {case '=':
        if ($320_1 === _dtpq) tpusr = xtusv['slice'](bgced, feda), $320_1 = _drtqops;else {
          if ($320_1 !== _dtrpoqs) throw new Error('attribute equal must after attrName');$320_1 = _drtqops;
        }break;case '\x27':case '\x22':
        if ($320_1 === _drtqops || $320_1 === _dtpq) {
          if ($320_1 === _dtpq && (mkjlo['warning']('attribute value must after "="'), tpusr = xtusv['slice'](bgced, feda)), bgced = feda + 0x1, feda = xtusv['indexOf'](qrtop, bgced), !(feda > 0x0)) throw new Error('attribute value no end \'' + qrtop + '\' match');rmopn = xtusv['slice'](bgced, feda)['replace'](/&#?\w+;/g, hdie), lmjhik['add'](tpusr, rmopn, bgced - 0x1), $320_1 = _dw$yv;
        } else {
          if ($320_1 != _defgdb) throw new Error('attribute value must after "="');rmopn = xtusv['slice'](bgced, feda)['replace'](/&#?\w+;/g, hdie), lmjhik['add'](tpusr, rmopn, bgced), mkjlo['warning']('attribute "' + tpusr + '" missed start quot(' + qrtop + ')!!'), bgced = feda + 0x1, $320_1 = _dw$yv;
        }break;case '/':
        switch ($320_1) {case _d_$yz0:
            lmjhik['setTagName'](xtusv['slice'](bgced, feda));case _dw$yv:case _dtopr:case _dtqpsu:
            $320_1 = _dtqpsu, lmjhik['closed'] = !0x0;case _defgdb:case _dtpq:case _dtrpoqs:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mkjlo['error']('unexpected end of input'), $320_1 == _d_$yz0 && lmjhik['setTagName'](xtusv['slice'](bgced, feda)), feda;case '>':
        switch ($320_1) {case _d_$yz0:
            lmjhik['setTagName'](xtusv['slice'](bgced, feda));case _dw$yv:case _dtopr:case _dtqpsu:
            break;case _defgdb:case _dtpq:
            rmopn = xtusv['slice'](bgced, feda), '/' === rmopn['slice'](-0x1) && (lmjhik['closed'] = !0x0, rmopn = rmopn['slice'](0x0, -0x1));case _dtrpoqs:
            $320_1 === _dtrpoqs && (rmopn = tpusr), $320_1 == _defgdb ? (mkjlo['warning']('attribute "' + rmopn + '" missed quot(")!!'), lmjhik['add'](tpusr, rmopn['replace'](/&#?\w+;/g, hdie), bgced)) : ('http://www.w3.org/1999/xhtml' === rqopns[''] && rmopn['match'](/^(?:disabled|checked|selected)$/i) || mkjlo['warning']('attribute "' + rmopn + '" missed value!! "' + rmopn + '" instead!!'), lmjhik['add'](rmopn, rmopn, bgced));break;case _drtqops:
            throw new Error('attribute value missed!!');}return feda;case '\u0080':
        qrtop = '\x20';default:
        if ('\x20' >= qrtop) switch ($320_1) {case _d_$yz0:
            lmjhik['setTagName'](xtusv['slice'](bgced, feda)), $320_1 = _dtopr;break;case _dtpq:
            tpusr = xtusv['slice'](bgced, feda), $320_1 = _dtrpoqs;break;case _defgdb:
            var rmopn = xtusv['slice'](bgced, feda)['replace'](/&#?\w+;/g, hdie);mkjlo['warning']('attribute "' + rmopn + '" missed quot(")!!'), lmjhik['add'](tpusr, rmopn, bgced);case _dw$yv:
            $320_1 = _dtopr;} else switch ($320_1) {case _dtrpoqs:
            {
              lmjhik['tagName'];
            }'http://www.w3.org/1999/xhtml' === rqopns[''] && tpusr['match'](/^(?:disabled|checked|selected)$/i) || mkjlo['warning']('attribute "' + tpusr + '" missed value!! "' + tpusr + '" instead2!!'), lmjhik['add'](tpusr, tpusr, bgced), bgced = feda, $320_1 = _dtpq;break;case _dw$yv:
            mkjlo['warning']('attribute space is required"' + tpusr + '\x22!!');case _dtopr:
            $320_1 = _dtpq, bgced = feda;break;case _drtqops:
            $320_1 = _defgdb, bgced = feda;break;case _dtqpsu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}feda++;
  }
}function _dhglijk(wyzvx, wvxst, gcfhd) {
  for (var lmijk = wyzvx['tagName'], zwy_x = null, y1z_$ = wyzvx['length']; y1z_$--;) {
    var hidgf = wyzvx[y1z_$],
        uwstrv = hidgf['qName'],
        jmhi = hidgf['value'],
        rpqs = uwstrv['indexOf'](':');if (rpqs > 0x0) var sptqru = hidgf['prefix'] = uwstrv['slice'](0x0, rpqs),
        vsurw = uwstrv['slice'](rpqs + 0x1),
        pokln = 'xmlns' === sptqru && vsurw;else vsurw = uwstrv, sptqru = null, pokln = 'xmlns' === uwstrv && '';hidgf['localName'] = vsurw, pokln !== !0x1 && (null == zwy_x && (zwy_x = {}, _dejgih(gcfhd, gcfhd = {})), gcfhd[pokln] = zwy_x[pokln] = jmhi, hidgf['uri'] = 'http://www.w3.org/2000/xmlns/', wvxst['startPrefixMapping'](pokln, jmhi));
  }for (var y1z_$ = wyzvx['length']; y1z_$--;) {
    hidgf = wyzvx[y1z_$];var sptqru = hidgf['prefix'];sptqru && ('xml' === sptqru && (hidgf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== sptqru && (hidgf['uri'] = gcfhd[sptqru || '']));
  }var rpqs = lmijk['indexOf'](':');rpqs > 0x0 ? (sptqru = wyzvx['prefix'] = lmijk['slice'](0x0, rpqs), vsurw = wyzvx['localName'] = lmijk['slice'](rpqs + 0x1)) : (sptqru = null, vsurw = wyzvx['localName'] = lmijk);var vwzx = wyzvx['uri'] = gcfhd[sptqru || ''];if (wvxst['startElement'](vwzx, vsurw, lmijk, wyzvx), !wyzvx['closed']) return wyzvx['currentNSMap'] = gcfhd, wyzvx['localNSMap'] = zwy_x, !0x0;if (wvxst['endElement'](vwzx, vsurw, lmijk), zwy_x) {
    for (sptqru in zwy_x) wvxst['endPrefixMapping'](sptqru);
  }
}function _dokjmnl(wtrvu, utrqsp, fgied, niklm, sutwvx) {
  if (/^(?:script|textarea)$/i['test'](fgied)) {
    var afbdec = wtrvu['indexOf']('</' + fgied + '>', utrqsp),
        yxz$0 = wtrvu['substring'](utrqsp + 0x1, afbdec);if (/[&<]/['test'](yxz$0)) return (/^script$/i['test'](fgied) ? (sutwvx['characters'](yxz$0, 0x0, yxz$0['length']), afbdec) : (yxz$0 = yxz$0['replace'](/&#?\w+;/g, niklm), sutwvx['characters'](yxz$0, 0x0, yxz$0['length']), afbdec)
    );
  }return utrqsp + 0x1;
}function _dursqv(z$2_, z$21_, hiejg, pomnl) {
  var sutrq = pomnl[hiejg];return null == sutrq && (sutrq = z$2_['lastIndexOf']('</' + hiejg + '>'), z$21_ > sutrq && (sutrq = z$2_['lastIndexOf']('</' + hiejg)), pomnl[hiejg] = sutrq), z$21_ > sutrq;
}function _dejgih(y_$0z1, $0z_y1) {
  for (var dfehg in y_$0z1) $0z_y1[dfehg] = y_$0z1[dfehg];
}function _duzxywv(tswvru, cfabde, lkjim, vyxwzu) {
  var $wz_ = tswvru['charAt'](cfabde + 0x2);switch ($wz_) {case '-':
      if ('-' === tswvru['charAt'](cfabde + 0x3)) {
        var oklnmp = tswvru['indexOf']('-->', cfabde + 0x4);return oklnmp > cfabde ? (lkjim['comment'](tswvru, cfabde + 0x4, oklnmp - cfabde - 0x4), oklnmp + 0x3) : (vyxwzu['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == tswvru['substr'](cfabde + 0x3, 0x6)) {
        var oklnmp = tswvru['indexOf'](']]>', cfabde + 0x9);return lkjim['startCDATA'](), lkjim['characters'](tswvru, cfabde + 0x9, oklnmp - cfabde - 0x9), lkjim['endCDATA'](), oklnmp + 0x3;
      }var hfegji = _decdbaf(tswvru, cfabde),
          vxuzy = hfegji['length'];if (vxuzy > 0x1 && /!doctype/i['test'](hfegji[0x0][0x0])) {
        var pqln = hfegji[0x1][0x0],
            dfi = vxuzy > 0x3 && /^public$/i['test'](hfegji[0x2][0x0]) && hfegji[0x3][0x0],
            sqonp = vxuzy > 0x4 && hfegji[0x4][0x0],
            jhlgik = hfegji[vxuzy - 0x1];return lkjim['startDTD'](pqln, dfi && dfi['replace'](/^(['"])(.*?)\1$/, '$2'), sqonp && sqonp['replace'](/^(['"])(.*?)\1$/, '$2')), lkjim['endDTD'](), jhlgik['index'] + jhlgik[0x0]['length'];
      }}return -0x1;
}function _dvyuw(suvxt, _1230$, utrpsq) {
  var sxutv = suvxt['indexOf']('?>', _1230$);if (sxutv) {
    var qplnm = suvxt['substring'](_1230$, sxutv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qplnm) {
      {
        qplnm[0x0]['length'];
      }return utrpsq['processingInstruction'](qplnm[0x1], qplnm[0x2]), sxutv + 0x2;
    }return -0x1;
  }return -0x1;
}function _dhkgf() {}function _dv$zxw(ikjgh, swtr) {
  return ikjgh['__proto__'] = swtr, ikjgh;
}function _decdbaf(hfe, snpqor) {
  var jihe,
      dgefi = [],
      vqusr = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vqusr['lastIndex'] = snpqor, vqusr['exec'](hfe); jihe = vqusr['exec'](hfe);) if (dgefi['push'](jihe), jihe[0x1]) return dgefi;
}var _dnjlikm = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dkglih = new RegExp('[\\-\\.0-9' + _dnjlikm['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dnklom = new RegExp('^' + _dnjlikm['source'] + _dkglih['source'] + '*(?::' + _dnjlikm['source'] + _dkglih['source'] + '*)?$'),
    _d_$yz0 = 0x0,
    _dtpq = 0x1,
    _dtrpoqs = 0x2,
    _drtqops = 0x3,
    _defgdb = 0x4,
    _dw$yv = 0x5,
    _dtopr = 0x6,
    _dtqpsu = 0x7;_dheifgj['prototype'] = { 'parse': function (ponqrm, spqutr, hgijkf) {
    var xyuw = this['domBuilder'];xyuw['startDocument'](), _dejgih(spqutr, spqutr = {}), _dkjlhm(ponqrm, spqutr, hgijkf, xyuw, this['errorHandler']), xyuw['endDocument']();
  } }, _dhkgf['prototype'] = { 'setTagName': function (x_$ywz) {
    if (!_dnklom['test'](x_$ywz)) throw new Error('invalid tagName:' + x_$ywz);this['tagName'] = x_$ywz;
  }, 'add': function (rosqp, vy$xz, uqvts) {
    if (!_dnklom['test'](rosqp)) throw new Error('invalid attribute:' + rosqp);this[this['length']++] = { 'qName': rosqp, 'value': vy$xz, 'offset': uqvts };
  }, 'length': 0x0, 'getLocalName': function (uxzy) {
    return this[uxzy]['localName'];
  }, 'getLocator': function (oprnqs) {
    return this[oprnqs]['locator'];
  }, 'getQName': function (tuvyx) {
    return this[tuvyx]['qName'];
  }, 'getURI': function (yxvzwu) {
    return this[yxvzwu]['uri'];
  }, 'getValue': function (uxvstw) {
    return this[uxvstw]['value'];
  } }, _dv$zxw({}, _dv$zxw['prototype']) instanceof _dv$zxw || (_dv$zxw = function (yw, gjhfik) {
  function likmhj() {}likmhj['prototype'] = gjhfik, likmhj = new likmhj();for (gjhfik in yw) likmhj[gjhfik] = yw[gjhfik];return likmhj;
}), exports['XMLReader'] = _dheifgj;