var _ = wx.y$;
function _dbfcea(klmijh) {
  this['options'] = klmijh || { 'locator': {} };
}function _dy$w_x(ghejif, sruqp, osrqn) {
  function hcged(tpqur) {
    var noplmq = ghejif[tpqur];!noplmq && twsrvu && (noplmq = 0x2 == ghejif['length'] ? function (jimnl) {
      ghejif(tpqur, jimnl);
    } : ghejif), lmkpn[tpqur] = noplmq && function (xwzuv) {
      noplmq('[xmldom ' + tpqur + ']\t' + xwzuv + _dqnposr(osrqn));
    } || function () {};
  }if (!ghejif) {
    if (sruqp instanceof _dspqorn) return sruqp;ghejif = sruqp;
  }var lmkpn = {},
      twsrvu = ghejif instanceof Function;return osrqn = osrqn || {}, hcged('warning'), hcged('error'), hcged('fatalError'), lmkpn;
}function _dspqorn() {
  this['cdata'] = !0x1;
}function _dhkmli(trpus, vtxyuw) {
  vtxyuw['lineNumber'] = trpus['lineNumber'], vtxyuw['columnNumber'] = trpus['columnNumber'];
}function _dqnposr(eid) {
  return eid ? '\x0a@' + (eid['systemId'] || '') + '#[line:' + eid['lineNumber'] + ',col:' + eid['columnNumber'] + ']' : void 0x0;
}function _dwsvtu(sptrqo, txvwy, yxw$v) {
  return 'string' == typeof sptrqo ? sptrqo['substr'](txvwy, yxw$v) : sptrqo['length'] >= txvwy + yxw$v || txvwy ? new java['lang']['String'](sptrqo, txvwy, yxw$v) + '' : sptrqo;
}function _dy1$0_(edghi, $031_2) {
  edghi['currentElement'] ? edghi['currentElement']['appendChild']($031_2) : edghi['doc']['appendChild']($031_2);
}_dbfcea['prototype']['parseFromString'] = function (inklj, hjlmk) {
  var cbegf = this['options'],
      qrptos = new _dgheifd(),
      lqno = cbegf['domBuilder'] || new _dspqorn(),
      kijhm = cbegf['errorHandler'],
      fhce = cbegf['locator'],
      pqlnm = cbegf['xmlns'] || {},
      ejghfi = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fhce && lqno['setDocumentLocator'](fhce), qrptos['errorHandler'] = _dy$w_x(kijhm, lqno, fhce), qrptos['domBuilder'] = cbegf['domBuilder'] || lqno, /\/x?html?$/['test'](hjlmk) && (ejghfi['nbsp'] = '\u00a0', ejghfi['copy'] = '©', pqlnm[''] = 'http://www.w3.org/1999/xhtml'), pqlnm['xml'] = pqlnm['xml'] || 'http://www.w3.org/XML/1998/namespace', inklj ? qrptos['parse'](inklj, pqlnm, ejghfi) : qrptos['errorHandler']['error']('invalid doc source'), lqno['doc'];
}, _dspqorn['prototype'] = { 'startDocument': function () {
    this['doc'] = new _dtpqsu()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (hjgil, hklji, qsptru, fdghie) {
    var gfbced = this['doc'],
        eifgd = gfbced['createElementNS'](hjgil, qsptru || hklji),
        giefdh = fdghie['length'];_dy1$0_(this, eifgd), this['currentElement'] = eifgd, this['locator'] && _dhkmli(this['locator'], eifgd);for (var igehf = 0x0; giefdh > igehf; igehf++) {
      var hjgil = fdghie['getURI'](igehf),
          rvuw = fdghie['getValue'](igehf),
          qsptru = fdghie['getQName'](igehf),
          efijgh = gfbced['createAttributeNS'](hjgil, qsptru);this['locator'] && _dhkmli(fdghie['getLocator'](igehf), efijgh), efijgh['value'] = efijgh['nodeValue'] = rvuw, eifgd['setAttributeNode'](efijgh);
    }
  }, 'endElement': function () {
    {
      var jlkhi = this['currentElement'];jlkhi['tagName'];
    }this['currentElement'] = jlkhi['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_0z$, lhm) {
    var z_$w = this['doc']['createProcessingInstruction'](_0z$, lhm);this['locator'] && _dhkmli(this['locator'], z_$w), _dy1$0_(this, z_$w);
  }, 'ignorableWhitespace': function () {}, 'characters': function (vywz$) {
    if (vywz$ = _dwsvtu['apply'](this, arguments)) {
      if (this['cdata']) var uzvx = this['doc']['createCDATASection'](vywz$);else var uzvx = this['doc']['createTextNode'](vywz$);this['currentElement'] ? this['currentElement']['appendChild'](uzvx) : /^\s*$/['test'](vywz$) && this['doc']['appendChild'](uzvx), this['locator'] && _dhkmli(this['locator'], uzvx);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (mqpon) {
    (this['locator'] = mqpon) && (mqpon['lineNumber'] = 0x0);
  }, 'comment': function (pqomn) {
    pqomn = _dwsvtu['apply'](this, arguments);var wtvrus = this['doc']['createComment'](pqomn);this['locator'] && _dhkmli(this['locator'], wtvrus), _dy1$0_(this, wtvrus);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (rt, lknijm, sorptq) {
    var xyzu = this['doc']['implementation'];if (xyzu && xyzu['createDocumentType']) {
      var bfcged = xyzu['createDocumentType'](rt, lknijm, sorptq);this['locator'] && _dhkmli(this['locator'], bfcged), _dy1$0_(this, bfcged);
    }
  }, 'warning': function (srnopq) {
    console['warn']('[xmldom warning]\t' + srnopq, _dqnposr(this['locator']));
  }, 'error': function (mkijn) {
    console['error']('[xmldom error]\t' + mkijn, _dqnposr(this['locator']));
  }, 'fatalError': function (ifgj) {
    throw console['error']('[xmldom fatalError]\t' + ifgj, _dqnposr(this['locator'])), ifgj;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (yuvtw) {
  _dspqorn['prototype'][yuvtw] = function () {
    return null;
  };
});var _dgheifd = require('./bbbsax')['XMLReader'],
    _dtpqsu = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _dbfcea;