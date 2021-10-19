var U = wx.$k;
function K1_tdzu2o() {}function K1_hr7s1(tudyz, quolgy, louyq, qlgypa, k60j) {
  function aplicj(zuydt) {
    var zguqyo = zuydt['slice'](0x1, -0x1);return zguqyo in louyq ? louyq[zguqyo] : '#' === zguqyo['charAt'](0x0) ? 0xffff < (zguqyo = parseInt(zguqyo['substr'](0x1)['replace']('x', '0x'))) ? (zguqyo -= 0x10000, String['fromCharCode'](0xd800 + (zguqyo >> 0xa), 0xdc00 + (0x3ff & zguqyo))) : String['fromCharCode'](zguqyo) : (k60j['error']('entity not found:' + zuydt), zuydt);
  }function uzd2o(fv5nm9) {
    var $eh4;lugpyq < fv5nm9 && ($eh4 = tudyz['substring'](lugpyq, fv5nm9)['replace'](/&#?\w+;/g, aplicj), n93mf && glqay(lugpyq), qlgypa['characters']($eh4, 0x0, fv5nm9 - lugpyq), lugpyq = fv5nm9);
  }function glqay(qgyuz, gpaqy) {
    for (; qzyuo <= qgyuz && (gpaqy = bs8['exec'](tudyz));) n5$3fe = gpaqy['index'], qzyuo = n5$3fe + gpaqy[0x0]['length'], n93mf['lineNumber']++;n93mf['columnNumber'] = qgyuz - n5$3fe + 0x1;
  }for (var n5$3fe = 0x0, qzyuo = 0x0, bs8 = /.*(?:\r\n?|\n)|.*$/g, n93mf = qlgypa['locator'], c60wk = [{ 'currentNSMap': quolgy }], rw67k = {}, lugpyq = 0x0;;) {
    try {
      var otyudz = tudyz['indexOf']('<', lugpyq),
          x8e$4,
          c6ija0;if (otyudz < 0x0) return void (tudyz['substr'](lugpyq)['match'](/^\s*$/) || (c6ija0 = (x8e$4 = qlgypa['doc'])['createTextNode'](tudyz['substr'](lugpyq)), x8e$4['appendChild'](c6ija0), qlgypa['currentElement'] = c6ija0));switch (lugpyq < otyudz && uzd2o(otyudz), tudyz['charAt'](otyudz + 0x1)) {case '/':
          var dt_o2z = tudyz['indexOf']('>', otyudz + 0x3),
              jlpaic = tudyz['substring'](otyudz + 0x2, dt_o2z),
              ygozq = c60wk['pop']();dt_o2z < 0x0 ? (jlpaic = tudyz['substring'](otyudz + 0x2)['replace'](/[\s<].*/, ''), k60j['error']('end tag name: ' + jlpaic + ' is not complete:' + ygozq['tagName']), dt_o2z = otyudz + 0x1 + jlpaic['length']) : jlpaic['match'](/\s</) && (jlpaic = jlpaic['replace'](/[\s<].*/, ''), k60j['error']('end tag name: ' + jlpaic + ' maybe not complete'), dt_o2z = otyudz + 0x1 + jlpaic['length']);var j6icw = ygozq['localNSMap'],
              n953$f = ygozq['tagName'] == jlpaic;if (n953$f || ygozq['tagName'] && ygozq['tagName']['toLowerCase']() == jlpaic['toLowerCase']()) {
            if (qlgypa['endElement'](ygozq['uri'], ygozq['localName'], jlpaic), j6icw) {
              for (var x$5ef3 in j6icw) qlgypa['endPrefixMapping'](x$5ef3);
            }n953$f || k60j['fatalError']('end tag name: ' + jlpaic + ' is not match the current start tagName:' + ygozq['tagName']);
          } else c60wk['push'](ygozq);dt_o2z++;break;case '?':
          n93mf && glqay(otyudz), dt_o2z = K1_n59vfm(tudyz, otyudz, qlgypa);break;case '!':
          n93mf && glqay(otyudz), dt_o2z = K1_ozyg(tudyz, otyudz, qlgypa, k60j);break;default:
          n93mf && glqay(otyudz);var plica = new K1_n539(),
              br71h = c60wk[c60wk['length'] - 0x1]['currentNSMap'],
              dt_o2z = K1_oytz(tudyz, otyudz, plica, br71h, aplicj, k60j),
              otzuy = plica['length'];if (!plica['closed'] && K1_qulp(tudyz, dt_o2z, plica['tagName'], rw67k) && (plica['closed'] = !0x0, louyq['nbsp'] || k60j['warning']('unclosed xml attribute')), n93mf && otzuy) {
            for (var qgoly = K1_pqaji(n93mf, {}), i0a6j = 0x0; i0a6j < otzuy; i0a6j++) {
              var bsr71k = plica[i0a6j];glqay(bsr71k['offset']), bsr71k['locator'] = K1_pqaji(n93mf, {});
            }qlgypa['locator'] = qgoly, K1_nf953m(plica, qlgypa, br71h) && c60wk['push'](plica), qlgypa['locator'] = n93mf;
          } else K1_nf953m(plica, qlgypa, br71h) && c60wk['push'](plica);'http://www.w3.org/1999/xhtml' !== plica['uri'] || plica['closed'] ? dt_o2z++ : dt_o2z = K1_t2_o(tudyz, dt_o2z, plica['tagName'], aplicj, qlgypa);}
    } catch (n5f9$3) {
      k60j['error']('element parse error: ' + n5f9$3), dt_o2z = -0x1;
    }lugpyq < dt_o2z ? lugpyq = dt_o2z : uzd2o(Math['max'](otyudz, lugpyq) + 0x1);
  }
}function K1_pqaji(rbsw7, yquogz) {
  return yquogz['lineNumber'] = rbsw7['lineNumber'], yquogz['columnNumber'] = rbsw7['columnNumber'], yquogz;
}function K1_oytz(hex$8, c0a6ji, z2t_, cajpil, f$935n, e$x83) {
  for (var gyqolu, hb81 = ++c0a6ji, n3f95 = K1_cailjp;;) {
    var brsk = hex$8['charAt'](hb81);switch (brsk) {case '=':
        if (n3f95 === K1_kwr7b) gyqolu = hex$8['slice'](c0a6ji, hb81), n3f95 = K1_hr7s1b;else {
          if (n3f95 !== K1_jiac0p) throw new Error('attribute equal must after attrName');n3f95 = K1_hr7s1b;
        }break;case '\x27':case '\x22':
        if (n3f95 === K1_hr7s1b || n3f95 === K1_kwr7b) {
          if (n3f95 === K1_kwr7b && (e$x83['warning']('attribute value must after "="'), gyqolu = hex$8['slice'](c0a6ji, hb81)), !(0x0 < (hb81 = hex$8['indexOf'](brsk, c0a6ji = hb81 + 0x1)))) throw new Error('attribute value no end \'' + brsk + '\' match');agly = hex$8['slice'](c0a6ji, hb81)['replace'](/&#?\w+;/g, f$935n), z2t_['add'](gyqolu, agly, c0a6ji - 0x1), n3f95 = K1_sw7krb;
        } else {
          if (n3f95 != K1_aji06c) throw new Error('attribute value must after "="');agly = hex$8['slice'](c0a6ji, hb81)['replace'](/&#?\w+;/g, f$935n), z2t_['add'](gyqolu, agly, c0a6ji), e$x83['warning']('attribute "' + gyqolu + '" missed start quot(' + brsk + ')!!'), c0a6ji = hb81 + 0x1, n3f95 = K1_sw7krb;
        }break;case '/':
        switch (n3f95) {case K1_cailjp:
            z2t_['setTagName'](hex$8['slice'](c0a6ji, hb81));case K1_sw7krb:case K1_h7srb1:case K1_ex$48:
            n3f95 = K1_ex$48, z2t_['closed'] = !0x0;case K1_aji06c:case K1_kwr7b:case K1_jiac0p:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return e$x83['error']('unexpected end of input'), n3f95 == K1_cailjp && z2t_['setTagName'](hex$8['slice'](c0a6ji, hb81)), hb81;case '>':
        switch (n3f95) {case K1_cailjp:
            z2t_['setTagName'](hex$8['slice'](c0a6ji, hb81));case K1_sw7krb:case K1_h7srb1:case K1_ex$48:
            break;case K1_aji06c:case K1_kwr7b:
            '/' === (agly = hex$8['slice'](c0a6ji, hb81))['slice'](-0x1) && (z2t_['closed'] = !0x0, agly = agly['slice'](0x0, -0x1));case K1_jiac0p:
            n3f95 === K1_jiac0p && (agly = gyqolu), n3f95 == K1_aji06c ? (e$x83['warning']('attribute "' + agly + '" missed quot(")!!'), z2t_['add'](gyqolu, agly['replace'](/&#?\w+;/g, f$935n), c0a6ji)) : ('http://www.w3.org/1999/xhtml' === cajpil[''] && agly['match'](/^(?:disabled|checked|selected)$/i) || e$x83['warning']('attribute "' + agly + '" missed value!! "' + agly + '" instead!!'), z2t_['add'](agly, agly, c0a6ji));break;case K1_hr7s1b:
            throw new Error('attribute value missed!!');}return hb81;case '\u0080':
        brsk = '\x20';default:
        if (brsk <= '\x20') switch (n3f95) {case K1_cailjp:
            z2t_['setTagName'](hex$8['slice'](c0a6ji, hb81)), n3f95 = K1_h7srb1;break;case K1_kwr7b:
            gyqolu = hex$8['slice'](c0a6ji, hb81), n3f95 = K1_jiac0p;break;case K1_aji06c:
            var agly = hex$8['slice'](c0a6ji, hb81)['replace'](/&#?\w+;/g, f$935n);e$x83['warning']('attribute "' + agly + '" missed quot(")!!'), z2t_['add'](gyqolu, agly, c0a6ji);case K1_sw7krb:
            n3f95 = K1_h7srb1;} else switch (n3f95) {case K1_jiac0p:
            z2t_['tagName'], 'http://www.w3.org/1999/xhtml' === cajpil[''] && gyqolu['match'](/^(?:disabled|checked|selected)$/i) || e$x83['warning']('attribute "' + gyqolu + '" missed value!! "' + gyqolu + '" instead2!!'), z2t_['add'](gyqolu, gyqolu, c0a6ji), c0a6ji = hb81, n3f95 = K1_kwr7b;break;case K1_sw7krb:
            e$x83['warning']('attribute space is required"' + gyqolu + '\x22!!');case K1_h7srb1:
            n3f95 = K1_kwr7b, c0a6ji = hb81;break;case K1_hr7s1b:
            n3f95 = K1_aji06c, c0a6ji = hb81;break;case K1_ex$48:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hb81++;
  }
}function K1_nf953m(kbr76, qygla, f5ex3$) {
  for (var ztd2_o = kbr76['tagName'], _o2tzd = null, $nf395 = kbr76['length']; $nf395--;) {
    var w60kr = kbr76[$nf395],
        j0ic6a = w60kr['qName'],
        fe5x3 = w60kr['value'],
        c6w;j0ic6a = 0x0 < (quzgo = j0ic6a['indexOf'](':')) ? (e3x84 = w60kr['prefix'] = j0ic6a['slice'](0x0, quzgo), c6w = j0ic6a['slice'](quzgo + 0x1), 'xmlns' === e3x84 && c6w) : (e3x84 = null, 'xmlns' === (c6w = j0ic6a) && ''), w60kr['localName'] = c6w, !0x1 !== j0ic6a && (null == _o2tzd && (_o2tzd = {}, K1_yzotu(f5ex3$, f5ex3$ = {})), f5ex3$[j0ic6a] = _o2tzd[j0ic6a] = fe5x3, w60kr['uri'] = 'http://www.w3.org/2000/xmlns/', qygla['startPrefixMapping'](j0ic6a, fe5x3));
  }for ($nf395 = kbr76['length']; $nf395--;) (e3x84 = (w60kr = kbr76[$nf395])['prefix']) && ('xml' === e3x84 && (w60kr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== e3x84 && (w60kr['uri'] = f5ex3$[e3x84 || '']));var quzgo;c6w = 0x0 < (quzgo = ztd2_o['indexOf'](':')) ? (e3x84 = kbr76['prefix'] = ztd2_o['slice'](0x0, quzgo), kbr76['localName'] = ztd2_o['slice'](quzgo + 0x1)) : (e3x84 = null, kbr76['localName'] = ztd2_o);var $x438e = kbr76['uri'] = f5ex3$[e3x84 || ''];if (qygla['startElement']($x438e, c6w, ztd2_o, kbr76), !kbr76['closed']) return kbr76['currentNSMap'] = f5ex3$, kbr76['localNSMap'] = _o2tzd, !0x0;if (qygla['endElement']($x438e, c6w, ztd2_o), _o2tzd) {
    for (var e3x84 in _o2tzd) qygla['endPrefixMapping'](e3x84);
  }
}function K1_t2_o($n, w70c, b1sr8, lpiajq, aqgylp) {
  if (/^(?:script|textarea)$/i['test'](b1sr8)) {
    var cjkw0 = $n['indexOf']('</' + b1sr8 + '>', w70c),
        $n = $n['substring'](w70c + 0x1, cjkw0);if (/[&<]/['test']($n)) return (/^script$/i['test'](b1sr8) || ($n = $n['replace'](/&#?\w+;/g, lpiajq)), aqgylp['characters']($n, 0x0, $n['length']), cjkw0
    );
  }return w70c + 0x1;
}function K1_qulp(k0jw6c, c067wk, yuozgq, olugqy) {
  var qyaglp = olugqy[yuozgq];return null == qyaglp && ((qyaglp = k0jw6c['lastIndexOf']('</' + yuozgq + '>')) < c067wk && (qyaglp = k0jw6c['lastIndexOf']('</' + yuozgq)), olugqy[yuozgq] = qyaglp), qyaglp < c067wk;
}function K1_yzotu(aplqgi, $xhe8) {
  for (var uyolq in aplqgi) $xhe8[uyolq] = aplqgi[uyolq];
}function K1_ozyg(d2uzt, z2oudt, wb76r, hx48s1) {
  var bkrw = d2uzt['charAt'](z2oudt + 0x2);if ('-' === bkrw) return '-' !== d2uzt['charAt'](z2oudt + 0x3) ? -0x1 : z2oudt < (lgpiq = d2uzt['indexOf']('-->', z2oudt + 0x4)) ? (wb76r['comment'](d2uzt, z2oudt + 0x4, lgpiq - z2oudt - 0x4), lgpiq + 0x3) : (hx48s1['error']('Unclosed comment'), -0x1);if ('CDATA[' == d2uzt['substr'](z2oudt + 0x3, 0x6)) {
    var lgpiq = d2uzt['indexOf'](']]>', z2oudt + 0x9);return wb76r['startCDATA'](), wb76r['characters'](d2uzt, z2oudt + 0x9, lgpiq - z2oudt - 0x9), wb76r['endCDATA'](), lgpiq + 0x3;
  }bkrw = K1_cw60jk(d2uzt, z2oudt), hx48s1 = bkrw['length'];if (0x1 < hx48s1 && /!doctype/i['test'](bkrw[0x0][0x0])) return lgpiq = bkrw[0x1][0x0], d2uzt = 0x3 < hx48s1 && /^public$/i['test'](bkrw[0x2][0x0]) && bkrw[0x3][0x0], z2oudt = 0x4 < hx48s1 && bkrw[0x4][0x0], hx48s1 = bkrw[hx48s1 - 0x1], (wb76r['startDTD'](lgpiq, d2uzt && d2uzt['replace'](/^(['"])(.*?)\1$/, '$2'), z2oudt && z2oudt['replace'](/^(['"])(.*?)\1$/, '$2')), wb76r['endDTD'](), hx48s1['index'] + hx48s1[0x0]['length']);return -0x1;
}function K1_n59vfm(hr8b, w6i0, i0paj) {
  var srh7b1 = hr8b['indexOf']('?>', w6i0);if (srh7b1) return w6i0 = hr8b['substring'](w6i0, srh7b1)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), w6i0 ? (w6i0[0x0]['length'], i0paj['processingInstruction'](w6i0[0x1], w6i0[0x2]), srh7b1 + 0x2) : -0x1;return -0x1;
}function K1_n539() {}function K1_vf9m5n(sr17bk, $5f9) {
  return sr17bk['__proto__'] = $5f9, sr17bk;
}function K1_cw60jk(s8x4h1, qpu) {
  var $38,
      gpiaq = [],
      pglyaq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pglyaq['lastIndex'] = qpu, pglyaq['exec'](s8x4h1); $38 = pglyaq['exec'](s8x4h1);) if (gpiaq['push']($38), $38[0x1]) return gpiaq;
}var K1_agqypl = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_gyuozt = new RegExp('[\\-\\.0-9' + K1_agqypl['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1_o2tdu = new RegExp('^' + K1_agqypl['source'] + K1_gyuozt['source'] + '*(?::' + K1_agqypl['source'] + K1_gyuozt['source'] + '*)?$'),
    K1_cailjp = 0x0,
    K1_kwr7b = 0x1,
    K1_jiac0p = 0x2,
    K1_hr7s1b = 0x3,
    K1_aji06c = 0x4,
    K1_sw7krb = 0x5,
    K1_h7srb1 = 0x6,
    K1_ex$48 = 0x7;K1_tdzu2o['prototype'] = { 'parse': function (jlipaq, gztuy, wr7k0) {
    var jpa0c = this['domBuilder'];jpa0c['startDocument'](), K1_yzotu(gztuy, gztuy = {}), K1_hr7s1(jlipaq, gztuy, wr7k0, jpa0c, this['errorHandler']), jpa0c['endDocument']();
  } }, K1_n539['prototype'] = { 'setTagName': function (_dzto) {
    if (!K1_o2tdu['test'](_dzto)) throw new Error('invalid tagName:' + _dzto);this['tagName'] = _dzto;
  }, 'add': function (xe384, w7c60k, nf5$39) {
    if (!K1_o2tdu['test'](xe384)) throw new Error('invalid attribute:' + xe384);this[this['length']++] = { 'qName': xe384, 'value': w7c60k, 'offset': nf5$39 };
  }, 'length': 0x0, 'getLocalName': function (k0wj6c) {
    return this[k0wj6c]['localName'];
  }, 'getLocator': function (_2tzod) {
    return this[_2tzod]['locator'];
  }, 'getQName': function (x4s18) {
    return this[x4s18]['qName'];
  }, 'getURI': function (h8bs1) {
    return this[h8bs1]['uri'];
  }, 'getValue': function (b1r8) {
    return this[b1r8]['value'];
  } }, K1_vf9m5n({}, K1_vf9m5n['prototype']) instanceof K1_vf9m5n || (K1_vf9m5n = function (uzgoyt, wbsk7r) {
  function s8x41h() {}for (wbsk7r in s8x41h['prototype'] = wbsk7r, s8x41h = new s8x41h(), uzgoyt) s8x41h[wbsk7r] = uzgoyt[wbsk7r];return s8x41h;
}), exports['XMLReader'] = K1_tdzu2o;