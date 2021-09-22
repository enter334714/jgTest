var k = wx.$f;
function ftamqp() {}function fhw50nu(w52h, y1icm, nw5uh, ehp5, eh2p) {
  function yo1c(y1mc) {
    var ivamc = y1mc['slice'](0x1, -0x1);return ivamc in nw5uh ? nw5uh[ivamc] : '#' === ivamc['charAt'](0x0) ? 0xffff < (ivamc = parseInt(ivamc['substr'](0x1)['replace']('x', '0x'))) ? (ivamc -= 0x10000, String['fromCharCode'](0xd800 + (ivamc >> 0xa), 0xdc00 + (0x3ff & ivamc))) : String['fromCharCode'](ivamc) : (eh2p['error']('entity not found:' + y1mc), y1mc);
  }function g$4kzr(nu_s0d) {
    var sd4kr;vqtpam < nu_s0d && (sd4kr = w52h['substring'](vqtpam, nu_s0d)['replace'](/&#?\w+;/g, yo1c), e25wpq && m1aciy(vqtpam), ehp5['characters'](sd4kr, 0x0, nu_s0d - vqtpam), vqtpam = nu_s0d);
  }function m1aciy(sd0u_, w20hn5) {
    for (; $zrj <= sd0u_ && (w20hn5 = $4zgrk['exec'](w52h));) dh0u_n = w20hn5['index'], $zrj = dh0u_n + w20hn5[0x0]['length'], e25wpq['lineNumber']++;e25wpq['columnNumber'] = sd0u_ - dh0u_n + 0x1;
  }for (var dh0u_n = 0x0, $zrj = 0x0, $4zgrk = /.*(?:\r\n?|\n)|.*$/g, e25wpq = ehp5['locator'], icm1a = [{ 'currentNSMap': y1icm }], h0w5e = {}, vqtpam = 0x0;;) {
    try {
      var sd$4 = w52h['indexOf']('<', vqtpam),
          pq2et,
          w02hn;if (sd$4 < 0x0) return void (w52h['substr'](vqtpam)['match'](/^\s*$/) || (w02hn = (pq2et = ehp5['doc'])['createTextNode'](w52h['substr'](vqtpam)), pq2et['appendChild'](w02hn), ehp5['currentElement'] = w02hn));switch (vqtpam < sd$4 && g$4kzr(sd$4), w52h['charAt'](sd$4 + 0x1)) {case '/':
          var kg$rs = w52h['indexOf']('>', sd$4 + 0x3),
              etp2v = w52h['substring'](sd$4 + 0x2, kg$rs),
              _dus = icm1a['pop']();kg$rs < 0x0 ? (etp2v = w52h['substring'](sd$4 + 0x2)['replace'](/[\s<].*/, ''), eh2p['error']('end tag name: ' + etp2v + ' is not complete:' + _dus['tagName']), kg$rs = sd$4 + 0x1 + etp2v['length']) : etp2v['match'](/\s</) && (etp2v = etp2v['replace'](/[\s<].*/, ''), eh2p['error']('end tag name: ' + etp2v + ' maybe not complete'), kg$rs = sd$4 + 0x1 + etp2v['length']);var ymvti = _dus['localNSMap'],
              xr4jgz = _dus['tagName'] == etp2v;if (xr4jgz || _dus['tagName'] && _dus['tagName']['toLowerCase']() == etp2v['toLowerCase']()) {
            if (ehp5['endElement'](_dus['uri'], _dus['localName'], etp2v), ymvti) {
              for (var oa1i in ymvti) ehp5['endPrefixMapping'](oa1i);
            }xr4jgz || eh2p['fatalError']('end tag name: ' + etp2v + ' is not match the current start tagName:' + _dus['tagName']);
          } else icm1a['push'](_dus);kg$rs++;break;case '?':
          e25wpq && m1aciy(sd$4), kg$rs = fwn2h5(w52h, sd$4, ehp5);break;case '!':
          e25wpq && m1aciy(sd$4), kg$rs = fh2we0(w52h, sd$4, ehp5, eh2p);break;default:
          e25wpq && m1aciy(sd$4);var h0u5n = new fcy6i(),
              eptqvm = icm1a[icm1a['length'] - 0x1]['currentNSMap'],
              kg$rs = fqpam(w52h, sd$4, h0u5n, eptqvm, yo1c, eh2p),
              u0wnh5 = h0u5n['length'];if (!h0u5n['closed'] && fimavy(w52h, kg$rs, h0u5n['tagName'], h0w5e) && (h0u5n['closed'] = !0x0, nw5uh['nbsp'] || eh2p['warning']('unclosed xml attribute')), e25wpq && u0wnh5) {
            for (var kus_ = fu0hd_n(e25wpq, {}), gxzjr = 0x0; gxzjr < u0wnh5; gxzjr++) {
              var $rskd = h0u5n[gxzjr];m1aciy($rskd['offset']), $rskd['locator'] = fu0hd_n(e25wpq, {});
            }ehp5['locator'] = kus_, fw5uhn0(h0u5n, ehp5, eptqvm) && icm1a['push'](h0u5n), ehp5['locator'] = e25wpq;
          } else fw5uhn0(h0u5n, ehp5, eptqvm) && icm1a['push'](h0u5n);'http://www.w3.org/1999/xhtml' !== h0u5n['uri'] || h0u5n['closed'] ? kg$rs++ : kg$rs = fd0uh_n(w52h, kg$rs, h0u5n['tagName'], yo1c, ehp5);}
    } catch (eh2w5p) {
      eh2p['error']('element parse error: ' + eh2w5p), kg$rs = -0x1;
    }vqtpam < kg$rs ? vqtpam = kg$rs : g$4kzr(Math['max'](sd$4, vqtpam) + 0x1);
  }
}function fu0hd_n(k$zrg, q2ew5) {
  return q2ew5['lineNumber'] = k$zrg['lineNumber'], q2ew5['columnNumber'] = k$zrg['columnNumber'], q2ew5;
}function fqpam(ytmiva, gjz$r, oac1iy, n5_u0h, $u_sd, hn2w0) {
  for (var avqtp, r$jz4 = ++gjz$r, _d4s$ = fpmvteq;;) {
    var ewpqt2 = ytmiva['charAt'](r$jz4);switch (ewpqt2) {case '=':
        if (_d4s$ === fz3xgr) avqtp = ytmiva['slice'](gjz$r, r$jz4), _d4s$ = fcy6;else {
          if (_d4s$ !== fmvtqep) throw new Error('attribute equal must after attrName');_d4s$ = fcy6;
        }break;case '\x27':case '\x22':
        if (_d4s$ === fcy6 || _d4s$ === fz3xgr) {
          if (_d4s$ === fz3xgr && (hn2w0['warning']('attribute value must after "="'), avqtp = ytmiva['slice'](gjz$r, r$jz4)), !(0x0 < (r$jz4 = ytmiva['indexOf'](ewpqt2, gjz$r = r$jz4 + 0x1)))) throw new Error('attribute value no end \'' + ewpqt2 + '\' match');t2vp = ytmiva['slice'](gjz$r, r$jz4)['replace'](/&#?\w+;/g, $u_sd), oac1iy['add'](avqtp, t2vp, gjz$r - 0x1), _d4s$ = fh5nuw;
        } else {
          if (_d4s$ != ftev2p) throw new Error('attribute value must after "="');t2vp = ytmiva['slice'](gjz$r, r$jz4)['replace'](/&#?\w+;/g, $u_sd), oac1iy['add'](avqtp, t2vp, gjz$r), hn2w0['warning']('attribute "' + avqtp + '" missed start quot(' + ewpqt2 + ')!!'), gjz$r = r$jz4 + 0x1, _d4s$ = fh5nuw;
        }break;case '/':
        switch (_d4s$) {case fpmvteq:
            oac1iy['setTagName'](ytmiva['slice'](gjz$r, r$jz4));case fh5nuw:case fk4rsd:case fyit:
            _d4s$ = fyit, oac1iy['closed'] = !0x0;case ftev2p:case fz3xgr:case fmvtqep:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return hn2w0['error']('unexpected end of input'), _d4s$ == fpmvteq && oac1iy['setTagName'](ytmiva['slice'](gjz$r, r$jz4)), r$jz4;case '>':
        switch (_d4s$) {case fpmvteq:
            oac1iy['setTagName'](ytmiva['slice'](gjz$r, r$jz4));case fh5nuw:case fk4rsd:case fyit:
            break;case ftev2p:case fz3xgr:
            '/' === (t2vp = ytmiva['slice'](gjz$r, r$jz4))['slice'](-0x1) && (oac1iy['closed'] = !0x0, t2vp = t2vp['slice'](0x0, -0x1));case fmvtqep:
            _d4s$ === fmvtqep && (t2vp = avqtp), _d4s$ == ftev2p ? (hn2w0['warning']('attribute "' + t2vp + '" missed quot(")!!'), oac1iy['add'](avqtp, t2vp['replace'](/&#?\w+;/g, $u_sd), gjz$r)) : ('http://www.w3.org/1999/xhtml' === n5_u0h[''] && t2vp['match'](/^(?:disabled|checked|selected)$/i) || hn2w0['warning']('attribute "' + t2vp + '" missed value!! "' + t2vp + '" instead!!'), oac1iy['add'](t2vp, t2vp, gjz$r));break;case fcy6:
            throw new Error('attribute value missed!!');}return r$jz4;case '\u0080':
        ewpqt2 = '\x20';default:
        if (ewpqt2 <= '\x20') switch (_d4s$) {case fpmvteq:
            oac1iy['setTagName'](ytmiva['slice'](gjz$r, r$jz4)), _d4s$ = fk4rsd;break;case fz3xgr:
            avqtp = ytmiva['slice'](gjz$r, r$jz4), _d4s$ = fmvtqep;break;case ftev2p:
            var t2vp = ytmiva['slice'](gjz$r, r$jz4)['replace'](/&#?\w+;/g, $u_sd);hn2w0['warning']('attribute "' + t2vp + '" missed quot(")!!'), oac1iy['add'](avqtp, t2vp, gjz$r);case fh5nuw:
            _d4s$ = fk4rsd;} else switch (_d4s$) {case fmvtqep:
            oac1iy['tagName'], 'http://www.w3.org/1999/xhtml' === n5_u0h[''] && avqtp['match'](/^(?:disabled|checked|selected)$/i) || hn2w0['warning']('attribute "' + avqtp + '" missed value!! "' + avqtp + '" instead2!!'), oac1iy['add'](avqtp, avqtp, gjz$r), gjz$r = r$jz4, _d4s$ = fz3xgr;break;case fh5nuw:
            hn2w0['warning']('attribute space is required"' + avqtp + '\x22!!');case fk4rsd:
            _d4s$ = fz3xgr, gjz$r = r$jz4;break;case fcy6:
            _d4s$ = ftev2p, gjz$r = r$jz4;break;case fyit:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}r$jz4++;
  }
}function fw5uhn0(ayv, iqmvta, gks4r) {
  for (var y6io = ayv['tagName'], imcya1 = null, d_nsku = ayv['length']; d_nsku--;) {
    var _4dk = ayv[d_nsku],
        s$4kd = _4dk['qName'],
        nhu_d = _4dk['value'],
        hw52n0;s$4kd = 0x0 < (u_h05n = s$4kd['indexOf'](':')) ? (phew5 = _4dk['prefix'] = s$4kd['slice'](0x0, u_h05n), hw52n0 = s$4kd['slice'](u_h05n + 0x1), 'xmlns' === phew5 && hw52n0) : (phew5 = null, 'xmlns' === (hw52n0 = s$4kd) && ''), _4dk['localName'] = hw52n0, !0x1 !== s$4kd && (null == imcya1 && (imcya1 = {}, fq2pwe5(gks4r, gks4r = {})), gks4r[s$4kd] = imcya1[s$4kd] = nhu_d, _4dk['uri'] = 'http://www.w3.org/2000/xmlns/', iqmvta['startPrefixMapping'](s$4kd, nhu_d));
  }for (d_nsku = ayv['length']; d_nsku--;) (phew5 = (_4dk = ayv[d_nsku])['prefix']) && ('xml' === phew5 && (_4dk['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== phew5 && (_4dk['uri'] = gks4r[phew5 || '']));var u_h05n;hw52n0 = 0x0 < (u_h05n = y6io['indexOf'](':')) ? (phew5 = ayv['prefix'] = y6io['slice'](0x0, u_h05n), ayv['localName'] = y6io['slice'](u_h05n + 0x1)) : (phew5 = null, ayv['localName'] = y6io);var atpqvm = ayv['uri'] = gks4r[phew5 || ''];if (iqmvta['startElement'](atpqvm, hw52n0, y6io, ayv), !ayv['closed']) return ayv['currentNSMap'] = gks4r, ayv['localNSMap'] = imcya1, !0x0;if (iqmvta['endElement'](atpqvm, hw52n0, y6io), imcya1) {
    for (var phew5 in imcya1) iqmvta['endPrefixMapping'](phew5);
  }
}function fd0uh_n(acimy, mvaty, udns_, b9786, vayim) {
  if (/^(?:script|textarea)$/i['test'](udns_)) {
    var hun0_ = acimy['indexOf']('</' + udns_ + '>', mvaty),
        acimy = acimy['substring'](mvaty + 0x1, hun0_);if (/[&<]/['test'](acimy)) return (/^script$/i['test'](udns_) || (acimy = acimy['replace'](/&#?\w+;/g, b9786)), vayim['characters'](acimy, 0x0, acimy['length']), hun0_
    );
  }return mvaty + 0x1;
}function fimavy(_uhd0, j3gzx, wn02, iaoyc1) {
  var civ = iaoyc1[wn02];return null == civ && ((civ = _uhd0['lastIndexOf']('</' + wn02 + '>')) < j3gzx && (civ = _uhd0['lastIndexOf']('</' + wn02)), iaoyc1[wn02] = civ), civ < j3gzx;
}function fq2pwe5(o8b7, qmiat) {
  for (var iamvt in o8b7) qmiat[iamvt] = o8b7[iamvt];
}function fh2we0(u5nh0w, iqat, vaiyt, i1yo6c) {
  var u_dk$s = u5nh0w['charAt'](iqat + 0x2);if ('-' === u_dk$s) return '-' !== u5nh0w['charAt'](iqat + 0x3) ? -0x1 : iqat < (su$kd_ = u5nh0w['indexOf']('-->', iqat + 0x4)) ? (vaiyt['comment'](u5nh0w, iqat + 0x4, su$kd_ - iqat - 0x4), su$kd_ + 0x3) : (i1yo6c['error']('Unclosed comment'), -0x1);if ('CDATA[' == u5nh0w['substr'](iqat + 0x3, 0x6)) {
    var su$kd_ = u5nh0w['indexOf'](']]>', iqat + 0x9);return vaiyt['startCDATA'](), vaiyt['characters'](u5nh0w, iqat + 0x9, su$kd_ - iqat - 0x9), vaiyt['endCDATA'](), su$kd_ + 0x3;
  }u_dk$s = fb89f6(u5nh0w, iqat), i1yo6c = u_dk$s['length'];if (0x1 < i1yo6c && /!doctype/i['test'](u_dk$s[0x0][0x0])) return su$kd_ = u_dk$s[0x1][0x0], u5nh0w = 0x3 < i1yo6c && /^public$/i['test'](u_dk$s[0x2][0x0]) && u_dk$s[0x3][0x0], iqat = 0x4 < i1yo6c && u_dk$s[0x4][0x0], i1yo6c = u_dk$s[i1yo6c - 0x1], (vaiyt['startDTD'](su$kd_, u5nh0w && u5nh0w['replace'](/^(['"])(.*?)\1$/, '$2'), iqat && iqat['replace'](/^(['"])(.*?)\1$/, '$2')), vaiyt['endDTD'](), i1yo6c['index'] + i1yo6c[0x0]['length']);return -0x1;
}function fwn2h5(j$gzr, qaimtv, pvaqm) {
  var xg3zj = j$gzr['indexOf']('?>', qaimtv);if (xg3zj) return qaimtv = j$gzr['substring'](qaimtv, xg3zj)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), qaimtv ? (qaimtv[0x0]['length'], pvaqm['processingInstruction'](qaimtv[0x1], qaimtv[0x2]), xg3zj + 0x2) : -0x1;return -0x1;
}function fcy6i() {}function f$uks_d(vtqai, ob91) {
  return vtqai['__proto__'] = ob91, vtqai;
}function fb89f6(mvaiqt, avimc) {
  var zjxr,
      vtpqam = [],
      hw250e = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (hw250e['lastIndex'] = avimc, hw250e['exec'](mvaiqt); zjxr = hw250e['exec'](mvaiqt);) if (vtpqam['push'](zjxr), zjxr[0x1]) return vtpqam;
}var fpvam = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    fh5w2p = new RegExp('[\\-\\.0-9' + fpvam['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    frsk$g = new RegExp('^' + fpvam['source'] + fh5w2p['source'] + '*(?::' + fpvam['source'] + fh5w2p['source'] + '*)?$'),
    fpmvteq = 0x0,
    fz3xgr = 0x1,
    fmvtqep = 0x2,
    fcy6 = 0x3,
    ftev2p = 0x4,
    fh5nuw = 0x5,
    fk4rsd = 0x6,
    fyit = 0x7;ftamqp['prototype'] = { 'parse': function (sd4$kr, mvqept, wetpq) {
    var zj3 = this['domBuilder'];zj3['startDocument'](), fq2pwe5(mvqept, mvqept = {}), fhw50nu(sd4$kr, mvqept, wetpq, zj3, this['errorHandler']), zj3['endDocument']();
  } }, fcy6i['prototype'] = { 'setTagName': function (rs$d) {
    if (!frsk$g['test'](rs$d)) throw new Error('invalid tagName:' + rs$d);this['tagName'] = rs$d;
  }, 'add': function (_su$k, q2pwet, r3xjg) {
    if (!frsk$g['test'](_su$k)) throw new Error('invalid attribute:' + _su$k);this[this['length']++] = { 'qName': _su$k, 'value': q2pwet, 'offset': r3xjg };
  }, 'length': 0x0, 'getLocalName': function ($kdr4) {
    return this[$kdr4]['localName'];
  }, 'getLocator': function (tavyim) {
    return this[tavyim]['locator'];
  }, 'getQName': function (_u0nds) {
    return this[_u0nds]['qName'];
  }, 'getURI': function (yviam) {
    return this[yviam]['uri'];
  }, 'getValue': function (y6ic1o) {
    return this[y6ic1o]['value'];
  } }, f$uks_d({}, f$uks_d['prototype']) instanceof f$uks_d || (f$uks_d = function (un50, us_dkn) {
  function $zgrk() {}for (us_dkn in $zgrk['prototype'] = us_dkn, $zgrk = new $zgrk(), un50) $zgrk[us_dkn] = un50[us_dkn];return $zgrk;
}), exports['XMLReader'] = ftamqp;