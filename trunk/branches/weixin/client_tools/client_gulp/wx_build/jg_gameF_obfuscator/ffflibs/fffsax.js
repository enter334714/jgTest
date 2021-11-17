var k = wx.$f;
function ffbmui() {}function fnjxsw(j6sod, $38z7r, jdc62, nxjd, $p7y3a) {
  function jc6o(zr8nex) {
    if (zr8nex > 0xffff) {
      zr8nex -= 0x10000;var yar$3 = 0xd800 + (zr8nex >> 0xa),
          r378y = 0xdc00 + (0x3ff & zr8nex);return String['fromCharCode'](yar$3, r378y);
    }return String['fromCharCode'](zr8nex);
  }function $378rz(wdxsnj) {
    var mtbhif = wdxsnj['slice'](0x1, -0x1);return mtbhif in jdc62 ? jdc62[mtbhif] : '#' === mtbhif['charAt'](0x0) ? jc6o(parseInt(mtbhif['substr'](0x1)['replace']('x', '0x'))) : ($p7y3a['error']('entity not found:' + wdxsnj), wdxsnj);
  }function kh5_0q(uvi) {
    if (uvi > q0_hk) {
      var _42kq = j6sod['substring'](q0_hk, uvi)['replace'](/&#?\w+;/g, $378rz);mfht0q && ivtbm(q0_hk), nxjd['characters'](_42kq, 0x0, uvi - q0_hk), q0_hk = uvi;
    }
  }function ivtbm(e8rx7z, imtfh0) {
    for (; e8rx7z >= ibvf && (imtfh0 = j26c['exec'](j6sod));) bmvuf = imtfh0['index'], ibvf = bmvuf + imtfh0[0x0]['length'], mfht0q['lineNumber']++;mfht0q['columnNumber'] = e8rx7z - bmvuf + 0x1;
  }for (var bmvuf = 0x0, ibvf = 0x0, j26c = /.*(?:\r\n?|\n)|.*$/g, mfht0q = nxjd['locator'], ex8nzw = [{ 'currentNSMap': $38z7r }], sznxw = {}, q0_hk = 0x0;;) {
    try {
      var buv19g = j6sod['indexOf']('<', q0_hk);if (0x0 > buv19g) {
        if (!j6sod['substr'](q0_hk)['match'](/^\s*$/)) {
          var z7rxe8 = nxjd['doc'],
              tf0qmh = z7rxe8['createTextNode'](j6sod['substr'](q0_hk));z7rxe8['appendChild'](tf0qmh), nxjd['currentElement'] = tf0qmh;
        }return;
      }switch (buv19g > q0_hk && kh5_0q(buv19g), j6sod['charAt'](buv19g + 0x1)) {case '/':
          var owdcsj = j6sod['indexOf']('>', buv19g + 0x3),
              x8r7ze = j6sod['substring'](buv19g + 0x2, owdcsj),
              kht05 = ex8nzw['pop']();0x0 > owdcsj ? (x8r7ze = j6sod['substring'](buv19g + 0x2)['replace'](/[\s<].*/, ''), $p7y3a['error']('end tag name: ' + x8r7ze + ' is not complete:' + kht05['tagName']), owdcsj = buv19g + 0x1 + x8r7ze['length']) : x8r7ze['match'](/\s</) && (x8r7ze = x8r7ze['replace'](/[\s<].*/, ''), $p7y3a['error']('end tag name: ' + x8r7ze + ' maybe not complete'), owdcsj = buv19g + 0x1 + x8r7ze['length']);var iuvbf = kht05['localNSMap'],
              ocdswj = kht05['tagName'] == x8r7ze,
              jxdn = ocdswj || kht05['tagName'] && kht05['tagName']['toLowerCase']() == x8r7ze['toLowerCase']();if (jxdn) {
            if (nxjd['endElement'](kht05['uri'], kht05['localName'], x8r7ze), iuvbf) {
              for (var r37$8z in iuvbf) nxjd['endPrefixMapping'](r37$8z);
            }ocdswj || $p7y3a['fatalError']('end tag name: ' + x8r7ze + ' is not match the current start tagName:' + kht05['tagName']);
          } else ex8nzw['push'](kht05);owdcsj++;break;case '?':
          mfht0q && ivtbm(buv19g), owdcsj = fnjswc(j6sod, buv19g, nxjd);break;case '!':
          mfht0q && ivtbm(buv19g), owdcsj = fibfh(j6sod, buv19g, nxjd, $p7y3a);break;default:
          mfht0q && ivtbm(buv19g);var mh0tif = new fr8$z73(),
              _k50hq = ex8nzw[ex8nzw['length'] - 0x1]['currentNSMap'],
              owdcsj = fqmht(j6sod, buv19g, mh0tif, _k50hq, $378rz, $p7y3a),
              hf50qt = mh0tif['length'];if (!mh0tif['closed'] && fk5hqt0(j6sod, owdcsj, mh0tif['tagName'], sznxw) && (mh0tif['closed'] = !0x0, jdc62['nbsp'] || $p7y3a['warning']('unclosed xml attribute')), mfht0q && hf50qt) {
            for (var we8nx = fthi0m(mfht0q, {}), imf0t = 0x0; hf50qt > imf0t; imf0t++) {
              var fqmt = mh0tif[imf0t];ivtbm(fqmt['offset']), fqmt['locator'] = fthi0m(mfht0q, {});
            }nxjd['locator'] = we8nx, fo624_(mh0tif, nxjd, _k50hq) && ex8nzw['push'](mh0tif), nxjd['locator'] = mfht0q;
          } else fo624_(mh0tif, nxjd, _k50hq) && ex8nzw['push'](mh0tif);'http://www.w3.org/1999/xhtml' !== mh0tif['uri'] || mh0tif['closed'] ? owdcsj++ : owdcsj = fwesn(j6sod, owdcsj, mh0tif['tagName'], $378rz, nxjd);}
    } catch (jd2o6c) {
      $p7y3a['error']('element parse error: ' + jd2o6c), owdcsj = -0x1;
    }owdcsj > q0_hk ? q0_hk = owdcsj : kh5_0q(Math['max'](buv19g, q0_hk) + 0x1);
  }
}function fthi0m(enwzsx, _k0qh) {
  return _k0qh['lineNumber'] = enwzsx['lineNumber'], _k0qh['columnNumber'] = enwzsx['columnNumber'], _k0qh;
}function fqmht(xneds, e8zr$7, ez7$8, o_42k, $8z7re, fh0qt5) {
  for (var cjwd, bifu, bmfht = ++e8zr$7, vb1ui = fzr873$;;) {
    var er78zx = xneds['charAt'](bmfht);switch (er78zx) {case '=':
        if (vb1ui === fq0kh5_) cjwd = xneds['slice'](e8zr$7, bmfht), vb1ui = fenrx8;else {
          if (vb1ui !== fdswjx) throw new Error('attribute equal must after attrName');vb1ui = fenrx8;
        }break;case '\x27':case '\x22':
        if (vb1ui === fenrx8 || vb1ui === fq0kh5_) {
          if (vb1ui === fq0kh5_ && (fh0qt5['warning']('attribute value must after "="'), cjwd = xneds['slice'](e8zr$7, bmfht)), e8zr$7 = bmfht + 0x1, bmfht = xneds['indexOf'](er78zx, e8zr$7), !(bmfht > 0x0)) throw new Error('attribute value no end \'' + er78zx + '\' match');bifu = xneds['slice'](e8zr$7, bmfht)['replace'](/&#?\w+;/g, $8z7re), ez7$8['add'](cjwd, bifu, e8zr$7 - 0x1), vb1ui = ft50kq;
        } else {
          if (vb1ui != f_564) throw new Error('attribute value must after "="');bifu = xneds['slice'](e8zr$7, bmfht)['replace'](/&#?\w+;/g, $8z7re), ez7$8['add'](cjwd, bifu, e8zr$7), fh0qt5['warning']('attribute "' + cjwd + '" missed start quot(' + er78zx + ')!!'), e8zr$7 = bmfht + 0x1, vb1ui = ft50kq;
        }break;case '/':
        switch (vb1ui) {case fzr873$:
            ez7$8['setTagName'](xneds['slice'](e8zr$7, bmfht));case ft50kq:case fznxes:case fdcswj:
            vb1ui = fdcswj, ez7$8['closed'] = !0x0;case f_564:case fq0kh5_:case fdswjx:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return fh0qt5['error']('unexpected end of input'), vb1ui == fzr873$ && ez7$8['setTagName'](xneds['slice'](e8zr$7, bmfht)), bmfht;case '>':
        switch (vb1ui) {case fzr873$:
            ez7$8['setTagName'](xneds['slice'](e8zr$7, bmfht));case ft50kq:case fznxes:case fdcswj:
            break;case f_564:case fq0kh5_:
            bifu = xneds['slice'](e8zr$7, bmfht), '/' === bifu['slice'](-0x1) && (ez7$8['closed'] = !0x0, bifu = bifu['slice'](0x0, -0x1));case fdswjx:
            vb1ui === fdswjx && (bifu = cjwd), vb1ui == f_564 ? (fh0qt5['warning']('attribute "' + bifu + '" missed quot(")!!'), ez7$8['add'](cjwd, bifu['replace'](/&#?\w+;/g, $8z7re), e8zr$7)) : ('http://www.w3.org/1999/xhtml' === o_42k[''] && bifu['match'](/^(?:disabled|checked|selected)$/i) || fh0qt5['warning']('attribute "' + bifu + '" missed value!! "' + bifu + '" instead!!'), ez7$8['add'](bifu, bifu, e8zr$7));break;case fenrx8:
            throw new Error('attribute value missed!!');}return bmfht;case '\u0080':
        er78zx = '\x20';default:
        if ('\x20' >= er78zx) switch (vb1ui) {case fzr873$:
            ez7$8['setTagName'](xneds['slice'](e8zr$7, bmfht)), vb1ui = fznxes;break;case fq0kh5_:
            cjwd = xneds['slice'](e8zr$7, bmfht), vb1ui = fdswjx;break;case f_564:
            var bifu = xneds['slice'](e8zr$7, bmfht)['replace'](/&#?\w+;/g, $8z7re);fh0qt5['warning']('attribute "' + bifu + '" missed quot(")!!'), ez7$8['add'](cjwd, bifu, e8zr$7);case ft50kq:
            vb1ui = fznxes;} else switch (vb1ui) {case fdswjx:
            {
              ez7$8['tagName'];
            }'http://www.w3.org/1999/xhtml' === o_42k[''] && cjwd['match'](/^(?:disabled|checked|selected)$/i) || fh0qt5['warning']('attribute "' + cjwd + '" missed value!! "' + cjwd + '" instead2!!'), ez7$8['add'](cjwd, cjwd, e8zr$7), e8zr$7 = bmfht, vb1ui = fq0kh5_;break;case ft50kq:
            fh0qt5['warning']('attribute space is required"' + cjwd + '\x22!!');case fznxes:
            vb1ui = fq0kh5_, e8zr$7 = bmfht;break;case fenrx8:
            vb1ui = f_564, e8zr$7 = bmfht;break;case fdcswj:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bmfht++;
  }
}function fo624_(sdcwjn, k2_6o, sndw) {
  for (var dos6cj = sdcwjn['tagName'], cdwjn = null, kh0_5 = sdcwjn['length']; kh0_5--;) {
    var e$r78 = sdcwjn[kh0_5],
        c2oj64 = e$r78['qName'],
        a$yp37 = e$r78['value'],
        bfmtv = c2oj64['indexOf'](':');if (bfmtv > 0x0) var vfbmi = e$r78['prefix'] = c2oj64['slice'](0x0, bfmtv),
        xwz8ne = c2oj64['slice'](bfmtv + 0x1),
        $pay73 = 'xmlns' === vfbmi && xwz8ne;else xwz8ne = c2oj64, vfbmi = null, $pay73 = 'xmlns' === c2oj64 && '';e$r78['localName'] = xwz8ne, $pay73 !== !0x1 && (null == cdwjn && (cdwjn = {}, ff0tqh(sndw, sndw = {})), sndw[$pay73] = cdwjn[$pay73] = a$yp37, e$r78['uri'] = 'http://www.w3.org/2000/xmlns/', k2_6o['startPrefixMapping']($pay73, a$yp37));
  }for (var kh0_5 = sdcwjn['length']; kh0_5--;) {
    e$r78 = sdcwjn[kh0_5];var vfbmi = e$r78['prefix'];vfbmi && ('xml' === vfbmi && (e$r78['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== vfbmi && (e$r78['uri'] = sndw[vfbmi || '']));
  }var bfmtv = dos6cj['indexOf'](':');bfmtv > 0x0 ? (vfbmi = sdcwjn['prefix'] = dos6cj['slice'](0x0, bfmtv), xwz8ne = sdcwjn['localName'] = dos6cj['slice'](bfmtv + 0x1)) : (vfbmi = null, xwz8ne = sdcwjn['localName'] = dos6cj);var ifubv = sdcwjn['uri'] = sndw[vfbmi || ''];if (k2_6o['startElement'](ifubv, xwz8ne, dos6cj, sdcwjn), !sdcwjn['closed']) return sdcwjn['currentNSMap'] = sndw, sdcwjn['localNSMap'] = cdwjn, !0x0;if (k2_6o['endElement'](ifubv, xwz8ne, dos6cj), cdwjn) {
    for (vfbmi in cdwjn) k2_6o['endPrefixMapping'](vfbmi);
  }
}function fwesn(nrexz8, nw8xz, m1uiv, ernz8, nxjdsw) {
  if (/^(?:script|textarea)$/i['test'](m1uiv)) {
    var djs6o = nrexz8['indexOf']('</' + m1uiv + '>', nw8xz),
        fivt = nrexz8['substring'](nw8xz + 0x1, djs6o);if (/[&<]/['test'](fivt)) return (/^script$/i['test'](m1uiv) ? (nxjdsw['characters'](fivt, 0x0, fivt['length']), djs6o) : (fivt = fivt['replace'](/&#?\w+;/g, ernz8), nxjdsw['characters'](fivt, 0x0, fivt['length']), djs6o)
    );
  }return nw8xz + 0x1;
}function fk5hqt0(mfbvit, mh, ap, y$3pa7) {
  var p7y = y$3pa7[ap];return null == p7y && (p7y = mfbvit['lastIndexOf']('</' + ap + '>'), mh > p7y && (p7y = mfbvit['lastIndexOf']('</' + ap)), y$3pa7[ap] = p7y), mh > p7y;
}function ff0tqh(wdojc, dsncjw) {
  for (var erz7$8 in wdojc) dsncjw[erz7$8] = wdojc[erz7$8];
}function fibfh(qkht05, wjcdns, oc246, umb1vi) {
  var do6c2j = qkht05['charAt'](wjcdns + 0x2);switch (do6c2j) {case '-':
      if ('-' === qkht05['charAt'](wjcdns + 0x3)) {
        var a$73py = qkht05['indexOf']('-->', wjcdns + 0x4);return a$73py > wjcdns ? (oc246['comment'](qkht05, wjcdns + 0x4, a$73py - wjcdns - 0x4), a$73py + 0x3) : (umb1vi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == qkht05['substr'](wjcdns + 0x3, 0x6)) {
        var a$73py = qkht05['indexOf'](']]>', wjcdns + 0x9);return oc246['startCDATA'](), oc246['characters'](qkht05, wjcdns + 0x9, a$73py - wjcdns - 0x9), oc246['endCDATA'](), a$73py + 0x3;
      }var ry3a$7 = fdco2j(qkht05, wjcdns),
          ibhtm = ry3a$7['length'];if (ibhtm > 0x1 && /!doctype/i['test'](ry3a$7[0x0][0x0])) {
        var d2oc6j = ry3a$7[0x1][0x0],
            bfumv = ibhtm > 0x3 && /^public$/i['test'](ry3a$7[0x2][0x0]) && ry3a$7[0x3][0x0],
            ub1iv = ibhtm > 0x4 && ry3a$7[0x4][0x0],
            v1miub = ry3a$7[ibhtm - 0x1];return oc246['startDTD'](d2oc6j, bfumv && bfumv['replace'](/^(['"])(.*?)\1$/, '$2'), ub1iv && ub1iv['replace'](/^(['"])(.*?)\1$/, '$2')), oc246['endDTD'](), v1miub['index'] + v1miub[0x0]['length'];
      }}return -0x1;
}function fnjswc(m0tfqh, k50q_h, bitmhf) {
  var wodsjc = m0tfqh['indexOf']('?>', k50q_h);if (wodsjc) {
    var $8e7rz = m0tfqh['substring'](k50q_h, wodsjc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if ($8e7rz) {
      {
        $8e7rz[0x0]['length'];
      }return bitmhf['processingInstruction']($8e7rz[0x1], $8e7rz[0x2]), wodsjc + 0x2;
    }return -0x1;
  }return -0x1;
}function fr8$z73() {}function fq0hft(cwdnj, tihf0m) {
  return cwdnj['__proto__'] = tihf0m, cwdnj;
}function fdco2j(ivb1um, k64) {
  var sdjcw,
      ithbfm = [],
      qh5t0k = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (qh5t0k['lastIndex'] = k64, qh5t0k['exec'](ivb1um); sdjcw = qh5t0k['exec'](ivb1um);) if (ithbfm['push'](sdjcw), sdjcw[0x1]) return ithbfm;
}var f_2q4k = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fi1b9uv = new RegExp('[\\-\\.0-9' + f_2q4k['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fu9vg1b = new RegExp('^' + f_2q4k['source'] + fi1b9uv['source'] + '*(?::' + f_2q4k['source'] + fi1b9uv['source'] + '*)?$'),
    fzr873$ = 0x0,
    fq0kh5_ = 0x1,
    fdswjx = 0x2,
    fenrx8 = 0x3,
    f_564 = 0x4,
    ft50kq = 0x5,
    fznxes = 0x6,
    fdcswj = 0x7;ffbmui['prototype'] = { 'parse': function (edsnw, t5fhq, d6oc) {
    var ez78$ = this['domBuilder'];ez78$['startDocument'](), ff0tqh(t5fhq, t5fhq = {}), fnjxsw(edsnw, t5fhq, d6oc, ez78$, this['errorHandler']), ez78$['endDocument']();
  } }, fr8$z73['prototype'] = { 'setTagName': function (k054q) {
    if (!fu9vg1b['test'](k054q)) throw new Error('invalid tagName:' + k054q);this['tagName'] = k054q;
  }, 'add': function ($y7ar3, c4o2_6, y$73ra) {
    if (!fu9vg1b['test']($y7ar3)) throw new Error('invalid attribute:' + $y7ar3);this[this['length']++] = { 'qName': $y7ar3, 'value': c4o2_6, 'offset': y$73ra };
  }, 'length': 0x0, 'getLocalName': function (r783y$) {
    return this[r783y$]['localName'];
  }, 'getLocator': function (z87$re) {
    return this[z87$re]['locator'];
  }, 'getQName': function (_h05kq) {
    return this[_h05kq]['qName'];
  }, 'getURI': function (newdxs) {
    return this[newdxs]['uri'];
  }, 'getValue': function (kt50) {
    return this[kt50]['value'];
  } }, fq0hft({}, fq0hft['prototype']) instanceof fq0hft || (fq0hft = function (zewsx, qh5_) {
  function jd() {}jd['prototype'] = qh5_, jd = new jd();for (qh5_ in zewsx) jd[qh5_] = zewsx[qh5_];return jd;
}), exports['XMLReader'] = ffbmui;