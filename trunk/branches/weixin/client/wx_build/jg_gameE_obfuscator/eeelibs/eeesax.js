var b = wx.$e;
function ef6w3ut() {}function esqn5r$($sqe5, y3x, ixyt_, snweq, ti_fyx) {
  function plg28(rnm$o) {
    var _0ya7i = rnm$o['slice'](0x1, -0x1);return _0ya7i in ixyt_ ? ixyt_[_0ya7i] : '#' === _0ya7i['charAt'](0x0) ? 0xffff < (_0ya7i = parseInt(_0ya7i['substr'](0x1)['replace']('x', '0x'))) ? (_0ya7i -= 0x10000, String['fromCharCode'](0xd800 + (_0ya7i >> 0xa), 0xdc00 + (0x3ff & _0ya7i))) : String['fromCharCode'](_0ya7i) : (ti_fyx['error']('entity not found:' + rnm$o), rnm$o);
  }function o8l2gv(on$m5) {
    var mr5n$;a0b_z < on$m5 && (mr5n$ = $sqe5['substring'](a0b_z, on$m5)['replace'](/&#?\w+;/g, plg28), _i7ya && u6qw3e(a0b_z), snweq['characters'](mr5n$, 0x0, on$m5 - a0b_z), a0b_z = on$m5);
  }function u6qw3e(rsnq5, lr2$m) {
    for (; ayt_x <= rsnq5 && (lr2$m = nrm$s['exec']($sqe5));) f_xy = lr2$m['index'], ayt_x = f_xy + lr2$m[0x0]['length'], _i7ya['lineNumber']++;_i7ya['columnNumber'] = rsnq5 - f_xy + 0x1;
  }for (var f_xy = 0x0, ayt_x = 0x0, nrm$s = /.*(?:\r\n?|\n)|.*$/g, _i7ya = snweq['locator'], lgv2o8 = [{ 'currentNSMap': y3x }], n$mo5r = {}, a0b_z = 0x0;;) {
    try {
      var _yxti = $sqe5['indexOf']('<', a0b_z),
          z_a70b,
          g94;if (_yxti < 0x0) return void ($sqe5['substr'](a0b_z)['match'](/^\s*$/) || (g94 = (z_a70b = snweq['doc'])['createTextNode']($sqe5['substr'](a0b_z)), z_a70b['appendChild'](g94), snweq['currentElement'] = g94));switch (a0b_z < _yxti && o8l2gv(_yxti), $sqe5['charAt'](_yxti + 0x1)) {case '/':
          var enuw = $sqe5['indexOf']('>', _yxti + 0x3),
              $s5eqn = $sqe5['substring'](_yxti + 0x2, enuw),
              xiy3f = lgv2o8['pop']();enuw < 0x0 ? ($s5eqn = $sqe5['substring'](_yxti + 0x2)['replace'](/[\s<].*/, ''), ti_fyx['error']('end tag name: ' + $s5eqn + ' is not complete:' + xiy3f['tagName']), enuw = _yxti + 0x1 + $s5eqn['length']) : $s5eqn['match'](/\s</) && ($s5eqn = $s5eqn['replace'](/[\s<].*/, ''), ti_fyx['error']('end tag name: ' + $s5eqn + ' maybe not complete'), enuw = _yxti + 0x1 + $s5eqn['length']);var ft3xy = xiy3f['localNSMap'],
              n$om = xiy3f['tagName'] == $s5eqn;if (n$om || xiy3f['tagName'] && xiy3f['tagName']['toLowerCase']() == $s5eqn['toLowerCase']()) {
            if (snweq['endElement'](xiy3f['uri'], xiy3f['localName'], $s5eqn), ft3xy) {
              for (var a_xy in ft3xy) snweq['endPrefixMapping'](a_xy);
            }n$om || ti_fyx['fatalError']('end tag name: ' + $s5eqn + ' is not match the current start tagName:' + xiy3f['tagName']);
          } else lgv2o8['push'](xiy3f);enuw++;break;case '?':
          _i7ya && u6qw3e(_yxti), enuw = eorlm28($sqe5, _yxti, snweq);break;case '!':
          _i7ya && u6qw3e(_yxti), enuw = eg8l2vp($sqe5, _yxti, snweq, ti_fyx);break;default:
          _i7ya && u6qw3e(_yxti);var vgp8 = new exu6ft3(),
              d48pg = lgv2o8[lgv2o8['length'] - 0x1]['currentNSMap'],
              enuw = ei07z_a($sqe5, _yxti, vgp8, d48pg, plg28, ti_fyx),
              j9hd = vgp8['length'];if (!vgp8['closed'] && er8oml2($sqe5, enuw, vgp8['tagName'], n$mo5r) && (vgp8['closed'] = !0x0, ixyt_['nbsp'] || ti_fyx['warning']('unclosed xml attribute')), _i7ya && j9hd) {
            for (var pv9g = e$rsm5n(_i7ya, {}), kd41h = 0x0; kd41h < j9hd; kd41h++) {
              var g4dvp8 = vgp8[kd41h];u6qw3e(g4dvp8['offset']), g4dvp8['locator'] = e$rsm5n(_i7ya, {});
            }snweq['locator'] = pv9g, eq6s(vgp8, snweq, d48pg) && lgv2o8['push'](vgp8), snweq['locator'] = _i7ya;
          } else eq6s(vgp8, snweq, d48pg) && lgv2o8['push'](vgp8);'http://www.w3.org/1999/xhtml' !== vgp8['uri'] || vgp8['closed'] ? enuw++ : enuw = eba_($sqe5, enuw, vgp8['tagName'], plg28, snweq);}
    } catch (y7a_0i) {
      ti_fyx['error']('element parse error: ' + y7a_0i), enuw = -0x1;
    }a0b_z < enuw ? a0b_z = enuw : o8l2gv(Math['max'](_yxti, a0b_z) + 0x1);
  }
}function e$rsm5n(dkj1, d4p9) {
  return d4p9['lineNumber'] = dkj1['lineNumber'], d4p9['columnNumber'] = dkj1['columnNumber'], d4p9;
}function ei07z_a(iya_t, gp491d, y_ixf, fyti3, xf63u, $nr5ms) {
  for (var qws6e, esq$n = ++gp491d, _a7bz = edpg48v;;) {
    var b0_7 = iya_t['charAt'](esq$n);switch (b0_7) {case '=':
        if (_a7bz === efu6t3w) qws6e = iya_t['slice'](gp491d, esq$n), _a7bz = ei7_y;else {
          if (_a7bz !== e_yxift) throw new Error('attribute equal must after attrName');_a7bz = ei7_y;
        }break;case '\x27':case '\x22':
        if (_a7bz === ei7_y || _a7bz === efu6t3w) {
          if (_a7bz === efu6t3w && ($nr5ms['warning']('attribute value must after "="'), qws6e = iya_t['slice'](gp491d, esq$n)), !(0x0 < (esq$n = iya_t['indexOf'](b0_7, gp491d = esq$n + 0x1)))) throw new Error('attribute value no end \'' + b0_7 + '\' match');ixy_ft = iya_t['slice'](gp491d, esq$n)['replace'](/&#?\w+;/g, xf63u), y_ixf['add'](qws6e, ixy_ft, gp491d - 0x1), _a7bz = ews6q;
        } else {
          if (_a7bz != emrno5$) throw new Error('attribute value must after "="');ixy_ft = iya_t['slice'](gp491d, esq$n)['replace'](/&#?\w+;/g, xf63u), y_ixf['add'](qws6e, ixy_ft, gp491d), $nr5ms['warning']('attribute "' + qws6e + '" missed start quot(' + b0_7 + ')!!'), gp491d = esq$n + 0x1, _a7bz = ews6q;
        }break;case '/':
        switch (_a7bz) {case edpg48v:
            y_ixf['setTagName'](iya_t['slice'](gp491d, esq$n));case ews6q:case eolm2r8:case eue36wq:
            _a7bz = eue36wq, y_ixf['closed'] = !0x0;case emrno5$:case efu6t3w:case e_yxift:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return $nr5ms['error']('unexpected end of input'), _a7bz == edpg48v && y_ixf['setTagName'](iya_t['slice'](gp491d, esq$n)), esq$n;case '>':
        switch (_a7bz) {case edpg48v:
            y_ixf['setTagName'](iya_t['slice'](gp491d, esq$n));case ews6q:case eolm2r8:case eue36wq:
            break;case emrno5$:case efu6t3w:
            '/' === (ixy_ft = iya_t['slice'](gp491d, esq$n))['slice'](-0x1) && (y_ixf['closed'] = !0x0, ixy_ft = ixy_ft['slice'](0x0, -0x1));case e_yxift:
            _a7bz === e_yxift && (ixy_ft = qws6e), _a7bz == emrno5$ ? ($nr5ms['warning']('attribute "' + ixy_ft + '" missed quot(")!!'), y_ixf['add'](qws6e, ixy_ft['replace'](/&#?\w+;/g, xf63u), gp491d)) : ('http://www.w3.org/1999/xhtml' === fyti3[''] && ixy_ft['match'](/^(?:disabled|checked|selected)$/i) || $nr5ms['warning']('attribute "' + ixy_ft + '" missed value!! "' + ixy_ft + '" instead!!'), y_ixf['add'](ixy_ft, ixy_ft, gp491d));break;case ei7_y:
            throw new Error('attribute value missed!!');}return esq$n;case '\u0080':
        b0_7 = '\x20';default:
        if (b0_7 <= '\x20') switch (_a7bz) {case edpg48v:
            y_ixf['setTagName'](iya_t['slice'](gp491d, esq$n)), _a7bz = eolm2r8;break;case efu6t3w:
            qws6e = iya_t['slice'](gp491d, esq$n), _a7bz = e_yxift;break;case emrno5$:
            var ixy_ft = iya_t['slice'](gp491d, esq$n)['replace'](/&#?\w+;/g, xf63u);$nr5ms['warning']('attribute "' + ixy_ft + '" missed quot(")!!'), y_ixf['add'](qws6e, ixy_ft, gp491d);case ews6q:
            _a7bz = eolm2r8;} else switch (_a7bz) {case e_yxift:
            y_ixf['tagName'], 'http://www.w3.org/1999/xhtml' === fyti3[''] && qws6e['match'](/^(?:disabled|checked|selected)$/i) || $nr5ms['warning']('attribute "' + qws6e + '" missed value!! "' + qws6e + '" instead2!!'), y_ixf['add'](qws6e, qws6e, gp491d), gp491d = esq$n, _a7bz = efu6t3w;break;case ews6q:
            $nr5ms['warning']('attribute space is required"' + qws6e + '\x22!!');case eolm2r8:
            _a7bz = efu6t3w, gp491d = esq$n;break;case ei7_y:
            _a7bz = emrno5$, gp491d = esq$n;break;case eue36wq:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}esq$n++;
  }
}function eq6s(x_tay, p1gd9, a0x_i) {
  for (var $s5rn = x_tay['tagName'], ay0i7_ = null, srn$q = x_tay['length']; srn$q--;) {
    var vdpg8 = x_tay[srn$q],
        que36 = vdpg8['qName'],
        h149 = vdpg8['value'],
        _ti;que36 = 0x0 < (glp2v = que36['indexOf'](':')) ? (s5$nmr = vdpg8['prefix'] = que36['slice'](0x0, glp2v), _ti = que36['slice'](glp2v + 0x1), 'xmlns' === s5$nmr && _ti) : (s5$nmr = null, 'xmlns' === (_ti = que36) && ''), vdpg8['localName'] = _ti, !0x1 !== que36 && (null == ay0i7_ && (ay0i7_ = {}, elorm2$(a0x_i, a0x_i = {})), a0x_i[que36] = ay0i7_[que36] = h149, vdpg8['uri'] = 'http://www.w3.org/2000/xmlns/', p1gd9['startPrefixMapping'](que36, h149));
  }for (srn$q = x_tay['length']; srn$q--;) (s5$nmr = (vdpg8 = x_tay[srn$q])['prefix']) && ('xml' === s5$nmr && (vdpg8['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== s5$nmr && (vdpg8['uri'] = a0x_i[s5$nmr || '']));var glp2v;_ti = 0x0 < (glp2v = $s5rn['indexOf'](':')) ? (s5$nmr = x_tay['prefix'] = $s5rn['slice'](0x0, glp2v), x_tay['localName'] = $s5rn['slice'](glp2v + 0x1)) : (s5$nmr = null, x_tay['localName'] = $s5rn);var y0ax = x_tay['uri'] = a0x_i[s5$nmr || ''];if (p1gd9['startElement'](y0ax, _ti, $s5rn, x_tay), !x_tay['closed']) return x_tay['currentNSMap'] = a0x_i, x_tay['localNSMap'] = ay0i7_, !0x0;if (p1gd9['endElement'](y0ax, _ti, $s5rn), ay0i7_) {
    for (var s5$nmr in ay0i7_) p1gd9['endPrefixMapping'](s5$nmr);
  }
}function eba_(j9dh, xy0_ia, $morn, t3yifx, d1hk4) {
  if (/^(?:script|textarea)$/i['test']($morn)) {
    var qwneus = j9dh['indexOf']('</' + $morn + '>', xy0_ia),
        j9dh = j9dh['substring'](xy0_ia + 0x1, qwneus);if (/[&<]/['test'](j9dh)) return (/^script$/i['test']($morn) || (j9dh = j9dh['replace'](/&#?\w+;/g, t3yifx)), d1hk4['characters'](j9dh, 0x0, j9dh['length']), qwneus
    );
  }return xy0_ia + 0x1;
}function er8oml2(nwesq, _xiy, h14p9, gp4v8) {
  var ai7_y0 = gp4v8[h14p9];return null == ai7_y0 && ((ai7_y0 = nwesq['lastIndexOf']('</' + h14p9 + '>')) < _xiy && (ai7_y0 = nwesq['lastIndexOf']('</' + h14p9)), gp4v8[h14p9] = ai7_y0), ai7_y0 < _xiy;
}function elorm2$(fwue3, e5wn) {
  for (var o82mrl in fwue3) e5wn[o82mrl] = fwue3[o82mrl];
}function eg8l2vp(uqe63w, o8g2, s$5en, rs$5m) {
  var v2gp84 = uqe63w['charAt'](o8g2 + 0x2);if ('-' === v2gp84) return '-' !== uqe63w['charAt'](o8g2 + 0x3) ? -0x1 : o8g2 < (h941dp = uqe63w['indexOf']('-->', o8g2 + 0x4)) ? (s$5en['comment'](uqe63w, o8g2 + 0x4, h941dp - o8g2 - 0x4), h941dp + 0x3) : (rs$5m['error']('Unclosed comment'), -0x1);if ('CDATA[' == uqe63w['substr'](o8g2 + 0x3, 0x6)) {
    var h941dp = uqe63w['indexOf'](']]>', o8g2 + 0x9);return s$5en['startCDATA'](), s$5en['characters'](uqe63w, o8g2 + 0x9, h941dp - o8g2 - 0x9), s$5en['endCDATA'](), h941dp + 0x3;
  }v2gp84 = ea_xy0i(uqe63w, o8g2), rs$5m = v2gp84['length'];if (0x1 < rs$5m && /!doctype/i['test'](v2gp84[0x0][0x0])) return h941dp = v2gp84[0x1][0x0], uqe63w = 0x3 < rs$5m && /^public$/i['test'](v2gp84[0x2][0x0]) && v2gp84[0x3][0x0], o8g2 = 0x4 < rs$5m && v2gp84[0x4][0x0], rs$5m = v2gp84[rs$5m - 0x1], (s$5en['startDTD'](h941dp, uqe63w && uqe63w['replace'](/^(['"])(.*?)\1$/, '$2'), o8g2 && o8g2['replace'](/^(['"])(.*?)\1$/, '$2')), s$5en['endDTD'](), rs$5m['index'] + rs$5m[0x0]['length']);return -0x1;
}function eorlm28(uftx63, lmor$5, p419h) {
  var yfit_x = uftx63['indexOf']('?>', lmor$5);if (yfit_x) return lmor$5 = uftx63['substring'](lmor$5, yfit_x)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), lmor$5 ? (lmor$5[0x0]['length'], p419h['processingInstruction'](lmor$5[0x1], lmor$5[0x2]), yfit_x + 0x2) : -0x1;return -0x1;
}function exu6ft3() {}function esq5n$e(oml82v, _ytxai) {
  return oml82v['__proto__'] = _ytxai, oml82v;
}function ea_xy0i(yfix3t, futx) {
  var lm$or,
      yxtif = [],
      i_za = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (i_za['lastIndex'] = futx, i_za['exec'](yfix3t); lm$or = i_za['exec'](yfix3t);) if (yxtif['push'](lm$or), lm$or[0x1]) return yxtif;
}var emov82 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ef3u6e = new RegExp('[\\-\\.0-9' + emov82['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    evl8o = new RegExp('^' + emov82['source'] + ef3u6e['source'] + '*(?::' + emov82['source'] + ef3u6e['source'] + '*)?$'),
    edpg48v = 0x0,
    efu6t3w = 0x1,
    e_yxift = 0x2,
    ei7_y = 0x3,
    emrno5$ = 0x4,
    ews6q = 0x5,
    eolm2r8 = 0x6,
    eue36wq = 0x7;ef6w3ut['prototype'] = { 'parse': function (t6ux3f, utw3f, es6wqu) {
    var ixft_ = this['domBuilder'];ixft_['startDocument'](), elorm2$(utw3f, utw3f = {}), esqn5r$(t6ux3f, utw3f, es6wqu, ixft_, this['errorHandler']), ixft_['endDocument']();
  } }, exu6ft3['prototype'] = { 'setTagName': function (iya70) {
    if (!evl8o['test'](iya70)) throw new Error('invalid tagName:' + iya70);this['tagName'] = iya70;
  }, 'add': function (gp19d, ml5ro, ifyt_) {
    if (!evl8o['test'](gp19d)) throw new Error('invalid attribute:' + gp19d);this[this['length']++] = { 'qName': gp19d, 'value': ml5ro, 'offset': ifyt_ };
  }, 'length': 0x0, 'getLocalName': function (swenq) {
    return this[swenq]['localName'];
  }, 'getLocator': function (ogv8l2) {
    return this[ogv8l2]['locator'];
  }, 'getQName': function (ay_ix0) {
    return this[ay_ix0]['qName'];
  }, 'getURI': function (aiyx_t) {
    return this[aiyx_t]['uri'];
  }, 'getValue': function (xiya) {
    return this[xiya]['value'];
  } }, esq5n$e({}, esq5n$e['prototype']) instanceof esq5n$e || (esq5n$e = function (nesqwu, i_yaxt) {
  function uf63() {}for (i_yaxt in uf63['prototype'] = i_yaxt, uf63 = new uf63(), nesqwu) uf63[i_yaxt] = nesqwu[i_yaxt];return uf63;
}), exports['XMLReader'] = ef6w3ut;