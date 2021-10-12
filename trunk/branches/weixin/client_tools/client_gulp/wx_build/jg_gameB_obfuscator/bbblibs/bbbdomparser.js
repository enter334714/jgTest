var _ = wx.y$;
function _dvusxtw(tvwuxs) {
  this['options'] = tvwuxs || { 'locator': {} };
}function _dsrqvtu(rompqn, _$z1, gihefd) {
  function orpnm(ljonm) {
    var wuvrst = rompqn[ljonm];!wuvrst && onjmk && (wuvrst = 0x2 == rompqn['length'] ? function (ropns) {
      rompqn(ljonm, ropns);
    } : rompqn), igdeh[ljonm] = wuvrst ? function (yz_) {
      wuvrst('[xmldom ' + ljonm + ']\t' + yz_ + _dwz_yx(gihefd));
    } : function () {};
  }if (!rompqn) {
    if (_$z1 instanceof _difjhgk) return _$z1;rompqn = _$z1;
  }var igdeh = {},
      onjmk = rompqn instanceof Function;return gihefd = gihefd || {}, orpnm('warning'), orpnm('error'), orpnm('fatalError'), igdeh;
}function _difjhgk() {
  this['cdata'] = !0x1;
}function _dokpnl(rsq, rops) {
  rops['lineNumber'] = rsq['lineNumber'], rops['columnNumber'] = rsq['columnNumber'];
}function _dwz_yx(ehji) {
  return ehji ? '\x0a@' + (ehji['systemId'] || '') + '#[line:' + ehji['lineNumber'] + ',col:' + ehji['columnNumber'] + ']' : void 0x0;
}function _dvtywu(dbcfe, yxv$zw, wuvrt) {
  return 'string' == typeof dbcfe ? dbcfe['substr'](yxv$zw, wuvrt) : dbcfe['length'] >= yxv$zw + wuvrt || yxv$zw ? new java['lang']['String'](dbcfe, yxv$zw, wuvrt) + '' : dbcfe;
}function _dkfjgih(ghdcfe, xywvuz) {
  (ghdcfe['currentElement'] || ghdcfe['doc'])['appendChild'](xywvuz);
}_dvusxtw['prototype']['parseFromString'] = function (y10z_$, mqpoln) {
  var pqsur = this['options'],
      cfbgd = new _duqs(),
      ostpr = pqsur['domBuilder'] || new _difjhgk(),
      hfikjg = pqsur['errorHandler'],
      fgjkh = pqsur['locator'],
      $xy = pqsur['xmlns'] || {},
      kiljg = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fgjkh && ostpr['setDocumentLocator'](fgjkh), cfbgd['errorHandler'] = _dsrqvtu(hfikjg, ostpr, fgjkh), cfbgd['domBuilder'] = pqsur['domBuilder'] || ostpr, /\/x?html?$/['test'](mqpoln) && (kiljg['nbsp'] = '\u00a0', kiljg['copy'] = '©', $xy[''] = 'http://www.w3.org/1999/xhtml'), $xy['xml'] = $xy['xml'] || 'http://www.w3.org/XML/1998/namespace', y10z_$ ? cfbgd['parse'](y10z_$, $xy, kiljg) : cfbgd['errorHandler']['error']('invalid doc source'), ostpr['doc'];
}, _difjhgk['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dpstoqr()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (tuqvr, cdhegf, imhlkj, mjknlo) {
    var igehf = this['doc'],
        rpust = igehf['createElementNS'](tuqvr, imhlkj || cdhegf),
        $x_z0 = mjknlo['length'];_dkfjgih(this, rpust), this['currentElement'] = rpust, this['locator'] && _dokpnl(this['locator'], rpust);for (var $z_2 = 0x0; $z_2 < $x_z0; $z_2++) {
      var tuqvr = mjknlo['getURI']($z_2),
          tvyux = mjknlo['getValue']($z_2),
          imhlkj = mjknlo['getQName']($z_2),
          ilkmnj = igehf['createAttributeNS'](tuqvr, imhlkj);this['locator'] && _dokpnl(mjknlo['getLocator']($z_2), ilkmnj), ilkmnj['value'] = ilkmnj['nodeValue'] = tvyux, rpust['setAttributeNode'](ilkmnj);
    }
  }, 'endElement': function () {
    var jinlmk = this['currentElement'];jinlmk['tagName'], this['currentElement'] = jinlmk['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ejfg, fhkjgi) {
    fhkjgi = this['doc']['createProcessingInstruction'](ejfg, fhkjgi), (this['locator'] && _dokpnl(this['locator'], fhkjgi), _dkfjgih(this, fhkjgi));
  }, 'ignorableWhitespace': function () {}, 'characters': function (plknmo) {
    var urwtv;(plknmo = _dvtywu['apply'](this, arguments)) && (urwtv = this['cdata'] ? this['doc']['createCDATASection'](plknmo) : this['doc']['createTextNode'](plknmo), this['currentElement'] ? this['currentElement']['appendChild'](urwtv) : /^\s*$/['test'](plknmo) && this['doc']['appendChild'](urwtv), this['locator'] && _dokpnl(this['locator'], urwtv));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nqolpm) {
    (this['locator'] = nqolpm) && (nqolpm['lineNumber'] = 0x0);
  }, 'comment': function (hlgi) {
    hlgi = _dvtywu['apply'](this, arguments);var jmol = this['doc']['createComment'](hlgi);this['locator'] && _dokpnl(this['locator'], jmol), _dkfjgih(this, jmol);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (qurtps, rsuvtw, khlgij) {
    var qsonr = this['doc']['implementation'];qsonr && qsonr['createDocumentType'] && (khlgij = qsonr['createDocumentType'](qurtps, rsuvtw, khlgij), this['locator'] && _dokpnl(this['locator'], khlgij), _dkfjgih(this, khlgij));
  }, 'warning': function (z1y0) {
    console['warn']('[xmldom warning]\t' + z1y0, _dwz_yx(this['locator']));
  }, 'error': function (mnlikj) {
    console['error']('[xmldom error]\t' + mnlikj, _dwz_yx(this['locator']));
  }, 'fatalError': function (zuw) {
    throw console['error']('[xmldom fatalError]\t' + zuw, _dwz_yx(this['locator'])), zuw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (olnmkp) {
  _difjhgk['prototype'][olnmkp] = function () {
    return null;
  };
});var _duqs = require('./bbbsax')['XMLReader'],
    _dpstoqr = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dvusxtw;