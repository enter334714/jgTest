var k = wx.$f;
function fm93cgp(od54uf) {
  this['options'] = od54uf || { 'locator': {} };
}function fo4f5ud(jwat, _cpm$3, b57t0o) {
  function kwjtb(c$m_sp) {
    var u7f5bo = jwat[c$m_sp];!u7f5bo && _$zsx2 && (u7f5bo = 0x2 == jwat['length'] ? function (b5to) {
      jwat(c$m_sp, b5to);
    } : jwat), $zx2[c$m_sp] = u7f5bo ? function (_ps$m) {
      u7f5bo('[xmldom ' + c$m_sp + ']\t' + _ps$m + fwj0b(b57t0o));
    } : function () {};
  }if (!jwat) {
    if (_cpm$3 instanceof fb5u7f) return _cpm$3;jwat = _cpm$3;
  }var $zx2 = {},
      _$zsx2 = jwat instanceof Function;return b57t0o = b57t0o || {}, kwjtb('warning'), kwjtb('error'), kwjtb('fatalError'), $zx2;
}function fb5u7f() {
  this['cdata'] = !0x1;
}function ffdy4nu(xaw2z, asxq2) {
  asxq2['lineNumber'] = xaw2z['lineNumber'], asxq2['columnNumber'] = xaw2z['columnNumber'];
}function fwj0b(j0b7k) {
  return j0b7k ? '\x0a@' + (j0b7k['systemId'] || '') + '#[line:' + j0b7k['lineNumber'] + ',col:' + j0b7k['columnNumber'] + ']' : void 0x0;
}function f$zp_c(qja2, vry1e8, bk0tjw) {
  return 'string' == typeof qja2 ? qja2['substr'](vry1e8, bk0tjw) : qja2['length'] >= vry1e8 + bk0tjw || vry1e8 ? new java['lang']['String'](qja2, vry1e8, bk0tjw) + '' : qja2;
}function fwt0jb(o4und, fub7) {
  (o4und['currentElement'] || o4und['doc'])['appendChild'](fub7);
}fm93cgp['prototype']['parseFromString'] = function (of7bu5, jwt0b) {
  var ubot75 = this['options'],
      qa2z = new ftjwb(),
      m3gh9 = ubot75['domBuilder'] || new fb5u7f(),
      im3g9 = ubot75['errorHandler'],
      wqka2j = ubot75['locator'],
      nfod4u = ubot75['xmlns'] || {},
      kj0wq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return wqka2j && m3gh9['setDocumentLocator'](wqka2j), qa2z['errorHandler'] = fo4f5ud(im3g9, m3gh9, wqka2j), qa2z['domBuilder'] = ubot75['domBuilder'] || m3gh9, /\/x?html?$/['test'](jwt0b) && (kj0wq['nbsp'] = '\u00a0', kj0wq['copy'] = '©', nfod4u[''] = 'http://www.w3.org/1999/xhtml'), nfod4u['xml'] = nfod4u['xml'] || 'http://www.w3.org/XML/1998/namespace', of7bu5 ? qa2z['parse'](of7bu5, nfod4u, kj0wq) : qa2z['errorHandler']['error']('invalid doc source'), m3gh9['doc'];
}, fb5u7f['prototype'] = { 'startDocument': function () {
    this['doc'] = new fbu7o5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (fu4o5d, qax2zs, $mspc_, o507tb) {
    var ey8nv1 = this['doc'],
        d4yfn = ey8nv1['createElementNS'](fu4o5d, $mspc_ || qax2zs),
        dfuo45 = o507tb['length'];fwt0jb(this, d4yfn), this['currentElement'] = d4yfn, this['locator'] && ffdy4nu(this['locator'], d4yfn);for (var xwz2a = 0x0; xwz2a < dfuo45; xwz2a++) {
      var fu4o5d = o507tb['getURI'](xwz2a),
          dy4v = o507tb['getValue'](xwz2a),
          $mspc_ = o507tb['getQName'](xwz2a),
          w0qkaj = ey8nv1['createAttributeNS'](fu4o5d, $mspc_);this['locator'] && ffdy4nu(o507tb['getLocator'](xwz2a), w0qkaj), w0qkaj['value'] = w0qkaj['nodeValue'] = dy4v, d4yfn['setAttributeNode'](w0qkaj);
    }
  }, 'endElement': function () {
    var $2xszq = this['currentElement'];$2xszq['tagName'], this['currentElement'] = $2xszq['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($qzxs2, cm$s) {
    cm$s = this['doc']['createProcessingInstruction']($qzxs2, cm$s), (this['locator'] && ffdy4nu(this['locator'], cm$s), fwt0jb(this, cm$s));
  }, 'ignorableWhitespace': function () {}, 'characters': function (czp$s_) {
    var ajwkt0;(czp$s_ = f$zp_c['apply'](this, arguments)) && (ajwkt0 = this['cdata'] ? this['doc']['createCDATASection'](czp$s_) : this['doc']['createTextNode'](czp$s_), this['currentElement'] ? this['currentElement']['appendChild'](ajwkt0) : /^\s*$/['test'](czp$s_) && this['doc']['appendChild'](ajwkt0), this['locator'] && ffdy4nu(this['locator'], ajwkt0));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (o50) {
    (this['locator'] = o50) && (o50['lineNumber'] = 0x0);
  }, 'comment': function (m_$p3c) {
    m_$p3c = f$zp_c['apply'](this, arguments);var p_csz = this['doc']['createComment'](m_$p3c);this['locator'] && ffdy4nu(this['locator'], p_csz), fwt0jb(this, p_csz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (sp$z, aqwzx2, yfun) {
    var d4nuyf = this['doc']['implementation'];d4nuyf && d4nuyf['createDocumentType'] && (yfun = d4nuyf['createDocumentType'](sp$z, aqwzx2, yfun), this['locator'] && ffdy4nu(this['locator'], yfun), fwt0jb(this, yfun));
  }, 'warning': function (m9ig3) {
    console['warn']('[xmldom warning]\t' + m9ig3, fwj0b(this['locator']));
  }, 'error': function (b50) {
    console['error']('[xmldom error]\t' + b50, fwj0b(this['locator']));
  }, 'fatalError': function (t70j) {
    throw console['error']('[xmldom fatalError]\t' + t70j, fwj0b(this['locator'])), t70j;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wzxaq) {
  fb5u7f['prototype'][wzxaq] = function () {
    return null;
  };
});var ftjwb = require('./fffsax')['XMLReader'],
    fbu7o5 = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fm93cgp;