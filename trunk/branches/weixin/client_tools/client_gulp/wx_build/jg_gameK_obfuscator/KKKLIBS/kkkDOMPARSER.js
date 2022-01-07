var U = wx.$k;
function K1_ieth67(bozxvw) {
  this['options'] = bozxvw || { 'locator': {} };
}function K1_n1wovq(hetji, ti7mj, dlax) {
  function y53cg(mtj) {
    var oazb = hetji[mtj];!oazb && ehs69k && (oazb = 0x2 == hetji['length'] ? function (azbo) {
      hetji(mtj, azbo);
    } : hetji), eks6i[mtj] = oazb && function (ovbz) {
      oazb('[xmldom ' + mtj + ']\t' + ovbz + K1_emjt(dlax));
    } || function () {};
  }if (!hetji) {
    if (ti7mj instanceof K1_xzuwa) return ti7mj;hetji = ti7mj;
  }var eks6i = {},
      ehs69k = hetji instanceof Function;return dlax = dlax || {}, y53cg('warning'), y53cg('error'), y53cg('fatalError'), eks6i;
}function K1_xzuwa() {
  this['cdata'] = !0x1;
}function K1_abxw(xzbovw, xwbzua) {
  xwbzua['lineNumber'] = xzbovw['lineNumber'], xwbzua['columnNumber'] = xzbovw['columnNumber'];
}function K1_emjt(zublx) {
  return zublx ? '\x0a@' + (zublx['systemId'] || '') + '#[line:' + zublx['lineNumber'] + ',col:' + zublx['columnNumber'] + ']' : void 0x0;
}function K1_nwv1qo(ubalzx, hk6et, zxal$u) {
  return 'string' == typeof ubalzx ? ubalzx['substr'](hk6et, zxal$u) : ubalzx['length'] >= hk6et + zxal$u || hk6et ? new java['lang']['String'](ubalzx, hk6et, zxal$u) + '' : ubalzx;
}function K1_waxub(ludr_, o01nqv) {
  ludr_['currentElement'] ? ludr_['currentElement']['appendChild'](o01nqv) : ludr_['doc']['appendChild'](o01nqv);
}K1_ieth67['prototype']['parseFromString'] = function (iekh, v0onq) {
  var uazx$ = this['options'],
      fy3 = new K1_i6et7h(),
      c3p5 = uazx$['domBuilder'] || new K1_xzuwa(),
      ovxzw = uazx$['errorHandler'],
      x$uzl = uazx$['locator'],
      $r_d5 = uazx$['xmlns'] || {},
      tmj7i = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return x$uzl && c3p5['setDocumentLocator'](x$uzl), fy3['errorHandler'] = K1_n1wovq(ovxzw, c3p5, x$uzl), fy3['domBuilder'] = uazx$['domBuilder'] || c3p5, /\/x?html?$/['test'](v0onq) && (tmj7i['nbsp'] = '\u00a0', tmj7i['copy'] = '©', $r_d5[''] = 'http://www.w3.org/1999/xhtml'), $r_d5['xml'] = $r_d5['xml'] || 'http://www.w3.org/XML/1998/namespace', iekh ? fy3['parse'](iekh, $r_d5, tmj7i) : fy3['errorHandler']['error']('invalid doc source'), c3p5['doc'];
}, K1_xzuwa['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_$da_lu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (hie6k, bzlua, r_d$p, onv1q) {
    var q209n8 = this['doc'],
        eis6k = q209n8['createElementNS'](hie6k, r_d$p || bzlua),
        l$adx = onv1q['length'];K1_waxub(this, eis6k), this['currentElement'] = eis6k, this['locator'] && K1_abxw(this['locator'], eis6k);for (var _a$du = 0x0; l$adx > _a$du; _a$du++) {
      var hie6k = onv1q['getURI'](_a$du),
          seih6 = onv1q['getValue'](_a$du),
          r_d$p = onv1q['getQName'](_a$du),
          ehks6i = q209n8['createAttributeNS'](hie6k, r_d$p);this['locator'] && K1_abxw(onv1q['getLocator'](_a$du), ehks6i), ehks6i['value'] = ehks6i['nodeValue'] = seih6, eis6k['setAttributeNode'](ehks6i);
    }
  }, 'endElement': function () {
    {
      var xwzbua = this['currentElement'];xwzbua['tagName'];
    }this['currentElement'] = xwzbua['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jim7, d_r$ul) {
    var nw1bvo = this['doc']['createProcessingInstruction'](jim7, d_r$ul);this['locator'] && K1_abxw(this['locator'], nw1bvo), K1_waxub(this, nw1bvo);
  }, 'ignorableWhitespace': function () {}, 'characters': function (drp$5) {
    if (drp$5 = K1_nwv1qo['apply'](this, arguments)) {
      if (this['cdata']) var p_5$ = this['doc']['createCDATASection'](drp$5);else var p_5$ = this['doc']['createTextNode'](drp$5);this['currentElement'] ? this['currentElement']['appendChild'](p_5$) : /^\s*$/['test'](drp$5) && this['doc']['appendChild'](p_5$), this['locator'] && K1_abxw(this['locator'], p_5$);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xazbuw) {
    (this['locator'] = xazbuw) && (xazbuw['lineNumber'] = 0x0);
  }, 'comment': function (g53rpf) {
    g53rpf = K1_nwv1qo['apply'](this, arguments);var _$u = this['doc']['createComment'](g53rpf);this['locator'] && K1_abxw(this['locator'], _$u), K1_waxub(this, _$u);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (g5_p3r, oqvwn1, mtj7ei) {
    var dlur$_ = this['doc']['implementation'];if (dlur$_ && dlur$_['createDocumentType']) {
      var f5ycg3 = dlur$_['createDocumentType'](g5_p3r, oqvwn1, mtj7ei);this['locator'] && K1_abxw(this['locator'], f5ycg3), K1_waxub(this, f5ycg3);
    }
  }, 'warning': function (p5cf3) {
    console['warn']('[xmldom warning]\t' + p5cf3, K1_emjt(this['locator']));
  }, 'error': function (frp35) {
    console['error']('[xmldom error]\t' + frp35, K1_emjt(this['locator']));
  }, 'fatalError': function (c3ygf5) {
    throw console['error']('[xmldom fatalError]\t' + c3ygf5, K1_emjt(this['locator'])), c3ygf5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_durl$) {
  K1_xzuwa['prototype'][_durl$] = function () {
    return null;
  };
});var K1_i6et7h = require('./kkkSAX')['XMLReader'],
    K1_$da_lu = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_ieth67;