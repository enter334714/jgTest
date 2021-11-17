var M = wx.$T;
function tx_hm0y() {}function tjng3rb(ranjg, w5h168, g3nr8, n3581, h1wm56) {
  function i4lt(ofe7z) {
    if (ofe7z > 0xffff) {
      ofe7z -= 0x10000;var lict2 = 0xd800 + (ofe7z >> 0xa),
          ex_0 = 0xdc00 + (0x3ff & ofe7z);return String['fromCharCode'](lict2, ex_0);
    }return String['fromCharCode'](ofe7z);
  }function sbjk(yx0oq) {
    var ezf7oq = yx0oq['slice'](0x1, -0x1);return ezf7oq in g3nr8 ? g3nr8[ezf7oq] : '#' === ezf7oq['charAt'](0x0) ? i4lt(parseInt(ezf7oq['substr'](0x1)['replace']('x', '0x'))) : (h1wm56['error']('entity not found:' + yx0oq), yx0oq);
  }function qy0o(ic42t) {
    if (ic42t > t9v2ic) {
      var nrj38g = ranjg['substring'](t9v2ic, ic42t)['replace'](/&#?\w+;/g, sbjk);w815h6 && rjn83(t9v2ic), n3581['characters'](nrj38g, 0x0, ic42t - t9v2ic), t9v2ic = ic42t;
    }
  }function rjn83(j3nbrg, zoeq) {
    for (; j3nbrg >= ymwh5_ && (zoeq = y_x0h['exec'](ranjg));) t$vc9 = zoeq['index'], ymwh5_ = t$vc9 + zoeq[0x0]['length'], w815h6['lineNumber']++;w815h6['columnNumber'] = j3nbrg - t$vc9 + 0x1;
  }for (var t$vc9 = 0x0, ymwh5_ = 0x0, y_x0h = /.*(?:\r\n?|\n)|.*$/g, w815h6 = n3581['locator'], ksaujb = [{ 'currentNSMap': w5h168 }], rk = {}, t9v2ic = 0x0;;) {
    try {
      var qe7zof = ranjg['indexOf']('<', t9v2ic);if (0x0 > qe7zof) {
        if (!ranjg['substr'](t9v2ic)['match'](/^\s*$/)) {
          var ic9t2v = n3581['doc'],
              xeoyq = ic9t2v['createTextNode'](ranjg['substr'](t9v2ic));ic9t2v['appendChild'](xeoyq), n3581['currentElement'] = xeoyq;
        }return;
      }switch (qe7zof > t9v2ic && qy0o(qe7zof), ranjg['charAt'](qe7zof + 0x1)) {case '/':
          var pdfoz7 = ranjg['indexOf']('>', qe7zof + 0x3),
              yhx_wm = ranjg['substring'](qe7zof + 0x2, pdfoz7),
              ict$9v = ksaujb['pop']();0x0 > pdfoz7 ? (yhx_wm = ranjg['substring'](qe7zof + 0x2)['replace'](/[\s<].*/, ''), h1wm56['error']('end tag name: ' + yhx_wm + ' is not complete:' + ict$9v['tagName']), pdfoz7 = qe7zof + 0x1 + yhx_wm['length']) : yhx_wm['match'](/\s</) && (yhx_wm = yhx_wm['replace'](/[\s<].*/, ''), h1wm56['error']('end tag name: ' + yhx_wm + ' maybe not complete'), pdfoz7 = qe7zof + 0x1 + yhx_wm['length']);var j8rng3 = ict$9v['localNSMap'],
              h0xm_y = ict$9v['tagName'] == yhx_wm,
              xeqo0y = h0xm_y || ict$9v['tagName'] && ict$9v['tagName']['toLowerCase']() == yhx_wm['toLowerCase']();if (xeqo0y) {
            if (n3581['endElement'](ict$9v['uri'], ict$9v['localName'], yhx_wm), j8rng3) {
              for (var lti in j8rng3) n3581['endPrefixMapping'](lti);
            }h0xm_y || h1wm56['fatalError']('end tag name: ' + yhx_wm + ' is not match the current start tagName:' + ict$9v['tagName']);
          } else ksaujb['push'](ict$9v);pdfoz7++;break;case '?':
          w815h6 && rjn83(qe7zof), pdfoz7 = tx_hym0(ranjg, qe7zof, n3581);break;case '!':
          w815h6 && rjn83(qe7zof), pdfoz7 = tv$cdi(ranjg, qe7zof, n3581, h1wm56);break;default:
          w815h6 && rjn83(qe7zof);var bkjs = new teoqy0x(),
              rb3jgn = ksaujb[ksaujb['length'] - 0x1]['currentNSMap'],
              pdfoz7 = t$zfp(ranjg, qe7zof, bkjs, rb3jgn, sbjk, h1wm56),
              ez7qof = bkjs['length'];if (!bkjs['closed'] && tclt24i(ranjg, pdfoz7, bkjs['tagName'], rk) && (bkjs['closed'] = !0x0, g3nr8['nbsp'] || h1wm56['warning']('unclosed xml attribute')), w815h6 && ez7qof) {
            for (var cl42 = tm_yhx0(w815h6, {}), skbra = 0x0; ez7qof > skbra; skbra++) {
              var f7doz = bkjs[skbra];rjn83(f7doz['offset']), f7doz['locator'] = tm_yhx0(w815h6, {});
            }n3581['locator'] = cl42, tmxqy(bkjs, n3581, rb3jgn) && ksaujb['push'](bkjs), n3581['locator'] = w815h6;
          } else tmxqy(bkjs, n3581, rb3jgn) && ksaujb['push'](bkjs);'http://www.w3.org/1999/xhtml' !== bkjs['uri'] || bkjs['closed'] ? pdfoz7++ : pdfoz7 = tn35816(ranjg, pdfoz7, bkjs['tagName'], sbjk, n3581);}
    } catch (i$9dvp) {
      h1wm56['error']('element parse error: ' + i$9dvp), pdfoz7 = -0x1;
    }pdfoz7 > t9v2ic ? t9v2ic = pdfoz7 : qy0o(Math['max'](qe7zof, t9v2ic) + 0x1);
  }
}function tm_yhx0(p$vid9, vic92) {
  return vic92['lineNumber'] = p$vid9['lineNumber'], vic92['columnNumber'] = p$vid9['columnNumber'], vic92;
}function t$zfp(w1563, epfo7z, e0xq_, hx_mwy, m56hw1, xm0q_y) {
  for (var pefz7, _y0qe, nrb3 = ++epfo7z, bgrnja = tpdz7;;) {
    var fzdo7p = w1563['charAt'](nrb3);switch (fzdo7p) {case '=':
        if (bgrnja === to7qe) pefz7 = w1563['slice'](epfo7z, nrb3), bgrnja = tgbrj3n;else {
          if (bgrnja !== tc24t9i) throw new Error('attribute equal must after attrName');bgrnja = tgbrj3n;
        }break;case '\x27':case '\x22':
        if (bgrnja === tgbrj3n || bgrnja === to7qe) {
          if (bgrnja === to7qe && (xm0q_y['warning']('attribute value must after "="'), pefz7 = w1563['slice'](epfo7z, nrb3)), epfo7z = nrb3 + 0x1, nrb3 = w1563['indexOf'](fzdo7p, epfo7z), !(nrb3 > 0x0)) throw new Error('attribute value no end \'' + fzdo7p + '\' match');_y0qe = w1563['slice'](epfo7z, nrb3)['replace'](/&#?\w+;/g, m56hw1), e0xq_['add'](pefz7, _y0qe, epfo7z - 0x1), bgrnja = tm0_yh;
        } else {
          if (bgrnja != tq70zoe) throw new Error('attribute value must after "="');_y0qe = w1563['slice'](epfo7z, nrb3)['replace'](/&#?\w+;/g, m56hw1), e0xq_['add'](pefz7, _y0qe, epfo7z), xm0q_y['warning']('attribute "' + pefz7 + '" missed start quot(' + fzdo7p + ')!!'), epfo7z = nrb3 + 0x1, bgrnja = tm0_yh;
        }break;case '/':
        switch (bgrnja) {case tpdz7:
            e0xq_['setTagName'](w1563['slice'](epfo7z, nrb3));case tm0_yh:case tgarnbj:case tm_hy0:
            bgrnja = tm_hy0, e0xq_['closed'] = !0x0;case tq70zoe:case to7qe:case tc24t9i:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return xm0q_y['error']('unexpected end of input'), bgrnja == tpdz7 && e0xq_['setTagName'](w1563['slice'](epfo7z, nrb3)), nrb3;case '>':
        switch (bgrnja) {case tpdz7:
            e0xq_['setTagName'](w1563['slice'](epfo7z, nrb3));case tm0_yh:case tgarnbj:case tm_hy0:
            break;case tq70zoe:case to7qe:
            _y0qe = w1563['slice'](epfo7z, nrb3), '/' === _y0qe['slice'](-0x1) && (e0xq_['closed'] = !0x0, _y0qe = _y0qe['slice'](0x0, -0x1));case tc24t9i:
            bgrnja === tc24t9i && (_y0qe = pefz7), bgrnja == tq70zoe ? (xm0q_y['warning']('attribute "' + _y0qe + '" missed quot(")!!'), e0xq_['add'](pefz7, _y0qe['replace'](/&#?\w+;/g, m56hw1), epfo7z)) : ('http://www.w3.org/1999/xhtml' === hx_mwy[''] && _y0qe['match'](/^(?:disabled|checked|selected)$/i) || xm0q_y['warning']('attribute "' + _y0qe + '" missed value!! "' + _y0qe + '" instead!!'), e0xq_['add'](_y0qe, _y0qe, epfo7z));break;case tgbrj3n:
            throw new Error('attribute value missed!!');}return nrb3;case '\u0080':
        fzdo7p = '\x20';default:
        if ('\x20' >= fzdo7p) switch (bgrnja) {case tpdz7:
            e0xq_['setTagName'](w1563['slice'](epfo7z, nrb3)), bgrnja = tgarnbj;break;case to7qe:
            pefz7 = w1563['slice'](epfo7z, nrb3), bgrnja = tc24t9i;break;case tq70zoe:
            var _y0qe = w1563['slice'](epfo7z, nrb3)['replace'](/&#?\w+;/g, m56hw1);xm0q_y['warning']('attribute "' + _y0qe + '" missed quot(")!!'), e0xq_['add'](pefz7, _y0qe, epfo7z);case tm0_yh:
            bgrnja = tgarnbj;} else switch (bgrnja) {case tc24t9i:
            {
              e0xq_['tagName'];
            }'http://www.w3.org/1999/xhtml' === hx_mwy[''] && pefz7['match'](/^(?:disabled|checked|selected)$/i) || xm0q_y['warning']('attribute "' + pefz7 + '" missed value!! "' + pefz7 + '" instead2!!'), e0xq_['add'](pefz7, pefz7, epfo7z), epfo7z = nrb3, bgrnja = to7qe;break;case tm0_yh:
            xm0q_y['warning']('attribute space is required"' + pefz7 + '\x22!!');case tgarnbj:
            bgrnja = to7qe, epfo7z = nrb3;break;case tgbrj3n:
            bgrnja = tq70zoe, epfo7z = nrb3;break;case tm_hy0:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}nrb3++;
  }
}function tmxqy(tcv$i9, nbagj, $p9fd) {
  for (var m_wyh5 = tcv$i9['tagName'], fzpdo = null, yoq0x = tcv$i9['length']; yoq0x--;) {
    var zfp$vd = tcv$i9[yoq0x],
        dzvpf$ = zfp$vd['qName'],
        bskjua = zfp$vd['value'],
        t9v$i = dzvpf$['indexOf'](':');if (t9v$i > 0x0) var o0q7z = zfp$vd['prefix'] = dzvpf$['slice'](0x0, t9v$i),
        w6h85 = dzvpf$['slice'](t9v$i + 0x1),
        _wyh5m = 'xmlns' === o0q7z && w6h85;else w6h85 = dzvpf$, o0q7z = null, _wyh5m = 'xmlns' === dzvpf$ && '';zfp$vd['localName'] = w6h85, _wyh5m !== !0x1 && (null == fzpdo && (fzpdo = {}, tipvd$($p9fd, $p9fd = {})), $p9fd[_wyh5m] = fzpdo[_wyh5m] = bskjua, zfp$vd['uri'] = 'http://www.w3.org/2000/xmlns/', nbagj['startPrefixMapping'](_wyh5m, bskjua));
  }for (var yoq0x = tcv$i9['length']; yoq0x--;) {
    zfp$vd = tcv$i9[yoq0x];var o0q7z = zfp$vd['prefix'];o0q7z && ('xml' === o0q7z && (zfp$vd['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== o0q7z && (zfp$vd['uri'] = $p9fd[o0q7z || '']));
  }var t9v$i = m_wyh5['indexOf'](':');t9v$i > 0x0 ? (o0q7z = tcv$i9['prefix'] = m_wyh5['slice'](0x0, t9v$i), w6h85 = tcv$i9['localName'] = m_wyh5['slice'](t9v$i + 0x1)) : (o0q7z = null, w6h85 = tcv$i9['localName'] = m_wyh5);var _0hxym = tcv$i9['uri'] = $p9fd[o0q7z || ''];if (nbagj['startElement'](_0hxym, w6h85, m_wyh5, tcv$i9), !tcv$i9['closed']) return tcv$i9['currentNSMap'] = $p9fd, tcv$i9['localNSMap'] = fzpdo, !0x0;if (nbagj['endElement'](_0hxym, w6h85, m_wyh5), fzpdo) {
    for (o0q7z in fzpdo) nbagj['endPrefixMapping'](o0q7z);
  }
}function tn35816(g318rn, sjar, t924ci, sajkbu, qeof) {
  if (/^(?:script|textarea)$/i['test'](t924ci)) {
    var x_hm = g318rn['indexOf']('</' + t924ci + '>', sjar),
        cid$9v = g318rn['substring'](sjar + 0x1, x_hm);if (/[&<]/['test'](cid$9v)) return (/^script$/i['test'](t924ci) ? (qeof['characters'](cid$9v, 0x0, cid$9v['length']), x_hm) : (cid$9v = cid$9v['replace'](/&#?\w+;/g, sajkbu), qeof['characters'](cid$9v, 0x0, cid$9v['length']), x_hm)
    );
  }return sjar + 0x1;
}function tclt24i(ymq0x, rjn38, h_5mw6, o7efqz) {
  var gnj38r = o7efqz[h_5mw6];return null == gnj38r && (gnj38r = ymq0x['lastIndexOf']('</' + h_5mw6 + '>'), rjn38 > gnj38r && (gnj38r = ymq0x['lastIndexOf']('</' + h_5mw6)), o7efqz[h_5mw6] = gnj38r), rjn38 > gnj38r;
}function tipvd$(o0x, myh_w5) {
  for (var abgjr in o0x) myh_w5[abgjr] = o0x[abgjr];
}function tv$cdi(cvi9$, i2c49, li2c4t, zvdf$p) {
  var dp9$i = cvi9$['charAt'](i2c49 + 0x2);switch (dp9$i) {case '-':
      if ('-' === cvi9$['charAt'](i2c49 + 0x3)) {
        var jng38 = cvi9$['indexOf']('-->', i2c49 + 0x4);return jng38 > i2c49 ? (li2c4t['comment'](cvi9$, i2c49 + 0x4, jng38 - i2c49 - 0x4), jng38 + 0x3) : (zvdf$p['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == cvi9$['substr'](i2c49 + 0x3, 0x6)) {
        var jng38 = cvi9$['indexOf'](']]>', i2c49 + 0x9);return li2c4t['startCDATA'](), li2c4t['characters'](cvi9$, i2c49 + 0x9, jng38 - i2c49 - 0x9), li2c4t['endCDATA'](), jng38 + 0x3;
      }var ngj38r = tdfozp7(cvi9$, i2c49),
          qzfe7 = ngj38r['length'];if (qzfe7 > 0x1 && /!doctype/i['test'](ngj38r[0x0][0x0])) {
        var eyxoq0 = ngj38r[0x1][0x0],
            hxm_0 = qzfe7 > 0x3 && /^public$/i['test'](ngj38r[0x2][0x0]) && ngj38r[0x3][0x0],
            n85361 = qzfe7 > 0x4 && ngj38r[0x4][0x0],
            t29ic4 = ngj38r[qzfe7 - 0x1];return li2c4t['startDTD'](eyxoq0, hxm_0 && hxm_0['replace'](/^(['"])(.*?)\1$/, '$2'), n85361 && n85361['replace'](/^(['"])(.*?)\1$/, '$2')), li2c4t['endDTD'](), t29ic4['index'] + t29ic4[0x0]['length'];
      }}return -0x1;
}function tx_hym0(_wh5m, v9ip$, vzd$f) {
  var eop7f = _wh5m['indexOf']('?>', v9ip$);if (eop7f) {
    var oq0ez7 = _wh5m['substring'](v9ip$, eop7f)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (oq0ez7) {
      {
        oq0ez7[0x0]['length'];
      }return vzd$f['processingInstruction'](oq0ez7[0x1], oq0ez7[0x2]), eop7f + 0x2;
    }return -0x1;
  }return -0x1;
}function teoqy0x() {}function teq0_(xm_yq, o0qye) {
  return xm_yq['__proto__'] = o0qye, xm_yq;
}function tdfozp7(xm0_yq, mw_56h) {
  var w_6m5,
      xm_wh = [],
      pzdof = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (pzdof['lastIndex'] = mw_56h, pzdof['exec'](xm0_yq); w_6m5 = pzdof['exec'](xm0_yq);) if (xm_wh['push'](w_6m5), w_6m5[0x1]) return xm_wh;
}var tq0oez7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tyq0xm_ = new RegExp('[\\-\\.0-9' + tq0oez7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tyh5_w = new RegExp('^' + tq0oez7['source'] + tyq0xm_['source'] + '*(?::' + tq0oez7['source'] + tyq0xm_['source'] + '*)?$'),
    tpdz7 = 0x0,
    to7qe = 0x1,
    tc24t9i = 0x2,
    tgbrj3n = 0x3,
    tq70zoe = 0x4,
    tm0_yh = 0x5,
    tgarnbj = 0x6,
    tm_hy0 = 0x7;tx_hm0y['prototype'] = { 'parse': function (grjnba, pi, eq7x) {
    var dzvp = this['domBuilder'];dzvp['startDocument'](), tipvd$(pi, pi = {}), tjng3rb(grjnba, pi, eq7x, dzvp, this['errorHandler']), dzvp['endDocument']();
  } }, teoqy0x['prototype'] = { 'setTagName': function (w_5mh6) {
    if (!tyh5_w['test'](w_5mh6)) throw new Error('invalid tagName:' + w_5mh6);this['tagName'] = w_5mh6;
  }, 'add': function (fzdv, icd$v, dfpv$9) {
    if (!tyh5_w['test'](fzdv)) throw new Error('invalid attribute:' + fzdv);this[this['length']++] = { 'qName': fzdv, 'value': icd$v, 'offset': dfpv$9 };
  }, 'length': 0x0, 'getLocalName': function (m_w) {
    return this[m_w]['localName'];
  }, 'getLocator': function (w165mh) {
    return this[w165mh]['locator'];
  }, 'getQName': function (rbsj) {
    return this[rbsj]['qName'];
  }, 'getURI': function (kusbja) {
    return this[kusbja]['uri'];
  }, 'getValue': function (epfo7) {
    return this[epfo7]['value'];
  } }, teq0_({}, teq0_['prototype']) instanceof teq0_ || (teq0_ = function (jrg38n, uksbj) {
  function oeyq0x() {}oeyq0x['prototype'] = uksbj, oeyq0x = new oeyq0x();for (uksbj in jrg38n) oeyq0x[uksbj] = jrg38n[uksbj];return oeyq0x;
}), exports['XMLReader'] = tx_hm0y;