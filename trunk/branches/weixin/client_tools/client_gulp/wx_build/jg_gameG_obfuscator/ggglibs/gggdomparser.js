var m = wx.$g;
function gw7qv(xhkwa) {
  this['options'] = xhkwa || { 'locator': {} };
}function gvwye1(w1ye, _0pb5, b5xia) {
  function ipaxb5(vw7ye) {
    var bp05i = w1ye[vw7ye];!bp05i && ywe1vk && (bp05i = 0x2 == w1ye['length'] ? function (to3_f) {
      w1ye(vw7ye, to3_f);
    } : w1ye), qg7vy[vw7ye] = bp05i && function (c7vg) {
      bp05i('[xmldom ' + vw7ye + ']\t' + c7vg + gz6j2r$(b5xia));
    } || function () {};
  }if (!w1ye) {
    if (_0pb5 instanceof gxhy1) return _0pb5;w1ye = _0pb5;
  }var qg7vy = {},
      ywe1vk = w1ye instanceof Function;return b5xia = b5xia || {}, ipaxb5('warning'), ipaxb5('error'), ipaxb5('fatalError'), qg7vy;
}function gxhy1() {
  this['cdata'] = !0x1;
}function gq8clsg(bpt, vekyw7) {
  vekyw7['lineNumber'] = bpt['lineNumber'], vekyw7['columnNumber'] = bpt['columnNumber'];
}function gz6j2r$(qwyve) {
  return qwyve ? '\x0a@' + (qwyve['systemId'] || '') + '#[line:' + qwyve['lineNumber'] + ',col:' + qwyve['columnNumber'] + ']' : void 0x0;
}function gwv7yeq(vcg7qe, p0fb5, xkiah1) {
  return 'string' == typeof vcg7qe ? vcg7qe['substr'](p0fb5, xkiah1) : vcg7qe['length'] >= p0fb5 + xkiah1 || p0fb5 ? new java['lang']['String'](vcg7qe, p0fb5, xkiah1) + '' : vcg7qe;
}function gve1ykw(p_i0, dz3o62) {
  p_i0['currentElement'] ? p_i0['currentElement']['appendChild'](dz3o62) : p_i0['doc']['appendChild'](dz3o62);
}gw7qv['prototype']['parseFromString'] = function (z263d, _50bip) {
  var t_o3 = this['options'],
      vygqe7 = new gdzor(),
      kye1wh = t_o3['domBuilder'] || new gxhy1(),
      $u2r = t_o3['errorHandler'],
      o326z = t_o3['locator'],
      egcq7 = t_o3['xmlns'] || {},
      qcs87 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return o326z && kye1wh['setDocumentLocator'](o326z), vygqe7['errorHandler'] = gvwye1($u2r, kye1wh, o326z), vygqe7['domBuilder'] = t_o3['domBuilder'] || kye1wh, /\/x?html?$/['test'](_50bip) && (qcs87['nbsp'] = '\u00a0', qcs87['copy'] = '©', egcq7[''] = 'http://www.w3.org/1999/xhtml'), egcq7['xml'] = egcq7['xml'] || 'http://www.w3.org/XML/1998/namespace', z263d ? vygqe7['parse'](z263d, egcq7, qcs87) : vygqe7['errorHandler']['error']('invalid doc source'), kye1wh['doc'];
}, gxhy1['prototype'] = { 'startDocument': function () {
    this['doc'] = new gbpft0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i5_0bp, v1wyek, tf_403, e7ykvw) {
    var u26r$ = this['doc'],
        p4f0t_ = u26r$['createElementNS'](i5_0bp, tf_403 || v1wyek),
        vscg = e7ykvw['length'];gve1ykw(this, p4f0t_), this['currentElement'] = p4f0t_, this['locator'] && gq8clsg(this['locator'], p4f0t_);for (var c7egq = 0x0; vscg > c7egq; c7egq++) {
      var i5_0bp = e7ykvw['getURI'](c7egq),
          ye7vwq = e7ykvw['getValue'](c7egq),
          tf_403 = e7ykvw['getQName'](c7egq),
          q8s7gc = u26r$['createAttributeNS'](i5_0bp, tf_403);this['locator'] && gq8clsg(e7ykvw['getLocator'](c7egq), q8s7gc), q8s7gc['value'] = q8s7gc['nodeValue'] = ye7vwq, p4f0t_['setAttributeNode'](q8s7gc);
    }
  }, 'endElement': function () {
    {
      var w1eyv = this['currentElement'];w1eyv['tagName'];
    }this['currentElement'] = w1eyv['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kxh1wy, murj) {
    var j$r62z = this['doc']['createProcessingInstruction'](kxh1wy, murj);this['locator'] && gq8clsg(this['locator'], j$r62z), gve1ykw(this, j$r62z);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xky1) {
    if (xky1 = gwv7yeq['apply'](this, arguments)) {
      if (this['cdata']) var $j62ur = this['doc']['createCDATASection'](xky1);else var $j62ur = this['doc']['createTextNode'](xky1);this['currentElement'] ? this['currentElement']['appendChild']($j62ur) : /^\s*$/['test'](xky1) && this['doc']['appendChild']($j62ur), this['locator'] && gq8clsg(this['locator'], $j62ur);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (lgcq8s) {
    (this['locator'] = lgcq8s) && (lgcq8s['lineNumber'] = 0x0);
  }, 'comment': function (rz$62j) {
    rz$62j = gwv7yeq['apply'](this, arguments);var qweyv = this['doc']['createComment'](rz$62j);this['locator'] && gq8clsg(this['locator'], qweyv), gve1ykw(this, qweyv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (b0_tfp, scl, p_5f) {
    var r6dj2z = this['doc']['implementation'];if (r6dj2z && r6dj2z['createDocumentType']) {
      var tof43_ = r6dj2z['createDocumentType'](b0_tfp, scl, p_5f);this['locator'] && gq8clsg(this['locator'], tof43_), gve1ykw(this, tof43_);
    }
  }, 'warning': function (gvqy) {
    console['warn']('[xmldom warning]\t' + gvqy, gz6j2r$(this['locator']));
  }, 'error': function (yvekw7) {
    console['error']('[xmldom error]\t' + yvekw7, gz6j2r$(this['locator']));
  }, 'fatalError': function (sqgc78) {
    throw console['error']('[xmldom fatalError]\t' + sqgc78, gz6j2r$(this['locator'])), sqgc78;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (or62) {
  gxhy1['prototype'][or62] = function () {
    return null;
  };
});var gdzor = require('./gggsax')['XMLReader'],
    gbpft0 = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gw7qv;