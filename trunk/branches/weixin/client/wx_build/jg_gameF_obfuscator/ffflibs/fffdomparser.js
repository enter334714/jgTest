var k = wx.$f;
function fyvec5m(f3qpi) {
  this['options'] = f3qpi || { 'locator': {} };
}function fjskn9(jo18k, eybd5, z25d) {
  function udw_2(rag$0) {
    var k1oj8 = jo18k[rag$0];!k1oj8 && w_xusn && (k1oj8 = 0x2 == jo18k['length'] ? function (xu2s_w) {
      jo18k(rag$0, xu2s_w);
    } : jo18k), o8g1k[rag$0] = k1oj8 ? function (agr) {
      k1oj8('[xmldom ' + rag$0 + ']\t' + agr + fh3trf$(z25d));
    } : function () {};
  }if (!jo18k) {
    if (eybd5 instanceof f_wd2) return eybd5;jo18k = eybd5;
  }var o8g1k = {},
      w_xusn = jo18k instanceof Function;return z25d = z25d || {}, udw_2('warning'), udw_2('error'), udw_2('fatalError'), o8g1k;
}function f_wd2() {
  this['cdata'] = !0x1;
}function fkj1n9(_snxu, k19ns) {
  k19ns['lineNumber'] = _snxu['lineNumber'], k19ns['columnNumber'] = _snxu['columnNumber'];
}function fh3trf$(ud2wzx) {
  return ud2wzx ? '\x0a@' + (ud2wzx['systemId'] || '') + '#[line:' + ud2wzx['lineNumber'] + ',col:' + ud2wzx['columnNumber'] + ']' : void 0x0;
}function fkn19_(fp4qi, i3qpf, ar$) {
  return 'string' == typeof fp4qi ? fp4qi['substr'](i3qpf, ar$) : fp4qi['length'] >= i3qpf + ar$ || i3qpf ? new java['lang']['String'](fp4qi, i3qpf, ar$) + '' : fp4qi;
}function fpf3qh($at60, kn198) {
  ($at60['currentElement'] || $at60['doc'])['appendChild'](kn198);
}fyvec5m['prototype']['parseFromString'] = function (s19_k, c5myev) {
  var n189 = this['options'],
      j08gk = new fj81ogk(),
      ws_2u = n189['domBuilder'] || new f_wd2(),
      o6g$ = n189['errorHandler'],
      qfrh3t = n189['locator'],
      o$g6a0 = n189['xmlns'] || {},
      ag68o = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qfrh3t && ws_2u['setDocumentLocator'](qfrh3t), j08gk['errorHandler'] = fjskn9(o6g$, ws_2u, qfrh3t), j08gk['domBuilder'] = n189['domBuilder'] || ws_2u, /\/x?html?$/['test'](c5myev) && (ag68o['nbsp'] = '\u00a0', ag68o['copy'] = '©', o$g6a0[''] = 'http://www.w3.org/1999/xhtml'), o$g6a0['xml'] = o$g6a0['xml'] || 'http://www.w3.org/XML/1998/namespace', s19_k ? j08gk['parse'](s19_k, o$g6a0, ag68o) : j08gk['errorHandler']['error']('invalid doc source'), ws_2u['doc'];
}, f_wd2['prototype'] = { 'startDocument': function () {
    this['doc'] = new fj91s()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mev7yc, go8ja, if4hqp, d2xw) {
    var ecvy5m = this['doc'],
        knj189 = ecvy5m['createElementNS'](mev7yc, if4hqp || go8ja),
        art6 = d2xw['length'];fpf3qh(this, knj189), this['currentElement'] = knj189, this['locator'] && fkj1n9(this['locator'], knj189);for (var jk08g = 0x0; jk08g < art6; jk08g++) {
      var mev7yc = d2xw['getURI'](jk08g),
          n9_s1k = d2xw['getValue'](jk08g),
          if4hqp = d2xw['getQName'](jk08g),
          duzb = ecvy5m['createAttributeNS'](mev7yc, if4hqp);this['locator'] && fkj1n9(d2xw['getLocator'](jk08g), duzb), duzb['value'] = duzb['nodeValue'] = n9_s1k, knj189['setAttributeNode'](duzb);
    }
  }, 'endElement': function () {
    var dybe = this['currentElement'];dybe['tagName'], this['currentElement'] = dybe['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dzu2xw, xwsu_2) {
    xwsu_2 = this['doc']['createProcessingInstruction'](dzu2xw, xwsu_2), (this['locator'] && fkj1n9(this['locator'], xwsu_2), fpf3qh(this, xwsu_2));
  }, 'ignorableWhitespace': function () {}, 'characters': function (y5ebzm) {
    var r$a0g6;(y5ebzm = fkn19_['apply'](this, arguments)) && (r$a0g6 = this['cdata'] ? this['doc']['createCDATASection'](y5ebzm) : this['doc']['createTextNode'](y5ebzm), this['currentElement'] ? this['currentElement']['appendChild'](r$a0g6) : /^\s*$/['test'](y5ebzm) && this['doc']['appendChild'](r$a0g6), this['locator'] && fkj1n9(this['locator'], r$a0g6));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (_kn91s) {
    (this['locator'] = _kn91s) && (_kn91s['lineNumber'] = 0x0);
  }, 'comment': function (xwu2) {
    xwu2 = fkn19_['apply'](this, arguments);var _wdux = this['doc']['createComment'](xwu2);this['locator'] && fkj1n9(this['locator'], _wdux), fpf3qh(this, _wdux);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (qhpi4f, jog18, z5bud2) {
    var v7emyc = this['doc']['implementation'];v7emyc && v7emyc['createDocumentType'] && (z5bud2 = v7emyc['createDocumentType'](qhpi4f, jog18, z5bud2), this['locator'] && fkj1n9(this['locator'], z5bud2), fpf3qh(this, z5bud2));
  }, 'warning': function (by5de) {
    console['warn']('[xmldom warning]\t' + by5de, fh3trf$(this['locator']));
  }, 'error': function (_nsk9) {
    console['error']('[xmldom error]\t' + _nsk9, fh3trf$(this['locator']));
  }, 'fatalError': function (f3rt$h) {
    throw console['error']('[xmldom fatalError]\t' + f3rt$h, fh3trf$(this['locator'])), f3rt$h;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (o1jk8g) {
  f_wd2['prototype'][o1jk8g] = function () {
    return null;
  };
});var fj81ogk = require('./fffsax')['XMLReader'],
    fj91s = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fyvec5m;