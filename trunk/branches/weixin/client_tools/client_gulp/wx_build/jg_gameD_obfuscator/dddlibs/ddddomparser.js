var v = wx.$d;
function zfgt0k(kza0) {
  this['options'] = kza0 || { 'locator': {} };
}function zc_3n(j6em, qbz0ag, o95c3) {
  function c_5(p1r$v) {
    var c2935 = j6em[p1r$v];!c2935 && c95o23 && (c2935 = 0x2 == j6em['length'] ? function (duitkf) {
      j6em(p1r$v, duitkf);
    } : j6em), etf[p1r$v] = c2935 ? function (o3_59) {
      c2935('[xmldom ' + p1r$v + ']\t' + o3_59 + zvprw$7(o95c3));
    } : function () {};
  }if (!j6em) {
    if (qbz0ag instanceof zktuqf) return qbz0ag;j6em = qbz0ag;
  }var etf = {},
      c95o23 = j6em instanceof Function;return o95c3 = o95c3 || {}, c_5('warning'), c_5('error'), c_5('fatalError'), etf;
}function zktuqf() {
  this['cdata'] = !0x1;
}function zo4_(ly$v, c35o) {
  c35o['lineNumber'] = ly$v['lineNumber'], c35o['columnNumber'] = ly$v['columnNumber'];
}function zvprw$7(_394o) {
  return _394o ? '\x0a@' + (_394o['systemId'] || '') + '#[line:' + _394o['lineNumber'] + ',col:' + _394o['columnNumber'] + ']' : void 0x0;
}function zo59c(kgfiu, jmhd6e, ueimdt) {
  return 'string' == typeof kgfiu ? kgfiu['substr'](jmhd6e, ueimdt) : kgfiu['length'] >= jmhd6e + ueimdt || jmhd6e ? new java['lang']['String'](kgfiu, jmhd6e, ueimdt) + '' : kgfiu;
}function ztudim(fuid, qgtku) {
  (fuid['currentElement'] || fuid['doc'])['appendChild'](qgtku);
}zfgt0k['prototype']['parseFromString'] = function (fkutid, mduit) {
  var kqg0fz = this['options'],
      tudfie = new zcn4_39(),
      r7p$wv = kqg0fz['domBuilder'] || new zktuqf(),
      mh64n = kqg0fz['errorHandler'],
      o5c3_ = kqg0fz['locator'],
      jnh9_ = kqg0fz['xmlns'] || {},
      h6jnme = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return o5c3_ && r7p$wv['setDocumentLocator'](o5c3_), tudfie['errorHandler'] = zc_3n(mh64n, r7p$wv, o5c3_), tudfie['domBuilder'] = kqg0fz['domBuilder'] || r7p$wv, /\/x?html?$/['test'](mduit) && (h6jnme['nbsp'] = '\u00a0', h6jnme['copy'] = '©', jnh9_[''] = 'http://www.w3.org/1999/xhtml'), jnh9_['xml'] = jnh9_['xml'] || 'http://www.w3.org/XML/1998/namespace', fkutid ? tudfie['parse'](fkutid, jnh9_, h6jnme) : tudfie['errorHandler']['error']('invalid doc source'), r7p$wv['doc'];
}, zktuqf['prototype'] = { 'startDocument': function () {
    this['doc'] = new zhn_j94()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (kfgtiu, fqgk0t, jh4m6, j46hm) {
    var p7$vwy = this['doc'],
        futqk = p7$vwy['createElementNS'](kfgtiu, jh4m6 || fqgk0t),
        kdfit = j46hm['length'];ztudim(this, futqk), this['currentElement'] = futqk, this['locator'] && zo4_(this['locator'], futqk);for (var $wpyv7 = 0x0; $wpyv7 < kdfit; $wpyv7++) {
      var kfgtiu = j46hm['getURI']($wpyv7),
          jn93 = j46hm['getValue']($wpyv7),
          jh4m6 = j46hm['getQName']($wpyv7),
          abxr1 = p7$vwy['createAttributeNS'](kfgtiu, jh4m6);this['locator'] && zo4_(j46hm['getLocator']($wpyv7), abxr1), abxr1['value'] = abxr1['nodeValue'] = jn93, futqk['setAttributeNode'](abxr1);
    }
  }, 'endElement': function () {
    var bqga0 = this['currentElement'];bqga0['tagName'], this['currentElement'] = bqga0['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_3c9o5, p8w1) {
    _3c9o5 = this['doc']['createProcessingInstruction'](_3c9o5, p8w1), (this['locator'] && zo4_(this['locator'], _3c9o5), ztudim(this, _3c9o5));
  }, 'ignorableWhitespace': function () {}, 'characters': function (ft0q) {
    var gkzaq;(ft0q = zo59c['apply'](this, arguments)) && (gkzaq = this['cdata'] ? this['doc']['createCDATASection'](ft0q) : this['doc']['createTextNode'](ft0q), this['currentElement'] ? this['currentElement']['appendChild'](gkzaq) : /^\s*$/['test'](ft0q) && this['doc']['appendChild'](gkzaq), this['locator'] && zo4_(this['locator'], gkzaq));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (j43_n) {
    (this['locator'] = j43_n) && (j43_n['lineNumber'] = 0x0);
  }, 'comment': function (o523c) {
    o523c = zo59c['apply'](this, arguments);var _o359c = this['doc']['createComment'](o523c);this['locator'] && zo4_(this['locator'], _o359c), ztudim(this, _o359c);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (tguki, gktiu, j4_n6) {
    var iumde = this['doc']['implementation'];iumde && iumde['createDocumentType'] && (iumde = iumde['createDocumentType'](tguki, gktiu, j4_n6), this['locator'] && zo4_(this['locator'], iumde), ztudim(this, iumde));
  }, 'warning': function (qft0gk) {
    console['warn']('[xmldom warning]\t' + qft0gk, zvprw$7(this['locator']));
  }, 'error': function (ab0qgz) {
    console['error']('[xmldom error]\t' + ab0qgz, zvprw$7(this['locator']));
  }, 'fatalError': function (ylv7) {
    throw console['error']('[xmldom fatalError]\t' + ylv7, zvprw$7(this['locator'])), ylv7;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zk0aq) {
  zktuqf['prototype'][zk0aq] = function () {
    return null;
  };
});var zcn4_39 = require('./dddsax')['XMLReader'],
    zhn_j94 = exports['DOMImplementation'] = require('./ddddom')['DOMImplementation'];exports['XMLSerializer'] = require('./ddddom')['XMLSerializer'], exports['DOMParser'] = zfgt0k;