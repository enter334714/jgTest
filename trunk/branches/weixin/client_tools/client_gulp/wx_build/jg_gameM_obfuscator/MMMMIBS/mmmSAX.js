var Y = wx.$M;
function M_yqx1() {}function M_hi0(bd5$0l, ilh5n, rvb9w, dfrb, x91kru) {
  function k1uqyx(vrfk1) {
    if (vrfk1 > 0xffff) {
      vrfk1 -= 0x10000;var il50nh = 0xd800 + (vrfk1 >> 0xa),
          s4_m7 = 0xdc00 + (0x3ff & vrfk1);return String['fromCharCode'](il50nh, s4_m7);
    }return String['fromCharCode'](vrfk1);
  }function rdbvwf(atc8) {
    var wbdfrv = atc8['slice'](0x1, -0x1);return wbdfrv in rvb9w ? rvb9w[wbdfrv] : '#' === wbdfrv['charAt'](0x0) ? k1uqyx(parseInt(wbdfrv['substr'](0x1)['replace']('x', '0x'))) : (x91kru['error']('entity not found:' + atc8), atc8);
  }function $fdwv(coa68g) {
    if (coa68g > vrbdw) {
      var m7ijn = bd5$0l['substring'](vrbdw, coa68g)['replace'](/&#?\w+;/g, rdbvwf);bdf$0 && njihm(vrbdw), dfrb['characters'](m7ijn, 0x0, coa68g - vrbdw), vrbdw = coa68g;
    }
  }function njihm(sc6goa, $5ldi0) {
    for (; sc6goa >= ec8z2t && ($5ldi0 = x91rku['exec'](bd5$0l));) drbvfw = $5ldi0['index'], ec8z2t = drbvfw + $5ldi0[0x0]['length'], bdf$0['lineNumber']++;bdf$0['columnNumber'] = sc6goa - drbvfw + 0x1;
  }for (var drbvfw = 0x0, ec8z2t = 0x0, x91rku = /.*(?:\r\n?|\n)|.*$/g, bdf$0 = dfrb['locator'], i05ld$ = [{ 'currentNSMap': ilh5n }], wv91rf = {}, vrbdw = 0x0;;) {
    try {
      var cg86ao = bd5$0l['indexOf']('<', vrbdw);if (0x0 > cg86ao) {
        if (!bd5$0l['substr'](vrbdw)['match'](/^\s*$/)) {
          var i5hmn = dfrb['doc'],
              wrv1 = i5hmn['createTextNode'](bd5$0l['substr'](vrbdw));i5hmn['appendChild'](wrv1), dfrb['currentElement'] = wrv1;
        }return;
      }switch (cg86ao > vrbdw && $fdwv(cg86ao), bd5$0l['charAt'](cg86ao + 0x1)) {case '/':
          var a6sg4 = bd5$0l['indexOf']('>', cg86ao + 0x3),
              kvrf1 = bd5$0l['substring'](cg86ao + 0x2, a6sg4),
              a6s4 = i05ld$['pop']();0x0 > a6sg4 ? (kvrf1 = bd5$0l['substring'](cg86ao + 0x2)['replace'](/[\s<].*/, ''), x91kru['error']('end tag name: ' + kvrf1 + ' is not complete:' + a6s4['tagName']), a6sg4 = cg86ao + 0x1 + kvrf1['length']) : kvrf1['match'](/\s</) && (kvrf1 = kvrf1['replace'](/[\s<].*/, ''), x91kru['error']('end tag name: ' + kvrf1 + ' maybe not complete'), a6sg4 = cg86ao + 0x1 + kvrf1['length']);var rx9k1u = a6s4['localNSMap'],
              il05n = a6s4['tagName'] == kvrf1,
              _4gos6 = il05n || a6s4['tagName'] && a6s4['tagName']['toLowerCase']() == kvrf1['toLowerCase']();if (_4gos6) {
            if (dfrb['endElement'](a6s4['uri'], a6s4['localName'], kvrf1), rx9k1u) {
              for (var a82 in rx9k1u) dfrb['endPrefixMapping'](a82);
            }il05n || x91kru['fatalError']('end tag name: ' + kvrf1 + ' is not match the current start tagName:' + a6s4['tagName']);
          } else i05ld$['push'](a6s4);a6sg4++;break;case '?':
          bdf$0 && njihm(cg86ao), a6sg4 = M_ji5mhn(bd5$0l, cg86ao, dfrb);break;case '!':
          bdf$0 && njihm(cg86ao), a6sg4 = M_zep82t(bd5$0l, cg86ao, dfrb, x91kru);break;default:
          bdf$0 && njihm(cg86ao);var s_4o = new M_n5mij(),
              $bd50 = i05ld$[i05ld$['length'] - 0x1]['currentNSMap'],
              a6sg4 = M_$b0ldw(bd5$0l, cg86ao, s_4o, $bd50, rdbvwf, x91kru),
              $5db0 = s_4o['length'];if (!s_4o['closed'] && M__g6os(bd5$0l, a6sg4, s_4o['tagName'], wv91rf) && (s_4o['closed'] = !0x0, rvb9w['nbsp'] || x91kru['warning']('unclosed xml attribute')), bdf$0 && $5db0) {
            for (var g68a = M_ace8t(bdf$0, {}), _67o = 0x0; $5db0 > _67o; _67o++) {
              var ijnmh = s_4o[_67o];njihm(ijnmh['offset']), ijnmh['locator'] = M_ace8t(bdf$0, {});
            }dfrb['locator'] = g68a, M_b5d$0(s_4o, dfrb, $bd50) && i05ld$['push'](s_4o), dfrb['locator'] = bdf$0;
          } else M_b5d$0(s_4o, dfrb, $bd50) && i05ld$['push'](s_4o);'http://www.w3.org/1999/xhtml' !== s_4o['uri'] || s_4o['closed'] ? a6sg4++ : a6sg4 = M_gc8a(bd5$0l, a6sg4, s_4o['tagName'], rdbvwf, dfrb);}
    } catch (w1fv) {
      x91kru['error']('element parse error: ' + w1fv), a6sg4 = -0x1;
    }a6sg4 > vrbdw ? vrbdw = a6sg4 : $fdwv(Math['max'](cg86ao, vrbdw) + 0x1);
  }
}function M_ace8t(n5h0il, wf$vbd) {
  return wf$vbd['lineNumber'] = n5h0il['lineNumber'], wf$vbd['columnNumber'] = n5h0il['columnNumber'], wf$vbd;
}function M_$b0ldw(j_746s, $b0wdl, mhni5, hijn5, a82ec, j5mhn) {
  for (var qykx3, a8tc, drbvf = ++$b0wdl, $5n0 = M_o6c;;) {
    var xurk = j_746s['charAt'](drbvf);switch (xurk) {case '=':
        if ($5n0 === M_mj_n7) qykx3 = j_746s['slice']($b0wdl, drbvf), $5n0 = M_ca6os;else {
          if ($5n0 !== M_bl05d$) throw new Error('attribute equal must after attrName');$5n0 = M_ca6os;
        }break;case '\x27':case '\x22':
        if ($5n0 === M_ca6os || $5n0 === M_mj_n7) {
          if ($5n0 === M_mj_n7 && (j5mhn['warning']('attribute value must after "="'), qykx3 = j_746s['slice']($b0wdl, drbvf)), $b0wdl = drbvf + 0x1, drbvf = j_746s['indexOf'](xurk, $b0wdl), !(drbvf > 0x0)) throw new Error('attribute value no end \'' + xurk + '\' match');a8tc = j_746s['slice']($b0wdl, drbvf)['replace'](/&#?\w+;/g, a82ec), mhni5['add'](qykx3, a8tc, $b0wdl - 0x1), $5n0 = M_ez2t8;
        } else {
          if ($5n0 != M_l0dw) throw new Error('attribute value must after "="');a8tc = j_746s['slice']($b0wdl, drbvf)['replace'](/&#?\w+;/g, a82ec), mhni5['add'](qykx3, a8tc, $b0wdl), j5mhn['warning']('attribute "' + qykx3 + '" missed start quot(' + xurk + ')!!'), $b0wdl = drbvf + 0x1, $5n0 = M_ez2t8;
        }break;case '/':
        switch ($5n0) {case M_o6c:
            mhni5['setTagName'](j_746s['slice']($b0wdl, drbvf));case M_ez2t8:case M_eog8ca:case M_vbr9f:
            $5n0 = M_vbr9f, mhni5['closed'] = !0x0;case M_l0dw:case M_mj_n7:case M_bl05d$:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return j5mhn['error']('unexpected end of input'), $5n0 == M_o6c && mhni5['setTagName'](j_746s['slice']($b0wdl, drbvf)), drbvf;case '>':
        switch ($5n0) {case M_o6c:
            mhni5['setTagName'](j_746s['slice']($b0wdl, drbvf));case M_ez2t8:case M_eog8ca:case M_vbr9f:
            break;case M_l0dw:case M_mj_n7:
            a8tc = j_746s['slice']($b0wdl, drbvf), '/' === a8tc['slice'](-0x1) && (mhni5['closed'] = !0x0, a8tc = a8tc['slice'](0x0, -0x1));case M_bl05d$:
            $5n0 === M_bl05d$ && (a8tc = qykx3), $5n0 == M_l0dw ? (j5mhn['warning']('attribute "' + a8tc + '" missed quot(")!!'), mhni5['add'](qykx3, a8tc['replace'](/&#?\w+;/g, a82ec), $b0wdl)) : ('http://www.w3.org/1999/xhtml' === hijn5[''] && a8tc['match'](/^(?:disabled|checked|selected)$/i) || j5mhn['warning']('attribute "' + a8tc + '" missed value!! "' + a8tc + '" instead!!'), mhni5['add'](a8tc, a8tc, $b0wdl));break;case M_ca6os:
            throw new Error('attribute value missed!!');}return drbvf;case '\u0080':
        xurk = '\x20';default:
        if ('\x20' >= xurk) switch ($5n0) {case M_o6c:
            mhni5['setTagName'](j_746s['slice']($b0wdl, drbvf)), $5n0 = M_eog8ca;break;case M_mj_n7:
            qykx3 = j_746s['slice']($b0wdl, drbvf), $5n0 = M_bl05d$;break;case M_l0dw:
            var a8tc = j_746s['slice']($b0wdl, drbvf)['replace'](/&#?\w+;/g, a82ec);j5mhn['warning']('attribute "' + a8tc + '" missed quot(")!!'), mhni5['add'](qykx3, a8tc, $b0wdl);case M_ez2t8:
            $5n0 = M_eog8ca;} else switch ($5n0) {case M_bl05d$:
            {
              mhni5['tagName'];
            }'http://www.w3.org/1999/xhtml' === hijn5[''] && qykx3['match'](/^(?:disabled|checked|selected)$/i) || j5mhn['warning']('attribute "' + qykx3 + '" missed value!! "' + qykx3 + '" instead2!!'), mhni5['add'](qykx3, qykx3, $b0wdl), $b0wdl = drbvf, $5n0 = M_mj_n7;break;case M_ez2t8:
            j5mhn['warning']('attribute space is required"' + qykx3 + '\x22!!');case M_eog8ca:
            $5n0 = M_mj_n7, $b0wdl = drbvf;break;case M_ca6os:
            $5n0 = M_l0dw, $b0wdl = drbvf;break;case M_vbr9f:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}drbvf++;
  }
}function M_b5d$0(_76s4o, xykqu3, o8egca) {
  for (var jhi5n = _76s4o['tagName'], _smj = null, vrk91x = _76s4o['length']; vrk91x--;) {
    var x9ru1k = _76s4o[vrk91x],
        i$l0n = x9ru1k['qName'],
        dwfvbr = x9ru1k['value'],
        js47_6 = i$l0n['indexOf'](':');if (js47_6 > 0x0) var b$wfd0 = x9ru1k['prefix'] = i$l0n['slice'](0x0, js47_6),
        vkxr19 = i$l0n['slice'](js47_6 + 0x1),
        o6g = 'xmlns' === b$wfd0 && vkxr19;else vkxr19 = i$l0n, b$wfd0 = null, o6g = 'xmlns' === i$l0n && '';x9ru1k['localName'] = vkxr19, o6g !== !0x1 && (null == _smj && (_smj = {}, M_wv1rf9(o8egca, o8egca = {})), o8egca[o6g] = _smj[o6g] = dwfvbr, x9ru1k['uri'] = 'http://www.w3.org/2000/xmlns/', xykqu3['startPrefixMapping'](o6g, dwfvbr));
  }for (var vrk91x = _76s4o['length']; vrk91x--;) {
    x9ru1k = _76s4o[vrk91x];var b$wfd0 = x9ru1k['prefix'];b$wfd0 && ('xml' === b$wfd0 && (x9ru1k['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== b$wfd0 && (x9ru1k['uri'] = o8egca[b$wfd0 || '']));
  }var js47_6 = jhi5n['indexOf'](':');js47_6 > 0x0 ? (b$wfd0 = _76s4o['prefix'] = jhi5n['slice'](0x0, js47_6), vkxr19 = _76s4o['localName'] = jhi5n['slice'](js47_6 + 0x1)) : (b$wfd0 = null, vkxr19 = _76s4o['localName'] = jhi5n);var frwv1 = _76s4o['uri'] = o8egca[b$wfd0 || ''];if (xykqu3['startElement'](frwv1, vkxr19, jhi5n, _76s4o), !_76s4o['closed']) return _76s4o['currentNSMap'] = o8egca, _76s4o['localNSMap'] = _smj, !0x0;if (xykqu3['endElement'](frwv1, vkxr19, jhi5n), _smj) {
    for (b$wfd0 in _smj) xykqu3['endPrefixMapping'](b$wfd0);
  }
}function M_gc8a(imnjh, j7s_m4, uykqx3, rfk, _j764s) {
  if (/^(?:script|textarea)$/i['test'](uykqx3)) {
    var jmn_7h = imnjh['indexOf']('</' + uykqx3 + '>', j7s_m4),
        uy1k9 = imnjh['substring'](j7s_m4 + 0x1, jmn_7h);if (/[&<]/['test'](uy1k9)) return (/^script$/i['test'](uykqx3) ? (_j764s['characters'](uy1k9, 0x0, uy1k9['length']), jmn_7h) : (uy1k9 = uy1k9['replace'](/&#?\w+;/g, rfk), _j764s['characters'](uy1k9, 0x0, uy1k9['length']), jmn_7h)
    );
  }return j7s_m4 + 0x1;
}function M__g6os(epzt28, njhi, bwf0d$, ln$0i5) {
  var k1vr = ln$0i5[bwf0d$];return null == k1vr && (k1vr = epzt28['lastIndexOf']('</' + bwf0d$ + '>'), njhi > k1vr && (k1vr = epzt28['lastIndexOf']('</' + bwf0d$)), ln$0i5[bwf0d$] = k1vr), njhi > k1vr;
}function M_wv1rf9(d0bwf$, uxy9k1) {
  for (var min5jh in d0bwf$) uxy9k1[min5jh] = d0bwf$[min5jh];
}function M_zep82t(l$05b, a8og6, agsc6o, _s476o) {
  var hl0in5 = l$05b['charAt'](a8og6 + 0x2);switch (hl0in5) {case '-':
      if ('-' === l$05b['charAt'](a8og6 + 0x3)) {
        var fd$vbw = l$05b['indexOf']('-->', a8og6 + 0x4);return fd$vbw > a8og6 ? (agsc6o['comment'](l$05b, a8og6 + 0x4, fd$vbw - a8og6 - 0x4), fd$vbw + 0x3) : (_s476o['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == l$05b['substr'](a8og6 + 0x3, 0x6)) {
        var fd$vbw = l$05b['indexOf'](']]>', a8og6 + 0x9);return agsc6o['startCDATA'](), agsc6o['characters'](l$05b, a8og6 + 0x9, fd$vbw - a8og6 - 0x9), agsc6o['endCDATA'](), fd$vbw + 0x3;
      }var wbr = M_nhli05(l$05b, a8og6),
          a46os = wbr['length'];if (a46os > 0x1 && /!doctype/i['test'](wbr[0x0][0x0])) {
        var coa86 = wbr[0x1][0x0],
            oa8g6 = a46os > 0x3 && /^public$/i['test'](wbr[0x2][0x0]) && wbr[0x3][0x0],
            o6as4 = a46os > 0x4 && wbr[0x4][0x0],
            l$d5b = wbr[a46os - 0x1];return agsc6o['startDTD'](coa86, oa8g6 && oa8g6['replace'](/^(['"])(.*?)\1$/, '$2'), o6as4 && o6as4['replace'](/^(['"])(.*?)\1$/, '$2')), agsc6o['endDTD'](), l$d5b['index'] + l$d5b[0x0]['length'];
      }}return -0x1;
}function M_ji5mhn(bdwv, ceog8, o46gs_) {
  var fw$bv = bdwv['indexOf']('?>', ceog8);if (fw$bv) {
    var a86ocg = bdwv['substring'](ceog8, fw$bv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (a86ocg) {
      {
        a86ocg[0x0]['length'];
      }return o46gs_['processingInstruction'](a86ocg[0x1], a86ocg[0x2]), fw$bv + 0x2;
    }return -0x1;
  }return -0x1;
}function M_n5mij() {}function M_fwv$db(e2zc8t, fdvbw$) {
  return e2zc8t['__proto__'] = fdvbw$, e2zc8t;
}function M_nhli05(og6a4, l0$b) {
  var dl$b05,
      l$05d = [],
      j47_6s = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (j47_6s['lastIndex'] = l0$b, j47_6s['exec'](og6a4); dl$b05 = j47_6s['exec'](og6a4);) if (l$05d['push'](dl$b05), dl$b05[0x1]) return l$05d;
}var M__j46s = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_os7_ = new RegExp('[\\-\\.0-9' + M__j46s['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_v9x1 = new RegExp('^' + M__j46s['source'] + M_os7_['source'] + '*(?::' + M__j46s['source'] + M_os7_['source'] + '*)?$'),
    M_o6c = 0x0,
    M_mj_n7 = 0x1,
    M_bl05d$ = 0x2,
    M_ca6os = 0x3,
    M_l0dw = 0x4,
    M_ez2t8 = 0x5,
    M_eog8ca = 0x6,
    M_vbr9f = 0x7;M_yqx1['prototype'] = { 'parse': function (ca8eog, ta28, z2pt8) {
    var v9brw = this['domBuilder'];v9brw['startDocument'](), M_wv1rf9(ta28, ta28 = {}), M_hi0(ca8eog, ta28, z2pt8, v9brw, this['errorHandler']), v9brw['endDocument']();
  } }, M_n5mij['prototype'] = { 'setTagName': function (f9k1v) {
    if (!M_v9x1['test'](f9k1v)) throw new Error('invalid tagName:' + f9k1v);this['tagName'] = f9k1v;
  }, 'add': function (n0ihl, aocg68, u9xkr) {
    if (!M_v9x1['test'](n0ihl)) throw new Error('invalid attribute:' + n0ihl);this[this['length']++] = { 'qName': n0ihl, 'value': aocg68, 'offset': u9xkr };
  }, 'length': 0x0, 'getLocalName': function (r9bvf) {
    return this[r9bvf]['localName'];
  }, 'getLocator': function (j7imnh) {
    return this[j7imnh]['locator'];
  }, 'getQName': function (b0$l5) {
    return this[b0$l5]['qName'];
  }, 'getURI': function (fbvd$) {
    return this[fbvd$]['uri'];
  }, 'getValue': function (kr9u1x) {
    return this[kr9u1x]['value'];
  } }, M_fwv$db({}, M_fwv$db['prototype']) instanceof M_fwv$db || (M_fwv$db = function (s7j, qxkuy1) {
  function js_74() {}js_74['prototype'] = qxkuy1, js_74 = new js_74();for (qxkuy1 in s7j) js_74[qxkuy1] = s7j[qxkuy1];return js_74;
}), exports['XMLReader'] = M_yqx1;