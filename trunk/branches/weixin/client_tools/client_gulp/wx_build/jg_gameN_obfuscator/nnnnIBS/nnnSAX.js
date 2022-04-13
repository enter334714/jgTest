var A = wx.$N;
function n_ipv2() {}function n_c75g1x(jmn_0, qzr4, jl0e3o, r9zq, mj_u8n) {
  function q$6bw9(g17cx) {
    if (g17cx > 0xffff) {
      g17cx -= 0x10000;var $qa6bw = 0xd800 + (g17cx >> 0xa),
          vsxikc = 0xdc00 + (0x3ff & g17cx);return String['fromCharCode']($qa6bw, vsxikc);
    }return String['fromCharCode'](g17cx);
  }function $6awqb(scv1kx) {
    var vskx2i = scv1kx['slice'](0x1, -0x1);return vskx2i in jl0e3o ? jl0e3o[vskx2i] : '#' === vskx2i['charAt'](0x0) ? q$6bw9(parseInt(vskx2i['substr'](0x1)['replace']('x', '0x'))) : (mj_u8n['error']('entity not found:' + scv1kx), scv1kx);
  }function mlenj(j_mnu8) {
    if (j_mnu8 > xsc17g) {
      var u8d_h = jmn_0['substring'](xsc17g, j_mnu8)['replace'](/&#?\w+;/g, $6awqb);bq6w9$ && z4o3(xsc17g), r9zq['characters'](u8d_h, 0x0, j_mnu8 - xsc17g), xsc17g = j_mnu8;
    }
  }function z4o3(hfm8u, uj8_mn) {
    for (; hfm8u >= je03ln && (uj8_mn = aqbw$6['exec'](jmn_0));) $b6aw = uj8_mn['index'], je03ln = $b6aw + uj8_mn[0x0]['length'], bq6w9$['lineNumber']++;bq6w9$['columnNumber'] = hfm8u - $b6aw + 0x1;
  }for (var $b6aw = 0x0, je03ln = 0x0, aqbw$6 = /.*(?:\r\n?|\n)|.*$/g, bq6w9$ = r9zq['locator'], w6$qb9 = [{ 'currentNSMap': qzr4 }], ljunm0 = {}, xsc17g = 0x0;;) {
    try {
      var _jumn = jmn_0['indexOf']('<', xsc17g);if (0x0 > _jumn) {
        if (!jmn_0['substr'](xsc17g)['match'](/^\s*$/)) {
          var xg175 = r9zq['doc'],
              j3eln0 = xg175['createTextNode'](jmn_0['substr'](xsc17g));xg175['appendChild'](j3eln0), r9zq['currentElement'] = j3eln0;
        }return;
      }switch (_jumn > xsc17g && mlenj(_jumn), jmn_0['charAt'](_jumn + 0x1)) {case '/':
          var umnh_ = jmn_0['indexOf']('>', _jumn + 0x3),
              zr9qy = jmn_0['substring'](_jumn + 0x2, umnh_),
              qr49by = w6$qb9['pop']();0x0 > umnh_ ? (zr9qy = jmn_0['substring'](_jumn + 0x2)['replace'](/[\s<].*/, ''), mj_u8n['error']('end tag name: ' + zr9qy + ' is not complete:' + qr49by['tagName']), umnh_ = _jumn + 0x1 + zr9qy['length']) : zr9qy['match'](/\s</) && (zr9qy = zr9qy['replace'](/[\s<].*/, ''), mj_u8n['error']('end tag name: ' + zr9qy + ' maybe not complete'), umnh_ = _jumn + 0x1 + zr9qy['length']);var kivsp = qr49by['localNSMap'],
              oejl = qr49by['tagName'] == zr9qy,
              _8jum = oejl || qr49by['tagName'] && qr49by['tagName']['toLowerCase']() == zr9qy['toLowerCase']();if (_8jum) {
            if (r9zq['endElement'](qr49by['uri'], qr49by['localName'], zr9qy), kivsp) {
              for (var c1xsvk in kivsp) r9zq['endPrefixMapping'](c1xsvk);
            }oejl || mj_u8n['fatalError']('end tag name: ' + zr9qy + ' is not match the current start tagName:' + qr49by['tagName']);
          } else w6$qb9['push'](qr49by);umnh_++;break;case '?':
          bq6w9$ && z4o3(_jumn), umnh_ = n_hfd8t(jmn_0, _jumn, r9zq);break;case '!':
          bq6w9$ && z4o3(_jumn), umnh_ = n_g51dt(jmn_0, _jumn, r9zq, mj_u8n);break;default:
          bq6w9$ && z4o3(_jumn);var y3eol = new n_c71gs(),
              $6qwb9 = w6$qb9[w6$qb9['length'] - 0x1]['currentNSMap'],
              umnh_ = n_ye43(jmn_0, _jumn, y3eol, $6qwb9, $6awqb, mj_u8n),
              nu_0m = y3eol['length'];if (!y3eol['closed'] && n_r9q(jmn_0, umnh_, y3eol['tagName'], ljunm0) && (y3eol['closed'] = !0x0, jl0e3o['nbsp'] || mj_u8n['warning']('unclosed xml attribute')), bq6w9$ && nu_0m) {
            for (var l30oj = n_thf_(bq6w9$, {}), qr4by = 0x0; nu_0m > qr4by; qr4by++) {
              var vpsi2k = y3eol[qr4by];z4o3(vpsi2k['offset']), vpsi2k['locator'] = n_thf_(bq6w9$, {});
            }r9zq['locator'] = l30oj, n_qw$b(y3eol, r9zq, $6qwb9) && w6$qb9['push'](y3eol), r9zq['locator'] = bq6w9$;
          } else n_qw$b(y3eol, r9zq, $6qwb9) && w6$qb9['push'](y3eol);'http://www.w3.org/1999/xhtml' !== y3eol['uri'] || y3eol['closed'] ? umnh_++ : umnh_ = n_oyze4(jmn_0, umnh_, y3eol['tagName'], $6awqb, r9zq);}
    } catch (ljo03e) {
      mj_u8n['error']('element parse error: ' + ljo03e), umnh_ = -0x1;
    }umnh_ > xsc17g ? xsc17g = umnh_ : mlenj(Math['max'](_jumn, xsc17g) + 0x1);
  }
}function n_thf_(vpi2sk, hftd57) {
  return hftd57['lineNumber'] = vpi2sk['lineNumber'], hftd57['columnNumber'] = vpi2sk['columnNumber'], hftd57;
}function n_ye43(psik, jln0, t57gdf, _fth8, rzy34, $w9r) {
  for (var yozl, sckxv1, tgdf = ++jln0, ckiv = n_n3e;;) {
    var nm8h = psik['charAt'](tgdf);switch (nm8h) {case '=':
        if (ckiv === n_a6$qwb) yozl = psik['slice'](jln0, tgdf), ckiv = n_uh8m_;else {
          if (ckiv !== n_vkixsc) throw new Error('attribute equal must after attrName');ckiv = n_uh8m_;
        }break;case '\x27':case '\x22':
        if (ckiv === n_uh8m_ || ckiv === n_a6$qwb) {
          if (ckiv === n_a6$qwb && ($w9r['warning']('attribute value must after "="'), yozl = psik['slice'](jln0, tgdf)), jln0 = tgdf + 0x1, tgdf = psik['indexOf'](nm8h, jln0), !(tgdf > 0x0)) throw new Error('attribute value no end \'' + nm8h + '\' match');sckxv1 = psik['slice'](jln0, tgdf)['replace'](/&#?\w+;/g, rzy34), t57gdf['add'](yozl, sckxv1, jln0 - 0x1), ckiv = n_bw$r9;
        } else {
          if (ckiv != n_br$49q) throw new Error('attribute value must after "="');sckxv1 = psik['slice'](jln0, tgdf)['replace'](/&#?\w+;/g, rzy34), t57gdf['add'](yozl, sckxv1, jln0), $w9r['warning']('attribute "' + yozl + '" missed start quot(' + nm8h + ')!!'), jln0 = tgdf + 0x1, ckiv = n_bw$r9;
        }break;case '/':
        switch (ckiv) {case n_n3e:
            t57gdf['setTagName'](psik['slice'](jln0, tgdf));case n_bw$r9:case n_ej03:case n_x5c71g:
            ckiv = n_x5c71g, t57gdf['closed'] = !0x0;case n_br$49q:case n_a6$qwb:case n_vkixsc:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $w9r['error']('unexpected end of input'), ckiv == n_n3e && t57gdf['setTagName'](psik['slice'](jln0, tgdf)), tgdf;case '>':
        switch (ckiv) {case n_n3e:
            t57gdf['setTagName'](psik['slice'](jln0, tgdf));case n_bw$r9:case n_ej03:case n_x5c71g:
            break;case n_br$49q:case n_a6$qwb:
            sckxv1 = psik['slice'](jln0, tgdf), '/' === sckxv1['slice'](-0x1) && (t57gdf['closed'] = !0x0, sckxv1 = sckxv1['slice'](0x0, -0x1));case n_vkixsc:
            ckiv === n_vkixsc && (sckxv1 = yozl), ckiv == n_br$49q ? ($w9r['warning']('attribute "' + sckxv1 + '" missed quot(")!!'), t57gdf['add'](yozl, sckxv1['replace'](/&#?\w+;/g, rzy34), jln0)) : ('http://www.w3.org/1999/xhtml' === _fth8[''] && sckxv1['match'](/^(?:disabled|checked|selected)$/i) || $w9r['warning']('attribute "' + sckxv1 + '" missed value!! "' + sckxv1 + '" instead!!'), t57gdf['add'](sckxv1, sckxv1, jln0));break;case n_uh8m_:
            throw new Error('attribute value missed!!');}return tgdf;case '\u0080':
        nm8h = '\x20';default:
        if ('\x20' >= nm8h) switch (ckiv) {case n_n3e:
            t57gdf['setTagName'](psik['slice'](jln0, tgdf)), ckiv = n_ej03;break;case n_a6$qwb:
            yozl = psik['slice'](jln0, tgdf), ckiv = n_vkixsc;break;case n_br$49q:
            var sckxv1 = psik['slice'](jln0, tgdf)['replace'](/&#?\w+;/g, rzy34);$w9r['warning']('attribute "' + sckxv1 + '" missed quot(")!!'), t57gdf['add'](yozl, sckxv1, jln0);case n_bw$r9:
            ckiv = n_ej03;} else switch (ckiv) {case n_vkixsc:
            {
              t57gdf['tagName'];
            }'http://www.w3.org/1999/xhtml' === _fth8[''] && yozl['match'](/^(?:disabled|checked|selected)$/i) || $w9r['warning']('attribute "' + yozl + '" missed value!! "' + yozl + '" instead2!!'), t57gdf['add'](yozl, yozl, jln0), jln0 = tgdf, ckiv = n_a6$qwb;break;case n_bw$r9:
            $w9r['warning']('attribute space is required"' + yozl + '\x22!!');case n_ej03:
            ckiv = n_a6$qwb, jln0 = tgdf;break;case n_uh8m_:
            ckiv = n_br$49q, jln0 = tgdf;break;case n_x5c71g:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tgdf++;
  }
}function n_qw$b(vgsc, z34y, hf57td) {
  for (var wq9b = vgsc['tagName'], ojel03 = null, r9y4b = vgsc['length']; r9y4b--;) {
    var nj_mu8 = vgsc[r9y4b],
        jn0u_m = nj_mu8['qName'],
        _dhu = nj_mu8['value'],
        vix2 = jn0u_m['indexOf'](':');if (vix2 > 0x0) var $9wbqr = nj_mu8['prefix'] = jn0u_m['slice'](0x0, vix2),
        g7x5c1 = jn0u_m['slice'](vix2 + 0x1),
        $w6 = 'xmlns' === $9wbqr && g7x5c1;else g7x5c1 = jn0u_m, $9wbqr = null, $w6 = 'xmlns' === jn0u_m && '';nj_mu8['localName'] = g7x5c1, $w6 !== !0x1 && (null == ojel03 && (ojel03 = {}, n_df58th(hf57td, hf57td = {})), hf57td[$w6] = ojel03[$w6] = _dhu, nj_mu8['uri'] = 'http://www.w3.org/2000/xmlns/', z34y['startPrefixMapping']($w6, _dhu));
  }for (var r9y4b = vgsc['length']; r9y4b--;) {
    nj_mu8 = vgsc[r9y4b];var $9wbqr = nj_mu8['prefix'];$9wbqr && ('xml' === $9wbqr && (nj_mu8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $9wbqr && (nj_mu8['uri'] = hf57td[$9wbqr || '']));
  }var vix2 = wq9b['indexOf'](':');vix2 > 0x0 ? ($9wbqr = vgsc['prefix'] = wq9b['slice'](0x0, vix2), g7x5c1 = vgsc['localName'] = wq9b['slice'](vix2 + 0x1)) : ($9wbqr = null, g7x5c1 = vgsc['localName'] = wq9b);var jl30en = vgsc['uri'] = hf57td[$9wbqr || ''];if (z34y['startElement'](jl30en, g7x5c1, wq9b, vgsc), !vgsc['closed']) return vgsc['currentNSMap'] = hf57td, vgsc['localNSMap'] = ojel03, !0x0;if (z34y['endElement'](jl30en, g7x5c1, wq9b), ojel03) {
    for ($9wbqr in ojel03) z34y['endPrefixMapping']($9wbqr);
  }
}function n_oyze4(jne0l, c1xsgv, s7g1x, svxck1, q9r$4) {
  if (/^(?:script|textarea)$/i['test'](s7g1x)) {
    var bwq9r = jne0l['indexOf']('</' + s7g1x + '>', c1xsgv),
        ln0e = jne0l['substring'](c1xsgv + 0x1, bwq9r);if (/[&<]/['test'](ln0e)) return (/^script$/i['test'](s7g1x) ? (q9r$4['characters'](ln0e, 0x0, ln0e['length']), bwq9r) : (ln0e = ln0e['replace'](/&#?\w+;/g, svxck1), q9r$4['characters'](ln0e, 0x0, ln0e['length']), bwq9r)
    );
  }return c1xsgv + 0x1;
}function n_r9q(u8h_d, zyo4e3, mnj0u, _mnuh8) {
  var ez3lo = _mnuh8[mnj0u];return null == ez3lo && (ez3lo = u8h_d['lastIndexOf']('</' + mnj0u + '>'), zyo4e3 > ez3lo && (ez3lo = u8h_d['lastIndexOf']('</' + mnj0u)), _mnuh8[mnj0u] = ez3lo), zyo4e3 > ez3lo;
}function n_df58th(enj0l, m_uh) {
  for (var p2ki in enj0l) m_uh[p2ki] = enj0l[p2ki];
}function n_g51dt(bw9, c51gx, t7d15g, bw$6a) {
  var csx1gv = bw9['charAt'](c51gx + 0x2);switch (csx1gv) {case '-':
      if ('-' === bw9['charAt'](c51gx + 0x3)) {
        var cxsg17 = bw9['indexOf']('-->', c51gx + 0x4);return cxsg17 > c51gx ? (t7d15g['comment'](bw9, c51gx + 0x4, cxsg17 - c51gx - 0x4), cxsg17 + 0x3) : (bw$6a['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bw9['substr'](c51gx + 0x3, 0x6)) {
        var cxsg17 = bw9['indexOf'](']]>', c51gx + 0x9);return t7d15g['startCDATA'](), t7d15g['characters'](bw9, c51gx + 0x9, cxsg17 - c51gx - 0x9), t7d15g['endCDATA'](), cxsg17 + 0x3;
      }var d5t7h = n_cvkis(bw9, c51gx),
          ckvs = d5t7h['length'];if (ckvs > 0x1 && /!doctype/i['test'](d5t7h[0x0][0x0])) {
        var _u8njm = d5t7h[0x1][0x0],
            uf_m8 = ckvs > 0x3 && /^public$/i['test'](d5t7h[0x2][0x0]) && d5t7h[0x3][0x0],
            hn_u = ckvs > 0x4 && d5t7h[0x4][0x0],
            $rq9bw = d5t7h[ckvs - 0x1];return t7d15g['startDTD'](_u8njm, uf_m8 && uf_m8['replace'](/^(['"])(.*?)\1$/, '$2'), hn_u && hn_u['replace'](/^(['"])(.*?)\1$/, '$2')), t7d15g['endDTD'](), $rq9bw['index'] + $rq9bw[0x0]['length'];
      }}return -0x1;
}function n_hfd8t(yezo3l, _uf8hd, jn_um8) {
  var xisk2v = yezo3l['indexOf']('?>', _uf8hd);if (xisk2v) {
    var cx1sg = yezo3l['substring'](_uf8hd, xisk2v)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (cx1sg) {
      {
        cx1sg[0x0]['length'];
      }return jn_um8['processingInstruction'](cx1sg[0x1], cx1sg[0x2]), xisk2v + 0x2;
    }return -0x1;
  }return -0x1;
}function n_c71gs() {}function n_l0ezo(ixkv2s, o3zl0) {
  return ixkv2s['__proto__'] = o3zl0, ixkv2s;
}function n_cvkis(u_8fd, hm_f8) {
  var o0e3z,
      ixvsk2 = [],
      r4zy3o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (r4zy3o['lastIndex'] = hm_f8, r4zy3o['exec'](u_8fd); o0e3z = r4zy3o['exec'](u_8fd);) if (ixvsk2['push'](o0e3z), o0e3z[0x1]) return ixvsk2;
}var n_cgx75 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_t58hfd = new RegExp('[\\-\\.0-9' + n_cgx75['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_h5t7df = new RegExp('^' + n_cgx75['source'] + n_t58hfd['source'] + '*(?::' + n_cgx75['source'] + n_t58hfd['source'] + '*)?$'),
    n_n3e = 0x0,
    n_a6$qwb = 0x1,
    n_vkixsc = 0x2,
    n_uh8m_ = 0x3,
    n_br$49q = 0x4,
    n_bw$r9 = 0x5,
    n_ej03 = 0x6,
    n_x5c71g = 0x7;n_ipv2['prototype'] = { 'parse': function (l0eoj, tf_, xcs1) {
    var y3zo4e = this['domBuilder'];y3zo4e['startDocument'](), n_df58th(tf_, tf_ = {}), n_c75g1x(l0eoj, tf_, xcs1, y3zo4e, this['errorHandler']), y3zo4e['endDocument']();
  } }, n_c71gs['prototype'] = { 'setTagName': function (ftd58) {
    if (!n_h5t7df['test'](ftd58)) throw new Error('invalid tagName:' + ftd58);this['tagName'] = ftd58;
  }, 'add': function (mnuh_, t57dgf, dt5fg) {
    if (!n_h5t7df['test'](mnuh_)) throw new Error('invalid attribute:' + mnuh_);this[this['length']++] = { 'qName': mnuh_, 'value': t57dgf, 'offset': dt5fg };
  }, 'length': 0x0, 'getLocalName': function (ivckxs) {
    return this[ivckxs]['localName'];
  }, 'getLocator': function (iksx2) {
    return this[iksx2]['locator'];
  }, 'getQName': function (hun8) {
    return this[hun8]['qName'];
  }, 'getURI': function (iks) {
    return this[iks]['uri'];
  }, 'getValue': function (ikv2) {
    return this[ikv2]['value'];
  } }, n_l0ezo({}, n_l0ezo['prototype']) instanceof n_l0ezo || (n_l0ezo = function (f_8uh, b$qw96) {
  function _mh8un() {}_mh8un['prototype'] = b$qw96, _mh8un = new _mh8un();for (b$qw96 in f_8uh) _mh8un[b$qw96] = f_8uh[b$qw96];return _mh8un;
}), exports['XMLReader'] = n_ipv2;