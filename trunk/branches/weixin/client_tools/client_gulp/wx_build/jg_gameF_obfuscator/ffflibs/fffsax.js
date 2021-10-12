var k = wx.$f;
function fq_azfw() {}function fg3eukn(pbv96, qwzf1, j5tsx2, nge3s, gj2se) {
  function sugne(uk3eng) {
    var gsxtj2 = uk3eng['slice'](0x1, -0x1);return gsxtj2 in j5tsx2 ? j5tsx2[gsxtj2] : '#' === gsxtj2['charAt'](0x0) ? 0xffff < (gsxtj2 = parseInt(gsxtj2['substr'](0x1)['replace']('x', '0x'))) ? (gsxtj2 -= 0x10000, String['fromCharCode'](0xd800 + (gsxtj2 >> 0xa), 0xdc00 + (0x3ff & gsxtj2))) : String['fromCharCode'](gsxtj2) : (gj2se['error']('entity not found:' + uk3eng), uk3eng);
  }function v4t5(wzfq1) {
    var e3kucn;gneku < wzfq1 && (e3kucn = pbv96['substring'](gneku, wzfq1)['replace'](/&#?\w+;/g, sugne), uockn_ && d80yi(gneku), nge3s['characters'](e3kucn, 0x0, wzfq1 - gneku), gneku = wzfq1);
  }function d80yi(yh80d, yd7980) {
    for (; ukne <= yh80d && (yd7980 = ux3esg['exec'](pbv96));) d0ihy = yd7980['index'], ukne = d0ihy + yd7980[0x0]['length'], uockn_['lineNumber']++;uockn_['columnNumber'] = yh80d - d0ihy + 0x1;
  }for (var d0ihy = 0x0, ukne = 0x0, ux3esg = /.*(?:\r\n?|\n)|.*$/g, uockn_ = nge3s['locator'], segnu = [{ 'currentNSMap': qwzf1 }], z_qwfo = {}, gneku = 0x0;;) {
    try {
      var v6prb = pbv96['indexOf']('<', gneku),
          gjxt,
          $p4r;if (v6prb < 0x0) return void (pbv96['substr'](gneku)['match'](/^\s*$/) || ($p4r = (gjxt = nge3s['doc'])['createTextNode'](pbv96['substr'](gneku)), gjxt['appendChild']($p4r), nge3s['currentElement'] = $p4r));switch (gneku < v6prb && v4t5(v6prb), pbv96['charAt'](v6prb + 0x1)) {case '/':
          var wqfa_ = pbv96['indexOf']('>', v6prb + 0x3),
              nkge3u = pbv96['substring'](v6prb + 0x2, wqfa_),
              mvp45$ = segnu['pop']();wqfa_ < 0x0 ? (nkge3u = pbv96['substring'](v6prb + 0x2)['replace'](/[\s<].*/, ''), gj2se['error']('end tag name: ' + nkge3u + ' is not complete:' + mvp45$['tagName']), wqfa_ = v6prb + 0x1 + nkge3u['length']) : nkge3u['match'](/\s</) && (nkge3u = nkge3u['replace'](/[\s<].*/, ''), gj2se['error']('end tag name: ' + nkge3u + ' maybe not complete'), wqfa_ = v6prb + 0x1 + nkge3u['length']);var m5tj$4 = mvp45$['localNSMap'],
              y7b96 = mvp45$['tagName'] == nkge3u;if (y7b96 || mvp45$['tagName'] && mvp45$['tagName']['toLowerCase']() == nkge3u['toLowerCase']()) {
            if (nge3s['endElement'](mvp45$['uri'], mvp45$['localName'], nkge3u), m5tj$4) {
              for (var wz_foq in m5tj$4) nge3s['endPrefixMapping'](wz_foq);
            }y7b96 || gj2se['fatalError']('end tag name: ' + nkge3u + ' is not match the current start tagName:' + mvp45$['tagName']);
          } else segnu['push'](mvp45$);wqfa_++;break;case '?':
          uockn_ && d80yi(v6prb), wqfa_ = f$r4pbv(pbv96, v6prb, nge3s);break;case '!':
          uockn_ && d80yi(v6prb), wqfa_ = fk3unc(pbv96, v6prb, nge3s, gj2se);break;default:
          uockn_ && d80yi(v6prb);var ko3uc = new fbp69rv(),
              kfcwo = segnu[segnu['length'] - 0x1]['currentNSMap'],
              wqfa_ = fv54$tm(pbv96, v6prb, ko3uc, kfcwo, sugne, gj2se),
              jsx2e = ko3uc['length'];if (!ko3uc['closed'] && fsjt2gx(pbv96, wqfa_, ko3uc['tagName'], z_qwfo) && (ko3uc['closed'] = !0x0, j5tsx2['nbsp'] || gj2se['warning']('unclosed xml attribute')), uockn_ && jsx2e) {
            for (var okun_c = f_nfk(uockn_, {}), p96v = 0x0; p96v < jsx2e; p96v++) {
              var m4v$p5 = ko3uc[p96v];d80yi(m4v$p5['offset']), m4v$p5['locator'] = f_nfk(uockn_, {});
            }nge3s['locator'] = okun_c, fi08yd(ko3uc, nge3s, kfcwo) && segnu['push'](ko3uc), nge3s['locator'] = uockn_;
          } else fi08yd(ko3uc, nge3s, kfcwo) && segnu['push'](ko3uc);'http://www.w3.org/1999/xhtml' !== ko3uc['uri'] || ko3uc['closed'] ? wqfa_++ : wqfa_ = f$b6(pbv96, wqfa_, ko3uc['tagName'], sugne, nge3s);}
    } catch (f_wzoq) {
      gj2se['error']('element parse error: ' + f_wzoq), wqfa_ = -0x1;
    }gneku < wqfa_ ? gneku = wqfa_ : v4t5(Math['max'](v6prb, gneku) + 0x1);
  }
}function f_nfk(y86b, b9v6rp) {
  return b9v6rp['lineNumber'] = y86b['lineNumber'], b9v6rp['columnNumber'] = y86b['columnNumber'], b9v6rp;
}function fv54$tm(o3kncu, hi8y, qaz1w, b$pv4, x3e2s, dhi8y0) {
  for (var p6vb$, $vpm = ++hi8y, t$vm54 = fnk_cou;;) {
    var f1qzw = o3kncu['charAt']($vpm);switch (f1qzw) {case '=':
        if (t$vm54 === fc_knf) p6vb$ = o3kncu['slice'](hi8y, $vpm), t$vm54 = fpvb4r$;else {
          if (t$vm54 !== fpbrv) throw new Error('attribute equal must after attrName');t$vm54 = fpvb4r$;
        }break;case '\x27':case '\x22':
        if (t$vm54 === fpvb4r$ || t$vm54 === fc_knf) {
          if (t$vm54 === fc_knf && (dhi8y0['warning']('attribute value must after "="'), p6vb$ = o3kncu['slice'](hi8y, $vpm)), !(0x0 < ($vpm = o3kncu['indexOf'](f1qzw, hi8y = $vpm + 0x1)))) throw new Error('attribute value no end \'' + f1qzw + '\' match');t4$j5 = o3kncu['slice'](hi8y, $vpm)['replace'](/&#?\w+;/g, x3e2s), qaz1w['add'](p6vb$, t4$j5, hi8y - 0x1), t$vm54 = fxjtgs;
        } else {
          if (t$vm54 != fprv$b4) throw new Error('attribute value must after "="');t4$j5 = o3kncu['slice'](hi8y, $vpm)['replace'](/&#?\w+;/g, x3e2s), qaz1w['add'](p6vb$, t4$j5, hi8y), dhi8y0['warning']('attribute "' + p6vb$ + '" missed start quot(' + f1qzw + ')!!'), hi8y = $vpm + 0x1, t$vm54 = fxjtgs;
        }break;case '/':
        switch (t$vm54) {case fnk_cou:
            qaz1w['setTagName'](o3kncu['slice'](hi8y, $vpm));case fxjtgs:case fge3ku:case fjt42m:
            t$vm54 = fjt42m, qaz1w['closed'] = !0x0;case fprv$b4:case fc_knf:case fpbrv:
            break;default:
            throw new Error('attribute invalid close char(\'/\')');}break;case '':
        return dhi8y0['error']('unexpected end of input'), t$vm54 == fnk_cou && qaz1w['setTagName'](o3kncu['slice'](hi8y, $vpm)), $vpm;case '>':
        switch (t$vm54) {case fnk_cou:
            qaz1w['setTagName'](o3kncu['slice'](hi8y, $vpm));case fxjtgs:case fge3ku:case fjt42m:
            break;case fprv$b4:case fc_knf:
            '/' === (t4$j5 = o3kncu['slice'](hi8y, $vpm))['slice'](-0x1) && (qaz1w['closed'] = !0x0, t4$j5 = t4$j5['slice'](0x0, -0x1));case fpbrv:
            t$vm54 === fpbrv && (t4$j5 = p6vb$), t$vm54 == fprv$b4 ? (dhi8y0['warning']('attribute "' + t4$j5 + '" missed quot(")!!'), qaz1w['add'](p6vb$, t4$j5['replace'](/&#?\w+;/g, x3e2s), hi8y)) : ('http://www.w3.org/1999/xhtml' === b$pv4[''] && t4$j5['match'](/^(?:disabled|checked|selected)$/i) || dhi8y0['warning']('attribute "' + t4$j5 + '" missed value!! "' + t4$j5 + '" instead!!'), qaz1w['add'](t4$j5, t4$j5, hi8y));break;case fpvb4r$:
            throw new Error('attribute value missed!!');}return $vpm;case '\u0080':
        f1qzw = '\x20';default:
        if (f1qzw <= '\x20') switch (t$vm54) {case fnk_cou:
            qaz1w['setTagName'](o3kncu['slice'](hi8y, $vpm)), t$vm54 = fge3ku;break;case fc_knf:
            p6vb$ = o3kncu['slice'](hi8y, $vpm), t$vm54 = fpbrv;break;case fprv$b4:
            var t4$j5 = o3kncu['slice'](hi8y, $vpm)['replace'](/&#?\w+;/g, x3e2s);dhi8y0['warning']('attribute "' + t4$j5 + '" missed quot(")!!'), qaz1w['add'](p6vb$, t4$j5, hi8y);case fxjtgs:
            t$vm54 = fge3ku;} else switch (t$vm54) {case fpbrv:
            qaz1w['tagName'], 'http://www.w3.org/1999/xhtml' === b$pv4[''] && p6vb$['match'](/^(?:disabled|checked|selected)$/i) || dhi8y0['warning']('attribute "' + p6vb$ + '" missed value!! "' + p6vb$ + '" instead2!!'), qaz1w['add'](p6vb$, p6vb$, hi8y), hi8y = $vpm, t$vm54 = fc_knf;break;case fxjtgs:
            dhi8y0['warning']('attribute space is required"' + p6vb$ + '\x22!!');case fge3ku:
            t$vm54 = fc_knf, hi8y = $vpm;break;case fpvb4r$:
            t$vm54 = fprv$b4, hi8y = $vpm;break;case fjt42m:
            throw new Error('elements closed character \'/\' and \'>\' must be connected to');}}$vpm++;
  }
}function fi08yd(d80hy, usgen3, oc_nfk) {
  for (var v4r$b = d80hy['tagName'], x5jts = null, n3keuc = d80hy['length']; n3keuc--;) {
    var d087yi = d80hy[n3keuc],
        r69p7 = d087yi['qName'],
        x2tgs = d087yi['value'],
        p4$v;r69p7 = 0x0 < (ge3kn = r69p7['indexOf'](':')) ? (nkou3c = d087yi['prefix'] = r69p7['slice'](0x0, ge3kn), p4$v = r69p7['slice'](ge3kn + 0x1), 'xmlns' === nkou3c && p4$v) : (nkou3c = null, 'xmlns' === (p4$v = r69p7) && ''), d087yi['localName'] = p4$v, !0x1 !== r69p7 && (null == x5jts && (x5jts = {}, f$m45v(oc_nfk, oc_nfk = {})), oc_nfk[r69p7] = x5jts[r69p7] = x2tgs, d087yi['uri'] = 'http://www.w3.org/2000/xmlns/', usgen3['startPrefixMapping'](r69p7, x2tgs));
  }for (n3keuc = d80hy['length']; n3keuc--;) (nkou3c = (d087yi = d80hy[n3keuc])['prefix']) && ('xml' === nkou3c && (d087yi['uri'] = 'http://www.w3.org/XML/1998/namespace'), 'xmlns' !== nkou3c && (d087yi['uri'] = oc_nfk[nkou3c || '']));var ge3kn;p4$v = 0x0 < (ge3kn = v4r$b['indexOf'](':')) ? (nkou3c = d80hy['prefix'] = v4r$b['slice'](0x0, ge3kn), d80hy['localName'] = v4r$b['slice'](ge3kn + 0x1)) : (nkou3c = null, d80hy['localName'] = v4r$b);var p69b7r = d80hy['uri'] = oc_nfk[nkou3c || ''];if (usgen3['startElement'](p69b7r, p4$v, v4r$b, d80hy), !d80hy['closed']) return d80hy['currentNSMap'] = oc_nfk, d80hy['localNSMap'] = x5jts, !0x0;if (usgen3['endElement'](p69b7r, p4$v, v4r$b), x5jts) {
    for (var nkou3c in x5jts) usgen3['endPrefixMapping'](nkou3c);
  }
}function f$b6(m24jt, cnk_f, nkco, uokcn, enug3k) {
  if (/^(?:script|textarea)$/i['test'](nkco)) {
    var esngu3 = m24jt['indexOf']('</' + nkco + '>', cnk_f),
        m24jt = m24jt['substring'](cnk_f + 0x1, esngu3);if (/[&<]/['test'](m24jt)) return (/^script$/i['test'](nkco) || (m24jt = m24jt['replace'](/&#?\w+;/g, uokcn)), enug3k['characters'](m24jt, 0x0, m24jt['length']), esngu3
    );
  }return cnk_f + 0x1;
}function fsjt2gx(f_nkco, ydi80, $5v4pm, rbpv$) {
  var a1qwf = rbpv$[$5v4pm];return null == a1qwf && ((a1qwf = f_nkco['lastIndexOf']('</' + $5v4pm + '>')) < ydi80 && (a1qwf = f_nkco['lastIndexOf']('</' + $5v4pm)), rbpv$[$5v4pm] = a1qwf), a1qwf < ydi80;
}function f$m45v(esgn, pb4rv$) {
  for (var z_wo in esgn) pb4rv$[z_wo] = esgn[z_wo];
}function fk3unc(t5jx2, _wfa, y968, owq_) {
  var $p4vmr = t5jx2['charAt'](_wfa + 0x2);if ('-' === $p4vmr) return '-' !== t5jx2['charAt'](_wfa + 0x3) ? -0x1 : _wfa < (vmrp$4 = t5jx2['indexOf']('-->', _wfa + 0x4)) ? (y968['comment'](t5jx2, _wfa + 0x4, vmrp$4 - _wfa - 0x4), vmrp$4 + 0x3) : (owq_['error']('Unclosed comment'), -0x1);if ('CDATA[' == t5jx2['substr'](_wfa + 0x3, 0x6)) {
    var vmrp$4 = t5jx2['indexOf'](']]>', _wfa + 0x9);return y968['startCDATA'](), y968['characters'](t5jx2, _wfa + 0x9, vmrp$4 - _wfa - 0x9), y968['endCDATA'](), vmrp$4 + 0x3;
  }$p4vmr = f$rbv6p(t5jx2, _wfa), owq_ = $p4vmr['length'];if (0x1 < owq_ && /!doctype/i['test']($p4vmr[0x0][0x0])) return vmrp$4 = $p4vmr[0x1][0x0], t5jx2 = 0x3 < owq_ && /^public$/i['test']($p4vmr[0x2][0x0]) && $p4vmr[0x3][0x0], _wfa = 0x4 < owq_ && $p4vmr[0x4][0x0], owq_ = $p4vmr[owq_ - 0x1], (y968['startDTD'](vmrp$4, t5jx2 && t5jx2['replace'](/^(['"])(.*?)\1$/, '$2'), _wfa && _wfa['replace'](/^(['"])(.*?)\1$/, '$2')), y968['endDTD'](), owq_['index'] + owq_[0x0]['length']);return -0x1;
}function f$r4pbv(ng3uke, wz_fa, yd967) {
  var kon_uc = ng3uke['indexOf']('?>', wz_fa);if (kon_uc) return wz_fa = ng3uke['substring'](wz_fa, kon_uc)['match'](/^<\?(\S*)\s*([\s\S]*?)\s*$/), wz_fa ? (wz_fa[0x0]['length'], yd967['processingInstruction'](wz_fa[0x1], wz_fa[0x2]), kon_uc + 0x2) : -0x1;return -0x1;
}function fbp69rv() {}function fnug3ek(on_c, aqwf1) {
  return on_c['__proto__'] = aqwf1, on_c;
}function f$rbv6p(gxtj2, txsjg2) {
  var _qfz,
      m4rv$ = [],
      egs2xj = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for (egs2xj['lastIndex'] = txsjg2, egs2xj['exec'](gxtj2); _qfz = egs2xj['exec'](gxtj2);) if (m4rv$['push'](_qfz), _qfz[0x1]) return m4rv$;
}var f$5pmv4 = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
    ftm25jx = new RegExp('[\\-\\.0-9' + f$5pmv4['source']['slice'](0x1, -0x1) + '\\u00B7\\u0300-\\u036F\\u203F-\\u2040]'),
    fcon_k = new RegExp('^' + f$5pmv4['source'] + ftm25jx['source'] + '*(?::' + f$5pmv4['source'] + ftm25jx['source'] + '*)?$'),
    fnk_cou = 0x0,
    fc_knf = 0x1,
    fpbrv = 0x2,
    fpvb4r$ = 0x3,
    fprv$b4 = 0x4,
    fxjtgs = 0x5,
    fge3ku = 0x6,
    fjt42m = 0x7;fq_azfw['prototype'] = { 'parse': function (bvp$4r, x5tj2, gsx2jt) {
    var pbr$v4 = this['domBuilder'];pbr$v4['startDocument'](), f$m45v(x5tj2, x5tj2 = {}), fg3eukn(bvp$4r, x5tj2, gsx2jt, pbr$v4, this['errorHandler']), pbr$v4['endDocument']();
  } }, fbp69rv['prototype'] = { 'setTagName': function (unkec3) {
    if (!fcon_k['test'](unkec3)) throw new Error('invalid tagName:' + unkec3);this['tagName'] = unkec3;
  }, 'add': function (_zaqw, x5t2js, oqzw_f) {
    if (!fcon_k['test'](_zaqw)) throw new Error('invalid attribute:' + _zaqw);this[this['length']++] = { 'qName': _zaqw, 'value': x5t2js, 'offset': oqzw_f };
  }, 'length': 0x0, 'getLocalName': function ($rpb6v) {
    return this[$rpb6v]['localName'];
  }, 'getLocator': function (j25t4) {
    return this[j25t4]['locator'];
  }, 'getQName': function (nck_u) {
    return this[nck_u]['qName'];
  }, 'getURI': function (n3ukec) {
    return this[n3ukec]['uri'];
  }, 'getValue': function (okfcw_) {
    return this[okfcw_]['value'];
  } }, fnug3ek({}, fnug3ek['prototype']) instanceof fnug3ek || (fnug3ek = function (_uco, u3ensg) {
  function j2esx() {}for (u3ensg in j2esx['prototype'] = u3ensg, j2esx = new j2esx(), _uco) j2esx[u3ensg] = _uco[u3ensg];return j2esx;
}), exports['XMLReader'] = fq_azfw;