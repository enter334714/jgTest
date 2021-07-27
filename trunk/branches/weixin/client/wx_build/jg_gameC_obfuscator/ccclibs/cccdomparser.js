var p = wx.$h;
function a_hgli($yvzx) {
  this['options'] = $yvzx || { 'locator': {} };
}function a_minj(ztwyvx, baedfc, onprqm) {
  function wvzy$(geijh) {
    var njmlik = ztwyvx[geijh];!njmlik && fiehgj && (njmlik = 0x2 == ztwyvx['length'] ? function (pkmo) {
      ztwyvx(geijh, pkmo);
    } : ztwyvx), cfdea[geijh] = njmlik ? function (ropqmn) {
      njmlik('[xmldom ' + geijh + ']\t' + ropqmn + a_hfedc(onprqm));
    } : function () {};
  }if (!ztwyvx) {
    if (baedfc instanceof a_vqp) return baedfc;ztwyvx = baedfc;
  }var cfdea = {},
      fiehgj = ztwyvx instanceof Function;return onprqm = onprqm || {}, wvzy$('warning'), wvzy$('error'), wvzy$('fatalError'), cfdea;
}function a_vqp() {
  this['cdata'] = !0x1;
}function a_ebdcaf(jkin, hedfcg) {
  hedfcg['lineNumber'] = jkin['lineNumber'], hedfcg['columnNumber'] = jkin['columnNumber'];
}function a_hfedc(bcfea) {
  return bcfea ? '\x0a@' + (bcfea['systemId'] || '') + '#[line:' + bcfea['lineNumber'] + ',col:' + bcfea['columnNumber'] + ']' : void 0x0;
}function a_qorstp(decbf, vqrtws, pmorq) {
  return 'string' == typeof decbf ? decbf['substr'](vqrtws, pmorq) : decbf['length'] >= vqrtws + pmorq || vqrtws ? new java['lang']['String'](decbf, vqrtws, pmorq) + '' : decbf;
}function a_ikhjf(_$0y1, nrqos) {
  (_$0y1['currentElement'] || _$0y1['doc'])['appendChild'](nrqos);
}a_hgli['prototype']['parseFromString'] = function (stwrx, hdie) {
  var dbfe = this['options'],
      yz0x$ = new a_hkfgi(),
      knji = dbfe['domBuilder'] || new a_vqp(),
      kjfgih = dbfe['errorHandler'],
      afedcb = dbfe['locator'],
      tzyv = dbfe['xmlns'] || {},
      gebdf = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return afedcb && knji['setDocumentLocator'](afedcb), yz0x$['errorHandler'] = a_minj(kjfgih, knji, afedcb), yz0x$['domBuilder'] = dbfe['domBuilder'] || knji, /\/x?html?$/['test'](hdie) && (gebdf['nbsp'] = '\u00a0', gebdf['copy'] = '©', tzyv[''] = 'http://www.w3.org/1999/xhtml'), tzyv['xml'] = tzyv['xml'] || 'http://www.w3.org/XML/1998/namespace', stwrx ? yz0x$['parse'](stwrx, tzyv, gebdf) : yz0x$['errorHandler']['error']('invalid doc source'), knji['doc'];
}, a_vqp['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_jgfe()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mlkjno, egdch, idfe, ghc) {
    var qrws = this['doc'],
        yz = qrws['createElementNS'](mlkjno, idfe || egdch),
        nmrop = ghc['length'];a_ikhjf(this, yz), this['currentElement'] = yz, this['locator'] && a_ebdcaf(this['locator'], yz);for (var xzvy$w = 0x0; xzvy$w < nmrop; xzvy$w++) {
      var mlkjno = ghc['getURI'](xzvy$w),
          igd = ghc['getValue'](xzvy$w),
          idfe = ghc['getQName'](xzvy$w),
          tvpr = qrws['createAttributeNS'](mlkjno, idfe);this['locator'] && a_ebdcaf(ghc['getLocator'](xzvy$w), tvpr), tvpr['value'] = tvpr['nodeValue'] = igd, yz['setAttributeNode'](tvpr);
    }
  }, 'endElement': function () {
    var y0z$1_ = this['currentElement'];y0z$1_['tagName'], this['currentElement'] = y0z$1_['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (z_02$, ihjlk) {
    ihjlk = this['doc']['createProcessingInstruction'](z_02$, ihjlk), (this['locator'] && a_ebdcaf(this['locator'], ihjlk), a_ikhjf(this, ihjlk));
  }, 'ignorableWhitespace': function () {}, 'characters': function (knij) {
    var swvxyt;(knij = a_qorstp['apply'](this, arguments)) && (swvxyt = this['cdata'] ? this['doc']['createCDATASection'](knij) : this['doc']['createTextNode'](knij), this['currentElement'] ? this['currentElement']['appendChild'](swvxyt) : /^\s*$/['test'](knij) && this['doc']['appendChild'](swvxyt), this['locator'] && a_ebdcaf(this['locator'], swvxyt));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (y$_z0x) {
    (this['locator'] = y$_z0x) && (y$_z0x['lineNumber'] = 0x0);
  }, 'comment': function (gjkifh) {
    gjkifh = a_qorstp['apply'](this, arguments);var pnomk = this['doc']['createComment'](gjkifh);this['locator'] && a_ebdcaf(this['locator'], pnomk), a_ikhjf(this, pnomk);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (omrn, cfadbe, ropsnq) {
    var fdgbce = this['doc']['implementation'];fdgbce && fdgbce['createDocumentType'] && (ropsnq = fdgbce['createDocumentType'](omrn, cfadbe, ropsnq), this['locator'] && a_ebdcaf(this['locator'], ropsnq), a_ikhjf(this, ropsnq));
  }, 'warning': function (psqt) {
    console['warn']('[xmldom warning]\t' + psqt, a_hfedc(this['locator']));
  }, 'error': function (qrvp) {
    console['error']('[xmldom error]\t' + qrvp, a_hfedc(this['locator']));
  }, 'fatalError': function (xytz) {
    throw console['error']('[xmldom fatalError]\t' + xytz, a_hfedc(this['locator'])), xytz;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (hmljk) {
  a_vqp['prototype'][hmljk] = function () {
    return null;
  };
});var a_hkfgi = require('./cccsax')['XMLReader'],
    a_jgfe = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_hgli;