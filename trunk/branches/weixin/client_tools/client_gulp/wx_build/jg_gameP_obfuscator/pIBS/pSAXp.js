var E = wx.$p;
function p_spk() {}function p_ag98(v6$yi, yhj$i, yhkis, v2r70, l4txs) {
  function tf_ux(v67y$1) {
    if (v67y$1 > 0xffff) {
      v67y$1 -= 0x10000;var utf_xl = 0xd800 + (v67y$1 >> 0xa),
          psjhk = 0xdc00 + (0x3ff & v67y$1);return String['fromCharCode'](utf_xl, psjhk);
    }return String['fromCharCode'](v67y$1);
  }function s4px(p4utlx) {
    var _txluf = p4utlx['slice'](0x1, -0x1);return _txluf in yhkis ? yhkis[_txluf] : '#' === _txluf['charAt'](0x0) ? tf_ux(parseInt(_txluf['substr'](0x1)['replace']('x', '0x'))) : (l4txs['error']('entity not found:' + p4utlx), p4utlx);
  }function v62r1(tmux_) {
    if (tmux_ > lxpts) {
      var ft_xul = v6$yi['substring'](lxpts, tmux_)['replace'](/&#?\w+;/g, s4px);v6$71y && _uftlx(lxpts), v2r70['characters'](ft_xul, 0x0, tmux_ - lxpts), lxpts = tmux_;
    }
  }function _uftlx(_xftm, pfxtl) {
    for (; _xftm >= i$kyh && (pfxtl = kh$i['exec'](v6$yi));) uftpx = pfxtl['index'], i$kyh = uftpx + pfxtl[0x0]['length'], v6$71y['lineNumber']++;v6$71y['columnNumber'] = _xftm - uftpx + 0x1;
  }for (var uftpx = 0x0, i$kyh = 0x0, kh$i = /.*(?:\r\n?|\n)|.*$/g, v6$71y = v2r70['locator'], ba9g8 = [{ 'currentNSMap': yhj$i }], g8abq = {}, lxpts = 0x0;;) {
    try {
      var tf_xul = v6$yi['indexOf']('<', lxpts);if (0x0 > tf_xul) {
        if (!v6$yi['substr'](lxpts)['match'](/^\s*$/)) {
          var n053wz = v2r70['doc'],
              ewn593 = n053wz['createTextNode'](v6$yi['substr'](lxpts));n053wz['appendChild'](ewn593), v2r70['currentElement'] = ewn593;
        }return;
      }switch (tf_xul > lxpts && v62r1(tf_xul), v6$yi['charAt'](tf_xul + 0x1)) {case '/':
          var y6$ji1 = v6$yi['indexOf']('>', tf_xul + 0x3),
              yijkh = v6$yi['substring'](tf_xul + 0x2, y6$ji1),
              qnb9 = ba9g8['pop']();0x0 > y6$ji1 ? (yijkh = v6$yi['substring'](tf_xul + 0x2)['replace'](/[\s<].*/, ''), l4txs['error']('end tag name: ' + yijkh + ' is not complete:' + qnb9['tagName']), y6$ji1 = tf_xul + 0x1 + yijkh['length']) : yijkh['match'](/\s</) && (yijkh = yijkh['replace'](/[\s<].*/, ''), l4txs['error']('end tag name: ' + yijkh + ' maybe not complete'), y6$ji1 = tf_xul + 0x1 + yijkh['length']);var ij1$6 = qnb9['localNSMap'],
              x4utlp = qnb9['tagName'] == yijkh,
              wen5z = x4utlp || qnb9['tagName'] && qnb9['tagName']['toLowerCase']() == yijkh['toLowerCase']();if (wen5z) {
            if (v2r70['endElement'](qnb9['uri'], qnb9['localName'], yijkh), ij1$6) {
              for (var kjph4 in ij1$6) v2r70['endPrefixMapping'](kjph4);
            }x4utlp || l4txs['fatalError']('end tag name: ' + yijkh + ' is not match the current start tagName:' + qnb9['tagName']);
          } else ba9g8['push'](qnb9);y6$ji1++;break;case '?':
          v6$71y && _uftlx(tf_xul), y6$ji1 = p_q9n8be(v6$yi, tf_xul, v2r70);break;case '!':
          v6$71y && _uftlx(tf_xul), y6$ji1 = p_$y16iv(v6$yi, tf_xul, v2r70, l4txs);break;default:
          v6$71y && _uftlx(tf_xul);var n50w = new p_e35zwn(),
              kysij = ba9g8[ba9g8['length'] - 0x1]['currentNSMap'],
              y6$ji1 = p_lht4sp(v6$yi, tf_xul, n50w, kysij, s4px, l4txs),
              en8b9 = n50w['length'];if (!n50w['closed'] && p_iy1(v6$yi, y6$ji1, n50w['tagName'], g8abq) && (n50w['closed'] = !0x0, yhkis['nbsp'] || l4txs['warning']('unclosed xml attribute')), v6$71y && en8b9) {
            for (var plftu = p_fu(v6$71y, {}), bqgd = 0x0; en8b9 > bqgd; bqgd++) {
              var kisjyh = n50w[bqgd];_uftlx(kisjyh['offset']), kisjyh['locator'] = p_fu(v6$71y, {});
            }v2r70['locator'] = plftu, p_lspt4(n50w, v2r70, kysij) && ba9g8['push'](n50w), v2r70['locator'] = v6$71y;
          } else p_lspt4(n50w, v2r70, kysij) && ba9g8['push'](n50w);'http://www.w3.org/1999/xhtml' !== n50w['uri'] || n50w['closed'] ? y6$ji1++ : y6$ji1 = p_r37(v6$yi, y6$ji1, n50w['tagName'], s4px, v2r70);}
    } catch (r021) {
      l4txs['error']('element parse error: ' + r021), y6$ji1 = -0x1;
    }y6$ji1 > lxpts ? lxpts = y6$ji1 : v62r1(Math['max'](tf_xul, lxpts) + 0x1);
  }
}function p_fu(gq9ba8, iysh) {
  return iysh['lineNumber'] = gq9ba8['lineNumber'], iysh['columnNumber'] = gq9ba8['columnNumber'], iysh;
}function p_lht4sp($7v61, r7z0v2, new539, muxtf_, qne89, zn305w) {
  for (var z07r32, u4tlxp, e953wn = ++r7z0v2, w23z5 = p_eznw35;;) {
    var v1yi6 = $7v61['charAt'](e953wn);switch (v1yi6) {case '=':
        if (w23z5 === p_utpxl4) z07r32 = $7v61['slice'](r7z0v2, e953wn), w23z5 = p_y$i1v;else {
          if (w23z5 !== p_txu4) throw new Error('attribute equal must after attrName');w23z5 = p_y$i1v;
        }break;case '\x27':case '\x22':
        if (w23z5 === p_y$i1v || w23z5 === p_utpxl4) {
          if (w23z5 === p_utpxl4 && (zn305w['warning']('attribute value must after "="'), z07r32 = $7v61['slice'](r7z0v2, e953wn)), r7z0v2 = e953wn + 0x1, e953wn = $7v61['indexOf'](v1yi6, r7z0v2), !(e953wn > 0x0)) throw new Error('attribute value no end \'' + v1yi6 + '\' match');u4tlxp = $7v61['slice'](r7z0v2, e953wn)['replace'](/&#?\w+;/g, qne89), new539['add'](z07r32, u4tlxp, r7z0v2 - 0x1), w23z5 = p_agqc8;
        } else {
          if (w23z5 != p_z20r7) throw new Error('attribute value must after "="');u4tlxp = $7v61['slice'](r7z0v2, e953wn)['replace'](/&#?\w+;/g, qne89), new539['add'](z07r32, u4tlxp, r7z0v2), zn305w['warning']('attribute "' + z07r32 + '" missed start quot(' + v1yi6 + ')!!'), r7z0v2 = e953wn + 0x1, w23z5 = p_agqc8;
        }break;case '/':
        switch (w23z5) {case p_eznw35:
            new539['setTagName']($7v61['slice'](r7z0v2, e953wn));case p_agqc8:case p_hik$y:case p_q8n5:
            w23z5 = p_q8n5, new539['closed'] = !0x0;case p_z20r7:case p_utpxl4:case p_txu4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return zn305w['error']('unexpected end of input'), w23z5 == p_eznw35 && new539['setTagName']($7v61['slice'](r7z0v2, e953wn)), e953wn;case '>':
        switch (w23z5) {case p_eznw35:
            new539['setTagName']($7v61['slice'](r7z0v2, e953wn));case p_agqc8:case p_hik$y:case p_q8n5:
            break;case p_z20r7:case p_utpxl4:
            u4tlxp = $7v61['slice'](r7z0v2, e953wn), '/' === u4tlxp['slice'](-0x1) && (new539['closed'] = !0x0, u4tlxp = u4tlxp['slice'](0x0, -0x1));case p_txu4:
            w23z5 === p_txu4 && (u4tlxp = z07r32), w23z5 == p_z20r7 ? (zn305w['warning']('attribute "' + u4tlxp + '" missed quot(")!!'), new539['add'](z07r32, u4tlxp['replace'](/&#?\w+;/g, qne89), r7z0v2)) : ('http://www.w3.org/1999/xhtml' === muxtf_[''] && u4tlxp['match'](/^(?:disabled|checked|selected)$/i) || zn305w['warning']('attribute "' + u4tlxp + '" missed value!! "' + u4tlxp + '" instead!!'), new539['add'](u4tlxp, u4tlxp, r7z0v2));break;case p_y$i1v:
            throw new Error('attribute value missed!!');}return e953wn;case '\u0080':
        v1yi6 = '\x20';default:
        if ('\x20' >= v1yi6) switch (w23z5) {case p_eznw35:
            new539['setTagName']($7v61['slice'](r7z0v2, e953wn)), w23z5 = p_hik$y;break;case p_utpxl4:
            z07r32 = $7v61['slice'](r7z0v2, e953wn), w23z5 = p_txu4;break;case p_z20r7:
            var u4tlxp = $7v61['slice'](r7z0v2, e953wn)['replace'](/&#?\w+;/g, qne89);zn305w['warning']('attribute "' + u4tlxp + '" missed quot(")!!'), new539['add'](z07r32, u4tlxp, r7z0v2);case p_agqc8:
            w23z5 = p_hik$y;} else switch (w23z5) {case p_txu4:
            {
              new539['tagName'];
            }'http://www.w3.org/1999/xhtml' === muxtf_[''] && z07r32['match'](/^(?:disabled|checked|selected)$/i) || zn305w['warning']('attribute "' + z07r32 + '" missed value!! "' + z07r32 + '" instead2!!'), new539['add'](z07r32, z07r32, r7z0v2), r7z0v2 = e953wn, w23z5 = p_utpxl4;break;case p_agqc8:
            zn305w['warning']('attribute space is required"' + z07r32 + '\x22!!');case p_hik$y:
            w23z5 = p_utpxl4, r7z0v2 = e953wn;break;case p_y$i1v:
            w23z5 = p_z20r7, r7z0v2 = e953wn;break;case p_q8n5:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}e953wn++;
  }
}function p_lspt4(v16r, n539e, muo_) {
  for (var w0z52 = v16r['tagName'], ts4l = null, ul_tfx = v16r['length']; ul_tfx--;) {
    var ag9bq8 = v16r[ul_tfx],
        v2716r = ag9bq8['qName'],
        jskhiy = ag9bq8['value'],
        pu4tl = v2716r['indexOf'](':');if (pu4tl > 0x0) var fxmt = ag9bq8['prefix'] = v2716r['slice'](0x0, pu4tl),
        aq8 = v2716r['slice'](pu4tl + 0x1),
        u4xtl = 'xmlns' === fxmt && aq8;else aq8 = v2716r, fxmt = null, u4xtl = 'xmlns' === v2716r && '';ag9bq8['localName'] = aq8, u4xtl !== !0x1 && (null == ts4l && (ts4l = {}, p_dacqb(muo_, muo_ = {})), muo_[u4xtl] = ts4l[u4xtl] = jskhiy, ag9bq8['uri'] = 'http://www.w3.org/2000/xmlns/', n539e['startPrefixMapping'](u4xtl, jskhiy));
  }for (var ul_tfx = v16r['length']; ul_tfx--;) {
    ag9bq8 = v16r[ul_tfx];var fxmt = ag9bq8['prefix'];fxmt && ('xml' === fxmt && (ag9bq8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== fxmt && (ag9bq8['uri'] = muo_[fxmt || '']));
  }var pu4tl = w0z52['indexOf'](':');pu4tl > 0x0 ? (fxmt = v16r['prefix'] = w0z52['slice'](0x0, pu4tl), aq8 = v16r['localName'] = w0z52['slice'](pu4tl + 0x1)) : (fxmt = null, aq8 = v16r['localName'] = w0z52);var wz230r = v16r['uri'] = muo_[fxmt || ''];if (n539e['startElement'](wz230r, aq8, w0z52, v16r), !v16r['closed']) return v16r['currentNSMap'] = muo_, v16r['localNSMap'] = ts4l, !0x0;if (n539e['endElement'](wz230r, aq8, w0z52), ts4l) {
    for (fxmt in ts4l) n539e['endPrefixMapping'](fxmt);
  }
}function p_r37(uptlx4, htlps, kjhp4, iy1$6, shj4) {
  if (/^(?:script|textarea)$/i['test'](kjhp4)) {
    var tl4pux = uptlx4['indexOf']('</' + kjhp4 + '>', htlps),
        b8gcaq = uptlx4['substring'](htlps + 0x1, tl4pux);if (/[&<]/['test'](b8gcaq)) return (/^script$/i['test'](kjhp4) ? (shj4['characters'](b8gcaq, 0x0, b8gcaq['length']), tl4pux) : (b8gcaq = b8gcaq['replace'](/&#?\w+;/g, iy1$6), shj4['characters'](b8gcaq, 0x0, b8gcaq['length']), tl4pux)
    );
  }return htlps + 0x1;
}function p_iy1(ls4tph, k$6yji, s4ptlx, z0v27r) {
  var zne53w = z0v27r[s4ptlx];return null == zne53w && (zne53w = ls4tph['lastIndexOf']('</' + s4ptlx + '>'), k$6yji > zne53w && (zne53w = ls4tph['lastIndexOf']('</' + s4ptlx)), z0v27r[s4ptlx] = zne53w), k$6yji > zne53w;
}function p_dacqb(h$iyj, sjihky) {
  for (var e9w8 in h$iyj) sjihky[e9w8] = h$iyj[e9w8];
}function p_$y16iv(fputxl, l4utp, jsihky, rzv70) {
  var ftxm = fputxl['charAt'](l4utp + 0x2);switch (ftxm) {case '-':
      if ('-' === fputxl['charAt'](l4utp + 0x3)) {
        var a98eqb = fputxl['indexOf']('-->', l4utp + 0x4);return a98eqb > l4utp ? (jsihky['comment'](fputxl, l4utp + 0x4, a98eqb - l4utp - 0x4), a98eqb + 0x3) : (rzv70['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == fputxl['substr'](l4utp + 0x3, 0x6)) {
        var a98eqb = fputxl['indexOf'](']]>', l4utp + 0x9);return jsihky['startCDATA'](), jsihky['characters'](fputxl, l4utp + 0x9, a98eqb - l4utp - 0x9), jsihky['endCDATA'](), a98eqb + 0x3;
      }var $71y6 = p_rv61$7(fputxl, l4utp),
          v1$ = $71y6['length'];if (v1$ > 0x1 && /!doctype/i['test']($71y6[0x0][0x0])) {
        var n35ew9 = $71y6[0x1][0x0],
            sxp4lt = v1$ > 0x3 && /^public$/i['test']($71y6[0x2][0x0]) && $71y6[0x3][0x0],
            _fxuom = v1$ > 0x4 && $71y6[0x4][0x0],
            k$hyi = $71y6[v1$ - 0x1];return jsihky['startDTD'](n35ew9, sxp4lt && sxp4lt['replace'](/^(['"])(.*?)\1$/, '$2'), _fxuom && _fxuom['replace'](/^(['"])(.*?)\1$/, '$2')), jsihky['endDTD'](), k$hyi['index'] + k$hyi[0x0]['length'];
      }}return -0x1;
}function p_q9n8be(pthsl4, ysjk, i$jk) {
  var wn93e = pthsl4['indexOf']('?>', ysjk);if (wn93e) {
    var qn8b9 = pthsl4['substring'](ysjk, wn93e)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qn8b9) {
      {
        qn8b9[0x0]['length'];
      }return i$jk['processingInstruction'](qn8b9[0x1], qn8b9[0x2]), wn93e + 0x2;
    }return -0x1;
  }return -0x1;
}function p_e35zwn() {}function p_qadbcg(vr$16, l4htp) {
  return vr$16['__proto__'] = l4htp, vr$16;
}function p_rv61$7(q58n9e, i16yj$) {
  var y16v,
      $i = [],
      cqdg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (cqdg['lastIndex'] = i16yj$, cqdg['exec'](q58n9e); y16v = cqdg['exec'](q58n9e);) if ($i['push'](y16v), y16v[0x1]) return $i;
}var p_e9abq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    p_mxfu_o = new RegExp('[\\-\\.0-9' + p_e9abq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    p_qgdbc = new RegExp('^' + p_e9abq['source'] + p_mxfu_o['source'] + '*(?::' + p_e9abq['source'] + p_mxfu_o['source'] + '*)?$'),
    p_eznw35 = 0x0,
    p_utpxl4 = 0x1,
    p_txu4 = 0x2,
    p_y$i1v = 0x3,
    p_z20r7 = 0x4,
    p_agqc8 = 0x5,
    p_hik$y = 0x6,
    p_q8n5 = 0x7;p_spk['prototype'] = { 'parse': function (ky6j$i, gcdqab, yi$j16) {
    var f_mxo = this['domBuilder'];f_mxo['startDocument'](), p_dacqb(gcdqab, gcdqab = {}), p_ag98(ky6j$i, gcdqab, yi$j16, f_mxo, this['errorHandler']), f_mxo['endDocument']();
  } }, p_e35zwn['prototype'] = { 'setTagName': function (pthls4) {
    if (!p_qgdbc['test'](pthls4)) throw new Error('invalid tagName:' + pthls4);this['tagName'] = pthls4;
  }, 'add': function (hjyi$k, jkshi, ew89n5) {
    if (!p_qgdbc['test'](hjyi$k)) throw new Error('invalid attribute:' + hjyi$k);this[this['length']++] = { 'qName': hjyi$k, 'value': jkshi, 'offset': ew89n5 };
  }, 'length': 0x0, 'getLocalName': function (fmux_t) {
    return this[fmux_t]['localName'];
  }, 'getLocator': function (pxlst) {
    return this[pxlst]['locator'];
  }, 'getQName': function (ne5q89) {
    return this[ne5q89]['qName'];
  }, 'getURI': function (we3n5z) {
    return this[we3n5z]['uri'];
  }, 'getValue': function ($1v67) {
    return this[$1v67]['value'];
  } }, p_qadbcg({}, p_qadbcg['prototype']) instanceof p_qadbcg || (p_qadbcg = function (qg8c, $176v) {
  function l4spth() {}l4spth['prototype'] = $176v, l4spth = new l4spth();for ($176v in qg8c) l4spth[$176v] = qg8c[$176v];return l4spth;
}), exports['XMLReader'] = p_spk;