var B = wx.$z;
function zetozad(xh19pg) {
  this['options'] = xh19pg || { 'locator': {} };
}function ztszaoe(iq37m, yk8r_b, uw25_r) {
  function p46(fgp) {
    var as9xh = iq37m[fgp];!as9xh && mqji$ && (as9xh = 0x2 == iq37m['length'] ? function (aetzs) {
      iq37m(fgp, aetzs);
    } : iq37m), x1ea[fgp] = as9xh && function (oedtyz) {
      as9xh('[xmldom ' + fgp + ']\t' + oedtyz + zu_wr(uw25_r));
    } || function () {};
  }if (!iq37m) {
    if (yk8r_b instanceof zytbdo) return yk8r_b;iq37m = yk8r_b;
  }var x1ea = {},
      mqji$ = iq37m instanceof Function;return uw25_r = uw25_r || {}, p46('warning'), p46('error'), p46('fatalError'), x1ea;
}function zytbdo() {
  this['cdata'] = !0x1;
}function zsx9ph(qi73mn, lvf7in) {
  lvf7in['lineNumber'] = qi73mn['lineNumber'], lvf7in['columnNumber'] = qi73mn['columnNumber'];
}function zu_wr(btydk) {
  return btydk ? '\x0a@' + (btydk['systemId'] || '') + '#[line:' + btydk['lineNumber'] + ',col:' + btydk['columnNumber'] + ']' : void 0x0;
}function zzsteo(mi7$3q, q$jm3i, es1xa9) {
  return 'string' == typeof mi7$3q ? mi7$3q['substr'](q$jm3i, es1xa9) : mi7$3q['length'] >= q$jm3i + es1xa9 || q$jm3i ? new java['lang']['String'](mi7$3q, q$jm3i, es1xa9) + '' : mi7$3q;
}function zps1h9(imvnl7, vp64g) {
  imvnl7['currentElement'] ? imvnl7['currentElement']['appendChild'](vp64g) : imvnl7['doc']['appendChild'](vp64g);
}zetozad['prototype']['parseFromString'] = function (q7m$, q3nim7) {
  var mlnvi7 = this['options'],
      ur_52w = new zaosetz(),
      ur2_w = mlnvi7['domBuilder'] || new zytbdo(),
      rk_8y = mlnvi7['errorHandler'],
      g4h19p = mlnvi7['locator'],
      $3m7i = mlnvi7['xmlns'] || {},
      yo8bk = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return g4h19p && ur2_w['setDocumentLocator'](g4h19p), ur_52w['errorHandler'] = ztszaoe(rk_8y, ur2_w, g4h19p), ur_52w['domBuilder'] = mlnvi7['domBuilder'] || ur2_w, /\/x?html?$/['test'](q3nim7) && (yo8bk['nbsp'] = '\u00a0', yo8bk['copy'] = '©', $3m7i[''] = 'http://www.w3.org/1999/xhtml'), $3m7i['xml'] = $3m7i['xml'] || 'http://www.w3.org/XML/1998/namespace', q7m$ ? ur_52w['parse'](q7m$, $3m7i, yo8bk) : ur_52w['errorHandler']['error']('invalid doc source'), ur2_w['doc'];
}, zytbdo['prototype'] = { 'startDocument': function () {
    this['doc'] = new zinvfl()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (e1asx, x9zea, dkoytz, okzyt) {
    var zesx9 = this['doc'],
        txesz = zesx9['createElementNS'](e1asx, dkoytz || x9zea),
        nimq73 = okzyt['length'];zps1h9(this, txesz), this['currentElement'] = txesz, this['locator'] && zsx9ph(this['locator'], txesz);for (var nlmvi7 = 0x0; nimq73 > nlmvi7; nlmvi7++) {
      var e1asx = okzyt['getURI'](nlmvi7),
          eosza = okzyt['getValue'](nlmvi7),
          dkoytz = okzyt['getQName'](nlmvi7),
          dboky = zesx9['createAttributeNS'](e1asx, dkoytz);this['locator'] && zsx9ph(okzyt['getLocator'](nlmvi7), dboky), dboky['value'] = dboky['nodeValue'] = eosza, txesz['setAttributeNode'](dboky);
    }
  }, 'endElement': function () {
    {
      var aes9xz = this['currentElement'];aes9xz['tagName'];
    }this['currentElement'] = aes9xz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fgvl6, kdby8o) {
    var fpg46h = this['doc']['createProcessingInstruction'](fgvl6, kdby8o);this['locator'] && zsx9ph(this['locator'], fpg46h), zps1h9(this, fpg46h);
  }, 'ignorableWhitespace': function () {}, 'characters': function (oeast) {
    if (oeast = zzsteo['apply'](this, arguments)) {
      if (this['cdata']) var i7nm3q = this['doc']['createCDATASection'](oeast);else var i7nm3q = this['doc']['createTextNode'](oeast);this['currentElement'] ? this['currentElement']['appendChild'](i7nm3q) : /^\s*$/['test'](oeast) && this['doc']['appendChild'](i7nm3q), this['locator'] && zsx9ph(this['locator'], i7nm3q);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xs9e1) {
    (this['locator'] = xs9e1) && (xs9e1['lineNumber'] = 0x0);
  }, 'comment': function (m7lin) {
    m7lin = zzsteo['apply'](this, arguments);var deoyt = this['doc']['createComment'](m7lin);this['locator'] && zsx9ph(this['locator'], deoyt), zps1h9(this, deoyt);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_520u, eas9x, odybt) {
    var eatzod = this['doc']['implementation'];if (eatzod && eatzod['createDocumentType']) {
      var ahs1x9 = eatzod['createDocumentType'](_520u, eas9x, odybt);this['locator'] && zsx9ph(this['locator'], ahs1x9), zps1h9(this, ahs1x9);
    }
  }, 'warning': function (vf4pg) {
    console['warn']('[xmldom warning]\t' + vf4pg, zu_wr(this['locator']));
  }, 'error': function (o8dbk) {
    console['error']('[xmldom error]\t' + o8dbk, zu_wr(this['locator']));
  }, 'fatalError': function (lf76v) {
    throw console['error']('[xmldom fatalError]\t' + lf76v, zu_wr(this['locator'])), lf76v;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zeaod) {
  zytbdo['prototype'][zeaod] = function () {
    return null;
  };
});var zaosetz = require('./zzczz')['XMLReader'],
    zinvfl = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zetozad;