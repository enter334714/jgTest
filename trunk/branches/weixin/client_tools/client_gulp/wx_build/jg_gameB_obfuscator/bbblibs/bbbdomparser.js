var _ = wx.y$;
function _dxuzvwy(qrstp) {
  this['options'] = qrstp || { 'locator': {} };
}function _djkmoln(mro, _z1y$0, klnmji) {
  function vx$wzy($_0z2) {
    var xwyvz = mro[$_0z2];!xwyvz && ghjf && (xwyvz = 0x2 == mro['length'] ? function (ilkj) {
      mro($_0z2, ilkj);
    } : mro), fdegcb[$_0z2] = xwyvz && function (rnosqp) {
      xwyvz('[xmldom ' + $_0z2 + ']\t' + rnosqp + _d_0124(klnmji));
    } || function () {};
  }if (!mro) {
    if (_z1y$0 instanceof _d_$yz10) return _z1y$0;mro = _z1y$0;
  }var fdegcb = {},
      ghjf = mro instanceof Function;return klnmji = klnmji || {}, vx$wzy('warning'), vx$wzy('error'), vx$wzy('fatalError'), fdegcb;
}function _d_$yz10() {
  this['cdata'] = !0x1;
}function _djhegif(rpquts, klmjo) {
  klmjo['lineNumber'] = rpquts['lineNumber'], klmjo['columnNumber'] = rpquts['columnNumber'];
}function _d_0124(cdfeba) {
  return cdfeba ? '\x0a@' + (cdfeba['systemId'] || '') + '#[line:' + cdfeba['lineNumber'] + ',col:' + cdfeba['columnNumber'] + ']' : void 0x0;
}function _dsrtqop(vsqru, $2_3, wyvtux) {
  return 'string' == typeof vsqru ? vsqru['substr']($2_3, wyvtux) : vsqru['length'] >= $2_3 + wyvtux || $2_3 ? new java['lang']['String'](vsqru, $2_3, wyvtux) + '' : vsqru;
}function _dronqmp(zx$y_, ghjef) {
  zx$y_['currentElement'] ? zx$y_['currentElement']['appendChild'](ghjef) : zx$y_['doc']['appendChild'](ghjef);
}_dxuzvwy['prototype']['parseFromString'] = function (vwzxy$, gcedbf) {
  var hilgjk = this['options'],
      srwvt = new _dadcbfe(),
      ywvzu = hilgjk['domBuilder'] || new _d_$yz10(),
      jiklm = hilgjk['errorHandler'],
      jkhfgi = hilgjk['locator'],
      ifd = hilgjk['xmlns'] || {},
      noplqm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jkhfgi && ywvzu['setDocumentLocator'](jkhfgi), srwvt['errorHandler'] = _djkmoln(jiklm, ywvzu, jkhfgi), srwvt['domBuilder'] = hilgjk['domBuilder'] || ywvzu, /\/x?html?$/['test'](gcedbf) && (noplqm['nbsp'] = '\u00a0', noplqm['copy'] = '©', ifd[''] = 'http://www.w3.org/1999/xhtml'), ifd['xml'] = ifd['xml'] || 'http://www.w3.org/XML/1998/namespace', vwzxy$ ? srwvt['parse'](vwzxy$, ifd, noplqm) : srwvt['errorHandler']['error']('invalid doc source'), ywvzu['doc'];
}, _d_$yz10['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dmoknp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gdebfc, gjehif, zw$v, snpqo) {
    var lkghji = this['doc'],
        lqopn = lkghji['createElementNS'](gdebfc, zw$v || gjehif),
        plmnko = snpqo['length'];_dronqmp(this, lqopn), this['currentElement'] = lqopn, this['locator'] && _djhegif(this['locator'], lqopn);for (var $1z20_ = 0x0; plmnko > $1z20_; $1z20_++) {
      var gdebfc = snpqo['getURI']($1z20_),
          fjhi = snpqo['getValue']($1z20_),
          zw$v = snpqo['getQName']($1z20_),
          chfgde = lkghji['createAttributeNS'](gdebfc, zw$v);this['locator'] && _djhegif(snpqo['getLocator']($1z20_), chfgde), chfgde['value'] = chfgde['nodeValue'] = fjhi, lqopn['setAttributeNode'](chfgde);
    }
  }, 'endElement': function () {
    {
      var kgjhl = this['currentElement'];kgjhl['tagName'];
    }this['currentElement'] = kgjhl['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ytuv, hkijlm) {
    var prmno = this['doc']['createProcessingInstruction'](ytuv, hkijlm);this['locator'] && _djhegif(this['locator'], prmno), _dronqmp(this, prmno);
  }, 'ignorableWhitespace': function () {}, 'characters': function (yvxw$z) {
    if (yvxw$z = _dsrtqop['apply'](this, arguments)) {
      if (this['cdata']) var mjnol = this['doc']['createCDATASection'](yvxw$z);else var mjnol = this['doc']['createTextNode'](yvxw$z);this['currentElement'] ? this['currentElement']['appendChild'](mjnol) : /^\s*$/['test'](yvxw$z) && this['doc']['appendChild'](mjnol), this['locator'] && _djhegif(this['locator'], mjnol);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (trqsuv) {
    (this['locator'] = trqsuv) && (trqsuv['lineNumber'] = 0x0);
  }, 'comment': function (nqmrp) {
    nqmrp = _dsrtqop['apply'](this, arguments);var ecadbf = this['doc']['createComment'](nqmrp);this['locator'] && _djhegif(this['locator'], ecadbf), _dronqmp(this, ecadbf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (aecfb, klopm, hjif) {
    var $yz0 = this['doc']['implementation'];if ($yz0 && $yz0['createDocumentType']) {
      var ompnql = $yz0['createDocumentType'](aecfb, klopm, hjif);this['locator'] && _djhegif(this['locator'], ompnql), _dronqmp(this, ompnql);
    }
  }, 'warning': function (w_$yx) {
    console['warn']('[xmldom warning]\t' + w_$yx, _d_0124(this['locator']));
  }, 'error': function (bcfegd) {
    console['error']('[xmldom error]\t' + bcfegd, _d_0124(this['locator']));
  }, 'fatalError': function (gefdbc) {
    throw console['error']('[xmldom fatalError]\t' + gefdbc, _d_0124(this['locator'])), gefdbc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (omlkpn) {
  _d_$yz10['prototype'][omlkpn] = function () {
    return null;
  };
});var _dadcbfe = require('./bbbsax')['XMLReader'],
    _dmoknp = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dxuzvwy;