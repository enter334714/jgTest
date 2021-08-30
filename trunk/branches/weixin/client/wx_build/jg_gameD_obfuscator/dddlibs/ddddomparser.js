var v = wx.$d;
function zrhvoqf(bciuja2) {
  this['options'] = bciuja2 || { 'locator': {} };
}function zhyrfoq(lik1, x9ne43w, voyrh5q) {
  function ku16m7(afq2br) {
    var fa2jibq = lik1[afq2br];!fa2jibq && dx0ge3 && (fa2jibq = 0x2 == lik1['length'] ? function (fj2arbq) {
      lik1(afq2br, fj2arbq);
    } : lik1), ovhryfq[afq2br] = fa2jibq ? function (bjyfrq) {
      fa2jibq('[xmldom ' + afq2br + ']\t' + bjyfrq + zjuic2ba(voyrh5q));
    } : function () {};
  }if (!lik1) {
    if (x9ne43w instanceof zlk1m7cu) return x9ne43w;lik1 = x9ne43w;
  }var ovhryfq = {},
      dx0ge3 = lik1 instanceof Function;return voyrh5q = voyrh5q || {}, ku16m7('warning'), ku16m7('error'), ku16m7('fatalError'), ovhryfq;
}function zlk1m7cu() {
  this['cdata'] = !0x1;
}function zgovh0d(ged0o, qrbaj) {
  qrbaj['lineNumber'] = ged0o['lineNumber'], qrbaj['columnNumber'] = ged0o['columnNumber'];
}function zjuic2ba(vfhyr) {
  return vfhyr ? '\x0a@' + (vfhyr['systemId'] || '') + '#[line:' + vfhyr['lineNumber'] + ',col:' + vfhyr['columnNumber'] + ']' : void 0x0;
}function zhqofrvy(yrjaqv, u1ckl2i, biqj2a) {
  return 'string' == typeof yrjaqv ? yrjaqv['substr'](u1ckl2i, biqj2a) : yrjaqv['length'] >= u1ckl2i + biqj2a || u1ckl2i ? new java['lang']['String'](yrjaqv, u1ckl2i, biqj2a) + '' : yrjaqv;
}function zkcbliu(oxdeg, x4w0d) {
  (oxdeg['currentElement'] || oxdeg['doc'])['appendChild'](x4w0d);
}zrhvoqf['prototype']['parseFromString'] = function (n3t9w8$, v0go5hy) {
  var dx0e4w = this['options'],
      ogryvh = new zv50oy(),
      l7kumc = dx0e4w['domBuilder'] || new zlk1m7cu(),
      uk617m = dx0e4w['errorHandler'],
      heog5d = dx0e4w['locator'],
      farbjy = dx0e4w['xmlns'] || {},
      gxe340d = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return heog5d && l7kumc['setDocumentLocator'](heog5d), ogryvh['errorHandler'] = zhyrfoq(uk617m, l7kumc, heog5d), ogryvh['domBuilder'] = dx0e4w['domBuilder'] || l7kumc, /\/x?html?$/['test'](v0go5hy) && (gxe340d['nbsp'] = '\u00a0', gxe340d['copy'] = '©', farbjy[''] = 'http://www.w3.org/1999/xhtml'), farbjy['xml'] = farbjy['xml'] || 'http://www.w3.org/XML/1998/namespace', n3t9w8$ ? ogryvh['parse'](n3t9w8$, farbjy, gxe340d) : ogryvh['errorHandler']['error']('invalid doc source'), l7kumc['doc'];
}, zlk1m7cu['prototype'] = { 'startDocument': function () {
    this['doc'] = new zajqvfry()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i1u2k, jrav, deo5gh, luik) {
    var uiclbk2 = this['doc'],
        gxe43 = uiclbk2['createElementNS'](i1u2k, deo5gh || jrav),
        t9wn$3 = luik['length'];zkcbliu(this, gxe43), this['currentElement'] = gxe43, this['locator'] && zgovh0d(this['locator'], gxe43);for (var dex4g3 = 0x0; dex4g3 < t9wn$3; dex4g3++) {
      var i1u2k = luik['getURI'](dex4g3),
          a2bucli = luik['getValue'](dex4g3),
          deo5gh = luik['getQName'](dex4g3),
          bci2a = uiclbk2['createAttributeNS'](i1u2k, deo5gh);this['locator'] && zgovh0d(luik['getLocator'](dex4g3), bci2a), bci2a['value'] = bci2a['nodeValue'] = a2bucli, gxe43['setAttributeNode'](bci2a);
    }
  }, 'endElement': function () {
    var o5vhd0 = this['currentElement'];o5vhd0['tagName'], this['currentElement'] = o5vhd0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (g5ory, uml1ci) {
    uml1ci = this['doc']['createProcessingInstruction'](g5ory, uml1ci), (this['locator'] && zgovh0d(this['locator'], uml1ci), zkcbliu(this, uml1ci));
  }, 'ignorableWhitespace': function () {}, 'characters': function (eo0xdg5) {
    var rofvyhq;(eo0xdg5 = zhqofrvy['apply'](this, arguments)) && (rofvyhq = this['cdata'] ? this['doc']['createCDATASection'](eo0xdg5) : this['doc']['createTextNode'](eo0xdg5), this['currentElement'] ? this['currentElement']['appendChild'](rofvyhq) : /^\s*$/['test'](eo0xdg5) && this['doc']['appendChild'](rofvyhq), this['locator'] && zgovh0d(this['locator'], rofvyhq));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ravyqfj) {
    (this['locator'] = ravyqfj) && (ravyqfj['lineNumber'] = 0x0);
  }, 'comment': function (lm76p1) {
    lm76p1 = zhqofrvy['apply'](this, arguments);var n4w98x = this['doc']['createComment'](lm76p1);this['locator'] && zgovh0d(this['locator'], n4w98x), zkcbliu(this, n4w98x);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (lkbu2c, bui2j, n394xe) {
    var w3d9e4 = this['doc']['implementation'];w3d9e4 && w3d9e4['createDocumentType'] && (n394xe = w3d9e4['createDocumentType'](lkbu2c, bui2j, n394xe), this['locator'] && zgovh0d(this['locator'], n394xe), zkcbliu(this, n394xe));
  }, 'warning': function (l2ibau) {
    console['warn']('[xmldom warning]\t' + l2ibau, zjuic2ba(this['locator']));
  }, 'error': function (lcmu17k) {
    console['error']('[xmldom error]\t' + lcmu17k, zjuic2ba(this['locator']));
  }, 'fatalError': function (d3w0) {
    throw console['error']('[xmldom fatalError]\t' + d3w0, zjuic2ba(this['locator'])), d3w0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w39x4n8) {
  zlk1m7cu['prototype'][w39x4n8] = function () {
    return null;
  };
});var zv50oy = require('./dddsax')['XMLReader'],
    zajqvfry = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zrhvoqf;