var C = wx.$a;
function ah5i4d(y1fu67) {
  this['options'] = y1fu67 || { 'locator': {} };
}function azr_s9c(k$y0l, n28eb, mjid5) {
  function n2bp(y06l) {
    var _z9cj = k$y0l[y06l];!_z9cj && hoitb && (_z9cj = 0x2 == k$y0l['length'] ? function (im5j) {
      k$y0l(y06l, im5j);
    } : k$y0l), srvc$[y06l] = _z9cj && function (obp2) {
      _z9cj('[xmldom ' + y06l + ']\t' + obp2 + amzj_9c(mjid5));
    } || function () {};
  }if (!k$y0l) {
    if (n28eb instanceof abh2xpo) return n28eb;k$y0l = n28eb;
  }var srvc$ = {},
      hoitb = k$y0l instanceof Function;return mjid5 = mjid5 || {}, n2bp('warning'), n2bp('error'), n2bp('fatalError'), srvc$;
}function abh2xpo() {
  this['cdata'] = !0x1;
}function aky671(pbtoxh, f0k6yl) {
  f0k6yl['lineNumber'] = pbtoxh['lineNumber'], f0k6yl['columnNumber'] = pbtoxh['columnNumber'];
}function amzj_9c(y7k60f) {
  return y7k60f ? '\x0a@' + (y7k60f['systemId'] || '') + '#[line:' + y7k60f['lineNumber'] + ',col:' + y7k60f['columnNumber'] + ']' : void 0x0;
}function af60lyk(zcjm9, v$qkl, e83g) {
  return 'string' == typeof zcjm9 ? zcjm9['substr'](v$qkl, e83g) : zcjm9['length'] >= v$qkl + e83g || v$qkl ? new java['lang']['String'](zcjm9, v$qkl, e83g) + '' : zcjm9;
}function aq$rv0(ylfk$0, $kvl0f) {
  ylfk$0['currentElement'] ? ylfk$0['currentElement']['appendChild']($kvl0f) : ylfk$0['doc']['appendChild']($kvl0f);
}ah5i4d['prototype']['parseFromString'] = function ($qlsvr, fy70k6) {
  var neg83 = this['options'],
      r$svq = new aitobxh(),
      dt5i4h = neg83['domBuilder'] || new abh2xpo(),
      qv0lr = neg83['errorHandler'],
      s_zc9m = neg83['locator'],
      mzj_c9 = neg83['xmlns'] || {},
      lk$fy0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return s_zc9m && dt5i4h['setDocumentLocator'](s_zc9m), r$svq['errorHandler'] = azr_s9c(qv0lr, dt5i4h, s_zc9m), r$svq['domBuilder'] = neg83['domBuilder'] || dt5i4h, /\/x?html?$/['test'](fy70k6) && (lk$fy0['nbsp'] = '\u00a0', lk$fy0['copy'] = '©', mzj_c9[''] = 'http://www.w3.org/1999/xhtml'), mzj_c9['xml'] = mzj_c9['xml'] || 'http://www.w3.org/XML/1998/namespace', $qlsvr ? r$svq['parse']($qlsvr, mzj_c9, lk$fy0) : r$svq['errorHandler']['error']('invalid doc source'), dt5i4h['doc'];
}, abh2xpo['prototype'] = { 'startDocument': function () {
    this['doc'] = new an28bpe()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (zmj4d9, fylk$, k$0yl, yu6w1) {
    var vrlq = this['doc'],
        m9c_s = vrlq['createElementNS'](zmj4d9, k$0yl || fylk$),
        c9jzm_ = yu6w1['length'];aq$rv0(this, m9c_s), this['currentElement'] = m9c_s, this['locator'] && aky671(this['locator'], m9c_s);for (var hx2pbo = 0x0; c9jzm_ > hx2pbo; hx2pbo++) {
      var zmj4d9 = yu6w1['getURI'](hx2pbo),
          w7u16y = yu6w1['getValue'](hx2pbo),
          k$0yl = yu6w1['getQName'](hx2pbo),
          pobh2 = vrlq['createAttributeNS'](zmj4d9, k$0yl);this['locator'] && aky671(yu6w1['getLocator'](hx2pbo), pobh2), pobh2['value'] = pobh2['nodeValue'] = w7u16y, m9c_s['setAttributeNode'](pobh2);
    }
  }, 'endElement': function () {
    {
      var ihd5t4 = this['currentElement'];ihd5t4['tagName'];
    }this['currentElement'] = ihd5t4['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (q$k0vl, c_vsq) {
    var d5htoi = this['doc']['createProcessingInstruction'](q$k0vl, c_vsq);this['locator'] && aky671(this['locator'], d5htoi), aq$rv0(this, d5htoi);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($rvq) {
    if ($rvq = af60lyk['apply'](this, arguments)) {
      if (this['cdata']) var hbp2xo = this['doc']['createCDATASection']($rvq);else var hbp2xo = this['doc']['createTextNode']($rvq);this['currentElement'] ? this['currentElement']['appendChild'](hbp2xo) : /^\s*$/['test']($rvq) && this['doc']['appendChild'](hbp2xo), this['locator'] && aky671(this['locator'], hbp2xo);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (hpb2x) {
    (this['locator'] = hpb2x) && (hpb2x['lineNumber'] = 0x0);
  }, 'comment': function (k1f67y) {
    k1f67y = af60lyk['apply'](this, arguments);var vqr_s = this['doc']['createComment'](k1f67y);this['locator'] && aky671(this['locator'], vqr_s), aq$rv0(this, vqr_s);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (kf067y, ohibt, ibhxt) {
    var c_vs = this['doc']['implementation'];if (c_vs && c_vs['createDocumentType']) {
      var $qv = c_vs['createDocumentType'](kf067y, ohibt, ibhxt);this['locator'] && aky671(this['locator'], $qv), aq$rv0(this, $qv);
    }
  }, 'warning': function (w7y61u) {
    console['warn']('[xmldom warning]\t' + w7y61u, amzj_9c(this['locator']));
  }, 'error': function (xbhpo2) {
    console['error']('[xmldom error]\t' + xbhpo2, amzj_9c(this['locator']));
  }, 'fatalError': function (pn8e3) {
    throw console['error']('[xmldom fatalError]\t' + pn8e3, amzj_9c(this['locator'])), pn8e3;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hoi5tx) {
  abh2xpo['prototype'][hoi5tx] = function () {
    return null;
  };
});var aitobxh = require('./aacaa')['XMLReader'],
    an28bpe = exports['DOMImplementation'] = require('./aaDOaa')['DOMImplementation'];exports['XMLSerializer'] = require('./aaDOaa')['XMLSerializer'], exports['DOMParser'] = ah5i4d;