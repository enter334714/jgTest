var I = wx.$R;
function r_o8wym() {}function r_ba91u(u1_h56, qpfnde, u15, ztsx, ltzv3) {
  function ojyix2(ts2lz) {
    if (ts2lz > 0xffff) {
      ts2lz -= 0x10000;var qdepn = 0xd800 + (ts2lz >> 0xa),
          nd6fc = 0xdc00 + (0x3ff & ts2lz);return String['fromCharCode'](qdepn, nd6fc);
    }return String['fromCharCode'](ts2lz);
  }function o2zxij(slt3z2) {
    var rkw7 = slt3z2['slice'](0x1, -0x1);return rkw7 in u15 ? u15[rkw7] : '#' === rkw7['charAt'](0x0) ? ojyix2(parseInt(rkw7['substr'](0x1)['replace']('x', '0x'))) : (ltzv3['error']('entity not found:' + slt3z2), slt3z2);
  }function l0stv3(c6hu5) {
    if (c6hu5 > _uh6a1) {
      var a$19b = u1_h56['substring'](_uh6a1, c6hu5)['replace'](/&#?\w+;/g, o2zxij);xts && lst23(_uh6a1), ztsx['characters'](a$19b, 0x0, c6hu5 - _uh6a1), _uh6a1 = c6hu5;
    }
  }function lst23(ha_16, a149b$) {
    for (; ha_16 >= $_u1ba && (a149b$ = lts0v3['exec'](u1_h56));) x2isj = a149b$['index'], $_u1ba = x2isj + a149b$[0x0]['length'], xts['lineNumber']++;xts['columnNumber'] = ha_16 - x2isj + 0x1;
  }for (var x2isj = 0x0, $_u1ba = 0x0, lts0v3 = /.*(?:\r\n?|\n)|.*$/g, xts = ztsx['locator'], rk8ymw = [{ 'currentNSMap': qpfnde }], qefp = {}, _uh6a1 = 0x0;;) {
    try {
      var tzvls = u1_h56['indexOf']('<', _uh6a1);if (0x0 > tzvls) {
        if (!u1_h56['substr'](_uh6a1)['match'](/^\s*$/)) {
          var tsxz32 = ztsx['doc'],
              r7qpge = tsxz32['createTextNode'](u1_h56['substr'](_uh6a1));tsxz32['appendChild'](r7qpge), ztsx['currentElement'] = r7qpge;
        }return;
      }switch (tzvls > _uh6a1 && l0stv3(tzvls), u1_h56['charAt'](tzvls + 0x1)) {case '/':
          var mk8rw7 = u1_h56['indexOf']('>', tzvls + 0x3),
              mow8ky = u1_h56['substring'](tzvls + 0x2, mk8rw7),
              mgwre = rk8ymw['pop']();0x0 > mk8rw7 ? (mow8ky = u1_h56['substring'](tzvls + 0x2)['replace'](/[\s<].*/, ''), ltzv3['error']('end tag name: ' + mow8ky + ' is not complete:' + mgwre['tagName']), mk8rw7 = tzvls + 0x1 + mow8ky['length']) : mow8ky['match'](/\s</) && (mow8ky = mow8ky['replace'](/[\s<].*/, ''), ltzv3['error']('end tag name: ' + mow8ky + ' maybe not complete'), mk8rw7 = tzvls + 0x1 + mow8ky['length']);var u9ab$ = mgwre['localNSMap'],
              x3stz2 = mgwre['tagName'] == mow8ky,
              w8rmy = x3stz2 || mgwre['tagName'] && mgwre['tagName']['toLowerCase']() == mow8ky['toLowerCase']();if (w8rmy) {
            if (ztsx['endElement'](mgwre['uri'], mgwre['localName'], mow8ky), u9ab$) {
              for (var myo8w in u9ab$) ztsx['endPrefixMapping'](myo8w);
            }x3stz2 || ltzv3['fatalError']('end tag name: ' + mow8ky + ' is not match the current start tagName:' + mgwre['tagName']);
          } else rk8ymw['push'](mgwre);mk8rw7++;break;case '?':
          xts && lst23(tzvls), mk8rw7 = r_qpge7d(u1_h56, tzvls, ztsx);break;case '!':
          xts && lst23(tzvls), mk8rw7 = r_ixj2zs(u1_h56, tzvls, ztsx, ltzv3);break;default:
          xts && lst23(tzvls);var cdqfn = new r_dqp7g(),
              jioxz = rk8ymw[rk8ymw['length'] - 0x1]['currentNSMap'],
              mk8rw7 = r_tsjx2z(u1_h56, tzvls, cdqfn, jioxz, o2zxij, ltzv3),
              qefdpg = cdqfn['length'];if (!cdqfn['closed'] && r_zi2xsj(u1_h56, mk8rw7, cdqfn['tagName'], qefp) && (cdqfn['closed'] = !0x0, u15['nbsp'] || ltzv3['warning']('unclosed xml attribute')), xts && qefdpg) {
            for (var ba$149 = r_bua9(xts, {}), hn5f = 0x0; qefdpg > hn5f; hn5f++) {
              var pcndf = cdqfn[hn5f];lst23(pcndf['offset']), pcndf['locator'] = r_bua9(xts, {});
            }ztsx['locator'] = ba$149, r_gepr7q(cdqfn, ztsx, jioxz) && rk8ymw['push'](cdqfn), ztsx['locator'] = xts;
          } else r_gepr7q(cdqfn, ztsx, jioxz) && rk8ymw['push'](cdqfn);'http://www.w3.org/1999/xhtml' !== cdqfn['uri'] || cdqfn['closed'] ? mk8rw7++ : mk8rw7 = r_mkwr87(u1_h56, mk8rw7, cdqfn['tagName'], o2zxij, ztsx);}
    } catch (g7pqed) {
      ltzv3['error']('element parse error: ' + g7pqed), mk8rw7 = -0x1;
    }mk8rw7 > _uh6a1 ? _uh6a1 = mk8rw7 : l0stv3(Math['max'](tzvls, _uh6a1) + 0x1);
  }
}function r_bua9(c5n_h, b1$49a) {
  return b1$49a['lineNumber'] = c5n_h['lineNumber'], b1$49a['columnNumber'] = c5n_h['columnNumber'], b1$49a;
}function r_tsjx2z(hb_ua1, lv3tsz, n65cfd, k8wr7m, c56hfn, mw7r) {
  for (var xizo2, pdcqf, dgp7 = ++lv3tsz, fpc5dn = r_vt0l3;;) {
    var x2ojzi = hb_ua1['charAt'](dgp7);switch (x2ojzi) {case '=':
        if (fpc5dn === r_jt2xz) xizo2 = hb_ua1['slice'](lv3tsz, dgp7), fpc5dn = r_yki8j;else {
          if (fpc5dn !== r_nc5f6h) throw new Error('attribute equal must after attrName');fpc5dn = r_yki8j;
        }break;case '\x27':case '\x22':
        if (fpc5dn === r_yki8j || fpc5dn === r_jt2xz) {
          if (fpc5dn === r_jt2xz && (mw7r['warning']('attribute value must after "="'), xizo2 = hb_ua1['slice'](lv3tsz, dgp7)), lv3tsz = dgp7 + 0x1, dgp7 = hb_ua1['indexOf'](x2ojzi, lv3tsz), !(dgp7 > 0x0)) throw new Error('attribute value no end \'' + x2ojzi + '\' match');pdcqf = hb_ua1['slice'](lv3tsz, dgp7)['replace'](/&#?\w+;/g, c56hfn), n65cfd['add'](xizo2, pdcqf, lv3tsz - 0x1), fpc5dn = r_$914;
        } else {
          if (fpc5dn != r_vz3slt) throw new Error('attribute value must after "="');pdcqf = hb_ua1['slice'](lv3tsz, dgp7)['replace'](/&#?\w+;/g, c56hfn), n65cfd['add'](xizo2, pdcqf, lv3tsz), mw7r['warning']('attribute "' + xizo2 + '" missed start quot(' + x2ojzi + ')!!'), lv3tsz = dgp7 + 0x1, fpc5dn = r_$914;
        }break;case '/':
        switch (fpc5dn) {case r_vt0l3:
            n65cfd['setTagName'](hb_ua1['slice'](lv3tsz, dgp7));case r_$914:case r_dqpe:case r_cdp:
            fpc5dn = r_cdp, n65cfd['closed'] = !0x0;case r_vz3slt:case r_jt2xz:case r_nc5f6h:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mw7r['error']('unexpected end of input'), fpc5dn == r_vt0l3 && n65cfd['setTagName'](hb_ua1['slice'](lv3tsz, dgp7)), dgp7;case '>':
        switch (fpc5dn) {case r_vt0l3:
            n65cfd['setTagName'](hb_ua1['slice'](lv3tsz, dgp7));case r_$914:case r_dqpe:case r_cdp:
            break;case r_vz3slt:case r_jt2xz:
            pdcqf = hb_ua1['slice'](lv3tsz, dgp7), '/' === pdcqf['slice'](-0x1) && (n65cfd['closed'] = !0x0, pdcqf = pdcqf['slice'](0x0, -0x1));case r_nc5f6h:
            fpc5dn === r_nc5f6h && (pdcqf = xizo2), fpc5dn == r_vz3slt ? (mw7r['warning']('attribute "' + pdcqf + '" missed quot(")!!'), n65cfd['add'](xizo2, pdcqf['replace'](/&#?\w+;/g, c56hfn), lv3tsz)) : ('http://www.w3.org/1999/xhtml' === k8wr7m[''] && pdcqf['match'](/^(?:disabled|checked|selected)$/i) || mw7r['warning']('attribute "' + pdcqf + '" missed value!! "' + pdcqf + '" instead!!'), n65cfd['add'](pdcqf, pdcqf, lv3tsz));break;case r_yki8j:
            throw new Error('attribute value missed!!');}return dgp7;case '\u0080':
        x2ojzi = '\x20';default:
        if ('\x20' >= x2ojzi) switch (fpc5dn) {case r_vt0l3:
            n65cfd['setTagName'](hb_ua1['slice'](lv3tsz, dgp7)), fpc5dn = r_dqpe;break;case r_jt2xz:
            xizo2 = hb_ua1['slice'](lv3tsz, dgp7), fpc5dn = r_nc5f6h;break;case r_vz3slt:
            var pdcqf = hb_ua1['slice'](lv3tsz, dgp7)['replace'](/&#?\w+;/g, c56hfn);mw7r['warning']('attribute "' + pdcqf + '" missed quot(")!!'), n65cfd['add'](xizo2, pdcqf, lv3tsz);case r_$914:
            fpc5dn = r_dqpe;} else switch (fpc5dn) {case r_nc5f6h:
            {
              n65cfd['tagName'];
            }'http://www.w3.org/1999/xhtml' === k8wr7m[''] && xizo2['match'](/^(?:disabled|checked|selected)$/i) || mw7r['warning']('attribute "' + xizo2 + '" missed value!! "' + xizo2 + '" instead2!!'), n65cfd['add'](xizo2, xizo2, lv3tsz), lv3tsz = dgp7, fpc5dn = r_jt2xz;break;case r_$914:
            mw7r['warning']('attribute space is required"' + xizo2 + '\x22!!');case r_dqpe:
            fpc5dn = r_jt2xz, lv3tsz = dgp7;break;case r_yki8j:
            fpc5dn = r_vz3slt, lv3tsz = dgp7;break;case r_cdp:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}dgp7++;
  }
}function r_gepr7q(w8mkr7, gp7eqr, pfed) {
  for (var fc65n = w8mkr7['tagName'], u6h_1a = null, y8iwok = w8mkr7['length']; y8iwok--;) {
    var jyxoi2 = w8mkr7[y8iwok],
        gkwr7m = jyxoi2['qName'],
        pfedg = jyxoi2['value'],
        i2jzx = gkwr7m['indexOf'](':');if (i2jzx > 0x0) var hc65f = jyxoi2['prefix'] = gkwr7m['slice'](0x0, i2jzx),
        tzl3sv = gkwr7m['slice'](i2jzx + 0x1),
        zs2jt = 'xmlns' === hc65f && tzl3sv;else tzl3sv = gkwr7m, hc65f = null, zs2jt = 'xmlns' === gkwr7m && '';jyxoi2['localName'] = tzl3sv, zs2jt !== !0x1 && (null == u6h_1a && (u6h_1a = {}, r_qepg7d(pfed, pfed = {})), pfed[zs2jt] = u6h_1a[zs2jt] = pfedg, jyxoi2['uri'] = 'http://www.w3.org/2000/xmlns/', gp7eqr['startPrefixMapping'](zs2jt, pfedg));
  }for (var y8iwok = w8mkr7['length']; y8iwok--;) {
    jyxoi2 = w8mkr7[y8iwok];var hc65f = jyxoi2['prefix'];hc65f && ('xml' === hc65f && (jyxoi2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== hc65f && (jyxoi2['uri'] = pfed[hc65f || '']));
  }var i2jzx = fc65n['indexOf'](':');i2jzx > 0x0 ? (hc65f = w8mkr7['prefix'] = fc65n['slice'](0x0, i2jzx), tzl3sv = w8mkr7['localName'] = fc65n['slice'](i2jzx + 0x1)) : (hc65f = null, tzl3sv = w8mkr7['localName'] = fc65n);var hu_51 = w8mkr7['uri'] = pfed[hc65f || ''];if (gp7eqr['startElement'](hu_51, tzl3sv, fc65n, w8mkr7), !w8mkr7['closed']) return w8mkr7['currentNSMap'] = pfed, w8mkr7['localNSMap'] = u6h_1a, !0x0;if (gp7eqr['endElement'](hu_51, tzl3sv, fc65n), u6h_1a) {
    for (hc65f in u6h_1a) gp7eqr['endPrefixMapping'](hc65f);
  }
}function r_mkwr87(kioj8y, uhb_a, ba_$, ls2z, iyoxj8) {
  if (/^(?:script|textarea)$/i['test'](ba_$)) {
    var dn56c = kioj8y['indexOf']('</' + ba_$ + '>', uhb_a),
        _1b$ = kioj8y['substring'](uhb_a + 0x1, dn56c);if (/[&<]/['test'](_1b$)) return (/^script$/i['test'](ba_$) ? (iyoxj8['characters'](_1b$, 0x0, _1b$['length']), dn56c) : (_1b$ = _1b$['replace'](/&#?\w+;/g, ls2z), iyoxj8['characters'](_1b$, 0x0, _1b$['length']), dn56c)
    );
  }return uhb_a + 0x1;
}function r_zi2xsj(d7eqpg, stv3z, fcnp5, gm7ew) {
  var d5f6 = gm7ew[fcnp5];return null == d5f6 && (d5f6 = d7eqpg['lastIndexOf']('</' + fcnp5 + '>'), stv3z > d5f6 && (d5f6 = d7eqpg['lastIndexOf']('</' + fcnp5)), gm7ew[fcnp5] = d5f6), stv3z > d5f6;
}function r_qepg7d(n5hc6_, zsx3t) {
  for (var _aub$ in n5hc6_) zsx3t[_aub$] = n5hc6_[_aub$];
}function r_ixj2zs(_b1h, dpnfq, iowyk8, zxioj2) {
  var mqrge = _b1h['charAt'](dpnfq + 0x2);switch (mqrge) {case '-':
      if ('-' === _b1h['charAt'](dpnfq + 0x3)) {
        var pqgr7e = _b1h['indexOf']('-->', dpnfq + 0x4);return pqgr7e > dpnfq ? (iowyk8['comment'](_b1h, dpnfq + 0x4, pqgr7e - dpnfq - 0x4), pqgr7e + 0x3) : (zxioj2['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _b1h['substr'](dpnfq + 0x3, 0x6)) {
        var pqgr7e = _b1h['indexOf'](']]>', dpnfq + 0x9);return iowyk8['startCDATA'](), iowyk8['characters'](_b1h, dpnfq + 0x9, pqgr7e - dpnfq - 0x9), iowyk8['endCDATA'](), pqgr7e + 0x3;
      }var yi2ojx = r_oj8xyi(_b1h, dpnfq),
          b1a$u = yi2ojx['length'];if (b1a$u > 0x1 && /!doctype/i['test'](yi2ojx[0x0][0x0])) {
        var p7erq = yi2ojx[0x1][0x0],
            mq7e = b1a$u > 0x3 && /^public$/i['test'](yi2ojx[0x2][0x0]) && yi2ojx[0x3][0x0],
            dfc5p = b1a$u > 0x4 && yi2ojx[0x4][0x0],
            kgmrw7 = yi2ojx[b1a$u - 0x1];return iowyk8['startDTD'](p7erq, mq7e && mq7e['replace'](/^(['"])(.*?)\1$/, '$2'), dfc5p && dfc5p['replace'](/^(['"])(.*?)\1$/, '$2')), iowyk8['endDTD'](), kgmrw7['index'] + kgmrw7[0x0]['length'];
      }}return -0x1;
}function r_qpge7d(ix2szj, s3vtlz, iy8wo) {
  var _u651h = ix2szj['indexOf']('?>', s3vtlz);if (_u651h) {
    var b$1a94 = ix2szj['substring'](s3vtlz, _u651h)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (b$1a94) {
      {
        b$1a94[0x0]['length'];
      }return iy8wo['processingInstruction'](b$1a94[0x1], b$1a94[0x2]), _u651h + 0x2;
    }return -0x1;
  }return -0x1;
}function r_dqp7g() {}function r_a14$9b(dfnpqe, _hnc6) {
  return dfnpqe['__proto__'] = _hnc6, dfnpqe;
}function r_oj8xyi(_n5c, _hu1b) {
  var jiyo2x,
      h6_u51 = [],
      zt32x = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zt32x['lastIndex'] = _hu1b, zt32x['exec'](_n5c); jiyo2x = zt32x['exec'](_n5c);) if (h6_u51['push'](jiyo2x), jiyo2x[0x1]) return h6_u51;
}var r_kjoi8y = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r_pqg7ed = new RegExp('[\\-\\.0-9' + r_kjoi8y['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r_gp7eqd = new RegExp('^' + r_kjoi8y['source'] + r_pqg7ed['source'] + '*(?::' + r_kjoi8y['source'] + r_pqg7ed['source'] + '*)?$'),
    r_vt0l3 = 0x0,
    r_jt2xz = 0x1,
    r_nc5f6h = 0x2,
    r_yki8j = 0x3,
    r_vz3slt = 0x4,
    r_$914 = 0x5,
    r_dqpe = 0x6,
    r_cdp = 0x7;r_o8wym['prototype'] = { 'parse': function (wm8yok, ikyw, _ba1) {
    var ji8ko = this['domBuilder'];ji8ko['startDocument'](), r_qepg7d(ikyw, ikyw = {}), r_ba91u(wm8yok, ikyw, _ba1, ji8ko, this['errorHandler']), ji8ko['endDocument']();
  } }, r_dqp7g['prototype'] = { 'setTagName': function (qger7p) {
    if (!r_gp7eqd['test'](qger7p)) throw new Error('invalid tagName:' + qger7p);this['tagName'] = qger7p;
  }, 'add': function (zlvts3, eqp7d, zij2o) {
    if (!r_gp7eqd['test'](zlvts3)) throw new Error('invalid attribute:' + zlvts3);this[this['length']++] = { 'qName': zlvts3, 'value': eqp7d, 'offset': zij2o };
  }, 'length': 0x0, 'getLocalName': function (g7mrk) {
    return this[g7mrk]['localName'];
  }, 'getLocator': function (dgqp7e) {
    return this[dgqp7e]['locator'];
  }, 'getQName': function (jzixo2) {
    return this[jzixo2]['qName'];
  }, 'getURI': function (p5cd) {
    return this[p5cd]['uri'];
  }, 'getValue': function (fcndqp) {
    return this[fcndqp]['value'];
  } }, r_a14$9b({}, r_a14$9b['prototype']) instanceof r_a14$9b || (r_a14$9b = function (re7qgp, sxi2jz) {
  function hbu_1a() {}hbu_1a['prototype'] = sxi2jz, hbu_1a = new hbu_1a();for (sxi2jz in re7qgp) hbu_1a[sxi2jz] = re7qgp[sxi2jz];return hbu_1a;
}), exports['XMLReader'] = r_o8wym;