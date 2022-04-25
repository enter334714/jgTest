var v = wx.$d;
function zxfadu9() {}function zp945x(ld8ufb, gt$o0, _i61, jce7n, erc7nj) {
  function h$qo0m(ywck7) {
    if (ywck7 > 0xffff) {
      ywck7 -= 0x10000;var fbd8ul = 0xd800 + (ywck7 >> 0xa),
          ap4h5q = 0xdc00 + (0x3ff & ywck7);return String['fromCharCode'](fbd8ul, ap4h5q);
    }return String['fromCharCode'](ywck7);
  }function knyw(re7cw) {
    var h45qap = re7cw['slice'](0x1, -0x1);return h45qap in _i61 ? _i61[h45qap] : '#' === h45qap['charAt'](0x0) ? h$qo0m(parseInt(h45qap['substr'](0x1)['replace']('x', '0x'))) : (erc7nj['error']('entity not found:' + re7cw), re7cw);
  }function wkycn(nrw7ce) {
    if (nrw7ce > aq4p5x) {
      var x9uld = ld8ufb['substring'](aq4p5x, nrw7ce)['replace'](/&#?\w+;/g, knyw);_zkv32 && i8fbul(aq4p5x), jce7n['characters'](x9uld, 0x0, nrw7ce - aq4p5x), aq4p5x = nrw7ce;
    }
  }function i8fbul(_bi861, ufl8) {
    for (; _bi861 >= fu9lbd && (ufl8 = dpa['exec'](ld8ufb));) vkzw3 = ufl8['index'], fu9lbd = vkzw3 + ufl8[0x0]['length'], _zkv32['lineNumber']++;_zkv32['columnNumber'] = _bi861 - vkzw3 + 0x1;
  }for (var vkzw3 = 0x0, fu9lbd = 0x0, dpa = /.*(?:\r\n?|\n)|.*$/g, _zkv32 = jce7n['locator'], adu9fx = [{ 'currentNSMap': gt$o0 }], mq04h = {}, aq4p5x = 0x0;;) {
    try {
      var pd59a = ld8ufb['indexOf']('<', aq4p5x);if (0x0 > pd59a) {
        if (!ld8ufb['substr'](aq4p5x)['match'](/^\s*$/)) {
          var n7yck = jce7n['doc'],
              kywc3 = n7yck['createTextNode'](ld8ufb['substr'](aq4p5x));n7yck['appendChild'](kywc3), jce7n['currentElement'] = kywc3;
        }return;
      }switch (pd59a > aq4p5x && wkycn(pd59a), ld8ufb['charAt'](pd59a + 0x1)) {case '/':
          var w37kc = ld8ufb['indexOf']('>', pd59a + 0x3),
              px5qa4 = ld8ufb['substring'](pd59a + 0x2, w37kc),
              a4qxp = adu9fx['pop']();0x0 > w37kc ? (px5qa4 = ld8ufb['substring'](pd59a + 0x2)['replace'](/[\s<].*/, ''), erc7nj['error']('end tag name: ' + px5qa4 + ' is not complete:' + a4qxp['tagName']), w37kc = pd59a + 0x1 + px5qa4['length']) : px5qa4['match'](/\s</) && (px5qa4 = px5qa4['replace'](/[\s<].*/, ''), erc7nj['error']('end tag name: ' + px5qa4 + ' maybe not complete'), w37kc = pd59a + 0x1 + px5qa4['length']);var i81bfl = a4qxp['localNSMap'],
              xadu9f = a4qxp['tagName'] == px5qa4,
              w3yvz = xadu9f || a4qxp['tagName'] && a4qxp['tagName']['toLowerCase']() == px5qa4['toLowerCase']();if (w3yvz) {
            if (jce7n['endElement'](a4qxp['uri'], a4qxp['localName'], px5qa4), i81bfl) {
              for (var $tm0og in i81bfl) jce7n['endPrefixMapping']($tm0og);
            }xadu9f || erc7nj['fatalError']('end tag name: ' + px5qa4 + ' is not match the current start tagName:' + a4qxp['tagName']);
          } else adu9fx['push'](a4qxp);w37kc++;break;case '?':
          _zkv32 && i8fbul(pd59a), w37kc = zi61v(ld8ufb, pd59a, jce7n);break;case '!':
          _zkv32 && i8fbul(pd59a), w37kc = zv2zk_(ld8ufb, pd59a, jce7n, erc7nj);break;default:
          _zkv32 && i8fbul(pd59a);var y3vkw = new zo$0hmq(),
              i1l8bf = adu9fx[adu9fx['length'] - 0x1]['currentNSMap'],
              w37kc = zykzwc(ld8ufb, pd59a, y3vkw, i1l8bf, knyw, erc7nj),
              moh0 = y3vkw['length'];if (!y3vkw['closed'] && zx9adp5(ld8ufb, w37kc, y3vkw['tagName'], mq04h) && (y3vkw['closed'] = !0x0, _i61['nbsp'] || erc7nj['warning']('unclosed xml attribute')), _zkv32 && moh0) {
            for (var q$ho0 = zv_i26(_zkv32, {}), h4po = 0x0; moh0 > h4po; h4po++) {
              var ce7njr = y3vkw[h4po];i8fbul(ce7njr['offset']), ce7njr['locator'] = zv_i26(_zkv32, {});
            }jce7n['locator'] = q$ho0, zhq4po(y3vkw, jce7n, i1l8bf) && adu9fx['push'](y3vkw), jce7n['locator'] = _zkv32;
          } else zhq4po(y3vkw, jce7n, i1l8bf) && adu9fx['push'](y3vkw);'http://www.w3.org/1999/xhtml' !== y3vkw['uri'] || y3vkw['closed'] ? w37kc++ : w37kc = zb8dlu(ld8ufb, w37kc, y3vkw['tagName'], knyw, jce7n);}
    } catch (z621_) {
      erc7nj['error']('element parse error: ' + z621_), w37kc = -0x1;
    }w37kc > aq4p5x ? aq4p5x = w37kc : wkycn(Math['max'](pd59a, aq4p5x) + 0x1);
  }
}function zv_i26(z12v6_, a59uxd) {
  return a59uxd['lineNumber'] = z12v6_['lineNumber'], a59uxd['columnNumber'] = z12v6_['columnNumber'], a59uxd;
}function zykzwc(b1i86_, j7ecr, q5hp4a, w3zykv, d9u5a, ky3zwc) {
  for (var k3ycwz, fbudl9, w3cyk = ++j7ecr, wy3zc = zufdax9;;) {
    var p5xa4q = b1i86_['charAt'](w3cyk);switch (p5xa4q) {case '=':
        if (wy3zc === zi2618_) k3ycwz = b1i86_['slice'](j7ecr, w3cyk), wy3zc = zilu8bf;else {
          if (wy3zc !== zvzy) throw new Error('attribute equal must after attrName');wy3zc = zilu8bf;
        }break;case '\x27':case '\x22':
        if (wy3zc === zilu8bf || wy3zc === zi2618_) {
          if (wy3zc === zi2618_ && (ky3zwc['warning']('attribute value must after "="'), k3ycwz = b1i86_['slice'](j7ecr, w3cyk)), j7ecr = w3cyk + 0x1, w3cyk = b1i86_['indexOf'](p5xa4q, j7ecr), !(w3cyk > 0x0)) throw new Error('attribute value no end \'' + p5xa4q + '\' match');fbudl9 = b1i86_['slice'](j7ecr, w3cyk)['replace'](/&#?\w+;/g, d9u5a), q5hp4a['add'](k3ycwz, fbudl9, j7ecr - 0x1), wy3zc = zqp5x4;
        } else {
          if (wy3zc != zcnrew7) throw new Error('attribute value must after "="');fbudl9 = b1i86_['slice'](j7ecr, w3cyk)['replace'](/&#?\w+;/g, d9u5a), q5hp4a['add'](k3ycwz, fbudl9, j7ecr), ky3zwc['warning']('attribute "' + k3ycwz + '" missed start quot(' + p5xa4q + ')!!'), j7ecr = w3cyk + 0x1, wy3zc = zqp5x4;
        }break;case '/':
        switch (wy3zc) {case zufdax9:
            q5hp4a['setTagName'](b1i86_['slice'](j7ecr, w3cyk));case zqp5x4:case zdaxuf:case zyw37:
            wy3zc = zyw37, q5hp4a['closed'] = !0x0;case zcnrew7:case zi2618_:case zvzy:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ky3zwc['error']('unexpected end of input'), wy3zc == zufdax9 && q5hp4a['setTagName'](b1i86_['slice'](j7ecr, w3cyk)), w3cyk;case '>':
        switch (wy3zc) {case zufdax9:
            q5hp4a['setTagName'](b1i86_['slice'](j7ecr, w3cyk));case zqp5x4:case zdaxuf:case zyw37:
            break;case zcnrew7:case zi2618_:
            fbudl9 = b1i86_['slice'](j7ecr, w3cyk), '/' === fbudl9['slice'](-0x1) && (q5hp4a['closed'] = !0x0, fbudl9 = fbudl9['slice'](0x0, -0x1));case zvzy:
            wy3zc === zvzy && (fbudl9 = k3ycwz), wy3zc == zcnrew7 ? (ky3zwc['warning']('attribute "' + fbudl9 + '" missed quot(")!!'), q5hp4a['add'](k3ycwz, fbudl9['replace'](/&#?\w+;/g, d9u5a), j7ecr)) : ('http://www.w3.org/1999/xhtml' === w3zykv[''] && fbudl9['match'](/^(?:disabled|checked|selected)$/i) || ky3zwc['warning']('attribute "' + fbudl9 + '" missed value!! "' + fbudl9 + '" instead!!'), q5hp4a['add'](fbudl9, fbudl9, j7ecr));break;case zilu8bf:
            throw new Error('attribute value missed!!');}return w3cyk;case '\u0080':
        p5xa4q = '\x20';default:
        if ('\x20' >= p5xa4q) switch (wy3zc) {case zufdax9:
            q5hp4a['setTagName'](b1i86_['slice'](j7ecr, w3cyk)), wy3zc = zdaxuf;break;case zi2618_:
            k3ycwz = b1i86_['slice'](j7ecr, w3cyk), wy3zc = zvzy;break;case zcnrew7:
            var fbudl9 = b1i86_['slice'](j7ecr, w3cyk)['replace'](/&#?\w+;/g, d9u5a);ky3zwc['warning']('attribute "' + fbudl9 + '" missed quot(")!!'), q5hp4a['add'](k3ycwz, fbudl9, j7ecr);case zqp5x4:
            wy3zc = zdaxuf;} else switch (wy3zc) {case zvzy:
            {
              q5hp4a['tagName'];
            }'http://www.w3.org/1999/xhtml' === w3zykv[''] && k3ycwz['match'](/^(?:disabled|checked|selected)$/i) || ky3zwc['warning']('attribute "' + k3ycwz + '" missed value!! "' + k3ycwz + '" instead2!!'), q5hp4a['add'](k3ycwz, k3ycwz, j7ecr), j7ecr = w3cyk, wy3zc = zi2618_;break;case zqp5x4:
            ky3zwc['warning']('attribute space is required"' + k3ycwz + '\x22!!');case zdaxuf:
            wy3zc = zi2618_, j7ecr = w3cyk;break;case zilu8bf:
            wy3zc = zcnrew7, j7ecr = w3cyk;break;case zyw37:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}w3cyk++;
  }
}function zhq4po($o0hmq, _3vzk, mogt) {
  for (var wre7nc = $o0hmq['tagName'], ncrje7 = null, i_621v = $o0hmq['length']; i_621v--;) {
    var pqa4 = $o0hmq[i_621v],
        ejr7 = pqa4['qName'],
        yzvkw3 = pqa4['value'],
        cjne7 = ejr7['indexOf'](':');if (cjne7 > 0x0) var fxu9 = pqa4['prefix'] = ejr7['slice'](0x0, cjne7),
        l81bif = ejr7['slice'](cjne7 + 0x1),
        lu8i = 'xmlns' === fxu9 && l81bif;else l81bif = ejr7, fxu9 = null, lu8i = 'xmlns' === ejr7 && '';pqa4['localName'] = l81bif, lu8i !== !0x1 && (null == ncrje7 && (ncrje7 = {}, zaqhp4(mogt, mogt = {})), mogt[lu8i] = ncrje7[lu8i] = yzvkw3, pqa4['uri'] = 'http://www.w3.org/2000/xmlns/', _3vzk['startPrefixMapping'](lu8i, yzvkw3));
  }for (var i_621v = $o0hmq['length']; i_621v--;) {
    pqa4 = $o0hmq[i_621v];var fxu9 = pqa4['prefix'];fxu9 && ('xml' === fxu9 && (pqa4['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== fxu9 && (pqa4['uri'] = mogt[fxu9 || '']));
  }var cjne7 = wre7nc['indexOf'](':');cjne7 > 0x0 ? (fxu9 = $o0hmq['prefix'] = wre7nc['slice'](0x0, cjne7), l81bif = $o0hmq['localName'] = wre7nc['slice'](cjne7 + 0x1)) : (fxu9 = null, l81bif = $o0hmq['localName'] = wre7nc);var kvz = $o0hmq['uri'] = mogt[fxu9 || ''];if (_3vzk['startElement'](kvz, l81bif, wre7nc, $o0hmq), !$o0hmq['closed']) return $o0hmq['currentNSMap'] = mogt, $o0hmq['localNSMap'] = ncrje7, !0x0;if (_3vzk['endElement'](kvz, l81bif, wre7nc), ncrje7) {
    for (fxu9 in ncrje7) _3vzk['endPrefixMapping'](fxu9);
  }
}function zb8dlu(qmho0, lbudf8, q5oph, _61i28, m0h$ot) {
  if (/^(?:script|textarea)$/i['test'](q5oph)) {
    var ud95 = qmho0['indexOf']('</' + q5oph + '>', lbudf8),
        q0$m = qmho0['substring'](lbudf8 + 0x1, ud95);if (/[&<]/['test'](q0$m)) return (/^script$/i['test'](q5oph) ? (m0h$ot['characters'](q0$m, 0x0, q0$m['length']), ud95) : (q0$m = q0$m['replace'](/&#?\w+;/g, _61i28), m0h$ot['characters'](q0$m, 0x0, q0$m['length']), ud95)
    );
  }return lbudf8 + 0x1;
}function zx9adp5(y3zwkv, ckw3zy, hm, o0mh$t) {
  var f9dxa = o0mh$t[hm];return null == f9dxa && (f9dxa = y3zwkv['lastIndexOf']('</' + hm + '>'), ckw3zy > f9dxa && (f9dxa = y3zwkv['lastIndexOf']('</' + hm)), o0mh$t[hm] = f9dxa), ckw3zy > f9dxa;
}function zaqhp4(ywk37, bi861) {
  for (var z_2kv in ywk37) bi861[z_2kv] = ywk37[z_2kv];
}function zv2zk_(y32kv, jen7r, ph4q0o, z3wkyc) {
  var udflb9 = y32kv['charAt'](jen7r + 0x2);switch (udflb9) {case '-':
      if ('-' === y32kv['charAt'](jen7r + 0x3)) {
        var f8uli = y32kv['indexOf']('-->', jen7r + 0x4);return f8uli > jen7r ? (ph4q0o['comment'](y32kv, jen7r + 0x4, f8uli - jen7r - 0x4), f8uli + 0x3) : (z3wkyc['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == y32kv['substr'](jen7r + 0x3, 0x6)) {
        var f8uli = y32kv['indexOf'](']]>', jen7r + 0x9);return ph4q0o['startCDATA'](), ph4q0o['characters'](y32kv, jen7r + 0x9, f8uli - jen7r - 0x9), ph4q0o['endCDATA'](), f8uli + 0x3;
      }var y7wnkc = zx5u(y32kv, jen7r),
          j7ecnr = y7wnkc['length'];if (j7ecnr > 0x1 && /!doctype/i['test'](y7wnkc[0x0][0x0])) {
        var l8bduf = y7wnkc[0x1][0x0],
            enc7rj = j7ecnr > 0x3 && /^public$/i['test'](y7wnkc[0x2][0x0]) && y7wnkc[0x3][0x0],
            ren7jc = j7ecnr > 0x4 && y7wnkc[0x4][0x0],
            bfil18 = y7wnkc[j7ecnr - 0x1];return ph4q0o['startDTD'](l8bduf, enc7rj && enc7rj['replace'](/^(['"])(.*?)\1$/, '$2'), ren7jc && ren7jc['replace'](/^(['"])(.*?)\1$/, '$2')), ph4q0o['endDTD'](), bfil18['index'] + bfil18[0x0]['length'];
      }}return -0x1;
}function zi61v(qh4po, d8flub, bf8ld) {
  var wrc7ne = qh4po['indexOf']('?>', d8flub);if (wrc7ne) {
    var lxfd9 = qh4po['substring'](d8flub, wrc7ne)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (lxfd9) {
      {
        lxfd9[0x0]['length'];
      }return bf8ld['processingInstruction'](lxfd9[0x1], lxfd9[0x2]), wrc7ne + 0x2;
    }return -0x1;
  }return -0x1;
}function zo$0hmq() {}function zho$0mq(x5p4, xp495a) {
  return x5p4['__proto__'] = xp495a, x5p4;
}function zx5u(kncwy7, c7kwyn) {
  var d8fblu,
      qho45p = [],
      z3vk2_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (z3vk2_['lastIndex'] = c7kwyn, z3vk2_['exec'](kncwy7); d8fblu = z3vk2_['exec'](kncwy7);) if (qho45p['push'](d8fblu), d8fblu[0x1]) return qho45p;
}var zkv_3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    z_32z = new RegExp('[\\-\\.0-9' + zkv_3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zxpqa54 = new RegExp('^' + zkv_3['source'] + z_32z['source'] + '*(?::' + zkv_3['source'] + z_32z['source'] + '*)?$'),
    zufdax9 = 0x0,
    zi2618_ = 0x1,
    zvzy = 0x2,
    zilu8bf = 0x3,
    zcnrew7 = 0x4,
    zqp5x4 = 0x5,
    zdaxuf = 0x6,
    zyw37 = 0x7;zxfadu9['prototype'] = { 'parse': function (u59da, w7y, o4qhp0) {
    var liubf8 = this['domBuilder'];liubf8['startDocument'](), zaqhp4(w7y, w7y = {}), zp945x(u59da, w7y, o4qhp0, liubf8, this['errorHandler']), liubf8['endDocument']();
  } }, zo$0hmq['prototype'] = { 'setTagName': function (ux59da) {
    if (!zxpqa54['test'](ux59da)) throw new Error('invalid tagName:' + ux59da);this['tagName'] = ux59da;
  }, 'add': function (faxu9, df8lub, y3vwkz) {
    if (!zxpqa54['test'](faxu9)) throw new Error('invalid attribute:' + faxu9);this[this['length']++] = { 'qName': faxu9, 'value': df8lub, 'offset': y3vwkz };
  }, 'length': 0x0, 'getLocalName': function (ykn7c) {
    return this[ykn7c]['localName'];
  }, 'getLocator': function (p5o4h) {
    return this[p5o4h]['locator'];
  }, 'getQName': function (z2_v) {
    return this[z2_v]['qName'];
  }, 'getURI': function (e7cjrn) {
    return this[e7cjrn]['uri'];
  }, 'getValue': function (ufbd8l) {
    return this[ufbd8l]['value'];
  } }, zho$0mq({}, zho$0mq['prototype']) instanceof zho$0mq || (zho$0mq = function (xf9udl, l8dfbu) {
  function homq0$() {}homq0$['prototype'] = l8dfbu, homq0$ = new homq0$();for (l8dfbu in xf9udl) homq0$[l8dfbu] = xf9udl[l8dfbu];return homq0$;
}), exports['XMLReader'] = zxfadu9;