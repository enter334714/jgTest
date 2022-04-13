var A = wx.$N;
function n_b96(m0u_j) {
  this['options'] = m0u_j || { 'locator': {} };
}function n__8hnu(o0lz3, _8jnu, o3yr4z) {
  function hum8(orz4y3) {
    var ej3nl0 = o0lz3[orz4y3];!ej3nl0 && tdh85f && (ej3nl0 = 0x2 == o0lz3['length'] ? function (wb$aq) {
      o0lz3(orz4y3, wb$aq);
    } : o0lz3), g5t71[orz4y3] = ej3nl0 && function (x1gs7) {
      ej3nl0('[xmldom ' + orz4y3 + ']\t' + x1gs7 + n__mjn0(o3yr4z));
    } || function () {};
  }if (!o0lz3) {
    if (_8jnu instanceof n_u0mljn) return _8jnu;o0lz3 = _8jnu;
  }var g5t71 = {},
      tdh85f = o0lz3 instanceof Function;return o3yr4z = o3yr4z || {}, hum8('warning'), hum8('error'), hum8('fatalError'), g5t71;
}function n_u0mljn() {
  this['cdata'] = !0x1;
}function n_s71c(rw9$q, r4y9o) {
  r4y9o['lineNumber'] = rw9$q['lineNumber'], r4y9o['columnNumber'] = rw9$q['columnNumber'];
}function n__mjn0(a$6wqb) {
  return a$6wqb ? '\x0a@' + (a$6wqb['systemId'] || '') + '#[line:' + a$6wqb['lineNumber'] + ',col:' + a$6wqb['columnNumber'] + ']' : void 0x0;
}function n_lze0o(r34o, ivk2s, $q69wb) {
  return 'string' == typeof r34o ? r34o['substr'](ivk2s, $q69wb) : r34o['length'] >= ivk2s + $q69wb || ivk2s ? new java['lang']['String'](r34o, ivk2s, $q69wb) + '' : r34o;
}function n_jmn8_(ol03je, _u0nj) {
  ol03je['currentElement'] ? ol03je['currentElement']['appendChild'](_u0nj) : ol03je['doc']['appendChild'](_u0nj);
}n_b96['prototype']['parseFromString'] = function (nmej0, xc1sg) {
  var ljen0m = this['options'],
      umn_8h = new n_t5h7(),
      rqy4b9 = ljen0m['domBuilder'] || new n_u0mljn(),
      nle0jm = ljen0m['errorHandler'],
      _8mhf = ljen0m['locator'],
      fthd8 = ljen0m['xmlns'] || {},
      _u8nh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _8mhf && rqy4b9['setDocumentLocator'](_8mhf), umn_8h['errorHandler'] = n__8hnu(nle0jm, rqy4b9, _8mhf), umn_8h['domBuilder'] = ljen0m['domBuilder'] || rqy4b9, /\/x?html?$/['test'](xc1sg) && (_u8nh['nbsp'] = '\u00a0', _u8nh['copy'] = '©', fthd8[''] = 'http://www.w3.org/1999/xhtml'), fthd8['xml'] = fthd8['xml'] || 'http://www.w3.org/XML/1998/namespace', nmej0 ? umn_8h['parse'](nmej0, fthd8, _u8nh) : umn_8h['errorHandler']['error']('invalid doc source'), rqy4b9['doc'];
}, n_u0mljn['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_vcsg1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (t75gd1, u_mn0j, mun8_, h_u8fm) {
    var k1sx = this['doc'],
        rq9$bw = k1sx['createElementNS'](t75gd1, mun8_ || u_mn0j),
        n_0 = h_u8fm['length'];n_jmn8_(this, rq9$bw), this['currentElement'] = rq9$bw, this['locator'] && n_s71c(this['locator'], rq9$bw);for (var t8df5h = 0x0; n_0 > t8df5h; t8df5h++) {
      var t75gd1 = h_u8fm['getURI'](t8df5h),
          o3e4y = h_u8fm['getValue'](t8df5h),
          mun8_ = h_u8fm['getQName'](t8df5h),
          sip2k = k1sx['createAttributeNS'](t75gd1, mun8_);this['locator'] && n_s71c(h_u8fm['getLocator'](t8df5h), sip2k), sip2k['value'] = sip2k['nodeValue'] = o3e4y, rq9$bw['setAttributeNode'](sip2k);
    }
  }, 'endElement': function () {
    {
      var ht85fd = this['currentElement'];ht85fd['tagName'];
    }this['currentElement'] = ht85fd['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (hdt_8, e3zoy4) {
    var cx5 = this['doc']['createProcessingInstruction'](hdt_8, e3zoy4);this['locator'] && n_s71c(this['locator'], cx5), n_jmn8_(this, cx5);
  }, 'ignorableWhitespace': function () {}, 'characters': function (le3n0j) {
    if (le3n0j = n_lze0o['apply'](this, arguments)) {
      if (this['cdata']) var f7h5td = this['doc']['createCDATASection'](le3n0j);else var f7h5td = this['doc']['createTextNode'](le3n0j);this['currentElement'] ? this['currentElement']['appendChild'](f7h5td) : /^\s*$/['test'](le3n0j) && this['doc']['appendChild'](f7h5td), this['locator'] && n_s71c(this['locator'], f7h5td);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (o3lze) {
    (this['locator'] = o3lze) && (o3lze['lineNumber'] = 0x0);
  }, 'comment': function (gd715) {
    gd715 = n_lze0o['apply'](this, arguments);var mjun0 = this['doc']['createComment'](gd715);this['locator'] && n_s71c(this['locator'], mjun0), n_jmn8_(this, mjun0);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (e3ozl, $q9bw, ht5) {
    var j0lnum = this['doc']['implementation'];if (j0lnum && j0lnum['createDocumentType']) {
      var vxis2 = j0lnum['createDocumentType'](e3ozl, $q9bw, ht5);this['locator'] && n_s71c(this['locator'], vxis2), n_jmn8_(this, vxis2);
    }
  }, 'warning': function (n_0mj) {
    console['warn']('[xmldom warning]\t' + n_0mj, n__mjn0(this['locator']));
  }, 'error': function (yze43o) {
    console['error']('[xmldom error]\t' + yze43o, n__mjn0(this['locator']));
  }, 'fatalError': function (njm_0) {
    throw console['error']('[xmldom fatalError]\t' + njm_0, n__mjn0(this['locator'])), njm_0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j_nmu8) {
  n_u0mljn['prototype'][j_nmu8] = function () {
    return null;
  };
});var n_t5h7 = require('./nnnSAX')['XMLReader'],
    n_vcsg1 = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_b96;