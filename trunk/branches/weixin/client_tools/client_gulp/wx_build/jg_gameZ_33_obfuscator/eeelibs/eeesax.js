var b = wx.$e;
function ey4v_7() {}function ejui3(b6k90s, $3jgix, b850d, us9kn, rfyv) {
  function thyzlr(am7o_c) {
    if (am7o_c > 0xffff) {
      am7o_c -= 0x10000;var fhyzv = 0xd800 + (am7o_c >> 0xa),
          zv_4y = 0xdc00 + (0x3ff & am7o_c);return String['fromCharCode'](fhyzv, zv_4y);
    }return String['fromCharCode'](am7o_c);
  }function zgr(fav_74) {
    var zhtgrl = fav_74['slice'](0x1, -0x1);return zhtgrl in b850d ? b850d[zhtgrl] : '#' === zhtgrl['charAt'](0x0) ? thyzlr(parseInt(zhtgrl['substr'](0x1)['replace']('x', '0x'))) : (rfyv['error']('entity not found:' + fav_74), fav_74);
  }function m4v_(ameo) {
    if (ameo > y74f_) {
      var fryhlz = b6k90s['substring'](y74f_, ameo)['replace'](/&#?\w+;/g, zgr);fa_4v && uqnsk9(y74f_), us9kn['characters'](fryhlz, 0x0, ameo - y74f_), y74f_ = ameo;
    }
  }function uqnsk9(b8wd, pmaoce) {
    for (; b8wd >= _47va && (pmaoce = m7o_ca['exec'](b6k90s));) u96sbk = pmaoce['index'], _47va = u96sbk + pmaoce[0x0]['length'], fa_4v['lineNumber']++;fa_4v['columnNumber'] = b8wd - u96sbk + 0x1;
  }for (var u96sbk = 0x0, _47va = 0x0, m7o_ca = /.*(?:\r\n?|\n)|.*$/g, fa_4v = us9kn['locator'], v4m_7a = [{ 'currentNSMap': $3jgix }], xlrht = {}, y74f_ = 0x0;;) {
    try {
      var pmcea = b6k90s['indexOf']('<', y74f_);if (0x0 > pmcea) {
        if (!b6k90s['substr'](y74f_)['match'](/^\s*$/)) {
          var i3$xjg = us9kn['doc'],
              d856b0 = i3$xjg['createTextNode'](b6k90s['substr'](y74f_));i3$xjg['appendChild'](d856b0), us9kn['currentElement'] = d856b0;
        }return;
      }switch (pmcea > y74f_ && m4v_(pmcea), b6k90s['charAt'](pmcea + 0x1)) {case '/':
          var mpoca7 = b6k90s['indexOf']('>', pmcea + 0x3),
              rgltx = b6k90s['substring'](pmcea + 0x2, mpoca7),
              qjnu3s = v4m_7a['pop']();0x0 > mpoca7 ? (rgltx = b6k90s['substring'](pmcea + 0x2)['replace'](/[\s<].*/, ''), rfyv['error']('end tag name: ' + rgltx + ' is not complete:' + qjnu3s['tagName']), mpoca7 = pmcea + 0x1 + rgltx['length']) : rgltx['match'](/\s</) && (rgltx = rgltx['replace'](/[\s<].*/, ''), rfyv['error']('end tag name: ' + rgltx + ' maybe not complete'), mpoca7 = pmcea + 0x1 + rgltx['length']);var oae = qjnu3s['localNSMap'],
              hrtlyz = qjnu3s['tagName'] == rgltx,
              glrhzt = hrtlyz || qjnu3s['tagName'] && qjnu3s['tagName']['toLowerCase']() == rgltx['toLowerCase']();if (glrhzt) {
            if (us9kn['endElement'](qjnu3s['uri'], qjnu3s['localName'], rgltx), oae) {
              for (var yhrv in oae) us9kn['endPrefixMapping'](yhrv);
            }hrtlyz || rfyv['fatalError']('end tag name: ' + rgltx + ' is not match the current start tagName:' + qjnu3s['tagName']);
          } else v4m_7a['push'](qjnu3s);mpoca7++;break;case '?':
          fa_4v && uqnsk9(pmcea), mpoca7 = eub69(b6k90s, pmcea, us9kn);break;case '!':
          fa_4v && uqnsk9(pmcea), mpoca7 = ehlyrfz(b6k90s, pmcea, us9kn, rfyv);break;default:
          fa_4v && uqnsk9(pmcea);var am_co7 = new ejixq(),
              $xlitg = v4m_7a[v4m_7a['length'] - 0x1]['currentNSMap'],
              mpoca7 = esknq9(b6k90s, pmcea, am_co7, $xlitg, zgr, rfyv),
              a7co_m = am_co7['length'];if (!am_co7['closed'] && ed9k60b(b6k90s, mpoca7, am_co7['tagName'], xlrht) && (am_co7['closed'] = !0x0, b850d['nbsp'] || rfyv['warning']('unclosed xml attribute')), fa_4v && a7co_m) {
            for (var rhxltg = emepo(fa_4v, {}), j3inuq = 0x0; a7co_m > j3inuq; j3inuq++) {
              var itgj$x = am_co7[j3inuq];uqnsk9(itgj$x['offset']), itgj$x['locator'] = emepo(fa_4v, {});
            }us9kn['locator'] = rhxltg, eryfhzl(am_co7, us9kn, $xlitg) && v4m_7a['push'](am_co7), us9kn['locator'] = fa_4v;
          } else eryfhzl(am_co7, us9kn, $xlitg) && v4m_7a['push'](am_co7);'http://www.w3.org/1999/xhtml' !== am_co7['uri'] || am_co7['closed'] ? mpoca7++ : mpoca7 = ejin3$(b6k90s, mpoca7, am_co7['tagName'], zgr, us9kn);}
    } catch (_c74a) {
      rfyv['error']('element parse error: ' + _c74a), mpoca7 = -0x1;
    }mpoca7 > y74f_ ? y74f_ = mpoca7 : m4v_(Math['max'](pmcea, y74f_) + 0x1);
  }
}function emepo(xjqi$, v_fa) {
  return v_fa['lineNumber'] = xjqi$['lineNumber'], v_fa['columnNumber'] = xjqi$['columnNumber'], v_fa;
}function esknq9(_aco7, nusqj3, grhztl, d6b805, a7f_, c7poma) {
  for (var ameoc, fhrzyl, xghlr = ++nusqj3, ni3quj = e_7amo;;) {
    var $ix3jg = _aco7['charAt'](xghlr);switch ($ix3jg) {case '=':
        if (ni3quj === eknuqs9) ameoc = _aco7['slice'](nusqj3, xghlr), ni3quj = eb560dk;else {
          if (ni3quj !== evzfryh) throw new Error('attribute equal must after attrName');ni3quj = eb560dk;
        }break;case '\x27':case '\x22':
        if (ni3quj === eb560dk || ni3quj === eknuqs9) {
          if (ni3quj === eknuqs9 && (c7poma['warning']('attribute value must after "="'), ameoc = _aco7['slice'](nusqj3, xghlr)), nusqj3 = xghlr + 0x1, xghlr = _aco7['indexOf']($ix3jg, nusqj3), !(xghlr > 0x0)) throw new Error('attribute value no end \'' + $ix3jg + '\' match');fhrzyl = _aco7['slice'](nusqj3, xghlr)['replace'](/&#?\w+;/g, a7f_), grhztl['add'](ameoc, fhrzyl, nusqj3 - 0x1), ni3quj = egi$xl;
        } else {
          if (ni3quj != ew8bd05) throw new Error('attribute value must after "="');fhrzyl = _aco7['slice'](nusqj3, xghlr)['replace'](/&#?\w+;/g, a7f_), grhztl['add'](ameoc, fhrzyl, nusqj3), c7poma['warning']('attribute "' + ameoc + '" missed start quot(' + $ix3jg + ')!!'), nusqj3 = xghlr + 0x1, ni3quj = egi$xl;
        }break;case '/':
        switch (ni3quj) {case e_7amo:
            grhztl['setTagName'](_aco7['slice'](nusqj3, xghlr));case egi$xl:case elrghtz:case ecpae:
            ni3quj = ecpae, grhztl['closed'] = !0x0;case ew8bd05:case eknuqs9:case evzfryh:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return c7poma['error']('unexpected end of input'), ni3quj == e_7amo && grhztl['setTagName'](_aco7['slice'](nusqj3, xghlr)), xghlr;case '>':
        switch (ni3quj) {case e_7amo:
            grhztl['setTagName'](_aco7['slice'](nusqj3, xghlr));case egi$xl:case elrghtz:case ecpae:
            break;case ew8bd05:case eknuqs9:
            fhrzyl = _aco7['slice'](nusqj3, xghlr), '/' === fhrzyl['slice'](-0x1) && (grhztl['closed'] = !0x0, fhrzyl = fhrzyl['slice'](0x0, -0x1));case evzfryh:
            ni3quj === evzfryh && (fhrzyl = ameoc), ni3quj == ew8bd05 ? (c7poma['warning']('attribute "' + fhrzyl + '" missed quot(")!!'), grhztl['add'](ameoc, fhrzyl['replace'](/&#?\w+;/g, a7f_), nusqj3)) : ('http://www.w3.org/1999/xhtml' === d6b805[''] && fhrzyl['match'](/^(?:disabled|checked|selected)$/i) || c7poma['warning']('attribute "' + fhrzyl + '" missed value!! "' + fhrzyl + '" instead!!'), grhztl['add'](fhrzyl, fhrzyl, nusqj3));break;case eb560dk:
            throw new Error('attribute value missed!!');}return xghlr;case '\u0080':
        $ix3jg = '\x20';default:
        if ('\x20' >= $ix3jg) switch (ni3quj) {case e_7amo:
            grhztl['setTagName'](_aco7['slice'](nusqj3, xghlr)), ni3quj = elrghtz;break;case eknuqs9:
            ameoc = _aco7['slice'](nusqj3, xghlr), ni3quj = evzfryh;break;case ew8bd05:
            var fhrzyl = _aco7['slice'](nusqj3, xghlr)['replace'](/&#?\w+;/g, a7f_);c7poma['warning']('attribute "' + fhrzyl + '" missed quot(")!!'), grhztl['add'](ameoc, fhrzyl, nusqj3);case egi$xl:
            ni3quj = elrghtz;} else switch (ni3quj) {case evzfryh:
            {
              grhztl['tagName'];
            }'http://www.w3.org/1999/xhtml' === d6b805[''] && ameoc['match'](/^(?:disabled|checked|selected)$/i) || c7poma['warning']('attribute "' + ameoc + '" missed value!! "' + ameoc + '" instead2!!'), grhztl['add'](ameoc, ameoc, nusqj3), nusqj3 = xghlr, ni3quj = eknuqs9;break;case egi$xl:
            c7poma['warning']('attribute space is required"' + ameoc + '\x22!!');case elrghtz:
            ni3quj = eknuqs9, nusqj3 = xghlr;break;case eb560dk:
            ni3quj = ew8bd05, nusqj3 = xghlr;break;case ecpae:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}xghlr++;
  }
}function eryfhzl(_f4zyv, q9ns3u, fzvryh) {
  for (var su9n = _f4zyv['tagName'], $xgth = null, g3ij$ = _f4zyv['length']; g3ij$--;) {
    var gjix3$ = _f4zyv[g3ij$],
        m7oca = gjix3$['qName'],
        zthlr = gjix3$['value'],
        fv_47y = m7oca['indexOf'](':');if (fv_47y > 0x0) var i3q$jn = gjix3$['prefix'] = m7oca['slice'](0x0, fv_47y),
        yrf4z = m7oca['slice'](fv_47y + 0x1),
        qnj$i3 = 'xmlns' === i3q$jn && yrf4z;else yrf4z = m7oca, i3q$jn = null, qnj$i3 = 'xmlns' === m7oca && '';gjix3$['localName'] = yrf4z, qnj$i3 !== !0x1 && (null == $xgth && ($xgth = {}, ek9bd06(fzvryh, fzvryh = {})), fzvryh[qnj$i3] = $xgth[qnj$i3] = zthlr, gjix3$['uri'] = 'http://www.w3.org/2000/xmlns/', q9ns3u['startPrefixMapping'](qnj$i3, zthlr));
  }for (var g3ij$ = _f4zyv['length']; g3ij$--;) {
    gjix3$ = _f4zyv[g3ij$];var i3q$jn = gjix3$['prefix'];i3q$jn && ('xml' === i3q$jn && (gjix3$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== i3q$jn && (gjix3$['uri'] = fzvryh[i3q$jn || '']));
  }var fv_47y = su9n['indexOf'](':');fv_47y > 0x0 ? (i3q$jn = _f4zyv['prefix'] = su9n['slice'](0x0, fv_47y), yrf4z = _f4zyv['localName'] = su9n['slice'](fv_47y + 0x1)) : (i3q$jn = null, yrf4z = _f4zyv['localName'] = su9n);var oa7_mc = _f4zyv['uri'] = fzvryh[i3q$jn || ''];if (q9ns3u['startElement'](oa7_mc, yrf4z, su9n, _f4zyv), !_f4zyv['closed']) return _f4zyv['currentNSMap'] = fzvryh, _f4zyv['localNSMap'] = $xgth, !0x0;if (q9ns3u['endElement'](oa7_mc, yrf4z, su9n), $xgth) {
    for (i3q$jn in $xgth) q9ns3u['endPrefixMapping'](i3q$jn);
  }
}function ejin3$(nqk9u, rhglt, c_a4m7, cmpeoa, b508w) {
  if (/^(?:script|textarea)$/i['test'](c_a4m7)) {
    var unqj3i = nqk9u['indexOf']('</' + c_a4m7 + '>', rhglt),
        jx3i$ = nqk9u['substring'](rhglt + 0x1, unqj3i);if (/[&<]/['test'](jx3i$)) return (/^script$/i['test'](c_a4m7) ? (b508w['characters'](jx3i$, 0x0, jx3i$['length']), unqj3i) : (jx3i$ = jx3i$['replace'](/&#?\w+;/g, cmpeoa), b508w['characters'](jx3i$, 0x0, jx3i$['length']), unqj3i)
    );
  }return rhglt + 0x1;
}function ed9k60b(g$3i, zhrfly, n9ks6, xijq3$) {
  var v4_f = xijq3$[n9ks6];return null == v4_f && (v4_f = g$3i['lastIndexOf']('</' + n9ks6 + '>'), zhrfly > v4_f && (v4_f = g$3i['lastIndexOf']('</' + n9ks6)), xijq3$[n9ks6] = v4_f), zhrfly > v4_f;
}function ek9bd06(inujq, _yf47v) {
  for (var q3nui in inujq) _yf47v[q3nui] = inujq[q3nui];
}function ehlyrfz(jtxig$, tgj$, ks9u6n, xlti) {
  var ac_m47 = jtxig$['charAt'](tgj$ + 0x2);switch (ac_m47) {case '-':
      if ('-' === jtxig$['charAt'](tgj$ + 0x3)) {
        var zyvfhr = jtxig$['indexOf']('-->', tgj$ + 0x4);return zyvfhr > tgj$ ? (ks9u6n['comment'](jtxig$, tgj$ + 0x4, zyvfhr - tgj$ - 0x4), zyvfhr + 0x3) : (xlti['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == jtxig$['substr'](tgj$ + 0x3, 0x6)) {
        var zyvfhr = jtxig$['indexOf'](']]>', tgj$ + 0x9);return ks9u6n['startCDATA'](), ks9u6n['characters'](jtxig$, tgj$ + 0x9, zyvfhr - tgj$ - 0x9), ks9u6n['endCDATA'](), zyvfhr + 0x3;
      }var qn$3j = erhzvf(jtxig$, tgj$),
          in$3 = qn$3j['length'];if (in$3 > 0x1 && /!doctype/i['test'](qn$3j[0x0][0x0])) {
        var $t = qn$3j[0x1][0x0],
            kubs96 = in$3 > 0x3 && /^public$/i['test'](qn$3j[0x2][0x0]) && qn$3j[0x3][0x0],
            tgi$xl = in$3 > 0x4 && qn$3j[0x4][0x0],
            y4v = qn$3j[in$3 - 0x1];return ks9u6n['startDTD']($t, kubs96 && kubs96['replace'](/^(['"])(.*?)\1$/, '$2'), tgi$xl && tgi$xl['replace'](/^(['"])(.*?)\1$/, '$2')), ks9u6n['endDTD'](), y4v['index'] + y4v[0x0]['length'];
      }}return -0x1;
}function eub69(jnq$i, l$ghtx, sb9u6k) {
  var qunji = jnq$i['indexOf']('?>', l$ghtx);if (qunji) {
    var wdb508 = jnq$i['substring'](l$ghtx, qunji)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (wdb508) {
      {
        wdb508[0x0]['length'];
      }return sb9u6k['processingInstruction'](wdb508[0x1], wdb508[0x2]), qunji + 0x2;
    }return -0x1;
  }return -0x1;
}function ejixq() {}function eyv_fz4(a_fv7, a4c_m7) {
  return a_fv7['__proto__'] = a4c_m7, a_fv7;
}function erhzvf(kb5d6, gtx$li) {
  var itg$xl,
      tlzhrg = [],
      bd506k = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (bd506k['lastIndex'] = gtx$li, bd506k['exec'](kb5d6); itg$xl = bd506k['exec'](kb5d6);) if (tlzhrg['push'](itg$xl), itg$xl[0x1]) return tlzhrg;
}var ek9b6s0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    evhrfz = new RegExp('[\\-\\.0-9' + ek9b6s0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    e_47ac = new RegExp('^' + ek9b6s0['source'] + evhrfz['source'] + '*(?::' + ek9b6s0['source'] + evhrfz['source'] + '*)?$'),
    e_7amo = 0x0,
    eknuqs9 = 0x1,
    evzfryh = 0x2,
    eb560dk = 0x3,
    ew8bd05 = 0x4,
    egi$xl = 0x5,
    elrghtz = 0x6,
    ecpae = 0x7;ey4v_7['prototype'] = { 'parse': function (gltx, squnk9, bw805) {
    var ixj$3q = this['domBuilder'];ixj$3q['startDocument'](), ek9bd06(squnk9, squnk9 = {}), ejui3(gltx, squnk9, bw805, ixj$3q, this['errorHandler']), ixj$3q['endDocument']();
  } }, ejixq['prototype'] = { 'setTagName': function (zr4v) {
    if (!e_47ac['test'](zr4v)) throw new Error('invalid tagName:' + zr4v);this['tagName'] = zr4v;
  }, 'add': function (qn3u9s, rzflhy, gixtl$) {
    if (!e_47ac['test'](qn3u9s)) throw new Error('invalid attribute:' + qn3u9s);this[this['length']++] = { 'qName': qn3u9s, 'value': rzflhy, 'offset': gixtl$ };
  }, 'length': 0x0, 'getLocalName': function (u69kns) {
    return this[u69kns]['localName'];
  }, 'getLocator': function (mcoea) {
    return this[mcoea]['locator'];
  }, 'getQName': function (ns3uq) {
    return this[ns3uq]['qName'];
  }, 'getURI': function (_4f) {
    return this[_4f]['uri'];
  }, 'getValue': function (hrlxtg) {
    return this[hrlxtg]['value'];
  } }, eyv_fz4({}, eyv_fz4['prototype']) instanceof eyv_fz4 || (eyv_fz4 = function (d0b56, j$i3xq) {
  function mcopa7() {}mcopa7['prototype'] = j$i3xq, mcopa7 = new mcopa7();for (j$i3xq in d0b56) mcopa7[j$i3xq] = d0b56[j$i3xq];return mcopa7;
}), exports['XMLReader'] = ey4v_7;