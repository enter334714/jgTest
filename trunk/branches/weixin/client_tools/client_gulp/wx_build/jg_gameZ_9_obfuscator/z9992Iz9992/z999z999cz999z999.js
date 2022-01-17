var H = wx.$F;
function fdm$sy() {}function fpu40lt(u0l4tp, pu6r4t, bwnie, _5vds, jvd$5s) {
  function l0xwe(putl4) {
    if (putl4 > 0xffff) {
      putl4 -= 0x10000;var iaen = 0xd800 + (putl4 >> 0xa),
          lup4 = 0xdc00 + (0x3ff & putl4);return String['fromCharCode'](iaen, lup4);
    }return String['fromCharCode'](putl4);
  }function js5m$(a_vjk) {
    var en3lw = a_vjk['slice'](0x1, -0x1);return en3lw in bwnie ? bwnie[en3lw] : '#' === en3lw['charAt'](0x0) ? l0xwe(parseInt(en3lw['substr'](0x1)['replace']('x', '0x'))) : (jvd$5s['error']('entity not found:' + a_vjk), a_vjk);
  }function _ia3kb(pr98t6) {
    if (pr98t6 > b3i) {
      var _3ik = u0l4tp['substring'](b3i, pr98t6)['replace'](/&#?\w+;/g, js5m$);inew && nwib3(b3i), _5vds['characters'](_3ik, 0x0, pr98t6 - b3i), b3i = pr98t6;
    }
  }function nwib3(kjv_s5, r8p69t) {
    for (; kjv_s5 >= yq7$g && (r8p69t = _vd5js['exec'](u0l4tp));) k_3bi = r8p69t['index'], yq7$g = k_3bi + r8p69t[0x0]['length'], inew['lineNumber']++;inew['columnNumber'] = kjv_s5 - k_3bi + 0x1;
  }for (var k_3bi = 0x0, yq7$g = 0x0, _vd5js = /.*(?:\r\n?|\n)|.*$/g, inew = _5vds['locator'], _k5vj = [{ 'currentNSMap': pu6r4t }], m$dj5s = {}, b3i = 0x0;;) {
    try {
      var lxwue = u0l4tp['indexOf']('<', b3i);if (0x0 > lxwue) {
        if (!u0l4tp['substr'](b3i)['match'](/^\s*$/)) {
          var wen3lx = _5vds['doc'],
              mgqy7 = wen3lx['createTextNode'](u0l4tp['substr'](b3i));wen3lx['appendChild'](mgqy7), _5vds['currentElement'] = mgqy7;
        }return;
      }switch (lxwue > b3i && _ia3kb(lxwue), u0l4tp['charAt'](lxwue + 0x1)) {case '/':
          var p6rt4u = u0l4tp['indexOf']('>', lxwue + 0x3),
              z9r1o8 = u0l4tp['substring'](lxwue + 0x2, p6rt4u),
              ea3ib = _k5vj['pop']();0x0 > p6rt4u ? (z9r1o8 = u0l4tp['substring'](lxwue + 0x2)['replace'](/[\s<].*/, ''), jvd$5s['error']('end tag name: ' + z9r1o8 + ' is not complete:' + ea3ib['tagName']), p6rt4u = lxwue + 0x1 + z9r1o8['length']) : z9r1o8['match'](/\s</) && (z9r1o8 = z9r1o8['replace'](/[\s<].*/, ''), jvd$5s['error']('end tag name: ' + z9r1o8 + ' maybe not complete'), p6rt4u = lxwue + 0x1 + z9r1o8['length']);var _bv5ka = ea3ib['localNSMap'],
              uxw4l = ea3ib['tagName'] == z9r1o8,
              akb5v = uxw4l || ea3ib['tagName'] && ea3ib['tagName']['toLowerCase']() == z9r1o8['toLowerCase']();if (akb5v) {
            if (_5vds['endElement'](ea3ib['uri'], ea3ib['localName'], z9r1o8), _bv5ka) {
              for (var knia3 in _bv5ka) _5vds['endPrefixMapping'](knia3);
            }uxw4l || jvd$5s['fatalError']('end tag name: ' + z9r1o8 + ' is not match the current start tagName:' + ea3ib['tagName']);
          } else _k5vj['push'](ea3ib);p6rt4u++;break;case '?':
          inew && nwib3(lxwue), p6rt4u = fr96pt(u0l4tp, lxwue, _5vds);break;case '!':
          inew && nwib3(lxwue), p6rt4u = fjs5k(u0l4tp, lxwue, _5vds, jvd$5s);break;default:
          inew && nwib3(lxwue);var rt896 = new frp869(),
              dm$yg = _k5vj[_k5vj['length'] - 0x1]['currentNSMap'],
              p6rt4u = fjs$q(u0l4tp, lxwue, rt896, dm$yg, js5m$, jvd$5s),
              d5m$sj = rt896['length'];if (!rt896['closed'] && ftu4r(u0l4tp, p6rt4u, rt896['tagName'], m$dj5s) && (rt896['closed'] = !0x0, bwnie['nbsp'] || jvd$5s['warning']('unclosed xml attribute')), inew && d5m$sj) {
            for (var dj$v5 = fs$mdjq(inew, {}), r1896z = 0x0; d5m$sj > r1896z; r1896z++) {
              var ltu4p0 = rt896[r1896z];nwib3(ltu4p0['offset']), ltu4p0['locator'] = fs$mdjq(inew, {});
            }_5vds['locator'] = dj$v5, fqmys$d(rt896, _5vds, dm$yg) && _k5vj['push'](rt896), _5vds['locator'] = inew;
          } else fqmys$d(rt896, _5vds, dm$yg) && _k5vj['push'](rt896);'http://www.w3.org/1999/xhtml' !== rt896['uri'] || rt896['closed'] ? p6rt4u++ : p6rt4u = fjs5dv$(u0l4tp, p6rt4u, rt896['tagName'], js5m$, _5vds);}
    } catch (qmys) {
      jvd$5s['error']('element parse error: ' + qmys), p6rt4u = -0x1;
    }p6rt4u > b3i ? b3i = p6rt4u : _ia3kb(Math['max'](lxwue, b3i) + 0x1);
  }
}function fs$mdjq(mj$5, ch21zo) {
  return ch21zo['lineNumber'] = mj$5['lineNumber'], ch21zo['columnNumber'] = mj$5['columnNumber'], ch21zo;
}function fjs$q(mdj$qs, nbiew, iba_, mjdq, s_jk, dv5js) {
  for (var t861, u6tr, r98tp = ++nbiew, nixwe3 = fh1zo;;) {
    var lwnex = mdj$qs['charAt'](r98tp);switch (lwnex) {case '=':
        if (nixwe3 === fvsj$5) t861 = mdj$qs['slice'](nbiew, r98tp), nixwe3 = fjs_v5k;else {
          if (nixwe3 !== fmg$dy) throw new Error('attribute equal must after attrName');nixwe3 = fjs_v5k;
        }break;case '\x27':case '\x22':
        if (nixwe3 === fjs_v5k || nixwe3 === fvsj$5) {
          if (nixwe3 === fvsj$5 && (dv5js['warning']('attribute value must after "="'), t861 = mdj$qs['slice'](nbiew, r98tp)), nbiew = r98tp + 0x1, r98tp = mdj$qs['indexOf'](lwnex, nbiew), !(r98tp > 0x0)) throw new Error('attribute value no end \'' + lwnex + '\' match');u6tr = mdj$qs['slice'](nbiew, r98tp)['replace'](/&#?\w+;/g, s_jk), iba_['add'](t861, u6tr, nbiew - 0x1), nixwe3 = fv5ak;
        } else {
          if (nixwe3 != fgqy$md) throw new Error('attribute value must after "="');u6tr = mdj$qs['slice'](nbiew, r98tp)['replace'](/&#?\w+;/g, s_jk), iba_['add'](t861, u6tr, nbiew), dv5js['warning']('attribute "' + t861 + '" missed start quot(' + lwnex + ')!!'), nbiew = r98tp + 0x1, nixwe3 = fv5ak;
        }break;case '/':
        switch (nixwe3) {case fh1zo:
            iba_['setTagName'](mdj$qs['slice'](nbiew, r98tp));case fv5ak:case fr6918t:case fdmgyq:
            nixwe3 = fdmgyq, iba_['closed'] = !0x0;case fgqy$md:case fvsj$5:case fmg$dy:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return dv5js['error']('unexpected end of input'), nixwe3 == fh1zo && iba_['setTagName'](mdj$qs['slice'](nbiew, r98tp)), r98tp;case '>':
        switch (nixwe3) {case fh1zo:
            iba_['setTagName'](mdj$qs['slice'](nbiew, r98tp));case fv5ak:case fr6918t:case fdmgyq:
            break;case fgqy$md:case fvsj$5:
            u6tr = mdj$qs['slice'](nbiew, r98tp), '/' === u6tr['slice'](-0x1) && (iba_['closed'] = !0x0, u6tr = u6tr['slice'](0x0, -0x1));case fmg$dy:
            nixwe3 === fmg$dy && (u6tr = t861), nixwe3 == fgqy$md ? (dv5js['warning']('attribute "' + u6tr + '" missed quot(")!!'), iba_['add'](t861, u6tr['replace'](/&#?\w+;/g, s_jk), nbiew)) : ('http://www.w3.org/1999/xhtml' === mjdq[''] && u6tr['match'](/^(?:disabled|checked|selected)$/i) || dv5js['warning']('attribute "' + u6tr + '" missed value!! "' + u6tr + '" instead!!'), iba_['add'](u6tr, u6tr, nbiew));break;case fjs_v5k:
            throw new Error('attribute value missed!!');}return r98tp;case '\u0080':
        lwnex = '\x20';default:
        if ('\x20' >= lwnex) switch (nixwe3) {case fh1zo:
            iba_['setTagName'](mdj$qs['slice'](nbiew, r98tp)), nixwe3 = fr6918t;break;case fvsj$5:
            t861 = mdj$qs['slice'](nbiew, r98tp), nixwe3 = fmg$dy;break;case fgqy$md:
            var u6tr = mdj$qs['slice'](nbiew, r98tp)['replace'](/&#?\w+;/g, s_jk);dv5js['warning']('attribute "' + u6tr + '" missed quot(")!!'), iba_['add'](t861, u6tr, nbiew);case fv5ak:
            nixwe3 = fr6918t;} else switch (nixwe3) {case fmg$dy:
            {
              iba_['tagName'];
            }'http://www.w3.org/1999/xhtml' === mjdq[''] && t861['match'](/^(?:disabled|checked|selected)$/i) || dv5js['warning']('attribute "' + t861 + '" missed value!! "' + t861 + '" instead2!!'), iba_['add'](t861, t861, nbiew), nbiew = r98tp, nixwe3 = fvsj$5;break;case fv5ak:
            dv5js['warning']('attribute space is required"' + t861 + '\x22!!');case fr6918t:
            nixwe3 = fvsj$5, nbiew = r98tp;break;case fjs_v5k:
            nixwe3 = fgqy$md, nbiew = r98tp;break;case fdmgyq:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}r98tp++;
  }
}function fqmys$d(ibnae, tp4ul, q$dysm) {
  for (var xw3ei = ibnae['tagName'], j5a_kv = null, n3aeib = ibnae['length']; n3aeib--;) {
    var wnl3ex = ibnae[n3aeib],
        p6utr4 = wnl3ex['qName'],
        r4p6 = wnl3ex['value'],
        $symd = p6utr4['indexOf'](':');if ($symd > 0x0) var mdsj$q = wnl3ex['prefix'] = p6utr4['slice'](0x0, $symd),
        wbin = p6utr4['slice']($symd + 0x1),
        o91zc8 = 'xmlns' === mdsj$q && wbin;else wbin = p6utr4, mdsj$q = null, o91zc8 = 'xmlns' === p6utr4 && '';wnl3ex['localName'] = wbin, o91zc8 !== !0x1 && (null == j5a_kv && (j5a_kv = {}, fdg$qy(q$dysm, q$dysm = {})), q$dysm[o91zc8] = j5a_kv[o91zc8] = r4p6, wnl3ex['uri'] = 'http://www.w3.org/2000/xmlns/', tp4ul['startPrefixMapping'](o91zc8, r4p6));
  }for (var n3aeib = ibnae['length']; n3aeib--;) {
    wnl3ex = ibnae[n3aeib];var mdsj$q = wnl3ex['prefix'];mdsj$q && ('xml' === mdsj$q && (wnl3ex['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mdsj$q && (wnl3ex['uri'] = q$dysm[mdsj$q || '']));
  }var $symd = xw3ei['indexOf'](':');$symd > 0x0 ? (mdsj$q = ibnae['prefix'] = xw3ei['slice'](0x0, $symd), wbin = ibnae['localName'] = xw3ei['slice']($symd + 0x1)) : (mdsj$q = null, wbin = ibnae['localName'] = xw3ei);var gm7y = ibnae['uri'] = q$dysm[mdsj$q || ''];if (tp4ul['startElement'](gm7y, wbin, xw3ei, ibnae), !ibnae['closed']) return ibnae['currentNSMap'] = q$dysm, ibnae['localNSMap'] = j5a_kv, !0x0;if (tp4ul['endElement'](gm7y, wbin, xw3ei), j5a_kv) {
    for (mdsj$q in j5a_kv) tp4ul['endPrefixMapping'](mdsj$q);
  }
}function fjs5dv$(ydms, oczh1, nexw3l, k3iban, ygmqd) {
  if (/^(?:script|textarea)$/i['test'](nexw3l)) {
    var jsqmd = ydms['indexOf']('</' + nexw3l + '>', oczh1),
        msqdy$ = ydms['substring'](oczh1 + 0x1, jsqmd);if (/[&<]/['test'](msqdy$)) return (/^script$/i['test'](nexw3l) ? (ygmqd['characters'](msqdy$, 0x0, msqdy$['length']), jsqmd) : (msqdy$ = msqdy$['replace'](/&#?\w+;/g, k3iban), ygmqd['characters'](msqdy$, 0x0, msqdy$['length']), jsqmd)
    );
  }return oczh1 + 0x1;
}function ftu4r(kva_i, _5kj, p46tr, ie3nbw) {
  var g$7ymq = ie3nbw[p46tr];return null == g$7ymq && (g$7ymq = kva_i['lastIndexOf']('</' + p46tr + '>'), _5kj > g$7ymq && (g$7ymq = kva_i['lastIndexOf']('</' + p46tr)), ie3nbw[p46tr] = g$7ymq), _5kj > g$7ymq;
}function fdg$qy(jsqmd$, $jdqm) {
  for (var urp4t in jsqmd$) $jdqm[urp4t] = jsqmd$[urp4t];
}function fjs5k(a3ikbn, z9r861, vj5d, nexw3) {
  var svj = a3ikbn['charAt'](z9r861 + 0x2);switch (svj) {case '-':
      if ('-' === a3ikbn['charAt'](z9r861 + 0x3)) {
        var $ymdg = a3ikbn['indexOf']('-->', z9r861 + 0x4);return $ymdg > z9r861 ? (vj5d['comment'](a3ikbn, z9r861 + 0x4, $ymdg - z9r861 - 0x4), $ymdg + 0x3) : (nexw3['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == a3ikbn['substr'](z9r861 + 0x3, 0x6)) {
        var $ymdg = a3ikbn['indexOf'](']]>', z9r861 + 0x9);return vj5d['startCDATA'](), vj5d['characters'](a3ikbn, z9r861 + 0x9, $ymdg - z9r861 - 0x9), vj5d['endCDATA'](), $ymdg + 0x3;
      }var wux04 = ftp4r69(a3ikbn, z9r861),
          u0w4lx = wux04['length'];if (u0w4lx > 0x1 && /!doctype/i['test'](wux04[0x0][0x0])) {
        var iaeb = wux04[0x1][0x0],
            n0el = u0w4lx > 0x3 && /^public$/i['test'](wux04[0x2][0x0]) && wux04[0x3][0x0],
            vbak_5 = u0w4lx > 0x4 && wux04[0x4][0x0],
            j5svd_ = wux04[u0w4lx - 0x1];return vj5d['startDTD'](iaeb, n0el && n0el['replace'](/^(['"])(.*?)\1$/, '$2'), vbak_5 && vbak_5['replace'](/^(['"])(.*?)\1$/, '$2')), vj5d['endDTD'](), j5svd_['index'] + j5svd_[0x0]['length'];
      }}return -0x1;
}function fr96pt(qsymd, c1z2oh, d$qjms) {
  var d_5jv = qsymd['indexOf']('?>', c1z2oh);if (d_5jv) {
    var r69t = qsymd['substring'](c1z2oh, d_5jv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r69t) {
      {
        r69t[0x0]['length'];
      }return d$qjms['processingInstruction'](r69t[0x1], r69t[0x2]), d_5jv + 0x2;
    }return -0x1;
  }return -0x1;
}function frp869() {}function fsq$dy(ulxp, ux0pl4) {
  return ulxp['__proto__'] = ux0pl4, ulxp;
}function ftp4r69(xul0p4, gq$7m) {
  var js5vd_,
      $mdqg = [],
      tp04 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (tp04['lastIndex'] = gq$7m, tp04['exec'](xul0p4); js5vd_ = tp04['exec'](xul0p4);) if ($mdqg['push'](js5vd_), js5vd_[0x1]) return $mdqg;
}var fu0lw4x = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    frt4p96 = new RegExp('[\\-\\.0-9' + fu0lw4x['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fbvkai_ = new RegExp('^' + fu0lw4x['source'] + frt4p96['source'] + '*(?::' + fu0lw4x['source'] + frt4p96['source'] + '*)?$'),
    fh1zo = 0x0,
    fvsj$5 = 0x1,
    fmg$dy = 0x2,
    fjs_v5k = 0x3,
    fgqy$md = 0x4,
    fv5ak = 0x5,
    fr6918t = 0x6,
    fdmgyq = 0x7;fdm$sy['prototype'] = { 'parse': function (v5sd$, ni3bae, x0lu4w) {
    var q$ymdg = this['domBuilder'];q$ymdg['startDocument'](), fdg$qy(ni3bae, ni3bae = {}), fpu40lt(v5sd$, ni3bae, x0lu4w, q$ymdg, this['errorHandler']), q$ymdg['endDocument']();
  } }, frp869['prototype'] = { 'setTagName': function (oz2ch) {
    if (!fbvkai_['test'](oz2ch)) throw new Error('invalid tagName:' + oz2ch);this['tagName'] = oz2ch;
  }, 'add': function (v5_a, xen3wi, vk5s_j) {
    if (!fbvkai_['test'](v5_a)) throw new Error('invalid attribute:' + v5_a);this[this['length']++] = { 'qName': v5_a, 'value': xen3wi, 'offset': vk5s_j };
  }, 'length': 0x0, 'getLocalName': function (lue0) {
    return this[lue0]['localName'];
  }, 'getLocator': function (r8pt9) {
    return this[r8pt9]['locator'];
  }, 'getQName': function (d$mjqs) {
    return this[d$mjqs]['qName'];
  }, 'getURI': function (ewn3bi) {
    return this[ewn3bi]['uri'];
  }, 'getValue': function (_avkb5) {
    return this[_avkb5]['value'];
  } }, fsq$dy({}, fsq$dy['prototype']) instanceof fsq$dy || (fsq$dy = function (x4lw0u, t6rp98) {
  function r9p6() {}r9p6['prototype'] = t6rp98, r9p6 = new r9p6();for (t6rp98 in x4lw0u) r9p6[t6rp98] = x4lw0u[t6rp98];return r9p6;
}), exports['XMLReader'] = fdm$sy;