var o = wx.$U;
function uoqmil(qwo7) {
  this['options'] = qwo7 || { 'locator': {} };
}function u_s$nvk(fu4p3j, $epuf4, ijmoh3) {
  function p34jfu(hj4pm) {
    var e3u4f = fu4p3j[hj4pm];!e3u4f && _$nvk && (e3u4f = 0x2 == fu4p3j['length'] ? function ($vnus) {
      fu4p3j(hj4pm, $vnus);
    } : fu4p3j), fpe3u4[hj4pm] = e3u4f && function (usfpe$) {
      e3u4f('[xmldom ' + hj4pm + ']\t' + usfpe$ + u_sakvn(ijmoh3));
    } || function () {};
  }if (!fu4p3j) {
    if ($epuf4 instanceof uv$uns) return $epuf4;fu4p3j = $epuf4;
  }var fpe3u4 = {},
      _$nvk = fu4p3j instanceof Function;return ijmoh3 = ijmoh3 || {}, p34jfu('warning'), p34jfu('error'), p34jfu('fatalError'), fpe3u4;
}function uv$uns() {
  this['cdata'] = !0x1;
}function uoq7ilx(wzd59g, qijom) {
  qijom['lineNumber'] = wzd59g['lineNumber'], qijom['columnNumber'] = wzd59g['columnNumber'];
}function u_sakvn(v$sn) {
  return v$sn ? '\x0a@' + (v$sn['systemId'] || '') + '#[line:' + v$sn['lineNumber'] + ',col:' + v$sn['columnNumber'] + ']' : void 0x0;
}function umqxoi(evs$un, nkva_6, nefu) {
  return 'string' == typeof evs$un ? evs$un['substr'](nkva_6, nefu) : evs$un['length'] >= nkva_6 + nefu || nkva_6 ? new java['lang']['String'](evs$un, nkva_6, nefu) + '' : evs$un;
}function uc01b(by1r8, zw9dg5) {
  by1r8['currentElement'] ? by1r8['currentElement']['appendChild'](zw9dg5) : by1r8['doc']['appendChild'](zw9dg5);
}uoqmil['prototype']['parseFromString'] = function (dz95gw, d95wg) {
  var xmio = this['options'],
      zdt52 = new uxqoli(),
      lmqhio = xmio['domBuilder'] || new uv$uns(),
      ujfp43 = xmio['errorHandler'],
      a_crk = xmio['locator'],
      p43u = xmio['xmlns'] || {},
      fjpu43 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return a_crk && lmqhio['setDocumentLocator'](a_crk), zdt52['errorHandler'] = u_s$nvk(ujfp43, lmqhio, a_crk), zdt52['domBuilder'] = xmio['domBuilder'] || lmqhio, /\/x?html?$/['test'](d95wg) && (fjpu43['nbsp'] = '\u00a0', fjpu43['copy'] = '©', p43u[''] = 'http://www.w3.org/1999/xhtml'), p43u['xml'] = p43u['xml'] || 'http://www.w3.org/XML/1998/namespace', dz95gw ? zdt52['parse'](dz95gw, p43u, fjpu43) : zdt52['errorHandler']['error']('invalid doc source'), lmqhio['doc'];
}, uv$uns['prototype'] = { 'startDocument': function () {
    this['doc'] = new ujqmho()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (s_nv, $snev, ack6r0, hj4pf3) {
    var oqil7x = this['doc'],
        tgz5d9 = oqil7x['createElementNS'](s_nv, ack6r0 || $snev),
        c0a6k = hj4pf3['length'];uc01b(this, tgz5d9), this['currentElement'] = tgz5d9, this['locator'] && uoq7ilx(this['locator'], tgz5d9);for (var wzx97g = 0x0; c0a6k > wzx97g; wzx97g++) {
      var s_nv = hj4pf3['getURI'](wzx97g),
          upj3f4 = hj4pf3['getValue'](wzx97g),
          ack6r0 = hj4pf3['getQName'](wzx97g),
          v6_an = oqil7x['createAttributeNS'](s_nv, ack6r0);this['locator'] && uoq7ilx(hj4pf3['getLocator'](wzx97g), v6_an), v6_an['value'] = v6_an['nodeValue'] = upj3f4, tgz5d9['setAttributeNode'](v6_an);
    }
  }, 'endElement': function () {
    {
      var w5zgd9 = this['currentElement'];w5zgd9['tagName'];
    }this['currentElement'] = w5zgd9['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wz79dg, peuf$s) {
    var oj3h = this['doc']['createProcessingInstruction'](wz79dg, peuf$s);this['locator'] && uoq7ilx(this['locator'], oj3h), uc01b(this, oj3h);
  }, 'ignorableWhitespace': function () {}, 'characters': function (mjp3h) {
    if (mjp3h = umqxoi['apply'](this, arguments)) {
      if (this['cdata']) var p$euf = this['doc']['createCDATASection'](mjp3h);else var p$euf = this['doc']['createTextNode'](mjp3h);this['currentElement'] ? this['currentElement']['appendChild'](p$euf) : /^\s*$/['test'](mjp3h) && this['doc']['appendChild'](p$euf), this['locator'] && uoq7ilx(this['locator'], p$euf);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (skvna) {
    (this['locator'] = skvna) && (skvna['lineNumber'] = 0x0);
  }, 'comment': function (ixqlm) {
    ixqlm = umqxoi['apply'](this, arguments);var w97zdg = this['doc']['createComment'](ixqlm);this['locator'] && uoq7ilx(this['locator'], w97zdg), uc01b(this, w97zdg);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (d2tz, spuf, c6kr) {
    var uven$ = this['doc']['implementation'];if (uven$ && uven$['createDocumentType']) {
      var wzgd = uven$['createDocumentType'](d2tz, spuf, c6kr);this['locator'] && uoq7ilx(this['locator'], wzgd), uc01b(this, wzgd);
    }
  }, 'warning': function (r0) {
    console['warn']('[xmldom warning]\t' + r0, u_sakvn(this['locator']));
  }, 'error': function ($s_ven) {
    console['error']('[xmldom error]\t' + $s_ven, u_sakvn(this['locator']));
  }, 'fatalError': function (fh34p) {
    throw console['error']('[xmldom fatalError]\t' + fh34p, u_sakvn(this['locator'])), fh34p;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (k6av_c) {
  uv$uns['prototype'][k6av_c] = function () {
    return null;
  };
});var uxqoli = require('./uu12uu')['XMLReader'],
    ujqmho = exports['DOMImplementation'] = require('./uuDOuu')['DOMImplementation'];exports['XMLSerializer'] = require('./uuDOuu')['XMLSerializer'], exports['DOMParser'] = uoqmil;