var b = wx.$e;
function equj(y4vz_) {
  this['options'] = y4vz_ || { 'locator': {} };
}function evhzryf(n6, _4yvf, yrfzv) {
  function $gjix(hrzyt) {
    var xh$ltg = n6[hrzyt];!xh$ltg && bd8w05 && (xh$ltg = 0x2 == n6['length'] ? function (mpoca7) {
      n6(hrzyt, mpoca7);
    } : n6), d6kb90[hrzyt] = xh$ltg && function (vf47_) {
      xh$ltg('[xmldom ' + hrzyt + ']\t' + vf47_ + e_c4m(yrfzv));
    } || function () {};
  }if (!n6) {
    if (_4yvf instanceof en96ku) return _4yvf;n6 = _4yvf;
  }var d6kb90 = {},
      bd8w05 = n6 instanceof Function;return yrfzv = yrfzv || {}, $gjix('warning'), $gjix('error'), $gjix('fatalError'), d6kb90;
}function en96ku() {
  this['cdata'] = !0x1;
}function e$xqji(yfvhrz, avf7) {
  avf7['lineNumber'] = yfvhrz['lineNumber'], avf7['columnNumber'] = yfvhrz['columnNumber'];
}function e_c4m(m7ao) {
  return m7ao ? '\x0a@' + (m7ao['systemId'] || '') + '#[line:' + m7ao['lineNumber'] + ',col:' + m7ao['columnNumber'] + ']' : void 0x0;
}function eoamc_(kb9d6, s9ku, juiq) {
  return 'string' == typeof kb9d6 ? kb9d6['substr'](s9ku, juiq) : kb9d6['length'] >= s9ku + juiq || s9ku ? new java['lang']['String'](kb9d6, s9ku, juiq) + '' : kb9d6;
}function eyrthlz(qsk9un, c_ma4) {
  qsk9un['currentElement'] ? qsk9un['currentElement']['appendChild'](c_ma4) : qsk9un['doc']['appendChild'](c_ma4);
}equj['prototype']['parseFromString'] = function (lhrytz, z4vr) {
  var fv4z_ = this['options'],
      lhrtgz = new ed605bk(),
      l$ = fv4z_['domBuilder'] || new en96ku(),
      $jqin = fv4z_['errorHandler'],
      h$xlg = fv4z_['locator'],
      nsu6 = fv4z_['xmlns'] || {},
      mao7cp = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return h$xlg && l$['setDocumentLocator'](h$xlg), lhrtgz['errorHandler'] = evhzryf($jqin, l$, h$xlg), lhrtgz['domBuilder'] = fv4z_['domBuilder'] || l$, /\/x?html?$/['test'](z4vr) && (mao7cp['nbsp'] = '\u00a0', mao7cp['copy'] = '©', nsu6[''] = 'http://www.w3.org/1999/xhtml'), nsu6['xml'] = nsu6['xml'] || 'http://www.w3.org/XML/1998/namespace', lhrytz ? lhrtgz['parse'](lhrytz, nsu6, mao7cp) : lhrtgz['errorHandler']['error']('invalid doc source'), l$['doc'];
}, en96ku['prototype'] = { 'startDocument': function () {
    this['doc'] = new efzy_4()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_mca, xq3$, zhlg, c74_) {
    var yrfvhz = this['doc'],
        nkqu = yrfvhz['createElementNS'](_mca, zhlg || xq3$),
        b0d5 = c74_['length'];eyrthlz(this, nkqu), this['currentElement'] = nkqu, this['locator'] && e$xqji(this['locator'], nkqu);for (var mc7o_a = 0x0; b0d5 > mc7o_a; mc7o_a++) {
      var _mca = c74_['getURI'](mc7o_a),
          rhlyt = c74_['getValue'](mc7o_a),
          zhlg = c74_['getQName'](mc7o_a),
          glxh$t = yrfvhz['createAttributeNS'](_mca, zhlg);this['locator'] && e$xqji(c74_['getLocator'](mc7o_a), glxh$t), glxh$t['value'] = glxh$t['nodeValue'] = rhlyt, nkqu['setAttributeNode'](glxh$t);
    }
  }, 'endElement': function () {
    {
      var fhlr = this['currentElement'];fhlr['tagName'];
    }this['currentElement'] = fhlr['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (rthzlg, vfz_4) {
    var s6kb = this['doc']['createProcessingInstruction'](rthzlg, vfz_4);this['locator'] && e$xqji(this['locator'], s6kb), eyrthlz(this, s6kb);
  }, 'ignorableWhitespace': function () {}, 'characters': function (f_a47) {
    if (f_a47 = eoamc_['apply'](this, arguments)) {
      if (this['cdata']) var zyrth = this['doc']['createCDATASection'](f_a47);else var zyrth = this['doc']['createTextNode'](f_a47);this['currentElement'] ? this['currentElement']['appendChild'](zyrth) : /^\s*$/['test'](f_a47) && this['doc']['appendChild'](zyrth), this['locator'] && e$xqji(this['locator'], zyrth);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (snq9u3) {
    (this['locator'] = snq9u3) && (snq9u3['lineNumber'] = 0x0);
  }, 'comment': function (lryth) {
    lryth = eoamc_['apply'](this, arguments);var _7mav = this['doc']['createComment'](lryth);this['locator'] && e$xqji(this['locator'], _7mav), eyrthlz(this, _7mav);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xlgh$, qinj$, qusj3) {
    var hx$gl = this['doc']['implementation'];if (hx$gl && hx$gl['createDocumentType']) {
      var grhz = hx$gl['createDocumentType'](xlgh$, qinj$, qusj3);this['locator'] && e$xqji(this['locator'], grhz), eyrthlz(this, grhz);
    }
  }, 'warning': function (w085d2) {
    console['warn']('[xmldom warning]\t' + w085d2, e_c4m(this['locator']));
  }, 'error': function (av4f7_) {
    console['error']('[xmldom error]\t' + av4f7_, e_c4m(this['locator']));
  }, 'fatalError': function (tlrxgh) {
    throw console['error']('[xmldom fatalError]\t' + tlrxgh, e_c4m(this['locator'])), tlrxgh;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (zlr) {
  en96ku['prototype'][zlr] = function () {
    return null;
  };
});var ed605bk = require('./eeesax')['XMLReader'],
    efzy_4 = exports['DOMImplementation'] = require('./eeedom')['DOMImplementation'];exports['XMLSerializer'] = require('./eeedom')['XMLSerializer'], exports['DOMParser'] = equj;