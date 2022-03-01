var u = wx.$x;
function xebk0hp() {}function xkebph0(hepba, m4isox, k6t, t132w, ufcnjv) {
  function mix4g(cdvun) {
    if (cdvun > 0xffff) {
      cdvun -= 0x10000;var phar_q = 0xd800 + (cdvun >> 0xa),
          l79$y = 0xdc00 + (0x3ff & cdvun);return String['fromCharCode'](phar_q, l79$y);
    }return String['fromCharCode'](cdvun);
  }function w6kt31(kb3t1w) {
    var nlcj9f = kb3t1w['slice'](0x1, -0x1);return nlcj9f in k6t ? k6t[nlcj9f] : '#' === nlcj9f['charAt'](0x0) ? mix4g(parseInt(nlcj9f['substr'](0x1)['replace']('x', '0x'))) : (ufcnjv['error']('entity not found:' + kb3t1w), kb3t1w);
  }function c78f9l(moix4s) {
    if (moix4s > kt361w) {
      var miszox = hepba['substring'](kt361w, moix4s)['replace'](/&#?\w+;/g, w6kt31);l9c78f && o2z56(kt361w), t132w['characters'](miszox, 0x0, moix4s - kt361w), kt361w = moix4s;
    }
  }function o2z56(w1b0e, vg4xi) {
    for (; w1b0e >= cvndu && (vg4xi = xis4dg['exec'](hepba));) y87fl = vg4xi['index'], cvndu = y87fl + vg4xi[0x0]['length'], l9c78f['lineNumber']++;l9c78f['columnNumber'] = w1b0e - y87fl + 0x1;
  }for (var y87fl = 0x0, cvndu = 0x0, xis4dg = /.*(?:\r\n?|\n)|.*$/g, l9c78f = t132w['locator'], wkeb01 = [{ 'currentNSMap': m4isox }], e10wb = {}, kt361w = 0x0;;) {
    try {
      var ioxs = hepba['indexOf']('<', kt361w);if (0x0 > ioxs) {
        if (!hepba['substr'](kt361w)['match'](/^\s*$/)) {
          var fljcn9 = t132w['doc'],
              y789$ = fljcn9['createTextNode'](hepba['substr'](kt361w));fljcn9['appendChild'](y789$), t132w['currentElement'] = y789$;
        }return;
      }switch (ioxs > kt361w && c78f9l(ioxs), hepba['charAt'](ioxs + 0x1)) {case '/':
          var is4m = hepba['indexOf']('>', ioxs + 0x3),
              vgxdi4 = hepba['substring'](ioxs + 0x2, is4m),
              u9cjnf = wkeb01['pop']();0x0 > is4m ? (vgxdi4 = hepba['substring'](ioxs + 0x2)['replace'](/[\s<].*/, ''), ufcnjv['error']('end tag name: ' + vgxdi4 + ' is not complete:' + u9cjnf['tagName']), is4m = ioxs + 0x1 + vgxdi4['length']) : vgxdi4['match'](/\s</) && (vgxdi4 = vgxdi4['replace'](/[\s<].*/, ''), ufcnjv['error']('end tag name: ' + vgxdi4 + ' maybe not complete'), is4m = ioxs + 0x1 + vgxdi4['length']);var paq_he = u9cjnf['localNSMap'],
              l9$7y8 = u9cjnf['tagName'] == vgxdi4,
              k31t6w = l9$7y8 || u9cjnf['tagName'] && u9cjnf['tagName']['toLowerCase']() == vgxdi4['toLowerCase']();if (k31t6w) {
            if (t132w['endElement'](u9cjnf['uri'], u9cjnf['localName'], vgxdi4), paq_he) {
              for (var fnljc in paq_he) t132w['endPrefixMapping'](fnljc);
            }l9$7y8 || ufcnjv['fatalError']('end tag name: ' + vgxdi4 + ' is not match the current start tagName:' + u9cjnf['tagName']);
          } else wkeb01['push'](u9cjnf);is4m++;break;case '?':
          l9c78f && o2z56(ioxs), is4m = xktw3b(hepba, ioxs, t132w);break;case '!':
          l9c78f && o2z56(ioxs), is4m = xhb0k(hepba, ioxs, t132w, ufcnjv);break;default:
          l9c78f && o2z56(ioxs);var nudj = new xe_ahp(),
              qrp_ah = wkeb01[wkeb01['length'] - 0x1]['currentNSMap'],
              is4m = xf89lc(hepba, ioxs, nudj, qrp_ah, w6kt31, ufcnjv),
              $yl978 = nudj['length'];if (!nudj['closed'] && xdcunjv(hepba, is4m, nudj['tagName'], e10wb) && (nudj['closed'] = !0x0, k6t['nbsp'] || ufcnjv['warning']('unclosed xml attribute')), l9c78f && $yl978) {
            for (var b0hpk = xdvgnju(l9c78f, {}), bh0epa = 0x0; $yl978 > bh0epa; bh0epa++) {
              var zmo265 = nudj[bh0epa];o2z56(zmo265['offset']), zmo265['locator'] = xdvgnju(l9c78f, {});
            }t132w['locator'] = b0hpk, xzto25(nudj, t132w, qrp_ah) && wkeb01['push'](nudj), t132w['locator'] = l9c78f;
          } else xzto25(nudj, t132w, qrp_ah) && wkeb01['push'](nudj);'http://www.w3.org/1999/xhtml' !== nudj['uri'] || nudj['closed'] ? is4m++ : is4m = xcfjuv(hepba, is4m, nudj['tagName'], w6kt31, t132w);}
    } catch (nugdvj) {
      ufcnjv['error']('element parse error: ' + nugdvj), is4m = -0x1;
    }is4m > kt361w ? kt361w = is4m : c78f9l(Math['max'](ioxs, kt361w) + 0x1);
  }
}function xdvgnju(bhe0pa, vcndu) {
  return vcndu['lineNumber'] = bhe0pa['lineNumber'], vcndu['columnNumber'] = bhe0pa['columnNumber'], vcndu;
}function xf89lc(nvjcf, z6t2o5, mizo, e0bah, t651, wb0he) {
  for (var dvnguj, mz562, u4ngd = ++z6t2o5, k13tw = xnduvg;;) {
    var r_qpa = nvjcf['charAt'](u4ngd);switch (r_qpa) {case '=':
        if (k13tw === xj79fc) dvnguj = nvjcf['slice'](z6t2o5, u4ngd), k13tw = xozxim;else {
          if (k13tw !== xcvdj) throw new Error('attribute equal must after attrName');k13tw = xozxim;
        }break;case '\x27':case '\x22':
        if (k13tw === xozxim || k13tw === xj79fc) {
          if (k13tw === xj79fc && (wb0he['warning']('attribute value must after "="'), dvnguj = nvjcf['slice'](z6t2o5, u4ngd)), z6t2o5 = u4ngd + 0x1, u4ngd = nvjcf['indexOf'](r_qpa, z6t2o5), !(u4ngd > 0x0)) throw new Error('attribute value no end \'' + r_qpa + '\' match');mz562 = nvjcf['slice'](z6t2o5, u4ngd)['replace'](/&#?\w+;/g, t651), mizo['add'](dvnguj, mz562, z6t2o5 - 0x1), k13tw = xjvnud;
        } else {
          if (k13tw != x$7l89y) throw new Error('attribute value must after "="');mz562 = nvjcf['slice'](z6t2o5, u4ngd)['replace'](/&#?\w+;/g, t651), mizo['add'](dvnguj, mz562, z6t2o5), wb0he['warning']('attribute "' + dvnguj + '" missed start quot(' + r_qpa + ')!!'), z6t2o5 = u4ngd + 0x1, k13tw = xjvnud;
        }break;case '/':
        switch (k13tw) {case xnduvg:
            mizo['setTagName'](nvjcf['slice'](z6t2o5, u4ngd));case xjvnud:case xhr_p:case xl7$:
            k13tw = xl7$, mizo['closed'] = !0x0;case x$7l89y:case xj79fc:case xcvdj:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wb0he['error']('unexpected end of input'), k13tw == xnduvg && mizo['setTagName'](nvjcf['slice'](z6t2o5, u4ngd)), u4ngd;case '>':
        switch (k13tw) {case xnduvg:
            mizo['setTagName'](nvjcf['slice'](z6t2o5, u4ngd));case xjvnud:case xhr_p:case xl7$:
            break;case x$7l89y:case xj79fc:
            mz562 = nvjcf['slice'](z6t2o5, u4ngd), '/' === mz562['slice'](-0x1) && (mizo['closed'] = !0x0, mz562 = mz562['slice'](0x0, -0x1));case xcvdj:
            k13tw === xcvdj && (mz562 = dvnguj), k13tw == x$7l89y ? (wb0he['warning']('attribute "' + mz562 + '" missed quot(")!!'), mizo['add'](dvnguj, mz562['replace'](/&#?\w+;/g, t651), z6t2o5)) : ('http://www.w3.org/1999/xhtml' === e0bah[''] && mz562['match'](/^(?:disabled|checked|selected)$/i) || wb0he['warning']('attribute "' + mz562 + '" missed value!! "' + mz562 + '" instead!!'), mizo['add'](mz562, mz562, z6t2o5));break;case xozxim:
            throw new Error('attribute value missed!!');}return u4ngd;case '\u0080':
        r_qpa = '\x20';default:
        if ('\x20' >= r_qpa) switch (k13tw) {case xnduvg:
            mizo['setTagName'](nvjcf['slice'](z6t2o5, u4ngd)), k13tw = xhr_p;break;case xj79fc:
            dvnguj = nvjcf['slice'](z6t2o5, u4ngd), k13tw = xcvdj;break;case x$7l89y:
            var mz562 = nvjcf['slice'](z6t2o5, u4ngd)['replace'](/&#?\w+;/g, t651);wb0he['warning']('attribute "' + mz562 + '" missed quot(")!!'), mizo['add'](dvnguj, mz562, z6t2o5);case xjvnud:
            k13tw = xhr_p;} else switch (k13tw) {case xcvdj:
            {
              mizo['tagName'];
            }'http://www.w3.org/1999/xhtml' === e0bah[''] && dvnguj['match'](/^(?:disabled|checked|selected)$/i) || wb0he['warning']('attribute "' + dvnguj + '" missed value!! "' + dvnguj + '" instead2!!'), mizo['add'](dvnguj, dvnguj, z6t2o5), z6t2o5 = u4ngd, k13tw = xj79fc;break;case xjvnud:
            wb0he['warning']('attribute space is required"' + dvnguj + '\x22!!');case xhr_p:
            k13tw = xj79fc, z6t2o5 = u4ngd;break;case xozxim:
            k13tw = x$7l89y, z6t2o5 = u4ngd;break;case xl7$:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}u4ngd++;
  }
}function xzto25(t526zo, t652oz, mo5z6) {
  for (var e0apbh = t526zo['tagName'], z256ot = null, ehpq_a = t526zo['length']; ehpq_a--;) {
    var l$78y = t526zo[ehpq_a],
        h_rqp = l$78y['qName'],
        cjndvu = l$78y['value'],
        juvdcn = h_rqp['indexOf'](':');if (juvdcn > 0x0) var j9l7c = l$78y['prefix'] = h_rqp['slice'](0x0, juvdcn),
        gxvdi4 = h_rqp['slice'](juvdcn + 0x1),
        udn = 'xmlns' === j9l7c && gxvdi4;else gxvdi4 = h_rqp, j9l7c = null, udn = 'xmlns' === h_rqp && '';l$78y['localName'] = gxvdi4, udn !== !0x1 && (null == z256ot && (z256ot = {}, xudgjnv(mo5z6, mo5z6 = {})), mo5z6[udn] = z256ot[udn] = cjndvu, l$78y['uri'] = 'http://www.w3.org/2000/xmlns/', t652oz['startPrefixMapping'](udn, cjndvu));
  }for (var ehpq_a = t526zo['length']; ehpq_a--;) {
    l$78y = t526zo[ehpq_a];var j9l7c = l$78y['prefix'];j9l7c && ('xml' === j9l7c && (l$78y['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== j9l7c && (l$78y['uri'] = mo5z6[j9l7c || '']));
  }var juvdcn = e0apbh['indexOf'](':');juvdcn > 0x0 ? (j9l7c = t526zo['prefix'] = e0apbh['slice'](0x0, juvdcn), gxvdi4 = t526zo['localName'] = e0apbh['slice'](juvdcn + 0x1)) : (j9l7c = null, gxvdi4 = t526zo['localName'] = e0apbh);var e1wkb = t526zo['uri'] = mo5z6[j9l7c || ''];if (t652oz['startElement'](e1wkb, gxvdi4, e0apbh, t526zo), !t526zo['closed']) return t526zo['currentNSMap'] = mo5z6, t526zo['localNSMap'] = z256ot, !0x0;if (t652oz['endElement'](e1wkb, gxvdi4, e0apbh), z256ot) {
    for (j9l7c in z256ot) t652oz['endPrefixMapping'](j9l7c);
  }
}function xcfjuv(xs4, vdgn4, ucdnjv, dvjgu, ms52z) {
  if (/^(?:script|textarea)$/i['test'](ucdnjv)) {
    var dv4ig = xs4['indexOf']('</' + ucdnjv + '>', vdgn4),
        uncfj = xs4['substring'](vdgn4 + 0x1, dv4ig);if (/[&<]/['test'](uncfj)) return (/^script$/i['test'](ucdnjv) ? (ms52z['characters'](uncfj, 0x0, uncfj['length']), dv4ig) : (uncfj = uncfj['replace'](/&#?\w+;/g, dvjgu), ms52z['characters'](uncfj, 0x0, uncfj['length']), dv4ig)
    );
  }return vdgn4 + 0x1;
}function xdcunjv(mozis, l89fc, cvjuf, dvugnj) {
  var hap_ = dvugnj[cvjuf];return null == hap_ && (hap_ = mozis['lastIndexOf']('</' + cvjuf + '>'), l89fc > hap_ && (hap_ = mozis['lastIndexOf']('</' + cvjuf)), dvugnj[cvjuf] = hap_), l89fc > hap_;
}function xudgjnv(qph_, jcn9f) {
  for (var b013wk in qph_) jcn9f[b013wk] = qph_[b013wk];
}function xhb0k(nl9jf, t62w1, vuncfj, t31wk) {
  var t36wk = nl9jf['charAt'](t62w1 + 0x2);switch (t36wk) {case '-':
      if ('-' === nl9jf['charAt'](t62w1 + 0x3)) {
        var bewh = nl9jf['indexOf']('-->', t62w1 + 0x4);return bewh > t62w1 ? (vuncfj['comment'](nl9jf, t62w1 + 0x4, bewh - t62w1 - 0x4), bewh + 0x3) : (t31wk['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == nl9jf['substr'](t62w1 + 0x3, 0x6)) {
        var bewh = nl9jf['indexOf'](']]>', t62w1 + 0x9);return vuncfj['startCDATA'](), vuncfj['characters'](nl9jf, t62w1 + 0x9, bewh - t62w1 - 0x9), vuncfj['endCDATA'](), bewh + 0x3;
      }var aqphr_ = xphaqr_(nl9jf, t62w1),
          d4sixg = aqphr_['length'];if (d4sixg > 0x1 && /!doctype/i['test'](aqphr_[0x0][0x0])) {
        var nlfjc9 = aqphr_[0x1][0x0],
            ktb1w3 = d4sixg > 0x3 && /^public$/i['test'](aqphr_[0x2][0x0]) && aqphr_[0x3][0x0],
            ekb0 = d4sixg > 0x4 && aqphr_[0x4][0x0],
            ixozm = aqphr_[d4sixg - 0x1];return vuncfj['startDTD'](nlfjc9, ktb1w3 && ktb1w3['replace'](/^(['"])(.*?)\1$/, '$2'), ekb0 && ekb0['replace'](/^(['"])(.*?)\1$/, '$2')), vuncfj['endDTD'](), ixozm['index'] + ixozm[0x0]['length'];
      }}return -0x1;
}function xktw3b(oz2, sgx4id, ea_pq) {
  var ngud4v = oz2['indexOf']('?>', sgx4id);if (ngud4v) {
    var xidv4g = oz2['substring'](sgx4id, ngud4v)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xidv4g) {
      {
        xidv4g[0x0]['length'];
      }return ea_pq['processingInstruction'](xidv4g[0x1], xidv4g[0x2]), ngud4v + 0x2;
    }return -0x1;
  }return -0x1;
}function xe_ahp() {}function xo4i(jdngu, funcjv) {
  return jdngu['__proto__'] = funcjv, jdngu;
}function xphaqr_(pae_hq, t1wkb) {
  var sxim4,
      ncf9 = [],
      hpbe0k = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hpbe0k['lastIndex'] = t1wkb, hpbe0k['exec'](pae_hq); sxim4 = hpbe0k['exec'](pae_hq);) if (ncf9['push'](sxim4), sxim4[0x1]) return ncf9;
}var xm52so = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xomz6 = new RegExp('[\\-\\.0-9' + xm52so['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xdu4gn = new RegExp('^' + xm52so['source'] + xomz6['source'] + '*(?::' + xm52so['source'] + xomz6['source'] + '*)?$'),
    xnduvg = 0x0,
    xj79fc = 0x1,
    xcvdj = 0x2,
    xozxim = 0x3,
    x$7l89y = 0x4,
    xjvnud = 0x5,
    xhr_p = 0x6,
    xl7$ = 0x7;xebk0hp['prototype'] = { 'parse': function (cfnu, jnug, dugjvn) {
    var nudjcv = this['domBuilder'];nudjcv['startDocument'](), xudgjnv(jnug, jnug = {}), xkebph0(cfnu, jnug, dugjvn, nudjcv, this['errorHandler']), nudjcv['endDocument']();
  } }, xe_ahp['prototype'] = { 'setTagName': function (cnjuvf) {
    if (!xdu4gn['test'](cnjuvf)) throw new Error('invalid tagName:' + cnjuvf);this['tagName'] = cnjuvf;
  }, 'add': function (keb0hw, fyl8, jcl9nf) {
    if (!xdu4gn['test'](keb0hw)) throw new Error('invalid attribute:' + keb0hw);this[this['length']++] = { 'qName': keb0hw, 'value': fyl8, 'offset': jcl9nf };
  }, 'length': 0x0, 'getLocalName': function (zxs5) {
    return this[zxs5]['localName'];
  }, 'getLocator': function (t256oz) {
    return this[t256oz]['locator'];
  }, 'getQName': function (hk0bep) {
    return this[hk0bep]['qName'];
  }, 'getURI': function (t61k3) {
    return this[t61k3]['uri'];
  }, 'getValue': function (q0aeph) {
    return this[q0aeph]['value'];
  } }, xo4i({}, xo4i['prototype']) instanceof xo4i || (xo4i = function (t3b1w, tz62o) {
  function eha0qp() {}eha0qp['prototype'] = tz62o, eha0qp = new eha0qp();for (tz62o in t3b1w) eha0qp[tz62o] = t3b1w[tz62o];return eha0qp;
}), exports['XMLReader'] = xebk0hp;