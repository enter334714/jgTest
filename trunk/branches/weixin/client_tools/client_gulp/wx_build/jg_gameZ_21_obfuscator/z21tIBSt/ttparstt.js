var v = wx.$d;
function zw7crn(ulfbi8) {
  this['options'] = ulfbi8 || { 'locator': {} };
}function zen7ywc(x54, o$gtm, cwen7y) {
  function wz3vyk(h5o4) {
    var apxd9 = x54[h5o4];!apxd9 && a54qpx && (apxd9 = 0x2 == x54['length'] ? function (i8ubf) {
      x54(h5o4, i8ubf);
    } : x54), o4phq[h5o4] = apxd9 && function (a45x9p) {
      apxd9('[xmldom ' + h5o4 + ']\t' + a45x9p + zwncyk(cwen7y));
    } || function () {};
  }if (!x54) {
    if (o$gtm instanceof z$h0ot) return o$gtm;x54 = o$gtm;
  }var o4phq = {},
      a54qpx = x54 instanceof Function;return cwen7y = cwen7y || {}, wz3vyk('warning'), wz3vyk('error'), wz3vyk('fatalError'), o4phq;
}function z$h0ot() {
  this['cdata'] = !0x1;
}function zf9xul(_16b8i, h4oqp0) {
  h4oqp0['lineNumber'] = _16b8i['lineNumber'], h4oqp0['columnNumber'] = _16b8i['columnNumber'];
}function zwncyk(_v216i) {
  return _v216i ? '\x0a@' + (_v216i['systemId'] || '') + '#[line:' + _v216i['lineNumber'] + ',col:' + _v216i['columnNumber'] + ']' : void 0x0;
}function zrc7nw(cyz3k, _z12v, lib61) {
  return 'string' == typeof cyz3k ? cyz3k['substr'](_z12v, lib61) : cyz3k['length'] >= _z12v + lib61 || _z12v ? new java['lang']['String'](cyz3k, _z12v, lib61) + '' : cyz3k;
}function z_i86(uaf9xd, p59ad) {
  uaf9xd['currentElement'] ? uaf9xd['currentElement']['appendChild'](p59ad) : uaf9xd['doc']['appendChild'](p59ad);
}zw7crn['prototype']['parseFromString'] = function (_zv126, hqp45) {
  var p0qoh = this['options'],
      wnck = new zi26v_1(),
      hm$0 = p0qoh['domBuilder'] || new z$h0ot(),
      cwe = p0qoh['errorHandler'],
      q0mh$ = p0qoh['locator'],
      u9flx = p0qoh['xmlns'] || {},
      v_i126 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return q0mh$ && hm$0['setDocumentLocator'](q0mh$), wnck['errorHandler'] = zen7ywc(cwe, hm$0, q0mh$), wnck['domBuilder'] = p0qoh['domBuilder'] || hm$0, /\/x?html?$/['test'](hqp45) && (v_i126['nbsp'] = '\u00a0', v_i126['copy'] = '©', u9flx[''] = 'http://www.w3.org/1999/xhtml'), u9flx['xml'] = u9flx['xml'] || 'http://www.w3.org/XML/1998/namespace', _zv126 ? wnck['parse'](_zv126, u9flx, v_i126) : wnck['errorHandler']['error']('invalid doc source'), hm$0['doc'];
}, z$h0ot['prototype'] = { 'startDocument': function () {
    this['doc'] = new zh$qom0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (wc7ynk, ohm0q$, poh40, w7e) {
    var crnw7 = this['doc'],
        _i1v26 = crnw7['createElementNS'](wc7ynk, poh40 || ohm0q$),
        lxuf9d = w7e['length'];z_i86(this, _i1v26), this['currentElement'] = _i1v26, this['locator'] && zf9xul(this['locator'], _i1v26);for (var rcjn7e = 0x0; lxuf9d > rcjn7e; rcjn7e++) {
      var wc7ynk = w7e['getURI'](rcjn7e),
          v6i_2 = w7e['getValue'](rcjn7e),
          poh40 = w7e['getQName'](rcjn7e),
          ufdlb = crnw7['createAttributeNS'](wc7ynk, poh40);this['locator'] && zf9xul(w7e['getLocator'](rcjn7e), ufdlb), ufdlb['value'] = ufdlb['nodeValue'] = v6i_2, _i1v26['setAttributeNode'](ufdlb);
    }
  }, 'endElement': function () {
    {
      var $qm0oh = this['currentElement'];$qm0oh['tagName'];
    }this['currentElement'] = $qm0oh['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ckwy3z, pxa4) {
    var uil = this['doc']['createProcessingInstruction'](ckwy3z, pxa4);this['locator'] && zf9xul(this['locator'], uil), z_i86(this, uil);
  }, 'ignorableWhitespace': function () {}, 'characters': function (po4q) {
    if (po4q = zrc7nw['apply'](this, arguments)) {
      if (this['cdata']) var xud9a5 = this['doc']['createCDATASection'](po4q);else var xud9a5 = this['doc']['createTextNode'](po4q);this['currentElement'] ? this['currentElement']['appendChild'](xud9a5) : /^\s*$/['test'](po4q) && this['doc']['appendChild'](xud9a5), this['locator'] && zf9xul(this['locator'], xud9a5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wykc7) {
    (this['locator'] = wykc7) && (wykc7['lineNumber'] = 0x0);
  }, 'comment': function (oh04pq) {
    oh04pq = zrc7nw['apply'](this, arguments);var h$m0to = this['doc']['createComment'](oh04pq);this['locator'] && zf9xul(this['locator'], h$m0to), z_i86(this, h$m0to);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kwczy, pah, lfi) {
    var zk32_v = this['doc']['implementation'];if (zk32_v && zk32_v['createDocumentType']) {
      var ew7nr = zk32_v['createDocumentType'](kwczy, pah, lfi);this['locator'] && zf9xul(this['locator'], ew7nr), z_i86(this, ew7nr);
    }
  }, 'warning': function (dp95xa) {
    console['warn']('[xmldom warning]\t' + dp95xa, zwncyk(this['locator']));
  }, 'error': function (ux9df) {
    console['error']('[xmldom error]\t' + ux9df, zwncyk(this['locator']));
  }, 'fatalError': function (zv1_6) {
    throw console['error']('[xmldom fatalError]\t' + zv1_6, zwncyk(this['locator'])), zv1_6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (nerwc7) {
  z$h0ot['prototype'][nerwc7] = function () {
    return null;
  };
});var zi26v_1 = require('./tT12tt')['XMLReader'],
    zh$qom0 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = zw7crn;