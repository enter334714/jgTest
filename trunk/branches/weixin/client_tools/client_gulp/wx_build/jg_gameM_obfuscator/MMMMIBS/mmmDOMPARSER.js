var Y = wx.$M;
function M_xu1rk9(vdbwrf) {
  this['options'] = vdbwrf || { 'locator': {} };
}function M_ky1u9x(k91fv, h5lnmi, mjn_h) {
  function yxk($wvbd) {
    var mn7_j = k91fv[$wvbd];!mn7_j && vbfdw && (mn7_j = 0x2 == k91fv['length'] ? function (c82tae) {
      k91fv($wvbd, c82tae);
    } : k91fv), n$50l[$wvbd] = mn7_j && function (os4g_6) {
      mn7_j('[xmldom ' + $wvbd + ']\t' + os4g_6 + M_l$50i(mjn_h));
    } || function () {};
  }if (!k91fv) {
    if (h5lnmi instanceof M_mnijh5) return h5lnmi;k91fv = h5lnmi;
  }var n$50l = {},
      vbfdw = k91fv instanceof Function;return mjn_h = mjn_h || {}, yxk('warning'), yxk('error'), yxk('fatalError'), n$50l;
}function M_mnijh5() {
  this['cdata'] = !0x1;
}function M__sjm(j_4s, bvw$) {
  bvw$['lineNumber'] = j_4s['lineNumber'], bvw$['columnNumber'] = j_4s['columnNumber'];
}function M_l$50i(rvbf) {
  return rvbf ? '\x0a@' + (rvbf['systemId'] || '') + '#[line:' + rvbf['lineNumber'] + ',col:' + rvbf['columnNumber'] + ']' : void 0x0;
}function M_aetc(ca2t8e, ukq1yx, tp8e) {
  return 'string' == typeof ca2t8e ? ca2t8e['substr'](ukq1yx, tp8e) : ca2t8e['length'] >= ukq1yx + tp8e || ukq1yx ? new java['lang']['String'](ca2t8e, ukq1yx, tp8e) + '' : ca2t8e;
}function M_scaog(rfdw, k1vr9f) {
  rfdw['currentElement'] ? rfdw['currentElement']['appendChild'](k1vr9f) : rfdw['doc']['appendChild'](k1vr9f);
}M_xu1rk9['prototype']['parseFromString'] = function (i$ln5, mli5h) {
  var vf1rw = this['options'],
      g_s64 = new M_rvw19f(),
      d$vwfb = vf1rw['domBuilder'] || new M_mnijh5(),
      ept2z = vf1rw['errorHandler'],
      m4j_7h = vf1rw['locator'],
      f1k9r = vf1rw['xmlns'] || {},
      lnhi = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return m4j_7h && d$vwfb['setDocumentLocator'](m4j_7h), g_s64['errorHandler'] = M_ky1u9x(ept2z, d$vwfb, m4j_7h), g_s64['domBuilder'] = vf1rw['domBuilder'] || d$vwfb, /\/x?html?$/['test'](mli5h) && (lnhi['nbsp'] = '\u00a0', lnhi['copy'] = '©', f1k9r[''] = 'http://www.w3.org/1999/xhtml'), f1k9r['xml'] = f1k9r['xml'] || 'http://www.w3.org/XML/1998/namespace', i$ln5 ? g_s64['parse'](i$ln5, f1k9r, lnhi) : g_s64['errorHandler']['error']('invalid doc source'), d$vwfb['doc'];
}, M_mnijh5['prototype'] = { 'startDocument': function () {
    this['doc'] = new M_coa8g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (x3uyq, zte82c, d$05bl, mih7nj) {
    var ogacs = this['doc'],
        _hjm47 = ogacs['createElementNS'](x3uyq, d$05bl || zte82c),
        a2t8ec = mih7nj['length'];M_scaog(this, _hjm47), this['currentElement'] = _hjm47, this['locator'] && M__sjm(this['locator'], _hjm47);for (var wvr9fb = 0x0; a2t8ec > wvr9fb; wvr9fb++) {
      var x3uyq = mih7nj['getURI'](wvr9fb),
          _76sj = mih7nj['getValue'](wvr9fb),
          d$05bl = mih7nj['getQName'](wvr9fb),
          bl5d$0 = ogacs['createAttributeNS'](x3uyq, d$05bl);this['locator'] && M__sjm(mih7nj['getLocator'](wvr9fb), bl5d$0), bl5d$0['value'] = bl5d$0['nodeValue'] = _76sj, _hjm47['setAttributeNode'](bl5d$0);
    }
  }, 'endElement': function () {
    {
      var t82zep = this['currentElement'];t82zep['tagName'];
    }this['currentElement'] = t82zep['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c6gao, a8te2c) {
    var $dil50 = this['doc']['createProcessingInstruction'](c6gao, a8te2c);this['locator'] && M__sjm(this['locator'], $dil50), M_scaog(this, $dil50);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hin5ml) {
    if (hin5ml = M_aetc['apply'](this, arguments)) {
      if (this['cdata']) var mhj_n7 = this['doc']['createCDATASection'](hin5ml);else var mhj_n7 = this['doc']['createTextNode'](hin5ml);this['currentElement'] ? this['currentElement']['appendChild'](mhj_n7) : /^\s*$/['test'](hin5ml) && this['doc']['appendChild'](mhj_n7), this['locator'] && M__sjm(this['locator'], mhj_n7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (s_4og) {
    (this['locator'] = s_4og) && (s_4og['lineNumber'] = 0x0);
  }, 'comment': function (x9rvk) {
    x9rvk = M_aetc['apply'](this, arguments);var i7hmj = this['doc']['createComment'](x9rvk);this['locator'] && M__sjm(this['locator'], i7hmj), M_scaog(this, i7hmj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jm47s, a2e8ct, so4ga6) {
    var $i0dl = this['doc']['implementation'];if ($i0dl && $i0dl['createDocumentType']) {
      var i5lnhm = $i0dl['createDocumentType'](jm47s, a2e8ct, so4ga6);this['locator'] && M__sjm(this['locator'], i5lnhm), M_scaog(this, i5lnhm);
    }
  }, 'warning': function (ez8ct2) {
    console['warn']('[xmldom warning]\t' + ez8ct2, M_l$50i(this['locator']));
  }, 'error': function (c68aog) {
    console['error']('[xmldom error]\t' + c68aog, M_l$50i(this['locator']));
  }, 'fatalError': function (bwdrfv) {
    throw console['error']('[xmldom fatalError]\t' + bwdrfv, M_l$50i(this['locator'])), bwdrfv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (i7hmnj) {
  M_mnijh5['prototype'][i7hmnj] = function () {
    return null;
  };
});var M_rvw19f = require('./mmmSAX')['XMLReader'],
    M_coa8g = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_xu1rk9;