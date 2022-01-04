var F = wx.$D;
function Dzi_(gml5) {
  this['options'] = gml5 || { 'locator': {} };
}function D_oizl(weqsvt, m5aogj, mj5a) {
  function _h2z(zlro_i) {
    var h12$n = weqsvt[zlro_i];!h12$n && qvskw && (h12$n = 0x2 == weqsvt['length'] ? function (iom_5) {
      weqsvt(zlro_i, iom_5);
    } : weqsvt), gxmj[zlro_i] = h12$n && function (evqtsw) {
      h12$n('[xmldom ' + zlro_i + ']\t' + evqtsw + Dzmio(mj5a));
    } || function () {};
  }if (!weqsvt) {
    if (m5aogj instanceof Dxg6a5) return m5aogj;weqsvt = m5aogj;
  }var gxmj = {},
      qvskw = weqsvt instanceof Function;return mj5a = mj5a || {}, _h2z('warning'), _h2z('error'), _h2z('fatalError'), gxmj;
}function Dxg6a5() {
  this['cdata'] = !0x1;
}function Dozl_ir(om5_lg, n8h$1y) {
  n8h$1y['lineNumber'] = om5_lg['lineNumber'], n8h$1y['columnNumber'] = om5_lg['columnNumber'];
}function Dzmio(ubpc3) {
  return ubpc3 ? '\x0a@' + (ubpc3['systemId'] || '') + '#[line:' + ubpc3['lineNumber'] + ',col:' + ubpc3['columnNumber'] + ']' : void 0x0;
}function Dm5gjo(_ziol, oaglm5, nhrz21) {
  return 'string' == typeof _ziol ? _ziol['substr'](oaglm5, nhrz21) : _ziol['length'] >= oaglm5 + nhrz21 || oaglm5 ? new java['lang']['String'](_ziol, oaglm5, nhrz21) + '' : _ziol;
}function Dlo5_mi(kwvts, b3c0p) {
  kwvts['currentElement'] ? kwvts['currentElement']['appendChild'](b3c0p) : kwvts['doc']['appendChild'](b3c0p);
}Dzi_['prototype']['parseFromString'] = function (gx56aj, qsvet0) {
  var gl5_mo = this['options'],
      fu3bp9 = new Dam(),
      s0cte3 = gl5_mo['domBuilder'] || new Dxg6a5(),
      ufp93 = gl5_mo['errorHandler'],
      estqvw = gl5_mo['locator'],
      li_mo5 = gl5_mo['xmlns'] || {},
      bpc3u9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return estqvw && s0cte3['setDocumentLocator'](estqvw), fu3bp9['errorHandler'] = D_oizl(ufp93, s0cte3, estqvw), fu3bp9['domBuilder'] = gl5_mo['domBuilder'] || s0cte3, /\/x?html?$/['test'](qsvet0) && (bpc3u9['nbsp'] = '\u00a0', bpc3u9['copy'] = '©', li_mo5[''] = 'http://www.w3.org/1999/xhtml'), li_mo5['xml'] = li_mo5['xml'] || 'http://www.w3.org/XML/1998/namespace', gx56aj ? fu3bp9['parse'](gx56aj, li_mo5, bpc3u9) : fu3bp9['errorHandler']['error']('invalid doc source'), s0cte3['doc'];
}, Dxg6a5['prototype'] = { 'startDocument': function () {
    this['doc'] = new Dfu93bp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (vseqtw, tsqvew, l5m_, fb9p) {
    var c0ets = this['doc'],
        fbp47 = c0ets['createElementNS'](vseqtw, l5m_ || tsqvew),
        rz2il_ = fb9p['length'];Dlo5_mi(this, fbp47), this['currentElement'] = fbp47, this['locator'] && Dozl_ir(this['locator'], fbp47);for (var svktw = 0x0; rz2il_ > svktw; svktw++) {
      var vseqtw = fb9p['getURI'](svktw),
          ubcp = fb9p['getValue'](svktw),
          l5m_ = fb9p['getQName'](svktw),
          hrn8 = c0ets['createAttributeNS'](vseqtw, l5m_);this['locator'] && Dozl_ir(fb9p['getLocator'](svktw), hrn8), hrn8['value'] = hrn8['nodeValue'] = ubcp, fbp47['setAttributeNode'](hrn8);
    }
  }, 'endElement': function () {
    {
      var xj6ga5 = this['currentElement'];xj6ga5['tagName'];
    }this['currentElement'] = xj6ga5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (b9p7f4, b03cup) {
    var qe0vts = this['doc']['createProcessingInstruction'](b9p7f4, b03cup);this['locator'] && Dozl_ir(this['locator'], qe0vts), Dlo5_mi(this, qe0vts);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xw6kj) {
    if (xw6kj = Dm5gjo['apply'](this, arguments)) {
      if (this['cdata']) var v6twq = this['doc']['createCDATASection'](xw6kj);else var v6twq = this['doc']['createTextNode'](xw6kj);this['currentElement'] ? this['currentElement']['appendChild'](v6twq) : /^\s*$/['test'](xw6kj) && this['doc']['appendChild'](v6twq), this['locator'] && Dozl_ir(this['locator'], v6twq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wvsetq) {
    (this['locator'] = wvsetq) && (wvsetq['lineNumber'] = 0x0);
  }, 'comment': function (jma5go) {
    jma5go = Dm5gjo['apply'](this, arguments);var jxwa = this['doc']['createComment'](jma5go);this['locator'] && Dozl_ir(this['locator'], jxwa), Dlo5_mi(this, jxwa);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (oajg5, vt0, jam5go) {
    var x6wvqk = this['doc']['implementation'];if (x6wvqk && x6wvqk['createDocumentType']) {
      var agmxj5 = x6wvqk['createDocumentType'](oajg5, vt0, jam5go);this['locator'] && Dozl_ir(this['locator'], agmxj5), Dlo5_mi(this, agmxj5);
    }
  }, 'warning': function (_lroi) {
    console['warn']('[xmldom warning]\t' + _lroi, Dzmio(this['locator']));
  }, 'error': function (u9cbp) {
    console['error']('[xmldom error]\t' + u9cbp, Dzmio(this['locator']));
  }, 'fatalError': function (tcev0s) {
    throw console['error']('[xmldom fatalError]\t' + tcev0s, Dzmio(this['locator'])), tcev0s;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (mo_zil) {
  Dxg6a5['prototype'][mo_zil] = function () {
    return null;
  };
});var Dam = require('./d22d22cd22d22')['XMLReader'],
    Dfu93bp = exports['DOMImplementation'] = require('./d22d22DOd22d22')['DOMImplementation'];exports['XMLSerializer'] = require('./d22d22DOd22d22')['XMLSerializer'], exports['DOMParser'] = Dzi_;