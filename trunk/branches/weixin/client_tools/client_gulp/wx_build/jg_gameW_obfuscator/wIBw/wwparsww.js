var s = wx.$W;
function wnwo(ez7132) {
  this['options'] = ez7132 || { 'locator': {} };
}function wcut50(xybrd, g5kc, kdbxg) {
  function fej3z1(t4hpu6) {
    var ejf1 = xybrd[t4hpu6];!ejf1 && wfzn && (ejf1 = 0x2 == xybrd['length'] ? function (so4mq) {
      xybrd(t4hpu6, so4mq);
    } : xybrd), qsow[t4hpu6] = ejf1 && function (u85t0) {
      ejf1('[xmldom ' + t4hpu6 + ']\t' + u85t0 + wsowm(kdbxg));
    } || function () {};
  }if (!xybrd) {
    if (g5kc instanceof wv$x9a) return g5kc;xybrd = g5kc;
  }var qsow = {},
      wfzn = xybrd instanceof Function;return kdbxg = kdbxg || {}, fej3z1('warning'), fej3z1('error'), fej3z1('fatalError'), qsow;
}function wv$x9a() {
  this['cdata'] = !0x1;
}function ws6qmo4(rvx, zejwf) {
  zejwf['lineNumber'] = rvx['lineNumber'], zejwf['columnNumber'] = rvx['columnNumber'];
}function wsowm(fjwsn) {
  return fjwsn ? '\x0a@' + (fjwsn['systemId'] || '') + '#[line:' + fjwsn['lineNumber'] + ',col:' + fjwsn['columnNumber'] + ']' : void 0x0;
}function wjzwf1(d$, wms, p64thu) {
  return 'string' == typeof d$ ? d$['substr'](wms, p64thu) : d$['length'] >= wms + p64thu || wms ? new java['lang']['String'](d$, wms, p64thu) + '' : d$;
}function wjnefzw(dkxby, dbgxr) {
  dkxby['currentElement'] ? dkxby['currentElement']['appendChild'](dbgxr) : dkxby['doc']['appendChild'](dbgxr);
}wnwo['prototype']['parseFromString'] = function (wje1fz, mpqh64) {
  var crkb = this['options'],
      h6mq4p = new wal$9v_(),
      omwns = crkb['domBuilder'] || new wv$x9a(),
      zfjw1e = crkb['errorHandler'],
      o4snm = crkb['locator'],
      h0tpu = crkb['xmlns'] || {},
      c0u8t5 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return o4snm && omwns['setDocumentLocator'](o4snm), h6mq4p['errorHandler'] = wcut50(zfjw1e, omwns, o4snm), h6mq4p['domBuilder'] = crkb['domBuilder'] || omwns, /\/x?html?$/['test'](mpqh64) && (c0u8t5['nbsp'] = '\u00a0', c0u8t5['copy'] = '©', h0tpu[''] = 'http://www.w3.org/1999/xhtml'), h0tpu['xml'] = h0tpu['xml'] || 'http://www.w3.org/XML/1998/namespace', wje1fz ? h6mq4p['parse'](wje1fz, h0tpu, c0u8t5) : h6mq4p['errorHandler']['error']('invalid doc source'), omwns['doc'];
}, wv$x9a['prototype'] = { 'startDocument': function () {
    this['doc'] = new wfjzewn()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (h4puq6, b5gdck, ezj3, fjoenw) {
    var yrbd = this['doc'],
        rkxbgd = yrbd['createElementNS'](h4puq6, ezj3 || b5gdck),
        h6up4q = fjoenw['length'];wjnefzw(this, rkxbgd), this['currentElement'] = rkxbgd, this['locator'] && ws6qmo4(this['locator'], rkxbgd);for (var nmq4so = 0x0; h6up4q > nmq4so; nmq4so++) {
      var h4puq6 = fjoenw['getURI'](nmq4so),
          jwe1f = fjoenw['getValue'](nmq4so),
          ezj3 = fjoenw['getQName'](nmq4so),
          wosjmn = yrbd['createAttributeNS'](h4puq6, ezj3);this['locator'] && ws6qmo4(fjoenw['getLocator'](nmq4so), wosjmn), wosjmn['value'] = wosjmn['nodeValue'] = jwe1f, rkxbgd['setAttributeNode'](wosjmn);
    }
  }, 'endElement': function () {
    {
      var pht80u = this['currentElement'];pht80u['tagName'];
    }this['currentElement'] = pht80u['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ef1z3, onm4) {
    var yrakd = this['doc']['createProcessingInstruction'](ef1z3, onm4);this['locator'] && ws6qmo4(this['locator'], yrakd), wjnefzw(this, yrakd);
  }, 'ignorableWhitespace': function () {}, 'characters': function (wjnezf) {
    if (wjnezf = wjzwf1['apply'](this, arguments)) {
      if (this['cdata']) var wfejon = this['doc']['createCDATASection'](wjnezf);else var wfejon = this['doc']['createTextNode'](wjnezf);this['currentElement'] ? this['currentElement']['appendChild'](wfejon) : /^\s*$/['test'](wjnezf) && this['doc']['appendChild'](wfejon), this['locator'] && ws6qmo4(this['locator'], wfejon);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tup6h) {
    (this['locator'] = tup6h) && (tup6h['lineNumber'] = 0x0);
  }, 'comment': function (rvayx) {
    rvayx = wjzwf1['apply'](this, arguments);var day$ = this['doc']['createComment'](rvayx);this['locator'] && ws6qmo4(this['locator'], day$), wjnefzw(this, day$);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h6m4q, _9v$la, pmq64s) {
    var efojnw = this['doc']['implementation'];if (efojnw && efojnw['createDocumentType']) {
      var xkbgdr = efojnw['createDocumentType'](h6m4q, _9v$la, pmq64s);this['locator'] && ws6qmo4(this['locator'], xkbgdr), wjnefzw(this, xkbgdr);
    }
  }, 'warning': function (t80u) {
    console['warn']('[xmldom warning]\t' + t80u, wsowm(this['locator']));
  }, 'error': function (foenj) {
    console['error']('[xmldom error]\t' + foenj, wsowm(this['locator']));
  }, 'fatalError': function (htup80) {
    throw console['error']('[xmldom fatalError]\t' + htup80, wsowm(this['locator'])), htup80;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (brydk) {
  wv$x9a['prototype'][brydk] = function () {
    return null;
  };
});var wal$9v_ = require('./wwqww')['XMLReader'],
    wfjzewn = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wnwo;