var _ = wx.y$;
function _d_2z0(_wyzx) {
  this['options'] = _wyzx || { 'locator': {} };
}function _dlmihj(srpq, qmporn, norsp) {
  function wyxz$v(upqr) {
    var ywzx = srpq[upqr];!ywzx && y$_z0 && (ywzx = 0x2 == srpq['length'] ? function (turp) {
      srpq(upqr, turp);
    } : srpq), jhkf[upqr] = ywzx && function (iefgj) {
      ywzx('[xmldom ' + upqr + ']\t' + iefgj + _dtwvusx(norsp));
    } || function () {};
  }if (!srpq) {
    if (qmporn instanceof _drusvqt) return qmporn;srpq = qmporn;
  }var jhkf = {},
      y$_z0 = srpq instanceof Function;return norsp = norsp || {}, wyxz$v('warning'), wyxz$v('error'), wyxz$v('fatalError'), jhkf;
}function _drusvqt() {
  this['cdata'] = !0x1;
}function _dkmilnj($vwyz, uxvwyz) {
  uxvwyz['lineNumber'] = $vwyz['lineNumber'], uxvwyz['columnNumber'] = $vwyz['columnNumber'];
}function _dtwvusx(mhklji) {
  return mhklji ? '\x0a@' + (mhklji['systemId'] || '') + '#[line:' + mhklji['lineNumber'] + ',col:' + mhklji['columnNumber'] + ']' : void 0x0;
}function _dlompqn(acdbe, mqnlo, _0y$z1) {
  return 'string' == typeof acdbe ? acdbe['substr'](mqnlo, _0y$z1) : acdbe['length'] >= mqnlo + _0y$z1 || mqnlo ? new java['lang']['String'](acdbe, mqnlo, _0y$z1) + '' : acdbe;
}function _dqonps(yzx_$0, qsutvr) {
  yzx_$0['currentElement'] ? yzx_$0['currentElement']['appendChild'](qsutvr) : yzx_$0['doc']['appendChild'](qsutvr);
}_d_2z0['prototype']['parseFromString'] = function (srutqp, lmknp) {
  var rmonp = this['options'],
      jhikfg = new _dwtxy(),
      vuxtsw = rmonp['domBuilder'] || new _drusvqt(),
      hgj = rmonp['errorHandler'],
      ospqrn = rmonp['locator'],
      promnq = rmonp['xmlns'] || {},
      lonjkm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ospqrn && vuxtsw['setDocumentLocator'](ospqrn), jhikfg['errorHandler'] = _dlmihj(hgj, vuxtsw, ospqrn), jhikfg['domBuilder'] = rmonp['domBuilder'] || vuxtsw, /\/x?html?$/['test'](lmknp) && (lonjkm['nbsp'] = '\u00a0', lonjkm['copy'] = '©', promnq[''] = 'http://www.w3.org/1999/xhtml'), promnq['xml'] = promnq['xml'] || 'http://www.w3.org/XML/1998/namespace', srutqp ? jhikfg['parse'](srutqp, promnq, lonjkm) : jhikfg['errorHandler']['error']('invalid doc source'), vuxtsw['doc'];
}, _drusvqt['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dopqst()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (nmiklj, w$xv, z0y1$, ejgf) {
    var plqm = this['doc'],
        svuxwt = plqm['createElementNS'](nmiklj, z0y1$ || w$xv),
        qrsnp = ejgf['length'];_dqonps(this, svuxwt), this['currentElement'] = svuxwt, this['locator'] && _dkmilnj(this['locator'], svuxwt);for (var ruqps = 0x0; qrsnp > ruqps; ruqps++) {
      var nmiklj = ejgf['getURI'](ruqps),
          jmkhi = ejgf['getValue'](ruqps),
          z0y1$ = ejgf['getQName'](ruqps),
          $_23 = plqm['createAttributeNS'](nmiklj, z0y1$);this['locator'] && _dkmilnj(ejgf['getLocator'](ruqps), $_23), $_23['value'] = $_23['nodeValue'] = jmkhi, svuxwt['setAttributeNode']($_23);
    }
  }, 'endElement': function () {
    {
      var polmkn = this['currentElement'];polmkn['tagName'];
    }this['currentElement'] = polmkn['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fegji, edbgfc) {
    var opqln = this['doc']['createProcessingInstruction'](fegji, edbgfc);this['locator'] && _dkmilnj(this['locator'], opqln), _dqonps(this, opqln);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ilhkgj) {
    if (ilhkgj = _dlompqn['apply'](this, arguments)) {
      if (this['cdata']) var nmjo = this['doc']['createCDATASection'](ilhkgj);else var nmjo = this['doc']['createTextNode'](ilhkgj);this['currentElement'] ? this['currentElement']['appendChild'](nmjo) : /^\s*$/['test'](ilhkgj) && this['doc']['appendChild'](nmjo), this['locator'] && _dkmilnj(this['locator'], nmjo);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wyvx$z) {
    (this['locator'] = wyvx$z) && (wyvx$z['lineNumber'] = 0x0);
  }, 'comment': function (ebfad) {
    ebfad = _dlompqn['apply'](this, arguments);var kmhjli = this['doc']['createComment'](ebfad);this['locator'] && _dkmilnj(this['locator'], kmhjli), _dqonps(this, kmhjli);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nojlk, uqprt, gfdch) {
    var ifde = this['doc']['implementation'];if (ifde && ifde['createDocumentType']) {
      var xuwvy = ifde['createDocumentType'](nojlk, uqprt, gfdch);this['locator'] && _dkmilnj(this['locator'], xuwvy), _dqonps(this, xuwvy);
    }
  }, 'warning': function (omknl) {
    console['warn']('[xmldom warning]\t' + omknl, _dtwvusx(this['locator']));
  }, 'error': function (nmploq) {
    console['error']('[xmldom error]\t' + nmploq, _dtwvusx(this['locator']));
  }, 'fatalError': function (suvrqt) {
    throw console['error']('[xmldom fatalError]\t' + suvrqt, _dtwvusx(this['locator'])), suvrqt;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (urtpqs) {
  _drusvqt['prototype'][urtpqs] = function () {
    return null;
  };
});var _dwtxy = require('./bbbsax')['XMLReader'],
    _dopqst = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _d_2z0;