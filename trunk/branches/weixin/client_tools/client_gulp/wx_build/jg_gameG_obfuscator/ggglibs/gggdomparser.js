var m = wx.$g;
function gdof3(kxhw1y) {
  this['options'] = kxhw1y || { 'locator': {} };
}function gtz3o(b_f0p5, ap0i, lsq) {
  function t3dof4(qevc7) {
    var gl8s9c = b_f0p5[qevc7];!gl8s9c && d2oz3 && (gl8s9c = 0x2 == b_f0p5['length'] ? function (d3o26z) {
      b_f0p5(qevc7, d3o26z);
    } : b_f0p5), j6$r2z[qevc7] = gl8s9c && function (ptf) {
      gl8s9c('[xmldom ' + qevc7 + ']\t' + ptf + gof34td(lsq));
    } || function () {};
  }if (!b_f0p5) {
    if (ap0i instanceof gkh1y) return ap0i;b_f0p5 = ap0i;
  }var j6$r2z = {},
      d2oz3 = b_f0p5 instanceof Function;return lsq = lsq || {}, t3dof4('warning'), t3dof4('error'), t3dof4('fatalError'), j6$r2z;
}function gkh1y() {
  this['cdata'] = !0x1;
}function gi5xb(bip50_, mruj$) {
  mruj$['lineNumber'] = bip50_['lineNumber'], mruj$['columnNumber'] = bip50_['columnNumber'];
}function gof34td(iah51x) {
  return iah51x ? '\x0a@' + (iah51x['systemId'] || '') + '#[line:' + iah51x['lineNumber'] + ',col:' + iah51x['columnNumber'] + ']' : void 0x0;
}function gweyvk7(evc7gq, y7qwev, ihx1k) {
  return 'string' == typeof evc7gq ? evc7gq['substr'](y7qwev, ihx1k) : evc7gq['length'] >= y7qwev + ihx1k || y7qwev ? new java['lang']['String'](evc7gq, y7qwev, ihx1k) + '' : evc7gq;
}function ghew(cevq, clg98s) {
  cevq['currentElement'] ? cevq['currentElement']['appendChild'](clg98s) : cevq['doc']['appendChild'](clg98s);
}gdof3['prototype']['parseFromString'] = function (pb_t0f, o4dt) {
  var orzd = this['options'],
      akwh1x = new gygv7qe(),
      r62jz$ = orzd['domBuilder'] || new gkh1y(),
      f4d = orzd['errorHandler'],
      gcl8qs = orzd['locator'],
      v1y = orzd['xmlns'] || {},
      yw1vek = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gcl8qs && r62jz$['setDocumentLocator'](gcl8qs), akwh1x['errorHandler'] = gtz3o(f4d, r62jz$, gcl8qs), akwh1x['domBuilder'] = orzd['domBuilder'] || r62jz$, /\/x?html?$/['test'](o4dt) && (yw1vek['nbsp'] = '\u00a0', yw1vek['copy'] = '©', v1y[''] = 'http://www.w3.org/1999/xhtml'), v1y['xml'] = v1y['xml'] || 'http://www.w3.org/XML/1998/namespace', pb_t0f ? akwh1x['parse'](pb_t0f, v1y, yw1vek) : akwh1x['errorHandler']['error']('invalid doc source'), r62jz$['doc'];
}, gkh1y['prototype'] = { 'startDocument': function () {
    this['doc'] = new gey1kwh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ge7y, q78scg, b5f0_, zdo42) {
    var g7qeyv = this['doc'],
        yxh1wk = g7qeyv['createElementNS'](ge7y, b5f0_ || q78scg),
        scv7q = zdo42['length'];ghew(this, yxh1wk), this['currentElement'] = yxh1wk, this['locator'] && gi5xb(this['locator'], yxh1wk);for (var fp_0t = 0x0; scv7q > fp_0t; fp_0t++) {
      var ge7y = zdo42['getURI'](fp_0t),
          m6ruj = zdo42['getValue'](fp_0t),
          b5f0_ = zdo42['getQName'](fp_0t),
          xabi = g7qeyv['createAttributeNS'](ge7y, b5f0_);this['locator'] && gi5xb(zdo42['getLocator'](fp_0t), xabi), xabi['value'] = xabi['nodeValue'] = m6ruj, yxh1wk['setAttributeNode'](xabi);
    }
  }, 'endElement': function () {
    {
      var kvyw7 = this['currentElement'];kvyw7['tagName'];
    }this['currentElement'] = kvyw7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kxhwy1, csg78q) {
    var urm$6 = this['doc']['createProcessingInstruction'](kxhwy1, csg78q);this['locator'] && gi5xb(this['locator'], urm$6), ghew(this, urm$6);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ewv) {
    if (ewv = gweyvk7['apply'](this, arguments)) {
      if (this['cdata']) var doft = this['doc']['createCDATASection'](ewv);else var doft = this['doc']['createTextNode'](ewv);this['currentElement'] ? this['currentElement']['appendChild'](doft) : /^\s*$/['test'](ewv) && this['doc']['appendChild'](doft), this['locator'] && gi5xb(this['locator'], doft);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vec7q) {
    (this['locator'] = vec7q) && (vec7q['lineNumber'] = 0x0);
  }, 'comment': function (w1ev) {
    w1ev = gweyvk7['apply'](this, arguments);var abi5hx = this['doc']['createComment'](w1ev);this['locator'] && gi5xb(this['locator'], abi5hx), ghew(this, abi5hx);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rm$6, pxa5, oz34d) {
    var t_o4f = this['doc']['implementation'];if (t_o4f && t_o4f['createDocumentType']) {
      var wkhy = t_o4f['createDocumentType'](rm$6, pxa5, oz34d);this['locator'] && gi5xb(this['locator'], wkhy), ghew(this, wkhy);
    }
  }, 'warning': function (qs7) {
    console['warn']('[xmldom warning]\t' + qs7, gof34td(this['locator']));
  }, 'error': function (bft) {
    console['error']('[xmldom error]\t' + bft, gof34td(this['locator']));
  }, 'fatalError': function (zd432) {
    throw console['error']('[xmldom fatalError]\t' + zd432, gof34td(this['locator'])), zd432;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ujr$m6) {
  gkh1y['prototype'][ujr$m6] = function () {
    return null;
  };
});var gygv7qe = require('./gggsax')['XMLReader'],
    gey1kwh = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gdof3;