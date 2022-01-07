var k = wx.$f;
function fcwojd(o64k_) {
  this['options'] = o64k_ || { 'locator': {} };
}function fq52_k(vbitm, dj2c6o, sojc) {
  function zewnx8(djnxsw) {
    var _hkq0 = vbitm[djnxsw];!_hkq0 && nz8ew && (_hkq0 = 0x2 == vbitm['length'] ? function (oc46_) {
      vbitm(djnxsw, oc46_);
    } : vbitm), himt0f[djnxsw] = _hkq0 && function (itvb) {
      _hkq0('[xmldom ' + djnxsw + ']\t' + itvb + fuvb1g9(sojc));
    } || function () {};
  }if (!vbitm) {
    if (dj2c6o instanceof fenxzr) return dj2c6o;vbitm = dj2c6o;
  }var himt0f = {},
      nz8ew = vbitm instanceof Function;return sojc = sojc || {}, zewnx8('warning'), zewnx8('error'), zewnx8('fatalError'), himt0f;
}function fenxzr() {
  this['cdata'] = !0x1;
}function fjdoc26(eszxnw, $r837) {
  $r837['lineNumber'] = eszxnw['lineNumber'], $r837['columnNumber'] = eszxnw['columnNumber'];
}function fuvb1g9(kt0hq) {
  return kt0hq ? '\x0a@' + (kt0hq['systemId'] || '') + '#[line:' + kt0hq['lineNumber'] + ',col:' + kt0hq['columnNumber'] + ']' : void 0x0;
}function f_k254(xn8we, scd6, bifumv) {
  return 'string' == typeof xn8we ? xn8we['substr'](scd6, bifumv) : xn8we['length'] >= scd6 + bifumv || scd6 ? new java['lang']['String'](xn8we, scd6, bifumv) + '' : xn8we;
}function fdsxwnj(sdwcnj, _h0qk) {
  sdwcnj['currentElement'] ? sdwcnj['currentElement']['appendChild'](_h0qk) : sdwcnj['doc']['appendChild'](_h0qk);
}fcwojd['prototype']['parseFromString'] = function (xw, e8zrnx) {
  var sdxwn = this['options'],
      _k0h5q = new ffbmv(),
      j2d6co = sdxwn['domBuilder'] || new fenxzr(),
      fmbhi = sdxwn['errorHandler'],
      jwndc = sdxwn['locator'],
      ivfbt = sdxwn['xmlns'] || {},
      tmibv = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jwndc && j2d6co['setDocumentLocator'](jwndc), _k0h5q['errorHandler'] = fq52_k(fmbhi, j2d6co, jwndc), _k0h5q['domBuilder'] = sdxwn['domBuilder'] || j2d6co, /\/x?html?$/['test'](e8zrnx) && (tmibv['nbsp'] = '\u00a0', tmibv['copy'] = '©', ivfbt[''] = 'http://www.w3.org/1999/xhtml'), ivfbt['xml'] = ivfbt['xml'] || 'http://www.w3.org/XML/1998/namespace', xw ? _k0h5q['parse'](xw, ivfbt, tmibv) : _k0h5q['errorHandler']['error']('invalid doc source'), j2d6co['doc'];
}, fenxzr['prototype'] = { 'startDocument': function () {
    this['doc'] = new fh0k_()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (tifv, f0q, rex8z, r78e) {
    var wzxens = this['doc'],
        fim0ht = wzxens['createElementNS'](tifv, rex8z || f0q),
        r73y$a = r78e['length'];fdsxwnj(this, fim0ht), this['currentElement'] = fim0ht, this['locator'] && fjdoc26(this['locator'], fim0ht);for (var fmt0h = 0x0; r73y$a > fmt0h; fmt0h++) {
      var tifv = r78e['getURI'](fmt0h),
          zxr78 = r78e['getValue'](fmt0h),
          rex8z = r78e['getQName'](fmt0h),
          uvb19 = wzxens['createAttributeNS'](tifv, rex8z);this['locator'] && fjdoc26(r78e['getLocator'](fmt0h), uvb19), uvb19['value'] = uvb19['nodeValue'] = zxr78, fim0ht['setAttributeNode'](uvb19);
    }
  }, 'endElement': function () {
    {
      var exz8r7 = this['currentElement'];exz8r7['tagName'];
    }this['currentElement'] = exz8r7['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_42qk5, nwjdsc) {
    var imhbt = this['doc']['createProcessingInstruction'](_42qk5, nwjdsc);this['locator'] && fjdoc26(this['locator'], imhbt), fdsxwnj(this, imhbt);
  }, 'ignorableWhitespace': function () {}, 'characters': function (z7$3r) {
    if (z7$3r = f_k254['apply'](this, arguments)) {
      if (this['cdata']) var z7ex8r = this['doc']['createCDATASection'](z7$3r);else var z7ex8r = this['doc']['createTextNode'](z7$3r);this['currentElement'] ? this['currentElement']['appendChild'](z7ex8r) : /^\s*$/['test'](z7$3r) && this['doc']['appendChild'](z7ex8r), this['locator'] && fjdoc26(this['locator'], z7ex8r);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wscn) {
    (this['locator'] = wscn) && (wscn['lineNumber'] = 0x0);
  }, 'comment': function (k6_o2) {
    k6_o2 = f_k254['apply'](this, arguments);var tifmb = this['doc']['createComment'](k6_o2);this['locator'] && fjdoc26(this['locator'], tifmb), fdsxwnj(this, tifmb);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (z7e8xr, kh_0, _ok42) {
    var ivfmb = this['doc']['implementation'];if (ivfmb && ivfmb['createDocumentType']) {
      var fvtmi = ivfmb['createDocumentType'](z7e8xr, kh_0, _ok42);this['locator'] && fjdoc26(this['locator'], fvtmi), fdsxwnj(this, fvtmi);
    }
  }, 'warning': function (dj2o) {
    console['warn']('[xmldom warning]\t' + dj2o, fuvb1g9(this['locator']));
  }, 'error': function (co_462) {
    console['error']('[xmldom error]\t' + co_462, fuvb1g9(this['locator']));
  }, 'fatalError': function (k42_q) {
    throw console['error']('[xmldom fatalError]\t' + k42_q, fuvb1g9(this['locator'])), k42_q;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($ar7y) {
  fenxzr['prototype'][$ar7y] = function () {
    return null;
  };
});var ffbmv = require('./fffsax')['XMLReader'],
    fh0k_ = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fcwojd;