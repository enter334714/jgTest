var U = wx.$k;
function K1_$drl_p(tijem7) {
  this['options'] = tijem7 || { 'locator': {} };
}function K1_xozba(hitj7e, woxvz, awoxzb) {
  function eht6i(uxd) {
    var jt74mi = hitj7e[uxd];!jt74mi && p_g5r && (jt74mi = 0x2 == hitj7e['length'] ? function (rg_5p3) {
      hitj7e(uxd, rg_5p3);
    } : hitj7e), n0q218[uxd] = jt74mi && function (n801v) {
      jt74mi('[xmldom ' + uxd + ']\t' + n801v + K1_o1qnwv(awoxzb));
    } || function () {};
  }if (!hitj7e) {
    if (woxvz instanceof K1_u$dxa) return woxvz;hitj7e = woxvz;
  }var n0q218 = {},
      p_g5r = hitj7e instanceof Function;return awoxzb = awoxzb || {}, eht6i('warning'), eht6i('error'), eht6i('fatalError'), n0q218;
}function K1_u$dxa() {
  this['cdata'] = !0x1;
}function K1_vn1qwo(p5$_, zvb1) {
  zvb1['lineNumber'] = p5$_['lineNumber'], zvb1['columnNumber'] = p5$_['columnNumber'];
}function K1_o1qnwv(alxb) {
  return alxb ? '\x0a@' + (alxb['systemId'] || '') + '#[line:' + alxb['lineNumber'] + ',col:' + alxb['columnNumber'] + ']' : void 0x0;
}function K1_dpl_r(h2s96, l$d_, qn9802) {
  return 'string' == typeof h2s96 ? h2s96['substr'](l$d_, qn9802) : h2s96['length'] >= l$d_ + qn9802 || l$d_ ? new java['lang']['String'](h2s96, l$d_, qn9802) + '' : h2s96;
}function K1_vownq1(axzb, gr5_p) {
  axzb['currentElement'] ? axzb['currentElement']['appendChild'](gr5_p) : axzb['doc']['appendChild'](gr5_p);
}K1_$drl_p['prototype']['parseFromString'] = function (gc3y5, vwbz) {
  var l$xuad = this['options'],
      bvn1ow = new K1_rp_dl(),
      _l$dp = l$xuad['domBuilder'] || new K1_u$dxa(),
      ua$lz = l$xuad['errorHandler'],
      cp3f5g = l$xuad['locator'],
      pld = l$xuad['xmlns'] || {},
      $xulza = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cp3f5g && _l$dp['setDocumentLocator'](cp3f5g), bvn1ow['errorHandler'] = K1_xozba(ua$lz, _l$dp, cp3f5g), bvn1ow['domBuilder'] = l$xuad['domBuilder'] || _l$dp, /\/x?html?$/['test'](vwbz) && ($xulza['nbsp'] = '\u00a0', $xulza['copy'] = '©', pld[''] = 'http://www.w3.org/1999/xhtml'), pld['xml'] = pld['xml'] || 'http://www.w3.org/XML/1998/namespace', gc3y5 ? bvn1ow['parse'](gc3y5, pld, $xulza) : bvn1ow['errorHandler']['error']('invalid doc source'), _l$dp['doc'];
}, K1_u$dxa['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_u_rld$()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_p35rd, bzaxl, ij7met, vq8) {
    var ihs6e = this['doc'],
        iks = ihs6e['createElementNS'](_p35rd, ij7met || bzaxl),
        d$pr5 = vq8['length'];K1_vownq1(this, iks), this['currentElement'] = iks, this['locator'] && K1_vn1qwo(this['locator'], iks);for (var s26kh = 0x0; d$pr5 > s26kh; s26kh++) {
      var _p35rd = vq8['getURI'](s26kh),
          s0q89 = vq8['getValue'](s26kh),
          ij7met = vq8['getQName'](s26kh),
          i6etk = ihs6e['createAttributeNS'](_p35rd, ij7met);this['locator'] && K1_vn1qwo(vq8['getLocator'](s26kh), i6etk), i6etk['value'] = i6etk['nodeValue'] = s0q89, iks['setAttributeNode'](i6etk);
    }
  }, 'endElement': function () {
    {
      var xuzl$ = this['currentElement'];xuzl$['tagName'];
    }this['currentElement'] = xuzl$['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tm7ei, ovzxbw) {
    var sek69 = this['doc']['createProcessingInstruction'](tm7ei, ovzxbw);this['locator'] && K1_vn1qwo(this['locator'], sek69), K1_vownq1(this, sek69);
  }, 'ignorableWhitespace': function () {}, 'characters': function (g5fpc) {
    if (g5fpc = K1_dpl_r['apply'](this, arguments)) {
      if (this['cdata']) var s90k82 = this['doc']['createCDATASection'](g5fpc);else var s90k82 = this['doc']['createTextNode'](g5fpc);this['currentElement'] ? this['currentElement']['appendChild'](s90k82) : /^\s*$/['test'](g5fpc) && this['doc']['appendChild'](s90k82), this['locator'] && K1_vn1qwo(this['locator'], s90k82);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (m74tj) {
    (this['locator'] = m74tj) && (m74tj['lineNumber'] = 0x0);
  }, 'comment': function (bvowz1) {
    bvowz1 = K1_dpl_r['apply'](this, arguments);var ldxua = this['doc']['createComment'](bvowz1);this['locator'] && K1_vn1qwo(this['locator'], ldxua), K1_vownq1(this, ldxua);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ldu_$r, $adu, bw1ovn) {
    var xbuz = this['doc']['implementation'];if (xbuz && xbuz['createDocumentType']) {
      var zulxba = xbuz['createDocumentType'](ldu_$r, $adu, bw1ovn);this['locator'] && K1_vn1qwo(this['locator'], zulxba), K1_vownq1(this, zulxba);
    }
  }, 'warning': function (rg) {
    console['warn']('[xmldom warning]\t' + rg, K1_o1qnwv(this['locator']));
  }, 'error': function (zwvobx) {
    console['error']('[xmldom error]\t' + zwvobx, K1_o1qnwv(this['locator']));
  }, 'fatalError': function (hetik) {
    throw console['error']('[xmldom fatalError]\t' + hetik, K1_o1qnwv(this['locator'])), hetik;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (e6s9) {
  K1_u$dxa['prototype'][e6s9] = function () {
    return null;
  };
});var K1_rp_dl = require('./kkkSAX')['XMLReader'],
    K1_u_rld$ = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_$drl_p;