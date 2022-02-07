var W = wx.$l;
function L9kabjz(xny4) {
  this['options'] = xny4 || { 'locator': {} };
}function L9sn8$(ba$ds, zqf5, zqahkj) {
  function kqjahz(x48n) {
    var vo17ge = ba$ds[x48n];!vo17ge && hqtlj && (vo17ge = 0x2 == ba$ds['length'] ? function (e79o1) {
      ba$ds(x48n, e79o1);
    } : ba$ds), hjb2ak[x48n] = vo17ge && function (zhkljq) {
      vo17ge('[xmldom ' + x48n + ']\t' + zhkljq + L9jbhkz(zqahkj));
    } || function () {};
  }if (!ba$ds) {
    if (zqf5 instanceof L9j2bha) return zqf5;ba$ds = zqf5;
  }var hjb2ak = {},
      hqtlj = ba$ds instanceof Function;return zqahkj = zqahkj || {}, kqjahz('warning'), kqjahz('error'), kqjahz('fatalError'), hjb2ak;
}function L9j2bha() {
  this['cdata'] = !0x1;
}function L9akd$2b(e1u7gv, a$dbs) {
  a$dbs['lineNumber'] = e1u7gv['lineNumber'], a$dbs['columnNumber'] = e1u7gv['columnNumber'];
}function L9jbhkz(d8s2b$) {
  return d8s2b$ ? '\x0a@' + (d8s2b$['systemId'] || '') + '#[line:' + d8s2b$['lineNumber'] + ',col:' + d8s2b$['columnNumber'] + ']' : void 0x0;
}function L9d_4s($bas, e6pug, bs$d) {
  return 'string' == typeof $bas ? $bas['substr'](e6pug, bs$d) : $bas['length'] >= e6pug + bs$d || e6pug ? new java['lang']['String']($bas, e6pug, bs$d) + '' : $bas;
}function L9x_s48n(abd2, $s84_d) {
  abd2['currentElement'] ? abd2['currentElement']['appendChild']($s84_d) : abd2['doc']['appendChild']($s84_d);
}L9kabjz['prototype']['parseFromString'] = function (ak2bdj, ahbj) {
  var v917 = this['options'],
      bjzkah = new L9ir3m0(),
      qlhtzj = v917['domBuilder'] || new L9j2bha(),
      evg71 = v917['errorHandler'],
      qt5hzl = v917['locator'],
      eo1v9 = v917['xmlns'] || {},
      m3ri0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qt5hzl && qlhtzj['setDocumentLocator'](qt5hzl), bjzkah['errorHandler'] = L9sn8$(evg71, qlhtzj, qt5hzl), bjzkah['domBuilder'] = v917['domBuilder'] || qlhtzj, /\/x?html?$/['test'](ahbj) && (m3ri0['nbsp'] = '\u00a0', m3ri0['copy'] = '©', eo1v9[''] = 'http://www.w3.org/1999/xhtml'), eo1v9['xml'] = eo1v9['xml'] || 'http://www.w3.org/XML/1998/namespace', ak2bdj ? bjzkah['parse'](ak2bdj, eo1v9, m3ri0) : bjzkah['errorHandler']['error']('invalid doc source'), qlhtzj['doc'];
}, L9j2bha['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9_0ynx3()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pg61eu, khaqzj, x0y_n4, f5q9l) {
    var qt5lf = this['doc'],
        jtzlq = qt5lf['createElementNS'](pg61eu, x0y_n4 || khaqzj),
        ds82 = f5q9l['length'];L9x_s48n(this, jtzlq), this['currentElement'] = jtzlq, this['locator'] && L9akd$2b(this['locator'], jtzlq);for (var r0m3i = 0x0; ds82 > r0m3i; r0m3i++) {
      var pg61eu = f5q9l['getURI'](r0m3i),
          g1ve6u = f5q9l['getValue'](r0m3i),
          x0y_n4 = f5q9l['getQName'](r0m3i),
          o1ge7v = qt5lf['createAttributeNS'](pg61eu, x0y_n4);this['locator'] && L9akd$2b(f5q9l['getLocator'](r0m3i), o1ge7v), o1ge7v['value'] = o1ge7v['nodeValue'] = g1ve6u, jtzlq['setAttributeNode'](o1ge7v);
    }
  }, 'endElement': function () {
    {
      var e7uvg1 = this['currentElement'];e7uvg1['tagName'];
    }this['currentElement'] = e7uvg1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (n_4$8s, lzjqh) {
    var c3y0rx = this['doc']['createProcessingInstruction'](n_4$8s, lzjqh);this['locator'] && L9akd$2b(this['locator'], c3y0rx), L9x_s48n(this, c3y0rx);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($48ns) {
    if ($48ns = L9d_4s['apply'](this, arguments)) {
      if (this['cdata']) var qtzh5l = this['doc']['createCDATASection']($48ns);else var qtzh5l = this['doc']['createTextNode']($48ns);this['currentElement'] ? this['currentElement']['appendChild'](qtzh5l) : /^\s*$/['test']($48ns) && this['doc']['appendChild'](qtzh5l), this['locator'] && L9akd$2b(this['locator'], qtzh5l);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (kzhqja) {
    (this['locator'] = kzhqja) && (kzhqja['lineNumber'] = 0x0);
  }, 'comment': function (n0_y3) {
    n0_y3 = L9d_4s['apply'](this, arguments);var tzljq = this['doc']['createComment'](n0_y3);this['locator'] && L9akd$2b(this['locator'], tzljq), L9x_s48n(this, tzljq);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (tl5f9q, sn_x8, jbahk) {
    var dk2ab = this['doc']['implementation'];if (dk2ab && dk2ab['createDocumentType']) {
      var d428$s = dk2ab['createDocumentType'](tl5f9q, sn_x8, jbahk);this['locator'] && L9akd$2b(this['locator'], d428$s), L9x_s48n(this, d428$s);
    }
  }, 'warning': function (bk2hj) {
    console['warn']('[xmldom warning]\t' + bk2hj, L9jbhkz(this['locator']));
  }, 'error': function ($kb2) {
    console['error']('[xmldom error]\t' + $kb2, L9jbhkz(this['locator']));
  }, 'fatalError': function (i0c) {
    throw console['error']('[xmldom fatalError]\t' + i0c, L9jbhkz(this['locator'])), i0c;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ads2$) {
  L9j2bha['prototype'][ads2$] = function () {
    return null;
  };
});var L9ir3m0 = require('./lllSAX')['XMLReader'],
    L9_0ynx3 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9kabjz;