var W = wx.$l;
function L9y0n_x3(n3_x0) {
  this['options'] = n3_x0 || { 'locator': {} };
}function L9a2hbj(sbd$8, b2sd, y3n_x0) {
  function gve1u7(_sd84) {
    var x4y0n = sbd$8[_sd84];!x4y0n && o7vg1 && (x4y0n = 0x2 == sbd$8['length'] ? function (icw3rm) {
      sbd$8(_sd84, icw3rm);
    } : sbd$8), $8s42[_sd84] = x4y0n && function (ajqhz) {
      x4y0n('[xmldom ' + _sd84 + ']\t' + ajqhz + L9cm30y(y3n_x0));
    } || function () {};
  }if (!sbd$8) {
    if (b2sd instanceof L9bda2kj) return b2sd;sbd$8 = b2sd;
  }var $8s42 = {},
      o7vg1 = sbd$8 instanceof Function;return y3n_x0 = y3n_x0 || {}, gve1u7('warning'), gve1u7('error'), gve1u7('fatalError'), $8s42;
}function L9bda2kj() {
  this['cdata'] = !0x1;
}function L9yx4_0(rm03y, jhqtlz) {
  jhqtlz['lineNumber'] = rm03y['lineNumber'], jhqtlz['columnNumber'] = rm03y['columnNumber'];
}function L9cm30y(hkqz) {
  return hkqz ? '\x0a@' + (hkqz['systemId'] || '') + '#[line:' + hkqz['lineNumber'] + ',col:' + hkqz['columnNumber'] + ']' : void 0x0;
}function L9vo1f79(dkb$a, kb$d2a, eg6p) {
  return 'string' == typeof dkb$a ? dkb$a['substr'](kb$d2a, eg6p) : dkb$a['length'] >= kb$d2a + eg6p || kb$d2a ? new java['lang']['String'](dkb$a, kb$d2a, eg6p) + '' : dkb$a;
}function L9s_$n84(ftl5, hzkjaq) {
  ftl5['currentElement'] ? ftl5['currentElement']['appendChild'](hzkjaq) : ftl5['doc']['appendChild'](hzkjaq);
}L9y0n_x3['prototype']['parseFromString'] = function (qt9lf, rciwm3) {
  var zakh = this['options'],
      ryc03x = new L9f9tl5(),
      sn8_x4 = zakh['domBuilder'] || new L9bda2kj(),
      qhaz = zakh['errorHandler'],
      lf5ztq = zakh['locator'],
      o5f79 = zakh['xmlns'] || {},
      jqkhlz = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return lf5ztq && sn8_x4['setDocumentLocator'](lf5ztq), ryc03x['errorHandler'] = L9a2hbj(qhaz, sn8_x4, lf5ztq), ryc03x['domBuilder'] = zakh['domBuilder'] || sn8_x4, /\/x?html?$/['test'](rciwm3) && (jqkhlz['nbsp'] = '\u00a0', jqkhlz['copy'] = '©', o5f79[''] = 'http://www.w3.org/1999/xhtml'), o5f79['xml'] = o5f79['xml'] || 'http://www.w3.org/XML/1998/namespace', qt9lf ? ryc03x['parse'](qt9lf, o5f79, jqkhlz) : ryc03x['errorHandler']['error']('invalid doc source'), sn8_x4['doc'];
}, L9bda2kj['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9khlzj()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (evg71o, d84_s, ka, cm3w) {
    var bads$ = this['doc'],
        _s4n8$ = bads$['createElementNS'](evg71o, ka || d84_s),
        s2db = cm3w['length'];L9s_$n84(this, _s4n8$), this['currentElement'] = _s4n8$, this['locator'] && L9yx4_0(this['locator'], _s4n8$);for (var jlhqzk = 0x0; s2db > jlhqzk; jlhqzk++) {
      var evg71o = cm3w['getURI'](jlhqzk),
          zf5 = cm3w['getValue'](jlhqzk),
          ka = cm3w['getQName'](jlhqzk),
          $8d_4 = bads$['createAttributeNS'](evg71o, ka);this['locator'] && L9yx4_0(cm3w['getLocator'](jlhqzk), $8d_4), $8d_4['value'] = $8d_4['nodeValue'] = zf5, _s4n8$['setAttributeNode']($8d_4);
    }
  }, 'endElement': function () {
    {
      var o95t7f = this['currentElement'];o95t7f['tagName'];
    }this['currentElement'] = o95t7f['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ol5tf9, ahzkq) {
    var jlzkhq = this['doc']['createProcessingInstruction'](ol5tf9, ahzkq);this['locator'] && L9yx4_0(this['locator'], jlzkhq), L9s_$n84(this, jlzkhq);
  }, 'ignorableWhitespace': function () {}, 'characters': function (y8n_x4) {
    if (y8n_x4 = L9vo1f79['apply'](this, arguments)) {
      if (this['cdata']) var rwc3i = this['doc']['createCDATASection'](y8n_x4);else var rwc3i = this['doc']['createTextNode'](y8n_x4);this['currentElement'] ? this['currentElement']['appendChild'](rwc3i) : /^\s*$/['test'](y8n_x4) && this['doc']['appendChild'](rwc3i), this['locator'] && L9yx4_0(this['locator'], rwc3i);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($n48s) {
    (this['locator'] = $n48s) && ($n48s['lineNumber'] = 0x0);
  }, 'comment': function (o7v9f5) {
    o7v9f5 = L9vo1f79['apply'](this, arguments);var e6u1gv = this['doc']['createComment'](o7v9f5);this['locator'] && L9yx4_0(this['locator'], e6u1gv), L9s_$n84(this, e6u1gv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (y03, eo17v, cy0r3x) {
    var jklzh = this['doc']['implementation'];if (jklzh && jklzh['createDocumentType']) {
      var yx_n4 = jklzh['createDocumentType'](y03, eo17v, cy0r3x);this['locator'] && L9yx4_0(this['locator'], yx_n4), L9s_$n84(this, yx_n4);
    }
  }, 'warning': function (sd8_) {
    console['warn']('[xmldom warning]\t' + sd8_, L9cm30y(this['locator']));
  }, 'error': function (mric) {
    console['error']('[xmldom error]\t' + mric, L9cm30y(this['locator']));
  }, 'fatalError': function (ev1gu) {
    throw console['error']('[xmldom fatalError]\t' + ev1gu, L9cm30y(this['locator'])), ev1gu;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d2s84$) {
  L9bda2kj['prototype'][d2s84$] = function () {
    return null;
  };
});var L9f9tl5 = require('./lllSAX')['XMLReader'],
    L9khlzj = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9y0n_x3;