var u = wx.$x;
function xxmsioz(pharq_) {
  this['options'] = pharq_ || { 'locator': {} };
}function x$7l89(aeqp_, b0pek, cfnjl) {
  function eq0ah(zm6o25) {
    var iuv = aeqp_[zm6o25];!iuv && hp0aqe && (iuv = 0x2 == aeqp_['length'] ? function (moxsz5) {
      aeqp_(zm6o25, moxsz5);
    } : aeqp_), xm5so[zm6o25] = iuv && function (_ahrq) {
      iuv('[xmldom ' + zm6o25 + ']\t' + _ahrq + xcj9n(cfnjl));
    } || function () {};
  }if (!aeqp_) {
    if (b0pek instanceof xlf9ncj) return b0pek;aeqp_ = b0pek;
  }var xm5so = {},
      hp0aqe = aeqp_ instanceof Function;return cfnjl = cfnjl || {}, eq0ah('warning'), eq0ah('error'), eq0ah('fatalError'), xm5so;
}function xlf9ncj() {
  this['cdata'] = !0x1;
}function xkt6w31(gd4xs, ebh0pa) {
  ebh0pa['lineNumber'] = gd4xs['lineNumber'], ebh0pa['columnNumber'] = gd4xs['columnNumber'];
}function xcj9n(dnju) {
  return dnju ? '\x0a@' + (dnju['systemId'] || '') + '#[line:' + dnju['lineNumber'] + ',col:' + dnju['columnNumber'] + ']' : void 0x0;
}function xo4sm(mgi4x, dgxv4, h_qap) {
  return 'string' == typeof mgi4x ? mgi4x['substr'](dgxv4, h_qap) : mgi4x['length'] >= dgxv4 + h_qap || dgxv4 ? new java['lang']['String'](mgi4x, dgxv4, h_qap) + '' : mgi4x;
}function xl78cf9(l79cjf, qrpah_) {
  l79cjf['currentElement'] ? l79cjf['currentElement']['appendChild'](qrpah_) : l79cjf['doc']['appendChild'](qrpah_);
}xxmsioz['prototype']['parseFromString'] = function (gdv4u, s5zm2) {
  var omxz = this['options'],
      e0aqh = new xe0pqh(),
      ndv4u = omxz['domBuilder'] || new xlf9ncj(),
      fun9j = omxz['errorHandler'],
      fnvjc = omxz['locator'],
      tb31k = omxz['xmlns'] || {},
      vgudn4 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fnvjc && ndv4u['setDocumentLocator'](fnvjc), e0aqh['errorHandler'] = x$7l89(fun9j, ndv4u, fnvjc), e0aqh['domBuilder'] = omxz['domBuilder'] || ndv4u, /\/x?html?$/['test'](s5zm2) && (vgudn4['nbsp'] = '\u00a0', vgudn4['copy'] = '©', tb31k[''] = 'http://www.w3.org/1999/xhtml'), tb31k['xml'] = tb31k['xml'] || 'http://www.w3.org/XML/1998/namespace', gdv4u ? e0aqh['parse'](gdv4u, tb31k, vgudn4) : e0aqh['errorHandler']['error']('invalid doc source'), ndv4u['doc'];
}, xlf9ncj['prototype'] = { 'startDocument': function () {
    this['doc'] = new xfyl798()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (dvjgnu, aehbp0, vdcnju, msoiz) {
    var oximsz = this['doc'],
        ugd4iv = oximsz['createElementNS'](dvjgnu, vdcnju || aehbp0),
        f98c7l = msoiz['length'];xl78cf9(this, ugd4iv), this['currentElement'] = ugd4iv, this['locator'] && xkt6w31(this['locator'], ugd4iv);for (var k13bw = 0x0; f98c7l > k13bw; k13bw++) {
      var dvjgnu = msoiz['getURI'](k13bw),
          m4gsxi = msoiz['getValue'](k13bw),
          vdcnju = msoiz['getQName'](k13bw),
          wtk31b = oximsz['createAttributeNS'](dvjgnu, vdcnju);this['locator'] && xkt6w31(msoiz['getLocator'](k13bw), wtk31b), wtk31b['value'] = wtk31b['nodeValue'] = m4gsxi, ugd4iv['setAttributeNode'](wtk31b);
    }
  }, 'endElement': function () {
    {
      var gmix = this['currentElement'];gmix['tagName'];
    }this['currentElement'] = gmix['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (nd4v, paq_h) {
    var o2m5zs = this['doc']['createProcessingInstruction'](nd4v, paq_h);this['locator'] && xkt6w31(this['locator'], o2m5zs), xl78cf9(this, o2m5zs);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gu4vdi) {
    if (gu4vdi = xo4sm['apply'](this, arguments)) {
      if (this['cdata']) var jugndv = this['doc']['createCDATASection'](gu4vdi);else var jugndv = this['doc']['createTextNode'](gu4vdi);this['currentElement'] ? this['currentElement']['appendChild'](jugndv) : /^\s*$/['test'](gu4vdi) && this['doc']['appendChild'](jugndv), this['locator'] && xkt6w31(this['locator'], jugndv);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (m5szox) {
    (this['locator'] = m5szox) && (m5szox['lineNumber'] = 0x0);
  }, 'comment': function (gi4) {
    gi4 = xo4sm['apply'](this, arguments);var h0pa = this['doc']['createComment'](gi4);this['locator'] && xkt6w31(this['locator'], h0pa), xl78cf9(this, h0pa);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (t52o6z, mz6o52, z63t) {
    var eb0p = this['doc']['implementation'];if (eb0p && eb0p['createDocumentType']) {
      var lfnc9 = eb0p['createDocumentType'](t52o6z, mz6o52, z63t);this['locator'] && xkt6w31(this['locator'], lfnc9), xl78cf9(this, lfnc9);
    }
  }, 'warning': function (om4) {
    console['warn']('[xmldom warning]\t' + om4, xcj9n(this['locator']));
  }, 'error': function (f9cnl) {
    console['error']('[xmldom error]\t' + f9cnl, xcj9n(this['locator']));
  }, 'fatalError': function (xmsg) {
    throw console['error']('[xmldom fatalError]\t' + xmsg, xcj9n(this['locator'])), xmsg;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (z52t) {
  xlf9ncj['prototype'][z52t] = function () {
    return null;
  };
});var xe0pqh = require('./xxqxx')['XMLReader'],
    xfyl798 = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xxmsioz;