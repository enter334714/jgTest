var u = wx.$x;
function xbk3wt1(eh0ab) {
  this['options'] = eh0ab || { 'locator': {} };
}function xgjvud(is4mgx, ar_qh, q0aeh) {
  function hbkew0(j7fcl9) {
    var b3w0 = is4mgx[j7fcl9];!b3w0 && nujcv && (b3w0 = 0x2 == is4mgx['length'] ? function (vdn) {
      is4mgx(j7fcl9, vdn);
    } : is4mgx), dui4[j7fcl9] = b3w0 && function (x4gsdi) {
      b3w0('[xmldom ' + j7fcl9 + ']\t' + x4gsdi + xwb01ke(q0aeh));
    } || function () {};
  }if (!is4mgx) {
    if (ar_qh instanceof xunvgdj) return ar_qh;is4mgx = ar_qh;
  }var dui4 = {},
      nujcv = is4mgx instanceof Function;return q0aeh = q0aeh || {}, hbkew0('warning'), hbkew0('error'), hbkew0('fatalError'), dui4;
}function xunvgdj() {
  this['cdata'] = !0x1;
}function xpe0bah(iu4dg, moisz) {
  moisz['lineNumber'] = iu4dg['lineNumber'], moisz['columnNumber'] = iu4dg['columnNumber'];
}function xwb01ke(sxidg) {
  return sxidg ? '\x0a@' + (sxidg['systemId'] || '') + '#[line:' + sxidg['lineNumber'] + ',col:' + sxidg['columnNumber'] + ']' : void 0x0;
}function xxozi(abh0pe, wb10ek, m2o65z) {
  return 'string' == typeof abh0pe ? abh0pe['substr'](wb10ek, m2o65z) : abh0pe['length'] >= wb10ek + m2o65z || wb10ek ? new java['lang']['String'](abh0pe, wb10ek, m2o65z) + '' : abh0pe;
}function xhe0wkb(cjfln9, vjncud) {
  cjfln9['currentElement'] ? cjfln9['currentElement']['appendChild'](vjncud) : cjfln9['doc']['appendChild'](vjncud);
}xbk3wt1['prototype']['parseFromString'] = function (l8, dg4) {
  var mos4i = this['options'],
      xgdi4v = new xzm5xs(),
      eap_ = mos4i['domBuilder'] || new xunvgdj(),
      w3tbk1 = mos4i['errorHandler'],
      ke0b1 = mos4i['locator'],
      rap_q = mos4i['xmlns'] || {},
      mois4x = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ke0b1 && eap_['setDocumentLocator'](ke0b1), xgdi4v['errorHandler'] = xgjvud(w3tbk1, eap_, ke0b1), xgdi4v['domBuilder'] = mos4i['domBuilder'] || eap_, /\/x?html?$/['test'](dg4) && (mois4x['nbsp'] = '\u00a0', mois4x['copy'] = '©', rap_q[''] = 'http://www.w3.org/1999/xhtml'), rap_q['xml'] = rap_q['xml'] || 'http://www.w3.org/XML/1998/namespace', l8 ? xgdi4v['parse'](l8, rap_q, mois4x) : xgdi4v['errorHandler']['error']('invalid doc source'), eap_['doc'];
}, xunvgdj['prototype'] = { 'startDocument': function () {
    this['doc'] = new xmo5x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (epbhk0, pekh0b, k0wbe1, gxids4) {
    var smxozi = this['doc'],
        w312t6 = smxozi['createElementNS'](epbhk0, k0wbe1 || pekh0b),
        dnjc = gxids4['length'];xhe0wkb(this, w312t6), this['currentElement'] = w312t6, this['locator'] && xpe0bah(this['locator'], w312t6);for (var z2563t = 0x0; dnjc > z2563t; z2563t++) {
      var epbhk0 = gxids4['getURI'](z2563t),
          aqphe_ = gxids4['getValue'](z2563t),
          k0wbe1 = gxids4['getQName'](z2563t),
          keb1 = smxozi['createAttributeNS'](epbhk0, k0wbe1);this['locator'] && xpe0bah(gxids4['getLocator'](z2563t), keb1), keb1['value'] = keb1['nodeValue'] = aqphe_, w312t6['setAttributeNode'](keb1);
    }
  }, 'endElement': function () {
    {
      var u9cjfn = this['currentElement'];u9cjfn['tagName'];
    }this['currentElement'] = u9cjfn['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (yl7f8, hqap_r) {
    var giv4xd = this['doc']['createProcessingInstruction'](yl7f8, hqap_r);this['locator'] && xpe0bah(this['locator'], giv4xd), xhe0wkb(this, giv4xd);
  }, 'ignorableWhitespace': function () {}, 'characters': function (jcun9) {
    if (jcun9 = xxozi['apply'](this, arguments)) {
      if (this['cdata']) var xdv = this['doc']['createCDATASection'](jcun9);else var xdv = this['doc']['createTextNode'](jcun9);this['currentElement'] ? this['currentElement']['appendChild'](xdv) : /^\s*$/['test'](jcun9) && this['doc']['appendChild'](xdv), this['locator'] && xpe0bah(this['locator'], xdv);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (om5z62) {
    (this['locator'] = om5z62) && (om5z62['lineNumber'] = 0x0);
  }, 'comment': function (om265z) {
    om265z = xxozi['apply'](this, arguments);var cjuvdn = this['doc']['createComment'](om265z);this['locator'] && xpe0bah(this['locator'], cjuvdn), xhe0wkb(this, cjuvdn);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (e0ab, x5ozsm, c9njf) {
    var j9fnuc = this['doc']['implementation'];if (j9fnuc && j9fnuc['createDocumentType']) {
      var fy897 = j9fnuc['createDocumentType'](e0ab, x5ozsm, c9njf);this['locator'] && xpe0bah(this['locator'], fy897), xhe0wkb(this, fy897);
    }
  }, 'warning': function (e01bk) {
    console['warn']('[xmldom warning]\t' + e01bk, xwb01ke(this['locator']));
  }, 'error': function (gixds) {
    console['error']('[xmldom error]\t' + gixds, xwb01ke(this['locator']));
  }, 'fatalError': function (khbe0) {
    throw console['error']('[xmldom fatalError]\t' + khbe0, xwb01ke(this['locator'])), khbe0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (f9l8) {
  xunvgdj['prototype'][f9l8] = function () {
    return null;
  };
});var xzm5xs = require('./xxqxx')['XMLReader'],
    xmo5x = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xbk3wt1;