var B = wx.$B;
function Bdtx$_() {}function Bnsh6(spngu, h67kb9, n7sgp, v4lkb, x0$yt_) {
  function b4vk(awfr8) {
    if (awfr8 > 0xffff) {
      awfr8 -= 0x10000;var ungsp7 = 0xd800 + (awfr8 >> 0xa),
          a2fw = 0xdc00 + (0x3ff & awfr8);return String['fromCharCode'](ungsp7, a2fw);
    }return String['fromCharCode'](awfr8);
  }function h6s7nu(l$4vy0) {
    var l4byvz = l$4vy0['slice'](0x1, -0x1);return l4byvz in n7sgp ? n7sgp[l4byvz] : '#' === l4byvz['charAt'](0x0) ? b4vk(parseInt(l4byvz['substr'](0x1)['replace']('x', '0x'))) : (x0$yt_['error']('entity not found:' + l$4vy0), l$4vy0);
  }function ep2w(us76hn) {
    if (us76hn > pgsue) {
      var $xdq_ = spngu['substring'](pgsue, us76hn)['replace'](/&#?\w+;/g, h6s7nu);fmrj && zl0y4(pgsue), v4lkb['characters']($xdq_, 0x0, us76hn - pgsue), pgsue = us76hn;
    }
  }function zl0y4(ia2pew, supen) {
    for (; ia2pew >= w82i3 && (supen = l4z9b['exec'](spngu));) d_x0 = supen['index'], w82i3 = d_x0 + supen[0x0]['length'], fmrj['lineNumber']++;fmrj['columnNumber'] = ia2pew - d_x0 + 0x1;
  }for (var d_x0 = 0x0, w82i3 = 0x0, l4z9b = /.*(?:\r\n?|\n)|.*$/g, fmrj = v4lkb['locator'], sngh7u = [{ 'currentNSMap': h67kb9 }], wfr3 = {}, pgsue = 0x0;;) {
    try {
      var pusn7g = spngu['indexOf']('<', pgsue);if (0x0 > pusn7g) {
        if (!spngu['substr'](pgsue)['match'](/^\s*$/)) {
          var $txd_q = v4lkb['doc'],
              j8f5r = $txd_q['createTextNode'](spngu['substr'](pgsue));$txd_q['appendChild'](j8f5r), v4lkb['currentElement'] = j8f5r;
        }return;
      }switch (pusn7g > pgsue && ep2w(pusn7g), spngu['charAt'](pusn7g + 0x1)) {case '/':
          var zhk6b = spngu['indexOf']('>', pusn7g + 0x3),
              txd = spngu['substring'](pusn7g + 0x2, zhk6b),
              u6s7nh = sngh7u['pop']();0x0 > zhk6b ? (txd = spngu['substring'](pusn7g + 0x2)['replace'](/[\s<].*/, ''), x0$yt_['error']('end tag name: ' + txd + ' is not complete:' + u6s7nh['tagName']), zhk6b = pusn7g + 0x1 + txd['length']) : txd['match'](/\s</) && (txd = txd['replace'](/[\s<].*/, ''), x0$yt_['error']('end tag name: ' + txd + ' maybe not complete'), zhk6b = pusn7g + 0x1 + txd['length']);var tv = u6s7nh['localNSMap'],
              vbkz4 = u6s7nh['tagName'] == txd,
              zklbv4 = vbkz4 || u6s7nh['tagName'] && u6s7nh['tagName']['toLowerCase']() == txd['toLowerCase']();if (zklbv4) {
            if (v4lkb['endElement'](u6s7nh['uri'], u6s7nh['localName'], txd), tv) {
              for (var pguse in tv) v4lkb['endPrefixMapping'](pguse);
            }vbkz4 || x0$yt_['fatalError']('end tag name: ' + txd + ' is not match the current start tagName:' + u6s7nh['tagName']);
          } else sngh7u['push'](u6s7nh);zhk6b++;break;case '?':
          fmrj && zl0y4(pusn7g), zhk6b = Bp2iewa(spngu, pusn7g, v4lkb);break;case '!':
          fmrj && zl0y4(pusn7g), zhk6b = Bhk769b(spngu, pusn7g, v4lkb, x0$yt_);break;default:
          fmrj && zl0y4(pusn7g);var zbk4l = new Br3f8(),
              f8j1r = sngh7u[sngh7u['length'] - 0x1]['currentNSMap'],
              zhk6b = Be2gipa(spngu, pusn7g, zbk4l, f8j1r, h6s7nu, x0$yt_),
              y$v0tx = zbk4l['length'];if (!zbk4l['closed'] && Bv4y0zl(spngu, zhk6b, zbk4l['tagName'], wfr3) && (zbk4l['closed'] = !0x0, n7sgp['nbsp'] || x0$yt_['warning']('unclosed xml attribute')), fmrj && y$v0tx) {
            for (var f5rj38 = Baegp2i(fmrj, {}), omr5 = 0x0; y$v0tx > omr5; omr5++) {
              var yb4lzv = zbk4l[omr5];zl0y4(yb4lzv['offset']), yb4lzv['locator'] = Baegp2i(fmrj, {});
            }v4lkb['locator'] = f5rj38, Bl4bvz(zbk4l, v4lkb, f8j1r) && sngh7u['push'](zbk4l), v4lkb['locator'] = fmrj;
          } else Bl4bvz(zbk4l, v4lkb, f8j1r) && sngh7u['push'](zbk4l);'http://www.w3.org/1999/xhtml' !== zbk4l['uri'] || zbk4l['closed'] ? zhk6b++ : zhk6b = Bpgi2ae(spngu, zhk6b, zbk4l['tagName'], h6s7nu, v4lkb);}
    } catch (jm15rf) {
      x0$yt_['error']('element parse error: ' + jm15rf), zhk6b = -0x1;
    }zhk6b > pgsue ? pgsue = zhk6b : ep2w(Math['max'](pusn7g, pgsue) + 0x1);
  }
}function Baegp2i($_qdxt, ngpesu) {
  return ngpesu['lineNumber'] = $_qdxt['lineNumber'], ngpesu['columnNumber'] = $_qdxt['columnNumber'], ngpesu;
}function Be2gipa(_d$0t, _t$xy, pa2gei, x$q, m5o, ugep2) {
  for (var kh67s9, h6ks7, tvx$y0 = ++_t$xy, t0yvl = Bzybl4v;;) {
    var fjr853 = _d$0t['charAt'](tvx$y0);switch (fjr853) {case '=':
        if (t0yvl === B_t$dx0) kh67s9 = _d$0t['slice'](_t$xy, tvx$y0), t0yvl = Bnepg;else {
          if (t0yvl !== Bwa28f) throw new Error('attribute equal must after attrName');t0yvl = Bnepg;
        }break;case '\x27':case '\x22':
        if (t0yvl === Bnepg || t0yvl === B_t$dx0) {
          if (t0yvl === B_t$dx0 && (ugep2['warning']('attribute value must after "="'), kh67s9 = _d$0t['slice'](_t$xy, tvx$y0)), _t$xy = tvx$y0 + 0x1, tvx$y0 = _d$0t['indexOf'](fjr853, _t$xy), !(tvx$y0 > 0x0)) throw new Error('attribute value no end \'' + fjr853 + '\' match');h6ks7 = _d$0t['slice'](_t$xy, tvx$y0)['replace'](/&#?\w+;/g, m5o), pa2gei['add'](kh67s9, h6ks7, _t$xy - 0x1), t0yvl = B_x0$d;
        } else {
          if (t0yvl != Br1j5o) throw new Error('attribute value must after "="');h6ks7 = _d$0t['slice'](_t$xy, tvx$y0)['replace'](/&#?\w+;/g, m5o), pa2gei['add'](kh67s9, h6ks7, _t$xy), ugep2['warning']('attribute "' + kh67s9 + '" missed start quot(' + fjr853 + ')!!'), _t$xy = tvx$y0 + 0x1, t0yvl = B_x0$d;
        }break;case '/':
        switch (t0yvl) {case Bzybl4v:
            pa2gei['setTagName'](_d$0t['slice'](_t$xy, tvx$y0));case B_x0$d:case Bepi2:case Bgipa2:
            t0yvl = Bgipa2, pa2gei['closed'] = !0x0;case Br1j5o:case B_t$dx0:case Bwa28f:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ugep2['error']('unexpected end of input'), t0yvl == Bzybl4v && pa2gei['setTagName'](_d$0t['slice'](_t$xy, tvx$y0)), tvx$y0;case '>':
        switch (t0yvl) {case Bzybl4v:
            pa2gei['setTagName'](_d$0t['slice'](_t$xy, tvx$y0));case B_x0$d:case Bepi2:case Bgipa2:
            break;case Br1j5o:case B_t$dx0:
            h6ks7 = _d$0t['slice'](_t$xy, tvx$y0), '/' === h6ks7['slice'](-0x1) && (pa2gei['closed'] = !0x0, h6ks7 = h6ks7['slice'](0x0, -0x1));case Bwa28f:
            t0yvl === Bwa28f && (h6ks7 = kh67s9), t0yvl == Br1j5o ? (ugep2['warning']('attribute "' + h6ks7 + '" missed quot(")!!'), pa2gei['add'](kh67s9, h6ks7['replace'](/&#?\w+;/g, m5o), _t$xy)) : ('http://www.w3.org/1999/xhtml' === x$q[''] && h6ks7['match'](/^(?:disabled|checked|selected)$/i) || ugep2['warning']('attribute "' + h6ks7 + '" missed value!! "' + h6ks7 + '" instead!!'), pa2gei['add'](h6ks7, h6ks7, _t$xy));break;case Bnepg:
            throw new Error('attribute value missed!!');}return tvx$y0;case '\u0080':
        fjr853 = '\x20';default:
        if ('\x20' >= fjr853) switch (t0yvl) {case Bzybl4v:
            pa2gei['setTagName'](_d$0t['slice'](_t$xy, tvx$y0)), t0yvl = Bepi2;break;case B_t$dx0:
            kh67s9 = _d$0t['slice'](_t$xy, tvx$y0), t0yvl = Bwa28f;break;case Br1j5o:
            var h6ks7 = _d$0t['slice'](_t$xy, tvx$y0)['replace'](/&#?\w+;/g, m5o);ugep2['warning']('attribute "' + h6ks7 + '" missed quot(")!!'), pa2gei['add'](kh67s9, h6ks7, _t$xy);case B_x0$d:
            t0yvl = Bepi2;} else switch (t0yvl) {case Bwa28f:
            {
              pa2gei['tagName'];
            }'http://www.w3.org/1999/xhtml' === x$q[''] && kh67s9['match'](/^(?:disabled|checked|selected)$/i) || ugep2['warning']('attribute "' + kh67s9 + '" missed value!! "' + kh67s9 + '" instead2!!'), pa2gei['add'](kh67s9, kh67s9, _t$xy), _t$xy = tvx$y0, t0yvl = B_t$dx0;break;case B_x0$d:
            ugep2['warning']('attribute space is required"' + kh67s9 + '\x22!!');case Bepi2:
            t0yvl = B_t$dx0, _t$xy = tvx$y0;break;case Bnepg:
            t0yvl = Br1j5o, _t$xy = tvx$y0;break;case Bgipa2:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tvx$y0++;
  }
}function Bl4bvz(wea2ip, gnep, $lvy) {
  for (var uepgi2 = wea2ip['tagName'], bzy4vl = null, h7su = wea2ip['length']; h7su--;) {
    var lz4v0 = wea2ip[h7su],
        lz4kv = lz4v0['qName'],
        hn97 = lz4v0['value'],
        up2g = lz4kv['indexOf'](':');if (up2g > 0x0) var uspen = lz4v0['prefix'] = lz4kv['slice'](0x0, up2g),
        z4bk96 = lz4kv['slice'](up2g + 0x1),
        ush7n6 = 'xmlns' === uspen && z4bk96;else z4bk96 = lz4kv, uspen = null, ush7n6 = 'xmlns' === lz4kv && '';lz4v0['localName'] = z4bk96, ush7n6 !== !0x1 && (null == bzy4vl && (bzy4vl = {}, Bzvklb($lvy, $lvy = {})), $lvy[ush7n6] = bzy4vl[ush7n6] = hn97, lz4v0['uri'] = 'http://www.w3.org/2000/xmlns/', gnep['startPrefixMapping'](ush7n6, hn97));
  }for (var h7su = wea2ip['length']; h7su--;) {
    lz4v0 = wea2ip[h7su];var uspen = lz4v0['prefix'];uspen && ('xml' === uspen && (lz4v0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== uspen && (lz4v0['uri'] = $lvy[uspen || '']));
  }var up2g = uepgi2['indexOf'](':');up2g > 0x0 ? (uspen = wea2ip['prefix'] = uepgi2['slice'](0x0, up2g), z4bk96 = wea2ip['localName'] = uepgi2['slice'](up2g + 0x1)) : (uspen = null, z4bk96 = wea2ip['localName'] = uepgi2);var jm51 = wea2ip['uri'] = $lvy[uspen || ''];if (gnep['startElement'](jm51, z4bk96, uepgi2, wea2ip), !wea2ip['closed']) return wea2ip['currentNSMap'] = $lvy, wea2ip['localNSMap'] = bzy4vl, !0x0;if (gnep['endElement'](jm51, z4bk96, uepgi2), bzy4vl) {
    for (uspen in bzy4vl) gnep['endPrefixMapping'](uspen);
  }
}function Bpgi2ae(nigep, zblk4v, r1jfm5, uen, rfwa3) {
  if (/^(?:script|textarea)$/i['test'](r1jfm5)) {
    var l4y = nigep['indexOf']('</' + r1jfm5 + '>', zblk4v),
        $_xdq = nigep['substring'](zblk4v + 0x1, l4y);if (/[&<]/['test']($_xdq)) return (/^script$/i['test'](r1jfm5) ? (rfwa3['characters']($_xdq, 0x0, $_xdq['length']), l4y) : ($_xdq = $_xdq['replace'](/&#?\w+;/g, uen), rfwa3['characters']($_xdq, 0x0, $_xdq['length']), l4y)
    );
  }return zblk4v + 0x1;
}function Bv4y0zl(jm15or, f85j3, ipaw2, kvlz4) {
  var r38fj5 = kvlz4[ipaw2];return null == r38fj5 && (r38fj5 = jm15or['lastIndexOf']('</' + ipaw2 + '>'), f85j3 > r38fj5 && (r38fj5 = jm15or['lastIndexOf']('</' + ipaw2)), kvlz4[ipaw2] = r38fj5), f85j3 > r38fj5;
}function Bzvklb(rojm5, snpegu) {
  for (var r5j38f in rojm5) snpegu[r5j38f] = rojm5[r5j38f];
}function Bhk769b(gusep, tx$dq, bvzyl4, u7gnps) {
  var w2epia = gusep['charAt'](tx$dq + 0x2);switch (w2epia) {case '-':
      if ('-' === gusep['charAt'](tx$dq + 0x3)) {
        var lzbk4 = gusep['indexOf']('-->', tx$dq + 0x4);return lzbk4 > tx$dq ? (bvzyl4['comment'](gusep, tx$dq + 0x4, lzbk4 - tx$dq - 0x4), lzbk4 + 0x3) : (u7gnps['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gusep['substr'](tx$dq + 0x3, 0x6)) {
        var lzbk4 = gusep['indexOf'](']]>', tx$dq + 0x9);return bvzyl4['startCDATA'](), bvzyl4['characters'](gusep, tx$dq + 0x9, lzbk4 - tx$dq - 0x9), bvzyl4['endCDATA'](), lzbk4 + 0x3;
      }var piugn = Bu7hsng(gusep, tx$dq),
          lvzb4k = piugn['length'];if (lvzb4k > 0x1 && /!doctype/i['test'](piugn[0x0][0x0])) {
        var d_x0t = piugn[0x1][0x0],
            vlb4yz = lvzb4k > 0x3 && /^public$/i['test'](piugn[0x2][0x0]) && piugn[0x3][0x0],
            wr53 = lvzb4k > 0x4 && piugn[0x4][0x0],
            pawi = piugn[lvzb4k - 0x1];return bvzyl4['startDTD'](d_x0t, vlb4yz && vlb4yz['replace'](/^(['"])(.*?)\1$/, '$2'), wr53 && wr53['replace'](/^(['"])(.*?)\1$/, '$2')), bvzyl4['endDTD'](), pawi['index'] + pawi[0x0]['length'];
      }}return -0x1;
}function Bp2iewa(lvy$0t, t0$ly, v$xy0) {
  var su7gnh = lvy$0t['indexOf']('?>', t0$ly);if (su7gnh) {
    var e2ipug = lvy$0t['substring'](t0$ly, su7gnh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (e2ipug) {
      {
        e2ipug[0x0]['length'];
      }return v$xy0['processingInstruction'](e2ipug[0x1], e2ipug[0x2]), su7gnh + 0x2;
    }return -0x1;
  }return -0x1;
}function Br3f8() {}function Ba2e3i(mf1jr, $t0vyx) {
  return mf1jr['__proto__'] = $t0vyx, mf1jr;
}function Bu7hsng($qtx_d, gnpiu) {
  var psngu7,
      a2i3w = [],
      igpea = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (igpea['lastIndex'] = gnpiu, igpea['exec']($qtx_d); psngu7 = igpea['exec']($qtx_d);) if (a2i3w['push'](psngu7), psngu7[0x1]) return a2i3w;
}var Blk4bvz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Bbvyzl = new RegExp('[\\-\\.0-9' + Blk4bvz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Byzvb4 = new RegExp('^' + Blk4bvz['source'] + Bbvyzl['source'] + '*(?::' + Blk4bvz['source'] + Bbvyzl['source'] + '*)?$'),
    Bzybl4v = 0x0,
    B_t$dx0 = 0x1,
    Bwa28f = 0x2,
    Bnepg = 0x3,
    Br1j5o = 0x4,
    B_x0$d = 0x5,
    Bepi2 = 0x6,
    Bgipa2 = 0x7;Bdtx$_['prototype'] = { 'parse': function (h976sn, mjr51o, pgnues) {
    var w8i3a2 = this['domBuilder'];w8i3a2['startDocument'](), Bzvklb(mjr51o, mjr51o = {}), Bnsh6(h976sn, mjr51o, pgnues, w8i3a2, this['errorHandler']), w8i3a2['endDocument']();
  } }, Br3f8['prototype'] = { 'setTagName': function (dq$_t) {
    if (!Byzvb4['test'](dq$_t)) throw new Error('invalid tagName:' + dq$_t);this['tagName'] = dq$_t;
  }, 'add': function ($tvx0, bl4zvy, aewip2) {
    if (!Byzvb4['test']($tvx0)) throw new Error('invalid attribute:' + $tvx0);this[this['length']++] = { 'qName': $tvx0, 'value': bl4zvy, 'offset': aewip2 };
  }, 'length': 0x0, 'getLocalName': function (g2) {
    return this[g2]['localName'];
  }, 'getLocator': function (lzbvk) {
    return this[lzbvk]['locator'];
  }, 'getQName': function (w2eia3) {
    return this[w2eia3]['qName'];
  }, 'getURI': function (k94bz) {
    return this[k94bz]['uri'];
  }, 'getValue': function (supgn) {
    return this[supgn]['value'];
  } }, Ba2e3i({}, Ba2e3i['prototype']) instanceof Ba2e3i || (Ba2e3i = function (lk4bz9, hnsg) {
  function n69h() {}n69h['prototype'] = hnsg, n69h = new n69h();for (hnsg in lk4bz9) n69h[hnsg] = lk4bz9[hnsg];return n69h;
}), exports['XMLReader'] = Bdtx$_;