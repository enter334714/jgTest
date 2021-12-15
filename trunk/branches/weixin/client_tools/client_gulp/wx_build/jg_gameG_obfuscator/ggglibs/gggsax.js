var m = wx.$g;
function gq7gcev() {}function go34_(dz234o, muj$, qvey7g, ywek, qgvey7) {
  function eg7vc(r26dj) {
    if (r26dj > 0xffff) {
      r26dj -= 0x10000;var kxhwy = 0xd800 + (r26dj >> 0xa),
          to_43f = 0xdc00 + (0x3ff & r26dj);return String['fromCharCode'](kxhwy, to_43f);
    }return String['fromCharCode'](r26dj);
  }function l98sgc(e7kvw) {
    var o4_3 = e7kvw['slice'](0x1, -0x1);return o4_3 in qvey7g ? qvey7g[o4_3] : '#' === o4_3['charAt'](0x0) ? eg7vc(parseInt(o4_3['substr'](0x1)['replace']('x', '0x'))) : (qgvey7['error']('entity not found:' + e7kvw), e7kvw);
  }function sc89l(sclg8) {
    if (sclg8 > vyqe) {
      var ft0p4_ = dz234o['substring'](vyqe, sclg8)['replace'](/&#?\w+;/g, l98sgc);qsg78 && qcgs87(vyqe), ywek['characters'](ft0p4_, 0x0, sclg8 - vyqe), vyqe = sclg8;
    }
  }function qcgs87(cg9l8s, gs8lqc) {
    for (; cg9l8s >= b_pi5 && (gs8lqc = u$2r6j['exec'](dz234o));) b5fp = gs8lqc['index'], b_pi5 = b5fp + gs8lqc[0x0]['length'], qsg78['lineNumber']++;qsg78['columnNumber'] = cg9l8s - b5fp + 0x1;
  }for (var b5fp = 0x0, b_pi5 = 0x0, u$2r6j = /.*(?:\r\n?|\n)|.*$/g, qsg78 = ywek['locator'], wha1k = [{ 'currentNSMap': muj$ }], px5ba = {}, vyqe = 0x0;;) {
    try {
      var gl9s = dz234o['indexOf']('<', vyqe);if (0x0 > gl9s) {
        if (!dz234o['substr'](vyqe)['match'](/^\s*$/)) {
          var d62rj = ywek['doc'],
              xa5i = d62rj['createTextNode'](dz234o['substr'](vyqe));d62rj['appendChild'](xa5i), ywek['currentElement'] = xa5i;
        }return;
      }switch (gl9s > vyqe && sc89l(gl9s), dz234o['charAt'](gl9s + 0x1)) {case '/':
          var rjmu$ = dz234o['indexOf']('>', gl9s + 0x3),
              whye1 = dz234o['substring'](gl9s + 0x2, rjmu$),
              u6jr$ = wha1k['pop']();0x0 > rjmu$ ? (whye1 = dz234o['substring'](gl9s + 0x2)['replace'](/[\s<].*/, ''), qgvey7['error']('end tag name: ' + whye1 + ' is not complete:' + u6jr$['tagName']), rjmu$ = gl9s + 0x1 + whye1['length']) : whye1['match'](/\s</) && (whye1 = whye1['replace'](/[\s<].*/, ''), qgvey7['error']('end tag name: ' + whye1 + ' maybe not complete'), rjmu$ = gl9s + 0x1 + whye1['length']);var _of3t = u6jr$['localNSMap'],
              khy1xw = u6jr$['tagName'] == whye1,
              kwhyx = khy1xw || u6jr$['tagName'] && u6jr$['tagName']['toLowerCase']() == whye1['toLowerCase']();if (kwhyx) {
            if (ywek['endElement'](u6jr$['uri'], u6jr$['localName'], whye1), _of3t) {
              for (var rjmu6 in _of3t) ywek['endPrefixMapping'](rjmu6);
            }khy1xw || qgvey7['fatalError']('end tag name: ' + whye1 + ' is not match the current start tagName:' + u6jr$['tagName']);
          } else wha1k['push'](u6jr$);rjmu$++;break;case '?':
          qsg78 && qcgs87(gl9s), rjmu$ = gd6roz(dz234o, gl9s, ywek);break;case '!':
          qsg78 && qcgs87(gl9s), rjmu$ = glc9sg8(dz234o, gl9s, ywek, qgvey7);break;default:
          qsg78 && qcgs87(gl9s);var xihk1 = new g$ur6(),
              cgq7s = wha1k[wha1k['length'] - 0x1]['currentNSMap'],
              rjmu$ = gd26r(dz234o, gl9s, xihk1, cgq7s, l98sgc, qgvey7),
              _0b5p = xihk1['length'];if (!xihk1['closed'] && gaik1xh(dz234o, rjmu$, xihk1['tagName'], px5ba) && (xihk1['closed'] = !0x0, qvey7g['nbsp'] || qgvey7['warning']('unclosed xml attribute')), qsg78 && _0b5p) {
            for (var xy1w = gj2u6r$(qsg78, {}), hxa15i = 0x0; _0b5p > hxa15i; hxa15i++) {
              var t_pfb0 = xihk1[hxa15i];qcgs87(t_pfb0['offset']), t_pfb0['locator'] = gj2u6r$(qsg78, {});
            }ywek['locator'] = xy1w, ghab5xi(xihk1, ywek, cgq7s) && wha1k['push'](xihk1), ywek['locator'] = qsg78;
          } else ghab5xi(xihk1, ywek, cgq7s) && wha1k['push'](xihk1);'http://www.w3.org/1999/xhtml' !== xihk1['uri'] || xihk1['closed'] ? rjmu$++ : rjmu$ = gq7ev(dz234o, rjmu$, xihk1['tagName'], l98sgc, ywek);}
    } catch (ur$6j) {
      qgvey7['error']('element parse error: ' + ur$6j), rjmu$ = -0x1;
    }rjmu$ > vyqe ? vyqe = rjmu$ : sc89l(Math['max'](gl9s, vyqe) + 0x1);
  }
}function gj2u6r$(qg7sc, xhak1i) {
  return xhak1i['lineNumber'] = qg7sc['lineNumber'], xhak1i['columnNumber'] = qg7sc['columnNumber'], xhak1i;
}function gd26r(g7vyqe, wa1hk, b5hxi, s8q7c, veqg7y, sgq8l) {
  for (var i5haxb, zj2r$6, e1kwyh = ++wa1hk, _o3t = gye7qv;;) {
    var z6dr = g7vyqe['charAt'](e1kwyh);switch (z6dr) {case '=':
        if (_o3t === gq7evyg) i5haxb = g7vyqe['slice'](wa1hk, e1kwyh), _o3t = gwy1ek;else {
          if (_o3t !== g_ft0) throw new Error('attribute equal must after attrName');_o3t = gwy1ek;
        }break;case '\x27':case '\x22':
        if (_o3t === gwy1ek || _o3t === gq7evyg) {
          if (_o3t === gq7evyg && (sgq8l['warning']('attribute value must after "="'), i5haxb = g7vyqe['slice'](wa1hk, e1kwyh)), wa1hk = e1kwyh + 0x1, e1kwyh = g7vyqe['indexOf'](z6dr, wa1hk), !(e1kwyh > 0x0)) throw new Error('attribute value no end \'' + z6dr + '\' match');zj2r$6 = g7vyqe['slice'](wa1hk, e1kwyh)['replace'](/&#?\w+;/g, veqg7y), b5hxi['add'](i5haxb, zj2r$6, wa1hk - 0x1), _o3t = gqy7e;
        } else {
          if (_o3t != gvgc7) throw new Error('attribute value must after "="');zj2r$6 = g7vyqe['slice'](wa1hk, e1kwyh)['replace'](/&#?\w+;/g, veqg7y), b5hxi['add'](i5haxb, zj2r$6, wa1hk), sgq8l['warning']('attribute "' + i5haxb + '" missed start quot(' + z6dr + ')!!'), wa1hk = e1kwyh + 0x1, _o3t = gqy7e;
        }break;case '/':
        switch (_o3t) {case gye7qv:
            b5hxi['setTagName'](g7vyqe['slice'](wa1hk, e1kwyh));case gqy7e:case gqgsvc7:case gwy7eq:
            _o3t = gwy7eq, b5hxi['closed'] = !0x0;case gvgc7:case gq7evyg:case g_ft0:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return sgq8l['error']('unexpected end of input'), _o3t == gye7qv && b5hxi['setTagName'](g7vyqe['slice'](wa1hk, e1kwyh)), e1kwyh;case '>':
        switch (_o3t) {case gye7qv:
            b5hxi['setTagName'](g7vyqe['slice'](wa1hk, e1kwyh));case gqy7e:case gqgsvc7:case gwy7eq:
            break;case gvgc7:case gq7evyg:
            zj2r$6 = g7vyqe['slice'](wa1hk, e1kwyh), '/' === zj2r$6['slice'](-0x1) && (b5hxi['closed'] = !0x0, zj2r$6 = zj2r$6['slice'](0x0, -0x1));case g_ft0:
            _o3t === g_ft0 && (zj2r$6 = i5haxb), _o3t == gvgc7 ? (sgq8l['warning']('attribute "' + zj2r$6 + '" missed quot(")!!'), b5hxi['add'](i5haxb, zj2r$6['replace'](/&#?\w+;/g, veqg7y), wa1hk)) : ('http://www.w3.org/1999/xhtml' === s8q7c[''] && zj2r$6['match'](/^(?:disabled|checked|selected)$/i) || sgq8l['warning']('attribute "' + zj2r$6 + '" missed value!! "' + zj2r$6 + '" instead!!'), b5hxi['add'](zj2r$6, zj2r$6, wa1hk));break;case gwy1ek:
            throw new Error('attribute value missed!!');}return e1kwyh;case '\u0080':
        z6dr = '\x20';default:
        if ('\x20' >= z6dr) switch (_o3t) {case gye7qv:
            b5hxi['setTagName'](g7vyqe['slice'](wa1hk, e1kwyh)), _o3t = gqgsvc7;break;case gq7evyg:
            i5haxb = g7vyqe['slice'](wa1hk, e1kwyh), _o3t = g_ft0;break;case gvgc7:
            var zj2r$6 = g7vyqe['slice'](wa1hk, e1kwyh)['replace'](/&#?\w+;/g, veqg7y);sgq8l['warning']('attribute "' + zj2r$6 + '" missed quot(")!!'), b5hxi['add'](i5haxb, zj2r$6, wa1hk);case gqy7e:
            _o3t = gqgsvc7;} else switch (_o3t) {case g_ft0:
            {
              b5hxi['tagName'];
            }'http://www.w3.org/1999/xhtml' === s8q7c[''] && i5haxb['match'](/^(?:disabled|checked|selected)$/i) || sgq8l['warning']('attribute "' + i5haxb + '" missed value!! "' + i5haxb + '" instead2!!'), b5hxi['add'](i5haxb, i5haxb, wa1hk), wa1hk = e1kwyh, _o3t = gq7evyg;break;case gqy7e:
            sgq8l['warning']('attribute space is required"' + i5haxb + '\x22!!');case gqgsvc7:
            _o3t = gq7evyg, wa1hk = e1kwyh;break;case gwy1ek:
            _o3t = gvgc7, wa1hk = e1kwyh;break;case gwy7eq:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}e1kwyh++;
  }
}function ghab5xi(drz2j6, yxhw1, yw7vk) {
  for (var ewyqv7 = drz2j6['tagName'], pbi05a = null, ftp = drz2j6['length']; ftp--;) {
    var xiabp = drz2j6[ftp],
        ew7yv = xiabp['qName'],
        a1xhi5 = xiabp['value'],
        aixb = ew7yv['indexOf'](':');if (aixb > 0x0) var iap5xb = xiabp['prefix'] = ew7yv['slice'](0x0, aixb),
        b5xhia = ew7yv['slice'](aixb + 0x1),
        hkx1wy = 'xmlns' === iap5xb && b5xhia;else b5xhia = ew7yv, iap5xb = null, hkx1wy = 'xmlns' === ew7yv && '';xiabp['localName'] = b5xhia, hkx1wy !== !0x1 && (null == pbi05a && (pbi05a = {}, grzod2(yw7vk, yw7vk = {})), yw7vk[hkx1wy] = pbi05a[hkx1wy] = a1xhi5, xiabp['uri'] = 'http://www.w3.org/2000/xmlns/', yxhw1['startPrefixMapping'](hkx1wy, a1xhi5));
  }for (var ftp = drz2j6['length']; ftp--;) {
    xiabp = drz2j6[ftp];var iap5xb = xiabp['prefix'];iap5xb && ('xml' === iap5xb && (xiabp['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== iap5xb && (xiabp['uri'] = yw7vk[iap5xb || '']));
  }var aixb = ewyqv7['indexOf'](':');aixb > 0x0 ? (iap5xb = drz2j6['prefix'] = ewyqv7['slice'](0x0, aixb), b5xhia = drz2j6['localName'] = ewyqv7['slice'](aixb + 0x1)) : (iap5xb = null, b5xhia = drz2j6['localName'] = ewyqv7);var v7qgy = drz2j6['uri'] = yw7vk[iap5xb || ''];if (yxhw1['startElement'](v7qgy, b5xhia, ewyqv7, drz2j6), !drz2j6['closed']) return drz2j6['currentNSMap'] = yw7vk, drz2j6['localNSMap'] = pbi05a, !0x0;if (yxhw1['endElement'](v7qgy, b5xhia, ewyqv7), pbi05a) {
    for (iap5xb in pbi05a) yxhw1['endPrefixMapping'](iap5xb);
  }
}function gq7ev(o236, r6$jum, p5bai0, uj26$r, qs8glc) {
  if (/^(?:script|textarea)$/i['test'](p5bai0)) {
    var y1wekv = o236['indexOf']('</' + p5bai0 + '>', r6$jum),
        kaxwh = o236['substring'](r6$jum + 0x1, y1wekv);if (/[&<]/['test'](kaxwh)) return (/^script$/i['test'](p5bai0) ? (qs8glc['characters'](kaxwh, 0x0, kaxwh['length']), y1wekv) : (kaxwh = kaxwh['replace'](/&#?\w+;/g, uj26$r), qs8glc['characters'](kaxwh, 0x0, kaxwh['length']), y1wekv)
    );
  }return r6$jum + 0x1;
}function gaik1xh(ekyw1h, f_bp50, gc78, whxak1) {
  var sv7cq = whxak1[gc78];return null == sv7cq && (sv7cq = ekyw1h['lastIndexOf']('</' + gc78 + '>'), f_bp50 > sv7cq && (sv7cq = ekyw1h['lastIndexOf']('</' + gc78)), whxak1[gc78] = sv7cq), f_bp50 > sv7cq;
}function grzod2(j2$u6, ekyh1w) {
  for (var e7gvqc in j2$u6) ekyh1w[e7gvqc] = j2$u6[e7gvqc];
}function glc9sg8(ip5ba, jr62, vq7cge, sq78cg) {
  var q8gscl = ip5ba['charAt'](jr62 + 0x2);switch (q8gscl) {case '-':
      if ('-' === ip5ba['charAt'](jr62 + 0x3)) {
        var fb_50p = ip5ba['indexOf']('-->', jr62 + 0x4);return fb_50p > jr62 ? (vq7cge['comment'](ip5ba, jr62 + 0x4, fb_50p - jr62 - 0x4), fb_50p + 0x3) : (sq78cg['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ip5ba['substr'](jr62 + 0x3, 0x6)) {
        var fb_50p = ip5ba['indexOf'](']]>', jr62 + 0x9);return vq7cge['startCDATA'](), vq7cge['characters'](ip5ba, jr62 + 0x9, fb_50p - jr62 - 0x9), vq7cge['endCDATA'](), fb_50p + 0x3;
      }var ve1 = gvwk7ey(ip5ba, jr62),
          kvy7e = ve1['length'];if (kvy7e > 0x1 && /!doctype/i['test'](ve1[0x0][0x0])) {
        var i_p0b = ve1[0x1][0x0],
            pb0_5 = kvy7e > 0x3 && /^public$/i['test'](ve1[0x2][0x0]) && ve1[0x3][0x0],
            z2o6d3 = kvy7e > 0x4 && ve1[0x4][0x0],
            jzrd62 = ve1[kvy7e - 0x1];return vq7cge['startDTD'](i_p0b, pb0_5 && pb0_5['replace'](/^(['"])(.*?)\1$/, '$2'), z2o6d3 && z2o6d3['replace'](/^(['"])(.*?)\1$/, '$2')), vq7cge['endDTD'](), jzrd62['index'] + jzrd62[0x0]['length'];
      }}return -0x1;
}function gd6roz(wyhe, gs7qvc, b0ftp_) {
  var jru$6 = wyhe['indexOf']('?>', gs7qvc);if (jru$6) {
    var hbaix5 = wyhe['substring'](gs7qvc, jru$6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hbaix5) {
      {
        hbaix5[0x0]['length'];
      }return b0ftp_['processingInstruction'](hbaix5[0x1], hbaix5[0x2]), jru$6 + 0x2;
    }return -0x1;
  }return -0x1;
}function g$ur6() {}function geyvk1w(pfbt0, eq7vc) {
  return pfbt0['__proto__'] = eq7vc, pfbt0;
}function gvwk7ey(of3d4t, wvy) {
  var e7vwyk,
      lg89c = [],
      b5i0a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (b5i0a['lastIndex'] = wvy, b5i0a['exec'](of3d4t); e7vwyk = b5i0a['exec'](of3d4t);) if (lg89c['push'](e7vwyk), e7vwyk[0x1]) return lg89c;
}var ghbxi5 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gvwk7e = new RegExp('[\\-\\.0-9' + ghbxi5['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gywhk1x = new RegExp('^' + ghbxi5['source'] + gvwk7e['source'] + '*(?::' + ghbxi5['source'] + gvwk7e['source'] + '*)?$'),
    gye7qv = 0x0,
    gq7evyg = 0x1,
    g_ft0 = 0x2,
    gwy1ek = 0x3,
    gvgc7 = 0x4,
    gqy7e = 0x5,
    gqgsvc7 = 0x6,
    gwy7eq = 0x7;gq7gcev['prototype'] = { 'parse': function (ykw, zd42o3, qvgy) {
    var i_50p = this['domBuilder'];i_50p['startDocument'](), grzod2(zd42o3, zd42o3 = {}), go34_(ykw, zd42o3, qvgy, i_50p, this['errorHandler']), i_50p['endDocument']();
  } }, g$ur6['prototype'] = { 'setTagName': function (gcq78) {
    if (!gywhk1x['test'](gcq78)) throw new Error('invalid tagName:' + gcq78);this['tagName'] = gcq78;
  }, 'add': function (gqe7c, bp_5i, kxahi1) {
    if (!gywhk1x['test'](gqe7c)) throw new Error('invalid attribute:' + gqe7c);this[this['length']++] = { 'qName': gqe7c, 'value': bp_5i, 'offset': kxahi1 };
  }, 'length': 0x0, 'getLocalName': function (hk1ew) {
    return this[hk1ew]['localName'];
  }, 'getLocator': function (wev7yq) {
    return this[wev7yq]['locator'];
  }, 'getQName': function (t0_p) {
    return this[t0_p]['qName'];
  }, 'getURI': function (orzd) {
    return this[orzd]['uri'];
  }, 'getValue': function (od23z6) {
    return this[od23z6]['value'];
  } }, geyvk1w({}, geyvk1w['prototype']) instanceof geyvk1w || (geyvk1w = function (pbt0f_, ztdo4) {
  function yvg7qe() {}yvg7qe['prototype'] = ztdo4, yvg7qe = new yvg7qe();for (ztdo4 in pbt0f_) yvg7qe[ztdo4] = pbt0f_[ztdo4];return yvg7qe;
}), exports['XMLReader'] = gq7gcev;