var _ = wx.y$;
function _dwyx$_(tsprq) {
  this['options'] = tsprq || { 'locator': {} };
}function _dklgjhi(hiejfg, njlko, yx$_zw) {
  function eigfj(_01342) {
    var xz$wyv = hiejfg[_01342];!xz$wyv && hgjie && (xz$wyv = 0x2 == hiejfg['length'] ? function (kolpm) {
      hiejfg(_01342, kolpm);
    } : hiejfg), fdeh[_01342] = xz$wyv ? function (swvru) {
      xz$wyv('[xmldom ' + _01342 + ']\t' + swvru + _ddcge(yx$_zw));
    } : function () {};
  }if (!hiejfg) {
    if (njlko instanceof _drpnqo) return njlko;hiejfg = njlko;
  }var fdeh = {},
      hgjie = hiejfg instanceof Function;return yx$_zw = yx$_zw || {}, eigfj('warning'), eigfj('error'), eigfj('fatalError'), fdeh;
}function _drpnqo() {
  this['cdata'] = !0x1;
}function _dhgfki(iklmn, yz$xw) {
  yz$xw['lineNumber'] = iklmn['lineNumber'], yz$xw['columnNumber'] = iklmn['columnNumber'];
}function _ddcge(xw$vyz) {
  return xw$vyz ? '\x0a@' + (xw$vyz['systemId'] || '') + '#[line:' + xw$vyz['lineNumber'] + ',col:' + xw$vyz['columnNumber'] + ']' : void 0x0;
}function _dzwvxu($yw_zx, cdgehf, mnopqr) {
  return 'string' == typeof $yw_zx ? $yw_zx['substr'](cdgehf, mnopqr) : $yw_zx['length'] >= cdgehf + mnopqr || cdgehf ? new java['lang']['String']($yw_zx, cdgehf, mnopqr) + '' : $yw_zx;
}function _dzuxwyv(rtqv, ilhkmj) {
  (rtqv['currentElement'] || rtqv['doc'])['appendChild'](ilhkmj);
}_dwyx$_['prototype']['parseFromString'] = function (qrus, y_0z1) {
  var svxuw = this['options'],
      xzvuyw = new _dijlmh(),
      rospqn = svxuw['domBuilder'] || new _drpnqo(),
      _3210$ = svxuw['errorHandler'],
      rmpqon = svxuw['locator'],
      xtwus = svxuw['xmlns'] || {},
      gbedfc = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rmpqon && rospqn['setDocumentLocator'](rmpqon), xzvuyw['errorHandler'] = _dklgjhi(_3210$, rospqn, rmpqon), xzvuyw['domBuilder'] = svxuw['domBuilder'] || rospqn, /\/x?html?$/['test'](y_0z1) && (gbedfc['nbsp'] = '\u00a0', gbedfc['copy'] = '©', xtwus[''] = 'http://www.w3.org/1999/xhtml'), xtwus['xml'] = xtwus['xml'] || 'http://www.w3.org/XML/1998/namespace', qrus ? xzvuyw['parse'](qrus, xtwus, gbedfc) : xzvuyw['errorHandler']['error']('invalid doc source'), rospqn['doc'];
}, _drpnqo['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dqsvru()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($wvzx, z2_01, orpmqn, twuyxv) {
    var $xy0 = this['doc'],
        dgfehi = $xy0['createElementNS']($wvzx, orpmqn || z2_01),
        _21$03 = twuyxv['length'];_dzuxwyv(this, dgfehi), this['currentElement'] = dgfehi, this['locator'] && _dhgfki(this['locator'], dgfehi);for (var uywvx = 0x0; uywvx < _21$03; uywvx++) {
      var $wvzx = twuyxv['getURI'](uywvx),
          afbced = twuyxv['getValue'](uywvx),
          orpmqn = twuyxv['getQName'](uywvx),
          eidh = $xy0['createAttributeNS']($wvzx, orpmqn);this['locator'] && _dhgfki(twuyxv['getLocator'](uywvx), eidh), eidh['value'] = eidh['nodeValue'] = afbced, dgfehi['setAttributeNode'](eidh);
    }
  }, 'endElement': function () {
    var wvxstu = this['currentElement'];wvxstu['tagName'], this['currentElement'] = wvxstu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (x$zy0_, x0_yz$) {
    x0_yz$ = this['doc']['createProcessingInstruction'](x$zy0_, x0_yz$), (this['locator'] && _dhgfki(this['locator'], x0_yz$), _dzuxwyv(this, x0_yz$));
  }, 'ignorableWhitespace': function () {}, 'characters': function (swtuv) {
    var _02$;(swtuv = _dzwvxu['apply'](this, arguments)) && (_02$ = this['cdata'] ? this['doc']['createCDATASection'](swtuv) : this['doc']['createTextNode'](swtuv), this['currentElement'] ? this['currentElement']['appendChild'](_02$) : /^\s*$/['test'](swtuv) && this['doc']['appendChild'](_02$), this['locator'] && _dhgfki(this['locator'], _02$));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (orqmpn) {
    (this['locator'] = orqmpn) && (orqmpn['lineNumber'] = 0x0);
  }, 'comment': function (nopklm) {
    nopklm = _dzwvxu['apply'](this, arguments);var rtw = this['doc']['createComment'](nopklm);this['locator'] && _dhgfki(this['locator'], rtw), _dzuxwyv(this, rtw);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (uzxwv, dhgefc, qsrop) {
    var wuz = this['doc']['implementation'];wuz && wuz['createDocumentType'] && (qsrop = wuz['createDocumentType'](uzxwv, dhgefc, qsrop), this['locator'] && _dhgfki(this['locator'], qsrop), _dzuxwyv(this, qsrop));
  }, 'warning': function (vxtu) {
    console['warn']('[xmldom warning]\t' + vxtu, _ddcge(this['locator']));
  }, 'error': function (oplmkn) {
    console['error']('[xmldom error]\t' + oplmkn, _ddcge(this['locator']));
  }, 'fatalError': function (_01y$z) {
    throw console['error']('[xmldom fatalError]\t' + _01y$z, _ddcge(this['locator'])), _01y$z;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zy0_x) {
  _drpnqo['prototype'][zy0_x] = function () {
    return null;
  };
});var _dijlmh = require('./bbbsax')['XMLReader'],
    _dqsvru = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dwyx$_;