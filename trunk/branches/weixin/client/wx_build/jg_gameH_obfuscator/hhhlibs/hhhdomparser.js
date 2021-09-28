var O = wx.$c;
function hv9lce(u5oi2) {
  this['options'] = u5oi2 || { 'locator': {} };
}function hz7xg(kb6df, cevl9, lcnv98) {
  function g7q1xz(z$t7j) {
    var nlem9c = kb6df[z$t7j];!nlem9c && h8byar && (nlem9c = 0x2 == kb6df['length'] ? function (xkf6sd) {
      kb6df(z$t7j, xkf6sd);
    } : kb6df), bdysf[z$t7j] = nlem9c ? function (x17z) {
      nlem9c('[xmldom ' + z$t7j + ']\t' + x17z + hr9a(lcnv98));
    } : function () {};
  }if (!kb6df) {
    if (cevl9 instanceof hlh98v) return cevl9;kb6df = cevl9;
  }var bdysf = {},
      h8byar = kb6df instanceof Function;return lcnv98 = lcnv98 || {}, g7q1xz('warning'), g7q1xz('error'), g7q1xz('fatalError'), bdysf;
}function hlh98v() {
  this['cdata'] = !0x1;
}function hxf6s1q(d16xs, k6sbf) {
  k6sbf['lineNumber'] = d16xs['lineNumber'], k6sbf['columnNumber'] = d16xs['columnNumber'];
}function hr9a(fxs6kd) {
  return fxs6kd ? '\x0a@' + (fxs6kd['systemId'] || '') + '#[line:' + fxs6kd['lineNumber'] + ',col:' + fxs6kd['columnNumber'] + ']' : void 0x0;
}function hfsbkyd($gztj3, w3ti, o0i) {
  return 'string' == typeof $gztj3 ? $gztj3['substr'](w3ti, o0i) : $gztj3['length'] >= w3ti + o0i || w3ti ? new java['lang']['String']($gztj3, w3ti, o0i) + '' : $gztj3;
}function hmecn(zj$q7, abh) {
  (zj$q7['currentElement'] || zj$q7['doc'])['appendChild'](abh);
}hv9lce['prototype']['parseFromString'] = function (zt7j$g, cl9mne) {
  var jz7$tg = this['options'],
      jg$tz7 = new hln9r8(),
      gt3j$_ = jz7$tg['domBuilder'] || new hlh98v(),
      yrbk = jz7$tg['errorHandler'],
      l8nr9v = jz7$tg['locator'],
      z7q1xg = jz7$tg['xmlns'] || {},
      hab8y = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return l8nr9v && gt3j$_['setDocumentLocator'](l8nr9v), jg$tz7['errorHandler'] = hz7xg(yrbk, gt3j$_, l8nr9v), jg$tz7['domBuilder'] = jz7$tg['domBuilder'] || gt3j$_, /\/x?html?$/['test'](cl9mne) && (hab8y['nbsp'] = '\u00a0', hab8y['copy'] = '©', z7q1xg[''] = 'http://www.w3.org/1999/xhtml'), z7q1xg['xml'] = z7q1xg['xml'] || 'http://www.w3.org/XML/1998/namespace', zt7j$g ? jg$tz7['parse'](zt7j$g, z7q1xg, hab8y) : jg$tz7['errorHandler']['error']('invalid doc source'), gt3j$_['doc'];
}, hlh98v['prototype'] = { 'startDocument': function () {
    this['doc'] = new hxz1q()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rvln, v8ar, i3_0, cmn9le) {
    var qx761 = this['doc'],
        kaydb = qx761['createElementNS'](rvln, i3_0 || v8ar),
        kbadyh = cmn9le['length'];hmecn(this, kaydb), this['currentElement'] = kaydb, this['locator'] && hxf6s1q(this['locator'], kaydb);for (var ij3wt_ = 0x0; ij3wt_ < kbadyh; ij3wt_++) {
      var rvln = cmn9le['getURI'](ij3wt_),
          z$tjg = cmn9le['getValue'](ij3wt_),
          i3_0 = cmn9le['getQName'](ij3wt_),
          a9hr8 = qx761['createAttributeNS'](rvln, i3_0);this['locator'] && hxf6s1q(cmn9le['getLocator'](ij3wt_), a9hr8), a9hr8['value'] = a9hr8['nodeValue'] = z$tjg, kaydb['setAttributeNode'](a9hr8);
    }
  }, 'endElement': function () {
    var ln9r = this['currentElement'];ln9r['tagName'], this['currentElement'] = ln9r['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kd, xfkd6) {
    xfkd6 = this['doc']['createProcessingInstruction'](kd, xfkd6), (this['locator'] && hxf6s1q(this['locator'], xfkd6), hmecn(this, xfkd6));
  }, 'ignorableWhitespace': function () {}, 'characters': function (_0wiu) {
    var fsx6q1;(_0wiu = hfsbkyd['apply'](this, arguments)) && (fsx6q1 = this['cdata'] ? this['doc']['createCDATASection'](_0wiu) : this['doc']['createTextNode'](_0wiu), this['currentElement'] ? this['currentElement']['appendChild'](fsx6q1) : /^\s*$/['test'](_0wiu) && this['doc']['appendChild'](fsx6q1), this['locator'] && hxf6s1q(this['locator'], fsx6q1));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (dfybks) {
    (this['locator'] = dfybks) && (dfybks['lineNumber'] = 0x0);
  }, 'comment': function (o52u40) {
    o52u40 = hfsbkyd['apply'](this, arguments);var g17$qz = this['doc']['createComment'](o52u40);this['locator'] && hxf6s1q(this['locator'], g17$qz), hmecn(this, g17$qz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (hva9, i20ou, sfdky) {
    var z$q7j = this['doc']['implementation'];z$q7j && z$q7j['createDocumentType'] && (sfdky = z$q7j['createDocumentType'](hva9, i20ou, sfdky), this['locator'] && hxf6s1q(this['locator'], sfdky), hmecn(this, sfdky));
  }, 'warning': function (ksdx) {
    console['warn']('[xmldom warning]\t' + ksdx, hr9a(this['locator']));
  }, 'error': function (habkyr) {
    console['error']('[xmldom error]\t' + habkyr, hr9a(this['locator']));
  }, 'fatalError': function (_2w0u) {
    throw console['error']('[xmldom fatalError]\t' + _2w0u, hr9a(this['locator'])), _2w0u;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kdf6xs) {
  hlh98v['prototype'][kdf6xs] = function () {
    return null;
  };
});var hln9r8 = require('./hhhsax')['XMLReader'],
    hxz1q = exports['DOMImplementation'] = require('./hhhdom')['DOMImplementation'];exports['XMLSerializer'] = require('./hhhdom')['XMLSerializer'], exports['DOMParser'] = hv9lce;