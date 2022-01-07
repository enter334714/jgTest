var W = wx.$l;
function L9sd2b8$() {}function L9_4x8y(f9tq5, bhjkz, basd2, l59tfq, htljq) {
  function mi3c(kd2$a) {
    if (kd2$a > 0xffff) {
      kd2$a -= 0x10000;var yxn_48 = 0xd800 + (kd2$a >> 0xa),
          zq5tlh = 0xdc00 + (0x3ff & kd2$a);return String['fromCharCode'](yxn_48, zq5tlh);
    }return String['fromCharCode'](kd2$a);
  }function haqzj(kzab) {
    var r3xn0y = kzab['slice'](0x1, -0x1);return r3xn0y in basd2 ? basd2[r3xn0y] : '#' === r3xn0y['charAt'](0x0) ? mi3c(parseInt(r3xn0y['substr'](0x1)['replace']('x', '0x'))) : (htljq['error']('entity not found:' + kzab), kzab);
  }function v971oe(x_4ns8) {
    if (x_4ns8 > _xns48) {
      var y3r0xn = f9tq5['substring'](_xns48, x_4ns8)['replace'](/&#?\w+;/g, haqzj);ak2hjb && ba2jkh(_xns48), l59tfq['characters'](y3r0xn, 0x0, x_4ns8 - _xns48), _xns48 = x_4ns8;
    }
  }function ba2jkh(eu6gv, mr3wci) {
    for (; eu6gv >= x_ny30 && (mr3wci = qjkzlh['exec'](f9tq5));) cm0r3 = mr3wci['index'], x_ny30 = cm0r3 + mr3wci[0x0]['length'], ak2hjb['lineNumber']++;ak2hjb['columnNumber'] = eu6gv - cm0r3 + 0x1;
  }for (var cm0r3 = 0x0, x_ny30 = 0x0, qjkzlh = /.*(?:\r\n?|\n)|.*$/g, ak2hjb = l59tfq['locator'], htzjlq = [{ 'currentNSMap': bhjkz }], a2kbd$ = {}, _xns48 = 0x0;;) {
    try {
      var dj2bak = f9tq5['indexOf']('<', _xns48);if (0x0 > dj2bak) {
        if (!f9tq5['substr'](_xns48)['match'](/^\s*$/)) {
          var jtzql = l59tfq['doc'],
              n30r = jtzql['createTextNode'](f9tq5['substr'](_xns48));jtzql['appendChild'](n30r), l59tfq['currentElement'] = n30r;
        }return;
      }switch (dj2bak > _xns48 && v971oe(dj2bak), f9tq5['charAt'](dj2bak + 0x1)) {case '/':
          var lzkqj = f9tq5['indexOf']('>', dj2bak + 0x3),
              t57o = f9tq5['substring'](dj2bak + 0x2, lzkqj),
              qh5ztl = htzjlq['pop']();0x0 > lzkqj ? (t57o = f9tq5['substring'](dj2bak + 0x2)['replace'](/[\s<].*/, ''), htljq['error']('end tag name: ' + t57o + ' is not complete:' + qh5ztl['tagName']), lzkqj = dj2bak + 0x1 + t57o['length']) : t57o['match'](/\s</) && (t57o = t57o['replace'](/[\s<].*/, ''), htljq['error']('end tag name: ' + t57o + ' maybe not complete'), lzkqj = dj2bak + 0x1 + t57o['length']);var $sba2d = qh5ztl['localNSMap'],
              klzhqj = qh5ztl['tagName'] == t57o,
              s8_$ = klzhqj || qh5ztl['tagName'] && qh5ztl['tagName']['toLowerCase']() == t57o['toLowerCase']();if (s8_$) {
            if (l59tfq['endElement'](qh5ztl['uri'], qh5ztl['localName'], t57o), $sba2d) {
              for (var ka2bjh in $sba2d) l59tfq['endPrefixMapping'](ka2bjh);
            }klzhqj || htljq['fatalError']('end tag name: ' + t57o + ' is not match the current start tagName:' + qh5ztl['tagName']);
          } else htzjlq['push'](qh5ztl);lzkqj++;break;case '?':
          ak2hjb && ba2jkh(dj2bak), lzkqj = L9_x3n(f9tq5, dj2bak, l59tfq);break;case '!':
          ak2hjb && ba2jkh(dj2bak), lzkqj = L9m3c0ir(f9tq5, dj2bak, l59tfq, htljq);break;default:
          ak2hjb && ba2jkh(dj2bak);var dak2b$ = new L9vo97f(),
              s_x = htzjlq[htzjlq['length'] - 0x1]['currentNSMap'],
              lzkqj = L9kjah2(f9tq5, dj2bak, dak2b$, s_x, haqzj, htljq),
              jbkazh = dak2b$['length'];if (!dak2b$['closed'] && L9g1eu(f9tq5, lzkqj, dak2b$['tagName'], a2kbd$) && (dak2b$['closed'] = !0x0, basd2['nbsp'] || htljq['warning']('unclosed xml attribute')), ak2hjb && jbkazh) {
            for (var x0rc3y = L9i3rm(ak2hjb, {}), of5 = 0x0; jbkazh > of5; of5++) {
              var pueg1 = dak2b$[of5];ba2jkh(pueg1['offset']), pueg1['locator'] = L9i3rm(ak2hjb, {});
            }l59tfq['locator'] = x0rc3y, L9dbs$a2(dak2b$, l59tfq, s_x) && htzjlq['push'](dak2b$), l59tfq['locator'] = ak2hjb;
          } else L9dbs$a2(dak2b$, l59tfq, s_x) && htzjlq['push'](dak2b$);'http://www.w3.org/1999/xhtml' !== dak2b$['uri'] || dak2b$['closed'] ? lzkqj++ : lzkqj = L9hkqaj(f9tq5, lzkqj, dak2b$['tagName'], haqzj, l59tfq);}
    } catch (x_n0) {
      htljq['error']('element parse error: ' + x_n0), lzkqj = -0x1;
    }lzkqj > _xns48 ? _xns48 = lzkqj : v971oe(Math['max'](dj2bak, _xns48) + 0x1);
  }
}function L9i3rm(wcm3ri, u1eg6p) {
  return u1eg6p['lineNumber'] = wcm3ri['lineNumber'], u1eg6p['columnNumber'] = wcm3ri['columnNumber'], u1eg6p;
}function L9kjah2(basd$, m30cr, rnx03y, o7tf59, $k2bda, e1gov) {
  for (var ep61u, abzjhk, ego7v = ++m30cr, xs8_4n = L9hqtzjl;;) {
    var _s8n4 = basd$['charAt'](ego7v);switch (_s8n4) {case '=':
        if (xs8_4n === L9f7o5v9) ep61u = basd$['slice'](m30cr, ego7v), xs8_4n = L9hlqzjt;else {
          if (xs8_4n !== L9jtlzqh) throw new Error('attribute equal must after attrName');xs8_4n = L9hlqzjt;
        }break;case '\x27':case '\x22':
        if (xs8_4n === L9hlqzjt || xs8_4n === L9f7o5v9) {
          if (xs8_4n === L9f7o5v9 && (e1gov['warning']('attribute value must after "="'), ep61u = basd$['slice'](m30cr, ego7v)), m30cr = ego7v + 0x1, ego7v = basd$['indexOf'](_s8n4, m30cr), !(ego7v > 0x0)) throw new Error('attribute value no end \'' + _s8n4 + '\' match');abzjhk = basd$['slice'](m30cr, ego7v)['replace'](/&#?\w+;/g, $k2bda), rnx03y['add'](ep61u, abzjhk, m30cr - 0x1), xs8_4n = L9da$2s;
        } else {
          if (xs8_4n != L9dsb8) throw new Error('attribute value must after "="');abzjhk = basd$['slice'](m30cr, ego7v)['replace'](/&#?\w+;/g, $k2bda), rnx03y['add'](ep61u, abzjhk, m30cr), e1gov['warning']('attribute "' + ep61u + '" missed start quot(' + _s8n4 + ')!!'), m30cr = ego7v + 0x1, xs8_4n = L9da$2s;
        }break;case '/':
        switch (xs8_4n) {case L9hqtzjl:
            rnx03y['setTagName'](basd$['slice'](m30cr, ego7v));case L9da$2s:case L9hzl5tq:case L9b2aj:
            xs8_4n = L9b2aj, rnx03y['closed'] = !0x0;case L9dsb8:case L9f7o5v9:case L9jtlzqh:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return e1gov['error']('unexpected end of input'), xs8_4n == L9hqtzjl && rnx03y['setTagName'](basd$['slice'](m30cr, ego7v)), ego7v;case '>':
        switch (xs8_4n) {case L9hqtzjl:
            rnx03y['setTagName'](basd$['slice'](m30cr, ego7v));case L9da$2s:case L9hzl5tq:case L9b2aj:
            break;case L9dsb8:case L9f7o5v9:
            abzjhk = basd$['slice'](m30cr, ego7v), '/' === abzjhk['slice'](-0x1) && (rnx03y['closed'] = !0x0, abzjhk = abzjhk['slice'](0x0, -0x1));case L9jtlzqh:
            xs8_4n === L9jtlzqh && (abzjhk = ep61u), xs8_4n == L9dsb8 ? (e1gov['warning']('attribute "' + abzjhk + '" missed quot(")!!'), rnx03y['add'](ep61u, abzjhk['replace'](/&#?\w+;/g, $k2bda), m30cr)) : ('http://www.w3.org/1999/xhtml' === o7tf59[''] && abzjhk['match'](/^(?:disabled|checked|selected)$/i) || e1gov['warning']('attribute "' + abzjhk + '" missed value!! "' + abzjhk + '" instead!!'), rnx03y['add'](abzjhk, abzjhk, m30cr));break;case L9hlqzjt:
            throw new Error('attribute value missed!!');}return ego7v;case '\u0080':
        _s8n4 = '\x20';default:
        if ('\x20' >= _s8n4) switch (xs8_4n) {case L9hqtzjl:
            rnx03y['setTagName'](basd$['slice'](m30cr, ego7v)), xs8_4n = L9hzl5tq;break;case L9f7o5v9:
            ep61u = basd$['slice'](m30cr, ego7v), xs8_4n = L9jtlzqh;break;case L9dsb8:
            var abzjhk = basd$['slice'](m30cr, ego7v)['replace'](/&#?\w+;/g, $k2bda);e1gov['warning']('attribute "' + abzjhk + '" missed quot(")!!'), rnx03y['add'](ep61u, abzjhk, m30cr);case L9da$2s:
            xs8_4n = L9hzl5tq;} else switch (xs8_4n) {case L9jtlzqh:
            {
              rnx03y['tagName'];
            }'http://www.w3.org/1999/xhtml' === o7tf59[''] && ep61u['match'](/^(?:disabled|checked|selected)$/i) || e1gov['warning']('attribute "' + ep61u + '" missed value!! "' + ep61u + '" instead2!!'), rnx03y['add'](ep61u, ep61u, m30cr), m30cr = ego7v, xs8_4n = L9f7o5v9;break;case L9da$2s:
            e1gov['warning']('attribute space is required"' + ep61u + '\x22!!');case L9hzl5tq:
            xs8_4n = L9f7o5v9, m30cr = ego7v;break;case L9hlqzjt:
            xs8_4n = L9dsb8, m30cr = ego7v;break;case L9b2aj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ego7v++;
  }
}function L9dbs$a2(n8s4$_, ql5fzt, v7e1gu) {
  for (var ajhzbk = n8s4$_['tagName'], _n8x = null, wci3m = n8s4$_['length']; wci3m--;) {
    var hl5tqz = n8s4$_[wci3m],
        _sn48 = hl5tqz['qName'],
        khlzj = hl5tqz['value'],
        mwcri3 = _sn48['indexOf'](':');if (mwcri3 > 0x0) var d$a2k = hl5tqz['prefix'] = _sn48['slice'](0x0, mwcri3),
        s824$d = _sn48['slice'](mwcri3 + 0x1),
        klhqz = 'xmlns' === d$a2k && s824$d;else s824$d = _sn48, d$a2k = null, klhqz = 'xmlns' === _sn48 && '';hl5tqz['localName'] = s824$d, klhqz !== !0x1 && (null == _n8x && (_n8x = {}, L9jhzlqt(v7e1gu, v7e1gu = {})), v7e1gu[klhqz] = _n8x[klhqz] = khlzj, hl5tqz['uri'] = 'http://www.w3.org/2000/xmlns/', ql5fzt['startPrefixMapping'](klhqz, khlzj));
  }for (var wci3m = n8s4$_['length']; wci3m--;) {
    hl5tqz = n8s4$_[wci3m];var d$a2k = hl5tqz['prefix'];d$a2k && ('xml' === d$a2k && (hl5tqz['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== d$a2k && (hl5tqz['uri'] = v7e1gu[d$a2k || '']));
  }var mwcri3 = ajhzbk['indexOf'](':');mwcri3 > 0x0 ? (d$a2k = n8s4$_['prefix'] = ajhzbk['slice'](0x0, mwcri3), s824$d = n8s4$_['localName'] = ajhzbk['slice'](mwcri3 + 0x1)) : (d$a2k = null, s824$d = n8s4$_['localName'] = ajhzbk);var kqhazj = n8s4$_['uri'] = v7e1gu[d$a2k || ''];if (ql5fzt['startElement'](kqhazj, s824$d, ajhzbk, n8s4$_), !n8s4$_['closed']) return n8s4$_['currentNSMap'] = v7e1gu, n8s4$_['localNSMap'] = _n8x, !0x0;if (ql5fzt['endElement'](kqhazj, s824$d, ajhzbk), _n8x) {
    for (d$a2k in _n8x) ql5fzt['endPrefixMapping'](d$a2k);
  }
}function L9hkqaj(cmri3, khjzlq, lq9, htljqz, r3wim) {
  if (/^(?:script|textarea)$/i['test'](lq9)) {
    var y_03xn = cmri3['indexOf']('</' + lq9 + '>', khjzlq),
        xr30cy = cmri3['substring'](khjzlq + 0x1, y_03xn);if (/[&<]/['test'](xr30cy)) return (/^script$/i['test'](lq9) ? (r3wim['characters'](xr30cy, 0x0, xr30cy['length']), y_03xn) : (xr30cy = xr30cy['replace'](/&#?\w+;/g, htljqz), r3wim['characters'](xr30cy, 0x0, xr30cy['length']), y_03xn)
    );
  }return khjzlq + 0x1;
}function L9g1eu(fo71v9, mcri3, ha2b, $bsda) {
  var e16guv = $bsda[ha2b];return null == e16guv && (e16guv = fo71v9['lastIndexOf']('</' + ha2b + '>'), mcri3 > e16guv && (e16guv = fo71v9['lastIndexOf']('</' + ha2b)), $bsda[ha2b] = e16guv), mcri3 > e16guv;
}function L9jhzlqt(dbka2$, vgeu) {
  for (var nx04y_ in dbka2$) vgeu[nx04y_] = dbka2$[nx04y_];
}function L9m3c0ir(jzhqtl, fl9tq, xn30_y, ba2kjh) {
  var s$4d2 = jzhqtl['charAt'](fl9tq + 0x2);switch (s$4d2) {case '-':
      if ('-' === jzhqtl['charAt'](fl9tq + 0x3)) {
        var kjqzl = jzhqtl['indexOf']('-->', fl9tq + 0x4);return kjqzl > fl9tq ? (xn30_y['comment'](jzhqtl, fl9tq + 0x4, kjqzl - fl9tq - 0x4), kjqzl + 0x3) : (ba2kjh['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jzhqtl['substr'](fl9tq + 0x3, 0x6)) {
        var kjqzl = jzhqtl['indexOf'](']]>', fl9tq + 0x9);return xn30_y['startCDATA'](), xn30_y['characters'](jzhqtl, fl9tq + 0x9, kjqzl - fl9tq - 0x9), xn30_y['endCDATA'](), kjqzl + 0x3;
      }var v971fo = L9$48d2s(jzhqtl, fl9tq),
          m3cirw = v971fo['length'];if (m3cirw > 0x1 && /!doctype/i['test'](v971fo[0x0][0x0])) {
        var flqt5 = v971fo[0x1][0x0],
            hjka2 = m3cirw > 0x3 && /^public$/i['test'](v971fo[0x2][0x0]) && v971fo[0x3][0x0],
            g71evo = m3cirw > 0x4 && v971fo[0x4][0x0],
            hjqakz = v971fo[m3cirw - 0x1];return xn30_y['startDTD'](flqt5, hjka2 && hjka2['replace'](/^(['"])(.*?)\1$/, '$2'), g71evo && g71evo['replace'](/^(['"])(.*?)\1$/, '$2')), xn30_y['endDTD'](), hjqakz['index'] + hjqakz[0x0]['length'];
      }}return -0x1;
}function L9_x3n($d, ry3n0x, bda$k) {
  var $2kadb = $d['indexOf']('?>', ry3n0x);if ($2kadb) {
    var r0c3xy = $d['substring'](ry3n0x, $2kadb)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (r0c3xy) {
      {
        r0c3xy[0x0]['length'];
      }return bda$k['processingInstruction'](r0c3xy[0x1], r0c3xy[0x2]), $2kadb + 0x2;
    }return -0x1;
  }return -0x1;
}function L9vo97f() {}function L9a2$bkd(o5f9lt, _xsn4) {
  return o5f9lt['__proto__'] = _xsn4, o5f9lt;
}function L9$48d2s(s428d$, v6eug1) {
  var d24$,
      f5qtlz = [],
      bk2$a = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bk2$a['lastIndex'] = v6eug1, bk2$a['exec'](s428d$); d24$ = bk2$a['exec'](s428d$);) if (f5qtlz['push'](d24$), d24$[0x1]) return f5qtlz;
}var L9sn_84$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    L9hbkj = new RegExp('[\\-\\.0-9' + L9sn_84$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    L9aqzkhj = new RegExp('^' + L9sn_84$['source'] + L9hbkj['source'] + '*(?::' + L9sn_84$['source'] + L9hbkj['source'] + '*)?$'),
    L9hqtzjl = 0x0,
    L9f7o5v9 = 0x1,
    L9jtlzqh = 0x2,
    L9hlqzjt = 0x3,
    L9dsb8 = 0x4,
    L9da$2s = 0x5,
    L9hzl5tq = 0x6,
    L9b2aj = 0x7;L9sd2b8$['prototype'] = { 'parse': function (v9o17f, s8xn4_, d8$s) {
    var nxy48 = this['domBuilder'];nxy48['startDocument'](), L9jhzlqt(s8xn4_, s8xn4_ = {}), L9_4x8y(v9o17f, s8xn4_, d8$s, nxy48, this['errorHandler']), nxy48['endDocument']();
  } }, L9vo97f['prototype'] = { 'setTagName': function (n4yx) {
    if (!L9aqzkhj['test'](n4yx)) throw new Error('invalid tagName:' + n4yx);this['tagName'] = n4yx;
  }, 'add': function (wicmr3, qlftz, fov971) {
    if (!L9aqzkhj['test'](wicmr3)) throw new Error('invalid attribute:' + wicmr3);this[this['length']++] = { 'qName': wicmr3, 'value': qlftz, 'offset': fov971 };
  }, 'length': 0x0, 'getLocalName': function (cmy30) {
    return this[cmy30]['localName'];
  }, 'getLocator': function (abdj) {
    return this[abdj]['locator'];
  }, 'getQName': function (ft57) {
    return this[ft57]['qName'];
  }, 'getURI': function (t5fq) {
    return this[t5fq]['uri'];
  }, 'getValue': function (f5tz) {
    return this[f5tz]['value'];
  } }, L9a2$bkd({}, L9a2$bkd['prototype']) instanceof L9a2$bkd || (L9a2$bkd = function (s24$8d, lzqh5t) {
  function _sxn() {}_sxn['prototype'] = lzqh5t, _sxn = new _sxn();for (lzqh5t in s24$8d) _sxn[lzqh5t] = s24$8d[lzqh5t];return _sxn;
}), exports['XMLReader'] = L9sd2b8$;