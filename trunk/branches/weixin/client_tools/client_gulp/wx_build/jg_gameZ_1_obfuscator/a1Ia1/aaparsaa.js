var C = wx.$a;
function ao2xhp(mzdj9) {
  this['options'] = mzdj9 || { 'locator': {} };
}function av0l$kf(vkl0, uf617y, src_q) {
  function _m9zj(sq_r9c) {
    var lrqv0$ = vkl0[sq_r9c];!lrqv0$ && vfk$0 && (lrqv0$ = 0x2 == vkl0['length'] ? function (txoh) {
      vkl0(sq_r9c, txoh);
    } : vkl0), g38e[sq_r9c] = lrqv0$ && function (z9rsc) {
      lrqv0$('[xmldom ' + sq_r9c + ']\t' + z9rsc + ayk176(src_q));
    } || function () {};
  }if (!vkl0) {
    if (uf617y instanceof ag8ne) return uf617y;vkl0 = uf617y;
  }var g38e = {},
      vfk$0 = vkl0 instanceof Function;return src_q = src_q || {}, _m9zj('warning'), _m9zj('error'), _m9zj('fatalError'), g38e;
}function ag8ne() {
  this['cdata'] = !0x1;
}function ak6y0f7(hiot5, cz_9r) {
  cz_9r['lineNumber'] = hiot5['lineNumber'], cz_9r['columnNumber'] = hiot5['columnNumber'];
}function ayk176(ohit5d) {
  return ohit5d ? '\x0a@' + (ohit5d['systemId'] || '') + '#[line:' + ohit5d['lineNumber'] + ',col:' + ohit5d['columnNumber'] + ']' : void 0x0;
}function akly06(_srzc9, cr_q9s, j_9m4) {
  return 'string' == typeof _srzc9 ? _srzc9['substr'](cr_q9s, j_9m4) : _srzc9['length'] >= cr_q9s + j_9m4 || cr_q9s ? new java['lang']['String'](_srzc9, cr_q9s, j_9m4) + '' : _srzc9;
}function abtphox(cq_sr, czmj_9) {
  cq_sr['currentElement'] ? cq_sr['currentElement']['appendChild'](czmj_9) : cq_sr['doc']['appendChild'](czmj_9);
}ao2xhp['prototype']['parseFromString'] = function (kfl0$, nxp) {
  var sc$vr = this['options'],
      tdi4 = new aqrl$(),
      dtji54 = sc$vr['domBuilder'] || new ag8ne(),
      x82 = sc$vr['errorHandler'],
      e23np8 = sc$vr['locator'],
      cr9_sz = sc$vr['xmlns'] || {},
      k$l0v = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return e23np8 && dtji54['setDocumentLocator'](e23np8), tdi4['errorHandler'] = av0l$kf(x82, dtji54, e23np8), tdi4['domBuilder'] = sc$vr['domBuilder'] || dtji54, /\/x?html?$/['test'](nxp) && (k$l0v['nbsp'] = '\u00a0', k$l0v['copy'] = '©', cr9_sz[''] = 'http://www.w3.org/1999/xhtml'), cr9_sz['xml'] = cr9_sz['xml'] || 'http://www.w3.org/XML/1998/namespace', kfl0$ ? tdi4['parse'](kfl0$, cr9_sz, k$l0v) : tdi4['errorHandler']['error']('invalid doc source'), dtji54['doc'];
}, ag8ne['prototype'] = { 'startDocument': function () {
    this['doc'] = new ai5jt4()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (jd45t, zd45mj, j4m_z9, npe238) {
    var bnp82 = this['doc'],
        n2xb8p = bnp82['createElementNS'](jd45t, j4m_z9 || zd45mj),
        rlsqv$ = npe238['length'];abtphox(this, n2xb8p), this['currentElement'] = n2xb8p, this['locator'] && ak6y0f7(this['locator'], n2xb8p);for (var d4ij5t = 0x0; rlsqv$ > d4ij5t; d4ij5t++) {
      var jd45t = npe238['getURI'](d4ij5t),
          p8xbo2 = npe238['getValue'](d4ij5t),
          j4m_z9 = npe238['getQName'](d4ij5t),
          yk7f = bnp82['createAttributeNS'](jd45t, j4m_z9);this['locator'] && ak6y0f7(npe238['getLocator'](d4ij5t), yk7f), yk7f['value'] = yk7f['nodeValue'] = p8xbo2, n2xb8p['setAttributeNode'](yk7f);
    }
  }, 'endElement': function () {
    {
      var fv$kl = this['currentElement'];fv$kl['tagName'];
    }this['currentElement'] = fv$kl['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (qs$lrv, c9_qr) {
    var e23np = this['doc']['createProcessingInstruction'](qs$lrv, c9_qr);this['locator'] && ak6y0f7(this['locator'], e23np), abtphox(this, e23np);
  }, 'ignorableWhitespace': function () {}, 'characters': function (mj49d) {
    if (mj49d = akly06['apply'](this, arguments)) {
      if (this['cdata']) var rcs_v = this['doc']['createCDATASection'](mj49d);else var rcs_v = this['doc']['createTextNode'](mj49d);this['currentElement'] ? this['currentElement']['appendChild'](rcs_v) : /^\s*$/['test'](mj49d) && this['doc']['appendChild'](rcs_v), this['locator'] && ak6y0f7(this['locator'], rcs_v);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (uy671w) {
    (this['locator'] = uy671w) && (uy671w['lineNumber'] = 0x0);
  }, 'comment': function (cr9q_s) {
    cr9q_s = akly06['apply'](this, arguments);var i5djm = this['doc']['createComment'](cr9q_s);this['locator'] && ak6y0f7(this['locator'], i5djm), abtphox(this, i5djm);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (u6fy, tdh5oi, fkv$l) {
    var kqvl0$ = this['doc']['implementation'];if (kqvl0$ && kqvl0$['createDocumentType']) {
      var j9mz_4 = kqvl0$['createDocumentType'](u6fy, tdh5oi, fkv$l);this['locator'] && ak6y0f7(this['locator'], j9mz_4), abtphox(this, j9mz_4);
    }
  }, 'warning': function (otx) {
    console['warn']('[xmldom warning]\t' + otx, ayk176(this['locator']));
  }, 'error': function (td45h) {
    console['error']('[xmldom error]\t' + td45h, ayk176(this['locator']));
  }, 'fatalError': function (_c9rsq) {
    throw console['error']('[xmldom fatalError]\t' + _c9rsq, ayk176(this['locator'])), _c9rsq;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qr9s_c) {
  ag8ne['prototype'][qr9s_c] = function () {
    return null;
  };
});var aqrl$ = require('./aacaa')['XMLReader'],
    ai5jt4 = exports['DOMImplementation'] = require('./aaDOaa')['DOMImplementation'];exports['XMLSerializer'] = require('./aaDOaa')['XMLSerializer'], exports['DOMParser'] = ao2xhp;