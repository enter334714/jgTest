var Q = wx.$I;
function i_b67es($9irt) {
  this['options'] = $9irt || { 'locator': {} };
}function i_tmr19v(mtr9, e763bs, ja3_) {
  function lti$rz(s2euq) {
    var ubseqk = mtr9[s2euq];!ubseqk && mriv && (ubseqk = 0x2 == mtr9['length'] ? function (sbukq) {
      mtr9(s2euq, sbukq);
    } : mtr9), snuk2q[s2euq] = ubseqk && function (m1pc9) {
      ubseqk('[xmldom ' + s2euq + ']\t' + m1pc9 + i_j8p_fa(ja3_));
    } || function () {};
  }if (!mtr9) {
    if (e763bs instanceof i_ukes7b) return e763bs;mtr9 = e763bs;
  }var snuk2q = {},
      mriv = mtr9 instanceof Function;return ja3_ = ja3_ || {}, lti$rz('warning'), lti$rz('error'), lti$rz('fatalError'), snuk2q;
}function i_ukes7b() {
  this['cdata'] = !0x1;
}function i_qsbku(mf1_pc, lizr0$) {
  lizr0$['lineNumber'] = mf1_pc['lineNumber'], lizr0$['columnNumber'] = mf1_pc['columnNumber'];
}function i_j8p_fa(cp_8jf) {
  return cp_8jf ? '\x0a@' + (cp_8jf['systemId'] || '') + '#[line:' + cp_8jf['lineNumber'] + ',col:' + cp_8jf['columnNumber'] + ']' : void 0x0;
}function i_jaf8_p(hw24n, fm1pc_, k5qw2n) {
  return 'string' == typeof hw24n ? hw24n['substr'](fm1pc_, k5qw2n) : hw24n['length'] >= fm1pc_ + k5qw2n || fm1pc_ ? new java['lang']['String'](hw24n, fm1pc_, k5qw2n) + '' : hw24n;
}function i_ke2uq(il$g0, go0lz) {
  il$g0['currentElement'] ? il$g0['currentElement']['appendChild'](go0lz) : il$g0['doc']['appendChild'](go0lz);
}i_b67es['prototype']['parseFromString'] = function (euks7, m9t1r) {
  var e7b63a = this['options'],
      zlri = new i_mf_p1(),
      fpc_m = e7b63a['domBuilder'] || new i_ukes7b(),
      n4wh52 = e7b63a['errorHandler'],
      w2qn54 = e7b63a['locator'],
      $ltri = e7b63a['xmlns'] || {},
      eqskb = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return w2qn54 && fpc_m['setDocumentLocator'](w2qn54), zlri['errorHandler'] = i_tmr19v(n4wh52, fpc_m, w2qn54), zlri['domBuilder'] = e7b63a['domBuilder'] || fpc_m, /\/x?html?$/['test'](m9t1r) && (eqskb['nbsp'] = '\u00a0', eqskb['copy'] = '©', $ltri[''] = 'http://www.w3.org/1999/xhtml'), $ltri['xml'] = $ltri['xml'] || 'http://www.w3.org/XML/1998/namespace', euks7 ? zlri['parse'](euks7, $ltri, eqskb) : zlri['errorHandler']['error']('invalid doc source'), fpc_m['doc'];
}, i_ukes7b['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_fjc8p_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pf1cv, zgo0dy, zoyg, fcpj) {
    var bja3 = this['doc'],
        suqekb = bja3['createElementNS'](pf1cv, zoyg || zgo0dy),
        rz$it = fcpj['length'];i_ke2uq(this, suqekb), this['currentElement'] = suqekb, this['locator'] && i_qsbku(this['locator'], suqekb);for (var ksn2qu = 0x0; rz$it > ksn2qu; ksn2qu++) {
      var pf1cv = fcpj['getURI'](ksn2qu),
          zlr0i$ = fcpj['getValue'](ksn2qu),
          zoyg = fcpj['getQName'](ksn2qu),
          $vti9 = bja3['createAttributeNS'](pf1cv, zoyg);this['locator'] && i_qsbku(fcpj['getLocator'](ksn2qu), $vti9), $vti9['value'] = $vti9['nodeValue'] = zlr0i$, suqekb['setAttributeNode']($vti9);
    }
  }, 'endElement': function () {
    {
      var rt9$i = this['currentElement'];rt9$i['tagName'];
    }this['currentElement'] = rt9$i['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (j_fpa8, ebksu7) {
    var l0yzo = this['doc']['createProcessingInstruction'](j_fpa8, ebksu7);this['locator'] && i_qsbku(this['locator'], l0yzo), i_ke2uq(this, l0yzo);
  }, 'ignorableWhitespace': function () {}, 'characters': function (iv9r$t) {
    if (iv9r$t = i_jaf8_p['apply'](this, arguments)) {
      if (this['cdata']) var eusbqk = this['doc']['createCDATASection'](iv9r$t);else var eusbqk = this['doc']['createTextNode'](iv9r$t);this['currentElement'] ? this['currentElement']['appendChild'](eusbqk) : /^\s*$/['test'](iv9r$t) && this['doc']['appendChild'](eusbqk), this['locator'] && i_qsbku(this['locator'], eusbqk);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (o0zgl) {
    (this['locator'] = o0zgl) && (o0zgl['lineNumber'] = 0x0);
  }, 'comment': function (fpc_81) {
    fpc_81 = i_jaf8_p['apply'](this, arguments);var m1cpv = this['doc']['createComment'](fpc_81);this['locator'] && i_qsbku(this['locator'], m1cpv), i_ke2uq(this, m1cpv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kqnw5, wn425q, wh452) {
    var t$vr9 = this['doc']['implementation'];if (t$vr9 && t$vr9['createDocumentType']) {
      var bks7eu = t$vr9['createDocumentType'](kqnw5, wn425q, wh452);this['locator'] && i_qsbku(this['locator'], bks7eu), i_ke2uq(this, bks7eu);
    }
  }, 'warning': function (r9it$v) {
    console['warn']('[xmldom warning]\t' + r9it$v, i_j8p_fa(this['locator']));
  }, 'error': function (su7ek) {
    console['error']('[xmldom error]\t' + su7ek, i_j8p_fa(this['locator']));
  }, 'fatalError': function (sunk2) {
    throw console['error']('[xmldom fatalError]\t' + sunk2, i_j8p_fa(this['locator'])), sunk2;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j8a67) {
  i_ukes7b['prototype'][j8a67] = function () {
    return null;
  };
});var i_mf_p1 = require('./iiiSAX')['XMLReader'],
    i_fjc8p_ = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i_b67es;