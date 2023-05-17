var _ = wx.y$;
function _dfabdc(usvwtr) {
  this['options'] = usvwtr || { 'locator': {} };
}function _dtvsxwu(gjehf, difeh, lim) {
  function npmqlo(vxswtu) {
    var gjik = gjehf[vxswtu];!gjik && $0xy && (gjik = 0x2 == gjehf['length'] ? function (dfbae) {
      gjehf(vxswtu, dfbae);
    } : gjehf), vtwsur[vxswtu] = gjik && function (cafdeb) {
      gjik('[xmldom ' + vxswtu + ']\t' + cafdeb + _dvzwy$x(lim));
    } || function () {};
  }if (!gjehf) {
    if (difeh instanceof _dxuywtv) return difeh;gjehf = difeh;
  }var vtwsur = {},
      $0xy = gjehf instanceof Function;return lim = lim || {}, npmqlo('warning'), npmqlo('error'), npmqlo('fatalError'), vtwsur;
}function _dxuywtv() {
  this['cdata'] = !0x1;
}function _drqpmn(oqr, hkjmli) {
  hkjmli['lineNumber'] = oqr['lineNumber'], hkjmli['columnNumber'] = oqr['columnNumber'];
}function _dvzwy$x(rtqpu) {
  return rtqpu ? '\x0a@' + (rtqpu['systemId'] || '') + '#[line:' + rtqpu['lineNumber'] + ',col:' + rtqpu['columnNumber'] + ']' : void 0x0;
}function _dtuprqs(qpromn, noqprs, xzwuyv) {
  return 'string' == typeof qpromn ? qpromn['substr'](noqprs, xzwuyv) : qpromn['length'] >= noqprs + xzwuyv || noqprs ? new java['lang']['String'](qpromn, noqprs, xzwuyv) + '' : qpromn;
}function _dfgchd(sxvwut, jlmkh) {
  sxvwut['currentElement'] ? sxvwut['currentElement']['appendChild'](jlmkh) : sxvwut['doc']['appendChild'](jlmkh);
}_dfabdc['prototype']['parseFromString'] = function (tuwrs, hmkjli) {
  var cbeadf = this['options'],
      jimh = new _dvxuwyz(),
      z01y$ = cbeadf['domBuilder'] || new _dxuywtv(),
      efhjig = cbeadf['errorHandler'],
      npqmor = cbeadf['locator'],
      adbecf = cbeadf['xmlns'] || {},
      gbefc = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return npqmor && z01y$['setDocumentLocator'](npqmor), jimh['errorHandler'] = _dtvsxwu(efhjig, z01y$, npqmor), jimh['domBuilder'] = cbeadf['domBuilder'] || z01y$, /\/x?html?$/['test'](hmkjli) && (gbefc['nbsp'] = '\u00a0', gbefc['copy'] = '©', adbecf[''] = 'http://www.w3.org/1999/xhtml'), adbecf['xml'] = adbecf['xml'] || 'http://www.w3.org/XML/1998/namespace', tuwrs ? jimh['parse'](tuwrs, adbecf, gbefc) : jimh['errorHandler']['error']('invalid doc source'), z01y$['doc'];
}, _dxuywtv['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dlikgj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (fgkhj, lnkij, qtrsop, jkmhl) {
    var txwus = this['doc'],
        yxvwu = txwus['createElementNS'](fgkhj, qtrsop || lnkij),
        dhif = jkmhl['length'];_dfgchd(this, yxvwu), this['currentElement'] = yxvwu, this['locator'] && _drqpmn(this['locator'], yxvwu);for (var hjkim = 0x0; dhif > hjkim; hjkim++) {
      var fgkhj = jkmhl['getURI'](hjkim),
          kjm = jkmhl['getValue'](hjkim),
          qtrsop = jkmhl['getQName'](hjkim),
          onlqpm = txwus['createAttributeNS'](fgkhj, qtrsop);this['locator'] && _drqpmn(jkmhl['getLocator'](hjkim), onlqpm), onlqpm['value'] = onlqpm['nodeValue'] = kjm, yxvwu['setAttributeNode'](onlqpm);
    }
  }, 'endElement': function () {
    {
      var inl = this['currentElement'];inl['tagName'];
    }this['currentElement'] = inl['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fcdae, onmjk) {
    var qnsr = this['doc']['createProcessingInstruction'](fcdae, onmjk);this['locator'] && _drqpmn(this['locator'], qnsr), _dfgchd(this, qnsr);
  }, 'ignorableWhitespace': function () {}, 'characters': function (lihmkj) {
    if (lihmkj = _dtuprqs['apply'](this, arguments)) {
      if (this['cdata']) var mpnklo = this['doc']['createCDATASection'](lihmkj);else var mpnklo = this['doc']['createTextNode'](lihmkj);this['currentElement'] ? this['currentElement']['appendChild'](mpnklo) : /^\s*$/['test'](lihmkj) && this['doc']['appendChild'](mpnklo), this['locator'] && _drqpmn(this['locator'], mpnklo);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (gefdhi) {
    (this['locator'] = gefdhi) && (gefdhi['lineNumber'] = 0x0);
  }, 'comment': function (vwzyu) {
    vwzyu = _dtuprqs['apply'](this, arguments);var zuyxvw = this['doc']['createComment'](vwzyu);this['locator'] && _drqpmn(this['locator'], zuyxvw), _dfgchd(this, zuyxvw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mopknl, mojlnk, z1y0$) {
    var $w_xy = this['doc']['implementation'];if ($w_xy && $w_xy['createDocumentType']) {
      var jghfi = $w_xy['createDocumentType'](mopknl, mojlnk, z1y0$);this['locator'] && _drqpmn(this['locator'], jghfi), _dfgchd(this, jghfi);
    }
  }, 'warning': function (y$x_wz) {
    console['warn']('[xmldom warning]\t' + y$x_wz, _dvzwy$x(this['locator']));
  }, 'error': function (tsoqp) {
    console['error']('[xmldom error]\t' + tsoqp, _dvzwy$x(this['locator']));
  }, 'fatalError': function (ehijgf) {
    throw console['error']('[xmldom fatalError]\t' + ehijgf, _dvzwy$x(this['locator'])), ehijgf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (edcfgb) {
  _dxuywtv['prototype'][edcfgb] = function () {
    return null;
  };
});var _dvxuwyz = require('./bbbsax')['XMLReader'],
    _dlikgj = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dfabdc;