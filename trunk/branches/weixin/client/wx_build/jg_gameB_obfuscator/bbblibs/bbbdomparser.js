var _ = wx.y$;
function _dzwy$v(stvqru) {
  this['options'] = stvqru || { 'locator': {} };
}function _dnrspqo(opmnlq, vwust, kgfji) {
  function gfehdc(quts) {
    var xsvtuw = opmnlq[quts];!xsvtuw && nqomlp && (xsvtuw = 0x2 == opmnlq['length'] ? function (osnrp) {
      opmnlq(quts, osnrp);
    } : opmnlq), ghiljk[quts] = xsvtuw ? function (utyvw) {
      xsvtuw('[xmldom ' + quts + ']\t' + utyvw + _dy_w$zx(kgfji));
    } : function () {};
  }if (!opmnlq) {
    if (vwust instanceof _deadbf) return vwust;opmnlq = vwust;
  }var ghiljk = {},
      nqomlp = opmnlq instanceof Function;return kgfji = kgfji || {}, gfehdc('warning'), gfehdc('error'), gfehdc('fatalError'), ghiljk;
}function _deadbf() {
  this['cdata'] = !0x1;
}function _dtqosr($203_, uxs) {
  uxs['lineNumber'] = $203_['lineNumber'], uxs['columnNumber'] = $203_['columnNumber'];
}function _dy_w$zx(ecdfa) {
  return ecdfa ? '\x0a@' + (ecdfa['systemId'] || '') + '#[line:' + ecdfa['lineNumber'] + ',col:' + ecdfa['columnNumber'] + ']' : void 0x0;
}function _dhmijk(strqv, febgc, wrsvt) {
  return 'string' == typeof strqv ? strqv['substr'](febgc, wrsvt) : strqv['length'] >= febgc + wrsvt || febgc ? new java['lang']['String'](strqv, febgc, wrsvt) + '' : strqv;
}function _dmqnpro(ihgjk, hklj) {
  (ihgjk['currentElement'] || ihgjk['doc'])['appendChild'](hklj);
}_dzwy$v['prototype']['parseFromString'] = function ($wz_y, putsr) {
  var dgehif = this['options'],
      psqtu = new _dnrsoqp(),
      rqpnom = dgehif['domBuilder'] || new _deadbf(),
      ywv$ = dgehif['errorHandler'],
      polmkn = dgehif['locator'],
      vursq = dgehif['xmlns'] || {},
      $201_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return polmkn && rqpnom['setDocumentLocator'](polmkn), psqtu['errorHandler'] = _dnrspqo(ywv$, rqpnom, polmkn), psqtu['domBuilder'] = dgehif['domBuilder'] || rqpnom, /\/x?html?$/['test'](putsr) && ($201_['nbsp'] = '\u00a0', $201_['copy'] = '©', vursq[''] = 'http://www.w3.org/1999/xhtml'), vursq['xml'] = vursq['xml'] || 'http://www.w3.org/XML/1998/namespace', $wz_y ? psqtu['parse']($wz_y, vursq, $201_) : psqtu['errorHandler']['error']('invalid doc source'), rqpnom['doc'];
}, _deadbf['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dxzvuwy()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (trwsv, pusqtr, ihfgk, efbcgd) {
    var lnopq = this['doc'],
        zuwy = lnopq['createElementNS'](trwsv, ihfgk || pusqtr),
        y_0$z = efbcgd['length'];_dmqnpro(this, zuwy), this['currentElement'] = zuwy, this['locator'] && _dtqosr(this['locator'], zuwy);for (var jmknol = 0x0; jmknol < y_0$z; jmknol++) {
      var trwsv = efbcgd['getURI'](jmknol),
          yz$_01 = efbcgd['getValue'](jmknol),
          ihfgk = efbcgd['getQName'](jmknol),
          cfhdg = lnopq['createAttributeNS'](trwsv, ihfgk);this['locator'] && _dtqosr(efbcgd['getLocator'](jmknol), cfhdg), cfhdg['value'] = cfhdg['nodeValue'] = yz$_01, zuwy['setAttributeNode'](cfhdg);
    }
  }, 'endElement': function () {
    var jfih = this['currentElement'];jfih['tagName'], this['currentElement'] = jfih['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (z021$_, qturs) {
    qturs = this['doc']['createProcessingInstruction'](z021$_, qturs), (this['locator'] && _dtqosr(this['locator'], qturs), _dmqnpro(this, qturs));
  }, 'ignorableWhitespace': function () {}, 'characters': function (rsqtup) {
    var hdfce;(rsqtup = _dhmijk['apply'](this, arguments)) && (hdfce = this['cdata'] ? this['doc']['createCDATASection'](rsqtup) : this['doc']['createTextNode'](rsqtup), this['currentElement'] ? this['currentElement']['appendChild'](hdfce) : /^\s*$/['test'](rsqtup) && this['doc']['appendChild'](hdfce), this['locator'] && _dtqosr(this['locator'], hdfce));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (fheg) {
    (this['locator'] = fheg) && (fheg['lineNumber'] = 0x0);
  }, 'comment': function (lnjom) {
    lnjom = _dhmijk['apply'](this, arguments);var $_013 = this['doc']['createComment'](lnjom);this['locator'] && _dtqosr(this['locator'], $_013), _dmqnpro(this, $_013);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nrsqpo, vxyzwu, dhcfeg) {
    var dcabfe = this['doc']['implementation'];dcabfe && dcabfe['createDocumentType'] && (dhcfeg = dcabfe['createDocumentType'](nrsqpo, vxyzwu, dhcfeg), this['locator'] && _dtqosr(this['locator'], dhcfeg), _dmqnpro(this, dhcfeg));
  }, 'warning': function (xtsvuw) {
    console['warn']('[xmldom warning]\t' + xtsvuw, _dy_w$zx(this['locator']));
  }, 'error': function (qrptus) {
    console['error']('[xmldom error]\t' + qrptus, _dy_w$zx(this['locator']));
  }, 'fatalError': function (vxyzu) {
    throw console['error']('[xmldom fatalError]\t' + vxyzu, _dy_w$zx(this['locator'])), vxyzu;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ecbfa) {
  _deadbf['prototype'][ecbfa] = function () {
    return null;
  };
});var _dnrsoqp = require('./bbbsax')['XMLReader'],
    _dxzvuwy = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dzwy$v;