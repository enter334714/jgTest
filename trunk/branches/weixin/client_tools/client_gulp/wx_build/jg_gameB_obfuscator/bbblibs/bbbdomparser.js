var _ = wx.y$;
function _dz_2$10(uxwtsv) {
  this['options'] = uxwtsv || { 'locator': {} };
}function _dkmij(v$wy, stquvr, vyw$xz) {
  function rpnqos(mljni) {
    var y$_10 = v$wy[mljni];!y$_10 && y$zxwv && (y$_10 = 0x2 == v$wy['length'] ? function (cfdgb) {
      v$wy(mljni, cfdgb);
    } : v$wy), _2$13[mljni] = y$_10 && function (zx) {
      y$_10('[xmldom ' + mljni + ']\t' + zx + _dywv$x(vyw$xz));
    } || function () {};
  }if (!v$wy) {
    if (stquvr instanceof _dvrtqus) return stquvr;v$wy = stquvr;
  }var _2$13 = {},
      y$zxwv = v$wy instanceof Function;return vyw$xz = vyw$xz || {}, rpnqos('warning'), rpnqos('error'), rpnqos('fatalError'), _2$13;
}function _dvrtqus() {
  this['cdata'] = !0x1;
}function _dhcdegf(fkh, xy_z0$) {
  xy_z0$['lineNumber'] = fkh['lineNumber'], xy_z0$['columnNumber'] = fkh['columnNumber'];
}function _dywv$x(uswtr) {
  return uswtr ? '\x0a@' + (uswtr['systemId'] || '') + '#[line:' + uswtr['lineNumber'] + ',col:' + uswtr['columnNumber'] + ']' : void 0x0;
}function _dtoprqs(lmknij, fdhi, fgkjh) {
  return 'string' == typeof lmknij ? lmknij['substr'](fdhi, fgkjh) : lmknij['length'] >= fdhi + fgkjh || fdhi ? new java['lang']['String'](lmknij, fdhi, fgkjh) + '' : lmknij;
}function _dxvyz$(pnlmo, ustr) {
  pnlmo['currentElement'] ? pnlmo['currentElement']['appendChild'](ustr) : pnlmo['doc']['appendChild'](ustr);
}_dz_2$10['prototype']['parseFromString'] = function (uxyzv, fdgch) {
  var yz_xw = this['options'],
      str = new _d_21$03(),
      ijkmh = yz_xw['domBuilder'] || new _dvrtqus(),
      ruvw = yz_xw['errorHandler'],
      gjlihk = yz_xw['locator'],
      psrqo = yz_xw['xmlns'] || {},
      dhegcf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gjlihk && ijkmh['setDocumentLocator'](gjlihk), str['errorHandler'] = _dkmij(ruvw, ijkmh, gjlihk), str['domBuilder'] = yz_xw['domBuilder'] || ijkmh, /\/x?html?$/['test'](fdgch) && (dhegcf['nbsp'] = '\u00a0', dhegcf['copy'] = '©', psrqo[''] = 'http://www.w3.org/1999/xhtml'), psrqo['xml'] = psrqo['xml'] || 'http://www.w3.org/XML/1998/namespace', uxyzv ? str['parse'](uxyzv, psrqo, dhegcf) : str['errorHandler']['error']('invalid doc source'), ijkmh['doc'];
}, _dvrtqus['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dhkfigj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (wusxtv, wz$xy, rnqm, yz_x) {
    var _$201 = this['doc'],
        vx$zw = _$201['createElementNS'](wusxtv, rnqm || wz$xy),
        $30_21 = yz_x['length'];_dxvyz$(this, vx$zw), this['currentElement'] = vx$zw, this['locator'] && _dhcdegf(this['locator'], vx$zw);for (var jiehfg = 0x0; $30_21 > jiehfg; jiehfg++) {
      var wusxtv = yz_x['getURI'](jiehfg),
          poqstr = yz_x['getValue'](jiehfg),
          rnqm = yz_x['getQName'](jiehfg),
          omlnp = _$201['createAttributeNS'](wusxtv, rnqm);this['locator'] && _dhcdegf(yz_x['getLocator'](jiehfg), omlnp), omlnp['value'] = omlnp['nodeValue'] = poqstr, vx$zw['setAttributeNode'](omlnp);
    }
  }, 'endElement': function () {
    {
      var qsrot = this['currentElement'];qsrot['tagName'];
    }this['currentElement'] = qsrot['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mhjlik, snrqp) {
    var _zy$x = this['doc']['createProcessingInstruction'](mhjlik, snrqp);this['locator'] && _dhcdegf(this['locator'], _zy$x), _dxvyz$(this, _zy$x);
  }, 'ignorableWhitespace': function () {}, 'characters': function (zvyuw) {
    if (zvyuw = _dtoprqs['apply'](this, arguments)) {
      if (this['cdata']) var pnsor = this['doc']['createCDATASection'](zvyuw);else var pnsor = this['doc']['createTextNode'](zvyuw);this['currentElement'] ? this['currentElement']['appendChild'](pnsor) : /^\s*$/['test'](zvyuw) && this['doc']['appendChild'](pnsor), this['locator'] && _dhcdegf(this['locator'], pnsor);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (fiehdg) {
    (this['locator'] = fiehdg) && (fiehdg['lineNumber'] = 0x0);
  }, 'comment': function (kminj) {
    kminj = _dtoprqs['apply'](this, arguments);var fceb = this['doc']['createComment'](kminj);this['locator'] && _dhcdegf(this['locator'], fceb), _dxvyz$(this, fceb);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rqmopn, cgehdf, tspqur) {
    var jhilkm = this['doc']['implementation'];if (jhilkm && jhilkm['createDocumentType']) {
      var feacdb = jhilkm['createDocumentType'](rqmopn, cgehdf, tspqur);this['locator'] && _dhcdegf(this['locator'], feacdb), _dxvyz$(this, feacdb);
    }
  }, 'warning': function (lponm) {
    console['warn']('[xmldom warning]\t' + lponm, _dywv$x(this['locator']));
  }, 'error': function (nmlpq) {
    console['error']('[xmldom error]\t' + nmlpq, _dywv$x(this['locator']));
  }, 'fatalError': function (kojmn) {
    throw console['error']('[xmldom fatalError]\t' + kojmn, _dywv$x(this['locator'])), kojmn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jghf) {
  _dvrtqus['prototype'][jghf] = function () {
    return null;
  };
});var _d_21$03 = require('./bbbsax')['XMLReader'],
    _dhkfigj = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dz_2$10;