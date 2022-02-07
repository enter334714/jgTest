var A = wx.$N;
function n_fdtg7() {}function n_x71cg(vg1xc, byr4q9, ctg17, g15td7, gt5d) {
  function ciskxv(z4eo3y) {
    var uhf_m8 = z4eo3y['slice'](0x1, -0x1);return uhf_m8 in ctg17 ? ctg17[uhf_m8] : '#' === uhf_m8['charAt'](0x0) ? 0xffff < (uhf_m8 = parseInt(uhf_m8['substr'](0x1)['replace']('x', '0x'))) ? (uhf_m8 -= 0x10000, String['fromCharCode'](0xd800 + (uhf_m8 >> 0xa), 0xdc00 + (0x3ff & uhf_m8))) : String['fromCharCode'](uhf_m8) : (gt5d['error']('entity not found:' + z4eo3y), z4eo3y);
  }function w6a$q(q4yb9) {
    var six2v;ki2s < q4yb9 && (six2v = vg1xc['substring'](ki2s, q4yb9)['replace'](/&#?\w+;/g, ciskxv), piskv2 && ufm8_h(ki2s), g15td7['characters'](six2v, 0x0, q4yb9 - ki2s), ki2s = q4yb9);
  }function ufm8_h(fdt75h, tf58d) {
    for (; baqw <= fdt75h && (tf58d = bwq96$['exec'](vg1xc));) r$9wqb = tf58d['index'], baqw = r$9wqb + tf58d[0x0]['length'], piskv2['lineNumber']++;piskv2['columnNumber'] = fdt75h - r$9wqb + 0x1;
  }for (var r$9wqb = 0x0, baqw = 0x0, bwq96$ = /.*(?:\r\n?|\n)|.*$/g, piskv2 = g15td7['locator'], r9oyz = [{ 'currentNSMap': byr4q9 }], $rb4 = {}, ki2s = 0x0;;) {
    try {
      var skpv = vg1xc['indexOf']('<', ki2s),
          p2vs,
          hmuf8_;if (skpv < 0x0) return void (vg1xc['substr'](ki2s)['match'](/^\s*$/) || (hmuf8_ = (p2vs = g15td7['doc'])['createTextNode'](vg1xc['substr'](ki2s)), p2vs['appendChild'](hmuf8_), g15td7['currentElement'] = hmuf8_));switch (ki2s < skpv && w6a$q(skpv), vg1xc['charAt'](skpv + 0x1)) {case '/':
          var by9r4 = vg1xc['indexOf']('>', skpv + 0x3),
              h8num_ = vg1xc['substring'](skpv + 0x2, by9r4),
              d5t7g = r9oyz['pop']();by9r4 < 0x0 ? (h8num_ = vg1xc['substring'](skpv + 0x2)['replace'](/[\s<].*/, ''), gt5d['error']('end tag name: ' + h8num_ + ' is not complete:' + d5t7g['tagName']), by9r4 = skpv + 0x1 + h8num_['length']) : h8num_['match'](/\s</) && (h8num_ = h8num_['replace'](/[\s<].*/, ''), gt5d['error']('end tag name: ' + h8num_ + ' maybe not complete'), by9r4 = skpv + 0x1 + h8num_['length']);var yzr3o4 = d5t7g['localNSMap'],
              n_m0ju = d5t7g['tagName'] == h8num_;if (n_m0ju || d5t7g['tagName'] && d5t7g['tagName']['toLowerCase']() == h8num_['toLowerCase']()) {
            if (g15td7['endElement'](d5t7g['uri'], d5t7g['localName'], h8num_), yzr3o4) {
              for (var f75dt in yzr3o4) g15td7['endPrefixMapping'](f75dt);
            }n_m0ju || gt5d['fatalError']('end tag name: ' + h8num_ + ' is not match the current start tagName:' + d5t7g['tagName']);
          } else r9oyz['push'](d5t7g);by9r4++;break;case '?':
          piskv2 && ufm8_h(skpv), by9r4 = n_dt8h5(vg1xc, skpv, g15td7);break;case '!':
          piskv2 && ufm8_h(skpv), by9r4 = n_oe43(vg1xc, skpv, g15td7, gt5d);break;default:
          piskv2 && ufm8_h(skpv);var fh_t8d = new n_o03elz(),
              gscx1 = r9oyz[r9oyz['length'] - 0x1]['currentNSMap'],
              by9r4 = n_ol30ej(vg1xc, skpv, fh_t8d, gscx1, ciskxv, gt5d),
              fd5t7h = fh_t8d['length'];if (!fh_t8d['closed'] && n_nlem0j(vg1xc, by9r4, fh_t8d['tagName'], $rb4) && (fh_t8d['closed'] = !0x0, ctg17['nbsp'] || gt5d['warning']('unclosed xml attribute')), piskv2 && fd5t7h) {
            for (var jlmn0u = n_r9zq4(piskv2, {}), d1t = 0x0; d1t < fd5t7h; d1t++) {
              var mjun8 = fh_t8d[d1t];ufm8_h(mjun8['offset']), mjun8['locator'] = n_r9zq4(piskv2, {});
            }g15td7['locator'] = jlmn0u, n_dht57f(fh_t8d, g15td7, gscx1) && r9oyz['push'](fh_t8d), g15td7['locator'] = piskv2;
          } else n_dht57f(fh_t8d, g15td7, gscx1) && r9oyz['push'](fh_t8d);'http://www.w3.org/1999/xhtml' !== fh_t8d['uri'] || fh_t8d['closed'] ? by9r4++ : by9r4 = n_nj30l(vg1xc, by9r4, fh_t8d['tagName'], ciskxv, g15td7);}
    } catch (vpsi2) {
      gt5d['error']('element parse error: ' + vpsi2), by9r4 = -0x1;
    }ki2s < by9r4 ? ki2s = by9r4 : w6a$q(Math['max'](skpv, ki2s) + 0x1);
  }
}function n_r9zq4(nj3e0, um8h_f) {
  return um8h_f['lineNumber'] = nj3e0['lineNumber'], um8h_f['columnNumber'] = nj3e0['columnNumber'], um8h_f;
}function n_ol30ej(rb$q94, y3oze4, bqwr9$, xvisk, hf8u_, jm_nu8) {
  for (var ht75d, yr4zq9 = ++y3oze4, t71gd = n_ry3zo;;) {
    var nh_u = rb$q94['charAt'](yr4zq9);switch (nh_u) {case '=':
        if (t71gd === n_vix2ks) ht75d = rb$q94['slice'](y3oze4, yr4zq9), t71gd = n_mh8u;else {
          if (t71gd !== n_z9r4yo) throw new Error('attribute equal must after attrName');t71gd = n_mh8u;
        }break;case '\x27':case '\x22':
        if (t71gd === n_mh8u || t71gd === n_vix2ks) {
          if (t71gd === n_vix2ks && (jm_nu8['warning']('attribute value must after "="'), ht75d = rb$q94['slice'](y3oze4, yr4zq9)), !(0x0 < (yr4zq9 = rb$q94['indexOf'](nh_u, y3oze4 = yr4zq9 + 0x1)))) throw new Error('attribute value no end \'' + nh_u + '\' match');tf5g = rb$q94['slice'](y3oze4, yr4zq9)['replace'](/&#?\w+;/g, hf8u_), bqwr9$['add'](ht75d, tf5g, y3oze4 - 0x1), t71gd = n_$q9w6;
        } else {
          if (t71gd != n_fthd57) throw new Error('attribute value must after "="');tf5g = rb$q94['slice'](y3oze4, yr4zq9)['replace'](/&#?\w+;/g, hf8u_), bqwr9$['add'](ht75d, tf5g, y3oze4), jm_nu8['warning']('attribute "' + ht75d + '" missed start quot(' + nh_u + ')!!'), y3oze4 = yr4zq9 + 0x1, t71gd = n_$q9w6;
        }break;case '/':
        switch (t71gd) {case n_ry3zo:
            bqwr9$['setTagName'](rb$q94['slice'](y3oze4, yr4zq9));case n_$q9w6:case n_t7g5f:case n_yzor34:
            t71gd = n_yzor34, bqwr9$['closed'] = !0x0;case n_fthd57:case n_vix2ks:case n_z9r4yo:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return jm_nu8['error']('unexpected end of input'), t71gd == n_ry3zo && bqwr9$['setTagName'](rb$q94['slice'](y3oze4, yr4zq9)), yr4zq9;case '>':
        switch (t71gd) {case n_ry3zo:
            bqwr9$['setTagName'](rb$q94['slice'](y3oze4, yr4zq9));case n_$q9w6:case n_t7g5f:case n_yzor34:
            break;case n_fthd57:case n_vix2ks:
            '/' === (tf5g = rb$q94['slice'](y3oze4, yr4zq9))['slice'](-0x1) && (bqwr9$['closed'] = !0x0, tf5g = tf5g['slice'](0x0, -0x1));case n_z9r4yo:
            t71gd === n_z9r4yo && (tf5g = ht75d), t71gd == n_fthd57 ? (jm_nu8['warning']('attribute "' + tf5g + '" missed quot(")!!'), bqwr9$['add'](ht75d, tf5g['replace'](/&#?\w+;/g, hf8u_), y3oze4)) : ('http://www.w3.org/1999/xhtml' === xvisk[''] && tf5g['match'](/^(?:disabled|checked|selected)$/i) || jm_nu8['warning']('attribute "' + tf5g + '" missed value!! "' + tf5g + '" instead!!'), bqwr9$['add'](tf5g, tf5g, y3oze4));break;case n_mh8u:
            throw new Error('attribute value missed!!');}return yr4zq9;case '\u0080':
        nh_u = '\x20';default:
        if (nh_u <= '\x20') switch (t71gd) {case n_ry3zo:
            bqwr9$['setTagName'](rb$q94['slice'](y3oze4, yr4zq9)), t71gd = n_t7g5f;break;case n_vix2ks:
            ht75d = rb$q94['slice'](y3oze4, yr4zq9), t71gd = n_z9r4yo;break;case n_fthd57:
            var tf5g = rb$q94['slice'](y3oze4, yr4zq9)['replace'](/&#?\w+;/g, hf8u_);jm_nu8['warning']('attribute "' + tf5g + '" missed quot(")!!'), bqwr9$['add'](ht75d, tf5g, y3oze4);case n_$q9w6:
            t71gd = n_t7g5f;} else switch (t71gd) {case n_z9r4yo:
            bqwr9$['tagName'], 'http://www.w3.org/1999/xhtml' === xvisk[''] && ht75d['match'](/^(?:disabled|checked|selected)$/i) || jm_nu8['warning']('attribute "' + ht75d + '" missed value!! "' + ht75d + '" instead2!!'), bqwr9$['add'](ht75d, ht75d, y3oze4), y3oze4 = yr4zq9, t71gd = n_vix2ks;break;case n_$q9w6:
            jm_nu8['warning']('attribute space is required"' + ht75d + '\x22!!');case n_t7g5f:
            t71gd = n_vix2ks, y3oze4 = yr4zq9;break;case n_mh8u:
            t71gd = n_fthd57, y3oze4 = yr4zq9;break;case n_yzor34:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}yr4zq9++;
  }
}function n_dht57f(g1cx, u_jnm, um0jln) {
  for (var ht7df5 = g1cx['tagName'], q4b9$r = null, n8j_mu = g1cx['length']; n8j_mu--;) {
    var xsvc1g = g1cx[n8j_mu],
        h_8fmu = xsvc1g['qName'],
        mf_hu = xsvc1g['value'],
        e03oz;h_8fmu = 0x0 < (xg51c = h_8fmu['indexOf'](':')) ? (skxcvi = xsvc1g['prefix'] = h_8fmu['slice'](0x0, xg51c), e03oz = h_8fmu['slice'](xg51c + 0x1), 'xmlns' === skxcvi && e03oz) : (skxcvi = null, 'xmlns' === (e03oz = h_8fmu) && ''), xsvc1g['localName'] = e03oz, !0x1 !== h_8fmu && (null == q4b9$r && (q4b9$r = {}, n_z49ory(um0jln, um0jln = {})), um0jln[h_8fmu] = q4b9$r[h_8fmu] = mf_hu, xsvc1g['uri'] = 'http://www.w3.org/2000/xmlns/', u_jnm['startPrefixMapping'](h_8fmu, mf_hu));
  }for (n8j_mu = g1cx['length']; n8j_mu--;) (skxcvi = (xsvc1g = g1cx[n8j_mu])['prefix']) && ('xml' === skxcvi && (xsvc1g['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== skxcvi && (xsvc1g['uri'] = um0jln[skxcvi || '']));var xg51c;e03oz = 0x0 < (xg51c = ht7df5['indexOf'](':')) ? (skxcvi = g1cx['prefix'] = ht7df5['slice'](0x0, xg51c), g1cx['localName'] = ht7df5['slice'](xg51c + 0x1)) : (skxcvi = null, g1cx['localName'] = ht7df5);var $qr49b = g1cx['uri'] = um0jln[skxcvi || ''];if (u_jnm['startElement']($qr49b, e03oz, ht7df5, g1cx), !g1cx['closed']) return g1cx['currentNSMap'] = um0jln, g1cx['localNSMap'] = q4b9$r, !0x0;if (u_jnm['endElement']($qr49b, e03oz, ht7df5), q4b9$r) {
    for (var skxcvi in q4b9$r) u_jnm['endPrefixMapping'](skxcvi);
  }
}function n_nj30l(zeo34y, z9y4, f85tdh, elj30o, qa6bw) {
  if (/^(?:script|textarea)$/i['test'](f85tdh)) {
    var l3zeyo = zeo34y['indexOf']('</' + f85tdh + '>', z9y4),
        zeo34y = zeo34y['substring'](z9y4 + 0x1, l3zeyo);if (/[&<]/['test'](zeo34y)) return (/^script$/i['test'](f85tdh) || (zeo34y = zeo34y['replace'](/&#?\w+;/g, elj30o)), qa6bw['characters'](zeo34y, 0x0, zeo34y['length']), l3zeyo
    );
  }return z9y4 + 0x1;
}function n_nlem0j(u8_njm, y4zr9q, _uh, c15x7g) {
  var kcxivs = c15x7g[_uh];return null == kcxivs && ((kcxivs = u8_njm['lastIndexOf']('</' + _uh + '>')) < y4zr9q && (kcxivs = u8_njm['lastIndexOf']('</' + _uh)), c15x7g[_uh] = kcxivs), kcxivs < y4zr9q;
}function n_z49ory(eoz3l0, y9r4z) {
  for (var l3jne in eoz3l0) y9r4z[l3jne] = eoz3l0[l3jne];
}function n_oe43(mj0el, du8hf, dth5f, umn_0) {
  var byqr = mj0el['charAt'](du8hf + 0x2);if ('-' === byqr) return '-' !== mj0el['charAt'](du8hf + 0x3) ? -0x1 : du8hf < (bq$ = mj0el['indexOf']('-->', du8hf + 0x4)) ? (dth5f['comment'](mj0el, du8hf + 0x4, bq$ - du8hf - 0x4), bq$ + 0x3) : (umn_0['error']('Unclosed comment'), -0x1);if ('CDATA[' == mj0el['substr'](du8hf + 0x3, 0x6)) {
    var bq$ = mj0el['indexOf'](']]>', du8hf + 0x9);return dth5f['startCDATA'](), dth5f['characters'](mj0el, du8hf + 0x9, bq$ - du8hf - 0x9), dth5f['endCDATA'](), bq$ + 0x3;
  }byqr = n_gf5td(mj0el, du8hf), umn_0 = byqr['length'];if (0x1 < umn_0 && /!doctype/i['test'](byqr[0x0][0x0])) return bq$ = byqr[0x1][0x0], mj0el = 0x3 < umn_0 && /^public$/i['test'](byqr[0x2][0x0]) && byqr[0x3][0x0], du8hf = 0x4 < umn_0 && byqr[0x4][0x0], umn_0 = byqr[umn_0 - 0x1], (dth5f['startDTD'](bq$, mj0el && mj0el['replace'](/^(['"])(.*?)\1$/, '$2'), du8hf && du8hf['replace'](/^(['"])(.*?)\1$/, '$2')), dth5f['endDTD'](), umn_0['index'] + umn_0[0x0]['length']);return -0x1;
}function n_dt8h5(mnel0, t7dhf5, svxk1c) {
  var e4z3yo = mnel0['indexOf']('?>', t7dhf5);if (e4z3yo) return t7dhf5 = mnel0['substring'](t7dhf5, e4z3yo)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), t7dhf5 ? (t7dhf5[0x0]['length'], svxk1c['processingInstruction'](t7dhf5[0x1], t7dhf5[0x2]), e4z3yo + 0x2) : -0x1;return -0x1;
}function n_o03elz() {}function n_xv1cgs($6bq, m8nu_h) {
  return $6bq['__proto__'] = m8nu_h, $6bq;
}function n_gf5td(zy49, _8fhd) {
  var le3oyz,
      o3e0l = [],
      zyro = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zyro['lastIndex'] = _8fhd, zyro['exec'](zy49); le3oyz = zyro['exec'](zy49);) if (o3e0l['push'](le3oyz), le3oyz[0x1]) return o3e0l;
}var n__8ufhd = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_s2ixvk = new RegExp('[\\-\\.0-9' + n__8ufhd['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_t5fhd8 = new RegExp('^' + n__8ufhd['source'] + n_s2ixvk['source'] + '*(?::' + n__8ufhd['source'] + n_s2ixvk['source'] + '*)?$'),
    n_ry3zo = 0x0,
    n_vix2ks = 0x1,
    n_z9r4yo = 0x2,
    n_mh8u = 0x3,
    n_fthd57 = 0x4,
    n_$q9w6 = 0x5,
    n_t7g5f = 0x6,
    n_yzor34 = 0x7;n_fdtg7['prototype'] = { 'parse': function (ht8f, dtfh8_, s1g7) {
    var qaw$b = this['domBuilder'];qaw$b['startDocument'](), n_z49ory(dtfh8_, dtfh8_ = {}), n_x71cg(ht8f, dtfh8_, s1g7, qaw$b, this['errorHandler']), qaw$b['endDocument']();
  } }, n_o03elz['prototype'] = { 'setTagName': function (rb$4q) {
    if (!n_t5fhd8['test'](rb$4q)) throw new Error('invalid tagName:' + rb$4q);this['tagName'] = rb$4q;
  }, 'add': function (rqby4, fd7h5, kvxi) {
    if (!n_t5fhd8['test'](rqby4)) throw new Error('invalid attribute:' + rqby4);this[this['length']++] = { 'qName': rqby4, 'value': fd7h5, 'offset': kvxi };
  }, 'length': 0x0, 'getLocalName': function (kscv1) {
    return this[kscv1]['localName'];
  }, 'getLocator': function (b6w9$) {
    return this[b6w9$]['locator'];
  }, 'getQName': function (eyz34) {
    return this[eyz34]['qName'];
  }, 'getURI': function (g57cx1) {
    return this[g57cx1]['uri'];
  }, 'getValue': function (kixs2) {
    return this[kixs2]['value'];
  } }, n_xv1cgs({}, n_xv1cgs['prototype']) instanceof n_xv1cgs || (n_xv1cgs = function (n0luj, m_fu8h) {
  function xcsikv() {}for (m_fu8h in xcsikv['prototype'] = m_fu8h, xcsikv = new xcsikv(), n0luj) xcsikv[m_fu8h] = n0luj[m_fu8h];return xcsikv;
}), exports['XMLReader'] = n_fdtg7;