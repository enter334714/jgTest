var M = wx.$T;
function tr3n8g(l24) {
  this['options'] = l24 || { 'locator': {} };
}function t_5mwyh(uakbsj, jg3rb, pfv$dz) {
  function j38gnr(pzdv$) {
    var z$pdf7 = uakbsj[pzdv$];!z$pdf7 && c9i42 && (z$pdf7 = 0x2 == uakbsj['length'] ? function (oez7q0) {
      uakbsj(pzdv$, oez7q0);
    } : uakbsj), e0oxy[pzdv$] = z$pdf7 && function (ksju) {
      z$pdf7('[xmldom ' + pzdv$ + ']\t' + ksju + tw65m_h(pfv$dz));
    } || function () {};
  }if (!uakbsj) {
    if (jg3rb instanceof tymx_) return jg3rb;uakbsj = jg3rb;
  }var e0oxy = {},
      c9i42 = uakbsj instanceof Function;return pfv$dz = pfv$dz || {}, j38gnr('warning'), j38gnr('error'), j38gnr('fatalError'), e0oxy;
}function tymx_() {
  this['cdata'] = !0x1;
}function tqxm_(_whyx, w31) {
  w31['lineNumber'] = _whyx['lineNumber'], w31['columnNumber'] = _whyx['columnNumber'];
}function tw65m_h(eqyxo) {
  return eqyxo ? '\x0a@' + (eqyxo['systemId'] || '') + '#[line:' + eqyxo['lineNumber'] + ',col:' + eqyxo['columnNumber'] + ']' : void 0x0;
}function tjnr3(vi29tc, w3186, z0o) {
  return 'string' == typeof vi29tc ? vi29tc['substr'](w3186, z0o) : vi29tc['length'] >= w3186 + z0o || w3186 ? new java['lang']['String'](vi29tc, w3186, z0o) + '' : vi29tc;
}function tp7zdof(sjbrk, c2ti9) {
  sjbrk['currentElement'] ? sjbrk['currentElement']['appendChild'](c2ti9) : sjbrk['doc']['appendChild'](c2ti9);
}tr3n8g['prototype']['parseFromString'] = function (pe, $9fdpv) {
  var vci$d9 = this['options'],
      nj3bgr = new tozf7dp(),
      c$i9vd = vci$d9['domBuilder'] || new tymx_(),
      wym_h5 = vci$d9['errorHandler'],
      ex07q = vci$d9['locator'],
      h_5ymw = vci$d9['xmlns'] || {},
      g18n3r = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ex07q && c$i9vd['setDocumentLocator'](ex07q), nj3bgr['errorHandler'] = t_5mwyh(wym_h5, c$i9vd, ex07q), nj3bgr['domBuilder'] = vci$d9['domBuilder'] || c$i9vd, /\/x?html?$/['test']($9fdpv) && (g18n3r['nbsp'] = '\u00a0', g18n3r['copy'] = '©', h_5ymw[''] = 'http://www.w3.org/1999/xhtml'), h_5ymw['xml'] = h_5ymw['xml'] || 'http://www.w3.org/XML/1998/namespace', pe ? nj3bgr['parse'](pe, h_5ymw, g18n3r) : nj3bgr['errorHandler']['error']('invalid doc source'), c$i9vd['doc'];
}, tymx_['prototype'] = { 'startDocument': function () {
    this['doc'] = new tjgkbar()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (tl4c, kajbrs, fpv9$, skbaj) {
    var cdv = this['doc'],
        mwhxy_ = cdv['createElementNS'](tl4c, fpv9$ || kajbrs),
        lt42c = skbaj['length'];tp7zdof(this, mwhxy_), this['currentElement'] = mwhxy_, this['locator'] && tqxm_(this['locator'], mwhxy_);for (var xhy_w = 0x0; lt42c > xhy_w; xhy_w++) {
      var tl4c = skbaj['getURI'](xhy_w),
          c$9iv = skbaj['getValue'](xhy_w),
          fpv9$ = skbaj['getQName'](xhy_w),
          vf9$d = cdv['createAttributeNS'](tl4c, fpv9$);this['locator'] && tqxm_(skbaj['getLocator'](xhy_w), vf9$d), vf9$d['value'] = vf9$d['nodeValue'] = c$9iv, mwhxy_['setAttributeNode'](vf9$d);
    }
  }, 'endElement': function () {
    {
      var civ92 = this['currentElement'];civ92['tagName'];
    }this['currentElement'] = civ92['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jgrab, ozfqe) {
    var it92cv = this['doc']['createProcessingInstruction'](jgrab, ozfqe);this['locator'] && tqxm_(this['locator'], it92cv), tp7zdof(this, it92cv);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vc$di) {
    if (vc$di = tjnr3['apply'](this, arguments)) {
      if (this['cdata']) var i94t2c = this['doc']['createCDATASection'](vc$di);else var i94t2c = this['doc']['createTextNode'](vc$di);this['currentElement'] ? this['currentElement']['appendChild'](i94t2c) : /^\s*$/['test'](vc$di) && this['doc']['appendChild'](i94t2c), this['locator'] && tqxm_(this['locator'], i94t2c);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (oz7eq) {
    (this['locator'] = oz7eq) && (oz7eq['lineNumber'] = 0x0);
  }, 'comment': function (njarg) {
    njarg = tjnr3['apply'](this, arguments);var $9d = this['doc']['createComment'](njarg);this['locator'] && tqxm_(this['locator'], $9d), tp7zdof(this, $9d);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (eo7zq0, rkasb, n816g) {
    var fz$7 = this['doc']['implementation'];if (fz$7 && fz$7['createDocumentType']) {
      var ajnrgb = fz$7['createDocumentType'](eo7zq0, rkasb, n816g);this['locator'] && tqxm_(this['locator'], ajnrgb), tp7zdof(this, ajnrgb);
    }
  }, 'warning': function (o7fzdp) {
    console['warn']('[xmldom warning]\t' + o7fzdp, tw65m_h(this['locator']));
  }, 'error': function (eoz70q) {
    console['error']('[xmldom error]\t' + eoz70q, tw65m_h(this['locator']));
  }, 'fatalError': function (ng38jr) {
    throw console['error']('[xmldom fatalError]\t' + ng38jr, tw65m_h(this['locator'])), ng38jr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (oxey0q) {
  tymx_['prototype'][oxey0q] = function () {
    return null;
  };
});var tozf7dp = require('./tT12tt')['XMLReader'],
    tjgkbar = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tr3n8g;