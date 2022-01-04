var A = wx.$N;
function n_mnd(s5cn70) {
  this['options'] = s5cn70 || { 'locator': {} };
}function n_p0s7c5(rgy3f, v8reg3, jyvgi) {
  function v3rf8g(cszx) {
    var v8gf3r = rgy3f[cszx];!v8gf3r && p0qj95 && (v8gf3r = 0x2 == rgy3f['length'] ? function (fg83r) {
      rgy3f(cszx, fg83r);
    } : rgy3f), xmdhl[cszx] = v8gf3r && function (p95c) {
      v8gf3r('[xmldom ' + cszx + ']\t' + p95c + n_zln(jyvgi));
    } || function () {};
  }if (!rgy3f) {
    if (v8reg3 instanceof n_m$_kh) return v8reg3;rgy3f = v8reg3;
  }var xmdhl = {},
      p0qj95 = rgy3f instanceof Function;return jyvgi = jyvgi || {}, v3rf8g('warning'), v3rf8g('error'), v3rf8g('fatalError'), xmdhl;
}function n_m$_kh() {
  this['cdata'] = !0x1;
}function n__ku4$h(aw2ob, aew2o) {
  aew2o['lineNumber'] = aw2ob['lineNumber'], aew2o['columnNumber'] = aw2ob['columnNumber'];
}function n_zln(j9p0) {
  return j9p0 ? '\x0a@' + (j9p0['systemId'] || '') + '#[line:' + j9p0['lineNumber'] + ',col:' + j9p0['columnNumber'] + ']' : void 0x0;
}function n_i9yqf(yjqif, ao2b6w, fjyq) {
  return 'string' == typeof yjqif ? yjqif['substr'](ao2b6w, fjyq) : yjqif['length'] >= ao2b6w + fjyq || ao2b6w ? new java['lang']['String'](yjqif, ao2b6w, fjyq) + '' : yjqif;
}function n_u4_$hk(lhk$m, lk_$mh) {
  lhk$m['currentElement'] ? lhk$m['currentElement']['appendChild'](lk_$mh) : lhk$m['doc']['appendChild'](lk_$mh);
}n_mnd['prototype']['parseFromString'] = function (lh_m$, ldxnz) {
  var yf9iq = this['options'],
      _4k$u = new n_jf9i(),
      wea6o = yf9iq['domBuilder'] || new n_m$_kh(),
      rviy = yf9iq['errorHandler'],
      snzd7c = yf9iq['locator'],
      kl_xh = yf9iq['xmlns'] || {},
      xcs = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return snzd7c && wea6o['setDocumentLocator'](snzd7c), _4k$u['errorHandler'] = n_p0s7c5(rviy, wea6o, snzd7c), _4k$u['domBuilder'] = yf9iq['domBuilder'] || wea6o, /\/x?html?$/['test'](ldxnz) && (xcs['nbsp'] = '\u00a0', xcs['copy'] = '©', kl_xh[''] = 'http://www.w3.org/1999/xhtml'), kl_xh['xml'] = kl_xh['xml'] || 'http://www.w3.org/XML/1998/namespace', lh_m$ ? _4k$u['parse'](lh_m$, kl_xh, xcs) : _4k$u['errorHandler']['error']('invalid doc source'), wea6o['doc'];
}, n_m$_kh['prototype'] = { 'startDocument': function () {
    this['doc'] = new n_wta6b2()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ifgyvr, v3yrfg, dn7zc, yrfvi) {
    var vyf = this['doc'],
        a6ow = vyf['createElementNS'](ifgyvr, dn7zc || v3yrfg),
        zcs75n = yrfvi['length'];n_u4_$hk(this, a6ow), this['currentElement'] = a6ow, this['locator'] && n__ku4$h(this['locator'], a6ow);for (var qgji = 0x0; zcs75n > qgji; qgji++) {
      var ifgyvr = yrfvi['getURI'](qgji),
          n7czds = yrfvi['getValue'](qgji),
          dn7zc = yrfvi['getQName'](qgji),
          y3frvg = vyf['createAttributeNS'](ifgyvr, dn7zc);this['locator'] && n__ku4$h(yrfvi['getLocator'](qgji), y3frvg), y3frvg['value'] = y3frvg['nodeValue'] = n7czds, a6ow['setAttributeNode'](y3frvg);
    }
  }, 'endElement': function () {
    {
      var zcd = this['currentElement'];zcd['tagName'];
    }this['currentElement'] = zcd['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (gvre83, lxsnz) {
    var qyjifg = this['doc']['createProcessingInstruction'](gvre83, lxsnz);this['locator'] && n__ku4$h(this['locator'], qyjifg), n_u4_$hk(this, qyjifg);
  }, 'ignorableWhitespace': function () {}, 'characters': function ($k_1) {
    if ($k_1 = n_i9yqf['apply'](this, arguments)) {
      if (this['cdata']) var p9qjy = this['doc']['createCDATASection']($k_1);else var p9qjy = this['doc']['createTextNode']($k_1);this['currentElement'] ? this['currentElement']['appendChild'](p9qjy) : /^\s*$/['test']($k_1) && this['doc']['appendChild'](p9qjy), this['locator'] && n__ku4$h(this['locator'], p9qjy);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (owea26) {
    (this['locator'] = owea26) && (owea26['lineNumber'] = 0x0);
  }, 'comment': function (evg8r) {
    evg8r = n_i9yqf['apply'](this, arguments);var ro3ve8 = this['doc']['createComment'](evg8r);this['locator'] && n__ku4$h(this['locator'], ro3ve8), n_u4_$hk(this, ro3ve8);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (uk$14_, yfgvr3, gyifjq) {
    var grfv = this['doc']['implementation'];if (grfv && grfv['createDocumentType']) {
      var e38ov = grfv['createDocumentType'](uk$14_, yfgvr3, gyifjq);this['locator'] && n__ku4$h(this['locator'], e38ov), n_u4_$hk(this, e38ov);
    }
  }, 'warning': function (ipjq90) {
    console['warn']('[xmldom warning]\t' + ipjq90, n_zln(this['locator']));
  }, 'error': function (fqiy9) {
    console['error']('[xmldom error]\t' + fqiy9, n_zln(this['locator']));
  }, 'fatalError': function (pj905q) {
    throw console['error']('[xmldom fatalError]\t' + pj905q, n_zln(this['locator'])), pj905q;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (aw2ob6) {
  n_m$_kh['prototype'][aw2ob6] = function () {
    return null;
  };
});var n_jf9i = require('./nnnSAX')['XMLReader'],
    n_wta6b2 = exports['DOMImplementation'] = require('./nnnnDOM')['DOMImplementation'];exports['XMLSerializer'] = require('./nnnnDOM')['XMLSerializer'], exports['DOMParser'] = n_mnd;