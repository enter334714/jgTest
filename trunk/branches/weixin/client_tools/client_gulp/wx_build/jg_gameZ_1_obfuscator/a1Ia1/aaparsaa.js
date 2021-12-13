var C = wx.$a;
function avcqs$r(pn32e) {
  this['options'] = pn32e || { 'locator': {} };
}function a_vscqr(cj9_z, qsvcr, $qrv) {
  function kfl6y(eg23n) {
    var mz5dj = cj9_z[eg23n];!mz5dj && bo2hp && (mz5dj = 0x2 == cj9_z['length'] ? function (pne823) {
      cj9_z(eg23n, pne823);
    } : cj9_z), odith5[eg23n] = mz5dj && function (lf$k0) {
      mz5dj('[xmldom ' + eg23n + ']\t' + lf$k0 + ay17wu6($qrv));
    } || function () {};
  }if (!cj9_z) {
    if (qsvcr instanceof ad5zjm4) return qsvcr;cj9_z = qsvcr;
  }var odith5 = {},
      bo2hp = cj9_z instanceof Function;return $qrv = $qrv || {}, kfl6y('warning'), kfl6y('error'), kfl6y('fatalError'), odith5;
}function ad5zjm4() {
  this['cdata'] = !0x1;
}function aenpb82(_mc9j, z_sc9) {
  z_sc9['lineNumber'] = _mc9j['lineNumber'], z_sc9['columnNumber'] = _mc9j['columnNumber'];
}function ay17wu6(scr9_q) {
  return scr9_q ? '\x0a@' + (scr9_q['systemId'] || '') + '#[line:' + scr9_q['lineNumber'] + ',col:' + scr9_q['columnNumber'] + ']' : void 0x0;
}function avlq$rs(l0$fyk, $kfyl, it54) {
  return 'string' == typeof l0$fyk ? l0$fyk['substr']($kfyl, it54) : l0$fyk['length'] >= $kfyl + it54 || $kfyl ? new java['lang']['String'](l0$fyk, $kfyl, it54) + '' : l0$fyk;
}function abn2e(d4zmj, ohx5ti) {
  d4zmj['currentElement'] ? d4zmj['currentElement']['appendChild'](ohx5ti) : d4zmj['doc']['appendChild'](ohx5ti);
}avcqs$r['prototype']['parseFromString'] = function ($r0vq, hbpox) {
  var uwy167 = this['options'],
      zc_r9 = new aylk0$(),
      n82be = uwy167['domBuilder'] || new ad5zjm4(),
      toxb = uwy167['errorHandler'],
      d54mjz = uwy167['locator'],
      pe28bn = uwy167['xmlns'] || {},
      cm_9sz = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return d54mjz && n82be['setDocumentLocator'](d54mjz), zc_r9['errorHandler'] = a_vscqr(toxb, n82be, d54mjz), zc_r9['domBuilder'] = uwy167['domBuilder'] || n82be, /\/x?html?$/['test'](hbpox) && (cm_9sz['nbsp'] = '\u00a0', cm_9sz['copy'] = '©', pe28bn[''] = 'http://www.w3.org/1999/xhtml'), pe28bn['xml'] = pe28bn['xml'] || 'http://www.w3.org/XML/1998/namespace', $r0vq ? zc_r9['parse']($r0vq, pe28bn, cm_9sz) : zc_r9['errorHandler']['error']('invalid doc source'), n82be['doc'];
}, ad5zjm4['prototype'] = { 'startDocument': function () {
    this['doc'] = new axbo2ph()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (klq0, fklv$, c$qrsv, bpe28n) {
    var id5 = this['doc'],
        yk = id5['createElementNS'](klq0, c$qrsv || fklv$),
        lk$y0f = bpe28n['length'];abn2e(this, yk), this['currentElement'] = yk, this['locator'] && aenpb82(this['locator'], yk);for (var opb2h = 0x0; lk$y0f > opb2h; opb2h++) {
      var klq0 = bpe28n['getURI'](opb2h),
          q$vsrl = bpe28n['getValue'](opb2h),
          c$qrsv = bpe28n['getQName'](opb2h),
          l$kf = id5['createAttributeNS'](klq0, c$qrsv);this['locator'] && aenpb82(bpe28n['getLocator'](opb2h), l$kf), l$kf['value'] = l$kf['nodeValue'] = q$vsrl, yk['setAttributeNode'](l$kf);
    }
  }, 'endElement': function () {
    {
      var j_49 = this['currentElement'];j_49['tagName'];
    }this['currentElement'] = j_49['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (np2x8, l0k$fy) {
    var o5xti = this['doc']['createProcessingInstruction'](np2x8, l0k$fy);this['locator'] && aenpb82(this['locator'], o5xti), abn2e(this, o5xti);
  }, 'ignorableWhitespace': function () {}, 'characters': function (lq0r) {
    if (lq0r = avlq$rs['apply'](this, arguments)) {
      if (this['cdata']) var $rvsqc = this['doc']['createCDATASection'](lq0r);else var $rvsqc = this['doc']['createTextNode'](lq0r);this['currentElement'] ? this['currentElement']['appendChild']($rvsqc) : /^\s*$/['test'](lq0r) && this['doc']['appendChild']($rvsqc), this['locator'] && aenpb82(this['locator'], $rvsqc);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (rs9c_q) {
    (this['locator'] = rs9c_q) && (rs9c_q['lineNumber'] = 0x0);
  }, 'comment': function (mj_c) {
    mj_c = avlq$rs['apply'](this, arguments);var m4d9 = this['doc']['createComment'](mj_c);this['locator'] && aenpb82(this['locator'], m4d9), abn2e(this, m4d9);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (tix5o, bphoxt, svlr) {
    var p2n3 = this['doc']['implementation'];if (p2n3 && p2n3['createDocumentType']) {
      var phbto = p2n3['createDocumentType'](tix5o, bphoxt, svlr);this['locator'] && aenpb82(this['locator'], phbto), abn2e(this, phbto);
    }
  }, 'warning': function (c9_zs) {
    console['warn']('[xmldom warning]\t' + c9_zs, ay17wu6(this['locator']));
  }, 'error': function (t5dio) {
    console['error']('[xmldom error]\t' + t5dio, ay17wu6(this['locator']));
  }, 'fatalError': function (otixh) {
    throw console['error']('[xmldom fatalError]\t' + otixh, ay17wu6(this['locator'])), otixh;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (ith4) {
  ad5zjm4['prototype'][ith4] = function () {
    return null;
  };
});var aylk0$ = require('./aacaa')['XMLReader'],
    axbo2ph = exports['DOMImplementation'] = require('./aaDOaa')['DOMImplementation'];exports['XMLSerializer'] = require('./aaDOaa')['XMLSerializer'], exports['DOMParser'] = avcqs$r;