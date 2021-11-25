var B = wx.$z;
function zxsetz(n76vlf) {
  this['options'] = n76vlf || { 'locator': {} };
}function ztzaos(kby_, osaz, szet) {
  function gp(brk5) {
    var nlvim7 = kby_[brk5];!nlvim7 && inl73m && (nlvim7 = 0x2 == kby_['length'] ? function (i3$m7q) {
      kby_(brk5, i3$m7q);
    } : kby_), toybdk[brk5] = nlvim7 && function (eazts) {
      nlvim7('[xmldom ' + brk5 + ']\t' + eazts + ztdybko(szet));
    } || function () {};
  }if (!kby_) {
    if (osaz instanceof zv64nf) return osaz;kby_ = osaz;
  }var toybdk = {},
      inl73m = kby_ instanceof Function;return szet = szet || {}, gp('warning'), gp('error'), gp('fatalError'), toybdk;
}function zv64nf() {
  this['cdata'] = !0x1;
}function zeytdo(nfvli, oeas) {
  oeas['lineNumber'] = nfvli['lineNumber'], oeas['columnNumber'] = nfvli['columnNumber'];
}function ztdybko(fl67n) {
  return fl67n ? '\x0a@' + (fl67n['systemId'] || '') + '#[line:' + fl67n['lineNumber'] + ',col:' + fl67n['columnNumber'] + ']' : void 0x0;
}function ztoybk(i7q3, miq73n, $mi7q) {
  return 'string' == typeof i7q3 ? i7q3['substr'](miq73n, $mi7q) : i7q3['length'] >= miq73n + $mi7q || miq73n ? new java['lang']['String'](i7q3, miq73n, $mi7q) + '' : i7q3;
}function zlvn67(lf46gv, x9zsae) {
  lf46gv['currentElement'] ? lf46gv['currentElement']['appendChild'](x9zsae) : lf46gv['doc']['appendChild'](x9zsae);
}zxsetz['prototype']['parseFromString'] = function (aes91, u205_) {
  var _u50w2 = this['options'],
      jmiq = new z_05uw(),
      edztyo = _u50w2['domBuilder'] || new zv64nf(),
      hp9x = _u50w2['errorHandler'],
      ru2 = _u50w2['locator'],
      fgv4 = _u50w2['xmlns'] || {},
      axez9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ru2 && edztyo['setDocumentLocator'](ru2), jmiq['errorHandler'] = ztzaos(hp9x, edztyo, ru2), jmiq['domBuilder'] = _u50w2['domBuilder'] || edztyo, /\/x?html?$/['test'](u205_) && (axez9['nbsp'] = '\u00a0', axez9['copy'] = '©', fgv4[''] = 'http://www.w3.org/1999/xhtml'), fgv4['xml'] = fgv4['xml'] || 'http://www.w3.org/XML/1998/namespace', aes91 ? jmiq['parse'](aes91, fgv4, axez9) : jmiq['errorHandler']['error']('invalid doc source'), edztyo['doc'];
}, zv64nf['prototype'] = { 'startDocument': function () {
    this['doc'] = new ztzkdo()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (x9as1, ru2w, otaed, hp4g9) {
    var d8okby = this['doc'],
        ur2w = d8okby['createElementNS'](x9as1, otaed || ru2w),
        rdky8 = hp4g9['length'];zlvn67(this, ur2w), this['currentElement'] = ur2w, this['locator'] && zeytdo(this['locator'], ur2w);for (var tobk = 0x0; rdky8 > tobk; tobk++) {
      var x9as1 = hp4g9['getURI'](tobk),
          f46pgh = hp4g9['getValue'](tobk),
          otaed = hp4g9['getQName'](tobk),
          a1sx9 = d8okby['createAttributeNS'](x9as1, otaed);this['locator'] && zeytdo(hp4g9['getLocator'](tobk), a1sx9), a1sx9['value'] = a1sx9['nodeValue'] = f46pgh, ur2w['setAttributeNode'](a1sx9);
    }
  }, 'endElement': function () {
    {
      var r82b5_ = this['currentElement'];r82b5_['tagName'];
    }this['currentElement'] = r82b5_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (r_25uw, k8_ry) {
    var in3m7l = this['doc']['createProcessingInstruction'](r_25uw, k8_ry);this['locator'] && zeytdo(this['locator'], in3m7l), zlvn67(this, in3m7l);
  }, 'ignorableWhitespace': function () {}, 'characters': function (fl6vn7) {
    if (fl6vn7 = ztoybk['apply'](this, arguments)) {
      if (this['cdata']) var ea9x = this['doc']['createCDATASection'](fl6vn7);else var ea9x = this['doc']['createTextNode'](fl6vn7);this['currentElement'] ? this['currentElement']['appendChild'](ea9x) : /^\s*$/['test'](fl6vn7) && this['doc']['appendChild'](ea9x), this['locator'] && zeytdo(this['locator'], ea9x);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (v4ln6f) {
    (this['locator'] = v4ln6f) && (v4ln6f['lineNumber'] = 0x0);
  }, 'comment': function (e19axs) {
    e19axs = ztoybk['apply'](this, arguments);var q7m3i$ = this['doc']['createComment'](e19axs);this['locator'] && zeytdo(this['locator'], q7m3i$), zlvn67(this, q7m3i$);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ni3l7, sx9a1h, eaz9s) {
    var oaste = this['doc']['implementation'];if (oaste && oaste['createDocumentType']) {
      var _k85br = oaste['createDocumentType'](ni3l7, sx9a1h, eaz9s);this['locator'] && zeytdo(this['locator'], _k85br), zlvn67(this, _k85br);
    }
  }, 'warning': function (imn3) {
    console['warn']('[xmldom warning]\t' + imn3, ztdybko(this['locator']));
  }, 'error': function (w5_20) {
    console['error']('[xmldom error]\t' + w5_20, ztdybko(this['locator']));
  }, 'fatalError': function (tdyzko) {
    throw console['error']('[xmldom fatalError]\t' + tdyzko, ztdybko(this['locator'])), tdyzko;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (r852u) {
  zv64nf['prototype'][r852u] = function () {
    return null;
  };
});var z_05uw = require('./zzczz')['XMLReader'],
    ztzkdo = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zxsetz;