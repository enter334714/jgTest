var s = wx.$W;
function ww3zb5u() {}function wyr7_j(u1z3w, its, bz1eu3, $2q, $snlt) {
  function cra7(ry90) {
    if (ry90 > 0xffff) {
      ry90 -= 0x10000;var d65wo = 0xd800 + (ry90 >> 0xa),
          kc8e1 = 0xdc00 + (0x3ff & ry90);return String['fromCharCode'](d65wo, kc8e1);
    }return String['fromCharCode'](ry90);
  }function fq$lst(r_p90) {
    var k87acj = r_p90['slice'](0x1, -0x1);return k87acj in bz1eu3 ? bz1eu3[k87acj] : '#' === k87acj['charAt'](0x0) ? cra7(parseInt(k87acj['substr'](0x1)['replace']('x', '0x'))) : ($snlt['error']('entity not found:' + r_p90), r_p90);
  }function pjy_(b3wo5u) {
    if (b3wo5u > dw6vo5) {
      var $0tlin = u1z3w['substring'](dw6vo5, b3wo5u)['replace'](/&#?\w+;/g, fq$lst);ho4v6 && mhx64(dw6vo5), $2q['characters']($0tlin, 0x0, b3wo5u - dw6vo5), dw6vo5 = b3wo5u;
    }
  }function mhx64(r7_ajk, ac7rj) {
    for (; r7_ajk >= ob5u && (ac7rj = hvx4mg['exec'](u1z3w));) ni$tls = ac7rj['index'], ob5u = ni$tls + ac7rj[0x0]['length'], ho4v6['lineNumber']++;ho4v6['columnNumber'] = r7_ajk - ni$tls + 0x1;
  }for (var ni$tls = 0x0, ob5u = 0x0, hvx4mg = /.*(?:\r\n?|\n)|.*$/g, ho4v6 = $2q['locator'], ka7r_j = [{ 'currentNSMap': its }], ez1u8 = {}, dw6vo5 = 0x0;;) {
    try {
      var tns$i = u1z3w['indexOf']('<', dw6vo5);if (0x0 > tns$i) {
        if (!u1z3w['substr'](dw6vo5)['match'](/^\s*$/)) {
          var b3wu1 = $2q['doc'],
              jcak7r = b3wu1['createTextNode'](u1z3w['substr'](dw6vo5));b3wu1['appendChild'](jcak7r), $2q['currentElement'] = jcak7r;
        }return;
      }switch (tns$i > dw6vo5 && pjy_(tns$i), u1z3w['charAt'](tns$i + 0x1)) {case '/':
          var w5d6 = u1z3w['indexOf']('>', tns$i + 0x3),
              y09pr_ = u1z3w['substring'](tns$i + 0x2, w5d6),
              ke8c = ka7r_j['pop']();0x0 > w5d6 ? (y09pr_ = u1z3w['substring'](tns$i + 0x2)['replace'](/[\s<].*/, ''), $snlt['error']('end tag name: ' + y09pr_ + ' is not complete:' + ke8c['tagName']), w5d6 = tns$i + 0x1 + y09pr_['length']) : y09pr_['match'](/\s</) && (y09pr_ = y09pr_['replace'](/[\s<].*/, ''), $snlt['error']('end tag name: ' + y09pr_ + ' maybe not complete'), w5d6 = tns$i + 0x1 + y09pr_['length']);var w3u1zb = ke8c['localNSMap'],
              sti$l = ke8c['tagName'] == y09pr_,
              w56bo = sti$l || ke8c['tagName'] && ke8c['tagName']['toLowerCase']() == y09pr_['toLowerCase']();if (w56bo) {
            if ($2q['endElement'](ke8c['uri'], ke8c['localName'], y09pr_), w3u1zb) {
              for (var x6v4hd in w3u1zb) $2q['endPrefixMapping'](x6v4hd);
            }sti$l || $snlt['fatalError']('end tag name: ' + y09pr_ + ' is not match the current start tagName:' + ke8c['tagName']);
          } else ka7r_j['push'](ke8c);w5d6++;break;case '?':
          ho4v6 && mhx64(tns$i), w5d6 = w_jr7k(u1z3w, tns$i, $2q);break;case '!':
          ho4v6 && mhx64(tns$i), w5d6 = wcek8(u1z3w, tns$i, $2q, $snlt);break;default:
          ho4v6 && mhx64(tns$i);var cjar7k = new wud5bow(),
              pn0li = ka7r_j[ka7r_j['length'] - 0x1]['currentNSMap'],
              w5d6 = wd5wo6b(u1z3w, tns$i, cjar7k, pn0li, fq$lst, $snlt),
              db5uow = cjar7k['length'];if (!cjar7k['closed'] && wv5oh6(u1z3w, w5d6, cjar7k['tagName'], ez1u8) && (cjar7k['closed'] = !0x0, bz1eu3['nbsp'] || $snlt['warning']('unclosed xml attribute')), ho4v6 && db5uow) {
            for (var j7kac = wake18c(ho4v6, {}), $tns = 0x0; db5uow > $tns; $tns++) {
              var mxgh4v = cjar7k[$tns];mhx64(mxgh4v['offset']), mxgh4v['locator'] = wake18c(ho4v6, {});
            }$2q['locator'] = j7kac, wr0_y9p(cjar7k, $2q, pn0li) && ka7r_j['push'](cjar7k), $2q['locator'] = ho4v6;
          } else wr0_y9p(cjar7k, $2q, pn0li) && ka7r_j['push'](cjar7k);'http://www.w3.org/1999/xhtml' !== cjar7k['uri'] || cjar7k['closed'] ? w5d6++ : w5d6 = wk7crj(u1z3w, w5d6, cjar7k['tagName'], fq$lst, $2q);}
    } catch (_iyp90) {
      $snlt['error']('element parse error: ' + _iyp90), w5d6 = -0x1;
    }w5d6 > dw6vo5 ? dw6vo5 = w5d6 : pjy_(Math['max'](tns$i, dw6vo5) + 0x1);
  }
}function wake18c(wodv56, p09lin) {
  return p09lin['lineNumber'] = wodv56['lineNumber'], p09lin['columnNumber'] = wodv56['columnNumber'], p09lin;
}function wd5wo6b(r7cjk, i0p9ny, dvwo6, u3o, jr7a_k, e83u1) {
  for (var sqfl, p_9ry0, lp0 = ++i0p9ny, e18zk = wip90y;;) {
    var wuz5 = r7cjk['charAt'](lp0);switch (wuz5) {case '=':
        if (e18zk === wiln$p) sqfl = r7cjk['slice'](i0p9ny, lp0), e18zk = wecka78;else {
          if (e18zk !== wli$) throw new Error('attribute equal must after attrName');e18zk = wecka78;
        }break;case '\x27':case '\x22':
        if (e18zk === wecka78 || e18zk === wiln$p) {
          if (e18zk === wiln$p && (e83u1['warning']('attribute value must after "="'), sqfl = r7cjk['slice'](i0p9ny, lp0)), i0p9ny = lp0 + 0x1, lp0 = r7cjk['indexOf'](wuz5, i0p9ny), !(lp0 > 0x0)) throw new Error('attribute value no end \'' + wuz5 + '\' match');p_9ry0 = r7cjk['slice'](i0p9ny, lp0)['replace'](/&#?\w+;/g, jr7a_k), dvwo6['add'](sqfl, p_9ry0, i0p9ny - 0x1), e18zk = wl9pn0i;
        } else {
          if (e18zk != wil9p) throw new Error('attribute value must after "="');p_9ry0 = r7cjk['slice'](i0p9ny, lp0)['replace'](/&#?\w+;/g, jr7a_k), dvwo6['add'](sqfl, p_9ry0, i0p9ny), e83u1['warning']('attribute "' + sqfl + '" missed start quot(' + wuz5 + ')!!'), i0p9ny = lp0 + 0x1, e18zk = wl9pn0i;
        }break;case '/':
        switch (e18zk) {case wip90y:
            dvwo6['setTagName'](r7cjk['slice'](i0p9ny, lp0));case wl9pn0i:case wb1uw:case wr_7kja:
            e18zk = wr_7kja, dvwo6['closed'] = !0x0;case wil9p:case wiln$p:case wli$:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return e83u1['error']('unexpected end of input'), e18zk == wip90y && dvwo6['setTagName'](r7cjk['slice'](i0p9ny, lp0)), lp0;case '>':
        switch (e18zk) {case wip90y:
            dvwo6['setTagName'](r7cjk['slice'](i0p9ny, lp0));case wl9pn0i:case wb1uw:case wr_7kja:
            break;case wil9p:case wiln$p:
            p_9ry0 = r7cjk['slice'](i0p9ny, lp0), '/' === p_9ry0['slice'](-0x1) && (dvwo6['closed'] = !0x0, p_9ry0 = p_9ry0['slice'](0x0, -0x1));case wli$:
            e18zk === wli$ && (p_9ry0 = sqfl), e18zk == wil9p ? (e83u1['warning']('attribute "' + p_9ry0 + '" missed quot(")!!'), dvwo6['add'](sqfl, p_9ry0['replace'](/&#?\w+;/g, jr7a_k), i0p9ny)) : ('http://www.w3.org/1999/xhtml' === u3o[''] && p_9ry0['match'](/^(?:disabled|checked|selected)$/i) || e83u1['warning']('attribute "' + p_9ry0 + '" missed value!! "' + p_9ry0 + '" instead!!'), dvwo6['add'](p_9ry0, p_9ry0, i0p9ny));break;case wecka78:
            throw new Error('attribute value missed!!');}return lp0;case '\u0080':
        wuz5 = '\x20';default:
        if ('\x20' >= wuz5) switch (e18zk) {case wip90y:
            dvwo6['setTagName'](r7cjk['slice'](i0p9ny, lp0)), e18zk = wb1uw;break;case wiln$p:
            sqfl = r7cjk['slice'](i0p9ny, lp0), e18zk = wli$;break;case wil9p:
            var p_9ry0 = r7cjk['slice'](i0p9ny, lp0)['replace'](/&#?\w+;/g, jr7a_k);e83u1['warning']('attribute "' + p_9ry0 + '" missed quot(")!!'), dvwo6['add'](sqfl, p_9ry0, i0p9ny);case wl9pn0i:
            e18zk = wb1uw;} else switch (e18zk) {case wli$:
            {
              dvwo6['tagName'];
            }'http://www.w3.org/1999/xhtml' === u3o[''] && sqfl['match'](/^(?:disabled|checked|selected)$/i) || e83u1['warning']('attribute "' + sqfl + '" missed value!! "' + sqfl + '" instead2!!'), dvwo6['add'](sqfl, sqfl, i0p9ny), i0p9ny = lp0, e18zk = wiln$p;break;case wl9pn0i:
            e83u1['warning']('attribute space is required"' + sqfl + '\x22!!');case wb1uw:
            e18zk = wiln$p, i0p9ny = lp0;break;case wecka78:
            e18zk = wil9p, i0p9ny = lp0;break;case wr_7kja:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}lp0++;
  }
}function wr0_y9p(j9rpy_, r7cakj, ek8z) {
  for (var iyp_90 = j9rpy_['tagName'], ae78kc = null, p9_y0 = j9rpy_['length']; p9_y0--;) {
    var iln9p0 = j9rpy_[p9_y0],
        ze8c13 = iln9p0['qName'],
        yp0 = iln9p0['value'],
        ubz13w = ze8c13['indexOf'](':');if (ubz13w > 0x0) var r9py_0 = iln9p0['prefix'] = ze8c13['slice'](0x0, ubz13w),
        w6v5 = ze8c13['slice'](ubz13w + 0x1),
        k8caj = 'xmlns' === r9py_0 && w6v5;else w6v5 = ze8c13, r9py_0 = null, k8caj = 'xmlns' === ze8c13 && '';iln9p0['localName'] = w6v5, k8caj !== !0x1 && (null == ae78kc && (ae78kc = {}, wu8ze13(ek8z, ek8z = {})), ek8z[k8caj] = ae78kc[k8caj] = yp0, iln9p0['uri'] = 'http://www.w3.org/2000/xmlns/', r7cakj['startPrefixMapping'](k8caj, yp0));
  }for (var p9_y0 = j9rpy_['length']; p9_y0--;) {
    iln9p0 = j9rpy_[p9_y0];var r9py_0 = iln9p0['prefix'];r9py_0 && ('xml' === r9py_0 && (iln9p0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r9py_0 && (iln9p0['uri'] = ek8z[r9py_0 || '']));
  }var ubz13w = iyp_90['indexOf'](':');ubz13w > 0x0 ? (r9py_0 = j9rpy_['prefix'] = iyp_90['slice'](0x0, ubz13w), w6v5 = j9rpy_['localName'] = iyp_90['slice'](ubz13w + 0x1)) : (r9py_0 = null, w6v5 = j9rpy_['localName'] = iyp_90);var ub3w = j9rpy_['uri'] = ek8z[r9py_0 || ''];if (r7cakj['startElement'](ub3w, w6v5, iyp_90, j9rpy_), !j9rpy_['closed']) return j9rpy_['currentNSMap'] = ek8z, j9rpy_['localNSMap'] = ae78kc, !0x0;if (r7cakj['endElement'](ub3w, w6v5, iyp_90), ae78kc) {
    for (r9py_0 in ae78kc) r7cakj['endPrefixMapping'](r9py_0);
  }
}function wk7crj(_kjra7, ow5bd, z81ck, q$stlf, ea81kc) {
  if (/^(?:script|textarea)$/i['test'](z81ck)) {
    var e381zu = _kjra7['indexOf']('</' + z81ck + '>', ow5bd),
        fq$ls = _kjra7['substring'](ow5bd + 0x1, e381zu);if (/[&<]/['test'](fq$ls)) return (/^script$/i['test'](z81ck) ? (ea81kc['characters'](fq$ls, 0x0, fq$ls['length']), e381zu) : (fq$ls = fq$ls['replace'](/&#?\w+;/g, q$stlf), ea81kc['characters'](fq$ls, 0x0, fq$ls['length']), e381zu)
    );
  }return ow5bd + 0x1;
}function wv5oh6(ez31c8, lqt$, a_rjk7, p$li0n) {
  var stln$i = p$li0n[a_rjk7];return null == stln$i && (stln$i = ez31c8['lastIndexOf']('</' + a_rjk7 + '>'), lqt$ > stln$i && (stln$i = ez31c8['lastIndexOf']('</' + a_rjk7)), p$li0n[a_rjk7] = stln$i), lqt$ > stln$i;
}function wu8ze13(ka18c, voh6d) {
  for (var wodv5 in ka18c) voh6d[wodv5] = ka18c[wodv5];
}function wcek8(fqs$lt, qtls$n, kjc8a7, vo65d) {
  var buzw3 = fqs$lt['charAt'](qtls$n + 0x2);switch (buzw3) {case '-':
      if ('-' === fqs$lt['charAt'](qtls$n + 0x3)) {
        var tqf$ = fqs$lt['indexOf']('-->', qtls$n + 0x4);return tqf$ > qtls$n ? (kjc8a7['comment'](fqs$lt, qtls$n + 0x4, tqf$ - qtls$n - 0x4), tqf$ + 0x3) : (vo65d['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == fqs$lt['substr'](qtls$n + 0x3, 0x6)) {
        var tqf$ = fqs$lt['indexOf'](']]>', qtls$n + 0x9);return kjc8a7['startCDATA'](), kjc8a7['characters'](fqs$lt, qtls$n + 0x9, tqf$ - qtls$n - 0x9), kjc8a7['endCDATA'](), tqf$ + 0x3;
      }var y97_jr = wy_jrp(fqs$lt, qtls$n),
          tsq2f$ = y97_jr['length'];if (tsq2f$ > 0x1 && /!doctype/i['test'](y97_jr[0x0][0x0])) {
        var lisn = y97_jr[0x1][0x0],
            a7c8e = tsq2f$ > 0x3 && /^public$/i['test'](y97_jr[0x2][0x0]) && y97_jr[0x3][0x0],
            np0i = tsq2f$ > 0x4 && y97_jr[0x4][0x0],
            jyr79_ = y97_jr[tsq2f$ - 0x1];return kjc8a7['startDTD'](lisn, a7c8e && a7c8e['replace'](/^(['"])(.*?)\1$/, '$2'), np0i && np0i['replace'](/^(['"])(.*?)\1$/, '$2')), kjc8a7['endDTD'](), jyr79_['index'] + jyr79_[0x0]['length'];
      }}return -0x1;
}function w_jr7k(kr7, m4vx6, ub5w3o) {
  var h6v5do = kr7['indexOf']('?>', m4vx6);if (h6v5do) {
    var z1e3bu = kr7['substring'](m4vx6, h6v5do)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (z1e3bu) {
      {
        z1e3bu[0x0]['length'];
      }return ub5w3o['processingInstruction'](z1e3bu[0x1], z1e3bu[0x2]), h6v5do + 0x2;
    }return -0x1;
  }return -0x1;
}function wud5bow() {}function wvd6o5h(kc7j, _7ajkr) {
  return kc7j['__proto__'] = _7ajkr, kc7j;
}function wy_jrp(r7ca, lp0n9i) {
  var sltfq$,
      h4gvm = [],
      dbuwo = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dbuwo['lastIndex'] = lp0n9i, dbuwo['exec'](r7ca); sltfq$ = dbuwo['exec'](r7ca);) if (h4gvm['push'](sltfq$), sltfq$[0x1]) return h4gvm;
}var wsn$qt = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ww3 = new RegExp('[\\-\\.0-9' + wsn$qt['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    waeck = new RegExp('^' + wsn$qt['source'] + ww3['source'] + '*(?::' + wsn$qt['source'] + ww3['source'] + '*)?$'),
    wip90y = 0x0,
    wiln$p = 0x1,
    wli$ = 0x2,
    wecka78 = 0x3,
    wil9p = 0x4,
    wl9pn0i = 0x5,
    wb1uw = 0x6,
    wr_7kja = 0x7;ww3zb5u['prototype'] = { 'parse': function ($tflq, _iy0p, jy7) {
    var v4d = this['domBuilder'];v4d['startDocument'](), wu8ze13(_iy0p, _iy0p = {}), wyr7_j($tflq, _iy0p, jy7, v4d, this['errorHandler']), v4d['endDocument']();
  } }, wud5bow['prototype'] = { 'setTagName': function (stf2$q) {
    if (!waeck['test'](stf2$q)) throw new Error('invalid tagName:' + stf2$q);this['tagName'] = stf2$q;
  }, 'add': function (m4x6hv, tfqs2$, tf$qls) {
    if (!waeck['test'](m4x6hv)) throw new Error('invalid attribute:' + m4x6hv);this[this['length']++] = { 'qName': m4x6hv, 'value': tfqs2$, 'offset': tf$qls };
  }, 'length': 0x0, 'getLocalName': function ($i0pnl) {
    return this[$i0pnl]['localName'];
  }, 'getLocator': function (snil$t) {
    return this[snil$t]['locator'];
  }, 'getQName': function (vh46m) {
    return this[vh46m]['qName'];
  }, 'getURI': function (ajkr7_) {
    return this[ajkr7_]['uri'];
  }, 'getValue': function (ak_7rj) {
    return this[ak_7rj]['value'];
  } }, wvd6o5h({}, wvd6o5h['prototype']) instanceof wvd6o5h || (wvd6o5h = function (owudb, ray7j_) {
  function obd6() {}obd6['prototype'] = ray7j_, obd6 = new obd6();for (ray7j_ in owudb) obd6[ray7j_] = owudb[ray7j_];return obd6;
}), exports['XMLReader'] = ww3zb5u;