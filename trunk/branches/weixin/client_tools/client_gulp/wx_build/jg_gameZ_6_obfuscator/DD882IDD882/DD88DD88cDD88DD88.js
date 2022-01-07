var G = wx.$E;
function Efbw7() {}function Ej$6k5c(g9nhp, lnpxy, hpgynl, w7v, uvqarw) {
  function bc4mk$(_0st2) {
    if (_0st2 > 0xffff) {
      _0st2 -= 0x10000;var ts3_21 = 0xd800 + (_0st2 >> 0xa),
          $bk64c = 0xdc00 + (0x3ff & _0st2);return String['fromCharCode'](ts3_21, $bk64c);
    }return String['fromCharCode'](_0st2);
  }function m87wfv(jd1_i5) {
    var _d1ij = jd1_i5['slice'](0x1, -0x1);return _d1ij in hpgynl ? hpgynl[_d1ij] : '#' === _d1ij['charAt'](0x0) ? bc4mk$(parseInt(_d1ij['substr'](0x1)['replace']('x', '0x'))) : (uvqarw['error']('entity not found:' + jd1_i5), jd1_i5);
  }function lpngyx(b47cm$) {
    if (b47cm$ > uh9aq) {
      var hpu9 = g9nhp['substring'](uh9aq, b47cm$)['replace'](/&#?\w+;/g, m87wfv);qhga && jd56(uh9aq), w7v['characters'](hpu9, 0x0, b47cm$ - uh9aq), uh9aq = b47cm$;
    }
  }function jd56(qra9u, ug9yh) {
    for (; qra9u >= ah9gpu && (ug9yh = haq9ru['exec'](g9nhp));) ij15_d = ug9yh['index'], ah9gpu = ij15_d + ug9yh[0x0]['length'], qhga['lineNumber']++;qhga['columnNumber'] = qra9u - ij15_d + 0x1;
  }for (var ij15_d = 0x0, ah9gpu = 0x0, haq9ru = /.*(?:\r\n?|\n)|.*$/g, qhga = w7v['locator'], nplyg = [{ 'currentNSMap': lnpxy }], v9uaqr = {}, uh9aq = 0x0;;) {
    try {
      var $7mc4 = g9nhp['indexOf']('<', uh9aq);if (0x0 > $7mc4) {
        if (!g9nhp['substr'](uh9aq)['match'](/^\s*$/)) {
          var sz2t = w7v['doc'],
              r7wvf = sz2t['createTextNode'](g9nhp['substr'](uh9aq));sz2t['appendChild'](r7wvf), w7v['currentElement'] = r7wvf;
        }return;
      }switch ($7mc4 > uh9aq && lpngyx($7mc4), g9nhp['charAt']($7mc4 + 0x1)) {case '/':
          var gn9yph = g9nhp['indexOf']('>', $7mc4 + 0x3),
              rqvau9 = g9nhp['substring']($7mc4 + 0x2, gn9yph),
              kj6c5 = nplyg['pop']();0x0 > gn9yph ? (rqvau9 = g9nhp['substring']($7mc4 + 0x2)['replace'](/[\s<].*/, ''), uvqarw['error']('end tag name: ' + rqvau9 + ' is not complete:' + kj6c5['tagName']), gn9yph = $7mc4 + 0x1 + rqvau9['length']) : rqvau9['match'](/\s</) && (rqvau9 = rqvau9['replace'](/[\s<].*/, ''), uvqarw['error']('end tag name: ' + rqvau9 + ' maybe not complete'), gn9yph = $7mc4 + 0x1 + rqvau9['length']);var t1s2i_ = kj6c5['localNSMap'],
              wqa8r = kj6c5['tagName'] == rqvau9,
              r7 = wqa8r || kj6c5['tagName'] && kj6c5['tagName']['toLowerCase']() == rqvau9['toLowerCase']();if (r7) {
            if (w7v['endElement'](kj6c5['uri'], kj6c5['localName'], rqvau9), t1s2i_) {
              for (var fqr8w in t1s2i_) w7v['endPrefixMapping'](fqr8w);
            }wqa8r || uvqarw['fatalError']('end tag name: ' + rqvau9 + ' is not match the current start tagName:' + kj6c5['tagName']);
          } else nplyg['push'](kj6c5);gn9yph++;break;case '?':
          qhga && jd56($7mc4), gn9yph = Ehn9yg(g9nhp, $7mc4, w7v);break;case '!':
          qhga && jd56($7mc4), gn9yph = Eglyhp(g9nhp, $7mc4, w7v, uvqarw);break;default:
          qhga && jd56($7mc4);var fc4m = new Emb87(),
              w8qrva = nplyg[nplyg['length'] - 0x1]['currentNSMap'],
              gn9yph = E$jd5k6(g9nhp, $7mc4, fc4m, w8qrva, m87wfv, uvqarw),
              cm$4b = fc4m['length'];if (!fc4m['closed'] && E$5dk6(g9nhp, gn9yph, fc4m['tagName'], v9uaqr) && (fc4m['closed'] = !0x0, hpgynl['nbsp'] || uvqarw['warning']('unclosed xml attribute')), qhga && cm$4b) {
            for (var lpyxng = Edi1ts(qhga, {}), ypgu9 = 0x0; cm$4b > ypgu9; ypgu9++) {
              var ckmb4 = fc4m[ypgu9];jd56(ckmb4['offset']), ckmb4['locator'] = Edi1ts(qhga, {});
            }w7v['locator'] = lpyxng, Ef7mw(fc4m, w7v, w8qrva) && nplyg['push'](fc4m), w7v['locator'] = qhga;
          } else Ef7mw(fc4m, w7v, w8qrva) && nplyg['push'](fc4m);'http://www.w3.org/1999/xhtml' !== fc4m['uri'] || fc4m['closed'] ? gn9yph++ : gn9yph = Ei6jkd(g9nhp, gn9yph, fc4m['tagName'], m87wfv, w7v);}
    } catch (vm7fw) {
      uvqarw['error']('element parse error: ' + vm7fw), gn9yph = -0x1;
    }gn9yph > uh9aq ? uh9aq = gn9yph : lpngyx(Math['max']($7mc4, uh9aq) + 0x1);
  }
}function Edi1ts(nhy9g, vwfqr8) {
  return vwfqr8['lineNumber'] = nhy9g['lineNumber'], vwfqr8['columnNumber'] = nhy9g['columnNumber'], vwfqr8;
}function E$jd5k6(hgpy9u, fr7w8v, npxlyg, _13t, vrw, lynpgh) {
  for (var rvf8q, t1_2s3, h9ygn = ++fr7w8v, ts_d = Epnlg;;) {
    var vqf = hgpy9u['charAt'](h9ygn);switch (vqf) {case '=':
        if (ts_d === Efr87w) rvf8q = hgpy9u['slice'](fr7w8v, h9ygn), ts_d = Ew7fvm8;else {
          if (ts_d !== Est_213) throw new Error('attribute equal must after attrName');ts_d = Ew7fvm8;
        }break;case '\x27':case '\x22':
        if (ts_d === Ew7fvm8 || ts_d === Efr87w) {
          if (ts_d === Efr87w && (lynpgh['warning']('attribute value must after "="'), rvf8q = hgpy9u['slice'](fr7w8v, h9ygn)), fr7w8v = h9ygn + 0x1, h9ygn = hgpy9u['indexOf'](vqf, fr7w8v), !(h9ygn > 0x0)) throw new Error('attribute value no end \'' + vqf + '\' match');t1_2s3 = hgpy9u['slice'](fr7w8v, h9ygn)['replace'](/&#?\w+;/g, vrw), npxlyg['add'](rvf8q, t1_2s3, fr7w8v - 0x1), ts_d = Ewraquv;
        } else {
          if (ts_d != Emb74f8) throw new Error('attribute value must after "="');t1_2s3 = hgpy9u['slice'](fr7w8v, h9ygn)['replace'](/&#?\w+;/g, vrw), npxlyg['add'](rvf8q, t1_2s3, fr7w8v), lynpgh['warning']('attribute "' + rvf8q + '" missed start quot(' + vqf + ')!!'), fr7w8v = h9ygn + 0x1, ts_d = Ewraquv;
        }break;case '/':
        switch (ts_d) {case Epnlg:
            npxlyg['setTagName'](hgpy9u['slice'](fr7w8v, h9ygn));case Ewraquv:case Ec5$k64:case Et_203s:
            ts_d = Et_203s, npxlyg['closed'] = !0x0;case Emb74f8:case Efr87w:case Est_213:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lynpgh['error']('unexpected end of input'), ts_d == Epnlg && npxlyg['setTagName'](hgpy9u['slice'](fr7w8v, h9ygn)), h9ygn;case '>':
        switch (ts_d) {case Epnlg:
            npxlyg['setTagName'](hgpy9u['slice'](fr7w8v, h9ygn));case Ewraquv:case Ec5$k64:case Et_203s:
            break;case Emb74f8:case Efr87w:
            t1_2s3 = hgpy9u['slice'](fr7w8v, h9ygn), '/' === t1_2s3['slice'](-0x1) && (npxlyg['closed'] = !0x0, t1_2s3 = t1_2s3['slice'](0x0, -0x1));case Est_213:
            ts_d === Est_213 && (t1_2s3 = rvf8q), ts_d == Emb74f8 ? (lynpgh['warning']('attribute "' + t1_2s3 + '" missed quot(")!!'), npxlyg['add'](rvf8q, t1_2s3['replace'](/&#?\w+;/g, vrw), fr7w8v)) : ('http://www.w3.org/1999/xhtml' === _13t[''] && t1_2s3['match'](/^(?:disabled|checked|selected)$/i) || lynpgh['warning']('attribute "' + t1_2s3 + '" missed value!! "' + t1_2s3 + '" instead!!'), npxlyg['add'](t1_2s3, t1_2s3, fr7w8v));break;case Ew7fvm8:
            throw new Error('attribute value missed!!');}return h9ygn;case '\u0080':
        vqf = '\x20';default:
        if ('\x20' >= vqf) switch (ts_d) {case Epnlg:
            npxlyg['setTagName'](hgpy9u['slice'](fr7w8v, h9ygn)), ts_d = Ec5$k64;break;case Efr87w:
            rvf8q = hgpy9u['slice'](fr7w8v, h9ygn), ts_d = Est_213;break;case Emb74f8:
            var t1_2s3 = hgpy9u['slice'](fr7w8v, h9ygn)['replace'](/&#?\w+;/g, vrw);lynpgh['warning']('attribute "' + t1_2s3 + '" missed quot(")!!'), npxlyg['add'](rvf8q, t1_2s3, fr7w8v);case Ewraquv:
            ts_d = Ec5$k64;} else switch (ts_d) {case Est_213:
            {
              npxlyg['tagName'];
            }'http://www.w3.org/1999/xhtml' === _13t[''] && rvf8q['match'](/^(?:disabled|checked|selected)$/i) || lynpgh['warning']('attribute "' + rvf8q + '" missed value!! "' + rvf8q + '" instead2!!'), npxlyg['add'](rvf8q, rvf8q, fr7w8v), fr7w8v = h9ygn, ts_d = Efr87w;break;case Ewraquv:
            lynpgh['warning']('attribute space is required"' + rvf8q + '\x22!!');case Ec5$k64:
            ts_d = Efr87w, fr7w8v = h9ygn;break;case Ew7fvm8:
            ts_d = Emb74f8, fr7w8v = h9ygn;break;case Et_203s:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}h9ygn++;
  }
}function Ef7mw(g9hnyp, k56$4c, lnghyp) {
  for (var _i1dt = g9hnyp['tagName'], xyol = null, q8vf = g9hnyp['length']; q8vf--;) {
    var m84f7b = g9hnyp[q8vf],
        is1t = m84f7b['qName'],
        ck$b = m84f7b['value'],
        m$ck = is1t['indexOf'](':');if (m$ck > 0x0) var _3t20 = m84f7b['prefix'] = is1t['slice'](0x0, m$ck),
        u9ga = is1t['slice'](m$ck + 0x1),
        ti2s1 = 'xmlns' === _3t20 && u9ga;else u9ga = is1t, _3t20 = null, ti2s1 = 'xmlns' === is1t && '';m84f7b['localName'] = u9ga, ti2s1 !== !0x1 && (null == xyol && (xyol = {}, Ephyl(lnghyp, lnghyp = {})), lnghyp[ti2s1] = xyol[ti2s1] = ck$b, m84f7b['uri'] = 'http://www.w3.org/2000/xmlns/', k56$4c['startPrefixMapping'](ti2s1, ck$b));
  }for (var q8vf = g9hnyp['length']; q8vf--;) {
    m84f7b = g9hnyp[q8vf];var _3t20 = m84f7b['prefix'];_3t20 && ('xml' === _3t20 && (m84f7b['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== _3t20 && (m84f7b['uri'] = lnghyp[_3t20 || '']));
  }var m$ck = _i1dt['indexOf'](':');m$ck > 0x0 ? (_3t20 = g9hnyp['prefix'] = _i1dt['slice'](0x0, m$ck), u9ga = g9hnyp['localName'] = _i1dt['slice'](m$ck + 0x1)) : (_3t20 = null, u9ga = g9hnyp['localName'] = _i1dt);var c4fb7 = g9hnyp['uri'] = lnghyp[_3t20 || ''];if (k56$4c['startElement'](c4fb7, u9ga, _i1dt, g9hnyp), !g9hnyp['closed']) return g9hnyp['currentNSMap'] = lnghyp, g9hnyp['localNSMap'] = xyol, !0x0;if (k56$4c['endElement'](c4fb7, u9ga, _i1dt), xyol) {
    for (_3t20 in xyol) k56$4c['endPrefixMapping'](_3t20);
  }
}function Ei6jkd(z32ts, ts1i, j5$c6k, j5k6i, w8rvf) {
  if (/^(?:script|textarea)$/i['test'](j5$c6k)) {
    var qhag9u = z32ts['indexOf']('</' + j5$c6k + '>', ts1i),
        nlhgpy = z32ts['substring'](ts1i + 0x1, qhag9u);if (/[&<]/['test'](nlhgpy)) return (/^script$/i['test'](j5$c6k) ? (w8rvf['characters'](nlhgpy, 0x0, nlhgpy['length']), qhag9u) : (nlhgpy = nlhgpy['replace'](/&#?\w+;/g, j5k6i), w8rvf['characters'](nlhgpy, 0x0, nlhgpy['length']), qhag9u)
    );
  }return ts1i + 0x1;
}function E$5dk6(d6j$5k, bmw7f, r7v8f, uv9aqr) {
  var oylnpx = uv9aqr[r7v8f];return null == oylnpx && (oylnpx = d6j$5k['lastIndexOf']('</' + r7v8f + '>'), bmw7f > oylnpx && (oylnpx = d6j$5k['lastIndexOf']('</' + r7v8f)), uv9aqr[r7v8f] = oylnpx), bmw7f > oylnpx;
}function Ephyl(s1_2it, qrwv8) {
  for (var c4mb in s1_2it) qrwv8[c4mb] = s1_2it[c4mb];
}function Eglyhp(s_23t, b7mcf4, pxnly, _jitd1) {
  var _s1idt = s_23t['charAt'](b7mcf4 + 0x2);switch (_s1idt) {case '-':
      if ('-' === s_23t['charAt'](b7mcf4 + 0x3)) {
        var g9npy = s_23t['indexOf']('-->', b7mcf4 + 0x4);return g9npy > b7mcf4 ? (pxnly['comment'](s_23t, b7mcf4 + 0x4, g9npy - b7mcf4 - 0x4), g9npy + 0x3) : (_jitd1['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == s_23t['substr'](b7mcf4 + 0x3, 0x6)) {
        var g9npy = s_23t['indexOf'](']]>', b7mcf4 + 0x9);return pxnly['startCDATA'](), pxnly['characters'](s_23t, b7mcf4 + 0x9, g9npy - b7mcf4 - 0x9), pxnly['endCDATA'](), g9npy + 0x3;
      }var $k54c6 = Eauvwq(s_23t, b7mcf4),
          s3tz2 = $k54c6['length'];if (s3tz2 > 0x1 && /!doctype/i['test']($k54c6[0x0][0x0])) {
        var rf8qw = $k54c6[0x1][0x0],
            hg9pu = s3tz2 > 0x3 && /^public$/i['test']($k54c6[0x2][0x0]) && $k54c6[0x3][0x0],
            st1i2_ = s3tz2 > 0x4 && $k54c6[0x4][0x0],
            h9pyng = $k54c6[s3tz2 - 0x1];return pxnly['startDTD'](rf8qw, hg9pu && hg9pu['replace'](/^(['"])(.*?)\1$/, '$2'), st1i2_ && st1i2_['replace'](/^(['"])(.*?)\1$/, '$2')), pxnly['endDTD'](), h9pyng['index'] + h9pyng[0x0]['length'];
      }}return -0x1;
}function Ehn9yg($kcj5, vwf8m, g9upa) {
  var k4b$m = $kcj5['indexOf']('?>', vwf8m);if (k4b$m) {
    var ahg9 = $kcj5['substring'](vwf8m, k4b$m)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (ahg9) {
      {
        ahg9[0x0]['length'];
      }return g9upa['processingInstruction'](ahg9[0x1], ahg9[0x2]), k4b$m + 0x2;
    }return -0x1;
  }return -0x1;
}function Emb87() {}function Eij56d(c654$, gynxlp) {
  return c654$['__proto__'] = gynxlp, c654$;
}function Eauvwq($4c6, fm874b) {
  var dij1_5,
      _1jd5i = [],
      waquv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (waquv['lastIndex'] = fm874b, waquv['exec']($4c6); dij1_5 = waquv['exec']($4c6);) if (_1jd5i['push'](dij1_5), dij1_5[0x1]) return _1jd5i;
}var Esz230t = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Era8qv = new RegExp('[\\-\\.0-9' + Esz230t['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    E$k4bc6 = new RegExp('^' + Esz230t['source'] + Era8qv['source'] + '*(?::' + Esz230t['source'] + Era8qv['source'] + '*)?$'),
    Epnlg = 0x0,
    Efr87w = 0x1,
    Est_213 = 0x2,
    Ew7fvm8 = 0x3,
    Emb74f8 = 0x4,
    Ewraquv = 0x5,
    Ec5$k64 = 0x6,
    Et_203s = 0x7;Efbw7['prototype'] = { 'parse': function (jikd65, avwq8r, rvw8aq) {
    var dt1is_ = this['domBuilder'];dt1is_['startDocument'](), Ephyl(avwq8r, avwq8r = {}), Ej$6k5c(jikd65, avwq8r, rvw8aq, dt1is_, this['errorHandler']), dt1is_['endDocument']();
  } }, Emb87['prototype'] = { 'setTagName': function (huypg9) {
    if (!E$k4bc6['test'](huypg9)) throw new Error('invalid tagName:' + huypg9);this['tagName'] = huypg9;
  }, 'add': function (hu9gqa, uaqhg, hgpa9) {
    if (!E$k4bc6['test'](hu9gqa)) throw new Error('invalid attribute:' + hu9gqa);this[this['length']++] = { 'qName': hu9gqa, 'value': uaqhg, 'offset': hgpa9 };
  }, 'length': 0x0, 'getLocalName': function (tsz3) {
    return this[tsz3]['localName'];
  }, 'getLocator': function (ghpu9) {
    return this[ghpu9]['locator'];
  }, 'getQName': function (uawrq) {
    return this[uawrq]['qName'];
  }, 'getURI': function (vrf8q) {
    return this[vrf8q]['uri'];
  }, 'getValue': function (nolxyp) {
    return this[nolxyp]['value'];
  } }, Eij56d({}, Eij56d['prototype']) instanceof Eij56d || (Eij56d = function (lxnpy, ga9uqh) {
  function dj6() {}dj6['prototype'] = ga9uqh, dj6 = new dj6();for (ga9uqh in lxnpy) dj6[ga9uqh] = lxnpy[ga9uqh];return dj6;
}), exports['XMLReader'] = Efbw7;