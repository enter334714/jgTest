var _ = wx.y$;
function _dfehgdi(ighkf) {
  this['options'] = ighkf || { 'locator': {} };
}function _dlmpnok(lmnpoq, sqrpu, nsqo) {
  function zxy_0$(klonmj) {
    var ijkmln = lmnpoq[klonmj];!ijkmln && z$12 && (ijkmln = 0x2 == lmnpoq['length'] ? function (loqm) {
      lmnpoq(klonmj, loqm);
    } : lmnpoq), wyxu[klonmj] = ijkmln ? function (yuvt) {
      ijkmln('[xmldom ' + klonmj + ']\t' + yuvt + _ddabefc(nsqo));
    } : function () {};
  }if (!lmnpoq) {
    if (sqrpu instanceof _doplnk) return sqrpu;lmnpoq = sqrpu;
  }var wyxu = {},
      z$12 = lmnpoq instanceof Function;return nsqo = nsqo || {}, zxy_0$('warning'), zxy_0$('error'), zxy_0$('fatalError'), wyxu;
}function _doplnk() {
  this['cdata'] = !0x1;
}function _dcefbd(xytwuv, protqs) {
  protqs['lineNumber'] = xytwuv['lineNumber'], protqs['columnNumber'] = xytwuv['columnNumber'];
}function _ddabefc(cebf) {
  return cebf ? '\x0a@' + (cebf['systemId'] || '') + '#[line:' + cebf['lineNumber'] + ',col:' + cebf['columnNumber'] + ']' : void 0x0;
}function _dtrpqso(plmkon, lnpomk, uytxvw) {
  return 'string' == typeof plmkon ? plmkon['substr'](lnpomk, uytxvw) : plmkon['length'] >= lnpomk + uytxvw || lnpomk ? new java['lang']['String'](plmkon, lnpomk, uytxvw) + '' : plmkon;
}function _dmikj(gehc, pomqln) {
  (gehc['currentElement'] || gehc['doc'])['appendChild'](pomqln);
}_dfehgdi['prototype']['parseFromString'] = function (fcbe, hkjfig) {
  var qvrs = this['options'],
      qomnr = new _dtqru(),
      oplknm = qvrs['domBuilder'] || new _doplnk(),
      sropnq = qvrs['errorHandler'],
      pqron = qvrs['locator'],
      afbcde = qvrs['xmlns'] || {},
      _3$201 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return pqron && oplknm['setDocumentLocator'](pqron), qomnr['errorHandler'] = _dlmpnok(sropnq, oplknm, pqron), qomnr['domBuilder'] = qvrs['domBuilder'] || oplknm, /\/x?html?$/['test'](hkjfig) && (_3$201['nbsp'] = '\u00a0', _3$201['copy'] = '©', afbcde[''] = 'http://www.w3.org/1999/xhtml'), afbcde['xml'] = afbcde['xml'] || 'http://www.w3.org/XML/1998/namespace', fcbe ? qomnr['parse'](fcbe, afbcde, _3$201) : qomnr['errorHandler']['error']('invalid doc source'), oplknm['doc'];
}, _doplnk['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dhif()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rspqon, lnkpo, swuvt, hklmji) {
    var jhikl = this['doc'],
        wzux = jhikl['createElementNS'](rspqon, swuvt || lnkpo),
        vsturq = hklmji['length'];_dmikj(this, wzux), this['currentElement'] = wzux, this['locator'] && _dcefbd(this['locator'], wzux);for (var z_0y$ = 0x0; z_0y$ < vsturq; z_0y$++) {
      var rspqon = hklmji['getURI'](z_0y$),
          yuwvz = hklmji['getValue'](z_0y$),
          swuvt = hklmji['getQName'](z_0y$),
          ecfdg = jhikl['createAttributeNS'](rspqon, swuvt);this['locator'] && _dcefbd(hklmji['getLocator'](z_0y$), ecfdg), ecfdg['value'] = ecfdg['nodeValue'] = yuwvz, wzux['setAttributeNode'](ecfdg);
    }
  }, 'endElement': function () {
    var kpno = this['currentElement'];kpno['tagName'], this['currentElement'] = kpno['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (nkimjl, bfgcde) {
    bfgcde = this['doc']['createProcessingInstruction'](nkimjl, bfgcde), (this['locator'] && _dcefbd(this['locator'], bfgcde), _dmikj(this, bfgcde));
  }, 'ignorableWhitespace': function () {}, 'characters': function ($wzvxy) {
    var efchg;($wzvxy = _dtrpqso['apply'](this, arguments)) && (efchg = this['cdata'] ? this['doc']['createCDATASection']($wzvxy) : this['doc']['createTextNode']($wzvxy), this['currentElement'] ? this['currentElement']['appendChild'](efchg) : /^\s*$/['test']($wzvxy) && this['doc']['appendChild'](efchg), this['locator'] && _dcefbd(this['locator'], efchg));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (dchefg) {
    (this['locator'] = dchefg) && (dchefg['lineNumber'] = 0x0);
  }, 'comment': function ($wyxvz) {
    $wyxvz = _dtrpqso['apply'](this, arguments);var nqrsp = this['doc']['createComment']($wyxvz);this['locator'] && _dcefbd(this['locator'], nqrsp), _dmikj(this, nqrsp);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ieghdf, idhe, olpmqn) {
    var z_0y1 = this['doc']['implementation'];z_0y1 && z_0y1['createDocumentType'] && (olpmqn = z_0y1['createDocumentType'](ieghdf, idhe, olpmqn), this['locator'] && _dcefbd(this['locator'], olpmqn), _dmikj(this, olpmqn));
  }, 'warning': function (tupsrq) {
    console['warn']('[xmldom warning]\t' + tupsrq, _ddabefc(this['locator']));
  }, 'error': function (gfech) {
    console['error']('[xmldom error]\t' + gfech, _ddabefc(this['locator']));
  }, 'fatalError': function (mklpno) {
    throw console['error']('[xmldom fatalError]\t' + mklpno, _ddabefc(this['locator'])), mklpno;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (mnijlk) {
  _doplnk['prototype'][mnijlk] = function () {
    return null;
  };
});var _dtqru = require('./bbbsax')['XMLReader'],
    _dhif = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dfehgdi;