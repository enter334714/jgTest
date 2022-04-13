var B = wx.$z;
function zg64pf() {}function z$qm3ij(toeaz, p1x9gh, dbry, pfv46g, otkdy) {
  function do8bky(nl7fv) {
    if (nl7fv > 0xffff) {
      nl7fv -= 0x10000;var ozktd = 0xd800 + (nl7fv >> 0xa),
          fl6v7n = 0xdc00 + (0x3ff & nl7fv);return String['fromCharCode'](ozktd, fl6v7n);
    }return String['fromCharCode'](nl7fv);
  }function mn73q(u0w5_) {
    var min7v = u0w5_['slice'](0x1, -0x1);return min7v in dbry ? dbry[min7v] : '#' === min7v['charAt'](0x0) ? do8bky(parseInt(min7v['substr'](0x1)['replace']('x', '0x'))) : (otkdy['error']('entity not found:' + u0w5_), u0w5_);
  }function oytk(q7nmi3) {
    if (q7nmi3 > l3n7) {
      var ij3$mq = toeaz['substring'](l3n7, q7nmi3)['replace'](/&#?\w+;/g, mn73q);otyze && wru2_5(l3n7), pfv46g['characters'](ij3$mq, 0x0, q7nmi3 - l3n7), l3n7 = q7nmi3;
    }
  }function wru2_5(yrdb, linm7v) {
    for (; yrdb >= setzoa && (linm7v = br5_['exec'](toeaz));) pgh14 = linm7v['index'], setzoa = pgh14 + linm7v[0x0]['length'], otyze['lineNumber']++;otyze['columnNumber'] = yrdb - pgh14 + 0x1;
  }for (var pgh14 = 0x0, setzoa = 0x0, br5_ = /.*(?:\r\n?|\n)|.*$/g, otyze = pfv46g['locator'], g14hp6 = [{ 'currentNSMap': p1x9gh }], xhs9a = {}, l3n7 = 0x0;;) {
    try {
      var q$3mij = toeaz['indexOf']('<', l3n7);if (0x0 > q$3mij) {
        if (!toeaz['substr'](l3n7)['match'](/^\s*$/)) {
          var l7vf6 = pfv46g['doc'],
              m7q3$i = l7vf6['createTextNode'](toeaz['substr'](l3n7));l7vf6['appendChild'](m7q3$i), pfv46g['currentElement'] = m7q3$i;
        }return;
      }switch (q$3mij > l3n7 && oytk(q$3mij), toeaz['charAt'](q$3mij + 0x1)) {case '/':
          var yzodt = toeaz['indexOf']('>', q$3mij + 0x3),
              dz = toeaz['substring'](q$3mij + 0x2, yzodt),
              m7nqi = g14hp6['pop']();0x0 > yzodt ? (dz = toeaz['substring'](q$3mij + 0x2)['replace'](/[\s<].*/, ''), otkdy['error']('end tag name: ' + dz + ' is not complete:' + m7nqi['tagName']), yzodt = q$3mij + 0x1 + dz['length']) : dz['match'](/\s</) && (dz = dz['replace'](/[\s<].*/, ''), otkdy['error']('end tag name: ' + dz + ' maybe not complete'), yzodt = q$3mij + 0x1 + dz['length']);var db8r = m7nqi['localNSMap'],
              rbk58_ = m7nqi['tagName'] == dz,
              nvmi7l = rbk58_ || m7nqi['tagName'] && m7nqi['tagName']['toLowerCase']() == dz['toLowerCase']();if (nvmi7l) {
            if (pfv46g['endElement'](m7nqi['uri'], m7nqi['localName'], dz), db8r) {
              for (var m3jq$i in db8r) pfv46g['endPrefixMapping'](m3jq$i);
            }rbk58_ || otkdy['fatalError']('end tag name: ' + dz + ' is not match the current start tagName:' + m7nqi['tagName']);
          } else g14hp6['push'](m7nqi);yzodt++;break;case '?':
          otyze && wru2_5(q$3mij), yzodt = zr8_k5(toeaz, q$3mij, pfv46g);break;case '!':
          otyze && wru2_5(q$3mij), yzodt = zkb8d(toeaz, q$3mij, pfv46g, otkdy);break;default:
          otyze && wru2_5(q$3mij);var r8_u2 = new zzeast(),
              l7m = g14hp6[g14hp6['length'] - 0x1]['currentNSMap'],
              yzodt = zaeszt(toeaz, q$3mij, r8_u2, l7m, mn73q, otkdy),
              g91xhp = r8_u2['length'];if (!r8_u2['closed'] && zg9hx1(toeaz, yzodt, r8_u2['tagName'], xhs9a) && (r8_u2['closed'] = !0x0, dbry['nbsp'] || otkdy['warning']('unclosed xml attribute')), otyze && g91xhp) {
            for (var gvlf4 = zsta(otyze, {}), h6pfg4 = 0x0; g91xhp > h6pfg4; h6pfg4++) {
              var etas = r8_u2[h6pfg4];wru2_5(etas['offset']), etas['locator'] = zsta(otyze, {});
            }pfv46g['locator'] = gvlf4, znlv7(r8_u2, pfv46g, l7m) && g14hp6['push'](r8_u2), pfv46g['locator'] = otyze;
          } else znlv7(r8_u2, pfv46g, l7m) && g14hp6['push'](r8_u2);'http://www.w3.org/1999/xhtml' !== r8_u2['uri'] || r8_u2['closed'] ? yzodt++ : yzodt = zr_by(toeaz, yzodt, r8_u2['tagName'], mn73q, pfv46g);}
    } catch (u_2w0) {
      otkdy['error']('element parse error: ' + u_2w0), yzodt = -0x1;
    }yzodt > l3n7 ? l3n7 = yzodt : oytk(Math['max'](q$3mij, l3n7) + 0x1);
  }
}function zsta(tdykoz, okb8d) {
  return okb8d['lineNumber'] = tdykoz['lineNumber'], okb8d['columnNumber'] = tdykoz['columnNumber'], okb8d;
}function zaeszt(fnvl4, phg9, u_0w, yodtbk, axets, azxte) {
  for (var aestxz, kyb8r_, nivfl7 = ++phg9, m3jqi$ = za1xs9e;;) {
    var hsa19x = fnvl4['charAt'](nivfl7);switch (hsa19x) {case '=':
        if (m3jqi$ === zl4nvf) aestxz = fnvl4['slice'](phg9, nivfl7), m3jqi$ = zadotez;else {
          if (m3jqi$ !== zaozted) throw new Error('attribute equal must after attrName');m3jqi$ = zadotez;
        }break;case '\x27':case '\x22':
        if (m3jqi$ === zadotez || m3jqi$ === zl4nvf) {
          if (m3jqi$ === zl4nvf && (azxte['warning']('attribute value must after "="'), aestxz = fnvl4['slice'](phg9, nivfl7)), phg9 = nivfl7 + 0x1, nivfl7 = fnvl4['indexOf'](hsa19x, phg9), !(nivfl7 > 0x0)) throw new Error('attribute value no end \'' + hsa19x + '\' match');kyb8r_ = fnvl4['slice'](phg9, nivfl7)['replace'](/&#?\w+;/g, axets), u_0w['add'](aestxz, kyb8r_, phg9 - 0x1), m3jqi$ = zdr;
        } else {
          if (m3jqi$ != zgv4l6f) throw new Error('attribute value must after "="');kyb8r_ = fnvl4['slice'](phg9, nivfl7)['replace'](/&#?\w+;/g, axets), u_0w['add'](aestxz, kyb8r_, phg9), azxte['warning']('attribute "' + aestxz + '" missed start quot(' + hsa19x + ')!!'), phg9 = nivfl7 + 0x1, m3jqi$ = zdr;
        }break;case '/':
        switch (m3jqi$) {case za1xs9e:
            u_0w['setTagName'](fnvl4['slice'](phg9, nivfl7));case zdr:case z_85r2b:case zm37nli:
            m3jqi$ = zm37nli, u_0w['closed'] = !0x0;case zgv4l6f:case zl4nvf:case zaozted:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return azxte['error']('unexpected end of input'), m3jqi$ == za1xs9e && u_0w['setTagName'](fnvl4['slice'](phg9, nivfl7)), nivfl7;case '>':
        switch (m3jqi$) {case za1xs9e:
            u_0w['setTagName'](fnvl4['slice'](phg9, nivfl7));case zdr:case z_85r2b:case zm37nli:
            break;case zgv4l6f:case zl4nvf:
            kyb8r_ = fnvl4['slice'](phg9, nivfl7), '/' === kyb8r_['slice'](-0x1) && (u_0w['closed'] = !0x0, kyb8r_ = kyb8r_['slice'](0x0, -0x1));case zaozted:
            m3jqi$ === zaozted && (kyb8r_ = aestxz), m3jqi$ == zgv4l6f ? (azxte['warning']('attribute "' + kyb8r_ + '" missed quot(")!!'), u_0w['add'](aestxz, kyb8r_['replace'](/&#?\w+;/g, axets), phg9)) : ('http://www.w3.org/1999/xhtml' === yodtbk[''] && kyb8r_['match'](/^(?:disabled|checked|selected)$/i) || azxte['warning']('attribute "' + kyb8r_ + '" missed value!! "' + kyb8r_ + '" instead!!'), u_0w['add'](kyb8r_, kyb8r_, phg9));break;case zadotez:
            throw new Error('attribute value missed!!');}return nivfl7;case '\u0080':
        hsa19x = '\x20';default:
        if ('\x20' >= hsa19x) switch (m3jqi$) {case za1xs9e:
            u_0w['setTagName'](fnvl4['slice'](phg9, nivfl7)), m3jqi$ = z_85r2b;break;case zl4nvf:
            aestxz = fnvl4['slice'](phg9, nivfl7), m3jqi$ = zaozted;break;case zgv4l6f:
            var kyb8r_ = fnvl4['slice'](phg9, nivfl7)['replace'](/&#?\w+;/g, axets);azxte['warning']('attribute "' + kyb8r_ + '" missed quot(")!!'), u_0w['add'](aestxz, kyb8r_, phg9);case zdr:
            m3jqi$ = z_85r2b;} else switch (m3jqi$) {case zaozted:
            {
              u_0w['tagName'];
            }'http://www.w3.org/1999/xhtml' === yodtbk[''] && aestxz['match'](/^(?:disabled|checked|selected)$/i) || azxte['warning']('attribute "' + aestxz + '" missed value!! "' + aestxz + '" instead2!!'), u_0w['add'](aestxz, aestxz, phg9), phg9 = nivfl7, m3jqi$ = zl4nvf;break;case zdr:
            azxte['warning']('attribute space is required"' + aestxz + '\x22!!');case z_85r2b:
            m3jqi$ = zl4nvf, phg9 = nivfl7;break;case zadotez:
            m3jqi$ = zgv4l6f, phg9 = nivfl7;break;case zm37nli:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nivfl7++;
  }
}function znlv7(hx19a, g9xh1p, m3iq$j) {
  for (var n3lmi7 = hx19a['tagName'], h1s9 = null, ykotb = hx19a['length']; ykotb--;) {
    var fvn46l = hx19a[ykotb],
        aeoszt = fvn46l['qName'],
        b8_rky = fvn46l['value'],
        rbyk_ = aeoszt['indexOf'](':');if (rbyk_ > 0x0) var _2ur5w = fvn46l['prefix'] = aeoszt['slice'](0x0, rbyk_),
        n76vf = aeoszt['slice'](rbyk_ + 0x1),
        xaet = 'xmlns' === _2ur5w && n76vf;else n76vf = aeoszt, _2ur5w = null, xaet = 'xmlns' === aeoszt && '';fvn46l['localName'] = n76vf, xaet !== !0x1 && (null == h1s9 && (h1s9 = {}, zi3mq(m3iq$j, m3iq$j = {})), m3iq$j[xaet] = h1s9[xaet] = b8_rky, fvn46l['uri'] = 'http://www.w3.org/2000/xmlns/', g9xh1p['startPrefixMapping'](xaet, b8_rky));
  }for (var ykotb = hx19a['length']; ykotb--;) {
    fvn46l = hx19a[ykotb];var _2ur5w = fvn46l['prefix'];_2ur5w && ('xml' === _2ur5w && (fvn46l['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _2ur5w && (fvn46l['uri'] = m3iq$j[_2ur5w || '']));
  }var rbyk_ = n3lmi7['indexOf'](':');rbyk_ > 0x0 ? (_2ur5w = hx19a['prefix'] = n3lmi7['slice'](0x0, rbyk_), n76vf = hx19a['localName'] = n3lmi7['slice'](rbyk_ + 0x1)) : (_2ur5w = null, n76vf = hx19a['localName'] = n3lmi7);var xa9 = hx19a['uri'] = m3iq$j[_2ur5w || ''];if (g9xh1p['startElement'](xa9, n76vf, n3lmi7, hx19a), !hx19a['closed']) return hx19a['currentNSMap'] = m3iq$j, hx19a['localNSMap'] = h1s9, !0x0;if (g9xh1p['endElement'](xa9, n76vf, n3lmi7), h1s9) {
    for (_2ur5w in h1s9) g9xh1p['endPrefixMapping'](_2ur5w);
  }
}function zr_by(iq$73m, dbyrk8, dye, otkzd, dbk8r) {
  if (/^(?:script|textarea)$/i['test'](dye)) {
    var i7vlmn = iq$73m['indexOf']('</' + dye + '>', dbyrk8),
        nqi37 = iq$73m['substring'](dbyrk8 + 0x1, i7vlmn);if (/[&<]/['test'](nqi37)) return (/^script$/i['test'](dye) ? (dbk8r['characters'](nqi37, 0x0, nqi37['length']), i7vlmn) : (nqi37 = nqi37['replace'](/&#?\w+;/g, otkzd), dbk8r['characters'](nqi37, 0x0, nqi37['length']), i7vlmn)
    );
  }return dbyrk8 + 0x1;
}function zg9hx1(f6n4v, sae, zax9e, drk8b) {
  var odyk8b = drk8b[zax9e];return null == odyk8b && (odyk8b = f6n4v['lastIndexOf']('</' + zax9e + '>'), sae > odyk8b && (odyk8b = f6n4v['lastIndexOf']('</' + zax9e)), drk8b[zax9e] = odyk8b), sae > odyk8b;
}function zi3mq(nvif7, q$i7m3) {
  for (var vp4g6f in nvif7) q$i7m3[vp4g6f] = nvif7[vp4g6f];
}function zkb8d(qi7$3, bryd8k, ky8bo, mnl7i3) {
  var nvm = qi7$3['charAt'](bryd8k + 0x2);switch (nvm) {case '-':
      if ('-' === qi7$3['charAt'](bryd8k + 0x3)) {
        var asoe = qi7$3['indexOf']('-->', bryd8k + 0x4);return asoe > bryd8k ? (ky8bo['comment'](qi7$3, bryd8k + 0x4, asoe - bryd8k - 0x4), asoe + 0x3) : (mnl7i3['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qi7$3['substr'](bryd8k + 0x3, 0x6)) {
        var asoe = qi7$3['indexOf'](']]>', bryd8k + 0x9);return ky8bo['startCDATA'](), ky8bo['characters'](qi7$3, bryd8k + 0x9, asoe - bryd8k - 0x9), ky8bo['endCDATA'](), asoe + 0x3;
      }var lim3n7 = zzetsao(qi7$3, bryd8k),
          vg64l = lim3n7['length'];if (vg64l > 0x1 && /!doctype/i['test'](lim3n7[0x0][0x0])) {
        var eozat = lim3n7[0x1][0x0],
            nf7li = vg64l > 0x3 && /^public$/i['test'](lim3n7[0x2][0x0]) && lim3n7[0x3][0x0],
            pfv6g4 = vg64l > 0x4 && lim3n7[0x4][0x0],
            tozye = lim3n7[vg64l - 0x1];return ky8bo['startDTD'](eozat, nf7li && nf7li['replace'](/^(['"])(.*?)\1$/, '$2'), pfv6g4 && pfv6g4['replace'](/^(['"])(.*?)\1$/, '$2')), ky8bo['endDTD'](), tozye['index'] + tozye[0x0]['length'];
      }}return -0x1;
}function zr8_k5(aso, ybkr8, saetzo) {
  var $3i7q = aso['indexOf']('?>', ybkr8);if ($3i7q) {
    var b8kr5 = aso['substring'](ybkr8, $3i7q)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (b8kr5) {
      {
        b8kr5[0x0]['length'];
      }return saetzo['processingInstruction'](b8kr5[0x1], b8kr5[0x2]), $3i7q + 0x2;
    }return -0x1;
  }return -0x1;
}function zzeast() {}function zvpf4(v6g4lf, todae) {
  return v6g4lf['__proto__'] = todae, v6g4lf;
}function zzetsao(q37$mi, ph419g) {
  var bdtko,
      brk8y_ = [],
      fvp6 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (fvp6['lastIndex'] = ph419g, fvp6['exec'](q37$mi); bdtko = fvp6['exec'](q37$mi);) if (brk8y_['push'](bdtko), bdtko[0x1]) return brk8y_;
}var zse9zax = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    z_8ryb = new RegExp('[\\-\\.0-9' + zse9zax['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zry_kb = new RegExp('^' + zse9zax['source'] + z_8ryb['source'] + '*(?::' + zse9zax['source'] + z_8ryb['source'] + '*)?$'),
    za1xs9e = 0x0,
    zl4nvf = 0x1,
    zaozted = 0x2,
    zadotez = 0x3,
    zgv4l6f = 0x4,
    zdr = 0x5,
    z_85r2b = 0x6,
    zm37nli = 0x7;zg64pf['prototype'] = { 'parse': function (oed, ztyode, glv64) {
    var lf4nv = this['domBuilder'];lf4nv['startDocument'](), zi3mq(ztyode, ztyode = {}), z$qm3ij(oed, ztyode, glv64, lf4nv, this['errorHandler']), lf4nv['endDocument']();
  } }, zzeast['prototype'] = { 'setTagName': function (sae19) {
    if (!zry_kb['test'](sae19)) throw new Error('invalid tagName:' + sae19);this['tagName'] = sae19;
  }, 'add': function (dezoat, taode, ozae) {
    if (!zry_kb['test'](dezoat)) throw new Error('invalid attribute:' + dezoat);this[this['length']++] = { 'qName': dezoat, 'value': taode, 'offset': ozae };
  }, 'length': 0x0, 'getLocalName': function (otkbd) {
    return this[otkbd]['localName'];
  }, 'getLocator': function (f6vl4g) {
    return this[f6vl4g]['locator'];
  }, 'getQName': function (hx) {
    return this[hx]['qName'];
  }, 'getURI': function (nl6f) {
    return this[nl6f]['uri'];
  }, 'getValue': function (atoedz) {
    return this[atoedz]['value'];
  } }, zvpf4({}, zvpf4['prototype']) instanceof zvpf4 || (zvpf4 = function (nmi37l, hsx19) {
  function ybdkr8() {}ybdkr8['prototype'] = hsx19, ybdkr8 = new ybdkr8();for (hsx19 in nmi37l) ybdkr8[hsx19] = nmi37l[hsx19];return ybdkr8;
}), exports['XMLReader'] = zg64pf;