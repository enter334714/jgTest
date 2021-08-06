var p = wx.$h;
function a_mprnoq() {}function a_aedbfc(afbcd, tsxvrw, jlnok, xz0$_, hcfdeg) {
  function ysxvt(ikgf) {
    var oklpm = ikgf['slice'](0x1, -0x1);return oklpm in jlnok ? jlnok[oklpm] : '#' === oklpm['charAt'](0x0) ? 0xffff < (oklpm = parseInt(oklpm['substr'](0x1)['replace']('x', '0x'))) ? (oklpm -= 0x10000, String['fromCharCode'](0xd800 + (oklpm >> 0xa), 0xdc00 + (0x3ff & oklpm))) : String['fromCharCode'](oklpm) : (hcfdeg['error']('entity not found:' + ikgf), ikgf);
  }function jghkil(srnqop) {
    var ehd;becdgf < srnqop && (ehd = afbcd['substring'](becdgf, srnqop)['replace'](/&#?\w+;/g, ysxvt), _$301 && yzxw$(becdgf), xz0$_['characters'](ehd, 0x0, srnqop - becdgf), becdgf = srnqop);
  }function yzxw$(gdbec, _02$31) {
    for (; tpsv <= gdbec && (_02$31 = wzxv['exec'](afbcd));) xtsvwy = _02$31['index'], tpsv = xtsvwy + _02$31[0x0]['length'], _$301['lineNumber']++;_$301['columnNumber'] = gdbec - xtsvwy + 0x1;
  }for (var xtsvwy = 0x0, tpsv = 0x0, wzxv = /.*(?:\r\n?|\n)|.*$/g, _$301 = xz0$_['locator'], yxsw = [{ 'currentNSMap': tsxvrw }], jmli = {}, becdgf = 0x0;;) {
    try {
      var onkmlj = afbcd['indexOf']('<', becdgf),
          spnoqr,
          gcedfh;if (onkmlj < 0x0) return void (afbcd['substr'](becdgf)['match'](/^\s*$/) || (gcedfh = (spnoqr = xz0$_['doc'])['createTextNode'](afbcd['substr'](becdgf)), spnoqr['appendChild'](gcedfh), xz0$_['currentElement'] = gcedfh));switch (becdgf < onkmlj && jghkil(onkmlj), afbcd['charAt'](onkmlj + 0x1)) {case '/':
          var _0213$ = afbcd['indexOf']('>', onkmlj + 0x3),
              lo = afbcd['substring'](onkmlj + 0x2, _0213$),
              dbcaf = yxsw['pop']();_0213$ < 0x0 ? (lo = afbcd['substring'](onkmlj + 0x2)['replace'](/[\s<].*/, ''), hcfdeg['error']('end tag name: ' + lo + ' is not complete:' + dbcaf['tagName']), _0213$ = onkmlj + 0x1 + lo['length']) : lo['match'](/\s</) && (lo = lo['replace'](/[\s<].*/, ''), hcfdeg['error']('end tag name: ' + lo + ' maybe not complete'), _0213$ = onkmlj + 0x1 + lo['length']);var hefgc = dbcaf['localNSMap'],
              vtprqs = dbcaf['tagName'] == lo;if (vtprqs || dbcaf['tagName'] && dbcaf['tagName']['toLowerCase']() == lo['toLowerCase']()) {
            if (xz0$_['endElement'](dbcaf['uri'], dbcaf['localName'], lo), hefgc) {
              for (var plonk in hefgc) xz0$_['endPrefixMapping'](plonk);
            }vtprqs || hcfdeg['fatalError']('end tag name: ' + lo + ' is not match the current start tagName:' + dbcaf['tagName']);
          } else yxsw['push'](dbcaf);_0213$++;break;case '?':
          _$301 && yzxw$(onkmlj), _0213$ = a_$2z1_0(afbcd, onkmlj, xz0$_);break;case '!':
          _$301 && yzxw$(onkmlj), _0213$ = a_otsqrp(afbcd, onkmlj, xz0$_, hcfdeg);break;default:
          _$301 && yzxw$(onkmlj);var fbdace = new a_fgedih(),
              tyxsv = yxsw[yxsw['length'] - 0x1]['currentNSMap'],
              _0213$ = a_$z1y(afbcd, onkmlj, fbdace, tyxsv, ysxvt, hcfdeg),
              y$_0x = fbdace['length'];if (!fbdace['closed'] && a_lpomn(afbcd, _0213$, fbdace['tagName'], jmli) && (fbdace['closed'] = !0x0, jlnok['nbsp'] || hcfdeg['warning']('unclosed xml attribute')), _$301 && y$_0x) {
            for (var wtvrsq = a_lmhikj(_$301, {}), vqwt = 0x0; vqwt < y$_0x; vqwt++) {
              var jik = fbdace[vqwt];yzxw$(jik['offset']), jik['locator'] = a_lmhikj(_$301, {});
            }xz0$_['locator'] = wtvrsq, a_gbfcd(fbdace, xz0$_, tyxsv) && yxsw['push'](fbdace), xz0$_['locator'] = _$301;
          } else a_gbfcd(fbdace, xz0$_, tyxsv) && yxsw['push'](fbdace);'http://www.w3.org/1999/xhtml' !== fbdace['uri'] || fbdace['closed'] ? _0213$++ : _0213$ = a_kolm(afbcd, _0213$, fbdace['tagName'], ysxvt, xz0$_);}
    } catch (_021$) {
      hcfdeg['error']('element parse error: ' + _021$), _0213$ = -0x1;
    }becdgf < _0213$ ? becdgf = _0213$ : jghkil(Math['max'](onkmlj, becdgf) + 0x1);
  }
}function a_lmhikj(wvystx, rqmnp) {
  return rqmnp['lineNumber'] = wvystx['lineNumber'], rqmnp['columnNumber'] = wvystx['columnNumber'], rqmnp;
}function a_$z1y(hgejf, qompnl, z2_$, qvrswt, daec, knjol) {
  for (var jgfhe, onjkl = ++qompnl, fdaebc = a_khlg;;) {
    var gcdbfe = hgejf['charAt'](onjkl);switch (gcdbfe) {case '=':
        if (fdaebc === a_gkilh) jgfhe = hgejf['slice'](qompnl, onjkl), fdaebc = a_gdcb;else {
          if (fdaebc !== a_tqpsr) throw new Error('attribute equal must after attrName');fdaebc = a_gdcb;
        }break;case '\x27':case '\x22':
        if (fdaebc === a_gdcb || fdaebc === a_gkilh) {
          if (fdaebc === a_gkilh && (knjol['warning']('attribute value must after "="'), jgfhe = hgejf['slice'](qompnl, onjkl)), !(0x0 < (onjkl = hgejf['indexOf'](gcdbfe, qompnl = onjkl + 0x1)))) throw new Error('attribute value no end \'' + gcdbfe + '\' match');ijnkl = hgejf['slice'](qompnl, onjkl)['replace'](/&#?\w+;/g, daec), z2_$['add'](jgfhe, ijnkl, qompnl - 0x1), fdaebc = a_mjkihl;
        } else {
          if (fdaebc != a_hijkgf) throw new Error('attribute value must after "="');ijnkl = hgejf['slice'](qompnl, onjkl)['replace'](/&#?\w+;/g, daec), z2_$['add'](jgfhe, ijnkl, qompnl), knjol['warning']('attribute "' + jgfhe + '" missed start quot(' + gcdbfe + ')!!'), qompnl = onjkl + 0x1, fdaebc = a_mjkihl;
        }break;case '/':
        switch (fdaebc) {case a_khlg:
            z2_$['setTagName'](hgejf['slice'](qompnl, onjkl));case a_mjkihl:case a_jlimh:case a_ijhk:
            fdaebc = a_ijhk, z2_$['closed'] = !0x0;case a_hijkgf:case a_gkilh:case a_tqpsr:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return knjol['error']('unexpected end of input'), fdaebc == a_khlg && z2_$['setTagName'](hgejf['slice'](qompnl, onjkl)), onjkl;case '>':
        switch (fdaebc) {case a_khlg:
            z2_$['setTagName'](hgejf['slice'](qompnl, onjkl));case a_mjkihl:case a_jlimh:case a_ijhk:
            break;case a_hijkgf:case a_gkilh:
            '/' === (ijnkl = hgejf['slice'](qompnl, onjkl))['slice'](-0x1) && (z2_$['closed'] = !0x0, ijnkl = ijnkl['slice'](0x0, -0x1));case a_tqpsr:
            fdaebc === a_tqpsr && (ijnkl = jgfhe), fdaebc == a_hijkgf ? (knjol['warning']('attribute "' + ijnkl + '" missed quot(")!!'), z2_$['add'](jgfhe, ijnkl['replace'](/&#?\w+;/g, daec), qompnl)) : ('http://www.w3.org/1999/xhtml' === qvrswt[''] && ijnkl['match'](/^(?:disabled|checked|selected)$/i) || knjol['warning']('attribute "' + ijnkl + '" missed value!! "' + ijnkl + '" instead!!'), z2_$['add'](ijnkl, ijnkl, qompnl));break;case a_gdcb:
            throw new Error('attribute value missed!!');}return onjkl;case '\u0080':
        gcdbfe = '\x20';default:
        if (gcdbfe <= '\x20') switch (fdaebc) {case a_khlg:
            z2_$['setTagName'](hgejf['slice'](qompnl, onjkl)), fdaebc = a_jlimh;break;case a_gkilh:
            jgfhe = hgejf['slice'](qompnl, onjkl), fdaebc = a_tqpsr;break;case a_hijkgf:
            var ijnkl = hgejf['slice'](qompnl, onjkl)['replace'](/&#?\w+;/g, daec);knjol['warning']('attribute "' + ijnkl + '" missed quot(")!!'), z2_$['add'](jgfhe, ijnkl, qompnl);case a_mjkihl:
            fdaebc = a_jlimh;} else switch (fdaebc) {case a_tqpsr:
            z2_$['tagName'], 'http://www.w3.org/1999/xhtml' === qvrswt[''] && jgfhe['match'](/^(?:disabled|checked|selected)$/i) || knjol['warning']('attribute "' + jgfhe + '" missed value!! "' + jgfhe + '" instead2!!'), z2_$['add'](jgfhe, jgfhe, qompnl), qompnl = onjkl, fdaebc = a_gkilh;break;case a_mjkihl:
            knjol['warning']('attribute space is required"' + jgfhe + '\x22!!');case a_jlimh:
            fdaebc = a_gkilh, qompnl = onjkl;break;case a_gdcb:
            fdaebc = a_hijkgf, qompnl = onjkl;break;case a_ijhk:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}onjkl++;
  }
}function a_gbfcd(_$0zxy, hmlijk, fehdgi) {
  for (var mqrpon = _$0zxy['tagName'], vswtx = null, vxstrw = _$0zxy['length']; vxstrw--;) {
    var dcf = _$0zxy[vxstrw],
        _z1$y0 = dcf['qName'],
        nmpok = dcf['value'],
        nporqm;_z1$y0 = 0x0 < (z$_y = _z1$y0['indexOf'](':')) ? (vtsxyw = dcf['prefix'] = _z1$y0['slice'](0x0, z$_y), nporqm = _z1$y0['slice'](z$_y + 0x1), 'xmlns' === vtsxyw && nporqm) : (vtsxyw = null, 'xmlns' === (nporqm = _z1$y0) && ''), dcf['localName'] = nporqm, !0x1 !== _z1$y0 && (null == vswtx && (vswtx = {}, a_lnk(fehdgi, fehdgi = {})), fehdgi[_z1$y0] = vswtx[_z1$y0] = nmpok, dcf['uri'] = 'http://www.w3.org/2000/xmlns/', hmlijk['startPrefixMapping'](_z1$y0, nmpok));
  }for (vxstrw = _$0zxy['length']; vxstrw--;) (vtsxyw = (dcf = _$0zxy[vxstrw])['prefix']) && ('xml' === vtsxyw && (dcf['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vtsxyw && (dcf['uri'] = fehdgi[vtsxyw || '']));var z$_y;nporqm = 0x0 < (z$_y = mqrpon['indexOf'](':')) ? (vtsxyw = _$0zxy['prefix'] = mqrpon['slice'](0x0, z$_y), _$0zxy['localName'] = mqrpon['slice'](z$_y + 0x1)) : (vtsxyw = null, _$0zxy['localName'] = mqrpon);var lmpnqo = _$0zxy['uri'] = fehdgi[vtsxyw || ''];if (hmlijk['startElement'](lmpnqo, nporqm, mqrpon, _$0zxy), !_$0zxy['closed']) return _$0zxy['currentNSMap'] = fehdgi, _$0zxy['localNSMap'] = vswtx, !0x0;if (hmlijk['endElement'](lmpnqo, nporqm, mqrpon), vswtx) {
    for (var vtsxyw in vswtx) hmlijk['endPrefixMapping'](vtsxyw);
  }
}function a_kolm(bcfeg, nomlpq, sqvrp, fhcgde, sxytw) {
  if (/^(?:script|textarea)$/i['test'](sqvrp)) {
    var opqln = bcfeg['indexOf']('</' + sqvrp + '>', nomlpq),
        bcfeg = bcfeg['substring'](nomlpq + 0x1, opqln);if (/[&<]/['test'](bcfeg)) return (/^script$/i['test'](sqvrp) || (bcfeg = bcfeg['replace'](/&#?\w+;/g, fhcgde)), sxytw['characters'](bcfeg, 0x0, bcfeg['length']), opqln
    );
  }return nomlpq + 0x1;
}function a_lpomn(pstr, y0z$1_, polk, eijfg) {
  var jghf = eijfg[polk];return null == jghf && ((jghf = pstr['lastIndexOf']('</' + polk + '>')) < y0z$1_ && (jghf = pstr['lastIndexOf']('</' + polk)), eijfg[polk] = jghf), jghf < y0z$1_;
}function a_lnk(y1z0, jmkh) {
  for (var fhjgie in y1z0) jmkh[fhjgie] = y1z0[fhjgie];
}function a_otsqrp(ywzxvt, gilhkj, gec, qrost) {
  var vtrwqs = ywzxvt['charAt'](gilhkj + 0x2);if ('-' === vtrwqs) return '-' !== ywzxvt['charAt'](gilhkj + 0x3) ? -0x1 : gilhkj < (zvyx$ = ywzxvt['indexOf']('-->', gilhkj + 0x4)) ? (gec['comment'](ywzxvt, gilhkj + 0x4, zvyx$ - gilhkj - 0x4), zvyx$ + 0x3) : (qrost['error']('Unclosed comment'), -0x1);if ('CDATA[' == ywzxvt['substr'](gilhkj + 0x3, 0x6)) {
    var zvyx$ = ywzxvt['indexOf'](']]>', gilhkj + 0x9);return gec['startCDATA'](), gec['characters'](ywzxvt, gilhkj + 0x9, zvyx$ - gilhkj - 0x9), gec['endCDATA'](), zvyx$ + 0x3;
  }vtrwqs = a_ijmnk(ywzxvt, gilhkj), qrost = vtrwqs['length'];if (0x1 < qrost && /!doctype/i['test'](vtrwqs[0x0][0x0])) return zvyx$ = vtrwqs[0x1][0x0], ywzxvt = 0x3 < qrost && /^public$/i['test'](vtrwqs[0x2][0x0]) && vtrwqs[0x3][0x0], gilhkj = 0x4 < qrost && vtrwqs[0x4][0x0], qrost = vtrwqs[qrost - 0x1], (gec['startDTD'](zvyx$, ywzxvt && ywzxvt['replace'](/^(['"])(.*?)\1$/, '$2'), gilhkj && gilhkj['replace'](/^(['"])(.*?)\1$/, '$2')), gec['endDTD'](), qrost['index'] + qrost[0x0]['length']);return -0x1;
}function a_$2z1_0(lkjih, cgfedh, fed) {
  var knmpo = lkjih['indexOf']('?>', cgfedh);if (knmpo) return cgfedh = lkjih['substring'](cgfedh, knmpo)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), cgfedh ? (cgfedh[0x0]['length'], fed['processingInstruction'](cgfedh[0x1], cgfedh[0x2]), knmpo + 0x2) : -0x1;return -0x1;
}function a_fgedih() {}function a_qrpnm(svtx, rtqvws) {
  return svtx['__proto__'] = rtqvws, svtx;
}function a_ijmnk(rtops, lnopmk) {
  var svxtwr,
      proqts = [],
      ikjmlh = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ikjmlh['lastIndex'] = lnopmk, ikjmlh['exec'](rtops); svxtwr = ikjmlh['exec'](rtops);) if (proqts['push'](svxtwr), svxtwr[0x1]) return proqts;
}var a_pqonml = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_kmlojn = new RegExp('[\\-\\.0-9' + a_pqonml['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a_inlkjm = new RegExp('^' + a_pqonml['source'] + a_kmlojn['source'] + '*(?::' + a_pqonml['source'] + a_kmlojn['source'] + '*)?$'),
    a_khlg = 0x0,
    a_gkilh = 0x1,
    a_tqpsr = 0x2,
    a_gdcb = 0x3,
    a_hijkgf = 0x4,
    a_mjkihl = 0x5,
    a_jlimh = 0x6,
    a_ijhk = 0x7;a_mprnoq['prototype'] = { 'parse': function (zvt, tzvxwy, rwsx) {
    var jikgl = this['domBuilder'];jikgl['startDocument'](), a_lnk(tzvxwy, tzvxwy = {}), a_aedbfc(zvt, tzvxwy, rwsx, jikgl, this['errorHandler']), jikgl['endDocument']();
  } }, a_fgedih['prototype'] = { 'setTagName': function (vwzytx) {
    if (!a_inlkjm['test'](vwzytx)) throw new Error('invalid tagName:' + vwzytx);this['tagName'] = vwzytx;
  }, 'add': function (fcad, hedgc, fjhgei) {
    if (!a_inlkjm['test'](fcad)) throw new Error('invalid attribute:' + fcad);this[this['length']++] = { 'qName': fcad, 'value': hedgc, 'offset': fjhgei };
  }, 'length': 0x0, 'getLocalName': function (npkmo) {
    return this[npkmo]['localName'];
  }, 'getLocator': function (nqspr) {
    return this[nqspr]['locator'];
  }, 'getQName': function (ikhglj) {
    return this[ikhglj]['qName'];
  }, 'getURI': function (gki) {
    return this[gki]['uri'];
  }, 'getValue': function (strpqo) {
    return this[strpqo]['value'];
  } }, a_qrpnm({}, a_qrpnm['prototype']) instanceof a_qrpnm || (a_qrpnm = function (bdefg, fabced) {
  function hfigkj() {}for (fabced in hfigkj['prototype'] = fabced, hfigkj = new hfigkj(), bdefg) hfigkj[fabced] = bdefg[fabced];return hfigkj;
}), exports['XMLReader'] = a_mprnoq;