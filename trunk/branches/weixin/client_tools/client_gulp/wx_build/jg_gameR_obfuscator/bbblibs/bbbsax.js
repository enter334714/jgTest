var _ = wx.y$;
function _dckvm_a() {}function _dhszoq6(ohsq6z, sqwd, _vxma, ibjy, pldgn) {
  function t51u(utji) {
    if (utji > 0xffff) {
      utji -= 0x10000;var dl7wgp = 0xd800 + (utji >> 0xa),
          sqo6 = 0xdc00 + (0x3ff & utji);return String['fromCharCode'](dl7wgp, sqo6);
    }return String['fromCharCode'](utji);
  }function mk$9fv(o$390r) {
    var jiye4 = o$390r['slice'](0x1, -0x1);return jiye4 in _vxma ? _vxma[jiye4] : '#' === jiye4['charAt'](0x0) ? t51u(parseInt(jiye4['substr'](0x1)['replace']('x', '0x'))) : (pldgn['error']('entity not found:' + o$390r), o$390r);
  }function a_xc8(vcmak) {
    if (vcmak > xmac) {
      var ca8m_ = ohsq6z['substring'](xmac, vcmak)['replace'](/&#?\w+;/g, mk$9fv);vf93$ && r$k9f3(xmac), ibjy['characters'](ca8m_, 0x0, vcmak - xmac), xmac = vcmak;
    }
  }function r$k9f3(shqw6d, n7pgb2) {
    for (; shqw6d >= so6q && (n7pgb2 = ju4eyi['exec'](ohsq6z));) vkf$m = n7pgb2['index'], so6q = vkf$m + n7pgb2[0x0]['length'], vf93$['lineNumber']++;vf93$['columnNumber'] = shqw6d - vkf$m + 0x1;
  }for (var vkf$m = 0x0, so6q = 0x0, ju4eyi = /.*(?:\r\n?|\n)|.*$/g, vf93$ = ibjy['locator'], akvmf = [{ 'currentNSMap': sqwd }], d7gpw = {}, xmac = 0x0;;) {
    try {
      var dpg7 = ohsq6z['indexOf']('<', xmac);if (0x0 > dpg7) {
        if (!ohsq6z['substr'](xmac)['match'](/^\s*$/)) {
          var cma_xv = ibjy['doc'],
              d7lgpw = cma_xv['createTextNode'](ohsq6z['substr'](xmac));cma_xv['appendChild'](d7lgpw), ibjy['currentElement'] = d7lgpw;
        }return;
      }switch (dpg7 > xmac && a_xc8(dpg7), ohsq6z['charAt'](dpg7 + 0x1)) {case '/':
          var l6qswd = ohsq6z['indexOf']('>', dpg7 + 0x3),
              y24in = ohsq6z['substring'](dpg7 + 0x2, l6qswd),
              i5ujet = akvmf['pop']();0x0 > l6qswd ? (y24in = ohsq6z['substring'](dpg7 + 0x2)['replace'](/[\s<].*/, ''), pldgn['error']('end tag name: ' + y24in + ' is not complete:' + i5ujet['tagName']), l6qswd = dpg7 + 0x1 + y24in['length']) : y24in['match'](/\s</) && (y24in = y24in['replace'](/[\s<].*/, ''), pldgn['error']('end tag name: ' + y24in + ' maybe not complete'), l6qswd = dpg7 + 0x1 + y24in['length']);var uei4yj = i5ujet['localNSMap'],
              z0oqhr = i5ujet['tagName'] == y24in,
              sl6wd7 = z0oqhr || i5ujet['tagName'] && i5ujet['tagName']['toLowerCase']() == y24in['toLowerCase']();if (sl6wd7) {
            if (ibjy['endElement'](i5ujet['uri'], i5ujet['localName'], y24in), uei4yj) {
              for (var be42 in uei4yj) ibjy['endPrefixMapping'](be42);
            }z0oqhr || pldgn['fatalError']('end tag name: ' + y24in + ' is not match the current start tagName:' + i5ujet['tagName']);
          } else akvmf['push'](i5ujet);l6qswd++;break;case '?':
          vf93$ && r$k9f3(dpg7), l6qswd = _db72gpn(ohsq6z, dpg7, ibjy);break;case '!':
          vf93$ && r$k9f3(dpg7), l6qswd = _d$309(ohsq6z, dpg7, ibjy, pldgn);break;default:
          vf93$ && r$k9f3(dpg7);var dlq6 = new _djyieu5(),
              ndp = akvmf[akvmf['length'] - 0x1]['currentNSMap'],
              l6qswd = _di5eju(ohsq6z, dpg7, dlq6, ndp, mk$9fv, pldgn),
              camvk = dlq6['length'];if (!dlq6['closed'] && _de15tuj(ohsq6z, l6qswd, dlq6['tagName'], d7gpw) && (dlq6['closed'] = !0x0, _vxma['nbsp'] || pldgn['warning']('unclosed xml attribute')), vf93$ && camvk) {
            for (var h6o0qz = _dxcmva_(vf93$, {}), bpg24n = 0x0; camvk > bpg24n; bpg24n++) {
              var $9rk = dlq6[bpg24n];r$k9f3($9rk['offset']), $9rk['locator'] = _dxcmva_(vf93$, {});
            }ibjy['locator'] = h6o0qz, _db4yej(dlq6, ibjy, ndp) && akvmf['push'](dlq6), ibjy['locator'] = vf93$;
          } else _db4yej(dlq6, ibjy, ndp) && akvmf['push'](dlq6);'http://www.w3.org/1999/xhtml' !== dlq6['uri'] || dlq6['closed'] ? l6qswd++ : l6qswd = _dwsqd6h(ohsq6z, l6qswd, dlq6['tagName'], mk$9fv, ibjy);}
    } catch (s6hqw) {
      pldgn['error']('element parse error: ' + s6hqw), l6qswd = -0x1;
    }l6qswd > xmac ? xmac = l6qswd : a_xc8(Math['max'](dpg7, xmac) + 0x1);
  }
}function _dxcmva_(iu4eyj, p7ls) {
  return p7ls['lineNumber'] = iu4eyj['lineNumber'], p7ls['columnNumber'] = iu4eyj['columnNumber'], p7ls;
}function _di5eju(w6zhq, lpgdn, vf$ma, kvm$, yje4ui, swqd6l) {
  for (var v_xmac, g42bpn, te5ju1 = ++lpgdn, nbp2g7 = _dckav_;;) {
    var h0rz = w6zhq['charAt'](te5ju1);switch (h0rz) {case '=':
        if (nbp2g7 === _de5jiu) v_xmac = w6zhq['slice'](lpgdn, te5ju1), nbp2g7 = _dacxmv;else {
          if (nbp2g7 !== _dk3$f9) throw new Error('attribute equal must after attrName');nbp2g7 = _dacxmv;
        }break;case '\x27':case '\x22':
        if (nbp2g7 === _dacxmv || nbp2g7 === _de5jiu) {
          if (nbp2g7 === _de5jiu && (swqd6l['warning']('attribute value must after "="'), v_xmac = w6zhq['slice'](lpgdn, te5ju1)), lpgdn = te5ju1 + 0x1, te5ju1 = w6zhq['indexOf'](h0rz, lpgdn), !(te5ju1 > 0x0)) throw new Error('attribute value no end \'' + h0rz + '\' match');g42bpn = w6zhq['slice'](lpgdn, te5ju1)['replace'](/&#?\w+;/g, yje4ui), vf$ma['add'](v_xmac, g42bpn, lpgdn - 0x1), nbp2g7 = _dws7pdl;
        } else {
          if (nbp2g7 != _do6hsz) throw new Error('attribute value must after "="');g42bpn = w6zhq['slice'](lpgdn, te5ju1)['replace'](/&#?\w+;/g, yje4ui), vf$ma['add'](v_xmac, g42bpn, lpgdn), swqd6l['warning']('attribute "' + v_xmac + '" missed start quot(' + h0rz + ')!!'), lpgdn = te5ju1 + 0x1, nbp2g7 = _dws7pdl;
        }break;case '/':
        switch (nbp2g7) {case _dckav_:
            vf$ma['setTagName'](w6zhq['slice'](lpgdn, te5ju1));case _dws7pdl:case _dorz9:case _dkmf$v9:
            nbp2g7 = _dkmf$v9, vf$ma['closed'] = !0x0;case _do6hsz:case _de5jiu:case _dk3$f9:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return swqd6l['error']('unexpected end of input'), nbp2g7 == _dckav_ && vf$ma['setTagName'](w6zhq['slice'](lpgdn, te5ju1)), te5ju1;case '>':
        switch (nbp2g7) {case _dckav_:
            vf$ma['setTagName'](w6zhq['slice'](lpgdn, te5ju1));case _dws7pdl:case _dorz9:case _dkmf$v9:
            break;case _do6hsz:case _de5jiu:
            g42bpn = w6zhq['slice'](lpgdn, te5ju1), '/' === g42bpn['slice'](-0x1) && (vf$ma['closed'] = !0x0, g42bpn = g42bpn['slice'](0x0, -0x1));case _dk3$f9:
            nbp2g7 === _dk3$f9 && (g42bpn = v_xmac), nbp2g7 == _do6hsz ? (swqd6l['warning']('attribute "' + g42bpn + '" missed quot(")!!'), vf$ma['add'](v_xmac, g42bpn['replace'](/&#?\w+;/g, yje4ui), lpgdn)) : ('http://www.w3.org/1999/xhtml' === kvm$[''] && g42bpn['match'](/^(?:disabled|checked|selected)$/i) || swqd6l['warning']('attribute "' + g42bpn + '" missed value!! "' + g42bpn + '" instead!!'), vf$ma['add'](g42bpn, g42bpn, lpgdn));break;case _dacxmv:
            throw new Error('attribute value missed!!');}return te5ju1;case '\u0080':
        h0rz = '\x20';default:
        if ('\x20' >= h0rz) switch (nbp2g7) {case _dckav_:
            vf$ma['setTagName'](w6zhq['slice'](lpgdn, te5ju1)), nbp2g7 = _dorz9;break;case _de5jiu:
            v_xmac = w6zhq['slice'](lpgdn, te5ju1), nbp2g7 = _dk3$f9;break;case _do6hsz:
            var g42bpn = w6zhq['slice'](lpgdn, te5ju1)['replace'](/&#?\w+;/g, yje4ui);swqd6l['warning']('attribute "' + g42bpn + '" missed quot(")!!'), vf$ma['add'](v_xmac, g42bpn, lpgdn);case _dws7pdl:
            nbp2g7 = _dorz9;} else switch (nbp2g7) {case _dk3$f9:
            {
              vf$ma['tagName'];
            }'http://www.w3.org/1999/xhtml' === kvm$[''] && v_xmac['match'](/^(?:disabled|checked|selected)$/i) || swqd6l['warning']('attribute "' + v_xmac + '" missed value!! "' + v_xmac + '" instead2!!'), vf$ma['add'](v_xmac, v_xmac, lpgdn), lpgdn = te5ju1, nbp2g7 = _de5jiu;break;case _dws7pdl:
            swqd6l['warning']('attribute space is required"' + v_xmac + '\x22!!');case _dorz9:
            nbp2g7 = _de5jiu, lpgdn = te5ju1;break;case _dacxmv:
            nbp2g7 = _do6hsz, lpgdn = te5ju1;break;case _dkmf$v9:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}te5ju1++;
  }
}function _db4yej(euti, je4bi, p7gwdl) {
  for (var e24bi = euti['tagName'], be2i4y = null, _acmx = euti['length']; _acmx--;) {
    var n7pgdl = euti[_acmx],
        mvx_ca = n7pgdl['qName'],
        h6zswq = n7pgdl['value'],
        e4uijy = mvx_ca['indexOf'](':');if (e4uijy > 0x0) var ut5e1j = n7pgdl['prefix'] = mvx_ca['slice'](0x0, e4uijy),
        $f39 = mvx_ca['slice'](e4uijy + 0x1),
        rf3$k = 'xmlns' === ut5e1j && $f39;else $f39 = mvx_ca, ut5e1j = null, rf3$k = 'xmlns' === mvx_ca && '';n7pgdl['localName'] = $f39, rf3$k !== !0x1 && (null == be2i4y && (be2i4y = {}, _dgyb(p7gwdl, p7gwdl = {})), p7gwdl[rf3$k] = be2i4y[rf3$k] = h6zswq, n7pgdl['uri'] = 'http://www.w3.org/2000/xmlns/', je4bi['startPrefixMapping'](rf3$k, h6zswq));
  }for (var _acmx = euti['length']; _acmx--;) {
    n7pgdl = euti[_acmx];var ut5e1j = n7pgdl['prefix'];ut5e1j && ('xml' === ut5e1j && (n7pgdl['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== ut5e1j && (n7pgdl['uri'] = p7gwdl[ut5e1j || '']));
  }var e4uijy = e24bi['indexOf'](':');e4uijy > 0x0 ? (ut5e1j = euti['prefix'] = e24bi['slice'](0x0, e4uijy), $f39 = euti['localName'] = e24bi['slice'](e4uijy + 0x1)) : (ut5e1j = null, $f39 = euti['localName'] = e24bi);var lg7dw = euti['uri'] = p7gwdl[ut5e1j || ''];if (je4bi['startElement'](lg7dw, $f39, e24bi, euti), !euti['closed']) return euti['currentNSMap'] = p7gwdl, euti['localNSMap'] = be2i4y, !0x0;if (je4bi['endElement'](lg7dw, $f39, e24bi), be2i4y) {
    for (ut5e1j in be2i4y) je4bi['endPrefixMapping'](ut5e1j);
  }
}function _dwsqd6h(hqzo0r, jui4y, fr3$k, pbn7g2, jbe4iy) {
  if (/^(?:script|textarea)$/i['test'](fr3$k)) {
    var zqso = hqzo0r['indexOf']('</' + fr3$k + '>', jui4y),
        eij4yu = hqzo0r['substring'](jui4y + 0x1, zqso);if (/[&<]/['test'](eij4yu)) return (/^script$/i['test'](fr3$k) ? (jbe4iy['characters'](eij4yu, 0x0, eij4yu['length']), zqso) : (eij4yu = eij4yu['replace'](/&#?\w+;/g, pbn7g2), jbe4iy['characters'](eij4yu, 0x0, eij4yu['length']), zqso)
    );
  }return jui4y + 0x1;
}function _de15tuj(nl7gpd, ti5uej, f9k3r$, wgpd) {
  var vc_ak = wgpd[f9k3r$];return null == vc_ak && (vc_ak = nl7gpd['lastIndexOf']('</' + f9k3r$ + '>'), ti5uej > vc_ak && (vc_ak = nl7gpd['lastIndexOf']('</' + f9k3r$)), wgpd[f9k3r$] = vc_ak), ti5uej > vc_ak;
}function _dgyb(k9fv3$, rf93$0) {
  for (var p7dslw in k9fv3$) rf93$0[p7dslw] = k9fv3$[p7dslw];
}function _d$309(ca8_mx, ho0qrz, p7l2ng, $3o0r9) {
  var vk_acm = ca8_mx['charAt'](ho0qrz + 0x2);switch (vk_acm) {case '-':
      if ('-' === ca8_mx['charAt'](ho0qrz + 0x3)) {
        var am_xvc = ca8_mx['indexOf']('-->', ho0qrz + 0x4);return am_xvc > ho0qrz ? (p7l2ng['comment'](ca8_mx, ho0qrz + 0x4, am_xvc - ho0qrz - 0x4), am_xvc + 0x3) : ($3o0r9['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == ca8_mx['substr'](ho0qrz + 0x3, 0x6)) {
        var am_xvc = ca8_mx['indexOf'](']]>', ho0qrz + 0x9);return p7l2ng['startCDATA'](), p7l2ng['characters'](ca8_mx, ho0qrz + 0x9, am_xvc - ho0qrz - 0x9), p7l2ng['endCDATA'](), am_xvc + 0x3;
      }var whs6qz = _dg24ybn(ca8_mx, ho0qrz),
          slqwd6 = whs6qz['length'];if (slqwd6 > 0x1 && /!doctype/i['test'](whs6qz[0x0][0x0])) {
        var vcmx_a = whs6qz[0x1][0x0],
            w7pgld = slqwd6 > 0x3 && /^public$/i['test'](whs6qz[0x2][0x0]) && whs6qz[0x3][0x0],
            wzsh6 = slqwd6 > 0x4 && whs6qz[0x4][0x0],
            gnyb4 = whs6qz[slqwd6 - 0x1];return p7l2ng['startDTD'](vcmx_a, w7pgld && w7pgld['replace'](/^(['"])(.*?)\1$/, '$2'), wzsh6 && wzsh6['replace'](/^(['"])(.*?)\1$/, '$2')), p7l2ng['endDTD'](), gnyb4['index'] + gnyb4[0x0]['length'];
      }}return -0x1;
}function _db72gpn(f$309, $3ro09, y4g2n) {
  var ma_cxv = f$309['indexOf']('?>', $3ro09);if (ma_cxv) {
    var hw6zq = f$309['substring']($3ro09, ma_cxv)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (hw6zq) {
      {
        hw6zq[0x0]['length'];
      }return y4g2n['processingInstruction'](hw6zq[0x1], hw6zq[0x2]), ma_cxv + 0x2;
    }return -0x1;
  }return -0x1;
}function _djyieu5() {}function _dpn42(z30h, p4nb2) {
  return z30h['__proto__'] = p4nb2, z30h;
}function _dg24ybn(k$f39, mak_vf) {
  var r9f$0,
      s7pwd = [],
      jyi5eu = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (jyi5eu['lastIndex'] = mak_vf, jyi5eu['exec'](k$f39); r9f$0 = jyi5eu['exec'](k$f39);) if (s7pwd['push'](r9f$0), r9f$0[0x1]) return s7pwd;
}var _dmxca8_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    _dkfvma = new RegExp('[\\-\\.0-9' + _dmxca8_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    _dswqzh = new RegExp('^' + _dmxca8_['source'] + _dkfvma['source'] + '*(?::' + _dmxca8_['source'] + _dkfvma['source'] + '*)?$'),
    _dckav_ = 0x0,
    _de5jiu = 0x1,
    _dk3$f9 = 0x2,
    _dacxmv = 0x3,
    _do6hsz = 0x4,
    _dws7pdl = 0x5,
    _dorz9 = 0x6,
    _dkmf$v9 = 0x7;_dckvm_a['prototype'] = { 'parse': function (m_caxv, mk_cva, yjie4b) {
    var dwpl = this['domBuilder'];dwpl['startDocument'](), _dgyb(mk_cva, mk_cva = {}), _dhszoq6(m_caxv, mk_cva, yjie4b, dwpl, this['errorHandler']), dwpl['endDocument']();
  } }, _djyieu5['prototype'] = { 'setTagName': function (akvf_) {
    if (!_dswqzh['test'](akvf_)) throw new Error('invalid tagName:' + akvf_);this['tagName'] = akvf_;
  }, 'add': function (h30r, d67s, ny24i) {
    if (!_dswqzh['test'](h30r)) throw new Error('invalid attribute:' + h30r);this[this['length']++] = { 'qName': h30r, 'value': d67s, 'offset': ny24i };
  }, 'length': 0x0, 'getLocalName': function (wqhs) {
    return this[wqhs]['localName'];
  }, 'getLocator': function (oz06qh) {
    return this[oz06qh]['locator'];
  }, 'getQName': function (_amc) {
    return this[_amc]['qName'];
  }, 'getURI': function (x_8cma) {
    return this[x_8cma]['uri'];
  }, 'getValue': function (jiby) {
    return this[jiby]['value'];
  } }, _dpn42({}, _dpn42['prototype']) instanceof _dpn42 || (_dpn42 = function (kvcm, pbn72g) {
  function qs6l() {}qs6l['prototype'] = pbn72g, qs6l = new qs6l();for (pbn72g in kvcm) qs6l[pbn72g] = kvcm[pbn72g];return qs6l;
}), exports['XMLReader'] = _dckvm_a;