var K = wx.$S;
function spj1sq(mi_2x) {
  this['options'] = mi_2x || { 'locator': {} };
}function sh5sqpy(jq18p, wo9vzk, ozv3r) {
  function x2_ci(dyha5$) {
    var ae$du4 = jq18p[dyha5$];!ae$du4 && sgy && (ae$du4 = 0x2 == jq18p['length'] ? function (_k0cw) {
      jq18p(dyha5$, _k0cw);
    } : jq18p), g68b[dyha5$] = ae$du4 && function (ysgqjp) {
      ae$du4('[xmldom ' + dyha5$ + ']\t' + ysgqjp + sove(ozv3r));
    } || function () {};
  }if (!jq18p) {
    if (wo9vzk instanceof sgpsqj1) return wo9vzk;jq18p = wo9vzk;
  }var g68b = {},
      sgy = jq18p instanceof Function;return ozv3r = ozv3r || {}, x2_ci('warning'), x2_ci('error'), x2_ci('fatalError'), g68b;
}function sgpsqj1() {
  this['cdata'] = !0x1;
}function sckw_90(xi2_n, i_c2x) {
  i_c2x['lineNumber'] = xi2_n['lineNumber'], i_c2x['columnNumber'] = xi2_n['columnNumber'];
}function sove(r3ozuv) {
  return r3ozuv ? '\x0a@' + (r3ozuv['systemId'] || '') + '#[line:' + r3ozuv['lineNumber'] + ',col:' + r3ozuv['columnNumber'] + ']' : void 0x0;
}function sr3evo(jsqy, xi2nm, w0_9) {
  return 'string' == typeof jsqy ? jsqy['substr'](xi2nm, w0_9) : jsqy['length'] >= xi2nm + w0_9 || xi2nm ? new java['lang']['String'](jsqy, xi2nm, w0_9) + '' : jsqy;
}function su4dea(q81jbg, g1jq) {
  q81jbg['currentElement'] ? q81jbg['currentElement']['appendChild'](g1jq) : q81jbg['doc']['appendChild'](g1jq);
}spj1sq['prototype']['parseFromString'] = function (gq8j1, wkzv9) {
  var $4h5ad = this['options'],
      cx0w_i = new sjq8gb(),
      cmi_0 = $4h5ad['domBuilder'] || new sgpsqj1(),
      qpyj = $4h5ad['errorHandler'],
      _mx0i = $4h5ad['locator'],
      a4e$ru = $4h5ad['xmlns'] || {},
      c0xwi_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _mx0i && cmi_0['setDocumentLocator'](_mx0i), cx0w_i['errorHandler'] = sh5sqpy(qpyj, cmi_0, _mx0i), cx0w_i['domBuilder'] = $4h5ad['domBuilder'] || cmi_0, /\/x?html?$/['test'](wkzv9) && (c0xwi_['nbsp'] = '\u00a0', c0xwi_['copy'] = '©', a4e$ru[''] = 'http://www.w3.org/1999/xhtml'), a4e$ru['xml'] = a4e$ru['xml'] || 'http://www.w3.org/XML/1998/namespace', gq8j1 ? cx0w_i['parse'](gq8j1, a4e$ru, c0xwi_) : cx0w_i['errorHandler']['error']('invalid doc source'), cmi_0['doc'];
}, sgpsqj1['prototype'] = { 'startDocument': function () {
    this['doc'] = new sc_ix2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (vz9ok3, ur3e, k9_wc, l6) {
    var pj1g = this['doc'],
        shp5y = pj1g['createElementNS'](vz9ok3, k9_wc || ur3e),
        r$3u = l6['length'];su4dea(this, shp5y), this['currentElement'] = shp5y, this['locator'] && sckw_90(this['locator'], shp5y);for (var ic_x0 = 0x0; r$3u > ic_x0; ic_x0++) {
      var vz9ok3 = l6['getURI'](ic_x0),
          ua4re$ = l6['getValue'](ic_x0),
          k9_wc = l6['getQName'](ic_x0),
          nmtx = pj1g['createAttributeNS'](vz9ok3, k9_wc);this['locator'] && sckw_90(l6['getLocator'](ic_x0), nmtx), nmtx['value'] = nmtx['nodeValue'] = ua4re$, shp5y['setAttributeNode'](nmtx);
    }
  }, 'endElement': function () {
    {
      var $45dae = this['currentElement'];$45dae['tagName'];
    }this['currentElement'] = $45dae['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (k3voz, n2itm) {
    var a$reu = this['doc']['createProcessingInstruction'](k3voz, n2itm);this['locator'] && sckw_90(this['locator'], a$reu), su4dea(this, a$reu);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hpy5q) {
    if (hpy5q = sr3evo['apply'](this, arguments)) {
      if (this['cdata']) var _cmxi = this['doc']['createCDATASection'](hpy5q);else var _cmxi = this['doc']['createTextNode'](hpy5q);this['currentElement'] ? this['currentElement']['appendChild'](_cmxi) : /^\s*$/['test'](hpy5q) && this['doc']['appendChild'](_cmxi), this['locator'] && sckw_90(this['locator'], _cmxi);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (de4u$a) {
    (this['locator'] = de4u$a) && (de4u$a['lineNumber'] = 0x0);
  }, 'comment': function (_0mic) {
    _0mic = sr3evo['apply'](this, arguments);var urae$ = this['doc']['createComment'](_0mic);this['locator'] && sckw_90(this['locator'], urae$), su4dea(this, urae$);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (a$5d4h, a$5dhy, vz3ou) {
    var psdyh5 = this['doc']['implementation'];if (psdyh5 && psdyh5['createDocumentType']) {
      var jqps = psdyh5['createDocumentType'](a$5d4h, a$5dhy, vz3ou);this['locator'] && sckw_90(this['locator'], jqps), su4dea(this, jqps);
    }
  }, 'warning': function (c9k0wz) {
    console['warn']('[xmldom warning]\t' + c9k0wz, sove(this['locator']));
  }, 'error': function (d54$h) {
    console['error']('[xmldom error]\t' + d54$h, sove(this['locator']));
  }, 'fatalError': function (eour) {
    throw console['error']('[xmldom fatalError]\t' + eour, sove(this['locator'])), eour;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ozvk9w) {
  sgpsqj1['prototype'][ozvk9w] = function () {
    return null;
  };
});var sjq8gb = require('./sS12ss')['XMLReader'],
    sc_ix2 = exports['DOMImplementation'] = require('./ssDOss')['DOMImplementation'];exports['XMLSerializer'] = require('./ssDOss')['XMLSerializer'], exports['DOMParser'] = spj1sq;