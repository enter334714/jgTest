var J = wx.h$;
function ge_2hz() {}function gpt_ze(jrx7, zpw_2, bkd6g0, epzt_, yojvr) {
  function ov5rj(r5byq) {
    if (r5byq > 0xffff) {
      r5byq -= 0x10000;var g0b6k = 0xd800 + (r5byq >> 0xa),
          u4lm3a = 0xdc00 + (0x3ff & r5byq);return String['fromCharCode'](g0b6k, u4lm3a);
    }return String['fromCharCode'](r5byq);
  }function phez_t($_wf9) {
    var $f_2 = $_wf9['slice'](0x1, -0x1);return $f_2 in bkd6g0 ? bkd6g0[$f_2] : '#' === $f_2['charAt'](0x0) ? ov5rj(parseInt($f_2['substr'](0x1)['replace']('x', '0x'))) : (yojvr['error']('entity not found:' + $_wf9), $_wf9);
  }function _eh2p(qob5y0) {
    if (qob5y0 > iun41) {
      var ztceh = jrx7['substring'](iun41, qob5y0)['replace'](/&#?\w+;/g, phez_t);ua3l14 && jvoy7r(iun41), epzt_['characters'](ztceh, 0x0, qob5y0 - iun41), iun41 = qob5y0;
    }
  }function jvoy7r(n7ij1x, g6kdc8) {
    for (; n7ij1x >= vqo5y && (g6kdc8 = phcez['exec'](jrx7));) m4l3au = g6kdc8['index'], vqo5y = m4l3au + g6kdc8[0x0]['length'], ua3l14['lineNumber']++;ua3l14['columnNumber'] = n7ij1x - m4l3au + 0x1;
  }for (var m4l3au = 0x0, vqo5y = 0x0, phcez = /.*(?:\r\n?|\n)|.*$/g, ua3l14 = epzt_['locator'], i1x7nj = [{ 'currentNSMap': zpw_2 }], bq0ok5 = {}, iun41 = 0x0;;) {
    try {
      var z6ch8t = jrx7['indexOf']('<', iun41);if (0x0 > z6ch8t) {
        if (!jrx7['substr'](iun41)['match'](/^\s*$/)) {
          var bo5ryq = epzt_['doc'],
              k0b5qg = bo5ryq['createTextNode'](jrx7['substr'](iun41));bo5ryq['appendChild'](k0b5qg), epzt_['currentElement'] = k0b5qg;
        }return;
      }switch (z6ch8t > iun41 && _eh2p(z6ch8t), jrx7['charAt'](z6ch8t + 0x1)) {case '/':
          var dkg = jrx7['indexOf']('>', z6ch8t + 0x3),
              kb5o0 = jrx7['substring'](z6ch8t + 0x2, dkg),
              rvx7ij = i1x7nj['pop']();0x0 > dkg ? (kb5o0 = jrx7['substring'](z6ch8t + 0x2)['replace'](/[\s<].*/, ''), yojvr['error']('end tag name: ' + kb5o0 + ' is not complete:' + rvx7ij['tagName']), dkg = z6ch8t + 0x1 + kb5o0['length']) : kb5o0['match'](/\s</) && (kb5o0 = kb5o0['replace'](/[\s<].*/, ''), yojvr['error']('end tag name: ' + kb5o0 + ' maybe not complete'), dkg = z6ch8t + 0x1 + kb5o0['length']);var c8tezh = rvx7ij['localNSMap'],
              w9s$f2 = rvx7ij['tagName'] == kb5o0,
              dqk0g = w9s$f2 || rvx7ij['tagName'] && rvx7ij['tagName']['toLowerCase']() == kb5o0['toLowerCase']();if (dqk0g) {
            if (epzt_['endElement'](rvx7ij['uri'], rvx7ij['localName'], kb5o0), c8tezh) {
              for (var pch in c8tezh) epzt_['endPrefixMapping'](pch);
            }w9s$f2 || yojvr['fatalError']('end tag name: ' + kb5o0 + ' is not match the current start tagName:' + rvx7ij['tagName']);
          } else i1x7nj['push'](rvx7ij);dkg++;break;case '?':
          ua3l14 && jvoy7r(z6ch8t), dkg = gt6dgc8(jrx7, z6ch8t, epzt_);break;case '!':
          ua3l14 && jvoy7r(z6ch8t), dkg = ge92pw_(jrx7, z6ch8t, epzt_, yojvr);break;default:
          ua3l14 && jvoy7r(z6ch8t);var s9$wf2 = new guan(),
              jxy7vr = i1x7nj[i1x7nj['length'] - 0x1]['currentNSMap'],
              dkg = gpetcz(jrx7, z6ch8t, s9$wf2, jxy7vr, phez_t, yojvr),
              p_we2 = s9$wf2['length'];if (!s9$wf2['closed'] && gthc6z8(jrx7, dkg, s9$wf2['tagName'], bq0ok5) && (s9$wf2['closed'] = !0x0, bkd6g0['nbsp'] || yojvr['warning']('unclosed xml attribute')), ua3l14 && p_we2) {
            for (var al341u = gzehcpt(ua3l14, {}), kd68gc = 0x0; p_we2 > kd68gc; kd68gc++) {
              var oyb0q = s9$wf2[kd68gc];jvoy7r(oyb0q['offset']), oyb0q['locator'] = gzehcpt(ua3l14, {});
            }epzt_['locator'] = al341u, gq0byo(s9$wf2, epzt_, jxy7vr) && i1x7nj['push'](s9$wf2), epzt_['locator'] = ua3l14;
          } else gq0byo(s9$wf2, epzt_, jxy7vr) && i1x7nj['push'](s9$wf2);'http://www.w3.org/1999/xhtml' !== s9$wf2['uri'] || s9$wf2['closed'] ? dkg++ : dkg = gd6k(jrx7, dkg, s9$wf2['tagName'], phez_t, epzt_);}
    } catch (d6tcg) {
      yojvr['error']('element parse error: ' + d6tcg), dkg = -0x1;
    }dkg > iun41 ? iun41 = dkg : _eh2p(Math['max'](z6ch8t, iun41) + 0x1);
  }
}function gzehcpt(ory5qv, kq0gbd) {
  return kq0gbd['lineNumber'] = ory5qv['lineNumber'], kq0gbd['columnNumber'] = ory5qv['columnNumber'], kq0gbd;
}function gpetcz(q0kbgd, xnijv, yvor7j, nvjx7, z_tp, vryoj5) {
  for (var dt8hc, jinv, wz2 = ++xnijv, h_ep = go05bqk;;) {
    var kob5 = q0kbgd['charAt'](wz2);switch (kob5) {case '=':
        if (h_ep === ggdtc8) dt8hc = q0kbgd['slice'](xnijv, wz2), h_ep = gdc8k6;else {
          if (h_ep !== gwpf_92) throw new Error('attribute equal must after attrName');h_ep = gdc8k6;
        }break;case '\x27':case '\x22':
        if (h_ep === gdc8k6 || h_ep === ggdtc8) {
          if (h_ep === ggdtc8 && (vryoj5['warning']('attribute value must after "="'), dt8hc = q0kbgd['slice'](xnijv, wz2)), xnijv = wz2 + 0x1, wz2 = q0kbgd['indexOf'](kob5, xnijv), !(wz2 > 0x0)) throw new Error('attribute value no end \'' + kob5 + '\' match');jinv = q0kbgd['slice'](xnijv, wz2)['replace'](/&#?\w+;/g, z_tp), yvor7j['add'](dt8hc, jinv, xnijv - 0x1), h_ep = gw9$2fs;
        } else {
          if (h_ep != ghzct6) throw new Error('attribute value must after "="');jinv = q0kbgd['slice'](xnijv, wz2)['replace'](/&#?\w+;/g, z_tp), yvor7j['add'](dt8hc, jinv, xnijv), vryoj5['warning']('attribute "' + dt8hc + '" missed start quot(' + kob5 + ')!!'), xnijv = wz2 + 0x1, h_ep = gw9$2fs;
        }break;case '/':
        switch (h_ep) {case go05bqk:
            yvor7j['setTagName'](q0kbgd['slice'](xnijv, wz2));case gw9$2fs:case gg86tdc:case gyq5ob:
            h_ep = gyq5ob, yvor7j['closed'] = !0x0;case ghzct6:case ggdtc8:case gwpf_92:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return vryoj5['error']('unexpected end of input'), h_ep == go05bqk && yvor7j['setTagName'](q0kbgd['slice'](xnijv, wz2)), wz2;case '>':
        switch (h_ep) {case go05bqk:
            yvor7j['setTagName'](q0kbgd['slice'](xnijv, wz2));case gw9$2fs:case gg86tdc:case gyq5ob:
            break;case ghzct6:case ggdtc8:
            jinv = q0kbgd['slice'](xnijv, wz2), '/' === jinv['slice'](-0x1) && (yvor7j['closed'] = !0x0, jinv = jinv['slice'](0x0, -0x1));case gwpf_92:
            h_ep === gwpf_92 && (jinv = dt8hc), h_ep == ghzct6 ? (vryoj5['warning']('attribute "' + jinv + '" missed quot(")!!'), yvor7j['add'](dt8hc, jinv['replace'](/&#?\w+;/g, z_tp), xnijv)) : ('http://www.w3.org/1999/xhtml' === nvjx7[''] && jinv['match'](/^(?:disabled|checked|selected)$/i) || vryoj5['warning']('attribute "' + jinv + '" missed value!! "' + jinv + '" instead!!'), yvor7j['add'](jinv, jinv, xnijv));break;case gdc8k6:
            throw new Error('attribute value missed!!');}return wz2;case '\u0080':
        kob5 = '\x20';default:
        if ('\x20' >= kob5) switch (h_ep) {case go05bqk:
            yvor7j['setTagName'](q0kbgd['slice'](xnijv, wz2)), h_ep = gg86tdc;break;case ggdtc8:
            dt8hc = q0kbgd['slice'](xnijv, wz2), h_ep = gwpf_92;break;case ghzct6:
            var jinv = q0kbgd['slice'](xnijv, wz2)['replace'](/&#?\w+;/g, z_tp);vryoj5['warning']('attribute "' + jinv + '" missed quot(")!!'), yvor7j['add'](dt8hc, jinv, xnijv);case gw9$2fs:
            h_ep = gg86tdc;} else switch (h_ep) {case gwpf_92:
            {
              yvor7j['tagName'];
            }'http://www.w3.org/1999/xhtml' === nvjx7[''] && dt8hc['match'](/^(?:disabled|checked|selected)$/i) || vryoj5['warning']('attribute "' + dt8hc + '" missed value!! "' + dt8hc + '" instead2!!'), yvor7j['add'](dt8hc, dt8hc, xnijv), xnijv = wz2, h_ep = ggdtc8;break;case gw9$2fs:
            vryoj5['warning']('attribute space is required"' + dt8hc + '\x22!!');case gg86tdc:
            h_ep = ggdtc8, xnijv = wz2;break;case gdc8k6:
            h_ep = ghzct6, xnijv = wz2;break;case gyq5ob:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wz2++;
  }
}function gq0byo(t8hc6z, oy5j, j5vyo) {
  for (var brq5y = t8hc6z['tagName'], kd860g = null, _$9wf = t8hc6z['length']; _$9wf--;) {
    var zpet = t8hc6z[_$9wf],
        bk05q = zpet['qName'],
        q0ok5b = zpet['value'],
        td6gc = bk05q['indexOf'](':');if (td6gc > 0x0) var r7o = zpet['prefix'] = bk05q['slice'](0x0, td6gc),
        ua4ml = bk05q['slice'](td6gc + 0x1),
        cgkd = 'xmlns' === r7o && ua4ml;else ua4ml = bk05q, r7o = null, cgkd = 'xmlns' === bk05q && '';zpet['localName'] = ua4ml, cgkd !== !0x1 && (null == kd860g && (kd860g = {}, ggqb0(j5vyo, j5vyo = {})), j5vyo[cgkd] = kd860g[cgkd] = q0ok5b, zpet['uri'] = 'http://www.w3.org/2000/xmlns/', oy5j['startPrefixMapping'](cgkd, q0ok5b));
  }for (var _$9wf = t8hc6z['length']; _$9wf--;) {
    zpet = t8hc6z[_$9wf];var r7o = zpet['prefix'];r7o && ('xml' === r7o && (zpet['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r7o && (zpet['uri'] = j5vyo[r7o || '']));
  }var td6gc = brq5y['indexOf'](':');td6gc > 0x0 ? (r7o = t8hc6z['prefix'] = brq5y['slice'](0x0, td6gc), ua4ml = t8hc6z['localName'] = brq5y['slice'](td6gc + 0x1)) : (r7o = null, ua4ml = t8hc6z['localName'] = brq5y);var vroy5q = t8hc6z['uri'] = j5vyo[r7o || ''];if (oy5j['startElement'](vroy5q, ua4ml, brq5y, t8hc6z), !t8hc6z['closed']) return t8hc6z['currentNSMap'] = j5vyo, t8hc6z['localNSMap'] = kd860g, !0x0;if (oy5j['endElement'](vroy5q, ua4ml, brq5y), kd860g) {
    for (r7o in kd860g) oy5j['endPrefixMapping'](r7o);
  }
}function gd6k(gc6t, _2$f9w, u4mla, gqdk0b, oyvj7) {
  if (/^(?:script|textarea)$/i['test'](u4mla)) {
    var thd = gc6t['indexOf']('</' + u4mla + '>', _2$f9w),
        ix17n4 = gc6t['substring'](_2$f9w + 0x1, thd);if (/[&<]/['test'](ix17n4)) return (/^script$/i['test'](u4mla) ? (oyvj7['characters'](ix17n4, 0x0, ix17n4['length']), thd) : (ix17n4 = ix17n4['replace'](/&#?\w+;/g, gqdk0b), oyvj7['characters'](ix17n4, 0x0, ix17n4['length']), thd)
    );
  }return _2$f9w + 0x1;
}function gthc6z8(i7x, phtc, rvjo, chep) {
  var bk0dgq = chep[rvjo];return null == bk0dgq && (bk0dgq = i7x['lastIndexOf']('</' + rvjo + '>'), phtc > bk0dgq && (bk0dgq = i7x['lastIndexOf']('</' + rvjo)), chep[rvjo] = bk0dgq), phtc > bk0dgq;
}function ggqb0(n7xi14, pzh_2) {
  for (var ctzeh in n7xi14) pzh_2[ctzeh] = n7xi14[ctzeh];
}function ge92pw_(k8c6g, qko, njv7x, yjvro7) {
  var by5roq = k8c6g['charAt'](qko + 0x2);switch (by5roq) {case '-':
      if ('-' === k8c6g['charAt'](qko + 0x3)) {
        var $wf9_ = k8c6g['indexOf']('-->', qko + 0x4);return $wf9_ > qko ? (njv7x['comment'](k8c6g, qko + 0x4, $wf9_ - qko - 0x4), $wf9_ + 0x3) : (yjvro7['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == k8c6g['substr'](qko + 0x3, 0x6)) {
        var $wf9_ = k8c6g['indexOf'](']]>', qko + 0x9);return njv7x['startCDATA'](), njv7x['characters'](k8c6g, qko + 0x9, $wf9_ - qko - 0x9), njv7x['endCDATA'](), $wf9_ + 0x3;
      }var yxvr = ghz6ct(k8c6g, qko),
          dk8c6g = yxvr['length'];if (dk8c6g > 0x1 && /!doctype/i['test'](yxvr[0x0][0x0])) {
        var i31u4 = yxvr[0x1][0x0],
            t_epzh = dk8c6g > 0x3 && /^public$/i['test'](yxvr[0x2][0x0]) && yxvr[0x3][0x0],
            r5qybo = dk8c6g > 0x4 && yxvr[0x4][0x0],
            xy7jvr = yxvr[dk8c6g - 0x1];return njv7x['startDTD'](i31u4, t_epzh && t_epzh['replace'](/^(['"])(.*?)\1$/, '$2'), r5qybo && r5qybo['replace'](/^(['"])(.*?)\1$/, '$2')), njv7x['endDTD'](), xy7jvr['index'] + xy7jvr[0x0]['length'];
      }}return -0x1;
}function gt6dgc8(u1in3, kgdb60, gk0d6b) {
  var ryoqv = u1in3['indexOf']('?>', kgdb60);if (ryoqv) {
    var a1lu3 = u1in3['substring'](kgdb60, ryoqv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (a1lu3) {
      {
        a1lu3[0x0]['length'];
      }return gk0d6b['processingInstruction'](a1lu3[0x1], a1lu3[0x2]), ryoqv + 0x2;
    }return -0x1;
  }return -0x1;
}function guan() {}function grjv5oy(s$2w, vyorq) {
  return s$2w['__proto__'] = vyorq, s$2w;
}function ghz6ct(_f2$w, tzh6c) {
  var ryqvo,
      jorvy5 = [],
      f_p29w = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (f_p29w['lastIndex'] = tzh6c, f_p29w['exec'](_f2$w); ryqvo = f_p29w['exec'](_f2$w);) if (jorvy5['push'](ryqvo), ryqvo[0x1]) return jorvy5;
}var gi7x1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gtd8cg6 = new RegExp('[\\-\\.0-9' + gi7x1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    g_ethp = new RegExp('^' + gi7x1['source'] + gtd8cg6['source'] + '*(?::' + gi7x1['source'] + gtd8cg6['source'] + '*)?$'),
    go05bqk = 0x0,
    ggdtc8 = 0x1,
    gwpf_92 = 0x2,
    gdc8k6 = 0x3,
    ghzct6 = 0x4,
    gw9$2fs = 0x5,
    gg86tdc = 0x6,
    gyq5ob = 0x7;ge_2hz['prototype'] = { 'parse': function (p_w2, f9$w, etpzh_) {
    var rvy7o = this['domBuilder'];rvy7o['startDocument'](), ggqb0(f9$w, f9$w = {}), gpt_ze(p_w2, f9$w, etpzh_, rvy7o, this['errorHandler']), rvy7o['endDocument']();
  } }, guan['prototype'] = { 'setTagName': function (ryvj7o) {
    if (!g_ethp['test'](ryvj7o)) throw new Error('invalid tagName:' + ryvj7o);this['tagName'] = ryvj7o;
  }, 'add': function (dq0gk, s$w29, yjvo5) {
    if (!g_ethp['test'](dq0gk)) throw new Error('invalid attribute:' + dq0gk);this[this['length']++] = { 'qName': dq0gk, 'value': s$w29, 'offset': yjvo5 };
  }, 'length': 0x0, 'getLocalName': function (t6d8) {
    return this[t6d8]['localName'];
  }, 'getLocator': function (k5qb0g) {
    return this[k5qb0g]['locator'];
  }, 'getQName': function (i174xn) {
    return this[i174xn]['qName'];
  }, 'getURI': function (t8cgd6) {
    return this[t8cgd6]['uri'];
  }, 'getValue': function (e_) {
    return this[e_]['value'];
  } }, grjv5oy({}, grjv5oy['prototype']) instanceof grjv5oy || (grjv5oy = function (_phe2, ht8ez) {
  function bgqd0() {}bgqd0['prototype'] = ht8ez, bgqd0 = new bgqd0();for (ht8ez in _phe2) bgqd0[ht8ez] = _phe2[ht8ez];return bgqd0;
}), exports['XMLReader'] = ge_2hz;