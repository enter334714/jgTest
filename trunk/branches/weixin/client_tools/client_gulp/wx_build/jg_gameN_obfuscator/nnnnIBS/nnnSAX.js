var A = wx.$N;
function n_wrq9$b() {}function n_h_mfu8(vsk2ip, _8nj, g7c5x, xvgc, ki2xv) {
  function lem0nj(fum_8) {
    if (fum_8 > 0xffff) {
      fum_8 -= 0x10000;var fth_ = 0xd800 + (fum_8 >> 0xa),
          rwq9$ = 0xdc00 + (0x3ff & fum_8);return String['fromCharCode'](fth_, rwq9$);
    }return String['fromCharCode'](fum_8);
  }function e4zo3y(fd7gt) {
    var eoy4 = fd7gt['slice'](0x1, -0x1);return eoy4 in g7c5x ? g7c5x[eoy4] : '#' === eoy4['charAt'](0x0) ? lem0nj(parseInt(eoy4['substr'](0x1)['replace']('x', '0x'))) : (ki2xv['error']('entity not found:' + fd7gt), fd7gt);
  }function m8_j(s2vpki) {
    if (s2vpki > f8td_h) {
      var fudh_ = vsk2ip['substring'](f8td_h, s2vpki)['replace'](/&#?\w+;/g, e4zo3y);h8t5df && r$qb94(f8td_h), xvgc['characters'](fudh_, 0x0, s2vpki - f8td_h), f8td_h = s2vpki;
    }
  }function r$qb94(q$49rb, kix2) {
    for (; q$49rb >= qyb4 && (kix2 = lj3eo0['exec'](vsk2ip));) qw$9br = kix2['index'], qyb4 = qw$9br + kix2[0x0]['length'], h8t5df['lineNumber']++;h8t5df['columnNumber'] = q$49rb - qw$9br + 0x1;
  }for (var qw$9br = 0x0, qyb4 = 0x0, lj3eo0 = /.*(?:\r\n?|\n)|.*$/g, h8t5df = xvgc['locator'], scvg1x = [{ 'currentNSMap': _8nj }], ujl0mn = {}, f8td_h = 0x0;;) {
    try {
      var rq9zy = vsk2ip['indexOf']('<', f8td_h);if (0x0 > rq9zy) {
        if (!vsk2ip['substr'](f8td_h)['match'](/^\s*$/)) {
          var e0lo3z = xvgc['doc'],
              cx51g7 = e0lo3z['createTextNode'](vsk2ip['substr'](f8td_h));e0lo3z['appendChild'](cx51g7), xvgc['currentElement'] = cx51g7;
        }return;
      }switch (rq9zy > f8td_h && m8_j(rq9zy), vsk2ip['charAt'](rq9zy + 0x1)) {case '/':
          var br$9w = vsk2ip['indexOf']('>', rq9zy + 0x3),
              j3n0e = vsk2ip['substring'](rq9zy + 0x2, br$9w),
              j_8 = scvg1x['pop']();0x0 > br$9w ? (j3n0e = vsk2ip['substring'](rq9zy + 0x2)['replace'](/[\s<].*/, ''), ki2xv['error']('end tag name: ' + j3n0e + ' is not complete:' + j_8['tagName']), br$9w = rq9zy + 0x1 + j3n0e['length']) : j3n0e['match'](/\s</) && (j3n0e = j3n0e['replace'](/[\s<].*/, ''), ki2xv['error']('end tag name: ' + j3n0e + ' maybe not complete'), br$9w = rq9zy + 0x1 + j3n0e['length']);var tc71 = j_8['localNSMap'],
              ljn3e0 = j_8['tagName'] == j3n0e,
              zo4y = ljn3e0 || j_8['tagName'] && j_8['tagName']['toLowerCase']() == j3n0e['toLowerCase']();if (zo4y) {
            if (xvgc['endElement'](j_8['uri'], j_8['localName'], j3n0e), tc71) {
              for (var y3rz4 in tc71) xvgc['endPrefixMapping'](y3rz4);
            }ljn3e0 || ki2xv['fatalError']('end tag name: ' + j3n0e + ' is not match the current start tagName:' + j_8['tagName']);
          } else scvg1x['push'](j_8);br$9w++;break;case '?':
          h8t5df && r$qb94(rq9zy), br$9w = n_yle3(vsk2ip, rq9zy, xvgc);break;case '!':
          h8t5df && r$qb94(rq9zy), br$9w = n_jmn0_u(vsk2ip, rq9zy, xvgc, ki2xv);break;default:
          h8t5df && r$qb94(rq9zy);var uhf = new n_tgc57(),
              el0j3n = scvg1x[scvg1x['length'] - 0x1]['currentNSMap'],
              br$9w = n_hfd_(vsk2ip, rq9zy, uhf, el0j3n, e4zo3y, ki2xv),
              x5g = uhf['length'];if (!uhf['closed'] && n_wb$a6(vsk2ip, br$9w, uhf['tagName'], ujl0mn) && (uhf['closed'] = !0x0, g7c5x['nbsp'] || ki2xv['warning']('unclosed xml attribute')), h8t5df && x5g) {
            for (var pskiv = n_uf8mh(h8t5df, {}), $6qw = 0x0; x5g > $6qw; $6qw++) {
              var hmn8 = uhf[$6qw];r$qb94(hmn8['offset']), hmn8['locator'] = n_uf8mh(h8t5df, {});
            }xvgc['locator'] = pskiv, n_fh85t(uhf, xvgc, el0j3n) && scvg1x['push'](uhf), xvgc['locator'] = h8t5df;
          } else n_fh85t(uhf, xvgc, el0j3n) && scvg1x['push'](uhf);'http://www.w3.org/1999/xhtml' !== uhf['uri'] || uhf['closed'] ? br$9w++ : br$9w = n_yzo3r(vsk2ip, br$9w, uhf['tagName'], e4zo3y, xvgc);}
    } catch (y4or) {
      ki2xv['error']('element parse error: ' + y4or), br$9w = -0x1;
    }br$9w > f8td_h ? f8td_h = br$9w : m8_j(Math['max'](rq9zy, f8td_h) + 0x1);
  }
}function n_uf8mh(nj0mel, jel0o3) {
  return jel0o3['lineNumber'] = nj0mel['lineNumber'], jel0o3['columnNumber'] = nj0mel['columnNumber'], jel0o3;
}function n_hfd_(o3ezy, meljn, htf85, fh7d5t, x1vgs, ej3ln) {
  for (var b6$w9, oyr34, loez0 = ++meljn, xsvcki = n_n0muj_;;) {
    var _nmj8u = o3ezy['charAt'](loez0);switch (_nmj8u) {case '=':
        if (xsvcki === n_svi2kp) b6$w9 = o3ezy['slice'](meljn, loez0), xsvcki = n_u8mjn;else {
          if (xsvcki !== n_l0menj) throw new Error('attribute equal must after attrName');xsvcki = n_u8mjn;
        }break;case '\x27':case '\x22':
        if (xsvcki === n_u8mjn || xsvcki === n_svi2kp) {
          if (xsvcki === n_svi2kp && (ej3ln['warning']('attribute value must after "="'), b6$w9 = o3ezy['slice'](meljn, loez0)), meljn = loez0 + 0x1, loez0 = o3ezy['indexOf'](_nmj8u, meljn), !(loez0 > 0x0)) throw new Error('attribute value no end \'' + _nmj8u + '\' match');oyr34 = o3ezy['slice'](meljn, loez0)['replace'](/&#?\w+;/g, x1vgs), htf85['add'](b6$w9, oyr34, meljn - 0x1), xsvcki = n_$9wbq;
        } else {
          if (xsvcki != n_eo3l0) throw new Error('attribute value must after "="');oyr34 = o3ezy['slice'](meljn, loez0)['replace'](/&#?\w+;/g, x1vgs), htf85['add'](b6$w9, oyr34, meljn), ej3ln['warning']('attribute "' + b6$w9 + '" missed start quot(' + _nmj8u + ')!!'), meljn = loez0 + 0x1, xsvcki = n_$9wbq;
        }break;case '/':
        switch (xsvcki) {case n_n0muj_:
            htf85['setTagName'](o3ezy['slice'](meljn, loez0));case n_$9wbq:case n_mujln:case n_d7t5g1:
            xsvcki = n_d7t5g1, htf85['closed'] = !0x0;case n_eo3l0:case n_svi2kp:case n_l0menj:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ej3ln['error']('unexpected end of input'), xsvcki == n_n0muj_ && htf85['setTagName'](o3ezy['slice'](meljn, loez0)), loez0;case '>':
        switch (xsvcki) {case n_n0muj_:
            htf85['setTagName'](o3ezy['slice'](meljn, loez0));case n_$9wbq:case n_mujln:case n_d7t5g1:
            break;case n_eo3l0:case n_svi2kp:
            oyr34 = o3ezy['slice'](meljn, loez0), '/' === oyr34['slice'](-0x1) && (htf85['closed'] = !0x0, oyr34 = oyr34['slice'](0x0, -0x1));case n_l0menj:
            xsvcki === n_l0menj && (oyr34 = b6$w9), xsvcki == n_eo3l0 ? (ej3ln['warning']('attribute "' + oyr34 + '" missed quot(")!!'), htf85['add'](b6$w9, oyr34['replace'](/&#?\w+;/g, x1vgs), meljn)) : ('http://www.w3.org/1999/xhtml' === fh7d5t[''] && oyr34['match'](/^(?:disabled|checked|selected)$/i) || ej3ln['warning']('attribute "' + oyr34 + '" missed value!! "' + oyr34 + '" instead!!'), htf85['add'](oyr34, oyr34, meljn));break;case n_u8mjn:
            throw new Error('attribute value missed!!');}return loez0;case '\u0080':
        _nmj8u = '\x20';default:
        if ('\x20' >= _nmj8u) switch (xsvcki) {case n_n0muj_:
            htf85['setTagName'](o3ezy['slice'](meljn, loez0)), xsvcki = n_mujln;break;case n_svi2kp:
            b6$w9 = o3ezy['slice'](meljn, loez0), xsvcki = n_l0menj;break;case n_eo3l0:
            var oyr34 = o3ezy['slice'](meljn, loez0)['replace'](/&#?\w+;/g, x1vgs);ej3ln['warning']('attribute "' + oyr34 + '" missed quot(")!!'), htf85['add'](b6$w9, oyr34, meljn);case n_$9wbq:
            xsvcki = n_mujln;} else switch (xsvcki) {case n_l0menj:
            {
              htf85['tagName'];
            }'http://www.w3.org/1999/xhtml' === fh7d5t[''] && b6$w9['match'](/^(?:disabled|checked|selected)$/i) || ej3ln['warning']('attribute "' + b6$w9 + '" missed value!! "' + b6$w9 + '" instead2!!'), htf85['add'](b6$w9, b6$w9, meljn), meljn = loez0, xsvcki = n_svi2kp;break;case n_$9wbq:
            ej3ln['warning']('attribute space is required"' + b6$w9 + '\x22!!');case n_mujln:
            xsvcki = n_svi2kp, meljn = loez0;break;case n_u8mjn:
            xsvcki = n_eo3l0, meljn = loez0;break;case n_d7t5g1:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}loez0++;
  }
}function n_fh85t(ln0emj, mejln0, $69wq) {
  for (var qzr9y = ln0emj['tagName'], emj = null, uh_d = ln0emj['length']; uh_d--;) {
    var olj0 = ln0emj[uh_d],
        ej30ln = olj0['qName'],
        e0l3o = olj0['value'],
        j0mun_ = ej30ln['indexOf'](':');if (j0mun_ > 0x0) var zl03eo = olj0['prefix'] = ej30ln['slice'](0x0, j0mun_),
        q96w = ej30ln['slice'](j0mun_ + 0x1),
        cksv1x = 'xmlns' === zl03eo && q96w;else q96w = ej30ln, zl03eo = null, cksv1x = 'xmlns' === ej30ln && '';olj0['localName'] = q96w, cksv1x !== !0x1 && (null == emj && (emj = {}, n_br94($69wq, $69wq = {})), $69wq[cksv1x] = emj[cksv1x] = e0l3o, olj0['uri'] = 'http://www.w3.org/2000/xmlns/', mejln0['startPrefixMapping'](cksv1x, e0l3o));
  }for (var uh_d = ln0emj['length']; uh_d--;) {
    olj0 = ln0emj[uh_d];var zl03eo = olj0['prefix'];zl03eo && ('xml' === zl03eo && (olj0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== zl03eo && (olj0['uri'] = $69wq[zl03eo || '']));
  }var j0mun_ = qzr9y['indexOf'](':');j0mun_ > 0x0 ? (zl03eo = ln0emj['prefix'] = qzr9y['slice'](0x0, j0mun_), q96w = ln0emj['localName'] = qzr9y['slice'](j0mun_ + 0x1)) : (zl03eo = null, q96w = ln0emj['localName'] = qzr9y);var csivxk = ln0emj['uri'] = $69wq[zl03eo || ''];if (mejln0['startElement'](csivxk, q96w, qzr9y, ln0emj), !ln0emj['closed']) return ln0emj['currentNSMap'] = $69wq, ln0emj['localNSMap'] = emj, !0x0;if (mejln0['endElement'](csivxk, q96w, qzr9y), emj) {
    for (zl03eo in emj) mejln0['endPrefixMapping'](zl03eo);
  }
}function n_yzo3r(ivkps2, e0ljmn, _8t, nh_8m, svkxci) {
  if (/^(?:script|textarea)$/i['test'](_8t)) {
    var fd8th_ = ivkps2['indexOf']('</' + _8t + '>', e0ljmn),
        o03zl = ivkps2['substring'](e0ljmn + 0x1, fd8th_);if (/[&<]/['test'](o03zl)) return (/^script$/i['test'](_8t) ? (svkxci['characters'](o03zl, 0x0, o03zl['length']), fd8th_) : (o03zl = o03zl['replace'](/&#?\w+;/g, nh_8m), svkxci['characters'](o03zl, 0x0, o03zl['length']), fd8th_)
    );
  }return e0ljmn + 0x1;
}function n_wb$a6(unm_8j, u0lnm, ck1xv, f57hdt) {
  var brq4y9 = f57hdt[ck1xv];return null == brq4y9 && (brq4y9 = unm_8j['lastIndexOf']('</' + ck1xv + '>'), u0lnm > brq4y9 && (brq4y9 = unm_8j['lastIndexOf']('</' + ck1xv)), f57hdt[ck1xv] = brq4y9), u0lnm > brq4y9;
}function n_br94(yz4or, x157gc) {
  for (var ry43zo in yz4or) x157gc[ry43zo] = yz4or[ry43zo];
}function n_jmn0_u(yl, t8fh5d, yrz3o, r9$bwq) {
  var ej3l = yl['charAt'](t8fh5d + 0x2);switch (ej3l) {case '-':
      if ('-' === yl['charAt'](t8fh5d + 0x3)) {
        var h85t = yl['indexOf']('-->', t8fh5d + 0x4);return h85t > t8fh5d ? (yrz3o['comment'](yl, t8fh5d + 0x4, h85t - t8fh5d - 0x4), h85t + 0x3) : (r9$bwq['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == yl['substr'](t8fh5d + 0x3, 0x6)) {
        var h85t = yl['indexOf'](']]>', t8fh5d + 0x9);return yrz3o['startCDATA'](), yrz3o['characters'](yl, t8fh5d + 0x9, h85t - t8fh5d - 0x9), yrz3o['endCDATA'](), h85t + 0x3;
      }var hdf = n_jumn_(yl, t8fh5d),
          dt_h8 = hdf['length'];if (dt_h8 > 0x1 && /!doctype/i['test'](hdf[0x0][0x0])) {
        var $w6 = hdf[0x1][0x0],
            xgc1 = dt_h8 > 0x3 && /^public$/i['test'](hdf[0x2][0x0]) && hdf[0x3][0x0],
            oyrz9 = dt_h8 > 0x4 && hdf[0x4][0x0],
            vsk1c = hdf[dt_h8 - 0x1];return yrz3o['startDTD']($w6, xgc1 && xgc1['replace'](/^(['"])(.*?)\1$/, '$2'), oyrz9 && oyrz9['replace'](/^(['"])(.*?)\1$/, '$2')), yrz3o['endDTD'](), vsk1c['index'] + vsk1c[0x0]['length'];
      }}return -0x1;
}function n_yle3(h_ud8f, ejn0, yzr94o) {
  var olz3 = h_ud8f['indexOf']('?>', ejn0);if (olz3) {
    var e3l0o = h_ud8f['substring'](ejn0, olz3)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (e3l0o) {
      {
        e3l0o[0x0]['length'];
      }return yzr94o['processingInstruction'](e3l0o[0x1], e3l0o[0x2]), olz3 + 0x2;
    }return -0x1;
  }return -0x1;
}function n_tgc57() {}function n_g57x1(t58hd, th58) {
  return t58hd['__proto__'] = th58, t58hd;
}function n_jumn_(th_8d, jm_n0u) {
  var bw9r,
      bqaw$6 = [],
      njm8u_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (njm8u_['lastIndex'] = jm_n0u, njm8u_['exec'](th_8d); bw9r = njm8u_['exec'](th_8d);) if (bqaw$6['push'](bw9r), bw9r[0x1]) return bqaw$6;
}var n_fhtd_8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    n_si2kvx = new RegExp('[\\-\\.0-9' + n_fhtd_8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    n_aq6w$b = new RegExp('^' + n_fhtd_8['source'] + n_si2kvx['source'] + '*(?::' + n_fhtd_8['source'] + n_si2kvx['source'] + '*)?$'),
    n_n0muj_ = 0x0,
    n_svi2kp = 0x1,
    n_l0menj = 0x2,
    n_u8mjn = 0x3,
    n_eo3l0 = 0x4,
    n_$9wbq = 0x5,
    n_mujln = 0x6,
    n_d7t5g1 = 0x7;n_wrq9$b['prototype'] = { 'parse': function (jo3l, c157xg, ly3ezo) {
    var viskxc = this['domBuilder'];viskxc['startDocument'](), n_br94(c157xg, c157xg = {}), n_h_mfu8(jo3l, c157xg, ly3ezo, viskxc, this['errorHandler']), viskxc['endDocument']();
  } }, n_tgc57['prototype'] = { 'setTagName': function (t7g1) {
    if (!n_aq6w$b['test'](t7g1)) throw new Error('invalid tagName:' + t7g1);this['tagName'] = t7g1;
  }, 'add': function (g517t, htf8, df8t5h) {
    if (!n_aq6w$b['test'](g517t)) throw new Error('invalid attribute:' + g517t);this[this['length']++] = { 'qName': g517t, 'value': htf8, 'offset': df8t5h };
  }, 'length': 0x0, 'getLocalName': function (y34oe) {
    return this[y34oe]['localName'];
  }, 'getLocator': function (m8jn_u) {
    return this[m8jn_u]['locator'];
  }, 'getQName': function (uhmn8) {
    return this[uhmn8]['qName'];
  }, 'getURI': function (_m8uhn) {
    return this[_m8uhn]['uri'];
  }, 'getValue': function (g7cx1) {
    return this[g7cx1]['value'];
  } }, n_g57x1({}, n_g57x1['prototype']) instanceof n_g57x1 || (n_g57x1 = function (xkisc, yezo3) {
  function _mun8h() {}_mun8h['prototype'] = yezo3, _mun8h = new _mun8h();for (yezo3 in xkisc) _mun8h[yezo3] = xkisc[yezo3];return _mun8h;
}), exports['XMLReader'] = n_wrq9$b;