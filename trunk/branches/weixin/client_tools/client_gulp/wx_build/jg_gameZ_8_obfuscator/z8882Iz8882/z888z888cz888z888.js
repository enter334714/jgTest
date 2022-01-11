var G = wx.$G;
function axhiyt() {}function ahicx(sme_, uw10p, szr_m, nmbz, cxhi) {
  function $r_sqe($s_re) {
    if ($s_re > 0xffff) {
      $s_re -= 0x10000;var zbxmn = 0xd800 + ($s_re >> 0xa),
          yij2 = 0xdc00 + (0x3ff & $s_re);return String['fromCharCode'](zbxmn, yij2);
    }return String['fromCharCode']($s_re);
  }function chiy2j(hc2jy) {
    var wud01o = hc2jy['slice'](0x1, -0x1);return wud01o in szr_m ? szr_m[wud01o] : '#' === wud01o['charAt'](0x0) ? $r_sqe(parseInt(wud01o['substr'](0x1)['replace']('x', '0x'))) : (cxhi['error']('entity not found:' + hc2jy), hc2jy);
  }function byxit(klv7a) {
    if (klv7a > nzbtx) {
      var va675 = sme_['substring'](nzbtx, klv7a)['replace'](/&#?\w+;/g, chiy2j);_38qe && _r$e(nzbtx), nmbz['characters'](va675, 0x0, klv7a - nzbtx), nzbtx = klv7a;
    }
  }function _r$e(lka6v7, ithxy2) {
    for (; lka6v7 >= es_qr$ && (ithxy2 = _r$se['exec'](sme_));) tzbx = ithxy2['index'], es_qr$ = tzbx + ithxy2[0x0]['length'], _38qe['lineNumber']++;_38qe['columnNumber'] = lka6v7 - tzbx + 0x1;
  }for (var tzbx = 0x0, es_qr$ = 0x0, _r$se = /.*(?:\r\n?|\n)|.*$/g, _38qe = nmbz['locator'], wu109p = [{ 'currentNSMap': uw10p }], vk76la = {}, nzbtx = 0x0;;) {
    try {
      var hi2yt = sme_['indexOf']('<', nzbtx);if (0x0 > hi2yt) {
        if (!sme_['substr'](nzbtx)['match'](/^\s*$/)) {
          var tnbizx = nmbz['doc'],
              _83q$ = tnbizx['createTextNode'](sme_['substr'](nzbtx));tnbizx['appendChild'](_83q$), nmbz['currentElement'] = _83q$;
        }return;
      }switch (hi2yt > nzbtx && byxit(hi2yt), sme_['charAt'](hi2yt + 0x1)) {case '/':
          var kva54 = sme_['indexOf']('>', hi2yt + 0x3),
              e3q_$r = sme_['substring'](hi2yt + 0x2, kva54),
              udo = wu109p['pop']();0x0 > kva54 ? (e3q_$r = sme_['substring'](hi2yt + 0x2)['replace'](/[\s<].*/, ''), cxhi['error']('end tag name: ' + e3q_$r + ' is not complete:' + udo['tagName']), kva54 = hi2yt + 0x1 + e3q_$r['length']) : e3q_$r['match'](/\s</) && (e3q_$r = e3q_$r['replace'](/[\s<].*/, ''), cxhi['error']('end tag name: ' + e3q_$r + ' maybe not complete'), kva54 = hi2yt + 0x1 + e3q_$r['length']);var o01wpu = udo['localNSMap'],
              lkav76 = udo['tagName'] == e3q_$r,
              l867 = lkav76 || udo['tagName'] && udo['tagName']['toLowerCase']() == e3q_$r['toLowerCase']();if (l867) {
            if (nmbz['endElement'](udo['uri'], udo['localName'], e3q_$r), o01wpu) {
              for (var a6l7kv in o01wpu) nmbz['endPrefixMapping'](a6l7kv);
            }lkav76 || cxhi['fatalError']('end tag name: ' + e3q_$r + ' is not match the current start tagName:' + udo['tagName']);
          } else wu109p['push'](udo);kva54++;break;case '?':
          _38qe && _r$e(hi2yt), kva54 = awd01(sme_, hi2yt, nmbz);break;case '!':
          _38qe && _r$e(hi2yt), kva54 = ayxhib(sme_, hi2yt, nmbz, cxhi);break;default:
          _38qe && _r$e(hi2yt);var btznmx = new asmnzrb(),
              uopw1 = wu109p[wu109p['length'] - 0x1]['currentNSMap'],
              kva54 = ar_ems$(sme_, hi2yt, btznmx, uopw1, chiy2j, cxhi),
              l6738q = btznmx['length'];if (!btznmx['closed'] && ae_qr3$(sme_, kva54, btznmx['tagName'], vk76la) && (btznmx['closed'] = !0x0, szr_m['nbsp'] || cxhi['warning']('unclosed xml attribute')), _38qe && l6738q) {
            for (var yji = athbx(_38qe, {}), adkf4 = 0x0; l6738q > adkf4; adkf4++) {
              var fd1o = btznmx[adkf4];_r$e(fd1o['offset']), fd1o['locator'] = athbx(_38qe, {});
            }nmbz['locator'] = yji, ao1wdu4(btznmx, nmbz, uopw1) && wu109p['push'](btznmx), nmbz['locator'] = _38qe;
          } else ao1wdu4(btznmx, nmbz, uopw1) && wu109p['push'](btznmx);'http://www.w3.org/1999/xhtml' !== btznmx['uri'] || btznmx['closed'] ? kva54++ : kva54 = aokd(sme_, kva54, btznmx['tagName'], chiy2j, nmbz);}
    } catch (tyxin) {
      cxhi['error']('element parse error: ' + tyxin), kva54 = -0x1;
    }kva54 > nzbtx ? nzbtx = kva54 : byxit(Math['max'](hi2yt, nzbtx) + 0x1);
  }
}function athbx(lq$83, sz_$) {
  return sz_$['lineNumber'] = lq$83['lineNumber'], sz_$['columnNumber'] = lq$83['columnNumber'], sz_$;
}function ar_ems$(sm$er_, znbrsm, txznbm, u4d1f, kd4of, f54vak) {
  for (var alk, $rm_zs, v8l67 = ++znbrsm, iyjch = ak4odf;;) {
    var wo10pu = sm$er_['charAt'](v8l67);switch (wo10pu) {case '=':
        if (iyjch === ase$) alk = sm$er_['slice'](znbrsm, v8l67), iyjch = a_rm;else {
          if (iyjch !== aq6el) throw new Error('attribute equal must after attrName');iyjch = a_rm;
        }break;case '\x27':case '\x22':
        if (iyjch === a_rm || iyjch === ase$) {
          if (iyjch === ase$ && (f54vak['warning']('attribute value must after "="'), alk = sm$er_['slice'](znbrsm, v8l67)), znbrsm = v8l67 + 0x1, v8l67 = sm$er_['indexOf'](wo10pu, znbrsm), !(v8l67 > 0x0)) throw new Error('attribute value no end \'' + wo10pu + '\' match');$rm_zs = sm$er_['slice'](znbrsm, v8l67)['replace'](/&#?\w+;/g, kd4of), txznbm['add'](alk, $rm_zs, znbrsm - 0x1), iyjch = ay2hjc;
        } else {
          if (iyjch != aw0do1) throw new Error('attribute value must after "="');$rm_zs = sm$er_['slice'](znbrsm, v8l67)['replace'](/&#?\w+;/g, kd4of), txznbm['add'](alk, $rm_zs, znbrsm), f54vak['warning']('attribute "' + alk + '" missed start quot(' + wo10pu + ')!!'), znbrsm = v8l67 + 0x1, iyjch = ay2hjc;
        }break;case '/':
        switch (iyjch) {case ak4odf:
            txznbm['setTagName'](sm$er_['slice'](znbrsm, v8l67));case ay2hjc:case aj2icy:case ao5fkd:
            iyjch = ao5fkd, txznbm['closed'] = !0x0;case aw0do1:case ase$:case aq6el:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return f54vak['error']('unexpected end of input'), iyjch == ak4odf && txznbm['setTagName'](sm$er_['slice'](znbrsm, v8l67)), v8l67;case '>':
        switch (iyjch) {case ak4odf:
            txznbm['setTagName'](sm$er_['slice'](znbrsm, v8l67));case ay2hjc:case aj2icy:case ao5fkd:
            break;case aw0do1:case ase$:
            $rm_zs = sm$er_['slice'](znbrsm, v8l67), '/' === $rm_zs['slice'](-0x1) && (txznbm['closed'] = !0x0, $rm_zs = $rm_zs['slice'](0x0, -0x1));case aq6el:
            iyjch === aq6el && ($rm_zs = alk), iyjch == aw0do1 ? (f54vak['warning']('attribute "' + $rm_zs + '" missed quot(")!!'), txznbm['add'](alk, $rm_zs['replace'](/&#?\w+;/g, kd4of), znbrsm)) : ('http://www.w3.org/1999/xhtml' === u4d1f[''] && $rm_zs['match'](/^(?:disabled|checked|selected)$/i) || f54vak['warning']('attribute "' + $rm_zs + '" missed value!! "' + $rm_zs + '" instead!!'), txznbm['add']($rm_zs, $rm_zs, znbrsm));break;case a_rm:
            throw new Error('attribute value missed!!');}return v8l67;case '\u0080':
        wo10pu = '\x20';default:
        if ('\x20' >= wo10pu) switch (iyjch) {case ak4odf:
            txznbm['setTagName'](sm$er_['slice'](znbrsm, v8l67)), iyjch = aj2icy;break;case ase$:
            alk = sm$er_['slice'](znbrsm, v8l67), iyjch = aq6el;break;case aw0do1:
            var $rm_zs = sm$er_['slice'](znbrsm, v8l67)['replace'](/&#?\w+;/g, kd4of);f54vak['warning']('attribute "' + $rm_zs + '" missed quot(")!!'), txznbm['add'](alk, $rm_zs, znbrsm);case ay2hjc:
            iyjch = aj2icy;} else switch (iyjch) {case aq6el:
            {
              txznbm['tagName'];
            }'http://www.w3.org/1999/xhtml' === u4d1f[''] && alk['match'](/^(?:disabled|checked|selected)$/i) || f54vak['warning']('attribute "' + alk + '" missed value!! "' + alk + '" instead2!!'), txznbm['add'](alk, alk, znbrsm), znbrsm = v8l67, iyjch = ase$;break;case ay2hjc:
            f54vak['warning']('attribute space is required"' + alk + '\x22!!');case aj2icy:
            iyjch = ase$, znbrsm = v8l67;break;case a_rm:
            iyjch = aw0do1, znbrsm = v8l67;break;case ao5fkd:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}v8l67++;
  }
}function ao1wdu4(fdou, chij2y, biynx) {
  for (var nmzbtx = fdou['tagName'], q38el = null, pwu0o1 = fdou['length']; pwu0o1--;) {
    var _3q = fdou[pwu0o1],
        w4o = _3q['qName'],
        nsmrbz = _3q['value'],
        rms$_ = w4o['indexOf'](':');if (rms$_ > 0x0) var rzm_$ = _3q['prefix'] = w4o['slice'](0x0, rms$_),
        _rms$z = w4o['slice'](rms$_ + 0x1),
        btxyni = 'xmlns' === rzm_$ && _rms$z;else _rms$z = w4o, rzm_$ = null, btxyni = 'xmlns' === w4o && '';_3q['localName'] = _rms$z, btxyni !== !0x1 && (null == q38el && (q38el = {}, aou1(biynx, biynx = {})), biynx[btxyni] = q38el[btxyni] = nsmrbz, _3q['uri'] = 'http://www.w3.org/2000/xmlns/', chij2y['startPrefixMapping'](btxyni, nsmrbz));
  }for (var pwu0o1 = fdou['length']; pwu0o1--;) {
    _3q = fdou[pwu0o1];var rzm_$ = _3q['prefix'];rzm_$ && ('xml' === rzm_$ && (_3q['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== rzm_$ && (_3q['uri'] = biynx[rzm_$ || '']));
  }var rms$_ = nmzbtx['indexOf'](':');rms$_ > 0x0 ? (rzm_$ = fdou['prefix'] = nmzbtx['slice'](0x0, rms$_), _rms$z = fdou['localName'] = nmzbtx['slice'](rms$_ + 0x1)) : (rzm_$ = null, _rms$z = fdou['localName'] = nmzbtx);var _mszn = fdou['uri'] = biynx[rzm_$ || ''];if (chij2y['startElement'](_mszn, _rms$z, nmzbtx, fdou), !fdou['closed']) return fdou['currentNSMap'] = biynx, fdou['localNSMap'] = q38el, !0x0;if (chij2y['endElement'](_mszn, _rms$z, nmzbtx), q38el) {
    for (rzm_$ in q38el) chij2y['endPrefixMapping'](rzm_$);
  }
}function aokd(hicjy2, wo01d, vf4ak, sbmznt, kvla6) {
  if (/^(?:script|textarea)$/i['test'](vf4ak)) {
    var gw01 = hicjy2['indexOf']('</' + vf4ak + '>', wo01d),
        ou0wp = hicjy2['substring'](wo01d + 0x1, gw01);if (/[&<]/['test'](ou0wp)) return (/^script$/i['test'](vf4ak) ? (kvla6['characters'](ou0wp, 0x0, ou0wp['length']), gw01) : (ou0wp = ou0wp['replace'](/&#?\w+;/g, sbmznt), kvla6['characters'](ou0wp, 0x0, ou0wp['length']), gw01)
    );
  }return wo01d + 0x1;
}function ae_qr3$(_q83$, fva4k, k4a5d, srzbn) {
  var xtzbi = srzbn[k4a5d];return null == xtzbi && (xtzbi = _q83$['lastIndexOf']('</' + k4a5d + '>'), fva4k > xtzbi && (xtzbi = _q83$['lastIndexOf']('</' + k4a5d)), srzbn[k4a5d] = xtzbi), fva4k > xtzbi;
}function aou1(ms$z, qe3_r$) {
  for (var hyxi2 in ms$z) qe3_r$[hyxi2] = ms$z[hyxi2];
}function ayxhib(mbnrsz, ixhyb, w19gp0, qe3_r) {
  var l$38q = mbnrsz['charAt'](ixhyb + 0x2);switch (l$38q) {case '-':
      if ('-' === mbnrsz['charAt'](ixhyb + 0x3)) {
        var se_qr = mbnrsz['indexOf']('-->', ixhyb + 0x4);return se_qr > ixhyb ? (w19gp0['comment'](mbnrsz, ixhyb + 0x4, se_qr - ixhyb - 0x4), se_qr + 0x3) : (qe3_r['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == mbnrsz['substr'](ixhyb + 0x3, 0x6)) {
        var se_qr = mbnrsz['indexOf'](']]>', ixhyb + 0x9);return w19gp0['startCDATA'](), w19gp0['characters'](mbnrsz, ixhyb + 0x9, se_qr - ixhyb - 0x9), w19gp0['endCDATA'](), se_qr + 0x3;
      }var chyj2i = akv57a(mbnrsz, ixhyb),
          zbnmt = chyj2i['length'];if (zbnmt > 0x1 && /!doctype/i['test'](chyj2i[0x0][0x0])) {
        var dowu41 = chyj2i[0x1][0x0],
            wp1u0 = zbnmt > 0x3 && /^public$/i['test'](chyj2i[0x2][0x0]) && chyj2i[0x3][0x0],
            hji2 = zbnmt > 0x4 && chyj2i[0x4][0x0],
            kf7a5v = chyj2i[zbnmt - 0x1];return w19gp0['startDTD'](dowu41, wp1u0 && wp1u0['replace'](/^(['"])(.*?)\1$/, '$2'), hji2 && hji2['replace'](/^(['"])(.*?)\1$/, '$2')), w19gp0['endDTD'](), kf7a5v['index'] + kf7a5v[0x0]['length'];
      }}return -0x1;
}function awd01(tnizx, z$r_m, ou54d) {
  var wd1uo4 = tnizx['indexOf']('?>', z$r_m);if (wd1uo4) {
    var nbzxm = tnizx['substring'](z$r_m, wd1uo4)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (nbzxm) {
      {
        nbzxm[0x0]['length'];
      }return ou54d['processingInstruction'](nbzxm[0x1], nbzxm[0x2]), wd1uo4 + 0x2;
    }return -0x1;
  }return -0x1;
}function asmnzrb() {}function ak7f5v(f5akv, zbnr) {
  return f5akv['__proto__'] = zbnr, f5akv;
}function akv57a(pu, fa) {
  var bhix,
      $smrz_ = [],
      zitx = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (zitx['lastIndex'] = fa, zitx['exec'](pu); bhix = zitx['exec'](pu);) if ($smrz_['push'](bhix), bhix[0x1]) return $smrz_;
}var aeq$l = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    axithby = new RegExp('[\\-\\.0-9' + aeq$l['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    a$smz = new RegExp('^' + aeq$l['source'] + axithby['source'] + '*(?::' + aeq$l['source'] + axithby['source'] + '*)?$'),
    ak4odf = 0x0,
    ase$ = 0x1,
    aq6el = 0x2,
    a_rm = 0x3,
    aw0do1 = 0x4,
    ay2hjc = 0x5,
    aj2icy = 0x6,
    ao5fkd = 0x7;axhiyt['prototype'] = { 'parse': function (mbzsr, hbyit, rm$z) {
    var zbxnmt = this['domBuilder'];zbxnmt['startDocument'](), aou1(hbyit, hbyit = {}), ahicx(mbzsr, hbyit, rm$z, zbxnmt, this['errorHandler']), zbxnmt['endDocument']();
  } }, asmnzrb['prototype'] = { 'setTagName': function (izbnx) {
    if (!a$smz['test'](izbnx)) throw new Error('invalid tagName:' + izbnx);this['tagName'] = izbnx;
  }, 'add': function (f4dok5, i2jchy, l3e$q) {
    if (!a$smz['test'](f4dok5)) throw new Error('invalid attribute:' + f4dok5);this[this['length']++] = { 'qName': f4dok5, 'value': i2jchy, 'offset': l3e$q };
  }, 'length': 0x0, 'getLocalName': function (nzx) {
    return this[nzx]['localName'];
  }, 'getLocator': function (bnyx) {
    return this[bnyx]['locator'];
  }, 'getQName': function (le3q8$) {
    return this[le3q8$]['qName'];
  }, 'getURI': function (_$ers) {
    return this[_$ers]['uri'];
  }, 'getValue': function (ud1ow4) {
    return this[ud1ow4]['value'];
  } }, ak7f5v({}, ak7f5v['prototype']) instanceof ak7f5v || (ak7f5v = function (la76, k6la7v) {
  function l$qe() {}l$qe['prototype'] = k6la7v, l$qe = new l$qe();for (k6la7v in la76) l$qe[k6la7v] = la76[k6la7v];return l$qe;
}), exports['XMLReader'] = axhiyt;