var C = wx.$a;
function as_czr(_9cj) {
  this['options'] = _9cj || { 'locator': {} };
}function as9c_m(scrq_v, ijdm, rcq9s_) {
  function dhtoi(opb82x) {
    var kf176 = scrq_v[opb82x];!kf176 && ibohtx && (kf176 = 0x2 == scrq_v['length'] ? function (z9s_) {
      scrq_v(opb82x, z9s_);
    } : scrq_v), ebn[opb82x] = kf176 && function (yfu67) {
      kf176('[xmldom ' + opb82x + ']\t' + yfu67 + as_9czr(rcq9s_));
    } || function () {};
  }if (!scrq_v) {
    if (ijdm instanceof aqcs9_) return ijdm;scrq_v = ijdm;
  }var ebn = {},
      ibohtx = scrq_v instanceof Function;return rcq9s_ = rcq9s_ || {}, dhtoi('warning'), dhtoi('error'), dhtoi('fatalError'), ebn;
}function aqcs9_() {
  this['cdata'] = !0x1;
}function ait5ohd(jz45md, toxhbi) {
  toxhbi['lineNumber'] = jz45md['lineNumber'], toxhbi['columnNumber'] = jz45md['columnNumber'];
}function as_9czr(l0yfk6) {
  return l0yfk6 ? '\x0a@' + (l0yfk6['systemId'] || '') + '#[line:' + l0yfk6['lineNumber'] + ',col:' + l0yfk6['columnNumber'] + ']' : void 0x0;
}function avqrs$(t54ih, rlqv, cszm9) {
  return 'string' == typeof t54ih ? t54ih['substr'](rlqv, cszm9) : t54ih['length'] >= rlqv + cszm9 || rlqv ? new java['lang']['String'](t54ih, rlqv, cszm9) + '' : t54ih;
}function as_cmz(_jm9z, bhotxi) {
  _jm9z['currentElement'] ? _jm9z['currentElement']['appendChild'](bhotxi) : _jm9z['doc']['appendChild'](bhotxi);
}as_czr['prototype']['parseFromString'] = function (y6fk17, srvl) {
  var n8g23 = this['options'],
      yf16 = new aqvcs$(),
      _sqcrv = n8g23['domBuilder'] || new aqcs9_(),
      s9r_qc = n8g23['errorHandler'],
      v0qlk$ = n8g23['locator'],
      vk0l$f = n8g23['xmlns'] || {},
      jdmi4 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return v0qlk$ && _sqcrv['setDocumentLocator'](v0qlk$), yf16['errorHandler'] = as9c_m(s9r_qc, _sqcrv, v0qlk$), yf16['domBuilder'] = n8g23['domBuilder'] || _sqcrv, /\/x?html?$/['test'](srvl) && (jdmi4['nbsp'] = '\u00a0', jdmi4['copy'] = '©', vk0l$f[''] = 'http://www.w3.org/1999/xhtml'), vk0l$f['xml'] = vk0l$f['xml'] || 'http://www.w3.org/XML/1998/namespace', y6fk17 ? yf16['parse'](y6fk17, vk0l$f, jdmi4) : yf16['errorHandler']['error']('invalid doc source'), _sqcrv['doc'];
}, aqcs9_['prototype'] = { 'startDocument': function () {
    this['doc'] = new aihxt5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ge823n, jd4m5, ob, ibot) {
    var tiho = this['doc'],
        t5idh4 = tiho['createElementNS'](ge823n, ob || jd4m5),
        y6u = ibot['length'];as_cmz(this, t5idh4), this['currentElement'] = t5idh4, this['locator'] && ait5ohd(this['locator'], t5idh4);for (var qr9s_c = 0x0; y6u > qr9s_c; qr9s_c++) {
      var ge823n = ibot['getURI'](qr9s_c),
          oxih5 = ibot['getValue'](qr9s_c),
          ob = ibot['getQName'](qr9s_c),
          zsc9r_ = tiho['createAttributeNS'](ge823n, ob);this['locator'] && ait5ohd(ibot['getLocator'](qr9s_c), zsc9r_), zsc9r_['value'] = zsc9r_['nodeValue'] = oxih5, t5idh4['setAttributeNode'](zsc9r_);
    }
  }, 'endElement': function () {
    {
      var bn8pe2 = this['currentElement'];bn8pe2['tagName'];
    }this['currentElement'] = bn8pe2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (phxo, $fkl0) {
    var x2po8 = this['doc']['createProcessingInstruction'](phxo, $fkl0);this['locator'] && ait5ohd(this['locator'], x2po8), as_cmz(this, x2po8);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hidt5o) {
    if (hidt5o = avqrs$['apply'](this, arguments)) {
      if (this['cdata']) var rc_q9s = this['doc']['createCDATASection'](hidt5o);else var rc_q9s = this['doc']['createTextNode'](hidt5o);this['currentElement'] ? this['currentElement']['appendChild'](rc_q9s) : /^\s*$/['test'](hidt5o) && this['doc']['appendChild'](rc_q9s), this['locator'] && ait5ohd(this['locator'], rc_q9s);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ih4dt5) {
    (this['locator'] = ih4dt5) && (ih4dt5['lineNumber'] = 0x0);
  }, 'comment': function (kl0f6) {
    kl0f6 = avqrs$['apply'](this, arguments);var c$qsrv = this['doc']['createComment'](kl0f6);this['locator'] && ait5ohd(this['locator'], c$qsrv), as_cmz(this, c$qsrv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (iotdh5, svqcr$, _9cqsr) {
    var t45dhi = this['doc']['implementation'];if (t45dhi && t45dhi['createDocumentType']) {
      var r0$ql = t45dhi['createDocumentType'](iotdh5, svqcr$, _9cqsr);this['locator'] && ait5ohd(this['locator'], r0$ql), as_cmz(this, r0$ql);
    }
  }, 'warning': function (vkq) {
    console['warn']('[xmldom warning]\t' + vkq, as_9czr(this['locator']));
  }, 'error': function (r9csz_) {
    console['error']('[xmldom error]\t' + r9csz_, as_9czr(this['locator']));
  }, 'fatalError': function (hxtobi) {
    throw console['error']('[xmldom fatalError]\t' + hxtobi, as_9czr(this['locator'])), hxtobi;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zr9cs_) {
  aqcs9_['prototype'][zr9cs_] = function () {
    return null;
  };
});var aqvcs$ = require('./aacaa')['XMLReader'],
    aihxt5 = exports['DOMImplementation'] = require('./aaDOaa')['DOMImplementation'];exports['XMLSerializer'] = require('./aaDOaa')['XMLSerializer'], exports['DOMParser'] = as_czr;