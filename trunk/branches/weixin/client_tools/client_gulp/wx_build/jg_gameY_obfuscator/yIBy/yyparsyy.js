var a = wx.$y;
function yfo_8j7(m6u5) {
  this['options'] = m6u5 || { 'locator': {} };
}function yv36yr(o_f7j8, a563mu, _7sl8f) {
  function twmdu1(zxryv0) {
    var u16 = o_f7j8[zxryv0];!u16 && k9c8ls && (u16 = 0x2 == o_f7j8['length'] ? function (s_8l) {
      o_f7j8(zxryv0, s_8l);
    } : o_f7j8), l87o[zxryv0] = u16 && function (fol) {
      u16('[xmldom ' + zxryv0 + ']\t' + fol + ymt1(_7sl8f));
    } || function () {};
  }if (!o_f7j8) {
    if (a563mu instanceof yyv5a6) return a563mu;o_f7j8 = a563mu;
  }var l87o = {},
      k9c8ls = o_f7j8 instanceof Function;return _7sl8f = _7sl8f || {}, twmdu1('warning'), twmdu1('error'), twmdu1('fatalError'), l87o;
}function yyv5a6() {
  this['cdata'] = !0x1;
}function yw4fhoj(ut1dw4, ohwfj4) {
  ohwfj4['lineNumber'] = ut1dw4['lineNumber'], ohwfj4['columnNumber'] = ut1dw4['columnNumber'];
}function ymt1(d4ut1w) {
  return d4ut1w ? '\x0a@' + (d4ut1w['systemId'] || '') + '#[line:' + d4ut1w['lineNumber'] + ',col:' + d4ut1w['columnNumber'] + ']' : void 0x0;
}function yyx0v(qi$pgn, l8f7s, tudm1) {
  return 'string' == typeof qi$pgn ? qi$pgn['substr'](l8f7s, tudm1) : qi$pgn['length'] >= l8f7s + tudm1 || l8f7s ? new java['lang']['String'](qi$pgn, l8f7s, tudm1) + '' : qi$pgn;
}function y_f7joh(ho4, y036v) {
  ho4['currentElement'] ? ho4['currentElement']['appendChild'](y036v) : ho4['doc']['appendChild'](y036v);
}yfo_8j7['prototype']['parseFromString'] = function (u1tm, fj7o_8) {
  var $nq2g = this['options'],
      av3 = new yn$2qgi(),
      c98k = $nq2g['domBuilder'] || new yyv5a6(),
      o_hj7f = $nq2g['errorHandler'],
      nqpgi$ = $nq2g['locator'],
      _o7hf = $nq2g['xmlns'] || {},
      gk2i$n = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return nqpgi$ && c98k['setDocumentLocator'](nqpgi$), av3['errorHandler'] = yv36yr(o_hj7f, c98k, nqpgi$), av3['domBuilder'] = $nq2g['domBuilder'] || c98k, /\/x?html?$/['test'](fj7o_8) && (gk2i$n['nbsp'] = '\u00a0', gk2i$n['copy'] = '©', _o7hf[''] = 'http://www.w3.org/1999/xhtml'), _o7hf['xml'] = _o7hf['xml'] || 'http://www.w3.org/XML/1998/namespace', u1tm ? av3['parse'](u1tm, _o7hf, gk2i$n) : av3['errorHandler']['error']('invalid doc source'), c98k['doc'];
}, yyv5a6['prototype'] = { 'startDocument': function () {
    this['doc'] = new yn$kg29()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (y3r60v, l_7fs, dm1au5, wh) {
    var oj4f = this['doc'],
        y03v6a = oj4f['createElementNS'](y3r60v, dm1au5 || l_7fs),
        _f4oh = wh['length'];y_f7joh(this, y03v6a), this['currentElement'] = y03v6a, this['locator'] && yw4fhoj(this['locator'], y03v6a);for (var u1t5m = 0x0; _f4oh > u1t5m; u1t5m++) {
      var y3r60v = wh['getURI'](u1t5m),
          n9$ck2 = wh['getValue'](u1t5m),
          dm1au5 = wh['getQName'](u1t5m),
          th1wd = oj4f['createAttributeNS'](y3r60v, dm1au5);this['locator'] && yw4fhoj(wh['getLocator'](u1t5m), th1wd), th1wd['value'] = th1wd['nodeValue'] = n9$ck2, y03v6a['setAttributeNode'](th1wd);
    }
  }, 'endElement': function () {
    {
      var jdhtw4 = this['currentElement'];jdhtw4['tagName'];
    }this['currentElement'] = jdhtw4['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (aum1, v3ya65) {
    var ohfj4 = this['doc']['createProcessingInstruction'](aum1, v3ya65);this['locator'] && yw4fhoj(this['locator'], ohfj4), y_f7joh(this, ohfj4);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ojwht4) {
    if (ojwht4 = yyx0v['apply'](this, arguments)) {
      if (this['cdata']) var kc2 = this['doc']['createCDATASection'](ojwht4);else var kc2 = this['doc']['createTextNode'](ojwht4);this['currentElement'] ? this['currentElement']['appendChild'](kc2) : /^\s*$/['test'](ojwht4) && this['doc']['appendChild'](kc2), this['locator'] && yw4fhoj(this['locator'], kc2);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rxzey0) {
    (this['locator'] = rxzey0) && (rxzey0['lineNumber'] = 0x0);
  }, 'comment': function (z03rv) {
    z03rv = yyx0v['apply'](this, arguments);var aumd51 = this['doc']['createComment'](z03rv);this['locator'] && yw4fhoj(this['locator'], aumd51), y_f7joh(this, aumd51);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ma36v, ot4w, td1mu) {
    var kngi2 = this['doc']['implementation'];if (kngi2 && kngi2['createDocumentType']) {
      var mau563 = kngi2['createDocumentType'](ma36v, ot4w, td1mu);this['locator'] && yw4fhoj(this['locator'], mau563), y_f7joh(this, mau563);
    }
  }, 'warning': function (u1md) {
    console['warn']('[xmldom warning]\t' + u1md, ymt1(this['locator']));
  }, 'error': function (yx0zer) {
    console['error']('[xmldom error]\t' + yx0zer, ymt1(this['locator']));
  }, 'fatalError': function (ksl8c9) {
    throw console['error']('[xmldom fatalError]\t' + ksl8c9, ymt1(this['locator'])), ksl8c9;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_8jof) {
  yyv5a6['prototype'][_8jof] = function () {
    return null;
  };
});var yn$2qgi = require('./yycyy')['XMLReader'],
    yn$kg29 = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = yfo_8j7;