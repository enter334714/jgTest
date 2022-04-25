var D = wx.$b;
function bd6o9s8(njuy0i) {
  this['options'] = njuy0i || { 'locator': {} };
}function bzymitu(vwcph, iyumzt, xkqo7l) {
  function s8d9r(d6r98s) {
    var yzc = vwcph[d6r98s];!yzc && un04 && (yzc = 0x2 == vwcph['length'] ? function (jf) {
      vwcph(d6r98s, jf);
    } : vwcph), zy0i[d6r98s] = yzc && function (kqgx) {
      yzc('[xmldom ' + d6r98s + ']\t' + kqgx + bklx7o6(xkqo7l));
    } || function () {};
  }if (!vwcph) {
    if (iyumzt instanceof btczmy) return iyumzt;vwcph = iyumzt;
  }var zy0i = {},
      un04 = vwcph instanceof Function;return xkqo7l = xkqo7l || {}, s8d9r('warning'), s8d9r('error'), s8d9r('fatalError'), zy0i;
}function btczmy() {
  this['cdata'] = !0x1;
}function bj04u(uin0y, in0j5) {
  in0j5['lineNumber'] = uin0y['lineNumber'], in0j5['columnNumber'] = uin0y['columnNumber'];
}function bklx7o6(wvtpc1) {
  return wvtpc1 ? '\x0a@' + (wvtpc1['systemId'] || '') + '#[line:' + wvtpc1['lineNumber'] + ',col:' + wvtpc1['columnNumber'] + ']' : void 0x0;
}function b$j54n(o8d6, rs2d89, zny) {
  return 'string' == typeof o8d6 ? o8d6['substr'](rs2d89, zny) : o8d6['length'] >= rs2d89 + zny || rs2d89 ? new java['lang']['String'](o8d6, rs2d89, zny) + '' : o8d6;
}function bf5e4(y1ztc, lso8) {
  y1ztc['currentElement'] ? y1ztc['currentElement']['appendChild'](lso8) : y1ztc['doc']['appendChild'](lso8);
}bd6o9s8['prototype']['parseFromString'] = function (zutm, _rh2p) {
  var h1p_v = this['options'],
      sd896r = new bls86od(),
      cwvh1p = h1p_v['domBuilder'] || new btczmy(),
      _hvp2w = h1p_v['errorHandler'],
      ok8ld = h1p_v['locator'],
      qxklg7 = h1p_v['xmlns'] || {},
      tw1pm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ok8ld && cwvh1p['setDocumentLocator'](ok8ld), sd896r['errorHandler'] = bzymitu(_hvp2w, cwvh1p, ok8ld), sd896r['domBuilder'] = h1p_v['domBuilder'] || cwvh1p, /\/x?html?$/['test'](_rh2p) && (tw1pm['nbsp'] = '\u00a0', tw1pm['copy'] = '©', qxklg7[''] = 'http://www.w3.org/1999/xhtml'), qxklg7['xml'] = qxklg7['xml'] || 'http://www.w3.org/XML/1998/namespace', zutm ? sd896r['parse'](zutm, qxklg7, tw1pm) : sd896r['errorHandler']['error']('invalid doc source'), cwvh1p['doc'];
}, btczmy['prototype'] = { 'startDocument': function () {
    this['doc'] = new bn4$j05()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ymtuzi, ij05, kqo, ctwmz) {
    var j0inu = this['doc'],
        d6o89s = j0inu['createElementNS'](ymtuzi, kqo || ij05),
        uiy0 = ctwmz['length'];bf5e4(this, d6o89s), this['currentElement'] = d6o89s, this['locator'] && bj04u(this['locator'], d6o89s);for (var ls6o8 = 0x0; uiy0 > ls6o8; ls6o8++) {
      var ymtuzi = ctwmz['getURI'](ls6o8),
          pcw1tv = ctwmz['getValue'](ls6o8),
          kqo = ctwmz['getQName'](ls6o8),
          _1pwhv = j0inu['createAttributeNS'](ymtuzi, kqo);this['locator'] && bj04u(ctwmz['getLocator'](ls6o8), _1pwhv), _1pwhv['value'] = _1pwhv['nodeValue'] = pcw1tv, d6o89s['setAttributeNode'](_1pwhv);
    }
  }, 'endElement': function () {
    {
      var l6kdo = this['currentElement'];l6kdo['tagName'];
    }this['currentElement'] = l6kdo['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (y0zmui, o6d8s9) {
    var vp1twc = this['doc']['createProcessingInstruction'](y0zmui, o6d8s9);this['locator'] && bj04u(this['locator'], vp1twc), bf5e4(this, vp1twc);
  }, 'ignorableWhitespace': function () {}, 'characters': function (zun0yi) {
    if (zun0yi = b$j54n['apply'](this, arguments)) {
      if (this['cdata']) var k7gxq = this['doc']['createCDATASection'](zun0yi);else var k7gxq = this['doc']['createTextNode'](zun0yi);this['currentElement'] ? this['currentElement']['appendChild'](k7gxq) : /^\s*$/['test'](zun0yi) && this['doc']['appendChild'](k7gxq), this['locator'] && bj04u(this['locator'], k7gxq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zuyi0m) {
    (this['locator'] = zuyi0m) && (zuyi0m['lineNumber'] = 0x0);
  }, 'comment': function (d6so9) {
    d6so9 = b$j54n['apply'](this, arguments);var kx76o = this['doc']['createComment'](d6so9);this['locator'] && bj04u(this['locator'], kx76o), bf5e4(this, kx76o);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (j$5n4, q7koxl, cp1hvw) {
    var z1mty = this['doc']['implementation'];if (z1mty && z1mty['createDocumentType']) {
      var xo7lqk = z1mty['createDocumentType'](j$5n4, q7koxl, cp1hvw);this['locator'] && bj04u(this['locator'], xo7lqk), bf5e4(this, xo7lqk);
    }
  }, 'warning': function (zc1ytm) {
    console['warn']('[xmldom warning]\t' + zc1ytm, bklx7o6(this['locator']));
  }, 'error': function (nu0i4j) {
    console['error']('[xmldom error]\t' + nu0i4j, bklx7o6(this['locator']));
  }, 'fatalError': function (i0n4u) {
    throw console['error']('[xmldom fatalError]\t' + i0n4u, bklx7o6(this['locator'])), i0n4u;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (gkl7qx) {
  btczmy['prototype'][gkl7qx] = function () {
    return null;
  };
});var bls86od = require('./BBcBB')['XMLReader'],
    bn4$j05 = exports['DOMImplementation'] = require('./BBDOBB')['DOMImplementation'];exports['XMLSerializer'] = require('./BBDOBB')['XMLSerializer'], exports['DOMParser'] = bd6o9s8;