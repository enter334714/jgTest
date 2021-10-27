var Q = wx.$I;
function i_hkwqf_(r19xi) {
  this['options'] = r19xi || { 'locator': {} };
}function i_b9xico(u6e0d, t6b4m, _gwqky) {
  function xc9bio(r9xic) {
    var v9ci = u6e0d[r9xic];!v9ci && hkqg_ && (v9ci = 0x2 == u6e0d['length'] ? function (fx15vr) {
      u6e0d(r9xic, fx15vr);
    } : u6e0d), fqh_15[r9xic] = v9ci && function (gkw_z) {
      v9ci('[xmldom ' + r9xic + ']\t' + gkw_z + i_h1q5_f(_gwqky));
    } || function () {};
  }if (!u6e0d) {
    if (t6b4m instanceof i_ivrx5) return t6b4m;u6e0d = t6b4m;
  }var fqh_15 = {},
      hkqg_ = u6e0d instanceof Function;return _gwqky = _gwqky || {}, xc9bio('warning'), xc9bio('error'), xc9bio('fatalError'), fqh_15;
}function i_ivrx5() {
  this['cdata'] = !0x1;
}function i_zyk_wg(ljn3, qvhf51) {
  qvhf51['lineNumber'] = ljn3['lineNumber'], qvhf51['columnNumber'] = ljn3['columnNumber'];
}function i_h1q5_f(j87l3) {
  return j87l3 ? '\x0a@' + (j87l3['systemId'] || '') + '#[line:' + j87l3['lineNumber'] + ',col:' + j87l3['columnNumber'] + ']' : void 0x0;
}function i_hq15fv(qhfk_, et0u, h5q1vf) {
  return 'string' == typeof qhfk_ ? qhfk_['substr'](et0u, h5q1vf) : qhfk_['length'] >= et0u + h5q1vf || et0u ? new java['lang']['String'](qhfk_, et0u, h5q1vf) + '' : qhfk_;
}function i_zgway2(hf_1q5, zk_y) {
  hf_1q5['currentElement'] ? hf_1q5['currentElement']['appendChild'](zk_y) : hf_1q5['doc']['appendChild'](zk_y);
}i_hkwqf_['prototype']['parseFromString'] = function (icxbo9, zgwk) {
  var s87p3 = this['options'],
      ay2s = new i_f15_q(),
      m40b = s87p3['domBuilder'] || new i_ivrx5(),
      _5hkfq = s87p3['errorHandler'],
      s2gay = s87p3['locator'],
      ue0$t = s87p3['xmlns'] || {},
      kw_hqg = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return s2gay && m40b['setDocumentLocator'](s2gay), ay2s['errorHandler'] = i_b9xico(_5hkfq, m40b, s2gay), ay2s['domBuilder'] = s87p3['domBuilder'] || m40b, /\/x?html?$/['test'](zgwk) && (kw_hqg['nbsp'] = '\u00a0', kw_hqg['copy'] = '©', ue0$t[''] = 'http://www.w3.org/1999/xhtml'), ue0$t['xml'] = ue0$t['xml'] || 'http://www.w3.org/XML/1998/namespace', icxbo9 ? ay2s['parse'](icxbo9, ue0$t, kw_hqg) : ay2s['errorHandler']['error']('invalid doc source'), m40b['doc'];
}, i_ivrx5['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_x15rf()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xr5f1v, hfv, kwyqg, ps7l3) {
    var _5fqh = this['doc'],
        mt4boc = _5fqh['createElementNS'](xr5f1v, kwyqg || hfv),
        a2yzs = ps7l3['length'];i_zgway2(this, mt4boc), this['currentElement'] = mt4boc, this['locator'] && i_zyk_wg(this['locator'], mt4boc);for (var lps378 = 0x0; a2yzs > lps378; lps378++) {
      var xr5f1v = ps7l3['getURI'](lps378),
          pza2y = ps7l3['getValue'](lps378),
          kwyqg = ps7l3['getQName'](lps378),
          i9omcb = _5fqh['createAttributeNS'](xr5f1v, kwyqg);this['locator'] && i_zyk_wg(ps7l3['getLocator'](lps378), i9omcb), i9omcb['value'] = i9omcb['nodeValue'] = pza2y, mt4boc['setAttributeNode'](i9omcb);
    }
  }, 'endElement': function () {
    {
      var p32s78 = this['currentElement'];p32s78['tagName'];
    }this['currentElement'] = p32s78['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xr1v9i, u4mt60) {
    var ir51vx = this['doc']['createProcessingInstruction'](xr1v9i, u4mt60);this['locator'] && i_zyk_wg(this['locator'], ir51vx), i_zgway2(this, ir51vx);
  }, 'ignorableWhitespace': function () {}, 'characters': function (y_kz) {
    if (y_kz = i_hq15fv['apply'](this, arguments)) {
      if (this['cdata']) var gwyazk = this['doc']['createCDATASection'](y_kz);else var gwyazk = this['doc']['createTextNode'](y_kz);this['currentElement'] ? this['currentElement']['appendChild'](gwyazk) : /^\s*$/['test'](y_kz) && this['doc']['appendChild'](gwyazk), this['locator'] && i_zyk_wg(this['locator'], gwyazk);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ygaz2s) {
    (this['locator'] = ygaz2s) && (ygaz2s['lineNumber'] = 0x0);
  }, 'comment': function (ygzk_w) {
    ygzk_w = i_hq15fv['apply'](this, arguments);var ixcor9 = this['doc']['createComment'](ygzk_w);this['locator'] && i_zyk_wg(this['locator'], ixcor9), i_zgway2(this, ixcor9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (bom4c, x9vr1i, _qf1) {
    var rxicv = this['doc']['implementation'];if (rxicv && rxicv['createDocumentType']) {
      var vx9ir1 = rxicv['createDocumentType'](bom4c, x9vr1i, _qf1);this['locator'] && i_zyk_wg(this['locator'], vx9ir1), i_zgway2(this, vx9ir1);
    }
  }, 'warning': function (oicr9) {
    console['warn']('[xmldom warning]\t' + oicr9, i_h1q5_f(this['locator']));
  }, 'error': function (m06b4) {
    console['error']('[xmldom error]\t' + m06b4, i_h1q5_f(this['locator']));
  }, 'fatalError': function (ixbc) {
    throw console['error']('[xmldom fatalError]\t' + ixbc, i_h1q5_f(this['locator'])), ixbc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kfwq_h) {
  i_ivrx5['prototype'][kfwq_h] = function () {
    return null;
  };
});var i_f15_q = require('./iiiSAX')['XMLReader'],
    i_x15rf = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i_hkwqf_;