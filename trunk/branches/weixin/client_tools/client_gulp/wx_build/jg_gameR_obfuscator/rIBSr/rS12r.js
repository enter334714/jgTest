var I = wx.$R;
function r_dn5pfc() {}function r_ok8wi(a91$b, c_n5h6, zts23, hb1a_u, jzio2) {
  function rq7m($b4a1) {
    if ($b4a1 > 0xffff) {
      $b4a1 -= 0x10000;var au91 = 0xd800 + ($b4a1 >> 0xa),
          myw8ok = 0xdc00 + (0x3ff & $b4a1);return String['fromCharCode'](au91, myw8ok);
    }return String['fromCharCode']($b4a1);
  }function eg7dq(t2zsl) {
    var dn5c6f = t2zsl['slice'](0x1, -0x1);return dn5c6f in zts23 ? zts23[dn5c6f] : '#' === dn5c6f['charAt'](0x0) ? rq7m(parseInt(dn5c6f['substr'](0x1)['replace']('x', '0x'))) : (jzio2['error']('entity not found:' + t2zsl), t2zsl);
  }function a1$b4(n5fhc6) {
    if (n5fhc6 > _6ch5n) {
      var iyko8 = a91$b['substring'](_6ch5n, n5fhc6)['replace'](/&#?\w+;/g, eg7dq);pncdfq && k8wyio(_6ch5n), hb1a_u['characters'](iyko8, 0x0, n5fhc6 - _6ch5n), _6ch5n = n5fhc6;
    }
  }function k8wyio(kji8y, hn5_c6) {
    for (; kji8y >= gmr7we && (hn5_c6 = lv3s0t['exec'](a91$b));) oi8y = hn5_c6['index'], gmr7we = oi8y + hn5_c6[0x0]['length'], pncdfq['lineNumber']++;pncdfq['columnNumber'] = kji8y - oi8y + 0x1;
  }for (var oi8y = 0x0, gmr7we = 0x0, lv3s0t = /.*(?:\r\n?|\n)|.*$/g, pncdfq = hb1a_u['locator'], m8ywkr = [{ 'currentNSMap': c_n5h6 }], ywm = {}, _6ch5n = 0x0;;) {
    try {
      var h6u_5 = a91$b['indexOf']('<', _6ch5n);if (0x0 > h6u_5) {
        if (!a91$b['substr'](_6ch5n)['match'](/^\s*$/)) {
          var wrmk87 = hb1a_u['doc'],
              $bu1a9 = wrmk87['createTextNode'](a91$b['substr'](_6ch5n));wrmk87['appendChild']($bu1a9), hb1a_u['currentElement'] = $bu1a9;
        }return;
      }switch (h6u_5 > _6ch5n && a1$b4(h6u_5), a91$b['charAt'](h6u_5 + 0x1)) {case '/':
          var wo = a91$b['indexOf']('>', h6u_5 + 0x3),
              pdnqfc = a91$b['substring'](h6u_5 + 0x2, wo),
              jiz2xs = m8ywkr['pop']();0x0 > wo ? (pdnqfc = a91$b['substring'](h6u_5 + 0x2)['replace'](/[\s<].*/, ''), jzio2['error']('end tag name: ' + pdnqfc + ' is not complete:' + jiz2xs['tagName']), wo = h6u_5 + 0x1 + pdnqfc['length']) : pdnqfc['match'](/\s</) && (pdnqfc = pdnqfc['replace'](/[\s<].*/, ''), jzio2['error']('end tag name: ' + pdnqfc + ' maybe not complete'), wo = h6u_5 + 0x1 + pdnqfc['length']);var gdqpe7 = jiz2xs['localNSMap'],
              vszl3t = jiz2xs['tagName'] == pdnqfc,
              oywm = vszl3t || jiz2xs['tagName'] && jiz2xs['tagName']['toLowerCase']() == pdnqfc['toLowerCase']();if (oywm) {
            if (hb1a_u['endElement'](jiz2xs['uri'], jiz2xs['localName'], pdnqfc), gdqpe7) {
              for (var _5h1u6 in gdqpe7) hb1a_u['endPrefixMapping'](_5h1u6);
            }vszl3t || jzio2['fatalError']('end tag name: ' + pdnqfc + ' is not match the current start tagName:' + jiz2xs['tagName']);
          } else m8ywkr['push'](jiz2xs);wo++;break;case '?':
          pncdfq && k8wyio(h6u_5), wo = r_szx(a91$b, h6u_5, hb1a_u);break;case '!':
          pncdfq && k8wyio(h6u_5), wo = r_u$_1a(a91$b, h6u_5, hb1a_u, jzio2);break;default:
          pncdfq && k8wyio(h6u_5);var qgmre = new r_qpcnfd(),
              _$1au = m8ywkr[m8ywkr['length'] - 0x1]['currentNSMap'],
              wo = r_km7rw(a91$b, h6u_5, qgmre, _$1au, eg7dq, jzio2),
              s3x2zt = qgmre['length'];if (!qgmre['closed'] && r_stxzj(a91$b, wo, qgmre['tagName'], ywm) && (qgmre['closed'] = !0x0, zts23['nbsp'] || jzio2['warning']('unclosed xml attribute')), pncdfq && s3x2zt) {
            for (var i2jxoy = r_tvs(pncdfq, {}), ab$941 = 0x0; s3x2zt > ab$941; ab$941++) {
              var cnqd = qgmre[ab$941];k8wyio(cnqd['offset']), cnqd['locator'] = r_tvs(pncdfq, {});
            }hb1a_u['locator'] = i2jxoy, r_nd6cf(qgmre, hb1a_u, _$1au) && m8ywkr['push'](qgmre), hb1a_u['locator'] = pncdfq;
          } else r_nd6cf(qgmre, hb1a_u, _$1au) && m8ywkr['push'](qgmre);'http://www.w3.org/1999/xhtml' !== qgmre['uri'] || qgmre['closed'] ? wo++ : wo = r_a$b941(a91$b, wo, qgmre['tagName'], eg7dq, hb1a_u);}
    } catch (ts3x2z) {
      jzio2['error']('element parse error: ' + ts3x2z), wo = -0x1;
    }wo > _6ch5n ? _6ch5n = wo : a1$b4(Math['max'](h6u_5, _6ch5n) + 0x1);
  }
}function r_tvs(qpnc, uab$1_) {
  return uab$1_['lineNumber'] = qpnc['lineNumber'], uab$1_['columnNumber'] = qpnc['columnNumber'], uab$1_;
}function r_km7rw(o8ykwm, omy8w, r7gwk, s0tv3l, peqgd7, gfdpe) {
  for (var r7geq, w8kmyo, mokyw = ++omy8w, em7wgr = r_m8wr7;;) {
    var qpnd = o8ykwm['charAt'](mokyw);switch (qpnd) {case '=':
        if (em7wgr === r_nh5_) r7geq = o8ykwm['slice'](omy8w, mokyw), em7wgr = r_xyji;else {
          if (em7wgr !== r_gperq) throw new Error('attribute equal must after attrName');em7wgr = r_xyji;
        }break;case '\x27':case '\x22':
        if (em7wgr === r_xyji || em7wgr === r_nh5_) {
          if (em7wgr === r_nh5_ && (gfdpe['warning']('attribute value must after "="'), r7geq = o8ykwm['slice'](omy8w, mokyw)), omy8w = mokyw + 0x1, mokyw = o8ykwm['indexOf'](qpnd, omy8w), !(mokyw > 0x0)) throw new Error('attribute value no end \'' + qpnd + '\' match');w8kmyo = o8ykwm['slice'](omy8w, mokyw)['replace'](/&#?\w+;/g, peqgd7), r7gwk['add'](r7geq, w8kmyo, omy8w - 0x1), em7wgr = r_nf65h;
        } else {
          if (em7wgr != r_r7eqg) throw new Error('attribute value must after "="');w8kmyo = o8ykwm['slice'](omy8w, mokyw)['replace'](/&#?\w+;/g, peqgd7), r7gwk['add'](r7geq, w8kmyo, omy8w), gfdpe['warning']('attribute "' + r7geq + '" missed start quot(' + qpnd + ')!!'), omy8w = mokyw + 0x1, em7wgr = r_nf65h;
        }break;case '/':
        switch (em7wgr) {case r_m8wr7:
            r7gwk['setTagName'](o8ykwm['slice'](omy8w, mokyw));case r_nf65h:case r_wmg7r:case r_ok8:
            em7wgr = r_ok8, r7gwk['closed'] = !0x0;case r_r7eqg:case r_nh5_:case r_gperq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return gfdpe['error']('unexpected end of input'), em7wgr == r_m8wr7 && r7gwk['setTagName'](o8ykwm['slice'](omy8w, mokyw)), mokyw;case '>':
        switch (em7wgr) {case r_m8wr7:
            r7gwk['setTagName'](o8ykwm['slice'](omy8w, mokyw));case r_nf65h:case r_wmg7r:case r_ok8:
            break;case r_r7eqg:case r_nh5_:
            w8kmyo = o8ykwm['slice'](omy8w, mokyw), '/' === w8kmyo['slice'](-0x1) && (r7gwk['closed'] = !0x0, w8kmyo = w8kmyo['slice'](0x0, -0x1));case r_gperq:
            em7wgr === r_gperq && (w8kmyo = r7geq), em7wgr == r_r7eqg ? (gfdpe['warning']('attribute "' + w8kmyo + '" missed quot(")!!'), r7gwk['add'](r7geq, w8kmyo['replace'](/&#?\w+;/g, peqgd7), omy8w)) : ('http://www.w3.org/1999/xhtml' === s0tv3l[''] && w8kmyo['match'](/^(?:disabled|checked|selected)$/i) || gfdpe['warning']('attribute "' + w8kmyo + '" missed value!! "' + w8kmyo + '" instead!!'), r7gwk['add'](w8kmyo, w8kmyo, omy8w));break;case r_xyji:
            throw new Error('attribute value missed!!');}return mokyw;case '\u0080':
        qpnd = '\x20';default:
        if ('\x20' >= qpnd) switch (em7wgr) {case r_m8wr7:
            r7gwk['setTagName'](o8ykwm['slice'](omy8w, mokyw)), em7wgr = r_wmg7r;break;case r_nh5_:
            r7geq = o8ykwm['slice'](omy8w, mokyw), em7wgr = r_gperq;break;case r_r7eqg:
            var w8kmyo = o8ykwm['slice'](omy8w, mokyw)['replace'](/&#?\w+;/g, peqgd7);gfdpe['warning']('attribute "' + w8kmyo + '" missed quot(")!!'), r7gwk['add'](r7geq, w8kmyo, omy8w);case r_nf65h:
            em7wgr = r_wmg7r;} else switch (em7wgr) {case r_gperq:
            {
              r7gwk['tagName'];
            }'http://www.w3.org/1999/xhtml' === s0tv3l[''] && r7geq['match'](/^(?:disabled|checked|selected)$/i) || gfdpe['warning']('attribute "' + r7geq + '" missed value!! "' + r7geq + '" instead2!!'), r7gwk['add'](r7geq, r7geq, omy8w), omy8w = mokyw, em7wgr = r_nh5_;break;case r_nf65h:
            gfdpe['warning']('attribute space is required"' + r7geq + '\x22!!');case r_wmg7r:
            em7wgr = r_nh5_, omy8w = mokyw;break;case r_xyji:
            em7wgr = r_r7eqg, omy8w = mokyw;break;case r_ok8:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}mokyw++;
  }
}function r_nd6cf(l03tvs, zxs2tj, ixzo2) {
  for (var krwy = l03tvs['tagName'], uh6_1a = null, dn5pcf = l03tvs['length']; dn5pcf--;) {
    var rkym = l03tvs[dn5pcf],
        x8joi = rkym['qName'],
        l3ts0 = rkym['value'],
        ozj2x = x8joi['indexOf'](':');if (ozj2x > 0x0) var pcfd = rkym['prefix'] = x8joi['slice'](0x0, ozj2x),
        zix2o = x8joi['slice'](ozj2x + 0x1),
        a9$b = 'xmlns' === pcfd && zix2o;else zix2o = x8joi, pcfd = null, a9$b = 'xmlns' === x8joi && '';rkym['localName'] = zix2o, a9$b !== !0x1 && (null == uh6_1a && (uh6_1a = {}, r_qgdf(ixzo2, ixzo2 = {})), ixzo2[a9$b] = uh6_1a[a9$b] = l3ts0, rkym['uri'] = 'http://www.w3.org/2000/xmlns/', zxs2tj['startPrefixMapping'](a9$b, l3ts0));
  }for (var dn5pcf = l03tvs['length']; dn5pcf--;) {
    rkym = l03tvs[dn5pcf];var pcfd = rkym['prefix'];pcfd && ('xml' === pcfd && (rkym['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pcfd && (rkym['uri'] = ixzo2[pcfd || '']));
  }var ozj2x = krwy['indexOf'](':');ozj2x > 0x0 ? (pcfd = l03tvs['prefix'] = krwy['slice'](0x0, ozj2x), zix2o = l03tvs['localName'] = krwy['slice'](ozj2x + 0x1)) : (pcfd = null, zix2o = l03tvs['localName'] = krwy);var pfncqd = l03tvs['uri'] = ixzo2[pcfd || ''];if (zxs2tj['startElement'](pfncqd, zix2o, krwy, l03tvs), !l03tvs['closed']) return l03tvs['currentNSMap'] = ixzo2, l03tvs['localNSMap'] = uh6_1a, !0x0;if (zxs2tj['endElement'](pfncqd, zix2o, krwy), uh6_1a) {
    for (pcfd in uh6_1a) zxs2tj['endPrefixMapping'](pcfd);
  }
}function r_a$b941(pgdfqe, qrgep, ki8jy, u5_c6, me7rgq) {
  if (/^(?:script|textarea)$/i['test'](ki8jy)) {
    var x8oi = pgdfqe['indexOf']('</' + ki8jy + '>', qrgep),
        mok8yw = pgdfqe['substring'](qrgep + 0x1, x8oi);if (/[&<]/['test'](mok8yw)) return (/^script$/i['test'](ki8jy) ? (me7rgq['characters'](mok8yw, 0x0, mok8yw['length']), x8oi) : (mok8yw = mok8yw['replace'](/&#?\w+;/g, u5_c6), me7rgq['characters'](mok8yw, 0x0, mok8yw['length']), x8oi)
    );
  }return qrgep + 0x1;
}function r_stxzj(pd5cf, rqeg, yxoij, iszjx) {
  var zsx3t = iszjx[yxoij];return null == zsx3t && (zsx3t = pd5cf['lastIndexOf']('</' + yxoij + '>'), rqeg > zsx3t && (zsx3t = pd5cf['lastIndexOf']('</' + yxoij)), iszjx[yxoij] = zsx3t), rqeg > zsx3t;
}function r_qgdf(uha61_, ijy2) {
  for (var gewrm7 in uha61_) ijy2[gewrm7] = uha61_[gewrm7];
}function r_u$_1a(yo2xi, u6c, qefdpn, h6u1_) {
  var omwk = yo2xi['charAt'](u6c + 0x2);switch (omwk) {case '-':
      if ('-' === yo2xi['charAt'](u6c + 0x3)) {
        var sz2tl3 = yo2xi['indexOf']('-->', u6c + 0x4);return sz2tl3 > u6c ? (qefdpn['comment'](yo2xi, u6c + 0x4, sz2tl3 - u6c - 0x4), sz2tl3 + 0x3) : (h6u1_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == yo2xi['substr'](u6c + 0x3, 0x6)) {
        var sz2tl3 = yo2xi['indexOf'](']]>', u6c + 0x9);return qefdpn['startCDATA'](), qefdpn['characters'](yo2xi, u6c + 0x9, sz2tl3 - u6c - 0x9), qefdpn['endCDATA'](), sz2tl3 + 0x3;
      }var vs30tl = r_ijx2o(yo2xi, u6c),
          gemr = vs30tl['length'];if (gemr > 0x1 && /!doctype/i['test'](vs30tl[0x0][0x0])) {
        var b_uh = vs30tl[0x1][0x0],
            v3l0t = gemr > 0x3 && /^public$/i['test'](vs30tl[0x2][0x0]) && vs30tl[0x3][0x0],
            iwky8 = gemr > 0x4 && vs30tl[0x4][0x0],
            cf56n = vs30tl[gemr - 0x1];return qefdpn['startDTD'](b_uh, v3l0t && v3l0t['replace'](/^(['"])(.*?)\1$/, '$2'), iwky8 && iwky8['replace'](/^(['"])(.*?)\1$/, '$2')), qefdpn['endDTD'](), cf56n['index'] + cf56n[0x0]['length'];
      }}return -0x1;
}function r_szx(mgqe7r, qd7gp, dcqn) {
  var eqnfd = mgqe7r['indexOf']('?>', qd7gp);if (eqnfd) {
    var hu1_5 = mgqe7r['substring'](qd7gp, eqnfd)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hu1_5) {
      {
        hu1_5[0x0]['length'];
      }return dcqn['processingInstruction'](hu1_5[0x1], hu1_5[0x2]), eqnfd + 0x2;
    }return -0x1;
  }return -0x1;
}function r_qpcnfd() {}function r_jxtzs2(gq7rp, $uba_1) {
  return gq7rp['__proto__'] = $uba_1, gq7rp;
}function r_ijx2o($b4a, f56nhc) {
  var mwrg7k,
      ox8yij = [],
      dn5fc = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dn5fc['lastIndex'] = f56nhc, dn5fc['exec']($b4a); mwrg7k = dn5fc['exec']($b4a);) if (ox8yij['push'](mwrg7k), mwrg7k[0x1]) return ox8yij;
}var r_ox2yj = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    r_pgeqr7 = new RegExp('[\\-\\.0-9' + r_ox2yj['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    r__5hu16 = new RegExp('^' + r_ox2yj['source'] + r_pgeqr7['source'] + '*(?::' + r_ox2yj['source'] + r_pgeqr7['source'] + '*)?$'),
    r_m8wr7 = 0x0,
    r_nh5_ = 0x1,
    r_gperq = 0x2,
    r_xyji = 0x3,
    r_r7eqg = 0x4,
    r_nf65h = 0x5,
    r_wmg7r = 0x6,
    r_ok8 = 0x7;r_dn5pfc['prototype'] = { 'parse': function (qrge7p, dcf56n, a$_ub1) {
    var deg7pq = this['domBuilder'];deg7pq['startDocument'](), r_qgdf(dcf56n, dcf56n = {}), r_ok8wi(qrge7p, dcf56n, a$_ub1, deg7pq, this['errorHandler']), deg7pq['endDocument']();
  } }, r_qpcnfd['prototype'] = { 'setTagName': function (ba914) {
    if (!r__5hu16['test'](ba914)) throw new Error('invalid tagName:' + ba914);this['tagName'] = ba914;
  }, 'add': function (fc56, mwkyr8, cn6_h) {
    if (!r__5hu16['test'](fc56)) throw new Error('invalid attribute:' + fc56);this[this['length']++] = { 'qName': fc56, 'value': mwkyr8, 'offset': cn6_h };
  }, 'length': 0x0, 'getLocalName': function (vs0l3t) {
    return this[vs0l3t]['localName'];
  }, 'getLocator': function (rkwy8m) {
    return this[rkwy8m]['locator'];
  }, 'getQName': function (pqendf) {
    return this[pqendf]['qName'];
  }, 'getURI': function (rymk8) {
    return this[rymk8]['uri'];
  }, 'getValue': function (egpqr) {
    return this[egpqr]['value'];
  } }, r_jxtzs2({}, r_jxtzs2['prototype']) instanceof r_jxtzs2 || (r_jxtzs2 = function (rqmg, a_ub1) {
  function xzst2() {}xzst2['prototype'] = a_ub1, xzst2 = new xzst2();for (a_ub1 in rqmg) xzst2[a_ub1] = rqmg[a_ub1];return xzst2;
}), exports['XMLReader'] = r_dn5pfc;