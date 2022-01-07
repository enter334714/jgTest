var p = wx.$h;
function a_tj17(p4af7) {
  this['options'] = p4af7 || { 'locator': {} };
}function a_vxwr(ek$8h6, sj1tc5, i9yeb) {
  function sctj5(fcj1t) {
    var khe68 = ek$8h6[fcj1t];!khe68 && pxnr2 && (khe68 = 0x2 == ek$8h6['length'] ? function (f7jt1) {
      ek$8h6(fcj1t, f7jt1);
    } : ek$8h6), _hg0k8[fcj1t] = khe68 && function (ft347) {
      khe68('[xmldom ' + fcj1t + ']\t' + ft347 + a_eio9y(i9yeb));
    } || function () {};
  }if (!ek$8h6) {
    if (sj1tc5 instanceof a_$bieyo) return sj1tc5;ek$8h6 = sj1tc5;
  }var _hg0k8 = {},
      pxnr2 = ek$8h6 instanceof Function;return i9yeb = i9yeb || {}, sctj5('warning'), sctj5('error'), sctj5('fatalError'), _hg0k8;
}function a_$bieyo() {
  this['cdata'] = !0x1;
}function a_jtsf1(wapr2, yzoqb9) {
  yzoqb9['lineNumber'] = wapr2['lineNumber'], yzoqb9['columnNumber'] = wapr2['columnNumber'];
}function a_eio9y(i6yeb) {
  return i6yeb ? '\x0a@' + (i6yeb['systemId'] || '') + '#[line:' + i6yeb['lineNumber'] + ',col:' + i6yeb['columnNumber'] + ']' : void 0x0;
}function a_i6$b(rvw, j1t3fs, e6$ib) {
  return 'string' == typeof rvw ? rvw['substr'](j1t3fs, e6$ib) : rvw['length'] >= j1t3fs + e6$ib || j1t3fs ? new java['lang']['String'](rvw, j1t3fs, e6$ib) + '' : rvw;
}function a_p3f47a(awp7, pnrwa) {
  awp7['currentElement'] ? awp7['currentElement']['appendChild'](pnrwa) : awp7['doc']['appendChild'](pnrwa);
}a_tj17['prototype']['parseFromString'] = function (s5ct1, s3tjf1) {
  var ms15cd = this['options'],
      d51cts = new a_ie8$6(),
      gh = ms15cd['domBuilder'] || new a_$bieyo(),
      q9bzoy = ms15cd['errorHandler'],
      t3fs = ms15cd['locator'],
      jf7a43 = ms15cd['xmlns'] || {},
      wpn2x = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return t3fs && gh['setDocumentLocator'](t3fs), d51cts['errorHandler'] = a_vxwr(q9bzoy, gh, t3fs), d51cts['domBuilder'] = ms15cd['domBuilder'] || gh, /\/x?html?$/['test'](s3tjf1) && (wpn2x['nbsp'] = '\u00a0', wpn2x['copy'] = '©', jf7a43[''] = 'http://www.w3.org/1999/xhtml'), jf7a43['xml'] = jf7a43['xml'] || 'http://www.w3.org/XML/1998/namespace', s5ct1 ? d51cts['parse'](s5ct1, jf7a43, wpn2x) : d51cts['errorHandler']['error']('invalid doc source'), gh['doc'];
}, a_$bieyo['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_xn2vr()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_h80vg, $oeiyb, $ki, xvwr2n) {
    var kh_80 = this['doc'],
        $h068 = kh_80['createElementNS'](_h80vg, $ki || $oeiyb),
        dsc1t = xvwr2n['length'];a_p3f47a(this, $h068), this['currentElement'] = $h068, this['locator'] && a_jtsf1(this['locator'], $h068);for (var $6ike8 = 0x0; dsc1t > $6ike8; $6ike8++) {
      var _h80vg = xvwr2n['getURI']($6ike8),
          ieb$o = xvwr2n['getValue']($6ike8),
          $ki = xvwr2n['getQName']($6ike8),
          _vg0x = kh_80['createAttributeNS'](_h80vg, $ki);this['locator'] && a_jtsf1(xvwr2n['getLocator']($6ike8), _vg0x), _vg0x['value'] = _vg0x['nodeValue'] = ieb$o, $h068['setAttributeNode'](_vg0x);
    }
  }, 'endElement': function () {
    {
      var sc51jt = this['currentElement'];sc51jt['tagName'];
    }this['currentElement'] = sc51jt['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (eiyb, $k86h) {
    var o9ybie = this['doc']['createProcessingInstruction'](eiyb, $k86h);this['locator'] && a_jtsf1(this['locator'], o9ybie), a_p3f47a(this, o9ybie);
  }, 'ignorableWhitespace': function () {}, 'characters': function (_vnxg) {
    if (_vnxg = a_i6$b['apply'](this, arguments)) {
      if (this['cdata']) var ki6e = this['doc']['createCDATASection'](_vnxg);else var ki6e = this['doc']['createTextNode'](_vnxg);this['currentElement'] ? this['currentElement']['appendChild'](ki6e) : /^\s*$/['test'](_vnxg) && this['doc']['appendChild'](ki6e), this['locator'] && a_jtsf1(this['locator'], ki6e);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (k$h086) {
    (this['locator'] = k$h086) && (k$h086['lineNumber'] = 0x0);
  }, 'comment': function (x2rpw) {
    x2rpw = a_i6$b['apply'](this, arguments);var cj1t5s = this['doc']['createComment'](x2rpw);this['locator'] && a_jtsf1(this['locator'], cj1t5s), a_p3f47a(this, cj1t5s);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (npwa, xp2wrn, cd5st1) {
    var scjt15 = this['doc']['implementation'];if (scjt15 && scjt15['createDocumentType']) {
      var m1dc = scjt15['createDocumentType'](npwa, xp2wrn, cd5st1);this['locator'] && a_jtsf1(this['locator'], m1dc), a_p3f47a(this, m1dc);
    }
  }, 'warning': function (j1sct5) {
    console['warn']('[xmldom warning]\t' + j1sct5, a_eio9y(this['locator']));
  }, 'error': function (iey6$b) {
    console['error']('[xmldom error]\t' + iey6$b, a_eio9y(this['locator']));
  }, 'fatalError': function (tf1j73) {
    throw console['error']('[xmldom fatalError]\t' + tf1j73, a_eio9y(this['locator'])), tf1j73;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (wvrn2x) {
  a_$bieyo['prototype'][wvrn2x] = function () {
    return null;
  };
});var a_ie8$6 = require('./cccsax')['XMLReader'],
    a_xn2vr = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_tj17;