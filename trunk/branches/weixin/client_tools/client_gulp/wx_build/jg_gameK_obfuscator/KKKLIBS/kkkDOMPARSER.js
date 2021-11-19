var U = wx.$k;
function K1_boxzwa(luazx) {
  this['options'] = luazx || { 'locator': {} };
}function K1_r_p35(s920, i6kte, qv1n0o) {
  function sk69h(da$ulx) {
    var zaubxl = s920[da$ulx];!zaubxl && u_lr && (zaubxl = 0x2 == s920['length'] ? function (it7mej) {
      s920(da$ulx, it7mej);
    } : s920), nq018[da$ulx] = zaubxl && function (n0o1) {
      zaubxl('[xmldom ' + da$ulx + ']\t' + n0o1 + K1_q2108n(qv1n0o));
    } || function () {};
  }if (!s920) {
    if (i6kte instanceof K1_gfrp35) return i6kte;s920 = i6kte;
  }var nq018 = {},
      u_lr = s920 instanceof Function;return qv1n0o = qv1n0o || {}, sk69h('warning'), sk69h('error'), sk69h('fatalError'), nq018;
}function K1_gfrp35() {
  this['cdata'] = !0x1;
}function K1_bzxau(q128n, r_$u) {
  r_$u['lineNumber'] = q128n['lineNumber'], r_$u['columnNumber'] = q128n['columnNumber'];
}function K1_q2108n(q10nov) {
  return q10nov ? '\x0a@' + (q10nov['systemId'] || '') + '#[line:' + q10nov['lineNumber'] + ',col:' + q10nov['columnNumber'] + ']' : void 0x0;
}function K1_s6k92(fg5yc3, o1vwqn, _r$ld) {
  return 'string' == typeof fg5yc3 ? fg5yc3['substr'](o1vwqn, _r$ld) : fg5yc3['length'] >= o1vwqn + _r$ld || o1vwqn ? new java['lang']['String'](fg5yc3, o1vwqn, _r$ld) + '' : fg5yc3;
}function K1_ov10n(i7ehtj, _lud$a) {
  i7ehtj['currentElement'] ? i7ehtj['currentElement']['appendChild'](_lud$a) : i7ehtj['doc']['appendChild'](_lud$a);
}K1_boxzwa['prototype']['parseFromString'] = function (novb1, bulaxz) {
  var zbxwao = this['options'],
      rp3g5 = new K1_vwq(),
      xbzawu = zbxwao['domBuilder'] || new K1_gfrp35(),
      axwoz = zbxwao['errorHandler'],
      dr3_5 = zbxwao['locator'],
      rlu_$d = zbxwao['xmlns'] || {},
      z$al = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return dr3_5 && xbzawu['setDocumentLocator'](dr3_5), rp3g5['errorHandler'] = K1_r_p35(axwoz, xbzawu, dr3_5), rp3g5['domBuilder'] = zbxwao['domBuilder'] || xbzawu, /\/x?html?$/['test'](bulaxz) && (z$al['nbsp'] = '\u00a0', z$al['copy'] = '©', rlu_$d[''] = 'http://www.w3.org/1999/xhtml'), rlu_$d['xml'] = rlu_$d['xml'] || 'http://www.w3.org/XML/1998/namespace', novb1 ? rp3g5['parse'](novb1, rlu_$d, z$al) : rp3g5['errorHandler']['error']('invalid doc source'), xbzawu['doc'];
}, K1_gfrp35['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_drl$u_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (lr$_pd, o1wnq, wb1vno, z$xu) {
    var jetih7 = this['doc'],
        pr_ld = jetih7['createElementNS'](lr$_pd, wb1vno || o1wnq),
        dp_3 = z$xu['length'];K1_ov10n(this, pr_ld), this['currentElement'] = pr_ld, this['locator'] && K1_bzxau(this['locator'], pr_ld);for (var je7imt = 0x0; dp_3 > je7imt; je7imt++) {
      var lr$_pd = z$xu['getURI'](je7imt),
          ovwqn = z$xu['getValue'](je7imt),
          wb1vno = z$xu['getQName'](je7imt),
          je7ith = jetih7['createAttributeNS'](lr$_pd, wb1vno);this['locator'] && K1_bzxau(z$xu['getLocator'](je7imt), je7ith), je7ith['value'] = je7ith['nodeValue'] = ovwqn, pr_ld['setAttributeNode'](je7ith);
    }
  }, 'endElement': function () {
    {
      var kiehs = this['currentElement'];kiehs['tagName'];
    }this['currentElement'] = kiehs['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (owz1vb, hktie6) {
    var pr5_$d = this['doc']['createProcessingInstruction'](owz1vb, hktie6);this['locator'] && K1_bzxau(this['locator'], pr5_$d), K1_ov10n(this, pr5_$d);
  }, 'ignorableWhitespace': function () {}, 'characters': function (q0o1n) {
    if (q0o1n = K1_s6k92['apply'](this, arguments)) {
      if (this['cdata']) var d_3rp5 = this['doc']['createCDATASection'](q0o1n);else var d_3rp5 = this['doc']['createTextNode'](q0o1n);this['currentElement'] ? this['currentElement']['appendChild'](d_3rp5) : /^\s*$/['test'](q0o1n) && this['doc']['appendChild'](d_3rp5), this['locator'] && K1_bzxau(this['locator'], d_3rp5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (gp5c3f) {
    (this['locator'] = gp5c3f) && (gp5c3f['lineNumber'] = 0x0);
  }, 'comment': function ($aud) {
    $aud = K1_s6k92['apply'](this, arguments);var kte6ih = this['doc']['createComment']($aud);this['locator'] && K1_bzxau(this['locator'], kte6ih), K1_ov10n(this, kte6ih);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (k2s980, ehs6k9, ulx$za) {
    var hkt6ie = this['doc']['implementation'];if (hkt6ie && hkt6ie['createDocumentType']) {
      var n29 = hkt6ie['createDocumentType'](k2s980, ehs6k9, ulx$za);this['locator'] && K1_bzxau(this['locator'], n29), K1_ov10n(this, n29);
    }
  }, 'warning': function (n1qowv) {
    console['warn']('[xmldom warning]\t' + n1qowv, K1_q2108n(this['locator']));
  }, 'error': function (gpf5) {
    console['error']('[xmldom error]\t' + gpf5, K1_q2108n(this['locator']));
  }, 'fatalError': function (nqwvo) {
    throw console['error']('[xmldom fatalError]\t' + nqwvo, K1_q2108n(this['locator'])), nqwvo;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (u$r_dl) {
  K1_gfrp35['prototype'][u$r_dl] = function () {
    return null;
  };
});var K1_vwq = require('./kkkSAX')['XMLReader'],
    K1_drl$u_ = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_boxzwa;