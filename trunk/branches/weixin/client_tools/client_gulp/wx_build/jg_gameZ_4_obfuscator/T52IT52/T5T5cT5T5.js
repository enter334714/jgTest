var B = wx.$B;
function Bf83() {}function Bi3e2a(y0$4lv, f3a, t0$d, $l0vty, txy$0v) {
  function kzb496(gepnsu) {
    if (gepnsu > 0xffff) {
      gepnsu -= 0x10000;var e23i = 0xd800 + (gepnsu >> 0xa),
          h769ks = 0xdc00 + (0x3ff & gepnsu);return String['fromCharCode'](e23i, h769ks);
    }return String['fromCharCode'](gepnsu);
  }function gus7h(fj51r) {
    var e2iu = fj51r['slice'](0x1, -0x1);return e2iu in t0$d ? t0$d[e2iu] : '#' === e2iu['charAt'](0x0) ? kzb496(parseInt(e2iu['substr'](0x1)['replace']('x', '0x'))) : (txy$0v['error']('entity not found:' + fj51r), fj51r);
  }function ytv0x$(j1rmo) {
    if (j1rmo > bkl4z9) {
      var x$dt = y0$4lv['substring'](bkl4z9, j1rmo)['replace'](/&#?\w+;/g, gus7h);gep2ia && kh6b9(bkl4z9), $l0vty['characters'](x$dt, 0x0, j1rmo - bkl4z9), bkl4z9 = j1rmo;
    }
  }function kh6b9(sughn, igeup2) {
    for (; sughn >= ai238w && (igeup2 = jo5m['exec'](y0$4lv));) nuhs67 = igeup2['index'], ai238w = nuhs67 + igeup2[0x0]['length'], gep2ia['lineNumber']++;gep2ia['columnNumber'] = sughn - nuhs67 + 0x1;
  }for (var nuhs67 = 0x0, ai238w = 0x0, jo5m = /.*(?:\r\n?|\n)|.*$/g, gep2ia = $l0vty['locator'], y0x = [{ 'currentNSMap': f3a }], k7h69 = {}, bkl4z9 = 0x0;;) {
    try {
      var b9kz4l = y0$4lv['indexOf']('<', bkl4z9);if (0x0 > b9kz4l) {
        if (!y0$4lv['substr'](bkl4z9)['match'](/^\s*$/)) {
          var td_xq$ = $l0vty['doc'],
              ugi2ep = td_xq$['createTextNode'](y0$4lv['substr'](bkl4z9));td_xq$['appendChild'](ugi2ep), $l0vty['currentElement'] = ugi2ep;
        }return;
      }switch (b9kz4l > bkl4z9 && ytv0x$(b9kz4l), y0$4lv['charAt'](b9kz4l + 0x1)) {case '/':
          var j1r5 = y0$4lv['indexOf']('>', b9kz4l + 0x3),
              o1r = y0$4lv['substring'](b9kz4l + 0x2, j1r5),
              b49k = y0x['pop']();0x0 > j1r5 ? (o1r = y0$4lv['substring'](b9kz4l + 0x2)['replace'](/[\s<].*/, ''), txy$0v['error']('end tag name: ' + o1r + ' is not complete:' + b49k['tagName']), j1r5 = b9kz4l + 0x1 + o1r['length']) : o1r['match'](/\s</) && (o1r = o1r['replace'](/[\s<].*/, ''), txy$0v['error']('end tag name: ' + o1r + ' maybe not complete'), j1r5 = b9kz4l + 0x1 + o1r['length']);var $txd = b49k['localNSMap'],
              yxv0$t = b49k['tagName'] == o1r,
              r1om = yxv0$t || b49k['tagName'] && b49k['tagName']['toLowerCase']() == o1r['toLowerCase']();if (r1om) {
            if ($l0vty['endElement'](b49k['uri'], b49k['localName'], o1r), $txd) {
              for (var uepig in $txd) $l0vty['endPrefixMapping'](uepig);
            }yxv0$t || txy$0v['fatalError']('end tag name: ' + o1r + ' is not match the current start tagName:' + b49k['tagName']);
          } else y0x['push'](b49k);j1r5++;break;case '?':
          gep2ia && kh6b9(b9kz4l), j1r5 = B$yvtl(y0$4lv, b9kz4l, $l0vty);break;case '!':
          gep2ia && kh6b9(b9kz4l), j1r5 = Br58jf1(y0$4lv, b9kz4l, $l0vty, txy$0v);break;default:
          gep2ia && kh6b9(b9kz4l);var $0yt = new Bwr83af(),
              x$0_ = y0x[y0x['length'] - 0x1]['currentNSMap'],
              j1r5 = Bw5r3f(y0$4lv, b9kz4l, $0yt, x$0_, gus7h, txy$0v),
              puneg = $0yt['length'];if (!$0yt['closed'] && Bwa32f(y0$4lv, j1r5, $0yt['tagName'], k7h69) && ($0yt['closed'] = !0x0, t0$d['nbsp'] || txy$0v['warning']('unclosed xml attribute')), gep2ia && puneg) {
            for (var ai23e = Bp7sng(gep2ia, {}), $l4yv0 = 0x0; puneg > $l4yv0; $l4yv0++) {
              var y_t$x0 = $0yt[$l4yv0];kh6b9(y_t$x0['offset']), y_t$x0['locator'] = Bp7sng(gep2ia, {});
            }$l0vty['locator'] = ai23e, Bb49k6z($0yt, $l0vty, x$0_) && y0x['push']($0yt), $l0vty['locator'] = gep2ia;
          } else Bb49k6z($0yt, $l0vty, x$0_) && y0x['push']($0yt);'http://www.w3.org/1999/xhtml' !== $0yt['uri'] || $0yt['closed'] ? j1r5++ : j1r5 = Bsun(y0$4lv, j1r5, $0yt['tagName'], gus7h, $l0vty);}
    } catch (z69k) {
      txy$0v['error']('element parse error: ' + z69k), j1r5 = -0x1;
    }j1r5 > bkl4z9 ? bkl4z9 = j1r5 : ytv0x$(Math['max'](b9kz4l, bkl4z9) + 0x1);
  }
}function Bp7sng($0xytv, y_tx$0) {
  return y_tx$0['lineNumber'] = $0xytv['lineNumber'], y_tx$0['columnNumber'] = $0xytv['columnNumber'], y_tx$0;
}function Bw5r3f(klb49z, f5mjr, fw3r8a, zk4b96, s6hun7, w2ei) {
  for (var nh7s69, r58f1j, ra83fw = ++f5mjr, h96s = Buinp;;) {
    var far3w = klb49z['charAt'](ra83fw);switch (far3w) {case '=':
        if (h96s === B_0$xt) nh7s69 = klb49z['slice'](f5mjr, ra83fw), h96s = Blb4yv;else {
          if (h96s !== Bvlzb4y) throw new Error('attribute equal must after attrName');h96s = Blb4yv;
        }break;case '\x27':case '\x22':
        if (h96s === Blb4yv || h96s === B_0$xt) {
          if (h96s === B_0$xt && (w2ei['warning']('attribute value must after "="'), nh7s69 = klb49z['slice'](f5mjr, ra83fw)), f5mjr = ra83fw + 0x1, ra83fw = klb49z['indexOf'](far3w, f5mjr), !(ra83fw > 0x0)) throw new Error('attribute value no end \'' + far3w + '\' match');r58f1j = klb49z['slice'](f5mjr, ra83fw)['replace'](/&#?\w+;/g, s6hun7), fw3r8a['add'](nh7s69, r58f1j, f5mjr - 0x1), h96s = B$ly40;
        } else {
          if (h96s != Biwepa2) throw new Error('attribute value must after "="');r58f1j = klb49z['slice'](f5mjr, ra83fw)['replace'](/&#?\w+;/g, s6hun7), fw3r8a['add'](nh7s69, r58f1j, f5mjr), w2ei['warning']('attribute "' + nh7s69 + '" missed start quot(' + far3w + ')!!'), f5mjr = ra83fw + 0x1, h96s = B$ly40;
        }break;case '/':
        switch (h96s) {case Buinp:
            fw3r8a['setTagName'](klb49z['slice'](f5mjr, ra83fw));case B$ly40:case Byl4$v:case Bgh7nsu:
            h96s = Bgh7nsu, fw3r8a['closed'] = !0x0;case Biwepa2:case B_0$xt:case Bvlzb4y:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return w2ei['error']('unexpected end of input'), h96s == Buinp && fw3r8a['setTagName'](klb49z['slice'](f5mjr, ra83fw)), ra83fw;case '>':
        switch (h96s) {case Buinp:
            fw3r8a['setTagName'](klb49z['slice'](f5mjr, ra83fw));case B$ly40:case Byl4$v:case Bgh7nsu:
            break;case Biwepa2:case B_0$xt:
            r58f1j = klb49z['slice'](f5mjr, ra83fw), '/' === r58f1j['slice'](-0x1) && (fw3r8a['closed'] = !0x0, r58f1j = r58f1j['slice'](0x0, -0x1));case Bvlzb4y:
            h96s === Bvlzb4y && (r58f1j = nh7s69), h96s == Biwepa2 ? (w2ei['warning']('attribute "' + r58f1j + '" missed quot(")!!'), fw3r8a['add'](nh7s69, r58f1j['replace'](/&#?\w+;/g, s6hun7), f5mjr)) : ('http://www.w3.org/1999/xhtml' === zk4b96[''] && r58f1j['match'](/^(?:disabled|checked|selected)$/i) || w2ei['warning']('attribute "' + r58f1j + '" missed value!! "' + r58f1j + '" instead!!'), fw3r8a['add'](r58f1j, r58f1j, f5mjr));break;case Blb4yv:
            throw new Error('attribute value missed!!');}return ra83fw;case '\u0080':
        far3w = '\x20';default:
        if ('\x20' >= far3w) switch (h96s) {case Buinp:
            fw3r8a['setTagName'](klb49z['slice'](f5mjr, ra83fw)), h96s = Byl4$v;break;case B_0$xt:
            nh7s69 = klb49z['slice'](f5mjr, ra83fw), h96s = Bvlzb4y;break;case Biwepa2:
            var r58f1j = klb49z['slice'](f5mjr, ra83fw)['replace'](/&#?\w+;/g, s6hun7);w2ei['warning']('attribute "' + r58f1j + '" missed quot(")!!'), fw3r8a['add'](nh7s69, r58f1j, f5mjr);case B$ly40:
            h96s = Byl4$v;} else switch (h96s) {case Bvlzb4y:
            {
              fw3r8a['tagName'];
            }'http://www.w3.org/1999/xhtml' === zk4b96[''] && nh7s69['match'](/^(?:disabled|checked|selected)$/i) || w2ei['warning']('attribute "' + nh7s69 + '" missed value!! "' + nh7s69 + '" instead2!!'), fw3r8a['add'](nh7s69, nh7s69, f5mjr), f5mjr = ra83fw, h96s = B_0$xt;break;case B$ly40:
            w2ei['warning']('attribute space is required"' + nh7s69 + '\x22!!');case Byl4$v:
            h96s = B_0$xt, f5mjr = ra83fw;break;case Blb4yv:
            h96s = Biwepa2, f5mjr = ra83fw;break;case Bgh7nsu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ra83fw++;
  }
}function Bb49k6z(zl4, $xy_, gpesnu) {
  for (var w2iep = zl4['tagName'], d$_t0x = null, blzv4y = zl4['length']; blzv4y--;) {
    var f8w5r = zl4[blzv4y],
        h96ns = f8w5r['qName'],
        pguien = f8w5r['value'],
        gps7n = h96ns['indexOf'](':');if (gps7n > 0x0) var gseup = f8w5r['prefix'] = h96ns['slice'](0x0, gps7n),
        gue2i = h96ns['slice'](gps7n + 0x1),
        h7b6k9 = 'xmlns' === gseup && gue2i;else gue2i = h96ns, gseup = null, h7b6k9 = 'xmlns' === h96ns && '';f8w5r['localName'] = gue2i, h7b6k9 !== !0x1 && (null == d$_t0x && (d$_t0x = {}, Bdq$_tx(gpesnu, gpesnu = {})), gpesnu[h7b6k9] = d$_t0x[h7b6k9] = pguien, f8w5r['uri'] = 'http://www.w3.org/2000/xmlns/', $xy_['startPrefixMapping'](h7b6k9, pguien));
  }for (var blzv4y = zl4['length']; blzv4y--;) {
    f8w5r = zl4[blzv4y];var gseup = f8w5r['prefix'];gseup && ('xml' === gseup && (f8w5r['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gseup && (f8w5r['uri'] = gpesnu[gseup || '']));
  }var gps7n = w2iep['indexOf'](':');gps7n > 0x0 ? (gseup = zl4['prefix'] = w2iep['slice'](0x0, gps7n), gue2i = zl4['localName'] = w2iep['slice'](gps7n + 0x1)) : (gseup = null, gue2i = zl4['localName'] = w2iep);var euni = zl4['uri'] = gpesnu[gseup || ''];if ($xy_['startElement'](euni, gue2i, w2iep, zl4), !zl4['closed']) return zl4['currentNSMap'] = gpesnu, zl4['localNSMap'] = d$_t0x, !0x0;if ($xy_['endElement'](euni, gue2i, w2iep), d$_t0x) {
    for (gseup in d$_t0x) $xy_['endPrefixMapping'](gseup);
  }
}function Bsun(vzblk, t_$qdx, f1rj, q$dxt, xy_$) {
  if (/^(?:script|textarea)$/i['test'](f1rj)) {
    var nugei = vzblk['indexOf']('</' + f1rj + '>', t_$qdx),
        yt0lv$ = vzblk['substring'](t_$qdx + 0x1, nugei);if (/[&<]/['test'](yt0lv$)) return (/^script$/i['test'](f1rj) ? (xy_$['characters'](yt0lv$, 0x0, yt0lv$['length']), nugei) : (yt0lv$ = yt0lv$['replace'](/&#?\w+;/g, q$dxt), xy_$['characters'](yt0lv$, 0x0, yt0lv$['length']), nugei)
    );
  }return t_$qdx + 0x1;
}function Bwa32f(ngupei, i23awe, igp2u, n7hus) {
  var jr58f1 = n7hus[igp2u];return null == jr58f1 && (jr58f1 = ngupei['lastIndexOf']('</' + igp2u + '>'), i23awe > jr58f1 && (jr58f1 = ngupei['lastIndexOf']('</' + igp2u)), n7hus[igp2u] = jr58f1), i23awe > jr58f1;
}function Bdq$_tx(ue2pig, vzlb4) {
  for (var ueigp2 in ue2pig) vzlb4[ueigp2] = ue2pig[ueigp2];
}function Br58jf1(vt$yx, f583j, iw2ae3, zy4v0l) {
  var _$0yx = vt$yx['charAt'](f583j + 0x2);switch (_$0yx) {case '-':
      if ('-' === vt$yx['charAt'](f583j + 0x3)) {
        var hk6z = vt$yx['indexOf']('-->', f583j + 0x4);return hk6z > f583j ? (iw2ae3['comment'](vt$yx, f583j + 0x4, hk6z - f583j - 0x4), hk6z + 0x3) : (zy4v0l['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == vt$yx['substr'](f583j + 0x3, 0x6)) {
        var hk6z = vt$yx['indexOf'](']]>', f583j + 0x9);return iw2ae3['startCDATA'](), iw2ae3['characters'](vt$yx, f583j + 0x9, hk6z - f583j - 0x9), iw2ae3['endCDATA'](), hk6z + 0x3;
      }var uiegp2 = Bk6hz9(vt$yx, f583j),
          bkh69z = uiegp2['length'];if (bkh69z > 0x1 && /!doctype/i['test'](uiegp2[0x0][0x0])) {
        var y4vzb = uiegp2[0x1][0x0],
            f58j = bkh69z > 0x3 && /^public$/i['test'](uiegp2[0x2][0x0]) && uiegp2[0x3][0x0],
            ushg7n = bkh69z > 0x4 && uiegp2[0x4][0x0],
            r8fw = uiegp2[bkh69z - 0x1];return iw2ae3['startDTD'](y4vzb, f58j && f58j['replace'](/^(['"])(.*?)\1$/, '$2'), ushg7n && ushg7n['replace'](/^(['"])(.*?)\1$/, '$2')), iw2ae3['endDTD'](), r8fw['index'] + r8fw[0x0]['length'];
      }}return -0x1;
}function B$yvtl(aw32i8, gaeip, u7hs) {
  var f518 = aw32i8['indexOf']('?>', gaeip);if (f518) {
    var r3 = aw32i8['substring'](gaeip, f518)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r3) {
      {
        r3[0x0]['length'];
      }return u7hs['processingInstruction'](r3[0x1], r3[0x2]), f518 + 0x2;
    }return -0x1;
  }return -0x1;
}function Bwr83af() {}function Bpnusge(r518jf, k7bh69) {
  return r518jf['__proto__'] = k7bh69, r518jf;
}function Bk6hz9(t0lv$y, yvblz) {
  var yt$vl0,
      zly40v = [],
      xdq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (xdq['lastIndex'] = yvblz, xdq['exec'](t0lv$y); yt$vl0 = xdq['exec'](t0lv$y);) if (zly40v['push'](yt$vl0), yt$vl0[0x1]) return zly40v;
}var Blzvyb = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    B$_xqd = new RegExp('[\\-\\.0-9' + Blzvyb['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Bw5f3r8 = new RegExp('^' + Blzvyb['source'] + B$_xqd['source'] + '*(?::' + Blzvyb['source'] + B$_xqd['source'] + '*)?$'),
    Buinp = 0x0,
    B_0$xt = 0x1,
    Bvlzb4y = 0x2,
    Blb4yv = 0x3,
    Biwepa2 = 0x4,
    B$ly40 = 0x5,
    Byl4$v = 0x6,
    Bgh7nsu = 0x7;Bf83['prototype'] = { 'parse': function ($x0t, aiw38, yl$4) {
    var ea2p = this['domBuilder'];ea2p['startDocument'](), Bdq$_tx(aiw38, aiw38 = {}), Bi3e2a($x0t, aiw38, yl$4, ea2p, this['errorHandler']), ea2p['endDocument']();
  } }, Bwr83af['prototype'] = { 'setTagName': function (ewp) {
    if (!Bw5f3r8['test'](ewp)) throw new Error('invalid tagName:' + ewp);this['tagName'] = ewp;
  }, 'add': function ($0tx_, eig2pu, neigp) {
    if (!Bw5f3r8['test']($0tx_)) throw new Error('invalid attribute:' + $0tx_);this[this['length']++] = { 'qName': $0tx_, 'value': eig2pu, 'offset': neigp };
  }, 'length': 0x0, 'getLocalName': function (rj158) {
    return this[rj158]['localName'];
  }, 'getLocator': function (ytvl0) {
    return this[ytvl0]['locator'];
  }, 'getQName': function (mfj5r) {
    return this[mfj5r]['qName'];
  }, 'getURI': function (z40lyv) {
    return this[z40lyv]['uri'];
  }, 'getValue': function (fj8r5) {
    return this[fj8r5]['value'];
  } }, Bpnusge({}, Bpnusge['prototype']) instanceof Bpnusge || (Bpnusge = function (vbk, w58r3) {
  function b9hk76() {}b9hk76['prototype'] = w58r3, b9hk76 = new b9hk76();for (w58r3 in vbk) b9hk76[w58r3] = vbk[w58r3];return b9hk76;
}), exports['XMLReader'] = Bf83;