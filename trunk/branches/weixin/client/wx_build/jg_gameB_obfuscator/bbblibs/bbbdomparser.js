var _ = wx.y$;
function _dtqrsp(edcfhg) {
  this['options'] = edcfhg || { 'locator': {} };
}function _dyvwux(dbac, qsrpu, polm) {
  function qpostr(tvuxy) {
    var zuxvw = dbac[tvuxy];!zuxvw && txwuvy && (zuxvw = 0x2 == dbac['length'] ? function (nosrq) {
      dbac(tvuxy, nosrq);
    } : dbac), olmnqp[tvuxy] = zuxvw ? function (roqnp) {
      zuxvw('[xmldom ' + tvuxy + ']\t' + roqnp + _domqln(polm));
    } : function () {};
  }if (!dbac) {
    if (qsrpu instanceof _dhgfjki) return qsrpu;dbac = qsrpu;
  }var olmnqp = {},
      txwuvy = dbac instanceof Function;return polm = polm || {}, qpostr('warning'), qpostr('error'), qpostr('fatalError'), olmnqp;
}function _dhgfjki() {
  this['cdata'] = !0x1;
}function _dposqn(kjgfh, tors) {
  tors['lineNumber'] = kjgfh['lineNumber'], tors['columnNumber'] = kjgfh['columnNumber'];
}function _domqln(_0$2) {
  return _0$2 ? '\x0a@' + (_0$2['systemId'] || '') + '#[line:' + _0$2['lineNumber'] + ',col:' + _0$2['columnNumber'] + ']' : void 0x0;
}function _dnpokl(nqorsp, zxvw$, $1302) {
  return 'string' == typeof nqorsp ? nqorsp['substr'](zxvw$, $1302) : nqorsp['length'] >= zxvw$ + $1302 || zxvw$ ? new java['lang']['String'](nqorsp, zxvw$, $1302) + '' : nqorsp;
}function _dhimjl(fejhig, fgide) {
  (fejhig['currentElement'] || fejhig['doc'])['appendChild'](fgide);
}_dtqrsp['prototype']['parseFromString'] = function (lkjmin, ruqpst) {
  var yxwu = this['options'],
      ikhl = new _dcgfdeh(),
      hcefg = yxwu['domBuilder'] || new _dhgfjki(),
      sqnpro = yxwu['errorHandler'],
      hgfec = yxwu['locator'],
      cgbedf = yxwu['xmlns'] || {},
      urqtps = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return hgfec && hcefg['setDocumentLocator'](hgfec), ikhl['errorHandler'] = _dyvwux(sqnpro, hcefg, hgfec), ikhl['domBuilder'] = yxwu['domBuilder'] || hcefg, /\/x?html?$/['test'](ruqpst) && (urqtps['nbsp'] = '\u00a0', urqtps['copy'] = '©', cgbedf[''] = 'http://www.w3.org/1999/xhtml'), cgbedf['xml'] = cgbedf['xml'] || 'http://www.w3.org/XML/1998/namespace', lkjmin ? ikhl['parse'](lkjmin, cgbedf, urqtps) : ikhl['errorHandler']['error']('invalid doc source'), hcefg['doc'];
}, _dhgfjki['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dhjifg()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (imjnk, pqmro, vuxzwy, nmkji) {
    var kjmonl = this['doc'],
        pnqmro = kjmonl['createElementNS'](imjnk, vuxzwy || pqmro),
        opqts = nmkji['length'];_dhimjl(this, pnqmro), this['currentElement'] = pnqmro, this['locator'] && _dposqn(this['locator'], pnqmro);for (var qnpros = 0x0; qnpros < opqts; qnpros++) {
      var imjnk = nmkji['getURI'](qnpros),
          mlojk = nmkji['getValue'](qnpros),
          vuxzwy = nmkji['getQName'](qnpros),
          srutqv = kjmonl['createAttributeNS'](imjnk, vuxzwy);this['locator'] && _dposqn(nmkji['getLocator'](qnpros), srutqv), srutqv['value'] = srutqv['nodeValue'] = mlojk, pnqmro['setAttributeNode'](srutqv);
    }
  }, 'endElement': function () {
    var qtvusr = this['currentElement'];qtvusr['tagName'], this['currentElement'] = qtvusr['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rpoq, nrmopq) {
    nrmopq = this['doc']['createProcessingInstruction'](rpoq, nrmopq), (this['locator'] && _dposqn(this['locator'], nrmopq), _dhimjl(this, nrmopq));
  }, 'ignorableWhitespace': function () {}, 'characters': function (hkgijl) {
    var sqprut;(hkgijl = _dnpokl['apply'](this, arguments)) && (sqprut = this['cdata'] ? this['doc']['createCDATASection'](hkgijl) : this['doc']['createTextNode'](hkgijl), this['currentElement'] ? this['currentElement']['appendChild'](sqprut) : /^\s*$/['test'](hkgijl) && this['doc']['appendChild'](sqprut), this['locator'] && _dposqn(this['locator'], sqprut));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (_312$) {
    (this['locator'] = _312$) && (_312$['lineNumber'] = 0x0);
  }, 'comment': function (cfdea) {
    cfdea = _dnpokl['apply'](this, arguments);var jhikgl = this['doc']['createComment'](cfdea);this['locator'] && _dposqn(this['locator'], jhikgl), _dhimjl(this, jhikgl);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (trsvq, xwvst, lijh) {
    var qpu = this['doc']['implementation'];qpu && qpu['createDocumentType'] && (lijh = qpu['createDocumentType'](trsvq, xwvst, lijh), this['locator'] && _dposqn(this['locator'], lijh), _dhimjl(this, lijh));
  }, 'warning': function (ehifdg) {
    console['warn']('[xmldom warning]\t' + ehifdg, _domqln(this['locator']));
  }, 'error': function (cadefb) {
    console['error']('[xmldom error]\t' + cadefb, _domqln(this['locator']));
  }, 'fatalError': function (zvwuyx) {
    throw console['error']('[xmldom fatalError]\t' + zvwuyx, _domqln(this['locator'])), zvwuyx;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (cbeadf) {
  _dhgfjki['prototype'][cbeadf] = function () {
    return null;
  };
});var _dcgfdeh = require('./bbbsax')['XMLReader'],
    _dhjifg = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dtqrsp;