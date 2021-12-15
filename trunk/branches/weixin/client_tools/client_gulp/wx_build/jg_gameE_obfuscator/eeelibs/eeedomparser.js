var b = wx.$e;
function enu3ij(u3qnj) {
  this['options'] = u3qnj || { 'locator': {} };
}function eyvrzf4(lzhtrg, sk9nuq, rhyfl) {
  function tjgi$(tlrxgh) {
    var p7oac = lzhtrg[tlrxgh];!p7oac && jsq3un && (p7oac = 0x2 == lzhtrg['length'] ? function (y_v7) {
      lzhtrg(tlrxgh, y_v7);
    } : lzhtrg), vzhry[tlrxgh] = p7oac && function (fa47) {
      p7oac('[xmldom ' + tlrxgh + ']\t' + fa47 + eqi$jn(rhyfl));
    } || function () {};
  }if (!lzhtrg) {
    if (sk9nuq instanceof exjgti) return sk9nuq;lzhtrg = sk9nuq;
  }var vzhry = {},
      jsq3un = lzhtrg instanceof Function;return rhyfl = rhyfl || {}, tjgi$('warning'), tjgi$('error'), tjgi$('fatalError'), vzhry;
}function exjgti() {
  this['cdata'] = !0x1;
}function edb08w(lx$ti, xthglr) {
  xthglr['lineNumber'] = lx$ti['lineNumber'], xthglr['columnNumber'] = lx$ti['columnNumber'];
}function eqi$jn(flhzy) {
  return flhzy ? '\x0a@' + (flhzy['systemId'] || '') + '#[line:' + flhzy['lineNumber'] + ',col:' + flhzy['columnNumber'] + ']' : void 0x0;
}function ec74ma_(xhg$, su69b, lzrtyh) {
  return 'string' == typeof xhg$ ? xhg$['substr'](su69b, lzrtyh) : xhg$['length'] >= su69b + lzrtyh || su69b ? new java['lang']['String'](xhg$, su69b, lzrtyh) + '' : xhg$;
}function exj$t(rtlx, fyzlrh) {
  rtlx['currentElement'] ? rtlx['currentElement']['appendChild'](fyzlrh) : rtlx['doc']['appendChild'](fyzlrh);
}enu3ij['prototype']['parseFromString'] = function (l$gxt, ks690) {
  var wb8d50 = this['options'],
      a4f_7v = new ej3g$ix(),
      d0b65 = wb8d50['domBuilder'] || new exjgti(),
      l$ixg = wb8d50['errorHandler'],
      sn69ku = wb8d50['locator'],
      gi$lx = wb8d50['xmlns'] || {},
      ix$tj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return sn69ku && d0b65['setDocumentLocator'](sn69ku), a4f_7v['errorHandler'] = eyvrzf4(l$ixg, d0b65, sn69ku), a4f_7v['domBuilder'] = wb8d50['domBuilder'] || d0b65, /\/x?html?$/['test'](ks690) && (ix$tj['nbsp'] = '\u00a0', ix$tj['copy'] = '©', gi$lx[''] = 'http://www.w3.org/1999/xhtml'), gi$lx['xml'] = gi$lx['xml'] || 'http://www.w3.org/XML/1998/namespace', l$gxt ? a4f_7v['parse'](l$gxt, gi$lx, ix$tj) : a4f_7v['errorHandler']['error']('invalid doc source'), d0b65['doc'];
}, exjgti['prototype'] = { 'startDocument': function () {
    this['doc'] = new e$j3ig()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (v7_fa, gltxh, yvzhfr, u9s3nq) {
    var m_av74 = this['doc'],
        nqjus3 = m_av74['createElementNS'](v7_fa, yvzhfr || gltxh),
        av_47 = u9s3nq['length'];exj$t(this, nqjus3), this['currentElement'] = nqjus3, this['locator'] && edb08w(this['locator'], nqjus3);for (var sk6 = 0x0; av_47 > sk6; sk6++) {
      var v7_fa = u9s3nq['getURI'](sk6),
          ig$x3 = u9s3nq['getValue'](sk6),
          yvzhfr = u9s3nq['getQName'](sk6),
          rgtzhl = m_av74['createAttributeNS'](v7_fa, yvzhfr);this['locator'] && edb08w(u9s3nq['getLocator'](sk6), rgtzhl), rgtzhl['value'] = rgtzhl['nodeValue'] = ig$x3, nqjus3['setAttributeNode'](rgtzhl);
    }
  }, 'endElement': function () {
    {
      var ytlzr = this['currentElement'];ytlzr['tagName'];
    }this['currentElement'] = ytlzr['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ijqnu, paomec) {
    var aco7mp = this['doc']['createProcessingInstruction'](ijqnu, paomec);this['locator'] && edb08w(this['locator'], aco7mp), exj$t(this, aco7mp);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($jxq3) {
    if ($jxq3 = ec74ma_['apply'](this, arguments)) {
      if (this['cdata']) var d06bk5 = this['doc']['createCDATASection']($jxq3);else var d06bk5 = this['doc']['createTextNode']($jxq3);this['currentElement'] ? this['currentElement']['appendChild'](d06bk5) : /^\s*$/['test']($jxq3) && this['doc']['appendChild'](d06bk5), this['locator'] && edb08w(this['locator'], d06bk5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (vryzfh) {
    (this['locator'] = vryzfh) && (vryzfh['lineNumber'] = 0x0);
  }, 'comment': function (d856b0) {
    d856b0 = ec74ma_['apply'](this, arguments);var y_4f7 = this['doc']['createComment'](d856b0);this['locator'] && edb08w(this['locator'], y_4f7), exj$t(this, y_4f7);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ca7_m4, _7avf4, j$ixg) {
    var js3nq = this['doc']['implementation'];if (js3nq && js3nq['createDocumentType']) {
      var om7ap = js3nq['createDocumentType'](ca7_m4, _7avf4, j$ixg);this['locator'] && edb08w(this['locator'], om7ap), exj$t(this, om7ap);
    }
  }, 'warning': function ($3xigj) {
    console['warn']('[xmldom warning]\t' + $3xigj, eqi$jn(this['locator']));
  }, 'error': function (a7f4_v) {
    console['error']('[xmldom error]\t' + a7f4_v, eqi$jn(this['locator']));
  }, 'fatalError': function (ji3qn) {
    throw console['error']('[xmldom fatalError]\t' + ji3qn, eqi$jn(this['locator'])), ji3qn;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (iqjx$3) {
  exjgti['prototype'][iqjx$3] = function () {
    return null;
  };
});var ej3g$ix = require('./eeesax')['XMLReader'],
    e$j3ig = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = enu3ij;