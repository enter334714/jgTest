var c = wx.$a;
function gjfs12x() {}function gey_4o(tr53p7, hkdz6, mb$yl, gsfx2, ycl0b$) {
  function gwe12u(x1fu2) {
    if (x1fu2 > 0xffff) {
      x1fu2 -= 0x10000;var $yboc = 0xd800 + (x1fu2 >> 0xa),
          ob0y$ = 0xdc00 + (0x3ff & x1fu2);return String['fromCharCode']($yboc, ob0y$);
    }return String['fromCharCode'](x1fu2);
  }function cb04yo(w2ue1) {
    var nfvjxs = w2ue1['slice'](0x1, -0x1);return nfvjxs in mb$yl ? mb$yl[nfvjxs] : '#' === nfvjxs['charAt'](0x0) ? gwe12u(parseInt(nfvjxs['substr'](0x1)['replace']('x', '0x'))) : (ycl0b$['error']('entity not found:' + w2ue1), w2ue1);
  }function kz6hdq(nf1xjs) {
    if (nf1xjs > $0blc) {
      var dt5r8 = tr53p7['substring']($0blc, nf1xjs)['replace'](/&#?\w+;/g, cb04yo);fgux2 && obc04($0blc), gsfx2['characters'](dt5r8, 0x0, nf1xjs - $0blc), $0blc = nf1xjs;
    }
  }function obc04(vzjhsn, by0o$) {
    for (; vzjhsn >= fx2gu1 && (by0o$ = qkdzh6['exec'](tr53p7));) kd8zq6 = by0o$['index'], fx2gu1 = kd8zq6 + by0o$[0x0]['length'], fgux2['lineNumber']++;fgux2['columnNumber'] = vzjhsn - kd8zq6 + 0x1;
  }for (var kd8zq6 = 0x0, fx2gu1 = 0x0, qkdzh6 = /.*(?:\r\n?|\n)|.*$/g, fgux2 = gsfx2['locator'], v6zknh = [{ 'currentNSMap': hkdz6 }], c0o4by = {}, $0blc = 0x0;;) {
    try {
      var q6dk8t = tr53p7['indexOf']('<', $0blc);if (0x0 > q6dk8t) {
        if (!tr53p7['substr']($0blc)['match'](/^\s*$/)) {
          var fx1nj = gsfx2['doc'],
              xsf21 = fx1nj['createTextNode'](tr53p7['substr']($0blc));fx1nj['appendChild'](xsf21), gsfx2['currentElement'] = xsf21;
        }return;
      }switch (q6dk8t > $0blc && kz6hdq(q6dk8t), tr53p7['charAt'](q6dk8t + 0x1)) {case '/':
          var jnfx1s = tr53p7['indexOf']('>', q6dk8t + 0x3),
              _04oye = tr53p7['substring'](q6dk8t + 0x2, jnfx1s),
              ewu2g = v6zknh['pop']();0x0 > jnfx1s ? (_04oye = tr53p7['substring'](q6dk8t + 0x2)['replace'](/[\s<].*/, ''), ycl0b$['error']('end tag name: ' + _04oye + ' is not complete:' + ewu2g['tagName']), jnfx1s = q6dk8t + 0x1 + _04oye['length']) : _04oye['match'](/\s</) && (_04oye = _04oye['replace'](/[\s<].*/, ''), ycl0b$['error']('end tag name: ' + _04oye + ' maybe not complete'), jnfx1s = q6dk8t + 0x1 + _04oye['length']);var hkd6z = ewu2g['localNSMap'],
              jfnx1s = ewu2g['tagName'] == _04oye,
              xfnj1 = jfnx1s || ewu2g['tagName'] && ewu2g['tagName']['toLowerCase']() == _04oye['toLowerCase']();if (xfnj1) {
            if (gsfx2['endElement'](ewu2g['uri'], ewu2g['localName'], _04oye), hkd6z) {
              for (var zqhk in hkd6z) gsfx2['endPrefixMapping'](zqhk);
            }jfnx1s || ycl0b$['fatalError']('end tag name: ' + _04oye + ' is not match the current start tagName:' + ewu2g['tagName']);
          } else v6zknh['push'](ewu2g);jnfx1s++;break;case '?':
          fgux2 && obc04(q6dk8t), jnfx1s = glcm$(tr53p7, q6dk8t, gsfx2);break;case '!':
          fgux2 && obc04(q6dk8t), jnfx1s = gu21fw(tr53p7, q6dk8t, gsfx2, ycl0b$);break;default:
          fgux2 && obc04(q6dk8t);var t57pr3 = new gkz6dqh(),
              $almcb = v6zknh[v6zknh['length'] - 0x1]['currentNSMap'],
              jnfx1s = g$ycbo(tr53p7, q6dk8t, t57pr3, $almcb, cb04yo, ycl0b$),
              fg1u2w = t57pr3['length'];if (!t57pr3['closed'] && gsjvxfn(tr53p7, jnfx1s, t57pr3['tagName'], c0o4by) && (t57pr3['closed'] = !0x0, mb$yl['nbsp'] || ycl0b$['warning']('unclosed xml attribute')), fgux2 && fg1u2w) {
            for (var r3pi75 = gyc0lb(fgux2, {}), my$bl = 0x0; fg1u2w > my$bl; my$bl++) {
              var zhvk = t57pr3[my$bl];obc04(zhvk['offset']), zhvk['locator'] = gyc0lb(fgux2, {});
            }gsfx2['locator'] = r3pi75, geo_w04(t57pr3, gsfx2, $almcb) && v6zknh['push'](t57pr3), gsfx2['locator'] = fgux2;
          } else geo_w04(t57pr3, gsfx2, $almcb) && v6zknh['push'](t57pr3);'http://www.w3.org/1999/xhtml' !== t57pr3['uri'] || t57pr3['closed'] ? jnfx1s++ : jnfx1s = gg1f2uw(tr53p7, jnfx1s, t57pr3['tagName'], cb04yo, gsfx2);}
    } catch (t8dq5) {
      ycl0b$['error']('element parse error: ' + t8dq5), jnfx1s = -0x1;
    }jnfx1s > $0blc ? $0blc = jnfx1s : kz6hdq(Math['max'](q6dk8t, $0blc) + 0x1);
  }
}function gyc0lb(z6dqh, oew04) {
  return oew04['lineNumber'] = z6dqh['lineNumber'], oew04['columnNumber'] = z6dqh['columnNumber'], oew04;
}function g$ycbo(ew_0o4, c$alb, knzhjv, gw_2ue, hdq6k, khvzj) {
  for (var g1u2wf, $malc, nk6vh = ++c$alb, y40bo = ggw2u_e;;) {
    var d6vzhk = ew_0o4['charAt'](nk6vh);switch (d6vzhk) {case '=':
        if (y40bo === gjkznh) g1u2wf = ew_0o4['slice'](c$alb, nk6vh), y40bo = gr7t8;else {
          if (y40bo !== gq86dr) throw new Error('attribute equal must after attrName');y40bo = gr7t8;
        }break;case '\x27':case '\x22':
        if (y40bo === gr7t8 || y40bo === gjkznh) {
          if (y40bo === gjkznh && (khvzj['warning']('attribute value must after "="'), g1u2wf = ew_0o4['slice'](c$alb, nk6vh)), c$alb = nk6vh + 0x1, nk6vh = ew_0o4['indexOf'](d6vzhk, c$alb), !(nk6vh > 0x0)) throw new Error('attribute value no end \'' + d6vzhk + '\' match');$malc = ew_0o4['slice'](c$alb, nk6vh)['replace'](/&#?\w+;/g, hdq6k), knzhjv['add'](g1u2wf, $malc, c$alb - 0x1), y40bo = gsx2gf;
        } else {
          if (y40bo != gfnjsvx) throw new Error('attribute value must after "="');$malc = ew_0o4['slice'](c$alb, nk6vh)['replace'](/&#?\w+;/g, hdq6k), knzhjv['add'](g1u2wf, $malc, c$alb), khvzj['warning']('attribute "' + g1u2wf + '" missed start quot(' + d6vzhk + ')!!'), c$alb = nk6vh + 0x1, y40bo = gsx2gf;
        }break;case '/':
        switch (y40bo) {case ggw2u_e:
            knzhjv['setTagName'](ew_0o4['slice'](c$alb, nk6vh));case gsx2gf:case gmbc$y:case ghjzn:
            y40bo = ghjzn, knzhjv['closed'] = !0x0;case gfnjsvx:case gjkznh:case gq86dr:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return khvzj['error']('unexpected end of input'), y40bo == ggw2u_e && knzhjv['setTagName'](ew_0o4['slice'](c$alb, nk6vh)), nk6vh;case '>':
        switch (y40bo) {case ggw2u_e:
            knzhjv['setTagName'](ew_0o4['slice'](c$alb, nk6vh));case gsx2gf:case gmbc$y:case ghjzn:
            break;case gfnjsvx:case gjkznh:
            $malc = ew_0o4['slice'](c$alb, nk6vh), '/' === $malc['slice'](-0x1) && (knzhjv['closed'] = !0x0, $malc = $malc['slice'](0x0, -0x1));case gq86dr:
            y40bo === gq86dr && ($malc = g1u2wf), y40bo == gfnjsvx ? (khvzj['warning']('attribute "' + $malc + '" missed quot(")!!'), knzhjv['add'](g1u2wf, $malc['replace'](/&#?\w+;/g, hdq6k), c$alb)) : ('http://www.w3.org/1999/xhtml' === gw_2ue[''] && $malc['match'](/^(?:disabled|checked|selected)$/i) || khvzj['warning']('attribute "' + $malc + '" missed value!! "' + $malc + '" instead!!'), knzhjv['add']($malc, $malc, c$alb));break;case gr7t8:
            throw new Error('attribute value missed!!');}return nk6vh;case '\u0080':
        d6vzhk = '\x20';default:
        if ('\x20' >= d6vzhk) switch (y40bo) {case ggw2u_e:
            knzhjv['setTagName'](ew_0o4['slice'](c$alb, nk6vh)), y40bo = gmbc$y;break;case gjkznh:
            g1u2wf = ew_0o4['slice'](c$alb, nk6vh), y40bo = gq86dr;break;case gfnjsvx:
            var $malc = ew_0o4['slice'](c$alb, nk6vh)['replace'](/&#?\w+;/g, hdq6k);khvzj['warning']('attribute "' + $malc + '" missed quot(")!!'), knzhjv['add'](g1u2wf, $malc, c$alb);case gsx2gf:
            y40bo = gmbc$y;} else switch (y40bo) {case gq86dr:
            {
              knzhjv['tagName'];
            }'http://www.w3.org/1999/xhtml' === gw_2ue[''] && g1u2wf['match'](/^(?:disabled|checked|selected)$/i) || khvzj['warning']('attribute "' + g1u2wf + '" missed value!! "' + g1u2wf + '" instead2!!'), knzhjv['add'](g1u2wf, g1u2wf, c$alb), c$alb = nk6vh, y40bo = gjkznh;break;case gsx2gf:
            khvzj['warning']('attribute space is required"' + g1u2wf + '\x22!!');case gmbc$y:
            y40bo = gjkznh, c$alb = nk6vh;break;case gr7t8:
            y40bo = gfnjsvx, c$alb = nk6vh;break;case ghjzn:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nk6vh++;
  }
}function geo_w04(j2x1, y4o_c0, dzq) {
  for (var oy0bc4 = j2x1['tagName'], nfjs1x = null, b9$ = j2x1['length']; b9$--;) {
    var k6qdt8 = j2x1[b9$],
        fxu2g1 = k6qdt8['qName'],
        ye0o = k6qdt8['value'],
        pi3 = fxu2g1['indexOf'](':');if (pi3 > 0x0) var ab$lm = k6qdt8['prefix'] = fxu2g1['slice'](0x0, pi3),
        jfn1xs = fxu2g1['slice'](pi3 + 0x1),
        ba$ml = 'xmlns' === ab$lm && jfn1xs;else jfn1xs = fxu2g1, ab$lm = null, ba$ml = 'xmlns' === fxu2g1 && '';k6qdt8['localName'] = jfn1xs, ba$ml !== !0x1 && (null == nfjs1x && (nfjs1x = {}, gr8dqt6(dzq, dzq = {})), dzq[ba$ml] = nfjs1x[ba$ml] = ye0o, k6qdt8['uri'] = 'http://www.w3.org/2000/xmlns/', y4o_c0['startPrefixMapping'](ba$ml, ye0o));
  }for (var b9$ = j2x1['length']; b9$--;) {
    k6qdt8 = j2x1[b9$];var ab$lm = k6qdt8['prefix'];ab$lm && ('xml' === ab$lm && (k6qdt8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ab$lm && (k6qdt8['uri'] = dzq[ab$lm || '']));
  }var pi3 = oy0bc4['indexOf'](':');pi3 > 0x0 ? (ab$lm = j2x1['prefix'] = oy0bc4['slice'](0x0, pi3), jfn1xs = j2x1['localName'] = oy0bc4['slice'](pi3 + 0x1)) : (ab$lm = null, jfn1xs = j2x1['localName'] = oy0bc4);var n1jf = j2x1['uri'] = dzq[ab$lm || ''];if (y4o_c0['startElement'](n1jf, jfn1xs, oy0bc4, j2x1), !j2x1['closed']) return j2x1['currentNSMap'] = dzq, j2x1['localNSMap'] = nfjs1x, !0x0;if (y4o_c0['endElement'](n1jf, jfn1xs, oy0bc4), nfjs1x) {
    for (ab$lm in nfjs1x) y4o_c0['endPrefixMapping'](ab$lm);
  }
}function gg1f2uw(xvjsnf, j2sx1f, n6vhz, z6dvk, $oby) {
  if (/^(?:script|textarea)$/i['test'](n6vhz)) {
    var gu2w_e = xvjsnf['indexOf']('</' + n6vhz + '>', j2sx1f),
        _04ye = xvjsnf['substring'](j2sx1f + 0x1, gu2w_e);if (/[&<]/['test'](_04ye)) return (/^script$/i['test'](n6vhz) ? ($oby['characters'](_04ye, 0x0, _04ye['length']), gu2w_e) : (_04ye = _04ye['replace'](/&#?\w+;/g, z6dvk), $oby['characters'](_04ye, 0x0, _04ye['length']), gu2w_e)
    );
  }return j2sx1f + 0x1;
}function gsjvxfn(ugx2, lbyc, $y0lc, qrt875) {
  var ir7p53 = qrt875[$y0lc];return null == ir7p53 && (ir7p53 = ugx2['lastIndexOf']('</' + $y0lc + '>'), lbyc > ir7p53 && (ir7p53 = ugx2['lastIndexOf']('</' + $y0lc)), qrt875[$y0lc] = ir7p53), lbyc > ir7p53;
}function gr8dqt6(c_4yo0, ow4e_0) {
  for (var _yo4c in c_4yo0) ow4e_0[_yo4c] = c_4yo0[_yo4c];
}function gu21fw(xjs2, t538r7, sx2fg1, qzd68k) {
  var $a9mbl = xjs2['charAt'](t538r7 + 0x2);switch ($a9mbl) {case '-':
      if ('-' === xjs2['charAt'](t538r7 + 0x3)) {
        var zknhj = xjs2['indexOf']('-->', t538r7 + 0x4);return zknhj > t538r7 ? (sx2fg1['comment'](xjs2, t538r7 + 0x4, zknhj - t538r7 - 0x4), zknhj + 0x3) : (qzd68k['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == xjs2['substr'](t538r7 + 0x3, 0x6)) {
        var zknhj = xjs2['indexOf'](']]>', t538r7 + 0x9);return sx2fg1['startCDATA'](), sx2fg1['characters'](xjs2, t538r7 + 0x9, zknhj - t538r7 - 0x9), sx2fg1['endCDATA'](), zknhj + 0x3;
      }var ye4_0o = gkvznh(xjs2, t538r7),
          gwu1f = ye4_0o['length'];if (gwu1f > 0x1 && /!doctype/i['test'](ye4_0o[0x0][0x0])) {
        var kdzh6 = ye4_0o[0x1][0x0],
            fjx21s = gwu1f > 0x3 && /^public$/i['test'](ye4_0o[0x2][0x0]) && ye4_0o[0x3][0x0],
            dz6kq = gwu1f > 0x4 && ye4_0o[0x4][0x0],
            y$lcmb = ye4_0o[gwu1f - 0x1];return sx2fg1['startDTD'](kdzh6, fjx21s && fjx21s['replace'](/^(['"])(.*?)\1$/, '$2'), dz6kq && dz6kq['replace'](/^(['"])(.*?)\1$/, '$2')), sx2fg1['endDTD'](), y$lcmb['index'] + y$lcmb[0x0]['length'];
      }}return -0x1;
}function glcm$(lc0$b, vjxfn, baclm) {
  var kh6zdv = lc0$b['indexOf']('?>', vjxfn);if (kh6zdv) {
    var pr57i3 = lc0$b['substring'](vjxfn, kh6zdv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (pr57i3) {
      {
        pr57i3[0x0]['length'];
      }return baclm['processingInstruction'](pr57i3[0x1], pr57i3[0x2]), kh6zdv + 0x2;
    }return -0x1;
  }return -0x1;
}function gkz6dqh() {}function gjnfsv(f2sj, blma9) {
  return f2sj['__proto__'] = blma9, f2sj;
}function gkvznh(_oeuw4, $lbmy) {
  var cbl$am,
      uw_eo4 = [],
      ew4_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ew4_['lastIndex'] = $lbmy, ew4_['exec'](_oeuw4); cbl$am = ew4_['exec'](_oeuw4);) if (uw_eo4['push'](cbl$am), cbl$am[0x1]) return uw_eo4;
}var g$abl9m = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gh6dzk = new RegExp('[\\-\\.0-9' + g$abl9m['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gvd6hz = new RegExp('^' + g$abl9m['source'] + gh6dzk['source'] + '*(?::' + g$abl9m['source'] + gh6dzk['source'] + '*)?$'),
    ggw2u_e = 0x0,
    gjkznh = 0x1,
    gq86dr = 0x2,
    gr7t8 = 0x3,
    gfnjsvx = 0x4,
    gsx2gf = 0x5,
    gmbc$y = 0x6,
    ghjzn = 0x7;gjfs12x['prototype'] = { 'parse': function (y$o0c, alm$b, rq78t5) {
    var rt8q6 = this['domBuilder'];rt8q6['startDocument'](), gr8dqt6(alm$b, alm$b = {}), gey_4o(y$o0c, alm$b, rq78t5, rt8q6, this['errorHandler']), rt8q6['endDocument']();
  } }, gkz6dqh['prototype'] = { 'setTagName': function (a$bmcl) {
    if (!gvd6hz['test'](a$bmcl)) throw new Error('invalid tagName:' + a$bmcl);this['tagName'] = a$bmcl;
  }, 'add': function (sjnvh, _oe40, rq5d8t) {
    if (!gvd6hz['test'](sjnvh)) throw new Error('invalid attribute:' + sjnvh);this[this['length']++] = { 'qName': sjnvh, 'value': _oe40, 'offset': rq5d8t };
  }, 'length': 0x0, 'getLocalName': function (vkjhzn) {
    return this[vkjhzn]['localName'];
  }, 'getLocator': function (gf2wu) {
    return this[gf2wu]['locator'];
  }, 'getQName': function (ge2w) {
    return this[ge2w]['qName'];
  }, 'getURI': function (l$cy0b) {
    return this[l$cy0b]['uri'];
  }, 'getValue': function (fxsn) {
    return this[fxsn]['value'];
  } }, gjnfsv({}, gjnfsv['prototype']) instanceof gjnfsv || (gjnfsv = function (f1nxj, q8t6k) {
  function yco_() {}yco_['prototype'] = q8t6k, yco_ = new yco_();for (q8t6k in f1nxj) yco_[q8t6k] = f1nxj[q8t6k];return yco_;
}), exports['XMLReader'] = gjfs12x;