var p = wx.$h;
function a_pnra2w(g_k0) {
  this['options'] = g_k0 || { 'locator': {} };
}function a_xr2v_(apr2wn, pw7ra4, w2ran) {
  function ts5dc1(gvx02) {
    var fctj1s = apr2wn[gvx02];!fctj1s && p743af && (fctj1s = 0x2 == apr2wn['length'] ? function (iey6$k) {
      apr2wn(gvx02, iey6$k);
    } : apr2wn), ctfs[gvx02] = fctj1s && function (q9yb) {
      fctj1s('[xmldom ' + gvx02 + ']\t' + q9yb + a_j3t74f(w2ran));
    } || function () {};
  }if (!apr2wn) {
    if (pw7ra4 instanceof a_ei9yo) return pw7ra4;apr2wn = pw7ra4;
  }var ctfs = {},
      p743af = apr2wn instanceof Function;return w2ran = w2ran || {}, ts5dc1('warning'), ts5dc1('error'), ts5dc1('fatalError'), ctfs;
}function a_ei9yo() {
  this['cdata'] = !0x1;
}function a_sf31t(dms51c, m51cd) {
  m51cd['lineNumber'] = dms51c['lineNumber'], m51cd['columnNumber'] = dms51c['columnNumber'];
}function a_j3t74f(ct5d) {
  return ct5d ? '\x0a@' + (ct5d['systemId'] || '') + '#[line:' + ct5d['lineNumber'] + ',col:' + ct5d['columnNumber'] + ']' : void 0x0;
}function a_rn2(fa7p43, ja3f, i8$6ke) {
  return 'string' == typeof fa7p43 ? fa7p43['substr'](ja3f, i8$6ke) : fa7p43['length'] >= ja3f + i8$6ke || ja3f ? new java['lang']['String'](fa7p43, ja3f, i8$6ke) + '' : fa7p43;
}function a_f1sjt3(vrw2nx, dscml5) {
  vrw2nx['currentElement'] ? vrw2nx['currentElement']['appendChild'](dscml5) : vrw2nx['doc']['appendChild'](dscml5);
}a_pnra2w['prototype']['parseFromString'] = function (a4p37w, bi$6ey) {
  var r74awp = this['options'],
      o9yzib = new a_eb$iy(),
      ob9ye = r74awp['domBuilder'] || new a_ei9yo(),
      n2vr_x = r74awp['errorHandler'],
      y$ik6e = r74awp['locator'],
      a7w4r = r74awp['xmlns'] || {},
      b6ie$y = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return y$ik6e && ob9ye['setDocumentLocator'](y$ik6e), o9yzib['errorHandler'] = a_xr2v_(n2vr_x, ob9ye, y$ik6e), o9yzib['domBuilder'] = r74awp['domBuilder'] || ob9ye, /\/x?html?$/['test'](bi$6ey) && (b6ie$y['nbsp'] = '\u00a0', b6ie$y['copy'] = '©', a7w4r[''] = 'http://www.w3.org/1999/xhtml'), a7w4r['xml'] = a7w4r['xml'] || 'http://www.w3.org/XML/1998/namespace', a4p37w ? o9yzib['parse'](a4p37w, a7w4r, b6ie$y) : o9yzib['errorHandler']['error']('invalid doc source'), ob9ye['doc'];
}, a_ei9yo['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_w2nxrv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_g2xv, bzq9o, o$by, wrxnv) {
    var a3w4p7 = this['doc'],
        dsm5c = a3w4p7['createElementNS'](_g2xv, o$by || bzq9o),
        g_vxn = wrxnv['length'];a_f1sjt3(this, dsm5c), this['currentElement'] = dsm5c, this['locator'] && a_sf31t(this['locator'], dsm5c);for (var anw = 0x0; g_vxn > anw; anw++) {
      var _g2xv = wrxnv['getURI'](anw),
          v_hx0g = wrxnv['getValue'](anw),
          o$by = wrxnv['getQName'](anw),
          pfa3 = a3w4p7['createAttributeNS'](_g2xv, o$by);this['locator'] && a_sf31t(wrxnv['getLocator'](anw), pfa3), pfa3['value'] = pfa3['nodeValue'] = v_hx0g, dsm5c['setAttributeNode'](pfa3);
    }
  }, 'endElement': function () {
    {
      var ra2nw = this['currentElement'];ra2nw['tagName'];
    }this['currentElement'] = ra2nw['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zqo9b, v_x0g2) {
    var k$6eiy = this['doc']['createProcessingInstruction'](zqo9b, v_x0g2);this['locator'] && a_sf31t(this['locator'], k$6eiy), a_f1sjt3(this, k$6eiy);
  }, 'ignorableWhitespace': function () {}, 'characters': function (lsc5d) {
    if (lsc5d = a_rn2['apply'](this, arguments)) {
      if (this['cdata']) var lmcd5 = this['doc']['createCDATASection'](lsc5d);else var lmcd5 = this['doc']['createTextNode'](lsc5d);this['currentElement'] ? this['currentElement']['appendChild'](lmcd5) : /^\s*$/['test'](lsc5d) && this['doc']['appendChild'](lmcd5), this['locator'] && a_sf31t(this['locator'], lmcd5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (z9byqo) {
    (this['locator'] = z9byqo) && (z9byqo['lineNumber'] = 0x0);
  }, 'comment': function (_nxg2) {
    _nxg2 = a_rn2['apply'](this, arguments);var $h608 = this['doc']['createComment'](_nxg2);this['locator'] && a_sf31t(this['locator'], $h608), a_f1sjt3(this, $h608);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (bqz9y, _xhv, hv08g) {
    var rnvxw = this['doc']['implementation'];if (rnvxw && rnvxw['createDocumentType']) {
      var a4w3p = rnvxw['createDocumentType'](bqz9y, _xhv, hv08g);this['locator'] && a_sf31t(this['locator'], a4w3p), a_f1sjt3(this, a4w3p);
    }
  }, 'warning': function (e6ki$) {
    console['warn']('[xmldom warning]\t' + e6ki$, a_j3t74f(this['locator']));
  }, 'error': function (oyb9z) {
    console['error']('[xmldom error]\t' + oyb9z, a_j3t74f(this['locator']));
  }, 'fatalError': function (a743f) {
    throw console['error']('[xmldom fatalError]\t' + a743f, a_j3t74f(this['locator'])), a743f;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (k_g8) {
  a_ei9yo['prototype'][k_g8] = function () {
    return null;
  };
});var a_eb$iy = require('./cccsax')['XMLReader'],
    a_w2nxrv = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_pnra2w;