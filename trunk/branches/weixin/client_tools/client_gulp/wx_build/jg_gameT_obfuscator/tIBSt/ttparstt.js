var M = wx.$T;
function tmh516(n31g68) {
  this['options'] = n31g68 || { 'locator': {} };
}function tgn3jbr(dop7f, tvi2c9, fpoz7) {
  function _hm0x(dfvzp$) {
    var zp7fdo = dop7f[dfvzp$];!zp7fdo && itc4l2 && (zp7fdo = 0x2 == dop7f['length'] ? function (x_0mqy) {
      dop7f(dfvzp$, x_0mqy);
    } : dop7f), akgrjb[dfvzp$] = zp7fdo && function (n83g1) {
      zp7fdo('[xmldom ' + dfvzp$ + ']\t' + n83g1 + tuksjba(fpoz7));
    } || function () {};
  }if (!dop7f) {
    if (tvi2c9 instanceof txo07eq) return tvi2c9;dop7f = tvi2c9;
  }var akgrjb = {},
      itc4l2 = dop7f instanceof Function;return fpoz7 = fpoz7 || {}, _hm0x('warning'), _hm0x('error'), _hm0x('fatalError'), akgrjb;
}function txo07eq() {
  this['cdata'] = !0x1;
}function tqox0e(z7fepo, jgr38n) {
  jgr38n['lineNumber'] = z7fepo['lineNumber'], jgr38n['columnNumber'] = z7fepo['columnNumber'];
}function tuksjba(p$fdv) {
  return p$fdv ? '\x0a@' + (p$fdv['systemId'] || '') + '#[line:' + p$fdv['lineNumber'] + ',col:' + p$fdv['columnNumber'] + ']' : void 0x0;
}function tn6381(jbkasr, pvz, akjr) {
  return 'string' == typeof jbkasr ? jbkasr['substr'](pvz, akjr) : jbkasr['length'] >= pvz + akjr || pvz ? new java['lang']['String'](jbkasr, pvz, akjr) + '' : jbkasr;
}function txyqe0(jbkr, _hym5w) {
  jbkr['currentElement'] ? jbkr['currentElement']['appendChild'](_hym5w) : jbkr['doc']['appendChild'](_hym5w);
}tmh516['prototype']['parseFromString'] = function (rj3bgn, rgnajb) {
  var x0qy_ = this['options'],
      d7z$f = new tasjkbr(),
      $idp = x0qy_['domBuilder'] || new txo07eq(),
      yq_x0e = x0qy_['errorHandler'],
      v9p$f = x0qy_['locator'],
      rn3gjb = x0qy_['xmlns'] || {},
      qoey0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return v9p$f && $idp['setDocumentLocator'](v9p$f), d7z$f['errorHandler'] = tgn3jbr(yq_x0e, $idp, v9p$f), d7z$f['domBuilder'] = x0qy_['domBuilder'] || $idp, /\/x?html?$/['test'](rgnajb) && (qoey0['nbsp'] = '\u00a0', qoey0['copy'] = '©', rn3gjb[''] = 'http://www.w3.org/1999/xhtml'), rn3gjb['xml'] = rn3gjb['xml'] || 'http://www.w3.org/XML/1998/namespace', rj3bgn ? d7z$f['parse'](rj3bgn, rn3gjb, qoey0) : d7z$f['errorHandler']['error']('invalid doc source'), $idp['doc'];
}, txo07eq['prototype'] = { 'startDocument': function () {
    this['doc'] = new tp7d$f()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (q70oez, rjgnba, myw_h5, wh6815) {
    var brgakj = this['doc'],
        vdpf$z = brgakj['createElementNS'](q70oez, myw_h5 || rjgnba),
        v$9dpi = wh6815['length'];txyqe0(this, vdpf$z), this['currentElement'] = vdpf$z, this['locator'] && tqox0e(this['locator'], vdpf$z);for (var i9vcd$ = 0x0; v$9dpi > i9vcd$; i9vcd$++) {
      var q70oez = wh6815['getURI'](i9vcd$),
          rsbka = wh6815['getValue'](i9vcd$),
          myw_h5 = wh6815['getQName'](i9vcd$),
          sakbr = brgakj['createAttributeNS'](q70oez, myw_h5);this['locator'] && tqox0e(wh6815['getLocator'](i9vcd$), sakbr), sakbr['value'] = sakbr['nodeValue'] = rsbka, vdpf$z['setAttributeNode'](sakbr);
    }
  }, 'endElement': function () {
    {
      var fzp$7 = this['currentElement'];fzp$7['tagName'];
    }this['currentElement'] = fzp$7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (myhx, bgajn) {
    var fp$zd7 = this['doc']['createProcessingInstruction'](myhx, bgajn);this['locator'] && tqox0e(this['locator'], fp$zd7), txyqe0(this, fp$zd7);
  }, 'ignorableWhitespace': function () {}, 'characters': function (srkabj) {
    if (srkabj = tn6381['apply'](this, arguments)) {
      if (this['cdata']) var h_myxw = this['doc']['createCDATASection'](srkabj);else var h_myxw = this['doc']['createTextNode'](srkabj);this['currentElement'] ? this['currentElement']['appendChild'](h_myxw) : /^\s*$/['test'](srkabj) && this['doc']['appendChild'](h_myxw), this['locator'] && tqox0e(this['locator'], h_myxw);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rjbang) {
    (this['locator'] = rjbang) && (rjbang['lineNumber'] = 0x0);
  }, 'comment': function (dfzpo) {
    dfzpo = tn6381['apply'](this, arguments);var vc2i9t = this['doc']['createComment'](dfzpo);this['locator'] && tqox0e(this['locator'], vc2i9t), txyqe0(this, vc2i9t);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (e_0yq, kbarjg, oezp7) {
    var gajkb = this['doc']['implementation'];if (gajkb && gajkb['createDocumentType']) {
      var qfe = gajkb['createDocumentType'](e_0yq, kbarjg, oezp7);this['locator'] && tqox0e(this['locator'], qfe), txyqe0(this, qfe);
    }
  }, 'warning': function (qef) {
    console['warn']('[xmldom warning]\t' + qef, tuksjba(this['locator']));
  }, 'error': function (mhy_w) {
    console['error']('[xmldom error]\t' + mhy_w, tuksjba(this['locator']));
  }, 'fatalError': function (hw65_m) {
    throw console['error']('[xmldom fatalError]\t' + hw65_m, tuksjba(this['locator'])), hw65_m;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (p$9ivd) {
  txo07eq['prototype'][p$9ivd] = function () {
    return null;
  };
});var tasjkbr = require('./tT12tt')['XMLReader'],
    tp7d$f = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = tmh516;