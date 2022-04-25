var F = wx.$D;
function Da5xm() {}function Dxk6ajw(r2zih, o5mgja, r8h1n2, pc03u, upf93b) {
  function hrzi2_(n28h1) {
    if (n28h1 > 0xffff) {
      n28h1 -= 0x10000;var vqkstw = 0xd800 + (n28h1 >> 0xa),
          waj6k = 0xdc00 + (0x3ff & n28h1);return String['fromCharCode'](vqkstw, waj6k);
    }return String['fromCharCode'](n28h1);
  }function iz2(c0e3) {
    var svet0c = c0e3['slice'](0x1, -0x1);return svet0c in r8h1n2 ? r8h1n2[svet0c] : '#' === svet0c['charAt'](0x0) ? hrzi2_(parseInt(svet0c['substr'](0x1)['replace']('x', '0x'))) : (upf93b['error']('entity not found:' + c0e3), c0e3);
  }function kwq6t(m5goja) {
    if (m5goja > tqsevw) {
      var z1rn = r2zih['substring'](tqsevw, m5goja)['replace'](/&#?\w+;/g, iz2);ue30s && gj5mo(tqsevw), pc03u['characters'](z1rn, 0x0, m5goja - tqsevw), tqsevw = m5goja;
    }
  }function gj5mo(wsktq, lm5ao) {
    for (; wsktq >= eu03 && (lm5ao = gmoa5['exec'](r2zih));) y$18h = lm5ao['index'], eu03 = y$18h + lm5ao[0x0]['length'], ue30s['lineNumber']++;ue30s['columnNumber'] = wsktq - y$18h + 0x1;
  }for (var y$18h = 0x0, eu03 = 0x0, gmoa5 = /.*(?:\r\n?|\n)|.*$/g, ue30s = pc03u['locator'], t3ce0 = [{ 'currentNSMap': o5mgja }], izh2r1 = {}, tqsevw = 0x0;;) {
    try {
      var l5gam = r2zih['indexOf']('<', tqsevw);if (0x0 > l5gam) {
        if (!r2zih['substr'](tqsevw)['match'](/^\s*$/)) {
          var xq6wkj = pc03u['doc'],
              oz_im = xq6wkj['createTextNode'](r2zih['substr'](tqsevw));xq6wkj['appendChild'](oz_im), pc03u['currentElement'] = oz_im;
        }return;
      }switch (l5gam > tqsevw && kwq6t(l5gam), r2zih['charAt'](l5gam + 0x1)) {case '/':
          var wktvsq = r2zih['indexOf']('>', l5gam + 0x3),
              xkq = r2zih['substring'](l5gam + 0x2, wktvsq),
              ub3fp9 = t3ce0['pop']();0x0 > wktvsq ? (xkq = r2zih['substring'](l5gam + 0x2)['replace'](/[\s<].*/, ''), upf93b['error']('end tag name: ' + xkq + ' is not complete:' + ub3fp9['tagName']), wktvsq = l5gam + 0x1 + xkq['length']) : xkq['match'](/\s</) && (xkq = xkq['replace'](/[\s<].*/, ''), upf93b['error']('end tag name: ' + xkq + ' maybe not complete'), wktvsq = l5gam + 0x1 + xkq['length']);var fbp3u = ub3fp9['localNSMap'],
              kqw6tv = ub3fp9['tagName'] == xkq,
              kqwj6 = kqw6tv || ub3fp9['tagName'] && ub3fp9['tagName']['toLowerCase']() == xkq['toLowerCase']();if (kqwj6) {
            if (pc03u['endElement'](ub3fp9['uri'], ub3fp9['localName'], xkq), fbp3u) {
              for (var i5l_o in fbp3u) pc03u['endPrefixMapping'](i5l_o);
            }kqw6tv || upf93b['fatalError']('end tag name: ' + xkq + ' is not match the current start tagName:' + ub3fp9['tagName']);
          } else t3ce0['push'](ub3fp9);wktvsq++;break;case '?':
          ue30s && gj5mo(l5gam), wktvsq = Dgo5maj(r2zih, l5gam, pc03u);break;case '!':
          ue30s && gj5mo(l5gam), wktvsq = Db97p4f(r2zih, l5gam, pc03u, upf93b);break;default:
          ue30s && gj5mo(l5gam);var ojm5ag = new Dsvq(),
              _rl2z = t3ce0[t3ce0['length'] - 0x1]['currentNSMap'],
              wktvsq = Dzo_ir(r2zih, l5gam, ojm5ag, _rl2z, iz2, upf93b),
              gmj5a = ojm5ag['length'];if (!ojm5ag['closed'] && Dh18yn$(r2zih, wktvsq, ojm5ag['tagName'], izh2r1) && (ojm5ag['closed'] = !0x0, r8h1n2['nbsp'] || upf93b['warning']('unclosed xml attribute')), ue30s && gmj5a) {
            for (var qktwv = Dtqwve(ue30s, {}), j5gamx = 0x0; gmj5a > j5gamx; j5gamx++) {
              var wj6akx = ojm5ag[j5gamx];gj5mo(wj6akx['offset']), wj6akx['locator'] = Dtqwve(ue30s, {});
            }pc03u['locator'] = qktwv, Dgx6ja(ojm5ag, pc03u, _rl2z) && t3ce0['push'](ojm5ag), pc03u['locator'] = ue30s;
          } else Dgx6ja(ojm5ag, pc03u, _rl2z) && t3ce0['push'](ojm5ag);'http://www.w3.org/1999/xhtml' !== ojm5ag['uri'] || ojm5ag['closed'] ? wktvsq++ : wktvsq = Dja6gkx(r2zih, wktvsq, ojm5ag['tagName'], iz2, pc03u);}
    } catch (k6ajgx) {
      upf93b['error']('element parse error: ' + k6ajgx), wktvsq = -0x1;
    }wktvsq > tqsevw ? tqsevw = wktvsq : kwq6t(Math['max'](l5gam, tqsevw) + 0x1);
  }
}function Dtqwve(rhz_2i, qtv6w) {
  return qtv6w['lineNumber'] = rhz_2i['lineNumber'], qtv6w['columnNumber'] = rhz_2i['columnNumber'], qtv6w;
}function Dzo_ir(uec03, zr1hn, ec3u0, g5aoj, kwa6x, _ilor) {
  for (var nz1r, z_loi, kjw6xq = ++zr1hn, c93upb = Dkwt6qv;;) {
    var zio_lm = uec03['charAt'](kjw6xq);switch (zio_lm) {case '=':
        if (c93upb === Dmoal5) nz1r = uec03['slice'](zr1hn, kjw6xq), c93upb = Dwvqe;else {
          if (c93upb !== Doma5jg) throw new Error('attribute equal must after attrName');c93upb = Dwvqe;
        }break;case '\x27':case '\x22':
        if (c93upb === Dwvqe || c93upb === Dmoal5) {
          if (c93upb === Dmoal5 && (_ilor['warning']('attribute value must after "="'), nz1r = uec03['slice'](zr1hn, kjw6xq)), zr1hn = kjw6xq + 0x1, kjw6xq = uec03['indexOf'](zio_lm, zr1hn), !(kjw6xq > 0x0)) throw new Error('attribute value no end \'' + zio_lm + '\' match');z_loi = uec03['slice'](zr1hn, kjw6xq)['replace'](/&#?\w+;/g, kwa6x), ec3u0['add'](nz1r, z_loi, zr1hn - 0x1), c93upb = Dsq0et;
        } else {
          if (c93upb != Dktwq6v) throw new Error('attribute value must after "="');z_loi = uec03['slice'](zr1hn, kjw6xq)['replace'](/&#?\w+;/g, kwa6x), ec3u0['add'](nz1r, z_loi, zr1hn), _ilor['warning']('attribute "' + nz1r + '" missed start quot(' + zio_lm + ')!!'), zr1hn = kjw6xq + 0x1, c93upb = Dsq0et;
        }break;case '/':
        switch (c93upb) {case Dkwt6qv:
            ec3u0['setTagName'](uec03['slice'](zr1hn, kjw6xq));case Dsq0et:case Do_gm:case Dlozi:
            c93upb = Dlozi, ec3u0['closed'] = !0x0;case Dktwq6v:case Dmoal5:case Doma5jg:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _ilor['error']('unexpected end of input'), c93upb == Dkwt6qv && ec3u0['setTagName'](uec03['slice'](zr1hn, kjw6xq)), kjw6xq;case '>':
        switch (c93upb) {case Dkwt6qv:
            ec3u0['setTagName'](uec03['slice'](zr1hn, kjw6xq));case Dsq0et:case Do_gm:case Dlozi:
            break;case Dktwq6v:case Dmoal5:
            z_loi = uec03['slice'](zr1hn, kjw6xq), '/' === z_loi['slice'](-0x1) && (ec3u0['closed'] = !0x0, z_loi = z_loi['slice'](0x0, -0x1));case Doma5jg:
            c93upb === Doma5jg && (z_loi = nz1r), c93upb == Dktwq6v ? (_ilor['warning']('attribute "' + z_loi + '" missed quot(")!!'), ec3u0['add'](nz1r, z_loi['replace'](/&#?\w+;/g, kwa6x), zr1hn)) : ('http://www.w3.org/1999/xhtml' === g5aoj[''] && z_loi['match'](/^(?:disabled|checked|selected)$/i) || _ilor['warning']('attribute "' + z_loi + '" missed value!! "' + z_loi + '" instead!!'), ec3u0['add'](z_loi, z_loi, zr1hn));break;case Dwvqe:
            throw new Error('attribute value missed!!');}return kjw6xq;case '\u0080':
        zio_lm = '\x20';default:
        if ('\x20' >= zio_lm) switch (c93upb) {case Dkwt6qv:
            ec3u0['setTagName'](uec03['slice'](zr1hn, kjw6xq)), c93upb = Do_gm;break;case Dmoal5:
            nz1r = uec03['slice'](zr1hn, kjw6xq), c93upb = Doma5jg;break;case Dktwq6v:
            var z_loi = uec03['slice'](zr1hn, kjw6xq)['replace'](/&#?\w+;/g, kwa6x);_ilor['warning']('attribute "' + z_loi + '" missed quot(")!!'), ec3u0['add'](nz1r, z_loi, zr1hn);case Dsq0et:
            c93upb = Do_gm;} else switch (c93upb) {case Doma5jg:
            {
              ec3u0['tagName'];
            }'http://www.w3.org/1999/xhtml' === g5aoj[''] && nz1r['match'](/^(?:disabled|checked|selected)$/i) || _ilor['warning']('attribute "' + nz1r + '" missed value!! "' + nz1r + '" instead2!!'), ec3u0['add'](nz1r, nz1r, zr1hn), zr1hn = kjw6xq, c93upb = Dmoal5;break;case Dsq0et:
            _ilor['warning']('attribute space is required"' + nz1r + '\x22!!');case Do_gm:
            c93upb = Dmoal5, zr1hn = kjw6xq;break;case Dwvqe:
            c93upb = Dktwq6v, zr1hn = kjw6xq;break;case Dlozi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}kjw6xq++;
  }
}function Dgx6ja(qtsvwk, g5jamx, sqtwvk) {
  for (var v6w = qtsvwk['tagName'], gmaoj = null, uc3p9 = qtsvwk['length']; uc3p9--;) {
    var zri21h = qtsvwk[uc3p9],
        zomli_ = zri21h['qName'],
        pcub9 = zri21h['value'],
        p7u = zomli_['indexOf'](':');if (p7u > 0x0) var n82rh1 = zri21h['prefix'] = zomli_['slice'](0x0, p7u),
        wq6xvk = zomli_['slice'](p7u + 0x1),
        fu39pb = 'xmlns' === n82rh1 && wq6xvk;else wq6xvk = zomli_, n82rh1 = null, fu39pb = 'xmlns' === zomli_ && '';zri21h['localName'] = wq6xvk, fu39pb !== !0x1 && (null == gmaoj && (gmaoj = {}, Dzmo_il(sqtwvk, sqtwvk = {})), sqtwvk[fu39pb] = gmaoj[fu39pb] = pcub9, zri21h['uri'] = 'http://www.w3.org/2000/xmlns/', g5jamx['startPrefixMapping'](fu39pb, pcub9));
  }for (var uc3p9 = qtsvwk['length']; uc3p9--;) {
    zri21h = qtsvwk[uc3p9];var n82rh1 = zri21h['prefix'];n82rh1 && ('xml' === n82rh1 && (zri21h['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== n82rh1 && (zri21h['uri'] = sqtwvk[n82rh1 || '']));
  }var p7u = v6w['indexOf'](':');p7u > 0x0 ? (n82rh1 = qtsvwk['prefix'] = v6w['slice'](0x0, p7u), wq6xvk = qtsvwk['localName'] = v6w['slice'](p7u + 0x1)) : (n82rh1 = null, wq6xvk = qtsvwk['localName'] = v6w);var ce0tsv = qtsvwk['uri'] = sqtwvk[n82rh1 || ''];if (g5jamx['startElement'](ce0tsv, wq6xvk, v6w, qtsvwk), !qtsvwk['closed']) return qtsvwk['currentNSMap'] = sqtwvk, qtsvwk['localNSMap'] = gmaoj, !0x0;if (g5jamx['endElement'](ce0tsv, wq6xvk, v6w), gmaoj) {
    for (n82rh1 in gmaoj) g5jamx['endPrefixMapping'](n82rh1);
  }
}function Dja6gkx(r_lizo, vtskw, cse30, xk6qwv, kvswqt) {
  if (/^(?:script|textarea)$/i['test'](cse30)) {
    var z_2rih = r_lizo['indexOf']('</' + cse30 + '>', vtskw),
        r2hnz = r_lizo['substring'](vtskw + 0x1, z_2rih);if (/[&<]/['test'](r2hnz)) return (/^script$/i['test'](cse30) ? (kvswqt['characters'](r2hnz, 0x0, r2hnz['length']), z_2rih) : (r2hnz = r2hnz['replace'](/&#?\w+;/g, xk6qwv), kvswqt['characters'](r2hnz, 0x0, r2hnz['length']), z_2rih)
    );
  }return vtskw + 0x1;
}function Dh18yn$(ajm5x, h2n, jog5am, lo_5) {
  var tse = lo_5[jog5am];return null == tse && (tse = ajm5x['lastIndexOf']('</' + jog5am + '>'), h2n > tse && (tse = ajm5x['lastIndexOf']('</' + jog5am)), lo_5[jog5am] = tse), h2n > tse;
}function Dzmo_il(eqs0tv, h21) {
  for (var xj56ga in eqs0tv) h21[xj56ga] = eqs0tv[xj56ga];
}function Db97p4f(u3, rhn2, mxja5g, l5i_mo) {
  var _2lriz = u3['charAt'](rhn2 + 0x2);switch (_2lriz) {case '-':
      if ('-' === u3['charAt'](rhn2 + 0x3)) {
        var p0eu = u3['indexOf']('-->', rhn2 + 0x4);return p0eu > rhn2 ? (mxja5g['comment'](u3, rhn2 + 0x4, p0eu - rhn2 - 0x4), p0eu + 0x3) : (l5i_mo['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == u3['substr'](rhn2 + 0x3, 0x6)) {
        var p0eu = u3['indexOf'](']]>', rhn2 + 0x9);return mxja5g['startCDATA'](), mxja5g['characters'](u3, rhn2 + 0x9, p0eu - rhn2 - 0x9), mxja5g['endCDATA'](), p0eu + 0x3;
      }var ce0pu3 = Dc9pub3(u3, rhn2),
          eqtv = ce0pu3['length'];if (eqtv > 0x1 && /!doctype/i['test'](ce0pu3[0x0][0x0])) {
        var g5j6 = ce0pu3[0x1][0x0],
            m5ajog = eqtv > 0x3 && /^public$/i['test'](ce0pu3[0x2][0x0]) && ce0pu3[0x3][0x0],
            axgjm5 = eqtv > 0x4 && ce0pu3[0x4][0x0],
            skvtq = ce0pu3[eqtv - 0x1];return mxja5g['startDTD'](g5j6, m5ajog && m5ajog['replace'](/^(['"])(.*?)\1$/, '$2'), axgjm5 && axgjm5['replace'](/^(['"])(.*?)\1$/, '$2')), mxja5g['endDTD'](), skvtq['index'] + skvtq[0x0]['length'];
      }}return -0x1;
}function Dgo5maj(ce3up0, v6wtqk, wktv6q) {
  var kxwq6v = ce3up0['indexOf']('?>', v6wtqk);if (kxwq6v) {
    var xk6waj = ce3up0['substring'](v6wtqk, kxwq6v)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xk6waj) {
      {
        xk6waj[0x0]['length'];
      }return wktv6q['processingInstruction'](xk6waj[0x1], xk6waj[0x2]), kxwq6v + 0x2;
    }return -0x1;
  }return -0x1;
}function Dsvq() {}function Dbp479f(uce3s0, b49f) {
  return uce3s0['__proto__'] = b49f, uce3s0;
}function Dc9pub3(xajw6k, fp947b) {
  var h1$ny8,
      oi_l = [],
      kw6vtq = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (kw6vtq['lastIndex'] = fp947b, kw6vtq['exec'](xajw6k); h1$ny8 = kw6vtq['exec'](xajw6k);) if (oi_l['push'](h1$ny8), h1$ny8[0x1]) return oi_l;
}var Dy1n = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Djqx6w = new RegExp('[\\-\\.0-9' + Dy1n['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Dwqk6t = new RegExp('^' + Dy1n['source'] + Djqx6w['source'] + '*(?::' + Dy1n['source'] + Djqx6w['source'] + '*)?$'),
    Dkwt6qv = 0x0,
    Dmoal5 = 0x1,
    Doma5jg = 0x2,
    Dwvqe = 0x3,
    Dktwq6v = 0x4,
    Dsq0et = 0x5,
    Do_gm = 0x6,
    Dlozi = 0x7;Da5xm['prototype'] = { 'parse': function (p7f, r2h_, xk6jg) {
    var lor = this['domBuilder'];lor['startDocument'](), Dzmo_il(r2h_, r2h_ = {}), Dxk6ajw(p7f, r2h_, xk6jg, lor, this['errorHandler']), lor['endDocument']();
  } }, Dsvq['prototype'] = { 'setTagName': function (wsktqv) {
    if (!Dwqk6t['test'](wsktqv)) throw new Error('invalid tagName:' + wsktqv);this['tagName'] = wsktqv;
  }, 'add': function (ir_2z, liomz, mgoja5) {
    if (!Dwqk6t['test'](ir_2z)) throw new Error('invalid attribute:' + ir_2z);this[this['length']++] = { 'qName': ir_2z, 'value': liomz, 'offset': mgoja5 };
  }, 'length': 0x0, 'getLocalName': function (w6xkqv) {
    return this[w6xkqv]['localName'];
  }, 'getLocator': function (qtvse0) {
    return this[qtvse0]['locator'];
  }, 'getQName': function (pc3u0) {
    return this[pc3u0]['qName'];
  }, 'getURI': function (wtvkq6) {
    return this[wtvkq6]['uri'];
  }, 'getValue': function ($2nh18) {
    return this[$2nh18]['value'];
  } }, Dbp479f({}, Dbp479f['prototype']) instanceof Dbp479f || (Dbp479f = function (tsewq, lir_2) {
  function m_i5l() {}m_i5l['prototype'] = lir_2, m_i5l = new m_i5l();for (lir_2 in tsewq) m_i5l[lir_2] = tsewq[lir_2];return m_i5l;
}), exports['XMLReader'] = Da5xm;