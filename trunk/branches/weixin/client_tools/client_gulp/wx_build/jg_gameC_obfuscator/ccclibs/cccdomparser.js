var p = wx.$h;
function a_p4fa3(_h0gxv) {
  this['options'] = _h0gxv || { 'locator': {} };
}function a_fjt13(_02x, nwpar2, xg_vn2) {
  function $kh8(dcs1t) {
    var r2nxw = _02x[dcs1t];!r2nxw && awpnr && (r2nxw = 0x2 == _02x['length'] ? function (rwp47a) {
      _02x(dcs1t, rwp47a);
    } : _02x), ybe$io[dcs1t] = r2nxw && function (eib$6) {
      r2nxw('[xmldom ' + dcs1t + ']\t' + eib$6 + a_n_gv(xg_vn2));
    } || function () {};
  }if (!_02x) {
    if (nwpar2 instanceof a__hg80v) return nwpar2;_02x = nwpar2;
  }var ybe$io = {},
      awpnr = _02x instanceof Function;return xg_vn2 = xg_vn2 || {}, $kh8('warning'), $kh8('error'), $kh8('fatalError'), ybe$io;
}function a__hg80v() {
  this['cdata'] = !0x1;
}function a_vxn(p34fa7, o$bei) {
  o$bei['lineNumber'] = p34fa7['lineNumber'], o$bei['columnNumber'] = p34fa7['columnNumber'];
}function a_n_gv(g0hx_) {
  return g0hx_ ? '\x0a@' + (g0hx_['systemId'] || '') + '#[line:' + g0hx_['lineNumber'] + ',col:' + g0hx_['columnNumber'] + ']' : void 0x0;
}function a__0gxhv(ap4nw, $keyi, iyo$b) {
  return 'string' == typeof ap4nw ? ap4nw['substr']($keyi, iyo$b) : ap4nw['length'] >= $keyi + iyo$b || $keyi ? new java['lang']['String'](ap4nw, $keyi, iyo$b) + '' : ap4nw;
}function a_$ybeio(o9eyib, _80hgk) {
  o9eyib['currentElement'] ? o9eyib['currentElement']['appendChild'](_80hgk) : o9eyib['doc']['appendChild'](_80hgk);
}a_p4fa3['prototype']['parseFromString'] = function (sftj, dm5lsc) {
  var gv20_ = this['options'],
      dcms15 = new a_a2nprw(),
      lmsd5c = gv20_['domBuilder'] || new a__hg80v(),
      dslcm5 = gv20_['errorHandler'],
      t15sd = gv20_['locator'],
      r47 = gv20_['xmlns'] || {},
      byoe9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return t15sd && lmsd5c['setDocumentLocator'](t15sd), dcms15['errorHandler'] = a_fjt13(dslcm5, lmsd5c, t15sd), dcms15['domBuilder'] = gv20_['domBuilder'] || lmsd5c, /\/x?html?$/['test'](dm5lsc) && (byoe9['nbsp'] = '\u00a0', byoe9['copy'] = '©', r47[''] = 'http://www.w3.org/1999/xhtml'), r47['xml'] = r47['xml'] || 'http://www.w3.org/XML/1998/namespace', sftj ? dcms15['parse'](sftj, r47, byoe9) : dcms15['errorHandler']['error']('invalid doc source'), lmsd5c['doc'];
}, a__hg80v['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_dc1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (iyeb9o, rxn2v_, y6i$eb, nv2rxw) {
    var _vn = this['doc'],
        nxg2 = _vn['createElementNS'](iyeb9o, y6i$eb || rxn2v_),
        arpn = nv2rxw['length'];a_$ybeio(this, nxg2), this['currentElement'] = nxg2, this['locator'] && a_vxn(this['locator'], nxg2);for (var yieb = 0x0; arpn > yieb; yieb++) {
      var iyeb9o = nv2rxw['getURI'](yieb),
          vx2nw = nv2rxw['getValue'](yieb),
          y6i$eb = nv2rxw['getQName'](yieb),
          c5ms1d = _vn['createAttributeNS'](iyeb9o, y6i$eb);this['locator'] && a_vxn(nv2rxw['getLocator'](yieb), c5ms1d), c5ms1d['value'] = c5ms1d['nodeValue'] = vx2nw, nxg2['setAttributeNode'](c5ms1d);
    }
  }, 'endElement': function () {
    {
      var fj3ts1 = this['currentElement'];fj3ts1['tagName'];
    }this['currentElement'] = fj3ts1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (r2pnx, $h680k) {
    var yi$e6k = this['doc']['createProcessingInstruction'](r2pnx, $h680k);this['locator'] && a_vxn(this['locator'], yi$e6k), a_$ybeio(this, yi$e6k);
  }, 'ignorableWhitespace': function () {}, 'characters': function (rvw2xn) {
    if (rvw2xn = a__0gxhv['apply'](this, arguments)) {
      if (this['cdata']) var xnwrv2 = this['doc']['createCDATASection'](rvw2xn);else var xnwrv2 = this['doc']['createTextNode'](rvw2xn);this['currentElement'] ? this['currentElement']['appendChild'](xnwrv2) : /^\s*$/['test'](rvw2xn) && this['doc']['appendChild'](xnwrv2), this['locator'] && a_vxn(this['locator'], xnwrv2);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tsd1) {
    (this['locator'] = tsd1) && (tsd1['lineNumber'] = 0x0);
  }, 'comment': function (h_k8) {
    h_k8 = a__0gxhv['apply'](this, arguments);var wp2xr = this['doc']['createComment'](h_k8);this['locator'] && a_vxn(this['locator'], wp2xr), a_$ybeio(this, wp2xr);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (c5lms, e6i$yk, oey9) {
    var nwpr2x = this['doc']['implementation'];if (nwpr2x && nwpr2x['createDocumentType']) {
      var sjf3t = nwpr2x['createDocumentType'](c5lms, e6i$yk, oey9);this['locator'] && a_vxn(this['locator'], sjf3t), a_$ybeio(this, sjf3t);
    }
  }, 'warning': function (td1c) {
    console['warn']('[xmldom warning]\t' + td1c, a_n_gv(this['locator']));
  }, 'error': function (v8_gh) {
    console['error']('[xmldom error]\t' + v8_gh, a_n_gv(this['locator']));
  }, 'fatalError': function (j5s) {
    throw console['error']('[xmldom fatalError]\t' + j5s, a_n_gv(this['locator'])), j5s;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zqb9o) {
  a__hg80v['prototype'][zqb9o] = function () {
    return null;
  };
});var a_a2nprw = require('./cccsax')['XMLReader'],
    a_dc1 = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_p4fa3;