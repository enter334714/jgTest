var B = wx.$z;
function zn6fl4(bdkoyt) {
  this['options'] = bdkoyt || { 'locator': {} };
}function z_rky(zetasx, nq7im, ph4g91) {
  function tzoes(yr_b) {
    var _r528 = zetasx[yr_b];!_r528 && finvl7 && (_r528 = 0x2 == zetasx['length'] ? function (m$j3qi) {
      zetasx(yr_b, m$j3qi);
    } : zetasx), z9asex[yr_b] = _r528 && function (yzedt) {
      _r528('[xmldom ' + yr_b + ']\t' + yzedt + z$j3iq(ph4g91));
    } || function () {};
  }if (!zetasx) {
    if (nq7im instanceof zyzode) return nq7im;zetasx = nq7im;
  }var z9asex = {},
      finvl7 = zetasx instanceof Function;return ph4g91 = ph4g91 || {}, tzoes('warning'), tzoes('error'), tzoes('fatalError'), z9asex;
}function zyzode() {
  this['cdata'] = !0x1;
}function zn7if(gh4p16, m3$iqj) {
  m3$iqj['lineNumber'] = gh4p16['lineNumber'], m3$iqj['columnNumber'] = gh4p16['columnNumber'];
}function z$j3iq(ezsoa) {
  return ezsoa ? '\x0a@' + (ezsoa['systemId'] || '') + '#[line:' + ezsoa['lineNumber'] + ',col:' + ezsoa['columnNumber'] + ']' : void 0x0;
}function z_ry8(esxzat, tkdb, nfv46) {
  return 'string' == typeof esxzat ? esxzat['substr'](tkdb, nfv46) : esxzat['length'] >= tkdb + nfv46 || tkdb ? new java['lang']['String'](esxzat, tkdb, nfv46) + '' : esxzat;
}function zy8k(bry8kd, y8obk) {
  bry8kd['currentElement'] ? bry8kd['currentElement']['appendChild'](y8obk) : bry8kd['doc']['appendChild'](y8obk);
}zn6fl4['prototype']['parseFromString'] = function (oytbk, has19x) {
  var vl67nf = this['options'],
      e9aszx = new zp41(),
      oatdz = vl67nf['domBuilder'] || new zyzode(),
      fl64vg = vl67nf['errorHandler'],
      l7i3m = vl67nf['locator'],
      p6gh1 = vl67nf['xmlns'] || {},
      tseoa = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return l7i3m && oatdz['setDocumentLocator'](l7i3m), e9aszx['errorHandler'] = z_rky(fl64vg, oatdz, l7i3m), e9aszx['domBuilder'] = vl67nf['domBuilder'] || oatdz, /\/x?html?$/['test'](has19x) && (tseoa['nbsp'] = '\u00a0', tseoa['copy'] = '©', p6gh1[''] = 'http://www.w3.org/1999/xhtml'), p6gh1['xml'] = p6gh1['xml'] || 'http://www.w3.org/XML/1998/namespace', oytbk ? e9aszx['parse'](oytbk, p6gh1, tseoa) : e9aszx['errorHandler']['error']('invalid doc source'), oatdz['doc'];
}, zyzode['prototype'] = { 'startDocument': function () {
    this['doc'] = new zh416()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (inl7m, u052_w, s9exz, lnim37) {
    var xsh91 = this['doc'],
        b_r8y = xsh91['createElementNS'](inl7m, s9exz || u052_w),
        p46g1h = lnim37['length'];zy8k(this, b_r8y), this['currentElement'] = b_r8y, this['locator'] && zn7if(this['locator'], b_r8y);for (var okdbty = 0x0; p46g1h > okdbty; okdbty++) {
      var inl7m = lnim37['getURI'](okdbty),
          imq3j = lnim37['getValue'](okdbty),
          s9exz = lnim37['getQName'](okdbty),
          esxa9 = xsh91['createAttributeNS'](inl7m, s9exz);this['locator'] && zn7if(lnim37['getLocator'](okdbty), esxa9), esxa9['value'] = esxa9['nodeValue'] = imq3j, b_r8y['setAttributeNode'](esxa9);
    }
  }, 'endElement': function () {
    {
      var xhp1g = this['currentElement'];xhp1g['tagName'];
    }this['currentElement'] = xhp1g['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zyted, dykbo8) {
    var aetdz = this['doc']['createProcessingInstruction'](zyted, dykbo8);this['locator'] && zn7if(this['locator'], aetdz), zy8k(this, aetdz);
  }, 'ignorableWhitespace': function () {}, 'characters': function (s1e9a) {
    if (s1e9a = z_ry8['apply'](this, arguments)) {
      if (this['cdata']) var ilvnm = this['doc']['createCDATASection'](s1e9a);else var ilvnm = this['doc']['createTextNode'](s1e9a);this['currentElement'] ? this['currentElement']['appendChild'](ilvnm) : /^\s*$/['test'](s1e9a) && this['doc']['appendChild'](ilvnm), this['locator'] && zn7if(this['locator'], ilvnm);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nqi3m7) {
    (this['locator'] = nqi3m7) && (nqi3m7['lineNumber'] = 0x0);
  }, 'comment': function (v64nl) {
    v64nl = z_ry8['apply'](this, arguments);var fgl6v4 = this['doc']['createComment'](v64nl);this['locator'] && zn7if(this['locator'], fgl6v4), zy8k(this, fgl6v4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ahs9, setzax, p6hf4) {
    var bkoy8d = this['doc']['implementation'];if (bkoy8d && bkoy8d['createDocumentType']) {
      var tdyb = bkoy8d['createDocumentType'](ahs9, setzax, p6hf4);this['locator'] && zn7if(this['locator'], tdyb), zy8k(this, tdyb);
    }
  }, 'warning': function (r52b) {
    console['warn']('[xmldom warning]\t' + r52b, z$j3iq(this['locator']));
  }, 'error': function (z9eas) {
    console['error']('[xmldom error]\t' + z9eas, z$j3iq(this['locator']));
  }, 'fatalError': function (odztky) {
    throw console['error']('[xmldom fatalError]\t' + odztky, z$j3iq(this['locator'])), odztky;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (s1xp) {
  zyzode['prototype'][s1xp] = function () {
    return null;
  };
});var zp41 = require('./zzczz')['XMLReader'],
    zh416 = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zn6fl4;