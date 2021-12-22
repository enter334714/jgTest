var B = wx.$B;
function Bw8arf3() {}function Benp(e3aw, bkz496, n6u7sh, p2giea, td_$) {
  function pe2(v$xt0y) {
    if (v$xt0y > 0xffff) {
      v$xt0y -= 0x10000;var ng7hu = 0xd800 + (v$xt0y >> 0xa),
          ei2apg = 0xdc00 + (0x3ff & v$xt0y);return String['fromCharCode'](ng7hu, ei2apg);
    }return String['fromCharCode'](v$xt0y);
  }function j5fm1(_t$qx) {
    var yt$_0 = _t$qx['slice'](0x1, -0x1);return yt$_0 in n6u7sh ? n6u7sh[yt$_0] : '#' === yt$_0['charAt'](0x0) ? pe2(parseInt(yt$_0['substr'](0x1)['replace']('x', '0x'))) : (td_$['error']('entity not found:' + _t$qx), _t$qx);
  }function raf8(upsng7) {
    if (upsng7 > ia832) {
      var awipe = e3aw['substring'](ia832, upsng7)['replace'](/&#?\w+;/g, j5fm1);iep2 && s9h6n(ia832), p2giea['characters'](awipe, 0x0, upsng7 - ia832), ia832 = upsng7;
    }
  }function s9h6n(l$vt, yv04lz) {
    for (; l$vt >= h6n7u && (yv04lz = i2aw3e['exec'](e3aw));) npsug7 = yv04lz['index'], h6n7u = npsug7 + yv04lz[0x0]['length'], iep2['lineNumber']++;iep2['columnNumber'] = l$vt - npsug7 + 0x1;
  }for (var npsug7 = 0x0, h6n7u = 0x0, i2aw3e = /.*(?:\r\n?|\n)|.*$/g, iep2 = p2giea['locator'], _ty0$ = [{ 'currentNSMap': bkz496 }], l4kzvb = {}, ia832 = 0x0;;) {
    try {
      var ie2w = e3aw['indexOf']('<', ia832);if (0x0 > ie2w) {
        if (!e3aw['substr'](ia832)['match'](/^\s*$/)) {
          var sneug = p2giea['doc'],
              unsgp = sneug['createTextNode'](e3aw['substr'](ia832));sneug['appendChild'](unsgp), p2giea['currentElement'] = unsgp;
        }return;
      }switch (ie2w > ia832 && raf8(ie2w), e3aw['charAt'](ie2w + 0x1)) {case '/':
          var f15rm = e3aw['indexOf']('>', ie2w + 0x3),
              q_$txd = e3aw['substring'](ie2w + 0x2, f15rm),
              fw3ra8 = _ty0$['pop']();0x0 > f15rm ? (q_$txd = e3aw['substring'](ie2w + 0x2)['replace'](/[\s<].*/, ''), td_$['error']('end tag name: ' + q_$txd + ' is not complete:' + fw3ra8['tagName']), f15rm = ie2w + 0x1 + q_$txd['length']) : q_$txd['match'](/\s</) && (q_$txd = q_$txd['replace'](/[\s<].*/, ''), td_$['error']('end tag name: ' + q_$txd + ' maybe not complete'), f15rm = ie2w + 0x1 + q_$txd['length']);var giune = fw3ra8['localNSMap'],
              ae2pg = fw3ra8['tagName'] == q_$txd,
              u6n7h = ae2pg || fw3ra8['tagName'] && fw3ra8['tagName']['toLowerCase']() == q_$txd['toLowerCase']();if (u6n7h) {
            if (p2giea['endElement'](fw3ra8['uri'], fw3ra8['localName'], q_$txd), giune) {
              for (var pgus7 in giune) p2giea['endPrefixMapping'](pgus7);
            }ae2pg || td_$['fatalError']('end tag name: ' + q_$txd + ' is not match the current start tagName:' + fw3ra8['tagName']);
          } else _ty0$['push'](fw3ra8);f15rm++;break;case '?':
          iep2 && s9h6n(ie2w), f15rm = Bsh6u7(e3aw, ie2w, p2giea);break;case '!':
          iep2 && s9h6n(ie2w), f15rm = Bkzbl9(e3aw, ie2w, p2giea, td_$);break;default:
          iep2 && s9h6n(ie2w);var hb7k = new Bbvlz(),
              zh6b = _ty0$[_ty0$['length'] - 0x1]['currentNSMap'],
              f15rm = Bwfar8(e3aw, ie2w, hb7k, zh6b, j5fm1, td_$),
              jr38f5 = hb7k['length'];if (!hb7k['closed'] && Bpa2eig(e3aw, f15rm, hb7k['tagName'], l4kzvb) && (hb7k['closed'] = !0x0, n6u7sh['nbsp'] || td_$['warning']('unclosed xml attribute')), iep2 && jr38f5) {
            for (var bh96zk = Bupgsen(iep2, {}), h79s = 0x0; jr38f5 > h79s; h79s++) {
              var y0vt$ = hb7k[h79s];s9h6n(y0vt$['offset']), y0vt$['locator'] = Bupgsen(iep2, {});
            }p2giea['locator'] = bh96zk, Bwi2ape(hb7k, p2giea, zh6b) && _ty0$['push'](hb7k), p2giea['locator'] = iep2;
          } else Bwi2ape(hb7k, p2giea, zh6b) && _ty0$['push'](hb7k);'http://www.w3.org/1999/xhtml' !== hb7k['uri'] || hb7k['closed'] ? f15rm++ : f15rm = Bipge(e3aw, f15rm, hb7k['tagName'], j5fm1, p2giea);}
    } catch (a2iew3) {
      td_$['error']('element parse error: ' + a2iew3), f15rm = -0x1;
    }f15rm > ia832 ? ia832 = f15rm : raf8(Math['max'](ie2w, ia832) + 0x1);
  }
}function Bupgsen(yt0vx, wpai) {
  return wpai['lineNumber'] = yt0vx['lineNumber'], wpai['columnNumber'] = yt0vx['columnNumber'], wpai;
}function Bwfar8(lzbk4v, zblk, a3iw2e, lz0vy, z4l9b, h6z) {
  for (var f5rj1, b94kz, y0$v4l = ++zblk, v4bzy = Byz4vbl;;) {
    var b4z6 = lzbk4v['charAt'](y0$v4l);switch (b4z6) {case '=':
        if (v4bzy === Bkl4z9) f5rj1 = lzbk4v['slice'](zblk, y0$v4l), v4bzy = Bzbv4k;else {
          if (v4bzy !== Bvybzl) throw new Error('attribute equal must after attrName');v4bzy = Bzbv4k;
        }break;case '\x27':case '\x22':
        if (v4bzy === Bzbv4k || v4bzy === Bkl4z9) {
          if (v4bzy === Bkl4z9 && (h6z['warning']('attribute value must after "="'), f5rj1 = lzbk4v['slice'](zblk, y0$v4l)), zblk = y0$v4l + 0x1, y0$v4l = lzbk4v['indexOf'](b4z6, zblk), !(y0$v4l > 0x0)) throw new Error('attribute value no end \'' + b4z6 + '\' match');b94kz = lzbk4v['slice'](zblk, y0$v4l)['replace'](/&#?\w+;/g, z4l9b), a3iw2e['add'](f5rj1, b94kz, zblk - 0x1), v4bzy = Bs769n;
        } else {
          if (v4bzy != Bnusgep) throw new Error('attribute value must after "="');b94kz = lzbk4v['slice'](zblk, y0$v4l)['replace'](/&#?\w+;/g, z4l9b), a3iw2e['add'](f5rj1, b94kz, zblk), h6z['warning']('attribute "' + f5rj1 + '" missed start quot(' + b4z6 + ')!!'), zblk = y0$v4l + 0x1, v4bzy = Bs769n;
        }break;case '/':
        switch (v4bzy) {case Byz4vbl:
            a3iw2e['setTagName'](lzbk4v['slice'](zblk, y0$v4l));case Bs769n:case Bpiawe:case Bapeig2:
            v4bzy = Bapeig2, a3iw2e['closed'] = !0x0;case Bnusgep:case Bkl4z9:case Bvybzl:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return h6z['error']('unexpected end of input'), v4bzy == Byz4vbl && a3iw2e['setTagName'](lzbk4v['slice'](zblk, y0$v4l)), y0$v4l;case '>':
        switch (v4bzy) {case Byz4vbl:
            a3iw2e['setTagName'](lzbk4v['slice'](zblk, y0$v4l));case Bs769n:case Bpiawe:case Bapeig2:
            break;case Bnusgep:case Bkl4z9:
            b94kz = lzbk4v['slice'](zblk, y0$v4l), '/' === b94kz['slice'](-0x1) && (a3iw2e['closed'] = !0x0, b94kz = b94kz['slice'](0x0, -0x1));case Bvybzl:
            v4bzy === Bvybzl && (b94kz = f5rj1), v4bzy == Bnusgep ? (h6z['warning']('attribute "' + b94kz + '" missed quot(")!!'), a3iw2e['add'](f5rj1, b94kz['replace'](/&#?\w+;/g, z4l9b), zblk)) : ('http://www.w3.org/1999/xhtml' === lz0vy[''] && b94kz['match'](/^(?:disabled|checked|selected)$/i) || h6z['warning']('attribute "' + b94kz + '" missed value!! "' + b94kz + '" instead!!'), a3iw2e['add'](b94kz, b94kz, zblk));break;case Bzbv4k:
            throw new Error('attribute value missed!!');}return y0$v4l;case '\u0080':
        b4z6 = '\x20';default:
        if ('\x20' >= b4z6) switch (v4bzy) {case Byz4vbl:
            a3iw2e['setTagName'](lzbk4v['slice'](zblk, y0$v4l)), v4bzy = Bpiawe;break;case Bkl4z9:
            f5rj1 = lzbk4v['slice'](zblk, y0$v4l), v4bzy = Bvybzl;break;case Bnusgep:
            var b94kz = lzbk4v['slice'](zblk, y0$v4l)['replace'](/&#?\w+;/g, z4l9b);h6z['warning']('attribute "' + b94kz + '" missed quot(")!!'), a3iw2e['add'](f5rj1, b94kz, zblk);case Bs769n:
            v4bzy = Bpiawe;} else switch (v4bzy) {case Bvybzl:
            {
              a3iw2e['tagName'];
            }'http://www.w3.org/1999/xhtml' === lz0vy[''] && f5rj1['match'](/^(?:disabled|checked|selected)$/i) || h6z['warning']('attribute "' + f5rj1 + '" missed value!! "' + f5rj1 + '" instead2!!'), a3iw2e['add'](f5rj1, f5rj1, zblk), zblk = y0$v4l, v4bzy = Bkl4z9;break;case Bs769n:
            h6z['warning']('attribute space is required"' + f5rj1 + '\x22!!');case Bpiawe:
            v4bzy = Bkl4z9, zblk = y0$v4l;break;case Bzbv4k:
            v4bzy = Bnusgep, zblk = y0$v4l;break;case Bapeig2:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}y0$v4l++;
  }
}function Bwi2ape(m1jor5, o5mj, y$lvt0) {
  for (var uspegn = m1jor5['tagName'], iguep2 = null, _dq$t = m1jor5['length']; _dq$t--;) {
    var eiaw2 = m1jor5[_dq$t],
        h7nu = eiaw2['qName'],
        ga2pei = eiaw2['value'],
        yltv = h7nu['indexOf'](':');if (yltv > 0x0) var ngesp = eiaw2['prefix'] = h7nu['slice'](0x0, yltv),
        r3w8af = h7nu['slice'](yltv + 0x1),
        lkv4bz = 'xmlns' === ngesp && r3w8af;else r3w8af = h7nu, ngesp = null, lkv4bz = 'xmlns' === h7nu && '';eiaw2['localName'] = r3w8af, lkv4bz !== !0x1 && (null == iguep2 && (iguep2 = {}, Bx$yv0(y$lvt0, y$lvt0 = {})), y$lvt0[lkv4bz] = iguep2[lkv4bz] = ga2pei, eiaw2['uri'] = 'http://www.w3.org/2000/xmlns/', o5mj['startPrefixMapping'](lkv4bz, ga2pei));
  }for (var _dq$t = m1jor5['length']; _dq$t--;) {
    eiaw2 = m1jor5[_dq$t];var ngesp = eiaw2['prefix'];ngesp && ('xml' === ngesp && (eiaw2['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ngesp && (eiaw2['uri'] = y$lvt0[ngesp || '']));
  }var yltv = uspegn['indexOf'](':');yltv > 0x0 ? (ngesp = m1jor5['prefix'] = uspegn['slice'](0x0, yltv), r3w8af = m1jor5['localName'] = uspegn['slice'](yltv + 0x1)) : (ngesp = null, r3w8af = m1jor5['localName'] = uspegn);var vl$y4 = m1jor5['uri'] = y$lvt0[ngesp || ''];if (o5mj['startElement'](vl$y4, r3w8af, uspegn, m1jor5), !m1jor5['closed']) return m1jor5['currentNSMap'] = y$lvt0, m1jor5['localNSMap'] = iguep2, !0x0;if (o5mj['endElement'](vl$y4, r3w8af, uspegn), iguep2) {
    for (ngesp in iguep2) o5mj['endPrefixMapping'](ngesp);
  }
}function Bipge(vlt0$y, ns6h97, z0vy, lb49kz, xytv$0) {
  if (/^(?:script|textarea)$/i['test'](z0vy)) {
    var zlv4yb = vlt0$y['indexOf']('</' + z0vy + '>', ns6h97),
        fr8wa3 = vlt0$y['substring'](ns6h97 + 0x1, zlv4yb);if (/[&<]/['test'](fr8wa3)) return (/^script$/i['test'](z0vy) ? (xytv$0['characters'](fr8wa3, 0x0, fr8wa3['length']), zlv4yb) : (fr8wa3 = fr8wa3['replace'](/&#?\w+;/g, lb49kz), xytv$0['characters'](fr8wa3, 0x0, fr8wa3['length']), zlv4yb)
    );
  }return ns6h97 + 0x1;
}function Bpa2eig(q$xt_d, n76su, frj15m, x$0ty_) {
  var gpuei = x$0ty_[frj15m];return null == gpuei && (gpuei = q$xt_d['lastIndexOf']('</' + frj15m + '>'), n76su > gpuei && (gpuei = q$xt_d['lastIndexOf']('</' + frj15m)), x$0ty_[frj15m] = gpuei), n76su > gpuei;
}function Bx$yv0(v$yt0, eupngi) {
  for (var iupn in v$yt0) eupngi[iupn] = v$yt0[iupn];
}function Bkzbl9(kz4vb, $tdx0, x_0td$, s7uh) {
  var hks97 = kz4vb['charAt']($tdx0 + 0x2);switch (hks97) {case '-':
      if ('-' === kz4vb['charAt']($tdx0 + 0x3)) {
        var f3wr = kz4vb['indexOf']('-->', $tdx0 + 0x4);return f3wr > $tdx0 ? (x_0td$['comment'](kz4vb, $tdx0 + 0x4, f3wr - $tdx0 - 0x4), f3wr + 0x3) : (s7uh['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kz4vb['substr']($tdx0 + 0x3, 0x6)) {
        var f3wr = kz4vb['indexOf'](']]>', $tdx0 + 0x9);return x_0td$['startCDATA'](), x_0td$['characters'](kz4vb, $tdx0 + 0x9, f3wr - $tdx0 - 0x9), x_0td$['endCDATA'](), f3wr + 0x3;
      }var enpig = Bpi2eaw(kz4vb, $tdx0),
          b6k7h = enpig['length'];if (b6k7h > 0x1 && /!doctype/i['test'](enpig[0x0][0x0])) {
        var igeupn = enpig[0x1][0x0],
            _x$tdq = b6k7h > 0x3 && /^public$/i['test'](enpig[0x2][0x0]) && enpig[0x3][0x0],
            hkbz = b6k7h > 0x4 && enpig[0x4][0x0],
            tx$_d = enpig[b6k7h - 0x1];return x_0td$['startDTD'](igeupn, _x$tdq && _x$tdq['replace'](/^(['"])(.*?)\1$/, '$2'), hkbz && hkbz['replace'](/^(['"])(.*?)\1$/, '$2')), x_0td$['endDTD'](), tx$_d['index'] + tx$_d[0x0]['length'];
      }}return -0x1;
}function Bsh6u7(a2ieg, i28a3, vklzb4) {
  var pugnei = a2ieg['indexOf']('?>', i28a3);if (pugnei) {
    var o5r = a2ieg['substring'](i28a3, pugnei)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (o5r) {
      {
        o5r[0x0]['length'];
      }return vklzb4['processingInstruction'](o5r[0x1], o5r[0x2]), pugnei + 0x2;
    }return -0x1;
  }return -0x1;
}function Bbvlz() {}function Bor1(pu7sng, gpui) {
  return pu7sng['__proto__'] = gpui, pu7sng;
}function Bpi2eaw(ia238w, pigenu) {
  var _0x$yt,
      xt0$ = [],
      yzvl0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (yzvl0['lastIndex'] = pigenu, yzvl0['exec'](ia238w); _0x$yt = yzvl0['exec'](ia238w);) if (xt0$['push'](_0x$yt), _0x$yt[0x1]) return xt0$;
}var Bj5f8r3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Bsghu7n = new RegExp('[\\-\\.0-9' + Bj5f8r3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Bq$dx_t = new RegExp('^' + Bj5f8r3['source'] + Bsghu7n['source'] + '*(?::' + Bj5f8r3['source'] + Bsghu7n['source'] + '*)?$'),
    Byz4vbl = 0x0,
    Bkl4z9 = 0x1,
    Bvybzl = 0x2,
    Bzbv4k = 0x3,
    Bnusgep = 0x4,
    Bs769n = 0x5,
    Bpiawe = 0x6,
    Bapeig2 = 0x7;Bw8arf3['prototype'] = { 'parse': function (tdqx, p2geai, piu) {
    var inp = this['domBuilder'];inp['startDocument'](), Bx$yv0(p2geai, p2geai = {}), Benp(tdqx, p2geai, piu, inp, this['errorHandler']), inp['endDocument']();
  } }, Bbvlz['prototype'] = { 'setTagName': function (sneugp) {
    if (!Bq$dx_t['test'](sneugp)) throw new Error('invalid tagName:' + sneugp);this['tagName'] = sneugp;
  }, 'add': function (xt0d$, q_dx$t, lz0yv) {
    if (!Bq$dx_t['test'](xt0d$)) throw new Error('invalid attribute:' + xt0d$);this[this['length']++] = { 'qName': xt0d$, 'value': q_dx$t, 'offset': lz0yv };
  }, 'length': 0x0, 'getLocalName': function (geu) {
    return this[geu]['localName'];
  }, 'getLocator': function (k4lzvb) {
    return this[k4lzvb]['locator'];
  }, 'getQName': function (bl4z) {
    return this[bl4z]['qName'];
  }, 'getURI': function (t_qxd) {
    return this[t_qxd]['uri'];
  }, 'getValue': function (zh69bk) {
    return this[zh69bk]['value'];
  } }, Bor1({}, Bor1['prototype']) instanceof Bor1 || (Bor1 = function (s97h6, xq$dt_) {
  function aiw2e() {}aiw2e['prototype'] = xq$dt_, aiw2e = new aiw2e();for (xq$dt_ in s97h6) aiw2e[xq$dt_] = s97h6[xq$dt_];return aiw2e;
}), exports['XMLReader'] = Bw8arf3;