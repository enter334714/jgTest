var _ = wx.y$;
function _dqmnlo(beadcf) {
  this['options'] = beadcf || { 'locator': {} };
}function _dyuvxt(z0_2, rtsuwv, qolnm) {
  function utxw(tyuwv) {
    var cfdh = z0_2[tyuwv];!cfdh && jfhgie && (cfdh = 0x2 == z0_2['length'] ? function (_120) {
      z0_2(tyuwv, _120);
    } : z0_2), _2$1[tyuwv] = cfdh && function (utvwy) {
      cfdh('[xmldom ' + tyuwv + ']\t' + utvwy + _dqnops(qolnm));
    } || function () {};
  }if (!z0_2) {
    if (rtsuwv instanceof _dx_yw$) return rtsuwv;z0_2 = rtsuwv;
  }var _2$1 = {},
      jfhgie = z0_2 instanceof Function;return qolnm = qolnm || {}, utxw('warning'), utxw('error'), utxw('fatalError'), _2$1;
}function _dx_yw$() {
  this['cdata'] = !0x1;
}function _donlkmj(kljmhi, iljh) {
  iljh['lineNumber'] = kljmhi['lineNumber'], iljh['columnNumber'] = kljmhi['columnNumber'];
}function _dqnops(otpqsr) {
  return otpqsr ? '\x0a@' + (otpqsr['systemId'] || '') + '#[line:' + otpqsr['lineNumber'] + ',col:' + otpqsr['columnNumber'] + ']' : void 0x0;
}function _drtsvq(wvxut, hgce, rswvt) {
  return 'string' == typeof wvxut ? wvxut['substr'](hgce, rswvt) : wvxut['length'] >= hgce + rswvt || hgce ? new java['lang']['String'](wvxut, hgce, rswvt) + '' : wvxut;
}function _dnrmopq(tvuyw, efjig) {
  tvuyw['currentElement'] ? tvuyw['currentElement']['appendChild'](efjig) : tvuyw['doc']['appendChild'](efjig);
}_dqmnlo['prototype']['parseFromString'] = function ($_wzxy, gejifh) {
  var uqsrtv = this['options'],
      ijfghk = new _ddafbc(),
      vxw$ = uqsrtv['domBuilder'] || new _dx_yw$(),
      bdegc = uqsrtv['errorHandler'],
      w$zxv = uqsrtv['locator'],
      vyz = uqsrtv['xmlns'] || {},
      eighfj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return w$zxv && vxw$['setDocumentLocator'](w$zxv), ijfghk['errorHandler'] = _dyuvxt(bdegc, vxw$, w$zxv), ijfghk['domBuilder'] = uqsrtv['domBuilder'] || vxw$, /\/x?html?$/['test'](gejifh) && (eighfj['nbsp'] = '\u00a0', eighfj['copy'] = '©', vyz[''] = 'http://www.w3.org/1999/xhtml'), vyz['xml'] = vyz['xml'] || 'http://www.w3.org/XML/1998/namespace', $_wzxy ? ijfghk['parse']($_wzxy, vyz, eighfj) : ijfghk['errorHandler']['error']('invalid doc source'), vxw$['doc'];
}, _dx_yw$['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dwuxvyt()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (tqsv, mijkl, fabecd, hlig) {
    var tvruw = this['doc'],
        gbcfde = tvruw['createElementNS'](tqsv, fabecd || mijkl),
        y1z0$ = hlig['length'];_dnrmopq(this, gbcfde), this['currentElement'] = gbcfde, this['locator'] && _donlkmj(this['locator'], gbcfde);for (var tvxsw = 0x0; y1z0$ > tvxsw; tvxsw++) {
      var tqsv = hlig['getURI'](tvxsw),
          suwvxt = hlig['getValue'](tvxsw),
          fabecd = hlig['getQName'](tvxsw),
          ghij = tvruw['createAttributeNS'](tqsv, fabecd);this['locator'] && _donlkmj(hlig['getLocator'](tvxsw), ghij), ghij['value'] = ghij['nodeValue'] = suwvxt, gbcfde['setAttributeNode'](ghij);
    }
  }, 'endElement': function () {
    {
      var jeih = this['currentElement'];jeih['tagName'];
    }this['currentElement'] = jeih['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mnli, efjih) {
    var ifjkh = this['doc']['createProcessingInstruction'](mnli, efjih);this['locator'] && _donlkmj(this['locator'], ifjkh), _dnrmopq(this, ifjkh);
  }, 'ignorableWhitespace': function () {}, 'characters': function (x$_wy) {
    if (x$_wy = _drtsvq['apply'](this, arguments)) {
      if (this['cdata']) var jeifg = this['doc']['createCDATASection'](x$_wy);else var jeifg = this['doc']['createTextNode'](x$_wy);this['currentElement'] ? this['currentElement']['appendChild'](jeifg) : /^\s*$/['test'](x$_wy) && this['doc']['appendChild'](jeifg), this['locator'] && _donlkmj(this['locator'], jeifg);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zxv) {
    (this['locator'] = zxv) && (zxv['lineNumber'] = 0x0);
  }, 'comment': function (pmqo) {
    pmqo = _drtsvq['apply'](this, arguments);var kijhgf = this['doc']['createComment'](pmqo);this['locator'] && _donlkmj(this['locator'], kijhgf), _dnrmopq(this, kijhgf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (hj, dfchge, gjhi) {
    var ikhjfg = this['doc']['implementation'];if (ikhjfg && ikhjfg['createDocumentType']) {
      var $z_20 = ikhjfg['createDocumentType'](hj, dfchge, gjhi);this['locator'] && _donlkmj(this['locator'], $z_20), _dnrmopq(this, $z_20);
    }
  }, 'warning': function (omlqnp) {
    console['warn']('[xmldom warning]\t' + omlqnp, _dqnops(this['locator']));
  }, 'error': function (jhgfe) {
    console['error']('[xmldom error]\t' + jhgfe, _dqnops(this['locator']));
  }, 'fatalError': function (qtpsr) {
    throw console['error']('[xmldom fatalError]\t' + qtpsr, _dqnops(this['locator'])), qtpsr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($3120) {
  _dx_yw$['prototype'][$3120] = function () {
    return null;
  };
});var _ddafbc = require('./bbbsax')['XMLReader'],
    _dwuxvyt = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dqmnlo;