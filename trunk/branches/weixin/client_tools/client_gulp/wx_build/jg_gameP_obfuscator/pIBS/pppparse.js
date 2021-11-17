var E = wx.$p;
function p_rz72(ag) {
  this['options'] = ag || { 'locator': {} };
}function p_p4xtlu(ne8w, shtp4l, j$hk) {
  function iyshk(q8n5e) {
    var slk4 = ne8w[q8n5e];!slk4 && eq98ba && (slk4 = 0x2 == ne8w['length'] ? function (y167$v) {
      ne8w(q8n5e, y167$v);
    } : ne8w), fumo_x[q8n5e] = slk4 && function (a8gbqc) {
      slk4('[xmldom ' + q8n5e + ']\t' + a8gbqc + p_h4jk(j$hk));
    } || function () {};
  }if (!ne8w) {
    if (shtp4l instanceof p_fuxo) return shtp4l;ne8w = shtp4l;
  }var fumo_x = {},
      eq98ba = ne8w instanceof Function;return j$hk = j$hk || {}, iyshk('warning'), iyshk('error'), iyshk('fatalError'), fumo_x;
}function p_fuxo() {
  this['cdata'] = !0x1;
}function p_adqgb(ouf_xm, g98) {
  g98['lineNumber'] = ouf_xm['lineNumber'], g98['columnNumber'] = ouf_xm['columnNumber'];
}function p_h4jk(e5n89) {
  return e5n89 ? '\x0a@' + (e5n89['systemId'] || '') + '#[line:' + e5n89['lineNumber'] + ',col:' + e5n89['columnNumber'] + ']' : void 0x0;
}function p_z2w305(abq8, w5n8e, $iv61y) {
  return 'string' == typeof abq8 ? abq8['substr'](w5n8e, $iv61y) : abq8['length'] >= w5n8e + $iv61y || w5n8e ? new java['lang']['String'](abq8, w5n8e, $iv61y) + '' : abq8;
}function p_p4txl(_ofmu, $1yv67) {
  _ofmu['currentElement'] ? _ofmu['currentElement']['appendChild']($1yv67) : _ofmu['doc']['appendChild']($1yv67);
}p_rz72['prototype']['parseFromString'] = function (pls4hk, qbag8) {
  var hjisk4 = this['options'],
      ij4hk = new p_q589ne(),
      v67$ = hjisk4['domBuilder'] || new p_fuxo(),
      x_lu = hjisk4['errorHandler'],
      l4psk = hjisk4['locator'],
      hk4jis = hjisk4['xmlns'] || {},
      lh4tps = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return l4psk && v67$['setDocumentLocator'](l4psk), ij4hk['errorHandler'] = p_p4xtlu(x_lu, v67$, l4psk), ij4hk['domBuilder'] = hjisk4['domBuilder'] || v67$, /\/x?html?$/['test'](qbag8) && (lh4tps['nbsp'] = '\u00a0', lh4tps['copy'] = '©', hk4jis[''] = 'http://www.w3.org/1999/xhtml'), hk4jis['xml'] = hk4jis['xml'] || 'http://www.w3.org/XML/1998/namespace', pls4hk ? ij4hk['parse'](pls4hk, hk4jis, lh4tps) : ij4hk['errorHandler']['error']('invalid doc source'), v67$['doc'];
}, p_fuxo['prototype'] = { 'startDocument': function () {
    this['doc'] = new p_o_uxfm()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (mfxtu, sh4jkp, sl4p, l4hk) {
    var syhjki = this['doc'],
        xful_t = syhjki['createElementNS'](mfxtu, sl4p || sh4jkp),
        ihkjys = l4hk['length'];p_p4txl(this, xful_t), this['currentElement'] = xful_t, this['locator'] && p_adqgb(this['locator'], xful_t);for (var c8gqa = 0x0; ihkjys > c8gqa; c8gqa++) {
      var mfxtu = l4hk['getURI'](c8gqa),
          jy$kh = l4hk['getValue'](c8gqa),
          sl4p = l4hk['getQName'](c8gqa),
          v20r7 = syhjki['createAttributeNS'](mfxtu, sl4p);this['locator'] && p_adqgb(l4hk['getLocator'](c8gqa), v20r7), v20r7['value'] = v20r7['nodeValue'] = jy$kh, xful_t['setAttributeNode'](v20r7);
    }
  }, 'endElement': function () {
    {
      var rvz207 = this['currentElement'];rvz207['tagName'];
    }this['currentElement'] = rvz207['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (u4xpl, z2503w) {
    var r1$7v = this['doc']['createProcessingInstruction'](u4xpl, z2503w);this['locator'] && p_adqgb(this['locator'], r1$7v), p_p4txl(this, r1$7v);
  }, 'ignorableWhitespace': function () {}, 'characters': function (tu4xpl) {
    if (tu4xpl = p_z2w305['apply'](this, arguments)) {
      if (this['cdata']) var ftuxm_ = this['doc']['createCDATASection'](tu4xpl);else var ftuxm_ = this['doc']['createTextNode'](tu4xpl);this['currentElement'] ? this['currentElement']['appendChild'](ftuxm_) : /^\s*$/['test'](tu4xpl) && this['doc']['appendChild'](ftuxm_), this['locator'] && p_adqgb(this['locator'], ftuxm_);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (tpxful) {
    (this['locator'] = tpxful) && (tpxful['lineNumber'] = 0x0);
  }, 'comment': function (y$617v) {
    y$617v = p_z2w305['apply'](this, arguments);var n035 = this['doc']['createComment'](y$617v);this['locator'] && p_adqgb(this['locator'], n035), p_p4txl(this, n035);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function ($v1iy6, aqbgdc, e589qn) {
    var khjiys = this['doc']['implementation'];if (khjiys && khjiys['createDocumentType']) {
      var qbdg = khjiys['createDocumentType']($v1iy6, aqbgdc, e589qn);this['locator'] && p_adqgb(this['locator'], qbdg), p_p4txl(this, qbdg);
    }
  }, 'warning': function (o_ufm) {
    console['warn']('[xmldom warning]\t' + o_ufm, p_h4jk(this['locator']));
  }, 'error': function (r1v762) {
    console['error']('[xmldom error]\t' + r1v762, p_h4jk(this['locator']));
  }, 'fatalError': function (jik4) {
    throw console['error']('[xmldom fatalError]\t' + jik4, p_h4jk(this['locator'])), jik4;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function ($1rv76) {
  p_fuxo['prototype'][$1rv76] = function () {
    return null;
  };
});var p_q589ne = require('./pSAXp')['XMLReader'],
    p_o_uxfm = exports['DOMImplementation'] = require('./ppDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./ppDOM')['XMLSerializer'], exports['DOMParser'] = p_rz72;