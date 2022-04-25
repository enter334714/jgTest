var S = wx.$J;
function j1_d298() {}function j1_pwjn5(ly0gco, soy6g, iz298, b0cu4l, u0oclg) {
  function e3p5jn(j5wv3) {
    if (j5wv3 > 0xffff) {
      j5wv3 -= 0x10000;var x89i2d = 0xd800 + (j5wv3 >> 0xa),
          f1dmqr = 0xdc00 + (0x3ff & j5wv3);return String['fromCharCode'](x89i2d, f1dmqr);
    }return String['fromCharCode'](j5wv3);
  }function jw53v(r1m67) {
    var oglu0 = r1m67['slice'](0x1, -0x1);return oglu0 in iz298 ? iz298[oglu0] : '#' === oglu0['charAt'](0x0) ? e3p5jn(parseInt(oglu0['substr'](0x1)['replace']('x', '0x'))) : (u0oclg['error']('entity not found:' + r1m67), r1m67);
  }function o0lgcu(a9$zxh) {
    if (a9$zxh > rf67) {
      var a9x$zh = ly0gco['substring'](rf67, a9$zxh)['replace'](/&#?\w+;/g, jw53v);k6yos && clug0(rf67), b0cu4l['characters'](a9x$zh, 0x0, a9$zxh - rf67), rf67 = a9$zxh;
    }
  }function clug0(a9izxh, bne4up) {
    for (; a9izxh >= nebp45 && (bne4up = rmfqd1['exec'](ly0gco));) dqmf12 = bne4up['index'], nebp45 = dqmf12 + bne4up[0x0]['length'], k6yos['lineNumber']++;k6yos['columnNumber'] = a9izxh - dqmf12 + 0x1;
  }for (var dqmf12 = 0x0, nebp45 = 0x0, rmfqd1 = /.*(?:\r\n?|\n)|.*$/g, k6yos = b0cu4l['locator'], q128i = [{ 'currentNSMap': soy6g }], clg0 = {}, rf67 = 0x0;;) {
    try {
      var l4eub = ly0gco['indexOf']('<', rf67);if (0x0 > l4eub) {
        if (!ly0gco['substr'](rf67)['match'](/^\s*$/)) {
          var ycg0s = b0cu4l['doc'],
              lcb0 = ycg0s['createTextNode'](ly0gco['substr'](rf67));ycg0s['appendChild'](lcb0), b0cu4l['currentElement'] = lcb0;
        }return;
      }switch (l4eub > rf67 && o0lgcu(l4eub), ly0gco['charAt'](l4eub + 0x1)) {case '/':
          var eb5p4n = ly0gco['indexOf']('>', l4eub + 0x3),
              m6f7kr = ly0gco['substring'](l4eub + 0x2, eb5p4n),
              lo0gc = q128i['pop']();0x0 > eb5p4n ? (m6f7kr = ly0gco['substring'](l4eub + 0x2)['replace'](/[\s<].*/, ''), u0oclg['error']('end tag name: ' + m6f7kr + ' is not complete:' + lo0gc['tagName']), eb5p4n = l4eub + 0x1 + m6f7kr['length']) : m6f7kr['match'](/\s</) && (m6f7kr = m6f7kr['replace'](/[\s<].*/, ''), u0oclg['error']('end tag name: ' + m6f7kr + ' maybe not complete'), eb5p4n = l4eub + 0x1 + m6f7kr['length']);var f2qdm = lo0gc['localNSMap'],
              d18iq = lo0gc['tagName'] == m6f7kr,
              ejpb5n = d18iq || lo0gc['tagName'] && lo0gc['tagName']['toLowerCase']() == m6f7kr['toLowerCase']();if (ejpb5n) {
            if (b0cu4l['endElement'](lo0gc['uri'], lo0gc['localName'], m6f7kr), f2qdm) {
              for (var njpb5e in f2qdm) b0cu4l['endPrefixMapping'](njpb5e);
            }d18iq || u0oclg['fatalError']('end tag name: ' + m6f7kr + ' is not match the current start tagName:' + lo0gc['tagName']);
          } else q128i['push'](lo0gc);eb5p4n++;break;case '?':
          k6yos && clug0(l4eub), eb5p4n = j1_cguo0(ly0gco, l4eub, b0cu4l);break;case '!':
          k6yos && clug0(l4eub), eb5p4n = j1_xd9i(ly0gco, l4eub, b0cu4l, u0oclg);break;default:
          k6yos && clug0(l4eub);var eulp4 = new j1_gsyok(),
              np3j = q128i[q128i['length'] - 0x1]['currentNSMap'],
              eb5p4n = j1_v53wjn(ly0gco, l4eub, eulp4, np3j, jw53v, u0oclg),
              oylg0 = eulp4['length'];if (!eulp4['closed'] && j1_ykos76(ly0gco, eb5p4n, eulp4['tagName'], clg0) && (eulp4['closed'] = !0x0, iz298['nbsp'] || u0oclg['warning']('unclosed xml attribute')), k6yos && oylg0) {
            for (var mdf12 = j1_dq8ix2(k6yos, {}), lub4ep = 0x0; oylg0 > lub4ep; lub4ep++) {
              var i98xd = eulp4[lub4ep];clug0(i98xd['offset']), i98xd['locator'] = j1_dq8ix2(k6yos, {});
            }b0cu4l['locator'] = mdf12, j1_mf1qrd(eulp4, b0cu4l, np3j) && q128i['push'](eulp4), b0cu4l['locator'] = k6yos;
          } else j1_mf1qrd(eulp4, b0cu4l, np3j) && q128i['push'](eulp4);'http://www.w3.org/1999/xhtml' !== eulp4['uri'] || eulp4['closed'] ? eb5p4n++ : eb5p4n = j1_q281(ly0gco, eb5p4n, eulp4['tagName'], jw53v, b0cu4l);}
    } catch (z28xi) {
      u0oclg['error']('element parse error: ' + z28xi), eb5p4n = -0x1;
    }eb5p4n > rf67 ? rf67 = eb5p4n : o0lgcu(Math['max'](l4eub, rf67) + 0x1);
  }
}function j1_dq8ix2(i28d1, oulgc0) {
  return oulgc0['lineNumber'] = i28d1['lineNumber'], oulgc0['columnNumber'] = i28d1['columnNumber'], oulgc0;
}function j1_v53wjn(jpbn5, jw3pn, ogc0ul, so6kyg, i8z29, go6ks) {
  for (var az9xh, i812dq, ys6ok = ++jw3pn, hzixa9 = j1_f76sr;;) {
    var ebluc = jpbn5['charAt'](ys6ok);switch (ebluc) {case '=':
        if (hzixa9 === j1_x8azi9) az9xh = jpbn5['slice'](jw3pn, ys6ok), hzixa9 = j1_m8qd12;else {
          if (hzixa9 !== j1_lubep4) throw new Error('attribute equal must after attrName');hzixa9 = j1_m8qd12;
        }break;case '\x27':case '\x22':
        if (hzixa9 === j1_m8qd12 || hzixa9 === j1_x8azi9) {
          if (hzixa9 === j1_x8azi9 && (go6ks['warning']('attribute value must after "="'), az9xh = jpbn5['slice'](jw3pn, ys6ok)), jw3pn = ys6ok + 0x1, ys6ok = jpbn5['indexOf'](ebluc, jw3pn), !(ys6ok > 0x0)) throw new Error('attribute value no end \'' + ebluc + '\' match');i812dq = jpbn5['slice'](jw3pn, ys6ok)['replace'](/&#?\w+;/g, i8z29), ogc0ul['add'](az9xh, i812dq, jw3pn - 0x1), hzixa9 = j1_nbpe4u;
        } else {
          if (hzixa9 != j1_lbu4ce) throw new Error('attribute value must after "="');i812dq = jpbn5['slice'](jw3pn, ys6ok)['replace'](/&#?\w+;/g, i8z29), ogc0ul['add'](az9xh, i812dq, jw3pn), go6ks['warning']('attribute "' + az9xh + '" missed start quot(' + ebluc + ')!!'), jw3pn = ys6ok + 0x1, hzixa9 = j1_nbpe4u;
        }break;case '/':
        switch (hzixa9) {case j1_f76sr:
            ogc0ul['setTagName'](jpbn5['slice'](jw3pn, ys6ok));case j1_nbpe4u:case j1_bcu4l:case j1_ceub4l:
            hzixa9 = j1_ceub4l, ogc0ul['closed'] = !0x0;case j1_lbu4ce:case j1_x8azi9:case j1_lubep4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return go6ks['error']('unexpected end of input'), hzixa9 == j1_f76sr && ogc0ul['setTagName'](jpbn5['slice'](jw3pn, ys6ok)), ys6ok;case '>':
        switch (hzixa9) {case j1_f76sr:
            ogc0ul['setTagName'](jpbn5['slice'](jw3pn, ys6ok));case j1_nbpe4u:case j1_bcu4l:case j1_ceub4l:
            break;case j1_lbu4ce:case j1_x8azi9:
            i812dq = jpbn5['slice'](jw3pn, ys6ok), '/' === i812dq['slice'](-0x1) && (ogc0ul['closed'] = !0x0, i812dq = i812dq['slice'](0x0, -0x1));case j1_lubep4:
            hzixa9 === j1_lubep4 && (i812dq = az9xh), hzixa9 == j1_lbu4ce ? (go6ks['warning']('attribute "' + i812dq + '" missed quot(")!!'), ogc0ul['add'](az9xh, i812dq['replace'](/&#?\w+;/g, i8z29), jw3pn)) : ('http://www.w3.org/1999/xhtml' === so6kyg[''] && i812dq['match'](/^(?:disabled|checked|selected)$/i) || go6ks['warning']('attribute "' + i812dq + '" missed value!! "' + i812dq + '" instead!!'), ogc0ul['add'](i812dq, i812dq, jw3pn));break;case j1_m8qd12:
            throw new Error('attribute value missed!!');}return ys6ok;case '\u0080':
        ebluc = '\x20';default:
        if ('\x20' >= ebluc) switch (hzixa9) {case j1_f76sr:
            ogc0ul['setTagName'](jpbn5['slice'](jw3pn, ys6ok)), hzixa9 = j1_bcu4l;break;case j1_x8azi9:
            az9xh = jpbn5['slice'](jw3pn, ys6ok), hzixa9 = j1_lubep4;break;case j1_lbu4ce:
            var i812dq = jpbn5['slice'](jw3pn, ys6ok)['replace'](/&#?\w+;/g, i8z29);go6ks['warning']('attribute "' + i812dq + '" missed quot(")!!'), ogc0ul['add'](az9xh, i812dq, jw3pn);case j1_nbpe4u:
            hzixa9 = j1_bcu4l;} else switch (hzixa9) {case j1_lubep4:
            {
              ogc0ul['tagName'];
            }'http://www.w3.org/1999/xhtml' === so6kyg[''] && az9xh['match'](/^(?:disabled|checked|selected)$/i) || go6ks['warning']('attribute "' + az9xh + '" missed value!! "' + az9xh + '" instead2!!'), ogc0ul['add'](az9xh, az9xh, jw3pn), jw3pn = ys6ok, hzixa9 = j1_x8azi9;break;case j1_nbpe4u:
            go6ks['warning']('attribute space is required"' + az9xh + '\x22!!');case j1_bcu4l:
            hzixa9 = j1_x8azi9, jw3pn = ys6ok;break;case j1_m8qd12:
            hzixa9 = j1_lbu4ce, jw3pn = ys6ok;break;case j1_ceub4l:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ys6ok++;
  }
}function j1_mf1qrd(gys6, x2id98, zi8a9) {
  for (var o7yk6 = gys6['tagName'], mqdf12 = null, be5pn = gys6['length']; be5pn--;) {
    var u0lo = gys6[be5pn],
        yogsk0 = u0lo['qName'],
        ce4lbu = u0lo['value'],
        ky6 = yogsk0['indexOf'](':');if (ky6 > 0x0) var x9z8ia = u0lo['prefix'] = yogsk0['slice'](0x0, ky6),
        goc0ul = yogsk0['slice'](ky6 + 0x1),
        fqm2d1 = 'xmlns' === x9z8ia && goc0ul;else goc0ul = yogsk0, x9z8ia = null, fqm2d1 = 'xmlns' === yogsk0 && '';u0lo['localName'] = goc0ul, fqm2d1 !== !0x1 && (null == mqdf12 && (mqdf12 = {}, j1_f6rm17(zi8a9, zi8a9 = {})), zi8a9[fqm2d1] = mqdf12[fqm2d1] = ce4lbu, u0lo['uri'] = 'http://www.w3.org/2000/xmlns/', x2id98['startPrefixMapping'](fqm2d1, ce4lbu));
  }for (var be5pn = gys6['length']; be5pn--;) {
    u0lo = gys6[be5pn];var x9z8ia = u0lo['prefix'];x9z8ia && ('xml' === x9z8ia && (u0lo['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== x9z8ia && (u0lo['uri'] = zi8a9[x9z8ia || '']));
  }var ky6 = o7yk6['indexOf'](':');ky6 > 0x0 ? (x9z8ia = gys6['prefix'] = o7yk6['slice'](0x0, ky6), goc0ul = gys6['localName'] = o7yk6['slice'](ky6 + 0x1)) : (x9z8ia = null, goc0ul = gys6['localName'] = o7yk6);var r6s7y = gys6['uri'] = zi8a9[x9z8ia || ''];if (x2id98['startElement'](r6s7y, goc0ul, o7yk6, gys6), !gys6['closed']) return gys6['currentNSMap'] = zi8a9, gys6['localNSMap'] = mqdf12, !0x0;if (x2id98['endElement'](r6s7y, goc0ul, o7yk6), mqdf12) {
    for (x9z8ia in mqdf12) x2id98['endPrefixMapping'](x9z8ia);
  }
}function j1_q281(f7q1m, g0clu4, q1rdmf, r6skf7, fmrd) {
  if (/^(?:script|textarea)$/i['test'](q1rdmf)) {
    var c4eul = f7q1m['indexOf']('</' + q1rdmf + '>', g0clu4),
        izaxh9 = f7q1m['substring'](g0clu4 + 0x1, c4eul);if (/[&<]/['test'](izaxh9)) return (/^script$/i['test'](q1rdmf) ? (fmrd['characters'](izaxh9, 0x0, izaxh9['length']), c4eul) : (izaxh9 = izaxh9['replace'](/&#?\w+;/g, r6skf7), fmrd['characters'](izaxh9, 0x0, izaxh9['length']), c4eul)
    );
  }return g0clu4 + 0x1;
}function j1_ykos76(x9iz2, gocy0s, ks76yr, xzih9) {
  var oyks0 = xzih9[ks76yr];return null == oyks0 && (oyks0 = x9iz2['lastIndexOf']('</' + ks76yr + '>'), gocy0s > oyks0 && (oyks0 = x9iz2['lastIndexOf']('</' + ks76yr)), xzih9[ks76yr] = oyks0), gocy0s > oyks0;
}function j1_f6rm17(m6rf71, b0l4u) {
  for (var oc0glu in m6rf71) b0l4u[oc0glu] = m6rf71[oc0glu];
}function j1_xd9i(fqrd1m, oc0gys, ecul4b, ubcel) {
  var i9xa8 = fqrd1m['charAt'](oc0gys + 0x2);switch (i9xa8) {case '-':
      if ('-' === fqrd1m['charAt'](oc0gys + 0x3)) {
        var m2d18 = fqrd1m['indexOf']('-->', oc0gys + 0x4);return m2d18 > oc0gys ? (ecul4b['comment'](fqrd1m, oc0gys + 0x4, m2d18 - oc0gys - 0x4), m2d18 + 0x3) : (ubcel['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == fqrd1m['substr'](oc0gys + 0x3, 0x6)) {
        var m2d18 = fqrd1m['indexOf'](']]>', oc0gys + 0x9);return ecul4b['startCDATA'](), ecul4b['characters'](fqrd1m, oc0gys + 0x9, m2d18 - oc0gys - 0x9), ecul4b['endCDATA'](), m2d18 + 0x3;
      }var oculg0 = j1_v3wjn(fqrd1m, oc0gys),
          oycg0 = oculg0['length'];if (oycg0 > 0x1 && /!doctype/i['test'](oculg0[0x0][0x0])) {
        var r6k7f = oculg0[0x1][0x0],
            vwj35 = oycg0 > 0x3 && /^public$/i['test'](oculg0[0x2][0x0]) && oculg0[0x3][0x0],
            z29x8 = oycg0 > 0x4 && oculg0[0x4][0x0],
            kr6mf7 = oculg0[oycg0 - 0x1];return ecul4b['startDTD'](r6k7f, vwj35 && vwj35['replace'](/^(['"])(.*?)\1$/, '$2'), z29x8 && z29x8['replace'](/^(['"])(.*?)\1$/, '$2')), ecul4b['endDTD'](), kr6mf7['index'] + kr6mf7[0x0]['length'];
      }}return -0x1;
}function j1_cguo0(vj3n5, r1fq7m, lyoc0) {
  var z9axh = vj3n5['indexOf']('?>', r1fq7m);if (z9axh) {
    var col0y = vj3n5['substring'](r1fq7m, z9axh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (col0y) {
      {
        col0y[0x0]['length'];
      }return lyoc0['processingInstruction'](col0y[0x1], col0y[0x2]), z9axh + 0x2;
    }return -0x1;
  }return -0x1;
}function j1_gsyok() {}function j1_o6kysg(dfq, k6) {
  return dfq['__proto__'] = k6, dfq;
}function j1_v3wjn(b04uc, d21i8) {
  var xzih,
      f1qdm = [],
      c4ebu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (c4ebu['lastIndex'] = d21i8, c4ebu['exec'](b04uc); xzih = c4ebu['exec'](b04uc);) if (f1qdm['push'](xzih), xzih[0x1]) return f1qdm;
}var j1_c0loug = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_cgo0y = new RegExp('[\\-\\.0-9' + j1_c0loug['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_fk7r6m = new RegExp('^' + j1_c0loug['source'] + j1_cgo0y['source'] + '*(?::' + j1_c0loug['source'] + j1_cgo0y['source'] + '*)?$'),
    j1_f76sr = 0x0,
    j1_x8azi9 = 0x1,
    j1_lubep4 = 0x2,
    j1_m8qd12 = 0x3,
    j1_lbu4ce = 0x4,
    j1_nbpe4u = 0x5,
    j1_bcu4l = 0x6,
    j1_ceub4l = 0x7;j1_d298['prototype'] = { 'parse': function (lpeub4, xha, zhxa9i) {
    var f2dmq1 = this['domBuilder'];f2dmq1['startDocument'](), j1_f6rm17(xha, xha = {}), j1_pwjn5(lpeub4, xha, zhxa9i, f2dmq1, this['errorHandler']), f2dmq1['endDocument']();
  } }, j1_gsyok['prototype'] = { 'setTagName': function (ihx9) {
    if (!j1_fk7r6m['test'](ihx9)) throw new Error('invalid tagName:' + ihx9);this['tagName'] = ihx9;
  }, 'add': function ($9xah, n45eb, sgk6) {
    if (!j1_fk7r6m['test']($9xah)) throw new Error('invalid attribute:' + $9xah);this[this['length']++] = { 'qName': $9xah, 'value': n45eb, 'offset': sgk6 };
  }, 'length': 0x0, 'getLocalName': function (uol) {
    return this[uol]['localName'];
  }, 'getLocator': function (rmf1q) {
    return this[rmf1q]['locator'];
  }, 'getQName': function (mr6k7) {
    return this[mr6k7]['qName'];
  }, 'getURI': function (nwj5v) {
    return this[nwj5v]['uri'];
  }, 'getValue': function (b4plue) {
    return this[b4plue]['value'];
  } }, j1_o6kysg({}, j1_o6kysg['prototype']) instanceof j1_o6kysg || (j1_o6kysg = function (ep5jbn, cogyl) {
  function zxa$9() {}zxa$9['prototype'] = cogyl, zxa$9 = new zxa$9();for (cogyl in ep5jbn) zxa$9[cogyl] = ep5jbn[cogyl];return zxa$9;
}), exports['XMLReader'] = j1_d298;