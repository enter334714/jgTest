var d = wx.$A;
function Aamn() {}function Aea$mn(kpi, u80v3, _fr4, kiyup1, qbt) {
  function v3a90(xbip) {
    if (xbip > 0xffff) {
      xbip -= 0x10000;var sh6zjw = 0xd800 + (xbip >> 0xa),
          ix1 = 0xdc00 + (0x3ff & xbip);return String['fromCharCode'](sh6zjw, ix1);
    }return String['fromCharCode'](xbip);
  }function ogfr_(l2whjz) {
    var emn = l2whjz['slice'](0x1, -0x1);return emn in _fr4 ? _fr4[emn] : '#' === emn['charAt'](0x0) ? v3a90(parseInt(emn['substr'](0x1)['replace']('x', '0x'))) : (qbt['error']('entity not found:' + l2whjz), l2whjz);
  }function oq4(xbpy) {
    if (xbpy > u1pk83) {
      var mnd6sj = kpi['substring'](u1pk83, xbpy)['replace'](/&#?\w+;/g, ogfr_);an9 && ma$ve(u1pk83), kiyup1['characters'](mnd6sj, 0x0, xbpy - u1pk83), u1pk83 = xbpy;
    }
  }function ma$ve(tqxyob, yixkp) {
    for (; tqxyob >= m9d$en && (yixkp = a9v0$8['exec'](kpi));) iu1kp3 = yixkp['index'], m9d$en = iu1kp3 + yixkp[0x0]['length'], an9['lineNumber']++;an9['columnNumber'] = tqxyob - iu1kp3 + 0x1;
  }for (var iu1kp3 = 0x0, m9d$en = 0x0, a9v0$8 = /.*(?:\r\n?|\n)|.*$/g, an9 = kiyup1['locator'], l6hwz = [{ 'currentNSMap': u80v3 }], w6hsj = {}, u1pk83 = 0x0;;) {
    try {
      var r4g_oq = kpi['indexOf']('<', u1pk83);if (0x0 > r4g_oq) {
        if (!kpi['substr'](u1pk83)['match'](/^\s*$/)) {
          var pk1iyu = kiyup1['doc'],
              xt_ = pk1iyu['createTextNode'](kpi['substr'](u1pk83));pk1iyu['appendChild'](xt_), kiyup1['currentElement'] = xt_;
        }return;
      }switch (r4g_oq > u1pk83 && oq4(r4g_oq), kpi['charAt'](r4g_oq + 0x1)) {case '/':
          var yxiq = kpi['indexOf']('>', r4g_oq + 0x3),
              pky1xi = kpi['substring'](r4g_oq + 0x2, yxiq),
              obgq_t = l6hwz['pop']();0x0 > yxiq ? (pky1xi = kpi['substring'](r4g_oq + 0x2)['replace'](/[\s<].*/, ''), qbt['error']('end tag name: ' + pky1xi + ' is not complete:' + obgq_t['tagName']), yxiq = r4g_oq + 0x1 + pky1xi['length']) : pky1xi['match'](/\s</) && (pky1xi = pky1xi['replace'](/[\s<].*/, ''), qbt['error']('end tag name: ' + pky1xi + ' maybe not complete'), yxiq = r4g_oq + 0x1 + pky1xi['length']);var o_4b = obgq_t['localNSMap'],
              uk308v = obgq_t['tagName'] == pky1xi,
              _ogrf = uk308v || obgq_t['tagName'] && obgq_t['tagName']['toLowerCase']() == pky1xi['toLowerCase']();if (_ogrf) {
            if (kiyup1['endElement'](obgq_t['uri'], obgq_t['localName'], pky1xi), o_4b) {
              for (var r745f in o_4b) kiyup1['endPrefixMapping'](r745f);
            }uk308v || qbt['fatalError']('end tag name: ' + pky1xi + ' is not match the current start tagName:' + obgq_t['tagName']);
          } else l6hwz['push'](obgq_t);yxiq++;break;case '?':
          an9 && ma$ve(r4g_oq), yxiq = Ajd6hzs(kpi, r4g_oq, kiyup1);break;case '!':
          an9 && ma$ve(r4g_oq), yxiq = Av9aem$(kpi, r4g_oq, kiyup1, qbt);break;default:
          an9 && ma$ve(r4g_oq);var qobgt = new Atb_(),
              r74gf = l6hwz[l6hwz['length'] - 0x1]['currentNSMap'],
              yxiq = Ad6snjm(kpi, r4g_oq, qobgt, r74gf, ogfr_, qbt),
              kui1py = qobgt['length'];if (!qobgt['closed'] && Ayxbtpi(kpi, yxiq, qobgt['tagName'], w6hsj) && (qobgt['closed'] = !0x0, _fr4['nbsp'] || qbt['warning']('unclosed xml attribute')), an9 && kui1py) {
            for (var pyxit1 = Av08a9(an9, {}), $ne9dm = 0x0; kui1py > $ne9dm; $ne9dm++) {
              var pku8 = qobgt[$ne9dm];ma$ve(pku8['offset']), pku8['locator'] = Av08a9(an9, {});
            }kiyup1['locator'] = pyxit1, Agrq_o(qobgt, kiyup1, r74gf) && l6hwz['push'](qobgt), kiyup1['locator'] = an9;
          } else Agrq_o(qobgt, kiyup1, r74gf) && l6hwz['push'](qobgt);'http://www.w3.org/1999/xhtml' !== qobgt['uri'] || qobgt['closed'] ? yxiq++ : yxiq = Aam$ev(kpi, yxiq, qobgt['tagName'], ogfr_, kiyup1);}
    } catch (nsm6jd) {
      qbt['error']('element parse error: ' + nsm6jd), yxiq = -0x1;
    }yxiq > u1pk83 ? u1pk83 = yxiq : oq4(Math['max'](r4g_oq, u1pk83) + 0x1);
  }
}function Av08a9(_f7g4r, v$9a) {
  return v$9a['lineNumber'] = _f7g4r['lineNumber'], v$9a['columnNumber'] = _f7g4r['columnNumber'], v$9a;
}function Ad6snjm(jzhds6, whs6zj, xqt_ob, u30k81, f4_ogr, k0381) {
  for (var t_oq, bitp, r4qg = ++whs6zj, k1xypi = Ar5g7;;) {
    var v8$a0 = jzhds6['charAt'](r4qg);switch (v8$a0) {case '=':
        if (k1xypi === Aixtypb) t_oq = jzhds6['slice'](whs6zj, r4qg), k1xypi = Ao_q4r;else {
          if (k1xypi !== Ap1ytxi) throw new Error('attribute equal must after attrName');k1xypi = Ao_q4r;
        }break;case '\x27':case '\x22':
        if (k1xypi === Ao_q4r || k1xypi === Aixtypb) {
          if (k1xypi === Aixtypb && (k0381['warning']('attribute value must after "="'), t_oq = jzhds6['slice'](whs6zj, r4qg)), whs6zj = r4qg + 0x1, r4qg = jzhds6['indexOf'](v8$a0, whs6zj), !(r4qg > 0x0)) throw new Error('attribute value no end \'' + v8$a0 + '\' match');bitp = jzhds6['slice'](whs6zj, r4qg)['replace'](/&#?\w+;/g, f4_ogr), xqt_ob['add'](t_oq, bitp, whs6zj - 0x1), k1xypi = Aytqix;
        } else {
          if (k1xypi != Ade$mn9) throw new Error('attribute value must after "="');bitp = jzhds6['slice'](whs6zj, r4qg)['replace'](/&#?\w+;/g, f4_ogr), xqt_ob['add'](t_oq, bitp, whs6zj), k0381['warning']('attribute "' + t_oq + '" missed start quot(' + v8$a0 + ')!!'), whs6zj = r4qg + 0x1, k1xypi = Aytqix;
        }break;case '/':
        switch (k1xypi) {case Ar5g7:
            xqt_ob['setTagName'](jzhds6['slice'](whs6zj, r4qg));case Aytqix:case Ae9$dm:case A$0ae9v:
            k1xypi = A$0ae9v, xqt_ob['closed'] = !0x0;case Ade$mn9:case Aixtypb:case Ap1ytxi:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return k0381['error']('unexpected end of input'), k1xypi == Ar5g7 && xqt_ob['setTagName'](jzhds6['slice'](whs6zj, r4qg)), r4qg;case '>':
        switch (k1xypi) {case Ar5g7:
            xqt_ob['setTagName'](jzhds6['slice'](whs6zj, r4qg));case Aytqix:case Ae9$dm:case A$0ae9v:
            break;case Ade$mn9:case Aixtypb:
            bitp = jzhds6['slice'](whs6zj, r4qg), '/' === bitp['slice'](-0x1) && (xqt_ob['closed'] = !0x0, bitp = bitp['slice'](0x0, -0x1));case Ap1ytxi:
            k1xypi === Ap1ytxi && (bitp = t_oq), k1xypi == Ade$mn9 ? (k0381['warning']('attribute "' + bitp + '" missed quot(")!!'), xqt_ob['add'](t_oq, bitp['replace'](/&#?\w+;/g, f4_ogr), whs6zj)) : ('http://www.w3.org/1999/xhtml' === u30k81[''] && bitp['match'](/^(?:disabled|checked|selected)$/i) || k0381['warning']('attribute "' + bitp + '" missed value!! "' + bitp + '" instead!!'), xqt_ob['add'](bitp, bitp, whs6zj));break;case Ao_q4r:
            throw new Error('attribute value missed!!');}return r4qg;case '\u0080':
        v8$a0 = '\x20';default:
        if ('\x20' >= v8$a0) switch (k1xypi) {case Ar5g7:
            xqt_ob['setTagName'](jzhds6['slice'](whs6zj, r4qg)), k1xypi = Ae9$dm;break;case Aixtypb:
            t_oq = jzhds6['slice'](whs6zj, r4qg), k1xypi = Ap1ytxi;break;case Ade$mn9:
            var bitp = jzhds6['slice'](whs6zj, r4qg)['replace'](/&#?\w+;/g, f4_ogr);k0381['warning']('attribute "' + bitp + '" missed quot(")!!'), xqt_ob['add'](t_oq, bitp, whs6zj);case Aytqix:
            k1xypi = Ae9$dm;} else switch (k1xypi) {case Ap1ytxi:
            {
              xqt_ob['tagName'];
            }'http://www.w3.org/1999/xhtml' === u30k81[''] && t_oq['match'](/^(?:disabled|checked|selected)$/i) || k0381['warning']('attribute "' + t_oq + '" missed value!! "' + t_oq + '" instead2!!'), xqt_ob['add'](t_oq, t_oq, whs6zj), whs6zj = r4qg, k1xypi = Aixtypb;break;case Aytqix:
            k0381['warning']('attribute space is required"' + t_oq + '\x22!!');case Ae9$dm:
            k1xypi = Aixtypb, whs6zj = r4qg;break;case Ao_q4r:
            k1xypi = Ade$mn9, whs6zj = r4qg;break;case A$0ae9v:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}r4qg++;
  }
}function Agrq_o(qxybit, s6men, zh6ljw) {
  for (var ybiqx = qxybit['tagName'], q_oxbt = null, hjns = qxybit['length']; hjns--;) {
    var _qor = qxybit[hjns],
        ne$s = _qor['qName'],
        e0v$9 = _qor['value'],
        zh6sj = ne$s['indexOf'](':');if (zh6sj > 0x0) var yix1kp = _qor['prefix'] = ne$s['slice'](0x0, zh6sj),
        lwhjz6 = ne$s['slice'](zh6sj + 0x1),
        h2zw = 'xmlns' === yix1kp && lwhjz6;else lwhjz6 = ne$s, yix1kp = null, h2zw = 'xmlns' === ne$s && '';_qor['localName'] = lwhjz6, h2zw !== !0x1 && (null == q_oxbt && (q_oxbt = {}, Ajmnd(zh6ljw, zh6ljw = {})), zh6ljw[h2zw] = q_oxbt[h2zw] = e0v$9, _qor['uri'] = 'http://www.w3.org/2000/xmlns/', s6men['startPrefixMapping'](h2zw, e0v$9));
  }for (var hjns = qxybit['length']; hjns--;) {
    _qor = qxybit[hjns];var yix1kp = _qor['prefix'];yix1kp && ('xml' === yix1kp && (_qor['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== yix1kp && (_qor['uri'] = zh6ljw[yix1kp || '']));
  }var zh6sj = ybiqx['indexOf'](':');zh6sj > 0x0 ? (yix1kp = qxybit['prefix'] = ybiqx['slice'](0x0, zh6sj), lwhjz6 = qxybit['localName'] = ybiqx['slice'](zh6sj + 0x1)) : (yix1kp = null, lwhjz6 = qxybit['localName'] = ybiqx);var boqtx = qxybit['uri'] = zh6ljw[yix1kp || ''];if (s6men['startElement'](boqtx, lwhjz6, ybiqx, qxybit), !qxybit['closed']) return qxybit['currentNSMap'] = zh6ljw, qxybit['localNSMap'] = q_oxbt, !0x0;if (s6men['endElement'](boqtx, lwhjz6, ybiqx), q_oxbt) {
    for (yix1kp in q_oxbt) s6men['endPrefixMapping'](yix1kp);
  }
}function Aam$ev(v3au08, uy1i, zhjlw, p381ku, jh6wl) {
  if (/^(?:script|textarea)$/i['test'](zhjlw)) {
    var shjdz = v3au08['indexOf']('</' + zhjlw + '>', uy1i),
        h6sjn = v3au08['substring'](uy1i + 0x1, shjdz);if (/[&<]/['test'](h6sjn)) return (/^script$/i['test'](zhjlw) ? (jh6wl['characters'](h6sjn, 0x0, h6sjn['length']), shjdz) : (h6sjn = h6sjn['replace'](/&#?\w+;/g, p381ku), jh6wl['characters'](h6sjn, 0x0, h6sjn['length']), shjdz)
    );
  }return uy1i + 0x1;
}function Ayxbtpi(nemds6, g_7f4, oqt_bg, hws6zj) {
  var a3v0u8 = hws6zj[oqt_bg];return null == a3v0u8 && (a3v0u8 = nemds6['lastIndexOf']('</' + oqt_bg + '>'), g_7f4 > a3v0u8 && (a3v0u8 = nemds6['lastIndexOf']('</' + oqt_bg)), hws6zj[oqt_bg] = a3v0u8), g_7f4 > a3v0u8;
}function Ajmnd(a$mev9, nmsd6e) {
  for (var hs6d in a$mev9) nmsd6e[hs6d] = a$mev9[hs6d];
}function Av9aem$(p13kiu, av$09e, _goqb4, smd$ne) {
  var e$m9va = p13kiu['charAt'](av$09e + 0x2);switch (e$m9va) {case '-':
      if ('-' === p13kiu['charAt'](av$09e + 0x3)) {
        var sjn6h = p13kiu['indexOf']('-->', av$09e + 0x4);return sjn6h > av$09e ? (_goqb4['comment'](p13kiu, av$09e + 0x4, sjn6h - av$09e - 0x4), sjn6h + 0x3) : (smd$ne['error']('Unclosed comment'), -0x1);
      }return -0x1;default:
      if ('CDATA[' == p13kiu['substr'](av$09e + 0x3, 0x6)) {
        var sjn6h = p13kiu['indexOf'](']]>', av$09e + 0x9);return _goqb4['startCDATA'](), _goqb4['characters'](p13kiu, av$09e + 0x9, sjn6h - av$09e - 0x9), _goqb4['endCDATA'](), sjn6h + 0x3;
      }var smj6n = Azw2hl(p13kiu, av$09e),
          _botg = smj6n['length'];if (_botg > 0x1 && /!doctype/i['test'](smj6n[0x0][0x0])) {
        var av8 = smj6n[0x1][0x0],
            gofr4_ = _botg > 0x3 && /^public$/i['test'](smj6n[0x2][0x0]) && smj6n[0x3][0x0],
            demn$9 = _botg > 0x4 && smj6n[0x4][0x0],
            msdne$ = smj6n[_botg - 0x1];return _goqb4['startDTD'](av8, gofr4_ && gofr4_['replace'](/^(['"])(.*?)\1$/, '$2'), demn$9 && demn$9['replace'](/^(['"])(.*?)\1$/, '$2')), _goqb4['endDTD'](), msdne$['index'] + msdne$[0x0]['length'];
      }}return -0x1;
}function Ajd6hzs(de9, piyku, boyqt) {
  var fg4r = de9['indexOf']('?>', piyku);if (fg4r) {
    var msd6nj = de9['substring'](piyku, fg4r)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/);if (msd6nj) {
      {
        msd6nj[0x0]['length'];
      }return boyqt['processingInstruction'](msd6nj[0x1], msd6nj[0x2]), fg4r + 0x2;
    }return -0x1;
  }return -0x1;
}function Atb_() {}function Aybtp(xqtby, ne9$ma) {
  return xqtby['__proto__'] = ne9$ma, xqtby;
}function Azw2hl(e9m$an, itbxpy) {
  var hj6dns,
      gtbqo_ = [],
      e9m$na = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (e9m$na['lastIndex'] = itbxpy, e9m$na['exec'](e9m$an); hj6dns = e9m$na['exec'](e9m$an);) if (gtbqo_['push'](hj6dns), hj6dns[0x1]) return gtbqo_;
}var Atbgo_ = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    Au3k8v = new RegExp('[\\-\\.0-9' + Atbgo_['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    Afr7g4 = new RegExp('^' + Atbgo_['source'] + Au3k8v['source'] + '*(?::' + Atbgo_['source'] + Au3k8v['source'] + '*)?$'),
    Ar5g7 = 0x0,
    Aixtypb = 0x1,
    Ap1ytxi = 0x2,
    Ao_q4r = 0x3,
    Ade$mn9 = 0x4,
    Aytqix = 0x5,
    Ae9$dm = 0x6,
    A$0ae9v = 0x7;Aamn['prototype'] = { 'parse': function (tbyqxi, kyiu1, e$anm9) {
    var ypxtib = this['domBuilder'];ypxtib['startDocument'](), Ajmnd(kyiu1, kyiu1 = {}), Aea$mn(tbyqxi, kyiu1, e$anm9, ypxtib, this['errorHandler']), ypxtib['endDocument']();
  } }, Atb_['prototype'] = { 'setTagName': function (xbtqi) {
    if (!Afr7g4['test'](xbtqi)) throw new Error('invalid tagName:' + xbtqi);this['tagName'] = xbtqi;
  }, 'add': function (va9$0e, va8$90, jzshw6) {
    if (!Afr7g4['test'](va9$0e)) throw new Error('invalid attribute:' + va9$0e);this[this['length']++] = { 'qName': va9$0e, 'value': va8$90, 'offset': jzshw6 };
  }, 'length': 0x0, 'getLocalName': function (itxpy) {
    return this[itxpy]['localName'];
  }, 'getLocator': function ($desnm) {
    return this[$desnm]['locator'];
  }, 'getQName': function (ua0v) {
    return this[ua0v]['qName'];
  }, 'getURI': function (r54gf) {
    return this[r54gf]['uri'];
  }, 'getValue': function (bxotq_) {
    return this[bxotq_]['value'];
  } }, Aybtp({}, Aybtp['prototype']) instanceof Aybtp || (Aybtp = function (mdne$s, qoyxt) {
  function k0v38u() {}k0v38u['prototype'] = qoyxt, k0v38u = new k0v38u();for (qoyxt in mdne$s) k0v38u[qoyxt] = mdne$s[qoyxt];return k0v38u;
}), exports['XMLReader'] = Aamn;