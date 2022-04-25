var G = wx.$E;
function Euahqg() {}function Eqawuvr(m7$cb, kj$6c5, t3sz20, _32ts, _sti) {
  function _21tsi(vmf87w) {
    if (vmf87w > 0xffff) {
      vmf87w -= 0x10000;var t_di1 = 0xd800 + (vmf87w >> 0xa),
          gnphy = 0xdc00 + (0x3ff & vmf87w);return String['fromCharCode'](t_di1, gnphy);
    }return String['fromCharCode'](vmf87w);
  }function ynhg9(lnygx) {
    var a9hqug = lnygx['slice'](0x1, -0x1);return a9hqug in t3sz20 ? t3sz20[a9hqug] : '#' === a9hqug['charAt'](0x0) ? _21tsi(parseInt(a9hqug['substr'](0x1)['replace']('x', '0x'))) : (_sti['error']('entity not found:' + lnygx), lnygx);
  }function j6$kd5(tid1_) {
    if (tid1_ > t1ij_d) {
      var t30s2 = m7$cb['substring'](t1ij_d, tid1_)['replace'](/&#?\w+;/g, ynhg9);hpgau9 && _t2(t1ij_d), _32ts['characters'](t30s2, 0x0, tid1_ - t1ij_d), t1ij_d = tid1_;
    }
  }function _t2(nplgh, b8fw) {
    for (; nplgh >= yghnp && (b8fw = ru9ahq['exec'](m7$cb));) bc4m7$ = b8fw['index'], yghnp = bc4m7$ + b8fw[0x0]['length'], hpgau9['lineNumber']++;hpgau9['columnNumber'] = nplgh - bc4m7$ + 0x1;
  }for (var bc4m7$ = 0x0, yghnp = 0x0, ru9ahq = /.*(?:\r\n?|\n)|.*$/g, hpgau9 = _32ts['locator'], $c4b7m = [{ 'currentNSMap': kj$6c5 }], kd6$j = {}, t1ij_d = 0x0;;) {
    try {
      var $6dj5k = m7$cb['indexOf']('<', t1ij_d);if (0x0 > $6dj5k) {
        if (!m7$cb['substr'](t1ij_d)['match'](/^\s*$/)) {
          var cf4bm = _32ts['doc'],
              rq9u = cf4bm['createTextNode'](m7$cb['substr'](t1ij_d));cf4bm['appendChild'](rq9u), _32ts['currentElement'] = rq9u;
        }return;
      }switch ($6dj5k > t1ij_d && j6$kd5($6dj5k), m7$cb['charAt']($6dj5k + 0x1)) {case '/':
          var pghuy9 = m7$cb['indexOf']('>', $6dj5k + 0x3),
              guhqa9 = m7$cb['substring']($6dj5k + 0x2, pghuy9),
              cj56$k = $c4b7m['pop']();0x0 > pghuy9 ? (guhqa9 = m7$cb['substring']($6dj5k + 0x2)['replace'](/[\s<].*/, ''), _sti['error']('end tag name: ' + guhqa9 + ' is not complete:' + cj56$k['tagName']), pghuy9 = $6dj5k + 0x1 + guhqa9['length']) : guhqa9['match'](/\s</) && (guhqa9 = guhqa9['replace'](/[\s<].*/, ''), _sti['error']('end tag name: ' + guhqa9 + ' maybe not complete'), pghuy9 = $6dj5k + 0x1 + guhqa9['length']);var t20z = cj56$k['localNSMap'],
              pgu9hy = cj56$k['tagName'] == guhqa9,
              lxyng = pgu9hy || cj56$k['tagName'] && cj56$k['tagName']['toLowerCase']() == guhqa9['toLowerCase']();if (lxyng) {
            if (_32ts['endElement'](cj56$k['uri'], cj56$k['localName'], guhqa9), t20z) {
              for (var id6j5k in t20z) _32ts['endPrefixMapping'](id6j5k);
            }pgu9hy || _sti['fatalError']('end tag name: ' + guhqa9 + ' is not match the current start tagName:' + cj56$k['tagName']);
          } else $c4b7m['push'](cj56$k);pghuy9++;break;case '?':
          hpgau9 && _t2($6dj5k), pghuy9 = Ewm87(m7$cb, $6dj5k, _32ts);break;case '!':
          hpgau9 && _t2($6dj5k), pghuy9 = Efb87(m7$cb, $6dj5k, _32ts, _sti);break;default:
          hpgau9 && _t2($6dj5k);var g9yp = new E_5i1(),
              bf8m7w = $c4b7m[$c4b7m['length'] - 0x1]['currentNSMap'],
              pghuy9 = E_2sti1(m7$cb, $6dj5k, g9yp, bf8m7w, ynhg9, _sti),
              gnylph = g9yp['length'];if (!g9yp['closed'] && Earu(m7$cb, pghuy9, g9yp['tagName'], kd6$j) && (g9yp['closed'] = !0x0, t3sz20['nbsp'] || _sti['warning']('unclosed xml attribute')), hpgau9 && gnylph) {
            for (var id_ts1 = Eq9gua(hpgau9, {}), rvq9ua = 0x0; gnylph > rvq9ua; rvq9ua++) {
              var a9rqhu = g9yp[rvq9ua];_t2(a9rqhu['offset']), a9rqhu['locator'] = Eq9gua(hpgau9, {});
            }_32ts['locator'] = id_ts1, Ewv78f(g9yp, _32ts, bf8m7w) && $c4b7m['push'](g9yp), _32ts['locator'] = hpgau9;
          } else Ewv78f(g9yp, _32ts, bf8m7w) && $c4b7m['push'](g9yp);'http://www.w3.org/1999/xhtml' !== g9yp['uri'] || g9yp['closed'] ? pghuy9++ : pghuy9 = Efb7m4(m7$cb, pghuy9, g9yp['tagName'], ynhg9, _32ts);}
    } catch (qawv8) {
      _sti['error']('element parse error: ' + qawv8), pghuy9 = -0x1;
    }pghuy9 > t1ij_d ? t1ij_d = pghuy9 : j6$kd5(Math['max']($6dj5k, t1ij_d) + 0x1);
  }
}function Eq9gua(b87mwf, glyxnp) {
  return glyxnp['lineNumber'] = b87mwf['lineNumber'], glyxnp['columnNumber'] = b87mwf['columnNumber'], glyxnp;
}function E_2sti1(rqwuva, k65$dj, dj15i_, $7m4b, t1ji_d, _t213) {
  for (var jd6, kb6$4c, $k56jc = ++k65$dj, wqvau = Ef87wv;;) {
    var i_ds1t = rqwuva['charAt']($k56jc);switch (i_ds1t) {case '=':
        if (wqvau === Ec456k) jd6 = rqwuva['slice'](k65$dj, $k56jc), wqvau = Engplh;else {
          if (wqvau !== Ej_i1d5) throw new Error('attribute equal must after attrName');wqvau = Engplh;
        }break;case '\x27':case '\x22':
        if (wqvau === Engplh || wqvau === Ec456k) {
          if (wqvau === Ec456k && (_t213['warning']('attribute value must after "="'), jd6 = rqwuva['slice'](k65$dj, $k56jc)), k65$dj = $k56jc + 0x1, $k56jc = rqwuva['indexOf'](i_ds1t, k65$dj), !($k56jc > 0x0)) throw new Error('attribute value no end \'' + i_ds1t + '\' match');kb6$4c = rqwuva['slice'](k65$dj, $k56jc)['replace'](/&#?\w+;/g, t1ji_d), dj15i_['add'](jd6, kb6$4c, k65$dj - 0x1), wqvau = E$d5jk;
        } else {
          if (wqvau != Ec7m$) throw new Error('attribute value must after "="');kb6$4c = rqwuva['slice'](k65$dj, $k56jc)['replace'](/&#?\w+;/g, t1ji_d), dj15i_['add'](jd6, kb6$4c, k65$dj), _t213['warning']('attribute "' + jd6 + '" missed start quot(' + i_ds1t + ')!!'), k65$dj = $k56jc + 0x1, wqvau = E$d5jk;
        }break;case '/':
        switch (wqvau) {case Ef87wv:
            dj15i_['setTagName'](rqwuva['slice'](k65$dj, $k56jc));case E$d5jk:case E_12t3:case Erw8qfv:
            wqvau = Erw8qfv, dj15i_['closed'] = !0x0;case Ec7m$:case Ec456k:case Ej_i1d5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _t213['error']('unexpected end of input'), wqvau == Ef87wv && dj15i_['setTagName'](rqwuva['slice'](k65$dj, $k56jc)), $k56jc;case '>':
        switch (wqvau) {case Ef87wv:
            dj15i_['setTagName'](rqwuva['slice'](k65$dj, $k56jc));case E$d5jk:case E_12t3:case Erw8qfv:
            break;case Ec7m$:case Ec456k:
            kb6$4c = rqwuva['slice'](k65$dj, $k56jc), '/' === kb6$4c['slice'](-0x1) && (dj15i_['closed'] = !0x0, kb6$4c = kb6$4c['slice'](0x0, -0x1));case Ej_i1d5:
            wqvau === Ej_i1d5 && (kb6$4c = jd6), wqvau == Ec7m$ ? (_t213['warning']('attribute "' + kb6$4c + '" missed quot(")!!'), dj15i_['add'](jd6, kb6$4c['replace'](/&#?\w+;/g, t1ji_d), k65$dj)) : ('http://www.w3.org/1999/xhtml' === $7m4b[''] && kb6$4c['match'](/^(?:disabled|checked|selected)$/i) || _t213['warning']('attribute "' + kb6$4c + '" missed value!! "' + kb6$4c + '" instead!!'), dj15i_['add'](kb6$4c, kb6$4c, k65$dj));break;case Engplh:
            throw new Error('attribute value missed!!');}return $k56jc;case '\u0080':
        i_ds1t = '\x20';default:
        if ('\x20' >= i_ds1t) switch (wqvau) {case Ef87wv:
            dj15i_['setTagName'](rqwuva['slice'](k65$dj, $k56jc)), wqvau = E_12t3;break;case Ec456k:
            jd6 = rqwuva['slice'](k65$dj, $k56jc), wqvau = Ej_i1d5;break;case Ec7m$:
            var kb6$4c = rqwuva['slice'](k65$dj, $k56jc)['replace'](/&#?\w+;/g, t1ji_d);_t213['warning']('attribute "' + kb6$4c + '" missed quot(")!!'), dj15i_['add'](jd6, kb6$4c, k65$dj);case E$d5jk:
            wqvau = E_12t3;} else switch (wqvau) {case Ej_i1d5:
            {
              dj15i_['tagName'];
            }'http://www.w3.org/1999/xhtml' === $7m4b[''] && jd6['match'](/^(?:disabled|checked|selected)$/i) || _t213['warning']('attribute "' + jd6 + '" missed value!! "' + jd6 + '" instead2!!'), dj15i_['add'](jd6, jd6, k65$dj), k65$dj = $k56jc, wqvau = Ec456k;break;case E$d5jk:
            _t213['warning']('attribute space is required"' + jd6 + '\x22!!');case E_12t3:
            wqvau = Ec456k, k65$dj = $k56jc;break;case Engplh:
            wqvau = Ec7m$, k65$dj = $k56jc;break;case Erw8qfv:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$k56jc++;
  }
}function Ewv78f(jit1d_, ahrq9, c6b$4) {
  for (var ts0z23 = jit1d_['tagName'], j$k6d = null, zs0t3 = jit1d_['length']; zs0t3--;) {
    var fw8qv = jit1d_[zs0t3],
        yhg9 = fw8qv['qName'],
        y9hpu = fw8qv['value'],
        bc$46k = yhg9['indexOf'](':');if (bc$46k > 0x0) var vau9 = fw8qv['prefix'] = yhg9['slice'](0x0, bc$46k),
        i16dj5 = yhg9['slice'](bc$46k + 0x1),
        $kcm4b = 'xmlns' === vau9 && i16dj5;else i16dj5 = yhg9, vau9 = null, $kcm4b = 'xmlns' === yhg9 && '';fw8qv['localName'] = i16dj5, $kcm4b !== !0x1 && (null == j$k6d && (j$k6d = {}, E$b4ck6(c6b$4, c6b$4 = {})), c6b$4[$kcm4b] = j$k6d[$kcm4b] = y9hpu, fw8qv['uri'] = 'http://www.w3.org/2000/xmlns/', ahrq9['startPrefixMapping']($kcm4b, y9hpu));
  }for (var zs0t3 = jit1d_['length']; zs0t3--;) {
    fw8qv = jit1d_[zs0t3];var vau9 = fw8qv['prefix'];vau9 && ('xml' === vau9 && (fw8qv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vau9 && (fw8qv['uri'] = c6b$4[vau9 || '']));
  }var bc$46k = ts0z23['indexOf'](':');bc$46k > 0x0 ? (vau9 = jit1d_['prefix'] = ts0z23['slice'](0x0, bc$46k), i16dj5 = jit1d_['localName'] = ts0z23['slice'](bc$46k + 0x1)) : (vau9 = null, i16dj5 = jit1d_['localName'] = ts0z23);var bm7f4 = jit1d_['uri'] = c6b$4[vau9 || ''];if (ahrq9['startElement'](bm7f4, i16dj5, ts0z23, jit1d_), !jit1d_['closed']) return jit1d_['currentNSMap'] = c6b$4, jit1d_['localNSMap'] = j$k6d, !0x0;if (ahrq9['endElement'](bm7f4, i16dj5, ts0z23), j$k6d) {
    for (vau9 in j$k6d) ahrq9['endPrefixMapping'](vau9);
  }
}function Efb7m4(gu9yp, ik6, fm8wb, f478, _203s) {
  if (/^(?:script|textarea)$/i['test'](fm8wb)) {
    var xyg = gu9yp['indexOf']('</' + fm8wb + '>', ik6),
        u9ghpa = gu9yp['substring'](ik6 + 0x1, xyg);if (/[&<]/['test'](u9ghpa)) return (/^script$/i['test'](fm8wb) ? (_203s['characters'](u9ghpa, 0x0, u9ghpa['length']), xyg) : (u9ghpa = u9ghpa['replace'](/&#?\w+;/g, f478), _203s['characters'](u9ghpa, 0x0, u9ghpa['length']), xyg)
    );
  }return ik6 + 0x1;
}function Earu(urqwv, f8rv7w, qa8, aqr8) {
  var rauqvw = aqr8[qa8];return null == rauqvw && (rauqvw = urqwv['lastIndexOf']('</' + qa8 + '>'), f8rv7w > rauqvw && (rauqvw = urqwv['lastIndexOf']('</' + qa8)), aqr8[qa8] = rauqvw), f8rv7w > rauqvw;
}function E$b4ck6(ah9up, n9ygh) {
  for (var ru9aqv in ah9up) n9ygh[ru9aqv] = ah9up[ru9aqv];
}function Efb87(b47mfc, c6$5k, di15j6, xyplng) {
  var ha9q = b47mfc['charAt'](c6$5k + 0x2);switch (ha9q) {case '-':
      if ('-' === b47mfc['charAt'](c6$5k + 0x3)) {
        var hglny = b47mfc['indexOf']('-->', c6$5k + 0x4);return hglny > c6$5k ? (di15j6['comment'](b47mfc, c6$5k + 0x4, hglny - c6$5k - 0x4), hglny + 0x3) : (xyplng['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == b47mfc['substr'](c6$5k + 0x3, 0x6)) {
        var hglny = b47mfc['indexOf'](']]>', c6$5k + 0x9);return di15j6['startCDATA'](), di15j6['characters'](b47mfc, c6$5k + 0x9, hglny - c6$5k - 0x9), di15j6['endCDATA'](), hglny + 0x3;
      }var uq9r = Eqarw8v(b47mfc, c6$5k),
          uh9gyp = uq9r['length'];if (uh9gyp > 0x1 && /!doctype/i['test'](uq9r[0x0][0x0])) {
        var _s1t2i = uq9r[0x1][0x0],
            yhpng9 = uh9gyp > 0x3 && /^public$/i['test'](uq9r[0x2][0x0]) && uq9r[0x3][0x0],
            yghnp9 = uh9gyp > 0x4 && uq9r[0x4][0x0],
            hp9guy = uq9r[uh9gyp - 0x1];return di15j6['startDTD'](_s1t2i, yhpng9 && yhpng9['replace'](/^(['"])(.*?)\1$/, '$2'), yghnp9 && yghnp9['replace'](/^(['"])(.*?)\1$/, '$2')), di15j6['endDTD'](), hp9guy['index'] + hp9guy[0x0]['length'];
      }}return -0x1;
}function Ewm87(pnlxyo, _st231, nplghy) {
  var $c6kj = pnlxyo['indexOf']('?>', _st231);if ($c6kj) {
    var oxlpn = pnlxyo['substring'](_st231, $c6kj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (oxlpn) {
      {
        oxlpn[0x0]['length'];
      }return nplghy['processingInstruction'](oxlpn[0x1], oxlpn[0x2]), $c6kj + 0x2;
    }return -0x1;
  }return -0x1;
}function E_5i1() {}function Emkc4b$(is_2t1, b7w8m) {
  return is_2t1['__proto__'] = b7w8m, is_2t1;
}function Eqarw8v(jdki, ts23z0) {
  var uhp9yg,
      $5c64 = [],
      d_ist = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (d_ist['lastIndex'] = ts23z0, d_ist['exec'](jdki); uhp9yg = d_ist['exec'](jdki);) if ($5c64['push'](uhp9yg), uhp9yg[0x1]) return $5c64;
}var Etis1 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Eb874f = new RegExp('[\\-\\.0-9' + Etis1['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Ey9nh = new RegExp('^' + Etis1['source'] + Eb874f['source'] + '*(?::' + Etis1['source'] + Eb874f['source'] + '*)?$'),
    Ef87wv = 0x0,
    Ec456k = 0x1,
    Ej_i1d5 = 0x2,
    Engplh = 0x3,
    Ec7m$ = 0x4,
    E$d5jk = 0x5,
    E_12t3 = 0x6,
    Erw8qfv = 0x7;Euahqg['prototype'] = { 'parse': function (yoxn, d561, wqr8a) {
    var qua9 = this['domBuilder'];qua9['startDocument'](), E$b4ck6(d561, d561 = {}), Eqawuvr(yoxn, d561, wqr8a, qua9, this['errorHandler']), qua9['endDocument']();
  } }, E_5i1['prototype'] = { 'setTagName': function (u9ghp) {
    if (!Ey9nh['test'](u9ghp)) throw new Error('invalid tagName:' + u9ghp);this['tagName'] = u9ghp;
  }, 'add': function (zs02, yopnxl, aguh9q) {
    if (!Ey9nh['test'](zs02)) throw new Error('invalid attribute:' + zs02);this[this['length']++] = { 'qName': zs02, 'value': yopnxl, 'offset': aguh9q };
  }, 'length': 0x0, 'getLocalName': function (bmc$k) {
    return this[bmc$k]['localName'];
  }, 'getLocator': function (lpnh) {
    return this[lpnh]['locator'];
  }, 'getQName': function (yolxnp) {
    return this[yolxnp]['qName'];
  }, 'getURI': function (s3t_) {
    return this[s3t_]['uri'];
  }, 'getValue': function (v78mf) {
    return this[v78mf]['value'];
  } }, Emkc4b$({}, Emkc4b$['prototype']) instanceof Emkc4b$ || (Emkc4b$ = function (plynxo, fwvq) {
  function haqg() {}haqg['prototype'] = fwvq, haqg = new haqg();for (fwvq in plynxo) haqg[fwvq] = plynxo[fwvq];return haqg;
}), exports['XMLReader'] = Euahqg;