var C = wx.$a;
function ac9_zms() {}function aqsc$vr(scm9z_, yfl60k, lyk, cv_rs, $0lfv) {
  function tdi54j(jdzm4) {
    if (jdzm4 > 0xffff) {
      jdzm4 -= 0x10000;var px2b8o = 0xd800 + (jdzm4 >> 0xa),
          _9qscr = 0xdc00 + (0x3ff & jdzm4);return String['fromCharCode'](px2b8o, _9qscr);
    }return String['fromCharCode'](jdzm4);
  }function htxpbo(h45) {
    var _j9mcz = h45['slice'](0x1, -0x1);return _j9mcz in lyk ? lyk[_j9mcz] : '#' === _j9mcz['charAt'](0x0) ? tdi54j(parseInt(_j9mcz['substr'](0x1)['replace']('x', '0x'))) : ($0lfv['error']('entity not found:' + h45), h45);
  }function tdi45h(j4zdm9) {
    if (j4zdm9 > h5t4i) {
      var oxit5 = scm9z_['substring'](h5t4i, j4zdm9)['replace'](/&#?\w+;/g, htxpbo);ji54d && t45ji(h5t4i), cv_rs['characters'](oxit5, 0x0, j4zdm9 - h5t4i), h5t4i = j4zdm9;
    }
  }function t45ji(qlsrv$, crs_) {
    for (; qlsrv$ >= rvlq$s && (crs_ = j5i4td['exec'](scm9z_));) ebn28p = crs_['index'], rvlq$s = ebn28p + crs_[0x0]['length'], ji54d['lineNumber']++;ji54d['columnNumber'] = qlsrv$ - ebn28p + 0x1;
  }for (var ebn28p = 0x0, rvlq$s = 0x0, j5i4td = /.*(?:\r\n?|\n)|.*$/g, ji54d = cv_rs['locator'], $0vklf = [{ 'currentNSMap': yfl60k }], hpb2xo = {}, h5t4i = 0x0;;) {
    try {
      var p3e28 = scm9z_['indexOf']('<', h5t4i);if (0x0 > p3e28) {
        if (!scm9z_['substr'](h5t4i)['match'](/^\s*$/)) {
          var lqkv = cv_rs['doc'],
              mjz_4 = lqkv['createTextNode'](scm9z_['substr'](h5t4i));lqkv['appendChild'](mjz_4), cv_rs['currentElement'] = mjz_4;
        }return;
      }switch (p3e28 > h5t4i && tdi45h(p3e28), scm9z_['charAt'](p3e28 + 0x1)) {case '/':
          var sr9_cq = scm9z_['indexOf']('>', p3e28 + 0x3),
              q9csr_ = scm9z_['substring'](p3e28 + 0x2, sr9_cq),
              kq$0 = $0vklf['pop']();0x0 > sr9_cq ? (q9csr_ = scm9z_['substring'](p3e28 + 0x2)['replace'](/[\s<].*/, ''), $0lfv['error']('end tag name: ' + q9csr_ + ' is not complete:' + kq$0['tagName']), sr9_cq = p3e28 + 0x1 + q9csr_['length']) : q9csr_['match'](/\s</) && (q9csr_ = q9csr_['replace'](/[\s<].*/, ''), $0lfv['error']('end tag name: ' + q9csr_ + ' maybe not complete'), sr9_cq = p3e28 + 0x1 + q9csr_['length']);var kl0vq$ = kq$0['localNSMap'],
              ykl06 = kq$0['tagName'] == q9csr_,
              _svqcr = ykl06 || kq$0['tagName'] && kq$0['tagName']['toLowerCase']() == q9csr_['toLowerCase']();if (_svqcr) {
            if (cv_rs['endElement'](kq$0['uri'], kq$0['localName'], q9csr_), kl0vq$) {
              for (var oti5 in kl0vq$) cv_rs['endPrefixMapping'](oti5);
            }ykl06 || $0lfv['fatalError']('end tag name: ' + q9csr_ + ' is not match the current start tagName:' + kq$0['tagName']);
          } else $0vklf['push'](kq$0);sr9_cq++;break;case '?':
          ji54d && t45ji(p3e28), sr9_cq = aitohx5(scm9z_, p3e28, cv_rs);break;case '!':
          ji54d && t45ji(p3e28), sr9_cq = acr_qvs(scm9z_, p3e28, cv_rs, $0lfv);break;default:
          ji54d && t45ji(p3e28);var xbohti = new ak61yf7(),
              u17fy6 = $0vklf[$0vklf['length'] - 0x1]['currentNSMap'],
              sr9_cq = ah5tiod(scm9z_, p3e28, xbohti, u17fy6, htxpbo, $0lfv),
              itd45j = xbohti['length'];if (!xbohti['closed'] && adhi5o(scm9z_, sr9_cq, xbohti['tagName'], hpb2xo) && (xbohti['closed'] = !0x0, lyk['nbsp'] || $0lfv['warning']('unclosed xml attribute')), ji54d && itd45j) {
            for (var rvqc$s = afyl06(ji54d, {}), sc_9m = 0x0; itd45j > sc_9m; sc_9m++) {
              var tbhop = xbohti[sc_9m];t45ji(tbhop['offset']), tbhop['locator'] = afyl06(ji54d, {});
            }cv_rs['locator'] = rvqc$s, ad9j4(xbohti, cv_rs, u17fy6) && $0vklf['push'](xbohti), cv_rs['locator'] = ji54d;
          } else ad9j4(xbohti, cv_rs, u17fy6) && $0vklf['push'](xbohti);'http://www.w3.org/1999/xhtml' !== xbohti['uri'] || xbohti['closed'] ? sr9_cq++ : sr9_cq = asrlq(scm9z_, sr9_cq, xbohti['tagName'], htxpbo, cv_rs);}
    } catch (iohxt) {
      $0lfv['error']('element parse error: ' + iohxt), sr9_cq = -0x1;
    }sr9_cq > h5t4i ? h5t4i = sr9_cq : tdi45h(Math['max'](p3e28, h5t4i) + 0x1);
  }
}function afyl06(qlvk, j_9zcm) {
  return j_9zcm['lineNumber'] = qlvk['lineNumber'], j_9zcm['columnNumber'] = qlvk['columnNumber'], j_9zcm;
}function ah5tiod(lv0$r, op8b2x, m_94, rvsc$, j4dmz9, lsrqv) {
  for (var e2g8n3, yf0k, ih5ot = ++op8b2x, hoit5d = av0k$lf;;) {
    var hd5it4 = lv0$r['charAt'](ih5ot);switch (hd5it4) {case '=':
        if (hoit5d === ar$sc) e2g8n3 = lv0$r['slice'](op8b2x, ih5ot), hoit5d = afky$l0;else {
          if (hoit5d !== aj4dmz) throw new Error('attribute equal must after attrName');hoit5d = afky$l0;
        }break;case '\x27':case '\x22':
        if (hoit5d === afky$l0 || hoit5d === ar$sc) {
          if (hoit5d === ar$sc && (lsrqv['warning']('attribute value must after "="'), e2g8n3 = lv0$r['slice'](op8b2x, ih5ot)), op8b2x = ih5ot + 0x1, ih5ot = lv0$r['indexOf'](hd5it4, op8b2x), !(ih5ot > 0x0)) throw new Error('attribute value no end \'' + hd5it4 + '\' match');yf0k = lv0$r['slice'](op8b2x, ih5ot)['replace'](/&#?\w+;/g, j4dmz9), m_94['add'](e2g8n3, yf0k, op8b2x - 0x1), hoit5d = alf0yk$;
        } else {
          if (hoit5d != a_rc9zs) throw new Error('attribute value must after "="');yf0k = lv0$r['slice'](op8b2x, ih5ot)['replace'](/&#?\w+;/g, j4dmz9), m_94['add'](e2g8n3, yf0k, op8b2x), lsrqv['warning']('attribute "' + e2g8n3 + '" missed start quot(' + hd5it4 + ')!!'), op8b2x = ih5ot + 0x1, hoit5d = alf0yk$;
        }break;case '/':
        switch (hoit5d) {case av0k$lf:
            m_94['setTagName'](lv0$r['slice'](op8b2x, ih5ot));case alf0yk$:case abtpoh:case a$ql0kv:
            hoit5d = a$ql0kv, m_94['closed'] = !0x0;case a_rc9zs:case ar$sc:case aj4dmz:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return lsrqv['error']('unexpected end of input'), hoit5d == av0k$lf && m_94['setTagName'](lv0$r['slice'](op8b2x, ih5ot)), ih5ot;case '>':
        switch (hoit5d) {case av0k$lf:
            m_94['setTagName'](lv0$r['slice'](op8b2x, ih5ot));case alf0yk$:case abtpoh:case a$ql0kv:
            break;case a_rc9zs:case ar$sc:
            yf0k = lv0$r['slice'](op8b2x, ih5ot), '/' === yf0k['slice'](-0x1) && (m_94['closed'] = !0x0, yf0k = yf0k['slice'](0x0, -0x1));case aj4dmz:
            hoit5d === aj4dmz && (yf0k = e2g8n3), hoit5d == a_rc9zs ? (lsrqv['warning']('attribute "' + yf0k + '" missed quot(")!!'), m_94['add'](e2g8n3, yf0k['replace'](/&#?\w+;/g, j4dmz9), op8b2x)) : ('http://www.w3.org/1999/xhtml' === rvsc$[''] && yf0k['match'](/^(?:disabled|checked|selected)$/i) || lsrqv['warning']('attribute "' + yf0k + '" missed value!! "' + yf0k + '" instead!!'), m_94['add'](yf0k, yf0k, op8b2x));break;case afky$l0:
            throw new Error('attribute value missed!!');}return ih5ot;case '\u0080':
        hd5it4 = '\x20';default:
        if ('\x20' >= hd5it4) switch (hoit5d) {case av0k$lf:
            m_94['setTagName'](lv0$r['slice'](op8b2x, ih5ot)), hoit5d = abtpoh;break;case ar$sc:
            e2g8n3 = lv0$r['slice'](op8b2x, ih5ot), hoit5d = aj4dmz;break;case a_rc9zs:
            var yf0k = lv0$r['slice'](op8b2x, ih5ot)['replace'](/&#?\w+;/g, j4dmz9);lsrqv['warning']('attribute "' + yf0k + '" missed quot(")!!'), m_94['add'](e2g8n3, yf0k, op8b2x);case alf0yk$:
            hoit5d = abtpoh;} else switch (hoit5d) {case aj4dmz:
            {
              m_94['tagName'];
            }'http://www.w3.org/1999/xhtml' === rvsc$[''] && e2g8n3['match'](/^(?:disabled|checked|selected)$/i) || lsrqv['warning']('attribute "' + e2g8n3 + '" missed value!! "' + e2g8n3 + '" instead2!!'), m_94['add'](e2g8n3, e2g8n3, op8b2x), op8b2x = ih5ot, hoit5d = ar$sc;break;case alf0yk$:
            lsrqv['warning']('attribute space is required"' + e2g8n3 + '\x22!!');case abtpoh:
            hoit5d = ar$sc, op8b2x = ih5ot;break;case afky$l0:
            hoit5d = a_rc9zs, op8b2x = ih5ot;break;case a$ql0kv:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}ih5ot++;
  }
}function ad9j4(bpxho, $0lvfk, qr9s_) {
  for (var cr_s = bpxho['tagName'], l0ky6 = null, z_4j9 = bpxho['length']; z_4j9--;) {
    var zjc9m_ = bpxho[z_4j9],
        z4md9 = zjc9m_['qName'],
        _sq9rc = zjc9m_['value'],
        t5xi = z4md9['indexOf'](':');if (t5xi > 0x0) var xb = zjc9m_['prefix'] = z4md9['slice'](0x0, t5xi),
        q_9c = z4md9['slice'](t5xi + 0x1),
        i5h4t = 'xmlns' === xb && q_9c;else q_9c = z4md9, xb = null, i5h4t = 'xmlns' === z4md9 && '';zjc9m_['localName'] = q_9c, i5h4t !== !0x1 && (null == l0ky6 && (l0ky6 = {}, a$l0qr(qr9s_, qr9s_ = {})), qr9s_[i5h4t] = l0ky6[i5h4t] = _sq9rc, zjc9m_['uri'] = 'http://www.w3.org/2000/xmlns/', $0lvfk['startPrefixMapping'](i5h4t, _sq9rc));
  }for (var z_4j9 = bpxho['length']; z_4j9--;) {
    zjc9m_ = bpxho[z_4j9];var xb = zjc9m_['prefix'];xb && ('xml' === xb && (zjc9m_['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== xb && (zjc9m_['uri'] = qr9s_[xb || '']));
  }var t5xi = cr_s['indexOf'](':');t5xi > 0x0 ? (xb = bpxho['prefix'] = cr_s['slice'](0x0, t5xi), q_9c = bpxho['localName'] = cr_s['slice'](t5xi + 0x1)) : (xb = null, q_9c = bpxho['localName'] = cr_s);var _r9zcs = bpxho['uri'] = qr9s_[xb || ''];if ($0lvfk['startElement'](_r9zcs, q_9c, cr_s, bpxho), !bpxho['closed']) return bpxho['currentNSMap'] = qr9s_, bpxho['localNSMap'] = l0ky6, !0x0;if ($0lvfk['endElement'](_r9zcs, q_9c, cr_s), l0ky6) {
    for (xb in l0ky6) $0lvfk['endPrefixMapping'](xb);
  }
}function asrlq(mjc_, fk$0v, _scrv, m5j4zd, bthpxo) {
  if (/^(?:script|textarea)$/i['test'](_scrv)) {
    var e3g8n2 = mjc_['indexOf']('</' + _scrv + '>', fk$0v),
        dji54m = mjc_['substring'](fk$0v + 0x1, e3g8n2);if (/[&<]/['test'](dji54m)) return (/^script$/i['test'](_scrv) ? (bthpxo['characters'](dji54m, 0x0, dji54m['length']), e3g8n2) : (dji54m = dji54m['replace'](/&#?\w+;/g, m5j4zd), bthpxo['characters'](dji54m, 0x0, dji54m['length']), e3g8n2)
    );
  }return fk$0v + 0x1;
}function adhi5o(di54h, srq_cv, _vqcsr, rvls$) {
  var $crq = rvls$[_vqcsr];return null == $crq && ($crq = di54h['lastIndexOf']('</' + _vqcsr + '>'), srq_cv > $crq && ($crq = di54h['lastIndexOf']('</' + _vqcsr)), rvls$[_vqcsr] = $crq), srq_cv > $crq;
}function a$l0qr(bxthop, l0fk$v) {
  for (var wu67 in bxthop) l0fk$v[wu67] = bxthop[wu67];
}function acr_qvs(pne83, $klv0, xphbto, dhi54) {
  var fu61y = pne83['charAt']($klv0 + 0x2);switch (fu61y) {case '-':
      if ('-' === pne83['charAt']($klv0 + 0x3)) {
        var dt45i = pne83['indexOf']('-->', $klv0 + 0x4);return dt45i > $klv0 ? (xphbto['comment'](pne83, $klv0 + 0x4, dt45i - $klv0 - 0x4), dt45i + 0x3) : (dhi54['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == pne83['substr']($klv0 + 0x3, 0x6)) {
        var dt45i = pne83['indexOf'](']]>', $klv0 + 0x9);return xphbto['startCDATA'](), xphbto['characters'](pne83, $klv0 + 0x9, dt45i - $klv0 - 0x9), xphbto['endCDATA'](), dt45i + 0x3;
      }var k0l$f = atbixoh(pne83, $klv0),
          _m9sc = k0l$f['length'];if (_m9sc > 0x1 && /!doctype/i['test'](k0l$f[0x0][0x0])) {
        var zcms_ = k0l$f[0x1][0x0],
            xp2bho = _m9sc > 0x3 && /^public$/i['test'](k0l$f[0x2][0x0]) && k0l$f[0x3][0x0],
            thx5o = _m9sc > 0x4 && k0l$f[0x4][0x0],
            v$scq = k0l$f[_m9sc - 0x1];return xphbto['startDTD'](zcms_, xp2bho && xp2bho['replace'](/^(['"])(.*?)\1$/, '$2'), thx5o && thx5o['replace'](/^(['"])(.*?)\1$/, '$2')), xphbto['endDTD'](), v$scq['index'] + v$scq[0x0]['length'];
      }}return -0x1;
}function aitohx5(di45tj, fky$, sz_m9) {
  var po2x8 = di45tj['indexOf']('?>', fky$);if (po2x8) {
    var k70f6y = di45tj['substring'](fky$, po2x8)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (k70f6y) {
      {
        k70f6y[0x0]['length'];
      }return sz_m9['processingInstruction'](k70f6y[0x1], k70f6y[0x2]), po2x8 + 0x2;
    }return -0x1;
  }return -0x1;
}function ak61yf7() {}function az_9m4(c9sr_z, bpxoht) {
  return c9sr_z['__proto__'] = bpxoht, c9sr_z;
}function atbixoh(thdi5o, md4zj) {
  var ep2n8b,
      z_cj = [],
      l$vkf = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (l$vkf['lastIndex'] = md4zj, l$vkf['exec'](thdi5o); ep2n8b = l$vkf['exec'](thdi5o);) if (z_cj['push'](ep2n8b), ep2n8b[0x1]) return z_cj;
}var ar_cvqs = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a_rc9sz = new RegExp('[\\-\\.0-9' + ar_cvqs['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    azjc9 = new RegExp('^' + ar_cvqs['source'] + a_rc9sz['source'] + '*(?::' + ar_cvqs['source'] + a_rc9sz['source'] + '*)?$'),
    av0k$lf = 0x0,
    ar$sc = 0x1,
    aj4dmz = 0x2,
    afky$l0 = 0x3,
    a_rc9zs = 0x4,
    alf0yk$ = 0x5,
    abtpoh = 0x6,
    a$ql0kv = 0x7;ac9_zms['prototype'] = { 'parse': function (hdi5to, m9j4d, pb2hox) {
    var c9m_j = this['domBuilder'];c9m_j['startDocument'](), a$l0qr(m9j4d, m9j4d = {}), aqsc$vr(hdi5to, m9j4d, pb2hox, c9m_j, this['errorHandler']), c9m_j['endDocument']();
  } }, ak61yf7['prototype'] = { 'setTagName': function (v0$rq) {
    if (!azjc9['test'](v0$rq)) throw new Error('invalid tagName:' + v0$rq);this['tagName'] = v0$rq;
  }, 'add': function (fk0$l, j_9mc, srl$vq) {
    if (!azjc9['test'](fk0$l)) throw new Error('invalid attribute:' + fk0$l);this[this['length']++] = { 'qName': fk0$l, 'value': j_9mc, 'offset': srl$vq };
  }, 'length': 0x0, 'getLocalName': function (l0qk) {
    return this[l0qk]['localName'];
  }, 'getLocator': function (jd4z9m) {
    return this[jd4z9m]['locator'];
  }, 'getQName': function (cm_z9j) {
    return this[cm_z9j]['qName'];
  }, 'getURI': function (bpxtoh) {
    return this[bpxtoh]['uri'];
  }, 'getValue': function (vql0r$) {
    return this[vql0r$]['value'];
  } }, az_9m4({}, az_9m4['prototype']) instanceof az_9m4 || (az_9m4 = function (ithxo, l0rqv) {
  function _mz9cs() {}_mz9cs['prototype'] = l0rqv, _mz9cs = new _mz9cs();for (l0rqv in ithxo) _mz9cs[l0rqv] = ithxo[l0rqv];return _mz9cs;
}), exports['XMLReader'] = ac9_zms;