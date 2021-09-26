var _ = wx.y$;
function _dv$wyzx(kijh) {
  this['options'] = kijh || { 'locator': {} };
}function _dtuswv(kmjinl, vwyxu, edgfih) {
  function yxuzw(vxswu) {
    var stxwv = kmjinl[vxswu];!stxwv && pqmoln && (stxwv = 0x2 == kmjinl['length'] ? function (qlmonp) {
      kmjinl(vxswu, qlmonp);
    } : kmjinl), surptq[vxswu] = stxwv ? function (mlkjn) {
      stxwv('[xmldom ' + vxswu + ']\t' + mlkjn + _dkmnopl(edgfih));
    } : function () {};
  }if (!kmjinl) {
    if (vwyxu instanceof _dzx_0y) return vwyxu;kmjinl = vwyxu;
  }var surptq = {},
      pqmoln = kmjinl instanceof Function;return edgfih = edgfih || {}, yxuzw('warning'), yxuzw('error'), yxuzw('fatalError'), surptq;
}function _dzx_0y() {
  this['cdata'] = !0x1;
}function _dtuvxyw(hjgli, vwy$) {
  vwy$['lineNumber'] = hjgli['lineNumber'], vwy$['columnNumber'] = hjgli['columnNumber'];
}function _dkmnopl(z_x$w) {
  return z_x$w ? '\x0a@' + (z_x$w['systemId'] || '') + '#[line:' + z_x$w['lineNumber'] + ',col:' + z_x$w['columnNumber'] + ']' : void 0x0;
}function _dhfgki(acdebf, ywutx, $yz1_) {
  return 'string' == typeof acdebf ? acdebf['substr'](ywutx, $yz1_) : acdebf['length'] >= ywutx + $yz1_ || ywutx ? new java['lang']['String'](acdebf, ywutx, $yz1_) + '' : acdebf;
}function _duzxy(edghc, pqrmno) {
  (edghc['currentElement'] || edghc['doc'])['appendChild'](pqrmno);
}_dv$wyzx['prototype']['parseFromString'] = function (pqusr, uqprt) {
  var bedcg = this['options'],
      wstu = new _dikjhfg(),
      ebfacd = bedcg['domBuilder'] || new _dzx_0y(),
      ijegfh = bedcg['errorHandler'],
      ehfjg = bedcg['locator'],
      pronsq = bedcg['xmlns'] || {},
      mopq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ehfjg && ebfacd['setDocumentLocator'](ehfjg), wstu['errorHandler'] = _dtuswv(ijegfh, ebfacd, ehfjg), wstu['domBuilder'] = bedcg['domBuilder'] || ebfacd, /\/x?html?$/['test'](uqprt) && (mopq['nbsp'] = '\u00a0', mopq['copy'] = '©', pronsq[''] = 'http://www.w3.org/1999/xhtml'), pronsq['xml'] = pronsq['xml'] || 'http://www.w3.org/XML/1998/namespace', pqusr ? wstu['parse'](pqusr, pronsq, mopq) : wstu['errorHandler']['error']('invalid doc source'), ebfacd['doc'];
}, _dzx_0y['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dolmpk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (swrtv, jkilgh, nlmij, psron) {
    var onkmjl = this['doc'],
        prmo = onkmjl['createElementNS'](swrtv, nlmij || jkilgh),
        olmkjn = psron['length'];_duzxy(this, prmo), this['currentElement'] = prmo, this['locator'] && _dtuvxyw(this['locator'], prmo);for (var ihfdg = 0x0; ihfdg < olmkjn; ihfdg++) {
      var swrtv = psron['getURI'](ihfdg),
          efdb = psron['getValue'](ihfdg),
          nlmij = psron['getQName'](ihfdg),
          svrtw = onkmjl['createAttributeNS'](swrtv, nlmij);this['locator'] && _dtuvxyw(psron['getLocator'](ihfdg), svrtw), svrtw['value'] = svrtw['nodeValue'] = efdb, prmo['setAttributeNode'](svrtw);
    }
  }, 'endElement': function () {
    var jgh = this['currentElement'];jgh['tagName'], this['currentElement'] = jgh['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fjige, degcfh) {
    degcfh = this['doc']['createProcessingInstruction'](fjige, degcfh), (this['locator'] && _dtuvxyw(this['locator'], degcfh), _duzxy(this, degcfh));
  }, 'ignorableWhitespace': function () {}, 'characters': function (higfk) {
    var edacf;(higfk = _dhfgki['apply'](this, arguments)) && (edacf = this['cdata'] ? this['doc']['createCDATASection'](higfk) : this['doc']['createTextNode'](higfk), this['currentElement'] ? this['currentElement']['appendChild'](edacf) : /^\s*$/['test'](higfk) && this['doc']['appendChild'](edacf), this['locator'] && _dtuvxyw(this['locator'], edacf));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hfgec) {
    (this['locator'] = hfgec) && (hfgec['lineNumber'] = 0x0);
  }, 'comment': function (ecfadb) {
    ecfadb = _dhfgki['apply'](this, arguments);var pmlonk = this['doc']['createComment'](ecfadb);this['locator'] && _dtuvxyw(this['locator'], pmlonk), _duzxy(this, pmlonk);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (yuwvzx, w_xz$, jmoknl) {
    var _13$ = this['doc']['implementation'];_13$ && _13$['createDocumentType'] && (jmoknl = _13$['createDocumentType'](yuwvzx, w_xz$, jmoknl), this['locator'] && _dtuvxyw(this['locator'], jmoknl), _duzxy(this, jmoknl));
  }, 'warning': function (ghefc) {
    console['warn']('[xmldom warning]\t' + ghefc, _dkmnopl(this['locator']));
  }, 'error': function (rqvuts) {
    console['error']('[xmldom error]\t' + rqvuts, _dkmnopl(this['locator']));
  }, 'fatalError': function (uxsw) {
    throw console['error']('[xmldom fatalError]\t' + uxsw, _dkmnopl(this['locator'])), uxsw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ijglkh) {
  _dzx_0y['prototype'][ijglkh] = function () {
    return null;
  };
});var _dikjhfg = require('./bbbsax')['XMLReader'],
    _dolmpk = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dv$wyzx;