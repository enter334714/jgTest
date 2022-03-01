var M = wx.$T;
function txmhwy_(h86w) {
  this['options'] = h86w || { 'locator': {} };
}function tzdo7fp(ofpez, hmy5w, t2c94) {
  function arjbgn(lti2) {
    var e7oz = ofpez[lti2];!e7oz && bngraj && (e7oz = 0x2 == ofpez['length'] ? function (jkua) {
      ofpez(lti2, jkua);
    } : ofpez), zfpvd$[lti2] = e7oz ? function (gnjbr3) {
      e7oz('[xmldom ' + lti2 + ']\t' + gnjbr3 + tod7(t2c94));
    } : function () {};
  }if (!ofpez) {
    if (hmy5w instanceof tvfp9d$) return hmy5w;ofpez = hmy5w;
  }var zfpvd$ = {},
      bngraj = ofpez instanceof Function;return t2c94 = t2c94 || {}, arjbgn('warning'), arjbgn('error'), arjbgn('fatalError'), zfpvd$;
}function tvfp9d$() {
  this['cdata'] = !0x1;
}function trnbagj(m0q, $f9dp) {
  $f9dp['lineNumber'] = m0q['lineNumber'], $f9dp['columnNumber'] = m0q['columnNumber'];
}function tod7(f7p$zd) {
  return f7p$zd ? '\x0a@' + (f7p$zd['systemId'] || '') + '#[line:' + f7p$zd['lineNumber'] + ',col:' + f7p$zd['columnNumber'] + ']' : void 0x0;
}function txyoq0e(x0qmy, brj3ng, r8gjn3) {
  return 'string' == typeof x0qmy ? x0qmy['substr'](brj3ng, r8gjn3) : x0qmy['length'] >= brj3ng + r8gjn3 || brj3ng ? new java['lang']['String'](x0qmy, brj3ng, r8gjn3) + '' : x0qmy;
}function tgbj3rn(t2c4l, mhyxw_) {
  (t2c4l['currentElement'] || t2c4l['doc'])['appendChild'](mhyxw_);
}txmhwy_['prototype']['parseFromString'] = function (jakbgr, _6m5w) {
  var j8rg = this['options'],
      cvt$9 = new tn6358(),
      t24ci = j8rg['domBuilder'] || new tvfp9d$(),
      l2tic4 = j8rg['errorHandler'],
      ic294 = j8rg['locator'],
      qfzoe = j8rg['xmlns'] || {},
      rbgnj3 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ic294 && t24ci['setDocumentLocator'](ic294), cvt$9['errorHandler'] = tzdo7fp(l2tic4, t24ci, ic294), cvt$9['domBuilder'] = j8rg['domBuilder'] || t24ci, /\/x?html?$/['test'](_6m5w) && (rbgnj3['nbsp'] = '\u00a0', rbgnj3['copy'] = '©', qfzoe[''] = 'http://www.w3.org/1999/xhtml'), qfzoe['xml'] = qfzoe['xml'] || 'http://www.w3.org/XML/1998/namespace', jakbgr ? cvt$9['parse'](jakbgr, qfzoe, rbgnj3) : cvt$9['errorHandler']['error']('invalid doc source'), t24ci['doc'];
}, tvfp9d$['prototype'] = { 'startDocument': function () {
    this['doc'] = new tqx7e0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (h1w65, yqxo, g3nbr, bgrja) {
    var hy5wm = this['doc'],
        rbj3ng = hy5wm['createElementNS'](h1w65, g3nbr || yqxo),
        tc24i = bgrja['length'];tgbj3rn(this, rbj3ng), this['currentElement'] = rbj3ng, this['locator'] && trnbagj(this['locator'], rbj3ng);for (var oefz7p = 0x0; oefz7p < tc24i; oefz7p++) {
      var h1w65 = bgrja['getURI'](oefz7p),
          i$dp = bgrja['getValue'](oefz7p),
          g3nbr = bgrja['getQName'](oefz7p),
          _ywm5h = hy5wm['createAttributeNS'](h1w65, g3nbr);this['locator'] && trnbagj(bgrja['getLocator'](oefz7p), _ywm5h), _ywm5h['value'] = _ywm5h['nodeValue'] = i$dp, rbj3ng['setAttributeNode'](_ywm5h);
    }
  }, 'endElement': function () {
    var vdf$pz = this['currentElement'];vdf$pz['tagName'], this['currentElement'] = vdf$pz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (q_ey0x, ip9d) {
    q_ey0x = this['doc']['createProcessingInstruction'](q_ey0x, ip9d), (this['locator'] && trnbagj(this['locator'], q_ey0x), tgbj3rn(this, q_ey0x));
  }, 'ignorableWhitespace': function () {}, 'characters': function (di$pv) {
    var p$dfvz;(di$pv = txyoq0e['apply'](this, arguments)) && (p$dfvz = this['cdata'] ? this['doc']['createCDATASection'](di$pv) : this['doc']['createTextNode'](di$pv), this['currentElement'] ? this['currentElement']['appendChild'](p$dfvz) : /^\s*$/['test'](di$pv) && this['doc']['appendChild'](p$dfvz), this['locator'] && trnbagj(this['locator'], p$dfvz));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($dvp) {
    (this['locator'] = $dvp) && ($dvp['lineNumber'] = 0x0);
  }, 'comment': function (iv9pd) {
    iv9pd = txyoq0e['apply'](this, arguments);var hw6_5 = this['doc']['createComment'](iv9pd);this['locator'] && trnbagj(this['locator'], hw6_5), tgbj3rn(this, hw6_5);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (vict$, qye_x, ex0oq7) {
    var zdp$7 = this['doc']['implementation'];zdp$7 && zdp$7['createDocumentType'] && (zdp$7 = zdp$7['createDocumentType'](vict$, qye_x, ex0oq7), this['locator'] && trnbagj(this['locator'], zdp$7), tgbj3rn(this, zdp$7));
  }, 'warning': function (rn38g) {
    console['warn']('[xmldom warning]\t' + rn38g, tod7(this['locator']));
  }, 'error': function (rsjbka) {
    console['error']('[xmldom error]\t' + rsjbka, tod7(this['locator']));
  }, 'fatalError': function (c9$) {
    throw console['error']('[xmldom fatalError]\t' + c9$, tod7(this['locator'])), c9$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (w1536) {
  tvfp9d$['prototype'][w1536] = function () {
    return null;
  };
});var tn6358 = require('./tT12tt')['XMLReader'],
    tqx7e0 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = txmhwy_;