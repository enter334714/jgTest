var s = wx.$W;
function wjwons() {}function wojmn(rxvya$, dakxy, dybrxk, qmows, wojsnm) {
  function nqsmow(v9la) {
    if (v9la > 0xffff) {
      v9la -= 0x10000;var mnows = 0xd800 + (v9la >> 0xa),
          dgx = 0xdc00 + (0x3ff & v9la);return String['fromCharCode'](mnows, dgx);
    }return String['fromCharCode'](v9la);
  }function $la9(g5cbd) {
    var om4sq = g5cbd['slice'](0x1, -0x1);return om4sq in dybrxk ? dybrxk[om4sq] : '#' === om4sq['charAt'](0x0) ? nqsmow(parseInt(om4sq['substr'](0x1)['replace']('x', '0x'))) : (wojsnm['error']('entity not found:' + g5cbd), g5cbd);
  }function nwzf(h0ptu) {
    if (h0ptu > nmows) {
      var ardky = rxvya$['substring'](nmows, h0ptu)['replace'](/&#?\w+;/g, $la9);xgkdb && mp6qs4(nmows), qmows['characters'](ardky, 0x0, h0ptu - nmows), nmows = h0ptu;
    }
  }function mp6qs4($xyvar, nfzjew) {
    for (; $xyvar >= a$dyx && (nfzjew = m6qos4['exec'](rxvya$));) ownje = nfzjew['index'], a$dyx = ownje + nfzjew[0x0]['length'], xgkdb['lineNumber']++;xgkdb['columnNumber'] = $xyvar - ownje + 0x1;
  }for (var ownje = 0x0, a$dyx = 0x0, m6qos4 = /.*(?:\r\n?|\n)|.*$/g, xgkdb = qmows['locator'], dkc5 = [{ 'currentNSMap': dakxy }], ph06tu = {}, nmows = 0x0;;) {
    try {
      var ykrda = rxvya$['indexOf']('<', nmows);if (0x0 > ykrda) {
        if (!rxvya$['substr'](nmows)['match'](/^\s*$/)) {
          var dkyrbx = qmows['doc'],
              h4p6qu = dkyrbx['createTextNode'](rxvya$['substr'](nmows));dkyrbx['appendChild'](h4p6qu), qmows['currentElement'] = h4p6qu;
        }return;
      }switch (ykrda > nmows && nwzf(ykrda), rxvya$['charAt'](ykrda + 0x1)) {case '/':
          var zi3217 = rxvya$['indexOf']('>', ykrda + 0x3),
              daykxr = rxvya$['substring'](ykrda + 0x2, zi3217),
              no4ms = dkc5['pop']();0x0 > zi3217 ? (daykxr = rxvya$['substring'](ykrda + 0x2)['replace'](/[\s<].*/, ''), wojsnm['error']('end tag name: ' + daykxr + ' is not complete:' + no4ms['tagName']), zi3217 = ykrda + 0x1 + daykxr['length']) : daykxr['match'](/\s</) && (daykxr = daykxr['replace'](/[\s<].*/, ''), wojsnm['error']('end tag name: ' + daykxr + ' maybe not complete'), zi3217 = ykrda + 0x1 + daykxr['length']);var ze23f = no4ms['localNSMap'],
              mnwojs = no4ms['tagName'] == daykxr,
              ykxbdr = mnwojs || no4ms['tagName'] && no4ms['tagName']['toLowerCase']() == daykxr['toLowerCase']();if (ykxbdr) {
            if (qmows['endElement'](no4ms['uri'], no4ms['localName'], daykxr), ze23f) {
              for (var dgxr in ze23f) qmows['endPrefixMapping'](dgxr);
            }mnwojs || wojsnm['fatalError']('end tag name: ' + daykxr + ' is not match the current start tagName:' + no4ms['tagName']);
          } else dkc5['push'](no4ms);zi3217++;break;case '?':
          xgkdb && mp6qs4(ykrda), zi3217 = wc5t80(rxvya$, ykrda, qmows);break;case '!':
          xgkdb && mp6qs4(ykrda), zi3217 = wmosqwn(rxvya$, ykrda, qmows, wojsnm);break;default:
          xgkdb && mp6qs4(ykrda);var jzwnef = new wuh6p0(),
              somq46 = dkc5[dkc5['length'] - 0x1]['currentNSMap'],
              zi3217 = wgk8c5(rxvya$, ykrda, jzwnef, somq46, $la9, wojsnm),
              t06uph = jzwnef['length'];if (!jzwnef['closed'] && wdrx$(rxvya$, zi3217, jzwnef['tagName'], ph06tu) && (jzwnef['closed'] = !0x0, dybrxk['nbsp'] || wojsnm['warning']('unclosed xml attribute')), xgkdb && t06uph) {
            for (var ckgdrb = wad$x(xgkdb, {}), mqp6h = 0x0; t06uph > mqp6h; mqp6h++) {
              var q6m4ph = jzwnef[mqp6h];mp6qs4(q6m4ph['offset']), q6m4ph['locator'] = wad$x(xgkdb, {});
            }qmows['locator'] = ckgdrb, wsmn(jzwnef, qmows, somq46) && dkc5['push'](jzwnef), qmows['locator'] = xgkdb;
          } else wsmn(jzwnef, qmows, somq46) && dkc5['push'](jzwnef);'http://www.w3.org/1999/xhtml' !== jzwnef['uri'] || jzwnef['closed'] ? zi3217++ : zi3217 = wrax$dy(rxvya$, zi3217, jzwnef['tagName'], $la9, qmows);}
    } catch (krdcg) {
      wojsnm['error']('element parse error: ' + krdcg), zi3217 = -0x1;
    }zi3217 > nmows ? nmows = zi3217 : nwzf(Math['max'](ykrda, nmows) + 0x1);
  }
}function wad$x(z1fejw, pt06u) {
  return pt06u['lineNumber'] = z1fejw['lineNumber'], pt06u['columnNumber'] = z1fejw['columnNumber'], pt06u;
}function wgk8c5(k58bcg, njsfw, kcb5d, rdxbk, e2f3z1, kbdx) {
  for (var tp6uh, rkayxd, i7213 = ++njsfw, i1273 = wtu0c5;;) {
    var wqmnso = k58bcg['charAt'](i7213);switch (wqmnso) {case '=':
        if (i1273 === wct05u) tp6uh = k58bcg['slice'](njsfw, i7213), i1273 = wjnswom;else {
          if (i1273 !== wjnsmw) throw new Error('attribute equal must after attrName');i1273 = wjnswom;
        }break;case '\x27':case '\x22':
        if (i1273 === wjnswom || i1273 === wct05u) {
          if (i1273 === wct05u && (kbdx['warning']('attribute value must after "="'), tp6uh = k58bcg['slice'](njsfw, i7213)), njsfw = i7213 + 0x1, i7213 = k58bcg['indexOf'](wqmnso, njsfw), !(i7213 > 0x0)) throw new Error('attribute value no end \'' + wqmnso + '\' match');rkayxd = k58bcg['slice'](njsfw, i7213)['replace'](/&#?\w+;/g, e2f3z1), kcb5d['add'](tp6uh, rkayxd, njsfw - 0x1), i1273 = wlv9_$;
        } else {
          if (i1273 != wze3f1j) throw new Error('attribute value must after "="');rkayxd = k58bcg['slice'](njsfw, i7213)['replace'](/&#?\w+;/g, e2f3z1), kcb5d['add'](tp6uh, rkayxd, njsfw), kbdx['warning']('attribute "' + tp6uh + '" missed start quot(' + wqmnso + ')!!'), njsfw = i7213 + 0x1, i1273 = wlv9_$;
        }break;case '/':
        switch (i1273) {case wtu0c5:
            kcb5d['setTagName'](k58bcg['slice'](njsfw, i7213));case wlv9_$:case wwomqn:case wbc05:
            i1273 = wbc05, kcb5d['closed'] = !0x0;case wze3f1j:case wct05u:case wjnsmw:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kbdx['error']('unexpected end of input'), i1273 == wtu0c5 && kcb5d['setTagName'](k58bcg['slice'](njsfw, i7213)), i7213;case '>':
        switch (i1273) {case wtu0c5:
            kcb5d['setTagName'](k58bcg['slice'](njsfw, i7213));case wlv9_$:case wwomqn:case wbc05:
            break;case wze3f1j:case wct05u:
            rkayxd = k58bcg['slice'](njsfw, i7213), '/' === rkayxd['slice'](-0x1) && (kcb5d['closed'] = !0x0, rkayxd = rkayxd['slice'](0x0, -0x1));case wjnsmw:
            i1273 === wjnsmw && (rkayxd = tp6uh), i1273 == wze3f1j ? (kbdx['warning']('attribute "' + rkayxd + '" missed quot(")!!'), kcb5d['add'](tp6uh, rkayxd['replace'](/&#?\w+;/g, e2f3z1), njsfw)) : ('http://www.w3.org/1999/xhtml' === rdxbk[''] && rkayxd['match'](/^(?:disabled|checked|selected)$/i) || kbdx['warning']('attribute "' + rkayxd + '" missed value!! "' + rkayxd + '" instead!!'), kcb5d['add'](rkayxd, rkayxd, njsfw));break;case wjnswom:
            throw new Error('attribute value missed!!');}return i7213;case '\u0080':
        wqmnso = '\x20';default:
        if ('\x20' >= wqmnso) switch (i1273) {case wtu0c5:
            kcb5d['setTagName'](k58bcg['slice'](njsfw, i7213)), i1273 = wwomqn;break;case wct05u:
            tp6uh = k58bcg['slice'](njsfw, i7213), i1273 = wjnsmw;break;case wze3f1j:
            var rkayxd = k58bcg['slice'](njsfw, i7213)['replace'](/&#?\w+;/g, e2f3z1);kbdx['warning']('attribute "' + rkayxd + '" missed quot(")!!'), kcb5d['add'](tp6uh, rkayxd, njsfw);case wlv9_$:
            i1273 = wwomqn;} else switch (i1273) {case wjnsmw:
            {
              kcb5d['tagName'];
            }'http://www.w3.org/1999/xhtml' === rdxbk[''] && tp6uh['match'](/^(?:disabled|checked|selected)$/i) || kbdx['warning']('attribute "' + tp6uh + '" missed value!! "' + tp6uh + '" instead2!!'), kcb5d['add'](tp6uh, tp6uh, njsfw), njsfw = i7213, i1273 = wct05u;break;case wlv9_$:
            kbdx['warning']('attribute space is required"' + tp6uh + '\x22!!');case wwomqn:
            i1273 = wct05u, njsfw = i7213;break;case wjnswom:
            i1273 = wze3f1j, njsfw = i7213;break;case wbc05:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}i7213++;
  }
}function wsmn(ejwzf1, yadx$, njms) {
  for (var sm46q = ejwzf1['tagName'], rx$ay = null, krbdx = ejwzf1['length']; krbdx--;) {
    var wjson = ejwzf1[krbdx],
        gkdrcb = wjson['qName'],
        nwfo = wjson['value'],
        yaxv$ = gkdrcb['indexOf'](':');if (yaxv$ > 0x0) var nq4mo = wjson['prefix'] = gkdrcb['slice'](0x0, yaxv$),
        crb = gkdrcb['slice'](yaxv$ + 0x1),
        krdxby = 'xmlns' === nq4mo && crb;else crb = gkdrcb, nq4mo = null, krdxby = 'xmlns' === gkdrcb && '';wjson['localName'] = crb, krdxby !== !0x1 && (null == rx$ay && (rx$ay = {}, wnef(njms, njms = {})), njms[krdxby] = rx$ay[krdxby] = nwfo, wjson['uri'] = 'http://www.w3.org/2000/xmlns/', yadx$['startPrefixMapping'](krdxby, nwfo));
  }for (var krbdx = ejwzf1['length']; krbdx--;) {
    wjson = ejwzf1[krbdx];var nq4mo = wjson['prefix'];nq4mo && ('xml' === nq4mo && (wjson['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nq4mo && (wjson['uri'] = njms[nq4mo || '']));
  }var yaxv$ = sm46q['indexOf'](':');yaxv$ > 0x0 ? (nq4mo = ejwzf1['prefix'] = sm46q['slice'](0x0, yaxv$), crb = ejwzf1['localName'] = sm46q['slice'](yaxv$ + 0x1)) : (nq4mo = null, crb = ejwzf1['localName'] = sm46q);var va$yxr = ejwzf1['uri'] = njms[nq4mo || ''];if (yadx$['startElement'](va$yxr, crb, sm46q, ejwzf1), !ejwzf1['closed']) return ejwzf1['currentNSMap'] = njms, ejwzf1['localNSMap'] = rx$ay, !0x0;if (yadx$['endElement'](va$yxr, crb, sm46q), rx$ay) {
    for (nq4mo in rx$ay) yadx$['endPrefixMapping'](nq4mo);
  }
}function wrax$dy(dxgbr, f3e, ejnwfo, zefj1w, m4pqs6) {
  if (/^(?:script|textarea)$/i['test'](ejnwfo)) {
    var vy$xar = dxgbr['indexOf']('</' + ejnwfo + '>', f3e),
        hptu6 = dxgbr['substring'](f3e + 0x1, vy$xar);if (/[&<]/['test'](hptu6)) return (/^script$/i['test'](ejnwfo) ? (m4pqs6['characters'](hptu6, 0x0, hptu6['length']), vy$xar) : (hptu6 = hptu6['replace'](/&#?\w+;/g, zefj1w), m4pqs6['characters'](hptu6, 0x0, hptu6['length']), vy$xar)
    );
  }return f3e + 0x1;
}function wdrx$(tph60, d$yarx, bxyrdk, qm4no) {
  var omnsw = qm4no[bxyrdk];return null == omnsw && (omnsw = tph60['lastIndexOf']('</' + bxyrdk + '>'), d$yarx > omnsw && (omnsw = tph60['lastIndexOf']('</' + bxyrdk)), qm4no[bxyrdk] = omnsw), d$yarx > omnsw;
}function wnef(dgrcb, ef132) {
  for (var uht64p in dgrcb) ef132[uht64p] = dgrcb[uht64p];
}function wmosqwn(hpu64q, mq46os, oq6sm4, bryxkd) {
  var fenwjo = hpu64q['charAt'](mq46os + 0x2);switch (fenwjo) {case '-':
      if ('-' === hpu64q['charAt'](mq46os + 0x3)) {
        var cbdgk = hpu64q['indexOf']('-->', mq46os + 0x4);return cbdgk > mq46os ? (oq6sm4['comment'](hpu64q, mq46os + 0x4, cbdgk - mq46os - 0x4), cbdgk + 0x3) : (bryxkd['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == hpu64q['substr'](mq46os + 0x3, 0x6)) {
        var cbdgk = hpu64q['indexOf'](']]>', mq46os + 0x9);return oq6sm4['startCDATA'](), oq6sm4['characters'](hpu64q, mq46os + 0x9, cbdgk - mq46os - 0x9), oq6sm4['endCDATA'](), cbdgk + 0x3;
      }var a$rydx = wq6ms4o(hpu64q, mq46os),
          pm6q4s = a$rydx['length'];if (pm6q4s > 0x1 && /!doctype/i['test'](a$rydx[0x0][0x0])) {
        var e2z13f = a$rydx[0x1][0x0],
            avy$x = pm6q4s > 0x3 && /^public$/i['test'](a$rydx[0x2][0x0]) && a$rydx[0x3][0x0],
            p80uht = pm6q4s > 0x4 && a$rydx[0x4][0x0],
            yxdak = a$rydx[pm6q4s - 0x1];return oq6sm4['startDTD'](e2z13f, avy$x && avy$x['replace'](/^(['"])(.*?)\1$/, '$2'), p80uht && p80uht['replace'](/^(['"])(.*?)\1$/, '$2')), oq6sm4['endDTD'](), yxdak['index'] + yxdak[0x0]['length'];
      }}return -0x1;
}function wc5t80(cg80t5, u46hpt, i3z2) {
  var q6mo4s = cg80t5['indexOf']('?>', u46hpt);if (q6mo4s) {
    var snjwf = cg80t5['substring'](u46hpt, q6mo4s)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (snjwf) {
      {
        snjwf[0x0]['length'];
      }return i3z2['processingInstruction'](snjwf[0x1], snjwf[0x2]), q6mo4s + 0x2;
    }return -0x1;
  }return -0x1;
}function wuh6p0() {}function wejf1w(g08tc5, j1wef) {
  return g08tc5['__proto__'] = j1wef, g08tc5;
}function wq6ms4o(z123i, jfonwe) {
  var $ry,
      r$yxad = [],
      z21e37 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (z21e37['lastIndex'] = jfonwe, z21e37['exec'](z123i); $ry = z21e37['exec'](z123i);) if (r$yxad['push']($ry), $ry[0x1]) return r$yxad;
}var wjzfw1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    wp8ut0h = new RegExp('[\\-\\.0-9' + wjzfw1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    waykxdr = new RegExp('^' + wjzfw1['source'] + wp8ut0h['source'] + '*(?::' + wjzfw1['source'] + wp8ut0h['source'] + '*)?$'),
    wtu0c5 = 0x0,
    wct05u = 0x1,
    wjnsmw = 0x2,
    wjnswom = 0x3,
    wze3f1j = 0x4,
    wlv9_$ = 0x5,
    wwomqn = 0x6,
    wbc05 = 0x7;wjwons['prototype'] = { 'parse': function (l$y9a, nq4so, jewfzn) {
    var a$lvy = this['domBuilder'];a$lvy['startDocument'](), wnef(nq4so, nq4so = {}), wojmn(l$y9a, nq4so, jewfzn, a$lvy, this['errorHandler']), a$lvy['endDocument']();
  } }, wuh6p0['prototype'] = { 'setTagName': function (tph80u) {
    if (!waykxdr['test'](tph80u)) throw new Error('invalid tagName:' + tph80u);this['tagName'] = tph80u;
  }, 'add': function (nfojw, t8uh5, k85gbc) {
    if (!waykxdr['test'](nfojw)) throw new Error('invalid attribute:' + nfojw);this[this['length']++] = { 'qName': nfojw, 'value': t8uh5, 'offset': k85gbc };
  }, 'length': 0x0, 'getLocalName': function (oqnms) {
    return this[oqnms]['localName'];
  }, 'getLocator': function (sfjwo) {
    return this[sfjwo]['locator'];
  }, 'getQName': function (p4th6) {
    return this[p4th6]['qName'];
  }, 'getURI': function (v$yla9) {
    return this[v$yla9]['uri'];
  }, 'getValue': function (xvy$a9) {
    return this[xvy$a9]['value'];
  } }, wejf1w({}, wejf1w['prototype']) instanceof wejf1w || (wejf1w = function (dgkcb5, cb85g) {
  function q64() {}q64['prototype'] = cb85g, q64 = new q64();for (cb85g in dgkcb5) q64[cb85g] = dgkcb5[cb85g];return q64;
}), exports['XMLReader'] = wjwons;