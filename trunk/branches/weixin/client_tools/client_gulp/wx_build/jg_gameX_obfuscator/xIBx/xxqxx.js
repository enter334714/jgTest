var u = wx.$x;
function xixzoms() {}function xxoim4(ljncf9, dsi, tw3k, c7jl9f, hpa0b) {
  function xzoims(wkbe) {
    if (wkbe > 0xffff) {
      wkbe -= 0x10000;var jcunf = 0xd800 + (wkbe >> 0xa),
          _pqahr = 0xdc00 + (0x3ff & wkbe);return String['fromCharCode'](jcunf, _pqahr);
    }return String['fromCharCode'](wkbe);
  }function mzxos5(qphr_) {
    var udi4gv = qphr_['slice'](0x1, -0x1);return udi4gv in tw3k ? tw3k[udi4gv] : '#' === udi4gv['charAt'](0x0) ? xzoims(parseInt(udi4gv['substr'](0x1)['replace']('x', '0x'))) : (hpa0b['error']('entity not found:' + qphr_), qphr_);
  }function jcn9fu(fyl98) {
    if (fyl98 > dvnj) {
      var fj9lcn = ljncf9['substring'](dvnj, fyl98)['replace'](/&#?\w+;/g, mzxos5);kbhwe && b0k31w(dvnj), c7jl9f['characters'](fj9lcn, 0x0, fyl98 - dvnj), dvnj = fyl98;
    }
  }function b0k31w(sximg4, b0wkhe) {
    for (; sximg4 >= ahqep_ && (b0wkhe = hkbw0['exec'](ljncf9));) oxm5sz = b0wkhe['index'], ahqep_ = oxm5sz + b0wkhe[0x0]['length'], kbhwe['lineNumber']++;kbhwe['columnNumber'] = sximg4 - oxm5sz + 0x1;
  }for (var oxm5sz = 0x0, ahqep_ = 0x0, hkbw0 = /.*(?:\r\n?|\n)|.*$/g, kbhwe = c7jl9f['locator'], gmx4i = [{ 'currentNSMap': dsi }], gs = {}, dvnj = 0x0;;) {
    try {
      var hekp0 = ljncf9['indexOf']('<', dvnj);if (0x0 > hekp0) {
        if (!ljncf9['substr'](dvnj)['match'](/^\s*$/)) {
          var l97c8f = c7jl9f['doc'],
              aeqph_ = l97c8f['createTextNode'](ljncf9['substr'](dvnj));l97c8f['appendChild'](aeqph_), c7jl9f['currentElement'] = aeqph_;
        }return;
      }switch (hekp0 > dvnj && jcn9fu(hekp0), ljncf9['charAt'](hekp0 + 0x1)) {case '/':
          var k3w6t1 = ljncf9['indexOf']('>', hekp0 + 0x3),
              p0kh = ljncf9['substring'](hekp0 + 0x2, k3w6t1),
              gu4dn = gmx4i['pop']();0x0 > k3w6t1 ? (p0kh = ljncf9['substring'](hekp0 + 0x2)['replace'](/[\s<].*/, ''), hpa0b['error']('end tag name: ' + p0kh + ' is not complete:' + gu4dn['tagName']), k3w6t1 = hekp0 + 0x1 + p0kh['length']) : p0kh['match'](/\s</) && (p0kh = p0kh['replace'](/[\s<].*/, ''), hpa0b['error']('end tag name: ' + p0kh + ' maybe not complete'), k3w6t1 = hekp0 + 0x1 + p0kh['length']);var djg = gu4dn['localNSMap'],
              imoxs = gu4dn['tagName'] == p0kh,
              njudg = imoxs || gu4dn['tagName'] && gu4dn['tagName']['toLowerCase']() == p0kh['toLowerCase']();if (njudg) {
            if (c7jl9f['endElement'](gu4dn['uri'], gu4dn['localName'], p0kh), djg) {
              for (var jcvund in djg) c7jl9f['endPrefixMapping'](jcvund);
            }imoxs || hpa0b['fatalError']('end tag name: ' + p0kh + ' is not match the current start tagName:' + gu4dn['tagName']);
          } else gmx4i['push'](gu4dn);k3w6t1++;break;case '?':
          kbhwe && b0k31w(hekp0), k3w6t1 = xt16532(ljncf9, hekp0, c7jl9f);break;case '!':
          kbhwe && b0k31w(hekp0), k3w6t1 = xmszo25(ljncf9, hekp0, c7jl9f, hpa0b);break;default:
          kbhwe && b0k31w(hekp0);var xig4dv = new xdnjcuv(),
              a0pheb = gmx4i[gmx4i['length'] - 0x1]['currentNSMap'],
              k3w6t1 = xdun4(ljncf9, hekp0, xig4dv, a0pheb, mzxos5, hpa0b),
              ixg4m = xig4dv['length'];if (!xig4dv['closed'] && xcjfln9(ljncf9, k3w6t1, xig4dv['tagName'], gs) && (xig4dv['closed'] = !0x0, tw3k['nbsp'] || hpa0b['warning']('unclosed xml attribute')), kbhwe && ixg4m) {
            for (var dugnjv = xvcfujn(kbhwe, {}), szmo5 = 0x0; ixg4m > szmo5; szmo5++) {
              var moz652 = xig4dv[szmo5];b0k31w(moz652['offset']), moz652['locator'] = xvcfujn(kbhwe, {});
            }c7jl9f['locator'] = dugnjv, xzo526(xig4dv, c7jl9f, a0pheb) && gmx4i['push'](xig4dv), c7jl9f['locator'] = kbhwe;
          } else xzo526(xig4dv, c7jl9f, a0pheb) && gmx4i['push'](xig4dv);'http://www.w3.org/1999/xhtml' !== xig4dv['uri'] || xig4dv['closed'] ? k3w6t1++ : k3w6t1 = xtw6(ljncf9, k3w6t1, xig4dv['tagName'], mzxos5, c7jl9f);}
    } catch (hp0aqe) {
      hpa0b['error']('element parse error: ' + hp0aqe), k3w6t1 = -0x1;
    }k3w6t1 > dvnj ? dvnj = k3w6t1 : jcn9fu(Math['max'](hekp0, dvnj) + 0x1);
  }
}function xvcfujn(dcujv, s2zo5m) {
  return s2zo5m['lineNumber'] = dcujv['lineNumber'], s2zo5m['columnNumber'] = dcujv['columnNumber'], s2zo5m;
}function xdun4(ixvgd, paqhr_, w6kt1, _epah, gmi4, iv4) {
  for (var phr_qa, i4gsm, bh0kpe = ++paqhr_, n9jfu = xqph0ea;;) {
    var guvjn = ixvgd['charAt'](bh0kpe);switch (guvjn) {case '=':
        if (n9jfu === xsxmi4) phr_qa = ixvgd['slice'](paqhr_, bh0kpe), n9jfu = xnducv;else {
          if (n9jfu !== xm6z5) throw new Error('attribute equal must after attrName');n9jfu = xnducv;
        }break;case '\x27':case '\x22':
        if (n9jfu === xnducv || n9jfu === xsxmi4) {
          if (n9jfu === xsxmi4 && (iv4['warning']('attribute value must after "="'), phr_qa = ixvgd['slice'](paqhr_, bh0kpe)), paqhr_ = bh0kpe + 0x1, bh0kpe = ixvgd['indexOf'](guvjn, paqhr_), !(bh0kpe > 0x0)) throw new Error('attribute value no end \'' + guvjn + '\' match');i4gsm = ixvgd['slice'](paqhr_, bh0kpe)['replace'](/&#?\w+;/g, gmi4), w6kt1['add'](phr_qa, i4gsm, paqhr_ - 0x1), n9jfu = xxzism;
        } else {
          if (n9jfu != xdgvui4) throw new Error('attribute value must after "="');i4gsm = ixvgd['slice'](paqhr_, bh0kpe)['replace'](/&#?\w+;/g, gmi4), w6kt1['add'](phr_qa, i4gsm, paqhr_), iv4['warning']('attribute "' + phr_qa + '" missed start quot(' + guvjn + ')!!'), paqhr_ = bh0kpe + 0x1, n9jfu = xxzism;
        }break;case '/':
        switch (n9jfu) {case xqph0ea:
            w6kt1['setTagName'](ixvgd['slice'](paqhr_, bh0kpe));case xxzism:case xxdsig4:case x_aqr:
            n9jfu = x_aqr, w6kt1['closed'] = !0x0;case xdgvui4:case xsxmi4:case xm6z5:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return iv4['error']('unexpected end of input'), n9jfu == xqph0ea && w6kt1['setTagName'](ixvgd['slice'](paqhr_, bh0kpe)), bh0kpe;case '>':
        switch (n9jfu) {case xqph0ea:
            w6kt1['setTagName'](ixvgd['slice'](paqhr_, bh0kpe));case xxzism:case xxdsig4:case x_aqr:
            break;case xdgvui4:case xsxmi4:
            i4gsm = ixvgd['slice'](paqhr_, bh0kpe), '/' === i4gsm['slice'](-0x1) && (w6kt1['closed'] = !0x0, i4gsm = i4gsm['slice'](0x0, -0x1));case xm6z5:
            n9jfu === xm6z5 && (i4gsm = phr_qa), n9jfu == xdgvui4 ? (iv4['warning']('attribute "' + i4gsm + '" missed quot(")!!'), w6kt1['add'](phr_qa, i4gsm['replace'](/&#?\w+;/g, gmi4), paqhr_)) : ('http://www.w3.org/1999/xhtml' === _epah[''] && i4gsm['match'](/^(?:disabled|checked|selected)$/i) || iv4['warning']('attribute "' + i4gsm + '" missed value!! "' + i4gsm + '" instead!!'), w6kt1['add'](i4gsm, i4gsm, paqhr_));break;case xnducv:
            throw new Error('attribute value missed!!');}return bh0kpe;case '\u0080':
        guvjn = '\x20';default:
        if ('\x20' >= guvjn) switch (n9jfu) {case xqph0ea:
            w6kt1['setTagName'](ixvgd['slice'](paqhr_, bh0kpe)), n9jfu = xxdsig4;break;case xsxmi4:
            phr_qa = ixvgd['slice'](paqhr_, bh0kpe), n9jfu = xm6z5;break;case xdgvui4:
            var i4gsm = ixvgd['slice'](paqhr_, bh0kpe)['replace'](/&#?\w+;/g, gmi4);iv4['warning']('attribute "' + i4gsm + '" missed quot(")!!'), w6kt1['add'](phr_qa, i4gsm, paqhr_);case xxzism:
            n9jfu = xxdsig4;} else switch (n9jfu) {case xm6z5:
            {
              w6kt1['tagName'];
            }'http://www.w3.org/1999/xhtml' === _epah[''] && phr_qa['match'](/^(?:disabled|checked|selected)$/i) || iv4['warning']('attribute "' + phr_qa + '" missed value!! "' + phr_qa + '" instead2!!'), w6kt1['add'](phr_qa, phr_qa, paqhr_), paqhr_ = bh0kpe, n9jfu = xsxmi4;break;case xxzism:
            iv4['warning']('attribute space is required"' + phr_qa + '\x22!!');case xxdsig4:
            n9jfu = xsxmi4, paqhr_ = bh0kpe;break;case xnducv:
            n9jfu = xdgvui4, paqhr_ = bh0kpe;break;case x_aqr:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}bh0kpe++;
  }
}function xzo526(njl9, w1bk0, xzoms) {
  for (var wb1ke0 = njl9['tagName'], lcf78 = null, dugv = njl9['length']; dugv--;) {
    var f9ly78 = njl9[dugv],
        jlfn9 = f9ly78['qName'],
        vgdui4 = f9ly78['value'],
        xs4moi = jlfn9['indexOf'](':');if (xs4moi > 0x0) var l9cj7f = f9ly78['prefix'] = jlfn9['slice'](0x0, xs4moi),
        apbhe = jlfn9['slice'](xs4moi + 0x1),
        tz635 = 'xmlns' === l9cj7f && apbhe;else apbhe = jlfn9, l9cj7f = null, tz635 = 'xmlns' === jlfn9 && '';f9ly78['localName'] = apbhe, tz635 !== !0x1 && (null == lcf78 && (lcf78 = {}, xcvdnu(xzoms, xzoms = {})), xzoms[tz635] = lcf78[tz635] = vgdui4, f9ly78['uri'] = 'http://www.w3.org/2000/xmlns/', w1bk0['startPrefixMapping'](tz635, vgdui4));
  }for (var dugv = njl9['length']; dugv--;) {
    f9ly78 = njl9[dugv];var l9cj7f = f9ly78['prefix'];l9cj7f && ('xml' === l9cj7f && (f9ly78['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== l9cj7f && (f9ly78['uri'] = xzoms[l9cj7f || '']));
  }var xs4moi = wb1ke0['indexOf'](':');xs4moi > 0x0 ? (l9cj7f = njl9['prefix'] = wb1ke0['slice'](0x0, xs4moi), apbhe = njl9['localName'] = wb1ke0['slice'](xs4moi + 0x1)) : (l9cj7f = null, apbhe = njl9['localName'] = wb1ke0);var jlfc = njl9['uri'] = xzoms[l9cj7f || ''];if (w1bk0['startElement'](jlfc, apbhe, wb1ke0, njl9), !njl9['closed']) return njl9['currentNSMap'] = xzoms, njl9['localNSMap'] = lcf78, !0x0;if (w1bk0['endElement'](jlfc, apbhe, wb1ke0), lcf78) {
    for (l9cj7f in lcf78) w1bk0['endPrefixMapping'](l9cj7f);
  }
}function xtw6(vducnj, pqah_r, qhpr_a, cvnjdu, pa_qhr) {
  if (/^(?:script|textarea)$/i['test'](qhpr_a)) {
    var l87y$9 = vducnj['indexOf']('</' + qhpr_a + '>', pqah_r),
        xz5os = vducnj['substring'](pqah_r + 0x1, l87y$9);if (/[&<]/['test'](xz5os)) return (/^script$/i['test'](qhpr_a) ? (pa_qhr['characters'](xz5os, 0x0, xz5os['length']), l87y$9) : (xz5os = xz5os['replace'](/&#?\w+;/g, cvnjdu), pa_qhr['characters'](xz5os, 0x0, xz5os['length']), l87y$9)
    );
  }return pqah_r + 0x1;
}function xcjfln9($97l, gi4smx, l879y$, sdxig4) {
  var gxid4 = sdxig4[l879y$];return null == gxid4 && (gxid4 = $97l['lastIndexOf']('</' + l879y$ + '>'), gi4smx > gxid4 && (gxid4 = $97l['lastIndexOf']('</' + l879y$)), sdxig4[l879y$] = gxid4), gi4smx > gxid4;
}function xcvdnu(jufc, xmszoi) {
  for (var sx4mo in jufc) xmszoi[sx4mo] = jufc[sx4mo];
}function xmszo25(os4xim, ahpq0e, vg4ui, dxv4gi) {
  var jnf9c = os4xim['charAt'](ahpq0e + 0x2);switch (jnf9c) {case '-':
      if ('-' === os4xim['charAt'](ahpq0e + 0x3)) {
        var jgudnv = os4xim['indexOf']('-->', ahpq0e + 0x4);return jgudnv > ahpq0e ? (vg4ui['comment'](os4xim, ahpq0e + 0x4, jgudnv - ahpq0e - 0x4), jgudnv + 0x3) : (dxv4gi['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == os4xim['substr'](ahpq0e + 0x3, 0x6)) {
        var jgudnv = os4xim['indexOf'](']]>', ahpq0e + 0x9);return vg4ui['startCDATA'](), vg4ui['characters'](os4xim, ahpq0e + 0x9, jgudnv - ahpq0e - 0x9), vg4ui['endCDATA'](), jgudnv + 0x3;
      }var njlf = xhkpb0(os4xim, ahpq0e),
          cfu9jn = njlf['length'];if (cfu9jn > 0x1 && /!doctype/i['test'](njlf[0x0][0x0])) {
        var l87fc = njlf[0x1][0x0],
            m52oz = cfu9jn > 0x3 && /^public$/i['test'](njlf[0x2][0x0]) && njlf[0x3][0x0],
            m25s = cfu9jn > 0x4 && njlf[0x4][0x0],
            epah = njlf[cfu9jn - 0x1];return vg4ui['startDTD'](l87fc, m52oz && m52oz['replace'](/^(['"])(.*?)\1$/, '$2'), m25s && m25s['replace'](/^(['"])(.*?)\1$/, '$2')), vg4ui['endDTD'](), epah['index'] + epah[0x0]['length'];
      }}return -0x1;
}function xt16532(aephq, cfjun, nvguj) {
  var flc9nj = aephq['indexOf']('?>', cfjun);if (flc9nj) {
    var t1w632 = aephq['substring'](cfjun, flc9nj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (t1w632) {
      {
        t1w632[0x0]['length'];
      }return nvguj['processingInstruction'](t1w632[0x1], t1w632[0x2]), flc9nj + 0x2;
    }return -0x1;
  }return -0x1;
}function xdnjcuv() {}function xc87f9(whbke, dv4nu) {
  return whbke['__proto__'] = dv4nu, whbke;
}function xhkpb0(z6o2m, z5om) {
  var ngudj,
      oszx5 = [],
      wtb31k = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (wtb31k['lastIndex'] = z5om, wtb31k['exec'](z6o2m); ngudj = wtb31k['exec'](z6o2m);) if (oszx5['push'](ngudj), ngudj[0x1]) return oszx5;
}var xzxsoi = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xq_aeh = new RegExp('[\\-\\.0-9' + xzxsoi['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xo4msix = new RegExp('^' + xzxsoi['source'] + xq_aeh['source'] + '*(?::' + xzxsoi['source'] + xq_aeh['source'] + '*)?$'),
    xqph0ea = 0x0,
    xsxmi4 = 0x1,
    xm6z5 = 0x2,
    xnducv = 0x3,
    xdgvui4 = 0x4,
    xxzism = 0x5,
    xxdsig4 = 0x6,
    x_aqr = 0x7;xixzoms['prototype'] = { 'parse': function (m6zo5, di4vug, xgi4s) {
    var wk01eb = this['domBuilder'];wk01eb['startDocument'](), xcvdnu(di4vug, di4vug = {}), xxoim4(m6zo5, di4vug, xgi4s, wk01eb, this['errorHandler']), wk01eb['endDocument']();
  } }, xdnjcuv['prototype'] = { 'setTagName': function (os5xmz) {
    if (!xo4msix['test'](os5xmz)) throw new Error('invalid tagName:' + os5xmz);this['tagName'] = os5xmz;
  }, 'add': function (tw3162, a0hpeq, cfunvj) {
    if (!xo4msix['test'](tw3162)) throw new Error('invalid attribute:' + tw3162);this[this['length']++] = { 'qName': tw3162, 'value': a0hpeq, 'offset': cfunvj };
  }, 'length': 0x0, 'getLocalName': function (kw1t6) {
    return this[kw1t6]['localName'];
  }, 'getLocator': function (imoxzs) {
    return this[imoxzs]['locator'];
  }, 'getQName': function (idxsg) {
    return this[idxsg]['qName'];
  }, 'getURI': function (sgi4) {
    return this[sgi4]['uri'];
  }, 'getValue': function (s4idx) {
    return this[s4idx]['value'];
  } }, xc87f9({}, xc87f9['prototype']) instanceof xc87f9 || (xc87f9 = function (ea_qhp, c9unjf) {
  function dx4vig() {}dx4vig['prototype'] = c9unjf, dx4vig = new dx4vig();for (c9unjf in ea_qhp) dx4vig[c9unjf] = ea_qhp[c9unjf];return dx4vig;
}), exports['XMLReader'] = xixzoms;