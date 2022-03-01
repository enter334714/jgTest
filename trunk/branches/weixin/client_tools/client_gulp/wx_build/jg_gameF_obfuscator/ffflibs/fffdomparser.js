var k = wx.$f;
function fubvm1(jsdo) {
  this['options'] = jsdo || { 'locator': {} };
}function fen8rxz(bmifvu, hmft, k5_0q) {
  function bivu19(ubvi9) {
    var odj6c2 = bmifvu[ubvi9];!odj6c2 && o62cj && (odj6c2 = 0x2 == bmifvu['length'] ? function (qthf) {
      bmifvu(ubvi9, qthf);
    } : bmifvu), xnr8ez[ubvi9] = odj6c2 && function (iuv1b9) {
      odj6c2('[xmldom ' + ubvi9 + ']\t' + iuv1b9 + fqtkh50(k5_0q));
    } || function () {};
  }if (!bmifvu) {
    if (hmft instanceof fvi1u9b) return hmft;bmifvu = hmft;
  }var xnr8ez = {},
      o62cj = bmifvu instanceof Function;return k5_0q = k5_0q || {}, bivu19('warning'), bivu19('error'), bivu19('fatalError'), xnr8ez;
}function fvi1u9b() {
  this['cdata'] = !0x1;
}function fa3r$(xesnd, zwn8ex) {
  zwn8ex['lineNumber'] = xesnd['lineNumber'], zwn8ex['columnNumber'] = xesnd['columnNumber'];
}function fqtkh50(oc6jd) {
  return oc6jd ? '\x0a@' + (oc6jd['systemId'] || '') + '#[line:' + oc6jd['lineNumber'] + ',col:' + oc6jd['columnNumber'] + ']' : void 0x0;
}function fwnxd(vitfm, scdwoj, h_50kq) {
  return 'string' == typeof vitfm ? vitfm['substr'](scdwoj, h_50kq) : vitfm['length'] >= scdwoj + h_50kq || scdwoj ? new java['lang']['String'](vitfm, scdwoj, h_50kq) + '' : vitfm;
}function fe8zn(v91, b1uvmi) {
  v91['currentElement'] ? v91['currentElement']['appendChild'](b1uvmi) : v91['doc']['appendChild'](b1uvmi);
}fubvm1['prototype']['parseFromString'] = function (vbufmi, $r8z73) {
  var mt0hif = this['options'],
      y7a$3 = new fhmtf0q(),
      wnxj = mt0hif['domBuilder'] || new fvi1u9b(),
      ezxn8r = mt0hif['errorHandler'],
      q0h5kt = mt0hif['locator'],
      ftbiv = mt0hif['xmlns'] || {},
      xznw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return q0h5kt && wnxj['setDocumentLocator'](q0h5kt), y7a$3['errorHandler'] = fen8rxz(ezxn8r, wnxj, q0h5kt), y7a$3['domBuilder'] = mt0hif['domBuilder'] || wnxj, /\/x?html?$/['test']($r8z73) && (xznw['nbsp'] = '\u00a0', xznw['copy'] = '©', ftbiv[''] = 'http://www.w3.org/1999/xhtml'), ftbiv['xml'] = ftbiv['xml'] || 'http://www.w3.org/XML/1998/namespace', vbufmi ? y7a$3['parse'](vbufmi, ftbiv, xznw) : y7a$3['errorHandler']['error']('invalid doc source'), wnxj['doc'];
}, fvi1u9b['prototype'] = { 'startDocument': function () {
    this['doc'] = new fui1vm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (thf0i, ibfm, ifmbh, _oc62) {
    var sdncw = this['doc'],
        $738rz = sdncw['createElementNS'](thf0i, ifmbh || ibfm),
        $z8re = _oc62['length'];fe8zn(this, $738rz), this['currentElement'] = $738rz, this['locator'] && fa3r$(this['locator'], $738rz);for (var r$78y3 = 0x0; $z8re > r$78y3; r$78y3++) {
      var thf0i = _oc62['getURI'](r$78y3),
          a7r3 = _oc62['getValue'](r$78y3),
          ifmbh = _oc62['getQName'](r$78y3),
          imbv1u = sdncw['createAttributeNS'](thf0i, ifmbh);this['locator'] && fa3r$(_oc62['getLocator'](r$78y3), imbv1u), imbv1u['value'] = imbv1u['nodeValue'] = a7r3, $738rz['setAttributeNode'](imbv1u);
    }
  }, 'endElement': function () {
    {
      var xn8re = this['currentElement'];xn8re['tagName'];
    }this['currentElement'] = xn8re['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jsdo6, $ya7) {
    var ht0 = this['doc']['createProcessingInstruction'](jsdo6, $ya7);this['locator'] && fa3r$(this['locator'], ht0), fe8zn(this, ht0);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vibu9) {
    if (vibu9 = fwnxd['apply'](this, arguments)) {
      if (this['cdata']) var wjcsod = this['doc']['createCDATASection'](vibu9);else var wjcsod = this['doc']['createTextNode'](vibu9);this['currentElement'] ? this['currentElement']['appendChild'](wjcsod) : /^\s*$/['test'](vibu9) && this['doc']['appendChild'](wjcsod), this['locator'] && fa3r$(this['locator'], wjcsod);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (k2o_46) {
    (this['locator'] = k2o_46) && (k2o_46['lineNumber'] = 0x0);
  }, 'comment': function (znxer) {
    znxer = fwnxd['apply'](this, arguments);var u1iv9 = this['doc']['createComment'](znxer);this['locator'] && fa3r$(this['locator'], u1iv9), fe8zn(this, u1iv9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ibuv91, tqfmh0, wcjd) {
    var k64o_2 = this['doc']['implementation'];if (k64o_2 && k64o_2['createDocumentType']) {
      var njcdws = k64o_2['createDocumentType'](ibuv91, tqfmh0, wcjd);this['locator'] && fa3r$(this['locator'], njcdws), fe8zn(this, njcdws);
    }
  }, 'warning': function (sod) {
    console['warn']('[xmldom warning]\t' + sod, fqtkh50(this['locator']));
  }, 'error': function (b1guv) {
    console['error']('[xmldom error]\t' + b1guv, fqtkh50(this['locator']));
  }, 'fatalError': function (mtbfv) {
    throw console['error']('[xmldom fatalError]\t' + mtbfv, fqtkh50(this['locator'])), mtbfv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vug1b9) {
  fvi1u9b['prototype'][vug1b9] = function () {
    return null;
  };
});var fhmtf0q = require('./fffsax')['XMLReader'],
    fui1vm = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fubvm1;