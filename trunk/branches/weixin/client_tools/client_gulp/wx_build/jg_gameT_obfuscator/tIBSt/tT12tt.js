var M = wx.$T;
function tjnabgr() {}function tci2lt(rsak, jkrbga, vpfdz, xm0h_, x0mq) {
  function mhw_x(fpd7o) {
    if (fpd7o > 0xffff) {
      fpd7o -= 0x10000;var w31685 = 0xd800 + (fpd7o >> 0xa),
          ox0eq = 0xdc00 + (0x3ff & fpd7o);return String['fromCharCode'](w31685, ox0eq);
    }return String['fromCharCode'](fpd7o);
  }function hm61(_yqe0) {
    var fpdz$v = _yqe0['slice'](0x1, -0x1);return fpdz$v in vpfdz ? vpfdz[fpdz$v] : '#' === fpdz$v['charAt'](0x0) ? mhw_x(parseInt(fpdz$v['substr'](0x1)['replace']('x', '0x'))) : (x0mq['error']('entity not found:' + _yqe0), _yqe0);
  }function t4i9c(g83jnr) {
    if (g83jnr > z$d) {
      var g8n16 = rsak['substring'](z$d, g83jnr)['replace'](/&#?\w+;/g, hm61);v2c9i && zvpf$d(z$d), xm0h_['characters'](g8n16, 0x0, g83jnr - z$d), z$d = g83jnr;
    }
  }function zvpf$d(m0xhy_, qyx_0m) {
    for (; m0xhy_ >= bjgkr && (qyx_0m = gbarnj['exec'](rsak));) z7eqo0 = qyx_0m['index'], bjgkr = z7eqo0 + qyx_0m[0x0]['length'], v2c9i['lineNumber']++;v2c9i['columnNumber'] = m0xhy_ - z7eqo0 + 0x1;
  }for (var z7eqo0 = 0x0, bjgkr = 0x0, gbarnj = /.*(?:\r\n?|\n)|.*$/g, v2c9i = xm0h_['locator'], h6w85 = [{ 'currentNSMap': jkrbga }], gkr = {}, z$d = 0x0;;) {
    try {
      var v9dpf$ = rsak['indexOf']('<', z$d);if (0x0 > v9dpf$) {
        if (!rsak['substr'](z$d)['match'](/^\s*$/)) {
          var fez7op = xm0h_['doc'],
              n813g = fez7op['createTextNode'](rsak['substr'](z$d));fez7op['appendChild'](n813g), xm0h_['currentElement'] = n813g;
        }return;
      }switch (v9dpf$ > z$d && t4i9c(v9dpf$), rsak['charAt'](v9dpf$ + 0x1)) {case '/':
          var m_y5w = rsak['indexOf']('>', v9dpf$ + 0x3),
              $zvp = rsak['substring'](v9dpf$ + 0x2, m_y5w),
              kbjrsa = h6w85['pop']();0x0 > m_y5w ? ($zvp = rsak['substring'](v9dpf$ + 0x2)['replace'](/[\s<].*/, ''), x0mq['error']('end tag name: ' + $zvp + ' is not complete:' + kbjrsa['tagName']), m_y5w = v9dpf$ + 0x1 + $zvp['length']) : $zvp['match'](/\s</) && ($zvp = $zvp['replace'](/[\s<].*/, ''), x0mq['error']('end tag name: ' + $zvp + ' maybe not complete'), m_y5w = v9dpf$ + 0x1 + $zvp['length']);var _0mxy = kbjrsa['localNSMap'],
              fp7$ = kbjrsa['tagName'] == $zvp,
              gjbran = fp7$ || kbjrsa['tagName'] && kbjrsa['tagName']['toLowerCase']() == $zvp['toLowerCase']();if (gjbran) {
            if (xm0h_['endElement'](kbjrsa['uri'], kbjrsa['localName'], $zvp), _0mxy) {
              for (var qxmy_ in _0mxy) xm0h_['endPrefixMapping'](qxmy_);
            }fp7$ || x0mq['fatalError']('end tag name: ' + $zvp + ' is not match the current start tagName:' + kbjrsa['tagName']);
          } else h6w85['push'](kbjrsa);m_y5w++;break;case '?':
          v2c9i && zvpf$d(v9dpf$), m_y5w = tgkbra(rsak, v9dpf$, xm0h_);break;case '!':
          v2c9i && zvpf$d(v9dpf$), m_y5w = tg18rn(rsak, v9dpf$, xm0h_, x0mq);break;default:
          v2c9i && zvpf$d(v9dpf$);var mh5_6 = new tdv$i(),
              _qm0yx = h6w85[h6w85['length'] - 0x1]['currentNSMap'],
              m_y5w = tx_whmy(rsak, v9dpf$, mh5_6, _qm0yx, hm61, x0mq),
              ywmh_5 = mh5_6['length'];if (!mh5_6['closed'] && trj3nbg(rsak, m_y5w, mh5_6['tagName'], gkr) && (mh5_6['closed'] = !0x0, vpfdz['nbsp'] || x0mq['warning']('unclosed xml attribute')), v2c9i && ywmh_5) {
            for (var til = tfpzd7$(v2c9i, {}), krsbja = 0x0; ywmh_5 > krsbja; krsbja++) {
              var t4lic = mh5_6[krsbja];zvpf$d(t4lic['offset']), t4lic['locator'] = tfpzd7$(v2c9i, {});
            }xm0h_['locator'] = til, tbrkjas(mh5_6, xm0h_, _qm0yx) && h6w85['push'](mh5_6), xm0h_['locator'] = v2c9i;
          } else tbrkjas(mh5_6, xm0h_, _qm0yx) && h6w85['push'](mh5_6);'http://www.w3.org/1999/xhtml' !== mh5_6['uri'] || mh5_6['closed'] ? m_y5w++ : m_y5w = tjbskr(rsak, m_y5w, mh5_6['tagName'], hm61, xm0h_);}
    } catch (yeqo0x) {
      x0mq['error']('element parse error: ' + yeqo0x), m_y5w = -0x1;
    }m_y5w > z$d ? z$d = m_y5w : t4i9c(Math['max'](v9dpf$, z$d) + 0x1);
  }
}function tfpzd7$(_mxyh, oz70q) {
  return oz70q['lineNumber'] = _mxyh['lineNumber'], oz70q['columnNumber'] = _mxyh['columnNumber'], oz70q;
}function tx_whmy(d$vpzf, p$vi, ctiv2, w5h1, oezp, it$v9c) {
  for (var ci$9vt, mhxw_y, ic492t = ++p$vi, fvdp$9 = tx0y_e;;) {
    var $fvdzp = d$vpzf['charAt'](ic492t);switch ($fvdzp) {case '=':
        if (fvdp$9 === t_qxm) ci$9vt = d$vpzf['slice'](p$vi, ic492t), fvdp$9 = tv9f$;else {
          if (fvdp$9 !== tfvd9$p) throw new Error('attribute equal must after attrName');fvdp$9 = tv9f$;
        }break;case '\x27':case '\x22':
        if (fvdp$9 === tv9f$ || fvdp$9 === t_qxm) {
          if (fvdp$9 === t_qxm && (it$v9c['warning']('attribute value must after "="'), ci$9vt = d$vpzf['slice'](p$vi, ic492t)), p$vi = ic492t + 0x1, ic492t = d$vpzf['indexOf']($fvdzp, p$vi), !(ic492t > 0x0)) throw new Error('attribute value no end \'' + $fvdzp + '\' match');mhxw_y = d$vpzf['slice'](p$vi, ic492t)['replace'](/&#?\w+;/g, oezp), ctiv2['add'](ci$9vt, mhxw_y, p$vi - 0x1), fvdp$9 = t$vi9d;
        } else {
          if (fvdp$9 != tv29tci) throw new Error('attribute value must after "="');mhxw_y = d$vpzf['slice'](p$vi, ic492t)['replace'](/&#?\w+;/g, oezp), ctiv2['add'](ci$9vt, mhxw_y, p$vi), it$v9c['warning']('attribute "' + ci$9vt + '" missed start quot(' + $fvdzp + ')!!'), p$vi = ic492t + 0x1, fvdp$9 = t$vi9d;
        }break;case '/':
        switch (fvdp$9) {case tx0y_e:
            ctiv2['setTagName'](d$vpzf['slice'](p$vi, ic492t));case t$vi9d:case tzeq7f:case tkujasb:
            fvdp$9 = tkujasb, ctiv2['closed'] = !0x0;case tv29tci:case t_qxm:case tfvd9$p:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return it$v9c['error']('unexpected end of input'), fvdp$9 == tx0y_e && ctiv2['setTagName'](d$vpzf['slice'](p$vi, ic492t)), ic492t;case '>':
        switch (fvdp$9) {case tx0y_e:
            ctiv2['setTagName'](d$vpzf['slice'](p$vi, ic492t));case t$vi9d:case tzeq7f:case tkujasb:
            break;case tv29tci:case t_qxm:
            mhxw_y = d$vpzf['slice'](p$vi, ic492t), '/' === mhxw_y['slice'](-0x1) && (ctiv2['closed'] = !0x0, mhxw_y = mhxw_y['slice'](0x0, -0x1));case tfvd9$p:
            fvdp$9 === tfvd9$p && (mhxw_y = ci$9vt), fvdp$9 == tv29tci ? (it$v9c['warning']('attribute "' + mhxw_y + '" missed quot(")!!'), ctiv2['add'](ci$9vt, mhxw_y['replace'](/&#?\w+;/g, oezp), p$vi)) : ('http://www.w3.org/1999/xhtml' === w5h1[''] && mhxw_y['match'](/^(?:disabled|checked|selected)$/i) || it$v9c['warning']('attribute "' + mhxw_y + '" missed value!! "' + mhxw_y + '" instead!!'), ctiv2['add'](mhxw_y, mhxw_y, p$vi));break;case tv9f$:
            throw new Error('attribute value missed!!');}return ic492t;case '\u0080':
        $fvdzp = '\x20';default:
        if ('\x20' >= $fvdzp) switch (fvdp$9) {case tx0y_e:
            ctiv2['setTagName'](d$vpzf['slice'](p$vi, ic492t)), fvdp$9 = tzeq7f;break;case t_qxm:
            ci$9vt = d$vpzf['slice'](p$vi, ic492t), fvdp$9 = tfvd9$p;break;case tv29tci:
            var mhxw_y = d$vpzf['slice'](p$vi, ic492t)['replace'](/&#?\w+;/g, oezp);it$v9c['warning']('attribute "' + mhxw_y + '" missed quot(")!!'), ctiv2['add'](ci$9vt, mhxw_y, p$vi);case t$vi9d:
            fvdp$9 = tzeq7f;} else switch (fvdp$9) {case tfvd9$p:
            {
              ctiv2['tagName'];
            }'http://www.w3.org/1999/xhtml' === w5h1[''] && ci$9vt['match'](/^(?:disabled|checked|selected)$/i) || it$v9c['warning']('attribute "' + ci$9vt + '" missed value!! "' + ci$9vt + '" instead2!!'), ctiv2['add'](ci$9vt, ci$9vt, p$vi), p$vi = ic492t, fvdp$9 = t_qxm;break;case t$vi9d:
            it$v9c['warning']('attribute space is required"' + ci$9vt + '\x22!!');case tzeq7f:
            fvdp$9 = t_qxm, p$vi = ic492t;break;case tv9f$:
            fvdp$9 = tv29tci, p$vi = ic492t;break;case tkujasb:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ic492t++;
  }
}function tbrkjas(vp$, z$df7p, di9$vp) {
  for (var m6_wh = vp$['tagName'], i9vt$ = null, x_wyh = vp$['length']; x_wyh--;) {
    var g618n = vp$[x_wyh],
        _w5y = g618n['qName'],
        i$9cdv = g618n['value'],
        pivd9 = _w5y['indexOf'](':');if (pivd9 > 0x0) var fd9pv$ = g618n['prefix'] = _w5y['slice'](0x0, pivd9),
        it294c = _w5y['slice'](pivd9 + 0x1),
        kabgrj = 'xmlns' === fd9pv$ && it294c;else it294c = _w5y, fd9pv$ = null, kabgrj = 'xmlns' === _w5y && '';g618n['localName'] = it294c, kabgrj !== !0x1 && (null == i9vt$ && (i9vt$ = {}, tuskj(di9$vp, di9$vp = {})), di9$vp[kabgrj] = i9vt$[kabgrj] = i$9cdv, g618n['uri'] = 'http://www.w3.org/2000/xmlns/', z$df7p['startPrefixMapping'](kabgrj, i$9cdv));
  }for (var x_wyh = vp$['length']; x_wyh--;) {
    g618n = vp$[x_wyh];var fd9pv$ = g618n['prefix'];fd9pv$ && ('xml' === fd9pv$ && (g618n['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== fd9pv$ && (g618n['uri'] = di9$vp[fd9pv$ || '']));
  }var pivd9 = m6_wh['indexOf'](':');pivd9 > 0x0 ? (fd9pv$ = vp$['prefix'] = m6_wh['slice'](0x0, pivd9), it294c = vp$['localName'] = m6_wh['slice'](pivd9 + 0x1)) : (fd9pv$ = null, it294c = vp$['localName'] = m6_wh);var t4l2ci = vp$['uri'] = di9$vp[fd9pv$ || ''];if (z$df7p['startElement'](t4l2ci, it294c, m6_wh, vp$), !vp$['closed']) return vp$['currentNSMap'] = di9$vp, vp$['localNSMap'] = i9vt$, !0x0;if (z$df7p['endElement'](t4l2ci, it294c, m6_wh), i9vt$) {
    for (fd9pv$ in i9vt$) z$df7p['endPrefixMapping'](fd9pv$);
  }
}function tjbskr(fpz$d, yh_w5, vi9ct2, w61h8, ltc42) {
  if (/^(?:script|textarea)$/i['test'](vi9ct2)) {
    var vcdi$ = fpz$d['indexOf']('</' + vi9ct2 + '>', yh_w5),
        gnj = fpz$d['substring'](yh_w5 + 0x1, vcdi$);if (/[&<]/['test'](gnj)) return (/^script$/i['test'](vi9ct2) ? (ltc42['characters'](gnj, 0x0, gnj['length']), vcdi$) : (gnj = gnj['replace'](/&#?\w+;/g, w61h8), ltc42['characters'](gnj, 0x0, gnj['length']), vcdi$)
    );
  }return yh_w5 + 0x1;
}function trj3nbg(y5_, m_hx0y, _w5ym, dpzfv) {
  var w186h5 = dpzfv[_w5ym];return null == w186h5 && (w186h5 = y5_['lastIndexOf']('</' + _w5ym + '>'), m_hx0y > w186h5 && (w186h5 = y5_['lastIndexOf']('</' + _w5ym)), dpzfv[_w5ym] = w186h5), m_hx0y > w186h5;
}function tuskj(m0qxy_, w5mh_6) {
  for (var h5_w6m in m0qxy_) w5mh_6[h5_w6m] = m0qxy_[h5_w6m];
}function tg18rn(jsabr, jgbanr, h1mw65, qy) {
  var zq7fe = jsabr['charAt'](jgbanr + 0x2);switch (zq7fe) {case '-':
      if ('-' === jsabr['charAt'](jgbanr + 0x3)) {
        var pzf7$d = jsabr['indexOf']('-->', jgbanr + 0x4);return pzf7$d > jgbanr ? (h1mw65['comment'](jsabr, jgbanr + 0x4, pzf7$d - jgbanr - 0x4), pzf7$d + 0x3) : (qy['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jsabr['substr'](jgbanr + 0x3, 0x6)) {
        var pzf7$d = jsabr['indexOf'](']]>', jgbanr + 0x9);return h1mw65['startCDATA'](), h1mw65['characters'](jsabr, jgbanr + 0x9, pzf7$d - jgbanr - 0x9), h1mw65['endCDATA'](), pzf7$d + 0x3;
      }var $f9 = tdi$p9v(jsabr, jgbanr),
          wmh156 = $f9['length'];if (wmh156 > 0x1 && /!doctype/i['test']($f9[0x0][0x0])) {
        var jgarkb = $f9[0x1][0x0],
            id9c = wmh156 > 0x3 && /^public$/i['test']($f9[0x2][0x0]) && $f9[0x3][0x0],
            jrgnb = wmh156 > 0x4 && $f9[0x4][0x0],
            yqe0_ = $f9[wmh156 - 0x1];return h1mw65['startDTD'](jgarkb, id9c && id9c['replace'](/^(['"])(.*?)\1$/, '$2'), jrgnb && jrgnb['replace'](/^(['"])(.*?)\1$/, '$2')), h1mw65['endDTD'](), yqe0_['index'] + yqe0_[0x0]['length'];
      }}return -0x1;
}function tgkbra(v2c9, sbajuk, jrgnba) {
  var v$9cti = v2c9['indexOf']('?>', sbajuk);if (v$9cti) {
    var it9c4 = v2c9['substring'](sbajuk, v$9cti)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (it9c4) {
      {
        it9c4[0x0]['length'];
      }return jrgnba['processingInstruction'](it9c4[0x1], it9c4[0x2]), v$9cti + 0x2;
    }return -0x1;
  }return -0x1;
}function tdv$i() {}function tdpv(jsuka, c$) {
  return jsuka['__proto__'] = c$, jsuka;
}function tdi$p9v(fp$dz7, zf7$dp) {
  var bagjr,
      f7dopz = [],
      h6851 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (h6851['lastIndex'] = zf7$dp, h6851['exec'](fp$dz7); bagjr = h6851['exec'](fp$dz7);) if (f7dopz['push'](bagjr), bagjr[0x1]) return f7dopz;
}var tdf$pv = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tc9$idv = new RegExp('[\\-\\.0-9' + tdf$pv['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    t$dv9ip = new RegExp('^' + tdf$pv['source'] + tc9$idv['source'] + '*(?::' + tdf$pv['source'] + tc9$idv['source'] + '*)?$'),
    tx0y_e = 0x0,
    t_qxm = 0x1,
    tfvd9$p = 0x2,
    tv9f$ = 0x3,
    tv29tci = 0x4,
    t$vi9d = 0x5,
    tzeq7f = 0x6,
    tkujasb = 0x7;tjnabgr['prototype'] = { 'parse': function (op7fz, bagnr, r38nj) {
    var _x0myq = this['domBuilder'];_x0myq['startDocument'](), tuskj(bagnr, bagnr = {}), tci2lt(op7fz, bagnr, r38nj, _x0myq, this['errorHandler']), _x0myq['endDocument']();
  } }, tdv$i['prototype'] = { 'setTagName': function ($v9dc) {
    if (!t$dv9ip['test']($v9dc)) throw new Error('invalid tagName:' + $v9dc);this['tagName'] = $v9dc;
  }, 'add': function (x0e_q, l2ic, jgrba) {
    if (!t$dv9ip['test'](x0e_q)) throw new Error('invalid attribute:' + x0e_q);this[this['length']++] = { 'qName': x0e_q, 'value': l2ic, 'offset': jgrba };
  }, 'length': 0x0, 'getLocalName': function (l2ti4) {
    return this[l2ti4]['localName'];
  }, 'getLocator': function (ex) {
    return this[ex]['locator'];
  }, 'getQName': function (e_yx0q) {
    return this[e_yx0q]['qName'];
  }, 'getURI': function (rnjba) {
    return this[rnjba]['uri'];
  }, 'getValue': function (h6518) {
    return this[h6518]['value'];
  } }, tdpv({}, tdpv['prototype']) instanceof tdpv || (tdpv = function (id9, n8gr31) {
  function cv9di() {}cv9di['prototype'] = n8gr31, cv9di = new cv9di();for (n8gr31 in id9) cv9di[n8gr31] = id9[n8gr31];return cv9di;
}), exports['XMLReader'] = tjnabgr;