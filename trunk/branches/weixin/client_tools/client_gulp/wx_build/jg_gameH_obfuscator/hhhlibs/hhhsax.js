var O = wx.$C;
function h_pc$ru() {}function h_zhwj9(qf4173, x01q3, loupc, fg3417, $prcu8) {
  function b6iy2a(wj9zd) {
    if (wj9zd > 0xffff) {
      wj9zd -= 0x10000;var vfs = 0xd800 + (wj9zd >> 0xa),
          d9jhr = 0xdc00 + (0x3ff & wj9zd);return String['fromCharCode'](vfs, d9jhr);
    }return String['fromCharCode'](wj9zd);
  }function pu$lc8(opclu) {
    var u$rc = opclu['slice'](0x1, -0x1);return u$rc in loupc ? loupc[u$rc] : '#' === u$rc['charAt'](0x0) ? b6iy2a(parseInt(u$rc['substr'](0x1)['replace']('x', '0x'))) : ($prcu8['error']('entity not found:' + opclu), opclu);
  }function l$cu5p(wjh0) {
    if (wjh0 > ya6_sn) {
      var dw9zhj = qf4173['substring'](ya6_sn, wjh0)['replace'](/&#?\w+;/g, pu$lc8);sy26na && gns_yv(ya6_sn), fg3417['characters'](dw9zhj, 0x0, wjh0 - ya6_sn), ya6_sn = wjh0;
    }
  }function gns_yv(qx170, r$89j) {
    for (; qx170 >= tplc && (r$89j = urp$c8['exec'](qf4173));) $p8u = r$89j['index'], tplc = $p8u + r$89j[0x0]['length'], sy26na['lineNumber']++;sy26na['columnNumber'] = qx170 - $p8u + 0x1;
  }for (var $p8u = 0x0, tplc = 0x0, urp$c8 = /.*(?:\r\n?|\n)|.*$/g, sy26na = fg3417['locator'], l$8cup = [{ 'currentNSMap': x01q3 }], _yngvs = {}, ya6_sn = 0x0;;) {
    try {
      var ul$cp = qf4173['indexOf']('<', ya6_sn);if (0x0 > ul$cp) {
        if (!qf4173['substr'](ya6_sn)['match'](/^\s*$/)) {
          var xqhd0 = fg3417['doc'],
              sny_ = xqhd0['createTextNode'](qf4173['substr'](ya6_sn));xqhd0['appendChild'](sny_), fg3417['currentElement'] = sny_;
        }return;
      }switch (ul$cp > ya6_sn && l$cu5p(ul$cp), qf4173['charAt'](ul$cp + 0x1)) {case '/':
          var vynsg_ = qf4173['indexOf']('>', ul$cp + 0x3),
              rzj9d = qf4173['substring'](ul$cp + 0x2, vynsg_),
              zu98r$ = l$8cup['pop']();0x0 > vynsg_ ? (rzj9d = qf4173['substring'](ul$cp + 0x2)['replace'](/[\s<].*/, ''), $prcu8['error']('end tag name: ' + rzj9d + ' is not complete:' + zu98r$['tagName']), vynsg_ = ul$cp + 0x1 + rzj9d['length']) : rzj9d['match'](/\s</) && (rzj9d = rzj9d['replace'](/[\s<].*/, ''), $prcu8['error']('end tag name: ' + rzj9d + ' maybe not complete'), vynsg_ = ul$cp + 0x1 + rzj9d['length']);var djwhz9 = zu98r$['localNSMap'],
              zdwj = zu98r$['tagName'] == rzj9d,
              gn_f = zdwj || zu98r$['tagName'] && zu98r$['tagName']['toLowerCase']() == rzj9d['toLowerCase']();if (gn_f) {
            if (fg3417['endElement'](zu98r$['uri'], zu98r$['localName'], rzj9d), djwhz9) {
              for (var cpot5l in djwhz9) fg3417['endPrefixMapping'](cpot5l);
            }zdwj || $prcu8['fatalError']('end tag name: ' + rzj9d + ' is not match the current start tagName:' + zu98r$['tagName']);
          } else l$8cup['push'](zu98r$);vynsg_++;break;case '?':
          sy26na && gns_yv(ul$cp), vynsg_ = h_$z8j(qf4173, ul$cp, fg3417);break;case '!':
          sy26na && gns_yv(ul$cp), vynsg_ = h_s_vfn(qf4173, ul$cp, fg3417, $prcu8);break;default:
          sy26na && gns_yv(ul$cp);var jd9z8 = new h_a2iby6(),
              fvg43 = l$8cup[l$8cup['length'] - 0x1]['currentNSMap'],
              vynsg_ = h_zpur(qf4173, ul$cp, jd9z8, fvg43, pu$lc8, $prcu8),
              a2i6 = jd9z8['length'];if (!jd9z8['closed'] && h_ysv_ng(qf4173, vynsg_, jd9z8['tagName'], _yngvs) && (jd9z8['closed'] = !0x0, loupc['nbsp'] || $prcu8['warning']('unclosed xml attribute')), sy26na && a2i6) {
            for (var zj9w = h_s_yvng(sy26na, {}), wqhd0x = 0x0; a2i6 > wqhd0x; wqhd0x++) {
              var q307 = jd9z8[wqhd0x];gns_yv(q307['offset']), q307['locator'] = h_s_yvng(sy26na, {});
            }fg3417['locator'] = zj9w, h_r$p8z(jd9z8, fg3417, fvg43) && l$8cup['push'](jd9z8), fg3417['locator'] = sy26na;
          } else h_r$p8z(jd9z8, fg3417, fvg43) && l$8cup['push'](jd9z8);'http://www.w3.org/1999/xhtml' !== jd9z8['uri'] || jd9z8['closed'] ? vynsg_++ : vynsg_ = h_sgnv_y(qf4173, vynsg_, jd9z8['tagName'], pu$lc8, fg3417);}
    } catch (ul$5p) {
      $prcu8['error']('element parse error: ' + ul$5p), vynsg_ = -0x1;
    }vynsg_ > ya6_sn ? ya6_sn = vynsg_ : l$cu5p(Math['max'](ul$cp, ya6_sn) + 0x1);
  }
}function h_s_yvng(fg_n, mc5lo) {
  return mc5lo['lineNumber'] = fg_n['lineNumber'], mc5lo['columnNumber'] = fg_n['columnNumber'], mc5lo;
}function h_zpur(r$z89u, $r9z8, clpu$, ptolc5, gn_fsv, a6ny2s) {
  for (var g_vnfs, dwjhx0, y6a_s = ++$r9z8, _vna = h_mtkl;;) {
    var optlc5 = r$z89u['charAt'](y6a_s);switch (optlc5) {case '=':
        if (_vna === h_zu$8r9) g_vnfs = r$z89u['slice']($r9z8, y6a_s), _vna = h_svnf_g;else {
          if (_vna !== h_wjd90h) throw new Error('attribute equal must after attrName');_vna = h_svnf_g;
        }break;case '\x27':case '\x22':
        if (_vna === h_svnf_g || _vna === h_zu$8r9) {
          if (_vna === h_zu$8r9 && (a6ny2s['warning']('attribute value must after "="'), g_vnfs = r$z89u['slice']($r9z8, y6a_s)), $r9z8 = y6a_s + 0x1, y6a_s = r$z89u['indexOf'](optlc5, $r9z8), !(y6a_s > 0x0)) throw new Error('attribute value no end \'' + optlc5 + '\' match');dwjhx0 = r$z89u['slice']($r9z8, y6a_s)['replace'](/&#?\w+;/g, gn_fsv), clpu$['add'](g_vnfs, dwjhx0, $r9z8 - 0x1), _vna = h_x71q30;
        } else {
          if (_vna != h_xwh0j) throw new Error('attribute value must after "="');dwjhx0 = r$z89u['slice']($r9z8, y6a_s)['replace'](/&#?\w+;/g, gn_fsv), clpu$['add'](g_vnfs, dwjhx0, $r9z8), a6ny2s['warning']('attribute "' + g_vnfs + '" missed start quot(' + optlc5 + ')!!'), $r9z8 = y6a_s + 0x1, _vna = h_x71q30;
        }break;case '/':
        switch (_vna) {case h_mtkl:
            clpu$['setTagName'](r$z89u['slice']($r9z8, y6a_s));case h_x71q30:case h_u8pz:case h_ansy6:
            _vna = h_ansy6, clpu$['closed'] = !0x0;case h_xwh0j:case h_zu$8r9:case h_wjd90h:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return a6ny2s['error']('unexpected end of input'), _vna == h_mtkl && clpu$['setTagName'](r$z89u['slice']($r9z8, y6a_s)), y6a_s;case '>':
        switch (_vna) {case h_mtkl:
            clpu$['setTagName'](r$z89u['slice']($r9z8, y6a_s));case h_x71q30:case h_u8pz:case h_ansy6:
            break;case h_xwh0j:case h_zu$8r9:
            dwjhx0 = r$z89u['slice']($r9z8, y6a_s), '/' === dwjhx0['slice'](-0x1) && (clpu$['closed'] = !0x0, dwjhx0 = dwjhx0['slice'](0x0, -0x1));case h_wjd90h:
            _vna === h_wjd90h && (dwjhx0 = g_vnfs), _vna == h_xwh0j ? (a6ny2s['warning']('attribute "' + dwjhx0 + '" missed quot(")!!'), clpu$['add'](g_vnfs, dwjhx0['replace'](/&#?\w+;/g, gn_fsv), $r9z8)) : ('http://www.w3.org/1999/xhtml' === ptolc5[''] && dwjhx0['match'](/^(?:disabled|checked|selected)$/i) || a6ny2s['warning']('attribute "' + dwjhx0 + '" missed value!! "' + dwjhx0 + '" instead!!'), clpu$['add'](dwjhx0, dwjhx0, $r9z8));break;case h_svnf_g:
            throw new Error('attribute value missed!!');}return y6a_s;case '\u0080':
        optlc5 = '\x20';default:
        if ('\x20' >= optlc5) switch (_vna) {case h_mtkl:
            clpu$['setTagName'](r$z89u['slice']($r9z8, y6a_s)), _vna = h_u8pz;break;case h_zu$8r9:
            g_vnfs = r$z89u['slice']($r9z8, y6a_s), _vna = h_wjd90h;break;case h_xwh0j:
            var dwjhx0 = r$z89u['slice']($r9z8, y6a_s)['replace'](/&#?\w+;/g, gn_fsv);a6ny2s['warning']('attribute "' + dwjhx0 + '" missed quot(")!!'), clpu$['add'](g_vnfs, dwjhx0, $r9z8);case h_x71q30:
            _vna = h_u8pz;} else switch (_vna) {case h_wjd90h:
            {
              clpu$['tagName'];
            }'http://www.w3.org/1999/xhtml' === ptolc5[''] && g_vnfs['match'](/^(?:disabled|checked|selected)$/i) || a6ny2s['warning']('attribute "' + g_vnfs + '" missed value!! "' + g_vnfs + '" instead2!!'), clpu$['add'](g_vnfs, g_vnfs, $r9z8), $r9z8 = y6a_s, _vna = h_zu$8r9;break;case h_x71q30:
            a6ny2s['warning']('attribute space is required"' + g_vnfs + '\x22!!');case h_u8pz:
            _vna = h_zu$8r9, $r9z8 = y6a_s;break;case h_svnf_g:
            _vna = h_xwh0j, $r9z8 = y6a_s;break;case h_ansy6:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}y6a_s++;
  }
}function h_r$p8z(ruz$98, dhwj0x, hzr9j) {
  for (var _nyvsa = ruz$98['tagName'], j9$r = null, h0jwd = ruz$98['length']; h0jwd--;) {
    var c5lpto = ruz$98[h0jwd],
        tcpl = c5lpto['qName'],
        gfn_4v = c5lpto['value'],
        dhw0x = tcpl['indexOf'](':');if (dhw0x > 0x0) var z9r$8j = c5lpto['prefix'] = tcpl['slice'](0x0, dhw0x),
        _vnfg4 = tcpl['slice'](dhw0x + 0x1),
        wqx = 'xmlns' === z9r$8j && _vnfg4;else _vnfg4 = tcpl, z9r$8j = null, wqx = 'xmlns' === tcpl && '';c5lpto['localName'] = _vnfg4, wqx !== !0x1 && (null == j9$r && (j9$r = {}, h_ayvns(hzr9j, hzr9j = {})), hzr9j[wqx] = j9$r[wqx] = gfn_4v, c5lpto['uri'] = 'http://www.w3.org/2000/xmlns/', dhwj0x['startPrefixMapping'](wqx, gfn_4v));
  }for (var h0jwd = ruz$98['length']; h0jwd--;) {
    c5lpto = ruz$98[h0jwd];var z9r$8j = c5lpto['prefix'];z9r$8j && ('xml' === z9r$8j && (c5lpto['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== z9r$8j && (c5lpto['uri'] = hzr9j[z9r$8j || '']));
  }var dhw0x = _nyvsa['indexOf'](':');dhw0x > 0x0 ? (z9r$8j = ruz$98['prefix'] = _nyvsa['slice'](0x0, dhw0x), _vnfg4 = ruz$98['localName'] = _nyvsa['slice'](dhw0x + 0x1)) : (z9r$8j = null, _vnfg4 = ruz$98['localName'] = _nyvsa);var vsn_yg = ruz$98['uri'] = hzr9j[z9r$8j || ''];if (dhwj0x['startElement'](vsn_yg, _vnfg4, _nyvsa, ruz$98), !ruz$98['closed']) return ruz$98['currentNSMap'] = hzr9j, ruz$98['localNSMap'] = j9$r, !0x0;if (dhwj0x['endElement'](vsn_yg, _vnfg4, _nyvsa), j9$r) {
    for (z9r$8j in j9$r) dhwj0x['endPrefixMapping'](z9r$8j);
  }
}function h_sgnv_y(_vf4g, y62ias, e62bia, w0qdxh, mto5lc) {
  if (/^(?:script|textarea)$/i['test'](e62bia)) {
    var r8zp = _vf4g['indexOf']('</' + e62bia + '>', y62ias),
        jhd9zr = _vf4g['substring'](y62ias + 0x1, r8zp);if (/[&<]/['test'](jhd9zr)) return (/^script$/i['test'](e62bia) ? (mto5lc['characters'](jhd9zr, 0x0, jhd9zr['length']), r8zp) : (jhd9zr = jhd9zr['replace'](/&#?\w+;/g, w0qdxh), mto5lc['characters'](jhd9zr, 0x0, jhd9zr['length']), r8zp)
    );
  }return y62ias + 0x1;
}function h_ysv_ng(u$zp8, i6yba2, ltcop, b2ei) {
  var gyn_s = b2ei[ltcop];return null == gyn_s && (gyn_s = u$zp8['lastIndexOf']('</' + ltcop + '>'), i6yba2 > gyn_s && (gyn_s = u$zp8['lastIndexOf']('</' + ltcop)), b2ei[ltcop] = gyn_s), i6yba2 > gyn_s;
}function h_ayvns(u$8prz, rdz9j8) {
  for (var gf3v_ in u$8prz) rdz9j8[gf3v_] = u$8prz[gf3v_];
}function h_s_vfn(dhw0xq, g13vf4, n62sy, nfv_4) {
  var pr8uc = dhw0xq['charAt'](g13vf4 + 0x2);switch (pr8uc) {case '-':
      if ('-' === dhw0xq['charAt'](g13vf4 + 0x3)) {
        var iya6s = dhw0xq['indexOf']('-->', g13vf4 + 0x4);return iya6s > g13vf4 ? (n62sy['comment'](dhw0xq, g13vf4 + 0x4, iya6s - g13vf4 - 0x4), iya6s + 0x3) : (nfv_4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == dhw0xq['substr'](g13vf4 + 0x3, 0x6)) {
        var iya6s = dhw0xq['indexOf'](']]>', g13vf4 + 0x9);return n62sy['startCDATA'](), n62sy['characters'](dhw0xq, g13vf4 + 0x9, iya6s - g13vf4 - 0x9), n62sy['endCDATA'](), iya6s + 0x3;
      }var fn4_vg = h_sy_6n(dhw0xq, g13vf4),
          f3g_4 = fn4_vg['length'];if (f3g_4 > 0x1 && /!doctype/i['test'](fn4_vg[0x0][0x0])) {
        var r9z8u = fn4_vg[0x1][0x0],
            wd0h9 = f3g_4 > 0x3 && /^public$/i['test'](fn4_vg[0x2][0x0]) && fn4_vg[0x3][0x0],
            xwq0h7 = f3g_4 > 0x4 && fn4_vg[0x4][0x0],
            c5lu = fn4_vg[f3g_4 - 0x1];return n62sy['startDTD'](r9z8u, wd0h9 && wd0h9['replace'](/^(['"])(.*?)\1$/, '$2'), xwq0h7 && xwq0h7['replace'](/^(['"])(.*?)\1$/, '$2')), n62sy['endDTD'](), c5lu['index'] + c5lu[0x0]['length'];
      }}return -0x1;
}function h_$z8j(v_gnsy, c$rp8, f4gnv) {
  var cl8pu$ = v_gnsy['indexOf']('?>', c$rp8);if (cl8pu$) {
    var zh9jdw = v_gnsy['substring'](c$rp8, cl8pu$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (zh9jdw) {
      {
        zh9jdw[0x0]['length'];
      }return f4gnv['processingInstruction'](zh9jdw[0x1], zh9jdw[0x2]), cl8pu$ + 0x2;
    }return -0x1;
  }return -0x1;
}function h_a2iby6() {}function h_fvn_4(hw9j0d, s_y6n) {
  return hw9j0d['__proto__'] = s_y6n, hw9j0d;
}function h_sy_6n(zr9hj, na26ys) {
  var $uzr,
      _ng4v = [],
      whjd0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (whjd0['lastIndex'] = na26ys, whjd0['exec'](zr9hj); $uzr = whjd0['exec'](zr9hj);) if (_ng4v['push']($uzr), $uzr[0x1]) return _ng4v;
}var h_fg471 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    h_x37q10 = new RegExp('[\\-\\.0-9' + h_fg471['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    h_xq0hw7 = new RegExp('^' + h_fg471['source'] + h_x37q10['source'] + '*(?::' + h_fg471['source'] + h_x37q10['source'] + '*)?$'),
    h_mtkl = 0x0,
    h_zu$8r9 = 0x1,
    h_wjd90h = 0x2,
    h_svnf_g = 0x3,
    h_xwh0j = 0x4,
    h_x71q30 = 0x5,
    h_u8pz = 0x6,
    h_ansy6 = 0x7;h_pc$ru['prototype'] = { 'parse': function (gsn, biy62, xw0j) {
    var ltcm5 = this['domBuilder'];ltcm5['startDocument'](), h_ayvns(biy62, biy62 = {}), h_zhwj9(gsn, biy62, xw0j, ltcm5, this['errorHandler']), ltcm5['endDocument']();
  } }, h_a2iby6['prototype'] = { 'setTagName': function (o5tclp) {
    if (!h_xq0hw7['test'](o5tclp)) throw new Error('invalid tagName:' + o5tclp);this['tagName'] = o5tclp;
  }, 'add': function (f4g_n, xw0dj, _vng4f) {
    if (!h_xq0hw7['test'](f4g_n)) throw new Error('invalid attribute:' + f4g_n);this[this['length']++] = { 'qName': f4g_n, 'value': xw0dj, 'offset': _vng4f };
  }, 'length': 0x0, 'getLocalName': function (q1734) {
    return this[q1734]['localName'];
  }, 'getLocator': function (f734) {
    return this[f734]['locator'];
  }, 'getQName': function (n_gvf) {
    return this[n_gvf]['qName'];
  }, 'getURI': function (q7w0) {
    return this[q7w0]['uri'];
  }, 'getValue': function (zwjd9) {
    return this[zwjd9]['value'];
  } }, h_fvn_4({}, h_fvn_4['prototype']) instanceof h_fvn_4 || (h_fvn_4 = function (sygn_v, rh9jdz) {
  function hzjdr9() {}hzjdr9['prototype'] = rh9jdz, hzjdr9 = new hzjdr9();for (rh9jdz in sygn_v) hzjdr9[rh9jdz] = sygn_v[rh9jdz];return hzjdr9;
}), exports['XMLReader'] = h_pc$ru;