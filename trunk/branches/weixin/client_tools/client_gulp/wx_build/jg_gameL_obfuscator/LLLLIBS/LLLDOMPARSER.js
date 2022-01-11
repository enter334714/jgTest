var W = wx.$l;
function L9of9l(d2sba$) {
  this['options'] = d2sba$ || { 'locator': {} };
}function L9yrmc30(ol9ft5, _ynx30, zhjbak) {
  function _84nx(yr0nx3) {
    var eo9v1 = ol9ft5[yr0nx3];!eo9v1 && gvoe && (eo9v1 = 0x2 == ol9ft5['length'] ? function (r0cyx) {
      ol9ft5(yr0nx3, r0cyx);
    } : ol9ft5), s8d$[yr0nx3] = eo9v1 && function (u6vg) {
      eo9v1('[xmldom ' + yr0nx3 + ']\t' + u6vg + L9y4_0x(zhjbak));
    } || function () {};
  }if (!ol9ft5) {
    if (_ynx30 instanceof L9adj2) return _ynx30;ol9ft5 = _ynx30;
  }var s8d$ = {},
      gvoe = ol9ft5 instanceof Function;return zhjbak = zhjbak || {}, _84nx('warning'), _84nx('error'), _84nx('fatalError'), s8d$;
}function L9adj2() {
  this['cdata'] = !0x1;
}function L9ugev17(yxrn0, z5qhlt) {
  z5qhlt['lineNumber'] = yxrn0['lineNumber'], z5qhlt['columnNumber'] = yxrn0['columnNumber'];
}function L9y4_0x(u17) {
  return u17 ? '\x0a@' + (u17['systemId'] || '') + '#[line:' + u17['lineNumber'] + ',col:' + u17['columnNumber'] + ']' : void 0x0;
}function L9f579ot(hkjaz, uv61ge, x3ny_0) {
  return 'string' == typeof hkjaz ? hkjaz['substr'](uv61ge, x3ny_0) : hkjaz['length'] >= uv61ge + x3ny_0 || uv61ge ? new java['lang']['String'](hkjaz, uv61ge, x3ny_0) + '' : hkjaz;
}function L9ns_x(d42s, ov17f) {
  d42s['currentElement'] ? d42s['currentElement']['appendChild'](ov17f) : d42s['doc']['appendChild'](ov17f);
}L9of9l['prototype']['parseFromString'] = function (yr30cm, e1up) {
  var p6eg = this['options'],
      vf95o = new L9xnyr30(),
      ri = p6eg['domBuilder'] || new L9adj2(),
      n30_xy = p6eg['errorHandler'],
      rwcim = p6eg['locator'],
      _4xn0 = p6eg['xmlns'] || {},
      _$s48n = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rwcim && ri['setDocumentLocator'](rwcim), vf95o['errorHandler'] = L9yrmc30(n30_xy, ri, rwcim), vf95o['domBuilder'] = p6eg['domBuilder'] || ri, /\/x?html?$/['test'](e1up) && (_$s48n['nbsp'] = '\u00a0', _$s48n['copy'] = '©', _4xn0[''] = 'http://www.w3.org/1999/xhtml'), _4xn0['xml'] = _4xn0['xml'] || 'http://www.w3.org/XML/1998/namespace', yr30cm ? vf95o['parse'](yr30cm, _4xn0, _$s48n) : vf95o['errorHandler']['error']('invalid doc source'), ri['doc'];
}, L9adj2['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9nxr3y0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (c0x3, lq5zht, up1g6, d28$bs) {
    var zhja = this['doc'],
        t9lfo = zhja['createElementNS'](c0x3, up1g6 || lq5zht),
        n8s$4_ = d28$bs['length'];L9ns_x(this, t9lfo), this['currentElement'] = t9lfo, this['locator'] && L9ugev17(this['locator'], t9lfo);for (var zqjklh = 0x0; n8s$4_ > zqjklh; zqjklh++) {
      var c0x3 = d28$bs['getURI'](zqjklh),
          eu6gv = d28$bs['getValue'](zqjklh),
          up1g6 = d28$bs['getQName'](zqjklh),
          d4s2$8 = zhja['createAttributeNS'](c0x3, up1g6);this['locator'] && L9ugev17(d28$bs['getLocator'](zqjklh), d4s2$8), d4s2$8['value'] = d4s2$8['nodeValue'] = eu6gv, t9lfo['setAttributeNode'](d4s2$8);
    }
  }, 'endElement': function () {
    {
      var eugv7 = this['currentElement'];eugv7['tagName'];
    }this['currentElement'] = eugv7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mciw3r, qtzlf5) {
    var m0rc3y = this['doc']['createProcessingInstruction'](mciw3r, qtzlf5);this['locator'] && L9ugev17(this['locator'], m0rc3y), L9ns_x(this, m0rc3y);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vug) {
    if (vug = L9f579ot['apply'](this, arguments)) {
      if (this['cdata']) var hakj2 = this['doc']['createCDATASection'](vug);else var hakj2 = this['doc']['createTextNode'](vug);this['currentElement'] ? this['currentElement']['appendChild'](hakj2) : /^\s*$/['test'](vug) && this['doc']['appendChild'](hakj2), this['locator'] && L9ugev17(this['locator'], hakj2);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (j2kdba) {
    (this['locator'] = j2kdba) && (j2kdba['lineNumber'] = 0x0);
  }, 'comment': function (fqtz5) {
    fqtz5 = L9f579ot['apply'](this, arguments);var x_sn4 = this['doc']['createComment'](fqtz5);this['locator'] && L9ugev17(this['locator'], x_sn4), L9ns_x(this, x_sn4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (o7f9v1, rxn0y3, lhjqzt) {
    var tlqhj = this['doc']['implementation'];if (tlqhj && tlqhj['createDocumentType']) {
      var vf9o71 = tlqhj['createDocumentType'](o7f9v1, rxn0y3, lhjqzt);this['locator'] && L9ugev17(this['locator'], vf9o71), L9ns_x(this, vf9o71);
    }
  }, 'warning': function (s8d2$b) {
    console['warn']('[xmldom warning]\t' + s8d2$b, L9y4_0x(this['locator']));
  }, 'error': function (mic30r) {
    console['error']('[xmldom error]\t' + mic30r, L9y4_0x(this['locator']));
  }, 'fatalError': function (ql95) {
    throw console['error']('[xmldom fatalError]\t' + ql95, L9y4_0x(this['locator'])), ql95;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jd2kba) {
  L9adj2['prototype'][jd2kba] = function () {
    return null;
  };
});var L9xnyr30 = require('./lllSAX')['XMLReader'],
    L9nxr3y0 = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9of9l;