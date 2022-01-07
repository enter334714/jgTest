var I = wx.$R;
function r_c65nfd(fcnd) {
  this['options'] = fcnd || { 'locator': {} };
}function r_ba_u(fden, g7mwr, rgm7eq) {
  function tz32sx(i8okyj) {
    var krg7m = fden[i8okyj];!krg7m && tv0l && (krg7m = 0x2 == fden['length'] ? function (yr8k) {
      fden(i8okyj, yr8k);
    } : fden), edpfg[i8okyj] = krg7m && function ($b41a9) {
      krg7m('[xmldom ' + i8okyj + ']\t' + $b41a9 + r_xjz2i(rgm7eq));
    } || function () {};
  }if (!fden) {
    if (g7mwr instanceof r_kow8my) return g7mwr;fden = g7mwr;
  }var edpfg = {},
      tv0l = fden instanceof Function;return rgm7eq = rgm7eq || {}, tz32sx('warning'), tz32sx('error'), tz32sx('fatalError'), edpfg;
}function r_kow8my() {
  this['cdata'] = !0x1;
}function r_ioykw(d5pcn, $ba91) {
  $ba91['lineNumber'] = d5pcn['lineNumber'], $ba91['columnNumber'] = d5pcn['columnNumber'];
}function r_xjz2i(cpn5f) {
  return cpn5f ? '\x0a@' + (cpn5f['systemId'] || '') + '#[line:' + cpn5f['lineNumber'] + ',col:' + cpn5f['columnNumber'] + ']' : void 0x0;
}function r_fneqd(yjio2, pedfq, lszt2) {
  return 'string' == typeof yjio2 ? yjio2['substr'](pedfq, lszt2) : yjio2['length'] >= pedfq + lszt2 || pedfq ? new java['lang']['String'](yjio2, pedfq, lszt2) + '' : yjio2;
}function r_qpfndc(f5nc6h, ky8oj) {
  f5nc6h['currentElement'] ? f5nc6h['currentElement']['appendChild'](ky8oj) : f5nc6h['doc']['appendChild'](ky8oj);
}r_c65nfd['prototype']['parseFromString'] = function (yojx8i, u5_1h) {
  var dnpcfq = this['options'],
      kwmr8 = new r_szt3vl(),
      kym8ow = dnpcfq['domBuilder'] || new r_kow8my(),
      regp7 = dnpcfq['errorHandler'],
      ba19$u = dnpcfq['locator'],
      stz2x = dnpcfq['xmlns'] || {},
      oxiyj = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ba19$u && kym8ow['setDocumentLocator'](ba19$u), kwmr8['errorHandler'] = r_ba_u(regp7, kym8ow, ba19$u), kwmr8['domBuilder'] = dnpcfq['domBuilder'] || kym8ow, /\/x?html?$/['test'](u5_1h) && (oxiyj['nbsp'] = '\u00a0', oxiyj['copy'] = '©', stz2x[''] = 'http://www.w3.org/1999/xhtml'), stz2x['xml'] = stz2x['xml'] || 'http://www.w3.org/XML/1998/namespace', yojx8i ? kwmr8['parse'](yojx8i, stz2x, oxiyj) : kwmr8['errorHandler']['error']('invalid doc source'), kym8ow['doc'];
}, r_kow8my['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_bu_h1a()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_nc6h, izj2xs, wio8k, _b$ua1) {
    var o2ixjz = this['doc'],
        s0tl3 = o2ixjz['createElementNS'](_nc6h, wio8k || izj2xs),
        kywi8 = _b$ua1['length'];r_qpfndc(this, s0tl3), this['currentElement'] = s0tl3, this['locator'] && r_ioykw(this['locator'], s0tl3);for (var r8kmw = 0x0; kywi8 > r8kmw; r8kmw++) {
      var _nc6h = _b$ua1['getURI'](r8kmw),
          b$4a9 = _b$ua1['getValue'](r8kmw),
          wio8k = _b$ua1['getQName'](r8kmw),
          yki8w = o2ixjz['createAttributeNS'](_nc6h, wio8k);this['locator'] && r_ioykw(_b$ua1['getLocator'](r8kmw), yki8w), yki8w['value'] = yki8w['nodeValue'] = b$4a9, s0tl3['setAttributeNode'](yki8w);
    }
  }, 'endElement': function () {
    {
      var dqpnfe = this['currentElement'];dqpnfe['tagName'];
    }this['currentElement'] = dqpnfe['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (oikw8y, ojkiy) {
    var fegdpq = this['doc']['createProcessingInstruction'](oikw8y, ojkiy);this['locator'] && r_ioykw(this['locator'], fegdpq), r_qpfndc(this, fegdpq);
  }, 'ignorableWhitespace': function () {}, 'characters': function (h6_51u) {
    if (h6_51u = r_fneqd['apply'](this, arguments)) {
      if (this['cdata']) var _61auh = this['doc']['createCDATASection'](h6_51u);else var _61auh = this['doc']['createTextNode'](h6_51u);this['currentElement'] ? this['currentElement']['appendChild'](_61auh) : /^\s*$/['test'](h6_51u) && this['doc']['appendChild'](_61auh), this['locator'] && r_ioykw(this['locator'], _61auh);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (yx2ioj) {
    (this['locator'] = yx2ioj) && (yx2ioj['lineNumber'] = 0x0);
  }, 'comment': function (m7eqr) {
    m7eqr = r_fneqd['apply'](this, arguments);var xszjt2 = this['doc']['createComment'](m7eqr);this['locator'] && r_ioykw(this['locator'], xszjt2), r_qpfndc(this, xszjt2);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (fpeqnd, hub_a, wkgr7) {
    var abu1 = this['doc']['implementation'];if (abu1 && abu1['createDocumentType']) {
      var sl3 = abu1['createDocumentType'](fpeqnd, hub_a, wkgr7);this['locator'] && r_ioykw(this['locator'], sl3), r_qpfndc(this, sl3);
    }
  }, 'warning': function (me7rq) {
    console['warn']('[xmldom warning]\t' + me7rq, r_xjz2i(this['locator']));
  }, 'error': function (mwkrg7) {
    console['error']('[xmldom error]\t' + mwkrg7, r_xjz2i(this['locator']));
  }, 'fatalError': function (n6d5) {
    throw console['error']('[xmldom fatalError]\t' + n6d5, r_xjz2i(this['locator'])), n6d5;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (x2jtsz) {
  r_kow8my['prototype'][x2jtsz] = function () {
    return null;
  };
});var r_szt3vl = require('./rS12r')['XMLReader'],
    r_bu_h1a = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r_c65nfd;