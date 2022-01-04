var Q = wx.$I;
function i_lrtz$i(kqnu2) {
  this['options'] = kqnu2 || { 'locator': {} };
}function i_p9c1m(z$lgi, c9mt1v, se3b) {
  function cjf8_(rtv) {
    var yozg0l = z$lgi[rtv];!yozg0l && $liz0 && (yozg0l = 0x2 == z$lgi['length'] ? function (r9itl$) {
      z$lgi(rtv, r9itl$);
    } : z$lgi), _p18[rtv] = yozg0l && function (zgo0dy) {
      yozg0l('[xmldom ' + rtv + ']\t' + zgo0dy + i_cvmp1f(se3b));
    } || function () {};
  }if (!z$lgi) {
    if (c9mt1v instanceof i_kbesuq) return c9mt1v;z$lgi = c9mt1v;
  }var _p18 = {},
      $liz0 = z$lgi instanceof Function;return se3b = se3b || {}, cjf8_('warning'), cjf8_('error'), cjf8_('fatalError'), _p18;
}function i_kbesuq() {
  this['cdata'] = !0x1;
}function i_s2q(m1f_p, mv1pcf) {
  mv1pcf['lineNumber'] = m1f_p['lineNumber'], mv1pcf['columnNumber'] = m1f_p['columnNumber'];
}function i_cvmp1f(n5hw4x) {
  return n5hw4x ? '\x0a@' + (n5hw4x['systemId'] || '') + '#[line:' + n5hw4x['lineNumber'] + ',col:' + n5hw4x['columnNumber'] + ']' : void 0x0;
}function i_uqebk(kesqbu, a367b, vfcm1) {
  return 'string' == typeof kesqbu ? kesqbu['substr'](a367b, vfcm1) : kesqbu['length'] >= a367b + vfcm1 || a367b ? new java['lang']['String'](kesqbu, a367b, vfcm1) + '' : kesqbu;
}function i_go$0z(rivmt, q5kwn) {
  rivmt['currentElement'] ? rivmt['currentElement']['appendChild'](q5kwn) : rivmt['doc']['appendChild'](q5kwn);
}i_lrtz$i['prototype']['parseFromString'] = function (beksqu, zog0yd) {
  var il0zr$ = this['options'],
      xh45nw = new i_$vir9t(),
      wnqk2 = il0zr$['domBuilder'] || new i_kbesuq(),
      b3ue = il0zr$['errorHandler'],
      n2q54w = il0zr$['locator'],
      be36s7 = il0zr$['xmlns'] || {},
      be = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return n2q54w && wnqk2['setDocumentLocator'](n2q54w), xh45nw['errorHandler'] = i_p9c1m(b3ue, wnqk2, n2q54w), xh45nw['domBuilder'] = il0zr$['domBuilder'] || wnqk2, /\/x?html?$/['test'](zog0yd) && (be['nbsp'] = '\u00a0', be['copy'] = '©', be36s7[''] = 'http://www.w3.org/1999/xhtml'), be36s7['xml'] = be36s7['xml'] || 'http://www.w3.org/XML/1998/namespace', beksqu ? xh45nw['parse'](beksqu, be36s7, be) : xh45nw['errorHandler']['error']('invalid doc source'), wnqk2['doc'];
}, i_kbesuq['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_tc19m()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (uebs7k, vm9t1, m9rt1, iglz$0) {
    var zol0yg = this['doc'],
        a3j68_ = zol0yg['createElementNS'](uebs7k, m9rt1 || vm9t1),
        l9tr$i = iglz$0['length'];i_go$0z(this, a3j68_), this['currentElement'] = a3j68_, this['locator'] && i_s2q(this['locator'], a3j68_);for (var ebuqk = 0x0; l9tr$i > ebuqk; ebuqk++) {
      var uebs7k = iglz$0['getURI'](ebuqk),
          qw4n25 = iglz$0['getValue'](ebuqk),
          m9rt1 = iglz$0['getQName'](ebuqk),
          h5x4w = zol0yg['createAttributeNS'](uebs7k, m9rt1);this['locator'] && i_s2q(iglz$0['getLocator'](ebuqk), h5x4w), h5x4w['value'] = h5x4w['nodeValue'] = qw4n25, a3j68_['setAttributeNode'](h5x4w);
    }
  }, 'endElement': function () {
    {
      var c9vm1 = this['currentElement'];c9vm1['tagName'];
    }this['currentElement'] = c9vm1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jpc_8f, lg0zyo) {
    var qsku2n = this['doc']['createProcessingInstruction'](jpc_8f, lg0zyo);this['locator'] && i_s2q(this['locator'], qsku2n), i_go$0z(this, qsku2n);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ue7b3s) {
    if (ue7b3s = i_uqebk['apply'](this, arguments)) {
      if (this['cdata']) var ti$rzl = this['doc']['createCDATASection'](ue7b3s);else var ti$rzl = this['doc']['createTextNode'](ue7b3s);this['currentElement'] ? this['currentElement']['appendChild'](ti$rzl) : /^\s*$/['test'](ue7b3s) && this['doc']['appendChild'](ti$rzl), this['locator'] && i_s2q(this['locator'], ti$rzl);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (irt$v9) {
    (this['locator'] = irt$v9) && (irt$v9['lineNumber'] = 0x0);
  }, 'comment': function (w5n2q4) {
    w5n2q4 = i_uqebk['apply'](this, arguments);var pj_8fa = this['doc']['createComment'](w5n2q4);this['locator'] && i_s2q(this['locator'], pj_8fa), i_go$0z(this, pj_8fa);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (l0ozgy, x45n, w5nqk2) {
    var o$lz = this['doc']['implementation'];if (o$lz && o$lz['createDocumentType']) {
      var dgyoz0 = o$lz['createDocumentType'](l0ozgy, x45n, w5nqk2);this['locator'] && i_s2q(this['locator'], dgyoz0), i_go$0z(this, dgyoz0);
    }
  }, 'warning': function (bkes7u) {
    console['warn']('[xmldom warning]\t' + bkes7u, i_cvmp1f(this['locator']));
  }, 'error': function (f_cp81) {
    console['error']('[xmldom error]\t' + f_cp81, i_cvmp1f(this['locator']));
  }, 'fatalError': function (o0$gzl) {
    throw console['error']('[xmldom fatalError]\t' + o0$gzl, i_cvmp1f(this['locator'])), o0$gzl;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (irt$) {
  i_kbesuq['prototype'][irt$] = function () {
    return null;
  };
});var i_$vir9t = require('./iiiSAX')['XMLReader'],
    i_tc19m = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i_lrtz$i;