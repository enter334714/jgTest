var b = wx.$e;
function ehflzr() {}function elhtry(hlxgrt, $xght, yrhtl, d06k9b, t$lh) {
  function xq$3j(gzhtl) {
    if (gzhtl > 0xffff) {
      gzhtl -= 0x10000;var y_v4 = 0xd800 + (gzhtl >> 0xa),
          ks096 = 0xdc00 + (0x3ff & gzhtl);return String['fromCharCode'](y_v4, ks096);
    }return String['fromCharCode'](gzhtl);
  }function z_vyf4(c47_ma) {
    var m7a_c4 = c47_ma['slice'](0x1, -0x1);return m7a_c4 in yrhtl ? yrhtl[m7a_c4] : '#' === m7a_c4['charAt'](0x0) ? xq$3j(parseInt(m7a_c4['substr'](0x1)['replace']('x', '0x'))) : (t$lh['error']('entity not found:' + c47_ma), c47_ma);
  }function yvhfr(ampec) {
    if (ampec > qij3$x) {
      var ylfr = hlxgrt['substring'](qij3$x, ampec)['replace'](/&#?\w+;/g, z_vyf4);d58w20 && vfzh(qij3$x), d06k9b['characters'](ylfr, 0x0, ampec - qij3$x), qij3$x = ampec;
    }
  }function vfzh(zrfyvh, b0865) {
    for (; zrfyvh >= ksun && (b0865 = yzrh['exec'](hlxgrt));) w8b05d = b0865['index'], ksun = w8b05d + b0865[0x0]['length'], d58w20['lineNumber']++;d58w20['columnNumber'] = zrfyvh - w8b05d + 0x1;
  }for (var w8b05d = 0x0, ksun = 0x0, yzrh = /.*(?:\r\n?|\n)|.*$/g, d58w20 = d06k9b['locator'], fv4_y7 = [{ 'currentNSMap': $xght }], nqij3u = {}, qij3$x = 0x0;;) {
    try {
      var d805b = hlxgrt['indexOf']('<', qij3$x);if (0x0 > d805b) {
        if (!hlxgrt['substr'](qij3$x)['match'](/^\s*$/)) {
          var v4zyr = d06k9b['doc'],
              lryzfh = v4zyr['createTextNode'](hlxgrt['substr'](qij3$x));v4zyr['appendChild'](lryzfh), d06k9b['currentElement'] = lryzfh;
        }return;
      }switch (d805b > qij3$x && yvhfr(d805b), hlxgrt['charAt'](d805b + 0x1)) {case '/':
          var $3igx = hlxgrt['indexOf']('>', d805b + 0x3),
              hxgtl = hlxgrt['substring'](d805b + 0x2, $3igx),
              fzrh = fv4_y7['pop']();0x0 > $3igx ? (hxgtl = hlxgrt['substring'](d805b + 0x2)['replace'](/[\s<].*/, ''), t$lh['error']('end tag name: ' + hxgtl + ' is not complete:' + fzrh['tagName']), $3igx = d805b + 0x1 + hxgtl['length']) : hxgtl['match'](/\s</) && (hxgtl = hxgtl['replace'](/[\s<].*/, ''), t$lh['error']('end tag name: ' + hxgtl + ' maybe not complete'), $3igx = d805b + 0x1 + hxgtl['length']);var rlfyhz = fzrh['localNSMap'],
              b6ku = fzrh['tagName'] == hxgtl,
              lg$t = b6ku || fzrh['tagName'] && fzrh['tagName']['toLowerCase']() == hxgtl['toLowerCase']();if (lg$t) {
            if (d06k9b['endElement'](fzrh['uri'], fzrh['localName'], hxgtl), rlfyhz) {
              for (var $ij3 in rlfyhz) d06k9b['endPrefixMapping']($ij3);
            }b6ku || t$lh['fatalError']('end tag name: ' + hxgtl + ' is not match the current start tagName:' + fzrh['tagName']);
          } else fv4_y7['push'](fzrh);$3igx++;break;case '?':
          d58w20 && vfzh(d805b), $3igx = egrhztl(hlxgrt, d805b, d06k9b);break;case '!':
          d58w20 && vfzh(d805b), $3igx = ezglrt(hlxgrt, d805b, d06k9b, t$lh);break;default:
          d58w20 && vfzh(d805b);var $xli = new esk6u9(),
              apcm = fv4_y7[fv4_y7['length'] - 0x1]['currentNSMap'],
              $3igx = ej3n$i(hlxgrt, d805b, $xli, apcm, z_vyf4, t$lh),
              qxij$ = $xli['length'];if (!$xli['closed'] && evfzy(hlxgrt, $3igx, $xli['tagName'], nqij3u) && ($xli['closed'] = !0x0, yrhtl['nbsp'] || t$lh['warning']('unclosed xml attribute')), d58w20 && qxij$) {
            for (var xgil$t = ezf_4(d58w20, {}), av4_ = 0x0; qxij$ > av4_; av4_++) {
              var zytrlh = $xli[av4_];vfzh(zytrlh['offset']), zytrlh['locator'] = ezf_4(d58w20, {});
            }d06k9b['locator'] = xgil$t, evr4yz($xli, d06k9b, apcm) && fv4_y7['push']($xli), d06k9b['locator'] = d58w20;
          } else evr4yz($xli, d06k9b, apcm) && fv4_y7['push']($xli);'http://www.w3.org/1999/xhtml' !== $xli['uri'] || $xli['closed'] ? $3igx++ : $3igx = el$g(hlxgrt, $3igx, $xli['tagName'], z_vyf4, d06k9b);}
    } catch (hyrv) {
      t$lh['error']('element parse error: ' + hyrv), $3igx = -0x1;
    }$3igx > qij3$x ? qij3$x = $3igx : yvhfr(Math['max'](d805b, qij3$x) + 0x1);
  }
}function ezf_4(hgrxl, d6580b) {
  return d6580b['lineNumber'] = hgrxl['lineNumber'], d6580b['columnNumber'] = hgrxl['columnNumber'], d6580b;
}function ej3n$i(xj3$gi, qsunj3, d1852w, usnqj3, ylzf, ji$xq3) {
  for (var njqu3i, ks6u9, fzy_ = ++qsunj3, b6s90 = elhzr;;) {
    var d5680b = xj3$gi['charAt'](fzy_);switch (d5680b) {case '=':
        if (b6s90 === eq$xji) njqu3i = xj3$gi['slice'](qsunj3, fzy_), b6s90 = enq9s3u;else {
          if (b6s90 !== euq3jsn) throw new Error('attribute equal must after attrName');b6s90 = enq9s3u;
        }break;case '\x27':case '\x22':
        if (b6s90 === enq9s3u || b6s90 === eq$xji) {
          if (b6s90 === eq$xji && (ji$xq3['warning']('attribute value must after "="'), njqu3i = xj3$gi['slice'](qsunj3, fzy_)), qsunj3 = fzy_ + 0x1, fzy_ = xj3$gi['indexOf'](d5680b, qsunj3), !(fzy_ > 0x0)) throw new Error('attribute value no end \'' + d5680b + '\' match');ks6u9 = xj3$gi['slice'](qsunj3, fzy_)['replace'](/&#?\w+;/g, ylzf), d1852w['add'](njqu3i, ks6u9, qsunj3 - 0x1), b6s90 = ens3j;
        } else {
          if (b6s90 != e$3gxi) throw new Error('attribute value must after "="');ks6u9 = xj3$gi['slice'](qsunj3, fzy_)['replace'](/&#?\w+;/g, ylzf), d1852w['add'](njqu3i, ks6u9, qsunj3), ji$xq3['warning']('attribute "' + njqu3i + '" missed start quot(' + d5680b + ')!!'), qsunj3 = fzy_ + 0x1, b6s90 = ens3j;
        }break;case '/':
        switch (b6s90) {case elhzr:
            d1852w['setTagName'](xj3$gi['slice'](qsunj3, fzy_));case ens3j:case es3nj:case ec7o_ma:
            b6s90 = ec7o_ma, d1852w['closed'] = !0x0;case e$3gxi:case eq$xji:case euq3jsn:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return ji$xq3['error']('unexpected end of input'), b6s90 == elhzr && d1852w['setTagName'](xj3$gi['slice'](qsunj3, fzy_)), fzy_;case '>':
        switch (b6s90) {case elhzr:
            d1852w['setTagName'](xj3$gi['slice'](qsunj3, fzy_));case ens3j:case es3nj:case ec7o_ma:
            break;case e$3gxi:case eq$xji:
            ks6u9 = xj3$gi['slice'](qsunj3, fzy_), '/' === ks6u9['slice'](-0x1) && (d1852w['closed'] = !0x0, ks6u9 = ks6u9['slice'](0x0, -0x1));case euq3jsn:
            b6s90 === euq3jsn && (ks6u9 = njqu3i), b6s90 == e$3gxi ? (ji$xq3['warning']('attribute "' + ks6u9 + '" missed quot(")!!'), d1852w['add'](njqu3i, ks6u9['replace'](/&#?\w+;/g, ylzf), qsunj3)) : ('http://www.w3.org/1999/xhtml' === usnqj3[''] && ks6u9['match'](/^(?:disabled|checked|selected)$/i) || ji$xq3['warning']('attribute "' + ks6u9 + '" missed value!! "' + ks6u9 + '" instead!!'), d1852w['add'](ks6u9, ks6u9, qsunj3));break;case enq9s3u:
            throw new Error('attribute value missed!!');}return fzy_;case '\u0080':
        d5680b = '\x20';default:
        if ('\x20' >= d5680b) switch (b6s90) {case elhzr:
            d1852w['setTagName'](xj3$gi['slice'](qsunj3, fzy_)), b6s90 = es3nj;break;case eq$xji:
            njqu3i = xj3$gi['slice'](qsunj3, fzy_), b6s90 = euq3jsn;break;case e$3gxi:
            var ks6u9 = xj3$gi['slice'](qsunj3, fzy_)['replace'](/&#?\w+;/g, ylzf);ji$xq3['warning']('attribute "' + ks6u9 + '" missed quot(")!!'), d1852w['add'](njqu3i, ks6u9, qsunj3);case ens3j:
            b6s90 = es3nj;} else switch (b6s90) {case euq3jsn:
            {
              d1852w['tagName'];
            }'http://www.w3.org/1999/xhtml' === usnqj3[''] && njqu3i['match'](/^(?:disabled|checked|selected)$/i) || ji$xq3['warning']('attribute "' + njqu3i + '" missed value!! "' + njqu3i + '" instead2!!'), d1852w['add'](njqu3i, njqu3i, qsunj3), qsunj3 = fzy_, b6s90 = eq$xji;break;case ens3j:
            ji$xq3['warning']('attribute space is required"' + njqu3i + '\x22!!');case es3nj:
            b6s90 = eq$xji, qsunj3 = fzy_;break;case enq9s3u:
            b6s90 = e$3gxi, qsunj3 = fzy_;break;case ec7o_ma:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}fzy_++;
  }
}function evr4yz(ltrx, qu93sn, eompac) {
  for (var cm = ltrx['tagName'], ma7_v4 = null, qxij3 = ltrx['length']; qxij3--;) {
    var snujq = ltrx[qxij3],
        macpe = snujq['qName'],
        hxgt$l = snujq['value'],
        zvhy = macpe['indexOf'](':');if (zvhy > 0x0) var $jtgix = snujq['prefix'] = macpe['slice'](0x0, zvhy),
        u3qij = macpe['slice'](zvhy + 0x1),
        $gtil = 'xmlns' === $jtgix && u3qij;else u3qij = macpe, $jtgix = null, $gtil = 'xmlns' === macpe && '';snujq['localName'] = u3qij, $gtil !== !0x1 && (null == ma7_v4 && (ma7_v4 = {}, eqnuj(eompac, eompac = {})), eompac[$gtil] = ma7_v4[$gtil] = hxgt$l, snujq['uri'] = 'http://www.w3.org/2000/xmlns/', qu93sn['startPrefixMapping']($gtil, hxgt$l));
  }for (var qxij3 = ltrx['length']; qxij3--;) {
    snujq = ltrx[qxij3];var $jtgix = snujq['prefix'];$jtgix && ('xml' === $jtgix && (snujq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== $jtgix && (snujq['uri'] = eompac[$jtgix || '']));
  }var zvhy = cm['indexOf'](':');zvhy > 0x0 ? ($jtgix = ltrx['prefix'] = cm['slice'](0x0, zvhy), u3qij = ltrx['localName'] = cm['slice'](zvhy + 0x1)) : ($jtgix = null, u3qij = ltrx['localName'] = cm);var $xtlhg = ltrx['uri'] = eompac[$jtgix || ''];if (qu93sn['startElement']($xtlhg, u3qij, cm, ltrx), !ltrx['closed']) return ltrx['currentNSMap'] = eompac, ltrx['localNSMap'] = ma7_v4, !0x0;if (qu93sn['endElement']($xtlhg, u3qij, cm), ma7_v4) {
    for ($jtgix in ma7_v4) qu93sn['endPrefixMapping']($jtgix);
  }
}function el$g(ji3qun, suk6n, vz4rfy, y_vf47, gzrht) {
  if (/^(?:script|textarea)$/i['test'](vz4rfy)) {
    var gtzr = ji3qun['indexOf']('</' + vz4rfy + '>', suk6n),
        skb06 = ji3qun['substring'](suk6n + 0x1, gtzr);if (/[&<]/['test'](skb06)) return (/^script$/i['test'](vz4rfy) ? (gzrht['characters'](skb06, 0x0, skb06['length']), gtzr) : (skb06 = skb06['replace'](/&#?\w+;/g, y_vf47), gzrht['characters'](skb06, 0x0, skb06['length']), gtzr)
    );
  }return suk6n + 0x1;
}function evfzy(t$xlig, a7cm_, u3nqsj, p7com) {
  var hltzrg = p7com[u3nqsj];return null == hltzrg && (hltzrg = t$xlig['lastIndexOf']('</' + u3nqsj + '>'), a7cm_ > hltzrg && (hltzrg = t$xlig['lastIndexOf']('</' + u3nqsj)), p7com[u3nqsj] = hltzrg), a7cm_ > hltzrg;
}function eqnuj(a4v_7, b0w5) {
  for (var gxtl in a4v_7) b0w5[gxtl] = a4v_7[gxtl];
}function ezglrt(v4fry, trhzgl, xj3gi, m_c4a) {
  var hzgtl = v4fry['charAt'](trhzgl + 0x2);switch (hzgtl) {case '-':
      if ('-' === v4fry['charAt'](trhzgl + 0x3)) {
        var qn3$ = v4fry['indexOf']('-->', trhzgl + 0x4);return qn3$ > trhzgl ? (xj3gi['comment'](v4fry, trhzgl + 0x4, qn3$ - trhzgl - 0x4), qn3$ + 0x3) : (m_c4a['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == v4fry['substr'](trhzgl + 0x3, 0x6)) {
        var qn3$ = v4fry['indexOf'](']]>', trhzgl + 0x9);return xj3gi['startCDATA'](), xj3gi['characters'](v4fry, trhzgl + 0x9, qn3$ - trhzgl - 0x9), xj3gi['endCDATA'](), qn3$ + 0x3;
      }var f_47 = eku96sb(v4fry, trhzgl),
          zv_y = f_47['length'];if (zv_y > 0x1 && /!doctype/i['test'](f_47[0x0][0x0])) {
        var njs3uq = f_47[0x1][0x0],
            meaco = zv_y > 0x3 && /^public$/i['test'](f_47[0x2][0x0]) && f_47[0x3][0x0],
            ythl = zv_y > 0x4 && f_47[0x4][0x0],
            unq = f_47[zv_y - 0x1];return xj3gi['startDTD'](njs3uq, meaco && meaco['replace'](/^(['"])(.*?)\1$/, '$2'), ythl && ythl['replace'](/^(['"])(.*?)\1$/, '$2')), xj3gi['endDTD'](), unq['index'] + unq[0x0]['length'];
      }}return -0x1;
}function egrhztl(k60bd, uk9qsn, grxl) {
  var _c7amo = k60bd['indexOf']('?>', uk9qsn);if (_c7amo) {
    var _m7ac = k60bd['substring'](uk9qsn, _c7amo)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (_m7ac) {
      {
        _m7ac[0x0]['length'];
      }return grxl['processingInstruction'](_m7ac[0x1], _m7ac[0x2]), _c7amo + 0x2;
    }return -0x1;
  }return -0x1;
}function esk6u9() {}function ezlhtrg(in3$, iqjn3u) {
  return in3$['__proto__'] = iqjn3u, in3$;
}function eku96sb(vzy4rf, yrfhvz) {
  var $x3jqi,
      xj$3q = [],
      d865b0 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (d865b0['lastIndex'] = yrfhvz, d865b0['exec'](vzy4rf); $x3jqi = d865b0['exec'](vzy4rf);) if (xj$3q['push']($x3jqi), $x3jqi[0x1]) return xj$3q;
}var ek5d0b = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ea4mv_7 = new RegExp('[\\-\\.0-9' + ek5d0b['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ev4fy = new RegExp('^' + ek5d0b['source'] + ea4mv_7['source'] + '*(?::' + ek5d0b['source'] + ea4mv_7['source'] + '*)?$'),
    elhzr = 0x0,
    eq$xji = 0x1,
    euq3jsn = 0x2,
    enq9s3u = 0x3,
    e$3gxi = 0x4,
    ens3j = 0x5,
    es3nj = 0x6,
    ec7o_ma = 0x7;ehflzr['prototype'] = { 'parse': function (niq3u, nsk9q, _a47f) {
    var kus96b = this['domBuilder'];kus96b['startDocument'](), eqnuj(nsk9q, nsk9q = {}), elhtry(niq3u, nsk9q, _a47f, kus96b, this['errorHandler']), kus96b['endDocument']();
  } }, esk6u9['prototype'] = { 'setTagName': function (ocmape) {
    if (!ev4fy['test'](ocmape)) throw new Error('invalid tagName:' + ocmape);this['tagName'] = ocmape;
  }, 'add': function (u6n9, it$xg, y_z4fv) {
    if (!ev4fy['test'](u6n9)) throw new Error('invalid attribute:' + u6n9);this[this['length']++] = { 'qName': u6n9, 'value': it$xg, 'offset': y_z4fv };
  }, 'length': 0x0, 'getLocalName': function (jqn3i$) {
    return this[jqn3i$]['localName'];
  }, 'getLocator': function (f74v_a) {
    return this[f74v_a]['locator'];
  }, 'getQName': function (lhxtg) {
    return this[lhxtg]['qName'];
  }, 'getURI': function (bsk96) {
    return this[bsk96]['uri'];
  }, 'getValue': function (a47m_) {
    return this[a47m_]['value'];
  } }, ezlhtrg({}, ezlhtrg['prototype']) instanceof ezlhtrg || (ezlhtrg = function (frhzyv, vm_4a7) {
  function paeoc() {}paeoc['prototype'] = vm_4a7, paeoc = new paeoc();for (vm_4a7 in frhzyv) paeoc[vm_4a7] = frhzyv[vm_4a7];return paeoc;
}), exports['XMLReader'] = ehflzr;