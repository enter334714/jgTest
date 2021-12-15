var a = wx.$y;
function ym3ua(a635vy) {
  this['options'] = a635vy || { 'locator': {} };
}function ylsf_8(hjw4fo, s8l_f7, k2$gn) {
  function npq$i(y063vr) {
    var rez = hjw4fo[y063vr];!rez && $gqin && (rez = 0x2 == hjw4fo['length'] ? function (yav63) {
      hjw4fo(y063vr, yav63);
    } : hjw4fo), z0xrvy[y063vr] = rez && function (gkni) {
      rez('[xmldom ' + y063vr + ']\t' + gkni + ya615m(k2$gn));
    } || function () {};
  }if (!hjw4fo) {
    if (s8l_f7 instanceof yjo8) return s8l_f7;hjw4fo = s8l_f7;
  }var z0xrvy = {},
      $gqin = hjw4fo instanceof Function;return k2$gn = k2$gn || {}, npq$i('warning'), npq$i('error'), npq$i('fatalError'), z0xrvy;
}function yjo8() {
  this['cdata'] = !0x1;
}function y$qignp(w4d1ht, u5a36m) {
  u5a36m['lineNumber'] = w4d1ht['lineNumber'], u5a36m['columnNumber'] = w4d1ht['columnNumber'];
}function ya615m(c2lk9) {
  return c2lk9 ? '\x0a@' + (c2lk9['systemId'] || '') + '#[line:' + c2lk9['lineNumber'] + ',col:' + c2lk9['columnNumber'] + ']' : void 0x0;
}function ym6u51a(wojfh4, yez0, sl8_f7) {
  return 'string' == typeof wojfh4 ? wojfh4['substr'](yez0, sl8_f7) : wojfh4['length'] >= yez0 + sl8_f7 || yez0 ? new java['lang']['String'](wojfh4, yez0, sl8_f7) + '' : wojfh4;
}function yav30y6(a1u5d, mdua51) {
  a1u5d['currentElement'] ? a1u5d['currentElement']['appendChild'](mdua51) : a1u5d['doc']['appendChild'](mdua51);
}ym3ua['prototype']['parseFromString'] = function (ck9sn, ofl7_8) {
  var l2s9k = this['options'],
      yv0rzx = new yjho4w(),
      hj7 = l2s9k['domBuilder'] || new yjo8(),
      gn2$9 = l2s9k['errorHandler'],
      avy360 = l2s9k['locator'],
      y36rv0 = l2s9k['xmlns'] || {},
      dh4t1w = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return avy360 && hj7['setDocumentLocator'](avy360), yv0rzx['errorHandler'] = ylsf_8(gn2$9, hj7, avy360), yv0rzx['domBuilder'] = l2s9k['domBuilder'] || hj7, /\/x?html?$/['test'](ofl7_8) && (dh4t1w['nbsp'] = '\u00a0', dh4t1w['copy'] = '©', y36rv0[''] = 'http://www.w3.org/1999/xhtml'), y36rv0['xml'] = y36rv0['xml'] || 'http://www.w3.org/XML/1998/namespace', ck9sn ? yv0rzx['parse'](ck9sn, y36rv0, dh4t1w) : yv0rzx['errorHandler']['error']('invalid doc source'), hj7['doc'];
}, yjo8['prototype'] = { 'startDocument': function () {
    this['doc'] = new yuw1tm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (h41wtd, kcs9l, hf7o_j, h4otwj) {
    var am1 = this['doc'],
        $2gk9 = am1['createElementNS'](h41wtd, hf7o_j || kcs9l),
        u3a65m = h4otwj['length'];yav30y6(this, $2gk9), this['currentElement'] = $2gk9, this['locator'] && y$qignp(this['locator'], $2gk9);for (var l8fs_ = 0x0; u3a65m > l8fs_; l8fs_++) {
      var h41wtd = h4otwj['getURI'](l8fs_),
          wdjht4 = h4otwj['getValue'](l8fs_),
          hf7o_j = h4otwj['getQName'](l8fs_),
          ayv35 = am1['createAttributeNS'](h41wtd, hf7o_j);this['locator'] && y$qignp(h4otwj['getLocator'](l8fs_), ayv35), ayv35['value'] = ayv35['nodeValue'] = wdjht4, $2gk9['setAttributeNode'](ayv35);
    }
  }, 'endElement': function () {
    {
      var m1ut = this['currentElement'];m1ut['tagName'];
    }this['currentElement'] = m1ut['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (wjd4ht, daum51) {
    var j_h7f = this['doc']['createProcessingInstruction'](wjd4ht, daum51);this['locator'] && y$qignp(this['locator'], j_h7f), yav30y6(this, j_h7f);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($n92kc) {
    if ($n92kc = ym6u51a['apply'](this, arguments)) {
      if (this['cdata']) var yv0xzr = this['doc']['createCDATASection']($n92kc);else var yv0xzr = this['doc']['createTextNode']($n92kc);this['currentElement'] ? this['currentElement']['appendChild'](yv0xzr) : /^\s*$/['test']($n92kc) && this['doc']['appendChild'](yv0xzr), this['locator'] && y$qignp(this['locator'], yv0xzr);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (a5mv3) {
    (this['locator'] = a5mv3) && (a5mv3['lineNumber'] = 0x0);
  }, 'comment': function (dhw4tj) {
    dhw4tj = ym6u51a['apply'](this, arguments);var dh1t4 = this['doc']['createComment'](dhw4tj);this['locator'] && y$qignp(this['locator'], dh1t4), yav30y6(this, dh1t4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (d4w1ht, vr6y0, _8oj7f) {
    var va5m36 = this['doc']['implementation'];if (va5m36 && va5m36['createDocumentType']) {
      var skl9 = va5m36['createDocumentType'](d4w1ht, vr6y0, _8oj7f);this['locator'] && y$qignp(this['locator'], skl9), yav30y6(this, skl9);
    }
  }, 'warning': function (tw4o) {
    console['warn']('[xmldom warning]\t' + tw4o, ya615m(this['locator']));
  }, 'error': function (gn$iq) {
    console['error']('[xmldom error]\t' + gn$iq, ya615m(this['locator']));
  }, 'fatalError': function (pig$) {
    throw console['error']('[xmldom fatalError]\t' + pig$, ya615m(this['locator'])), pig$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (slkc) {
  yjo8['prototype'][slkc] = function () {
    return null;
  };
});var yjho4w = require('./yycyy')['XMLReader'],
    yuw1tm = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = ym3ua;