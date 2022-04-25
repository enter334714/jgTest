var g = wx.$Q;
function q_o$9ze_() {}function q_gpfl0(ty35k, j4h1, e$_9o, f305, $zc) {
  function en6m9o(j8h1) {
    if (j8h1 > 0xffff) {
      j8h1 -= 0x10000;var qjs = 0xd800 + (j8h1 >> 0xa),
          eno9_6 = 0xdc00 + (0x3ff & j8h1);return String['fromCharCode'](qjs, eno9_6);
    }return String['fromCharCode'](j8h1);
  }function yckt53(xkt35) {
    var en9$_ = xkt35['slice'](0x1, -0x1);return en9$_ in e$_9o ? e$_9o[en9$_] : '#' === en9$_['charAt'](0x0) ? en6m9o(parseInt(en9$_['substr'](0x1)['replace']('x', '0x'))) : ($zc['error']('entity not found:' + xkt35), xkt35);
  }function dztkc(k5ydct) {
    if (k5ydct > m9o6e) {
      var l2f0 = ty35k['substring'](m9o6e, k5ydct)['replace'](/&#?\w+;/g, yckt53);pl0ag && $ezr_(m9o6e), f305['characters'](l2f0, 0x0, k5ydct - m9o6e), m9o6e = k5ydct;
    }
  }function $ezr_(fx2pl, ze$9_o) {
    for (; fx2pl >= n6h41m && (ze$9_o = ytckd5['exec'](ty35k));) bagvil = ze$9_o['index'], n6h41m = bagvil + ze$9_o[0x0]['length'], pl0ag['lineNumber']++;pl0ag['columnNumber'] = fx2pl - bagvil + 0x1;
  }for (var bagvil = 0x0, n6h41m = 0x0, ytckd5 = /.*(?:\r\n?|\n)|.*$/g, pl0ag = f305['locator'], huws8j = [{ 'currentNSMap': j4h1 }], fp0 = {}, m9o6e = 0x0;;) {
    try {
      var trckz = ty35k['indexOf']('<', m9o6e);if (0x0 > trckz) {
        if (!ty35k['substr'](m9o6e)['match'](/^\s*$/)) {
          var mn1o64 = f305['doc'],
              j8h41 = mn1o64['createTextNode'](ty35k['substr'](m9o6e));mn1o64['appendChild'](j8h41), f305['currentElement'] = j8h41;
        }return;
      }switch (trckz > m9o6e && dztkc(trckz), ty35k['charAt'](trckz + 0x1)) {case '/':
          var bgali = ty35k['indexOf']('>', trckz + 0x3),
              lbaigp = ty35k['substring'](trckz + 0x2, bgali),
              iv7gab = huws8j['pop']();0x0 > bgali ? (lbaigp = ty35k['substring'](trckz + 0x2)['replace'](/[\s<].*/, ''), $zc['error']('end tag name: ' + lbaigp + ' is not complete:' + iv7gab['tagName']), bgali = trckz + 0x1 + lbaigp['length']) : lbaigp['match'](/\s</) && (lbaigp = lbaigp['replace'](/[\s<].*/, ''), $zc['error']('end tag name: ' + lbaigp + ' maybe not complete'), bgali = trckz + 0x1 + lbaigp['length']);var l2fpa0 = iv7gab['localNSMap'],
              t3x5y = iv7gab['tagName'] == lbaigp,
              yck35 = t3x5y || iv7gab['tagName'] && iv7gab['tagName']['toLowerCase']() == lbaigp['toLowerCase']();if (yck35) {
            if (f305['endElement'](iv7gab['uri'], iv7gab['localName'], lbaigp), l2fpa0) {
              for (var alpb in l2fpa0) f305['endPrefixMapping'](alpb);
            }t3x5y || $zc['fatalError']('end tag name: ' + lbaigp + ' is not match the current start tagName:' + iv7gab['tagName']);
          } else huws8j['push'](iv7gab);bgali++;break;case '?':
          pl0ag && $ezr_(trckz), bgali = q_rzdc$t(ty35k, trckz, f305);break;case '!':
          pl0ag && $ezr_(trckz), bgali = q_vb7iga(ty35k, trckz, f305, $zc);break;default:
          pl0ag && $ezr_(trckz);var flp20x = new q_mo16n4(),
              mn64o1 = huws8j[huws8j['length'] - 0x1]['currentNSMap'],
              bgali = q_dctzr(ty35k, trckz, flp20x, mn64o1, yckt53, $zc),
              $no9e_ = flp20x['length'];if (!flp20x['closed'] && q_agbfl(ty35k, bgali, flp20x['tagName'], fp0) && (flp20x['closed'] = !0x0, e$_9o['nbsp'] || $zc['warning']('unclosed xml attribute')), pl0ag && $no9e_) {
            for (var ycdrkt = q_f0plx(pl0ag, {}), n94m6 = 0x0; $no9e_ > n94m6; n94m6++) {
              var no9 = flp20x[n94m6];$ezr_(no9['offset']), no9['locator'] = q_f0plx(pl0ag, {});
            }f305['locator'] = ycdrkt, q__$rz9(flp20x, f305, mn64o1) && huws8j['push'](flp20x), f305['locator'] = pl0ag;
          } else q__$rz9(flp20x, f305, mn64o1) && huws8j['push'](flp20x);'http://www.w3.org/1999/xhtml' !== flp20x['uri'] || flp20x['closed'] ? bgali++ : bgali = q_fx2l(ty35k, bgali, flp20x['tagName'], yckt53, f305);}
    } catch (lapgb) {
      $zc['error']('element parse error: ' + lapgb), bgali = -0x1;
    }bgali > m9o6e ? m9o6e = bgali : dztkc(Math['max'](trckz, m9o6e) + 0x1);
  }
}function q_f0plx(vilga, ytdr) {
  return ytdr['lineNumber'] = vilga['lineNumber'], ytdr['columnNumber'] = vilga['columnNumber'], ytdr;
}function q_dctzr($9one, ytrkdc, pf2a0, nh614, jw81hs, g0lpa) {
  for (var n9o64, bpagfl, w8suj = ++ytrkdc, $o9ze_ = q__9re$z;;) {
    var m6e9o = $9one['charAt'](w8suj);switch (m6e9o) {case '=':
        if ($o9ze_ === q_c3tk5y) n9o64 = $9one['slice'](ytrkdc, w8suj), $o9ze_ = q_ckzdr;else {
          if ($o9ze_ !== q_e$9no_) throw new Error('attribute equal must after attrName');$o9ze_ = q_ckzdr;
        }break;case '\x27':case '\x22':
        if ($o9ze_ === q_ckzdr || $o9ze_ === q_c3tk5y) {
          if ($o9ze_ === q_c3tk5y && (g0lpa['warning']('attribute value must after "="'), n9o64 = $9one['slice'](ytrkdc, w8suj)), ytrkdc = w8suj + 0x1, w8suj = $9one['indexOf'](m6e9o, ytrkdc), !(w8suj > 0x0)) throw new Error('attribute value no end \'' + m6e9o + '\' match');bpagfl = $9one['slice'](ytrkdc, w8suj)['replace'](/&#?\w+;/g, jw81hs), pf2a0['add'](n9o64, bpagfl, ytrkdc - 0x1), $o9ze_ = q_m6on9e;
        } else {
          if ($o9ze_ != q_c53tyk) throw new Error('attribute value must after "="');bpagfl = $9one['slice'](ytrkdc, w8suj)['replace'](/&#?\w+;/g, jw81hs), pf2a0['add'](n9o64, bpagfl, ytrkdc), g0lpa['warning']('attribute "' + n9o64 + '" missed start quot(' + m6e9o + ')!!'), ytrkdc = w8suj + 0x1, $o9ze_ = q_m6on9e;
        }break;case '/':
        switch ($o9ze_) {case q__9re$z:
            pf2a0['setTagName']($9one['slice'](ytrkdc, w8suj));case q_m6on9e:case q_js18hw:case q__n9eo:
            $o9ze_ = q__n9eo, pf2a0['closed'] = !0x0;case q_c53tyk:case q_c3tk5y:case q_e$9no_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return g0lpa['error']('unexpected end of input'), $o9ze_ == q__9re$z && pf2a0['setTagName']($9one['slice'](ytrkdc, w8suj)), w8suj;case '>':
        switch ($o9ze_) {case q__9re$z:
            pf2a0['setTagName']($9one['slice'](ytrkdc, w8suj));case q_m6on9e:case q_js18hw:case q__n9eo:
            break;case q_c53tyk:case q_c3tk5y:
            bpagfl = $9one['slice'](ytrkdc, w8suj), '/' === bpagfl['slice'](-0x1) && (pf2a0['closed'] = !0x0, bpagfl = bpagfl['slice'](0x0, -0x1));case q_e$9no_:
            $o9ze_ === q_e$9no_ && (bpagfl = n9o64), $o9ze_ == q_c53tyk ? (g0lpa['warning']('attribute "' + bpagfl + '" missed quot(")!!'), pf2a0['add'](n9o64, bpagfl['replace'](/&#?\w+;/g, jw81hs), ytrkdc)) : ('http://www.w3.org/1999/xhtml' === nh614[''] && bpagfl['match'](/^(?:disabled|checked|selected)$/i) || g0lpa['warning']('attribute "' + bpagfl + '" missed value!! "' + bpagfl + '" instead!!'), pf2a0['add'](bpagfl, bpagfl, ytrkdc));break;case q_ckzdr:
            throw new Error('attribute value missed!!');}return w8suj;case '\u0080':
        m6e9o = '\x20';default:
        if ('\x20' >= m6e9o) switch ($o9ze_) {case q__9re$z:
            pf2a0['setTagName']($9one['slice'](ytrkdc, w8suj)), $o9ze_ = q_js18hw;break;case q_c3tk5y:
            n9o64 = $9one['slice'](ytrkdc, w8suj), $o9ze_ = q_e$9no_;break;case q_c53tyk:
            var bpagfl = $9one['slice'](ytrkdc, w8suj)['replace'](/&#?\w+;/g, jw81hs);g0lpa['warning']('attribute "' + bpagfl + '" missed quot(")!!'), pf2a0['add'](n9o64, bpagfl, ytrkdc);case q_m6on9e:
            $o9ze_ = q_js18hw;} else switch ($o9ze_) {case q_e$9no_:
            {
              pf2a0['tagName'];
            }'http://www.w3.org/1999/xhtml' === nh614[''] && n9o64['match'](/^(?:disabled|checked|selected)$/i) || g0lpa['warning']('attribute "' + n9o64 + '" missed value!! "' + n9o64 + '" instead2!!'), pf2a0['add'](n9o64, n9o64, ytrkdc), ytrkdc = w8suj, $o9ze_ = q_c3tk5y;break;case q_m6on9e:
            g0lpa['warning']('attribute space is required"' + n9o64 + '\x22!!');case q_js18hw:
            $o9ze_ = q_c3tk5y, ytrkdc = w8suj;break;case q_ckzdr:
            $o9ze_ = q_c53tyk, ytrkdc = w8suj;break;case q__n9eo:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}w8suj++;
  }
}function q__$rz9(uwjh, _$drzc, tc5yk) {
  for (var $e_o = uwjh['tagName'], lp2x0f = null, mj814 = uwjh['length']; mj814--;) {
    var $ze_ = uwjh[mj814],
        x0y5 = $ze_['qName'],
        no69e_ = $ze_['value'],
        p2al0 = x0y5['indexOf'](':');if (p2al0 > 0x0) var $_drze = $ze_['prefix'] = x0y5['slice'](0x0, p2al0),
        z$_e9r = x0y5['slice'](p2al0 + 0x1),
        $ztrdc = 'xmlns' === $_drze && z$_e9r;else z$_e9r = x0y5, $_drze = null, $ztrdc = 'xmlns' === x0y5 && '';$ze_['localName'] = z$_e9r, $ztrdc !== !0x1 && (null == lp2x0f && (lp2x0f = {}, q_shujw8(tc5yk, tc5yk = {})), tc5yk[$ztrdc] = lp2x0f[$ztrdc] = no69e_, $ze_['uri'] = 'http://www.w3.org/2000/xmlns/', _$drzc['startPrefixMapping']($ztrdc, no69e_));
  }for (var mj814 = uwjh['length']; mj814--;) {
    $ze_ = uwjh[mj814];var $_drze = $ze_['prefix'];$_drze && ('xml' === $_drze && ($ze_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $_drze && ($ze_['uri'] = tc5yk[$_drze || '']));
  }var p2al0 = $e_o['indexOf'](':');p2al0 > 0x0 ? ($_drze = uwjh['prefix'] = $e_o['slice'](0x0, p2al0), z$_e9r = uwjh['localName'] = $e_o['slice'](p2al0 + 0x1)) : ($_drze = null, z$_e9r = uwjh['localName'] = $e_o);var z$_er = uwjh['uri'] = tc5yk[$_drze || ''];if (_$drzc['startElement'](z$_er, z$_e9r, $e_o, uwjh), !uwjh['closed']) return uwjh['currentNSMap'] = tc5yk, uwjh['localNSMap'] = lp2x0f, !0x0;if (_$drzc['endElement'](z$_er, z$_e9r, $e_o), lp2x0f) {
    for ($_drze in lp2x0f) _$drzc['endPrefixMapping']($_drze);
  }
}function q_fx2l(tdcy, y5tkx3, trdcky, y35x02, z$9r_) {
  if (/^(?:script|textarea)$/i['test'](trdcky)) {
    var s14h8j = tdcy['indexOf']('</' + trdcky + '>', y5tkx3),
        kyd = tdcy['substring'](y5tkx3 + 0x1, s14h8j);if (/[&<]/['test'](kyd)) return (/^script$/i['test'](trdcky) ? (z$9r_['characters'](kyd, 0x0, kyd['length']), s14h8j) : (kyd = kyd['replace'](/&#?\w+;/g, y35x02), z$9r_['characters'](kyd, 0x0, kyd['length']), s14h8j)
    );
  }return y5tkx3 + 0x1;
}function q_agbfl(rctk, p230, ykctrd, aib7) {
  var mo6n9 = aib7[ykctrd];return null == mo6n9 && (mo6n9 = rctk['lastIndexOf']('</' + ykctrd + '>'), p230 > mo6n9 && (mo6n9 = rctk['lastIndexOf']('</' + ykctrd)), aib7[ykctrd] = mo6n9), p230 > mo6n9;
}function q_shujw8(su8jqw, x2p3) {
  for (var uwj8qs in su8jqw) x2p3[uwj8qs] = su8jqw[uwj8qs];
}function q_vb7iga(p2lfx0, dykct5, o4n96, tkc3) {
  var e$9o_ = p2lfx0['charAt'](dykct5 + 0x2);switch (e$9o_) {case '-':
      if ('-' === p2lfx0['charAt'](dykct5 + 0x3)) {
        var bgpail = p2lfx0['indexOf']('-->', dykct5 + 0x4);return bgpail > dykct5 ? (o4n96['comment'](p2lfx0, dykct5 + 0x4, bgpail - dykct5 - 0x4), bgpail + 0x3) : (tkc3['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == p2lfx0['substr'](dykct5 + 0x3, 0x6)) {
        var bgpail = p2lfx0['indexOf'](']]>', dykct5 + 0x9);return o4n96['startCDATA'](), o4n96['characters'](p2lfx0, dykct5 + 0x9, bgpail - dykct5 - 0x9), o4n96['endCDATA'](), bgpail + 0x3;
      }var nh46m1 = q_e_9$n(p2lfx0, dykct5),
          _red = nh46m1['length'];if (_red > 0x1 && /!doctype/i['test'](nh46m1[0x0][0x0])) {
        var zc$rd = nh46m1[0x1][0x0],
            shuw = _red > 0x3 && /^public$/i['test'](nh46m1[0x2][0x0]) && nh46m1[0x3][0x0],
            _o9ez = _red > 0x4 && nh46m1[0x4][0x0],
            qs = nh46m1[_red - 0x1];return o4n96['startDTD'](zc$rd, shuw && shuw['replace'](/^(['"])(.*?)\1$/, '$2'), _o9ez && _o9ez['replace'](/^(['"])(.*?)\1$/, '$2')), o4n96['endDTD'](), qs['index'] + qs[0x0]['length'];
      }}return -0x1;
}function q_rzdc$t(sjh184, zr_$cd, qswu8) {
  var on_69 = sjh184['indexOf']('?>', zr_$cd);if (on_69) {
    var o9_ = sjh184['substring'](zr_$cd, on_69)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (o9_) {
      {
        o9_[0x0]['length'];
      }return qswu8['processingInstruction'](o9_[0x1], o9_[0x2]), on_69 + 0x2;
    }return -0x1;
  }return -0x1;
}function q_mo16n4() {}function q_dkrzc(s8uh, yrctdk) {
  return s8uh['__proto__'] = yrctdk, s8uh;
}function q_e_9$n($zcrt, t3ck) {
  var zct$,
      rkcty = [],
      suhj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (suhj['lastIndex'] = t3ck, suhj['exec']($zcrt); zct$ = suhj['exec']($zcrt);) if (rkcty['push'](zct$), zct$[0x1]) return rkcty;
}var q_x2lf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    q_ilagbp = new RegExp('[\\-\\.0-9' + q_x2lf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    q_oe_$z = new RegExp('^' + q_x2lf['source'] + q_ilagbp['source'] + '*(?::' + q_x2lf['source'] + q_ilagbp['source'] + '*)?$'),
    q__9re$z = 0x0,
    q_c3tk5y = 0x1,
    q_e$9no_ = 0x2,
    q_ckzdr = 0x3,
    q_c53tyk = 0x4,
    q_m6on9e = 0x5,
    q_js18hw = 0x6,
    q__n9eo = 0x7;q_o$9ze_['prototype'] = { 'parse': function ($ctzdr, bga7v, _neo9$) {
    var pga0l = this['domBuilder'];pga0l['startDocument'](), q_shujw8(bga7v, bga7v = {}), q_gpfl0($ctzdr, bga7v, _neo9$, pga0l, this['errorHandler']), pga0l['endDocument']();
  } }, q_mo16n4['prototype'] = { 'setTagName': function (dky5c) {
    if (!q_oe_$z['test'](dky5c)) throw new Error('invalid tagName:' + dky5c);this['tagName'] = dky5c;
  }, 'add': function (uwq, o496nm, l02afp) {
    if (!q_oe_$z['test'](uwq)) throw new Error('invalid attribute:' + uwq);this[this['length']++] = { 'qName': uwq, 'value': o496nm, 'offset': l02afp };
  }, 'length': 0x0, 'getLocalName': function (h8j41s) {
    return this[h8j41s]['localName'];
  }, 'getLocator': function (kdctzr) {
    return this[kdctzr]['locator'];
  }, 'getQName': function (z_drc$) {
    return this[z_drc$]['qName'];
  }, 'getURI': function (o61mn4) {
    return this[o61mn4]['uri'];
  }, 'getValue': function (lbiav) {
    return this[lbiav]['value'];
  } }, q_dkrzc({}, q_dkrzc['prototype']) instanceof q_dkrzc || (q_dkrzc = function (b7gv, o6nm14) {
  function x302y() {}x302y['prototype'] = o6nm14, x302y = new x302y();for (o6nm14 in b7gv) x302y[o6nm14] = b7gv[o6nm14];return x302y;
}), exports['XMLReader'] = q_o$9ze_;