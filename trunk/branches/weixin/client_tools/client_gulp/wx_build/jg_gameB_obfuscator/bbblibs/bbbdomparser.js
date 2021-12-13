var _ = wx.y$;
function _dkhgif(txwvy) {
  this['options'] = txwvy || { 'locator': {} };
}function _dxvwzuy(trsop, nlokp, y10z$_) {
  function gecfdb(deih) {
    var pornqs = trsop[deih];!pornqs && njlom && (pornqs = 0x2 == trsop['length'] ? function (vwsx) {
      trsop(deih, vwsx);
    } : trsop), eifghj[deih] = pornqs && function (hlikj) {
      pornqs('[xmldom ' + deih + ']\t' + hlikj + _drsutvq(y10z$_));
    } || function () {};
  }if (!trsop) {
    if (nlokp instanceof _drtp) return nlokp;trsop = nlokp;
  }var eifghj = {},
      njlom = trsop instanceof Function;return y10z$_ = y10z$_ || {}, gecfdb('warning'), gecfdb('error'), gecfdb('fatalError'), eifghj;
}function _drtp() {
  this['cdata'] = !0x1;
}function _dyxv$z(toqspr, kmilnj) {
  kmilnj['lineNumber'] = toqspr['lineNumber'], kmilnj['columnNumber'] = toqspr['columnNumber'];
}function _drsutvq(igfjeh) {
  return igfjeh ? '\x0a@' + (igfjeh['systemId'] || '') + '#[line:' + igfjeh['lineNumber'] + ',col:' + igfjeh['columnNumber'] + ']' : void 0x0;
}function _dopqnm(fdheg, pqomr, fbgde) {
  return 'string' == typeof fdheg ? fdheg['substr'](pqomr, fbgde) : fdheg['length'] >= pqomr + fbgde || pqomr ? new java['lang']['String'](fdheg, pqomr, fbgde) + '' : fdheg;
}function _dknjlm(jnmlo, wvruts) {
  jnmlo['currentElement'] ? jnmlo['currentElement']['appendChild'](wvruts) : jnmlo['doc']['appendChild'](wvruts);
}_dkhgif['prototype']['parseFromString'] = function (yxz$v, mlknij) {
  var cehg = this['options'],
      cefbg = new _dywuzxv(),
      tsupr = cehg['domBuilder'] || new _drtp(),
      lpqonm = cehg['errorHandler'],
      usqvt = cehg['locator'],
      psrqtu = cehg['xmlns'] || {},
      _y1$0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return usqvt && tsupr['setDocumentLocator'](usqvt), cefbg['errorHandler'] = _dxvwzuy(lpqonm, tsupr, usqvt), cefbg['domBuilder'] = cehg['domBuilder'] || tsupr, /\/x?html?$/['test'](mlknij) && (_y1$0['nbsp'] = '\u00a0', _y1$0['copy'] = '©', psrqtu[''] = 'http://www.w3.org/1999/xhtml'), psrqtu['xml'] = psrqtu['xml'] || 'http://www.w3.org/XML/1998/namespace', yxz$v ? cefbg['parse'](yxz$v, psrqtu, _y1$0) : cefbg['errorHandler']['error']('invalid doc source'), tsupr['doc'];
}, _drtp['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dlonmkp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rqtsu, _zw$xy, mpnol, zvyxw) {
    var wzyuvx = this['doc'],
        cbadfe = wzyuvx['createElementNS'](rqtsu, mpnol || _zw$xy),
        eabdf = zvyxw['length'];_dknjlm(this, cbadfe), this['currentElement'] = cbadfe, this['locator'] && _dyxv$z(this['locator'], cbadfe);for (var vwtuxs = 0x0; eabdf > vwtuxs; vwtuxs++) {
      var rqtsu = zvyxw['getURI'](vwtuxs),
          posnq = zvyxw['getValue'](vwtuxs),
          mpnol = zvyxw['getQName'](vwtuxs),
          kgifj = wzyuvx['createAttributeNS'](rqtsu, mpnol);this['locator'] && _dyxv$z(zvyxw['getLocator'](vwtuxs), kgifj), kgifj['value'] = kgifj['nodeValue'] = posnq, cbadfe['setAttributeNode'](kgifj);
    }
  }, 'endElement': function () {
    {
      var uvwzx = this['currentElement'];uvwzx['tagName'];
    }this['currentElement'] = uvwzx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (chdgef, ywz_x$) {
    var vwzyxu = this['doc']['createProcessingInstruction'](chdgef, ywz_x$);this['locator'] && _dyxv$z(this['locator'], vwzyxu), _dknjlm(this, vwzyxu);
  }, 'ignorableWhitespace': function () {}, 'characters': function (nlqpm) {
    if (nlqpm = _dopqnm['apply'](this, arguments)) {
      if (this['cdata']) var zuwvxy = this['doc']['createCDATASection'](nlqpm);else var zuwvxy = this['doc']['createTextNode'](nlqpm);this['currentElement'] ? this['currentElement']['appendChild'](zuwvxy) : /^\s*$/['test'](nlqpm) && this['doc']['appendChild'](zuwvxy), this['locator'] && _dyxv$z(this['locator'], zuwvxy);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xvyw) {
    (this['locator'] = xvyw) && (xvyw['lineNumber'] = 0x0);
  }, 'comment': function (xtw) {
    xtw = _dopqnm['apply'](this, arguments);var cfdba = this['doc']['createComment'](xtw);this['locator'] && _dyxv$z(this['locator'], cfdba), _dknjlm(this, cfdba);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gihjfk, xtu, ijhml) {
    var injm = this['doc']['implementation'];if (injm && injm['createDocumentType']) {
      var yvxtw = injm['createDocumentType'](gihjfk, xtu, ijhml);this['locator'] && _dyxv$z(this['locator'], yvxtw), _dknjlm(this, yvxtw);
    }
  }, 'warning': function (jgfikh) {
    console['warn']('[xmldom warning]\t' + jgfikh, _drsutvq(this['locator']));
  }, 'error': function (ifhde) {
    console['error']('[xmldom error]\t' + ifhde, _drsutvq(this['locator']));
  }, 'fatalError': function (uvsxt) {
    throw console['error']('[xmldom fatalError]\t' + uvsxt, _drsutvq(this['locator'])), uvsxt;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qtrpso) {
  _drtp['prototype'][qtrpso] = function () {
    return null;
  };
});var _dywuzxv = require('./bbbsax')['XMLReader'],
    _dlonmkp = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dkhgif;