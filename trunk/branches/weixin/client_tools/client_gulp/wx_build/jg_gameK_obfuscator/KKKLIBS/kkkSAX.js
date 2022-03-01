var U = wx.$k;
function K1_r5pgf() {}function K1_n20q89(fyg5, s08k92, uad_, k2h, adl$xu) {
  function n8qv10(r_ldu$) {
    if (r_ldu$ > 0xffff) {
      r_ldu$ -= 0x10000;var p5$_ = 0xd800 + (r_ldu$ >> 0xa),
          v1zow = 0xdc00 + (0x3ff & r_ldu$);return String['fromCharCode'](p5$_, v1zow);
    }return String['fromCharCode'](r_ldu$);
  }function thi6k(ikse6h) {
    var zual = ikse6h['slice'](0x1, -0x1);return zual in uad_ ? uad_[zual] : '#' === zual['charAt'](0x0) ? n8qv10(parseInt(zual['substr'](0x1)['replace']('x', '0x'))) : (adl$xu['error']('entity not found:' + ikse6h), ikse6h);
  }function xbozvw(lxbau) {
    if (lxbau > ual$d) {
      var ek96sh = fyg5['substring'](ual$d, lxbau)['replace'](/&#?\w+;/g, thi6k);bovw1 && $a_ud(ual$d), k2h['characters'](ek96sh, 0x0, lxbau - ual$d), ual$d = lxbau;
    }
  }function $a_ud(awbzo, ud$_la) {
    for (; awbzo >= wvz && (ud$_la = s6ieh['exec'](fyg5));) v1nbw = ud$_la['index'], wvz = v1nbw + ud$_la[0x0]['length'], bovw1['lineNumber']++;bovw1['columnNumber'] = awbzo - v1nbw + 0x1;
  }for (var v1nbw = 0x0, wvz = 0x0, s6ieh = /.*(?:\r\n?|\n)|.*$/g, bovw1 = k2h['locator'], p3rf5 = [{ 'currentNSMap': s08k92 }], im7ej = {}, ual$d = 0x0;;) {
    try {
      var dur$_ = fyg5['indexOf']('<', ual$d);if (0x0 > dur$_) {
        if (!fyg5['substr'](ual$d)['match'](/^\s*$/)) {
          var qowv1n = k2h['doc'],
              he9s6k = qowv1n['createTextNode'](fyg5['substr'](ual$d));qowv1n['appendChild'](he9s6k), k2h['currentElement'] = he9s6k;
        }return;
      }switch (dur$_ > ual$d && xbozvw(dur$_), fyg5['charAt'](dur$_ + 0x1)) {case '/':
          var dl_$pr = fyg5['indexOf']('>', dur$_ + 0x3),
              r53pg = fyg5['substring'](dur$_ + 0x2, dl_$pr),
              a$zlu = p3rf5['pop']();0x0 > dl_$pr ? (r53pg = fyg5['substring'](dur$_ + 0x2)['replace'](/[\s<].*/, ''), adl$xu['error']('end tag name: ' + r53pg + ' is not complete:' + a$zlu['tagName']), dl_$pr = dur$_ + 0x1 + r53pg['length']) : r53pg['match'](/\s</) && (r53pg = r53pg['replace'](/[\s<].*/, ''), adl$xu['error']('end tag name: ' + r53pg + ' maybe not complete'), dl_$pr = dur$_ + 0x1 + r53pg['length']);var q0982 = a$zlu['localNSMap'],
              eh9k = a$zlu['tagName'] == r53pg,
              aldxu$ = eh9k || a$zlu['tagName'] && a$zlu['tagName']['toLowerCase']() == r53pg['toLowerCase']();if (aldxu$) {
            if (k2h['endElement'](a$zlu['uri'], a$zlu['localName'], r53pg), q0982) {
              for (var xlbaz in q0982) k2h['endPrefixMapping'](xlbaz);
            }eh9k || adl$xu['fatalError']('end tag name: ' + r53pg + ' is not match the current start tagName:' + a$zlu['tagName']);
          } else p3rf5['push'](a$zlu);dl_$pr++;break;case '?':
          bovw1 && $a_ud(dur$_), dl_$pr = K1_$lurd(fyg5, dur$_, k2h);break;case '!':
          bovw1 && $a_ud(dur$_), dl_$pr = K1_c5g3yf(fyg5, dur$_, k2h, adl$xu);break;default:
          bovw1 && $a_ud(dur$_);var _au$ld = new K1_jmtei7(),
              qn9820 = p3rf5[p3rf5['length'] - 0x1]['currentNSMap'],
              dl_$pr = K1_q029s8(fyg5, dur$_, _au$ld, qn9820, thi6k, adl$xu),
              _5dr$p = _au$ld['length'];if (!_au$ld['closed'] && K1_vbzxw(fyg5, dl_$pr, _au$ld['tagName'], im7ej) && (_au$ld['closed'] = !0x0, uad_['nbsp'] || adl$xu['warning']('unclosed xml attribute')), bovw1 && _5dr$p) {
            for (var g35_ = K1_alxdu$(bovw1, {}), v0n8q = 0x0; _5dr$p > v0n8q; v0n8q++) {
              var zbxwov = _au$ld[v0n8q];$a_ud(zbxwov['offset']), zbxwov['locator'] = K1_alxdu$(bovw1, {});
            }k2h['locator'] = g35_, K1_tih(_au$ld, k2h, qn9820) && p3rf5['push'](_au$ld), k2h['locator'] = bovw1;
          } else K1_tih(_au$ld, k2h, qn9820) && p3rf5['push'](_au$ld);'http://www.w3.org/1999/xhtml' !== _au$ld['uri'] || _au$ld['closed'] ? dl_$pr++ : dl_$pr = K1_sekih6(fyg5, dl_$pr, _au$ld['tagName'], thi6k, k2h);}
    } catch (c5pfg) {
      adl$xu['error']('element parse error: ' + c5pfg), dl_$pr = -0x1;
    }dl_$pr > ual$d ? ual$d = dl_$pr : xbozvw(Math['max'](dur$_, ual$d) + 0x1);
  }
}function K1_alxdu$(zwao, gc53yf) {
  return gc53yf['lineNumber'] = zwao['lineNumber'], gc53yf['columnNumber'] = zwao['columnNumber'], gc53yf;
}function K1_q029s8(ulxzb, et67, bxzaow, s26, wzbv1, m4t7j) {
  for (var gy3cf5, vn1q8, n1q0vo = ++et67, s0q89 = K1_bvn1ow;;) {
    var $xaldu = ulxzb['charAt'](n1q0vo);switch ($xaldu) {case '=':
        if (s0q89 === K1_d5$_pr) gy3cf5 = ulxzb['slice'](et67, n1q0vo), s0q89 = K1_ozxa;else {
          if (s0q89 !== K1_v108n) throw new Error('attribute equal must after attrName');s0q89 = K1_ozxa;
        }break;case '\x27':case '\x22':
        if (s0q89 === K1_ozxa || s0q89 === K1_d5$_pr) {
          if (s0q89 === K1_d5$_pr && (m4t7j['warning']('attribute value must after "="'), gy3cf5 = ulxzb['slice'](et67, n1q0vo)), et67 = n1q0vo + 0x1, n1q0vo = ulxzb['indexOf']($xaldu, et67), !(n1q0vo > 0x0)) throw new Error('attribute value no end \'' + $xaldu + '\' match');vn1q8 = ulxzb['slice'](et67, n1q0vo)['replace'](/&#?\w+;/g, wzbv1), bxzaow['add'](gy3cf5, vn1q8, et67 - 0x1), s0q89 = K1_hsik6e;
        } else {
          if (s0q89 != K1_adl) throw new Error('attribute value must after "="');vn1q8 = ulxzb['slice'](et67, n1q0vo)['replace'](/&#?\w+;/g, wzbv1), bxzaow['add'](gy3cf5, vn1q8, et67), m4t7j['warning']('attribute "' + gy3cf5 + '" missed start quot(' + $xaldu + ')!!'), et67 = n1q0vo + 0x1, s0q89 = K1_hsik6e;
        }break;case '/':
        switch (s0q89) {case K1_bvn1ow:
            bxzaow['setTagName'](ulxzb['slice'](et67, n1q0vo));case K1_hsik6e:case K1_e7tmi:case K1_khe9s6:
            s0q89 = K1_khe9s6, bxzaow['closed'] = !0x0;case K1_adl:case K1_d5$_pr:case K1_v108n:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return m4t7j['error']('unexpected end of input'), s0q89 == K1_bvn1ow && bxzaow['setTagName'](ulxzb['slice'](et67, n1q0vo)), n1q0vo;case '>':
        switch (s0q89) {case K1_bvn1ow:
            bxzaow['setTagName'](ulxzb['slice'](et67, n1q0vo));case K1_hsik6e:case K1_e7tmi:case K1_khe9s6:
            break;case K1_adl:case K1_d5$_pr:
            vn1q8 = ulxzb['slice'](et67, n1q0vo), '/' === vn1q8['slice'](-0x1) && (bxzaow['closed'] = !0x0, vn1q8 = vn1q8['slice'](0x0, -0x1));case K1_v108n:
            s0q89 === K1_v108n && (vn1q8 = gy3cf5), s0q89 == K1_adl ? (m4t7j['warning']('attribute "' + vn1q8 + '" missed quot(")!!'), bxzaow['add'](gy3cf5, vn1q8['replace'](/&#?\w+;/g, wzbv1), et67)) : ('http://www.w3.org/1999/xhtml' === s26[''] && vn1q8['match'](/^(?:disabled|checked|selected)$/i) || m4t7j['warning']('attribute "' + vn1q8 + '" missed value!! "' + vn1q8 + '" instead!!'), bxzaow['add'](vn1q8, vn1q8, et67));break;case K1_ozxa:
            throw new Error('attribute value missed!!');}return n1q0vo;case '\u0080':
        $xaldu = '\x20';default:
        if ('\x20' >= $xaldu) switch (s0q89) {case K1_bvn1ow:
            bxzaow['setTagName'](ulxzb['slice'](et67, n1q0vo)), s0q89 = K1_e7tmi;break;case K1_d5$_pr:
            gy3cf5 = ulxzb['slice'](et67, n1q0vo), s0q89 = K1_v108n;break;case K1_adl:
            var vn1q8 = ulxzb['slice'](et67, n1q0vo)['replace'](/&#?\w+;/g, wzbv1);m4t7j['warning']('attribute "' + vn1q8 + '" missed quot(")!!'), bxzaow['add'](gy3cf5, vn1q8, et67);case K1_hsik6e:
            s0q89 = K1_e7tmi;} else switch (s0q89) {case K1_v108n:
            {
              bxzaow['tagName'];
            }'http://www.w3.org/1999/xhtml' === s26[''] && gy3cf5['match'](/^(?:disabled|checked|selected)$/i) || m4t7j['warning']('attribute "' + gy3cf5 + '" missed value!! "' + gy3cf5 + '" instead2!!'), bxzaow['add'](gy3cf5, gy3cf5, et67), et67 = n1q0vo, s0q89 = K1_d5$_pr;break;case K1_hsik6e:
            m4t7j['warning']('attribute space is required"' + gy3cf5 + '\x22!!');case K1_e7tmi:
            s0q89 = K1_d5$_pr, et67 = n1q0vo;break;case K1_ozxa:
            s0q89 = K1_adl, et67 = n1q0vo;break;case K1_khe9s6:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}n1q0vo++;
  }
}function K1_tih(owbzv, jmtie, ld$xau) {
  for (var jhe7i = owbzv['tagName'], kh9e = null, xwazob = owbzv['length']; xwazob--;) {
    var thej7 = owbzv[xwazob],
        lzuaxb = thej7['qName'],
        nwo1q = thej7['value'],
        sq802 = lzuaxb['indexOf'](':');if (sq802 > 0x0) var h7ije = thej7['prefix'] = lzuaxb['slice'](0x0, sq802),
        lbzuxa = lzuaxb['slice'](sq802 + 0x1),
        t4i7jm = 'xmlns' === h7ije && lbzuxa;else lbzuxa = lzuaxb, h7ije = null, t4i7jm = 'xmlns' === lzuaxb && '';thej7['localName'] = lbzuxa, t4i7jm !== !0x1 && (null == kh9e && (kh9e = {}, K1__g35(ld$xau, ld$xau = {})), ld$xau[t4i7jm] = kh9e[t4i7jm] = nwo1q, thej7['uri'] = 'http://www.w3.org/2000/xmlns/', jmtie['startPrefixMapping'](t4i7jm, nwo1q));
  }for (var xwazob = owbzv['length']; xwazob--;) {
    thej7 = owbzv[xwazob];var h7ije = thej7['prefix'];h7ije && ('xml' === h7ije && (thej7['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== h7ije && (thej7['uri'] = ld$xau[h7ije || '']));
  }var sq802 = jhe7i['indexOf'](':');sq802 > 0x0 ? (h7ije = owbzv['prefix'] = jhe7i['slice'](0x0, sq802), lbzuxa = owbzv['localName'] = jhe7i['slice'](sq802 + 0x1)) : (h7ije = null, lbzuxa = owbzv['localName'] = jhe7i);var hks6 = owbzv['uri'] = ld$xau[h7ije || ''];if (jmtie['startElement'](hks6, lbzuxa, jhe7i, owbzv), !owbzv['closed']) return owbzv['currentNSMap'] = ld$xau, owbzv['localNSMap'] = kh9e, !0x0;if (jmtie['endElement'](hks6, lbzuxa, jhe7i), kh9e) {
    for (h7ije in kh9e) jmtie['endPrefixMapping'](h7ije);
  }
}function K1_sekih6(i74mtj, uax$d, vxzb, pr_d$5, pf5r3g) {
  if (/^(?:script|textarea)$/i['test'](vxzb)) {
    var bzoa = i74mtj['indexOf']('</' + vxzb + '>', uax$d),
        vxbzw = i74mtj['substring'](uax$d + 0x1, bzoa);if (/[&<]/['test'](vxbzw)) return (/^script$/i['test'](vxzb) ? (pf5r3g['characters'](vxbzw, 0x0, vxbzw['length']), bzoa) : (vxbzw = vxbzw['replace'](/&#?\w+;/g, pr_d$5), pf5r3g['characters'](vxbzw, 0x0, vxbzw['length']), bzoa)
    );
  }return uax$d + 0x1;
}function K1_vbzxw(x$audl, lz$axu, gc5, iej7t) {
  var i7htj = iej7t[gc5];return null == i7htj && (i7htj = x$audl['lastIndexOf']('</' + gc5 + '>'), lz$axu > i7htj && (i7htj = x$audl['lastIndexOf']('</' + gc5)), iej7t[gc5] = i7htj), lz$axu > i7htj;
}function K1__g35(r_5gp, gy3fc5) {
  for (var al_ud$ in r_5gp) gy3fc5[al_ud$] = r_5gp[al_ud$];
}function K1_c5g3yf(b1zwvo, d_pr35, hsk96, dr_$ul) {
  var zxabwo = b1zwvo['charAt'](d_pr35 + 0x2);switch (zxabwo) {case '-':
      if ('-' === b1zwvo['charAt'](d_pr35 + 0x3)) {
        var s9h6k = b1zwvo['indexOf']('-->', d_pr35 + 0x4);return s9h6k > d_pr35 ? (hsk96['comment'](b1zwvo, d_pr35 + 0x4, s9h6k - d_pr35 - 0x4), s9h6k + 0x3) : (dr_$ul['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == b1zwvo['substr'](d_pr35 + 0x3, 0x6)) {
        var s9h6k = b1zwvo['indexOf'](']]>', d_pr35 + 0x9);return hsk96['startCDATA'](), hsk96['characters'](b1zwvo, d_pr35 + 0x9, s9h6k - d_pr35 - 0x9), hsk96['endCDATA'](), s9h6k + 0x3;
      }var bwao = K1_m4ji7(b1zwvo, d_pr35),
          owzba = bwao['length'];if (owzba > 0x1 && /!doctype/i['test'](bwao[0x0][0x0])) {
        var p$lrd_ = bwao[0x1][0x0],
            w1ovn = owzba > 0x3 && /^public$/i['test'](bwao[0x2][0x0]) && bwao[0x3][0x0],
            he6sk9 = owzba > 0x4 && bwao[0x4][0x0],
            et7jh = bwao[owzba - 0x1];return hsk96['startDTD'](p$lrd_, w1ovn && w1ovn['replace'](/^(['"])(.*?)\1$/, '$2'), he6sk9 && he6sk9['replace'](/^(['"])(.*?)\1$/, '$2')), hsk96['endDTD'](), et7jh['index'] + et7jh[0x0]['length'];
      }}return -0x1;
}function K1_$lurd(labuz, xwao, xlzu) {
  var oawbzx = labuz['indexOf']('?>', xwao);if (oawbzx) {
    var v18q0 = labuz['substring'](xwao, oawbzx)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (v18q0) {
      {
        v18q0[0x0]['length'];
      }return xlzu['processingInstruction'](v18q0[0x1], v18q0[0x2]), oawbzx + 0x2;
    }return -0x1;
  }return -0x1;
}function K1_jmtei7() {}function K1_s689k(s82, kh29) {
  return s82['__proto__'] = kh29, s82;
}function K1_m4ji7(frg35, iek6hs) {
  var p5_3rd,
      kehs69 = [],
      jmt7i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jmt7i['lastIndex'] = iek6hs, jmt7i['exec'](frg35); p5_3rd = jmt7i['exec'](frg35);) if (kehs69['push'](p5_3rd), p5_3rd[0x1]) return kehs69;
}var K1__ldur = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_uzbxwa = new RegExp('[\\-\\.0-9' + K1__ldur['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1_gfpr35 = new RegExp('^' + K1__ldur['source'] + K1_uzbxwa['source'] + '*(?::' + K1__ldur['source'] + K1_uzbxwa['source'] + '*)?$'),
    K1_bvn1ow = 0x0,
    K1_d5$_pr = 0x1,
    K1_v108n = 0x2,
    K1_ozxa = 0x3,
    K1_adl = 0x4,
    K1_hsik6e = 0x5,
    K1_e7tmi = 0x6,
    K1_khe9s6 = 0x7;K1_r5pgf['prototype'] = { 'parse': function (bow1z, hk6tie, b1ozw) {
    var qn092 = this['domBuilder'];qn092['startDocument'](), K1__g35(hk6tie, hk6tie = {}), K1_n20q89(bow1z, hk6tie, b1ozw, qn092, this['errorHandler']), qn092['endDocument']();
  } }, K1_jmtei7['prototype'] = { 'setTagName': function (q218n0) {
    if (!K1_gfpr35['test'](q218n0)) throw new Error('invalid tagName:' + q218n0);this['tagName'] = q218n0;
  }, 'add': function (axowz, c3y5, lzxau$) {
    if (!K1_gfpr35['test'](axowz)) throw new Error('invalid attribute:' + axowz);this[this['length']++] = { 'qName': axowz, 'value': c3y5, 'offset': lzxau$ };
  }, 'length': 0x0, 'getLocalName': function (ske6ih) {
    return this[ske6ih]['localName'];
  }, 'getLocator': function (n10q8v) {
    return this[n10q8v]['locator'];
  }, 'getQName': function (ua_l$d) {
    return this[ua_l$d]['qName'];
  }, 'getURI': function (wbovx) {
    return this[wbovx]['uri'];
  }, 'getValue': function (t6eh7) {
    return this[t6eh7]['value'];
  } }, K1_s689k({}, K1_s689k['prototype']) instanceof K1_s689k || (K1_s689k = function (pc5fg, _u$da) {
  function w1qvno() {}w1qvno['prototype'] = _u$da, w1qvno = new w1qvno();for (_u$da in pc5fg) w1qvno[_u$da] = pc5fg[_u$da];return w1qvno;
}), exports['XMLReader'] = K1_r5pgf;