var M = wx.$T;
function tr3nj8(g613n) {
  this['options'] = g613n || { 'locator': {} };
}function tqox(f$pzdv, qy0_ex, vi$t) {
  function pvdf$9(x0q) {
    var g631n8 = f$pzdv[x0q];!g631n8 && h_x0m && (g631n8 = 0x2 == f$pzdv['length'] ? function (vfd$p9) {
      f$pzdv(x0q, vfd$p9);
    } : f$pzdv), d9vf$[x0q] = g631n8 && function (ze0qo7) {
      g631n8('[xmldom ' + x0q + ']\t' + ze0qo7 + t_5hm(vi$t));
    } || function () {};
  }if (!f$pzdv) {
    if (qy0_ex instanceof tuskbj) return qy0_ex;f$pzdv = qy0_ex;
  }var d9vf$ = {},
      h_x0m = f$pzdv instanceof Function;return vi$t = vi$t || {}, pvdf$9('warning'), pvdf$9('error'), pvdf$9('fatalError'), d9vf$;
}function tuskbj() {
  this['cdata'] = !0x1;
}function te0_qx(wh_m, pz7$f) {
  pz7$f['lineNumber'] = wh_m['lineNumber'], pz7$f['columnNumber'] = wh_m['columnNumber'];
}function t_5hm(h_y5m) {
  return h_y5m ? '\x0a@' + (h_y5m['systemId'] || '') + '#[line:' + h_y5m['lineNumber'] + ',col:' + h_y5m['columnNumber'] + ']' : void 0x0;
}function tq_xmy0(asuk, p$fdz7, rbang) {
  return 'string' == typeof asuk ? asuk['substr'](p$fdz7, rbang) : asuk['length'] >= p$fdz7 + rbang || p$fdz7 ? new java['lang']['String'](asuk, p$fdz7, rbang) + '' : asuk;
}function tc9$it(pz7d$, ng1r38) {
  pz7d$['currentElement'] ? pz7d$['currentElement']['appendChild'](ng1r38) : pz7d$['doc']['appendChild'](ng1r38);
}tr3nj8['prototype']['parseFromString'] = function (v$zfpd, ymh_) {
  var m156 = this['options'],
      c9i2t4 = new tc2til(),
      y_whm5 = m156['domBuilder'] || new tuskbj(),
      gajkr = m156['errorHandler'],
      hw6m15 = m156['locator'],
      asjbu = m156['xmlns'] || {},
      e70zqo = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return hw6m15 && y_whm5['setDocumentLocator'](hw6m15), c9i2t4['errorHandler'] = tqox(gajkr, y_whm5, hw6m15), c9i2t4['domBuilder'] = m156['domBuilder'] || y_whm5, /\/x?html?$/['test'](ymh_) && (e70zqo['nbsp'] = '\u00a0', e70zqo['copy'] = '©', asjbu[''] = 'http://www.w3.org/1999/xhtml'), asjbu['xml'] = asjbu['xml'] || 'http://www.w3.org/XML/1998/namespace', v$zfpd ? c9i2t4['parse'](v$zfpd, asjbu, e70zqo) : c9i2t4['errorHandler']['error']('invalid doc source'), y_whm5['doc'];
}, tuskbj['prototype'] = { 'startDocument': function () {
    this['doc'] = new trksjba()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($9dvpf, pfoz7d, dp$vi9, mwh_xy) {
    var qoez70 = this['doc'],
        ye_q0x = qoez70['createElementNS']($9dvpf, dp$vi9 || pfoz7d),
        dz7pf$ = mwh_xy['length'];tc9$it(this, ye_q0x), this['currentElement'] = ye_q0x, this['locator'] && te0_qx(this['locator'], ye_q0x);for (var mh1w65 = 0x0; dz7pf$ > mh1w65; mh1w65++) {
      var $9dvpf = mwh_xy['getURI'](mh1w65),
          jg38nr = mwh_xy['getValue'](mh1w65),
          dp$vi9 = mwh_xy['getQName'](mh1w65),
          ausbj = qoez70['createAttributeNS']($9dvpf, dp$vi9);this['locator'] && te0_qx(mwh_xy['getLocator'](mh1w65), ausbj), ausbj['value'] = ausbj['nodeValue'] = jg38nr, ye_q0x['setAttributeNode'](ausbj);
    }
  }, 'endElement': function () {
    {
      var i9c$ = this['currentElement'];i9c$['tagName'];
    }this['currentElement'] = i9c$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zdfv$p, xy_qm) {
    var n513 = this['doc']['createProcessingInstruction'](zdfv$p, xy_qm);this['locator'] && te0_qx(this['locator'], n513), tc9$it(this, n513);
  }, 'ignorableWhitespace': function () {}, 'characters': function (bjgr) {
    if (bjgr = tq_xmy0['apply'](this, arguments)) {
      if (this['cdata']) var _why = this['doc']['createCDATASection'](bjgr);else var _why = this['doc']['createTextNode'](bjgr);this['currentElement'] ? this['currentElement']['appendChild'](_why) : /^\s*$/['test'](bjgr) && this['doc']['appendChild'](_why), this['locator'] && te0_qx(this['locator'], _why);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (g3861) {
    (this['locator'] = g3861) && (g3861['lineNumber'] = 0x0);
  }, 'comment': function (dz$vpf) {
    dz$vpf = tq_xmy0['apply'](this, arguments);var w5yh_ = this['doc']['createComment'](dz$vpf);this['locator'] && te0_qx(this['locator'], w5yh_), tc9$it(this, w5yh_);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (c24li, $vp9df, krbj) {
    var bagjr = this['doc']['implementation'];if (bagjr && bagjr['createDocumentType']) {
      var dp7foz = bagjr['createDocumentType'](c24li, $vp9df, krbj);this['locator'] && te0_qx(this['locator'], dp7foz), tc9$it(this, dp7foz);
    }
  }, 'warning': function (m0x_hy) {
    console['warn']('[xmldom warning]\t' + m0x_hy, t_5hm(this['locator']));
  }, 'error': function (gakjr) {
    console['error']('[xmldom error]\t' + gakjr, t_5hm(this['locator']));
  }, 'fatalError': function (itlc2) {
    throw console['error']('[xmldom fatalError]\t' + itlc2, t_5hm(this['locator'])), itlc2;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (o07qez) {
  tuskbj['prototype'][o07qez] = function () {
    return null;
  };
});var tc2til = require('./tT12tt')['XMLReader'],
    trksjba = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tr3nj8;