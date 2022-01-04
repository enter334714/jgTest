var O = wx.$C;
function h_pu5c$(zrjd) {
  this['options'] = zrjd || { 'locator': {} };
}function h_fg7314(q134x, xdwj0, i2a6y) {
  function nvy_gs(y26asi) {
    var hxdq0 = q134x[y26asi];!hxdq0 && _v43g && (hxdq0 = 0x2 == q134x['length'] ? function (a2n) {
      q134x(y26asi, a2n);
    } : q134x), iyb2[y26asi] = hxdq0 && function (syi2a6) {
      hxdq0('[xmldom ' + y26asi + ']\t' + syi2a6 + h_y6ia2(i2a6y));
    } || function () {};
  }if (!q134x) {
    if (xdwj0 instanceof h_ys_ngv) return xdwj0;q134x = xdwj0;
  }var iyb2 = {},
      _v43g = q134x instanceof Function;return i2a6y = i2a6y || {}, nvy_gs('warning'), nvy_gs('error'), nvy_gs('fatalError'), iyb2;
}function h_ys_ngv() {
  this['cdata'] = !0x1;
}function h_hwdj09(i2ayb6, omlc) {
  omlc['lineNumber'] = i2ayb6['lineNumber'], omlc['columnNumber'] = i2ayb6['columnNumber'];
}function h_y6ia2(s6_any) {
  return s6_any ? '\x0a@' + (s6_any['systemId'] || '') + '#[line:' + s6_any['lineNumber'] + ',col:' + s6_any['columnNumber'] + ']' : void 0x0;
}function h_rp$zu(q0wdxh, j9d8rz, w09jhd) {
  return 'string' == typeof q0wdxh ? q0wdxh['substr'](j9d8rz, w09jhd) : q0wdxh['length'] >= j9d8rz + w09jhd || j9d8rz ? new java['lang']['String'](q0wdxh, j9d8rz, w09jhd) + '' : q0wdxh;
}function h_hzwj9(ucp$r8, octp5l) {
  ucp$r8['currentElement'] ? ucp$r8['currentElement']['appendChild'](octp5l) : ucp$r8['doc']['appendChild'](octp5l);
}h_pu5c$['prototype']['parseFromString'] = function (f3_4g, r8cp$u) {
  var syi62a = this['options'],
      jdzrh9 = new h_oct(),
      n_vgf4 = syi62a['domBuilder'] || new h_ys_ngv(),
      h9wdzj = syi62a['errorHandler'],
      crp8 = syi62a['locator'],
      $uc5pl = syi62a['xmlns'] || {},
      x31q4 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return crp8 && n_vgf4['setDocumentLocator'](crp8), jdzrh9['errorHandler'] = h_fg7314(h9wdzj, n_vgf4, crp8), jdzrh9['domBuilder'] = syi62a['domBuilder'] || n_vgf4, /\/x?html?$/['test'](r8cp$u) && (x31q4['nbsp'] = '\u00a0', x31q4['copy'] = '©', $uc5pl[''] = 'http://www.w3.org/1999/xhtml'), $uc5pl['xml'] = $uc5pl['xml'] || 'http://www.w3.org/XML/1998/namespace', f3_4g ? jdzrh9['parse'](f3_4g, $uc5pl, x31q4) : jdzrh9['errorHandler']['error']('invalid doc source'), n_vgf4['doc'];
}, h_ys_ngv['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_f71q3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (n_sy6a, hzd9j, j0d9h, zjhdr) {
    var svnf_g = this['doc'],
        x0qw7 = svnf_g['createElementNS'](n_sy6a, j0d9h || hzd9j),
        qh0xdw = zjhdr['length'];h_hzwj9(this, x0qw7), this['currentElement'] = x0qw7, this['locator'] && h_hwdj09(this['locator'], x0qw7);for (var q741x = 0x0; qh0xdw > q741x; q741x++) {
      var n_sy6a = zjhdr['getURI'](q741x),
          anv_y = zjhdr['getValue'](q741x),
          j0d9h = zjhdr['getQName'](q741x),
          w0hj = svnf_g['createAttributeNS'](n_sy6a, j0d9h);this['locator'] && h_hwdj09(zjhdr['getLocator'](q741x), w0hj), w0hj['value'] = w0hj['nodeValue'] = anv_y, x0qw7['setAttributeNode'](w0hj);
    }
  }, 'endElement': function () {
    {
      var hj9w = this['currentElement'];hj9w['tagName'];
    }this['currentElement'] = hj9w['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c8rup, tk) {
    var rc8p = this['doc']['createProcessingInstruction'](c8rup, tk);this['locator'] && h_hwdj09(this['locator'], rc8p), h_hzwj9(this, rc8p);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xwd0q) {
    if (xwd0q = h_rp$zu['apply'](this, arguments)) {
      if (this['cdata']) var p$ur8 = this['doc']['createCDATASection'](xwd0q);else var p$ur8 = this['doc']['createTextNode'](xwd0q);this['currentElement'] ? this['currentElement']['appendChild'](p$ur8) : /^\s*$/['test'](xwd0q) && this['doc']['appendChild'](p$ur8), this['locator'] && h_hwdj09(this['locator'], p$ur8);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (purc$) {
    (this['locator'] = purc$) && (purc$['lineNumber'] = 0x0);
  }, 'comment': function (f1g3v) {
    f1g3v = h_rp$zu['apply'](this, arguments);var wd9zj = this['doc']['createComment'](f1g3v);this['locator'] && h_hwdj09(this['locator'], wd9zj), h_hzwj9(this, wd9zj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rdzj8, _g4f3, uocp5) {
    var u$cr = this['doc']['implementation'];if (u$cr && u$cr['createDocumentType']) {
      var ibea2 = u$cr['createDocumentType'](rdzj8, _g4f3, uocp5);this['locator'] && h_hwdj09(this['locator'], ibea2), h_hzwj9(this, ibea2);
    }
  }, 'warning': function (r$uc) {
    console['warn']('[xmldom warning]\t' + r$uc, h_y6ia2(this['locator']));
  }, 'error': function (_v4) {
    console['error']('[xmldom error]\t' + _v4, h_y6ia2(this['locator']));
  }, 'fatalError': function (hz9jdr) {
    throw console['error']('[xmldom fatalError]\t' + hz9jdr, h_y6ia2(this['locator'])), hz9jdr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (byi6a2) {
  h_ys_ngv['prototype'][byi6a2] = function () {
    return null;
  };
});var h_oct = require('./hhhsax')['XMLReader'],
    h_f71q3 = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_pu5c$;