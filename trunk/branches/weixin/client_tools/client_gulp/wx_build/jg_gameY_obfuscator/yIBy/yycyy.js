var a = wx.$y;
function yey0zrx() {}function yv30zr(r6v0, v63ya0, _7c8s, wud4t1, m61a5u) {
  function _s78l(hdw4jt) {
    if (hdw4jt > 0xffff) {
      hdw4jt -= 0x10000;var gk$ni = 0xd800 + (hdw4jt >> 0xa),
          g$pnqi = 0xdc00 + (0x3ff & hdw4jt);return String['fromCharCode'](gk$ni, g$pnqi);
    }return String['fromCharCode'](hdw4jt);
  }function yexz0(u1mdt) {
    var ry3v0 = u1mdt['slice'](0x1, -0x1);return ry3v0 in _7c8s ? _7c8s[ry3v0] : '#' === ry3v0['charAt'](0x0) ? _s78l(parseInt(ry3v0['substr'](0x1)['replace']('x', '0x'))) : (m61a5u['error']('entity not found:' + u1mdt), u1mdt);
  }function z0ryex(c_l) {
    if (c_l > vy36) {
      var v6y0 = r6v0['substring'](vy36, c_l)['replace'](/&#?\w+;/g, yexz0);l8s7_c && rxzy(vy36), wud4t1['characters'](v6y0, 0x0, c_l - vy36), vy36 = c_l;
    }
  }function rxzy(zxe, l_7fs8) {
    for (; zxe >= uw1t4 && (l_7fs8 = kg$29n['exec'](r6v0));) u4td = l_7fs8['index'], uw1t4 = u4td + l_7fs8[0x0]['length'], l8s7_c['lineNumber']++;l8s7_c['columnNumber'] = zxe - u4td + 0x1;
  }for (var u4td = 0x0, uw1t4 = 0x0, kg$29n = /.*(?:\r\n?|\n)|.*$/g, l8s7_c = wud4t1['locator'], wmu1t = [{ 'currentNSMap': v63ya0 }], j_hf4 = {}, vy36 = 0x0;;) {
    try {
      var xvyz = r6v0['indexOf']('<', vy36);if (0x0 > xvyz) {
        if (!r6v0['substr'](vy36)['match'](/^\s*$/)) {
          var x0vr = wud4t1['doc'],
              k9cls2 = x0vr['createTextNode'](r6v0['substr'](vy36));x0vr['appendChild'](k9cls2), wud4t1['currentElement'] = k9cls2;
        }return;
      }switch (xvyz > vy36 && z0ryex(xvyz), r6v0['charAt'](xvyz + 0x1)) {case '/':
          var zyx0r = r6v0['indexOf']('>', xvyz + 0x3),
              v36r = r6v0['substring'](xvyz + 0x2, zyx0r),
              cls79 = wmu1t['pop']();0x0 > zyx0r ? (v36r = r6v0['substring'](xvyz + 0x2)['replace'](/[\s<].*/, ''), m61a5u['error']('end tag name: ' + v36r + ' is not complete:' + cls79['tagName']), zyx0r = xvyz + 0x1 + v36r['length']) : v36r['match'](/\s</) && (v36r = v36r['replace'](/[\s<].*/, ''), m61a5u['error']('end tag name: ' + v36r + ' maybe not complete'), zyx0r = xvyz + 0x1 + v36r['length']);var d15um = cls79['localNSMap'],
              rv63y = cls79['tagName'] == v36r,
              v6ry03 = rv63y || cls79['tagName'] && cls79['tagName']['toLowerCase']() == v36r['toLowerCase']();if (v6ry03) {
            if (wud4t1['endElement'](cls79['uri'], cls79['localName'], v36r), d15um) {
              for (var yrxz0e in d15um) wud4t1['endPrefixMapping'](yrxz0e);
            }rv63y || m61a5u['fatalError']('end tag name: ' + v36r + ' is not match the current start tagName:' + cls79['tagName']);
          } else wmu1t['push'](cls79);zyx0r++;break;case '?':
          l8s7_c && rxzy(xvyz), zyx0r = ya6um15(r6v0, xvyz, wud4t1);break;case '!':
          l8s7_c && rxzy(xvyz), zyx0r = ya653yv(r6v0, xvyz, wud4t1, m61a5u);break;default:
          l8s7_c && rxzy(xvyz);var f7_joh = new yk2gi(),
              $c29n = wmu1t[wmu1t['length'] - 0x1]['currentNSMap'],
              zyx0r = yo_fl87(r6v0, xvyz, f7_joh, $c29n, yexz0, m61a5u),
              ot4jw = f7_joh['length'];if (!f7_joh['closed'] && yu1(r6v0, zyx0r, f7_joh['tagName'], j_hf4) && (f7_joh['closed'] = !0x0, _7c8s['nbsp'] || m61a5u['warning']('unclosed xml attribute')), l8s7_c && ot4jw) {
            for (var uamd5 = ydjth(l8s7_c, {}), kl2s9 = 0x0; ot4jw > kl2s9; kl2s9++) {
              var qn2gi = f7_joh[kl2s9];rxzy(qn2gi['offset']), qn2gi['locator'] = ydjth(l8s7_c, {});
            }wud4t1['locator'] = uamd5, ywo4jth(f7_joh, wud4t1, $c29n) && wmu1t['push'](f7_joh), wud4t1['locator'] = l8s7_c;
          } else ywo4jth(f7_joh, wud4t1, $c29n) && wmu1t['push'](f7_joh);'http://www.w3.org/1999/xhtml' !== f7_joh['uri'] || f7_joh['closed'] ? zyx0r++ : zyx0r = ya3v6y(r6v0, zyx0r, f7_joh['tagName'], yexz0, wud4t1);}
    } catch (lf_s8) {
      m61a5u['error']('element parse error: ' + lf_s8), zyx0r = -0x1;
    }zyx0r > vy36 ? vy36 = zyx0r : z0ryex(Math['max'](xvyz, vy36) + 0x1);
  }
}function ydjth(mu35, sl9) {
  return sl9['lineNumber'] = mu35['lineNumber'], sl9['columnNumber'] = mu35['columnNumber'], sl9;
}function yo_fl87(a53yv, fhjo4w, m51adu, ig2$k, ofh4wj, ls98c7) {
  for (var jfo7_h, clk29, o_4 = ++fhjo4w, n92gk = yh_f7;;) {
    var l87f_o = a53yv['charAt'](o_4);switch (l87f_o) {case '=':
        if (n92gk === yaum63) jfo7_h = a53yv['slice'](fhjo4w, o_4), n92gk = yohfwj;else {
          if (n92gk !== ycs978l) throw new Error('attribute equal must after attrName');n92gk = yohfwj;
        }break;case '\x27':case '\x22':
        if (n92gk === yohfwj || n92gk === yaum63) {
          if (n92gk === yaum63 && (ls98c7['warning']('attribute value must after "="'), jfo7_h = a53yv['slice'](fhjo4w, o_4)), fhjo4w = o_4 + 0x1, o_4 = a53yv['indexOf'](l87f_o, fhjo4w), !(o_4 > 0x0)) throw new Error('attribute value no end \'' + l87f_o + '\' match');clk29 = a53yv['slice'](fhjo4w, o_4)['replace'](/&#?\w+;/g, ofh4wj), m51adu['add'](jfo7_h, clk29, fhjo4w - 0x1), n92gk = yikn2g;
        } else {
          if (n92gk != ytw4d) throw new Error('attribute value must after "="');clk29 = a53yv['slice'](fhjo4w, o_4)['replace'](/&#?\w+;/g, ofh4wj), m51adu['add'](jfo7_h, clk29, fhjo4w), ls98c7['warning']('attribute "' + jfo7_h + '" missed start quot(' + l87f_o + ')!!'), fhjo4w = o_4 + 0x1, n92gk = yikn2g;
        }break;case '/':
        switch (n92gk) {case yh_f7:
            m51adu['setTagName'](a53yv['slice'](fhjo4w, o_4));case yikn2g:case yrz30yv:case ykn92$c:
            n92gk = ykn92$c, m51adu['closed'] = !0x0;case ytw4d:case yaum63:case ycs978l:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ls98c7['error']('unexpected end of input'), n92gk == yh_f7 && m51adu['setTagName'](a53yv['slice'](fhjo4w, o_4)), o_4;case '>':
        switch (n92gk) {case yh_f7:
            m51adu['setTagName'](a53yv['slice'](fhjo4w, o_4));case yikn2g:case yrz30yv:case ykn92$c:
            break;case ytw4d:case yaum63:
            clk29 = a53yv['slice'](fhjo4w, o_4), '/' === clk29['slice'](-0x1) && (m51adu['closed'] = !0x0, clk29 = clk29['slice'](0x0, -0x1));case ycs978l:
            n92gk === ycs978l && (clk29 = jfo7_h), n92gk == ytw4d ? (ls98c7['warning']('attribute "' + clk29 + '" missed quot(")!!'), m51adu['add'](jfo7_h, clk29['replace'](/&#?\w+;/g, ofh4wj), fhjo4w)) : ('http://www.w3.org/1999/xhtml' === ig2$k[''] && clk29['match'](/^(?:disabled|checked|selected)$/i) || ls98c7['warning']('attribute "' + clk29 + '" missed value!! "' + clk29 + '" instead!!'), m51adu['add'](clk29, clk29, fhjo4w));break;case yohfwj:
            throw new Error('attribute value missed!!');}return o_4;case '\u0080':
        l87f_o = '\x20';default:
        if ('\x20' >= l87f_o) switch (n92gk) {case yh_f7:
            m51adu['setTagName'](a53yv['slice'](fhjo4w, o_4)), n92gk = yrz30yv;break;case yaum63:
            jfo7_h = a53yv['slice'](fhjo4w, o_4), n92gk = ycs978l;break;case ytw4d:
            var clk29 = a53yv['slice'](fhjo4w, o_4)['replace'](/&#?\w+;/g, ofh4wj);ls98c7['warning']('attribute "' + clk29 + '" missed quot(")!!'), m51adu['add'](jfo7_h, clk29, fhjo4w);case yikn2g:
            n92gk = yrz30yv;} else switch (n92gk) {case ycs978l:
            {
              m51adu['tagName'];
            }'http://www.w3.org/1999/xhtml' === ig2$k[''] && jfo7_h['match'](/^(?:disabled|checked|selected)$/i) || ls98c7['warning']('attribute "' + jfo7_h + '" missed value!! "' + jfo7_h + '" instead2!!'), m51adu['add'](jfo7_h, jfo7_h, fhjo4w), fhjo4w = o_4, n92gk = yaum63;break;case yikn2g:
            ls98c7['warning']('attribute space is required"' + jfo7_h + '\x22!!');case yrz30yv:
            n92gk = yaum63, fhjo4w = o_4;break;case yohfwj:
            n92gk = ytw4d, fhjo4w = o_4;break;case ykn92$c:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}o_4++;
  }
}function ywo4jth(klcs, vyr603, k2n$i) {
  for (var fjh = klcs['tagName'], ns2k9c = null, ht1wd4 = klcs['length']; ht1wd4--;) {
    var t1dwum = klcs[ht1wd4],
        otjwh4 = t1dwum['qName'],
        flo_87 = t1dwum['value'],
        wut = otjwh4['indexOf'](':');if (wut > 0x0) var av56m = t1dwum['prefix'] = otjwh4['slice'](0x0, wut),
        d5uam1 = otjwh4['slice'](wut + 0x1),
        mw1u = 'xmlns' === av56m && d5uam1;else d5uam1 = otjwh4, av56m = null, mw1u = 'xmlns' === otjwh4 && '';t1dwum['localName'] = d5uam1, mw1u !== !0x1 && (null == ns2k9c && (ns2k9c = {}, yo7f_h(k2n$i, k2n$i = {})), k2n$i[mw1u] = ns2k9c[mw1u] = flo_87, t1dwum['uri'] = 'http://www.w3.org/2000/xmlns/', vyr603['startPrefixMapping'](mw1u, flo_87));
  }for (var ht1wd4 = klcs['length']; ht1wd4--;) {
    t1dwum = klcs[ht1wd4];var av56m = t1dwum['prefix'];av56m && ('xml' === av56m && (t1dwum['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== av56m && (t1dwum['uri'] = k2n$i[av56m || '']));
  }var wut = fjh['indexOf'](':');wut > 0x0 ? (av56m = klcs['prefix'] = fjh['slice'](0x0, wut), d5uam1 = klcs['localName'] = fjh['slice'](wut + 0x1)) : (av56m = null, d5uam1 = klcs['localName'] = fjh);var qip$n = klcs['uri'] = k2n$i[av56m || ''];if (vyr603['startElement'](qip$n, d5uam1, fjh, klcs), !klcs['closed']) return klcs['currentNSMap'] = k2n$i, klcs['localNSMap'] = ns2k9c, !0x0;if (vyr603['endElement'](qip$n, d5uam1, fjh), ns2k9c) {
    for (av56m in ns2k9c) vyr603['endPrefixMapping'](av56m);
  }
}function ya3v6y(md1a, u15dtm, rx0vy, csk9n2, qnip$) {
  if (/^(?:script|textarea)$/i['test'](rx0vy)) {
    var ayv35 = md1a['indexOf']('</' + rx0vy + '>', u15dtm),
        k$9n2g = md1a['substring'](u15dtm + 0x1, ayv35);if (/[&<]/['test'](k$9n2g)) return (/^script$/i['test'](rx0vy) ? (qnip$['characters'](k$9n2g, 0x0, k$9n2g['length']), ayv35) : (k$9n2g = k$9n2g['replace'](/&#?\w+;/g, csk9n2), qnip$['characters'](k$9n2g, 0x0, k$9n2g['length']), ayv35)
    );
  }return u15dtm + 0x1;
}function yu1(a3yv60, c9s8kl, dtu1, $nk9g2) {
  var yr306 = $nk9g2[dtu1];return null == yr306 && (yr306 = a3yv60['lastIndexOf']('</' + dtu1 + '>'), c9s8kl > yr306 && (yr306 = a3yv60['lastIndexOf']('</' + dtu1)), $nk9g2[dtu1] = yr306), c9s8kl > yr306;
}function yo7f_h(wt14ud, _fhj4) {
  for (var fj4h_ in wt14ud) _fhj4[fj4h_] = wt14ud[fj4h_];
}function ya653yv(vr360, fo_j78, va365m, xrez0) {
  var yva360 = vr360['charAt'](fo_j78 + 0x2);switch (yva360) {case '-':
      if ('-' === vr360['charAt'](fo_j78 + 0x3)) {
        var $gp = vr360['indexOf']('-->', fo_j78 + 0x4);return $gp > fo_j78 ? (va365m['comment'](vr360, fo_j78 + 0x4, $gp - fo_j78 - 0x4), $gp + 0x3) : (xrez0['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == vr360['substr'](fo_j78 + 0x3, 0x6)) {
        var $gp = vr360['indexOf'](']]>', fo_j78 + 0x9);return va365m['startCDATA'](), va365m['characters'](vr360, fo_j78 + 0x9, $gp - fo_j78 - 0x9), va365m['endCDATA'](), $gp + 0x3;
      }var td51 = yk9g2$(vr360, fo_j78),
          ikn$2 = td51['length'];if (ikn$2 > 0x1 && /!doctype/i['test'](td51[0x0][0x0])) {
        var a36m5u = td51[0x1][0x0],
            _hf4o = ikn$2 > 0x3 && /^public$/i['test'](td51[0x2][0x0]) && td51[0x3][0x0],
            c7_8l = ikn$2 > 0x4 && td51[0x4][0x0],
            m1tdu5 = td51[ikn$2 - 0x1];return va365m['startDTD'](a36m5u, _hf4o && _hf4o['replace'](/^(['"])(.*?)\1$/, '$2'), c7_8l && c7_8l['replace'](/^(['"])(.*?)\1$/, '$2')), va365m['endDTD'](), m1tdu5['index'] + m1tdu5[0x0]['length'];
      }}return -0x1;
}function ya6um15(q$ngp, nqg$pi, ma53u) {
  var sl7f_ = q$ngp['indexOf']('?>', nqg$pi);if (sl7f_) {
    var gin$ = q$ngp['substring'](nqg$pi, sl7f_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (gin$) {
      {
        gin$[0x0]['length'];
      }return ma53u['processingInstruction'](gin$[0x1], gin$[0x2]), sl7f_ + 0x2;
    }return -0x1;
  }return -0x1;
}function yk2gi() {}function yhjo_f4(hw1d4, au516m) {
  return hw1d4['__proto__'] = au516m, hw1d4;
}function yk9g2$(jh4d, n2k$gi) {
  var n2sc9,
      u41tdw = [],
      k2lcs9 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (k2lcs9['lastIndex'] = n2k$gi, k2lcs9['exec'](jh4d); n2sc9 = k2lcs9['exec'](jh4d);) if (u41tdw['push'](n2sc9), n2sc9[0x1]) return u41tdw;
}var ydm5ut = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    yua15dm = new RegExp('[\\-\\.0-9' + ydm5ut['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    yu15md = new RegExp('^' + ydm5ut['source'] + yua15dm['source'] + '*(?::' + ydm5ut['source'] + yua15dm['source'] + '*)?$'),
    yh_f7 = 0x0,
    yaum63 = 0x1,
    ycs978l = 0x2,
    yohfwj = 0x3,
    ytw4d = 0x4,
    yikn2g = 0x5,
    yrz30yv = 0x6,
    ykn92$c = 0x7;yey0zrx['prototype'] = { 'parse': function (fhj_, yxz0er, qgpni) {
    var kcn$29 = this['domBuilder'];kcn$29['startDocument'](), yo7f_h(yxz0er, yxz0er = {}), yv30zr(fhj_, yxz0er, qgpni, kcn$29, this['errorHandler']), kcn$29['endDocument']();
  } }, yk2gi['prototype'] = { 'setTagName': function (hof_j7) {
    if (!yu15md['test'](hof_j7)) throw new Error('invalid tagName:' + hof_j7);this['tagName'] = hof_j7;
  }, 'add': function (f7j8_o, fo_h4j, vya6) {
    if (!yu15md['test'](f7j8_o)) throw new Error('invalid attribute:' + f7j8_o);this[this['length']++] = { 'qName': f7j8_o, 'value': fo_h4j, 'offset': vya6 };
  }, 'length': 0x0, 'getLocalName': function ($2igkn) {
    return this[$2igkn]['localName'];
  }, 'getLocator': function (ck29ns) {
    return this[ck29ns]['locator'];
  }, 'getQName': function (vam653) {
    return this[vam653]['qName'];
  }, 'getURI': function (dw4t) {
    return this[dw4t]['uri'];
  }, 'getValue': function (cl29s) {
    return this[cl29s]['value'];
  } }, yhjo_f4({}, yhjo_f4['prototype']) instanceof yhjo_f4 || (yhjo_f4 = function (s29cl, kl9cs2) {
  function $nqg() {}$nqg['prototype'] = kl9cs2, $nqg = new $nqg();for (kl9cs2 in s29cl) $nqg[kl9cs2] = s29cl[kl9cs2];return $nqg;
}), exports['XMLReader'] = yey0zrx;