var g = wx.$Q;
function q_wj18sh() {}function q_y5302x(on46, n_, o96m4n, emn9, sw8uh) {
  function gbap(agiv7b) {
    if (agiv7b > 0xffff) {
      agiv7b -= 0x10000;var k3yx = 0xd800 + (agiv7b >> 0xa),
          z$9e_r = 0xdc00 + (0x3ff & agiv7b);return String['fromCharCode'](k3yx, z$9e_r);
    }return String['fromCharCode'](agiv7b);
  }function bglva(vba) {
    var nm49o = vba['slice'](0x1, -0x1);return nm49o in o96m4n ? o96m4n[nm49o] : '#' === nm49o['charAt'](0x0) ? gbap(parseInt(nm49o['substr'](0x1)['replace']('x', '0x'))) : (sw8uh['error']('entity not found:' + vba), vba);
  }function iapg(fx023p) {
    if (fx023p > n6o4m9) {
      var mno16 = on46['substring'](n6o4m9, fx023p)['replace'](/&#?\w+;/g, bglva);m4h816 && ckdrzt(n6o4m9), emn9['characters'](mno16, 0x0, fx023p - n6o4m9), n6o4m9 = fx023p;
    }
  }function ckdrzt(czdtkr, o9em6n) {
    for (; czdtkr >= lbigp && (o9em6n = m64o1n['exec'](on46));) zrk = o9em6n['index'], lbigp = zrk + o9em6n[0x0]['length'], m4h816['lineNumber']++;m4h816['columnNumber'] = czdtkr - zrk + 0x1;
  }for (var zrk = 0x0, lbigp = 0x0, m64o1n = /.*(?:\r\n?|\n)|.*$/g, m4h816 = emn9['locator'], j8hs1w = [{ 'currentNSMap': n_ }], _r$ = {}, n6o4m9 = 0x0;;) {
    try {
      var o4nm61 = on46['indexOf']('<', n6o4m9);if (0x0 > o4nm61) {
        if (!on46['substr'](n6o4m9)['match'](/^\s*$/)) {
          var e_r9z = emn9['doc'],
              m4h61 = e_r9z['createTextNode'](on46['substr'](n6o4m9));e_r9z['appendChild'](m4h61), emn9['currentElement'] = m4h61;
        }return;
      }switch (o4nm61 > n6o4m9 && iapg(o4nm61), on46['charAt'](o4nm61 + 0x1)) {case '/':
          var dcy5tk = on46['indexOf']('>', o4nm61 + 0x3),
              h6mn14 = on46['substring'](o4nm61 + 0x2, dcy5tk),
              rktzc = j8hs1w['pop']();0x0 > dcy5tk ? (h6mn14 = on46['substring'](o4nm61 + 0x2)['replace'](/[\s<].*/, ''), sw8uh['error']('end tag name: ' + h6mn14 + ' is not complete:' + rktzc['tagName']), dcy5tk = o4nm61 + 0x1 + h6mn14['length']) : h6mn14['match'](/\s</) && (h6mn14 = h6mn14['replace'](/[\s<].*/, ''), sw8uh['error']('end tag name: ' + h6mn14 + ' maybe not complete'), dcy5tk = o4nm61 + 0x1 + h6mn14['length']);var zrd$tc = rktzc['localNSMap'],
              z$e_ = rktzc['tagName'] == h6mn14,
              hm61 = z$e_ || rktzc['tagName'] && rktzc['tagName']['toLowerCase']() == h6mn14['toLowerCase']();if (hm61) {
            if (emn9['endElement'](rktzc['uri'], rktzc['localName'], h6mn14), zrd$tc) {
              for (var t53kc in zrd$tc) emn9['endPrefixMapping'](t53kc);
            }z$e_ || sw8uh['fatalError']('end tag name: ' + h6mn14 + ' is not match the current start tagName:' + rktzc['tagName']);
          } else j8hs1w['push'](rktzc);dcy5tk++;break;case '?':
          m4h816 && ckdrzt(o4nm61), dcy5tk = q_x230f5(on46, o4nm61, emn9);break;case '!':
          m4h816 && ckdrzt(o4nm61), dcy5tk = q_vb7ia(on46, o4nm61, emn9, sw8uh);break;default:
          m4h816 && ckdrzt(o4nm61);var _e9n$o = new q_vlgiba(),
              apgbil = j8hs1w[j8hs1w['length'] - 0x1]['currentNSMap'],
              dcy5tk = q_fap0gl(on46, o4nm61, _e9n$o, apgbil, bglva, sw8uh),
              z$r9 = _e9n$o['length'];if (!_e9n$o['closed'] && q_rcdt(on46, dcy5tk, _e9n$o['tagName'], _r$) && (_e9n$o['closed'] = !0x0, o96m4n['nbsp'] || sw8uh['warning']('unclosed xml attribute')), m4h816 && z$r9) {
            for (var z$rct = q_on6e_(m4h816, {}), me96o = 0x0; z$r9 > me96o; me96o++) {
              var uws = _e9n$o[me96o];ckdrzt(uws['offset']), uws['locator'] = q_on6e_(m4h816, {});
            }emn9['locator'] = z$rct, q_la2pf0(_e9n$o, emn9, apgbil) && j8hs1w['push'](_e9n$o), emn9['locator'] = m4h816;
          } else q_la2pf0(_e9n$o, emn9, apgbil) && j8hs1w['push'](_e9n$o);'http://www.w3.org/1999/xhtml' !== _e9n$o['uri'] || _e9n$o['closed'] ? dcy5tk++ : dcy5tk = q_$_ze9o(on46, dcy5tk, _e9n$o['tagName'], bglva, emn9);}
    } catch (p23x) {
      sw8uh['error']('element parse error: ' + p23x), dcy5tk = -0x1;
    }dcy5tk > n6o4m9 ? n6o4m9 = dcy5tk : iapg(Math['max'](o4nm61, n6o4m9) + 0x1);
  }
}function q_on6e_(kx52y, dc$rtz) {
  return dc$rtz['lineNumber'] = kx52y['lineNumber'], dc$rtz['columnNumber'] = kx52y['columnNumber'], dc$rtz;
}function q_fap0gl(e_o9, _69one, n_$, q8sjw, rtzc, _$en) {
  for (var y2x35, su8jqw, $czrd_ = ++_69one, cdzkr = q_txyk;;) {
    var yk253x = e_o9['charAt']($czrd_);switch (yk253x) {case '=':
        if (cdzkr === q_e$_z) y2x35 = e_o9['slice'](_69one, $czrd_), cdzkr = q_re$_dz;else {
          if (cdzkr !== q__zr$9e) throw new Error('attribute equal must after attrName');cdzkr = q_re$_dz;
        }break;case '\x27':case '\x22':
        if (cdzkr === q_re$_dz || cdzkr === q_e$_z) {
          if (cdzkr === q_e$_z && (_$en['warning']('attribute value must after "="'), y2x35 = e_o9['slice'](_69one, $czrd_)), _69one = $czrd_ + 0x1, $czrd_ = e_o9['indexOf'](yk253x, _69one), !($czrd_ > 0x0)) throw new Error('attribute value no end \'' + yk253x + '\' match');su8jqw = e_o9['slice'](_69one, $czrd_)['replace'](/&#?\w+;/g, rtzc), n_$['add'](y2x35, su8jqw, _69one - 0x1), cdzkr = q_qswju8;
        } else {
          if (cdzkr != q_sh8j41) throw new Error('attribute value must after "="');su8jqw = e_o9['slice'](_69one, $czrd_)['replace'](/&#?\w+;/g, rtzc), n_$['add'](y2x35, su8jqw, _69one), _$en['warning']('attribute "' + y2x35 + '" missed start quot(' + yk253x + ')!!'), _69one = $czrd_ + 0x1, cdzkr = q_qswju8;
        }break;case '/':
        switch (cdzkr) {case q_txyk:
            n_$['setTagName'](e_o9['slice'](_69one, $czrd_));case q_qswju8:case q_h4m6n:case q_rcztdk:
            cdzkr = q_rcztdk, n_$['closed'] = !0x0;case q_sh8j41:case q_e$_z:case q__zr$9e:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _$en['error']('unexpected end of input'), cdzkr == q_txyk && n_$['setTagName'](e_o9['slice'](_69one, $czrd_)), $czrd_;case '>':
        switch (cdzkr) {case q_txyk:
            n_$['setTagName'](e_o9['slice'](_69one, $czrd_));case q_qswju8:case q_h4m6n:case q_rcztdk:
            break;case q_sh8j41:case q_e$_z:
            su8jqw = e_o9['slice'](_69one, $czrd_), '/' === su8jqw['slice'](-0x1) && (n_$['closed'] = !0x0, su8jqw = su8jqw['slice'](0x0, -0x1));case q__zr$9e:
            cdzkr === q__zr$9e && (su8jqw = y2x35), cdzkr == q_sh8j41 ? (_$en['warning']('attribute "' + su8jqw + '" missed quot(")!!'), n_$['add'](y2x35, su8jqw['replace'](/&#?\w+;/g, rtzc), _69one)) : ('http://www.w3.org/1999/xhtml' === q8sjw[''] && su8jqw['match'](/^(?:disabled|checked|selected)$/i) || _$en['warning']('attribute "' + su8jqw + '" missed value!! "' + su8jqw + '" instead!!'), n_$['add'](su8jqw, su8jqw, _69one));break;case q_re$_dz:
            throw new Error('attribute value missed!!');}return $czrd_;case '\u0080':
        yk253x = '\x20';default:
        if ('\x20' >= yk253x) switch (cdzkr) {case q_txyk:
            n_$['setTagName'](e_o9['slice'](_69one, $czrd_)), cdzkr = q_h4m6n;break;case q_e$_z:
            y2x35 = e_o9['slice'](_69one, $czrd_), cdzkr = q__zr$9e;break;case q_sh8j41:
            var su8jqw = e_o9['slice'](_69one, $czrd_)['replace'](/&#?\w+;/g, rtzc);_$en['warning']('attribute "' + su8jqw + '" missed quot(")!!'), n_$['add'](y2x35, su8jqw, _69one);case q_qswju8:
            cdzkr = q_h4m6n;} else switch (cdzkr) {case q__zr$9e:
            {
              n_$['tagName'];
            }'http://www.w3.org/1999/xhtml' === q8sjw[''] && y2x35['match'](/^(?:disabled|checked|selected)$/i) || _$en['warning']('attribute "' + y2x35 + '" missed value!! "' + y2x35 + '" instead2!!'), n_$['add'](y2x35, y2x35, _69one), _69one = $czrd_, cdzkr = q_e$_z;break;case q_qswju8:
            _$en['warning']('attribute space is required"' + y2x35 + '\x22!!');case q_h4m6n:
            cdzkr = q_e$_z, _69one = $czrd_;break;case q_re$_dz:
            cdzkr = q_sh8j41, _69one = $czrd_;break;case q_rcztdk:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$czrd_++;
  }
}function q_la2pf0(o6_, t$rc, cr_zd$) {
  for (var swuq8j = o6_['tagName'], x0flp = null, k235xy = o6_['length']; k235xy--;) {
    var r$9 = o6_[k235xy],
        dzrc$t = r$9['qName'],
        aplg0f = r$9['value'],
        vg7iab = dzrc$t['indexOf'](':');if (vg7iab > 0x0) var m4681 = r$9['prefix'] = dzrc$t['slice'](0x0, vg7iab),
        ws8qu = dzrc$t['slice'](vg7iab + 0x1),
        pblf = 'xmlns' === m4681 && ws8qu;else ws8qu = dzrc$t, m4681 = null, pblf = 'xmlns' === dzrc$t && '';r$9['localName'] = ws8qu, pblf !== !0x1 && (null == x0flp && (x0flp = {}, q_ibalg(cr_zd$, cr_zd$ = {})), cr_zd$[pblf] = x0flp[pblf] = aplg0f, r$9['uri'] = 'http://www.w3.org/2000/xmlns/', t$rc['startPrefixMapping'](pblf, aplg0f));
  }for (var k235xy = o6_['length']; k235xy--;) {
    r$9 = o6_[k235xy];var m4681 = r$9['prefix'];m4681 && ('xml' === m4681 && (r$9['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m4681 && (r$9['uri'] = cr_zd$[m4681 || '']));
  }var vg7iab = swuq8j['indexOf'](':');vg7iab > 0x0 ? (m4681 = o6_['prefix'] = swuq8j['slice'](0x0, vg7iab), ws8qu = o6_['localName'] = swuq8j['slice'](vg7iab + 0x1)) : (m4681 = null, ws8qu = o6_['localName'] = swuq8j);var o6n94m = o6_['uri'] = cr_zd$[m4681 || ''];if (t$rc['startElement'](o6n94m, ws8qu, swuq8j, o6_), !o6_['closed']) return o6_['currentNSMap'] = cr_zd$, o6_['localNSMap'] = x0flp, !0x0;if (t$rc['endElement'](o6n94m, ws8qu, swuq8j), x0flp) {
    for (m4681 in x0flp) t$rc['endPrefixMapping'](m4681);
  }
}function q_$_ze9o(ykt3c5, iabvl, r$c_dz, drktc, bfpalg) {
  if (/^(?:script|textarea)$/i['test'](r$c_dz)) {
    var trc$ = ykt3c5['indexOf']('</' + r$c_dz + '>', iabvl),
        $_oez9 = ykt3c5['substring'](iabvl + 0x1, trc$);if (/[&<]/['test']($_oez9)) return (/^script$/i['test'](r$c_dz) ? (bfpalg['characters']($_oez9, 0x0, $_oez9['length']), trc$) : ($_oez9 = $_oez9['replace'](/&#?\w+;/g, drktc), bfpalg['characters']($_oez9, 0x0, $_oez9['length']), trc$)
    );
  }return iabvl + 0x1;
}function q_rcdt(o416mn, ws8uhj, h6m, o$z_9) {
  var lavgbi = o$z_9[h6m];return null == lavgbi && (lavgbi = o416mn['lastIndexOf']('</' + h6m + '>'), ws8uhj > lavgbi && (lavgbi = o416mn['lastIndexOf']('</' + h6m)), o$z_9[h6m] = lavgbi), ws8uhj > lavgbi;
}function q_ibalg(drkztc, j1hw8) {
  for (var ktrdcz in drkztc) j1hw8[ktrdcz] = drkztc[ktrdcz];
}function q_vb7ia(avglbi, $ezd, kx32y, o6_n9) {
  var afgb = avglbi['charAt']($ezd + 0x2);switch (afgb) {case '-':
      if ('-' === avglbi['charAt']($ezd + 0x3)) {
        var h4 = avglbi['indexOf']('-->', $ezd + 0x4);return h4 > $ezd ? (kx32y['comment'](avglbi, $ezd + 0x4, h4 - $ezd - 0x4), h4 + 0x3) : (o6_n9['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == avglbi['substr']($ezd + 0x3, 0x6)) {
        var h4 = avglbi['indexOf'](']]>', $ezd + 0x9);return kx32y['startCDATA'](), kx32y['characters'](avglbi, $ezd + 0x9, h4 - $ezd - 0x9), kx32y['endCDATA'](), h4 + 0x3;
      }var on146m = q_xk3t(avglbi, $ezd),
          rktcyd = on146m['length'];if (rktcyd > 0x1 && /!doctype/i['test'](on146m[0x0][0x0])) {
        var uwsjh = on146m[0x1][0x0],
            alpib = rktcyd > 0x3 && /^public$/i['test'](on146m[0x2][0x0]) && on146m[0x3][0x0],
            fg0pa = rktcyd > 0x4 && on146m[0x4][0x0],
            o1nm6 = on146m[rktcyd - 0x1];return kx32y['startDTD'](uwsjh, alpib && alpib['replace'](/^(['"])(.*?)\1$/, '$2'), fg0pa && fg0pa['replace'](/^(['"])(.*?)\1$/, '$2')), kx32y['endDTD'](), o1nm6['index'] + o1nm6[0x0]['length'];
      }}return -0x1;
}function q_x230f5(_e9$zo, q8wjus, tkd5cy) {
  var n6o9e_ = _e9$zo['indexOf']('?>', q8wjus);if (n6o9e_) {
    var e9_n$ = _e9$zo['substring'](q8wjus, n6o9e_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (e9_n$) {
      {
        e9_n$[0x0]['length'];
      }return tkd5cy['processingInstruction'](e9_n$[0x1], e9_n$[0x2]), n6o9e_ + 0x2;
    }return -0x1;
  }return -0x1;
}function q_vlgiba() {}function q_ktyc5(_$n, kxy325) {
  return _$n['__proto__'] = kxy325, _$n;
}function q_xk3t(z_oe, r_czd$) {
  var on_e6,
      xl2f0p = [],
      y35x2 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (y35x2['lastIndex'] = r_czd$, y35x2['exec'](z_oe); on_e6 = y35x2['exec'](z_oe);) if (xl2f0p['push'](on_e6), on_e6[0x1]) return xl2f0p;
}var q_en_$9o = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    q_dcz_r$ = new RegExp('[\\-\\.0-9' + q_en_$9o['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    q_cktdzr = new RegExp('^' + q_en_$9o['source'] + q_dcz_r$['source'] + '*(?::' + q_en_$9o['source'] + q_dcz_r$['source'] + '*)?$'),
    q_txyk = 0x0,
    q_e$_z = 0x1,
    q__zr$9e = 0x2,
    q_re$_dz = 0x3,
    q_sh8j41 = 0x4,
    q_qswju8 = 0x5,
    q_h4m6n = 0x6,
    q_rcztdk = 0x7;q_wj18sh['prototype'] = { 'parse': function ($9zoe_, igbapl, o4m6) {
    var dytkrc = this['domBuilder'];dytkrc['startDocument'](), q_ibalg(igbapl, igbapl = {}), q_y5302x($9zoe_, igbapl, o4m6, dytkrc, this['errorHandler']), dytkrc['endDocument']();
  } }, q_vlgiba['prototype'] = { 'setTagName': function (mn416o) {
    if (!q_cktdzr['test'](mn416o)) throw new Error('invalid tagName:' + mn416o);this['tagName'] = mn416o;
  }, 'add': function (ne$o, drz$, agilb) {
    if (!q_cktdzr['test'](ne$o)) throw new Error('invalid attribute:' + ne$o);this[this['length']++] = { 'qName': ne$o, 'value': drz$, 'offset': agilb };
  }, 'length': 0x0, 'getLocalName': function (wjqu8s) {
    return this[wjqu8s]['localName'];
  }, 'getLocator': function ($_dr) {
    return this[$_dr]['locator'];
  }, 'getQName': function (dy5tc) {
    return this[dy5tc]['qName'];
  }, 'getURI': function (tdrkcz) {
    return this[tdrkcz]['uri'];
  }, 'getValue': function (nmo496) {
    return this[nmo496]['value'];
  } }, q_ktyc5({}, q_ktyc5['prototype']) instanceof q_ktyc5 || (q_ktyc5 = function (faglp, x0f3p) {
  function kdtrz() {}kdtrz['prototype'] = x0f3p, kdtrz = new kdtrz();for (x0f3p in faglp) kdtrz[x0f3p] = faglp[x0f3p];return kdtrz;
}), exports['XMLReader'] = q_wj18sh;