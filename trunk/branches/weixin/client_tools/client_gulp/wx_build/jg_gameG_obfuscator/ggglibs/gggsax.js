var m = wx.$g;
function gh1iakx() {}function gbftp_0(svq7cg, qsg, otz43, bt0fp_, qlg) {
  function _ft034(akw1) {
    if (akw1 > 0xffff) {
      akw1 -= 0x10000;var i0b5pa = 0xd800 + (akw1 >> 0xa),
          j6$mur = 0xdc00 + (0x3ff & akw1);return String['fromCharCode'](i0b5pa, j6$mur);
    }return String['fromCharCode'](akw1);
  }function $j2ru(v7weq) {
    var rz6j2 = v7weq['slice'](0x1, -0x1);return rz6j2 in otz43 ? otz43[rz6j2] : '#' === rz6j2['charAt'](0x0) ? _ft034(parseInt(rz6j2['substr'](0x1)['replace']('x', '0x'))) : (qlg['error']('entity not found:' + v7weq), v7weq);
  }function o3d4(g9cs8) {
    if (g9cs8 > r6zj2d) {
      var r$u6jm = svq7cg['substring'](r6zj2d, g9cs8)['replace'](/&#?\w+;/g, $j2ru);ekvy7w && yqwe7v(r6zj2d), bt0fp_['characters'](r$u6jm, 0x0, g9cs8 - r6zj2d), r6zj2d = g9cs8;
    }
  }function yqwe7v(s98cl, rzj62) {
    for (; s98cl >= ikxh1a && (rzj62 = ipabx['exec'](svq7cg));) d6z2o = rzj62['index'], ikxh1a = d6z2o + rzj62[0x0]['length'], ekvy7w['lineNumber']++;ekvy7w['columnNumber'] = s98cl - d6z2o + 0x1;
  }for (var d6z2o = 0x0, ikxh1a = 0x0, ipabx = /.*(?:\r\n?|\n)|.*$/g, ekvy7w = bt0fp_['locator'], _o34f = [{ 'currentNSMap': qsg }], x1hky = {}, r6zj2d = 0x0;;) {
    try {
      var hb5iax = svq7cg['indexOf']('<', r6zj2d);if (0x0 > hb5iax) {
        if (!svq7cg['substr'](r6zj2d)['match'](/^\s*$/)) {
          var sgv7c = bt0fp_['doc'],
              pf5_0b = sgv7c['createTextNode'](svq7cg['substr'](r6zj2d));sgv7c['appendChild'](pf5_0b), bt0fp_['currentElement'] = pf5_0b;
        }return;
      }switch (hb5iax > r6zj2d && o3d4(hb5iax), svq7cg['charAt'](hb5iax + 0x1)) {case '/':
          var ywvke = svq7cg['indexOf']('>', hb5iax + 0x3),
              bp5a = svq7cg['substring'](hb5iax + 0x2, ywvke),
              bxh5i = _o34f['pop']();0x0 > ywvke ? (bp5a = svq7cg['substring'](hb5iax + 0x2)['replace'](/[\s<].*/, ''), qlg['error']('end tag name: ' + bp5a + ' is not complete:' + bxh5i['tagName']), ywvke = hb5iax + 0x1 + bp5a['length']) : bp5a['match'](/\s</) && (bp5a = bp5a['replace'](/[\s<].*/, ''), qlg['error']('end tag name: ' + bp5a + ' maybe not complete'), ywvke = hb5iax + 0x1 + bp5a['length']);var zdor6 = bxh5i['localNSMap'],
              wkyxh1 = bxh5i['tagName'] == bp5a,
              vy1e = wkyxh1 || bxh5i['tagName'] && bxh5i['tagName']['toLowerCase']() == bp5a['toLowerCase']();if (vy1e) {
            if (bt0fp_['endElement'](bxh5i['uri'], bxh5i['localName'], bp5a), zdor6) {
              for (var o4zt in zdor6) bt0fp_['endPrefixMapping'](o4zt);
            }wkyxh1 || qlg['fatalError']('end tag name: ' + bp5a + ' is not match the current start tagName:' + bxh5i['tagName']);
          } else _o34f['push'](bxh5i);ywvke++;break;case '?':
          ekvy7w && yqwe7v(hb5iax), ywvke = gx1kwyh(svq7cg, hb5iax, bt0fp_);break;case '!':
          ekvy7w && yqwe7v(hb5iax), ywvke = gcqsgv7(svq7cg, hb5iax, bt0fp_, qlg);break;default:
          ekvy7w && yqwe7v(hb5iax);var ekw7yv = new gx5pabi(),
              i_b05p = _o34f[_o34f['length'] - 0x1]['currentNSMap'],
              ywvke = gy1vw(svq7cg, hb5iax, ekw7yv, i_b05p, $j2ru, qlg),
              yek7v = ekw7yv['length'];if (!ekw7yv['closed'] && gpb_tf0(svq7cg, ywvke, ekw7yv['tagName'], x1hky) && (ekw7yv['closed'] = !0x0, otz43['nbsp'] || qlg['warning']('unclosed xml attribute')), ekvy7w && yek7v) {
            for (var c7gvsq = gia0p5b(ekvy7w, {}), eywkv = 0x0; yek7v > eywkv; eywkv++) {
              var yv7gqe = ekw7yv[eywkv];yqwe7v(yv7gqe['offset']), yv7gqe['locator'] = gia0p5b(ekvy7w, {});
            }bt0fp_['locator'] = c7gvsq, gipb0(ekw7yv, bt0fp_, i_b05p) && _o34f['push'](ekw7yv), bt0fp_['locator'] = ekvy7w;
          } else gipb0(ekw7yv, bt0fp_, i_b05p) && _o34f['push'](ekw7yv);'http://www.w3.org/1999/xhtml' !== ekw7yv['uri'] || ekw7yv['closed'] ? ywvke++ : ywvke = gaib(svq7cg, ywvke, ekw7yv['tagName'], $j2ru, bt0fp_);}
    } catch (otf3_4) {
      qlg['error']('element parse error: ' + otf3_4), ywvke = -0x1;
    }ywvke > r6zj2d ? r6zj2d = ywvke : o3d4(Math['max'](hb5iax, r6zj2d) + 0x1);
  }
}function gia0p5b(hb5a, zr6d) {
  return zr6d['lineNumber'] = hb5a['lineNumber'], zr6d['columnNumber'] = hb5a['columnNumber'], zr6d;
}function gy1vw(xh1ykw, ai15, w7evqy, yhke1w, f_34o, z$j2r6) {
  for (var vqcg, h1kai, $mr6u = ++ai15, bxa5h = gfbpt0;;) {
    var cve7qg = xh1ykw['charAt']($mr6u);switch (cve7qg) {case '=':
        if (bxa5h === gyv1ek) vqcg = xh1ykw['slice'](ai15, $mr6u), bxa5h = gibp05a;else {
          if (bxa5h !== gyv7kwe) throw new Error('attribute equal must after attrName');bxa5h = gibp05a;
        }break;case '\x27':case '\x22':
        if (bxa5h === gibp05a || bxa5h === gyv1ek) {
          if (bxa5h === gyv1ek && (z$j2r6['warning']('attribute value must after "="'), vqcg = xh1ykw['slice'](ai15, $mr6u)), ai15 = $mr6u + 0x1, $mr6u = xh1ykw['indexOf'](cve7qg, ai15), !($mr6u > 0x0)) throw new Error('attribute value no end \'' + cve7qg + '\' match');h1kai = xh1ykw['slice'](ai15, $mr6u)['replace'](/&#?\w+;/g, f_34o), w7evqy['add'](vqcg, h1kai, ai15 - 0x1), bxa5h = goztd3;
        } else {
          if (bxa5h != ga1xhi5) throw new Error('attribute value must after "="');h1kai = xh1ykw['slice'](ai15, $mr6u)['replace'](/&#?\w+;/g, f_34o), w7evqy['add'](vqcg, h1kai, ai15), z$j2r6['warning']('attribute "' + vqcg + '" missed start quot(' + cve7qg + ')!!'), ai15 = $mr6u + 0x1, bxa5h = goztd3;
        }break;case '/':
        switch (bxa5h) {case gfbpt0:
            w7evqy['setTagName'](xh1ykw['slice'](ai15, $mr6u));case goztd3:case gab0pi5:case gc8s9gl:
            bxa5h = gc8s9gl, w7evqy['closed'] = !0x0;case ga1xhi5:case gyv1ek:case gyv7kwe:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return z$j2r6['error']('unexpected end of input'), bxa5h == gfbpt0 && w7evqy['setTagName'](xh1ykw['slice'](ai15, $mr6u)), $mr6u;case '>':
        switch (bxa5h) {case gfbpt0:
            w7evqy['setTagName'](xh1ykw['slice'](ai15, $mr6u));case goztd3:case gab0pi5:case gc8s9gl:
            break;case ga1xhi5:case gyv1ek:
            h1kai = xh1ykw['slice'](ai15, $mr6u), '/' === h1kai['slice'](-0x1) && (w7evqy['closed'] = !0x0, h1kai = h1kai['slice'](0x0, -0x1));case gyv7kwe:
            bxa5h === gyv7kwe && (h1kai = vqcg), bxa5h == ga1xhi5 ? (z$j2r6['warning']('attribute "' + h1kai + '" missed quot(")!!'), w7evqy['add'](vqcg, h1kai['replace'](/&#?\w+;/g, f_34o), ai15)) : ('http://www.w3.org/1999/xhtml' === yhke1w[''] && h1kai['match'](/^(?:disabled|checked|selected)$/i) || z$j2r6['warning']('attribute "' + h1kai + '" missed value!! "' + h1kai + '" instead!!'), w7evqy['add'](h1kai, h1kai, ai15));break;case gibp05a:
            throw new Error('attribute value missed!!');}return $mr6u;case '\u0080':
        cve7qg = '\x20';default:
        if ('\x20' >= cve7qg) switch (bxa5h) {case gfbpt0:
            w7evqy['setTagName'](xh1ykw['slice'](ai15, $mr6u)), bxa5h = gab0pi5;break;case gyv1ek:
            vqcg = xh1ykw['slice'](ai15, $mr6u), bxa5h = gyv7kwe;break;case ga1xhi5:
            var h1kai = xh1ykw['slice'](ai15, $mr6u)['replace'](/&#?\w+;/g, f_34o);z$j2r6['warning']('attribute "' + h1kai + '" missed quot(")!!'), w7evqy['add'](vqcg, h1kai, ai15);case goztd3:
            bxa5h = gab0pi5;} else switch (bxa5h) {case gyv7kwe:
            {
              w7evqy['tagName'];
            }'http://www.w3.org/1999/xhtml' === yhke1w[''] && vqcg['match'](/^(?:disabled|checked|selected)$/i) || z$j2r6['warning']('attribute "' + vqcg + '" missed value!! "' + vqcg + '" instead2!!'), w7evqy['add'](vqcg, vqcg, ai15), ai15 = $mr6u, bxa5h = gyv1ek;break;case goztd3:
            z$j2r6['warning']('attribute space is required"' + vqcg + '\x22!!');case gab0pi5:
            bxa5h = gyv1ek, ai15 = $mr6u;break;case gibp05a:
            bxa5h = ga1xhi5, ai15 = $mr6u;break;case gc8s9gl:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$mr6u++;
  }
}function gipb0(bpft_, ax51ih, dzj2) {
  for (var mrj$ = bpft_['tagName'], jz2$6r = null, e7qcv = bpft_['length']; e7qcv--;) {
    var dj26r = bpft_[e7qcv],
        p_ftb0 = dj26r['qName'],
        y1hx = dj26r['value'],
        h5ixa = p_ftb0['indexOf'](':');if (h5ixa > 0x0) var iap5bx = dj26r['prefix'] = p_ftb0['slice'](0x0, h5ixa),
        gscl = p_ftb0['slice'](h5ixa + 0x1),
        bi05ap = 'xmlns' === iap5bx && gscl;else gscl = p_ftb0, iap5bx = null, bi05ap = 'xmlns' === p_ftb0 && '';dj26r['localName'] = gscl, bi05ap !== !0x1 && (null == jz2$6r && (jz2$6r = {}, gf43_(dzj2, dzj2 = {})), dzj2[bi05ap] = jz2$6r[bi05ap] = y1hx, dj26r['uri'] = 'http://www.w3.org/2000/xmlns/', ax51ih['startPrefixMapping'](bi05ap, y1hx));
  }for (var e7qcv = bpft_['length']; e7qcv--;) {
    dj26r = bpft_[e7qcv];var iap5bx = dj26r['prefix'];iap5bx && ('xml' === iap5bx && (dj26r['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== iap5bx && (dj26r['uri'] = dzj2[iap5bx || '']));
  }var h5ixa = mrj$['indexOf'](':');h5ixa > 0x0 ? (iap5bx = bpft_['prefix'] = mrj$['slice'](0x0, h5ixa), gscl = bpft_['localName'] = mrj$['slice'](h5ixa + 0x1)) : (iap5bx = null, gscl = bpft_['localName'] = mrj$);var jur62$ = bpft_['uri'] = dzj2[iap5bx || ''];if (ax51ih['startElement'](jur62$, gscl, mrj$, bpft_), !bpft_['closed']) return bpft_['currentNSMap'] = dzj2, bpft_['localNSMap'] = jz2$6r, !0x0;if (ax51ih['endElement'](jur62$, gscl, mrj$), jz2$6r) {
    for (iap5bx in jz2$6r) ax51ih['endPrefixMapping'](iap5bx);
  }
}function gaib(y7evqw, qge7yv, vywek1, bap0, xw1hyk) {
  if (/^(?:script|textarea)$/i['test'](vywek1)) {
    var vkyew = y7evqw['indexOf']('</' + vywek1 + '>', qge7yv),
        qe7yvw = y7evqw['substring'](qge7yv + 0x1, vkyew);if (/[&<]/['test'](qe7yvw)) return (/^script$/i['test'](vywek1) ? (xw1hyk['characters'](qe7yvw, 0x0, qe7yvw['length']), vkyew) : (qe7yvw = qe7yvw['replace'](/&#?\w+;/g, bap0), xw1hyk['characters'](qe7yvw, 0x0, qe7yvw['length']), vkyew)
    );
  }return qge7yv + 0x1;
}function gpb_tf0(p5i0_, ft3d, hiakx, x5ipa) {
  var ix1hk = x5ipa[hiakx];return null == ix1hk && (ix1hk = p5i0_['lastIndexOf']('</' + hiakx + '>'), ft3d > ix1hk && (ix1hk = p5i0_['lastIndexOf']('</' + hiakx)), x5ipa[hiakx] = ix1hk), ft3d > ix1hk;
}function gf43_(kwyh1, vqcsg) {
  for (var g8qcs7 in kwyh1) vqcsg[g8qcs7] = kwyh1[g8qcs7];
}function gcqsgv7(t4f3_0, f_to34, x1awkh, z6$2rj) {
  var ih1x5a = t4f3_0['charAt'](f_to34 + 0x2);switch (ih1x5a) {case '-':
      if ('-' === t4f3_0['charAt'](f_to34 + 0x3)) {
        var zo6rd2 = t4f3_0['indexOf']('-->', f_to34 + 0x4);return zo6rd2 > f_to34 ? (x1awkh['comment'](t4f3_0, f_to34 + 0x4, zo6rd2 - f_to34 - 0x4), zo6rd2 + 0x3) : (z6$2rj['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == t4f3_0['substr'](f_to34 + 0x3, 0x6)) {
        var zo6rd2 = t4f3_0['indexOf'](']]>', f_to34 + 0x9);return x1awkh['startCDATA'](), x1awkh['characters'](t4f3_0, f_to34 + 0x9, zo6rd2 - f_to34 - 0x9), x1awkh['endCDATA'](), zo6rd2 + 0x3;
      }var qg78 = gkw1(t4f3_0, f_to34),
          vkwey1 = qg78['length'];if (vkwey1 > 0x1 && /!doctype/i['test'](qg78[0x0][0x0])) {
        var _ot = qg78[0x1][0x0],
            c9g8l = vkwey1 > 0x3 && /^public$/i['test'](qg78[0x2][0x0]) && qg78[0x3][0x0],
            xwa1k = vkwey1 > 0x4 && qg78[0x4][0x0],
            e1khyw = qg78[vkwey1 - 0x1];return x1awkh['startDTD'](_ot, c9g8l && c9g8l['replace'](/^(['"])(.*?)\1$/, '$2'), xwa1k && xwa1k['replace'](/^(['"])(.*?)\1$/, '$2')), x1awkh['endDTD'](), e1khyw['index'] + e1khyw[0x0]['length'];
      }}return -0x1;
}function gx1kwyh(ru2$6, h1ai5, od236z) {
  var qgy7ev = ru2$6['indexOf']('?>', h1ai5);if (qgy7ev) {
    var y7qeg = ru2$6['substring'](h1ai5, qgy7ev)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (y7qeg) {
      {
        y7qeg[0x0]['length'];
      }return od236z['processingInstruction'](y7qeg[0x1], y7qeg[0x2]), qgy7ev + 0x2;
    }return -0x1;
  }return -0x1;
}function gx5pabi() {}function gzod236(j62u, ve7ykw) {
  return j62u['__proto__'] = ve7ykw, j62u;
}function gkw1(hy1k, qcgls8) {
  var bp5ai,
      b5p0ai = [],
      ykev = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (ykev['lastIndex'] = qcgls8, ykev['exec'](hy1k); bp5ai = ykev['exec'](hy1k);) if (b5p0ai['push'](bp5ai), bp5ai[0x1]) return b5p0ai;
}var g_o4t3 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    gqc8ls = new RegExp('[\\-\\.0-9' + g_o4t3['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    gvyek7w = new RegExp('^' + g_o4t3['source'] + gqc8ls['source'] + '*(?::' + g_o4t3['source'] + gqc8ls['source'] + '*)?$'),
    gfbpt0 = 0x0,
    gyv1ek = 0x1,
    gyv7kwe = 0x2,
    gibp05a = 0x3,
    ga1xhi5 = 0x4,
    goztd3 = 0x5,
    gab0pi5 = 0x6,
    gc8s9gl = 0x7;gh1iakx['prototype'] = { 'parse': function (s89lg, p5_bf, iax1h5) {
    var $rm6 = this['domBuilder'];$rm6['startDocument'](), gf43_(p5_bf, p5_bf = {}), gbftp_0(s89lg, p5_bf, iax1h5, $rm6, this['errorHandler']), $rm6['endDocument']();
  } }, gx5pabi['prototype'] = { 'setTagName': function (xk1iah) {
    if (!gvyek7w['test'](xk1iah)) throw new Error('invalid tagName:' + xk1iah);this['tagName'] = xk1iah;
  }, 'add': function (e7qvc, l89cgs, cqe) {
    if (!gvyek7w['test'](e7qvc)) throw new Error('invalid attribute:' + e7qvc);this[this['length']++] = { 'qName': e7qvc, 'value': l89cgs, 'offset': cqe };
  }, 'length': 0x0, 'getLocalName': function (fp0b_) {
    return this[fp0b_]['localName'];
  }, 'getLocator': function (xywh1) {
    return this[xywh1]['locator'];
  }, 'getQName': function (gs87qc) {
    return this[gs87qc]['qName'];
  }, 'getURI': function (vc7qeg) {
    return this[vc7qeg]['uri'];
  }, 'getValue': function (xawh1) {
    return this[xawh1]['value'];
  } }, gzod236({}, gzod236['prototype']) instanceof gzod236 || (gzod236 = function (f4_p, df4ot) {
  function xw1yk() {}xw1yk['prototype'] = df4ot, xw1yk = new xw1yk();for (df4ot in f4_p) xw1yk[df4ot] = f4_p[df4ot];return xw1yk;
}), exports['XMLReader'] = gh1iakx;