var _ = wx.y$;
function _dnmlq(wutvs) {
  this['options'] = wutvs || { 'locator': {} };
}function _djkmnlo(ilnjkm, rsoqpt, kmil) {
  function z_y10$(rsuvw) {
    var vz$x = ilnjkm[rsuvw];!vz$x && tswruv && (vz$x = 0x2 == ilnjkm['length'] ? function (fecb) {
      ilnjkm(rsuvw, fecb);
    } : ilnjkm), jmih[rsuvw] = vz$x && function (oplmnq) {
      vz$x('[xmldom ' + rsuvw + ']\t' + oplmnq + _djhkmi(kmil));
    } || function () {};
  }if (!ilnjkm) {
    if (rsoqpt instanceof _dnqoprs) return rsoqpt;ilnjkm = rsoqpt;
  }var jmih = {},
      tswruv = ilnjkm instanceof Function;return kmil = kmil || {}, z_y10$('warning'), z_y10$('error'), z_y10$('fatalError'), jmih;
}function _dnqoprs() {
  this['cdata'] = !0x1;
}function _dmlnq(txvwuy, onpsrq) {
  onpsrq['lineNumber'] = txvwuy['lineNumber'], onpsrq['columnNumber'] = txvwuy['columnNumber'];
}function _djhkmi(uywzxv) {
  return uywzxv ? '\x0a@' + (uywzxv['systemId'] || '') + '#[line:' + uywzxv['lineNumber'] + ',col:' + uywzxv['columnNumber'] + ']' : void 0x0;
}function _deihg(x_wz, wutvy, gfihed) {
  return 'string' == typeof x_wz ? x_wz['substr'](wutvy, gfihed) : x_wz['length'] >= wutvy + gfihed || wutvy ? new java['lang']['String'](x_wz, wutvy, gfihed) + '' : x_wz;
}function _dlpoqm(pqnsor, jilkhg) {
  pqnsor['currentElement'] ? pqnsor['currentElement']['appendChild'](jilkhg) : pqnsor['doc']['appendChild'](jilkhg);
}_dnmlq['prototype']['parseFromString'] = function (milnjk, vyut) {
  var fghji = this['options'],
      fikjhg = new _dbfdae(),
      z0_$y1 = fghji['domBuilder'] || new _dnqoprs(),
      z$xy_0 = fghji['errorHandler'],
      iglhj = fghji['locator'],
      imklj = fghji['xmlns'] || {},
      ecdfab = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return iglhj && z0_$y1['setDocumentLocator'](iglhj), fikjhg['errorHandler'] = _djkmnlo(z$xy_0, z0_$y1, iglhj), fikjhg['domBuilder'] = fghji['domBuilder'] || z0_$y1, /\/x?html?$/['test'](vyut) && (ecdfab['nbsp'] = '\u00a0', ecdfab['copy'] = '©', imklj[''] = 'http://www.w3.org/1999/xhtml'), imklj['xml'] = imklj['xml'] || 'http://www.w3.org/XML/1998/namespace', milnjk ? fikjhg['parse'](milnjk, imklj, ecdfab) : fikjhg['errorHandler']['error']('invalid doc source'), z0_$y1['doc'];
}, _dnqoprs['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dvrqtsu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (uxtyv, ytuxv, fdigh, ikjfgh) {
    var _0x$y = this['doc'],
        iljhk = _0x$y['createElementNS'](uxtyv, fdigh || ytuxv),
        nmrpoq = ikjfgh['length'];_dlpoqm(this, iljhk), this['currentElement'] = iljhk, this['locator'] && _dmlnq(this['locator'], iljhk);for (var rqpson = 0x0; nmrpoq > rqpson; rqpson++) {
      var uxtyv = ikjfgh['getURI'](rqpson),
          _z$wy = ikjfgh['getValue'](rqpson),
          fdigh = ikjfgh['getQName'](rqpson),
          $_103 = _0x$y['createAttributeNS'](uxtyv, fdigh);this['locator'] && _dmlnq(ikjfgh['getLocator'](rqpson), $_103), $_103['value'] = $_103['nodeValue'] = _z$wy, iljhk['setAttributeNode']($_103);
    }
  }, 'endElement': function () {
    {
      var w_yx = this['currentElement'];w_yx['tagName'];
    }this['currentElement'] = w_yx['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (cabf, $vwyzx) {
    var trsoq = this['doc']['createProcessingInstruction'](cabf, $vwyzx);this['locator'] && _dmlnq(this['locator'], trsoq), _dlpoqm(this, trsoq);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ihfk) {
    if (ihfk = _deihg['apply'](this, arguments)) {
      if (this['cdata']) var jlink = this['doc']['createCDATASection'](ihfk);else var jlink = this['doc']['createTextNode'](ihfk);this['currentElement'] ? this['currentElement']['appendChild'](jlink) : /^\s*$/['test'](ihfk) && this['doc']['appendChild'](jlink), this['locator'] && _dmlnq(this['locator'], jlink);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zvwux) {
    (this['locator'] = zvwux) && (zvwux['lineNumber'] = 0x0);
  }, 'comment': function (adbec) {
    adbec = _deihg['apply'](this, arguments);var pqomr = this['doc']['createComment'](adbec);this['locator'] && _dmlnq(this['locator'], pqomr), _dlpoqm(this, pqomr);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kgjfh, bdefc, $0z21) {
    var dbfac = this['doc']['implementation'];if (dbfac && dbfac['createDocumentType']) {
      var edbgfc = dbfac['createDocumentType'](kgjfh, bdefc, $0z21);this['locator'] && _dmlnq(this['locator'], edbgfc), _dlpoqm(this, edbgfc);
    }
  }, 'warning': function (mopkn) {
    console['warn']('[xmldom warning]\t' + mopkn, _djhkmi(this['locator']));
  }, 'error': function (mljhik) {
    console['error']('[xmldom error]\t' + mljhik, _djhkmi(this['locator']));
  }, 'fatalError': function (hjigf) {
    throw console['error']('[xmldom fatalError]\t' + hjigf, _djhkmi(this['locator'])), hjigf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (y$x_0) {
  _dnqoprs['prototype'][y$x_0] = function () {
    return null;
  };
});var _dbfdae = require('./bbbsax')['XMLReader'],
    _dvrqtsu = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dnmlq;