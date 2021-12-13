var W = wx.$l;
function L9epgu(gvo7e1) {
  this['options'] = gvo7e1 || { 'locator': {} };
}function L9ymcr0(fo9lt5, jhqlt, hkjzaq) {
  function sn_$8(ahkb2j) {
    var ltq5 = fo9lt5[ahkb2j];!ltq5 && yn_x03 && (ltq5 = 0x2 == fo9lt5['length'] ? function (c3r0my) {
      fo9lt5(ahkb2j, c3r0my);
    } : fo9lt5), xn48_s[ahkb2j] = ltq5 && function (x0cr3) {
      ltq5('[xmldom ' + ahkb2j + ']\t' + x0cr3 + L9azqkjh(hkjzaq));
    } || function () {};
  }if (!fo9lt5) {
    if (jhqlt instanceof L9akhqzj) return jhqlt;fo9lt5 = jhqlt;
  }var xn48_s = {},
      yn_x03 = fo9lt5 instanceof Function;return hkjzaq = hkjzaq || {}, sn_$8('warning'), sn_$8('error'), sn_$8('fatalError'), xn48_s;
}function L9akhqzj() {
  this['cdata'] = !0x1;
}function L9m3irc(jakqzh, rim3) {
  rim3['lineNumber'] = jakqzh['lineNumber'], rim3['columnNumber'] = jakqzh['columnNumber'];
}function L9azqkjh(eov1g7) {
  return eov1g7 ? '\x0a@' + (eov1g7['systemId'] || '') + '#[line:' + eov1g7['lineNumber'] + ',col:' + eov1g7['columnNumber'] + ']' : void 0x0;
}function L9qjkzh(ynx_0, jakhq, v1e7g) {
  return 'string' == typeof ynx_0 ? ynx_0['substr'](jakhq, v1e7g) : ynx_0['length'] >= jakhq + v1e7g || jakhq ? new java['lang']['String'](ynx_0, jakhq, v1e7g) + '' : ynx_0;
}function L9jzqakh(_$8n4s, go7v1) {
  _$8n4s['currentElement'] ? _$8n4s['currentElement']['appendChild'](go7v1) : _$8n4s['doc']['appendChild'](go7v1);
}L9epgu['prototype']['parseFromString'] = function (y3_nx0, x03yrn) {
  var d8_$ = this['options'],
      dj2bka = new L9qzthj(),
      gu16ep = d8_$['domBuilder'] || new L9akhqzj(),
      vfo57 = d8_$['errorHandler'],
      nr3x0 = d8_$['locator'],
      gu7e1 = d8_$['xmlns'] || {},
      kqazh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return nr3x0 && gu16ep['setDocumentLocator'](nr3x0), dj2bka['errorHandler'] = L9ymcr0(vfo57, gu16ep, nr3x0), dj2bka['domBuilder'] = d8_$['domBuilder'] || gu16ep, /\/x?html?$/['test'](x03yrn) && (kqazh['nbsp'] = '\u00a0', kqazh['copy'] = '©', gu7e1[''] = 'http://www.w3.org/1999/xhtml'), gu7e1['xml'] = gu7e1['xml'] || 'http://www.w3.org/XML/1998/namespace', y3_nx0 ? dj2bka['parse'](y3_nx0, gu7e1, kqazh) : dj2bka['errorHandler']['error']('invalid doc source'), gu16ep['doc'];
}, L9akhqzj['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9xn4_0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (wi3crm, veog, s4_n8, cim3rw) {
    var ahjkbz = this['doc'],
        nxr3 = ahjkbz['createElementNS'](wi3crm, s4_n8 || veog),
        adsb = cim3rw['length'];L9jzqakh(this, nxr3), this['currentElement'] = nxr3, this['locator'] && L9m3irc(this['locator'], nxr3);for (var i3r = 0x0; adsb > i3r; i3r++) {
      var wi3crm = cim3rw['getURI'](i3r),
          eg7u = cim3rw['getValue'](i3r),
          s4_n8 = cim3rw['getQName'](i3r),
          y_40nx = ahjkbz['createAttributeNS'](wi3crm, s4_n8);this['locator'] && L9m3irc(cim3rw['getLocator'](i3r), y_40nx), y_40nx['value'] = y_40nx['nodeValue'] = eg7u, nxr3['setAttributeNode'](y_40nx);
    }
  }, 'endElement': function () {
    {
      var lqkz = this['currentElement'];lqkz['tagName'];
    }this['currentElement'] = lqkz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (bajhzk, cimr) {
    var qlf59 = this['doc']['createProcessingInstruction'](bajhzk, cimr);this['locator'] && L9m3irc(this['locator'], qlf59), L9jzqakh(this, qlf59);
  }, 'ignorableWhitespace': function () {}, 'characters': function (qhtjzl) {
    if (qhtjzl = L9qjkzh['apply'](this, arguments)) {
      if (this['cdata']) var nr30xy = this['doc']['createCDATASection'](qhtjzl);else var nr30xy = this['doc']['createTextNode'](qhtjzl);this['currentElement'] ? this['currentElement']['appendChild'](nr30xy) : /^\s*$/['test'](qhtjzl) && this['doc']['appendChild'](nr30xy), this['locator'] && L9m3irc(this['locator'], nr30xy);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ofv791) {
    (this['locator'] = ofv791) && (ofv791['lineNumber'] = 0x0);
  }, 'comment': function (x30_) {
    x30_ = L9qjkzh['apply'](this, arguments);var s_$8n4 = this['doc']['createComment'](x30_);this['locator'] && L9m3irc(this['locator'], s_$8n4), L9jzqakh(this, s_$8n4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (f7v9o, _8s$d, rn03y) {
    var fq95 = this['doc']['implementation'];if (fq95 && fq95['createDocumentType']) {
      var n4x8_s = fq95['createDocumentType'](f7v9o, _8s$d, rn03y);this['locator'] && L9m3irc(this['locator'], n4x8_s), L9jzqakh(this, n4x8_s);
    }
  }, 'warning': function (tzqfl5) {
    console['warn']('[xmldom warning]\t' + tzqfl5, L9azqkjh(this['locator']));
  }, 'error': function (kqzaj) {
    console['error']('[xmldom error]\t' + kqzaj, L9azqkjh(this['locator']));
  }, 'fatalError': function (gvu6) {
    throw console['error']('[xmldom fatalError]\t' + gvu6, L9azqkjh(this['locator'])), gvu6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fqzl5) {
  L9akhqzj['prototype'][fqzl5] = function () {
    return null;
  };
});var L9qzthj = require('./lllSAX')['XMLReader'],
    L9xn4_0 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9epgu;