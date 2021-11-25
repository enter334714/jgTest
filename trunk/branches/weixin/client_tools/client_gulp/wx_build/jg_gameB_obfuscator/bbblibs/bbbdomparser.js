var _ = wx.y$;
function _dhgeifd(eghfdc) {
  this['options'] = eghfdc || { 'locator': {} };
}function _digfeh(opqmnl, yzxw_, _z12$) {
  function uzvyxw(fcadbe) {
    var x$y_w = opqmnl[fcadbe];!x$y_w && z$0y1_ && (x$y_w = 0x2 == opqmnl['length'] ? function (rnoqp) {
      opqmnl(fcadbe, rnoqp);
    } : opqmnl), xwvuyz[fcadbe] = x$y_w && function (dbcaef) {
      x$y_w('[xmldom ' + fcadbe + ']\t' + dbcaef + _dsqopnr(_z12$));
    } || function () {};
  }if (!opqmnl) {
    if (yzxw_ instanceof _dnosr) return yzxw_;opqmnl = yzxw_;
  }var xwvuyz = {},
      z$0y1_ = opqmnl instanceof Function;return _z12$ = _z12$ || {}, uzvyxw('warning'), uzvyxw('error'), uzvyxw('fatalError'), xwvuyz;
}function _dnosr() {
  this['cdata'] = !0x1;
}function _dgjkihf(ospqrn, svxutw) {
  svxutw['lineNumber'] = ospqrn['lineNumber'], svxutw['columnNumber'] = ospqrn['columnNumber'];
}function _dsqopnr(wzxy$) {
  return wzxy$ ? '\x0a@' + (wzxy$['systemId'] || '') + '#[line:' + wzxy$['lineNumber'] + ',col:' + wzxy$['columnNumber'] + ']' : void 0x0;
}function _d$xyzvw(qnlpo, fihegj, posrq) {
  return 'string' == typeof qnlpo ? qnlpo['substr'](fihegj, posrq) : qnlpo['length'] >= fihegj + posrq || fihegj ? new java['lang']['String'](qnlpo, fihegj, posrq) + '' : qnlpo;
}function _dfjgkh(x_$zw, ijmhk) {
  x_$zw['currentElement'] ? x_$zw['currentElement']['appendChild'](ijmhk) : x_$zw['doc']['appendChild'](ijmhk);
}_dhgeifd['prototype']['parseFromString'] = function ($xyz_w, cdfeb) {
  var niljkm = this['options'],
      srpoq = new _dvyuz(),
      vwtuy = niljkm['domBuilder'] || new _dnosr(),
      vtxws = niljkm['errorHandler'],
      fdech = niljkm['locator'],
      bcfeda = niljkm['xmlns'] || {},
      xsuw = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fdech && vwtuy['setDocumentLocator'](fdech), srpoq['errorHandler'] = _digfeh(vtxws, vwtuy, fdech), srpoq['domBuilder'] = niljkm['domBuilder'] || vwtuy, /\/x?html?$/['test'](cdfeb) && (xsuw['nbsp'] = '\u00a0', xsuw['copy'] = '©', bcfeda[''] = 'http://www.w3.org/1999/xhtml'), bcfeda['xml'] = bcfeda['xml'] || 'http://www.w3.org/XML/1998/namespace', $xyz_w ? srpoq['parse']($xyz_w, bcfeda, xsuw) : srpoq['errorHandler']['error']('invalid doc source'), vwtuy['doc'];
}, _dnosr['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dlinkm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (qnops, yw_z$x, twvsr, nmjli) {
    var hfeji = this['doc'],
        yzxuv = hfeji['createElementNS'](qnops, twvsr || yw_z$x),
        pmroqn = nmjli['length'];_dfjgkh(this, yzxuv), this['currentElement'] = yzxuv, this['locator'] && _dgjkihf(this['locator'], yzxuv);for (var fkhij = 0x0; pmroqn > fkhij; fkhij++) {
      var qnops = nmjli['getURI'](fkhij),
          gbf = nmjli['getValue'](fkhij),
          twvsr = nmjli['getQName'](fkhij),
          xzuwvy = hfeji['createAttributeNS'](qnops, twvsr);this['locator'] && _dgjkihf(nmjli['getLocator'](fkhij), xzuwvy), xzuwvy['value'] = xzuwvy['nodeValue'] = gbf, yzxuv['setAttributeNode'](xzuwvy);
    }
  }, 'endElement': function () {
    {
      var utwrv = this['currentElement'];utwrv['tagName'];
    }this['currentElement'] = utwrv['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (hilkmj, $yz0_) {
    var mnpqro = this['doc']['createProcessingInstruction'](hilkmj, $yz0_);this['locator'] && _dgjkihf(this['locator'], mnpqro), _dfjgkh(this, mnpqro);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hklgj) {
    if (hklgj = _d$xyzvw['apply'](this, arguments)) {
      if (this['cdata']) var ponq = this['doc']['createCDATASection'](hklgj);else var ponq = this['doc']['createTextNode'](hklgj);this['currentElement'] ? this['currentElement']['appendChild'](ponq) : /^\s*$/['test'](hklgj) && this['doc']['appendChild'](ponq), this['locator'] && _dgjkihf(this['locator'], ponq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rqnmpo) {
    (this['locator'] = rqnmpo) && (rqnmpo['lineNumber'] = 0x0);
  }, 'comment': function (rtspoq) {
    rtspoq = _d$xyzvw['apply'](this, arguments);var hdgfc = this['doc']['createComment'](rtspoq);this['locator'] && _dgjkihf(this['locator'], hdgfc), _dfjgkh(this, hdgfc);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (npsqor, tqops, qnposr) {
    var yx$z0_ = this['doc']['implementation'];if (yx$z0_ && yx$z0_['createDocumentType']) {
      var onqpsr = yx$z0_['createDocumentType'](npsqor, tqops, qnposr);this['locator'] && _dgjkihf(this['locator'], onqpsr), _dfjgkh(this, onqpsr);
    }
  }, 'warning': function (dgeihf) {
    console['warn']('[xmldom warning]\t' + dgeihf, _dsqopnr(this['locator']));
  }, 'error': function (opmknl) {
    console['error']('[xmldom error]\t' + opmknl, _dsqopnr(this['locator']));
  }, 'fatalError': function (tsvruw) {
    throw console['error']('[xmldom fatalError]\t' + tsvruw, _dsqopnr(this['locator'])), tsvruw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (gefcdh) {
  _dnosr['prototype'][gefcdh] = function () {
    return null;
  };
});var _dvyuz = require('./bbbsax')['XMLReader'],
    _dlinkm = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dhgeifd;