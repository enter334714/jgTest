var B = wx.$B;
function Bbk6z9h(x$0tvy) {
  this['options'] = x$0tvy || { 'locator': {} };
}function Bingpeu(spgu, awf28, peguin) {
  function h9sn67($ty0_) {
    var r3jf8 = spgu[$ty0_];!r3jf8 && mjf5r && (r3jf8 = 0x2 == spgu['length'] ? function (_qdx) {
      spgu($ty0_, _qdx);
    } : spgu), a3e2i[$ty0_] = r3jf8 && function (z4kb9) {
      r3jf8('[xmldom ' + $ty0_ + ']\t' + z4kb9 + Bfar3w8(peguin));
    } || function () {};
  }if (!spgu) {
    if (awf28 instanceof Bwai83) return awf28;spgu = awf28;
  }var a3e2i = {},
      mjf5r = spgu instanceof Function;return peguin = peguin || {}, h9sn67('warning'), h9sn67('error'), h9sn67('fatalError'), a3e2i;
}function Bwai83() {
  this['cdata'] = !0x1;
}function Brf85w3(z9klb, z9bkl) {
  z9bkl['lineNumber'] = z9klb['lineNumber'], z9bkl['columnNumber'] = z9klb['columnNumber'];
}function Bfar3w8(xt$v) {
  return xt$v ? '\x0a@' + (xt$v['systemId'] || '') + '#[line:' + xt$v['lineNumber'] + ',col:' + xt$v['columnNumber'] + ']' : void 0x0;
}function Bz6k9bh(np7gs, ug7s, yt0l$) {
  return 'string' == typeof np7gs ? np7gs['substr'](ug7s, yt0l$) : np7gs['length'] >= ug7s + yt0l$ || ug7s ? new java['lang']['String'](np7gs, ug7s, yt0l$) + '' : np7gs;
}function Bj5fm(h67k, sk967) {
  h67k['currentElement'] ? h67k['currentElement']['appendChild'](sk967) : h67k['doc']['appendChild'](sk967);
}Bbk6z9h['prototype']['parseFromString'] = function (fm15j, zkl4v) {
  var aepgi2 = this['options'],
      _$ty0x = new Bawi2pe(),
      h96bk7 = aepgi2['domBuilder'] || new Bwai83(),
      b4zlvy = aepgi2['errorHandler'],
      w2fa3 = aepgi2['locator'],
      h6b = aepgi2['xmlns'] || {},
      ly04vz = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return w2fa3 && h96bk7['setDocumentLocator'](w2fa3), _$ty0x['errorHandler'] = Bingpeu(b4zlvy, h96bk7, w2fa3), _$ty0x['domBuilder'] = aepgi2['domBuilder'] || h96bk7, /\/x?html?$/['test'](zkl4v) && (ly04vz['nbsp'] = '\u00a0', ly04vz['copy'] = '©', h6b[''] = 'http://www.w3.org/1999/xhtml'), h6b['xml'] = h6b['xml'] || 'http://www.w3.org/XML/1998/namespace', fm15j ? _$ty0x['parse'](fm15j, h6b, ly04vz) : _$ty0x['errorHandler']['error']('invalid doc source'), h96bk7['doc'];
}, Bwai83['prototype'] = { 'startDocument': function () {
    this['doc'] = new Bgsnp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (apeg2, l4z0v, yblv4, lbv4yz) {
    var shu6 = this['doc'],
        neuig = shu6['createElementNS'](apeg2, yblv4 || l4z0v),
        nsegu = lbv4yz['length'];Bj5fm(this, neuig), this['currentElement'] = neuig, this['locator'] && Brf85w3(this['locator'], neuig);for (var e2pawi = 0x0; nsegu > e2pawi; e2pawi++) {
      var apeg2 = lbv4yz['getURI'](e2pawi),
          a32f8w = lbv4yz['getValue'](e2pawi),
          yblv4 = lbv4yz['getQName'](e2pawi),
          k6h7 = shu6['createAttributeNS'](apeg2, yblv4);this['locator'] && Brf85w3(lbv4yz['getLocator'](e2pawi), k6h7), k6h7['value'] = k6h7['nodeValue'] = a32f8w, neuig['setAttributeNode'](k6h7);
    }
  }, 'endElement': function () {
    {
      var h7ugn = this['currentElement'];h7ugn['tagName'];
    }this['currentElement'] = h7ugn['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (piu2eg, f8r3a) {
    var iwea2p = this['doc']['createProcessingInstruction'](piu2eg, f8r3a);this['locator'] && Brf85w3(this['locator'], iwea2p), Bj5fm(this, iwea2p);
  }, 'ignorableWhitespace': function () {}, 'characters': function (spneug) {
    if (spneug = Bz6k9bh['apply'](this, arguments)) {
      if (this['cdata']) var zbkl = this['doc']['createCDATASection'](spneug);else var zbkl = this['doc']['createTextNode'](spneug);this['currentElement'] ? this['currentElement']['appendChild'](zbkl) : /^\s*$/['test'](spneug) && this['doc']['appendChild'](zbkl), this['locator'] && Brf85w3(this['locator'], zbkl);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xytv$0) {
    (this['locator'] = xytv$0) && (xytv$0['lineNumber'] = 0x0);
  }, 'comment': function (nesgp) {
    nesgp = Bz6k9bh['apply'](this, arguments);var vzbly = this['doc']['createComment'](nesgp);this['locator'] && Brf85w3(this['locator'], vzbly), Bj5fm(this, vzbly);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (z4k9b, hkb7, xyt0$v) {
    var vlzby = this['doc']['implementation'];if (vlzby && vlzby['createDocumentType']) {
      var $xd0t = vlzby['createDocumentType'](z4k9b, hkb7, xyt0$v);this['locator'] && Brf85w3(this['locator'], $xd0t), Bj5fm(this, $xd0t);
    }
  }, 'warning': function (vkzl4b) {
    console['warn']('[xmldom warning]\t' + vkzl4b, Bfar3w8(this['locator']));
  }, 'error': function (r158j) {
    console['error']('[xmldom error]\t' + r158j, Bfar3w8(this['locator']));
  }, 'fatalError': function (ignpu) {
    throw console['error']('[xmldom fatalError]\t' + ignpu, Bfar3w8(this['locator'])), ignpu;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ylt$0v) {
  Bwai83['prototype'][ylt$0v] = function () {
    return null;
  };
});var Bawi2pe = require('./T5T5cT5T5')['XMLReader'],
    Bgsnp = exports['DOMImplementation'] = require('./T5T5DOT5T5')['DOMImplementation'];exports['XMLSerializer'] = require('./T5T5DOT5T5')['XMLSerializer'], exports['DOMParser'] = Bbk6z9h;