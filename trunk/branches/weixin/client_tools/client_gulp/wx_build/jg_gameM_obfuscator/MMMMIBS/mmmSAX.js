var Y = wx.$M;
function M_ux3kyq() {}function M_krxv19(gc86o, d$lw, hmjn5i, wdb$0l, ceag28) {
  function _4sj7(ih0l) {
    if (ih0l > 0xffff) {
      ih0l -= 0x10000;var kyq3u = 0xd800 + (ih0l >> 0xa),
          gc8aeo = 0xdc00 + (0x3ff & ih0l);return String['fromCharCode'](kyq3u, gc8aeo);
    }return String['fromCharCode'](ih0l);
  }function zte82c(_sg64) {
    var p28 = _sg64['slice'](0x1, -0x1);return p28 in hmjn5i ? hmjn5i[p28] : '#' === p28['charAt'](0x0) ? _4sj7(parseInt(p28['substr'](0x1)['replace']('x', '0x'))) : (ceag28['error']('entity not found:' + _sg64), _sg64);
  }function l5nmh(kyx9u1) {
    if (kyx9u1 > i7jhnm) {
      var nmlh = gc86o['substring'](i7jhnm, kyx9u1)['replace'](/&#?\w+;/g, zte82c);hinl0 && vk1xr(i7jhnm), wdb$0l['characters'](nmlh, 0x0, kyx9u1 - i7jhnm), i7jhnm = kyx9u1;
    }
  }function vk1xr(vfrk1, g2e) {
    for (; vfrk1 >= hn5lim && (g2e = s7o64['exec'](gc86o));) $0fbw = g2e['index'], hn5lim = $0fbw + g2e[0x0]['length'], hinl0['lineNumber']++;hinl0['columnNumber'] = vfrk1 - $0fbw + 0x1;
  }for (var $0fbw = 0x0, hn5lim = 0x0, s7o64 = /.*(?:\r\n?|\n)|.*$/g, hinl0 = wdb$0l['locator'], kuxr1 = [{ 'currentNSMap': d$lw }], minh5 = {}, i7jhnm = 0x0;;) {
    try {
      var wd$l0 = gc86o['indexOf']('<', i7jhnm);if (0x0 > wd$l0) {
        if (!gc86o['substr'](i7jhnm)['match'](/^\s*$/)) {
          var ihln5 = wdb$0l['doc'],
              sa4o6g = ihln5['createTextNode'](gc86o['substr'](i7jhnm));ihln5['appendChild'](sa4o6g), wdb$0l['currentElement'] = sa4o6g;
        }return;
      }switch (wd$l0 > i7jhnm && l5nmh(wd$l0), gc86o['charAt'](wd$l0 + 0x1)) {case '/':
          var mj4_7 = gc86o['indexOf']('>', wd$l0 + 0x3),
              il$n5 = gc86o['substring'](wd$l0 + 0x2, mj4_7),
              l5b0$d = kuxr1['pop']();0x0 > mj4_7 ? (il$n5 = gc86o['substring'](wd$l0 + 0x2)['replace'](/[\s<].*/, ''), ceag28['error']('end tag name: ' + il$n5 + ' is not complete:' + l5b0$d['tagName']), mj4_7 = wd$l0 + 0x1 + il$n5['length']) : il$n5['match'](/\s</) && (il$n5 = il$n5['replace'](/[\s<].*/, ''), ceag28['error']('end tag name: ' + il$n5 + ' maybe not complete'), mj4_7 = wd$l0 + 0x1 + il$n5['length']);var bdl50 = l5b0$d['localNSMap'],
              jh7nm = l5b0$d['tagName'] == il$n5,
              bwrvd = jh7nm || l5b0$d['tagName'] && l5b0$d['tagName']['toLowerCase']() == il$n5['toLowerCase']();if (bwrvd) {
            if (wdb$0l['endElement'](l5b0$d['uri'], l5b0$d['localName'], il$n5), bdl50) {
              for (var bl$d0 in bdl50) wdb$0l['endPrefixMapping'](bl$d0);
            }jh7nm || ceag28['fatalError']('end tag name: ' + il$n5 + ' is not match the current start tagName:' + l5b0$d['tagName']);
          } else kuxr1['push'](l5b0$d);mj4_7++;break;case '?':
          hinl0 && vk1xr(wd$l0), mj4_7 = M_h7mji(gc86o, wd$l0, wdb$0l);break;case '!':
          hinl0 && vk1xr(wd$l0), mj4_7 = M_k3uqyx(gc86o, wd$l0, wdb$0l, ceag28);break;default:
          hinl0 && vk1xr(wd$l0);var m5nhji = new M_ukxqy(),
              cs6gao = kuxr1[kuxr1['length'] - 0x1]['currentNSMap'],
              mj4_7 = M_ceta2(gc86o, wd$l0, m5nhji, cs6gao, zte82c, ceag28),
              _6s7o = m5nhji['length'];if (!m5nhji['closed'] && M_rkx1u(gc86o, mj4_7, m5nhji['tagName'], minh5) && (m5nhji['closed'] = !0x0, hmjn5i['nbsp'] || ceag28['warning']('unclosed xml attribute')), hinl0 && _6s7o) {
            for (var b0dwf$ = M_iml5(hinl0, {}), _4o67s = 0x0; _6s7o > _4o67s; _4o67s++) {
              var kfvr = m5nhji[_4o67s];vk1xr(kfvr['offset']), kfvr['locator'] = M_iml5(hinl0, {});
            }wdb$0l['locator'] = b0dwf$, M_jsm7(m5nhji, wdb$0l, cs6gao) && kuxr1['push'](m5nhji), wdb$0l['locator'] = hinl0;
          } else M_jsm7(m5nhji, wdb$0l, cs6gao) && kuxr1['push'](m5nhji);'http://www.w3.org/1999/xhtml' !== m5nhji['uri'] || m5nhji['closed'] ? mj4_7++ : mj4_7 = M_p8zt(gc86o, mj4_7, m5nhji['tagName'], zte82c, wdb$0l);}
    } catch (d$w0bf) {
      ceag28['error']('element parse error: ' + d$w0bf), mj4_7 = -0x1;
    }mj4_7 > i7jhnm ? i7jhnm = mj4_7 : l5nmh(Math['max'](wd$l0, i7jhnm) + 0x1);
  }
}function M_iml5(jm7nh, smj4_) {
  return smj4_['lineNumber'] = jm7nh['lineNumber'], smj4_['columnNumber'] = jm7nh['columnNumber'], smj4_;
}function M_ceta2(y1kxq, g8o6a, oa68cg, d5$0l, j7_, cgoa68) {
  for (var wrf9v, c2eta8, dfbw$ = ++g8o6a, j5mhn = M_$il0n5;;) {
    var b$0l5d = y1kxq['charAt'](dfbw$);switch (b$0l5d) {case '=':
        if (j5mhn === M_o6cags) wrf9v = y1kxq['slice'](g8o6a, dfbw$), j5mhn = M_e28zpt;else {
          if (j5mhn !== M_hmnij) throw new Error('attribute equal must after attrName');j5mhn = M_e28zpt;
        }break;case '\x27':case '\x22':
        if (j5mhn === M_e28zpt || j5mhn === M_o6cags) {
          if (j5mhn === M_o6cags && (cgoa68['warning']('attribute value must after "="'), wrf9v = y1kxq['slice'](g8o6a, dfbw$)), g8o6a = dfbw$ + 0x1, dfbw$ = y1kxq['indexOf'](b$0l5d, g8o6a), !(dfbw$ > 0x0)) throw new Error('attribute value no end \'' + b$0l5d + '\' match');c2eta8 = y1kxq['slice'](g8o6a, dfbw$)['replace'](/&#?\w+;/g, j7_), oa68cg['add'](wrf9v, c2eta8, g8o6a - 0x1), j5mhn = M_inhml;
        } else {
          if (j5mhn != M_rx91ku) throw new Error('attribute value must after "="');c2eta8 = y1kxq['slice'](g8o6a, dfbw$)['replace'](/&#?\w+;/g, j7_), oa68cg['add'](wrf9v, c2eta8, g8o6a), cgoa68['warning']('attribute "' + wrf9v + '" missed start quot(' + b$0l5d + ')!!'), g8o6a = dfbw$ + 0x1, j5mhn = M_inhml;
        }break;case '/':
        switch (j5mhn) {case M_$il0n5:
            oa68cg['setTagName'](y1kxq['slice'](g8o6a, dfbw$));case M_inhml:case M_sogca6:case M__47:
            j5mhn = M__47, oa68cg['closed'] = !0x0;case M_rx91ku:case M_o6cags:case M_hmnij:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return cgoa68['error']('unexpected end of input'), j5mhn == M_$il0n5 && oa68cg['setTagName'](y1kxq['slice'](g8o6a, dfbw$)), dfbw$;case '>':
        switch (j5mhn) {case M_$il0n5:
            oa68cg['setTagName'](y1kxq['slice'](g8o6a, dfbw$));case M_inhml:case M_sogca6:case M__47:
            break;case M_rx91ku:case M_o6cags:
            c2eta8 = y1kxq['slice'](g8o6a, dfbw$), '/' === c2eta8['slice'](-0x1) && (oa68cg['closed'] = !0x0, c2eta8 = c2eta8['slice'](0x0, -0x1));case M_hmnij:
            j5mhn === M_hmnij && (c2eta8 = wrf9v), j5mhn == M_rx91ku ? (cgoa68['warning']('attribute "' + c2eta8 + '" missed quot(")!!'), oa68cg['add'](wrf9v, c2eta8['replace'](/&#?\w+;/g, j7_), g8o6a)) : ('http://www.w3.org/1999/xhtml' === d5$0l[''] && c2eta8['match'](/^(?:disabled|checked|selected)$/i) || cgoa68['warning']('attribute "' + c2eta8 + '" missed value!! "' + c2eta8 + '" instead!!'), oa68cg['add'](c2eta8, c2eta8, g8o6a));break;case M_e28zpt:
            throw new Error('attribute value missed!!');}return dfbw$;case '\u0080':
        b$0l5d = '\x20';default:
        if ('\x20' >= b$0l5d) switch (j5mhn) {case M_$il0n5:
            oa68cg['setTagName'](y1kxq['slice'](g8o6a, dfbw$)), j5mhn = M_sogca6;break;case M_o6cags:
            wrf9v = y1kxq['slice'](g8o6a, dfbw$), j5mhn = M_hmnij;break;case M_rx91ku:
            var c2eta8 = y1kxq['slice'](g8o6a, dfbw$)['replace'](/&#?\w+;/g, j7_);cgoa68['warning']('attribute "' + c2eta8 + '" missed quot(")!!'), oa68cg['add'](wrf9v, c2eta8, g8o6a);case M_inhml:
            j5mhn = M_sogca6;} else switch (j5mhn) {case M_hmnij:
            {
              oa68cg['tagName'];
            }'http://www.w3.org/1999/xhtml' === d5$0l[''] && wrf9v['match'](/^(?:disabled|checked|selected)$/i) || cgoa68['warning']('attribute "' + wrf9v + '" missed value!! "' + wrf9v + '" instead2!!'), oa68cg['add'](wrf9v, wrf9v, g8o6a), g8o6a = dfbw$, j5mhn = M_o6cags;break;case M_inhml:
            cgoa68['warning']('attribute space is required"' + wrf9v + '\x22!!');case M_sogca6:
            j5mhn = M_o6cags, g8o6a = dfbw$;break;case M_e28zpt:
            j5mhn = M_rx91ku, g8o6a = dfbw$;break;case M__47:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}dfbw$++;
  }
}function M_jsm7(l5b$d, kyqu3x, vwrbfd) {
  for (var brw9fv = l5b$d['tagName'], e28zc = null, ogc8a6 = l5b$d['length']; ogc8a6--;) {
    var _4msj = l5b$d[ogc8a6],
        fvbdrw = _4msj['qName'],
        c8zet = _4msj['value'],
        b$vdfw = fvbdrw['indexOf'](':');if (b$vdfw > 0x0) var mlhni = _4msj['prefix'] = fvbdrw['slice'](0x0, b$vdfw),
        kux3 = fvbdrw['slice'](b$vdfw + 0x1),
        uxr91 = 'xmlns' === mlhni && kux3;else kux3 = fvbdrw, mlhni = null, uxr91 = 'xmlns' === fvbdrw && '';_4msj['localName'] = kux3, uxr91 !== !0x1 && (null == e28zc && (e28zc = {}, M_ega8c(vwrbfd, vwrbfd = {})), vwrbfd[uxr91] = e28zc[uxr91] = c8zet, _4msj['uri'] = 'http://www.w3.org/2000/xmlns/', kyqu3x['startPrefixMapping'](uxr91, c8zet));
  }for (var ogc8a6 = l5b$d['length']; ogc8a6--;) {
    _4msj = l5b$d[ogc8a6];var mlhni = _4msj['prefix'];mlhni && ('xml' === mlhni && (_4msj['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mlhni && (_4msj['uri'] = vwrbfd[mlhni || '']));
  }var b$vdfw = brw9fv['indexOf'](':');b$vdfw > 0x0 ? (mlhni = l5b$d['prefix'] = brw9fv['slice'](0x0, b$vdfw), kux3 = l5b$d['localName'] = brw9fv['slice'](b$vdfw + 0x1)) : (mlhni = null, kux3 = l5b$d['localName'] = brw9fv);var h7nm_ = l5b$d['uri'] = vwrbfd[mlhni || ''];if (kyqu3x['startElement'](h7nm_, kux3, brw9fv, l5b$d), !l5b$d['closed']) return l5b$d['currentNSMap'] = vwrbfd, l5b$d['localNSMap'] = e28zc, !0x0;if (kyqu3x['endElement'](h7nm_, kux3, brw9fv), e28zc) {
    for (mlhni in e28zc) kyqu3x['endPrefixMapping'](mlhni);
  }
}function M_p8zt(i0l5$n, dwv, ac6g8o, vfrw9b, i7njm) {
  if (/^(?:script|textarea)$/i['test'](ac6g8o)) {
    var $dl0i = i0l5$n['indexOf']('</' + ac6g8o + '>', dwv),
        urk = i0l5$n['substring'](dwv + 0x1, $dl0i);if (/[&<]/['test'](urk)) return (/^script$/i['test'](ac6g8o) ? (i7njm['characters'](urk, 0x0, urk['length']), $dl0i) : (urk = urk['replace'](/&#?\w+;/g, vfrw9b), i7njm['characters'](urk, 0x0, urk['length']), $dl0i)
    );
  }return dwv + 0x1;
}function M_rkx1u(vr1fk9, r9wf1, s_7m4, mn5hi) {
  var li5n$0 = mn5hi[s_7m4];return null == li5n$0 && (li5n$0 = vr1fk9['lastIndexOf']('</' + s_7m4 + '>'), r9wf1 > li5n$0 && (li5n$0 = vr1fk9['lastIndexOf']('</' + s_7m4)), mn5hi[s_7m4] = li5n$0), r9wf1 > li5n$0;
}function M_ega8c(jmn5, min5l) {
  for (var hi0l5 in jmn5) min5l[hi0l5] = jmn5[hi0l5];
}function M_k3uqyx(rxv, aog6s4, jm4_h, inml5) {
  var yu9x1k = rxv['charAt'](aog6s4 + 0x2);switch (yu9x1k) {case '-':
      if ('-' === rxv['charAt'](aog6s4 + 0x3)) {
        var oc8eag = rxv['indexOf']('-->', aog6s4 + 0x4);return oc8eag > aog6s4 ? (jm4_h['comment'](rxv, aog6s4 + 0x4, oc8eag - aog6s4 - 0x4), oc8eag + 0x3) : (inml5['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rxv['substr'](aog6s4 + 0x3, 0x6)) {
        var oc8eag = rxv['indexOf'](']]>', aog6s4 + 0x9);return jm4_h['startCDATA'](), jm4_h['characters'](rxv, aog6s4 + 0x9, oc8eag - aog6s4 - 0x9), jm4_h['endCDATA'](), oc8eag + 0x3;
      }var jm4h7 = M_xk9u1y(rxv, aog6s4),
          _nm = jm4h7['length'];if (_nm > 0x1 && /!doctype/i['test'](jm4h7[0x0][0x0])) {
        var dwfvb = jm4h7[0x1][0x0],
            bfrvwd = _nm > 0x3 && /^public$/i['test'](jm4h7[0x2][0x0]) && jm4h7[0x3][0x0],
            ezp2t8 = _nm > 0x4 && jm4h7[0x4][0x0],
            gaceo = jm4h7[_nm - 0x1];return jm4_h['startDTD'](dwfvb, bfrvwd && bfrvwd['replace'](/^(['"])(.*?)\1$/, '$2'), ezp2t8 && ezp2t8['replace'](/^(['"])(.*?)\1$/, '$2')), jm4_h['endDTD'](), gaceo['index'] + gaceo[0x0]['length'];
      }}return -0x1;
}function M_h7mji(g2e8a, vf$wd, in5hjm) {
  var e2cg8a = g2e8a['indexOf']('?>', vf$wd);if (e2cg8a) {
    var gs6a = g2e8a['substring'](vf$wd, e2cg8a)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (gs6a) {
      {
        gs6a[0x0]['length'];
      }return in5hjm['processingInstruction'](gs6a[0x1], gs6a[0x2]), e2cg8a + 0x2;
    }return -0x1;
  }return -0x1;
}function M_ukxqy() {}function M__hn7mj(c2eg8, l$0bw) {
  return c2eg8['__proto__'] = l$0bw, c2eg8;
}function M_xk9u1y(_j476s, gs46_o) {
  var ni5jhm,
      wfrdvb = [],
      ao6gc8 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ao6gc8['lastIndex'] = gs46_o, ao6gc8['exec'](_j476s); ni5jhm = ao6gc8['exec'](_j476s);) if (wfrdvb['push'](ni5jhm), ni5jhm[0x1]) return wfrdvb;
}var M_uk1y9 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_ogea8 = new RegExp('[\\-\\.0-9' + M_uk1y9['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_bvr9fw = new RegExp('^' + M_uk1y9['source'] + M_ogea8['source'] + '*(?::' + M_uk1y9['source'] + M_ogea8['source'] + '*)?$'),
    M_$il0n5 = 0x0,
    M_o6cags = 0x1,
    M_hmnij = 0x2,
    M_e28zpt = 0x3,
    M_rx91ku = 0x4,
    M_inhml = 0x5,
    M_sogca6 = 0x6,
    M__47 = 0x7;M_ux3kyq['prototype'] = { 'parse': function (o6s4a, j_67, w$db0) {
    var kuxq1 = this['domBuilder'];kuxq1['startDocument'](), M_ega8c(j_67, j_67 = {}), M_krxv19(o6s4a, j_67, w$db0, kuxq1, this['errorHandler']), kuxq1['endDocument']();
  } }, M_ukxqy['prototype'] = { 'setTagName': function (dwb$l0) {
    if (!M_bvr9fw['test'](dwb$l0)) throw new Error('invalid tagName:' + dwb$l0);this['tagName'] = dwb$l0;
  }, 'add': function (ae28ct, bvw9, gac2e8) {
    if (!M_bvr9fw['test'](ae28ct)) throw new Error('invalid attribute:' + ae28ct);this[this['length']++] = { 'qName': ae28ct, 'value': bvw9, 'offset': gac2e8 };
  }, 'length': 0x0, 'getLocalName': function (_s47j6) {
    return this[_s47j6]['localName'];
  }, 'getLocator': function (fdw0$) {
    return this[fdw0$]['locator'];
  }, 'getQName': function (ln0ih5) {
    return this[ln0ih5]['qName'];
  }, 'getURI': function (ku1) {
    return this[ku1]['uri'];
  }, 'getValue': function (eo8ga) {
    return this[eo8ga]['value'];
  } }, M__hn7mj({}, M__hn7mj['prototype']) instanceof M__hn7mj || (M__hn7mj = function (iln0, bwf$) {
  function drwfb() {}drwfb['prototype'] = bwf$, drwfb = new drwfb();for (bwf$ in iln0) drwfb[bwf$] = iln0[bwf$];return drwfb;
}), exports['XMLReader'] = M_ux3kyq;