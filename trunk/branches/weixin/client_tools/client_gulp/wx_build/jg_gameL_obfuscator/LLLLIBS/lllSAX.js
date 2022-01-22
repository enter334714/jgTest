var W = wx.$l;
function L9a2kjd() {}function L9hlz(ug61ev, o79fv, v7e91o, _nx0, abkz) {
  function hztj(th5zl) {
    if (th5zl > 0xffff) {
      th5zl -= 0x10000;var v7g1oe = 0xd800 + (th5zl >> 0xa),
          qzjak = 0xdc00 + (0x3ff & th5zl);return String['fromCharCode'](v7g1oe, qzjak);
    }return String['fromCharCode'](th5zl);
  }function qazkjh(qt5f) {
    var tjzhql = qt5f['slice'](0x1, -0x1);return tjzhql in v7e91o ? v7e91o[tjzhql] : '#' === tjzhql['charAt'](0x0) ? hztj(parseInt(tjzhql['substr'](0x1)['replace']('x', '0x'))) : (abkz['error']('entity not found:' + qt5f), qt5f);
  }function fot9l(eu1v7) {
    if (eu1v7 > hjaz) {
      var adb2k$ = ug61ev['substring'](hjaz, eu1v7)['replace'](/&#?\w+;/g, qazkjh);cmi3r && m3cirw(hjaz), _nx0['characters'](adb2k$, 0x0, eu1v7 - hjaz), hjaz = eu1v7;
    }
  }function m3cirw(snx4, jqhka) {
    for (; snx4 >= _yn8x && (jqhka = bad$s['exec'](ug61ev));) v6ue = jqhka['index'], _yn8x = v6ue + jqhka[0x0]['length'], cmi3r['lineNumber']++;cmi3r['columnNumber'] = snx4 - v6ue + 0x1;
  }for (var v6ue = 0x0, _yn8x = 0x0, bad$s = /.*(?:\r\n?|\n)|.*$/g, cmi3r = _nx0['locator'], ds2a$b = [{ 'currentNSMap': o79fv }], r3yn = {}, hjaz = 0x0;;) {
    try {
      var w3irm = ug61ev['indexOf']('<', hjaz);if (0x0 > w3irm) {
        if (!ug61ev['substr'](hjaz)['match'](/^\s*$/)) {
          var ym0r3c = _nx0['doc'],
              ev1 = ym0r3c['createTextNode'](ug61ev['substr'](hjaz));ym0r3c['appendChild'](ev1), _nx0['currentElement'] = ev1;
        }return;
      }switch (w3irm > hjaz && fot9l(w3irm), ug61ev['charAt'](w3irm + 0x1)) {case '/':
          var bds2a = ug61ev['indexOf']('>', w3irm + 0x3),
              i0rm3c = ug61ev['substring'](w3irm + 0x2, bds2a),
              e17o9v = ds2a$b['pop']();0x0 > bds2a ? (i0rm3c = ug61ev['substring'](w3irm + 0x2)['replace'](/[\s<].*/, ''), abkz['error']('end tag name: ' + i0rm3c + ' is not complete:' + e17o9v['tagName']), bds2a = w3irm + 0x1 + i0rm3c['length']) : i0rm3c['match'](/\s</) && (i0rm3c = i0rm3c['replace'](/[\s<].*/, ''), abkz['error']('end tag name: ' + i0rm3c + ' maybe not complete'), bds2a = w3irm + 0x1 + i0rm3c['length']);var oe9v17 = e17o9v['localNSMap'],
              rc3wmi = e17o9v['tagName'] == i0rm3c,
              y30mcr = rc3wmi || e17o9v['tagName'] && e17o9v['tagName']['toLowerCase']() == i0rm3c['toLowerCase']();if (y30mcr) {
            if (_nx0['endElement'](e17o9v['uri'], e17o9v['localName'], i0rm3c), oe9v17) {
              for (var ugpe1 in oe9v17) _nx0['endPrefixMapping'](ugpe1);
            }rc3wmi || abkz['fatalError']('end tag name: ' + i0rm3c + ' is not match the current start tagName:' + e17o9v['tagName']);
          } else ds2a$b['push'](e17o9v);bds2a++;break;case '?':
          cmi3r && m3cirw(w3irm), bds2a = L9upe(ug61ev, w3irm, _nx0);break;case '!':
          cmi3r && m3cirw(w3irm), bds2a = L9u17gev(ug61ev, w3irm, _nx0, abkz);break;default:
          cmi3r && m3cirw(w3irm);var v7gue = new L9d8bs(),
              fot = ds2a$b[ds2a$b['length'] - 0x1]['currentNSMap'],
              bds2a = L9akd2$(ug61ev, w3irm, v7gue, fot, qazkjh, abkz),
              f57vo9 = v7gue['length'];if (!v7gue['closed'] && L9jbha(ug61ev, bds2a, v7gue['tagName'], r3yn) && (v7gue['closed'] = !0x0, v7e91o['nbsp'] || abkz['warning']('unclosed xml attribute')), cmi3r && f57vo9) {
            for (var dsb28 = L9evg71(cmi3r, {}), zjht = 0x0; f57vo9 > zjht; zjht++) {
              var jlk = v7gue[zjht];m3cirw(jlk['offset']), jlk['locator'] = L9evg71(cmi3r, {});
            }_nx0['locator'] = dsb28, L9bkjza(v7gue, _nx0, fot) && ds2a$b['push'](v7gue), _nx0['locator'] = cmi3r;
          } else L9bkjza(v7gue, _nx0, fot) && ds2a$b['push'](v7gue);'http://www.w3.org/1999/xhtml' !== v7gue['uri'] || v7gue['closed'] ? bds2a++ : bds2a = L9ftlqz5(ug61ev, bds2a, v7gue['tagName'], qazkjh, _nx0);}
    } catch (hjt) {
      abkz['error']('element parse error: ' + hjt), bds2a = -0x1;
    }bds2a > hjaz ? hjaz = bds2a : fot9l(Math['max'](w3irm, hjaz) + 0x1);
  }
}function L9evg71(ftz5ql, $d48_) {
  return $d48_['lineNumber'] = ftz5ql['lineNumber'], $d48_['columnNumber'] = ftz5ql['columnNumber'], $d48_;
}function L9akd2$(wcr, ve7o, _48nx, rw3mci, b$d28s, xn84_) {
  for (var bdsa2$, tzjlhq, zhjlq = ++ve7o, jak2d = L9jtlz;;) {
    var ug1e6v = wcr['charAt'](zhjlq);switch (ug1e6v) {case '=':
        if (jak2d === L9jlqt) bdsa2$ = wcr['slice'](ve7o, zhjlq), jak2d = L9bhjka;else {
          if (jak2d !== L9jkh2) throw new Error('attribute equal must after attrName');jak2d = L9bhjka;
        }break;case '\x27':case '\x22':
        if (jak2d === L9bhjka || jak2d === L9jlqt) {
          if (jak2d === L9jlqt && (xn84_['warning']('attribute value must after "="'), bdsa2$ = wcr['slice'](ve7o, zhjlq)), ve7o = zhjlq + 0x1, zhjlq = wcr['indexOf'](ug1e6v, ve7o), !(zhjlq > 0x0)) throw new Error('attribute value no end \'' + ug1e6v + '\' match');tzjlhq = wcr['slice'](ve7o, zhjlq)['replace'](/&#?\w+;/g, b$d28s), _48nx['add'](bdsa2$, tzjlhq, ve7o - 0x1), jak2d = L9ft5o9l;
        } else {
          if (jak2d != L9d2bka) throw new Error('attribute value must after "="');tzjlhq = wcr['slice'](ve7o, zhjlq)['replace'](/&#?\w+;/g, b$d28s), _48nx['add'](bdsa2$, tzjlhq, ve7o), xn84_['warning']('attribute "' + bdsa2$ + '" missed start quot(' + ug1e6v + ')!!'), ve7o = zhjlq + 0x1, jak2d = L9ft5o9l;
        }break;case '/':
        switch (jak2d) {case L9jtlz:
            _48nx['setTagName'](wcr['slice'](ve7o, zhjlq));case L9ft5o9l:case L9qzlh:case L9ir0cm:
            jak2d = L9ir0cm, _48nx['closed'] = !0x0;case L9d2bka:case L9jlqt:case L9jkh2:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xn84_['error']('unexpected end of input'), jak2d == L9jtlz && _48nx['setTagName'](wcr['slice'](ve7o, zhjlq)), zhjlq;case '>':
        switch (jak2d) {case L9jtlz:
            _48nx['setTagName'](wcr['slice'](ve7o, zhjlq));case L9ft5o9l:case L9qzlh:case L9ir0cm:
            break;case L9d2bka:case L9jlqt:
            tzjlhq = wcr['slice'](ve7o, zhjlq), '/' === tzjlhq['slice'](-0x1) && (_48nx['closed'] = !0x0, tzjlhq = tzjlhq['slice'](0x0, -0x1));case L9jkh2:
            jak2d === L9jkh2 && (tzjlhq = bdsa2$), jak2d == L9d2bka ? (xn84_['warning']('attribute "' + tzjlhq + '" missed quot(")!!'), _48nx['add'](bdsa2$, tzjlhq['replace'](/&#?\w+;/g, b$d28s), ve7o)) : ('http://www.w3.org/1999/xhtml' === rw3mci[''] && tzjlhq['match'](/^(?:disabled|checked|selected)$/i) || xn84_['warning']('attribute "' + tzjlhq + '" missed value!! "' + tzjlhq + '" instead!!'), _48nx['add'](tzjlhq, tzjlhq, ve7o));break;case L9bhjka:
            throw new Error('attribute value missed!!');}return zhjlq;case '\u0080':
        ug1e6v = '\x20';default:
        if ('\x20' >= ug1e6v) switch (jak2d) {case L9jtlz:
            _48nx['setTagName'](wcr['slice'](ve7o, zhjlq)), jak2d = L9qzlh;break;case L9jlqt:
            bdsa2$ = wcr['slice'](ve7o, zhjlq), jak2d = L9jkh2;break;case L9d2bka:
            var tzjlhq = wcr['slice'](ve7o, zhjlq)['replace'](/&#?\w+;/g, b$d28s);xn84_['warning']('attribute "' + tzjlhq + '" missed quot(")!!'), _48nx['add'](bdsa2$, tzjlhq, ve7o);case L9ft5o9l:
            jak2d = L9qzlh;} else switch (jak2d) {case L9jkh2:
            {
              _48nx['tagName'];
            }'http://www.w3.org/1999/xhtml' === rw3mci[''] && bdsa2$['match'](/^(?:disabled|checked|selected)$/i) || xn84_['warning']('attribute "' + bdsa2$ + '" missed value!! "' + bdsa2$ + '" instead2!!'), _48nx['add'](bdsa2$, bdsa2$, ve7o), ve7o = zhjlq, jak2d = L9jlqt;break;case L9ft5o9l:
            xn84_['warning']('attribute space is required"' + bdsa2$ + '\x22!!');case L9qzlh:
            jak2d = L9jlqt, ve7o = zhjlq;break;case L9bhjka:
            jak2d = L9d2bka, ve7o = zhjlq;break;case L9ir0cm:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}zhjlq++;
  }
}function L9bkjza(dbak$2, i3cwm, rxc03) {
  for (var jkbhz = dbak$2['tagName'], d82$s = null, y0c3mr = dbak$2['length']; y0c3mr--;) {
    var cwirm3 = dbak$2[y0c3mr],
        sab2$d = cwirm3['qName'],
        $b8d2 = cwirm3['value'],
        fo95tl = sab2$d['indexOf'](':');if (fo95tl > 0x0) var qhjl = cwirm3['prefix'] = sab2$d['slice'](0x0, fo95tl),
        nx4s_ = sab2$d['slice'](fo95tl + 0x1),
        m03ry = 'xmlns' === qhjl && nx4s_;else nx4s_ = sab2$d, qhjl = null, m03ry = 'xmlns' === sab2$d && '';cwirm3['localName'] = nx4s_, m03ry !== !0x1 && (null == d82$s && (d82$s = {}, L9eo197(rxc03, rxc03 = {})), rxc03[m03ry] = d82$s[m03ry] = $b8d2, cwirm3['uri'] = 'http://www.w3.org/2000/xmlns/', i3cwm['startPrefixMapping'](m03ry, $b8d2));
  }for (var y0c3mr = dbak$2['length']; y0c3mr--;) {
    cwirm3 = dbak$2[y0c3mr];var qhjl = cwirm3['prefix'];qhjl && ('xml' === qhjl && (cwirm3['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qhjl && (cwirm3['uri'] = rxc03[qhjl || '']));
  }var fo95tl = jkbhz['indexOf'](':');fo95tl > 0x0 ? (qhjl = dbak$2['prefix'] = jkbhz['slice'](0x0, fo95tl), nx4s_ = dbak$2['localName'] = jkbhz['slice'](fo95tl + 0x1)) : (qhjl = null, nx4s_ = dbak$2['localName'] = jkbhz);var v7u1ge = dbak$2['uri'] = rxc03[qhjl || ''];if (i3cwm['startElement'](v7u1ge, nx4s_, jkbhz, dbak$2), !dbak$2['closed']) return dbak$2['currentNSMap'] = rxc03, dbak$2['localNSMap'] = d82$s, !0x0;if (i3cwm['endElement'](v7u1ge, nx4s_, jkbhz), d82$s) {
    for (qhjl in d82$s) i3cwm['endPrefixMapping'](qhjl);
  }
}function L9ftlqz5(c3m0i, vo91f7, abhjzk, ol9tf5, jhqazk) {
  if (/^(?:script|textarea)$/i['test'](abhjzk)) {
    var o1ve9 = c3m0i['indexOf']('</' + abhjzk + '>', vo91f7),
        zqhtl5 = c3m0i['substring'](vo91f7 + 0x1, o1ve9);if (/[&<]/['test'](zqhtl5)) return (/^script$/i['test'](abhjzk) ? (jhqazk['characters'](zqhtl5, 0x0, zqhtl5['length']), o1ve9) : (zqhtl5 = zqhtl5['replace'](/&#?\w+;/g, ol9tf5), jhqazk['characters'](zqhtl5, 0x0, zqhtl5['length']), o1ve9)
    );
  }return vo91f7 + 0x1;
}function L9jbha(y40x_n, t5f9lo, tlf95q, yrn30) {
  var ymcr = yrn30[tlf95q];return null == ymcr && (ymcr = y40x_n['lastIndexOf']('</' + tlf95q + '>'), t5f9lo > ymcr && (ymcr = y40x_n['lastIndexOf']('</' + tlf95q)), yrn30[tlf95q] = ymcr), t5f9lo > ymcr;
}function L9eo197(fov971, vf975o) {
  for (var _$8n4 in fov971) vf975o[_$8n4] = fov971[_$8n4];
}function L9u17gev(jqhtlz, xy0n3, bha2, dj2kab) {
  var tzqjl = jqhtlz['charAt'](xy0n3 + 0x2);switch (tzqjl) {case '-':
      if ('-' === jqhtlz['charAt'](xy0n3 + 0x3)) {
        var n03x_y = jqhtlz['indexOf']('-->', xy0n3 + 0x4);return n03x_y > xy0n3 ? (bha2['comment'](jqhtlz, xy0n3 + 0x4, n03x_y - xy0n3 - 0x4), n03x_y + 0x3) : (dj2kab['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jqhtlz['substr'](xy0n3 + 0x3, 0x6)) {
        var n03x_y = jqhtlz['indexOf'](']]>', xy0n3 + 0x9);return bha2['startCDATA'](), bha2['characters'](jqhtlz, xy0n3 + 0x9, n03x_y - xy0n3 - 0x9), bha2['endCDATA'](), n03x_y + 0x3;
      }var kahb2j = L9ge6p1(jqhtlz, xy0n3),
          d24s = kahb2j['length'];if (d24s > 0x1 && /!doctype/i['test'](kahb2j[0x0][0x0])) {
        var yxrc0 = kahb2j[0x1][0x0],
            i03rmc = d24s > 0x3 && /^public$/i['test'](kahb2j[0x2][0x0]) && kahb2j[0x3][0x0],
            ry30mc = d24s > 0x4 && kahb2j[0x4][0x0],
            qzkjh = kahb2j[d24s - 0x1];return bha2['startDTD'](yxrc0, i03rmc && i03rmc['replace'](/^(['"])(.*?)\1$/, '$2'), ry30mc && ry30mc['replace'](/^(['"])(.*?)\1$/, '$2')), bha2['endDTD'](), qzkjh['index'] + qzkjh[0x0]['length'];
      }}return -0x1;
}function L9upe(pu61eg, uv6eg1, i3rwcm) {
  var b2$ds8 = pu61eg['indexOf']('?>', uv6eg1);if (b2$ds8) {
    var khaj2b = pu61eg['substring'](uv6eg1, b2$ds8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (khaj2b) {
      {
        khaj2b[0x0]['length'];
      }return i3rwcm['processingInstruction'](khaj2b[0x1], khaj2b[0x2]), b2$ds8 + 0x2;
    }return -0x1;
  }return -0x1;
}function L9d8bs() {}function L9zklqh(ajzbkh, zjlqh) {
  return ajzbkh['__proto__'] = zjlqh, ajzbkh;
}function L9ge6p1(xy03_, kjqza) {
  var ad2kb$,
      kjzhqa = [],
      bjdk2a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bjdk2a['lastIndex'] = kjqza, bjdk2a['exec'](xy03_); ad2kb$ = bjdk2a['exec'](xy03_);) if (kjzhqa['push'](ad2kb$), ad2kb$[0x1]) return kjzhqa;
}var L9t5of7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9y0nx_ = new RegExp('[\\-\\.0-9' + L9t5of7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9klhzjq = new RegExp('^' + L9t5of7['source'] + L9y0nx_['source'] + '*(?::' + L9t5of7['source'] + L9y0nx_['source'] + '*)?$'),
    L9jtlz = 0x0,
    L9jlqt = 0x1,
    L9jkh2 = 0x2,
    L9bhjka = 0x3,
    L9d2bka = 0x4,
    L9ft5o9l = 0x5,
    L9qzlh = 0x6,
    L9ir0cm = 0x7;L9a2kjd['prototype'] = { 'parse': function (cm30y, r3cm0, cim3w) {
    var $d82bs = this['domBuilder'];$d82bs['startDocument'](), L9eo197(r3cm0, r3cm0 = {}), L9hlz(cm30y, r3cm0, cim3w, $d82bs, this['errorHandler']), $d82bs['endDocument']();
  } }, L9d8bs['prototype'] = { 'setTagName': function (hq5) {
    if (!L9klhzjq['test'](hq5)) throw new Error('invalid tagName:' + hq5);this['tagName'] = hq5;
  }, 'add': function ($ds2ab, n30ryx, zjakhq) {
    if (!L9klhzjq['test']($ds2ab)) throw new Error('invalid attribute:' + $ds2ab);this[this['length']++] = { 'qName': $ds2ab, 'value': n30ryx, 'offset': zjakhq };
  }, 'length': 0x0, 'getLocalName': function (x30yr) {
    return this[x30yr]['localName'];
  }, 'getLocator': function (y03rcx) {
    return this[y03rcx]['locator'];
  }, 'getQName': function (ltjqhz) {
    return this[ltjqhz]['qName'];
  }, 'getURI': function (nxy0_3) {
    return this[nxy0_3]['uri'];
  }, 'getValue': function (f5ltz) {
    return this[f5ltz]['value'];
  } }, L9zklqh({}, L9zklqh['prototype']) instanceof L9zklqh || (L9zklqh = function (bds2$, v17f9) {
  function qf95l() {}qf95l['prototype'] = v17f9, qf95l = new qf95l();for (v17f9 in bds2$) qf95l[v17f9] = bds2$[v17f9];return qf95l;
}), exports['XMLReader'] = L9a2kjd;