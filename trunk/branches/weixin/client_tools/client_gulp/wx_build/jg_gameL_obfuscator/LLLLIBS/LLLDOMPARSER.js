var W = wx.$l;
function L9$a2dbk(u6ev1g) {
  this['options'] = u6ev1g || { 'locator': {} };
}function L9n_8xy4(f1ov7, zflq5, qlhzt5) {
  function $82bsd(f95v) {
    var jkbhz = f1ov7[f95v];!jkbhz && ov1g7 && (jkbhz = 0x2 == f1ov7['length'] ? function (l9tqf) {
      f1ov7(f95v, l9tqf);
    } : f1ov7), o5v7[f95v] = jkbhz && function (khja) {
      jkbhz('[xmldom ' + f95v + ']\t' + khja + L9mw3ric(qlhzt5));
    } || function () {};
  }if (!f1ov7) {
    if (zflq5 instanceof L9fv1) return zflq5;f1ov7 = zflq5;
  }var o5v7 = {},
      ov1g7 = f1ov7 instanceof Function;return qlhzt5 = qlhzt5 || {}, $82bsd('warning'), $82bsd('error'), $82bsd('fatalError'), o5v7;
}function L9fv1() {
  this['cdata'] = !0x1;
}function L9j2ahbk(c0ym3, rc03i) {
  rc03i['lineNumber'] = c0ym3['lineNumber'], rc03i['columnNumber'] = c0ym3['columnNumber'];
}function L9mw3ric(a2hj) {
  return a2hj ? '\x0a@' + (a2hj['systemId'] || '') + '#[line:' + a2hj['lineNumber'] + ',col:' + a2hj['columnNumber'] + ']' : void 0x0;
}function L9azhbk(wcir3, $284sd, hq5ztl) {
  return 'string' == typeof wcir3 ? wcir3['substr']($284sd, hq5ztl) : wcir3['length'] >= $284sd + hq5ztl || $284sd ? new java['lang']['String'](wcir3, $284sd, hq5ztl) + '' : wcir3;
}function L9evo971(y30rnx, ov7ge) {
  y30rnx['currentElement'] ? y30rnx['currentElement']['appendChild'](ov7ge) : y30rnx['doc']['appendChild'](ov7ge);
}L9$a2dbk['prototype']['parseFromString'] = function (_x3n0, bz) {
  var evug = this['options'],
      o9f7 = new L9_snx(),
      kzlqh = evug['domBuilder'] || new L9fv1(),
      e179o = evug['errorHandler'],
      n8$_s4 = evug['locator'],
      da2$ = evug['xmlns'] || {},
      ahzjbk = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return n8$_s4 && kzlqh['setDocumentLocator'](n8$_s4), o9f7['errorHandler'] = L9n_8xy4(e179o, kzlqh, n8$_s4), o9f7['domBuilder'] = evug['domBuilder'] || kzlqh, /\/x?html?$/['test'](bz) && (ahzjbk['nbsp'] = '\u00a0', ahzjbk['copy'] = '©', da2$[''] = 'http://www.w3.org/1999/xhtml'), da2$['xml'] = da2$['xml'] || 'http://www.w3.org/XML/1998/namespace', _x3n0 ? o9f7['parse'](_x3n0, da2$, ahzjbk) : o9f7['errorHandler']['error']('invalid doc source'), kzlqh['doc'];
}, L9fv1['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9azkjb()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ev16gu, fo95tl, uge6v, $_8d4) {
    var r3cmy0 = this['doc'],
        q9lft5 = r3cmy0['createElementNS'](ev16gu, uge6v || fo95tl),
        y_nx40 = $_8d4['length'];L9evo971(this, q9lft5), this['currentElement'] = q9lft5, this['locator'] && L9j2ahbk(this['locator'], q9lft5);for (var s$2b8d = 0x0; y_nx40 > s$2b8d; s$2b8d++) {
      var ev16gu = $_8d4['getURI'](s$2b8d),
          lkqjzh = $_8d4['getValue'](s$2b8d),
          uge6v = $_8d4['getQName'](s$2b8d),
          cmrw3i = r3cmy0['createAttributeNS'](ev16gu, uge6v);this['locator'] && L9j2ahbk($_8d4['getLocator'](s$2b8d), cmrw3i), cmrw3i['value'] = cmrw3i['nodeValue'] = lkqjzh, q9lft5['setAttributeNode'](cmrw3i);
    }
  }, 'endElement': function () {
    {
      var a2$sdb = this['currentElement'];a2$sdb['tagName'];
    }this['currentElement'] = a2$sdb['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (e7v1, euv7) {
    var e61vgu = this['doc']['createProcessingInstruction'](e7v1, euv7);this['locator'] && L9j2ahbk(this['locator'], e61vgu), L9evo971(this, e61vgu);
  }, 'ignorableWhitespace': function () {}, 'characters': function (v9e7o) {
    if (v9e7o = L9azhbk['apply'](this, arguments)) {
      if (this['cdata']) var hak2jb = this['doc']['createCDATASection'](v9e7o);else var hak2jb = this['doc']['createTextNode'](v9e7o);this['currentElement'] ? this['currentElement']['appendChild'](hak2jb) : /^\s*$/['test'](v9e7o) && this['doc']['appendChild'](hak2jb), this['locator'] && L9j2ahbk(this['locator'], hak2jb);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (d2jkab) {
    (this['locator'] = d2jkab) && (d2jkab['lineNumber'] = 0x0);
  }, 'comment': function (cr30xy) {
    cr30xy = L9azhbk['apply'](this, arguments);var wci3rm = this['doc']['createComment'](cr30xy);this['locator'] && L9j2ahbk(this['locator'], wci3rm), L9evo971(this, wci3rm);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mr3i0, ry03nx, gveo) {
    var qzlf = this['doc']['implementation'];if (qzlf && qzlf['createDocumentType']) {
      var lf9o5t = qzlf['createDocumentType'](mr3i0, ry03nx, gveo);this['locator'] && L9j2ahbk(this['locator'], lf9o5t), L9evo971(this, lf9o5t);
    }
  }, 'warning': function (j2akd) {
    console['warn']('[xmldom warning]\t' + j2akd, L9mw3ric(this['locator']));
  }, 'error': function (b$ak) {
    console['error']('[xmldom error]\t' + b$ak, L9mw3ric(this['locator']));
  }, 'fatalError': function (jh2bk) {
    throw console['error']('[xmldom fatalError]\t' + jh2bk, L9mw3ric(this['locator'])), jh2bk;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kjhb2) {
  L9fv1['prototype'][kjhb2] = function () {
    return null;
  };
});var L9_snx = require('./lllSAX')['XMLReader'],
    L9azkjb = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9$a2dbk;