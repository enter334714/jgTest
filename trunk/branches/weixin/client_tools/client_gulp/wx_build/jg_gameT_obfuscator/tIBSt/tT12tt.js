var M = wx.$T;
function tn5813() {}function t$ti9(ngabr, lcit42, xy0_q, oqfze, jkbgra) {
  function tic$9v(oe7x0) {
    if (oe7x0 > 0xffff) {
      oe7x0 -= 0x10000;var r3gjn8 = 0xd800 + (oe7x0 >> 0xa),
          h65_wm = 0xdc00 + (0x3ff & oe7x0);return String['fromCharCode'](r3gjn8, h65_wm);
    }return String['fromCharCode'](oe7x0);
  }function vpd$9f($7zdp) {
    var grkab = $7zdp['slice'](0x1, -0x1);return grkab in xy0_q ? xy0_q[grkab] : '#' === grkab['charAt'](0x0) ? tic$9v(parseInt(grkab['substr'](0x1)['replace']('x', '0x'))) : (jkbgra['error']('entity not found:' + $7zdp), $7zdp);
  }function r8jg3(fz7$pd) {
    if (fz7$pd > arjbn) {
      var t2c94 = ngabr['substring'](arjbn, fz7$pd)['replace'](/&#?\w+;/g, vpd$9f);zd7$f && kajbus(arjbn), oqfze['characters'](t2c94, 0x0, fz7$pd - arjbn), arjbn = fz7$pd;
    }
  }function kajbus(c2ilt4, askbrj) {
    for (; c2ilt4 >= ksaub && (askbrj = ep7zfo['exec'](ngabr));) jgbran = askbrj['index'], ksaub = jgbran + askbrj[0x0]['length'], zd7$f['lineNumber']++;zd7$f['columnNumber'] = c2ilt4 - jgbran + 0x1;
  }for (var jgbran = 0x0, ksaub = 0x0, ep7zfo = /.*(?:\r\n?|\n)|.*$/g, zd7$f = oqfze['locator'], x_0ey = [{ 'currentNSMap': lcit42 }], o7fqe = {}, arjbn = 0x0;;) {
    try {
      var v92ict = ngabr['indexOf']('<', arjbn);if (0x0 > v92ict) {
        if (!ngabr['substr'](arjbn)['match'](/^\s*$/)) {
          var m65_hw = oqfze['doc'],
              z07eqo = m65_hw['createTextNode'](ngabr['substr'](arjbn));m65_hw['appendChild'](z07eqo), oqfze['currentElement'] = z07eqo;
        }return;
      }switch (v92ict > arjbn && r8jg3(v92ict), ngabr['charAt'](v92ict + 0x1)) {case '/':
          var n3j8 = ngabr['indexOf']('>', v92ict + 0x3),
              z$pvf = ngabr['substring'](v92ict + 0x2, n3j8),
              brg3 = x_0ey['pop']();0x0 > n3j8 ? (z$pvf = ngabr['substring'](v92ict + 0x2)['replace'](/[\s<].*/, ''), jkbgra['error']('end tag name: ' + z$pvf + ' is not complete:' + brg3['tagName']), n3j8 = v92ict + 0x1 + z$pvf['length']) : z$pvf['match'](/\s</) && (z$pvf = z$pvf['replace'](/[\s<].*/, ''), jkbgra['error']('end tag name: ' + z$pvf + ' maybe not complete'), n3j8 = v92ict + 0x1 + z$pvf['length']);var kjrbg = brg3['localNSMap'],
              jkr = brg3['tagName'] == z$pvf,
              w1mh5 = jkr || brg3['tagName'] && brg3['tagName']['toLowerCase']() == z$pvf['toLowerCase']();if (w1mh5) {
            if (oqfze['endElement'](brg3['uri'], brg3['localName'], z$pvf), kjrbg) {
              for (var njgr83 in kjrbg) oqfze['endPrefixMapping'](njgr83);
            }jkr || jkbgra['fatalError']('end tag name: ' + z$pvf + ' is not match the current start tagName:' + brg3['tagName']);
          } else x_0ey['push'](brg3);n3j8++;break;case '?':
          zd7$f && kajbus(v92ict), n3j8 = tvpfd9$(ngabr, v92ict, oqfze);break;case '!':
          zd7$f && kajbus(v92ict), n3j8 = trn18g(ngabr, v92ict, oqfze, jkbgra);break;default:
          zd7$f && kajbus(v92ict);var e0yqx_ = new tw5ym_(),
              nj38rg = x_0ey[x_0ey['length'] - 0x1]['currentNSMap'],
              n3j8 = tfdpz7(ngabr, v92ict, e0yqx_, nj38rg, vpd$9f, jkbgra),
              n8r31g = e0yqx_['length'];if (!e0yqx_['closed'] && td$cvi9(ngabr, n3j8, e0yqx_['tagName'], o7fqe) && (e0yqx_['closed'] = !0x0, xy0_q['nbsp'] || jkbgra['warning']('unclosed xml attribute')), zd7$f && n8r31g) {
            for (var n1r3 = tn163g8(zd7$f, {}), $9vidc = 0x0; n8r31g > $9vidc; $9vidc++) {
              var y_wh5m = e0yqx_[$9vidc];kajbus(y_wh5m['offset']), y_wh5m['locator'] = tn163g8(zd7$f, {});
            }oqfze['locator'] = n1r3, tbsrka(e0yqx_, oqfze, nj38rg) && x_0ey['push'](e0yqx_), oqfze['locator'] = zd7$f;
          } else tbsrka(e0yqx_, oqfze, nj38rg) && x_0ey['push'](e0yqx_);'http://www.w3.org/1999/xhtml' !== e0yqx_['uri'] || e0yqx_['closed'] ? n3j8++ : n3j8 = tng861(ngabr, n3j8, e0yqx_['tagName'], vpd$9f, oqfze);}
    } catch (yhm_) {
      jkbgra['error']('element parse error: ' + yhm_), n3j8 = -0x1;
    }n3j8 > arjbn ? arjbn = n3j8 : r8jg3(Math['max'](v92ict, arjbn) + 0x1);
  }
}function tn163g8(gjnbra, tvci) {
  return tvci['lineNumber'] = gjnbra['lineNumber'], tvci['columnNumber'] = gjnbra['columnNumber'], tvci;
}function tfdpz7(argkj, jbrn, eyx_q, tc2i, arjnb, tv9ic2) {
  for (var $piv9d, dfz7o, p7dzf = ++jbrn, bjuks = tp7foez;;) {
    var j3grb = argkj['charAt'](p7dzf);switch (j3grb) {case '=':
        if (bjuks === te70x) $piv9d = argkj['slice'](jbrn, p7dzf), bjuks = trg3jn8;else {
          if (bjuks !== tujsb) throw new Error('attribute equal must after attrName');bjuks = trg3jn8;
        }break;case '\x27':case '\x22':
        if (bjuks === trg3jn8 || bjuks === te70x) {
          if (bjuks === te70x && (tv9ic2['warning']('attribute value must after "="'), $piv9d = argkj['slice'](jbrn, p7dzf)), jbrn = p7dzf + 0x1, p7dzf = argkj['indexOf'](j3grb, jbrn), !(p7dzf > 0x0)) throw new Error('attribute value no end \'' + j3grb + '\' match');dfz7o = argkj['slice'](jbrn, p7dzf)['replace'](/&#?\w+;/g, arjnb), eyx_q['add']($piv9d, dfz7o, jbrn - 0x1), bjuks = tf$vzp;
        } else {
          if (bjuks != tcvi2) throw new Error('attribute value must after "="');dfz7o = argkj['slice'](jbrn, p7dzf)['replace'](/&#?\w+;/g, arjnb), eyx_q['add']($piv9d, dfz7o, jbrn), tv9ic2['warning']('attribute "' + $piv9d + '" missed start quot(' + j3grb + ')!!'), jbrn = p7dzf + 0x1, bjuks = tf$vzp;
        }break;case '/':
        switch (bjuks) {case tp7foez:
            eyx_q['setTagName'](argkj['slice'](jbrn, p7dzf));case tf$vzp:case toyxq:case tgarnb:
            bjuks = tgarnb, eyx_q['closed'] = !0x0;case tcvi2:case te70x:case tujsb:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return tv9ic2['error']('unexpected end of input'), bjuks == tp7foez && eyx_q['setTagName'](argkj['slice'](jbrn, p7dzf)), p7dzf;case '>':
        switch (bjuks) {case tp7foez:
            eyx_q['setTagName'](argkj['slice'](jbrn, p7dzf));case tf$vzp:case toyxq:case tgarnb:
            break;case tcvi2:case te70x:
            dfz7o = argkj['slice'](jbrn, p7dzf), '/' === dfz7o['slice'](-0x1) && (eyx_q['closed'] = !0x0, dfz7o = dfz7o['slice'](0x0, -0x1));case tujsb:
            bjuks === tujsb && (dfz7o = $piv9d), bjuks == tcvi2 ? (tv9ic2['warning']('attribute "' + dfz7o + '" missed quot(")!!'), eyx_q['add']($piv9d, dfz7o['replace'](/&#?\w+;/g, arjnb), jbrn)) : ('http://www.w3.org/1999/xhtml' === tc2i[''] && dfz7o['match'](/^(?:disabled|checked|selected)$/i) || tv9ic2['warning']('attribute "' + dfz7o + '" missed value!! "' + dfz7o + '" instead!!'), eyx_q['add'](dfz7o, dfz7o, jbrn));break;case trg3jn8:
            throw new Error('attribute value missed!!');}return p7dzf;case '\u0080':
        j3grb = '\x20';default:
        if ('\x20' >= j3grb) switch (bjuks) {case tp7foez:
            eyx_q['setTagName'](argkj['slice'](jbrn, p7dzf)), bjuks = toyxq;break;case te70x:
            $piv9d = argkj['slice'](jbrn, p7dzf), bjuks = tujsb;break;case tcvi2:
            var dfz7o = argkj['slice'](jbrn, p7dzf)['replace'](/&#?\w+;/g, arjnb);tv9ic2['warning']('attribute "' + dfz7o + '" missed quot(")!!'), eyx_q['add']($piv9d, dfz7o, jbrn);case tf$vzp:
            bjuks = toyxq;} else switch (bjuks) {case tujsb:
            {
              eyx_q['tagName'];
            }'http://www.w3.org/1999/xhtml' === tc2i[''] && $piv9d['match'](/^(?:disabled|checked|selected)$/i) || tv9ic2['warning']('attribute "' + $piv9d + '" missed value!! "' + $piv9d + '" instead2!!'), eyx_q['add']($piv9d, $piv9d, jbrn), jbrn = p7dzf, bjuks = te70x;break;case tf$vzp:
            tv9ic2['warning']('attribute space is required"' + $piv9d + '\x22!!');case toyxq:
            bjuks = te70x, jbrn = p7dzf;break;case trg3jn8:
            bjuks = tcvi2, jbrn = p7dzf;break;case tgarnb:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}p7dzf++;
  }
}function tbsrka(_0, _hw56m, mx_0hy) {
  for (var vd$c9i = _0['tagName'], kajsbu = null, fpz$7d = _0['length']; fpz$7d--;) {
    var vd9pf$ = _0[fpz$7d],
        r8njg3 = vd9pf$['qName'],
        ci9tv2 = vd9pf$['value'],
        xhym0_ = r8njg3['indexOf'](':');if (xhym0_ > 0x0) var r3b = vd9pf$['prefix'] = r8njg3['slice'](0x0, xhym0_),
        h5w_my = r8njg3['slice'](xhym0_ + 0x1),
        ymhxw = 'xmlns' === r3b && h5w_my;else h5w_my = r8njg3, r3b = null, ymhxw = 'xmlns' === r8njg3 && '';vd9pf$['localName'] = h5w_my, ymhxw !== !0x1 && (null == kajsbu && (kajsbu = {}, tvc9(mx_0hy, mx_0hy = {})), mx_0hy[ymhxw] = kajsbu[ymhxw] = ci9tv2, vd9pf$['uri'] = 'http://www.w3.org/2000/xmlns/', _hw56m['startPrefixMapping'](ymhxw, ci9tv2));
  }for (var fpz$7d = _0['length']; fpz$7d--;) {
    vd9pf$ = _0[fpz$7d];var r3b = vd9pf$['prefix'];r3b && ('xml' === r3b && (vd9pf$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== r3b && (vd9pf$['uri'] = mx_0hy[r3b || '']));
  }var xhym0_ = vd$c9i['indexOf'](':');xhym0_ > 0x0 ? (r3b = _0['prefix'] = vd$c9i['slice'](0x0, xhym0_), h5w_my = _0['localName'] = vd$c9i['slice'](xhym0_ + 0x1)) : (r3b = null, h5w_my = _0['localName'] = vd$c9i);var itv9c2 = _0['uri'] = mx_0hy[r3b || ''];if (_hw56m['startElement'](itv9c2, h5w_my, vd$c9i, _0), !_0['closed']) return _0['currentNSMap'] = mx_0hy, _0['localNSMap'] = kajsbu, !0x0;if (_hw56m['endElement'](itv9c2, h5w_my, vd$c9i), kajsbu) {
    for (r3b in kajsbu) _hw56m['endPrefixMapping'](r3b);
  }
}function tng861(nargj, nr8g31, gjr3, sarjk, xyq0_e) {
  if (/^(?:script|textarea)$/i['test'](gjr3)) {
    var hxyw = nargj['indexOf']('</' + gjr3 + '>', nr8g31),
        kbrjs = nargj['substring'](nr8g31 + 0x1, hxyw);if (/[&<]/['test'](kbrjs)) return (/^script$/i['test'](gjr3) ? (xyq0_e['characters'](kbrjs, 0x0, kbrjs['length']), hxyw) : (kbrjs = kbrjs['replace'](/&#?\w+;/g, sarjk), xyq0_e['characters'](kbrjs, 0x0, kbrjs['length']), hxyw)
    );
  }return nr8g31 + 0x1;
}function td$cvi9(bjkarg, rg3n81, h_wmxy, juskb) {
  var hm0x_ = juskb[h_wmxy];return null == hm0x_ && (hm0x_ = bjkarg['lastIndexOf']('</' + h_wmxy + '>'), rg3n81 > hm0x_ && (hm0x_ = bjkarg['lastIndexOf']('</' + h_wmxy)), juskb[h_wmxy] = hm0x_), rg3n81 > hm0x_;
}function tvc9(o0qeyx, yx_eq0) {
  for (var vic9t in o0qeyx) yx_eq0[vic9t] = o0qeyx[vic9t];
}function trn18g(jkbarg, $pdvf, z$vf, p$d9vf) {
  var jsra = jkbarg['charAt']($pdvf + 0x2);switch (jsra) {case '-':
      if ('-' === jkbarg['charAt']($pdvf + 0x3)) {
        var ozf7d = jkbarg['indexOf']('-->', $pdvf + 0x4);return ozf7d > $pdvf ? (z$vf['comment'](jkbarg, $pdvf + 0x4, ozf7d - $pdvf - 0x4), ozf7d + 0x3) : (p$d9vf['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jkbarg['substr']($pdvf + 0x3, 0x6)) {
        var ozf7d = jkbarg['indexOf'](']]>', $pdvf + 0x9);return z$vf['startCDATA'](), z$vf['characters'](jkbarg, $pdvf + 0x9, ozf7d - $pdvf - 0x9), z$vf['endCDATA'](), ozf7d + 0x3;
      }var ct4i2l = trgbja(jkbarg, $pdvf),
          qmy_x = ct4i2l['length'];if (qmy_x > 0x1 && /!doctype/i['test'](ct4i2l[0x0][0x0])) {
        var oq7xe0 = ct4i2l[0x1][0x0],
            jabkrs = qmy_x > 0x3 && /^public$/i['test'](ct4i2l[0x2][0x0]) && ct4i2l[0x3][0x0],
            njg3br = qmy_x > 0x4 && ct4i2l[0x4][0x0],
            vf9d$p = ct4i2l[qmy_x - 0x1];return z$vf['startDTD'](oq7xe0, jabkrs && jabkrs['replace'](/^(['"])(.*?)\1$/, '$2'), njg3br && njg3br['replace'](/^(['"])(.*?)\1$/, '$2')), z$vf['endDTD'](), vf9d$p['index'] + vf9d$p[0x0]['length'];
      }}return -0x1;
}function tvpfd9$(nrjgb3, x_0mq, vtc$9i) {
  var lci2t4 = nrjgb3['indexOf']('?>', x_0mq);if (lci2t4) {
    var skjr = nrjgb3['substring'](x_0mq, lci2t4)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (skjr) {
      {
        skjr[0x0]['length'];
      }return vtc$9i['processingInstruction'](skjr[0x1], skjr[0x2]), lci2t4 + 0x2;
    }return -0x1;
  }return -0x1;
}function tw5ym_() {}function tez0o($d7zpf, $ic9) {
  return $d7zpf['__proto__'] = $ic9, $d7zpf;
}function trgbja(rnagbj, hm5w_6) {
  var c9v$i,
      $fpdv = [],
      zv$pd = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zv$pd['lastIndex'] = hm5w_6, zv$pd['exec'](rnagbj); c9v$i = zv$pd['exec'](rnagbj);) if ($fpdv['push'](c9v$i), c9v$i[0x1]) return $fpdv;
}var tezpof7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    tsrbak = new RegExp('[\\-\\.0-9' + tezpof7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    tarkb = new RegExp('^' + tezpof7['source'] + tsrbak['source'] + '*(?::' + tezpof7['source'] + tsrbak['source'] + '*)?$'),
    tp7foez = 0x0,
    te70x = 0x1,
    tujsb = 0x2,
    trg3jn8 = 0x3,
    tcvi2 = 0x4,
    tf$vzp = 0x5,
    toyxq = 0x6,
    tgarnb = 0x7;tn5813['prototype'] = { 'parse': function (jaukbs, bskajr, eoxqy0) {
    var e7ozq0 = this['domBuilder'];e7ozq0['startDocument'](), tvc9(bskajr, bskajr = {}), t$ti9(jaukbs, bskajr, eoxqy0, e7ozq0, this['errorHandler']), e7ozq0['endDocument']();
  } }, tw5ym_['prototype'] = { 'setTagName': function (njrg3) {
    if (!tarkb['test'](njrg3)) throw new Error('invalid tagName:' + njrg3);this['tagName'] = njrg3;
  }, 'add': function (fzeq7, z7dop, ubak) {
    if (!tarkb['test'](fzeq7)) throw new Error('invalid attribute:' + fzeq7);this[this['length']++] = { 'qName': fzeq7, 'value': z7dop, 'offset': ubak };
  }, 'length': 0x0, 'getLocalName': function (eoz07q) {
    return this[eoz07q]['localName'];
  }, 'getLocator': function (m_h6) {
    return this[m_h6]['locator'];
  }, 'getQName': function (pd7fzo) {
    return this[pd7fzo]['qName'];
  }, 'getURI': function ($9vdic) {
    return this[$9vdic]['uri'];
  }, 'getValue': function (_xmy0q) {
    return this[_xmy0q]['value'];
  } }, tez0o({}, tez0o['prototype']) instanceof tez0o || (tez0o = function (tci492, ci4lt) {
  function g83jr() {}g83jr['prototype'] = ci4lt, g83jr = new g83jr();for (ci4lt in tci492) g83jr[ci4lt] = tci492[ci4lt];return g83jr;
}), exports['XMLReader'] = tn5813;