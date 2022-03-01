var J = wx.h$;
function gv5rqo() {}function gni7vx(n431iu, x1n74, jvro5y, qko, zet8) {
  function vy5q(ob5rq) {
    if (ob5rq > 0xffff) {
      ob5rq -= 0x10000;var gb05q = 0xd800 + (ob5rq >> 0xa),
          g06kdb = 0xdc00 + (0x3ff & ob5rq);return String['fromCharCode'](gb05q, g06kdb);
    }return String['fromCharCode'](ob5rq);
  }function pt_he(w2z_pe) {
    var fpw9_2 = w2z_pe['slice'](0x1, -0x1);return fpw9_2 in jvro5y ? jvro5y[fpw9_2] : '#' === fpw9_2['charAt'](0x0) ? vy5q(parseInt(fpw9_2['substr'](0x1)['replace']('x', '0x'))) : (zet8['error']('entity not found:' + w2z_pe), w2z_pe);
  }function zetc(_f$w29) {
    if (_f$w29 > o5q0k) {
      var cpt = n431iu['substring'](o5q0k, _f$w29)['replace'](/&#?\w+;/g, pt_he);c6zh8 && ro5yv(o5q0k), qko['characters'](cpt, 0x0, _f$w29 - o5q0k), o5q0k = _f$w29;
    }
  }function ro5yv(_p92fw, dg8tc) {
    for (; _p92fw >= h86dc && (dg8tc = e8zh['exec'](n431iu));) z8thc6 = dg8tc['index'], h86dc = z8thc6 + dg8tc[0x0]['length'], c6zh8['lineNumber']++;c6zh8['columnNumber'] = _p92fw - z8thc6 + 0x1;
  }for (var z8thc6 = 0x0, h86dc = 0x0, e8zh = /.*(?:\r\n?|\n)|.*$/g, c6zh8 = qko['locator'], tgc8 = [{ 'currentNSMap': x1n74 }], _$92wf = {}, o5q0k = 0x0;;) {
    try {
      var u34 = n431iu['indexOf']('<', o5q0k);if (0x0 > u34) {
        if (!n431iu['substr'](o5q0k)['match'](/^\s*$/)) {
          var k5q0bg = qko['doc'],
              in417 = k5q0bg['createTextNode'](n431iu['substr'](o5q0k));k5q0bg['appendChild'](in417), qko['currentElement'] = in417;
        }return;
      }switch (u34 > o5q0k && zetc(u34), n431iu['charAt'](u34 + 0x1)) {case '/':
          var d0g68 = n431iu['indexOf']('>', u34 + 0x3),
              f$2 = n431iu['substring'](u34 + 0x2, d0g68),
              k8cd = tgc8['pop']();0x0 > d0g68 ? (f$2 = n431iu['substring'](u34 + 0x2)['replace'](/[\s<].*/, ''), zet8['error']('end tag name: ' + f$2 + ' is not complete:' + k8cd['tagName']), d0g68 = u34 + 0x1 + f$2['length']) : f$2['match'](/\s</) && (f$2 = f$2['replace'](/[\s<].*/, ''), zet8['error']('end tag name: ' + f$2 + ' maybe not complete'), d0g68 = u34 + 0x1 + f$2['length']);var iun4 = k8cd['localNSMap'],
              ix7njv = k8cd['tagName'] == f$2,
              e8zcth = ix7njv || k8cd['tagName'] && k8cd['tagName']['toLowerCase']() == f$2['toLowerCase']();if (e8zcth) {
            if (qko['endElement'](k8cd['uri'], k8cd['localName'], f$2), iun4) {
              for (var ct8h6z in iun4) qko['endPrefixMapping'](ct8h6z);
            }ix7njv || zet8['fatalError']('end tag name: ' + f$2 + ' is not match the current start tagName:' + k8cd['tagName']);
          } else tgc8['push'](k8cd);d0g68++;break;case '?':
          c6zh8 && ro5yv(u34), d0g68 = gxv7n(n431iu, u34, qko);break;case '!':
          c6zh8 && ro5yv(u34), d0g68 = grqv5oy(n431iu, u34, qko, zet8);break;default:
          c6zh8 && ro5yv(u34);var w9s$2 = new gv5yqro(),
              i4u3n1 = tgc8[tgc8['length'] - 0x1]['currentNSMap'],
              d0g68 = go5yqbr(n431iu, u34, w9s$2, i4u3n1, pt_he, zet8),
              kg08 = w9s$2['length'];if (!w9s$2['closed'] && gh6cd8(n431iu, d0g68, w9s$2['tagName'], _$92wf) && (w9s$2['closed'] = !0x0, jvro5y['nbsp'] || zet8['warning']('unclosed xml attribute')), c6zh8 && kg08) {
            for (var ethc8 = gyo5vq(c6zh8, {}), oqbk50 = 0x0; kg08 > oqbk50; oqbk50++) {
              var ctpe = w9s$2[oqbk50];ro5yv(ctpe['offset']), ctpe['locator'] = gyo5vq(c6zh8, {});
            }qko['locator'] = ethc8, gwf$9(w9s$2, qko, i4u3n1) && tgc8['push'](w9s$2), qko['locator'] = c6zh8;
          } else gwf$9(w9s$2, qko, i4u3n1) && tgc8['push'](w9s$2);'http://www.w3.org/1999/xhtml' !== w9s$2['uri'] || w9s$2['closed'] ? d0g68++ : d0g68 = gr5yob(n431iu, d0g68, w9s$2['tagName'], pt_he, qko);}
    } catch (z68ht) {
      zet8['error']('element parse error: ' + z68ht), d0g68 = -0x1;
    }d0g68 > o5q0k ? o5q0k = d0g68 : zetc(Math['max'](u34, o5q0k) + 0x1);
  }
}function gyo5vq(ryboq, zept_h) {
  return zept_h['lineNumber'] = ryboq['lineNumber'], zept_h['columnNumber'] = ryboq['columnNumber'], zept_h;
}function go5yqbr(jyo, a3nu14, vi, um34la, _9wf2p, h2e) {
  for (var tzc68h, m4ul3a, j7xrvy = ++a3nu14, k0o5bq = gw29;;) {
    var i7j1nx = jyo['charAt'](j7xrvy);switch (i7j1nx) {case '=':
        if (k0o5bq === gqv5yor) tzc68h = jyo['slice'](a3nu14, j7xrvy), k0o5bq = grv7jxi;else {
          if (k0o5bq !== gr7ivjx) throw new Error('attribute equal must after attrName');k0o5bq = grv7jxi;
        }break;case '\x27':case '\x22':
        if (k0o5bq === grv7jxi || k0o5bq === gqv5yor) {
          if (k0o5bq === gqv5yor && (h2e['warning']('attribute value must after "="'), tzc68h = jyo['slice'](a3nu14, j7xrvy)), a3nu14 = j7xrvy + 0x1, j7xrvy = jyo['indexOf'](i7j1nx, a3nu14), !(j7xrvy > 0x0)) throw new Error('attribute value no end \'' + i7j1nx + '\' match');m4ul3a = jyo['slice'](a3nu14, j7xrvy)['replace'](/&#?\w+;/g, _9wf2p), vi['add'](tzc68h, m4ul3a, a3nu14 - 0x1), k0o5bq = g_hztpe;
        } else {
          if (k0o5bq != gwf$s9) throw new Error('attribute value must after "="');m4ul3a = jyo['slice'](a3nu14, j7xrvy)['replace'](/&#?\w+;/g, _9wf2p), vi['add'](tzc68h, m4ul3a, a3nu14), h2e['warning']('attribute "' + tzc68h + '" missed start quot(' + i7j1nx + ')!!'), a3nu14 = j7xrvy + 0x1, k0o5bq = g_hztpe;
        }break;case '/':
        switch (k0o5bq) {case gw29:
            vi['setTagName'](jyo['slice'](a3nu14, j7xrvy));case g_hztpe:case gew2_9:case g_e9pw:
            k0o5bq = g_e9pw, vi['closed'] = !0x0;case gwf$s9:case gqv5yor:case gr7ivjx:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return h2e['error']('unexpected end of input'), k0o5bq == gw29 && vi['setTagName'](jyo['slice'](a3nu14, j7xrvy)), j7xrvy;case '>':
        switch (k0o5bq) {case gw29:
            vi['setTagName'](jyo['slice'](a3nu14, j7xrvy));case g_hztpe:case gew2_9:case g_e9pw:
            break;case gwf$s9:case gqv5yor:
            m4ul3a = jyo['slice'](a3nu14, j7xrvy), '/' === m4ul3a['slice'](-0x1) && (vi['closed'] = !0x0, m4ul3a = m4ul3a['slice'](0x0, -0x1));case gr7ivjx:
            k0o5bq === gr7ivjx && (m4ul3a = tzc68h), k0o5bq == gwf$s9 ? (h2e['warning']('attribute "' + m4ul3a + '" missed quot(")!!'), vi['add'](tzc68h, m4ul3a['replace'](/&#?\w+;/g, _9wf2p), a3nu14)) : ('http://www.w3.org/1999/xhtml' === um34la[''] && m4ul3a['match'](/^(?:disabled|checked|selected)$/i) || h2e['warning']('attribute "' + m4ul3a + '" missed value!! "' + m4ul3a + '" instead!!'), vi['add'](m4ul3a, m4ul3a, a3nu14));break;case grv7jxi:
            throw new Error('attribute value missed!!');}return j7xrvy;case '\u0080':
        i7j1nx = '\x20';default:
        if ('\x20' >= i7j1nx) switch (k0o5bq) {case gw29:
            vi['setTagName'](jyo['slice'](a3nu14, j7xrvy)), k0o5bq = gew2_9;break;case gqv5yor:
            tzc68h = jyo['slice'](a3nu14, j7xrvy), k0o5bq = gr7ivjx;break;case gwf$s9:
            var m4ul3a = jyo['slice'](a3nu14, j7xrvy)['replace'](/&#?\w+;/g, _9wf2p);h2e['warning']('attribute "' + m4ul3a + '" missed quot(")!!'), vi['add'](tzc68h, m4ul3a, a3nu14);case g_hztpe:
            k0o5bq = gew2_9;} else switch (k0o5bq) {case gr7ivjx:
            {
              vi['tagName'];
            }'http://www.w3.org/1999/xhtml' === um34la[''] && tzc68h['match'](/^(?:disabled|checked|selected)$/i) || h2e['warning']('attribute "' + tzc68h + '" missed value!! "' + tzc68h + '" instead2!!'), vi['add'](tzc68h, tzc68h, a3nu14), a3nu14 = j7xrvy, k0o5bq = gqv5yor;break;case g_hztpe:
            h2e['warning']('attribute space is required"' + tzc68h + '\x22!!');case gew2_9:
            k0o5bq = gqv5yor, a3nu14 = j7xrvy;break;case grv7jxi:
            k0o5bq = gwf$s9, a3nu14 = j7xrvy;break;case g_e9pw:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}j7xrvy++;
  }
}function gwf$9(u3i41, gbkq05, z_hp2) {
  for (var tehp = u3i41['tagName'], x7irj = null, uam3l4 = u3i41['length']; uam3l4--;) {
    var iun43 = u3i41[uam3l4],
        a4lum = iun43['qName'],
        _fw92p = iun43['value'],
        al3m = a4lum['indexOf'](':');if (al3m > 0x0) var i413n = iun43['prefix'] = a4lum['slice'](0x0, al3m),
        i47n1 = a4lum['slice'](al3m + 0x1),
        f$s9w2 = 'xmlns' === i413n && i47n1;else i47n1 = a4lum, i413n = null, f$s9w2 = 'xmlns' === a4lum && '';iun43['localName'] = i47n1, f$s9w2 !== !0x1 && (null == x7irj && (x7irj = {}, g_ep29(z_hp2, z_hp2 = {})), z_hp2[f$s9w2] = x7irj[f$s9w2] = _fw92p, iun43['uri'] = 'http://www.w3.org/2000/xmlns/', gbkq05['startPrefixMapping'](f$s9w2, _fw92p));
  }for (var uam3l4 = u3i41['length']; uam3l4--;) {
    iun43 = u3i41[uam3l4];var i413n = iun43['prefix'];i413n && ('xml' === i413n && (iun43['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== i413n && (iun43['uri'] = z_hp2[i413n || '']));
  }var al3m = tehp['indexOf'](':');al3m > 0x0 ? (i413n = u3i41['prefix'] = tehp['slice'](0x0, al3m), i47n1 = u3i41['localName'] = tehp['slice'](al3m + 0x1)) : (i413n = null, i47n1 = u3i41['localName'] = tehp);var xi741n = u3i41['uri'] = z_hp2[i413n || ''];if (gbkq05['startElement'](xi741n, i47n1, tehp, u3i41), !u3i41['closed']) return u3i41['currentNSMap'] = z_hp2, u3i41['localNSMap'] = x7irj, !0x0;if (gbkq05['endElement'](xi741n, i47n1, tehp), x7irj) {
    for (i413n in x7irj) gbkq05['endPrefixMapping'](i413n);
  }
}function gr5yob(d0gqk, rvji, dcg6t, l41u3, v5r) {
  if (/^(?:script|textarea)$/i['test'](dcg6t)) {
    var d6c = d0gqk['indexOf']('</' + dcg6t + '>', rvji),
        qkb0o5 = d0gqk['substring'](rvji + 0x1, d6c);if (/[&<]/['test'](qkb0o5)) return (/^script$/i['test'](dcg6t) ? (v5r['characters'](qkb0o5, 0x0, qkb0o5['length']), d6c) : (qkb0o5 = qkb0o5['replace'](/&#?\w+;/g, l41u3), v5r['characters'](qkb0o5, 0x0, qkb0o5['length']), d6c)
    );
  }return rvji + 0x1;
}function gh6cd8(roy, by5qor, hcdt, a4u1l3) {
  var i31u4n = a4u1l3[hcdt];return null == i31u4n && (i31u4n = roy['lastIndexOf']('</' + hcdt + '>'), by5qor > i31u4n && (i31u4n = roy['lastIndexOf']('</' + hcdt)), a4u1l3[hcdt] = i31u4n), by5qor > i31u4n;
}function g_ep29(hctp, rvoq5y) {
  for (var vyrq5o in hctp) rvoq5y[vyrq5o] = hctp[vyrq5o];
}function grqv5oy(bqkg0d, g6bk0, gb0dqk, l3a4um) {
  var ov7rj = bqkg0d['charAt'](g6bk0 + 0x2);switch (ov7rj) {case '-':
      if ('-' === bqkg0d['charAt'](g6bk0 + 0x3)) {
        var uan3 = bqkg0d['indexOf']('-->', g6bk0 + 0x4);return uan3 > g6bk0 ? (gb0dqk['comment'](bqkg0d, g6bk0 + 0x4, uan3 - g6bk0 - 0x4), uan3 + 0x3) : (l3a4um['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bqkg0d['substr'](g6bk0 + 0x3, 0x6)) {
        var uan3 = bqkg0d['indexOf'](']]>', g6bk0 + 0x9);return gb0dqk['startCDATA'](), gb0dqk['characters'](bqkg0d, g6bk0 + 0x9, uan3 - g6bk0 - 0x9), gb0dqk['endCDATA'](), uan3 + 0x3;
      }var y5o0 = gvorq5y(bqkg0d, g6bk0),
          w2ez_ = y5o0['length'];if (w2ez_ > 0x1 && /!doctype/i['test'](y5o0[0x0][0x0])) {
        var oybq = y5o0[0x1][0x0],
            z_e2hp = w2ez_ > 0x3 && /^public$/i['test'](y5o0[0x2][0x0]) && y5o0[0x3][0x0],
            xj7r = w2ez_ > 0x4 && y5o0[0x4][0x0],
            fw$2_9 = y5o0[w2ez_ - 0x1];return gb0dqk['startDTD'](oybq, z_e2hp && z_e2hp['replace'](/^(['"])(.*?)\1$/, '$2'), xj7r && xj7r['replace'](/^(['"])(.*?)\1$/, '$2')), gb0dqk['endDTD'](), fw$2_9['index'] + fw$2_9[0x0]['length'];
      }}return -0x1;
}function gxv7n(n34ui, cd8t6, _hpz2) {
  var r5yoqv = n34ui['indexOf']('?>', cd8t6);if (r5yoqv) {
    var ijxn = n34ui['substring'](cd8t6, r5yoqv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ijxn) {
      {
        ijxn[0x0]['length'];
      }return _hpz2['processingInstruction'](ijxn[0x1], ijxn[0x2]), r5yoqv + 0x2;
    }return -0x1;
  }return -0x1;
}function gv5yqro() {}function gvyojr(fsw, t8cehz) {
  return fsw['__proto__'] = t8cehz, fsw;
}function gvorq5y(gkb60d, k5oq0) {
  var or5yqv,
      qbo5y0 = [],
      _ehpt = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (_ehpt['lastIndex'] = k5oq0, _ehpt['exec'](gkb60d); or5yqv = _ehpt['exec'](gkb60d);) if (qbo5y0['push'](or5yqv), or5yqv[0x1]) return qbo5y0;
}var g_tepzh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gxyrj7 = new RegExp('[\\-\\.0-9' + g_tepzh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gqob5yr = new RegExp('^' + g_tepzh['source'] + gxyrj7['source'] + '*(?::' + g_tepzh['source'] + gxyrj7['source'] + '*)?$'),
    gw29 = 0x0,
    gqv5yor = 0x1,
    gr7ivjx = 0x2,
    grv7jxi = 0x3,
    gwf$s9 = 0x4,
    g_hztpe = 0x5,
    gew2_9 = 0x6,
    g_e9pw = 0x7;gv5rqo['prototype'] = { 'parse': function (s9f$2, pztceh, qyb05o) {
    var ztch8 = this['domBuilder'];ztch8['startDocument'](), g_ep29(pztceh, pztceh = {}), gni7vx(s9f$2, pztceh, qyb05o, ztch8, this['errorHandler']), ztch8['endDocument']();
  } }, gv5yqro['prototype'] = { 'setTagName': function (tzhecp) {
    if (!gqob5yr['test'](tzhecp)) throw new Error('invalid tagName:' + tzhecp);this['tagName'] = tzhecp;
  }, 'add': function (wf2s, nxj71, w_2zp) {
    if (!gqob5yr['test'](wf2s)) throw new Error('invalid attribute:' + wf2s);this[this['length']++] = { 'qName': wf2s, 'value': nxj71, 'offset': w_2zp };
  }, 'length': 0x0, 'getLocalName': function (nj) {
    return this[nj]['localName'];
  }, 'getLocator': function (jrv7yx) {
    return this[jrv7yx]['locator'];
  }, 'getQName': function (b0kq) {
    return this[b0kq]['qName'];
  }, 'getURI': function (ojv5) {
    return this[ojv5]['uri'];
  }, 'getValue': function (h_tpe) {
    return this[h_tpe]['value'];
  } }, gvyojr({}, gvyojr['prototype']) instanceof gvyojr || (gvyojr = function (jry5, ijvnx7) {
  function n1au3() {}n1au3['prototype'] = ijvnx7, n1au3 = new n1au3();for (ijvnx7 in jry5) n1au3[ijvnx7] = jry5[ijvnx7];return n1au3;
}), exports['XMLReader'] = gv5rqo;