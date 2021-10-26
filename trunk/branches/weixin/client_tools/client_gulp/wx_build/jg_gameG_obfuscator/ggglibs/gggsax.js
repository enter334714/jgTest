var m = wx.$g;
function grbtk() {}function gs0c4x(tr1bvp, pr1av, sc2, l$qg, gqol3e) {
  function y90jd7(xj02y4) {
    if (xj02y4 > 0xffff) {
      xj02y4 -= 0x10000;var pbt18 = 0xd800 + (xj02y4 >> 0xa),
          v1br = 0xdc00 + (0x3ff & xj02y4);return String['fromCharCode'](pbt18, v1br);
    }return String['fromCharCode'](xj02y4);
  }function fwm6z(kd7j_) {
    var j24y0 = kd7j_['slice'](0x1, -0x1);return j24y0 in sc2 ? sc2[j24y0] : '#' === j24y0['charAt'](0x0) ? y90jd7(parseInt(j24y0['substr'](0x1)['replace']('x', '0x'))) : (gqol3e['error']('entity not found:' + kd7j_), kd7j_);
  }function $h6lfw(_9kj7) {
    if (_9kj7 > qeg) {
      var e3goql = tr1bvp['substring'](qeg, _9kj7)['replace'](/&#?\w+;/g, fwm6z);g3sqc5 && lh$wf6(qeg), l$qg['characters'](e3goql, 0x0, _9kj7 - qeg), qeg = _9kj7;
    }
  }function lh$wf6(qoel3, gl$oef) {
    for (; qoel3 >= gq5e && (gl$oef = sc5qg3['exec'](tr1bvp));) q3sc5g = gl$oef['index'], gq5e = q3sc5g + gl$oef[0x0]['length'], g3sqc5['lineNumber']++;g3sqc5['columnNumber'] = qoel3 - q3sc5g + 0x1;
  }for (var q3sc5g = 0x0, gq5e = 0x0, sc5qg3 = /.*(?:\r\n?|\n)|.*$/g, g3sqc5 = l$qg['locator'], avr = [{ 'currentNSMap': pr1av }], k98_t = {}, qeg = 0x0;;) {
    try {
      var tkbp8r = tr1bvp['indexOf']('<', qeg);if (0x0 > tkbp8r) {
        if (!tr1bvp['substr'](qeg)['match'](/^\s*$/)) {
          var u6hzmw = l$qg['doc'],
              e3loq = u6hzmw['createTextNode'](tr1bvp['substr'](qeg));u6hzmw['appendChild'](e3loq), l$qg['currentElement'] = e3loq;
        }return;
      }switch (tkbp8r > qeg && $h6lfw(tkbp8r), tr1bvp['charAt'](tkbp8r + 0x1)) {case '/':
          var pkbr8 = tr1bvp['indexOf']('>', tkbp8r + 0x3),
              g$oqe = tr1bvp['substring'](tkbp8r + 0x2, pkbr8),
              l$hf6 = avr['pop']();0x0 > pkbr8 ? (g$oqe = tr1bvp['substring'](tkbp8r + 0x2)['replace'](/[\s<].*/, ''), gqol3e['error']('end tag name: ' + g$oqe + ' is not complete:' + l$hf6['tagName']), pkbr8 = tkbp8r + 0x1 + g$oqe['length']) : g$oqe['match'](/\s</) && (g$oqe = g$oqe['replace'](/[\s<].*/, ''), gqol3e['error']('end tag name: ' + g$oqe + ' maybe not complete'), pkbr8 = tkbp8r + 0x1 + g$oqe['length']);var lf6h$w = l$hf6['localNSMap'],
              qcs35 = l$hf6['tagName'] == g$oqe,
              _jd7k = qcs35 || l$hf6['tagName'] && l$hf6['tagName']['toLowerCase']() == g$oqe['toLowerCase']();if (_jd7k) {
            if (l$qg['endElement'](l$hf6['uri'], l$hf6['localName'], g$oqe), lf6h$w) {
              for (var _7j9yd in lf6h$w) l$qg['endPrefixMapping'](_7j9yd);
            }qcs35 || gqol3e['fatalError']('end tag name: ' + g$oqe + ' is not match the current start tagName:' + l$hf6['tagName']);
          } else avr['push'](l$hf6);pkbr8++;break;case '?':
          g3sqc5 && lh$wf6(tkbp8r), pkbr8 = gkr87_t(tr1bvp, tkbp8r, l$qg);break;case '!':
          g3sqc5 && lh$wf6(tkbp8r), pkbr8 = gf$ogl(tr1bvp, tkbp8r, l$qg, gqol3e);break;default:
          g3sqc5 && lh$wf6(tkbp8r);var q5scx3 = new g$hlf6w(),
              uw6mh = avr[avr['length'] - 0x1]['currentNSMap'],
              pkbr8 = grvt1p(tr1bvp, tkbp8r, q5scx3, uw6mh, fwm6z, gqol3e),
              olef$ = q5scx3['length'];if (!q5scx3['closed'] && grtpbv1(tr1bvp, pkbr8, q5scx3['tagName'], k98_t) && (q5scx3['closed'] = !0x0, sc2['nbsp'] || gqol3e['warning']('unclosed xml attribute')), g3sqc5 && olef$) {
            for (var x4j0 = ge$lg(g3sqc5, {}), _t987 = 0x0; olef$ > _t987; _t987++) {
              var lohef$ = q5scx3[_t987];lh$wf6(lohef$['offset']), lohef$['locator'] = ge$lg(g3sqc5, {});
            }l$qg['locator'] = x4j0, gm$6fwh(q5scx3, l$qg, uw6mh) && avr['push'](q5scx3), l$qg['locator'] = g3sqc5;
          } else gm$6fwh(q5scx3, l$qg, uw6mh) && avr['push'](q5scx3);'http://www.w3.org/1999/xhtml' !== q5scx3['uri'] || q5scx3['closed'] ? pkbr8++ : pkbr8 = grbpt1v(tr1bvp, pkbr8, q5scx3['tagName'], fwm6z, l$qg);}
    } catch (xy02c4) {
      gqol3e['error']('element parse error: ' + xy02c4), pkbr8 = -0x1;
    }pkbr8 > qeg ? qeg = pkbr8 : $h6lfw(Math['max'](tkbp8r, qeg) + 0x1);
  }
}function ge$lg(h$mwf, $6l) {
  return $6l['lineNumber'] = h$mwf['lineNumber'], $6l['columnNumber'] = h$mwf['columnNumber'], $6l;
}function grvt1p(s02c, yjx2, owfhl, d29yj0, fg$le, qgleo3) {
  for (var l6$wh, q5g3o, rpvb1 = ++yjx2, krtb = g_r;;) {
    var rbp1vt = s02c['charAt'](rpvb1);switch (rbp1vt) {case '=':
        if (krtb === gm6h$f) l6$wh = s02c['slice'](yjx2, rpvb1), krtb = grt_8;else {
          if (krtb !== gk98_7) throw new Error('attribute equal must after attrName');krtb = grt_8;
        }break;case '\x27':case '\x22':
        if (krtb === grt_8 || krtb === gm6h$f) {
          if (krtb === gm6h$f && (qgleo3['warning']('attribute value must after "="'), l6$wh = s02c['slice'](yjx2, rpvb1)), yjx2 = rpvb1 + 0x1, rpvb1 = s02c['indexOf'](rbp1vt, yjx2), !(rpvb1 > 0x0)) throw new Error('attribute value no end \'' + rbp1vt + '\' match');q5g3o = s02c['slice'](yjx2, rpvb1)['replace'](/&#?\w+;/g, fg$le), owfhl['add'](l6$wh, q5g3o, yjx2 - 0x1), krtb = gof$e;
        } else {
          if (krtb != gip1) throw new Error('attribute value must after "="');q5g3o = s02c['slice'](yjx2, rpvb1)['replace'](/&#?\w+;/g, fg$le), owfhl['add'](l6$wh, q5g3o, yjx2), qgleo3['warning']('attribute "' + l6$wh + '" missed start quot(' + rbp1vt + ')!!'), yjx2 = rpvb1 + 0x1, krtb = gof$e;
        }break;case '/':
        switch (krtb) {case g_r:
            owfhl['setTagName'](s02c['slice'](yjx2, rpvb1));case gof$e:case glw$h6f:case ghw6$f:
            krtb = ghw6$f, owfhl['closed'] = !0x0;case gip1:case gm6h$f:case gk98_7:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qgleo3['error']('unexpected end of input'), krtb == g_r && owfhl['setTagName'](s02c['slice'](yjx2, rpvb1)), rpvb1;case '>':
        switch (krtb) {case g_r:
            owfhl['setTagName'](s02c['slice'](yjx2, rpvb1));case gof$e:case glw$h6f:case ghw6$f:
            break;case gip1:case gm6h$f:
            q5g3o = s02c['slice'](yjx2, rpvb1), '/' === q5g3o['slice'](-0x1) && (owfhl['closed'] = !0x0, q5g3o = q5g3o['slice'](0x0, -0x1));case gk98_7:
            krtb === gk98_7 && (q5g3o = l6$wh), krtb == gip1 ? (qgleo3['warning']('attribute "' + q5g3o + '" missed quot(")!!'), owfhl['add'](l6$wh, q5g3o['replace'](/&#?\w+;/g, fg$le), yjx2)) : ('http://www.w3.org/1999/xhtml' === d29yj0[''] && q5g3o['match'](/^(?:disabled|checked|selected)$/i) || qgleo3['warning']('attribute "' + q5g3o + '" missed value!! "' + q5g3o + '" instead!!'), owfhl['add'](q5g3o, q5g3o, yjx2));break;case grt_8:
            throw new Error('attribute value missed!!');}return rpvb1;case '\u0080':
        rbp1vt = '\x20';default:
        if ('\x20' >= rbp1vt) switch (krtb) {case g_r:
            owfhl['setTagName'](s02c['slice'](yjx2, rpvb1)), krtb = glw$h6f;break;case gm6h$f:
            l6$wh = s02c['slice'](yjx2, rpvb1), krtb = gk98_7;break;case gip1:
            var q5g3o = s02c['slice'](yjx2, rpvb1)['replace'](/&#?\w+;/g, fg$le);qgleo3['warning']('attribute "' + q5g3o + '" missed quot(")!!'), owfhl['add'](l6$wh, q5g3o, yjx2);case gof$e:
            krtb = glw$h6f;} else switch (krtb) {case gk98_7:
            {
              owfhl['tagName'];
            }'http://www.w3.org/1999/xhtml' === d29yj0[''] && l6$wh['match'](/^(?:disabled|checked|selected)$/i) || qgleo3['warning']('attribute "' + l6$wh + '" missed value!! "' + l6$wh + '" instead2!!'), owfhl['add'](l6$wh, l6$wh, yjx2), yjx2 = rpvb1, krtb = gm6h$f;break;case gof$e:
            qgleo3['warning']('attribute space is required"' + l6$wh + '\x22!!');case glw$h6f:
            krtb = gm6h$f, yjx2 = rpvb1;break;case grt_8:
            krtb = gip1, yjx2 = rpvb1;break;case ghw6$f:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}rpvb1++;
  }
}function gm$6fwh(prvbt1, brp, ydj90) {
  for (var avbi1 = prvbt1['tagName'], tbv1rp = null, s3qc = prvbt1['length']; s3qc--;) {
    var lf6hw = prvbt1[s3qc],
        ab1piv = lf6hw['qName'],
        m$6hw = lf6hw['value'],
        $wlhf6 = ab1piv['indexOf'](':');if ($wlhf6 > 0x0) var goq3e = lf6hw['prefix'] = ab1piv['slice'](0x0, $wlhf6),
        h6wum = ab1piv['slice']($wlhf6 + 0x1),
        rtp1v = 'xmlns' === goq3e && h6wum;else h6wum = ab1piv, goq3e = null, rtp1v = 'xmlns' === ab1piv && '';lf6hw['localName'] = h6wum, rtp1v !== !0x1 && (null == tbv1rp && (tbv1rp = {}, gt18(ydj90, ydj90 = {})), ydj90[rtp1v] = tbv1rp[rtp1v] = m$6hw, lf6hw['uri'] = 'http://www.w3.org/2000/xmlns/', brp['startPrefixMapping'](rtp1v, m$6hw));
  }for (var s3qc = prvbt1['length']; s3qc--;) {
    lf6hw = prvbt1[s3qc];var goq3e = lf6hw['prefix'];goq3e && ('xml' === goq3e && (lf6hw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== goq3e && (lf6hw['uri'] = ydj90[goq3e || '']));
  }var $wlhf6 = avbi1['indexOf'](':');$wlhf6 > 0x0 ? (goq3e = prvbt1['prefix'] = avbi1['slice'](0x0, $wlhf6), h6wum = prvbt1['localName'] = avbi1['slice']($wlhf6 + 0x1)) : (goq3e = null, h6wum = prvbt1['localName'] = avbi1);var lhfeo = prvbt1['uri'] = ydj90[goq3e || ''];if (brp['startElement'](lhfeo, h6wum, avbi1, prvbt1), !prvbt1['closed']) return prvbt1['currentNSMap'] = ydj90, prvbt1['localNSMap'] = tbv1rp, !0x0;if (brp['endElement'](lhfeo, h6wum, avbi1), tbv1rp) {
    for (goq3e in tbv1rp) brp['endPrefixMapping'](goq3e);
  }
}function grbpt1v(lef$o, $flheo, x54s3c, hzw6u, bp1vt) {
  if (/^(?:script|textarea)$/i['test'](x54s3c)) {
    var g3qel = lef$o['indexOf']('</' + x54s3c + '>', $flheo),
        tvr1p = lef$o['substring']($flheo + 0x1, g3qel);if (/[&<]/['test'](tvr1p)) return (/^script$/i['test'](x54s3c) ? (bp1vt['characters'](tvr1p, 0x0, tvr1p['length']), g3qel) : (tvr1p = tvr1p['replace'](/&#?\w+;/g, hzw6u), bp1vt['characters'](tvr1p, 0x0, tvr1p['length']), g3qel)
    );
  }return $flheo + 0x1;
}function grtpbv1(sqg5e, _8t9, mw6f, _9k7j) {
  var t_89 = _9k7j[mw6f];return null == t_89 && (t_89 = sqg5e['lastIndexOf']('</' + mw6f + '>'), _8t9 > t_89 && (t_89 = sqg5e['lastIndexOf']('</' + mw6f)), _9k7j[mw6f] = t_89), _8t9 > t_89;
}function gt18(_j7y9, xc04s2) {
  for (var k78t9 in _j7y9) xc04s2[k78t9] = _j7y9[k78t9];
}function gf$ogl(csq35x, dj92y, xy02c, y7_9jd) {
  var _djy97 = csq35x['charAt'](dj92y + 0x2);switch (_djy97) {case '-':
      if ('-' === csq35x['charAt'](dj92y + 0x3)) {
        var r7_t8k = csq35x['indexOf']('-->', dj92y + 0x4);return r7_t8k > dj92y ? (xy02c['comment'](csq35x, dj92y + 0x4, r7_t8k - dj92y - 0x4), r7_t8k + 0x3) : (y7_9jd['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == csq35x['substr'](dj92y + 0x3, 0x6)) {
        var r7_t8k = csq35x['indexOf'](']]>', dj92y + 0x9);return xy02c['startCDATA'](), xy02c['characters'](csq35x, dj92y + 0x9, r7_t8k - dj92y - 0x9), xy02c['endCDATA'](), r7_t8k + 0x3;
      }var s204c = gr_t87(csq35x, dj92y),
          j024dy = s204c['length'];if (j024dy > 0x1 && /!doctype/i['test'](s204c[0x0][0x0])) {
        var d_k7 = s204c[0x1][0x0],
            kr8bpt = j024dy > 0x3 && /^public$/i['test'](s204c[0x2][0x0]) && s204c[0x3][0x0],
            bapr = j024dy > 0x4 && s204c[0x4][0x0],
            gq3elo = s204c[j024dy - 0x1];return xy02c['startDTD'](d_k7, kr8bpt && kr8bpt['replace'](/^(['"])(.*?)\1$/, '$2'), bapr && bapr['replace'](/^(['"])(.*?)\1$/, '$2')), xy02c['endDTD'](), gq3elo['index'] + gq3elo[0x0]['length'];
      }}return -0x1;
}function gkr87_t(dj7_9k, v1bpa, gelf) {
  var ptvb1r = dj7_9k['indexOf']('?>', v1bpa);if (ptvb1r) {
    var sq53x = dj7_9k['substring'](v1bpa, ptvb1r)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (sq53x) {
      {
        sq53x[0x0]['length'];
      }return gelf['processingInstruction'](sq53x[0x1], sq53x[0x2]), ptvb1r + 0x2;
    }return -0x1;
  }return -0x1;
}function g$hlf6w() {}function gkbtrp8(j2y0d9, $w6fhl) {
  return j2y0d9['__proto__'] = $w6fhl, j2y0d9;
}function gr_t87(oe3l, lhw) {
  var apbvr1,
      d7y_9j = [],
      k78r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (k78r['lastIndex'] = lhw, k78r['exec'](oe3l); apbvr1 = k78r['exec'](oe3l);) if (d7y_9j['push'](apbvr1), apbvr1[0x1]) return d7y_9j;
}var gvia1bp = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ggf$loe = new RegExp('[\\-\\.0-9' + gvia1bp['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    g_kjd = new RegExp('^' + gvia1bp['source'] + ggf$loe['source'] + '*(?::' + gvia1bp['source'] + ggf$loe['source'] + '*)?$'),
    g_r = 0x0,
    gm6h$f = 0x1,
    gk98_7 = 0x2,
    grt_8 = 0x3,
    gip1 = 0x4,
    gof$e = 0x5,
    glw$h6f = 0x6,
    ghw6$f = 0x7;grbtk['prototype'] = { 'parse': function ($heof, tbpv1, h6wmf) {
    var ba1rv = this['domBuilder'];ba1rv['startDocument'](), gt18(tbpv1, tbpv1 = {}), gs0c4x($heof, tbpv1, h6wmf, ba1rv, this['errorHandler']), ba1rv['endDocument']();
  } }, g$hlf6w['prototype'] = { 'setTagName': function (yj970d) {
    if (!g_kjd['test'](yj970d)) throw new Error('invalid tagName:' + yj970d);this['tagName'] = yj970d;
  }, 'add': function (j9_7kd, s3eg5q, tkb8pr) {
    if (!g_kjd['test'](j9_7kd)) throw new Error('invalid attribute:' + j9_7kd);this[this['length']++] = { 'qName': j9_7kd, 'value': s3eg5q, 'offset': tkb8pr };
  }, 'length': 0x0, 'getLocalName': function (rb8t1) {
    return this[rb8t1]['localName'];
  }, 'getLocator': function (y2x0c) {
    return this[y2x0c]['locator'];
  }, 'getQName': function (hwfo) {
    return this[hwfo]['qName'];
  }, 'getURI': function (m6fw$) {
    return this[m6fw$]['uri'];
  }, 'getValue': function (y4c2x) {
    return this[y4c2x]['value'];
  } }, gkbtrp8({}, gkbtrp8['prototype']) instanceof gkbtrp8 || (gkbtrp8 = function (_t8k, v1pbar) {
  function r7k_t8() {}r7k_t8['prototype'] = v1pbar, r7k_t8 = new r7k_t8();for (v1pbar in _t8k) r7k_t8[v1pbar] = _t8k[v1pbar];return r7k_t8;
}), exports['XMLReader'] = grbtk;