var B = wx.$z;
function zx1sea9(todykb) {
  this['options'] = todykb || { 'locator': {} };
}function zl6vfn7(_85ur, g194ph, _ybr8k) {
  function xa91es(kzyt) {
    var fn67vl = _85ur[kzyt];!fn67vl && w52_u0 && (fn67vl = 0x2 == _85ur['length'] ? function (ydtoz) {
      _85ur(kzyt, ydtoz);
    } : _85ur), dyzoet[kzyt] = fn67vl && function (i7m$q3) {
      fn67vl('[xmldom ' + kzyt + ']\t' + i7m$q3 + zyokd(_ybr8k));
    } || function () {};
  }if (!_85ur) {
    if (g194ph instanceof zzex9sa) return g194ph;_85ur = g194ph;
  }var dyzoet = {},
      w52_u0 = _85ur instanceof Function;return _ybr8k = _ybr8k || {}, xa91es('warning'), xa91es('error'), xa91es('fatalError'), dyzoet;
}function zzex9sa() {
  this['cdata'] = !0x1;
}function zlg4v6(y_rb8k, il3mn7) {
  il3mn7['lineNumber'] = y_rb8k['lineNumber'], il3mn7['columnNumber'] = y_rb8k['columnNumber'];
}function zyokd(_rb58k) {
  return _rb58k ? '\x0a@' + (_rb58k['systemId'] || '') + '#[line:' + _rb58k['lineNumber'] + ',col:' + _rb58k['columnNumber'] + ']' : void 0x0;
}function zbkody(tsae, bryk8d, aset) {
  return 'string' == typeof tsae ? tsae['substr'](bryk8d, aset) : tsae['length'] >= bryk8d + aset || bryk8d ? new java['lang']['String'](tsae, bryk8d, aset) + '' : tsae;
}function zyotd(lnv46, nvi7m) {
  lnv46['currentElement'] ? lnv46['currentElement']['appendChild'](nvi7m) : lnv46['doc']['appendChild'](nvi7m);
}zx1sea9['prototype']['parseFromString'] = function (zotykd, ni3) {
  var ah91s = this['options'],
      kzdtyo = new zs91x(),
      aztd = ah91s['domBuilder'] || new zzex9sa(),
      g64fh = ah91s['errorHandler'],
      u582r = ah91s['locator'],
      doytze = ah91s['xmlns'] || {},
      yrbk8d = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return u582r && aztd['setDocumentLocator'](u582r), kzdtyo['errorHandler'] = zl6vfn7(g64fh, aztd, u582r), kzdtyo['domBuilder'] = ah91s['domBuilder'] || aztd, /\/x?html?$/['test'](ni3) && (yrbk8d['nbsp'] = '\u00a0', yrbk8d['copy'] = '©', doytze[''] = 'http://www.w3.org/1999/xhtml'), doytze['xml'] = doytze['xml'] || 'http://www.w3.org/XML/1998/namespace', zotykd ? kzdtyo['parse'](zotykd, doytze, yrbk8d) : kzdtyo['errorHandler']['error']('invalid doc source'), aztd['doc'];
}, zzex9sa['prototype'] = { 'startDocument': function () {
    this['doc'] = new zzokd()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (axtzse, m$3q, ykbtdo, kb8do) {
    var l6vnf7 = this['doc'],
        zetaos = l6vnf7['createElementNS'](axtzse, ykbtdo || m$3q),
        has9x1 = kb8do['length'];zyotd(this, zetaos), this['currentElement'] = zetaos, this['locator'] && zlg4v6(this['locator'], zetaos);for (var tdzyoe = 0x0; has9x1 > tdzyoe; tdzyoe++) {
      var axtzse = kb8do['getURI'](tdzyoe),
          dtkoyb = kb8do['getValue'](tdzyoe),
          ykbtdo = kb8do['getQName'](tdzyoe),
          _rk8by = l6vnf7['createAttributeNS'](axtzse, ykbtdo);this['locator'] && zlg4v6(kb8do['getLocator'](tdzyoe), _rk8by), _rk8by['value'] = _rk8by['nodeValue'] = dtkoyb, zetaos['setAttributeNode'](_rk8by);
    }
  }, 'endElement': function () {
    {
      var fvg46p = this['currentElement'];fvg46p['tagName'];
    }this['currentElement'] = fvg46p['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($jmi3, nvf4) {
    var steoaz = this['doc']['createProcessingInstruction']($jmi3, nvf4);this['locator'] && zlg4v6(this['locator'], steoaz), zyotd(this, steoaz);
  }, 'ignorableWhitespace': function () {}, 'characters': function (nmi3q) {
    if (nmi3q = zbkody['apply'](this, arguments)) {
      if (this['cdata']) var otdaz = this['doc']['createCDATASection'](nmi3q);else var otdaz = this['doc']['createTextNode'](nmi3q);this['currentElement'] ? this['currentElement']['appendChild'](otdaz) : /^\s*$/['test'](nmi3q) && this['doc']['appendChild'](otdaz), this['locator'] && zlg4v6(this['locator'], otdaz);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (kyo8) {
    (this['locator'] = kyo8) && (kyo8['lineNumber'] = 0x0);
  }, 'comment': function (hxs1p9) {
    hxs1p9 = zbkody['apply'](this, arguments);var h19xpg = this['doc']['createComment'](hxs1p9);this['locator'] && zlg4v6(this['locator'], h19xpg), zyotd(this, h19xpg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (hp19xg, xstaze, ifln7v) {
    var zext = this['doc']['implementation'];if (zext && zext['createDocumentType']) {
      var tyzeo = zext['createDocumentType'](hp19xg, xstaze, ifln7v);this['locator'] && zlg4v6(this['locator'], tyzeo), zyotd(this, tyzeo);
    }
  }, 'warning': function (inmv) {
    console['warn']('[xmldom warning]\t' + inmv, zyokd(this['locator']));
  }, 'error': function (ji$qm3) {
    console['error']('[xmldom error]\t' + ji$qm3, zyokd(this['locator']));
  }, 'fatalError': function (teodaz) {
    throw console['error']('[xmldom fatalError]\t' + teodaz, zyokd(this['locator'])), teodaz;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (k_85r) {
  zzex9sa['prototype'][k_85r] = function () {
    return null;
  };
});var zs91x = require('./zzczz')['XMLReader'],
    zzokd = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zx1sea9;