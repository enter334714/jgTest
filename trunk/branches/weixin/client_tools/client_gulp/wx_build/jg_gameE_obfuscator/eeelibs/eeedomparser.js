var b = wx.$e;
function eltxrgh(zflyrh) {
  this['options'] = zflyrh || { 'locator': {} };
}function erglxh(_4fv, lrhgzt, tx$i) {
  function d605(jg$ixt) {
    var aempc = _4fv[jg$ixt];!aempc && tlgxi$ && (aempc = 0x2 == _4fv['length'] ? function (ao) {
      _4fv(jg$ixt, ao);
    } : _4fv), qin3u[jg$ixt] = aempc && function (k9quns) {
      aempc('[xmldom ' + jg$ixt + ']\t' + k9quns + eksn6u(tx$i));
    } || function () {};
  }if (!_4fv) {
    if (lrhgzt instanceof eqi3$x) return lrhgzt;_4fv = lrhgzt;
  }var qin3u = {},
      tlgxi$ = _4fv instanceof Function;return tx$i = tx$i || {}, d605('warning'), d605('error'), d605('fatalError'), qin3u;
}function eqi3$x() {
  this['cdata'] = !0x1;
}function en96uks(d068, b86d05) {
  b86d05['lineNumber'] = d068['lineNumber'], b86d05['columnNumber'] = d068['columnNumber'];
}function eksn6u(rvzyhf) {
  return rvzyhf ? '\x0a@' + (rvzyhf['systemId'] || '') + '#[line:' + rvzyhf['lineNumber'] + ',col:' + rvzyhf['columnNumber'] + ']' : void 0x0;
}function efyhrzl(glh$, gtxji$, $nij3q) {
  return 'string' == typeof glh$ ? glh$['substr'](gtxji$, $nij3q) : glh$['length'] >= gtxji$ + $nij3q || gtxji$ ? new java['lang']['String'](glh$, gtxji$, $nij3q) + '' : glh$;
}function ezvf_y4(yf_z4, caepmo) {
  yf_z4['currentElement'] ? yf_z4['currentElement']['appendChild'](caepmo) : yf_z4['doc']['appendChild'](caepmo);
}eltxrgh['prototype']['parseFromString'] = function (tg$lix, ijt$g) {
  var un3jsq = this['options'],
      i3g$x = new eecpam(),
      njs3 = un3jsq['domBuilder'] || new eqi3$x(),
      kd0b56 = un3jsq['errorHandler'],
      lthr = un3jsq['locator'],
      xg3$ = un3jsq['xmlns'] || {},
      f4_a7 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lthr && njs3['setDocumentLocator'](lthr), i3g$x['errorHandler'] = erglxh(kd0b56, njs3, lthr), i3g$x['domBuilder'] = un3jsq['domBuilder'] || njs3, /\/x?html?$/['test'](ijt$g) && (f4_a7['nbsp'] = '\u00a0', f4_a7['copy'] = '©', xg3$[''] = 'http://www.w3.org/1999/xhtml'), xg3$['xml'] = xg3$['xml'] || 'http://www.w3.org/XML/1998/namespace', tg$lix ? i3g$x['parse'](tg$lix, xg3$, f4_a7) : i3g$x['errorHandler']['error']('invalid doc source'), njs3['doc'];
}, eqi3$x['prototype'] = { 'startDocument': function () {
    this['doc'] = new etlgz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ixg3j, dw8521, i$n3q, w80b5d) {
    var zvfyrh = this['doc'],
        nku6s9 = zvfyrh['createElementNS'](ixg3j, i$n3q || dw8521),
        qjusn = w80b5d['length'];ezvf_y4(this, nku6s9), this['currentElement'] = nku6s9, this['locator'] && en96uks(this['locator'], nku6s9);for (var jix3$g = 0x0; qjusn > jix3$g; jix3$g++) {
      var ixg3j = w80b5d['getURI'](jix3$g),
          $lxgit = w80b5d['getValue'](jix3$g),
          i$n3q = w80b5d['getQName'](jix3$g),
          fvrzyh = zvfyrh['createAttributeNS'](ixg3j, i$n3q);this['locator'] && en96uks(w80b5d['getLocator'](jix3$g), fvrzyh), fvrzyh['value'] = fvrzyh['nodeValue'] = $lxgit, nku6s9['setAttributeNode'](fvrzyh);
    }
  }, 'endElement': function () {
    {
      var xlhg$t = this['currentElement'];xlhg$t['tagName'];
    }this['currentElement'] = xlhg$t['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (o_cm, a_cm47) {
    var c_ao7 = this['doc']['createProcessingInstruction'](o_cm, a_cm47);this['locator'] && en96uks(this['locator'], c_ao7), ezvf_y4(this, c_ao7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (epcam) {
    if (epcam = efyhrzl['apply'](this, arguments)) {
      if (this['cdata']) var tgi$xj = this['doc']['createCDATASection'](epcam);else var tgi$xj = this['doc']['createTextNode'](epcam);this['currentElement'] ? this['currentElement']['appendChild'](tgi$xj) : /^\s*$/['test'](epcam) && this['doc']['appendChild'](tgi$xj), this['locator'] && en96uks(this['locator'], tgi$xj);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (qk9nu) {
    (this['locator'] = qk9nu) && (qk9nu['lineNumber'] = 0x0);
  }, 'comment': function (hrfvyz) {
    hrfvyz = efyhrzl['apply'](this, arguments);var i3qn$ = this['doc']['createComment'](hrfvyz);this['locator'] && en96uks(this['locator'], i3qn$), ezvf_y4(this, i3qn$);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (zyfr4v, am_7o, f74av_) {
    var j$xti = this['doc']['implementation'];if (j$xti && j$xti['createDocumentType']) {
      var vfy7 = j$xti['createDocumentType'](zyfr4v, am_7o, f74av_);this['locator'] && en96uks(this['locator'], vfy7), ezvf_y4(this, vfy7);
    }
  }, 'warning': function (_vm) {
    console['warn']('[xmldom warning]\t' + _vm, eksn6u(this['locator']));
  }, 'error': function (tlrxh) {
    console['error']('[xmldom error]\t' + tlrxh, eksn6u(this['locator']));
  }, 'fatalError': function (y4rzfv) {
    throw console['error']('[xmldom fatalError]\t' + y4rzfv, eksn6u(this['locator'])), y4rzfv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zylhr) {
  eqi3$x['prototype'][zylhr] = function () {
    return null;
  };
});var eecpam = require('./eeesax')['XMLReader'],
    etlgz = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = eltxrgh;