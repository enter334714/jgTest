var p = wx.$h;
function a_tj4f3(t73f1) {
  this['options'] = t73f1 || { 'locator': {} };
}function a_byi6e($yie6, scjtf, x2_nvg) {
  function i9ozb(vh_g80) {
    var sct15 = $yie6[vh_g80];!sct15 && $boiey && (sct15 = 0x2 == $yie6['length'] ? function (i9bozy) {
      $yie6(vh_g80, i9bozy);
    } : $yie6), xr2nvw[vh_g80] = sct15 && function (qoyb9) {
      sct15('[xmldom ' + vh_g80 + ']\t' + qoyb9 + a_sd1tc(x2_nvg));
    } || function () {};
  }if (!$yie6) {
    if (scjtf instanceof a_pw37a4) return scjtf;$yie6 = scjtf;
  }var xr2nvw = {},
      $boiey = $yie6 instanceof Function;return x2_nvg = x2_nvg || {}, i9ozb('warning'), i9ozb('error'), i9ozb('fatalError'), xr2nvw;
}function a_pw37a4() {
  this['cdata'] = !0x1;
}function a_ie$oyb(h06$k, ft17j3) {
  ft17j3['lineNumber'] = h06$k['lineNumber'], ft17j3['columnNumber'] = h06$k['columnNumber'];
}function a_sd1tc(r2xwnp) {
  return r2xwnp ? '\x0a@' + (r2xwnp['systemId'] || '') + '#[line:' + r2xwnp['lineNumber'] + ',col:' + r2xwnp['columnNumber'] + ']' : void 0x0;
}function a_k8i6e$(kie$8, sj, eyi9b) {
  return 'string' == typeof kie$8 ? kie$8['substr'](sj, eyi9b) : kie$8['length'] >= sj + eyi9b || sj ? new java['lang']['String'](kie$8, sj, eyi9b) + '' : kie$8;
}function a_x_20(j3t17f, khg806) {
  j3t17f['currentElement'] ? j3t17f['currentElement']['appendChild'](khg806) : j3t17f['doc']['appendChild'](khg806);
}a_tj4f3['prototype']['parseFromString'] = function (zq9y, hvxg_) {
  var v_x2rn = this['options'],
      lscdm = new a_$y6ie(),
      cftj1 = v_x2rn['domBuilder'] || new a_pw37a4(),
      vx_0h = v_x2rn['errorHandler'],
      wrn2vx = v_x2rn['locator'],
      b9iyo = v_x2rn['xmlns'] || {},
      h$608 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return wrn2vx && cftj1['setDocumentLocator'](wrn2vx), lscdm['errorHandler'] = a_byi6e(vx_0h, cftj1, wrn2vx), lscdm['domBuilder'] = v_x2rn['domBuilder'] || cftj1, /\/x?html?$/['test'](hvxg_) && (h$608['nbsp'] = '\u00a0', h$608['copy'] = '©', b9iyo[''] = 'http://www.w3.org/1999/xhtml'), b9iyo['xml'] = b9iyo['xml'] || 'http://www.w3.org/XML/1998/namespace', zq9y ? lscdm['parse'](zq9y, b9iyo, h$608) : lscdm['errorHandler']['error']('invalid doc source'), cftj1['doc'];
}, a_pw37a4['prototype'] = { 'startDocument': function () {
    this['doc'] = new a__v8h0g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (bi, io9zb, ftc1sj, nap4w) {
    var h6$ke8 = this['doc'],
        pra74 = h6$ke8['createElementNS'](bi, ftc1sj || io9zb),
        n_r2v = nap4w['length'];a_x_20(this, pra74), this['currentElement'] = pra74, this['locator'] && a_ie$oyb(this['locator'], pra74);for (var k68ei$ = 0x0; n_r2v > k68ei$; k68ei$++) {
      var bi = nap4w['getURI'](k68ei$),
          r7paw = nap4w['getValue'](k68ei$),
          ftc1sj = nap4w['getQName'](k68ei$),
          ap3w7 = h6$ke8['createAttributeNS'](bi, ftc1sj);this['locator'] && a_ie$oyb(nap4w['getLocator'](k68ei$), ap3w7), ap3w7['value'] = ap3w7['nodeValue'] = r7paw, pra74['setAttributeNode'](ap3w7);
    }
  }, 'endElement': function () {
    {
      var f4t7j = this['currentElement'];f4t7j['tagName'];
    }this['currentElement'] = f4t7j['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (nra4wp, g20x_) {
    var ob9yzq = this['doc']['createProcessingInstruction'](nra4wp, g20x_);this['locator'] && a_ie$oyb(this['locator'], ob9yzq), a_x_20(this, ob9yzq);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_0xhgv) {
    if (_0xhgv = a_k8i6e$['apply'](this, arguments)) {
      if (this['cdata']) var h_0gvx = this['doc']['createCDATASection'](_0xhgv);else var h_0gvx = this['doc']['createTextNode'](_0xhgv);this['currentElement'] ? this['currentElement']['appendChild'](h_0gvx) : /^\s*$/['test'](_0xhgv) && this['doc']['appendChild'](h_0gvx), this['locator'] && a_ie$oyb(this['locator'], h_0gvx);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (f7j34a) {
    (this['locator'] = f7j34a) && (f7j34a['lineNumber'] = 0x0);
  }, 'comment': function ($068h) {
    $068h = a_k8i6e$['apply'](this, arguments);var yob9zi = this['doc']['createComment']($068h);this['locator'] && a_ie$oyb(this['locator'], yob9zi), a_x_20(this, yob9zi);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ik$e8, zib9, f3jt71) {
    var hv_g0 = this['doc']['implementation'];if (hv_g0 && hv_g0['createDocumentType']) {
      var o9biz = hv_g0['createDocumentType'](ik$e8, zib9, f3jt71);this['locator'] && a_ie$oyb(this['locator'], o9biz), a_x_20(this, o9biz);
    }
  }, 'warning': function (k_g8h) {
    console['warn']('[xmldom warning]\t' + k_g8h, a_sd1tc(this['locator']));
  }, 'error': function (eobi$y) {
    console['error']('[xmldom error]\t' + eobi$y, a_sd1tc(this['locator']));
  }, 'fatalError': function (r2nwp) {
    throw console['error']('[xmldom fatalError]\t' + r2nwp, a_sd1tc(this['locator'])), r2nwp;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (i$68) {
  a_pw37a4['prototype'][i$68] = function () {
    return null;
  };
});var a_$y6ie = require('./cccsax')['XMLReader'],
    a__v8h0g = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_tj4f3;