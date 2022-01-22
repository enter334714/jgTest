var I1 = wx.h$;
function gb05qk() {}function gu43na1(_2f$9, ze2_h, rqby5o, y5vroq, iun43) {
  function htpce(h6tdc) {
    if (h6tdc > 0xffff) {
      h6tdc -= 0x10000;var n1u3 = 0xd800 + (h6tdc >> 0xa),
          ryoj7v = 0xdc00 + (0x3ff & h6tdc);return String['fromCharCode'](n1u3, ryoj7v);
    }return String['fromCharCode'](h6tdc);
  }function or5yv(i3nu1) {
    var i1n3u4 = i3nu1['slice'](0x1, -0x1);return i1n3u4 in rqby5o ? rqby5o[i1n3u4] : '#' === i1n3u4['charAt'](0x0) ? htpce(parseInt(i1n3u4['substr'](0x1)['replace']('x', '0x'))) : (iun43['error']('entity not found:' + i3nu1), i3nu1);
  }function dtgc(u14al) {
    if (u14al > hce8z) {
      var qkgb = _2f$9['substring'](hce8z, u14al)['replace'](/&#?\w+;/g, or5yv);sw$2f9 && gt8(hce8z), y5vroq['characters'](qkgb, 0x0, u14al - hce8z), hce8z = u14al;
    }
  }function gt8(kb, y0oqb) {
    for (; kb >= i1xj && (y0oqb = okb05q['exec'](_2f$9));) d6g0 = y0oqb['index'], i1xj = d6g0 + y0oqb[0x0]['length'], sw$2f9['lineNumber']++;sw$2f9['columnNumber'] = kb - d6g0 + 0x1;
  }for (var d6g0 = 0x0, i1xj = 0x0, okb05q = /.*(?:\r\n?|\n)|.*$/g, sw$2f9 = y5vroq['locator'], e92_w = [{ 'currentNSMap': ze2_h }], z_eth = {}, hce8z = 0x0;;) {
    try {
      var vrj7x = _2f$9['indexOf']('<', hce8z);if (0x0 > vrj7x) {
        if (!_2f$9['substr'](hce8z)['match'](/^\s*$/)) {
          var nxjv7i = y5vroq['doc'],
              b6kdg0 = nxjv7i['createTextNode'](_2f$9['substr'](hce8z));nxjv7i['appendChild'](b6kdg0), y5vroq['currentElement'] = b6kdg0;
        }return;
      }switch (vrj7x > hce8z && dtgc(vrj7x), _2f$9['charAt'](vrj7x + 0x1)) {case '/':
          var nxj7i1 = _2f$9['indexOf']('>', vrj7x + 0x3),
              qo5bk = _2f$9['substring'](vrj7x + 0x2, nxj7i1),
              _th = e92_w['pop']();0x0 > nxj7i1 ? (qo5bk = _2f$9['substring'](vrj7x + 0x2)['replace'](/[\s<].*/, ''), iun43['error']('end tag name: ' + qo5bk + ' is not complete:' + _th['tagName']), nxj7i1 = vrj7x + 0x1 + qo5bk['length']) : qo5bk['match'](/\s</) && (qo5bk = qo5bk['replace'](/[\s<].*/, ''), iun43['error']('end tag name: ' + qo5bk + ' maybe not complete'), nxj7i1 = vrj7x + 0x1 + qo5bk['length']);var nvx7ij = _th['localNSMap'],
              _ze2hp = _th['tagName'] == qo5bk,
              vxyrj7 = _ze2hp || _th['tagName'] && _th['tagName']['toLowerCase']() == qo5bk['toLowerCase']();if (vxyrj7) {
            if (y5vroq['endElement'](_th['uri'], _th['localName'], qo5bk), nvx7ij) {
              for (var s$2w9f in nvx7ij) y5vroq['endPrefixMapping'](s$2w9f);
            }_ze2hp || iun43['fatalError']('end tag name: ' + qo5bk + ' is not match the current start tagName:' + _th['tagName']);
          } else e92_w['push'](_th);nxj7i1++;break;case '?':
          sw$2f9 && gt8(vrj7x), nxj7i1 = gnvxji(_2f$9, vrj7x, y5vroq);break;case '!':
          sw$2f9 && gt8(vrj7x), nxj7i1 = ginv7(_2f$9, vrj7x, y5vroq, iun43);break;default:
          sw$2f9 && gt8(vrj7x);var f2$9_w = new gzp_th(),
              vxj7ry = e92_w[e92_w['length'] - 0x1]['currentNSMap'],
              nxj7i1 = gz_2he(_2f$9, vrj7x, f2$9_w, vxj7ry, or5yv, iun43),
              w9_2$ = f2$9_w['length'];if (!f2$9_w['closed'] && gnui431(_2f$9, nxj7i1, f2$9_w['tagName'], z_eth) && (f2$9_w['closed'] = !0x0, rqby5o['nbsp'] || iun43['warning']('unclosed xml attribute')), sw$2f9 && w9_2$) {
            for (var $_w29 = gvjinx(sw$2f9, {}), f2p9w = 0x0; w9_2$ > f2p9w; f2p9w++) {
              var wfs92 = f2$9_w[f2p9w];gt8(wfs92['offset']), wfs92['locator'] = gvjinx(sw$2f9, {});
            }y5vroq['locator'] = $_w29, gqkbo0(f2$9_w, y5vroq, vxj7ry) && e92_w['push'](f2$9_w), y5vroq['locator'] = sw$2f9;
          } else gqkbo0(f2$9_w, y5vroq, vxj7ry) && e92_w['push'](f2$9_w);'http://www.w3.org/1999/xhtml' !== f2$9_w['uri'] || f2$9_w['closed'] ? nxj7i1++ : nxj7i1 = gf$2sw(_2f$9, nxj7i1, f2$9_w['tagName'], or5yv, y5vroq);}
    } catch (tgd6c8) {
      iun43['error']('element parse error: ' + tgd6c8), nxj7i1 = -0x1;
    }nxj7i1 > hce8z ? hce8z = nxj7i1 : dtgc(Math['max'](vrj7x, hce8z) + 0x1);
  }
}function gvjinx(zh_pte, w_e29) {
  return w_e29['lineNumber'] = zh_pte['lineNumber'], w_e29['columnNumber'] = zh_pte['columnNumber'], w_e29;
}function gz_2he(y5rov, nji7xv, u4m3, ctz86, j7xnvi, n4x17i) {
  for (var kg0qb, ep92, v7jx = ++nji7xv, h8ct6d = gc6t8h;;) {
    var zt68 = y5rov['charAt'](v7jx);switch (zt68) {case '=':
        if (h8ct6d === gf2w_9$) kg0qb = y5rov['slice'](nji7xv, v7jx), h8ct6d = gtz8e;else {
          if (h8ct6d !== gbdk) throw new Error('attribute equal must after attrName');h8ct6d = gtz8e;
        }break;case '\x27':case '\x22':
        if (h8ct6d === gtz8e || h8ct6d === gf2w_9$) {
          if (h8ct6d === gf2w_9$ && (n4x17i['warning']('attribute value must after "="'), kg0qb = y5rov['slice'](nji7xv, v7jx)), nji7xv = v7jx + 0x1, v7jx = y5rov['indexOf'](zt68, nji7xv), !(v7jx > 0x0)) throw new Error('attribute value no end \'' + zt68 + '\' match');ep92 = y5rov['slice'](nji7xv, v7jx)['replace'](/&#?\w+;/g, j7xnvi), u4m3['add'](kg0qb, ep92, nji7xv - 0x1), h8ct6d = gzhpte;
        } else {
          if (h8ct6d != gyo5rbq) throw new Error('attribute value must after "="');ep92 = y5rov['slice'](nji7xv, v7jx)['replace'](/&#?\w+;/g, j7xnvi), u4m3['add'](kg0qb, ep92, nji7xv), n4x17i['warning']('attribute "' + kg0qb + '" missed start quot(' + zt68 + ')!!'), nji7xv = v7jx + 0x1, h8ct6d = gzhpte;
        }break;case '/':
        switch (h8ct6d) {case gc6t8h:
            u4m3['setTagName'](y5rov['slice'](nji7xv, v7jx));case gzhpte:case goqvyr:case gz2e_p:
            h8ct6d = gz2e_p, u4m3['closed'] = !0x0;case gyo5rbq:case gf2w_9$:case gbdk:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return n4x17i['error']('unexpected end of input'), h8ct6d == gc6t8h && u4m3['setTagName'](y5rov['slice'](nji7xv, v7jx)), v7jx;case '>':
        switch (h8ct6d) {case gc6t8h:
            u4m3['setTagName'](y5rov['slice'](nji7xv, v7jx));case gzhpte:case goqvyr:case gz2e_p:
            break;case gyo5rbq:case gf2w_9$:
            ep92 = y5rov['slice'](nji7xv, v7jx), '/' === ep92['slice'](-0x1) && (u4m3['closed'] = !0x0, ep92 = ep92['slice'](0x0, -0x1));case gbdk:
            h8ct6d === gbdk && (ep92 = kg0qb), h8ct6d == gyo5rbq ? (n4x17i['warning']('attribute "' + ep92 + '" missed quot(")!!'), u4m3['add'](kg0qb, ep92['replace'](/&#?\w+;/g, j7xnvi), nji7xv)) : ('http://www.w3.org/1999/xhtml' === ctz86[''] && ep92['match'](/^(?:disabled|checked|selected)$/i) || n4x17i['warning']('attribute "' + ep92 + '" missed value!! "' + ep92 + '" instead!!'), u4m3['add'](ep92, ep92, nji7xv));break;case gtz8e:
            throw new Error('attribute value missed!!');}return v7jx;case '\u0080':
        zt68 = '\x20';default:
        if ('\x20' >= zt68) switch (h8ct6d) {case gc6t8h:
            u4m3['setTagName'](y5rov['slice'](nji7xv, v7jx)), h8ct6d = goqvyr;break;case gf2w_9$:
            kg0qb = y5rov['slice'](nji7xv, v7jx), h8ct6d = gbdk;break;case gyo5rbq:
            var ep92 = y5rov['slice'](nji7xv, v7jx)['replace'](/&#?\w+;/g, j7xnvi);n4x17i['warning']('attribute "' + ep92 + '" missed quot(")!!'), u4m3['add'](kg0qb, ep92, nji7xv);case gzhpte:
            h8ct6d = goqvyr;} else switch (h8ct6d) {case gbdk:
            {
              u4m3['tagName'];
            }'http://www.w3.org/1999/xhtml' === ctz86[''] && kg0qb['match'](/^(?:disabled|checked|selected)$/i) || n4x17i['warning']('attribute "' + kg0qb + '" missed value!! "' + kg0qb + '" instead2!!'), u4m3['add'](kg0qb, kg0qb, nji7xv), nji7xv = v7jx, h8ct6d = gf2w_9$;break;case gzhpte:
            n4x17i['warning']('attribute space is required"' + kg0qb + '\x22!!');case goqvyr:
            h8ct6d = gf2w_9$, nji7xv = v7jx;break;case gtz8e:
            h8ct6d = gyo5rbq, nji7xv = v7jx;break;case gz2e_p:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}v7jx++;
  }
}function gqkbo0(b50gk, r5qvyo, htzc68) {
  for (var htepz = b50gk['tagName'], the8c = null, ehz_2 = b50gk['length']; ehz_2--;) {
    var th8z6c = b50gk[ehz_2],
        dg68 = th8z6c['qName'],
        nvix7j = th8z6c['value'],
        m43lu = dg68['indexOf'](':');if (m43lu > 0x0) var uni341 = th8z6c['prefix'] = dg68['slice'](0x0, m43lu),
        f92$sw = dg68['slice'](m43lu + 0x1),
        d60kbg = 'xmlns' === uni341 && f92$sw;else f92$sw = dg68, uni341 = null, d60kbg = 'xmlns' === dg68 && '';th8z6c['localName'] = f92$sw, d60kbg !== !0x1 && (null == the8c && (the8c = {}, gw_z2pe(htzc68, htzc68 = {})), htzc68[d60kbg] = the8c[d60kbg] = nvix7j, th8z6c['uri'] = 'http://www.w3.org/2000/xmlns/', r5qvyo['startPrefixMapping'](d60kbg, nvix7j));
  }for (var ehz_2 = b50gk['length']; ehz_2--;) {
    th8z6c = b50gk[ehz_2];var uni341 = th8z6c['prefix'];uni341 && ('xml' === uni341 && (th8z6c['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== uni341 && (th8z6c['uri'] = htzc68[uni341 || '']));
  }var m43lu = htepz['indexOf'](':');m43lu > 0x0 ? (uni341 = b50gk['prefix'] = htepz['slice'](0x0, m43lu), f92$sw = b50gk['localName'] = htepz['slice'](m43lu + 0x1)) : (uni341 = null, f92$sw = b50gk['localName'] = htepz);var _2f$9w = b50gk['uri'] = htzc68[uni341 || ''];if (r5qvyo['startElement'](_2f$9w, f92$sw, htepz, b50gk), !b50gk['closed']) return b50gk['currentNSMap'] = htzc68, b50gk['localNSMap'] = the8c, !0x0;if (r5qvyo['endElement'](_2f$9w, f92$sw, htepz), the8c) {
    for (uni341 in the8c) r5qvyo['endPrefixMapping'](uni341);
  }
}function gf$2sw(y7voj, b0dkg6, _htzp, jxvri7, h68tdc) {
  if (/^(?:script|textarea)$/i['test'](_htzp)) {
    var kdg6 = y7voj['indexOf']('</' + _htzp + '>', b0dkg6),
        c86dgk = y7voj['substring'](b0dkg6 + 0x1, kdg6);if (/[&<]/['test'](c86dgk)) return (/^script$/i['test'](_htzp) ? (h68tdc['characters'](c86dgk, 0x0, c86dgk['length']), kdg6) : (c86dgk = c86dgk['replace'](/&#?\w+;/g, jxvri7), h68tdc['characters'](c86dgk, 0x0, c86dgk['length']), kdg6)
    );
  }return b0dkg6 + 0x1;
}function gnui431(ojy5, oqb5y, obqr5y, d6c8g) {
  var _f9wp = d6c8g[obqr5y];return null == _f9wp && (_f9wp = ojy5['lastIndexOf']('</' + obqr5y + '>'), oqb5y > _f9wp && (_f9wp = ojy5['lastIndexOf']('</' + obqr5y)), d6c8g[obqr5y] = _f9wp), oqb5y > _f9wp;
}function gw_z2pe(ulma34, tc8hd6) {
  for (var _9fp2 in ulma34) tc8hd6[_9fp2] = ulma34[_9fp2];
}function ginv7(rjx7vi, bk0g5, lmu3, y5b0qo) {
  var th6dc8 = rjx7vi['charAt'](bk0g5 + 0x2);switch (th6dc8) {case '-':
      if ('-' === rjx7vi['charAt'](bk0g5 + 0x3)) {
        var x43i1 = rjx7vi['indexOf']('-->', bk0g5 + 0x4);return x43i1 > bk0g5 ? (lmu3['comment'](rjx7vi, bk0g5 + 0x4, x43i1 - bk0g5 - 0x4), x43i1 + 0x3) : (y5b0qo['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rjx7vi['substr'](bk0g5 + 0x3, 0x6)) {
        var x43i1 = rjx7vi['indexOf'](']]>', bk0g5 + 0x9);return lmu3['startCDATA'](), lmu3['characters'](rjx7vi, bk0g5 + 0x9, x43i1 - bk0g5 - 0x9), lmu3['endCDATA'](), x43i1 + 0x3;
      }var yv5oqr = gqry5b(rjx7vi, bk0g5),
          kbo50 = yv5oqr['length'];if (kbo50 > 0x1 && /!doctype/i['test'](yv5oqr[0x0][0x0])) {
        var xjir7 = yv5oqr[0x1][0x0],
            h8ec = kbo50 > 0x3 && /^public$/i['test'](yv5oqr[0x2][0x0]) && yv5oqr[0x3][0x0],
            inj7x1 = kbo50 > 0x4 && yv5oqr[0x4][0x0],
            y5b0o = yv5oqr[kbo50 - 0x1];return lmu3['startDTD'](xjir7, h8ec && h8ec['replace'](/^(['"])(.*?)\1$/, '$2'), inj7x1 && inj7x1['replace'](/^(['"])(.*?)\1$/, '$2')), lmu3['endDTD'](), y5b0o['index'] + y5b0o[0x0]['length'];
      }}return -0x1;
}function gnvxji(g860kd, p9, xvyr7j) {
  var r7jyx = g860kd['indexOf']('?>', p9);if (r7jyx) {
    var y5qorb = g860kd['substring'](p9, r7jyx)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (y5qorb) {
      {
        y5qorb[0x0]['length'];
      }return xvyr7j['processingInstruction'](y5qorb[0x1], y5qorb[0x2]), r7jyx + 0x2;
    }return -0x1;
  }return -0x1;
}function gzp_th() {}function grjy7vx(tc8h6z, g8cd) {
  return tc8h6z['__proto__'] = g8cd, tc8h6z;
}function gqry5b(orvyj7, g6kd8) {
  var e_z2,
      hpz2e_ = [],
      ni431u = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ni431u['lastIndex'] = g6kd8, ni431u['exec'](orvyj7); e_z2 = ni431u['exec'](orvyj7);) if (hpz2e_['push'](e_z2), e_z2[0x1]) return hpz2e_;
}var gcd6gt = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gf$29_w = new RegExp('[\\-\\.0-9' + gcd6gt['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gx1j7i = new RegExp('^' + gcd6gt['source'] + gf$29_w['source'] + '*(?::' + gcd6gt['source'] + gf$29_w['source'] + '*)?$'),
    gc6t8h = 0x0,
    gf2w_9$ = 0x1,
    gbdk = 0x2,
    gtz8e = 0x3,
    gyo5rbq = 0x4,
    gzhpte = 0x5,
    goqvyr = 0x6,
    gz2e_p = 0x7;gb05qk['prototype'] = { 'parse': function (_pw92f, nx7ji1, zethp_) {
    var jnvi7 = this['domBuilder'];jnvi7['startDocument'](), gw_z2pe(nx7ji1, nx7ji1 = {}), gu43na1(_pw92f, nx7ji1, zethp_, jnvi7, this['errorHandler']), jnvi7['endDocument']();
  } }, gzp_th['prototype'] = { 'setTagName': function (wf_92$) {
    if (!gx1j7i['test'](wf_92$)) throw new Error('invalid tagName:' + wf_92$);this['tagName'] = wf_92$;
  }, 'add': function (gqb, ma3u, hzecpt) {
    if (!gx1j7i['test'](gqb)) throw new Error('invalid attribute:' + gqb);this[this['length']++] = { 'qName': gqb, 'value': ma3u, 'offset': hzecpt };
  }, 'length': 0x0, 'getLocalName': function (g6d80k) {
    return this[g6d80k]['localName'];
  }, 'getLocator': function (joyrv) {
    return this[joyrv]['locator'];
  }, 'getQName': function (ixvnj7) {
    return this[ixvnj7]['qName'];
  }, 'getURI': function (r5qby) {
    return this[r5qby]['uri'];
  }, 'getValue': function (w9$f) {
    return this[w9$f]['value'];
  } }, grjy7vx({}, grjy7vx['prototype']) instanceof grjy7vx || (grjy7vx = function (vr7oj, kbdg60) {
  function cdkg86() {}cdkg86['prototype'] = kbdg60, cdkg86 = new cdkg86();for (kbdg60 in vr7oj) cdkg86[kbdg60] = vr7oj[kbdg60];return cdkg86;
}), exports['XMLReader'] = gb05qk;