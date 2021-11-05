var g = wx.$Q;
function q_dczt$r() {}function q_lbapg(o_e$9n, dckz, z$eo9, tck5y, e9n6om) {
  function $z9r_e(c_$zdr) {
    if (c_$zdr > 0xffff) {
      c_$zdr -= 0x10000;var bgfpl = 0xd800 + (c_$zdr >> 0xa),
          wh8j = 0xdc00 + (0x3ff & c_$zdr);return String['fromCharCode'](bgfpl, wh8j);
    }return String['fromCharCode'](c_$zdr);
  }function zd_$r(g7vbai) {
    var _o6en9 = g7vbai['slice'](0x1, -0x1);return _o6en9 in z$eo9 ? z$eo9[_o6en9] : '#' === _o6en9['charAt'](0x0) ? $z9r_e(parseInt(_o6en9['substr'](0x1)['replace']('x', '0x'))) : (e9n6om['error']('entity not found:' + g7vbai), g7vbai);
  }function $rz_9(tdckz) {
    if (tdckz > $tzcr) {
      var x20pf = o_e$9n['substring']($tzcr, tdckz)['replace'](/&#?\w+;/g, zd_$r);j81m4h && a2f0l($tzcr), tck5y['characters'](x20pf, 0x0, tdckz - $tzcr), $tzcr = tdckz;
    }
  }function a2f0l(pblfg, omn694) {
    for (; pblfg >= ty3 && (omn694 = rkctyd['exec'](o_e$9n));) c$_r = omn694['index'], ty3 = c$_r + omn694[0x0]['length'], j81m4h['lineNumber']++;j81m4h['columnNumber'] = pblfg - c$_r + 0x1;
  }for (var c$_r = 0x0, ty3 = 0x0, rkctyd = /.*(?:\r\n?|\n)|.*$/g, j81m4h = tck5y['locator'], vil = [{ 'currentNSMap': dckz }], cdrtky = {}, $tzcr = 0x0;;) {
    try {
      var r9ez$ = o_e$9n['indexOf']('<', $tzcr);if (0x0 > r9ez$) {
        if (!o_e$9n['substr']($tzcr)['match'](/^\s*$/)) {
          var zr_de = tck5y['doc'],
              x305f2 = zr_de['createTextNode'](o_e$9n['substr']($tzcr));zr_de['appendChild'](x305f2), tck5y['currentElement'] = x305f2;
        }return;
      }switch (r9ez$ > $tzcr && $rz_9(r9ez$), o_e$9n['charAt'](r9ez$ + 0x1)) {case '/':
          var n$_oe9 = o_e$9n['indexOf']('>', r9ez$ + 0x3),
              d_$zer = o_e$9n['substring'](r9ez$ + 0x2, n$_oe9),
              gilabv = vil['pop']();0x0 > n$_oe9 ? (d_$zer = o_e$9n['substring'](r9ez$ + 0x2)['replace'](/[\s<].*/, ''), e9n6om['error']('end tag name: ' + d_$zer + ' is not complete:' + gilabv['tagName']), n$_oe9 = r9ez$ + 0x1 + d_$zer['length']) : d_$zer['match'](/\s</) && (d_$zer = d_$zer['replace'](/[\s<].*/, ''), e9n6om['error']('end tag name: ' + d_$zer + ' maybe not complete'), n$_oe9 = r9ez$ + 0x1 + d_$zer['length']);var ibgav7 = gilabv['localNSMap'],
              x2lfp = gilabv['tagName'] == d_$zer,
              y25x30 = x2lfp || gilabv['tagName'] && gilabv['tagName']['toLowerCase']() == d_$zer['toLowerCase']();if (y25x30) {
            if (tck5y['endElement'](gilabv['uri'], gilabv['localName'], d_$zer), ibgav7) {
              for (var jmh148 in ibgav7) tck5y['endPrefixMapping'](jmh148);
            }x2lfp || e9n6om['fatalError']('end tag name: ' + d_$zer + ' is not match the current start tagName:' + gilabv['tagName']);
          } else vil['push'](gilabv);n$_oe9++;break;case '?':
          j81m4h && a2f0l(r9ez$), n$_oe9 = q_mon614(o_e$9n, r9ez$, tck5y);break;case '!':
          j81m4h && a2f0l(r9ez$), n$_oe9 = q_$rzc(o_e$9n, r9ez$, tck5y, e9n6om);break;default:
          j81m4h && a2f0l(r9ez$);var o_ez9 = new q_m9no6e(),
              me69n = vil[vil['length'] - 0x1]['currentNSMap'],
              n$_oe9 = q_n9_eo$(o_e$9n, r9ez$, o_ez9, me69n, zd_$r, e9n6om),
              dezr_$ = o_ez9['length'];if (!o_ez9['closed'] && q_j418sh(o_e$9n, n$_oe9, o_ez9['tagName'], cdrtky) && (o_ez9['closed'] = !0x0, z$eo9['nbsp'] || e9n6om['warning']('unclosed xml attribute')), j81m4h && dezr_$) {
            for (var lapib = q_$zdcrt(j81m4h, {}), kcrzdt = 0x0; dezr_$ > kcrzdt; kcrzdt++) {
              var h61m8 = o_ez9[kcrzdt];a2f0l(h61m8['offset']), h61m8['locator'] = q_$zdcrt(j81m4h, {});
            }tck5y['locator'] = lapib, q_e$9z(o_ez9, tck5y, me69n) && vil['push'](o_ez9), tck5y['locator'] = j81m4h;
          } else q_e$9z(o_ez9, tck5y, me69n) && vil['push'](o_ez9);'http://www.w3.org/1999/xhtml' !== o_ez9['uri'] || o_ez9['closed'] ? n$_oe9++ : n$_oe9 = q_crzd$(o_e$9n, n$_oe9, o_ez9['tagName'], zd_$r, tck5y);}
    } catch (x0pf2l) {
      e9n6om['error']('element parse error: ' + x0pf2l), n$_oe9 = -0x1;
    }n$_oe9 > $tzcr ? $tzcr = n$_oe9 : $rz_9(Math['max'](r9ez$, $tzcr) + 0x1);
  }
}function q_$zdcrt($ez9_r, k5dtc) {
  return k5dtc['lineNumber'] = $ez9_r['lineNumber'], k5dtc['columnNumber'] = $ez9_r['columnNumber'], k5dtc;
}function q_n9_eo$(mh8164, lbgaiv, h8suj, $_dr, $9oz, pl0fa) {
  for (var fg0pla, w8jq, _o9$en = ++lbgaiv, t$cd = q_wuhjs8;;) {
    var no146m = mh8164['charAt'](_o9$en);switch (no146m) {case '=':
        if (t$cd === q_k3y5x) fg0pla = mh8164['slice'](lbgaiv, _o9$en), t$cd = q_n416m;else {
          if (t$cd !== q_zr$cd) throw new Error('attribute equal must after attrName');t$cd = q_n416m;
        }break;case '\x27':case '\x22':
        if (t$cd === q_n416m || t$cd === q_k3y5x) {
          if (t$cd === q_k3y5x && (pl0fa['warning']('attribute value must after "="'), fg0pla = mh8164['slice'](lbgaiv, _o9$en)), lbgaiv = _o9$en + 0x1, _o9$en = mh8164['indexOf'](no146m, lbgaiv), !(_o9$en > 0x0)) throw new Error('attribute value no end \'' + no146m + '\' match');w8jq = mh8164['slice'](lbgaiv, _o9$en)['replace'](/&#?\w+;/g, $9oz), h8suj['add'](fg0pla, w8jq, lbgaiv - 0x1), t$cd = q_m14no;
        } else {
          if (t$cd != q_t$dcrz) throw new Error('attribute value must after "="');w8jq = mh8164['slice'](lbgaiv, _o9$en)['replace'](/&#?\w+;/g, $9oz), h8suj['add'](fg0pla, w8jq, lbgaiv), pl0fa['warning']('attribute "' + fg0pla + '" missed start quot(' + no146m + ')!!'), lbgaiv = _o9$en + 0x1, t$cd = q_m14no;
        }break;case '/':
        switch (t$cd) {case q_wuhjs8:
            h8suj['setTagName'](mh8164['slice'](lbgaiv, _o9$en));case q_m14no:case q_wjsh8u:case q_dzrtk:
            t$cd = q_dzrtk, h8suj['closed'] = !0x0;case q_t$dcrz:case q_k3y5x:case q_zr$cd:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return pl0fa['error']('unexpected end of input'), t$cd == q_wuhjs8 && h8suj['setTagName'](mh8164['slice'](lbgaiv, _o9$en)), _o9$en;case '>':
        switch (t$cd) {case q_wuhjs8:
            h8suj['setTagName'](mh8164['slice'](lbgaiv, _o9$en));case q_m14no:case q_wjsh8u:case q_dzrtk:
            break;case q_t$dcrz:case q_k3y5x:
            w8jq = mh8164['slice'](lbgaiv, _o9$en), '/' === w8jq['slice'](-0x1) && (h8suj['closed'] = !0x0, w8jq = w8jq['slice'](0x0, -0x1));case q_zr$cd:
            t$cd === q_zr$cd && (w8jq = fg0pla), t$cd == q_t$dcrz ? (pl0fa['warning']('attribute "' + w8jq + '" missed quot(")!!'), h8suj['add'](fg0pla, w8jq['replace'](/&#?\w+;/g, $9oz), lbgaiv)) : ('http://www.w3.org/1999/xhtml' === $_dr[''] && w8jq['match'](/^(?:disabled|checked|selected)$/i) || pl0fa['warning']('attribute "' + w8jq + '" missed value!! "' + w8jq + '" instead!!'), h8suj['add'](w8jq, w8jq, lbgaiv));break;case q_n416m:
            throw new Error('attribute value missed!!');}return _o9$en;case '\u0080':
        no146m = '\x20';default:
        if ('\x20' >= no146m) switch (t$cd) {case q_wuhjs8:
            h8suj['setTagName'](mh8164['slice'](lbgaiv, _o9$en)), t$cd = q_wjsh8u;break;case q_k3y5x:
            fg0pla = mh8164['slice'](lbgaiv, _o9$en), t$cd = q_zr$cd;break;case q_t$dcrz:
            var w8jq = mh8164['slice'](lbgaiv, _o9$en)['replace'](/&#?\w+;/g, $9oz);pl0fa['warning']('attribute "' + w8jq + '" missed quot(")!!'), h8suj['add'](fg0pla, w8jq, lbgaiv);case q_m14no:
            t$cd = q_wjsh8u;} else switch (t$cd) {case q_zr$cd:
            {
              h8suj['tagName'];
            }'http://www.w3.org/1999/xhtml' === $_dr[''] && fg0pla['match'](/^(?:disabled|checked|selected)$/i) || pl0fa['warning']('attribute "' + fg0pla + '" missed value!! "' + fg0pla + '" instead2!!'), h8suj['add'](fg0pla, fg0pla, lbgaiv), lbgaiv = _o9$en, t$cd = q_k3y5x;break;case q_m14no:
            pl0fa['warning']('attribute space is required"' + fg0pla + '\x22!!');case q_wjsh8u:
            t$cd = q_k3y5x, lbgaiv = _o9$en;break;case q_n416m:
            t$cd = q_t$dcrz, lbgaiv = _o9$en;break;case q_dzrtk:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_o9$en++;
  }
}function q_e$9z(uw8q, labvgi, rydck) {
  for (var balpgi = uw8q['tagName'], d_er$z = null, dyctrk = uw8q['length']; dyctrk--;) {
    var qjus8 = uw8q[dyctrk],
        tdzkrc = qjus8['qName'],
        dztrk = qjus8['value'],
        lxp0 = tdzkrc['indexOf'](':');if (lxp0 > 0x0) var ne9_$o = qjus8['prefix'] = tdzkrc['slice'](0x0, lxp0),
        tzrkdc = tdzkrc['slice'](lxp0 + 0x1),
        drtcz = 'xmlns' === ne9_$o && tzrkdc;else tzrkdc = tdzkrc, ne9_$o = null, drtcz = 'xmlns' === tdzkrc && '';qjus8['localName'] = tzrkdc, drtcz !== !0x1 && (null == d_er$z && (d_er$z = {}, q_f0gapl(rydck, rydck = {})), rydck[drtcz] = d_er$z[drtcz] = dztrk, qjus8['uri'] = 'http://www.w3.org/2000/xmlns/', labvgi['startPrefixMapping'](drtcz, dztrk));
  }for (var dyctrk = uw8q['length']; dyctrk--;) {
    qjus8 = uw8q[dyctrk];var ne9_$o = qjus8['prefix'];ne9_$o && ('xml' === ne9_$o && (qjus8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ne9_$o && (qjus8['uri'] = rydck[ne9_$o || '']));
  }var lxp0 = balpgi['indexOf'](':');lxp0 > 0x0 ? (ne9_$o = uw8q['prefix'] = balpgi['slice'](0x0, lxp0), tzrkdc = uw8q['localName'] = balpgi['slice'](lxp0 + 0x1)) : (ne9_$o = null, tzrkdc = uw8q['localName'] = balpgi);var rkcyt = uw8q['uri'] = rydck[ne9_$o || ''];if (labvgi['startElement'](rkcyt, tzrkdc, balpgi, uw8q), !uw8q['closed']) return uw8q['currentNSMap'] = rydck, uw8q['localNSMap'] = d_er$z, !0x0;if (labvgi['endElement'](rkcyt, tzrkdc, balpgi), d_er$z) {
    for (ne9_$o in d_er$z) labvgi['endPrefixMapping'](ne9_$o);
  }
}function q_crzd$(rz$ct, aglbip, z$e9_, m1no, $_9ez) {
  if (/^(?:script|textarea)$/i['test'](z$e9_)) {
    var lgfapb = rz$ct['indexOf']('</' + z$e9_ + '>', aglbip),
        no1m4 = rz$ct['substring'](aglbip + 0x1, lgfapb);if (/[&<]/['test'](no1m4)) return (/^script$/i['test'](z$e9_) ? ($_9ez['characters'](no1m4, 0x0, no1m4['length']), lgfapb) : (no1m4 = no1m4['replace'](/&#?\w+;/g, m1no), $_9ez['characters'](no1m4, 0x0, no1m4['length']), lgfapb)
    );
  }return aglbip + 0x1;
}function q_j418sh(agibpl, k5y2x, yckt, tcdrz$) {
  var pf2l0 = tcdrz$[yckt];return null == pf2l0 && (pf2l0 = agibpl['lastIndexOf']('</' + yckt + '>'), k5y2x > pf2l0 && (pf2l0 = agibpl['lastIndexOf']('</' + yckt)), tcdrz$[yckt] = pf2l0), k5y2x > pf2l0;
}function q_f0gapl(s48h1j, la20) {
  for (var p3fx2 in s48h1j) la20[p3fx2] = s48h1j[p3fx2];
}function q_$rzc(bpali, _$cdz, h814, rtkyd) {
  var lvgaib = bpali['charAt'](_$cdz + 0x2);switch (lvgaib) {case '-':
      if ('-' === bpali['charAt'](_$cdz + 0x3)) {
        var $z_ = bpali['indexOf']('-->', _$cdz + 0x4);return $z_ > _$cdz ? (h814['comment'](bpali, _$cdz + 0x4, $z_ - _$cdz - 0x4), $z_ + 0x3) : (rtkyd['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bpali['substr'](_$cdz + 0x3, 0x6)) {
        var $z_ = bpali['indexOf'](']]>', _$cdz + 0x9);return h814['startCDATA'](), h814['characters'](bpali, _$cdz + 0x9, $z_ - _$cdz - 0x9), h814['endCDATA'](), $z_ + 0x3;
      }var zer$d_ = q_flpba(bpali, _$cdz),
          rdyt = zer$d_['length'];if (rdyt > 0x1 && /!doctype/i['test'](zer$d_[0x0][0x0])) {
        var _$o9ne = zer$d_[0x1][0x0],
            crtyk = rdyt > 0x3 && /^public$/i['test'](zer$d_[0x2][0x0]) && zer$d_[0x3][0x0],
            vaig7 = rdyt > 0x4 && zer$d_[0x4][0x0],
            x2530 = zer$d_[rdyt - 0x1];return h814['startDTD'](_$o9ne, crtyk && crtyk['replace'](/^(['"])(.*?)\1$/, '$2'), vaig7 && vaig7['replace'](/^(['"])(.*?)\1$/, '$2')), h814['endDTD'](), x2530['index'] + x2530[0x0]['length'];
      }}return -0x1;
}function q_mon614(r$zcdt, rkycdt, o46n) {
  var kd5yct = r$zcdt['indexOf']('?>', rkycdt);if (kd5yct) {
    var lfx = r$zcdt['substring'](rkycdt, kd5yct)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lfx) {
      {
        lfx[0x0]['length'];
      }return o46n['processingInstruction'](lfx[0x1], lfx[0x2]), kd5yct + 0x2;
    }return -0x1;
  }return -0x1;
}function q_m9no6e() {}function q_qsjuw8(blgf, abig7v) {
  return blgf['__proto__'] = abig7v, blgf;
}function q_flpba(_zred$, mo416) {
  var hm4,
      dcrztk = [],
      ytkdc5 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ytkdc5['lastIndex'] = mo416, ytkdc5['exec'](_zred$); hm4 = ytkdc5['exec'](_zred$);) if (dcrztk['push'](hm4), hm4[0x1]) return dcrztk;
}var q_rkcz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    q_mo49n6 = new RegExp('[\\-\\.0-9' + q_rkcz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    q_t35cyk = new RegExp('^' + q_rkcz['source'] + q_mo49n6['source'] + '*(?::' + q_rkcz['source'] + q_mo49n6['source'] + '*)?$'),
    q_wuhjs8 = 0x0,
    q_k3y5x = 0x1,
    q_zr$cd = 0x2,
    q_n416m = 0x3,
    q_t$dcrz = 0x4,
    q_m14no = 0x5,
    q_wjsh8u = 0x6,
    q_dzrtk = 0x7;q_dczt$r['prototype'] = { 'parse': function (s4h1j8, wsh81j, p2laf) {
    var lfa02p = this['domBuilder'];lfa02p['startDocument'](), q_f0gapl(wsh81j, wsh81j = {}), q_lbapg(s4h1j8, wsh81j, p2laf, lfa02p, this['errorHandler']), lfa02p['endDocument']();
  } }, q_m9no6e['prototype'] = { 'setTagName': function (wj8hsu) {
    if (!q_t35cyk['test'](wj8hsu)) throw new Error('invalid tagName:' + wj8hsu);this['tagName'] = wj8hsu;
  }, 'add': function (_drz$c, _o$9n, cz$rt) {
    if (!q_t35cyk['test'](_drz$c)) throw new Error('invalid attribute:' + _drz$c);this[this['length']++] = { 'qName': _drz$c, 'value': _o$9n, 'offset': cz$rt };
  }, 'length': 0x0, 'getLocalName': function (pbigl) {
    return this[pbigl]['localName'];
  }, 'getLocator': function (krcyt) {
    return this[krcyt]['locator'];
  }, 'getQName': function (aglivb) {
    return this[aglivb]['qName'];
  }, 'getURI': function (ztrd$) {
    return this[ztrd$]['uri'];
  }, 'getValue': function (hn6m14) {
    return this[hn6m14]['value'];
  } }, q_qsjuw8({}, q_qsjuw8['prototype']) instanceof q_qsjuw8 || (q_qsjuw8 = function (igpa, lga0fp) {
  function z9_$r() {}z9_$r['prototype'] = lga0fp, z9_$r = new z9_$r();for (lga0fp in igpa) z9_$r[lga0fp] = igpa[lga0fp];return z9_$r;
}), exports['XMLReader'] = q_dczt$r;