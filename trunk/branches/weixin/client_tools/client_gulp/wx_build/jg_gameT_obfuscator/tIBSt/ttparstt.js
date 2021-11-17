var M = wx.$T;
function tnjrbga(z7qe0o) {
  this['options'] = z7qe0o || { 'locator': {} };
}function tfdz$v(zd7$, garjbk, c4t29i) {
  function oezpf(z7qo) {
    var fpoe7z = zd7$[z7qo];!fpoe7z && ukjsab && (fpoe7z = 0x2 == zd7$['length'] ? function (w158h) {
      zd7$(z7qo, w158h);
    } : zd7$), rbagk[z7qo] = fpoe7z && function (vd$c) {
      fpoe7z('[xmldom ' + z7qo + ']\t' + vd$c + to7eq0z(c4t29i));
    } || function () {};
  }if (!zd7$) {
    if (garjbk instanceof tabuk) return garjbk;zd7$ = garjbk;
  }var rbagk = {},
      ukjsab = zd7$ instanceof Function;return c4t29i = c4t29i || {}, oezpf('warning'), oezpf('error'), oezpf('fatalError'), rbagk;
}function tabuk() {
  this['cdata'] = !0x1;
}function tfd(kgjbr, ym0x_) {
  ym0x_['lineNumber'] = kgjbr['lineNumber'], ym0x_['columnNumber'] = kgjbr['columnNumber'];
}function to7eq0z(t29civ) {
  return t29civ ? '\x0a@' + (t29civ['systemId'] || '') + '#[line:' + t29civ['lineNumber'] + ',col:' + t29civ['columnNumber'] + ']' : void 0x0;
}function tey0xo(jganbr, oq0xe7, qz0o7e) {
  return 'string' == typeof jganbr ? jganbr['substr'](oq0xe7, qz0o7e) : jganbr['length'] >= oq0xe7 + qz0o7e || oq0xe7 ? new java['lang']['String'](jganbr, oq0xe7, qz0o7e) + '' : jganbr;
}function tzeq0o(grjnab, ajnbr) {
  grjnab['currentElement'] ? grjnab['currentElement']['appendChild'](ajnbr) : grjnab['doc']['appendChild'](ajnbr);
}tnjrbga['prototype']['parseFromString'] = function (jnragb, jrs) {
  var ng = this['options'],
      d7ozfp = new ti2cl4t(),
      qx0y_m = ng['domBuilder'] || new tabuk(),
      qo7zef = ng['errorHandler'],
      d$ip9 = ng['locator'],
      $pv9i = ng['xmlns'] || {},
      wm156 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return d$ip9 && qx0y_m['setDocumentLocator'](d$ip9), d7ozfp['errorHandler'] = tfdz$v(qo7zef, qx0y_m, d$ip9), d7ozfp['domBuilder'] = ng['domBuilder'] || qx0y_m, /\/x?html?$/['test'](jrs) && (wm156['nbsp'] = '\u00a0', wm156['copy'] = '©', $pv9i[''] = 'http://www.w3.org/1999/xhtml'), $pv9i['xml'] = $pv9i['xml'] || 'http://www.w3.org/XML/1998/namespace', jnragb ? d7ozfp['parse'](jnragb, $pv9i, wm156) : d7ozfp['errorHandler']['error']('invalid doc source'), qx0y_m['doc'];
}, tabuk['prototype'] = { 'startDocument': function () {
    this['doc'] = new tbrjg3n()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (nagrj, dfzop7, oe7x0q, v$icd) {
    var zdpo7f = this['doc'],
        zq7o0 = zdpo7f['createElementNS'](nagrj, oe7x0q || dfzop7),
        oxe7 = v$icd['length'];tzeq0o(this, zq7o0), this['currentElement'] = zq7o0, this['locator'] && tfd(this['locator'], zq7o0);for (var qe7of = 0x0; oxe7 > qe7of; qe7of++) {
      var nagrj = v$icd['getURI'](qe7of),
          gkbrj = v$icd['getValue'](qe7of),
          oe7x0q = v$icd['getQName'](qe7of),
          fe7ozq = zdpo7f['createAttributeNS'](nagrj, oe7x0q);this['locator'] && tfd(v$icd['getLocator'](qe7of), fe7ozq), fe7ozq['value'] = fe7ozq['nodeValue'] = gkbrj, zq7o0['setAttributeNode'](fe7ozq);
    }
  }, 'endElement': function () {
    {
      var subk = this['currentElement'];subk['tagName'];
    }this['currentElement'] = subk['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (q0oex, my_h0) {
    var _ywmhx = this['doc']['createProcessingInstruction'](q0oex, my_h0);this['locator'] && tfd(this['locator'], _ywmhx), tzeq0o(this, _ywmhx);
  }, 'ignorableWhitespace': function () {}, 'characters': function (dzfp7$) {
    if (dzfp7$ = tey0xo['apply'](this, arguments)) {
      if (this['cdata']) var t2iv = this['doc']['createCDATASection'](dzfp7$);else var t2iv = this['doc']['createTextNode'](dzfp7$);this['currentElement'] ? this['currentElement']['appendChild'](t2iv) : /^\s*$/['test'](dzfp7$) && this['doc']['appendChild'](t2iv), this['locator'] && tfd(this['locator'], t2iv);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bsraj) {
    (this['locator'] = bsraj) && (bsraj['lineNumber'] = 0x0);
  }, 'comment': function (w5386) {
    w5386 = tey0xo['apply'](this, arguments);var g31nr8 = this['doc']['createComment'](w5386);this['locator'] && tfd(this['locator'], g31nr8), tzeq0o(this, g31nr8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (f9v$dp, fvzp, q_myx0) {
    var y0mqx_ = this['doc']['implementation'];if (y0mqx_ && y0mqx_['createDocumentType']) {
      var clt42 = y0mqx_['createDocumentType'](f9v$dp, fvzp, q_myx0);this['locator'] && tfd(this['locator'], clt42), tzeq0o(this, clt42);
    }
  }, 'warning': function (g8136n) {
    console['warn']('[xmldom warning]\t' + g8136n, to7eq0z(this['locator']));
  }, 'error': function (w16h5m) {
    console['error']('[xmldom error]\t' + w16h5m, to7eq0z(this['locator']));
  }, 'fatalError': function (ic$v) {
    throw console['error']('[xmldom fatalError]\t' + ic$v, to7eq0z(this['locator'])), ic$v;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qy0xoe) {
  tabuk['prototype'][qy0xoe] = function () {
    return null;
  };
});var ti2cl4t = require('./tT12tt')['XMLReader'],
    tbrjg3n = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tnjrbga;