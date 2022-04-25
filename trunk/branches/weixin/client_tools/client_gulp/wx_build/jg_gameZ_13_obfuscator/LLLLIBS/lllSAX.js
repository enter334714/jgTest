var Z = wx.$L;
function l1ak$5s() {}function l1x6p09r(wtz3, ydhce, _1jm, _i1ob, o2y_1) {
  function kel$7a(s$a5g) {
    if (s$a5g > 0xffff) {
      s$a5g -= 0x10000;var dhy8c = 0xd800 + (s$a5g >> 0xa),
          _2j1bo = 0xdc00 + (0x3ff & s$a5g);return String['fromCharCode'](dhy8c, _2j1bo);
    }return String['fromCharCode'](s$a5g);
  }function g5qs(ufwtx) {
    var k$5ag7 = ufwtx['slice'](0x1, -0x1);return k$5ag7 in _1jm ? _1jm[k$5ag7] : '#' === k$5ag7['charAt'](0x0) ? kel$7a(parseInt(k$5ag7['substr'](0x1)['replace']('x', '0x'))) : (o2y_1['error']('entity not found:' + ufwtx), ufwtx);
  }function g5$sqa(ft3) {
    if (ft3 > wu3) {
      var z9x0r6 = wtz3['substring'](wu3, ft3)['replace'](/&#?\w+;/g, g5qs);cekd7 && dh8lec(wu3), _i1ob['characters'](z9x0r6, 0x0, ft3 - wu3), wu3 = ft3;
    }
  }function dh8lec(m_ipb1, k7$5ag) {
    for (; m_ipb1 >= tf3wz && (k7$5ag = i9mr0p['exec'](wtz3));) $kael = k7$5ag['index'], tf3wz = $kael + k7$5ag[0x0]['length'], cekd7['lineNumber']++;cekd7['columnNumber'] = m_ipb1 - $kael + 0x1;
  }for (var $kael = 0x0, tf3wz = 0x0, i9mr0p = /.*(?:\r\n?|\n)|.*$/g, cekd7 = _i1ob['locator'], yhj2o_ = [{ 'currentNSMap': ydhce }], a75$k = {}, wu3 = 0x0;;) {
    try {
      var xt6wuz = wtz3['indexOf']('<', wu3);if (0x0 > xt6wuz) {
        if (!wtz3['substr'](wu3)['match'](/^\s*$/)) {
          var k$lae = _i1ob['doc'],
              ngv5qs = k$lae['createTextNode'](wtz3['substr'](wu3));k$lae['appendChild'](ngv5qs), _i1ob['currentElement'] = ngv5qs;
        }return;
      }switch (xt6wuz > wu3 && g5$sqa(xt6wuz), wtz3['charAt'](xt6wuz + 0x1)) {case '/':
          var lecd8 = wtz3['indexOf']('>', xt6wuz + 0x3),
              ech = wtz3['substring'](xt6wuz + 0x2, lecd8),
              zrxw6 = yhj2o_['pop']();0x0 > lecd8 ? (ech = wtz3['substring'](xt6wuz + 0x2)['replace'](/[\s<].*/, ''), o2y_1['error']('end tag name: ' + ech + ' is not complete:' + zrxw6['tagName']), lecd8 = xt6wuz + 0x1 + ech['length']) : ech['match'](/\s</) && (ech = ech['replace'](/[\s<].*/, ''), o2y_1['error']('end tag name: ' + ech + ' maybe not complete'), lecd8 = xt6wuz + 0x1 + ech['length']);var t3wuzf = zrxw6['localNSMap'],
              lak$e7 = zrxw6['tagName'] == ech,
              e8lchd = lak$e7 || zrxw6['tagName'] && zrxw6['tagName']['toLowerCase']() == ech['toLowerCase']();if (e8lchd) {
            if (_i1ob['endElement'](zrxw6['uri'], zrxw6['localName'], ech), t3wuzf) {
              for (var $qgas in t3wuzf) _i1ob['endPrefixMapping']($qgas);
            }lak$e7 || o2y_1['fatalError']('end tag name: ' + ech + ' is not match the current start tagName:' + zrxw6['tagName']);
          } else yhj2o_['push'](zrxw6);lecd8++;break;case '?':
          cekd7 && dh8lec(xt6wuz), lecd8 = l1qsv45(wtz3, xt6wuz, _i1ob);break;case '!':
          cekd7 && dh8lec(xt6wuz), lecd8 = l1qnsvg(wtz3, xt6wuz, _i1ob, o2y_1);break;default:
          cekd7 && dh8lec(xt6wuz);var a5k$7 = new l1sgq5$(),
              _mip = yhj2o_[yhj2o_['length'] - 0x1]['currentNSMap'],
              lecd8 = l1k$a5g7(wtz3, xt6wuz, a5k$7, _mip, g5qs, o2y_1),
              l7kg$ = a5k$7['length'];if (!a5k$7['closed'] && l1vs5q4n(wtz3, lecd8, a5k$7['tagName'], a75$k) && (a5k$7['closed'] = !0x0, _1jm['nbsp'] || o2y_1['warning']('unclosed xml attribute')), cekd7 && l7kg$) {
            for (var j_yh2 = l1g$ka57(cekd7, {}), x0zrt6 = 0x0; l7kg$ > x0zrt6; x0zrt6++) {
              var $kgas = a5k$7[x0zrt6];dh8lec($kgas['offset']), $kgas['locator'] = l1g$ka57(cekd7, {});
            }_i1ob['locator'] = j_yh2, l1hcy8e(a5k$7, _i1ob, _mip) && yhj2o_['push'](a5k$7), _i1ob['locator'] = cekd7;
          } else l1hcy8e(a5k$7, _i1ob, _mip) && yhj2o_['push'](a5k$7);'http://www.w3.org/1999/xhtml' !== a5k$7['uri'] || a5k$7['closed'] ? lecd8++ : lecd8 = l1wuz6tx(wtz3, lecd8, a5k$7['tagName'], g5qs, _i1ob);}
    } catch (qng5) {
      o2y_1['error']('element parse error: ' + qng5), lecd8 = -0x1;
    }lecd8 > wu3 ? wu3 = lecd8 : g5$sqa(Math['max'](xt6wuz, wu3) + 0x1);
  }
}function l1g$ka57(z06t, a5gsqn) {
  return a5gsqn['lineNumber'] = z06t['lineNumber'], a5gsqn['columnNumber'] = z06t['columnNumber'], a5gsqn;
}function l1k$a5g7(d7ec, aq$5sg, al$kg7, yo1j_, i_bpm, yo82h) {
  for (var b1j_2o, omj_b1, d8he = ++aq$5sg, irpm = l1uwftz3;;) {
    var s5gnqv = d7ec['charAt'](d8he);switch (s5gnqv) {case '=':
        if (irpm === l1ux6wtz) b1j_2o = d7ec['slice'](aq$5sg, d8he), irpm = l1gk75;else {
          if (irpm !== l1ld8h) throw new Error('attribute equal must after attrName');irpm = l1gk75;
        }break;case '\x27':case '\x22':
        if (irpm === l1gk75 || irpm === l1ux6wtz) {
          if (irpm === l1ux6wtz && (yo82h['warning']('attribute value must after "="'), b1j_2o = d7ec['slice'](aq$5sg, d8he)), aq$5sg = d8he + 0x1, d8he = d7ec['indexOf'](s5gnqv, aq$5sg), !(d8he > 0x0)) throw new Error('attribute value no end \'' + s5gnqv + '\' match');omj_b1 = d7ec['slice'](aq$5sg, d8he)['replace'](/&#?\w+;/g, i_bpm), al$kg7['add'](b1j_2o, omj_b1, aq$5sg - 0x1), irpm = l1_oyh2j;
        } else {
          if (irpm != l1xz69r) throw new Error('attribute value must after "="');omj_b1 = d7ec['slice'](aq$5sg, d8he)['replace'](/&#?\w+;/g, i_bpm), al$kg7['add'](b1j_2o, omj_b1, aq$5sg), yo82h['warning']('attribute "' + b1j_2o + '" missed start quot(' + s5gnqv + ')!!'), aq$5sg = d8he + 0x1, irpm = l1_oyh2j;
        }break;case '/':
        switch (irpm) {case l1uwftz3:
            al$kg7['setTagName'](d7ec['slice'](aq$5sg, d8he));case l1_oyh2j:case l1imrp9:case l1qv5sg:
            irpm = l1qv5sg, al$kg7['closed'] = !0x0;case l1xz69r:case l1ux6wtz:case l1ld8h:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return yo82h['error']('unexpected end of input'), irpm == l1uwftz3 && al$kg7['setTagName'](d7ec['slice'](aq$5sg, d8he)), d8he;case '>':
        switch (irpm) {case l1uwftz3:
            al$kg7['setTagName'](d7ec['slice'](aq$5sg, d8he));case l1_oyh2j:case l1imrp9:case l1qv5sg:
            break;case l1xz69r:case l1ux6wtz:
            omj_b1 = d7ec['slice'](aq$5sg, d8he), '/' === omj_b1['slice'](-0x1) && (al$kg7['closed'] = !0x0, omj_b1 = omj_b1['slice'](0x0, -0x1));case l1ld8h:
            irpm === l1ld8h && (omj_b1 = b1j_2o), irpm == l1xz69r ? (yo82h['warning']('attribute "' + omj_b1 + '" missed quot(")!!'), al$kg7['add'](b1j_2o, omj_b1['replace'](/&#?\w+;/g, i_bpm), aq$5sg)) : ('http://www.w3.org/1999/xhtml' === yo1j_[''] && omj_b1['match'](/^(?:disabled|checked|selected)$/i) || yo82h['warning']('attribute "' + omj_b1 + '" missed value!! "' + omj_b1 + '" instead!!'), al$kg7['add'](omj_b1, omj_b1, aq$5sg));break;case l1gk75:
            throw new Error('attribute value missed!!');}return d8he;case '\u0080':
        s5gnqv = '\x20';default:
        if ('\x20' >= s5gnqv) switch (irpm) {case l1uwftz3:
            al$kg7['setTagName'](d7ec['slice'](aq$5sg, d8he)), irpm = l1imrp9;break;case l1ux6wtz:
            b1j_2o = d7ec['slice'](aq$5sg, d8he), irpm = l1ld8h;break;case l1xz69r:
            var omj_b1 = d7ec['slice'](aq$5sg, d8he)['replace'](/&#?\w+;/g, i_bpm);yo82h['warning']('attribute "' + omj_b1 + '" missed quot(")!!'), al$kg7['add'](b1j_2o, omj_b1, aq$5sg);case l1_oyh2j:
            irpm = l1imrp9;} else switch (irpm) {case l1ld8h:
            {
              al$kg7['tagName'];
            }'http://www.w3.org/1999/xhtml' === yo1j_[''] && b1j_2o['match'](/^(?:disabled|checked|selected)$/i) || yo82h['warning']('attribute "' + b1j_2o + '" missed value!! "' + b1j_2o + '" instead2!!'), al$kg7['add'](b1j_2o, b1j_2o, aq$5sg), aq$5sg = d8he, irpm = l1ux6wtz;break;case l1_oyh2j:
            yo82h['warning']('attribute space is required"' + b1j_2o + '\x22!!');case l1imrp9:
            irpm = l1ux6wtz, aq$5sg = d8he;break;case l1gk75:
            irpm = l1xz69r, aq$5sg = d8he;break;case l1qv5sg:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}d8he++;
  }
}function l1hcy8e(g$lk7a, mi9b0p, ut3wz) {
  for (var _1ibmo = g$lk7a['tagName'], i_om = null, angqs5 = g$lk7a['length']; angqs5--;) {
    var u3tzw = g$lk7a[angqs5],
        ledhc = u3tzw['qName'],
        r6xz = u3tzw['value'],
        kg$a5s = ledhc['indexOf'](':');if (kg$a5s > 0x0) var rxtzw = u3tzw['prefix'] = ledhc['slice'](0x0, kg$a5s),
        d8ey = ledhc['slice'](kg$a5s + 0x1),
        rzx690 = 'xmlns' === rxtzw && d8ey;else d8ey = ledhc, rxtzw = null, rzx690 = 'xmlns' === ledhc && '';u3tzw['localName'] = d8ey, rzx690 !== !0x1 && (null == i_om && (i_om = {}, l1akel$(ut3wz, ut3wz = {})), ut3wz[rzx690] = i_om[rzx690] = r6xz, u3tzw['uri'] = 'http://www.w3.org/2000/xmlns/', mi9b0p['startPrefixMapping'](rzx690, r6xz));
  }for (var angqs5 = g$lk7a['length']; angqs5--;) {
    u3tzw = g$lk7a[angqs5];var rxtzw = u3tzw['prefix'];rxtzw && ('xml' === rxtzw && (u3tzw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== rxtzw && (u3tzw['uri'] = ut3wz[rxtzw || '']));
  }var kg$a5s = _1ibmo['indexOf'](':');kg$a5s > 0x0 ? (rxtzw = g$lk7a['prefix'] = _1ibmo['slice'](0x0, kg$a5s), d8ey = g$lk7a['localName'] = _1ibmo['slice'](kg$a5s + 0x1)) : (rxtzw = null, d8ey = g$lk7a['localName'] = _1ibmo);var hledc8 = g$lk7a['uri'] = ut3wz[rxtzw || ''];if (mi9b0p['startElement'](hledc8, d8ey, _1ibmo, g$lk7a), !g$lk7a['closed']) return g$lk7a['currentNSMap'] = ut3wz, g$lk7a['localNSMap'] = i_om, !0x0;if (mi9b0p['endElement'](hledc8, d8ey, _1ibmo), i_om) {
    for (rxtzw in i_om) mi9b0p['endPrefixMapping'](rxtzw);
  }
}function l1wuz6tx(m0p9bi, rip069, leak7$, hdc2y, jo1_b2) {
  if (/^(?:script|textarea)$/i['test'](leak7$)) {
    var i09rpm = m0p9bi['indexOf']('</' + leak7$ + '>', rip069),
        m_1boj = m0p9bi['substring'](rip069 + 0x1, i09rpm);if (/[&<]/['test'](m_1boj)) return (/^script$/i['test'](leak7$) ? (jo1_b2['characters'](m_1boj, 0x0, m_1boj['length']), i09rpm) : (m_1boj = m_1boj['replace'](/&#?\w+;/g, hdc2y), jo1_b2['characters'](m_1boj, 0x0, m_1boj['length']), i09rpm)
    );
  }return rip069 + 0x1;
}function l1vs5q4n(ke$7l, x6wrtz, hyo_, $7kg5a) {
  var y2dh = $7kg5a[hyo_];return null == y2dh && (y2dh = ke$7l['lastIndexOf']('</' + hyo_ + '>'), x6wrtz > y2dh && (y2dh = ke$7l['lastIndexOf']('</' + hyo_)), $7kg5a[hyo_] = y2dh), x6wrtz > y2dh;
}function l1akel$(g5s$a, h2cyd) {
  for (var kgas5$ in g5s$a) h2cyd[kgas5$] = g5s$a[kgas5$];
}function l1qnsvg($k7ea, l8ceh, q$5gsa, lcke) {
  var uzt3f = $k7ea['charAt'](l8ceh + 0x2);switch (uzt3f) {case '-':
      if ('-' === $k7ea['charAt'](l8ceh + 0x3)) {
        var xt0z = $k7ea['indexOf']('-->', l8ceh + 0x4);return xt0z > l8ceh ? (q$5gsa['comment']($k7ea, l8ceh + 0x4, xt0z - l8ceh - 0x4), xt0z + 0x3) : (lcke['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == $k7ea['substr'](l8ceh + 0x3, 0x6)) {
        var xt0z = $k7ea['indexOf'](']]>', l8ceh + 0x9);return q$5gsa['startCDATA'](), q$5gsa['characters']($k7ea, l8ceh + 0x9, xt0z - l8ceh - 0x9), q$5gsa['endCDATA'](), xt0z + 0x3;
      }var tzxr6w = l1wt6zxu($k7ea, l8ceh),
          t6x0r = tzxr6w['length'];if (t6x0r > 0x1 && /!doctype/i['test'](tzxr6w[0x0][0x0])) {
        var oy28jh = tzxr6w[0x1][0x0],
            zr60 = t6x0r > 0x3 && /^public$/i['test'](tzxr6w[0x2][0x0]) && tzxr6w[0x3][0x0],
            mp0i9b = t6x0r > 0x4 && tzxr6w[0x4][0x0],
            hojy2_ = tzxr6w[t6x0r - 0x1];return q$5gsa['startDTD'](oy28jh, zr60 && zr60['replace'](/^(['"])(.*?)\1$/, '$2'), mp0i9b && mp0i9b['replace'](/^(['"])(.*?)\1$/, '$2')), q$5gsa['endDTD'](), hojy2_['index'] + hojy2_[0x0]['length'];
      }}return -0x1;
}function l1qsv45(zxr0, h82yo, g7lak$) {
  var twzxr = zxr0['indexOf']('?>', h82yo);if (twzxr) {
    var kale$7 = zxr0['substring'](h82yo, twzxr)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (kale$7) {
      {
        kale$7[0x0]['length'];
      }return g7lak$['processingInstruction'](kale$7[0x1], kale$7[0x2]), twzxr + 0x2;
    }return -0x1;
  }return -0x1;
}function l1sgq5$() {}function l1bmp_1i(mpi91b, bmip9) {
  return mpi91b['__proto__'] = bmip9, mpi91b;
}function l1wt6zxu(c8le7d, sq45v) {
  var o8yj2,
      kdel = [],
      jb_om1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jb_om1['lastIndex'] = sq45v, jb_om1['exec'](c8le7d); o8yj2 = jb_om1['exec'](c8le7d);) if (kdel['push'](o8yj2), o8yj2[0x1]) return kdel;
}var l1r06tzx = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    l1bmi19 = new RegExp('[\\-\\.0-9' + l1r06tzx['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    l1w3ztfu = new RegExp('^' + l1r06tzx['source'] + l1bmi19['source'] + '*(?::' + l1r06tzx['source'] + l1bmi19['source'] + '*)?$'),
    l1uwftz3 = 0x0,
    l1ux6wtz = 0x1,
    l1ld8h = 0x2,
    l1gk75 = 0x3,
    l1xz69r = 0x4,
    l1_oyh2j = 0x5,
    l1imrp9 = 0x6,
    l1qv5sg = 0x7;l1ak$5s['prototype'] = { 'parse': function (d82yhc, k7al$e, yho28j) {
    var gqan5s = this['domBuilder'];gqan5s['startDocument'](), l1akel$(k7al$e, k7al$e = {}), l1x6p09r(d82yhc, k7al$e, yho28j, gqan5s, this['errorHandler']), gqan5s['endDocument']();
  } }, l1sgq5$['prototype'] = { 'setTagName': function (i9mbp0) {
    if (!l1w3ztfu['test'](i9mbp0)) throw new Error('invalid tagName:' + i9mbp0);this['tagName'] = i9mbp0;
  }, 'add': function (ka7le$, h2o_y, ga$7l) {
    if (!l1w3ztfu['test'](ka7le$)) throw new Error('invalid attribute:' + ka7le$);this[this['length']++] = { 'qName': ka7le$, 'value': h2o_y, 'offset': ga$7l };
  }, 'length': 0x0, 'getLocalName': function (xz0rt) {
    return this[xz0rt]['localName'];
  }, 'getLocator': function (m_bp) {
    return this[m_bp]['locator'];
  }, 'getQName': function (cdl78e) {
    return this[cdl78e]['qName'];
  }, 'getURI': function (mr9p) {
    return this[mr9p]['uri'];
  }, 'getValue': function (yj_) {
    return this[yj_]['value'];
  } }, l1bmp_1i({}, l1bmp_1i['prototype']) instanceof l1bmp_1i || (l1bmp_1i = function (ychd2, eyc8hd) {
  function ek$l7d() {}ek$l7d['prototype'] = eyc8hd, ek$l7d = new ek$l7d();for (eyc8hd in ychd2) ek$l7d[eyc8hd] = ychd2[eyc8hd];return ek$l7d;
}), exports['XMLReader'] = l1ak$5s;