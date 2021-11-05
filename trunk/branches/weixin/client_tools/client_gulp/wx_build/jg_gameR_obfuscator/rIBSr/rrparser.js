var i = wx.$R;
function r__6au1(oj2ixy) {
  this['options'] = oj2ixy || { 'locator': {} };
}function r_s32lzt(y8kiow, vtsz3, b4$9a1) {
  function ha_bu1(gw7e) {
    var $a91u = y8kiow[gw7e];!$a91u && _1hau6 && ($a91u = 0x2 == y8kiow['length'] ? function (okyw8m) {
      y8kiow(gw7e, okyw8m);
    } : y8kiow), szj2ix[gw7e] = $a91u && function (lv3tsz) {
      $a91u('[xmldom ' + gw7e + ']\t' + lv3tsz + r_ykwi(b4$9a1));
    } || function () {};
  }if (!y8kiow) {
    if (vtsz3 instanceof r_io2jxz) return vtsz3;y8kiow = vtsz3;
  }var szj2ix = {},
      _1hau6 = y8kiow instanceof Function;return b4$9a1 = b4$9a1 || {}, ha_bu1('warning'), ha_bu1('error'), ha_bu1('fatalError'), szj2ix;
}function r_io2jxz() {
  this['cdata'] = !0x1;
}function r_wgmkr(c6h5n_, pc5nfd) {
  pc5nfd['lineNumber'] = c6h5n_['lineNumber'], pc5nfd['columnNumber'] = c6h5n_['columnNumber'];
}function r_ykwi(oiyw8k) {
  return oiyw8k ? '\x0a@' + (oiyw8k['systemId'] || '') + '#[line:' + oiyw8k['lineNumber'] + ',col:' + oiyw8k['columnNumber'] + ']' : void 0x0;
}function r_r8m7w(s2x3tz, $b_a1, fndepq) {
  return 'string' == typeof s2x3tz ? s2x3tz['substr']($b_a1, fndepq) : s2x3tz['length'] >= $b_a1 + fndepq || $b_a1 ? new java['lang']['String'](s2x3tz, $b_a1, fndepq) + '' : s2x3tz;
}function r_i2xo(hfn56, iy8wo) {
  hfn56['currentElement'] ? hfn56['currentElement']['appendChild'](iy8wo) : hfn56['doc']['appendChild'](iy8wo);
}r__6au1['prototype']['parseFromString'] = function (yow8k, _b1au) {
  var s2izj = this['options'],
      grwe7m = new r_wge(),
      n_56h = s2izj['domBuilder'] || new r_io2jxz(),
      tzsl = s2izj['errorHandler'],
      rgq7m = s2izj['locator'],
      j2ozxi = s2izj['xmlns'] || {},
      pefq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return rgq7m && n_56h['setDocumentLocator'](rgq7m), grwe7m['errorHandler'] = r_s32lzt(tzsl, n_56h, rgq7m), grwe7m['domBuilder'] = s2izj['domBuilder'] || n_56h, /\/x?html?$/['test'](_b1au) && (pefq['nbsp'] = '\u00a0', pefq['copy'] = '©', j2ozxi[''] = 'http://www.w3.org/1999/xhtml'), j2ozxi['xml'] = j2ozxi['xml'] || 'http://www.w3.org/XML/1998/namespace', yow8k ? grwe7m['parse'](yow8k, j2ozxi, pefq) : grwe7m['errorHandler']['error']('invalid doc source'), n_56h['doc'];
}, r_io2jxz['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_chu5_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ykoj8i, dfpeg, p5, ikoj) {
    var gpqer7 = this['doc'],
        nqefpd = gpqer7['createElementNS'](ykoj8i, p5 || dfpeg),
        wokmy8 = ikoj['length'];r_i2xo(this, nqefpd), this['currentElement'] = nqefpd, this['locator'] && r_wgmkr(this['locator'], nqefpd);for (var wiyok8 = 0x0; wokmy8 > wiyok8; wiyok8++) {
      var ykoj8i = ikoj['getURI'](wiyok8),
          ba1_$u = ikoj['getValue'](wiyok8),
          p5 = ikoj['getQName'](wiyok8),
          r8ywmk = gpqer7['createAttributeNS'](ykoj8i, p5);this['locator'] && r_wgmkr(ikoj['getLocator'](wiyok8), r8ywmk), r8ywmk['value'] = r8ywmk['nodeValue'] = ba1_$u, nqefpd['setAttributeNode'](r8ywmk);
    }
  }, 'endElement': function () {
    {
      var i2joxz = this['currentElement'];i2joxz['tagName'];
    }this['currentElement'] = i2joxz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fc56, egp7d) {
    var rg7wem = this['doc']['createProcessingInstruction'](fc56, egp7d);this['locator'] && r_wgmkr(this['locator'], rg7wem), r_i2xo(this, rg7wem);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($au_1b) {
    if ($au_1b = r_r8m7w['apply'](this, arguments)) {
      if (this['cdata']) var dgqe7p = this['doc']['createCDATASection']($au_1b);else var dgqe7p = this['doc']['createTextNode']($au_1b);this['currentElement'] ? this['currentElement']['appendChild'](dgqe7p) : /^\s*$/['test']($au_1b) && this['doc']['appendChild'](dgqe7p), this['locator'] && r_wgmkr(this['locator'], dgqe7p);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (c56_hn) {
    (this['locator'] = c56_hn) && (c56_hn['lineNumber'] = 0x0);
  }, 'comment': function (xo8i) {
    xo8i = r_r8m7w['apply'](this, arguments);var w7mkg = this['doc']['createComment'](xo8i);this['locator'] && r_wgmkr(this['locator'], w7mkg), r_i2xo(this, w7mkg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (h_u61a, gpfdeq, fg) {
    var gdfqep = this['doc']['implementation'];if (gdfqep && gdfqep['createDocumentType']) {
      var p7rqe = gdfqep['createDocumentType'](h_u61a, gpfdeq, fg);this['locator'] && r_wgmkr(this['locator'], p7rqe), r_i2xo(this, p7rqe);
    }
  }, 'warning': function ($1bu9a) {
    console['warn']('[xmldom warning]\t' + $1bu9a, r_ykwi(this['locator']));
  }, 'error': function (xj8io) {
    console['error']('[xmldom error]\t' + xj8io, r_ykwi(this['locator']));
  }, 'fatalError': function (a$u_b) {
    throw console['error']('[xmldom fatalError]\t' + a$u_b, r_ykwi(this['locator'])), a$u_b;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (owkm8) {
  r_io2jxz['prototype'][owkm8] = function () {
    return null;
  };
});var r_wge = require('./rS12r')['XMLReader'],
    r_chu5_ = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r__6au1;