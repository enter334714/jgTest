var b = wx.$e;
function eb05d86(sb0k) {
  this['options'] = sb0k || { 'locator': {} };
}function eilxg$(jni$q3, caomp, $hxtl) {
  function hxlrt(z_yv4) {
    var g$jtxi = jni$q3[z_yv4];!g$jtxi && rtyhz && (g$jtxi = 0x2 == jni$q3['length'] ? function (j$x3gi) {
      jni$q3(z_yv4, j$x3gi);
    } : jni$q3), aomep[z_yv4] = g$jtxi && function (bs096) {
      g$jtxi('[xmldom ' + z_yv4 + ']\t' + bs096 + eylhfz($hxtl));
    } || function () {};
  }if (!jni$q3) {
    if (caomp instanceof ezfryhv) return caomp;jni$q3 = caomp;
  }var aomep = {},
      rtyhz = jni$q3 instanceof Function;return $hxtl = $hxtl || {}, hxlrt('warning'), hxlrt('error'), hxlrt('fatalError'), aomep;
}function ezfryhv() {
  this['cdata'] = !0x1;
}function es9un6(zrth, s9qku) {
  s9qku['lineNumber'] = zrth['lineNumber'], s9qku['columnNumber'] = zrth['columnNumber'];
}function eylhfz(jt$xi) {
  return jt$xi ? '\x0a@' + (jt$xi['systemId'] || '') + '#[line:' + jt$xi['lineNumber'] + ',col:' + jt$xi['columnNumber'] + ']' : void 0x0;
}function eoam7cp(hgxt$, rfzvyh, hlzg) {
  return 'string' == typeof hgxt$ ? hgxt$['substr'](rfzvyh, hlzg) : hgxt$['length'] >= rfzvyh + hlzg || rfzvyh ? new java['lang']['String'](hgxt$, rfzvyh, hlzg) + '' : hgxt$;
}function etlh$gx(rtyhl, ma_v47) {
  rtyhl['currentElement'] ? rtyhl['currentElement']['appendChild'](ma_v47) : rtyhl['doc']['appendChild'](ma_v47);
}eb05d86['prototype']['parseFromString'] = function (qknsu, tzyrhl) {
  var $jtgix = this['options'],
      hzflry = new ej3ixg$(),
      rzytlh = $jtgix['domBuilder'] || new ezfryhv(),
      m_cao7 = $jtgix['errorHandler'],
      fvzy4 = $jtgix['locator'],
      qin$j = $jtgix['xmlns'] || {},
      s3jnu = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fvzy4 && rzytlh['setDocumentLocator'](fvzy4), hzflry['errorHandler'] = eilxg$(m_cao7, rzytlh, fvzy4), hzflry['domBuilder'] = $jtgix['domBuilder'] || rzytlh, /\/x?html?$/['test'](tzyrhl) && (s3jnu['nbsp'] = '\u00a0', s3jnu['copy'] = '©', qin$j[''] = 'http://www.w3.org/1999/xhtml'), qin$j['xml'] = qin$j['xml'] || 'http://www.w3.org/XML/1998/namespace', qknsu ? hzflry['parse'](qknsu, qin$j, s3jnu) : hzflry['errorHandler']['error']('invalid doc source'), rzytlh['doc'];
}, ezfryhv['prototype'] = { 'startDocument': function () {
    this['doc'] = new es6u9b()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ltzgr, g3ji, yhvrfz, aomp) {
    var s9un6k = this['doc'],
        z_4vf = s9un6k['createElementNS'](ltzgr, yhvrfz || g3ji),
        cpao7 = aomp['length'];etlh$gx(this, z_4vf), this['currentElement'] = z_4vf, this['locator'] && es9un6(this['locator'], z_4vf);for (var av7_ = 0x0; cpao7 > av7_; av7_++) {
      var ltzgr = aomp['getURI'](av7_),
          ghtzl = aomp['getValue'](av7_),
          yhvrfz = aomp['getQName'](av7_),
          i$ltg = s9un6k['createAttributeNS'](ltzgr, yhvrfz);this['locator'] && es9un6(aomp['getLocator'](av7_), i$ltg), i$ltg['value'] = i$ltg['nodeValue'] = ghtzl, z_4vf['setAttributeNode'](i$ltg);
    }
  }, 'endElement': function () {
    {
      var nuj3q = this['currentElement'];nuj3q['tagName'];
    }this['currentElement'] = nuj3q['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ix3j$g, s6b09) {
    var inu3j = this['doc']['createProcessingInstruction'](ix3j$g, s6b09);this['locator'] && es9un6(this['locator'], inu3j), etlh$gx(this, inu3j);
  }, 'ignorableWhitespace': function () {}, 'characters': function (h$gtlx) {
    if (h$gtlx = eoam7cp['apply'](this, arguments)) {
      if (this['cdata']) var hyfz = this['doc']['createCDATASection'](h$gtlx);else var hyfz = this['doc']['createTextNode'](h$gtlx);this['currentElement'] ? this['currentElement']['appendChild'](hyfz) : /^\s*$/['test'](h$gtlx) && this['doc']['appendChild'](hyfz), this['locator'] && es9un6(this['locator'], hyfz);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (yzthr) {
    (this['locator'] = yzthr) && (yzthr['lineNumber'] = 0x0);
  }, 'comment': function (b096s) {
    b096s = eoam7cp['apply'](this, arguments);var njuq = this['doc']['createComment'](b096s);this['locator'] && es9un6(this['locator'], njuq), etlh$gx(this, njuq);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (d68, lhtrg, _vzf) {
    var n9us6k = this['doc']['implementation'];if (n9us6k && n9us6k['createDocumentType']) {
      var gxli$ = n9us6k['createDocumentType'](d68, lhtrg, _vzf);this['locator'] && es9un6(this['locator'], gxli$), etlh$gx(this, gxli$);
    }
  }, 'warning': function (yrfv4z) {
    console['warn']('[xmldom warning]\t' + yrfv4z, eylhfz(this['locator']));
  }, 'error': function (hgtx$l) {
    console['error']('[xmldom error]\t' + hgtx$l, eylhfz(this['locator']));
  }, 'fatalError': function (wb805d) {
    throw console['error']('[xmldom fatalError]\t' + wb805d, eylhfz(this['locator'])), wb805d;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (bk65d0) {
  ezfryhv['prototype'][bk65d0] = function () {
    return null;
  };
});var ej3ixg$ = require('./eeesax')['XMLReader'],
    es6u9b = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = eb05d86;