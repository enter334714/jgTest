var S = wx.$J;
function j1_e4nb5(rsk) {
  this['options'] = rsk || { 'locator': {} };
}function j1_gsyk0o(g0cyos, ulc0g4, mrk) {
  function j3v5wn(zihax) {
    var syog = g0cyos[zihax];!syog && lu4eb && (syog = 0x2 == g0cyos['length'] ? function (goksy0) {
      g0cyos(zihax, goksy0);
    } : g0cyos), q2xd[zihax] = syog && function (e45b) {
      syog('[xmldom ' + zihax + ']\t' + e45b + j1_f7r6(mrk));
    } || function () {};
  }if (!g0cyos) {
    if (ulc0g4 instanceof j1_elub) return ulc0g4;g0cyos = ulc0g4;
  }var q2xd = {},
      lu4eb = g0cyos instanceof Function;return mrk = mrk || {}, j3v5wn('warning'), j3v5wn('error'), j3v5wn('fatalError'), q2xd;
}function j1_elub() {
  this['cdata'] = !0x1;
}function j1_lgc4(kgoy0s, r7fm1) {
  r7fm1['lineNumber'] = kgoy0s['lineNumber'], r7fm1['columnNumber'] = kgoy0s['columnNumber'];
}function j1_f7r6(fmr7k) {
  return fmr7k ? '\x0a@' + (fmr7k['systemId'] || '') + '#[line:' + fmr7k['lineNumber'] + ',col:' + fmr7k['columnNumber'] + ']' : void 0x0;
}function j1_kys0go(o0ygl, n3pwj5, hizxa) {
  return 'string' == typeof o0ygl ? o0ygl['substr'](n3pwj5, hizxa) : o0ygl['length'] >= n3pwj5 + hizxa || n3pwj5 ? new java['lang']['String'](o0ygl, n3pwj5, hizxa) + '' : o0ygl;
}function j1_xihaz(z9i2x, q28d1m) {
  z9i2x['currentElement'] ? z9i2x['currentElement']['appendChild'](q28d1m) : z9i2x['doc']['appendChild'](q28d1m);
}j1_e4nb5['prototype']['parseFromString'] = function (sy0k, ycl0go) {
  var lucb = this['options'],
      q1mrf = new j1_m6r1(),
      u0gc = lucb['domBuilder'] || new j1_elub(),
      j5wv = lucb['errorHandler'],
      z9$hxa = lucb['locator'],
      lubc40 = lucb['xmlns'] || {},
      xiz9ah = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return z9$hxa && u0gc['setDocumentLocator'](z9$hxa), q1mrf['errorHandler'] = j1_gsyk0o(j5wv, u0gc, z9$hxa), q1mrf['domBuilder'] = lucb['domBuilder'] || u0gc, /\/x?html?$/['test'](ycl0go) && (xiz9ah['nbsp'] = '\u00a0', xiz9ah['copy'] = '©', lubc40[''] = 'http://www.w3.org/1999/xhtml'), lubc40['xml'] = lubc40['xml'] || 'http://www.w3.org/XML/1998/namespace', sy0k ? q1mrf['parse'](sy0k, lubc40, xiz9ah) : q1mrf['errorHandler']['error']('invalid doc source'), u0gc['doc'];
}, j1_elub['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_ulbpe()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ul4g0c, w3n, gyo0sc, glu4c) {
    var y0gso = this['doc'],
        f7rks6 = y0gso['createElementNS'](ul4g0c, gyo0sc || w3n),
        ublec = glu4c['length'];j1_xihaz(this, f7rks6), this['currentElement'] = f7rks6, this['locator'] && j1_lgc4(this['locator'], f7rks6);for (var ys76k = 0x0; ublec > ys76k; ys76k++) {
      var ul4g0c = glu4c['getURI'](ys76k),
          x9id28 = glu4c['getValue'](ys76k),
          gyo0sc = glu4c['getQName'](ys76k),
          bul4 = y0gso['createAttributeNS'](ul4g0c, gyo0sc);this['locator'] && j1_lgc4(glu4c['getLocator'](ys76k), bul4), bul4['value'] = bul4['nodeValue'] = x9id28, f7rks6['setAttributeNode'](bul4);
    }
  }, 'endElement': function () {
    {
      var di18q = this['currentElement'];di18q['tagName'];
    }this['currentElement'] = di18q['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (f6mrk7, m7r1) {
    var oy6skg = this['doc']['createProcessingInstruction'](f6mrk7, m7r1);this['locator'] && j1_lgc4(this['locator'], oy6skg), j1_xihaz(this, oy6skg);
  }, 'ignorableWhitespace': function () {}, 'characters': function (n5jpeb) {
    if (n5jpeb = j1_kys0go['apply'](this, arguments)) {
      if (this['cdata']) var k76r = this['doc']['createCDATASection'](n5jpeb);else var k76r = this['doc']['createTextNode'](n5jpeb);this['currentElement'] ? this['currentElement']['appendChild'](k76r) : /^\s*$/['test'](n5jpeb) && this['doc']['appendChild'](k76r), this['locator'] && j1_lgc4(this['locator'], k76r);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (x29z8i) {
    (this['locator'] = x29z8i) && (x29z8i['lineNumber'] = 0x0);
  }, 'comment': function (xhz$a9) {
    xhz$a9 = j1_kys0go['apply'](this, arguments);var lbepu4 = this['doc']['createComment'](xhz$a9);this['locator'] && j1_lgc4(this['locator'], lbepu4), j1_xihaz(this, lbepu4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (lu4g, e4nb, kg0soy) {
    var j5wn3p = this['doc']['implementation'];if (j5wn3p && j5wn3p['createDocumentType']) {
      var d1qfm2 = j5wn3p['createDocumentType'](lu4g, e4nb, kg0soy);this['locator'] && j1_lgc4(this['locator'], d1qfm2), j1_xihaz(this, d1qfm2);
    }
  }, 'warning': function (k0ysgo) {
    console['warn']('[xmldom warning]\t' + k0ysgo, j1_f7r6(this['locator']));
  }, 'error': function (bpul) {
    console['error']('[xmldom error]\t' + bpul, j1_f7r6(this['locator']));
  }, 'fatalError': function (qx8i) {
    throw console['error']('[xmldom fatalError]\t' + qx8i, j1_f7r6(this['locator'])), qx8i;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qd21f) {
  j1_elub['prototype'][qd21f] = function () {
    return null;
  };
});var j1_m6r1 = require('./jjjSAX')['XMLReader'],
    j1_ulbpe = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_e4nb5;