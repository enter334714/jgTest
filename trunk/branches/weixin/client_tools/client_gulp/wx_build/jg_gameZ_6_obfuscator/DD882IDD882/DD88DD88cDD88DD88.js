var G = wx.$E;
function Eqrw8a() {}function Eha9(vqrua9, hny9, i1jd_t, lxygp, jt_d) {
  function r7(u9gy) {
    if (u9gy > 0xffff) {
      u9gy -= 0x10000;var jdi5k6 = 0xd800 + (u9gy >> 0xa),
          xpol = 0xdc00 + (0x3ff & u9gy);return String['fromCharCode'](jdi5k6, xpol);
    }return String['fromCharCode'](u9gy);
  }function vrq9ua(dj5_i1) {
    var ny9phg = dj5_i1['slice'](0x1, -0x1);return ny9phg in i1jd_t ? i1jd_t[ny9phg] : '#' === ny9phg['charAt'](0x0) ? r7(parseInt(ny9phg['substr'](0x1)['replace']('x', '0x'))) : (jt_d['error']('entity not found:' + dj5_i1), dj5_i1);
  }function qvwf8($64cb) {
    if ($64cb > uhrqa) {
      var s2_3 = vqrua9['substring'](uhrqa, $64cb)['replace'](/&#?\w+;/g, vrq9ua);r8awv && wq8ra(uhrqa), lxygp['characters'](s2_3, 0x0, $64cb - uhrqa), uhrqa = $64cb;
    }
  }function wq8ra($bkc, yg9phu) {
    for (; $bkc >= f84m7b && (yg9phu = pahu['exec'](vqrua9));) j1i6d5 = yg9phu['index'], f84m7b = j1i6d5 + yg9phu[0x0]['length'], r8awv['lineNumber']++;r8awv['columnNumber'] = $bkc - j1i6d5 + 0x1;
  }for (var j1i6d5 = 0x0, f84m7b = 0x0, pahu = /.*(?:\r\n?|\n)|.*$/g, r8awv = lxygp['locator'], xnglyp = [{ 'currentNSMap': hny9 }], rv = {}, uhrqa = 0x0;;) {
    try {
      var h9gupa = vqrua9['indexOf']('<', uhrqa);if (0x0 > h9gupa) {
        if (!vqrua9['substr'](uhrqa)['match'](/^\s*$/)) {
          var fv7wr8 = lxygp['doc'],
              lp = fv7wr8['createTextNode'](vqrua9['substr'](uhrqa));fv7wr8['appendChild'](lp), lxygp['currentElement'] = lp;
        }return;
      }switch (h9gupa > uhrqa && qvwf8(h9gupa), vqrua9['charAt'](h9gupa + 0x1)) {case '/':
          var kc$64b = vqrua9['indexOf']('>', h9gupa + 0x3),
              gpyn9h = vqrua9['substring'](h9gupa + 0x2, kc$64b),
              lypx = xnglyp['pop']();0x0 > kc$64b ? (gpyn9h = vqrua9['substring'](h9gupa + 0x2)['replace'](/[\s<].*/, ''), jt_d['error']('end tag name: ' + gpyn9h + ' is not complete:' + lypx['tagName']), kc$64b = h9gupa + 0x1 + gpyn9h['length']) : gpyn9h['match'](/\s</) && (gpyn9h = gpyn9h['replace'](/[\s<].*/, ''), jt_d['error']('end tag name: ' + gpyn9h + ' maybe not complete'), kc$64b = h9gupa + 0x1 + gpyn9h['length']);var j5i1_ = lypx['localNSMap'],
              q9gahu = lypx['tagName'] == gpyn9h,
              b47mc = q9gahu || lypx['tagName'] && lypx['tagName']['toLowerCase']() == gpyn9h['toLowerCase']();if (b47mc) {
            if (lxygp['endElement'](lypx['uri'], lypx['localName'], gpyn9h), j5i1_) {
              for (var au9pg in j5i1_) lxygp['endPrefixMapping'](au9pg);
            }q9gahu || jt_d['fatalError']('end tag name: ' + gpyn9h + ' is not match the current start tagName:' + lypx['tagName']);
          } else xnglyp['push'](lypx);kc$64b++;break;case '?':
          r8awv && wq8ra(h9gupa), kc$64b = Efv87m(vqrua9, h9gupa, lxygp);break;case '!':
          r8awv && wq8ra(h9gupa), kc$64b = Eaqw8vr(vqrua9, h9gupa, lxygp, jt_d);break;default:
          r8awv && wq8ra(h9gupa);var si1t_2 = new E_d1st(),
              _jid51 = xnglyp[xnglyp['length'] - 0x1]['currentNSMap'],
              kc$64b = Eyphng9(vqrua9, h9gupa, si1t_2, _jid51, vrq9ua, jt_d),
              d5kj6$ = si1t_2['length'];if (!si1t_2['closed'] && Eghaup(vqrua9, kc$64b, si1t_2['tagName'], rv) && (si1t_2['closed'] = !0x0, i1jd_t['nbsp'] || jt_d['warning']('unclosed xml attribute')), r8awv && d5kj6$) {
            for (var b84f7m = Eygxlp(r8awv, {}), nlyhpg = 0x0; d5kj6$ > nlyhpg; nlyhpg++) {
              var vqrwa8 = si1t_2[nlyhpg];wq8ra(vqrwa8['offset']), vqrwa8['locator'] = Eygxlp(r8awv, {});
            }lxygp['locator'] = b84f7m, Eynglhp(si1t_2, lxygp, _jid51) && xnglyp['push'](si1t_2), lxygp['locator'] = r8awv;
          } else Eynglhp(si1t_2, lxygp, _jid51) && xnglyp['push'](si1t_2);'http://www.w3.org/1999/xhtml' !== si1t_2['uri'] || si1t_2['closed'] ? kc$64b++ : kc$64b = Ecmbk(vqrua9, kc$64b, si1t_2['tagName'], vrq9ua, lxygp);}
    } catch (rhu9aq) {
      jt_d['error']('element parse error: ' + rhu9aq), kc$64b = -0x1;
    }kc$64b > uhrqa ? uhrqa = kc$64b : qvwf8(Math['max'](h9gupa, uhrqa) + 0x1);
  }
}function Eygxlp(w7fm8b, u9varq) {
  return u9varq['lineNumber'] = w7fm8b['lineNumber'], u9varq['columnNumber'] = w7fm8b['columnNumber'], u9varq;
}function Eyphng9(_03ts, pglyx, auqwr, hpngly, m7bc$4, tzs032) {
  for (var uh9q, gnhy9, ij5d_ = ++pglyx, wqav = Edi65kj;;) {
    var d6j$ = _03ts['charAt'](ij5d_);switch (d6j$) {case '=':
        if (wqav === Enpyglx) uh9q = _03ts['slice'](pglyx, ij5d_), wqav = Ed6j5ki;else {
          if (wqav !== Ezt2s3) throw new Error('attribute equal must after attrName');wqav = Ed6j5ki;
        }break;case '\x27':case '\x22':
        if (wqav === Ed6j5ki || wqav === Enpyglx) {
          if (wqav === Enpyglx && (tzs032['warning']('attribute value must after "="'), uh9q = _03ts['slice'](pglyx, ij5d_)), pglyx = ij5d_ + 0x1, ij5d_ = _03ts['indexOf'](d6j$, pglyx), !(ij5d_ > 0x0)) throw new Error('attribute value no end \'' + d6j$ + '\' match');gnhy9 = _03ts['slice'](pglyx, ij5d_)['replace'](/&#?\w+;/g, m7bc$4), auqwr['add'](uh9q, gnhy9, pglyx - 0x1), wqav = Egh9u;
        } else {
          if (wqav != Es_ti1d) throw new Error('attribute value must after "="');gnhy9 = _03ts['slice'](pglyx, ij5d_)['replace'](/&#?\w+;/g, m7bc$4), auqwr['add'](uh9q, gnhy9, pglyx), tzs032['warning']('attribute "' + uh9q + '" missed start quot(' + d6j$ + ')!!'), pglyx = ij5d_ + 0x1, wqav = Egh9u;
        }break;case '/':
        switch (wqav) {case Edi65kj:
            auqwr['setTagName'](_03ts['slice'](pglyx, ij5d_));case Egh9u:case E_1s3:case Ephuag9:
            wqav = Ephuag9, auqwr['closed'] = !0x0;case Es_ti1d:case Enpyglx:case Ezt2s3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return tzs032['error']('unexpected end of input'), wqav == Edi65kj && auqwr['setTagName'](_03ts['slice'](pglyx, ij5d_)), ij5d_;case '>':
        switch (wqav) {case Edi65kj:
            auqwr['setTagName'](_03ts['slice'](pglyx, ij5d_));case Egh9u:case E_1s3:case Ephuag9:
            break;case Es_ti1d:case Enpyglx:
            gnhy9 = _03ts['slice'](pglyx, ij5d_), '/' === gnhy9['slice'](-0x1) && (auqwr['closed'] = !0x0, gnhy9 = gnhy9['slice'](0x0, -0x1));case Ezt2s3:
            wqav === Ezt2s3 && (gnhy9 = uh9q), wqav == Es_ti1d ? (tzs032['warning']('attribute "' + gnhy9 + '" missed quot(")!!'), auqwr['add'](uh9q, gnhy9['replace'](/&#?\w+;/g, m7bc$4), pglyx)) : ('http://www.w3.org/1999/xhtml' === hpngly[''] && gnhy9['match'](/^(?:disabled|checked|selected)$/i) || tzs032['warning']('attribute "' + gnhy9 + '" missed value!! "' + gnhy9 + '" instead!!'), auqwr['add'](gnhy9, gnhy9, pglyx));break;case Ed6j5ki:
            throw new Error('attribute value missed!!');}return ij5d_;case '\u0080':
        d6j$ = '\x20';default:
        if ('\x20' >= d6j$) switch (wqav) {case Edi65kj:
            auqwr['setTagName'](_03ts['slice'](pglyx, ij5d_)), wqav = E_1s3;break;case Enpyglx:
            uh9q = _03ts['slice'](pglyx, ij5d_), wqav = Ezt2s3;break;case Es_ti1d:
            var gnhy9 = _03ts['slice'](pglyx, ij5d_)['replace'](/&#?\w+;/g, m7bc$4);tzs032['warning']('attribute "' + gnhy9 + '" missed quot(")!!'), auqwr['add'](uh9q, gnhy9, pglyx);case Egh9u:
            wqav = E_1s3;} else switch (wqav) {case Ezt2s3:
            {
              auqwr['tagName'];
            }'http://www.w3.org/1999/xhtml' === hpngly[''] && uh9q['match'](/^(?:disabled|checked|selected)$/i) || tzs032['warning']('attribute "' + uh9q + '" missed value!! "' + uh9q + '" instead2!!'), auqwr['add'](uh9q, uh9q, pglyx), pglyx = ij5d_, wqav = Enpyglx;break;case Egh9u:
            tzs032['warning']('attribute space is required"' + uh9q + '\x22!!');case E_1s3:
            wqav = Enpyglx, pglyx = ij5d_;break;case Ed6j5ki:
            wqav = Es_ti1d, pglyx = ij5d_;break;case Ephuag9:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ij5d_++;
  }
}function Eynglhp(gnh9py, _t1i2s, gnhply) {
  for (var d5ji16 = gnh9py['tagName'], is12_t = null, cb$46k = gnh9py['length']; cb$46k--;) {
    var wvfr78 = gnh9py[cb$46k],
        wfr8q = wvfr78['qName'],
        q9vrau = wvfr78['value'],
        q8rfvw = wfr8q['indexOf'](':');if (q8rfvw > 0x0) var lghnpy = wvfr78['prefix'] = wfr8q['slice'](0x0, q8rfvw),
        tsdi1_ = wfr8q['slice'](q8rfvw + 0x1),
        rqav = 'xmlns' === lghnpy && tsdi1_;else tsdi1_ = wfr8q, lghnpy = null, rqav = 'xmlns' === wfr8q && '';wvfr78['localName'] = tsdi1_, rqav !== !0x1 && (null == is12_t && (is12_t = {}, Eji_td1(gnhply, gnhply = {})), gnhply[rqav] = is12_t[rqav] = q9vrau, wvfr78['uri'] = 'http://www.w3.org/2000/xmlns/', _t1i2s['startPrefixMapping'](rqav, q9vrau));
  }for (var cb$46k = gnh9py['length']; cb$46k--;) {
    wvfr78 = gnh9py[cb$46k];var lghnpy = wvfr78['prefix'];lghnpy && ('xml' === lghnpy && (wvfr78['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lghnpy && (wvfr78['uri'] = gnhply[lghnpy || '']));
  }var q8rfvw = d5ji16['indexOf'](':');q8rfvw > 0x0 ? (lghnpy = gnh9py['prefix'] = d5ji16['slice'](0x0, q8rfvw), tsdi1_ = gnh9py['localName'] = d5ji16['slice'](q8rfvw + 0x1)) : (lghnpy = null, tsdi1_ = gnh9py['localName'] = d5ji16);var pnlygh = gnh9py['uri'] = gnhply[lghnpy || ''];if (_t1i2s['startElement'](pnlygh, tsdi1_, d5ji16, gnh9py), !gnh9py['closed']) return gnh9py['currentNSMap'] = gnhply, gnh9py['localNSMap'] = is12_t, !0x0;if (_t1i2s['endElement'](pnlygh, tsdi1_, d5ji16), is12_t) {
    for (lghnpy in is12_t) _t1i2s['endPrefixMapping'](lghnpy);
  }
}function Ecmbk(p9ghy, cbm, ugaq, c$b46k, st203z) {
  if (/^(?:script|textarea)$/i['test'](ugaq)) {
    var zt032 = p9ghy['indexOf']('</' + ugaq + '>', cbm),
        qar8 = p9ghy['substring'](cbm + 0x1, zt032);if (/[&<]/['test'](qar8)) return (/^script$/i['test'](ugaq) ? (st203z['characters'](qar8, 0x0, qar8['length']), zt032) : (qar8 = qar8['replace'](/&#?\w+;/g, c$b46k), st203z['characters'](qar8, 0x0, qar8['length']), zt032)
    );
  }return cbm + 0x1;
}function Eghaup(_ti1sd, ti1_dj, pyg9hu, fqvw) {
  var ployx = fqvw[pyg9hu];return null == ployx && (ployx = _ti1sd['lastIndexOf']('</' + pyg9hu + '>'), ti1_dj > ployx && (ployx = _ti1sd['lastIndexOf']('</' + pyg9hu)), fqvw[pyg9hu] = ployx), ti1_dj > ployx;
}function Eji_td1(wqarv8, s2_t1) {
  for (var tis1d_ in wqarv8) s2_t1[tis1d_] = wqarv8[tis1d_];
}function Eaqw8vr(c54$k, puagh9, varqu, $56cjk) {
  var m$b47c = c54$k['charAt'](puagh9 + 0x2);switch (m$b47c) {case '-':
      if ('-' === c54$k['charAt'](puagh9 + 0x3)) {
        var ts0z = c54$k['indexOf']('-->', puagh9 + 0x4);return ts0z > puagh9 ? (varqu['comment'](c54$k, puagh9 + 0x4, ts0z - puagh9 - 0x4), ts0z + 0x3) : ($56cjk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == c54$k['substr'](puagh9 + 0x3, 0x6)) {
        var ts0z = c54$k['indexOf'](']]>', puagh9 + 0x9);return varqu['startCDATA'](), varqu['characters'](c54$k, puagh9 + 0x9, ts0z - puagh9 - 0x9), varqu['endCDATA'](), ts0z + 0x3;
      }var i1dt = Eh9g(c54$k, puagh9),
          lxpnyo = i1dt['length'];if (lxpnyo > 0x1 && /!doctype/i['test'](i1dt[0x0][0x0])) {
        var vq8rw = i1dt[0x1][0x0],
            tij1 = lxpnyo > 0x3 && /^public$/i['test'](i1dt[0x2][0x0]) && i1dt[0x3][0x0],
            b64k$c = lxpnyo > 0x4 && i1dt[0x4][0x0],
            idjt_ = i1dt[lxpnyo - 0x1];return varqu['startDTD'](vq8rw, tij1 && tij1['replace'](/^(['"])(.*?)\1$/, '$2'), b64k$c && b64k$c['replace'](/^(['"])(.*?)\1$/, '$2')), varqu['endDTD'](), idjt_['index'] + idjt_[0x0]['length'];
      }}return -0x1;
}function Efv87m(m7w8fv, nlgy, wvq8a) {
  var s2_31 = m7w8fv['indexOf']('?>', nlgy);if (s2_31) {
    var kmcb$ = m7w8fv['substring'](nlgy, s2_31)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (kmcb$) {
      {
        kmcb$[0x0]['length'];
      }return wvq8a['processingInstruction'](kmcb$[0x1], kmcb$[0x2]), s2_31 + 0x2;
    }return -0x1;
  }return -0x1;
}function E_d1st() {}function E_2is(uv9ar, yphu9) {
  return uv9ar['__proto__'] = yphu9, uv9ar;
}function Eh9g(xynlop, nyl) {
  var qw8vf,
      wv7mf8 = [],
      ygnxpl = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ygnxpl['lastIndex'] = nyl, ygnxpl['exec'](xynlop); qw8vf = ygnxpl['exec'](xynlop);) if (wv7mf8['push'](qw8vf), qw8vf[0x1]) return wv7mf8;
}var Es02 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Ehau9rq = new RegExp('[\\-\\.0-9' + Es02['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Ehygu9 = new RegExp('^' + Es02['source'] + Ehau9rq['source'] + '*(?::' + Es02['source'] + Ehau9rq['source'] + '*)?$'),
    Edi65kj = 0x0,
    Enpyglx = 0x1,
    Ezt2s3 = 0x2,
    Ed6j5ki = 0x3,
    Es_ti1d = 0x4,
    Egh9u = 0x5,
    E_1s3 = 0x6,
    Ephuag9 = 0x7;Eqrw8a['prototype'] = { 'parse': function (pn9hgy, b$mc7, vuwqa) {
    var w8av = this['domBuilder'];w8av['startDocument'](), Eji_td1(b$mc7, b$mc7 = {}), Eha9(pn9hgy, b$mc7, vuwqa, w8av, this['errorHandler']), w8av['endDocument']();
  } }, E_d1st['prototype'] = { 'setTagName': function (qwura) {
    if (!Ehygu9['test'](qwura)) throw new Error('invalid tagName:' + qwura);this['tagName'] = qwura;
  }, 'add': function ($4c65, hguy9, sdi1t) {
    if (!Ehygu9['test']($4c65)) throw new Error('invalid attribute:' + $4c65);this[this['length']++] = { 'qName': $4c65, 'value': hguy9, 'offset': sdi1t };
  }, 'length': 0x0, 'getLocalName': function (rquavw) {
    return this[rquavw]['localName'];
  }, 'getLocator': function (j5d6ik) {
    return this[j5d6ik]['locator'];
  }, 'getQName': function (_1tdj) {
    return this[_1tdj]['qName'];
  }, 'getURI': function (c$b64) {
    return this[c$b64]['uri'];
  }, 'getValue': function (jki65d) {
    return this[jki65d]['value'];
  } }, E_2is({}, E_2is['prototype']) instanceof E_2is || (E_2is = function (_1si2, guph9) {
  function wv8m() {}wv8m['prototype'] = guph9, wv8m = new wv8m();for (guph9 in _1si2) wv8m[guph9] = _1si2[guph9];return wv8m;
}), exports['XMLReader'] = Eqrw8a;