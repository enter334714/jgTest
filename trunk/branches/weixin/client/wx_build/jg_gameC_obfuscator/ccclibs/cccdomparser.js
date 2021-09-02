var p = wx.$h;
function a_oe1h3lt(ia8fcw6) {
  this['options'] = ia8fcw6 || { 'locator': {} };
}function a_kgb5px(_dmh09, vn2y0r_, zjeg3s) {
  function sjg3z5(eo3tjs) {
    var rym_d2 = _dmh09[eo3tjs];!rym_d2 && zxk5gb && (rym_d2 = 0x2 == _dmh09['length'] ? function (bj5xzs) {
      _dmh09(eo3tjs, bj5xzs);
    } : _dmh09), sez5gj3[eo3tjs] = rym_d2 ? function (f87cvw) {
      rym_d2('[xmldom ' + eo3tjs + ']\t' + f87cvw + a_vc8fw6(zjeg3s));
    } : function () {};
  }if (!_dmh09) {
    if (vn2y0r_ instanceof a_awcfi64) return vn2y0r_;_dmh09 = vn2y0r_;
  }var sez5gj3 = {},
      zxk5gb = _dmh09 instanceof Function;return zjeg3s = zjeg3s || {}, sjg3z5('warning'), sjg3z5('error'), sjg3z5('fatalError'), sez5gj3;
}function a_awcfi64() {
  this['cdata'] = !0x1;
}function a_r0_ynm(het3lo1, lo3he1) {
  lo3he1['lineNumber'] = het3lo1['lineNumber'], lo3he1['columnNumber'] = het3lo1['columnNumber'];
}function a_vc8fw6(nv782f) {
  return nv782f ? '\x0a@' + (nv782f['systemId'] || '') + '#[line:' + nv782f['lineNumber'] + ',col:' + nv782f['columnNumber'] + ']' : void 0x0;
}function a_o1htle3(k5xpz$b, kbpz5x$, ojg3sle) {
  return 'string' == typeof k5xpz$b ? k5xpz$b['substr'](kbpz5x$, ojg3sle) : k5xpz$b['length'] >= kbpz5x$ + ojg3sle || kbpz5x$ ? new java['lang']['String'](k5xpz$b, kbpz5x$, ojg3sle) + '' : k5xpz$b;
}function a_i8awf6(_rd09h, vnwf78) {
  (_rd09h['currentElement'] || _rd09h['doc'])['appendChild'](vnwf78);
}a_oe1h3lt['prototype']['parseFromString'] = function (dy_r0m, kbpz$x5) {
  var _0yvn7 = this['options'],
      fwa8 = new a_zbsgkx5(),
      _0m9rdy = _0yvn7['domBuilder'] || new a_awcfi64(),
      zsegxj = _0yvn7['errorHandler'],
      j3legs = _0yvn7['locator'],
      ht91ldm = _0yvn7['xmlns'] || {},
      gzsjx5 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j3legs && _0m9rdy['setDocumentLocator'](j3legs), fwa8['errorHandler'] = a_kgb5px(zsegxj, _0m9rdy, j3legs), fwa8['domBuilder'] = _0yvn7['domBuilder'] || _0m9rdy, /\/x?html?$/['test'](kbpz$x5) && (gzsjx5['nbsp'] = '\u00a0', gzsjx5['copy'] = '©', ht91ldm[''] = 'http://www.w3.org/1999/xhtml'), ht91ldm['xml'] = ht91ldm['xml'] || 'http://www.w3.org/XML/1998/namespace', dy_r0m ? fwa8['parse'](dy_r0m, ht91ldm, gzsjx5) : fwa8['errorHandler']['error']('invalid doc source'), _0m9rdy['doc'];
}, a_awcfi64['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_bg5sxzj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (selotj, t1r9hm, r0m_h9, hd9t1rm) {
    var ezxj = this['doc'],
        gze3jo = ezxj['createElementNS'](selotj, r0m_h9 || t1r9hm),
        fn827vc = hd9t1rm['length'];a_i8awf6(this, gze3jo), this['currentElement'] = gze3jo, this['locator'] && a_r0_ynm(this['locator'], gze3jo);for (var f6v8cw = 0x0; f6v8cw < fn827vc; f6v8cw++) {
      var selotj = hd9t1rm['getURI'](f6v8cw),
          sz5gj3 = hd9t1rm['getValue'](f6v8cw),
          r0m_h9 = hd9t1rm['getQName'](f6v8cw),
          yr9m0_d = ezxj['createAttributeNS'](selotj, r0m_h9);this['locator'] && a_r0_ynm(hd9t1rm['getLocator'](f6v8cw), yr9m0_d), yr9m0_d['value'] = yr9m0_d['nodeValue'] = sz5gj3, gze3jo['setAttributeNode'](yr9m0_d);
    }
  }, 'endElement': function () {
    var gj5bsx = this['currentElement'];gj5bsx['tagName'], this['currentElement'] = gj5bsx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wa4ci6, y7nv8c) {
    y7nv8c = this['doc']['createProcessingInstruction'](wa4ci6, y7nv8c), (this['locator'] && a_r0_ynm(this['locator'], y7nv8c), a_i8awf6(this, y7nv8c));
  }, 'ignorableWhitespace': function () {}, 'characters': function (jo3gsle) {
    var gs5je;(jo3gsle = a_o1htle3['apply'](this, arguments)) && (gs5je = this['cdata'] ? this['doc']['createCDATASection'](jo3gsle) : this['doc']['createTextNode'](jo3gsle), this['currentElement'] ? this['currentElement']['appendChild'](gs5je) : /^\s*$/['test'](jo3gsle) && this['doc']['appendChild'](gs5je), this['locator'] && a_r0_ynm(this['locator'], gs5je));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hod1tl9) {
    (this['locator'] = hod1tl9) && (hod1tl9['lineNumber'] = 0x0);
  }, 'comment': function (fn27v8) {
    fn27v8 = a_o1htle3['apply'](this, arguments);var eo3gj = this['doc']['createComment'](fn27v8);this['locator'] && a_r0_ynm(this['locator'], eo3gj), a_i8awf6(this, eo3gj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jes3go, s5jezx, cv7n8w) {
    var _0y27n = this['doc']['implementation'];_0y27n && _0y27n['createDocumentType'] && (cv7n8w = _0y27n['createDocumentType'](jes3go, s5jezx, cv7n8w), this['locator'] && a_r0_ynm(this['locator'], cv7n8w), a_i8awf6(this, cv7n8w));
  }, 'warning': function (gb5kz) {
    console['warn']('[xmldom warning]\t' + gb5kz, a_vc8fw6(this['locator']));
  }, 'error': function (d_y0mr) {
    console['error']('[xmldom error]\t' + d_y0mr, a_vc8fw6(this['locator']));
  }, 'fatalError': function (v67wcf) {
    throw console['error']('[xmldom fatalError]\t' + v67wcf, a_vc8fw6(this['locator'])), v67wcf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_vn78y2) {
  a_awcfi64['prototype'][_vn78y2] = function () {
    return null;
  };
});var a_zbsgkx5 = require('./cccsax')['XMLReader'],
    a_bg5sxzj = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_oe1h3lt;