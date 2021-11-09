var A = wx.$N;
function n_c05ns7(_4hu) {
  this['options'] = _4hu || { 'locator': {} };
}function n_mldxnz(lhxm_k, h_k$, iqpj9) {
  function a3oe82(fiqy9j) {
    var ldxmk = lhxm_k[fiqy9j];!ldxmk && k4_mh && (ldxmk = 0x2 == lhxm_k['length'] ? function (qpijy) {
      lhxm_k(fiqy9j, qpijy);
    } : lhxm_k), w2o6ea[fiqy9j] = ldxmk && function (vf38r) {
      ldxmk('[xmldom ' + fiqy9j + ']\t' + vf38r + n_viry(iqpj9));
    } || function () {};
  }if (!lhxm_k) {
    if (h_k$ instanceof n_ncd) return h_k$;lhxm_k = h_k$;
  }var w2o6ea = {},
      k4_mh = lhxm_k instanceof Function;return iqpj9 = iqpj9 || {}, a3oe82('warning'), a3oe82('error'), a3oe82('fatalError'), w2o6ea;
}function n_ncd() {
  this['cdata'] = !0x1;
}function n_s7nz(w26at, n7zdcs) {
  n7zdcs['lineNumber'] = w26at['lineNumber'], n7zdcs['columnNumber'] = w26at['columnNumber'];
}function n_viry(e8aor) {
  return e8aor ? '\x0a@' + (e8aor['systemId'] || '') + '#[line:' + e8aor['lineNumber'] + ',col:' + e8aor['columnNumber'] + ']' : void 0x0;
}function n_vrigy(o83era, csnx, mxd) {
  return 'string' == typeof o83era ? o83era['substr'](csnx, mxd) : o83era['length'] >= csnx + mxd || csnx ? new java['lang']['String'](o83era, csnx, mxd) + '' : o83era;
}function n_z75c(xdlzmh, _lmxkh) {
  xdlzmh['currentElement'] ? xdlzmh['currentElement']['appendChild'](_lmxkh) : xdlzmh['doc']['appendChild'](_lmxkh);
}n_c05ns7['prototype']['parseFromString'] = function (voe3r, fyrg3v) {
  var u4$h_ = this['options'],
      szxdl = new n_g3yfv(),
      c0n57s = u4$h_['domBuilder'] || new n_ncd(),
      czsn7 = u4$h_['errorHandler'],
      ro8v3 = u4$h_['locator'],
      fygqi = u4$h_['xmlns'] || {},
      orve3 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ro8v3 && c0n57s['setDocumentLocator'](ro8v3), szxdl['errorHandler'] = n_mldxnz(czsn7, c0n57s, ro8v3), szxdl['domBuilder'] = u4$h_['domBuilder'] || c0n57s, /\/x?html?$/['test'](fyrg3v) && (orve3['nbsp'] = '\u00a0', orve3['copy'] = '©', fygqi[''] = 'http://www.w3.org/1999/xhtml'), fygqi['xml'] = fygqi['xml'] || 'http://www.w3.org/XML/1998/namespace', voe3r ? szxdl['parse'](voe3r, fygqi, orve3) : szxdl['errorHandler']['error']('invalid doc source'), c0n57s['doc'];
}, n_ncd['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_u$4k_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jfyq, cxs, o8a2e3, zmlxhd) {
    var kxhdl = this['doc'],
        $k41_u = kxhdl['createElementNS'](jfyq, o8a2e3 || cxs),
        qf9i = zmlxhd['length'];n_z75c(this, $k41_u), this['currentElement'] = $k41_u, this['locator'] && n_s7nz(this['locator'], $k41_u);for (var wab26o = 0x0; qf9i > wab26o; wab26o++) {
      var jfyq = zmlxhd['getURI'](wab26o),
          yjgifv = zmlxhd['getValue'](wab26o),
          o8a2e3 = zmlxhd['getQName'](wab26o),
          cszdnx = kxhdl['createAttributeNS'](jfyq, o8a2e3);this['locator'] && n_s7nz(zmlxhd['getLocator'](wab26o), cszdnx), cszdnx['value'] = cszdnx['nodeValue'] = yjgifv, $k41_u['setAttributeNode'](cszdnx);
    }
  }, 'endElement': function () {
    {
      var qiygfj = this['currentElement'];qiygfj['tagName'];
    }this['currentElement'] = qiygfj['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rvoe3, yvigfr) {
    var a3e8ro = this['doc']['createProcessingInstruction'](rvoe3, yvigfr);this['locator'] && n_s7nz(this['locator'], a3e8ro), n_z75c(this, a3e8ro);
  }, 'ignorableWhitespace': function () {}, 'characters': function (nzsxl) {
    if (nzsxl = n_vrigy['apply'](this, arguments)) {
      if (this['cdata']) var xmkhld = this['doc']['createCDATASection'](nzsxl);else var xmkhld = this['doc']['createTextNode'](nzsxl);this['currentElement'] ? this['currentElement']['appendChild'](xmkhld) : /^\s*$/['test'](nzsxl) && this['doc']['appendChild'](xmkhld), this['locator'] && n_s7nz(this['locator'], xmkhld);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nczs57) {
    (this['locator'] = nczs57) && (nczs57['lineNumber'] = 0x0);
  }, 'comment': function (lmzdnx) {
    lmzdnx = n_vrigy['apply'](this, arguments);var z5n7cs = this['doc']['createComment'](lmzdnx);this['locator'] && n_s7nz(this['locator'], z5n7cs), n_z75c(this, z5n7cs);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (s50pc, ov3r8, h_m4) {
    var s7d = this['doc']['implementation'];if (s7d && s7d['createDocumentType']) {
      var p9qiy = s7d['createDocumentType'](s50pc, ov3r8, h_m4);this['locator'] && n_s7nz(this['locator'], p9qiy), n_z75c(this, p9qiy);
    }
  }, 'warning': function (eo8rv3) {
    console['warn']('[xmldom warning]\t' + eo8rv3, n_viry(this['locator']));
  }, 'error': function (fyvgr) {
    console['error']('[xmldom error]\t' + fyvgr, n_viry(this['locator']));
  }, 'fatalError': function (fr38gv) {
    throw console['error']('[xmldom fatalError]\t' + fr38gv, n_viry(this['locator'])), fr38gv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (e28ao) {
  n_ncd['prototype'][e28ao] = function () {
    return null;
  };
});var n_g3yfv = require('./nnnSAX')['XMLReader'],
    n_u$4k_ = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_c05ns7;