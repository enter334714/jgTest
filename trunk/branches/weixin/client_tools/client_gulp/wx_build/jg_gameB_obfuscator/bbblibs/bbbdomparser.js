var _ = wx.y$;
function _dosnrqp(strvw) {
  this['options'] = strvw || { 'locator': {} };
}function _dqvtur(vtuy, vs, xyvuz) {
  function w$vxz($_z0) {
    var gifkjh = vtuy[$_z0];!gifkjh && ruwtsv && (gifkjh = 0x2 == vtuy['length'] ? function (pronmq) {
      vtuy($_z0, pronmq);
    } : vtuy), $wzxvy[$_z0] = gifkjh && function (vuxws) {
      gifkjh('[xmldom ' + $_z0 + ']\t' + vuxws + _dpqmnro(xyvuz));
    } || function () {};
  }if (!vtuy) {
    if (vs instanceof _dx$ywv) return vs;vtuy = vs;
  }var $wzxvy = {},
      ruwtsv = vtuy instanceof Function;return xyvuz = xyvuz || {}, w$vxz('warning'), w$vxz('error'), w$vxz('fatalError'), $wzxvy;
}function _dx$ywv() {
  this['cdata'] = !0x1;
}function _dkj(xzyv$w, bgcfde) {
  bgcfde['lineNumber'] = xzyv$w['lineNumber'], bgcfde['columnNumber'] = xzyv$w['columnNumber'];
}function _dpqmnro(nopqlm) {
  return nopqlm ? '\x0a@' + (nopqlm['systemId'] || '') + '#[line:' + nopqlm['lineNumber'] + ',col:' + nopqlm['columnNumber'] + ']' : void 0x0;
}function _dtvyw(ljkhim, mkonlj, fcbaed) {
  return 'string' == typeof ljkhim ? ljkhim['substr'](mkonlj, fcbaed) : ljkhim['length'] >= mkonlj + fcbaed || mkonlj ? new java['lang']['String'](ljkhim, mkonlj, fcbaed) + '' : ljkhim;
}function _djighlk(ijkmln, fhdig) {
  ijkmln['currentElement'] ? ijkmln['currentElement']['appendChild'](fhdig) : ijkmln['doc']['appendChild'](fhdig);
}_dosnrqp['prototype']['parseFromString'] = function (trswvu, ghfced) {
  var deacf = this['options'],
      acfb = new _dhijgf(),
      lni = deacf['domBuilder'] || new _dx$ywv(),
      vursqt = deacf['errorHandler'],
      omlnkj = deacf['locator'],
      qsup = deacf['xmlns'] || {},
      qutsvr = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return omlnkj && lni['setDocumentLocator'](omlnkj), acfb['errorHandler'] = _dqvtur(vursqt, lni, omlnkj), acfb['domBuilder'] = deacf['domBuilder'] || lni, /\/x?html?$/['test'](ghfced) && (qutsvr['nbsp'] = '\u00a0', qutsvr['copy'] = '©', qsup[''] = 'http://www.w3.org/1999/xhtml'), qsup['xml'] = qsup['xml'] || 'http://www.w3.org/XML/1998/namespace', trswvu ? acfb['parse'](trswvu, qsup, qutsvr) : acfb['errorHandler']['error']('invalid doc source'), lni['doc'];
}, _dx$ywv['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dhijeg()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (vxuywz, pstur, khjl, klopmn) {
    var vwus = this['doc'],
        utpqs = vwus['createElementNS'](vxuywz, khjl || pstur),
        lhjkgi = klopmn['length'];_djighlk(this, utpqs), this['currentElement'] = utpqs, this['locator'] && _dkj(this['locator'], utpqs);for (var _3102$ = 0x0; lhjkgi > _3102$; _3102$++) {
      var vxuywz = klopmn['getURI'](_3102$),
          jhkgif = klopmn['getValue'](_3102$),
          khjl = klopmn['getQName'](_3102$),
          tsproq = vwus['createAttributeNS'](vxuywz, khjl);this['locator'] && _dkj(klopmn['getLocator'](_3102$), tsproq), tsproq['value'] = tsproq['nodeValue'] = jhkgif, utpqs['setAttributeNode'](tsproq);
    }
  }, 'endElement': function () {
    {
      var ywzvu = this['currentElement'];ywzvu['tagName'];
    }this['currentElement'] = ywzvu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zw$yxv, $32) {
    var ptrus = this['doc']['createProcessingInstruction'](zw$yxv, $32);this['locator'] && _dkj(this['locator'], ptrus), _djighlk(this, ptrus);
  }, 'ignorableWhitespace': function () {}, 'characters': function (strv) {
    if (strv = _dtvyw['apply'](this, arguments)) {
      if (this['cdata']) var urqtps = this['doc']['createCDATASection'](strv);else var urqtps = this['doc']['createTextNode'](strv);this['currentElement'] ? this['currentElement']['appendChild'](urqtps) : /^\s*$/['test'](strv) && this['doc']['appendChild'](urqtps), this['locator'] && _dkj(this['locator'], urqtps);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nsrqop) {
    (this['locator'] = nsrqop) && (nsrqop['lineNumber'] = 0x0);
  }, 'comment': function (hikg) {
    hikg = _dtvyw['apply'](this, arguments);var hdgeif = this['doc']['createComment'](hikg);this['locator'] && _dkj(this['locator'], hdgeif), _djighlk(this, hdgeif);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (wy_zx$, jkn, onqrp) {
    var tqrusp = this['doc']['implementation'];if (tqrusp && tqrusp['createDocumentType']) {
      var vsrtuw = tqrusp['createDocumentType'](wy_zx$, jkn, onqrp);this['locator'] && _dkj(this['locator'], vsrtuw), _djighlk(this, vsrtuw);
    }
  }, 'warning': function (trvsuq) {
    console['warn']('[xmldom warning]\t' + trvsuq, _dpqmnro(this['locator']));
  }, 'error': function (nqplom) {
    console['error']('[xmldom error]\t' + nqplom, _dpqmnro(this['locator']));
  }, 'fatalError': function ($vy) {
    throw console['error']('[xmldom fatalError]\t' + $vy, _dpqmnro(this['locator'])), $vy;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (nmoqr) {
  _dx$ywv['prototype'][nmoqr] = function () {
    return null;
  };
});var _dhijgf = require('./bbbsax')['XMLReader'],
    _dhijeg = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dosnrqp;