var W = wx.$l;
function L9h0oq4() {}function L9x59sad(zv3y2, cw7ner, wc3k7, v126i, _3v) {
  function sq4hp5(p4q5sh) {
    if (p4q5sh > 0xffff) {
      p4q5sh -= 0x10000;var du9a5 = 0xd800 + (p4q5sh >> 0xa),
          b1fi8 = 0xdc00 + (0x3ff & p4q5sh);return String['fromCharCode'](du9a5, b1fi8);
    }return String['fromCharCode'](p4q5sh);
  }function sax95(_zvk32) {
    var crwn = _zvk32['slice'](0x1, -0x1);return crwn in wc3k7 ? wc3k7[crwn] : '#' === crwn['charAt'](0x0) ? sq4hp5(parseInt(crwn['substr'](0x1)['replace']('x', '0x'))) : (_3v['error']('entity not found:' + _zvk32), _zvk32);
  }function jre7nc(fdlu9b) {
    if (fdlu9b > kwcz) {
      var kzv3 = zv3y2['substring'](kwcz, fdlu9b)['replace'](/&#?\w+;/g, sax95);wy7ck3 && zvwk3(kwcz), v126i['characters'](kzv3, 0x0, fdlu9b - kwcz), kwcz = fdlu9b;
    }
  }function zvwk3(l8ifu, qh0o4) {
    for (; l8ifu >= mo$qh && (qh0o4 = wk3zvy['exec'](zv3y2));) yv3kz2 = qh0o4['index'], mo$qh = yv3kz2 + qh0o4[0x0]['length'], wy7ck3['lineNumber']++;wy7ck3['columnNumber'] = l8ifu - yv3kz2 + 0x1;
  }for (var yv3kz2 = 0x0, mo$qh = 0x0, wk3zvy = /.*(?:\r\n?|\n)|.*$/g, wy7ck3 = v126i['locator'], ec7r = [{ 'currentNSMap': cw7ner }], z2_6 = {}, kwcz = 0x0;;) {
    try {
      var ywcnk7 = zv3y2['indexOf']('<', kwcz);if (0x0 > ywcnk7) {
        if (!zv3y2['substr'](kwcz)['match'](/^\s*$/)) {
          var vzk3y = v126i['doc'],
              g0mto$ = vzk3y['createTextNode'](zv3y2['substr'](kwcz));vzk3y['appendChild'](g0mto$), v126i['currentElement'] = g0mto$;
        }return;
      }switch (ywcnk7 > kwcz && jre7nc(ywcnk7), zv3y2['charAt'](ywcnk7 + 0x1)) {case '/':
          var t$hm = zv3y2['indexOf']('>', ywcnk7 + 0x3),
              k3yzc = zv3y2['substring'](ywcnk7 + 0x2, t$hm),
              _i12v6 = ec7r['pop']();0x0 > t$hm ? (k3yzc = zv3y2['substring'](ywcnk7 + 0x2)['replace'](/[\s<].*/, ''), _3v['error']('end tag name: ' + k3yzc + ' is not complete:' + _i12v6['tagName']), t$hm = ywcnk7 + 0x1 + k3yzc['length']) : k3yzc['match'](/\s</) && (k3yzc = k3yzc['replace'](/[\s<].*/, ''), _3v['error']('end tag name: ' + k3yzc + ' maybe not complete'), t$hm = ywcnk7 + 0x1 + k3yzc['length']);var tom0$ = _i12v6['localNSMap'],
              df8lb = _i12v6['tagName'] == k3yzc,
              yvkz3w = df8lb || _i12v6['tagName'] && _i12v6['tagName']['toLowerCase']() == k3yzc['toLowerCase']();if (yvkz3w) {
            if (v126i['endElement'](_i12v6['uri'], _i12v6['localName'], k3yzc), tom0$) {
              for (var ib6l in tom0$) v126i['endPrefixMapping'](ib6l);
            }df8lb || _3v['fatalError']('end tag name: ' + k3yzc + ' is not match the current start tagName:' + _i12v6['tagName']);
          } else ec7r['push'](_i12v6);t$hm++;break;case '?':
          wy7ck3 && zvwk3(ywcnk7), t$hm = L9poh0(zv3y2, ywcnk7, v126i);break;case '!':
          wy7ck3 && zvwk3(ywcnk7), t$hm = L9ho0$(zv3y2, ywcnk7, v126i, _3v);break;default:
          wy7ck3 && zvwk3(ywcnk7);var cy7wk = new L9jre7cn(),
              ht0mo = ec7r[ec7r['length'] - 0x1]['currentNSMap'],
              t$hm = L9kc7wy(zv3y2, ywcnk7, cy7wk, ht0mo, sax95, _3v),
              o4qhs = cy7wk['length'];if (!cy7wk['closed'] && L9kvy2(zv3y2, t$hm, cy7wk['tagName'], z2_6) && (cy7wk['closed'] = !0x0, wc3k7['nbsp'] || _3v['warning']('unclosed xml attribute')), wy7ck3 && o4qhs) {
            for (var x54ps = L9vy2zk(wy7ck3, {}), yvkzw = 0x0; o4qhs > yvkzw; yvkzw++) {
              var p5s9xa = cy7wk[yvkzw];zvwk3(p5s9xa['offset']), p5s9xa['locator'] = L9vy2zk(wy7ck3, {});
            }v126i['locator'] = x54ps, L9o0p4(cy7wk, v126i, ht0mo) && ec7r['push'](cy7wk), v126i['locator'] = wy7ck3;
          } else L9o0p4(cy7wk, v126i, ht0mo) && ec7r['push'](cy7wk);'http://www.w3.org/1999/xhtml' !== cy7wk['uri'] || cy7wk['closed'] ? t$hm++ : t$hm = L9xs95(zv3y2, t$hm, cy7wk['tagName'], sax95, v126i);}
    } catch (ud59a) {
      _3v['error']('element parse error: ' + ud59a), t$hm = -0x1;
    }t$hm > kwcz ? kwcz = t$hm : jre7nc(Math['max'](ywcnk7, kwcz) + 0x1);
  }
}function L9vy2zk(ynw, y2vk3) {
  return y2vk3['lineNumber'] = ynw['lineNumber'], y2vk3['columnNumber'] = ynw['columnNumber'], y2vk3;
}function L9kc7wy(fd9l, cnwe7r, i_8b1, ohmq04, uafx, aqsp54) {
  for (var iu8, vyzwk3, psq = ++cnwe7r, b1i6l = L9newcr7;;) {
    var u9da5x = fd9l['charAt'](psq);switch (u9da5x) {case '=':
        if (b1i6l === L9mq0oh4) iu8 = fd9l['slice'](cnwe7r, psq), b1i6l = L9z3k2v;else {
          if (b1i6l !== L9fldub8) throw new Error('attribute equal must after attrName');b1i6l = L9z3k2v;
        }break;case '\x27':case '\x22':
        if (b1i6l === L9z3k2v || b1i6l === L9mq0oh4) {
          if (b1i6l === L9mq0oh4 && (aqsp54['warning']('attribute value must after "="'), iu8 = fd9l['slice'](cnwe7r, psq)), cnwe7r = psq + 0x1, psq = fd9l['indexOf'](u9da5x, cnwe7r), !(psq > 0x0)) throw new Error('attribute value no end \'' + u9da5x + '\' match');vyzwk3 = fd9l['slice'](cnwe7r, psq)['replace'](/&#?\w+;/g, uafx), i_8b1['add'](iu8, vyzwk3, cnwe7r - 0x1), b1i6l = L9qhs4op;
        } else {
          if (b1i6l != L9c3w7k) throw new Error('attribute value must after "="');vyzwk3 = fd9l['slice'](cnwe7r, psq)['replace'](/&#?\w+;/g, uafx), i_8b1['add'](iu8, vyzwk3, cnwe7r), aqsp54['warning']('attribute "' + iu8 + '" missed start quot(' + u9da5x + ')!!'), cnwe7r = psq + 0x1, b1i6l = L9qhs4op;
        }break;case '/':
        switch (b1i6l) {case L9newcr7:
            i_8b1['setTagName'](fd9l['slice'](cnwe7r, psq));case L9qhs4op:case L9l8bdfu:case L9ops4q:
            b1i6l = L9ops4q, i_8b1['closed'] = !0x0;case L9c3w7k:case L9mq0oh4:case L9fldub8:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return aqsp54['error']('unexpected end of input'), b1i6l == L9newcr7 && i_8b1['setTagName'](fd9l['slice'](cnwe7r, psq)), psq;case '>':
        switch (b1i6l) {case L9newcr7:
            i_8b1['setTagName'](fd9l['slice'](cnwe7r, psq));case L9qhs4op:case L9l8bdfu:case L9ops4q:
            break;case L9c3w7k:case L9mq0oh4:
            vyzwk3 = fd9l['slice'](cnwe7r, psq), '/' === vyzwk3['slice'](-0x1) && (i_8b1['closed'] = !0x0, vyzwk3 = vyzwk3['slice'](0x0, -0x1));case L9fldub8:
            b1i6l === L9fldub8 && (vyzwk3 = iu8), b1i6l == L9c3w7k ? (aqsp54['warning']('attribute "' + vyzwk3 + '" missed quot(")!!'), i_8b1['add'](iu8, vyzwk3['replace'](/&#?\w+;/g, uafx), cnwe7r)) : ('http://www.w3.org/1999/xhtml' === ohmq04[''] && vyzwk3['match'](/^(?:disabled|checked|selected)$/i) || aqsp54['warning']('attribute "' + vyzwk3 + '" missed value!! "' + vyzwk3 + '" instead!!'), i_8b1['add'](vyzwk3, vyzwk3, cnwe7r));break;case L9z3k2v:
            throw new Error('attribute value missed!!');}return psq;case '\u0080':
        u9da5x = '\x20';default:
        if ('\x20' >= u9da5x) switch (b1i6l) {case L9newcr7:
            i_8b1['setTagName'](fd9l['slice'](cnwe7r, psq)), b1i6l = L9l8bdfu;break;case L9mq0oh4:
            iu8 = fd9l['slice'](cnwe7r, psq), b1i6l = L9fldub8;break;case L9c3w7k:
            var vyzwk3 = fd9l['slice'](cnwe7r, psq)['replace'](/&#?\w+;/g, uafx);aqsp54['warning']('attribute "' + vyzwk3 + '" missed quot(")!!'), i_8b1['add'](iu8, vyzwk3, cnwe7r);case L9qhs4op:
            b1i6l = L9l8bdfu;} else switch (b1i6l) {case L9fldub8:
            {
              i_8b1['tagName'];
            }'http://www.w3.org/1999/xhtml' === ohmq04[''] && iu8['match'](/^(?:disabled|checked|selected)$/i) || aqsp54['warning']('attribute "' + iu8 + '" missed value!! "' + iu8 + '" instead2!!'), i_8b1['add'](iu8, iu8, cnwe7r), cnwe7r = psq, b1i6l = L9mq0oh4;break;case L9qhs4op:
            aqsp54['warning']('attribute space is required"' + iu8 + '\x22!!');case L9l8bdfu:
            b1i6l = L9mq0oh4, cnwe7r = psq;break;case L9z3k2v:
            b1i6l = L9c3w7k, cnwe7r = psq;break;case L9ops4q:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}psq++;
  }
}function L9o0p4(sd95a, $oh0mq, ulbfd9) {
  for (var vwy = sd95a['tagName'], _v6i2 = null, hpo40q = sd95a['length']; hpo40q--;) {
    var ywcn = sd95a[hpo40q],
        y7knc = ywcn['qName'],
        hpo04 = ywcn['value'],
        zvkw = y7knc['indexOf'](':');if (zvkw > 0x0) var s95dax = ywcn['prefix'] = y7knc['slice'](0x0, zvkw),
        m$0hqo = y7knc['slice'](zvkw + 0x1),
        kycw73 = 'xmlns' === s95dax && m$0hqo;else m$0hqo = y7knc, s95dax = null, kycw73 = 'xmlns' === y7knc && '';ywcn['localName'] = m$0hqo, kycw73 !== !0x1 && (null == _v6i2 && (_v6i2 = {}, L9i1_62v(ulbfd9, ulbfd9 = {})), ulbfd9[kycw73] = _v6i2[kycw73] = hpo04, ywcn['uri'] = 'http://www.w3.org/2000/xmlns/', $oh0mq['startPrefixMapping'](kycw73, hpo04));
  }for (var hpo40q = sd95a['length']; hpo40q--;) {
    ywcn = sd95a[hpo40q];var s95dax = ywcn['prefix'];s95dax && ('xml' === s95dax && (ywcn['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== s95dax && (ywcn['uri'] = ulbfd9[s95dax || '']));
  }var zvkw = vwy['indexOf'](':');zvkw > 0x0 ? (s95dax = sd95a['prefix'] = vwy['slice'](0x0, zvkw), m$0hqo = sd95a['localName'] = vwy['slice'](zvkw + 0x1)) : (s95dax = null, m$0hqo = sd95a['localName'] = vwy);var lfux9 = sd95a['uri'] = ulbfd9[s95dax || ''];if ($oh0mq['startElement'](lfux9, m$0hqo, vwy, sd95a), !sd95a['closed']) return sd95a['currentNSMap'] = ulbfd9, sd95a['localNSMap'] = _v6i2, !0x0;if ($oh0mq['endElement'](lfux9, m$0hqo, vwy), _v6i2) {
    for (s95dax in _v6i2) $oh0mq['endPrefixMapping'](s95dax);
  }
}function L9xs95(dxful, cne7rw, pqs45, fdul9x, x9duf) {
  if (/^(?:script|textarea)$/i['test'](pqs45)) {
    var tmo0$g = dxful['indexOf']('</' + pqs45 + '>', cne7rw),
        _16z2 = dxful['substring'](cne7rw + 0x1, tmo0$g);if (/[&<]/['test'](_16z2)) return (/^script$/i['test'](pqs45) ? (x9duf['characters'](_16z2, 0x0, _16z2['length']), tmo0$g) : (_16z2 = _16z2['replace'](/&#?\w+;/g, fdul9x), x9duf['characters'](_16z2, 0x0, _16z2['length']), tmo0$g)
    );
  }return cne7rw + 0x1;
}function L9kvy2(sohpq4, _816i2, o0htm, n7wrc) {
  var n7ercj = n7wrc[o0htm];return null == n7ercj && (n7ercj = sohpq4['lastIndexOf']('</' + o0htm + '>'), _816i2 > n7ercj && (n7ercj = sohpq4['lastIndexOf']('</' + o0htm)), n7wrc[o0htm] = n7ercj), _816i2 > n7ercj;
}function L9i1_62v(v3ywk, lfdu8b) {
  for (var q0m4o in v3ywk) lfdu8b[q0m4o] = v3ywk[q0m4o];
}function L9ho0$(s45apq, px54sa, zv2y3, fd8ulb) {
  var zc3 = s45apq['charAt'](px54sa + 0x2);switch (zc3) {case '-':
      if ('-' === s45apq['charAt'](px54sa + 0x3)) {
        var o4sqp = s45apq['indexOf']('-->', px54sa + 0x4);return o4sqp > px54sa ? (zv2y3['comment'](s45apq, px54sa + 0x4, o4sqp - px54sa - 0x4), o4sqp + 0x3) : (fd8ulb['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == s45apq['substr'](px54sa + 0x3, 0x6)) {
        var o4sqp = s45apq['indexOf'](']]>', px54sa + 0x9);return zv2y3['startCDATA'](), zv2y3['characters'](s45apq, px54sa + 0x9, o4sqp - px54sa - 0x9), zv2y3['endCDATA'](), o4sqp + 0x3;
      }var pohqs = L9yck3w7(s45apq, px54sa),
          sxa9p = pohqs['length'];if (sxa9p > 0x1 && /!doctype/i['test'](pohqs[0x0][0x0])) {
        var xfudl9 = pohqs[0x1][0x0],
            yzw3c = sxa9p > 0x3 && /^public$/i['test'](pohqs[0x2][0x0]) && pohqs[0x3][0x0],
            i_81b6 = sxa9p > 0x4 && pohqs[0x4][0x0],
            vi61_ = pohqs[sxa9p - 0x1];return zv2y3['startDTD'](xfudl9, yzw3c && yzw3c['replace'](/^(['"])(.*?)\1$/, '$2'), i_81b6 && i_81b6['replace'](/^(['"])(.*?)\1$/, '$2')), zv2y3['endDTD'](), vi61_['index'] + vi61_[0x0]['length'];
      }}return -0x1;
}function L9poh0(aq5p4, f9uxa, w3kcy) {
  var ywk3v = aq5p4['indexOf']('?>', f9uxa);if (ywk3v) {
    var dl9xfu = aq5p4['substring'](f9uxa, ywk3v)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (dl9xfu) {
      {
        dl9xfu[0x0]['length'];
      }return w3kcy['processingInstruction'](dl9xfu[0x1], dl9xfu[0x2]), ywk3v + 0x2;
    }return -0x1;
  }return -0x1;
}function L9jre7cn() {}function L9qop4sh($mgto, lib861) {
  return $mgto['__proto__'] = lib861, $mgto;
}function L9yck3w7(zv_3k2, b8i1f) {
  var vkyw,
      rjce7 = [],
      a5qs = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (a5qs['lastIndex'] = b8i1f, a5qs['exec'](zv_3k2); vkyw = a5qs['exec'](zv_3k2);) if (rjce7['push'](vkyw), vkyw[0x1]) return rjce7;
}var L9y3vwz = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9hq4o = new RegExp('[\\-\\.0-9' + L9y3vwz['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9xs5ap = new RegExp('^' + L9y3vwz['source'] + L9hq4o['source'] + '*(?::' + L9y3vwz['source'] + L9hq4o['source'] + '*)?$'),
    L9newcr7 = 0x0,
    L9mq0oh4 = 0x1,
    L9fldub8 = 0x2,
    L9z3k2v = 0x3,
    L9c3w7k = 0x4,
    L9qhs4op = 0x5,
    L9l8bdfu = 0x6,
    L9ops4q = 0x7;L9h0oq4['prototype'] = { 'parse': function (m0qh$, kv3z2, vzky23) {
    var sad59x = this['domBuilder'];sad59x['startDocument'](), L9i1_62v(kv3z2, kv3z2 = {}), L9x59sad(m0qh$, kv3z2, vzky23, sad59x, this['errorHandler']), sad59x['endDocument']();
  } }, L9jre7cn['prototype'] = { 'setTagName': function (sho) {
    if (!L9xs5ap['test'](sho)) throw new Error('invalid tagName:' + sho);this['tagName'] = sho;
  }, 'add': function (pasq54, nywce, x4ps5) {
    if (!L9xs5ap['test'](pasq54)) throw new Error('invalid attribute:' + pasq54);this[this['length']++] = { 'qName': pasq54, 'value': nywce, 'offset': x4ps5 };
  }, 'length': 0x0, 'getLocalName': function (m0$qoh) {
    return this[m0$qoh]['localName'];
  }, 'getLocator': function (m04hq) {
    return this[m04hq]['locator'];
  }, 'getQName': function (v_2kz3) {
    return this[v_2kz3]['qName'];
  }, 'getURI': function (ho0m$t) {
    return this[ho0m$t]['uri'];
  }, 'getValue': function (tgo0m$) {
    return this[tgo0m$]['value'];
  } }, L9qop4sh({}, L9qop4sh['prototype']) instanceof L9qop4sh || (L9qop4sh = function (xa5u, wyk7) {
  function hs4p5() {}hs4p5['prototype'] = wyk7, hs4p5 = new hs4p5();for (wyk7 in xa5u) hs4p5[wyk7] = xa5u[wyk7];return hs4p5;
}), exports['XMLReader'] = L9h0oq4;