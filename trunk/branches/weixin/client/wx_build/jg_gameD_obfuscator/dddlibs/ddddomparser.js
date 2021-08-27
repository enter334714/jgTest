var a_ = wx.$d;
function b_nh9e1qv(ibw30ld) {
  this['options'] = ibw30ld || { 'locator': {} };
}function b_il_gfzd(qehnv91, h9svn, qhen1v) {
  function y1ojk6(lid3b) {
    var to2u6p = qehnv91[lid3b];!to2u6p && f_m8ca && (to2u6p = 0x2 == qehnv91['length'] ? function ($nsevh9) {
      qehnv91(lid3b, $nsevh9);
    } : qehnv91), j9yoq[lid3b] = to2u6p ? function (gafmz) {
      to2u6p('[xmldom ' + lid3b + ']\t' + gafmz + b_j9o1kyq(qhen1v));
    } : function () {};
  }if (!qehnv91) {
    if (h9svn instanceof b_p462out) return h9svn;qehnv91 = h9svn;
  }var j9yoq = {},
      f_m8ca = qehnv91 instanceof Function;return qhen1v = qhen1v || {}, y1ojk6('warning'), y1ojk6('error'), y1ojk6('fatalError'), j9yoq;
}function b_p462out() {
  this['cdata'] = !0x1;
}function b_ifcmg(ev1hqn, l37d0) {
  l37d0['lineNumber'] = ev1hqn['lineNumber'], l37d0['columnNumber'] = ev1hqn['columnNumber'];
}function b_j9o1kyq(d0_w) {
  return d0_w ? '\x0a@' + (d0_w['systemId'] || '') + '#[line:' + d0_w['lineNumber'] + ',col:' + d0_w['columnNumber'] + ']' : void 0x0;
}function b_n$5vhse(nse$5rv, c4mpa, yq1jokt) {
  return 'string' == typeof nse$5rv ? nse$5rv['substr'](c4mpa, yq1jokt) : nse$5rv['length'] >= c4mpa + yq1jokt || c4mpa ? new java['lang']['String'](nse$5rv, c4mpa, yq1jokt) + '' : nse$5rv;
}function b_iwd3z0l(f84amgc, zfilgm) {
  (f84amgc['currentElement'] || f84amgc['doc'])['appendChild'](zfilgm);
}b_nh9e1qv['prototype']['parseFromString'] = function (g8mcua, jy1kqot) {
  var gzm_fic = this['options'],
      f_8cmag = new b_vn19kqh(),
      vnq$9he = gzm_fic['domBuilder'] || new b_p462out(),
      d0lzi3w = gzm_fic['errorHandler'],
      v9enh1 = gzm_fic['locator'],
      c8u4a2 = gzm_fic['xmlns'] || {},
      nv$hse5 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return v9enh1 && vnq$9he['setDocumentLocator'](v9enh1), f_8cmag['errorHandler'] = b_il_gfzd(d0lzi3w, vnq$9he, v9enh1), f_8cmag['domBuilder'] = gzm_fic['domBuilder'] || vnq$9he, /\/x?html?$/['test'](jy1kqot) && (nv$hse5['nbsp'] = '\u00a0', nv$hse5['copy'] = '©', c8u4a2[''] = 'http://www.w3.org/1999/xhtml'), c8u4a2['xml'] = c8u4a2['xml'] || 'http://www.w3.org/XML/1998/namespace', g8mcua ? f_8cmag['parse'](g8mcua, c8u4a2, nv$hse5) : f_8cmag['errorHandler']['error']('invalid doc source'), vnq$9he['doc'];
}, b_p462out['prototype'] = { 'startDocument': function () {
    this['doc'] = new b_fzd_0il()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (tp2y6, db0wil3, l_dif, ykoj6t2) {
    var _fm8ac = this['doc'],
        t1oykjq = _fm8ac['createElementNS'](tp2y6, l_dif || db0wil3),
        uapm8c4 = ykoj6t2['length'];b_iwd3z0l(this, t1oykjq), this['currentElement'] = t1oykjq, this['locator'] && b_ifcmg(this['locator'], t1oykjq);for (var l03wzid = 0x0; l03wzid < uapm8c4; l03wzid++) {
      var tp2y6 = ykoj6t2['getURI'](l03wzid),
          zfli_mg = ykoj6t2['getValue'](l03wzid),
          l_dif = ykoj6t2['getQName'](l03wzid),
          oyk6jt2 = _fm8ac['createAttributeNS'](tp2y6, l_dif);this['locator'] && b_ifcmg(ykoj6t2['getLocator'](l03wzid), oyk6jt2), oyk6jt2['value'] = oyk6jt2['nodeValue'] = zfli_mg, t1oykjq['setAttributeNode'](oyk6jt2);
    }
  }, 'endElement': function () {
    var o2jy6tk = this['currentElement'];o2jy6tk['tagName'], this['currentElement'] = o2jy6tk['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (lzfgid, k9q1oy) {
    k9q1oy = this['doc']['createProcessingInstruction'](lzfgid, k9q1oy), (this['locator'] && b_ifcmg(this['locator'], k9q1oy), b_iwd3z0l(this, k9q1oy));
  }, 'ignorableWhitespace': function () {}, 'characters': function (knq19vh) {
    var _ifzgdl;(knq19vh = b_n$5vhse['apply'](this, arguments)) && (_ifzgdl = this['cdata'] ? this['doc']['createCDATASection'](knq19vh) : this['doc']['createTextNode'](knq19vh), this['currentElement'] ? this['currentElement']['appendChild'](_ifzgdl) : /^\s*$/['test'](knq19vh) && this['doc']['appendChild'](_ifzgdl), this['locator'] && b_ifcmg(this['locator'], _ifzgdl));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (iz0_w) {
    (this['locator'] = iz0_w) && (iz0_w['lineNumber'] = 0x0);
  }, 'comment': function (l0di3w) {
    l0di3w = b_n$5vhse['apply'](this, arguments);var oytj6k2 = this['doc']['createComment'](l0di3w);this['locator'] && b_ifcmg(this['locator'], oytj6k2), b_iwd3z0l(this, oytj6k2);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (biwdl, oj6y1k, i0b3l) {
    var hv9q1n = this['doc']['implementation'];hv9q1n && hv9q1n['createDocumentType'] && (i0b3l = hv9q1n['createDocumentType'](biwdl, oj6y1k, i0b3l), this['locator'] && b_ifcmg(this['locator'], i0b3l), b_iwd3z0l(this, i0b3l));
  }, 'warning': function (pu426t8) {
    console['warn']('[xmldom warning]\t' + pu426t8, b_j9o1kyq(this['locator']));
  }, 'error': function (k9yh1vq) {
    console['error']('[xmldom error]\t' + k9yh1vq, b_j9o1kyq(this['locator']));
  }, 'fatalError': function (jp6o2ut) {
    throw console['error']('[xmldom fatalError]\t' + jp6o2ut, b_j9o1kyq(this['locator'])), jp6o2ut;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (g84acf) {
  b_p462out['prototype'][g84acf] = function () {
    return null;
  };
});var b_vn19kqh = require('./dddsax')['XMLReader'],
    b_fzd_0il = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = b_nh9e1qv;