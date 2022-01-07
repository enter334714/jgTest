var _ = wx.y$;
function _dihljm(yuvzx) {
  this['options'] = yuvzx || { 'locator': {} };
}function _dlnjkom(afec, xyvwt, _0$1z) {
  function hkljgi(vqst) {
    var ied = afec[vqst];!ied && hefigd && (ied = 0x2 == afec['length'] ? function (fedab) {
      afec(vqst, fedab);
    } : afec), dgehc[vqst] = ied && function (pnqors) {
      ied('[xmldom ' + vqst + ']\t' + pnqors + _dmlijk(_0$1z));
    } || function () {};
  }if (!afec) {
    if (xyvwt instanceof _dsrpno) return xyvwt;afec = xyvwt;
  }var dgehc = {},
      hefigd = afec instanceof Function;return _0$1z = _0$1z || {}, hkljgi('warning'), hkljgi('error'), hkljgi('fatalError'), dgehc;
}function _dsrpno() {
  this['cdata'] = !0x1;
}function _dmolp(wvy$xz, $201_3) {
  $201_3['lineNumber'] = wvy$xz['lineNumber'], $201_3['columnNumber'] = wvy$xz['columnNumber'];
}function _dmlijk(hljig) {
  return hljig ? '\x0a@' + (hljig['systemId'] || '') + '#[line:' + hljig['lineNumber'] + ',col:' + hljig['columnNumber'] + ']' : void 0x0;
}function _dz2_(pqrsn, xzvwyu, idef) {
  return 'string' == typeof pqrsn ? pqrsn['substr'](xzvwyu, idef) : pqrsn['length'] >= xzvwyu + idef || xzvwyu ? new java['lang']['String'](pqrsn, xzvwyu, idef) + '' : pqrsn;
}function _d$1_03(hlkgji, stpoq) {
  hlkgji['currentElement'] ? hlkgji['currentElement']['appendChild'](stpoq) : hlkgji['doc']['appendChild'](stpoq);
}_dihljm['prototype']['parseFromString'] = function (_$231, gjihfe) {
  var bg = this['options'],
      gihfed = new _drnpsqo(),
      oqnmr = bg['domBuilder'] || new _dsrpno(),
      hgeijf = bg['errorHandler'],
      y01z$_ = bg['locator'],
      _102$3 = bg['xmlns'] || {},
      dfghe = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return y01z$_ && oqnmr['setDocumentLocator'](y01z$_), gihfed['errorHandler'] = _dlnjkom(hgeijf, oqnmr, y01z$_), gihfed['domBuilder'] = bg['domBuilder'] || oqnmr, /\/x?html?$/['test'](gjihfe) && (dfghe['nbsp'] = '\u00a0', dfghe['copy'] = '©', _102$3[''] = 'http://www.w3.org/1999/xhtml'), _102$3['xml'] = _102$3['xml'] || 'http://www.w3.org/XML/1998/namespace', _$231 ? gihfed['parse'](_$231, _102$3, dfghe) : gihfed['errorHandler']['error']('invalid doc source'), oqnmr['doc'];
}, _dsrpno['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dfbcad()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (himljk, z1_2$, joklmn, prsno) {
    var x$wy_ = this['doc'],
        mrpon = x$wy_['createElementNS'](himljk, joklmn || z1_2$),
        oqrpmn = prsno['length'];_d$1_03(this, mrpon), this['currentElement'] = mrpon, this['locator'] && _dmolp(this['locator'], mrpon);for (var cdfeb = 0x0; oqrpmn > cdfeb; cdfeb++) {
      var himljk = prsno['getURI'](cdfeb),
          y01z$ = prsno['getValue'](cdfeb),
          joklmn = prsno['getQName'](cdfeb),
          pstur = x$wy_['createAttributeNS'](himljk, joklmn);this['locator'] && _dmolp(prsno['getLocator'](cdfeb), pstur), pstur['value'] = pstur['nodeValue'] = y01z$, mrpon['setAttributeNode'](pstur);
    }
  }, 'endElement': function () {
    {
      var ruvtsq = this['currentElement'];ruvtsq['tagName'];
    }this['currentElement'] = ruvtsq['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kiljmh, rpno) {
    var nqopml = this['doc']['createProcessingInstruction'](kiljmh, rpno);this['locator'] && _dmolp(this['locator'], nqopml), _d$1_03(this, nqopml);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vtursw) {
    if (vtursw = _dz2_['apply'](this, arguments)) {
      if (this['cdata']) var xuyvz = this['doc']['createCDATASection'](vtursw);else var xuyvz = this['doc']['createTextNode'](vtursw);this['currentElement'] ? this['currentElement']['appendChild'](xuyvz) : /^\s*$/['test'](vtursw) && this['doc']['appendChild'](xuyvz), this['locator'] && _dmolp(this['locator'], xuyvz);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (dfgehi) {
    (this['locator'] = dfgehi) && (dfgehi['lineNumber'] = 0x0);
  }, 'comment': function (omkpn) {
    omkpn = _dz2_['apply'](this, arguments);var cfbedg = this['doc']['createComment'](omkpn);this['locator'] && _dmolp(this['locator'], cfbedg), _d$1_03(this, cfbedg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (roqpst, oplm, ghidf) {
    var badcf = this['doc']['implementation'];if (badcf && badcf['createDocumentType']) {
      var zx$vyw = badcf['createDocumentType'](roqpst, oplm, ghidf);this['locator'] && _dmolp(this['locator'], zx$vyw), _d$1_03(this, zx$vyw);
    }
  }, 'warning': function (ljhg) {
    console['warn']('[xmldom warning]\t' + ljhg, _dmlijk(this['locator']));
  }, 'error': function (fhgeij) {
    console['error']('[xmldom error]\t' + fhgeij, _dmlijk(this['locator']));
  }, 'fatalError': function (urstq) {
    throw console['error']('[xmldom fatalError]\t' + urstq, _dmlijk(this['locator'])), urstq;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (prsqot) {
  _dsrpno['prototype'][prsqot] = function () {
    return null;
  };
});var _drnpsqo = require('./bbbsax')['XMLReader'],
    _dfbcad = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dihljm;