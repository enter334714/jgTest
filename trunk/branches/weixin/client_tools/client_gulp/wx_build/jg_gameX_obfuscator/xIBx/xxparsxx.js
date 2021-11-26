var u = wx.$x;
function xqh_(ek) {
  this['options'] = ek || { 'locator': {} };
}function xi4sx(t2z, ot562, njvf) {
  function isxozm(sxzi) {
    var t6z3 = t2z[sxzi];!t6z3 && xmszo5 && (t6z3 = 0x2 == t2z['length'] ? function (e0hpaq) {
      t2z(sxzi, e0hpaq);
    } : t2z), y$l97[sxzi] = t6z3 && function (moisxz) {
      t6z3('[xmldom ' + sxzi + ']\t' + moisxz + xvdcujn(njvf));
    } || function () {};
  }if (!t2z) {
    if (ot562 instanceof xdungv) return ot562;t2z = ot562;
  }var y$l97 = {},
      xmszo5 = t2z instanceof Function;return njvf = njvf || {}, isxozm('warning'), isxozm('error'), isxozm('fatalError'), y$l97;
}function xdungv() {
  this['cdata'] = !0x1;
}function xqha0ep(smxio, z2mo6) {
  z2mo6['lineNumber'] = smxio['lineNumber'], z2mo6['columnNumber'] = smxio['columnNumber'];
}function xvdcujn(cfju9) {
  return cfju9 ? '\x0a@' + (cfju9['systemId'] || '') + '#[line:' + cfju9['lineNumber'] + ',col:' + cfju9['columnNumber'] + ']' : void 0x0;
}function xtwk(vndcju, sm5ox, mso) {
  return 'string' == typeof vndcju ? vndcju['substr'](sm5ox, mso) : vndcju['length'] >= sm5ox + mso || sm5ox ? new java['lang']['String'](vndcju, sm5ox, mso) + '' : vndcju;
}function xahq(w0hebk, zxsm) {
  w0hebk['currentElement'] ? w0hebk['currentElement']['appendChild'](zxsm) : w0hebk['doc']['appendChild'](zxsm);
}xqh_['prototype']['parseFromString'] = function (fy79l8, bk013) {
  var w361t2 = this['options'],
      gnd = new xncvfju(),
      d4gsix = w361t2['domBuilder'] || new xdungv(),
      t6351 = w361t2['errorHandler'],
      vngujd = w361t2['locator'],
      fvunjc = w361t2['xmlns'] || {},
      jflc7 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return vngujd && d4gsix['setDocumentLocator'](vngujd), gnd['errorHandler'] = xi4sx(t6351, d4gsix, vngujd), gnd['domBuilder'] = w361t2['domBuilder'] || d4gsix, /\/x?html?$/['test'](bk013) && (jflc7['nbsp'] = '\u00a0', jflc7['copy'] = '©', fvunjc[''] = 'http://www.w3.org/1999/xhtml'), fvunjc['xml'] = fvunjc['xml'] || 'http://www.w3.org/XML/1998/namespace', fy79l8 ? gnd['parse'](fy79l8, fvunjc, jflc7) : gnd['errorHandler']['error']('invalid doc source'), d4gsix['doc'];
}, xdungv['prototype'] = { 'startDocument': function () {
    this['doc'] = new xxdi4()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (haeb0p, t1b3w, dgui4, tb3k) {
    var w1t36k = this['doc'],
        bwe0 = w1t36k['createElementNS'](haeb0p, dgui4 || t1b3w),
        unjvgd = tb3k['length'];xahq(this, bwe0), this['currentElement'] = bwe0, this['locator'] && xqha0ep(this['locator'], bwe0);for (var d4iu = 0x0; unjvgd > d4iu; d4iu++) {
      var haeb0p = tb3k['getURI'](d4iu),
          mzx5 = tb3k['getValue'](d4iu),
          dgui4 = tb3k['getQName'](d4iu),
          gnujvd = w1t36k['createAttributeNS'](haeb0p, dgui4);this['locator'] && xqha0ep(tb3k['getLocator'](d4iu), gnujvd), gnujvd['value'] = gnujvd['nodeValue'] = mzx5, bwe0['setAttributeNode'](gnujvd);
    }
  }, 'endElement': function () {
    {
      var y89f7l = this['currentElement'];y89f7l['tagName'];
    }this['currentElement'] = y89f7l['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (guvdn4, m2so5z) {
    var oz52t6 = this['doc']['createProcessingInstruction'](guvdn4, m2so5z);this['locator'] && xqha0ep(this['locator'], oz52t6), xahq(this, oz52t6);
  }, 'ignorableWhitespace': function () {}, 'characters': function (f8l79y) {
    if (f8l79y = xtwk['apply'](this, arguments)) {
      if (this['cdata']) var o2z5s = this['doc']['createCDATASection'](f8l79y);else var o2z5s = this['doc']['createTextNode'](f8l79y);this['currentElement'] ? this['currentElement']['appendChild'](o2z5s) : /^\s*$/['test'](f8l79y) && this['doc']['appendChild'](o2z5s), this['locator'] && xqha0ep(this['locator'], o2z5s);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (z526t3) {
    (this['locator'] = z526t3) && (z526t3['lineNumber'] = 0x0);
  }, 'comment': function (s4gmxi) {
    s4gmxi = xtwk['apply'](this, arguments);var dgvix4 = this['doc']['createComment'](s4gmxi);this['locator'] && xqha0ep(this['locator'], dgvix4), xahq(this, dgvix4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (u4vgn, w0ekbh, t1k3w6) {
    var vcnfj = this['doc']['implementation'];if (vcnfj && vcnfj['createDocumentType']) {
      var _qeha = vcnfj['createDocumentType'](u4vgn, w0ekbh, t1k3w6);this['locator'] && xqha0ep(this['locator'], _qeha), xahq(this, _qeha);
    }
  }, 'warning': function (f9l7c) {
    console['warn']('[xmldom warning]\t' + f9l7c, xvdcujn(this['locator']));
  }, 'error': function (ly897$) {
    console['error']('[xmldom error]\t' + ly897$, xvdcujn(this['locator']));
  }, 'fatalError': function (eaqp0) {
    throw console['error']('[xmldom fatalError]\t' + eaqp0, xvdcujn(this['locator'])), eaqp0;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (peah0) {
  xdungv['prototype'][peah0] = function () {
    return null;
  };
});var xncvfju = require('./xxqxx')['XMLReader'],
    xxdi4 = exports['DOMImplementation'] = require('./xxDOxx')['DOMImplementation'];exports['XMLSerializer'] = require('./xxDOxx')['XMLSerializer'], exports['DOMParser'] = xqh_;