var p = wx.$h;
function a_$z2_01(roptqs) {
  this['options'] = roptqs || { 'locator': {} };
}function a_mlkij(ghfkj, gfdbec, mnorq) {
  function hgdie(tsoq) {
    var rstwq = ghfkj[tsoq];!rstwq && koplnm && (rstwq = 0x2 == ghfkj['length'] ? function (qpnmro) {
      ghfkj(tsoq, qpnmro);
    } : ghfkj), ompqrn[tsoq] = rstwq ? function (soq) {
      rstwq('[xmldom ' + tsoq + ']\t' + soq + a_prosqn(mnorq));
    } : function () {};
  }if (!ghfkj) {
    if (gfdbec instanceof a_klghij) return gfdbec;ghfkj = gfdbec;
  }var ompqrn = {},
      koplnm = ghfkj instanceof Function;return mnorq = mnorq || {}, hgdie('warning'), hgdie('error'), hgdie('fatalError'), ompqrn;
}function a_klghij() {
  this['cdata'] = !0x1;
}function a_qtoprs(ehdfgc, bdea) {
  bdea['lineNumber'] = ehdfgc['lineNumber'], bdea['columnNumber'] = ehdfgc['columnNumber'];
}function a_prosqn(stvrxw) {
  return stvrxw ? '\x0a@' + (stvrxw['systemId'] || '') + '#[line:' + stvrxw['lineNumber'] + ',col:' + stvrxw['columnNumber'] + ']' : void 0x0;
}function a_ponmr(qsrp, fbcdg, fgihk) {
  return 'string' == typeof qsrp ? qsrp['substr'](fbcdg, fgihk) : qsrp['length'] >= fbcdg + fgihk || fbcdg ? new java['lang']['String'](qsrp, fbcdg, fgihk) + '' : qsrp;
}function a_jhfgi(ptr, dhige) {
  (ptr['currentElement'] || ptr['doc'])['appendChild'](dhige);
}a_$z2_01['prototype']['parseFromString'] = function (vtwqrs, x$0yz) {
  var yt = this['options'],
      noklm = new a_fgcdeb(),
      _z1$20 = yt['domBuilder'] || new a_klghij(),
      gdifeh = yt['errorHandler'],
      mhli = yt['locator'],
      hkgil = yt['xmlns'] || {},
      $_0y = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return mhli && _z1$20['setDocumentLocator'](mhli), noklm['errorHandler'] = a_mlkij(gdifeh, _z1$20, mhli), noklm['domBuilder'] = yt['domBuilder'] || _z1$20, /\/x?html?$/['test'](x$0yz) && ($_0y['nbsp'] = '\u00a0', $_0y['copy'] = '©', hkgil[''] = 'http://www.w3.org/1999/xhtml'), hkgil['xml'] = hkgil['xml'] || 'http://www.w3.org/XML/1998/namespace', vtwqrs ? noklm['parse'](vtwqrs, hkgil, $_0y) : noklm['errorHandler']['error']('invalid doc source'), _z1$20['doc'];
}, a_klghij['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_iefdgh()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_13402, fabed, cdegfh, lqno) {
    var w_$yx = this['doc'],
        nmkojl = w_$yx['createElementNS'](_13402, cdegfh || fabed),
        loj = lqno['length'];a_jhfgi(this, nmkojl), this['currentElement'] = nmkojl, this['locator'] && a_qtoprs(this['locator'], nmkojl);for (var prsto = 0x0; prsto < loj; prsto++) {
      var _13402 = lqno['getURI'](prsto),
          ecfdb = lqno['getValue'](prsto),
          cdegfh = lqno['getQName'](prsto),
          wrvsq = w_$yx['createAttributeNS'](_13402, cdegfh);this['locator'] && a_qtoprs(lqno['getLocator'](prsto), wrvsq), wrvsq['value'] = wrvsq['nodeValue'] = ecfdb, nmkojl['setAttributeNode'](wrvsq);
    }
  }, 'endElement': function () {
    var yvzxw = this['currentElement'];yvzxw['tagName'], this['currentElement'] = yvzxw['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (pnrqmo, $_0yz) {
    $_0yz = this['doc']['createProcessingInstruction'](pnrqmo, $_0yz), (this['locator'] && a_qtoprs(this['locator'], $_0yz), a_jhfgi(this, $_0yz));
  }, 'ignorableWhitespace': function () {}, 'characters': function (hilm) {
    var gdifhe;(hilm = a_ponmr['apply'](this, arguments)) && (gdifhe = this['cdata'] ? this['doc']['createCDATASection'](hilm) : this['doc']['createTextNode'](hilm), this['currentElement'] ? this['currentElement']['appendChild'](gdifhe) : /^\s*$/['test'](hilm) && this['doc']['appendChild'](gdifhe), this['locator'] && a_qtoprs(this['locator'], gdifhe));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (wyztvx) {
    (this['locator'] = wyztvx) && (wyztvx['lineNumber'] = 0x0);
  }, 'comment': function (jhgik) {
    jhgik = a_ponmr['apply'](this, arguments);var ilghkj = this['doc']['createComment'](jhgik);this['locator'] && a_qtoprs(this['locator'], ilghkj), a_jhfgi(this, ilghkj);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (dchf, x_0zy$, srqonp) {
    var fhjig = this['doc']['implementation'];fhjig && fhjig['createDocumentType'] && (srqonp = fhjig['createDocumentType'](dchf, x_0zy$, srqonp), this['locator'] && a_qtoprs(this['locator'], srqonp), a_jhfgi(this, srqonp));
  }, 'warning': function (bcefdg) {
    console['warn']('[xmldom warning]\t' + bcefdg, a_prosqn(this['locator']));
  }, 'error': function (nilkm) {
    console['error']('[xmldom error]\t' + nilkm, a_prosqn(this['locator']));
  }, 'fatalError': function ($zw_y) {
    throw console['error']('[xmldom fatalError]\t' + $zw_y, a_prosqn(this['locator'])), $zw_y;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (mknli) {
  a_klghij['prototype'][mknli] = function () {
    return null;
  };
});var a_fgcdeb = require('./cccsax')['XMLReader'],
    a_iefdgh = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_$z2_01;