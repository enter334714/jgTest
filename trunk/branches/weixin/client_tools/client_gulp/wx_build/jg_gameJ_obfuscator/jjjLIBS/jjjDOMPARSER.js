var S = wx.$J;
function j1_muj4a(w9e_y) {
  this['options'] = w9e_y || { 'locator': {} };
}function j1_udmaj(q0o8, z3b6vk, _emw4) {
  function c1go(q0lnf1) {
    var mafju = q0o8[q0lnf1];!mafju && majd4u && (mafju = 0x2 == q0o8['length'] ? function (vk52b) {
      q0o8(q0lnf1, vk52b);
    } : q0o8), fldanu[q0lnf1] = mafju ? function (uladj) {
      mafju('[xmldom ' + q0lnf1 + ']\t' + uladj + j1_dm(_emw4));
    } : function () {};
  }if (!q0o8) {
    if (z3b6vk instanceof j1_al0uf) return z3b6vk;q0o8 = z3b6vk;
  }var fldanu = {},
      majd4u = q0o8 instanceof Function;return _emw4 = _emw4 || {}, c1go('warning'), c1go('error'), c1go('fatalError'), fldanu;
}function j1_al0uf() {
  this['cdata'] = !0x1;
}function j1_co$g(tv, bi3k) {
  bi3k['lineNumber'] = tv['lineNumber'], bi3k['columnNumber'] = tv['columnNumber'];
}function j1_dm($2tgco) {
  return $2tgco ? '\x0a@' + ($2tgco['systemId'] || '') + '#[line:' + $2tgco['lineNumber'] + ',col:' + $2tgco['columnNumber'] + ']' : void 0x0;
}function j1_p36izh(aum4dj, tc5vk, co2gt) {
  return 'string' == typeof aum4dj ? aum4dj['substr'](tc5vk, co2gt) : aum4dj['length'] >= tc5vk + co2gt || tc5vk ? new java['lang']['String'](aum4dj, tc5vk, co2gt) + '' : aum4dj;
}function j1_ju4md(oc$g82, jam) {
  (oc$g82['currentElement'] || oc$g82['doc'])['appendChild'](jam);
}j1_muj4a['prototype']['parseFromString'] = function (l0qnf, jmufa) {
  var ldfauj = this['options'],
      we4y_m = new j1_cog2$8(),
      _9esw7 = ldfauj['domBuilder'] || new j1_al0uf(),
      cg2o$ = ldfauj['errorHandler'],
      z6ip3h = ldfauj['locator'],
      yjd4um = ldfauj['xmlns'] || {},
      yj4ud = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return z6ip3h && _9esw7['setDocumentLocator'](z6ip3h), we4y_m['errorHandler'] = j1_udmaj(cg2o$, _9esw7, z6ip3h), we4y_m['domBuilder'] = ldfauj['domBuilder'] || _9esw7, /\/x?html?$/['test'](jmufa) && (yj4ud['nbsp'] = '\u00a0', yj4ud['copy'] = '©', yjd4um[''] = 'http://www.w3.org/1999/xhtml'), yjd4um['xml'] = yjd4um['xml'] || 'http://www.w3.org/XML/1998/namespace', l0qnf ? we4y_m['parse'](l0qnf, yjd4um, yj4ud) : we4y_m['errorHandler']['error']('invalid doc source'), _9esw7['doc'];
}, j1_al0uf['prototype'] = { 'startDocument': function () {
    this['doc'] = new j1_dfjula()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (bkv56, lnad, f0lu, g18nq) {
    var m4jydw = this['doc'],
        uafnl = m4jydw['createElementNS'](bkv56, f0lu || lnad),
        t5$v2 = g18nq['length'];j1_ju4md(this, uafnl), this['currentElement'] = uafnl, this['locator'] && j1_co$g(this['locator'], uafnl);for (var nufald = 0x0; nufald < t5$v2; nufald++) {
      var bkv56 = g18nq['getURI'](nufald),
          qaln0f = g18nq['getValue'](nufald),
          f0lu = g18nq['getQName'](nufald),
          ri3x = m4jydw['createAttributeNS'](bkv56, f0lu);this['locator'] && j1_co$g(g18nq['getLocator'](nufald), ri3x), ri3x['value'] = ri3x['nodeValue'] = qaln0f, uafnl['setAttributeNode'](ri3x);
    }
  }, 'endElement': function () {
    var vt5c$2 = this['currentElement'];vt5c$2['tagName'], this['currentElement'] = vt5c$2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (tzv5, aldfnu) {
    aldfnu = this['doc']['createProcessingInstruction'](tzv5, aldfnu), (this['locator'] && j1_co$g(this['locator'], aldfnu), j1_ju4md(this, aldfnu));
  }, 'ignorableWhitespace': function () {}, 'characters': function (nqal0f) {
    var qn18g0;(nqal0f = j1_p36izh['apply'](this, arguments)) && (qn18g0 = this['cdata'] ? this['doc']['createCDATASection'](nqal0f) : this['doc']['createTextNode'](nqal0f), this['currentElement'] ? this['currentElement']['appendChild'](qn18g0) : /^\s*$/['test'](nqal0f) && this['doc']['appendChild'](qn18g0), this['locator'] && j1_co$g(this['locator'], qn18g0));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (afnql) {
    (this['locator'] = afnql) && (afnql['lineNumber'] = 0x0);
  }, 'comment': function (cg1$o) {
    cg1$o = j1_p36izh['apply'](this, arguments);var emyw4j = this['doc']['createComment'](cg1$o);this['locator'] && j1_co$g(this['locator'], emyw4j), j1_ju4md(this, emyw4j);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (m4daj, jd4ymu, ln80) {
    var ys4_w = this['doc']['implementation'];ys4_w && ys4_w['createDocumentType'] && (ln80 = ys4_w['createDocumentType'](m4daj, jd4ymu, ln80), this['locator'] && j1_co$g(this['locator'], ln80), j1_ju4md(this, ln80));
  }, 'warning': function (zhi6p) {
    console['warn']('[xmldom warning]\t' + zhi6p, j1_dm(this['locator']));
  }, 'error': function (g8o2$) {
    console['error']('[xmldom error]\t' + g8o2$, j1_dm(this['locator']));
  }, 'fatalError': function (lnq10) {
    throw console['error']('[xmldom fatalError]\t' + lnq10, j1_dm(this['locator'])), lnq10;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ibkz36) {
  j1_al0uf['prototype'][ibkz36] = function () {
    return null;
  };
});var j1_cog2$8 = require('./jjjSAX')['XMLReader'],
    j1_dfjula = exports['DOMImplementation'] = require('./jjjDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./jjjDOM')['XMLSerializer'], exports['DOMParser'] = j1_muj4a;