var v = wx.$d;
function zy5h93() {}function zj7izd(ou5h8, ju5o8, pfyl1c, i7bzk, _2x0ga) {
  function wv4t$1(fvpl1c) {
    var t$1v = fvpl1c['slice'](0x1, -0x1);return t$1v in pfyl1c ? pfyl1c[t$1v] : '#' === t$1v['charAt'](0x0) ? 0xffff < (t$1v = parseInt(t$1v['substr'](0x1)['replace']('x', '0x'))) ? (t$1v -= 0x10000, String['fromCharCode'](0xd800 + (t$1v >> 0xa), 0xdc00 + (0x3ff & t$1v))) : String['fromCharCode'](t$1v) : (_2x0ga['error']('entity not found:' + fvpl1c), fvpl1c);
  }function bmn76(mnbq7) {
    var zij7dk;x2anmq < mnbq7 && (zij7dk = ou5h8['substring'](x2anmq, mnbq7)['replace'](/&#?\w+;/g, wv4t$1), _mx2a && amx2_0(x2anmq), i7bzk['characters'](zij7dk, 0x0, mnbq7 - x2anmq), x2anmq = mnbq7);
  }function amx2_0(zb7dik, b76kdz) {
    for (; lc93y <= zb7dik && (b76kdz = rw4e$t['exec'](ou5h8));) cl9py = b76kdz['index'], lc93y = cl9py + b76kdz[0x0]['length'], _mx2a['lineNumber']++;_mx2a['columnNumber'] = zb7dik - cl9py + 0x1;
  }for (var cl9py = 0x0, lc93y = 0x0, rw4e$t = /.*(?:\r\n?|\n)|.*$/g, _mx2a = i7bzk['locator'], et$4w = [{ 'currentNSMap': ju5o8 }], b76qnk = {}, x2anmq = 0x0;;) {
    try {
      var pcyl1 = ou5h8['indexOf']('<', x2anmq),
          vtw$e,
          b6k7n;if (pcyl1 < 0x0) return void (ou5h8['substr'](x2anmq)['match'](/^\s*$/) || (b6k7n = (vtw$e = i7bzk['doc'])['createTextNode'](ou5h8['substr'](x2anmq)), vtw$e['appendChild'](b6k7n), i7bzk['currentElement'] = b6k7n));switch (x2anmq < pcyl1 && bmn76(pcyl1), ou5h8['charAt'](pcyl1 + 0x1)) {case '/':
          var $wret4 = ou5h8['indexOf']('>', pcyl1 + 0x3),
              p1wfvc = ou5h8['substring'](pcyl1 + 0x2, $wret4),
              qxma2 = et$4w['pop']();$wret4 < 0x0 ? (p1wfvc = ou5h8['substring'](pcyl1 + 0x2)['replace'](/[\s<].*/, ''), _2x0ga['error']('end tag name: ' + p1wfvc + ' is not complete:' + qxma2['tagName']), $wret4 = pcyl1 + 0x1 + p1wfvc['length']) : p1wfvc['match'](/\s</) && (p1wfvc = p1wfvc['replace'](/[\s<].*/, ''), _2x0ga['error']('end tag name: ' + p1wfvc + ' maybe not complete'), $wret4 = pcyl1 + 0x1 + p1wfvc['length']);var b7m6n = qxma2['localNSMap'],
              $v1wt4 = qxma2['tagName'] == p1wfvc;if ($v1wt4 || qxma2['tagName'] && qxma2['tagName']['toLowerCase']() == p1wfvc['toLowerCase']()) {
            if (i7bzk['endElement'](qxma2['uri'], qxma2['localName'], p1wfvc), b7m6n) {
              for (var zuidoj in b7m6n) i7bzk['endPrefixMapping'](zuidoj);
            }$v1wt4 || _2x0ga['fatalError']('end tag name: ' + p1wfvc + ' is not match the current start tagName:' + qxma2['tagName']);
          } else et$4w['push'](qxma2);$wret4++;break;case '?':
          _mx2a && amx2_0(pcyl1), $wret4 = zh385o(ou5h8, pcyl1, i7bzk);break;case '!':
          _mx2a && amx2_0(pcyl1), $wret4 = zjuh5o8(ou5h8, pcyl1, i7bzk, _2x0ga);break;default:
          _mx2a && amx2_0(pcyl1);var oduz = new zhy83(),
              $w4ert = et$4w[et$4w['length'] - 0x1]['currentNSMap'],
              $wret4 = zy935h(ou5h8, pcyl1, oduz, $w4ert, wv4t$1, _2x0ga),
              iujoz = oduz['length'];if (!oduz['closed'] && znmq62(ou5h8, $wret4, oduz['tagName'], b76qnk) && (oduz['closed'] = !0x0, pfyl1c['nbsp'] || _2x0ga['warning']('unclosed xml attribute')), _mx2a && iujoz) {
            for (var b6k7z = zvl1pfc(_mx2a, {}), am20q = 0x0; am20q < iujoz; am20q++) {
              var t4vwf = oduz[am20q];amx2_0(t4vwf['offset']), t4vwf['locator'] = zvl1pfc(_mx2a, {});
            }i7bzk['locator'] = b6k7z, zdojizu(oduz, i7bzk, $w4ert) && et$4w['push'](oduz), i7bzk['locator'] = _mx2a;
          } else zdojizu(oduz, i7bzk, $w4ert) && et$4w['push'](oduz);'http://www.w3.org/1999/xhtml' !== oduz['uri'] || oduz['closed'] ? $wret4++ : $wret4 = zj5uo(ou5h8, $wret4, oduz['tagName'], wv4t$1, i7bzk);}
    } catch (pv4wf1) {
      _2x0ga['error']('element parse error: ' + pv4wf1), $wret4 = -0x1;
    }x2anmq < $wret4 ? x2anmq = $wret4 : bmn76(Math['max'](pcyl1, x2anmq) + 0x1);
  }
}function zvl1pfc(kdbzi7, nk7b6q) {
  return nk7b6q['lineNumber'] = kdbzi7['lineNumber'], nk7b6q['columnNumber'] = kdbzi7['columnNumber'], nk7b6q;
}function zy935h(rewt4$, dukjz, jzduo, doji5, l9c3hy, w$etv) {
  for (var qbmnx, _20ag = ++dukjz, _xma = zp9yl3;;) {
    var p1cyfl = rewt4$['charAt'](_20ag);switch (p1cyfl) {case '=':
        if (_xma === z_mxa02) qbmnx = rewt4$['slice'](dukjz, _20ag), _xma = zo5uj8i;else {
          if (_xma !== z$vt4w1) throw new Error('attribute equal must after attrName');_xma = zo5uj8i;
        }break;case '\x27':case '\x22':
        if (_xma === zo5uj8i || _xma === z_mxa02) {
          if (_xma === z_mxa02 && (w$etv['warning']('attribute value must after "="'), qbmnx = rewt4$['slice'](dukjz, _20ag)), !(0x0 < (_20ag = rewt4$['indexOf'](p1cyfl, dukjz = _20ag + 0x1)))) throw new Error('attribute value no end \'' + p1cyfl + '\' match');w$4vt = rewt4$['slice'](dukjz, _20ag)['replace'](/&#?\w+;/g, l9c3hy), jzduo['add'](qbmnx, w$4vt, dukjz - 0x1), _xma = zmqx6n2;
        } else {
          if (_xma != zl9p) throw new Error('attribute value must after "="');w$4vt = rewt4$['slice'](dukjz, _20ag)['replace'](/&#?\w+;/g, l9c3hy), jzduo['add'](qbmnx, w$4vt, dukjz), w$etv['warning']('attribute "' + qbmnx + '" missed start quot(' + p1cyfl + ')!!'), dukjz = _20ag + 0x1, _xma = zmqx6n2;
        }break;case '/':
        switch (_xma) {case zp9yl3:
            jzduo['setTagName'](rewt4$['slice'](dukjz, _20ag));case zmqx6n2:case zagx:case zw14$t:
            _xma = zw14$t, jzduo['closed'] = !0x0;case zl9p:case z_mxa02:case z$vt4w1:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return w$etv['error']('unexpected end of input'), _xma == zp9yl3 && jzduo['setTagName'](rewt4$['slice'](dukjz, _20ag)), _20ag;case '>':
        switch (_xma) {case zp9yl3:
            jzduo['setTagName'](rewt4$['slice'](dukjz, _20ag));case zmqx6n2:case zagx:case zw14$t:
            break;case zl9p:case z_mxa02:
            '/' === (w$4vt = rewt4$['slice'](dukjz, _20ag))['slice'](-0x1) && (jzduo['closed'] = !0x0, w$4vt = w$4vt['slice'](0x0, -0x1));case z$vt4w1:
            _xma === z$vt4w1 && (w$4vt = qbmnx), _xma == zl9p ? (w$etv['warning']('attribute "' + w$4vt + '" missed quot(")!!'), jzduo['add'](qbmnx, w$4vt['replace'](/&#?\w+;/g, l9c3hy), dukjz)) : ('http://www.w3.org/1999/xhtml' === doji5[''] && w$4vt['match'](/^(?:disabled|checked|selected)$/i) || w$etv['warning']('attribute "' + w$4vt + '" missed value!! "' + w$4vt + '" instead!!'), jzduo['add'](w$4vt, w$4vt, dukjz));break;case zo5uj8i:
            throw new Error('attribute value missed!!');}return _20ag;case '\u0080':
        p1cyfl = '\x20';default:
        if (p1cyfl <= '\x20') switch (_xma) {case zp9yl3:
            jzduo['setTagName'](rewt4$['slice'](dukjz, _20ag)), _xma = zagx;break;case z_mxa02:
            qbmnx = rewt4$['slice'](dukjz, _20ag), _xma = z$vt4w1;break;case zl9p:
            var w$4vt = rewt4$['slice'](dukjz, _20ag)['replace'](/&#?\w+;/g, l9c3hy);w$etv['warning']('attribute "' + w$4vt + '" missed quot(")!!'), jzduo['add'](qbmnx, w$4vt, dukjz);case zmqx6n2:
            _xma = zagx;} else switch (_xma) {case z$vt4w1:
            jzduo['tagName'], 'http://www.w3.org/1999/xhtml' === doji5[''] && qbmnx['match'](/^(?:disabled|checked|selected)$/i) || w$etv['warning']('attribute "' + qbmnx + '" missed value!! "' + qbmnx + '" instead2!!'), jzduo['add'](qbmnx, qbmnx, dukjz), dukjz = _20ag, _xma = z_mxa02;break;case zmqx6n2:
            w$etv['warning']('attribute space is required"' + qbmnx + '\x22!!');case zagx:
            _xma = z_mxa02, dukjz = _20ag;break;case zo5uj8i:
            _xma = zl9p, dukjz = _20ag;break;case zw14$t:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}_20ag++;
  }
}function zdojizu(kid7, x6nmbq, nax2) {
  for (var c3lfy = kid7['tagName'], vp1flc = null, udkizj = kid7['length']; udkizj--;) {
    var h3lc = kid7[udkizj],
        b7izkd = h3lc['qName'],
        m6q7bn = h3lc['value'],
        y58h39;b7izkd = 0x0 < (hujo58 = b7izkd['indexOf'](':')) ? (m2_a = h3lc['prefix'] = b7izkd['slice'](0x0, hujo58), y58h39 = b7izkd['slice'](hujo58 + 0x1), 'xmlns' === m2_a && y58h39) : (m2_a = null, 'xmlns' === (y58h39 = b7izkd) && ''), h3lc['localName'] = y58h39, !0x1 !== b7izkd && (null == vp1flc && (vp1flc = {}, zlyc1pf(nax2, nax2 = {})), nax2[b7izkd] = vp1flc[b7izkd] = m6q7bn, h3lc['uri'] = 'http://www.w3.org/2000/xmlns/', x6nmbq['startPrefixMapping'](b7izkd, m6q7bn));
  }for (udkizj = kid7['length']; udkizj--;) (m2_a = (h3lc = kid7[udkizj])['prefix']) && ('xml' === m2_a && (h3lc['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== m2_a && (h3lc['uri'] = nax2[m2_a || '']));var hujo58;y58h39 = 0x0 < (hujo58 = c3lfy['indexOf'](':')) ? (m2_a = kid7['prefix'] = c3lfy['slice'](0x0, hujo58), kid7['localName'] = c3lfy['slice'](hujo58 + 0x1)) : (m2_a = null, kid7['localName'] = c3lfy);var xqbmn = kid7['uri'] = nax2[m2_a || ''];if (x6nmbq['startElement'](xqbmn, y58h39, c3lfy, kid7), !kid7['closed']) return kid7['currentNSMap'] = nax2, kid7['localNSMap'] = vp1flc, !0x0;if (x6nmbq['endElement'](xqbmn, y58h39, c3lfy), vp1flc) {
    for (var m2_a in vp1flc) x6nmbq['endPrefixMapping'](m2_a);
  }
}function zj5uo(wt41fv, ji7dk, g2a_0x, ui5djo, fc3ylp) {
  if (/^(?:script|textarea)$/i['test'](g2a_0x)) {
    var vw4$ = wt41fv['indexOf']('</' + g2a_0x + '>', ji7dk),
        wt41fv = wt41fv['substring'](ji7dk + 0x1, vw4$);if (/[&<]/['test'](wt41fv)) return (/^script$/i['test'](g2a_0x) || (wt41fv = wt41fv['replace'](/&#?\w+;/g, ui5djo)), fc3ylp['characters'](wt41fv, 0x0, wt41fv['length']), vw4$
    );
  }return ji7dk + 0x1;
}function znmq62(x6nbqm, vtw4, pcyl93, h58jo) {
  var o5jdu = h58jo[pcyl93];return null == o5jdu && ((o5jdu = x6nbqm['lastIndexOf']('</' + pcyl93 + '>')) < vtw4 && (o5jdu = x6nbqm['lastIndexOf']('</' + pcyl93)), h58jo[pcyl93] = o5jdu), o5jdu < vtw4;
}function zlyc1pf(ve4$, cpl3) {
  for (var cvw in ve4$) cpl3[cvw] = ve4$[cvw];
}function zjuh5o8(yh3895, _a0, u5ohj, $e4wrt) {
  var judikz = yh3895['charAt'](_a0 + 0x2);if ('-' === judikz) return '-' !== yh3895['charAt'](_a0 + 0x3) ? -0x1 : _a0 < (zdk7b = yh3895['indexOf']('-->', _a0 + 0x4)) ? (u5ohj['comment'](yh3895, _a0 + 0x4, zdk7b - _a0 - 0x4), zdk7b + 0x3) : ($e4wrt['error']('Unclosed comment'), -0x1);if ('CDATA[' == yh3895['substr'](_a0 + 0x3, 0x6)) {
    var zdk7b = yh3895['indexOf'](']]>', _a0 + 0x9);return u5ohj['startCDATA'](), u5ohj['characters'](yh3895, _a0 + 0x9, zdk7b - _a0 - 0x9), u5ohj['endCDATA'](), zdk7b + 0x3;
  }judikz = zji8ou5(yh3895, _a0), $e4wrt = judikz['length'];if (0x1 < $e4wrt && /!doctype/i['test'](judikz[0x0][0x0])) return zdk7b = judikz[0x1][0x0], yh3895 = 0x3 < $e4wrt && /^public$/i['test'](judikz[0x2][0x0]) && judikz[0x3][0x0], _a0 = 0x4 < $e4wrt && judikz[0x4][0x0], $e4wrt = judikz[$e4wrt - 0x1], (u5ohj['startDTD'](zdk7b, yh3895 && yh3895['replace'](/^(['"])(.*?)\1$/, '$2'), _a0 && _a0['replace'](/^(['"])(.*?)\1$/, '$2')), u5ohj['endDTD'](), $e4wrt['index'] + $e4wrt[0x0]['length']);return -0x1;
}function zh385o(_2ga0, pfly1, nmqbx6) {
  var kdi = _2ga0['indexOf']('?>', pfly1);if (kdi) return pfly1 = _2ga0['substring'](pfly1, kdi)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), pfly1 ? (pfly1[0x0]['length'], nmqbx6['processingInstruction'](pfly1[0x1], pfly1[0x2]), kdi + 0x2) : -0x1;return -0x1;
}function zhy83() {}function zw1vt4(cf1y, bqxm6n) {
  return cf1y['__proto__'] = bqxm6n, cf1y;
}function zji8ou5(w4ev$, kudjz) {
  var vc1fpw,
      cfp3ly = [],
      fcpl3 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (fcpl3['lastIndex'] = kudjz, fcpl3['exec'](w4ev$); vc1fpw = fcpl3['exec'](w4ev$);) if (cfp3ly['push'](vc1fpw), vc1fpw[0x1]) return cfp3ly;
}var zv41fwp = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    zf1y = new RegExp('[\\-\\.0-9' + zv41fwp['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    zxn6qm = new RegExp('^' + zv41fwp['source'] + zf1y['source'] + '*(?::' + zv41fwp['source'] + zf1y['source'] + '*)?$'),
    zp9yl3 = 0x0,
    z_mxa02 = 0x1,
    z$vt4w1 = 0x2,
    zo5uj8i = 0x3,
    zl9p = 0x4,
    zmqx6n2 = 0x5,
    zagx = 0x6,
    zw14$t = 0x7;zy5h93['prototype'] = { 'parse': function (knz6, v14w$t, p4w1f) {
    var p3lc9 = this['domBuilder'];p3lc9['startDocument'](), zlyc1pf(v14w$t, v14w$t = {}), zj7izd(knz6, v14w$t, p4w1f, p3lc9, this['errorHandler']), p3lc9['endDocument']();
  } }, zhy83['prototype'] = { 'setTagName': function (oi5jdu) {
    if (!zxn6qm['test'](oi5jdu)) throw new Error('invalid tagName:' + oi5jdu);this['tagName'] = oi5jdu;
  }, 'add': function (y1plfc, fpc1, o5ji) {
    if (!zxn6qm['test'](y1plfc)) throw new Error('invalid attribute:' + y1plfc);this[this['length']++] = { 'qName': y1plfc, 'value': fpc1, 'offset': o5ji };
  }, 'length': 0x0, 'getLocalName': function (o358h9) {
    return this[o358h9]['localName'];
  }, 'getLocator': function (ga_x02) {
    return this[ga_x02]['locator'];
  }, 'getQName': function (nq7k) {
    return this[nq7k]['qName'];
  }, 'getURI': function (wfv41) {
    return this[wfv41]['uri'];
  }, 'getValue': function (bq7k) {
    return this[bq7k]['value'];
  } }, zw1vt4({}, zw1vt4['prototype']) instanceof zw1vt4 || (zw1vt4 = function (o95hu, ji5uo) {
  function m_0a2() {}for (ji5uo in m_0a2['prototype'] = ji5uo, m_0a2 = new m_0a2(), o95hu) m_0a2[ji5uo] = o95hu[ji5uo];return m_0a2;
}), exports['XMLReader'] = zy5h93;