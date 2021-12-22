var o = wx.$U;
function uk_sv() {}function ulqomx(x7qloi, mqhilo, cavk, vsa_kn, f34upe) {
  function mxqoil(mihlo) {
    if (mihlo > 0xffff) {
      mihlo -= 0x10000;var oiql7x = 0xd800 + (mihlo >> 0xa),
          _rcak = 0xdc00 + (0x3ff & mihlo);return String['fromCharCode'](oiql7x, _rcak);
    }return String['fromCharCode'](mihlo);
  }function mohil(iolqxm) {
    var h3jm4 = iolqxm['slice'](0x1, -0x1);return h3jm4 in cavk ? cavk[h3jm4] : '#' === h3jm4['charAt'](0x0) ? mxqoil(parseInt(h3jm4['substr'](0x1)['replace']('x', '0x'))) : (f34upe['error']('entity not found:' + iolqxm), iolqxm);
  }function i3hjmo(h43ji) {
    if (h43ji > cr8a06) {
      var feup34 = x7qloi['substring'](cr8a06, h43ji)['replace'](/&#?\w+;/g, mohil);lqmoih && pus$e(cr8a06), vsa_kn['characters'](feup34, 0x0, h43ji - cr8a06), cr8a06 = h43ji;
    }
  }function pus$e(n$fsue, p3jh4) {
    for (; n$fsue >= spfu$e && (p3jh4 = _nsvk['exec'](x7qloi));) uv$e = p3jh4['index'], spfu$e = uv$e + p3jh4[0x0]['length'], lqmoih['lineNumber']++;lqmoih['columnNumber'] = n$fsue - uv$e + 0x1;
  }for (var uv$e = 0x0, spfu$e = 0x0, _nsvk = /.*(?:\r\n?|\n)|.*$/g, lqmoih = vsa_kn['locator'], pe4u$f = [{ 'currentNSMap': mqhilo }], ry108b = {}, cr8a06 = 0x0;;) {
    try {
      var kavn = x7qloi['indexOf']('<', cr8a06);if (0x0 > kavn) {
        if (!x7qloi['substr'](cr8a06)['match'](/^\s*$/)) {
          var w7l9x = vsa_kn['doc'],
              $pseu = w7l9x['createTextNode'](x7qloi['substr'](cr8a06));w7l9x['appendChild']($pseu), vsa_kn['currentElement'] = $pseu;
        }return;
      }switch (kavn > cr8a06 && i3hjmo(kavn), x7qloi['charAt'](kavn + 0x1)) {case '/':
          var td2z59 = x7qloi['indexOf']('>', kavn + 0x3),
              s$n = x7qloi['substring'](kavn + 0x2, td2z59),
              _nva = pe4u$f['pop']();0x0 > td2z59 ? (s$n = x7qloi['substring'](kavn + 0x2)['replace'](/[\s<].*/, ''), f34upe['error']('end tag name: ' + s$n + ' is not complete:' + _nva['tagName']), td2z59 = kavn + 0x1 + s$n['length']) : s$n['match'](/\s</) && (s$n = s$n['replace'](/[\s<].*/, ''), f34upe['error']('end tag name: ' + s$n + ' maybe not complete'), td2z59 = kavn + 0x1 + s$n['length']);var zd2t59 = _nva['localNSMap'],
              nvk_6 = _nva['tagName'] == s$n,
              phfj = nvk_6 || _nva['tagName'] && _nva['tagName']['toLowerCase']() == s$n['toLowerCase']();if (phfj) {
            if (vsa_kn['endElement'](_nva['uri'], _nva['localName'], s$n), zd2t59) {
              for (var z9xg in zd2t59) vsa_kn['endPrefixMapping'](z9xg);
            }nvk_6 || f34upe['fatalError']('end tag name: ' + s$n + ' is not match the current start tagName:' + _nva['tagName']);
          } else pe4u$f['push'](_nva);td2z59++;break;case '?':
          lqmoih && pus$e(kavn), td2z59 = umio(x7qloi, kavn, vsa_kn);break;case '!':
          lqmoih && pus$e(kavn), td2z59 = uqlmxo(x7qloi, kavn, vsa_kn, f34upe);break;default:
          lqmoih && pus$e(kavn);var vk6_na = new urb8y(),
              lxomiq = pe4u$f[pe4u$f['length'] - 0x1]['currentNSMap'],
              td2z59 = ug7lw9(x7qloi, kavn, vk6_na, lxomiq, mohil, f34upe),
              olxiq = vk6_na['length'];if (!vk6_na['closed'] && ugq7wlx(x7qloi, td2z59, vk6_na['tagName'], ry108b) && (vk6_na['closed'] = !0x0, cavk['nbsp'] || f34upe['warning']('unclosed xml attribute')), lqmoih && olxiq) {
            for (var jimo3h = us$_nkv(lqmoih, {}), j4mp = 0x0; olxiq > j4mp; j4mp++) {
              var xlqiom = vk6_na[j4mp];pus$e(xlqiom['offset']), xlqiom['locator'] = us$_nkv(lqmoih, {});
            }vsa_kn['locator'] = jimo3h, u_6krc(vk6_na, vsa_kn, lxomiq) && pe4u$f['push'](vk6_na), vsa_kn['locator'] = lqmoih;
          } else u_6krc(vk6_na, vsa_kn, lxomiq) && pe4u$f['push'](vk6_na);'http://www.w3.org/1999/xhtml' !== vk6_na['uri'] || vk6_na['closed'] ? td2z59++ : td2z59 = umlhoiq(x7qloi, td2z59, vk6_na['tagName'], mohil, vsa_kn);}
    } catch ($pfesu) {
      f34upe['error']('element parse error: ' + $pfesu), td2z59 = -0x1;
    }td2z59 > cr8a06 ? cr8a06 = td2z59 : i3hjmo(Math['max'](kavn, cr8a06) + 0x1);
  }
}function us$_nkv(ixq7, w5gdz) {
  return w5gdz['lineNumber'] = ixq7['lineNumber'], w5gdz['columnNumber'] = ixq7['columnNumber'], w5gdz;
}function ug7lw9(qolxw, o3imhj, ohm3ji, r6k0c, eunsf$, zd5t2) {
  for (var kra, cavk_6, jfup43 = ++o3imhj, $nvuse = uuep34;;) {
    var ih3jo = qolxw['charAt'](jfup43);switch (ih3jo) {case '=':
        if ($nvuse === urk6c0a) kra = qolxw['slice'](o3imhj, jfup43), $nvuse = uev;else {
          if ($nvuse !== uvc_k6) throw new Error('attribute equal must after attrName');$nvuse = uev;
        }break;case '\x27':case '\x22':
        if ($nvuse === uev || $nvuse === urk6c0a) {
          if ($nvuse === urk6c0a && (zd5t2['warning']('attribute value must after "="'), kra = qolxw['slice'](o3imhj, jfup43)), o3imhj = jfup43 + 0x1, jfup43 = qolxw['indexOf'](ih3jo, o3imhj), !(jfup43 > 0x0)) throw new Error('attribute value no end \'' + ih3jo + '\' match');cavk_6 = qolxw['slice'](o3imhj, jfup43)['replace'](/&#?\w+;/g, eunsf$), ohm3ji['add'](kra, cavk_6, o3imhj - 0x1), $nvuse = uu34jp;
        } else {
          if ($nvuse != usen_v$) throw new Error('attribute value must after "="');cavk_6 = qolxw['slice'](o3imhj, jfup43)['replace'](/&#?\w+;/g, eunsf$), ohm3ji['add'](kra, cavk_6, o3imhj), zd5t2['warning']('attribute "' + kra + '" missed start quot(' + ih3jo + ')!!'), o3imhj = jfup43 + 0x1, $nvuse = uu34jp;
        }break;case '/':
        switch ($nvuse) {case uuep34:
            ohm3ji['setTagName'](qolxw['slice'](o3imhj, jfup43));case uu34jp:case upe$4uf:case ug5d:
            $nvuse = ug5d, ohm3ji['closed'] = !0x0;case usen_v$:case urk6c0a:case uvc_k6:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return zd5t2['error']('unexpected end of input'), $nvuse == uuep34 && ohm3ji['setTagName'](qolxw['slice'](o3imhj, jfup43)), jfup43;case '>':
        switch ($nvuse) {case uuep34:
            ohm3ji['setTagName'](qolxw['slice'](o3imhj, jfup43));case uu34jp:case upe$4uf:case ug5d:
            break;case usen_v$:case urk6c0a:
            cavk_6 = qolxw['slice'](o3imhj, jfup43), '/' === cavk_6['slice'](-0x1) && (ohm3ji['closed'] = !0x0, cavk_6 = cavk_6['slice'](0x0, -0x1));case uvc_k6:
            $nvuse === uvc_k6 && (cavk_6 = kra), $nvuse == usen_v$ ? (zd5t2['warning']('attribute "' + cavk_6 + '" missed quot(")!!'), ohm3ji['add'](kra, cavk_6['replace'](/&#?\w+;/g, eunsf$), o3imhj)) : ('http://www.w3.org/1999/xhtml' === r6k0c[''] && cavk_6['match'](/^(?:disabled|checked|selected)$/i) || zd5t2['warning']('attribute "' + cavk_6 + '" missed value!! "' + cavk_6 + '" instead!!'), ohm3ji['add'](cavk_6, cavk_6, o3imhj));break;case uev:
            throw new Error('attribute value missed!!');}return jfup43;case '\u0080':
        ih3jo = '\x20';default:
        if ('\x20' >= ih3jo) switch ($nvuse) {case uuep34:
            ohm3ji['setTagName'](qolxw['slice'](o3imhj, jfup43)), $nvuse = upe$4uf;break;case urk6c0a:
            kra = qolxw['slice'](o3imhj, jfup43), $nvuse = uvc_k6;break;case usen_v$:
            var cavk_6 = qolxw['slice'](o3imhj, jfup43)['replace'](/&#?\w+;/g, eunsf$);zd5t2['warning']('attribute "' + cavk_6 + '" missed quot(")!!'), ohm3ji['add'](kra, cavk_6, o3imhj);case uu34jp:
            $nvuse = upe$4uf;} else switch ($nvuse) {case uvc_k6:
            {
              ohm3ji['tagName'];
            }'http://www.w3.org/1999/xhtml' === r6k0c[''] && kra['match'](/^(?:disabled|checked|selected)$/i) || zd5t2['warning']('attribute "' + kra + '" missed value!! "' + kra + '" instead2!!'), ohm3ji['add'](kra, kra, o3imhj), o3imhj = jfup43, $nvuse = urk6c0a;break;case uu34jp:
            zd5t2['warning']('attribute space is required"' + kra + '\x22!!');case upe$4uf:
            $nvuse = urk6c0a, o3imhj = jfup43;break;case uev:
            $nvuse = usen_v$, o3imhj = jfup43;break;case ug5d:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}jfup43++;
  }
}function u_6krc(lmqhi, rc1680, e$_nsv) {
  for (var lxi7q = lmqhi['tagName'], us$fne = null, lqxom = lmqhi['length']; lqxom--;) {
    var lh = lmqhi[lqxom],
        e$un = lh['qName'],
        j43im = lh['value'],
        c0168r = e$un['indexOf'](':');if (c0168r > 0x0) var qmolhi = lh['prefix'] = e$un['slice'](0x0, c0168r),
        vuse = e$un['slice'](c0168r + 0x1),
        _sav = 'xmlns' === qmolhi && vuse;else vuse = e$un, qmolhi = null, _sav = 'xmlns' === e$un && '';lh['localName'] = vuse, _sav !== !0x1 && (null == us$fne && (us$fne = {}, uuj4fp3(e$_nsv, e$_nsv = {})), e$_nsv[_sav] = us$fne[_sav] = j43im, lh['uri'] = 'http://www.w3.org/2000/xmlns/', rc1680['startPrefixMapping'](_sav, j43im));
  }for (var lqxom = lmqhi['length']; lqxom--;) {
    lh = lmqhi[lqxom];var qmolhi = lh['prefix'];qmolhi && ('xml' === qmolhi && (lh['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== qmolhi && (lh['uri'] = e$_nsv[qmolhi || '']));
  }var c0168r = lxi7q['indexOf'](':');c0168r > 0x0 ? (qmolhi = lmqhi['prefix'] = lxi7q['slice'](0x0, c0168r), vuse = lmqhi['localName'] = lxi7q['slice'](c0168r + 0x1)) : (qmolhi = null, vuse = lmqhi['localName'] = lxi7q);var o3ijh = lmqhi['uri'] = e$_nsv[qmolhi || ''];if (rc1680['startElement'](o3ijh, vuse, lxi7q, lmqhi), !lmqhi['closed']) return lmqhi['currentNSMap'] = e$_nsv, lmqhi['localNSMap'] = us$fne, !0x0;if (rc1680['endElement'](o3ijh, vuse, lxi7q), us$fne) {
    for (qmolhi in us$fne) rc1680['endPrefixMapping'](qmolhi);
  }
}function umlhoiq(psf$u, r1yb08, ps$feu, n_s$ev, jimqho) {
  if (/^(?:script|textarea)$/i['test'](ps$feu)) {
    var lq7wox = psf$u['indexOf']('</' + ps$feu + '>', r1yb08),
        puj3f4 = psf$u['substring'](r1yb08 + 0x1, lq7wox);if (/[&<]/['test'](puj3f4)) return (/^script$/i['test'](ps$feu) ? (jimqho['characters'](puj3f4, 0x0, puj3f4['length']), lq7wox) : (puj3f4 = puj3f4['replace'](/&#?\w+;/g, n_s$ev), jimqho['characters'](puj3f4, 0x0, puj3f4['length']), lq7wox)
    );
  }return r1yb08 + 0x1;
}function ugq7wlx(z9t5g, bc810, q7xwo, kra_c6) {
  var uesnf = kra_c6[q7xwo];return null == uesnf && (uesnf = z9t5g['lastIndexOf']('</' + q7xwo + '>'), bc810 > uesnf && (uesnf = z9t5g['lastIndexOf']('</' + q7xwo)), kra_c6[q7xwo] = uesnf), bc810 > uesnf;
}function uuj4fp3(e$nv_s, $usv) {
  for (var _arc in e$nv_s) $usv[_arc] = e$nv_s[_arc];
}function uqlmxo(gxwql7, l7gx, fue34p, hiqjmo) {
  var _sanv = gxwql7['charAt'](l7gx + 0x2);switch (_sanv) {case '-':
      if ('-' === gxwql7['charAt'](l7gx + 0x3)) {
        var hjpm43 = gxwql7['indexOf']('-->', l7gx + 0x4);return hjpm43 > l7gx ? (fue34p['comment'](gxwql7, l7gx + 0x4, hjpm43 - l7gx - 0x4), hjpm43 + 0x3) : (hiqjmo['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == gxwql7['substr'](l7gx + 0x3, 0x6)) {
        var hjpm43 = gxwql7['indexOf'](']]>', l7gx + 0x9);return fue34p['startCDATA'](), fue34p['characters'](gxwql7, l7gx + 0x9, hjpm43 - l7gx - 0x9), fue34p['endCDATA'](), hjpm43 + 0x3;
      }var d2tz9 = ugtz95(gxwql7, l7gx),
          rb8 = d2tz9['length'];if (rb8 > 0x1 && /!doctype/i['test'](d2tz9[0x0][0x0])) {
        var ns_k = d2tz9[0x1][0x0],
            i3omhj = rb8 > 0x3 && /^public$/i['test'](d2tz9[0x2][0x0]) && d2tz9[0x3][0x0],
            vk6n_a = rb8 > 0x4 && d2tz9[0x4][0x0],
            u$efns = d2tz9[rb8 - 0x1];return fue34p['startDTD'](ns_k, i3omhj && i3omhj['replace'](/^(['"])(.*?)\1$/, '$2'), vk6n_a && vk6n_a['replace'](/^(['"])(.*?)\1$/, '$2')), fue34p['endDTD'](), u$efns['index'] + u$efns[0x0]['length'];
      }}return -0x1;
}function umio(z97xg, t5d9z2, i7loxq) {
  var b0c18 = z97xg['indexOf']('?>', t5d9z2);if (b0c18) {
    var xoqmli = z97xg['substring'](t5d9z2, b0c18)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (xoqmli) {
      {
        xoqmli[0x0]['length'];
      }return i7loxq['processingInstruction'](xoqmli[0x1], xoqmli[0x2]), b0c18 + 0x2;
    }return -0x1;
  }return -0x1;
}function urb8y() {}function ulqmxo(w5g9, qx7loi) {
  return w5g9['__proto__'] = qx7loi, w5g9;
}function ugtz95(c80a, $pue4) {
  var crk_6,
      nf$ue = [],
      v$nsue = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (v$nsue['lastIndex'] = $pue4, v$nsue['exec'](c80a); crk_6 = v$nsue['exec'](c80a);) if (nf$ue['push'](crk_6), crk_6[0x1]) return nf$ue;
}var uwoq7 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ug79xzw = new RegExp('[\\-\\.0-9' + uwoq7['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    ujh4fp3 = new RegExp('^' + uwoq7['source'] + ug79xzw['source'] + '*(?::' + uwoq7['source'] + ug79xzw['source'] + '*)?$'),
    uuep34 = 0x0,
    urk6c0a = 0x1,
    uvc_k6 = 0x2,
    uev = 0x3,
    usen_v$ = 0x4,
    uu34jp = 0x5,
    upe$4uf = 0x6,
    ug5d = 0x7;uk_sv['prototype'] = { 'parse': function (omiqhl, nv_$sk, _snkv) {
    var kvan_6 = this['domBuilder'];kvan_6['startDocument'](), uuj4fp3(nv_$sk, nv_$sk = {}), ulqomx(omiqhl, nv_$sk, _snkv, kvan_6, this['errorHandler']), kvan_6['endDocument']();
  } }, urb8y['prototype'] = { 'setTagName': function (c618r0) {
    if (!ujh4fp3['test'](c618r0)) throw new Error('invalid tagName:' + c618r0);this['tagName'] = c618r0;
  }, 'add': function (jf3p4h, wz97, ufp3) {
    if (!ujh4fp3['test'](jf3p4h)) throw new Error('invalid attribute:' + jf3p4h);this[this['length']++] = { 'qName': jf3p4h, 'value': wz97, 'offset': ufp3 };
  }, 'length': 0x0, 'getLocalName': function (va6_kc) {
    return this[va6_kc]['localName'];
  }, 'getLocator': function (oqimjh) {
    return this[oqimjh]['locator'];
  }, 'getQName': function (yb81r0) {
    return this[yb81r0]['qName'];
  }, 'getURI': function (u4e3fp) {
    return this[u4e3fp]['uri'];
  }, 'getValue': function (ack6r_) {
    return this[ack6r_]['value'];
  } }, ulqmxo({}, ulqmxo['prototype']) instanceof ulqmxo || (ulqmxo = function (nus$f, fesun$) {
  function fe34p() {}fe34p['prototype'] = fesun$, fe34p = new fe34p();for (fesun$ in nus$f) fe34p[fesun$] = nus$f[fesun$];return fe34p;
}), exports['XMLReader'] = uk_sv;