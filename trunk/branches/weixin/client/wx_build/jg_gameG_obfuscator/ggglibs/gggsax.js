var m = wx.$g;
function gqt5_pw() {}function gc62ev(qwpt_5, wg5t_, $17o, pkyg_t, f46rh) {
  function uev3q2(ok$s71) {
    var frhd0 = ok$s71['slice'](0x1, -0x1);return frhd0 in $17o ? $17o[frhd0] : '#' === frhd0['charAt'](0x0) ? 0xffff < (frhd0 = parseInt(frhd0['substr'](0x1)['replace']('x', '0x'))) ? (frhd0 -= 0x10000, String['fromCharCode'](0xd800 + (frhd0 >> 0xa), 0xdc00 + (0x3ff & frhd0))) : String['fromCharCode'](frhd0) : (f46rh['error']('entity not found:' + ok$s71), ok$s71);
  }function sxoi8$(yk71og) {
    var yg1ok7;uq52w3 < yk71og && (yg1ok7 = qwpt_5['substring'](uq52w3, yk71og)['replace'](/&#?\w+;/g, uev3q2), o7k$ && xm8a$i(uq52w3), pkyg_t['characters'](yg1ok7, 0x0, yk71og - uq52w3), uq52w3 = yk71og);
  }function xm8a$i(pyk_, b90dhr) {
    for (; oxi$s8 <= pyk_ && (b90dhr = kg1ypt['exec'](qwpt_5));) gkp1yt = b90dhr['index'], oxi$s8 = gkp1yt + b90dhr[0x0]['length'], o7k$['lineNumber']++;o7k$['columnNumber'] = pyk_ - gkp1yt + 0x1;
  }for (var gkp1yt = 0x0, oxi$s8 = 0x0, kg1ypt = /.*(?:\r\n?|\n)|.*$/g, o7k$ = pkyg_t['locator'], hl0rf9 = [{ 'currentNSMap': wg5t_ }], rflh09 = {}, uq52w3 = 0x0;;) {
    try {
      var f0hrd9 = qwpt_5['indexOf']('<', uq52w3),
          v2uc4,
          c4f6el;if (f0hrd9 < 0x0) return void (qwpt_5['substr'](uq52w3)['match'](/^\s*$/) || (c4f6el = (v2uc4 = pkyg_t['doc'])['createTextNode'](qwpt_5['substr'](uq52w3)), v2uc4['appendChild'](c4f6el), pkyg_t['currentElement'] = c4f6el));switch (uq52w3 < f0hrd9 && sxoi8$(f0hrd9), qwpt_5['charAt'](f0hrd9 + 0x1)) {case '/':
          var izmajx = qwpt_5['indexOf']('>', f0hrd9 + 0x3),
              j8ixm = qwpt_5['substring'](f0hrd9 + 0x2, izmajx),
              bh0r = hl0rf9['pop']();izmajx < 0x0 ? (j8ixm = qwpt_5['substring'](f0hrd9 + 0x2)['replace'](/[\s<].*/, ''), f46rh['error']('end tag name: ' + j8ixm + ' is not complete:' + bh0r['tagName']), izmajx = f0hrd9 + 0x1 + j8ixm['length']) : j8ixm['match'](/\s</) && (j8ixm = j8ixm['replace'](/[\s<].*/, ''), f46rh['error']('end tag name: ' + j8ixm + ' maybe not complete'), izmajx = f0hrd9 + 0x1 + j8ixm['length']);var am8ijx = bh0r['localNSMap'],
              c32ev = bh0r['tagName'] == j8ixm;if (c32ev || bh0r['tagName'] && bh0r['tagName']['toLowerCase']() == j8ixm['toLowerCase']()) {
            if (pkyg_t['endElement'](bh0r['uri'], bh0r['localName'], j8ixm), am8ijx) {
              for (var pt5qw_ in am8ijx) pkyg_t['endPrefixMapping'](pt5qw_);
            }c32ev || f46rh['fatalError']('end tag name: ' + j8ixm + ' is not match the current start tagName:' + bh0r['tagName']);
          } else hl0rf9['push'](bh0r);izmajx++;break;case '?':
          o7k$ && xm8a$i(f0hrd9), izmajx = go7kg1y(qwpt_5, f0hrd9, pkyg_t);break;case '!':
          o7k$ && xm8a$i(f0hrd9), izmajx = gs7o1k(qwpt_5, f0hrd9, pkyg_t, f46rh);break;default:
          o7k$ && xm8a$i(f0hrd9);var fh4c6l = new gw_tq5p(),
              _5twpg = hl0rf9[hl0rf9['length'] - 0x1]['currentNSMap'],
              izmajx = ggp_5tw(qwpt_5, f0hrd9, fh4c6l, _5twpg, uev3q2, f46rh),
              lc4ef = fh4c6l['length'];if (!fh4c6l['closed'] && glfh0r(qwpt_5, izmajx, fh4c6l['tagName'], rflh09) && (fh4c6l['closed'] = !0x0, $17o['nbsp'] || f46rh['warning']('unclosed xml attribute')), o7k$ && lc4ef) {
            for (var ce42 = gq5_u(o7k$, {}), w5qtp_ = 0x0; w5qtp_ < lc4ef; w5qtp_++) {
              var d0rf = fh4c6l[w5qtp_];xm8a$i(d0rf['offset']), d0rf['locator'] = gq5_u(o7k$, {});
            }pkyg_t['locator'] = ce42, ge4v62(fh4c6l, pkyg_t, _5twpg) && hl0rf9['push'](fh4c6l), pkyg_t['locator'] = o7k$;
          } else ge4v62(fh4c6l, pkyg_t, _5twpg) && hl0rf9['push'](fh4c6l);'http://www.w3.org/1999/xhtml' !== fh4c6l['uri'] || fh4c6l['closed'] ? izmajx++ : izmajx = gtypkg_(qwpt_5, izmajx, fh4c6l['tagName'], uev3q2, pkyg_t);}
    } catch (rf0d9h) {
      f46rh['error']('element parse error: ' + rf0d9h), izmajx = -0x1;
    }uq52w3 < izmajx ? uq52w3 = izmajx : sxoi8$(Math['max'](f0hrd9, uq52w3) + 0x1);
  }
}function gq5_u(rb09dh, os17) {
  return os17['lineNumber'] = rb09dh['lineNumber'], os17['columnNumber'] = rb09dh['columnNumber'], os17;
}function ggp_5tw(hdfr0, u23vq, e42ucv, zjai, q_w5u3, kys1o) {
  for (var o817$, gtyk1 = ++u23vq, ogk71 = gtywp_g;;) {
    var ce426 = hdfr0['charAt'](gtyk1);switch (ce426) {case '=':
        if (ogk71 === gdr90h) o817$ = hdfr0['slice'](u23vq, gtyk1), ogk71 = gy1o7g;else {
          if (ogk71 !== grl09f) throw new Error('attribute equal must after attrName');ogk71 = gy1o7g;
        }break;case '\x27':case '\x22':
        if (ogk71 === gy1o7g || ogk71 === gdr90h) {
          if (ogk71 === gdr90h && (kys1o['warning']('attribute value must after "="'), o817$ = hdfr0['slice'](u23vq, gtyk1)), !(0x0 < (gtyk1 = hdfr0['indexOf'](ce426, u23vq = gtyk1 + 0x1)))) throw new Error('attribute value no end \'' + ce426 + '\' match');mzjixa = hdfr0['slice'](u23vq, gtyk1)['replace'](/&#?\w+;/g, q_w5u3), e42ucv['add'](o817$, mzjixa, u23vq - 0x1), ogk71 = gytw_gp;
        } else {
          if (ogk71 != gp17kg) throw new Error('attribute value must after "="');mzjixa = hdfr0['slice'](u23vq, gtyk1)['replace'](/&#?\w+;/g, q_w5u3), e42ucv['add'](o817$, mzjixa, u23vq), kys1o['warning']('attribute "' + o817$ + '" missed start quot(' + ce426 + ')!!'), u23vq = gtyk1 + 0x1, ogk71 = gytw_gp;
        }break;case '/':
        switch (ogk71) {case gtywp_g:
            e42ucv['setTagName'](hdfr0['slice'](u23vq, gtyk1));case gytw_gp:case grdb9h0:case gw_typ:
            ogk71 = gw_typ, e42ucv['closed'] = !0x0;case gp17kg:case gdr90h:case grl09f:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return kys1o['error']('unexpected end of input'), ogk71 == gtywp_g && e42ucv['setTagName'](hdfr0['slice'](u23vq, gtyk1)), gtyk1;case '>':
        switch (ogk71) {case gtywp_g:
            e42ucv['setTagName'](hdfr0['slice'](u23vq, gtyk1));case gytw_gp:case grdb9h0:case gw_typ:
            break;case gp17kg:case gdr90h:
            '/' === (mzjixa = hdfr0['slice'](u23vq, gtyk1))['slice'](-0x1) && (e42ucv['closed'] = !0x0, mzjixa = mzjixa['slice'](0x0, -0x1));case grl09f:
            ogk71 === grl09f && (mzjixa = o817$), ogk71 == gp17kg ? (kys1o['warning']('attribute "' + mzjixa + '" missed quot(")!!'), e42ucv['add'](o817$, mzjixa['replace'](/&#?\w+;/g, q_w5u3), u23vq)) : ('http://www.w3.org/1999/xhtml' === zjai[''] && mzjixa['match'](/^(?:disabled|checked|selected)$/i) || kys1o['warning']('attribute "' + mzjixa + '" missed value!! "' + mzjixa + '" instead!!'), e42ucv['add'](mzjixa, mzjixa, u23vq));break;case gy1o7g:
            throw new Error('attribute value missed!!');}return gtyk1;case '\u0080':
        ce426 = '\x20';default:
        if (ce426 <= '\x20') switch (ogk71) {case gtywp_g:
            e42ucv['setTagName'](hdfr0['slice'](u23vq, gtyk1)), ogk71 = grdb9h0;break;case gdr90h:
            o817$ = hdfr0['slice'](u23vq, gtyk1), ogk71 = grl09f;break;case gp17kg:
            var mzjixa = hdfr0['slice'](u23vq, gtyk1)['replace'](/&#?\w+;/g, q_w5u3);kys1o['warning']('attribute "' + mzjixa + '" missed quot(")!!'), e42ucv['add'](o817$, mzjixa, u23vq);case gytw_gp:
            ogk71 = grdb9h0;} else switch (ogk71) {case grl09f:
            e42ucv['tagName'], 'http://www.w3.org/1999/xhtml' === zjai[''] && o817$['match'](/^(?:disabled|checked|selected)$/i) || kys1o['warning']('attribute "' + o817$ + '" missed value!! "' + o817$ + '" instead2!!'), e42ucv['add'](o817$, o817$, u23vq), u23vq = gtyk1, ogk71 = gdr90h;break;case gytw_gp:
            kys1o['warning']('attribute space is required"' + o817$ + '\x22!!');case grdb9h0:
            ogk71 = gdr90h, u23vq = gtyk1;break;case gy1o7g:
            ogk71 = gp17kg, u23vq = gtyk1;break;case gw_typ:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}gtyk1++;
  }
}function ge4v62(_35qwu, ue2q, gw_yt) {
  for (var tgpky_ = _35qwu['tagName'], f6h0 = null, mx8a = _35qwu['length']; mx8a--;) {
    var tp_5qw = _35qwu[mx8a],
        kso1$ = tp_5qw['qName'],
        le4cf6 = tp_5qw['value'],
        gpytk_;kso1$ = 0x0 < (uw53 = kso1$['indexOf'](':')) ? (w_5q3u = tp_5qw['prefix'] = kso1$['slice'](0x0, uw53), gpytk_ = kso1$['slice'](uw53 + 0x1), 'xmlns' === w_5q3u && gpytk_) : (w_5q3u = null, 'xmlns' === (gpytk_ = kso1$) && ''), tp_5qw['localName'] = gpytk_, !0x1 !== kso1$ && (null == f6h0 && (f6h0 = {}, gzjxima(gw_yt, gw_yt = {})), gw_yt[kso1$] = f6h0[kso1$] = le4cf6, tp_5qw['uri'] = 'http://www.w3.org/2000/xmlns/', ue2q['startPrefixMapping'](kso1$, le4cf6));
  }for (mx8a = _35qwu['length']; mx8a--;) (w_5q3u = (tp_5qw = _35qwu[mx8a])['prefix']) && ('xml' === w_5q3u && (tp_5qw['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== w_5q3u && (tp_5qw['uri'] = gw_yt[w_5q3u || '']));var uw53;gpytk_ = 0x0 < (uw53 = tgpky_['indexOf'](':')) ? (w_5q3u = _35qwu['prefix'] = tgpky_['slice'](0x0, uw53), _35qwu['localName'] = tgpky_['slice'](uw53 + 0x1)) : (w_5q3u = null, _35qwu['localName'] = tgpky_);var pk_ty = _35qwu['uri'] = gw_yt[w_5q3u || ''];if (ue2q['startElement'](pk_ty, gpytk_, tgpky_, _35qwu), !_35qwu['closed']) return _35qwu['currentNSMap'] = gw_yt, _35qwu['localNSMap'] = f6h0, !0x0;if (ue2q['endElement'](pk_ty, gpytk_, tgpky_), f6h0) {
    for (var w_5q3u in f6h0) ue2q['endPrefixMapping'](w_5q3u);
  }
}function gtypkg_($iso87, rl6fh, is87$, $8xs, v2ec) {
  if (/^(?:script|textarea)$/i['test'](is87$)) {
    var u352qw = $iso87['indexOf']('</' + is87$ + '>', rl6fh),
        $iso87 = $iso87['substring'](rl6fh + 0x1, u352qw);if (/[&<]/['test']($iso87)) return (/^script$/i['test'](is87$) || ($iso87 = $iso87['replace'](/&#?\w+;/g, $8xs)), v2ec['characters']($iso87, 0x0, $iso87['length']), u352qw
    );
  }return rl6fh + 0x1;
}function glfh0r(ko1g, l6r4fh, f60hrl, ky71p) {
  var osi87 = ky71p[f60hrl];return null == osi87 && ((osi87 = ko1g['lastIndexOf']('</' + f60hrl + '>')) < l6r4fh && (osi87 = ko1g['lastIndexOf']('</' + f60hrl)), ky71p[f60hrl] = osi87), osi87 < l6r4fh;
}function gzjxima(fl60hr, wytp_) {
  for (var ox8s$ in fl60hr) wytp_[ox8s$] = fl60hr[ox8s$];
}function gs7o1k(twy_, w35u2, ty_pkg, os$i78) {
  var io8xs = twy_['charAt'](w35u2 + 0x2);if ('-' === io8xs) return '-' !== twy_['charAt'](w35u2 + 0x3) ? -0x1 : w35u2 < (v2q35 = twy_['indexOf']('-->', w35u2 + 0x4)) ? (ty_pkg['comment'](twy_, w35u2 + 0x4, v2q35 - w35u2 - 0x4), v2q35 + 0x3) : (os$i78['error']('Unclosed comment'), -0x1);if ('CDATA[' == twy_['substr'](w35u2 + 0x3, 0x6)) {
    var v2q35 = twy_['indexOf'](']]>', w35u2 + 0x9);return ty_pkg['startCDATA'](), ty_pkg['characters'](twy_, w35u2 + 0x9, v2q35 - w35u2 - 0x9), ty_pkg['endCDATA'](), v2q35 + 0x3;
  }io8xs = gaxjzim(twy_, w35u2), os$i78 = io8xs['length'];if (0x1 < os$i78 && /!doctype/i['test'](io8xs[0x0][0x0])) return v2q35 = io8xs[0x1][0x0], twy_ = 0x3 < os$i78 && /^public$/i['test'](io8xs[0x2][0x0]) && io8xs[0x3][0x0], w35u2 = 0x4 < os$i78 && io8xs[0x4][0x0], os$i78 = io8xs[os$i78 - 0x1], (ty_pkg['startDTD'](v2q35, twy_ && twy_['replace'](/^(['"])(.*?)\1$/, '$2'), w35u2 && w35u2['replace'](/^(['"])(.*?)\1$/, '$2')), ty_pkg['endDTD'](), os$i78['index'] + os$i78[0x0]['length']);return -0x1;
}function go7kg1y(m8ixj, e2qvu3, ko71sy) {
  var pqt_5 = m8ixj['indexOf']('?>', e2qvu3);if (pqt_5) return e2qvu3 = m8ixj['substring'](e2qvu3, pqt_5)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), e2qvu3 ? (e2qvu3[0x0]['length'], ko71sy['processingInstruction'](e2qvu3[0x1], e2qvu3[0x2]), pqt_5 + 0x2) : -0x1;return -0x1;
}function gw_tq5p() {}function gce24uv(s$1ko7, yp1k7g) {
  return s$1ko7['__proto__'] = yp1k7g, s$1ko7;
}function gaxjzim(q25v3u, _uq3w) {
  var ygp_kt,
      c2eu3v = [],
      am8jix = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (am8jix['lastIndex'] = _uq3w, am8jix['exec'](q25v3u); ygp_kt = am8jix['exec'](q25v3u);) if (c2eu3v['push'](ygp_kt), ygp_kt[0x1]) return c2eu3v;
}var gp_yktg = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    guecv24 = new RegExp('[\\-\\.0-9' + gp_yktg['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gueq2v3 = new RegExp('^' + gp_yktg['source'] + guecv24['source'] + '*(?::' + gp_yktg['source'] + guecv24['source'] + '*)?$'),
    gtywp_g = 0x0,
    gdr90h = 0x1,
    grl09f = 0x2,
    gy1o7g = 0x3,
    gp17kg = 0x4,
    gytw_gp = 0x5,
    grdb9h0 = 0x6,
    gw_typ = 0x7;gqt5_pw['prototype'] = { 'parse': function (sy17k, b0dhr9, a8i) {
    var v23eu = this['domBuilder'];v23eu['startDocument'](), gzjxima(b0dhr9, b0dhr9 = {}), gc62ev(sy17k, b0dhr9, a8i, v23eu, this['errorHandler']), v23eu['endDocument']();
  } }, gw_tq5p['prototype'] = { 'setTagName': function (chf64l) {
    if (!gueq2v3['test'](chf64l)) throw new Error('invalid tagName:' + chf64l);this['tagName'] = chf64l;
  }, 'add': function (kp17, _gyp, r6h0lf) {
    if (!gueq2v3['test'](kp17)) throw new Error('invalid attribute:' + kp17);this[this['length']++] = { 'qName': kp17, 'value': _gyp, 'offset': r6h0lf };
  }, 'length': 0x0, 'getLocalName': function (qev3u) {
    return this[qev3u]['localName'];
  }, 'getLocator': function (zxmja) {
    return this[zxmja]['locator'];
  }, 'getQName': function (jzmixa) {
    return this[jzmixa]['qName'];
  }, 'getURI': function (y7gpk) {
    return this[y7gpk]['uri'];
  }, 'getValue': function (flch46) {
    return this[flch46]['value'];
  } }, gce24uv({}, gce24uv['prototype']) instanceof gce24uv || (gce24uv = function (frhl64, o$817) {
  function c6fh() {}for (o$817 in c6fh['prototype'] = o$817, c6fh = new c6fh(), frhl64) c6fh[o$817] = frhl64[o$817];return c6fh;
}), exports['XMLReader'] = gqt5_pw;