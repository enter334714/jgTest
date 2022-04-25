var g = wx.$Q;
function q_lgpaib(p02fal) {
  this['options'] = p02fal || { 'locator': {} };
}function q_m9on64(iavgl, u8wjq, gblpfa) {
  function x3y502(z$9e_o) {
    var fplga0 = iavgl[z$9e_o];!fplga0 && mo9ne6 && (fplga0 = 0x2 == iavgl['length'] ? function (s814jh) {
      iavgl(z$9e_o, s814jh);
    } : iavgl), tk35x[z$9e_o] = fplga0 && function (s8jwuq) {
      fplga0('[xmldom ' + z$9e_o + ']\t' + s8jwuq + q_yxt35k(gblpfa));
    } || function () {};
  }if (!iavgl) {
    if (u8wjq instanceof q_h4m1n) return u8wjq;iavgl = u8wjq;
  }var tk35x = {},
      mo9ne6 = iavgl instanceof Function;return gblpfa = gblpfa || {}, x3y502('warning'), x3y502('error'), x3y502('fatalError'), tk35x;
}function q_h4m1n() {
  this['cdata'] = !0x1;
}function q_bg7a(lpibg, _9o) {
  _9o['lineNumber'] = lpibg['lineNumber'], _9o['columnNumber'] = lpibg['columnNumber'];
}function q_yxt35k(bapli) {
  return bapli ? '\x0a@' + (bapli['systemId'] || '') + '#[line:' + bapli['lineNumber'] + ',col:' + bapli['columnNumber'] + ']' : void 0x0;
}function q_tkcdy5(pgflab, tr$cd, rt$z) {
  return 'string' == typeof pgflab ? pgflab['substr'](tr$cd, rt$z) : pgflab['length'] >= tr$cd + rt$z || tr$cd ? new java['lang']['String'](pgflab, tr$cd, rt$z) + '' : pgflab;
}function q_g0fl(_$9ze, ba7i) {
  _$9ze['currentElement'] ? _$9ze['currentElement']['appendChild'](ba7i) : _$9ze['doc']['appendChild'](ba7i);
}q_lgpaib['prototype']['parseFromString'] = function (wu8jh, x20) {
  var yrtdck = this['options'],
      m4h16 = new q_gvlb(),
      bpalgi = yrtdck['domBuilder'] || new q_h4m1n(),
      n46o1m = yrtdck['errorHandler'],
      s8wj1h = yrtdck['locator'],
      o1nm6 = yrtdck['xmlns'] || {},
      rytkc = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return s8wj1h && bpalgi['setDocumentLocator'](s8wj1h), m4h16['errorHandler'] = q_m9on64(n46o1m, bpalgi, s8wj1h), m4h16['domBuilder'] = yrtdck['domBuilder'] || bpalgi, /\/x?html?$/['test'](x20) && (rytkc['nbsp'] = '\u00a0', rytkc['copy'] = '©', o1nm6[''] = 'http://www.w3.org/1999/xhtml'), o1nm6['xml'] = o1nm6['xml'] || 'http://www.w3.org/XML/1998/namespace', wu8jh ? m4h16['parse'](wu8jh, o1nm6, rytkc) : m4h16['errorHandler']['error']('invalid doc source'), bpalgi['doc'];
}, q_h4m1n['prototype'] = { 'startDocument': function () {
    this['doc'] = new q__ne9$o()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_$rdc, l02fa, _e9o$, swh8u) {
    var alpbg = this['doc'],
        c$zr_ = alpbg['createElementNS'](_$rdc, _e9o$ || l02fa),
        qs8w = swh8u['length'];q_g0fl(this, c$zr_), this['currentElement'] = c$zr_, this['locator'] && q_bg7a(this['locator'], c$zr_);for (var bivg7 = 0x0; qs8w > bivg7; bivg7++) {
      var _$rdc = swh8u['getURI'](bivg7),
          rczktd = swh8u['getValue'](bivg7),
          _e9o$ = swh8u['getQName'](bivg7),
          z_e$o9 = alpbg['createAttributeNS'](_$rdc, _e9o$);this['locator'] && q_bg7a(swh8u['getLocator'](bivg7), z_e$o9), z_e$o9['value'] = z_e$o9['nodeValue'] = rczktd, c$zr_['setAttributeNode'](z_e$o9);
    }
  }, 'endElement': function () {
    {
      var dc$t = this['currentElement'];dc$t['tagName'];
    }this['currentElement'] = dc$t['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (ctyr, jh4m18) {
    var $trdc = this['doc']['createProcessingInstruction'](ctyr, jh4m18);this['locator'] && q_bg7a(this['locator'], $trdc), q_g0fl(this, $trdc);
  }, 'ignorableWhitespace': function () {}, 'characters': function (lfap2) {
    if (lfap2 = q_tkcdy5['apply'](this, arguments)) {
      if (this['cdata']) var pbflg = this['doc']['createCDATASection'](lfap2);else var pbflg = this['doc']['createTextNode'](lfap2);this['currentElement'] ? this['currentElement']['appendChild'](pbflg) : /^\s*$/['test'](lfap2) && this['doc']['appendChild'](pbflg), this['locator'] && q_bg7a(this['locator'], pbflg);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (glabfp) {
    (this['locator'] = glabfp) && (glabfp['lineNumber'] = 0x0);
  }, 'comment': function (ws8huj) {
    ws8huj = q_tkcdy5['apply'](this, arguments);var $rz_9 = this['doc']['createComment'](ws8huj);this['locator'] && q_bg7a(this['locator'], $rz_9), q_g0fl(this, $rz_9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (gp, rd_zc, cd_r$z) {
    var l2p = this['doc']['implementation'];if (l2p && l2p['createDocumentType']) {
      var y2k35x = l2p['createDocumentType'](gp, rd_zc, cd_r$z);this['locator'] && q_bg7a(this['locator'], y2k35x), q_g0fl(this, y2k35x);
    }
  }, 'warning': function (x0352y) {
    console['warn']('[xmldom warning]\t' + x0352y, q_yxt35k(this['locator']));
  }, 'error': function (j8uwhs) {
    console['error']('[xmldom error]\t' + j8uwhs, q_yxt35k(this['locator']));
  }, 'fatalError': function (x32p0f) {
    throw console['error']('[xmldom fatalError]\t' + x32p0f, q_yxt35k(this['locator'])), x32p0f;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (e6nm9o) {
  q_h4m1n['prototype'][e6nm9o] = function () {
    return null;
  };
});var q_gvlb = require('./qS12q')['XMLReader'],
    q__ne9$o = exports['DOMImplementation'] = require('./qqDOMq')['DOMImplementation'];exports['XMLSerializer'] = require('./qqDOMq')['XMLSerializer'], exports['DOMParser'] = q_lgpaib;