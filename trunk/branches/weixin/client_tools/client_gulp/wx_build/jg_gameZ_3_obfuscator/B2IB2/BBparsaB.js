var D = wx.$b;
function brxgvk(u$zw) {
  this['options'] = u$zw || { 'locator': {} };
}function bw47y(r9qg65, awy7d, c1hi) {
  function iht2ce(wd_y74) {
    var nu8$z3 = r9qg65[wd_y74];!nu8$z3 && iceh && (nu8$z3 = 0x2 == r9qg65['length'] ? function (sci12) {
      r9qg65(wd_y74, sci12);
    } : r9qg65), _m01s[wd_y74] = nu8$z3 && function (csmf1i) {
      nu8$z3('[xmldom ' + wd_y74 + ']\t' + csmf1i + bejloq9(c1hi));
    } || function () {};
  }if (!r9qg65) {
    if (awy7d instanceof ble2o) return awy7d;r9qg65 = awy7d;
  }var _m01s = {},
      iceh = r9qg65 instanceof Function;return c1hi = c1hi || {}, iht2ce('warning'), iht2ce('error'), iht2ce('fatalError'), _m01s;
}function ble2o() {
  this['cdata'] = !0x1;
}function bhelot(a8uz$, e2ltoh) {
  e2ltoh['lineNumber'] = a8uz$['lineNumber'], e2ltoh['columnNumber'] = a8uz$['columnNumber'];
}function bejloq9(jlqo9e) {
  return jlqo9e ? '\x0a@' + (jlqo9e['systemId'] || '') + '#[line:' + jlqo9e['lineNumber'] + ',col:' + jlqo9e['columnNumber'] + ']' : void 0x0;
}function brgvkxp(lojt, w7aud, uaw7yd) {
  return 'string' == typeof lojt ? lojt['substr'](w7aud, uaw7yd) : lojt['length'] >= w7aud + uaw7yd || w7aud ? new java['lang']['String'](lojt, w7aud, uaw7yd) + '' : lojt;
}function bcfsm10(u$zway, cieth) {
  u$zway['currentElement'] ? u$zway['currentElement']['appendChild'](cieth) : u$zway['doc']['appendChild'](cieth);
}brxgvk['prototype']['parseFromString'] = function (s1mfi, y7$uw) {
  var _47wyd = this['options'],
      fsm0_4 = new bejo2(),
      _74d0w = _47wyd['domBuilder'] || new ble2o(),
      tqeo = _47wyd['errorHandler'],
      q9le = _47wyd['locator'],
      q5g96j = _47wyd['xmlns'] || {},
      y74da = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return q9le && _74d0w['setDocumentLocator'](q9le), fsm0_4['errorHandler'] = bw47y(tqeo, _74d0w, q9le), fsm0_4['domBuilder'] = _47wyd['domBuilder'] || _74d0w, /\/x?html?$/['test'](y7$uw) && (y74da['nbsp'] = '\u00a0', y74da['copy'] = '©', q5g96j[''] = 'http://www.w3.org/1999/xhtml'), q5g96j['xml'] = q5g96j['xml'] || 'http://www.w3.org/XML/1998/namespace', s1mfi ? fsm0_4['parse'](s1mfi, q5g96j, y74da) : fsm0_4['errorHandler']['error']('invalid doc source'), _74d0w['doc'];
}, ble2o['prototype'] = { 'startDocument': function () {
    this['doc'] = new bht1c2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (az8u$, znu3, eqtlo, qjle) {
    var l9eojq = this['doc'],
        k9g6r5 = l9eojq['createElementNS'](az8u$, eqtlo || znu3),
        ihoet2 = qjle['length'];bcfsm10(this, k9g6r5), this['currentElement'] = k9g6r5, this['locator'] && bhelot(this['locator'], k9g6r5);for (var u8$zay = 0x0; ihoet2 > u8$zay; u8$zay++) {
      var az8u$ = qjle['getURI'](u8$zay),
          uzw$ay = qjle['getValue'](u8$zay),
          eqtlo = qjle['getQName'](u8$zay),
          vg56k = l9eojq['createAttributeNS'](az8u$, eqtlo);this['locator'] && bhelot(qjle['getLocator'](u8$zay), vg56k), vg56k['value'] = vg56k['nodeValue'] = uzw$ay, k9g6r5['setAttributeNode'](vg56k);
    }
  }, 'endElement': function () {
    {
      var l9joeq = this['currentElement'];l9joeq['tagName'];
    }this['currentElement'] = l9joeq['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (lj5q96, gkpvrx) {
    var _fm4s = this['doc']['createProcessingInstruction'](lj5q96, gkpvrx);this['locator'] && bhelot(this['locator'], _fm4s), bcfsm10(this, _fm4s);
  }, 'ignorableWhitespace': function () {}, 'characters': function (a$zy8) {
    if (a$zy8 = brgvkxp['apply'](this, arguments)) {
      if (this['cdata']) var lhoe = this['doc']['createCDATASection'](a$zy8);else var lhoe = this['doc']['createTextNode'](a$zy8);this['currentElement'] ? this['currentElement']['appendChild'](lhoe) : /^\s*$/['test'](a$zy8) && this['doc']['appendChild'](lhoe), this['locator'] && bhelot(this['locator'], lhoe);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (lqo9je) {
    (this['locator'] = lqo9je) && (lqo9je['lineNumber'] = 0x0);
  }, 'comment': function (oleh) {
    oleh = brgvkxp['apply'](this, arguments);var rvkp6 = this['doc']['createComment'](oleh);this['locator'] && bhelot(this['locator'], rvkp6), bcfsm10(this, rvkp6);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dw4, ydaw7u, $awy7u) {
    var $zu8y = this['doc']['implementation'];if ($zu8y && $zu8y['createDocumentType']) {
      var ch12i = $zu8y['createDocumentType'](dw4, ydaw7u, $awy7u);this['locator'] && bhelot(this['locator'], ch12i), bcfsm10(this, ch12i);
    }
  }, 'warning': function (r56kg9) {
    console['warn']('[xmldom warning]\t' + r56kg9, bejloq9(this['locator']));
  }, 'error': function (gj965q) {
    console['error']('[xmldom error]\t' + gj965q, bejloq9(this['locator']));
  }, 'fatalError': function (w$zy) {
    throw console['error']('[xmldom fatalError]\t' + w$zy, bejloq9(this['locator'])), w$zy;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j59ol) {
  ble2o['prototype'][j59ol] = function () {
    return null;
  };
});var bejo2 = require('./BBcBB')['XMLReader'],
    bht1c2 = exports['DOMImplementation'] = require('./BBDOBB')['DOMImplementation'];exports['XMLSerializer'] = require('./BBDOBB')['XMLSerializer'], exports['DOMParser'] = brxgvk;