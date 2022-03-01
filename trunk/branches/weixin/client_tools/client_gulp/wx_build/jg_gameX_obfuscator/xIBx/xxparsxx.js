var u = wx.$x;
function xvdiu(t56z3) {
  this['options'] = t56z3 || { 'locator': {} };
}function xujfcn(tzo265, iosm4, u4i) {
  function f9c87l(jvudn) {
    var gidvu = tzo265[jvudn];!gidvu && igsm4x && (gidvu = 0x2 == tzo265['length'] ? function (kwb13) {
      tzo265(jvudn, kwb13);
    } : tzo265), e_ph[jvudn] = gidvu && function (_rpaqh) {
      gidvu('[xmldom ' + jvudn + ']\t' + _rpaqh + xgmsx(u4i));
    } || function () {};
  }if (!tzo265) {
    if (iosm4 instanceof xt3w1k) return iosm4;tzo265 = iosm4;
  }var e_ph = {},
      igsm4x = tzo265 instanceof Function;return u4i = u4i || {}, f9c87l('warning'), f9c87l('error'), f9c87l('fatalError'), e_ph;
}function xt3w1k() {
  this['cdata'] = !0x1;
}function xclfj9n(tb1kw, ujngvd) {
  ujngvd['lineNumber'] = tb1kw['lineNumber'], ujngvd['columnNumber'] = tb1kw['columnNumber'];
}function xgmsx(_aheqp) {
  return _aheqp ? '\x0a@' + (_aheqp['systemId'] || '') + '#[line:' + _aheqp['lineNumber'] + ',col:' + _aheqp['columnNumber'] + ']' : void 0x0;
}function xot625z(smig4x, uiv4d, nvjucd) {
  return 'string' == typeof smig4x ? smig4x['substr'](uiv4d, nvjucd) : smig4x['length'] >= uiv4d + nvjucd || uiv4d ? new java['lang']['String'](smig4x, uiv4d, nvjucd) + '' : smig4x;
}function xw62t13(jc79f, io4mx) {
  jc79f['currentElement'] ? jc79f['currentElement']['appendChild'](io4mx) : jc79f['doc']['appendChild'](io4mx);
}xvdiu['prototype']['parseFromString'] = function (bek1w0, sx4io) {
  var jun9c = this['options'],
      vndgj = new xdguj(),
      z5mso2 = jun9c['domBuilder'] || new xt3w1k(),
      ucnfv = jun9c['errorHandler'],
      ahqpe0 = jun9c['locator'],
      zomxi = jun9c['xmlns'] || {},
      digu4v = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ahqpe0 && z5mso2['setDocumentLocator'](ahqpe0), vndgj['errorHandler'] = xujfcn(ucnfv, z5mso2, ahqpe0), vndgj['domBuilder'] = jun9c['domBuilder'] || z5mso2, /\/x?html?$/['test'](sx4io) && (digu4v['nbsp'] = '\u00a0', digu4v['copy'] = '©', zomxi[''] = 'http://www.w3.org/1999/xhtml'), zomxi['xml'] = zomxi['xml'] || 'http://www.w3.org/XML/1998/namespace', bek1w0 ? vndgj['parse'](bek1w0, zomxi, digu4v) : vndgj['errorHandler']['error']('invalid doc source'), z5mso2['doc'];
}, xt3w1k['prototype'] = { 'startDocument': function () {
    this['doc'] = new xgn4vdu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jucvnd, som25z, fvc, cunf9) {
    var cnjf = this['doc'],
        d4vgxi = cnjf['createElementNS'](jucvnd, fvc || som25z),
        uvdg4 = cunf9['length'];xw62t13(this, d4vgxi), this['currentElement'] = d4vgxi, this['locator'] && xclfj9n(this['locator'], d4vgxi);for (var ucj9n = 0x0; uvdg4 > ucj9n; ucj9n++) {
      var jucvnd = cunf9['getURI'](ucj9n),
          ljcn9f = cunf9['getValue'](ucj9n),
          fvc = cunf9['getQName'](ucj9n),
          kb0e1w = cnjf['createAttributeNS'](jucvnd, fvc);this['locator'] && xclfj9n(cunf9['getLocator'](ucj9n), kb0e1w), kb0e1w['value'] = kb0e1w['nodeValue'] = ljcn9f, d4vgxi['setAttributeNode'](kb0e1w);
    }
  }, 'endElement': function () {
    {
      var vgid = this['currentElement'];vgid['tagName'];
    }this['currentElement'] = vgid['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xsd4ig, sdx4gi) {
    var xgim4s = this['doc']['createProcessingInstruction'](xsd4ig, sdx4gi);this['locator'] && xclfj9n(this['locator'], xgim4s), xw62t13(this, xgim4s);
  }, 'ignorableWhitespace': function () {}, 'characters': function (k61) {
    if (k61 = xot625z['apply'](this, arguments)) {
      if (this['cdata']) var fnljc9 = this['doc']['createCDATASection'](k61);else var fnljc9 = this['doc']['createTextNode'](k61);this['currentElement'] ? this['currentElement']['appendChild'](fnljc9) : /^\s*$/['test'](k61) && this['doc']['appendChild'](fnljc9), this['locator'] && xclfj9n(this['locator'], fnljc9);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ebpk) {
    (this['locator'] = ebpk) && (ebpk['lineNumber'] = 0x0);
  }, 'comment': function (ncudjv) {
    ncudjv = xot625z['apply'](this, arguments);var w1k6t = this['doc']['createComment'](ncudjv);this['locator'] && xclfj9n(this['locator'], w1k6t), xw62t13(this, w1k6t);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mozs25, u4vgdi, i4gu) {
    var omz562 = this['doc']['implementation'];if (omz562 && omz562['createDocumentType']) {
      var is4m = omz562['createDocumentType'](mozs25, u4vgdi, i4gu);this['locator'] && xclfj9n(this['locator'], is4m), xw62t13(this, is4m);
    }
  }, 'warning': function (ek0bph) {
    console['warn']('[xmldom warning]\t' + ek0bph, xgmsx(this['locator']));
  }, 'error': function (qhe_) {
    console['error']('[xmldom error]\t' + qhe_, xgmsx(this['locator']));
  }, 'fatalError': function (hq_ap) {
    throw console['error']('[xmldom fatalError]\t' + hq_ap, xgmsx(this['locator'])), hq_ap;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (f7y8) {
  xt3w1k['prototype'][f7y8] = function () {
    return null;
  };
});var xdguj = require('./xxqxx')['XMLReader'],
    xgn4vdu = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xvdiu;