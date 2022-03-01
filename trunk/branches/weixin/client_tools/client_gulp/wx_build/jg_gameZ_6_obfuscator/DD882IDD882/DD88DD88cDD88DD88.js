var G = wx.$E;
function Eisdt1_() {}function Eynh9p(y9hpgn, fb8mw7, nglx, rh9qu, bcm7) {
  function wvrua(k4$b6c) {
    if (k4$b6c > 0xffff) {
      k4$b6c -= 0x10000;var lyphgn = 0xd800 + (k4$b6c >> 0xa),
          f74c = 0xdc00 + (0x3ff & k4$b6c);return String['fromCharCode'](lyphgn, f74c);
    }return String['fromCharCode'](k4$b6c);
  }function b78f(qrv8w) {
    var qwuvar = qrv8w['slice'](0x1, -0x1);return qwuvar in nglx ? nglx[qwuvar] : '#' === qwuvar['charAt'](0x0) ? wvrua(parseInt(qwuvar['substr'](0x1)['replace']('x', '0x'))) : (bcm7['error']('entity not found:' + qrv8w), qrv8w);
  }function qauh(hqug9a) {
    if (hqug9a > _12t3s) {
      var avqw8 = y9hpgn['substring'](_12t3s, hqug9a)['replace'](/&#?\w+;/g, b78f);i21ts_ && d5jik(_12t3s), rh9qu['characters'](avqw8, 0x0, hqug9a - _12t3s), _12t3s = hqug9a;
    }
  }function d5jik(ugah, fm87) {
    for (; ugah >= ugqh9a && (fm87 = bkc$46['exec'](y9hpgn));) $b4mc = fm87['index'], ugqh9a = $b4mc + fm87[0x0]['length'], i21ts_['lineNumber']++;i21ts_['columnNumber'] = ugah - $b4mc + 0x1;
  }for (var $b4mc = 0x0, ugqh9a = 0x0, bkc$46 = /.*(?:\r\n?|\n)|.*$/g, i21ts_ = rh9qu['locator'], $b46 = [{ 'currentNSMap': fb8mw7 }], guhy9 = {}, _12t3s = 0x0;;) {
    try {
      var z2ts03 = y9hpgn['indexOf']('<', _12t3s);if (0x0 > z2ts03) {
        if (!y9hpgn['substr'](_12t3s)['match'](/^\s*$/)) {
          var $mkb4c = rh9qu['doc'],
              t_203s = $mkb4c['createTextNode'](y9hpgn['substr'](_12t3s));$mkb4c['appendChild'](t_203s), rh9qu['currentElement'] = t_203s;
        }return;
      }switch (z2ts03 > _12t3s && qauh(z2ts03), y9hpgn['charAt'](z2ts03 + 0x1)) {case '/':
          var $6bk = y9hpgn['indexOf']('>', z2ts03 + 0x3),
              va9ruq = y9hpgn['substring'](z2ts03 + 0x2, $6bk),
              fmwb87 = $b46['pop']();0x0 > $6bk ? (va9ruq = y9hpgn['substring'](z2ts03 + 0x2)['replace'](/[\s<].*/, ''), bcm7['error']('end tag name: ' + va9ruq + ' is not complete:' + fmwb87['tagName']), $6bk = z2ts03 + 0x1 + va9ruq['length']) : va9ruq['match'](/\s</) && (va9ruq = va9ruq['replace'](/[\s<].*/, ''), bcm7['error']('end tag name: ' + va9ruq + ' maybe not complete'), $6bk = z2ts03 + 0x1 + va9ruq['length']);var bc$k6 = fmwb87['localNSMap'],
              i21t_s = fmwb87['tagName'] == va9ruq,
              a9qgh = i21t_s || fmwb87['tagName'] && fmwb87['tagName']['toLowerCase']() == va9ruq['toLowerCase']();if (a9qgh) {
            if (rh9qu['endElement'](fmwb87['uri'], fmwb87['localName'], va9ruq), bc$k6) {
              for (var auwrq in bc$k6) rh9qu['endPrefixMapping'](auwrq);
            }i21t_s || bcm7['fatalError']('end tag name: ' + va9ruq + ' is not match the current start tagName:' + fmwb87['tagName']);
          } else $b46['push'](fmwb87);$6bk++;break;case '?':
          i21ts_ && d5jik(z2ts03), $6bk = Ej6i1d(y9hpgn, z2ts03, rh9qu);break;case '!':
          i21ts_ && d5jik(z2ts03), $6bk = Em8wbf(y9hpgn, z2ts03, rh9qu, bcm7);break;default:
          i21ts_ && d5jik(z2ts03);var b64c$ = new Enhylgp(),
              ylox = $b46[$b46['length'] - 0x1]['currentNSMap'],
              $6bk = Em8fb(y9hpgn, z2ts03, b64c$, ylox, b78f, bcm7),
              f74cbm = b64c$['length'];if (!b64c$['closed'] && Egu9ha(y9hpgn, $6bk, b64c$['tagName'], guhy9) && (b64c$['closed'] = !0x0, nglx['nbsp'] || bcm7['warning']('unclosed xml attribute')), i21ts_ && f74cbm) {
            for (var k$45c = Egh9yup(i21ts_, {}), xyp = 0x0; f74cbm > xyp; xyp++) {
              var is2t = b64c$[xyp];d5jik(is2t['offset']), is2t['locator'] = Egh9yup(i21ts_, {});
            }rh9qu['locator'] = k$45c, Ewvf7(b64c$, rh9qu, ylox) && $b46['push'](b64c$), rh9qu['locator'] = i21ts_;
          } else Ewvf7(b64c$, rh9qu, ylox) && $b46['push'](b64c$);'http://www.w3.org/1999/xhtml' !== b64c$['uri'] || b64c$['closed'] ? $6bk++ : $6bk = Em4c7(y9hpgn, $6bk, b64c$['tagName'], b78f, rh9qu);}
    } catch ($4bmc7) {
      bcm7['error']('element parse error: ' + $4bmc7), $6bk = -0x1;
    }$6bk > _12t3s ? _12t3s = $6bk : qauh(Math['max'](z2ts03, _12t3s) + 0x1);
  }
}function Egh9yup(aurhq, j5d6i) {
  return j5d6i['lineNumber'] = aurhq['lineNumber'], j5d6i['columnNumber'] = aurhq['columnNumber'], j5d6i;
}function Em8fb(r9uqv, auq9h, k$6d5j, _i1jd5, npgxy, lpnxg) {
  for (var phn9yg, agp9, j5c$k6 = ++auq9h, pnlgyh = Egu9pah;;) {
    var $bm7c4 = r9uqv['charAt'](j5c$k6);switch ($bm7c4) {case '=':
        if (pnlgyh === Eyhpu) phn9yg = r9uqv['slice'](auq9h, j5c$k6), pnlgyh = Eolypn;else {
          if (pnlgyh !== Et1_i) throw new Error('attribute equal must after attrName');pnlgyh = Eolypn;
        }break;case '\x27':case '\x22':
        if (pnlgyh === Eolypn || pnlgyh === Eyhpu) {
          if (pnlgyh === Eyhpu && (lpnxg['warning']('attribute value must after "="'), phn9yg = r9uqv['slice'](auq9h, j5c$k6)), auq9h = j5c$k6 + 0x1, j5c$k6 = r9uqv['indexOf']($bm7c4, auq9h), !(j5c$k6 > 0x0)) throw new Error('attribute value no end \'' + $bm7c4 + '\' match');agp9 = r9uqv['slice'](auq9h, j5c$k6)['replace'](/&#?\w+;/g, npgxy), k$6d5j['add'](phn9yg, agp9, auq9h - 0x1), pnlgyh = Ehypn;
        } else {
          if (pnlgyh != Eghynlp) throw new Error('attribute value must after "="');agp9 = r9uqv['slice'](auq9h, j5c$k6)['replace'](/&#?\w+;/g, npgxy), k$6d5j['add'](phn9yg, agp9, auq9h), lpnxg['warning']('attribute "' + phn9yg + '" missed start quot(' + $bm7c4 + ')!!'), auq9h = j5c$k6 + 0x1, pnlgyh = Ehypn;
        }break;case '/':
        switch (pnlgyh) {case Egu9pah:
            k$6d5j['setTagName'](r9uqv['slice'](auq9h, j5c$k6));case Ehypn:case Eb7c4f:case Eynopl:
            pnlgyh = Eynopl, k$6d5j['closed'] = !0x0;case Eghynlp:case Eyhpu:case Et1_i:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lpnxg['error']('unexpected end of input'), pnlgyh == Egu9pah && k$6d5j['setTagName'](r9uqv['slice'](auq9h, j5c$k6)), j5c$k6;case '>':
        switch (pnlgyh) {case Egu9pah:
            k$6d5j['setTagName'](r9uqv['slice'](auq9h, j5c$k6));case Ehypn:case Eb7c4f:case Eynopl:
            break;case Eghynlp:case Eyhpu:
            agp9 = r9uqv['slice'](auq9h, j5c$k6), '/' === agp9['slice'](-0x1) && (k$6d5j['closed'] = !0x0, agp9 = agp9['slice'](0x0, -0x1));case Et1_i:
            pnlgyh === Et1_i && (agp9 = phn9yg), pnlgyh == Eghynlp ? (lpnxg['warning']('attribute "' + agp9 + '" missed quot(")!!'), k$6d5j['add'](phn9yg, agp9['replace'](/&#?\w+;/g, npgxy), auq9h)) : ('http://www.w3.org/1999/xhtml' === _i1jd5[''] && agp9['match'](/^(?:disabled|checked|selected)$/i) || lpnxg['warning']('attribute "' + agp9 + '" missed value!! "' + agp9 + '" instead!!'), k$6d5j['add'](agp9, agp9, auq9h));break;case Eolypn:
            throw new Error('attribute value missed!!');}return j5c$k6;case '\u0080':
        $bm7c4 = '\x20';default:
        if ('\x20' >= $bm7c4) switch (pnlgyh) {case Egu9pah:
            k$6d5j['setTagName'](r9uqv['slice'](auq9h, j5c$k6)), pnlgyh = Eb7c4f;break;case Eyhpu:
            phn9yg = r9uqv['slice'](auq9h, j5c$k6), pnlgyh = Et1_i;break;case Eghynlp:
            var agp9 = r9uqv['slice'](auq9h, j5c$k6)['replace'](/&#?\w+;/g, npgxy);lpnxg['warning']('attribute "' + agp9 + '" missed quot(")!!'), k$6d5j['add'](phn9yg, agp9, auq9h);case Ehypn:
            pnlgyh = Eb7c4f;} else switch (pnlgyh) {case Et1_i:
            {
              k$6d5j['tagName'];
            }'http://www.w3.org/1999/xhtml' === _i1jd5[''] && phn9yg['match'](/^(?:disabled|checked|selected)$/i) || lpnxg['warning']('attribute "' + phn9yg + '" missed value!! "' + phn9yg + '" instead2!!'), k$6d5j['add'](phn9yg, phn9yg, auq9h), auq9h = j5c$k6, pnlgyh = Eyhpu;break;case Ehypn:
            lpnxg['warning']('attribute space is required"' + phn9yg + '\x22!!');case Eb7c4f:
            pnlgyh = Eyhpu, auq9h = j5c$k6;break;case Eolypn:
            pnlgyh = Eghynlp, auq9h = j5c$k6;break;case Eynopl:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}j5c$k6++;
  }
}function Ewvf7(f87rvw, b4m8f, vrauq) {
  for (var ah9guq = f87rvw['tagName'], tz23s = null, c7b4f = f87rvw['length']; c7b4f--;) {
    var wm78f = f87rvw[c7b4f],
        _20t3s = wm78f['qName'],
        $6c4k5 = wm78f['value'],
        qu9rha = _20t3s['indexOf'](':');if (qu9rha > 0x0) var qrav8w = wm78f['prefix'] = _20t3s['slice'](0x0, qu9rha),
        vwura = _20t3s['slice'](qu9rha + 0x1),
        bm$k = 'xmlns' === qrav8w && vwura;else vwura = _20t3s, qrav8w = null, bm$k = 'xmlns' === _20t3s && '';wm78f['localName'] = vwura, bm$k !== !0x1 && (null == tz23s && (tz23s = {}, Epyu9(vrauq, vrauq = {})), vrauq[bm$k] = tz23s[bm$k] = $6c4k5, wm78f['uri'] = 'http://www.w3.org/2000/xmlns/', b4m8f['startPrefixMapping'](bm$k, $6c4k5));
  }for (var c7b4f = f87rvw['length']; c7b4f--;) {
    wm78f = f87rvw[c7b4f];var qrav8w = wm78f['prefix'];qrav8w && ('xml' === qrav8w && (wm78f['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qrav8w && (wm78f['uri'] = vrauq[qrav8w || '']));
  }var qu9rha = ah9guq['indexOf'](':');qu9rha > 0x0 ? (qrav8w = f87rvw['prefix'] = ah9guq['slice'](0x0, qu9rha), vwura = f87rvw['localName'] = ah9guq['slice'](qu9rha + 0x1)) : (qrav8w = null, vwura = f87rvw['localName'] = ah9guq);var i1d_j = f87rvw['uri'] = vrauq[qrav8w || ''];if (b4m8f['startElement'](i1d_j, vwura, ah9guq, f87rvw), !f87rvw['closed']) return f87rvw['currentNSMap'] = vrauq, f87rvw['localNSMap'] = tz23s, !0x0;if (b4m8f['endElement'](i1d_j, vwura, ah9guq), tz23s) {
    for (qrav8w in tz23s) b4m8f['endPrefixMapping'](qrav8w);
  }
}function Em4c7($bck, j5kid6, w7vf8r, y9nhpg, hqu9) {
  if (/^(?:script|textarea)$/i['test'](w7vf8r)) {
    var vu9 = $bck['indexOf']('</' + w7vf8r + '>', j5kid6),
        _dj5 = $bck['substring'](j5kid6 + 0x1, vu9);if (/[&<]/['test'](_dj5)) return (/^script$/i['test'](w7vf8r) ? (hqu9['characters'](_dj5, 0x0, _dj5['length']), vu9) : (_dj5 = _dj5['replace'](/&#?\w+;/g, y9nhpg), hqu9['characters'](_dj5, 0x0, _dj5['length']), vu9)
    );
  }return j5kid6 + 0x1;
}function Egu9ha(_j1i5, yph9ng, c456$, ik56dj) {
  var i_s1dt = ik56dj[c456$];return null == i_s1dt && (i_s1dt = _j1i5['lastIndexOf']('</' + c456$ + '>'), yph9ng > i_s1dt && (i_s1dt = _j1i5['lastIndexOf']('</' + c456$)), ik56dj[c456$] = i_s1dt), yph9ng > i_s1dt;
}function Epyu9(pghu9y, jk$d65) {
  for (var m7$4 in pghu9y) jk$d65[m7$4] = pghu9y[m7$4];
}function Em8wbf(qu9ga, mfvw7, rwqv8, gq9hu) {
  var ugh9ap = qu9ga['charAt'](mfvw7 + 0x2);switch (ugh9ap) {case '-':
      if ('-' === qu9ga['charAt'](mfvw7 + 0x3)) {
        var vq8arw = qu9ga['indexOf']('-->', mfvw7 + 0x4);return vq8arw > mfvw7 ? (rwqv8['comment'](qu9ga, mfvw7 + 0x4, vq8arw - mfvw7 - 0x4), vq8arw + 0x3) : (gq9hu['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qu9ga['substr'](mfvw7 + 0x3, 0x6)) {
        var vq8arw = qu9ga['indexOf'](']]>', mfvw7 + 0x9);return rwqv8['startCDATA'](), rwqv8['characters'](qu9ga, mfvw7 + 0x9, vq8arw - mfvw7 - 0x9), rwqv8['endCDATA'](), vq8arw + 0x3;
      }var d6ij5k = Edt1ji_(qu9ga, mfvw7),
          di15j_ = d6ij5k['length'];if (di15j_ > 0x1 && /!doctype/i['test'](d6ij5k[0x0][0x0])) {
        var f78mwv = d6ij5k[0x1][0x0],
            t2_31s = di15j_ > 0x3 && /^public$/i['test'](d6ij5k[0x2][0x0]) && d6ij5k[0x3][0x0],
            ployn = di15j_ > 0x4 && d6ij5k[0x4][0x0],
            _is = d6ij5k[di15j_ - 0x1];return rwqv8['startDTD'](f78mwv, t2_31s && t2_31s['replace'](/^(['"])(.*?)\1$/, '$2'), ployn && ployn['replace'](/^(['"])(.*?)\1$/, '$2')), rwqv8['endDTD'](), _is['index'] + _is[0x0]['length'];
      }}return -0x1;
}function Ej6i1d(ikjd5, cb7fm4, ts31_) {
  var k$dj5 = ikjd5['indexOf']('?>', cb7fm4);if (k$dj5) {
    var s_t21i = ikjd5['substring'](cb7fm4, k$dj5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (s_t21i) {
      {
        s_t21i[0x0]['length'];
      }return ts31_['processingInstruction'](s_t21i[0x1], s_t21i[0x2]), k$dj5 + 0x2;
    }return -0x1;
  }return -0x1;
}function Enhylgp() {}function Ed_sti(wvqfr8, xnypol) {
  return wvqfr8['__proto__'] = xnypol, wvqfr8;
}function Edt1ji_(wruvqa, apu9gh) {
  var xgynl,
      kdj65 = [],
      r87 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (r87['lastIndex'] = apu9gh, r87['exec'](wruvqa); xgynl = r87['exec'](wruvqa);) if (kdj65['push'](xgynl), xgynl[0x1]) return kdj65;
}var Er87wvf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Eis_t12 = new RegExp('[\\-\\.0-9' + Er87wvf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Ehy = new RegExp('^' + Er87wvf['source'] + Eis_t12['source'] + '*(?::' + Er87wvf['source'] + Eis_t12['source'] + '*)?$'),
    Egu9pah = 0x0,
    Eyhpu = 0x1,
    Et1_i = 0x2,
    Eolypn = 0x3,
    Eghynlp = 0x4,
    Ehypn = 0x5,
    Eb7c4f = 0x6,
    Eynopl = 0x7;Eisdt1_['prototype'] = { 'parse': function (it1dj, lnyhpg, uhqar9) {
    var vur9qa = this['domBuilder'];vur9qa['startDocument'](), Epyu9(lnyhpg, lnyhpg = {}), Eynh9p(it1dj, lnyhpg, uhqar9, vur9qa, this['errorHandler']), vur9qa['endDocument']();
  } }, Enhylgp['prototype'] = { 'setTagName': function (_dijt1) {
    if (!Ehy['test'](_dijt1)) throw new Error('invalid tagName:' + _dijt1);this['tagName'] = _dijt1;
  }, 'add': function (b4cm$, f4bcm, bc$64k) {
    if (!Ehy['test'](b4cm$)) throw new Error('invalid attribute:' + b4cm$);this[this['length']++] = { 'qName': b4cm$, 'value': f4bcm, 'offset': bc$64k };
  }, 'length': 0x0, 'getLocalName': function (gau9ph) {
    return this[gau9ph]['localName'];
  }, 'getLocator': function (xnyol) {
    return this[xnyol]['locator'];
  }, 'getQName': function (vrwua) {
    return this[vrwua]['qName'];
  }, 'getURI': function (sit_) {
    return this[sit_]['uri'];
  }, 'getValue': function (apuh9g) {
    return this[apuh9g]['value'];
  } }, Ed_sti({}, Ed_sti['prototype']) instanceof Ed_sti || (Ed_sti = function (rqauv9, qahug9) {
  function b6$c() {}b6$c['prototype'] = qahug9, b6$c = new b6$c();for (qahug9 in rqauv9) b6$c[qahug9] = rqauv9[qahug9];return b6$c;
}), exports['XMLReader'] = Eisdt1_;