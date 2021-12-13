var M = wx.$T;
function tez7p() {}function taskbr(t9c2vi, zd7f, hxy_mw, pfz$dv, vd9pi$) {
  function kasujb(y0_mq) {
    if (y0_mq > 0xffff) {
      y0_mq -= 0x10000;var pvz$d = 0xd800 + (y0_mq >> 0xa),
          yxh_0m = 0xdc00 + (0x3ff & y0_mq);return String['fromCharCode'](pvz$d, yxh_0m);
    }return String['fromCharCode'](y0_mq);
  }function gn13(e7opz) {
    var eqy0x = e7opz['slice'](0x1, -0x1);return eqy0x in hxy_mw ? hxy_mw[eqy0x] : '#' === eqy0x['charAt'](0x0) ? kasujb(parseInt(eqy0x['substr'](0x1)['replace']('x', '0x'))) : (vd9pi$['error']('entity not found:' + e7opz), e7opz);
  }function dvf9p(_xeqy) {
    if (_xeqy > r8n3j) {
      var oepf7 = t9c2vi['substring'](r8n3j, _xeqy)['replace'](/&#?\w+;/g, gn13);xq0_ && vpd9(r8n3j), pfz$dv['characters'](oepf7, 0x0, _xeqy - r8n3j), r8n3j = _xeqy;
    }
  }function vpd9(t2i9c4, qfe) {
    for (; t2i9c4 >= fpvd$9 && (qfe = gr3bnj['exec'](t9c2vi));) h8165 = qfe['index'], fpvd$9 = h8165 + qfe[0x0]['length'], xq0_['lineNumber']++;xq0_['columnNumber'] = t2i9c4 - h8165 + 0x1;
  }for (var h8165 = 0x0, fpvd$9 = 0x0, gr3bnj = /.*(?:\r\n?|\n)|.*$/g, xq0_ = pfz$dv['locator'], oq70z = [{ 'currentNSMap': zd7f }], i92c = {}, r8n3j = 0x0;;) {
    try {
      var $pid = t9c2vi['indexOf']('<', r8n3j);if (0x0 > $pid) {
        if (!t9c2vi['substr'](r8n3j)['match'](/^\s*$/)) {
          var jsbkua = pfz$dv['doc'],
              pzdvf = jsbkua['createTextNode'](t9c2vi['substr'](r8n3j));jsbkua['appendChild'](pzdvf), pfz$dv['currentElement'] = pzdvf;
        }return;
      }switch ($pid > r8n3j && dvf9p($pid), t9c2vi['charAt']($pid + 0x1)) {case '/':
          var ze7fq = t9c2vi['indexOf']('>', $pid + 0x3),
              fz7$d = t9c2vi['substring']($pid + 0x2, ze7fq),
              y5hm_ = oq70z['pop']();0x0 > ze7fq ? (fz7$d = t9c2vi['substring']($pid + 0x2)['replace'](/[\s<].*/, ''), vd9pi$['error']('end tag name: ' + fz7$d + ' is not complete:' + y5hm_['tagName']), ze7fq = $pid + 0x1 + fz7$d['length']) : fz7$d['match'](/\s</) && (fz7$d = fz7$d['replace'](/[\s<].*/, ''), vd9pi$['error']('end tag name: ' + fz7$d + ' maybe not complete'), ze7fq = $pid + 0x1 + fz7$d['length']);var arjkg = y5hm_['localNSMap'],
              ct24i9 = y5hm_['tagName'] == fz7$d,
              fdpv$ = ct24i9 || y5hm_['tagName'] && y5hm_['tagName']['toLowerCase']() == fz7$d['toLowerCase']();if (fdpv$) {
            if (pfz$dv['endElement'](y5hm_['uri'], y5hm_['localName'], fz7$d), arjkg) {
              for (var w653 in arjkg) pfz$dv['endPrefixMapping'](w653);
            }ct24i9 || vd9pi$['fatalError']('end tag name: ' + fz7$d + ' is not match the current start tagName:' + y5hm_['tagName']);
          } else oq70z['push'](y5hm_);ze7fq++;break;case '?':
          xq0_ && vpd9($pid), ze7fq = tzfpe7(t9c2vi, $pid, pfz$dv);break;case '!':
          xq0_ && vpd9($pid), ze7fq = ti924c(t9c2vi, $pid, pfz$dv, vd9pi$);break;default:
          xq0_ && vpd9($pid);var dp7fz = new tzodfp(),
              xq0eo = oq70z[oq70z['length'] - 0x1]['currentNSMap'],
              ze7fq = tajrkbg(t9c2vi, $pid, dp7fz, xq0eo, gn13, vd9pi$),
              $fdvz = dp7fz['length'];if (!dp7fz['closed'] && ty_mwhx(t9c2vi, ze7fq, dp7fz['tagName'], i92c) && (dp7fz['closed'] = !0x0, hxy_mw['nbsp'] || vd9pi$['warning']('unclosed xml attribute')), xq0_ && $fdvz) {
            for (var ti2lc4 = tnrjga(xq0_, {}), xq70oe = 0x0; $fdvz > xq70oe; xq70oe++) {
              var m165 = dp7fz[xq70oe];vpd9(m165['offset']), m165['locator'] = tnrjga(xq0_, {});
            }pfz$dv['locator'] = ti2lc4, th_w65m(dp7fz, pfz$dv, xq0eo) && oq70z['push'](dp7fz), pfz$dv['locator'] = xq0_;
          } else th_w65m(dp7fz, pfz$dv, xq0eo) && oq70z['push'](dp7fz);'http://www.w3.org/1999/xhtml' !== dp7fz['uri'] || dp7fz['closed'] ? ze7fq++ : ze7fq = ty0_qmx(t9c2vi, ze7fq, dp7fz['tagName'], gn13, pfz$dv);}
    } catch (fpzd$7) {
      vd9pi$['error']('element parse error: ' + fpzd$7), ze7fq = -0x1;
    }ze7fq > r8n3j ? r8n3j = ze7fq : dvf9p(Math['max']($pid, r8n3j) + 0x1);
  }
}function tnrjga(fz7dpo, n35168) {
  return n35168['lineNumber'] = fz7dpo['lineNumber'], n35168['columnNumber'] = fz7dpo['columnNumber'], n35168;
}function tajrkbg(fp7oz, epo7f, ct9$, fzoq7e, nb3g, asb) {
  for (var skrj, n8516, yw_h5m = ++epo7f, vtci9 = trgjnba;;) {
    var w_65h = fp7oz['charAt'](yw_h5m);switch (w_65h) {case '=':
        if (vtci9 === tzpvf) skrj = fp7oz['slice'](epo7f, yw_h5m), vtci9 = tivct92;else {
          if (vtci9 !== tmyqx0_) throw new Error('attribute equal must after attrName');vtci9 = tivct92;
        }break;case '\x27':case '\x22':
        if (vtci9 === tivct92 || vtci9 === tzpvf) {
          if (vtci9 === tzpvf && (asb['warning']('attribute value must after "="'), skrj = fp7oz['slice'](epo7f, yw_h5m)), epo7f = yw_h5m + 0x1, yw_h5m = fp7oz['indexOf'](w_65h, epo7f), !(yw_h5m > 0x0)) throw new Error('attribute value no end \'' + w_65h + '\' match');n8516 = fp7oz['slice'](epo7f, yw_h5m)['replace'](/&#?\w+;/g, nb3g), ct9$['add'](skrj, n8516, epo7f - 0x1), vtci9 = tw6m51;
        } else {
          if (vtci9 != teqoz) throw new Error('attribute value must after "="');n8516 = fp7oz['slice'](epo7f, yw_h5m)['replace'](/&#?\w+;/g, nb3g), ct9$['add'](skrj, n8516, epo7f), asb['warning']('attribute "' + skrj + '" missed start quot(' + w_65h + ')!!'), epo7f = yw_h5m + 0x1, vtci9 = tw6m51;
        }break;case '/':
        switch (vtci9) {case trgjnba:
            ct9$['setTagName'](fp7oz['slice'](epo7f, yw_h5m));case tw6m51:case tmq0y_x:case ti9t4c2:
            vtci9 = ti9t4c2, ct9$['closed'] = !0x0;case teqoz:case tzpvf:case tmyqx0_:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return asb['error']('unexpected end of input'), vtci9 == trgjnba && ct9$['setTagName'](fp7oz['slice'](epo7f, yw_h5m)), yw_h5m;case '>':
        switch (vtci9) {case trgjnba:
            ct9$['setTagName'](fp7oz['slice'](epo7f, yw_h5m));case tw6m51:case tmq0y_x:case ti9t4c2:
            break;case teqoz:case tzpvf:
            n8516 = fp7oz['slice'](epo7f, yw_h5m), '/' === n8516['slice'](-0x1) && (ct9$['closed'] = !0x0, n8516 = n8516['slice'](0x0, -0x1));case tmyqx0_:
            vtci9 === tmyqx0_ && (n8516 = skrj), vtci9 == teqoz ? (asb['warning']('attribute "' + n8516 + '" missed quot(")!!'), ct9$['add'](skrj, n8516['replace'](/&#?\w+;/g, nb3g), epo7f)) : ('http://www.w3.org/1999/xhtml' === fzoq7e[''] && n8516['match'](/^(?:disabled|checked|selected)$/i) || asb['warning']('attribute "' + n8516 + '" missed value!! "' + n8516 + '" instead!!'), ct9$['add'](n8516, n8516, epo7f));break;case tivct92:
            throw new Error('attribute value missed!!');}return yw_h5m;case '\u0080':
        w_65h = '\x20';default:
        if ('\x20' >= w_65h) switch (vtci9) {case trgjnba:
            ct9$['setTagName'](fp7oz['slice'](epo7f, yw_h5m)), vtci9 = tmq0y_x;break;case tzpvf:
            skrj = fp7oz['slice'](epo7f, yw_h5m), vtci9 = tmyqx0_;break;case teqoz:
            var n8516 = fp7oz['slice'](epo7f, yw_h5m)['replace'](/&#?\w+;/g, nb3g);asb['warning']('attribute "' + n8516 + '" missed quot(")!!'), ct9$['add'](skrj, n8516, epo7f);case tw6m51:
            vtci9 = tmq0y_x;} else switch (vtci9) {case tmyqx0_:
            {
              ct9$['tagName'];
            }'http://www.w3.org/1999/xhtml' === fzoq7e[''] && skrj['match'](/^(?:disabled|checked|selected)$/i) || asb['warning']('attribute "' + skrj + '" missed value!! "' + skrj + '" instead2!!'), ct9$['add'](skrj, skrj, epo7f), epo7f = yw_h5m, vtci9 = tzpvf;break;case tw6m51:
            asb['warning']('attribute space is required"' + skrj + '\x22!!');case tmq0y_x:
            vtci9 = tzpvf, epo7f = yw_h5m;break;case tivct92:
            vtci9 = teqoz, epo7f = yw_h5m;break;case ti9t4c2:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}yw_h5m++;
  }
}function th_w65m(bkgraj, c9d$v, h5816) {
  for (var rng38j = bkgraj['tagName'], _eqxy = null, df = bkgraj['length']; df--;) {
    var ofe7zq = bkgraj[df],
        dvp9$f = ofe7zq['qName'],
        _my5 = ofe7zq['value'],
        eoq70x = dvp9$f['indexOf'](':');if (eoq70x > 0x0) var baks = ofe7zq['prefix'] = dvp9$f['slice'](0x0, eoq70x),
        ivct2 = dvp9$f['slice'](eoq70x + 0x1),
        cl42ti = 'xmlns' === baks && ivct2;else ivct2 = dvp9$f, baks = null, cl42ti = 'xmlns' === dvp9$f && '';ofe7zq['localName'] = ivct2, cl42ti !== !0x1 && (null == _eqxy && (_eqxy = {}, ti9t2c4(h5816, h5816 = {})), h5816[cl42ti] = _eqxy[cl42ti] = _my5, ofe7zq['uri'] = 'http://www.w3.org/2000/xmlns/', c9d$v['startPrefixMapping'](cl42ti, _my5));
  }for (var df = bkgraj['length']; df--;) {
    ofe7zq = bkgraj[df];var baks = ofe7zq['prefix'];baks && ('xml' === baks && (ofe7zq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== baks && (ofe7zq['uri'] = h5816[baks || '']));
  }var eoq70x = rng38j['indexOf'](':');eoq70x > 0x0 ? (baks = bkgraj['prefix'] = rng38j['slice'](0x0, eoq70x), ivct2 = bkgraj['localName'] = rng38j['slice'](eoq70x + 0x1)) : (baks = null, ivct2 = bkgraj['localName'] = rng38j);var iv9c$d = bkgraj['uri'] = h5816[baks || ''];if (c9d$v['startElement'](iv9c$d, ivct2, rng38j, bkgraj), !bkgraj['closed']) return bkgraj['currentNSMap'] = h5816, bkgraj['localNSMap'] = _eqxy, !0x0;if (c9d$v['endElement'](iv9c$d, ivct2, rng38j), _eqxy) {
    for (baks in _eqxy) c9d$v['endPrefixMapping'](baks);
  }
}function ty0_qmx(jgabkr, x0qoe, $pvf9d, qexy_, askju) {
  if (/^(?:script|textarea)$/i['test']($pvf9d)) {
    var vzpf$d = jgabkr['indexOf']('</' + $pvf9d + '>', x0qoe),
        poez = jgabkr['substring'](x0qoe + 0x1, vzpf$d);if (/[&<]/['test'](poez)) return (/^script$/i['test']($pvf9d) ? (askju['characters'](poez, 0x0, poez['length']), vzpf$d) : (poez = poez['replace'](/&#?\w+;/g, qexy_), askju['characters'](poez, 0x0, poez['length']), vzpf$d)
    );
  }return x0qoe + 0x1;
}function ty_mwhx(x0q_my, garkjb, mhwy_x, y5_whm) {
  var jgn38r = y5_whm[mhwy_x];return null == jgn38r && (jgn38r = x0q_my['lastIndexOf']('</' + mhwy_x + '>'), garkjb > jgn38r && (jgn38r = x0q_my['lastIndexOf']('</' + mhwy_x)), y5_whm[mhwy_x] = jgn38r), garkjb > jgn38r;
}function ti9t2c4(mw61h5, hw86) {
  for (var y0xo in mw61h5) hw86[y0xo] = mw61h5[y0xo];
}function ti924c(q_0ex, xy_hmw, rgbka, w61mh) {
  var c49it = q_0ex['charAt'](xy_hmw + 0x2);switch (c49it) {case '-':
      if ('-' === q_0ex['charAt'](xy_hmw + 0x3)) {
        var t9ci$ = q_0ex['indexOf']('-->', xy_hmw + 0x4);return t9ci$ > xy_hmw ? (rgbka['comment'](q_0ex, xy_hmw + 0x4, t9ci$ - xy_hmw - 0x4), t9ci$ + 0x3) : (w61mh['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == q_0ex['substr'](xy_hmw + 0x3, 0x6)) {
        var t9ci$ = q_0ex['indexOf'](']]>', xy_hmw + 0x9);return rgbka['startCDATA'](), rgbka['characters'](q_0ex, xy_hmw + 0x9, t9ci$ - xy_hmw - 0x9), rgbka['endCDATA'](), t9ci$ + 0x3;
      }var z$pdfv = tbuak(q_0ex, xy_hmw),
          j3ngb = z$pdfv['length'];if (j3ngb > 0x1 && /!doctype/i['test'](z$pdfv[0x0][0x0])) {
        var g8j3n = z$pdfv[0x1][0x0],
            _mh6 = j3ngb > 0x3 && /^public$/i['test'](z$pdfv[0x2][0x0]) && z$pdfv[0x3][0x0],
            xy0_q = j3ngb > 0x4 && z$pdfv[0x4][0x0],
            m1wh56 = z$pdfv[j3ngb - 0x1];return rgbka['startDTD'](g8j3n, _mh6 && _mh6['replace'](/^(['"])(.*?)\1$/, '$2'), xy0_q && xy0_q['replace'](/^(['"])(.*?)\1$/, '$2')), rgbka['endDTD'](), m1wh56['index'] + m1wh56[0x0]['length'];
      }}return -0x1;
}function tzfpe7(eqx_y0, vd$i9, op7zfe) {
  var $vp9 = eqx_y0['indexOf']('?>', vd$i9);if ($vp9) {
    var jb3nrg = eqx_y0['substring'](vd$i9, $vp9)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (jb3nrg) {
      {
        jb3nrg[0x0]['length'];
      }return op7zfe['processingInstruction'](jb3nrg[0x1], jb3nrg[0x2]), $vp9 + 0x2;
    }return -0x1;
  }return -0x1;
}function tzodfp() {}function txo07eq(zpdvf$, $9fpdv) {
  return zpdvf$['__proto__'] = $9fpdv, zpdvf$;
}function tbuak(n1856, o7zep) {
  var xhw_,
      tcl2 = [],
      $9cd = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for ($9cd['lastIndex'] = o7zep, $9cd['exec'](n1856); xhw_ = $9cd['exec'](n1856);) if (tcl2['push'](xhw_), xhw_[0x1]) return tcl2;
}var tvdzp$ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tsjak = new RegExp('[\\-\\.0-9' + tvdzp$['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tv$ip9d = new RegExp('^' + tvdzp$['source'] + tsjak['source'] + '*(?::' + tvdzp$['source'] + tsjak['source'] + '*)?$'),
    trgjnba = 0x0,
    tzpvf = 0x1,
    tmyqx0_ = 0x2,
    tivct92 = 0x3,
    teqoz = 0x4,
    tw6m51 = 0x5,
    tmq0y_x = 0x6,
    ti9t4c2 = 0x7;tez7p['prototype'] = { 'parse': function (grn38, ci42, xe0y_) {
    var qof7ez = this['domBuilder'];qof7ez['startDocument'](), ti9t2c4(ci42, ci42 = {}), taskbr(grn38, ci42, xe0y_, qof7ez, this['errorHandler']), qof7ez['endDocument']();
  } }, tzodfp['prototype'] = { 'setTagName': function (ct4i9) {
    if (!tv$ip9d['test'](ct4i9)) throw new Error('invalid tagName:' + ct4i9);this['tagName'] = ct4i9;
  }, 'add': function (d$9pfv, pdvi9, yqeox) {
    if (!tv$ip9d['test'](d$9pfv)) throw new Error('invalid attribute:' + d$9pfv);this[this['length']++] = { 'qName': d$9pfv, 'value': pdvi9, 'offset': yqeox };
  }, 'length': 0x0, 'getLocalName': function (w53168) {
    return this[w53168]['localName'];
  }, 'getLocator': function (itv9$) {
    return this[itv9$]['locator'];
  }, 'getQName': function (r1g83n) {
    return this[r1g83n]['qName'];
  }, 'getURI': function (y0mxh_) {
    return this[y0mxh_]['uri'];
  }, 'getValue': function ($pv9id) {
    return this[$pv9id]['value'];
  } }, txo07eq({}, txo07eq['prototype']) instanceof txo07eq || (txo07eq = function (il4c, my0_qx) {
  function hw1m6() {}hw1m6['prototype'] = my0_qx, hw1m6 = new hw1m6();for (my0_qx in il4c) hw1m6[my0_qx] = il4c[my0_qx];return hw1m6;
}), exports['XMLReader'] = tez7p;