var k = wx.$f;
function fym1a(c1i6yo) {
  this['options'] = c1i6yo || { 'locator': {} };
}function fo98b1(jrgz4, bc16, un0_s) {
  function h5n0uw(dkus_) {
    var gksr4 = jrgz4[dkus_];!gksr4 && yc16o8 && (gksr4 = 0x2 == jrgz4['length'] ? function (k_snd) {
      jrgz4(dkus_, k_snd);
    } : jrgz4), wq2pe[dkus_] = gksr4 ? function (co6y1) {
      gksr4('[xmldom ' + dkus_ + ']\t' + co6y1 + fsgr4(un0_s));
    } : function () {};
  }if (!jrgz4) {
    if (bc16 instanceof fio6c1) return bc16;jrgz4 = bc16;
  }var wq2pe = {},
      yc16o8 = jrgz4 instanceof Function;return un0_s = un0_s || {}, h5n0uw('warning'), h5n0uw('error'), h5n0uw('fatalError'), wq2pe;
}function fio6c1() {
  this['cdata'] = !0x1;
}function fw5qp(tyimv, gsrk$) {
  gsrk$['lineNumber'] = tyimv['lineNumber'], gsrk$['columnNumber'] = tyimv['columnNumber'];
}function fsgr4(nsd0_u) {
  return nsd0_u ? '\x0a@' + (nsd0_u['systemId'] || '') + '#[line:' + nsd0_u['lineNumber'] + ',col:' + nsd0_u['columnNumber'] + ']' : void 0x0;
}function fs4rk$(k_s4$, hu0n, qmati) {
  return 'string' == typeof k_s4$ ? k_s4$['substr'](hu0n, qmati) : k_s4$['length'] >= hu0n + qmati || hu0n ? new java['lang']['String'](k_s4$, hu0n, qmati) + '' : k_s4$;
}function fvtmpa(z4rjx, zjx3g) {
  (z4rjx['currentElement'] || z4rjx['doc'])['appendChild'](zjx3g);
}fym1a['prototype']['parseFromString'] = function (p5h2ew, rz4$jg) {
  var cya1oi = this['options'],
      tpvem = new femvqpt(),
      rk$sg4 = cya1oi['domBuilder'] || new fio6c1(),
      o698b = cya1oi['errorHandler'],
      pvtq2 = cya1oi['locator'],
      qpamvt = cya1oi['xmlns'] || {},
      myavt = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return pvtq2 && rk$sg4['setDocumentLocator'](pvtq2), tpvem['errorHandler'] = fo98b1(o698b, rk$sg4, pvtq2), tpvem['domBuilder'] = cya1oi['domBuilder'] || rk$sg4, /\/x?html?$/['test'](rz4$jg) && (myavt['nbsp'] = '\u00a0', myavt['copy'] = '©', qpamvt[''] = 'http://www.w3.org/1999/xhtml'), qpamvt['xml'] = qpamvt['xml'] || 'http://www.w3.org/XML/1998/namespace', p5h2ew ? tpvem['parse'](p5h2ew, qpamvt, myavt) : tpvem['errorHandler']['error']('invalid doc source'), rk$sg4['doc'];
}, fio6c1['prototype'] = { 'startDocument': function () {
    this['doc'] = new fo1cay()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (vqpe2t, $ks_d4, qitv, weh025) {
    var amci = this['doc'],
        b796f8 = amci['createElementNS'](vqpe2t, qitv || $ks_d4),
        $ksu_ = weh025['length'];fvtmpa(this, b796f8), this['currentElement'] = b796f8, this['locator'] && fw5qp(this['locator'], b796f8);for (var emtpvq = 0x0; emtpvq < $ksu_; emtpvq++) {
      var vqpe2t = weh025['getURI'](emtpvq),
          ci1mya = weh025['getValue'](emtpvq),
          qitv = weh025['getQName'](emtpvq),
          n0w25 = amci['createAttributeNS'](vqpe2t, qitv);this['locator'] && fw5qp(weh025['getLocator'](emtpvq), n0w25), n0w25['value'] = n0w25['nodeValue'] = ci1mya, b796f8['setAttributeNode'](n0w25);
    }
  }, 'endElement': function () {
    var iyc1 = this['currentElement'];iyc1['tagName'], this['currentElement'] = iyc1['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function ($d4kr, qtvp2e) {
    qtvp2e = this['doc']['createProcessingInstruction']($d4kr, qtvp2e), (this['locator'] && fw5qp(this['locator'], qtvp2e), fvtmpa(this, qtvp2e));
  }, 'ignorableWhitespace': function () {}, 'characters': function (mciy1a) {
    var ew2pt;(mciy1a = fs4rk$['apply'](this, arguments)) && (ew2pt = this['cdata'] ? this['doc']['createCDATASection'](mciy1a) : this['doc']['createTextNode'](mciy1a), this['currentElement'] ? this['currentElement']['appendChild'](ew2pt) : /^\s*$/['test'](mciy1a) && this['doc']['appendChild'](ew2pt), this['locator'] && fw5qp(this['locator'], ew2pt));
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (n2w5h) {
    (this['locator'] = n2w5h) && (n2w5h['lineNumber'] = 0x0);
  }, 'comment': function (r$j4zg) {
    r$j4zg = fs4rk$['apply'](this, arguments);var qtpe = this['doc']['createComment'](r$j4zg);this['locator'] && fw5qp(this['locator'], qtpe), fvtmpa(this, qtpe);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (qp52e, f896b7, h5w0u) {
    var $dk4_ = this['doc']['implementation'];$dk4_ && $dk4_['createDocumentType'] && (h5w0u = $dk4_['createDocumentType'](qp52e, f896b7, h5w0u), this['locator'] && fw5qp(this['locator'], h5w0u), fvtmpa(this, h5w0u));
  }, 'warning': function (kgr$s4) {
    console['warn']('[xmldom warning]\t' + kgr$s4, fsgr4(this['locator']));
  }, 'error': function (y1imca) {
    console['error']('[xmldom error]\t' + y1imca, fsgr4(this['locator']));
  }, 'fatalError': function (jgr3xz) {
    throw console['error']('[xmldom fatalError]\t' + jgr3xz, fsgr4(this['locator'])), jgr3xz;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (qpte2w) {
  fio6c1['prototype'][qpte2w] = function () {
    return null;
  };
});var femvqpt = require('./fffsax')['XMLReader'],
    fo1cay = exports['DOMImplementation'] = require('./fffdom')['DOMImplementation'];exports['XMLSerializer'] = require('./fffdom')['XMLSerializer'], exports['DOMParser'] = fym1a;