var Q = wx.$v;
function v$feq1() {}function vwkq5f$(fqw$5k, _e1q0, zan46u, t2mcs, johyc) {
  function iu0_1r(iq$e_1) {
    if (iq$e_1 > 0xffff) {
      iq$e_1 -= 0x10000;var m2tc3 = 0xd800 + (iq$e_1 >> 0xa),
          e1_r0 = 0xdc00 + (0x3ff & iq$e_1);return String['fromCharCode'](m2tc3, e1_r0);
    }return String['fromCharCode'](iq$e_1);
  }function slm793(znu46a) {
    var tc3sm2 = znu46a['slice'](0x1, -0x1);return tc3sm2 in zan46u ? zan46u[tc3sm2] : '#' === tc3sm2['charAt'](0x0) ? iu0_1r(parseInt(tc3sm2['substr'](0x1)['replace']('x', '0x'))) : (johyc['error']('entity not found:' + znu46a), znu46a);
  }function a4b79(s79m3) {
    if (s79m3 > _01ri) {
      var u4naz = fqw$5k['substring'](_01ri, s79m3)['replace'](/&#?\w+;/g, slm793);$f_ && jcmst2(_01ri), t2mcs['characters'](u4naz, 0x0, s79m3 - _01ri), _01ri = s79m3;
    }
  }function jcmst2(b4za6n, s2mtc3) {
    for (; b4za6n >= zr0u && (s2mtc3 = wd5vk['exec'](fqw$5k));) bl349 = s2mtc3['index'], zr0u = bl349 + s2mtc3[0x0]['length'], $f_['lineNumber']++;$f_['columnNumber'] = b4za6n - bl349 + 0x1;
  }for (var bl349 = 0x0, zr0u = 0x0, wd5vk = /.*(?:\r\n?|\n)|.*$/g, $f_ = t2mcs['locator'], $1ei_q = [{ 'currentNSMap': _e1q0 }], dvfkw5 = {}, _01ri = 0x0;;) {
    try {
      var slm73 = fqw$5k['indexOf']('<', _01ri);if (0x0 > slm73) {
        if (!fqw$5k['substr'](_01ri)['match'](/^\s*$/)) {
          var c2m3st = t2mcs['doc'],
              nzrui0 = c2m3st['createTextNode'](fqw$5k['substr'](_01ri));c2m3st['appendChild'](nzrui0), t2mcs['currentElement'] = nzrui0;
        }return;
      }switch (slm73 > _01ri && a4b79(slm73), fqw$5k['charAt'](slm73 + 0x1)) {case '/':
          var hcjoy = fqw$5k['indexOf']('>', slm73 + 0x3),
              kf$_e = fqw$5k['substring'](slm73 + 0x2, hcjoy),
              $_ekf = $1ei_q['pop']();0x0 > hcjoy ? (kf$_e = fqw$5k['substring'](slm73 + 0x2)['replace'](/[\s<].*/, ''), johyc['error']('end tag name: ' + kf$_e + ' is not complete:' + $_ekf['tagName']), hcjoy = slm73 + 0x1 + kf$_e['length']) : kf$_e['match'](/\s</) && (kf$_e = kf$_e['replace'](/[\s<].*/, ''), johyc['error']('end tag name: ' + kf$_e + ' maybe not complete'), hcjoy = slm73 + 0x1 + kf$_e['length']);var tmscj = $_ekf['localNSMap'],
              s937m2 = $_ekf['tagName'] == kf$_e,
              i1q0e_ = s937m2 || $_ekf['tagName'] && $_ekf['tagName']['toLowerCase']() == kf$_e['toLowerCase']();if (i1q0e_) {
            if (t2mcs['endElement']($_ekf['uri'], $_ekf['localName'], kf$_e), tmscj) {
              for (var q_i1e in tmscj) t2mcs['endPrefixMapping'](q_i1e);
            }s937m2 || johyc['fatalError']('end tag name: ' + kf$_e + ' is not match the current start tagName:' + $_ekf['tagName']);
          } else $1ei_q['push']($_ekf);hcjoy++;break;case '?':
          $f_ && jcmst2(slm73), hcjoy = vwv5xdk(fqw$5k, slm73, t2mcs);break;case '!':
          $f_ && jcmst2(slm73), hcjoy = vtc8yj(fqw$5k, slm73, t2mcs, johyc);break;default:
          $f_ && jcmst2(slm73);var cj8toy = new vhp8yjo(),
              oyh8jc = $1ei_q[$1ei_q['length'] - 0x1]['currentNSMap'],
              hcjoy = vi0nr1(fqw$5k, slm73, cj8toy, oyh8jc, slm793, johyc),
              m392t = cj8toy['length'];if (!cj8toy['closed'] && vw$5fv(fqw$5k, hcjoy, cj8toy['tagName'], dvfkw5) && (cj8toy['closed'] = !0x0, zan46u['nbsp'] || johyc['warning']('unclosed xml attribute')), $f_ && m392t) {
            for (var kvdwf = ve5kf($f_, {}), _10iu = 0x0; m392t > _10iu; _10iu++) {
              var ua6nzr = cj8toy[_10iu];jcmst2(ua6nzr['offset']), ua6nzr['locator'] = ve5kf($f_, {});
            }t2mcs['locator'] = kvdwf, vdkvw(cj8toy, t2mcs, oyh8jc) && $1ei_q['push'](cj8toy), t2mcs['locator'] = $f_;
          } else vdkvw(cj8toy, t2mcs, oyh8jc) && $1ei_q['push'](cj8toy);'http://www.w3.org/1999/xhtml' !== cj8toy['uri'] || cj8toy['closed'] ? hcjoy++ : hcjoy = va794l(fqw$5k, hcjoy, cj8toy['tagName'], slm793, t2mcs);}
    } catch (otj2) {
      johyc['error']('element parse error: ' + otj2), hcjoy = -0x1;
    }hcjoy > _01ri ? _01ri = hcjoy : a4b79(Math['max'](slm73, _01ri) + 0x1);
  }
}function ve5kf(j8yph, l7a4b6) {
  return l7a4b6['lineNumber'] = j8yph['lineNumber'], l7a4b6['columnNumber'] = j8yph['columnNumber'], l7a4b6;
}function vi0nr1(h8py, b6za, b37l, py8joh, hoypj8, zn6rau) {
  for (var vwf5dk, z6lb4a, e1$f_ = ++b6za, to82j = vui0nzr;;) {
    var i0nu1r = h8py['charAt'](e1$f_);switch (i0nu1r) {case '=':
        if (to82j === van6) vwf5dk = h8py['slice'](b6za, e1$f_), to82j = vjo8cty;else {
          if (to82j !== vza4l6b) throw new Error('attribute equal must after attrName');to82j = vjo8cty;
        }break;case '\x27':case '\x22':
        if (to82j === vjo8cty || to82j === van6) {
          if (to82j === van6 && (zn6rau['warning']('attribute value must after "="'), vwf5dk = h8py['slice'](b6za, e1$f_)), b6za = e1$f_ + 0x1, e1$f_ = h8py['indexOf'](i0nu1r, b6za), !(e1$f_ > 0x0)) throw new Error('attribute value no end \'' + i0nu1r + '\' match');z6lb4a = h8py['slice'](b6za, e1$f_)['replace'](/&#?\w+;/g, hoypj8), b37l['add'](vwf5dk, z6lb4a, b6za - 0x1), to82j = voch8;
        } else {
          if (to82j != vjc8yot) throw new Error('attribute value must after "="');z6lb4a = h8py['slice'](b6za, e1$f_)['replace'](/&#?\w+;/g, hoypj8), b37l['add'](vwf5dk, z6lb4a, b6za), zn6rau['warning']('attribute "' + vwf5dk + '" missed start quot(' + i0nu1r + ')!!'), b6za = e1$f_ + 0x1, to82j = voch8;
        }break;case '/':
        switch (to82j) {case vui0nzr:
            b37l['setTagName'](h8py['slice'](b6za, e1$f_));case voch8:case vznra6:case vb497:
            to82j = vb497, b37l['closed'] = !0x0;case vjc8yot:case van6:case vza4l6b:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return zn6rau['error']('unexpected end of input'), to82j == vui0nzr && b37l['setTagName'](h8py['slice'](b6za, e1$f_)), e1$f_;case '>':
        switch (to82j) {case vui0nzr:
            b37l['setTagName'](h8py['slice'](b6za, e1$f_));case voch8:case vznra6:case vb497:
            break;case vjc8yot:case van6:
            z6lb4a = h8py['slice'](b6za, e1$f_), '/' === z6lb4a['slice'](-0x1) && (b37l['closed'] = !0x0, z6lb4a = z6lb4a['slice'](0x0, -0x1));case vza4l6b:
            to82j === vza4l6b && (z6lb4a = vwf5dk), to82j == vjc8yot ? (zn6rau['warning']('attribute "' + z6lb4a + '" missed quot(")!!'), b37l['add'](vwf5dk, z6lb4a['replace'](/&#?\w+;/g, hoypj8), b6za)) : ('http://www.w3.org/1999/xhtml' === py8joh[''] && z6lb4a['match'](/^(?:disabled|checked|selected)$/i) || zn6rau['warning']('attribute "' + z6lb4a + '" missed value!! "' + z6lb4a + '" instead!!'), b37l['add'](z6lb4a, z6lb4a, b6za));break;case vjo8cty:
            throw new Error('attribute value missed!!');}return e1$f_;case '\u0080':
        i0nu1r = '\x20';default:
        if ('\x20' >= i0nu1r) switch (to82j) {case vui0nzr:
            b37l['setTagName'](h8py['slice'](b6za, e1$f_)), to82j = vznra6;break;case van6:
            vwf5dk = h8py['slice'](b6za, e1$f_), to82j = vza4l6b;break;case vjc8yot:
            var z6lb4a = h8py['slice'](b6za, e1$f_)['replace'](/&#?\w+;/g, hoypj8);zn6rau['warning']('attribute "' + z6lb4a + '" missed quot(")!!'), b37l['add'](vwf5dk, z6lb4a, b6za);case voch8:
            to82j = vznra6;} else switch (to82j) {case vza4l6b:
            {
              b37l['tagName'];
            }'http://www.w3.org/1999/xhtml' === py8joh[''] && vwf5dk['match'](/^(?:disabled|checked|selected)$/i) || zn6rau['warning']('attribute "' + vwf5dk + '" missed value!! "' + vwf5dk + '" instead2!!'), b37l['add'](vwf5dk, vwf5dk, b6za), b6za = e1$f_, to82j = van6;break;case voch8:
            zn6rau['warning']('attribute space is required"' + vwf5dk + '\x22!!');case vznra6:
            to82j = van6, b6za = e1$f_;break;case vjo8cty:
            to82j = vjc8yot, b6za = e1$f_;break;case vb497:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}e1$f_++;
  }
}function vdkvw(m7l93, y8cohj, vkdw) {
  for (var auzr6 = m7l93['tagName'], vfk5$ = null, wvf5dk = m7l93['length']; wvf5dk--;) {
    var znua6r = m7l93[wvf5dk],
        r_iu10 = znua6r['qName'],
        rn0u6z = znua6r['value'],
        eq$1i = r_iu10['indexOf'](':');if (eq$1i > 0x0) var kxdv = znua6r['prefix'] = r_iu10['slice'](0x0, eq$1i),
        bs7l39 = r_iu10['slice'](eq$1i + 0x1),
        tsc2m3 = 'xmlns' === kxdv && bs7l39;else bs7l39 = r_iu10, kxdv = null, tsc2m3 = 'xmlns' === r_iu10 && '';znua6r['localName'] = bs7l39, tsc2m3 !== !0x1 && (null == vfk5$ && (vfk5$ = {}, veqi_(vkdw, vkdw = {})), vkdw[tsc2m3] = vfk5$[tsc2m3] = rn0u6z, znua6r['uri'] = 'http://www.w3.org/2000/xmlns/', y8cohj['startPrefixMapping'](tsc2m3, rn0u6z));
  }for (var wvf5dk = m7l93['length']; wvf5dk--;) {
    znua6r = m7l93[wvf5dk];var kxdv = znua6r['prefix'];kxdv && ('xml' === kxdv && (znua6r['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== kxdv && (znua6r['uri'] = vkdw[kxdv || '']));
  }var eq$1i = auzr6['indexOf'](':');eq$1i > 0x0 ? (kxdv = m7l93['prefix'] = auzr6['slice'](0x0, eq$1i), bs7l39 = m7l93['localName'] = auzr6['slice'](eq$1i + 0x1)) : (kxdv = null, bs7l39 = m7l93['localName'] = auzr6);var jhyop = m7l93['uri'] = vkdw[kxdv || ''];if (y8cohj['startElement'](jhyop, bs7l39, auzr6, m7l93), !m7l93['closed']) return m7l93['currentNSMap'] = vkdw, m7l93['localNSMap'] = vfk5$, !0x0;if (y8cohj['endElement'](jhyop, bs7l39, auzr6), vfk5$) {
    for (kxdv in vfk5$) y8cohj['endPrefixMapping'](kxdv);
  }
}function va794l(yc8ohj, ruin0, b739ls, tms39, _q$1ie) {
  if (/^(?:script|textarea)$/i['test'](b739ls)) {
    var wdk5f = yc8ohj['indexOf']('</' + b739ls + '>', ruin0),
        s379lm = yc8ohj['substring'](ruin0 + 0x1, wdk5f);if (/[&<]/['test'](s379lm)) return (/^script$/i['test'](b739ls) ? (_q$1ie['characters'](s379lm, 0x0, s379lm['length']), wdk5f) : (s379lm = s379lm['replace'](/&#?\w+;/g, tms39), _q$1ie['characters'](s379lm, 0x0, s379lm['length']), wdk5f)
    );
  }return ruin0 + 0x1;
}function vw$5fv(q5f$wk, ek_$fq, l974b3, rnau) {
  var e_f$qk = rnau[l974b3];return null == e_f$qk && (e_f$qk = q5f$wk['lastIndexOf']('</' + l974b3 + '>'), ek_$fq > e_f$qk && (e_f$qk = q5f$wk['lastIndexOf']('</' + l974b3)), rnau[l974b3] = e_f$qk), ek_$fq > e_f$qk;
}function veqi_(hyoc8, xw5) {
  for (var o8hjyp in hyoc8) xw5[o8hjyp] = hyoc8[o8hjyp];
}function vtc8yj(nr01, $_e1qi, unaz, e_i1q0) {
  var r1nu0i = nr01['charAt']($_e1qi + 0x2);switch (r1nu0i) {case '-':
      if ('-' === nr01['charAt']($_e1qi + 0x3)) {
        var _f = nr01['indexOf']('-->', $_e1qi + 0x4);return _f > $_e1qi ? (unaz['comment'](nr01, $_e1qi + 0x4, _f - $_e1qi - 0x4), _f + 0x3) : (e_i1q0['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nr01['substr']($_e1qi + 0x3, 0x6)) {
        var _f = nr01['indexOf'](']]>', $_e1qi + 0x9);return unaz['startCDATA'](), unaz['characters'](nr01, $_e1qi + 0x9, _f - $_e1qi - 0x9), unaz['endCDATA'](), _f + 0x3;
      }var e$q1i_ = vst2cmj(nr01, $_e1qi),
          m82ctj = e$q1i_['length'];if (m82ctj > 0x1 && /!doctype/i['test'](e$q1i_[0x0][0x0])) {
        var i0_e1 = e$q1i_[0x1][0x0],
            l97b4a = m82ctj > 0x3 && /^public$/i['test'](e$q1i_[0x2][0x0]) && e$q1i_[0x3][0x0],
            run0i1 = m82ctj > 0x4 && e$q1i_[0x4][0x0],
            nu0rz6 = e$q1i_[m82ctj - 0x1];return unaz['startDTD'](i0_e1, l97b4a && l97b4a['replace'](/^(['"])(.*?)\1$/, '$2'), run0i1 && run0i1['replace'](/^(['"])(.*?)\1$/, '$2')), unaz['endDTD'](), nu0rz6['index'] + nu0rz6[0x0]['length'];
      }}return -0x1;
}function vwv5xdk(cjy, efqk5$, r_e10) {
  var nz0ru = cjy['indexOf']('?>', efqk5$);if (nz0ru) {
    var efq5 = cjy['substring'](efqk5$, nz0ru)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (efq5) {
      {
        efq5[0x0]['length'];
      }return r_e10['processingInstruction'](efq5[0x1], efq5[0x2]), nz0ru + 0x2;
    }return -0x1;
  }return -0x1;
}function vhp8yjo() {}function vjophy(dwvfk, i_01) {
  return dwvfk['__proto__'] = i_01, dwvfk;
}function vst2cmj(al49b7, i1n0) {
  var _iq,
      ophjy8 = [],
      q$1 = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (q$1['lastIndex'] = i1n0, q$1['exec'](al49b7); _iq = q$1['exec'](al49b7);) if (ophjy8['push'](_iq), _iq[0x1]) return ophjy8;
}var vfdk5v = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    vd5kvx = new RegExp('[\\-\\.0-9' + vfdk5v['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    vs93tm = new RegExp('^' + vfdk5v['source'] + vd5kvx['source'] + '*(?::' + vfdk5v['source'] + vd5kvx['source'] + '*)?$'),
    vui0nzr = 0x0,
    van6 = 0x1,
    vza4l6b = 0x2,
    vjo8cty = 0x3,
    vjc8yot = 0x4,
    voch8 = 0x5,
    vznra6 = 0x6,
    vb497 = 0x7;v$feq1['prototype'] = { 'parse': function (r1_0ei, ctj28o, gwdvx5) {
    var nuir0z = this['domBuilder'];nuir0z['startDocument'](), veqi_(ctj28o, ctj28o = {}), vwkq5f$(r1_0ei, ctj28o, gwdvx5, nuir0z, this['errorHandler']), nuir0z['endDocument']();
  } }, vhp8yjo['prototype'] = { 'setTagName': function (z6rna) {
    if (!vs93tm['test'](z6rna)) throw new Error('invalid tagName:' + z6rna);this['tagName'] = z6rna;
  }, 'add': function (s9m732, $_kqfe, f1q_e) {
    if (!vs93tm['test'](s9m732)) throw new Error('invalid attribute:' + s9m732);this[this['length']++] = { 'qName': s9m732, 'value': $_kqfe, 'offset': f1q_e };
  }, 'length': 0x0, 'getLocalName': function (m7329s) {
    return this[m7329s]['localName'];
  }, 'getLocator': function (lb97s3) {
    return this[lb97s3]['locator'];
  }, 'getQName': function (unaz6) {
    return this[unaz6]['qName'];
  }, 'getURI': function (vdxg) {
    return this[vdxg]['uri'];
  }, 'getValue': function (xdkwv) {
    return this[xdkwv]['value'];
  } }, vjophy({}, vjophy['prototype']) instanceof vjophy || (vjophy = function (qi1$_e, vkwd5x) {
  function ei_$1() {}ei_$1['prototype'] = vkwd5x, ei_$1 = new ei_$1();for (vkwd5x in qi1$_e) ei_$1[vkwd5x] = qi1$_e[vkwd5x];return ei_$1;
}), exports['XMLReader'] = v$feq1;