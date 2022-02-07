var _ = wx.y$;
function _dtsvqu(lnpomk) {
  this['options'] = lnpomk || { 'locator': {} };
}function _dcdegh(komnl, njki, w_yx$z) {
  function $z_1(ihegfd) {
    var ghidef = komnl[ihegfd];!ghidef && rtupsq && (ghidef = 0x2 == komnl['length'] ? function (hkjgi) {
      komnl(ihegfd, hkjgi);
    } : komnl), mnroqp[ihegfd] = ghidef && function (y1_$0z) {
      ghidef('[xmldom ' + ihegfd + ']\t' + y1_$0z + _dhikjlm(w_yx$z));
    } || function () {};
  }if (!komnl) {
    if (njki instanceof _dpnmoql) return njki;komnl = njki;
  }var mnroqp = {},
      rtupsq = komnl instanceof Function;return w_yx$z = w_yx$z || {}, $z_1('warning'), $z_1('error'), $z_1('fatalError'), mnroqp;
}function _dpnmoql() {
  this['cdata'] = !0x1;
}function _digje(_$0yxz, gjf) {
  gjf['lineNumber'] = _$0yxz['lineNumber'], gjf['columnNumber'] = _$0yxz['columnNumber'];
}function _dhikjlm(cedfba) {
  return cedfba ? '\x0a@' + (cedfba['systemId'] || '') + '#[line:' + cedfba['lineNumber'] + ',col:' + cedfba['columnNumber'] + ']' : void 0x0;
}function _dzwyx$v(dehfi, deigh, ytx) {
  return 'string' == typeof dehfi ? dehfi['substr'](deigh, ytx) : dehfi['length'] >= deigh + ytx || deigh ? new java['lang']['String'](dehfi, deigh, ytx) + '' : dehfi;
}function _dqropns(wyuv, uqtrps) {
  wyuv['currentElement'] ? wyuv['currentElement']['appendChild'](uqtrps) : wyuv['doc']['appendChild'](uqtrps);
}_dtsvqu['prototype']['parseFromString'] = function (ihfgk, vyux) {
  var yz_$x0 = this['options'],
      zy$10 = new _dvyz(),
      svwtx = yz_$x0['domBuilder'] || new _dpnmoql(),
      nmproq = yz_$x0['errorHandler'],
      rvuwst = yz_$x0['locator'],
      gbcfe = yz_$x0['xmlns'] || {},
      prsutq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rvuwst && svwtx['setDocumentLocator'](rvuwst), zy$10['errorHandler'] = _dcdegh(nmproq, svwtx, rvuwst), zy$10['domBuilder'] = yz_$x0['domBuilder'] || svwtx, /\/x?html?$/['test'](vyux) && (prsutq['nbsp'] = '\u00a0', prsutq['copy'] = '©', gbcfe[''] = 'http://www.w3.org/1999/xhtml'), gbcfe['xml'] = gbcfe['xml'] || 'http://www.w3.org/XML/1998/namespace', ihfgk ? zy$10['parse'](ihfgk, gbcfe, prsutq) : zy$10['errorHandler']['error']('invalid doc source'), svwtx['doc'];
}, _dpnmoql['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dgikh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ghefd, qnsp, zvwy$x, kfgjh) {
    var cfd = this['doc'],
        jghfei = cfd['createElementNS'](ghefd, zvwy$x || qnsp),
        zy0$_1 = kfgjh['length'];_dqropns(this, jghfei), this['currentElement'] = jghfei, this['locator'] && _digje(this['locator'], jghfei);for (var nojmlk = 0x0; zy0$_1 > nojmlk; nojmlk++) {
      var ghefd = kfgjh['getURI'](nojmlk),
          tuvr = kfgjh['getValue'](nojmlk),
          zvwy$x = kfgjh['getQName'](nojmlk),
          dfac = cfd['createAttributeNS'](ghefd, zvwy$x);this['locator'] && _digje(kfgjh['getLocator'](nojmlk), dfac), dfac['value'] = dfac['nodeValue'] = tuvr, jghfei['setAttributeNode'](dfac);
    }
  }, 'endElement': function () {
    {
      var nroqsp = this['currentElement'];nroqsp['tagName'];
    }this['currentElement'] = nroqsp['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (vwz$, lponq) {
    var ywuz = this['doc']['createProcessingInstruction'](vwz$, lponq);this['locator'] && _digje(this['locator'], ywuz), _dqropns(this, ywuz);
  }, 'ignorableWhitespace': function () {}, 'characters': function (psrqto) {
    if (psrqto = _dzwyx$v['apply'](this, arguments)) {
      if (this['cdata']) var hgkfi = this['doc']['createCDATASection'](psrqto);else var hgkfi = this['doc']['createTextNode'](psrqto);this['currentElement'] ? this['currentElement']['appendChild'](hgkfi) : /^\s*$/['test'](psrqto) && this['doc']['appendChild'](hgkfi), this['locator'] && _digje(this['locator'], hgkfi);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (fgheji) {
    (this['locator'] = fgheji) && (fgheji['lineNumber'] = 0x0);
  }, 'comment': function (usvtr) {
    usvtr = _dzwyx$v['apply'](this, arguments);var glij = this['doc']['createComment'](usvtr);this['locator'] && _digje(this['locator'], glij), _dqropns(this, glij);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_$z01y, utxwyv, fjih) {
    var feadbc = this['doc']['implementation'];if (feadbc && feadbc['createDocumentType']) {
      var ijhe = feadbc['createDocumentType'](_$z01y, utxwyv, fjih);this['locator'] && _digje(this['locator'], ijhe), _dqropns(this, ijhe);
    }
  }, 'warning': function (npsqro) {
    console['warn']('[xmldom warning]\t' + npsqro, _dhikjlm(this['locator']));
  }, 'error': function (qpustr) {
    console['error']('[xmldom error]\t' + qpustr, _dhikjlm(this['locator']));
  }, 'fatalError': function (higkfj) {
    throw console['error']('[xmldom fatalError]\t' + higkfj, _dhikjlm(this['locator'])), higkfj;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (eighj) {
  _dpnmoql['prototype'][eighj] = function () {
    return null;
  };
});var _dvyz = require('./bbbsax')['XMLReader'],
    _dgikh = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dtsvqu;