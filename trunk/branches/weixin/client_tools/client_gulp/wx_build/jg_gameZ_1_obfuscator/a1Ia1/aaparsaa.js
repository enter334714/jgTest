var C = wx.$a;
function ac$rvs(c_rqsv) {
  this['options'] = c_rqsv || { 'locator': {} };
}function aczr9s_(xithb, mi54jd, s_r9qc) {
  function fy$kl0(sc_vq) {
    var bhxp2o = xithb[sc_vq];!bhxp2o && lkf0$y && (bhxp2o = 0x2 == xithb['length'] ? function (oxh2b) {
      xithb(sc_vq, oxh2b);
    } : xithb), vql0r$[sc_vq] = bhxp2o && function (px28nb) {
      bhxp2o('[xmldom ' + sc_vq + ']\t' + px28nb + axothp(s_r9qc));
    } || function () {};
  }if (!xithb) {
    if (mi54jd instanceof a$v0qkl) return mi54jd;xithb = mi54jd;
  }var vql0r$ = {},
      lkf0$y = xithb instanceof Function;return s_r9qc = s_r9qc || {}, fy$kl0('warning'), fy$kl0('error'), fy$kl0('fatalError'), vql0r$;
}function a$v0qkl() {
  this['cdata'] = !0x1;
}function aw7u16(f17k6y, l0$kfy) {
  l0$kfy['lineNumber'] = f17k6y['lineNumber'], l0$kfy['columnNumber'] = f17k6y['columnNumber'];
}function axothp(zjm_94) {
  return zjm_94 ? '\x0a@' + (zjm_94['systemId'] || '') + '#[line:' + zjm_94['lineNumber'] + ',col:' + zjm_94['columnNumber'] + ']' : void 0x0;
}function a$0lfy(_c9jm, z5djm4, lk0qv$) {
  return 'string' == typeof _c9jm ? _c9jm['substr'](z5djm4, lk0qv$) : _c9jm['length'] >= z5djm4 + lk0qv$ || z5djm4 ? new java['lang']['String'](_c9jm, z5djm4, lk0qv$) + '' : _c9jm;
}function aq$0k(ti54h, c_sz) {
  ti54h['currentElement'] ? ti54h['currentElement']['appendChild'](c_sz) : ti54h['doc']['appendChild'](c_sz);
}ac$rvs['prototype']['parseFromString'] = function (m_cj9, ne3g28) {
  var mdj45i = this['options'],
      z5jm4 = new a$qvcsr(),
      y1w7u6 = mdj45i['domBuilder'] || new a$v0qkl(),
      itoh5d = mdj45i['errorHandler'],
      b2ep = mdj45i['locator'],
      dio5t = mdj45i['xmlns'] || {},
      biotxh = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return b2ep && y1w7u6['setDocumentLocator'](b2ep), z5jm4['errorHandler'] = aczr9s_(itoh5d, y1w7u6, b2ep), z5jm4['domBuilder'] = mdj45i['domBuilder'] || y1w7u6, /\/x?html?$/['test'](ne3g28) && (biotxh['nbsp'] = '\u00a0', biotxh['copy'] = '©', dio5t[''] = 'http://www.w3.org/1999/xhtml'), dio5t['xml'] = dio5t['xml'] || 'http://www.w3.org/XML/1998/namespace', m_cj9 ? z5jm4['parse'](m_cj9, dio5t, biotxh) : z5jm4['errorHandler']['error']('invalid doc source'), y1w7u6['doc'];
}, a$v0qkl['prototype'] = { 'startDocument': function () {
    this['doc'] = new aflv0k()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (l6k0f, idt45h, t5idj4, k0lv$f) {
    var rqsvc = this['doc'],
        pxhobt = rqsvc['createElementNS'](l6k0f, t5idj4 || idt45h),
        zcsr9_ = k0lv$f['length'];aq$0k(this, pxhobt), this['currentElement'] = pxhobt, this['locator'] && aw7u16(this['locator'], pxhobt);for (var c_zsm = 0x0; zcsr9_ > c_zsm; c_zsm++) {
      var l6k0f = k0lv$f['getURI'](c_zsm),
          j45z = k0lv$f['getValue'](c_zsm),
          t5idj4 = k0lv$f['getQName'](c_zsm),
          mj_9zc = rqsvc['createAttributeNS'](l6k0f, t5idj4);this['locator'] && aw7u16(k0lv$f['getLocator'](c_zsm), mj_9zc), mj_9zc['value'] = mj_9zc['nodeValue'] = j45z, pxhobt['setAttributeNode'](mj_9zc);
    }
  }, 'endElement': function () {
    {
      var rvsc_q = this['currentElement'];rvsc_q['tagName'];
    }this['currentElement'] = rvsc_q['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (_vsqcr, $ykfl0) {
    var ylfk$ = this['doc']['createProcessingInstruction'](_vsqcr, $ykfl0);this['locator'] && aw7u16(this['locator'], ylfk$), aq$0k(this, ylfk$);
  }, 'ignorableWhitespace': function () {}, 'characters': function (y6u1) {
    if (y6u1 = a$0lfy['apply'](this, arguments)) {
      if (this['cdata']) var px2b8n = this['doc']['createCDATASection'](y6u1);else var px2b8n = this['doc']['createTextNode'](y6u1);this['currentElement'] ? this['currentElement']['appendChild'](px2b8n) : /^\s*$/['test'](y6u1) && this['doc']['appendChild'](px2b8n), this['locator'] && aw7u16(this['locator'], px2b8n);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nbe8p2) {
    (this['locator'] = nbe8p2) && (nbe8p2['lineNumber'] = 0x0);
  }, 'comment': function (ji45dm) {
    ji45dm = a$0lfy['apply'](this, arguments);var s9q_rc = this['doc']['createComment'](ji45dm);this['locator'] && aw7u16(this['locator'], s9q_rc), aq$0k(this, s9q_rc);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (yk1f7, b28, $0r) {
    var m_cz = this['doc']['implementation'];if (m_cz && m_cz['createDocumentType']) {
      var zm4j5 = m_cz['createDocumentType'](yk1f7, b28, $0r);this['locator'] && aw7u16(this['locator'], zm4j5), aq$0k(this, zm4j5);
    }
  }, 'warning': function ($kyl0) {
    console['warn']('[xmldom warning]\t' + $kyl0, axothp(this['locator']));
  }, 'error': function (w7uy) {
    console['error']('[xmldom error]\t' + w7uy, axothp(this['locator']));
  }, 'fatalError': function (y16f) {
    throw console['error']('[xmldom fatalError]\t' + y16f, axothp(this['locator'])), y16f;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (vr0$ql) {
  a$v0qkl['prototype'][vr0$ql] = function () {
    return null;
  };
});var a$qvcsr = require('./aacaa')['XMLReader'],
    aflv0k = exports['DOMImplementation'] = require('./aaDOaa')['DOMImplementation'];exports['XMLSerializer'] = require('./aaDOaa')['XMLSerializer'], exports['DOMParser'] = ac$rvs;