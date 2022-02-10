var s = wx.$W;
function wj97_() {}function wlntq($fstql, nli$s, n09ip, jkar_, tnlsq$) {
  function xhm6v4(d5ovw) {
    if (d5ovw > 0xffff) {
      d5ovw -= 0x10000;var u3bz1e = 0xd800 + (d5ovw >> 0xa),
          _yj79r = 0xdc00 + (0x3ff & d5ovw);return String['fromCharCode'](u3bz1e, _yj79r);
    }return String['fromCharCode'](d5ovw);
  }function nqtsl$(p90in) {
    var y_0p9 = p90in['slice'](0x1, -0x1);return y_0p9 in n09ip ? n09ip[y_0p9] : '#' === y_0p9['charAt'](0x0) ? xhm6v4(parseInt(y_0p9['substr'](0x1)['replace']('x', '0x'))) : (tnlsq$['error']('entity not found:' + p90in), p90in);
  }function ft$q(kae8c) {
    if (kae8c > i9p0ny) {
      var e8ckz1 = $fstql['substring'](i9p0ny, kae8c)['replace'](/&#?\w+;/g, nqtsl$);qtns && c7raj(i9p0ny), jkar_['characters'](e8ckz1, 0x0, kae8c - i9p0ny), i9p0ny = kae8c;
    }
  }function c7raj(j_9ypr, $p0in) {
    for (; j_9ypr >= $lqfs && ($p0in = _yjr9p['exec']($fstql));) o5wb3u = $p0in['index'], $lqfs = o5wb3u + $p0in[0x0]['length'], qtns['lineNumber']++;qtns['columnNumber'] = j_9ypr - o5wb3u + 0x1;
  }for (var o5wb3u = 0x0, $lqfs = 0x0, _yjr9p = /.*(?:\r\n?|\n)|.*$/g, qtns = jkar_['locator'], _7jry9 = [{ 'currentNSMap': nli$s }], i$t0n = {}, i9p0ny = 0x0;;) {
    try {
      var jpry9_ = $fstql['indexOf']('<', i9p0ny);if (0x0 > jpry9_) {
        if (!$fstql['substr'](i9p0ny)['match'](/^\s*$/)) {
          var qfst$l = jkar_['doc'],
              litsn = qfst$l['createTextNode']($fstql['substr'](i9p0ny));qfst$l['appendChild'](litsn), jkar_['currentElement'] = litsn;
        }return;
      }switch (jpry9_ > i9p0ny && ft$q(jpry9_), $fstql['charAt'](jpry9_ + 0x1)) {case '/':
          var k87ae = $fstql['indexOf']('>', jpry9_ + 0x3),
              ra7jkc = $fstql['substring'](jpry9_ + 0x2, k87ae),
              w6bdo5 = _7jry9['pop']();0x0 > k87ae ? (ra7jkc = $fstql['substring'](jpry9_ + 0x2)['replace'](/[\s<].*/, ''), tnlsq$['error']('end tag name: ' + ra7jkc + ' is not complete:' + w6bdo5['tagName']), k87ae = jpry9_ + 0x1 + ra7jkc['length']) : ra7jkc['match'](/\s</) && (ra7jkc = ra7jkc['replace'](/[\s<].*/, ''), tnlsq$['error']('end tag name: ' + ra7jkc + ' maybe not complete'), k87ae = jpry9_ + 0x1 + ra7jkc['length']);var b5uow = w6bdo5['localNSMap'],
              t$lsf = w6bdo5['tagName'] == ra7jkc,
              kzc8 = t$lsf || w6bdo5['tagName'] && w6bdo5['tagName']['toLowerCase']() == ra7jkc['toLowerCase']();if (kzc8) {
            if (jkar_['endElement'](w6bdo5['uri'], w6bdo5['localName'], ra7jkc), b5uow) {
              for (var k18ea in b5uow) jkar_['endPrefixMapping'](k18ea);
            }t$lsf || tnlsq$['fatalError']('end tag name: ' + ra7jkc + ' is not match the current start tagName:' + w6bdo5['tagName']);
          } else _7jry9['push'](w6bdo5);k87ae++;break;case '?':
          qtns && c7raj(jpry9_), k87ae = wv65od($fstql, jpry9_, jkar_);break;case '!':
          qtns && c7raj(jpry9_), k87ae = wa_7j($fstql, jpry9_, jkar_, tnlsq$);break;default:
          qtns && c7raj(jpry9_);var r_y9 = new wp$nil0(),
              s$t = _7jry9[_7jry9['length'] - 0x1]['currentNSMap'],
              k87ae = wbou3w5($fstql, jpry9_, r_y9, s$t, nqtsl$, tnlsq$),
              u35wbz = r_y9['length'];if (!r_y9['closed'] && wi$t0($fstql, k87ae, r_y9['tagName'], i$t0n) && (r_y9['closed'] = !0x0, n09ip['nbsp'] || tnlsq$['warning']('unclosed xml attribute')), qtns && u35wbz) {
            for (var pr0y = wlnq$ts(qtns, {}), ce8k1z = 0x0; u35wbz > ce8k1z; ce8k1z++) {
              var u3z1 = r_y9[ce8k1z];c7raj(u3z1['offset']), u3z1['locator'] = wlnq$ts(qtns, {});
            }jkar_['locator'] = pr0y, wvx64d(r_y9, jkar_, s$t) && _7jry9['push'](r_y9), jkar_['locator'] = qtns;
          } else wvx64d(r_y9, jkar_, s$t) && _7jry9['push'](r_y9);'http://www.w3.org/1999/xhtml' !== r_y9['uri'] || r_y9['closed'] ? k87ae++ : k87ae = wjkra7($fstql, k87ae, r_y9['tagName'], nqtsl$, jkar_);}
    } catch (yj9_r7) {
      tnlsq$['error']('element parse error: ' + yj9_r7), k87ae = -0x1;
    }k87ae > i9p0ny ? i9p0ny = k87ae : ft$q(Math['max'](jpry9_, i9p0ny) + 0x1);
  }
}function wlnq$ts(ltn$s, s2tf) {
  return s2tf['lineNumber'] = ltn$s['lineNumber'], s2tf['columnNumber'] = ltn$s['columnNumber'], s2tf;
}function wbou3w5(h4mvxg, e3c, c81zke, zkec1, u13b, h6dov5) {
  for (var $fst, r7ajk_, jrakc = ++e3c, c1z3e = wrj7_ya;;) {
    var t$qnl = h4mvxg['charAt'](jrakc);switch (t$qnl) {case '=':
        if (c1z3e === wlit$n0) $fst = h4mvxg['slice'](e3c, jrakc), c1z3e = wi0p_y9;else {
          if (c1z3e !== wnyi90p) throw new Error('attribute equal must after attrName');c1z3e = wi0p_y9;
        }break;case '\x27':case '\x22':
        if (c1z3e === wi0p_y9 || c1z3e === wlit$n0) {
          if (c1z3e === wlit$n0 && (h6dov5['warning']('attribute value must after "="'), $fst = h4mvxg['slice'](e3c, jrakc)), e3c = jrakc + 0x1, jrakc = h4mvxg['indexOf'](t$qnl, e3c), !(jrakc > 0x0)) throw new Error('attribute value no end \'' + t$qnl + '\' match');r7ajk_ = h4mvxg['slice'](e3c, jrakc)['replace'](/&#?\w+;/g, u13b), c81zke['add']($fst, r7ajk_, e3c - 0x1), c1z3e = wts$2fq;
        } else {
          if (c1z3e != wzce8k) throw new Error('attribute value must after "="');r7ajk_ = h4mvxg['slice'](e3c, jrakc)['replace'](/&#?\w+;/g, u13b), c81zke['add']($fst, r7ajk_, e3c), h6dov5['warning']('attribute "' + $fst + '" missed start quot(' + t$qnl + ')!!'), e3c = jrakc + 0x1, c1z3e = wts$2fq;
        }break;case '/':
        switch (c1z3e) {case wrj7_ya:
            c81zke['setTagName'](h4mvxg['slice'](e3c, jrakc));case wts$2fq:case wy90in:case wnp9i:
            c1z3e = wnp9i, c81zke['closed'] = !0x0;case wzce8k:case wlit$n0:case wnyi90p:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return h6dov5['error']('unexpected end of input'), c1z3e == wrj7_ya && c81zke['setTagName'](h4mvxg['slice'](e3c, jrakc)), jrakc;case '>':
        switch (c1z3e) {case wrj7_ya:
            c81zke['setTagName'](h4mvxg['slice'](e3c, jrakc));case wts$2fq:case wy90in:case wnp9i:
            break;case wzce8k:case wlit$n0:
            r7ajk_ = h4mvxg['slice'](e3c, jrakc), '/' === r7ajk_['slice'](-0x1) && (c81zke['closed'] = !0x0, r7ajk_ = r7ajk_['slice'](0x0, -0x1));case wnyi90p:
            c1z3e === wnyi90p && (r7ajk_ = $fst), c1z3e == wzce8k ? (h6dov5['warning']('attribute "' + r7ajk_ + '" missed quot(")!!'), c81zke['add']($fst, r7ajk_['replace'](/&#?\w+;/g, u13b), e3c)) : ('http://www.w3.org/1999/xhtml' === zkec1[''] && r7ajk_['match'](/^(?:disabled|checked|selected)$/i) || h6dov5['warning']('attribute "' + r7ajk_ + '" missed value!! "' + r7ajk_ + '" instead!!'), c81zke['add'](r7ajk_, r7ajk_, e3c));break;case wi0p_y9:
            throw new Error('attribute value missed!!');}return jrakc;case '\u0080':
        t$qnl = '\x20';default:
        if ('\x20' >= t$qnl) switch (c1z3e) {case wrj7_ya:
            c81zke['setTagName'](h4mvxg['slice'](e3c, jrakc)), c1z3e = wy90in;break;case wlit$n0:
            $fst = h4mvxg['slice'](e3c, jrakc), c1z3e = wnyi90p;break;case wzce8k:
            var r7ajk_ = h4mvxg['slice'](e3c, jrakc)['replace'](/&#?\w+;/g, u13b);h6dov5['warning']('attribute "' + r7ajk_ + '" missed quot(")!!'), c81zke['add']($fst, r7ajk_, e3c);case wts$2fq:
            c1z3e = wy90in;} else switch (c1z3e) {case wnyi90p:
            {
              c81zke['tagName'];
            }'http://www.w3.org/1999/xhtml' === zkec1[''] && $fst['match'](/^(?:disabled|checked|selected)$/i) || h6dov5['warning']('attribute "' + $fst + '" missed value!! "' + $fst + '" instead2!!'), c81zke['add']($fst, $fst, e3c), e3c = jrakc, c1z3e = wlit$n0;break;case wts$2fq:
            h6dov5['warning']('attribute space is required"' + $fst + '\x22!!');case wy90in:
            c1z3e = wlit$n0, e3c = jrakc;break;case wi0p_y9:
            c1z3e = wzce8k, e3c = jrakc;break;case wnp9i:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}jrakc++;
  }
}function wvx64d(u5wb3z, nts$lq, yr_7aj) {
  for (var wbu35 = u5wb3z['tagName'], plin9 = null, j7r_a = u5wb3z['length']; j7r_a--;) {
    var pr_j9y = u5wb3z[j7r_a],
        owv56d = pr_j9y['qName'],
        uw5o3 = pr_j9y['value'],
        vx4mh6 = owv56d['indexOf'](':');if (vx4mh6 > 0x0) var lnip0 = pr_j9y['prefix'] = owv56d['slice'](0x0, vx4mh6),
        dw6b5 = owv56d['slice'](vx4mh6 + 0x1),
        zc38e1 = 'xmlns' === lnip0 && dw6b5;else dw6b5 = owv56d, lnip0 = null, zc38e1 = 'xmlns' === owv56d && '';pr_j9y['localName'] = dw6b5, zc38e1 !== !0x1 && (null == plin9 && (plin9 = {}, wn9py0(yr_7aj, yr_7aj = {})), yr_7aj[zc38e1] = plin9[zc38e1] = uw5o3, pr_j9y['uri'] = 'http://www.w3.org/2000/xmlns/', nts$lq['startPrefixMapping'](zc38e1, uw5o3));
  }for (var j7r_a = u5wb3z['length']; j7r_a--;) {
    pr_j9y = u5wb3z[j7r_a];var lnip0 = pr_j9y['prefix'];lnip0 && ('xml' === lnip0 && (pr_j9y['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== lnip0 && (pr_j9y['uri'] = yr_7aj[lnip0 || '']));
  }var vx4mh6 = wbu35['indexOf'](':');vx4mh6 > 0x0 ? (lnip0 = u5wb3z['prefix'] = wbu35['slice'](0x0, vx4mh6), dw6b5 = u5wb3z['localName'] = wbu35['slice'](vx4mh6 + 0x1)) : (lnip0 = null, dw6b5 = u5wb3z['localName'] = wbu35);var ube31z = u5wb3z['uri'] = yr_7aj[lnip0 || ''];if (nts$lq['startElement'](ube31z, dw6b5, wbu35, u5wb3z), !u5wb3z['closed']) return u5wb3z['currentNSMap'] = yr_7aj, u5wb3z['localNSMap'] = plin9, !0x0;if (nts$lq['endElement'](ube31z, dw6b5, wbu35), plin9) {
    for (lnip0 in plin9) nts$lq['endPrefixMapping'](lnip0);
  }
}function wjkra7(rp_9jy, s2tq$f, z31e, xgv4, acrk) {
  if (/^(?:script|textarea)$/i['test'](z31e)) {
    var w3zu5b = rp_9jy['indexOf']('</' + z31e + '>', s2tq$f),
        b31euz = rp_9jy['substring'](s2tq$f + 0x1, w3zu5b);if (/[&<]/['test'](b31euz)) return (/^script$/i['test'](z31e) ? (acrk['characters'](b31euz, 0x0, b31euz['length']), w3zu5b) : (b31euz = b31euz['replace'](/&#?\w+;/g, xgv4), acrk['characters'](b31euz, 0x0, b31euz['length']), w3zu5b)
    );
  }return s2tq$f + 0x1;
}function wi$t0(sn$tlq, xhgvm, _ry7aj, akc87) {
  var akcjr = akc87[_ry7aj];return null == akcjr && (akcjr = sn$tlq['lastIndexOf']('</' + _ry7aj + '>'), xhgvm > akcjr && (akcjr = sn$tlq['lastIndexOf']('</' + _ry7aj)), akc87[_ry7aj] = akcjr), xhgvm > akcjr;
}function wn9py0(k7a8c, c8eak7) {
  for (var eu3bz1 in k7a8c) c8eak7[eu3bz1] = k7a8c[eu3bz1];
}function wa_7j(kze81c, pi0y9_, do5vw, c8kez) {
  var nti0 = kze81c['charAt'](pi0y9_ + 0x2);switch (nti0) {case '-':
      if ('-' === kze81c['charAt'](pi0y9_ + 0x3)) {
        var j_r7k = kze81c['indexOf']('-->', pi0y9_ + 0x4);return j_r7k > pi0y9_ ? (do5vw['comment'](kze81c, pi0y9_ + 0x4, j_r7k - pi0y9_ - 0x4), j_r7k + 0x3) : (c8kez['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == kze81c['substr'](pi0y9_ + 0x3, 0x6)) {
        var j_r7k = kze81c['indexOf'](']]>', pi0y9_ + 0x9);return do5vw['startCDATA'](), do5vw['characters'](kze81c, pi0y9_ + 0x9, j_r7k - pi0y9_ - 0x9), do5vw['endCDATA'](), j_r7k + 0x3;
      }var p_jr = wtqs$n(kze81c, pi0y9_),
          a7ck8 = p_jr['length'];if (a7ck8 > 0x1 && /!doctype/i['test'](p_jr[0x0][0x0])) {
        var i$n0tl = p_jr[0x1][0x0],
            _rjak7 = a7ck8 > 0x3 && /^public$/i['test'](p_jr[0x2][0x0]) && p_jr[0x3][0x0],
            pli$n0 = a7ck8 > 0x4 && p_jr[0x4][0x0],
            li0p = p_jr[a7ck8 - 0x1];return do5vw['startDTD'](i$n0tl, _rjak7 && _rjak7['replace'](/^(['"])(.*?)\1$/, '$2'), pli$n0 && pli$n0['replace'](/^(['"])(.*?)\1$/, '$2')), do5vw['endDTD'](), li0p['index'] + li0p[0x0]['length'];
      }}return -0x1;
}function wv65od(qt$lf, _pyj9r, w5u3bo) {
  var do6w5 = qt$lf['indexOf']('?>', _pyj9r);if (do6w5) {
    var mvgxh4 = qt$lf['substring'](_pyj9r, do6w5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (mvgxh4) {
      {
        mvgxh4[0x0]['length'];
      }return w5u3bo['processingInstruction'](mvgxh4[0x1], mvgxh4[0x2]), do6w5 + 0x2;
    }return -0x1;
  }return -0x1;
}function wp$nil0() {}function w_jp9yr(e13buz, eckz18) {
  return e13buz['__proto__'] = eckz18, e13buz;
}function wtqs$n(k_ja7r, r9j7y) {
  var ka7cj8,
      fstlq = [],
      zbe13 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zbe13['lastIndex'] = r9j7y, zbe13['exec'](k_ja7r); ka7cj8 = zbe13['exec'](k_ja7r);) if (fstlq['push'](ka7cj8), ka7cj8[0x1]) return fstlq;
}var wek7c8a = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    wj7ak8 = new RegExp('[\\-\\.0-9' + wek7c8a['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    wuobw5 = new RegExp('^' + wek7c8a['source'] + wj7ak8['source'] + '*(?::' + wek7c8a['source'] + wj7ak8['source'] + '*)?$'),
    wrj7_ya = 0x0,
    wlit$n0 = 0x1,
    wnyi90p = 0x2,
    wi0p_y9 = 0x3,
    wzce8k = 0x4,
    wts$2fq = 0x5,
    wy90in = 0x6,
    wnp9i = 0x7;wj97_['prototype'] = { 'parse': function (do5vh6, yj7ra, bdo5) {
    var do4h = this['domBuilder'];do4h['startDocument'](), wn9py0(yj7ra, yj7ra = {}), wlntq(do5vh6, yj7ra, bdo5, do4h, this['errorHandler']), do4h['endDocument']();
  } }, wp$nil0['prototype'] = { 'setTagName': function (uzbw53) {
    if (!wuobw5['test'](uzbw53)) throw new Error('invalid tagName:' + uzbw53);this['tagName'] = uzbw53;
  }, 'add': function (ac18e, p_9jry, aek18c) {
    if (!wuobw5['test'](ac18e)) throw new Error('invalid attribute:' + ac18e);this[this['length']++] = { 'qName': ac18e, 'value': p_9jry, 'offset': aek18c };
  }, 'length': 0x0, 'getLocalName': function (y_09rp) {
    return this[y_09rp]['localName'];
  }, 'getLocator': function (s$fql) {
    return this[s$fql]['locator'];
  }, 'getQName': function (rj7y) {
    return this[rj7y]['qName'];
  }, 'getURI': function (vdh56o) {
    return this[vdh56o]['uri'];
  }, 'getValue': function (cz3) {
    return this[cz3]['value'];
  } }, w_jp9yr({}, w_jp9yr['prototype']) instanceof w_jp9yr || (w_jp9yr = function (akcj78, qf$slt) {
  function lin0$t() {}lin0$t['prototype'] = qf$slt, lin0$t = new lin0$t();for (qf$slt in akcj78) lin0$t[qf$slt] = akcj78[qf$slt];return lin0$t;
}), exports['XMLReader'] = wj97_;