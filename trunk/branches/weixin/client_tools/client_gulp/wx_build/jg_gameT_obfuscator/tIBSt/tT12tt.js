var M = wx.$T;
function ti9dp$() {}function tm0hy_(vc$di, cv9$ti, yoeq, skabj, $fzvdp) {
  function d9v$pi(nrgba) {
    if (nrgba > 0xffff) {
      nrgba -= 0x10000;var ajkbr = 0xd800 + (nrgba >> 0xa),
          f$7 = 0xdc00 + (0x3ff & nrgba);return String['fromCharCode'](ajkbr, f$7);
    }return String['fromCharCode'](nrgba);
  }function mwhy_(zopdf7) {
    var o07exq = zopdf7['slice'](0x1, -0x1);return o07exq in yoeq ? yoeq[o07exq] : '#' === o07exq['charAt'](0x0) ? d9v$pi(parseInt(o07exq['substr'](0x1)['replace']('x', '0x'))) : ($fzvdp['error']('entity not found:' + zopdf7), zopdf7);
  }function x0_yqm(vzp$df) {
    if (vzp$df > ksbua) {
      var z7ofq = vc$di['substring'](ksbua, vzp$df)['replace'](/&#?\w+;/g, mwhy_);skrbaj && m65hw(ksbua), skabj['characters'](z7ofq, 0x0, vzp$df - ksbua), ksbua = vzp$df;
    }
  }function m65hw(cit2l4, c429i) {
    for (; cit2l4 >= rajgb && (c429i = abks['exec'](vc$di));) pi = c429i['index'], rajgb = pi + c429i[0x0]['length'], skrbaj['lineNumber']++;skrbaj['columnNumber'] = cit2l4 - pi + 0x1;
  }for (var pi = 0x0, rajgb = 0x0, abks = /.*(?:\r\n?|\n)|.*$/g, skrbaj = skabj['locator'], hx0m = [{ 'currentNSMap': cv9$ti }], f$zpd = {}, ksbua = 0x0;;) {
    try {
      var df7$pz = vc$di['indexOf']('<', ksbua);if (0x0 > df7$pz) {
        if (!vc$di['substr'](ksbua)['match'](/^\s*$/)) {
          var y_0xe = skabj['doc'],
              df7z$p = y_0xe['createTextNode'](vc$di['substr'](ksbua));y_0xe['appendChild'](df7z$p), skabj['currentElement'] = df7z$p;
        }return;
      }switch (df7$pz > ksbua && x0_yqm(df7$pz), vc$di['charAt'](df7$pz + 0x1)) {case '/':
          var p$9dvf = vc$di['indexOf']('>', df7$pz + 0x3),
              jng3 = vc$di['substring'](df7$pz + 0x2, p$9dvf),
              srja = hx0m['pop']();0x0 > p$9dvf ? (jng3 = vc$di['substring'](df7$pz + 0x2)['replace'](/[\s<].*/, ''), $fzvdp['error']('end tag name: ' + jng3 + ' is not complete:' + srja['tagName']), p$9dvf = df7$pz + 0x1 + jng3['length']) : jng3['match'](/\s</) && (jng3 = jng3['replace'](/[\s<].*/, ''), $fzvdp['error']('end tag name: ' + jng3 + ' maybe not complete'), p$9dvf = df7$pz + 0x1 + jng3['length']);var vc = srja['localNSMap'],
              oy0qx = srja['tagName'] == jng3,
              eyq = oy0qx || srja['tagName'] && srja['tagName']['toLowerCase']() == jng3['toLowerCase']();if (eyq) {
            if (skabj['endElement'](srja['uri'], srja['localName'], jng3), vc) {
              for (var fpoez in vc) skabj['endPrefixMapping'](fpoez);
            }oy0qx || $fzvdp['fatalError']('end tag name: ' + jng3 + ' is not match the current start tagName:' + srja['tagName']);
          } else hx0m['push'](srja);p$9dvf++;break;case '?':
          skrbaj && m65hw(df7$pz), p$9dvf = teqyxo(vc$di, df7$pz, skabj);break;case '!':
          skrbaj && m65hw(df7$pz), p$9dvf = tqz7oe0(vc$di, df7$pz, skabj, $fzvdp);break;default:
          skrbaj && m65hw(df7$pz);var w1h6m5 = new thm6_w(),
              jsabuk = hx0m[hx0m['length'] - 0x1]['currentNSMap'],
              p$9dvf = tx_y0q(vc$di, df7$pz, w1h6m5, jsabuk, mwhy_, $fzvdp),
              e70xoq = w1h6m5['length'];if (!w1h6m5['closed'] && trng381(vc$di, p$9dvf, w1h6m5['tagName'], f$zpd) && (w1h6m5['closed'] = !0x0, yoeq['nbsp'] || $fzvdp['warning']('unclosed xml attribute')), skrbaj && e70xoq) {
            for (var zfeq7 = tfzod(skrbaj, {}), vc$9ti = 0x0; e70xoq > vc$9ti; vc$9ti++) {
              var f$7zp = w1h6m5[vc$9ti];m65hw(f$7zp['offset']), f$7zp['locator'] = tfzod(skrbaj, {});
            }skabj['locator'] = zfeq7, ty0mh_(w1h6m5, skabj, jsabuk) && hx0m['push'](w1h6m5), skabj['locator'] = skrbaj;
          } else ty0mh_(w1h6m5, skabj, jsabuk) && hx0m['push'](w1h6m5);'http://www.w3.org/1999/xhtml' !== w1h6m5['uri'] || w1h6m5['closed'] ? p$9dvf++ : p$9dvf = tzf$pv(vc$di, p$9dvf, w1h6m5['tagName'], mwhy_, skabj);}
    } catch (v2t9c) {
      $fzvdp['error']('element parse error: ' + v2t9c), p$9dvf = -0x1;
    }p$9dvf > ksbua ? ksbua = p$9dvf : x0_yqm(Math['max'](df7$pz, ksbua) + 0x1);
  }
}function tfzod(bkjuas, ksbajr) {
  return ksbajr['lineNumber'] = bkjuas['lineNumber'], ksbajr['columnNumber'] = bkjuas['columnNumber'], ksbajr;
}function tx_y0q(dp9, mh5_yw, fdp7$, bgrna, pz7foe, vt9i$c) {
  for (var akjrsb, jakrsb, c9v$id = ++mh5_yw, _xqe0 = tw16m;;) {
    var y5mwh = dp9['charAt'](c9v$id);switch (y5mwh) {case '=':
        if (_xqe0 === tbaskr) akjrsb = dp9['slice'](mh5_yw, c9v$id), _xqe0 = tzop7ef;else {
          if (_xqe0 !== tv$dpzf) throw new Error('attribute equal must after attrName');_xqe0 = tzop7ef;
        }break;case '\x27':case '\x22':
        if (_xqe0 === tzop7ef || _xqe0 === tbaskr) {
          if (_xqe0 === tbaskr && (vt9i$c['warning']('attribute value must after "="'), akjrsb = dp9['slice'](mh5_yw, c9v$id)), mh5_yw = c9v$id + 0x1, c9v$id = dp9['indexOf'](y5mwh, mh5_yw), !(c9v$id > 0x0)) throw new Error('attribute value no end \'' + y5mwh + '\' match');jakrsb = dp9['slice'](mh5_yw, c9v$id)['replace'](/&#?\w+;/g, pz7foe), fdp7$['add'](akjrsb, jakrsb, mh5_yw - 0x1), _xqe0 = tjg8rn;
        } else {
          if (_xqe0 != tgjnbr) throw new Error('attribute value must after "="');jakrsb = dp9['slice'](mh5_yw, c9v$id)['replace'](/&#?\w+;/g, pz7foe), fdp7$['add'](akjrsb, jakrsb, mh5_yw), vt9i$c['warning']('attribute "' + akjrsb + '" missed start quot(' + y5mwh + ')!!'), mh5_yw = c9v$id + 0x1, _xqe0 = tjg8rn;
        }break;case '/':
        switch (_xqe0) {case tw16m:
            fdp7$['setTagName'](dp9['slice'](mh5_yw, c9v$id));case tjg8rn:case tn8g36:case tbnj:
            _xqe0 = tbnj, fdp7$['closed'] = !0x0;case tgjnbr:case tbaskr:case tv$dpzf:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return vt9i$c['error']('unexpected end of input'), _xqe0 == tw16m && fdp7$['setTagName'](dp9['slice'](mh5_yw, c9v$id)), c9v$id;case '>':
        switch (_xqe0) {case tw16m:
            fdp7$['setTagName'](dp9['slice'](mh5_yw, c9v$id));case tjg8rn:case tn8g36:case tbnj:
            break;case tgjnbr:case tbaskr:
            jakrsb = dp9['slice'](mh5_yw, c9v$id), '/' === jakrsb['slice'](-0x1) && (fdp7$['closed'] = !0x0, jakrsb = jakrsb['slice'](0x0, -0x1));case tv$dpzf:
            _xqe0 === tv$dpzf && (jakrsb = akjrsb), _xqe0 == tgjnbr ? (vt9i$c['warning']('attribute "' + jakrsb + '" missed quot(")!!'), fdp7$['add'](akjrsb, jakrsb['replace'](/&#?\w+;/g, pz7foe), mh5_yw)) : ('http://www.w3.org/1999/xhtml' === bgrna[''] && jakrsb['match'](/^(?:disabled|checked|selected)$/i) || vt9i$c['warning']('attribute "' + jakrsb + '" missed value!! "' + jakrsb + '" instead!!'), fdp7$['add'](jakrsb, jakrsb, mh5_yw));break;case tzop7ef:
            throw new Error('attribute value missed!!');}return c9v$id;case '\u0080':
        y5mwh = '\x20';default:
        if ('\x20' >= y5mwh) switch (_xqe0) {case tw16m:
            fdp7$['setTagName'](dp9['slice'](mh5_yw, c9v$id)), _xqe0 = tn8g36;break;case tbaskr:
            akjrsb = dp9['slice'](mh5_yw, c9v$id), _xqe0 = tv$dpzf;break;case tgjnbr:
            var jakrsb = dp9['slice'](mh5_yw, c9v$id)['replace'](/&#?\w+;/g, pz7foe);vt9i$c['warning']('attribute "' + jakrsb + '" missed quot(")!!'), fdp7$['add'](akjrsb, jakrsb, mh5_yw);case tjg8rn:
            _xqe0 = tn8g36;} else switch (_xqe0) {case tv$dpzf:
            {
              fdp7$['tagName'];
            }'http://www.w3.org/1999/xhtml' === bgrna[''] && akjrsb['match'](/^(?:disabled|checked|selected)$/i) || vt9i$c['warning']('attribute "' + akjrsb + '" missed value!! "' + akjrsb + '" instead2!!'), fdp7$['add'](akjrsb, akjrsb, mh5_yw), mh5_yw = c9v$id, _xqe0 = tbaskr;break;case tjg8rn:
            vt9i$c['warning']('attribute space is required"' + akjrsb + '\x22!!');case tn8g36:
            _xqe0 = tbaskr, mh5_yw = c9v$id;break;case tzop7ef:
            _xqe0 = tgjnbr, mh5_yw = c9v$id;break;case tbnj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}c9v$id++;
  }
}function ty0mh_(bksaju, y_hwmx, gkrjba) {
  for (var qy_x0m = bksaju['tagName'], mhw5 = null, zp7dfo = bksaju['length']; zp7dfo--;) {
    var bgnajr = bksaju[zp7dfo],
        oe0qz7 = bgnajr['qName'],
        d7fpo = bgnajr['value'],
        d9iv = oe0qz7['indexOf'](':');if (d9iv > 0x0) var wm56h1 = bgnajr['prefix'] = oe0qz7['slice'](0x0, d9iv),
        zeqfo7 = oe0qz7['slice'](d9iv + 0x1),
        c92vti = 'xmlns' === wm56h1 && zeqfo7;else zeqfo7 = oe0qz7, wm56h1 = null, c92vti = 'xmlns' === oe0qz7 && '';bgnajr['localName'] = zeqfo7, c92vti !== !0x1 && (null == mhw5 && (mhw5 = {}, ti$d9pv(gkrjba, gkrjba = {})), gkrjba[c92vti] = mhw5[c92vti] = d7fpo, bgnajr['uri'] = 'http://www.w3.org/2000/xmlns/', y_hwmx['startPrefixMapping'](c92vti, d7fpo));
  }for (var zp7dfo = bksaju['length']; zp7dfo--;) {
    bgnajr = bksaju[zp7dfo];var wm56h1 = bgnajr['prefix'];wm56h1 && ('xml' === wm56h1 && (bgnajr['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== wm56h1 && (bgnajr['uri'] = gkrjba[wm56h1 || '']));
  }var d9iv = qy_x0m['indexOf'](':');d9iv > 0x0 ? (wm56h1 = bksaju['prefix'] = qy_x0m['slice'](0x0, d9iv), zeqfo7 = bksaju['localName'] = qy_x0m['slice'](d9iv + 0x1)) : (wm56h1 = null, zeqfo7 = bksaju['localName'] = qy_x0m);var eyqx0o = bksaju['uri'] = gkrjba[wm56h1 || ''];if (y_hwmx['startElement'](eyqx0o, zeqfo7, qy_x0m, bksaju), !bksaju['closed']) return bksaju['currentNSMap'] = gkrjba, bksaju['localNSMap'] = mhw5, !0x0;if (y_hwmx['endElement'](eyqx0o, zeqfo7, qy_x0m), mhw5) {
    for (wm56h1 in mhw5) y_hwmx['endPrefixMapping'](wm56h1);
  }
}function tzf$pv(mw5yh, janb, yh_x0m, vfd$9p, qe0o) {
  if (/^(?:script|textarea)$/i['test'](yh_x0m)) {
    var ubsaj = mw5yh['indexOf']('</' + yh_x0m + '>', janb),
        y0eqx = mw5yh['substring'](janb + 0x1, ubsaj);if (/[&<]/['test'](y0eqx)) return (/^script$/i['test'](yh_x0m) ? (qe0o['characters'](y0eqx, 0x0, y0eqx['length']), ubsaj) : (y0eqx = y0eqx['replace'](/&#?\w+;/g, vfd$9p), qe0o['characters'](y0eqx, 0x0, y0eqx['length']), ubsaj)
    );
  }return janb + 0x1;
}function trng381(e70ox, bjus, pd$fv, eoqz) {
  var rjskab = eoqz[pd$fv];return null == rjskab && (rjskab = e70ox['lastIndexOf']('</' + pd$fv + '>'), bjus > rjskab && (rjskab = e70ox['lastIndexOf']('</' + pd$fv)), eoqz[pd$fv] = rjskab), bjus > rjskab;
}function ti$d9pv(brkgaj, d7$f) {
  for (var d9$fv in brkgaj) d7$f[d9$fv] = brkgaj[d9$fv];
}function tqz7oe0(jrgkba, m_0hx, m0xh_y, qe0yo) {
  var eqzf = jrgkba['charAt'](m_0hx + 0x2);switch (eqzf) {case '-':
      if ('-' === jrgkba['charAt'](m_0hx + 0x3)) {
        var jabk = jrgkba['indexOf']('-->', m_0hx + 0x4);return jabk > m_0hx ? (m0xh_y['comment'](jrgkba, m_0hx + 0x4, jabk - m_0hx - 0x4), jabk + 0x3) : (qe0yo['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jrgkba['substr'](m_0hx + 0x3, 0x6)) {
        var jabk = jrgkba['indexOf'](']]>', m_0hx + 0x9);return m0xh_y['startCDATA'](), m0xh_y['characters'](jrgkba, m_0hx + 0x9, jabk - m_0hx - 0x9), m0xh_y['endCDATA'](), jabk + 0x3;
      }var y0eq = tqze0(jrgkba, m_0hx),
          nbrj3g = y0eq['length'];if (nbrj3g > 0x1 && /!doctype/i['test'](y0eq[0x0][0x0])) {
        var kujab = y0eq[0x1][0x0],
            ajsub = nbrj3g > 0x3 && /^public$/i['test'](y0eq[0x2][0x0]) && y0eq[0x3][0x0],
            ajbgr = nbrj3g > 0x4 && y0eq[0x4][0x0],
            _yxwm = y0eq[nbrj3g - 0x1];return m0xh_y['startDTD'](kujab, ajsub && ajsub['replace'](/^(['"])(.*?)\1$/, '$2'), ajbgr && ajbgr['replace'](/^(['"])(.*?)\1$/, '$2')), m0xh_y['endDTD'](), _yxwm['index'] + _yxwm[0x0]['length'];
      }}return -0x1;
}function teqyxo(h51m6, lc4i2t, dpv$9i) {
  var fop7zd = h51m6['indexOf']('?>', lc4i2t);if (fop7zd) {
    var n1r8 = h51m6['substring'](lc4i2t, fop7zd)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (n1r8) {
      {
        n1r8[0x0]['length'];
      }return dpv$9i['processingInstruction'](n1r8[0x1], n1r8[0x2]), fop7zd + 0x2;
    }return -0x1;
  }return -0x1;
}function thm6_w() {}function tfpd7oz(_xey0q, qzfe7o) {
  return _xey0q['__proto__'] = qzfe7o, _xey0q;
}function tqze0(ofpze7, yxwh) {
  var oqz7ef,
      _mh0yx = [],
      f$7pzd = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (f$7pzd['lastIndex'] = yxwh, f$7pzd['exec'](ofpze7); oqz7ef = f$7pzd['exec'](ofpze7);) if (_mh0yx['push'](oqz7ef), oqz7ef[0x1]) return _mh0yx;
}var tnjb3r = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tf$p7 = new RegExp('[\\-\\.0-9' + tnjb3r['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tjkgbr = new RegExp('^' + tnjb3r['source'] + tf$p7['source'] + '*(?::' + tnjb3r['source'] + tf$p7['source'] + '*)?$'),
    tw16m = 0x0,
    tbaskr = 0x1,
    tv$dpzf = 0x2,
    tzop7ef = 0x3,
    tgjnbr = 0x4,
    tjg8rn = 0x5,
    tn8g36 = 0x6,
    tbnj = 0x7;ti9dp$['prototype'] = { 'parse': function (exo70q, w35861, _0qm) {
    var x_qmy = this['domBuilder'];x_qmy['startDocument'](), ti$d9pv(w35861, w35861 = {}), tm0hy_(exo70q, w35861, _0qm, x_qmy, this['errorHandler']), x_qmy['endDocument']();
  } }, thm6_w['prototype'] = { 'setTagName': function (n8g6) {
    if (!tjkgbr['test'](n8g6)) throw new Error('invalid tagName:' + n8g6);this['tagName'] = n8g6;
  }, 'add': function (ivc29t, ilc4, g81) {
    if (!tjkgbr['test'](ivc29t)) throw new Error('invalid attribute:' + ivc29t);this[this['length']++] = { 'qName': ivc29t, 'value': ilc4, 'offset': g81 };
  }, 'length': 0x0, 'getLocalName': function (bkrasj) {
    return this[bkrasj]['localName'];
  }, 'getLocator': function (qzo7) {
    return this[qzo7]['locator'];
  }, 'getQName': function (m0q_y) {
    return this[m0q_y]['qName'];
  }, 'getURI': function (oe07z) {
    return this[oe07z]['uri'];
  }, 'getValue': function (why_xm) {
    return this[why_xm]['value'];
  } }, tfpd7oz({}, tfpd7oz['prototype']) instanceof tfpd7oz || (tfpd7oz = function (rn8g, zofp7) {
  function b3ng() {}b3ng['prototype'] = zofp7, b3ng = new b3ng();for (zofp7 in rn8g) b3ng[zofp7] = rn8g[zofp7];return b3ng;
}), exports['XMLReader'] = ti9dp$;