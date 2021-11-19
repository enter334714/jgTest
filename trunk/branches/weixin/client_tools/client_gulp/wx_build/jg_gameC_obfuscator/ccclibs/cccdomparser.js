var p = wx.$h;
function a_sd15mc(c5tds) {
  this['options'] = c5tds || { 'locator': {} };
}function a_nv2rx(e$86hk, s1m5, st31) {
  function p2wn(j347ft) {
    var e6k8$h = e$86hk[j347ft];!e6k8$h && xrv2nw && (e6k8$h = 0x2 == e$86hk['length'] ? function (yibe$o) {
      e$86hk(j347ft, yibe$o);
    } : e$86hk), h_vg0[j347ft] = e6k8$h && function (apr7w) {
      e6k8$h('[xmldom ' + j347ft + ']\t' + apr7w + a_nv2r_(st31));
    } || function () {};
  }if (!e$86hk) {
    if (s1m5 instanceof a_vrxn2_) return s1m5;e$86hk = s1m5;
  }var h_vg0 = {},
      xrv2nw = e$86hk instanceof Function;return st31 = st31 || {}, p2wn('warning'), p2wn('error'), p2wn('fatalError'), h_vg0;
}function a_vrxn2_() {
  this['cdata'] = !0x1;
}function a_ct1sd5(mcdls, a7f34) {
  a7f34['lineNumber'] = mcdls['lineNumber'], a7f34['columnNumber'] = mcdls['columnNumber'];
}function a_nv2r_(obi9z) {
  return obi9z ? '\x0a@' + (obi9z['systemId'] || '') + '#[line:' + obi9z['lineNumber'] + ',col:' + obi9z['columnNumber'] + ']' : void 0x0;
}function a_g_x0(k_h80g, $ebyo, by9izo) {
  return 'string' == typeof k_h80g ? k_h80g['substr']($ebyo, by9izo) : k_h80g['length'] >= $ebyo + by9izo || $ebyo ? new java['lang']['String'](k_h80g, $ebyo, by9izo) + '' : k_h80g;
}function a_i9obzy(dsc5l, t34j) {
  dsc5l['currentElement'] ? dsc5l['currentElement']['appendChild'](t34j) : dsc5l['doc']['appendChild'](t34j);
}a_sd15mc['prototype']['parseFromString'] = function (jf37t4, biz9) {
  var _xn2vr = this['options'],
      xn2_ = new a_zib9oy(),
      j51s = _xn2vr['domBuilder'] || new a_vrxn2_(),
      vh0gx_ = _xn2vr['errorHandler'],
      xgv = _xn2vr['locator'],
      w2nrxp = _xn2vr['xmlns'] || {},
      t1js = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xgv && j51s['setDocumentLocator'](xgv), xn2_['errorHandler'] = a_nv2rx(vh0gx_, j51s, xgv), xn2_['domBuilder'] = _xn2vr['domBuilder'] || j51s, /\/x?html?$/['test'](biz9) && (t1js['nbsp'] = '\u00a0', t1js['copy'] = '©', w2nrxp[''] = 'http://www.w3.org/1999/xhtml'), w2nrxp['xml'] = w2nrxp['xml'] || 'http://www.w3.org/XML/1998/namespace', jf37t4 ? xn2_['parse'](jf37t4, w2nrxp, t1js) : xn2_['errorHandler']['error']('invalid doc source'), j51s['doc'];
}, a_vrxn2_['prototype'] = { 'startDocument': function () {
    this['doc'] = new a__g8hv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mcd15s, x2gnv, vh8_0, _2ng) {
    var mc1s5 = this['doc'],
        j3tf17 = mc1s5['createElementNS'](mcd15s, vh8_0 || x2gnv),
        oy$ie = _2ng['length'];a_i9obzy(this, j3tf17), this['currentElement'] = j3tf17, this['locator'] && a_ct1sd5(this['locator'], j3tf17);for (var eyi$o = 0x0; oy$ie > eyi$o; eyi$o++) {
      var mcd15s = _2ng['getURI'](eyi$o),
          boyz9q = _2ng['getValue'](eyi$o),
          vh8_0 = _2ng['getQName'](eyi$o),
          ek6$yi = mc1s5['createAttributeNS'](mcd15s, vh8_0);this['locator'] && a_ct1sd5(_2ng['getLocator'](eyi$o), ek6$yi), ek6$yi['value'] = ek6$yi['nodeValue'] = boyz9q, j3tf17['setAttributeNode'](ek6$yi);
    }
  }, 'endElement': function () {
    {
      var x2_ng = this['currentElement'];x2_ng['tagName'];
    }this['currentElement'] = x2_ng['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (clmd5s, v8_0hg) {
    var t37f = this['doc']['createProcessingInstruction'](clmd5s, v8_0hg);this['locator'] && a_ct1sd5(this['locator'], t37f), a_i9obzy(this, t37f);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_vg02) {
    if (_vg02 = a_g_x0['apply'](this, arguments)) {
      if (this['cdata']) var g_vh0x = this['doc']['createCDATASection'](_vg02);else var g_vh0x = this['doc']['createTextNode'](_vg02);this['currentElement'] ? this['currentElement']['appendChild'](g_vh0x) : /^\s*$/['test'](_vg02) && this['doc']['appendChild'](g_vh0x), this['locator'] && a_ct1sd5(this['locator'], g_vh0x);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($k68eh) {
    (this['locator'] = $k68eh) && ($k68eh['lineNumber'] = 0x0);
  }, 'comment': function (kiy) {
    kiy = a_g_x0['apply'](this, arguments);var mcdl = this['doc']['createComment'](kiy);this['locator'] && a_ct1sd5(this['locator'], mcdl), a_i9obzy(this, mcdl);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (g20xv_, dsmc1, tf43j7) {
    var _08kgh = this['doc']['implementation'];if (_08kgh && _08kgh['createDocumentType']) {
      var jt1s5 = _08kgh['createDocumentType'](g20xv_, dsmc1, tf43j7);this['locator'] && a_ct1sd5(this['locator'], jt1s5), a_i9obzy(this, jt1s5);
    }
  }, 'warning': function (_kg8) {
    console['warn']('[xmldom warning]\t' + _kg8, a_nv2r_(this['locator']));
  }, 'error': function (_hv80) {
    console['error']('[xmldom error]\t' + _hv80, a_nv2r_(this['locator']));
  }, 'fatalError': function (ctjfs) {
    throw console['error']('[xmldom fatalError]\t' + ctjfs, a_nv2r_(this['locator'])), ctjfs;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (sjc1f) {
  a_vrxn2_['prototype'][sjc1f] = function () {
    return null;
  };
});var a_zib9oy = require('./cccsax')['XMLReader'],
    a__g8hv = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_sd15mc;