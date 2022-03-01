var G = wx.$E;
function E$c4m7(rfwv7) {
  this['options'] = rfwv7 || { 'locator': {} };
}function Ec465$k(raqh, nxly, a9qr) {
  function qauv9r(d1i_s) {
    var wvm7 = raqh[d1i_s];!wvm7 && bc6$4 && (wvm7 = 0x2 == raqh['length'] ? function (mcf4b) {
      raqh(d1i_s, mcf4b);
    } : raqh), c$bmk[d1i_s] = wvm7 && function (s_t023) {
      wvm7('[xmldom ' + d1i_s + ']\t' + s_t023 + Ek$c6(a9qr));
    } || function () {};
  }if (!raqh) {
    if (nxly instanceof Ew78bm) return nxly;raqh = nxly;
  }var c$bmk = {},
      bc6$4 = raqh instanceof Function;return a9qr = a9qr || {}, qauv9r('warning'), qauv9r('error'), qauv9r('fatalError'), c$bmk;
}function Ew78bm() {
  this['cdata'] = !0x1;
}function Ewf78m(b8fm74, vwf87) {
  vwf87['lineNumber'] = b8fm74['lineNumber'], vwf87['columnNumber'] = b8fm74['columnNumber'];
}function Ek$c6(fw8mb) {
  return fw8mb ? '\x0a@' + (fw8mb['systemId'] || '') + '#[line:' + fw8mb['lineNumber'] + ',col:' + fw8mb['columnNumber'] + ']' : void 0x0;
}function E$456(i2st1, m7w8b, z03ts2) {
  return 'string' == typeof i2st1 ? i2st1['substr'](m7w8b, z03ts2) : i2st1['length'] >= m7w8b + z03ts2 || m7w8b ? new java['lang']['String'](i2st1, m7w8b, z03ts2) + '' : i2st1;
}function Ewvm7f(c$b, wb78fm) {
  c$b['currentElement'] ? c$b['currentElement']['appendChild'](wb78fm) : c$b['doc']['appendChild'](wb78fm);
}E$c4m7['prototype']['parseFromString'] = function (uah9gq, t0z2s3) {
  var $6cj = this['options'],
      fq8vr = new Ewqvrau(),
      lhnpy = $6cj['domBuilder'] || new Ew78bm(),
      aw8rq = $6cj['errorHandler'],
      ki6d = $6cj['locator'],
      aur = $6cj['xmlns'] || {},
      i_ts21 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ki6d && lhnpy['setDocumentLocator'](ki6d), fq8vr['errorHandler'] = Ec465$k(aw8rq, lhnpy, ki6d), fq8vr['domBuilder'] = $6cj['domBuilder'] || lhnpy, /\/x?html?$/['test'](t0z2s3) && (i_ts21['nbsp'] = '\u00a0', i_ts21['copy'] = '©', aur[''] = 'http://www.w3.org/1999/xhtml'), aur['xml'] = aur['xml'] || 'http://www.w3.org/XML/1998/namespace', uah9gq ? fq8vr['parse'](uah9gq, aur, i_ts21) : fq8vr['errorHandler']['error']('invalid doc source'), lhnpy['doc'];
}, Ew78bm['prototype'] = { 'startDocument': function () {
    this['doc'] = new Evq8raw()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (wfr78v, stid, cbm$k4, $mbc74) {
    var frw78 = this['doc'],
        awrvu = frw78['createElementNS'](wfr78v, cbm$k4 || stid),
        ji6d1 = $mbc74['length'];Ewvm7f(this, awrvu), this['currentElement'] = awrvu, this['locator'] && Ewf78m(this['locator'], awrvu);for (var t2s0_3 = 0x0; ji6d1 > t2s0_3; t2s0_3++) {
      var wfr78v = $mbc74['getURI'](t2s0_3),
          b4m78f = $mbc74['getValue'](t2s0_3),
          cbm$k4 = $mbc74['getQName'](t2s0_3),
          di_j1t = frw78['createAttributeNS'](wfr78v, cbm$k4);this['locator'] && Ewf78m($mbc74['getLocator'](t2s0_3), di_j1t), di_j1t['value'] = di_j1t['nodeValue'] = b4m78f, awrvu['setAttributeNode'](di_j1t);
    }
  }, 'endElement': function () {
    {
      var $mcb74 = this['currentElement'];$mcb74['tagName'];
    }this['currentElement'] = $mcb74['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (d6ijk, ngyxlp) {
    var _sti1d = this['doc']['createProcessingInstruction'](d6ijk, ngyxlp);this['locator'] && Ewf78m(this['locator'], _sti1d), Ewvm7f(this, _sti1d);
  }, 'ignorableWhitespace': function () {}, 'characters': function (pnh9g) {
    if (pnh9g = E$456['apply'](this, arguments)) {
      if (this['cdata']) var qvarwu = this['doc']['createCDATASection'](pnh9g);else var qvarwu = this['doc']['createTextNode'](pnh9g);this['currentElement'] ? this['currentElement']['appendChild'](qvarwu) : /^\s*$/['test'](pnh9g) && this['doc']['appendChild'](qvarwu), this['locator'] && Ewf78m(this['locator'], qvarwu);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (bkmc$4) {
    (this['locator'] = bkmc$4) && (bkmc$4['lineNumber'] = 0x0);
  }, 'comment': function (jtdi) {
    jtdi = E$456['apply'](this, arguments);var t0z23 = this['doc']['createComment'](jtdi);this['locator'] && Ewf78m(this['locator'], t0z23), Ewvm7f(this, t0z23);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (ijd15, qarwv, g9npy) {
    var plyhgn = this['doc']['implementation'];if (plyhgn && plyhgn['createDocumentType']) {
      var mk4bc$ = plyhgn['createDocumentType'](ijd15, qarwv, g9npy);this['locator'] && Ewf78m(this['locator'], mk4bc$), Ewvm7f(this, mk4bc$);
    }
  }, 'warning': function (bf4cm) {
    console['warn']('[xmldom warning]\t' + bf4cm, Ek$c6(this['locator']));
  }, 'error': function (nyh9gp) {
    console['error']('[xmldom error]\t' + nyh9gp, Ek$c6(this['locator']));
  }, 'fatalError': function (s_tdi1) {
    throw console['error']('[xmldom fatalError]\t' + s_tdi1, Ek$c6(this['locator'])), s_tdi1;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (b8fwm7) {
  Ew78bm['prototype'][b8fwm7] = function () {
    return null;
  };
});var Ewqvrau = require('./DD88DD88cDD88DD88')['XMLReader'],
    Evq8raw = exports['DOMImplementation'] = require('./DD88DD88DODD88DD88')['DOMImplementation'];exports['XMLSerializer'] = require('./DD88DD88DODD88DD88')['XMLSerializer'], exports['DOMParser'] = E$c4m7;