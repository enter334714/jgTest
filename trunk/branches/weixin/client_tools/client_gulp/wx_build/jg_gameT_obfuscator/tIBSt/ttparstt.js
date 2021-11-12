var M = wx.$T;
function tujasb(_e0xyq) {
  this['options'] = _e0xyq || { 'locator': {} };
}function tope7(di9pv$, y0e, fzo7dp) {
  function _x(f7$zpd) {
    var bjgrn3 = di9pv$[f7$zpd];!bjgrn3 && rj3g8 && (bjgrn3 = 0x2 == di9pv$['length'] ? function (dzvpf$) {
      di9pv$(f7$zpd, dzvpf$);
    } : di9pv$), fzd$v[f7$zpd] = bjgrn3 && function (bgranj) {
      bjgrn3('[xmldom ' + f7$zpd + ']\t' + bgranj + tjgak(fzo7dp));
    } || function () {};
  }if (!di9pv$) {
    if (y0e instanceof tdvc$9) return y0e;di9pv$ = y0e;
  }var fzd$v = {},
      rj3g8 = di9pv$ instanceof Function;return fzo7dp = fzo7dp || {}, _x('warning'), _x('error'), _x('fatalError'), fzd$v;
}function tdvc$9() {
  this['cdata'] = !0x1;
}function tyxqm(tci92v, y5hmw_) {
  y5hmw_['lineNumber'] = tci92v['lineNumber'], y5hmw_['columnNumber'] = tci92v['columnNumber'];
}function tjgak(c$9di) {
  return c$9di ? '\x0a@' + (c$9di['systemId'] || '') + '#[line:' + c$9di['lineNumber'] + ',col:' + c$9di['columnNumber'] + ']' : void 0x0;
}function twhmy5_(f9pvd$, _hmw5, n6g813) {
  return 'string' == typeof f9pvd$ ? f9pvd$['substr'](_hmw5, n6g813) : f9pvd$['length'] >= _hmw5 + n6g813 || _hmw5 ? new java['lang']['String'](f9pvd$, _hmw5, n6g813) + '' : f9pvd$;
}function tr813n(d9cvi, piv9$d) {
  d9cvi['currentElement'] ? d9cvi['currentElement']['appendChild'](piv9$d) : d9cvi['doc']['appendChild'](piv9$d);
}tujasb['prototype']['parseFromString'] = function (idp9$, qo07x) {
  var bsukj = this['options'],
      p7ozef = new ttc4li2(),
      fpo7ez = bsukj['domBuilder'] || new tdvc$9(),
      eq70z = bsukj['errorHandler'],
      d9vi = bsukj['locator'],
      juba = bsukj['xmlns'] || {},
      $zpfvd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return d9vi && fpo7ez['setDocumentLocator'](d9vi), p7ozef['errorHandler'] = tope7(eq70z, fpo7ez, d9vi), p7ozef['domBuilder'] = bsukj['domBuilder'] || fpo7ez, /\/x?html?$/['test'](qo07x) && ($zpfvd['nbsp'] = '\u00a0', $zpfvd['copy'] = '©', juba[''] = 'http://www.w3.org/1999/xhtml'), juba['xml'] = juba['xml'] || 'http://www.w3.org/XML/1998/namespace', idp9$ ? p7ozef['parse'](idp9$, juba, $zpfvd) : p7ozef['errorHandler']['error']('invalid doc source'), fpo7ez['doc'];
}, tdvc$9['prototype'] = { 'startDocument': function () {
    this['doc'] = new tvf9p$d()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (exo0yq, p9vdf$, ksrjba, ct92i4) {
    var ox70qe = this['doc'],
        h5wm_6 = ox70qe['createElementNS'](exo0yq, ksrjba || p9vdf$),
        t42i9 = ct92i4['length'];tr813n(this, h5wm_6), this['currentElement'] = h5wm_6, this['locator'] && tyxqm(this['locator'], h5wm_6);for (var y_hxmw = 0x0; t42i9 > y_hxmw; y_hxmw++) {
      var exo0yq = ct92i4['getURI'](y_hxmw),
          asrb = ct92i4['getValue'](y_hxmw),
          ksrjba = ct92i4['getQName'](y_hxmw),
          e7fpzo = ox70qe['createAttributeNS'](exo0yq, ksrjba);this['locator'] && tyxqm(ct92i4['getLocator'](y_hxmw), e7fpzo), e7fpzo['value'] = e7fpzo['nodeValue'] = asrb, h5wm_6['setAttributeNode'](e7fpzo);
    }
  }, 'endElement': function () {
    {
      var oqzf7 = this['currentElement'];oqzf7['tagName'];
    }this['currentElement'] = oqzf7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (id$9p, ez7qfo) {
    var kjbar = this['doc']['createProcessingInstruction'](id$9p, ez7qfo);this['locator'] && tyxqm(this['locator'], kjbar), tr813n(this, kjbar);
  }, 'ignorableWhitespace': function () {}, 'characters': function (yxqoe0) {
    if (yxqoe0 = twhmy5_['apply'](this, arguments)) {
      if (this['cdata']) var w856h1 = this['doc']['createCDATASection'](yxqoe0);else var w856h1 = this['doc']['createTextNode'](yxqoe0);this['currentElement'] ? this['currentElement']['appendChild'](w856h1) : /^\s*$/['test'](yxqoe0) && this['doc']['appendChild'](w856h1), this['locator'] && tyxqm(this['locator'], w856h1);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (iv9$d) {
    (this['locator'] = iv9$d) && (iv9$d['lineNumber'] = 0x0);
  }, 'comment': function (mw5_hy) {
    mw5_hy = twhmy5_['apply'](this, arguments);var xy_e0 = this['doc']['createComment'](mw5_hy);this['locator'] && tyxqm(this['locator'], xy_e0), tr813n(this, xy_e0);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (n3jg8, jakbr, xq0eo7) {
    var df$pv = this['doc']['implementation'];if (df$pv && df$pv['createDocumentType']) {
      var c$9dv = df$pv['createDocumentType'](n3jg8, jakbr, xq0eo7);this['locator'] && tyxqm(this['locator'], c$9dv), tr813n(this, c$9dv);
    }
  }, 'warning': function (q7z0oe) {
    console['warn']('[xmldom warning]\t' + q7z0oe, tjgak(this['locator']));
  }, 'error': function (bngjr) {
    console['error']('[xmldom error]\t' + bngjr, tjgak(this['locator']));
  }, 'fatalError': function (ajsk) {
    throw console['error']('[xmldom fatalError]\t' + ajsk, tjgak(this['locator'])), ajsk;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (dzp$v) {
  tdvc$9['prototype'][dzp$v] = function () {
    return null;
  };
});var ttc4li2 = require('./tT12tt')['XMLReader'],
    tvf9p$d = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tujasb;