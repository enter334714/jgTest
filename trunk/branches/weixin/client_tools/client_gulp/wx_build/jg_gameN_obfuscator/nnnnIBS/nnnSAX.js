var A = wx.$N;
function n_r49q$b() {}function n_bq9y4r(skc1vx, fu_d, hmu_n, c1xvk, z9yr4q) {
  function xksvi2(csx1g) {
    if (csx1g > 0xffff) {
      csx1g -= 0x10000;var e0lzo = 0xd800 + (csx1g >> 0xa),
          eylz = 0xdc00 + (0x3ff & csx1g);return String['fromCharCode'](e0lzo, eylz);
    }return String['fromCharCode'](csx1g);
  }function _h8nmu(gc715) {
    var gxs71c = gc715['slice'](0x1, -0x1);return gxs71c in hmu_n ? hmu_n[gxs71c] : '#' === gxs71c['charAt'](0x0) ? xksvi2(parseInt(gxs71c['substr'](0x1)['replace']('x', '0x'))) : (z9yr4q['error']('entity not found:' + gc715), gc715);
  }function _n8jmu(bqw$r9) {
    if (bqw$r9 > svx1g) {
      var eyolz = skc1vx['substring'](svx1g, bqw$r9)['replace'](/&#?\w+;/g, _h8nmu);hd_8 && mfh_u8(svx1g), c1xvk['characters'](eyolz, 0x0, bqw$r9 - svx1g), svx1g = bqw$r9;
    }
  }function mfh_u8(xciskv, bq$6a) {
    for (; xciskv >= ksvip2 && (bq$6a = vcxiks['exec'](skc1vx));) s7xc = bq$6a['index'], ksvip2 = s7xc + bq$6a[0x0]['length'], hd_8['lineNumber']++;hd_8['columnNumber'] = xciskv - s7xc + 0x1;
  }for (var s7xc = 0x0, ksvip2 = 0x0, vcxiks = /.*(?:\r\n?|\n)|.*$/g, hd_8 = c1xvk['locator'], ozy43e = [{ 'currentNSMap': fu_d }], c7t5g = {}, svx1g = 0x0;;) {
    try {
      var q6w$ab = skc1vx['indexOf']('<', svx1g);if (0x0 > q6w$ab) {
        if (!skc1vx['substr'](svx1g)['match'](/^\s*$/)) {
          var o34z = c1xvk['doc'],
              k1cvxs = o34z['createTextNode'](skc1vx['substr'](svx1g));o34z['appendChild'](k1cvxs), c1xvk['currentElement'] = k1cvxs;
        }return;
      }switch (q6w$ab > svx1g && _n8jmu(q6w$ab), skc1vx['charAt'](q6w$ab + 0x1)) {case '/':
          var $9bq4r = skc1vx['indexOf']('>', q6w$ab + 0x3),
              z3yo = skc1vx['substring'](q6w$ab + 0x2, $9bq4r),
              t75hf = ozy43e['pop']();0x0 > $9bq4r ? (z3yo = skc1vx['substring'](q6w$ab + 0x2)['replace'](/[\s<].*/, ''), z9yr4q['error']('end tag name: ' + z3yo + ' is not complete:' + t75hf['tagName']), $9bq4r = q6w$ab + 0x1 + z3yo['length']) : z3yo['match'](/\s</) && (z3yo = z3yo['replace'](/[\s<].*/, ''), z9yr4q['error']('end tag name: ' + z3yo + ' maybe not complete'), $9bq4r = q6w$ab + 0x1 + z3yo['length']);var hdt57 = t75hf['localNSMap'],
              mu0l = t75hf['tagName'] == z3yo,
              y49o = mu0l || t75hf['tagName'] && t75hf['tagName']['toLowerCase']() == z3yo['toLowerCase']();if (y49o) {
            if (c1xvk['endElement'](t75hf['uri'], t75hf['localName'], z3yo), hdt57) {
              for (var d5hft in hdt57) c1xvk['endPrefixMapping'](d5hft);
            }mu0l || z9yr4q['fatalError']('end tag name: ' + z3yo + ' is not match the current start tagName:' + t75hf['tagName']);
          } else ozy43e['push'](t75hf);$9bq4r++;break;case '?':
          hd_8 && mfh_u8(q6w$ab), $9bq4r = n_mfu_(skc1vx, q6w$ab, c1xvk);break;case '!':
          hd_8 && mfh_u8(q6w$ab), $9bq4r = n_ye3ozl(skc1vx, q6w$ab, c1xvk, z9yr4q);break;default:
          hd_8 && mfh_u8(q6w$ab);var y94qbr = new n_q9bwr(),
              eljm0n = ozy43e[ozy43e['length'] - 0x1]['currentNSMap'],
              $9bq4r = n_r4qb9(skc1vx, q6w$ab, y94qbr, eljm0n, _h8nmu, z9yr4q),
              htd_f8 = y94qbr['length'];if (!y94qbr['closed'] && n_vcksx1(skc1vx, $9bq4r, y94qbr['tagName'], c7t5g) && (y94qbr['closed'] = !0x0, hmu_n['nbsp'] || z9yr4q['warning']('unclosed xml attribute')), hd_8 && htd_f8) {
            for (var uhfm = n_td5f7(hd_8, {}), x1svkc = 0x0; htd_f8 > x1svkc; x1svkc++) {
              var h7ftd5 = y94qbr[x1svkc];mfh_u8(h7ftd5['offset']), h7ftd5['locator'] = n_td5f7(hd_8, {});
            }c1xvk['locator'] = uhfm, n_vk2ps(y94qbr, c1xvk, eljm0n) && ozy43e['push'](y94qbr), c1xvk['locator'] = hd_8;
          } else n_vk2ps(y94qbr, c1xvk, eljm0n) && ozy43e['push'](y94qbr);'http://www.w3.org/1999/xhtml' !== y94qbr['uri'] || y94qbr['closed'] ? $9bq4r++ : $9bq4r = n_df8ht_(skc1vx, $9bq4r, y94qbr['tagName'], _h8nmu, c1xvk);}
    } catch (tg5f7d) {
      z9yr4q['error']('element parse error: ' + tg5f7d), $9bq4r = -0x1;
    }$9bq4r > svx1g ? svx1g = $9bq4r : _n8jmu(Math['max'](q6w$ab, svx1g) + 0x1);
  }
}function n_td5f7(m_unj, g7c15) {
  return g7c15['lineNumber'] = m_unj['lineNumber'], g7c15['columnNumber'] = m_unj['columnNumber'], g7c15;
}function n_r4qb9(rz4oy, r4qyz9, $a6wbq, ez0lo3, cg15x7, mhn) {
  for (var qba$w, d8hf_u, vikp = ++r4qyz9, q$6bw = n_ivkp;;) {
    var rqzy4 = rz4oy['charAt'](vikp);switch (rqzy4) {case '=':
        if (q$6bw === n_iv2sx) qba$w = rz4oy['slice'](r4qyz9, vikp), q$6bw = n_h7td5f;else {
          if (q$6bw !== n_xkisv) throw new Error('attribute equal must after attrName');q$6bw = n_h7td5f;
        }break;case '\x27':case '\x22':
        if (q$6bw === n_h7td5f || q$6bw === n_iv2sx) {
          if (q$6bw === n_iv2sx && (mhn['warning']('attribute value must after "="'), qba$w = rz4oy['slice'](r4qyz9, vikp)), r4qyz9 = vikp + 0x1, vikp = rz4oy['indexOf'](rqzy4, r4qyz9), !(vikp > 0x0)) throw new Error('attribute value no end \'' + rqzy4 + '\' match');d8hf_u = rz4oy['slice'](r4qyz9, vikp)['replace'](/&#?\w+;/g, cg15x7), $a6wbq['add'](qba$w, d8hf_u, r4qyz9 - 0x1), q$6bw = n_fh7d5t;
        } else {
          if (q$6bw != n_csxi) throw new Error('attribute value must after "="');d8hf_u = rz4oy['slice'](r4qyz9, vikp)['replace'](/&#?\w+;/g, cg15x7), $a6wbq['add'](qba$w, d8hf_u, r4qyz9), mhn['warning']('attribute "' + qba$w + '" missed start quot(' + rqzy4 + ')!!'), r4qyz9 = vikp + 0x1, q$6bw = n_fh7d5t;
        }break;case '/':
        switch (q$6bw) {case n_ivkp:
            $a6wbq['setTagName'](rz4oy['slice'](r4qyz9, vikp));case n_fh7d5t:case n_ikvsx:case n_ljmne:
            q$6bw = n_ljmne, $a6wbq['closed'] = !0x0;case n_csxi:case n_iv2sx:case n_xkisv:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mhn['error']('unexpected end of input'), q$6bw == n_ivkp && $a6wbq['setTagName'](rz4oy['slice'](r4qyz9, vikp)), vikp;case '>':
        switch (q$6bw) {case n_ivkp:
            $a6wbq['setTagName'](rz4oy['slice'](r4qyz9, vikp));case n_fh7d5t:case n_ikvsx:case n_ljmne:
            break;case n_csxi:case n_iv2sx:
            d8hf_u = rz4oy['slice'](r4qyz9, vikp), '/' === d8hf_u['slice'](-0x1) && ($a6wbq['closed'] = !0x0, d8hf_u = d8hf_u['slice'](0x0, -0x1));case n_xkisv:
            q$6bw === n_xkisv && (d8hf_u = qba$w), q$6bw == n_csxi ? (mhn['warning']('attribute "' + d8hf_u + '" missed quot(")!!'), $a6wbq['add'](qba$w, d8hf_u['replace'](/&#?\w+;/g, cg15x7), r4qyz9)) : ('http://www.w3.org/1999/xhtml' === ez0lo3[''] && d8hf_u['match'](/^(?:disabled|checked|selected)$/i) || mhn['warning']('attribute "' + d8hf_u + '" missed value!! "' + d8hf_u + '" instead!!'), $a6wbq['add'](d8hf_u, d8hf_u, r4qyz9));break;case n_h7td5f:
            throw new Error('attribute value missed!!');}return vikp;case '\u0080':
        rqzy4 = '\x20';default:
        if ('\x20' >= rqzy4) switch (q$6bw) {case n_ivkp:
            $a6wbq['setTagName'](rz4oy['slice'](r4qyz9, vikp)), q$6bw = n_ikvsx;break;case n_iv2sx:
            qba$w = rz4oy['slice'](r4qyz9, vikp), q$6bw = n_xkisv;break;case n_csxi:
            var d8hf_u = rz4oy['slice'](r4qyz9, vikp)['replace'](/&#?\w+;/g, cg15x7);mhn['warning']('attribute "' + d8hf_u + '" missed quot(")!!'), $a6wbq['add'](qba$w, d8hf_u, r4qyz9);case n_fh7d5t:
            q$6bw = n_ikvsx;} else switch (q$6bw) {case n_xkisv:
            {
              $a6wbq['tagName'];
            }'http://www.w3.org/1999/xhtml' === ez0lo3[''] && qba$w['match'](/^(?:disabled|checked|selected)$/i) || mhn['warning']('attribute "' + qba$w + '" missed value!! "' + qba$w + '" instead2!!'), $a6wbq['add'](qba$w, qba$w, r4qyz9), r4qyz9 = vikp, q$6bw = n_iv2sx;break;case n_fh7d5t:
            mhn['warning']('attribute space is required"' + qba$w + '\x22!!');case n_ikvsx:
            q$6bw = n_iv2sx, r4qyz9 = vikp;break;case n_h7td5f:
            q$6bw = n_csxi, r4qyz9 = vikp;break;case n_ljmne:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}vikp++;
  }
}function n_vk2ps(hm8fu_, yo3lez, t7d1) {
  for (var yz3oel = hm8fu_['tagName'], d5g1t = null, wb$rq = hm8fu_['length']; wb$rq--;) {
    var f8d5t = hm8fu_[wb$rq],
        xvgsc1 = f8d5t['qName'],
        qab6$ = f8d5t['value'],
        g5 = xvgsc1['indexOf'](':');if (g5 > 0x0) var mjn0_ = f8d5t['prefix'] = xvgsc1['slice'](0x0, g5),
        yz4o3r = xvgsc1['slice'](g5 + 0x1),
        ht75fd = 'xmlns' === mjn0_ && yz4o3r;else yz4o3r = xvgsc1, mjn0_ = null, ht75fd = 'xmlns' === xvgsc1 && '';f8d5t['localName'] = yz4o3r, ht75fd !== !0x1 && (null == d5g1t && (d5g1t = {}, n_$9qbw(t7d1, t7d1 = {})), t7d1[ht75fd] = d5g1t[ht75fd] = qab6$, f8d5t['uri'] = 'http://www.w3.org/2000/xmlns/', yo3lez['startPrefixMapping'](ht75fd, qab6$));
  }for (var wb$rq = hm8fu_['length']; wb$rq--;) {
    f8d5t = hm8fu_[wb$rq];var mjn0_ = f8d5t['prefix'];mjn0_ && ('xml' === mjn0_ && (f8d5t['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mjn0_ && (f8d5t['uri'] = t7d1[mjn0_ || '']));
  }var g5 = yz3oel['indexOf'](':');g5 > 0x0 ? (mjn0_ = hm8fu_['prefix'] = yz3oel['slice'](0x0, g5), yz4o3r = hm8fu_['localName'] = yz3oel['slice'](g5 + 0x1)) : (mjn0_ = null, yz4o3r = hm8fu_['localName'] = yz3oel);var qwa$6b = hm8fu_['uri'] = t7d1[mjn0_ || ''];if (yo3lez['startElement'](qwa$6b, yz4o3r, yz3oel, hm8fu_), !hm8fu_['closed']) return hm8fu_['currentNSMap'] = t7d1, hm8fu_['localNSMap'] = d5g1t, !0x0;if (yo3lez['endElement'](qwa$6b, yz4o3r, yz3oel), d5g1t) {
    for (mjn0_ in d5g1t) yo3lez['endPrefixMapping'](mjn0_);
  }
}function n_df8ht_(csgx1v, sickv, gd75, rqb94$, nu0m_j) {
  if (/^(?:script|textarea)$/i['test'](gd75)) {
    var z4o3ry = csgx1v['indexOf']('</' + gd75 + '>', sickv),
        dh8_fu = csgx1v['substring'](sickv + 0x1, z4o3ry);if (/[&<]/['test'](dh8_fu)) return (/^script$/i['test'](gd75) ? (nu0m_j['characters'](dh8_fu, 0x0, dh8_fu['length']), z4o3ry) : (dh8_fu = dh8_fu['replace'](/&#?\w+;/g, rqb94$), nu0m_j['characters'](dh8_fu, 0x0, dh8_fu['length']), z4o3ry)
    );
  }return sickv + 0x1;
}function n_vcksx1(y4ozr9, wqrb, ey3zol, zor9y) {
  var jn_u = zor9y[ey3zol];return null == jn_u && (jn_u = y4ozr9['lastIndexOf']('</' + ey3zol + '>'), wqrb > jn_u && (jn_u = y4ozr9['lastIndexOf']('</' + ey3zol)), zor9y[ey3zol] = jn_u), wqrb > jn_u;
}function n_$9qbw(uj0_, ud8fh_) {
  for (var h_fd8 in uj0_) ud8fh_[h_fd8] = uj0_[h_fd8];
}function n_ye3ozl(ye3zl, xc1g57, sip2, yroz49) {
  var yol3e = ye3zl['charAt'](xc1g57 + 0x2);switch (yol3e) {case '-':
      if ('-' === ye3zl['charAt'](xc1g57 + 0x3)) {
        var hduf_ = ye3zl['indexOf']('-->', xc1g57 + 0x4);return hduf_ > xc1g57 ? (sip2['comment'](ye3zl, xc1g57 + 0x4, hduf_ - xc1g57 - 0x4), hduf_ + 0x3) : (yroz49['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ye3zl['substr'](xc1g57 + 0x3, 0x6)) {
        var hduf_ = ye3zl['indexOf'](']]>', xc1g57 + 0x9);return sip2['startCDATA'](), sip2['characters'](ye3zl, xc1g57 + 0x9, hduf_ - xc1g57 - 0x9), sip2['endCDATA'](), hduf_ + 0x3;
      }var j0l3oe = n_z4oye(ye3zl, xc1g57),
          g71tc5 = j0l3oe['length'];if (g71tc5 > 0x1 && /!doctype/i['test'](j0l3oe[0x0][0x0])) {
        var xc7g51 = j0l3oe[0x1][0x0],
            u8n_h = g71tc5 > 0x3 && /^public$/i['test'](j0l3oe[0x2][0x0]) && j0l3oe[0x3][0x0],
            ulj0m = g71tc5 > 0x4 && j0l3oe[0x4][0x0],
            gxc75 = j0l3oe[g71tc5 - 0x1];return sip2['startDTD'](xc7g51, u8n_h && u8n_h['replace'](/^(['"])(.*?)\1$/, '$2'), ulj0m && ulj0m['replace'](/^(['"])(.*?)\1$/, '$2')), sip2['endDTD'](), gxc75['index'] + gxc75[0x0]['length'];
      }}return -0x1;
}function n_mfu_(el03zo, f58dt, ye3loz) {
  var b$aqw6 = el03zo['indexOf']('?>', f58dt);if (b$aqw6) {
    var vk2psi = el03zo['substring'](f58dt, b$aqw6)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (vk2psi) {
      {
        vk2psi[0x0]['length'];
      }return ye3loz['processingInstruction'](vk2psi[0x1], vk2psi[0x2]), b$aqw6 + 0x2;
    }return -0x1;
  }return -0x1;
}function n_q9bwr() {}function n_qwab6$(df8th5, isvkp2) {
  return df8th5['__proto__'] = isvkp2, df8th5;
}function n_z4oye(unmj0_, ez0l3o) {
  var yrb9q,
      or4yz3 = [],
      fh5dt7 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (fh5dt7['lastIndex'] = ez0l3o, fh5dt7['exec'](unmj0_); yrb9q = fh5dt7['exec'](unmj0_);) if (or4yz3['push'](yrb9q), yrb9q[0x1]) return or4yz3;
}var n_q$69 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_n03elj = new RegExp('[\\-\\.0-9' + n_q$69['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_qyb94 = new RegExp('^' + n_q$69['source'] + n_n03elj['source'] + '*(?::' + n_q$69['source'] + n_n03elj['source'] + '*)?$'),
    n_ivkp = 0x0,
    n_iv2sx = 0x1,
    n_xkisv = 0x2,
    n_h7td5f = 0x3,
    n_csxi = 0x4,
    n_fh7d5t = 0x5,
    n_ikvsx = 0x6,
    n_ljmne = 0x7;n_r49q$b['prototype'] = { 'parse': function (z0l3e, ryz4o9, x2vi) {
    var gfd75 = this['domBuilder'];gfd75['startDocument'](), n_$9qbw(ryz4o9, ryz4o9 = {}), n_bq9y4r(z0l3e, ryz4o9, x2vi, gfd75, this['errorHandler']), gfd75['endDocument']();
  } }, n_q9bwr['prototype'] = { 'setTagName': function (h8duf_) {
    if (!n_qyb94['test'](h8duf_)) throw new Error('invalid tagName:' + h8duf_);this['tagName'] = h8duf_;
  }, 'add': function (zr9q4y, yqbr9, bw96) {
    if (!n_qyb94['test'](zr9q4y)) throw new Error('invalid attribute:' + zr9q4y);this[this['length']++] = { 'qName': zr9q4y, 'value': yqbr9, 'offset': bw96 };
  }, 'length': 0x0, 'getLocalName': function (t5d7gf) {
    return this[t5d7gf]['localName'];
  }, 'getLocator': function (je3l0o) {
    return this[je3l0o]['locator'];
  }, 'getQName': function (dfh7t) {
    return this[dfh7t]['qName'];
  }, 'getURI': function (g5cx17) {
    return this[g5cx17]['uri'];
  }, 'getValue': function (zyrq49) {
    return this[zyrq49]['value'];
  } }, n_qwab6$({}, n_qwab6$['prototype']) instanceof n_qwab6$ || (n_qwab6$ = function (c1s7g, u0_jmn) {
  function kcv1s() {}kcv1s['prototype'] = u0_jmn, kcv1s = new kcv1s();for (u0_jmn in c1s7g) kcv1s[u0_jmn] = c1s7g[u0_jmn];return kcv1s;
}), exports['XMLReader'] = n_r49q$b;