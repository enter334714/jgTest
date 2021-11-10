var M = wx.$T;
function tn8513() {}function td$(i92ct, vi$dp9, ng3r, n63581, bkjg) {
  function saub(jbrnga) {
    if (jbrnga > 0xffff) {
      jbrnga -= 0x10000;var ksaujb = 0xd800 + (jbrnga >> 0xa),
          pzv$f = 0xdc00 + (0x3ff & jbrnga);return String['fromCharCode'](ksaujb, pzv$f);
    }return String['fromCharCode'](jbrnga);
  }function sjb(bnjgr3) {
    var id9p = bnjgr3['slice'](0x1, -0x1);return id9p in ng3r ? ng3r[id9p] : '#' === id9p['charAt'](0x0) ? saub(parseInt(id9p['substr'](0x1)['replace']('x', '0x'))) : (bkjg['error']('entity not found:' + bnjgr3), bnjgr3);
  }function kbjrga(w_yhmx) {
    if (w_yhmx > dpz7$) {
      var qxeoy0 = i92ct['substring'](dpz7$, w_yhmx)['replace'](/&#?\w+;/g, sjb);t2i94 && h865w1(dpz7$), n63581['characters'](qxeoy0, 0x0, w_yhmx - dpz7$), dpz7$ = w_yhmx;
    }
  }function h865w1(karjsb, _mq0xy) {
    for (; karjsb >= v9t2i && (_mq0xy = gnr831['exec'](i92ct));) ajnbr = _mq0xy['index'], v9t2i = ajnbr + _mq0xy[0x0]['length'], t2i94['lineNumber']++;t2i94['columnNumber'] = karjsb - ajnbr + 0x1;
  }for (var ajnbr = 0x0, v9t2i = 0x0, gnr831 = /.*(?:\r\n?|\n)|.*$/g, t2i94 = n63581['locator'], tc2i9v = [{ 'currentNSMap': vi$dp9 }], fep7 = {}, dpz7$ = 0x0;;) {
    try {
      var pdf7z = i92ct['indexOf']('<', dpz7$);if (0x0 > pdf7z) {
        if (!i92ct['substr'](dpz7$)['match'](/^\s*$/)) {
          var jrnag = n63581['doc'],
              f$dp7z = jrnag['createTextNode'](i92ct['substr'](dpz7$));jrnag['appendChild'](f$dp7z), n63581['currentElement'] = f$dp7z;
        }return;
      }switch (pdf7z > dpz7$ && kbjrga(pdf7z), i92ct['charAt'](pdf7z + 0x1)) {case '/':
          var it2c9 = i92ct['indexOf']('>', pdf7z + 0x3),
              ci4t29 = i92ct['substring'](pdf7z + 0x2, it2c9),
              w_ = tc2i9v['pop']();0x0 > it2c9 ? (ci4t29 = i92ct['substring'](pdf7z + 0x2)['replace'](/[\s<].*/, ''), bkjg['error']('end tag name: ' + ci4t29 + ' is not complete:' + w_['tagName']), it2c9 = pdf7z + 0x1 + ci4t29['length']) : ci4t29['match'](/\s</) && (ci4t29 = ci4t29['replace'](/[\s<].*/, ''), bkjg['error']('end tag name: ' + ci4t29 + ' maybe not complete'), it2c9 = pdf7z + 0x1 + ci4t29['length']);var qo7fz = w_['localNSMap'],
              h56m_ = w_['tagName'] == ci4t29,
              z7peof = h56m_ || w_['tagName'] && w_['tagName']['toLowerCase']() == ci4t29['toLowerCase']();if (z7peof) {
            if (n63581['endElement'](w_['uri'], w_['localName'], ci4t29), qo7fz) {
              for (var f7oez in qo7fz) n63581['endPrefixMapping'](f7oez);
            }h56m_ || bkjg['fatalError']('end tag name: ' + ci4t29 + ' is not match the current start tagName:' + w_['tagName']);
          } else tc2i9v['push'](w_);it2c9++;break;case '?':
          t2i94 && h865w1(pdf7z), it2c9 = tbsk(i92ct, pdf7z, n63581);break;case '!':
          t2i94 && h865w1(pdf7z), it2c9 = ti24ct9(i92ct, pdf7z, n63581, bkjg);break;default:
          t2i94 && h865w1(pdf7z);var _m0q = new tozpfd(),
              z$f7p = tc2i9v[tc2i9v['length'] - 0x1]['currentNSMap'],
              it2c9 = tx_m0yh(i92ct, pdf7z, _m0q, z$f7p, sjb, bkjg),
              _q0xye = _m0q['length'];if (!_m0q['closed'] && tuaksbj(i92ct, it2c9, _m0q['tagName'], fep7) && (_m0q['closed'] = !0x0, ng3r['nbsp'] || bkjg['warning']('unclosed xml attribute')), t2i94 && _q0xye) {
            for (var jbn = tajbsu(t2i94, {}), w_m56 = 0x0; _q0xye > w_m56; w_m56++) {
              var qze70o = _m0q[w_m56];h865w1(qze70o['offset']), qze70o['locator'] = tajbsu(t2i94, {});
            }n63581['locator'] = jbn, tmyq0x_(_m0q, n63581, z$f7p) && tc2i9v['push'](_m0q), n63581['locator'] = t2i94;
          } else tmyq0x_(_m0q, n63581, z$f7p) && tc2i9v['push'](_m0q);'http://www.w3.org/1999/xhtml' !== _m0q['uri'] || _m0q['closed'] ? it2c9++ : it2c9 = tjusba(i92ct, it2c9, _m0q['tagName'], sjb, n63581);}
    } catch (e07z) {
      bkjg['error']('element parse error: ' + e07z), it2c9 = -0x1;
    }it2c9 > dpz7$ ? dpz7$ = it2c9 : kbjrga(Math['max'](pdf7z, dpz7$) + 0x1);
  }
}function tajbsu(pf$7d, yeqo0) {
  return yeqo0['lineNumber'] = pf$7d['lineNumber'], yeqo0['columnNumber'] = pf$7d['columnNumber'], yeqo0;
}function tx_m0yh(qmyx_0, mwy_xh, brng3, $9vd, mw_hx, t9c2v) {
  for (var fz$pd7, myhw5, odfz7p = ++mwy_xh, nagjrb = tfeoqz7;;) {
    var dpf$zv = qmyx_0['charAt'](odfz7p);switch (dpf$zv) {case '=':
        if (nagjrb === teyqo) fz$pd7 = qmyx_0['slice'](mwy_xh, odfz7p), nagjrb = tctvi2;else {
          if (nagjrb !== tq0eoz) throw new Error('attribute equal must after attrName');nagjrb = tctvi2;
        }break;case '\x27':case '\x22':
        if (nagjrb === tctvi2 || nagjrb === teyqo) {
          if (nagjrb === teyqo && (t9c2v['warning']('attribute value must after "="'), fz$pd7 = qmyx_0['slice'](mwy_xh, odfz7p)), mwy_xh = odfz7p + 0x1, odfz7p = qmyx_0['indexOf'](dpf$zv, mwy_xh), !(odfz7p > 0x0)) throw new Error('attribute value no end \'' + dpf$zv + '\' match');myhw5 = qmyx_0['slice'](mwy_xh, odfz7p)['replace'](/&#?\w+;/g, mw_hx), brng3['add'](fz$pd7, myhw5, mwy_xh - 0x1), nagjrb = t_0e;
        } else {
          if (nagjrb != tjb3gr) throw new Error('attribute value must after "="');myhw5 = qmyx_0['slice'](mwy_xh, odfz7p)['replace'](/&#?\w+;/g, mw_hx), brng3['add'](fz$pd7, myhw5, mwy_xh), t9c2v['warning']('attribute "' + fz$pd7 + '" missed start quot(' + dpf$zv + ')!!'), mwy_xh = odfz7p + 0x1, nagjrb = t_0e;
        }break;case '/':
        switch (nagjrb) {case tfeoqz7:
            brng3['setTagName'](qmyx_0['slice'](mwy_xh, odfz7p));case t_0e:case tgbjarn:case t$dpiv:
            nagjrb = t$dpiv, brng3['closed'] = !0x0;case tjb3gr:case teyqo:case tq0eoz:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return t9c2v['error']('unexpected end of input'), nagjrb == tfeoqz7 && brng3['setTagName'](qmyx_0['slice'](mwy_xh, odfz7p)), odfz7p;case '>':
        switch (nagjrb) {case tfeoqz7:
            brng3['setTagName'](qmyx_0['slice'](mwy_xh, odfz7p));case t_0e:case tgbjarn:case t$dpiv:
            break;case tjb3gr:case teyqo:
            myhw5 = qmyx_0['slice'](mwy_xh, odfz7p), '/' === myhw5['slice'](-0x1) && (brng3['closed'] = !0x0, myhw5 = myhw5['slice'](0x0, -0x1));case tq0eoz:
            nagjrb === tq0eoz && (myhw5 = fz$pd7), nagjrb == tjb3gr ? (t9c2v['warning']('attribute "' + myhw5 + '" missed quot(")!!'), brng3['add'](fz$pd7, myhw5['replace'](/&#?\w+;/g, mw_hx), mwy_xh)) : ('http://www.w3.org/1999/xhtml' === $9vd[''] && myhw5['match'](/^(?:disabled|checked|selected)$/i) || t9c2v['warning']('attribute "' + myhw5 + '" missed value!! "' + myhw5 + '" instead!!'), brng3['add'](myhw5, myhw5, mwy_xh));break;case tctvi2:
            throw new Error('attribute value missed!!');}return odfz7p;case '\u0080':
        dpf$zv = '\x20';default:
        if ('\x20' >= dpf$zv) switch (nagjrb) {case tfeoqz7:
            brng3['setTagName'](qmyx_0['slice'](mwy_xh, odfz7p)), nagjrb = tgbjarn;break;case teyqo:
            fz$pd7 = qmyx_0['slice'](mwy_xh, odfz7p), nagjrb = tq0eoz;break;case tjb3gr:
            var myhw5 = qmyx_0['slice'](mwy_xh, odfz7p)['replace'](/&#?\w+;/g, mw_hx);t9c2v['warning']('attribute "' + myhw5 + '" missed quot(")!!'), brng3['add'](fz$pd7, myhw5, mwy_xh);case t_0e:
            nagjrb = tgbjarn;} else switch (nagjrb) {case tq0eoz:
            {
              brng3['tagName'];
            }'http://www.w3.org/1999/xhtml' === $9vd[''] && fz$pd7['match'](/^(?:disabled|checked|selected)$/i) || t9c2v['warning']('attribute "' + fz$pd7 + '" missed value!! "' + fz$pd7 + '" instead2!!'), brng3['add'](fz$pd7, fz$pd7, mwy_xh), mwy_xh = odfz7p, nagjrb = teyqo;break;case t_0e:
            t9c2v['warning']('attribute space is required"' + fz$pd7 + '\x22!!');case tgbjarn:
            nagjrb = teyqo, mwy_xh = odfz7p;break;case tctvi2:
            nagjrb = tjb3gr, mwy_xh = odfz7p;break;case t$dpiv:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}odfz7p++;
  }
}function tmyq0x_(dzvpf, g6n38, bju) {
  for (var v9t2ic = dzvpf['tagName'], q0e7xo = null, t9vic = dzvpf['length']; t9vic--;) {
    var $pvd9f = dzvpf[t9vic],
        f7pzoe = $pvd9f['qName'],
        rbnj3 = $pvd9f['value'],
        e_yx = f7pzoe['indexOf'](':');if (e_yx > 0x0) var h5mw_6 = $pvd9f['prefix'] = f7pzoe['slice'](0x0, e_yx),
        w6m51h = f7pzoe['slice'](e_yx + 0x1),
        cdvi = 'xmlns' === h5mw_6 && w6m51h;else w6m51h = f7pzoe, h5mw_6 = null, cdvi = 'xmlns' === f7pzoe && '';$pvd9f['localName'] = w6m51h, cdvi !== !0x1 && (null == q0e7xo && (q0e7xo = {}, tbkujsa(bju, bju = {})), bju[cdvi] = q0e7xo[cdvi] = rbnj3, $pvd9f['uri'] = 'http://www.w3.org/2000/xmlns/', g6n38['startPrefixMapping'](cdvi, rbnj3));
  }for (var t9vic = dzvpf['length']; t9vic--;) {
    $pvd9f = dzvpf[t9vic];var h5mw_6 = $pvd9f['prefix'];h5mw_6 && ('xml' === h5mw_6 && ($pvd9f['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== h5mw_6 && ($pvd9f['uri'] = bju[h5mw_6 || '']));
  }var e_yx = v9t2ic['indexOf'](':');e_yx > 0x0 ? (h5mw_6 = dzvpf['prefix'] = v9t2ic['slice'](0x0, e_yx), w6m51h = dzvpf['localName'] = v9t2ic['slice'](e_yx + 0x1)) : (h5mw_6 = null, w6m51h = dzvpf['localName'] = v9t2ic);var vp$9i = dzvpf['uri'] = bju[h5mw_6 || ''];if (g6n38['startElement'](vp$9i, w6m51h, v9t2ic, dzvpf), !dzvpf['closed']) return dzvpf['currentNSMap'] = bju, dzvpf['localNSMap'] = q0e7xo, !0x0;if (g6n38['endElement'](vp$9i, w6m51h, v9t2ic), q0e7xo) {
    for (h5mw_6 in q0e7xo) g6n38['endPrefixMapping'](h5mw_6);
  }
}function tjusba(wh65m_, tv9$c, vfpzd, hmy0_, r83n1) {
  if (/^(?:script|textarea)$/i['test'](vfpzd)) {
    var _h5m = wh65m_['indexOf']('</' + vfpzd + '>', tv9$c),
        o0qex = wh65m_['substring'](tv9$c + 0x1, _h5m);if (/[&<]/['test'](o0qex)) return (/^script$/i['test'](vfpzd) ? (r83n1['characters'](o0qex, 0x0, o0qex['length']), _h5m) : (o0qex = o0qex['replace'](/&#?\w+;/g, hmy0_), r83n1['characters'](o0qex, 0x0, o0qex['length']), _h5m)
    );
  }return tv9$c + 0x1;
}function tuaksbj(pf7zdo, mx_yh0, opf7z, bkrs) {
  var _xqe0y = bkrs[opf7z];return null == _xqe0y && (_xqe0y = pf7zdo['lastIndexOf']('</' + opf7z + '>'), mx_yh0 > _xqe0y && (_xqe0y = pf7zdo['lastIndexOf']('</' + opf7z)), bkrs[opf7z] = _xqe0y), mx_yh0 > _xqe0y;
}function tbkujsa(jgnr3b, bjrg3) {
  for (var z7odp in jgnr3b) bjrg3[z7odp] = jgnr3b[z7odp];
}function ti24ct9(c9$iv, w5h6m1, ajkrsb, cv92t) {
  var ti9vc = c9$iv['charAt'](w5h6m1 + 0x2);switch (ti9vc) {case '-':
      if ('-' === c9$iv['charAt'](w5h6m1 + 0x3)) {
        var xyh_ = c9$iv['indexOf']('-->', w5h6m1 + 0x4);return xyh_ > w5h6m1 ? (ajkrsb['comment'](c9$iv, w5h6m1 + 0x4, xyh_ - w5h6m1 - 0x4), xyh_ + 0x3) : (cv92t['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == c9$iv['substr'](w5h6m1 + 0x3, 0x6)) {
        var xyh_ = c9$iv['indexOf'](']]>', w5h6m1 + 0x9);return ajkrsb['startCDATA'](), ajkrsb['characters'](c9$iv, w5h6m1 + 0x9, xyh_ - w5h6m1 - 0x9), ajkrsb['endCDATA'](), xyh_ + 0x3;
      }var _hmxw = tw56381(c9$iv, w5h6m1),
          jbrk = _hmxw['length'];if (jbrk > 0x1 && /!doctype/i['test'](_hmxw[0x0][0x0])) {
        var l24ic = _hmxw[0x1][0x0],
            $vi9d = jbrk > 0x3 && /^public$/i['test'](_hmxw[0x2][0x0]) && _hmxw[0x3][0x0],
            dicv$ = jbrk > 0x4 && _hmxw[0x4][0x0],
            feqz7o = _hmxw[jbrk - 0x1];return ajkrsb['startDTD'](l24ic, $vi9d && $vi9d['replace'](/^(['"])(.*?)\1$/, '$2'), dicv$ && dicv$['replace'](/^(['"])(.*?)\1$/, '$2')), ajkrsb['endDTD'](), feqz7o['index'] + feqz7o[0x0]['length'];
      }}return -0x1;
}function tbsk(suba, w865h, vtc9$i) {
  var w8h165 = suba['indexOf']('?>', w865h);if (w8h165) {
    var hm0xy = suba['substring'](w865h, w8h165)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hm0xy) {
      {
        hm0xy[0x0]['length'];
      }return vtc9$i['processingInstruction'](hm0xy[0x1], hm0xy[0x2]), w8h165 + 0x2;
    }return -0x1;
  }return -0x1;
}function tozpfd() {}function todpzf7(ksjarb, rgjbn) {
  return ksjarb['__proto__'] = rgjbn, ksjarb;
}function tw56381(d9i$cv, zpf7$) {
  var qxe_0y,
      y_m0h = [],
      d$pzvf = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (d$pzvf['lastIndex'] = zpf7$, d$pzvf['exec'](d9i$cv); qxe_0y = d$pzvf['exec'](d9i$cv);) if (y_m0h['push'](qxe_0y), qxe_0y[0x1]) return y_m0h;
}var tr83n = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tq0_ = new RegExp('[\\-\\.0-9' + tr83n['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tg1rn8 = new RegExp('^' + tr83n['source'] + tq0_['source'] + '*(?::' + tr83n['source'] + tq0_['source'] + '*)?$'),
    tfeoqz7 = 0x0,
    teyqo = 0x1,
    tq0eoz = 0x2,
    tctvi2 = 0x3,
    tjb3gr = 0x4,
    t_0e = 0x5,
    tgbjarn = 0x6,
    t$dpiv = 0x7;tn8513['prototype'] = { 'parse': function (eqz7, ezf7oq, _mxy) {
    var bskjau = this['domBuilder'];bskjau['startDocument'](), tbkujsa(ezf7oq, ezf7oq = {}), td$(eqz7, ezf7oq, _mxy, bskjau, this['errorHandler']), bskjau['endDocument']();
  } }, tozpfd['prototype'] = { 'setTagName': function (ze7pfo) {
    if (!tg1rn8['test'](ze7pfo)) throw new Error('invalid tagName:' + ze7pfo);this['tagName'] = ze7pfo;
  }, 'add': function (_6w5m, oepz, $fpdz) {
    if (!tg1rn8['test'](_6w5m)) throw new Error('invalid attribute:' + _6w5m);this[this['length']++] = { 'qName': _6w5m, 'value': oepz, 'offset': $fpdz };
  }, 'length': 0x0, 'getLocalName': function (bajrks) {
    return this[bajrks]['localName'];
  }, 'getLocator': function (w8563) {
    return this[w8563]['locator'];
  }, 'getQName': function (poefz) {
    return this[poefz]['qName'];
  }, 'getURI': function (t42lci) {
    return this[t42lci]['uri'];
  }, 'getValue': function (o0exqy) {
    return this[o0exqy]['value'];
  } }, todpzf7({}, todpzf7['prototype']) instanceof todpzf7 || (todpzf7 = function (hxw_my, q7oz0) {
  function gnjrba() {}gnjrba['prototype'] = q7oz0, gnjrba = new gnjrba();for (q7oz0 in hxw_my) gnjrba[q7oz0] = hxw_my[q7oz0];return gnjrba;
}), exports['XMLReader'] = tn8513;