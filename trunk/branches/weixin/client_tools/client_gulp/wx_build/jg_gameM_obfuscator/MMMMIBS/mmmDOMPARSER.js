var Y = wx.$M;
function M_il0n5(m7j_n) {
  this['options'] = m7j_n || { 'locator': {} };
}function M_hj_7n(vf9br, yxuqk1, d$fvwb) {
  function i0h5(lh0i) {
    var eaogc8 = vf9br[lh0i];!eaogc8 && idl05$ && (eaogc8 = 0x2 == vf9br['length'] ? function (cg82e) {
      vf9br(lh0i, cg82e);
    } : vf9br), fwd$[lh0i] = eaogc8 && function (wfbvr) {
      eaogc8('[xmldom ' + lh0i + ']\t' + wfbvr + M_t8ezc2(d$fvwb));
    } || function () {};
  }if (!vf9br) {
    if (yxuqk1 instanceof M_l5b0d$) return yxuqk1;vf9br = yxuqk1;
  }var fwd$ = {},
      idl05$ = vf9br instanceof Function;return d$fvwb = d$fvwb || {}, i0h5('warning'), i0h5('error'), i0h5('fatalError'), fwd$;
}function M_l5b0d$() {
  this['cdata'] = !0x1;
}function M_mhni5j(m5ihln, cae) {
  cae['lineNumber'] = m5ihln['lineNumber'], cae['columnNumber'] = m5ihln['columnNumber'];
}function M_t8ezc2(dbfv$w) {
  return dbfv$w ? '\x0a@' + (dbfv$w['systemId'] || '') + '#[line:' + dbfv$w['lineNumber'] + ',col:' + dbfv$w['columnNumber'] + ']' : void 0x0;
}function M_xr1v9(kux91r, m47h_, vwbfr) {
  return 'string' == typeof kux91r ? kux91r['substr'](m47h_, vwbfr) : kux91r['length'] >= m47h_ + vwbfr || m47h_ ? new java['lang']['String'](kux91r, m47h_, vwbfr) + '' : kux91r;
}function M_etz28(y1u9, i7mjnh) {
  y1u9['currentElement'] ? y1u9['currentElement']['appendChild'](i7mjnh) : y1u9['doc']['appendChild'](i7mjnh);
}M_il0n5['prototype']['parseFromString'] = function (j7m4s, vw$bf) {
  var _74mj = this['options'],
      eg8ao = new M_vfdb$(),
      wrvbf = _74mj['domBuilder'] || new M_l5b0d$(),
      d$w0f = _74mj['errorHandler'],
      fdbrwv = _74mj['locator'],
      ukxr1 = _74mj['xmlns'] || {},
      qyku = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fdbrwv && wrvbf['setDocumentLocator'](fdbrwv), eg8ao['errorHandler'] = M_hj_7n(d$w0f, wrvbf, fdbrwv), eg8ao['domBuilder'] = _74mj['domBuilder'] || wrvbf, /\/x?html?$/['test'](vw$bf) && (qyku['nbsp'] = '\u00a0', qyku['copy'] = '©', ukxr1[''] = 'http://www.w3.org/1999/xhtml'), ukxr1['xml'] = ukxr1['xml'] || 'http://www.w3.org/XML/1998/namespace', j7m4s ? eg8ao['parse'](j7m4s, ukxr1, qyku) : eg8ao['errorHandler']['error']('invalid doc source'), wrvbf['doc'];
}, M_l5b0d$['prototype'] = { 'startDocument': function () {
    this['doc'] = new M_nl5ih0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (o8g6a, v9wb, fb9wv, w$d0bl) {
    var y3ux = this['doc'],
        vrf9bw = y3ux['createElementNS'](o8g6a, fb9wv || v9wb),
        h_n7m = w$d0bl['length'];M_etz28(this, vrf9bw), this['currentElement'] = vrf9bw, this['locator'] && M_mhni5j(this['locator'], vrf9bw);for (var j67_4 = 0x0; h_n7m > j67_4; j67_4++) {
      var o8g6a = w$d0bl['getURI'](j67_4),
          _so467 = w$d0bl['getValue'](j67_4),
          fb9wv = w$d0bl['getQName'](j67_4),
          os6g = y3ux['createAttributeNS'](o8g6a, fb9wv);this['locator'] && M_mhni5j(w$d0bl['getLocator'](j67_4), os6g), os6g['value'] = os6g['nodeValue'] = _so467, vrf9bw['setAttributeNode'](os6g);
    }
  }, 'endElement': function () {
    {
      var bwf0$ = this['currentElement'];bwf0$['tagName'];
    }this['currentElement'] = bwf0$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dl5$b, xyk3uq) {
    var n7h_jm = this['doc']['createProcessingInstruction'](dl5$b, xyk3uq);this['locator'] && M_mhni5j(this['locator'], n7h_jm), M_etz28(this, n7h_jm);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vkr19) {
    if (vkr19 = M_xr1v9['apply'](this, arguments)) {
      if (this['cdata']) var n50il = this['doc']['createCDATASection'](vkr19);else var n50il = this['doc']['createTextNode'](vkr19);this['currentElement'] ? this['currentElement']['appendChild'](n50il) : /^\s*$/['test'](vkr19) && this['doc']['appendChild'](n50il), this['locator'] && M_mhni5j(this['locator'], n50il);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (s64g) {
    (this['locator'] = s64g) && (s64g['lineNumber'] = 0x0);
  }, 'comment': function ($5ldb) {
    $5ldb = M_xr1v9['apply'](this, arguments);var j7hm_4 = this['doc']['createComment']($5ldb);this['locator'] && M_mhni5j(this['locator'], j7hm_4), M_etz28(this, j7hm_4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vfbdwr, ln$i, nh7_) {
    var ux1y = this['doc']['implementation'];if (ux1y && ux1y['createDocumentType']) {
      var sg_46 = ux1y['createDocumentType'](vfbdwr, ln$i, nh7_);this['locator'] && M_mhni5j(this['locator'], sg_46), M_etz28(this, sg_46);
    }
  }, 'warning': function (h5jin) {
    console['warn']('[xmldom warning]\t' + h5jin, M_t8ezc2(this['locator']));
  }, 'error': function (_j6s7) {
    console['error']('[xmldom error]\t' + _j6s7, M_t8ezc2(this['locator']));
  }, 'fatalError': function (ec8gao) {
    throw console['error']('[xmldom fatalError]\t' + ec8gao, M_t8ezc2(this['locator'])), ec8gao;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (v9rfw) {
  M_l5b0d$['prototype'][v9rfw] = function () {
    return null;
  };
});var M_vfdb$ = require('./mmmSAX')['XMLReader'],
    M_nl5ih0 = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_il0n5;