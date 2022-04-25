var g = wx.u$;
function _dewn_8k() {}function _dqtfrd6(cgixp4, d56, xi4gy, nekj_w, uq529v) {
  function d36tfr(_s8hwe) {
    if (_s8hwe > 0xffff) {
      _s8hwe -= 0x10000;var q5u6 = 0xd800 + (_s8hwe >> 0xa),
          $v7 = 0xdc00 + (0x3ff & _s8hwe);return String['fromCharCode'](q5u6, $v7);
    }return String['fromCharCode'](_s8hwe);
  }function u65fqd(xgiy) {
    var f1r3t = xgiy['slice'](0x1, -0x1);return f1r3t in xi4gy ? xi4gy[f1r3t] : '#' === f1r3t['charAt'](0x0) ? d36tfr(parseInt(f1r3t['substr'](0x1)['replace']('x', '0x'))) : (uq529v['error']('entity not found:' + xgiy), xgiy);
  }function q52u(tfdq6r) {
    if (tfdq6r > ub5v9) {
      var v9u5q = cgixp4['substring'](ub5v9, tfdq6r)['replace'](/&#?\w+;/g, u65fqd);_shew && zmloc7(ub5v9), nekj_w['characters'](v9u5q, 0x0, tfdq6r - ub5v9), ub5v9 = tfdq6r;
    }
  }function zmloc7($792bl, qfrd65) {
    for (; $792bl >= x4igpc && (qfrd65 = frqt6['exec'](cgixp4));) u9b$2v = qfrd65['index'], x4igpc = u9b$2v + qfrd65[0x0]['length'], _shew['lineNumber']++;_shew['columnNumber'] = $792bl - u9b$2v + 0x1;
  }for (var u9b$2v = 0x0, x4igpc = 0x0, frqt6 = /.*(?:\r\n?|\n)|.*$/g, _shew = nekj_w['locator'], u9q2 = [{ 'currentNSMap': d56 }], z9lb7$ = {}, ub5v9 = 0x0;;) {
    try {
      var n4gjyi = cgixp4['indexOf']('<', ub5v9);if (0x0 > n4gjyi) {
        if (!cgixp4['substr'](ub5v9)['match'](/^\s*$/)) {
          var jnke = nekj_w['doc'],
              kwh_8e = jnke['createTextNode'](cgixp4['substr'](ub5v9));jnke['appendChild'](kwh_8e), nekj_w['currentElement'] = kwh_8e;
        }return;
      }switch (n4gjyi > ub5v9 && q52u(n4gjyi), cgixp4['charAt'](n4gjyi + 0x1)) {case '/':
          var giy4jx = cgixp4['indexOf']('>', n4gjyi + 0x3),
              jxiy = cgixp4['substring'](n4gjyi + 0x2, giy4jx),
              eh_w = u9q2['pop']();0x0 > giy4jx ? (jxiy = cgixp4['substring'](n4gjyi + 0x2)['replace'](/[\s<].*/, ''), uq529v['error']('end tag name: ' + jxiy + ' is not complete:' + eh_w['tagName']), giy4jx = n4gjyi + 0x1 + jxiy['length']) : jxiy['match'](/\s</) && (jxiy = jxiy['replace'](/[\s<].*/, ''), uq529v['error']('end tag name: ' + jxiy + ' maybe not complete'), giy4jx = n4gjyi + 0x1 + jxiy['length']);var ub$29v = eh_w['localNSMap'],
              p4cmxi = eh_w['tagName'] == jxiy,
              lzomcp = p4cmxi || eh_w['tagName'] && eh_w['tagName']['toLowerCase']() == jxiy['toLowerCase']();if (lzomcp) {
            if (nekj_w['endElement'](eh_w['uri'], eh_w['localName'], jxiy), ub$29v) {
              for (var ejn_ in ub$29v) nekj_w['endPrefixMapping'](ejn_);
            }p4cmxi || uq529v['fatalError']('end tag name: ' + jxiy + ' is not match the current start tagName:' + eh_w['tagName']);
          } else u9q2['push'](eh_w);giy4jx++;break;case '?':
          _shew && zmloc7(n4gjyi), giy4jx = _dc4gpix(cgixp4, n4gjyi, nekj_w);break;case '!':
          _shew && zmloc7(n4gjyi), giy4jx = _da8sew(cgixp4, n4gjyi, nekj_w, uq529v);break;default:
          _shew && zmloc7(n4gjyi);var tdfr = new _df6q5r(),
              ewa8 = u9q2[u9q2['length'] - 0x1]['currentNSMap'],
              giy4jx = _duv952b(cgixp4, n4gjyi, tdfr, ewa8, u65fqd, uq529v),
              uvb$2 = tdfr['length'];if (!tdfr['closed'] && _dl2$7(cgixp4, giy4jx, tdfr['tagName'], z9lb7$) && (tdfr['closed'] = !0x0, xi4gy['nbsp'] || uq529v['warning']('unclosed xml attribute')), _shew && uvb$2) {
            for (var uv2dq5 = _dt31fr6(_shew, {}), yw_nj = 0x0; uvb$2 > yw_nj; yw_nj++) {
              var o4xcp = tdfr[yw_nj];zmloc7(o4xcp['offset']), o4xcp['locator'] = _dt31fr6(_shew, {});
            }nekj_w['locator'] = uv2dq5, _dvuqd(tdfr, nekj_w, ewa8) && u9q2['push'](tdfr), nekj_w['locator'] = _shew;
          } else _dvuqd(tdfr, nekj_w, ewa8) && u9q2['push'](tdfr);'http://www.w3.org/1999/xhtml' !== tdfr['uri'] || tdfr['closed'] ? giy4jx++ : giy4jx = _dzb9l$7(cgixp4, giy4jx, tdfr['tagName'], u65fqd, nekj_w);}
    } catch (seahw8) {
      uq529v['error']('element parse error: ' + seahw8), giy4jx = -0x1;
    }giy4jx > ub5v9 ? ub5v9 = giy4jx : q52u(Math['max'](n4gjyi, ub5v9) + 0x1);
  }
}function _dt31fr6(haswe8, qdtr6) {
  return qdtr6['lineNumber'] = haswe8['lineNumber'], qdtr6['columnNumber'] = haswe8['columnNumber'], qdtr6;
}function _duv952b(mo4xcp, _wje, f1r3t6, fq65rd, xzpom, nk_yj) {
  for (var mixc, b$7zlo, ynjg = ++_wje, zxpm = _dq5uvfd;;) {
    var h8ase = mo4xcp['charAt'](ynjg);switch (h8ase) {case '=':
        if (zxpm === _dqd65rf) mixc = mo4xcp['slice'](_wje, ynjg), zxpm = _du52dv;else {
          if (zxpm !== _dm$ol) throw new Error('attribute equal must after attrName');zxpm = _du52dv;
        }break;case '\x27':case '\x22':
        if (zxpm === _du52dv || zxpm === _dqd65rf) {
          if (zxpm === _dqd65rf && (nk_yj['warning']('attribute value must after "="'), mixc = mo4xcp['slice'](_wje, ynjg)), _wje = ynjg + 0x1, ynjg = mo4xcp['indexOf'](h8ase, _wje), !(ynjg > 0x0)) throw new Error('attribute value no end \'' + h8ase + '\' match');b$7zlo = mo4xcp['slice'](_wje, ynjg)['replace'](/&#?\w+;/g, xzpom), f1r3t6['add'](mixc, b$7zlo, _wje - 0x1), zxpm = _dniyg4j;
        } else {
          if (zxpm != _dqrd6f5) throw new Error('attribute value must after "="');b$7zlo = mo4xcp['slice'](_wje, ynjg)['replace'](/&#?\w+;/g, xzpom), f1r3t6['add'](mixc, b$7zlo, _wje), nk_yj['warning']('attribute "' + mixc + '" missed start quot(' + h8ase + ')!!'), _wje = ynjg + 0x1, zxpm = _dniyg4j;
        }break;case '/':
        switch (zxpm) {case _dq5uvfd:
            f1r3t6['setTagName'](mo4xcp['slice'](_wje, ynjg));case _dniyg4j:case _dijg4x:case _dr3dt6f:
            zxpm = _dr3dt6f, f1r3t6['closed'] = !0x0;case _dqrd6f5:case _dqd65rf:case _dm$ol:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return nk_yj['error']('unexpected end of input'), zxpm == _dq5uvfd && f1r3t6['setTagName'](mo4xcp['slice'](_wje, ynjg)), ynjg;case '>':
        switch (zxpm) {case _dq5uvfd:
            f1r3t6['setTagName'](mo4xcp['slice'](_wje, ynjg));case _dniyg4j:case _dijg4x:case _dr3dt6f:
            break;case _dqrd6f5:case _dqd65rf:
            b$7zlo = mo4xcp['slice'](_wje, ynjg), '/' === b$7zlo['slice'](-0x1) && (f1r3t6['closed'] = !0x0, b$7zlo = b$7zlo['slice'](0x0, -0x1));case _dm$ol:
            zxpm === _dm$ol && (b$7zlo = mixc), zxpm == _dqrd6f5 ? (nk_yj['warning']('attribute "' + b$7zlo + '" missed quot(")!!'), f1r3t6['add'](mixc, b$7zlo['replace'](/&#?\w+;/g, xzpom), _wje)) : ('http://www.w3.org/1999/xhtml' === fq65rd[''] && b$7zlo['match'](/^(?:disabled|checked|selected)$/i) || nk_yj['warning']('attribute "' + b$7zlo + '" missed value!! "' + b$7zlo + '" instead!!'), f1r3t6['add'](b$7zlo, b$7zlo, _wje));break;case _du52dv:
            throw new Error('attribute value missed!!');}return ynjg;case '\u0080':
        h8ase = '\x20';default:
        if ('\x20' >= h8ase) switch (zxpm) {case _dq5uvfd:
            f1r3t6['setTagName'](mo4xcp['slice'](_wje, ynjg)), zxpm = _dijg4x;break;case _dqd65rf:
            mixc = mo4xcp['slice'](_wje, ynjg), zxpm = _dm$ol;break;case _dqrd6f5:
            var b$7zlo = mo4xcp['slice'](_wje, ynjg)['replace'](/&#?\w+;/g, xzpom);nk_yj['warning']('attribute "' + b$7zlo + '" missed quot(")!!'), f1r3t6['add'](mixc, b$7zlo, _wje);case _dniyg4j:
            zxpm = _dijg4x;} else switch (zxpm) {case _dm$ol:
            {
              f1r3t6['tagName'];
            }'http://www.w3.org/1999/xhtml' === fq65rd[''] && mixc['match'](/^(?:disabled|checked|selected)$/i) || nk_yj['warning']('attribute "' + mixc + '" missed value!! "' + mixc + '" instead2!!'), f1r3t6['add'](mixc, mixc, _wje), _wje = ynjg, zxpm = _dqd65rf;break;case _dniyg4j:
            nk_yj['warning']('attribute space is required"' + mixc + '\x22!!');case _dijg4x:
            zxpm = _dqd65rf, _wje = ynjg;break;case _du52dv:
            zxpm = _dqrd6f5, _wje = ynjg;break;case _dr3dt6f:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ynjg++;
  }
}function _dvuqd(gxyi4p, jnyg4, jkne_) {
  for (var uvb29 = gxyi4p['tagName'], mzlo7 = null, je_wk = gxyi4p['length']; je_wk--;) {
    var whesa8 = gxyi4p[je_wk],
        zmoclp = whesa8['qName'],
        fr16 = whesa8['value'],
        $7bz = zmoclp['indexOf'](':');if ($7bz > 0x0) var pcxi4g = whesa8['prefix'] = zmoclp['slice'](0x0, $7bz),
        kiyg = zmoclp['slice']($7bz + 0x1),
        jkwn_e = 'xmlns' === pcxi4g && kiyg;else kiyg = zmoclp, pcxi4g = null, jkwn_e = 'xmlns' === zmoclp && '';whesa8['localName'] = kiyg, jkwn_e !== !0x1 && (null == mzlo7 && (mzlo7 = {}, _dci4mxp(jkne_, jkne_ = {})), jkne_[jkwn_e] = mzlo7[jkwn_e] = fr16, whesa8['uri'] = 'http://www.w3.org/2000/xmlns/', jnyg4['startPrefixMapping'](jkwn_e, fr16));
  }for (var je_wk = gxyi4p['length']; je_wk--;) {
    whesa8 = gxyi4p[je_wk];var pcxi4g = whesa8['prefix'];pcxi4g && ('xml' === pcxi4g && (whesa8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pcxi4g && (whesa8['uri'] = jkne_[pcxi4g || '']));
  }var $7bz = uvb29['indexOf'](':');$7bz > 0x0 ? (pcxi4g = gxyi4p['prefix'] = uvb29['slice'](0x0, $7bz), kiyg = gxyi4p['localName'] = uvb29['slice']($7bz + 0x1)) : (pcxi4g = null, kiyg = gxyi4p['localName'] = uvb29);var ft3d6r = gxyi4p['uri'] = jkne_[pcxi4g || ''];if (jnyg4['startElement'](ft3d6r, kiyg, uvb29, gxyi4p), !gxyi4p['closed']) return gxyi4p['currentNSMap'] = jkne_, gxyi4p['localNSMap'] = mzlo7, !0x0;if (jnyg4['endElement'](ft3d6r, kiyg, uvb29), mzlo7) {
    for (pcxi4g in mzlo7) jnyg4['endPrefixMapping'](pcxi4g);
  }
}function _dzb9l$7(gjn4, mlo, gknij, q9uv52, qd5u2) {
  if (/^(?:script|textarea)$/i['test'](gknij)) {
    var n_jgk = gjn4['indexOf']('</' + gknij + '>', mlo),
        k_wnej = gjn4['substring'](mlo + 0x1, n_jgk);if (/[&<]/['test'](k_wnej)) return (/^script$/i['test'](gknij) ? (qd5u2['characters'](k_wnej, 0x0, k_wnej['length']), n_jgk) : (k_wnej = k_wnej['replace'](/&#?\w+;/g, q9uv52), qd5u2['characters'](k_wnej, 0x0, k_wnej['length']), n_jgk)
    );
  }return mlo + 0x1;
}function _dl2$7(oxp4c, e_8s, yp4ixg, ozl7b) {
  var eh8w_ = ozl7b[yp4ixg];return null == eh8w_ && (eh8w_ = oxp4c['lastIndexOf']('</' + yp4ixg + '>'), e_8s > eh8w_ && (eh8w_ = oxp4c['lastIndexOf']('</' + yp4ixg)), ozl7b[yp4ixg] = eh8w_), e_8s > eh8w_;
}function _dci4mxp(dvu2q5, k8_nwe) {
  for (var d5uf in dvu2q5) k8_nwe[d5uf] = dvu2q5[d5uf];
}function _da8sew(czm, kw_8e, _ngy, ix4c) {
  var $72vb9 = czm['charAt'](kw_8e + 0x2);switch ($72vb9) {case '-':
      if ('-' === czm['charAt'](kw_8e + 0x3)) {
        var cxpi4m = czm['indexOf']('-->', kw_8e + 0x4);return cxpi4m > kw_8e ? (_ngy['comment'](czm, kw_8e + 0x4, cxpi4m - kw_8e - 0x4), cxpi4m + 0x3) : (ix4c['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == czm['substr'](kw_8e + 0x3, 0x6)) {
        var cxpi4m = czm['indexOf'](']]>', kw_8e + 0x9);return _ngy['startCDATA'](), _ngy['characters'](czm, kw_8e + 0x9, cxpi4m - kw_8e - 0x9), _ngy['endCDATA'](), cxpi4m + 0x3;
      }var yn4gj = _dcximp4(czm, kw_8e),
          khew8_ = yn4gj['length'];if (khew8_ > 0x1 && /!doctype/i['test'](yn4gj[0x0][0x0])) {
        var kne_jw = yn4gj[0x1][0x0],
            t6fr = khew8_ > 0x3 && /^public$/i['test'](yn4gj[0x2][0x0]) && yn4gj[0x3][0x0],
            hsae0 = khew8_ > 0x4 && yn4gj[0x4][0x0],
            l7b2 = yn4gj[khew8_ - 0x1];return _ngy['startDTD'](kne_jw, t6fr && t6fr['replace'](/^(['"])(.*?)\1$/, '$2'), hsae0 && hsae0['replace'](/^(['"])(.*?)\1$/, '$2')), _ngy['endDTD'](), l7b2['index'] + l7b2[0x0]['length'];
      }}return -0x1;
}function _dc4gpix(nyji4, cmpo4, cxgp4i) {
  var omzpcl = nyji4['indexOf']('?>', cmpo4);if (omzpcl) {
    var jw_enk = nyji4['substring'](cmpo4, omzpcl)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jw_enk) {
      {
        jw_enk[0x0]['length'];
      }return cxgp4i['processingInstruction'](jw_enk[0x1], jw_enk[0x2]), omzpcl + 0x2;
    }return -0x1;
  }return -0x1;
}function _df6q5r() {}function _d$9v2bu(ewh_8s, c4opm) {
  return ewh_8s['__proto__'] = c4opm, ewh_8s;
}function _dcximp4(e08sha, $7mol) {
  var mo7lz$,
      qduf5v = [],
      njwyk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (njwyk['lastIndex'] = $7mol, njwyk['exec'](e08sha); mo7lz$ = njwyk['exec'](e08sha);) if (qduf5v['push'](mo7lz$), mo7lz$[0x1]) return qduf5v;
}var _dmzo = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dy_gk = new RegExp('[\\-\\.0-9' + _dmzo['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _d_jknyg = new RegExp('^' + _dmzo['source'] + _dy_gk['source'] + '*(?::' + _dmzo['source'] + _dy_gk['source'] + '*)?$'),
    _dq5uvfd = 0x0,
    _dqd65rf = 0x1,
    _dm$ol = 0x2,
    _du52dv = 0x3,
    _dqrd6f5 = 0x4,
    _dniyg4j = 0x5,
    _dijg4x = 0x6,
    _dr3dt6f = 0x7;_dewn_8k['prototype'] = { 'parse': function (uvq5f, wyk_n, xpig4y) {
    var jwnky = this['domBuilder'];jwnky['startDocument'](), _dci4mxp(wyk_n, wyk_n = {}), _dqtfrd6(uvq5f, wyk_n, xpig4y, jwnky, this['errorHandler']), jwnky['endDocument']();
  } }, _df6q5r['prototype'] = { 'setTagName': function (pmzolc) {
    if (!_d_jknyg['test'](pmzolc)) throw new Error('invalid tagName:' + pmzolc);this['tagName'] = pmzolc;
  }, 'add': function (gc4px, whse, m4opc) {
    if (!_d_jknyg['test'](gc4px)) throw new Error('invalid attribute:' + gc4px);this[this['length']++] = { 'qName': gc4px, 'value': whse, 'offset': m4opc };
  }, 'length': 0x0, 'getLocalName': function (e_knjw) {
    return this[e_knjw]['localName'];
  }, 'getLocator': function (b$7v29) {
    return this[b$7v29]['locator'];
  }, 'getQName': function (v5qu) {
    return this[v5qu]['qName'];
  }, 'getURI': function (bl$z9) {
    return this[bl$z9]['uri'];
  }, 'getValue': function (uqd52v) {
    return this[uqd52v]['value'];
  } }, _d$9v2bu({}, _d$9v2bu['prototype']) instanceof _d$9v2bu || (_d$9v2bu = function (b$9l72, gjy4x) {
  function ha8e0() {}ha8e0['prototype'] = gjy4x, ha8e0 = new ha8e0();for (gjy4x in b$9l72) ha8e0[gjy4x] = b$9l72[gjy4x];return ha8e0;
}), exports['XMLReader'] = _dewn_8k;