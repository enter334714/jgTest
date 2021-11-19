var Y = wx.$M;
function M_tp2e8z() {}function M_wr1f(nlh5m, bvfrdw, imh5nj, vrdfw, _so47) {
  function ct28a(qkyx1) {
    if (qkyx1 > 0xffff) {
      qkyx1 -= 0x10000;var t28zpe = 0xd800 + (qkyx1 >> 0xa),
          t8c2ae = 0xdc00 + (0x3ff & qkyx1);return String['fromCharCode'](t28zpe, t8c2ae);
    }return String['fromCharCode'](qkyx1);
  }function bvfwd$(oc8gae) {
    var gso4_6 = oc8gae['slice'](0x1, -0x1);return gso4_6 in imh5nj ? imh5nj[gso4_6] : '#' === gso4_6['charAt'](0x0) ? ct28a(parseInt(gso4_6['substr'](0x1)['replace']('x', '0x'))) : (_so47['error']('entity not found:' + oc8gae), oc8gae);
  }function o64asg(s_j74m) {
    if (s_j74m > mnj5ih) {
      var ga2 = nlh5m['substring'](mnj5ih, s_j74m)['replace'](/&#?\w+;/g, bvfwd$);t82ez && fdwvr(mnj5ih), vrdfw['characters'](ga2, 0x0, s_j74m - mnj5ih), mnj5ih = s_j74m;
    }
  }function fdwvr(sgo_, mij5hn) {
    for (; sgo_ >= jn && (mij5hn = db0$5['exec'](nlh5m));) hmi7n = mij5hn['index'], jn = hmi7n + mij5hn[0x0]['length'], t82ez['lineNumber']++;t82ez['columnNumber'] = sgo_ - hmi7n + 0x1;
  }for (var hmi7n = 0x0, jn = 0x0, db0$5 = /.*(?:\r\n?|\n)|.*$/g, t82ez = vrdfw['locator'], os_64g = [{ 'currentNSMap': bvfrdw }], e2t8pz = {}, mnj5ih = 0x0;;) {
    try {
      var $dw0lb = nlh5m['indexOf']('<', mnj5ih);if (0x0 > $dw0lb) {
        if (!nlh5m['substr'](mnj5ih)['match'](/^\s*$/)) {
          var k19f = vrdfw['doc'],
              sg6o_ = k19f['createTextNode'](nlh5m['substr'](mnj5ih));k19f['appendChild'](sg6o_), vrdfw['currentElement'] = sg6o_;
        }return;
      }switch ($dw0lb > mnj5ih && o64asg($dw0lb), nlh5m['charAt']($dw0lb + 0x1)) {case '/':
          var s_j76 = nlh5m['indexOf']('>', $dw0lb + 0x3),
              _46osg = nlh5m['substring']($dw0lb + 0x2, s_j76),
              im5nj = os_64g['pop']();0x0 > s_j76 ? (_46osg = nlh5m['substring']($dw0lb + 0x2)['replace'](/[\s<].*/, ''), _so47['error']('end tag name: ' + _46osg + ' is not complete:' + im5nj['tagName']), s_j76 = $dw0lb + 0x1 + _46osg['length']) : _46osg['match'](/\s</) && (_46osg = _46osg['replace'](/[\s<].*/, ''), _so47['error']('end tag name: ' + _46osg + ' maybe not complete'), s_j76 = $dw0lb + 0x1 + _46osg['length']);var wvf1r9 = im5nj['localNSMap'],
              yukq1 = im5nj['tagName'] == _46osg,
              x3yk = yukq1 || im5nj['tagName'] && im5nj['tagName']['toLowerCase']() == _46osg['toLowerCase']();if (x3yk) {
            if (vrdfw['endElement'](im5nj['uri'], im5nj['localName'], _46osg), wvf1r9) {
              for (var caso in wvf1r9) vrdfw['endPrefixMapping'](caso);
            }yukq1 || _so47['fatalError']('end tag name: ' + _46osg + ' is not match the current start tagName:' + im5nj['tagName']);
          } else os_64g['push'](im5nj);s_j76++;break;case '?':
          t82ez && fdwvr($dw0lb), s_j76 = M_f0bwd$(nlh5m, $dw0lb, vrdfw);break;case '!':
          t82ez && fdwvr($dw0lb), s_j76 = M_c28g(nlh5m, $dw0lb, vrdfw, _so47);break;default:
          t82ez && fdwvr($dw0lb);var caeo8 = new M_s7jm4(),
              b0$fw = os_64g[os_64g['length'] - 0x1]['currentNSMap'],
              s_j76 = M_ihjnm(nlh5m, $dw0lb, caeo8, b0$fw, bvfwd$, _so47),
              n7mji = caeo8['length'];if (!caeo8['closed'] && M_lhi5nm(nlh5m, s_j76, caeo8['tagName'], e2t8pz) && (caeo8['closed'] = !0x0, imh5nj['nbsp'] || _so47['warning']('unclosed xml attribute')), t82ez && n7mji) {
            for (var $ild = M_js647(t82ez, {}), c2aeg = 0x0; n7mji > c2aeg; c2aeg++) {
              var wb$0f = caeo8[c2aeg];fdwvr(wb$0f['offset']), wb$0f['locator'] = M_js647(t82ez, {});
            }vrdfw['locator'] = $ild, M_lin50(caeo8, vrdfw, b0$fw) && os_64g['push'](caeo8), vrdfw['locator'] = t82ez;
          } else M_lin50(caeo8, vrdfw, b0$fw) && os_64g['push'](caeo8);'http://www.w3.org/1999/xhtml' !== caeo8['uri'] || caeo8['closed'] ? s_j76++ : s_j76 = M_s4_g6(nlh5m, s_j76, caeo8['tagName'], bvfwd$, vrdfw);}
    } catch (ca2g8e) {
      _so47['error']('element parse error: ' + ca2g8e), s_j76 = -0x1;
    }s_j76 > mnj5ih ? mnj5ih = s_j76 : o64asg(Math['max']($dw0lb, mnj5ih) + 0x1);
  }
}function M_js647(gc8a, gsa6c) {
  return gsa6c['lineNumber'] = gc8a['lineNumber'], gsa6c['columnNumber'] = gc8a['columnNumber'], gsa6c;
}function M_ihjnm(fbrv, sj64_7, e82, ilm5hn, xqu1ky, wfbd0$) {
  for (var qxky1u, l$0ni5, imhj5 = ++sj64_7, uky3x = M_rvbdw;;) {
    var dwbf$v = fbrv['charAt'](imhj5);switch (dwbf$v) {case '=':
        if (uky3x === M__4o6s7) qxky1u = fbrv['slice'](sj64_7, imhj5), uky3x = M_kqux3y;else {
          if (uky3x !== M_il0nh) throw new Error('attribute equal must after attrName');uky3x = M_kqux3y;
        }break;case '\x27':case '\x22':
        if (uky3x === M_kqux3y || uky3x === M__4o6s7) {
          if (uky3x === M__4o6s7 && (wfbd0$['warning']('attribute value must after "="'), qxky1u = fbrv['slice'](sj64_7, imhj5)), sj64_7 = imhj5 + 0x1, imhj5 = fbrv['indexOf'](dwbf$v, sj64_7), !(imhj5 > 0x0)) throw new Error('attribute value no end \'' + dwbf$v + '\' match');l$0ni5 = fbrv['slice'](sj64_7, imhj5)['replace'](/&#?\w+;/g, xqu1ky), e82['add'](qxky1u, l$0ni5, sj64_7 - 0x1), uky3x = M_z8t2p;
        } else {
          if (uky3x != M_hj47m) throw new Error('attribute value must after "="');l$0ni5 = fbrv['slice'](sj64_7, imhj5)['replace'](/&#?\w+;/g, xqu1ky), e82['add'](qxky1u, l$0ni5, sj64_7), wfbd0$['warning']('attribute "' + qxky1u + '" missed start quot(' + dwbf$v + ')!!'), sj64_7 = imhj5 + 0x1, uky3x = M_z8t2p;
        }break;case '/':
        switch (uky3x) {case M_rvbdw:
            e82['setTagName'](fbrv['slice'](sj64_7, imhj5));case M_z8t2p:case M_in5mh:case M_g82ec:
            uky3x = M_g82ec, e82['closed'] = !0x0;case M_hj47m:case M__4o6s7:case M_il0nh:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return wfbd0$['error']('unexpected end of input'), uky3x == M_rvbdw && e82['setTagName'](fbrv['slice'](sj64_7, imhj5)), imhj5;case '>':
        switch (uky3x) {case M_rvbdw:
            e82['setTagName'](fbrv['slice'](sj64_7, imhj5));case M_z8t2p:case M_in5mh:case M_g82ec:
            break;case M_hj47m:case M__4o6s7:
            l$0ni5 = fbrv['slice'](sj64_7, imhj5), '/' === l$0ni5['slice'](-0x1) && (e82['closed'] = !0x0, l$0ni5 = l$0ni5['slice'](0x0, -0x1));case M_il0nh:
            uky3x === M_il0nh && (l$0ni5 = qxky1u), uky3x == M_hj47m ? (wfbd0$['warning']('attribute "' + l$0ni5 + '" missed quot(")!!'), e82['add'](qxky1u, l$0ni5['replace'](/&#?\w+;/g, xqu1ky), sj64_7)) : ('http://www.w3.org/1999/xhtml' === ilm5hn[''] && l$0ni5['match'](/^(?:disabled|checked|selected)$/i) || wfbd0$['warning']('attribute "' + l$0ni5 + '" missed value!! "' + l$0ni5 + '" instead!!'), e82['add'](l$0ni5, l$0ni5, sj64_7));break;case M_kqux3y:
            throw new Error('attribute value missed!!');}return imhj5;case '\u0080':
        dwbf$v = '\x20';default:
        if ('\x20' >= dwbf$v) switch (uky3x) {case M_rvbdw:
            e82['setTagName'](fbrv['slice'](sj64_7, imhj5)), uky3x = M_in5mh;break;case M__4o6s7:
            qxky1u = fbrv['slice'](sj64_7, imhj5), uky3x = M_il0nh;break;case M_hj47m:
            var l$0ni5 = fbrv['slice'](sj64_7, imhj5)['replace'](/&#?\w+;/g, xqu1ky);wfbd0$['warning']('attribute "' + l$0ni5 + '" missed quot(")!!'), e82['add'](qxky1u, l$0ni5, sj64_7);case M_z8t2p:
            uky3x = M_in5mh;} else switch (uky3x) {case M_il0nh:
            {
              e82['tagName'];
            }'http://www.w3.org/1999/xhtml' === ilm5hn[''] && qxky1u['match'](/^(?:disabled|checked|selected)$/i) || wfbd0$['warning']('attribute "' + qxky1u + '" missed value!! "' + qxky1u + '" instead2!!'), e82['add'](qxky1u, qxky1u, sj64_7), sj64_7 = imhj5, uky3x = M__4o6s7;break;case M_z8t2p:
            wfbd0$['warning']('attribute space is required"' + qxky1u + '\x22!!');case M_in5mh:
            uky3x = M__4o6s7, sj64_7 = imhj5;break;case M_kqux3y:
            uky3x = M_hj47m, sj64_7 = imhj5;break;case M_g82ec:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}imhj5++;
  }
}function M_lin50(oags46, w$vbfd, vwbd) {
  for (var xy3kq = oags46['tagName'], jms_47 = null, l0db5 = oags46['length']; l0db5--;) {
    var wfd$ = oags46[l0db5],
        qy1uxk = wfd$['qName'],
        krfv9 = wfd$['value'],
        s_4og6 = qy1uxk['indexOf'](':');if (s_4og6 > 0x0) var s4a = wfd$['prefix'] = qy1uxk['slice'](0x0, s_4og6),
        il5$n = qy1uxk['slice'](s_4og6 + 0x1),
        g68co = 'xmlns' === s4a && il5$n;else il5$n = qy1uxk, s4a = null, g68co = 'xmlns' === qy1uxk && '';wfd$['localName'] = il5$n, g68co !== !0x1 && (null == jms_47 && (jms_47 = {}, M_j_h7m4(vwbd, vwbd = {})), vwbd[g68co] = jms_47[g68co] = krfv9, wfd$['uri'] = 'http://www.w3.org/2000/xmlns/', w$vbfd['startPrefixMapping'](g68co, krfv9));
  }for (var l0db5 = oags46['length']; l0db5--;) {
    wfd$ = oags46[l0db5];var s4a = wfd$['prefix'];s4a && ('xml' === s4a && (wfd$['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== s4a && (wfd$['uri'] = vwbd[s4a || '']));
  }var s_4og6 = xy3kq['indexOf'](':');s_4og6 > 0x0 ? (s4a = oags46['prefix'] = xy3kq['slice'](0x0, s_4og6), il5$n = oags46['localName'] = xy3kq['slice'](s_4og6 + 0x1)) : (s4a = null, il5$n = oags46['localName'] = xy3kq);var wd$vb = oags46['uri'] = vwbd[s4a || ''];if (w$vbfd['startElement'](wd$vb, il5$n, xy3kq, oags46), !oags46['closed']) return oags46['currentNSMap'] = vwbd, oags46['localNSMap'] = jms_47, !0x0;if (w$vbfd['endElement'](wd$vb, il5$n, xy3kq), jms_47) {
    for (s4a in jms_47) w$vbfd['endPrefixMapping'](s4a);
  }
}function M_s4_g6(w$lb0, $dl5i, rk19f, gas46, d0$l) {
  if (/^(?:script|textarea)$/i['test'](rk19f)) {
    var h5imn = w$lb0['indexOf']('</' + rk19f + '>', $dl5i),
        dwv$bf = w$lb0['substring']($dl5i + 0x1, h5imn);if (/[&<]/['test'](dwv$bf)) return (/^script$/i['test'](rk19f) ? (d0$l['characters'](dwv$bf, 0x0, dwv$bf['length']), h5imn) : (dwv$bf = dwv$bf['replace'](/&#?\w+;/g, gas46), d0$l['characters'](dwv$bf, 0x0, dwv$bf['length']), h5imn)
    );
  }return $dl5i + 0x1;
}function M_lhi5nm(ij5h, sga4o6, fbd$vw, n5l0ih) {
  var fdw$0 = n5l0ih[fbd$vw];return null == fdw$0 && (fdw$0 = ij5h['lastIndexOf']('</' + fbd$vw + '>'), sga4o6 > fdw$0 && (fdw$0 = ij5h['lastIndexOf']('</' + fbd$vw)), n5l0ih[fbd$vw] = fdw$0), sga4o6 > fdw$0;
}function M_j_h7m4(ge8oac, fwdvb$) {
  for (var yquk3x in ge8oac) fwdvb$[yquk3x] = ge8oac[yquk3x];
}function M_c28g(czt2e, f19vw, mh7_n, oc6gas) {
  var xur91 = czt2e['charAt'](f19vw + 0x2);switch (xur91) {case '-':
      if ('-' === czt2e['charAt'](f19vw + 0x3)) {
        var r9kx1v = czt2e['indexOf']('-->', f19vw + 0x4);return r9kx1v > f19vw ? (mh7_n['comment'](czt2e, f19vw + 0x4, r9kx1v - f19vw - 0x4), r9kx1v + 0x3) : (oc6gas['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == czt2e['substr'](f19vw + 0x3, 0x6)) {
        var r9kx1v = czt2e['indexOf'](']]>', f19vw + 0x9);return mh7_n['startCDATA'](), mh7_n['characters'](czt2e, f19vw + 0x9, r9kx1v - f19vw - 0x9), mh7_n['endCDATA'](), r9kx1v + 0x3;
      }var kf1v9 = M_uyx19k(czt2e, f19vw),
          frdwv = kf1v9['length'];if (frdwv > 0x1 && /!doctype/i['test'](kf1v9[0x0][0x0])) {
        var uky19x = kf1v9[0x1][0x0],
            rbvf = frdwv > 0x3 && /^public$/i['test'](kf1v9[0x2][0x0]) && kf1v9[0x3][0x0],
            _m7 = frdwv > 0x4 && kf1v9[0x4][0x0],
            hijnm5 = kf1v9[frdwv - 0x1];return mh7_n['startDTD'](uky19x, rbvf && rbvf['replace'](/^(['"])(.*?)\1$/, '$2'), _m7 && _m7['replace'](/^(['"])(.*?)\1$/, '$2')), mh7_n['endDTD'](), hijnm5['index'] + hijnm5[0x0]['length'];
      }}return -0x1;
}function M_f0bwd$(qyukx1, k3xuyq, _o7s64) {
  var o46g_ = qyukx1['indexOf']('?>', k3xuyq);if (o46g_) {
    var uxy3k = qyukx1['substring'](k3xuyq, o46g_)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (uxy3k) {
      {
        uxy3k[0x0]['length'];
      }return _o7s64['processingInstruction'](uxy3k[0x1], uxy3k[0x2]), o46g_ + 0x2;
    }return -0x1;
  }return -0x1;
}function M_s7jm4() {}function M_$i50ln(go6ca, u1qyxk) {
  return go6ca['__proto__'] = u1qyxk, go6ca;
}function M_uyx19k(ezc82t, c8g2ea) {
  var bfwr9v,
      b0fdw = [],
      wdvfb$ = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (wdvfb$['lastIndex'] = c8g2ea, wdvfb$['exec'](ezc82t); bfwr9v = wdvfb$['exec'](ezc82t);) if (b0fdw['push'](bfwr9v), bfwr9v[0x1]) return b0fdw;
}var M_blw$d0 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    M_i0$l5n = new RegExp('[\\-\\.0-9' + M_blw$d0['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    M_n5iml = new RegExp('^' + M_blw$d0['source'] + M_i0$l5n['source'] + '*(?::' + M_blw$d0['source'] + M_i0$l5n['source'] + '*)?$'),
    M_rvbdw = 0x0,
    M__4o6s7 = 0x1,
    M_il0nh = 0x2,
    M_kqux3y = 0x3,
    M_hj47m = 0x4,
    M_z8t2p = 0x5,
    M_in5mh = 0x6,
    M_g82ec = 0x7;M_tp2e8z['prototype'] = { 'parse': function (fd0$b, w$b0d, $fb0wd) {
    var rwbd = this['domBuilder'];rwbd['startDocument'](), M_j_h7m4(w$b0d, w$b0d = {}), M_wr1f(fd0$b, w$b0d, $fb0wd, rwbd, this['errorHandler']), rwbd['endDocument']();
  } }, M_s7jm4['prototype'] = { 'setTagName': function (agce) {
    if (!M_n5iml['test'](agce)) throw new Error('invalid tagName:' + agce);this['tagName'] = agce;
  }, 'add': function (o4gs6_, vwbdrf, ct82ae) {
    if (!M_n5iml['test'](o4gs6_)) throw new Error('invalid attribute:' + o4gs6_);this[this['length']++] = { 'qName': o4gs6_, 'value': vwbdrf, 'offset': ct82ae };
  }, 'length': 0x0, 'getLocalName': function (lmh5ni) {
    return this[lmh5ni]['localName'];
  }, 'getLocator': function (w$dfvb) {
    return this[w$dfvb]['locator'];
  }, 'getQName': function (krx19u) {
    return this[krx19u]['qName'];
  }, 'getURI': function (xv91r) {
    return this[xv91r]['uri'];
  }, 'getValue': function (o7_64) {
    return this[o7_64]['value'];
  } }, M_$i50ln({}, M_$i50ln['prototype']) instanceof M_$i50ln || (M_$i50ln = function (k1qyu, t8zp) {
  function ep2tz() {}ep2tz['prototype'] = t8zp, ep2tz = new ep2tz();for (t8zp in k1qyu) ep2tz[t8zp] = k1qyu[t8zp];return ep2tz;
}), exports['XMLReader'] = M_tp2e8z;