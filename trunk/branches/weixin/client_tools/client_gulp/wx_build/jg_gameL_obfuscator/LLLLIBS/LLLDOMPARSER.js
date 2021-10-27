var W = wx.$l;
function L9fnwgbk(hr3lm4) {
  this['options'] = hr3lm4 || { 'locator': {} };
}function L9_57$9(j1rl0c, sc8kf, ngwkb) {
  function uz42m(ygwq9b) {
    var jhrcl = j1rl0c[ygwq9b];!jhrcl && fwqbng && (jhrcl = 0x2 == j1rl0c['length'] ? function (mh34z) {
      j1rl0c(ygwq9b, mh34z);
    } : j1rl0c), wnbgk[ygwq9b] = jhrcl && function (otzui2) {
      jhrcl('[xmldom ' + ygwq9b + ']\t' + otzui2 + L9zo(ngwkb));
    } || function () {};
  }if (!j1rl0c) {
    if (sc8kf instanceof L9hr03m) return sc8kf;j1rl0c = sc8kf;
  }var wnbgk = {},
      fwqbng = j1rl0c instanceof Function;return ngwkb = ngwkb || {}, uz42m('warning'), uz42m('error'), uz42m('fatalError'), wnbgk;
}function L9hr03m() {
  this['cdata'] = !0x1;
}function L9gyb(ns8fbk, v6ead) {
  v6ead['lineNumber'] = ns8fbk['lineNumber'], v6ead['columnNumber'] = ns8fbk['columnNumber'];
}function L9zo(yqwgn) {
  return yqwgn ? '\x0a@' + (yqwgn['systemId'] || '') + '#[line:' + yqwgn['lineNumber'] + ',col:' + yqwgn['columnNumber'] + ']' : void 0x0;
}function L9rlc1j(j81sc0, cs1k8, jcs81) {
  return 'string' == typeof j81sc0 ? j81sc0['substr'](cs1k8, jcs81) : j81sc0['length'] >= cs1k8 + jcs81 || cs1k8 ? new java['lang']['String'](j81sc0, cs1k8, jcs81) + '' : j81sc0;
}function L9nwqgb(kfwnb, bqfgw) {
  kfwnb['currentElement'] ? kfwnb['currentElement']['appendChild'](bqfgw) : kfwnb['doc']['appendChild'](bqfgw);
}L9fnwgbk['prototype']['parseFromString'] = function (m234zu, gqywb9) {
  var m03l = this['options'],
      r43hmz = new L9mzr4h(),
      bgwyq = m03l['domBuilder'] || new L9hr03m(),
      gw9_ = m03l['errorHandler'],
      ksbn8f = m03l['locator'],
      j0crlh = m03l['xmlns'] || {},
      ea75_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ksbn8f && bgwyq['setDocumentLocator'](ksbn8f), r43hmz['errorHandler'] = L9_57$9(gw9_, bgwyq, ksbn8f), r43hmz['domBuilder'] = m03l['domBuilder'] || bgwyq, /\/x?html?$/['test'](gqywb9) && (ea75_['nbsp'] = '\u00a0', ea75_['copy'] = '©', j0crlh[''] = 'http://www.w3.org/1999/xhtml'), j0crlh['xml'] = j0crlh['xml'] || 'http://www.w3.org/XML/1998/namespace', m234zu ? r43hmz['parse'](m234zu, j0crlh, ea75_) : r43hmz['errorHandler']['error']('invalid doc source'), bgwyq['doc'];
}, L9hr03m['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9e9$5_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gksnb, $wq9y, kwngf, xiotu) {
    var rl30jh = this['doc'],
        a7v65 = rl30jh['createElementNS'](gksnb, kwngf || $wq9y),
        w_$q = xiotu['length'];L9nwqgb(this, a7v65), this['currentElement'] = a7v65, this['locator'] && L9gyb(this['locator'], a7v65);for (var y$_w9 = 0x0; w_$q > y$_w9; y$_w9++) {
      var gksnb = xiotu['getURI'](y$_w9),
          h3r0ml = xiotu['getValue'](y$_w9),
          kwngf = xiotu['getQName'](y$_w9),
          hzrm34 = rl30jh['createAttributeNS'](gksnb, kwngf);this['locator'] && L9gyb(xiotu['getLocator'](y$_w9), hzrm34), hzrm34['value'] = hzrm34['nodeValue'] = h3r0ml, a7v65['setAttributeNode'](hzrm34);
    }
  }, 'endElement': function () {
    {
      var wfbgkn = this['currentElement'];wfbgkn['tagName'];
    }this['currentElement'] = wfbgkn['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (z32u4m, ae7) {
    var umi24 = this['doc']['createProcessingInstruction'](z32u4m, ae7);this['locator'] && L9gyb(this['locator'], umi24), L9nwqgb(this, umi24);
  }, 'ignorableWhitespace': function () {}, 'characters': function (lj01c) {
    if (lj01c = L9rlc1j['apply'](this, arguments)) {
      if (this['cdata']) var gbqnfw = this['doc']['createCDATASection'](lj01c);else var gbqnfw = this['doc']['createTextNode'](lj01c);this['currentElement'] ? this['currentElement']['appendChild'](gbqnfw) : /^\s*$/['test'](lj01c) && this['doc']['appendChild'](gbqnfw), this['locator'] && L9gyb(this['locator'], gbqnfw);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (r3lm0h) {
    (this['locator'] = r3lm0h) && (r3lm0h['lineNumber'] = 0x0);
  }, 'comment': function (_q9$w) {
    _q9$w = L9rlc1j['apply'](this, arguments);var itx2uo = this['doc']['createComment'](_q9$w);this['locator'] && L9gyb(this['locator'], itx2uo), L9nwqgb(this, itx2uo);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (mzu32, nsgbf, sbnkf8) {
    var daepv6 = this['doc']['implementation'];if (daepv6 && daepv6['createDocumentType']) {
      var yw_$9q = daepv6['createDocumentType'](mzu32, nsgbf, sbnkf8);this['locator'] && L9gyb(this['locator'], yw_$9q), L9nwqgb(this, yw_$9q);
    }
  }, 'warning': function (cjrl01) {
    console['warn']('[xmldom warning]\t' + cjrl01, L9zo(this['locator']));
  }, 'error': function (mrl0h3) {
    console['error']('[xmldom error]\t' + mrl0h3, L9zo(this['locator']));
  }, 'fatalError': function (j81l0c) {
    throw console['error']('[xmldom fatalError]\t' + j81l0c, L9zo(this['locator'])), j81l0c;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fs1nk8) {
  L9hr03m['prototype'][fs1nk8] = function () {
    return null;
  };
});var L9mzr4h = require('./lllSAX')['XMLReader'],
    L9e9$5_ = exports['DOMImplementation'] = require('./LLLDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./LLLDOM')['XMLSerializer'], exports['DOMParser'] = L9fnwgbk;