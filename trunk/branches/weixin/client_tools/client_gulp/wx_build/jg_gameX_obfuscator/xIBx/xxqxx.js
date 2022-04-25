var u = wx.$x;
function xx4dv() {}function xudjngv(ixzos, x4gis, t632, s4imo, ncl) {
  function jcln9(ek0whb) {
    if (ek0whb > 0xffff) {
      ek0whb -= 0x10000;var mxi4o = 0xd800 + (ek0whb >> 0xa),
          cjf97l = 0xdc00 + (0x3ff & ek0whb);return String['fromCharCode'](mxi4o, cjf97l);
    }return String['fromCharCode'](ek0whb);
  }function isxozm(haq0) {
    var pekh0b = haq0['slice'](0x1, -0x1);return pekh0b in t632 ? t632[pekh0b] : '#' === pekh0b['charAt'](0x0) ? jcln9(parseInt(pekh0b['substr'](0x1)['replace']('x', '0x'))) : (ncl['error']('entity not found:' + haq0), haq0);
  }function digu4(zt2635) {
    if (zt2635 > fvcjun) {
      var msoz = ixzos['substring'](fvcjun, zt2635)['replace'](/&#?\w+;/g, isxozm);hea && fy97(fvcjun), s4imo['characters'](msoz, 0x0, zt2635 - fvcjun), fvcjun = zt2635;
    }
  }function fy97(xo5s, tz2o) {
    for (; xo5s >= w0ebkh && (tz2o = nducvj['exec'](ixzos));) cnujd = tz2o['index'], w0ebkh = cnujd + tz2o[0x0]['length'], hea['lineNumber']++;hea['columnNumber'] = xo5s - cnujd + 0x1;
  }for (var cnujd = 0x0, w0ebkh = 0x0, nducvj = /.*(?:\r\n?|\n)|.*$/g, hea = s4imo['locator'], igxsd = [{ 'currentNSMap': x4gis }], wk1t6 = {}, fvcjun = 0x0;;) {
    try {
      var z6ot25 = ixzos['indexOf']('<', fvcjun);if (0x0 > z6ot25) {
        if (!ixzos['substr'](fvcjun)['match'](/^\s*$/)) {
          var _aqrp = s4imo['doc'],
              t26w = _aqrp['createTextNode'](ixzos['substr'](fvcjun));_aqrp['appendChild'](t26w), s4imo['currentElement'] = t26w;
        }return;
      }switch (z6ot25 > fvcjun && digu4(z6ot25), ixzos['charAt'](z6ot25 + 0x1)) {case '/':
          var l$9y78 = ixzos['indexOf']('>', z6ot25 + 0x3),
              aqeh_p = ixzos['substring'](z6ot25 + 0x2, l$9y78),
              b0ehk = igxsd['pop']();0x0 > l$9y78 ? (aqeh_p = ixzos['substring'](z6ot25 + 0x2)['replace'](/[\s<].*/, ''), ncl['error']('end tag name: ' + aqeh_p + ' is not complete:' + b0ehk['tagName']), l$9y78 = z6ot25 + 0x1 + aqeh_p['length']) : aqeh_p['match'](/\s</) && (aqeh_p = aqeh_p['replace'](/[\s<].*/, ''), ncl['error']('end tag name: ' + aqeh_p + ' maybe not complete'), l$9y78 = z6ot25 + 0x1 + aqeh_p['length']);var i4omx = b0ehk['localNSMap'],
              isxmg = b0ehk['tagName'] == aqeh_p,
              cvund = isxmg || b0ehk['tagName'] && b0ehk['tagName']['toLowerCase']() == aqeh_p['toLowerCase']();if (cvund) {
            if (s4imo['endElement'](b0ehk['uri'], b0ehk['localName'], aqeh_p), i4omx) {
              for (var zsx5 in i4omx) s4imo['endPrefixMapping'](zsx5);
            }isxmg || ncl['fatalError']('end tag name: ' + aqeh_p + ' is not match the current start tagName:' + b0ehk['tagName']);
          } else igxsd['push'](b0ehk);l$9y78++;break;case '?':
          hea && fy97(z6ot25), l$9y78 = xjlcf9(ixzos, z6ot25, s4imo);break;case '!':
          hea && fy97(z6ot25), l$9y78 = xbk0h(ixzos, z6ot25, s4imo, ncl);break;default:
          hea && fy97(z6ot25);var ncjf = new xomsx5z(),
              jvngd = igxsd[igxsd['length'] - 0x1]['currentNSMap'],
              l$9y78 = xjgudn(ixzos, z6ot25, ncjf, jvngd, isxozm, ncl),
              gixv4d = ncjf['length'];if (!ncjf['closed'] && xbap0he(ixzos, l$9y78, ncjf['tagName'], wk1t6) && (ncjf['closed'] = !0x0, t632['nbsp'] || ncl['warning']('unclosed xml attribute')), hea && gixv4d) {
            for (var sgmi4x = xdvui4(hea, {}), qahe_p = 0x0; gixv4d > qahe_p; qahe_p++) {
              var nfcju9 = ncjf[qahe_p];fy97(nfcju9['offset']), nfcju9['locator'] = xdvui4(hea, {});
            }s4imo['locator'] = sgmi4x, xrh_q(ncjf, s4imo, jvngd) && igxsd['push'](ncjf), s4imo['locator'] = hea;
          } else xrh_q(ncjf, s4imo, jvngd) && igxsd['push'](ncjf);'http://www.w3.org/1999/xhtml' !== ncjf['uri'] || ncjf['closed'] ? l$9y78++ : l$9y78 = xdgiu(ixzos, l$9y78, ncjf['tagName'], isxozm, s4imo);}
    } catch (wk0e1) {
      ncl['error']('element parse error: ' + wk0e1), l$9y78 = -0x1;
    }l$9y78 > fvcjun ? fvcjun = l$9y78 : digu4(Math['max'](z6ot25, fvcjun) + 0x1);
  }
}function xdvui4(vjdgun, dgi4vx) {
  return dgi4vx['lineNumber'] = vjdgun['lineNumber'], dgi4vx['columnNumber'] = vjdgun['columnNumber'], dgi4vx;
}function xjgudn(ekb0ph, s5mzo, he_p, gm4ixs, smgi, f7l9) {
  for (var gjdn, ly9f, $l8y7 = ++s5mzo, zo65t2 = xc7jfl;;) {
    var hke0p = ekb0ph['charAt']($l8y7);switch (hke0p) {case '=':
        if (zo65t2 === xuv4ngd) gjdn = ekb0ph['slice'](s5mzo, $l8y7), zo65t2 = xsm4x;else {
          if (zo65t2 !== xw10kbe) throw new Error('attribute equal must after attrName');zo65t2 = xsm4x;
        }break;case '\x27':case '\x22':
        if (zo65t2 === xsm4x || zo65t2 === xuv4ngd) {
          if (zo65t2 === xuv4ngd && (f7l9['warning']('attribute value must after "="'), gjdn = ekb0ph['slice'](s5mzo, $l8y7)), s5mzo = $l8y7 + 0x1, $l8y7 = ekb0ph['indexOf'](hke0p, s5mzo), !($l8y7 > 0x0)) throw new Error('attribute value no end \'' + hke0p + '\' match');ly9f = ekb0ph['slice'](s5mzo, $l8y7)['replace'](/&#?\w+;/g, smgi), he_p['add'](gjdn, ly9f, s5mzo - 0x1), zo65t2 = xdvjng;
        } else {
          if (zo65t2 != xkhb0ew) throw new Error('attribute value must after "="');ly9f = ekb0ph['slice'](s5mzo, $l8y7)['replace'](/&#?\w+;/g, smgi), he_p['add'](gjdn, ly9f, s5mzo), f7l9['warning']('attribute "' + gjdn + '" missed start quot(' + hke0p + ')!!'), s5mzo = $l8y7 + 0x1, zo65t2 = xdvjng;
        }break;case '/':
        switch (zo65t2) {case xc7jfl:
            he_p['setTagName'](ekb0ph['slice'](s5mzo, $l8y7));case xdvjng:case xnujvgd:case xlfc7:
            zo65t2 = xlfc7, he_p['closed'] = !0x0;case xkhb0ew:case xuv4ngd:case xw10kbe:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return f7l9['error']('unexpected end of input'), zo65t2 == xc7jfl && he_p['setTagName'](ekb0ph['slice'](s5mzo, $l8y7)), $l8y7;case '>':
        switch (zo65t2) {case xc7jfl:
            he_p['setTagName'](ekb0ph['slice'](s5mzo, $l8y7));case xdvjng:case xnujvgd:case xlfc7:
            break;case xkhb0ew:case xuv4ngd:
            ly9f = ekb0ph['slice'](s5mzo, $l8y7), '/' === ly9f['slice'](-0x1) && (he_p['closed'] = !0x0, ly9f = ly9f['slice'](0x0, -0x1));case xw10kbe:
            zo65t2 === xw10kbe && (ly9f = gjdn), zo65t2 == xkhb0ew ? (f7l9['warning']('attribute "' + ly9f + '" missed quot(")!!'), he_p['add'](gjdn, ly9f['replace'](/&#?\w+;/g, smgi), s5mzo)) : ('http://www.w3.org/1999/xhtml' === gm4ixs[''] && ly9f['match'](/^(?:disabled|checked|selected)$/i) || f7l9['warning']('attribute "' + ly9f + '" missed value!! "' + ly9f + '" instead!!'), he_p['add'](ly9f, ly9f, s5mzo));break;case xsm4x:
            throw new Error('attribute value missed!!');}return $l8y7;case '\u0080':
        hke0p = '\x20';default:
        if ('\x20' >= hke0p) switch (zo65t2) {case xc7jfl:
            he_p['setTagName'](ekb0ph['slice'](s5mzo, $l8y7)), zo65t2 = xnujvgd;break;case xuv4ngd:
            gjdn = ekb0ph['slice'](s5mzo, $l8y7), zo65t2 = xw10kbe;break;case xkhb0ew:
            var ly9f = ekb0ph['slice'](s5mzo, $l8y7)['replace'](/&#?\w+;/g, smgi);f7l9['warning']('attribute "' + ly9f + '" missed quot(")!!'), he_p['add'](gjdn, ly9f, s5mzo);case xdvjng:
            zo65t2 = xnujvgd;} else switch (zo65t2) {case xw10kbe:
            {
              he_p['tagName'];
            }'http://www.w3.org/1999/xhtml' === gm4ixs[''] && gjdn['match'](/^(?:disabled|checked|selected)$/i) || f7l9['warning']('attribute "' + gjdn + '" missed value!! "' + gjdn + '" instead2!!'), he_p['add'](gjdn, gjdn, s5mzo), s5mzo = $l8y7, zo65t2 = xuv4ngd;break;case xdvjng:
            f7l9['warning']('attribute space is required"' + gjdn + '\x22!!');case xnujvgd:
            zo65t2 = xuv4ngd, s5mzo = $l8y7;break;case xsm4x:
            zo65t2 = xkhb0ew, s5mzo = $l8y7;break;case xlfc7:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$l8y7++;
  }
}function xrh_q(kwbhe, dncu, dcnuvj) {
  for (var z5so = kwbhe['tagName'], sm4xoi = null, soizm = kwbhe['length']; soizm--;) {
    var udnjcv = kwbhe[soizm],
        ims = udnjcv['qName'],
        cf987 = udnjcv['value'],
        m6o5z2 = ims['indexOf'](':');if (m6o5z2 > 0x0) var pabh0 = udnjcv['prefix'] = ims['slice'](0x0, m6o5z2),
        vgid4 = ims['slice'](m6o5z2 + 0x1),
        wk01b3 = 'xmlns' === pabh0 && vgid4;else vgid4 = ims, pabh0 = null, wk01b3 = 'xmlns' === ims && '';udnjcv['localName'] = vgid4, wk01b3 !== !0x1 && (null == sm4xoi && (sm4xoi = {}, xmzxso(dcnuvj, dcnuvj = {})), dcnuvj[wk01b3] = sm4xoi[wk01b3] = cf987, udnjcv['uri'] = 'http://www.w3.org/2000/xmlns/', dncu['startPrefixMapping'](wk01b3, cf987));
  }for (var soizm = kwbhe['length']; soizm--;) {
    udnjcv = kwbhe[soizm];var pabh0 = udnjcv['prefix'];pabh0 && ('xml' === pabh0 && (udnjcv['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== pabh0 && (udnjcv['uri'] = dcnuvj[pabh0 || '']));
  }var m6o5z2 = z5so['indexOf'](':');m6o5z2 > 0x0 ? (pabh0 = kwbhe['prefix'] = z5so['slice'](0x0, m6o5z2), vgid4 = kwbhe['localName'] = z5so['slice'](m6o5z2 + 0x1)) : (pabh0 = null, vgid4 = kwbhe['localName'] = z5so);var dsxgi4 = kwbhe['uri'] = dcnuvj[pabh0 || ''];if (dncu['startElement'](dsxgi4, vgid4, z5so, kwbhe), !kwbhe['closed']) return kwbhe['currentNSMap'] = dcnuvj, kwbhe['localNSMap'] = sm4xoi, !0x0;if (dncu['endElement'](dsxgi4, vgid4, z5so), sm4xoi) {
    for (pabh0 in sm4xoi) dncu['endPrefixMapping'](pabh0);
  }
}function xdgiu(bkw0he, dxvgi, apebh, ea0, xvd4gi) {
  if (/^(?:script|textarea)$/i['test'](apebh)) {
    var mixs = bkw0he['indexOf']('</' + apebh + '>', dxvgi),
        nj9cfl = bkw0he['substring'](dxvgi + 0x1, mixs);if (/[&<]/['test'](nj9cfl)) return (/^script$/i['test'](apebh) ? (xvd4gi['characters'](nj9cfl, 0x0, nj9cfl['length']), mixs) : (nj9cfl = nj9cfl['replace'](/&#?\w+;/g, ea0), xvd4gi['characters'](nj9cfl, 0x0, nj9cfl['length']), mixs)
    );
  }return dxvgi + 0x1;
}function xbap0he(phe0k, y98$l7, keb0ph, jcl9fn) {
  var f9lcj7 = jcl9fn[keb0ph];return null == f9lcj7 && (f9lcj7 = phe0k['lastIndexOf']('</' + keb0ph + '>'), y98$l7 > f9lcj7 && (f9lcj7 = phe0k['lastIndexOf']('</' + keb0ph)), jcl9fn[keb0ph] = f9lcj7), y98$l7 > f9lcj7;
}function xmzxso(idgu4, bwh0e) {
  for (var eh0kpb in idgu4) bwh0e[eh0kpb] = idgu4[eh0kpb];
}function xbk0h(o2zt56, bwkh0e, xmzs, ivgxd4) {
  var ea0b = o2zt56['charAt'](bwkh0e + 0x2);switch (ea0b) {case '-':
      if ('-' === o2zt56['charAt'](bwkh0e + 0x3)) {
        var fc9lnj = o2zt56['indexOf']('-->', bwkh0e + 0x4);return fc9lnj > bwkh0e ? (xmzs['comment'](o2zt56, bwkh0e + 0x4, fc9lnj - bwkh0e - 0x4), fc9lnj + 0x3) : (ivgxd4['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == o2zt56['substr'](bwkh0e + 0x3, 0x6)) {
        var fc9lnj = o2zt56['indexOf'](']]>', bwkh0e + 0x9);return xmzs['startCDATA'](), xmzs['characters'](o2zt56, bwkh0e + 0x9, fc9lnj - bwkh0e - 0x9), xmzs['endCDATA'](), fc9lnj + 0x3;
      }var cjf9 = xngjduv(o2zt56, bwkh0e),
          bpa0eh = cjf9['length'];if (bpa0eh > 0x1 && /!doctype/i['test'](cjf9[0x0][0x0])) {
        var e_hpq = cjf9[0x1][0x0],
            mz625 = bpa0eh > 0x3 && /^public$/i['test'](cjf9[0x2][0x0]) && cjf9[0x3][0x0],
            kb0ep = bpa0eh > 0x4 && cjf9[0x4][0x0],
            ximso = cjf9[bpa0eh - 0x1];return xmzs['startDTD'](e_hpq, mz625 && mz625['replace'](/^(['"])(.*?)\1$/, '$2'), kb0ep && kb0ep['replace'](/^(['"])(.*?)\1$/, '$2')), xmzs['endDTD'](), ximso['index'] + ximso[0x0]['length'];
      }}return -0x1;
}function xjlcf9(gvudi, gun4, uvjcdn) {
  var hepqa_ = gvudi['indexOf']('?>', gun4);if (hepqa_) {
    var unj9 = gvudi['substring'](gun4, hepqa_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (unj9) {
      {
        unj9[0x0]['length'];
      }return uvjcdn['processingInstruction'](unj9[0x1], unj9[0x2]), hepqa_ + 0x2;
    }return -0x1;
  }return -0x1;
}function xomsx5z() {}function xeb(igd4sx, uvgi4d) {
  return igd4sx['__proto__'] = uvgi4d, igd4sx;
}function xngjduv(xmgi4s, vngjdu) {
  var cfjnv,
      k1twb = [],
      dvgi4x = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (dvgi4x['lastIndex'] = vngjdu, dvgi4x['exec'](xmgi4s); cfjnv = dvgi4x['exec'](xmgi4s);) if (k1twb['push'](cfjnv), cfjnv[0x1]) return k1twb;
}var xt56z23 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    xqea_h = new RegExp('[\\-\\.0-9' + xt56z23['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    xtw3bk = new RegExp('^' + xt56z23['source'] + xqea_h['source'] + '*(?::' + xt56z23['source'] + xqea_h['source'] + '*)?$'),
    xc7jfl = 0x0,
    xuv4ngd = 0x1,
    xw10kbe = 0x2,
    xsm4x = 0x3,
    xkhb0ew = 0x4,
    xdvjng = 0x5,
    xnujvgd = 0x6,
    xlfc7 = 0x7;xx4dv['prototype'] = { 'parse': function (vujdg, lj9cnf, r_paq) {
    var xg4mi = this['domBuilder'];xg4mi['startDocument'](), xmzxso(lj9cnf, lj9cnf = {}), xudjngv(vujdg, lj9cnf, r_paq, xg4mi, this['errorHandler']), xg4mi['endDocument']();
  } }, xomsx5z['prototype'] = { 'setTagName': function (uv4n) {
    if (!xtw3bk['test'](uv4n)) throw new Error('invalid tagName:' + uv4n);this['tagName'] = uv4n;
  }, 'add': function (msixz, omz62, uvng4) {
    if (!xtw3bk['test'](msixz)) throw new Error('invalid attribute:' + msixz);this[this['length']++] = { 'qName': msixz, 'value': omz62, 'offset': uvng4 };
  }, 'length': 0x0, 'getLocalName': function (ud4vng) {
    return this[ud4vng]['localName'];
  }, 'getLocator': function (imox4s) {
    return this[imox4s]['locator'];
  }, 'getQName': function (ktw1b) {
    return this[ktw1b]['qName'];
  }, 'getURI': function (t2z653) {
    return this[t2z653]['uri'];
  }, 'getValue': function (w3b0k) {
    return this[w3b0k]['value'];
  } }, xeb({}, xeb['prototype']) instanceof xeb || (xeb = function (_hqpar, kt163) {
  function gx4ims() {}gx4ims['prototype'] = kt163, gx4ims = new gx4ims();for (kt163 in _hqpar) gx4ims[kt163] = _hqpar[kt163];return gx4ims;
}), exports['XMLReader'] = xx4dv;