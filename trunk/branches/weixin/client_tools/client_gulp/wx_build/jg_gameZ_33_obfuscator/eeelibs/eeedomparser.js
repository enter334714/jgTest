var b = wx.$e;
function et$jxgi(d65b) {
  this['options'] = d65b || { 'locator': {} };
}function ef47av(iujq, dk6b9, dbk650) {
  function nsu6k9(qij$) {
    var v4yf7_ = iujq[qij$];!v4yf7_ && ocpae && (v4yf7_ = 0x2 == iujq['length'] ? function (am_7o) {
      iujq(qij$, am_7o);
    } : iujq), rtglh[qij$] = v4yf7_ && function (mpc7oa) {
      v4yf7_('[xmldom ' + qij$ + ']\t' + mpc7oa + efa_47v(dbk650));
    } || function () {};
  }if (!iujq) {
    if (dk6b9 instanceof ew08d5) return dk6b9;iujq = dk6b9;
  }var rtglh = {},
      ocpae = iujq instanceof Function;return dbk650 = dbk650 || {}, nsu6k9('warning'), nsu6k9('error'), nsu6k9('fatalError'), rtglh;
}function ew08d5() {
  this['cdata'] = !0x1;
}function efyzrh(rhfv, $thlx) {
  $thlx['lineNumber'] = rhfv['lineNumber'], $thlx['columnNumber'] = rhfv['columnNumber'];
}function efa_47v(k9b60d) {
  return k9b60d ? '\x0a@' + (k9b60d['systemId'] || '') + '#[line:' + k9b60d['lineNumber'] + ',col:' + k9b60d['columnNumber'] + ']' : void 0x0;
}function efy4v(qun9ks, i$glt, i$xtlg) {
  return 'string' == typeof qun9ks ? qun9ks['substr'](i$glt, i$xtlg) : qun9ks['length'] >= i$glt + i$xtlg || i$glt ? new java['lang']['String'](qun9ks, i$glt, i$xtlg) + '' : qun9ks;
}function ek65bd($glt, dw28) {
  $glt['currentElement'] ? $glt['currentElement']['appendChild'](dw28) : $glt['doc']['appendChild'](dw28);
}et$jxgi['prototype']['parseFromString'] = function (vzfy, wb805d) {
  var iujnq3 = this['options'],
      moc7_a = new egthr(),
      d08w5 = iujnq3['domBuilder'] || new ew08d5(),
      ac7om = iujnq3['errorHandler'],
      gtj = iujnq3['locator'],
      fv4yrz = iujnq3['xmlns'] || {},
      fzyhlr = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return gtj && d08w5['setDocumentLocator'](gtj), moc7_a['errorHandler'] = ef47av(ac7om, d08w5, gtj), moc7_a['domBuilder'] = iujnq3['domBuilder'] || d08w5, /\/x?html?$/['test'](wb805d) && (fzyhlr['nbsp'] = '\u00a0', fzyhlr['copy'] = '©', fv4yrz[''] = 'http://www.w3.org/1999/xhtml'), fv4yrz['xml'] = fv4yrz['xml'] || 'http://www.w3.org/XML/1998/namespace', vzfy ? moc7_a['parse'](vzfy, fv4yrz, fzyhlr) : moc7_a['errorHandler']['error']('invalid doc source'), d08w5['doc'];
}, ew08d5['prototype'] = { 'startDocument': function () {
    this['doc'] = new ehlfy()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (iuj3nq, x$lthg, _fyv, m74a_) {
    var lfyr = this['doc'],
        hzgrlt = lfyr['createElementNS'](iuj3nq, _fyv || x$lthg),
        ytzrlh = m74a_['length'];ek65bd(this, hzgrlt), this['currentElement'] = hzgrlt, this['locator'] && efyzrh(this['locator'], hzgrlt);for (var kn9u = 0x0; ytzrlh > kn9u; kn9u++) {
      var iuj3nq = m74a_['getURI'](kn9u),
          hrgzl = m74a_['getValue'](kn9u),
          _fyv = m74a_['getQName'](kn9u),
          po7a = lfyr['createAttributeNS'](iuj3nq, _fyv);this['locator'] && efyzrh(m74a_['getLocator'](kn9u), po7a), po7a['value'] = po7a['nodeValue'] = hrgzl, hzgrlt['setAttributeNode'](po7a);
    }
  }, 'endElement': function () {
    {
      var hrlzf = this['currentElement'];hrlzf['tagName'];
    }this['currentElement'] = hrlzf['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (hzrlty, ujnq3i) {
    var _vma74 = this['doc']['createProcessingInstruction'](hzrlty, ujnq3i);this['locator'] && efyzrh(this['locator'], _vma74), ek65bd(this, _vma74);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($glthx) {
    if ($glthx = efy4v['apply'](this, arguments)) {
      if (this['cdata']) var ujqin3 = this['doc']['createCDATASection']($glthx);else var ujqin3 = this['doc']['createTextNode']($glthx);this['currentElement'] ? this['currentElement']['appendChild'](ujqin3) : /^\s*$/['test']($glthx) && this['doc']['appendChild'](ujqin3), this['locator'] && efyzrh(this['locator'], ujqin3);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (b8d) {
    (this['locator'] = b8d) && (b8d['lineNumber'] = 0x0);
  }, 'comment': function (lyrhfz) {
    lyrhfz = efy4v['apply'](this, arguments);var rvzy4 = this['doc']['createComment'](lyrhfz);this['locator'] && efyzrh(this['locator'], rvzy4), ek65bd(this, rvzy4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (i$qjn3, qx3i, b05d86) {
    var v_z4y = this['doc']['implementation'];if (v_z4y && v_z4y['createDocumentType']) {
      var pao7c = v_z4y['createDocumentType'](i$qjn3, qx3i, b05d86);this['locator'] && efyzrh(this['locator'], pao7c), ek65bd(this, pao7c);
    }
  }, 'warning': function (tzylrh) {
    console['warn']('[xmldom warning]\t' + tzylrh, efa_47v(this['locator']));
  }, 'error': function (_f4v7y) {
    console['error']('[xmldom error]\t' + _f4v7y, efa_47v(this['locator']));
  }, 'fatalError': function (l$xg) {
    throw console['error']('[xmldom fatalError]\t' + l$xg, efa_47v(this['locator'])), l$xg;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (a7_cmo) {
  ew08d5['prototype'][a7_cmo] = function () {
    return null;
  };
});var egthr = require('./eeesax')['XMLReader'],
    ehlfy = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = et$jxgi;