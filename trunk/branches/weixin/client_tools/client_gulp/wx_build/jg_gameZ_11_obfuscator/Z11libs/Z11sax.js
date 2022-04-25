var B = wx.$z;
function zmhnz() {}function zgjrsu(x368d1, grjou, ja_er, buos, ojges) {
  function jurois(nhae_) {
    if (nhae_ > 0xffff) {
      nhae_ -= 0x10000;var m0a = 0xd800 + (nhae_ >> 0xa),
          wdmz9 = 0xdc00 + (0x3ff & nhae_);return String['fromCharCode'](m0a, wdmz9);
    }return String['fromCharCode'](nhae_);
  }function w90mzf(e_n) {
    var gsour = e_n['slice'](0x1, -0x1);return gsour in ja_er ? ja_er[gsour] : '#' === gsour['charAt'](0x0) ? jurois(parseInt(gsour['substr'](0x1)['replace']('x', '0x'))) : (ojges['error']('entity not found:' + e_n), e_n);
  }function uiy75b(aeq_hn) {
    if (aeq_hn > egn_q) {
      var yt52l = x368d1['substring'](egn_q, aeq_hn)['replace'](/&#?\w+;/g, w90mzf);wzf0m && eh_qa(egn_q), buos['characters'](yt52l, 0x0, aeq_hn - egn_q), egn_q = aeq_hn;
    }
  }function eh_qa(d3wfz, wm9df) {
    for (; d3wfz >= gsroju && (wm9df = neh_['exec'](x368d1));) a_jqeg = wm9df['index'], gsroju = a_jqeg + wm9df[0x0]['length'], wzf0m['lineNumber']++;wzf0m['columnNumber'] = d3wfz - a_jqeg + 0x1;
  }for (var a_jqeg = 0x0, gsroju = 0x0, neh_ = /.*(?:\r\n?|\n)|.*$/g, wzf0m = buos['locator'], ej_o = [{ 'currentNSMap': grjou }], mfd9 = {}, egn_q = 0x0;;) {
    try {
      var f16d = x368d1['indexOf']('<', egn_q);if (0x0 > f16d) {
        if (!x368d1['substr'](egn_q)['match'](/^\s*$/)) {
          var ang_q = buos['doc'],
              qag_j = ang_q['createTextNode'](x368d1['substr'](egn_q));ang_q['appendChild'](qag_j), buos['currentElement'] = qag_j;
        }return;
      }switch (f16d > egn_q && uiy75b(f16d), x368d1['charAt'](f16d + 0x1)) {case '/':
          var t5by = x368d1['indexOf']('>', f16d + 0x3),
              bt52$ = x368d1['substring'](f16d + 0x2, t5by),
              nahe_q = ej_o['pop']();0x0 > t5by ? (bt52$ = x368d1['substring'](f16d + 0x2)['replace'](/[\s<].*/, ''), ojges['error']('end tag name: ' + bt52$ + ' is not complete:' + nahe_q['tagName']), t5by = f16d + 0x1 + bt52$['length']) : bt52$['match'](/\s</) && (bt52$ = bt52$['replace'](/[\s<].*/, ''), ojges['error']('end tag name: ' + bt52$ + ' maybe not complete'), t5by = f16d + 0x1 + bt52$['length']);var gen = nahe_q['localNSMap'],
              o7ris = nahe_q['tagName'] == bt52$,
              g_eja = o7ris || nahe_q['tagName'] && nahe_q['tagName']['toLowerCase']() == bt52$['toLowerCase']();if (g_eja) {
            if (buos['endElement'](nahe_q['uri'], nahe_q['localName'], bt52$), gen) {
              for (var soruij in gen) buos['endPrefixMapping'](soruij);
            }o7ris || ojges['fatalError']('end tag name: ' + bt52$ + ' is not match the current start tagName:' + nahe_q['tagName']);
          } else ej_o['push'](nahe_q);t5by++;break;case '?':
          wzf0m && eh_qa(f16d), t5by = zbsui7o(x368d1, f16d, buos);break;case '!':
          wzf0m && eh_qa(f16d), t5by = zqan0(x368d1, f16d, buos, ojges);break;default:
          wzf0m && eh_qa(f16d);var u7b5yi = new zzf9wm0(),
              wzd9f3 = ej_o[ej_o['length'] - 0x1]['currentNSMap'],
              t5by = znhamq0(x368d1, f16d, u7b5yi, wzd9f3, w90mzf, ojges),
              o7riu = u7b5yi['length'];if (!u7b5yi['closed'] && znqh0w(x368d1, t5by, u7b5yi['tagName'], mfd9) && (u7b5yi['closed'] = !0x0, ja_er['nbsp'] || ojges['warning']('unclosed xml attribute')), wzf0m && o7riu) {
            for (var r7iuo = zjrg_(wzf0m, {}), usgrj = 0x0; o7riu > usgrj; usgrj++) {
              var i7y2b = u7b5yi[usgrj];eh_qa(i7y2b['offset']), i7y2b['locator'] = zjrg_(wzf0m, {});
            }buos['locator'] = r7iuo, znq0am(u7b5yi, buos, wzd9f3) && ej_o['push'](u7b5yi), buos['locator'] = wzf0m;
          } else znq0am(u7b5yi, buos, wzd9f3) && ej_o['push'](u7b5yi);'http://www.w3.org/1999/xhtml' !== u7b5yi['uri'] || u7b5yi['closed'] ? t5by++ : t5by = zb7ty2(x368d1, t5by, u7b5yi['tagName'], w90mzf, buos);}
    } catch (wdfz3) {
      ojges['error']('element parse error: ' + wdfz3), t5by = -0x1;
    }t5by > egn_q ? egn_q = t5by : uiy75b(Math['max'](f16d, egn_q) + 0x1);
  }
}function zjrg_(wqmnh, wq0nh) {
  return wq0nh['lineNumber'] = wqmnh['lineNumber'], wq0nh['columnNumber'] = wqmnh['columnNumber'], wq0nh;
}function znhamq0(zf0hm, p8x613, hnqea_, eo_gj, $by2, mhf) {
  for (var ubs7i, f6d39, zwfm0h = ++p8x613, jrae = znwqh;;) {
    var qhn0a = zf0hm['charAt'](zwfm0h);switch (qhn0a) {case '=':
        if (jrae === z_engq) ubs7i = zf0hm['slice'](p8x613, zwfm0h), jrae = zsubi;else {
          if (jrae !== zsjrogu) throw new Error('attribute equal must after attrName');jrae = zsubi;
        }break;case '\x27':case '\x22':
        if (jrae === zsubi || jrae === z_engq) {
          if (jrae === z_engq && (mhf['warning']('attribute value must after "="'), ubs7i = zf0hm['slice'](p8x613, zwfm0h)), p8x613 = zwfm0h + 0x1, zwfm0h = zf0hm['indexOf'](qhn0a, p8x613), !(zwfm0h > 0x0)) throw new Error('attribute value no end \'' + qhn0a + '\' match');f6d39 = zf0hm['slice'](p8x613, zwfm0h)['replace'](/&#?\w+;/g, $by2), hnqea_['add'](ubs7i, f6d39, p8x613 - 0x1), jrae = zn_;
        } else {
          if (jrae != zio7ur) throw new Error('attribute value must after "="');f6d39 = zf0hm['slice'](p8x613, zwfm0h)['replace'](/&#?\w+;/g, $by2), hnqea_['add'](ubs7i, f6d39, p8x613), mhf['warning']('attribute "' + ubs7i + '" missed start quot(' + qhn0a + ')!!'), p8x613 = zwfm0h + 0x1, jrae = zn_;
        }break;case '/':
        switch (jrae) {case znwqh:
            hnqea_['setTagName'](zf0hm['slice'](p8x613, zwfm0h));case zn_:case zx8k4:case zoejsgr:
            jrae = zoejsgr, hnqea_['closed'] = !0x0;case zio7ur:case z_engq:case zsjrogu:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mhf['error']('unexpected end of input'), jrae == znwqh && hnqea_['setTagName'](zf0hm['slice'](p8x613, zwfm0h)), zwfm0h;case '>':
        switch (jrae) {case znwqh:
            hnqea_['setTagName'](zf0hm['slice'](p8x613, zwfm0h));case zn_:case zx8k4:case zoejsgr:
            break;case zio7ur:case z_engq:
            f6d39 = zf0hm['slice'](p8x613, zwfm0h), '/' === f6d39['slice'](-0x1) && (hnqea_['closed'] = !0x0, f6d39 = f6d39['slice'](0x0, -0x1));case zsjrogu:
            jrae === zsjrogu && (f6d39 = ubs7i), jrae == zio7ur ? (mhf['warning']('attribute "' + f6d39 + '" missed quot(")!!'), hnqea_['add'](ubs7i, f6d39['replace'](/&#?\w+;/g, $by2), p8x613)) : ('http://www.w3.org/1999/xhtml' === eo_gj[''] && f6d39['match'](/^(?:disabled|checked|selected)$/i) || mhf['warning']('attribute "' + f6d39 + '" missed value!! "' + f6d39 + '" instead!!'), hnqea_['add'](f6d39, f6d39, p8x613));break;case zsubi:
            throw new Error('attribute value missed!!');}return zwfm0h;case '\u0080':
        qhn0a = '\x20';default:
        if ('\x20' >= qhn0a) switch (jrae) {case znwqh:
            hnqea_['setTagName'](zf0hm['slice'](p8x613, zwfm0h)), jrae = zx8k4;break;case z_engq:
            ubs7i = zf0hm['slice'](p8x613, zwfm0h), jrae = zsjrogu;break;case zio7ur:
            var f6d39 = zf0hm['slice'](p8x613, zwfm0h)['replace'](/&#?\w+;/g, $by2);mhf['warning']('attribute "' + f6d39 + '" missed quot(")!!'), hnqea_['add'](ubs7i, f6d39, p8x613);case zn_:
            jrae = zx8k4;} else switch (jrae) {case zsjrogu:
            {
              hnqea_['tagName'];
            }'http://www.w3.org/1999/xhtml' === eo_gj[''] && ubs7i['match'](/^(?:disabled|checked|selected)$/i) || mhf['warning']('attribute "' + ubs7i + '" missed value!! "' + ubs7i + '" instead2!!'), hnqea_['add'](ubs7i, ubs7i, p8x613), p8x613 = zwfm0h, jrae = z_engq;break;case zn_:
            mhf['warning']('attribute space is required"' + ubs7i + '\x22!!');case zx8k4:
            jrae = z_engq, p8x613 = zwfm0h;break;case zsubi:
            jrae = zio7ur, p8x613 = zwfm0h;break;case zoejsgr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zwfm0h++;
  }
}function znq0am($tvyl2, i7osur, rs) {
  for (var y2bt57 = $tvyl2['tagName'], biu7so = null, z9wdfm = $tvyl2['length']; z9wdfm--;) {
    var f396dz = $tvyl2[z9wdfm],
        bu5i7s = f396dz['qName'],
        naqh0 = f396dz['value'],
        z3d9fw = bu5i7s['indexOf'](':');if (z3d9fw > 0x0) var iu57sb = f396dz['prefix'] = bu5i7s['slice'](0x0, z3d9fw),
        vlty$2 = bu5i7s['slice'](z3d9fw + 0x1),
        m0wh = 'xmlns' === iu57sb && vlty$2;else vlty$2 = bu5i7s, iu57sb = null, m0wh = 'xmlns' === bu5i7s && '';f396dz['localName'] = vlty$2, m0wh !== !0x1 && (null == biu7so && (biu7so = {}, zb$5y(rs, rs = {})), rs[m0wh] = biu7so[m0wh] = naqh0, f396dz['uri'] = 'http://www.w3.org/2000/xmlns/', i7osur['startPrefixMapping'](m0wh, naqh0));
  }for (var z9wdfm = $tvyl2['length']; z9wdfm--;) {
    f396dz = $tvyl2[z9wdfm];var iu57sb = f396dz['prefix'];iu57sb && ('xml' === iu57sb && (f396dz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== iu57sb && (f396dz['uri'] = rs[iu57sb || '']));
  }var z3d9fw = y2bt57['indexOf'](':');z3d9fw > 0x0 ? (iu57sb = $tvyl2['prefix'] = y2bt57['slice'](0x0, z3d9fw), vlty$2 = $tvyl2['localName'] = y2bt57['slice'](z3d9fw + 0x1)) : (iu57sb = null, vlty$2 = $tvyl2['localName'] = y2bt57);var $lvy2 = $tvyl2['uri'] = rs[iu57sb || ''];if (i7osur['startElement']($lvy2, vlty$2, y2bt57, $tvyl2), !$tvyl2['closed']) return $tvyl2['currentNSMap'] = rs, $tvyl2['localNSMap'] = biu7so, !0x0;if (i7osur['endElement']($lvy2, vlty$2, y2bt57), biu7so) {
    for (iu57sb in biu7so) i7osur['endPrefixMapping'](iu57sb);
  }
}function zb7ty2(hqane_, dz693, qne_ga, g_jreo, t7y2) {
  if (/^(?:script|textarea)$/i['test'](qne_ga)) {
    var s7ui5 = hqane_['indexOf']('</' + qne_ga + '>', dz693),
        fw9z3 = hqane_['substring'](dz693 + 0x1, s7ui5);if (/[&<]/['test'](fw9z3)) return (/^script$/i['test'](qne_ga) ? (t7y2['characters'](fw9z3, 0x0, fw9z3['length']), s7ui5) : (fw9z3 = fw9z3['replace'](/&#?\w+;/g, g_jreo), t7y2['characters'](fw9z3, 0x0, fw9z3['length']), s7ui5)
    );
  }return dz693 + 0x1;
}function znqh0w(w3fdz, d36zf9, soru7, y$lt25) {
  var d39zwf = y$lt25[soru7];return null == d39zwf && (d39zwf = w3fdz['lastIndexOf']('</' + soru7 + '>'), d36zf9 > d39zwf && (d39zwf = w3fdz['lastIndexOf']('</' + soru7)), y$lt25[soru7] = d39zwf), d36zf9 > d39zwf;
}function zb$5y($t2ly, o7usi) {
  for (var rsuoij in $t2ly) o7usi[rsuoij] = $t2ly[rsuoij];
}function zqan0(b5uy7i, uir, fdz39, t$b52) {
  var d6318x = b5uy7i['charAt'](uir + 0x2);switch (d6318x) {case '-':
      if ('-' === b5uy7i['charAt'](uir + 0x3)) {
        var bty$52 = b5uy7i['indexOf']('-->', uir + 0x4);return bty$52 > uir ? (fdz39['comment'](b5uy7i, uir + 0x4, bty$52 - uir - 0x4), bty$52 + 0x3) : (t$b52['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == b5uy7i['substr'](uir + 0x3, 0x6)) {
        var bty$52 = b5uy7i['indexOf'](']]>', uir + 0x9);return fdz39['startCDATA'](), fdz39['characters'](b5uy7i, uir + 0x9, bty$52 - uir - 0x9), fdz39['endCDATA'](), bty$52 + 0x3;
      }var mdzwf9 = zqajge(b5uy7i, uir),
          zmhf0w = mdzwf9['length'];if (zmhf0w > 0x1 && /!doctype/i['test'](mdzwf9[0x0][0x0])) {
        var fz3w = mdzwf9[0x1][0x0],
            aen_ = zmhf0w > 0x3 && /^public$/i['test'](mdzwf9[0x2][0x0]) && mdzwf9[0x3][0x0],
            _0aqn = zmhf0w > 0x4 && mdzwf9[0x4][0x0],
            rougs = mdzwf9[zmhf0w - 0x1];return fdz39['startDTD'](fz3w, aen_ && aen_['replace'](/^(['"])(.*?)\1$/, '$2'), _0aqn && _0aqn['replace'](/^(['"])(.*?)\1$/, '$2')), fdz39['endDTD'](), rougs['index'] + rougs[0x0]['length'];
      }}return -0x1;
}function zbsui7o(p18x63, hz0mnw, anhq_0) {
  var y$5b = p18x63['indexOf']('?>', hz0mnw);if (y$5b) {
    var $2lvty = p18x63['substring'](hz0mnw, y$5b)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($2lvty) {
      {
        $2lvty[0x0]['length'];
      }return anhq_0['processingInstruction']($2lvty[0x1], $2lvty[0x2]), y$5b + 0x2;
    }return -0x1;
  }return -0x1;
}function zzf9wm0() {}function zois7ru(ubs5i, y27b5i) {
  return ubs5i['__proto__'] = y27b5i, ubs5i;
}function zqajge(irs7uo, hmqnw0) {
  var d968,
      rjegos = [],
      dmwzf9 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dmwzf9['lastIndex'] = hmqnw0, dmwzf9['exec'](irs7uo); d968 = dmwzf9['exec'](irs7uo);) if (rjegos['push'](d968), d968[0x1]) return rjegos;
}var zan_ehq = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zrousjg = new RegExp('[\\-\\.0-9' + zan_ehq['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zganeq_ = new RegExp('^' + zan_ehq['source'] + zrousjg['source'] + '*(?::' + zan_ehq['source'] + zrousjg['source'] + '*)?$'),
    znwqh = 0x0,
    z_engq = 0x1,
    zsjrogu = 0x2,
    zsubi = 0x3,
    zio7ur = 0x4,
    zn_ = 0x5,
    zx8k4 = 0x6,
    zoejsgr = 0x7;zmhnz['prototype'] = { 'parse': function (p146x8, p863x, rousgj) {
    var zm90wf = this['domBuilder'];zm90wf['startDocument'](), zb$5y(p863x, p863x = {}), zgjrsu(p146x8, p863x, rousgj, zm90wf, this['errorHandler']), zm90wf['endDocument']();
  } }, zzf9wm0['prototype'] = { 'setTagName': function (q0_) {
    if (!zganeq_['test'](q0_)) throw new Error('invalid tagName:' + q0_);this['tagName'] = q0_;
  }, 'add': function (wz0nh, z0whn, x6183) {
    if (!zganeq_['test'](wz0nh)) throw new Error('invalid attribute:' + wz0nh);this[this['length']++] = { 'qName': wz0nh, 'value': z0whn, 'offset': x6183 };
  }, 'length': 0x0, 'getLocalName': function (mqh0a) {
    return this[mqh0a]['localName'];
  }, 'getLocator': function (us7roi) {
    return this[us7roi]['locator'];
  }, 'getQName': function (i5uy7b) {
    return this[i5uy7b]['qName'];
  }, 'getURI': function (a_qhe) {
    return this[a_qhe]['uri'];
  }, 'getValue': function (_eqna) {
    return this[_eqna]['value'];
  } }, zois7ru({}, zois7ru['prototype']) instanceof zois7ru || (zois7ru = function (n_a0, is7ruo) {
  function d93618() {}d93618['prototype'] = is7ruo, d93618 = new d93618();for (is7ruo in n_a0) d93618[is7ruo] = n_a0[is7ruo];return d93618;
}), exports['XMLReader'] = zmhnz;