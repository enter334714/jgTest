var o = wx.$U;
function uzwg7x9(kv_c) {
  this['options'] = kv_c || { 'locator': {} };
}function uupj3f4(u$4, j4ih3m, z9dg7w) {
  function $uefp4(lmixq) {
    var fu43ep = u$4[lmixq];!fu43ep && mhi34 && (fu43ep = 0x2 == u$4['length'] ? function (c1rb0) {
      u$4(lmixq, c1rb0);
    } : u$4), d97[lmixq] = fu43ep && function (z5w9) {
      fu43ep('[xmldom ' + lmixq + ']\t' + z5w9 + unvk_as(z9dg7w));
    } || function () {};
  }if (!u$4) {
    if (j4ih3m instanceof ue$fnus) return j4ih3m;u$4 = j4ih3m;
  }var d97 = {},
      mhi34 = u$4 instanceof Function;return z9dg7w = z9dg7w || {}, $uefp4('warning'), $uefp4('error'), $uefp4('fatalError'), d97;
}function ue$fnus() {
  this['cdata'] = !0x1;
}function uxmlqoi(c08rb1, vse$_n) {
  vse$_n['lineNumber'] = c08rb1['lineNumber'], vse$_n['columnNumber'] = c08rb1['columnNumber'];
}function unvk_as(p4j3hf) {
  return p4j3hf ? '\x0a@' + (p4j3hf['systemId'] || '') + '#[line:' + p4j3hf['lineNumber'] + ',col:' + p4j3hf['columnNumber'] + ']' : void 0x0;
}function u$eus(x79l, mjo, limo) {
  return 'string' == typeof x79l ? x79l['substr'](mjo, limo) : x79l['length'] >= mjo + limo || mjo ? new java['lang']['String'](x79l, mjo, limo) + '' : x79l;
}function uxlgwq7(gz59dw, mjqih) {
  gz59dw['currentElement'] ? gz59dw['currentElement']['appendChild'](mjqih) : gz59dw['doc']['appendChild'](mjqih);
}uzwg7x9['prototype']['parseFromString'] = function (a60rkc, kvs_a) {
  var s$eunv = this['options'],
      glw7x = new uanv_(),
      juf43p = s$eunv['domBuilder'] || new ue$fnus(),
      un$sve = s$eunv['errorHandler'],
      jmhp4 = s$eunv['locator'],
      a0rk = s$eunv['xmlns'] || {},
      zxw79g = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jmhp4 && juf43p['setDocumentLocator'](jmhp4), glw7x['errorHandler'] = uupj3f4(un$sve, juf43p, jmhp4), glw7x['domBuilder'] = s$eunv['domBuilder'] || juf43p, /\/x?html?$/['test'](kvs_a) && (zxw79g['nbsp'] = '\u00a0', zxw79g['copy'] = '©', a0rk[''] = 'http://www.w3.org/1999/xhtml'), a0rk['xml'] = a0rk['xml'] || 'http://www.w3.org/XML/1998/namespace', a60rkc ? glw7x['parse'](a60rkc, a0rk, zxw79g) : glw7x['errorHandler']['error']('invalid doc source'), juf43p['doc'];
}, ue$fnus['prototype'] = { 'startDocument': function () {
    this['doc'] = new uxg9wl()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (fjh, ixol, j3f4up, t5zdg) {
    var neuvs = this['doc'],
        dt952 = neuvs['createElementNS'](fjh, j3f4up || ixol),
        pu43fe = t5zdg['length'];uxlgwq7(this, dt952), this['currentElement'] = dt952, this['locator'] && uxmlqoi(this['locator'], dt952);for (var jmh34 = 0x0; pu43fe > jmh34; jmh34++) {
      var fjh = t5zdg['getURI'](jmh34),
          $f4peu = t5zdg['getValue'](jmh34),
          j3f4up = t5zdg['getQName'](jmh34),
          mhioq = neuvs['createAttributeNS'](fjh, j3f4up);this['locator'] && uxmlqoi(t5zdg['getLocator'](jmh34), mhioq), mhioq['value'] = mhioq['nodeValue'] = $f4peu, dt952['setAttributeNode'](mhioq);
    }
  }, 'endElement': function () {
    {
      var usepf = this['currentElement'];usepf['tagName'];
    }this['currentElement'] = usepf['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (jiqho, qxl) {
    var r0y18 = this['doc']['createProcessingInstruction'](jiqho, qxl);this['locator'] && uxmlqoi(this['locator'], r0y18), uxlgwq7(this, r0y18);
  }, 'ignorableWhitespace': function () {}, 'characters': function (mohli) {
    if (mohli = u$eus['apply'](this, arguments)) {
      if (this['cdata']) var usp$fe = this['doc']['createCDATASection'](mohli);else var usp$fe = this['doc']['createTextNode'](mohli);this['currentElement'] ? this['currentElement']['appendChild'](usp$fe) : /^\s*$/['test'](mohli) && this['doc']['appendChild'](usp$fe), this['locator'] && uxmlqoi(this['locator'], usp$fe);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (pfs) {
    (this['locator'] = pfs) && (pfs['lineNumber'] = 0x0);
  }, 'comment': function (qomhil) {
    qomhil = u$eus['apply'](this, arguments);var j43fh = this['doc']['createComment'](qomhil);this['locator'] && uxmlqoi(this['locator'], j43fh), uxlgwq7(this, j43fh);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (_vasn, _kc6av, p4jhm3) {
    var fu$sn = this['doc']['implementation'];if (fu$sn && fu$sn['createDocumentType']) {
      var _6cak = fu$sn['createDocumentType'](_vasn, _kc6av, p4jhm3);this['locator'] && uxmlqoi(this['locator'], _6cak), uxlgwq7(this, _6cak);
    }
  }, 'warning': function (joqi) {
    console['warn']('[xmldom warning]\t' + joqi, unvk_as(this['locator']));
  }, 'error': function (t95gd) {
    console['error']('[xmldom error]\t' + t95gd, unvk_as(this['locator']));
  }, 'fatalError': function (an_) {
    throw console['error']('[xmldom fatalError]\t' + an_, unvk_as(this['locator'])), an_;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lxim) {
  ue$fnus['prototype'][lxim] = function () {
    return null;
  };
});var uanv_ = require('./uu12uu')['XMLReader'],
    uxg9wl = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = uzwg7x9;