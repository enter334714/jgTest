var u = wx.$x;
function xcjvf(ekw1b) {
  this['options'] = ekw1b || { 'locator': {} };
}function xl78fc(phbke, id4sgx, dixgv) {
  function sxo5mz(l8$97y) {
    var s4imo = phbke[l8$97y];!s4imo && z536t2 && (s4imo = 0x2 == phbke['length'] ? function (iosmx) {
      phbke(l8$97y, iosmx);
    } : phbke), xios4[l8$97y] = s4imo && function (jvcu) {
      s4imo('[xmldom ' + l8$97y + ']\t' + jvcu + xgvndj(dixgv));
    } || function () {};
  }if (!phbke) {
    if (id4sgx instanceof xl9) return id4sgx;phbke = id4sgx;
  }var xios4 = {},
      z536t2 = phbke instanceof Function;return dixgv = dixgv || {}, sxo5mz('warning'), sxo5mz('error'), sxo5mz('fatalError'), xios4;
}function xl9() {
  this['cdata'] = !0x1;
}function xewhk0b(h0qae, msg4x) {
  msg4x['lineNumber'] = h0qae['lineNumber'], msg4x['columnNumber'] = h0qae['columnNumber'];
}function xgvndj(z5m) {
  return z5m ? '\x0a@' + (z5m['systemId'] || '') + '#[line:' + z5m['lineNumber'] + ',col:' + z5m['columnNumber'] + ']' : void 0x0;
}function xe0ba(zm26o, djnvcu, vgun4) {
  return 'string' == typeof zm26o ? zm26o['substr'](djnvcu, vgun4) : zm26o['length'] >= djnvcu + vgun4 || djnvcu ? new java['lang']['String'](zm26o, djnvcu, vgun4) + '' : zm26o;
}function xqphar_(jcunfv, ung) {
  jcunfv['currentElement'] ? jcunfv['currentElement']['appendChild'](ung) : jcunfv['doc']['appendChild'](ung);
}xcjvf['prototype']['parseFromString'] = function (ekbp0, t321w6) {
  var dxvi = this['options'],
      lfj7c9 = new x_pharq(),
      nvgdj = dxvi['domBuilder'] || new xl9(),
      sxizm = dxvi['errorHandler'],
      ep0b = dxvi['locator'],
      u9fnjc = dxvi['xmlns'] || {},
      rpaqh_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ep0b && nvgdj['setDocumentLocator'](ep0b), lfj7c9['errorHandler'] = xl78fc(sxizm, nvgdj, ep0b), lfj7c9['domBuilder'] = dxvi['domBuilder'] || nvgdj, /\/x?html?$/['test'](t321w6) && (rpaqh_['nbsp'] = '\u00a0', rpaqh_['copy'] = '©', u9fnjc[''] = 'http://www.w3.org/1999/xhtml'), u9fnjc['xml'] = u9fnjc['xml'] || 'http://www.w3.org/XML/1998/namespace', ekbp0 ? lfj7c9['parse'](ekbp0, u9fnjc, rpaqh_) : lfj7c9['errorHandler']['error']('invalid doc source'), nvgdj['doc'];
}, xl9['prototype'] = { 'startDocument': function () {
    this['doc'] = new xlcf9j()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (t2w1, l78f, _aqph, bhea) {
    var nvjud = this['doc'],
        bkew0 = nvjud['createElementNS'](t2w1, _aqph || l78f),
        ixd4 = bhea['length'];xqphar_(this, bkew0), this['currentElement'] = bkew0, this['locator'] && xewhk0b(this['locator'], bkew0);for (var y$7l8 = 0x0; ixd4 > y$7l8; y$7l8++) {
      var t2w1 = bhea['getURI'](y$7l8),
          epab0h = bhea['getValue'](y$7l8),
          _aqph = bhea['getQName'](y$7l8),
          e0hqp = nvjud['createAttributeNS'](t2w1, _aqph);this['locator'] && xewhk0b(bhea['getLocator'](y$7l8), e0hqp), e0hqp['value'] = e0hqp['nodeValue'] = epab0h, bkew0['setAttributeNode'](e0hqp);
    }
  }, 'endElement': function () {
    {
      var t3kbw1 = this['currentElement'];t3kbw1['tagName'];
    }this['currentElement'] = t3kbw1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (iv4ud, dgvju) {
    var bhek0w = this['doc']['createProcessingInstruction'](iv4ud, dgvju);this['locator'] && xewhk0b(this['locator'], bhek0w), xqphar_(this, bhek0w);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gnvjdu) {
    if (gnvjdu = xe0ba['apply'](this, arguments)) {
      if (this['cdata']) var wkb0eh = this['doc']['createCDATASection'](gnvjdu);else var wkb0eh = this['doc']['createTextNode'](gnvjdu);this['currentElement'] ? this['currentElement']['appendChild'](wkb0eh) : /^\s*$/['test'](gnvjdu) && this['doc']['appendChild'](wkb0eh), this['locator'] && xewhk0b(this['locator'], wkb0eh);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (fc9jl7) {
    (this['locator'] = fc9jl7) && (fc9jl7['lineNumber'] = 0x0);
  }, 'comment': function (raqh_) {
    raqh_ = xe0ba['apply'](this, arguments);var j9cfnu = this['doc']['createComment'](raqh_);this['locator'] && xewhk0b(this['locator'], j9cfnu), xqphar_(this, j9cfnu);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vunf, f8l7y, l78y$) {
    var g4dxvi = this['doc']['implementation'];if (g4dxvi && g4dxvi['createDocumentType']) {
      var peq_ = g4dxvi['createDocumentType'](vunf, f8l7y, l78y$);this['locator'] && xewhk0b(this['locator'], peq_), xqphar_(this, peq_);
    }
  }, 'warning': function (ivd4x) {
    console['warn']('[xmldom warning]\t' + ivd4x, xgvndj(this['locator']));
  }, 'error': function (aqp0he) {
    console['error']('[xmldom error]\t' + aqp0he, xgvndj(this['locator']));
  }, 'fatalError': function (un9fjc) {
    throw console['error']('[xmldom fatalError]\t' + un9fjc, xgvndj(this['locator'])), un9fjc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vdg4) {
  xl9['prototype'][vdg4] = function () {
    return null;
  };
});var x_pharq = require('./xxqxx')['XMLReader'],
    xlcf9j = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xcjvf;