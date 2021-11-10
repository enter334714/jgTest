var p = wx.$h;
function a_t5d1s(pa2nw) {
  this['options'] = pa2nw || { 'locator': {} };
}function a_w37a(rnpw2a, s5d1ct, lmsd5c) {
  function eik68(g_x2) {
    var cs15 = rnpw2a[g_x2];!cs15 && a743 && (cs15 = 0x2 == rnpw2a['length'] ? function (r4npa) {
      rnpw2a(g_x2, r4npa);
    } : rnpw2a), oyib$[g_x2] = cs15 && function (n2xrvw) {
      cs15('[xmldom ' + g_x2 + ']\t' + n2xrvw + a_c5s1t(lmsd5c));
    } || function () {};
  }if (!rnpw2a) {
    if (s5d1ct instanceof a_hk$e8) return s5d1ct;rnpw2a = s5d1ct;
  }var oyib$ = {},
      a743 = rnpw2a instanceof Function;return lmsd5c = lmsd5c || {}, eik68('warning'), eik68('error'), eik68('fatalError'), oyib$;
}function a_hk$e8() {
  this['cdata'] = !0x1;
}function a_m1scd5(xr2wnv, _xg0h) {
  _xg0h['lineNumber'] = xr2wnv['lineNumber'], _xg0h['columnNumber'] = xr2wnv['columnNumber'];
}function a_c5s1t(v_xg2n) {
  return v_xg2n ? '\x0a@' + (v_xg2n['systemId'] || '') + '#[line:' + v_xg2n['lineNumber'] + ',col:' + v_xg2n['columnNumber'] + ']' : void 0x0;
}function a__x0ghv(td1s5c, vgx_20, dcs5m1) {
  return 'string' == typeof td1s5c ? td1s5c['substr'](vgx_20, dcs5m1) : td1s5c['length'] >= vgx_20 + dcs5m1 || vgx_20 ? new java['lang']['String'](td1s5c, vgx_20, dcs5m1) + '' : td1s5c;
}function a_hx0(io$by, _xn2vg) {
  io$by['currentElement'] ? io$by['currentElement']['appendChild'](_xn2vg) : io$by['doc']['appendChild'](_xn2vg);
}a_t5d1s['prototype']['parseFromString'] = function (tj47f, d51cst) {
  var gvn_2x = this['options'],
      _vgh0 = new a_p4rwna(),
      kh0g8_ = gvn_2x['domBuilder'] || new a_hk$e8(),
      $yeki6 = gvn_2x['errorHandler'],
      t1s3f = gvn_2x['locator'],
      mscl = gvn_2x['xmlns'] || {},
      tscd15 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return t1s3f && kh0g8_['setDocumentLocator'](t1s3f), _vgh0['errorHandler'] = a_w37a($yeki6, kh0g8_, t1s3f), _vgh0['domBuilder'] = gvn_2x['domBuilder'] || kh0g8_, /\/x?html?$/['test'](d51cst) && (tscd15['nbsp'] = '\u00a0', tscd15['copy'] = '©', mscl[''] = 'http://www.w3.org/1999/xhtml'), mscl['xml'] = mscl['xml'] || 'http://www.w3.org/XML/1998/namespace', tj47f ? _vgh0['parse'](tj47f, mscl, tscd15) : _vgh0['errorHandler']['error']('invalid doc source'), kh0g8_['doc'];
}, a_hk$e8['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_anw2p()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (yk$e6i, ja3f, wr4p, csld5m) {
    var j3f7a4 = this['doc'],
        h8_0k = j3f7a4['createElementNS'](yk$e6i, wr4p || ja3f),
        hgk = csld5m['length'];a_hx0(this, h8_0k), this['currentElement'] = h8_0k, this['locator'] && a_m1scd5(this['locator'], h8_0k);for (var vn2rx = 0x0; hgk > vn2rx; vn2rx++) {
      var yk$e6i = csld5m['getURI'](vn2rx),
          vh_g0 = csld5m['getValue'](vn2rx),
          wr4p = csld5m['getQName'](vn2rx),
          mscl5d = j3f7a4['createAttributeNS'](yk$e6i, wr4p);this['locator'] && a_m1scd5(csld5m['getLocator'](vn2rx), mscl5d), mscl5d['value'] = mscl5d['nodeValue'] = vh_g0, h8_0k['setAttributeNode'](mscl5d);
    }
  }, 'endElement': function () {
    {
      var oi9zby = this['currentElement'];oi9zby['tagName'];
    }this['currentElement'] = oi9zby['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c5dlms, k8gh_) {
    var ftjc1s = this['doc']['createProcessingInstruction'](c5dlms, k8gh_);this['locator'] && a_m1scd5(this['locator'], ftjc1s), a_hx0(this, ftjc1s);
  }, 'ignorableWhitespace': function () {}, 'characters': function (h80$k6) {
    if (h80$k6 = a__x0ghv['apply'](this, arguments)) {
      if (this['cdata']) var ap2r = this['doc']['createCDATASection'](h80$k6);else var ap2r = this['doc']['createTextNode'](h80$k6);this['currentElement'] ? this['currentElement']['appendChild'](ap2r) : /^\s*$/['test'](h80$k6) && this['doc']['appendChild'](ap2r), this['locator'] && a_m1scd5(this['locator'], ap2r);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (oe$iby) {
    (this['locator'] = oe$iby) && (oe$iby['lineNumber'] = 0x0);
  }, 'comment': function ($ioybe) {
    $ioybe = a__x0ghv['apply'](this, arguments);var cftj1s = this['doc']['createComment']($ioybe);this['locator'] && a_m1scd5(this['locator'], cftj1s), a_hx0(this, cftj1s);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (fj3t4, h8v_g, $ebi) {
    var oibey = this['doc']['implementation'];if (oibey && oibey['createDocumentType']) {
      var iy6e$ = oibey['createDocumentType'](fj3t4, h8v_g, $ebi);this['locator'] && a_m1scd5(this['locator'], iy6e$), a_hx0(this, iy6e$);
    }
  }, 'warning': function (af7j43) {
    console['warn']('[xmldom warning]\t' + af7j43, a_c5s1t(this['locator']));
  }, 'error': function (xr_nv2) {
    console['error']('[xmldom error]\t' + xr_nv2, a_c5s1t(this['locator']));
  }, 'fatalError': function (ybzq) {
    throw console['error']('[xmldom fatalError]\t' + ybzq, a_c5s1t(this['locator'])), ybzq;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (oi9yz) {
  a_hk$e8['prototype'][oi9yz] = function () {
    return null;
  };
});var a_p4rwna = require('./cccsax')['XMLReader'],
    a_anw2p = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_t5d1s;