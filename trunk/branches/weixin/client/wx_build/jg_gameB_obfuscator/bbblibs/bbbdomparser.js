var _ = wx.y$;
function _dtxvsu(troqs) {
  this['options'] = troqs || { 'locator': {} };
}function _dgkhfi(hedcg, onplq, wv$xzy) {
  function truqvs($_yxwz) {
    var xz$ywv = hedcg[$_yxwz];!xz$ywv && mkopn && (xz$ywv = 0x2 == hedcg['length'] ? function (xwyz_) {
      hedcg($_yxwz, xwyz_);
    } : hedcg), jfeihg[$_yxwz] = xz$ywv ? function (_20$1) {
      xz$ywv('[xmldom ' + $_yxwz + ']\t' + _20$1 + _dqopsrn(wv$xzy));
    } : function () {};
  }if (!hedcg) {
    if (onplq instanceof _dmkjlhi) return onplq;hedcg = onplq;
  }var jfeihg = {},
      mkopn = hedcg instanceof Function;return wv$xzy = wv$xzy || {}, truqvs('warning'), truqvs('error'), truqvs('fatalError'), jfeihg;
}function _dmkjlhi() {
  this['cdata'] = !0x1;
}function _dmolpn(olmkjn, yzx0$) {
  yzx0$['lineNumber'] = olmkjn['lineNumber'], yzx0$['columnNumber'] = olmkjn['columnNumber'];
}function _dqopsrn(hgifje) {
  return hgifje ? '\x0a@' + (hgifje['systemId'] || '') + '#[line:' + hgifje['lineNumber'] + ',col:' + hgifje['columnNumber'] + ']' : void 0x0;
}function _dzyxvw(hljmki, bedaf, gjhkli) {
  return 'string' == typeof hljmki ? hljmki['substr'](bedaf, gjhkli) : hljmki['length'] >= bedaf + gjhkli || bedaf ? new java['lang']['String'](hljmki, bedaf, gjhkli) + '' : hljmki;
}function _dmkjnil(cfeghd, pmlq) {
  (cfeghd['currentElement'] || cfeghd['doc'])['appendChild'](pmlq);
}_dtxvsu['prototype']['parseFromString'] = function (roq, ustvw) {
  var dgehi = this['options'],
      utqrs = new _dlmnikj(),
      lkopn = dgehi['domBuilder'] || new _dmkjlhi(),
      y0x_$z = dgehi['errorHandler'],
      nqprom = dgehi['locator'],
      zy$1 = dgehi['xmlns'] || {},
      kgijh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return nqprom && lkopn['setDocumentLocator'](nqprom), utqrs['errorHandler'] = _dgkhfi(y0x_$z, lkopn, nqprom), utqrs['domBuilder'] = dgehi['domBuilder'] || lkopn, /\/x?html?$/['test'](ustvw) && (kgijh['nbsp'] = '\u00a0', kgijh['copy'] = '©', zy$1[''] = 'http://www.w3.org/1999/xhtml'), zy$1['xml'] = zy$1['xml'] || 'http://www.w3.org/XML/1998/namespace', roq ? utqrs['parse'](roq, zy$1, kgijh) : utqrs['errorHandler']['error']('invalid doc source'), lkopn['doc'];
}, _dmkjlhi['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dsupqr()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ikhml, z20, rptqus, vyuwt) {
    var qsvu = this['doc'],
        okljnm = qsvu['createElementNS'](ikhml, rptqus || z20),
        kiljmn = vyuwt['length'];_dmkjnil(this, okljnm), this['currentElement'] = okljnm, this['locator'] && _dmolpn(this['locator'], okljnm);for (var mqnlpo = 0x0; mqnlpo < kiljmn; mqnlpo++) {
      var ikhml = vyuwt['getURI'](mqnlpo),
          fgjhk = vyuwt['getValue'](mqnlpo),
          rptqus = vyuwt['getQName'](mqnlpo),
          igh = qsvu['createAttributeNS'](ikhml, rptqus);this['locator'] && _dmolpn(vyuwt['getLocator'](mqnlpo), igh), igh['value'] = igh['nodeValue'] = fgjhk, okljnm['setAttributeNode'](igh);
    }
  }, 'endElement': function () {
    var dbfgce = this['currentElement'];dbfgce['tagName'], this['currentElement'] = dbfgce['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qmonpl, $zxyv) {
    $zxyv = this['doc']['createProcessingInstruction'](qmonpl, $zxyv), (this['locator'] && _dmolpn(this['locator'], $zxyv), _dmkjnil(this, $zxyv));
  }, 'ignorableWhitespace': function () {}, 'characters': function (gefj) {
    var $zvxw;(gefj = _dzyxvw['apply'](this, arguments)) && ($zvxw = this['cdata'] ? this['doc']['createCDATASection'](gefj) : this['doc']['createTextNode'](gefj), this['currentElement'] ? this['currentElement']['appendChild']($zvxw) : /^\s*$/['test'](gefj) && this['doc']['appendChild']($zvxw), this['locator'] && _dmolpn(this['locator'], $zvxw));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jhkgl) {
    (this['locator'] = jhkgl) && (jhkgl['lineNumber'] = 0x0);
  }, 'comment': function (qspr) {
    qspr = _dzyxvw['apply'](this, arguments);var srtqp = this['doc']['createComment'](qspr);this['locator'] && _dmolpn(this['locator'], srtqp), _dmkjnil(this, srtqp);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rspn, glhkji, omlpq) {
    var fkhi = this['doc']['implementation'];fkhi && fkhi['createDocumentType'] && (omlpq = fkhi['createDocumentType'](rspn, glhkji, omlpq), this['locator'] && _dmolpn(this['locator'], omlpq), _dmkjnil(this, omlpq));
  }, 'warning': function (qnpos) {
    console['warn']('[xmldom warning]\t' + qnpos, _dqopsrn(this['locator']));
  }, 'error': function (lkjno) {
    console['error']('[xmldom error]\t' + lkjno, _dqopsrn(this['locator']));
  }, 'fatalError': function (svrt) {
    throw console['error']('[xmldom fatalError]\t' + svrt, _dqopsrn(this['locator'])), svrt;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (z21$_0) {
  _dmkjlhi['prototype'][z21$_0] = function () {
    return null;
  };
});var _dlmnikj = require('./bbbsax')['XMLReader'],
    _dsupqr = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dtxvsu;