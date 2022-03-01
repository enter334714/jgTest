var H = wx.$F;
function fb7$xza(tx7az) {
  this['options'] = tx7az || { 'locator': {} };
}function fscd4kl(lk4scd, p_9uys, tn85va) {
  function clgh1w(qmb3r) {
    var klhg4c = lk4scd[qmb3r];!klhg4c && p_yi96 && (klhg4c = 0x2 == lk4scd['length'] ? function (hgcwl1) {
      lk4scd(qmb3r, hgcwl1);
    } : lk4scd), $7abz[qmb3r] = klhg4c && function (tza) {
      klhg4c('[xmldom ' + qmb3r + ']\t' + tza + fwgl1hc(tn85va));
    } || function () {};
  }if (!lk4scd) {
    if (p_9uys instanceof fp_s) return p_9uys;lk4scd = p_9uys;
  }var $7abz = {},
      p_yi96 = lk4scd instanceof Function;return tn85va = tn85va || {}, clgh1w('warning'), clgh1w('error'), clgh1w('fatalError'), $7abz;
}function fp_s() {
  this['cdata'] = !0x1;
}function fy96up(vn5z, dk4csl) {
  dk4csl['lineNumber'] = vn5z['lineNumber'], dk4csl['columnNumber'] = vn5z['columnNumber'];
}function fwgl1hc(whlc1) {
  return whlc1 ? '\x0a@' + (whlc1['systemId'] || '') + '#[line:' + whlc1['lineNumber'] + ',col:' + whlc1['columnNumber'] + ']' : void 0x0;
}function fd4skc(je1258, tvaz7, ej51) {
  return 'string' == typeof je1258 ? je1258['substr'](tvaz7, ej51) : je1258['length'] >= tvaz7 + ej51 || tvaz7 ? new java['lang']['String'](je1258, tvaz7, ej51) + '' : je1258;
}function fhg1we2(n58a, cd4skl) {
  n58a['currentElement'] ? n58a['currentElement']['appendChild'](cd4skl) : n58a['doc']['appendChild'](cd4skl);
}fb7$xza['prototype']['parseFromString'] = function (u_y6p, az$7n) {
  var _9puy6 = this['options'],
      zb$ = new fi6_9o(),
      vzna7t = _9puy6['domBuilder'] || new fp_s(),
      u69y_ = _9puy6['errorHandler'],
      g1w2 = _9puy6['locator'],
      q3b0$ = _9puy6['xmlns'] || {},
      ewj28 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return g1w2 && vzna7t['setDocumentLocator'](g1w2), zb$['errorHandler'] = fscd4kl(u69y_, vzna7t, g1w2), zb$['domBuilder'] = _9puy6['domBuilder'] || vzna7t, /\/x?html?$/['test'](az$7n) && (ewj28['nbsp'] = '\u00a0', ewj28['copy'] = '©', q3b0$[''] = 'http://www.w3.org/1999/xhtml'), q3b0$['xml'] = q3b0$['xml'] || 'http://www.w3.org/XML/1998/namespace', u_y6p ? zb$['parse'](u_y6p, q3b0$, ewj28) : zb$['errorHandler']['error']('invalid doc source'), vzna7t['doc'];
}, fp_s['prototype'] = { 'startDocument': function () {
    this['doc'] = new fghwclk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pd49s, at7nxz, j2eg1w, j8e1w2) {
    var tzn5va = this['doc'],
        whclkg = tzn5va['createElementNS'](pd49s, j2eg1w || at7nxz),
        w2h1g = j8e1w2['length'];fhg1we2(this, whclkg), this['currentElement'] = whclkg, this['locator'] && fy96up(this['locator'], whclkg);for (var ax7tn = 0x0; w2h1g > ax7tn; ax7tn++) {
      var pd49s = j8e1w2['getURI'](ax7tn),
          yu_p9s = j8e1w2['getValue'](ax7tn),
          j2eg1w = j8e1w2['getQName'](ax7tn),
          yp_9i = tzn5va['createAttributeNS'](pd49s, j2eg1w);this['locator'] && fy96up(j8e1w2['getLocator'](ax7tn), yp_9i), yp_9i['value'] = yp_9i['nodeValue'] = yu_p9s, whclkg['setAttributeNode'](yp_9i);
    }
  }, 'endElement': function () {
    {
      var z$0bx = this['currentElement'];z$0bx['tagName'];
    }this['currentElement'] = z$0bx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (nat8v5, pu4skd) {
    var azv5tn = this['doc']['createProcessingInstruction'](nat8v5, pu4skd);this['locator'] && fy96up(this['locator'], azv5tn), fhg1we2(this, azv5tn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (m0qb3r) {
    if (m0qb3r = fd4skc['apply'](this, arguments)) {
      if (this['cdata']) var zba7x$ = this['doc']['createCDATASection'](m0qb3r);else var zba7x$ = this['doc']['createTextNode'](m0qb3r);this['currentElement'] ? this['currentElement']['appendChild'](zba7x$) : /^\s*$/['test'](m0qb3r) && this['doc']['appendChild'](zba7x$), this['locator'] && fy96up(this['locator'], zba7x$);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ysu) {
    (this['locator'] = ysu) && (ysu['lineNumber'] = 0x0);
  }, 'comment': function (bmx$03) {
    bmx$03 = fd4skc['apply'](this, arguments);var nav85t = this['doc']['createComment'](bmx$03);this['locator'] && fy96up(this['locator'], nav85t), fhg1we2(this, nav85t);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (z5atn, u9sd4p, p4ud) {
    var nvat7 = this['doc']['implementation'];if (nvat7 && nvat7['createDocumentType']) {
      var jnv5 = nvat7['createDocumentType'](z5atn, u9sd4p, p4ud);this['locator'] && fy96up(this['locator'], jnv5), fhg1we2(this, jnv5);
    }
  }, 'warning': function (et5j8v) {
    console['warn']('[xmldom warning]\t' + et5j8v, fwgl1hc(this['locator']));
  }, 'error': function (s4) {
    console['error']('[xmldom error]\t' + s4, fwgl1hc(this['locator']));
  }, 'fatalError': function (y9spu) {
    throw console['error']('[xmldom fatalError]\t' + y9spu, fwgl1hc(this['locator'])), y9spu;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (anxzt7) {
  fp_s['prototype'][anxzt7] = function () {
    return null;
  };
});var fi6_9o = require('./z999z999cz999z999')['XMLReader'],
    fghwclk = exports['DOMImplementation'] = require('./z999z999DOz999z999')['DOMImplementation'];exports['XMLSerializer'] = require('./z999z999DOz999z999')['XMLSerializer'], exports['DOMParser'] = fb7$xza;