var B = wx.$z;
function zxp1sh() {}function zq$i3mj(rk_b8, im37$, v7mni, n7l6f, b_58r) {
  function ghp149(g1xph) {
    if (g1xph > 0xffff) {
      g1xph -= 0x10000;var _5w02u = 0xd800 + (g1xph >> 0xa),
          p1hx9g = 0xdc00 + (0x3ff & g1xph);return String['fromCharCode'](_5w02u, p1hx9g);
    }return String['fromCharCode'](g1xph);
  }function r8kbyd(tzxe) {
    var zyedt = tzxe['slice'](0x1, -0x1);return zyedt in v7mni ? v7mni[zyedt] : '#' === zyedt['charAt'](0x0) ? ghp149(parseInt(zyedt['substr'](0x1)['replace']('x', '0x'))) : (b_58r['error']('entity not found:' + tzxe), tzxe);
  }function h14gp9(ozesa) {
    if (ozesa > kytzd) {
      var fgv4p6 = rk_b8['substring'](kytzd, ozesa)['replace'](/&#?\w+;/g, r8kbyd);gph91x && dry8kb(kytzd), n7l6f['characters'](fgv4p6, 0x0, ozesa - kytzd), kytzd = ozesa;
    }
  }function dry8kb(zosaet, nf6v4) {
    for (; zosaet >= exa9s && (nf6v4 = vp6gf4['exec'](rk_b8));) kob8dy = nf6v4['index'], exa9s = kob8dy + nf6v4[0x0]['length'], gph91x['lineNumber']++;gph91x['columnNumber'] = zosaet - kob8dy + 0x1;
  }for (var kob8dy = 0x0, exa9s = 0x0, vp6gf4 = /.*(?:\r\n?|\n)|.*$/g, gph91x = n7l6f['locator'], p614g = [{ 'currentNSMap': im37$ }], vf4ln6 = {}, kytzd = 0x0;;) {
    try {
      var tykd = rk_b8['indexOf']('<', kytzd);if (0x0 > tykd) {
        if (!rk_b8['substr'](kytzd)['match'](/^\s*$/)) {
          var ae9xs = n7l6f['doc'],
              tyobkd = ae9xs['createTextNode'](rk_b8['substr'](kytzd));ae9xs['appendChild'](tyobkd), n7l6f['currentElement'] = tyobkd;
        }return;
      }switch (tykd > kytzd && h14gp9(tykd), rk_b8['charAt'](tykd + 0x1)) {case '/':
          var m7q = rk_b8['indexOf']('>', tykd + 0x3),
              tybdk = rk_b8['substring'](tykd + 0x2, m7q),
              dtze = p614g['pop']();0x0 > m7q ? (tybdk = rk_b8['substring'](tykd + 0x2)['replace'](/[\s<].*/, ''), b_58r['error']('end tag name: ' + tybdk + ' is not complete:' + dtze['tagName']), m7q = tykd + 0x1 + tybdk['length']) : tybdk['match'](/\s</) && (tybdk = tybdk['replace'](/[\s<].*/, ''), b_58r['error']('end tag name: ' + tybdk + ' maybe not complete'), m7q = tykd + 0x1 + tybdk['length']);var aed = dtze['localNSMap'],
              hpx19g = dtze['tagName'] == tybdk,
              g4ph6f = hpx19g || dtze['tagName'] && dtze['tagName']['toLowerCase']() == tybdk['toLowerCase']();if (g4ph6f) {
            if (n7l6f['endElement'](dtze['uri'], dtze['localName'], tybdk), aed) {
              for (var _2b5 in aed) n7l6f['endPrefixMapping'](_2b5);
            }hpx19g || b_58r['fatalError']('end tag name: ' + tybdk + ' is not match the current start tagName:' + dtze['tagName']);
          } else p614g['push'](dtze);m7q++;break;case '?':
          gph91x && dry8kb(tykd), m7q = zniv7m(rk_b8, tykd, n7l6f);break;case '!':
          gph91x && dry8kb(tykd), m7q = zbdokt(rk_b8, tykd, n7l6f, b_58r);break;default:
          gph91x && dry8kb(tykd);var uw502_ = new zvnf6l4(),
              ydbotk = p614g[p614g['length'] - 0x1]['currentNSMap'],
              m7q = zh491gp(rk_b8, tykd, uw502_, ydbotk, r8kbyd, b_58r),
              uw2_ = uw502_['length'];if (!uw502_['closed'] && zpshx91(rk_b8, m7q, uw502_['tagName'], vf4ln6) && (uw502_['closed'] = !0x0, v7mni['nbsp'] || b_58r['warning']('unclosed xml attribute')), gph91x && uw2_) {
            for (var u_28 = zadtzoe(gph91x, {}), pfvg46 = 0x0; uw2_ > pfvg46; pfvg46++) {
              var zteaxs = uw502_[pfvg46];dry8kb(zteaxs['offset']), zteaxs['locator'] = zadtzoe(gph91x, {});
            }n7l6f['locator'] = u_28, zx1g9p(uw502_, n7l6f, ydbotk) && p614g['push'](uw502_), n7l6f['locator'] = gph91x;
          } else zx1g9p(uw502_, n7l6f, ydbotk) && p614g['push'](uw502_);'http://www.w3.org/1999/xhtml' !== uw502_['uri'] || uw502_['closed'] ? m7q++ : m7q = zztxaes(rk_b8, m7q, uw502_['tagName'], r8kbyd, n7l6f);}
    } catch (p1gh6) {
      b_58r['error']('element parse error: ' + p1gh6), m7q = -0x1;
    }m7q > kytzd ? kytzd = m7q : h14gp9(Math['max'](tykd, kytzd) + 0x1);
  }
}function zadtzoe(gpx1h9, rw_2) {
  return rw_2['lineNumber'] = gpx1h9['lineNumber'], rw_2['columnNumber'] = gpx1h9['columnNumber'], rw_2;
}function zh491gp(ydkb8, g9hp14, dtko, hx9as, hgp9, bdkyt) {
  for (var dtzyeo, e9xsz, tyozde = ++g9hp14, koyb8 = zzoaset;;) {
    var ytbdk = ydkb8['charAt'](tyozde);switch (ytbdk) {case '=':
        if (koyb8 === zmiqn73) dtzyeo = ydkb8['slice'](g9hp14, tyozde), koyb8 = zl73inm;else {
          if (koyb8 !== zf7v6) throw new Error('attribute equal must after attrName');koyb8 = zl73inm;
        }break;case '\x27':case '\x22':
        if (koyb8 === zl73inm || koyb8 === zmiqn73) {
          if (koyb8 === zmiqn73 && (bdkyt['warning']('attribute value must after "="'), dtzyeo = ydkb8['slice'](g9hp14, tyozde)), g9hp14 = tyozde + 0x1, tyozde = ydkb8['indexOf'](ytbdk, g9hp14), !(tyozde > 0x0)) throw new Error('attribute value no end \'' + ytbdk + '\' match');e9xsz = ydkb8['slice'](g9hp14, tyozde)['replace'](/&#?\w+;/g, hgp9), dtko['add'](dtzyeo, e9xsz, g9hp14 - 0x1), koyb8 = zteyodz;
        } else {
          if (koyb8 != zkoybt) throw new Error('attribute value must after "="');e9xsz = ydkb8['slice'](g9hp14, tyozde)['replace'](/&#?\w+;/g, hgp9), dtko['add'](dtzyeo, e9xsz, g9hp14), bdkyt['warning']('attribute "' + dtzyeo + '" missed start quot(' + ytbdk + ')!!'), g9hp14 = tyozde + 0x1, koyb8 = zteyodz;
        }break;case '/':
        switch (koyb8) {case zzoaset:
            dtko['setTagName'](ydkb8['slice'](g9hp14, tyozde));case zteyodz:case zhpg164:case zaedto:
            koyb8 = zaedto, dtko['closed'] = !0x0;case zkoybt:case zmiqn73:case zf7v6:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return bdkyt['error']('unexpected end of input'), koyb8 == zzoaset && dtko['setTagName'](ydkb8['slice'](g9hp14, tyozde)), tyozde;case '>':
        switch (koyb8) {case zzoaset:
            dtko['setTagName'](ydkb8['slice'](g9hp14, tyozde));case zteyodz:case zhpg164:case zaedto:
            break;case zkoybt:case zmiqn73:
            e9xsz = ydkb8['slice'](g9hp14, tyozde), '/' === e9xsz['slice'](-0x1) && (dtko['closed'] = !0x0, e9xsz = e9xsz['slice'](0x0, -0x1));case zf7v6:
            koyb8 === zf7v6 && (e9xsz = dtzyeo), koyb8 == zkoybt ? (bdkyt['warning']('attribute "' + e9xsz + '" missed quot(")!!'), dtko['add'](dtzyeo, e9xsz['replace'](/&#?\w+;/g, hgp9), g9hp14)) : ('http://www.w3.org/1999/xhtml' === hx9as[''] && e9xsz['match'](/^(?:disabled|checked|selected)$/i) || bdkyt['warning']('attribute "' + e9xsz + '" missed value!! "' + e9xsz + '" instead!!'), dtko['add'](e9xsz, e9xsz, g9hp14));break;case zl73inm:
            throw new Error('attribute value missed!!');}return tyozde;case '\u0080':
        ytbdk = '\x20';default:
        if ('\x20' >= ytbdk) switch (koyb8) {case zzoaset:
            dtko['setTagName'](ydkb8['slice'](g9hp14, tyozde)), koyb8 = zhpg164;break;case zmiqn73:
            dtzyeo = ydkb8['slice'](g9hp14, tyozde), koyb8 = zf7v6;break;case zkoybt:
            var e9xsz = ydkb8['slice'](g9hp14, tyozde)['replace'](/&#?\w+;/g, hgp9);bdkyt['warning']('attribute "' + e9xsz + '" missed quot(")!!'), dtko['add'](dtzyeo, e9xsz, g9hp14);case zteyodz:
            koyb8 = zhpg164;} else switch (koyb8) {case zf7v6:
            {
              dtko['tagName'];
            }'http://www.w3.org/1999/xhtml' === hx9as[''] && dtzyeo['match'](/^(?:disabled|checked|selected)$/i) || bdkyt['warning']('attribute "' + dtzyeo + '" missed value!! "' + dtzyeo + '" instead2!!'), dtko['add'](dtzyeo, dtzyeo, g9hp14), g9hp14 = tyozde, koyb8 = zmiqn73;break;case zteyodz:
            bdkyt['warning']('attribute space is required"' + dtzyeo + '\x22!!');case zhpg164:
            koyb8 = zmiqn73, g9hp14 = tyozde;break;case zl73inm:
            koyb8 = zkoybt, g9hp14 = tyozde;break;case zaedto:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}tyozde++;
  }
}function zx1g9p(gp941, w2_5u, as1e) {
  for (var zasx = gp941['tagName'], qim3$ = null, fhpg46 = gp941['length']; fhpg46--;) {
    var aeotzd = gp941[fhpg46],
        gfp4 = aeotzd['qName'],
        osaz = aeotzd['value'],
        o8bk = gfp4['indexOf'](':');if (o8bk > 0x0) var mq$ji3 = aeotzd['prefix'] = gfp4['slice'](0x0, o8bk),
        u25_8 = gfp4['slice'](o8bk + 0x1),
        miqj3 = 'xmlns' === mq$ji3 && u25_8;else u25_8 = gfp4, mq$ji3 = null, miqj3 = 'xmlns' === gfp4 && '';aeotzd['localName'] = u25_8, miqj3 !== !0x1 && (null == qim3$ && (qim3$ = {}, zghpx(as1e, as1e = {})), as1e[miqj3] = qim3$[miqj3] = osaz, aeotzd['uri'] = 'http://www.w3.org/2000/xmlns/', w2_5u['startPrefixMapping'](miqj3, osaz));
  }for (var fhpg46 = gp941['length']; fhpg46--;) {
    aeotzd = gp941[fhpg46];var mq$ji3 = aeotzd['prefix'];mq$ji3 && ('xml' === mq$ji3 && (aeotzd['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mq$ji3 && (aeotzd['uri'] = as1e[mq$ji3 || '']));
  }var o8bk = zasx['indexOf'](':');o8bk > 0x0 ? (mq$ji3 = gp941['prefix'] = zasx['slice'](0x0, o8bk), u25_8 = gp941['localName'] = zasx['slice'](o8bk + 0x1)) : (mq$ji3 = null, u25_8 = gp941['localName'] = zasx);var o8ybdk = gp941['uri'] = as1e[mq$ji3 || ''];if (w2_5u['startElement'](o8ybdk, u25_8, zasx, gp941), !gp941['closed']) return gp941['currentNSMap'] = as1e, gp941['localNSMap'] = qim3$, !0x0;if (w2_5u['endElement'](o8ybdk, u25_8, zasx), qim3$) {
    for (mq$ji3 in qim3$) w2_5u['endPrefixMapping'](mq$ji3);
  }
}function zztxaes(imnq73, tzdoky, _r2wu, saezxt, atsx) {
  if (/^(?:script|textarea)$/i['test'](_r2wu)) {
    var _20 = imnq73['indexOf']('</' + _r2wu + '>', tzdoky),
        pgf6v4 = imnq73['substring'](tzdoky + 0x1, _20);if (/[&<]/['test'](pgf6v4)) return (/^script$/i['test'](_r2wu) ? (atsx['characters'](pgf6v4, 0x0, pgf6v4['length']), _20) : (pgf6v4 = pgf6v4['replace'](/&#?\w+;/g, saezxt), atsx['characters'](pgf6v4, 0x0, pgf6v4['length']), _20)
    );
  }return tzdoky + 0x1;
}function zpshx91(pf4hg, iq$7m, tedza, nmil37) {
  var ztdo = nmil37[tedza];return null == ztdo && (ztdo = pf4hg['lastIndexOf']('</' + tedza + '>'), iq$7m > ztdo && (ztdo = pf4hg['lastIndexOf']('</' + tedza)), nmil37[tedza] = ztdo), iq$7m > ztdo;
}function zghpx(yd8okb, qi7$3) {
  for (var ktdz in yd8okb) qi7$3[ktdz] = yd8okb[ktdz];
}function zbdokt(_5wu02, etax, dbkty, txsae) {
  var lgfv = _5wu02['charAt'](etax + 0x2);switch (lgfv) {case '-':
      if ('-' === _5wu02['charAt'](etax + 0x3)) {
        var ilnfv = _5wu02['indexOf']('-->', etax + 0x4);return ilnfv > etax ? (dbkty['comment'](_5wu02, etax + 0x4, ilnfv - etax - 0x4), ilnfv + 0x3) : (txsae['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _5wu02['substr'](etax + 0x3, 0x6)) {
        var ilnfv = _5wu02['indexOf'](']]>', etax + 0x9);return dbkty['startCDATA'](), dbkty['characters'](_5wu02, etax + 0x9, ilnfv - etax - 0x9), dbkty['endCDATA'](), ilnfv + 0x3;
      }var kobyd = z_r8b2(_5wu02, etax),
          ur85_2 = kobyd['length'];if (ur85_2 > 0x1 && /!doctype/i['test'](kobyd[0x0][0x0])) {
        var s1ax9 = kobyd[0x1][0x0],
            ky8brd = ur85_2 > 0x3 && /^public$/i['test'](kobyd[0x2][0x0]) && kobyd[0x3][0x0],
            sz9xea = ur85_2 > 0x4 && kobyd[0x4][0x0],
            eoztdy = kobyd[ur85_2 - 0x1];return dbkty['startDTD'](s1ax9, ky8brd && ky8brd['replace'](/^(['"])(.*?)\1$/, '$2'), sz9xea && sz9xea['replace'](/^(['"])(.*?)\1$/, '$2')), dbkty['endDTD'](), eoztdy['index'] + eoztdy[0x0]['length'];
      }}return -0x1;
}function zniv7m(rkdb, gfph6, kyzo) {
  var $3miq = rkdb['indexOf']('?>', gfph6);if ($3miq) {
    var b85kr = rkdb['substring'](gfph6, $3miq)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (b85kr) {
      {
        b85kr[0x0]['length'];
      }return kyzo['processingInstruction'](b85kr[0x1], b85kr[0x2]), $3miq + 0x2;
    }return -0x1;
  }return -0x1;
}function zvnf6l4() {}function zsazot(bdtoky, sa9x) {
  return bdtoky['__proto__'] = sa9x, bdtoky;
}function z_r8b2(k_r58b, e9axsz) {
  var r2uw5_,
      fn76l = [],
      nv7li = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (nv7li['lastIndex'] = e9axsz, nv7li['exec'](k_r58b); r2uw5_ = nv7li['exec'](k_r58b);) if (fn76l['push'](r2uw5_), r2uw5_[0x1]) return fn76l;
}var zwr25_u = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zb_528 = new RegExp('[\\-\\.0-9' + zwr25_u['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ztyezd = new RegExp('^' + zwr25_u['source'] + zb_528['source'] + '*(?::' + zwr25_u['source'] + zb_528['source'] + '*)?$'),
    zzoaset = 0x0,
    zmiqn73 = 0x1,
    zf7v6 = 0x2,
    zl73inm = 0x3,
    zkoybt = 0x4,
    zteyodz = 0x5,
    zhpg164 = 0x6,
    zaedto = 0x7;zxp1sh['prototype'] = { 'parse': function (fnl67v, fv7nl6, r5_28u) {
    var fvl4g = this['domBuilder'];fvl4g['startDocument'](), zghpx(fv7nl6, fv7nl6 = {}), zq$i3mj(fnl67v, fv7nl6, r5_28u, fvl4g, this['errorHandler']), fvl4g['endDocument']();
  } }, zvnf6l4['prototype'] = { 'setTagName': function (od8ky) {
    if (!ztyezd['test'](od8ky)) throw new Error('invalid tagName:' + od8ky);this['tagName'] = od8ky;
  }, 'add': function (u50_w2, vnlfi7, xpsh1) {
    if (!ztyezd['test'](u50_w2)) throw new Error('invalid attribute:' + u50_w2);this[this['length']++] = { 'qName': u50_w2, 'value': vnlfi7, 'offset': xpsh1 };
  }, 'length': 0x0, 'getLocalName': function (rb2_) {
    return this[rb2_]['localName'];
  }, 'getLocator': function (l4fnv6) {
    return this[l4fnv6]['locator'];
  }, 'getQName': function (iln3m) {
    return this[iln3m]['qName'];
  }, 'getURI': function (ytzde) {
    return this[ytzde]['uri'];
  }, 'getValue': function (lvm7n) {
    return this[lvm7n]['value'];
  } }, zsazot({}, zsazot['prototype']) instanceof zsazot || (zsazot = function (wu_0, yktd) {
  function f4p6gh() {}f4p6gh['prototype'] = yktd, f4p6gh = new f4p6gh();for (yktd in wu_0) f4p6gh[yktd] = wu_0[yktd];return f4p6gh;
}), exports['XMLReader'] = zxp1sh;