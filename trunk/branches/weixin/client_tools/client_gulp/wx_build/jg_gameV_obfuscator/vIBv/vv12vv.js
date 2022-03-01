var Q = wx.$v;
function vluy6hz() {}function vxpgwe(o2, pxvk57, c5m0, e8g, t43o2n) {
  function cj0mkd(wqepg) {
    if (wqepg > 0xffff) {
      wqepg -= 0x10000;var xp5v7g = 0xd800 + (wqepg >> 0xa),
          $4no3t = 0xdc00 + (0x3ff & wqepg);return String['fromCharCode'](xp5v7g, $4no3t);
    }return String['fromCharCode'](wqepg);
  }function o4$sif(hly6z) {
    var so$9fi = hly6z['slice'](0x1, -0x1);return so$9fi in c5m0 ? c5m0[so$9fi] : '#' === so$9fi['charAt'](0x0) ? cj0mkd(parseInt(so$9fi['substr'](0x1)['replace']('x', '0x'))) : (t43o2n['error']('entity not found:' + hly6z), hly6z);
  }function wpg5(xep) {
    if (xep > cdk0jm) {
      var f$9rsi = o2['substring'](cdk0jm, xep)['replace'](/&#?\w+;/g, o4$sif);uz68ly && t4$n3(cdk0jm), e8g['characters'](f$9rsi, 0x0, xep - cdk0jm), cdk0jm = xep;
    }
  }function t4$n3(pvg5xw, fi9s) {
    for (; pvg5xw >= so4f$ && (fi9s = km075c['exec'](o2));) nt324 = fi9s['index'], so4f$ = nt324 + fi9s[0x0]['length'], uz68ly['lineNumber']++;uz68ly['columnNumber'] = pvg5xw - nt324 + 0x1;
  }for (var nt324 = 0x0, so4f$ = 0x0, km075c = /.*(?:\r\n?|\n)|.*$/g, uz68ly = e8g['locator'], j0macd = [{ 'currentNSMap': pxvk57 }], y62_ = {}, cdk0jm = 0x0;;) {
    try {
      var v7kp5 = o2['indexOf']('<', cdk0jm);if (0x0 > v7kp5) {
        if (!o2['substr'](cdk0jm)['match'](/^\s*$/)) {
          var mkd0c = e8g['doc'],
              bzuel = mkd0c['createTextNode'](o2['substr'](cdk0jm));mkd0c['appendChild'](bzuel), e8g['currentElement'] = bzuel;
        }return;
      }switch (v7kp5 > cdk0jm && wpg5(v7kp5), o2['charAt'](v7kp5 + 0x1)) {case '/':
          var wqpgv = o2['indexOf']('>', v7kp5 + 0x3),
              kp75 = o2['substring'](v7kp5 + 0x2, wqpgv),
              md07 = j0macd['pop']();0x0 > wqpgv ? (kp75 = o2['substring'](v7kp5 + 0x2)['replace'](/[\s<].*/, ''), t43o2n['error']('end tag name: ' + kp75 + ' is not complete:' + md07['tagName']), wqpgv = v7kp5 + 0x1 + kp75['length']) : kp75['match'](/\s</) && (kp75 = kp75['replace'](/[\s<].*/, ''), t43o2n['error']('end tag name: ' + kp75 + ' maybe not complete'), wqpgv = v7kp5 + 0x1 + kp75['length']);var kcd7m = md07['localNSMap'],
              c50k7v = md07['tagName'] == kp75,
              bwgeqx = c50k7v || md07['tagName'] && md07['tagName']['toLowerCase']() == kp75['toLowerCase']();if (bwgeqx) {
            if (e8g['endElement'](md07['uri'], md07['localName'], kp75), kcd7m) {
              for (var no in kcd7m) e8g['endPrefixMapping'](no);
            }c50k7v || t43o2n['fatalError']('end tag name: ' + kp75 + ' is not match the current start tagName:' + md07['tagName']);
          } else j0macd['push'](md07);wqpgv++;break;case '?':
          uz68ly && t4$n3(v7kp5), wqpgv = vxebg(o2, v7kp5, e8g);break;case '!':
          uz68ly && t4$n3(v7kp5), wqpgv = vez8blu(o2, v7kp5, e8g, t43o2n);break;default:
          uz68ly && t4$n3(v7kp5);var y1hz = new vir9fs$(),
              htn1_ = j0macd[j0macd['length'] - 0x1]['currentNSMap'],
              wqpgv = vy6zh1(o2, v7kp5, y1hz, htn1_, o4$sif, t43o2n),
              djcm0 = y1hz['length'];if (!y1hz['closed'] && vxwpeg(o2, wqpgv, y1hz['tagName'], y62_) && (y1hz['closed'] = !0x0, c5m0['nbsp'] || t43o2n['warning']('unclosed xml attribute')), uz68ly && djcm0) {
            for (var $tn34o = vjmd0(uz68ly, {}), cd = 0x0; djcm0 > cd; cd++) {
              var i4s$f = y1hz[cd];t4$n3(i4s$f['offset']), i4s$f['locator'] = vjmd0(uz68ly, {});
            }e8g['locator'] = $tn34o, vlyu(y1hz, e8g, htn1_) && j0macd['push'](y1hz), e8g['locator'] = uz68ly;
          } else vlyu(y1hz, e8g, htn1_) && j0macd['push'](y1hz);'http://www.w3.org/1999/xhtml' !== y1hz['uri'] || y1hz['closed'] ? wqpgv++ : wqpgv = vfs$9o(o2, wqpgv, y1hz['tagName'], o4$sif, e8g);}
    } catch (n4s) {
      t43o2n['error']('element parse error: ' + n4s), wqpgv = -0x1;
    }wqpgv > cdk0jm ? cdk0jm = wqpgv : wpg5(Math['max'](v7kp5, cdk0jm) + 0x1);
  }
}function vjmd0(zh, uyhz6l) {
  return uyhz6l['lineNumber'] = zh['lineNumber'], uyhz6l['columnNumber'] = zh['columnNumber'], uyhz6l;
}function vy6zh1(k05c7v, oisf, wqge8, ck0d7m, g8ewq, q8uleb) {
  for (var h1y2t, k5mc70, to3n4$ = ++oisf, vqxpgw = vqgwpx;;) {
    var bw8eqg = k05c7v['charAt'](to3n4$);switch (bw8eqg) {case '=':
        if (vqxpgw === vo$34s) h1y2t = k05c7v['slice'](oisf, to3n4$), vqxpgw = vqel8b;else {
          if (vqxpgw !== v_123t) throw new Error('attribute equal must after attrName');vqxpgw = vqel8b;
        }break;case '\x27':case '\x22':
        if (vqxpgw === vqel8b || vqxpgw === vo$34s) {
          if (vqxpgw === vo$34s && (q8uleb['warning']('attribute value must after "="'), h1y2t = k05c7v['slice'](oisf, to3n4$)), oisf = to3n4$ + 0x1, to3n4$ = k05c7v['indexOf'](bw8eqg, oisf), !(to3n4$ > 0x0)) throw new Error('attribute value no end \'' + bw8eqg + '\' match');k5mc70 = k05c7v['slice'](oisf, to3n4$)['replace'](/&#?\w+;/g, g8ewq), wqge8['add'](h1y2t, k5mc70, oisf - 0x1), vqxpgw = vo$4ns3;
        } else {
          if (vqxpgw != vjk0mc) throw new Error('attribute value must after "="');k5mc70 = k05c7v['slice'](oisf, to3n4$)['replace'](/&#?\w+;/g, g8ewq), wqge8['add'](h1y2t, k5mc70, oisf), q8uleb['warning']('attribute "' + h1y2t + '" missed start quot(' + bw8eqg + ')!!'), oisf = to3n4$ + 0x1, vqxpgw = vo$4ns3;
        }break;case '/':
        switch (vqxpgw) {case vqgwpx:
            wqge8['setTagName'](k05c7v['slice'](oisf, to3n4$));case vo$4ns3:case vu8zbl:case vkdc:
            vqxpgw = vkdc, wqge8['closed'] = !0x0;case vjk0mc:case vo$34s:case v_123t:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return q8uleb['error']('unexpected end of input'), vqxpgw == vqgwpx && wqge8['setTagName'](k05c7v['slice'](oisf, to3n4$)), to3n4$;case '>':
        switch (vqxpgw) {case vqgwpx:
            wqge8['setTagName'](k05c7v['slice'](oisf, to3n4$));case vo$4ns3:case vu8zbl:case vkdc:
            break;case vjk0mc:case vo$34s:
            k5mc70 = k05c7v['slice'](oisf, to3n4$), '/' === k5mc70['slice'](-0x1) && (wqge8['closed'] = !0x0, k5mc70 = k5mc70['slice'](0x0, -0x1));case v_123t:
            vqxpgw === v_123t && (k5mc70 = h1y2t), vqxpgw == vjk0mc ? (q8uleb['warning']('attribute "' + k5mc70 + '" missed quot(")!!'), wqge8['add'](h1y2t, k5mc70['replace'](/&#?\w+;/g, g8ewq), oisf)) : ('http://www.w3.org/1999/xhtml' === ck0d7m[''] && k5mc70['match'](/^(?:disabled|checked|selected)$/i) || q8uleb['warning']('attribute "' + k5mc70 + '" missed value!! "' + k5mc70 + '" instead!!'), wqge8['add'](k5mc70, k5mc70, oisf));break;case vqel8b:
            throw new Error('attribute value missed!!');}return to3n4$;case '\u0080':
        bw8eqg = '\x20';default:
        if ('\x20' >= bw8eqg) switch (vqxpgw) {case vqgwpx:
            wqge8['setTagName'](k05c7v['slice'](oisf, to3n4$)), vqxpgw = vu8zbl;break;case vo$34s:
            h1y2t = k05c7v['slice'](oisf, to3n4$), vqxpgw = v_123t;break;case vjk0mc:
            var k5mc70 = k05c7v['slice'](oisf, to3n4$)['replace'](/&#?\w+;/g, g8ewq);q8uleb['warning']('attribute "' + k5mc70 + '" missed quot(")!!'), wqge8['add'](h1y2t, k5mc70, oisf);case vo$4ns3:
            vqxpgw = vu8zbl;} else switch (vqxpgw) {case v_123t:
            {
              wqge8['tagName'];
            }'http://www.w3.org/1999/xhtml' === ck0d7m[''] && h1y2t['match'](/^(?:disabled|checked|selected)$/i) || q8uleb['warning']('attribute "' + h1y2t + '" missed value!! "' + h1y2t + '" instead2!!'), wqge8['add'](h1y2t, h1y2t, oisf), oisf = to3n4$, vqxpgw = vo$34s;break;case vo$4ns3:
            q8uleb['warning']('attribute space is required"' + h1y2t + '\x22!!');case vu8zbl:
            vqxpgw = vo$34s, oisf = to3n4$;break;case vqel8b:
            vqxpgw = vjk0mc, oisf = to3n4$;break;case vkdc:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}to3n4$++;
  }
}function vlyu(u8z6lb, b8ulz, xgpqew) {
  for (var qbelu8 = u8z6lb['tagName'], xgp5wv = null, on43$t = u8z6lb['length']; on43$t--;) {
    var ulzy6h = u8z6lb[on43$t],
        zhy6ul = ulzy6h['qName'],
        px7g5v = ulzy6h['value'],
        r$i = zhy6ul['indexOf'](':');if (r$i > 0x0) var cdam0 = ulzy6h['prefix'] = zhy6ul['slice'](0x0, r$i),
        o$s4if = zhy6ul['slice'](r$i + 0x1),
        jdam = 'xmlns' === cdam0 && o$s4if;else o$s4if = zhy6ul, cdam0 = null, jdam = 'xmlns' === zhy6ul && '';ulzy6h['localName'] = o$s4if, jdam !== !0x1 && (null == xgp5wv && (xgp5wv = {}, vbwgx(xgpqew, xgpqew = {})), xgpqew[jdam] = xgp5wv[jdam] = px7g5v, ulzy6h['uri'] = 'http://www.w3.org/2000/xmlns/', b8ulz['startPrefixMapping'](jdam, px7g5v));
  }for (var on43$t = u8z6lb['length']; on43$t--;) {
    ulzy6h = u8z6lb[on43$t];var cdam0 = ulzy6h['prefix'];cdam0 && ('xml' === cdam0 && (ulzy6h['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== cdam0 && (ulzy6h['uri'] = xgpqew[cdam0 || '']));
  }var r$i = qbelu8['indexOf'](':');r$i > 0x0 ? (cdam0 = u8z6lb['prefix'] = qbelu8['slice'](0x0, r$i), o$s4if = u8z6lb['localName'] = qbelu8['slice'](r$i + 0x1)) : (cdam0 = null, o$s4if = u8z6lb['localName'] = qbelu8);var c570m = u8z6lb['uri'] = xgpqew[cdam0 || ''];if (b8ulz['startElement'](c570m, o$s4if, qbelu8, u8z6lb), !u8z6lb['closed']) return u8z6lb['currentNSMap'] = xgpqew, u8z6lb['localNSMap'] = xgp5wv, !0x0;if (b8ulz['endElement'](c570m, o$s4if, qbelu8), xgp5wv) {
    for (cdam0 in xgp5wv) b8ulz['endPrefixMapping'](cdam0);
  }
}function vfs$9o(q8bl, mca0j, $fsi9r, sirf$, qe8lu) {
  if (/^(?:script|textarea)$/i['test']($fsi9r)) {
    var qbx = q8bl['indexOf']('</' + $fsi9r + '>', mca0j),
        ylzu = q8bl['substring'](mca0j + 0x1, qbx);if (/[&<]/['test'](ylzu)) return (/^script$/i['test']($fsi9r) ? (qe8lu['characters'](ylzu, 0x0, ylzu['length']), qbx) : (ylzu = ylzu['replace'](/&#?\w+;/g, sirf$), qe8lu['characters'](ylzu, 0x0, ylzu['length']), qbx)
    );
  }return mca0j + 0x1;
}function vxwpeg(n213, fo$si9, kxv75p, fsri$9) {
  var p7gx5v = fsri$9[kxv75p];return null == p7gx5v && (p7gx5v = n213['lastIndexOf']('</' + kxv75p + '>'), fo$si9 > p7gx5v && (p7gx5v = n213['lastIndexOf']('</' + kxv75p)), fsri$9[kxv75p] = p7gx5v), fo$si9 > p7gx5v;
}function vbwgx(d0jkc, $sr9f) {
  for (var pv7g5 in d0jkc) $sr9f[pv7g5] = d0jkc[pv7g5];
}function vez8blu(_yt2, gwb, pwv5x, $srfi9) {
  var kmd0cj = _yt2['charAt'](gwb + 0x2);switch (kmd0cj) {case '-':
      if ('-' === _yt2['charAt'](gwb + 0x3)) {
        var xqgwep = _yt2['indexOf']('-->', gwb + 0x4);return xqgwep > gwb ? (pwv5x['comment'](_yt2, gwb + 0x4, xqgwep - gwb - 0x4), xqgwep + 0x3) : ($srfi9['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == _yt2['substr'](gwb + 0x3, 0x6)) {
        var xqgwep = _yt2['indexOf'](']]>', gwb + 0x9);return pwv5x['startCDATA'](), pwv5x['characters'](_yt2, gwb + 0x9, xqgwep - gwb - 0x9), pwv5x['endCDATA'](), xqgwep + 0x3;
      }var i3$ = vkvp750(_yt2, gwb),
          ylzh6 = i3$['length'];if (ylzh6 > 0x1 && /!doctype/i['test'](i3$[0x0][0x0])) {
        var h21n = i3$[0x1][0x0],
            o34$n = ylzh6 > 0x3 && /^public$/i['test'](i3$[0x2][0x0]) && i3$[0x3][0x0],
            x5pvk7 = ylzh6 > 0x4 && i3$[0x4][0x0],
            n$s = i3$[ylzh6 - 0x1];return pwv5x['startDTD'](h21n, o34$n && o34$n['replace'](/^(['"])(.*?)\1$/, '$2'), x5pvk7 && x5pvk7['replace'](/^(['"])(.*?)\1$/, '$2')), pwv5x['endDTD'](), n$s['index'] + n$s[0x0]['length'];
      }}return -0x1;
}function vxebg(yt1_2, n21t_h, $ot) {
  var io3$ = yt1_2['indexOf']('?>', n21t_h);if (io3$) {
    var qewpxg = yt1_2['substring'](n21t_h, io3$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qewpxg) {
      {
        qewpxg[0x0]['length'];
      }return $ot['processingInstruction'](qewpxg[0x1], qewpxg[0x2]), io3$ + 0x2;
    }return -0x1;
  }return -0x1;
}function vir9fs$() {}function vf4i$(lbez8, _h6y) {
  return lbez8['__proto__'] = _h6y, lbez8;
}function vkvp750(o34s$, yh61lz) {
  var z8y6u,
      nt2_13 = [],
      o43i$s = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (o43i$s['lastIndex'] = yh61lz, o43i$s['exec'](o34s$); z8y6u = o43i$s['exec'](o34s$);) if (nt2_13['push'](z8y6u), z8y6u[0x1]) return nt2_13;
}var vb8zl6 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vvwqpgx = new RegExp('[\\-\\.0-9' + vb8zl6['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    veqxbgw = new RegExp('^' + vb8zl6['source'] + vvwqpgx['source'] + '*(?::' + vb8zl6['source'] + vvwqpgx['source'] + '*)?$'),
    vqgwpx = 0x0,
    vo$34s = 0x1,
    v_123t = 0x2,
    vqel8b = 0x3,
    vjk0mc = 0x4,
    vo$4ns3 = 0x5,
    vu8zbl = 0x6,
    vkdc = 0x7;vluy6hz['prototype'] = { 'parse': function (n2t_31, m0dc, cdk07) {
    var o24t = this['domBuilder'];o24t['startDocument'](), vbwgx(m0dc, m0dc = {}), vxpgwe(n2t_31, m0dc, cdk07, o24t, this['errorHandler']), o24t['endDocument']();
  } }, vir9fs$['prototype'] = { 'setTagName': function (zl8ube) {
    if (!veqxbgw['test'](zl8ube)) throw new Error('invalid tagName:' + zl8ube);this['tagName'] = zl8ube;
  }, 'add': function (djca, cdm7k, bexw) {
    if (!veqxbgw['test'](djca)) throw new Error('invalid attribute:' + djca);this[this['length']++] = { 'qName': djca, 'value': cdm7k, 'offset': bexw };
  }, 'length': 0x0, 'getLocalName': function (wpxqeg) {
    return this[wpxqeg]['localName'];
  }, 'getLocator': function (u8bzle) {
    return this[u8bzle]['locator'];
  }, 'getQName': function (lzbue8) {
    return this[lzbue8]['qName'];
  }, 'getURI': function (_61h) {
    return this[_61h]['uri'];
  }, 'getValue': function (k507) {
    return this[k507]['value'];
  } }, vf4i$({}, vf4i$['prototype']) instanceof vf4i$ || (vf4i$ = function (q8uelb, f$9rs) {
  function l6uhz() {}l6uhz['prototype'] = f$9rs, l6uhz = new l6uhz();for (f$9rs in q8uelb) l6uhz[f$9rs] = q8uelb[f$9rs];return l6uhz;
}), exports['XMLReader'] = vluy6hz;