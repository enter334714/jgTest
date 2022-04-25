var b = wx.$e;
function ezthrlg(pceo) {
  this['options'] = pceo || { 'locator': {} };
}function eig$3(rhtgz, ks96bu, ku96n) {
  function kdb6(v4_fz) {
    var oepm = rhtgz[v4_fz];!oepm && jn3qi$ && (oepm = 0x2 == rhtgz['length'] ? function (opemc) {
      rhtgz(v4_fz, opemc);
    } : rhtgz), _4fzy[v4_fz] = oepm && function (eocpma) {
      oepm('[xmldom ' + v4_fz + ']\t' + eocpma + epma7o(ku96n));
    } || function () {};
  }if (!rhtgz) {
    if (ks96bu instanceof es6k90) return ks96bu;rhtgz = ks96bu;
  }var _4fzy = {},
      jn3qi$ = rhtgz instanceof Function;return ku96n = ku96n || {}, kdb6('warning'), kdb6('error'), kdb6('fatalError'), _4fzy;
}function es6k90() {
  this['cdata'] = !0x1;
}function eb8d(bsku69, zrgtlh) {
  zrgtlh['lineNumber'] = bsku69['lineNumber'], zrgtlh['columnNumber'] = bsku69['columnNumber'];
}function epma7o(lrfzhy) {
  return lrfzhy ? '\x0a@' + (lrfzhy['systemId'] || '') + '#[line:' + lrfzhy['lineNumber'] + ',col:' + lrfzhy['columnNumber'] + ']' : void 0x0;
}function ex$jig(frzlhy, un6k9s, j3nu) {
  return 'string' == typeof frzlhy ? frzlhy['substr'](un6k9s, j3nu) : frzlhy['length'] >= un6k9s + j3nu || un6k9s ? new java['lang']['String'](frzlhy, un6k9s, j3nu) + '' : frzlhy;
}function e$xjig3(d6580b, amoc_) {
  d6580b['currentElement'] ? d6580b['currentElement']['appendChild'](amoc_) : d6580b['doc']['appendChild'](amoc_);
}ezthrlg['prototype']['parseFromString'] = function (mcpea, tlxi) {
  var kb6u9 = this['options'],
      yrzth = new ezrt(),
      nus = kb6u9['domBuilder'] || new es6k90(),
      ma7v = kb6u9['errorHandler'],
      i$j3x = kb6u9['locator'],
      vyrhf = kb6u9['xmlns'] || {},
      a_v74m = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return i$j3x && nus['setDocumentLocator'](i$j3x), yrzth['errorHandler'] = eig$3(ma7v, nus, i$j3x), yrzth['domBuilder'] = kb6u9['domBuilder'] || nus, /\/x?html?$/['test'](tlxi) && (a_v74m['nbsp'] = '\u00a0', a_v74m['copy'] = '©', vyrhf[''] = 'http://www.w3.org/1999/xhtml'), vyrhf['xml'] = vyrhf['xml'] || 'http://www.w3.org/XML/1998/namespace', mcpea ? yrzth['parse'](mcpea, vyrhf, a_v74m) : yrzth['errorHandler']['error']('invalid doc source'), nus['doc'];
}, es6k90['prototype'] = { 'startDocument': function () {
    this['doc'] = new eu6s9kb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ltyzhr, vhyf, capom7, jxi$g) {
    var thrgzl = this['doc'],
        _4a = thrgzl['createElementNS'](ltyzhr, capom7 || vhyf),
        hgtxrl = jxi$g['length'];e$xjig3(this, _4a), this['currentElement'] = _4a, this['locator'] && eb8d(this['locator'], _4a);for (var hgrx = 0x0; hgtxrl > hgrx; hgrx++) {
      var ltyzhr = jxi$g['getURI'](hgrx),
          vy7f_4 = jxi$g['getValue'](hgrx),
          capom7 = jxi$g['getQName'](hgrx),
          lfyhzr = thrgzl['createAttributeNS'](ltyzhr, capom7);this['locator'] && eb8d(jxi$g['getLocator'](hgrx), lfyhzr), lfyhzr['value'] = lfyhzr['nodeValue'] = vy7f_4, _4a['setAttributeNode'](lfyhzr);
    }
  }, 'endElement': function () {
    {
      var zvrf4y = this['currentElement'];zvrf4y['tagName'];
    }this['currentElement'] = zvrf4y['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_y7v4f, f_vy4z) {
    var p7ca = this['doc']['createProcessingInstruction'](_y7v4f, f_vy4z);this['locator'] && eb8d(this['locator'], p7ca), e$xjig3(this, p7ca);
  }, 'ignorableWhitespace': function () {}, 'characters': function (nu3jq) {
    if (nu3jq = ex$jig['apply'](this, arguments)) {
      if (this['cdata']) var ij3n = this['doc']['createCDATASection'](nu3jq);else var ij3n = this['doc']['createTextNode'](nu3jq);this['currentElement'] ? this['currentElement']['appendChild'](ij3n) : /^\s*$/['test'](nu3jq) && this['doc']['appendChild'](ij3n), this['locator'] && eb8d(this['locator'], ij3n);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vrhfy) {
    (this['locator'] = vrhfy) && (vrhfy['lineNumber'] = 0x0);
  }, 'comment': function (vyf4_7) {
    vyf4_7 = ex$jig['apply'](this, arguments);var ocampe = this['doc']['createComment'](vyf4_7);this['locator'] && eb8d(this['locator'], ocampe), e$xjig3(this, ocampe);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (k09db, mc, o_acm) {
    var yhvzr = this['doc']['implementation'];if (yhvzr && yhvzr['createDocumentType']) {
      var unq93 = yhvzr['createDocumentType'](k09db, mc, o_acm);this['locator'] && eb8d(this['locator'], unq93), e$xjig3(this, unq93);
    }
  }, 'warning': function (quij3n) {
    console['warn']('[xmldom warning]\t' + quij3n, epma7o(this['locator']));
  }, 'error': function (n96ku) {
    console['error']('[xmldom error]\t' + n96ku, epma7o(this['locator']));
  }, 'fatalError': function (glixt$) {
    throw console['error']('[xmldom fatalError]\t' + glixt$, epma7o(this['locator'])), glixt$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (dk56) {
  es6k90['prototype'][dk56] = function () {
    return null;
  };
});var ezrt = require('./eeesax')['XMLReader'],
    eu6s9kb = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ezthrlg;