var p = wx.$h;
function a_ejhigf(qrpson) {
  this['options'] = qrpson || { 'locator': {} };
}function a_hcdeg(zxy$0_, v$yzw, mqorp) {
  function hijgkl(fecabd) {
    var npmokl = zxy$0_[fecabd];!npmokl && pstrqo && (npmokl = 0x2 == zxy$0_['length'] ? function (y$10z_) {
      zxy$0_(fecabd, y$10z_);
    } : zxy$0_), _1z0$[fecabd] = npmokl ? function (vpqsr) {
      npmokl('[xmldom ' + fecabd + ']\t' + vpqsr + a_pnmolk(mqorp));
    } : function () {};
  }if (!zxy$0_) {
    if (v$yzw instanceof a_qlpno) return v$yzw;zxy$0_ = v$yzw;
  }var _1z0$ = {},
      pstrqo = zxy$0_ instanceof Function;return mqorp = mqorp || {}, hijgkl('warning'), hijgkl('error'), hijgkl('fatalError'), _1z0$;
}function a_qlpno() {
  this['cdata'] = !0x1;
}function a_echg(adfe, z$_210) {
  z$_210['lineNumber'] = adfe['lineNumber'], z$_210['columnNumber'] = adfe['columnNumber'];
}function a_pnmolk(xz$_0y) {
  return xz$_0y ? '\x0a@' + (xz$_0y['systemId'] || '') + '#[line:' + xz$_0y['lineNumber'] + ',col:' + xz$_0y['columnNumber'] + ']' : void 0x0;
}function a_mqpno(_3$120, gdbefc, wtxvr) {
  return 'string' == typeof _3$120 ? _3$120['substr'](gdbefc, wtxvr) : _3$120['length'] >= gdbefc + wtxvr || gdbefc ? new java['lang']['String'](_3$120, gdbefc, wtxvr) + '' : _3$120;
}function a_xstrw(fbcead, nmrpqo) {
  (fbcead['currentElement'] || fbcead['doc'])['appendChild'](nmrpqo);
}a_ejhigf['prototype']['parseFromString'] = function (sywtxv, pnmoql) {
  var ceghfd = this['options'],
      hiegjf = new a_rmonp(),
      _1$02z = ceghfd['domBuilder'] || new a_qlpno(),
      _0xzy = ceghfd['errorHandler'],
      wrsvqt = ceghfd['locator'],
      z12$0 = ceghfd['xmlns'] || {},
      y0z1 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return wrsvqt && _1$02z['setDocumentLocator'](wrsvqt), hiegjf['errorHandler'] = a_hcdeg(_0xzy, _1$02z, wrsvqt), hiegjf['domBuilder'] = ceghfd['domBuilder'] || _1$02z, /\/x?html?$/['test'](pnmoql) && (y0z1['nbsp'] = '\u00a0', y0z1['copy'] = '©', z12$0[''] = 'http://www.w3.org/1999/xhtml'), z12$0['xml'] = z12$0['xml'] || 'http://www.w3.org/XML/1998/namespace', sywtxv ? hiegjf['parse'](sywtxv, z12$0, y0z1) : hiegjf['errorHandler']['error']('invalid doc source'), _1$02z['doc'];
}, a_qlpno['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_xzwvt()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (yzxw$v, egdcbf, orsnqp, dcegf) {
    var ehidfg = this['doc'],
        y$z10 = ehidfg['createElementNS'](yzxw$v, orsnqp || egdcbf),
        sqpt = dcegf['length'];a_xstrw(this, y$z10), this['currentElement'] = y$z10, this['locator'] && a_echg(this['locator'], y$z10);for (var cgfd = 0x0; cgfd < sqpt; cgfd++) {
      var yzxw$v = dcegf['getURI'](cgfd),
          kgijlh = dcegf['getValue'](cgfd),
          orsnqp = dcegf['getQName'](cgfd),
          dfaebc = ehidfg['createAttributeNS'](yzxw$v, orsnqp);this['locator'] && a_echg(dcegf['getLocator'](cgfd), dfaebc), dfaebc['value'] = dfaebc['nodeValue'] = kgijlh, y$z10['setAttributeNode'](dfaebc);
    }
  }, 'endElement': function () {
    var gfhki = this['currentElement'];gfhki['tagName'], this['currentElement'] = gfhki['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (fdabce, jghie) {
    jghie = this['doc']['createProcessingInstruction'](fdabce, jghie), (this['locator'] && a_echg(this['locator'], jghie), a_xstrw(this, jghie));
  }, 'ignorableWhitespace': function () {}, 'characters': function (pqtvsr) {
    var npomq;(pqtvsr = a_mqpno['apply'](this, arguments)) && (npomq = this['cdata'] ? this['doc']['createCDATASection'](pqtvsr) : this['doc']['createTextNode'](pqtvsr), this['currentElement'] ? this['currentElement']['appendChild'](npomq) : /^\s*$/['test'](pqtvsr) && this['doc']['appendChild'](npomq), this['locator'] && a_echg(this['locator'], npomq));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (mnli) {
    (this['locator'] = mnli) && (mnli['lineNumber'] = 0x0);
  }, 'comment': function (mkhilj) {
    mkhilj = a_mqpno['apply'](this, arguments);var _$xywz = this['doc']['createComment'](mkhilj);this['locator'] && a_echg(this['locator'], _$xywz), a_xstrw(this, _$xywz);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (fihdg, jhkl, vsrptq) {
    var jmokln = this['doc']['implementation'];jmokln && jmokln['createDocumentType'] && (vsrptq = jmokln['createDocumentType'](fihdg, jhkl, vsrptq), this['locator'] && a_echg(this['locator'], vsrptq), a_xstrw(this, vsrptq));
  }, 'warning': function (nkmlpo) {
    console['warn']('[xmldom warning]\t' + nkmlpo, a_pnmolk(this['locator']));
  }, 'error': function (caebd) {
    console['error']('[xmldom error]\t' + caebd, a_pnmolk(this['locator']));
  }, 'fatalError': function (_z120) {
    throw console['error']('[xmldom fatalError]\t' + _z120, a_pnmolk(this['locator'])), _z120;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (prtvsq) {
  a_qlpno['prototype'][prtvsq] = function () {
    return null;
  };
});var a_rmonp = require('./cccsax')['XMLReader'],
    a_xzwvt = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_ejhigf;