var _ = wx.y$;
function _djhilk() {}function _d_0yz$x(qvtru, gefi, opqr, y0x$, rv) {
  function kojmln(qprnso) {
    if (qprnso > 0xffff) {
      qprnso -= 0x10000;var usqprt = 0xd800 + (qprnso >> 0xa),
          mqponl = 0xdc00 + (0x3ff & qprnso);return String['fromCharCode'](usqprt, mqponl);
    }return String['fromCharCode'](qprnso);
  }function xtuywv(fgihj) {
    var xuzwv = fgihj['slice'](0x1, -0x1);return xuzwv in opqr ? opqr[xuzwv] : '#' === xuzwv['charAt'](0x0) ? kojmln(parseInt(xuzwv['substr'](0x1)['replace']('x', '0x'))) : (rv['error']('entity not found:' + fgihj), fgihj);
  }function gefjih(pnkoml) {
    if (pnkoml > ijkml) {
      var $xywz = qvtru['substring'](ijkml, pnkoml)['replace'](/&#?\w+;/g, xtuywv);ecfgdh && srvwut(ijkml), y0x$['characters']($xywz, 0x0, pnkoml - ijkml), ijkml = pnkoml;
    }
  }function srvwut(nmjolk, fdcgb) {
    for (; nmjolk >= ebfc && (fdcgb = qptrs['exec'](qvtru));) ijkgfh = fdcgb['index'], ebfc = ijkgfh + fdcgb[0x0]['length'], ecfgdh['lineNumber']++;ecfgdh['columnNumber'] = nmjolk - ijkgfh + 0x1;
  }for (var ijkgfh = 0x0, ebfc = 0x0, qptrs = /.*(?:\r\n?|\n)|.*$/g, ecfgdh = y0x$['locator'], ruvqt = [{ 'currentNSMap': gefi }], ehfcdg = {}, ijkml = 0x0;;) {
    try {
      var gifkhj = qvtru['indexOf']('<', ijkml);if (0x0 > gifkhj) {
        if (!qvtru['substr'](ijkml)['match'](/^\s*$/)) {
          var ifdhge = y0x$['doc'],
              yzxw$v = ifdhge['createTextNode'](qvtru['substr'](ijkml));ifdhge['appendChild'](yzxw$v), y0x$['currentElement'] = yzxw$v;
        }return;
      }switch (gifkhj > ijkml && gefjih(gifkhj), qvtru['charAt'](gifkhj + 0x1)) {case '/':
          var vtsrq = qvtru['indexOf']('>', gifkhj + 0x3),
              stuqvr = qvtru['substring'](gifkhj + 0x2, vtsrq),
              lnomkp = ruvqt['pop']();0x0 > vtsrq ? (stuqvr = qvtru['substring'](gifkhj + 0x2)['replace'](/[\s<].*/, ''), rv['error']('end tag name: ' + stuqvr + ' is not complete:' + lnomkp['tagName']), vtsrq = gifkhj + 0x1 + stuqvr['length']) : stuqvr['match'](/\s</) && (stuqvr = stuqvr['replace'](/[\s<].*/, ''), rv['error']('end tag name: ' + stuqvr + ' maybe not complete'), vtsrq = gifkhj + 0x1 + stuqvr['length']);var $vyzxw = lnomkp['localNSMap'],
              ecgbdf = lnomkp['tagName'] == stuqvr,
              mklnp = ecgbdf || lnomkp['tagName'] && lnomkp['tagName']['toLowerCase']() == stuqvr['toLowerCase']();if (mklnp) {
            if (y0x$['endElement'](lnomkp['uri'], lnomkp['localName'], stuqvr), $vyzxw) {
              for (var xz0 in $vyzxw) y0x$['endPrefixMapping'](xz0);
            }ecgbdf || rv['fatalError']('end tag name: ' + stuqvr + ' is not match the current start tagName:' + lnomkp['tagName']);
          } else ruvqt['push'](lnomkp);vtsrq++;break;case '?':
          ecfgdh && srvwut(gifkhj), vtsrq = _dpsorn(qvtru, gifkhj, y0x$);break;case '!':
          ecfgdh && srvwut(gifkhj), vtsrq = _dx_zw$(qvtru, gifkhj, y0x$, rv);break;default:
          ecfgdh && srvwut(gifkhj);var wstu = new _dz$xy0(),
              yv$z = ruvqt[ruvqt['length'] - 0x1]['currentNSMap'],
              vtsrq = _dojknlm(qvtru, gifkhj, wstu, yv$z, xtuywv, rv),
              nojlkm = wstu['length'];if (!wstu['closed'] && _dlighk(qvtru, vtsrq, wstu['tagName'], ehfcdg) && (wstu['closed'] = !0x0, opqr['nbsp'] || rv['warning']('unclosed xml attribute')), ecfgdh && nojlkm) {
            for (var v$xyz = _dzxv$y(ecfgdh, {}), dhcfeg = 0x0; nojlkm > dhcfeg; dhcfeg++) {
              var ehigdf = wstu[dhcfeg];srvwut(ehigdf['offset']), ehigdf['locator'] = _dzxv$y(ecfgdh, {});
            }y0x$['locator'] = v$xyz, _dwvxst(wstu, y0x$, yv$z) && ruvqt['push'](wstu), y0x$['locator'] = ecfgdh;
          } else _dwvxst(wstu, y0x$, yv$z) && ruvqt['push'](wstu);'http://www.w3.org/1999/xhtml' !== wstu['uri'] || wstu['closed'] ? vtsrq++ : vtsrq = _dacbdef(qvtru, vtsrq, wstu['tagName'], xtuywv, y0x$);}
    } catch (kolmn) {
      rv['error']('element parse error: ' + kolmn), vtsrq = -0x1;
    }vtsrq > ijkml ? ijkml = vtsrq : gefjih(Math['max'](gifkhj, ijkml) + 0x1);
  }
}function _dzxv$y(fgkhi, kfhgj) {
  return kfhgj['lineNumber'] = fgkhi['lineNumber'], kfhgj['columnNumber'] = fgkhi['columnNumber'], kfhgj;
}function _dojknlm($xz_0y, usqpr, lkmjo, rupqts, iklm, fdcabe) {
  for (var limkjh, gcdebf, ihgef = ++usqpr, jlmkih = _digfhde;;) {
    var qtosp = $xz_0y['charAt'](ihgef);switch (qtosp) {case '=':
        if (jlmkih === _d$z102) limkjh = $xz_0y['slice'](usqpr, ihgef), jlmkih = _dvwzxuy;else {
          if (jlmkih !== _dfcdhe) throw new Error('attribute equal must after attrName');jlmkih = _dvwzxuy;
        }break;case '\x27':case '\x22':
        if (jlmkih === _dvwzxuy || jlmkih === _d$z102) {
          if (jlmkih === _d$z102 && (fdcabe['warning']('attribute value must after "="'), limkjh = $xz_0y['slice'](usqpr, ihgef)), usqpr = ihgef + 0x1, ihgef = $xz_0y['indexOf'](qtosp, usqpr), !(ihgef > 0x0)) throw new Error('attribute value no end \'' + qtosp + '\' match');gcdebf = $xz_0y['slice'](usqpr, ihgef)['replace'](/&#?\w+;/g, iklm), lkmjo['add'](limkjh, gcdebf, usqpr - 0x1), jlmkih = _dihgjfe;
        } else {
          if (jlmkih != _dgech) throw new Error('attribute value must after "="');gcdebf = $xz_0y['slice'](usqpr, ihgef)['replace'](/&#?\w+;/g, iklm), lkmjo['add'](limkjh, gcdebf, usqpr), fdcabe['warning']('attribute "' + limkjh + '" missed start quot(' + qtosp + ')!!'), usqpr = ihgef + 0x1, jlmkih = _dihgjfe;
        }break;case '/':
        switch (jlmkih) {case _digfhde:
            lkmjo['setTagName']($xz_0y['slice'](usqpr, ihgef));case _dihgjfe:case _dvxzuyw:case _dqrosnp:
            jlmkih = _dqrosnp, lkmjo['closed'] = !0x0;case _dgech:case _d$z102:case _dfcdhe:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fdcabe['error']('unexpected end of input'), jlmkih == _digfhde && lkmjo['setTagName']($xz_0y['slice'](usqpr, ihgef)), ihgef;case '>':
        switch (jlmkih) {case _digfhde:
            lkmjo['setTagName']($xz_0y['slice'](usqpr, ihgef));case _dihgjfe:case _dvxzuyw:case _dqrosnp:
            break;case _dgech:case _d$z102:
            gcdebf = $xz_0y['slice'](usqpr, ihgef), '/' === gcdebf['slice'](-0x1) && (lkmjo['closed'] = !0x0, gcdebf = gcdebf['slice'](0x0, -0x1));case _dfcdhe:
            jlmkih === _dfcdhe && (gcdebf = limkjh), jlmkih == _dgech ? (fdcabe['warning']('attribute "' + gcdebf + '" missed quot(")!!'), lkmjo['add'](limkjh, gcdebf['replace'](/&#?\w+;/g, iklm), usqpr)) : ('http://www.w3.org/1999/xhtml' === rupqts[''] && gcdebf['match'](/^(?:disabled|checked|selected)$/i) || fdcabe['warning']('attribute "' + gcdebf + '" missed value!! "' + gcdebf + '" instead!!'), lkmjo['add'](gcdebf, gcdebf, usqpr));break;case _dvwzxuy:
            throw new Error('attribute value missed!!');}return ihgef;case '\u0080':
        qtosp = '\x20';default:
        if ('\x20' >= qtosp) switch (jlmkih) {case _digfhde:
            lkmjo['setTagName']($xz_0y['slice'](usqpr, ihgef)), jlmkih = _dvxzuyw;break;case _d$z102:
            limkjh = $xz_0y['slice'](usqpr, ihgef), jlmkih = _dfcdhe;break;case _dgech:
            var gcdebf = $xz_0y['slice'](usqpr, ihgef)['replace'](/&#?\w+;/g, iklm);fdcabe['warning']('attribute "' + gcdebf + '" missed quot(")!!'), lkmjo['add'](limkjh, gcdebf, usqpr);case _dihgjfe:
            jlmkih = _dvxzuyw;} else switch (jlmkih) {case _dfcdhe:
            {
              lkmjo['tagName'];
            }'http://www.w3.org/1999/xhtml' === rupqts[''] && limkjh['match'](/^(?:disabled|checked|selected)$/i) || fdcabe['warning']('attribute "' + limkjh + '" missed value!! "' + limkjh + '" instead2!!'), lkmjo['add'](limkjh, limkjh, usqpr), usqpr = ihgef, jlmkih = _d$z102;break;case _dihgjfe:
            fdcabe['warning']('attribute space is required"' + limkjh + '\x22!!');case _dvxzuyw:
            jlmkih = _d$z102, usqpr = ihgef;break;case _dvwzxuy:
            jlmkih = _dgech, usqpr = ihgef;break;case _dqrosnp:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ihgef++;
  }
}function _dwvxst(rvqus, hfeji, $ywv) {
  for (var bdcg = rvqus['tagName'], spnorq = null, zxuy = rvqus['length']; zxuy--;) {
    var kihjlg = rvqus[zxuy],
        jgefhi = kihjlg['qName'],
        vsruqt = kihjlg['value'],
        _310$2 = jgefhi['indexOf'](':');if (_310$2 > 0x0) var hkfig = kihjlg['prefix'] = jgefhi['slice'](0x0, _310$2),
        rsnoqp = jgefhi['slice'](_310$2 + 0x1),
        mjnlik = 'xmlns' === hkfig && rsnoqp;else rsnoqp = jgefhi, hkfig = null, mjnlik = 'xmlns' === jgefhi && '';kihjlg['localName'] = rsnoqp, mjnlik !== !0x1 && (null == spnorq && (spnorq = {}, _dzyxu($ywv, $ywv = {})), $ywv[mjnlik] = spnorq[mjnlik] = vsruqt, kihjlg['uri'] = 'http://www.w3.org/2000/xmlns/', hfeji['startPrefixMapping'](mjnlik, vsruqt));
  }for (var zxuy = rvqus['length']; zxuy--;) {
    kihjlg = rvqus[zxuy];var hkfig = kihjlg['prefix'];hkfig && ('xml' === hkfig && (kihjlg['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hkfig && (kihjlg['uri'] = $ywv[hkfig || '']));
  }var _310$2 = bdcg['indexOf'](':');_310$2 > 0x0 ? (hkfig = rvqus['prefix'] = bdcg['slice'](0x0, _310$2), rsnoqp = rvqus['localName'] = bdcg['slice'](_310$2 + 0x1)) : (hkfig = null, rsnoqp = rvqus['localName'] = bdcg);var rvstuq = rvqus['uri'] = $ywv[hkfig || ''];if (hfeji['startElement'](rvstuq, rsnoqp, bdcg, rvqus), !rvqus['closed']) return rvqus['currentNSMap'] = $ywv, rvqus['localNSMap'] = spnorq, !0x0;if (hfeji['endElement'](rvstuq, rsnoqp, bdcg), spnorq) {
    for (hkfig in spnorq) hfeji['endPrefixMapping'](hkfig);
  }
}function _dacbdef(ljmkh, svtx, dfhie, edbcg, rvtqs) {
  if (/^(?:script|textarea)$/i['test'](dfhie)) {
    var lkhig = ljmkh['indexOf']('</' + dfhie + '>', svtx),
        nijlk = ljmkh['substring'](svtx + 0x1, lkhig);if (/[&<]/['test'](nijlk)) return (/^script$/i['test'](dfhie) ? (rvtqs['characters'](nijlk, 0x0, nijlk['length']), lkhig) : (nijlk = nijlk['replace'](/&#?\w+;/g, edbcg), rvtqs['characters'](nijlk, 0x0, nijlk['length']), lkhig)
    );
  }return svtx + 0x1;
}function _dlighk(gebfcd, tpsqr, kmjol, ots) {
  var hdegcf = ots[kmjol];return null == hdegcf && (hdegcf = gebfcd['lastIndexOf']('</' + kmjol + '>'), tpsqr > hdegcf && (hdegcf = gebfcd['lastIndexOf']('</' + kmjol)), ots[kmjol] = hdegcf), tpsqr > hdegcf;
}function _dzyxu(mkjn, x0yz) {
  for (var fdcaeb in mkjn) x0yz[fdcaeb] = mkjn[fdcaeb];
}function _dx_zw$(jihkg, nmloj, fjihg, _$0yz) {
  var gfhced = jihkg['charAt'](nmloj + 0x2);switch (gfhced) {case '-':
      if ('-' === jihkg['charAt'](nmloj + 0x3)) {
        var kinmj = jihkg['indexOf']('-->', nmloj + 0x4);return kinmj > nmloj ? (fjihg['comment'](jihkg, nmloj + 0x4, kinmj - nmloj - 0x4), kinmj + 0x3) : (_$0yz['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jihkg['substr'](nmloj + 0x3, 0x6)) {
        var kinmj = jihkg['indexOf'](']]>', nmloj + 0x9);return fjihg['startCDATA'](), fjihg['characters'](jihkg, nmloj + 0x9, kinmj - nmloj - 0x9), fjihg['endCDATA'](), kinmj + 0x3;
      }var ijfkg = _dtuqsrp(jihkg, nmloj),
          rqos = ijfkg['length'];if (rqos > 0x1 && /!doctype/i['test'](ijfkg[0x0][0x0])) {
        var ijknm = ijfkg[0x1][0x0],
            gcbfde = rqos > 0x3 && /^public$/i['test'](ijfkg[0x2][0x0]) && ijfkg[0x3][0x0],
            nkjlmi = rqos > 0x4 && ijfkg[0x4][0x0],
            hfjkg = ijfkg[rqos - 0x1];return fjihg['startDTD'](ijknm, gcbfde && gcbfde['replace'](/^(['"])(.*?)\1$/, '$2'), nkjlmi && nkjlmi['replace'](/^(['"])(.*?)\1$/, '$2')), fjihg['endDTD'](), hfjkg['index'] + hfjkg[0x0]['length'];
      }}return -0x1;
}function _dpsorn(uxsvwt, nopqsr, iefdgh) {
  var jkihgf = uxsvwt['indexOf']('?>', nopqsr);if (jkihgf) {
    var soptq = uxsvwt['substring'](nopqsr, jkihgf)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (soptq) {
      {
        soptq[0x0]['length'];
      }return iefdgh['processingInstruction'](soptq[0x1], soptq[0x2]), jkihgf + 0x2;
    }return -0x1;
  }return -0x1;
}function _dz$xy0() {}function _durtpsq(qrmpon, svxtu) {
  return qrmpon['__proto__'] = svxtu, qrmpon;
}function _dtuqsrp(xvwust, gehi) {
  var nmqolp,
      sprnqo = [],
      yxvwz$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (yxvwz$['lastIndex'] = gehi, yxvwz$['exec'](xvwust); nmqolp = yxvwz$['exec'](xvwust);) if (sprnqo['push'](nmqolp), nmqolp[0x1]) return sprnqo;
}var _dfgj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dvxuzyw = new RegExp('[\\-\\.0-9' + _dfgj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _d$0132 = new RegExp('^' + _dfgj['source'] + _dvxuzyw['source'] + '*(?::' + _dfgj['source'] + _dvxuzyw['source'] + '*)?$'),
    _digfhde = 0x0,
    _d$z102 = 0x1,
    _dfcdhe = 0x2,
    _dvwzxuy = 0x3,
    _dgech = 0x4,
    _dihgjfe = 0x5,
    _dvxzuyw = 0x6,
    _dqrosnp = 0x7;_djhilk['prototype'] = { 'parse': function (ywzv$x, fgheji, efacd) {
    var cedfh = this['domBuilder'];cedfh['startDocument'](), _dzyxu(fgheji, fgheji = {}), _d_0yz$x(ywzv$x, fgheji, efacd, cedfh, this['errorHandler']), cedfh['endDocument']();
  } }, _dz$xy0['prototype'] = { 'setTagName': function (jighk) {
    if (!_d$0132['test'](jighk)) throw new Error('invalid tagName:' + jighk);this['tagName'] = jighk;
  }, 'add': function (iehd, dgfei, $_0xz) {
    if (!_d$0132['test'](iehd)) throw new Error('invalid attribute:' + iehd);this[this['length']++] = { 'qName': iehd, 'value': dgfei, 'offset': $_0xz };
  }, 'length': 0x0, 'getLocalName': function (rtosqp) {
    return this[rtosqp]['localName'];
  }, 'getLocator': function (xuvwst) {
    return this[xuvwst]['locator'];
  }, 'getQName': function (ghfjei) {
    return this[ghfjei]['qName'];
  }, 'getURI': function (efdi) {
    return this[efdi]['uri'];
  }, 'getValue': function ($210_) {
    return this[$210_]['value'];
  } }, _durtpsq({}, _durtpsq['prototype']) instanceof _durtpsq || (_durtpsq = function (gik, fcegdh) {
  function wsuxv() {}wsuxv['prototype'] = fcegdh, wsuxv = new wsuxv();for (fcegdh in gik) wsuxv[fcegdh] = gik[fcegdh];return wsuxv;
}), exports['XMLReader'] = _djhilk;