var _ = wx.y$;
function _dcvx7m(kdzei) {
  this['options'] = kdzei || { 'locator': {} };
}function _do39aup(oapu, ygr548, ezid) {
  function b0q6j_(zi85f) {
    var y49 = oapu[zi85f];!y49 && u9a34 && (y49 = 0x2 == oapu['length'] ? function (fi8dz) {
      oapu(zi85f, fi8dz);
    } : oapu), a5g4r[zi85f] = y49 && function (zi) {
      y49('[xmldom ' + zi85f + ']\t' + zi + _dri5gf8(ezid));
    } || function () {};
  }if (!oapu) {
    if (ygr548 instanceof _dekif) return ygr548;oapu = ygr548;
  }var a5g4r = {},
      u9a34 = oapu instanceof Function;return ezid = ezid || {}, b0q6j_('warning'), b0q6j_('error'), b0q6j_('fatalError'), a5g4r;
}function _dekif() {
  this['cdata'] = !0x1;
}function _dnekc(g4y3ar, xwt7vm) {
  xwt7vm['lineNumber'] = g4y3ar['lineNumber'], xwt7vm['columnNumber'] = g4y3ar['columnNumber'];
}function _dri5gf8(wvmx7n) {
  return wvmx7n ? '\x0a@' + (wvmx7n['systemId'] || '') + '#[line:' + wvmx7n['lineNumber'] + ',col:' + wvmx7n['columnNumber'] + ']' : void 0x0;
}function _dlnvcek(_0wt, vexnl, rg4y3a) {
  return 'string' == typeof _0wt ? _0wt['substr'](vexnl, rg4y3a) : _0wt['length'] >= vexnl + rg4y3a || vexnl ? new java['lang']['String'](_0wt, vexnl, rg4y3a) + '' : _0wt;
}function _drzi8f5(up3oa9, cnxe) {
  up3oa9['currentElement'] ? up3oa9['currentElement']['appendChild'](cnxe) : up3oa9['doc']['appendChild'](cnxe);
}_dcvx7m['prototype']['parseFromString'] = function (firz58, p923uo) {
  var o39au = this['options'],
      g8rfy5 = new _dya4r(),
      apu93o = o39au['domBuilder'] || new _dekif(),
      mw7nvx = o39au['errorHandler'],
      u$21po = o39au['locator'],
      p392 = o39au['xmlns'] || {},
      klcez = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return u$21po && apu93o['setDocumentLocator'](u$21po), g8rfy5['errorHandler'] = _do39aup(mw7nvx, apu93o, u$21po), g8rfy5['domBuilder'] = o39au['domBuilder'] || apu93o, /\/x?html?$/['test'](p923uo) && (klcez['nbsp'] = '\u00a0', klcez['copy'] = '©', p392[''] = 'http://www.w3.org/1999/xhtml'), p392['xml'] = p392['xml'] || 'http://www.w3.org/XML/1998/namespace', firz58 ? g8rfy5['parse'](firz58, p392, klcez) : g8rfy5['errorHandler']['error']('invalid doc source'), apu93o['doc'];
}, _dekif['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dtsmw7x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (nlvk, i5r8fz, dneck, t6ws_) {
    var hp2o = this['doc'],
        if5dz8 = hp2o['createElementNS'](nlvk, dneck || i5r8fz),
        f5rgy8 = t6ws_['length'];_drzi8f5(this, if5dz8), this['currentElement'] = if5dz8, this['locator'] && _dnekc(this['locator'], if5dz8);for (var g9y34 = 0x0; f5rgy8 > g9y34; g9y34++) {
      var nlvk = t6ws_['getURI'](g9y34),
          xlcvn = t6ws_['getValue'](g9y34),
          dneck = t6ws_['getQName'](g9y34),
          p1ho$2 = hp2o['createAttributeNS'](nlvk, dneck);this['locator'] && _dnekc(t6ws_['getLocator'](g9y34), p1ho$2), p1ho$2['value'] = p1ho$2['nodeValue'] = xlcvn, if5dz8['setAttributeNode'](p1ho$2);
    }
  }, 'endElement': function () {
    {
      var kzdif8 = this['currentElement'];kzdif8['tagName'];
    }this['currentElement'] = kzdif8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xnelcv, dfzik8) {
    var ws06t_ = this['doc']['createProcessingInstruction'](xnelcv, dfzik8);this['locator'] && _dnekc(this['locator'], ws06t_), _drzi8f5(this, ws06t_);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_st0j6) {
    if (_st0j6 = _dlnvcek['apply'](this, arguments)) {
      if (this['cdata']) var s0t_6w = this['doc']['createCDATASection'](_st0j6);else var s0t_6w = this['doc']['createTextNode'](_st0j6);this['currentElement'] ? this['currentElement']['appendChild'](s0t_6w) : /^\s*$/['test'](_st0j6) && this['doc']['appendChild'](s0t_6w), this['locator'] && _dnekc(this['locator'], s0t_6w);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nvelk) {
    (this['locator'] = nvelk) && (nvelk['lineNumber'] = 0x0);
  }, 'comment': function (nm7vw) {
    nm7vw = _dlnvcek['apply'](this, arguments);var h$2op = this['doc']['createComment'](nm7vw);this['locator'] && _dnekc(this['locator'], h$2op), _drzi8f5(this, h$2op);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (o29p1, upo$12, xmcnv) {
    var ag349 = this['doc']['implementation'];if (ag349 && ag349['createDocumentType']) {
      var t76wm = ag349['createDocumentType'](o29p1, upo$12, xmcnv);this['locator'] && _dnekc(this['locator'], t76wm), _drzi8f5(this, t76wm);
    }
  }, 'warning': function (uop32) {
    console['warn']('[xmldom warning]\t' + uop32, _dri5gf8(this['locator']));
  }, 'error': function (ckdzel) {
    console['error']('[xmldom error]\t' + ckdzel, _dri5gf8(this['locator']));
  }, 'fatalError': function (n7lvc) {
    throw console['error']('[xmldom fatalError]\t' + n7lvc, _dri5gf8(this['locator'])), n7lvc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (if85g) {
  _dekif['prototype'][if85g] = function () {
    return null;
  };
});var _dya4r = require('./bbbsax')['XMLReader'],
    _dtsmw7x = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dcvx7m;