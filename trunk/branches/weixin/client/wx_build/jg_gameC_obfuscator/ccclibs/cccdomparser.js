var p = wx.$h;
function a_kexj2$(l7st) {
  this['options'] = l7st || { 'locator': {} };
}function a_ztb69l(gxdy_, qhfwn, c4k2s7) {
  function dpy(b7ct6s) {
    var rx_gyd = gxdy_[b7ct6s];!rx_gyd && c472k && (rx_gyd = 0x2 == gxdy_['length'] ? function (ovwnm1) {
      gxdy_(b7ct6s, ovwnm1);
    } : gxdy_), fqnw81[b7ct6s] = rx_gyd ? function (qn18) {
      rx_gyd('[xmldom ' + b7ct6s + ']\t' + qn18 + a_mownv(c4k2s7));
    } : function () {};
  }if (!gxdy_) {
    if (qhfwn instanceof a_zl9tb) return qhfwn;gxdy_ = qhfwn;
  }var fqnw81 = {},
      c472k = gxdy_ instanceof Function;return c4k2s7 = c4k2s7 || {}, dpy('warning'), dpy('error'), dpy('fatalError'), fqnw81;
}function a_zl9tb() {
  this['cdata'] = !0x1;
}function a_wfn(now, al0v) {
  al0v['lineNumber'] = now['lineNumber'], al0v['columnNumber'] = now['columnNumber'];
}function a_mownv(a06z9) {
  return a06z9 ? '\x0a@' + (a06z9['systemId'] || '') + '#[line:' + a06z9['lineNumber'] + ',col:' + a06z9['columnNumber'] + ']' : void 0x0;
}function a_mw8qn(zl7tb, $grejx, v1onwm) {
  return 'string' == typeof zl7tb ? zl7tb['substr']($grejx, v1onwm) : zl7tb['length'] >= $grejx + v1onwm || $grejx ? new java['lang']['String'](zl7tb, $grejx, v1onwm) + '' : zl7tb;
}function a_w8fqh(lzt, y3dp5) {
  (lzt['currentElement'] || lzt['doc'])['appendChild'](y3dp5);
}a_kexj2$['prototype']['parseFromString'] = function (xyjr_, gyrdx) {
  var zb9t6l = this['options'],
      sk7b = new a_avz90l(),
      grxej = zb9t6l['domBuilder'] || new a_zl9tb(),
      oa0v1 = zb9t6l['errorHandler'],
      rdxg_y = zb9t6l['locator'],
      ztl76 = zb9t6l['xmlns'] || {},
      rdgy_5 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rdxg_y && grxej['setDocumentLocator'](rdxg_y), sk7b['errorHandler'] = a_ztb69l(oa0v1, grxej, rdxg_y), sk7b['domBuilder'] = zb9t6l['domBuilder'] || grxej, /\/x?html?$/['test'](gyrdx) && (rdgy_5['nbsp'] = '\u00a0', rdgy_5['copy'] = '©', ztl76[''] = 'http://www.w3.org/1999/xhtml'), ztl76['xml'] = ztl76['xml'] || 'http://www.w3.org/XML/1998/namespace', xyjr_ ? sk7b['parse'](xyjr_, ztl76, rdgy_5) : sk7b['errorHandler']['error']('invalid doc source'), grxej['doc'];
}, a_zl9tb['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_a09zvo()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (lz6tb9, $ejgrx, ek4j2, qn8mw1) {
    var c7s = this['doc'],
        fwqn18 = c7s['createElementNS'](lz6tb9, ek4j2 || $ejgrx),
        l09azv = qn8mw1['length'];a_w8fqh(this, fwqn18), this['currentElement'] = fwqn18, this['locator'] && a_wfn(this['locator'], fwqn18);for (var r2ex$j = 0x0; r2ex$j < l09azv; r2ex$j++) {
      var lz6tb9 = qn8mw1['getURI'](r2ex$j),
          k2$4c = qn8mw1['getValue'](r2ex$j),
          ek4j2 = qn8mw1['getQName'](r2ex$j),
          om10n = c7s['createAttributeNS'](lz6tb9, ek4j2);this['locator'] && a_wfn(qn8mw1['getLocator'](r2ex$j), om10n), om10n['value'] = om10n['nodeValue'] = k2$4c, fwqn18['setAttributeNode'](om10n);
    }
  }, 'endElement': function () {
    var _rgjx = this['currentElement'];_rgjx['tagName'], this['currentElement'] = _rgjx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (stl, ova90z) {
    ova90z = this['doc']['createProcessingInstruction'](stl, ova90z), (this['locator'] && a_wfn(this['locator'], ova90z), a_w8fqh(this, ova90z));
  }, 'ignorableWhitespace': function () {}, 'characters': function (re2jx) {
    var lt7z;(re2jx = a_mw8qn['apply'](this, arguments)) && (lt7z = this['cdata'] ? this['doc']['createCDATASection'](re2jx) : this['doc']['createTextNode'](re2jx), this['currentElement'] ? this['currentElement']['appendChild'](lt7z) : /^\s*$/['test'](re2jx) && this['doc']['appendChild'](lt7z), this['locator'] && a_wfn(this['locator'], lt7z));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zal09) {
    (this['locator'] = zal09) && (zal09['lineNumber'] = 0x0);
  }, 'comment': function (dg5y_r) {
    dg5y_r = a_mw8qn['apply'](this, arguments);var _pd5y3 = this['doc']['createComment'](dg5y_r);this['locator'] && a_wfn(this['locator'], _pd5y3), a_w8fqh(this, _pd5y3);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($cs42k, kj$2ex, va9om) {
    var m1ownv = this['doc']['implementation'];m1ownv && m1ownv['createDocumentType'] && (va9om = m1ownv['createDocumentType']($cs42k, kj$2ex, va9om), this['locator'] && a_wfn(this['locator'], va9om), a_w8fqh(this, va9om));
  }, 'warning': function (av0m1o) {
    console['warn']('[xmldom warning]\t' + av0m1o, a_mownv(this['locator']));
  }, 'error': function (g_35yd) {
    console['error']('[xmldom error]\t' + g_35yd, a_mownv(this['locator']));
  }, 'fatalError': function (e$jr2) {
    throw console['error']('[xmldom fatalError]\t' + e$jr2, a_mownv(this['locator'])), e$jr2;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (p35_y) {
  a_zl9tb['prototype'][p35_y] = function () {
    return null;
  };
});var a_avz90l = require('./cccsax')['XMLReader'],
    a_a09zvo = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_kexj2$;