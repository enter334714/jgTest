var g = wx.$Q;
function q_pfbl(s1w8) {
  this['options'] = s1w8 || { 'locator': {} };
}function q_gai(_rcz$, dkrczt, me96on) {
  function x35y(jq8usw) {
    var rez_$d = _rcz$[jq8usw];!rez_$d && glipb && (rez_$d = 0x2 == _rcz$['length'] ? function (nhm14) {
      _rcz$(jq8usw, nhm14);
    } : _rcz$), jm8h14[jq8usw] = rez_$d && function (sjwqu) {
      rez_$d('[xmldom ' + jq8usw + ']\t' + sjwqu + q_o16m4n(me96on));
    } || function () {};
  }if (!_rcz$) {
    if (dkrczt instanceof q_dckt) return dkrczt;_rcz$ = dkrczt;
  }var jm8h14 = {},
      glipb = _rcz$ instanceof Function;return me96on = me96on || {}, x35y('warning'), x35y('error'), x35y('fatalError'), jm8h14;
}function q_dckt() {
  this['cdata'] = !0x1;
}function q__$oen9(_czrd$, cd$rz_) {
  cd$rz_['lineNumber'] = _czrd$['lineNumber'], cd$rz_['columnNumber'] = _czrd$['columnNumber'];
}function q_o16m4n(apig) {
  return apig ? '\x0a@' + (apig['systemId'] || '') + '#[line:' + apig['lineNumber'] + ',col:' + apig['columnNumber'] + ']' : void 0x0;
}function q_k53tx(dtcz$r, kty5cd, cdy) {
  return 'string' == typeof dtcz$r ? dtcz$r['substr'](kty5cd, cdy) : dtcz$r['length'] >= kty5cd + cdy || kty5cd ? new java['lang']['String'](dtcz$r, kty5cd, cdy) + '' : dtcz$r;
}function q_en$(sjuq8, apflg) {
  sjuq8['currentElement'] ? sjuq8['currentElement']['appendChild'](apflg) : sjuq8['doc']['appendChild'](apflg);
}q_pfbl['prototype']['parseFromString'] = function (a0fl, pfx230) {
  var z_cdr$ = this['options'],
      l2pf0x = new q_h186(),
      f25x = z_cdr$['domBuilder'] || new q_dckt(),
      pf03x = z_cdr$['errorHandler'],
      p0gal = z_cdr$['locator'],
      d5tc = z_cdr$['xmlns'] || {},
      _n69e = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return p0gal && f25x['setDocumentLocator'](p0gal), l2pf0x['errorHandler'] = q_gai(pf03x, f25x, p0gal), l2pf0x['domBuilder'] = z_cdr$['domBuilder'] || f25x, /\/x?html?$/['test'](pfx230) && (_n69e['nbsp'] = '\u00a0', _n69e['copy'] = '©', d5tc[''] = 'http://www.w3.org/1999/xhtml'), d5tc['xml'] = d5tc['xml'] || 'http://www.w3.org/XML/1998/namespace', a0fl ? l2pf0x['parse'](a0fl, d5tc, _n69e) : l2pf0x['errorHandler']['error']('invalid doc source'), f25x['doc'];
}, q_dckt['prototype'] = { 'startDocument': function () {
    this['doc'] = new q_sw81()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_o9en6, iaglpb, nh4, f2l0p) {
    var zcd_$ = this['doc'],
        g7bia = zcd_$['createElementNS'](_o9en6, nh4 || iaglpb),
        gi7abv = f2l0p['length'];q_en$(this, g7bia), this['currentElement'] = g7bia, this['locator'] && q__$oen9(this['locator'], g7bia);for (var x5 = 0x0; gi7abv > x5; x5++) {
      var _o9en6 = f2l0p['getURI'](x5),
          p0afgl = f2l0p['getValue'](x5),
          nh4 = f2l0p['getQName'](x5),
          l02apf = zcd_$['createAttributeNS'](_o9en6, nh4);this['locator'] && q__$oen9(f2l0p['getLocator'](x5), l02apf), l02apf['value'] = l02apf['nodeValue'] = p0afgl, g7bia['setAttributeNode'](l02apf);
    }
  }, 'endElement': function () {
    {
      var rz_d$c = this['currentElement'];rz_d$c['tagName'];
    }this['currentElement'] = rz_d$c['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kx23, r$9e_z) {
    var ztdkcr = this['doc']['createProcessingInstruction'](kx23, r$9e_z);this['locator'] && q__$oen9(this['locator'], ztdkcr), q_en$(this, ztdkcr);
  }, 'ignorableWhitespace': function () {}, 'characters': function (sw8j1h) {
    if (sw8j1h = q_k53tx['apply'](this, arguments)) {
      if (this['cdata']) var xtk5 = this['doc']['createCDATASection'](sw8j1h);else var xtk5 = this['doc']['createTextNode'](sw8j1h);this['currentElement'] ? this['currentElement']['appendChild'](xtk5) : /^\s*$/['test'](sw8j1h) && this['doc']['appendChild'](xtk5), this['locator'] && q__$oen9(this['locator'], xtk5);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (j4s8h1) {
    (this['locator'] = j4s8h1) && (j4s8h1['lineNumber'] = 0x0);
  }, 'comment': function (k23y5) {
    k23y5 = q_k53tx['apply'](this, arguments);var f52x3 = this['doc']['createComment'](k23y5);this['locator'] && q__$oen9(this['locator'], f52x3), q_en$(this, f52x3);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (jh18, $n_oe9, gv7bai) {
    var u8jhsw = this['doc']['implementation'];if (u8jhsw && u8jhsw['createDocumentType']) {
      var cdkzr = u8jhsw['createDocumentType'](jh18, $n_oe9, gv7bai);this['locator'] && q__$oen9(this['locator'], cdkzr), q_en$(this, cdkzr);
    }
  }, 'warning': function (t5kc3y) {
    console['warn']('[xmldom warning]\t' + t5kc3y, q_o16m4n(this['locator']));
  }, 'error': function (nm4o) {
    console['error']('[xmldom error]\t' + nm4o, q_o16m4n(this['locator']));
  }, 'fatalError': function (mne9) {
    throw console['error']('[xmldom fatalError]\t' + mne9, q_o16m4n(this['locator'])), mne9;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (iabvlg) {
  q_dckt['prototype'][iabvlg] = function () {
    return null;
  };
});var q_h186 = require('./qS12q')['XMLReader'],
    q_sw81 = exports['DOMImplementation'] = require('./qqDOMq')['DOMImplementation'];exports['XMLSerializer'] = require('./qqDOMq')['XMLSerializer'], exports['DOMParser'] = q_pfbl;