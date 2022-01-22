var B = wx.$B;
function Bv0zly() {}function Bmjor51(aw3ie, gipa2e, dqt_, frj51m, vt$x0y) {
  function bzvyl4(t$vxy) {
    if (t$vxy > 0xffff) {
      t$vxy -= 0x10000;var nguip = 0xd800 + (t$vxy >> 0xa),
          yx0_t$ = 0xdc00 + (0x3ff & t$vxy);return String['fromCharCode'](nguip, yx0_t$);
    }return String['fromCharCode'](t$vxy);
  }function q_$dtx(tl$0vy) {
    var zk694b = tl$0vy['slice'](0x1, -0x1);return zk694b in dqt_ ? dqt_[zk694b] : '#' === zk694b['charAt'](0x0) ? bzvyl4(parseInt(zk694b['substr'](0x1)['replace']('x', '0x'))) : (vt$x0y['error']('entity not found:' + tl$0vy), tl$0vy);
  }function k4lbv(kbz94) {
    if (kbz94 > egiun) {
      var igupn = aw3ie['substring'](egiun, kbz94)['replace'](/&#?\w+;/g, q_$dtx);j53r8f && gesup(egiun), frj51m['characters'](igupn, 0x0, kbz94 - egiun), egiun = kbz94;
    }
  }function gesup(rmj5, m1f5rj) {
    for (; rmj5 >= vyl$ && (m1f5rj = _yt0x$['exec'](aw3ie));) tx_qd = m1f5rj['index'], vyl$ = tx_qd + m1f5rj[0x0]['length'], j53r8f['lineNumber']++;j53r8f['columnNumber'] = rmj5 - tx_qd + 0x1;
  }for (var tx_qd = 0x0, vyl$ = 0x0, _yt0x$ = /.*(?:\r\n?|\n)|.*$/g, j53r8f = frj51m['locator'], u7pns = [{ 'currentNSMap': gipa2e }], nseug = {}, egiun = 0x0;;) {
    try {
      var wi8 = aw3ie['indexOf']('<', egiun);if (0x0 > wi8) {
        if (!aw3ie['substr'](egiun)['match'](/^\s*$/)) {
          var f1j5r8 = frj51m['doc'],
              wapi = f1j5r8['createTextNode'](aw3ie['substr'](egiun));f1j5r8['appendChild'](wapi), frj51m['currentElement'] = wapi;
        }return;
      }switch (wi8 > egiun && k4lbv(wi8), aw3ie['charAt'](wi8 + 0x1)) {case '/':
          var s6k9h7 = aw3ie['indexOf']('>', wi8 + 0x3),
              ty$_x = aw3ie['substring'](wi8 + 0x2, s6k9h7),
              vy0lz4 = u7pns['pop']();0x0 > s6k9h7 ? (ty$_x = aw3ie['substring'](wi8 + 0x2)['replace'](/[\s<].*/, ''), vt$x0y['error']('end tag name: ' + ty$_x + ' is not complete:' + vy0lz4['tagName']), s6k9h7 = wi8 + 0x1 + ty$_x['length']) : ty$_x['match'](/\s</) && (ty$_x = ty$_x['replace'](/[\s<].*/, ''), vt$x0y['error']('end tag name: ' + ty$_x + ' maybe not complete'), s6k9h7 = wi8 + 0x1 + ty$_x['length']);var peunig = vy0lz4['localNSMap'],
              t0xv = vy0lz4['tagName'] == ty$_x,
              td_$x0 = t0xv || vy0lz4['tagName'] && vy0lz4['tagName']['toLowerCase']() == ty$_x['toLowerCase']();if (td_$x0) {
            if (frj51m['endElement'](vy0lz4['uri'], vy0lz4['localName'], ty$_x), peunig) {
              for (var ylvz0 in peunig) frj51m['endPrefixMapping'](ylvz0);
            }t0xv || vt$x0y['fatalError']('end tag name: ' + ty$_x + ' is not match the current start tagName:' + vy0lz4['tagName']);
          } else u7pns['push'](vy0lz4);s6k9h7++;break;case '?':
          j53r8f && gesup(wi8), s6k9h7 = Bpiwe2(aw3ie, wi8, frj51m);break;case '!':
          j53r8f && gesup(wi8), s6k9h7 = Bpegni(aw3ie, wi8, frj51m, vt$x0y);break;default:
          j53r8f && gesup(wi8);var zb6kh = new Biu2gep(),
              wf583r = u7pns[u7pns['length'] - 0x1]['currentNSMap'],
              s6k9h7 = Bpungs7(aw3ie, wi8, zb6kh, wf583r, q_$dtx, vt$x0y),
              xv$t0 = zb6kh['length'];if (!zb6kh['closed'] && Bar38w(aw3ie, s6k9h7, zb6kh['tagName'], nseug) && (zb6kh['closed'] = !0x0, dqt_['nbsp'] || vt$x0y['warning']('unclosed xml attribute')), j53r8f && xv$t0) {
            for (var af832w = Bzkb946(j53r8f, {}), epa2w = 0x0; xv$t0 > epa2w; epa2w++) {
              var pa2gei = zb6kh[epa2w];gesup(pa2gei['offset']), pa2gei['locator'] = Bzkb946(j53r8f, {});
            }frj51m['locator'] = af832w, Bupsgn(zb6kh, frj51m, wf583r) && u7pns['push'](zb6kh), frj51m['locator'] = j53r8f;
          } else Bupsgn(zb6kh, frj51m, wf583r) && u7pns['push'](zb6kh);'http://www.w3.org/1999/xhtml' !== zb6kh['uri'] || zb6kh['closed'] ? s6k9h7++ : s6k9h7 = Bd$xqt_(aw3ie, s6k9h7, zb6kh['tagName'], q_$dtx, frj51m);}
    } catch (lkzv) {
      vt$x0y['error']('element parse error: ' + lkzv), s6k9h7 = -0x1;
    }s6k9h7 > egiun ? egiun = s6k9h7 : k4lbv(Math['max'](wi8, egiun) + 0x1);
  }
}function Bzkb946($dt_0x, blkz4v) {
  return blkz4v['lineNumber'] = $dt_0x['lineNumber'], blkz4v['columnNumber'] = $dt_0x['columnNumber'], blkz4v;
}function Bpungs7(up2ie, gu2iep, khb97, h697b, r53j8f, hsgn7u) {
  for (var s97kh, orj15m, kzl94b = ++gu2iep, iew2 = Bsu67n;;) {
    var vzy4bl = up2ie['charAt'](kzl94b);switch (vzy4bl) {case '=':
        if (iew2 === Blz94kb) s97kh = up2ie['slice'](gu2iep, kzl94b), iew2 = Bk6;else {
          if (iew2 !== Byv40zl) throw new Error('attribute equal must after attrName');iew2 = Bk6;
        }break;case '\x27':case '\x22':
        if (iew2 === Bk6 || iew2 === Blz94kb) {
          if (iew2 === Blz94kb && (hsgn7u['warning']('attribute value must after "="'), s97kh = up2ie['slice'](gu2iep, kzl94b)), gu2iep = kzl94b + 0x1, kzl94b = up2ie['indexOf'](vzy4bl, gu2iep), !(kzl94b > 0x0)) throw new Error('attribute value no end \'' + vzy4bl + '\' match');orj15m = up2ie['slice'](gu2iep, kzl94b)['replace'](/&#?\w+;/g, r53j8f), khb97['add'](s97kh, orj15m, gu2iep - 0x1), iew2 = Bl9k4zb;
        } else {
          if (iew2 != Bwa8fr) throw new Error('attribute value must after "="');orj15m = up2ie['slice'](gu2iep, kzl94b)['replace'](/&#?\w+;/g, r53j8f), khb97['add'](s97kh, orj15m, gu2iep), hsgn7u['warning']('attribute "' + s97kh + '" missed start quot(' + vzy4bl + ')!!'), gu2iep = kzl94b + 0x1, iew2 = Bl9k4zb;
        }break;case '/':
        switch (iew2) {case Bsu67n:
            khb97['setTagName'](up2ie['slice'](gu2iep, kzl94b));case Bl9k4zb:case Bfr5m1j:case Bkzb9:
            iew2 = Bkzb9, khb97['closed'] = !0x0;case Bwa8fr:case Blz94kb:case Byv40zl:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hsgn7u['error']('unexpected end of input'), iew2 == Bsu67n && khb97['setTagName'](up2ie['slice'](gu2iep, kzl94b)), kzl94b;case '>':
        switch (iew2) {case Bsu67n:
            khb97['setTagName'](up2ie['slice'](gu2iep, kzl94b));case Bl9k4zb:case Bfr5m1j:case Bkzb9:
            break;case Bwa8fr:case Blz94kb:
            orj15m = up2ie['slice'](gu2iep, kzl94b), '/' === orj15m['slice'](-0x1) && (khb97['closed'] = !0x0, orj15m = orj15m['slice'](0x0, -0x1));case Byv40zl:
            iew2 === Byv40zl && (orj15m = s97kh), iew2 == Bwa8fr ? (hsgn7u['warning']('attribute "' + orj15m + '" missed quot(")!!'), khb97['add'](s97kh, orj15m['replace'](/&#?\w+;/g, r53j8f), gu2iep)) : ('http://www.w3.org/1999/xhtml' === h697b[''] && orj15m['match'](/^(?:disabled|checked|selected)$/i) || hsgn7u['warning']('attribute "' + orj15m + '" missed value!! "' + orj15m + '" instead!!'), khb97['add'](orj15m, orj15m, gu2iep));break;case Bk6:
            throw new Error('attribute value missed!!');}return kzl94b;case '\u0080':
        vzy4bl = '\x20';default:
        if ('\x20' >= vzy4bl) switch (iew2) {case Bsu67n:
            khb97['setTagName'](up2ie['slice'](gu2iep, kzl94b)), iew2 = Bfr5m1j;break;case Blz94kb:
            s97kh = up2ie['slice'](gu2iep, kzl94b), iew2 = Byv40zl;break;case Bwa8fr:
            var orj15m = up2ie['slice'](gu2iep, kzl94b)['replace'](/&#?\w+;/g, r53j8f);hsgn7u['warning']('attribute "' + orj15m + '" missed quot(")!!'), khb97['add'](s97kh, orj15m, gu2iep);case Bl9k4zb:
            iew2 = Bfr5m1j;} else switch (iew2) {case Byv40zl:
            {
              khb97['tagName'];
            }'http://www.w3.org/1999/xhtml' === h697b[''] && s97kh['match'](/^(?:disabled|checked|selected)$/i) || hsgn7u['warning']('attribute "' + s97kh + '" missed value!! "' + s97kh + '" instead2!!'), khb97['add'](s97kh, s97kh, gu2iep), gu2iep = kzl94b, iew2 = Blz94kb;break;case Bl9k4zb:
            hsgn7u['warning']('attribute space is required"' + s97kh + '\x22!!');case Bfr5m1j:
            iew2 = Blz94kb, gu2iep = kzl94b;break;case Bk6:
            iew2 = Bwa8fr, gu2iep = kzl94b;break;case Bkzb9:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}kzl94b++;
  }
}function Bupsgn(hus, epnsug, jf185) {
  for (var b4kl9z = hus['tagName'], gsue = null, mor1 = hus['length']; mor1--;) {
    var ug2ep = hus[mor1],
        t_x0$ = ug2ep['qName'],
        iewa = ug2ep['value'],
        o1r5j = t_x0$['indexOf'](':');if (o1r5j > 0x0) var eip2ag = ug2ep['prefix'] = t_x0$['slice'](0x0, o1r5j),
        gsnpeu = t_x0$['slice'](o1r5j + 0x1),
        $tvx0y = 'xmlns' === eip2ag && gsnpeu;else gsnpeu = t_x0$, eip2ag = null, $tvx0y = 'xmlns' === t_x0$ && '';ug2ep['localName'] = gsnpeu, $tvx0y !== !0x1 && (null == gsue && (gsue = {}, Bvb4ly(jf185, jf185 = {})), jf185[$tvx0y] = gsue[$tvx0y] = iewa, ug2ep['uri'] = 'http://www.w3.org/2000/xmlns/', epnsug['startPrefixMapping']($tvx0y, iewa));
  }for (var mor1 = hus['length']; mor1--;) {
    ug2ep = hus[mor1];var eip2ag = ug2ep['prefix'];eip2ag && ('xml' === eip2ag && (ug2ep['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== eip2ag && (ug2ep['uri'] = jf185[eip2ag || '']));
  }var o1r5j = b4kl9z['indexOf'](':');o1r5j > 0x0 ? (eip2ag = hus['prefix'] = b4kl9z['slice'](0x0, o1r5j), gsnpeu = hus['localName'] = b4kl9z['slice'](o1r5j + 0x1)) : (eip2ag = null, gsnpeu = hus['localName'] = b4kl9z);var fjr5m = hus['uri'] = jf185[eip2ag || ''];if (epnsug['startElement'](fjr5m, gsnpeu, b4kl9z, hus), !hus['closed']) return hus['currentNSMap'] = jf185, hus['localNSMap'] = gsue, !0x0;if (epnsug['endElement'](fjr5m, gsnpeu, b4kl9z), gsue) {
    for (eip2ag in gsue) epnsug['endPrefixMapping'](eip2ag);
  }
}function Bd$xqt_(xd_t, uei2gp, bzlk94, hg7un, lvt$0) {
  if (/^(?:script|textarea)$/i['test'](bzlk94)) {
    var _xt0y$ = xd_t['indexOf']('</' + bzlk94 + '>', uei2gp),
        $0xtvy = xd_t['substring'](uei2gp + 0x1, _xt0y$);if (/[&<]/['test']($0xtvy)) return (/^script$/i['test'](bzlk94) ? (lvt$0['characters']($0xtvy, 0x0, $0xtvy['length']), _xt0y$) : ($0xtvy = $0xtvy['replace'](/&#?\w+;/g, hg7un), lvt$0['characters']($0xtvy, 0x0, $0xtvy['length']), _xt0y$)
    );
  }return uei2gp + 0x1;
}function Bar38w(y0$l4v, d0tx_, frj1, b67k9h) {
  var gue2 = b67k9h[frj1];return null == gue2 && (gue2 = y0$l4v['lastIndexOf']('</' + frj1 + '>'), d0tx_ > gue2 && (gue2 = y0$l4v['lastIndexOf']('</' + frj1)), b67k9h[frj1] = gue2), d0tx_ > gue2;
}function Bvb4ly(xt0$d, iegp2a) {
  for (var lzb4kv in xt0$d) iegp2a[lzb4kv] = xt0$d[lzb4kv];
}function Bpegni(aigp, m51jor, piug2, jr538f) {
  var lyv0$4 = aigp['charAt'](m51jor + 0x2);switch (lyv0$4) {case '-':
      if ('-' === aigp['charAt'](m51jor + 0x3)) {
        var t_x$q = aigp['indexOf']('-->', m51jor + 0x4);return t_x$q > m51jor ? (piug2['comment'](aigp, m51jor + 0x4, t_x$q - m51jor - 0x4), t_x$q + 0x3) : (jr538f['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == aigp['substr'](m51jor + 0x3, 0x6)) {
        var t_x$q = aigp['indexOf'](']]>', m51jor + 0x9);return piug2['startCDATA'](), piug2['characters'](aigp, m51jor + 0x9, t_x$q - m51jor - 0x9), piug2['endCDATA'](), t_x$q + 0x3;
      }var dx_$ = Bhn79s6(aigp, m51jor),
          wa8r3 = dx_$['length'];if (wa8r3 > 0x1 && /!doctype/i['test'](dx_$[0x0][0x0])) {
        var eai2w = dx_$[0x1][0x0],
            zlkvb4 = wa8r3 > 0x3 && /^public$/i['test'](dx_$[0x2][0x0]) && dx_$[0x3][0x0],
            _d$qtx = wa8r3 > 0x4 && dx_$[0x4][0x0],
            enpig = dx_$[wa8r3 - 0x1];return piug2['startDTD'](eai2w, zlkvb4 && zlkvb4['replace'](/^(['"])(.*?)\1$/, '$2'), _d$qtx && _d$qtx['replace'](/^(['"])(.*?)\1$/, '$2')), piug2['endDTD'](), enpig['index'] + enpig[0x0]['length'];
      }}return -0x1;
}function Bpiwe2(enuipg, hn7ugs, f8wr53) {
  var v0t$ = enuipg['indexOf']('?>', hn7ugs);if (v0t$) {
    var aw2f8 = enuipg['substring'](hn7ugs, v0t$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (aw2f8) {
      {
        aw2f8[0x0]['length'];
      }return f8wr53['processingInstruction'](aw2f8[0x1], aw2f8[0x2]), v0t$ + 0x2;
    }return -0x1;
  }return -0x1;
}function Biu2gep() {}function Blyv4$($xtvy0, l49kzb) {
  return $xtvy0['__proto__'] = l49kzb, $xtvy0;
}function Bhn79s6(i2pwae, ai2w) {
  var pgeai,
      enig = [],
      lv$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (lv$['lastIndex'] = ai2w, lv$['exec'](i2pwae); pgeai = lv$['exec'](i2pwae);) if (enig['push'](pgeai), pgeai[0x1]) return enig;
}var Bs967kh = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Bdx_t = new RegExp('[\\-\\.0-9' + Bs967kh['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Bqt_dx = new RegExp('^' + Bs967kh['source'] + Bdx_t['source'] + '*(?::' + Bs967kh['source'] + Bdx_t['source'] + '*)?$'),
    Bsu67n = 0x0,
    Blz94kb = 0x1,
    Byv40zl = 0x2,
    Bk6 = 0x3,
    Bwa8fr = 0x4,
    Bl9k4zb = 0x5,
    Bfr5m1j = 0x6,
    Bkzb9 = 0x7;Bv0zly['prototype'] = { 'parse': function (y$4lv0, ybzl, t0y_) {
    var usn7gh = this['domBuilder'];usn7gh['startDocument'](), Bvb4ly(ybzl, ybzl = {}), Bmjor51(y$4lv0, ybzl, t0y_, usn7gh, this['errorHandler']), usn7gh['endDocument']();
  } }, Biu2gep['prototype'] = { 'setTagName': function (dxq$t) {
    if (!Bqt_dx['test'](dxq$t)) throw new Error('invalid tagName:' + dxq$t);this['tagName'] = dxq$t;
  }, 'add': function (kz9hb6, yv4blz, e2aiw) {
    if (!Bqt_dx['test'](kz9hb6)) throw new Error('invalid attribute:' + kz9hb6);this[this['length']++] = { 'qName': kz9hb6, 'value': yv4blz, 'offset': e2aiw };
  }, 'length': 0x0, 'getLocalName': function (wi832a) {
    return this[wi832a]['localName'];
  }, 'getLocator': function (m1f5jr) {
    return this[m1f5jr]['locator'];
  }, 'getQName': function (s976hn) {
    return this[s976hn]['qName'];
  }, 'getURI': function (rmoj15) {
    return this[rmoj15]['uri'];
  }, 'getValue': function (v$0ytx) {
    return this[v$0ytx]['value'];
  } }, Blyv4$({}, Blyv4$['prototype']) instanceof Blyv4$ || (Blyv4$ = function ($40vl, b6hk97) {
  function p2eigu() {}p2eigu['prototype'] = b6hk97, p2eigu = new p2eigu();for (b6hk97 in $40vl) p2eigu[b6hk97] = $40vl[b6hk97];return p2eigu;
}), exports['XMLReader'] = Bv0zly;