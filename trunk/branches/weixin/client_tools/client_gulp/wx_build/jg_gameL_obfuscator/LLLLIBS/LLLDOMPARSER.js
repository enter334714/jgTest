var W = wx.$l;
function L9l9ot5(n_x48s) {
  this['options'] = n_x48s || { 'locator': {} };
}function L9t5l9q(oe1g7, fol9, of7v1) {
  function yn8x4(u1ep6g) {
    var hjqakz = oe1g7[u1ep6g];!hjqakz && ymcr03 && (hjqakz = 0x2 == oe1g7['length'] ? function (f9lq) {
      oe1g7(u1ep6g, f9lq);
    } : oe1g7), go7e1v[u1ep6g] = hjqakz && function (d4s2) {
      hjqakz('[xmldom ' + u1ep6g + ']\t' + d4s2 + L9zqtl5h(of7v1));
    } || function () {};
  }if (!oe1g7) {
    if (fol9 instanceof L9vo719e) return fol9;oe1g7 = fol9;
  }var go7e1v = {},
      ymcr03 = oe1g7 instanceof Function;return of7v1 = of7v1 || {}, yn8x4('warning'), yn8x4('error'), yn8x4('fatalError'), go7e1v;
}function L9vo719e() {
  this['cdata'] = !0x1;
}function L9m0cir3(q5hlt, $asdb) {
  $asdb['lineNumber'] = q5hlt['lineNumber'], $asdb['columnNumber'] = q5hlt['columnNumber'];
}function L9zqtl5h(f71vo9) {
  return f71vo9 ? '\x0a@' + (f71vo9['systemId'] || '') + '#[line:' + f71vo9['lineNumber'] + ',col:' + f71vo9['columnNumber'] + ']' : void 0x0;
}function L9n$s4_8(tfq59l, y0n_3x, v6g1) {
  return 'string' == typeof tfq59l ? tfq59l['substr'](y0n_3x, v6g1) : tfq59l['length'] >= y0n_3x + v6g1 || y0n_3x ? new java['lang']['String'](tfq59l, y0n_3x, v6g1) + '' : tfq59l;
}function L9pe1ug6(jb2a, rmwi) {
  jb2a['currentElement'] ? jb2a['currentElement']['appendChild'](rmwi) : jb2a['doc']['appendChild'](rmwi);
}L9l9ot5['prototype']['parseFromString'] = function (n4x8_, g7e1vo) {
  var n_s$ = this['options'],
      yxn40 = new L9eogv71(),
      j2dkab = n_s$['domBuilder'] || new L9vo719e(),
      x40_n = n_s$['errorHandler'],
      of7 = n_s$['locator'],
      zlhqtj = n_s$['xmlns'] || {},
      a$2kbd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return of7 && j2dkab['setDocumentLocator'](of7), yxn40['errorHandler'] = L9t5l9q(x40_n, j2dkab, of7), yxn40['domBuilder'] = n_s$['domBuilder'] || j2dkab, /\/x?html?$/['test'](g7e1vo) && (a$2kbd['nbsp'] = '\u00a0', a$2kbd['copy'] = '©', zlhqtj[''] = 'http://www.w3.org/1999/xhtml'), zlhqtj['xml'] = zlhqtj['xml'] || 'http://www.w3.org/XML/1998/namespace', n4x8_ ? yxn40['parse'](n4x8_, zlhqtj, a$2kbd) : yxn40['errorHandler']['error']('invalid doc source'), j2dkab['doc'];
}, L9vo719e['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9f7v1()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (zjkah, s2da, qzkaj, qtjhl) {
    var fo719v = this['doc'],
        olf5t9 = fo719v['createElementNS'](zjkah, qzkaj || s2da),
        t759f = qtjhl['length'];L9pe1ug6(this, olf5t9), this['currentElement'] = olf5t9, this['locator'] && L9m0cir3(this['locator'], olf5t9);for (var d48s$ = 0x0; t759f > d48s$; d48s$++) {
      var zjkah = qtjhl['getURI'](d48s$),
          zbhj = qtjhl['getValue'](d48s$),
          qzkaj = qtjhl['getQName'](d48s$),
          xy04n_ = fo719v['createAttributeNS'](zjkah, qzkaj);this['locator'] && L9m0cir3(qtjhl['getLocator'](d48s$), xy04n_), xy04n_['value'] = xy04n_['nodeValue'] = zbhj, olf5t9['setAttributeNode'](xy04n_);
    }
  }, 'endElement': function () {
    {
      var _4$ns = this['currentElement'];_4$ns['tagName'];
    }this['currentElement'] = _4$ns['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qf9lt, hljtzq) {
    var e1v7g = this['doc']['createProcessingInstruction'](qf9lt, hljtzq);this['locator'] && L9m0cir3(this['locator'], e1v7g), L9pe1ug6(this, e1v7g);
  }, 'ignorableWhitespace': function () {}, 'characters': function (f7vo5) {
    if (f7vo5 = L9n$s4_8['apply'](this, arguments)) {
      if (this['cdata']) var mriw3c = this['doc']['createCDATASection'](f7vo5);else var mriw3c = this['doc']['createTextNode'](f7vo5);this['currentElement'] ? this['currentElement']['appendChild'](mriw3c) : /^\s*$/['test'](f7vo5) && this['doc']['appendChild'](mriw3c), this['locator'] && L9m0cir3(this['locator'], mriw3c);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (x_0) {
    (this['locator'] = x_0) && (x_0['lineNumber'] = 0x0);
  }, 'comment': function (bja2hk) {
    bja2hk = L9n$s4_8['apply'](this, arguments);var ir03c = this['doc']['createComment'](bja2hk);this['locator'] && L9m0cir3(this['locator'], ir03c), L9pe1ug6(this, ir03c);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (cim, hjlz, r3cimw) {
    var cwri = this['doc']['implementation'];if (cwri && cwri['createDocumentType']) {
      var x_ny04 = cwri['createDocumentType'](cim, hjlz, r3cimw);this['locator'] && L9m0cir3(this['locator'], x_ny04), L9pe1ug6(this, x_ny04);
    }
  }, 'warning': function (fo59tl) {
    console['warn']('[xmldom warning]\t' + fo59tl, L9zqtl5h(this['locator']));
  }, 'error': function (nsx_48) {
    console['error']('[xmldom error]\t' + nsx_48, L9zqtl5h(this['locator']));
  }, 'fatalError': function (w3mir) {
    throw console['error']('[xmldom fatalError]\t' + w3mir, L9zqtl5h(this['locator'])), w3mir;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (v5f97o) {
  L9vo719e['prototype'][v5f97o] = function () {
    return null;
  };
});var L9eogv71 = require('./lllSAX')['XMLReader'],
    L9f7v1 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9l9ot5;