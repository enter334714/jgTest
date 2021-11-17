var k = wx.$f;
function fa3$yp(wexszn) {
  this['options'] = wexszn || { 'locator': {} };
}function fco6_2(bu19, jcosdw, ubmfi) {
  function ift0hm(erz$) {
    var k2465 = bu19[erz$];!k2465 && do2c6 && (k2465 = 0x2 == bu19['length'] ? function (o_2k6) {
      bu19(erz$, o_2k6);
    } : bu19), e8xz7r[erz$] = k2465 && function (wsdoj) {
      k2465('[xmldom ' + erz$ + ']\t' + wsdoj + ftmhfq(ubmfi));
    } || function () {};
  }if (!bu19) {
    if (jcosdw instanceof fc26d) return jcosdw;bu19 = jcosdw;
  }var e8xz7r = {},
      do2c6 = bu19 instanceof Function;return ubmfi = ubmfi || {}, ift0hm('warning'), ift0hm('error'), ift0hm('fatalError'), e8xz7r;
}function fc26d() {
  this['cdata'] = !0x1;
}function f_qk425(fmhqt0, ifbvu) {
  ifbvu['lineNumber'] = fmhqt0['lineNumber'], ifbvu['columnNumber'] = fmhqt0['columnNumber'];
}function ftmhfq(kth0q) {
  return kth0q ? '\x0a@' + (kth0q['systemId'] || '') + '#[line:' + kth0q['lineNumber'] + ',col:' + kth0q['columnNumber'] + ']' : void 0x0;
}function fqt0h5f(ap$y37, m1ubv, wdnxjs) {
  return 'string' == typeof ap$y37 ? ap$y37['substr'](m1ubv, wdnxjs) : ap$y37['length'] >= m1ubv + wdnxjs || m1ubv ? new java['lang']['String'](ap$y37, m1ubv, wdnxjs) + '' : ap$y37;
}function foc264_(os6dcj, y7$8r) {
  os6dcj['currentElement'] ? os6dcj['currentElement']['appendChild'](y7$8r) : os6dcj['doc']['appendChild'](y7$8r);
}fa3$yp['prototype']['parseFromString'] = function (mfubi, o_k462) {
  var mtqh0 = this['options'],
      c2d6j = new fbt(),
      eswnxz = mtqh0['domBuilder'] || new fc26d(),
      v91ib = mtqh0['errorHandler'],
      tbimvf = mtqh0['locator'],
      buv1 = mtqh0['xmlns'] || {},
      ftmq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return tbimvf && eswnxz['setDocumentLocator'](tbimvf), c2d6j['errorHandler'] = fco6_2(v91ib, eswnxz, tbimvf), c2d6j['domBuilder'] = mtqh0['domBuilder'] || eswnxz, /\/x?html?$/['test'](o_k462) && (ftmq['nbsp'] = '\u00a0', ftmq['copy'] = '©', buv1[''] = 'http://www.w3.org/1999/xhtml'), buv1['xml'] = buv1['xml'] || 'http://www.w3.org/XML/1998/namespace', mfubi ? c2d6j['parse'](mfubi, buv1, ftmq) : c2d6j['errorHandler']['error']('invalid doc source'), eswnxz['doc'];
}, fc26d['prototype'] = { 'startDocument': function () {
    this['doc'] = new fnedxws()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (g9bv1u, imbft, w8xenz, kq5_04) {
    var k40q_5 = this['doc'],
        vmifbt = k40q_5['createElementNS'](g9bv1u, w8xenz || imbft),
        djocws = kq5_04['length'];foc264_(this, vmifbt), this['currentElement'] = vmifbt, this['locator'] && f_qk425(this['locator'], vmifbt);for (var bvit = 0x0; djocws > bvit; bvit++) {
      var g9bv1u = kq5_04['getURI'](bvit),
          a37ry = kq5_04['getValue'](bvit),
          w8xenz = kq5_04['getQName'](bvit),
          i19 = k40q_5['createAttributeNS'](g9bv1u, w8xenz);this['locator'] && f_qk425(kq5_04['getLocator'](bvit), i19), i19['value'] = i19['nodeValue'] = a37ry, vmifbt['setAttributeNode'](i19);
    }
  }, 'endElement': function () {
    {
      var qkt0 = this['currentElement'];qkt0['tagName'];
    }this['currentElement'] = qkt0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ewsn, z8enxw) {
    var oj4c62 = this['doc']['createProcessingInstruction'](ewsn, z8enxw);this['locator'] && f_qk425(this['locator'], oj4c62), foc264_(this, oj4c62);
  }, 'ignorableWhitespace': function () {}, 'characters': function (sexz) {
    if (sexz = fqt0h5f['apply'](this, arguments)) {
      if (this['cdata']) var wdojcs = this['doc']['createCDATASection'](sexz);else var wdojcs = this['doc']['createTextNode'](sexz);this['currentElement'] ? this['currentElement']['appendChild'](wdojcs) : /^\s*$/['test'](sexz) && this['doc']['appendChild'](wdojcs), this['locator'] && f_qk425(this['locator'], wdojcs);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (oj6dc2) {
    (this['locator'] = oj6dc2) && (oj6dc2['lineNumber'] = 0x0);
  }, 'comment': function (ocd2j) {
    ocd2j = fqt0h5f['apply'](this, arguments);var ftvbi = this['doc']['createComment'](ocd2j);this['locator'] && f_qk425(this['locator'], ftvbi), foc264_(this, ftvbi);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rx8n, tmihb, enr8zx) {
    var dewsxn = this['doc']['implementation'];if (dewsxn && dewsxn['createDocumentType']) {
      var dscnjw = dewsxn['createDocumentType'](rx8n, tmihb, enr8zx);this['locator'] && f_qk425(this['locator'], dscnjw), foc264_(this, dscnjw);
    }
  }, 'warning': function (k0q_5) {
    console['warn']('[xmldom warning]\t' + k0q_5, ftmhfq(this['locator']));
  }, 'error': function (dcnswj) {
    console['error']('[xmldom error]\t' + dcnswj, ftmhfq(this['locator']));
  }, 'fatalError': function (g91) {
    throw console['error']('[xmldom fatalError]\t' + g91, ftmhfq(this['locator'])), g91;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (tq5h) {
  fc26d['prototype'][tq5h] = function () {
    return null;
  };
});var fbt = require('./fffsax')['XMLReader'],
    fnedxws = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fa3$yp;