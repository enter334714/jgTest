var S = wx.$J;
function j1_xid8() {}function j1_r76km(vj35nw, yskog6, fdr1m, q812id, fmd21q) {
  function d8xqi2(diq82x) {
    if (diq82x > 0xffff) {
      diq82x -= 0x10000;var sgky6o = 0xd800 + (diq82x >> 0xa),
          bcu4 = 0xdc00 + (0x3ff & diq82x);return String['fromCharCode'](sgky6o, bcu4);
    }return String['fromCharCode'](diq82x);
  }function ixz829(dq1frm) {
    var p35wj = dq1frm['slice'](0x1, -0x1);return p35wj in fdr1m ? fdr1m[p35wj] : '#' === p35wj['charAt'](0x0) ? d8xqi2(parseInt(p35wj['substr'](0x1)['replace']('x', '0x'))) : (fmd21q['error']('entity not found:' + dq1frm), dq1frm);
  }function lg0ocu(lbue) {
    if (lbue > bu4cl0) {
      var u0c4b = vj35nw['substring'](bu4cl0, lbue)['replace'](/&#?\w+;/g, ixz829);gco0y && zhia9x(bu4cl0), q812id['characters'](u0c4b, 0x0, lbue - bu4cl0), bu4cl0 = lbue;
    }
  }function zhia9x(o76ksy, r7fsk6) {
    for (; o76ksy >= dm1rqf && (r7fsk6 = bpl4e['exec'](vj35nw));) y0kos = r7fsk6['index'], dm1rqf = y0kos + r7fsk6[0x0]['length'], gco0y['lineNumber']++;gco0y['columnNumber'] = o76ksy - y0kos + 0x1;
  }for (var y0kos = 0x0, dm1rqf = 0x0, bpl4e = /.*(?:\r\n?|\n)|.*$/g, gco0y = q812id['locator'], m8d2q = [{ 'currentNSMap': yskog6 }], y6kso7 = {}, bu4cl0 = 0x0;;) {
    try {
      var nv35j = vj35nw['indexOf']('<', bu4cl0);if (0x0 > nv35j) {
        if (!vj35nw['substr'](bu4cl0)['match'](/^\s*$/)) {
          var s6ygko = q812id['doc'],
              z2ix8 = s6ygko['createTextNode'](vj35nw['substr'](bu4cl0));s6ygko['appendChild'](z2ix8), q812id['currentElement'] = z2ix8;
        }return;
      }switch (nv35j > bu4cl0 && lg0ocu(nv35j), vj35nw['charAt'](nv35j + 0x1)) {case '/':
          var f1r6m7 = vj35nw['indexOf']('>', nv35j + 0x3),
              gy6osk = vj35nw['substring'](nv35j + 0x2, f1r6m7),
              xhaz9 = m8d2q['pop']();0x0 > f1r6m7 ? (gy6osk = vj35nw['substring'](nv35j + 0x2)['replace'](/[\s<].*/, ''), fmd21q['error']('end tag name: ' + gy6osk + ' is not complete:' + xhaz9['tagName']), f1r6m7 = nv35j + 0x1 + gy6osk['length']) : gy6osk['match'](/\s</) && (gy6osk = gy6osk['replace'](/[\s<].*/, ''), fmd21q['error']('end tag name: ' + gy6osk + ' maybe not complete'), f1r6m7 = nv35j + 0x1 + gy6osk['length']);var d9i2x = xhaz9['localNSMap'],
              b5p4 = xhaz9['tagName'] == gy6osk,
              q8m1d2 = b5p4 || xhaz9['tagName'] && xhaz9['tagName']['toLowerCase']() == gy6osk['toLowerCase']();if (q8m1d2) {
            if (q812id['endElement'](xhaz9['uri'], xhaz9['localName'], gy6osk), d9i2x) {
              for (var i289d in d9i2x) q812id['endPrefixMapping'](i289d);
            }b5p4 || fmd21q['fatalError']('end tag name: ' + gy6osk + ' is not match the current start tagName:' + xhaz9['tagName']);
          } else m8d2q['push'](xhaz9);f1r6m7++;break;case '?':
          gco0y && zhia9x(nv35j), f1r6m7 = j1_d2mq18(vj35nw, nv35j, q812id);break;case '!':
          gco0y && zhia9x(nv35j), f1r6m7 = j1_x8i29(vj35nw, nv35j, q812id, fmd21q);break;default:
          gco0y && zhia9x(nv35j);var a9h$xz = new j1_azx9$h(),
              iahz = m8d2q[m8d2q['length'] - 0x1]['currentNSMap'],
              f1r6m7 = j1_kgo0s(vj35nw, nv35j, a9h$xz, iahz, ixz829, fmd21q),
              yk0gos = a9h$xz['length'];if (!a9h$xz['closed'] && j1_l0cu4(vj35nw, f1r6m7, a9h$xz['tagName'], y6kso7) && (a9h$xz['closed'] = !0x0, fdr1m['nbsp'] || fmd21q['warning']('unclosed xml attribute')), gco0y && yk0gos) {
            for (var pen3j5 = j1_ihz9ax(gco0y, {}), pbel = 0x0; yk0gos > pbel; pbel++) {
              var a$zhx9 = a9h$xz[pbel];zhia9x(a$zhx9['offset']), a$zhx9['locator'] = j1_ihz9ax(gco0y, {});
            }q812id['locator'] = pen3j5, j1_k67os(a9h$xz, q812id, iahz) && m8d2q['push'](a9h$xz), q812id['locator'] = gco0y;
          } else j1_k67os(a9h$xz, q812id, iahz) && m8d2q['push'](a9h$xz);'http://www.w3.org/1999/xhtml' !== a9h$xz['uri'] || a9h$xz['closed'] ? f1r6m7++ : f1r6m7 = j1_w3n5(vj35nw, f1r6m7, a9h$xz['tagName'], ixz829, q812id);}
    } catch (enp4) {
      fmd21q['error']('element parse error: ' + enp4), f1r6m7 = -0x1;
    }f1r6m7 > bu4cl0 ? bu4cl0 = f1r6m7 : lg0ocu(Math['max'](nv35j, bu4cl0) + 0x1);
  }
}function j1_ihz9ax(fmq12, c4ug) {
  return c4ug['lineNumber'] = fmq12['lineNumber'], c4ug['columnNumber'] = fmq12['columnNumber'], c4ug;
}function j1_kgo0s(lcu0g4, sy76k, cgoly0, ai9zx8, sr6k7f, lpbe4u) {
  for (var peulb4, lce4u, d2i9x8 = ++sy76k, qm71fr = j1_cub4el;;) {
    var frk7s6 = lcu0g4['charAt'](d2i9x8);switch (frk7s6) {case '=':
        if (qm71fr === j1_x9zi) peulb4 = lcu0g4['slice'](sy76k, d2i9x8), qm71fr = j1_fr7m16;else {
          if (qm71fr !== j1_a$h9) throw new Error('attribute equal must after attrName');qm71fr = j1_fr7m16;
        }break;case '\x27':case '\x22':
        if (qm71fr === j1_fr7m16 || qm71fr === j1_x9zi) {
          if (qm71fr === j1_x9zi && (lpbe4u['warning']('attribute value must after "="'), peulb4 = lcu0g4['slice'](sy76k, d2i9x8)), sy76k = d2i9x8 + 0x1, d2i9x8 = lcu0g4['indexOf'](frk7s6, sy76k), !(d2i9x8 > 0x0)) throw new Error('attribute value no end \'' + frk7s6 + '\' match');lce4u = lcu0g4['slice'](sy76k, d2i9x8)['replace'](/&#?\w+;/g, sr6k7f), cgoly0['add'](peulb4, lce4u, sy76k - 0x1), qm71fr = j1_enj53p;
        } else {
          if (qm71fr != j1_o6ykg) throw new Error('attribute value must after "="');lce4u = lcu0g4['slice'](sy76k, d2i9x8)['replace'](/&#?\w+;/g, sr6k7f), cgoly0['add'](peulb4, lce4u, sy76k), lpbe4u['warning']('attribute "' + peulb4 + '" missed start quot(' + frk7s6 + ')!!'), sy76k = d2i9x8 + 0x1, qm71fr = j1_enj53p;
        }break;case '/':
        switch (qm71fr) {case j1_cub4el:
            cgoly0['setTagName'](lcu0g4['slice'](sy76k, d2i9x8));case j1_enj53p:case j1_kgyso:case j1_h9aizx:
            qm71fr = j1_h9aizx, cgoly0['closed'] = !0x0;case j1_o6ykg:case j1_x9zi:case j1_a$h9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lpbe4u['error']('unexpected end of input'), qm71fr == j1_cub4el && cgoly0['setTagName'](lcu0g4['slice'](sy76k, d2i9x8)), d2i9x8;case '>':
        switch (qm71fr) {case j1_cub4el:
            cgoly0['setTagName'](lcu0g4['slice'](sy76k, d2i9x8));case j1_enj53p:case j1_kgyso:case j1_h9aizx:
            break;case j1_o6ykg:case j1_x9zi:
            lce4u = lcu0g4['slice'](sy76k, d2i9x8), '/' === lce4u['slice'](-0x1) && (cgoly0['closed'] = !0x0, lce4u = lce4u['slice'](0x0, -0x1));case j1_a$h9:
            qm71fr === j1_a$h9 && (lce4u = peulb4), qm71fr == j1_o6ykg ? (lpbe4u['warning']('attribute "' + lce4u + '" missed quot(")!!'), cgoly0['add'](peulb4, lce4u['replace'](/&#?\w+;/g, sr6k7f), sy76k)) : ('http://www.w3.org/1999/xhtml' === ai9zx8[''] && lce4u['match'](/^(?:disabled|checked|selected)$/i) || lpbe4u['warning']('attribute "' + lce4u + '" missed value!! "' + lce4u + '" instead!!'), cgoly0['add'](lce4u, lce4u, sy76k));break;case j1_fr7m16:
            throw new Error('attribute value missed!!');}return d2i9x8;case '\u0080':
        frk7s6 = '\x20';default:
        if ('\x20' >= frk7s6) switch (qm71fr) {case j1_cub4el:
            cgoly0['setTagName'](lcu0g4['slice'](sy76k, d2i9x8)), qm71fr = j1_kgyso;break;case j1_x9zi:
            peulb4 = lcu0g4['slice'](sy76k, d2i9x8), qm71fr = j1_a$h9;break;case j1_o6ykg:
            var lce4u = lcu0g4['slice'](sy76k, d2i9x8)['replace'](/&#?\w+;/g, sr6k7f);lpbe4u['warning']('attribute "' + lce4u + '" missed quot(")!!'), cgoly0['add'](peulb4, lce4u, sy76k);case j1_enj53p:
            qm71fr = j1_kgyso;} else switch (qm71fr) {case j1_a$h9:
            {
              cgoly0['tagName'];
            }'http://www.w3.org/1999/xhtml' === ai9zx8[''] && peulb4['match'](/^(?:disabled|checked|selected)$/i) || lpbe4u['warning']('attribute "' + peulb4 + '" missed value!! "' + peulb4 + '" instead2!!'), cgoly0['add'](peulb4, peulb4, sy76k), sy76k = d2i9x8, qm71fr = j1_x9zi;break;case j1_enj53p:
            lpbe4u['warning']('attribute space is required"' + peulb4 + '\x22!!');case j1_kgyso:
            qm71fr = j1_x9zi, sy76k = d2i9x8;break;case j1_fr7m16:
            qm71fr = j1_o6ykg, sy76k = d2i9x8;break;case j1_h9aizx:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}d2i9x8++;
  }
}function j1_k67os(xizh9a, m2dq81, dq12m) {
  for (var sgyo6 = xizh9a['tagName'], bcl0u4 = null, o0cug = xizh9a['length']; o0cug--;) {
    var yks67 = xizh9a[o0cug],
        lbce4u = yks67['qName'],
        mq7fr1 = yks67['value'],
        m6fk7r = lbce4u['indexOf'](':');if (m6fk7r > 0x0) var f1q2md = yks67['prefix'] = lbce4u['slice'](0x0, m6fk7r),
        qfmd12 = lbce4u['slice'](m6fk7r + 0x1),
        fdrq1m = 'xmlns' === f1q2md && qfmd12;else qfmd12 = lbce4u, f1q2md = null, fdrq1m = 'xmlns' === lbce4u && '';yks67['localName'] = qfmd12, fdrq1m !== !0x1 && (null == bcl0u4 && (bcl0u4 = {}, j1_di2xq8(dq12m, dq12m = {})), dq12m[fdrq1m] = bcl0u4[fdrq1m] = mq7fr1, yks67['uri'] = 'http://www.w3.org/2000/xmlns/', m2dq81['startPrefixMapping'](fdrq1m, mq7fr1));
  }for (var o0cug = xizh9a['length']; o0cug--;) {
    yks67 = xizh9a[o0cug];var f1q2md = yks67['prefix'];f1q2md && ('xml' === f1q2md && (yks67['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== f1q2md && (yks67['uri'] = dq12m[f1q2md || '']));
  }var m6fk7r = sgyo6['indexOf'](':');m6fk7r > 0x0 ? (f1q2md = xizh9a['prefix'] = sgyo6['slice'](0x0, m6fk7r), qfmd12 = xizh9a['localName'] = sgyo6['slice'](m6fk7r + 0x1)) : (f1q2md = null, qfmd12 = xizh9a['localName'] = sgyo6);var ul40cb = xizh9a['uri'] = dq12m[f1q2md || ''];if (m2dq81['startElement'](ul40cb, qfmd12, sgyo6, xizh9a), !xizh9a['closed']) return xizh9a['currentNSMap'] = dq12m, xizh9a['localNSMap'] = bcl0u4, !0x0;if (m2dq81['endElement'](ul40cb, qfmd12, sgyo6), bcl0u4) {
    for (f1q2md in bcl0u4) m2dq81['endPrefixMapping'](f1q2md);
  }
}function j1_w3n5(sko0gy, cyo0s, ha9zix, l4ueb, vn53wj) {
  if (/^(?:script|textarea)$/i['test'](ha9zix)) {
    var jpebn = sko0gy['indexOf']('</' + ha9zix + '>', cyo0s),
        f7r1q = sko0gy['substring'](cyo0s + 0x1, jpebn);if (/[&<]/['test'](f7r1q)) return (/^script$/i['test'](ha9zix) ? (vn53wj['characters'](f7r1q, 0x0, f7r1q['length']), jpebn) : (f7r1q = f7r1q['replace'](/&#?\w+;/g, l4ueb), vn53wj['characters'](f7r1q, 0x0, f7r1q['length']), jpebn)
    );
  }return cyo0s + 0x1;
}function j1_l0cu4(peb54, xzhai9, nwj35v, g6skoy) {
  var r1fmdq = g6skoy[nwj35v];return null == r1fmdq && (r1fmdq = peb54['lastIndexOf']('</' + nwj35v + '>'), xzhai9 > r1fmdq && (r1fmdq = peb54['lastIndexOf']('</' + nwj35v)), g6skoy[nwj35v] = r1fmdq), xzhai9 > r1fmdq;
}function j1_di2xq8(uep, cu0lb) {
  for (var gu4l0c in uep) cu0lb[gu4l0c] = uep[gu4l0c];
}function j1_x8i29(y7rk, x$hz, iz2, ah$) {
  var qfd2 = y7rk['charAt'](x$hz + 0x2);switch (qfd2) {case '-':
      if ('-' === y7rk['charAt'](x$hz + 0x3)) {
        var kmrf76 = y7rk['indexOf']('-->', x$hz + 0x4);return kmrf76 > x$hz ? (iz2['comment'](y7rk, x$hz + 0x4, kmrf76 - x$hz - 0x4), kmrf76 + 0x3) : (ah$['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == y7rk['substr'](x$hz + 0x3, 0x6)) {
        var kmrf76 = y7rk['indexOf'](']]>', x$hz + 0x9);return iz2['startCDATA'](), iz2['characters'](y7rk, x$hz + 0x9, kmrf76 - x$hz - 0x9), iz2['endCDATA'](), kmrf76 + 0x3;
      }var f6m7rk = j1_epubn4(y7rk, x$hz),
          d12q8m = f6m7rk['length'];if (d12q8m > 0x1 && /!doctype/i['test'](f6m7rk[0x0][0x0])) {
        var ocgl0y = f6m7rk[0x1][0x0],
            jwnp = d12q8m > 0x3 && /^public$/i['test'](f6m7rk[0x2][0x0]) && f6m7rk[0x3][0x0],
            yo76s = d12q8m > 0x4 && f6m7rk[0x4][0x0],
            epunb4 = f6m7rk[d12q8m - 0x1];return iz2['startDTD'](ocgl0y, jwnp && jwnp['replace'](/^(['"])(.*?)\1$/, '$2'), yo76s && yo76s['replace'](/^(['"])(.*?)\1$/, '$2')), iz2['endDTD'](), epunb4['index'] + epunb4[0x0]['length'];
      }}return -0x1;
}function j1_d2mq18(n5peb4, bepnu, pne3) {
  var lu4ce = n5peb4['indexOf']('?>', bepnu);if (lu4ce) {
    var nv5j3 = n5peb4['substring'](bepnu, lu4ce)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nv5j3) {
      {
        nv5j3[0x0]['length'];
      }return pne3['processingInstruction'](nv5j3[0x1], nv5j3[0x2]), lu4ce + 0x2;
    }return -0x1;
  }return -0x1;
}function j1_azx9$h() {}function j1_r76kfs(fdm1, ucbel) {
  return fdm1['__proto__'] = ucbel, fdm1;
}function j1_epubn4(o0yk, np4ube) {
  var f6km,
      y6kosg = [],
      lucb04 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (lucb04['lastIndex'] = np4ube, lucb04['exec'](o0yk); f6km = lucb04['exec'](o0yk);) if (y6kosg['push'](f6km), f6km[0x1]) return y6kosg;
}var j1_jwpn3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    j1_so6k7 = new RegExp('[\\-\\.0-9' + j1_jwpn3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    j1_jen5 = new RegExp('^' + j1_jwpn3['source'] + j1_so6k7['source'] + '*(?::' + j1_jwpn3['source'] + j1_so6k7['source'] + '*)?$'),
    j1_cub4el = 0x0,
    j1_x9zi = 0x1,
    j1_a$h9 = 0x2,
    j1_fr7m16 = 0x3,
    j1_o6ykg = 0x4,
    j1_enj53p = 0x5,
    j1_kgyso = 0x6,
    j1_h9aizx = 0x7;j1_xid8['prototype'] = { 'parse': function (j35pnw, g6kos, yocg) {
    var qfd21 = this['domBuilder'];qfd21['startDocument'](), j1_di2xq8(g6kos, g6kos = {}), j1_r76km(j35pnw, g6kos, yocg, qfd21, this['errorHandler']), qfd21['endDocument']();
  } }, j1_azx9$h['prototype'] = { 'setTagName': function (d8ix) {
    if (!j1_jen5['test'](d8ix)) throw new Error('invalid tagName:' + d8ix);this['tagName'] = d8ix;
  }, 'add': function (lo0ugc, ygocl, g0lu) {
    if (!j1_jen5['test'](lo0ugc)) throw new Error('invalid attribute:' + lo0ugc);this[this['length']++] = { 'qName': lo0ugc, 'value': ygocl, 'offset': g0lu };
  }, 'length': 0x0, 'getLocalName': function (ul4cb0) {
    return this[ul4cb0]['localName'];
  }, 'getLocator': function (i89d2x) {
    return this[i89d2x]['locator'];
  }, 'getQName': function (p45) {
    return this[p45]['qName'];
  }, 'getURI': function (ou0g) {
    return this[ou0g]['uri'];
  }, 'getValue': function (x2iz8) {
    return this[x2iz8]['value'];
  } }, j1_r76kfs({}, j1_r76kfs['prototype']) instanceof j1_r76kfs || (j1_r76kfs = function (ycgo0, x9iza8) {
  function xi89z() {}xi89z['prototype'] = x9iza8, xi89z = new xi89z();for (x9iza8 in ycgo0) xi89z[x9iza8] = ycgo0[x9iza8];return xi89z;
}), exports['XMLReader'] = j1_xid8;