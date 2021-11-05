var i = wx.$R;
function r_my8rk(cfdn) {
  this['options'] = cfdn || { 'locator': {} };
}function r_lsvt3z(xjzi2o, ndqfc, tszl32) {
  function cfn5pd(u1ha_b) {
    var c5hfn = xjzi2o[u1ha_b];!c5hfn && epqr && (c5hfn = 0x2 == xjzi2o['length'] ? function (dfnc5) {
      xjzi2o(u1ha_b, dfnc5);
    } : xjzi2o), pf5dc[u1ha_b] = c5hfn && function (grwk) {
      c5hfn('[xmldom ' + u1ha_b + ']\t' + grwk + r_t3zsv(tszl32));
    } || function () {};
  }if (!xjzi2o) {
    if (ndqfc instanceof r_rk7m8w) return ndqfc;xjzi2o = ndqfc;
  }var pf5dc = {},
      epqr = xjzi2o instanceof Function;return tszl32 = tszl32 || {}, cfn5pd('warning'), cfn5pd('error'), cfn5pd('fatalError'), pf5dc;
}function r_rk7m8w() {
  this['cdata'] = !0x1;
}function r_m7eqg(wiky, jtzxs) {
  jtzxs['lineNumber'] = wiky['lineNumber'], jtzxs['columnNumber'] = wiky['columnNumber'];
}function r_t3zsv(lsv3zt) {
  return lsv3zt ? '\x0a@' + (lsv3zt['systemId'] || '') + '#[line:' + lsv3zt['lineNumber'] + ',col:' + lsv3zt['columnNumber'] + ']' : void 0x0;
}function r_xy2oij(tzx23s, dge7p, cdpfn) {
  return 'string' == typeof tzx23s ? tzx23s['substr'](dge7p, cdpfn) : tzx23s['length'] >= dge7p + cdpfn || dge7p ? new java['lang']['String'](tzx23s, dge7p, cdpfn) + '' : tzx23s;
}function r_ub_h1(km87, re7qgm) {
  km87['currentElement'] ? km87['currentElement']['appendChild'](re7qgm) : km87['doc']['appendChild'](re7qgm);
}r_my8rk['prototype']['parseFromString'] = function (egqrm7, wiky8o) {
  var fqepgd = this['options'],
      rw8 = new r_szj2xi(),
      h6c5u = fqepgd['domBuilder'] || new r_rk7m8w(),
      _h1ua6 = fqepgd['errorHandler'],
      cfdq = fqepgd['locator'],
      t3xs2 = fqepgd['xmlns'] || {},
      b$1ua_ = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return cfdq && h6c5u['setDocumentLocator'](cfdq), rw8['errorHandler'] = r_lsvt3z(_h1ua6, h6c5u, cfdq), rw8['domBuilder'] = fqepgd['domBuilder'] || h6c5u, /\/x?html?$/['test'](wiky8o) && (b$1ua_['nbsp'] = '\u00a0', b$1ua_['copy'] = '©', t3xs2[''] = 'http://www.w3.org/1999/xhtml'), t3xs2['xml'] = t3xs2['xml'] || 'http://www.w3.org/XML/1998/namespace', egqrm7 ? rw8['parse'](egqrm7, t3xs2, b$1ua_) : rw8['errorHandler']['error']('invalid doc source'), h6c5u['doc'];
}, r_rk7m8w['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_cfd5n6()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (pndcqf, ymrw, u51, ahu1b) {
    var b$au91 = this['doc'],
        krg7w = b$au91['createElementNS'](pndcqf, u51 || ymrw),
        zis2j = ahu1b['length'];r_ub_h1(this, krg7w), this['currentElement'] = krg7w, this['locator'] && r_m7eqg(this['locator'], krg7w);for (var mwo8y = 0x0; zis2j > mwo8y; mwo8y++) {
      var pndcqf = ahu1b['getURI'](mwo8y),
          fdc6n5 = ahu1b['getValue'](mwo8y),
          u51 = ahu1b['getQName'](mwo8y),
          kwmr78 = b$au91['createAttributeNS'](pndcqf, u51);this['locator'] && r_m7eqg(ahu1b['getLocator'](mwo8y), kwmr78), kwmr78['value'] = kwmr78['nodeValue'] = fdc6n5, krg7w['setAttributeNode'](kwmr78);
    }
  }, 'endElement': function () {
    {
      var qemg7r = this['currentElement'];qemg7r['tagName'];
    }this['currentElement'] = qemg7r['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_6hcu, c5h6f) {
    var rmkw8y = this['doc']['createProcessingInstruction'](_6hcu, c5h6f);this['locator'] && r_m7eqg(this['locator'], rmkw8y), r_ub_h1(this, rmkw8y);
  }, 'ignorableWhitespace': function () {}, 'characters': function (rmwk78) {
    if (rmwk78 = r_xy2oij['apply'](this, arguments)) {
      if (this['cdata']) var h_a61u = this['doc']['createCDATASection'](rmwk78);else var h_a61u = this['doc']['createTextNode'](rmwk78);this['currentElement'] ? this['currentElement']['appendChild'](h_a61u) : /^\s*$/['test'](rmwk78) && this['doc']['appendChild'](h_a61u), this['locator'] && r_m7eqg(this['locator'], h_a61u);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (xozj2i) {
    (this['locator'] = xozj2i) && (xozj2i['lineNumber'] = 0x0);
  }, 'comment': function (uha_61) {
    uha_61 = r_xy2oij['apply'](this, arguments);var iwko8y = this['doc']['createComment'](uha_61);this['locator'] && r_m7eqg(this['locator'], iwko8y), r_ub_h1(this, iwko8y);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gme7r, rmqeg, xt2j) {
    var u1ahb = this['doc']['implementation'];if (u1ahb && u1ahb['createDocumentType']) {
      var grwe7m = u1ahb['createDocumentType'](gme7r, rmqeg, xt2j);this['locator'] && r_m7eqg(this['locator'], grwe7m), r_ub_h1(this, grwe7m);
    }
  }, 'warning': function (gfdpq) {
    console['warn']('[xmldom warning]\t' + gfdpq, r_t3zsv(this['locator']));
  }, 'error': function (xjo2iz) {
    console['error']('[xmldom error]\t' + xjo2iz, r_t3zsv(this['locator']));
  }, 'fatalError': function (a9u$b1) {
    throw console['error']('[xmldom fatalError]\t' + a9u$b1, r_t3zsv(this['locator'])), a9u$b1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (st2) {
  r_rk7m8w['prototype'][st2] = function () {
    return null;
  };
});var r_szj2xi = require('./rS12r')['XMLReader'],
    r_cfd5n6 = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r_my8rk;