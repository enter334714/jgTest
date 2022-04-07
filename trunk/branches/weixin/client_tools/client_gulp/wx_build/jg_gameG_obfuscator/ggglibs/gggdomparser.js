var m = wx.$g;
function gvcg7qs(t34dzo) {
  this['options'] = t34dzo || { 'locator': {} };
}function grmj$(gqcl, sq8l, gyv) {
  function ip5a0(f0p4_) {
    var iapxb = gqcl[f0p4_];!iapxb && v7wyqe && (iapxb = 0x2 == gqcl['length'] ? function (z24od3) {
      gqcl(f0p4_, z24od3);
    } : gqcl), cgls8q[f0p4_] = iapxb && function (wyk1) {
      iapxb('[xmldom ' + f0p4_ + ']\t' + wyk1 + gbftp0_(gyv));
    } || function () {};
  }if (!gqcl) {
    if (sq8l instanceof g$6zr2j) return sq8l;gqcl = sq8l;
  }var cgls8q = {},
      v7wyqe = gqcl instanceof Function;return gyv = gyv || {}, ip5a0('warning'), ip5a0('error'), ip5a0('fatalError'), cgls8q;
}function g$6zr2j() {
  this['cdata'] = !0x1;
}function gv7yk(gl89, cqls) {
  cqls['lineNumber'] = gl89['lineNumber'], cqls['columnNumber'] = gl89['columnNumber'];
}function gbftp0_(doz423) {
  return doz423 ? '\x0a@' + (doz423['systemId'] || '') + '#[line:' + doz423['lineNumber'] + ',col:' + doz423['columnNumber'] + ']' : void 0x0;
}function gru$2j(ecv7g, a5ixh, y1kwe) {
  return 'string' == typeof ecv7g ? ecv7g['substr'](a5ixh, y1kwe) : ecv7g['length'] >= a5ixh + y1kwe || a5ixh ? new java['lang']['String'](ecv7g, a5ixh, y1kwe) + '' : ecv7g;
}function ge1wvyk(urj6, xwky) {
  urj6['currentElement'] ? urj6['currentElement']['appendChild'](xwky) : urj6['doc']['appendChild'](xwky);
}gvcg7qs['prototype']['parseFromString'] = function (_pt04f, vqw7e) {
  var $rj62z = this['options'],
      kh1aw = new gzd43t(),
      ey1kv = $rj62z['domBuilder'] || new g$6zr2j(),
      bhi5xa = $rj62z['errorHandler'],
      xa1i5 = $rj62z['locator'],
      gcs8lq = $rj62z['xmlns'] || {},
      xi1h = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return xa1i5 && ey1kv['setDocumentLocator'](xa1i5), kh1aw['errorHandler'] = grmj$(bhi5xa, ey1kv, xa1i5), kh1aw['domBuilder'] = $rj62z['domBuilder'] || ey1kv, /\/x?html?$/['test'](vqw7e) && (xi1h['nbsp'] = '\u00a0', xi1h['copy'] = '©', gcs8lq[''] = 'http://www.w3.org/1999/xhtml'), gcs8lq['xml'] = gcs8lq['xml'] || 'http://www.w3.org/XML/1998/namespace', _pt04f ? kh1aw['parse'](_pt04f, gcs8lq, xi1h) : kh1aw['errorHandler']['error']('invalid doc source'), ey1kv['doc'];
}, g$6zr2j['prototype'] = { 'startDocument': function () {
    this['doc'] = new g_t034f()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (r26o, ax5hib, pf_t4, wkhy1) {
    var qv7eyg = this['doc'],
        pt0_f4 = qv7eyg['createElementNS'](r26o, pf_t4 || ax5hib),
        a5xhib = wkhy1['length'];ge1wvyk(this, pt0_f4), this['currentElement'] = pt0_f4, this['locator'] && gv7yk(this['locator'], pt0_f4);for (var wkeyh = 0x0; a5xhib > wkeyh; wkeyh++) {
      var r26o = wkhy1['getURI'](wkeyh),
          qscv7 = wkhy1['getValue'](wkeyh),
          pf_t4 = wkhy1['getQName'](wkeyh),
          wvk1e = qv7eyg['createAttributeNS'](r26o, pf_t4);this['locator'] && gv7yk(wkhy1['getLocator'](wkeyh), wvk1e), wvk1e['value'] = wvk1e['nodeValue'] = qscv7, pt0_f4['setAttributeNode'](wvk1e);
    }
  }, 'endElement': function () {
    {
      var tfod43 = this['currentElement'];tfod43['tagName'];
    }this['currentElement'] = tfod43['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (b_0p, xbih5) {
    var wyke1h = this['doc']['createProcessingInstruction'](b_0p, xbih5);this['locator'] && gv7yk(this['locator'], wyke1h), ge1wvyk(this, wyke1h);
  }, 'ignorableWhitespace': function () {}, 'characters': function (cgq78s) {
    if (cgq78s = gru$2j['apply'](this, arguments)) {
      if (this['cdata']) var r$2u = this['doc']['createCDATASection'](cgq78s);else var r$2u = this['doc']['createTextNode'](cgq78s);this['currentElement'] ? this['currentElement']['appendChild'](r$2u) : /^\s*$/['test'](cgq78s) && this['doc']['appendChild'](r$2u), this['locator'] && gv7yk(this['locator'], r$2u);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (kxha1i) {
    (this['locator'] = kxha1i) && (kxha1i['lineNumber'] = 0x0);
  }, 'comment': function (kvwe1y) {
    kvwe1y = gru$2j['apply'](this, arguments);var y1ekv = this['doc']['createComment'](kvwe1y);this['locator'] && gv7yk(this['locator'], y1ekv), ge1wvyk(this, y1ekv);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (aibp, z243o, oft3d4) {
    var xwkah = this['doc']['implementation'];if (xwkah && xwkah['createDocumentType']) {
      var aikh = xwkah['createDocumentType'](aibp, z243o, oft3d4);this['locator'] && gv7yk(this['locator'], aikh), ge1wvyk(this, aikh);
    }
  }, 'warning': function (wheky) {
    console['warn']('[xmldom warning]\t' + wheky, gbftp0_(this['locator']));
  }, 'error': function (k1ewyv) {
    console['error']('[xmldom error]\t' + k1ewyv, gbftp0_(this['locator']));
  }, 'fatalError': function (apbi5) {
    throw console['error']('[xmldom fatalError]\t' + apbi5, gbftp0_(this['locator'])), apbi5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ve1y) {
  g$6zr2j['prototype'][ve1y] = function () {
    return null;
  };
});var gzd43t = require('./gggsax')['XMLReader'],
    g_t034f = exports['DOMImplementation'] = require('./gggdom')['DOMImplementation'];exports['XMLSerializer'] = require('./gggdom')['XMLSerializer'], exports['DOMParser'] = gvcg7qs;