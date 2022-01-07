var Y = wx.$M;
function M_m_(xky3qu) {
  this['options'] = xky3qu || { 'locator': {} };
}function M__6s47j(l05hn, hn7, etpz) {
  function dfvb$(wdrvf) {
    var ga8c2 = l05hn[wdrvf];!ga8c2 && wd0 && (ga8c2 = 0x2 == l05hn['length'] ? function (c6aog) {
      l05hn(wdrvf, c6aog);
    } : l05hn), minh5j[wdrvf] = ga8c2 && function (b$0fw) {
      ga8c2('[xmldom ' + wdrvf + ']\t' + b$0fw + M_sgaoc(etpz));
    } || function () {};
  }if (!l05hn) {
    if (hn7 instanceof M_agos64) return hn7;l05hn = hn7;
  }var minh5j = {},
      wd0 = l05hn instanceof Function;return etpz = etpz || {}, dfvb$('warning'), dfvb$('error'), dfvb$('fatalError'), minh5j;
}function M_agos64() {
  this['cdata'] = !0x1;
}function M_ogc86a(pez28, h74m) {
  h74m['lineNumber'] = pez28['lineNumber'], h74m['columnNumber'] = pez28['columnNumber'];
}function M_sgaoc(ac28t) {
  return ac28t ? '\x0a@' + (ac28t['systemId'] || '') + '#[line:' + ac28t['lineNumber'] + ',col:' + ac28t['columnNumber'] + ']' : void 0x0;
}function M_wr9fb(ld05$b, vf$dbw, ru9k1x) {
  return 'string' == typeof ld05$b ? ld05$b['substr'](vf$dbw, ru9k1x) : ld05$b['length'] >= vf$dbw + ru9k1x || vf$dbw ? new java['lang']['String'](ld05$b, vf$dbw, ru9k1x) + '' : ld05$b;
}function M_nhmij7(et2cz8, j7m_4h) {
  et2cz8['currentElement'] ? et2cz8['currentElement']['appendChild'](j7m_4h) : et2cz8['doc']['appendChild'](j7m_4h);
}M_m_['prototype']['parseFromString'] = function (acgso, o8gce) {
  var h5ml = this['options'],
      h74jm_ = new M_yukx1(),
      fvr9bw = h5ml['domBuilder'] || new M_agos64(),
      j74sm = h5ml['errorHandler'],
      kuy1x = h5ml['locator'],
      g8oa6c = h5ml['xmlns'] || {},
      xuqk = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return kuy1x && fvr9bw['setDocumentLocator'](kuy1x), h74jm_['errorHandler'] = M__6s47j(j74sm, fvr9bw, kuy1x), h74jm_['domBuilder'] = h5ml['domBuilder'] || fvr9bw, /\/x?html?$/['test'](o8gce) && (xuqk['nbsp'] = '\u00a0', xuqk['copy'] = '©', g8oa6c[''] = 'http://www.w3.org/1999/xhtml'), g8oa6c['xml'] = g8oa6c['xml'] || 'http://www.w3.org/XML/1998/namespace', acgso ? h74jm_['parse'](acgso, g8oa6c, xuqk) : h74jm_['errorHandler']['error']('invalid doc source'), fvr9bw['doc'];
}, M_agos64['prototype'] = { 'startDocument': function () {
    this['doc'] = new M__sjm7()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ezt2c8, nj_7hm, t2ep8, s46o7) {
    var o6gca8 = this['doc'],
        dfw$ = o6gca8['createElementNS'](ezt2c8, t2ep8 || nj_7hm),
        yxu91 = s46o7['length'];M_nhmij7(this, dfw$), this['currentElement'] = dfw$, this['locator'] && M_ogc86a(this['locator'], dfw$);for (var wdvrfb = 0x0; yxu91 > wdvrfb; wdvrfb++) {
      var ezt2c8 = s46o7['getURI'](wdvrfb),
          xy1kuq = s46o7['getValue'](wdvrfb),
          t2ep8 = s46o7['getQName'](wdvrfb),
          vfwbr = o6gca8['createAttributeNS'](ezt2c8, t2ep8);this['locator'] && M_ogc86a(s46o7['getLocator'](wdvrfb), vfwbr), vfwbr['value'] = vfwbr['nodeValue'] = xy1kuq, dfw$['setAttributeNode'](vfwbr);
    }
  }, 'endElement': function () {
    {
      var xyku91 = this['currentElement'];xyku91['tagName'];
    }this['currentElement'] = xyku91['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wbv$d, jh_) {
    var _mjh = this['doc']['createProcessingInstruction'](wbv$d, jh_);this['locator'] && M_ogc86a(this['locator'], _mjh), M_nhmij7(this, _mjh);
  }, 'ignorableWhitespace': function () {}, 'characters': function (fdrbv) {
    if (fdrbv = M_wr9fb['apply'](this, arguments)) {
      if (this['cdata']) var sj7_m4 = this['doc']['createCDATASection'](fdrbv);else var sj7_m4 = this['doc']['createTextNode'](fdrbv);this['currentElement'] ? this['currentElement']['appendChild'](sj7_m4) : /^\s*$/['test'](fdrbv) && this['doc']['appendChild'](sj7_m4), this['locator'] && M_ogc86a(this['locator'], sj7_m4);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bwfd) {
    (this['locator'] = bwfd) && (bwfd['lineNumber'] = 0x0);
  }, 'comment': function (minh) {
    minh = M_wr9fb['apply'](this, arguments);var imhn5l = this['doc']['createComment'](minh);this['locator'] && M_ogc86a(this['locator'], imhn5l), M_nhmij7(this, imhn5l);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (njhm5i, zep2t8, b0ld) {
    var s6o_7 = this['doc']['implementation'];if (s6o_7 && s6o_7['createDocumentType']) {
      var ijm7nh = s6o_7['createDocumentType'](njhm5i, zep2t8, b0ld);this['locator'] && M_ogc86a(this['locator'], ijm7nh), M_nhmij7(this, ijm7nh);
    }
  }, 'warning': function (lw$) {
    console['warn']('[xmldom warning]\t' + lw$, M_sgaoc(this['locator']));
  }, 'error': function (oea) {
    console['error']('[xmldom error]\t' + oea, M_sgaoc(this['locator']));
  }, 'fatalError': function (nlh5m) {
    throw console['error']('[xmldom fatalError]\t' + nlh5m, M_sgaoc(this['locator'])), nlh5m;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (l$50n) {
  M_agos64['prototype'][l$50n] = function () {
    return null;
  };
});var M_yukx1 = require('./mmmSAX')['XMLReader'],
    M__sjm7 = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_m_;