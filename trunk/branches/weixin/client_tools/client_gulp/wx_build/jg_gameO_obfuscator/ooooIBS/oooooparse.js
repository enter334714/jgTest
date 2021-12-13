var c = wx.$o;
function o_n_3ul(gbohz) {
  this['options'] = gbohz || { 'locator': {} };
}function o_i1fw9x(eyn_k, b8ohcz, c8rp5m) {
  function xf9wi1(fw921) {
    var hbog = eyn_k[fw921];!hbog && p8rcz && (hbog = 0x2 == eyn_k['length'] ? function (vln3_) {
      eyn_k(fw921, vln3_);
    } : eyn_k), n_uek[fw921] = hbog && function (q5mrt) {
      hbog('[xmldom ' + fw921 + ']\t' + q5mrt + o_m5ts(c8rp5m));
    } || function () {};
  }if (!eyn_k) {
    if (b8ohcz instanceof o_ghbz4o) return b8ohcz;eyn_k = b8ohcz;
  }var n_uek = {},
      p8rcz = eyn_k instanceof Function;return c8rp5m = c8rp5m || {}, xf9wi1('warning'), xf9wi1('error'), xf9wi1('fatalError'), n_uek;
}function o_ghbz4o() {
  this['cdata'] = !0x1;
}function o_g8bozh(ueky_0, i1f2w9) {
  i1f2w9['lineNumber'] = ueky_0['lineNumber'], i1f2w9['columnNumber'] = ueky_0['columnNumber'];
}function o_m5ts(bgho4z) {
  return bgho4z ? '\x0a@' + (bgho4z['systemId'] || '') + '#[line:' + bgho4z['lineNumber'] + ',col:' + bgho4z['columnNumber'] + ']' : void 0x0;
}function o_bohxg4(val6d3, hbx4go, i6wd12) {
  return 'string' == typeof val6d3 ? val6d3['substr'](hbx4go, i6wd12) : val6d3['length'] >= hbx4go + i6wd12 || hbx4go ? new java['lang']['String'](val6d3, hbx4go, i6wd12) + '' : val6d3;
}function o_bh4zo(x4gw, xf49w1) {
  x4gw['currentElement'] ? x4gw['currentElement']['appendChild'](xf49w1) : x4gw['doc']['appendChild'](xf49w1);
}o_n_3ul['prototype']['parseFromString'] = function (ue_kn, hpzcb) {
  var z8mpcr = this['options'],
      di1f2w = new o_if1(),
      _nuey3 = z8mpcr['domBuilder'] || new o_ghbz4o(),
      e$0y_k = z8mpcr['errorHandler'],
      bhczo8 = z8mpcr['locator'],
      d62v = z8mpcr['xmlns'] || {},
      $yekj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return bhczo8 && _nuey3['setDocumentLocator'](bhczo8), di1f2w['errorHandler'] = o_i1fw9x(e$0y_k, _nuey3, bhczo8), di1f2w['domBuilder'] = z8mpcr['domBuilder'] || _nuey3, /\/x?html?$/['test'](hpzcb) && ($yekj['nbsp'] = '\u00a0', $yekj['copy'] = '©', d62v[''] = 'http://www.w3.org/1999/xhtml'), d62v['xml'] = d62v['xml'] || 'http://www.w3.org/XML/1998/namespace', ue_kn ? di1f2w['parse'](ue_kn, d62v, $yekj) : di1f2w['errorHandler']['error']('invalid doc source'), _nuey3['doc'];
}, o_ghbz4o['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_ho8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (if129, pchbz8, di2w1f, c58p) {
    var $k_0 = this['doc'],
        f1x49w = $k_0['createElementNS'](if129, di2w1f || pchbz8),
        gob4x = c58p['length'];o_bh4zo(this, f1x49w), this['currentElement'] = f1x49w, this['locator'] && o_g8bozh(this['locator'], f1x49w);for (var yeu3n_ = 0x0; gob4x > yeu3n_; yeu3n_++) {
      var if129 = c58p['getURI'](yeu3n_),
          og4f9 = c58p['getValue'](yeu3n_),
          di2w1f = c58p['getQName'](yeu3n_),
          tpcm = $k_0['createAttributeNS'](if129, di2w1f);this['locator'] && o_g8bozh(c58p['getLocator'](yeu3n_), tpcm), tpcm['value'] = tpcm['nodeValue'] = og4f9, f1x49w['setAttributeNode'](tpcm);
    }
  }, 'endElement': function () {
    {
      var hzcbo = this['currentElement'];hzcbo['tagName'];
    }this['currentElement'] = hzcbo['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rtqms5, iwfd21) {
    var zb8gh = this['doc']['createProcessingInstruction'](rtqms5, iwfd21);this['locator'] && o_g8bozh(this['locator'], zb8gh), o_bh4zo(this, zb8gh);
  }, 'ignorableWhitespace': function () {}, 'characters': function (nulav) {
    if (nulav = o_bohxg4['apply'](this, arguments)) {
      if (this['cdata']) var vld6a = this['doc']['createCDATASection'](nulav);else var vld6a = this['doc']['createTextNode'](nulav);this['currentElement'] ? this['currentElement']['appendChild'](vld6a) : /^\s*$/['test'](nulav) && this['doc']['appendChild'](vld6a), this['locator'] && o_g8bozh(this['locator'], vld6a);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (w9fg4) {
    (this['locator'] = w9fg4) && (w9fg4['lineNumber'] = 0x0);
  }, 'comment': function (o4fg) {
    o4fg = o_bohxg4['apply'](this, arguments);var a6l3dv = this['doc']['createComment'](o4fg);this['locator'] && o_g8bozh(this['locator'], a6l3dv), o_bh4zo(this, a6l3dv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (hzb8og, $ey0_k, _ky0ue) {
    var bozg = this['doc']['implementation'];if (bozg && bozg['createDocumentType']) {
      var ptc = bozg['createDocumentType'](hzb8og, $ey0_k, _ky0ue);this['locator'] && o_g8bozh(this['locator'], ptc), o_bh4zo(this, ptc);
    }
  }, 'warning': function (p8bhzc) {
    console['warn']('[xmldom warning]\t' + p8bhzc, o_m5ts(this['locator']));
  }, 'error': function (bzhoc) {
    console['error']('[xmldom error]\t' + bzhoc, o_m5ts(this['locator']));
  }, 'fatalError': function (r5mtpc) {
    throw console['error']('[xmldom fatalError]\t' + r5mtpc, o_m5ts(this['locator'])), r5mtpc;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zbc8ho) {
  o_ghbz4o['prototype'][zbc8ho] = function () {
    return null;
  };
});var o_if1 = require('./oooSAX')['XMLReader'],
    o_ho8 = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_n_3ul;