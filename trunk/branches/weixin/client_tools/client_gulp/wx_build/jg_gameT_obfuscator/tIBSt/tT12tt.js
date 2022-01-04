var M = wx.$T;
function ti9dp$() {}function tyxeo0q(rbk, jsrb, $9dic, hm6_5w, pezo7) {
  function w6835(_0ey) {
    if (_0ey > 0xffff) {
      _0ey -= 0x10000;var ofzd7 = 0xd800 + (_0ey >> 0xa),
          x_qy0 = 0xdc00 + (0x3ff & _0ey);return String['fromCharCode'](ofzd7, x_qy0);
    }return String['fromCharCode'](_0ey);
  }function zqefo7(h615w) {
    var fzoe7p = h615w['slice'](0x1, -0x1);return fzoe7p in $9dic ? $9dic[fzoe7p] : '#' === fzoe7p['charAt'](0x0) ? w6835(parseInt(fzoe7p['substr'](0x1)['replace']('x', '0x'))) : (pezo7['error']('entity not found:' + h615w), h615w);
  }function ofq7z(xe7) {
    if (xe7 > oezq07) {
      var e7qxo0 = rbk['substring'](oezq07, xe7)['replace'](/&#?\w+;/g, zqefo7);ksbu && g3bjn(oezq07), hm6_5w['characters'](e7qxo0, 0x0, xe7 - oezq07), oezq07 = xe7;
    }
  }function g3bjn(kbag, _hmx0) {
    for (; kbag >= zof7eq && (_hmx0 = pf7$zd['exec'](rbk));) agbkjr = _hmx0['index'], zof7eq = agbkjr + _hmx0[0x0]['length'], ksbu['lineNumber']++;ksbu['columnNumber'] = kbag - agbkjr + 0x1;
  }for (var agbkjr = 0x0, zof7eq = 0x0, pf7$zd = /.*(?:\r\n?|\n)|.*$/g, ksbu = hm6_5w['locator'], nr8gj3 = [{ 'currentNSMap': jsrb }], i9$pdv = {}, oezq07 = 0x0;;) {
    try {
      var c9i4t = rbk['indexOf']('<', oezq07);if (0x0 > c9i4t) {
        if (!rbk['substr'](oezq07)['match'](/^\s*$/)) {
          var vd9p$i = hm6_5w['doc'],
              $z7dp = vd9p$i['createTextNode'](rbk['substr'](oezq07));vd9p$i['appendChild']($z7dp), hm6_5w['currentElement'] = $z7dp;
        }return;
      }switch (c9i4t > oezq07 && ofq7z(c9i4t), rbk['charAt'](c9i4t + 0x1)) {case '/':
          var fvp$z = rbk['indexOf']('>', c9i4t + 0x3),
              n6831g = rbk['substring'](c9i4t + 0x2, fvp$z),
              t42c = nr8gj3['pop']();0x0 > fvp$z ? (n6831g = rbk['substring'](c9i4t + 0x2)['replace'](/[\s<].*/, ''), pezo7['error']('end tag name: ' + n6831g + ' is not complete:' + t42c['tagName']), fvp$z = c9i4t + 0x1 + n6831g['length']) : n6831g['match'](/\s</) && (n6831g = n6831g['replace'](/[\s<].*/, ''), pezo7['error']('end tag name: ' + n6831g + ' maybe not complete'), fvp$z = c9i4t + 0x1 + n6831g['length']);var y5_wmh = t42c['localNSMap'],
              _whmyx = t42c['tagName'] == n6831g,
              y_h5mw = _whmyx || t42c['tagName'] && t42c['tagName']['toLowerCase']() == n6831g['toLowerCase']();if (y_h5mw) {
            if (hm6_5w['endElement'](t42c['uri'], t42c['localName'], n6831g), y5_wmh) {
              for (var h158w in y5_wmh) hm6_5w['endPrefixMapping'](h158w);
            }_whmyx || pezo7['fatalError']('end tag name: ' + n6831g + ' is not match the current start tagName:' + t42c['tagName']);
          } else nr8gj3['push'](t42c);fvp$z++;break;case '?':
          ksbu && g3bjn(c9i4t), fvp$z = ti$dc(rbk, c9i4t, hm6_5w);break;case '!':
          ksbu && g3bjn(c9i4t), fvp$z = tqxyeo0(rbk, c9i4t, hm6_5w, pezo7);break;default:
          ksbu && g3bjn(c9i4t);var gj3r8 = new t$7(),
              vdpf$z = nr8gj3[nr8gj3['length'] - 0x1]['currentNSMap'],
              fvp$z = tgjkabr(rbk, c9i4t, gj3r8, vdpf$z, zqefo7, pezo7),
              bjngra = gj3r8['length'];if (!gj3r8['closed'] && txoq70(rbk, fvp$z, gj3r8['tagName'], i9$pdv) && (gj3r8['closed'] = !0x0, $9dic['nbsp'] || pezo7['warning']('unclosed xml attribute')), ksbu && bjngra) {
            for (var d$iv9p = tcivt(ksbu, {}), hyw5m = 0x0; bjngra > hyw5m; hyw5m++) {
              var v29tic = gj3r8[hyw5m];g3bjn(v29tic['offset']), v29tic['locator'] = tcivt(ksbu, {});
            }hm6_5w['locator'] = d$iv9p, tjrbksa(gj3r8, hm6_5w, vdpf$z) && nr8gj3['push'](gj3r8), hm6_5w['locator'] = ksbu;
          } else tjrbksa(gj3r8, hm6_5w, vdpf$z) && nr8gj3['push'](gj3r8);'http://www.w3.org/1999/xhtml' !== gj3r8['uri'] || gj3r8['closed'] ? fvp$z++ : fvp$z = tzoef(rbk, fvp$z, gj3r8['tagName'], zqefo7, hm6_5w);}
    } catch (c49ti2) {
      pezo7['error']('element parse error: ' + c49ti2), fvp$z = -0x1;
    }fvp$z > oezq07 ? oezq07 = fvp$z : ofq7z(Math['max'](c9i4t, oezq07) + 0x1);
  }
}function tcivt(qo7z, tl2ci4) {
  return tl2ci4['lineNumber'] = qo7z['lineNumber'], tl2ci4['columnNumber'] = qo7z['columnNumber'], tl2ci4;
}function tgjkabr(v9$idp, nrg18, vi$c, h_0ymx, y_q0x, wm5y) {
  for (var ozq7, c$9vti, n31 = ++nrg18, _0qymx = tsbuakj;;) {
    var ctv$9i = v9$idp['charAt'](n31);switch (ctv$9i) {case '=':
        if (_0qymx === tjbrak) ozq7 = v9$idp['slice'](nrg18, n31), _0qymx = t_q0m;else {
          if (_0qymx !== tfz$pvd) throw new Error('attribute equal must after attrName');_0qymx = t_q0m;
        }break;case '\x27':case '\x22':
        if (_0qymx === t_q0m || _0qymx === tjbrak) {
          if (_0qymx === tjbrak && (wm5y['warning']('attribute value must after "="'), ozq7 = v9$idp['slice'](nrg18, n31)), nrg18 = n31 + 0x1, n31 = v9$idp['indexOf'](ctv$9i, nrg18), !(n31 > 0x0)) throw new Error('attribute value no end \'' + ctv$9i + '\' match');c$9vti = v9$idp['slice'](nrg18, n31)['replace'](/&#?\w+;/g, y_q0x), vi$c['add'](ozq7, c$9vti, nrg18 - 0x1), _0qymx = tivc92t;
        } else {
          if (_0qymx != tsabjku) throw new Error('attribute value must after "="');c$9vti = v9$idp['slice'](nrg18, n31)['replace'](/&#?\w+;/g, y_q0x), vi$c['add'](ozq7, c$9vti, nrg18), wm5y['warning']('attribute "' + ozq7 + '" missed start quot(' + ctv$9i + ')!!'), nrg18 = n31 + 0x1, _0qymx = tivc92t;
        }break;case '/':
        switch (_0qymx) {case tsbuakj:
            vi$c['setTagName'](v9$idp['slice'](nrg18, n31));case tivc92t:case t$vt9ci:case tajnrg:
            _0qymx = tajnrg, vi$c['closed'] = !0x0;case tsabjku:case tjbrak:case tfz$pvd:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wm5y['error']('unexpected end of input'), _0qymx == tsbuakj && vi$c['setTagName'](v9$idp['slice'](nrg18, n31)), n31;case '>':
        switch (_0qymx) {case tsbuakj:
            vi$c['setTagName'](v9$idp['slice'](nrg18, n31));case tivc92t:case t$vt9ci:case tajnrg:
            break;case tsabjku:case tjbrak:
            c$9vti = v9$idp['slice'](nrg18, n31), '/' === c$9vti['slice'](-0x1) && (vi$c['closed'] = !0x0, c$9vti = c$9vti['slice'](0x0, -0x1));case tfz$pvd:
            _0qymx === tfz$pvd && (c$9vti = ozq7), _0qymx == tsabjku ? (wm5y['warning']('attribute "' + c$9vti + '" missed quot(")!!'), vi$c['add'](ozq7, c$9vti['replace'](/&#?\w+;/g, y_q0x), nrg18)) : ('http://www.w3.org/1999/xhtml' === h_0ymx[''] && c$9vti['match'](/^(?:disabled|checked|selected)$/i) || wm5y['warning']('attribute "' + c$9vti + '" missed value!! "' + c$9vti + '" instead!!'), vi$c['add'](c$9vti, c$9vti, nrg18));break;case t_q0m:
            throw new Error('attribute value missed!!');}return n31;case '\u0080':
        ctv$9i = '\x20';default:
        if ('\x20' >= ctv$9i) switch (_0qymx) {case tsbuakj:
            vi$c['setTagName'](v9$idp['slice'](nrg18, n31)), _0qymx = t$vt9ci;break;case tjbrak:
            ozq7 = v9$idp['slice'](nrg18, n31), _0qymx = tfz$pvd;break;case tsabjku:
            var c$9vti = v9$idp['slice'](nrg18, n31)['replace'](/&#?\w+;/g, y_q0x);wm5y['warning']('attribute "' + c$9vti + '" missed quot(")!!'), vi$c['add'](ozq7, c$9vti, nrg18);case tivc92t:
            _0qymx = t$vt9ci;} else switch (_0qymx) {case tfz$pvd:
            {
              vi$c['tagName'];
            }'http://www.w3.org/1999/xhtml' === h_0ymx[''] && ozq7['match'](/^(?:disabled|checked|selected)$/i) || wm5y['warning']('attribute "' + ozq7 + '" missed value!! "' + ozq7 + '" instead2!!'), vi$c['add'](ozq7, ozq7, nrg18), nrg18 = n31, _0qymx = tjbrak;break;case tivc92t:
            wm5y['warning']('attribute space is required"' + ozq7 + '\x22!!');case t$vt9ci:
            _0qymx = tjbrak, nrg18 = n31;break;case t_q0m:
            _0qymx = tsabjku, nrg18 = n31;break;case tajnrg:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}n31++;
  }
}function tjrbksa(zqof7e, zqoe7f, kbrsj) {
  for (var xhwm_ = zqof7e['tagName'], mxwy = null, tc9i2v = zqof7e['length']; tc9i2v--;) {
    var t294i = zqof7e[tc9i2v],
        _xq0m = t294i['qName'],
        e0q = t294i['value'],
        sbuk = _xq0m['indexOf'](':');if (sbuk > 0x0) var o0e7x = t294i['prefix'] = _xq0m['slice'](0x0, sbuk),
        qxoey0 = _xq0m['slice'](sbuk + 0x1),
        _q0xm = 'xmlns' === o0e7x && qxoey0;else qxoey0 = _xq0m, o0e7x = null, _q0xm = 'xmlns' === _xq0m && '';t294i['localName'] = qxoey0, _q0xm !== !0x1 && (null == mxwy && (mxwy = {}, t$fzd(kbrsj, kbrsj = {})), kbrsj[_q0xm] = mxwy[_q0xm] = e0q, t294i['uri'] = 'http://www.w3.org/2000/xmlns/', zqoe7f['startPrefixMapping'](_q0xm, e0q));
  }for (var tc9i2v = zqof7e['length']; tc9i2v--;) {
    t294i = zqof7e[tc9i2v];var o0e7x = t294i['prefix'];o0e7x && ('xml' === o0e7x && (t294i['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== o0e7x && (t294i['uri'] = kbrsj[o0e7x || '']));
  }var sbuk = xhwm_['indexOf'](':');sbuk > 0x0 ? (o0e7x = zqof7e['prefix'] = xhwm_['slice'](0x0, sbuk), qxoey0 = zqof7e['localName'] = xhwm_['slice'](sbuk + 0x1)) : (o0e7x = null, qxoey0 = zqof7e['localName'] = xhwm_);var z7e0oq = zqof7e['uri'] = kbrsj[o0e7x || ''];if (zqoe7f['startElement'](z7e0oq, qxoey0, xhwm_, zqof7e), !zqof7e['closed']) return zqof7e['currentNSMap'] = kbrsj, zqof7e['localNSMap'] = mxwy, !0x0;if (zqoe7f['endElement'](z7e0oq, qxoey0, xhwm_), mxwy) {
    for (o0e7x in mxwy) zqoe7f['endPrefixMapping'](o0e7x);
  }
}function tzoef($c9dvi, jkabr, saukbj, cid9, _0mqxy) {
  if (/^(?:script|textarea)$/i['test'](saukbj)) {
    var $zvd = $c9dvi['indexOf']('</' + saukbj + '>', jkabr),
        bgra = $c9dvi['substring'](jkabr + 0x1, $zvd);if (/[&<]/['test'](bgra)) return (/^script$/i['test'](saukbj) ? (_0mqxy['characters'](bgra, 0x0, bgra['length']), $zvd) : (bgra = bgra['replace'](/&#?\w+;/g, cid9), _0mqxy['characters'](bgra, 0x0, bgra['length']), $zvd)
    );
  }return jkabr + 0x1;
}function txoq70(oe7fpz, $zpf, ci9t24, jna) {
  var yx0q = jna[ci9t24];return null == yx0q && (yx0q = oe7fpz['lastIndexOf']('</' + ci9t24 + '>'), $zpf > yx0q && (yx0q = oe7fpz['lastIndexOf']('</' + ci9t24)), jna[ci9t24] = yx0q), $zpf > yx0q;
}function t$fzd(pzeof, _5hywm) {
  for (var o0e7qx in pzeof) _5hywm[o0e7qx] = pzeof[o0e7qx];
}function tqxyeo0(yqxm_0, f7dp, h5wm6_, ym0_qx) {
  var c9dv$ = yqxm_0['charAt'](f7dp + 0x2);switch (c9dv$) {case '-':
      if ('-' === yqxm_0['charAt'](f7dp + 0x3)) {
        var zeo7fp = yqxm_0['indexOf']('-->', f7dp + 0x4);return zeo7fp > f7dp ? (h5wm6_['comment'](yqxm_0, f7dp + 0x4, zeo7fp - f7dp - 0x4), zeo7fp + 0x3) : (ym0_qx['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == yqxm_0['substr'](f7dp + 0x3, 0x6)) {
        var zeo7fp = yqxm_0['indexOf'](']]>', f7dp + 0x9);return h5wm6_['startCDATA'](), h5wm6_['characters'](yqxm_0, f7dp + 0x9, zeo7fp - f7dp - 0x9), h5wm6_['endCDATA'](), zeo7fp + 0x3;
      }var rganb = tv9$pdf(yqxm_0, f7dp),
          dv9fp = rganb['length'];if (dv9fp > 0x1 && /!doctype/i['test'](rganb[0x0][0x0])) {
        var p$9vf = rganb[0x1][0x0],
            i9d$p = dv9fp > 0x3 && /^public$/i['test'](rganb[0x2][0x0]) && rganb[0x3][0x0],
            z0eq7 = dv9fp > 0x4 && rganb[0x4][0x0],
            xe0qyo = rganb[dv9fp - 0x1];return h5wm6_['startDTD'](p$9vf, i9d$p && i9d$p['replace'](/^(['"])(.*?)\1$/, '$2'), z0eq7 && z0eq7['replace'](/^(['"])(.*?)\1$/, '$2')), h5wm6_['endDTD'](), xe0qyo['index'] + xe0qyo[0x0]['length'];
      }}return -0x1;
}function ti$dc(tc4, qmx0y_, ic9tv$) {
  var f7odzp = tc4['indexOf']('?>', qmx0y_);if (f7odzp) {
    var g8n136 = tc4['substring'](qmx0y_, f7odzp)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (g8n136) {
      {
        g8n136[0x0]['length'];
      }return ic9tv$['processingInstruction'](g8n136[0x1], g8n136[0x2]), f7odzp + 0x2;
    }return -0x1;
  }return -0x1;
}function t$7() {}function tgbkjar(abjsuk, pivd$9) {
  return abjsuk['__proto__'] = pivd$9, abjsuk;
}function tv9$pdf(h5_mw6, asjr) {
  var h6m5,
      g3jn8r = [],
      vic92 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (vic92['lastIndex'] = asjr, vic92['exec'](h5_mw6); h6m5 = vic92['exec'](h5_mw6);) if (g3jn8r['push'](h6m5), h6m5[0x1]) return g3jn8r;
}var tjnbgar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    td$vpi9 = new RegExp('[\\-\\.0-9' + tjnbgar['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tezof7p = new RegExp('^' + tjnbgar['source'] + td$vpi9['source'] + '*(?::' + tjnbgar['source'] + td$vpi9['source'] + '*)?$'),
    tsbuakj = 0x0,
    tjbrak = 0x1,
    tfz$pvd = 0x2,
    t_q0m = 0x3,
    tsabjku = 0x4,
    tivc92t = 0x5,
    t$vt9ci = 0x6,
    tajnrg = 0x7;ti9dp$['prototype'] = { 'parse': function (brkag, x_0ymq, gkrb) {
    var h_xm0 = this['domBuilder'];h_xm0['startDocument'](), t$fzd(x_0ymq, x_0ymq = {}), tyxeo0q(brkag, x_0ymq, gkrb, h_xm0, this['errorHandler']), h_xm0['endDocument']();
  } }, t$7['prototype'] = { 'setTagName': function (b3jngr) {
    if (!tezof7p['test'](b3jngr)) throw new Error('invalid tagName:' + b3jngr);this['tagName'] = b3jngr;
  }, 'add': function (qx7eo0, eoq7, dvp) {
    if (!tezof7p['test'](qx7eo0)) throw new Error('invalid attribute:' + qx7eo0);this[this['length']++] = { 'qName': qx7eo0, 'value': eoq7, 'offset': dvp };
  }, 'length': 0x0, 'getLocalName': function (w5hy_) {
    return this[w5hy_]['localName'];
  }, 'getLocator': function (bj3ngr) {
    return this[bj3ngr]['locator'];
  }, 'getQName': function (q_ex0) {
    return this[q_ex0]['qName'];
  }, 'getURI': function (ti94c) {
    return this[ti94c]['uri'];
  }, 'getValue': function (uskaj) {
    return this[uskaj]['value'];
  } }, tgbkjar({}, tgbkjar['prototype']) instanceof tgbkjar || (tgbkjar = function (h6wm_, n3rgj8) {
  function bjskau() {}bjskau['prototype'] = n3rgj8, bjskau = new bjskau();for (n3rgj8 in h6wm_) bjskau[n3rgj8] = h6wm_[n3rgj8];return bjskau;
}), exports['XMLReader'] = ti9dp$;