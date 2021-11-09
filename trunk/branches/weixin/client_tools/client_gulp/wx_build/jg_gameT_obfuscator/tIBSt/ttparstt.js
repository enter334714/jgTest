var M = wx.$T;
function tkbsjau(jnbar) {
  this['options'] = jnbar || { 'locator': {} };
}function td9$iv(pzef7o, jubak, hxwm_y) {
  function sjrbak(gajrn) {
    var icv9 = pzef7o[gajrn];!icv9 && h651wm && (icv9 = 0x2 == pzef7o['length'] ? function (_mxy0h) {
      pzef7o(gajrn, _mxy0h);
    } : pzef7o), ng1386[gajrn] = icv9 && function (eyxoq0) {
      icv9('[xmldom ' + gajrn + ']\t' + eyxoq0 + tbgrnja(hxwm_y));
    } || function () {};
  }if (!pzef7o) {
    if (jubak instanceof tnjarg) return jubak;pzef7o = jubak;
  }var ng1386 = {},
      h651wm = pzef7o instanceof Function;return hxwm_y = hxwm_y || {}, sjrbak('warning'), sjrbak('error'), sjrbak('fatalError'), ng1386;
}function tnjarg() {
  this['cdata'] = !0x1;
}function tgakb(hm_56w, fz7oe) {
  fz7oe['lineNumber'] = hm_56w['lineNumber'], fz7oe['columnNumber'] = hm_56w['columnNumber'];
}function tbgrnja(rjbnga) {
  return rjbnga ? '\x0a@' + (rjbnga['systemId'] || '') + '#[line:' + rjbnga['lineNumber'] + ',col:' + rjbnga['columnNumber'] + ']' : void 0x0;
}function tbksaju(c4tl2i, vi9$ct, akjsr) {
  return 'string' == typeof c4tl2i ? c4tl2i['substr'](vi9$ct, akjsr) : c4tl2i['length'] >= vi9$ct + akjsr || vi9$ct ? new java['lang']['String'](c4tl2i, vi9$ct, akjsr) + '' : c4tl2i;
}function tcti$9(h_56, fp$zd) {
  h_56['currentElement'] ? h_56['currentElement']['appendChild'](fp$zd) : h_56['doc']['appendChild'](fp$zd);
}tkbsjau['prototype']['parseFromString'] = function (h81, grkb) {
  var vi9cd$ = this['options'],
      fdpv$z = new tm5_wyh(),
      _m6w = vi9cd$['domBuilder'] || new tnjarg(),
      i9dpv$ = vi9cd$['errorHandler'],
      pod7zf = vi9cd$['locator'],
      p9i$dv = vi9cd$['xmlns'] || {},
      y_ex0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return pod7zf && _m6w['setDocumentLocator'](pod7zf), fdpv$z['errorHandler'] = td9$iv(i9dpv$, _m6w, pod7zf), fdpv$z['domBuilder'] = vi9cd$['domBuilder'] || _m6w, /\/x?html?$/['test'](grkb) && (y_ex0['nbsp'] = '\u00a0', y_ex0['copy'] = '©', p9i$dv[''] = 'http://www.w3.org/1999/xhtml'), p9i$dv['xml'] = p9i$dv['xml'] || 'http://www.w3.org/XML/1998/namespace', h81 ? fdpv$z['parse'](h81, p9i$dv, y_ex0) : fdpv$z['errorHandler']['error']('invalid doc source'), _m6w['doc'];
}, tnjarg['prototype'] = { 'startDocument': function () {
    this['doc'] = new trkg()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rn8g3j, kjubsa, o7fqze, jg83rn) {
    var vpd$i9 = this['doc'],
        dofzp7 = vpd$i9['createElementNS'](rn8g3j, o7fqze || kjubsa),
        i942t = jg83rn['length'];tcti$9(this, dofzp7), this['currentElement'] = dofzp7, this['locator'] && tgakb(this['locator'], dofzp7);for (var jkbars = 0x0; i942t > jkbars; jkbars++) {
      var rn8g3j = jg83rn['getURI'](jkbars),
          zfoqe7 = jg83rn['getValue'](jkbars),
          o7fqze = jg83rn['getQName'](jkbars),
          z7$f = vpd$i9['createAttributeNS'](rn8g3j, o7fqze);this['locator'] && tgakb(jg83rn['getLocator'](jkbars), z7$f), z7$f['value'] = z7$f['nodeValue'] = zfoqe7, dofzp7['setAttributeNode'](z7$f);
    }
  }, 'endElement': function () {
    {
      var sarbkj = this['currentElement'];sarbkj['tagName'];
    }this['currentElement'] = sarbkj['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (d$7zf, ywh_m) {
    var c2tli = this['doc']['createProcessingInstruction'](d$7zf, ywh_m);this['locator'] && tgakb(this['locator'], c2tli), tcti$9(this, c2tli);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_xq0e) {
    if (_xq0e = tbksaju['apply'](this, arguments)) {
      if (this['cdata']) var gjabr = this['doc']['createCDATASection'](_xq0e);else var gjabr = this['doc']['createTextNode'](_xq0e);this['currentElement'] ? this['currentElement']['appendChild'](gjabr) : /^\s*$/['test'](_xq0e) && this['doc']['appendChild'](gjabr), this['locator'] && tgakb(this['locator'], gjabr);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vi9$t) {
    (this['locator'] = vi9$t) && (vi9$t['lineNumber'] = 0x0);
  }, 'comment': function (h_x0m) {
    h_x0m = tbksaju['apply'](this, arguments);var ef7 = this['doc']['createComment'](h_x0m);this['locator'] && tgakb(this['locator'], ef7), tcti$9(this, ef7);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (aubjsk, vdc$, myqx_0) {
    var mxwhy = this['doc']['implementation'];if (mxwhy && mxwhy['createDocumentType']) {
      var zoqe7 = mxwhy['createDocumentType'](aubjsk, vdc$, myqx_0);this['locator'] && tgakb(this['locator'], zoqe7), tcti$9(this, zoqe7);
    }
  }, 'warning': function (_wmyxh) {
    console['warn']('[xmldom warning]\t' + _wmyxh, tbgrnja(this['locator']));
  }, 'error': function (i9cvd$) {
    console['error']('[xmldom error]\t' + i9cvd$, tbgrnja(this['locator']));
  }, 'fatalError': function (n68135) {
    throw console['error']('[xmldom fatalError]\t' + n68135, tbgrnja(this['locator'])), n68135;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d$pfz7) {
  tnjarg['prototype'][d$pfz7] = function () {
    return null;
  };
});var tm5_wyh = require('./tT12tt')['XMLReader'],
    trkg = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tkbsjau;