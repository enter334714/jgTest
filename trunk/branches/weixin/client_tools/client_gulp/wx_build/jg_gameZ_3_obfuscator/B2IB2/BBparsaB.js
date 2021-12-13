var D = wx.$b;
function bo89s6(wtpm1) {
  this['options'] = wtpm1 || { 'locator': {} };
}function bvc1h(wm1tp, i0j5n, dr28s) {
  function n45$0j(chv1p) {
    var iuynj = wm1tp[chv1p];!iuynj && i40jn && (iuynj = 0x2 == wm1tp['length'] ? function (c1wvt) {
      wm1tp(chv1p, c1wvt);
    } : wm1tp), i4j0un[chv1p] = iuynj && function (lxo7k) {
      iuynj('[xmldom ' + chv1p + ']\t' + lxo7k + bxoqkl(dr28s));
    } || function () {};
  }if (!wm1tp) {
    if (i0j5n instanceof ba54$e) return i0j5n;wm1tp = i0j5n;
  }var i4j0un = {},
      i40jn = wm1tp instanceof Function;return dr28s = dr28s || {}, n45$0j('warning'), n45$0j('error'), n45$0j('fatalError'), i4j0un;
}function ba54$e() {
  this['cdata'] = !0x1;
}function bol6d8(iutm, m1zytc) {
  m1zytc['lineNumber'] = iutm['lineNumber'], m1zytc['columnNumber'] = iutm['columnNumber'];
}function bxoqkl(d8l6) {
  return d8l6 ? '\x0a@' + (d8l6['systemId'] || '') + '#[line:' + d8l6['lineNumber'] + ',col:' + d8l6['columnNumber'] + ']' : void 0x0;
}function bxko7l(yc1zm, xokdl6, cpwh1v) {
  return 'string' == typeof yc1zm ? yc1zm['substr'](xokdl6, cpwh1v) : yc1zm['length'] >= xokdl6 + cpwh1v || xokdl6 ? new java['lang']['String'](yc1zm, xokdl6, cpwh1v) + '' : yc1zm;
}function bzmiuy(vwct1p, nj405i) {
  vwct1p['currentElement'] ? vwct1p['currentElement']['appendChild'](nj405i) : vwct1p['doc']['appendChild'](nj405i);
}bo89s6['prototype']['parseFromString'] = function (r_v9h2, s869d) {
  var qxol = this['options'],
      kold6x = new bv_p1hw(),
      k8o6ld = qxol['domBuilder'] || new ba54$e(),
      n$5ja = qxol['errorHandler'],
      niu0zy = qxol['locator'],
      hr29s_ = qxol['xmlns'] || {},
      hr_v29 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return niu0zy && k8o6ld['setDocumentLocator'](niu0zy), kold6x['errorHandler'] = bvc1h(n$5ja, k8o6ld, niu0zy), kold6x['domBuilder'] = qxol['domBuilder'] || k8o6ld, /\/x?html?$/['test'](s869d) && (hr_v29['nbsp'] = '\u00a0', hr_v29['copy'] = '©', hr29s_[''] = 'http://www.w3.org/1999/xhtml'), hr29s_['xml'] = hr29s_['xml'] || 'http://www.w3.org/XML/1998/namespace', r_v9h2 ? kold6x['parse'](r_v9h2, hr29s_, hr_v29) : kold6x['errorHandler']['error']('invalid doc source'), k8o6ld['doc'];
}, ba54$e['prototype'] = { 'startDocument': function () {
    this['doc'] = new bo67x()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mtwcz1, pvh1w, w2hp, h_rp2) {
    var un0yij = this['doc'],
        uztmy = un0yij['createElementNS'](mtwcz1, w2hp || pvh1w),
        ct1yzm = h_rp2['length'];bzmiuy(this, uztmy), this['currentElement'] = uztmy, this['locator'] && bol6d8(this['locator'], uztmy);for (var ef$a5 = 0x0; ct1yzm > ef$a5; ef$a5++) {
      var mtwcz1 = h_rp2['getURI'](ef$a5),
          uin04 = h_rp2['getValue'](ef$a5),
          w2hp = h_rp2['getQName'](ef$a5),
          mzct = un0yij['createAttributeNS'](mtwcz1, w2hp);this['locator'] && bol6d8(h_rp2['getLocator'](ef$a5), mzct), mzct['value'] = mzct['nodeValue'] = uin04, uztmy['setAttributeNode'](mzct);
    }
  }, 'endElement': function () {
    {
      var rds298 = this['currentElement'];rds298['tagName'];
    }this['currentElement'] = rds298['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xl6o, xqko) {
    var nziuy = this['doc']['createProcessingInstruction'](xl6o, xqko);this['locator'] && bol6d8(this['locator'], nziuy), bzmiuy(this, nziuy);
  }, 'ignorableWhitespace': function () {}, 'characters': function (l7kgqx) {
    if (l7kgqx = bxko7l['apply'](this, arguments)) {
      if (this['cdata']) var o6x7kl = this['doc']['createCDATASection'](l7kgqx);else var o6x7kl = this['doc']['createTextNode'](l7kgqx);this['currentElement'] ? this['currentElement']['appendChild'](o6x7kl) : /^\s*$/['test'](l7kgqx) && this['doc']['appendChild'](o6x7kl), this['locator'] && bol6d8(this['locator'], o6x7kl);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (f$54aj) {
    (this['locator'] = f$54aj) && (f$54aj['lineNumber'] = 0x0);
  }, 'comment': function (r_h2vp) {
    r_h2vp = bxko7l['apply'](this, arguments);var tcyz = this['doc']['createComment'](r_h2vp);this['locator'] && bol6d8(this['locator'], tcyz), bzmiuy(this, tcyz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (c1hwpv, klg7xq, lx6kdo) {
    var fe$4 = this['doc']['implementation'];if (fe$4 && fe$4['createDocumentType']) {
      var cwmt1z = fe$4['createDocumentType'](c1hwpv, klg7xq, lx6kdo);this['locator'] && bol6d8(this['locator'], cwmt1z), bzmiuy(this, cwmt1z);
    }
  }, 'warning': function (ytcm1) {
    console['warn']('[xmldom warning]\t' + ytcm1, bxoqkl(this['locator']));
  }, 'error': function (s29r8) {
    console['error']('[xmldom error]\t' + s29r8, bxoqkl(this['locator']));
  }, 'fatalError': function (cp1vw) {
    throw console['error']('[xmldom fatalError]\t' + cp1vw, bxoqkl(this['locator'])), cp1vw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (d6ok) {
  ba54$e['prototype'][d6ok] = function () {
    return null;
  };
});var bv_p1hw = require('./BBcBB')['XMLReader'],
    bo67x = exports['DOMImplementation'] = require('./BBDOBB')['DOMImplementation'];exports['XMLSerializer'] = require('./BBDOBB')['XMLSerializer'], exports['DOMParser'] = bo89s6;