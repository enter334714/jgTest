var a_ = wx.$d;
function b_hj7tn(yv59a0) {
  this['options'] = yv59a0 || { 'locator': {} };
}function b_d1$z_8(wgk63l, uj7dft, fd8) {
  function n7djftu(md$18) {
    var eby9c0s = wgk63l[md$18];!eby9c0s && rv40y5a && (eby9c0s = 0x2 == wgk63l['length'] ? function (d$z81_) {
      wgk63l(md$18, d$z81_);
    } : wgk63l), escbx09[md$18] = eby9c0s ? function (pqk34wl) {
      eby9c0s('[xmldom ' + md$18 + ']\t' + pqk34wl + b_z$_1dm(fd8));
    } : function () {};
  }if (!wgk63l) {
    if (uj7dft instanceof b_zd781_) return uj7dft;wgk63l = uj7dft;
  }var escbx09 = {},
      rv40y5a = wgk63l instanceof Function;return fd8 = fd8 || {}, n7djftu('warning'), n7djftu('error'), n7djftu('fatalError'), escbx09;
}function b_zd781_() {
  this['cdata'] = !0x1;
}function b_v4ya0r5(ztd17$8, pk36gm) {
  pk36gm['lineNumber'] = ztd17$8['lineNumber'], pk36gm['columnNumber'] = ztd17$8['columnNumber'];
}function b_z$_1dm(hijtfu) {
  return hijtfu ? '\x0a@' + (hijtfu['systemId'] || '') + '#[line:' + hijtfu['lineNumber'] + ',col:' + hijtfu['columnNumber'] + ']' : void 0x0;
}function b_qrpl4wk(prl4kq, prk4wl, jfniuo) {
  return 'string' == typeof prl4kq ? prl4kq['substr'](prk4wl, jfniuo) : prl4kq['length'] >= prk4wl + jfniuo || prk4wl ? new java['lang']['String'](prl4kq, prk4wl, jfniuo) + '' : prl4kq;
}function b_m81_2(cyvb905, pk3m2) {
  (cyvb905['currentElement'] || cyvb905['doc'])['appendChild'](pk3m2);
}b_hj7tn['prototype']['parseFromString'] = function (thjuinf, jfdu7nt) {
  var a4wqlr5 = this['options'],
      s0be9y = new b_h7nfjtu(),
      $_21m = a4wqlr5['domBuilder'] || new b_zd781_(),
      nftd7j1 = a4wqlr5['errorHandler'],
      bs9e = a4wqlr5['locator'],
      _3mg62$ = a4wqlr5['xmlns'] || {},
      k3lq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return bs9e && $_21m['setDocumentLocator'](bs9e), s0be9y['errorHandler'] = b_d1$z_8(nftd7j1, $_21m, bs9e), s0be9y['domBuilder'] = a4wqlr5['domBuilder'] || $_21m, /\/x?html?$/['test'](jfdu7nt) && (k3lq['nbsp'] = '\u00a0', k3lq['copy'] = '©', _3mg62$[''] = 'http://www.w3.org/1999/xhtml'), _3mg62$['xml'] = _3mg62$['xml'] || 'http://www.w3.org/XML/1998/namespace', thjuinf ? s0be9y['parse'](thjuinf, _3mg62$, k3lq) : s0be9y['errorHandler']['error']('invalid doc source'), $_21m['doc'];
}, b_zd781_['prototype'] = { 'startDocument': function () {
    this['doc'] = new b_kg6m()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rwlkqa4, vy0scb, qra5l4w, d71ftnz) {
    var qkw4l3 = this['doc'],
        g$26m_8 = qkw4l3['createElementNS'](rwlkqa4, qra5l4w || vy0scb),
        ujifnt = d71ftnz['length'];b_m81_2(this, g$26m_8), this['currentElement'] = g$26m_8, this['locator'] && b_v4ya0r5(this['locator'], g$26m_8);for (var jd71fn = 0x0; jd71fn < ujifnt; jd71fn++) {
      var rwlkqa4 = d71ftnz['getURI'](jd71fn),
          $t17d8 = d71ftnz['getValue'](jd71fn),
          qra5l4w = d71ftnz['getQName'](jd71fn),
          $mz8_ = qkw4l3['createAttributeNS'](rwlkqa4, qra5l4w);this['locator'] && b_v4ya0r5(d71ftnz['getLocator'](jd71fn), $mz8_), $mz8_['value'] = $mz8_['nodeValue'] = $t17d8, g$26m_8['setAttributeNode']($mz8_);
    }
  }, 'endElement': function () {
    var zdnt7f1 = this['currentElement'];zdnt7f1['tagName'], this['currentElement'] = zdnt7f1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zgm$8_2, j1dn7ft) {
    j1dn7ft = this['doc']['createProcessingInstruction'](zgm$8_2, j1dn7ft), (this['locator'] && b_v4ya0r5(this['locator'], j1dn7ft), b_m81_2(this, j1dn7ft));
  }, 'ignorableWhitespace': function () {}, 'characters': function (jufndt) {
    var byvs0c9;(jufndt = b_qrpl4wk['apply'](this, arguments)) && (byvs0c9 = this['cdata'] ? this['doc']['createCDATASection'](jufndt) : this['doc']['createTextNode'](jufndt), this['currentElement'] ? this['currentElement']['appendChild'](byvs0c9) : /^\s*$/['test'](jufndt) && this['doc']['appendChild'](byvs0c9), this['locator'] && b_v4ya0r5(this['locator'], byvs0c9));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (lkar) {
    (this['locator'] = lkar) && (lkar['lineNumber'] = 0x0);
  }, 'comment': function (nujifh) {
    nujifh = b_qrpl4wk['apply'](this, arguments);var mz_g$28 = this['doc']['createComment'](nujifh);this['locator'] && b_v4ya0r5(this['locator'], mz_g$28), b_m81_2(this, mz_g$28);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (j7t1fnd, aq4lrkw, ohinjf) {
    var k43pl = this['doc']['implementation'];k43pl && k43pl['createDocumentType'] && (ohinjf = k43pl['createDocumentType'](j7t1fnd, aq4lrkw, ohinjf), this['locator'] && b_v4ya0r5(this['locator'], ohinjf), b_m81_2(this, ohinjf));
  }, 'warning': function (_812z$) {
    console['warn']('[xmldom warning]\t' + _812z$, b_z$_1dm(this['locator']));
  }, 'error': function (mg82_$z) {
    console['error']('[xmldom error]\t' + mg82_$z, b_z$_1dm(this['locator']));
  }, 'fatalError': function (ar4qlw5) {
    throw console['error']('[xmldom fatalError]\t' + ar4qlw5, b_z$_1dm(this['locator'])), ar4qlw5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (b9e0scx) {
  b_zd781_['prototype'][b9e0scx] = function () {
    return null;
  };
});var b_h7nfjtu = require('./dddsax')['XMLReader'],
    b_kg6m = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = b_hj7tn;