var W = wx.$l;
function L9zkhajq(sd$_4) {
  this['options'] = sd$_4 || { 'locator': {} };
}function L9ic03m(eup16, k2bdja, wi3m) {
  function mrci30(_y0nx3) {
    var jbhk2 = eup16[_y0nx3];!jbhk2 && sd_84 && (jbhk2 = 0x2 == eup16['length'] ? function (jlkz) {
      eup16(_y0nx3, jlkz);
    } : eup16), of75v9[_y0nx3] = jbhk2 && function (hkqza) {
      jbhk2('[xmldom ' + _y0nx3 + ']\t' + hkqza + L9s$8b(wi3m));
    } || function () {};
  }if (!eup16) {
    if (k2bdja instanceof L9ri3cw) return k2bdja;eup16 = k2bdja;
  }var of75v9 = {},
      sd_84 = eup16 instanceof Function;return wi3m = wi3m || {}, mrci30('warning'), mrci30('error'), mrci30('fatalError'), of75v9;
}function L9ri3cw() {
  this['cdata'] = !0x1;
}function L9xn4s_8(lh5tqz, jbhk2a) {
  jbhk2a['lineNumber'] = lh5tqz['lineNumber'], jbhk2a['columnNumber'] = lh5tqz['columnNumber'];
}function L9s$8b(o5t79) {
  return o5t79 ? '\x0a@' + (o5t79['systemId'] || '') + '#[line:' + o5t79['lineNumber'] + ',col:' + o5t79['columnNumber'] + ']' : void 0x0;
}function L9t9fl5(db2s8$, qjlhtz, y3) {
  return 'string' == typeof db2s8$ ? db2s8$['substr'](qjlhtz, y3) : db2s8$['length'] >= qjlhtz + y3 || qjlhtz ? new java['lang']['String'](db2s8$, qjlhtz, y3) + '' : db2s8$;
}function L9vgu6(u6p1ge, akhbjz) {
  u6p1ge['currentElement'] ? u6p1ge['currentElement']['appendChild'](akhbjz) : u6p1ge['doc']['appendChild'](akhbjz);
}L9zkhajq['prototype']['parseFromString'] = function (oeg, zqkaj) {
  var kahq = this['options'],
      o5v97 = new L9d842$(),
      _84sx = kahq['domBuilder'] || new L9ri3cw(),
      t75of = kahq['errorHandler'],
      yr03cm = kahq['locator'],
      icmr30 = kahq['xmlns'] || {},
      t59 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return yr03cm && _84sx['setDocumentLocator'](yr03cm), o5v97['errorHandler'] = L9ic03m(t75of, _84sx, yr03cm), o5v97['domBuilder'] = kahq['domBuilder'] || _84sx, /\/x?html?$/['test'](zqkaj) && (t59['nbsp'] = '\u00a0', t59['copy'] = '©', icmr30[''] = 'http://www.w3.org/1999/xhtml'), icmr30['xml'] = icmr30['xml'] || 'http://www.w3.org/XML/1998/namespace', oeg ? o5v97['parse'](oeg, icmr30, t59) : o5v97['errorHandler']['error']('invalid doc source'), _84sx['doc'];
}, L9ri3cw['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9abjh2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (n0rxy, ja2kh, kdb2, m3iwr) {
    var hb2akj = this['doc'],
        $8n4_s = hb2akj['createElementNS'](n0rxy, kdb2 || ja2kh),
        ltq5f9 = m3iwr['length'];L9vgu6(this, $8n4_s), this['currentElement'] = $8n4_s, this['locator'] && L9xn4s_8(this['locator'], $8n4_s);for (var d2a$b = 0x0; ltq5f9 > d2a$b; d2a$b++) {
      var n0rxy = m3iwr['getURI'](d2a$b),
          qztjh = m3iwr['getValue'](d2a$b),
          kdb2 = m3iwr['getQName'](d2a$b),
          $_s8 = hb2akj['createAttributeNS'](n0rxy, kdb2);this['locator'] && L9xn4s_8(m3iwr['getLocator'](d2a$b), $_s8), $_s8['value'] = $_s8['nodeValue'] = qztjh, $8n4_s['setAttributeNode']($_s8);
    }
  }, 'endElement': function () {
    {
      var v17ug = this['currentElement'];v17ug['tagName'];
    }this['currentElement'] = v17ug['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (vfo759, s4n8$) {
    var m3cyr0 = this['doc']['createProcessingInstruction'](vfo759, s4n8$);this['locator'] && L9xn4s_8(this['locator'], m3cyr0), L9vgu6(this, m3cyr0);
  }, 'ignorableWhitespace': function () {}, 'characters': function (qjztlh) {
    if (qjztlh = L9t9fl5['apply'](this, arguments)) {
      if (this['cdata']) var eguv16 = this['doc']['createCDATASection'](qjztlh);else var eguv16 = this['doc']['createTextNode'](qjztlh);this['currentElement'] ? this['currentElement']['appendChild'](eguv16) : /^\s*$/['test'](qjztlh) && this['doc']['appendChild'](eguv16), this['locator'] && L9xn4s_8(this['locator'], eguv16);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bda) {
    (this['locator'] = bda) && (bda['lineNumber'] = 0x0);
  }, 'comment': function (f5o7v9) {
    f5o7v9 = L9t9fl5['apply'](this, arguments);var icrm30 = this['doc']['createComment'](f5o7v9);this['locator'] && L9xn4s_8(this['locator'], icrm30), L9vgu6(this, icrm30);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vgue1, lhz, d$s48_) {
    var akb2d$ = this['doc']['implementation'];if (akb2d$ && akb2d$['createDocumentType']) {
      var mc3r0 = akb2d$['createDocumentType'](vgue1, lhz, d$s48_);this['locator'] && L9xn4s_8(this['locator'], mc3r0), L9vgu6(this, mc3r0);
    }
  }, 'warning': function (g7v1ue) {
    console['warn']('[xmldom warning]\t' + g7v1ue, L9s$8b(this['locator']));
  }, 'error': function (wi3r) {
    console['error']('[xmldom error]\t' + wi3r, L9s$8b(this['locator']));
  }, 'fatalError': function (d2ak) {
    throw console['error']('[xmldom fatalError]\t' + d2ak, L9s$8b(this['locator'])), d2ak;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (f95lo) {
  L9ri3cw['prototype'][f95lo] = function () {
    return null;
  };
});var L9d842$ = require('./lllSAX')['XMLReader'],
    L9abjh2 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9zkhajq;