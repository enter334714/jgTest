var B = wx.$z;
function zn6f7vl() {}function zdzyko(aztode, lm3i7, yztkd, n3q, r5w) {
  function xset(ok8dyb) {
    if (ok8dyb > 0xffff) {
      ok8dyb -= 0x10000;var m$7i = 0xd800 + (ok8dyb >> 0xa),
          sxh91 = 0xdc00 + (0x3ff & ok8dyb);return String['fromCharCode'](m$7i, sxh91);
    }return String['fromCharCode'](ok8dyb);
  }function ezxs(xph1g9) {
    var k8br_ = xph1g9['slice'](0x1, -0x1);return k8br_ in yztkd ? yztkd[k8br_] : '#' === k8br_['charAt'](0x0) ? xset(parseInt(k8br_['substr'](0x1)['replace']('x', '0x'))) : (r5w['error']('entity not found:' + xph1g9), xph1g9);
  }function zoes(vlimn) {
    if (vlimn > etzxas) {
      var nilf7v = aztode['substring'](etzxas, vlimn)['replace'](/&#?\w+;/g, ezxs);_25b && p91hgx(etzxas), n3q['characters'](nilf7v, 0x0, vlimn - etzxas), etzxas = vlimn;
    }
  }function p91hgx(oaszt, ydeo) {
    for (; oaszt >= _k8by && (ydeo = ozdky['exec'](aztode));) n3iml = ydeo['index'], _k8by = n3iml + ydeo[0x0]['length'], _25b['lineNumber']++;_25b['columnNumber'] = oaszt - n3iml + 0x1;
  }for (var n3iml = 0x0, _k8by = 0x0, ozdky = /.*(?:\r\n?|\n)|.*$/g, _25b = n3q['locator'], oazet = [{ 'currentNSMap': lm3i7 }], h1p = {}, etzxas = 0x0;;) {
    try {
      var gf6pv4 = aztode['indexOf']('<', etzxas);if (0x0 > gf6pv4) {
        if (!aztode['substr'](etzxas)['match'](/^\s*$/)) {
          var w_25u = n3q['doc'],
              vfli7n = w_25u['createTextNode'](aztode['substr'](etzxas));w_25u['appendChild'](vfli7n), n3q['currentElement'] = vfli7n;
        }return;
      }switch (gf6pv4 > etzxas && zoes(gf6pv4), aztode['charAt'](gf6pv4 + 0x1)) {case '/':
          var limn7v = aztode['indexOf']('>', gf6pv4 + 0x3),
              g91hpx = aztode['substring'](gf6pv4 + 0x2, limn7v),
              qmn37i = oazet['pop']();0x0 > limn7v ? (g91hpx = aztode['substring'](gf6pv4 + 0x2)['replace'](/[\s<].*/, ''), r5w['error']('end tag name: ' + g91hpx + ' is not complete:' + qmn37i['tagName']), limn7v = gf6pv4 + 0x1 + g91hpx['length']) : g91hpx['match'](/\s</) && (g91hpx = g91hpx['replace'](/[\s<].*/, ''), r5w['error']('end tag name: ' + g91hpx + ' maybe not complete'), limn7v = gf6pv4 + 0x1 + g91hpx['length']);var p1xg9h = qmn37i['localNSMap'],
              p1hxs = qmn37i['tagName'] == g91hpx,
              k_y8rb = p1hxs || qmn37i['tagName'] && qmn37i['tagName']['toLowerCase']() == g91hpx['toLowerCase']();if (k_y8rb) {
            if (n3q['endElement'](qmn37i['uri'], qmn37i['localName'], g91hpx), p1xg9h) {
              for (var f67lnv in p1xg9h) n3q['endPrefixMapping'](f67lnv);
            }p1hxs || r5w['fatalError']('end tag name: ' + g91hpx + ' is not match the current start tagName:' + qmn37i['tagName']);
          } else oazet['push'](qmn37i);limn7v++;break;case '?':
          _25b && p91hgx(gf6pv4), limn7v = zk58_br(aztode, gf6pv4, n3q);break;case '!':
          _25b && p91hgx(gf6pv4), limn7v = zk8o(aztode, gf6pv4, n3q, r5w);break;default:
          _25b && p91hgx(gf6pv4);var i7nflv = new zkr_yb(),
              ln3 = oazet[oazet['length'] - 0x1]['currentNSMap'],
              limn7v = zzykdt(aztode, gf6pv4, i7nflv, ln3, ezxs, r5w),
              seatzx = i7nflv['length'];if (!i7nflv['closed'] && z_bryk8(aztode, limn7v, i7nflv['tagName'], h1p) && (i7nflv['closed'] = !0x0, yztkd['nbsp'] || r5w['warning']('unclosed xml attribute')), _25b && seatzx) {
            for (var xsp91 = zoteazd(_25b, {}), uw2 = 0x0; seatzx > uw2; uw2++) {
              var inlvm7 = i7nflv[uw2];p91hgx(inlvm7['offset']), inlvm7['locator'] = zoteazd(_25b, {});
            }n3q['locator'] = xsp91, zf7nilv(i7nflv, n3q, ln3) && oazet['push'](i7nflv), n3q['locator'] = _25b;
          } else zf7nilv(i7nflv, n3q, ln3) && oazet['push'](i7nflv);'http://www.w3.org/1999/xhtml' !== i7nflv['uri'] || i7nflv['closed'] ? limn7v++ : limn7v = zx19ah(aztode, limn7v, i7nflv['tagName'], ezxs, n3q);}
    } catch (saxzt) {
      r5w['error']('element parse error: ' + saxzt), limn7v = -0x1;
    }limn7v > etzxas ? etzxas = limn7v : zoes(Math['max'](gf6pv4, etzxas) + 0x1);
  }
}function zoteazd(lvn7if, bdtkyo) {
  return bdtkyo['lineNumber'] = lvn7if['lineNumber'], bdtkyo['columnNumber'] = lvn7if['columnNumber'], bdtkyo;
}function zzykdt(ztso, urw_, ax1hs9, brkyd8, dtaoze, eaxs19) {
  for (var i$q3mj, dtzao, v6g4fl = ++urw_, b_8rky = zn7vil;;) {
    var u052w_ = ztso['charAt'](v6g4fl);switch (u052w_) {case '=':
        if (b_8rky === zbkdoy8) i$q3mj = ztso['slice'](urw_, v6g4fl), b_8rky = zhpg914;else {
          if (b_8rky !== zbkryd) throw new Error('attribute equal must after attrName');b_8rky = zhpg914;
        }break;case '\x27':case '\x22':
        if (b_8rky === zhpg914 || b_8rky === zbkdoy8) {
          if (b_8rky === zbkdoy8 && (eaxs19['warning']('attribute value must after "="'), i$q3mj = ztso['slice'](urw_, v6g4fl)), urw_ = v6g4fl + 0x1, v6g4fl = ztso['indexOf'](u052w_, urw_), !(v6g4fl > 0x0)) throw new Error('attribute value no end \'' + u052w_ + '\' match');dtzao = ztso['slice'](urw_, v6g4fl)['replace'](/&#?\w+;/g, dtaoze), ax1hs9['add'](i$q3mj, dtzao, urw_ - 0x1), b_8rky = zexzsa9;
        } else {
          if (b_8rky != zw_25ru) throw new Error('attribute value must after "="');dtzao = ztso['slice'](urw_, v6g4fl)['replace'](/&#?\w+;/g, dtaoze), ax1hs9['add'](i$q3mj, dtzao, urw_), eaxs19['warning']('attribute "' + i$q3mj + '" missed start quot(' + u052w_ + ')!!'), urw_ = v6g4fl + 0x1, b_8rky = zexzsa9;
        }break;case '/':
        switch (b_8rky) {case zn7vil:
            ax1hs9['setTagName'](ztso['slice'](urw_, v6g4fl));case zexzsa9:case zlnim73:case ztoybk:
            b_8rky = ztoybk, ax1hs9['closed'] = !0x0;case zw_25ru:case zbkdoy8:case zbkryd:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return eaxs19['error']('unexpected end of input'), b_8rky == zn7vil && ax1hs9['setTagName'](ztso['slice'](urw_, v6g4fl)), v6g4fl;case '>':
        switch (b_8rky) {case zn7vil:
            ax1hs9['setTagName'](ztso['slice'](urw_, v6g4fl));case zexzsa9:case zlnim73:case ztoybk:
            break;case zw_25ru:case zbkdoy8:
            dtzao = ztso['slice'](urw_, v6g4fl), '/' === dtzao['slice'](-0x1) && (ax1hs9['closed'] = !0x0, dtzao = dtzao['slice'](0x0, -0x1));case zbkryd:
            b_8rky === zbkryd && (dtzao = i$q3mj), b_8rky == zw_25ru ? (eaxs19['warning']('attribute "' + dtzao + '" missed quot(")!!'), ax1hs9['add'](i$q3mj, dtzao['replace'](/&#?\w+;/g, dtaoze), urw_)) : ('http://www.w3.org/1999/xhtml' === brkyd8[''] && dtzao['match'](/^(?:disabled|checked|selected)$/i) || eaxs19['warning']('attribute "' + dtzao + '" missed value!! "' + dtzao + '" instead!!'), ax1hs9['add'](dtzao, dtzao, urw_));break;case zhpg914:
            throw new Error('attribute value missed!!');}return v6g4fl;case '\u0080':
        u052w_ = '\x20';default:
        if ('\x20' >= u052w_) switch (b_8rky) {case zn7vil:
            ax1hs9['setTagName'](ztso['slice'](urw_, v6g4fl)), b_8rky = zlnim73;break;case zbkdoy8:
            i$q3mj = ztso['slice'](urw_, v6g4fl), b_8rky = zbkryd;break;case zw_25ru:
            var dtzao = ztso['slice'](urw_, v6g4fl)['replace'](/&#?\w+;/g, dtaoze);eaxs19['warning']('attribute "' + dtzao + '" missed quot(")!!'), ax1hs9['add'](i$q3mj, dtzao, urw_);case zexzsa9:
            b_8rky = zlnim73;} else switch (b_8rky) {case zbkryd:
            {
              ax1hs9['tagName'];
            }'http://www.w3.org/1999/xhtml' === brkyd8[''] && i$q3mj['match'](/^(?:disabled|checked|selected)$/i) || eaxs19['warning']('attribute "' + i$q3mj + '" missed value!! "' + i$q3mj + '" instead2!!'), ax1hs9['add'](i$q3mj, i$q3mj, urw_), urw_ = v6g4fl, b_8rky = zbkdoy8;break;case zexzsa9:
            eaxs19['warning']('attribute space is required"' + i$q3mj + '\x22!!');case zlnim73:
            b_8rky = zbkdoy8, urw_ = v6g4fl;break;case zhpg914:
            b_8rky = zw_25ru, urw_ = v6g4fl;break;case ztoybk:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}v6g4fl++;
  }
}function zf7nilv(p14gh, _rwu, adzet) {
  for (var todyb = p14gh['tagName'], sotaez = null, kbdry8 = p14gh['length']; kbdry8--;) {
    var q7nim3 = p14gh[kbdry8],
        e1xs = q7nim3['qName'],
        etsazo = q7nim3['value'],
        xas19e = e1xs['indexOf'](':');if (xas19e > 0x0) var f64vl = q7nim3['prefix'] = e1xs['slice'](0x0, xas19e),
        b8kdoy = e1xs['slice'](xas19e + 0x1),
        g1h4p9 = 'xmlns' === f64vl && b8kdoy;else b8kdoy = e1xs, f64vl = null, g1h4p9 = 'xmlns' === e1xs && '';q7nim3['localName'] = b8kdoy, g1h4p9 !== !0x1 && (null == sotaez && (sotaez = {}, zgp4fh6(adzet, adzet = {})), adzet[g1h4p9] = sotaez[g1h4p9] = etsazo, q7nim3['uri'] = 'http://www.w3.org/2000/xmlns/', _rwu['startPrefixMapping'](g1h4p9, etsazo));
  }for (var kbdry8 = p14gh['length']; kbdry8--;) {
    q7nim3 = p14gh[kbdry8];var f64vl = q7nim3['prefix'];f64vl && ('xml' === f64vl && (q7nim3['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== f64vl && (q7nim3['uri'] = adzet[f64vl || '']));
  }var xas19e = todyb['indexOf'](':');xas19e > 0x0 ? (f64vl = p14gh['prefix'] = todyb['slice'](0x0, xas19e), b8kdoy = p14gh['localName'] = todyb['slice'](xas19e + 0x1)) : (f64vl = null, b8kdoy = p14gh['localName'] = todyb);var edyot = p14gh['uri'] = adzet[f64vl || ''];if (_rwu['startElement'](edyot, b8kdoy, todyb, p14gh), !p14gh['closed']) return p14gh['currentNSMap'] = adzet, p14gh['localNSMap'] = sotaez, !0x0;if (_rwu['endElement'](edyot, b8kdoy, todyb), sotaez) {
    for (f64vl in sotaez) _rwu['endPrefixMapping'](f64vl);
  }
}function zx19ah(ztoey, ktoyzd, etzda, x91esa, datoz) {
  if (/^(?:script|textarea)$/i['test'](etzda)) {
    var x9easz = ztoey['indexOf']('</' + etzda + '>', ktoyzd),
        xgp9h1 = ztoey['substring'](ktoyzd + 0x1, x9easz);if (/[&<]/['test'](xgp9h1)) return (/^script$/i['test'](etzda) ? (datoz['characters'](xgp9h1, 0x0, xgp9h1['length']), x9easz) : (xgp9h1 = xgp9h1['replace'](/&#?\w+;/g, x91esa), datoz['characters'](xgp9h1, 0x0, xgp9h1['length']), x9easz)
    );
  }return ktoyzd + 0x1;
}function z_bryk8(hx1gp, xzae, edyozt, uwr2_) {
  var dzeota = uwr2_[edyozt];return null == dzeota && (dzeota = hx1gp['lastIndexOf']('</' + edyozt + '>'), xzae > dzeota && (dzeota = hx1gp['lastIndexOf']('</' + edyozt)), uwr2_[edyozt] = dzeota), xzae > dzeota;
}function zgp4fh6(ezaso, phx1) {
  for (var r_85u2 in ezaso) phx1[r_85u2] = ezaso[r_85u2];
}function zk8o(dy8rb, oetdza, oydb, tyzk) {
  var vml7in = dy8rb['charAt'](oetdza + 0x2);switch (vml7in) {case '-':
      if ('-' === dy8rb['charAt'](oetdza + 0x3)) {
        var aedozt = dy8rb['indexOf']('-->', oetdza + 0x4);return aedozt > oetdza ? (oydb['comment'](dy8rb, oetdza + 0x4, aedozt - oetdza - 0x4), aedozt + 0x3) : (tyzk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == dy8rb['substr'](oetdza + 0x3, 0x6)) {
        var aedozt = dy8rb['indexOf'](']]>', oetdza + 0x9);return oydb['startCDATA'](), oydb['characters'](dy8rb, oetdza + 0x9, aedozt - oetdza - 0x9), oydb['endCDATA'](), aedozt + 0x3;
      }var sh91xa = zx9ha(dy8rb, oetdza),
          ijmq$3 = sh91xa['length'];if (ijmq$3 > 0x1 && /!doctype/i['test'](sh91xa[0x0][0x0])) {
        var _58ur2 = sh91xa[0x1][0x0],
            axz = ijmq$3 > 0x3 && /^public$/i['test'](sh91xa[0x2][0x0]) && sh91xa[0x3][0x0],
            oyktbd = ijmq$3 > 0x4 && sh91xa[0x4][0x0],
            p9x1h = sh91xa[ijmq$3 - 0x1];return oydb['startDTD'](_58ur2, axz && axz['replace'](/^(['"])(.*?)\1$/, '$2'), oyktbd && oyktbd['replace'](/^(['"])(.*?)\1$/, '$2')), oydb['endDTD'](), p9x1h['index'] + p9x1h[0x0]['length'];
      }}return -0x1;
}function zk58_br(n37li, r28b, inlm7v) {
  var k5b8_ = n37li['indexOf']('?>', r28b);if (k5b8_) {
    var yetdzo = n37li['substring'](r28b, k5b8_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (yetdzo) {
      {
        yetdzo[0x0]['length'];
      }return inlm7v['processingInstruction'](yetdzo[0x1], yetdzo[0x2]), k5b8_ + 0x2;
    }return -0x1;
  }return -0x1;
}function zkr_yb() {}function zqm7i3$(xghp, atz) {
  return xghp['__proto__'] = atz, xghp;
}function zx9ha(eaztod, ydrbk) {
  var f6lg4v,
      aseztx = [],
      dk8boy = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dk8boy['lastIndex'] = ydrbk, dk8boy['exec'](eaztod); f6lg4v = dk8boy['exec'](eaztod);) if (aseztx['push'](f6lg4v), f6lg4v[0x1]) return aseztx;
}var zztaeso = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    z_r285 = new RegExp('[\\-\\.0-9' + zztaeso['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zk_rb8 = new RegExp('^' + zztaeso['source'] + z_r285['source'] + '*(?::' + zztaeso['source'] + z_r285['source'] + '*)?$'),
    zn7vil = 0x0,
    zbkdoy8 = 0x1,
    zbkryd = 0x2,
    zhpg914 = 0x3,
    zw_25ru = 0x4,
    zexzsa9 = 0x5,
    zlnim73 = 0x6,
    ztoybk = 0x7;zn6f7vl['prototype'] = { 'parse': function (r8dyk, px1hs, _k8b5r) {
    var i7$q = this['domBuilder'];i7$q['startDocument'](), zgp4fh6(px1hs, px1hs = {}), zdzyko(r8dyk, px1hs, _k8b5r, i7$q, this['errorHandler']), i7$q['endDocument']();
  } }, zkr_yb['prototype'] = { 'setTagName': function (lnf7vi) {
    if (!zk_rb8['test'](lnf7vi)) throw new Error('invalid tagName:' + lnf7vi);this['tagName'] = lnf7vi;
  }, 'add': function (q$3jm, b8dok, g41p) {
    if (!zk_rb8['test'](q$3jm)) throw new Error('invalid attribute:' + q$3jm);this[this['length']++] = { 'qName': q$3jm, 'value': b8dok, 'offset': g41p };
  }, 'length': 0x0, 'getLocalName': function (tesaxz) {
    return this[tesaxz]['localName'];
  }, 'getLocator': function (lim7nv) {
    return this[lim7nv]['locator'];
  }, 'getQName': function (oeats) {
    return this[oeats]['qName'];
  }, 'getURI': function (zaxtse) {
    return this[zaxtse]['uri'];
  }, 'getValue': function (nvl4f6) {
    return this[nvl4f6]['value'];
  } }, zqm7i3$({}, zqm7i3$['prototype']) instanceof zqm7i3$ || (zqm7i3$ = function (yotb, toky) {
  function kodb8() {}kodb8['prototype'] = toky, kodb8 = new kodb8();for (toky in yotb) kodb8[toky] = yotb[toky];return kodb8;
}), exports['XMLReader'] = zn6f7vl;