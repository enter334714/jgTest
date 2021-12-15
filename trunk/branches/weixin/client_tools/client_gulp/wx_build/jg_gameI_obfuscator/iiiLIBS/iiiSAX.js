var Q = wx.$I;
function i_lgozy() {}function i_ol0z$(jp_fa8, cpj8, cvm91t, hx4n, $lg0i) {
  function wnh24(jcp) {
    if (jcp > 0xffff) {
      jcp -= 0x10000;var pf_cm1 = 0xd800 + (jcp >> 0xa),
          uqn5k2 = 0xdc00 + (0x3ff & jcp);return String['fromCharCode'](pf_cm1, uqn5k2);
    }return String['fromCharCode'](jcp);
  }function uqk2sn(quk25) {
    var til$9r = quk25['slice'](0x1, -0x1);return til$9r in cvm91t ? cvm91t[til$9r] : '#' === til$9r['charAt'](0x0) ? wnh24(parseInt(til$9r['substr'](0x1)['replace']('x', '0x'))) : ($lg0i['error']('entity not found:' + quk25), quk25);
  }function l9ir$t(aj36_8) {
    if (aj36_8 > lo0z) {
      var vmc91t = jp_fa8['substring'](lo0z, aj36_8)['replace'](/&#?\w+;/g, uqk2sn);gzol0$ && se7buk(lo0z), hx4n['characters'](vmc91t, 0x0, aj36_8 - lo0z), lo0z = aj36_8;
    }
  }function se7buk(nuk52, n5hw4) {
    for (; nuk52 >= ba3j7 && (n5hw4 = ubse['exec'](jp_fa8));) x4hn5 = n5hw4['index'], ba3j7 = x4hn5 + n5hw4[0x0]['length'], gzol0$['lineNumber']++;gzol0$['columnNumber'] = nuk52 - x4hn5 + 0x1;
  }for (var x4hn5 = 0x0, ba3j7 = 0x0, ubse = /.*(?:\r\n?|\n)|.*$/g, gzol0$ = hx4n['locator'], h4wn52 = [{ 'currentNSMap': cpj8 }], c1vmfp = {}, lo0z = 0x0;;) {
    try {
      var b7ja3 = jp_fa8['indexOf']('<', lo0z);if (0x0 > b7ja3) {
        if (!jp_fa8['substr'](lo0z)['match'](/^\s*$/)) {
          var ekuqsb = hx4n['doc'],
              it$r9 = ekuqsb['createTextNode'](jp_fa8['substr'](lo0z));ekuqsb['appendChild'](it$r9), hx4n['currentElement'] = it$r9;
        }return;
      }switch (b7ja3 > lo0z && l9ir$t(b7ja3), jp_fa8['charAt'](b7ja3 + 0x1)) {case '/':
          var ri9vmt = jp_fa8['indexOf']('>', b7ja3 + 0x3),
              qbesku = jp_fa8['substring'](b7ja3 + 0x2, ri9vmt),
              vp1cf = h4wn52['pop']();0x0 > ri9vmt ? (qbesku = jp_fa8['substring'](b7ja3 + 0x2)['replace'](/[\s<].*/, ''), $lg0i['error']('end tag name: ' + qbesku + ' is not complete:' + vp1cf['tagName']), ri9vmt = b7ja3 + 0x1 + qbesku['length']) : qbesku['match'](/\s</) && (qbesku = qbesku['replace'](/[\s<].*/, ''), $lg0i['error']('end tag name: ' + qbesku + ' maybe not complete'), ri9vmt = b7ja3 + 0x1 + qbesku['length']);var u2snkq = vp1cf['localNSMap'],
              es6 = vp1cf['tagName'] == qbesku,
              y0ozd = es6 || vp1cf['tagName'] && vp1cf['tagName']['toLowerCase']() == qbesku['toLowerCase']();if (y0ozd) {
            if (hx4n['endElement'](vp1cf['uri'], vp1cf['localName'], qbesku), u2snkq) {
              for (var wn2h in u2snkq) hx4n['endPrefixMapping'](wn2h);
            }es6 || $lg0i['fatalError']('end tag name: ' + qbesku + ' is not match the current start tagName:' + vp1cf['tagName']);
          } else h4wn52['push'](vp1cf);ri9vmt++;break;case '?':
          gzol0$ && se7buk(b7ja3), ri9vmt = i_vm9c(jp_fa8, b7ja3, hx4n);break;case '!':
          gzol0$ && se7buk(b7ja3), ri9vmt = i_z$gol0(jp_fa8, b7ja3, hx4n, $lg0i);break;default:
          gzol0$ && se7buk(b7ja3);var yl0z = new i__p8f(),
              zog = h4wn52[h4wn52['length'] - 0x1]['currentNSMap'],
              ri9vmt = i_fc8p1(jp_fa8, b7ja3, yl0z, zog, uqk2sn, $lg0i),
              vfc1 = yl0z['length'];if (!yl0z['closed'] && i_uqs2e(jp_fa8, ri9vmt, yl0z['tagName'], c1vmfp) && (yl0z['closed'] = !0x0, cvm91t['nbsp'] || $lg0i['warning']('unclosed xml attribute')), gzol0$ && vfc1) {
            for (var lt9r$i = i_virt(gzol0$, {}), quek2s = 0x0; vfc1 > quek2s; quek2s++) {
              var f_cp = yl0z[quek2s];se7buk(f_cp['offset']), f_cp['locator'] = i_virt(gzol0$, {});
            }hx4n['locator'] = lt9r$i, i_kbqeu(yl0z, hx4n, zog) && h4wn52['push'](yl0z), hx4n['locator'] = gzol0$;
          } else i_kbqeu(yl0z, hx4n, zog) && h4wn52['push'](yl0z);'http://www.w3.org/1999/xhtml' !== yl0z['uri'] || yl0z['closed'] ? ri9vmt++ : ri9vmt = i_z0og(jp_fa8, ri9vmt, yl0z['tagName'], uqk2sn, hx4n);}
    } catch (zolg0) {
      $lg0i['error']('element parse error: ' + zolg0), ri9vmt = -0x1;
    }ri9vmt > lo0z ? lo0z = ri9vmt : l9ir$t(Math['max'](b7ja3, lo0z) + 0x1);
  }
}function i_virt(ekb7su, n4xh5w) {
  return n4xh5w['lineNumber'] = ekb7su['lineNumber'], n4xh5w['columnNumber'] = ekb7su['columnNumber'], n4xh5w;
}function i_fc8p1(lo0zgy, dog0y, lr$iz, mv9t1r, bes7ku, cm1pv) {
  for (var f1p_c, li$zrt, wnkq = ++dog0y, ebkus = i_uske7;;) {
    var rlzi0$ = lo0zgy['charAt'](wnkq);switch (rlzi0$) {case '=':
        if (ebkus === i_tm9irv) f1p_c = lo0zgy['slice'](dog0y, wnkq), ebkus = i__p8fjc;else {
          if (ebkus !== i_sku2eq) throw new Error('attribute equal must after attrName');ebkus = i__p8fjc;
        }break;case '\x27':case '\x22':
        if (ebkus === i__p8fjc || ebkus === i_tm9irv) {
          if (ebkus === i_tm9irv && (cm1pv['warning']('attribute value must after "="'), f1p_c = lo0zgy['slice'](dog0y, wnkq)), dog0y = wnkq + 0x1, wnkq = lo0zgy['indexOf'](rlzi0$, dog0y), !(wnkq > 0x0)) throw new Error('attribute value no end \'' + rlzi0$ + '\' match');li$zrt = lo0zgy['slice'](dog0y, wnkq)['replace'](/&#?\w+;/g, bes7ku), lr$iz['add'](f1p_c, li$zrt, dog0y - 0x1), ebkus = i_k2un;
        } else {
          if (ebkus != i_fjc) throw new Error('attribute value must after "="');li$zrt = lo0zgy['slice'](dog0y, wnkq)['replace'](/&#?\w+;/g, bes7ku), lr$iz['add'](f1p_c, li$zrt, dog0y), cm1pv['warning']('attribute "' + f1p_c + '" missed start quot(' + rlzi0$ + ')!!'), dog0y = wnkq + 0x1, ebkus = i_k2un;
        }break;case '/':
        switch (ebkus) {case i_uske7:
            lr$iz['setTagName'](lo0zgy['slice'](dog0y, wnkq));case i_k2un:case i_oz0d:case i__fjp8c:
            ebkus = i__fjp8c, lr$iz['closed'] = !0x0;case i_fjc:case i_tm9irv:case i_sku2eq:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return cm1pv['error']('unexpected end of input'), ebkus == i_uske7 && lr$iz['setTagName'](lo0zgy['slice'](dog0y, wnkq)), wnkq;case '>':
        switch (ebkus) {case i_uske7:
            lr$iz['setTagName'](lo0zgy['slice'](dog0y, wnkq));case i_k2un:case i_oz0d:case i__fjp8c:
            break;case i_fjc:case i_tm9irv:
            li$zrt = lo0zgy['slice'](dog0y, wnkq), '/' === li$zrt['slice'](-0x1) && (lr$iz['closed'] = !0x0, li$zrt = li$zrt['slice'](0x0, -0x1));case i_sku2eq:
            ebkus === i_sku2eq && (li$zrt = f1p_c), ebkus == i_fjc ? (cm1pv['warning']('attribute "' + li$zrt + '" missed quot(")!!'), lr$iz['add'](f1p_c, li$zrt['replace'](/&#?\w+;/g, bes7ku), dog0y)) : ('http://www.w3.org/1999/xhtml' === mv9t1r[''] && li$zrt['match'](/^(?:disabled|checked|selected)$/i) || cm1pv['warning']('attribute "' + li$zrt + '" missed value!! "' + li$zrt + '" instead!!'), lr$iz['add'](li$zrt, li$zrt, dog0y));break;case i__p8fjc:
            throw new Error('attribute value missed!!');}return wnkq;case '\u0080':
        rlzi0$ = '\x20';default:
        if ('\x20' >= rlzi0$) switch (ebkus) {case i_uske7:
            lr$iz['setTagName'](lo0zgy['slice'](dog0y, wnkq)), ebkus = i_oz0d;break;case i_tm9irv:
            f1p_c = lo0zgy['slice'](dog0y, wnkq), ebkus = i_sku2eq;break;case i_fjc:
            var li$zrt = lo0zgy['slice'](dog0y, wnkq)['replace'](/&#?\w+;/g, bes7ku);cm1pv['warning']('attribute "' + li$zrt + '" missed quot(")!!'), lr$iz['add'](f1p_c, li$zrt, dog0y);case i_k2un:
            ebkus = i_oz0d;} else switch (ebkus) {case i_sku2eq:
            {
              lr$iz['tagName'];
            }'http://www.w3.org/1999/xhtml' === mv9t1r[''] && f1p_c['match'](/^(?:disabled|checked|selected)$/i) || cm1pv['warning']('attribute "' + f1p_c + '" missed value!! "' + f1p_c + '" instead2!!'), lr$iz['add'](f1p_c, f1p_c, dog0y), dog0y = wnkq, ebkus = i_tm9irv;break;case i_k2un:
            cm1pv['warning']('attribute space is required"' + f1p_c + '\x22!!');case i_oz0d:
            ebkus = i_tm9irv, dog0y = wnkq;break;case i__p8fjc:
            ebkus = i_fjc, dog0y = wnkq;break;case i__fjp8c:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}wnkq++;
  }
}function i_kbqeu(e376s, it$9vr, x5h) {
  for (var rv9tim = e376s['tagName'], m9rvt = null, ti$r9l = e376s['length']; ti$r9l--;) {
    var t9v$r = e376s[ti$r9l],
        f8c = t9v$r['qName'],
        qn2u5 = t9v$r['value'],
        e7bu = f8c['indexOf'](':');if (e7bu > 0x0) var a_6 = t9v$r['prefix'] = f8c['slice'](0x0, e7bu),
        $0zigl = f8c['slice'](e7bu + 0x1),
        ti9vr$ = 'xmlns' === a_6 && $0zigl;else $0zigl = f8c, a_6 = null, ti9vr$ = 'xmlns' === f8c && '';t9v$r['localName'] = $0zigl, ti9vr$ !== !0x1 && (null == m9rvt && (m9rvt = {}, i_i9vtr(x5h, x5h = {})), x5h[ti9vr$] = m9rvt[ti9vr$] = qn2u5, t9v$r['uri'] = 'http://www.w3.org/2000/xmlns/', it$9vr['startPrefixMapping'](ti9vr$, qn2u5));
  }for (var ti$r9l = e376s['length']; ti$r9l--;) {
    t9v$r = e376s[ti$r9l];var a_6 = t9v$r['prefix'];a_6 && ('xml' === a_6 && (t9v$r['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== a_6 && (t9v$r['uri'] = x5h[a_6 || '']));
  }var e7bu = rv9tim['indexOf'](':');e7bu > 0x0 ? (a_6 = e376s['prefix'] = rv9tim['slice'](0x0, e7bu), $0zigl = e376s['localName'] = rv9tim['slice'](e7bu + 0x1)) : (a_6 = null, $0zigl = e376s['localName'] = rv9tim);var p8f_jc = e376s['uri'] = x5h[a_6 || ''];if (it$9vr['startElement'](p8f_jc, $0zigl, rv9tim, e376s), !e376s['closed']) return e376s['currentNSMap'] = x5h, e376s['localNSMap'] = m9rvt, !0x0;if (it$9vr['endElement'](p8f_jc, $0zigl, rv9tim), m9rvt) {
    for (a_6 in m9rvt) it$9vr['endPrefixMapping'](a_6);
  }
}function i_z0og(j67ab3, lgoy, pj8, b7s6, rizt$l) {
  if (/^(?:script|textarea)$/i['test'](pj8)) {
    var n425wq = j67ab3['indexOf']('</' + pj8 + '>', lgoy),
        c19mvt = j67ab3['substring'](lgoy + 0x1, n425wq);if (/[&<]/['test'](c19mvt)) return (/^script$/i['test'](pj8) ? (rizt$l['characters'](c19mvt, 0x0, c19mvt['length']), n425wq) : (c19mvt = c19mvt['replace'](/&#?\w+;/g, b7s6), rizt$l['characters'](c19mvt, 0x0, c19mvt['length']), n425wq)
    );
  }return lgoy + 0x1;
}function i_uqs2e(f_1cpm, k2se, izr$l0, zir$t) {
  var mpc1vf = zir$t[izr$l0];return null == mpc1vf && (mpc1vf = f_1cpm['lastIndexOf']('</' + izr$l0 + '>'), k2se > mpc1vf && (mpc1vf = f_1cpm['lastIndexOf']('</' + izr$l0)), zir$t[izr$l0] = mpc1vf), k2se > mpc1vf;
}function i_i9vtr($z0lr, yg) {
  for (var qu5nk2 in $z0lr) yg[qu5nk2] = $z0lr[qu5nk2];
}function i_z$gol0(p8c_jf, nw5, ukbes7, ja768) {
  var q2esk = p8c_jf['charAt'](nw5 + 0x2);switch (q2esk) {case '-':
      if ('-' === p8c_jf['charAt'](nw5 + 0x3)) {
        var sbu7ke = p8c_jf['indexOf']('-->', nw5 + 0x4);return sbu7ke > nw5 ? (ukbes7['comment'](p8c_jf, nw5 + 0x4, sbu7ke - nw5 - 0x4), sbu7ke + 0x3) : (ja768['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == p8c_jf['substr'](nw5 + 0x3, 0x6)) {
        var sbu7ke = p8c_jf['indexOf'](']]>', nw5 + 0x9);return ukbes7['startCDATA'](), ukbes7['characters'](p8c_jf, nw5 + 0x9, sbu7ke - nw5 - 0x9), ukbes7['endCDATA'](), sbu7ke + 0x3;
      }var uqkn25 = i_vc9p1m(p8c_jf, nw5),
          bueks7 = uqkn25['length'];if (bueks7 > 0x1 && /!doctype/i['test'](uqkn25[0x0][0x0])) {
        var xw5h = uqkn25[0x1][0x0],
            vm9tri = bueks7 > 0x3 && /^public$/i['test'](uqkn25[0x2][0x0]) && uqkn25[0x3][0x0],
            a368j = bueks7 > 0x4 && uqkn25[0x4][0x0],
            ub37e = uqkn25[bueks7 - 0x1];return ukbes7['startDTD'](xw5h, vm9tri && vm9tri['replace'](/^(['"])(.*?)\1$/, '$2'), a368j && a368j['replace'](/^(['"])(.*?)\1$/, '$2')), ukbes7['endDTD'](), ub37e['index'] + ub37e[0x0]['length'];
      }}return -0x1;
}function i_vm9c(_1fp8c, sb7keu, zl$it) {
  var t$ilrz = _1fp8c['indexOf']('?>', sb7keu);if (t$ilrz) {
    var w542q = _1fp8c['substring'](sb7keu, t$ilrz)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (w542q) {
      {
        w542q[0x0]['length'];
      }return zl$it['processingInstruction'](w542q[0x1], w542q[0x2]), t$ilrz + 0x2;
    }return -0x1;
  }return -0x1;
}function i__p8f() {}function i_f1p(kq2eus, pc_f81) {
  return kq2eus['__proto__'] = pc_f81, kq2eus;
}function i_vc9p1m(gzoly, bs37) {
  var l$zg,
      nu5k = [],
      a768j3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (a768j3['lastIndex'] = bs37, a768j3['exec'](gzoly); l$zg = a768j3['exec'](gzoly);) if (nu5k['push'](l$zg), l$zg[0x1]) return nu5k;
}var i_zgl0$i = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    i_kus2e = new RegExp('[\\-\\.0-9' + i_zgl0$i['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    i_ja_fp = new RegExp('^' + i_zgl0$i['source'] + i_kus2e['source'] + '*(?::' + i_zgl0$i['source'] + i_kus2e['source'] + '*)?$'),
    i_uske7 = 0x0,
    i_tm9irv = 0x1,
    i_sku2eq = 0x2,
    i__p8fjc = 0x3,
    i_fjc = 0x4,
    i_k2un = 0x5,
    i_oz0d = 0x6,
    i__fjp8c = 0x7;i_lgozy['prototype'] = { 'parse': function (ja8f, j_pcf8, i9ltr) {
    var xw45n = this['domBuilder'];xw45n['startDocument'](), i_i9vtr(j_pcf8, j_pcf8 = {}), i_ol0z$(ja8f, j_pcf8, i9ltr, xw45n, this['errorHandler']), xw45n['endDocument']();
  } }, i__p8f['prototype'] = { 'setTagName': function ($ril) {
    if (!i_ja_fp['test']($ril)) throw new Error('invalid tagName:' + $ril);this['tagName'] = $ril;
  }, 'add': function (ilz$r, ti$r9, c_f1p) {
    if (!i_ja_fp['test'](ilz$r)) throw new Error('invalid attribute:' + ilz$r);this[this['length']++] = { 'qName': ilz$r, 'value': ti$r9, 'offset': c_f1p };
  }, 'length': 0x0, 'getLocalName': function (rlit$z) {
    return this[rlit$z]['localName'];
  }, 'getLocator': function (z$g) {
    return this[z$g]['locator'];
  }, 'getQName': function (_j8fpc) {
    return this[_j8fpc]['qName'];
  }, 'getURI': function (pc9v) {
    return this[pc9v]['uri'];
  }, 'getValue': function (rvi$t) {
    return this[rvi$t]['value'];
  } }, i_f1p({}, i_f1p['prototype']) instanceof i_f1p || (i_f1p = function (p9c1, a_fjp8) {
  function zo0gly() {}zo0gly['prototype'] = a_fjp8, zo0gly = new zo0gly();for (a_fjp8 in p9c1) zo0gly[a_fjp8] = p9c1[a_fjp8];return zo0gly;
}), exports['XMLReader'] = i_lgozy;