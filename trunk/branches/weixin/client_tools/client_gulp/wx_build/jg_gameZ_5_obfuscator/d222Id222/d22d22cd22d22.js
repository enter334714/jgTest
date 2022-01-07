var F = wx.$D;
function Dtcsv0() {}function Dse3tc(pbu3f9, mjxg, r2_h, h81rn, ri12hz) {
  function v6wtq(e0scu) {
    if (e0scu > 0xffff) {
      e0scu -= 0x10000;var tkvwq6 = 0xd800 + (e0scu >> 0xa),
          jxm5ag = 0xdc00 + (0x3ff & e0scu);return String['fromCharCode'](tkvwq6, jxm5ag);
    }return String['fromCharCode'](e0scu);
  }function bpf7u(zr_i2) {
    var rh2z = zr_i2['slice'](0x1, -0x1);return rh2z in r2_h ? r2_h[rh2z] : '#' === rh2z['charAt'](0x0) ? v6wtq(parseInt(rh2z['substr'](0x1)['replace']('x', '0x'))) : (ri12hz['error']('entity not found:' + zr_i2), zr_i2);
  }function etvwqs(zr12ih) {
    if (zr12ih > qkj) {
      var kvtw6q = pbu3f9['substring'](qkj, zr12ih)['replace'](/&#?\w+;/g, bpf7u);o_lgm5 && og_ml(qkj), h81rn['characters'](kvtw6q, 0x0, zr12ih - qkj), qkj = zr12ih;
    }
  }function og_ml(n2$h8, x6qwj) {
    for (; n2$h8 >= s0te3 && (x6qwj = imlz_o['exec'](pbu3f9));) vtwk6 = x6qwj['index'], s0te3 = vtwk6 + x6qwj[0x0]['length'], o_lgm5['lineNumber']++;o_lgm5['columnNumber'] = n2$h8 - vtwk6 + 0x1;
  }for (var vtwk6 = 0x0, s0te3 = 0x0, imlz_o = /.*(?:\r\n?|\n)|.*$/g, o_lgm5 = h81rn['locator'], c0p3bu = [{ 'currentNSMap': mjxg }], zh2r1 = {}, qkj = 0x0;;) {
    try {
      var o_mzl = pbu3f9['indexOf']('<', qkj);if (0x0 > o_mzl) {
        if (!pbu3f9['substr'](qkj)['match'](/^\s*$/)) {
          var pec30u = h81rn['doc'],
              jg5ax = pec30u['createTextNode'](pbu3f9['substr'](qkj));pec30u['appendChild'](jg5ax), h81rn['currentElement'] = jg5ax;
        }return;
      }switch (o_mzl > qkj && etvwqs(o_mzl), pbu3f9['charAt'](o_mzl + 0x1)) {case '/':
          var kajxw = pbu3f9['indexOf']('>', o_mzl + 0x3),
              lomz_ = pbu3f9['substring'](o_mzl + 0x2, kajxw),
              jx6kaw = c0p3bu['pop']();0x0 > kajxw ? (lomz_ = pbu3f9['substring'](o_mzl + 0x2)['replace'](/[\s<].*/, ''), ri12hz['error']('end tag name: ' + lomz_ + ' is not complete:' + jx6kaw['tagName']), kajxw = o_mzl + 0x1 + lomz_['length']) : lomz_['match'](/\s</) && (lomz_ = lomz_['replace'](/[\s<].*/, ''), ri12hz['error']('end tag name: ' + lomz_ + ' maybe not complete'), kajxw = o_mzl + 0x1 + lomz_['length']);var y8$h1n = jx6kaw['localNSMap'],
              f974b = jx6kaw['tagName'] == lomz_,
              qswve = f974b || jx6kaw['tagName'] && jx6kaw['tagName']['toLowerCase']() == lomz_['toLowerCase']();if (qswve) {
            if (h81rn['endElement'](jx6kaw['uri'], jx6kaw['localName'], lomz_), y8$h1n) {
              for (var ue30pc in y8$h1n) h81rn['endPrefixMapping'](ue30pc);
            }f974b || ri12hz['fatalError']('end tag name: ' + lomz_ + ' is not match the current start tagName:' + jx6kaw['tagName']);
          } else c0p3bu['push'](jx6kaw);kajxw++;break;case '?':
          o_lgm5 && og_ml(o_mzl), kajxw = Dol_mzi(pbu3f9, o_mzl, h81rn);break;case '!':
          o_lgm5 && og_ml(o_mzl), kajxw = Dvwteqs(pbu3f9, o_mzl, h81rn, ri12hz);break;default:
          o_lgm5 && og_ml(o_mzl);var ufp9b = new Dzr21hn(),
              vxq6kw = c0p3bu[c0p3bu['length'] - 0x1]['currentNSMap'],
              kajxw = Dub9p3f(pbu3f9, o_mzl, ufp9b, vxq6kw, bpf7u, ri12hz),
              ce0st3 = ufp9b['length'];if (!ufp9b['closed'] && Dc3seu(pbu3f9, kajxw, ufp9b['tagName'], zh2r1) && (ufp9b['closed'] = !0x0, r2_h['nbsp'] || ri12hz['warning']('unclosed xml attribute')), o_lgm5 && ce0st3) {
            for (var qws = Dm5gol(o_lgm5, {}), awkjx6 = 0x0; ce0st3 > awkjx6; awkjx6++) {
              var tve0c = ufp9b[awkjx6];og_ml(tve0c['offset']), tve0c['locator'] = Dm5gol(o_lgm5, {});
            }h81rn['locator'] = qws, Db03pu(ufp9b, h81rn, vxq6kw) && c0p3bu['push'](ufp9b), h81rn['locator'] = o_lgm5;
          } else Db03pu(ufp9b, h81rn, vxq6kw) && c0p3bu['push'](ufp9b);'http://www.w3.org/1999/xhtml' !== ufp9b['uri'] || ufp9b['closed'] ? kajxw++ : kajxw = Dmoj5ga(pbu3f9, kajxw, ufp9b['tagName'], bpf7u, h81rn);}
    } catch (cbp0) {
      ri12hz['error']('element parse error: ' + cbp0), kajxw = -0x1;
    }kajxw > qkj ? qkj = kajxw : etvwqs(Math['max'](o_mzl, qkj) + 0x1);
  }
}function Dm5gol(e03uc, z2lri_) {
  return z2lri_['lineNumber'] = e03uc['lineNumber'], z2lri_['columnNumber'] = e03uc['columnNumber'], z2lri_;
}function Dub9p3f(ce3s0u, t6wv, vxk6, cpb93u, wqetvs, eus03) {
  for (var r_izo, j6q, izrh = ++t6wv, gxm5j = Dag65xj;;) {
    var or_lzi = ce3s0u['charAt'](izrh);switch (or_lzi) {case '=':
        if (gxm5j === D_5gl) r_izo = ce3s0u['slice'](t6wv, izrh), gxm5j = Dwqvets;else {
          if (gxm5j !== Dtes) throw new Error('attribute equal must after attrName');gxm5j = Dwqvets;
        }break;case '\x27':case '\x22':
        if (gxm5j === Dwqvets || gxm5j === D_5gl) {
          if (gxm5j === D_5gl && (eus03['warning']('attribute value must after "="'), r_izo = ce3s0u['slice'](t6wv, izrh)), t6wv = izrh + 0x1, izrh = ce3s0u['indexOf'](or_lzi, t6wv), !(izrh > 0x0)) throw new Error('attribute value no end \'' + or_lzi + '\' match');j6q = ce3s0u['slice'](t6wv, izrh)['replace'](/&#?\w+;/g, wqetvs), vxk6['add'](r_izo, j6q, t6wv - 0x1), gxm5j = Dr2l_i;
        } else {
          if (gxm5j != Dl_oriz) throw new Error('attribute value must after "="');j6q = ce3s0u['slice'](t6wv, izrh)['replace'](/&#?\w+;/g, wqetvs), vxk6['add'](r_izo, j6q, t6wv), eus03['warning']('attribute "' + r_izo + '" missed start quot(' + or_lzi + ')!!'), t6wv = izrh + 0x1, gxm5j = Dr2l_i;
        }break;case '/':
        switch (gxm5j) {case Dag65xj:
            vxk6['setTagName'](ce3s0u['slice'](t6wv, izrh));case Dr2l_i:case D$h2n:case Dmja5xg:
            gxm5j = Dmja5xg, vxk6['closed'] = !0x0;case Dl_oriz:case D_5gl:case Dtes:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return eus03['error']('unexpected end of input'), gxm5j == Dag65xj && vxk6['setTagName'](ce3s0u['slice'](t6wv, izrh)), izrh;case '>':
        switch (gxm5j) {case Dag65xj:
            vxk6['setTagName'](ce3s0u['slice'](t6wv, izrh));case Dr2l_i:case D$h2n:case Dmja5xg:
            break;case Dl_oriz:case D_5gl:
            j6q = ce3s0u['slice'](t6wv, izrh), '/' === j6q['slice'](-0x1) && (vxk6['closed'] = !0x0, j6q = j6q['slice'](0x0, -0x1));case Dtes:
            gxm5j === Dtes && (j6q = r_izo), gxm5j == Dl_oriz ? (eus03['warning']('attribute "' + j6q + '" missed quot(")!!'), vxk6['add'](r_izo, j6q['replace'](/&#?\w+;/g, wqetvs), t6wv)) : ('http://www.w3.org/1999/xhtml' === cpb93u[''] && j6q['match'](/^(?:disabled|checked|selected)$/i) || eus03['warning']('attribute "' + j6q + '" missed value!! "' + j6q + '" instead!!'), vxk6['add'](j6q, j6q, t6wv));break;case Dwqvets:
            throw new Error('attribute value missed!!');}return izrh;case '\u0080':
        or_lzi = '\x20';default:
        if ('\x20' >= or_lzi) switch (gxm5j) {case Dag65xj:
            vxk6['setTagName'](ce3s0u['slice'](t6wv, izrh)), gxm5j = D$h2n;break;case D_5gl:
            r_izo = ce3s0u['slice'](t6wv, izrh), gxm5j = Dtes;break;case Dl_oriz:
            var j6q = ce3s0u['slice'](t6wv, izrh)['replace'](/&#?\w+;/g, wqetvs);eus03['warning']('attribute "' + j6q + '" missed quot(")!!'), vxk6['add'](r_izo, j6q, t6wv);case Dr2l_i:
            gxm5j = D$h2n;} else switch (gxm5j) {case Dtes:
            {
              vxk6['tagName'];
            }'http://www.w3.org/1999/xhtml' === cpb93u[''] && r_izo['match'](/^(?:disabled|checked|selected)$/i) || eus03['warning']('attribute "' + r_izo + '" missed value!! "' + r_izo + '" instead2!!'), vxk6['add'](r_izo, r_izo, t6wv), t6wv = izrh, gxm5j = D_5gl;break;case Dr2l_i:
            eus03['warning']('attribute space is required"' + r_izo + '\x22!!');case D$h2n:
            gxm5j = D_5gl, t6wv = izrh;break;case Dwqvets:
            gxm5j = Dl_oriz, t6wv = izrh;break;case Dmja5xg:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}izrh++;
  }
}function Db03pu(p749fb, gxaj5m, et0) {
  for (var twk6 = p749fb['tagName'], pbu0c3 = null, bf7up9 = p749fb['length']; bf7up9--;) {
    var rzhn1 = p749fb[bf7up9],
        oi_zm = rzhn1['qName'],
        omjga5 = rzhn1['value'],
        qv6wkx = oi_zm['indexOf'](':');if (qv6wkx > 0x0) var jg6kxa = rzhn1['prefix'] = oi_zm['slice'](0x0, qv6wkx),
        _go5ml = oi_zm['slice'](qv6wkx + 0x1),
        wtqev = 'xmlns' === jg6kxa && _go5ml;else _go5ml = oi_zm, jg6kxa = null, wtqev = 'xmlns' === oi_zm && '';rzhn1['localName'] = _go5ml, wtqev !== !0x1 && (null == pbu0c3 && (pbu0c3 = {}, Dmg5l(et0, et0 = {})), et0[wtqev] = pbu0c3[wtqev] = omjga5, rzhn1['uri'] = 'http://www.w3.org/2000/xmlns/', gxaj5m['startPrefixMapping'](wtqev, omjga5));
  }for (var bf7up9 = p749fb['length']; bf7up9--;) {
    rzhn1 = p749fb[bf7up9];var jg6kxa = rzhn1['prefix'];jg6kxa && ('xml' === jg6kxa && (rzhn1['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== jg6kxa && (rzhn1['uri'] = et0[jg6kxa || '']));
  }var qv6wkx = twk6['indexOf'](':');qv6wkx > 0x0 ? (jg6kxa = p749fb['prefix'] = twk6['slice'](0x0, qv6wkx), _go5ml = p749fb['localName'] = twk6['slice'](qv6wkx + 0x1)) : (jg6kxa = null, _go5ml = p749fb['localName'] = twk6);var loiz = p749fb['uri'] = et0[jg6kxa || ''];if (gxaj5m['startElement'](loiz, _go5ml, twk6, p749fb), !p749fb['closed']) return p749fb['currentNSMap'] = et0, p749fb['localNSMap'] = pbu0c3, !0x0;if (gxaj5m['endElement'](loiz, _go5ml, twk6), pbu0c3) {
    for (jg6kxa in pbu0c3) gxaj5m['endPrefixMapping'](jg6kxa);
  }
}function Dmoj5ga(zrh2n1, p79fb4, stq0v, etsq, almo5) {
  if (/^(?:script|textarea)$/i['test'](stq0v)) {
    var jgxka6 = zrh2n1['indexOf']('</' + stq0v + '>', p79fb4),
        rlz_2 = zrh2n1['substring'](p79fb4 + 0x1, jgxka6);if (/[&<]/['test'](rlz_2)) return (/^script$/i['test'](stq0v) ? (almo5['characters'](rlz_2, 0x0, rlz_2['length']), jgxka6) : (rlz_2 = rlz_2['replace'](/&#?\w+;/g, etsq), almo5['characters'](rlz_2, 0x0, rlz_2['length']), jgxka6)
    );
  }return p79fb4 + 0x1;
}function Dc3seu(_g5, kjgx6, q0vts, jwax6k) {
  var hr2z1i = jwax6k[q0vts];return null == hr2z1i && (hr2z1i = _g5['lastIndexOf']('</' + q0vts + '>'), kjgx6 > hr2z1i && (hr2z1i = _g5['lastIndexOf']('</' + q0vts)), jwax6k[q0vts] = hr2z1i), kjgx6 > hr2z1i;
}function Dmg5l(h2i_rz, z_imol) {
  for (var h8ny$1 in h2i_rz) z_imol[h8ny$1] = h2i_rz[h8ny$1];
}function Dvwteqs(vwktq, kg6axj, nh$1, p97ub) {
  var b0cup3 = vwktq['charAt'](kg6axj + 0x2);switch (b0cup3) {case '-':
      if ('-' === vwktq['charAt'](kg6axj + 0x3)) {
        var b79pf4 = vwktq['indexOf']('-->', kg6axj + 0x4);return b79pf4 > kg6axj ? (nh$1['comment'](vwktq, kg6axj + 0x4, b79pf4 - kg6axj - 0x4), b79pf4 + 0x3) : (p97ub['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == vwktq['substr'](kg6axj + 0x3, 0x6)) {
        var b79pf4 = vwktq['indexOf'](']]>', kg6axj + 0x9);return nh$1['startCDATA'](), nh$1['characters'](vwktq, kg6axj + 0x9, b79pf4 - kg6axj - 0x9), nh$1['endCDATA'](), b79pf4 + 0x3;
      }var vtec0 = Dr_ol(vwktq, kg6axj),
          tcs0e3 = vtec0['length'];if (tcs0e3 > 0x1 && /!doctype/i['test'](vtec0[0x0][0x0])) {
        var ucs03 = vtec0[0x1][0x0],
            zrh2i1 = tcs0e3 > 0x3 && /^public$/i['test'](vtec0[0x2][0x0]) && vtec0[0x3][0x0],
            cu0pb3 = tcs0e3 > 0x4 && vtec0[0x4][0x0],
            izr1h2 = vtec0[tcs0e3 - 0x1];return nh$1['startDTD'](ucs03, zrh2i1 && zrh2i1['replace'](/^(['"])(.*?)\1$/, '$2'), cu0pb3 && cu0pb3['replace'](/^(['"])(.*?)\1$/, '$2')), nh$1['endDTD'](), izr1h2['index'] + izr1h2[0x0]['length'];
      }}return -0x1;
}function Dol_mzi(bu93p, gx6jak, zhir2) {
  var euc3p0 = bu93p['indexOf']('?>', gx6jak);if (euc3p0) {
    var tsc0ev = bu93p['substring'](gx6jak, euc3p0)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (tsc0ev) {
      {
        tsc0ev[0x0]['length'];
      }return zhir2['processingInstruction'](tsc0ev[0x1], tsc0ev[0x2]), euc3p0 + 0x2;
    }return -0x1;
  }return -0x1;
}function Dzr21hn() {}function Dv0ecs($28h1n, p3euc) {
  return $28h1n['__proto__'] = p3euc, $28h1n;
}function Dr_ol($hny8, vskqt) {
  var lam5,
      mxgj5 = [],
      eqsv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (eqsv['lastIndex'] = vskqt, eqsv['exec']($hny8); lam5 = eqsv['exec']($hny8);) if (mxgj5['push'](lam5), lam5[0x1]) return mxgj5;
}var Dl_ozr = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Dz_rli = new RegExp('[\\-\\.0-9' + Dl_ozr['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Dirz_h = new RegExp('^' + Dl_ozr['source'] + Dz_rli['source'] + '*(?::' + Dl_ozr['source'] + Dz_rli['source'] + '*)?$'),
    Dag65xj = 0x0,
    D_5gl = 0x1,
    Dtes = 0x2,
    Dwqvets = 0x3,
    Dl_oriz = 0x4,
    Dr2l_i = 0x5,
    D$h2n = 0x6,
    Dmja5xg = 0x7;Dtcsv0['prototype'] = { 'parse': function (x5m, loir_, y$n18) {
    var agjo5 = this['domBuilder'];agjo5['startDocument'](), Dmg5l(loir_, loir_ = {}), Dse3tc(x5m, loir_, y$n18, agjo5, this['errorHandler']), agjo5['endDocument']();
  } }, Dzr21hn['prototype'] = { 'setTagName': function (s0tevc) {
    if (!Dirz_h['test'](s0tevc)) throw new Error('invalid tagName:' + s0tevc);this['tagName'] = s0tevc;
  }, 'add': function (omi_zl, m5oil_, v6tkwq) {
    if (!Dirz_h['test'](omi_zl)) throw new Error('invalid attribute:' + omi_zl);this[this['length']++] = { 'qName': omi_zl, 'value': m5oil_, 'offset': v6tkwq };
  }, 'length': 0x0, 'getLocalName': function (vcest0) {
    return this[vcest0]['localName'];
  }, 'getLocator': function (cb9pu3) {
    return this[cb9pu3]['locator'];
  }, 'getQName': function (p794) {
    return this[p794]['qName'];
  }, 'getURI': function (qkx6vw) {
    return this[qkx6vw]['uri'];
  }, 'getValue': function (wqk6xv) {
    return this[wqk6xv]['value'];
  } }, Dv0ecs({}, Dv0ecs['prototype']) instanceof Dv0ecs || (Dv0ecs = function (g5mo, zi1hr) {
  function vqswe() {}vqswe['prototype'] = zi1hr, vqswe = new vqswe();for (zi1hr in g5mo) vqswe[zi1hr] = g5mo[zi1hr];return vqswe;
}), exports['XMLReader'] = Dtcsv0;