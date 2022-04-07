var v = wx.$d;
function zimedh6(h6jn) {
  this['options'] = h6jn || { 'locator': {} };
}function zqzgf0k(gk0za, gfukqt, z8xba0) {
  function zb81a(z0fg) {
    var zga0k = gk0za[z0fg];!zga0k && wp$r1v && (zga0k = 0x2 == gk0za['length'] ? function (n43) {
      gk0za(z0fg, n43);
    } : gk0za), igufkt[z0fg] = zga0k && function (xbr1w8) {
      zga0k('[xmldom ' + z0fg + ']\t' + xbr1w8 + zhdie6(z8xba0));
    } || function () {};
  }if (!gk0za) {
    if (gfukqt instanceof zh6emid) return gfukqt;gk0za = gfukqt;
  }var igufkt = {},
      wp$r1v = gk0za instanceof Function;return z8xba0 = z8xba0 || {}, zb81a('warning'), zb81a('error'), zb81a('fatalError'), igufkt;
}function zh6emid() {
  this['cdata'] = !0x1;
}function zz81abx(me6ui, gk0qft) {
  gk0qft['lineNumber'] = me6ui['lineNumber'], gk0qft['columnNumber'] = me6ui['columnNumber'];
}function zhdie6(xr8$w1) {
  return xr8$w1 ? '\x0a@' + (xr8$w1['systemId'] || '') + '#[line:' + xr8$w1['lineNumber'] + ',col:' + xr8$w1['columnNumber'] + ']' : void 0x0;
}function zxb80z(njh4, x1rb8, q0ft) {
  return 'string' == typeof njh4 ? njh4['substr'](x1rb8, q0ft) : njh4['length'] >= x1rb8 + q0ft || x1rb8 ? new java['lang']['String'](njh4, x1rb8, q0ft) + '' : njh4;
}function zhdj6m(z81bax, z0xaq) {
  z81bax['currentElement'] ? z81bax['currentElement']['appendChild'](z0xaq) : z81bax['doc']['appendChild'](z0xaq);
}zimedh6['prototype']['parseFromString'] = function (a0zkqg, jn93_4) {
  var j4mhn = this['options'],
      r1$w8p = new zn3c9_4(),
      _o3c94 = j4mhn['domBuilder'] || new zh6emid(),
      nhe = j4mhn['errorHandler'],
      h6n4mj = j4mhn['locator'],
      nj64m = j4mhn['xmlns'] || {},
      mn6ejh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return h6n4mj && _o3c94['setDocumentLocator'](h6n4mj), r1$w8p['errorHandler'] = zqzgf0k(nhe, _o3c94, h6n4mj), r1$w8p['domBuilder'] = j4mhn['domBuilder'] || _o3c94, /\/x?html?$/['test'](jn93_4) && (mn6ejh['nbsp'] = '\u00a0', mn6ejh['copy'] = '©', nj64m[''] = 'http://www.w3.org/1999/xhtml'), nj64m['xml'] = nj64m['xml'] || 'http://www.w3.org/XML/1998/namespace', a0zkqg ? r1$w8p['parse'](a0zkqg, nj64m, mn6ejh) : r1$w8p['errorHandler']['error']('invalid doc source'), _o3c94['doc'];
}, zh6emid['prototype'] = { 'startDocument': function () {
    this['doc'] = new zxba0z()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xarb81, efdtui, x1zb, $yw7) {
    var tifgku = this['doc'],
        uedtif = tifgku['createElementNS'](xarb81, x1zb || efdtui),
        ifgtuk = $yw7['length'];zhdj6m(this, uedtif), this['currentElement'] = uedtif, this['locator'] && zz81abx(this['locator'], uedtif);for (var j4mhn6 = 0x0; ifgtuk > j4mhn6; j4mhn6++) {
      var xarb81 = $yw7['getURI'](j4mhn6),
          imtdeu = $yw7['getValue'](j4mhn6),
          x1zb = $yw7['getQName'](j4mhn6),
          xq0a = tifgku['createAttributeNS'](xarb81, x1zb);this['locator'] && zz81abx($yw7['getLocator'](j4mhn6), xq0a), xq0a['value'] = xq0a['nodeValue'] = imtdeu, uedtif['setAttributeNode'](xq0a);
    }
  }, 'endElement': function () {
    {
      var etmiud = this['currentElement'];etmiud['tagName'];
    }this['currentElement'] = etmiud['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ediftu, x81wbr) {
    var _j49hn = this['doc']['createProcessingInstruction'](ediftu, x81wbr);this['locator'] && zz81abx(this['locator'], _j49hn), zhdj6m(this, _j49hn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ehj6n) {
    if (ehj6n = zxb80z['apply'](this, arguments)) {
      if (this['cdata']) var fk = this['doc']['createCDATASection'](ehj6n);else var fk = this['doc']['createTextNode'](ehj6n);this['currentElement'] ? this['currentElement']['appendChild'](fk) : /^\s*$/['test'](ehj6n) && this['doc']['appendChild'](fk), this['locator'] && zz81abx(this['locator'], fk);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (qktfug) {
    (this['locator'] = qktfug) && (qktfug['lineNumber'] = 0x0);
  }, 'comment': function (dhe6mj) {
    dhe6mj = zxb80z['apply'](this, arguments);var abgzq = this['doc']['createComment'](dhe6mj);this['locator'] && zz81abx(this['locator'], abgzq), zhdj6m(this, abgzq);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (v7wpy, _9jn3, x8ba1r) {
    var v7ylp = this['doc']['implementation'];if (v7ylp && v7ylp['createDocumentType']) {
      var jn_94h = v7ylp['createDocumentType'](v7wpy, _9jn3, x8ba1r);this['locator'] && zz81abx(this['locator'], jn_94h), zhdj6m(this, jn_94h);
    }
  }, 'warning': function (kfgqz0) {
    console['warn']('[xmldom warning]\t' + kfgqz0, zhdie6(this['locator']));
  }, 'error': function (deiumt) {
    console['error']('[xmldom error]\t' + deiumt, zhdie6(this['locator']));
  }, 'fatalError': function (x1ar8) {
    throw console['error']('[xmldom fatalError]\t' + x1ar8, zhdie6(this['locator'])), x1ar8;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (za0gqb) {
  zh6emid['prototype'][za0gqb] = function () {
    return null;
  };
});var zn3c9_4 = require('./dddsax')['XMLReader'],
    zxba0z = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zimedh6;