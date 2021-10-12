var b = wx.$e;
function ebv2$e(uhpne8) {
  this['options'] = uhpne8 || { 'locator': {} };
}function eph8u3(akg3, zsm_5o, pbnhue) {
  function vq$w2(l1iy74) {
    var pg08h3 = akg3[l1iy74];!pg08h3 && _r5zsm && (pg08h3 = 0x2 == akg3['length'] ? function ($9wv2q) {
      akg3(l1iy74, $9wv2q);
    } : akg3), bv2w[l1iy74] = pg08h3 ? function (ah083g) {
      pg08h3('[xmldom ' + l1iy74 + ']\t' + ah083g + ehg3p0(pbnhue));
    } : function () {};
  }if (!akg3) {
    if (zsm_5o instanceof ebep) return zsm_5o;akg3 = zsm_5o;
  }var bv2w = {},
      _r5zsm = akg3 instanceof Function;return pbnhue = pbnhue || {}, vq$w2('warning'), vq$w2('error'), vq$w2('fatalError'), bv2w;
}function ebep() {
  this['cdata'] = !0x1;
}function erzs6m5(w2$x9, q$vw) {
  q$vw['lineNumber'] = w2$x9['lineNumber'], q$vw['columnNumber'] = w2$x9['columnNumber'];
}function ehg3p0(e2bvw) {
  return e2bvw ? '\x0a@' + (e2bvw['systemId'] || '') + '#[line:' + e2bvw['lineNumber'] + ',col:' + e2bvw['columnNumber'] + ']' : void 0x0;
}function etzo5_(ajdk6, mtyz_o, z_5om) {
  return 'string' == typeof ajdk6 ? ajdk6['substr'](mtyz_o, z_5om) : ajdk6['length'] >= mtyz_o + z_5om || mtyz_o ? new java['lang']['String'](ajdk6, mtyz_o, z_5om) + '' : ajdk6;
}function ersdj(t_yo74, z5ms_o) {
  (t_yo74['currentElement'] || t_yo74['doc'])['appendChild'](z5ms_o);
}ebv2$e['prototype']['parseFromString'] = function (mt_yo7, ewn2v) {
  var otm5 = this['options'],
      yit74 = new ejkdrs(),
      q9x$2w = otm5['domBuilder'] || new ebep(),
      gdkj3a = otm5['errorHandler'],
      sr56d = otm5['locator'],
      t_oy = otm5['xmlns'] || {},
      qx92w = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return sr56d && q9x$2w['setDocumentLocator'](sr56d), yit74['errorHandler'] = eph8u3(gdkj3a, q9x$2w, sr56d), yit74['domBuilder'] = otm5['domBuilder'] || q9x$2w, /\/x?html?$/['test'](ewn2v) && (qx92w['nbsp'] = '\u00a0', qx92w['copy'] = '©', t_oy[''] = 'http://www.w3.org/1999/xhtml'), t_oy['xml'] = t_oy['xml'] || 'http://www.w3.org/XML/1998/namespace', mt_yo7 ? yit74['parse'](mt_yo7, t_oy, qx92w) : yit74['errorHandler']['error']('invalid doc source'), q9x$2w['doc'];
}, ebep['prototype'] = { 'startDocument': function () {
    this['doc'] = new eyi4l17()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rm6, d56zsr, w$ebv, nhebp) {
    var n8uhp = this['doc'],
        yot4 = n8uhp['createElementNS'](rm6, w$ebv || d56zsr),
        uphen = nhebp['length'];ersdj(this, yot4), this['currentElement'] = yot4, this['locator'] && erzs6m5(this['locator'], yot4);for (var vuebnw = 0x0; vuebnw < uphen; vuebnw++) {
      var rm6 = nhebp['getURI'](vuebnw),
          ly41i = nhebp['getValue'](vuebnw),
          w$ebv = nhebp['getQName'](vuebnw),
          i7yl1 = n8uhp['createAttributeNS'](rm6, w$ebv);this['locator'] && erzs6m5(nhebp['getLocator'](vuebnw), i7yl1), i7yl1['value'] = i7yl1['nodeValue'] = ly41i, yot4['setAttributeNode'](i7yl1);
    }
  }, 'endElement': function () {
    var ityo4 = this['currentElement'];ityo4['tagName'], this['currentElement'] = ityo4['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (bupnev, z_ytm) {
    z_ytm = this['doc']['createProcessingInstruction'](bupnev, z_ytm), (this['locator'] && erzs6m5(this['locator'], z_ytm), ersdj(this, z_ytm));
  }, 'ignorableWhitespace': function () {}, 'characters': function (wqv$) {
    var ks65dr;(wqv$ = etzo5_['apply'](this, arguments)) && (ks65dr = this['cdata'] ? this['doc']['createCDATASection'](wqv$) : this['doc']['createTextNode'](wqv$), this['currentElement'] ? this['currentElement']['appendChild'](ks65dr) : /^\s*$/['test'](wqv$) && this['doc']['appendChild'](ks65dr), this['locator'] && erzs6m5(this['locator'], ks65dr));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (a30jg8) {
    (this['locator'] = a30jg8) && (a30jg8['lineNumber'] = 0x0);
  }, 'comment': function (tmz_) {
    tmz_ = etzo5_['apply'](this, arguments);var o4yit7 = this['doc']['createComment'](tmz_);this['locator'] && erzs6m5(this['locator'], o4yit7), ersdj(this, o4yit7);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (r65smz, ymt_, bnev) {
    var bv$w29 = this['doc']['implementation'];bv$w29 && bv$w29['createDocumentType'] && (bnev = bv$w29['createDocumentType'](r65smz, ymt_, bnev), this['locator'] && erzs6m5(this['locator'], bnev), ersdj(this, bnev));
  }, 'warning': function ($wv9q2) {
    console['warn']('[xmldom warning]\t' + $wv9q2, ehg3p0(this['locator']));
  }, 'error': function (r_s5m) {
    console['error']('[xmldom error]\t' + r_s5m, ehg3p0(this['locator']));
  }, 'fatalError': function (j6gdka) {
    throw console['error']('[xmldom fatalError]\t' + j6gdka, ehg3p0(this['locator'])), j6gdka;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (v92$wb) {
  ebep['prototype'][v92$wb] = function () {
    return null;
  };
});var ejkdrs = require('./eeesax')['XMLReader'],
    eyi4l17 = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = ebv2$e;