var c = wx.$o;
function o_gf49xo(la3n6v) {
  this['options'] = la3n6v || { 'locator': {} };
}function o_xhbg4o(_e3y, l6av, f1i2d) {
  function hocbz(ek$yj) {
    var v_n3yu = _e3y[ek$yj];!v_n3yu && qprm5 && (v_n3yu = 0x2 == _e3y['length'] ? function (t5sm7) {
      _e3y(ek$yj, t5sm7);
    } : _e3y), keuy_[ek$yj] = v_n3yu ? function (ozbh8g) {
      v_n3yu('[xmldom ' + ek$yj + ']\t' + ozbh8g + o_i21a(f1i2d));
    } : function () {};
  }if (!_e3y) {
    if (l6av instanceof o_nua3v) return l6av;_e3y = l6av;
  }var keuy_ = {},
      qprm5 = _e3y instanceof Function;return f1i2d = f1i2d || {}, hocbz('warning'), hocbz('error'), hocbz('fatalError'), keuy_;
}function o_nua3v() {
  this['cdata'] = !0x1;
}function o_cm8r5(avlun3, _y0k) {
  _y0k['lineNumber'] = avlun3['lineNumber'], _y0k['columnNumber'] = avlun3['columnNumber'];
}function o_i21a(pc8zm) {
  return pc8zm ? '\x0a@' + (pc8zm['systemId'] || '') + '#[line:' + pc8zm['lineNumber'] + ',col:' + pc8zm['columnNumber'] + ']' : void 0x0;
}function o_hogxb4(nuv3l, mr5tqs, mq5ts7) {
  return 'string' == typeof nuv3l ? nuv3l['substr'](mr5tqs, mq5ts7) : nuv3l['length'] >= mr5tqs + mq5ts7 || mr5tqs ? new java['lang']['String'](nuv3l, mr5tqs, mq5ts7) + '' : nuv3l;
}function o_ye_$(zhbpc, zhc8pb) {
  (zhbpc['currentElement'] || zhbpc['doc'])['appendChild'](zhc8pb);
}o_gf49xo['prototype']['parseFromString'] = function (yun3v_, x49ogf) {
  var u3_yv = this['options'],
      d6l3va = new o_pmc85r(),
      bhg8 = u3_yv['domBuilder'] || new o_nua3v(),
      rp8chz = u3_yv['errorHandler'],
      eku_yn = u3_yv['locator'],
      ptmrc = u3_yv['xmlns'] || {},
      zpmrc8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return eku_yn && bhg8['setDocumentLocator'](eku_yn), d6l3va['errorHandler'] = o_xhbg4o(rp8chz, bhg8, eku_yn), d6l3va['domBuilder'] = u3_yv['domBuilder'] || bhg8, /\/x?html?$/['test'](x49ogf) && (zpmrc8['nbsp'] = '\u00a0', zpmrc8['copy'] = '©', ptmrc[''] = 'http://www.w3.org/1999/xhtml'), ptmrc['xml'] = ptmrc['xml'] || 'http://www.w3.org/XML/1998/namespace', yun3v_ ? d6l3va['parse'](yun3v_, ptmrc, zpmrc8) : d6l3va['errorHandler']['error']('invalid doc source'), bhg8['doc'];
}, o_nua3v['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_ch8pr()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (xhg4o, rstqm, k$ye0_, bgo4hz) {
    var czob8 = this['doc'],
        xwi19f = czob8['createElementNS'](xhg4o, k$ye0_ || rstqm),
        xf9gw4 = bgo4hz['length'];o_ye_$(this, xwi19f), this['currentElement'] = xwi19f, this['locator'] && o_cm8r5(this['locator'], xwi19f);for (var mst5r = 0x0; mst5r < xf9gw4; mst5r++) {
      var xhg4o = bgo4hz['getURI'](mst5r),
          h8obzc = bgo4hz['getValue'](mst5r),
          k$ye0_ = bgo4hz['getQName'](mst5r),
          oh4bx = czob8['createAttributeNS'](xhg4o, k$ye0_);this['locator'] && o_cm8r5(bgo4hz['getLocator'](mst5r), oh4bx), oh4bx['value'] = oh4bx['nodeValue'] = h8obzc, xwi19f['setAttributeNode'](oh4bx);
    }
  }, 'endElement': function () {
    var i19wf2 = this['currentElement'];i19wf2['tagName'], this['currentElement'] = i19wf2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dl63a, rtcm5) {
    rtcm5 = this['doc']['createProcessingInstruction'](dl63a, rtcm5), (this['locator'] && o_cm8r5(this['locator'], rtcm5), o_ye_$(this, rtcm5));
  }, 'ignorableWhitespace': function () {}, 'characters': function (fwi129) {
    var _lvn3u;(fwi129 = o_hogxb4['apply'](this, arguments)) && (_lvn3u = this['cdata'] ? this['doc']['createCDATASection'](fwi129) : this['doc']['createTextNode'](fwi129), this['currentElement'] ? this['currentElement']['appendChild'](_lvn3u) : /^\s*$/['test'](fwi129) && this['doc']['appendChild'](_lvn3u), this['locator'] && o_cm8r5(this['locator'], _lvn3u));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($jy) {
    (this['locator'] = $jy) && ($jy['lineNumber'] = 0x0);
  }, 'comment': function (avld62) {
    avld62 = o_hogxb4['apply'](this, arguments);var yk_0u = this['doc']['createComment'](avld62);this['locator'] && o_cm8r5(this['locator'], yk_0u), o_ye_$(this, yk_0u);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (eky$0j, j$0yek, wi1f9) {
    var v3dal = this['doc']['implementation'];v3dal && v3dal['createDocumentType'] && (wi1f9 = v3dal['createDocumentType'](eky$0j, j$0yek, wi1f9), this['locator'] && o_cm8r5(this['locator'], wi1f9), o_ye_$(this, wi1f9));
  }, 'warning': function (fiw1x) {
    console['warn']('[xmldom warning]\t' + fiw1x, o_i21a(this['locator']));
  }, 'error': function (f1iw92) {
    console['error']('[xmldom error]\t' + f1iw92, o_i21a(this['locator']));
  }, 'fatalError': function (tsq5m7) {
    throw console['error']('[xmldom fatalError]\t' + tsq5m7, o_i21a(this['locator'])), tsq5m7;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (yk0e) {
  o_nua3v['prototype'][yk0e] = function () {
    return null;
  };
});var o_pmc85r = require('./oooSAX')['XMLReader'],
    o_ch8pr = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_gf49xo;