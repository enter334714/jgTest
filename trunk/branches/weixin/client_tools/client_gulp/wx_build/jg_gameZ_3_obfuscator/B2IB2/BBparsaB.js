var D = wx.$b;
function byizum(inzy) {
  this['options'] = inzy || { 'locator': {} };
}function bwpv2h(srh, qgk37, d289) {
  function tz1cym(e4$fa5) {
    var yjuni = srh[e4$fa5];!yjuni && zmtw && (yjuni = 0x2 == srh['length'] ? function (p_wh) {
      srh(e4$fa5, p_wh);
    } : srh), o8lkd[e4$fa5] = yjuni && function (wtmp1) {
      yjuni('[xmldom ' + e4$fa5 + ']\t' + wtmp1 + bnui0z(d289));
    } || function () {};
  }if (!srh) {
    if (qgk37 instanceof brhp2v_) return qgk37;srh = qgk37;
  }var o8lkd = {},
      zmtw = srh instanceof Function;return d289 = d289 || {}, tz1cym('warning'), tz1cym('error'), tz1cym('fatalError'), o8lkd;
}function brhp2v_() {
  this['cdata'] = !0x1;
}function bj$054n(z0imu, p1wh) {
  p1wh['lineNumber'] = z0imu['lineNumber'], p1wh['columnNumber'] = z0imu['columnNumber'];
}function bnui0z(ld86o) {
  return ld86o ? '\x0a@' + (ld86o['systemId'] || '') + '#[line:' + ld86o['lineNumber'] + ',col:' + ld86o['columnNumber'] + ']' : void 0x0;
}function bd8r92s(xgq73k, vw2_p, uztmc) {
  return 'string' == typeof xgq73k ? xgq73k['substr'](vw2_p, uztmc) : xgq73k['length'] >= vw2_p + uztmc || vw2_p ? new java['lang']['String'](xgq73k, vw2_p, uztmc) + '' : xgq73k;
}function bkxdol6(vw1ph, ztuy) {
  vw1ph['currentElement'] ? vw1ph['currentElement']['appendChild'](ztuy) : vw1ph['doc']['appendChild'](ztuy);
}byizum['prototype']['parseFromString'] = function (i0u4nj, qokl) {
  var wz1ctm = this['options'],
      yuzitm = new bo8dkl(),
      uyn0j = wz1ctm['domBuilder'] || new brhp2v_(),
      yz1m = wz1ctm['errorHandler'],
      rs28d9 = wz1ctm['locator'],
      cyzum = wz1ctm['xmlns'] || {},
      jan54$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rs28d9 && uyn0j['setDocumentLocator'](rs28d9), yuzitm['errorHandler'] = bwpv2h(yz1m, uyn0j, rs28d9), yuzitm['domBuilder'] = wz1ctm['domBuilder'] || uyn0j, /\/x?html?$/['test'](qokl) && (jan54$['nbsp'] = '\u00a0', jan54$['copy'] = '©', cyzum[''] = 'http://www.w3.org/1999/xhtml'), cyzum['xml'] = cyzum['xml'] || 'http://www.w3.org/XML/1998/namespace', i0u4nj ? yuzitm['parse'](i0u4nj, cyzum, jan54$) : yuzitm['errorHandler']['error']('invalid doc source'), uyn0j['doc'];
}, brhp2v_['prototype'] = { 'startDocument': function () {
    this['doc'] = new bwmtc()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rs8d9, muziy0, yiumz, _1wvp) {
    var _vwh2p = this['doc'],
        ui04n = _vwh2p['createElementNS'](rs8d9, yiumz || muziy0),
        cmuz = _1wvp['length'];bkxdol6(this, ui04n), this['currentElement'] = ui04n, this['locator'] && bj$054n(this['locator'], ui04n);for (var c1vph = 0x0; cmuz > c1vph; c1vph++) {
      var rs8d9 = _1wvp['getURI'](c1vph),
          qlx = _1wvp['getValue'](c1vph),
          yiumz = _1wvp['getQName'](c1vph),
          ycz1m = _vwh2p['createAttributeNS'](rs8d9, yiumz);this['locator'] && bj$054n(_1wvp['getLocator'](c1vph), ycz1m), ycz1m['value'] = ycz1m['nodeValue'] = qlx, ui04n['setAttributeNode'](ycz1m);
    }
  }, 'endElement': function () {
    {
      var klo67 = this['currentElement'];klo67['tagName'];
    }this['currentElement'] = klo67['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tiyuz, ztwc1m) {
    var o6ldx = this['doc']['createProcessingInstruction'](tiyuz, ztwc1m);this['locator'] && bj$054n(this['locator'], o6ldx), bkxdol6(this, o6ldx);
  }, 'ignorableWhitespace': function () {}, 'characters': function (qolxk) {
    if (qolxk = bd8r92s['apply'](this, arguments)) {
      if (this['cdata']) var qkxl7 = this['doc']['createCDATASection'](qolxk);else var qkxl7 = this['doc']['createTextNode'](qolxk);this['currentElement'] ? this['currentElement']['appendChild'](qkxl7) : /^\s*$/['test'](qolxk) && this['doc']['appendChild'](qkxl7), this['locator'] && bj$054n(this['locator'], qkxl7);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nij54) {
    (this['locator'] = nij54) && (nij54['lineNumber'] = 0x0);
  }, 'comment': function (myiutz) {
    myiutz = bd8r92s['apply'](this, arguments);var xg7qk3 = this['doc']['createComment'](myiutz);this['locator'] && bj$054n(this['locator'], xg7qk3), bkxdol6(this, xg7qk3);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (w1tcpv, mzu0yi, n4$05) {
    var os6d89 = this['doc']['implementation'];if (os6d89 && os6d89['createDocumentType']) {
      var k8ld6o = os6d89['createDocumentType'](w1tcpv, mzu0yi, n4$05);this['locator'] && bj$054n(this['locator'], k8ld6o), bkxdol6(this, k8ld6o);
    }
  }, 'warning': function (zuitmy) {
    console['warn']('[xmldom warning]\t' + zuitmy, bnui0z(this['locator']));
  }, 'error': function (sdo96) {
    console['error']('[xmldom error]\t' + sdo96, bnui0z(this['locator']));
  }, 'fatalError': function (tcwv1) {
    throw console['error']('[xmldom fatalError]\t' + tcwv1, bnui0z(this['locator'])), tcwv1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (v_ph2) {
  brhp2v_['prototype'][v_ph2] = function () {
    return null;
  };
});var bo8dkl = require('./BBcBB')['XMLReader'],
    bwmtc = exports['DOMImplementation'] = require('./BBDOBB')['DOMImplementation'];exports['XMLSerializer'] = require('./BBDOBB')['XMLSerializer'], exports['DOMParser'] = byizum;