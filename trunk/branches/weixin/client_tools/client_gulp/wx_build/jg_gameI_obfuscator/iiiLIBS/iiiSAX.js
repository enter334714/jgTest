var Q = wx.$I;
function i_v9mc1p() {}function i_lgy0(sueb7, ogy0z, _p1cm, sqbkue, go$zl0) {
  function qn24w5(uks2q) {
    if (uks2q > 0xffff) {
      uks2q -= 0x10000;var $rlitz = 0xd800 + (uks2q >> 0xa),
          ea7b36 = 0xdc00 + (0x3ff & uks2q);return String['fromCharCode']($rlitz, ea7b36);
    }return String['fromCharCode'](uks2q);
  }function $rz0il(lzo$g0) {
    var qnuk = lzo$g0['slice'](0x1, -0x1);return qnuk in _p1cm ? _p1cm[qnuk] : '#' === qnuk['charAt'](0x0) ? qn24w5(parseInt(qnuk['substr'](0x1)['replace']('x', '0x'))) : (go$zl0['error']('entity not found:' + lzo$g0), lzo$g0);
  }function ku7(ab673e) {
    if (ab673e > wk2qn5) {
      var $lzt = sueb7['substring'](wk2qn5, ab673e)['replace'](/&#?\w+;/g, $rz0il);qn4w25 && b67s3(wk2qn5), sqbkue['characters']($lzt, 0x0, ab673e - wk2qn5), wk2qn5 = ab673e;
    }
  }function b67s3(pcf81_, zilt$r) {
    for (; pcf81_ >= bsk7ue && (zilt$r = bse7u3['exec'](sueb7));) l0zgi$ = zilt$r['index'], bsk7ue = l0zgi$ + zilt$r[0x0]['length'], qn4w25['lineNumber']++;qn4w25['columnNumber'] = pcf81_ - l0zgi$ + 0x1;
  }for (var l0zgi$ = 0x0, bsk7ue = 0x0, bse7u3 = /.*(?:\r\n?|\n)|.*$/g, qn4w25 = sqbkue['locator'], a3j7 = [{ 'currentNSMap': ogy0z }], fpmc1v = {}, wk2qn5 = 0x0;;) {
    try {
      var rvmt9 = sueb7['indexOf']('<', wk2qn5);if (0x0 > rvmt9) {
        if (!sueb7['substr'](wk2qn5)['match'](/^\s*$/)) {
          var jaf68_ = sqbkue['doc'],
              qk2esu = jaf68_['createTextNode'](sueb7['substr'](wk2qn5));jaf68_['appendChild'](qk2esu), sqbkue['currentElement'] = qk2esu;
        }return;
      }switch (rvmt9 > wk2qn5 && ku7(rvmt9), sueb7['charAt'](rvmt9 + 0x1)) {case '/':
          var qse2ku = sueb7['indexOf']('>', rvmt9 + 0x3),
              $lirz0 = sueb7['substring'](rvmt9 + 0x2, qse2ku),
              o0gl = a3j7['pop']();0x0 > qse2ku ? ($lirz0 = sueb7['substring'](rvmt9 + 0x2)['replace'](/[\s<].*/, ''), go$zl0['error']('end tag name: ' + $lirz0 + ' is not complete:' + o0gl['tagName']), qse2ku = rvmt9 + 0x1 + $lirz0['length']) : $lirz0['match'](/\s</) && ($lirz0 = $lirz0['replace'](/[\s<].*/, ''), go$zl0['error']('end tag name: ' + $lirz0 + ' maybe not complete'), qse2ku = rvmt9 + 0x1 + $lirz0['length']);var pcfv1m = o0gl['localNSMap'],
              vfpc = o0gl['tagName'] == $lirz0,
              vc1mp = vfpc || o0gl['tagName'] && o0gl['tagName']['toLowerCase']() == $lirz0['toLowerCase']();if (vc1mp) {
            if (sqbkue['endElement'](o0gl['uri'], o0gl['localName'], $lirz0), pcfv1m) {
              for (var iltr$z in pcfv1m) sqbkue['endPrefixMapping'](iltr$z);
            }vfpc || go$zl0['fatalError']('end tag name: ' + $lirz0 + ' is not match the current start tagName:' + o0gl['tagName']);
          } else a3j7['push'](o0gl);qse2ku++;break;case '?':
          qn4w25 && b67s3(rvmt9), qse2ku = i_q5n2k(sueb7, rvmt9, sqbkue);break;case '!':
          qn4w25 && b67s3(rvmt9), qse2ku = i_g0lz$i(sueb7, rvmt9, sqbkue, go$zl0);break;default:
          qn4w25 && b67s3(rvmt9);var f86aj = new i_cf_m(),
              pfv = a3j7[a3j7['length'] - 0x1]['currentNSMap'],
              qse2ku = i_qes2ku(sueb7, rvmt9, f86aj, pfv, $rz0il, go$zl0),
              j8_fcp = f86aj['length'];if (!f86aj['closed'] && i_e6s73b(sueb7, qse2ku, f86aj['tagName'], fpmc1v) && (f86aj['closed'] = !0x0, _p1cm['nbsp'] || go$zl0['warning']('unclosed xml attribute')), qn4w25 && j8_fcp) {
            for (var n5wqk = i__f18cp(qn4w25, {}), _mcp = 0x0; j8_fcp > _mcp; _mcp++) {
              var mpvf = f86aj[_mcp];b67s3(mpvf['offset']), mpvf['locator'] = i__f18cp(qn4w25, {});
            }sqbkue['locator'] = n5wqk, i_j368_a(f86aj, sqbkue, pfv) && a3j7['push'](f86aj), sqbkue['locator'] = qn4w25;
          } else i_j368_a(f86aj, sqbkue, pfv) && a3j7['push'](f86aj);'http://www.w3.org/1999/xhtml' !== f86aj['uri'] || f86aj['closed'] ? qse2ku++ : qse2ku = i_$i9rlt(sueb7, qse2ku, f86aj['tagName'], $rz0il, sqbkue);}
    } catch (e3s76b) {
      go$zl0['error']('element parse error: ' + e3s76b), qse2ku = -0x1;
    }qse2ku > wk2qn5 ? wk2qn5 = qse2ku : ku7(Math['max'](rvmt9, wk2qn5) + 0x1);
  }
}function i__f18cp(suq, ab76e) {
  return ab76e['lineNumber'] = suq['lineNumber'], ab76e['columnNumber'] = suq['columnNumber'], ab76e;
}function i_qes2ku(qk5un2, suk7be, timr9v, a86_f, cvmfp1, $igzl) {
  for (var glo$0z, _38aj6, ygoz0l = ++suk7be, ksqbue = i_qekus2;;) {
    var z0gol = qk5un2['charAt'](ygoz0l);switch (z0gol) {case '=':
        if (ksqbue === i_$t9lr) glo$0z = qk5un2['slice'](suk7be, ygoz0l), ksqbue = i_$9tilr;else {
          if (ksqbue !== i_l$zi0g) throw new Error('attribute equal must after attrName');ksqbue = i_$9tilr;
        }break;case '\x27':case '\x22':
        if (ksqbue === i_$9tilr || ksqbue === i_$t9lr) {
          if (ksqbue === i_$t9lr && ($igzl['warning']('attribute value must after "="'), glo$0z = qk5un2['slice'](suk7be, ygoz0l)), suk7be = ygoz0l + 0x1, ygoz0l = qk5un2['indexOf'](z0gol, suk7be), !(ygoz0l > 0x0)) throw new Error('attribute value no end \'' + z0gol + '\' match');_38aj6 = qk5un2['slice'](suk7be, ygoz0l)['replace'](/&#?\w+;/g, cvmfp1), timr9v['add'](glo$0z, _38aj6, suk7be - 0x1), ksqbue = i_pfv1mc;
        } else {
          if (ksqbue != i_jfc) throw new Error('attribute value must after "="');_38aj6 = qk5un2['slice'](suk7be, ygoz0l)['replace'](/&#?\w+;/g, cvmfp1), timr9v['add'](glo$0z, _38aj6, suk7be), $igzl['warning']('attribute "' + glo$0z + '" missed start quot(' + z0gol + ')!!'), suk7be = ygoz0l + 0x1, ksqbue = i_pfv1mc;
        }break;case '/':
        switch (ksqbue) {case i_qekus2:
            timr9v['setTagName'](qk5un2['slice'](suk7be, ygoz0l));case i_pfv1mc:case i_z0ygol:case i__cpf8j:
            ksqbue = i__cpf8j, timr9v['closed'] = !0x0;case i_jfc:case i_$t9lr:case i_l$zi0g:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $igzl['error']('unexpected end of input'), ksqbue == i_qekus2 && timr9v['setTagName'](qk5un2['slice'](suk7be, ygoz0l)), ygoz0l;case '>':
        switch (ksqbue) {case i_qekus2:
            timr9v['setTagName'](qk5un2['slice'](suk7be, ygoz0l));case i_pfv1mc:case i_z0ygol:case i__cpf8j:
            break;case i_jfc:case i_$t9lr:
            _38aj6 = qk5un2['slice'](suk7be, ygoz0l), '/' === _38aj6['slice'](-0x1) && (timr9v['closed'] = !0x0, _38aj6 = _38aj6['slice'](0x0, -0x1));case i_l$zi0g:
            ksqbue === i_l$zi0g && (_38aj6 = glo$0z), ksqbue == i_jfc ? ($igzl['warning']('attribute "' + _38aj6 + '" missed quot(")!!'), timr9v['add'](glo$0z, _38aj6['replace'](/&#?\w+;/g, cvmfp1), suk7be)) : ('http://www.w3.org/1999/xhtml' === a86_f[''] && _38aj6['match'](/^(?:disabled|checked|selected)$/i) || $igzl['warning']('attribute "' + _38aj6 + '" missed value!! "' + _38aj6 + '" instead!!'), timr9v['add'](_38aj6, _38aj6, suk7be));break;case i_$9tilr:
            throw new Error('attribute value missed!!');}return ygoz0l;case '\u0080':
        z0gol = '\x20';default:
        if ('\x20' >= z0gol) switch (ksqbue) {case i_qekus2:
            timr9v['setTagName'](qk5un2['slice'](suk7be, ygoz0l)), ksqbue = i_z0ygol;break;case i_$t9lr:
            glo$0z = qk5un2['slice'](suk7be, ygoz0l), ksqbue = i_l$zi0g;break;case i_jfc:
            var _38aj6 = qk5un2['slice'](suk7be, ygoz0l)['replace'](/&#?\w+;/g, cvmfp1);$igzl['warning']('attribute "' + _38aj6 + '" missed quot(")!!'), timr9v['add'](glo$0z, _38aj6, suk7be);case i_pfv1mc:
            ksqbue = i_z0ygol;} else switch (ksqbue) {case i_l$zi0g:
            {
              timr9v['tagName'];
            }'http://www.w3.org/1999/xhtml' === a86_f[''] && glo$0z['match'](/^(?:disabled|checked|selected)$/i) || $igzl['warning']('attribute "' + glo$0z + '" missed value!! "' + glo$0z + '" instead2!!'), timr9v['add'](glo$0z, glo$0z, suk7be), suk7be = ygoz0l, ksqbue = i_$t9lr;break;case i_pfv1mc:
            $igzl['warning']('attribute space is required"' + glo$0z + '\x22!!');case i_z0ygol:
            ksqbue = i_$t9lr, suk7be = ygoz0l;break;case i_$9tilr:
            ksqbue = i_jfc, suk7be = ygoz0l;break;case i__cpf8j:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ygoz0l++;
  }
}function i_j368_a(b36ea, c9m1, yzo0gd) {
  for (var ebs37u = b36ea['tagName'], bsu7ke = null, usbe37 = b36ea['length']; usbe37--;) {
    var t19vm = b36ea[usbe37],
        i9vmt = t19vm['qName'],
        cfp1v = t19vm['value'],
        kun2q = i9vmt['indexOf'](':');if (kun2q > 0x0) var h4n2w = t19vm['prefix'] = i9vmt['slice'](0x0, kun2q),
        pjc_ = i9vmt['slice'](kun2q + 0x1),
        t91mvr = 'xmlns' === h4n2w && pjc_;else pjc_ = i9vmt, h4n2w = null, t91mvr = 'xmlns' === i9vmt && '';t19vm['localName'] = pjc_, t91mvr !== !0x1 && (null == bsu7ke && (bsu7ke = {}, i_wh2n45(yzo0gd, yzo0gd = {})), yzo0gd[t91mvr] = bsu7ke[t91mvr] = cfp1v, t19vm['uri'] = 'http://www.w3.org/2000/xmlns/', c9m1['startPrefixMapping'](t91mvr, cfp1v));
  }for (var usbe37 = b36ea['length']; usbe37--;) {
    t19vm = b36ea[usbe37];var h4n2w = t19vm['prefix'];h4n2w && ('xml' === h4n2w && (t19vm['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== h4n2w && (t19vm['uri'] = yzo0gd[h4n2w || '']));
  }var kun2q = ebs37u['indexOf'](':');kun2q > 0x0 ? (h4n2w = b36ea['prefix'] = ebs37u['slice'](0x0, kun2q), pjc_ = b36ea['localName'] = ebs37u['slice'](kun2q + 0x1)) : (h4n2w = null, pjc_ = b36ea['localName'] = ebs37u);var es6b3 = b36ea['uri'] = yzo0gd[h4n2w || ''];if (c9m1['startElement'](es6b3, pjc_, ebs37u, b36ea), !b36ea['closed']) return b36ea['currentNSMap'] = yzo0gd, b36ea['localNSMap'] = bsu7ke, !0x0;if (c9m1['endElement'](es6b3, pjc_, ebs37u), bsu7ke) {
    for (h4n2w in bsu7ke) c9m1['endPrefixMapping'](h4n2w);
  }
}function i_$i9rlt(w42n5, a_8f, kes2qu, j8a673, f68a_j) {
  if (/^(?:script|textarea)$/i['test'](kes2qu)) {
    var mv1cfp = w42n5['indexOf']('</' + kes2qu + '>', a_8f),
        fc8jp = w42n5['substring'](a_8f + 0x1, mv1cfp);if (/[&<]/['test'](fc8jp)) return (/^script$/i['test'](kes2qu) ? (f68a_j['characters'](fc8jp, 0x0, fc8jp['length']), mv1cfp) : (fc8jp = fc8jp['replace'](/&#?\w+;/g, j8a673), f68a_j['characters'](fc8jp, 0x0, fc8jp['length']), mv1cfp)
    );
  }return a_8f + 0x1;
}function i_e6s73b(vt91rm, u2es, t9irvm, cm_) {
  var h5nxw4 = cm_[t9irvm];return null == h5nxw4 && (h5nxw4 = vt91rm['lastIndexOf']('</' + t9irvm + '>'), u2es > h5nxw4 && (h5nxw4 = vt91rm['lastIndexOf']('</' + t9irvm)), cm_[t9irvm] = h5nxw4), u2es > h5nxw4;
}function i_wh2n45(izrl$t, i9tr$l) {
  for (var nh24w5 in izrl$t) i9tr$l[nh24w5] = izrl$t[nh24w5];
}function i_g0lz$i(m1cfp, q5wn24, _c81p, p18) {
  var i9v = m1cfp['charAt'](q5wn24 + 0x2);switch (i9v) {case '-':
      if ('-' === m1cfp['charAt'](q5wn24 + 0x3)) {
        var ylgzo = m1cfp['indexOf']('-->', q5wn24 + 0x4);return ylgzo > q5wn24 ? (_c81p['comment'](m1cfp, q5wn24 + 0x4, ylgzo - q5wn24 - 0x4), ylgzo + 0x3) : (p18['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == m1cfp['substr'](q5wn24 + 0x3, 0x6)) {
        var ylgzo = m1cfp['indexOf'](']]>', q5wn24 + 0x9);return _c81p['startCDATA'](), _c81p['characters'](m1cfp, q5wn24 + 0x9, ylgzo - q5wn24 - 0x9), _c81p['endCDATA'](), ylgzo + 0x3;
      }var ivtr9m = i_kus(m1cfp, q5wn24),
          ir$t9 = ivtr9m['length'];if (ir$t9 > 0x1 && /!doctype/i['test'](ivtr9m[0x0][0x0])) {
        var gil0z = ivtr9m[0x1][0x0],
            snk2uq = ir$t9 > 0x3 && /^public$/i['test'](ivtr9m[0x2][0x0]) && ivtr9m[0x3][0x0],
            cf1m_ = ir$t9 > 0x4 && ivtr9m[0x4][0x0],
            dyo0zg = ivtr9m[ir$t9 - 0x1];return _c81p['startDTD'](gil0z, snk2uq && snk2uq['replace'](/^(['"])(.*?)\1$/, '$2'), cf1m_ && cf1m_['replace'](/^(['"])(.*?)\1$/, '$2')), _c81p['endDTD'](), dyo0zg['index'] + dyo0zg[0x0]['length'];
      }}return -0x1;
}function i_q5n2k(w2hn4, n54q2, vtrim9) {
  var a3j_ = w2hn4['indexOf']('?>', n54q2);if (a3j_) {
    var $l0izr = w2hn4['substring'](n54q2, a3j_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($l0izr) {
      {
        $l0izr[0x0]['length'];
      }return vtrim9['processingInstruction']($l0izr[0x1], $l0izr[0x2]), a3j_ + 0x2;
    }return -0x1;
  }return -0x1;
}function i_cf_m() {}function i_usbe73(k7e, j86) {
  return k7e['__proto__'] = j86, k7e;
}function i_kus(v$rit9, j3_a6) {
  var s3b7u,
      t$9rl = [],
      r1tv9 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (r1tv9['lastIndex'] = j3_a6, r1tv9['exec'](v$rit9); s3b7u = r1tv9['exec'](v$rit9);) if (t$9rl['push'](s3b7u), s3b7u[0x1]) return t$9rl;
}var i_f_pjc8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_qn = new RegExp('[\\-\\.0-9' + i_f_pjc8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_w5k2 = new RegExp('^' + i_f_pjc8['source'] + i_qn['source'] + '*(?::' + i_f_pjc8['source'] + i_qn['source'] + '*)?$'),
    i_qekus2 = 0x0,
    i_$t9lr = 0x1,
    i_l$zi0g = 0x2,
    i_$9tilr = 0x3,
    i_jfc = 0x4,
    i_pfv1mc = 0x5,
    i_z0ygol = 0x6,
    i__cpf8j = 0x7;i_v9mc1p['prototype'] = { 'parse': function (fp1_8, ksbe7u, c9vtm) {
    var tri9m = this['domBuilder'];tri9m['startDocument'](), i_wh2n45(ksbe7u, ksbe7u = {}), i_lgy0(fp1_8, ksbe7u, c9vtm, tri9m, this['errorHandler']), tri9m['endDocument']();
  } }, i_cf_m['prototype'] = { 'setTagName': function (j367ba) {
    if (!i_w5k2['test'](j367ba)) throw new Error('invalid tagName:' + j367ba);this['tagName'] = j367ba;
  }, 'add': function (w4q5n, g$zil, qku2se) {
    if (!i_w5k2['test'](w4q5n)) throw new Error('invalid attribute:' + w4q5n);this[this['length']++] = { 'qName': w4q5n, 'value': g$zil, 'offset': qku2se };
  }, 'length': 0x0, 'getLocalName': function (tmv19) {
    return this[tmv19]['localName'];
  }, 'getLocator': function (nw45xh) {
    return this[nw45xh]['locator'];
  }, 'getQName': function (mc_1) {
    return this[mc_1]['qName'];
  }, 'getURI': function (f_8pc) {
    return this[f_8pc]['uri'];
  }, 'getValue': function (u52nkq) {
    return this[u52nkq]['value'];
  } }, i_usbe73({}, i_usbe73['prototype']) instanceof i_usbe73 || (i_usbe73 = function (eb76a, sq2u) {
  function af86_j() {}af86_j['prototype'] = sq2u, af86_j = new af86_j();for (sq2u in eb76a) af86_j[sq2u] = eb76a[sq2u];return af86_j;
}), exports['XMLReader'] = i_v9mc1p;