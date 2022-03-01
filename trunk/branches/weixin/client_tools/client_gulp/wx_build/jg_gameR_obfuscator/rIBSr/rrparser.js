var I = wx.$R;
function r_kowym(stvl0) {
  this['options'] = stvl0 || { 'locator': {} };
}function r_l3vs(yo8jx, n_ch5, ox2zi) {
  function ua$b19(gkw) {
    var pdegf = yo8jx[gkw];!pdegf && qnefpd && (pdegf = 0x2 == yo8jx['length'] ? function (a9bu) {
      yo8jx(gkw, a9bu);
    } : yo8jx), wyik[gkw] = pdegf ? function (sx2) {
      pdegf('[xmldom ' + gkw + ']\t' + sx2 + r_yoj8xi(ox2zi));
    } : function () {};
  }if (!yo8jx) {
    if (n_ch5 instanceof r_hn6_) return n_ch5;yo8jx = n_ch5;
  }var wyik = {},
      qnefpd = yo8jx instanceof Function;return ox2zi = ox2zi || {}, ua$b19('warning'), ua$b19('error'), ua$b19('fatalError'), wyik;
}function r_hn6_() {
  this['cdata'] = !0x1;
}function r_n_hc5(cqnfpd, i8wko) {
  i8wko['lineNumber'] = cqnfpd['lineNumber'], i8wko['columnNumber'] = cqnfpd['columnNumber'];
}function r_yoj8xi(s23) {
  return s23 ? '\x0a@' + (s23['systemId'] || '') + '#[line:' + s23['lineNumber'] + ',col:' + s23['columnNumber'] + ']' : void 0x0;
}function r_jyoi8k(_$1ba, izjx2s, i8xyjo) {
  return 'string' == typeof _$1ba ? _$1ba['substr'](izjx2s, i8xyjo) : _$1ba['length'] >= izjx2s + i8xyjo || izjx2s ? new java['lang']['String'](_$1ba, izjx2s, i8xyjo) + '' : _$1ba;
}function r_rw8my(mwe7g, l23z) {
  (mwe7g['currentElement'] || mwe7g['doc'])['appendChild'](l23z);
}r_kowym['prototype']['parseFromString'] = function (jiyk, qcfdpn) {
  var iyko8j = this['options'],
      a1b9$u = new r_nepd(),
      rwg7 = iyko8j['domBuilder'] || new r_hn6_(),
      hba_u = iyko8j['errorHandler'],
      qremg7 = iyko8j['locator'],
      pfnc = iyko8j['xmlns'] || {},
      xy8jo = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qremg7 && rwg7['setDocumentLocator'](qremg7), a1b9$u['errorHandler'] = r_l3vs(hba_u, rwg7, qremg7), a1b9$u['domBuilder'] = iyko8j['domBuilder'] || rwg7, /\/x?html?$/['test'](qcfdpn) && (xy8jo['nbsp'] = '\u00a0', xy8jo['copy'] = '©', pfnc[''] = 'http://www.w3.org/1999/xhtml'), pfnc['xml'] = pfnc['xml'] || 'http://www.w3.org/XML/1998/namespace', jiyk ? a1b9$u['parse'](jiyk, pfnc, xy8jo) : a1b9$u['errorHandler']['error']('invalid doc source'), rwg7['doc'];
}, r_hn6_['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_gfdqpe()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (w8iyo, kw8oy, w78km, wkmr8) {
    var kjiyo = this['doc'],
        t3vs0l = kjiyo['createElementNS'](w8iyo, w78km || kw8oy),
        efdgp = wkmr8['length'];r_rw8my(this, t3vs0l), this['currentElement'] = t3vs0l, this['locator'] && r_n_hc5(this['locator'], t3vs0l);for (var wrgm = 0x0; wrgm < efdgp; wrgm++) {
      var w8iyo = wkmr8['getURI'](wrgm),
          y8kowi = wkmr8['getValue'](wrgm),
          w78km = wkmr8['getQName'](wrgm),
          h65cn = kjiyo['createAttributeNS'](w8iyo, w78km);this['locator'] && r_n_hc5(wkmr8['getLocator'](wrgm), h65cn), h65cn['value'] = h65cn['nodeValue'] = y8kowi, t3vs0l['setAttributeNode'](h65cn);
    }
  }, 'endElement': function () {
    var q7grpe = this['currentElement'];q7grpe['tagName'], this['currentElement'] = q7grpe['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (a1b49$, ok8yij) {
    a1b49$ = this['doc']['createProcessingInstruction'](a1b49$, ok8yij), (this['locator'] && r_n_hc5(this['locator'], a1b49$), r_rw8my(this, a1b49$));
  }, 'ignorableWhitespace': function () {}, 'characters': function (o8iyw) {
    var mw7rg;(o8iyw = r_jyoi8k['apply'](this, arguments)) && (mw7rg = this['cdata'] ? this['doc']['createCDATASection'](o8iyw) : this['doc']['createTextNode'](o8iyw), this['currentElement'] ? this['currentElement']['appendChild'](mw7rg) : /^\s*$/['test'](o8iyw) && this['doc']['appendChild'](mw7rg), this['locator'] && r_n_hc5(this['locator'], mw7rg));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (c6hu) {
    (this['locator'] = c6hu) && (c6hu['lineNumber'] = 0x0);
  }, 'comment': function (edpqfg) {
    edpqfg = r_jyoi8k['apply'](this, arguments);var zlvt3s = this['doc']['createComment'](edpqfg);this['locator'] && r_n_hc5(this['locator'], zlvt3s), r_rw8my(this, zlvt3s);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (aub1_h, qndcfp, prq7eg) {
    var fdpcqn = this['doc']['implementation'];fdpcqn && fdpcqn['createDocumentType'] && (fdpcqn = fdpcqn['createDocumentType'](aub1_h, qndcfp, prq7eg), this['locator'] && r_n_hc5(this['locator'], fdpcqn), r_rw8my(this, fdpcqn));
  }, 'warning': function (cfd6n) {
    console['warn']('[xmldom warning]\t' + cfd6n, r_yoj8xi(this['locator']));
  }, 'error': function (wrmy8) {
    console['error']('[xmldom error]\t' + wrmy8, r_yoj8xi(this['locator']));
  }, 'fatalError': function (q7rmeg) {
    throw console['error']('[xmldom fatalError]\t' + q7rmeg, r_yoj8xi(this['locator'])), q7rmeg;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kmrwy) {
  r_hn6_['prototype'][kmrwy] = function () {
    return null;
  };
});var r_nepd = require('./rS12r')['XMLReader'],
    r_gfdqpe = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r_kowym;