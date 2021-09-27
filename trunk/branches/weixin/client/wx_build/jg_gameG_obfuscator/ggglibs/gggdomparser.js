var m = wx.$g;
function gx$o8is($k1so) {
  this['options'] = $k1so || { 'locator': {} };
}function ghl0rf(tq5pw_, el4f, c23u) {
  function cl64(o7gk) {
    var h0fl9r = tq5pw_[o7gk];!h0fl9r && tpw_y && (h0fl9r = 0x2 == tq5pw_['length'] ? function (e4c62) {
      tq5pw_(o7gk, e4c62);
    } : tq5pw_), f0dr9h[o7gk] = h0fl9r ? function (v642ce) {
      h0fl9r('[xmldom ' + o7gk + ']\t' + v642ce + gk7y1og(c23u));
    } : function () {};
  }if (!tq5pw_) {
    if (el4f instanceof go18$s) return el4f;tq5pw_ = el4f;
  }var f0dr9h = {},
      tpw_y = tq5pw_ instanceof Function;return c23u = c23u || {}, cl64('warning'), cl64('error'), cl64('fatalError'), f0dr9h;
}function go18$s() {
  this['cdata'] = !0x1;
}function g$io78s(u_w5q3, pt_wq) {
  pt_wq['lineNumber'] = u_w5q3['lineNumber'], pt_wq['columnNumber'] = u_w5q3['columnNumber'];
}function gk7y1og(tgp5) {
  return tgp5 ? '\x0a@' + (tgp5['systemId'] || '') + '#[line:' + tgp5['lineNumber'] + ',col:' + tgp5['columnNumber'] + ']' : void 0x0;
}function gtpkg_(euc42v, ks1y, wu532q) {
  return 'string' == typeof euc42v ? euc42v['substr'](ks1y, wu532q) : euc42v['length'] >= ks1y + wu532q || ks1y ? new java['lang']['String'](euc42v, ks1y, wu532q) + '' : euc42v;
}function gu32qev(osyk, gyt_w) {
  (osyk['currentElement'] || osyk['doc'])['appendChild'](gyt_w);
}gx$o8is['prototype']['parseFromString'] = function (wq_tp, g1ty) {
  var l0fh9r = this['options'],
      $8s1 = new g_tpwq5(),
      vu4e2 = l0fh9r['domBuilder'] || new go18$s(),
      _gt5 = l0fh9r['errorHandler'],
      $78so1 = l0fh9r['locator'],
      l4 = l0fh9r['xmlns'] || {},
      v3que2 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return $78so1 && vu4e2['setDocumentLocator']($78so1), $8s1['errorHandler'] = ghl0rf(_gt5, vu4e2, $78so1), $8s1['domBuilder'] = l0fh9r['domBuilder'] || vu4e2, /\/x?html?$/['test'](g1ty) && (v3que2['nbsp'] = '\u00a0', v3que2['copy'] = '©', l4[''] = 'http://www.w3.org/1999/xhtml'), l4['xml'] = l4['xml'] || 'http://www.w3.org/XML/1998/namespace', wq_tp ? $8s1['parse'](wq_tp, l4, v3que2) : $8s1['errorHandler']['error']('invalid doc source'), vu4e2['doc'];
}, go18$s['prototype'] = { 'startDocument': function () {
    this['doc'] = new gu53v()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (p5_tgw, i8$as, bd0hr, cu32v) {
    var ktpy_ = this['doc'],
        m$ia = ktpy_['createElementNS'](p5_tgw, bd0hr || i8$as),
        ytpk_ = cu32v['length'];gu32qev(this, m$ia), this['currentElement'] = m$ia, this['locator'] && g$io78s(this['locator'], m$ia);for (var u4vec2 = 0x0; u4vec2 < ytpk_; u4vec2++) {
      var p5_tgw = cu32v['getURI'](u4vec2),
          m$a8i = cu32v['getValue'](u4vec2),
          bd0hr = cu32v['getQName'](u4vec2),
          wpgt5 = ktpy_['createAttributeNS'](p5_tgw, bd0hr);this['locator'] && g$io78s(cu32v['getLocator'](u4vec2), wpgt5), wpgt5['value'] = wpgt5['nodeValue'] = m$a8i, m$ia['setAttributeNode'](wpgt5);
    }
  }, 'endElement': function () {
    var $1so7k = this['currentElement'];$1so7k['tagName'], this['currentElement'] = $1so7k['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jixma8, six$a8) {
    six$a8 = this['doc']['createProcessingInstruction'](jixma8, six$a8), (this['locator'] && g$io78s(this['locator'], six$a8), gu32qev(this, six$a8));
  }, 'ignorableWhitespace': function () {}, 'characters': function (dh9f0) {
    var s8;(dh9f0 = gtpkg_['apply'](this, arguments)) && (s8 = this['cdata'] ? this['doc']['createCDATASection'](dh9f0) : this['doc']['createTextNode'](dh9f0), this['currentElement'] ? this['currentElement']['appendChild'](s8) : /^\s*$/['test'](dh9f0) && this['doc']['appendChild'](s8), this['locator'] && g$io78s(this['locator'], s8));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (u_3q5w) {
    (this['locator'] = u_3q5w) && (u_3q5w['lineNumber'] = 0x0);
  }, 'comment': function (f64ce) {
    f64ce = gtpkg_['apply'](this, arguments);var fc4el = this['doc']['createComment'](f64ce);this['locator'] && g$io78s(this['locator'], fc4el), gu32qev(this, fc4el);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (clf64e, hdrf90, yk7pg) {
    var ktp_yg = this['doc']['implementation'];ktp_yg && ktp_yg['createDocumentType'] && (yk7pg = ktp_yg['createDocumentType'](clf64e, hdrf90, yk7pg), this['locator'] && g$io78s(this['locator'], yk7pg), gu32qev(this, yk7pg));
  }, 'warning': function (bh9r0) {
    console['warn']('[xmldom warning]\t' + bh9r0, gk7y1og(this['locator']));
  }, 'error': function (br9hd) {
    console['error']('[xmldom error]\t' + br9hd, gk7y1og(this['locator']));
  }, 'fatalError': function (gwypt) {
    throw console['error']('[xmldom fatalError]\t' + gwypt, gk7y1og(this['locator'])), gwypt;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (s1$7o) {
  go18$s['prototype'][s1$7o] = function () {
    return null;
  };
});var g_tpwq5 = require('./gggsax')['XMLReader'],
    gu53v = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gx$o8is;