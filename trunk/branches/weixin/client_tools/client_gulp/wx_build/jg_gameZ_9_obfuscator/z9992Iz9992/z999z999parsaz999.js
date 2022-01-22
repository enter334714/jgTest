var H = wx.$F;
function f_o9(znx) {
  this['options'] = znx || { 'locator': {} };
}function frb30m(lsdu, ew8, jv25) {
  function znvta5(lcsdk4) {
    var tvzn7 = lsdu[lcsdk4];!tvzn7 && _iy6p9 && (tvzn7 = 0x2 == lsdu['length'] ? function (at7nzv) {
      lsdu(lcsdk4, at7nzv);
    } : lsdu), v5jtn[lcsdk4] = tvzn7 && function (cgl1w) {
      tvzn7('[xmldom ' + lcsdk4 + ']\t' + cgl1w + flkgwhc(jv25));
    } || function () {};
  }if (!lsdu) {
    if (ew8 instanceof ft8an) return ew8;lsdu = ew8;
  }var v5jtn = {},
      _iy6p9 = lsdu instanceof Function;return jv25 = jv25 || {}, znvta5('warning'), znvta5('error'), znvta5('fatalError'), v5jtn;
}function ft8an() {
  this['cdata'] = !0x1;
}function fb$0z7(bm7x0, cwhkl) {
  cwhkl['lineNumber'] = bm7x0['lineNumber'], cwhkl['columnNumber'] = bm7x0['columnNumber'];
}function flkgwhc(a5zvt) {
  return a5zvt ? '\x0a@' + (a5zvt['systemId'] || '') + '#[line:' + a5zvt['lineNumber'] + ',col:' + a5zvt['columnNumber'] + ']' : void 0x0;
}function f_9supd(ch1w2, kchl, zxna7$) {
  return 'string' == typeof ch1w2 ? ch1w2['substr'](kchl, zxna7$) : ch1w2['length'] >= kchl + zxna7$ || kchl ? new java['lang']['String'](ch1w2, kchl, zxna7$) + '' : ch1w2;
}function fe1852j(v5ntza, vj2e85) {
  v5ntza['currentElement'] ? v5ntza['currentElement']['appendChild'](vj2e85) : v5ntza['doc']['appendChild'](vj2e85);
}f_o9['prototype']['parseFromString'] = function (pd9us, hc2wg1) {
  var ulk4sd = this['options'],
      e1wj82 = new fznaxt(),
      b$0m7x = ulk4sd['domBuilder'] || new ft8an(),
      z$70b = ulk4sd['errorHandler'],
      j8v = ulk4sd['locator'],
      mbr03 = ulk4sd['xmlns'] || {},
      ypi96_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j8v && b$0m7x['setDocumentLocator'](j8v), e1wj82['errorHandler'] = frb30m(z$70b, b$0m7x, j8v), e1wj82['domBuilder'] = ulk4sd['domBuilder'] || b$0m7x, /\/x?html?$/['test'](hc2wg1) && (ypi96_['nbsp'] = '\u00a0', ypi96_['copy'] = '©', mbr03[''] = 'http://www.w3.org/1999/xhtml'), mbr03['xml'] = mbr03['xml'] || 'http://www.w3.org/XML/1998/namespace', pd9us ? e1wj82['parse'](pd9us, mbr03, ypi96_) : e1wj82['errorHandler']['error']('invalid doc source'), b$0m7x['doc'];
}, ft8an['prototype'] = { 'startDocument': function () {
    this['doc'] = new fmb3q$()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (wgc1lh, k4slu, ipy96_, d_us) {
    var vant85 = this['doc'],
        b3$q0m = vant85['createElementNS'](wgc1lh, ipy96_ || k4slu),
        bqmr03 = d_us['length'];fe1852j(this, b3$q0m), this['currentElement'] = b3$q0m, this['locator'] && fb$0z7(this['locator'], b3$q0m);for (var $zx07b = 0x0; bqmr03 > $zx07b; $zx07b++) {
      var wgc1lh = d_us['getURI']($zx07b),
          pi6 = d_us['getValue']($zx07b),
          ipy96_ = d_us['getQName']($zx07b),
          h1lgc = vant85['createAttributeNS'](wgc1lh, ipy96_);this['locator'] && fb$0z7(d_us['getLocator']($zx07b), h1lgc), h1lgc['value'] = h1lgc['nodeValue'] = pi6, b3$q0m['setAttributeNode'](h1lgc);
    }
  }, 'endElement': function () {
    {
      var z7n$ax = this['currentElement'];z7n$ax['tagName'];
    }this['currentElement'] = z7n$ax['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (cghw1, spud9_) {
    var zbx7 = this['doc']['createProcessingInstruction'](cghw1, spud9_);this['locator'] && fb$0z7(this['locator'], zbx7), fe1852j(this, zbx7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (up4s9d) {
    if (up4s9d = f_9supd['apply'](this, arguments)) {
      if (this['cdata']) var kwcgl = this['doc']['createCDATASection'](up4s9d);else var kwcgl = this['doc']['createTextNode'](up4s9d);this['currentElement'] ? this['currentElement']['appendChild'](kwcgl) : /^\s*$/['test'](up4s9d) && this['doc']['appendChild'](kwcgl), this['locator'] && fb$0z7(this['locator'], kwcgl);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hckdl4) {
    (this['locator'] = hckdl4) && (hckdl4['lineNumber'] = 0x0);
  }, 'comment': function (pyu9s) {
    pyu9s = f_9supd['apply'](this, arguments);var tj85v = this['doc']['createComment'](pyu9s);this['locator'] && fb$0z7(this['locator'], tj85v), fe1852j(this, tj85v);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($bm03x, x$zna, cghw) {
    var xta7 = this['doc']['implementation'];if (xta7 && xta7['createDocumentType']) {
      var dsp_u9 = xta7['createDocumentType']($bm03x, x$zna, cghw);this['locator'] && fb$0z7(this['locator'], dsp_u9), fe1852j(this, dsp_u9);
    }
  }, 'warning': function (p9_6y) {
    console['warn']('[xmldom warning]\t' + p9_6y, flkgwhc(this['locator']));
  }, 'error': function (tnj58) {
    console['error']('[xmldom error]\t' + tnj58, flkgwhc(this['locator']));
  }, 'fatalError': function (v58ant) {
    throw console['error']('[xmldom fatalError]\t' + v58ant, flkgwhc(this['locator'])), v58ant;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (tn5avz) {
  ft8an['prototype'][tn5avz] = function () {
    return null;
  };
});var fznaxt = require('./z999z999cz999z999')['XMLReader'],
    fmb3q$ = exports['DOMImplementation'] = require('./z999z999DOz999z999')['DOMImplementation'];exports['XMLSerializer'] = require('./z999z999DOz999z999')['XMLSerializer'], exports['DOMParser'] = f_o9;