var C = wx.$a;
function amc9z() {}function aj4_m9z(rq0v$l, ixtoh5, e8ng3, pb8n2, f0lyk) {
  function zs_r(z9m4d) {
    if (z9m4d > 0xffff) {
      z9m4d -= 0x10000;var z9j_cm = 0xd800 + (z9m4d >> 0xa),
          yf$lk0 = 0xdc00 + (0x3ff & z9m4d);return String['fromCharCode'](z9j_cm, yf$lk0);
    }return String['fromCharCode'](z9m4d);
  }function bxohtp(j_9cz) {
    var phbo = j_9cz['slice'](0x1, -0x1);return phbo in e8ng3 ? e8ng3[phbo] : '#' === phbo['charAt'](0x0) ? zs_r(parseInt(phbo['substr'](0x1)['replace']('x', '0x'))) : (f0lyk['error']('entity not found:' + j_9cz), j_9cz);
  }function l$qv(ky716f) {
    if (ky716f > id45) {
      var zm_9cj = rq0v$l['substring'](id45, ky716f)['replace'](/&#?\w+;/g, bxohtp);xth5i && epn8b2(id45), pb8n2['characters'](zm_9cj, 0x0, ky716f - id45), id45 = ky716f;
    }
  }function epn8b2(bp82, ito5h) {
    for (; bp82 >= j9c && (ito5h = y1f6k['exec'](rq0v$l));) boxtih = ito5h['index'], j9c = boxtih + ito5h[0x0]['length'], xth5i['lineNumber']++;xth5i['columnNumber'] = bp82 - boxtih + 0x1;
  }for (var boxtih = 0x0, j9c = 0x0, y1f6k = /.*(?:\r\n?|\n)|.*$/g, xth5i = pb8n2['locator'], cs9_m = [{ 'currentNSMap': ixtoh5 }], sc_9zr = {}, id45 = 0x0;;) {
    try {
      var tdj45 = rq0v$l['indexOf']('<', id45);if (0x0 > tdj45) {
        if (!rq0v$l['substr'](id45)['match'](/^\s*$/)) {
          var m4d9jz = pb8n2['doc'],
              mj5d = m4d9jz['createTextNode'](rq0v$l['substr'](id45));m4d9jz['appendChild'](mj5d), pb8n2['currentElement'] = mj5d;
        }return;
      }switch (tdj45 > id45 && l$qv(tdj45), rq0v$l['charAt'](tdj45 + 0x1)) {case '/':
          var y$flk = rq0v$l['indexOf']('>', tdj45 + 0x3),
              qklv$ = rq0v$l['substring'](tdj45 + 0x2, y$flk),
              $lq0v = cs9_m['pop']();0x0 > y$flk ? (qklv$ = rq0v$l['substring'](tdj45 + 0x2)['replace'](/[\s<].*/, ''), f0lyk['error']('end tag name: ' + qklv$ + ' is not complete:' + $lq0v['tagName']), y$flk = tdj45 + 0x1 + qklv$['length']) : qklv$['match'](/\s</) && (qklv$ = qklv$['replace'](/[\s<].*/, ''), f0lyk['error']('end tag name: ' + qklv$ + ' maybe not complete'), y$flk = tdj45 + 0x1 + qklv$['length']);var ky761f = $lq0v['localNSMap'],
              lrvs = $lq0v['tagName'] == qklv$,
              qvr$0 = lrvs || $lq0v['tagName'] && $lq0v['tagName']['toLowerCase']() == qklv$['toLowerCase']();if (qvr$0) {
            if (pb8n2['endElement']($lq0v['uri'], $lq0v['localName'], qklv$), ky761f) {
              for (var di4jt in ky761f) pb8n2['endPrefixMapping'](di4jt);
            }lrvs || f0lyk['fatalError']('end tag name: ' + qklv$ + ' is not match the current start tagName:' + $lq0v['tagName']);
          } else cs9_m['push']($lq0v);y$flk++;break;case '?':
          xth5i && epn8b2(tdj45), y$flk = ajz54d(rq0v$l, tdj45, pb8n2);break;case '!':
          xth5i && epn8b2(tdj45), y$flk = alyf(rq0v$l, tdj45, pb8n2, f0lyk);break;default:
          xth5i && epn8b2(tdj45);var ql$v0 = new at5ihdo(),
              kqv$l0 = cs9_m[cs9_m['length'] - 0x1]['currentNSMap'],
              y$flk = apn8b2x(rq0v$l, tdj45, ql$v0, kqv$l0, bxohtp, f0lyk),
              en2p = ql$v0['length'];if (!ql$v0['closed'] && af16yu7(rq0v$l, y$flk, ql$v0['tagName'], sc_9zr) && (ql$v0['closed'] = !0x0, e8ng3['nbsp'] || f0lyk['warning']('unclosed xml attribute')), xth5i && en2p) {
            for (var jit4d = ak60fy7(xth5i, {}), n2ep38 = 0x0; en2p > n2ep38; n2ep38++) {
              var $0flvk = ql$v0[n2ep38];epn8b2($0flvk['offset']), $0flvk['locator'] = ak60fy7(xth5i, {});
            }pb8n2['locator'] = jit4d, ahio5td(ql$v0, pb8n2, kqv$l0) && cs9_m['push'](ql$v0), pb8n2['locator'] = xth5i;
          } else ahio5td(ql$v0, pb8n2, kqv$l0) && cs9_m['push'](ql$v0);'http://www.w3.org/1999/xhtml' !== ql$v0['uri'] || ql$v0['closed'] ? y$flk++ : y$flk = ae8n2g(rq0v$l, y$flk, ql$v0['tagName'], bxohtp, pb8n2);}
    } catch (r$vq0l) {
      f0lyk['error']('element parse error: ' + r$vq0l), y$flk = -0x1;
    }y$flk > id45 ? id45 = y$flk : l$qv(Math['max'](tdj45, id45) + 0x1);
  }
}function ak60fy7(lqrs, ihodt) {
  return ihodt['lineNumber'] = lqrs['lineNumber'], ihodt['columnNumber'] = lqrs['columnNumber'], ihodt;
}function apn8b2x(jit5d, btixho, _zj9c, bn28x, w176y, k$yf0l) {
  for (var y6u, j94z, f0k = ++btixho, rqvs$ = an8pb2e;;) {
    var e283pn = jit5d['charAt'](f0k);switch (e283pn) {case '=':
        if (rqvs$ === afk0vl$) y6u = jit5d['slice'](btixho, f0k), rqvs$ = agne23;else {
          if (rqvs$ !== aen3g8) throw new Error('attribute equal must after attrName');rqvs$ = agne23;
        }break;case '\x27':case '\x22':
        if (rqvs$ === agne23 || rqvs$ === afk0vl$) {
          if (rqvs$ === afk0vl$ && (k$yf0l['warning']('attribute value must after "="'), y6u = jit5d['slice'](btixho, f0k)), btixho = f0k + 0x1, f0k = jit5d['indexOf'](e283pn, btixho), !(f0k > 0x0)) throw new Error('attribute value no end \'' + e283pn + '\' match');j94z = jit5d['slice'](btixho, f0k)['replace'](/&#?\w+;/g, w176y), _zj9c['add'](y6u, j94z, btixho - 0x1), rqvs$ = ayu6w1;
        } else {
          if (rqvs$ != ab8x2o) throw new Error('attribute value must after "="');j94z = jit5d['slice'](btixho, f0k)['replace'](/&#?\w+;/g, w176y), _zj9c['add'](y6u, j94z, btixho), k$yf0l['warning']('attribute "' + y6u + '" missed start quot(' + e283pn + ')!!'), btixho = f0k + 0x1, rqvs$ = ayu6w1;
        }break;case '/':
        switch (rqvs$) {case an8pb2e:
            _zj9c['setTagName'](jit5d['slice'](btixho, f0k));case ayu6w1:case ac9zjm_:case ajmi:
            rqvs$ = ajmi, _zj9c['closed'] = !0x0;case ab8x2o:case afk0vl$:case aen3g8:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return k$yf0l['error']('unexpected end of input'), rqvs$ == an8pb2e && _zj9c['setTagName'](jit5d['slice'](btixho, f0k)), f0k;case '>':
        switch (rqvs$) {case an8pb2e:
            _zj9c['setTagName'](jit5d['slice'](btixho, f0k));case ayu6w1:case ac9zjm_:case ajmi:
            break;case ab8x2o:case afk0vl$:
            j94z = jit5d['slice'](btixho, f0k), '/' === j94z['slice'](-0x1) && (_zj9c['closed'] = !0x0, j94z = j94z['slice'](0x0, -0x1));case aen3g8:
            rqvs$ === aen3g8 && (j94z = y6u), rqvs$ == ab8x2o ? (k$yf0l['warning']('attribute "' + j94z + '" missed quot(")!!'), _zj9c['add'](y6u, j94z['replace'](/&#?\w+;/g, w176y), btixho)) : ('http://www.w3.org/1999/xhtml' === bn28x[''] && j94z['match'](/^(?:disabled|checked|selected)$/i) || k$yf0l['warning']('attribute "' + j94z + '" missed value!! "' + j94z + '" instead!!'), _zj9c['add'](j94z, j94z, btixho));break;case agne23:
            throw new Error('attribute value missed!!');}return f0k;case '\u0080':
        e283pn = '\x20';default:
        if ('\x20' >= e283pn) switch (rqvs$) {case an8pb2e:
            _zj9c['setTagName'](jit5d['slice'](btixho, f0k)), rqvs$ = ac9zjm_;break;case afk0vl$:
            y6u = jit5d['slice'](btixho, f0k), rqvs$ = aen3g8;break;case ab8x2o:
            var j94z = jit5d['slice'](btixho, f0k)['replace'](/&#?\w+;/g, w176y);k$yf0l['warning']('attribute "' + j94z + '" missed quot(")!!'), _zj9c['add'](y6u, j94z, btixho);case ayu6w1:
            rqvs$ = ac9zjm_;} else switch (rqvs$) {case aen3g8:
            {
              _zj9c['tagName'];
            }'http://www.w3.org/1999/xhtml' === bn28x[''] && y6u['match'](/^(?:disabled|checked|selected)$/i) || k$yf0l['warning']('attribute "' + y6u + '" missed value!! "' + y6u + '" instead2!!'), _zj9c['add'](y6u, y6u, btixho), btixho = f0k, rqvs$ = afk0vl$;break;case ayu6w1:
            k$yf0l['warning']('attribute space is required"' + y6u + '\x22!!');case ac9zjm_:
            rqvs$ = afk0vl$, btixho = f0k;break;case agne23:
            rqvs$ = ab8x2o, btixho = f0k;break;case ajmi:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}f0k++;
  }
}function ahio5td(f6y1u, _scq9, enp2) {
  for (var qcs_v = f6y1u['tagName'], u7w1y6 = null, r0v$ = f6y1u['length']; r0v$--;) {
    var dj45mi = f6y1u[r0v$],
        xo2b8p = dj45mi['qName'],
        y$0 = dj45mi['value'],
        g83ne2 = xo2b8p['indexOf'](':');if (g83ne2 > 0x0) var v0rq$l = dj45mi['prefix'] = xo2b8p['slice'](0x0, g83ne2),
        rvs$q = xo2b8p['slice'](g83ne2 + 0x1),
        _rqv = 'xmlns' === v0rq$l && rvs$q;else rvs$q = xo2b8p, v0rq$l = null, _rqv = 'xmlns' === xo2b8p && '';dj45mi['localName'] = rvs$q, _rqv !== !0x1 && (null == u7w1y6 && (u7w1y6 = {}, athox5i(enp2, enp2 = {})), enp2[_rqv] = u7w1y6[_rqv] = y$0, dj45mi['uri'] = 'http://www.w3.org/2000/xmlns/', _scq9['startPrefixMapping'](_rqv, y$0));
  }for (var r0v$ = f6y1u['length']; r0v$--;) {
    dj45mi = f6y1u[r0v$];var v0rq$l = dj45mi['prefix'];v0rq$l && ('xml' === v0rq$l && (dj45mi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== v0rq$l && (dj45mi['uri'] = enp2[v0rq$l || '']));
  }var g83ne2 = qcs_v['indexOf'](':');g83ne2 > 0x0 ? (v0rq$l = f6y1u['prefix'] = qcs_v['slice'](0x0, g83ne2), rvs$q = f6y1u['localName'] = qcs_v['slice'](g83ne2 + 0x1)) : (v0rq$l = null, rvs$q = f6y1u['localName'] = qcs_v);var j4t5id = f6y1u['uri'] = enp2[v0rq$l || ''];if (_scq9['startElement'](j4t5id, rvs$q, qcs_v, f6y1u), !f6y1u['closed']) return f6y1u['currentNSMap'] = enp2, f6y1u['localNSMap'] = u7w1y6, !0x0;if (_scq9['endElement'](j4t5id, rvs$q, qcs_v), u7w1y6) {
    for (v0rq$l in u7w1y6) _scq9['endPrefixMapping'](v0rq$l);
  }
}function ae8n2g(idj5t, u71y6f, topbxh, $fk0lv, $vk0lf) {
  if (/^(?:script|textarea)$/i['test'](topbxh)) {
    var jmdz4 = idj5t['indexOf']('</' + topbxh + '>', u71y6f),
        zmc9_ = idj5t['substring'](u71y6f + 0x1, jmdz4);if (/[&<]/['test'](zmc9_)) return (/^script$/i['test'](topbxh) ? ($vk0lf['characters'](zmc9_, 0x0, zmc9_['length']), jmdz4) : (zmc9_ = zmc9_['replace'](/&#?\w+;/g, $fk0lv), $vk0lf['characters'](zmc9_, 0x0, zmc9_['length']), jmdz4)
    );
  }return u71y6f + 0x1;
}function af16yu7(id5h, _czr9, ih5xot, ith5d4) {
  var zjm_9c = ith5d4[ih5xot];return null == zjm_9c && (zjm_9c = id5h['lastIndexOf']('</' + ih5xot + '>'), _czr9 > zjm_9c && (zjm_9c = id5h['lastIndexOf']('</' + ih5xot)), ith5d4[ih5xot] = zjm_9c), _czr9 > zjm_9c;
}function athox5i(e83, p8b2nx) {
  for (var z4_ in e83) p8b2nx[z4_] = e83[z4_];
}function alyf(odti5h, i45d, nx8pb2, zc9_) {
  var y671k = odti5h['charAt'](i45d + 0x2);switch (y671k) {case '-':
      if ('-' === odti5h['charAt'](i45d + 0x3)) {
        var j5td4 = odti5h['indexOf']('-->', i45d + 0x4);return j5td4 > i45d ? (nx8pb2['comment'](odti5h, i45d + 0x4, j5td4 - i45d - 0x4), j5td4 + 0x3) : (zc9_['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == odti5h['substr'](i45d + 0x3, 0x6)) {
        var j5td4 = odti5h['indexOf'](']]>', i45d + 0x9);return nx8pb2['startCDATA'](), nx8pb2['characters'](odti5h, i45d + 0x9, j5td4 - i45d - 0x9), nx8pb2['endCDATA'](), j5td4 + 0x3;
      }var td4ih5 = a_czm9(odti5h, i45d),
          _zjm = td4ih5['length'];if (_zjm > 0x1 && /!doctype/i['test'](td4ih5[0x0][0x0])) {
        var z_s = td4ih5[0x1][0x0],
            ixt5o = _zjm > 0x3 && /^public$/i['test'](td4ih5[0x2][0x0]) && td4ih5[0x3][0x0],
            nxp28 = _zjm > 0x4 && td4ih5[0x4][0x0],
            i4jt5d = td4ih5[_zjm - 0x1];return nx8pb2['startDTD'](z_s, ixt5o && ixt5o['replace'](/^(['"])(.*?)\1$/, '$2'), nxp28 && nxp28['replace'](/^(['"])(.*?)\1$/, '$2')), nx8pb2['endDTD'](), i4jt5d['index'] + i4jt5d[0x0]['length'];
      }}return -0x1;
}function ajz54d(svlqr, vq$slr, m_zc9j) {
  var oihx5t = svlqr['indexOf']('?>', vq$slr);if (oihx5t) {
    var s_rqc = svlqr['substring'](vq$slr, oihx5t)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (s_rqc) {
      {
        s_rqc[0x0]['length'];
      }return m_zc9j['processingInstruction'](s_rqc[0x1], s_rqc[0x2]), oihx5t + 0x2;
    }return -0x1;
  }return -0x1;
}function at5ihdo() {}function a_9zc(z9mj4d, l0$kyf) {
  return z9mj4d['__proto__'] = l0$kyf, z9mj4d;
}function a_czm9(s_zm9c, t5dih) {
  var cj9_zm,
      y0$fk = [],
      zr9c_ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zr9c_['lastIndex'] = t5dih, zr9c_['exec'](s_zm9c); cj9_zm = zr9c_['exec'](s_zm9c);) if (y0$fk['push'](cj9_zm), cj9_zm[0x1]) return y0$fk;
}var ap8nb2e = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    a$lvr = new RegExp('[\\-\\.0-9' + ap8nb2e['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    aj4m5i = new RegExp('^' + ap8nb2e['source'] + a$lvr['source'] + '*(?::' + ap8nb2e['source'] + a$lvr['source'] + '*)?$'),
    an8pb2e = 0x0,
    afk0vl$ = 0x1,
    aen3g8 = 0x2,
    agne23 = 0x3,
    ab8x2o = 0x4,
    ayu6w1 = 0x5,
    ac9zjm_ = 0x6,
    ajmi = 0x7;amc9z['prototype'] = { 'parse': function (crvsq_, vsc_rq, xpb8n) {
    var svq$l = this['domBuilder'];svq$l['startDocument'](), athox5i(vsc_rq, vsc_rq = {}), aj4_m9z(crvsq_, vsc_rq, xpb8n, svq$l, this['errorHandler']), svq$l['endDocument']();
  } }, at5ihdo['prototype'] = { 'setTagName': function (l$0fkv) {
    if (!aj4m5i['test'](l$0fkv)) throw new Error('invalid tagName:' + l$0fkv);this['tagName'] = l$0fkv;
  }, 'add': function (s$rcq, ly0k, j_cmz9) {
    if (!aj4m5i['test'](s$rcq)) throw new Error('invalid attribute:' + s$rcq);this[this['length']++] = { 'qName': s$rcq, 'value': ly0k, 'offset': j_cmz9 };
  }, 'length': 0x0, 'getLocalName': function (tji54d) {
    return this[tji54d]['localName'];
  }, 'getLocator': function (b2ph) {
    return this[b2ph]['locator'];
  }, 'getQName': function ($vfk0l) {
    return this[$vfk0l]['qName'];
  }, 'getURI': function (xpb2) {
    return this[xpb2]['uri'];
  }, 'getValue': function (dj9) {
    return this[dj9]['value'];
  } }, a_9zc({}, a_9zc['prototype']) instanceof a_9zc || (a_9zc = function (n2bpx, zd54j) {
  function czr_s9() {}czr_s9['prototype'] = zd54j, czr_s9 = new czr_s9();for (zd54j in n2bpx) czr_s9[zd54j] = n2bpx[zd54j];return czr_s9;
}), exports['XMLReader'] = amc9z;