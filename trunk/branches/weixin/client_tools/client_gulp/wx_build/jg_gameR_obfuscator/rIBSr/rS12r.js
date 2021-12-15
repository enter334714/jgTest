var I = wx.$R;
function r_cn_65h() {}function r_jixzs2(eq7dp, fndcqp, yi2jo, f6dnc5, mwk) {
  function zxtj2s(eqpgfd) {
    if (eqpgfd > 0xffff) {
      eqpgfd -= 0x10000;var dpfeg = 0xd800 + (eqpgfd >> 0xa),
          vt3l0s = 0xdc00 + (0x3ff & eqpgfd);return String['fromCharCode'](dpfeg, vt3l0s);
    }return String['fromCharCode'](eqpgfd);
  }function y8woi(m7wgr) {
    var $49a = m7wgr['slice'](0x1, -0x1);return $49a in yi2jo ? yi2jo[$49a] : '#' === $49a['charAt'](0x0) ? zxtj2s(parseInt($49a['substr'](0x1)['replace']('x', '0x'))) : (mwk['error']('entity not found:' + m7wgr), m7wgr);
  }function rm87k(depqfg) {
    if (depqfg > ua) {
      var krmwg7 = eq7dp['substring'](ua, depqfg)['replace'](/&#?\w+;/g, y8woi);yom8kw && _1h6u(ua), f6dnc5['characters'](krmwg7, 0x0, depqfg - ua), ua = depqfg;
    }
  }function _1h6u(ch6_5n, svt03l) {
    for (; ch6_5n >= wmkr87 && (svt03l = j2ioy['exec'](eq7dp));) oyxi2 = svt03l['index'], wmkr87 = oyxi2 + svt03l[0x0]['length'], yom8kw['lineNumber']++;yom8kw['columnNumber'] = ch6_5n - oyxi2 + 0x1;
  }for (var oyxi2 = 0x0, wmkr87 = 0x0, j2ioy = /.*(?:\r\n?|\n)|.*$/g, yom8kw = f6dnc5['locator'], grqe7p = [{ 'currentNSMap': fndcqp }], ndpfqe = {}, ua = 0x0;;) {
    try {
      var zs23l = eq7dp['indexOf']('<', ua);if (0x0 > zs23l) {
        if (!eq7dp['substr'](ua)['match'](/^\s*$/)) {
          var yk8wio = f6dnc5['doc'],
              eqnfp = yk8wio['createTextNode'](eq7dp['substr'](ua));yk8wio['appendChild'](eqnfp), f6dnc5['currentElement'] = eqnfp;
        }return;
      }switch (zs23l > ua && rm87k(zs23l), eq7dp['charAt'](zs23l + 0x1)) {case '/':
          var h_a1ub = eq7dp['indexOf']('>', zs23l + 0x3),
              stzx23 = eq7dp['substring'](zs23l + 0x2, h_a1ub),
              er7gqm = grqe7p['pop']();0x0 > h_a1ub ? (stzx23 = eq7dp['substring'](zs23l + 0x2)['replace'](/[\s<].*/, ''), mwk['error']('end tag name: ' + stzx23 + ' is not complete:' + er7gqm['tagName']), h_a1ub = zs23l + 0x1 + stzx23['length']) : stzx23['match'](/\s</) && (stzx23 = stzx23['replace'](/[\s<].*/, ''), mwk['error']('end tag name: ' + stzx23 + ' maybe not complete'), h_a1ub = zs23l + 0x1 + stzx23['length']);var nc5df = er7gqm['localNSMap'],
              bu91$ = er7gqm['tagName'] == stzx23,
              ymrkw8 = bu91$ || er7gqm['tagName'] && er7gqm['tagName']['toLowerCase']() == stzx23['toLowerCase']();if (ymrkw8) {
            if (f6dnc5['endElement'](er7gqm['uri'], er7gqm['localName'], stzx23), nc5df) {
              for (var rweg7 in nc5df) f6dnc5['endPrefixMapping'](rweg7);
            }bu91$ || mwk['fatalError']('end tag name: ' + stzx23 + ' is not match the current start tagName:' + er7gqm['tagName']);
          } else grqe7p['push'](er7gqm);h_a1ub++;break;case '?':
          yom8kw && _1h6u(zs23l), h_a1ub = r_xy8oj(eq7dp, zs23l, f6dnc5);break;case '!':
          yom8kw && _1h6u(zs23l), h_a1ub = r__bh1u(eq7dp, zs23l, f6dnc5, mwk);break;default:
          yom8kw && _1h6u(zs23l);var fqdpe = new r_zvts3(),
              qdpefn = grqe7p[grqe7p['length'] - 0x1]['currentNSMap'],
              h_a1ub = r_yikjo(eq7dp, zs23l, fqdpe, qdpefn, y8woi, mwk),
              xyjo2i = fqdpe['length'];if (!fqdpe['closed'] && r_d5fcpn(eq7dp, h_a1ub, fqdpe['tagName'], ndpfqe) && (fqdpe['closed'] = !0x0, yi2jo['nbsp'] || mwk['warning']('unclosed xml attribute')), yom8kw && xyjo2i) {
            for (var mewrg7 = r_dfpcnq(yom8kw, {}), re7qgm = 0x0; xyjo2i > re7qgm; re7qgm++) {
              var u1ahb_ = fqdpe[re7qgm];_1h6u(u1ahb_['offset']), u1ahb_['locator'] = r_dfpcnq(yom8kw, {});
            }f6dnc5['locator'] = mewrg7, r__ub1$(fqdpe, f6dnc5, qdpefn) && grqe7p['push'](fqdpe), f6dnc5['locator'] = yom8kw;
          } else r__ub1$(fqdpe, f6dnc5, qdpefn) && grqe7p['push'](fqdpe);'http://www.w3.org/1999/xhtml' !== fqdpe['uri'] || fqdpe['closed'] ? h_a1ub++ : h_a1ub = r_fqnd(eq7dp, h_a1ub, fqdpe['tagName'], y8woi, f6dnc5);}
    } catch (ermqg) {
      mwk['error']('element parse error: ' + ermqg), h_a1ub = -0x1;
    }h_a1ub > ua ? ua = h_a1ub : rm87k(Math['max'](zs23l, ua) + 0x1);
  }
}function r_dfpcnq(t0l3, ymrw8) {
  return ymrw8['lineNumber'] = t0l3['lineNumber'], ymrw8['columnNumber'] = t0l3['columnNumber'], ymrw8;
}function r_yikjo(m7rgq, edfnq, koyj, zsji2, xizjs, t0sv) {
  for (var hau61, $b9au1, u56h_1 = ++edfnq, wmky = r_zxsj2;;) {
    var jyoxi2 = m7rgq['charAt'](u56h_1);switch (jyoxi2) {case '=':
        if (wmky === r_egw7m) hau61 = m7rgq['slice'](edfnq, u56h_1), wmky = r_xj2sz;else {
          if (wmky !== r_e7dp) throw new Error('attribute equal must after attrName');wmky = r_xj2sz;
        }break;case '\x27':case '\x22':
        if (wmky === r_xj2sz || wmky === r_egw7m) {
          if (wmky === r_egw7m && (t0sv['warning']('attribute value must after "="'), hau61 = m7rgq['slice'](edfnq, u56h_1)), edfnq = u56h_1 + 0x1, u56h_1 = m7rgq['indexOf'](jyoxi2, edfnq), !(u56h_1 > 0x0)) throw new Error('attribute value no end \'' + jyoxi2 + '\' match');$b9au1 = m7rgq['slice'](edfnq, u56h_1)['replace'](/&#?\w+;/g, xizjs), koyj['add'](hau61, $b9au1, edfnq - 0x1), wmky = r_rky8m;
        } else {
          if (wmky != r_jyxo2i) throw new Error('attribute value must after "="');$b9au1 = m7rgq['slice'](edfnq, u56h_1)['replace'](/&#?\w+;/g, xizjs), koyj['add'](hau61, $b9au1, edfnq), t0sv['warning']('attribute "' + hau61 + '" missed start quot(' + jyoxi2 + ')!!'), edfnq = u56h_1 + 0x1, wmky = r_rky8m;
        }break;case '/':
        switch (wmky) {case r_zxsj2:
            koyj['setTagName'](m7rgq['slice'](edfnq, u56h_1));case r_rky8m:case r_bua$1_:case r_xjy8o:
            wmky = r_xjy8o, koyj['closed'] = !0x0;case r_jyxo2i:case r_egw7m:case r_e7dp:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return t0sv['error']('unexpected end of input'), wmky == r_zxsj2 && koyj['setTagName'](m7rgq['slice'](edfnq, u56h_1)), u56h_1;case '>':
        switch (wmky) {case r_zxsj2:
            koyj['setTagName'](m7rgq['slice'](edfnq, u56h_1));case r_rky8m:case r_bua$1_:case r_xjy8o:
            break;case r_jyxo2i:case r_egw7m:
            $b9au1 = m7rgq['slice'](edfnq, u56h_1), '/' === $b9au1['slice'](-0x1) && (koyj['closed'] = !0x0, $b9au1 = $b9au1['slice'](0x0, -0x1));case r_e7dp:
            wmky === r_e7dp && ($b9au1 = hau61), wmky == r_jyxo2i ? (t0sv['warning']('attribute "' + $b9au1 + '" missed quot(")!!'), koyj['add'](hau61, $b9au1['replace'](/&#?\w+;/g, xizjs), edfnq)) : ('http://www.w3.org/1999/xhtml' === zsji2[''] && $b9au1['match'](/^(?:disabled|checked|selected)$/i) || t0sv['warning']('attribute "' + $b9au1 + '" missed value!! "' + $b9au1 + '" instead!!'), koyj['add']($b9au1, $b9au1, edfnq));break;case r_xj2sz:
            throw new Error('attribute value missed!!');}return u56h_1;case '\u0080':
        jyoxi2 = '\x20';default:
        if ('\x20' >= jyoxi2) switch (wmky) {case r_zxsj2:
            koyj['setTagName'](m7rgq['slice'](edfnq, u56h_1)), wmky = r_bua$1_;break;case r_egw7m:
            hau61 = m7rgq['slice'](edfnq, u56h_1), wmky = r_e7dp;break;case r_jyxo2i:
            var $b9au1 = m7rgq['slice'](edfnq, u56h_1)['replace'](/&#?\w+;/g, xizjs);t0sv['warning']('attribute "' + $b9au1 + '" missed quot(")!!'), koyj['add'](hau61, $b9au1, edfnq);case r_rky8m:
            wmky = r_bua$1_;} else switch (wmky) {case r_e7dp:
            {
              koyj['tagName'];
            }'http://www.w3.org/1999/xhtml' === zsji2[''] && hau61['match'](/^(?:disabled|checked|selected)$/i) || t0sv['warning']('attribute "' + hau61 + '" missed value!! "' + hau61 + '" instead2!!'), koyj['add'](hau61, hau61, edfnq), edfnq = u56h_1, wmky = r_egw7m;break;case r_rky8m:
            t0sv['warning']('attribute space is required"' + hau61 + '\x22!!');case r_bua$1_:
            wmky = r_egw7m, edfnq = u56h_1;break;case r_xj2sz:
            wmky = r_jyxo2i, edfnq = u56h_1;break;case r_xjy8o:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}u56h_1++;
  }
}function r__ub1$(m8wyko, wkg, gkwr) {
  for (var dcf5n = m8wyko['tagName'], _15u = null, eg7qpr = m8wyko['length']; eg7qpr--;) {
    var v30s = m8wyko[eg7qpr],
        eqpfnd = v30s['qName'],
        _ab1h = v30s['value'],
        n6h5cf = eqpfnd['indexOf'](':');if (n6h5cf > 0x0) var kr7mg = v30s['prefix'] = eqpfnd['slice'](0x0, n6h5cf),
        k8yjo = eqpfnd['slice'](n6h5cf + 0x1),
        uh1b_ = 'xmlns' === kr7mg && k8yjo;else k8yjo = eqpfnd, kr7mg = null, uh1b_ = 'xmlns' === eqpfnd && '';v30s['localName'] = k8yjo, uh1b_ !== !0x1 && (null == _15u && (_15u = {}, r_pqfde(gkwr, gkwr = {})), gkwr[uh1b_] = _15u[uh1b_] = _ab1h, v30s['uri'] = 'http://www.w3.org/2000/xmlns/', wkg['startPrefixMapping'](uh1b_, _ab1h));
  }for (var eg7qpr = m8wyko['length']; eg7qpr--;) {
    v30s = m8wyko[eg7qpr];var kr7mg = v30s['prefix'];kr7mg && ('xml' === kr7mg && (v30s['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kr7mg && (v30s['uri'] = gkwr[kr7mg || '']));
  }var n6h5cf = dcf5n['indexOf'](':');n6h5cf > 0x0 ? (kr7mg = m8wyko['prefix'] = dcf5n['slice'](0x0, n6h5cf), k8yjo = m8wyko['localName'] = dcf5n['slice'](n6h5cf + 0x1)) : (kr7mg = null, k8yjo = m8wyko['localName'] = dcf5n);var vt0l3 = m8wyko['uri'] = gkwr[kr7mg || ''];if (wkg['startElement'](vt0l3, k8yjo, dcf5n, m8wyko), !m8wyko['closed']) return m8wyko['currentNSMap'] = gkwr, m8wyko['localNSMap'] = _15u, !0x0;if (wkg['endElement'](vt0l3, k8yjo, dcf5n), _15u) {
    for (kr7mg in _15u) wkg['endPrefixMapping'](kr7mg);
  }
}function r_fqnd(npqdcf, ah_1, a9$bu1, wrmge7, t0s3lv) {
  if (/^(?:script|textarea)$/i['test'](a9$bu1)) {
    var h_1ub = npqdcf['indexOf']('</' + a9$bu1 + '>', ah_1),
        tvlzs3 = npqdcf['substring'](ah_1 + 0x1, h_1ub);if (/[&<]/['test'](tvlzs3)) return (/^script$/i['test'](a9$bu1) ? (t0s3lv['characters'](tvlzs3, 0x0, tvlzs3['length']), h_1ub) : (tvlzs3 = tvlzs3['replace'](/&#?\w+;/g, wrmge7), t0s3lv['characters'](tvlzs3, 0x0, tvlzs3['length']), h_1ub)
    );
  }return ah_1 + 0x1;
}function r_d5fcpn(is2jx, _bu1a, u_a$b, ab1u$9) {
  var xjizs = ab1u$9[u_a$b];return null == xjizs && (xjizs = is2jx['lastIndexOf']('</' + u_a$b + '>'), _bu1a > xjizs && (xjizs = is2jx['lastIndexOf']('</' + u_a$b)), ab1u$9[u_a$b] = xjizs), _bu1a > xjizs;
}function r_pqfde(fpnedq, kmwo) {
  for (var abu1h_ in fpnedq) kmwo[abu1h_] = fpnedq[abu1h_];
}function r__bh1u(zsji2x, rq7gep, ywoki, m8rwk7) {
  var x8jiy = zsji2x['charAt'](rq7gep + 0x2);switch (x8jiy) {case '-':
      if ('-' === zsji2x['charAt'](rq7gep + 0x3)) {
        var nfh6c5 = zsji2x['indexOf']('-->', rq7gep + 0x4);return nfh6c5 > rq7gep ? (ywoki['comment'](zsji2x, rq7gep + 0x4, nfh6c5 - rq7gep - 0x4), nfh6c5 + 0x3) : (m8rwk7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == zsji2x['substr'](rq7gep + 0x3, 0x6)) {
        var nfh6c5 = zsji2x['indexOf'](']]>', rq7gep + 0x9);return ywoki['startCDATA'](), ywoki['characters'](zsji2x, rq7gep + 0x9, nfh6c5 - rq7gep - 0x9), ywoki['endCDATA'](), nfh6c5 + 0x3;
      }var c5pnd = r_pe7gdq(zsji2x, rq7gep),
          t3sx2 = c5pnd['length'];if (t3sx2 > 0x1 && /!doctype/i['test'](c5pnd[0x0][0x0])) {
        var npqdf = c5pnd[0x1][0x0],
            oxji8y = t3sx2 > 0x3 && /^public$/i['test'](c5pnd[0x2][0x0]) && c5pnd[0x3][0x0],
            ua61h_ = t3sx2 > 0x4 && c5pnd[0x4][0x0],
            zs2jxt = c5pnd[t3sx2 - 0x1];return ywoki['startDTD'](npqdf, oxji8y && oxji8y['replace'](/^(['"])(.*?)\1$/, '$2'), ua61h_ && ua61h_['replace'](/^(['"])(.*?)\1$/, '$2')), ywoki['endDTD'](), zs2jxt['index'] + zs2jxt[0x0]['length'];
      }}return -0x1;
}function r_xy8oj(cn5fdp, mkwg7, tl3v0s) {
  var wkyr8 = cn5fdp['indexOf']('?>', mkwg7);if (wkyr8) {
    var zjo2ix = cn5fdp['substring'](mkwg7, wkyr8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (zjo2ix) {
      {
        zjo2ix[0x0]['length'];
      }return tl3v0s['processingInstruction'](zjo2ix[0x1], zjo2ix[0x2]), wkyr8 + 0x2;
    }return -0x1;
  }return -0x1;
}function r_zvts3() {}function r_sx2ztj(gper7q, gme) {
  return gper7q['__proto__'] = gme, gper7q;
}function r_pe7gdq(uc_56h, ojky8i) {
  var g7emr,
      gerw = [],
      l0v3s = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (l0v3s['lastIndex'] = ojky8i, l0v3s['exec'](uc_56h); g7emr = l0v3s['exec'](uc_56h);) if (gerw['push'](g7emr), g7emr[0x1]) return gerw;
}var r_n5c_6h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r_ikyjo8 = new RegExp('[\\-\\.0-9' + r_n5c_6h['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r_$b41a = new RegExp('^' + r_n5c_6h['source'] + r_ikyjo8['source'] + '*(?::' + r_n5c_6h['source'] + r_ikyjo8['source'] + '*)?$'),
    r_zxsj2 = 0x0,
    r_egw7m = 0x1,
    r_e7dp = 0x2,
    r_xj2sz = 0x3,
    r_jyxo2i = 0x4,
    r_rky8m = 0x5,
    r_bua$1_ = 0x6,
    r_xjy8o = 0x7;r_cn_65h['prototype'] = { 'parse': function (gdqp, pde7, f65ch) {
    var h16u_a = this['domBuilder'];h16u_a['startDocument'](), r_pqfde(pde7, pde7 = {}), r_jixzs2(gdqp, pde7, f65ch, h16u_a, this['errorHandler']), h16u_a['endDocument']();
  } }, r_zvts3['prototype'] = { 'setTagName': function ($9au) {
    if (!r_$b41a['test']($9au)) throw new Error('invalid tagName:' + $9au);this['tagName'] = $9au;
  }, 'add': function (zjxo2, cn56fd, xjtzs2) {
    if (!r_$b41a['test'](zjxo2)) throw new Error('invalid attribute:' + zjxo2);this[this['length']++] = { 'qName': zjxo2, 'value': cn56fd, 'offset': xjtzs2 };
  }, 'length': 0x0, 'getLocalName': function (o8jy) {
    return this[o8jy]['localName'];
  }, 'getLocator': function (a1$b9) {
    return this[a1$b9]['locator'];
  }, 'getQName': function (fnch) {
    return this[fnch]['qName'];
  }, 'getURI': function (mry8kw) {
    return this[mry8kw]['uri'];
  }, 'getValue': function (ermq7) {
    return this[ermq7]['value'];
  } }, r_sx2ztj({}, r_sx2ztj['prototype']) instanceof r_sx2ztj || (r_sx2ztj = function (au_$, u19ab$) {
  function h_6u1() {}h_6u1['prototype'] = u19ab$, h_6u1 = new h_6u1();for (u19ab$ in au_$) h_6u1[u19ab$] = au_$[u19ab$];return h_6u1;
}), exports['XMLReader'] = r_cn_65h;