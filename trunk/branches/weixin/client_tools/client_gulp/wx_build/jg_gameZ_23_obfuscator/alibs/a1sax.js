var c = wx.$a;
function gu_gw4() {}function gkjhnzv(vsnjfx, guf2x, vxsnjh, q8dt6, vkzjnh) {
  function b$o0c(o_w4) {
    if (o_w4 > 0xffff) {
      o_w4 -= 0x10000;var nfs = 0xd800 + (o_w4 >> 0xa),
          sxf2j = 0xdc00 + (0x3ff & o_w4);return String['fromCharCode'](nfs, sxf2j);
    }return String['fromCharCode'](o_w4);
  }function rtp573(kzq) {
    var jx1fs2 = kzq['slice'](0x1, -0x1);return jx1fs2 in vxsnjh ? vxsnjh[jx1fs2] : '#' === jx1fs2['charAt'](0x0) ? b$o0c(parseInt(jx1fs2['substr'](0x1)['replace']('x', '0x'))) : (vkzjnh['error']('entity not found:' + kzq), kzq);
  }function z6dhq(jvsn) {
    if (jvsn > cyb$l) {
      var al$cb = vsnjfx['substring'](cyb$l, jvsn)['replace'](/&#?\w+;/g, rtp573);jnzkhv && vz6kdh(cyb$l), q8dt6['characters'](al$cb, 0x0, jvsn - cyb$l), cyb$l = jvsn;
    }
  }function vz6kdh(xvnhsj, ma$b9) {
    for (; xvnhsj >= e_4uow && (ma$b9 = cl$ym['exec'](vsnjfx));) _uwg = ma$b9['index'], e_4uow = _uwg + ma$b9[0x0]['length'], jnzkhv['lineNumber']++;jnzkhv['columnNumber'] = xvnhsj - _uwg + 0x1;
  }for (var _uwg = 0x0, e_4uow = 0x0, cl$ym = /.*(?:\r\n?|\n)|.*$/g, jnzkhv = q8dt6['locator'], r5i7p3 = [{ 'currentNSMap': guf2x }], qdt86r = {}, cyb$l = 0x0;;) {
    try {
      var jfnxvs = vsnjfx['indexOf']('<', cyb$l);if (0x0 > jfnxvs) {
        if (!vsnjfx['substr'](cyb$l)['match'](/^\s*$/)) {
          var jxsf1 = q8dt6['doc'],
              dkzh6 = jxsf1['createTextNode'](vsnjfx['substr'](cyb$l));jxsf1['appendChild'](dkzh6), q8dt6['currentElement'] = dkzh6;
        }return;
      }switch (jfnxvs > cyb$l && z6dhq(jfnxvs), vsnjfx['charAt'](jfnxvs + 0x1)) {case '/':
          var cablm = vsnjfx['indexOf']('>', jfnxvs + 0x3),
              r8753t = vsnjfx['substring'](jfnxvs + 0x2, cablm),
              kd6hvz = r5i7p3['pop']();0x0 > cablm ? (r8753t = vsnjfx['substring'](jfnxvs + 0x2)['replace'](/[\s<].*/, ''), vkzjnh['error']('end tag name: ' + r8753t + ' is not complete:' + kd6hvz['tagName']), cablm = jfnxvs + 0x1 + r8753t['length']) : r8753t['match'](/\s</) && (r8753t = r8753t['replace'](/[\s<].*/, ''), vkzjnh['error']('end tag name: ' + r8753t + ' maybe not complete'), cablm = jfnxvs + 0x1 + r8753t['length']);var uo_4e = kd6hvz['localNSMap'],
              _e0yo4 = kd6hvz['tagName'] == r8753t,
              bl0$c = _e0yo4 || kd6hvz['tagName'] && kd6hvz['tagName']['toLowerCase']() == r8753t['toLowerCase']();if (bl0$c) {
            if (q8dt6['endElement'](kd6hvz['uri'], kd6hvz['localName'], r8753t), uo_4e) {
              for (var g_2uwe in uo_4e) q8dt6['endPrefixMapping'](g_2uwe);
            }_e0yo4 || vkzjnh['fatalError']('end tag name: ' + r8753t + ' is not match the current start tagName:' + kd6hvz['tagName']);
          } else r5i7p3['push'](kd6hvz);cablm++;break;case '?':
          jnzkhv && vz6kdh(jfnxvs), cablm = guw_o(vsnjfx, jfnxvs, q8dt6);break;case '!':
          jnzkhv && vz6kdh(jfnxvs), cablm = gq68kdt(vsnjfx, jfnxvs, q8dt6, vkzjnh);break;default:
          jnzkhv && vz6kdh(jfnxvs);var u_oew4 = new gt68dqk(),
              ux2g = r5i7p3[r5i7p3['length'] - 0x1]['currentNSMap'],
              cablm = gd8rq6t(vsnjfx, jfnxvs, u_oew4, ux2g, rtp573, vkzjnh),
              vxnj = u_oew4['length'];if (!u_oew4['closed'] && g$byc0o(vsnjfx, cablm, u_oew4['tagName'], qdt86r) && (u_oew4['closed'] = !0x0, vxsnjh['nbsp'] || vkzjnh['warning']('unclosed xml attribute')), jnzkhv && vxnj) {
            for (var sx2j = gmab(jnzkhv, {}), lmbac = 0x0; vxnj > lmbac; lmbac++) {
              var knvz = u_oew4[lmbac];vz6kdh(knvz['offset']), knvz['locator'] = gmab(jnzkhv, {});
            }q8dt6['locator'] = sx2j, ggxuf1(u_oew4, q8dt6, ux2g) && r5i7p3['push'](u_oew4), q8dt6['locator'] = jnzkhv;
          } else ggxuf1(u_oew4, q8dt6, ux2g) && r5i7p3['push'](u_oew4);'http://www.w3.org/1999/xhtml' !== u_oew4['uri'] || u_oew4['closed'] ? cablm++ : cablm = gsjf(vsnjfx, cablm, u_oew4['tagName'], rtp573, q8dt6);}
    } catch (p5i73r) {
      vkzjnh['error']('element parse error: ' + p5i73r), cablm = -0x1;
    }cablm > cyb$l ? cyb$l = cablm : z6dhq(Math['max'](jfnxvs, cyb$l) + 0x1);
  }
}function gmab($cl0by, vnxjsh) {
  return vnxjsh['lineNumber'] = $cl0by['lineNumber'], vnxjsh['columnNumber'] = $cl0by['columnNumber'], vnxjsh;
}function gd8rq6t(o0ey4_, jznkvh, xn1s, b4ocy0, r7pi3, ycb$0o) {
  for (var e_w4uo, xvhn, u2f1xg = ++jznkvh, hvzjsn = gvnjkhz;;) {
    var f21gu = o0ey4_['charAt'](u2f1xg);switch (f21gu) {case '=':
        if (hvzjsn === gow_04e) e_w4uo = o0ey4_['slice'](jznkvh, u2f1xg), hvzjsn = gtr7835;else {
          if (hvzjsn !== gbam9l$) throw new Error('attribute equal must after attrName');hvzjsn = gtr7835;
        }break;case '\x27':case '\x22':
        if (hvzjsn === gtr7835 || hvzjsn === gow_04e) {
          if (hvzjsn === gow_04e && (ycb$0o['warning']('attribute value must after "="'), e_w4uo = o0ey4_['slice'](jznkvh, u2f1xg)), jznkvh = u2f1xg + 0x1, u2f1xg = o0ey4_['indexOf'](f21gu, jznkvh), !(u2f1xg > 0x0)) throw new Error('attribute value no end \'' + f21gu + '\' match');xvhn = o0ey4_['slice'](jznkvh, u2f1xg)['replace'](/&#?\w+;/g, r7pi3), xn1s['add'](e_w4uo, xvhn, jznkvh - 0x1), hvzjsn = gf1w2u;
        } else {
          if (hvzjsn != gzkjn) throw new Error('attribute value must after "="');xvhn = o0ey4_['slice'](jznkvh, u2f1xg)['replace'](/&#?\w+;/g, r7pi3), xn1s['add'](e_w4uo, xvhn, jznkvh), ycb$0o['warning']('attribute "' + e_w4uo + '" missed start quot(' + f21gu + ')!!'), jznkvh = u2f1xg + 0x1, hvzjsn = gf1w2u;
        }break;case '/':
        switch (hvzjsn) {case gvnjkhz:
            xn1s['setTagName'](o0ey4_['slice'](jznkvh, u2f1xg));case gf1w2u:case gy$clbm:case gtp5:
            hvzjsn = gtp5, xn1s['closed'] = !0x0;case gzkjn:case gow_04e:case gbam9l$:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ycb$0o['error']('unexpected end of input'), hvzjsn == gvnjkhz && xn1s['setTagName'](o0ey4_['slice'](jznkvh, u2f1xg)), u2f1xg;case '>':
        switch (hvzjsn) {case gvnjkhz:
            xn1s['setTagName'](o0ey4_['slice'](jznkvh, u2f1xg));case gf1w2u:case gy$clbm:case gtp5:
            break;case gzkjn:case gow_04e:
            xvhn = o0ey4_['slice'](jznkvh, u2f1xg), '/' === xvhn['slice'](-0x1) && (xn1s['closed'] = !0x0, xvhn = xvhn['slice'](0x0, -0x1));case gbam9l$:
            hvzjsn === gbam9l$ && (xvhn = e_w4uo), hvzjsn == gzkjn ? (ycb$0o['warning']('attribute "' + xvhn + '" missed quot(")!!'), xn1s['add'](e_w4uo, xvhn['replace'](/&#?\w+;/g, r7pi3), jznkvh)) : ('http://www.w3.org/1999/xhtml' === b4ocy0[''] && xvhn['match'](/^(?:disabled|checked|selected)$/i) || ycb$0o['warning']('attribute "' + xvhn + '" missed value!! "' + xvhn + '" instead!!'), xn1s['add'](xvhn, xvhn, jznkvh));break;case gtr7835:
            throw new Error('attribute value missed!!');}return u2f1xg;case '\u0080':
        f21gu = '\x20';default:
        if ('\x20' >= f21gu) switch (hvzjsn) {case gvnjkhz:
            xn1s['setTagName'](o0ey4_['slice'](jznkvh, u2f1xg)), hvzjsn = gy$clbm;break;case gow_04e:
            e_w4uo = o0ey4_['slice'](jznkvh, u2f1xg), hvzjsn = gbam9l$;break;case gzkjn:
            var xvhn = o0ey4_['slice'](jznkvh, u2f1xg)['replace'](/&#?\w+;/g, r7pi3);ycb$0o['warning']('attribute "' + xvhn + '" missed quot(")!!'), xn1s['add'](e_w4uo, xvhn, jznkvh);case gf1w2u:
            hvzjsn = gy$clbm;} else switch (hvzjsn) {case gbam9l$:
            {
              xn1s['tagName'];
            }'http://www.w3.org/1999/xhtml' === b4ocy0[''] && e_w4uo['match'](/^(?:disabled|checked|selected)$/i) || ycb$0o['warning']('attribute "' + e_w4uo + '" missed value!! "' + e_w4uo + '" instead2!!'), xn1s['add'](e_w4uo, e_w4uo, jznkvh), jznkvh = u2f1xg, hvzjsn = gow_04e;break;case gf1w2u:
            ycb$0o['warning']('attribute space is required"' + e_w4uo + '\x22!!');case gy$clbm:
            hvzjsn = gow_04e, jznkvh = u2f1xg;break;case gtr7835:
            hvzjsn = gzkjn, jznkvh = u2f1xg;break;case gtp5:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}u2f1xg++;
  }
}function ggxuf1(njzhk, t5p7, zd86) {
  for (var kvhzjn = njzhk['tagName'], s1gfx = null, h6vkd = njzhk['length']; h6vkd--;) {
    var m$balc = njzhk[h6vkd],
        jhnxv = m$balc['qName'],
        g21f = m$balc['value'],
        jxsnvh = jhnxv['indexOf'](':');if (jxsnvh > 0x0) var kjz = m$balc['prefix'] = jhnxv['slice'](0x0, jxsnvh),
        c$al = jhnxv['slice'](jxsnvh + 0x1),
        _eg2wu = 'xmlns' === kjz && c$al;else c$al = jhnxv, kjz = null, _eg2wu = 'xmlns' === jhnxv && '';m$balc['localName'] = c$al, _eg2wu !== !0x1 && (null == s1gfx && (s1gfx = {}, gnjhzvs(zd86, zd86 = {})), zd86[_eg2wu] = s1gfx[_eg2wu] = g21f, m$balc['uri'] = 'http://www.w3.org/2000/xmlns/', t5p7['startPrefixMapping'](_eg2wu, g21f));
  }for (var h6vkd = njzhk['length']; h6vkd--;) {
    m$balc = njzhk[h6vkd];var kjz = m$balc['prefix'];kjz && ('xml' === kjz && (m$balc['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kjz && (m$balc['uri'] = zd86[kjz || '']));
  }var jxsnvh = kvhzjn['indexOf'](':');jxsnvh > 0x0 ? (kjz = njzhk['prefix'] = kvhzjn['slice'](0x0, jxsnvh), c$al = njzhk['localName'] = kvhzjn['slice'](jxsnvh + 0x1)) : (kjz = null, c$al = njzhk['localName'] = kvhzjn);var qz6k = njzhk['uri'] = zd86[kjz || ''];if (t5p7['startElement'](qz6k, c$al, kvhzjn, njzhk), !njzhk['closed']) return njzhk['currentNSMap'] = zd86, njzhk['localNSMap'] = s1gfx, !0x0;if (t5p7['endElement'](qz6k, c$al, kvhzjn), s1gfx) {
    for (kjz in s1gfx) t5p7['endPrefixMapping'](kjz);
  }
}function gsjf(w2ge_, uew12g, _4uowe, w2g1u, qk6d8z) {
  if (/^(?:script|textarea)$/i['test'](_4uowe)) {
    var qh6dz = w2ge_['indexOf']('</' + _4uowe + '>', uew12g),
        u2gx1f = w2ge_['substring'](uew12g + 0x1, qh6dz);if (/[&<]/['test'](u2gx1f)) return (/^script$/i['test'](_4uowe) ? (qk6d8z['characters'](u2gx1f, 0x0, u2gx1f['length']), qh6dz) : (u2gx1f = u2gx1f['replace'](/&#?\w+;/g, w2g1u), qk6d8z['characters'](u2gx1f, 0x0, u2gx1f['length']), qh6dz)
    );
  }return uew12g + 0x1;
}function g$byc0o(c0b4oy, ou4_e, mcbl, k6nhvz) {
  var zjnhv = k6nhvz[mcbl];return null == zjnhv && (zjnhv = c0b4oy['lastIndexOf']('</' + mcbl + '>'), ou4_e > zjnhv && (zjnhv = c0b4oy['lastIndexOf']('</' + mcbl)), k6nhvz[mcbl] = zjnhv), ou4_e > zjnhv;
}function gnjhzvs(jhznsv, o_c0y4) {
  for (var ylb0 in jhznsv) o_c0y4[ylb0] = jhznsv[ylb0];
}function gq68kdt(mba9l, trdq6, euw_o4, yobc$) {
  var bo0$yc = mba9l['charAt'](trdq6 + 0x2);switch (bo0$yc) {case '-':
      if ('-' === mba9l['charAt'](trdq6 + 0x3)) {
        var i75r3p = mba9l['indexOf']('-->', trdq6 + 0x4);return i75r3p > trdq6 ? (euw_o4['comment'](mba9l, trdq6 + 0x4, i75r3p - trdq6 - 0x4), i75r3p + 0x3) : (yobc$['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == mba9l['substr'](trdq6 + 0x3, 0x6)) {
        var i75r3p = mba9l['indexOf'](']]>', trdq6 + 0x9);return euw_o4['startCDATA'](), euw_o4['characters'](mba9l, trdq6 + 0x9, i75r3p - trdq6 - 0x9), euw_o4['endCDATA'](), i75r3p + 0x3;
      }var gf2sx = gew21gu(mba9l, trdq6),
          mlacb = gf2sx['length'];if (mlacb > 0x1 && /!doctype/i['test'](gf2sx[0x0][0x0])) {
        var uew4_ = gf2sx[0x1][0x0],
            j1s = mlacb > 0x3 && /^public$/i['test'](gf2sx[0x2][0x0]) && gf2sx[0x3][0x0],
            pr35 = mlacb > 0x4 && gf2sx[0x4][0x0],
            jvkn = gf2sx[mlacb - 0x1];return euw_o4['startDTD'](uew4_, j1s && j1s['replace'](/^(['"])(.*?)\1$/, '$2'), pr35 && pr35['replace'](/^(['"])(.*?)\1$/, '$2')), euw_o4['endDTD'](), jvkn['index'] + jvkn[0x0]['length'];
      }}return -0x1;
}function guw_o(o40_e, c04, wf1u2g) {
  var $ba9lm = o40_e['indexOf']('?>', c04);if ($ba9lm) {
    var cmy$l = o40_e['substring'](c04, $ba9lm)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (cmy$l) {
      {
        cmy$l[0x0]['length'];
      }return wf1u2g['processingInstruction'](cmy$l[0x1], cmy$l[0x2]), $ba9lm + 0x2;
    }return -0x1;
  }return -0x1;
}function gt68dqk() {}function g$ylc0(w2gu_, uge2w1) {
  return w2gu_['__proto__'] = uge2w1, w2gu_;
}function gew21gu(qd8zk6, jhsvnz) {
  var i5pr3,
      g21fx = [],
      tdqk68 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (tdqk68['lastIndex'] = jhsvnz, tdqk68['exec'](qd8zk6); i5pr3 = tdqk68['exec'](qd8zk6);) if (g21fx['push'](i5pr3), i5pr3[0x1]) return g21fx;
}var gp3r75i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    glb0c$ = new RegExp('[\\-\\.0-9' + gp3r75i['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gabl$9m = new RegExp('^' + gp3r75i['source'] + glb0c$['source'] + '*(?::' + gp3r75i['source'] + glb0c$['source'] + '*)?$'),
    gvnjkhz = 0x0,
    gow_04e = 0x1,
    gbam9l$ = 0x2,
    gtr7835 = 0x3,
    gzkjn = 0x4,
    gf1w2u = 0x5,
    gy$clbm = 0x6,
    gtp5 = 0x7;gu_gw4['prototype'] = { 'parse': function (nhjxvs, kd8qt, w0oe_4) {
    var _eug4 = this['domBuilder'];_eug4['startDocument'](), gnjhzvs(kd8qt, kd8qt = {}), gkjhnzv(nhjxvs, kd8qt, w0oe_4, _eug4, this['errorHandler']), _eug4['endDocument']();
  } }, gt68dqk['prototype'] = { 'setTagName': function (hqdk6z) {
    if (!gabl$9m['test'](hqdk6z)) throw new Error('invalid tagName:' + hqdk6z);this['tagName'] = hqdk6z;
  }, 'add': function (y$0obc, w21f, ug2f) {
    if (!gabl$9m['test'](y$0obc)) throw new Error('invalid attribute:' + y$0obc);this[this['length']++] = { 'qName': y$0obc, 'value': w21f, 'offset': ug2f };
  }, 'length': 0x0, 'getLocalName': function (t853r7) {
    return this[t853r7]['localName'];
  }, 'getLocator': function (zhsj) {
    return this[zhsj]['locator'];
  }, 'getQName': function (a$lbm) {
    return this[a$lbm]['qName'];
  }, 'getURI': function (sxfjnv) {
    return this[sxfjnv]['uri'];
  }, 'getValue': function (yc0o_4) {
    return this[yc0o_4]['value'];
  } }, g$ylc0({}, g$ylc0['prototype']) instanceof g$ylc0 || (g$ylc0 = function (w4e_o0, $blcmy) {
  function blc$y() {}blc$y['prototype'] = $blcmy, blc$y = new blc$y();for ($blcmy in w4e_o0) blc$y[$blcmy] = w4e_o0[$blcmy];return blc$y;
}), exports['XMLReader'] = gu_gw4;