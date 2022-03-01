var H = wx.$F;
function fta7zvn() {}function fkpsu(cwklgh, bx$za7, sd9_pu, ntxz7, su4kd) {
  function $q3b(_py96i) {
    if (_py96i > 0xffff) {
      _py96i -= 0x10000;var c4ldk = 0xd800 + (_py96i >> 0xa),
          t7zax = 0xdc00 + (0x3ff & _py96i);return String['fromCharCode'](c4ldk, t7zax);
    }return String['fromCharCode'](_py96i);
  }function klcgw(b$7za) {
    var duspk4 = b$7za['slice'](0x1, -0x1);return duspk4 in sd9_pu ? sd9_pu[duspk4] : '#' === duspk4['charAt'](0x0) ? $q3b(parseInt(duspk4['substr'](0x1)['replace']('x', '0x'))) : (su4kd['error']('entity not found:' + b$7za), b$7za);
  }function g1lwhc(v5tn8) {
    if (v5tn8 > m0qr3) {
      var pu_9sy = cwklgh['substring'](m0qr3, v5tn8)['replace'](/&#?\w+;/g, klcgw);b$03qm && a5ztvn(m0qr3), ntxz7['characters'](pu_9sy, 0x0, v5tn8 - m0qr3), m0qr3 = v5tn8;
    }
  }function a5ztvn(m03b, lk4cdh) {
    for (; m03b >= kcwglh && (lk4cdh = j58n['exec'](cwklgh));) xzan$7 = lk4cdh['index'], kcwglh = xzan$7 + lk4cdh[0x0]['length'], b$03qm['lineNumber']++;b$03qm['columnNumber'] = m03b - xzan$7 + 0x1;
  }for (var xzan$7 = 0x0, kcwglh = 0x0, j58n = /.*(?:\r\n?|\n)|.*$/g, b$03qm = ntxz7['locator'], s_pud9 = [{ 'currentNSMap': bx$za7 }], hg21 = {}, m0qr3 = 0x0;;) {
    try {
      var g1hwc = cwklgh['indexOf']('<', m0qr3);if (0x0 > g1hwc) {
        if (!cwklgh['substr'](m0qr3)['match'](/^\s*$/)) {
          var ps4ku = ntxz7['doc'],
              $bax7z = ps4ku['createTextNode'](cwklgh['substr'](m0qr3));ps4ku['appendChild']($bax7z), ntxz7['currentElement'] = $bax7z;
        }return;
      }switch (g1hwc > m0qr3 && g1lwhc(g1hwc), cwklgh['charAt'](g1hwc + 0x1)) {case '/':
          var s9yu = cwklgh['indexOf']('>', g1hwc + 0x3),
              qbr30m = cwklgh['substring'](g1hwc + 0x2, s9yu),
              lkusd4 = s_pud9['pop']();0x0 > s9yu ? (qbr30m = cwklgh['substring'](g1hwc + 0x2)['replace'](/[\s<].*/, ''), su4kd['error']('end tag name: ' + qbr30m + ' is not complete:' + lkusd4['tagName']), s9yu = g1hwc + 0x1 + qbr30m['length']) : qbr30m['match'](/\s</) && (qbr30m = qbr30m['replace'](/[\s<].*/, ''), su4kd['error']('end tag name: ' + qbr30m + ' maybe not complete'), s9yu = g1hwc + 0x1 + qbr30m['length']);var na$7xz = lkusd4['localNSMap'],
              skc4l = lkusd4['tagName'] == qbr30m,
              m3x$0b = skc4l || lkusd4['tagName'] && lkusd4['tagName']['toLowerCase']() == qbr30m['toLowerCase']();if (m3x$0b) {
            if (ntxz7['endElement'](lkusd4['uri'], lkusd4['localName'], qbr30m), na$7xz) {
              for (var n8vtj in na$7xz) ntxz7['endPrefixMapping'](n8vtj);
            }skc4l || su4kd['fatalError']('end tag name: ' + qbr30m + ' is not match the current start tagName:' + lkusd4['tagName']);
          } else s_pud9['push'](lkusd4);s9yu++;break;case '?':
          b$03qm && a5ztvn(g1hwc), s9yu = frb0mq(cwklgh, g1hwc, ntxz7);break;case '!':
          b$03qm && a5ztvn(g1hwc), s9yu = ft85va(cwklgh, g1hwc, ntxz7, su4kd);break;default:
          b$03qm && a5ztvn(g1hwc);var vjt85e = new fhwgclk(),
              $n7z = s_pud9[s_pud9['length'] - 0x1]['currentNSMap'],
              s9yu = fb0x$7m(cwklgh, g1hwc, vjt85e, $n7z, klcgw, su4kd),
              n5t8 = vjt85e['length'];if (!vjt85e['closed'] && fztxn7a(cwklgh, s9yu, vjt85e['tagName'], hg21) && (vjt85e['closed'] = !0x0, sd9_pu['nbsp'] || su4kd['warning']('unclosed xml attribute')), b$03qm && n5t8) {
            for (var je12wg = ft85j(b$03qm, {}), tn7z = 0x0; n5t8 > tn7z; tn7z++) {
              var r0qm3b = vjt85e[tn7z];a5ztvn(r0qm3b['offset']), r0qm3b['locator'] = ft85j(b$03qm, {});
            }ntxz7['locator'] = je12wg, fm3q$(vjt85e, ntxz7, $n7z) && s_pud9['push'](vjt85e), ntxz7['locator'] = b$03qm;
          } else fm3q$(vjt85e, ntxz7, $n7z) && s_pud9['push'](vjt85e);'http://www.w3.org/1999/xhtml' !== vjt85e['uri'] || vjt85e['closed'] ? s9yu++ : s9yu = fu94ds(cwklgh, s9yu, vjt85e['tagName'], klcgw, ntxz7);}
    } catch (dsc4) {
      su4kd['error']('element parse error: ' + dsc4), s9yu = -0x1;
    }s9yu > m0qr3 ? m0qr3 = s9yu : g1lwhc(Math['max'](g1hwc, m0qr3) + 0x1);
  }
}function ft85j(dk4sc, na7xt) {
  return na7xt['lineNumber'] = dk4sc['lineNumber'], na7xt['columnNumber'] = dk4sc['columnNumber'], na7xt;
}function fb0x$7m(m0rb3, yo6_i, ksud, p4sd9, kc4hd, s4dkup) {
  for (var v8tn5a, ku4, sdpku4 = ++yo6_i, jtev58 = f$30bqm;;) {
    var tj58n = m0rb3['charAt'](sdpku4);switch (tj58n) {case '=':
        if (jtev58 === fz$0x) v8tn5a = m0rb3['slice'](yo6_i, sdpku4), jtev58 = fds9p;else {
          if (jtev58 !== fjwge2) throw new Error('attribute equal must after attrName');jtev58 = fds9p;
        }break;case '\x27':case '\x22':
        if (jtev58 === fds9p || jtev58 === fz$0x) {
          if (jtev58 === fz$0x && (s4dkup['warning']('attribute value must after "="'), v8tn5a = m0rb3['slice'](yo6_i, sdpku4)), yo6_i = sdpku4 + 0x1, sdpku4 = m0rb3['indexOf'](tj58n, yo6_i), !(sdpku4 > 0x0)) throw new Error('attribute value no end \'' + tj58n + '\' match');ku4 = m0rb3['slice'](yo6_i, sdpku4)['replace'](/&#?\w+;/g, kc4hd), ksud['add'](v8tn5a, ku4, yo6_i - 0x1), jtev58 = fscldk;
        } else {
          if (jtev58 != fb$0m7x) throw new Error('attribute value must after "="');ku4 = m0rb3['slice'](yo6_i, sdpku4)['replace'](/&#?\w+;/g, kc4hd), ksud['add'](v8tn5a, ku4, yo6_i), s4dkup['warning']('attribute "' + v8tn5a + '" missed start quot(' + tj58n + ')!!'), yo6_i = sdpku4 + 0x1, jtev58 = fscldk;
        }break;case '/':
        switch (jtev58) {case f$30bqm:
            ksud['setTagName'](m0rb3['slice'](yo6_i, sdpku4));case fscldk:case fiy9_6p:case fdkps4u:
            jtev58 = fdkps4u, ksud['closed'] = !0x0;case fb$0m7x:case fz$0x:case fjwge2:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return s4dkup['error']('unexpected end of input'), jtev58 == f$30bqm && ksud['setTagName'](m0rb3['slice'](yo6_i, sdpku4)), sdpku4;case '>':
        switch (jtev58) {case f$30bqm:
            ksud['setTagName'](m0rb3['slice'](yo6_i, sdpku4));case fscldk:case fiy9_6p:case fdkps4u:
            break;case fb$0m7x:case fz$0x:
            ku4 = m0rb3['slice'](yo6_i, sdpku4), '/' === ku4['slice'](-0x1) && (ksud['closed'] = !0x0, ku4 = ku4['slice'](0x0, -0x1));case fjwge2:
            jtev58 === fjwge2 && (ku4 = v8tn5a), jtev58 == fb$0m7x ? (s4dkup['warning']('attribute "' + ku4 + '" missed quot(")!!'), ksud['add'](v8tn5a, ku4['replace'](/&#?\w+;/g, kc4hd), yo6_i)) : ('http://www.w3.org/1999/xhtml' === p4sd9[''] && ku4['match'](/^(?:disabled|checked|selected)$/i) || s4dkup['warning']('attribute "' + ku4 + '" missed value!! "' + ku4 + '" instead!!'), ksud['add'](ku4, ku4, yo6_i));break;case fds9p:
            throw new Error('attribute value missed!!');}return sdpku4;case '\u0080':
        tj58n = '\x20';default:
        if ('\x20' >= tj58n) switch (jtev58) {case f$30bqm:
            ksud['setTagName'](m0rb3['slice'](yo6_i, sdpku4)), jtev58 = fiy9_6p;break;case fz$0x:
            v8tn5a = m0rb3['slice'](yo6_i, sdpku4), jtev58 = fjwge2;break;case fb$0m7x:
            var ku4 = m0rb3['slice'](yo6_i, sdpku4)['replace'](/&#?\w+;/g, kc4hd);s4dkup['warning']('attribute "' + ku4 + '" missed quot(")!!'), ksud['add'](v8tn5a, ku4, yo6_i);case fscldk:
            jtev58 = fiy9_6p;} else switch (jtev58) {case fjwge2:
            {
              ksud['tagName'];
            }'http://www.w3.org/1999/xhtml' === p4sd9[''] && v8tn5a['match'](/^(?:disabled|checked|selected)$/i) || s4dkup['warning']('attribute "' + v8tn5a + '" missed value!! "' + v8tn5a + '" instead2!!'), ksud['add'](v8tn5a, v8tn5a, yo6_i), yo6_i = sdpku4, jtev58 = fz$0x;break;case fscldk:
            s4dkup['warning']('attribute space is required"' + v8tn5a + '\x22!!');case fiy9_6p:
            jtev58 = fz$0x, yo6_i = sdpku4;break;case fds9p:
            jtev58 = fb$0m7x, yo6_i = sdpku4;break;case fdkps4u:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}sdpku4++;
  }
}function fm3q$(v58tj, m7bx$, azvn5t) {
  for (var ch1wl = v58tj['tagName'], gh21e = null, ghw2e1 = v58tj['length']; ghw2e1--;) {
    var p4udsk = v58tj[ghw2e1],
        gcw12h = p4udsk['qName'],
        sdu4lk = p4udsk['value'],
        anzxt = gcw12h['indexOf'](':');if (anzxt > 0x0) var h4ldck = p4udsk['prefix'] = gcw12h['slice'](0x0, anzxt),
        vnaz5t = gcw12h['slice'](anzxt + 0x1),
        kcl4sd = 'xmlns' === h4ldck && vnaz5t;else vnaz5t = gcw12h, h4ldck = null, kcl4sd = 'xmlns' === gcw12h && '';p4udsk['localName'] = vnaz5t, kcl4sd !== !0x1 && (null == gh21e && (gh21e = {}, fl4dkus(azvn5t, azvn5t = {})), azvn5t[kcl4sd] = gh21e[kcl4sd] = sdu4lk, p4udsk['uri'] = 'http://www.w3.org/2000/xmlns/', m7bx$['startPrefixMapping'](kcl4sd, sdu4lk));
  }for (var ghw2e1 = v58tj['length']; ghw2e1--;) {
    p4udsk = v58tj[ghw2e1];var h4ldck = p4udsk['prefix'];h4ldck && ('xml' === h4ldck && (p4udsk['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== h4ldck && (p4udsk['uri'] = azvn5t[h4ldck || '']));
  }var anzxt = ch1wl['indexOf'](':');anzxt > 0x0 ? (h4ldck = v58tj['prefix'] = ch1wl['slice'](0x0, anzxt), vnaz5t = v58tj['localName'] = ch1wl['slice'](anzxt + 0x1)) : (h4ldck = null, vnaz5t = v58tj['localName'] = ch1wl);var vaznt = v58tj['uri'] = azvn5t[h4ldck || ''];if (m7bx$['startElement'](vaznt, vnaz5t, ch1wl, v58tj), !v58tj['closed']) return v58tj['currentNSMap'] = azvn5t, v58tj['localNSMap'] = gh21e, !0x0;if (m7bx$['endElement'](vaznt, vnaz5t, ch1wl), gh21e) {
    for (h4ldck in gh21e) m7bx$['endPrefixMapping'](h4ldck);
  }
}function fu94ds(d4, sy_9p, bq$m, e85tj, $zb07) {
  if (/^(?:script|textarea)$/i['test'](bq$m)) {
    var zbx7$0 = d4['indexOf']('</' + bq$m + '>', sy_9p),
        _ups9d = d4['substring'](sy_9p + 0x1, zbx7$0);if (/[&<]/['test'](_ups9d)) return (/^script$/i['test'](bq$m) ? ($zb07['characters'](_ups9d, 0x0, _ups9d['length']), zbx7$0) : (_ups9d = _ups9d['replace'](/&#?\w+;/g, e85tj), $zb07['characters'](_ups9d, 0x0, _ups9d['length']), zbx7$0)
    );
  }return sy_9p + 0x1;
}function fztxn7a(wgchl1, g1, s9p_du, xa$z7) {
  var kulsd = xa$z7[s9p_du];return null == kulsd && (kulsd = wgchl1['lastIndexOf']('</' + s9p_du + '>'), g1 > kulsd && (kulsd = wgchl1['lastIndexOf']('</' + s9p_du)), xa$z7[s9p_du] = kulsd), g1 > kulsd;
}function fl4dkus(lc1gw, wgch1) {
  for (var nv7zt in lc1gw) wgch1[nv7zt] = lc1gw[nv7zt];
}function ft85va(qr0m3, uy, zvtna5, csl4dk) {
  var dcl4kh = qr0m3['charAt'](uy + 0x2);switch (dcl4kh) {case '-':
      if ('-' === qr0m3['charAt'](uy + 0x3)) {
        var hglcw1 = qr0m3['indexOf']('-->', uy + 0x4);return hglcw1 > uy ? (zvtna5['comment'](qr0m3, uy + 0x4, hglcw1 - uy - 0x4), hglcw1 + 0x3) : (csl4dk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qr0m3['substr'](uy + 0x3, 0x6)) {
        var hglcw1 = qr0m3['indexOf'](']]>', uy + 0x9);return zvtna5['startCDATA'](), zvtna5['characters'](qr0m3, uy + 0x9, hglcw1 - uy - 0x9), zvtna5['endCDATA'](), hglcw1 + 0x3;
      }var ej85tv = fmr30qb(qr0m3, uy),
          m$0b3x = ej85tv['length'];if (m$0b3x > 0x1 && /!doctype/i['test'](ej85tv[0x0][0x0])) {
        var kcghwl = ej85tv[0x1][0x0],
            y_9ps = m$0b3x > 0x3 && /^public$/i['test'](ej85tv[0x2][0x0]) && ej85tv[0x3][0x0],
            _spd = m$0b3x > 0x4 && ej85tv[0x4][0x0],
            ta7xz = ej85tv[m$0b3x - 0x1];return zvtna5['startDTD'](kcghwl, y_9ps && y_9ps['replace'](/^(['"])(.*?)\1$/, '$2'), _spd && _spd['replace'](/^(['"])(.*?)\1$/, '$2')), zvtna5['endDTD'](), ta7xz['index'] + ta7xz[0x0]['length'];
      }}return -0x1;
}function frb0mq(taxn7, gw2h, ud_s9p) {
  var w12ejg = taxn7['indexOf']('?>', gw2h);if (w12ejg) {
    var hl4dc = taxn7['substring'](gw2h, w12ejg)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hl4dc) {
      {
        hl4dc[0x0]['length'];
      }return ud_s9p['processingInstruction'](hl4dc[0x1], hl4dc[0x2]), w12ejg + 0x2;
    }return -0x1;
  }return -0x1;
}function fhwgclk() {}function fs_9ud(b03rq, ejgw12) {
  return b03rq['__proto__'] = ejgw12, b03rq;
}function fmr30qb(su4dkl, tzvn7) {
  var j2e51,
      wgclkh = [],
      j5e = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (j5e['lastIndex'] = tzvn7, j5e['exec'](su4dkl); j2e51 = j5e['exec'](su4dkl);) if (wgclkh['push'](j2e51), j2e51[0x1]) return wgclkh;
}var fw1e2h = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    flh1gw = new RegExp('[\\-\\.0-9' + fw1e2h['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    flc4kdh = new RegExp('^' + fw1e2h['source'] + flh1gw['source'] + '*(?::' + fw1e2h['source'] + flh1gw['source'] + '*)?$'),
    f$30bqm = 0x0,
    fz$0x = 0x1,
    fjwge2 = 0x2,
    fds9p = 0x3,
    fb$0m7x = 0x4,
    fscldk = 0x5,
    fiy9_6p = 0x6,
    fdkps4u = 0x7;fta7zvn['prototype'] = { 'parse': function (xbz7, bm03q, e8wj1) {
    var qmr3b0 = this['domBuilder'];qmr3b0['startDocument'](), fl4dkus(bm03q, bm03q = {}), fkpsu(xbz7, bm03q, e8wj1, qmr3b0, this['errorHandler']), qmr3b0['endDocument']();
  } }, fhwgclk['prototype'] = { 'setTagName': function (azbx) {
    if (!flc4kdh['test'](azbx)) throw new Error('invalid tagName:' + azbx);this['tagName'] = azbx;
  }, 'add': function (u9dp_s, b$q0m3, q0m3$) {
    if (!flc4kdh['test'](u9dp_s)) throw new Error('invalid attribute:' + u9dp_s);this[this['length']++] = { 'qName': u9dp_s, 'value': b$q0m3, 'offset': q0m3$ };
  }, 'length': 0x0, 'getLocalName': function (supy9_) {
    return this[supy9_]['localName'];
  }, 'getLocator': function (gew1h2) {
    return this[gew1h2]['locator'];
  }, 'getQName': function (yp_us9) {
    return this[yp_us9]['qName'];
  }, 'getURI': function (clkhd4) {
    return this[clkhd4]['uri'];
  }, 'getValue': function ($xmb0) {
    return this[$xmb0]['value'];
  } }, fs_9ud({}, fs_9ud['prototype']) instanceof fs_9ud || (fs_9ud = function (_piy9, x$azn) {
  function d49u() {}d49u['prototype'] = x$azn, d49u = new d49u();for (x$azn in _piy9) d49u[x$azn] = _piy9[x$azn];return d49u;
}), exports['XMLReader'] = fta7zvn;