var G = wx.$E;
function Epg() {}function Efbm478(xngpl, z2s03, yu9hg, $mbc4k, pylxo) {
  function nphyl(tsi1d_) {
    if (tsi1d_ > 0xffff) {
      tsi1d_ -= 0x10000;var _1tid = 0xd800 + (tsi1d_ >> 0xa),
          mfb87 = 0xdc00 + (0x3ff & tsi1d_);return String['fromCharCode'](_1tid, mfb87);
    }return String['fromCharCode'](tsi1d_);
  }function $km4bc(aq9hru) {
    var _ds1 = aq9hru['slice'](0x1, -0x1);return _ds1 in yu9hg ? yu9hg[_ds1] : '#' === _ds1['charAt'](0x0) ? nphyl(parseInt(_ds1['substr'](0x1)['replace']('x', '0x'))) : (pylxo['error']('entity not found:' + aq9hru), aq9hru);
  }function t2s0z3(yxplgn) {
    if (yxplgn > t2_s) {
      var ti21_ = xngpl['substring'](t2_s, yxplgn)['replace'](/&#?\w+;/g, $km4bc);mfw7b && i_2t(t2_s), $mbc4k['characters'](ti21_, 0x0, yxplgn - t2_s), t2_s = yxplgn;
    }
  }function i_2t(nlpyx, t_1jid) {
    for (; nlpyx >= zts320 && (t_1jid = dtsi1['exec'](xngpl));) awq8rv = t_1jid['index'], zts320 = awq8rv + t_1jid[0x0]['length'], mfw7b['lineNumber']++;mfw7b['columnNumber'] = nlpyx - awq8rv + 0x1;
  }for (var awq8rv = 0x0, zts320 = 0x0, dtsi1 = /.*(?:\r\n?|\n)|.*$/g, mfw7b = $mbc4k['locator'], $46ck = [{ 'currentNSMap': z2s03 }], wfr8v7 = {}, t2_s = 0x0;;) {
    try {
      var vqaruw = xngpl['indexOf']('<', t2_s);if (0x0 > vqaruw) {
        if (!xngpl['substr'](t2_s)['match'](/^\s*$/)) {
          var _idtj1 = $mbc4k['doc'],
              c$46 = _idtj1['createTextNode'](xngpl['substr'](t2_s));_idtj1['appendChild'](c$46), $mbc4k['currentElement'] = c$46;
        }return;
      }switch (vqaruw > t2_s && t2s0z3(vqaruw), xngpl['charAt'](vqaruw + 0x1)) {case '/':
          var j6$kc = xngpl['indexOf']('>', vqaruw + 0x3),
              jk65$c = xngpl['substring'](vqaruw + 0x2, j6$kc),
              i1_jd = $46ck['pop']();0x0 > j6$kc ? (jk65$c = xngpl['substring'](vqaruw + 0x2)['replace'](/[\s<].*/, ''), pylxo['error']('end tag name: ' + jk65$c + ' is not complete:' + i1_jd['tagName']), j6$kc = vqaruw + 0x1 + jk65$c['length']) : jk65$c['match'](/\s</) && (jk65$c = jk65$c['replace'](/[\s<].*/, ''), pylxo['error']('end tag name: ' + jk65$c + ' maybe not complete'), j6$kc = vqaruw + 0x1 + jk65$c['length']);var si1dt_ = i1_jd['localNSMap'],
              fqwrv = i1_jd['tagName'] == jk65$c,
              k$4mcb = fqwrv || i1_jd['tagName'] && i1_jd['tagName']['toLowerCase']() == jk65$c['toLowerCase']();if (k$4mcb) {
            if ($mbc4k['endElement'](i1_jd['uri'], i1_jd['localName'], jk65$c), si1dt_) {
              for (var i5j16 in si1dt_) $mbc4k['endPrefixMapping'](i5j16);
            }fqwrv || pylxo['fatalError']('end tag name: ' + jk65$c + ' is not match the current start tagName:' + i1_jd['tagName']);
          } else $46ck['push'](i1_jd);j6$kc++;break;case '?':
          mfw7b && i_2t(vqaruw), j6$kc = Ebm8w7(xngpl, vqaruw, $mbc4k);break;case '!':
          mfw7b && i_2t(vqaruw), j6$kc = Eqa9ghu(xngpl, vqaruw, $mbc4k, pylxo);break;default:
          mfw7b && i_2t(vqaruw);var m7bf48 = new Ek5ji(),
              _5i1 = $46ck[$46ck['length'] - 0x1]['currentNSMap'],
              j6$kc = Eplngy(xngpl, vqaruw, m7bf48, _5i1, $km4bc, pylxo),
              wvqf = m7bf48['length'];if (!m7bf48['closed'] && Eqgh9ua(xngpl, j6$kc, m7bf48['tagName'], wfr8v7) && (m7bf48['closed'] = !0x0, yu9hg['nbsp'] || pylxo['warning']('unclosed xml attribute')), mfw7b && wvqf) {
            for (var idst1 = Evaur9q(mfw7b, {}), tid1s = 0x0; wvqf > tid1s; tid1s++) {
              var dik6j5 = m7bf48[tid1s];i_2t(dik6j5['offset']), dik6j5['locator'] = Evaur9q(mfw7b, {});
            }$mbc4k['locator'] = idst1, Ehqu9ar(m7bf48, $mbc4k, _5i1) && $46ck['push'](m7bf48), $mbc4k['locator'] = mfw7b;
          } else Ehqu9ar(m7bf48, $mbc4k, _5i1) && $46ck['push'](m7bf48);'http://www.w3.org/1999/xhtml' !== m7bf48['uri'] || m7bf48['closed'] ? j6$kc++ : j6$kc = Evfqr8(xngpl, j6$kc, m7bf48['tagName'], $km4bc, $mbc4k);}
    } catch (aqrv) {
      pylxo['error']('element parse error: ' + aqrv), j6$kc = -0x1;
    }j6$kc > t2_s ? t2_s = j6$kc : t2s0z3(Math['max'](vqaruw, t2_s) + 0x1);
  }
}function Evaur9q(gnhpl, t2z30) {
  return t2z30['lineNumber'] = gnhpl['lineNumber'], t2z30['columnNumber'] = gnhpl['columnNumber'], t2z30;
}function Eplngy(pxylno, tj1i, guph9y, t3_, lyngpx, mk$bc) {
  for (var m7fvw, $cb4, di_5j = ++tj1i, $c7b = Ehpy9n;;) {
    var pony = pxylno['charAt'](di_5j);switch (pony) {case '=':
        if ($c7b === Ec7fmb) m7fvw = pxylno['slice'](tj1i, di_5j), $c7b = Ekdj5;else {
          if ($c7b !== E$jdk56) throw new Error('attribute equal must after attrName');$c7b = Ekdj5;
        }break;case '\x27':case '\x22':
        if ($c7b === Ekdj5 || $c7b === Ec7fmb) {
          if ($c7b === Ec7fmb && (mk$bc['warning']('attribute value must after "="'), m7fvw = pxylno['slice'](tj1i, di_5j)), tj1i = di_5j + 0x1, di_5j = pxylno['indexOf'](pony, tj1i), !(di_5j > 0x0)) throw new Error('attribute value no end \'' + pony + '\' match');$cb4 = pxylno['slice'](tj1i, di_5j)['replace'](/&#?\w+;/g, lyngpx), guph9y['add'](m7fvw, $cb4, tj1i - 0x1), $c7b = Ewa8rqv;
        } else {
          if ($c7b != Edj5k$6) throw new Error('attribute value must after "="');$cb4 = pxylno['slice'](tj1i, di_5j)['replace'](/&#?\w+;/g, lyngpx), guph9y['add'](m7fvw, $cb4, tj1i), mk$bc['warning']('attribute "' + m7fvw + '" missed start quot(' + pony + ')!!'), tj1i = di_5j + 0x1, $c7b = Ewa8rqv;
        }break;case '/':
        switch ($c7b) {case Ehpy9n:
            guph9y['setTagName'](pxylno['slice'](tj1i, di_5j));case Ewa8rqv:case Eap9hu:case E_sd1t:
            $c7b = E_sd1t, guph9y['closed'] = !0x0;case Edj5k$6:case Ec7fmb:case E$jdk56:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return mk$bc['error']('unexpected end of input'), $c7b == Ehpy9n && guph9y['setTagName'](pxylno['slice'](tj1i, di_5j)), di_5j;case '>':
        switch ($c7b) {case Ehpy9n:
            guph9y['setTagName'](pxylno['slice'](tj1i, di_5j));case Ewa8rqv:case Eap9hu:case E_sd1t:
            break;case Edj5k$6:case Ec7fmb:
            $cb4 = pxylno['slice'](tj1i, di_5j), '/' === $cb4['slice'](-0x1) && (guph9y['closed'] = !0x0, $cb4 = $cb4['slice'](0x0, -0x1));case E$jdk56:
            $c7b === E$jdk56 && ($cb4 = m7fvw), $c7b == Edj5k$6 ? (mk$bc['warning']('attribute "' + $cb4 + '" missed quot(")!!'), guph9y['add'](m7fvw, $cb4['replace'](/&#?\w+;/g, lyngpx), tj1i)) : ('http://www.w3.org/1999/xhtml' === t3_[''] && $cb4['match'](/^(?:disabled|checked|selected)$/i) || mk$bc['warning']('attribute "' + $cb4 + '" missed value!! "' + $cb4 + '" instead!!'), guph9y['add']($cb4, $cb4, tj1i));break;case Ekdj5:
            throw new Error('attribute value missed!!');}return di_5j;case '\u0080':
        pony = '\x20';default:
        if ('\x20' >= pony) switch ($c7b) {case Ehpy9n:
            guph9y['setTagName'](pxylno['slice'](tj1i, di_5j)), $c7b = Eap9hu;break;case Ec7fmb:
            m7fvw = pxylno['slice'](tj1i, di_5j), $c7b = E$jdk56;break;case Edj5k$6:
            var $cb4 = pxylno['slice'](tj1i, di_5j)['replace'](/&#?\w+;/g, lyngpx);mk$bc['warning']('attribute "' + $cb4 + '" missed quot(")!!'), guph9y['add'](m7fvw, $cb4, tj1i);case Ewa8rqv:
            $c7b = Eap9hu;} else switch ($c7b) {case E$jdk56:
            {
              guph9y['tagName'];
            }'http://www.w3.org/1999/xhtml' === t3_[''] && m7fvw['match'](/^(?:disabled|checked|selected)$/i) || mk$bc['warning']('attribute "' + m7fvw + '" missed value!! "' + m7fvw + '" instead2!!'), guph9y['add'](m7fvw, m7fvw, tj1i), tj1i = di_5j, $c7b = Ec7fmb;break;case Ewa8rqv:
            mk$bc['warning']('attribute space is required"' + m7fvw + '\x22!!');case Eap9hu:
            $c7b = Ec7fmb, tj1i = di_5j;break;case Ekdj5:
            $c7b = Edj5k$6, tj1i = di_5j;break;case E_sd1t:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}di_5j++;
  }
}function Ehqu9ar(polxny, lyghnp, mbf4) {
  for (var gphn9y = polxny['tagName'], ijdk5 = null, ha9upg = polxny['length']; ha9upg--;) {
    var z0s3 = polxny[ha9upg],
        tji_ = z0s3['qName'],
        rqha9u = z0s3['value'],
        lopxn = tji_['indexOf'](':');if (lopxn > 0x0) var mcb7 = z0s3['prefix'] = tji_['slice'](0x0, lopxn),
        lyngx = tji_['slice'](lopxn + 0x1),
        vfrw87 = 'xmlns' === mcb7 && lyngx;else lyngx = tji_, mcb7 = null, vfrw87 = 'xmlns' === tji_ && '';z0s3['localName'] = lyngx, vfrw87 !== !0x1 && (null == ijdk5 && (ijdk5 = {}, Eg9auq(mbf4, mbf4 = {})), mbf4[vfrw87] = ijdk5[vfrw87] = rqha9u, z0s3['uri'] = 'http://www.w3.org/2000/xmlns/', lyghnp['startPrefixMapping'](vfrw87, rqha9u));
  }for (var ha9upg = polxny['length']; ha9upg--;) {
    z0s3 = polxny[ha9upg];var mcb7 = z0s3['prefix'];mcb7 && ('xml' === mcb7 && (z0s3['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== mcb7 && (z0s3['uri'] = mbf4[mcb7 || '']));
  }var lopxn = gphn9y['indexOf'](':');lopxn > 0x0 ? (mcb7 = polxny['prefix'] = gphn9y['slice'](0x0, lopxn), lyngx = polxny['localName'] = gphn9y['slice'](lopxn + 0x1)) : (mcb7 = null, lyngx = polxny['localName'] = gphn9y);var ijd6k5 = polxny['uri'] = mbf4[mcb7 || ''];if (lyghnp['startElement'](ijd6k5, lyngx, gphn9y, polxny), !polxny['closed']) return polxny['currentNSMap'] = mbf4, polxny['localNSMap'] = ijdk5, !0x0;if (lyghnp['endElement'](ijd6k5, lyngx, gphn9y), ijdk5) {
    for (mcb7 in ijdk5) lyghnp['endPrefixMapping'](mcb7);
  }
}function Evfqr8(ts32_0, fm8wv7, vq8fwr, p9ghy, mbfw7) {
  if (/^(?:script|textarea)$/i['test'](vq8fwr)) {
    var ynlgph = ts32_0['indexOf']('</' + vq8fwr + '>', fm8wv7),
        m7b4f8 = ts32_0['substring'](fm8wv7 + 0x1, ynlgph);if (/[&<]/['test'](m7b4f8)) return (/^script$/i['test'](vq8fwr) ? (mbfw7['characters'](m7b4f8, 0x0, m7b4f8['length']), ynlgph) : (m7b4f8 = m7b4f8['replace'](/&#?\w+;/g, p9ghy), mbfw7['characters'](m7b4f8, 0x0, m7b4f8['length']), ynlgph)
    );
  }return fm8wv7 + 0x1;
}function Eqgh9ua(v8w7fr, hg9uqa, f8r, bmf7w8) {
  var $6k5d = bmf7w8[f8r];return null == $6k5d && ($6k5d = v8w7fr['lastIndexOf']('</' + f8r + '>'), hg9uqa > $6k5d && ($6k5d = v8w7fr['lastIndexOf']('</' + f8r)), bmf7w8[f8r] = $6k5d), hg9uqa > $6k5d;
}function Eg9auq(ck5$6j, uahqr9) {
  for (var hpyu in ck5$6j) uahqr9[hpyu] = ck5$6j[hpyu];
}function Eqa9ghu(t1s_2i, m7w8vf, m7b$4, pynxgl) {
  var wvqur = t1s_2i['charAt'](m7w8vf + 0x2);switch (wvqur) {case '-':
      if ('-' === t1s_2i['charAt'](m7w8vf + 0x3)) {
        var wb78 = t1s_2i['indexOf']('-->', m7w8vf + 0x4);return wb78 > m7w8vf ? (m7b$4['comment'](t1s_2i, m7w8vf + 0x4, wb78 - m7w8vf - 0x4), wb78 + 0x3) : (pynxgl['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == t1s_2i['substr'](m7w8vf + 0x3, 0x6)) {
        var wb78 = t1s_2i['indexOf'](']]>', m7w8vf + 0x9);return m7b$4['startCDATA'](), m7b$4['characters'](t1s_2i, m7w8vf + 0x9, wb78 - m7w8vf - 0x9), m7b$4['endCDATA'](), wb78 + 0x3;
      }var frv8w7 = Euyg9h(t1s_2i, m7w8vf),
          hpug = frv8w7['length'];if (hpug > 0x1 && /!doctype/i['test'](frv8w7[0x0][0x0])) {
        var noy = frv8w7[0x1][0x0],
            r8qwav = hpug > 0x3 && /^public$/i['test'](frv8w7[0x2][0x0]) && frv8w7[0x3][0x0],
            f48b7m = hpug > 0x4 && frv8w7[0x4][0x0],
            $46ck5 = frv8w7[hpug - 0x1];return m7b$4['startDTD'](noy, r8qwav && r8qwav['replace'](/^(['"])(.*?)\1$/, '$2'), f48b7m && f48b7m['replace'](/^(['"])(.*?)\1$/, '$2')), m7b$4['endDTD'](), $46ck5['index'] + $46ck5[0x0]['length'];
      }}return -0x1;
}function Ebm8w7(t_12si, tisd_, nyxop) {
  var uq9arh = t_12si['indexOf']('?>', tisd_);if (uq9arh) {
    var djit = t_12si['substring'](tisd_, uq9arh)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (djit) {
      {
        djit[0x0]['length'];
      }return nyxop['processingInstruction'](djit[0x1], djit[0x2]), uq9arh + 0x2;
    }return -0x1;
  }return -0x1;
}function Ek5ji() {}function E$kd56(j5_di, s1it) {
  return j5_di['__proto__'] = s1it, j5_di;
}function Euyg9h($m4cbk, m$kcb) {
  var ug9yph,
      d1ji = [],
      rqvuwa = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (rqvuwa['lastIndex'] = m$kcb, rqvuwa['exec']($m4cbk); ug9yph = rqvuwa['exec']($m4cbk);) if (d1ji['push'](ug9yph), ug9yph[0x1]) return d1ji;
}var Em7v8wf = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Eawuqv = new RegExp('[\\-\\.0-9' + Em7v8wf['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Ecmkb4$ = new RegExp('^' + Em7v8wf['source'] + Eawuqv['source'] + '*(?::' + Em7v8wf['source'] + Eawuqv['source'] + '*)?$'),
    Ehpy9n = 0x0,
    Ec7fmb = 0x1,
    E$jdk56 = 0x2,
    Ekdj5 = 0x3,
    Edj5k$6 = 0x4,
    Ewa8rqv = 0x5,
    Eap9hu = 0x6,
    E_sd1t = 0x7;Epg['prototype'] = { 'parse': function (r8fvw7, d_tj1i, bfm7w) {
    var wvmf7 = this['domBuilder'];wvmf7['startDocument'](), Eg9auq(d_tj1i, d_tj1i = {}), Efbm478(r8fvw7, d_tj1i, bfm7w, wvmf7, this['errorHandler']), wvmf7['endDocument']();
  } }, Ek5ji['prototype'] = { 'setTagName': function (gqua) {
    if (!Ecmkb4$['test'](gqua)) throw new Error('invalid tagName:' + gqua);this['tagName'] = gqua;
  }, 'add': function (qwvar, fbm78, bm$47) {
    if (!Ecmkb4$['test'](qwvar)) throw new Error('invalid attribute:' + qwvar);this[this['length']++] = { 'qName': qwvar, 'value': fbm78, 'offset': bm$47 };
  }, 'length': 0x0, 'getLocalName': function (uavw) {
    return this[uavw]['localName'];
  }, 'getLocator': function (bmk$c) {
    return this[bmk$c]['locator'];
  }, 'getQName': function (q8awr) {
    return this[q8awr]['qName'];
  }, 'getURI': function (bkm4c) {
    return this[bkm4c]['uri'];
  }, 'getValue': function (qr9ahu) {
    return this[qr9ahu]['value'];
  } }, E$kd56({}, E$kd56['prototype']) instanceof E$kd56 || (E$kd56 = function (qgauh, u9hra) {
  function auq9hg() {}auq9hg['prototype'] = u9hra, auq9hg = new auq9hg();for (u9hra in qgauh) auq9hg[u9hra] = qgauh[u9hra];return auq9hg;
}), exports['XMLReader'] = Epg;