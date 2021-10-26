var k = wx.$f;
function fwjc16f() {}function ffcwj61(yj60cw, rnkb, kb_io3, z9hm, mxeh9z) {
  function a9mehu(_bnr) {
    if (_bnr > 0xffff) {
      _bnr -= 0x10000;var qtdspv = 0xd800 + (_bnr >> 0xa),
          quvpa = 0xdc00 + (0x3ff & _bnr);return String['fromCharCode'](qtdspv, quvpa);
    }return String['fromCharCode'](_bnr);
  }function nib4_r(w2s1) {
    var ig3ko = w2s1['slice'](0x1, -0x1);return ig3ko in kb_io3 ? kb_io3[ig3ko] : '#' === ig3ko['charAt'](0x0) ? a9mehu(parseInt(ig3ko['substr'](0x1)['replace']('x', '0x'))) : (mxeh9z['error']('entity not found:' + w2s1), w2s1);
  }function sd128t(_ibko3) {
    if (_ibko3 > _40rb) {
      var kb3_ir = yj60cw['substring'](_40rb, _ibko3)['replace'](/&#?\w+;/g, nib4_r);sdvqt && p5tq(_40rb), z9hm['characters'](kb3_ir, 0x0, _ibko3 - _40rb), _40rb = _ibko3;
    }
  }function p5tq(pu5q9a, c640y) {
    for (; pu5q9a >= _b04n && (c640y = n60yr['exec'](yj60cw));) r4n0b = c640y['index'], _b04n = r4n0b + c640y[0x0]['length'], sdvqt['lineNumber']++;sdvqt['columnNumber'] = pu5q9a - r4n0b + 0x1;
  }for (var r4n0b = 0x0, _b04n = 0x0, n60yr = /.*(?:\r\n?|\n)|.*$/g, sdvqt = z9hm['locator'], vqpua = [{ 'currentNSMap': rnkb }], uaqv5 = {}, _40rb = 0x0;;) {
    try {
      var dv28ts = yj60cw['indexOf']('<', _40rb);if (0x0 > dv28ts) {
        if (!yj60cw['substr'](_40rb)['match'](/^\s*$/)) {
          var uma59 = z9hm['doc'],
              c16wfj = uma59['createTextNode'](yj60cw['substr'](_40rb));uma59['appendChild'](c16wfj), z9hm['currentElement'] = c16wfj;
        }return;
      }switch (dv28ts > _40rb && sd128t(dv28ts), yj60cw['charAt'](dv28ts + 0x1)) {case '/':
          var d1f2s8 = yj60cw['indexOf']('>', dv28ts + 0x3),
              um59ae = yj60cw['substring'](dv28ts + 0x2, d1f2s8),
              n4ry06 = vqpua['pop']();0x0 > d1f2s8 ? (um59ae = yj60cw['substring'](dv28ts + 0x2)['replace'](/[\s<].*/, ''), mxeh9z['error']('end tag name: ' + um59ae + ' is not complete:' + n4ry06['tagName']), d1f2s8 = dv28ts + 0x1 + um59ae['length']) : um59ae['match'](/\s</) && (um59ae = um59ae['replace'](/[\s<].*/, ''), mxeh9z['error']('end tag name: ' + um59ae + ' maybe not complete'), d1f2s8 = dv28ts + 0x1 + um59ae['length']);var $io3b = n4ry06['localNSMap'],
              vtqa5 = n4ry06['tagName'] == um59ae,
              mxz = vtqa5 || n4ry06['tagName'] && n4ry06['tagName']['toLowerCase']() == um59ae['toLowerCase']();if (mxz) {
            if (z9hm['endElement'](n4ry06['uri'], n4ry06['localName'], um59ae), $io3b) {
              for (var cw6jf1 in $io3b) z9hm['endPrefixMapping'](cw6jf1);
            }vtqa5 || mxeh9z['fatalError']('end tag name: ' + um59ae + ' is not match the current start tagName:' + n4ry06['tagName']);
          } else vqpua['push'](n4ry06);d1f2s8++;break;case '?':
          sdvqt && p5tq(dv28ts), d1f2s8 = fuvqa5(yj60cw, dv28ts, z9hm);break;case '!':
          sdvqt && p5tq(dv28ts), d1f2s8 = fy64nj0(yj60cw, dv28ts, z9hm, mxeh9z);break;default:
          sdvqt && p5tq(dv28ts);var yn6j40 = new fsvd8(),
              bkn_ri = vqpua[vqpua['length'] - 0x1]['currentNSMap'],
              d1f2s8 = fx7zhe(yj60cw, dv28ts, yn6j40, bkn_ri, nib4_r, mxeh9z),
              emah9u = yn6j40['length'];if (!yn6j40['closed'] && fqdps(yj60cw, d1f2s8, yn6j40['tagName'], uaqv5) && (yn6j40['closed'] = !0x0, kb_io3['nbsp'] || mxeh9z['warning']('unclosed xml attribute')), sdvqt && emah9u) {
            for (var yn4_ = fa5me9u(sdvqt, {}), br_nk = 0x0; emah9u > br_nk; br_nk++) {
              var a9eumh = yn6j40[br_nk];p5tq(a9eumh['offset']), a9eumh['locator'] = fa5me9u(sdvqt, {});
            }z9hm['locator'] = yn4_, fnb04r_(yn6j40, z9hm, bkn_ri) && vqpua['push'](yn6j40), z9hm['locator'] = sdvqt;
          } else fnb04r_(yn6j40, z9hm, bkn_ri) && vqpua['push'](yn6j40);'http://www.w3.org/1999/xhtml' !== yn6j40['uri'] || yn6j40['closed'] ? d1f2s8++ : d1f2s8 = fumhxe(yj60cw, d1f2s8, yn6j40['tagName'], nib4_r, z9hm);}
    } catch (ny6j0) {
      mxeh9z['error']('element parse error: ' + ny6j0), d1f2s8 = -0x1;
    }d1f2s8 > _40rb ? _40rb = d1f2s8 : sd128t(Math['max'](dv28ts, _40rb) + 0x1);
  }
}function fa5me9u(bki_nr, avup) {
  return avup['lineNumber'] = bki_nr['lineNumber'], avup['columnNumber'] = bki_nr['columnNumber'], avup;
}function fx7zhe(pt5dq, a9ue5q, f28w1, pdv2t, uemx, jwcy6f) {
  for (var rn4b0_, br_, i3b$ok = ++a9ue5q, x9heum = frnib4;;) {
    var sf218w = pt5dq['charAt'](i3b$ok);switch (sf218w) {case '=':
        if (x9heum === fu9xhme) rn4b0_ = pt5dq['slice'](a9ue5q, i3b$ok), x9heum = ft2dvs8;else {
          if (x9heum !== fvpt5aq) throw new Error('attribute equal must after attrName');x9heum = ft2dvs8;
        }break;case '\x27':case '\x22':
        if (x9heum === ft2dvs8 || x9heum === fu9xhme) {
          if (x9heum === fu9xhme && (jwcy6f['warning']('attribute value must after "="'), rn4b0_ = pt5dq['slice'](a9ue5q, i3b$ok)), a9ue5q = i3b$ok + 0x1, i3b$ok = pt5dq['indexOf'](sf218w, a9ue5q), !(i3b$ok > 0x0)) throw new Error('attribute value no end \'' + sf218w + '\' match');br_ = pt5dq['slice'](a9ue5q, i3b$ok)['replace'](/&#?\w+;/g, uemx), f28w1['add'](rn4b0_, br_, a9ue5q - 0x1), x9heum = fnr_kbi;
        } else {
          if (x9heum != fj0wyc6) throw new Error('attribute value must after "="');br_ = pt5dq['slice'](a9ue5q, i3b$ok)['replace'](/&#?\w+;/g, uemx), f28w1['add'](rn4b0_, br_, a9ue5q), jwcy6f['warning']('attribute "' + rn4b0_ + '" missed start quot(' + sf218w + ')!!'), a9ue5q = i3b$ok + 0x1, x9heum = fnr_kbi;
        }break;case '/':
        switch (x9heum) {case frnib4:
            f28w1['setTagName'](pt5dq['slice'](a9ue5q, i3b$ok));case fnr_kbi:case fmxzh:case fkrnbi:
            x9heum = fkrnbi, f28w1['closed'] = !0x0;case fj0wyc6:case fu9xhme:case fvpt5aq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return jwcy6f['error']('unexpected end of input'), x9heum == frnib4 && f28w1['setTagName'](pt5dq['slice'](a9ue5q, i3b$ok)), i3b$ok;case '>':
        switch (x9heum) {case frnib4:
            f28w1['setTagName'](pt5dq['slice'](a9ue5q, i3b$ok));case fnr_kbi:case fmxzh:case fkrnbi:
            break;case fj0wyc6:case fu9xhme:
            br_ = pt5dq['slice'](a9ue5q, i3b$ok), '/' === br_['slice'](-0x1) && (f28w1['closed'] = !0x0, br_ = br_['slice'](0x0, -0x1));case fvpt5aq:
            x9heum === fvpt5aq && (br_ = rn4b0_), x9heum == fj0wyc6 ? (jwcy6f['warning']('attribute "' + br_ + '" missed quot(")!!'), f28w1['add'](rn4b0_, br_['replace'](/&#?\w+;/g, uemx), a9ue5q)) : ('http://www.w3.org/1999/xhtml' === pdv2t[''] && br_['match'](/^(?:disabled|checked|selected)$/i) || jwcy6f['warning']('attribute "' + br_ + '" missed value!! "' + br_ + '" instead!!'), f28w1['add'](br_, br_, a9ue5q));break;case ft2dvs8:
            throw new Error('attribute value missed!!');}return i3b$ok;case '\u0080':
        sf218w = '\x20';default:
        if ('\x20' >= sf218w) switch (x9heum) {case frnib4:
            f28w1['setTagName'](pt5dq['slice'](a9ue5q, i3b$ok)), x9heum = fmxzh;break;case fu9xhme:
            rn4b0_ = pt5dq['slice'](a9ue5q, i3b$ok), x9heum = fvpt5aq;break;case fj0wyc6:
            var br_ = pt5dq['slice'](a9ue5q, i3b$ok)['replace'](/&#?\w+;/g, uemx);jwcy6f['warning']('attribute "' + br_ + '" missed quot(")!!'), f28w1['add'](rn4b0_, br_, a9ue5q);case fnr_kbi:
            x9heum = fmxzh;} else switch (x9heum) {case fvpt5aq:
            {
              f28w1['tagName'];
            }'http://www.w3.org/1999/xhtml' === pdv2t[''] && rn4b0_['match'](/^(?:disabled|checked|selected)$/i) || jwcy6f['warning']('attribute "' + rn4b0_ + '" missed value!! "' + rn4b0_ + '" instead2!!'), f28w1['add'](rn4b0_, rn4b0_, a9ue5q), a9ue5q = i3b$ok, x9heum = fu9xhme;break;case fnr_kbi:
            jwcy6f['warning']('attribute space is required"' + rn4b0_ + '\x22!!');case fmxzh:
            x9heum = fu9xhme, a9ue5q = i3b$ok;break;case ft2dvs8:
            x9heum = fj0wyc6, a9ue5q = i3b$ok;break;case fkrnbi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}i3b$ok++;
  }
}function fnb04r_(n064, cf2w, wcj6y) {
  for (var f6wcyj = n064['tagName'], tapvq5 = null, nry40_ = n064['length']; nry40_--;) {
    var qtv5ap = n064[nry40_],
        b4_nir = qtv5ap['qName'],
        e9huxm = qtv5ap['value'],
        $3boi = b4_nir['indexOf'](':');if ($3boi > 0x0) var sfd82 = qtv5ap['prefix'] = b4_nir['slice'](0x0, $3boi),
        cwy60 = b4_nir['slice']($3boi + 0x1),
        ex7mz = 'xmlns' === sfd82 && cwy60;else cwy60 = b4_nir, sfd82 = null, ex7mz = 'xmlns' === b4_nir && '';qtv5ap['localName'] = cwy60, ex7mz !== !0x1 && (null == tapvq5 && (tapvq5 = {}, fbki3o$(wcj6y, wcj6y = {})), wcj6y[ex7mz] = tapvq5[ex7mz] = e9huxm, qtv5ap['uri'] = 'http://www.w3.org/2000/xmlns/', cf2w['startPrefixMapping'](ex7mz, e9huxm));
  }for (var nry40_ = n064['length']; nry40_--;) {
    qtv5ap = n064[nry40_];var sfd82 = qtv5ap['prefix'];sfd82 && ('xml' === sfd82 && (qtv5ap['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== sfd82 && (qtv5ap['uri'] = wcj6y[sfd82 || '']));
  }var $3boi = f6wcyj['indexOf'](':');$3boi > 0x0 ? (sfd82 = n064['prefix'] = f6wcyj['slice'](0x0, $3boi), cwy60 = n064['localName'] = f6wcyj['slice']($3boi + 0x1)) : (sfd82 = null, cwy60 = n064['localName'] = f6wcyj);var i$go = n064['uri'] = wcj6y[sfd82 || ''];if (cf2w['startElement'](i$go, cwy60, f6wcyj, n064), !n064['closed']) return n064['currentNSMap'] = wcj6y, n064['localNSMap'] = tapvq5, !0x0;if (cf2w['endElement'](i$go, cwy60, f6wcyj), tapvq5) {
    for (sfd82 in tapvq5) cf2w['endPrefixMapping'](sfd82);
  }
}function fumhxe(aehu, i4n_br, cw218f, cjw1f8, hu9am) {
  if (/^(?:script|textarea)$/i['test'](cw218f)) {
    var ob3_ki = aehu['indexOf']('</' + cw218f + '>', i4n_br),
        zh7xe = aehu['substring'](i4n_br + 0x1, ob3_ki);if (/[&<]/['test'](zh7xe)) return (/^script$/i['test'](cw218f) ? (hu9am['characters'](zh7xe, 0x0, zh7xe['length']), ob3_ki) : (zh7xe = zh7xe['replace'](/&#?\w+;/g, cjw1f8), hu9am['characters'](zh7xe, 0x0, zh7xe['length']), ob3_ki)
    );
  }return i4n_br + 0x1;
}function fqdps(eqa59, i_bko3, tvds2p, $bio) {
  var y0w6c = $bio[tvds2p];return null == y0w6c && (y0w6c = eqa59['lastIndexOf']('</' + tvds2p + '>'), i_bko3 > y0w6c && (y0w6c = eqa59['lastIndexOf']('</' + tvds2p)), $bio[tvds2p] = y0w6c), i_bko3 > y0w6c;
}function fbki3o$(hxez9, zm7xhe) {
  for (var ki3$ in hxez9) zm7xhe[ki3$] = hxez9[ki3$];
}function fy64nj0(n640y, fyw6jc, vqdsp, u5ema9) {
  var jwfc81 = n640y['charAt'](fyw6jc + 0x2);switch (jwfc81) {case '-':
      if ('-' === n640y['charAt'](fyw6jc + 0x3)) {
        var t5vqa = n640y['indexOf']('-->', fyw6jc + 0x4);return t5vqa > fyw6jc ? (vqdsp['comment'](n640y, fyw6jc + 0x4, t5vqa - fyw6jc - 0x4), t5vqa + 0x3) : (u5ema9['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == n640y['substr'](fyw6jc + 0x3, 0x6)) {
        var t5vqa = n640y['indexOf'](']]>', fyw6jc + 0x9);return vqdsp['startCDATA'](), vqdsp['characters'](n640y, fyw6jc + 0x9, t5vqa - fyw6jc - 0x9), vqdsp['endCDATA'](), t5vqa + 0x3;
      }var j64yn = fh7mze(n640y, fyw6jc),
          tpsqd = j64yn['length'];if (tpsqd > 0x1 && /!doctype/i['test'](j64yn[0x0][0x0])) {
        var vqpstd = j64yn[0x1][0x0],
            y06wcj = tpsqd > 0x3 && /^public$/i['test'](j64yn[0x2][0x0]) && j64yn[0x3][0x0],
            jw0y6 = tpsqd > 0x4 && j64yn[0x4][0x0],
            dtv8 = j64yn[tpsqd - 0x1];return vqdsp['startDTD'](vqpstd, y06wcj && y06wcj['replace'](/^(['"])(.*?)\1$/, '$2'), jw0y6 && jw0y6['replace'](/^(['"])(.*?)\1$/, '$2')), vqdsp['endDTD'](), dtv8['index'] + dtv8[0x0]['length'];
      }}return -0x1;
}function fuvqa5(p95qu, j0y4c, f2w1c) {
  var inrb = p95qu['indexOf']('?>', j0y4c);if (inrb) {
    var tpvsq = p95qu['substring'](j0y4c, inrb)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (tpvsq) {
      {
        tpvsq[0x0]['length'];
      }return f2w1c['processingInstruction'](tpvsq[0x1], tpvsq[0x2]), inrb + 0x2;
    }return -0x1;
  }return -0x1;
}function fsvd8() {}function ft8d2s(meuah, biko_) {
  return meuah['__proto__'] = biko_, meuah;
}function fh7mze(k3$go, hex9) {
  var t5qpvd,
      gko3 = [],
      d81f = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (d81f['lastIndex'] = hex9, d81f['exec'](k3$go); t5qpvd = d81f['exec'](k3$go);) if (gko3['push'](t5qpvd), t5qpvd[0x1]) return gko3;
}var fy6wcf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fauhem = new RegExp('[\\-\\.0-9' + fy6wcf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    f_kbi = new RegExp('^' + fy6wcf['source'] + fauhem['source'] + '*(?::' + fy6wcf['source'] + fauhem['source'] + '*)?$'),
    frnib4 = 0x0,
    fu9xhme = 0x1,
    fvpt5aq = 0x2,
    ft2dvs8 = 0x3,
    fj0wyc6 = 0x4,
    fnr_kbi = 0x5,
    fmxzh = 0x6,
    fkrnbi = 0x7;fwjc16f['prototype'] = { 'parse': function (ts82, yc460j, r0ny_) {
    var q5tdvp = this['domBuilder'];q5tdvp['startDocument'](), fbki3o$(yc460j, yc460j = {}), ffcwj61(ts82, yc460j, r0ny_, q5tdvp, this['errorHandler']), q5tdvp['endDocument']();
  } }, fsvd8['prototype'] = { 'setTagName': function (e5qua) {
    if (!f_kbi['test'](e5qua)) throw new Error('invalid tagName:' + e5qua);this['tagName'] = e5qua;
  }, 'add': function (_rn4ib, _krnbi, qv5at) {
    if (!f_kbi['test'](_rn4ib)) throw new Error('invalid attribute:' + _rn4ib);this[this['length']++] = { 'qName': _rn4ib, 'value': _krnbi, 'offset': qv5at };
  }, 'length': 0x0, 'getLocalName': function (ny4j0) {
    return this[ny4j0]['localName'];
  }, 'getLocator': function (pqva) {
    return this[pqva]['locator'];
  }, 'getQName': function (n40y) {
    return this[n40y]['qName'];
  }, 'getURI': function (ap5qv) {
    return this[ap5qv]['uri'];
  }, 'getValue': function (bk_inr) {
    return this[bk_inr]['value'];
  } }, ft8d2s({}, ft8d2s['prototype']) instanceof ft8d2s || (ft8d2s = function (qe5ua, i3gk$o) {
  function eauq59() {}eauq59['prototype'] = i3gk$o, eauq59 = new eauq59();for (i3gk$o in qe5ua) eauq59[i3gk$o] = qe5ua[i3gk$o];return eauq59;
}), exports['XMLReader'] = fwjc16f;