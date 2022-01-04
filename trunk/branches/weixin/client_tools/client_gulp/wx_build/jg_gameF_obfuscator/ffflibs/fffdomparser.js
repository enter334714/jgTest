var k = wx.$f;
function fbvum1i(rz83$7) {
  this['options'] = rz83$7 || { 'locator': {} };
}function fxsjnwd(uvibm1, jnxdsw, mivfb) {
  function nezw8(cd2jo6) {
    var oscd = uvibm1[cd2jo6];!oscd && vmtfi && (oscd = 0x2 == uvibm1['length'] ? function (mbifv) {
      uvibm1(cd2jo6, mbifv);
    } : uvibm1), x7r[cd2jo6] = oscd && function (zx8w) {
      oscd('[xmldom ' + cd2jo6 + ']\t' + zx8w + fbhm(mivfb));
    } || function () {};
  }if (!uvibm1) {
    if (jnxdsw instanceof fhqk0_) return jnxdsw;uvibm1 = jnxdsw;
  }var x7r = {},
      vmtfi = uvibm1 instanceof Function;return mivfb = mivfb || {}, nezw8('warning'), nezw8('error'), nezw8('fatalError'), x7r;
}function fhqk0_() {
  this['cdata'] = !0x1;
}function fscdj6o(q_0h5k, $7ap3) {
  $7ap3['lineNumber'] = q_0h5k['lineNumber'], $7ap3['columnNumber'] = q_0h5k['columnNumber'];
}function fbhm(exsnw) {
  return exsnw ? '\x0a@' + (exsnw['systemId'] || '') + '#[line:' + exsnw['lineNumber'] + ',col:' + exsnw['columnNumber'] + ']' : void 0x0;
}function fxezr8n(wnxsd, wsocjd, swdn) {
  return 'string' == typeof wnxsd ? wnxsd['substr'](wsocjd, swdn) : wnxsd['length'] >= wsocjd + swdn || wsocjd ? new java['lang']['String'](wnxsd, wsocjd, swdn) + '' : wnxsd;
}function fnxjds(fbiu, codsjw) {
  fbiu['currentElement'] ? fbiu['currentElement']['appendChild'](codsjw) : fbiu['doc']['appendChild'](codsjw);
}fbvum1i['prototype']['parseFromString'] = function (_5q0kh, y$3ar) {
  var j246oc = this['options'],
      sc6 = new fibuvm(),
      ayr37 = j246oc['domBuilder'] || new fhqk0_(),
      bhfitm = j246oc['errorHandler'],
      r7z8x = j246oc['locator'],
      i0thm = j246oc['xmlns'] || {},
      jnxdws = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return r7z8x && ayr37['setDocumentLocator'](r7z8x), sc6['errorHandler'] = fxsjnwd(bhfitm, ayr37, r7z8x), sc6['domBuilder'] = j246oc['domBuilder'] || ayr37, /\/x?html?$/['test'](y$3ar) && (jnxdws['nbsp'] = '\u00a0', jnxdws['copy'] = '©', i0thm[''] = 'http://www.w3.org/1999/xhtml'), i0thm['xml'] = i0thm['xml'] || 'http://www.w3.org/XML/1998/namespace', _5q0kh ? sc6['parse'](_5q0kh, i0thm, jnxdws) : sc6['errorHandler']['error']('invalid doc source'), ayr37['doc'];
}, fhqk0_['prototype'] = { 'startDocument': function () {
    this['doc'] = new frnxe8z()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (m0tih, o62dcj, wsnjdc, wjdnx) {
    var zx8r7e = this['doc'],
        v9bui1 = zx8r7e['createElementNS'](m0tih, wsnjdc || o62dcj),
        dsxnwj = wjdnx['length'];fnxjds(this, v9bui1), this['currentElement'] = v9bui1, this['locator'] && fscdj6o(this['locator'], v9bui1);for (var ibtm = 0x0; dsxnwj > ibtm; ibtm++) {
      var m0tih = wjdnx['getURI'](ibtm),
          uibvmf = wjdnx['getValue'](ibtm),
          wsnjdc = wjdnx['getQName'](ibtm),
          vub1i9 = zx8r7e['createAttributeNS'](m0tih, wsnjdc);this['locator'] && fscdj6o(wjdnx['getLocator'](ibtm), vub1i9), vub1i9['value'] = vub1i9['nodeValue'] = uibvmf, v9bui1['setAttributeNode'](vub1i9);
    }
  }, 'endElement': function () {
    {
      var hifmb = this['currentElement'];hifmb['tagName'];
    }this['currentElement'] = hifmb['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (m0fih, bitfvm) {
    var vbu9 = this['doc']['createProcessingInstruction'](m0fih, bitfvm);this['locator'] && fscdj6o(this['locator'], vbu9), fnxjds(this, vbu9);
  }, 'ignorableWhitespace': function () {}, 'characters': function (s6ojcd) {
    if (s6ojcd = fxezr8n['apply'](this, arguments)) {
      if (this['cdata']) var htf0mq = this['doc']['createCDATASection'](s6ojcd);else var htf0mq = this['doc']['createTextNode'](s6ojcd);this['currentElement'] ? this['currentElement']['appendChild'](htf0mq) : /^\s*$/['test'](s6ojcd) && this['doc']['appendChild'](htf0mq), this['locator'] && fscdj6o(this['locator'], htf0mq);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xedsnw) {
    (this['locator'] = xedsnw) && (xedsnw['lineNumber'] = 0x0);
  }, 'comment': function (hibtmf) {
    hibtmf = fxezr8n['apply'](this, arguments);var zrexn8 = this['doc']['createComment'](hibtmf);this['locator'] && fscdj6o(this['locator'], zrexn8), fnxjds(this, zrexn8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ktqh5, zxrn8, r8z3$7) {
    var $87zr = this['doc']['implementation'];if ($87zr && $87zr['createDocumentType']) {
      var c6js = $87zr['createDocumentType'](ktqh5, zxrn8, r8z3$7);this['locator'] && fscdj6o(this['locator'], c6js), fnxjds(this, c6js);
    }
  }, 'warning': function (x78ezr) {
    console['warn']('[xmldom warning]\t' + x78ezr, fbhm(this['locator']));
  }, 'error': function (ihtbmf) {
    console['error']('[xmldom error]\t' + ihtbmf, fbhm(this['locator']));
  }, 'fatalError': function (q05thk) {
    throw console['error']('[xmldom fatalError]\t' + q05thk, fbhm(this['locator'])), q05thk;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ezrn) {
  fhqk0_['prototype'][ezrn] = function () {
    return null;
  };
});var fibuvm = require('./fffsax')['XMLReader'],
    frnxe8z = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fbvum1i;