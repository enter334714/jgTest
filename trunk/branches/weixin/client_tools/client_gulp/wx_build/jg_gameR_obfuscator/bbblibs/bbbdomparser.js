var _ = wx.y$;
function _dnyi(ndpl7) {
  this['options'] = ndpl7 || { 'locator': {} };
}function _dmxac_(v9m$, dlpg7w, u5eyj) {
  function gpn72(iy5e) {
    var lgn27 = v9m$[iy5e];!lgn27 && k9fmv && (lgn27 = 0x2 == v9m$['length'] ? function (b4ng2p) {
      v9m$(iy5e, b4ng2p);
    } : v9m$), ej5tiu[iy5e] = lgn27 && function ($kaf) {
      lgn27('[xmldom ' + iy5e + ']\t' + $kaf + _d_cxam(u5eyj));
    } || function () {};
  }if (!v9m$) {
    if (dlpg7w instanceof _dn2g4) return dlpg7w;v9m$ = dlpg7w;
  }var ej5tiu = {},
      k9fmv = v9m$ instanceof Function;return u5eyj = u5eyj || {}, gpn72('warning'), gpn72('error'), gpn72('fatalError'), ej5tiu;
}function _dn2g4() {
  this['cdata'] = !0x1;
}function _dngp27l(r09zo3, d7lgn) {
  d7lgn['lineNumber'] = r09zo3['lineNumber'], d7lgn['columnNumber'] = r09zo3['columnNumber'];
}function _d_cxam(gnp7l2) {
  return gnp7l2 ? '\x0a@' + (gnp7l2['systemId'] || '') + '#[line:' + gnp7l2['lineNumber'] + ',col:' + gnp7l2['columnNumber'] + ']' : void 0x0;
}function _di2yb4n($0r3f, wsl7d, dwls7) {
  return 'string' == typeof $0r3f ? $0r3f['substr'](wsl7d, dwls7) : $0r3f['length'] >= wsl7d + dwls7 || wsl7d ? new java['lang']['String']($0r3f, wsl7d, dwls7) + '' : $0r3f;
}function _d$fmv9(zho6, ozh60q) {
  zho6['currentElement'] ? zho6['currentElement']['appendChild'](ozh60q) : zho6['doc']['appendChild'](ozh60q);
}_dnyi['prototype']['parseFromString'] = function (mk$vaf, ji4) {
  var k$m9fv = this['options'],
      a_8cx = new _dohqz(),
      ei4yu = k$m9fv['domBuilder'] || new _dn2g4(),
      xm_c8a = k$m9fv['errorHandler'],
      r93z0 = k$m9fv['locator'],
      nbg = k$m9fv['xmlns'] || {},
      swdl6q = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return r93z0 && ei4yu['setDocumentLocator'](r93z0), a_8cx['errorHandler'] = _dmxac_(xm_c8a, ei4yu, r93z0), a_8cx['domBuilder'] = k$m9fv['domBuilder'] || ei4yu, /\/x?html?$/['test'](ji4) && (swdl6q['nbsp'] = '\u00a0', swdl6q['copy'] = '©', nbg[''] = 'http://www.w3.org/1999/xhtml'), nbg['xml'] = nbg['xml'] || 'http://www.w3.org/XML/1998/namespace', mk$vaf ? a_8cx['parse'](mk$vaf, nbg, swdl6q) : a_8cx['errorHandler']['error']('invalid doc source'), ei4yu['doc'];
}, _dn2g4['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dej5yi()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (lwsq6d, cak_v, nbg27, e5tj1u) {
    var g42nyb = this['doc'],
        _vckma = g42nyb['createElementNS'](lwsq6d, nbg27 || cak_v),
        zo90 = e5tj1u['length'];_d$fmv9(this, _vckma), this['currentElement'] = _vckma, this['locator'] && _dngp27l(this['locator'], _vckma);for (var g2bnp4 = 0x0; zo90 > g2bnp4; g2bnp4++) {
      var lwsq6d = e5tj1u['getURI'](g2bnp4),
          i4yj = e5tj1u['getValue'](g2bnp4),
          nbg27 = e5tj1u['getQName'](g2bnp4),
          vkf$m = g42nyb['createAttributeNS'](lwsq6d, nbg27);this['locator'] && _dngp27l(e5tj1u['getLocator'](g2bnp4), vkf$m), vkf$m['value'] = vkf$m['nodeValue'] = i4yj, _vckma['setAttributeNode'](vkf$m);
    }
  }, 'endElement': function () {
    {
      var jit5 = this['currentElement'];jit5['tagName'];
    }this['currentElement'] = jit5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (f$9k3v, hs6wz) {
    var iyuj5e = this['doc']['createProcessingInstruction'](f$9k3v, hs6wz);this['locator'] && _dngp27l(this['locator'], iyuj5e), _d$fmv9(this, iyuj5e);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($fk9vm) {
    if ($fk9vm = _di2yb4n['apply'](this, arguments)) {
      if (this['cdata']) var $amkv = this['doc']['createCDATASection']($fk9vm);else var $amkv = this['doc']['createTextNode']($fk9vm);this['currentElement'] ? this['currentElement']['appendChild']($amkv) : /^\s*$/['test']($fk9vm) && this['doc']['appendChild']($amkv), this['locator'] && _dngp27l(this['locator'], $amkv);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ebi24y) {
    (this['locator'] = ebi24y) && (ebi24y['lineNumber'] = 0x0);
  }, 'comment': function (yuj5i) {
    yuj5i = _di2yb4n['apply'](this, arguments);var kaf_vm = this['doc']['createComment'](yuj5i);this['locator'] && _dngp27l(this['locator'], kaf_vm), _d$fmv9(this, kaf_vm);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (g7ld, _8cma, $3or) {
    var ieju5t = this['doc']['implementation'];if (ieju5t && ieju5t['createDocumentType']) {
      var ro03z9 = ieju5t['createDocumentType'](g7ld, _8cma, $3or);this['locator'] && _dngp27l(this['locator'], ro03z9), _d$fmv9(this, ro03z9);
    }
  }, 'warning': function (n7pl2g) {
    console['warn']('[xmldom warning]\t' + n7pl2g, _d_cxam(this['locator']));
  }, 'error': function (axmv_c) {
    console['error']('[xmldom error]\t' + axmv_c, _d_cxam(this['locator']));
  }, 'fatalError': function (_c8a) {
    throw console['error']('[xmldom fatalError]\t' + _c8a, _d_cxam(this['locator'])), _c8a;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (g4bny2) {
  _dn2g4['prototype'][g4bny2] = function () {
    return null;
  };
});var _dohqz = require('./bbbsax')['XMLReader'],
    _dej5yi = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dnyi;