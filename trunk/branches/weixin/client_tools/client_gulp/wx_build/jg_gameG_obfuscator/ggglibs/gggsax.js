var m = wx.$g;
function gbft0_() {}function gb5a0p(hx5aib, tf_p0b, r26ozd, vgq7, eg7cqv) {
  function ipa5bx(ah5ibx) {
    if (ah5ibx > 0xffff) {
      ah5ibx -= 0x10000;var o62d = 0xd800 + (ah5ibx >> 0xa),
          yvw7eq = 0xdc00 + (0x3ff & ah5ibx);return String['fromCharCode'](o62d, yvw7eq);
    }return String['fromCharCode'](ah5ibx);
  }function gqs87(bf50) {
    var qg8sc = bf50['slice'](0x1, -0x1);return qg8sc in r26ozd ? r26ozd[qg8sc] : '#' === qg8sc['charAt'](0x0) ? ipa5bx(parseInt(qg8sc['substr'](0x1)['replace']('x', '0x'))) : (eg7cqv['error']('entity not found:' + bf50), bf50);
  }function b5haxi(kwey7) {
    if (kwey7 > qsc8g7) {
      var _0f5bp = hx5aib['substring'](qsc8g7, kwey7)['replace'](/&#?\w+;/g, gqs87);j6rdz && fbp_5(qsc8g7), vgq7['characters'](_0f5bp, 0x0, kwey7 - qsc8g7), qsc8g7 = kwey7;
    }
  }function fbp_5($6rjz2, gvqye) {
    for (; $6rjz2 >= x5pba && (gvqye = zrdj2['exec'](hx5aib));) oft_4 = gvqye['index'], x5pba = oft_4 + gvqye[0x0]['length'], j6rdz['lineNumber']++;j6rdz['columnNumber'] = $6rjz2 - oft_4 + 0x1;
  }for (var oft_4 = 0x0, x5pba = 0x0, zrdj2 = /.*(?:\r\n?|\n)|.*$/g, j6rdz = vgq7['locator'], t_4p = [{ 'currentNSMap': tf_p0b }], ek7v = {}, qsc8g7 = 0x0;;) {
    try {
      var t_034f = hx5aib['indexOf']('<', qsc8g7);if (0x0 > t_034f) {
        if (!hx5aib['substr'](qsc8g7)['match'](/^\s*$/)) {
          var $2r6zj = vgq7['doc'],
              wyv7 = $2r6zj['createTextNode'](hx5aib['substr'](qsc8g7));$2r6zj['appendChild'](wyv7), vgq7['currentElement'] = wyv7;
        }return;
      }switch (t_034f > qsc8g7 && b5haxi(t_034f), hx5aib['charAt'](t_034f + 0x1)) {case '/':
          var t3oz4d = hx5aib['indexOf']('>', t_034f + 0x3),
              z6dj = hx5aib['substring'](t_034f + 0x2, t3oz4d),
              d6o2rz = t_4p['pop']();0x0 > t3oz4d ? (z6dj = hx5aib['substring'](t_034f + 0x2)['replace'](/[\s<].*/, ''), eg7cqv['error']('end tag name: ' + z6dj + ' is not complete:' + d6o2rz['tagName']), t3oz4d = t_034f + 0x1 + z6dj['length']) : z6dj['match'](/\s</) && (z6dj = z6dj['replace'](/[\s<].*/, ''), eg7cqv['error']('end tag name: ' + z6dj + ' maybe not complete'), t3oz4d = t_034f + 0x1 + z6dj['length']);var vwq7 = d6o2rz['localNSMap'],
              lc89sg = d6o2rz['tagName'] == z6dj,
              t0_f34 = lc89sg || d6o2rz['tagName'] && d6o2rz['tagName']['toLowerCase']() == z6dj['toLowerCase']();if (t0_f34) {
            if (vgq7['endElement'](d6o2rz['uri'], d6o2rz['localName'], z6dj), vwq7) {
              for (var ykwhx in vwq7) vgq7['endPrefixMapping'](ykwhx);
            }lc89sg || eg7cqv['fatalError']('end tag name: ' + z6dj + ' is not match the current start tagName:' + d6o2rz['tagName']);
          } else t_4p['push'](d6o2rz);t3oz4d++;break;case '?':
          j6rdz && fbp_5(t_034f), t3oz4d = gg9c(hx5aib, t_034f, vgq7);break;case '!':
          j6rdz && fbp_5(t_034f), t3oz4d = gx5biha(hx5aib, t_034f, vgq7, eg7cqv);break;default:
          j6rdz && fbp_5(t_034f);var _f4o3t = new gscl8gq(),
              iab5h = t_4p[t_4p['length'] - 0x1]['currentNSMap'],
              t3oz4d = gd4ot(hx5aib, t_034f, _f4o3t, iab5h, gqs87, eg7cqv),
              sgqlc8 = _f4o3t['length'];if (!_f4o3t['closed'] && gcgqe(hx5aib, t3oz4d, _f4o3t['tagName'], ek7v) && (_f4o3t['closed'] = !0x0, r26ozd['nbsp'] || eg7cqv['warning']('unclosed xml attribute')), j6rdz && sgqlc8) {
            for (var v7ec = gu$r62(j6rdz, {}), z4o3td = 0x0; sgqlc8 > z4o3td; z4o3td++) {
              var ye1kvw = _f4o3t[z4o3td];fbp_5(ye1kvw['offset']), ye1kvw['locator'] = gu$r62(j6rdz, {});
            }vgq7['locator'] = v7ec, gcgeq(_f4o3t, vgq7, iab5h) && t_4p['push'](_f4o3t), vgq7['locator'] = j6rdz;
          } else gcgeq(_f4o3t, vgq7, iab5h) && t_4p['push'](_f4o3t);'http://www.w3.org/1999/xhtml' !== _f4o3t['uri'] || _f4o3t['closed'] ? t3oz4d++ : t3oz4d = gd34z2o(hx5aib, t3oz4d, _f4o3t['tagName'], gqs87, vgq7);}
    } catch (qg7c8) {
      eg7cqv['error']('element parse error: ' + qg7c8), t3oz4d = -0x1;
    }t3oz4d > qsc8g7 ? qsc8g7 = t3oz4d : b5haxi(Math['max'](t_034f, qsc8g7) + 0x1);
  }
}function gu$r62(z$jr, $ur62j) {
  return $ur62j['lineNumber'] = z$jr['lineNumber'], $ur62j['columnNumber'] = z$jr['columnNumber'], $ur62j;
}function gd4ot(g98scl, xkyw, z2rj6, vw1yk, aw1kx, f3_to) {
  for (var bxh5, $zj26, fb05p_ = ++xkyw, ykve7 = gz362o;;) {
    var r6dz = g98scl['charAt'](fb05p_);switch (r6dz) {case '=':
        if (ykve7 === gqglc8s) bxh5 = g98scl['slice'](xkyw, fb05p_), ykve7 = gt43f_0;else {
          if (ykve7 !== ggqc78s) throw new Error('attribute equal must after attrName');ykve7 = gt43f_0;
        }break;case '\x27':case '\x22':
        if (ykve7 === gt43f_0 || ykve7 === gqglc8s) {
          if (ykve7 === gqglc8s && (f3_to['warning']('attribute value must after "="'), bxh5 = g98scl['slice'](xkyw, fb05p_)), xkyw = fb05p_ + 0x1, fb05p_ = g98scl['indexOf'](r6dz, xkyw), !(fb05p_ > 0x0)) throw new Error('attribute value no end \'' + r6dz + '\' match');$zj26 = g98scl['slice'](xkyw, fb05p_)['replace'](/&#?\w+;/g, aw1kx), z2rj6['add'](bxh5, $zj26, xkyw - 0x1), ykve7 = gah1i5;
        } else {
          if (ykve7 != gf5p_b0) throw new Error('attribute value must after "="');$zj26 = g98scl['slice'](xkyw, fb05p_)['replace'](/&#?\w+;/g, aw1kx), z2rj6['add'](bxh5, $zj26, xkyw), f3_to['warning']('attribute "' + bxh5 + '" missed start quot(' + r6dz + ')!!'), xkyw = fb05p_ + 0x1, ykve7 = gah1i5;
        }break;case '/':
        switch (ykve7) {case gz362o:
            z2rj6['setTagName'](g98scl['slice'](xkyw, fb05p_));case gah1i5:case gv7wyq:case gabxpi:
            ykve7 = gabxpi, z2rj6['closed'] = !0x0;case gf5p_b0:case gqglc8s:case ggqc78s:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return f3_to['error']('unexpected end of input'), ykve7 == gz362o && z2rj6['setTagName'](g98scl['slice'](xkyw, fb05p_)), fb05p_;case '>':
        switch (ykve7) {case gz362o:
            z2rj6['setTagName'](g98scl['slice'](xkyw, fb05p_));case gah1i5:case gv7wyq:case gabxpi:
            break;case gf5p_b0:case gqglc8s:
            $zj26 = g98scl['slice'](xkyw, fb05p_), '/' === $zj26['slice'](-0x1) && (z2rj6['closed'] = !0x0, $zj26 = $zj26['slice'](0x0, -0x1));case ggqc78s:
            ykve7 === ggqc78s && ($zj26 = bxh5), ykve7 == gf5p_b0 ? (f3_to['warning']('attribute "' + $zj26 + '" missed quot(")!!'), z2rj6['add'](bxh5, $zj26['replace'](/&#?\w+;/g, aw1kx), xkyw)) : ('http://www.w3.org/1999/xhtml' === vw1yk[''] && $zj26['match'](/^(?:disabled|checked|selected)$/i) || f3_to['warning']('attribute "' + $zj26 + '" missed value!! "' + $zj26 + '" instead!!'), z2rj6['add']($zj26, $zj26, xkyw));break;case gt43f_0:
            throw new Error('attribute value missed!!');}return fb05p_;case '\u0080':
        r6dz = '\x20';default:
        if ('\x20' >= r6dz) switch (ykve7) {case gz362o:
            z2rj6['setTagName'](g98scl['slice'](xkyw, fb05p_)), ykve7 = gv7wyq;break;case gqglc8s:
            bxh5 = g98scl['slice'](xkyw, fb05p_), ykve7 = ggqc78s;break;case gf5p_b0:
            var $zj26 = g98scl['slice'](xkyw, fb05p_)['replace'](/&#?\w+;/g, aw1kx);f3_to['warning']('attribute "' + $zj26 + '" missed quot(")!!'), z2rj6['add'](bxh5, $zj26, xkyw);case gah1i5:
            ykve7 = gv7wyq;} else switch (ykve7) {case ggqc78s:
            {
              z2rj6['tagName'];
            }'http://www.w3.org/1999/xhtml' === vw1yk[''] && bxh5['match'](/^(?:disabled|checked|selected)$/i) || f3_to['warning']('attribute "' + bxh5 + '" missed value!! "' + bxh5 + '" instead2!!'), z2rj6['add'](bxh5, bxh5, xkyw), xkyw = fb05p_, ykve7 = gqglc8s;break;case gah1i5:
            f3_to['warning']('attribute space is required"' + bxh5 + '\x22!!');case gv7wyq:
            ykve7 = gqglc8s, xkyw = fb05p_;break;case gt43f_0:
            ykve7 = gf5p_b0, xkyw = fb05p_;break;case gabxpi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}fb05p_++;
  }
}function gcgeq(ve7wyq, sqgc8, jm$6ur) {
  for (var cq8slg = ve7wyq['tagName'], baxpi = null, m6ur$ = ve7wyq['length']; m6ur$--;) {
    var r2zdj = ve7wyq[m6ur$],
        d4t3o = r2zdj['qName'],
        v1kewy = r2zdj['value'],
        wk7y = d4t3o['indexOf'](':');if (wk7y > 0x0) var _f40tp = r2zdj['prefix'] = d4t3o['slice'](0x0, wk7y),
        e1yhwk = d4t3o['slice'](wk7y + 0x1),
        z623do = 'xmlns' === _f40tp && e1yhwk;else e1yhwk = d4t3o, _f40tp = null, z623do = 'xmlns' === d4t3o && '';r2zdj['localName'] = e1yhwk, z623do !== !0x1 && (null == baxpi && (baxpi = {}, gvy1ke(jm$6ur, jm$6ur = {})), jm$6ur[z623do] = baxpi[z623do] = v1kewy, r2zdj['uri'] = 'http://www.w3.org/2000/xmlns/', sqgc8['startPrefixMapping'](z623do, v1kewy));
  }for (var m6ur$ = ve7wyq['length']; m6ur$--;) {
    r2zdj = ve7wyq[m6ur$];var _f40tp = r2zdj['prefix'];_f40tp && ('xml' === _f40tp && (r2zdj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _f40tp && (r2zdj['uri'] = jm$6ur[_f40tp || '']));
  }var wk7y = cq8slg['indexOf'](':');wk7y > 0x0 ? (_f40tp = ve7wyq['prefix'] = cq8slg['slice'](0x0, wk7y), e1yhwk = ve7wyq['localName'] = cq8slg['slice'](wk7y + 0x1)) : (_f40tp = null, e1yhwk = ve7wyq['localName'] = cq8slg);var q8cgl = ve7wyq['uri'] = jm$6ur[_f40tp || ''];if (sqgc8['startElement'](q8cgl, e1yhwk, cq8slg, ve7wyq), !ve7wyq['closed']) return ve7wyq['currentNSMap'] = jm$6ur, ve7wyq['localNSMap'] = baxpi, !0x0;if (sqgc8['endElement'](q8cgl, e1yhwk, cq8slg), baxpi) {
    for (_f40tp in baxpi) sqgc8['endPrefixMapping'](_f40tp);
  }
}function gd34z2o(_tf304, o_f3, ha1xwk, od632, x5hia) {
  if (/^(?:script|textarea)$/i['test'](ha1xwk)) {
    var _pb05f = _tf304['indexOf']('</' + ha1xwk + '>', o_f3),
        csq7 = _tf304['substring'](o_f3 + 0x1, _pb05f);if (/[&<]/['test'](csq7)) return (/^script$/i['test'](ha1xwk) ? (x5hia['characters'](csq7, 0x0, csq7['length']), _pb05f) : (csq7 = csq7['replace'](/&#?\w+;/g, od632), x5hia['characters'](csq7, 0x0, csq7['length']), _pb05f)
    );
  }return o_f3 + 0x1;
}function gcgqe(w1kxy, cveg7, yw1xh, u2jr$) {
  var gc8q7s = u2jr$[yw1xh];return null == gc8q7s && (gc8q7s = w1kxy['lastIndexOf']('</' + yw1xh + '>'), cveg7 > gc8q7s && (gc8q7s = w1kxy['lastIndexOf']('</' + yw1xh)), u2jr$[yw1xh] = gc8q7s), cveg7 > gc8q7s;
}function gvy1ke(mj6$ru, ihkxa) {
  for (var p5fb0_ in mj6$ru) ihkxa[p5fb0_] = mj6$ru[p5fb0_];
}function gx5biha(qcv7e, pia5b, y7gqv, egqv7y) {
  var eyqgv7 = qcv7e['charAt'](pia5b + 0x2);switch (eyqgv7) {case '-':
      if ('-' === qcv7e['charAt'](pia5b + 0x3)) {
        var v7qcsg = qcv7e['indexOf']('-->', pia5b + 0x4);return v7qcsg > pia5b ? (y7gqv['comment'](qcv7e, pia5b + 0x4, v7qcsg - pia5b - 0x4), v7qcsg + 0x3) : (egqv7y['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qcv7e['substr'](pia5b + 0x3, 0x6)) {
        var v7qcsg = qcv7e['indexOf'](']]>', pia5b + 0x9);return y7gqv['startCDATA'](), y7gqv['characters'](qcv7e, pia5b + 0x9, v7qcsg - pia5b - 0x9), y7gqv['endCDATA'](), v7qcsg + 0x3;
      }var r6z2jd = gykeh1(qcv7e, pia5b),
          xp5ia = r6z2jd['length'];if (xp5ia > 0x1 && /!doctype/i['test'](r6z2jd[0x0][0x0])) {
        var whka1 = r6z2jd[0x1][0x0],
            tfp_40 = xp5ia > 0x3 && /^public$/i['test'](r6z2jd[0x2][0x0]) && r6z2jd[0x3][0x0],
            j62dz = xp5ia > 0x4 && r6z2jd[0x4][0x0],
            rz$26 = r6z2jd[xp5ia - 0x1];return y7gqv['startDTD'](whka1, tfp_40 && tfp_40['replace'](/^(['"])(.*?)\1$/, '$2'), j62dz && j62dz['replace'](/^(['"])(.*?)\1$/, '$2')), y7gqv['endDTD'](), rz$26['index'] + rz$26[0x0]['length'];
      }}return -0x1;
}function gg9c(khyx, ft_o3, o62dr) {
  var wev1y = khyx['indexOf']('?>', ft_o3);if (wev1y) {
    var gec7v = khyx['substring'](ft_o3, wev1y)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (gec7v) {
      {
        gec7v[0x0]['length'];
      }return o62dr['processingInstruction'](gec7v[0x1], gec7v[0x2]), wev1y + 0x2;
    }return -0x1;
  }return -0x1;
}function gscl8gq() {}function gkhyew(jdz26, ywe7qv) {
  return jdz26['__proto__'] = ywe7qv, jdz26;
}function gykeh1(gs8ql, c9gs8) {
  var p0f_t,
      z$rj26 = [],
      b05pa = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (b05pa['lastIndex'] = c9gs8, b05pa['exec'](gs8ql); p0f_t = b05pa['exec'](gs8ql);) if (z$rj26['push'](p0f_t), p0f_t[0x1]) return z$rj26;
}var gzjr6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gq8gscl = new RegExp('[\\-\\.0-9' + gzjr6['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gf0_4p = new RegExp('^' + gzjr6['source'] + gq8gscl['source'] + '*(?::' + gzjr6['source'] + gq8gscl['source'] + '*)?$'),
    gz362o = 0x0,
    gqglc8s = 0x1,
    ggqc78s = 0x2,
    gt43f_0 = 0x3,
    gf5p_b0 = 0x4,
    gah1i5 = 0x5,
    gv7wyq = 0x6,
    gabxpi = 0x7;gbft0_['prototype'] = { 'parse': function (fp50_, abp, e7wyq) {
    var ha1ikx = this['domBuilder'];ha1ikx['startDocument'](), gvy1ke(abp, abp = {}), gb5a0p(fp50_, abp, e7wyq, ha1ikx, this['errorHandler']), ha1ikx['endDocument']();
  } }, gscl8gq['prototype'] = { 'setTagName': function (k1xyhw) {
    if (!gf0_4p['test'](k1xyhw)) throw new Error('invalid tagName:' + k1xyhw);this['tagName'] = k1xyhw;
  }, 'add': function (zd2or6, d2z36, weh) {
    if (!gf0_4p['test'](zd2or6)) throw new Error('invalid attribute:' + zd2or6);this[this['length']++] = { 'qName': zd2or6, 'value': d2z36, 'offset': weh };
  }, 'length': 0x0, 'getLocalName': function (sl9cg) {
    return this[sl9cg]['localName'];
  }, 'getLocator': function (ft4_o) {
    return this[ft4_o]['locator'];
  }, 'getQName': function (yx1whk) {
    return this[yx1whk]['qName'];
  }, 'getURI': function (ixap) {
    return this[ixap]['uri'];
  }, 'getValue': function (o3f_4) {
    return this[o3f_4]['value'];
  } }, gkhyew({}, gkhyew['prototype']) instanceof gkhyew || (gkhyew = function (hik1x, pa5bx) {
  function xabi() {}xabi['prototype'] = pa5bx, xabi = new xabi();for (pa5bx in hik1x) xabi[pa5bx] = hik1x[pa5bx];return xabi;
}), exports['XMLReader'] = gbft0_;