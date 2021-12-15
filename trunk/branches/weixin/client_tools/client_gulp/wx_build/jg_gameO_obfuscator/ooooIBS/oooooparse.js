var c = wx.$o;
function o_rm85(p5qmtr) {
  this['options'] = p5qmtr || { 'locator': {} };
}function o_ofg49x(c8zpr, cbz8ho, a2lv) {
  function _u3vnl(i91wfx) {
    var yen_ku = c8zpr[i91wfx];!yen_ku && a1d2i6 && (yen_ku = 0x2 == c8zpr['length'] ? function (c8pzm) {
      c8zpr(i91wfx, c8pzm);
    } : c8zpr), fw2id[i91wfx] = yen_ku && function (ob4x9g) {
      yen_ku('[xmldom ' + i91wfx + ']\t' + ob4x9g + o_trsqm5(a2lv));
    } || function () {};
  }if (!c8zpr) {
    if (cbz8ho instanceof o_pzhc8r) return cbz8ho;c8zpr = cbz8ho;
  }var fw2id = {},
      a1d2i6 = c8zpr instanceof Function;return a2lv = a2lv || {}, _u3vnl('warning'), _u3vnl('error'), _u3vnl('fatalError'), fw2id;
}function o_pzhc8r() {
  this['cdata'] = !0x1;
}function o__3vuy(b4ohgz, bzcoh8) {
  bzcoh8['lineNumber'] = b4ohgz['lineNumber'], bzcoh8['columnNumber'] = b4ohgz['columnNumber'];
}function o_trsqm5(z4ghbo) {
  return z4ghbo ? '\x0a@' + (z4ghbo['systemId'] || '') + '#[line:' + z4ghbo['lineNumber'] + ',col:' + z4ghbo['columnNumber'] + ']' : void 0x0;
}function o_d12wi(yn3v_, zcmr, w49fgx) {
  return 'string' == typeof yn3v_ ? yn3v_['substr'](zcmr, w49fgx) : yn3v_['length'] >= zcmr + w49fgx || zcmr ? new java['lang']['String'](yn3v_, zcmr, w49fgx) + '' : yn3v_;
}function o_ke0u(e$jk0y, fwg9x4) {
  e$jk0y['currentElement'] ? e$jk0y['currentElement']['appendChild'](fwg9x4) : e$jk0y['doc']['appendChild'](fwg9x4);
}o_rm85['prototype']['parseFromString'] = function (go8hb, x4hgob) {
  var wd1i2 = this['options'],
      v3y = new o_mts7q5(),
      mz8c = wd1i2['domBuilder'] || new o_pzhc8r(),
      en3y_u = wd1i2['errorHandler'],
      dli2 = wd1i2['locator'],
      hz8bog = wd1i2['xmlns'] || {},
      rsq5tm = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return dli2 && mz8c['setDocumentLocator'](dli2), v3y['errorHandler'] = o_ofg49x(en3y_u, mz8c, dli2), v3y['domBuilder'] = wd1i2['domBuilder'] || mz8c, /\/x?html?$/['test'](x4hgob) && (rsq5tm['nbsp'] = '\u00a0', rsq5tm['copy'] = '©', hz8bog[''] = 'http://www.w3.org/1999/xhtml'), hz8bog['xml'] = hz8bog['xml'] || 'http://www.w3.org/XML/1998/namespace', go8hb ? v3y['parse'](go8hb, hz8bog, rsq5tm) : v3y['errorHandler']['error']('invalid doc source'), mz8c['doc'];
}, o_pzhc8r['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_zgbo()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (w1di62, tqrmp, sq57, xhg4) {
    var pbzh8 = this['doc'],
        fi21w = pbzh8['createElementNS'](w1di62, sq57 || tqrmp),
        ky_$e0 = xhg4['length'];o_ke0u(this, fi21w), this['currentElement'] = fi21w, this['locator'] && o__3vuy(this['locator'], fi21w);for (var kenu_y = 0x0; ky_$e0 > kenu_y; kenu_y++) {
      var w1di62 = xhg4['getURI'](kenu_y),
          kye$0j = xhg4['getValue'](kenu_y),
          sq57 = xhg4['getQName'](kenu_y),
          nkyeu_ = pbzh8['createAttributeNS'](w1di62, sq57);this['locator'] && o__3vuy(xhg4['getLocator'](kenu_y), nkyeu_), nkyeu_['value'] = nkyeu_['nodeValue'] = kye$0j, fi21w['setAttributeNode'](nkyeu_);
    }
  }, 'endElement': function () {
    {
      var v3anu = this['currentElement'];v3anu['tagName'];
    }this['currentElement'] = v3anu['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (l3_u, wd12i6) {
    var q5st7 = this['doc']['createProcessingInstruction'](l3_u, wd12i6);this['locator'] && o__3vuy(this['locator'], q5st7), o_ke0u(this, q5st7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (je$ky) {
    if (je$ky = o_d12wi['apply'](this, arguments)) {
      if (this['cdata']) var gbxo4h = this['doc']['createCDATASection'](je$ky);else var gbxo4h = this['doc']['createTextNode'](je$ky);this['currentElement'] ? this['currentElement']['appendChild'](gbxo4h) : /^\s*$/['test'](je$ky) && this['doc']['appendChild'](gbxo4h), this['locator'] && o__3vuy(this['locator'], gbxo4h);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (jke$0y) {
    (this['locator'] = jke$0y) && (jke$0y['lineNumber'] = 0x0);
  }, 'comment': function (l26vad) {
    l26vad = o_d12wi['apply'](this, arguments);var a6nvl = this['doc']['createComment'](l26vad);this['locator'] && o__3vuy(this['locator'], a6nvl), o_ke0u(this, a6nvl);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (lda, u_k, nvu3al) {
    var n3ual = this['doc']['implementation'];if (n3ual && n3ual['createDocumentType']) {
      var f94xgo = n3ual['createDocumentType'](lda, u_k, nvu3al);this['locator'] && o__3vuy(this['locator'], f94xgo), o_ke0u(this, f94xgo);
    }
  }, 'warning': function (n3ul_) {
    console['warn']('[xmldom warning]\t' + n3ul_, o_trsqm5(this['locator']));
  }, 'error': function (phb8) {
    console['error']('[xmldom error]\t' + phb8, o_trsqm5(this['locator']));
  }, 'fatalError': function (eu3_ny) {
    throw console['error']('[xmldom fatalError]\t' + eu3_ny, o_trsqm5(this['locator'])), eu3_ny;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (k0ey) {
  o_pzhc8r['prototype'][k0ey] = function () {
    return null;
  };
});var o_mts7q5 = require('./oooSAX')['XMLReader'],
    o_zgbo = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_rm85;