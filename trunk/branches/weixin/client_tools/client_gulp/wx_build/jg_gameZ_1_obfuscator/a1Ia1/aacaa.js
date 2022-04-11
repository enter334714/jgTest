var C = wx.$a;
function amj_9zc() {}function ami45dj(qr$svc, $qk0l, scv$q, oihtx5, zd5j) {
  function c9m_jz(u176fy) {
    if (u176fy > 0xffff) {
      u176fy -= 0x10000;var hi5t4d = 0xd800 + (u176fy >> 0xa),
          ixo5t = 0xdc00 + (0x3ff & u176fy);return String['fromCharCode'](hi5t4d, ixo5t);
    }return String['fromCharCode'](u176fy);
  }function yf706(rslqv) {
    var zsr = rslqv['slice'](0x1, -0x1);return zsr in scv$q ? scv$q[zsr] : '#' === zsr['charAt'](0x0) ? c9m_jz(parseInt(zsr['substr'](0x1)['replace']('x', '0x'))) : (zd5j['error']('entity not found:' + rslqv), rslqv);
  }function xhibot(qrl$v0) {
    if (qrl$v0 > xb2oph) {
      var kfy176 = qr$svc['substring'](xb2oph, qrl$v0)['replace'](/&#?\w+;/g, yf706);rc_qv && cmsz(xb2oph), oihtx5['characters'](kfy176, 0x0, qrl$v0 - xb2oph), xb2oph = qrl$v0;
    }
  }function cmsz(thobx, jzm5) {
    for (; thobx >= $kfl0v && (jzm5 = mj4d5z['exec'](qr$svc));) t5ido = jzm5['index'], $kfl0v = t5ido + jzm5[0x0]['length'], rc_qv['lineNumber']++;rc_qv['columnNumber'] = thobx - t5ido + 0x1;
  }for (var t5ido = 0x0, $kfl0v = 0x0, mj4d5z = /.*(?:\r\n?|\n)|.*$/g, rc_qv = oihtx5['locator'], z54jd = [{ 'currentNSMap': $qk0l }], $vr0q = {}, xb2oph = 0x0;;) {
    try {
      var csv_rq = qr$svc['indexOf']('<', xb2oph);if (0x0 > csv_rq) {
        if (!qr$svc['substr'](xb2oph)['match'](/^\s*$/)) {
          var g3n82 = oihtx5['doc'],
              p3n2e8 = g3n82['createTextNode'](qr$svc['substr'](xb2oph));g3n82['appendChild'](p3n2e8), oihtx5['currentElement'] = p3n2e8;
        }return;
      }switch (csv_rq > xb2oph && xhibot(csv_rq), qr$svc['charAt'](csv_rq + 0x1)) {case '/':
          var tio5hx = qr$svc['indexOf']('>', csv_rq + 0x3),
              y6fk0l = qr$svc['substring'](csv_rq + 0x2, tio5hx),
              l0fkv = z54jd['pop']();0x0 > tio5hx ? (y6fk0l = qr$svc['substring'](csv_rq + 0x2)['replace'](/[\s<].*/, ''), zd5j['error']('end tag name: ' + y6fk0l + ' is not complete:' + l0fkv['tagName']), tio5hx = csv_rq + 0x1 + y6fk0l['length']) : y6fk0l['match'](/\s</) && (y6fk0l = y6fk0l['replace'](/[\s<].*/, ''), zd5j['error']('end tag name: ' + y6fk0l + ' maybe not complete'), tio5hx = csv_rq + 0x1 + y6fk0l['length']);var z_9rcs = l0fkv['localNSMap'],
              uw7y6 = l0fkv['tagName'] == y6fk0l,
              e8ng2 = uw7y6 || l0fkv['tagName'] && l0fkv['tagName']['toLowerCase']() == y6fk0l['toLowerCase']();if (e8ng2) {
            if (oihtx5['endElement'](l0fkv['uri'], l0fkv['localName'], y6fk0l), z_9rcs) {
              for (var q$svcr in z_9rcs) oihtx5['endPrefixMapping'](q$svcr);
            }uw7y6 || zd5j['fatalError']('end tag name: ' + y6fk0l + ' is not match the current start tagName:' + l0fkv['tagName']);
          } else z54jd['push'](l0fkv);tio5hx++;break;case '?':
          rc_qv && cmsz(csv_rq), tio5hx = adm54jz(qr$svc, csv_rq, oihtx5);break;case '!':
          rc_qv && cmsz(csv_rq), tio5hx = alkv0f$(qr$svc, csv_rq, oihtx5, zd5j);break;default:
          rc_qv && cmsz(csv_rq);var rszc_9 = new al0$kv(),
              hixo = z54jd[z54jd['length'] - 0x1]['currentNSMap'],
              tio5hx = az9_mcj(qr$svc, csv_rq, rszc_9, hixo, yf706, zd5j),
              lk0f6y = rszc_9['length'];if (!rszc_9['closed'] && av0fl(qr$svc, tio5hx, rszc_9['tagName'], $vr0q) && (rszc_9['closed'] = !0x0, scv$q['nbsp'] || zd5j['warning']('unclosed xml attribute')), rc_qv && lk0f6y) {
            for (var $fy0lk = aw1y6u(rc_qv, {}), np382 = 0x0; lk0f6y > np382; np382++) {
              var xi5ho = rszc_9[np382];cmsz(xi5ho['offset']), xi5ho['locator'] = aw1y6u(rc_qv, {});
            }oihtx5['locator'] = $fy0lk, ak0lfv(rszc_9, oihtx5, hixo) && z54jd['push'](rszc_9), oihtx5['locator'] = rc_qv;
          } else ak0lfv(rszc_9, oihtx5, hixo) && z54jd['push'](rszc_9);'http://www.w3.org/1999/xhtml' !== rszc_9['uri'] || rszc_9['closed'] ? tio5hx++ : tio5hx = ak6l0fy(qr$svc, tio5hx, rszc_9['tagName'], yf706, oihtx5);}
    } catch (zc9m) {
      zd5j['error']('element parse error: ' + zc9m), tio5hx = -0x1;
    }tio5hx > xb2oph ? xb2oph = tio5hx : xhibot(Math['max'](csv_rq, xb2oph) + 0x1);
  }
}function aw1y6u(p8xbo2, o8) {
  return o8['lineNumber'] = p8xbo2['lineNumber'], o8['columnNumber'] = p8xbo2['columnNumber'], o8;
}function az9_mcj(ohibtx, scq_r9, npb28x, enp8b, k$lq, t54hid) {
  for (var d45jim, mz49dj, hi54td = ++scq_r9, eng283 = akf617y;;) {
    var j4m_z9 = ohibtx['charAt'](hi54td);switch (j4m_z9) {case '=':
        if (eng283 === adjt) d45jim = ohibtx['slice'](scq_r9, hi54td), eng283 = af0$lyk;else {
          if (eng283 !== aj5id4t) throw new Error('attribute equal must after attrName');eng283 = af0$lyk;
        }break;case '\x27':case '\x22':
        if (eng283 === af0$lyk || eng283 === adjt) {
          if (eng283 === adjt && (t54hid['warning']('attribute value must after "="'), d45jim = ohibtx['slice'](scq_r9, hi54td)), scq_r9 = hi54td + 0x1, hi54td = ohibtx['indexOf'](j4m_z9, scq_r9), !(hi54td > 0x0)) throw new Error('attribute value no end \'' + j4m_z9 + '\' match');mz49dj = ohibtx['slice'](scq_r9, hi54td)['replace'](/&#?\w+;/g, k$lq), npb28x['add'](d45jim, mz49dj, scq_r9 - 0x1), eng283 = asl$rq;
        } else {
          if (eng283 != ape2bn8) throw new Error('attribute value must after "="');mz49dj = ohibtx['slice'](scq_r9, hi54td)['replace'](/&#?\w+;/g, k$lq), npb28x['add'](d45jim, mz49dj, scq_r9), t54hid['warning']('attribute "' + d45jim + '" missed start quot(' + j4m_z9 + ')!!'), scq_r9 = hi54td + 0x1, eng283 = asl$rq;
        }break;case '/':
        switch (eng283) {case akf617y:
            npb28x['setTagName'](ohibtx['slice'](scq_r9, hi54td));case asl$rq:case aqk0lv$:case axitob:
            eng283 = axitob, npb28x['closed'] = !0x0;case ape2bn8:case adjt:case aj5id4t:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return t54hid['error']('unexpected end of input'), eng283 == akf617y && npb28x['setTagName'](ohibtx['slice'](scq_r9, hi54td)), hi54td;case '>':
        switch (eng283) {case akf617y:
            npb28x['setTagName'](ohibtx['slice'](scq_r9, hi54td));case asl$rq:case aqk0lv$:case axitob:
            break;case ape2bn8:case adjt:
            mz49dj = ohibtx['slice'](scq_r9, hi54td), '/' === mz49dj['slice'](-0x1) && (npb28x['closed'] = !0x0, mz49dj = mz49dj['slice'](0x0, -0x1));case aj5id4t:
            eng283 === aj5id4t && (mz49dj = d45jim), eng283 == ape2bn8 ? (t54hid['warning']('attribute "' + mz49dj + '" missed quot(")!!'), npb28x['add'](d45jim, mz49dj['replace'](/&#?\w+;/g, k$lq), scq_r9)) : ('http://www.w3.org/1999/xhtml' === enp8b[''] && mz49dj['match'](/^(?:disabled|checked|selected)$/i) || t54hid['warning']('attribute "' + mz49dj + '" missed value!! "' + mz49dj + '" instead!!'), npb28x['add'](mz49dj, mz49dj, scq_r9));break;case af0$lyk:
            throw new Error('attribute value missed!!');}return hi54td;case '\u0080':
        j4m_z9 = '\x20';default:
        if ('\x20' >= j4m_z9) switch (eng283) {case akf617y:
            npb28x['setTagName'](ohibtx['slice'](scq_r9, hi54td)), eng283 = aqk0lv$;break;case adjt:
            d45jim = ohibtx['slice'](scq_r9, hi54td), eng283 = aj5id4t;break;case ape2bn8:
            var mz49dj = ohibtx['slice'](scq_r9, hi54td)['replace'](/&#?\w+;/g, k$lq);t54hid['warning']('attribute "' + mz49dj + '" missed quot(")!!'), npb28x['add'](d45jim, mz49dj, scq_r9);case asl$rq:
            eng283 = aqk0lv$;} else switch (eng283) {case aj5id4t:
            {
              npb28x['tagName'];
            }'http://www.w3.org/1999/xhtml' === enp8b[''] && d45jim['match'](/^(?:disabled|checked|selected)$/i) || t54hid['warning']('attribute "' + d45jim + '" missed value!! "' + d45jim + '" instead2!!'), npb28x['add'](d45jim, d45jim, scq_r9), scq_r9 = hi54td, eng283 = adjt;break;case asl$rq:
            t54hid['warning']('attribute space is required"' + d45jim + '\x22!!');case aqk0lv$:
            eng283 = adjt, scq_r9 = hi54td;break;case af0$lyk:
            eng283 = ape2bn8, scq_r9 = hi54td;break;case axitob:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}hi54td++;
  }
}function ak0lfv(hpbx2, qrv$ls, l0q$) {
  for (var yf6l = hpbx2['tagName'], cvq_r = null, thido = hpbx2['length']; thido--;) {
    var obhi = hpbx2[thido],
        gn2e3 = obhi['qName'],
        idh5to = obhi['value'],
        p2xobh = gn2e3['indexOf'](':');if (p2xobh > 0x0) var l$0qr = obhi['prefix'] = gn2e3['slice'](0x0, p2xobh),
        y167f = gn2e3['slice'](p2xobh + 0x1),
        be8np2 = 'xmlns' === l$0qr && y167f;else y167f = gn2e3, l$0qr = null, be8np2 = 'xmlns' === gn2e3 && '';obhi['localName'] = y167f, be8np2 !== !0x1 && (null == cvq_r && (cvq_r = {}, a_jzm4(l0q$, l0q$ = {})), l0q$[be8np2] = cvq_r[be8np2] = idh5to, obhi['uri'] = 'http://www.w3.org/2000/xmlns/', qrv$ls['startPrefixMapping'](be8np2, idh5to));
  }for (var thido = hpbx2['length']; thido--;) {
    obhi = hpbx2[thido];var l$0qr = obhi['prefix'];l$0qr && ('xml' === l$0qr && (obhi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== l$0qr && (obhi['uri'] = l0q$[l$0qr || '']));
  }var p2xobh = yf6l['indexOf'](':');p2xobh > 0x0 ? (l$0qr = hpbx2['prefix'] = yf6l['slice'](0x0, p2xobh), y167f = hpbx2['localName'] = yf6l['slice'](p2xobh + 0x1)) : (l$0qr = null, y167f = hpbx2['localName'] = yf6l);var j4z9m_ = hpbx2['uri'] = l0q$[l$0qr || ''];if (qrv$ls['startElement'](j4z9m_, y167f, yf6l, hpbx2), !hpbx2['closed']) return hpbx2['currentNSMap'] = l0q$, hpbx2['localNSMap'] = cvq_r, !0x0;if (qrv$ls['endElement'](j4z9m_, y167f, yf6l), cvq_r) {
    for (l$0qr in cvq_r) qrv$ls['endPrefixMapping'](l$0qr);
  }
}function ak6l0fy(p2xb8, c9_sq, tdoi, vr$qs, j_9mz) {
  if (/^(?:script|textarea)$/i['test'](tdoi)) {
    var vqlk$ = p2xb8['indexOf']('</' + tdoi + '>', c9_sq),
        n283p = p2xb8['substring'](c9_sq + 0x1, vqlk$);if (/[&<]/['test'](n283p)) return (/^script$/i['test'](tdoi) ? (j_9mz['characters'](n283p, 0x0, n283p['length']), vqlk$) : (n283p = n283p['replace'](/&#?\w+;/g, vr$qs), j_9mz['characters'](n283p, 0x0, n283p['length']), vqlk$)
    );
  }return c9_sq + 0x1;
}function av0fl(v0lqk$, x5iht, d4z9mj, qr9_c) {
  var j49zmd = qr9_c[d4z9mj];return null == j49zmd && (j49zmd = v0lqk$['lastIndexOf']('</' + d4z9mj + '>'), x5iht > j49zmd && (j49zmd = v0lqk$['lastIndexOf']('</' + d4z9mj)), qr9_c[d4z9mj] = j49zmd), x5iht > j49zmd;
}function a_jzm4(xtohp, cqvs_) {
  for (var lf0$kv in xtohp) cqvs_[lf0$kv] = xtohp[lf0$kv];
}function alkv0f$(xb2oh, xobiht, n823e, pnbe2) {
  var vk = xb2oh['charAt'](xobiht + 0x2);switch (vk) {case '-':
      if ('-' === xb2oh['charAt'](xobiht + 0x3)) {
        var m_j4z9 = xb2oh['indexOf']('-->', xobiht + 0x4);return m_j4z9 > xobiht ? (n823e['comment'](xb2oh, xobiht + 0x4, m_j4z9 - xobiht - 0x4), m_j4z9 + 0x3) : (pnbe2['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == xb2oh['substr'](xobiht + 0x3, 0x6)) {
        var m_j4z9 = xb2oh['indexOf'](']]>', xobiht + 0x9);return n823e['startCDATA'](), n823e['characters'](xb2oh, xobiht + 0x9, m_j4z9 - xobiht - 0x9), n823e['endCDATA'](), m_j4z9 + 0x3;
      }var ne82bp = ar9zsc(xb2oh, xobiht),
          s_zc9 = ne82bp['length'];if (s_zc9 > 0x1 && /!doctype/i['test'](ne82bp[0x0][0x0])) {
        var _9qrsc = ne82bp[0x1][0x0],
            rcvq_ = s_zc9 > 0x3 && /^public$/i['test'](ne82bp[0x2][0x0]) && ne82bp[0x3][0x0],
            k671fy = s_zc9 > 0x4 && ne82bp[0x4][0x0],
            sc_z9r = ne82bp[s_zc9 - 0x1];return n823e['startDTD'](_9qrsc, rcvq_ && rcvq_['replace'](/^(['"])(.*?)\1$/, '$2'), k671fy && k671fy['replace'](/^(['"])(.*?)\1$/, '$2')), n823e['endDTD'](), sc_z9r['index'] + sc_z9r[0x0]['length'];
      }}return -0x1;
}function adm54jz(jdmz, jmid4, _z4j9) {
  var f6k07 = jdmz['indexOf']('?>', jmid4);if (f6k07) {
    var qr_sc9 = jdmz['substring'](jmid4, f6k07)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (qr_sc9) {
      {
        qr_sc9[0x0]['length'];
      }return _z4j9['processingInstruction'](qr_sc9[0x1], qr_sc9[0x2]), f6k07 + 0x2;
    }return -0x1;
  }return -0x1;
}function al0$kv() {}function ae82g3n(_s9rqc, v$lf0k) {
  return _s9rqc['__proto__'] = v$lf0k, _s9rqc;
}function ar9zsc(rcs9q, d5j4ti) {
  var x2opb,
      lfy60k = [],
      qk0lv = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (qk0lv['lastIndex'] = d5j4ti, qk0lv['exec'](rcs9q); x2opb = qk0lv['exec'](rcs9q);) if (lfy60k['push'](x2opb), x2opb[0x1]) return lfy60k;
}var apbox8 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ae2g83n = new RegExp('[\\-\\.0-9' + apbox8['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    af16yk7 = new RegExp('^' + apbox8['source'] + ae2g83n['source'] + '*(?::' + apbox8['source'] + ae2g83n['source'] + '*)?$'),
    akf617y = 0x0,
    adjt = 0x1,
    aj5id4t = 0x2,
    af0$lyk = 0x3,
    ape2bn8 = 0x4,
    asl$rq = 0x5,
    aqk0lv$ = 0x6,
    axitob = 0x7;amj_9zc['prototype'] = { 'parse': function (hio5td, vflk$, v$lqs) {
    var w76uy = this['domBuilder'];w76uy['startDocument'](), a_jzm4(vflk$, vflk$ = {}), ami45dj(hio5td, vflk$, v$lqs, w76uy, this['errorHandler']), w76uy['endDocument']();
  } }, al0$kv['prototype'] = { 'setTagName': function (txoph) {
    if (!af16yk7['test'](txoph)) throw new Error('invalid tagName:' + txoph);this['tagName'] = txoph;
  }, 'add': function (lvkf0, bxhp2o, gn8e) {
    if (!af16yk7['test'](lvkf0)) throw new Error('invalid attribute:' + lvkf0);this[this['length']++] = { 'qName': lvkf0, 'value': bxhp2o, 'offset': gn8e };
  }, 'length': 0x0, 'getLocalName': function (z4d9mj) {
    return this[z4d9mj]['localName'];
  }, 'getLocator': function (q_scv) {
    return this[q_scv]['locator'];
  }, 'getQName': function (qv0$k) {
    return this[qv0$k]['qName'];
  }, 'getURI': function (bthp) {
    return this[bthp]['uri'];
  }, 'getValue': function (ykf17) {
    return this[ykf17]['value'];
  } }, ae82g3n({}, ae82g3n['prototype']) instanceof ae82g3n || (ae82g3n = function (zjm9c, tohxpb) {
  function vl0rq$() {}vl0rq$['prototype'] = tohxpb, vl0rq$ = new vl0rq$();for (tohxpb in zjm9c) vl0rq$[tohxpb] = zjm9c[tohxpb];return vl0rq$;
}), exports['XMLReader'] = amj_9zc;