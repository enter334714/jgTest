var g = wx.$Q;
function q_n6o9(_r9z$) {
  this['options'] = _r9z$ || { 'locator': {} };
}function q_$_rcdz(_$oze9, _zde, fpalg0) {
  function hjwu8(wqjsu8) {
    var la02f = _$oze9[wqjsu8];!la02f && r_ezd && (la02f = 0x2 == _$oze9['length'] ? function (_o69e) {
      _$oze9(wqjsu8, _o69e);
    } : _$oze9), agflpb[wqjsu8] = la02f && function (gabil) {
      la02f('[xmldom ' + wqjsu8 + ']\t' + gabil + q_n9oem(fpalg0));
    } || function () {};
  }if (!_$oze9) {
    if (_zde instanceof q_lp0fag) return _zde;_$oze9 = _zde;
  }var agflpb = {},
      r_ezd = _$oze9 instanceof Function;return fpalg0 = fpalg0 || {}, hjwu8('warning'), hjwu8('error'), hjwu8('fatalError'), agflpb;
}function q_lp0fag() {
  this['cdata'] = !0x1;
}function q_x5ky32(livb, lx20f) {
  lx20f['lineNumber'] = livb['lineNumber'], lx20f['columnNumber'] = livb['columnNumber'];
}function q_n9oem(oez9_) {
  return oez9_ ? '\x0a@' + (oez9_['systemId'] || '') + '#[line:' + oez9_['lineNumber'] + ',col:' + oez9_['columnNumber'] + ']' : void 0x0;
}function q_nh416m(jsuw8h, ze9$, eon_6) {
  return 'string' == typeof jsuw8h ? jsuw8h['substr'](ze9$, eon_6) : jsuw8h['length'] >= ze9$ + eon_6 || ze9$ ? new java['lang']['String'](jsuw8h, ze9$, eon_6) + '' : jsuw8h;
}function q_pagbf(ytc5dk, l0f2x) {
  ytc5dk['currentElement'] ? ytc5dk['currentElement']['appendChild'](l0f2x) : ytc5dk['doc']['appendChild'](l0f2x);
}q_n6o9['prototype']['parseFromString'] = function (gafl0, h6n4) {
  var aigbl = this['options'],
      _o$9e = new q_lgpa0f(),
      dykr = aigbl['domBuilder'] || new q_lp0fag(),
      x23pf = aigbl['errorHandler'],
      swq8u = aigbl['locator'],
      fp2a = aigbl['xmlns'] || {},
      a0gfl = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return swq8u && dykr['setDocumentLocator'](swq8u), _o$9e['errorHandler'] = q_$_rcdz(x23pf, dykr, swq8u), _o$9e['domBuilder'] = aigbl['domBuilder'] || dykr, /\/x?html?$/['test'](h6n4) && (a0gfl['nbsp'] = '\u00a0', a0gfl['copy'] = '©', fp2a[''] = 'http://www.w3.org/1999/xhtml'), fp2a['xml'] = fp2a['xml'] || 'http://www.w3.org/XML/1998/namespace', gafl0 ? _o$9e['parse'](gafl0, fp2a, a0gfl) : _o$9e['errorHandler']['error']('invalid doc source'), dykr['doc'];
}, q_lp0fag['prototype'] = { 'startDocument': function () {
    this['doc'] = new q_pfbga()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (n16m4, c5k3y, uw8jsq, n64mh1) {
    var o69ne_ = this['doc'],
        hm1n46 = o69ne_['createElementNS'](n16m4, uw8jsq || c5k3y),
        bigp = n64mh1['length'];q_pagbf(this, hm1n46), this['currentElement'] = hm1n46, this['locator'] && q_x5ky32(this['locator'], hm1n46);for (var al02p = 0x0; bigp > al02p; al02p++) {
      var n16m4 = n64mh1['getURI'](al02p),
          h4j81s = n64mh1['getValue'](al02p),
          uw8jsq = n64mh1['getQName'](al02p),
          ip = o69ne_['createAttributeNS'](n16m4, uw8jsq);this['locator'] && q_x5ky32(n64mh1['getLocator'](al02p), ip), ip['value'] = ip['nodeValue'] = h4j81s, hm1n46['setAttributeNode'](ip);
    }
  }, 'endElement': function () {
    {
      var y3k5t = this['currentElement'];y3k5t['tagName'];
    }this['currentElement'] = y3k5t['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($dr_ez, tckr) {
    var ialbv = this['doc']['createProcessingInstruction']($dr_ez, tckr);this['locator'] && q_x5ky32(this['locator'], ialbv), q_pagbf(this, ialbv);
  }, 'ignorableWhitespace': function () {}, 'characters': function (plgfa0) {
    if (plgfa0 = q_nh416m['apply'](this, arguments)) {
      if (this['cdata']) var _69eno = this['doc']['createCDATASection'](plgfa0);else var _69eno = this['doc']['createTextNode'](plgfa0);this['currentElement'] ? this['currentElement']['appendChild'](_69eno) : /^\s*$/['test'](plgfa0) && this['doc']['appendChild'](_69eno), this['locator'] && q_x5ky32(this['locator'], _69eno);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (e69o_) {
    (this['locator'] = e69o_) && (e69o_['lineNumber'] = 0x0);
  }, 'comment': function ($erzd) {
    $erzd = q_nh416m['apply'](this, arguments);var fp0x23 = this['doc']['createComment']($erzd);this['locator'] && q_x5ky32(this['locator'], fp0x23), q_pagbf(this, fp0x23);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (x3y2, n6h, dcky) {
    var $dze_r = this['doc']['implementation'];if ($dze_r && $dze_r['createDocumentType']) {
      var ctr$dz = $dze_r['createDocumentType'](x3y2, n6h, dcky);this['locator'] && q_x5ky32(this['locator'], ctr$dz), q_pagbf(this, ctr$dz);
    }
  }, 'warning': function (zo_) {
    console['warn']('[xmldom warning]\t' + zo_, q_n9oem(this['locator']));
  }, 'error': function (h8juw) {
    console['error']('[xmldom error]\t' + h8juw, q_n9oem(this['locator']));
  }, 'fatalError': function (_oe$9n) {
    throw console['error']('[xmldom fatalError]\t' + _oe$9n, q_n9oem(this['locator'])), _oe$9n;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (edrz) {
  q_lp0fag['prototype'][edrz] = function () {
    return null;
  };
});var q_lgpa0f = require('./qS12q')['XMLReader'],
    q_pfbga = exports['DOMImplementation'] = require('./qqDOMq')['DOMImplementation'];exports['XMLSerializer'] = require('./qqDOMq')['XMLSerializer'], exports['DOMParser'] = q_n6o9;