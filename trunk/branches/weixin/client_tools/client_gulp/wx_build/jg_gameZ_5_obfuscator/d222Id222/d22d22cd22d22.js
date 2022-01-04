var F = wx.$D;
function Dmgo5() {}function Dgjxa(sc3e0t, sqetwv, i_zlr, e0c3us, go5a) {
  function k6xwvq(_lrzi2) {
    if (_lrzi2 > 0xffff) {
      _lrzi2 -= 0x10000;var stqv = 0xd800 + (_lrzi2 >> 0xa),
          ajgk6x = 0xdc00 + (0x3ff & _lrzi2);return String['fromCharCode'](stqv, ajgk6x);
    }return String['fromCharCode'](_lrzi2);
  }function tcs0e(tvqse) {
    var xwkq6 = tvqse['slice'](0x1, -0x1);return xwkq6 in i_zlr ? i_zlr[xwkq6] : '#' === xwkq6['charAt'](0x0) ? k6xwvq(parseInt(xwkq6['substr'](0x1)['replace']('x', '0x'))) : (go5a['error']('entity not found:' + tvqse), tvqse);
  }function yh8n$(imol_) {
    if (imol_ > agxk6) {
      var tc03s = sc3e0t['substring'](agxk6, imol_)['replace'](/&#?\w+;/g, tcs0e);lmi_o5 && roz_il(agxk6), e0c3us['characters'](tc03s, 0x0, imol_ - agxk6), agxk6 = imol_;
    }
  }function roz_il(pc03eu, pb39c) {
    for (; pc03eu >= la5mog && (pb39c = wsteqv['exec'](sc3e0t));) _l5im = pb39c['index'], la5mog = _l5im + pb39c[0x0]['length'], lmi_o5['lineNumber']++;lmi_o5['columnNumber'] = pc03eu - _l5im + 0x1;
  }for (var _l5im = 0x0, la5mog = 0x0, wsteqv = /.*(?:\r\n?|\n)|.*$/g, lmi_o5 = e0c3us['locator'], i_zr2h = [{ 'currentNSMap': sqetwv }], o5mja = {}, agxk6 = 0x0;;) {
    try {
      var x6gja = sc3e0t['indexOf']('<', agxk6);if (0x0 > x6gja) {
        if (!sc3e0t['substr'](agxk6)['match'](/^\s*$/)) {
          var z_hr2i = e0c3us['doc'],
              stkq = z_hr2i['createTextNode'](sc3e0t['substr'](agxk6));z_hr2i['appendChild'](stkq), e0c3us['currentElement'] = stkq;
        }return;
      }switch (x6gja > agxk6 && yh8n$(x6gja), sc3e0t['charAt'](x6gja + 0x1)) {case '/':
          var ih_z2r = sc3e0t['indexOf']('>', x6gja + 0x3),
              z2lr_ = sc3e0t['substring'](x6gja + 0x2, ih_z2r),
              l_io5 = i_zr2h['pop']();0x0 > ih_z2r ? (z2lr_ = sc3e0t['substring'](x6gja + 0x2)['replace'](/[\s<].*/, ''), go5a['error']('end tag name: ' + z2lr_ + ' is not complete:' + l_io5['tagName']), ih_z2r = x6gja + 0x1 + z2lr_['length']) : z2lr_['match'](/\s</) && (z2lr_ = z2lr_['replace'](/[\s<].*/, ''), go5a['error']('end tag name: ' + z2lr_ + ' maybe not complete'), ih_z2r = x6gja + 0x1 + z2lr_['length']);var jkxag = l_io5['localNSMap'],
              bcp0u = l_io5['tagName'] == z2lr_,
              xg5a = bcp0u || l_io5['tagName'] && l_io5['tagName']['toLowerCase']() == z2lr_['toLowerCase']();if (xg5a) {
            if (e0c3us['endElement'](l_io5['uri'], l_io5['localName'], z2lr_), jkxag) {
              for (var zl_2ir in jkxag) e0c3us['endPrefixMapping'](zl_2ir);
            }bcp0u || go5a['fatalError']('end tag name: ' + z2lr_ + ' is not match the current start tagName:' + l_io5['tagName']);
          } else i_zr2h['push'](l_io5);ih_z2r++;break;case '?':
          lmi_o5 && roz_il(x6gja), ih_z2r = Dkxj6ga(sc3e0t, x6gja, e0c3us);break;case '!':
          lmi_o5 && roz_il(x6gja), ih_z2r = Dh1n28(sc3e0t, x6gja, e0c3us, go5a);break;default:
          lmi_o5 && roz_il(x6gja);var mli_5o = new Dh$81yn(),
              io5l_m = i_zr2h[i_zr2h['length'] - 0x1]['currentNSMap'],
              ih_z2r = Dgax6j5(sc3e0t, x6gja, mli_5o, io5l_m, tcs0e, go5a),
              svetq = mli_5o['length'];if (!mli_5o['closed'] && Da6wkxj(sc3e0t, ih_z2r, mli_5o['tagName'], o5mja) && (mli_5o['closed'] = !0x0, i_zlr['nbsp'] || go5a['warning']('unclosed xml attribute')), lmi_o5 && svetq) {
            for (var axgm = Dr_li(lmi_o5, {}), wtsvkq = 0x0; svetq > wtsvkq; wtsvkq++) {
              var h2i_rz = mli_5o[wtsvkq];roz_il(h2i_rz['offset']), h2i_rz['locator'] = Dr_li(lmi_o5, {});
            }e0c3us['locator'] = axgm, Dam5jxg(mli_5o, e0c3us, io5l_m) && i_zr2h['push'](mli_5o), e0c3us['locator'] = lmi_o5;
          } else Dam5jxg(mli_5o, e0c3us, io5l_m) && i_zr2h['push'](mli_5o);'http://www.w3.org/1999/xhtml' !== mli_5o['uri'] || mli_5o['closed'] ? ih_z2r++ : ih_z2r = Dpuc30e(sc3e0t, ih_z2r, mli_5o['tagName'], tcs0e, e0c3us);}
    } catch (omjga) {
      go5a['error']('element parse error: ' + omjga), ih_z2r = -0x1;
    }ih_z2r > agxk6 ? agxk6 = ih_z2r : yh8n$(Math['max'](x6gja, agxk6) + 0x1);
  }
}function Dr_li(t0c3s, hnr182) {
  return hnr182['lineNumber'] = t0c3s['lineNumber'], hnr182['columnNumber'] = t0c3s['columnNumber'], hnr182;
}function Dgax6j5(q6vx, xkg6aj, c03pb, tkqws, _lzri2, qt0ves) {
  for (var aw6xkj, lmiz_, h1nrz = ++xkg6aj, b9up3f = Dpub79;;) {
    var $8n21h = q6vx['charAt'](h1nrz);switch ($8n21h) {case '=':
        if (b9up3f === Dznhr12) aw6xkj = q6vx['slice'](xkg6aj, h1nrz), b9up3f = Drz_;else {
          if (b9up3f !== Db9c3) throw new Error('attribute equal must after attrName');b9up3f = Drz_;
        }break;case '\x27':case '\x22':
        if (b9up3f === Drz_ || b9up3f === Dznhr12) {
          if (b9up3f === Dznhr12 && (qt0ves['warning']('attribute value must after "="'), aw6xkj = q6vx['slice'](xkg6aj, h1nrz)), xkg6aj = h1nrz + 0x1, h1nrz = q6vx['indexOf']($8n21h, xkg6aj), !(h1nrz > 0x0)) throw new Error('attribute value no end \'' + $8n21h + '\' match');lmiz_ = q6vx['slice'](xkg6aj, h1nrz)['replace'](/&#?\w+;/g, _lzri2), c03pb['add'](aw6xkj, lmiz_, xkg6aj - 0x1), b9up3f = Dkvxq6w;
        } else {
          if (b9up3f != D_olmi5) throw new Error('attribute value must after "="');lmiz_ = q6vx['slice'](xkg6aj, h1nrz)['replace'](/&#?\w+;/g, _lzri2), c03pb['add'](aw6xkj, lmiz_, xkg6aj), qt0ves['warning']('attribute "' + aw6xkj + '" missed start quot(' + $8n21h + ')!!'), xkg6aj = h1nrz + 0x1, b9up3f = Dkvxq6w;
        }break;case '/':
        switch (b9up3f) {case Dpub79:
            c03pb['setTagName'](q6vx['slice'](xkg6aj, h1nrz));case Dkvxq6w:case Dwvt6qk:case Dpb0cu3:
            b9up3f = Dpb0cu3, c03pb['closed'] = !0x0;case D_olmi5:case Dznhr12:case Db9c3:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return qt0ves['error']('unexpected end of input'), b9up3f == Dpub79 && c03pb['setTagName'](q6vx['slice'](xkg6aj, h1nrz)), h1nrz;case '>':
        switch (b9up3f) {case Dpub79:
            c03pb['setTagName'](q6vx['slice'](xkg6aj, h1nrz));case Dkvxq6w:case Dwvt6qk:case Dpb0cu3:
            break;case D_olmi5:case Dznhr12:
            lmiz_ = q6vx['slice'](xkg6aj, h1nrz), '/' === lmiz_['slice'](-0x1) && (c03pb['closed'] = !0x0, lmiz_ = lmiz_['slice'](0x0, -0x1));case Db9c3:
            b9up3f === Db9c3 && (lmiz_ = aw6xkj), b9up3f == D_olmi5 ? (qt0ves['warning']('attribute "' + lmiz_ + '" missed quot(")!!'), c03pb['add'](aw6xkj, lmiz_['replace'](/&#?\w+;/g, _lzri2), xkg6aj)) : ('http://www.w3.org/1999/xhtml' === tkqws[''] && lmiz_['match'](/^(?:disabled|checked|selected)$/i) || qt0ves['warning']('attribute "' + lmiz_ + '" missed value!! "' + lmiz_ + '" instead!!'), c03pb['add'](lmiz_, lmiz_, xkg6aj));break;case Drz_:
            throw new Error('attribute value missed!!');}return h1nrz;case '\u0080':
        $8n21h = '\x20';default:
        if ('\x20' >= $8n21h) switch (b9up3f) {case Dpub79:
            c03pb['setTagName'](q6vx['slice'](xkg6aj, h1nrz)), b9up3f = Dwvt6qk;break;case Dznhr12:
            aw6xkj = q6vx['slice'](xkg6aj, h1nrz), b9up3f = Db9c3;break;case D_olmi5:
            var lmiz_ = q6vx['slice'](xkg6aj, h1nrz)['replace'](/&#?\w+;/g, _lzri2);qt0ves['warning']('attribute "' + lmiz_ + '" missed quot(")!!'), c03pb['add'](aw6xkj, lmiz_, xkg6aj);case Dkvxq6w:
            b9up3f = Dwvt6qk;} else switch (b9up3f) {case Db9c3:
            {
              c03pb['tagName'];
            }'http://www.w3.org/1999/xhtml' === tkqws[''] && aw6xkj['match'](/^(?:disabled|checked|selected)$/i) || qt0ves['warning']('attribute "' + aw6xkj + '" missed value!! "' + aw6xkj + '" instead2!!'), c03pb['add'](aw6xkj, aw6xkj, xkg6aj), xkg6aj = h1nrz, b9up3f = Dznhr12;break;case Dkvxq6w:
            qt0ves['warning']('attribute space is required"' + aw6xkj + '\x22!!');case Dwvt6qk:
            b9up3f = Dznhr12, xkg6aj = h1nrz;break;case Drz_:
            b9up3f = D_olmi5, xkg6aj = h1nrz;break;case Dpb0cu3:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}h1nrz++;
  }
}function Dam5jxg(nh18y, y8h$1, l5omi) {
  for (var z_mio = nh18y['tagName'], i5oml = null, m_5log = nh18y['length']; m_5log--;) {
    var vswktq = nh18y[m_5log],
        buf9p7 = vswktq['qName'],
        ve0st = vswktq['value'],
        rzi_l = buf9p7['indexOf'](':');if (rzi_l > 0x0) var kx6wvq = vswktq['prefix'] = buf9p7['slice'](0x0, rzi_l),
        tvq6kw = buf9p7['slice'](rzi_l + 0x1),
        ubcp03 = 'xmlns' === kx6wvq && tvq6kw;else tvq6kw = buf9p7, kx6wvq = null, ubcp03 = 'xmlns' === buf9p7 && '';vswktq['localName'] = tvq6kw, ubcp03 !== !0x1 && (null == i5oml && (i5oml = {}, Dkvqw6(l5omi, l5omi = {})), l5omi[ubcp03] = i5oml[ubcp03] = ve0st, vswktq['uri'] = 'http://www.w3.org/2000/xmlns/', y8h$1['startPrefixMapping'](ubcp03, ve0st));
  }for (var m_5log = nh18y['length']; m_5log--;) {
    vswktq = nh18y[m_5log];var kx6wvq = vswktq['prefix'];kx6wvq && ('xml' === kx6wvq && (vswktq['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kx6wvq && (vswktq['uri'] = l5omi[kx6wvq || '']));
  }var rzi_l = z_mio['indexOf'](':');rzi_l > 0x0 ? (kx6wvq = nh18y['prefix'] = z_mio['slice'](0x0, rzi_l), tvq6kw = nh18y['localName'] = z_mio['slice'](rzi_l + 0x1)) : (kx6wvq = null, tvq6kw = nh18y['localName'] = z_mio);var wtqve = nh18y['uri'] = l5omi[kx6wvq || ''];if (y8h$1['startElement'](wtqve, tvq6kw, z_mio, nh18y), !nh18y['closed']) return nh18y['currentNSMap'] = l5omi, nh18y['localNSMap'] = i5oml, !0x0;if (y8h$1['endElement'](wtqve, tvq6kw, z_mio), i5oml) {
    for (kx6wvq in i5oml) y8h$1['endPrefixMapping'](kx6wvq);
  }
}function Dpuc30e(r_li2z, jakw, c3pu0e, n128rh, up3c0e) {
  if (/^(?:script|textarea)$/i['test'](c3pu0e)) {
    var _hr2zi = r_li2z['indexOf']('</' + c3pu0e + '>', jakw),
        qtvk = r_li2z['substring'](jakw + 0x1, _hr2zi);if (/[&<]/['test'](qtvk)) return (/^script$/i['test'](c3pu0e) ? (up3c0e['characters'](qtvk, 0x0, qtvk['length']), _hr2zi) : (qtvk = qtvk['replace'](/&#?\w+;/g, n128rh), up3c0e['characters'](qtvk, 0x0, qtvk['length']), _hr2zi)
    );
  }return jakw + 0x1;
}function Da6wkxj(jqw6kx, scv0t, xkjaw6, lo5m_i) {
  var estcv0 = lo5m_i[xkjaw6];return null == estcv0 && (estcv0 = jqw6kx['lastIndexOf']('</' + xkjaw6 + '>'), scv0t > estcv0 && (estcv0 = jqw6kx['lastIndexOf']('</' + xkjaw6)), lo5m_i[xkjaw6] = estcv0), scv0t > estcv0;
}function Dkvqw6(oril_, x6wk) {
  for (var qw6kxj in oril_) x6wk[qw6kxj] = oril_[qw6kxj];
}function Dh1n28(bpuf39, o_l5i, rhn218, ir2z) {
  var gjm5oa = bpuf39['charAt'](o_l5i + 0x2);switch (gjm5oa) {case '-':
      if ('-' === bpuf39['charAt'](o_l5i + 0x3)) {
        var mxjg5 = bpuf39['indexOf']('-->', o_l5i + 0x4);return mxjg5 > o_l5i ? (rhn218['comment'](bpuf39, o_l5i + 0x4, mxjg5 - o_l5i - 0x4), mxjg5 + 0x3) : (ir2z['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == bpuf39['substr'](o_l5i + 0x3, 0x6)) {
        var mxjg5 = bpuf39['indexOf'](']]>', o_l5i + 0x9);return rhn218['startCDATA'](), rhn218['characters'](bpuf39, o_l5i + 0x9, mxjg5 - o_l5i - 0x9), rhn218['endCDATA'](), mxjg5 + 0x3;
      }var kxw6aj = Dvt6kqw(bpuf39, o_l5i),
          kqstv = kxw6aj['length'];if (kqstv > 0x1 && /!doctype/i['test'](kxw6aj[0x0][0x0])) {
        var l5ga = kxw6aj[0x1][0x0],
            rhzi_2 = kqstv > 0x3 && /^public$/i['test'](kxw6aj[0x2][0x0]) && kxw6aj[0x3][0x0],
            h8r2n = kqstv > 0x4 && kxw6aj[0x4][0x0],
            ev0ct = kxw6aj[kqstv - 0x1];return rhn218['startDTD'](l5ga, rhzi_2 && rhzi_2['replace'](/^(['"])(.*?)\1$/, '$2'), h8r2n && h8r2n['replace'](/^(['"])(.*?)\1$/, '$2')), rhn218['endDTD'](), ev0ct['index'] + ev0ct[0x0]['length'];
      }}return -0x1;
}function Dkxj6ga(mgol_5, etswvq, etc3) {
  var o_5im = mgol_5['indexOf']('?>', etswvq);if (o_5im) {
    var stwkqv = mgol_5['substring'](etswvq, o_5im)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (stwkqv) {
      {
        stwkqv[0x0]['length'];
      }return etc3['processingInstruction'](stwkqv[0x1], stwkqv[0x2]), o_5im + 0x2;
    }return -0x1;
  }return -0x1;
}function Dh$81yn() {}function Dqw6xjk(wvsqk, vkwstq) {
  return wvsqk['__proto__'] = vkwstq, wvsqk;
}function Dvt6kqw(y81$, kwvtq) {
  var vcs0t,
      hz2r = [],
      ct0ves = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ct0ves['lastIndex'] = kwvtq, ct0ves['exec'](y81$); vcs0t = ct0ves['exec'](y81$);) if (hz2r['push'](vcs0t), vcs0t[0x1]) return hz2r;
}var Dl5_mi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Dvtsw = new RegExp('[\\-\\.0-9' + Dl5_mi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Dst30 = new RegExp('^' + Dl5_mi['source'] + Dvtsw['source'] + '*(?::' + Dl5_mi['source'] + Dvtsw['source'] + '*)?$'),
    Dpub79 = 0x0,
    Dznhr12 = 0x1,
    Db9c3 = 0x2,
    Drz_ = 0x3,
    D_olmi5 = 0x4,
    Dkvxq6w = 0x5,
    Dwvt6qk = 0x6,
    Dpb0cu3 = 0x7;Dmgo5['prototype'] = { 'parse': function (zo_lr, puc30b, sqtewv) {
    var izrl = this['domBuilder'];izrl['startDocument'](), Dkvqw6(puc30b, puc30b = {}), Dgjxa(zo_lr, puc30b, sqtewv, izrl, this['errorHandler']), izrl['endDocument']();
  } }, Dh$81yn['prototype'] = { 'setTagName': function (wktq6v) {
    if (!Dst30['test'](wktq6v)) throw new Error('invalid tagName:' + wktq6v);this['tagName'] = wktq6v;
  }, 'add': function (b7fp49, ewq, qkxvw) {
    if (!Dst30['test'](b7fp49)) throw new Error('invalid attribute:' + b7fp49);this[this['length']++] = { 'qName': b7fp49, 'value': ewq, 'offset': qkxvw };
  }, 'length': 0x0, 'getLocalName': function (eqswv) {
    return this[eqswv]['localName'];
  }, 'getLocator': function (tvcs0e) {
    return this[tvcs0e]['locator'];
  }, 'getQName': function (c0u3e) {
    return this[c0u3e]['qName'];
  }, 'getURI': function (kqwsv) {
    return this[kqwsv]['uri'];
  }, 'getValue': function (xagk6) {
    return this[xagk6]['value'];
  } }, Dqw6xjk({}, Dqw6xjk['prototype']) instanceof Dqw6xjk || (Dqw6xjk = function (qkvt, jamo) {
  function b0pu3c() {}b0pu3c['prototype'] = jamo, b0pu3c = new b0pu3c();for (jamo in qkvt) b0pu3c[jamo] = qkvt[jamo];return b0pu3c;
}), exports['XMLReader'] = Dmgo5;