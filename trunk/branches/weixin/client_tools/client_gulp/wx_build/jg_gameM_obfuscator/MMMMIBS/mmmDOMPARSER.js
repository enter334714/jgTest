var Y = wx.$M;
function M_d5b0l(him5jn) {
  this['options'] = him5jn || { 'locator': {} };
}function M_aec28g(oac8eg, ago8ce, w$fbvd) {
  function uyxk91(i5nmh) {
    var rvf9b = oac8eg[i5nmh];!rvf9b && o8c6a && (rvf9b = 0x2 == oac8eg['length'] ? function (il5hn) {
      oac8eg(i5nmh, il5hn);
    } : oac8eg), j76s_[i5nmh] = rvf9b && function (e8act) {
      rvf9b('[xmldom ' + i5nmh + ']\t' + e8act + M_jms47_(w$fbvd));
    } || function () {};
  }if (!oac8eg) {
    if (ago8ce instanceof M_i7njmh) return ago8ce;oac8eg = ago8ce;
  }var j76s_ = {},
      o8c6a = oac8eg instanceof Function;return w$fbvd = w$fbvd || {}, uyxk91('warning'), uyxk91('error'), uyxk91('fatalError'), j76s_;
}function M_i7njmh() {
  this['cdata'] = !0x1;
}function M_cos6a(ec82ga, f$db) {
  f$db['lineNumber'] = ec82ga['lineNumber'], f$db['columnNumber'] = ec82ga['columnNumber'];
}function M_jms47_(rk19xv) {
  return rk19xv ? '\x0a@' + (rk19xv['systemId'] || '') + '#[line:' + rk19xv['lineNumber'] + ',col:' + rk19xv['columnNumber'] + ']' : void 0x0;
}function M_t82zep(li0$5d, o4_7s6, vbdf$) {
  return 'string' == typeof li0$5d ? li0$5d['substr'](o4_7s6, vbdf$) : li0$5d['length'] >= o4_7s6 + vbdf$ || o4_7s6 ? new java['lang']['String'](li0$5d, o4_7s6, vbdf$) + '' : li0$5d;
}function M_vwbf$(db0lw$, i05nl) {
  db0lw$['currentElement'] ? db0lw$['currentElement']['appendChild'](i05nl) : db0lw$['doc']['appendChild'](i05nl);
}M_d5b0l['prototype']['parseFromString'] = function (t28p, gs6oca) {
  var ni5hl = this['options'],
      q1ku = new M_c8ogea(),
      a4s6 = ni5hl['domBuilder'] || new M_i7njmh(),
      mn_hj = ni5hl['errorHandler'],
      hj5in = ni5hl['locator'],
      frkv91 = ni5hl['xmlns'] || {},
      t8zce = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return hj5in && a4s6['setDocumentLocator'](hj5in), q1ku['errorHandler'] = M_aec28g(mn_hj, a4s6, hj5in), q1ku['domBuilder'] = ni5hl['domBuilder'] || a4s6, /\/x?html?$/['test'](gs6oca) && (t8zce['nbsp'] = '\u00a0', t8zce['copy'] = '©', frkv91[''] = 'http://www.w3.org/1999/xhtml'), frkv91['xml'] = frkv91['xml'] || 'http://www.w3.org/XML/1998/namespace', t28p ? q1ku['parse'](t28p, frkv91, t8zce) : q1ku['errorHandler']['error']('invalid doc source'), a4s6['doc'];
}, M_i7njmh['prototype'] = { 'startDocument': function () {
    this['doc'] = new M_b0fd$w()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (m_h74j, bdvw$f, z2ce8, xq1kuy) {
    var o8a6 = this['doc'],
        v9r1x = o8a6['createElementNS'](m_h74j, z2ce8 || bdvw$f),
        k1yux9 = xq1kuy['length'];M_vwbf$(this, v9r1x), this['currentElement'] = v9r1x, this['locator'] && M_cos6a(this['locator'], v9r1x);for (var ij5h = 0x0; k1yux9 > ij5h; ij5h++) {
      var m_h74j = xq1kuy['getURI'](ij5h),
          nih05 = xq1kuy['getValue'](ij5h),
          z2ce8 = xq1kuy['getQName'](ij5h),
          so6ac = o8a6['createAttributeNS'](m_h74j, z2ce8);this['locator'] && M_cos6a(xq1kuy['getLocator'](ij5h), so6ac), so6ac['value'] = so6ac['nodeValue'] = nih05, v9r1x['setAttributeNode'](so6ac);
    }
  }, 'endElement': function () {
    {
      var d5l$0i = this['currentElement'];d5l$0i['tagName'];
    }this['currentElement'] = d5l$0i['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ij5mh, wvfb$) {
    var xu3yk = this['doc']['createProcessingInstruction'](ij5mh, wvfb$);this['locator'] && M_cos6a(this['locator'], xu3yk), M_vwbf$(this, xu3yk);
  }, 'ignorableWhitespace': function () {}, 'characters': function (fdvrb) {
    if (fdvrb = M_t82zep['apply'](this, arguments)) {
      if (this['cdata']) var c8aoge = this['doc']['createCDATASection'](fdvrb);else var c8aoge = this['doc']['createTextNode'](fdvrb);this['currentElement'] ? this['currentElement']['appendChild'](c8aoge) : /^\s*$/['test'](fdvrb) && this['doc']['appendChild'](c8aoge), this['locator'] && M_cos6a(this['locator'], c8aoge);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (u19x) {
    (this['locator'] = u19x) && (u19x['lineNumber'] = 0x0);
  }, 'comment': function (js_47) {
    js_47 = M_t82zep['apply'](this, arguments);var h5jnmi = this['doc']['createComment'](js_47);this['locator'] && M_cos6a(this['locator'], h5jnmi), M_vwbf$(this, h5jnmi);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (f91vr, $bd, e2cg8) {
    var l50nh = this['doc']['implementation'];if (l50nh && l50nh['createDocumentType']) {
      var c8eg2 = l50nh['createDocumentType'](f91vr, $bd, e2cg8);this['locator'] && M_cos6a(this['locator'], c8eg2), M_vwbf$(this, c8eg2);
    }
  }, 'warning': function (m47_h) {
    console['warn']('[xmldom warning]\t' + m47_h, M_jms47_(this['locator']));
  }, 'error': function (bdw0l$) {
    console['error']('[xmldom error]\t' + bdw0l$, M_jms47_(this['locator']));
  }, 'fatalError': function (u9yx1) {
    throw console['error']('[xmldom fatalError]\t' + u9yx1, M_jms47_(this['locator'])), u9yx1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (fvbdrw) {
  M_i7njmh['prototype'][fvbdrw] = function () {
    return null;
  };
});var M_c8ogea = require('./mmmSAX')['XMLReader'],
    M_b0fd$w = exports['DOMImplementation'] = require('./mmmDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./mmmDOM')['XMLSerializer'], exports['DOMParser'] = M_d5b0l;