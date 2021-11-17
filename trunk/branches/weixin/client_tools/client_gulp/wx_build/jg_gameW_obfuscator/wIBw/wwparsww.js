var s = wx.$W;
function wcrgdkb(fjswon) {
  this['options'] = fjswon || { 'locator': {} };
}function wavx$y9(dbrkg, c50g8t, t8u05) {
  function tg085(fjz13) {
    var ya9vx = dbrkg[fjz13];!ya9vx && a$9lyv && (ya9vx = 0x2 == dbrkg['length'] ? function (ewznjf) {
      dbrkg(fjz13, ewznjf);
    } : dbrkg), fwzen[fjz13] = ya9vx && function (bkdrx) {
      ya9vx('[xmldom ' + fjz13 + ']\t' + bkdrx + wfwjzn(t8u05));
    } || function () {};
  }if (!dbrkg) {
    if (c50g8t instanceof wgcb08) return c50g8t;dbrkg = c50g8t;
  }var fwzen = {},
      a$9lyv = dbrkg instanceof Function;return t8u05 = t8u05 || {}, tg085('warning'), tg085('error'), tg085('fatalError'), fwzen;
}function wgcb08() {
  this['cdata'] = !0x1;
}function whq4p6u(mo6sq, q4mo6) {
  q4mo6['lineNumber'] = mo6sq['lineNumber'], q4mo6['columnNumber'] = mo6sq['columnNumber'];
}function wfwjzn(e13j) {
  return e13j ? '\x0a@' + (e13j['systemId'] || '') + '#[line:' + e13j['lineNumber'] + ',col:' + e13j['columnNumber'] + ']' : void 0x0;
}function we23f(uh5t80, sfjon, qwnsom) {
  return 'string' == typeof uh5t80 ? uh5t80['substr'](sfjon, qwnsom) : uh5t80['length'] >= sfjon + qwnsom || sfjon ? new java['lang']['String'](uh5t80, sfjon, qwnsom) + '' : uh5t80;
}function wz1ef3j(fwzje1, dkxr) {
  fwzje1['currentElement'] ? fwzje1['currentElement']['appendChild'](dkxr) : fwzje1['doc']['appendChild'](dkxr);
}wcrgdkb['prototype']['parseFromString'] = function (p8ht, bgc850) {
  var vrx$ay = this['options'],
      sfjnw = new wrax(),
      rdgx = vrx$ay['domBuilder'] || new wgcb08(),
      neojw = vrx$ay['errorHandler'],
      xakyrd = vrx$ay['locator'],
      xyv$ = vrx$ay['xmlns'] || {},
      wojfe = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xakyrd && rdgx['setDocumentLocator'](xakyrd), sfjnw['errorHandler'] = wavx$y9(neojw, rdgx, xakyrd), sfjnw['domBuilder'] = vrx$ay['domBuilder'] || rdgx, /\/x?html?$/['test'](bgc850) && (wojfe['nbsp'] = '\u00a0', wojfe['copy'] = '©', xyv$[''] = 'http://www.w3.org/1999/xhtml'), xyv$['xml'] = xyv$['xml'] || 'http://www.w3.org/XML/1998/namespace', p8ht ? sfjnw['parse'](p8ht, xyv$, wojfe) : sfjnw['errorHandler']['error']('invalid doc source'), rdgx['doc'];
}, wgcb08['prototype'] = { 'startDocument': function () {
    this['doc'] = new warxyv()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (cb85gk, zje31f, wf, m4h) {
    var osjnf = this['doc'],
        ray$v = osjnf['createElementNS'](cb85gk, wf || zje31f),
        e3zf21 = m4h['length'];wz1ef3j(this, ray$v), this['currentElement'] = ray$v, this['locator'] && whq4p6u(this['locator'], ray$v);for (var u50tc = 0x0; e3zf21 > u50tc; u50tc++) {
      var cb85gk = m4h['getURI'](u50tc),
          ya9$l = m4h['getValue'](u50tc),
          wf = m4h['getQName'](u50tc),
          xkbgr = osjnf['createAttributeNS'](cb85gk, wf);this['locator'] && whq4p6u(m4h['getLocator'](u50tc), xkbgr), xkbgr['value'] = xkbgr['nodeValue'] = ya9$l, ray$v['setAttributeNode'](xkbgr);
    }
  }, 'endElement': function () {
    {
      var hp46t = this['currentElement'];hp46t['tagName'];
    }this['currentElement'] = hp46t['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (f21ez3, axvry) {
    var wosmjn = this['doc']['createProcessingInstruction'](f21ez3, axvry);this['locator'] && whq4p6u(this['locator'], wosmjn), wz1ef3j(this, wosmjn);
  }, 'ignorableWhitespace': function () {}, 'characters': function (avl9) {
    if (avl9 = we23f['apply'](this, arguments)) {
      if (this['cdata']) var jmwn = this['doc']['createCDATASection'](avl9);else var jmwn = this['doc']['createTextNode'](avl9);this['currentElement'] ? this['currentElement']['appendChild'](jmwn) : /^\s*$/['test'](avl9) && this['doc']['appendChild'](jmwn), this['locator'] && whq4p6u(this['locator'], jmwn);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ck5bg) {
    (this['locator'] = ck5bg) && (ck5bg['lineNumber'] = 0x0);
  }, 'comment': function (sm64oq) {
    sm64oq = we23f['apply'](this, arguments);var njweo = this['doc']['createComment'](sm64oq);this['locator'] && whq4p6u(this['locator'], njweo), wz1ef3j(this, njweo);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (drgkb, msowq, sfown) {
    var fjwosn = this['doc']['implementation'];if (fjwosn && fjwosn['createDocumentType']) {
      var avyx$r = fjwosn['createDocumentType'](drgkb, msowq, sfown);this['locator'] && whq4p6u(this['locator'], avyx$r), wz1ef3j(this, avyx$r);
    }
  }, 'warning': function (bgckrd) {
    console['warn']('[xmldom warning]\t' + bgckrd, wfwjzn(this['locator']));
  }, 'error': function (brdy) {
    console['error']('[xmldom error]\t' + brdy, wfwjzn(this['locator']));
  }, 'fatalError': function (ykrdb) {
    throw console['error']('[xmldom fatalError]\t' + ykrdb, wfwjzn(this['locator'])), ykrdb;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (q64hpm) {
  wgcb08['prototype'][q64hpm] = function () {
    return null;
  };
});var wrax = require('./wwqww')['XMLReader'],
    warxyv = exports['DOMImplementation'] = require('./wwDOww')['DOMImplementation'];exports['XMLSerializer'] = require('./wwDOww')['XMLSerializer'], exports['DOMParser'] = wcrgdkb;