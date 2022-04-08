var O = wx.$C;
function h_rj9z8d(x1wq0) {
  this['options'] = x1wq0 || { 'locator': {} };
}function h__snavy(gf3_4v, sv, puz) {
  function fng4v_(lcp5) {
    var rd9z = gf3_4v[lcp5];!rd9z && lupc8 && (rd9z = 0x2 == gf3_4v['length'] ? function (cl5u$p) {
      gf3_4v(lcp5, cl5u$p);
    } : gf3_4v), $zp8u[lcp5] = rd9z && function (s_nav) {
      rd9z('[xmldom ' + lcp5 + ']\t' + s_nav + h_$u5lcp(puz));
    } || function () {};
  }if (!gf3_4v) {
    if (sv instanceof h_fvg4_) return sv;gf3_4v = sv;
  }var $zp8u = {},
      lupc8 = gf3_4v instanceof Function;return puz = puz || {}, fng4v_('warning'), fng4v_('error'), fng4v_('fatalError'), $zp8u;
}function h_fvg4_() {
  this['cdata'] = !0x1;
}function h_hzj9(zj98r$, q170x3) {
  q170x3['lineNumber'] = zj98r$['lineNumber'], q170x3['columnNumber'] = zj98r$['columnNumber'];
}function h_$u5lcp(q14x) {
  return q14x ? '\x0a@' + (q14x['systemId'] || '') + '#[line:' + q14x['lineNumber'] + ',col:' + q14x['columnNumber'] + ']' : void 0x0;
}function h_ysa62i(ab2iy, zu$p8, gsvny) {
  return 'string' == typeof ab2iy ? ab2iy['substr'](zu$p8, gsvny) : ab2iy['length'] >= zu$p8 + gsvny || zu$p8 ? new java['lang']['String'](ab2iy, zu$p8, gsvny) + '' : ab2iy;
}function h_cp8r$(gf43v, x1q7) {
  gf43v['currentElement'] ? gf43v['currentElement']['appendChild'](x1q7) : gf43v['doc']['appendChild'](x1q7);
}h_rj9z8d['prototype']['parseFromString'] = function (hjw9zd, vgsf_) {
  var _ny6as = this['options'],
      w9zdhj = new h_san_vy(),
      lc$p8 = _ny6as['domBuilder'] || new h_fvg4_(),
      aei2 = _ny6as['errorHandler'],
      sa2y6 = _ny6as['locator'],
      x73q1 = _ny6as['xmlns'] || {},
      hzwj9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return sa2y6 && lc$p8['setDocumentLocator'](sa2y6), w9zdhj['errorHandler'] = h__snavy(aei2, lc$p8, sa2y6), w9zdhj['domBuilder'] = _ny6as['domBuilder'] || lc$p8, /\/x?html?$/['test'](vgsf_) && (hzwj9['nbsp'] = '\u00a0', hzwj9['copy'] = '©', x73q1[''] = 'http://www.w3.org/1999/xhtml'), x73q1['xml'] = x73q1['xml'] || 'http://www.w3.org/XML/1998/namespace', hjw9zd ? w9zdhj['parse'](hjw9zd, x73q1, hzwj9) : w9zdhj['errorHandler']['error']('invalid doc source'), lc$p8['doc'];
}, h_fvg4_['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_zu$8p()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jhw90d, x0qhd, _nf4gv, ayvn_s) {
    var svgn_f = this['doc'],
        ot5cp = svgn_f['createElementNS'](jhw90d, _nf4gv || x0qhd),
        rz9j8 = ayvn_s['length'];h_cp8r$(this, ot5cp), this['currentElement'] = ot5cp, this['locator'] && h_hzj9(this['locator'], ot5cp);for (var vsyng = 0x0; rz9j8 > vsyng; vsyng++) {
      var jhw90d = ayvn_s['getURI'](vsyng),
          kto5l = ayvn_s['getValue'](vsyng),
          _nf4gv = ayvn_s['getQName'](vsyng),
          zj9r = svgn_f['createAttributeNS'](jhw90d, _nf4gv);this['locator'] && h_hzj9(ayvn_s['getLocator'](vsyng), zj9r), zj9r['value'] = zj9r['nodeValue'] = kto5l, ot5cp['setAttributeNode'](zj9r);
    }
  }, 'endElement': function () {
    {
      var u8$pr = this['currentElement'];u8$pr['tagName'];
    }this['currentElement'] = u8$pr['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zu8$pr, ie62) {
    var xq43 = this['doc']['createProcessingInstruction'](zu8$pr, ie62);this['locator'] && h_hzj9(this['locator'], xq43), h_cp8r$(this, xq43);
  }, 'ignorableWhitespace': function () {}, 'characters': function (s_va) {
    if (s_va = h_ysa62i['apply'](this, arguments)) {
      if (this['cdata']) var z$j9 = this['doc']['createCDATASection'](s_va);else var z$j9 = this['doc']['createTextNode'](s_va);this['currentElement'] ? this['currentElement']['appendChild'](z$j9) : /^\s*$/['test'](s_va) && this['doc']['appendChild'](z$j9), this['locator'] && h_hzj9(this['locator'], z$j9);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (p$cul8) {
    (this['locator'] = p$cul8) && (p$cul8['lineNumber'] = 0x0);
  }, 'comment': function (ysa6n) {
    ysa6n = h_ysa62i['apply'](this, arguments);var uopl5 = this['doc']['createComment'](ysa6n);this['locator'] && h_hzj9(this['locator'], uopl5), h_cp8r$(this, uopl5);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ysvna, pulco5, n4gvf_) {
    var iba62 = this['doc']['implementation'];if (iba62 && iba62['createDocumentType']) {
      var u9 = iba62['createDocumentType'](ysvna, pulco5, n4gvf_);this['locator'] && h_hzj9(this['locator'], u9), h_cp8r$(this, u9);
    }
  }, 'warning': function (zj9d) {
    console['warn']('[xmldom warning]\t' + zj9d, h_$u5lcp(this['locator']));
  }, 'error': function (o5cplu) {
    console['error']('[xmldom error]\t' + o5cplu, h_$u5lcp(this['locator']));
  }, 'fatalError': function (kom5lt) {
    throw console['error']('[xmldom fatalError]\t' + kom5lt, h_$u5lcp(this['locator'])), kom5lt;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (c5p) {
  h_fvg4_['prototype'][c5p] = function () {
    return null;
  };
});var h_san_vy = require('./hhhsax')['XMLReader'],
    h_zu$8p = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_rj9z8d;