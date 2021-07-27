var p = wx.$h;
function a_ehgfji(fdheig) {
  this['options'] = fdheig || { 'locator': {} };
}function a_fgiejh($z021, ikjfg, gedhif) {
  function eghdfc(eacfb) {
    var zx_wy = $z021[eacfb];!zx_wy && jfighe && (zx_wy = 0x2 == $z021['length'] ? function (nsqrop) {
      $z021(eacfb, nsqrop);
    } : $z021), hkilgj[eacfb] = zx_wy ? function (gdcbe) {
      zx_wy('[xmldom ' + eacfb + ']\t' + gdcbe + a_stqwrv(gedhif));
    } : function () {};
  }if (!$z021) {
    if (ikjfg instanceof a_gfedh) return ikjfg;$z021 = ikjfg;
  }var hkilgj = {},
      jfighe = $z021 instanceof Function;return gedhif = gedhif || {}, eghdfc('warning'), eghdfc('error'), eghdfc('fatalError'), hkilgj;
}function a_gfedh() {
  this['cdata'] = !0x1;
}function a_mknolp(qrson, mjonk) {
  mjonk['lineNumber'] = qrson['lineNumber'], mjonk['columnNumber'] = qrson['columnNumber'];
}function a_stqwrv(fgeihd) {
  return fgeihd ? '\x0a@' + (fgeihd['systemId'] || '') + '#[line:' + fgeihd['lineNumber'] + ',col:' + fgeihd['columnNumber'] + ']' : void 0x0;
}function a_rpnq(qsporn, zxytwv, trpso) {
  return 'string' == typeof qsporn ? qsporn['substr'](zxytwv, trpso) : qsporn['length'] >= zxytwv + trpso || zxytwv ? new java['lang']['String'](qsporn, zxytwv, trpso) + '' : qsporn;
}function a_wsvtrq(hcdeg, fiedg) {
  (hcdeg['currentElement'] || hcdeg['doc'])['appendChild'](fiedg);
}a_ehgfji['prototype']['parseFromString'] = function (zx_$, tvwqs) {
  var glihkj = this['options'],
      hjilk = new a_klnopm(),
      vqpts = glihkj['domBuilder'] || new a_gfedh(),
      klgjhi = glihkj['errorHandler'],
      ijhefg = glihkj['locator'],
      pqonl = glihkj['xmlns'] || {},
      eifhgj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ijhefg && vqpts['setDocumentLocator'](ijhefg), hjilk['errorHandler'] = a_fgiejh(klgjhi, vqpts, ijhefg), hjilk['domBuilder'] = glihkj['domBuilder'] || vqpts, /\/x?html?$/['test'](tvwqs) && (eifhgj['nbsp'] = '\u00a0', eifhgj['copy'] = '©', pqonl[''] = 'http://www.w3.org/1999/xhtml'), pqonl['xml'] = pqonl['xml'] || 'http://www.w3.org/XML/1998/namespace', zx_$ ? hjilk['parse'](zx_$, pqonl, eifhgj) : hjilk['errorHandler']['error']('invalid doc source'), vqpts['doc'];
}, a_gfedh['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_xy$_0()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (gijfkh, ijfhk, zy0_$, limjk) {
    var jihlk = this['doc'],
        nmpoqr = jihlk['createElementNS'](gijfkh, zy0_$ || ijfhk),
        fba = limjk['length'];a_wsvtrq(this, nmpoqr), this['currentElement'] = nmpoqr, this['locator'] && a_mknolp(this['locator'], nmpoqr);for (var hfjg = 0x0; hfjg < fba; hfjg++) {
      var gijfkh = limjk['getURI'](hfjg),
          cghef = limjk['getValue'](hfjg),
          zy0_$ = limjk['getQName'](hfjg),
          bgfd = jihlk['createAttributeNS'](gijfkh, zy0_$);this['locator'] && a_mknolp(limjk['getLocator'](hfjg), bgfd), bgfd['value'] = bgfd['nodeValue'] = cghef, nmpoqr['setAttributeNode'](bgfd);
    }
  }, 'endElement': function () {
    var xz0$y = this['currentElement'];xz0$y['tagName'], this['currentElement'] = xz0$y['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kmli, _$32) {
    _$32 = this['doc']['createProcessingInstruction'](kmli, _$32), (this['locator'] && a_mknolp(this['locator'], _$32), a_wsvtrq(this, _$32));
  }, 'ignorableWhitespace': function () {}, 'characters': function ($_0xy) {
    var _$y1;($_0xy = a_rpnq['apply'](this, arguments)) && (_$y1 = this['cdata'] ? this['doc']['createCDATASection']($_0xy) : this['doc']['createTextNode']($_0xy), this['currentElement'] ? this['currentElement']['appendChild'](_$y1) : /^\s*$/['test']($_0xy) && this['doc']['appendChild'](_$y1), this['locator'] && a_mknolp(this['locator'], _$y1));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rvqs) {
    (this['locator'] = rvqs) && (rvqs['lineNumber'] = 0x0);
  }, 'comment': function (jhklmi) {
    jhklmi = a_rpnq['apply'](this, arguments);var spnoq = this['doc']['createComment'](jhklmi);this['locator'] && a_mknolp(this['locator'], spnoq), a_wsvtrq(this, spnoq);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (cdfbg, lmqo, yzvw) {
    var onlmpq = this['doc']['implementation'];onlmpq && onlmpq['createDocumentType'] && (yzvw = onlmpq['createDocumentType'](cdfbg, lmqo, yzvw), this['locator'] && a_mknolp(this['locator'], yzvw), a_wsvtrq(this, yzvw));
  }, 'warning': function (cadef) {
    console['warn']('[xmldom warning]\t' + cadef, a_stqwrv(this['locator']));
  }, 'error': function (tzvyxw) {
    console['error']('[xmldom error]\t' + tzvyxw, a_stqwrv(this['locator']));
  }, 'fatalError': function (lhij) {
    throw console['error']('[xmldom fatalError]\t' + lhij, a_stqwrv(this['locator'])), lhij;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vtqrp) {
  a_gfedh['prototype'][vtqrp] = function () {
    return null;
  };
});var a_klnopm = require('./cccsax')['XMLReader'],
    a_xy$_0 = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_ehgfji;