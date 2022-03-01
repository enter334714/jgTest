var b = wx.$e;
function emcae() {}function es3un9q(cpemo, _m7ca, vy4_fz, r4yfvz, eapoc) {
  function fy4zr(rzvy) {
    var il$gt = rzvy['slice'](0x1, -0x1);return il$gt in vy4_fz ? vy4_fz[il$gt] : '#' === il$gt['charAt'](0x0) ? 0xffff < (il$gt = parseInt(il$gt['substr'](0x1)['replace']('x', '0x'))) ? (il$gt -= 0x10000, String['fromCharCode'](0xd800 + (il$gt >> 0xa), 0xdc00 + (0x3ff & il$gt))) : String['fromCharCode'](il$gt) : (eapoc['error']('entity not found:' + rzvy), rzvy);
  }function opc7m(_om7ca) {
    var aemcop;kuq9n < _om7ca && (aemcop = cpemo['substring'](kuq9n, _om7ca)['replace'](/&#?\w+;/g, fy4zr), eomap && hrltyz(kuq9n), r4yfvz['characters'](aemcop, 0x0, _om7ca - kuq9n), kuq9n = _om7ca);
  }function hrltyz(t$xij, ma47) {
    for (; b96sk <= t$xij && (ma47 = k9us6n['exec'](cpemo));) f74_a = ma47['index'], b96sk = f74_a + ma47[0x0]['length'], eomap['lineNumber']++;eomap['columnNumber'] = t$xij - f74_a + 0x1;
  }for (var f74_a = 0x0, b96sk = 0x0, k9us6n = /.*(?:\r\n?|\n)|.*$/g, eomap = r4yfvz['locator'], j3x$iq = [{ 'currentNSMap': _m7ca }], $xtgj = {}, kuq9n = 0x0;;) {
    try {
      var sq3nj = cpemo['indexOf']('<', kuq9n),
          fv74y,
          om7_c;if (sq3nj < 0x0) return void (cpemo['substr'](kuq9n)['match'](/^\s*$/) || (om7_c = (fv74y = r4yfvz['doc'])['createTextNode'](cpemo['substr'](kuq9n)), fv74y['appendChild'](om7_c), r4yfvz['currentElement'] = om7_c));switch (kuq9n < sq3nj && opc7m(sq3nj), cpemo['charAt'](sq3nj + 0x1)) {case '/':
          var lzrfhy = cpemo['indexOf']('>', sq3nj + 0x3),
              yhrf = cpemo['substring'](sq3nj + 0x2, lzrfhy),
              tl$xgi = j3x$iq['pop']();lzrfhy < 0x0 ? (yhrf = cpemo['substring'](sq3nj + 0x2)['replace'](/[\s<].*/, ''), eapoc['error']('end tag name: ' + yhrf + ' is not complete:' + tl$xgi['tagName']), lzrfhy = sq3nj + 0x1 + yhrf['length']) : yhrf['match'](/\s</) && (yhrf = yhrf['replace'](/[\s<].*/, ''), eapoc['error']('end tag name: ' + yhrf + ' maybe not complete'), lzrfhy = sq3nj + 0x1 + yhrf['length']);var a_cmo = tl$xgi['localNSMap'],
              o7pmca = tl$xgi['tagName'] == yhrf;if (o7pmca || tl$xgi['tagName'] && tl$xgi['tagName']['toLowerCase']() == yhrf['toLowerCase']()) {
            if (r4yfvz['endElement'](tl$xgi['uri'], tl$xgi['localName'], yhrf), a_cmo) {
              for (var i$j3nq in a_cmo) r4yfvz['endPrefixMapping'](i$j3nq);
            }o7pmca || eapoc['fatalError']('end tag name: ' + yhrf + ' is not match the current start tagName:' + tl$xgi['tagName']);
          } else j3x$iq['push'](tl$xgi);lzrfhy++;break;case '?':
          eomap && hrltyz(sq3nj), lzrfhy = empco(cpemo, sq3nj, r4yfvz);break;case '!':
          eomap && hrltyz(sq3nj), lzrfhy = edk90b6(cpemo, sq3nj, r4yfvz, eapoc);break;default:
          eomap && hrltyz(sq3nj);var tlyhr = new ex$jq(),
              uiqj3n = j3x$iq[j3x$iq['length'] - 0x1]['currentNSMap'],
              lzrfhy = etghx$l(cpemo, sq3nj, tlyhr, uiqj3n, fy4zr, eapoc),
              sknu9q = tlyhr['length'];if (!tlyhr['closed'] && ejnu3qs(cpemo, lzrfhy, tlyhr['tagName'], $xtgj) && (tlyhr['closed'] = !0x0, vy4_fz['nbsp'] || eapoc['warning']('unclosed xml attribute')), eomap && sknu9q) {
            for (var t$xj = eg3$ix(eomap, {}), njsqu = 0x0; njsqu < sknu9q; njsqu++) {
              var f4v7 = tlyhr[njsqu];hrltyz(f4v7['offset']), f4v7['locator'] = eg3$ix(eomap, {});
            }r4yfvz['locator'] = t$xj, epoceam(tlyhr, r4yfvz, uiqj3n) && j3x$iq['push'](tlyhr), r4yfvz['locator'] = eomap;
          } else epoceam(tlyhr, r4yfvz, uiqj3n) && j3x$iq['push'](tlyhr);'http://www.w3.org/1999/xhtml' !== tlyhr['uri'] || tlyhr['closed'] ? lzrfhy++ : lzrfhy = epceoa(cpemo, lzrfhy, tlyhr['tagName'], fy4zr, r4yfvz);}
    } catch (vy_z4f) {
      eapoc['error']('element parse error: ' + vy_z4f), lzrfhy = -0x1;
    }kuq9n < lzrfhy ? kuq9n = lzrfhy : opc7m(Math['max'](sq3nj, kuq9n) + 0x1);
  }
}function eg3$ix(dwb580, yrfh) {
  return yrfh['lineNumber'] = dwb580['lineNumber'], yrfh['columnNumber'] = dwb580['columnNumber'], yrfh;
}function etghx$l(ij3$xg, a4mc7_, cam4_, nuiqj, paoce, xgj$3) {
  for (var zvrf4, zlrht = ++a4mc7_, ks6b09 = efzrvy;;) {
    var j3nuqi = ij3$xg['charAt'](zlrht);switch (j3nuqi) {case '=':
        if (ks6b09 === evz4) zvrf4 = ij3$xg['slice'](a4mc7_, zlrht), ks6b09 = eq3j$x;else {
          if (ks6b09 !== ek69sn) throw new Error('attribute equal must after attrName');ks6b09 = eq3j$x;
        }break;case '\x27':case '\x22':
        if (ks6b09 === eq3j$x || ks6b09 === evz4) {
          if (ks6b09 === evz4 && (xgj$3['warning']('attribute value must after "="'), zvrf4 = ij3$xg['slice'](a4mc7_, zlrht)), !(0x0 < (zlrht = ij3$xg['indexOf'](j3nuqi, a4mc7_ = zlrht + 0x1)))) throw new Error('attribute value no end \'' + j3nuqi + '\' match');fzlhy = ij3$xg['slice'](a4mc7_, zlrht)['replace'](/&#?\w+;/g, paoce), cam4_['add'](zvrf4, fzlhy, a4mc7_ - 0x1), ks6b09 = egtjix$;
        } else {
          if (ks6b09 != ef7y_4v) throw new Error('attribute value must after "="');fzlhy = ij3$xg['slice'](a4mc7_, zlrht)['replace'](/&#?\w+;/g, paoce), cam4_['add'](zvrf4, fzlhy, a4mc7_), xgj$3['warning']('attribute "' + zvrf4 + '" missed start quot(' + j3nuqi + ')!!'), a4mc7_ = zlrht + 0x1, ks6b09 = egtjix$;
        }break;case '/':
        switch (ks6b09) {case efzrvy:
            cam4_['setTagName'](ij3$xg['slice'](a4mc7_, zlrht));case egtjix$:case ev_f47:case e$qn3ij:
            ks6b09 = e$qn3ij, cam4_['closed'] = !0x0;case ef7y_4v:case evz4:case ek69sn:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xgj$3['error']('unexpected end of input'), ks6b09 == efzrvy && cam4_['setTagName'](ij3$xg['slice'](a4mc7_, zlrht)), zlrht;case '>':
        switch (ks6b09) {case efzrvy:
            cam4_['setTagName'](ij3$xg['slice'](a4mc7_, zlrht));case egtjix$:case ev_f47:case e$qn3ij:
            break;case ef7y_4v:case evz4:
            '/' === (fzlhy = ij3$xg['slice'](a4mc7_, zlrht))['slice'](-0x1) && (cam4_['closed'] = !0x0, fzlhy = fzlhy['slice'](0x0, -0x1));case ek69sn:
            ks6b09 === ek69sn && (fzlhy = zvrf4), ks6b09 == ef7y_4v ? (xgj$3['warning']('attribute "' + fzlhy + '" missed quot(")!!'), cam4_['add'](zvrf4, fzlhy['replace'](/&#?\w+;/g, paoce), a4mc7_)) : ('http://www.w3.org/1999/xhtml' === nuiqj[''] && fzlhy['match'](/^(?:disabled|checked|selected)$/i) || xgj$3['warning']('attribute "' + fzlhy + '" missed value!! "' + fzlhy + '" instead!!'), cam4_['add'](fzlhy, fzlhy, a4mc7_));break;case eq3j$x:
            throw new Error('attribute value missed!!');}return zlrht;case '\u0080':
        j3nuqi = '\x20';default:
        if (j3nuqi <= '\x20') switch (ks6b09) {case efzrvy:
            cam4_['setTagName'](ij3$xg['slice'](a4mc7_, zlrht)), ks6b09 = ev_f47;break;case evz4:
            zvrf4 = ij3$xg['slice'](a4mc7_, zlrht), ks6b09 = ek69sn;break;case ef7y_4v:
            var fzlhy = ij3$xg['slice'](a4mc7_, zlrht)['replace'](/&#?\w+;/g, paoce);xgj$3['warning']('attribute "' + fzlhy + '" missed quot(")!!'), cam4_['add'](zvrf4, fzlhy, a4mc7_);case egtjix$:
            ks6b09 = ev_f47;} else switch (ks6b09) {case ek69sn:
            cam4_['tagName'], 'http://www.w3.org/1999/xhtml' === nuiqj[''] && zvrf4['match'](/^(?:disabled|checked|selected)$/i) || xgj$3['warning']('attribute "' + zvrf4 + '" missed value!! "' + zvrf4 + '" instead2!!'), cam4_['add'](zvrf4, zvrf4, a4mc7_), a4mc7_ = zlrht, ks6b09 = evz4;break;case egtjix$:
            xgj$3['warning']('attribute space is required"' + zvrf4 + '\x22!!');case ev_f47:
            ks6b09 = evz4, a4mc7_ = zlrht;break;case eq3j$x:
            ks6b09 = ef7y_4v, a4mc7_ = zlrht;break;case e$qn3ij:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zlrht++;
  }
}function epoceam(nq93us, mpoea, m_47) {
  for (var lhtz = nq93us['tagName'], fvyrzh = null, i3q$jn = nq93us['length']; i3q$jn--;) {
    var xg3$ = nq93us[i3q$jn],
        nu3qj = xg3$['qName'],
        lhrxtg = xg3$['value'],
        ixg3j;nu3qj = 0x0 < (yzflr = nu3qj['indexOf'](':')) ? (gth = xg3$['prefix'] = nu3qj['slice'](0x0, yzflr), ixg3j = nu3qj['slice'](yzflr + 0x1), 'xmlns' === gth && ixg3j) : (gth = null, 'xmlns' === (ixg3j = nu3qj) && ''), xg3$['localName'] = ixg3j, !0x1 !== nu3qj && (null == fvyrzh && (fvyrzh = {}, e$igxlt(m_47, m_47 = {})), m_47[nu3qj] = fvyrzh[nu3qj] = lhrxtg, xg3$['uri'] = 'http://www.w3.org/2000/xmlns/', mpoea['startPrefixMapping'](nu3qj, lhrxtg));
  }for (i3q$jn = nq93us['length']; i3q$jn--;) (gth = (xg3$ = nq93us[i3q$jn])['prefix']) && ('xml' === gth && (xg3$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== gth && (xg3$['uri'] = m_47[gth || '']));var yzflr;ixg3j = 0x0 < (yzflr = lhtz['indexOf'](':')) ? (gth = nq93us['prefix'] = lhtz['slice'](0x0, yzflr), nq93us['localName'] = lhtz['slice'](yzflr + 0x1)) : (gth = null, nq93us['localName'] = lhtz);var git$xj = nq93us['uri'] = m_47[gth || ''];if (mpoea['startElement'](git$xj, ixg3j, lhtz, nq93us), !nq93us['closed']) return nq93us['currentNSMap'] = m_47, nq93us['localNSMap'] = fvyrzh, !0x0;if (mpoea['endElement'](git$xj, ixg3j, lhtz), fvyrzh) {
    for (var gth in fvyrzh) mpoea['endPrefixMapping'](gth);
  }
}function epceoa(cam7_4, jx3gi, zrlty, xt$hg, b08w5d) {
  if (/^(?:script|textarea)$/i['test'](zrlty)) {
    var ztl = cam7_4['indexOf']('</' + zrlty + '>', jx3gi),
        cam7_4 = cam7_4['substring'](jx3gi + 0x1, ztl);if (/[&<]/['test'](cam7_4)) return (/^script$/i['test'](zrlty) || (cam7_4 = cam7_4['replace'](/&#?\w+;/g, xt$hg)), b08w5d['characters'](cam7_4, 0x0, cam7_4['length']), ztl
    );
  }return jx3gi + 0x1;
}function ejnu3qs(j3x, $xtgl, vf_7a4, _a7m4c) {
  var xrg = _a7m4c[vf_7a4];return null == xrg && ((xrg = j3x['lastIndexOf']('</' + vf_7a4 + '>')) < $xtgl && (xrg = j3x['lastIndexOf']('</' + vf_7a4)), _a7m4c[vf_7a4] = xrg), xrg < $xtgl;
}function e$igxlt(j3$in, f7va) {
  for (var n96ku in j3$in) f7va[n96ku] = j3$in[n96ku];
}function edk90b6(qi$j, glrthz, nusq9, rlyzht) {
  var mo_a = qi$j['charAt'](glrthz + 0x2);if ('-' === mo_a) return '-' !== qi$j['charAt'](glrthz + 0x3) ? -0x1 : glrthz < (ac_o7 = qi$j['indexOf']('-->', glrthz + 0x4)) ? (nusq9['comment'](qi$j, glrthz + 0x4, ac_o7 - glrthz - 0x4), ac_o7 + 0x3) : (rlyzht['error']('Unclosed comment'), -0x1);if ('CDATA[' == qi$j['substr'](glrthz + 0x3, 0x6)) return ac_o7 = qi$j['indexOf'](']]>', glrthz + 0x9), nusq9['startCDATA'](), nusq9['characters'](qi$j, glrthz + 0x9, ac_o7 - glrthz - 0x9), nusq9['endCDATA'](), ac_o7 + 0x3;mo_a = etzhglr(qi$j, glrthz), rlyzht = mo_a['length'];var ac_o7;return 0x1 < rlyzht && /!doctype/i['test'](mo_a[0x0][0x0]) ? (ac_o7 = mo_a[0x1][0x0], qi$j = 0x3 < rlyzht && /^public$/i['test'](mo_a[0x2][0x0]) && mo_a[0x3][0x0], glrthz = 0x4 < rlyzht && mo_a[0x4][0x0], mo_a = mo_a[rlyzht - 0x1], nusq9['startDTD'](ac_o7, qi$j && qi$j['replace'](/^(['"])(.*?)\1$/, '$2'), glrthz && glrthz['replace'](/^(['"])(.*?)\1$/, '$2')), nusq9['endDTD'](), mo_a['index'] + mo_a[0x0]['length']) : -0x1;
}function empco(xtgrh, cpea, zgt) {
  var q3sn = xtgrh['indexOf']('?>', cpea);return q3sn && (xtgrh = xtgrh['substring'](cpea, q3sn)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (xtgrh[0x0]['length'], zgt['processingInstruction'](xtgrh[0x1], xtgrh[0x2]), q3sn + 0x2) : -0x1;
}function ex$jq() {}function eav4_m(yfhlrz, s0k96b) {
  return yfhlrz['__proto__'] = s0k96b, yfhlrz;
}function etzhglr(sn3qju, hltgx$) {
  var am_74v,
      q3j = [],
      u9sn3q = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (u9sn3q['lastIndex'] = hltgx$, u9sn3q['exec'](sn3qju); am_74v = u9sn3q['exec'](sn3qju);) if (q3j['push'](am_74v), am_74v[0x1]) return q3j;
}var ejn3i$q = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    eqn$3j = new RegExp('[\\-\\.0-9' + ejn3i$q['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    eyv74_ = new RegExp('^' + ejn3i$q['source'] + eqn$3j['source'] + '*(?::' + ejn3i$q['source'] + eqn$3j['source'] + '*)?$'),
    efzrvy = 0x0,
    evz4 = 0x1,
    ek69sn = 0x2,
    eq3j$x = 0x3,
    ef7y_4v = 0x4,
    egtjix$ = 0x5,
    ev_f47 = 0x6,
    e$qn3ij = 0x7;emcae['prototype'] = { 'parse': function (bdw85, j$3g, rtzl) {
    var gxt$j = this['domBuilder'];gxt$j['startDocument'](), e$igxlt(j$3g, j$3g = {}), es3un9q(bdw85, j$3g, rtzl, gxt$j, this['errorHandler']), gxt$j['endDocument']();
  } }, ex$jq['prototype'] = { 'setTagName': function (nkus6) {
    if (!eyv74_['test'](nkus6)) throw new Error('invalid tagName:' + nkus6);this['tagName'] = nkus6;
  }, 'add': function (g$xt, lrhgt, _fvzy) {
    if (!eyv74_['test'](g$xt)) throw new Error('invalid attribute:' + g$xt);this[this['length']++] = { 'qName': g$xt, 'value': lrhgt, 'offset': _fvzy };
  }, 'length': 0x0, 'getLocalName': function (q$x3i) {
    return this[q$x3i]['localName'];
  }, 'getLocator': function (n6sku) {
    return this[n6sku]['locator'];
  }, 'getQName': function (m7va) {
    return this[m7va]['qName'];
  }, 'getURI': function (zy4f_) {
    return this[zy4f_]['uri'];
  }, 'getValue': function (aoc7pm) {
    return this[aoc7pm]['value'];
  } }, eav4_m({}, eav4_m['prototype']) instanceof eav4_m || (eav4_m = function (oam_c7, fv7a4) {
  function m74_ac() {}for (fv7a4 in m74_ac['prototype'] = fv7a4, m74_ac = new m74_ac(), oam_c7) m74_ac[fv7a4] = oam_c7[fv7a4];return m74_ac;
}), exports['XMLReader'] = emcae;