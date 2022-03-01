var S = wx.$J;
function j1_yr67(ne5bjp) {
  this['options'] = ne5bjp || { 'locator': {} };
}function j1_zax$h9(ej, ksy7r, $zx9ha) {
  function pbenu(ixahz9) {
    var gl40 = ej[ixahz9];!gl40 && npj5eb && (gl40 = 0x2 == ej['length'] ? function (lubpe4) {
      ej(ixahz9, lubpe4);
    } : ej), di2q8[ixahz9] = gl40 && function (npb5ej) {
      gl40('[xmldom ' + ixahz9 + ']\t' + npb5ej + j1_r7ks6y($zx9ha));
    } || function () {};
  }if (!ej) {
    if (ksy7r instanceof j1_j5pn3) return ksy7r;ej = ksy7r;
  }var di2q8 = {},
      npj5eb = ej instanceof Function;return $zx9ha = $zx9ha || {}, pbenu('warning'), pbenu('error'), pbenu('fatalError'), di2q8;
}function j1_j5pn3() {
  this['cdata'] = !0x1;
}function j1_olc0(uepb4, ai8xz9) {
  ai8xz9['lineNumber'] = uepb4['lineNumber'], ai8xz9['columnNumber'] = uepb4['columnNumber'];
}function j1_r7ks6y(i9hzax) {
  return i9hzax ? '\x0a@' + (i9hzax['systemId'] || '') + '#[line:' + i9hzax['lineNumber'] + ',col:' + i9hzax['columnNumber'] + ']' : void 0x0;
}function j1_ocgl0y(e4u, r67km, gsy0o) {
  return 'string' == typeof e4u ? e4u['substr'](r67km, gsy0o) : e4u['length'] >= r67km + gsy0o || r67km ? new java['lang']['String'](e4u, r67km, gsy0o) + '' : e4u;
}function j1_hz9aix(n4pe5b, blu0c) {
  n4pe5b['currentElement'] ? n4pe5b['currentElement']['appendChild'](blu0c) : n4pe5b['doc']['appendChild'](blu0c);
}j1_yr67['prototype']['parseFromString'] = function (yl, neb4pu) {
  var i2xd8q = this['options'],
      kgyo = new j1_i92(),
      oyl = i2xd8q['domBuilder'] || new j1_j5pn3(),
      n3p5e = i2xd8q['errorHandler'],
      s6krf = i2xd8q['locator'],
      b4lepu = i2xd8q['xmlns'] || {},
      rm7f1q = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return s6krf && oyl['setDocumentLocator'](s6krf), kgyo['errorHandler'] = j1_zax$h9(n3p5e, oyl, s6krf), kgyo['domBuilder'] = i2xd8q['domBuilder'] || oyl, /\/x?html?$/['test'](neb4pu) && (rm7f1q['nbsp'] = '\u00a0', rm7f1q['copy'] = '©', b4lepu[''] = 'http://www.w3.org/1999/xhtml'), b4lepu['xml'] = b4lepu['xml'] || 'http://www.w3.org/XML/1998/namespace', yl ? kgyo['parse'](yl, b4lepu, rm7f1q) : kgyo['errorHandler']['error']('invalid doc source'), oyl['doc'];
}, j1_j5pn3['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_kyo7s6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (iz982, xz8i92, syo67, cloyg0) {
    var q1mfdr = this['doc'],
        f7r61 = q1mfdr['createElementNS'](iz982, syo67 || xz8i92),
        nb4p5e = cloyg0['length'];j1_hz9aix(this, f7r61), this['currentElement'] = f7r61, this['locator'] && j1_olc0(this['locator'], f7r61);for (var d1fmq2 = 0x0; nb4p5e > d1fmq2; d1fmq2++) {
      var iz982 = cloyg0['getURI'](d1fmq2),
          kog0s = cloyg0['getValue'](d1fmq2),
          syo67 = cloyg0['getQName'](d1fmq2),
          j5epn3 = q1mfdr['createAttributeNS'](iz982, syo67);this['locator'] && j1_olc0(cloyg0['getLocator'](d1fmq2), j5epn3), j5epn3['value'] = j5epn3['nodeValue'] = kog0s, f7r61['setAttributeNode'](j5epn3);
    }
  }, 'endElement': function () {
    {
      var hz9ax$ = this['currentElement'];hz9ax$['tagName'];
    }this['currentElement'] = hz9ax$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (q1dm2f, r6fm71) {
    var i18q2 = this['doc']['createProcessingInstruction'](q1dm2f, r6fm71);this['locator'] && j1_olc0(this['locator'], i18q2), j1_hz9aix(this, i18q2);
  }, 'ignorableWhitespace': function () {}, 'characters': function (ax$9hz) {
    if (ax$9hz = j1_ocgl0y['apply'](this, arguments)) {
      if (this['cdata']) var wj5 = this['doc']['createCDATASection'](ax$9hz);else var wj5 = this['doc']['createTextNode'](ax$9hz);this['currentElement'] ? this['currentElement']['appendChild'](wj5) : /^\s*$/['test'](ax$9hz) && this['doc']['appendChild'](wj5), this['locator'] && j1_olc0(this['locator'], wj5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (qfm2d) {
    (this['locator'] = qfm2d) && (qfm2d['lineNumber'] = 0x0);
  }, 'comment': function (p5nb) {
    p5nb = j1_ocgl0y['apply'](this, arguments);var g0lyc = this['doc']['createComment'](p5nb);this['locator'] && j1_olc0(this['locator'], g0lyc), j1_hz9aix(this, g0lyc);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (npje3, r6y7, bn5e4p) {
    var l4ubec = this['doc']['implementation'];if (l4ubec && l4ubec['createDocumentType']) {
      var cugl = l4ubec['createDocumentType'](npje3, r6y7, bn5e4p);this['locator'] && j1_olc0(this['locator'], cugl), j1_hz9aix(this, cugl);
    }
  }, 'warning': function (z$9xh) {
    console['warn']('[xmldom warning]\t' + z$9xh, j1_r7ks6y(this['locator']));
  }, 'error': function (gc4ul0) {
    console['error']('[xmldom error]\t' + gc4ul0, j1_r7ks6y(this['locator']));
  }, 'fatalError': function (c40gul) {
    throw console['error']('[xmldom fatalError]\t' + c40gul, j1_r7ks6y(this['locator'])), c40gul;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d1qf2) {
  j1_j5pn3['prototype'][d1qf2] = function () {
    return null;
  };
});var j1_i92 = require('./jjjSAX')['XMLReader'],
    j1_kyo7s6 = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_yr67;