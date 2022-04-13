var J = wx.h$;
function gyrob5q(ix71j) {
  this['options'] = ix71j || { 'locator': {} };
}function gd0qb(i47xn1, dk06gb, ro7vj) {
  function c6gt8(u4ml) {
    var i7vx = i47xn1[u4ml];!i7vx && u4l3a && (i7vx = 0x2 == i47xn1['length'] ? function (e_pht) {
      i47xn1(u4ml, e_pht);
    } : i47xn1), pe_29[u4ml] = i7vx && function (qk0g5b) {
      i7vx('[xmldom ' + u4ml + ']\t' + qk0g5b + gvy5or(ro7vj));
    } || function () {};
  }if (!i47xn1) {
    if (dk06gb instanceof gkqdg0b) return dk06gb;i47xn1 = dk06gb;
  }var pe_29 = {},
      u4l3a = i47xn1 instanceof Function;return ro7vj = ro7vj || {}, c6gt8('warning'), c6gt8('error'), c6gt8('fatalError'), pe_29;
}function gkqdg0b() {
  this['cdata'] = !0x1;
}function gk5gb(y5oqv, u413) {
  u413['lineNumber'] = y5oqv['lineNumber'], u413['columnNumber'] = y5oqv['columnNumber'];
}function gvy5or(p_wez2) {
  return p_wez2 ? '\x0a@' + (p_wez2['systemId'] || '') + '#[line:' + p_wez2['lineNumber'] + ',col:' + p_wez2['columnNumber'] + ']' : void 0x0;
}function goq0y5(t8h6zc, dbg60k, vo5rqy) {
  return 'string' == typeof t8h6zc ? t8h6zc['substr'](dbg60k, vo5rqy) : t8h6zc['length'] >= dbg60k + vo5rqy || dbg60k ? new java['lang']['String'](t8h6zc, dbg60k, vo5rqy) + '' : t8h6zc;
}function gxi34n(w2fs, o5vqyr) {
  w2fs['currentElement'] ? w2fs['currentElement']['appendChild'](o5vqyr) : w2fs['doc']['appendChild'](o5vqyr);
}gyrob5q['prototype']['parseFromString'] = function (g6k8dc, u4lam3) {
  var tc68hz = this['options'],
      jxyvr7 = new ggdk06b(),
      _92we = tc68hz['domBuilder'] || new gkqdg0b(),
      bgk5q = tc68hz['errorHandler'],
      qk0dg = tc68hz['locator'],
      e9_wp = tc68hz['xmlns'] || {},
      d6gkc8 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return qk0dg && _92we['setDocumentLocator'](qk0dg), jxyvr7['errorHandler'] = gd0qb(bgk5q, _92we, qk0dg), jxyvr7['domBuilder'] = tc68hz['domBuilder'] || _92we, /\/x?html?$/['test'](u4lam3) && (d6gkc8['nbsp'] = '\u00a0', d6gkc8['copy'] = '©', e9_wp[''] = 'http://www.w3.org/1999/xhtml'), e9_wp['xml'] = e9_wp['xml'] || 'http://www.w3.org/XML/1998/namespace', g6k8dc ? jxyvr7['parse'](g6k8dc, e9_wp, d6gkc8) : jxyvr7['errorHandler']['error']('invalid doc source'), _92we['doc'];
}, gkqdg0b['prototype'] = { 'startDocument': function () {
    this['doc'] = new gd0qkg()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gkbdq0, qroyb, _epz2h, v7rjxy) {
    var u4la31 = this['doc'],
        rxy7j = u4la31['createElementNS'](gkbdq0, _epz2h || qroyb),
        qbgk05 = v7rjxy['length'];gxi34n(this, rxy7j), this['currentElement'] = rxy7j, this['locator'] && gk5gb(this['locator'], rxy7j);for (var by5o = 0x0; qbgk05 > by5o; by5o++) {
      var gkbdq0 = v7rjxy['getURI'](by5o),
          n4i7x = v7rjxy['getValue'](by5o),
          _epz2h = v7rjxy['getQName'](by5o),
          vro7y = u4la31['createAttributeNS'](gkbdq0, _epz2h);this['locator'] && gk5gb(v7rjxy['getLocator'](by5o), vro7y), vro7y['value'] = vro7y['nodeValue'] = n4i7x, rxy7j['setAttributeNode'](vro7y);
    }
  }, 'endElement': function () {
    {
      var dg8 = this['currentElement'];dg8['tagName'];
    }this['currentElement'] = dg8['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (cpth, vxji7r) {
    var c8d6kg = this['doc']['createProcessingInstruction'](cpth, vxji7r);this['locator'] && gk5gb(this['locator'], c8d6kg), gxi34n(this, c8d6kg);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_p2wf9) {
    if (_p2wf9 = goq0y5['apply'](this, arguments)) {
      if (this['cdata']) var $wf = this['doc']['createCDATASection'](_p2wf9);else var $wf = this['doc']['createTextNode'](_p2wf9);this['currentElement'] ? this['currentElement']['appendChild']($wf) : /^\s*$/['test'](_p2wf9) && this['doc']['appendChild']($wf), this['locator'] && gk5gb(this['locator'], $wf);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (dg0kbq) {
    (this['locator'] = dg0kbq) && (dg0kbq['lineNumber'] = 0x0);
  }, 'comment': function (g5qb0k) {
    g5qb0k = goq0y5['apply'](this, arguments);var gd0b = this['doc']['createComment'](g5qb0k);this['locator'] && gk5gb(this['locator'], gd0b), gxi34n(this, gd0b);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (nx471, eph_zt, nua34) {
    var tczpeh = this['doc']['implementation'];if (tczpeh && tczpeh['createDocumentType']) {
      var dhct8 = tczpeh['createDocumentType'](nx471, eph_zt, nua34);this['locator'] && gk5gb(this['locator'], dhct8), gxi34n(this, dhct8);
    }
  }, 'warning': function (fwp9) {
    console['warn']('[xmldom warning]\t' + fwp9, gvy5or(this['locator']));
  }, 'error': function (rq5o) {
    console['error']('[xmldom error]\t' + rq5o, gvy5or(this['locator']));
  }, 'fatalError': function (f$w29) {
    throw console['error']('[xmldom fatalError]\t' + f$w29, gvy5or(this['locator'])), f$w29;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (eh_z) {
  gkqdg0b['prototype'][eh_z] = function () {
    return null;
  };
});var ggdk06b = require('./Zqy10Zqy10cZqy10Zqy10')['XMLReader'],
    gd0qkg = exports['DOMImplementation'] = require('./Zqy10Zqy10DOZqy10Zqy10')['DOMImplementation'];exports['XMLSerializer'] = require('./Zqy10Zqy10DOZqy10Zqy10')['XMLSerializer'], exports['DOMParser'] = gyrob5q;