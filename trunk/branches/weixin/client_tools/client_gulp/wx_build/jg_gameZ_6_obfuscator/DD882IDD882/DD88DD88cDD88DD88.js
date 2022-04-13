var G = wx.$E;
function Et1i_dj() {}function Et1sd(gnlxpy, urvwqa, kc45$, fwb, rwvu) {
  function hplny(ck$64b) {
    if (ck$64b > 0xffff) {
      ck$64b -= 0x10000;var _std1i = 0xd800 + (ck$64b >> 0xa),
          oyxnpl = 0xdc00 + (0x3ff & ck$64b);return String['fromCharCode'](_std1i, oyxnpl);
    }return String['fromCharCode'](ck$64b);
  }function qfr($4kcb) {
    var m$bc47 = $4kcb['slice'](0x1, -0x1);return m$bc47 in kc45$ ? kc45$[m$bc47] : '#' === m$bc47['charAt'](0x0) ? hplny(parseInt(m$bc47['substr'](0x1)['replace']('x', '0x'))) : (rwvu['error']('entity not found:' + $4kcb), $4kcb);
  }function c$k65j(hnpylg) {
    if (hnpylg > lxpno) {
      var i_s1d = gnlxpy['substring'](lxpno, hnpylg)['replace'](/&#?\w+;/g, qfr);gha9 && t1_isd(lxpno), fwb['characters'](i_s1d, 0x0, hnpylg - lxpno), lxpno = hnpylg;
    }
  }function t1_isd(cm7b4f, u9arh) {
    for (; cm7b4f >= m48fb && (u9arh = j_i1d5['exec'](gnlxpy));) ngh = u9arh['index'], m48fb = ngh + u9arh[0x0]['length'], gha9['lineNumber']++;gha9['columnNumber'] = cm7b4f - ngh + 0x1;
  }for (var ngh = 0x0, m48fb = 0x0, j_i1d5 = /.*(?:\r\n?|\n)|.*$/g, gha9 = fwb['locator'], urvqw = [{ 'currentNSMap': urvwqa }], vuqwra = {}, lxpno = 0x0;;) {
    try {
      var wv7 = gnlxpy['indexOf']('<', lxpno);if (0x0 > wv7) {
        if (!gnlxpy['substr'](lxpno)['match'](/^\s*$/)) {
          var xnloyp = fwb['doc'],
              nygxp = xnloyp['createTextNode'](gnlxpy['substr'](lxpno));xnloyp['appendChild'](nygxp), fwb['currentElement'] = nygxp;
        }return;
      }switch (wv7 > lxpno && c$k65j(wv7), gnlxpy['charAt'](wv7 + 0x1)) {case '/':
          var fr87v = gnlxpy['indexOf']('>', wv7 + 0x3),
              olnp = gnlxpy['substring'](wv7 + 0x2, fr87v),
              z302 = urvqw['pop']();0x0 > fr87v ? (olnp = gnlxpy['substring'](wv7 + 0x2)['replace'](/[\s<].*/, ''), rwvu['error']('end tag name: ' + olnp + ' is not complete:' + z302['tagName']), fr87v = wv7 + 0x1 + olnp['length']) : olnp['match'](/\s</) && (olnp = olnp['replace'](/[\s<].*/, ''), rwvu['error']('end tag name: ' + olnp + ' maybe not complete'), fr87v = wv7 + 0x1 + olnp['length']);var $bc47 = z302['localNSMap'],
              pyoxl = z302['tagName'] == olnp,
              nylpxo = pyoxl || z302['tagName'] && z302['tagName']['toLowerCase']() == olnp['toLowerCase']();if (nylpxo) {
            if (fwb['endElement'](z302['uri'], z302['localName'], olnp), $bc47) {
              for (var aghq9 in $bc47) fwb['endPrefixMapping'](aghq9);
            }pyoxl || rwvu['fatalError']('end tag name: ' + olnp + ' is not match the current start tagName:' + z302['tagName']);
          } else urvqw['push'](z302);fr87v++;break;case '?':
          gha9 && t1_isd(wv7), fr87v = Ebc$4m(gnlxpy, wv7, fwb);break;case '!':
          gha9 && t1_isd(wv7), fr87v = Es32_1t(gnlxpy, wv7, fwb, rwvu);break;default:
          gha9 && t1_isd(wv7);var gl = new Ei61dj5(),
              jd56 = urvqw[urvqw['length'] - 0x1]['currentNSMap'],
              fr87v = Eb7fm(gnlxpy, wv7, gl, jd56, qfr, rwvu),
              _id1jt = gl['length'];if (!gl['closed'] && Edi1tj_(gnlxpy, fr87v, gl['tagName'], vuqwra) && (gl['closed'] = !0x0, kc45$['nbsp'] || rwvu['warning']('unclosed xml attribute')), gha9 && _id1jt) {
            for (var jkd5i6 = Edik6j5(gha9, {}), _1ji = 0x0; _id1jt > _1ji; _1ji++) {
              var z0t23s = gl[_1ji];t1_isd(z0t23s['offset']), z0t23s['locator'] = Edik6j5(gha9, {});
            }fwb['locator'] = jkd5i6, Et2s_1(gl, fwb, jd56) && urvqw['push'](gl), fwb['locator'] = gha9;
          } else Et2s_1(gl, fwb, jd56) && urvqw['push'](gl);'http://www.w3.org/1999/xhtml' !== gl['uri'] || gl['closed'] ? fr87v++ : fr87v = Edj165i(gnlxpy, fr87v, gl['tagName'], qfr, fwb);}
    } catch (s_0t32) {
      rwvu['error']('element parse error: ' + s_0t32), fr87v = -0x1;
    }fr87v > lxpno ? lxpno = fr87v : c$k65j(Math['max'](wv7, lxpno) + 0x1);
  }
}function Edik6j5(npx, lngpyh) {
  return lngpyh['lineNumber'] = npx['lineNumber'], lngpyh['columnNumber'] = npx['columnNumber'], lngpyh;
}function Eb7fm(_t21s, uq9ahr, cmb$4k, m74c, t_ji, w7r8fv) {
  for (var f78wbm, t2is_1, $47 = ++uq9ahr, q9huga = Est2i_;;) {
    var $6b4 = _t21s['charAt']($47);switch ($6b4) {case '=':
        if (q9huga === Epgyhnl) f78wbm = _t21s['slice'](uq9ahr, $47), q9huga = Eonyxl;else {
          if (q9huga !== Egxlpny) throw new Error('attribute equal must after attrName');q9huga = Eonyxl;
        }break;case '\x27':case '\x22':
        if (q9huga === Eonyxl || q9huga === Epgyhnl) {
          if (q9huga === Epgyhnl && (w7r8fv['warning']('attribute value must after "="'), f78wbm = _t21s['slice'](uq9ahr, $47)), uq9ahr = $47 + 0x1, $47 = _t21s['indexOf']($6b4, uq9ahr), !($47 > 0x0)) throw new Error('attribute value no end \'' + $6b4 + '\' match');t2is_1 = _t21s['slice'](uq9ahr, $47)['replace'](/&#?\w+;/g, t_ji), cmb$4k['add'](f78wbm, t2is_1, uq9ahr - 0x1), q9huga = Ecb$4mk;
        } else {
          if (q9huga != Ev8warq) throw new Error('attribute value must after "="');t2is_1 = _t21s['slice'](uq9ahr, $47)['replace'](/&#?\w+;/g, t_ji), cmb$4k['add'](f78wbm, t2is_1, uq9ahr), w7r8fv['warning']('attribute "' + f78wbm + '" missed start quot(' + $6b4 + ')!!'), uq9ahr = $47 + 0x1, q9huga = Ecb$4mk;
        }break;case '/':
        switch (q9huga) {case Est2i_:
            cmb$4k['setTagName'](_t21s['slice'](uq9ahr, $47));case Ecb$4mk:case Ejdi15_:case Ea9uvqr:
            q9huga = Ea9uvqr, cmb$4k['closed'] = !0x0;case Ev8warq:case Epgyhnl:case Egxlpny:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return w7r8fv['error']('unexpected end of input'), q9huga == Est2i_ && cmb$4k['setTagName'](_t21s['slice'](uq9ahr, $47)), $47;case '>':
        switch (q9huga) {case Est2i_:
            cmb$4k['setTagName'](_t21s['slice'](uq9ahr, $47));case Ecb$4mk:case Ejdi15_:case Ea9uvqr:
            break;case Ev8warq:case Epgyhnl:
            t2is_1 = _t21s['slice'](uq9ahr, $47), '/' === t2is_1['slice'](-0x1) && (cmb$4k['closed'] = !0x0, t2is_1 = t2is_1['slice'](0x0, -0x1));case Egxlpny:
            q9huga === Egxlpny && (t2is_1 = f78wbm), q9huga == Ev8warq ? (w7r8fv['warning']('attribute "' + t2is_1 + '" missed quot(")!!'), cmb$4k['add'](f78wbm, t2is_1['replace'](/&#?\w+;/g, t_ji), uq9ahr)) : ('http://www.w3.org/1999/xhtml' === m74c[''] && t2is_1['match'](/^(?:disabled|checked|selected)$/i) || w7r8fv['warning']('attribute "' + t2is_1 + '" missed value!! "' + t2is_1 + '" instead!!'), cmb$4k['add'](t2is_1, t2is_1, uq9ahr));break;case Eonyxl:
            throw new Error('attribute value missed!!');}return $47;case '\u0080':
        $6b4 = '\x20';default:
        if ('\x20' >= $6b4) switch (q9huga) {case Est2i_:
            cmb$4k['setTagName'](_t21s['slice'](uq9ahr, $47)), q9huga = Ejdi15_;break;case Epgyhnl:
            f78wbm = _t21s['slice'](uq9ahr, $47), q9huga = Egxlpny;break;case Ev8warq:
            var t2is_1 = _t21s['slice'](uq9ahr, $47)['replace'](/&#?\w+;/g, t_ji);w7r8fv['warning']('attribute "' + t2is_1 + '" missed quot(")!!'), cmb$4k['add'](f78wbm, t2is_1, uq9ahr);case Ecb$4mk:
            q9huga = Ejdi15_;} else switch (q9huga) {case Egxlpny:
            {
              cmb$4k['tagName'];
            }'http://www.w3.org/1999/xhtml' === m74c[''] && f78wbm['match'](/^(?:disabled|checked|selected)$/i) || w7r8fv['warning']('attribute "' + f78wbm + '" missed value!! "' + f78wbm + '" instead2!!'), cmb$4k['add'](f78wbm, f78wbm, uq9ahr), uq9ahr = $47, q9huga = Epgyhnl;break;case Ecb$4mk:
            w7r8fv['warning']('attribute space is required"' + f78wbm + '\x22!!');case Ejdi15_:
            q9huga = Epgyhnl, uq9ahr = $47;break;case Eonyxl:
            q9huga = Ev8warq, uq9ahr = $47;break;case Ea9uvqr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$47++;
  }
}function Et2s_1(fc74b, fm4c, b$cm7) {
  for (var gyhu = fc74b['tagName'], qa8rw = null, tisd_ = fc74b['length']; tisd_--;) {
    var ck$b6 = fc74b[tisd_],
        quhg9a = ck$b6['qName'],
        _132 = ck$b6['value'],
        vwrua = quhg9a['indexOf'](':');if (vwrua > 0x0) var qwvr8a = ck$b6['prefix'] = quhg9a['slice'](0x0, vwrua),
        ij51d6 = quhg9a['slice'](vwrua + 0x1),
        rq9hau = 'xmlns' === qwvr8a && ij51d6;else ij51d6 = quhg9a, qwvr8a = null, rq9hau = 'xmlns' === quhg9a && '';ck$b6['localName'] = ij51d6, rq9hau !== !0x1 && (null == qa8rw && (qa8rw = {}, Eylpgh(b$cm7, b$cm7 = {})), b$cm7[rq9hau] = qa8rw[rq9hau] = _132, ck$b6['uri'] = 'http://www.w3.org/2000/xmlns/', fm4c['startPrefixMapping'](rq9hau, _132));
  }for (var tisd_ = fc74b['length']; tisd_--;) {
    ck$b6 = fc74b[tisd_];var qwvr8a = ck$b6['prefix'];qwvr8a && ('xml' === qwvr8a && (ck$b6['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qwvr8a && (ck$b6['uri'] = b$cm7[qwvr8a || '']));
  }var vwrua = gyhu['indexOf'](':');vwrua > 0x0 ? (qwvr8a = fc74b['prefix'] = gyhu['slice'](0x0, vwrua), ij51d6 = fc74b['localName'] = gyhu['slice'](vwrua + 0x1)) : (qwvr8a = null, ij51d6 = fc74b['localName'] = gyhu);var nxpylg = fc74b['uri'] = b$cm7[qwvr8a || ''];if (fm4c['startElement'](nxpylg, ij51d6, gyhu, fc74b), !fc74b['closed']) return fc74b['currentNSMap'] = b$cm7, fc74b['localNSMap'] = qa8rw, !0x0;if (fm4c['endElement'](nxpylg, ij51d6, gyhu), qa8rw) {
    for (qwvr8a in qa8rw) fm4c['endPrefixMapping'](qwvr8a);
  }
}function Edj165i(c56k$, it12s_, qwv8fr, urva9, fvw8r7) {
  if (/^(?:script|textarea)$/i['test'](qwv8fr)) {
    var di_ts1 = c56k$['indexOf']('</' + qwv8fr + '>', it12s_),
        rw8qf = c56k$['substring'](it12s_ + 0x1, di_ts1);if (/[&<]/['test'](rw8qf)) return (/^script$/i['test'](qwv8fr) ? (fvw8r7['characters'](rw8qf, 0x0, rw8qf['length']), di_ts1) : (rw8qf = rw8qf['replace'](/&#?\w+;/g, urva9), fvw8r7['characters'](rw8qf, 0x0, rw8qf['length']), di_ts1)
    );
  }return it12s_ + 0x1;
}function Edi1tj_($46bck, _1ji5, uq9ahg, hq9aug) {
  var mb4k = hq9aug[uq9ahg];return null == mb4k && (mb4k = $46bck['lastIndexOf']('</' + uq9ahg + '>'), _1ji5 > mb4k && (mb4k = $46bck['lastIndexOf']('</' + uq9ahg)), hq9aug[uq9ahg] = mb4k), _1ji5 > mb4k;
}function Eylpgh(i_1j5, qfw) {
  for (var djt1_ in i_1j5) qfw[djt1_] = i_1j5[djt1_];
}function Es32_1t(nplygh, quarwv, xpglyn, xlnpg) {
  var $cb74 = nplygh['charAt'](quarwv + 0x2);switch ($cb74) {case '-':
      if ('-' === nplygh['charAt'](quarwv + 0x3)) {
        var rwvuqa = nplygh['indexOf']('-->', quarwv + 0x4);return rwvuqa > quarwv ? (xpglyn['comment'](nplygh, quarwv + 0x4, rwvuqa - quarwv - 0x4), rwvuqa + 0x3) : (xlnpg['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nplygh['substr'](quarwv + 0x3, 0x6)) {
        var rwvuqa = nplygh['indexOf'](']]>', quarwv + 0x9);return xpglyn['startCDATA'](), xpglyn['characters'](nplygh, quarwv + 0x9, rwvuqa - quarwv - 0x9), xpglyn['endCDATA'](), rwvuqa + 0x3;
      }var haq9u = Elnyxpg(nplygh, quarwv),
          i21st = haq9u['length'];if (i21st > 0x1 && /!doctype/i['test'](haq9u[0x0][0x0])) {
        var i2t_s = haq9u[0x1][0x0],
            j1i_d5 = i21st > 0x3 && /^public$/i['test'](haq9u[0x2][0x0]) && haq9u[0x3][0x0],
            $mb4c = i21st > 0x4 && haq9u[0x4][0x0],
            kj5$c6 = haq9u[i21st - 0x1];return xpglyn['startDTD'](i2t_s, j1i_d5 && j1i_d5['replace'](/^(['"])(.*?)\1$/, '$2'), $mb4c && $mb4c['replace'](/^(['"])(.*?)\1$/, '$2')), xpglyn['endDTD'](), kj5$c6['index'] + kj5$c6[0x0]['length'];
      }}return -0x1;
}function Ebc$4m(d_sti1, c74bmf, paugh9) {
  var ugh9ap = d_sti1['indexOf']('?>', c74bmf);if (ugh9ap) {
    var a9urq = d_sti1['substring'](c74bmf, ugh9ap)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (a9urq) {
      {
        a9urq[0x0]['length'];
      }return paugh9['processingInstruction'](a9urq[0x1], a9urq[0x2]), ugh9ap + 0x2;
    }return -0x1;
  }return -0x1;
}function Ei61dj5() {}function Eck54$(rqhua, ti12_s) {
  return rqhua['__proto__'] = ti12_s, rqhua;
}function Elnyxpg(_tdsi1, wvqaur) {
  var _1tisd,
      idt1_j = [],
      rquv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (rquv['lastIndex'] = wvqaur, rquv['exec'](_tdsi1); _1tisd = rquv['exec'](_tdsi1);) if (idt1_j['push'](_1tisd), _1tisd[0x1]) return idt1_j;
}var Ec6j5k$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Ebc4f = new RegExp('[\\-\\.0-9' + Ec6j5k$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Efw87mb = new RegExp('^' + Ec6j5k$['source'] + Ebc4f['source'] + '*(?::' + Ec6j5k$['source'] + Ebc4f['source'] + '*)?$'),
    Est2i_ = 0x0,
    Epgyhnl = 0x1,
    Egxlpny = 0x2,
    Eonyxl = 0x3,
    Ev8warq = 0x4,
    Ecb$4mk = 0x5,
    Ejdi15_ = 0x6,
    Ea9uvqr = 0x7;Et1i_dj['prototype'] = { 'parse': function (hguaq9, ghpyu, aurqvw) {
    var ck564 = this['domBuilder'];ck564['startDocument'](), Eylpgh(ghpyu, ghpyu = {}), Et1sd(hguaq9, ghpyu, aurqvw, ck564, this['errorHandler']), ck564['endDocument']();
  } }, Ei61dj5['prototype'] = { 'setTagName': function (qw8) {
    if (!Efw87mb['test'](qw8)) throw new Error('invalid tagName:' + qw8);this['tagName'] = qw8;
  }, 'add': function (sti_1d, pn9hgy, ji5d_1) {
    if (!Efw87mb['test'](sti_1d)) throw new Error('invalid attribute:' + sti_1d);this[this['length']++] = { 'qName': sti_1d, 'value': pn9hgy, 'offset': ji5d_1 };
  }, 'length': 0x0, 'getLocalName': function (lngpx) {
    return this[lngpx]['localName'];
  }, 'getLocator': function (wurav) {
    return this[wurav]['locator'];
  }, 'getQName': function (s_3t0) {
    return this[s_3t0]['qName'];
  }, 'getURI': function (i1_ds) {
    return this[i1_ds]['uri'];
  }, 'getValue': function (_si1t2) {
    return this[_si1t2]['value'];
  } }, Eck54$({}, Eck54$['prototype']) instanceof Eck54$ || (Eck54$ = function (st230, lhpgny) {
  function nlhgy() {}nlhgy['prototype'] = lhpgny, nlhgy = new nlhgy();for (lhpgny in st230) nlhgy[lhpgny] = st230[lhpgny];return nlhgy;
}), exports['XMLReader'] = Et1i_dj;