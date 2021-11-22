var K = wx.$S;
function so39kzv() {}function svzow9($r4ua, qygsp, vzk9wo, vroeu3, nm2ti) {
  function m_xic2(n_2m) {
    if (n_2m > 0xffff) {
      n_2m -= 0x10000;var da5h = 0xd800 + (n_2m >> 0xa),
          reu3ov = 0xdc00 + (0x3ff & n_2m);return String['fromCharCode'](da5h, reu3ov);
    }return String['fromCharCode'](n_2m);
  }function euad(ov3) {
    var kozw = ov3['slice'](0x1, -0x1);return kozw in vzk9wo ? vzk9wo[kozw] : '#' === kozw['charAt'](0x0) ? m_xic2(parseInt(kozw['substr'](0x1)['replace']('x', '0x'))) : (nm2ti['error']('entity not found:' + ov3), ov3);
  }function im2cx(n2tmix) {
    if (n2tmix > jb618g) {
      var qpgys = $r4ua['substring'](jb618g, n2tmix)['replace'](/&#?\w+;/g, euad);asyd5 && f186(jb618g), vroeu3['characters'](qpgys, 0x0, n2tmix - jb618g), jb618g = n2tmix;
    }
  }function f186(jsgqp, pgyhs) {
    for (; jsgqp >= $aude4 && (pgyhs = zo3uv['exec']($r4ua));) c_0xw = pgyhs['index'], $aude4 = c_0xw + pgyhs[0x0]['length'], asyd5['lineNumber']++;asyd5['columnNumber'] = jsgqp - c_0xw + 0x1;
  }for (var c_0xw = 0x0, $aude4 = 0x0, zo3uv = /.*(?:\r\n?|\n)|.*$/g, asyd5 = vroeu3['locator'], zrvuo = [{ 'currentNSMap': qygsp }], nix2mt = {}, jb618g = 0x0;;) {
    try {
      var psjqgy = $r4ua['indexOf']('<', jb618g);if (0x0 > psjqgy) {
        if (!$r4ua['substr'](jb618g)['match'](/^\s*$/)) {
          var hd$a45 = vroeu3['doc'],
              ru3e4$ = hd$a45['createTextNode']($r4ua['substr'](jb618g));hd$a45['appendChild'](ru3e4$), vroeu3['currentElement'] = ru3e4$;
        }return;
      }switch (psjqgy > jb618g && im2cx(psjqgy), $r4ua['charAt'](psjqgy + 0x1)) {case '/':
          var ic2xm_ = $r4ua['indexOf']('>', psjqgy + 0x3),
              i0cxm_ = $r4ua['substring'](psjqgy + 0x2, ic2xm_),
              uer$3 = zrvuo['pop']();0x0 > ic2xm_ ? (i0cxm_ = $r4ua['substring'](psjqgy + 0x2)['replace'](/[\s<].*/, ''), nm2ti['error']('end tag name: ' + i0cxm_ + ' is not complete:' + uer$3['tagName']), ic2xm_ = psjqgy + 0x1 + i0cxm_['length']) : i0cxm_['match'](/\s</) && (i0cxm_ = i0cxm_['replace'](/[\s<].*/, ''), nm2ti['error']('end tag name: ' + i0cxm_ + ' maybe not complete'), ic2xm_ = psjqgy + 0x1 + i0cxm_['length']);var qgysh = uer$3['localNSMap'],
              urae4$ = uer$3['tagName'] == i0cxm_,
              kw_09c = urae4$ || uer$3['tagName'] && uer$3['tagName']['toLowerCase']() == i0cxm_['toLowerCase']();if (kw_09c) {
            if (vroeu3['endElement'](uer$3['uri'], uer$3['localName'], i0cxm_), qgysh) {
              for (var r4uo3e in qgysh) vroeu3['endPrefixMapping'](r4uo3e);
            }urae4$ || nm2ti['fatalError']('end tag name: ' + i0cxm_ + ' is not match the current start tagName:' + uer$3['tagName']);
          } else zrvuo['push'](uer$3);ic2xm_++;break;case '?':
          asyd5 && f186(psjqgy), ic2xm_ = sa5shy($r4ua, psjqgy, vroeu3);break;case '!':
          asyd5 && f186(psjqgy), ic2xm_ = sz39vo($r4ua, psjqgy, vroeu3, nm2ti);break;default:
          asyd5 && f186(psjqgy);var ic9w_ = new swkz9v0(),
              mix0 = zrvuo[zrvuo['length'] - 0x1]['currentNSMap'],
              ic2xm_ = ss5dhay($r4ua, psjqgy, ic9w_, mix0, euad, nm2ti),
              jqy = ic9w_['length'];if (!ic9w_['closed'] && spysgqh($r4ua, ic2xm_, ic9w_['tagName'], nix2mt) && (ic9w_['closed'] = !0x0, vzk9wo['nbsp'] || nm2ti['warning']('unclosed xml attribute')), asyd5 && jqy) {
            for (var psg1qj = sy$ahd5(asyd5, {}), cm0ix_ = 0x0; jqy > cm0ix_; cm0ix_++) {
              var bg6j18 = ic9w_[cm0ix_];f186(bg6j18['offset']), bg6j18['locator'] = sy$ahd5(asyd5, {});
            }vroeu3['locator'] = psg1qj, s$aued(ic9w_, vroeu3, mix0) && zrvuo['push'](ic9w_), vroeu3['locator'] = asyd5;
          } else s$aued(ic9w_, vroeu3, mix0) && zrvuo['push'](ic9w_);'http://www.w3.org/1999/xhtml' !== ic9w_['uri'] || ic9w_['closed'] ? ic2xm_++ : ic2xm_ = sm_ic0($r4ua, ic2xm_, ic9w_['tagName'], euad, vroeu3);}
    } catch ($dae4u) {
      nm2ti['error']('element parse error: ' + $dae4u), ic2xm_ = -0x1;
    }ic2xm_ > jb618g ? jb618g = ic2xm_ : im2cx(Math['max'](psjqgy, jb618g) + 0x1);
  }
}function sy$ahd5(ysh5a, sypjg) {
  return sypjg['lineNumber'] = ysh5a['lineNumber'], sypjg['columnNumber'] = ysh5a['columnNumber'], sypjg;
}function ss5dhay(uvzo, gsq, ro3evu, $h45da, h$5dy, $h4d) {
  for (var x_i2cm, j861b, uae$r = ++gsq, xi2 = sy5hqps;;) {
    var p1qgs = uvzo['charAt'](uae$r);switch (p1qgs) {case '=':
        if (xi2 === sp5syqh) x_i2cm = uvzo['slice'](gsq, uae$r), xi2 = sxn_2i;else {
          if (xi2 !== sh45ad$) throw new Error('attribute equal must after attrName');xi2 = sxn_2i;
        }break;case '\x27':case '\x22':
        if (xi2 === sxn_2i || xi2 === sp5syqh) {
          if (xi2 === sp5syqh && ($h4d['warning']('attribute value must after "="'), x_i2cm = uvzo['slice'](gsq, uae$r)), gsq = uae$r + 0x1, uae$r = uvzo['indexOf'](p1qgs, gsq), !(uae$r > 0x0)) throw new Error('attribute value no end \'' + p1qgs + '\' match');j861b = uvzo['slice'](gsq, uae$r)['replace'](/&#?\w+;/g, h$5dy), ro3evu['add'](x_i2cm, j861b, gsq - 0x1), xi2 = s_0c9w;
        } else {
          if (xi2 != sqgpys) throw new Error('attribute value must after "="');j861b = uvzo['slice'](gsq, uae$r)['replace'](/&#?\w+;/g, h$5dy), ro3evu['add'](x_i2cm, j861b, gsq), $h4d['warning']('attribute "' + x_i2cm + '" missed start quot(' + p1qgs + ')!!'), gsq = uae$r + 0x1, xi2 = s_0c9w;
        }break;case '/':
        switch (xi2) {case sy5hqps:
            ro3evu['setTagName'](uvzo['slice'](gsq, uae$r));case s_0c9w:case skrvo3:case sdah$y5:
            xi2 = sdah$y5, ro3evu['closed'] = !0x0;case sqgpys:case sp5syqh:case sh45ad$:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $h4d['error']('unexpected end of input'), xi2 == sy5hqps && ro3evu['setTagName'](uvzo['slice'](gsq, uae$r)), uae$r;case '>':
        switch (xi2) {case sy5hqps:
            ro3evu['setTagName'](uvzo['slice'](gsq, uae$r));case s_0c9w:case skrvo3:case sdah$y5:
            break;case sqgpys:case sp5syqh:
            j861b = uvzo['slice'](gsq, uae$r), '/' === j861b['slice'](-0x1) && (ro3evu['closed'] = !0x0, j861b = j861b['slice'](0x0, -0x1));case sh45ad$:
            xi2 === sh45ad$ && (j861b = x_i2cm), xi2 == sqgpys ? ($h4d['warning']('attribute "' + j861b + '" missed quot(")!!'), ro3evu['add'](x_i2cm, j861b['replace'](/&#?\w+;/g, h$5dy), gsq)) : ('http://www.w3.org/1999/xhtml' === $h45da[''] && j861b['match'](/^(?:disabled|checked|selected)$/i) || $h4d['warning']('attribute "' + j861b + '" missed value!! "' + j861b + '" instead!!'), ro3evu['add'](j861b, j861b, gsq));break;case sxn_2i:
            throw new Error('attribute value missed!!');}return uae$r;case '\u0080':
        p1qgs = '\x20';default:
        if ('\x20' >= p1qgs) switch (xi2) {case sy5hqps:
            ro3evu['setTagName'](uvzo['slice'](gsq, uae$r)), xi2 = skrvo3;break;case sp5syqh:
            x_i2cm = uvzo['slice'](gsq, uae$r), xi2 = sh45ad$;break;case sqgpys:
            var j861b = uvzo['slice'](gsq, uae$r)['replace'](/&#?\w+;/g, h$5dy);$h4d['warning']('attribute "' + j861b + '" missed quot(")!!'), ro3evu['add'](x_i2cm, j861b, gsq);case s_0c9w:
            xi2 = skrvo3;} else switch (xi2) {case sh45ad$:
            {
              ro3evu['tagName'];
            }'http://www.w3.org/1999/xhtml' === $h45da[''] && x_i2cm['match'](/^(?:disabled|checked|selected)$/i) || $h4d['warning']('attribute "' + x_i2cm + '" missed value!! "' + x_i2cm + '" instead2!!'), ro3evu['add'](x_i2cm, x_i2cm, gsq), gsq = uae$r, xi2 = sp5syqh;break;case s_0c9w:
            $h4d['warning']('attribute space is required"' + x_i2cm + '\x22!!');case skrvo3:
            xi2 = sp5syqh, gsq = uae$r;break;case sxn_2i:
            xi2 = sqgpys, gsq = uae$r;break;case sdah$y5:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}uae$r++;
  }
}function s$aued(ni2xm, g1jqsp, kc9zw) {
  for (var vrz3ou = ni2xm['tagName'], $e4aur = null, i2xcm = ni2xm['length']; i2xcm--;) {
    var p1jq8 = ni2xm[i2xcm],
        lj861 = p1jq8['qName'],
        blf816 = p1jq8['value'],
        _n2ix = lj861['indexOf'](':');if (_n2ix > 0x0) var oe3vr = p1jq8['prefix'] = lj861['slice'](0x0, _n2ix),
        wc0k9_ = lj861['slice'](_n2ix + 0x1),
        kwoz9v = 'xmlns' === oe3vr && wc0k9_;else wc0k9_ = lj861, oe3vr = null, kwoz9v = 'xmlns' === lj861 && '';p1jq8['localName'] = wc0k9_, kwoz9v !== !0x1 && (null == $e4aur && ($e4aur = {}, sspg1q(kc9zw, kc9zw = {})), kc9zw[kwoz9v] = $e4aur[kwoz9v] = blf816, p1jq8['uri'] = 'http://www.w3.org/2000/xmlns/', g1jqsp['startPrefixMapping'](kwoz9v, blf816));
  }for (var i2xcm = ni2xm['length']; i2xcm--;) {
    p1jq8 = ni2xm[i2xcm];var oe3vr = p1jq8['prefix'];oe3vr && ('xml' === oe3vr && (p1jq8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== oe3vr && (p1jq8['uri'] = kc9zw[oe3vr || '']));
  }var _n2ix = vrz3ou['indexOf'](':');_n2ix > 0x0 ? (oe3vr = ni2xm['prefix'] = vrz3ou['slice'](0x0, _n2ix), wc0k9_ = ni2xm['localName'] = vrz3ou['slice'](_n2ix + 0x1)) : (oe3vr = null, wc0k9_ = ni2xm['localName'] = vrz3ou);var nimx2 = ni2xm['uri'] = kc9zw[oe3vr || ''];if (g1jqsp['startElement'](nimx2, wc0k9_, vrz3ou, ni2xm), !ni2xm['closed']) return ni2xm['currentNSMap'] = kc9zw, ni2xm['localNSMap'] = $e4aur, !0x0;if (g1jqsp['endElement'](nimx2, wc0k9_, vrz3ou), $e4aur) {
    for (oe3vr in $e4aur) g1jqsp['endPrefixMapping'](oe3vr);
  }
}function sm_ic0(mnx72, ozuv3, l18j6, sy5ahd, k_90wc) {
  if (/^(?:script|textarea)$/i['test'](l18j6)) {
    var zouvr3 = mnx72['indexOf']('</' + l18j6 + '>', ozuv3),
        bj18q = mnx72['substring'](ozuv3 + 0x1, zouvr3);if (/[&<]/['test'](bj18q)) return (/^script$/i['test'](l18j6) ? (k_90wc['characters'](bj18q, 0x0, bj18q['length']), zouvr3) : (bj18q = bj18q['replace'](/&#?\w+;/g, sy5ahd), k_90wc['characters'](bj18q, 0x0, bj18q['length']), zouvr3)
    );
  }return ozuv3 + 0x1;
}function spysgqh(wo9vz, xm_i2n, n2tm7x, x_in2m) {
  var ruvo3e = x_in2m[n2tm7x];return null == ruvo3e && (ruvo3e = wo9vz['lastIndexOf']('</' + n2tm7x + '>'), xm_i2n > ruvo3e && (ruvo3e = wo9vz['lastIndexOf']('</' + n2tm7x)), x_in2m[n2tm7x] = ruvo3e), xm_i2n > ruvo3e;
}function sspg1q(y$had, zw09k) {
  for (var u3r4$e in y$had) zw09k[u3r4$e] = y$had[u3r4$e];
}function sz39vo(d5$ay, aue4r, dyha5s, zo9wvk) {
  var i9wc_ = d5$ay['charAt'](aue4r + 0x2);switch (i9wc_) {case '-':
      if ('-' === d5$ay['charAt'](aue4r + 0x3)) {
        var o3uvzr = d5$ay['indexOf']('-->', aue4r + 0x4);return o3uvzr > aue4r ? (dyha5s['comment'](d5$ay, aue4r + 0x4, o3uvzr - aue4r - 0x4), o3uvzr + 0x3) : (zo9wvk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == d5$ay['substr'](aue4r + 0x3, 0x6)) {
        var o3uvzr = d5$ay['indexOf'](']]>', aue4r + 0x9);return dyha5s['startCDATA'](), dyha5s['characters'](d5$ay, aue4r + 0x9, o3uvzr - aue4r - 0x9), dyha5s['endCDATA'](), o3uvzr + 0x3;
      }var m2xc_ = sfl186b(d5$ay, aue4r),
          pqgshy = m2xc_['length'];if (pqgshy > 0x1 && /!doctype/i['test'](m2xc_[0x0][0x0])) {
        var ha$5yd = m2xc_[0x1][0x0],
            e$4a = pqgshy > 0x3 && /^public$/i['test'](m2xc_[0x2][0x0]) && m2xc_[0x3][0x0],
            jg18qb = pqgshy > 0x4 && m2xc_[0x4][0x0],
            jgq8b1 = m2xc_[pqgshy - 0x1];return dyha5s['startDTD'](ha$5yd, e$4a && e$4a['replace'](/^(['"])(.*?)\1$/, '$2'), jg18qb && jg18qb['replace'](/^(['"])(.*?)\1$/, '$2')), dyha5s['endDTD'](), jgq8b1['index'] + jgq8b1[0x0]['length'];
      }}return -0x1;
}function sa5shy(bq1g8j, _wcx0i, sq1pjg) {
  var xm2i_n = bq1g8j['indexOf']('?>', _wcx0i);if (xm2i_n) {
    var txmn7 = bq1g8j['substring'](_wcx0i, xm2i_n)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (txmn7) {
      {
        txmn7[0x0]['length'];
      }return sq1pjg['processingInstruction'](txmn7[0x1], txmn7[0x2]), xm2i_n + 0x2;
    }return -0x1;
  }return -0x1;
}function swkz9v0() {}function sevor3(wk0c_9, kwzv) {
  return wk0c_9['__proto__'] = kwzv, wk0c_9;
}function sfl186b(eu$r4, reau4) {
  var qpsgjy,
      d54h$ = [],
      rozu3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (rozu3['lastIndex'] = reau4, rozu3['exec'](eu$r4); qpsgjy = rozu3['exec'](eu$r4);) if (d54h$['push'](qpsgjy), qpsgjy[0x1]) return d54h$;
}var sovuz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    slbf61 = new RegExp('[\\-\\.0-9' + sovuz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    sf81l6 = new RegExp('^' + sovuz['source'] + slbf61['source'] + '*(?::' + sovuz['source'] + slbf61['source'] + '*)?$'),
    sy5hqps = 0x0,
    sp5syqh = 0x1,
    sh45ad$ = 0x2,
    sxn_2i = 0x3,
    sqgpys = 0x4,
    s_0c9w = 0x5,
    skrvo3 = 0x6,
    sdah$y5 = 0x7;so39kzv['prototype'] = { 'parse': function (qgjb81, dh5$a, j1b68l) {
    var yphs5 = this['domBuilder'];yphs5['startDocument'](), sspg1q(dh5$a, dh5$a = {}), svzow9(qgjb81, dh5$a, j1b68l, yphs5, this['errorHandler']), yphs5['endDocument']();
  } }, swkz9v0['prototype'] = { 'setTagName': function (ypdsh) {
    if (!sf81l6['test'](ypdsh)) throw new Error('invalid tagName:' + ypdsh);this['tagName'] = ypdsh;
  }, 'add': function ($ha4d5, shyda5, ro3ev) {
    if (!sf81l6['test']($ha4d5)) throw new Error('invalid attribute:' + $ha4d5);this[this['length']++] = { 'qName': $ha4d5, 'value': shyda5, 'offset': ro3ev };
  }, 'length': 0x0, 'getLocalName': function (ix2mtn) {
    return this[ix2mtn]['localName'];
  }, 'getLocator': function (xmt2in) {
    return this[xmt2in]['locator'];
  }, 'getQName': function (hs5yqp) {
    return this[hs5yqp]['qName'];
  }, 'getURI': function (psgqyj) {
    return this[psgqyj]['uri'];
  }, 'getValue': function (txn7) {
    return this[txn7]['value'];
  } }, sevor3({}, sevor3['prototype']) instanceof sevor3 || (sevor3 = function (qsygp, _mcx0i) {
  function hq5syp() {}hq5syp['prototype'] = _mcx0i, hq5syp = new hq5syp();for (_mcx0i in qsygp) hq5syp[_mcx0i] = qsygp[_mcx0i];return hq5syp;
}), exports['XMLReader'] = so39kzv;