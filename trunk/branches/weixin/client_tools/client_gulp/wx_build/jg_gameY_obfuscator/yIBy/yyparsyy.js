var a = wx.$y;
function ysnkc2(yr036v) {
  this['options'] = yr036v || { 'locator': {} };
}function yign$k(cs78l_, u51mt, _f87sl) {
  function t1u4w(dmt1) {
    var h1t4wd = cs78l_[dmt1];!h1t4wd && of87j && (h1t4wd = 0x2 == cs78l_['length'] ? function (z0vy3r) {
      cs78l_(dmt1, z0vy3r);
    } : cs78l_), i$2gqn[dmt1] = h1t4wd && function (ck2n9) {
      h1t4wd('[xmldom ' + dmt1 + ']\t' + ck2n9 + yayv063(_f87sl));
    } || function () {};
  }if (!cs78l_) {
    if (u51mt instanceof yva356m) return u51mt;cs78l_ = u51mt;
  }var i$2gqn = {},
      of87j = cs78l_ instanceof Function;return _f87sl = _f87sl || {}, t1u4w('warning'), t1u4w('error'), t1u4w('fatalError'), i$2gqn;
}function yva356m() {
  this['cdata'] = !0x1;
}function ykns92c(ud1m5a, l9csk) {
  l9csk['lineNumber'] = ud1m5a['lineNumber'], l9csk['columnNumber'] = ud1m5a['columnNumber'];
}function yayv063(qin$g) {
  return qin$g ? '\x0a@' + (qin$g['systemId'] || '') + '#[line:' + qin$g['lineNumber'] + ',col:' + qin$g['columnNumber'] + ']' : void 0x0;
}function yz0v3ry(u1a5d, kls98c, f_4) {
  return 'string' == typeof u1a5d ? u1a5d['substr'](kls98c, f_4) : u1a5d['length'] >= kls98c + f_4 || kls98c ? new java['lang']['String'](u1a5d, kls98c, f_4) + '' : u1a5d;
}function yslf8_7(y6v35, _of78j) {
  y6v35['currentElement'] ? y6v35['currentElement']['appendChild'](_of78j) : y6v35['doc']['appendChild'](_of78j);
}ysnkc2['prototype']['parseFromString'] = function (u6m15, vy60a3) {
  var $kgni2 = this['options'],
      t4dh1w = new yf8oj_7(),
      y03vzr = $kgni2['domBuilder'] || new yva356m(),
      av306y = $kgni2['errorHandler'],
      r0yv6 = $kgni2['locator'],
      nk2 = $kgni2['xmlns'] || {},
      r3vz0 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return r0yv6 && y03vzr['setDocumentLocator'](r0yv6), t4dh1w['errorHandler'] = yign$k(av306y, y03vzr, r0yv6), t4dh1w['domBuilder'] = $kgni2['domBuilder'] || y03vzr, /\/x?html?$/['test'](vy60a3) && (r3vz0['nbsp'] = '\u00a0', r3vz0['copy'] = '©', nk2[''] = 'http://www.w3.org/1999/xhtml'), nk2['xml'] = nk2['xml'] || 'http://www.w3.org/XML/1998/namespace', u6m15 ? t4dh1w['parse'](u6m15, nk2, r3vz0) : t4dh1w['errorHandler']['error']('invalid doc source'), y03vzr['doc'];
}, yva356m['prototype'] = { 'startDocument': function () {
    this['doc'] = new ye0xzr()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (y0zvr, of_l87, kg$2n, olf8_) {
    var knc = this['doc'],
        d1htw = knc['createElementNS'](y0zvr, kg$2n || of_l87),
        mwud1t = olf8_['length'];yslf8_7(this, d1htw), this['currentElement'] = d1htw, this['locator'] && ykns92c(this['locator'], d1htw);for (var f_oj8 = 0x0; mwud1t > f_oj8; f_oj8++) {
      var y0zvr = olf8_['getURI'](f_oj8),
          t4jdwh = olf8_['getValue'](f_oj8),
          kg$2n = olf8_['getQName'](f_oj8),
          m5d1au = knc['createAttributeNS'](y0zvr, kg$2n);this['locator'] && ykns92c(olf8_['getLocator'](f_oj8), m5d1au), m5d1au['value'] = m5d1au['nodeValue'] = t4jdwh, d1htw['setAttributeNode'](m5d1au);
    }
  }, 'endElement': function () {
    {
      var thw4o = this['currentElement'];thw4o['tagName'];
    }this['currentElement'] = thw4o['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c98ls, _jh4o) {
    var ng$2iq = this['doc']['createProcessingInstruction'](c98ls, _jh4o);this['locator'] && ykns92c(this['locator'], ng$2iq), yslf8_7(this, ng$2iq);
  }, 'ignorableWhitespace': function () {}, 'characters': function (md51u) {
    if (md51u = yz0v3ry['apply'](this, arguments)) {
      if (this['cdata']) var ua16m5 = this['doc']['createCDATASection'](md51u);else var ua16m5 = this['doc']['createTextNode'](md51u);this['currentElement'] ? this['currentElement']['appendChild'](ua16m5) : /^\s*$/['test'](md51u) && this['doc']['appendChild'](ua16m5), this['locator'] && ykns92c(this['locator'], ua16m5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (a35u) {
    (this['locator'] = a35u) && (a35u['lineNumber'] = 0x0);
  }, 'comment': function (gk2$9n) {
    gk2$9n = yz0v3ry['apply'](this, arguments);var ua3m5 = this['doc']['createComment'](gk2$9n);this['locator'] && ykns92c(this['locator'], ua3m5), yslf8_7(this, ua3m5);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (l97cs8, mtwu, thdj4) {
    var f8_o7l = this['doc']['implementation'];if (f8_o7l && f8_o7l['createDocumentType']) {
      var $nipgq = f8_o7l['createDocumentType'](l97cs8, mtwu, thdj4);this['locator'] && ykns92c(this['locator'], $nipgq), yslf8_7(this, $nipgq);
    }
  }, 'warning': function (j_foh7) {
    console['warn']('[xmldom warning]\t' + j_foh7, yayv063(this['locator']));
  }, 'error': function (w4tdh) {
    console['error']('[xmldom error]\t' + w4tdh, yayv063(this['locator']));
  }, 'fatalError': function (vy0rzx) {
    throw console['error']('[xmldom fatalError]\t' + vy0rzx, yayv063(this['locator'])), vy0rzx;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ni2$k) {
  yva356m['prototype'][ni2$k] = function () {
    return null;
  };
});var yf8oj_7 = require('./yycyy')['XMLReader'],
    ye0xzr = exports['DOMImplementation'] = require('./yyDOyy')['DOMImplementation'];exports['XMLSerializer'] = require('./yyDOyy')['XMLSerializer'], exports['DOMParser'] = ysnkc2;