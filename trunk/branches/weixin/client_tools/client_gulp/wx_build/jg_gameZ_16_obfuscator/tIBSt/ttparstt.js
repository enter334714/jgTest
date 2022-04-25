var W = wx.$l;
function L9c9exk_(_9ckx) {
  this['options'] = _9ckx || { 'locator': {} };
}function L9m08($l3sq, e_x9ck, sf2$lq) {
  function m0ro8(d1juh) {
    var l36pt = $l3sq[d1juh];!l36pt && k2f7w && (l36pt = 0x2 == $l3sq['length'] ? function (dbz45a) {
      $l3sq(d1juh, dbz45a);
    } : $l3sq), py6tl3[d1juh] = l36pt && function (zd5b4a) {
      l36pt('[xmldom ' + d1juh + ']\t' + zd5b4a + L9ekx9_(sf2$lq));
    } || function () {};
  }if (!$l3sq) {
    if (e_x9ck instanceof L9cw7fek) return e_x9ck;$l3sq = e_x9ck;
  }var py6tl3 = {},
      k2f7w = $l3sq instanceof Function;return sf2$lq = sf2$lq || {}, m0ro8('warning'), m0ro8('error'), m0ro8('fatalError'), py6tl3;
}function L9cw7fek() {
  this['cdata'] = !0x1;
}function L9oigm8(ef7kc, i04nmr) {
  i04nmr['lineNumber'] = ef7kc['lineNumber'], i04nmr['columnNumber'] = ef7kc['columnNumber'];
}function L9ekx9_(s7$2w) {
  return s7$2w ? '\x0a@' + (s7$2w['systemId'] || '') + '#[line:' + s7$2w['lineNumber'] + ',col:' + s7$2w['columnNumber'] + ']' : void 0x0;
}function L9ptl3qy(e_k9x, r0mo, lpyqt3) {
  return 'string' == typeof e_k9x ? e_k9x['substr'](r0mo, lpyqt3) : e_k9x['length'] >= r0mo + lpyqt3 || r0mo ? new java['lang']['String'](e_k9x, r0mo, lpyqt3) + '' : e_k9x;
}function L9ylpq3(mr8gi, i0nm45) {
  mr8gi['currentElement'] ? mr8gi['currentElement']['appendChild'](i0nm45) : mr8gi['doc']['appendChild'](i0nm45);
}L9c9exk_['prototype']['parseFromString'] = function (ck_xw, f27wk) {
  var kwc = this['options'],
      ypql3t = new L9oigr8m(),
      ws7f2$ = kwc['domBuilder'] || new L9cw7fek(),
      $f27 = kwc['errorHandler'],
      x_ekwc = kwc['locator'],
      dabz54 = kwc['xmlns'] || {},
      ypl$q3 = { 'lt': '<', 'gt': '>', 'amp': '&', 'quot': '\x22', 'apos': '\x27' };return x_ekwc && ws7f2$['setDocumentLocator'](x_ekwc), ypql3t['errorHandler'] = L9m08($f27, ws7f2$, x_ekwc), ypql3t['domBuilder'] = kwc['domBuilder'] || ws7f2$, /\/x?html?$/['test'](f27wk) && (ypl$q3['nbsp'] = '\u00a0', ypl$q3['copy'] = '©', dabz54[''] = 'http://www.w3.org/1999/xhtml'), dabz54['xml'] = dabz54['xml'] || 'http://www.w3.org/XML/1998/namespace', ck_xw ? ypql3t['parse'](ck_xw, dabz54, ypl$q3) : ypql3t['errorHandler']['error']('invalid doc source'), ws7f2$['doc'];
}, L9cw7fek['prototype'] = { 'startDocument': function () {
    this['doc'] = new L9na4b5()['createDocument'](null, null, null), this['locator'] && (this['doc']['documentURI'] = this['locator']['systemId']);
  }, 'startElement': function (_9kxc, iorg6, lyp3t6, s72) {
    var zb54d = this['doc'],
        tyl3q = zb54d['createElementNS'](_9kxc, lyp3t6 || iorg6),
        z40a5 = s72['length'];L9ylpq3(this, tyl3q), this['currentElement'] = tyl3q, this['locator'] && L9oigm8(this['locator'], tyl3q);for (var g63t = 0x0; z40a5 > g63t; g63t++) {
      var _9kxc = s72['getURI'](g63t),
          f72ckw = s72['getValue'](g63t),
          lyp3t6 = s72['getQName'](g63t),
          vz1jdb = zb54d['createAttributeNS'](_9kxc, lyp3t6);this['locator'] && L9oigm8(s72['getLocator'](g63t), vz1jdb), vz1jdb['value'] = vz1jdb['nodeValue'] = f72ckw, tyl3q['setAttributeNode'](vz1jdb);
    }
  }, 'endElement': function () {
    {
      var ewc7fk = this['currentElement'];ewc7fk['tagName'];
    }this['currentElement'] = ewc7fk['parentNode'];
  }, 'startPrefixMapping': function () {}, 'endPrefixMapping': function () {}, 'processingInstruction': function (kwe_c, t6pg3) {
    var rogi6 = this['doc']['createProcessingInstruction'](kwe_c, t6pg3);this['locator'] && L9oigm8(this['locator'], rogi6), L9ylpq3(this, rogi6);
  }, 'ignorableWhitespace': function () {}, 'characters': function (rmgo8i) {
    if (rmgo8i = L9ptl3qy['apply'](this, arguments)) {
      if (this['cdata']) var budv1 = this['doc']['createCDATASection'](rmgo8i);else var budv1 = this['doc']['createTextNode'](rmgo8i);this['currentElement'] ? this['currentElement']['appendChild'](budv1) : /^\s*$/['test'](rmgo8i) && this['doc']['appendChild'](budv1), this['locator'] && L9oigm8(this['locator'], budv1);
    }
  }, 'skippedEntity': function () {}, 'endDocument': function () {
    this['doc']['normalize']();
  }, 'setDocumentLocator': function (ls$3q2) {
    (this['locator'] = ls$3q2) && (ls$3q2['lineNumber'] = 0x0);
  }, 'comment': function (fwe7k) {
    fwe7k = L9ptl3qy['apply'](this, arguments);var bzvd1j = this['doc']['createComment'](fwe7k);this['locator'] && L9oigm8(this['locator'], bzvd1j), L9ylpq3(this, bzvd1j);
  }, 'startCDATA': function () {
    this['cdata'] = !0x0;
  }, 'endCDATA': function () {
    this['cdata'] = !0x1;
  }, 'startDTD': function (m08roi, qytl3p, y6gp) {
    var zb1vjd = this['doc']['implementation'];if (zb1vjd && zb1vjd['createDocumentType']) {
      var pt6ygo = zb1vjd['createDocumentType'](m08roi, qytl3p, y6gp);this['locator'] && L9oigm8(this['locator'], pt6ygo), L9ylpq3(this, pt6ygo);
    }
  }, 'warning': function (mrgio) {
    console['warn']('[xmldom warning]\t' + mrgio, L9ekx9_(this['locator']));
  }, 'error': function (sq2$lf) {
    console['error']('[xmldom error]\t' + sq2$lf, L9ekx9_(this['locator']));
  }, 'fatalError': function (qyls3$) {
    throw console['error']('[xmldom fatalError]\t' + qyls3$, L9ekx9_(this['locator'])), qyls3$;
  } }, 'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'['replace'](/\w+/g, function (t36pyl) {
  L9cw7fek['prototype'][t36pyl] = function () {
    return null;
  };
});var L9oigr8m = require('./tT12tt')['XMLReader'],
    L9na4b5 = exports['DOMImplementation'] = require('./ttDOtt')['DOMImplementation'];exports['XMLSerializer'] = require('./ttDOtt')['XMLSerializer'], exports['DOMParser'] = L9c9exk_;