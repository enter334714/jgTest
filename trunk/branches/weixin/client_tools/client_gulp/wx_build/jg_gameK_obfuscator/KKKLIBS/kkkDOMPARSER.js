var U = wx.$k;
function K1_tihek6(w1nvoq) {
  this['options'] = w1nvoq || { 'locator': {} };
}function K1_q810v(fp53, p$rd5, l$dxu) {
  function iek6t(pf3r5) {
    var ux$ad = fp53[pf3r5];!ux$ad && p5r_g3 && (ux$ad = 0x2 == fp53['length'] ? function (xvw) {
      fp53(pf3r5, xvw);
    } : fp53), e7jht[pf3r5] = ux$ad && function (drp5_3) {
      ux$ad('[xmldom ' + pf3r5 + ']\t' + drp5_3 + K1_x$zaul(l$dxu));
    } || function () {};
  }if (!fp53) {
    if (p$rd5 instanceof K1_k96she) return p$rd5;fp53 = p$rd5;
  }var e7jht = {},
      p5r_g3 = fp53 instanceof Function;return l$dxu = l$dxu || {}, iek6t('warning'), iek6t('error'), iek6t('fatalError'), e7jht;
}function K1_k96she() {
  this['cdata'] = !0x1;
}function K1_nqov1(wvoq1n, onvq1w) {
  onvq1w['lineNumber'] = wvoq1n['lineNumber'], onvq1w['columnNumber'] = wvoq1n['columnNumber'];
}function K1_x$zaul(ov01qn) {
  return ov01qn ? '\x0a@' + (ov01qn['systemId'] || '') + '#[line:' + ov01qn['lineNumber'] + ',col:' + ov01qn['columnNumber'] + ']' : void 0x0;
}function K1_p$5r_d(lzxb, f35, $ldru) {
  return 'string' == typeof lzxb ? lzxb['substr'](f35, $ldru) : lzxb['length'] >= f35 + $ldru || f35 ? new java['lang']['String'](lzxb, f35, $ldru) + '' : lzxb;
}function K1_ubxzla(zwao, d5_3p) {
  zwao['currentElement'] ? zwao['currentElement']['appendChild'](d5_3p) : zwao['doc']['appendChild'](d5_3p);
}K1_tihek6['prototype']['parseFromString'] = function (uald$_, nqov10) {
  var lzuxba = this['options'],
      blzaux = new K1_ax$uld(),
      $lauzx = lzuxba['domBuilder'] || new K1_k96she(),
      pg3c5f = lzuxba['errorHandler'],
      itjm7 = lzuxba['locator'],
      azlx = lzuxba['xmlns'] || {},
      ozxwbv = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return itjm7 && $lauzx['setDocumentLocator'](itjm7), blzaux['errorHandler'] = K1_q810v(pg3c5f, $lauzx, itjm7), blzaux['domBuilder'] = lzuxba['domBuilder'] || $lauzx, /\/x?html?$/['test'](nqov10) && (ozxwbv['nbsp'] = '\u00a0', ozxwbv['copy'] = '©', azlx[''] = 'http://www.w3.org/1999/xhtml'), azlx['xml'] = azlx['xml'] || 'http://www.w3.org/XML/1998/namespace', uald$_ ? blzaux['parse'](uald$_, azlx, ozxwbv) : blzaux['errorHandler']['error']('invalid doc source'), $lauzx['doc'];
}, K1_k96she['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_xwaubz()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pr5_3d, hjeti7, p5g3r_, oaz) {
    var auzbxw = this['doc'],
        $rp5_d = auzbxw['createElementNS'](pr5_3d, p5g3r_ || hjeti7),
        owzbxv = oaz['length'];K1_ubxzla(this, $rp5_d), this['currentElement'] = $rp5_d, this['locator'] && K1_nqov1(this['locator'], $rp5_d);for (var ovbxzw = 0x0; owzbxv > ovbxzw; ovbxzw++) {
      var pr5_3d = oaz['getURI'](ovbxzw),
          t6ik = oaz['getValue'](ovbxzw),
          p5g3r_ = oaz['getQName'](ovbxzw),
          xlzaub = auzbxw['createAttributeNS'](pr5_3d, p5g3r_);this['locator'] && K1_nqov1(oaz['getLocator'](ovbxzw), xlzaub), xlzaub['value'] = xlzaub['nodeValue'] = t6ik, $rp5_d['setAttributeNode'](xlzaub);
    }
  }, 'endElement': function () {
    {
      var adlu$_ = this['currentElement'];adlu$_['tagName'];
    }this['currentElement'] = adlu$_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (dr_l, tihe6k) {
    var hik6es = this['doc']['createProcessingInstruction'](dr_l, tihe6k);this['locator'] && K1_nqov1(this['locator'], hik6es), K1_ubxzla(this, hik6es);
  }, 'ignorableWhitespace': function () {}, 'characters': function (thji7) {
    if (thji7 = K1_p$5r_d['apply'](this, arguments)) {
      if (this['cdata']) var _5r3d = this['doc']['createCDATASection'](thji7);else var _5r3d = this['doc']['createTextNode'](thji7);this['currentElement'] ? this['currentElement']['appendChild'](_5r3d) : /^\s*$/['test'](thji7) && this['doc']['appendChild'](_5r3d), this['locator'] && K1_nqov1(this['locator'], _5r3d);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wz1v) {
    (this['locator'] = wz1v) && (wz1v['lineNumber'] = 0x0);
  }, 'comment': function (_pd5) {
    _pd5 = K1_p$5r_d['apply'](this, arguments);var o1vbwn = this['doc']['createComment'](_pd5);this['locator'] && K1_nqov1(this['locator'], o1vbwn), K1_ubxzla(this, o1vbwn);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (oxaz, p_35gr, b1owvn) {
    var rp$d5_ = this['doc']['implementation'];if (rp$d5_ && rp$d5_['createDocumentType']) {
      var pg3f5 = rp$d5_['createDocumentType'](oxaz, p_35gr, b1owvn);this['locator'] && K1_nqov1(this['locator'], pg3f5), K1_ubxzla(this, pg3f5);
    }
  }, 'warning': function (wov1b) {
    console['warn']('[xmldom warning]\t' + wov1b, K1_x$zaul(this['locator']));
  }, 'error': function (vwzbo) {
    console['error']('[xmldom error]\t' + vwzbo, K1_x$zaul(this['locator']));
  }, 'fatalError': function (aw) {
    throw console['error']('[xmldom fatalError]\t' + aw, K1_x$zaul(this['locator'])), aw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ux) {
  K1_k96she['prototype'][ux] = function () {
    return null;
  };
});var K1_ax$uld = require('./kkkSAX')['XMLReader'],
    K1_xwaubz = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_tihek6;