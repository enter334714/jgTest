var _ = wx.y$;
function _dfkj(stvur) {
  this['options'] = stvur || { 'locator': {} };
}function _ddehgc(ghlkij, soprt, mnlqop) {
  function edihg(ikfgjh) {
    var dgefi = ghlkij[ikfgjh];!dgefi && yx$vzw && (dgefi = 0x2 == ghlkij['length'] ? function (zy$_) {
      ghlkij(ikfgjh, zy$_);
    } : ghlkij), eihfd[ikfgjh] = dgefi && function (qnrspo) {
      dgefi('[xmldom ' + ikfgjh + ']\t' + qnrspo + _drpsonq(mnlqop));
    } || function () {};
  }if (!ghlkij) {
    if (soprt instanceof _dwstuv) return soprt;ghlkij = soprt;
  }var eihfd = {},
      yx$vzw = ghlkij instanceof Function;return mnlqop = mnlqop || {}, edihg('warning'), edihg('error'), edihg('fatalError'), eihfd;
}function _dwstuv() {
  this['cdata'] = !0x1;
}function _djonl(oqspnr, trwu) {
  trwu['lineNumber'] = oqspnr['lineNumber'], trwu['columnNumber'] = oqspnr['columnNumber'];
}function _drpsonq(omplnq) {
  return omplnq ? '\x0a@' + (omplnq['systemId'] || '') + '#[line:' + omplnq['lineNumber'] + ',col:' + omplnq['columnNumber'] + ']' : void 0x0;
}function _dopmqnr(omnljk, vuzx, $0231) {
  return 'string' == typeof omnljk ? omnljk['substr'](vuzx, $0231) : omnljk['length'] >= vuzx + $0231 || vuzx ? new java['lang']['String'](omnljk, vuzx, $0231) + '' : omnljk;
}function _dmpnro(txsuw, feji) {
  txsuw['currentElement'] ? txsuw['currentElement']['appendChild'](feji) : txsuw['doc']['appendChild'](feji);
}_dfkj['prototype']['parseFromString'] = function (kmopln, onrps) {
  var wvyzx = this['options'],
      wzvuyx = new _dvwtrs(),
      kjimhl = wvyzx['domBuilder'] || new _dwstuv(),
      tvrswu = wvyzx['errorHandler'],
      vwyxtu = wvyzx['locator'],
      klpno = wvyzx['xmlns'] || {},
      cefab = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return vwyxtu && kjimhl['setDocumentLocator'](vwyxtu), wzvuyx['errorHandler'] = _ddehgc(tvrswu, kjimhl, vwyxtu), wzvuyx['domBuilder'] = wvyzx['domBuilder'] || kjimhl, /\/x?html?$/['test'](onrps) && (cefab['nbsp'] = '\u00a0', cefab['copy'] = '©', klpno[''] = 'http://www.w3.org/1999/xhtml'), klpno['xml'] = klpno['xml'] || 'http://www.w3.org/XML/1998/namespace', kmopln ? wzvuyx['parse'](kmopln, klpno, cefab) : wzvuyx['errorHandler']['error']('invalid doc source'), kjimhl['doc'];
}, _dwstuv['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dljkonm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (tusxv, twux, _102, bdaefc) {
    var jhigkl = this['doc'],
        iej = jhigkl['createElementNS'](tusxv, _102 || twux),
        onmjk = bdaefc['length'];_dmpnro(this, iej), this['currentElement'] = iej, this['locator'] && _djonl(this['locator'], iej);for (var tsvwru = 0x0; onmjk > tsvwru; tsvwru++) {
      var tusxv = bdaefc['getURI'](tsvwru),
          rwtvsu = bdaefc['getValue'](tsvwru),
          _102 = bdaefc['getQName'](tsvwru),
          efdghc = jhigkl['createAttributeNS'](tusxv, _102);this['locator'] && _djonl(bdaefc['getLocator'](tsvwru), efdghc), efdghc['value'] = efdghc['nodeValue'] = rwtvsu, iej['setAttributeNode'](efdghc);
    }
  }, 'endElement': function () {
    {
      var _z02$ = this['currentElement'];_z02$['tagName'];
    }this['currentElement'] = _z02$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (heijfg, tvursq) {
    var hjfgi = this['doc']['createProcessingInstruction'](heijfg, tvursq);this['locator'] && _djonl(this['locator'], hjfgi), _dmpnro(this, hjfgi);
  }, 'ignorableWhitespace': function () {}, 'characters': function (srtopq) {
    if (srtopq = _dopmqnr['apply'](this, arguments)) {
      if (this['cdata']) var nrpos = this['doc']['createCDATASection'](srtopq);else var nrpos = this['doc']['createTextNode'](srtopq);this['currentElement'] ? this['currentElement']['appendChild'](nrpos) : /^\s*$/['test'](srtopq) && this['doc']['appendChild'](nrpos), this['locator'] && _djonl(this['locator'], nrpos);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nqrsop) {
    (this['locator'] = nqrsop) && (nqrsop['lineNumber'] = 0x0);
  }, 'comment': function (vuz) {
    vuz = _dopmqnr['apply'](this, arguments);var porsqn = this['doc']['createComment'](vuz);this['locator'] && _djonl(this['locator'], porsqn), _dmpnro(this, porsqn);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($_z0x, strwu, ifgjk) {
    var hkiglj = this['doc']['implementation'];if (hkiglj && hkiglj['createDocumentType']) {
      var iefhdg = hkiglj['createDocumentType']($_z0x, strwu, ifgjk);this['locator'] && _djonl(this['locator'], iefhdg), _dmpnro(this, iefhdg);
    }
  }, 'warning': function (gfb) {
    console['warn']('[xmldom warning]\t' + gfb, _drpsonq(this['locator']));
  }, 'error': function (igkhf) {
    console['error']('[xmldom error]\t' + igkhf, _drpsonq(this['locator']));
  }, 'fatalError': function (uyzxw) {
    throw console['error']('[xmldom fatalError]\t' + uyzxw, _drpsonq(this['locator'])), uyzxw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fhjgki) {
  _dwstuv['prototype'][fhjgki] = function () {
    return null;
  };
});var _dvwtrs = require('./bbbsax')['XMLReader'],
    _dljkonm = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dfkj;