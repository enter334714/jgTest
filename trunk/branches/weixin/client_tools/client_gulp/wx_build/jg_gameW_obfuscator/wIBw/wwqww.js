var s = wx.$W;
function wmxhv() {}function wyj9r_($qt2fs, o5h6d, sqtnl, itln, odw56) {
  function q2s$f(_y7j) {
    var n0ilp = _y7j['slice'](0x1, -0x1);return n0ilp in sqtnl ? sqtnl[n0ilp] : '#' === n0ilp['charAt'](0x0) ? 0xffff < (n0ilp = parseInt(n0ilp['substr'](0x1)['replace']('x', '0x'))) ? (n0ilp -= 0x10000, String['fromCharCode'](0xd800 + (n0ilp >> 0xa), 0xdc00 + (0x3ff & n0ilp))) : String['fromCharCode'](n0ilp) : (odw56['error']('entity not found:' + _y7j), _y7j);
  }function kajr(c1z83) {
    var c81e;_y0pr9 < c1z83 && (c81e = $qt2fs['substring'](_y0pr9, c1z83)['replace'](/&#?\w+;/g, q2s$f), l90ipn && e81ak(_y0pr9), itln['characters'](c81e, 0x0, c1z83 - _y0pr9), _y0pr9 = c1z83);
  }function e81ak(ze38u, b3uo5) {
    for (; xhm6v <= ze38u && (b3uo5 = st$q2['exec']($qt2fs));) qfsl$ = b3uo5['index'], xhm6v = qfsl$ + b3uo5[0x0]['length'], l90ipn['lineNumber']++;l90ipn['columnNumber'] = ze38u - qfsl$ + 0x1;
  }for (var qfsl$ = 0x0, xhm6v = 0x0, st$q2 = /.*(?:\r\n?|\n)|.*$/g, l90ipn = itln['locator'], a7_ = [{ 'currentNSMap': o5h6d }], p9n0yi = {}, _y0pr9 = 0x0;;) {
    try {
      var y_0p = $qt2fs['indexOf']('<', _y0pr9),
          r9_0y,
          oduwb;if (y_0p < 0x0) return void ($qt2fs['substr'](_y0pr9)['match'](/^\s*$/) || (oduwb = (r9_0y = itln['doc'])['createTextNode']($qt2fs['substr'](_y0pr9)), r9_0y['appendChild'](oduwb), itln['currentElement'] = oduwb));switch (_y0pr9 < y_0p && kajr(y_0p), $qt2fs['charAt'](y_0p + 0x1)) {case '/':
          var d4ovh6 = $qt2fs['indexOf']('>', y_0p + 0x3),
              c78aek = $qt2fs['substring'](y_0p + 0x2, d4ovh6),
              r_y7j9 = a7_['pop']();d4ovh6 < 0x0 ? (c78aek = $qt2fs['substring'](y_0p + 0x2)['replace'](/[\s<].*/, ''), odw56['error']('end tag name: ' + c78aek + ' is not complete:' + r_y7j9['tagName']), d4ovh6 = y_0p + 0x1 + c78aek['length']) : c78aek['match'](/\s</) && (c78aek = c78aek['replace'](/[\s<].*/, ''), odw56['error']('end tag name: ' + c78aek + ' maybe not complete'), d4ovh6 = y_0p + 0x1 + c78aek['length']);var hm4v6 = r_y7j9['localNSMap'],
              gmvx4h = r_y7j9['tagName'] == c78aek;if (gmvx4h || r_y7j9['tagName'] && r_y7j9['tagName']['toLowerCase']() == c78aek['toLowerCase']()) {
            if (itln['endElement'](r_y7j9['uri'], r_y7j9['localName'], c78aek), hm4v6) {
              for (var $tnsq in hm4v6) itln['endPrefixMapping']($tnsq);
            }gmvx4h || odw56['fatalError']('end tag name: ' + c78aek + ' is not match the current start tagName:' + r_y7j9['tagName']);
          } else a7_['push'](r_y7j9);d4ovh6++;break;case '?':
          l90ipn && e81ak(y_0p), d4ovh6 = wbwuz35($qt2fs, y_0p, itln);break;case '!':
          l90ipn && e81ak(y_0p), d4ovh6 = wfqtls$($qt2fs, y_0p, itln, odw56);break;default:
          l90ipn && e81ak(y_0p);var lst$qf = new wiltn(),
              cz138e = a7_[a7_['length'] - 0x1]['currentNSMap'],
              d4ovh6 = wz8k1e($qt2fs, y_0p, lst$qf, cz138e, q2s$f, odw56),
              cake87 = lst$qf['length'];if (!lst$qf['closed'] && wy9ni0p($qt2fs, d4ovh6, lst$qf['tagName'], p9n0yi) && (lst$qf['closed'] = !0x0, sqtnl['nbsp'] || odw56['warning']('unclosed xml attribute')), l90ipn && cake87) {
            for (var pi9ln0 = wkaj_7r(l90ipn, {}), sq2f$ = 0x0; sq2f$ < cake87; sq2f$++) {
              var o6h5v = lst$qf[sq2f$];e81ak(o6h5v['offset']), o6h5v['locator'] = wkaj_7r(l90ipn, {});
            }itln['locator'] = pi9ln0, we3cz81(lst$qf, itln, cz138e) && a7_['push'](lst$qf), itln['locator'] = l90ipn;
          } else we3cz81(lst$qf, itln, cz138e) && a7_['push'](lst$qf);'http://www.w3.org/1999/xhtml' !== lst$qf['uri'] || lst$qf['closed'] ? d4ovh6++ : d4ovh6 = w$t2sf($qt2fs, d4ovh6, lst$qf['tagName'], q2s$f, itln);}
    } catch (eb3zu) {
      odw56['error']('element parse error: ' + eb3zu), d4ovh6 = -0x1;
    }_y0pr9 < d4ovh6 ? _y0pr9 = d4ovh6 : kajr(Math['max'](y_0p, _y0pr9) + 0x1);
  }
}function wkaj_7r(_kar7, ze31c) {
  return ze31c['lineNumber'] = _kar7['lineNumber'], ze31c['columnNumber'] = _kar7['columnNumber'], ze31c;
}function wz8k1e(ilnp0, vgmxh, ts$f2q, xvm4g, _7y9, z3c18e) {
  for (var vd5wo, _p0r9 = ++vgmxh, _p90r = wwd5v;;) {
    var py9in0 = ilnp0['charAt'](_p0r9);switch (py9in0) {case '=':
        if (_p90r === wlsn$it) vd5wo = ilnp0['slice'](vgmxh, _p0r9), _p90r = wd5h6;else {
          if (_p90r !== wz1kec8) throw new Error('attribute equal must after attrName');_p90r = wd5h6;
        }break;case '\x27':case '\x22':
        if (_p90r === wd5h6 || _p90r === wlsn$it) {
          if (_p90r === wlsn$it && (z3c18e['warning']('attribute value must after "="'), vd5wo = ilnp0['slice'](vgmxh, _p0r9)), !(0x0 < (_p0r9 = ilnp0['indexOf'](py9in0, vgmxh = _p0r9 + 0x1)))) throw new Error('attribute value no end \'' + py9in0 + '\' match');hvg = ilnp0['slice'](vgmxh, _p0r9)['replace'](/&#?\w+;/g, _7y9), ts$f2q['add'](vd5wo, hvg, vgmxh - 0x1), _p90r = wj7kac8;
        } else {
          if (_p90r != wqnlst) throw new Error('attribute value must after "="');hvg = ilnp0['slice'](vgmxh, _p0r9)['replace'](/&#?\w+;/g, _7y9), ts$f2q['add'](vd5wo, hvg, vgmxh), z3c18e['warning']('attribute "' + vd5wo + '" missed start quot(' + py9in0 + ')!!'), vgmxh = _p0r9 + 0x1, _p90r = wj7kac8;
        }break;case '/':
        switch (_p90r) {case wwd5v:
            ts$f2q['setTagName'](ilnp0['slice'](vgmxh, _p0r9));case wj7kac8:case wz13w:case wgmhxv4:
            _p90r = wgmhxv4, ts$f2q['closed'] = !0x0;case wqnlst:case wlsn$it:case wz1kec8:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z3c18e['error']('unexpected end of input'), _p90r == wwd5v && ts$f2q['setTagName'](ilnp0['slice'](vgmxh, _p0r9)), _p0r9;case '>':
        switch (_p90r) {case wwd5v:
            ts$f2q['setTagName'](ilnp0['slice'](vgmxh, _p0r9));case wj7kac8:case wz13w:case wgmhxv4:
            break;case wqnlst:case wlsn$it:
            '/' === (hvg = ilnp0['slice'](vgmxh, _p0r9))['slice'](-0x1) && (ts$f2q['closed'] = !0x0, hvg = hvg['slice'](0x0, -0x1));case wz1kec8:
            _p90r === wz1kec8 && (hvg = vd5wo), _p90r == wqnlst ? (z3c18e['warning']('attribute "' + hvg + '" missed quot(")!!'), ts$f2q['add'](vd5wo, hvg['replace'](/&#?\w+;/g, _7y9), vgmxh)) : ('http://www.w3.org/1999/xhtml' === xvm4g[''] && hvg['match'](/^(?:disabled|checked|selected)$/i) || z3c18e['warning']('attribute "' + hvg + '" missed value!! "' + hvg + '" instead!!'), ts$f2q['add'](hvg, hvg, vgmxh));break;case wd5h6:
            throw new Error('attribute value missed!!');}return _p0r9;case '\u0080':
        py9in0 = '\x20';default:
        if (py9in0 <= '\x20') switch (_p90r) {case wwd5v:
            ts$f2q['setTagName'](ilnp0['slice'](vgmxh, _p0r9)), _p90r = wz13w;break;case wlsn$it:
            vd5wo = ilnp0['slice'](vgmxh, _p0r9), _p90r = wz1kec8;break;case wqnlst:
            var hvg = ilnp0['slice'](vgmxh, _p0r9)['replace'](/&#?\w+;/g, _7y9);z3c18e['warning']('attribute "' + hvg + '" missed quot(")!!'), ts$f2q['add'](vd5wo, hvg, vgmxh);case wj7kac8:
            _p90r = wz13w;} else switch (_p90r) {case wz1kec8:
            ts$f2q['tagName'], 'http://www.w3.org/1999/xhtml' === xvm4g[''] && vd5wo['match'](/^(?:disabled|checked|selected)$/i) || z3c18e['warning']('attribute "' + vd5wo + '" missed value!! "' + vd5wo + '" instead2!!'), ts$f2q['add'](vd5wo, vd5wo, vgmxh), vgmxh = _p0r9, _p90r = wlsn$it;break;case wj7kac8:
            z3c18e['warning']('attribute space is required"' + vd5wo + '\x22!!');case wz13w:
            _p90r = wlsn$it, vgmxh = _p0r9;break;case wd5h6:
            _p90r = wqnlst, vgmxh = _p0r9;break;case wgmhxv4:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_p0r9++;
  }
}function we3cz81(c7a8kj, buo3, _y7) {
  for (var vhm64 = c7a8kj['tagName'], n0lp9 = null, dv6o4 = c7a8kj['length']; dv6o4--;) {
    var $t2qs = c7a8kj[dv6o4],
        sq2 = $t2qs['qName'],
        ec81kz = $t2qs['value'],
        e78ak;sq2 = 0x0 < (z3e18c = sq2['indexOf'](':')) ? (eca8k1 = $t2qs['prefix'] = sq2['slice'](0x0, z3e18c), e78ak = sq2['slice'](z3e18c + 0x1), 'xmlns' === eca8k1 && e78ak) : (eca8k1 = null, 'xmlns' === (e78ak = sq2) && ''), $t2qs['localName'] = e78ak, !0x1 !== sq2 && (null == n0lp9 && (n0lp9 = {}, wlfs$t(_y7, _y7 = {})), _y7[sq2] = n0lp9[sq2] = ec81kz, $t2qs['uri'] = 'http://www.w3.org/2000/xmlns/', buo3['startPrefixMapping'](sq2, ec81kz));
  }for (dv6o4 = c7a8kj['length']; dv6o4--;) (eca8k1 = ($t2qs = c7a8kj[dv6o4])['prefix']) && ('xml' === eca8k1 && ($t2qs['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== eca8k1 && ($t2qs['uri'] = _y7[eca8k1 || '']));var z3e18c;e78ak = 0x0 < (z3e18c = vhm64['indexOf'](':')) ? (eca8k1 = c7a8kj['prefix'] = vhm64['slice'](0x0, z3e18c), c7a8kj['localName'] = vhm64['slice'](z3e18c + 0x1)) : (eca8k1 = null, c7a8kj['localName'] = vhm64);var ni$tsl = c7a8kj['uri'] = _y7[eca8k1 || ''];if (buo3['startElement'](ni$tsl, e78ak, vhm64, c7a8kj), !c7a8kj['closed']) return c7a8kj['currentNSMap'] = _y7, c7a8kj['localNSMap'] = n0lp9, !0x0;if (buo3['endElement'](ni$tsl, e78ak, vhm64), n0lp9) {
    for (var eca8k1 in n0lp9) buo3['endPrefixMapping'](eca8k1);
  }
}function w$t2sf(tsqnl$, l$n, ho46vd, jkac7r, crj7k) {
  if (/^(?:script|textarea)$/i['test'](ho46vd)) {
    var bzuw1 = tsqnl$['indexOf']('</' + ho46vd + '>', l$n),
        tsqnl$ = tsqnl$['substring'](l$n + 0x1, bzuw1);if (/[&<]/['test'](tsqnl$)) return (/^script$/i['test'](ho46vd) || (tsqnl$ = tsqnl$['replace'](/&#?\w+;/g, jkac7r)), crj7k['characters'](tsqnl$, 0x0, tsqnl$['length']), bzuw1
    );
  }return l$n + 0x1;
}function wy9ni0p(yj9r_7, z5wu, uo53wb, hv6do) {
  var wu1bz3 = hv6do[uo53wb];return null == wu1bz3 && ((wu1bz3 = yj9r_7['lastIndexOf']('</' + uo53wb + '>')) < z5wu && (wu1bz3 = yj9r_7['lastIndexOf']('</' + uo53wb)), hv6do[uo53wb] = wu1bz3), wu1bz3 < z5wu;
}function wlfs$t(e81cz, ek8c) {
  for (var wbo5du in e81cz) ek8c[wbo5du] = e81cz[wbo5du];
}function wfqtls$(xmv, ry9_0p, c7akj8, j_r9y7) {
  var $pnil = xmv['charAt'](ry9_0p + 0x2);if ('-' === $pnil) return '-' !== xmv['charAt'](ry9_0p + 0x3) ? -0x1 : ry9_0p < (p9j_ = xmv['indexOf']('-->', ry9_0p + 0x4)) ? (c7akj8['comment'](xmv, ry9_0p + 0x4, p9j_ - ry9_0p - 0x4), p9j_ + 0x3) : (j_r9y7['error']('Unclosed comment'), -0x1);if ('CDATA[' == xmv['substr'](ry9_0p + 0x3, 0x6)) {
    var p9j_ = xmv['indexOf'](']]>', ry9_0p + 0x9);return c7akj8['startCDATA'](), c7akj8['characters'](xmv, ry9_0p + 0x9, p9j_ - ry9_0p - 0x9), c7akj8['endCDATA'](), p9j_ + 0x3;
  }$pnil = w_y(xmv, ry9_0p), j_r9y7 = $pnil['length'];if (0x1 < j_r9y7 && /!doctype/i['test']($pnil[0x0][0x0])) return p9j_ = $pnil[0x1][0x0], xmv = 0x3 < j_r9y7 && /^public$/i['test']($pnil[0x2][0x0]) && $pnil[0x3][0x0], ry9_0p = 0x4 < j_r9y7 && $pnil[0x4][0x0], j_r9y7 = $pnil[j_r9y7 - 0x1], (c7akj8['startDTD'](p9j_, xmv && xmv['replace'](/^(['"])(.*?)\1$/, '$2'), ry9_0p && ry9_0p['replace'](/^(['"])(.*?)\1$/, '$2')), c7akj8['endDTD'](), j_r9y7['index'] + j_r9y7[0x0]['length']);return -0x1;
}function wbwuz35(zbu1e, t$sfq, f2$t) {
  var p9r_y0 = zbu1e['indexOf']('?>', t$sfq);if (p9r_y0) return t$sfq = zbu1e['substring'](t$sfq, p9r_y0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), t$sfq ? (t$sfq[0x0]['length'], f2$t['processingInstruction'](t$sfq[0x1], t$sfq[0x2]), p9r_y0 + 0x2) : -0x1;return -0x1;
}function wiltn() {}function wvoh46(q2sf, ek78) {
  return q2sf['__proto__'] = ek78, q2sf;
}function w_y(ntlsq$, g4hvm) {
  var _yi9,
      $2qs = [],
      ist$nl = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ist$nl['lastIndex'] = g4hvm, ist$nl['exec'](ntlsq$); _yi9 = ist$nl['exec'](ntlsq$);) if ($2qs['push'](_yi9), _yi9[0x1]) return $2qs;
}var wz3e1bu = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    wrkj7_a = new RegExp('[\\-\\.0-9' + wz3e1bu['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    wka1e8 = new RegExp('^' + wz3e1bu['source'] + wrkj7_a['source'] + '*(?::' + wz3e1bu['source'] + wrkj7_a['source'] + '*)?$'),
    wwd5v = 0x0,
    wlsn$it = 0x1,
    wz1kec8 = 0x2,
    wd5h6 = 0x3,
    wqnlst = 0x4,
    wj7kac8 = 0x5,
    wz13w = 0x6,
    wgmhxv4 = 0x7;wmxhv['prototype'] = { 'parse': function (wo5u3, ak87ec, dvh4x) {
    var lti$sn = this['domBuilder'];lti$sn['startDocument'](), wlfs$t(ak87ec, ak87ec = {}), wyj9r_(wo5u3, ak87ec, dvh4x, lti$sn, this['errorHandler']), lti$sn['endDocument']();
  } }, wiltn['prototype'] = { 'setTagName': function (caek1) {
    if (!wka1e8['test'](caek1)) throw new Error('invalid tagName:' + caek1);this['tagName'] = caek1;
  }, 'add': function (_90pi, rj7ack, mvxhg4) {
    if (!wka1e8['test'](_90pi)) throw new Error('invalid attribute:' + _90pi);this[this['length']++] = { 'qName': _90pi, 'value': rj7ack, 'offset': mvxhg4 };
  }, 'length': 0x0, 'getLocalName': function (u5ow3) {
    return this[u5ow3]['localName'];
  }, 'getLocator': function (i0y_) {
    return this[i0y_]['locator'];
  }, 'getQName': function (xhv64m) {
    return this[xhv64m]['qName'];
  }, 'getURI': function (lsnit) {
    return this[lsnit]['uri'];
  }, 'getValue': function (u3wob) {
    return this[u3wob]['value'];
  } }, wvoh46({}, wvoh46['prototype']) instanceof wvoh46 || (wvoh46 = function (h46vo, k8c1) {
  function xh46dv() {}for (k8c1 in xh46dv['prototype'] = k8c1, xh46dv = new xh46dv(), h46vo) xh46dv[k8c1] = h46vo[k8c1];return xh46dv;
}), exports['XMLReader'] = wmxhv;