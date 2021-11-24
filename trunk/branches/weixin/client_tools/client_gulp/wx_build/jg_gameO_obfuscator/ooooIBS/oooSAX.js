var c = wx.$o;
function o_oxg4f9() {}function o_smrq(hx4gob, oc8h, _uen3, $y0jek, la3un) {
  function jk$(yk_u0) {
    if (yk_u0 > 0xffff) {
      yk_u0 -= 0x10000;var v_lu3 = 0xd800 + (yk_u0 >> 0xa),
          a3v6dl = 0xdc00 + (0x3ff & yk_u0);return String['fromCharCode'](v_lu3, a3v6dl);
    }return String['fromCharCode'](yk_u0);
  }function enyk_u(_ye3un) {
    var cz8bh = _ye3un['slice'](0x1, -0x1);return cz8bh in _uen3 ? _uen3[cz8bh] : '#' === cz8bh['charAt'](0x0) ? jk$(parseInt(cz8bh['substr'](0x1)['replace']('x', '0x'))) : (la3un['error']('entity not found:' + _ye3un), _ye3un);
  }function mptqr5(ox4gf) {
    if (ox4gf > d1fi2) {
      var qmprt5 = hx4gob['substring'](d1fi2, ox4gf)['replace'](/&#?\w+;/g, enyk_u);m8pr5 && g4box(d1fi2), $y0jek['characters'](qmprt5, 0x0, ox4gf - d1fi2), d1fi2 = ox4gf;
    }
  }function g4box(y3_uen, _0keyu) {
    for (; y3_uen >= knuey_ && (_0keyu = hzo4bg['exec'](hx4gob));) df2i1w = _0keyu['index'], knuey_ = df2i1w + _0keyu[0x0]['length'], m8pr5['lineNumber']++;m8pr5['columnNumber'] = y3_uen - df2i1w + 0x1;
  }for (var df2i1w = 0x0, knuey_ = 0x0, hzo4bg = /.*(?:\r\n?|\n)|.*$/g, m8pr5 = $y0jek['locator'], vuanl3 = [{ 'currentNSMap': oc8h }], qsm5rt = {}, d1fi2 = 0x0;;) {
    try {
      var rhpzc8 = hx4gob['indexOf']('<', d1fi2);if (0x0 > rhpzc8) {
        if (!hx4gob['substr'](d1fi2)['match'](/^\s*$/)) {
          var x9ofg = $y0jek['doc'],
              _3vy = x9ofg['createTextNode'](hx4gob['substr'](d1fi2));x9ofg['appendChild'](_3vy), $y0jek['currentElement'] = _3vy;
        }return;
      }switch (rhpzc8 > d1fi2 && mptqr5(rhpzc8), hx4gob['charAt'](rhpzc8 + 0x1)) {case '/':
          var f9go4x = hx4gob['indexOf']('>', rhpzc8 + 0x3),
              wi261 = hx4gob['substring'](rhpzc8 + 0x2, f9go4x),
              vda36l = vuanl3['pop']();0x0 > f9go4x ? (wi261 = hx4gob['substring'](rhpzc8 + 0x2)['replace'](/[\s<].*/, ''), la3un['error']('end tag name: ' + wi261 + ' is not complete:' + vda36l['tagName']), f9go4x = rhpzc8 + 0x1 + wi261['length']) : wi261['match'](/\s</) && (wi261 = wi261['replace'](/[\s<].*/, ''), la3un['error']('end tag name: ' + wi261 + ' maybe not complete'), f9go4x = rhpzc8 + 0x1 + wi261['length']);var y$_ek0 = vda36l['localNSMap'],
              ey3nu = vda36l['tagName'] == wi261,
              fox4g = ey3nu || vda36l['tagName'] && vda36l['tagName']['toLowerCase']() == wi261['toLowerCase']();if (fox4g) {
            if ($y0jek['endElement'](vda36l['uri'], vda36l['localName'], wi261), y$_ek0) {
              for (var lid2a in y$_ek0) $y0jek['endPrefixMapping'](lid2a);
            }ey3nu || la3un['fatalError']('end tag name: ' + wi261 + ' is not match the current start tagName:' + vda36l['tagName']);
          } else vuanl3['push'](vda36l);f9go4x++;break;case '?':
          m8pr5 && g4box(rhpzc8), f9go4x = o_yk_neu(hx4gob, rhpzc8, $y0jek);break;case '!':
          m8pr5 && g4box(rhpzc8), f9go4x = o_rmt5pc(hx4gob, rhpzc8, $y0jek, la3un);break;default:
          m8pr5 && g4box(rhpzc8);var m5str = new o_i6a21d(),
              gohb8 = vuanl3[vuanl3['length'] - 0x1]['currentNSMap'],
              f9go4x = o_mr5qtp(hx4gob, rhpzc8, m5str, gohb8, enyk_u, la3un),
              l_n3u = m5str['length'];if (!m5str['closed'] && o_nulv3_(hx4gob, f9go4x, m5str['tagName'], qsm5rt) && (m5str['closed'] = !0x0, _uen3['nbsp'] || la3un['warning']('unclosed xml attribute')), m8pr5 && l_n3u) {
            for (var a3vln6 = o_ku_n(m8pr5, {}), mtsrq5 = 0x0; l_n3u > mtsrq5; mtsrq5++) {
              var dl2v6a = m5str[mtsrq5];g4box(dl2v6a['offset']), dl2v6a['locator'] = o_ku_n(m8pr5, {});
            }$y0jek['locator'] = a3vln6, o_zmpc8r(m5str, $y0jek, gohb8) && vuanl3['push'](m5str), $y0jek['locator'] = m8pr5;
          } else o_zmpc8r(m5str, $y0jek, gohb8) && vuanl3['push'](m5str);'http://www.w3.org/1999/xhtml' !== m5str['uri'] || m5str['closed'] ? f9go4x++ : f9go4x = o_id1a6(hx4gob, f9go4x, m5str['tagName'], enyk_u, $y0jek);}
    } catch (vld36) {
      la3un['error']('element parse error: ' + vld36), f9go4x = -0x1;
    }f9go4x > d1fi2 ? d1fi2 = f9go4x : mptqr5(Math['max'](rhpzc8, d1fi2) + 0x1);
  }
}function o_ku_n(fi12w9, crzmp) {
  return crzmp['lineNumber'] = fi12w9['lineNumber'], crzmp['columnNumber'] = fi12w9['columnNumber'], crzmp;
}function o_mr5qtp(cr5mtp, zhrc, v3ld, ho4bxg, i91w2f, f4gx9o) {
  for (var l_vun3, yeuk_0, rpm8z = ++zhrc, _y3vun = o_ualv3;;) {
    var _ykun = cr5mtp['charAt'](rpm8z);switch (_ykun) {case '=':
        if (_y3vun === o_ix19wf) l_vun3 = cr5mtp['slice'](zhrc, rpm8z), _y3vun = o_va3ln6;else {
          if (_y3vun !== o_n_3u) throw new Error('attribute equal must after attrName');_y3vun = o_va3ln6;
        }break;case '\x27':case '\x22':
        if (_y3vun === o_va3ln6 || _y3vun === o_ix19wf) {
          if (_y3vun === o_ix19wf && (f4gx9o['warning']('attribute value must after "="'), l_vun3 = cr5mtp['slice'](zhrc, rpm8z)), zhrc = rpm8z + 0x1, rpm8z = cr5mtp['indexOf'](_ykun, zhrc), !(rpm8z > 0x0)) throw new Error('attribute value no end \'' + _ykun + '\' match');yeuk_0 = cr5mtp['slice'](zhrc, rpm8z)['replace'](/&#?\w+;/g, i91w2f), v3ld['add'](l_vun3, yeuk_0, zhrc - 0x1), _y3vun = o_uykn;
        } else {
          if (_y3vun != o_ifw219) throw new Error('attribute value must after "="');yeuk_0 = cr5mtp['slice'](zhrc, rpm8z)['replace'](/&#?\w+;/g, i91w2f), v3ld['add'](l_vun3, yeuk_0, zhrc), f4gx9o['warning']('attribute "' + l_vun3 + '" missed start quot(' + _ykun + ')!!'), zhrc = rpm8z + 0x1, _y3vun = o_uykn;
        }break;case '/':
        switch (_y3vun) {case o_ualv3:
            v3ld['setTagName'](cr5mtp['slice'](zhrc, rpm8z));case o_uykn:case o_qrs5t:case o_u_ny3:
            _y3vun = o_u_ny3, v3ld['closed'] = !0x0;case o_ifw219:case o_ix19wf:case o_n_3u:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return f4gx9o['error']('unexpected end of input'), _y3vun == o_ualv3 && v3ld['setTagName'](cr5mtp['slice'](zhrc, rpm8z)), rpm8z;case '>':
        switch (_y3vun) {case o_ualv3:
            v3ld['setTagName'](cr5mtp['slice'](zhrc, rpm8z));case o_uykn:case o_qrs5t:case o_u_ny3:
            break;case o_ifw219:case o_ix19wf:
            yeuk_0 = cr5mtp['slice'](zhrc, rpm8z), '/' === yeuk_0['slice'](-0x1) && (v3ld['closed'] = !0x0, yeuk_0 = yeuk_0['slice'](0x0, -0x1));case o_n_3u:
            _y3vun === o_n_3u && (yeuk_0 = l_vun3), _y3vun == o_ifw219 ? (f4gx9o['warning']('attribute "' + yeuk_0 + '" missed quot(")!!'), v3ld['add'](l_vun3, yeuk_0['replace'](/&#?\w+;/g, i91w2f), zhrc)) : ('http://www.w3.org/1999/xhtml' === ho4bxg[''] && yeuk_0['match'](/^(?:disabled|checked|selected)$/i) || f4gx9o['warning']('attribute "' + yeuk_0 + '" missed value!! "' + yeuk_0 + '" instead!!'), v3ld['add'](yeuk_0, yeuk_0, zhrc));break;case o_va3ln6:
            throw new Error('attribute value missed!!');}return rpm8z;case '\u0080':
        _ykun = '\x20';default:
        if ('\x20' >= _ykun) switch (_y3vun) {case o_ualv3:
            v3ld['setTagName'](cr5mtp['slice'](zhrc, rpm8z)), _y3vun = o_qrs5t;break;case o_ix19wf:
            l_vun3 = cr5mtp['slice'](zhrc, rpm8z), _y3vun = o_n_3u;break;case o_ifw219:
            var yeuk_0 = cr5mtp['slice'](zhrc, rpm8z)['replace'](/&#?\w+;/g, i91w2f);f4gx9o['warning']('attribute "' + yeuk_0 + '" missed quot(")!!'), v3ld['add'](l_vun3, yeuk_0, zhrc);case o_uykn:
            _y3vun = o_qrs5t;} else switch (_y3vun) {case o_n_3u:
            {
              v3ld['tagName'];
            }'http://www.w3.org/1999/xhtml' === ho4bxg[''] && l_vun3['match'](/^(?:disabled|checked|selected)$/i) || f4gx9o['warning']('attribute "' + l_vun3 + '" missed value!! "' + l_vun3 + '" instead2!!'), v3ld['add'](l_vun3, l_vun3, zhrc), zhrc = rpm8z, _y3vun = o_ix19wf;break;case o_uykn:
            f4gx9o['warning']('attribute space is required"' + l_vun3 + '\x22!!');case o_qrs5t:
            _y3vun = o_ix19wf, zhrc = rpm8z;break;case o_va3ln6:
            _y3vun = o_ifw219, zhrc = rpm8z;break;case o_u_ny3:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rpm8z++;
  }
}function o_zmpc8r(unl3, ix1wf9, p8mrzc) {
  for (var y3u_n = unl3['tagName'], mrczp = null, aulvn = unl3['length']; aulvn--;) {
    var jy$k0 = unl3[aulvn],
        v_u3 = jy$k0['qName'],
        rcp8m5 = jy$k0['value'],
        avl3n6 = v_u3['indexOf'](':');if (avl3n6 > 0x0) var m8cpzr = jy$k0['prefix'] = v_u3['slice'](0x0, avl3n6),
        dval26 = v_u3['slice'](avl3n6 + 0x1),
        y0$ejk = 'xmlns' === m8cpzr && dval26;else dval26 = v_u3, m8cpzr = null, y0$ejk = 'xmlns' === v_u3 && '';jy$k0['localName'] = dval26, y0$ejk !== !0x1 && (null == mrczp && (mrczp = {}, o_t57mqs(p8mrzc, p8mrzc = {})), p8mrzc[y0$ejk] = mrczp[y0$ejk] = rcp8m5, jy$k0['uri'] = 'http://www.w3.org/2000/xmlns/', ix1wf9['startPrefixMapping'](y0$ejk, rcp8m5));
  }for (var aulvn = unl3['length']; aulvn--;) {
    jy$k0 = unl3[aulvn];var m8cpzr = jy$k0['prefix'];m8cpzr && ('xml' === m8cpzr && (jy$k0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m8cpzr && (jy$k0['uri'] = p8mrzc[m8cpzr || '']));
  }var avl3n6 = y3u_n['indexOf'](':');avl3n6 > 0x0 ? (m8cpzr = unl3['prefix'] = y3u_n['slice'](0x0, avl3n6), dval26 = unl3['localName'] = y3u_n['slice'](avl3n6 + 0x1)) : (m8cpzr = null, dval26 = unl3['localName'] = y3u_n);var bxgo = unl3['uri'] = p8mrzc[m8cpzr || ''];if (ix1wf9['startElement'](bxgo, dval26, y3u_n, unl3), !unl3['closed']) return unl3['currentNSMap'] = p8mrzc, unl3['localNSMap'] = mrczp, !0x0;if (ix1wf9['endElement'](bxgo, dval26, y3u_n), mrczp) {
    for (m8cpzr in mrczp) ix1wf9['endPrefixMapping'](m8cpzr);
  }
}function o_id1a6(pbh8zc, b8pcz, wi1f92, qmtr5p, rtmq5s) {
  if (/^(?:script|textarea)$/i['test'](wi1f92)) {
    var _yu0 = pbh8zc['indexOf']('</' + wi1f92 + '>', b8pcz),
        mp8zr = pbh8zc['substring'](b8pcz + 0x1, _yu0);if (/[&<]/['test'](mp8zr)) return (/^script$/i['test'](wi1f92) ? (rtmq5s['characters'](mp8zr, 0x0, mp8zr['length']), _yu0) : (mp8zr = mp8zr['replace'](/&#?\w+;/g, qmtr5p), rtmq5s['characters'](mp8zr, 0x0, mp8zr['length']), _yu0)
    );
  }return b8pcz + 0x1;
}function o_nulv3_(un3yv_, ogxb4, ochb8z, pbhzc) {
  var u3_vln = pbhzc[ochb8z];return null == u3_vln && (u3_vln = un3yv_['lastIndexOf']('</' + ochb8z + '>'), ogxb4 > u3_vln && (u3_vln = un3yv_['lastIndexOf']('</' + ochb8z)), pbhzc[ochb8z] = u3_vln), ogxb4 > u3_vln;
}function o_t57mqs(_k, b8zco) {
  for (var zhgo8b in _k) b8zco[zhgo8b] = _k[zhgo8b];
}function o_rmt5pc(yu_n3e, zgo8, mtsrq, cp5rtm) {
  var tmrqp5 = yu_n3e['charAt'](zgo8 + 0x2);switch (tmrqp5) {case '-':
      if ('-' === yu_n3e['charAt'](zgo8 + 0x3)) {
        var p5tqr = yu_n3e['indexOf']('-->', zgo8 + 0x4);return p5tqr > zgo8 ? (mtsrq['comment'](yu_n3e, zgo8 + 0x4, p5tqr - zgo8 - 0x4), p5tqr + 0x3) : (cp5rtm['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == yu_n3e['substr'](zgo8 + 0x3, 0x6)) {
        var p5tqr = yu_n3e['indexOf'](']]>', zgo8 + 0x9);return mtsrq['startCDATA'](), mtsrq['characters'](yu_n3e, zgo8 + 0x9, p5tqr - zgo8 - 0x9), mtsrq['endCDATA'](), p5tqr + 0x3;
      }var hrp8 = o_x4ob(yu_n3e, zgo8),
          al6d2v = hrp8['length'];if (al6d2v > 0x1 && /!doctype/i['test'](hrp8[0x0][0x0])) {
        var iw921f = hrp8[0x1][0x0],
            rcm5tp = al6d2v > 0x3 && /^public$/i['test'](hrp8[0x2][0x0]) && hrp8[0x3][0x0],
            uyke = al6d2v > 0x4 && hrp8[0x4][0x0],
            u_3y = hrp8[al6d2v - 0x1];return mtsrq['startDTD'](iw921f, rcm5tp && rcm5tp['replace'](/^(['"])(.*?)\1$/, '$2'), uyke && uyke['replace'](/^(['"])(.*?)\1$/, '$2')), mtsrq['endDTD'](), u_3y['index'] + u_3y[0x0]['length'];
      }}return -0x1;
}function o_yk_neu(x4gf, gzb4, ld62ia) {
  var fix1w = x4gf['indexOf']('?>', gzb4);if (fix1w) {
    var eyu_3n = x4gf['substring'](gzb4, fix1w)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (eyu_3n) {
      {
        eyu_3n[0x0]['length'];
      }return ld62ia['processingInstruction'](eyu_3n[0x1], eyu_3n[0x2]), fix1w + 0x2;
    }return -0x1;
  }return -0x1;
}function o_i6a21d() {}function o_n3lua(ny_e3u, f29iw) {
  return ny_e3u['__proto__'] = f29iw, ny_e3u;
}function o_x4ob(y$0jke, y0eku_) {
  var msq57t,
      kye0_ = [],
      iw192f = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (iw192f['lastIndex'] = y0eku_, iw192f['exec'](y$0jke); msq57t = iw192f['exec'](y$0jke);) if (kye0_['push'](msq57t), msq57t[0x1]) return kye0_;
}var o_vd2 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    o_v6ld = new RegExp('[\\-\\.0-9' + o_vd2['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    o_zg8hb = new RegExp('^' + o_vd2['source'] + o_v6ld['source'] + '*(?::' + o_vd2['source'] + o_v6ld['source'] + '*)?$'),
    o_ualv3 = 0x0,
    o_ix19wf = 0x1,
    o_n_3u = 0x2,
    o_va3ln6 = 0x3,
    o_ifw219 = 0x4,
    o_uykn = 0x5,
    o_qrs5t = 0x6,
    o_u_ny3 = 0x7;o_oxg4f9['prototype'] = { 'parse': function (oxhbg, ifx9w1, zbg8h) {
    var k_ye0$ = this['domBuilder'];k_ye0$['startDocument'](), o_t57mqs(ifx9w1, ifx9w1 = {}), o_smrq(oxhbg, ifx9w1, zbg8h, k_ye0$, this['errorHandler']), k_ye0$['endDocument']();
  } }, o_i6a21d['prototype'] = { 'setTagName': function (mqtr5) {
    if (!o_zg8hb['test'](mqtr5)) throw new Error('invalid tagName:' + mqtr5);this['tagName'] = mqtr5;
  }, 'add': function (vn63al, d3la6v, str5) {
    if (!o_zg8hb['test'](vn63al)) throw new Error('invalid attribute:' + vn63al);this[this['length']++] = { 'qName': vn63al, 'value': d3la6v, 'offset': str5 };
  }, 'length': 0x0, 'getLocalName': function (_3uvyn) {
    return this[_3uvyn]['localName'];
  }, 'getLocator': function (ue0_) {
    return this[ue0_]['locator'];
  }, 'getQName': function (zho4bg) {
    return this[zho4bg]['qName'];
  }, 'getURI': function (iwf921) {
    return this[iwf921]['uri'];
  }, 'getValue': function (zpcm8r) {
    return this[zpcm8r]['value'];
  } }, o_n3lua({}, o_n3lua['prototype']) instanceof o_n3lua || (o_n3lua = function (jke$0y, k0$jye) {
  function bzohg8() {}bzohg8['prototype'] = k0$jye, bzohg8 = new bzohg8();for (k0$jye in jke$0y) bzohg8[k0$jye] = jke$0y[k0$jye];return bzohg8;
}), exports['XMLReader'] = o_oxg4f9;