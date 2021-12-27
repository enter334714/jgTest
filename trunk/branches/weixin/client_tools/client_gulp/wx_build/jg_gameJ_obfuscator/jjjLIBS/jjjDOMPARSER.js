var S = wx.$J;
function j1_s76krf(o7k6) {
  this['options'] = o7k6 || { 'locator': {} };
}function j1_ys0gc(b4ucl0, d8i2x9, iqx2) {
  function g0(cueb4l) {
    var x$h9z = b4ucl0[cueb4l];!x$h9z && lceb4u && (x$h9z = 0x2 == b4ucl0['length'] ? function (ko7s) {
      b4ucl0(cueb4l, ko7s);
    } : b4ucl0), pneb45[cueb4l] = x$h9z && function (u4pen) {
      x$h9z('[xmldom ' + cueb4l + ']\t' + u4pen + j1_j5pw3(iqx2));
    } || function () {};
  }if (!b4ucl0) {
    if (d8i2x9 instanceof j1_bu0c) return d8i2x9;b4ucl0 = d8i2x9;
  }var pneb45 = {},
      lceb4u = b4ucl0 instanceof Function;return iqx2 = iqx2 || {}, g0('warning'), g0('error'), g0('fatalError'), pneb45;
}function j1_bu0c() {
  this['cdata'] = !0x1;
}function j1_yo0skg(ue4pbn, j3vnw5) {
  j3vnw5['lineNumber'] = ue4pbn['lineNumber'], j3vnw5['columnNumber'] = ue4pbn['columnNumber'];
}function j1_j5pw3(y6kog) {
  return y6kog ? '\x0a@' + (y6kog['systemId'] || '') + '#[line:' + y6kog['lineNumber'] + ',col:' + y6kog['columnNumber'] + ']' : void 0x0;
}function j1_a9xiz8(xh9zai, i8qd2, k0gsyo) {
  return 'string' == typeof xh9zai ? xh9zai['substr'](i8qd2, k0gsyo) : xh9zai['length'] >= i8qd2 + k0gsyo || i8qd2 ? new java['lang']['String'](xh9zai, i8qd2, k0gsyo) + '' : xh9zai;
}function j1_jpn5(hiz9x, ky0) {
  hiz9x['currentElement'] ? hiz9x['currentElement']['appendChild'](ky0) : hiz9x['doc']['appendChild'](ky0);
}j1_s76krf['prototype']['parseFromString'] = function (a$hz9, npbje5) {
  var pjbn = this['options'],
      dm1qr = new j1_sgyk0o(),
      buelp4 = pjbn['domBuilder'] || new j1_bu0c(),
      ogsyk0 = pjbn['errorHandler'],
      j5be = pjbn['locator'],
      pe5nb = pjbn['xmlns'] || {},
      ykos7 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return j5be && buelp4['setDocumentLocator'](j5be), dm1qr['errorHandler'] = j1_ys0gc(ogsyk0, buelp4, j5be), dm1qr['domBuilder'] = pjbn['domBuilder'] || buelp4, /\/x?html?$/['test'](npbje5) && (ykos7['nbsp'] = '\u00a0', ykos7['copy'] = '©', pe5nb[''] = 'http://www.w3.org/1999/xhtml'), pe5nb['xml'] = pe5nb['xml'] || 'http://www.w3.org/XML/1998/namespace', a$hz9 ? dm1qr['parse'](a$hz9, pe5nb, ykos7) : dm1qr['errorHandler']['error']('invalid doc source'), buelp4['doc'];
}, j1_bu0c['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_c4uble()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (i8dqx, x9hzai, oks0, s7rk6f) {
    var az8ix9 = this['doc'],
        ep45nb = az8ix9['createElementNS'](i8dqx, oks0 || x9hzai),
        qmd1f = s7rk6f['length'];j1_jpn5(this, ep45nb), this['currentElement'] = ep45nb, this['locator'] && j1_yo0skg(this['locator'], ep45nb);for (var u0lcog = 0x0; qmd1f > u0lcog; u0lcog++) {
      var i8dqx = s7rk6f['getURI'](u0lcog),
          jnbpe5 = s7rk6f['getValue'](u0lcog),
          oks0 = s7rk6f['getQName'](u0lcog),
          syko7 = az8ix9['createAttributeNS'](i8dqx, oks0);this['locator'] && j1_yo0skg(s7rk6f['getLocator'](u0lcog), syko7), syko7['value'] = syko7['nodeValue'] = jnbpe5, ep45nb['setAttributeNode'](syko7);
    }
  }, 'endElement': function () {
    {
      var k6sry7 = this['currentElement'];k6sry7['tagName'];
    }this['currentElement'] = k6sry7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (e5b, bue4pl) {
    var rmk76f = this['doc']['createProcessingInstruction'](e5b, bue4pl);this['locator'] && j1_yo0skg(this['locator'], rmk76f), j1_jpn5(this, rmk76f);
  }, 'ignorableWhitespace': function () {}, 'characters': function (yso67) {
    if (yso67 = j1_a9xiz8['apply'](this, arguments)) {
      if (this['cdata']) var gy6k = this['doc']['createCDATASection'](yso67);else var gy6k = this['doc']['createTextNode'](yso67);this['currentElement'] ? this['currentElement']['appendChild'](gy6k) : /^\s*$/['test'](yso67) && this['doc']['appendChild'](gy6k), this['locator'] && j1_yo0skg(this['locator'], gy6k);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (sgo6y) {
    (this['locator'] = sgo6y) && (sgo6y['lineNumber'] = 0x0);
  }, 'comment': function (azx89i) {
    azx89i = j1_a9xiz8['apply'](this, arguments);var g4ucl0 = this['doc']['createComment'](azx89i);this['locator'] && j1_yo0skg(this['locator'], g4ucl0), j1_jpn5(this, g4ucl0);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nj5ebp, mq7f, qd21mf) {
    var mf1rd = this['doc']['implementation'];if (mf1rd && mf1rd['createDocumentType']) {
      var pn5e3 = mf1rd['createDocumentType'](nj5ebp, mq7f, qd21mf);this['locator'] && j1_yo0skg(this['locator'], pn5e3), j1_jpn5(this, pn5e3);
    }
  }, 'warning': function (l4bcu0) {
    console['warn']('[xmldom warning]\t' + l4bcu0, j1_j5pw3(this['locator']));
  }, 'error': function (lg4c0u) {
    console['error']('[xmldom error]\t' + lg4c0u, j1_j5pw3(this['locator']));
  }, 'fatalError': function (m1rf) {
    throw console['error']('[xmldom fatalError]\t' + m1rf, j1_j5pw3(this['locator'])), m1rf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ax98zi) {
  j1_bu0c['prototype'][ax98zi] = function () {
    return null;
  };
});var j1_sgyk0o = require('./jjjSAX')['XMLReader'],
    j1_c4uble = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_s76krf;