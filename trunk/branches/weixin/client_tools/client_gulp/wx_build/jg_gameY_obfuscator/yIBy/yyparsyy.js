var a = wx.$y;
function yho7_j(whd1) {
  this['options'] = whd1 || { 'locator': {} };
}function yl7s_f8(zyxr0v, vr30y, cnk9$) {
  function ignqp(xyrz0e) {
    var gp$iqn = zyxr0v[xyrz0e];!gp$iqn && l8_fo7 && (gp$iqn = 0x2 == zyxr0v['length'] ? function ($pnigq) {
      zyxr0v(xyrz0e, $pnigq);
    } : zyxr0v), n$igpq[xyrz0e] = gp$iqn && function (fl87) {
      gp$iqn('[xmldom ' + xyrz0e + ']\t' + fl87 + y$king(cnk9$));
    } || function () {};
  }if (!zyxr0v) {
    if (vr30y instanceof yni2g$k) return vr30y;zyxr0v = vr30y;
  }var n$igpq = {},
      l8_fo7 = zyxr0v instanceof Function;return cnk9$ = cnk9$ || {}, ignqp('warning'), ignqp('error'), ignqp('fatalError'), n$igpq;
}function yni2g$k() {
  this['cdata'] = !0x1;
}function ywho4fj(c2nsk9, c9l2sk) {
  c9l2sk['lineNumber'] = c2nsk9['lineNumber'], c9l2sk['columnNumber'] = c2nsk9['columnNumber'];
}function y$king(nkg$2i) {
  return nkg$2i ? '\x0a@' + (nkg$2i['systemId'] || '') + '#[line:' + nkg$2i['lineNumber'] + ',col:' + nkg$2i['columnNumber'] + ']' : void 0x0;
}function ysk92l($9c2, amd5u, skcl8) {
  return 'string' == typeof $9c2 ? $9c2['substr'](amd5u, skcl8) : $9c2['length'] >= amd5u + skcl8 || amd5u ? new java['lang']['String']($9c2, amd5u, skcl8) + '' : $9c2;
}function yzy0r3v(c29sk, a15ud) {
  c29sk['currentElement'] ? c29sk['currentElement']['appendChild'](a15ud) : c29sk['doc']['appendChild'](a15ud);
}yho7_j['prototype']['parseFromString'] = function (wutm1, sl_7) {
  var jdwht4 = this['options'],
      ignk$2 = new yc8s9lk(),
      udm5t1 = jdwht4['domBuilder'] || new yni2g$k(),
      inqg2 = jdwht4['errorHandler'],
      t1d4w = jdwht4['locator'],
      v3rzy0 = jdwht4['xmlns'] || {},
      nk2ig$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return t1d4w && udm5t1['setDocumentLocator'](t1d4w), ignk$2['errorHandler'] = yl7s_f8(inqg2, udm5t1, t1d4w), ignk$2['domBuilder'] = jdwht4['domBuilder'] || udm5t1, /\/x?html?$/['test'](sl_7) && (nk2ig$['nbsp'] = '\u00a0', nk2ig$['copy'] = '©', v3rzy0[''] = 'http://www.w3.org/1999/xhtml'), v3rzy0['xml'] = v3rzy0['xml'] || 'http://www.w3.org/XML/1998/namespace', wutm1 ? ignk$2['parse'](wutm1, v3rzy0, nk2ig$) : ignk$2['errorHandler']['error']('invalid doc source'), udm5t1['doc'];
}, yni2g$k['prototype'] = { 'startDocument': function () {
    this['doc'] = new yc9s2nk()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_foj87, gn, _hjo4, $9gk) {
    var vy3a06 = this['doc'],
        zx0rey = vy3a06['createElementNS'](_foj87, _hjo4 || gn),
        lc9s78 = $9gk['length'];yzy0r3v(this, zx0rey), this['currentElement'] = zx0rey, this['locator'] && ywho4fj(this['locator'], zx0rey);for (var dhtwj4 = 0x0; lc9s78 > dhtwj4; dhtwj4++) {
      var _foj87 = $9gk['getURI'](dhtwj4),
          av563m = $9gk['getValue'](dhtwj4),
          _hjo4 = $9gk['getQName'](dhtwj4),
          k9nc2s = vy3a06['createAttributeNS'](_foj87, _hjo4);this['locator'] && ywho4fj($9gk['getLocator'](dhtwj4), k9nc2s), k9nc2s['value'] = k9nc2s['nodeValue'] = av563m, zx0rey['setAttributeNode'](k9nc2s);
    }
  }, 'endElement': function () {
    {
      var dtu1 = this['currentElement'];dtu1['tagName'];
    }this['currentElement'] = dtu1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (xryz0e, a5mu63) {
    var k9nc$2 = this['doc']['createProcessingInstruction'](xryz0e, a5mu63);this['locator'] && ywho4fj(this['locator'], k9nc$2), yzy0r3v(this, k9nc$2);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vx0yzr) {
    if (vx0yzr = ysk92l['apply'](this, arguments)) {
      if (this['cdata']) var csk9l = this['doc']['createCDATASection'](vx0yzr);else var csk9l = this['doc']['createTextNode'](vx0yzr);this['currentElement'] ? this['currentElement']['appendChild'](csk9l) : /^\s*$/['test'](vx0yzr) && this['doc']['appendChild'](csk9l), this['locator'] && ywho4fj(this['locator'], csk9l);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vzy03) {
    (this['locator'] = vzy03) && (vzy03['lineNumber'] = 0x0);
  }, 'comment': function (n$g9k) {
    n$g9k = ysk92l['apply'](this, arguments);var um36 = this['doc']['createComment'](n$g9k);this['locator'] && ywho4fj(this['locator'], um36), yzy0r3v(this, um36);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xvr0, z0exry, h4wt1) {
    var j_f4o = this['doc']['implementation'];if (j_f4o && j_f4o['createDocumentType']) {
      var g2nki$ = j_f4o['createDocumentType'](xvr0, z0exry, h4wt1);this['locator'] && ywho4fj(this['locator'], g2nki$), yzy0r3v(this, g2nki$);
    }
  }, 'warning': function (n$gq2i) {
    console['warn']('[xmldom warning]\t' + n$gq2i, y$king(this['locator']));
  }, 'error': function ($qgi2n) {
    console['error']('[xmldom error]\t' + $qgi2n, y$king(this['locator']));
  }, 'fatalError': function (vyz0xr) {
    throw console['error']('[xmldom fatalError]\t' + vyz0xr, y$king(this['locator'])), vyz0xr;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vy630r) {
  yni2g$k['prototype'][vy630r] = function () {
    return null;
  };
});var yc8s9lk = require('./yycyy')['XMLReader'],
    yc9s2nk = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = yho7_j;