var Y = wx.$M;
function M_o64_7(te2z8) {
  this['options'] = te2z8 || { 'locator': {} };
}function M_casg6o(ih7mnj, pzet8, xk9uy1) {
  function s6j_7(aegc8o) {
    var wdfbrv = ih7mnj[aegc8o];!wdfbrv && fdvb && (wdfbrv = 0x2 == ih7mnj['length'] ? function (cog6as) {
      ih7mnj(aegc8o, cog6as);
    } : ih7mnj), rvx9k[aegc8o] = wdfbrv && function (et28z) {
      wdfbrv('[xmldom ' + aegc8o + ']\t' + et28z + M_og68(xk9uy1));
    } || function () {};
  }if (!ih7mnj) {
    if (pzet8 instanceof M_ld$0) return pzet8;ih7mnj = pzet8;
  }var rvx9k = {},
      fdvb = ih7mnj instanceof Function;return xk9uy1 = xk9uy1 || {}, s6j_7('warning'), s6j_7('error'), s6j_7('fatalError'), rvx9k;
}function M_ld$0() {
  this['cdata'] = !0x1;
}function M_etca(v1frw9, o764) {
  o764['lineNumber'] = v1frw9['lineNumber'], o764['columnNumber'] = v1frw9['columnNumber'];
}function M_og68(go46) {
  return go46 ? '\x0a@' + (go46['systemId'] || '') + '#[line:' + go46['lineNumber'] + ',col:' + go46['columnNumber'] + ']' : void 0x0;
}function M_fwv9(yk9x1, h5mni, yuxqk) {
  return 'string' == typeof yk9x1 ? yk9x1['substr'](h5mni, yuxqk) : yk9x1['length'] >= h5mni + yuxqk || h5mni ? new java['lang']['String'](yk9x1, h5mni, yuxqk) + '' : yk9x1;
}function M_ih7nmj(ceat2, yuk9x) {
  ceat2['currentElement'] ? ceat2['currentElement']['appendChild'](yuk9x) : ceat2['doc']['appendChild'](yuk9x);
}M_o64_7['prototype']['parseFromString'] = function (g_6s4o, a6g4s) {
  var age8oc = this['options'],
      oage = new M_wb9rvf(),
      wd$f0 = age8oc['domBuilder'] || new M_ld$0(),
      ept8z = age8oc['errorHandler'],
      vrx1k = age8oc['locator'],
      nil$0 = age8oc['xmlns'] || {},
      fwb0d = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return vrx1k && wd$f0['setDocumentLocator'](vrx1k), oage['errorHandler'] = M_casg6o(ept8z, wd$f0, vrx1k), oage['domBuilder'] = age8oc['domBuilder'] || wd$f0, /\/x?html?$/['test'](a6g4s) && (fwb0d['nbsp'] = '\u00a0', fwb0d['copy'] = '©', nil$0[''] = 'http://www.w3.org/1999/xhtml'), nil$0['xml'] = nil$0['xml'] || 'http://www.w3.org/XML/1998/namespace', g_6s4o ? oage['parse'](g_6s4o, nil$0, fwb0d) : oage['errorHandler']['error']('invalid doc source'), wd$f0['doc'];
}, M_ld$0['prototype'] = { 'startDocument': function () {
    this['doc'] = new M_bvwr9()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ky1ux, n5$, hj5mni, bfw9v) {
    var $0dfb = this['doc'],
        bfdrw = $0dfb['createElementNS'](ky1ux, hj5mni || n5$),
        yu9k1x = bfw9v['length'];M_ih7nmj(this, bfdrw), this['currentElement'] = bfdrw, this['locator'] && M_etca(this['locator'], bfdrw);for (var i5d0l = 0x0; yu9k1x > i5d0l; i5d0l++) {
      var ky1ux = bfw9v['getURI'](i5d0l),
          y1uk9 = bfw9v['getValue'](i5d0l),
          hj5mni = bfw9v['getQName'](i5d0l),
          cs6oag = $0dfb['createAttributeNS'](ky1ux, hj5mni);this['locator'] && M_etca(bfw9v['getLocator'](i5d0l), cs6oag), cs6oag['value'] = cs6oag['nodeValue'] = y1uk9, bfdrw['setAttributeNode'](cs6oag);
    }
  }, 'endElement': function () {
    {
      var ur9k = this['currentElement'];ur9k['tagName'];
    }this['currentElement'] = ur9k['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (r9bfv, urx) {
    var $vwdfb = this['doc']['createProcessingInstruction'](r9bfv, urx);this['locator'] && M_etca(this['locator'], $vwdfb), M_ih7nmj(this, $vwdfb);
  }, 'ignorableWhitespace': function () {}, 'characters': function (imnhl) {
    if (imnhl = M_fwv9['apply'](this, arguments)) {
      if (this['cdata']) var kxu19r = this['doc']['createCDATASection'](imnhl);else var kxu19r = this['doc']['createTextNode'](imnhl);this['currentElement'] ? this['currentElement']['appendChild'](kxu19r) : /^\s*$/['test'](imnhl) && this['doc']['appendChild'](kxu19r), this['locator'] && M_etca(this['locator'], kxu19r);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wfv9br) {
    (this['locator'] = wfv9br) && (wfv9br['lineNumber'] = 0x0);
  }, 'comment': function (ihjm) {
    ihjm = M_fwv9['apply'](this, arguments);var k91yx = this['doc']['createComment'](ihjm);this['locator'] && M_etca(this['locator'], k91yx), M_ih7nmj(this, k91yx);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rbwvdf, l$5b, s47o6_) {
    var g6as4o = this['doc']['implementation'];if (g6as4o && g6as4o['createDocumentType']) {
      var df0$b = g6as4o['createDocumentType'](rbwvdf, l$5b, s47o6_);this['locator'] && M_etca(this['locator'], df0$b), M_ih7nmj(this, df0$b);
    }
  }, 'warning': function (w9fb) {
    console['warn']('[xmldom warning]\t' + w9fb, M_og68(this['locator']));
  }, 'error': function (h50inl) {
    console['error']('[xmldom error]\t' + h50inl, M_og68(this['locator']));
  }, 'fatalError': function (jni7hm) {
    throw console['error']('[xmldom fatalError]\t' + jni7hm, M_og68(this['locator'])), jni7hm;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ec2ga8) {
  M_ld$0['prototype'][ec2ga8] = function () {
    return null;
  };
});var M_wb9rvf = require('./mmmSAX')['XMLReader'],
    M_bvwr9 = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_o64_7;