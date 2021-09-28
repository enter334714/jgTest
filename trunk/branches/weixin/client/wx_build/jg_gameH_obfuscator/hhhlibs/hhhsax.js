var O = wx.$c;
function habtndh() {}function hd1hbn(n1mg9, gmx91, ciu5k, fq7e, _zv4ys) {
  function a1dh(c3fk75) {
    var ldb = c3fk75['slice'](0x1, -0x1);return ldb in ciu5k ? ciu5k[ldb] : '#' === ldb['charAt'](0x0) ? 0xffff < (ldb = parseInt(ldb['substr'](0x1)['replace']('x', '0x'))) ? (ldb -= 0x10000, String['fromCharCode'](0xd800 + (ldb >> 0xa), 0xdc00 + (0x3ff & ldb))) : String['fromCharCode'](ldb) : (_zv4ys['error']('entity not found:' + c3fk75), c3fk75);
  }function talwh(i6gmx) {
    var ab1d;mnhdb < i6gmx && (ab1d = n1mg9['substring'](mnhdb, i6gmx)['replace'](/&#?\w+;/g, a1dh), batlh && _yzsvj(mnhdb), fq7e['characters'](ab1d, 0x0, i6gmx - mnhdb), mnhdb = i6gmx);
  }function _yzsvj(m9xg16, v4zys_) {
    for (; i86x5 <= m9xg16 && (v4zys_ = u6i85x['exec'](n1mg9));) g9i6u = v4zys_['index'], i86x5 = g9i6u + v4zys_[0x0]['length'], batlh['lineNumber']++;batlh['columnNumber'] = m9xg16 - g9i6u + 0x1;
  }for (var g9i6u = 0x0, i86x5 = 0x0, u6i85x = /.*(?:\r\n?|\n)|.*$/g, batlh = fq7e['locator'], x8u9 = [{ 'currentNSMap': gmx91 }], q420o = {}, mnhdb = 0x0;;) {
    try {
      var gnmb19 = n1mg9['indexOf']('<', mnhdb),
          y_4szv,
          tbahdn;if (gnmb19 < 0x0) return void (n1mg9['substr'](mnhdb)['match'](/^\s*$/) || (tbahdn = (y_4szv = fq7e['doc'])['createTextNode'](n1mg9['substr'](mnhdb)), y_4szv['appendChild'](tbahdn), fq7e['currentElement'] = tbahdn));switch (mnhdb < gnmb19 && talwh(gnmb19), n1mg9['charAt'](gnmb19 + 0x1)) {case '/':
          var v0o2 = n1mg9['indexOf']('>', gnmb19 + 0x3),
              c5fk3 = n1mg9['substring'](gnmb19 + 0x2, v0o2),
              trwla = x8u9['pop']();v0o2 < 0x0 ? (c5fk3 = n1mg9['substring'](gnmb19 + 0x2)['replace'](/[\s<].*/, ''), _zv4ys['error']('end tag name: ' + c5fk3 + ' is not complete:' + trwla['tagName']), v0o2 = gnmb19 + 0x1 + c5fk3['length']) : c5fk3['match'](/\s</) && (c5fk3 = c5fk3['replace'](/[\s<].*/, ''), _zv4ys['error']('end tag name: ' + c5fk3 + ' maybe not complete'), v0o2 = gnmb19 + 0x1 + c5fk3['length']);var wt$lda = trwla['localNSMap'],
              nbd1ah = trwla['tagName'] == c5fk3;if (nbd1ah || trwla['tagName'] && trwla['tagName']['toLowerCase']() == c5fk3['toLowerCase']()) {
            if (fq7e['endElement'](trwla['uri'], trwla['localName'], c5fk3), wt$lda) {
              for (var oef37q in wt$lda) fq7e['endPrefixMapping'](oef37q);
            }nbd1ah || _zv4ys['fatalError']('end tag name: ' + c5fk3 + ' is not match the current start tagName:' + trwla['tagName']);
          } else x8u9['push'](trwla);v0o2++;break;case '?':
          batlh && _yzsvj(gnmb19), v0o2 = hv_ysjz(n1mg9, gnmb19, fq7e);break;case '!':
          batlh && _yzsvj(gnmb19), v0o2 = hq2eo0(n1mg9, gnmb19, fq7e, _zv4ys);break;default:
          batlh && _yzsvj(gnmb19);var _v4z2s = new hk3qf7c(),
              at$lwr = x8u9[x8u9['length'] - 0x1]['currentNSMap'],
              v0o2 = he3o(n1mg9, gnmb19, _v4z2s, at$lwr, a1dh, _zv4ys),
              qck7f3 = _v4z2s['length'];if (!_v4z2s['closed'] && hix68u(n1mg9, v0o2, _v4z2s['tagName'], q420o) && (_v4z2s['closed'] = !0x0, ciu5k['nbsp'] || _zv4ys['warning']('unclosed xml attribute')), batlh && qck7f3) {
            for (var e4vo02 = heq240o(batlh, {}), tan = 0x0; tan < qck7f3; tan++) {
              var i85cuk = _v4z2s[tan];_yzsvj(i85cuk['offset']), i85cuk['locator'] = heq240o(batlh, {});
            }fq7e['locator'] = e4vo02, hzvy4_s(_v4z2s, fq7e, at$lwr) && x8u9['push'](_v4z2s), fq7e['locator'] = batlh;
          } else hzvy4_s(_v4z2s, fq7e, at$lwr) && x8u9['push'](_v4z2s);'http://www.w3.org/1999/xhtml' !== _v4z2s['uri'] || _v4z2s['closed'] ? v0o2++ : v0o2 = hbnh1md(n1mg9, v0o2, _v4z2s['tagName'], a1dh, fq7e);}
    } catch (x1g6m9) {
      _zv4ys['error']('element parse error: ' + x1g6m9), v0o2 = -0x1;
    }mnhdb < v0o2 ? mnhdb = v0o2 : talwh(Math['max'](gnmb19, mnhdb) + 0x1);
  }
}function heq240o(o3q7ef, vs_y4) {
  return vs_y4['lineNumber'] = o3q7ef['lineNumber'], vs_y4['columnNumber'] = o3q7ef['columnNumber'], vs_y4;
}function he3o(_4vz2, zy_jvs, k7fqc3, ve420, r$lwat, fkq37) {
  for (var e032, sv = ++zy_jvs, l$ = hzvs042;;) {
    var hbalt = _4vz2['charAt'](sv);switch (hbalt) {case '=':
        if (l$ === hoev02) e032 = _4vz2['slice'](zy_jvs, sv), l$ = ho40qe;else {
          if (l$ !== hq7fck) throw new Error('attribute equal must after attrName');l$ = ho40qe;
        }break;case '\x27':case '\x22':
        if (l$ === ho40qe || l$ === hoev02) {
          if (l$ === hoev02 && (fkq37['warning']('attribute value must after "="'), e032 = _4vz2['slice'](zy_jvs, sv)), !(0x0 < (sv = _4vz2['indexOf'](hbalt, zy_jvs = sv + 0x1)))) throw new Error('attribute value no end \'' + hbalt + '\' match');n1bhm = _4vz2['slice'](zy_jvs, sv)['replace'](/&#?\w+;/g, r$lwat), k7fqc3['add'](e032, n1bhm, zy_jvs - 0x1), l$ = hoqc3;
        } else {
          if (l$ != hhtawdl) throw new Error('attribute value must after "="');n1bhm = _4vz2['slice'](zy_jvs, sv)['replace'](/&#?\w+;/g, r$lwat), k7fqc3['add'](e032, n1bhm, zy_jvs), fkq37['warning']('attribute "' + e032 + '" missed start quot(' + hbalt + ')!!'), zy_jvs = sv + 0x1, l$ = hoqc3;
        }break;case '/':
        switch (l$) {case hzvs042:
            k7fqc3['setTagName'](_4vz2['slice'](zy_jvs, sv));case hoqc3:case hvzs_y4:case hqo302:
            l$ = hqo302, k7fqc3['closed'] = !0x0;case hhtawdl:case hoev02:case hq7fck:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fkq37['error']('unexpected end of input'), l$ == hzvs042 && k7fqc3['setTagName'](_4vz2['slice'](zy_jvs, sv)), sv;case '>':
        switch (l$) {case hzvs042:
            k7fqc3['setTagName'](_4vz2['slice'](zy_jvs, sv));case hoqc3:case hvzs_y4:case hqo302:
            break;case hhtawdl:case hoev02:
            '/' === (n1bhm = _4vz2['slice'](zy_jvs, sv))['slice'](-0x1) && (k7fqc3['closed'] = !0x0, n1bhm = n1bhm['slice'](0x0, -0x1));case hq7fck:
            l$ === hq7fck && (n1bhm = e032), l$ == hhtawdl ? (fkq37['warning']('attribute "' + n1bhm + '" missed quot(")!!'), k7fqc3['add'](e032, n1bhm['replace'](/&#?\w+;/g, r$lwat), zy_jvs)) : ('http://www.w3.org/1999/xhtml' === ve420[''] && n1bhm['match'](/^(?:disabled|checked|selected)$/i) || fkq37['warning']('attribute "' + n1bhm + '" missed value!! "' + n1bhm + '" instead!!'), k7fqc3['add'](n1bhm, n1bhm, zy_jvs));break;case ho40qe:
            throw new Error('attribute value missed!!');}return sv;case '\u0080':
        hbalt = '\x20';default:
        if (hbalt <= '\x20') switch (l$) {case hzvs042:
            k7fqc3['setTagName'](_4vz2['slice'](zy_jvs, sv)), l$ = hvzs_y4;break;case hoev02:
            e032 = _4vz2['slice'](zy_jvs, sv), l$ = hq7fck;break;case hhtawdl:
            var n1bhm = _4vz2['slice'](zy_jvs, sv)['replace'](/&#?\w+;/g, r$lwat);fkq37['warning']('attribute "' + n1bhm + '" missed quot(")!!'), k7fqc3['add'](e032, n1bhm, zy_jvs);case hoqc3:
            l$ = hvzs_y4;} else switch (l$) {case hq7fck:
            k7fqc3['tagName'], 'http://www.w3.org/1999/xhtml' === ve420[''] && e032['match'](/^(?:disabled|checked|selected)$/i) || fkq37['warning']('attribute "' + e032 + '" missed value!! "' + e032 + '" instead2!!'), k7fqc3['add'](e032, e032, zy_jvs), zy_jvs = sv, l$ = hoev02;break;case hoqc3:
            fkq37['warning']('attribute space is required"' + e032 + '\x22!!');case hvzs_y4:
            l$ = hoev02, zy_jvs = sv;break;case ho40qe:
            l$ = hhtawdl, zy_jvs = sv;break;case hqo302:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}sv++;
  }
}function hzvy4_s(_4z2s, $talr, z20vs) {
  for (var dhbt = _4z2s['tagName'], kci5u = null, ofq37c = _4z2s['length']; ofq37c--;) {
    var dahnb1 = _4z2s[ofq37c],
        wd$alt = dahnb1['qName'],
        z_jsvy = dahnb1['value'],
        dthw;wd$alt = 0x0 < (l$awt = wd$alt['indexOf'](':')) ? (f85cu = dahnb1['prefix'] = wd$alt['slice'](0x0, l$awt), dthw = wd$alt['slice'](l$awt + 0x1), 'xmlns' === f85cu && dthw) : (f85cu = null, 'xmlns' === (dthw = wd$alt) && ''), dahnb1['localName'] = dthw, !0x1 !== wd$alt && (null == kci5u && (kci5u = {}, hc58i(z20vs, z20vs = {})), z20vs[wd$alt] = kci5u[wd$alt] = z_jsvy, dahnb1['uri'] = 'http://www.w3.org/2000/xmlns/', $talr['startPrefixMapping'](wd$alt, z_jsvy));
  }for (ofq37c = _4z2s['length']; ofq37c--;) (f85cu = (dahnb1 = _4z2s[ofq37c])['prefix']) && ('xml' === f85cu && (dahnb1['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== f85cu && (dahnb1['uri'] = z20vs[f85cu || '']));var l$awt;dthw = 0x0 < (l$awt = dhbt['indexOf'](':')) ? (f85cu = _4z2s['prefix'] = dhbt['slice'](0x0, l$awt), _4z2s['localName'] = dhbt['slice'](l$awt + 0x1)) : (f85cu = null, _4z2s['localName'] = dhbt);var n1hbm = _4z2s['uri'] = z20vs[f85cu || ''];if ($talr['startElement'](n1hbm, dthw, dhbt, _4z2s), !_4z2s['closed']) return _4z2s['currentNSMap'] = z20vs, _4z2s['localNSMap'] = kci5u, !0x0;if ($talr['endElement'](n1hbm, dthw, dhbt), kci5u) {
    for (var f85cu in kci5u) $talr['endPrefixMapping'](f85cu);
  }
}function hbnh1md(kcf753, xm1g69, bdt, hanbd1, z4_2) {
  if (/^(?:script|textarea)$/i['test'](bdt)) {
    var xu856i = kcf753['indexOf']('</' + bdt + '>', xm1g69),
        kcf753 = kcf753['substring'](xm1g69 + 0x1, xu856i);if (/[&<]/['test'](kcf753)) return (/^script$/i['test'](bdt) || (kcf753 = kcf753['replace'](/&#?\w+;/g, hanbd1)), z4_2['characters'](kcf753, 0x0, kcf753['length']), xu856i
    );
  }return xm1g69 + 0x1;
}function hix68u(o3fqe7, hbn1da, ck75f8, v_sz4) {
  var e3qof7 = v_sz4[ck75f8];return null == e3qof7 && ((e3qof7 = o3fqe7['lastIndexOf']('</' + ck75f8 + '>')) < hbn1da && (e3qof7 = o3fqe7['lastIndexOf']('</' + ck75f8)), v_sz4[ck75f8] = e3qof7), e3qof7 < hbn1da;
}function hc58i(wthad, htlwda) {
  for (var dbanth in wthad) htlwda[dbanth] = wthad[dbanth];
}function hq2eo0(y_jvz, z_jvys, f57kc, kf8c57) {
  var _vjyz = y_jvz['charAt'](z_jvys + 0x2);if ('-' === _vjyz) return '-' !== y_jvz['charAt'](z_jvys + 0x3) ? -0x1 : z_jvys < (oc37f = y_jvz['indexOf']('-->', z_jvys + 0x4)) ? (f57kc['comment'](y_jvz, z_jvys + 0x4, oc37f - z_jvys - 0x4), oc37f + 0x3) : (kf8c57['error']('Unclosed comment'), -0x1);if ('CDATA[' == y_jvz['substr'](z_jvys + 0x3, 0x6)) {
    var oc37f = y_jvz['indexOf'](']]>', z_jvys + 0x9);return f57kc['startCDATA'](), f57kc['characters'](y_jvz, z_jvys + 0x9, oc37f - z_jvys - 0x9), f57kc['endCDATA'](), oc37f + 0x3;
  }_vjyz = ha1bn(y_jvz, z_jvys), kf8c57 = _vjyz['length'];if (0x1 < kf8c57 && /!doctype/i['test'](_vjyz[0x0][0x0])) return oc37f = _vjyz[0x1][0x0], y_jvz = 0x3 < kf8c57 && /^public$/i['test'](_vjyz[0x2][0x0]) && _vjyz[0x3][0x0], z_jvys = 0x4 < kf8c57 && _vjyz[0x4][0x0], kf8c57 = _vjyz[kf8c57 - 0x1], (f57kc['startDTD'](oc37f, y_jvz && y_jvz['replace'](/^(['"])(.*?)\1$/, '$2'), z_jvys && z_jvys['replace'](/^(['"])(.*?)\1$/, '$2')), f57kc['endDTD'](), kf8c57['index'] + kf8c57[0x0]['length']);return -0x1;
}function hv_ysjz(eqo42, e032oq, bhda1n) {
  var g1xnm = eqo42['indexOf']('?>', e032oq);if (g1xnm) return e032oq = eqo42['substring'](e032oq, g1xnm)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), e032oq ? (e032oq[0x0]['length'], bhda1n['processingInstruction'](e032oq[0x1], e032oq[0x2]), g1xnm + 0x2) : -0x1;return -0x1;
}function hk3qf7c() {}function hk87(g91nx, q70o) {
  return g91nx['__proto__'] = q70o, g91nx;
}function ha1bn(i86ux, _ysvz) {
  var gn1bmh,
      q32o = [],
      c3f7qo = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (c3f7qo['lastIndex'] = _ysvz, c3f7qo['exec'](i86ux); gn1bmh = c3f7qo['exec'](i86ux);) if (q32o['push'](gn1bmh), gn1bmh[0x1]) return q32o;
}var hthbald = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    hzsjy = new RegExp('[\\-\\.0-9' + hthbald['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    hwtdla$ = new RegExp('^' + hthbald['source'] + hzsjy['source'] + '*(?::' + hthbald['source'] + hzsjy['source'] + '*)?$'),
    hzvs042 = 0x0,
    hoev02 = 0x1,
    hq7fck = 0x2,
    ho40qe = 0x3,
    hhtawdl = 0x4,
    hoqc3 = 0x5,
    hvzs_y4 = 0x6,
    hqo302 = 0x7;habtndh['prototype'] = { 'parse': function (latbhd, bgmn1, h1mnbg) {
    var s42 = this['domBuilder'];s42['startDocument'](), hc58i(bgmn1, bgmn1 = {}), hd1hbn(latbhd, bgmn1, h1mnbg, s42, this['errorHandler']), s42['endDocument']();
  } }, hk3qf7c['prototype'] = { 'setTagName': function (k8cuf) {
    if (!hwtdla$['test'](k8cuf)) throw new Error('invalid tagName:' + k8cuf);this['tagName'] = k8cuf;
  }, 'add': function (v4zs, fo73, wl$a) {
    if (!hwtdla$['test'](v4zs)) throw new Error('invalid attribute:' + v4zs);this[this['length']++] = { 'qName': v4zs, 'value': fo73, 'offset': wl$a };
  }, 'length': 0x0, 'getLocalName': function (z_ysjv) {
    return this[z_ysjv]['localName'];
  }, 'getLocator': function (zs2_4v) {
    return this[zs2_4v]['locator'];
  }, 'getQName': function (co7f) {
    return this[co7f]['qName'];
  }, 'getURI': function (m96ix) {
    return this[m96ix]['uri'];
  }, 'getValue': function (qo73) {
    return this[qo73]['value'];
  } }, hk87({}, hk87['prototype']) instanceof hk87 || (hk87 = function (hn1ab, qc37of) {
  function k8c5f() {}for (qc37of in k8c5f['prototype'] = qc37of, k8c5f = new k8c5f(), hn1ab) k8c5f[qc37of] = hn1ab[qc37of];return k8c5f;
}), exports['XMLReader'] = habtndh;