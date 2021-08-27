var _ = wx.y$;
function _dfihgjk($xyw_z) {
  this['options'] = $xyw_z || { 'locator': {} };
}function _dkmlnpo(cefgdb, dcfg, nikj) {
  function onqplm(qronps) {
    var onmqrp = cefgdb[qronps];!onmqrp && _32041 && (onmqrp = 0x2 == cefgdb['length'] ? function (ifhegd) {
      cefgdb(qronps, ifhegd);
    } : cefgdb), loq[qronps] = onmqrp ? function (vsxwu) {
      onmqrp('[xmldom ' + qronps + ']\t' + vsxwu + _dqprt(nikj));
    } : function () {};
  }if (!cefgdb) {
    if (dcfg instanceof _djklmo) return dcfg;cefgdb = dcfg;
  }var loq = {},
      _32041 = cefgdb instanceof Function;return nikj = nikj || {}, onqplm('warning'), onqplm('error'), onqplm('fatalError'), loq;
}function _djklmo() {
  this['cdata'] = !0x1;
}function _dihljkg(kljgih, xwvt) {
  xwvt['lineNumber'] = kljgih['lineNumber'], xwvt['columnNumber'] = kljgih['columnNumber'];
}function _dqprt(vywz$) {
  return vywz$ ? '\x0a@' + (vywz$['systemId'] || '') + '#[line:' + vywz$['lineNumber'] + ',col:' + vywz$['columnNumber'] + ']' : void 0x0;
}function _dqrotps(idhegf, ikjn, vwuyxt) {
  return 'string' == typeof idhegf ? idhegf['substr'](ikjn, vwuyxt) : idhegf['length'] >= ikjn + vwuyxt || ikjn ? new java['lang']['String'](idhegf, ikjn, vwuyxt) + '' : idhegf;
}function _dqolmn(aecfb, $yz0_) {
  (aecfb['currentElement'] || aecfb['doc'])['appendChild']($yz0_);
}_dfihgjk['prototype']['parseFromString'] = function (sotqr, hdgife) {
  var vtuws = this['options'],
      qornp = new _dporqts(),
      yx$vw = vtuws['domBuilder'] || new _djklmo(),
      npom = vtuws['errorHandler'],
      _1243 = vtuws['locator'],
      ruptq = vtuws['xmlns'] || {},
      $23_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _1243 && yx$vw['setDocumentLocator'](_1243), qornp['errorHandler'] = _dkmlnpo(npom, yx$vw, _1243), qornp['domBuilder'] = vtuws['domBuilder'] || yx$vw, /\/x?html?$/['test'](hdgife) && ($23_['nbsp'] = '\u00a0', $23_['copy'] = '©', ruptq[''] = 'http://www.w3.org/1999/xhtml'), ruptq['xml'] = ruptq['xml'] || 'http://www.w3.org/XML/1998/namespace', sotqr ? qornp['parse'](sotqr, ruptq, $23_) : qornp['errorHandler']['error']('invalid doc source'), yx$vw['doc'];
}, _djklmo['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dmijkln()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (zwvy$, hjkgif, opqlm, z2_01) {
    var wy$z_x = this['doc'],
        cbdge = wy$z_x['createElementNS'](zwvy$, opqlm || hjkgif),
        hdgce = z2_01['length'];_dqolmn(this, cbdge), this['currentElement'] = cbdge, this['locator'] && _dihljkg(this['locator'], cbdge);for (var uxz = 0x0; uxz < hdgce; uxz++) {
      var zwvy$ = z2_01['getURI'](uxz),
          ghdef = z2_01['getValue'](uxz),
          opqlm = z2_01['getQName'](uxz),
          sptu = wy$z_x['createAttributeNS'](zwvy$, opqlm);this['locator'] && _dihljkg(z2_01['getLocator'](uxz), sptu), sptu['value'] = sptu['nodeValue'] = ghdef, cbdge['setAttributeNode'](sptu);
    }
  }, 'endElement': function () {
    var nmlopk = this['currentElement'];nmlopk['tagName'], this['currentElement'] = nmlopk['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dcfgbe, moknp) {
    moknp = this['doc']['createProcessingInstruction'](dcfgbe, moknp), (this['locator'] && _dihljkg(this['locator'], moknp), _dqolmn(this, moknp));
  }, 'ignorableWhitespace': function () {}, 'characters': function (noqps) {
    var mjlkni;(noqps = _dqrotps['apply'](this, arguments)) && (mjlkni = this['cdata'] ? this['doc']['createCDATASection'](noqps) : this['doc']['createTextNode'](noqps), this['currentElement'] ? this['currentElement']['appendChild'](mjlkni) : /^\s*$/['test'](noqps) && this['doc']['appendChild'](mjlkni), this['locator'] && _dihljkg(this['locator'], mjlkni));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jhmli) {
    (this['locator'] = jhmli) && (jhmli['lineNumber'] = 0x0);
  }, 'comment': function (mjon) {
    mjon = _dqrotps['apply'](this, arguments);var qlmnp = this['doc']['createComment'](mjon);this['locator'] && _dihljkg(this['locator'], qlmnp), _dqolmn(this, qlmnp);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mnji, rposnq, x0$y) {
    var abcdef = this['doc']['implementation'];abcdef && abcdef['createDocumentType'] && (x0$y = abcdef['createDocumentType'](mnji, rposnq, x0$y), this['locator'] && _dihljkg(this['locator'], x0$y), _dqolmn(this, x0$y));
  }, 'warning': function (xvyzuw) {
    console['warn']('[xmldom warning]\t' + xvyzuw, _dqprt(this['locator']));
  }, 'error': function (ghdcf) {
    console['error']('[xmldom error]\t' + ghdcf, _dqprt(this['locator']));
  }, 'fatalError': function (nrpqos) {
    throw console['error']('[xmldom fatalError]\t' + nrpqos, _dqprt(this['locator'])), nrpqos;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (rvwt) {
  _djklmo['prototype'][rvwt] = function () {
    return null;
  };
});var _dporqts = require('./bbbsax')['XMLReader'],
    _dmijkln = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dfihgjk;