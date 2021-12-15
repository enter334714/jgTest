var I = wx.$R;
function r_iokyw8(b91$4) {
  this['options'] = b91$4 || { 'locator': {} };
}function r_u9ba1$(hcn5f, au$19, h5_6nc) {
  function a19$bu(e7qp) {
    var ndpf5 = hcn5f[e7qp];!ndpf5 && ij8 && (ndpf5 = 0x2 == hcn5f['length'] ? function (c5u6) {
      hcn5f(e7qp, c5u6);
    } : hcn5f), z2tsx3[e7qp] = ndpf5 && function (_1uab$) {
      ndpf5('[xmldom ' + e7qp + ']\t' + _1uab$ + r_b941$a(h5_6nc));
    } || function () {};
  }if (!hcn5f) {
    if (au$19 instanceof r_n56fcd) return au$19;hcn5f = au$19;
  }var z2tsx3 = {},
      ij8 = hcn5f instanceof Function;return h5_6nc = h5_6nc || {}, a19$bu('warning'), a19$bu('error'), a19$bu('fatalError'), z2tsx3;
}function r_n56fcd() {
  this['cdata'] = !0x1;
}function r_mwrgk(ywok, d5cnp) {
  d5cnp['lineNumber'] = ywok['lineNumber'], d5cnp['columnNumber'] = ywok['columnNumber'];
}function r_b941$a(b$419a) {
  return b$419a ? '\x0a@' + (b$419a['systemId'] || '') + '#[line:' + b$419a['lineNumber'] + ',col:' + b$419a['columnNumber'] + ']' : void 0x0;
}function r_yk8wrm(reqpg, krwmg, au_1h) {
  return 'string' == typeof reqpg ? reqpg['substr'](krwmg, au_1h) : reqpg['length'] >= krwmg + au_1h || krwmg ? new java['lang']['String'](reqpg, krwmg, au_1h) + '' : reqpg;
}function r_au$1b(b9$ua, ym8wrk) {
  b9$ua['currentElement'] ? b9$ua['currentElement']['appendChild'](ym8wrk) : b9$ua['doc']['appendChild'](ym8wrk);
}r_iokyw8['prototype']['parseFromString'] = function (z3tvs, dn6) {
  var u_51h = this['options'],
      oix8j = new r_vs3tl(),
      xy = u_51h['domBuilder'] || new r_n56fcd(),
      pcqfn = u_51h['errorHandler'],
      ixyoj = u_51h['locator'],
      m8kr = u_51h['xmlns'] || {},
      fn5pcd = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return ixyoj && xy['setDocumentLocator'](ixyoj), oix8j['errorHandler'] = r_u9ba1$(pcqfn, xy, ixyoj), oix8j['domBuilder'] = u_51h['domBuilder'] || xy, /\/x?html?$/['test'](dn6) && (fn5pcd['nbsp'] = '\u00a0', fn5pcd['copy'] = '©', m8kr[''] = 'http://www.w3.org/1999/xhtml'), m8kr['xml'] = m8kr['xml'] || 'http://www.w3.org/XML/1998/namespace', z3tvs ? oix8j['parse'](z3tvs, m8kr, fn5pcd) : oix8j['errorHandler']['error']('invalid doc source'), xy['doc'];
}, r_n56fcd['prototype'] = { 'startDocument': function () {
    this['doc'] = new r_t0v()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (ywrk8, edpgq, pfdeq, cfpd5) {
    var _h6au = this['doc'],
        krwm7g = _h6au['createElementNS'](ywrk8, pfdeq || edpgq),
        efgdp = cfpd5['length'];r_au$1b(this, krwm7g), this['currentElement'] = krwm7g, this['locator'] && r_mwrgk(this['locator'], krwm7g);for (var eqrg7p = 0x0; efgdp > eqrg7p; eqrg7p++) {
      var ywrk8 = cfpd5['getURI'](eqrg7p),
          g7rwe = cfpd5['getValue'](eqrg7p),
          pfdeq = cfpd5['getQName'](eqrg7p),
          lv0st = _h6au['createAttributeNS'](ywrk8, pfdeq);this['locator'] && r_mwrgk(cfpd5['getLocator'](eqrg7p), lv0st), lv0st['value'] = lv0st['nodeValue'] = g7rwe, krwm7g['setAttributeNode'](lv0st);
    }
  }, 'endElement': function () {
    {
      var i2jxsz = this['currentElement'];i2jxsz['tagName'];
    }this['currentElement'] = i2jxsz['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (c5fn6d, fn6hc) {
    var wreg7m = this['doc']['createProcessingInstruction'](c5fn6d, fn6hc);this['locator'] && r_mwrgk(this['locator'], wreg7m), r_au$1b(this, wreg7m);
  }, 'ignorableWhitespace': function () {}, 'characters': function (iy8xjo) {
    if (iy8xjo = r_yk8wrm['apply'](this, arguments)) {
      if (this['cdata']) var rqe = this['doc']['createCDATASection'](iy8xjo);else var rqe = this['doc']['createTextNode'](iy8xjo);this['currentElement'] ? this['currentElement']['appendChild'](rqe) : /^\s*$/['test'](iy8xjo) && this['doc']['appendChild'](rqe), this['locator'] && r_mwrgk(this['locator'], rqe);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (nh5) {
    (this['locator'] = nh5) && (nh5['lineNumber'] = 0x0);
  }, 'comment': function (n56hf) {
    n56hf = r_yk8wrm['apply'](this, arguments);var npqf = this['doc']['createComment'](n56hf);this['locator'] && r_mwrgk(this['locator'], npqf), r_au$1b(this, npqf);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (sz2i, jyxoi2, sjx2tz) {
    var pgfd = this['doc']['implementation'];if (pgfd && pgfd['createDocumentType']) {
      var fdcn56 = pgfd['createDocumentType'](sz2i, jyxoi2, sjx2tz);this['locator'] && r_mwrgk(this['locator'], fdcn56), r_au$1b(this, fdcn56);
    }
  }, 'warning': function (_cnh6) {
    console['warn']('[xmldom warning]\t' + _cnh6, r_b941$a(this['locator']));
  }, 'error': function (rge) {
    console['error']('[xmldom error]\t' + rge, r_b941$a(this['locator']));
  }, 'fatalError': function (c5ndf) {
    throw console['error']('[xmldom fatalError]\t' + c5ndf, r_b941$a(this['locator'])), c5ndf;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (_bhu1) {
  r_n56fcd['prototype'][_bhu1] = function () {
    return null;
  };
});var r_vs3tl = require('./rS12r')['XMLReader'],
    r_t0v = exports['DOMImplementation'] = require('./rrDOMr')['DOMImplementation'];exports['XMLSerializer'] = require('./rrDOMr')['XMLSerializer'], exports['DOMParser'] = r_iokyw8;