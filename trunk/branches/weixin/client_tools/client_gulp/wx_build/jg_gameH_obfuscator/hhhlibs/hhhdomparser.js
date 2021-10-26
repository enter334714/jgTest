var O = wx.$C;
function h_bu7a2(b4y3) {
  this['options'] = b4y3 || { 'locator': {} };
}function h_ybk(rc$ipg, lo418k, cg$ip) {
  function c0spg(ez_5jv) {
    var hqmfe = rc$ipg[ez_5jv];!hqmfe && y3b8 && (hqmfe = 0x2 == rc$ipg['length'] ? function (hefzv) {
      rc$ipg(ez_5jv, hefzv);
    } : rc$ipg), xfmeq[ez_5jv] = hqmfe && function (ehzv) {
      hqmfe('[xmldom ' + ez_5jv + ']\t' + ehzv + h_fm6q(cg$ip));
    } || function () {};
  }if (!rc$ipg) {
    if (lo418k instanceof h_qxnd6) return lo418k;rc$ipg = lo418k;
  }var xfmeq = {},
      y3b8 = rc$ipg instanceof Function;return cg$ip = cg$ip || {}, c0spg('warning'), c0spg('error'), c0spg('fatalError'), xfmeq;
}function h_qxnd6() {
  this['cdata'] = !0x1;
}function h_qehxfm(w0ts, gscp) {
  gscp['lineNumber'] = w0ts['lineNumber'], gscp['columnNumber'] = w0ts['columnNumber'];
}function h_fm6q(gc$pr) {
  return gc$pr ? '\x0a@' + (gc$pr['systemId'] || '') + '#[line:' + gc$pr['lineNumber'] + ',col:' + gc$pr['columnNumber'] + ']' : void 0x0;
}function h_kby384(ya, zh5vje, k18nl) {
  return 'string' == typeof ya ? ya['substr'](zh5vje, k18nl) : ya['length'] >= zh5vje + k18nl || zh5vje ? new java['lang']['String'](ya, zh5vje, k18nl) + '' : ya;
}function h_zh(qehfmx, dnx69) {
  qehfmx['currentElement'] ? qehfmx['currentElement']['appendChild'](dnx69) : qehfmx['doc']['appendChild'](dnx69);
}h_bu7a2['prototype']['parseFromString'] = function (n9dx1, hxm9fq) {
  var u0ts = this['options'],
      $ps0c = new h_ond1l8(),
      hzf5 = u0ts['domBuilder'] || new h_qxnd6(),
      jvze = u0ts['errorHandler'],
      kl8y4 = u0ts['locator'],
      d96qm = u0ts['xmlns'] || {},
      tw0u7 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return kl8y4 && hzf5['setDocumentLocator'](kl8y4), $ps0c['errorHandler'] = h_ybk(jvze, hzf5, kl8y4), $ps0c['domBuilder'] = u0ts['domBuilder'] || hzf5, /\/x?html?$/['test'](hxm9fq) && (tw0u7['nbsp'] = '\u00a0', tw0u7['copy'] = '©', d96qm[''] = 'http://www.w3.org/1999/xhtml'), d96qm['xml'] = d96qm['xml'] || 'http://www.w3.org/XML/1998/namespace', n9dx1 ? $ps0c['parse'](n9dx1, d96qm, tw0u7) : $ps0c['errorHandler']['error']('invalid doc source'), hzf5['doc'];
}, h_qxnd6['prototype'] = { 'startDocument': function () {
    this['doc'] = new h_b834yk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pctsg, b4a3yk, hfxq9m, vhezj5) {
    var uab2w = this['doc'],
        lky843 = uab2w['createElementNS'](pctsg, hfxq9m || b4a3yk),
        cgpri = vhezj5['length'];h_zh(this, lky843), this['currentElement'] = lky843, this['locator'] && h_qehxfm(this['locator'], lky843);for (var yw27ba = 0x0; cgpri > yw27ba; yw27ba++) {
      var pctsg = vhezj5['getURI'](yw27ba),
          nd1l = vhezj5['getValue'](yw27ba),
          hfxq9m = vhezj5['getQName'](yw27ba),
          tgcp0 = uab2w['createAttributeNS'](pctsg, hfxq9m);this['locator'] && h_qehxfm(vhezj5['getLocator'](yw27ba), tgcp0), tgcp0['value'] = tgcp0['nodeValue'] = nd1l, lky843['setAttributeNode'](tgcp0);
    }
  }, 'endElement': function () {
    {
      var qxf6m9 = this['currentElement'];qxf6m9['tagName'];
    }this['currentElement'] = qxf6m9['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (b84ky3, upg0st) {
    var zf5em = this['doc']['createProcessingInstruction'](b84ky3, upg0st);this['locator'] && h_qehxfm(this['locator'], zf5em), h_zh(this, zf5em);
  }, 'ignorableWhitespace': function () {}, 'characters': function (l834y) {
    if (l834y = h_kby384['apply'](this, arguments)) {
      if (this['cdata']) var gp$0c = this['doc']['createCDATASection'](l834y);else var gp$0c = this['doc']['createTextNode'](l834y);this['currentElement'] ? this['currentElement']['appendChild'](gp$0c) : /^\s*$/['test'](l834y) && this['doc']['appendChild'](gp$0c), this['locator'] && h_qehxfm(this['locator'], gp$0c);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (by73) {
    (this['locator'] = by73) && (by73['lineNumber'] = 0x0);
  }, 'comment': function (jev_) {
    jev_ = h_kby384['apply'](this, arguments);var upst0w = this['doc']['createComment'](jev_);this['locator'] && h_qehxfm(this['locator'], upst0w), h_zh(this, upst0w);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (emfxqh, lo8n1d, mfqehx) {
    var prgi = this['doc']['implementation'];if (prgi && prgi['createDocumentType']) {
      var ay23b7 = prgi['createDocumentType'](emfxqh, lo8n1d, mfqehx);this['locator'] && h_qehxfm(this['locator'], ay23b7), h_zh(this, ay23b7);
    }
  }, 'warning': function (irgp$) {
    console['warn']('[xmldom warning]\t' + irgp$, h_fm6q(this['locator']));
  }, 'error': function (pstw0) {
    console['error']('[xmldom error]\t' + pstw0, h_fm6q(this['locator']));
  }, 'fatalError': function (igcr$) {
    throw console['error']('[xmldom fatalError]\t' + igcr$, h_fm6q(this['locator'])), igcr$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (aby2w) {
  h_qxnd6['prototype'][aby2w] = function () {
    return null;
  };
});var h_ond1l8 = require('./hhhsax')['XMLReader'],
    h_b834yk = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = h_bu7a2;