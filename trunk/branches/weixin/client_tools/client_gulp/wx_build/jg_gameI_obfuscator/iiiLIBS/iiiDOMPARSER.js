var Q = wx.$I;
function i_ydgzo(a36_8j) {
  this['options'] = a36_8j || { 'locator': {} };
}function i_whxn54(wnx5, r0$z, _jaf8p) {
  function ly0gz(bja) {
    var nsk2qu = wnx5[bja];!nsk2qu && p8fja_ && (nsk2qu = 0x2 == wnx5['length'] ? function (gyo0) {
      wnx5(bja, gyo0);
    } : wnx5), bj63a7[bja] = nsk2qu && function (hx4wn5) {
      nsk2qu('[xmldom ' + bja + ']\t' + hx4wn5 + i_i0$gz(_jaf8p));
    } || function () {};
  }if (!wnx5) {
    if (r0$z instanceof i_gylz0o) return r0$z;wnx5 = r0$z;
  }var bj63a7 = {},
      p8fja_ = wnx5 instanceof Function;return _jaf8p = _jaf8p || {}, ly0gz('warning'), ly0gz('error'), ly0gz('fatalError'), bj63a7;
}function i_gylz0o() {
  this['cdata'] = !0x1;
}function i_a876j(w2q5nk, nw5q42) {
  nw5q42['lineNumber'] = w2q5nk['lineNumber'], nw5q42['columnNumber'] = w2q5nk['columnNumber'];
}function i_i0$gz(u2kqe) {
  return u2kqe ? '\x0a@' + (u2kqe['systemId'] || '') + '#[line:' + u2kqe['lineNumber'] + ',col:' + u2kqe['columnNumber'] + ']' : void 0x0;
}function i__j3a68(s2ue, bkus7e, _p8aj) {
  return 'string' == typeof s2ue ? s2ue['substr'](bkus7e, _p8aj) : s2ue['length'] >= bkus7e + _p8aj || bkus7e ? new java['lang']['String'](s2ue, bkus7e, _p8aj) + '' : s2ue;
}function i_zyod0g(cmp1_, jb3a67) {
  cmp1_['currentElement'] ? cmp1_['currentElement']['appendChild'](jb3a67) : cmp1_['doc']['appendChild'](jb3a67);
}i_ydgzo['prototype']['parseFromString'] = function (qu2k5n, lzg$0i) {
  var h54nxw = this['options'],
      esqk2 = new i_n2skqu(),
      pfm1cv = h54nxw['domBuilder'] || new i_gylz0o(),
      _6faj = h54nxw['errorHandler'],
      vmpc91 = h54nxw['locator'],
      mr9 = h54nxw['xmlns'] || {},
      gyodz0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return vmpc91 && pfm1cv['setDocumentLocator'](vmpc91), esqk2['errorHandler'] = i_whxn54(_6faj, pfm1cv, vmpc91), esqk2['domBuilder'] = h54nxw['domBuilder'] || pfm1cv, /\/x?html?$/['test'](lzg$0i) && (gyodz0['nbsp'] = '\u00a0', gyodz0['copy'] = '©', mr9[''] = 'http://www.w3.org/1999/xhtml'), mr9['xml'] = mr9['xml'] || 'http://www.w3.org/XML/1998/namespace', qu2k5n ? esqk2['parse'](qu2k5n, mr9, gyodz0) : esqk2['errorHandler']['error']('invalid doc source'), pfm1cv['doc'];
}, i_gylz0o['prototype'] = { 'startDocument': function () {
    this['doc'] = new i_p1c()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($zlrt, n24h5, il$z0, ksun) {
    var q2kuse = this['doc'],
        $rl0z = q2kuse['createElementNS']($zlrt, il$z0 || n24h5),
        w45q2 = ksun['length'];i_zyod0g(this, $rl0z), this['currentElement'] = $rl0z, this['locator'] && i_a876j(this['locator'], $rl0z);for (var a673eb = 0x0; w45q2 > a673eb; a673eb++) {
      var $zlrt = ksun['getURI'](a673eb),
          qbukse = ksun['getValue'](a673eb),
          il$z0 = ksun['getQName'](a673eb),
          w4x5h = q2kuse['createAttributeNS']($zlrt, il$z0);this['locator'] && i_a876j(ksun['getLocator'](a673eb), w4x5h), w4x5h['value'] = w4x5h['nodeValue'] = qbukse, $rl0z['setAttributeNode'](w4x5h);
    }
  }, 'endElement': function () {
    {
      var f_cmp1 = this['currentElement'];f_cmp1['tagName'];
    }this['currentElement'] = f_cmp1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($0zig, sukqn) {
    var eqs2uk = this['doc']['createProcessingInstruction']($0zig, sukqn);this['locator'] && i_a876j(this['locator'], eqs2uk), i_zyod0g(this, eqs2uk);
  }, 'ignorableWhitespace': function () {}, 'characters': function (k2nu5) {
    if (k2nu5 = i__j3a68['apply'](this, arguments)) {
      if (this['cdata']) var a763j8 = this['doc']['createCDATASection'](k2nu5);else var a763j8 = this['doc']['createTextNode'](k2nu5);this['currentElement'] ? this['currentElement']['appendChild'](a763j8) : /^\s*$/['test'](k2nu5) && this['doc']['appendChild'](a763j8), this['locator'] && i_a876j(this['locator'], a763j8);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (j86f_a) {
    (this['locator'] = j86f_a) && (j86f_a['lineNumber'] = 0x0);
  }, 'comment': function (cf_1p8) {
    cf_1p8 = i__j3a68['apply'](this, arguments);var esuk2 = this['doc']['createComment'](cf_1p8);this['locator'] && i_a876j(this['locator'], esuk2), i_zyod0g(this, esuk2);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (bue37, whx, pfc1_m) {
    var uskbe = this['doc']['implementation'];if (uskbe && uskbe['createDocumentType']) {
      var vtr9m = uskbe['createDocumentType'](bue37, whx, pfc1_m);this['locator'] && i_a876j(this['locator'], vtr9m), i_zyod0g(this, vtr9m);
    }
  }, 'warning': function (zr$itl) {
    console['warn']('[xmldom warning]\t' + zr$itl, i_i0$gz(this['locator']));
  }, 'error': function (loy0gz) {
    console['error']('[xmldom error]\t' + loy0gz, i_i0$gz(this['locator']));
  }, 'fatalError': function (j_8fpa) {
    throw console['error']('[xmldom fatalError]\t' + j_8fpa, i_i0$gz(this['locator'])), j_8fpa;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (knu25q) {
  i_gylz0o['prototype'][knu25q] = function () {
    return null;
  };
});var i_n2skqu = require('./iiiSAX')['XMLReader'],
    i_p1c = exports['DOMImplementation'] = require('./iiiDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./iiiDOM')['XMLSerializer'], exports['DOMParser'] = i_ydgzo;