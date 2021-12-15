var K = wx.$S;
function sc9w0kz(mcix0) {
  this['options'] = mcix0 || { 'locator': {} };
}function sure43o(raeu$, ue4r3$, eo4u) {
  function wk9v0(hda4) {
    var da5$hy = raeu$[hda4];!da5$hy && p1qjs && (da5$hy = 0x2 == raeu$['length'] ? function (d5$4e) {
      raeu$(hda4, d5$4e);
    } : raeu$), xc2mi[hda4] = da5$hy && function (gqj8p1) {
      da5$hy('[xmldom ' + hda4 + ']\t' + gqj8p1 + sa5h$yd(eo4u));
    } || function () {};
  }if (!raeu$) {
    if (ue4r3$ instanceof sa5hdys) return ue4r3$;raeu$ = ue4r3$;
  }var xc2mi = {},
      p1qjs = raeu$ instanceof Function;return eo4u = eo4u || {}, wk9v0('warning'), wk9v0('error'), wk9v0('fatalError'), xc2mi;
}function sa5hdys() {
  this['cdata'] = !0x1;
}function shspgyq(tnmx2i, spqy5h) {
  spqy5h['lineNumber'] = tnmx2i['lineNumber'], spqy5h['columnNumber'] = tnmx2i['columnNumber'];
}function sa5h$yd(evuo3r) {
  return evuo3r ? '\x0a@' + (evuo3r['systemId'] || '') + '#[line:' + evuo3r['lineNumber'] + ',col:' + evuo3r['columnNumber'] + ']' : void 0x0;
}function smin_x(da45$h, ue43$r, nx7) {
  return 'string' == typeof da45$h ? da45$h['substr'](ue43$r, nx7) : da45$h['length'] >= ue43$r + nx7 || ue43$r ? new java['lang']['String'](da45$h, ue43$r, nx7) + '' : da45$h;
}function shsa5y(c_k90w, h$a5yd) {
  c_k90w['currentElement'] ? c_k90w['currentElement']['appendChild'](h$a5yd) : c_k90w['doc']['appendChild'](h$a5yd);
}sc9w0kz['prototype']['parseFromString'] = function (mcx0, sq5yp) {
  var qj1spg = this['options'],
      vz93ko = new sxcw_0i(),
      urozv = qj1spg['domBuilder'] || new sa5hdys(),
      ad4u$ = qj1spg['errorHandler'],
      jl186 = qj1spg['locator'],
      _09wic = qj1spg['xmlns'] || {},
      ruzov3 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jl186 && urozv['setDocumentLocator'](jl186), vz93ko['errorHandler'] = sure43o(ad4u$, urozv, jl186), vz93ko['domBuilder'] = qj1spg['domBuilder'] || urozv, /\/x?html?$/['test'](sq5yp) && (ruzov3['nbsp'] = '\u00a0', ruzov3['copy'] = '©', _09wic[''] = 'http://www.w3.org/1999/xhtml'), _09wic['xml'] = _09wic['xml'] || 'http://www.w3.org/XML/1998/namespace', mcx0 ? vz93ko['parse'](mcx0, _09wic, ruzov3) : vz93ko['errorHandler']['error']('invalid doc source'), urozv['doc'];
}, sa5hdys['prototype'] = { 'startDocument': function () {
    this['doc'] = new sdaeu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pygj, c_xm0i, i2c_m, t2mni) {
    var v9kowz = this['doc'],
        b1j68 = v9kowz['createElementNS'](pygj, i2c_m || c_xm0i),
        u4 = t2mni['length'];shsa5y(this, b1j68), this['currentElement'] = b1j68, this['locator'] && shspgyq(this['locator'], b1j68);for (var x_c0wi = 0x0; u4 > x_c0wi; x_c0wi++) {
      var pygj = t2mni['getURI'](x_c0wi),
          uv3ero = t2mni['getValue'](x_c0wi),
          i2c_m = t2mni['getQName'](x_c0wi),
          m_0xic = v9kowz['createAttributeNS'](pygj, i2c_m);this['locator'] && shspgyq(t2mni['getLocator'](x_c0wi), m_0xic), m_0xic['value'] = m_0xic['nodeValue'] = uv3ero, b1j68['setAttributeNode'](m_0xic);
    }
  }, 'endElement': function () {
    {
      var kwc9z = this['currentElement'];kwc9z['tagName'];
    }this['currentElement'] = kwc9z['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (v39zk, wi_0) {
    var gypsh = this['doc']['createProcessingInstruction'](v39zk, wi_0);this['locator'] && shspgyq(this['locator'], gypsh), shsa5y(this, gypsh);
  }, 'ignorableWhitespace': function () {}, 'characters': function (i0wc_9) {
    if (i0wc_9 = smin_x['apply'](this, arguments)) {
      if (this['cdata']) var kzvo3r = this['doc']['createCDATASection'](i0wc_9);else var kzvo3r = this['doc']['createTextNode'](i0wc_9);this['currentElement'] ? this['currentElement']['appendChild'](kzvo3r) : /^\s*$/['test'](i0wc_9) && this['doc']['appendChild'](kzvo3r), this['locator'] && shspgyq(this['locator'], kzvo3r);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (mi) {
    (this['locator'] = mi) && (mi['lineNumber'] = 0x0);
  }, 'comment': function (ci_x2m) {
    ci_x2m = smin_x['apply'](this, arguments);var e3$u4 = this['doc']['createComment'](ci_x2m);this['locator'] && shspgyq(this['locator'], e3$u4), shsa5y(this, e3$u4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (r3kvz, kzvow, l1jb86) {
    var _wc09k = this['doc']['implementation'];if (_wc09k && _wc09k['createDocumentType']) {
      var kwov = _wc09k['createDocumentType'](r3kvz, kzvow, l1jb86);this['locator'] && shspgyq(this['locator'], kwov), shsa5y(this, kwov);
    }
  }, 'warning': function (ur$4e3) {
    console['warn']('[xmldom warning]\t' + ur$4e3, sa5h$yd(this['locator']));
  }, 'error': function (hq5sp) {
    console['error']('[xmldom error]\t' + hq5sp, sa5h$yd(this['locator']));
  }, 'fatalError': function (w_90c) {
    throw console['error']('[xmldom fatalError]\t' + w_90c, sa5h$yd(this['locator'])), w_90c;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($e3r) {
  sa5hdys['prototype'][$e3r] = function () {
    return null;
  };
});var sxcw_0i = require('./sS12ss')['XMLReader'],
    sdaeu = exports['DOMImplementation'] = require('./ssDOss')['DOMImplementation'];exports['XMLSerializer'] = require('./ssDOss')['XMLSerializer'], exports['DOMParser'] = sc9w0kz;