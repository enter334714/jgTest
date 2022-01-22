var B = wx.$z;
function zv4ln6(eztyod) {
  this['options'] = eztyod || { 'locator': {} };
}function zru52w_(_25u, fp6g, saotze) {
  function byoktd(u0_) {
    var _82ur5 = _25u[u0_];!_82ur5 && h6pgf4 && (_82ur5 = 0x2 == _25u['length'] ? function (tdkzy) {
      _25u(u0_, tdkzy);
    } : _25u), mi37n[u0_] = _82ur5 && function (im3n7q) {
      _82ur5('[xmldom ' + u0_ + ']\t' + im3n7q + zu5_w2r(saotze));
    } || function () {};
  }if (!_25u) {
    if (fp6g instanceof zvl7fin) return fp6g;_25u = fp6g;
  }var mi37n = {},
      h6pgf4 = _25u instanceof Function;return saotze = saotze || {}, byoktd('warning'), byoktd('error'), byoktd('fatalError'), mi37n;
}function zvl7fin() {
  this['cdata'] = !0x1;
}function zsezao(f6pg4, wr5u_2) {
  wr5u_2['lineNumber'] = f6pg4['lineNumber'], wr5u_2['columnNumber'] = f6pg4['columnNumber'];
}function zu5_w2r(x9pg1h) {
  return x9pg1h ? '\x0a@' + (x9pg1h['systemId'] || '') + '#[line:' + x9pg1h['lineNumber'] + ',col:' + x9pg1h['columnNumber'] + ']' : void 0x0;
}function zvl7f(ezstax, p9hgx, stzeo) {
  return 'string' == typeof ezstax ? ezstax['substr'](p9hgx, stzeo) : ezstax['length'] >= p9hgx + stzeo || p9hgx ? new java['lang']['String'](ezstax, p9hgx, stzeo) + '' : ezstax;
}function ztdaze(ztsoe, kr8y_) {
  ztsoe['currentElement'] ? ztsoe['currentElement']['appendChild'](kr8y_) : ztsoe['doc']['appendChild'](kr8y_);
}zv4ln6['prototype']['parseFromString'] = function (imn37q, $7qm3i) {
  var dtob = this['options'],
      b25_r8 = new zaes19x(),
      f4vl = dtob['domBuilder'] || new zvl7fin(),
      lvfn64 = dtob['errorHandler'],
      xse1 = dtob['locator'],
      rb5_28 = dtob['xmlns'] || {},
      zaetdo = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xse1 && f4vl['setDocumentLocator'](xse1), b25_r8['errorHandler'] = zru52w_(lvfn64, f4vl, xse1), b25_r8['domBuilder'] = dtob['domBuilder'] || f4vl, /\/x?html?$/['test']($7qm3i) && (zaetdo['nbsp'] = '\u00a0', zaetdo['copy'] = '©', rb5_28[''] = 'http://www.w3.org/1999/xhtml'), rb5_28['xml'] = rb5_28['xml'] || 'http://www.w3.org/XML/1998/namespace', imn37q ? b25_r8['parse'](imn37q, rb5_28, zaetdo) : b25_r8['errorHandler']['error']('invalid doc source'), f4vl['doc'];
}, zvl7fin['prototype'] = { 'startDocument': function () {
    this['doc'] = new zp1hs9x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (seazxt, ktoz, ah1x9, dyktz) {
    var dtykz = this['doc'],
        gxhp9 = dtykz['createElementNS'](seazxt, ah1x9 || ktoz),
        q$ji3m = dyktz['length'];ztdaze(this, gxhp9), this['currentElement'] = gxhp9, this['locator'] && zsezao(this['locator'], gxhp9);for (var iqmn73 = 0x0; q$ji3m > iqmn73; iqmn73++) {
      var seazxt = dyktz['getURI'](iqmn73),
          m7l3ni = dyktz['getValue'](iqmn73),
          ah1x9 = dyktz['getQName'](iqmn73),
          sotzea = dtykz['createAttributeNS'](seazxt, ah1x9);this['locator'] && zsezao(dyktz['getLocator'](iqmn73), sotzea), sotzea['value'] = sotzea['nodeValue'] = m7l3ni, gxhp9['setAttributeNode'](sotzea);
    }
  }, 'endElement': function () {
    {
      var aztse = this['currentElement'];aztse['tagName'];
    }this['currentElement'] = aztse['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (psx91h, u_w50) {
    var odeyz = this['doc']['createProcessingInstruction'](psx91h, u_w50);this['locator'] && zsezao(this['locator'], odeyz), ztdaze(this, odeyz);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_u2rw5) {
    if (_u2rw5 = zvl7f['apply'](this, arguments)) {
      if (this['cdata']) var _r8ybk = this['doc']['createCDATASection'](_u2rw5);else var _r8ybk = this['doc']['createTextNode'](_u2rw5);this['currentElement'] ? this['currentElement']['appendChild'](_r8ybk) : /^\s*$/['test'](_u2rw5) && this['doc']['appendChild'](_r8ybk), this['locator'] && zsezao(this['locator'], _r8ybk);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (zxsaet) {
    (this['locator'] = zxsaet) && (zxsaet['lineNumber'] = 0x0);
  }, 'comment': function (_5rb) {
    _5rb = zvl7f['apply'](this, arguments);var g9px1 = this['doc']['createComment'](_5rb);this['locator'] && zsezao(this['locator'], g9px1), ztdaze(this, g9px1);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (g4p9, ilvfn7, sxtea) {
    var u02w_ = this['doc']['implementation'];if (u02w_ && u02w_['createDocumentType']) {
      var miln7v = u02w_['createDocumentType'](g4p9, ilvfn7, sxtea);this['locator'] && zsezao(this['locator'], miln7v), ztdaze(this, miln7v);
    }
  }, 'warning': function (kotyz) {
    console['warn']('[xmldom warning]\t' + kotyz, zu5_w2r(this['locator']));
  }, 'error': function (in3lm) {
    console['error']('[xmldom error]\t' + in3lm, zu5_w2r(this['locator']));
  }, 'fatalError': function (o8kydb) {
    throw console['error']('[xmldom fatalError]\t' + o8kydb, zu5_w2r(this['locator'])), o8kydb;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kotbd) {
  zvl7fin['prototype'][kotbd] = function () {
    return null;
  };
});var zaes19x = require('./zzczz')['XMLReader'],
    zp1hs9x = exports['DOMImplementation'] = require('./zzDOzz')['DOMImplementation'];exports['XMLSerializer'] = require('./zzDOzz')['XMLSerializer'], exports['DOMParser'] = zv4ln6;