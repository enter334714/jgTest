var v = wx.$d;
function zy7vpw(zf0kqg) {
  this['options'] = zf0kqg || { 'locator': {} };
}function znmjeh($1pr, xa8zb1, zqkf0g) {
  function jdmh6(uigt) {
    var dmietu = $1pr[uigt];!dmietu && ra81 && (dmietu = 0x2 == $1pr['length'] ? function (h6nmje) {
      $1pr(uigt, h6nmje);
    } : $1pr), hm6nj[uigt] = dmietu && function (k0g) {
      dmietu('[xmldom ' + uigt + ']\t' + k0g + zvrp1(zqkf0g));
    } || function () {};
  }if (!$1pr) {
    if (xa8zb1 instanceof zemdih6) return xa8zb1;$1pr = xa8zb1;
  }var hm6nj = {},
      ra81 = $1pr instanceof Function;return zqkf0g = zqkf0g || {}, jdmh6('warning'), jdmh6('error'), jdmh6('fatalError'), hm6nj;
}function zemdih6() {
  this['cdata'] = !0x1;
}function z$p1w(qkfg0t, z0bgq) {
  z0bgq['lineNumber'] = qkfg0t['lineNumber'], z0bgq['columnNumber'] = qkfg0t['columnNumber'];
}function zvrp1(iudfe) {
  return iudfe ? '\x0a@' + (iudfe['systemId'] || '') + '#[line:' + iudfe['lineNumber'] + ',col:' + iudfe['columnNumber'] + ']' : void 0x0;
}function za0kgqz(pvy7w$, etfdiu, l7yvp) {
  return 'string' == typeof pvy7w$ ? pvy7w$['substr'](etfdiu, l7yvp) : pvy7w$['length'] >= etfdiu + l7yvp || etfdiu ? new java['lang']['String'](pvy7w$, etfdiu, l7yvp) + '' : pvy7w$;
}function zbqzga0(qkguft, c923) {
  qkguft['currentElement'] ? qkguft['currentElement']['appendChild'](c923) : qkguft['doc']['appendChild'](c923);
}zy7vpw['prototype']['parseFromString'] = function (gfqukt, q0fkgz) {
  var p8 = this['options'],
      fite = new zyvp$7w(),
      _nj49h = p8['domBuilder'] || new zemdih6(),
      _4c9n = p8['errorHandler'],
      $1x8r = p8['locator'],
      ukgt = p8['xmlns'] || {},
      ypv7w = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $1x8r && _nj49h['setDocumentLocator']($1x8r), fite['errorHandler'] = znmjeh(_4c9n, _nj49h, $1x8r), fite['domBuilder'] = p8['domBuilder'] || _nj49h, /\/x?html?$/['test'](q0fkgz) && (ypv7w['nbsp'] = '\u00a0', ypv7w['copy'] = '©', ukgt[''] = 'http://www.w3.org/1999/xhtml'), ukgt['xml'] = ukgt['xml'] || 'http://www.w3.org/XML/1998/namespace', gfqukt ? fite['parse'](gfqukt, ukgt, ypv7w) : fite['errorHandler']['error']('invalid doc source'), _nj49h['doc'];
}, zemdih6['prototype'] = { 'startDocument': function () {
    this['doc'] = new zwr81b()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (m6ied, fitduk, eud6i, ium6) {
    var hjm4n6 = this['doc'],
        eiut = hjm4n6['createElementNS'](m6ied, eud6i || fitduk),
        $p7l = ium6['length'];zbqzga0(this, eiut), this['currentElement'] = eiut, this['locator'] && z$p1w(this['locator'], eiut);for (var igtufk = 0x0; $p7l > igtufk; igtufk++) {
      var m6ied = ium6['getURI'](igtufk),
          _o5 = ium6['getValue'](igtufk),
          eud6i = ium6['getQName'](igtufk),
          dutfe = hjm4n6['createAttributeNS'](m6ied, eud6i);this['locator'] && z$p1w(ium6['getLocator'](igtufk), dutfe), dutfe['value'] = dutfe['nodeValue'] = _o5, eiut['setAttributeNode'](dutfe);
    }
  }, 'endElement': function () {
    {
      var kgfit = this['currentElement'];kgfit['tagName'];
    }this['currentElement'] = kgfit['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (gtkfq0, rv1p$w) {
    var $1rwv = this['doc']['createProcessingInstruction'](gtkfq0, rv1p$w);this['locator'] && z$p1w(this['locator'], $1rwv), zbqzga0(this, $1rwv);
  }, 'ignorableWhitespace': function () {}, 'characters': function (k0aq) {
    if (k0aq = za0kgqz['apply'](this, arguments)) {
      if (this['cdata']) var kgtiuf = this['doc']['createCDATASection'](k0aq);else var kgtiuf = this['doc']['createTextNode'](k0aq);this['currentElement'] ? this['currentElement']['appendChild'](kgtiuf) : /^\s*$/['test'](k0aq) && this['doc']['appendChild'](kgtiuf), this['locator'] && z$p1w(this['locator'], kgtiuf);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tdemu) {
    (this['locator'] = tdemu) && (tdemu['lineNumber'] = 0x0);
  }, 'comment': function (tufei) {
    tufei = za0kgqz['apply'](this, arguments);var $81xw = this['doc']['createComment'](tufei);this['locator'] && z$p1w(this['locator'], $81xw), zbqzga0(this, $81xw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h46nm, c3o95_, b8x1za) {
    var kfgut = this['doc']['implementation'];if (kfgut && kfgut['createDocumentType']) {
      var ietfdu = kfgut['createDocumentType'](h46nm, c3o95_, b8x1za);this['locator'] && z$p1w(this['locator'], ietfdu), zbqzga0(this, ietfdu);
    }
  }, 'warning': function (d6eimu) {
    console['warn']('[xmldom warning]\t' + d6eimu, zvrp1(this['locator']));
  }, 'error': function (n4c_) {
    console['error']('[xmldom error]\t' + n4c_, zvrp1(this['locator']));
  }, 'fatalError': function (h6mnej) {
    throw console['error']('[xmldom fatalError]\t' + h6mnej, zvrp1(this['locator'])), h6mnej;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($r7wv) {
  zemdih6['prototype'][$r7wv] = function () {
    return null;
  };
});var zyvp$7w = require('./dddsax')['XMLReader'],
    zwr81b = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zy7vpw;