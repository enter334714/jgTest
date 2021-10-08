function gyr10ji() {}function gpwqoet(upbo3, g89hl, g$ji61, _6gh, kf7sx) {
  function ma4c52(tqwo8e) {
    var vuzb3 = tqwo8e['slice'](0x1, -0x1);return vuzb3 in g$ji61 ? g$ji61[vuzb3] : '#' === vuzb3['charAt'](0x0) ? 0xffff < (vuzb3 = parseInt(vuzb3['substr'](0x1)['replace']('x', '0x'))) ? (vuzb3 -= 0x10000, String['fromCharCode'](0xd800 + (vuzb3 >> 0xa), 0xdc00 + (0x3ff & vuzb3))) : String['fromCharCode'](vuzb3) : (kf7sx['error']('entity not found:' + tqwo8e), tqwo8e);
  }function q8t(we89l_) {
    var _$gj6;hg$_9 < we89l_ && (_$gj6 = upbo3['substring'](hg$_9, we89l_)['replace'](/&#?\w+;/g, ma4c52), h9_6gl && r$y1ij(hg$_9), _6gh['characters'](_$gj6, 0x0, we89l_ - hg$_9), hg$_9 = we89l_);
  }function r$y1ij(ptwqvo, _$gh69) {
    for (; ptvob <= ptwqvo && (_$gh69 = r$jyi1['exec'](upbo3));) zb73uv = _$gh69['index'], ptvob = zb73uv + _$gh69[0x0]['length'], h9_6gl['lineNumber']++;h9_6gl['columnNumber'] = ptwqvo - zb73uv + 0x1;
  }for (var zb73uv = 0x0, ptvob = 0x0, r$jyi1 = /.*(?:\r\n?|\n)|.*$/g, h9_6gl = _6gh['locator'], a5024m = [{ 'currentNSMap': g89hl }], e8wt = {}, hg$_9 = 0x0;;) {
    try {
      var $ih6j = upbo3['indexOf']('<', hg$_9),
          dkfx,
          lwe89_;if ($ih6j < 0x0) return void (upbo3['substr'](hg$_9)['match'](/^\s*$/) || (lwe89_ = (dkfx = _6gh['doc'])['createTextNode'](upbo3['substr'](hg$_9)), dkfx['appendChild'](lwe89_), _6gh['currentElement'] = lwe89_));switch (hg$_9 < $ih6j && q8t($ih6j), upbo3['charAt']($ih6j + 0x1)) {case '/':
          var _98ghl = upbo3['indexOf']('>', $ih6j + 0x3),
              hl6 = upbo3['substring']($ih6j + 0x2, _98ghl),
              qet8wl = a5024m['pop']();_98ghl < 0x0 ? (hl6 = upbo3['substring']($ih6j + 0x2)['replace'](/[\s<].*/, ''), kf7sx['error']('end tag name: ' + hl6 + ' is not complete:' + qet8wl['tagName']), _98ghl = $ih6j + 0x1 + hl6['length']) : hl6['match'](/\s</) && (hl6 = hl6['replace'](/[\s<].*/, ''), kf7sx['error']('end tag name: ' + hl6 + ' maybe not complete'), _98ghl = $ih6j + 0x1 + hl6['length']);var owtvp = qet8wl['localNSMap'],
              vtqo = qet8wl['tagName'] == hl6;if (vtqo || qet8wl['tagName'] && qet8wl['tagName']['toLowerCase']() == hl6['toLowerCase']()) {
            if (_6gh['endElement'](qet8wl['uri'], qet8wl['localName'], hl6), owtvp) {
              for (var _g6hj$ in owtvp) _6gh['endPrefixMapping'](_g6hj$);
            }vtqo || kf7sx['fatalError']('end tag name: ' + hl6 + ' is not match the current start tagName:' + qet8wl['tagName']);
          } else a5024m['push'](qet8wl);_98ghl++;break;case '?':
          h9_6gl && r$y1ij($ih6j), _98ghl = gsxkz7(upbo3, $ih6j, _6gh);break;case '!':
          h9_6gl && r$y1ij($ih6j), _98ghl = gbzu73x(upbo3, $ih6j, _6gh, kf7sx);break;default:
          h9_6gl && r$y1ij($ih6j);var ovb = new gq9ewl(),
              ovb3pt = a5024m[a5024m['length'] - 0x1]['currentNSMap'],
              _98ghl = gray540(upbo3, $ih6j, ovb, ovb3pt, ma4c52, kf7sx),
              qopvb = ovb['length'];if (!ovb['closed'] && grji1y0(upbo3, _98ghl, ovb['tagName'], e8wt) && (ovb['closed'] = !0x0, g$ji61['nbsp'] || kf7sx['warning']('unclosed xml attribute')), h9_6gl && qopvb) {
            for (var votbp3 = gvoqt(h9_6gl, {}), $hg6_j = 0x0; $hg6_j < qopvb; $hg6_j++) {
              var igh6j = ovb[$hg6_j];r$y1ij(igh6j['offset']), igh6j['locator'] = gvoqt(h9_6gl, {});
            }_6gh['locator'] = votbp3, gh8l_e(ovb, _6gh, ovb3pt) && a5024m['push'](ovb), _6gh['locator'] = h9_6gl;
          } else gh8l_e(ovb, _6gh, ovb3pt) && a5024m['push'](ovb);'http://www.w3.org/1999/xhtml' !== ovb['uri'] || ovb['closed'] ? _98ghl++ : _98ghl = gg9_(upbo3, _98ghl, ovb['tagName'], ma4c52, _6gh);}
    } catch (ay524) {
      kf7sx['error']('element parse error: ' + ay524), _98ghl = -0x1;
    }hg$_9 < _98ghl ? hg$_9 = _98ghl : q8t(Math['max']($ih6j, hg$_9) + 0x1);
  }
}function gvoqt(ij$6r1, w89eql) {
  return w89eql['lineNumber'] = ij$6r1['lineNumber'], w89eql['columnNumber'] = ij$6r1['columnNumber'], w89eql;
}function gray540(hg6_l, a01y, kzfsxd, zxub7, v3tpb, a4m02) {
  for (var qwovpt, $1yjri = ++a01y, y1a0i = gqopewt;;) {
    var a0iyr1 = hg6_l['charAt']($1yjri);switch (a0iyr1) {case '=':
        if (y1a0i === gowep) qwovpt = hg6_l['slice'](a01y, $1yjri), y1a0i = gl9g8_h;else {
          if (y1a0i !== g$jgh) throw new Error('attribute equal must after attrName');y1a0i = gl9g8_h;
        }break;case '\x27':case '\x22':
        if (y1a0i === gl9g8_h || y1a0i === gowep) {
          if (y1a0i === gowep && (a4m02['warning']('attribute value must after "="'), qwovpt = hg6_l['slice'](a01y, $1yjri)), !(0x0 < ($1yjri = hg6_l['indexOf'](a0iyr1, a01y = $1yjri + 0x1)))) throw new Error('attribute value no end \'' + a0iyr1 + '\' match');lw8e9q = hg6_l['slice'](a01y, $1yjri)['replace'](/&#?\w+;/g, v3tpb), kzfsxd['add'](qwovpt, lw8e9q, a01y - 0x1), y1a0i = ga1yri;
        } else {
          if (y1a0i != ghi6g$j) throw new Error('attribute value must after "="');lw8e9q = hg6_l['slice'](a01y, $1yjri)['replace'](/&#?\w+;/g, v3tpb), kzfsxd['add'](qwovpt, lw8e9q, a01y), a4m02['warning']('attribute "' + qwovpt + '" missed start quot(' + a0iyr1 + ')!!'), a01y = $1yjri + 0x1, y1a0i = ga1yri;
        }break;case '/':
        switch (y1a0i) {case gqopewt:
            kzfsxd['setTagName'](hg6_l['slice'](a01y, $1yjri));case ga1yri:case gqoe8wt:case gpu73:
            y1a0i = gpu73, kzfsxd['closed'] = !0x0;case ghi6g$j:case gowep:case g$jgh:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return a4m02['error']('unexpected end of input'), y1a0i == gqopewt && kzfsxd['setTagName'](hg6_l['slice'](a01y, $1yjri)), $1yjri;case '>':
        switch (y1a0i) {case gqopewt:
            kzfsxd['setTagName'](hg6_l['slice'](a01y, $1yjri));case ga1yri:case gqoe8wt:case gpu73:
            break;case ghi6g$j:case gowep:
            '/' === (lw8e9q = hg6_l['slice'](a01y, $1yjri))['slice'](-0x1) && (kzfsxd['closed'] = !0x0, lw8e9q = lw8e9q['slice'](0x0, -0x1));case g$jgh:
            y1a0i === g$jgh && (lw8e9q = qwovpt), y1a0i == ghi6g$j ? (a4m02['warning']('attribute "' + lw8e9q + '" missed quot(")!!'), kzfsxd['add'](qwovpt, lw8e9q['replace'](/&#?\w+;/g, v3tpb), a01y)) : ('http://www.w3.org/1999/xhtml' === zxub7[''] && lw8e9q['match'](/^(?:disabled|checked|selected)$/i) || a4m02['warning']('attribute "' + lw8e9q + '" missed value!! "' + lw8e9q + '" instead!!'), kzfsxd['add'](lw8e9q, lw8e9q, a01y));break;case gl9g8_h:
            throw new Error('attribute value missed!!');}return $1yjri;case '\u0080':
        a0iyr1 = '\x20';default:
        if (a0iyr1 <= '\x20') switch (y1a0i) {case gqopewt:
            kzfsxd['setTagName'](hg6_l['slice'](a01y, $1yjri)), y1a0i = gqoe8wt;break;case gowep:
            qwovpt = hg6_l['slice'](a01y, $1yjri), y1a0i = g$jgh;break;case ghi6g$j:
            var lw8e9q = hg6_l['slice'](a01y, $1yjri)['replace'](/&#?\w+;/g, v3tpb);a4m02['warning']('attribute "' + lw8e9q + '" missed quot(")!!'), kzfsxd['add'](qwovpt, lw8e9q, a01y);case ga1yri:
            y1a0i = gqoe8wt;} else switch (y1a0i) {case g$jgh:
            kzfsxd['tagName'], 'http://www.w3.org/1999/xhtml' === zxub7[''] && qwovpt['match'](/^(?:disabled|checked|selected)$/i) || a4m02['warning']('attribute "' + qwovpt + '" missed value!! "' + qwovpt + '" instead2!!'), kzfsxd['add'](qwovpt, qwovpt, a01y), a01y = $1yjri, y1a0i = gowep;break;case ga1yri:
            a4m02['warning']('attribute space is required"' + qwovpt + '\x22!!');case gqoe8wt:
            y1a0i = gowep, a01y = $1yjri;break;case gl9g8_h:
            y1a0i = ghi6g$j, a01y = $1yjri;break;case gpu73:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$1yjri++;
  }
}function gh8l_e(mca254, i6gh, buz3) {
  for (var a45y0r = mca254['tagName'], up3o = null, kxdsfz = mca254['length']; kxdsfz--;) {
    var _9el8 = mca254[kxdsfz],
        sdfz = _9el8['qName'],
        hl_8g9 = _9el8['value'],
        ca54m;sdfz = 0x0 < (u3vz = sdfz['indexOf'](':')) ? (qwo8e = _9el8['prefix'] = sdfz['slice'](0x0, u3vz), ca54m = sdfz['slice'](u3vz + 0x1), 'xmlns' === qwo8e && ca54m) : (qwo8e = null, 'xmlns' === (ca54m = sdfz) && ''), _9el8['localName'] = ca54m, !0x1 !== sdfz && (null == up3o && (up3o = {}, gwqopet(buz3, buz3 = {})), buz3[sdfz] = up3o[sdfz] = hl_8g9, _9el8['uri'] = 'http://www.w3.org/2000/xmlns/', i6gh['startPrefixMapping'](sdfz, hl_8g9));
  }for (kxdsfz = mca254['length']; kxdsfz--;) (qwo8e = (_9el8 = mca254[kxdsfz])['prefix']) && ('xml' === qwo8e && (_9el8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qwo8e && (_9el8['uri'] = buz3[qwo8e || '']));var u3vz;ca54m = 0x0 < (u3vz = a45y0r['indexOf'](':')) ? (qwo8e = mca254['prefix'] = a45y0r['slice'](0x0, u3vz), mca254['localName'] = a45y0r['slice'](u3vz + 0x1)) : (qwo8e = null, mca254['localName'] = a45y0r);var el8_9w = mca254['uri'] = buz3[qwo8e || ''];if (i6gh['startElement'](el8_9w, ca54m, a45y0r, mca254), !mca254['closed']) return mca254['currentNSMap'] = buz3, mca254['localNSMap'] = up3o, !0x0;if (i6gh['endElement'](el8_9w, ca54m, a45y0r), up3o) {
    for (var qwo8e in up3o) i6gh['endPrefixMapping'](qwo8e);
  }
}function gg9_(am0524, g69_$, lte, pbu7v3, ub37) {
  if (/^(?:script|textarea)$/i['test'](lte)) {
    var ma204 = am0524['indexOf']('</' + lte + '>', g69_$),
        am0524 = am0524['substring'](g69_$ + 0x1, ma204);if (/[&<]/['test'](am0524)) return (/^script$/i['test'](lte) || (am0524 = am0524['replace'](/&#?\w+;/g, pbu7v3)), ub37['characters'](am0524, 0x0, am0524['length']), ma204
    );
  }return g69_$ + 0x1;
}function grji1y0($jh6g, ijy0, uob, dfszxk) {
  var xksf7 = dfszxk[uob];return null == xksf7 && ((xksf7 = $jh6g['lastIndexOf']('</' + uob + '>')) < ijy0 && (xksf7 = $jh6g['lastIndexOf']('</' + uob)), dfszxk[uob] = xksf7), xksf7 < ijy0;
}function gwqopet($hg6j, _g9$6h) {
  for (var lqtwe in $hg6j) _g9$6h[lqtwe] = $hg6j[lqtwe];
}function gbzu73x(vup, a5m2c, elh8_9, g9$_h) {
  var _e8lw = vup['charAt'](a5m2c + 0x2);if ('-' === _e8lw) return '-' !== vup['charAt'](a5m2c + 0x3) ? -0x1 : a5m2c < (eoqwt = vup['indexOf']('-->', a5m2c + 0x4)) ? (elh8_9['comment'](vup, a5m2c + 0x4, eoqwt - a5m2c - 0x4), eoqwt + 0x3) : (g9$_h['error']('Unclosed comment'), -0x1);if ('CDATA[' == vup['substr'](a5m2c + 0x3, 0x6)) {
    var eoqwt = vup['indexOf'](']]>', a5m2c + 0x9);return elh8_9['startCDATA'](), elh8_9['characters'](vup, a5m2c + 0x9, eoqwt - a5m2c - 0x9), elh8_9['endCDATA'](), eoqwt + 0x3;
  }_e8lw = gqw8oet(vup, a5m2c), g9$_h = _e8lw['length'];if (0x1 < g9$_h && /!doctype/i['test'](_e8lw[0x0][0x0])) return eoqwt = _e8lw[0x1][0x0], vup = 0x3 < g9$_h && /^public$/i['test'](_e8lw[0x2][0x0]) && _e8lw[0x3][0x0], a5m2c = 0x4 < g9$_h && _e8lw[0x4][0x0], g9$_h = _e8lw[g9$_h - 0x1], (elh8_9['startDTD'](eoqwt, vup && vup['replace'](/^(['"])(.*?)\1$/, '$2'), a5m2c && a5m2c['replace'](/^(['"])(.*?)\1$/, '$2')), elh8_9['endDTD'](), g9$_h['index'] + g9$_h[0x0]['length']);return -0x1;
}function gsxkz7(g$hij6, zxskf, $jir1) {
  var j1gi6$ = g$hij6['indexOf']('?>', zxskf);if (j1gi6$) return zxskf = g$hij6['substring'](zxskf, j1gi6$)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), zxskf ? (zxskf[0x0]['length'], $jir1['processingInstruction'](zxskf[0x1], zxskf[0x2]), j1gi6$ + 0x2) : -0x1;return -0x1;
}function gq9ewl() {}function gvuop(u7xs, y0a254) {
  return u7xs['__proto__'] = y0a254, u7xs;
}function gqw8oet(e8qotw, ca524m) {
  var xuksz7,
      r5ya0 = [],
      xsdfzk = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (xsdfzk['lastIndex'] = ca524m, xsdfzk['exec'](e8qotw); xuksz7 = xsdfzk['exec'](e8qotw);) if (r5ya0['push'](xuksz7), xuksz7[0x1]) return r5ya0;
}var gtoep = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gtpwqvo = new RegExp('[\\-\\.0-9' + gtoep['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gqoew8 = new RegExp('^' + gtoep['source'] + gtpwqvo['source'] + '*(?::' + gtoep['source'] + gtpwqvo['source'] + '*)?$'),
    gqopewt = 0x0,
    gowep = 0x1,
    g$jgh = 0x2,
    gl9g8_h = 0x3,
    ghi6g$j = 0x4,
    ga1yri = 0x5,
    gqoe8wt = 0x6,
    gpu73 = 0x7;gyr10ji['prototype'] = { 'parse': function (r$j16i, y0ji1r, $hgi6) {
    var toewq = this['domBuilder'];toewq['startDocument'](), gwqopet(y0ji1r, y0ji1r = {}), gpwqoet(r$j16i, y0ji1r, $hgi6, toewq, this['errorHandler']), toewq['endDocument']();
  } }, gq9ewl['prototype'] = { 'setTagName': function (y04a52) {
    if (!gqoew8['test'](y04a52)) throw new Error('invalid tagName:' + y04a52);this['tagName'] = y04a52;
  }, 'add': function (voqtbp, xukz7s, lqwe8) {
    if (!gqoew8['test'](voqtbp)) throw new Error('invalid attribute:' + voqtbp);this[this['length']++] = { 'qName': voqtbp, 'value': xukz7s, 'offset': lqwe8 };
  }, 'length': 0x0, 'getLocalName': function (b3vtpo) {
    return this[b3vtpo]['localName'];
  }, 'getLocator': function (z7xbu3) {
    return this[z7xbu3]['locator'];
  }, 'getQName': function (ptovqb) {
    return this[ptovqb]['qName'];
  }, 'getURI': function (kxfzs7) {
    return this[kxfzs7]['uri'];
  }, 'getValue': function (qwpto) {
    return this[qwpto]['value'];
  } }, gvuop({}, gvuop['prototype']) instanceof gvuop || (gvuop = function (g_hj, ow8teq) {
  function ya4r05() {}for (ow8teq in ya4r05['prototype'] = ow8teq, ya4r05 = new ya4r05(), g_hj) ya4r05[ow8teq] = g_hj[ow8teq];return ya4r05;
}), exports['XMLReader'] = gyr10ji;