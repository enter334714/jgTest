var W = wx.$l;
function L9ov719e(zjqh) {
  this['options'] = zjqh || { 'locator': {} };
}function L9n$4s(_4$, ymr0c, ev1o97) {
  function kqjlzh(d$ba2k) {
    var mcy = _4$[d$ba2k];!mcy && i0mcr && (mcy = 0x2 == _4$['length'] ? function (tqlhz) {
      _4$(d$ba2k, tqlhz);
    } : _4$), zthlq5[d$ba2k] = mcy && function (_30yxn) {
      mcy('[xmldom ' + d$ba2k + ']\t' + _30yxn + L9hbjak2(ev1o97));
    } || function () {};
  }if (!_4$) {
    if (ymr0c instanceof L9ajqzhk) return ymr0c;_4$ = ymr0c;
  }var zthlq5 = {},
      i0mcr = _4$ instanceof Function;return ev1o97 = ev1o97 || {}, kqjlzh('warning'), kqjlzh('error'), kqjlzh('fatalError'), zthlq5;
}function L9ajqzhk() {
  this['cdata'] = !0x1;
}function L9qzklh(crmiw, cym0r3) {
  cym0r3['lineNumber'] = crmiw['lineNumber'], cym0r3['columnNumber'] = crmiw['columnNumber'];
}function L9hbjak2(rcwi) {
  return rcwi ? '\x0a@' + (rcwi['systemId'] || '') + '#[line:' + rcwi['lineNumber'] + ',col:' + rcwi['columnNumber'] + ']' : void 0x0;
}function L9bka2d$(y_0x, y3x0nr, lq5zth) {
  return 'string' == typeof y_0x ? y_0x['substr'](y3x0nr, lq5zth) : y_0x['length'] >= y3x0nr + lq5zth || y3x0nr ? new java['lang']['String'](y_0x, y3x0nr, lq5zth) + '' : y_0x;
}function L9jabk2h(voe71g, r30nxy) {
  voe71g['currentElement'] ? voe71g['currentElement']['appendChild'](r30nxy) : voe71g['doc']['appendChild'](r30nxy);
}L9ov719e['prototype']['parseFromString'] = function (xy84n_, eg16vu) {
  var s48$ = this['options'],
      o9f5l = new L9cwmir(),
      qz5t = s48$['domBuilder'] || new L9ajqzhk(),
      xsn4_ = s48$['errorHandler'],
      _4$sn = s48$['locator'],
      kj2abd = s48$['xmlns'] || {},
      yxnr03 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return _4$sn && qz5t['setDocumentLocator'](_4$sn), o9f5l['errorHandler'] = L9n$4s(xsn4_, qz5t, _4$sn), o9f5l['domBuilder'] = s48$['domBuilder'] || qz5t, /\/x?html?$/['test'](eg16vu) && (yxnr03['nbsp'] = '\u00a0', yxnr03['copy'] = '©', kj2abd[''] = 'http://www.w3.org/1999/xhtml'), kj2abd['xml'] = kj2abd['xml'] || 'http://www.w3.org/XML/1998/namespace', xy84n_ ? o9f5l['parse'](xy84n_, kj2abd, yxnr03) : o9f5l['errorHandler']['error']('invalid doc source'), qz5t['doc'];
}, L9ajqzhk['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9e6pu1g()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ev71o9, sd84_, t5fol9, uegv6) {
    var xy_4n0 = this['doc'],
        qfl5z = xy_4n0['createElementNS'](ev71o9, t5fol9 || sd84_),
        bakhj2 = uegv6['length'];L9jabk2h(this, qfl5z), this['currentElement'] = qfl5z, this['locator'] && L9qzklh(this['locator'], qfl5z);for (var f1o97v = 0x0; bakhj2 > f1o97v; f1o97v++) {
      var ev71o9 = uegv6['getURI'](f1o97v),
          kbajh2 = uegv6['getValue'](f1o97v),
          t5fol9 = uegv6['getQName'](f1o97v),
          xy8_n4 = xy_4n0['createAttributeNS'](ev71o9, t5fol9);this['locator'] && L9qzklh(uegv6['getLocator'](f1o97v), xy8_n4), xy8_n4['value'] = xy8_n4['nodeValue'] = kbajh2, qfl5z['setAttributeNode'](xy8_n4);
    }
  }, 'endElement': function () {
    {
      var ahkjz = this['currentElement'];ahkjz['tagName'];
    }this['currentElement'] = ahkjz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mir03c, jltqz) {
    var khbj2a = this['doc']['createProcessingInstruction'](mir03c, jltqz);this['locator'] && L9qzklh(this['locator'], khbj2a), L9jabk2h(this, khbj2a);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gveu1) {
    if (gveu1 = L9bka2d$['apply'](this, arguments)) {
      if (this['cdata']) var x0_3 = this['doc']['createCDATASection'](gveu1);else var x0_3 = this['doc']['createTextNode'](gveu1);this['currentElement'] ? this['currentElement']['appendChild'](x0_3) : /^\s*$/['test'](gveu1) && this['doc']['appendChild'](x0_3), this['locator'] && L9qzklh(this['locator'], x0_3);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ltzjh) {
    (this['locator'] = ltzjh) && (ltzjh['lineNumber'] = 0x0);
  }, 'comment': function (l95qtf) {
    l95qtf = L9bka2d$['apply'](this, arguments);var g6ve = this['doc']['createComment'](l95qtf);this['locator'] && L9qzklh(this['locator'], g6ve), L9jabk2h(this, g6ve);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jad2kb, n4_8$s, klhjqz) {
    var qzkha = this['doc']['implementation'];if (qzkha && qzkha['createDocumentType']) {
      var vge1u6 = qzkha['createDocumentType'](jad2kb, n4_8$s, klhjqz);this['locator'] && L9qzklh(this['locator'], vge1u6), L9jabk2h(this, vge1u6);
    }
  }, 'warning': function (kba$d) {
    console['warn']('[xmldom warning]\t' + kba$d, L9hbjak2(this['locator']));
  }, 'error': function (lhkzqj) {
    console['error']('[xmldom error]\t' + lhkzqj, L9hbjak2(this['locator']));
  }, 'fatalError': function (tq5zfl) {
    throw console['error']('[xmldom fatalError]\t' + tq5zfl, L9hbjak2(this['locator'])), tq5zfl;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($sdb2a) {
  L9ajqzhk['prototype'][$sdb2a] = function () {
    return null;
  };
});var L9cwmir = require('./lllSAX')['XMLReader'],
    L9e6pu1g = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9ov719e;