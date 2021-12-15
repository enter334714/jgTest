var Y = wx.$M;
function M__h74j() {}function M_k1rfv9(kxr91v, tz2ec, v1r9fw, wdbfv, ca8te2) {
  function $bwfvd(_js746) {
    if (_js746 > 0xffff) {
      _js746 -= 0x10000;var vbrf9 = 0xd800 + (_js746 >> 0xa),
          rv9f = 0xdc00 + (0x3ff & _js746);return String['fromCharCode'](vbrf9, rv9f);
    }return String['fromCharCode'](_js746);
  }function tcea(fd$wbv) {
    var asc6o = fd$wbv['slice'](0x1, -0x1);return asc6o in v1r9fw ? v1r9fw[asc6o] : '#' === asc6o['charAt'](0x0) ? $bwfvd(parseInt(asc6o['substr'](0x1)['replace']('x', '0x'))) : (ca8te2['error']('entity not found:' + fd$wbv), fd$wbv);
  }function soa(d$w0f) {
    if (d$w0f > l$i0d5) {
      var nil5$0 = kxr91v['substring'](l$i0d5, d$w0f)['replace'](/&#?\w+;/g, tcea);i0dl5$ && aog8ce(l$i0d5), wdbfv['characters'](nil5$0, 0x0, d$w0f - l$i0d5), l$i0d5 = d$w0f;
    }
  }function aog8ce(e8ao, te2a8c) {
    for (; e8ao >= lmh5n && (te2a8c = lbwd0['exec'](kxr91v));) jnm5i = te2a8c['index'], lmh5n = jnm5i + te2a8c[0x0]['length'], i0dl5$['lineNumber']++;i0dl5$['columnNumber'] = e8ao - jnm5i + 0x1;
  }for (var jnm5i = 0x0, lmh5n = 0x0, lbwd0 = /.*(?:\r\n?|\n)|.*$/g, i0dl5$ = wdbfv['locator'], ep8tz = [{ 'currentNSMap': tz2ec }], rv9kf = {}, l$i0d5 = 0x0;;) {
    try {
      var ceao = kxr91v['indexOf']('<', l$i0d5);if (0x0 > ceao) {
        if (!kxr91v['substr'](l$i0d5)['match'](/^\s*$/)) {
          var te82ca = wdbfv['doc'],
              t8zp = te82ca['createTextNode'](kxr91v['substr'](l$i0d5));te82ca['appendChild'](t8zp), wdbfv['currentElement'] = t8zp;
        }return;
      }switch (ceao > l$i0d5 && soa(ceao), kxr91v['charAt'](ceao + 0x1)) {case '/':
          var li5mn = kxr91v['indexOf']('>', ceao + 0x3),
              s7mj_ = kxr91v['substring'](ceao + 0x2, li5mn),
              _j46 = ep8tz['pop']();0x0 > li5mn ? (s7mj_ = kxr91v['substring'](ceao + 0x2)['replace'](/[\s<].*/, ''), ca8te2['error']('end tag name: ' + s7mj_ + ' is not complete:' + _j46['tagName']), li5mn = ceao + 0x1 + s7mj_['length']) : s7mj_['match'](/\s</) && (s7mj_ = s7mj_['replace'](/[\s<].*/, ''), ca8te2['error']('end tag name: ' + s7mj_ + ' maybe not complete'), li5mn = ceao + 0x1 + s7mj_['length']);var lwd0b$ = _j46['localNSMap'],
              urk1x = _j46['tagName'] == s7mj_,
              g4sao = urk1x || _j46['tagName'] && _j46['tagName']['toLowerCase']() == s7mj_['toLowerCase']();if (g4sao) {
            if (wdbfv['endElement'](_j46['uri'], _j46['localName'], s7mj_), lwd0b$) {
              for (var $5bdl in lwd0b$) wdbfv['endPrefixMapping']($5bdl);
            }urk1x || ca8te2['fatalError']('end tag name: ' + s7mj_ + ' is not match the current start tagName:' + _j46['tagName']);
          } else ep8tz['push'](_j46);li5mn++;break;case '?':
          i0dl5$ && aog8ce(ceao), li5mn = M_g2ac8(kxr91v, ceao, wdbfv);break;case '!':
          i0dl5$ && aog8ce(ceao), li5mn = M_o6_g4(kxr91v, ceao, wdbfv, ca8te2);break;default:
          i0dl5$ && aog8ce(ceao);var dwb$v = new M_c2a8g(),
              bv9fw = ep8tz[ep8tz['length'] - 0x1]['currentNSMap'],
              li5mn = M_f$dbwv(kxr91v, ceao, dwb$v, bv9fw, tcea, ca8te2),
              zpt = dwb$v['length'];if (!dwb$v['closed'] && M_il0n5h(kxr91v, li5mn, dwb$v['tagName'], rv9kf) && (dwb$v['closed'] = !0x0, v1r9fw['nbsp'] || ca8te2['warning']('unclosed xml attribute')), i0dl5$ && zpt) {
            for (var yxkq1u = M_ku1xy(i0dl5$, {}), _6s7 = 0x0; zpt > _6s7; _6s7++) {
              var $wdl0b = dwb$v[_6s7];aog8ce($wdl0b['offset']), $wdl0b['locator'] = M_ku1xy(i0dl5$, {});
            }wdbfv['locator'] = yxkq1u, M__7(dwb$v, wdbfv, bv9fw) && ep8tz['push'](dwb$v), wdbfv['locator'] = i0dl5$;
          } else M__7(dwb$v, wdbfv, bv9fw) && ep8tz['push'](dwb$v);'http://www.w3.org/1999/xhtml' !== dwb$v['uri'] || dwb$v['closed'] ? li5mn++ : li5mn = M_kq3uy(kxr91v, li5mn, dwb$v['tagName'], tcea, wdbfv);}
    } catch (rbfdvw) {
      ca8te2['error']('element parse error: ' + rbfdvw), li5mn = -0x1;
    }li5mn > l$i0d5 ? l$i0d5 = li5mn : soa(Math['max'](ceao, l$i0d5) + 0x1);
  }
}function M_ku1xy(k9rvx1, mjni7h) {
  return mjni7h['lineNumber'] = k9rvx1['lineNumber'], mjni7h['columnNumber'] = k9rvx1['columnNumber'], mjni7h;
}function M_f$dbwv(fwb, v19kxr, $5il0n, in5l$0, ag28c, uy9x1) {
  for (var v9rbfw, j46s7_, u1qky = ++v19kxr, ac28te = M_nih05l;;) {
    var l$b0 = fwb['charAt'](u1qky);switch (l$b0) {case '=':
        if (ac28te === M_e2pz) v9rbfw = fwb['slice'](v19kxr, u1qky), ac28te = M_goe8;else {
          if (ac28te !== M_i0n5$l) throw new Error('attribute equal must after attrName');ac28te = M_goe8;
        }break;case '\x27':case '\x22':
        if (ac28te === M_goe8 || ac28te === M_e2pz) {
          if (ac28te === M_e2pz && (uy9x1['warning']('attribute value must after "="'), v9rbfw = fwb['slice'](v19kxr, u1qky)), v19kxr = u1qky + 0x1, u1qky = fwb['indexOf'](l$b0, v19kxr), !(u1qky > 0x0)) throw new Error('attribute value no end \'' + l$b0 + '\' match');j46s7_ = fwb['slice'](v19kxr, u1qky)['replace'](/&#?\w+;/g, ag28c), $5il0n['add'](v9rbfw, j46s7_, v19kxr - 0x1), ac28te = M_vx;
        } else {
          if (ac28te != M_w1fvr) throw new Error('attribute value must after "="');j46s7_ = fwb['slice'](v19kxr, u1qky)['replace'](/&#?\w+;/g, ag28c), $5il0n['add'](v9rbfw, j46s7_, v19kxr), uy9x1['warning']('attribute "' + v9rbfw + '" missed start quot(' + l$b0 + ')!!'), v19kxr = u1qky + 0x1, ac28te = M_vx;
        }break;case '/':
        switch (ac28te) {case M_nih05l:
            $5il0n['setTagName'](fwb['slice'](v19kxr, u1qky));case M_vx:case M_$l5di:case M_ce28a:
            ac28te = M_ce28a, $5il0n['closed'] = !0x0;case M_w1fvr:case M_e2pz:case M_i0n5$l:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return uy9x1['error']('unexpected end of input'), ac28te == M_nih05l && $5il0n['setTagName'](fwb['slice'](v19kxr, u1qky)), u1qky;case '>':
        switch (ac28te) {case M_nih05l:
            $5il0n['setTagName'](fwb['slice'](v19kxr, u1qky));case M_vx:case M_$l5di:case M_ce28a:
            break;case M_w1fvr:case M_e2pz:
            j46s7_ = fwb['slice'](v19kxr, u1qky), '/' === j46s7_['slice'](-0x1) && ($5il0n['closed'] = !0x0, j46s7_ = j46s7_['slice'](0x0, -0x1));case M_i0n5$l:
            ac28te === M_i0n5$l && (j46s7_ = v9rbfw), ac28te == M_w1fvr ? (uy9x1['warning']('attribute "' + j46s7_ + '" missed quot(")!!'), $5il0n['add'](v9rbfw, j46s7_['replace'](/&#?\w+;/g, ag28c), v19kxr)) : ('http://www.w3.org/1999/xhtml' === in5l$0[''] && j46s7_['match'](/^(?:disabled|checked|selected)$/i) || uy9x1['warning']('attribute "' + j46s7_ + '" missed value!! "' + j46s7_ + '" instead!!'), $5il0n['add'](j46s7_, j46s7_, v19kxr));break;case M_goe8:
            throw new Error('attribute value missed!!');}return u1qky;case '\u0080':
        l$b0 = '\x20';default:
        if ('\x20' >= l$b0) switch (ac28te) {case M_nih05l:
            $5il0n['setTagName'](fwb['slice'](v19kxr, u1qky)), ac28te = M_$l5di;break;case M_e2pz:
            v9rbfw = fwb['slice'](v19kxr, u1qky), ac28te = M_i0n5$l;break;case M_w1fvr:
            var j46s7_ = fwb['slice'](v19kxr, u1qky)['replace'](/&#?\w+;/g, ag28c);uy9x1['warning']('attribute "' + j46s7_ + '" missed quot(")!!'), $5il0n['add'](v9rbfw, j46s7_, v19kxr);case M_vx:
            ac28te = M_$l5di;} else switch (ac28te) {case M_i0n5$l:
            {
              $5il0n['tagName'];
            }'http://www.w3.org/1999/xhtml' === in5l$0[''] && v9rbfw['match'](/^(?:disabled|checked|selected)$/i) || uy9x1['warning']('attribute "' + v9rbfw + '" missed value!! "' + v9rbfw + '" instead2!!'), $5il0n['add'](v9rbfw, v9rbfw, v19kxr), v19kxr = u1qky, ac28te = M_e2pz;break;case M_vx:
            uy9x1['warning']('attribute space is required"' + v9rbfw + '\x22!!');case M_$l5di:
            ac28te = M_e2pz, v19kxr = u1qky;break;case M_goe8:
            ac28te = M_w1fvr, v19kxr = u1qky;break;case M_ce28a:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}u1qky++;
  }
}function M__7(gce2, hli50n, z8cet) {
  for (var uyx1kq = gce2['tagName'], t82ace = null, l$ni5 = gce2['length']; l$ni5--;) {
    var w9rbfv = gce2[l$ni5],
        $bw0 = w9rbfv['qName'],
        bf9v = w9rbfv['value'],
        bwrfd = $bw0['indexOf'](':');if (bwrfd > 0x0) var r1vf9w = w9rbfv['prefix'] = $bw0['slice'](0x0, bwrfd),
        mjn5 = $bw0['slice'](bwrfd + 0x1),
        nm7ij = 'xmlns' === r1vf9w && mjn5;else mjn5 = $bw0, r1vf9w = null, nm7ij = 'xmlns' === $bw0 && '';w9rbfv['localName'] = mjn5, nm7ij !== !0x1 && (null == t82ace && (t82ace = {}, M_gao46s(z8cet, z8cet = {})), z8cet[nm7ij] = t82ace[nm7ij] = bf9v, w9rbfv['uri'] = 'http://www.w3.org/2000/xmlns/', hli50n['startPrefixMapping'](nm7ij, bf9v));
  }for (var l$ni5 = gce2['length']; l$ni5--;) {
    w9rbfv = gce2[l$ni5];var r1vf9w = w9rbfv['prefix'];r1vf9w && ('xml' === r1vf9w && (w9rbfv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r1vf9w && (w9rbfv['uri'] = z8cet[r1vf9w || '']));
  }var bwrfd = uyx1kq['indexOf'](':');bwrfd > 0x0 ? (r1vf9w = gce2['prefix'] = uyx1kq['slice'](0x0, bwrfd), mjn5 = gce2['localName'] = uyx1kq['slice'](bwrfd + 0x1)) : (r1vf9w = null, mjn5 = gce2['localName'] = uyx1kq);var ijh7nm = gce2['uri'] = z8cet[r1vf9w || ''];if (hli50n['startElement'](ijh7nm, mjn5, uyx1kq, gce2), !gce2['closed']) return gce2['currentNSMap'] = z8cet, gce2['localNSMap'] = t82ace, !0x0;if (hli50n['endElement'](ijh7nm, mjn5, uyx1kq), t82ace) {
    for (r1vf9w in t82ace) hli50n['endPrefixMapping'](r1vf9w);
  }
}function M_kq3uy(nilm5h, uyxk19, pz2t8, vf9k1, d50i$l) {
  if (/^(?:script|textarea)$/i['test'](pz2t8)) {
    var e8a2ct = nilm5h['indexOf']('</' + pz2t8 + '>', uyxk19),
        vfwr91 = nilm5h['substring'](uyxk19 + 0x1, e8a2ct);if (/[&<]/['test'](vfwr91)) return (/^script$/i['test'](pz2t8) ? (d50i$l['characters'](vfwr91, 0x0, vfwr91['length']), e8a2ct) : (vfwr91 = vfwr91['replace'](/&#?\w+;/g, vf9k1), d50i$l['characters'](vfwr91, 0x0, vfwr91['length']), e8a2ct)
    );
  }return uyxk19 + 0x1;
}function M_il0n5h(y9xuk1, hnmil5, oe8a, u3kqy) {
  var go64sa = u3kqy[oe8a];return null == go64sa && (go64sa = y9xuk1['lastIndexOf']('</' + oe8a + '>'), hnmil5 > go64sa && (go64sa = y9xuk1['lastIndexOf']('</' + oe8a)), u3kqy[oe8a] = go64sa), hnmil5 > go64sa;
}function M_gao46s(j7s64, uy3k) {
  for (var xykq1u in j7s64) uy3k[xykq1u] = j7s64[xykq1u];
}function M_o6_g4(kvrf, ux9y1, jmih5n, s6a4o) {
  var dbvfwr = kvrf['charAt'](ux9y1 + 0x2);switch (dbvfwr) {case '-':
      if ('-' === kvrf['charAt'](ux9y1 + 0x3)) {
        var _46sj7 = kvrf['indexOf']('-->', ux9y1 + 0x4);return _46sj7 > ux9y1 ? (jmih5n['comment'](kvrf, ux9y1 + 0x4, _46sj7 - ux9y1 - 0x4), _46sj7 + 0x3) : (s6a4o['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kvrf['substr'](ux9y1 + 0x3, 0x6)) {
        var _46sj7 = kvrf['indexOf'](']]>', ux9y1 + 0x9);return jmih5n['startCDATA'](), jmih5n['characters'](kvrf, ux9y1 + 0x9, _46sj7 - ux9y1 - 0x9), jmih5n['endCDATA'](), _46sj7 + 0x3;
      }var l0$wbd = M_uqk3y(kvrf, ux9y1),
          aogc8 = l0$wbd['length'];if (aogc8 > 0x1 && /!doctype/i['test'](l0$wbd[0x0][0x0])) {
        var vfd = l0$wbd[0x1][0x0],
            uk91yx = aogc8 > 0x3 && /^public$/i['test'](l0$wbd[0x2][0x0]) && l0$wbd[0x3][0x0],
            ta28ec = aogc8 > 0x4 && l0$wbd[0x4][0x0],
            gae8oc = l0$wbd[aogc8 - 0x1];return jmih5n['startDTD'](vfd, uk91yx && uk91yx['replace'](/^(['"])(.*?)\1$/, '$2'), ta28ec && ta28ec['replace'](/^(['"])(.*?)\1$/, '$2')), jmih5n['endDTD'](), gae8oc['index'] + gae8oc[0x0]['length'];
      }}return -0x1;
}function M_g2ac8(o46_s, n5lhmi, jhmn7i) {
  var $0n5i = o46_s['indexOf']('?>', n5lhmi);if ($0n5i) {
    var mjn_h7 = o46_s['substring'](n5lhmi, $0n5i)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mjn_h7) {
      {
        mjn_h7[0x0]['length'];
      }return jhmn7i['processingInstruction'](mjn_h7[0x1], mjn_h7[0x2]), $0n5i + 0x2;
    }return -0x1;
  }return -0x1;
}function M_c2a8g() {}function M_ctae2(asogc6, ztpe2) {
  return asogc6['__proto__'] = ztpe2, asogc6;
}function M_uqk3y(uk91y, qy3ku) {
  var in50$l,
      os_67 = [],
      i7mnjh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (i7mnjh['lastIndex'] = qy3ku, i7mnjh['exec'](uk91y); in50$l = i7mnjh['exec'](uk91y);) if (os_67['push'](in50$l), in50$l[0x1]) return os_67;
}var M_cgsa = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_krx9v = new RegExp('[\\-\\.0-9' + M_cgsa['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_q3kyux = new RegExp('^' + M_cgsa['source'] + M_krx9v['source'] + '*(?::' + M_cgsa['source'] + M_krx9v['source'] + '*)?$'),
    M_nih05l = 0x0,
    M_e2pz = 0x1,
    M_i0n5$l = 0x2,
    M_goe8 = 0x3,
    M_w1fvr = 0x4,
    M_vx = 0x5,
    M_$l5di = 0x6,
    M_ce28a = 0x7;M__h74j['prototype'] = { 'parse': function (fdw$b, o_6s, j4mh_) {
    var ur9x = this['domBuilder'];ur9x['startDocument'](), M_gao46s(o_6s, o_6s = {}), M_k1rfv9(fdw$b, o_6s, j4mh_, ur9x, this['errorHandler']), ur9x['endDocument']();
  } }, M_c2a8g['prototype'] = { 'setTagName': function (rfvk) {
    if (!M_q3kyux['test'](rfvk)) throw new Error('invalid tagName:' + rfvk);this['tagName'] = rfvk;
  }, 'add': function (hin5j, $dlwb0, wvf$bd) {
    if (!M_q3kyux['test'](hin5j)) throw new Error('invalid attribute:' + hin5j);this[this['length']++] = { 'qName': hin5j, 'value': $dlwb0, 'offset': wvf$bd };
  }, 'length': 0x0, 'getLocalName': function (ezt8p) {
    return this[ezt8p]['localName'];
  }, 'getLocator': function (aegco8) {
    return this[aegco8]['locator'];
  }, 'getQName': function (cgo86) {
    return this[cgo86]['qName'];
  }, 'getURI': function (qux1) {
    return this[qux1]['uri'];
  }, 'getValue': function (oca68) {
    return this[oca68]['value'];
  } }, M_ctae2({}, M_ctae2['prototype']) instanceof M_ctae2 || (M_ctae2 = function (os_4g, uqkxy1) {
  function s_4o67() {}s_4o67['prototype'] = uqkxy1, s_4o67 = new s_4o67();for (uqkxy1 in os_4g) s_4o67[uqkxy1] = os_4g[uqkxy1];return s_4o67;
}), exports['XMLReader'] = M__h74j;