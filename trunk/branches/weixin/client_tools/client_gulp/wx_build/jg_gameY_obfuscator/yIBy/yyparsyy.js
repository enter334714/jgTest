var a = wx.$y;
function yng$piq(hwotj) {
  this['options'] = hwotj || { 'locator': {} };
}function yu4wd1($2n9c, l7s8c9, $qg2i) {
  function ry0zex(w14tdh) {
    var s9c8kl = $2n9c[w14tdh];!s9c8kl && _lc7s && (s9c8kl = 0x2 == $2n9c['length'] ? function (yr0vz) {
      $2n9c(w14tdh, yr0vz);
    } : $2n9c), wu1[w14tdh] = s9c8kl && function (u356am) {
      s9c8kl('[xmldom ' + w14tdh + ']\t' + u356am + yj_oh7f($qg2i));
    } || function () {};
  }if (!$2n9c) {
    if (l7s8c9 instanceof ync9$2) return l7s8c9;$2n9c = l7s8c9;
  }var wu1 = {},
      _lc7s = $2n9c instanceof Function;return $qg2i = $qg2i || {}, ry0zex('warning'), ry0zex('error'), ry0zex('fatalError'), wu1;
}function ync9$2() {
  this['cdata'] = !0x1;
}function yl8s9ck(nc9k2$, lc9s78) {
  lc9s78['lineNumber'] = nc9k2$['lineNumber'], lc9s78['columnNumber'] = nc9k2$['columnNumber'];
}function yj_oh7f(vzy) {
  return vzy ? '\x0a@' + (vzy['systemId'] || '') + '#[line:' + vzy['lineNumber'] + ',col:' + vzy['columnNumber'] + ']' : void 0x0;
}function yzx0yv(u63m, k2$ig, c2n$k) {
  return 'string' == typeof u63m ? u63m['substr'](k2$ig, c2n$k) : u63m['length'] >= k2$ig + c2n$k || k2$ig ? new java['lang']['String'](u63m, k2$ig, c2n$k) + '' : u63m;
}function yoj7f_(tuw4d, _8jf7) {
  tuw4d['currentElement'] ? tuw4d['currentElement']['appendChild'](_8jf7) : tuw4d['doc']['appendChild'](_8jf7);
}yng$piq['prototype']['parseFromString'] = function (jhot4, fwo4hj) {
  var cnk29$ = this['options'],
      dtm1wu = new yxz0ry(),
      n2ck9s = cnk29$['domBuilder'] || new ync9$2(),
      dtw1mu = cnk29$['errorHandler'],
      cls97 = cnk29$['locator'],
      jd4th = cnk29$['xmlns'] || {},
      slc9 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cls97 && n2ck9s['setDocumentLocator'](cls97), dtm1wu['errorHandler'] = yu4wd1(dtw1mu, n2ck9s, cls97), dtm1wu['domBuilder'] = cnk29$['domBuilder'] || n2ck9s, /\/x?html?$/['test'](fwo4hj) && (slc9['nbsp'] = '\u00a0', slc9['copy'] = '©', jd4th[''] = 'http://www.w3.org/1999/xhtml'), jd4th['xml'] = jd4th['xml'] || 'http://www.w3.org/XML/1998/namespace', jhot4 ? dtm1wu['parse'](jhot4, jd4th, slc9) : dtm1wu['errorHandler']['error']('invalid doc source'), n2ck9s['doc'];
}, ync9$2['prototype'] = { 'startDocument': function () {
    this['doc'] = new yf7l_o8()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (w4jfo, j_f4oh, l8kcs9, sc29n) {
    var ck92 = this['doc'],
        c2lks9 = ck92['createElementNS'](w4jfo, l8kcs9 || j_f4oh),
        xez = sc29n['length'];yoj7f_(this, c2lks9), this['currentElement'] = c2lks9, this['locator'] && yl8s9ck(this['locator'], c2lks9);for (var am15u = 0x0; xez > am15u; am15u++) {
      var w4jfo = sc29n['getURI'](am15u),
          s92klc = sc29n['getValue'](am15u),
          l8kcs9 = sc29n['getQName'](am15u),
          whj4ot = ck92['createAttributeNS'](w4jfo, l8kcs9);this['locator'] && yl8s9ck(sc29n['getLocator'](am15u), whj4ot), whj4ot['value'] = whj4ot['nodeValue'] = s92klc, c2lks9['setAttributeNode'](whj4ot);
    }
  }, 'endElement': function () {
    {
      var f78jo = this['currentElement'];f78jo['tagName'];
    }this['currentElement'] = f78jo['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (mwud1t, n92$kg) {
    var zrv03y = this['doc']['createProcessingInstruction'](mwud1t, n92$kg);this['locator'] && yl8s9ck(this['locator'], zrv03y), yoj7f_(this, zrv03y);
  }, 'ignorableWhitespace': function () {}, 'characters': function (tdwu1) {
    if (tdwu1 = yzx0yv['apply'](this, arguments)) {
      if (this['cdata']) var tdjh4 = this['doc']['createCDATASection'](tdwu1);else var tdjh4 = this['doc']['createTextNode'](tdwu1);this['currentElement'] ? this['currentElement']['appendChild'](tdjh4) : /^\s*$/['test'](tdwu1) && this['doc']['appendChild'](tdjh4), this['locator'] && yl8s9ck(this['locator'], tdjh4);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (y06a) {
    (this['locator'] = y06a) && (y06a['lineNumber'] = 0x0);
  }, 'comment': function (y3r60) {
    y3r60 = yzx0yv['apply'](this, arguments);var ma6u15 = this['doc']['createComment'](y3r60);this['locator'] && yl8s9ck(this['locator'], ma6u15), yoj7f_(this, ma6u15);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (td4w1h, npiqg$, cn9$k) {
    var y30vr6 = this['doc']['implementation'];if (y30vr6 && y30vr6['createDocumentType']) {
      var of4jw = y30vr6['createDocumentType'](td4w1h, npiqg$, cn9$k);this['locator'] && yl8s9ck(this['locator'], of4jw), yoj7f_(this, of4jw);
    }
  }, 'warning': function (r3yv) {
    console['warn']('[xmldom warning]\t' + r3yv, yj_oh7f(this['locator']));
  }, 'error': function (k8l9s) {
    console['error']('[xmldom error]\t' + k8l9s, yj_oh7f(this['locator']));
  }, 'fatalError': function (yz0vxr) {
    throw console['error']('[xmldom fatalError]\t' + yz0vxr, yj_oh7f(this['locator'])), yz0vxr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fls8_) {
  ync9$2['prototype'][fls8_] = function () {
    return null;
  };
});var yxz0ry = require('./yycyy')['XMLReader'],
    yf7l_o8 = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = yng$piq;