var _ = wx.y$;
function _dzwvx$(kjmnl) {
  this['options'] = kjmnl || { 'locator': {} };
}function _dfhkj(rmqpn, y1z_, yxzwuv) {
  function lmkjon(onplmk) {
    var fj = rmqpn[onplmk];!fj && onkjlm && (fj = 0x2 == rmqpn['length'] ? function (fjgieh) {
      rmqpn(onplmk, fjgieh);
    } : rmqpn), xz$0y[onplmk] = fj && function (wz$_) {
      fj('[xmldom ' + onplmk + ']\t' + wz$_ + _dcdgehf(yxzwuv));
    } || function () {};
  }if (!rmqpn) {
    if (y1z_ instanceof _dljmok) return y1z_;rmqpn = y1z_;
  }var xz$0y = {},
      onkjlm = rmqpn instanceof Function;return yxzwuv = yxzwuv || {}, lmkjon('warning'), lmkjon('error'), lmkjon('fatalError'), xz$0y;
}function _dljmok() {
  this['cdata'] = !0x1;
}function _dhmjli(z$_x, lqmo) {
  lqmo['lineNumber'] = z$_x['lineNumber'], lqmo['columnNumber'] = z$_x['columnNumber'];
}function _dcdgehf(onmjk) {
  return onmjk ? '\x0a@' + (onmjk['systemId'] || '') + '#[line:' + onmjk['lineNumber'] + ',col:' + onmjk['columnNumber'] + ']' : void 0x0;
}function _decdabf(puqs, konlp, xutvsw) {
  return 'string' == typeof puqs ? puqs['substr'](konlp, xutvsw) : puqs['length'] >= konlp + xutvsw || konlp ? new java['lang']['String'](puqs, konlp, xutvsw) + '' : puqs;
}function _dgcfbe(ifghjk, degc) {
  ifghjk['currentElement'] ? ifghjk['currentElement']['appendChild'](degc) : ifghjk['doc']['appendChild'](degc);
}_dzwvx$['prototype']['parseFromString'] = function (gfc, onmlp) {
  var z0y1 = this['options'],
      ptqr = new _dorpqm(),
      ikghfj = z0y1['domBuilder'] || new _dljmok(),
      z$y0_x = z0y1['errorHandler'],
      $zxwy_ = z0y1['locator'],
      ghkf = z0y1['xmlns'] || {},
      chgefd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $zxwy_ && ikghfj['setDocumentLocator']($zxwy_), ptqr['errorHandler'] = _dfhkj(z$y0_x, ikghfj, $zxwy_), ptqr['domBuilder'] = z0y1['domBuilder'] || ikghfj, /\/x?html?$/['test'](onmlp) && (chgefd['nbsp'] = '\u00a0', chgefd['copy'] = '©', ghkf[''] = 'http://www.w3.org/1999/xhtml'), ghkf['xml'] = ghkf['xml'] || 'http://www.w3.org/XML/1998/namespace', gfc ? ptqr['parse'](gfc, ghkf, chgefd) : ptqr['errorHandler']['error']('invalid doc source'), ikghfj['doc'];
}, _dljmok['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dfdcghe()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (cdfabe, $_21z0, igkjf, _xyz$) {
    var fdebg = this['doc'],
        lmihjk = fdebg['createElementNS'](cdfabe, igkjf || $_21z0),
        xyv$zw = _xyz$['length'];_dgcfbe(this, lmihjk), this['currentElement'] = lmihjk, this['locator'] && _dhmjli(this['locator'], lmihjk);for (var klnmo = 0x0; xyv$zw > klnmo; klnmo++) {
      var cdfabe = _xyz$['getURI'](klnmo),
          mnklij = _xyz$['getValue'](klnmo),
          igkjf = _xyz$['getQName'](klnmo),
          rtuqp = fdebg['createAttributeNS'](cdfabe, igkjf);this['locator'] && _dhmjli(_xyz$['getLocator'](klnmo), rtuqp), rtuqp['value'] = rtuqp['nodeValue'] = mnklij, lmihjk['setAttributeNode'](rtuqp);
    }
  }, 'endElement': function () {
    {
      var jhkgfi = this['currentElement'];jhkgfi['tagName'];
    }this['currentElement'] = jhkgfi['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jon, likjnm) {
    var degf = this['doc']['createProcessingInstruction'](jon, likjnm);this['locator'] && _dhmjli(this['locator'], degf), _dgcfbe(this, degf);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ptqsor) {
    if (ptqsor = _decdabf['apply'](this, arguments)) {
      if (this['cdata']) var oljknm = this['doc']['createCDATASection'](ptqsor);else var oljknm = this['doc']['createTextNode'](ptqsor);this['currentElement'] ? this['currentElement']['appendChild'](oljknm) : /^\s*$/['test'](ptqsor) && this['doc']['appendChild'](oljknm), this['locator'] && _dhmjli(this['locator'], oljknm);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ecdfa) {
    (this['locator'] = ecdfa) && (ecdfa['lineNumber'] = 0x0);
  }, 'comment': function (nlkjo) {
    nlkjo = _decdabf['apply'](this, arguments);var npqs = this['doc']['createComment'](nlkjo);this['locator'] && _dhmjli(this['locator'], npqs), _dgcfbe(this, npqs);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (uxyzw, svrwu, nokpl) {
    var cfdeg = this['doc']['implementation'];if (cfdeg && cfdeg['createDocumentType']) {
      var igfhje = cfdeg['createDocumentType'](uxyzw, svrwu, nokpl);this['locator'] && _dhmjli(this['locator'], igfhje), _dgcfbe(this, igfhje);
    }
  }, 'warning': function (jmklo) {
    console['warn']('[xmldom warning]\t' + jmklo, _dcdgehf(this['locator']));
  }, 'error': function (njmilk) {
    console['error']('[xmldom error]\t' + njmilk, _dcdgehf(this['locator']));
  }, 'fatalError': function (fkhjig) {
    throw console['error']('[xmldom fatalError]\t' + fkhjig, _dcdgehf(this['locator'])), fkhjig;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wvuzy) {
  _dljmok['prototype'][wvuzy] = function () {
    return null;
  };
});var _dorpqm = require('./bbbsax')['XMLReader'],
    _dfdcghe = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dzwvx$;