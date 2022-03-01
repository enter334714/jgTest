var M = wx.$T;
function th_0my() {}function tgr813n(qye0xo, n3j8r, m0_xq, _qx0y, poez) {
  function baujk(nb3jg) {
    var qm0y = nb3jg['slice'](0x1, -0x1);return qm0y in m0_xq ? m0_xq[qm0y] : '#' === qm0y['charAt'](0x0) ? 0xffff < (qm0y = parseInt(qm0y['substr'](0x1)['replace']('x', '0x'))) ? (qm0y -= 0x10000, String['fromCharCode'](0xd800 + (qm0y >> 0xa), 0xdc00 + (0x3ff & qm0y))) : String['fromCharCode'](qm0y) : (poez['error']('entity not found:' + nb3jg), nb3jg);
  }function rj3gn8(bjusak) {
    var nbgr;ezp7f < bjusak && (nbgr = qye0xo['substring'](ezp7f, bjusak)['replace'](/&#?\w+;/g, baujk), grbn3j && d$9(ezp7f), _qx0y['characters'](nbgr, 0x0, bjusak - ezp7f), ezp7f = bjusak);
  }function d$9(w3586, jrsbk) {
    for (; anrgjb <= w3586 && (jrsbk = dv$p['exec'](qye0xo));) n83gr1 = jrsbk['index'], anrgjb = n83gr1 + jrsbk[0x0]['length'], grbn3j['lineNumber']++;grbn3j['columnNumber'] = w3586 - n83gr1 + 0x1;
  }for (var n83gr1 = 0x0, anrgjb = 0x0, dv$p = /.*(?:\r\n?|\n)|.*$/g, grbn3j = _qx0y['locator'], dv9ci$ = [{ 'currentNSMap': n3j8r }], mwy = {}, ezp7f = 0x0;;) {
    try {
      var mx0h_y = qye0xo['indexOf']('<', ezp7f),
          brgak,
          jbkrs;if (mx0h_y < 0x0) return void (qye0xo['substr'](ezp7f)['match'](/^\s*$/) || (jbkrs = (brgak = _qx0y['doc'])['createTextNode'](qye0xo['substr'](ezp7f)), brgak['appendChild'](jbkrs), _qx0y['currentElement'] = jbkrs));switch (ezp7f < mx0h_y && rj3gn8(mx0h_y), qye0xo['charAt'](mx0h_y + 0x1)) {case '/':
          var tci9v2 = qye0xo['indexOf']('>', mx0h_y + 0x3),
              r8n3g = qye0xo['substring'](mx0h_y + 0x2, tci9v2),
              efz = dv9ci$['pop']();tci9v2 < 0x0 ? (r8n3g = qye0xo['substring'](mx0h_y + 0x2)['replace'](/[\s<].*/, ''), poez['error']('end tag name: ' + r8n3g + ' is not complete:' + efz['tagName']), tci9v2 = mx0h_y + 0x1 + r8n3g['length']) : r8n3g['match'](/\s</) && (r8n3g = r8n3g['replace'](/[\s<].*/, ''), poez['error']('end tag name: ' + r8n3g + ' maybe not complete'), tci9v2 = mx0h_y + 0x1 + r8n3g['length']);var $9ivpd = efz['localNSMap'],
              bgkajr = efz['tagName'] == r8n3g;if (bgkajr || efz['tagName'] && efz['tagName']['toLowerCase']() == r8n3g['toLowerCase']()) {
            if (_qx0y['endElement'](efz['uri'], efz['localName'], r8n3g), $9ivpd) {
              for (var vi$p9d in $9ivpd) _qx0y['endPrefixMapping'](vi$p9d);
            }bgkajr || poez['fatalError']('end tag name: ' + r8n3g + ' is not match the current start tagName:' + efz['tagName']);
          } else dv9ci$['push'](efz);tci9v2++;break;case '?':
          grbn3j && d$9(mx0h_y), tci9v2 = t$vpfdz(qye0xo, mx0h_y, _qx0y);break;case '!':
          grbn3j && d$9(mx0h_y), tci9v2 = tw_yhx(qye0xo, mx0h_y, _qx0y, poez);break;default:
          grbn3j && d$9(mx0h_y);var qx0m_y = new tjbrgna(),
              fdpoz7 = dv9ci$[dv9ci$['length'] - 0x1]['currentNSMap'],
              tci9v2 = tvzdp$(qye0xo, mx0h_y, qx0m_y, fdpoz7, baujk, poez),
              t2i4cl = qx0m_y['length'];if (!qx0m_y['closed'] && tg16n8(qye0xo, tci9v2, qx0m_y['tagName'], mwy) && (qx0m_y['closed'] = !0x0, m0_xq['nbsp'] || poez['warning']('unclosed xml attribute')), grbn3j && t2i4cl) {
            for (var w6m_h = tkarsj(grbn3j, {}), whyxm_ = 0x0; whyxm_ < t2i4cl; whyxm_++) {
              var saujb = qx0m_y[whyxm_];d$9(saujb['offset']), saujb['locator'] = tkarsj(grbn3j, {});
            }_qx0y['locator'] = w6m_h, tjgnr8(qx0m_y, _qx0y, fdpoz7) && dv9ci$['push'](qx0m_y), _qx0y['locator'] = grbn3j;
          } else tjgnr8(qx0m_y, _qx0y, fdpoz7) && dv9ci$['push'](qx0m_y);'http://www.w3.org/1999/xhtml' !== qx0m_y['uri'] || qx0m_y['closed'] ? tci9v2++ : tci9v2 = th6m15(qye0xo, tci9v2, qx0m_y['tagName'], baujk, _qx0y);}
    } catch ($vdfp9) {
      poez['error']('element parse error: ' + $vdfp9), tci9v2 = -0x1;
    }ezp7f < tci9v2 ? ezp7f = tci9v2 : rj3gn8(Math['max'](mx0h_y, ezp7f) + 0x1);
  }
}function tkarsj(df7$, e7qox) {
  return e7qox['lineNumber'] = df7$['lineNumber'], e7qox['columnNumber'] = df7$['columnNumber'], e7qox;
}function tvzdp$(xq7eo, hw5m6_, barkjs, icv9t2, _qm0yx, _yhmw5) {
  for (var icdv9$, $fzdvp = ++hw5m6_, h5w168 = tgrakjb;;) {
    var _y0qmx = xq7eo['charAt']($fzdvp);switch (_y0qmx) {case '=':
        if (h5w168 === tv9t$ic) icdv9$ = xq7eo['slice'](hw5m6_, $fzdvp), h5w168 = tdf7zpo;else {
          if (h5w168 !== tubjas) throw new Error('attribute equal must after attrName');h5w168 = tdf7zpo;
        }break;case '\x27':case '\x22':
        if (h5w168 === tdf7zpo || h5w168 === tv9t$ic) {
          if (h5w168 === tv9t$ic && (_yhmw5['warning']('attribute value must after "="'), icdv9$ = xq7eo['slice'](hw5m6_, $fzdvp)), !(0x0 < ($fzdvp = xq7eo['indexOf'](_y0qmx, hw5m6_ = $fzdvp + 0x1)))) throw new Error('attribute value no end \'' + _y0qmx + '\' match');o7fdz = xq7eo['slice'](hw5m6_, $fzdvp)['replace'](/&#?\w+;/g, _qm0yx), barkjs['add'](icdv9$, o7fdz, hw5m6_ - 0x1), h5w168 = tabg;
        } else {
          if (h5w168 != t$vti9) throw new Error('attribute value must after "="');o7fdz = xq7eo['slice'](hw5m6_, $fzdvp)['replace'](/&#?\w+;/g, _qm0yx), barkjs['add'](icdv9$, o7fdz, hw5m6_), _yhmw5['warning']('attribute "' + icdv9$ + '" missed start quot(' + _y0qmx + ')!!'), hw5m6_ = $fzdvp + 0x1, h5w168 = tabg;
        }break;case '/':
        switch (h5w168) {case tgrakjb:
            barkjs['setTagName'](xq7eo['slice'](hw5m6_, $fzdvp));case tabg:case td$p7z:case tq0xeyo:
            h5w168 = tq0xeyo, barkjs['closed'] = !0x0;case t$vti9:case tv9t$ic:case tubjas:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return _yhmw5['error']('unexpected end of input'), h5w168 == tgrakjb && barkjs['setTagName'](xq7eo['slice'](hw5m6_, $fzdvp)), $fzdvp;case '>':
        switch (h5w168) {case tgrakjb:
            barkjs['setTagName'](xq7eo['slice'](hw5m6_, $fzdvp));case tabg:case td$p7z:case tq0xeyo:
            break;case t$vti9:case tv9t$ic:
            '/' === (o7fdz = xq7eo['slice'](hw5m6_, $fzdvp))['slice'](-0x1) && (barkjs['closed'] = !0x0, o7fdz = o7fdz['slice'](0x0, -0x1));case tubjas:
            h5w168 === tubjas && (o7fdz = icdv9$), h5w168 == t$vti9 ? (_yhmw5['warning']('attribute "' + o7fdz + '" missed quot(")!!'), barkjs['add'](icdv9$, o7fdz['replace'](/&#?\w+;/g, _qm0yx), hw5m6_)) : ('http://www.w3.org/1999/xhtml' === icv9t2[''] && o7fdz['match'](/^(?:disabled|checked|selected)$/i) || _yhmw5['warning']('attribute "' + o7fdz + '" missed value!! "' + o7fdz + '" instead!!'), barkjs['add'](o7fdz, o7fdz, hw5m6_));break;case tdf7zpo:
            throw new Error('attribute value missed!!');}return $fzdvp;case '\u0080':
        _y0qmx = '\x20';default:
        if (_y0qmx <= '\x20') switch (h5w168) {case tgrakjb:
            barkjs['setTagName'](xq7eo['slice'](hw5m6_, $fzdvp)), h5w168 = td$p7z;break;case tv9t$ic:
            icdv9$ = xq7eo['slice'](hw5m6_, $fzdvp), h5w168 = tubjas;break;case t$vti9:
            var o7fdz = xq7eo['slice'](hw5m6_, $fzdvp)['replace'](/&#?\w+;/g, _qm0yx);_yhmw5['warning']('attribute "' + o7fdz + '" missed quot(")!!'), barkjs['add'](icdv9$, o7fdz, hw5m6_);case tabg:
            h5w168 = td$p7z;} else switch (h5w168) {case tubjas:
            barkjs['tagName'], 'http://www.w3.org/1999/xhtml' === icv9t2[''] && icdv9$['match'](/^(?:disabled|checked|selected)$/i) || _yhmw5['warning']('attribute "' + icdv9$ + '" missed value!! "' + icdv9$ + '" instead2!!'), barkjs['add'](icdv9$, icdv9$, hw5m6_), hw5m6_ = $fzdvp, h5w168 = tv9t$ic;break;case tabg:
            _yhmw5['warning']('attribute space is required"' + icdv9$ + '\x22!!');case td$p7z:
            h5w168 = tv9t$ic, hw5m6_ = $fzdvp;break;case tdf7zpo:
            h5w168 = t$vti9, hw5m6_ = $fzdvp;break;case tq0xeyo:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$fzdvp++;
  }
}function tjgnr8(d9vic$, cvi2t9, vi$d9p) {
  for (var baku = d9vic$['tagName'], e0o7xq = null, hw_ym = d9vic$['length']; hw_ym--;) {
    var dc$v = d9vic$[hw_ym],
        hw1685 = dc$v['qName'],
        qyx_ = dc$v['value'],
        usjak;hw1685 = 0x0 < ($cvt9 = hw1685['indexOf'](':')) ? (rksja = dc$v['prefix'] = hw1685['slice'](0x0, $cvt9), usjak = hw1685['slice']($cvt9 + 0x1), 'xmlns' === rksja && usjak) : (rksja = null, 'xmlns' === (usjak = hw1685) && ''), dc$v['localName'] = usjak, !0x1 !== hw1685 && (null == e0o7xq && (e0o7xq = {}, tvf9pd(vi$d9p, vi$d9p = {})), vi$d9p[hw1685] = e0o7xq[hw1685] = qyx_, dc$v['uri'] = 'http://www.w3.org/2000/xmlns/', cvi2t9['startPrefixMapping'](hw1685, qyx_));
  }for (hw_ym = d9vic$['length']; hw_ym--;) (rksja = (dc$v = d9vic$[hw_ym])['prefix']) && ('xml' === rksja && (dc$v['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== rksja && (dc$v['uri'] = vi$d9p[rksja || '']));var $cvt9;usjak = 0x0 < ($cvt9 = baku['indexOf'](':')) ? (rksja = d9vic$['prefix'] = baku['slice'](0x0, $cvt9), d9vic$['localName'] = baku['slice']($cvt9 + 0x1)) : (rksja = null, d9vic$['localName'] = baku);var xw_ym = d9vic$['uri'] = vi$d9p[rksja || ''];if (cvi2t9['startElement'](xw_ym, usjak, baku, d9vic$), !d9vic$['closed']) return d9vic$['currentNSMap'] = vi$d9p, d9vic$['localNSMap'] = e0o7xq, !0x0;if (cvi2t9['endElement'](xw_ym, usjak, baku), e0o7xq) {
    for (var rksja in e0o7xq) cvi2t9['endPrefixMapping'](rksja);
  }
}function th6m15(h0ym_x, dzpv$, xw_hy, dzopf, wh1568) {
  if (/^(?:script|textarea)$/i['test'](xw_hy)) {
    var hmy0_x = h0ym_x['indexOf']('</' + xw_hy + '>', dzpv$),
        h0ym_x = h0ym_x['substring'](dzpv$ + 0x1, hmy0_x);if (/[&<]/['test'](h0ym_x)) return (/^script$/i['test'](xw_hy) || (h0ym_x = h0ym_x['replace'](/&#?\w+;/g, dzopf)), wh1568['characters'](h0ym_x, 0x0, h0ym_x['length']), hmy0_x
    );
  }return dzpv$ + 0x1;
}function tg16n8(dpo7zf, c9$idv, tc2i49, tivc2) {
  var ex0_y = tivc2[tc2i49];return null == ex0_y && ((ex0_y = dpo7zf['lastIndexOf']('</' + tc2i49 + '>')) < c9$idv && (ex0_y = dpo7zf['lastIndexOf']('</' + tc2i49)), tivc2[tc2i49] = ex0_y), ex0_y < c9$idv;
}function tvf9pd(mhw_56, h_y5mw) {
  for (var l24ct in mhw_56) h_y5mw[l24ct] = mhw_56[l24ct];
}function tw_yhx(tc49, yex0_q, eop7, x07eo) {
  var _xymq = tc49['charAt'](yex0_q + 0x2);if ('-' === _xymq) return '-' !== tc49['charAt'](yex0_q + 0x3) ? -0x1 : yex0_q < (y_mh = tc49['indexOf']('-->', yex0_q + 0x4)) ? (eop7['comment'](tc49, yex0_q + 0x4, y_mh - yex0_q - 0x4), y_mh + 0x3) : (x07eo['error']('Unclosed comment'), -0x1);if ('CDATA[' == tc49['substr'](yex0_q + 0x3, 0x6)) return y_mh = tc49['indexOf'](']]>', yex0_q + 0x9), eop7['startCDATA'](), eop7['characters'](tc49, yex0_q + 0x9, y_mh - yex0_q - 0x9), eop7['endCDATA'](), y_mh + 0x3;_xymq = trsbkj(tc49, yex0_q), x07eo = _xymq['length'];var y_mh;return 0x1 < x07eo && /!doctype/i['test'](_xymq[0x0][0x0]) ? (y_mh = _xymq[0x1][0x0], tc49 = 0x3 < x07eo && /^public$/i['test'](_xymq[0x2][0x0]) && _xymq[0x3][0x0], yex0_q = 0x4 < x07eo && _xymq[0x4][0x0], _xymq = _xymq[x07eo - 0x1], eop7['startDTD'](y_mh, tc49 && tc49['replace'](/^(['"])(.*?)\1$/, '$2'), yex0_q && yex0_q['replace'](/^(['"])(.*?)\1$/, '$2')), eop7['endDTD'](), _xymq['index'] + _xymq[0x0]['length']) : -0x1;
}function t$vpfdz(e0, gabjn, ng368) {
  var qezo7f = e0['indexOf']('?>', gabjn);return qezo7f && (e0 = e0['substring'](gabjn, qezo7f)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (e0[0x0]['length'], ng368['processingInstruction'](e0[0x1], e0[0x2]), qezo7f + 0x2) : -0x1;
}function tjbrgna() {}function tp9dvi$(asbr, uakbjs) {
  return asbr['__proto__'] = uakbjs, asbr;
}function trsbkj(fp$zd7, vt29i) {
  var gra,
      yexo0q = [],
      o7e0z = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (o7e0z['lastIndex'] = vt29i, o7e0z['exec'](fp$zd7); gra = o7e0z['exec'](fp$zd7);) if (yexo0q['push'](gra), gra[0x1]) return yexo0q;
}var t_mh0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tf7oeqz = new RegExp('[\\-\\.0-9' + t_mh0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tw15683 = new RegExp('^' + t_mh0['source'] + tf7oeqz['source'] + '*(?::' + t_mh0['source'] + tf7oeqz['source'] + '*)?$'),
    tgrakjb = 0x0,
    tv9t$ic = 0x1,
    tubjas = 0x2,
    tdf7zpo = 0x3,
    t$vti9 = 0x4,
    tabg = 0x5,
    td$p7z = 0x6,
    tq0xeyo = 0x7;th_0my['prototype'] = { 'parse': function ($fvpd, _eyqx0, w861h5) {
    var ipd9v = this['domBuilder'];ipd9v['startDocument'](), tvf9pd(_eyqx0, _eyqx0 = {}), tgr813n($fvpd, _eyqx0, w861h5, ipd9v, this['errorHandler']), ipd9v['endDocument']();
  } }, tjbrgna['prototype'] = { 'setTagName': function (mh_y) {
    if (!tw15683['test'](mh_y)) throw new Error('invalid tagName:' + mh_y);this['tagName'] = mh_y;
  }, 'add': function (p$z, qx_my0, jbn3) {
    if (!tw15683['test'](p$z)) throw new Error('invalid attribute:' + p$z);this[this['length']++] = { 'qName': p$z, 'value': qx_my0, 'offset': jbn3 };
  }, 'length': 0x0, 'getLocalName': function (tc49i2) {
    return this[tc49i2]['localName'];
  }, 'getLocator': function (w61mh5) {
    return this[w61mh5]['locator'];
  }, 'getQName': function (brkja) {
    return this[brkja]['qName'];
  }, 'getURI': function (xy_h0) {
    return this[xy_h0]['uri'];
  }, 'getValue': function (bauj) {
    return this[bauj]['value'];
  } }, tp9dvi$({}, tp9dvi$['prototype']) instanceof tp9dvi$ || (tp9dvi$ = function (cv29t, hx_0ym) {
  function grja() {}for (hx_0ym in grja['prototype'] = hx_0ym, grja = new grja(), cv29t) grja[hx_0ym] = cv29t[hx_0ym];return grja;
}), exports['XMLReader'] = th_0my;