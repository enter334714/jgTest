var c = wx.$o;
function o_rmstq5(w1if29) {
  this['options'] = w1if29 || { 'locator': {} };
}function o_zg4ohb(x4hg, i2a16d, kunye_) {
  function obz4h(_e0k$) {
    var tmpcr = x4hg[_e0k$];!tmpcr && va62ld && (tmpcr = 0x2 == x4hg['length'] ? function (un_yk) {
      x4hg(_e0k$, un_yk);
    } : x4hg), au3nv[_e0k$] = tmpcr && function (gbzoh4) {
      tmpcr('[xmldom ' + _e0k$ + ']\t' + gbzoh4 + o_yneu_k(kunye_));
    } || function () {};
  }if (!x4hg) {
    if (i2a16d instanceof o_og4bz) return i2a16d;x4hg = i2a16d;
  }var au3nv = {},
      va62ld = x4hg instanceof Function;return kunye_ = kunye_ || {}, obz4h('warning'), obz4h('error'), obz4h('fatalError'), au3nv;
}function o_og4bz() {
  this['cdata'] = !0x1;
}function o_bch8zp(al6vn3, bgx94) {
  bgx94['lineNumber'] = al6vn3['lineNumber'], bgx94['columnNumber'] = al6vn3['columnNumber'];
}function o_yneu_k(lvnua3) {
  return lvnua3 ? '\x0a@' + (lvnua3['systemId'] || '') + '#[line:' + lvnua3['lineNumber'] + ',col:' + lvnua3['columnNumber'] + ']' : void 0x0;
}function o_w4x19f(oxbg4h, b8chz, pct) {
  return 'string' == typeof oxbg4h ? oxbg4h['substr'](b8chz, pct) : oxbg4h['length'] >= b8chz + pct || b8chz ? new java['lang']['String'](oxbg4h, b8chz, pct) + '' : oxbg4h;
}function o_t5pc(g9f4x, prmc) {
  g9f4x['currentElement'] ? g9f4x['currentElement']['appendChild'](prmc) : g9f4x['doc']['appendChild'](prmc);
}o_rmstq5['prototype']['parseFromString'] = function (y_nue, xwf41) {
  var x4w1f = this['options'],
      va36n = new o_ogzbh4(),
      dl63v = x4w1f['domBuilder'] || new o_og4bz(),
      bo4hz = x4w1f['errorHandler'],
      w9x4f1 = x4w1f['locator'],
      _uky = x4w1f['xmlns'] || {},
      mrt5sq = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return w9x4f1 && dl63v['setDocumentLocator'](w9x4f1), va36n['errorHandler'] = o_zg4ohb(bo4hz, dl63v, w9x4f1), va36n['domBuilder'] = x4w1f['domBuilder'] || dl63v, /\/x?html?$/['test'](xwf41) && (mrt5sq['nbsp'] = '\u00a0', mrt5sq['copy'] = '©', _uky[''] = 'http://www.w3.org/1999/xhtml'), _uky['xml'] = _uky['xml'] || 'http://www.w3.org/XML/1998/namespace', y_nue ? va36n['parse'](y_nue, _uky, mrt5sq) : va36n['errorHandler']['error']('invalid doc source'), dl63v['doc'];
}, o_og4bz['prototype'] = { 'startDocument': function () {
    this['doc'] = new o_l2a6v()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (nuav3, al62d, ye3_un, y_$ek0) {
    var k0_yu = this['doc'],
        ld6ai2 = k0_yu['createElementNS'](nuav3, ye3_un || al62d),
        ek_yu = y_$ek0['length'];o_t5pc(this, ld6ai2), this['currentElement'] = ld6ai2, this['locator'] && o_bch8zp(this['locator'], ld6ai2);for (var zb8go = 0x0; ek_yu > zb8go; zb8go++) {
      var nuav3 = y_$ek0['getURI'](zb8go),
          uke_0 = y_$ek0['getValue'](zb8go),
          ye3_un = y_$ek0['getQName'](zb8go),
          prq5tm = k0_yu['createAttributeNS'](nuav3, ye3_un);this['locator'] && o_bch8zp(y_$ek0['getLocator'](zb8go), prq5tm), prq5tm['value'] = prq5tm['nodeValue'] = uke_0, ld6ai2['setAttributeNode'](prq5tm);
    }
  }, 'endElement': function () {
    {
      var i91wf2 = this['currentElement'];i91wf2['tagName'];
    }this['currentElement'] = i91wf2['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (bx49go, zcbho) {
    var tm5cr = this['doc']['createProcessingInstruction'](bx49go, zcbho);this['locator'] && o_bch8zp(this['locator'], tm5cr), o_t5pc(this, tm5cr);
  }, 'ignorableWhitespace': function () {}, 'characters': function (xwf9g4) {
    if (xwf9g4 = o_w4x19f['apply'](this, arguments)) {
      if (this['cdata']) var q5m = this['doc']['createCDATASection'](xwf9g4);else var q5m = this['doc']['createTextNode'](xwf9g4);this['currentElement'] ? this['currentElement']['appendChild'](q5m) : /^\s*$/['test'](xwf9g4) && this['doc']['appendChild'](q5m), this['locator'] && o_bch8zp(this['locator'], q5m);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rqt5) {
    (this['locator'] = rqt5) && (rqt5['lineNumber'] = 0x0);
  }, 'comment': function (zgb) {
    zgb = o_w4x19f['apply'](this, arguments);var cp5rm = this['doc']['createComment'](zgb);this['locator'] && o_bch8zp(this['locator'], cp5rm), o_t5pc(this, cp5rm);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (zcrp, zrmpc, hx4bo) {
    var qrtpm = this['doc']['implementation'];if (qrtpm && qrtpm['createDocumentType']) {
      var bh8p = qrtpm['createDocumentType'](zcrp, zrmpc, hx4bo);this['locator'] && o_bch8zp(this['locator'], bh8p), o_t5pc(this, bh8p);
    }
  }, 'warning': function (xfi19) {
    console['warn']('[xmldom warning]\t' + xfi19, o_yneu_k(this['locator']));
  }, 'error': function (yke0) {
    console['error']('[xmldom error]\t' + yke0, o_yneu_k(this['locator']));
  }, 'fatalError': function (fgw94x) {
    throw console['error']('[xmldom fatalError]\t' + fgw94x, o_yneu_k(this['locator'])), fgw94x;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (eky_0$) {
  o_og4bz['prototype'][eky_0$] = function () {
    return null;
  };
});var o_ogzbh4 = require('./oooSAX')['XMLReader'],
    o_l2a6v = exports['DOMImplementation'] = require('./ooooDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ooooDOM')['XMLSerializer'], exports['DOMParser'] = o_rmstq5;