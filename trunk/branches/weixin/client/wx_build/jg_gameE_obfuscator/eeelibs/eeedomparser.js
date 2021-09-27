var b = wx.$e;
function euhltqx(yk9781) {
  this['options'] = yk9781 || { 'locator': {} };
}function ed4fn56(re2vg, z0m$i, pa2se) {
  function $qxu(evras) {
    var hulqxt = re2vg[evras];!hulqxt && ywpbs7 && (hulqxt = 0x2 == re2vg['length'] ? function (bwy71p) {
      re2vg(evras, bwy71p);
    } : re2vg), z0jimg[evras] = hulqxt ? function (bwsyep) {
      hulqxt('[xmldom ' + evras + ']\t' + bwsyep + et$3ujx(pa2se));
    } : function () {};
  }if (!re2vg) {
    if (z0m$i instanceof egmz) return z0m$i;re2vg = z0m$i;
  }var z0jimg = {},
      ywpbs7 = re2vg instanceof Function;return pa2se = pa2se || {}, $qxu('warning'), $qxu('error'), $qxu('fatalError'), z0jimg;
}function egmz() {
  this['cdata'] = !0x1;
}function egvmi0(k1w7b, v2areg) {
  v2areg['lineNumber'] = k1w7b['lineNumber'], v2areg['columnNumber'] = k1w7b['columnNumber'];
}function et$3ujx(a0v2gr) {
  return a0v2gr ? '\x0a@' + (a0v2gr['systemId'] || '') + '#[line:' + a0v2gr['lineNumber'] + ',col:' + a0v2gr['columnNumber'] + ']' : void 0x0;
}function ewb1yk(y1pw, qxhut3, erp2a) {
  return 'string' == typeof y1pw ? y1pw['substr'](qxhut3, erp2a) : y1pw['length'] >= qxhut3 + erp2a || qxhut3 ? new java['lang']['String'](y1pw, qxhut3, erp2a) + '' : y1pw;
}function epe2rb(sperw, i$3z) {
  (sperw['currentElement'] || sperw['doc'])['appendChild'](i$3z);
}euhltqx['prototype']['parseFromString'] = function (sre2p, pw71b) {
  var tx$3i = this['options'],
      yk9178 = new e$xj3iz(),
      lhqx = tx$3i['domBuilder'] || new egmz(),
      tu$jx = tx$3i['errorHandler'],
      bspre = tx$3i['locator'],
      w7byk1 = tx$3i['xmlns'] || {},
      b7ys = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return bspre && lhqx['setDocumentLocator'](bspre), yk9178['errorHandler'] = ed4fn56(tu$jx, lhqx, bspre), yk9178['domBuilder'] = tx$3i['domBuilder'] || lhqx, /\/x?html?$/['test'](pw71b) && (b7ys['nbsp'] = '\u00a0', b7ys['copy'] = '©', w7byk1[''] = 'http://www.w3.org/1999/xhtml'), w7byk1['xml'] = w7byk1['xml'] || 'http://www.w3.org/XML/1998/namespace', sre2p ? yk9178['parse'](sre2p, w7byk1, b7ys) : yk9178['errorHandler']['error']('invalid doc source'), lhqx['doc'];
}, egmz['prototype'] = { 'startDocument': function () {
    this['doc'] = new ev20m()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (prew, zm0j, se2bpr, s2prae) {
    var j3xiz$ = this['doc'],
        d4_n58 = j3xiz$['createElementNS'](prew, se2bpr || zm0j),
        gij0m = s2prae['length'];epe2rb(this, d4_n58), this['currentElement'] = d4_n58, this['locator'] && egvmi0(this['locator'], d4_n58);for (var ebpwrs = 0x0; ebpwrs < gij0m; ebpwrs++) {
      var prew = s2prae['getURI'](ebpwrs),
          nf5d46 = s2prae['getValue'](ebpwrs),
          se2bpr = s2prae['getQName'](ebpwrs),
          zj$3im = j3xiz$['createAttributeNS'](prew, se2bpr);this['locator'] && egvmi0(s2prae['getLocator'](ebpwrs), zj$3im), zj$3im['value'] = zj$3im['nodeValue'] = nf5d46, d4_n58['setAttributeNode'](zj$3im);
    }
  }, 'endElement': function () {
    var byw7ps = this['currentElement'];byw7ps['tagName'], this['currentElement'] = byw7ps['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mz3j$, xzji) {
    xzji = this['doc']['createProcessingInstruction'](mz3j$, xzji), (this['locator'] && egvmi0(this['locator'], xzji), epe2rb(this, xzji));
  }, 'ignorableWhitespace': function () {}, 'characters': function (va2gm0) {
    var yk1w7;(va2gm0 = ewb1yk['apply'](this, arguments)) && (yk1w7 = this['cdata'] ? this['doc']['createCDATASection'](va2gm0) : this['doc']['createTextNode'](va2gm0), this['currentElement'] ? this['currentElement']['appendChild'](yk1w7) : /^\s*$/['test'](va2gm0) && this['doc']['appendChild'](yk1w7), this['locator'] && egvmi0(this['locator'], yk1w7));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (t$jix) {
    (this['locator'] = t$jix) && (t$jix['lineNumber'] = 0x0);
  }, 'comment': function (k9481) {
    k9481 = ewb1yk['apply'](this, arguments);var uj3x$t = this['doc']['createComment'](k9481);this['locator'] && egvmi0(this['locator'], uj3x$t), epe2rb(this, uj3x$t);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ltqhxu, v0mza, srva2e) {
    var fnd5o6 = this['doc']['implementation'];fnd5o6 && fnd5o6['createDocumentType'] && (srva2e = fnd5o6['createDocumentType'](ltqhxu, v0mza, srva2e), this['locator'] && egvmi0(this['locator'], srva2e), epe2rb(this, srva2e));
  }, 'warning': function (h3quxt) {
    console['warn']('[xmldom warning]\t' + h3quxt, et$3ujx(this['locator']));
  }, 'error': function (kw79) {
    console['error']('[xmldom error]\t' + kw79, et$3ujx(this['locator']));
  }, 'fatalError': function (bwyp7) {
    throw console['error']('[xmldom fatalError]\t' + bwyp7, et$3ujx(this['locator'])), bwyp7;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jzx3i$) {
  egmz['prototype'][jzx3i$] = function () {
    return null;
  };
});var e$xj3iz = require('./eeesax')['XMLReader'],
    ev20m = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = euhltqx;