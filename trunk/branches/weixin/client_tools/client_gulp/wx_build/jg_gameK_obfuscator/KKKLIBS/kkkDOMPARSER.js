var U = wx.$k;
function K1_f0o2w(zse5a) {
  this['options'] = zse5a || { 'locator': {} };
}function K1_z0og(ivmj7n, k8cnjl, mv_h7i) {
  function y5ez0(y0es) {
    var sz05ye = ivmj7n[y0es];!sz05ye && $b6a && (sz05ye = 0x2 == ivmj7n['length'] ? function (y5sz0) {
      ivmj7n(y0es, y5sz0);
    } : ivmj7n), fgduwq[y0es] = sz05ye && function (t_ihm3) {
      sz05ye('[xmldom ' + y0es + ']\t' + t_ihm3 + K1_t9b1x(mv_h7i));
    } || function () {};
  }if (!ivmj7n) {
    if (k8cnjl instanceof K1_hvmi_7) return k8cnjl;ivmj7n = k8cnjl;
  }var fgduwq = {},
      $b6a = ivmj7n instanceof Function;return mv_h7i = mv_h7i || {}, y5ez0('warning'), y5ez0('error'), y5ez0('fatalError'), fgduwq;
}function K1_hvmi_7() {
  this['cdata'] = !0x1;
}function K1_cj7n8k(e5ozy0, cjk8n7) {
  cjk8n7['lineNumber'] = e5ozy0['lineNumber'], cjk8n7['columnNumber'] = e5ozy0['columnNumber'];
}function K1_t9b1x(a56$es) {
  return a56$es ? '\x0a@' + (a56$es['systemId'] || '') + '#[line:' + a56$es['lineNumber'] + ',col:' + a56$es['columnNumber'] + ']' : void 0x0;
}function K1_m_7iv(eza5$s, s$6ae1, h3_mi) {
  return 'string' == typeof eza5$s ? eza5$s['substr'](s$6ae1, h3_mi) : eza5$s['length'] >= s$6ae1 + h3_mi || s$6ae1 ? new java['lang']['String'](eza5$s, s$6ae1, h3_mi) + '' : eza5$s;
}function K1_ht(aye, z5s0y) {
  aye['currentElement'] ? aye['currentElement']['appendChild'](z5s0y) : aye['doc']['appendChild'](z5s0y);
}K1_f0o2w['prototype']['parseFromString'] = function (a91$s, esa6$1) {
  var g0oyz = this['options'],
      gfuwqd = new K1_t43h_x(),
      yzo05e = g0oyz['domBuilder'] || new K1_hvmi_7(),
      ivh3 = g0oyz['errorHandler'],
      se5yza = g0oyz['locator'],
      ji = g0oyz['xmlns'] || {},
      j7n8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return se5yza && yzo05e['setDocumentLocator'](se5yza), gfuwqd['errorHandler'] = K1_z0og(ivh3, yzo05e, se5yza), gfuwqd['domBuilder'] = g0oyz['domBuilder'] || yzo05e, /\/x?html?$/['test'](esa6$1) && (j7n8['nbsp'] = '\u00a0', j7n8['copy'] = '©', ji[''] = 'http://www.w3.org/1999/xhtml'), ji['xml'] = ji['xml'] || 'http://www.w3.org/XML/1998/namespace', a91$s ? gfuwqd['parse'](a91$s, ji, j7n8) : gfuwqd['errorHandler']['error']('invalid doc source'), yzo05e['doc'];
}, K1_hvmi_7['prototype'] = { 'startDocument': function () {
    this['doc'] = new K1_ljck()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ea1s$, owg2f0, i_3v, b39t) {
    var wgfuq = this['doc'],
        i_hm7v = wgfuq['createElementNS'](ea1s$, i_3v || owg2f0),
        ae6$5 = b39t['length'];K1_ht(this, i_hm7v), this['currentElement'] = i_hm7v, this['locator'] && K1_cj7n8k(this['locator'], i_hm7v);for (var dowf2 = 0x0; ae6$5 > dowf2; dowf2++) {
      var ea1s$ = b39t['getURI'](dowf2),
          v8n7mj = b39t['getValue'](dowf2),
          i_3v = b39t['getQName'](dowf2),
          j87knc = wgfuq['createAttributeNS'](ea1s$, i_3v);this['locator'] && K1_cj7n8k(b39t['getLocator'](dowf2), j87knc), j87knc['value'] = j87knc['nodeValue'] = v8n7mj, i_hm7v['setAttributeNode'](j87knc);
    }
  }, 'endElement': function () {
    {
      var ae5ysz = this['currentElement'];ae5ysz['tagName'];
    }this['currentElement'] = ae5ysz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (e5yas, z5esy0) {
    var _3i4 = this['doc']['createProcessingInstruction'](e5yas, z5esy0);this['locator'] && K1_cj7n8k(this['locator'], _3i4), K1_ht(this, _3i4);
  }, 'ignorableWhitespace': function () {}, 'characters': function (jv7k) {
    if (jv7k = K1_m_7iv['apply'](this, arguments)) {
      if (this['cdata']) var iv_hm = this['doc']['createCDATASection'](jv7k);else var iv_hm = this['doc']['createTextNode'](jv7k);this['currentElement'] ? this['currentElement']['appendChild'](iv_hm) : /^\s*$/['test'](jv7k) && this['doc']['appendChild'](iv_hm), this['locator'] && K1_cj7n8k(this['locator'], iv_hm);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (mnv7i) {
    (this['locator'] = mnv7i) && (mnv7i['lineNumber'] = 0x0);
  }, 'comment': function (h_tx) {
    h_tx = K1_m_7iv['apply'](this, arguments);var qgwduf = this['doc']['createComment'](h_tx);this['locator'] && K1_cj7n8k(this['locator'], qgwduf), K1_ht(this, qgwduf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (y2o50, xb1$96, wgf) {
    var y052oz = this['doc']['implementation'];if (y052oz && y052oz['createDocumentType']) {
      var qdfuw = y052oz['createDocumentType'](y2o50, xb1$96, wgf);this['locator'] && K1_cj7n8k(this['locator'], qdfuw), K1_ht(this, qdfuw);
    }
  }, 'warning': function (quwfd) {
    console['warn']('[xmldom warning]\t' + quwfd, K1_t9b1x(this['locator']));
  }, 'error': function (ae$sz) {
    console['error']('[xmldom error]\t' + ae$sz, K1_t9b1x(this['locator']));
  }, 'fatalError': function (of0w) {
    throw console['error']('[xmldom fatalError]\t' + of0w, K1_t9b1x(this['locator'])), of0w;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (jlc8nk) {
  K1_hvmi_7['prototype'][jlc8nk] = function () {
    return null;
  };
});var K1_t43h_x = require('./kkkSAX')['XMLReader'],
    K1_ljck = exports['DOMImplementation'] = require('./kkkDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./kkkDOM')['XMLSerializer'], exports['DOMParser'] = K1_f0o2w;