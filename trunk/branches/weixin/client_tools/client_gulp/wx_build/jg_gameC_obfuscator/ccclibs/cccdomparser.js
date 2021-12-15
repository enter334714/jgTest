var p = wx.$h;
function a_wrna4(rnpw2x) {
  this['options'] = rnpw2x || { 'locator': {} };
}function a_$ie6ky(kei8$6, sj1t, npwra2) {
  function $h86ek(n_2gx) {
    var bye$i = kei8$6[n_2gx];!bye$i && $hke86 && (bye$i = 0x2 == kei8$6['length'] ? function (xwpnr2) {
      kei8$6(n_2gx, xwpnr2);
    } : kei8$6), qboy[n_2gx] = bye$i && function (g2v_xn) {
      bye$i('[xmldom ' + n_2gx + ']\t' + g2v_xn + a_cs15t(npwra2));
    } || function () {};
  }if (!kei8$6) {
    if (sj1t instanceof a_i9byoe) return sj1t;kei8$6 = sj1t;
  }var qboy = {},
      $hke86 = kei8$6 instanceof Function;return npwra2 = npwra2 || {}, $h86ek('warning'), $h86ek('error'), $h86ek('fatalError'), qboy;
}function a_i9byoe() {
  this['cdata'] = !0x1;
}function a_nrx2wv(k86i, v0h8_g) {
  v0h8_g['lineNumber'] = k86i['lineNumber'], v0h8_g['columnNumber'] = k86i['columnNumber'];
}function a_cs15t(mlcsd) {
  return mlcsd ? '\x0a@' + (mlcsd['systemId'] || '') + '#[line:' + mlcsd['lineNumber'] + ',col:' + mlcsd['columnNumber'] + ']' : void 0x0;
}function a_zq9yo(npw, _vrxn2, rwvxn2) {
  return 'string' == typeof npw ? npw['substr'](_vrxn2, rwvxn2) : npw['length'] >= _vrxn2 + rwvxn2 || _vrxn2 ? new java['lang']['String'](npw, _vrxn2, rwvxn2) + '' : npw;
}function a_a74fj3(lmsd5, w2pxnr) {
  lmsd5['currentElement'] ? lmsd5['currentElement']['appendChild'](w2pxnr) : lmsd5['doc']['appendChild'](w2pxnr);
}a_wrna4['prototype']['parseFromString'] = function (ts51, mdlcs5) {
  var j1ft = this['options'],
      _vxg0 = new a_obyq9z(),
      f1tsj3 = j1ft['domBuilder'] || new a_i9byoe(),
      rnv_2x = j1ft['errorHandler'],
      h8k_ = j1ft['locator'],
      a7pr4w = j1ft['xmlns'] || {},
      b$ei6y = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return h8k_ && f1tsj3['setDocumentLocator'](h8k_), _vxg0['errorHandler'] = a_$ie6ky(rnv_2x, f1tsj3, h8k_), _vxg0['domBuilder'] = j1ft['domBuilder'] || f1tsj3, /\/x?html?$/['test'](mdlcs5) && (b$ei6y['nbsp'] = '\u00a0', b$ei6y['copy'] = '©', a7pr4w[''] = 'http://www.w3.org/1999/xhtml'), a7pr4w['xml'] = a7pr4w['xml'] || 'http://www.w3.org/XML/1998/namespace', ts51 ? _vxg0['parse'](ts51, a7pr4w, b$ei6y) : _vxg0['errorHandler']['error']('invalid doc source'), f1tsj3['doc'];
}, a_i9byoe['prototype'] = { 'startDocument': function () {
    this['doc'] = new a_ob9zqy()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (rawp2, izyob9, xvrwn2, px) {
    var k$eiy6 = this['doc'],
        nw2xrv = k$eiy6['createElementNS'](rawp2, xvrwn2 || izyob9),
        mdcl = px['length'];a_a74fj3(this, nw2xrv), this['currentElement'] = nw2xrv, this['locator'] && a_nrx2wv(this['locator'], nw2xrv);for (var sj5 = 0x0; mdcl > sj5; sj5++) {
      var rawp2 = px['getURI'](sj5),
          g_2xv0 = px['getValue'](sj5),
          xvrwn2 = px['getQName'](sj5),
          fp37a = k$eiy6['createAttributeNS'](rawp2, xvrwn2);this['locator'] && a_nrx2wv(px['getLocator'](sj5), fp37a), fp37a['value'] = fp37a['nodeValue'] = g_2xv0, nw2xrv['setAttributeNode'](fp37a);
    }
  }, 'endElement': function () {
    {
      var sc5tj = this['currentElement'];sc5tj['tagName'];
    }this['currentElement'] = sc5tj['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (x_g2n, y$eio) {
    var wr7p = this['doc']['createProcessingInstruction'](x_g2n, y$eio);this['locator'] && a_nrx2wv(this['locator'], wr7p), a_a74fj3(this, wr7p);
  }, 'ignorableWhitespace': function () {}, 'characters': function (a2wr) {
    if (a2wr = a_zq9yo['apply'](this, arguments)) {
      if (this['cdata']) var fjc1 = this['doc']['createCDATASection'](a2wr);else var fjc1 = this['doc']['createTextNode'](a2wr);this['currentElement'] ? this['currentElement']['appendChild'](fjc1) : /^\s*$/['test'](a2wr) && this['doc']['appendChild'](fjc1), this['locator'] && a_nrx2wv(this['locator'], fjc1);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rw2na) {
    (this['locator'] = rw2na) && (rw2na['lineNumber'] = 0x0);
  }, 'comment': function (fsc) {
    fsc = a_zq9yo['apply'](this, arguments);var p7awr4 = this['doc']['createComment'](fsc);this['locator'] && a_nrx2wv(this['locator'], p7awr4), a_a74fj3(this, p7awr4);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (xv0g2_, hvg8_, sjt13f) {
    var xrv2_ = this['doc']['implementation'];if (xrv2_ && xrv2_['createDocumentType']) {
      var fa7p43 = xrv2_['createDocumentType'](xv0g2_, hvg8_, sjt13f);this['locator'] && a_nrx2wv(this['locator'], fa7p43), a_a74fj3(this, fa7p43);
    }
  }, 'warning': function (a2pnwr) {
    console['warn']('[xmldom warning]\t' + a2pnwr, a_cs15t(this['locator']));
  }, 'error': function (qoby9) {
    console['error']('[xmldom error]\t' + qoby9, a_cs15t(this['locator']));
  }, 'fatalError': function (iyk6) {
    throw console['error']('[xmldom fatalError]\t' + iyk6, a_cs15t(this['locator'])), iyk6;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (prwa) {
  a_i9byoe['prototype'][prwa] = function () {
    return null;
  };
});var a_obyq9z = require('./cccsax')['XMLReader'],
    a_ob9zqy = exports['DOMImplementation'] = require('./cccdom')['DOMImplementation'];exports['XMLSerializer'] = require('./cccdom')['XMLSerializer'], exports['DOMParser'] = a_wrna4;