var S = wx.$J;
function j1_z2x(gs0yo) {
  this['options'] = gs0yo || { 'locator': {} };
}function j1_fm2qd(m16r7, clog0, ks7y6r) {
  function o67(n5wv3) {
    var lguc0o = m16r7[n5wv3];!lguc0o && qr17mf && (lguc0o = 0x2 == m16r7['length'] ? function (r71m6) {
      m16r7(n5wv3, r71m6);
    } : m16r7), f12qd[n5wv3] = lguc0o && function (ax8zi) {
      lguc0o('[xmldom ' + n5wv3 + ']\t' + ax8zi + j1_pleb(ks7y6r));
    } || function () {};
  }if (!m16r7) {
    if (clog0 instanceof j1_x9z8i2) return clog0;m16r7 = clog0;
  }var f12qd = {},
      qr17mf = m16r7 instanceof Function;return ks7y6r = ks7y6r || {}, o67('warning'), o67('error'), o67('fatalError'), f12qd;
}function j1_x9z8i2() {
  this['cdata'] = !0x1;
}function j1_dr1qm(glyco, lp4ebu) {
  lp4ebu['lineNumber'] = glyco['lineNumber'], lp4ebu['columnNumber'] = glyco['columnNumber'];
}function j1_pleb(ne4bpu) {
  return ne4bpu ? '\x0a@' + (ne4bpu['systemId'] || '') + '#[line:' + ne4bpu['lineNumber'] + ',col:' + ne4bpu['columnNumber'] + ']' : void 0x0;
}function j1_o0ly(kyso, ucl04, q8i21) {
  return 'string' == typeof kyso ? kyso['substr'](ucl04, q8i21) : kyso['length'] >= ucl04 + q8i21 || ucl04 ? new java['lang']['String'](kyso, ucl04, q8i21) + '' : kyso;
}function j1_d2q81m(yk7, ys0gok) {
  yk7['currentElement'] ? yk7['currentElement']['appendChild'](ys0gok) : yk7['doc']['appendChild'](ys0gok);
}j1_z2x['prototype']['parseFromString'] = function ($xa9zh, lug0c) {
  var y7k6sr = this['options'],
      l0bcu = new j1_lupb4(),
      jv5wn3 = y7k6sr['domBuilder'] || new j1_x9z8i2(),
      bplue4 = y7k6sr['errorHandler'],
      cgy0l = y7k6sr['locator'],
      id29x8 = y7k6sr['xmlns'] || {},
      xahzi = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cgy0l && jv5wn3['setDocumentLocator'](cgy0l), l0bcu['errorHandler'] = j1_fm2qd(bplue4, jv5wn3, cgy0l), l0bcu['domBuilder'] = y7k6sr['domBuilder'] || jv5wn3, /\/x?html?$/['test'](lug0c) && (xahzi['nbsp'] = '\u00a0', xahzi['copy'] = '©', id29x8[''] = 'http://www.w3.org/1999/xhtml'), id29x8['xml'] = id29x8['xml'] || 'http://www.w3.org/XML/1998/namespace', $xa9zh ? l0bcu['parse']($xa9zh, id29x8, xahzi) : l0bcu['errorHandler']['error']('invalid doc source'), jv5wn3['doc'];
}, j1_x9z8i2['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_iazx8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (frm716, pl4bue, n54pb, izxa8) {
    var rmqf1d = this['doc'],
        f6kr7 = rmqf1d['createElementNS'](frm716, n54pb || pl4bue),
        xzi9 = izxa8['length'];j1_d2q81m(this, f6kr7), this['currentElement'] = f6kr7, this['locator'] && j1_dr1qm(this['locator'], f6kr7);for (var ucol0g = 0x0; xzi9 > ucol0g; ucol0g++) {
      var frm716 = izxa8['getURI'](ucol0g),
          enu4pb = izxa8['getValue'](ucol0g),
          n54pb = izxa8['getQName'](ucol0g),
          jb5npe = rmqf1d['createAttributeNS'](frm716, n54pb);this['locator'] && j1_dr1qm(izxa8['getLocator'](ucol0g), jb5npe), jb5npe['value'] = jb5npe['nodeValue'] = enu4pb, f6kr7['setAttributeNode'](jb5npe);
    }
  }, 'endElement': function () {
    {
      var jpn53w = this['currentElement'];jpn53w['tagName'];
    }this['currentElement'] = jpn53w['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (m1dfrq, mrd1) {
    var wj53 = this['doc']['createProcessingInstruction'](m1dfrq, mrd1);this['locator'] && j1_dr1qm(this['locator'], wj53), j1_d2q81m(this, wj53);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xz892i) {
    if (xz892i = j1_o0ly['apply'](this, arguments)) {
      if (this['cdata']) var u40clg = this['doc']['createCDATASection'](xz892i);else var u40clg = this['doc']['createTextNode'](xz892i);this['currentElement'] ? this['currentElement']['appendChild'](u40clg) : /^\s*$/['test'](xz892i) && this['doc']['appendChild'](u40clg), this['locator'] && j1_dr1qm(this['locator'], u40clg);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rf1mq) {
    (this['locator'] = rf1mq) && (rf1mq['lineNumber'] = 0x0);
  }, 'comment': function (o0skg) {
    o0skg = j1_o0ly['apply'](this, arguments);var f1r76 = this['doc']['createComment'](o0skg);this['locator'] && j1_dr1qm(this['locator'], f1r76), j1_d2q81m(this, f1r76);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gykos0, fq17, hizax9) {
    var rfm1q7 = this['doc']['implementation'];if (rfm1q7 && rfm1q7['createDocumentType']) {
      var di1 = rfm1q7['createDocumentType'](gykos0, fq17, hizax9);this['locator'] && j1_dr1qm(this['locator'], di1), j1_d2q81m(this, di1);
    }
  }, 'warning': function (p5nbj) {
    console['warn']('[xmldom warning]\t' + p5nbj, j1_pleb(this['locator']));
  }, 'error': function (m17qfr) {
    console['error']('[xmldom error]\t' + m17qfr, j1_pleb(this['locator']));
  }, 'fatalError': function (lep4u) {
    throw console['error']('[xmldom fatalError]\t' + lep4u, j1_pleb(this['locator'])), lep4u;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (frm7k6) {
  j1_x9z8i2['prototype'][frm7k6] = function () {
    return null;
  };
});var j1_lupb4 = require('./jjjSAX')['XMLReader'],
    j1_iazx8 = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_z2x;