var U = wx.$k;
function K1_sk028() {}function K1_kieh(o01qv, n012, vn0o1q, nqv18, lrdu$) {
  function ei6tk(zwv1ob) {
    if (zwv1ob > 0xffff) {
      zwv1ob -= 0x10000;var gycf35 = 0xd800 + (zwv1ob >> 0xa),
          sk92h6 = 0xdc00 + (0x3ff & zwv1ob);return String['fromCharCode'](gycf35, sk92h6);
    }return String['fromCharCode'](zwv1ob);
  }function du_r(p5g3r) {
    var p_r35 = p5g3r['slice'](0x1, -0x1);return p_r35 in vn0o1q ? vn0o1q[p_r35] : '#' === p_r35['charAt'](0x0) ? ei6tk(parseInt(p_r35['substr'](0x1)['replace']('x', '0x'))) : (lrdu$['error']('entity not found:' + p5g3r), p5g3r);
  }function xlzu(et7ijh) {
    if (et7ijh > hti67e) {
      var hitk6e = o01qv['substring'](hti67e, et7ijh)['replace'](/&#?\w+;/g, du_r);n29 && ikh6te(hti67e), nqv18['characters'](hitk6e, 0x0, et7ijh - hti67e), hti67e = et7ijh;
    }
  }function ikh6te(es9h6k, qn1vwo) {
    for (; es9h6k >= luabxz && (qn1vwo = qwov['exec'](o01qv));) nqv80 = qn1vwo['index'], luabxz = nqv80 + qn1vwo[0x0]['length'], n29['lineNumber']++;n29['columnNumber'] = es9h6k - nqv80 + 0x1;
  }for (var nqv80 = 0x0, luabxz = 0x0, qwov = /.*(?:\r\n?|\n)|.*$/g, n29 = nqv18['locator'], lzxa = [{ 'currentNSMap': n012 }], axl$z = {}, hti67e = 0x0;;) {
    try {
      var nvbo1w = o01qv['indexOf']('<', hti67e);if (0x0 > nvbo1w) {
        if (!o01qv['substr'](hti67e)['match'](/^\s*$/)) {
          var zxowab = nqv18['doc'],
              cfg3p = zxowab['createTextNode'](o01qv['substr'](hti67e));zxowab['appendChild'](cfg3p), nqv18['currentElement'] = cfg3p;
        }return;
      }switch (nvbo1w > hti67e && xlzu(nvbo1w), o01qv['charAt'](nvbo1w + 0x1)) {case '/':
          var ul$xz = o01qv['indexOf']('>', nvbo1w + 0x3),
              qn28 = o01qv['substring'](nvbo1w + 0x2, ul$xz),
              vbwox = lzxa['pop']();0x0 > ul$xz ? (qn28 = o01qv['substring'](nvbo1w + 0x2)['replace'](/[\s<].*/, ''), lrdu$['error']('end tag name: ' + qn28 + ' is not complete:' + vbwox['tagName']), ul$xz = nvbo1w + 0x1 + qn28['length']) : qn28['match'](/\s</) && (qn28 = qn28['replace'](/[\s<].*/, ''), lrdu$['error']('end tag name: ' + qn28 + ' maybe not complete'), ul$xz = nvbo1w + 0x1 + qn28['length']);var h96ks2 = vbwox['localNSMap'],
              q08s2 = vbwox['tagName'] == qn28,
              udxla$ = q08s2 || vbwox['tagName'] && vbwox['tagName']['toLowerCase']() == qn28['toLowerCase']();if (udxla$) {
            if (nqv18['endElement'](vbwox['uri'], vbwox['localName'], qn28), h96ks2) {
              for (var dr_pl in h96ks2) nqv18['endPrefixMapping'](dr_pl);
            }q08s2 || lrdu$['fatalError']('end tag name: ' + qn28 + ' is not match the current start tagName:' + vbwox['tagName']);
          } else lzxa['push'](vbwox);ul$xz++;break;case '?':
          n29 && ikh6te(nvbo1w), ul$xz = K1_au$l(o01qv, nvbo1w, nqv18);break;case '!':
          n29 && ikh6te(nvbo1w), ul$xz = K1_n1wvqo(o01qv, nvbo1w, nqv18, lrdu$);break;default:
          n29 && ikh6te(nvbo1w);var wbzx = new K1_balz(),
              rg53 = lzxa[lzxa['length'] - 0x1]['currentNSMap'],
              ul$xz = K1_lxabzu(o01qv, nvbo1w, wbzx, rg53, du_r, lrdu$),
              bxuzal = wbzx['length'];if (!wbzx['closed'] && K1__r$(o01qv, ul$xz, wbzx['tagName'], axl$z) && (wbzx['closed'] = !0x0, vn0o1q['nbsp'] || lrdu$['warning']('unclosed xml attribute')), n29 && bxuzal) {
            for (var rd_3 = K1_zoxba(n29, {}), wbvox = 0x0; bxuzal > wbvox; wbvox++) {
              var xawuz = wbzx[wbvox];ikh6te(xawuz['offset']), xawuz['locator'] = K1_zoxba(n29, {});
            }nqv18['locator'] = rd_3, K1_la$uxz(wbzx, nqv18, rg53) && lzxa['push'](wbzx), nqv18['locator'] = n29;
          } else K1_la$uxz(wbzx, nqv18, rg53) && lzxa['push'](wbzx);'http://www.w3.org/1999/xhtml' !== wbzx['uri'] || wbzx['closed'] ? ul$xz++ : ul$xz = K1_fcy5g(o01qv, ul$xz, wbzx['tagName'], du_r, nqv18);}
    } catch (drl) {
      lrdu$['error']('element parse error: ' + drl), ul$xz = -0x1;
    }ul$xz > hti67e ? hti67e = ul$xz : xlzu(Math['max'](nvbo1w, hti67e) + 0x1);
  }
}function K1_zoxba(nq0821, _$l) {
  return _$l['lineNumber'] = nq0821['lineNumber'], _$l['columnNumber'] = nq0821['columnNumber'], _$l;
}function K1_lxabzu(zualb, ehtji7, lpr_, bwvo1z, qvon1w, _53gp) {
  for (var zvwb1, c3gfp5, n802q9 = ++ehtji7, zvwbo1 = K1_r$u;;) {
    var v0oq = zualb['charAt'](n802q9);switch (v0oq) {case '=':
        if (zvwbo1 === K1_ax$d) zvwb1 = zualb['slice'](ehtji7, n802q9), zvwbo1 = K1_azbwu;else {
          if (zvwbo1 !== K1_tijm4) throw new Error('attribute equal must after attrName');zvwbo1 = K1_azbwu;
        }break;case '\x27':case '\x22':
        if (zvwbo1 === K1_azbwu || zvwbo1 === K1_ax$d) {
          if (zvwbo1 === K1_ax$d && (_53gp['warning']('attribute value must after "="'), zvwb1 = zualb['slice'](ehtji7, n802q9)), ehtji7 = n802q9 + 0x1, n802q9 = zualb['indexOf'](v0oq, ehtji7), !(n802q9 > 0x0)) throw new Error('attribute value no end \'' + v0oq + '\' match');c3gfp5 = zualb['slice'](ehtji7, n802q9)['replace'](/&#?\w+;/g, qvon1w), lpr_['add'](zvwb1, c3gfp5, ehtji7 - 0x1), zvwbo1 = K1_lxba;
        } else {
          if (zvwbo1 != K1_bauxzw) throw new Error('attribute value must after "="');c3gfp5 = zualb['slice'](ehtji7, n802q9)['replace'](/&#?\w+;/g, qvon1w), lpr_['add'](zvwb1, c3gfp5, ehtji7), _53gp['warning']('attribute "' + zvwb1 + '" missed start quot(' + v0oq + ')!!'), ehtji7 = n802q9 + 0x1, zvwbo1 = K1_lxba;
        }break;case '/':
        switch (zvwbo1) {case K1_r$u:
            lpr_['setTagName'](zualb['slice'](ehtji7, n802q9));case K1_lxba:case K1_$_auld:case K1_$lzxu:
            zvwbo1 = K1_$lzxu, lpr_['closed'] = !0x0;case K1_bauxzw:case K1_ax$d:case K1_tijm4:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _53gp['error']('unexpected end of input'), zvwbo1 == K1_r$u && lpr_['setTagName'](zualb['slice'](ehtji7, n802q9)), n802q9;case '>':
        switch (zvwbo1) {case K1_r$u:
            lpr_['setTagName'](zualb['slice'](ehtji7, n802q9));case K1_lxba:case K1_$_auld:case K1_$lzxu:
            break;case K1_bauxzw:case K1_ax$d:
            c3gfp5 = zualb['slice'](ehtji7, n802q9), '/' === c3gfp5['slice'](-0x1) && (lpr_['closed'] = !0x0, c3gfp5 = c3gfp5['slice'](0x0, -0x1));case K1_tijm4:
            zvwbo1 === K1_tijm4 && (c3gfp5 = zvwb1), zvwbo1 == K1_bauxzw ? (_53gp['warning']('attribute "' + c3gfp5 + '" missed quot(")!!'), lpr_['add'](zvwb1, c3gfp5['replace'](/&#?\w+;/g, qvon1w), ehtji7)) : ('http://www.w3.org/1999/xhtml' === bwvo1z[''] && c3gfp5['match'](/^(?:disabled|checked|selected)$/i) || _53gp['warning']('attribute "' + c3gfp5 + '" missed value!! "' + c3gfp5 + '" instead!!'), lpr_['add'](c3gfp5, c3gfp5, ehtji7));break;case K1_azbwu:
            throw new Error('attribute value missed!!');}return n802q9;case '\u0080':
        v0oq = '\x20';default:
        if ('\x20' >= v0oq) switch (zvwbo1) {case K1_r$u:
            lpr_['setTagName'](zualb['slice'](ehtji7, n802q9)), zvwbo1 = K1_$_auld;break;case K1_ax$d:
            zvwb1 = zualb['slice'](ehtji7, n802q9), zvwbo1 = K1_tijm4;break;case K1_bauxzw:
            var c3gfp5 = zualb['slice'](ehtji7, n802q9)['replace'](/&#?\w+;/g, qvon1w);_53gp['warning']('attribute "' + c3gfp5 + '" missed quot(")!!'), lpr_['add'](zvwb1, c3gfp5, ehtji7);case K1_lxba:
            zvwbo1 = K1_$_auld;} else switch (zvwbo1) {case K1_tijm4:
            {
              lpr_['tagName'];
            }'http://www.w3.org/1999/xhtml' === bwvo1z[''] && zvwb1['match'](/^(?:disabled|checked|selected)$/i) || _53gp['warning']('attribute "' + zvwb1 + '" missed value!! "' + zvwb1 + '" instead2!!'), lpr_['add'](zvwb1, zvwb1, ehtji7), ehtji7 = n802q9, zvwbo1 = K1_ax$d;break;case K1_lxba:
            _53gp['warning']('attribute space is required"' + zvwb1 + '\x22!!');case K1_$_auld:
            zvwbo1 = K1_ax$d, ehtji7 = n802q9;break;case K1_azbwu:
            zvwbo1 = K1_bauxzw, ehtji7 = n802q9;break;case K1_$lzxu:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}n802q9++;
  }
}function K1_la$uxz(yg35fc, vn1oqw, ald_$u) {
  for (var n80q29 = yg35fc['tagName'], xov = null, gp53c = yg35fc['length']; gp53c--;) {
    var azuxlb = yg35fc[gp53c],
        $lud_ = azuxlb['qName'],
        auwz = azuxlb['value'],
        $dua = $lud_['indexOf'](':');if ($dua > 0x0) var n1vo0 = azuxlb['prefix'] = $lud_['slice'](0x0, $dua),
        wonv1b = $lud_['slice']($dua + 0x1),
        d$u = 'xmlns' === n1vo0 && wonv1b;else wonv1b = $lud_, n1vo0 = null, d$u = 'xmlns' === $lud_ && '';azuxlb['localName'] = wonv1b, d$u !== !0x1 && (null == xov && (xov = {}, K1_du_l$(ald_$u, ald_$u = {})), ald_$u[d$u] = xov[d$u] = auwz, azuxlb['uri'] = 'http://www.w3.org/2000/xmlns/', vn1oqw['startPrefixMapping'](d$u, auwz));
  }for (var gp53c = yg35fc['length']; gp53c--;) {
    azuxlb = yg35fc[gp53c];var n1vo0 = azuxlb['prefix'];n1vo0 && ('xml' === n1vo0 && (azuxlb['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== n1vo0 && (azuxlb['uri'] = ald_$u[n1vo0 || '']));
  }var $dua = n80q29['indexOf'](':');$dua > 0x0 ? (n1vo0 = yg35fc['prefix'] = n80q29['slice'](0x0, $dua), wonv1b = yg35fc['localName'] = n80q29['slice']($dua + 0x1)) : (n1vo0 = null, wonv1b = yg35fc['localName'] = n80q29);var oxzwab = yg35fc['uri'] = ald_$u[n1vo0 || ''];if (vn1oqw['startElement'](oxzwab, wonv1b, n80q29, yg35fc), !yg35fc['closed']) return yg35fc['currentNSMap'] = ald_$u, yg35fc['localNSMap'] = xov, !0x0;if (vn1oqw['endElement'](oxzwab, wonv1b, n80q29), xov) {
    for (n1vo0 in xov) vn1oqw['endPrefixMapping'](n1vo0);
  }
}function K1_fcy5g(uxz$l, jteh, bzxowa, $lzax, wzob1) {
  if (/^(?:script|textarea)$/i['test'](bzxowa)) {
    var q028n1 = uxz$l['indexOf']('</' + bzxowa + '>', jteh),
        c5g = uxz$l['substring'](jteh + 0x1, q028n1);if (/[&<]/['test'](c5g)) return (/^script$/i['test'](bzxowa) ? (wzob1['characters'](c5g, 0x0, c5g['length']), q028n1) : (c5g = c5g['replace'](/&#?\w+;/g, $lzax), wzob1['characters'](c5g, 0x0, c5g['length']), q028n1)
    );
  }return jteh + 0x1;
}function K1__r$(abwox, ob1vz, qs9820, hs6ik) {
  var ei6h7t = hs6ik[qs9820];return null == ei6h7t && (ei6h7t = abwox['lastIndexOf']('</' + qs9820 + '>'), ob1vz > ei6h7t && (ei6h7t = abwox['lastIndexOf']('</' + qs9820)), hs6ik[qs9820] = ei6h7t), ob1vz > ei6h7t;
}function K1_du_l$(vwnbo, hjt) {
  for (var la$d in vwnbo) hjt[la$d] = vwnbo[la$d];
}function K1_n1wvqo($_ald, _r5pg, _d$lru, abzulx) {
  var o1bwz = $_ald['charAt'](_r5pg + 0x2);switch (o1bwz) {case '-':
      if ('-' === $_ald['charAt'](_r5pg + 0x3)) {
        var ux$za = $_ald['indexOf']('-->', _r5pg + 0x4);return ux$za > _r5pg ? (_d$lru['comment']($_ald, _r5pg + 0x4, ux$za - _r5pg - 0x4), ux$za + 0x3) : (abzulx['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == $_ald['substr'](_r5pg + 0x3, 0x6)) {
        var ux$za = $_ald['indexOf'](']]>', _r5pg + 0x9);return _d$lru['startCDATA'](), _d$lru['characters']($_ald, _r5pg + 0x9, ux$za - _r5pg - 0x9), _d$lru['endCDATA'](), ux$za + 0x3;
      }var zwvb = K1_dr_u$l($_ald, _r5pg),
          lau$zx = zwvb['length'];if (lau$zx > 0x1 && /!doctype/i['test'](zwvb[0x0][0x0])) {
        var rd5$p = zwvb[0x1][0x0],
            xlau$d = lau$zx > 0x3 && /^public$/i['test'](zwvb[0x2][0x0]) && zwvb[0x3][0x0],
            uxbazl = lau$zx > 0x4 && zwvb[0x4][0x0],
            r35_d = zwvb[lau$zx - 0x1];return _d$lru['startDTD'](rd5$p, xlau$d && xlau$d['replace'](/^(['"])(.*?)\1$/, '$2'), uxbazl && uxbazl['replace'](/^(['"])(.*?)\1$/, '$2')), _d$lru['endDTD'](), r35_d['index'] + r35_d[0x0]['length'];
      }}return -0x1;
}function K1_au$l(lxa$zu, awubzx, e7tmi) {
  var daxu$ = lxa$zu['indexOf']('?>', awubzx);if (daxu$) {
    var qwonv = lxa$zu['substring'](awubzx, daxu$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qwonv) {
      {
        qwonv[0x0]['length'];
      }return e7tmi['processingInstruction'](qwonv[0x1], qwonv[0x2]), daxu$ + 0x2;
    }return -0x1;
  }return -0x1;
}function K1_balz() {}function K1_q280s9(q2n980, o1vnq0) {
  return q2n980['__proto__'] = o1vnq0, q2n980;
}function K1_dr_u$l(dlu_$a, pgf3c) {
  var hkt6i,
      rp5$d = [],
      xauz = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (xauz['lastIndex'] = pgf3c, xauz['exec'](dlu_$a); hkt6i = xauz['exec'](dlu_$a);) if (rp5$d['push'](hkt6i), hkt6i[0x1]) return rp5$d;
}var K1_ur_l$d = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    K1_alxu$ = new RegExp('[\\-\\.0-9' + K1_ur_l$d['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    K1_kh92s6 = new RegExp('^' + K1_ur_l$d['source'] + K1_alxu$['source'] + '*(?::' + K1_ur_l$d['source'] + K1_alxu$['source'] + '*)?$'),
    K1_r$u = 0x0,
    K1_ax$d = 0x1,
    K1_tijm4 = 0x2,
    K1_azbwu = 0x3,
    K1_bauxzw = 0x4,
    K1_lxba = 0x5,
    K1_$_auld = 0x6,
    K1_$lzxu = 0x7;K1_sk028['prototype'] = { 'parse': function (r_u$, im4t, d$p) {
    var no01v = this['domBuilder'];no01v['startDocument'](), K1_du_l$(im4t, im4t = {}), K1_kieh(r_u$, im4t, d$p, no01v, this['errorHandler']), no01v['endDocument']();
  } }, K1_balz['prototype'] = { 'setTagName': function (fyg53c) {
    if (!K1_kh92s6['test'](fyg53c)) throw new Error('invalid tagName:' + fyg53c);this['tagName'] = fyg53c;
  }, 'add': function (th67ie, eti, wqnv) {
    if (!K1_kh92s6['test'](th67ie)) throw new Error('invalid attribute:' + th67ie);this[this['length']++] = { 'qName': th67ie, 'value': eti, 'offset': wqnv };
  }, 'length': 0x0, 'getLocalName': function (drp35) {
    return this[drp35]['localName'];
  }, 'getLocator': function (keih6s) {
    return this[keih6s]['locator'];
  }, 'getQName': function (vxozbw) {
    return this[vxozbw]['qName'];
  }, 'getURI': function (lzxua) {
    return this[lzxua]['uri'];
  }, 'getValue': function (lud$a) {
    return this[lud$a]['value'];
  } }, K1_q280s9({}, K1_q280s9['prototype']) instanceof K1_q280s9 || (K1_q280s9 = function (lauxz, ur_$) {
  function ur$l() {}ur$l['prototype'] = ur_$, ur$l = new ur$l();for (ur_$ in lauxz) ur$l[ur_$] = lauxz[ur_$];return ur$l;
}), exports['XMLReader'] = K1_sk028;