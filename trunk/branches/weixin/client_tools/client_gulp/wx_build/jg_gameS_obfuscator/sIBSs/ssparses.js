var K = wx.$S;
function sreu4$a(u3r4) {
  this['options'] = u3r4 || { 'locator': {} };
}function sic_90w(vuzro3, z9kwv0, dy5a$h) {
  function _ximc2(wovz) {
    var eud$a = vuzro3[wovz];!eud$a && psqj1g && (eud$a = 0x2 == vuzro3['length'] ? function (gqb8) {
      vuzro3(wovz, gqb8);
    } : vuzro3), sqg1j[wovz] = eud$a && function (zv0wk9) {
      eud$a('[xmldom ' + wovz + ']\t' + zv0wk9 + svoure3(dy5a$h));
    } || function () {};
  }if (!vuzro3) {
    if (z9kwv0 instanceof se$ua4r) return z9kwv0;vuzro3 = z9kwv0;
  }var sqg1j = {},
      psqj1g = vuzro3 instanceof Function;return dy5a$h = dy5a$h || {}, _ximc2('warning'), _ximc2('error'), _ximc2('fatalError'), sqg1j;
}function se$ua4r() {
  this['cdata'] = !0x1;
}function sx2ci_m(c0zk, b1gj68) {
  b1gj68['lineNumber'] = c0zk['lineNumber'], b1gj68['columnNumber'] = c0zk['columnNumber'];
}function svoure3(_mcix0) {
  return _mcix0 ? '\x0a@' + (_mcix0['systemId'] || '') + '#[line:' + _mcix0['lineNumber'] + ',col:' + _mcix0['columnNumber'] + ']' : void 0x0;
}function sblj81($ruae, dayh5$, lj6b) {
  return 'string' == typeof $ruae ? $ruae['substr'](dayh5$, lj6b) : $ruae['length'] >= dayh5$ + lj6b || dayh5$ ? new java['lang']['String']($ruae, dayh5$, lj6b) + '' : $ruae;
}function sm2txin(yh5qp, ic_m0x) {
  yh5qp['currentElement'] ? yh5qp['currentElement']['appendChild'](ic_m0x) : yh5qp['doc']['appendChild'](ic_m0x);
}sreu4$a['prototype']['parseFromString'] = function (kc09w_, wvzk9) {
  var rev3ou = this['options'],
      yhpqs5 = new ssyhqgp(),
      ds5ph = rev3ou['domBuilder'] || new se$ua4r(),
      urv3oe = rev3ou['errorHandler'],
      u3er = rev3ou['locator'],
      spqygh = rev3ou['xmlns'] || {},
      er34$u = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return u3er && ds5ph['setDocumentLocator'](u3er), yhpqs5['errorHandler'] = sic_90w(urv3oe, ds5ph, u3er), yhpqs5['domBuilder'] = rev3ou['domBuilder'] || ds5ph, /\/x?html?$/['test'](wvzk9) && (er34$u['nbsp'] = '\u00a0', er34$u['copy'] = '©', spqygh[''] = 'http://www.w3.org/1999/xhtml'), spqygh['xml'] = spqygh['xml'] || 'http://www.w3.org/XML/1998/namespace', kc09w_ ? yhpqs5['parse'](kc09w_, spqygh, er34$u) : yhpqs5['errorHandler']['error']('invalid doc source'), ds5ph['doc'];
}, se$ua4r['prototype'] = { 'startDocument': function () {
    this['doc'] = new s_9c0i()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (dhsa5, h5ysdp, m27t, a5$d4) {
    var pgqhs = this['doc'],
        ydph5 = pgqhs['createElementNS'](dhsa5, m27t || h5ysdp),
        cwzk = a5$d4['length'];sm2txin(this, ydph5), this['currentElement'] = ydph5, this['locator'] && sx2ci_m(this['locator'], ydph5);for (var x_inm = 0x0; cwzk > x_inm; x_inm++) {
      var dhsa5 = a5$d4['getURI'](x_inm),
          b8qjg1 = a5$d4['getValue'](x_inm),
          m27t = a5$d4['getQName'](x_inm),
          z3vu = pgqhs['createAttributeNS'](dhsa5, m27t);this['locator'] && sx2ci_m(a5$d4['getLocator'](x_inm), z3vu), z3vu['value'] = z3vu['nodeValue'] = b8qjg1, ydph5['setAttributeNode'](z3vu);
    }
  }, 'endElement': function () {
    {
      var kvro3 = this['currentElement'];kvro3['tagName'];
    }this['currentElement'] = kvro3['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (zoruv, wokz9v) {
    var voz93 = this['doc']['createProcessingInstruction'](zoruv, wokz9v);this['locator'] && sx2ci_m(this['locator'], voz93), sm2txin(this, voz93);
  }, 'ignorableWhitespace': function () {}, 'characters': function (gbj18) {
    if (gbj18 = sblj81['apply'](this, arguments)) {
      if (this['cdata']) var s5dayh = this['doc']['createCDATASection'](gbj18);else var s5dayh = this['doc']['createTextNode'](gbj18);this['currentElement'] ? this['currentElement']['appendChild'](s5dayh) : /^\s*$/['test'](gbj18) && this['doc']['appendChild'](s5dayh), this['locator'] && sx2ci_m(this['locator'], s5dayh);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ckz) {
    (this['locator'] = ckz) && (ckz['lineNumber'] = 0x0);
  }, 'comment': function (vrou3) {
    vrou3 = sblj81['apply'](this, arguments);var aud4 = this['doc']['createComment'](vrou3);this['locator'] && sx2ci_m(this['locator'], aud4), sm2txin(this, aud4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ya$d5, ureov, gb86j1) {
    var uzor3v = this['doc']['implementation'];if (uzor3v && uzor3v['createDocumentType']) {
      var k9z3v = uzor3v['createDocumentType'](ya$d5, ureov, gb86j1);this['locator'] && sx2ci_m(this['locator'], k9z3v), sm2txin(this, k9z3v);
    }
  }, 'warning': function (hpds5y) {
    console['warn']('[xmldom warning]\t' + hpds5y, svoure3(this['locator']));
  }, 'error': function (eu3ov) {
    console['error']('[xmldom error]\t' + eu3ov, svoure3(this['locator']));
  }, 'fatalError': function (z9kcw) {
    throw console['error']('[xmldom fatalError]\t' + z9kcw, svoure3(this['locator'])), z9kcw;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (j86bl) {
  se$ua4r['prototype'][j86bl] = function () {
    return null;
  };
});var ssyhqgp = require('./sS12ss')['XMLReader'],
    s_9c0i = exports['DOMImplementation'] = require('./ssDOss')['DOMImplementation'];exports['XMLSerializer'] = require('./ssDOss')['XMLSerializer'], exports['DOMParser'] = sreu4$a;