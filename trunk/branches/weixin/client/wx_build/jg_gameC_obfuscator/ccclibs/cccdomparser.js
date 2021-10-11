var p = wx.$h;
function a_vomi59(bsdr) {
  this['options'] = bsdr || { 'locator': {} };
}function a_vi_1om(nrcd, _o9vim, scnrw) {
  function dr8c(vi59om) {
    var ov_m1 = nrcd[vi59om];!ov_m1 && rcd8w && (ov_m1 = 0x2 == nrcd['length'] ? function (wnrb) {
      nrcd(vi59om, wnrb);
    } : nrcd), jz6k[vi59om] = ov_m1 ? function (ftz$j) {
      ov_m1('[xmldom ' + vi59om + ']\t' + ftz$j + a_brnsw(scnrw));
    } : function () {};
  }if (!nrcd) {
    if (_o9vim instanceof a_bdnwsp) return _o9vim;nrcd = _o9vim;
  }var jz6k = {},
      rcd8w = nrcd instanceof Function;return scnrw = scnrw || {}, dr8c('warning'), dr8c('error'), dr8c('fatalError'), jz6k;
}function a_bdnwsp() {
  this['cdata'] = !0x1;
}function a_vm_$1i(y3c8, $x1it) {
  $x1it['lineNumber'] = y3c8['lineNumber'], $x1it['columnNumber'] = y3c8['columnNumber'];
}function a_brnsw(x$i_1) {
  return x$i_1 ? '\x0a@' + (x$i_1['systemId'] || '') + '#[line:' + x$i_1['lineNumber'] + ',col:' + x$i_1['columnNumber'] + ']' : void 0x0;
}function a_a6k2fj(g90y35, j2ktz, $ftj) {
  return 'string' == typeof g90y35 ? g90y35['substr'](j2ktz, $ftj) : g90y35['length'] >= j2ktz + $ftj || j2ktz ? new java['lang']['String'](g90y35, j2ktz, $ftj) + '' : g90y35;
}function a_dn7pwb(qa6fk2, ovi5m9) {
  (qa6fk2['currentElement'] || qa6fk2['doc'])['appendChild'](ovi5m9);
}a_vomi59['prototype']['parseFromString'] = function (pbew, o059v) {
  var zjkt2 = this['options'],
      bpdns = new a_fzjtk(),
      vmi_$ = zjkt2['domBuilder'] || new a_bdnwsp(),
      yg0c8 = zjkt2['errorHandler'],
      g09yo5 = zjkt2['locator'],
      k2fzj6 = zjkt2['xmlns'] || {},
      jt$z1 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return g09yo5 && vmi_$['setDocumentLocator'](g09yo5), bpdns['errorHandler'] = a_vi_1om(yg0c8, vmi_$, g09yo5), bpdns['domBuilder'] = zjkt2['domBuilder'] || vmi_$, /\/x?html?$/['test'](o059v) && (jt$z1['nbsp'] = '\u00a0', jt$z1['copy'] = '©', k2fzj6[''] = 'http://www.w3.org/1999/xhtml'), k2fzj6['xml'] = k2fzj6['xml'] || 'http://www.w3.org/XML/1998/namespace', pbew ? bpdns['parse'](pbew, k2fzj6, jt$z1) : bpdns['errorHandler']['error']('invalid doc source'), vmi_$['doc'];
}, a_bdnwsp['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_scr83d()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xz1j$, x$1_t, gy3c8r, m1_v) {
    var e7nwbp = this['doc'],
        v1_im = e7nwbp['createElementNS'](xz1j$, gy3c8r || x$1_t),
        wndbp7 = m1_v['length'];a_dn7pwb(this, v1_im), this['currentElement'] = v1_im, this['locator'] && a_vm_$1i(this['locator'], v1_im);for (var f6kj = 0x0; f6kj < wndbp7; f6kj++) {
      var xz1j$ = m1_v['getURI'](f6kj),
          sbrwnd = m1_v['getValue'](f6kj),
          gy3c8r = m1_v['getQName'](f6kj),
          j1xtz = e7nwbp['createAttributeNS'](xz1j$, gy3c8r);this['locator'] && a_vm_$1i(m1_v['getLocator'](f6kj), j1xtz), j1xtz['value'] = j1xtz['nodeValue'] = sbrwnd, v1_im['setAttributeNode'](j1xtz);
    }
  }, 'endElement': function () {
    var jfzx2 = this['currentElement'];jfzx2['tagName'], this['currentElement'] = jfzx2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fxtjz, qhka46) {
    qhka46 = this['doc']['createProcessingInstruction'](fxtjz, qhka46), (this['locator'] && a_vm_$1i(this['locator'], qhka46), a_dn7pwb(this, qhka46));
  }, 'ignorableWhitespace': function () {}, 'characters': function (g9o05v) {
    var y095o;(g9o05v = a_a6k2fj['apply'](this, arguments)) && (y095o = this['cdata'] ? this['doc']['createCDATASection'](g9o05v) : this['doc']['createTextNode'](g9o05v), this['currentElement'] ? this['currentElement']['appendChild'](y095o) : /^\s*$/['test'](g9o05v) && this['doc']['appendChild'](y095o), this['locator'] && a_vm_$1i(this['locator'], y095o));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (scndw) {
    (this['locator'] = scndw) && (scndw['lineNumber'] = 0x0);
  }, 'comment': function (i1x_m$) {
    i1x_m$ = a_a6k2fj['apply'](this, arguments);var _m$i = this['doc']['createComment'](i1x_m$);this['locator'] && a_vm_$1i(this['locator'], _m$i), a_dn7pwb(this, _m$i);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (v_m1$i, _iv$, y503g8) {
    var t$i1 = this['doc']['implementation'];t$i1 && t$i1['createDocumentType'] && (y503g8 = t$i1['createDocumentType'](v_m1$i, _iv$, y503g8), this['locator'] && a_vm_$1i(this['locator'], y503g8), a_dn7pwb(this, y503g8));
  }, 'warning': function (ndcrs) {
    console['warn']('[xmldom warning]\t' + ndcrs, a_brnsw(this['locator']));
  }, 'error': function (kqa426) {
    console['error']('[xmldom error]\t' + kqa426, a_brnsw(this['locator']));
  }, 'fatalError': function (nwsdbr) {
    throw console['error']('[xmldom fatalError]\t' + nwsdbr, a_brnsw(this['locator'])), nwsdbr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (brdsn) {
  a_bdnwsp['prototype'][brdsn] = function () {
    return null;
  };
});var a_fzjtk = require('./cccsax')['XMLReader'],
    a_scr83d = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_vomi59;