var W = wx.$l;
function L9xr30c() {}function L9ahj(jkqzlh, vug71, lqhjkz, m30irc, m3icwr) {
  function x4n8s_(ds82b$) {
    if (ds82b$ > 0xffff) {
      ds82b$ -= 0x10000;var g1u7ve = 0xd800 + (ds82b$ >> 0xa),
          dba2$s = 0xdc00 + (0x3ff & ds82b$);return String['fromCharCode'](g1u7ve, dba2$s);
    }return String['fromCharCode'](ds82b$);
  }function rwcim3(nxy8_) {
    var f795ov = nxy8_['slice'](0x1, -0x1);return f795ov in lqhjkz ? lqhjkz[f795ov] : '#' === f795ov['charAt'](0x0) ? x4n8s_(parseInt(f795ov['substr'](0x1)['replace']('x', '0x'))) : (m3icwr['error']('entity not found:' + nxy8_), nxy8_);
  }function kdja(kbazjh) {
    if (kbazjh > sd_$) {
      var d$2bs = jkqzlh['substring'](sd_$, kbazjh)['replace'](/&#?\w+;/g, rwcim3);jdab2k && icr(sd_$), m30irc['characters'](d$2bs, 0x0, kbazjh - sd_$), sd_$ = kbazjh;
    }
  }function icr(ryx3n, x0ryc) {
    for (; ryx3n >= n48s && (x0ryc = fv75o['exec'](jkqzlh));) x4_sn = x0ryc['index'], n48s = x4_sn + x0ryc[0x0]['length'], jdab2k['lineNumber']++;jdab2k['columnNumber'] = ryx3n - x4_sn + 0x1;
  }for (var x4_sn = 0x0, n48s = 0x0, fv75o = /.*(?:\r\n?|\n)|.*$/g, jdab2k = m30irc['locator'], x4_ny8 = [{ 'currentNSMap': vug71 }], vo7f5 = {}, sd_$ = 0x0;;) {
    try {
      var dsb$2a = jkqzlh['indexOf']('<', sd_$);if (0x0 > dsb$2a) {
        if (!jkqzlh['substr'](sd_$)['match'](/^\s*$/)) {
          var ep1u6g = m30irc['doc'],
              s84d_$ = ep1u6g['createTextNode'](jkqzlh['substr'](sd_$));ep1u6g['appendChild'](s84d_$), m30irc['currentElement'] = s84d_$;
        }return;
      }switch (dsb$2a > sd_$ && kdja(dsb$2a), jkqzlh['charAt'](dsb$2a + 0x1)) {case '/':
          var tz5lqh = jkqzlh['indexOf']('>', dsb$2a + 0x3),
              ahzkqj = jkqzlh['substring'](dsb$2a + 0x2, tz5lqh),
              icmwr = x4_ny8['pop']();0x0 > tz5lqh ? (ahzkqj = jkqzlh['substring'](dsb$2a + 0x2)['replace'](/[\s<].*/, ''), m3icwr['error']('end tag name: ' + ahzkqj + ' is not complete:' + icmwr['tagName']), tz5lqh = dsb$2a + 0x1 + ahzkqj['length']) : ahzkqj['match'](/\s</) && (ahzkqj = ahzkqj['replace'](/[\s<].*/, ''), m3icwr['error']('end tag name: ' + ahzkqj + ' maybe not complete'), tz5lqh = dsb$2a + 0x1 + ahzkqj['length']);var vgu6e = icmwr['localNSMap'],
              lfo9t5 = icmwr['tagName'] == ahzkqj,
              n04_yx = lfo9t5 || icmwr['tagName'] && icmwr['tagName']['toLowerCase']() == ahzkqj['toLowerCase']();if (n04_yx) {
            if (m30irc['endElement'](icmwr['uri'], icmwr['localName'], ahzkqj), vgu6e) {
              for (var x8n_s4 in vgu6e) m30irc['endPrefixMapping'](x8n_s4);
            }lfo9t5 || m3icwr['fatalError']('end tag name: ' + ahzkqj + ' is not match the current start tagName:' + icmwr['tagName']);
          } else x4_ny8['push'](icmwr);tz5lqh++;break;case '?':
          jdab2k && icr(dsb$2a), tz5lqh = L9abkd2j(jkqzlh, dsb$2a, m30irc);break;case '!':
          jdab2k && icr(dsb$2a), tz5lqh = L9l9tfo5(jkqzlh, dsb$2a, m30irc, m3icwr);break;default:
          jdab2k && icr(dsb$2a);var $4s82d = new L9yr3c0m(),
              o579vf = x4_ny8[x4_ny8['length'] - 0x1]['currentNSMap'],
              tz5lqh = L9rx3y0c(jkqzlh, dsb$2a, $4s82d, o579vf, rwcim3, m3icwr),
              vgeu61 = $4s82d['length'];if (!$4s82d['closed'] && L9of57(jkqzlh, tz5lqh, $4s82d['tagName'], vo7f5) && ($4s82d['closed'] = !0x0, lqhjkz['nbsp'] || m3icwr['warning']('unclosed xml attribute')), jdab2k && vgeu61) {
            for (var b$28s = L9_x48y(jdab2k, {}), ogv17 = 0x0; vgeu61 > ogv17; ogv17++) {
              var lkzhj = $4s82d[ogv17];icr(lkzhj['offset']), lkzhj['locator'] = L9_x48y(jdab2k, {});
            }m30irc['locator'] = b$28s, L9e197($4s82d, m30irc, o579vf) && x4_ny8['push']($4s82d), m30irc['locator'] = jdab2k;
          } else L9e197($4s82d, m30irc, o579vf) && x4_ny8['push']($4s82d);'http://www.w3.org/1999/xhtml' !== $4s82d['uri'] || $4s82d['closed'] ? tz5lqh++ : tz5lqh = L9nx30_y(jkqzlh, tz5lqh, $4s82d['tagName'], rwcim3, m30irc);}
    } catch (oevg7) {
      m3icwr['error']('element parse error: ' + oevg7), tz5lqh = -0x1;
    }tz5lqh > sd_$ ? sd_$ = tz5lqh : kdja(Math['max'](dsb$2a, sd_$) + 0x1);
  }
}function L9_x48y(hakj, vf9o17) {
  return vf9o17['lineNumber'] = hakj['lineNumber'], vf9o17['columnNumber'] = hakj['columnNumber'], vf9o17;
}function L9rx3y0c(tf9l5o, $s_48, ftlqz, kjba, veg1o7, v61ueg) {
  for (var o917, y8n4x, sn84 = ++$s_48, $8bs = L9$2sbd;;) {
    var n$4s_8 = tf9l5o['charAt'](sn84);switch (n$4s_8) {case '=':
        if ($8bs === L9hltq5z) o917 = tf9l5o['slice']($s_48, sn84), $8bs = L9lq5ztf;else {
          if ($8bs !== L9zjhq) throw new Error('attribute equal must after attrName');$8bs = L9lq5ztf;
        }break;case '\x27':case '\x22':
        if ($8bs === L9lq5ztf || $8bs === L9hltq5z) {
          if ($8bs === L9hltq5z && (v61ueg['warning']('attribute value must after "="'), o917 = tf9l5o['slice']($s_48, sn84)), $s_48 = sn84 + 0x1, sn84 = tf9l5o['indexOf'](n$4s_8, $s_48), !(sn84 > 0x0)) throw new Error('attribute value no end \'' + n$4s_8 + '\' match');y8n4x = tf9l5o['slice']($s_48, sn84)['replace'](/&#?\w+;/g, veg1o7), ftlqz['add'](o917, y8n4x, $s_48 - 0x1), $8bs = L9r3icwm;
        } else {
          if ($8bs != L9y0_x) throw new Error('attribute value must after "="');y8n4x = tf9l5o['slice']($s_48, sn84)['replace'](/&#?\w+;/g, veg1o7), ftlqz['add'](o917, y8n4x, $s_48), v61ueg['warning']('attribute "' + o917 + '" missed start quot(' + n$4s_8 + ')!!'), $s_48 = sn84 + 0x1, $8bs = L9r3icwm;
        }break;case '/':
        switch ($8bs) {case L9$2sbd:
            ftlqz['setTagName'](tf9l5o['slice']($s_48, sn84));case L9r3icwm:case L9lh5tq:case L9bakj2:
            $8bs = L9bakj2, ftlqz['closed'] = !0x0;case L9y0_x:case L9hltq5z:case L9zjhq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return v61ueg['error']('unexpected end of input'), $8bs == L9$2sbd && ftlqz['setTagName'](tf9l5o['slice']($s_48, sn84)), sn84;case '>':
        switch ($8bs) {case L9$2sbd:
            ftlqz['setTagName'](tf9l5o['slice']($s_48, sn84));case L9r3icwm:case L9lh5tq:case L9bakj2:
            break;case L9y0_x:case L9hltq5z:
            y8n4x = tf9l5o['slice']($s_48, sn84), '/' === y8n4x['slice'](-0x1) && (ftlqz['closed'] = !0x0, y8n4x = y8n4x['slice'](0x0, -0x1));case L9zjhq:
            $8bs === L9zjhq && (y8n4x = o917), $8bs == L9y0_x ? (v61ueg['warning']('attribute "' + y8n4x + '" missed quot(")!!'), ftlqz['add'](o917, y8n4x['replace'](/&#?\w+;/g, veg1o7), $s_48)) : ('http://www.w3.org/1999/xhtml' === kjba[''] && y8n4x['match'](/^(?:disabled|checked|selected)$/i) || v61ueg['warning']('attribute "' + y8n4x + '" missed value!! "' + y8n4x + '" instead!!'), ftlqz['add'](y8n4x, y8n4x, $s_48));break;case L9lq5ztf:
            throw new Error('attribute value missed!!');}return sn84;case '\u0080':
        n$4s_8 = '\x20';default:
        if ('\x20' >= n$4s_8) switch ($8bs) {case L9$2sbd:
            ftlqz['setTagName'](tf9l5o['slice']($s_48, sn84)), $8bs = L9lh5tq;break;case L9hltq5z:
            o917 = tf9l5o['slice']($s_48, sn84), $8bs = L9zjhq;break;case L9y0_x:
            var y8n4x = tf9l5o['slice']($s_48, sn84)['replace'](/&#?\w+;/g, veg1o7);v61ueg['warning']('attribute "' + y8n4x + '" missed quot(")!!'), ftlqz['add'](o917, y8n4x, $s_48);case L9r3icwm:
            $8bs = L9lh5tq;} else switch ($8bs) {case L9zjhq:
            {
              ftlqz['tagName'];
            }'http://www.w3.org/1999/xhtml' === kjba[''] && o917['match'](/^(?:disabled|checked|selected)$/i) || v61ueg['warning']('attribute "' + o917 + '" missed value!! "' + o917 + '" instead2!!'), ftlqz['add'](o917, o917, $s_48), $s_48 = sn84, $8bs = L9hltq5z;break;case L9r3icwm:
            v61ueg['warning']('attribute space is required"' + o917 + '\x22!!');case L9lh5tq:
            $8bs = L9hltq5z, $s_48 = sn84;break;case L9lq5ztf:
            $8bs = L9y0_x, $s_48 = sn84;break;case L9bakj2:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}sn84++;
  }
}function L9e197(s$d_84, eo1v, $4d8s_) {
  for (var htzjql = s$d_84['tagName'], d24s8$ = null, f7v1o9 = s$d_84['length']; f7v1o9--;) {
    var fov17 = s$d_84[f7v1o9],
        x0n3y_ = fov17['qName'],
        xn0yr3 = fov17['value'],
        vo7f = x0n3y_['indexOf'](':');if (vo7f > 0x0) var ft75 = fov17['prefix'] = x0n3y_['slice'](0x0, vo7f),
        d4s$_ = x0n3y_['slice'](vo7f + 0x1),
        zbjkha = 'xmlns' === ft75 && d4s$_;else d4s$_ = x0n3y_, ft75 = null, zbjkha = 'xmlns' === x0n3y_ && '';fov17['localName'] = d4s$_, zbjkha !== !0x1 && (null == d24s8$ && (d24s8$ = {}, L9tlqhjz($4d8s_, $4d8s_ = {})), $4d8s_[zbjkha] = d24s8$[zbjkha] = xn0yr3, fov17['uri'] = 'http://www.w3.org/2000/xmlns/', eo1v['startPrefixMapping'](zbjkha, xn0yr3));
  }for (var f7v1o9 = s$d_84['length']; f7v1o9--;) {
    fov17 = s$d_84[f7v1o9];var ft75 = fov17['prefix'];ft75 && ('xml' === ft75 && (fov17['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ft75 && (fov17['uri'] = $4d8s_[ft75 || '']));
  }var vo7f = htzjql['indexOf'](':');vo7f > 0x0 ? (ft75 = s$d_84['prefix'] = htzjql['slice'](0x0, vo7f), d4s$_ = s$d_84['localName'] = htzjql['slice'](vo7f + 0x1)) : (ft75 = null, d4s$_ = s$d_84['localName'] = htzjql);var tz = s$d_84['uri'] = $4d8s_[ft75 || ''];if (eo1v['startElement'](tz, d4s$_, htzjql, s$d_84), !s$d_84['closed']) return s$d_84['currentNSMap'] = $4d8s_, s$d_84['localNSMap'] = d24s8$, !0x0;if (eo1v['endElement'](tz, d4s$_, htzjql), d24s8$) {
    for (ft75 in d24s8$) eo1v['endPrefixMapping'](ft75);
  }
}function L9nx30_y(ba2kh, l5f9t, c3r0i, db2$8, zjkba) {
  if (/^(?:script|textarea)$/i['test'](c3r0i)) {
    var ftlz5 = ba2kh['indexOf']('</' + c3r0i + '>', l5f9t),
        xn03 = ba2kh['substring'](l5f9t + 0x1, ftlz5);if (/[&<]/['test'](xn03)) return (/^script$/i['test'](c3r0i) ? (zjkba['characters'](xn03, 0x0, xn03['length']), ftlz5) : (xn03 = xn03['replace'](/&#?\w+;/g, db2$8), zjkba['characters'](xn03, 0x0, xn03['length']), ftlz5)
    );
  }return l5f9t + 0x1;
}function L9of57(cmir03, zkah, q95ft, $842s) {
  var ak2dj = $842s[q95ft];return null == ak2dj && (ak2dj = cmir03['lastIndexOf']('</' + q95ft + '>'), zkah > ak2dj && (ak2dj = cmir03['lastIndexOf']('</' + q95ft)), $842s[q95ft] = ak2dj), zkah > ak2dj;
}function L9tlqhjz(j2adbk, abj2k) {
  for (var v7og in j2adbk) abj2k[v7og] = j2adbk[v7og];
}function L9l9tfo5(kqlzjh, peg1, egv71o, mwri3) {
  var n3y0x = kqlzjh['charAt'](peg1 + 0x2);switch (n3y0x) {case '-':
      if ('-' === kqlzjh['charAt'](peg1 + 0x3)) {
        var $2das = kqlzjh['indexOf']('-->', peg1 + 0x4);return $2das > peg1 ? (egv71o['comment'](kqlzjh, peg1 + 0x4, $2das - peg1 - 0x4), $2das + 0x3) : (mwri3['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kqlzjh['substr'](peg1 + 0x3, 0x6)) {
        var $2das = kqlzjh['indexOf'](']]>', peg1 + 0x9);return egv71o['startCDATA'](), egv71o['characters'](kqlzjh, peg1 + 0x9, $2das - peg1 - 0x9), egv71o['endCDATA'](), $2das + 0x3;
      }var xr0cy3 = L9qkzjl(kqlzjh, peg1),
          _8ds4$ = xr0cy3['length'];if (_8ds4$ > 0x1 && /!doctype/i['test'](xr0cy3[0x0][0x0])) {
        var v6ug1e = xr0cy3[0x1][0x0],
            kjhql = _8ds4$ > 0x3 && /^public$/i['test'](xr0cy3[0x2][0x0]) && xr0cy3[0x3][0x0],
            q5ltf9 = _8ds4$ > 0x4 && xr0cy3[0x4][0x0],
            pu1g = xr0cy3[_8ds4$ - 0x1];return egv71o['startDTD'](v6ug1e, kjhql && kjhql['replace'](/^(['"])(.*?)\1$/, '$2'), q5ltf9 && q5ltf9['replace'](/^(['"])(.*?)\1$/, '$2')), egv71o['endDTD'](), pu1g['index'] + pu1g[0x0]['length'];
      }}return -0x1;
}function L9abkd2j(adjb2, abdj, zak) {
  var fv197 = adjb2['indexOf']('?>', abdj);if (fv197) {
    var jzab = adjb2['substring'](abdj, fv197)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jzab) {
      {
        jzab[0x0]['length'];
      }return zak['processingInstruction'](jzab[0x1], jzab[0x2]), fv197 + 0x2;
    }return -0x1;
  }return -0x1;
}function L9yr3c0m() {}function L9u6p1e(tlhq, kd2ajb) {
  return tlhq['__proto__'] = kd2ajb, tlhq;
}function L9qkzjl(bsd$, dkb$2a) {
  var k2a$,
      tljq = [],
      c0irm = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (c0irm['lastIndex'] = dkb$2a, c0irm['exec'](bsd$); k2a$ = c0irm['exec'](bsd$);) if (tljq['push'](k2a$), k2a$[0x1]) return tljq;
}var L9$akb2d = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9qjkhaz = new RegExp('[\\-\\.0-9' + L9$akb2d['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9azjkq = new RegExp('^' + L9$akb2d['source'] + L9qjkhaz['source'] + '*(?::' + L9$akb2d['source'] + L9qjkhaz['source'] + '*)?$'),
    L9$2sbd = 0x0,
    L9hltq5z = 0x1,
    L9zjhq = 0x2,
    L9lq5ztf = 0x3,
    L9y0_x = 0x4,
    L9r3icwm = 0x5,
    L9lh5tq = 0x6,
    L9bakj2 = 0x7;L9xr30c['prototype'] = { 'parse': function (xc30r, n03xry, aj) {
    var fol5t = this['domBuilder'];fol5t['startDocument'](), L9tlqhjz(n03xry, n03xry = {}), L9ahj(xc30r, n03xry, aj, fol5t, this['errorHandler']), fol5t['endDocument']();
  } }, L9yr3c0m['prototype'] = { 'setTagName': function ($sn_4) {
    if (!L9azjkq['test']($sn_4)) throw new Error('invalid tagName:' + $sn_4);this['tagName'] = $sn_4;
  }, 'add': function (i3mr0c, s$da2, $abds2) {
    if (!L9azjkq['test'](i3mr0c)) throw new Error('invalid attribute:' + i3mr0c);this[this['length']++] = { 'qName': i3mr0c, 'value': s$da2, 'offset': $abds2 };
  }, 'length': 0x0, 'getLocalName': function (_8n$s4) {
    return this[_8n$s4]['localName'];
  }, 'getLocator': function (wcr3) {
    return this[wcr3]['locator'];
  }, 'getQName': function (v975o) {
    return this[v975o]['qName'];
  }, 'getURI': function (d_s84) {
    return this[d_s84]['uri'];
  }, 'getValue': function (gv7o1e) {
    return this[gv7o1e]['value'];
  } }, L9u6p1e({}, L9u6p1e['prototype']) instanceof L9u6p1e || (L9u6p1e = function (b82$ds, khzaqj) {
  function p16e() {}p16e['prototype'] = khzaqj, p16e = new p16e();for (khzaqj in b82$ds) p16e[khzaqj] = b82$ds[khzaqj];return p16e;
}), exports['XMLReader'] = L9xr30c;