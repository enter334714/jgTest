var F = wx.$D;
function Dlom_g5(z2rh1) {
  this['options'] = z2rh1 || { 'locator': {} };
}function Dir2h(cu03bp, us03ce, mzio_l) {
  function x6kq(zr2i) {
    var ubp30 = cu03bp[zr2i];!ubp30 && wvksq && (ubp30 = 0x2 == cu03bp['length'] ? function (mgj5ao) {
      cu03bp(zr2i, mgj5ao);
    } : cu03bp), iz1r2[zr2i] = ubp30 && function (ol_mg5) {
      ubp30('[xmldom ' + zr2i + ']\t' + ol_mg5 + Dxja5g(mzio_l));
    } || function () {};
  }if (!cu03bp) {
    if (us03ce instanceof Dwtkqv) return us03ce;cu03bp = us03ce;
  }var iz1r2 = {},
      wvksq = cu03bp instanceof Function;return mzio_l = mzio_l || {}, x6kq('warning'), x6kq('error'), x6kq('fatalError'), iz1r2;
}function Dwtkqv() {
  this['cdata'] = !0x1;
}function Dp0eu(c3u0b, gao5) {
  gao5['lineNumber'] = c3u0b['lineNumber'], gao5['columnNumber'] = c3u0b['columnNumber'];
}function Dxja5g(gm5o_) {
  return gm5o_ ? '\x0a@' + (gm5o_['systemId'] || '') + '#[line:' + gm5o_['lineNumber'] + ',col:' + gm5o_['columnNumber'] + ']' : void 0x0;
}function Dub9f7(h1r82, m5_, xwq6j) {
  return 'string' == typeof h1r82 ? h1r82['substr'](m5_, xwq6j) : h1r82['length'] >= m5_ + xwq6j || m5_ ? new java['lang']['String'](h1r82, m5_, xwq6j) + '' : h1r82;
}function Dk6xga(ec3, ol5m_) {
  ec3['currentElement'] ? ec3['currentElement']['appendChild'](ol5m_) : ec3['doc']['appendChild'](ol5m_);
}Dlom_g5['prototype']['parseFromString'] = function (o_l5m, o_izl) {
  var irl2z_ = this['options'],
      agk6x = new Dgjmo5a(),
      mgo = irl2z_['domBuilder'] || new Dwtkqv(),
      ubc30 = irl2z_['errorHandler'],
      ogj5 = irl2z_['locator'],
      mgloa = irl2z_['xmlns'] || {},
      sktv = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ogj5 && mgo['setDocumentLocator'](ogj5), agk6x['errorHandler'] = Dir2h(ubc30, mgo, ogj5), agk6x['domBuilder'] = irl2z_['domBuilder'] || mgo, /\/x?html?$/['test'](o_izl) && (sktv['nbsp'] = '\u00a0', sktv['copy'] = '©', mgloa[''] = 'http://www.w3.org/1999/xhtml'), mgloa['xml'] = mgloa['xml'] || 'http://www.w3.org/XML/1998/namespace', o_l5m ? agk6x['parse'](o_l5m, mgloa, sktv) : agk6x['errorHandler']['error']('invalid doc source'), mgo['doc'];
}, Dwtkqv['prototype'] = { 'startDocument': function () {
    this['doc'] = new Dbp()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (vqwstk, cuep03, ec3s0, buf9p7) {
    var k6agx = this['doc'],
        puf3b9 = k6agx['createElementNS'](vqwstk, ec3s0 || cuep03),
        f7p9b = buf9p7['length'];Dk6xga(this, puf3b9), this['currentElement'] = puf3b9, this['locator'] && Dp0eu(this['locator'], puf3b9);for (var qts0 = 0x0; f7p9b > qts0; qts0++) {
      var vqwstk = buf9p7['getURI'](qts0),
          h1n82 = buf9p7['getValue'](qts0),
          ec3s0 = buf9p7['getQName'](qts0),
          ogam5l = k6agx['createAttributeNS'](vqwstk, ec3s0);this['locator'] && Dp0eu(buf9p7['getLocator'](qts0), ogam5l), ogam5l['value'] = ogam5l['nodeValue'] = h1n82, puf3b9['setAttributeNode'](ogam5l);
    }
  }, 'endElement': function () {
    {
      var lgo_m5 = this['currentElement'];lgo_m5['tagName'];
    }this['currentElement'] = lgo_m5['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (vsq0te, z_li2) {
    var ola5m = this['doc']['createProcessingInstruction'](vsq0te, z_li2);this['locator'] && Dp0eu(this['locator'], ola5m), Dk6xga(this, ola5m);
  }, 'ignorableWhitespace': function () {}, 'characters': function (hr12n) {
    if (hr12n = Dub9f7['apply'](this, arguments)) {
      if (this['cdata']) var xkj6a = this['doc']['createCDATASection'](hr12n);else var xkj6a = this['doc']['createTextNode'](hr12n);this['currentElement'] ? this['currentElement']['appendChild'](xkj6a) : /^\s*$/['test'](hr12n) && this['doc']['appendChild'](xkj6a), this['locator'] && Dp0eu(this['locator'], xkj6a);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function ($1n2h8) {
    (this['locator'] = $1n2h8) && ($1n2h8['lineNumber'] = 0x0);
  }, 'comment': function (xjmag) {
    xjmag = Dub9f7['apply'](this, arguments);var p0u3bc = this['doc']['createComment'](xjmag);this['locator'] && Dp0eu(this['locator'], p0u3bc), Dk6xga(this, p0u3bc);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (u9fpb3, j6xga5, jxq) {
    var oma5jg = this['doc']['implementation'];if (oma5jg && oma5jg['createDocumentType']) {
      var kqvw6x = oma5jg['createDocumentType'](u9fpb3, j6xga5, jxq);this['locator'] && Dp0eu(this['locator'], kqvw6x), Dk6xga(this, kqvw6x);
    }
  }, 'warning': function (qkxjw6) {
    console['warn']('[xmldom warning]\t' + qkxjw6, Dxja5g(this['locator']));
  }, 'error': function (mzl_i) {
    console['error']('[xmldom error]\t' + mzl_i, Dxja5g(this['locator']));
  }, 'fatalError': function (f9p47) {
    throw console['error']('[xmldom fatalError]\t' + f9p47, Dxja5g(this['locator'])), f9p47;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (kwajx6) {
  Dwtkqv['prototype'][kwajx6] = function () {
    return null;
  };
});var Dgjmo5a = require('./d22d22cd22d22')['XMLReader'],
    Dbp = exports['DOMImplementation'] = require('./d22d22DOd22d22')['DOMImplementation'];exports['XMLSerializer'] = require('./d22d22DOd22d22')['XMLSerializer'], exports['DOMParser'] = Dlom_g5;