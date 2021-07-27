var p = wx.$h;
function a_mli(nkpmo) {
  this['options'] = nkpmo || { 'locator': {} };
}function a_orpsq(qrots, ytxws, cbdfa) {
  function pomkln(idegfh) {
    var wvytz = qrots[idegfh];!wvytz && rqpstv && (wvytz = 0x2 == qrots['length'] ? function (oklpm) {
      qrots(idegfh, oklpm);
    } : qrots), lpomn[idegfh] = wvytz ? function (wsxt) {
      wvytz('[xmldom ' + idegfh + ']\t' + wsxt + a_gdbcef(cbdfa));
    } : function () {};
  }if (!qrots) {
    if (ytxws instanceof a_swqtr) return ytxws;qrots = ytxws;
  }var lpomn = {},
      rqpstv = qrots instanceof Function;return cbdfa = cbdfa || {}, pomkln('warning'), pomkln('error'), pomkln('fatalError'), lpomn;
}function a_swqtr() {
  this['cdata'] = !0x1;
}function a_wyx$(qropm, osrnp) {
  osrnp['lineNumber'] = qropm['lineNumber'], osrnp['columnNumber'] = qropm['columnNumber'];
}function a_gdbcef(yx$vwz) {
  return yx$vwz ? '\x0a@' + (yx$vwz['systemId'] || '') + '#[line:' + yx$vwz['lineNumber'] + ',col:' + yx$vwz['columnNumber'] + ']' : void 0x0;
}function a_$30_(nqrop, lnpqm, gdei) {
  return 'string' == typeof nqrop ? nqrop['substr'](lnpqm, gdei) : nqrop['length'] >= lnpqm + gdei || lnpqm ? new java['lang']['String'](nqrop, lnpqm, gdei) + '' : nqrop;
}function a_hkmi(vyxtsw, _$0z2) {
  (vyxtsw['currentElement'] || vyxtsw['doc'])['appendChild'](_$0z2);
}a_mli['prototype']['parseFromString'] = function (degh, vqptsr) {
  var nolmpq = this['options'],
      rnqp = new a_opqmn(),
      ebfdcg = nolmpq['domBuilder'] || new a_swqtr(),
      ceda = nolmpq['errorHandler'],
      jhmil = nolmpq['locator'],
      $1320 = nolmpq['xmlns'] || {},
      _10z2$ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return jhmil && ebfdcg['setDocumentLocator'](jhmil), rnqp['errorHandler'] = a_orpsq(ceda, ebfdcg, jhmil), rnqp['domBuilder'] = nolmpq['domBuilder'] || ebfdcg, /\/x?html?$/['test'](vqptsr) && (_10z2$['nbsp'] = '\u00a0', _10z2$['copy'] = '©', $1320[''] = 'http://www.w3.org/1999/xhtml'), $1320['xml'] = $1320['xml'] || 'http://www.w3.org/XML/1998/namespace', degh ? rnqp['parse'](degh, $1320, _10z2$) : rnqp['errorHandler']['error']('invalid doc source'), ebfdcg['doc'];
}, a_swqtr['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_hied()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function ($0y1z_, zxvy$w, nmjokl, qwvsr) {
    var jink = this['doc'],
        mjinlk = jink['createElementNS']($0y1z_, nmjokl || zxvy$w),
        pstroq = qwvsr['length'];a_hkmi(this, mjinlk), this['currentElement'] = mjinlk, this['locator'] && a_wyx$(this['locator'], mjinlk);for (var opmqnr = 0x0; opmqnr < pstroq; opmqnr++) {
      var $0y1z_ = qwvsr['getURI'](opmqnr),
          vwrst = qwvsr['getValue'](opmqnr),
          nmjokl = qwvsr['getQName'](opmqnr),
          opnmqr = jink['createAttributeNS']($0y1z_, nmjokl);this['locator'] && a_wyx$(qwvsr['getLocator'](opmqnr), opnmqr), opnmqr['value'] = opnmqr['nodeValue'] = vwrst, mjinlk['setAttributeNode'](opnmqr);
    }
  }, 'endElement': function () {
    var vrsxtw = this['currentElement'];vrsxtw['tagName'], this['currentElement'] = vrsxtw['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (opmnql, cedfhg) {
    cedfhg = this['doc']['createProcessingInstruction'](opmnql, cedfhg), (this['locator'] && a_wyx$(this['locator'], cedfhg), a_hkmi(this, cedfhg));
  }, 'ignorableWhitespace': function () {}, 'characters': function (svxytw) {
    var vzwy;(svxytw = a_$30_['apply'](this, arguments)) && (vzwy = this['cdata'] ? this['doc']['createCDATASection'](svxytw) : this['doc']['createTextNode'](svxytw), this['currentElement'] ? this['currentElement']['appendChild'](vzwy) : /^\s*$/['test'](svxytw) && this['doc']['appendChild'](vzwy), this['locator'] && a_wyx$(this['locator'], vzwy));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (srpqto) {
    (this['locator'] = srpqto) && (srpqto['lineNumber'] = 0x0);
  }, 'comment': function (higkjl) {
    higkjl = a_$30_['apply'](this, arguments);var $xwzy_ = this['doc']['createComment'](higkjl);this['locator'] && a_wyx$(this['locator'], $xwzy_), a_hkmi(this, $xwzy_);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (qvsrwt, fihkgj, chdfg) {
    var dhc = this['doc']['implementation'];dhc && dhc['createDocumentType'] && (chdfg = dhc['createDocumentType'](qvsrwt, fihkgj, chdfg), this['locator'] && a_wyx$(this['locator'], chdfg), a_hkmi(this, chdfg));
  }, 'warning': function (_0xy$) {
    console['warn']('[xmldom warning]\t' + _0xy$, a_gdbcef(this['locator']));
  }, 'error': function (onm) {
    console['error']('[xmldom error]\t' + onm, a_gdbcef(this['locator']));
  }, 'fatalError': function (efhigd) {
    throw console['error']('[xmldom fatalError]\t' + efhigd, a_gdbcef(this['locator'])), efhigd;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (lpkn) {
  a_swqtr['prototype'][lpkn] = function () {
    return null;
  };
});var a_opqmn = require('./cccsax')['XMLReader'],
    a_hied = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_mli;