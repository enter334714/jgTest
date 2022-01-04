var C = wx.$a;
function as$rl(zm54jd) {
  this['options'] = zm54jd || { 'locator': {} };
}function adt(c_zsm, xbihot, btoxph) {
  function n2pb8e(r_s9q) {
    var ep3n28 = c_zsm[r_s9q];!ep3n28 && ql$ && (ep3n28 = 0x2 == c_zsm['length'] ? function (htobx) {
      c_zsm(r_s9q, htobx);
    } : c_zsm), ht5oi[r_s9q] = ep3n28 && function (xhobt) {
      ep3n28('[xmldom ' + r_s9q + ']\t' + xhobt + abihto(btoxph));
    } || function () {};
  }if (!c_zsm) {
    if (xbihot instanceof aox2bp8) return xbihot;c_zsm = xbihot;
  }var ht5oi = {},
      ql$ = c_zsm instanceof Function;return btoxph = btoxph || {}, n2pb8e('warning'), n2pb8e('error'), n2pb8e('fatalError'), ht5oi;
}function aox2bp8() {
  this['cdata'] = !0x1;
}function awy17u(s9czm, f$0v) {
  f$0v['lineNumber'] = s9czm['lineNumber'], f$0v['columnNumber'] = s9czm['columnNumber'];
}function abihto(z9cjm) {
  return z9cjm ? '\x0a@' + (z9cjm['systemId'] || '') + '#[line:' + z9cjm['lineNumber'] + ',col:' + z9cjm['columnNumber'] + ']' : void 0x0;
}function aqs$rc(cvq_sr, _m4z9, svcq$) {
  return 'string' == typeof cvq_sr ? cvq_sr['substr'](_m4z9, svcq$) : cvq_sr['length'] >= _m4z9 + svcq$ || _m4z9 ? new java['lang']['String'](cvq_sr, _m4z9, svcq$) + '' : cvq_sr;
}function af67k0(g82n, g3n2e8) {
  g82n['currentElement'] ? g82n['currentElement']['appendChild'](g3n2e8) : g82n['doc']['appendChild'](g3n2e8);
}as$rl['prototype']['parseFromString'] = function (m_c9jz, bpn8x2) {
  var sr$vlq = this['options'],
      lvq$0 = new adh4ti5(),
      btoxhp = sr$vlq['domBuilder'] || new aox2bp8(),
      vqsrc = sr$vlq['errorHandler'],
      n8p2x = sr$vlq['locator'],
      jz4md9 = sr$vlq['xmlns'] || {},
      d9jmz4 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return n8p2x && btoxhp['setDocumentLocator'](n8p2x), lvq$0['errorHandler'] = adt(vqsrc, btoxhp, n8p2x), lvq$0['domBuilder'] = sr$vlq['domBuilder'] || btoxhp, /\/x?html?$/['test'](bpn8x2) && (d9jmz4['nbsp'] = '\u00a0', d9jmz4['copy'] = '©', jz4md9[''] = 'http://www.w3.org/1999/xhtml'), jz4md9['xml'] = jz4md9['xml'] || 'http://www.w3.org/XML/1998/namespace', m_c9jz ? lvq$0['parse'](m_c9jz, jz4md9, d9jmz4) : lvq$0['errorHandler']['error']('invalid doc source'), btoxhp['doc'];
}, aox2bp8['prototype'] = { 'startDocument': function () {
    this['doc'] = new ayl$fk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (q9_cs, sz_c9, sqlvr, jm45zd) {
    var pe8n32 = this['doc'],
        iotdh5 = pe8n32['createElementNS'](q9_cs, sqlvr || sz_c9),
        d4jit = jm45zd['length'];af67k0(this, iotdh5), this['currentElement'] = iotdh5, this['locator'] && awy17u(this['locator'], iotdh5);for (var xhib = 0x0; d4jit > xhib; xhib++) {
      var q9_cs = jm45zd['getURI'](xhib),
          _ms9cz = jm45zd['getValue'](xhib),
          sqlvr = jm45zd['getQName'](xhib),
          qrsl$ = pe8n32['createAttributeNS'](q9_cs, sqlvr);this['locator'] && awy17u(jm45zd['getLocator'](xhib), qrsl$), qrsl$['value'] = qrsl$['nodeValue'] = _ms9cz, iotdh5['setAttributeNode'](qrsl$);
    }
  }, 'endElement': function () {
    {
      var $0v = this['currentElement'];$0v['tagName'];
    }this['currentElement'] = $0v['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (q9_crs, sr_cq9) {
    var qvrsc$ = this['doc']['createProcessingInstruction'](q9_crs, sr_cq9);this['locator'] && awy17u(this['locator'], qvrsc$), af67k0(this, qvrsc$);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ptxob) {
    if (ptxob = aqs$rc['apply'](this, arguments)) {
      if (this['cdata']) var xobthi = this['doc']['createCDATASection'](ptxob);else var xobthi = this['doc']['createTextNode'](ptxob);this['currentElement'] ? this['currentElement']['appendChild'](xobthi) : /^\s*$/['test'](ptxob) && this['doc']['appendChild'](xobthi), this['locator'] && awy17u(this['locator'], xobthi);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zj9_) {
    (this['locator'] = zj9_) && (zj9_['lineNumber'] = 0x0);
  }, 'comment': function (c_szr9) {
    c_szr9 = aqs$rc['apply'](this, arguments);var l0f$yk = this['doc']['createComment'](c_szr9);this['locator'] && awy17u(this['locator'], l0f$yk), af67k0(this, l0f$yk);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (th5oxi, lvk0$f, mj4z9d) {
    var g328ne = this['doc']['implementation'];if (g328ne && g328ne['createDocumentType']) {
      var v$l0qr = g328ne['createDocumentType'](th5oxi, lvk0$f, mj4z9d);this['locator'] && awy17u(this['locator'], v$l0qr), af67k0(this, v$l0qr);
    }
  }, 'warning': function (dmz54) {
    console['warn']('[xmldom warning]\t' + dmz54, abihto(this['locator']));
  }, 'error': function (kvq0) {
    console['error']('[xmldom error]\t' + kvq0, abihto(this['locator']));
  }, 'fatalError': function ($qrl0v) {
    throw console['error']('[xmldom fatalError]\t' + $qrl0v, abihto(this['locator'])), $qrl0v;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (z_m9s) {
  aox2bp8['prototype'][z_m9s] = function () {
    return null;
  };
});var adh4ti5 = require('./aacaa')['XMLReader'],
    ayl$fk = exports['DOMImplementation'] = require('./aaDOaa')['DOMImplementation'];exports['XMLSerializer'] = require('./aaDOaa')['XMLSerializer'], exports['DOMParser'] = as$rl;