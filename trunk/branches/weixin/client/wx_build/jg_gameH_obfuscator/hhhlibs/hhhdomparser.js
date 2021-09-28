var O = wx.$c;
function h_4syvz(ix6) {
  this['options'] = ix6 || { 'locator': {} };
}function haltdhw(zs0v4, f3eo7, e04ov) {
  function ldtwa$(fe7q3o) {
    var e2vo04 = zs0v4[fe7q3o];!e2vo04 && qoe40 && (e2vo04 = 0x2 == zs0v4['length'] ? function (thdnb) {
      zs0v4(fe7q3o, thdnb);
    } : zs0v4), vs0z2[fe7q3o] = e2vo04 ? function (cfk357) {
      e2vo04('[xmldom ' + fe7q3o + ']\t' + cfk357 + hfu5ck(e04ov));
    } : function () {};
  }if (!zs0v4) {
    if (f3eo7 instanceof hbg19mn) return f3eo7;zs0v4 = f3eo7;
  }var vs0z2 = {},
      qoe40 = zs0v4 instanceof Function;return e04ov = e04ov || {}, ldtwa$('warning'), ldtwa$('error'), ldtwa$('fatalError'), vs0z2;
}function hbg19mn() {
  this['cdata'] = !0x1;
}function he0s42(bd1hm, nhbtd) {
  nhbtd['lineNumber'] = bd1hm['lineNumber'], nhbtd['columnNumber'] = bd1hm['columnNumber'];
}function hfu5ck(t$alrw) {
  return t$alrw ? '\x0a@' + (t$alrw['systemId'] || '') + '#[line:' + t$alrw['lineNumber'] + ',col:' + t$alrw['columnNumber'] + ']' : void 0x0;
}function hxm916g($ldt, i9ux8, bm1n9) {
  return 'string' == typeof $ldt ? $ldt['substr'](i9ux8, bm1n9) : $ldt['length'] >= i9ux8 + bm1n9 || i9ux8 ? new java['lang']['String']($ldt, i9ux8, bm1n9) + '' : $ldt;
}function hlr$awt(hwla, foc) {
  (hwla['currentElement'] || hwla['doc'])['appendChild'](foc);
}h_4syvz['prototype']['parseFromString'] = function (al$rt, rw$ta) {
  var mn9gx1 = this['options'],
      thalbd = new hg69imx(),
      nbmgh1 = mn9gx1['domBuilder'] || new hbg19mn(),
      n1gbm = mn9gx1['errorHandler'],
      nthba = mn9gx1['locator'],
      ck87 = mn9gx1['xmlns'] || {},
      eqf73o = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return nthba && nbmgh1['setDocumentLocator'](nthba), thalbd['errorHandler'] = haltdhw(n1gbm, nbmgh1, nthba), thalbd['domBuilder'] = mn9gx1['domBuilder'] || nbmgh1, /\/x?html?$/['test'](rw$ta) && (eqf73o['nbsp'] = '\u00a0', eqf73o['copy'] = '©', ck87[''] = 'http://www.w3.org/1999/xhtml'), ck87['xml'] = ck87['xml'] || 'http://www.w3.org/XML/1998/namespace', al$rt ? thalbd['parse'](al$rt, ck87, eqf73o) : thalbd['errorHandler']['error']('invalid doc source'), nbmgh1['doc'];
}, hbg19mn['prototype'] = { 'startDocument': function () {
    this['doc'] = new hevo204()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (s2z04v, k75c3, fe3qo, lt$a) {
    var uxi56 = this['doc'],
        qoe240 = uxi56['createElementNS'](s2z04v, fe3qo || k75c3),
        anhd = lt$a['length'];hlr$awt(this, qoe240), this['currentElement'] = qoe240, this['locator'] && he0s42(this['locator'], qoe240);for (var zv40 = 0x0; zv40 < anhd; zv40++) {
      var s2z04v = lt$a['getURI'](zv40),
          u6k8 = lt$a['getValue'](zv40),
          fe3qo = lt$a['getQName'](zv40),
          uik856 = uxi56['createAttributeNS'](s2z04v, fe3qo);this['locator'] && he0s42(lt$a['getLocator'](zv40), uik856), uik856['value'] = uik856['nodeValue'] = u6k8, qoe240['setAttributeNode'](uik856);
    }
  }, 'endElement': function () {
    var a$wd = this['currentElement'];a$wd['tagName'], this['currentElement'] = a$wd['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (q4e0o, kf5c) {
    kf5c = this['doc']['createProcessingInstruction'](q4e0o, kf5c), (this['locator'] && he0s42(this['locator'], kf5c), hlr$awt(this, kf5c));
  }, 'ignorableWhitespace': function () {}, 'characters': function (_jzv) {
    var g1nm9x;(_jzv = hxm916g['apply'](this, arguments)) && (g1nm9x = this['cdata'] ? this['doc']['createCDATASection'](_jzv) : this['doc']['createTextNode'](_jzv), this['currentElement'] ? this['currentElement']['appendChild'](g1nm9x) : /^\s*$/['test'](_jzv) && this['doc']['appendChild'](g1nm9x), this['locator'] && he0s42(this['locator'], g1nm9x));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bnmh1g) {
    (this['locator'] = bnmh1g) && (bnmh1g['lineNumber'] = 0x0);
  }, 'comment': function (iug69) {
    iug69 = hxm916g['apply'](this, arguments);var lwtra = this['doc']['createComment'](iug69);this['locator'] && he0s42(this['locator'], lwtra), hlr$awt(this, lwtra);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (i8k56, k5f8u, zyjv_s) {
    var qo204e = this['doc']['implementation'];qo204e && qo204e['createDocumentType'] && (zyjv_s = qo204e['createDocumentType'](i8k56, k5f8u, zyjv_s), this['locator'] && he0s42(this['locator'], zyjv_s), hlr$awt(this, zyjv_s));
  }, 'warning': function (dhn1m) {
    console['warn']('[xmldom warning]\t' + dhn1m, hfu5ck(this['locator']));
  }, 'error': function (g91nb) {
    console['error']('[xmldom error]\t' + g91nb, hfu5ck(this['locator']));
  }, 'fatalError': function (tablhd) {
    throw console['error']('[xmldom fatalError]\t' + tablhd, hfu5ck(this['locator'])), tablhd;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (svz_4) {
  hbg19mn['prototype'][svz_4] = function () {
    return null;
  };
});var hg69imx = require('./hhhsax')['XMLReader'],
    hevo204 = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_4syvz;