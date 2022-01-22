var C = wx.$a;
function an82px() {}function admji4(l$vqk0, scvq_, ho2xbp, e3g28n, y7u61f) {
  function b8p2xn(hxtp) {
    if (hxtp > 0xffff) {
      hxtp -= 0x10000;var _q9scr = 0xd800 + (hxtp >> 0xa),
          uw617y = 0xdc00 + (0x3ff & hxtp);return String['fromCharCode'](_q9scr, uw617y);
    }return String['fromCharCode'](hxtp);
  }function iboth(rql0v$) {
    var pbn28x = rql0v$['slice'](0x1, -0x1);return pbn28x in ho2xbp ? ho2xbp[pbn28x] : '#' === pbn28x['charAt'](0x0) ? b8p2xn(parseInt(pbn28x['substr'](0x1)['replace']('x', '0x'))) : (y7u61f['error']('entity not found:' + rql0v$), rql0v$);
  }function oxpbh2(j54zmd) {
    if (j54zmd > svr$l) {
      var obphxt = l$vqk0['substring'](svr$l, j54zmd)['replace'](/&#?\w+;/g, iboth);rq$0vl && sqc$(svr$l), e3g28n['characters'](obphxt, 0x0, j54zmd - svr$l), svr$l = j54zmd;
    }
  }function sqc$(cq$rv, sr9cz_) {
    for (; cq$rv >= jz_m9 && (sr9cz_ = ohbtpx['exec'](l$vqk0));) xobp = sr9cz_['index'], jz_m9 = xobp + sr9cz_[0x0]['length'], rq$0vl['lineNumber']++;rq$0vl['columnNumber'] = cq$rv - xobp + 0x1;
  }for (var xobp = 0x0, jz_m9 = 0x0, ohbtpx = /.*(?:\r\n?|\n)|.*$/g, rq$0vl = e3g28n['locator'], j_mzc9 = [{ 'currentNSMap': scvq_ }], ep3n82 = {}, svr$l = 0x0;;) {
    try {
      var neg283 = l$vqk0['indexOf']('<', svr$l);if (0x0 > neg283) {
        if (!l$vqk0['substr'](svr$l)['match'](/^\s*$/)) {
          var tixoh = e3g28n['doc'],
              i4hdt5 = tixoh['createTextNode'](l$vqk0['substr'](svr$l));tixoh['appendChild'](i4hdt5), e3g28n['currentElement'] = i4hdt5;
        }return;
      }switch (neg283 > svr$l && oxpbh2(neg283), l$vqk0['charAt'](neg283 + 0x1)) {case '/':
          var hx2b = l$vqk0['indexOf']('>', neg283 + 0x3),
              oh2pxb = l$vqk0['substring'](neg283 + 0x2, hx2b),
              eg38n = j_mzc9['pop']();0x0 > hx2b ? (oh2pxb = l$vqk0['substring'](neg283 + 0x2)['replace'](/[\s<].*/, ''), y7u61f['error']('end tag name: ' + oh2pxb + ' is not complete:' + eg38n['tagName']), hx2b = neg283 + 0x1 + oh2pxb['length']) : oh2pxb['match'](/\s</) && (oh2pxb = oh2pxb['replace'](/[\s<].*/, ''), y7u61f['error']('end tag name: ' + oh2pxb + ' maybe not complete'), hx2b = neg283 + 0x1 + oh2pxb['length']);var qvl0$k = eg38n['localNSMap'],
              _zcm9s = eg38n['tagName'] == oh2pxb,
              jd4t = _zcm9s || eg38n['tagName'] && eg38n['tagName']['toLowerCase']() == oh2pxb['toLowerCase']();if (jd4t) {
            if (e3g28n['endElement'](eg38n['uri'], eg38n['localName'], oh2pxb), qvl0$k) {
              for (var dij5m4 in qvl0$k) e3g28n['endPrefixMapping'](dij5m4);
            }_zcm9s || y7u61f['fatalError']('end tag name: ' + oh2pxb + ' is not match the current start tagName:' + eg38n['tagName']);
          } else j_mzc9['push'](eg38n);hx2b++;break;case '?':
          rq$0vl && sqc$(neg283), hx2b = at5doh(l$vqk0, neg283, e3g28n);break;case '!':
          rq$0vl && sqc$(neg283), hx2b = aohxit5(l$vqk0, neg283, e3g28n, y7u61f);break;default:
          rq$0vl && sqc$(neg283);var yfu16 = new ag38n(),
              np283 = j_mzc9[j_mzc9['length'] - 0x1]['currentNSMap'],
              hx2b = asr$lq(l$vqk0, neg283, yfu16, np283, iboth, y7u61f),
              htbxpo = yfu16['length'];if (!yfu16['closed'] && aoxb2ph(l$vqk0, hx2b, yfu16['tagName'], ep3n82) && (yfu16['closed'] = !0x0, ho2xbp['nbsp'] || y7u61f['warning']('unclosed xml attribute')), rq$0vl && htbxpo) {
            for (var en23g = au71w6(rq$0vl, {}), lfk06 = 0x0; htbxpo > lfk06; lfk06++) {
              var _9srcq = yfu16[lfk06];sqc$(_9srcq['offset']), _9srcq['locator'] = au71w6(rq$0vl, {});
            }e3g28n['locator'] = en23g, ak0fv(yfu16, e3g28n, np283) && j_mzc9['push'](yfu16), e3g28n['locator'] = rq$0vl;
          } else ak0fv(yfu16, e3g28n, np283) && j_mzc9['push'](yfu16);'http://www.w3.org/1999/xhtml' !== yfu16['uri'] || yfu16['closed'] ? hx2b++ : hx2b = amj5z4(l$vqk0, hx2b, yfu16['tagName'], iboth, e3g28n);}
    } catch (k7y6f) {
      y7u61f['error']('element parse error: ' + k7y6f), hx2b = -0x1;
    }hx2b > svr$l ? svr$l = hx2b : oxpbh2(Math['max'](neg283, svr$l) + 0x1);
  }
}function au71w6(w6yu1, qsr9_) {
  return qsr9_['lineNumber'] = w6yu1['lineNumber'], qsr9_['columnNumber'] = w6yu1['columnNumber'], qsr9_;
}function asr$lq(z_cs9, xibo, kyf0$, v$qlrs, ixtbh, th4id5) {
  for (var ne23g8, hbtpxo, i4mj = ++xibo, crzs_ = aj5;;) {
    var c$rqs = z_cs9['charAt'](i4mj);switch (c$rqs) {case '=':
        if (crzs_ === ap2xob8) ne23g8 = z_cs9['slice'](xibo, i4mj), crzs_ = a_9jm;else {
          if (crzs_ !== akyf16) throw new Error('attribute equal must after attrName');crzs_ = a_9jm;
        }break;case '\x27':case '\x22':
        if (crzs_ === a_9jm || crzs_ === ap2xob8) {
          if (crzs_ === ap2xob8 && (th4id5['warning']('attribute value must after "="'), ne23g8 = z_cs9['slice'](xibo, i4mj)), xibo = i4mj + 0x1, i4mj = z_cs9['indexOf'](c$rqs, xibo), !(i4mj > 0x0)) throw new Error('attribute value no end \'' + c$rqs + '\' match');hbtpxo = z_cs9['slice'](xibo, i4mj)['replace'](/&#?\w+;/g, ixtbh), kyf0$['add'](ne23g8, hbtpxo, xibo - 0x1), crzs_ = awy7u61;
        } else {
          if (crzs_ != ao5h) throw new Error('attribute value must after "="');hbtpxo = z_cs9['slice'](xibo, i4mj)['replace'](/&#?\w+;/g, ixtbh), kyf0$['add'](ne23g8, hbtpxo, xibo), th4id5['warning']('attribute "' + ne23g8 + '" missed start quot(' + c$rqs + ')!!'), xibo = i4mj + 0x1, crzs_ = awy7u61;
        }break;case '/':
        switch (crzs_) {case aj5:
            kyf0$['setTagName'](z_cs9['slice'](xibo, i4mj));case awy7u61:case afy60kl:case av0kl$q:
            crzs_ = av0kl$q, kyf0$['closed'] = !0x0;case ao5h:case ap2xob8:case akyf16:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return th4id5['error']('unexpected end of input'), crzs_ == aj5 && kyf0$['setTagName'](z_cs9['slice'](xibo, i4mj)), i4mj;case '>':
        switch (crzs_) {case aj5:
            kyf0$['setTagName'](z_cs9['slice'](xibo, i4mj));case awy7u61:case afy60kl:case av0kl$q:
            break;case ao5h:case ap2xob8:
            hbtpxo = z_cs9['slice'](xibo, i4mj), '/' === hbtpxo['slice'](-0x1) && (kyf0$['closed'] = !0x0, hbtpxo = hbtpxo['slice'](0x0, -0x1));case akyf16:
            crzs_ === akyf16 && (hbtpxo = ne23g8), crzs_ == ao5h ? (th4id5['warning']('attribute "' + hbtpxo + '" missed quot(")!!'), kyf0$['add'](ne23g8, hbtpxo['replace'](/&#?\w+;/g, ixtbh), xibo)) : ('http://www.w3.org/1999/xhtml' === v$qlrs[''] && hbtpxo['match'](/^(?:disabled|checked|selected)$/i) || th4id5['warning']('attribute "' + hbtpxo + '" missed value!! "' + hbtpxo + '" instead!!'), kyf0$['add'](hbtpxo, hbtpxo, xibo));break;case a_9jm:
            throw new Error('attribute value missed!!');}return i4mj;case '\u0080':
        c$rqs = '\x20';default:
        if ('\x20' >= c$rqs) switch (crzs_) {case aj5:
            kyf0$['setTagName'](z_cs9['slice'](xibo, i4mj)), crzs_ = afy60kl;break;case ap2xob8:
            ne23g8 = z_cs9['slice'](xibo, i4mj), crzs_ = akyf16;break;case ao5h:
            var hbtpxo = z_cs9['slice'](xibo, i4mj)['replace'](/&#?\w+;/g, ixtbh);th4id5['warning']('attribute "' + hbtpxo + '" missed quot(")!!'), kyf0$['add'](ne23g8, hbtpxo, xibo);case awy7u61:
            crzs_ = afy60kl;} else switch (crzs_) {case akyf16:
            {
              kyf0$['tagName'];
            }'http://www.w3.org/1999/xhtml' === v$qlrs[''] && ne23g8['match'](/^(?:disabled|checked|selected)$/i) || th4id5['warning']('attribute "' + ne23g8 + '" missed value!! "' + ne23g8 + '" instead2!!'), kyf0$['add'](ne23g8, ne23g8, xibo), xibo = i4mj, crzs_ = ap2xob8;break;case awy7u61:
            th4id5['warning']('attribute space is required"' + ne23g8 + '\x22!!');case afy60kl:
            crzs_ = ap2xob8, xibo = i4mj;break;case a_9jm:
            crzs_ = ao5h, xibo = i4mj;break;case av0kl$q:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}i4mj++;
  }
}function ak0fv(_vrcs, v$rql, d5im) {
  for (var otih = _vrcs['tagName'], vcs_r = null, h5d = _vrcs['length']; h5d--;) {
    var vfk$0 = _vrcs[h5d],
        m94_jz = vfk$0['qName'],
        fk16y7 = vfk$0['value'],
        vq$rsc = m94_jz['indexOf'](':');if (vq$rsc > 0x0) var t5d4j = vfk$0['prefix'] = m94_jz['slice'](0x0, vq$rsc),
        ox82b = m94_jz['slice'](vq$rsc + 0x1),
        $k0y = 'xmlns' === t5d4j && ox82b;else ox82b = m94_jz, t5d4j = null, $k0y = 'xmlns' === m94_jz && '';vfk$0['localName'] = ox82b, $k0y !== !0x1 && (null == vcs_r && (vcs_r = {}, amc9_sz(d5im, d5im = {})), d5im[$k0y] = vcs_r[$k0y] = fk16y7, vfk$0['uri'] = 'http://www.w3.org/2000/xmlns/', v$rql['startPrefixMapping']($k0y, fk16y7));
  }for (var h5d = _vrcs['length']; h5d--;) {
    vfk$0 = _vrcs[h5d];var t5d4j = vfk$0['prefix'];t5d4j && ('xml' === t5d4j && (vfk$0['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== t5d4j && (vfk$0['uri'] = d5im[t5d4j || '']));
  }var vq$rsc = otih['indexOf'](':');vq$rsc > 0x0 ? (t5d4j = _vrcs['prefix'] = otih['slice'](0x0, vq$rsc), ox82b = _vrcs['localName'] = otih['slice'](vq$rsc + 0x1)) : (t5d4j = null, ox82b = _vrcs['localName'] = otih);var g38e = _vrcs['uri'] = d5im[t5d4j || ''];if (v$rql['startElement'](g38e, ox82b, otih, _vrcs), !_vrcs['closed']) return _vrcs['currentNSMap'] = d5im, _vrcs['localNSMap'] = vcs_r, !0x0;if (v$rql['endElement'](g38e, ox82b, otih), vcs_r) {
    for (t5d4j in vcs_r) v$rql['endPrefixMapping'](t5d4j);
  }
}function amj5z4(_rqc9, qlrsv, f$vl0, srlv$q, potxh) {
  if (/^(?:script|textarea)$/i['test'](f$vl0)) {
    var yw16u7 = _rqc9['indexOf']('</' + f$vl0 + '>', qlrsv),
        xobph2 = _rqc9['substring'](qlrsv + 0x1, yw16u7);if (/[&<]/['test'](xobph2)) return (/^script$/i['test'](f$vl0) ? (potxh['characters'](xobph2, 0x0, xobph2['length']), yw16u7) : (xobph2 = xobph2['replace'](/&#?\w+;/g, srlv$q), potxh['characters'](xobph2, 0x0, xobph2['length']), yw16u7)
    );
  }return qlrsv + 0x1;
}function aoxb2ph(n3p82e, f0$v, pb8o2x, g32n) {
  var fk761 = g32n[pb8o2x];return null == fk761 && (fk761 = n3p82e['lastIndexOf']('</' + pb8o2x + '>'), f0$v > fk761 && (fk761 = n3p82e['lastIndexOf']('</' + pb8o2x)), g32n[pb8o2x] = fk761), f0$v > fk761;
}function amc9_sz(ti5j, bothp) {
  for (var j9dm4z in ti5j) bothp[j9dm4z] = ti5j[j9dm4z];
}function aohxit5(rq0vl, xptboh, n283eg, f$0) {
  var mj9zd = rq0vl['charAt'](xptboh + 0x2);switch (mj9zd) {case '-':
      if ('-' === rq0vl['charAt'](xptboh + 0x3)) {
        var l06fy = rq0vl['indexOf']('-->', xptboh + 0x4);return l06fy > xptboh ? (n283eg['comment'](rq0vl, xptboh + 0x4, l06fy - xptboh - 0x4), l06fy + 0x3) : (f$0['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == rq0vl['substr'](xptboh + 0x3, 0x6)) {
        var l06fy = rq0vl['indexOf'](']]>', xptboh + 0x9);return n283eg['startCDATA'](), n283eg['characters'](rq0vl, xptboh + 0x9, l06fy - xptboh - 0x9), n283eg['endCDATA'](), l06fy + 0x3;
      }var v$0f = ae2n8g(rq0vl, xptboh),
          id5tho = v$0f['length'];if (id5tho > 0x1 && /!doctype/i['test'](v$0f[0x0][0x0])) {
        var oiht5 = v$0f[0x1][0x0],
            kfl$0v = id5tho > 0x3 && /^public$/i['test'](v$0f[0x2][0x0]) && v$0f[0x3][0x0],
            k$0vlf = id5tho > 0x4 && v$0f[0x4][0x0],
            tbxpo = v$0f[id5tho - 0x1];return n283eg['startDTD'](oiht5, kfl$0v && kfl$0v['replace'](/^(['"])(.*?)\1$/, '$2'), k$0vlf && k$0vlf['replace'](/^(['"])(.*?)\1$/, '$2')), n283eg['endDTD'](), tbxpo['index'] + tbxpo[0x0]['length'];
      }}return -0x1;
}function at5doh(n3p8e2, f0ylk6, y71k6f) {
  var fk761y = n3p8e2['indexOf']('?>', f0ylk6);if (fk761y) {
    var pbhx2 = n3p8e2['substring'](f0ylk6, fk761y)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (pbhx2) {
      {
        pbhx2[0x0]['length'];
      }return y71k6f['processingInstruction'](pbhx2[0x1], pbhx2[0x2]), fk761y + 0x2;
    }return -0x1;
  }return -0x1;
}function ag38n() {}function ascq$(sqvr_c, hbtio) {
  return sqvr_c['__proto__'] = hbtio, sqvr_c;
}function ae2n8g(k0f67y, s_cvrq) {
  var vrql0$,
      oti = [],
      thd54i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (thd54i['lastIndex'] = s_cvrq, thd54i['exec'](k0f67y); vrql0$ = thd54i['exec'](k0f67y);) if (oti['push'](vrql0$), vrql0$[0x1]) return oti;
}var ay6f71k = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    as_z9mc = new RegExp('[\\-\\.0-9' + ay6f71k['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    av$cqr = new RegExp('^' + ay6f71k['source'] + as_z9mc['source'] + '*(?::' + ay6f71k['source'] + as_z9mc['source'] + '*)?$'),
    aj5 = 0x0,
    ap2xob8 = 0x1,
    akyf16 = 0x2,
    a_9jm = 0x3,
    ao5h = 0x4,
    awy7u61 = 0x5,
    afy60kl = 0x6,
    av0kl$q = 0x7;an82px['prototype'] = { 'parse': function (s$vcq, dt4ji5, xbhito) {
    var ob82p = this['domBuilder'];ob82p['startDocument'](), amc9_sz(dt4ji5, dt4ji5 = {}), admji4(s$vcq, dt4ji5, xbhito, ob82p, this['errorHandler']), ob82p['endDocument']();
  } }, ag38n['prototype'] = { 'setTagName': function (ho2xpb) {
    if (!av$cqr['test'](ho2xpb)) throw new Error('invalid tagName:' + ho2xpb);this['tagName'] = ho2xpb;
  }, 'add': function (h2boxp, m49_j, djz4m9) {
    if (!av$cqr['test'](h2boxp)) throw new Error('invalid attribute:' + h2boxp);this[this['length']++] = { 'qName': h2boxp, 'value': m49_j, 'offset': djz4m9 };
  }, 'length': 0x0, 'getLocalName': function (pobx) {
    return this[pobx]['localName'];
  }, 'getLocator': function (n28g3e) {
    return this[n28g3e]['locator'];
  }, 'getQName': function (rcz9_s) {
    return this[rcz9_s]['qName'];
  }, 'getURI': function (fkvl) {
    return this[fkvl]['uri'];
  }, 'getValue': function (nb2px) {
    return this[nb2px]['value'];
  } }, ascq$({}, ascq$['prototype']) instanceof ascq$ || (ascq$ = function ($v, rcq9_) {
  function q0k$v() {}q0k$v['prototype'] = rcq9_, q0k$v = new q0k$v();for (rcq9_ in $v) q0k$v[rcq9_] = $v[rcq9_];return q0k$v;
}), exports['XMLReader'] = an82px;