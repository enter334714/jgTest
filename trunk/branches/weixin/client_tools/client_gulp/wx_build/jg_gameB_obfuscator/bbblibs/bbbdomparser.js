var _ = wx.y$;
function _dbgdc(xzy$_w) {
  this['options'] = xzy$_w || { 'locator': {} };
}function _dvrust(fgh, mklj, olknm) {
  function uwrvs(npmo) {
    var vusxtw = fgh[npmo];!vusxtw && mihlk && (vusxtw = 0x2 == fgh['length'] ? function (egfh) {
      fgh(npmo, egfh);
    } : fgh), gcfhed[npmo] = vusxtw && function (dgefbc) {
      vusxtw('[xmldom ' + npmo + ']\t' + dgefbc + _dcbf(olknm));
    } || function () {};
  }if (!fgh) {
    if (mklj instanceof _dswuxtv) return mklj;fgh = mklj;
  }var gcfhed = {},
      mihlk = fgh instanceof Function;return olknm = olknm || {}, uwrvs('warning'), uwrvs('error'), uwrvs('fatalError'), gcfhed;
}function _dswuxtv() {
  this['cdata'] = !0x1;
}function _dronmq(_02143, $z0y_1) {
  $z0y_1['lineNumber'] = _02143['lineNumber'], $z0y_1['columnNumber'] = _02143['columnNumber'];
}function _dcbf(mikn) {
  return mikn ? '\x0a@' + (mikn['systemId'] || '') + '#[line:' + mikn['lineNumber'] + ',col:' + mikn['columnNumber'] + ']' : void 0x0;
}function _djfhg(rstpqu, vw$xz, vwy$) {
  return 'string' == typeof rstpqu ? rstpqu['substr'](vw$xz, vwy$) : rstpqu['length'] >= vw$xz + vwy$ || vw$xz ? new java['lang']['String'](rstpqu, vw$xz, vwy$) + '' : rstpqu;
}function _diefjg(cdabef, knjlom) {
  cdabef['currentElement'] ? cdabef['currentElement']['appendChild'](knjlom) : cdabef['doc']['appendChild'](knjlom);
}_dbgdc['prototype']['parseFromString'] = function (tuqsrp, wzv$x) {
  var prtuqs = this['options'],
      npo = new _dfihg(),
      _yw = prtuqs['domBuilder'] || new _dswuxtv(),
      zwy$xv = prtuqs['errorHandler'],
      sqopt = prtuqs['locator'],
      cade = prtuqs['xmlns'] || {},
      xz_w$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return sqopt && _yw['setDocumentLocator'](sqopt), npo['errorHandler'] = _dvrust(zwy$xv, _yw, sqopt), npo['domBuilder'] = prtuqs['domBuilder'] || _yw, /\/x?html?$/['test'](wzv$x) && (xz_w$['nbsp'] = '\u00a0', xz_w$['copy'] = '©', cade[''] = 'http://www.w3.org/1999/xhtml'), cade['xml'] = cade['xml'] || 'http://www.w3.org/XML/1998/namespace', tuqsrp ? npo['parse'](tuqsrp, cade, xz_w$) : npo['errorHandler']['error']('invalid doc source'), _yw['doc'];
}, _dswuxtv['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dlkjh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ijegh, qnrp, kghjl, degfc) {
    var wvurs = this['doc'],
        hkjg = wvurs['createElementNS'](ijegh, kghjl || qnrp),
        qlmp = degfc['length'];_diefjg(this, hkjg), this['currentElement'] = hkjg, this['locator'] && _dronmq(this['locator'], hkjg);for (var mlnkoj = 0x0; qlmp > mlnkoj; mlnkoj++) {
      var ijegh = degfc['getURI'](mlnkoj),
          gjfeih = degfc['getValue'](mlnkoj),
          kghjl = degfc['getQName'](mlnkoj),
          rsto = wvurs['createAttributeNS'](ijegh, kghjl);this['locator'] && _dronmq(degfc['getLocator'](mlnkoj), rsto), rsto['value'] = rsto['nodeValue'] = gjfeih, hkjg['setAttributeNode'](rsto);
    }
  }, 'endElement': function () {
    {
      var ilhmkj = this['currentElement'];ilhmkj['tagName'];
    }this['currentElement'] = ilhmkj['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (omkjln, utwvy) {
    var uxvzw = this['doc']['createProcessingInstruction'](omkjln, utwvy);this['locator'] && _dronmq(this['locator'], uxvzw), _diefjg(this, uxvzw);
  }, 'ignorableWhitespace': function () {}, 'characters': function (jghei) {
    if (jghei = _djfhg['apply'](this, arguments)) {
      if (this['cdata']) var vxwtyu = this['doc']['createCDATASection'](jghei);else var vxwtyu = this['doc']['createTextNode'](jghei);this['currentElement'] ? this['currentElement']['appendChild'](vxwtyu) : /^\s*$/['test'](jghei) && this['doc']['appendChild'](vxwtyu), this['locator'] && _dronmq(this['locator'], vxwtyu);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (gebfcd) {
    (this['locator'] = gebfcd) && (gebfcd['lineNumber'] = 0x0);
  }, 'comment': function (_0312) {
    _0312 = _djfhg['apply'](this, arguments);var quprts = this['doc']['createComment'](_0312);this['locator'] && _dronmq(this['locator'], quprts), _diefjg(this, quprts);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kli, fghj, fjhg) {
    var mkijh = this['doc']['implementation'];if (mkijh && mkijh['createDocumentType']) {
      var rmnqpo = mkijh['createDocumentType'](kli, fghj, fjhg);this['locator'] && _dronmq(this['locator'], rmnqpo), _diefjg(this, rmnqpo);
    }
  }, 'warning': function ($_xy0) {
    console['warn']('[xmldom warning]\t' + $_xy0, _dcbf(this['locator']));
  }, 'error': function (gfbdce) {
    console['error']('[xmldom error]\t' + gfbdce, _dcbf(this['locator']));
  }, 'fatalError': function (qprsut) {
    throw console['error']('[xmldom fatalError]\t' + qprsut, _dcbf(this['locator'])), qprsut;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qsrutv) {
  _dswuxtv['prototype'][qsrutv] = function () {
    return null;
  };
});var _dfihg = require('./bbbsax')['XMLReader'],
    _dlkjh = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dbgdc;