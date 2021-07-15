var _ = wx.y$;
function _drnpm(txwus) {
  this['options'] = txwus || { 'locator': {} };
}function _dzxyw$_(trqsv, fihej, z_yxw$) {
  function z$10_(fecg) {
    var rstvqu = trqsv[fecg];!rstvqu && qvturs && (rstvqu = 0x2 == trqsv['length'] ? function (njml) {
      trqsv(fecg, njml);
    } : trqsv), swur[fecg] = rstvqu ? function (z_$021) {
      rstvqu('[xmldom ' + fecg + ']\t' + z_$021 + _dmpoq(z_yxw$));
    } : function () {};
  }if (!trqsv) {
    if (fihej instanceof _dlkim) return fihej;trqsv = fihej;
  }var swur = {},
      qvturs = trqsv instanceof Function;return z_yxw$ = z_yxw$ || {}, z$10_('warning'), z$10_('error'), z$10_('fatalError'), swur;
}function _dlkim() {
  this['cdata'] = !0x1;
}function _dqstrp(onkm, nmolpk) {
  nmolpk['lineNumber'] = onkm['lineNumber'], nmolpk['columnNumber'] = onkm['columnNumber'];
}function _dmpoq(vxzyu) {
  return vxzyu ? '\x0a@' + (vxzyu['systemId'] || '') + '#[line:' + vxzyu['lineNumber'] + ',col:' + vxzyu['columnNumber'] + ']' : void 0x0;
}function _domnqpr($_xzy, igefhj, pnorm) {
  return 'string' == typeof $_xzy ? $_xzy['substr'](igefhj, pnorm) : $_xzy['length'] >= igefhj + pnorm || igefhj ? new java['lang']['String']($_xzy, igefhj, pnorm) + '' : $_xzy;
}function _duyvxz(egcbf, osrq) {
  (egcbf['currentElement'] || egcbf['doc'])['appendChild'](osrq);
}_drnpm['prototype']['parseFromString'] = function (z_1$y, gecd) {
  var ghfjie = this['options'],
      trus = new _dikgjfh(),
      miknjl = ghfjie['domBuilder'] || new _dlkim(),
      sqp = ghfjie['errorHandler'],
      fgehji = ghfjie['locator'],
      cfdaeb = ghfjie['xmlns'] || {},
      njlmi = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return fgehji && miknjl['setDocumentLocator'](fgehji), trus['errorHandler'] = _dzxyw$_(sqp, miknjl, fgehji), trus['domBuilder'] = ghfjie['domBuilder'] || miknjl, /\/x?html?$/['test'](gecd) && (njlmi['nbsp'] = '\u00a0', njlmi['copy'] = '©', cfdaeb[''] = 'http://www.w3.org/1999/xhtml'), cfdaeb['xml'] = cfdaeb['xml'] || 'http://www.w3.org/XML/1998/namespace', z_1$y ? trus['parse'](z_1$y, cfdaeb, njlmi) : trus['errorHandler']['error']('invalid doc source'), miknjl['doc'];
}, _dlkim['prototype'] = { 'startDocument': function () {
    this['doc'] = new _droqnm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (opnrsq, nsorp, bfdeg, fgedcb) {
    var qlmonp = this['doc'],
        mkljo = qlmonp['createElementNS'](opnrsq, bfdeg || nsorp),
        $_120 = fgedcb['length'];_duyvxz(this, mkljo), this['currentElement'] = mkljo, this['locator'] && _dqstrp(this['locator'], mkljo);for (var fhdeg = 0x0; fhdeg < $_120; fhdeg++) {
      var opnrsq = fgedcb['getURI'](fhdeg),
          lqn = fgedcb['getValue'](fhdeg),
          bfdeg = fgedcb['getQName'](fhdeg),
          vzuwy = qlmonp['createAttributeNS'](opnrsq, bfdeg);this['locator'] && _dqstrp(fgedcb['getLocator'](fhdeg), vzuwy), vzuwy['value'] = vzuwy['nodeValue'] = lqn, mkljo['setAttributeNode'](vzuwy);
    }
  }, 'endElement': function () {
    var hjefg = this['currentElement'];hjefg['tagName'], this['currentElement'] = hjefg['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($2031, $2_0z) {
    $2_0z = this['doc']['createProcessingInstruction']($2031, $2_0z), (this['locator'] && _dqstrp(this['locator'], $2_0z), _duyvxz(this, $2_0z));
  }, 'ignorableWhitespace': function () {}, 'characters': function (qsruv) {
    var uvtxs;(qsruv = _domnqpr['apply'](this, arguments)) && (uvtxs = this['cdata'] ? this['doc']['createCDATASection'](qsruv) : this['doc']['createTextNode'](qsruv), this['currentElement'] ? this['currentElement']['appendChild'](uvtxs) : /^\s*$/['test'](qsruv) && this['doc']['appendChild'](uvtxs), this['locator'] && _dqstrp(this['locator'], uvtxs));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (eghdc) {
    (this['locator'] = eghdc) && (eghdc['lineNumber'] = 0x0);
  }, 'comment': function (pnkmo) {
    pnkmo = _domnqpr['apply'](this, arguments);var kgiljh = this['doc']['createComment'](pnkmo);this['locator'] && _dqstrp(this['locator'], kgiljh), _duyvxz(this, kgiljh);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (roqt, vz$w, $yxz) {
    var heigd = this['doc']['implementation'];heigd && heigd['createDocumentType'] && ($yxz = heigd['createDocumentType'](roqt, vz$w, $yxz), this['locator'] && _dqstrp(this['locator'], $yxz), _duyvxz(this, $yxz));
  }, 'warning': function (vqrs) {
    console['warn']('[xmldom warning]\t' + vqrs, _dmpoq(this['locator']));
  }, 'error': function (y_xz$w) {
    console['error']('[xmldom error]\t' + y_xz$w, _dmpoq(this['locator']));
  }, 'fatalError': function (tyuv) {
    throw console['error']('[xmldom fatalError]\t' + tyuv, _dmpoq(this['locator'])), tyuv;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ebgdc) {
  _dlkim['prototype'][ebgdc] = function () {
    return null;
  };
});var _dikgjfh = require('./bbbsax')['XMLReader'],
    _droqnm = exports['DOMImplementation'] = require('./bbbdom')['DOMImplementation'];exports['XMLSerializer'] = require('./bbbdom')['XMLSerializer'], exports['DOMParser'] = _drnpm;