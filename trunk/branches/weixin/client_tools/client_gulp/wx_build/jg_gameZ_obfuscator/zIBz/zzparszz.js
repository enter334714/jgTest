var B = wx.$z;
function zjm3q$i(nmi3l) {
  this['options'] = nmi3l || { 'locator': {} };
}function zjiq3m$(h9xsa, w_u02, ae1sx9) {
  function qni3m(vnf76l) {
    var $ij3 = h9xsa[vnf76l];!$ij3 && h4pgf && ($ij3 = 0x2 == h9xsa['length'] ? function (xh9as) {
      h9xsa(vnf76l, xh9as);
    } : h9xsa), j3iqm$[vnf76l] = $ij3 && function (aztoe) {
      $ij3('[xmldom ' + vnf76l + ']\t' + aztoe + ztbokdy(ae1sx9));
    } || function () {};
  }if (!h9xsa) {
    if (w_u02 instanceof ztdbo) return w_u02;h9xsa = w_u02;
  }var j3iqm$ = {},
      h4pgf = h9xsa instanceof Function;return ae1sx9 = ae1sx9 || {}, qni3m('warning'), qni3m('error'), qni3m('fatalError'), j3iqm$;
}function ztdbo() {
  this['cdata'] = !0x1;
}function zflvg46(vi7fn, _y8b) {
  _y8b['lineNumber'] = vi7fn['lineNumber'], _y8b['columnNumber'] = vi7fn['columnNumber'];
}function ztbokdy(u502) {
  return u502 ? '\x0a@' + (u502['systemId'] || '') + '#[line:' + u502['lineNumber'] + ',col:' + u502['columnNumber'] + ']' : void 0x0;
}function zx9hgp1(etdoa, tdob, v7lfi) {
  return 'string' == typeof etdoa ? etdoa['substr'](tdob, v7lfi) : etdoa['length'] >= tdob + v7lfi || tdob ? new java['lang']['String'](etdoa, tdob, v7lfi) + '' : etdoa;
}function zxzet(qim$7, xz9es) {
  qim$7['currentElement'] ? qim$7['currentElement']['appendChild'](xz9es) : qim$7['doc']['appendChild'](xz9es);
}zjm3q$i['prototype']['parseFromString'] = function (n3i, aexsz) {
  var _8ur = this['options'],
      hpf6 = new zvnfl76(),
      aetz = _8ur['domBuilder'] || new ztdbo(),
      l7fn6v = _8ur['errorHandler'],
      fl7nvi = _8ur['locator'],
      uw025_ = _8ur['xmlns'] || {},
      y8kdob = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fl7nvi && aetz['setDocumentLocator'](fl7nvi), hpf6['errorHandler'] = zjiq3m$(l7fn6v, aetz, fl7nvi), hpf6['domBuilder'] = _8ur['domBuilder'] || aetz, /\/x?html?$/['test'](aexsz) && (y8kdob['nbsp'] = '\u00a0', y8kdob['copy'] = '©', uw025_[''] = 'http://www.w3.org/1999/xhtml'), uw025_['xml'] = uw025_['xml'] || 'http://www.w3.org/XML/1998/namespace', n3i ? hpf6['parse'](n3i, uw025_, y8kdob) : hpf6['errorHandler']['error']('invalid doc source'), aetz['doc'];
}, ztdbo['prototype'] = { 'startDocument': function () {
    this['doc'] = new zgp64hf()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (byd, ru285, wu50_, v6g4fl) {
    var xe1sa9 = this['doc'],
        mqi3n7 = xe1sa9['createElementNS'](byd, wu50_ || ru285),
        n7fvi = v6g4fl['length'];zxzet(this, mqi3n7), this['currentElement'] = mqi3n7, this['locator'] && zflvg46(this['locator'], mqi3n7);for (var ydtbo = 0x0; n7fvi > ydtbo; ydtbo++) {
      var byd = v6g4fl['getURI'](ydtbo),
          pg16h4 = v6g4fl['getValue'](ydtbo),
          wu50_ = v6g4fl['getQName'](ydtbo),
          sezx = xe1sa9['createAttributeNS'](byd, wu50_);this['locator'] && zflvg46(v6g4fl['getLocator'](ydtbo), sezx), sezx['value'] = sezx['nodeValue'] = pg16h4, mqi3n7['setAttributeNode'](sezx);
    }
  }, 'endElement': function () {
    {
      var zta = this['currentElement'];zta['tagName'];
    }this['currentElement'] = zta['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tdkboy, fgvp4) {
    var mn3i7l = this['doc']['createProcessingInstruction'](tdkboy, fgvp4);this['locator'] && zflvg46(this['locator'], mn3i7l), zxzet(this, mn3i7l);
  }, 'ignorableWhitespace': function () {}, 'characters': function (toadz) {
    if (toadz = zx9hgp1['apply'](this, arguments)) {
      if (this['cdata']) var r_b258 = this['doc']['createCDATASection'](toadz);else var r_b258 = this['doc']['createTextNode'](toadz);this['currentElement'] ? this['currentElement']['appendChild'](r_b258) : /^\s*$/['test'](toadz) && this['doc']['appendChild'](r_b258), this['locator'] && zflvg46(this['locator'], r_b258);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (in7vlf) {
    (this['locator'] = in7vlf) && (in7vlf['lineNumber'] = 0x0);
  }, 'comment': function (rdby) {
    rdby = zx9hgp1['apply'](this, arguments);var px1h9 = this['doc']['createComment'](rdby);this['locator'] && zflvg46(this['locator'], px1h9), zxzet(this, px1h9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (u_5r8, a1hsx, p6gf4v) {
    var jiq3m = this['doc']['implementation'];if (jiq3m && jiq3m['createDocumentType']) {
      var n6lv7f = jiq3m['createDocumentType'](u_5r8, a1hsx, p6gf4v);this['locator'] && zflvg46(this['locator'], n6lv7f), zxzet(this, n6lv7f);
    }
  }, 'warning': function (bodytk) {
    console['warn']('[xmldom warning]\t' + bodytk, ztbokdy(this['locator']));
  }, 'error': function (xphs91) {
    console['error']('[xmldom error]\t' + xphs91, ztbokdy(this['locator']));
  }, 'fatalError': function (kdtoz) {
    throw console['error']('[xmldom fatalError]\t' + kdtoz, ztbokdy(this['locator'])), kdtoz;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_25wru) {
  ztdbo['prototype'][_25wru] = function () {
    return null;
  };
});var zvnfl76 = require('./zzczz')['XMLReader'],
    zgp64hf = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zjm3q$i;