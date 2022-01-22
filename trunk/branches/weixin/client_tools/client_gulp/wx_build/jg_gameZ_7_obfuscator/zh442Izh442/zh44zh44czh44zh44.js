var e = wx.$F;
function ljsek$() {}function l_$kvb(git3ym, ndzp4, j$e_s, z4d9, i3myg) {
  function zfwu9c(e$_sjk) {
    if (e$_sjk > 0xffff) {
      e$_sjk -= 0x10000;var ao70q5 = 0xd800 + (e$_sjk >> 0xa),
          ryim8 = 0xdc00 + (0x3ff & e$_sjk);return String['fromCharCode'](ao70q5, ryim8);
    }return String['fromCharCode'](e$_sjk);
  }function uw9f1(ul9w1) {
    var b$62k = ul9w1['slice'](0x1, -0x1);return b$62k in j$e_s ? j$e_s[b$62k] : '#' === b$62k['charAt'](0x0) ? zfwu9c(parseInt(b$62k['substr'](0x1)['replace']('x', '0x'))) : (i3myg['error']('entity not found:' + ul9w1), ul9w1);
  }function epsd(psn_e) {
    if (psn_e > $sk_2e) {
      var romi8 = git3ym['substring']($sk_2e, psn_e)['replace'](/&#?\w+;/g, uw9f1);zpcd94 && a5qb6v($sk_2e), z4d9['characters'](romi8, 0x0, psn_e - $sk_2e), $sk_2e = psn_e;
    }
  }function a5qb6v(c4d9zu, knje_) {
    for (; c4d9zu >= $k26vb && (knje_ = e_njk['exec'](git3ym));) cdpz49 = knje_['index'], $k26vb = cdpz49 + knje_[0x0]['length'], zpcd94['lineNumber']++;zpcd94['columnNumber'] = c4d9zu - cdpz49 + 0x1;
  }for (var cdpz49 = 0x0, $k26vb = 0x0, e_njk = /.*(?:\r\n?|\n)|.*$/g, zpcd94 = z4d9['locator'], es_$j = [{ 'currentNSMap': ndzp4 }], $k62b = {}, $sk_2e = 0x0;;) {
    try {
      var myri83 = git3ym['indexOf']('<', $sk_2e);if (0x0 > myri83) {
        if (!git3ym['substr']($sk_2e)['match'](/^\s*$/)) {
          var c9u4 = z4d9['doc'],
              xr7o80 = c9u4['createTextNode'](git3ym['substr']($sk_2e));c9u4['appendChild'](xr7o80), z4d9['currentElement'] = xr7o80;
        }return;
      }switch (myri83 > $sk_2e && epsd(myri83), git3ym['charAt'](myri83 + 0x1)) {case '/':
          var mio8x = git3ym['indexOf']('>', myri83 + 0x3),
              mi3tgy = git3ym['substring'](myri83 + 0x2, mio8x),
              cp94 = es_$j['pop']();0x0 > mio8x ? (mi3tgy = git3ym['substring'](myri83 + 0x2)['replace'](/[\s<].*/, ''), i3myg['error']('end tag name: ' + mi3tgy + ' is not complete:' + cp94['tagName']), mio8x = myri83 + 0x1 + mi3tgy['length']) : mi3tgy['match'](/\s</) && (mi3tgy = mi3tgy['replace'](/[\s<].*/, ''), i3myg['error']('end tag name: ' + mi3tgy + ' maybe not complete'), mio8x = myri83 + 0x1 + mi3tgy['length']);var r8ixmo = cp94['localNSMap'],
              neps_ = cp94['tagName'] == mi3tgy,
              ymrix = neps_ || cp94['tagName'] && cp94['tagName']['toLowerCase']() == mi3tgy['toLowerCase']();if (ymrix) {
            if (z4d9['endElement'](cp94['uri'], cp94['localName'], mi3tgy), r8ixmo) {
              for (var jspnd in r8ixmo) z4d9['endPrefixMapping'](jspnd);
            }neps_ || i3myg['fatalError']('end tag name: ' + mi3tgy + ' is not match the current start tagName:' + cp94['tagName']);
          } else es_$j['push'](cp94);mio8x++;break;case '?':
          zpcd94 && a5qb6v(myri83), mio8x = lpdzc94(git3ym, myri83, z4d9);break;case '!':
          zpcd94 && a5qb6v(myri83), mio8x = llf9wu(git3ym, myri83, z4d9, i3myg);break;default:
          zpcd94 && a5qb6v(myri83);var _bkv$2 = new lxro78(),
              o705a = es_$j[es_$j['length'] - 0x1]['currentNSMap'],
              mio8x = lcduz(git3ym, myri83, _bkv$2, o705a, uw9f1, i3myg),
              ixom8r = _bkv$2['length'];if (!_bkv$2['closed'] && lfz9w(git3ym, mio8x, _bkv$2['tagName'], $k62b) && (_bkv$2['closed'] = !0x0, j$e_s['nbsp'] || i3myg['warning']('unclosed xml attribute')), zpcd94 && ixom8r) {
            for (var pnd = lz9fcuw(zpcd94, {}), b60 = 0x0; ixom8r > b60; b60++) {
              var orm8i = _bkv$2[b60];a5qb6v(orm8i['offset']), orm8i['locator'] = lz9fcuw(zpcd94, {});
            }z4d9['locator'] = pnd, lk_njes(_bkv$2, z4d9, o705a) && es_$j['push'](_bkv$2), z4d9['locator'] = zpcd94;
          } else lk_njes(_bkv$2, z4d9, o705a) && es_$j['push'](_bkv$2);'http://www.w3.org/1999/xhtml' !== _bkv$2['uri'] || _bkv$2['closed'] ? mio8x++ : mio8x = lav562(git3ym, mio8x, _bkv$2['tagName'], uw9f1, z4d9);}
    } catch (i38yrm) {
      i3myg['error']('element parse error: ' + i38yrm), mio8x = -0x1;
    }mio8x > $sk_2e ? $sk_2e = mio8x : epsd(Math['max'](myri83, $sk_2e) + 0x1);
  }
}function lz9fcuw(njks_e, $ksej) {
  return $ksej['lineNumber'] = njks_e['lineNumber'], $ksej['columnNumber'] = njks_e['columnNumber'], $ksej;
}function lcduz(bva62, n4jd, pz94d, x8imo, b56a0, ksnje) {
  for (var xo8im, a65q0, bvqa = ++n4jd, b0qa65 = lu4dc9;;) {
    var wf19lu = bva62['charAt'](bvqa);switch (wf19lu) {case '=':
        if (b0qa65 === l_$kvs2) xo8im = bva62['slice'](n4jd, bvqa), b0qa65 = ln_jpse;else {
          if (b0qa65 !== lqorx07) throw new Error('attribute equal must after attrName');b0qa65 = ln_jpse;
        }break;case '\x27':case '\x22':
        if (b0qa65 === ln_jpse || b0qa65 === l_$kvs2) {
          if (b0qa65 === l_$kvs2 && (ksnje['warning']('attribute value must after "="'), xo8im = bva62['slice'](n4jd, bvqa)), n4jd = bvqa + 0x1, bvqa = bva62['indexOf'](wf19lu, n4jd), !(bvqa > 0x0)) throw new Error('attribute value no end \'' + wf19lu + '\' match');a65q0 = bva62['slice'](n4jd, bvqa)['replace'](/&#?\w+;/g, b56a0), pz94d['add'](xo8im, a65q0, n4jd - 0x1), b0qa65 = liymr8;
        } else {
          if (b0qa65 != la560qb) throw new Error('attribute value must after "="');a65q0 = bva62['slice'](n4jd, bvqa)['replace'](/&#?\w+;/g, b56a0), pz94d['add'](xo8im, a65q0, n4jd), ksnje['warning']('attribute "' + xo8im + '" missed start quot(' + wf19lu + ')!!'), n4jd = bvqa + 0x1, b0qa65 = liymr8;
        }break;case '/':
        switch (b0qa65) {case lu4dc9:
            pz94d['setTagName'](bva62['slice'](n4jd, bvqa));case liymr8:case lrio8xm:case lm8i3gy:
            b0qa65 = lm8i3gy, pz94d['closed'] = !0x0;case la560qb:case l_$kvs2:case lqorx07:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ksnje['error']('unexpected end of input'), b0qa65 == lu4dc9 && pz94d['setTagName'](bva62['slice'](n4jd, bvqa)), bvqa;case '>':
        switch (b0qa65) {case lu4dc9:
            pz94d['setTagName'](bva62['slice'](n4jd, bvqa));case liymr8:case lrio8xm:case lm8i3gy:
            break;case la560qb:case l_$kvs2:
            a65q0 = bva62['slice'](n4jd, bvqa), '/' === a65q0['slice'](-0x1) && (pz94d['closed'] = !0x0, a65q0 = a65q0['slice'](0x0, -0x1));case lqorx07:
            b0qa65 === lqorx07 && (a65q0 = xo8im), b0qa65 == la560qb ? (ksnje['warning']('attribute "' + a65q0 + '" missed quot(")!!'), pz94d['add'](xo8im, a65q0['replace'](/&#?\w+;/g, b56a0), n4jd)) : ('http://www.w3.org/1999/xhtml' === x8imo[''] && a65q0['match'](/^(?:disabled|checked|selected)$/i) || ksnje['warning']('attribute "' + a65q0 + '" missed value!! "' + a65q0 + '" instead!!'), pz94d['add'](a65q0, a65q0, n4jd));break;case ln_jpse:
            throw new Error('attribute value missed!!');}return bvqa;case '\u0080':
        wf19lu = '\x20';default:
        if ('\x20' >= wf19lu) switch (b0qa65) {case lu4dc9:
            pz94d['setTagName'](bva62['slice'](n4jd, bvqa)), b0qa65 = lrio8xm;break;case l_$kvs2:
            xo8im = bva62['slice'](n4jd, bvqa), b0qa65 = lqorx07;break;case la560qb:
            var a65q0 = bva62['slice'](n4jd, bvqa)['replace'](/&#?\w+;/g, b56a0);ksnje['warning']('attribute "' + a65q0 + '" missed quot(")!!'), pz94d['add'](xo8im, a65q0, n4jd);case liymr8:
            b0qa65 = lrio8xm;} else switch (b0qa65) {case lqorx07:
            {
              pz94d['tagName'];
            }'http://www.w3.org/1999/xhtml' === x8imo[''] && xo8im['match'](/^(?:disabled|checked|selected)$/i) || ksnje['warning']('attribute "' + xo8im + '" missed value!! "' + xo8im + '" instead2!!'), pz94d['add'](xo8im, xo8im, n4jd), n4jd = bvqa, b0qa65 = l_$kvs2;break;case liymr8:
            ksnje['warning']('attribute space is required"' + xo8im + '\x22!!');case lrio8xm:
            b0qa65 = l_$kvs2, n4jd = bvqa;break;case ln_jpse:
            b0qa65 = la560qb, n4jd = bvqa;break;case lm8i3gy:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bvqa++;
  }
}function lk_njes(b2a6$, zd4ncp, $_ksv2) {
  for (var mtgiy = b2a6$['tagName'], _v$b = null, cpn = b2a6$['length']; cpn--;) {
    var p4jed = b2a6$[cpn],
        _$kb2 = p4jed['qName'],
        k$_v2b = p4jed['value'],
        a70q5 = _$kb2['indexOf'](':');if (a70q5 > 0x0) var u49z = p4jed['prefix'] = _$kb2['slice'](0x0, a70q5),
        dsep = _$kb2['slice'](a70q5 + 0x1),
        cuz9w = 'xmlns' === u49z && dsep;else dsep = _$kb2, u49z = null, cuz9w = 'xmlns' === _$kb2 && '';p4jed['localName'] = dsep, cuz9w !== !0x1 && (null == _v$b && (_v$b = {}, lw1fz9u($_ksv2, $_ksv2 = {})), $_ksv2[cuz9w] = _v$b[cuz9w] = k$_v2b, p4jed['uri'] = 'http://www.w3.org/2000/xmlns/', zd4ncp['startPrefixMapping'](cuz9w, k$_v2b));
  }for (var cpn = b2a6$['length']; cpn--;) {
    p4jed = b2a6$[cpn];var u49z = p4jed['prefix'];u49z && ('xml' === u49z && (p4jed['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== u49z && (p4jed['uri'] = $_ksv2[u49z || '']));
  }var a70q5 = mtgiy['indexOf'](':');a70q5 > 0x0 ? (u49z = b2a6$['prefix'] = mtgiy['slice'](0x0, a70q5), dsep = b2a6$['localName'] = mtgiy['slice'](a70q5 + 0x1)) : (u49z = null, dsep = b2a6$['localName'] = mtgiy);var s_k$v2 = b2a6$['uri'] = $_ksv2[u49z || ''];if (zd4ncp['startElement'](s_k$v2, dsep, mtgiy, b2a6$), !b2a6$['closed']) return b2a6$['currentNSMap'] = $_ksv2, b2a6$['localNSMap'] = _v$b, !0x0;if (zd4ncp['endElement'](s_k$v2, dsep, mtgiy), _v$b) {
    for (u49z in _v$b) zd4ncp['endPrefixMapping'](u49z);
  }
}function lav562(j4pdnc, k$jse, vk26b, ab$2v, ixo) {
  if (/^(?:script|textarea)$/i['test'](vk26b)) {
    var ao70q = j4pdnc['indexOf']('</' + vk26b + '>', k$jse),
        q567 = j4pdnc['substring'](k$jse + 0x1, ao70q);if (/[&<]/['test'](q567)) return (/^script$/i['test'](vk26b) ? (ixo['characters'](q567, 0x0, q567['length']), ao70q) : (q567 = q567['replace'](/&#?\w+;/g, ab$2v), ixo['characters'](q567, 0x0, q567['length']), ao70q)
    );
  }return k$jse + 0x1;
}function lfz9w(m3iry8, sep_j, b5aq06, pne4) {
  var wu1l9f = pne4[b5aq06];return null == wu1l9f && (wu1l9f = m3iry8['lastIndexOf']('</' + b5aq06 + '>'), sep_j > wu1l9f && (wu1l9f = m3iry8['lastIndexOf']('</' + b5aq06)), pne4[b5aq06] = wu1l9f), sep_j > wu1l9f;
}function lw1fz9u(x8mr, pe4ndj) {
  for (var u1wf9z in x8mr) pe4ndj[u1wf9z] = x8mr[u1wf9z];
}function llf9wu(oximr8, fuwzc9, oxr078, f9wlu) {
  var p4zdc = oximr8['charAt'](fuwzc9 + 0x2);switch (p4zdc) {case '-':
      if ('-' === oximr8['charAt'](fuwzc9 + 0x3)) {
        var ned4pj = oximr8['indexOf']('-->', fuwzc9 + 0x4);return ned4pj > fuwzc9 ? (oxr078['comment'](oximr8, fuwzc9 + 0x4, ned4pj - fuwzc9 - 0x4), ned4pj + 0x3) : (f9wlu['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == oximr8['substr'](fuwzc9 + 0x3, 0x6)) {
        var ned4pj = oximr8['indexOf'](']]>', fuwzc9 + 0x9);return oxr078['startCDATA'](), oxr078['characters'](oximr8, fuwzc9 + 0x9, ned4pj - fuwzc9 - 0x9), oxr078['endCDATA'](), ned4pj + 0x3;
      }var njk = lendj4p(oximr8, fuwzc9),
          c94zuw = njk['length'];if (c94zuw > 0x1 && /!doctype/i['test'](njk[0x0][0x0])) {
        var x087o = njk[0x1][0x0],
            kjs_$ = c94zuw > 0x3 && /^public$/i['test'](njk[0x2][0x0]) && njk[0x3][0x0],
            wz94uc = c94zuw > 0x4 && njk[0x4][0x0],
            gtiym3 = njk[c94zuw - 0x1];return oxr078['startDTD'](x087o, kjs_$ && kjs_$['replace'](/^(['"])(.*?)\1$/, '$2'), wz94uc && wz94uc['replace'](/^(['"])(.*?)\1$/, '$2')), oxr078['endDTD'](), gtiym3['index'] + gtiym3[0x0]['length'];
      }}return -0x1;
}function lpdzc94(j4end, z4dp9c, nj4cdp) {
  var _se$kj = j4end['indexOf']('?>', z4dp9c);if (_se$kj) {
    var $vk6 = j4end['substring'](z4dp9c, _se$kj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($vk6) {
      {
        $vk6[0x0]['length'];
      }return nj4cdp['processingInstruction']($vk6[0x1], $vk6[0x2]), _se$kj + 0x2;
    }return -0x1;
  }return -0x1;
}function lxro78() {}function lk2$vb6(kv$62b, p9dcz) {
  return kv$62b['__proto__'] = p9dcz, kv$62b;
}function lendj4p(r0x78o, b0a5q6) {
  var img3ty,
      _jsen = [],
      dcnp4j = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dcnp4j['lastIndex'] = b0a5q6, dcnp4j['exec'](r0x78o); img3ty = dcnp4j['exec'](r0x78o);) if (_jsen['push'](img3ty), img3ty[0x1]) return _jsen;
}var lb5 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    lk_se$2 = new RegExp('[\\-\\.0-9' + lb5['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    lo0q57x = new RegExp('^' + lb5['source'] + lk_se$2['source'] + '*(?::' + lb5['source'] + lk_se$2['source'] + '*)?$'),
    lu4dc9 = 0x0,
    l_$kvs2 = 0x1,
    lqorx07 = 0x2,
    ln_jpse = 0x3,
    la560qb = 0x4,
    liymr8 = 0x5,
    lrio8xm = 0x6,
    lm8i3gy = 0x7;ljsek$['prototype'] = { 'parse': function (ymr3, pjdsn, dpen) {
    var vb$26a = this['domBuilder'];vb$26a['startDocument'](), lw1fz9u(pjdsn, pjdsn = {}), l_$kvb(ymr3, pjdsn, dpen, vb$26a, this['errorHandler']), vb$26a['endDocument']();
  } }, lxro78['prototype'] = { 'setTagName': function (jpn4c) {
    if (!lo0q57x['test'](jpn4c)) throw new Error('invalid tagName:' + jpn4c);this['tagName'] = jpn4c;
  }, 'add': function (k$_e2s, j_eskn, mrixo8) {
    if (!lo0q57x['test'](k$_e2s)) throw new Error('invalid attribute:' + k$_e2s);this[this['length']++] = { 'qName': k$_e2s, 'value': j_eskn, 'offset': mrixo8 };
  }, 'length': 0x0, 'getLocalName': function (js$ke) {
    return this[js$ke]['localName'];
  }, 'getLocator': function (q5067) {
    return this[q5067]['locator'];
  }, 'getQName': function (nsedjp) {
    return this[nsedjp]['qName'];
  }, 'getURI': function (_jks) {
    return this[_jks]['uri'];
  }, 'getValue': function (dcpzn) {
    return this[dcpzn]['value'];
  } }, lk2$vb6({}, lk2$vb6['prototype']) instanceof lk2$vb6 || (lk2$vb6 = function (n4pcj, cu9) {
  function mgi83y() {}mgi83y['prototype'] = cu9, mgi83y = new mgi83y();for (cu9 in n4pcj) mgi83y[cu9] = n4pcj[cu9];return mgi83y;
}), exports['XMLReader'] = ljsek$;