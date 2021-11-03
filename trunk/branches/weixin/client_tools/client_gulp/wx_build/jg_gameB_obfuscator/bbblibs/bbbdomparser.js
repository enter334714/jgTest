var _ = wx.y$;
function _dzxvyw$(ecfdh) {
  this['options'] = ecfdh || { 'locator': {} };
}function _dytuv(rqvsut, svuwrt, pnr) {
  function ronqsp($yx_wz) {
    var porm = rqvsut[$yx_wz];!porm && figjhe && (porm = 0x2 == rqvsut['length'] ? function (nijm) {
      rqvsut($yx_wz, nijm);
    } : rqvsut), strvu[$yx_wz] = porm && function (y$_z) {
      porm('[xmldom ' + $yx_wz + ']\t' + y$_z + _d_y0x(pnr));
    } || function () {};
  }if (!rqvsut) {
    if (svuwrt instanceof _dvxwyt) return svuwrt;rqvsut = svuwrt;
  }var strvu = {},
      figjhe = rqvsut instanceof Function;return pnr = pnr || {}, ronqsp('warning'), ronqsp('error'), ronqsp('fatalError'), strvu;
}function _dvxwyt() {
  this['cdata'] = !0x1;
}function _dwyvxuz($z0y, kmonp) {
  kmonp['lineNumber'] = $z0y['lineNumber'], kmonp['columnNumber'] = $z0y['columnNumber'];
}function _d_y0x(befdca) {
  return befdca ? '\x0a@' + (befdca['systemId'] || '') + '#[line:' + befdca['lineNumber'] + ',col:' + befdca['columnNumber'] + ']' : void 0x0;
}function _d$y_x0z(ruptqs, xvz$wy, sqpro) {
  return 'string' == typeof ruptqs ? ruptqs['substr'](xvz$wy, sqpro) : ruptqs['length'] >= xvz$wy + sqpro || xvz$wy ? new java['lang']['String'](ruptqs, xvz$wy, sqpro) + '' : ruptqs;
}function _dhlgjik(y10z_$, fhegd) {
  y10z_$['currentElement'] ? y10z_$['currentElement']['appendChild'](fhegd) : y10z_$['doc']['appendChild'](fhegd);
}_dzxvyw$['prototype']['parseFromString'] = function ($y, vyxw$z) {
  var knijlm = this['options'],
      vxtyu = new _dnmpqr(),
      vqts = knijlm['domBuilder'] || new _dvxwyt(),
      morqn = knijlm['errorHandler'],
      imnjlk = knijlm['locator'],
      jnlk = knijlm['xmlns'] || {},
      bcegfd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return imnjlk && vqts['setDocumentLocator'](imnjlk), vxtyu['errorHandler'] = _dytuv(morqn, vqts, imnjlk), vxtyu['domBuilder'] = knijlm['domBuilder'] || vqts, /\/x?html?$/['test'](vyxw$z) && (bcegfd['nbsp'] = '\u00a0', bcegfd['copy'] = '©', jnlk[''] = 'http://www.w3.org/1999/xhtml'), jnlk['xml'] = jnlk['xml'] || 'http://www.w3.org/XML/1998/namespace', $y ? vxtyu['parse']($y, jnlk, bcegfd) : vxtyu['errorHandler']['error']('invalid doc source'), vqts['doc'];
}, _dvxwyt['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dcdgb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_12304, jhgkif, ejfhgi, kmjlni) {
    var sur = this['doc'],
        qmopnr = sur['createElementNS'](_12304, ejfhgi || jhgkif),
        rutpq = kmjlni['length'];_dhlgjik(this, qmopnr), this['currentElement'] = qmopnr, this['locator'] && _dwyvxuz(this['locator'], qmopnr);for (var tyuxvw = 0x0; rutpq > tyuxvw; tyuxvw++) {
      var _12304 = kmjlni['getURI'](tyuxvw),
          toqsp = kmjlni['getValue'](tyuxvw),
          ejfhgi = kmjlni['getQName'](tyuxvw),
          xwv$yz = sur['createAttributeNS'](_12304, ejfhgi);this['locator'] && _dwyvxuz(kmjlni['getLocator'](tyuxvw), xwv$yz), xwv$yz['value'] = xwv$yz['nodeValue'] = toqsp, qmopnr['setAttributeNode'](xwv$yz);
    }
  }, 'endElement': function () {
    {
      var jhlki = this['currentElement'];jhlki['tagName'];
    }this['currentElement'] = jhlki['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wvtyx, lkmjn) {
    var heigf = this['doc']['createProcessingInstruction'](wvtyx, lkmjn);this['locator'] && _dwyvxuz(this['locator'], heigf), _dhlgjik(this, heigf);
  }, 'ignorableWhitespace': function () {}, 'characters': function (zxwv$y) {
    if (zxwv$y = _d$y_x0z['apply'](this, arguments)) {
      if (this['cdata']) var z102_ = this['doc']['createCDATASection'](zxwv$y);else var z102_ = this['doc']['createTextNode'](zxwv$y);this['currentElement'] ? this['currentElement']['appendChild'](z102_) : /^\s*$/['test'](zxwv$y) && this['doc']['appendChild'](z102_), this['locator'] && _dwyvxuz(this['locator'], z102_);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (x$zvw) {
    (this['locator'] = x$zvw) && (x$zvw['lineNumber'] = 0x0);
  }, 'comment': function (xvtwu) {
    xvtwu = _d$y_x0z['apply'](this, arguments);var yzw$ = this['doc']['createComment'](xvtwu);this['locator'] && _dwyvxuz(this['locator'], yzw$), _dhlgjik(this, yzw$);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_$32, qtuvr, hjmkl) {
    var nqrsop = this['doc']['implementation'];if (nqrsop && nqrsop['createDocumentType']) {
      var sqnop = nqrsop['createDocumentType'](_$32, qtuvr, hjmkl);this['locator'] && _dwyvxuz(this['locator'], sqnop), _dhlgjik(this, sqnop);
    }
  }, 'warning': function (opt) {
    console['warn']('[xmldom warning]\t' + opt, _d_y0x(this['locator']));
  }, 'error': function (jkhgfi) {
    console['error']('[xmldom error]\t' + jkhgfi, _d_y0x(this['locator']));
  }, 'fatalError': function (z$y_01) {
    throw console['error']('[xmldom fatalError]\t' + z$y_01, _d_y0x(this['locator'])), z$y_01;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fijheg) {
  _dvxwyt['prototype'][fijheg] = function () {
    return null;
  };
});var _dnmpqr = require('./bbbsax')['XMLReader'],
    _dcdgb = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dzxvyw$;